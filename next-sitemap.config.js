const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://www.dynamicssquare.co.uk';
const PAGES_DIR = path.join(__dirname, 'pages');

/**
 * Skip these when walking pages/ — not real routes, or routes whose
 * indexability depends on runtime data rather than static file content.
 */
const IGNORED_FILES = new Set(['_app.js', '_document.js', '_error.js', '404.js']);
const IGNORED_DIRS = new Set(['api']);

/**
 * A page is treated as noindex if its Head sets a robots meta tag containing
 * "noindex" as a literal string (covers the many `-old` / test pages in this
 * repo that were deliberately deindexed). Dynamic robots values (JSX
 * expressions driven by CMS data, e.g. blog posts) can't be detected this
 * way — those are handled separately, per item, in getBlogNoindexExcludes().
 */
const NOINDEX_PATTERN = /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["']/i;

// Returns the route WITHOUT a trailing slash — next-sitemap matches
// `exclude` patterns against raw Next.js route-manifest keys (e.g.
// "/index-old"), which never have a trailing slash even though
// next.config.js's `trailingSlash: true` adds one later when the final
// sitemap <loc> URL is built. A pattern with a trailing slash silently
// matches nothing.
function fileToRoute(relativeFilePath) {
  let route = relativeFilePath.replace(/\\/g, '/').replace(/\.js$/, '');
  if (route.endsWith('/index')) route = route.slice(0, -('/index'.length));
  if (route === 'index') route = '';
  return `/${route}`.replace(/\/{2,}/g, '/');
}

function walkStaticNoindexRoutes(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      walkStaticNoindexRoutes(path.join(dir, entry.name), acc);
      continue;
    }

    if (!entry.name.endsWith('.js') || IGNORED_FILES.has(entry.name)) continue;
    // Dynamic routes ([slug].js etc.) can't be judged from file content alone.
    if (entry.name.includes('[')) continue;

    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(PAGES_DIR, fullPath);
    const content = fs.readFileSync(fullPath, 'utf8');

    if (NOINDEX_PATTERN.test(content)) {
      acc.push(fileToRoute(relativePath));
    }
  }
  return acc;
}

/**
 * Turn `Disallow:` rules from the maintained public/robots.txt into
 * next-sitemap exclude globs, so a page blocked from crawling never ends up
 * listed in the sitemap either. Each rule expands into both the exact route
 * (no trailing slash, matching the manifest key) and a nested-path glob, so
 * e.g. `Disallow: /blog/tag/` excludes both `/blog/tag` and `/blog/tag/foo`.
 */
function robotsDisallowExcludes() {
  const robotsTxt = fs.readFileSync(path.join(__dirname, 'public', 'robots.txt'), 'utf8');

  return robotsTxt
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^disallow:/i.test(line))
    .map((line) => line.replace(/^disallow:/i, '').trim())
    .filter(Boolean)
    .flatMap((rule) => {
      const base = rule.replace(/\/$/, '');
      return base.endsWith('*') ? [base] : [base, `${base}/*`];
    });
}

/**
 * Blog posts carry their own per-item noindex signal from the CMS (see
 * components/BlogSeo.js + pages/blog/[slug].js: `rank === 1` -> noindex).
 * Fetching the list here is the ONLY network call this config makes, and it
 * is intentionally NOT wrapped in a try/catch that swallows the error —
 * see the comment on module.exports.exclude below for why.
 */
const apiBaseUrl = process.env.MERN_API_URL || 'https://blogdsukapi.onrender.com';
const apiKey = process.env.MERN_API_KEY;

// Fetched once per sitemap run and shared by `exclude` (noindex check) and
// `transform` (per-post lastmod).
let blogListPromise;
function getAllBlogs() {
  if (!blogListPromise) blogListPromise = fetchAllBlogs();
  return blogListPromise;
}

