// JSON-LD builders shared by page and blog schema. Every node links back to
// the site-wide Organization and WebSite in _app.js by @id, so Google and AI
// search see one connected entity graph instead of disconnected snippets.

export const SITE_URL = "https://www.dynamicssquare.co.uk";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

// Hub pages that appear as a middle step in breadcrumbs.
const CRUMB_LABELS = {
  "/products/": "Products",
  "/products/dynamics-365-business-central/": "Dynamics 365 Business Central",
  "/products/dynamics-365-supply-chain-management/": "Dynamics 365 Supply Chain Management",
  "/products/microsoft-dynamics-365/": "Microsoft Dynamics 365",
  "/products/microsoft-dynamics-365-customer-service/": "Dynamics 365 Customer Service",
  "/products/microsoft-dynamics-365-sales/": "Dynamics 365 Sales",
  "/products/microsoft-power-bi/": "Microsoft Power BI",
  "/our-services/": "Our Services",
  "/industries/": "Industries",
  "/industries/manufacturing/": "Manufacturing",
  "/case-studies/": "Case Studies",
  "/location/": "Locations",
  "/guides/": "Guides",
  "/ebook/": "eBooks",
  "/white-papers/": "White Papers",
  "/tools/": "Tools",
  "/blog/": "Blog",
};

const BRAND_SUFFIX = /\s*(\||-|–)\s*Dynamics Square.*$/i;

// "Dynamics 365 Finance | Dynamics Square UK" -> "Dynamics 365 Finance"
export function shortName(title = "") {
  const clean = String(title).replace(/\s+/g, " ").trim();
  const pipe = clean.split(" | ")[0];
  return pipe.replace(BRAND_SUFFIX, "").trim() || clean;
}

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}

export function breadcrumbNode(path, name) {
  const items = [{ name: "Home", url: `${SITE_URL}/` }];
  const segments = path.split("/").filter(Boolean);

  for (let i = 1; i < segments.length; i += 1) {
    const prefix = `/${segments.slice(0, i).join("/")}/`;
    const label = CRUMB_LABELS[prefix];
    if (label) items.push({ name: label, url: absoluteUrl(prefix) });
  }
  if (segments.length) items.push({ name, url: absoluteUrl(path) });

  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

const stripHtml = (html = "") =>
  String(html)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#39;|&rsquo;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ")
    .trim();

export function faqNode(url, faqs = []) {
  const items = faqs
    .map((f) => ({ q: stripHtml(f.question || f.q), a: stripHtml(f.answer || f.a) }))
    .filter((f) => f.q && f.a);
  if (!items.length) return null;

  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// type: Service | Article | WebApplication | AboutPage | ContactPage |
//       CollectionPage | WebPage
export function buildPageGraph({
  type = "WebPage",
  path,
  title,
  description,
  image,
  faqs,
  dateModified,
  areaServed,
  extraSchema,
}) {
  const url = absoluteUrl(path);
  const name = shortName(title);
  const pageId = `${url}#webpage`;
  const isHome = path === "/";

  const pageType = ["AboutPage", "ContactPage", "CollectionPage"].includes(type)
    ? type
    : "WebPage";

  const page = {
    "@type": pageType,
    "@id": pageId,
    url,
    name: String(title).replace(/\s+/g, " ").trim(),
    description,
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-GB",
    ...(isHome ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
    ...(type === "AboutPage" || type === "ContactPage" ? { mainEntity: { "@id": ORG_ID } } : {}),
    ...(dateModified ? { dateModified } : {}),
  };

  const graph = [page];

  if (type === "Service") {
    page.mainEntity = { "@id": `${url}#service` };
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      description,
      url,
      provider: { "@id": ORG_ID },
      areaServed: areaServed
        ? { "@type": "City", name: areaServed }
        : { "@type": "Country", name: "United Kingdom" },
      ...(image ? { image: absoluteUrl(image) } : {}),
    });
  }

  if (type === "Article") {
    page.mainEntity = { "@id": `${url}#article` };
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: name,
      description,
      mainEntityOfPage: { "@id": pageId },
      author: { "@id": ORG_ID },
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
      ...(image ? { image: absoluteUrl(image) } : {}),
      ...(dateModified ? { dateModified } : {}),
    });
  }

  if (type === "WebApplication") {
    page.mainEntity = { "@id": `${url}#app` };
    graph.push({
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name,
      description,
      url,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Any",
      offers: { "@type": "Offer", price: "0", priceCurrency: "GBP" },
      provider: { "@id": ORG_ID },
    });
  }

  if (!isHome) graph.push(breadcrumbNode(path, name));

  const faq = faqNode(url, faqs);
  if (faq) graph.push(faq);

  mergeExtraSchema(graph, extraSchema);

  return { "@context": "https://schema.org", "@graph": graph };
}

