import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import TimerModal from "../../../components/TimerModal";
import BlogStyles from "../../../components/blog/BlogStyles";
import {
  Avatar,
  BlogFontPreload,
  PagedPostGrid,
  formatDate,
} from "../../../components/blog/BlogUi";

import { BlogService } from "../../../helpers/blogApi";
import {
  authorSlugOf,
  extractArray,
  slimAuthor,
  slimPost,
} from "../../../helpers/blogData";
import { getBlogImageUrl } from "../../../helpers/blogImage";

const SITE_URL = "https://www.dynamicssquare.co.uk";
const BIO_PREVIEW = 420;

const isValidLink = (value) => {
  if (!value || typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized !== "" && normalized !== "na" && normalized !== "n/a" && normalized !== "-";
};

const withProtocol = (url) => (url.startsWith("http") ? url : `https://${url}`);

export async function getStaticPaths() {
  try {
    const authors = extractArray(await BlogService.getAuthors());

    const paths = authors
      .map(authorSlugOf)
      .filter(Boolean)
      .map((slug) => ({ params: { slug } }));

    return { paths, fallback: "blocking" };
  } catch (e) {
    console.error("Error fetching author slugs:", e);
    return { paths: [], fallback: "blocking" };
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";

  const [authorsRaw, byAuthorRaw] = await Promise.all([
    BlogService.getAuthors(),
    BlogService.getBlogsByAuthor(slug),
  ]);

  // The by-author endpoint returns either a plain list or { author, blogs }.
  const posts = extractArray(byAuthorRaw).map(slimPost);
  const fetchedAuthor = Array.isArray(byAuthorRaw) ? null : byAuthorRaw?.author || null;

  const authors = extractArray(authorsRaw).map(slimAuthor).filter((a) => a.name);
  const rawAuthor =
    fetchedAuthor ||
    extractArray(authorsRaw).find((a) => authorSlugOf(a) === slug) ||
    null;

  if (posts.length === 0 && !rawAuthor) {
    return { notFound: true, revalidate: 60 };
  }

  const author = rawAuthor
    ? slimAuthor(rawAuthor)
    : { name: posts[0]?.author || "Author", slug, avatar: "", designation: "", about: "", linkedin: "" };

  return {
    props: {
      author,
      // The author's own schema from the CMS, if they have one.
      authorSchema: rawAuthor?.schemaMarkup || null,
      posts,
      otherAuthors: authors
        .filter((a) => a.slug !== slug)
        .map(({ name, slug: s, avatar }) => ({ name, slug: s, avatar })),
      authorSlug: slug,
    },
    revalidate: 60,
  };
}

function schemaScripts(authorSchema) {
  if (!authorSchema) return [];
  const list = Array.isArray(authorSchema) ? authorSchema : [authorSchema];
  return list.map((item) =>
    typeof item === "string" ? item : item?.json || JSON.stringify(item)
  );
}

function AuthorPage({ author, authorSchema, posts, otherAuthors, authorSlug }) {
  const [bioOpen, setBioOpen] = useState(false);

  const pageUrl = `${SITE_URL}/blog/author/${authorSlug}/`;
  const authorName = author.name || "Author";
  const role = author.designation || "Content Writer & Industry Expert";
  const bio = author.about || "A writer and contributor.";
  const bioIsLong = bio.length > BIO_PREVIEW;
  const shownBio =
    bioIsLong && !bioOpen ? `${bio.slice(0, BIO_PREVIEW).replace(/\s+\S*$/, "")}…` : bio;
  const imageUrl = getBlogImageUrl(author.avatar);
  const topicCount = new Set(posts.map((p) => p.category_slug).filter(Boolean)).size;
  const latest = posts[0]?.publish_date;

  // Use the CMS schema when the author has one; otherwise describe the page
  // as what it is: a profile page about a person.
  const cmsSchemas = schemaScripts(authorSchema);
  const schemas = cmsSchemas.length
    ? cmsSchemas
    : [
        JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          url: pageUrl,
          mainEntity: {
            "@type": "Person",
            name: authorName,
            jobTitle: role,
            description: bio,
            ...(imageUrl && { image: imageUrl }),
            ...(isValidLink(author.linkedin) && { sameAs: [withProtocol(author.linkedin)] }),
            worksFor: { "@type": "Organization", name: "Dynamics Square", url: SITE_URL },
          },
        }),
      ];

  return (
    <div className="bl-page">
      <Head>
        <title>{`${authorName} | Author at Dynamics Square Blog`}</title>
        <meta
          name="description"
          content={`Read articles, insights, and expert opinions written by ${authorName} on Dynamics Square Blog.`}
        />
        <meta
          name="keywords"
          content={`${authorName}, Dynamics Square Blog, Business Central, Dynamics 365, ERP, CRM, Microsoft Dynamics`}
        />
        <meta name="author" content={authorName} />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${authorName} | Dynamics Square Blog`} />
        <meta property="og:description" content={`Explore all blog posts written by ${authorName}.`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Dynamics Square Blog" />
        {imageUrl && <meta property="og:image" content={imageUrl} />}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${authorName} | Dynamics Square Blog`} />
        <meta name="twitter:description" content={`Read all articles written by ${authorName}.`} />
        {imageUrl && <meta name="twitter:image" content={imageUrl} />}

        {schemas.map((json, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
        ))}
      </Head>
      <BlogFontPreload />

      {/* ================= PROFILE ================= */}

      <header className="bl-hero">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="bl-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blog/">Blog</Link>
              </li>
              <li>
                <Link href="/blog/author/">Authors</Link>
              </li>
              <li aria-current="page">{authorName}</li>
            </ol>
          </nav>

          <div className="bl-profile">
            <Avatar
              name={authorName}
              src={author.avatar}
              size={156}
              priority
              className="bl-profile-photo"
            />

            <div className="bl-profile-body">
              <span className="bl-eyebrow">{role}</span>

              <h1 className="bl-title bl-profile-name">
                {authorName}
                {isValidLink(author.linkedin) && (
                  <a
                    href={withProtocol(author.linkedin)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${authorName} on LinkedIn`}
                    className="bl-profile-linkedin"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                )}
              </h1>

              <p className="bl-profile-bio">{shownBio}</p>
              {bioIsLong && (
                <button
                  type="button"
                  className="bl-profile-more"
                  onClick={() => setBioOpen((v) => !v)}
                  aria-expanded={bioOpen}
                >
                  {bioOpen ? "Show less" : "Read full bio"}
                </button>
              )}

              <dl className="bl-stats">
                <div>
                  <dt>Articles</dt>
                  <dd>{posts.length}</dd>
                </div>
                <div>
                  <dt>Topics</dt>
                  <dd>{topicCount}</dd>
                </div>
                {latest && (
                  <div>
                    <dt>Latest post</dt>
                    <dd>{formatDate(latest)}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </div>
      </header>

      {/* ================= ARTICLES + AUTHORS ================= */}

      <section className="bl-section" aria-labelledby="author-articles">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-9">
              <div className="bl-section-head">
                <div>
                  <span className="bl-eyebrow">Written by {authorName.split(" ")[0]}</span>
                  <h2 id="author-articles">Articles</h2>
                </div>
                <span className="bl-count">
                  {posts.length} published
                </span>
              </div>

              <PagedPostGrid
                posts={posts}
                pageSize={8}
                colClass="col-md-6"
                cardProps={{ showAuthor: false }}
                emptyText={`No articles from ${authorName} yet.`}
              />
            </div>

            {otherAuthors.length > 0 && (
              <div className="col-lg-3">
                <aside className="bl-authors-side">
                  <div className="bl-authors-side-head">
                    <h2>More authors</h2>
                    <Link href="/blog/author/">All</Link>
                  </div>

                  <ul className="bl-authors-list">
                    {otherAuthors.map((a) => (
                      <li key={a.slug}>
                        <Link href={`/blog/author/${a.slug}/`}>
                          <Avatar name={a.name} src={a.avatar} size={40} />
                          <span>{a.name}</span>
                          <i className="bi bi-chevron-right" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </aside>
              </div>
            )}
          </div>
        </div>
      </section>

      <BlogStyles />
      <style jsx global>{`
        .bl-profile {
          position: relative;
          display: flex;
          align-items: flex-start;
          gap: 40px;
        }

        .bl-profile-photo {
          border: 4px solid #fff;
          box-shadow: 0 0 0 2px var(--bp-red), 0 18px 40px rgba(11, 19, 36, 0.15);
        }

        .bl-profile-body {
          flex: 1;
          min-width: 0;
          max-width: 820px;
        }

        .bl-profile-name {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin: 8px 0 14px !important;
          font-size: clamp(32px, 4.4vw, 44px) !important;
        }

        .bl-profile-linkedin {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          font-size: 18px;
          color: #0a66c2;
          background: #fff;
          border: 1px solid var(--bp-line);
          border-radius: 12px;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .bl-profile-linkedin:hover {
          color: #fff;
          background: #0a66c2;
        }

        .bl-profile-bio {
          margin: 0;
          font-size: 17px;
          line-height: 1.75;
          color: var(--bp-text);
          white-space: pre-line;
        }

        .bl-profile-more {
          margin-top: 10px;
          padding: 0;
          border: 0;
          background: none;
          font-size: 14px;
          font-weight: 700;
          color: var(--bp-red);
        }

        .bl-profile-more:hover {
          color: var(--bp-ink);
        }

        .bl-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin: 28px 0 0;
        }

        .bl-stats div {
          min-width: 130px;
          padding: 14px 20px;
          background: #fff;
          border: 1px solid var(--bp-line);
          border-radius: 16px;
        }

        .bl-stats dt {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bp-muted);
        }

        .bl-stats dd {
          margin: 4px 0 0;
          font-family: var(--bp-display);
          font-size: 22px;
          font-weight: 800;
          color: var(--bp-ink);
        }

        .bl-authors-side {
          position: sticky;
          top: 120px;
          padding: 22px;
          background: var(--bp-bg);
          border-radius: 24px;
        }

        .bl-authors-side-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
        }

        .bl-authors-side-head h2 {
          margin: 0;
          font-size: 18px !important;
          font-weight: 800;
          color: var(--bp-ink);
        }

        .bl-authors-side-head a {
          font-size: 14px;
          font-weight: 700;
          color: var(--bp-red);
        }

        .bl-authors-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bl-authors-list a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px;
          margin: 0 -10px;
          border-radius: 14px;
          font-size: 15px;
          font-weight: 600;
          color: var(--bp-ink);
          transition: background 0.2s ease;
        }

        .bl-authors-list a:hover {
          background: #fff;
        }

        .bl-authors-list a span:not(.bl-avatar) {
          flex: 1;
          min-width: 0;
        }

        .bl-authors-list .bi {
          font-size: 12px;
          color: var(--bp-muted);
        }

        @media (max-width: 991px) {
          .bl-authors-side {
            position: static;
          }
        }

        @media (max-width: 767px) {
          .bl-profile {
            flex-direction: column;
            gap: 24px;
          }

          .bl-profile-photo {
            width: 112px !important;
            height: 112px !important;
          }

          .bl-profile-bio {
            font-size: 16px;
          }

          .bl-stats div {
            flex: 1;
            min-width: 0;
            padding: 12px 14px;
          }

          .bl-stats dd {
            font-size: 18px;
          }
        }
      `}</style>
      <TimerModal />
    </div>
  );
}

export default AuthorPage;
