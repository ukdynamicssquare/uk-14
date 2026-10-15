import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import TimerModal from "../../components/TimerModal";
import BlogStyles from "../../components/blog/BlogStyles";
import {
  blogFontLinks,
  PageNav,
  PostCard,
  PostImage,
  PostMeta,
  formatDate,
} from "../../components/blog/BlogUi";

import { BlogService } from "../../helpers/blogApi";
import { extractList, slimPost } from "../../helpers/blogData";
import { buildCollectionGraph, jsonLd } from "../../helpers/schema";

const PAGE_SIZE = 9;
const SIDE_LIST_COUNT = 4;

export async function getStaticProps() {
  // Data-fetch failures (network error, API down, non-2xx) must propagate
  // instead of being caught here. If this throws during `next build`, the
  // build fails and Vercel keeps serving the last good deployment. If it
  // throws during an ISR background revalidation, Next.js keeps serving the
  // last successfully generated page instead of replacing it with an empty
  // one. See helpers/blogApi.js for the error/not-found distinction.
  // Only the newest PAGE_SIZE + 1 posts are fetched: the first is the
  // featured post, the rest are grid page 1. Later grid pages are loaded in
  // the browser from /api/blog-list, so the page data stays small (it used
  // to carry every post, ~170 kB, which Next.js warned about).
  const [blogsRaw, businesscentralRaw, firstPageRaw, blogtrandingRaw] =
    await Promise.all([
      BlogService.getLatestBlog(),
      BlogService.getBlogsByCategory("business-central"),
      BlogService.getBlogs(PAGE_SIZE + 1, 1),
      BlogService.getTrendingBlogs(),
    ]);

  const blogs = extractList(blogsRaw);
  const businesscentral = extractList(businesscentralRaw);
  const newest = extractList(firstPageRaw);
  const firstPagePosts = newest.slice(1, 1 + PAGE_SIZE);
  const totalBlogs = firstPageRaw?.pagination?.totalBlogs ?? newest.length;
  const blogtranding = extractList(blogtrandingRaw).slice(0, 1);

  const slim = (items) => items.map(slimPost);

  return {
    props: {
      blogs: slim(blogs),
      // Only the side list's posts are rendered, so only those are sent.
      businesscentral: slim(businesscentral.slice(0, SIDE_LIST_COUNT + 1)),
      firstPagePosts: slim(firstPagePosts),
      // Grid total excludes the featured post.
      totalPosts: Math.max(totalBlogs - 1, 0),
      blogtranding: slim(blogtranding),
    },
    revalidate: 60,
  };
}


