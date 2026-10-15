import Head from "next/head";
import { useRouter } from "next/router";
import pageLastmod from "../page-lastmod.json";
import { absoluteUrl, buildPageGraph, jsonLd } from "../helpers/schema";

const DEFAULT_IMAGE = "/img/home-page-og.png";

/**
 * All of a static page's SEO tags from one component:
 *
 *   <PageSeo type="Service" title="..." description="..." image="/img/x.png" faqs={FAQS} />
 *
 * Renders <title>, the meta description, the canonical link, Open Graph and
 * Twitter tags, and the page's JSON-LD schema. Pages don't need their own
 * <Head> for these. og:locale, og:site_name and twitter:site are site-wide in
 * _document.js.
 *
 * - The URL comes from the route; pass `canonical` only when it should point
 *   somewhere else.
 * - dateModified comes from page-lastmod.json, the same dates the sitemap uses.
 * - Share text defaults to the title and description; pass ogTitle /
 *   ogDescription only when the share preview should say something different.
 * - robots / keywords: only when the page needs them; this is the page's
 *   one <Head>, so don't add another next to it.
 * - extraSchema: the page's own JSON-LD (object, @graph or array). Types
 *   generated here are dropped or merged; others (SoftwareApplication,
 *   ItemList, HowTo...) are added to the graph.
 * - children: any other head tags the page needs (e.g. preload links).
 * - type: Service | Article | WebApplication | AboutPage | ContactPage |
 *   CollectionPage | WebPage (see helpers/schema.js).
 */
const PageSeo = ({
  type,
  title,
  description,
  canonical,
  image,
  imageAlt,
  ogTitle,
  ogDescription,
  faqs,
  areaServed,
  robots,
  keywords,
  extraSchema,
  children,
}) => {
  const { pathname } = useRouter();
  const path = pathname === "/" ? "/" : `${pathname}/`;
  const url = canonical || absoluteUrl(path);
  // Spaces in file names break share previews on some sites.
  const imageUrl = absoluteUrl(image || DEFAULT_IMAGE).replace(/ /g, "%20");
  const shareTitle = ogTitle || title;
  const shareDescription = ogDescription || description;
  const dateModified =
    pageLastmod[`pages${pathname}.js`] || pageLastmod[`pages${pathname}/index.js`];

  const graph = buildPageGraph({
    type,
    path,
    title,
    description,
    image,
    faqs,
    areaServed,
    dateModified,
    extraSchema,
  });

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {robots && <meta name="robots" content={robots} />}
      {keywords && <meta name="keywords" content={keywords} />}

      <meta property="og:type" content={type === "Article" ? "article" : "website"} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={shareTitle} />
      <meta property="og:description" content={shareDescription} />
      <meta property="og:image" content={imageUrl} />
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={shareTitle} />
      <meta name="twitter:description" content={shareDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(graph) }}
      />

      {children}
    </Head>
  );
};

export default PageSeo;
