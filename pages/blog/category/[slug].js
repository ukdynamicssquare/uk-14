import Head from "next/head";
import TimerModal from "../../../components/TimerModal";
import BlogStyles from "../../../components/blog/BlogStyles";
import {
  blogFontLinks,
  BlogPageHero,
  ChipNav,
  PagedPostGrid,
} from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import { extractArray, slimCategory, slimPost } from "../../../helpers/blogData";
import { buildCollectionGraph, jsonLd } from "../../../helpers/schema";

const SITE_URL = "https://www.dynamicssquare.co.uk";

export async function getStaticPaths() {
  try {
    const categories = extractArray(await BlogService.getCategories());

    return {
      paths: categories
        .map((cat) => cat.slug || cat.category_slug)
        .filter(Boolean)
        .map((slug) => ({ params: { slug } })),
      fallback: "blocking",
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";

  const [blogsRaw, categoriesRaw] = await Promise.all([
    BlogService.getBlogsByCategory(slug),
    BlogService.getCategories(),
  ]);

  const blogs = extractArray(blogsRaw).map(slimPost);

  if (blogs.length === 0) {
    return { notFound: true, revalidate: 60 };
  }

  const categories = extractArray(categoriesRaw)
    .map(slimCategory)
    .filter((c) => c.name && c.slug);

  const current =
    categories.find((c) => c.slug === slug) ||
    { name: blogs[0].category, slug, description: "" };

  return {
    props: { blogs, categories, current },
    revalidate: 60,
  };
}

function CategoryBlogs({ blogs, categories, current }) {
  const pageUrl = `${SITE_URL}/blog/category/${current.slug}/`;
  const intro =
    current.description ||
    `Guides, comparisons and news on ${current.name} from the Dynamics Square team.`;

  return (
    <div className="bl-page">
      <Head>
        <title>{`${current.name} Blogs | Dynamics Square`}</title>
        <meta
          name="description"
          content={`Read the latest ${current.name} blogs and insights.`}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${current.name} Blogs | Dynamics Square`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:description" content={`Read the latest ${current.name} blogs and insights.`} />
        <meta property="og:image" content={`${SITE_URL}/img/home-page-og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${current.name} Blogs | Dynamics Square`} />
        <meta name="twitter:description" content={`Read the latest ${current.name} blogs and insights.`} />
        <meta name="twitter:image" content={`${SITE_URL}/img/home-page-og.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              buildCollectionGraph({
                path: `/blog/category/${current.slug}/`,
                title: `${current.name} Blogs | Dynamics Square`,
                description: `Read the latest ${current.name} blogs and insights.`,
                crumbs: [
                  { name: "Blog", path: "/blog/" },
                  { name: current.name, path: `/blog/category/${current.slug}/` },
                ],
                // The grid's first page (PagedPostGrid shows 9 at a time).
                items: blogs.slice(0, 9).map((post) => ({
                  name: post.title,
                  path: `/blog/${post.title_slug}/`,
                })),
              })
            ),
          }}
        />
        {blogFontLinks()}
      </Head>

      <BlogPageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: "Topics", href: "/blog/category/" },
          { label: current.name },
        ]}
        eyebrow="Topic"
        title={current.name}
        intro={intro}
      >
        <ChipNav
          label="Other topics"
          items={categories}
          activeSlug={current.slug}
          hrefFor={(c) => `/blog/category/${c.slug}/`}
        />
      </BlogPageHero>

      <section className="bl-section" aria-labelledby="category-articles">
        <div className="container">
          <div className="bl-section-head">
            <div>
              <span className="bl-eyebrow">{current.name}</span>
              <h2 id="category-articles">Latest articles</h2>
            </div>
            <span className="bl-count">
              {blogs.length} article{blogs.length === 1 ? "" : "s"}
            </span>
          </div>

          <PagedPostGrid
            posts={blogs}
            cardProps={{ showCategory: false }}
          />
        </div>
      </section>

      <BlogStyles />
      <TimerModal />
    </div>
  );
}

export default CategoryBlogs;
