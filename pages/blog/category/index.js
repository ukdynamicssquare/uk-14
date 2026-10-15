import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TimerModal from "../../../components/TimerModal";
import BlogStyles from "../../../components/blog/BlogStyles";
import { blogFontLinks, BlogPageHero } from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import { extractArray, slimCategory, slimPost } from "../../../helpers/blogData";
import { getBlogImageUrl, isOptimizableImage } from "../../../helpers/blogImage";

const SITE_URL = "https://www.dynamicssquare.co.uk";

export async function getStaticProps() {
  // Same rule as pages/blog/index.js: let API failures throw so a build
  // fails (or ISR keeps the last good page) instead of publishing an empty
  // topics page.
  const [categoriesRaw, allBlogsRaw] = await Promise.all([
    BlogService.getCategories(),
    BlogService.getAllBlogs(),
  ]);

  const posts = extractArray(allBlogsRaw).map(slimPost);

  // Post count and newest post image per category. Posts come newest first,
  // so the first image seen for a category is its latest.
  const stats = {};
  for (const post of posts) {
    if (!post.category_slug) continue;
    const s = (stats[post.category_slug] ||= { count: 0, image: "" });
    s.count += 1;
    if (!s.image && post.image) s.image = post.image;
  }

  const categories = extractArray(categoriesRaw)
    .map(slimCategory)
    .filter((c) => c.name && c.slug)
    .map((c) => ({
      ...c,
      count: stats[c.slug]?.count || 0,
      image: stats[c.slug]?.image || "",
    }))
    .filter((c) => c.count > 0)
    .sort((a, b) => b.count - a.count);

  return {
    props: { categories },
    revalidate: 60,
  };
}

function CategoriesIndex({ categories }) {
  const pageUrl = `${SITE_URL}/blog/category/`;

  return (
    <div className="bl-page">
      <Head>
        <title>Blog Topics | Dynamics Square</title>
        <meta
          name="description"
          content="Browse Dynamics Square blog articles by topic: Business Central, Dynamics 365, CRM, ERP, Power BI and more."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog Topics | Dynamics Square" />
        <meta property="og:url" content={pageUrl} />
        {blogFontLinks()}
      </Head>

      <BlogPageHero
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog/" },
          { label: "Topics" },
        ]}
        eyebrow="Explore"
        title="Blog topics"
        intro="Pick a topic to see every guide, comparison and update we have published on it."
      />

      <section className="bl-section" aria-labelledby="all-topics">
        <div className="container">
          <div className="bl-section-head">
            <h2 id="all-topics">All topics</h2>
            <span className="bl-count">{categories.length} topics</span>
          </div>

          {categories.length > 0 ? (
            <div className="row g-4">
              {categories.map((c, i) => {
                const image = getBlogImageUrl(c.image);

                return (
                  <div className="col-sm-6 col-lg-4 col-xl-3" key={c.slug}>
                    <Link href={`/blog/category/${c.slug}/`} className="bl-topic-card">
                      <span className="bl-topic-card-media">
                        {image ? (
                          <Image
                            src={image}
                            alt=""
                            width={640}
                            height={360}
                            sizes="(max-width: 575px) 100vw, (max-width: 991px) 50vw, 320px"
                            priority={i < 4}
                            unoptimized={!isOptimizableImage(image)}
                            className="bl-topic-card-img"
                          />
                        ) : (
                          <span className="bl-img-placeholder" />
                        )}
                        <span className="bl-topic-card-count">
                          {c.count} article{c.count === 1 ? "" : "s"}
                        </span>
                      </span>

                      <span className="bl-topic-card-body">
                        <span className="bl-topic-card-name">{c.name}</span>
                        {c.description && (
                          <span className="bl-topic-card-text">{c.description}</span>
                        )}
                        <span className="bl-topic-card-link">
                          View articles <i className="bi bi-arrow-right" />
                        </span>
                      </span>
                    </Link>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bl-empty">
              <i className="bi bi-collection" />
              <p>No topics yet.</p>
            </div>
          )}
        </div>
      </section>

      <BlogStyles />
      <style jsx global>{`
        .bl-topic-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--bp-line);
          border-radius: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .bl-topic-card:hover {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 24px 48px rgba(11, 19, 36, 0.12);
        }

        .bl-topic-card-media {
          position: relative;
          display: block;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: var(--bp-bg);
        }

        .bl-topic-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bl-topic-card:hover .bl-topic-card-img {
          transform: scale(1.06);
        }

        .bl-topic-card-count {
          position: absolute;
          left: 14px;
          bottom: 14px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 600;
          color: var(--bp-ink);
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(11, 19, 36, 0.15);
        }

        .bl-topic-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex: 1;
          padding: 20px 22px 22px;
        }

        .bl-topic-card-name {
          font-family: var(--bp-display) !important;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--bp-ink);
        }

        .bl-topic-card:hover .bl-topic-card-name {
          color: var(--bp-red);
        }

        .bl-topic-card-text {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 14px;
          line-height: 1.6;
          color: var(--bp-muted);
        }

        .bl-topic-card-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--bp-red);
        }

        .bl-topic-card-link i {
          transition: transform 0.2s ease;
        }

        .bl-topic-card:hover .bl-topic-card-link i {
          transform: translateX(4px);
        }
      `}</style>
      <TimerModal />
    </div>
  );
}

export default CategoriesIndex;