function Blogshome({ blogs, businesscentral, firstPagePosts, totalPosts, blogtranding }) {
  const [currentPage, setCurrentPage] = useState(1);
  // Grid pages loaded so far, by page number. Page 1 comes from the build.
  const [pages, setPages] = useState({ 1: firstPagePosts });
  const [loadError, setLoadError] = useState(false);

  const blogListRef = useRef(null);
  const didMount = useRef(false);

  const featured = blogs[0];
  const trending = blogtranding[0];
  const sideList = businesscentral
    .filter((b) => b.title_slug !== featured?.title_slug)
    .slice(0, SIDE_LIST_COUNT);

  const pagePosts = pages[currentPage];

  useEffect(() => {
    if (pages[currentPage]) return;

    const controller = new AbortController();
    setLoadError(false);

    fetch(`/api/blog-list/?page=${currentPage}&size=${PAGE_SIZE}`, {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setPages((loaded) => ({ ...loaded, [currentPage]: data.posts || [] }));
      })
      .catch((error) => {
        if (error.name !== "AbortError") setLoadError(true);
      });

    return () => controller.abort();
  }, [currentPage, pages]);

  const scrollToList = () => {
    if (!blogListRef.current) return;
    const y =
      blogListRef.current.getBoundingClientRect().top + window.pageYOffset - 130;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    scrollToList();
  }, [currentPage]);

  return (
    <div className="bl-page">
      <Head>
        <title>
          Best Microsoft Dynamics 365 Blogs |
          Dynamics Square - Dynamics 365 Blogs
        </title>

        <meta
          name="description"
          content="Dynamics 365 Blogs"
        />

        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/blog/"
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:title"
          content="Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs"
        />

        <meta
          property="og:description"
          content="Dynamics 365 Blogs"
        />

        <meta
          property="og:url"
          content="https://www.dynamicssquare.co.uk/blog/"
        />

        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs"
        />

        <meta
          name="twitter:description"
          content="Dynamics 365 Blogs"
        />

        <meta
          property="og:image"
          content="https://www.dynamicssquare.co.uk/img/home-page-og.png"
        />

        <meta
          name="twitter:image"
          content="https://www.dynamicssquare.co.uk/img/home-page-og.png"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd(
              buildCollectionGraph({
                path: "/blog/",
                title: "Best Microsoft Dynamics 365 Blogs | Dynamics Square - Dynamics 365 Blogs",
                description: "Dynamics 365 Blogs",
                crumbs: [{ name: "Blog", path: "/blog/" }],
                items: firstPagePosts.map((post) => ({
                  name: post.title,
                  path: `/blog/${post.title_slug}/`,
                })),
              })
            ),
          }}
        />
        {blogFontLinks()}
      </Head>

      {/* =================================================
          PAGE HEADING
      ================================================= */}

      <div className="bl-home-head">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="bl-breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-current="page">Blog</li>
            </ol>
          </nav>

          <span className="bl-eyebrow">Dynamics Square Insights</span>
          <h1 className="bl-title">Microsoft Dynamics 365 Blog</h1>
        </div>
      </div>

      {/* =================================================
          FEATURED + BUSINESS CENTRAL
      ================================================= */}

      {featured && (
        <section className="bl-featured">
          <div className="container">
            <div className="row g-4 g-lg-5">
              <div className="col-lg-8">
                <article className="bl-feature">
                  <Link
                    href={`/blog/${featured.title_slug}/`}
                    className="bl-feature-media"
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <PostImage
                      post={featured}
                      priority
                      sizes="(max-width: 991px) 100vw, 860px"
                      className="bl-feature-img"
                    />
                    <span className="bl-badge">Latest</span>
                  </Link>

                  <div className="bl-feature-body">
                    {featured.category_slug && (
                      <Link
                        href={`/blog/category/${featured.category_slug}/`}
                        className="bl-chip"
                      >
                        {featured.category}
                      </Link>
                    )}

                    <h2 className="bl-feature-title">
                      <Link href={`/blog/${featured.title_slug}/`}>
                        {featured.title}
                      </Link>
                    </h2>

                    {featured.short_description && (
                      <p className="bl-feature-text">{featured.short_description}</p>
                    )}

                    <div className="bl-feature-foot">
                      <PostMeta post={featured} />
                      <Link
                        href={`/blog/${featured.title_slug}/`}
                        className="bl-btn"
                      >
                        Read article <i className="bi bi-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>

              <div className="col-lg-4">
                <aside className="bl-side">
                  {sideList.length > 0 && (
                    <div className="bl-side-box">
                      <div className="bl-side-head">
                        <h2>Business Central</h2>
                        <Link href="/blog/category/business-central/">
                          View all <i className="bi bi-arrow-right" />
                        </Link>
                      </div>

                      <ul className="bl-side-list">
                        {sideList.map((post) => (
                          <li key={post.title_slug}>
                            <Link href={`/blog/${post.title_slug}/`} className="bl-side-item">
                              <span className="bl-side-thumb">
                                <PostImage
                                  post={post}
                                  sizes="96px"
                                  className="bl-side-img"
                                />
                              </span>
                              <span className="bl-side-text">
                                <span className="bl-side-title">{post.title}</span>
                                <span className="bl-side-date">
                                  {formatDate(post.publish_date)}
                                  {post.read_time && ` · ${post.read_time} min read`}
                                </span>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a
                    className="bl-side-promo"
                    href="https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35"
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                  >
                    <Image
                      src="/img/forber-01.png"
                      width={771}
                      height={282}
                      sizes="(max-width: 991px) 100vw, 420px"
                      alt="Dynamics Square on the Forbes Technology Council"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </aside>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          TRENDING + DEMO
      ================================================= */}

      {trending && (
        <section className="bl-trending">
          <div className="container">
            <div className="bl-trending-box">
              <div className="row align-items-center g-4 g-lg-5">
                <div className="col-lg-7">
                  <span className="bl-trending-pill">
                    <i className="bi bi-fire" /> Most trending
                  </span>

                  <h2 className="bl-trending-title">
                    <Link href={`/blog/${trending.title_slug}/`}>{trending.title}</Link>
                  </h2>

                  {trending.short_description && (
                    <p className="bl-trending-text">{trending.short_description}</p>
                  )}

                  <div className="bl-trending-foot">
                    <Link href={`/blog/${trending.title_slug}/`} className="bl-btn">
                      Read article <i className="bi bi-arrow-right" />
                    </Link>
                    <span className="bl-trending-meta">
                      {trending.author}
                      {trending.read_time && ` · ${trending.read_time} min read`}
                    </span>
                  </div>
                </div>

                <div className="col-lg-5">
                  <Link href="/schedule-a-demo/" className="bl-trending-promo">
                    <Image
                      src="/img/blog-side-pic-top.png"
                      width={413}
                      height={350}
                      sizes="(max-width: 991px) 100vw, 413px"
                      alt="Schedule a Microsoft Dynamics 365 demo"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =================================================
          ALL ARTICLES
      ================================================= */}

      <section className="bl-all" aria-labelledby="all-articles-title">
        <div className="container" ref={blogListRef}>
          <div className="bl-all-head">
            <div>
              <span className="bl-eyebrow">Library</span>
              <h2 id="all-articles-title">All articles</h2>
            </div>
            <span className="bl-count">
              {totalPosts} article{totalPosts === 1 ? "" : "s"}
            </span>
          </div>

          {loadError && !pagePosts ? (
            <div className="bl-empty">
              <i className="bi bi-wifi-off" />
              <p>Couldn&apos;t load these articles.</p>
              <button
                type="button"
                className="bl-btn"
                onClick={() => setPages((loaded) => ({ ...loaded }))}
              >
                Try again
              </button>
            </div>
          ) : !pagePosts ? (
            // Placeholder cards while a page loads, so the layout doesn't jump.
            <div className="row g-4" aria-busy="true">
              {Array.from({ length: PAGE_SIZE }, (_, i) => (
                <div className="col-md-6 col-lg-4" key={i}>
                  <div className="bl-card bl-card--loading" />
                </div>
              ))}
            </div>
          ) : pagePosts.length > 0 ? (
            <div className="row g-4">
              {pagePosts.map((post) => (
                <div className="col-md-6 col-lg-4" key={post.title_slug}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bl-empty">
              <i className="bi bi-journal-text" />
              <p>No articles yet.</p>
            </div>
          )}

          <PageNav
            total={totalPosts}
            pageSize={PAGE_SIZE}
            current={currentPage}
            onChange={setCurrentPage}
          />
        </div>
      </section>

      <BlogStyles />
      {/* Home-only styles; shared ones are in components/blog/BlogStyles.js */}
      <style jsx global>{`
        /* No grey hero on this page, so keep the site header white. */
        div:has(> #header),
        #header:not(.fixed-top) {
          background: #fff;
        }

        .bl-home-head {
          padding: 20px 0 8px;
        }

        .bl-home-head .bl-breadcrumb {
          margin-bottom: 28px;
        }

        .bl-home-head .bl-title {
          margin-bottom: 0;
        }

        .bl-card--loading {
          min-height: 420px;
          background: linear-gradient(90deg, var(--bp-bg) 25%, #eceef2 50%, var(--bp-bg) 75%);
          background-size: 200% 100%;
          animation: bl-shimmer 1.2s ease-in-out infinite;
        }

        @keyframes bl-shimmer {
          from {
            background-position: 100% 0;
          }
          to {
            background-position: -100% 0;
          }
        }

        .bl-featured {
          padding: 32px 0 24px !important;
        }

        .bl-feature {
          height: 100%;
          overflow: hidden;
          background: #fff;
          border: 1px solid var(--bp-line);
          border-radius: 28px;
          box-shadow: 0 10px 30px rgba(11, 19, 36, 0.06);
        }

        .bl-feature-media {
          position: relative;
          display: block;
          aspect-ratio: 16 / 8.4;
          overflow: hidden;
          background: var(--bp-bg);
        }

        .bl-feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .bl-feature:hover .bl-feature-img {
          transform: scale(1.04);
        }

        .bl-badge {
          position: absolute;
          left: 20px;
          top: 20px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--bp-ink);
          background: #fff;
          border-radius: 999px;
          box-shadow: 0 4px 14px rgba(11, 19, 36, 0.15);
        }

        .bl-feature-body {
          display: flex;
          flex-direction: column;
          padding: 32px;
        }

        .bl-feature-title {
          margin: 0 0 12px;
          font-size: clamp(24px, 2.6vw, 32px) !important;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .bl-feature-title a {
          color: var(--bp-ink);
        }

        .bl-feature-title a:hover {
          color: var(--bp-red);
        }

        .bl-feature-text {
          margin: 0 0 24px;
          font-size: 16px;
          line-height: 1.7;
          color: var(--bp-text);
        }

        .bl-feature-foot {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid var(--bp-line);
        }

        .bl-side {
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: 100%;
        }

        .bl-side-box {
          padding: 24px;
          background: var(--bp-bg);
          border-radius: 24px;
        }

        .bl-side-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .bl-side-head h2 {
          margin: 0;
          font-size: 20px !important;
          font-weight: 700;
          color: var(--bp-ink);
        }

        .bl-side-head a {
          font-size: 14px;
          font-weight: 600;
          color: var(--bp-red);
        }

        .bl-side-head a:hover {
          color: var(--bp-ink);
        }

        .bl-side-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .bl-side-list li + li {
          border-top: 1px solid var(--bp-line);
        }

        .bl-side-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 0;
        }

        .bl-side-thumb {
          flex-shrink: 0;
          width: 84px;
          height: 64px;
          overflow: hidden;
          border-radius: 12px;
          background: #fff;
        }

        .bl-side-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bl-side-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .bl-side-title {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
          color: var(--bp-ink);
          transition: color 0.2s ease;
        }

        .bl-side-item:hover .bl-side-title {
          color: var(--bp-red);
        }

        .bl-side-date {
          font-size: 12px;
          color: var(--bp-muted);
        }

        .bl-side-promo {
          display: block;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(11, 19, 36, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .bl-side-promo:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 19, 36, 0.14);
        }

        .bl-trending {
          padding: 48px 0 !important;
        }

        .bl-trending-box {
          position: relative;
          overflow: hidden;
          padding: 48px;
          background: var(--bp-ink);
          border-radius: 32px;
        }

        .bl-trending-box::after {
          content: "";
          position: absolute;
          right: -100px;
          bottom: -140px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(194, 34, 33, 0.45), transparent 70%);
          pointer-events: none;
        }

        .bl-trending-box .row {
          position: relative;
          z-index: 1;
        }

        .bl-trending-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          margin-bottom: 18px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #ff8a80;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 999px;
        }

        .bl-trending-title {
          margin: 0 0 14px;
          font-size: clamp(26px, 3vw, 36px) !important;
          line-height: 1.2;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .bl-trending-title a {
          color: #fff;
        }

        .bl-trending-title a:hover {
          color: #ff8a80;
        }

        .bl-trending-text {
          margin: 0 0 28px;
          font-size: 16px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.72);
        }

        .bl-trending-foot {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px 20px;
        }

        .bl-trending-meta {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
        }

        .bl-trending-promo {
          display: block;
          overflow: hidden;
          border-radius: 20px;
          transition: transform 0.25s ease;
        }

        .bl-trending-promo:hover {
          transform: translateY(-4px);
        }

        .bl-all {
          padding: 32px 0 96px !important;
        }

        .bl-all-head {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 32px;
        }

        .bl-all-head h2 {
          margin: 6px 0 0;
          font-size: clamp(28px, 3.4vw, 40px) !important;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--bp-ink);
        }

        @media (max-width: 767px) {
          .bl-feature-body {
            padding: 24px;
          }

          .bl-trending-box {
            padding: 28px 22px;
            border-radius: 24px;
          }

          .bl-all {
            padding-bottom: 64px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bl-feature-img,
          .bl-side-promo,
          .bl-trending-promo {
            transition: none;
          }
        }
      `}</style>
      <TimerModal />
    </div>
  );
}

export default Blogshome;