// Types buildPageGraph always writes itself; a page's own copies are dropped.
const PAGE_OWNED_TYPES = new Set(["WebSite", "Organization", "BreadcrumbList", "ImageObject", "ListItem"]);
// Fields the generated node keeps, whatever the page's own schema says.
const KEEP_GENERATED = new Set(["@context", "@type", "@id", "url", "name", "headline", "description", "provider", "publisher", "isPartOf", "breadcrumb", "mainEntity", "mainEntityOfPage"]);

function typesOf(node) {
  return [].concat(node?.["@type"] || []);
}

// Adds a page's hand-written schema to the generated graph:
//  - WebSite / Organization / BreadcrumbList are dropped (generated already),
//  - WebPage and a node of the same type as the generated main entity
//    (Service, Article...) are merged into it, adding fields it lacks
//    (offers, audience, mentions...),
//  - every other type (SoftwareApplication, ItemList, HowTo, FAQPage...) is
//    kept as its own node.
function mergeExtraSchema(graph, extraSchema) {
  if (!extraSchema) return;
  const nodes = []
    .concat(extraSchema)
    .flatMap((item) => (Array.isArray(item?.["@graph"]) ? item["@graph"] : [item]))
    .filter((node) => node && typeof node === "object");

  for (const { "@context": _context, ...node } of nodes) {
    const types = typesOf(node);
    if (!types.length || types.every((t) => PAGE_OWNED_TYPES.has(t))) continue;

    const mergeable = types.find((t) => ["WebPage", "Service", "Article", "WebApplication"].includes(t));
    const target =
      mergeable &&
      graph.find((g) =>
        mergeable === "WebPage" ? String(g["@id"]).endsWith("#webpage") : typesOf(g).includes(mergeable)
      );
    if (target) {
      for (const [key, value] of Object.entries(node)) {
        if (!KEEP_GENERATED.has(key) && target[key] === undefined) target[key] = value;
      }
      continue;
    }

    // One FAQPage per page: the generated one wins if both exist.
    if (types.includes("FAQPage") && graph.some((g) => typesOf(g).includes("FAQPage"))) continue;

    graph.push(node);
  }
}

/* =========================================================
   BLOG
========================================================= */

export function authorSlug(name = "") {
  return String(name).toLowerCase().trim().replace(/\s+/g, "-");
}

