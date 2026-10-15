import Head from "next/head";
import Link from "next/link";
import TimerModal from "../../../components/TimerModal";
import BlogStyles from "../../../components/blog/BlogStyles";
import { Avatar, blogFontLinks, BlogPageHero } from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import { extractArray, extractStr, slimAuthor } from "../../../helpers/blogData";
import { buildCollectionGraph, jsonLd } from "../../../helpers/schema";

const SITE_URL = "https://www.dynamicssquare.co.uk";
const PAGE_URL = `${SITE_URL}/blog/author/`;
const DESCRIPTION =
  "Meet the authors and experts behind Dynamics Square. Explore insights, guides, news and articles from our experienced authors.";

export async function getStaticProps() {
  const [authorsRaw, allBlogsRaw] = await Promise.all([
    BlogService.getAuthors(),
    BlogService.getAllBlogs(),
  ]);

  // Article count per author name (posts carry the author's name).
  const counts = {};
  for (const post of extractArray(allBlogsRaw)) {
    const name = extractStr(post.author).toLowerCase();
    if (name) counts[name] = (counts[name] || 0) + 1;
  }

  const authors = extractArray(authorsRaw)
    .map(slimAuthor)
    .filter((a) => a.name && a.slug)
    .map(({ name, slug, avatar, designation }) => ({
      name,
      slug,
      avatar,
      designation,
      count: counts[name.toLowerCase()] || 0,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    props: { authors },
    revalidate: 60,
  };
}

function AuthorsList({ authors }) {
  return (
    <div className="bl-page">
      <Head>
        <title>Blog Authors | Dynamics Square</title>
        <meta name="description" content={DESCRIPTION} />
        <meta
          name="keywords"
          content="Dynamics Square authors, blog authors, Microsoft Dynamics authors, Business Central authors, Dynamics 365 authors, ERP experts"
        />
        <meta name="author" content="Dynamics Square" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="googlebot"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <link rel="canonical" href={PAGE_URL} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Blog Authors | Dynamics Square" />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:image" content={`${SITE_URL}/img/d360-banner.png`} />
        <meta property="og:image:alt" content="Dynamics Square Blog Authors" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog Authors | Dynamics Square" />
        <meta name="twitter:description" content="Meet the authors and experts behind Dynamics Square." />
        <meta name="twitter:image" content={`${SITE_URL}/img/d360-banner.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              buildCollectionGraph({
                path: "/blog/author/",
                title: "Blog Authors | Dynamics Square",
                description: DESCRIPTION,
                crumbs: [
                  { name: "Blog", path: "/blog/" },
                  { name: "Authors", path: "/blog/author/" },
                ],
                items: authors.map((a) => ({
                  name: a.name,
                  path: `/blog/author/${a.slug}/`,
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
          { label: "Authors" },
        ]}
        eyebrow="Dynamics Square Blog"
        title="Meet our authors"
        intro="The consultants and writers behind our guides, comparisons and Microsoft Dynamics 365 news."
      />

      <section className="bl-section" aria-labelledby="authors-title">
        <div className="container">
          <div className="bl-section-head">
            <div>
              <span className="bl-eyebrow">Our experts</span>
              <h2 id="authors-title">Authors</h2>
            </div>
            <span className="bl-count">
              {authors.length} author{authors.length === 1 ? "" : "s"}
            </span>
          </div>

          {authors.length > 0 ? (
            <div className="bl-authors-grid">
              {authors.map((author, i) => (
                <Link
                  key={author.slug}
                  href={`/blog/author/${author.slug}/`}
                  className="bl-author-card"
                >
                  <Avatar
                    name={author.name}
                    src={author.avatar}
                    size={104}
                    priority={i < 4}
                    className="bl-author-card-photo"
                  />
                  <span className="bl-author-card-name">{author.name}</span>
                  {author.designation && (
                    <span className="bl-author-card-role">{author.designation}</span>
                  )}
                  <span className="bl-author-card-foot">
                    <span>
                      {author.count} article{author.count === 1 ? "" : "s"}
                    </span>
                    <i className="bi bi-arrow-right" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bl-empty">
              <i className="bi bi-people" />
              <p>We couldn&apos;t find any authors at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <BlogStyles />
      <style jsx global>{`
        .bl-authors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .bl-author-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 32px 24px 24px;
          text-align: center;
          background: #fff;
          border: 1px solid var(--bp-line);
          border-radius: 24px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }

        .bl-author-card:hover {
          transform: translateY(-6px);
          border-color: transparent;
          box-shadow: 0 24px 48px rgba(11, 19, 36, 0.12);
        }

        .bl-author-card-photo {
          margin-bottom: 18px;
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px var(--bp-line);
          transition: box-shadow 0.3s ease;
        }

        .bl-author-card:hover .bl-author-card-photo {
          box-shadow: 0 0 0 2px var(--bp-red);
        }

        .bl-author-card-name {
          font-family: var(--bp-display) !important;
          font-size: 19px;
          font-weight: 700;
          color: var(--bp-ink);
        }

        .bl-author-card-role {
          margin-top: 4px;
          font-size: 14px;
          color: var(--bp-muted);
        }

        .bl-author-card-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          align-self: stretch;
          margin-top: 22px;
          padding-top: 16px;
          border-top: 1px solid var(--bp-line);
          font-size: 14px;
          font-weight: 600;
          color: var(--bp-red);
        }

        .bl-author-card-foot .bi {
          transition: transform 0.2s ease;
        }

        .bl-author-card:hover .bl-author-card-foot .bi {
          transform: translateX(4px);
        }

        @media (max-width: 1199px) {
          .bl-authors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 767px) {
          .bl-authors-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .bl-author-card {
            padding: 24px 16px 18px;
          }
        }

        @media (max-width: 420px) {
          .bl-authors-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <TimerModal />
    </div>
  );
}

export default AuthorsList;
