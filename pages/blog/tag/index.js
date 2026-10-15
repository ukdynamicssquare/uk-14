import Head from "next/head";
import Link from "next/link";
import BlogStyles from "../../../components/blog/BlogStyles";
import { blogFontLinks, BlogPageHero } from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import { extractArray, tagNameOf, tagSlugOf } from "../../../helpers/blogData";

const SITE_URL = "https://www.dynamicssquare.co.uk";
const POPULAR_COUNT = 8;

export async function getServerSideProps() {
  try {
    const response = await BlogService.getTags();
    const seen = new Set();

    const tags = extractArray(response, ["data", "tags"])
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

    return { props: { tags } };
  } catch (error) {
    console.error("Error fetching tags:", error);
    return { props: { tags: [] } };
  }
}

function TagsIndex({ tags }) {
  const popular = [...tags].sort((a, b) => b.count - a.count).slice(0, POPULAR_COUNT);
  const alphabetical = [...tags].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="bl-page">
      <Head>
        <title>Blog Tags | Dynamics Square</title>
        <meta
          name="description"
          content="Explore all blog tags and discover articles by topic."
        />
        <link rel="canonical" href={`${SITE_URL}/blog/tag/`} />
        {blogFontLinks()}
      </Head>

      <BlogPageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: "Tags" },
        ]}
        eyebrow="Explore"
        title="Blog tags"
        intro="Find articles by industry and theme. Each tag collects every post we have written on it."
      />

      <section className="bl-section" aria-labelledby="tag-cloud">
        <div className="container">
          {tags.length === 0 ? (
            <div className="bl-empty">
              <i className="bi bi-tags" />
              <p>No tags available right now.</p>
            </div>
          ) : (
            <>
              {popular.some((t) => t.count) && (
                <div className="bl-popular">
                  <h2 className="bl-popular-title">Most used</h2>
                  <div className="bl-popular-grid">
                    {popular.map((tag) => (
                      <Link key={tag.slug} href={`/blog/tag/${tag.slug}/`} className="bl-popular-card">
                        <span className="bl-popular-name">{tag.name}</span>
                        <span className="bl-popular-count">
                          {tag.count} article{tag.count === 1 ? "" : "s"}
                        </span>
                        <i className="bi bi-arrow-up-right" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="bl-section-head">
                <h2 id="tag-cloud">All tags</h2>
                <span className="bl-count">{tags.length} tags</span>
              </div>

              <ul className="bl-topics-list">
                {alphabetical.map((tag) => (
                  <li key={tag.slug}>
                    <Link href={`/blog/tag/${tag.slug}/`} className="bl-topic">
                      {tag.name}
                      {tag.count ? <span className="bl-topic-count">{tag.count}</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <BlogStyles />
      <style jsx global>{`
        .bl-popular {
          margin-bottom: 56px;
        }

        .bl-popular-title {
          margin: 0 0 20px;
          font-size: 22px !important;
          font-weight: 700;
          color: var(--bp-ink);
        }

        .bl-popular-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .bl-popular-card {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 22px 24px;
          background: var(--bp-bg);
          border: 1px solid transparent;
          border-radius: 20px;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }

        .bl-popular-card:hover {
          background: #fff;
          border-color: var(--bp-line);
          transform: translateY(-3px);
        }

        .bl-popular-name {
          padding-right: 24px;
          font-family: var(--bp-display) !important;
          font-size: 17px;
          font-weight: 700;
          color: var(--bp-ink);
        }

        .bl-popular-count {
          font-size: 13px;
          color: var(--bp-muted);
        }

        .bl-popular-card .bi {
          position: absolute;
          top: 22px;
          right: 22px;
          color: var(--bp-red);
          transition: transform 0.2s ease;
        }

        .bl-popular-card:hover .bi {
          transform: translate(2px, -2px);
        }

        @media (max-width: 991px) {
          .bl-popular-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 420px) {
          .bl-popular-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default TagsIndex;
