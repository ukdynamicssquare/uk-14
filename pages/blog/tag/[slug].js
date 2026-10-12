import Head from "next/head";
import TimerModal from "../../../components/TimerModal";
import BlogStyles from "../../../components/blog/BlogStyles";
import {
  BlogFontPreload,
  BlogPageHero,
  ChipNav,
  PagedPostGrid,
} from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import {
  extractArray,
  slimPost,
  tagNameOf,
  tagSlugOf,
} from "../../../helpers/blogData";

const SITE_URL = "https://www.dynamicssquare.co.uk";

// Tags as { name, slug, count }, de-duplicated case-insensitively.
function normaliseTags(tagsRaw) {
  const seen = new Set();
  let list = extractArray(tagsRaw, ["data", "tags"]);
  if (!list.length) list = extractArray(tagsRaw?.data, ["tags"]);

  return list
    .map((tag) => {
      const name = tagNameOf(tag);
      return {
        name,
        slug: (typeof tag === "object" && tag?.slug) || tagSlugOf(name),
        count: (typeof tag === "object" && tag?.count) || 0,
      };
    })
    .filter((tag) => {
      const key = tag.name.toLowerCase();
      if (!tag.name || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

const titleCase = (text) =>
  String(text)
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

export async function getServerSideProps(context) {
  // The API gets the slug as written in the URL (menu links use e.g.
  // /blog/tag/Manufacturing); matching against the tag list is lowercase.
  const rawSlug = String(context.query.slug || "");
  const slug = rawSlug.toLowerCase();

  try {
    const [blogsRaw, tagsRaw] = await Promise.all([
      BlogService.getBlogsByTag(rawSlug.split("-").join(" ")),
      BlogService.getTags(),
    ]);

    const blogs = extractArray(blogsRaw).map(slimPost);

    if (blogs.length === 0) {
      return { notFound: true };
    }

    const tags = normaliseTags(tagsRaw);
    const current = tags.find((t) => t.slug === slug) || {
      name: titleCase(slug.replace(/-/g, " ")),
      slug,
      count: blogs.length,
    };

    return {
      props: { blogs, tags, current },
    };
  } catch (error) {
    console.error("TAG PAGE ERROR:", error);
    return { notFound: true };
  }
}

function TagBlogs({ blogs, tags, current }) {
  const pageUrl = `${SITE_URL}/blog/tag/${current.slug}/`;

  return (
    <div className="bl-page">
      <Head>
        <title>{`${current.name} | Blog`}</title>
        <meta
          name="description"
          content={`Explore blogs about ${current.name.toLowerCase()}.`}
        />
        <link rel="canonical" href={pageUrl} />
      </Head>
      <BlogFontPreload />

      <BlogPageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: "Tags", href: "/blog/tag/" },
          { label: current.name },
        ]}
        eyebrow="Tag"
        title={current.name}
        intro={`Every article we have tagged ${current.name}, newest first.`}
      >
        <ChipNav
          label="Other tags"
          items={tags}
          activeSlug={current.slug}
          hrefFor={(t) => `/blog/tag/${t.slug}/`}
          collapsed={12}
        />
      </BlogPageHero>

      <section className="bl-section" aria-labelledby="tag-articles">
        <div className="container">
          <div className="bl-section-head">
            <div>
              <span className="bl-eyebrow">#{current.name}</span>
              <h2 id="tag-articles">Latest articles</h2>
            </div>
            <span className="bl-count">
              {blogs.length} article{blogs.length === 1 ? "" : "s"}
            </span>
          </div>

          <PagedPostGrid posts={blogs} />
        </div>
      </section>

      <BlogStyles />
      <TimerModal />
    </div>
  );
}

export default TagBlogs;