async function fetchAllBlogs() {
  // The API silently caps `limit` at 100 per page no matter what's
  // requested, returning a `pagination` object alongside the page of
  // results. A single request (even with limit=5000) only ever sees the
  // first 100 blogs, so this walks every page.
  const blogs = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await fetch(`${apiBaseUrl}/api/public/blogs?limit=100&page=${page}`, {
      headers: {
        'x-api-key': apiKey,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Blog API HTTP ${response.status} while building sitemap excludes`);
    }

    const data = await response.json();
    const pageBlogs = Array.isArray(data) ? data : data?.data || data?.blogs || [];
    blogs.push(...pageBlogs);

    totalPages = data?.pagination?.totalPages || 1;
    page += 1;
  } while (page <= totalPages);

  return blogs;
}

async function getBlogNoindexExcludes() {
  const blogs = await getAllBlogs();

  const slugOf = (b) => b?.title_slug || b?.slug;
  const isValidSlug = (slug) => typeof slug === 'string' && slug.trim() !== '';

  // The list endpoint does not return the `seo` object, so `seo.noIndex` can
  // only be read from each blog's detail endpoint. Fetch them in small
  // batches, retrying on 429, and throw on any other failure so a broken API
  // never silently produces a sitemap that includes noindex blogs.
  const fetchDetail = async (slug) => {
    for (let attempt = 0; attempt < 5; attempt++) {
      const response = await fetch(
        `${apiBaseUrl}/api/public/blogs/slug/${encodeURIComponent(slug)}`,
        { headers: { 'x-api-key': apiKey, 'Content-Type': 'application/json' } }
      );
      if (response.status === 429) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
        continue;
      }
      if (response.status === 404) return null;
      if (!response.ok) {
        throw new Error(`Blog API HTTP ${response.status} for ${slug} while building sitemap excludes`);
      }
      return response.json();
    }
    throw new Error(`Blog API HTTP 429 for ${slug} while building sitemap excludes`);
  };

  const noindexSlugs = new Set(
    blogs.filter((b) => b?.rank === 1).map(slugOf).filter(isValidSlug)
  );

  const slugs = blogs.map(slugOf).filter(isValidSlug);
  const BATCH_SIZE = 8;
  for (let i = 0; i < slugs.length; i += BATCH_SIZE) {
    await Promise.all(
      slugs.slice(i, i + BATCH_SIZE).map(async (slug) => {
        const detail = await fetchDetail(slug);
        const blog = detail?.blog || detail;
        if (blog?.seo?.noIndex === true) noindexSlugs.add(slug);
      })
    );
  }

  return [...noindexSlugs].map((slug) => `/blog/${slug}`);
}

/**
 * next-sitemap's default `autoLastmod` stamps every URL with the build time,
 * so every deploy made the whole site look freshly modified. Instead:
 *  - blog posts use the CMS `updatedAt` (falling back to `publishedAt`);
 *  - /blog uses the newest post's date;
 *  - static pages use the date of the last git commit that touched their
 *    file under pages/;
 *  - anything else gets no <lastmod> rather than a fake one.
 */
function toRouteFileMap(dir = PAGES_DIR, acc = new Map()) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (IGNORED_DIRS.has(entry.name)) continue;
      toRouteFileMap(path.join(dir, entry.name), acc);
      continue;
    }
    if (!entry.name.endsWith('.js') || IGNORED_FILES.has(entry.name) || entry.name.includes('[')) continue;
    const relativePath = path.relative(PAGES_DIR, path.join(dir, entry.name));
    acc.set(fileToRoute(relativePath), `pages/${relativePath.replace(/\\/g, '/')}`);
  }
  return acc;
}

function git(args) {
  return execFileSync('git', args, { cwd: __dirname, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();
}

// Map of "pages/foo.js" -> ISO date of the last commit touching it.
function getGitFileDates() {
  const dates = new Map();
  try {
    // Vercel clones shallowly; a shallow boundary commit looks like it added
    // every file, which would give them all the same (wrong) date again.
    if (git(['rev-parse', '--is-shallow-repository']) === 'true') {
      try {
        git(['fetch', '--unshallow', '--quiet']);
      } catch (error) {
        console.warn('[sitemap] git fetch --unshallow failed; dates beyond the shallow history are omitted.');
      }
    }

    const shallowFile = git(['rev-parse', '--git-path', 'shallow']);
    const boundary = new Set(
      fs.existsSync(path.resolve(__dirname, shallowFile))
        ? fs.readFileSync(path.resolve(__dirname, shallowFile), 'utf8').split('\n').filter(Boolean)
        : []
    );

    const log = git(['log', '--format=__C__%H %cI', '--name-only', '--', 'pages']);
    let hash = null;
    let date = null;
    for (const line of log.split('\n')) {
      if (line.startsWith('__C__')) {
        [hash, date] = line.slice(5).split(' ');
      } else if (line && !dates.has(line) && !boundary.has(hash)) {
        dates.set(line, date); // log is newest-first, so first hit is the latest change
      }
    }
  } catch (error) {
    console.warn('[sitemap] Could not read git history for lastmod:', error.message);
  }
  return dates;
}

let lastmodLookupPromise;
function getLastmodLookup() {
  if (!lastmodLookupPromise) {
    lastmodLookupPromise = (async () => {
      const blogs = await getAllBlogs();
      const blogDates = new Map();
      let newestBlog;
      for (const b of blogs) {
        const slug = b?.title_slug || b?.slug;
        const date = b?.updatedAt || b?.publishedAt;
        if (!slug || !date) continue;
        const iso = new Date(date).toISOString();
        blogDates.set(`/blog/${slug}`, iso);
        if (!newestBlog || iso > newestBlog) newestBlog = iso;
      }
      if (newestBlog) blogDates.set('/blog', newestBlog);

      const routeFiles = toRouteFileMap();
      const fileDates = getGitFileDates();

      return (route) => {
        if (blogDates.has(route)) return blogDates.get(route);
        const file = routeFiles.get(route);
        const date = file && fileDates.get(file);
        return date ? new Date(date).toISOString() : undefined;
      };
    })();
  }
  return lastmodLookupPromise;
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: SITE_URL,
  generateRobotsTxt: false, // public/robots.txt is hand-maintained; this only reads it.
  sitemapSize: 7000,
  generateIndexSitemap: false, // write a single public/sitemap.xml instead of an index + sitemap-0.xml
  output: 'standalone', // matches next.config.js `output: "standalone"`
  autoLastmod: false, // see getLastmodLookup() — real per-page dates come from transform

  transform: async (config, route) => {
    const lastmodFor = await getLastmodLookup();
    return {
      loc: route,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: lastmodFor(route),
      alternateRefs: config.alternateRefs ?? [],
    };
  },

  exclude: async () => {
    // IMPORTANT: this function fetches the blog API. If that call throws
    // (network error, API down, non-2xx), the throw propagates out of
    // `next-sitemap` and the whole sitemap generation run fails with a
    // non-zero exit code. That is intentional: scripts/postbuild-sitemap.js
    // (the actual "postbuild" entry point) catches that failure and leaves
    // the previously committed public/sitemap*.xml untouched instead of
    // overwriting a good sitemap with an empty/partial one just because the
    // blog API had a bad moment during this particular build.
    const staticNoindex = walkStaticNoindexRoutes(PAGES_DIR);
    const robotsDisallow = robotsDisallowExcludes();
    const blogNoindex = await getBlogNoindexExcludes();

    // pages/blog-old is a noindexed backup of the old blog design.
    const blogOldBackup = ['/blog-old', '/blog-old/*'];

    return [...staticNoindex, ...robotsDisallow, ...blogNoindex, ...blogOldBackup];
  },
};