// BlogPosting + WebPage + BreadcrumbList for one post, built from API fields
// so every post gets complete schema whatever was entered in the CMS.
export function buildBlogPostGraph({
  slug,
  title,
  description,
  image,
  datePublished,
  dateModified,
  author,
  category,
}) {
  const url = absoluteUrl(`/blog/${slug}/`);
  const pageId = `${url}#webpage`;

  let authorNode = { "@id": ORG_ID };
  if (author?.name) {
    const authorUrl = absoluteUrl(`/blog/author/${authorSlug(author.name)}/`);
    const sameAs = (author.sameAs || [])
      .filter(Boolean)
      .map((link) => (/^https?:\/\//.test(link) ? link : `https://${link}`));
    authorNode = {
      "@type": "Person",
      "@id": `${authorUrl}#person`,
      name: author.name,
      url: authorUrl,
      ...(author.image ? { image: author.image } : {}),
      ...(sameAs.length ? { sameAs } : {}),
      worksFor: { "@id": ORG_ID },
    };
  }

  const crumbs = [
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: absoluteUrl("/blog/") },
  ];
  if (category?.name && category?.slug) {
    crumbs.push({
      name: category.name,
      url: absoluteUrl(`/blog/category/${category.slug}/`),
    });
  }
  crumbs.push({ name: title, url });

  const graph = [
    {
      "@type": "WebPage",
      "@id": pageId,
      url,
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-GB",
      ...(image ? { primaryImageOfPage: { "@type": "ImageObject", url: image } } : {}),
    },
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: title,
      description,
      url,
      mainEntityOfPage: { "@id": pageId },
      isPartOf: { "@id": WEBSITE_ID },
      author: authorNode,
      publisher: { "@id": ORG_ID },
      inLanguage: "en-GB",
      ...(image ? { image: [image] } : {}),
      ...(datePublished ? { datePublished } : {}),
      ...(dateModified || datePublished
        ? { dateModified: dateModified || datePublished }
        : {}),
      ...(category?.name ? { articleSection: category.name } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: crumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    },
  ];

  return { "@context": "https://schema.org", "@graph": graph };
}

// CollectionPage for listing pages (blog home, category, authors): the page,
// its breadcrumb, and an ItemList of the entries actually shown on it.
// crumbs: [{ name, path }] after Home, ending with this page.
export function buildCollectionGraph({ path, title, description, crumbs = [], items = [] }) {
  const url = absoluteUrl(path);
  const trail = [{ name: "Home", path: "/" }, ...crumbs];

  const graph = [
    {
      "@type": "CollectionPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": `${url}#breadcrumb` },
      inLanguage: "en-GB",
      ...(items.length ? { mainEntity: { "@id": `${url}#list` } } : {}),
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: trail.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.path),
      })),
    },
  ];

  if (items.length) {
    graph.push({
      "@type": "ItemList",
      "@id": `${url}#list`,
      itemListElement: items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        url: absoluteUrl(item.path),
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

// Types the site now generates itself. The CMS copies are dropped so a post
// never carries two competing article, author or breadcrumb nodes.
const GENERATED_TYPES = new Set([
  "Article",
  "BlogPosting",
  "NewsArticle",
  "WebPage",
  "WebSite",
  "Organization",
  "Person",
  "BreadcrumbList",
]);

// CMS editors sometimes paste line breaks inside strings, which is invalid
// JSON. Control characters are whitespace between tokens, so swapping them
// for spaces repairs strings without changing anything else.
function parseLooseJson(value) {
  if (value && typeof value === "object") return value;
  if (typeof value !== "string") return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    try {
      return JSON.parse(value.replace(/[\u0000-\u001F]+/g, " "));
    } catch (stillBroken) {
      return null;
    }
  }
}

// Keeps only the extra schema a writer added in the CMS (FAQPage, HowTo,
// VideoObject...), repaired and as JSON-LD strings. Unparseable blocks are
// dropped rather than shipped broken.
export function cmsExtraSchemas(blocks = [], fallbackImage = "") {
  const out = [];

  for (const block of blocks) {
    const parsed = parseLooseJson(block);
    if (!parsed) continue;

    const nodes = Array.isArray(parsed)
      ? parsed
      : Array.isArray(parsed["@graph"])
        ? parsed["@graph"]
        : [parsed];

    const extras = nodes
      .filter((node) => node && typeof node === "object")
      .filter((node) => ![].concat(node["@type"]).some((t) => GENERATED_TYPES.has(t)))
      .map(({ "@context": _context, ...node }) => {
        if (typeof node.image === "string" && node.image.startsWith("data:")) {
          // Base64 images bloat the page by 100s of KB.
          return fallbackImage ? { ...node, image: fallbackImage } : (({ image, ...rest }) => rest)(node);
        }
        return node;
      });

    if (extras.length) {
      out.push(
        jsonLd(
          extras.length === 1
            ? { "@context": "https://schema.org", ...extras[0] }
            : { "@context": "https://schema.org", "@graph": extras }
        )
      );
    }
  }

  return out;
}

// Escapes "<" so CMS or page text can never close the <script> tag early.
export function jsonLd(data) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
