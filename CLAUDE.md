# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for Dynamics Square UK (https://www.dynamicssquare.co.uk). Next.js 14 **Pages Router**, React 18, plain JavaScript (no TypeScript), Bootstrap/react-bootstrap plus CSS Modules. Deployed on Vercel; Node 22.

## Git Rules

- **Never run `git push` or `git pull` without the user's explicit permission.** Ask first, every time.
- Don't commit without permission either, and don't offer to commit. The user handles git.

## New Page Rule

**Every new page must be `noindex, nofollow`** until the user says it can go live.

Write the robots tag as a literal `<meta>` element, because the sitemap only skips pages whose source matches `<meta name="robots" content="...noindex...">` (`NOINDEX_PATTERN` in `next-sitemap.config.js`):

```jsx
// Page using PageSeo: put the tag in as a child, and don't also pass the robots prop
<PageSeo type="Service" title="..." description="...">
  <meta name="robots" content="noindex, nofollow" />
</PageSeo>

// Page with its own <Head>
<Head>
  <meta name="robots" content="noindex, nofollow" />
</Head>
```

PageSeo's `robots="noindex, nofollow"` prop does set the tag on the page, but the sitemap check doesn't see it, so the page still ends up in the sitemap.

## Key Technologies

- **Framework:** Next.js 14.2 (Pages Router), React 18.3, JavaScript (no TypeScript)
- **Runtime / hosting:** Node 22, Vercel (`output: "standalone"`)
- **Styling:** Bootstrap 5 + react-bootstrap, bootstrap-icons, CSS Modules, `styled-jsx`
- **Animation / scroll:** GSAP, Lenis, Locomotive Scroll, Swiper
- **Content:** headless MERN blog API (external), rendered with `html-react-parser`
- **Forms:** EmailJS, react-google-recaptcha, react-phone-input-2
- **SEO:** next-sitemap, JSON-LD built in `helpers/schema.js`
- **Other:** axios, jsPDF (migration assessment report), react-player / react-modal-video, react-cookie-consent, react-top-loading-bar
- **Analytics (in `_app.js`):** Google Analytics, Google Tag Manager, Microsoft Clarity, Apollo, Zoho

## Commands

```bash
npm run dev            # dev server on :3000
npm run build          # next build, then postbuild regenerates the sitemap (scripts/postbuild-sitemap.js)
npm start              # serve the production build
npm run sitemap:dates  # rebuild page-lastmod.json from git history
```

- There is no test suite.
- `npm run lint` (`next lint`) is broken: ESLint 9 + eslint-config-next 16 with a legacy `.eslintrc.json`. `next.config.js` sets `eslint.ignoreDuringBuilds`. To check a change, compile the file (Babel/`next build`) and request the page from the dev server.
- `npm install` runs `prepare`, which sets `core.hooksPath` to `.githooks`. The pre-commit hook runs `node scripts/page-lastmod.js --staged` to stamp edited page files in `page-lastmod.json`.

## Environment

`.env.local` holds `MERN_API_URL`, `MERN_API_KEY` (blog CMS), `NEXT_PUBLIC_BACKEND_URL`, and `LICENSING_API_URL`. Blog builds and the sitemap need `MERN_API_KEY`.

## Project Structure

```
pages/                      # Pages Router: one file per route
├── _app.js                 # Global CSS, layout switch, analytics scripts, Organization schema
├── _document.js            # Site-wide <html>/<head> tags
├── index.js                # Homepage
├── blog/                   # Blog listing, [slug] posts, author/category/tag pages (ISR)
├── case-studies/           # Case study pages + listing
├── products/               # Product pages
├── industries/             # Industry pages
├── our-services/           # Service pages
├── tools/                  # Calculators (licensing, ERP cost), ERP comparison, migration assessment
└── api/                    # Server-side proxies (blog CMS, licensing, migration)
components/                 # Shared UI: header/footer, forms, PageSeo, SiteImage, blog parts
helpers/                    # Blog API fetchers, JSON-LD schema builders, image alt rules
hooks/                      # Scroll/animation hooks (GSAP, Locomotive)
styles/                     # globals.css, fonts.css, per-page CSS Modules
public/                     # img/, fonts/, pdf/, robots.txt, llms.txt (sitemap*.xml written here at build)
scripts/                    # postbuild-sitemap, page-lastmod, fix-image-alts
backup/, backups/           # Pre-change snapshots (not live)
next.config.js              # Images, headers, trailingSlash
next-sitemap.config.js      # Sitemap generation and noindex excludes
vercel.json                 # 301 redirects
page-lastmod.json           # Per-page last-modified dates (sitemap + schema)
```

## Architecture

### Routing and layout
- Every page is a file under `pages/` (about 270 static routes). `trailingSlash: true` is set, so links and canonicals end in `/`.
- `pages/_app.js` holds the global Organization JSON-LD and the analytics scripts (GA, GTM, Clarity, Apollo, Zoho). It wraps pages in `components/Layouts.js` (HeaderWork + FooterNew), except routes in its `landingRoutes` array, which render without the layout. A page can also set `Page.noHeader` / `Page.noFooter` statics to drop one.
- Redirects live in `vercel.json` (not `next.config.js`). Add a 301 there when renaming or moving a page.
- `next.config.js` sets security headers, cache headers, and `X-Robots-Tag: noindex` for backup routes (`/blog-old`, `/about-us-old`).

### Old and backup files
Many `*-old.js`, `*copy.js`, `*Back.js`, and `-new` / `-premium` variant files sit beside the live ones in `pages/` and `components/`. Check which file a route or import actually uses before editing. Copies are marked `noindex` in their `<Head>` and are kept out of the sitemap. `backup/` and `backups/` hold pre-change snapshots. `pages/blog-old` is a frozen backup of the old blog design.

### Blog (headless CMS)
- Content comes from an external MERN API (`MERN_API_URL`, default `https://blogdsukapi.onrender.com`) using an `x-api-key` header.
- `helpers/blogApi.js` → `fetchBlogApi` is the server-side fetcher. It retries on 429, returns `null` only for 404, and **throws** for every other failure. `getStaticProps` must let an API failure fail the build or ISR revalidation instead of rendering an empty page.
- `pages/blog/index.js` and `pages/blog/[slug].js` use ISR (`revalidate: 60`; `[slug]` uses `fallback: "blocking"`). Author, category, and tag listings are under `pages/blog/{author,category,tag}`.
- `pages/api/public/blogs/[[...path]].js` and `pages/api/blog-list.js` proxy the CMS for client-side calls (`helpers/blogClient.js`).

### Other API routes (server-side proxies)
- `pages/api/licensing/[...path].js` proxies `LICENSING_API_URL` (used by the licensing calculator, `components/LicenceRateCard.js`).
- `pages/api/migration/[...path].js` proxies the migration-assessment API, because the upstream API only accepts a fixed list of browser origins.

### SEO system
- **`components/PageSeo.js`** is the standard SEO component for static pages. It renders the title, description, canonical (taken from the route), OG/Twitter tags, and JSON-LD, all in one `<Head>`. Props: `type` (Service | Article | WebApplication | AboutPage | ContactPage | CollectionPage | WebPage), `faqs`, `extraSchema`, `robots`, and `children` for other head tags. Don't add a second `<Head>` with the same tags beside it.
- **`helpers/schema.js`** builds the JSON-LD graphs (`buildPageGraph`, `buildBlogPostGraph`, `buildCollectionGraph`, `faqNode`, `breadcrumbNode`). Pick the schema type that matches the page's actual content.
- `dateModified` and sitemap `<lastmod>` both come from **`page-lastmod.json`**, a committed file because Vercel builds from a shallow clone. The pre-commit hook keeps it current.
- **Sitemap**: `next-sitemap.config.js` excludes:
  - pages whose source contains a literal `noindex` robots meta tag;
  - paths disallowed in `public/robots.txt`;
  - blog posts the CMS flags noindex (`rank === 1` or `seo.noIndex`).

  `scripts/postbuild-sitemap.js` backs up the existing sitemap files and restores them if the new ones fail or look too small. It always exits 0.
- `public/llms.txt` and `public/llms-full.txt` are maintained by hand.

### Images
- Use `components/SiteImage.js` (wraps `next/image`) for new images. It applies the alt-text rules in `helpers/imageAlt.js`: decorative shapes/icons get `alt=""`, and known logos get their brand name. Pass `priority` for hero images.
- Remote image hosts must be listed in `images.remotePatterns` in `next.config.js`.
- `scripts/fix-image-alts.js` is a bulk alt-text fixer.

### Styling and animation
- Global CSS is imported in `_app.js` (Bootstrap, bootstrap-icons, `styles/fonts.css`, `styles/globals.css`).
- Newer pages use their own CSS Module in `styles/` (e.g. `styles/caseStudyLogisticUkPremium.module.css`). Many older pages use inline `<style jsx>` or global classes.
- Animation uses GSAP, Lenis, Locomotive Scroll, and Swiper. Scroll hooks are in `hooks/`.

### Forms
- Lead forms (`components/Form*.js`, `MultiStepForm*.js`, `LeadCaptureForm.js`, and others) use reCAPTCHA and EmailJS. Many variants exist, so confirm which one a page imports.
- `helpers/anySubmissionSucceeded.js` sends each submission by EmailJS and to the mail portal at the same time, and counts it as successful if either one works.

### Case studies
- Pages live in `pages/case-studies/`, and `pages/case-studies/index.js` is the listing.
- Named-client case studies use `components/CaseStudyClientCard.js`.
