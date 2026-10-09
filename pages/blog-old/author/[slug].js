// BACKUP OF THE OLD BLOG DESIGN (snapshot of pages/blog at commit e8aa03d).
// Served at /blog-old with noindex (meta + X-Robots-Tag in next.config.js)
// and excluded from sitemap.xml. Safe to delete this whole folder.
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import Image from "next/image";
import Pagination from "../../../components/Pagination";
import TimerModal from "../../../components/TimerModal";
import { paginate } from "../../../helpers/paginate";

const PAGE_SIZE = 12;

const slugify = (name = "") => name.toLowerCase().trim().replace(/\s+/g, "-");

const getAuthorSlug = (author) => author?.author_slug || slugify(author?.name);

const isValidLink = (value) => {
  if (!value || typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized !== "" && normalized !== "na" && normalized !== "n/a" && normalized !== "-";
};

const getLinkedInUrl = (author) => author?.socialLinks?.linkedin || author?.linkedin_url || "";


function formatDate(date) {
  if (!date) return "";
  const parsedDate = new Date(String(date).replace(/\.\d+Z$/, "Z"));
  if (isNaN(parsedDate)) return "";
  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

import { BlogService } from "../../../helpers/blogApi";
import { BACKEND_URL } from "../../../helpers/blogClient";

export async function getStaticPaths() {
  // Backup copy: render on first request instead of pre-building every
  // page a second time (keeps build time the same as before).
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";

  const [authorslistRaw, blgsbyauthorslistRawRaw] = await Promise.all([
    BlogService.getAuthors(),
    BlogService.getBlogsByAuthor(slug),
  ]);

  const authorslist = Array.isArray(authorslistRaw) ? authorslistRaw : (authorslistRaw?.data || []);
  const extractStr = (val) => {
    if (!val) return "";
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) return val.length > 0 ? extractStr(val[0]) : "";
    if (typeof val === 'object') return val.name || val.title || "";
    return String(val);
  };

  let blgsbyauthorslistRaw = [];
  let fetchedAuthor = null;

  if (Array.isArray(blgsbyauthorslistRawRaw)) {
    blgsbyauthorslistRaw = blgsbyauthorslistRawRaw;
  } else if (blgsbyauthorslistRawRaw?.blogs && Array.isArray(blgsbyauthorslistRawRaw.blogs)) {
    blgsbyauthorslistRaw = blgsbyauthorslistRawRaw.blogs;
    fetchedAuthor = blgsbyauthorslistRawRaw.author || null;
  } else if (blgsbyauthorslistRawRaw?.posts && Array.isArray(blgsbyauthorslistRawRaw.posts)) {
    blgsbyauthorslistRaw = blgsbyauthorslistRawRaw.posts;
    fetchedAuthor = blgsbyauthorslistRawRaw.author || null;
  } else if (blgsbyauthorslistRawRaw?.data && Array.isArray(blgsbyauthorslistRawRaw.data)) {
    blgsbyauthorslistRaw = blgsbyauthorslistRawRaw.data;
  }

  const blgsbyauthorslist = blgsbyauthorslistRaw.map(b => ({
    ...b,
    title: extractStr(b.title),
    title_slug: extractStr(b.slug || b.title_slug),
    author: extractStr(b.author) || "Author",
    publish_date: b.publishedAt || b.publish_date || null,
    read_time: extractStr(b.readingTimeMinutes || b.read_time),
    updated_at: b.updatedAt || b.updated_at || null,
    short_description: extractStr(b.excerpt || b.short_description),
    category: extractStr(b.category) || "Category",
    category_slug: extractStr(b.category?.slug || b.category_slug),
    image: extractStr(b.featuredImage?.url || b.image),
  }));

  if (blgsbyauthorslist.length === 0 && !fetchedAuthor) {
    return { notFound: true };
  }

  return {
    props: {
      authorslist,
      blgsbyauthorslist,
      fetchedAuthor,
      authorSlug: slug,
    },
    revalidate: 60,
  };
}

function Authors({ authorslist, blgsbyauthorslist, fetchedAuthor, authorSlug }) {
  const [currentPage, setCurrentPage] = useState(1);

  const currentAuthor = useMemo(() => {

    if (fetchedAuthor) return fetchedAuthor;

    return authorslist.find((item) => getAuthorSlug(item) === authorSlug);
  }, [authorslist, authorSlug, fetchedAuthor]);

  const paginatedPosts = useMemo(
    () => paginate(blgsbyauthorslist, currentPage, PAGE_SIZE),
    [blgsbyauthorslist, currentPage]
  );


  const authorName = currentAuthor?.name || blgsbyauthorslist[0]?.author || "Author";
  const rawAuthorImage = currentAuthor?.avatarUrl || currentAuthor?.profile_photo_path || "/images/default-author.webp";
  const authorImage = rawAuthorImage.startsWith("http") ? rawAuthorImage : `${BACKEND_URL}${rawAuthorImage}`;
 
  const authorDescription = currentAuthor?.about || currentAuthor?.description || "A writer and contributor.";
  
  const articleCount = String(blgsbyauthorslist.length).padStart(3, '0');
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const schema_script = currentAuthor?.schemaMarkup || blgsbyauthorslist[0]?.schemaMarkup || null;

  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
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

        <link
          rel="canonical"
          href={`https://www.dynamicssquare.co.uk/blog/author/${authorSlug}/`}
        />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:title" content={`${authorName} | Dynamics Square Blog`} />
        <meta property="og:description" content={`Explore all blog posts written by ${authorName}.`} />
        <meta
          property="og:url"
          content={`https://www.dynamicssquare.co.uk/blog/author/${authorSlug}/`}
        />
        <meta property="og:site_name" content="Dynamics Square Blog" />
        <meta property="og:image" content={authorImage} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${authorName} | Dynamics Square Blog`} />
        <meta name="twitter:description" content={`Read all articles written by ${authorName}.`} />
        <meta name="twitter:image" content={authorImage} />
        {schema_script && (
          Array.isArray(schema_script) ? (
            schema_script.map((scriptItem, idx) => (
              <script
                key={idx}
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: scriptItem.json || JSON.stringify(scriptItem)
                }}
              />
            ))
          ) : (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: typeof schema_script === "string" ? schema_script : JSON.stringify(schema_script)
              }}
            />
          )
        )}
      </Head>

      <div className="ds-author">
        <section className="author-banner">
          <div className="container">
            <div className="author-profile-card">
              <div className="row">
                <div className="col-lg-3 text-center">
                  <Image
                    src={authorImage}
                    alt={authorName}
                    className="author-profile-img"
                    width={168}
                    height={168}
                  />
                </div>

                <div className="col-lg-9">
                  <span className="author-role"> {`${currentAuthor?.designation || currentAuthor?.role_name || "Content Writer & Industry Expert"}`}</span>
                  <h1 className="author-name-heading">
                    {authorName}
                    {isValidLink(getLinkedInUrl(currentAuthor)) && (
                      <a
                        href={getLinkedInUrl(currentAuthor)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${authorName} on LinkedIn`}
                        className="author-name-linkedin"
                      >
                        <i className="bi bi-linkedin"></i>
                      </a>
                    )}
                  </h1>
                  <p className="author-bio">{authorDescription}</p>

                  <div className="author-statline">
                    <div className="stat-chip">
                      <span className="stat-value">{articleCount?.replace(/^0+/, "") || "0"}</span>
                      <span className="stat-label">Articles</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="author-page-section">
          <div className="container">
            <div className="row">
              {/* Content */}
              <div className="col-lg-9 order-md-2 order-sm-2">
                <div className="author-heading">
                  <h2>Articles by {authorName}</h2>
                  <p className="author-heading-sub">{blgsbyauthorslist.length} published</p>
                </div>

                {paginatedPosts.length > 0 ? (
                  <div className="row blog-grid">
                    {paginatedPosts.map((item, idx) => {
                      const entryNumber = String(startIndex + idx + 1).padStart(3, "0");
                      const publishedLabel = formatDate(item.publish_date);
                      const updatedLabel = formatDate(item.updated_at);
                      const hasUpdate = updatedLabel && publishedLabel && updatedLabel !== publishedLabel;

                      return (
                        <div className="col-lg-6 col-md-6 mb-4" key={item.title_slug}>
                          <div className="author-blog-grid-card">
                            <div className="blog-card-image">
                              <a href={`/blog-old/${item.title_slug}/`}>
                                <Image
                                  src={
                                    item.image
                                      ? (item.image.startsWith("http") ? item.image : `${BACKEND_URL}${item.image}`)
                                      : "/images/blog-placeholder.jpg"
                                  }
                                  alt={item.title}
                                  width={600}
                                  height={350}
                                  className="blog-img"
                                />
                              </a>
                              <span className="blog-category-badge">{item.category}</span>
                              <span className="blog-entry-number">No. {entryNumber}</span>
                            </div>

                            <div className="blog-card-content">
                              <div className="blog-meta">
                                {publishedLabel && (
                                  <span className="blog-meta-item">
                                    <i className="bi bi-calendar-event"></i>
                                    Published {publishedLabel}
                                  </span>
                                )}

                                {/* Shows only when updated_at parses to an actual
                                    different calendar date than publish_date */}
                                {hasUpdate && (
                                  <span className="blog-meta-item">
                                    <i className="bi bi-arrow-repeat"></i>
                                    Updated {updatedLabel}
                                  </span>
                                )}

                                <span className="blog-meta-item">
                                  <i className="bi bi-clock"></i>
                                  {item.read_time}
                                </span>
                              </div>

                              <h3>
                                <a href={`/blog-old/${item.title_slug}/`}>{item.title}</a>
                              </h3>

                              <p>{item.short_description?.slice(0, 120)}...</p>

                              <div className="blog-author-footer">
                                <div className="author-info">
                                  <Image src={authorImage} alt={item.author} width={32} height={32} />
                                  <span>{item.author}</span>
                                </div>

                                <a href={`/blog-old/${item.title_slug}/`} className="read-link">
                                  Read article
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="empty-state">
                    <i className="bi bi-journal-text"></i>
                    <p>No articles published yet.</p>
                    <span>Check back soon — new posts from {authorName} will show up here.</span>
                  </div>
                )}

                {blgsbyauthorslist.length > 0 && (
                  <Pagination
                    items={blgsbyauthorslist.length}
                    currentPage={currentPage}
                    pageSize={PAGE_SIZE}
                    onPageChange={onPageChange}
                  />
                )}
              </div>
              {/* Sidebar — now a fixed-height, scrollable list so a long author roster
                  doesn't push the page content down */}
              <div className="col-lg-3 order-1">
                <div className="author-sidebar">
                  <div className="sidebar-header">
                    <h3>Authors</h3>
                    <span className="sidebar-count">{authorslist.length}</span>
                  </div>

                  <div className="sidebar-scroll-wrap">
                    <div className="sidebar-scroll">
                      <ul className="author-list">
                        {[...authorslist]
                          // .sort((a, b) => a.name.localeCompare(b.name))
                          .map((author) => {
                            const itemSlug = getAuthorSlug(author);
                            return (
                              <li
                                key={author.id ?? itemSlug}
                                className={itemSlug === authorSlug ? "active" : ""}
                              >
                                  <a href={`/blog-old/author/${itemSlug}/`}>
                                    <Image
                                      src={
                                        (author.avatarUrl || author.profile_photo_path || "").startsWith("http")
                                          ? (author.avatarUrl || author.profile_photo_path)
                                          : `${BACKEND_URL}${author.avatarUrl || author.profile_photo_path}`
                                      }
                                      alt={author.name}
                                      width={38}
                                      height={38}
                                    />
                                    <span>{author.name}</span>
                                  </a>
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div className="sidebar-fade" />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </section>
      </div>

      <TimerModal />

      <style jsx global>{`
        .ds-author {
          --ink: #15192b;
          --ink-soft: #5b6172;
          --paper: #f5f6fa;
          --surface: #ffffff;
          --rule: #e3e6ed;
          --ledger: #393053;
          --ledger-soft: #e6e6e9;
          --stamp: #c2783b;
          --stamp-soft: #f6e9dd;
        }
        /* ===========================
        HERO
        =========================== */

        .ds-author .author-banner {
          padding: 72px 0 56px;
          background: #393053;
          background-image: radial-gradient(circle at 68% 158%, #d73d3d, rgba(215, 61, 61, 0) 51%), radial-gradient(circle at 50% -43%, #7865af, #393053 78%);
        }

        .ds-author .author-profile-card {
          border-radius: 18px;
          padding: 30px;
          box-shadow: 0 1px 2px rgba(20, 24, 40, 0.04);
        }

        .ds-author .author-profile-img {
          width: 168px;
          height: 168px;
          border-radius: 100%;
          object-fit: cover;
          border: 6px solid var(--surface);
          outline: 2px solid var(--ledger-soft);
          outline-offset: 6px;
        }

        .ds-author .author-role {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--surface);
          display: block;
          margin-bottom: 14px;
        }

        .ds-author .author-profile-card h1 {
          font-size: 44px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: var(--surface);
          margin-bottom: 14px;
        }

        .ds-author .author-name-heading {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .ds-author .author-name-linkedin {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: var(--surface);
          color: #0a66c2;
          font-size: 17px;
          flex-shrink: 0;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .ds-author .author-name-linkedin:hover {
          transform: translateY(-2px);
          background: #0a66c2;
          color: var(--surface);
        }

        .ds-author .author-bio {
          color: var(--surface);
          line-height: 1.75;
          // max-width: 640px;
          margin-bottom: 0;
        }

        .ds-author .author-statline {
          display: flex;
          gap: 28px;
          margin-top: 26px;
          padding-top: 20px;
          border-top: 1px solid var(--rule);
          flex-wrap: wrap;
        }

        .ds-author .stat-chip {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .ds-author .stat-chip .stat-value {
          font-size: 26px;
          font-weight: 600;
          color: var(--surface);
          letter-spacing: -0.01em;
        }

        .ds-author .stat-chip .stat-label {
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--surface);
        }

        /* ===========================
        SOCIAL LINKS
        =========================== */

        .ds-author .author-social-links {
          display: flex;
          gap: 10px;
          margin-top: 24px;
          justify-content: center;
        }

        .ds-author .author-social-links a {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid var(--rule);
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--ink-soft);
          font-size: 15px;
          text-decoration: none;
          transition: border-color 0.2s ease, color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }

        .ds-author .author-social-links a:hover {
          border-color: var(--ledger);
          color: var(--ledger);
          background: var(--ledger-soft);
          transform: translateY(-2px);
        }

        /* ===========================
        PAGE SECTION
        =========================== */

        .ds-author .author-page-section {
          padding: 64px 0 96px;
          background: var(--paper);
        }

        /* ===========================
        SIDEBAR (scrollable)
        =========================== */

        .ds-author .author-sidebar {
          background: var(--surface);
          border: 1px solid var(--rule);
          border-radius: 16px;
          overflow: hidden;
          position: sticky;
          top: 96px;
        }

        .ds-author .sidebar-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          padding: 20px 22px 16px;
          border-bottom: 1px solid var(--rule);
        }

        .ds-author .sidebar-header h3 {
          font-size: 19px;
          font-weight: 600;
          color: var(--ink);
          margin: 0;
        }

        .ds-author .sidebar-count {
          font-size: 12px;
          color: var(--ink-soft);
        }

        .ds-author .sidebar-scroll-wrap {
          position: relative;
        }

        /* This is the actual scroll fix: capped height + overflow-y auto,
           so a long author list scrolls inside the sidebar instead of
           stretching the whole page. */
        .ds-author .sidebar-scroll {
          max-height: 480px;
          overflow-y: auto;
          padding: 10px;
          scrollbar-width: thin;
          scrollbar-color: var(--rule) transparent;
        }

        .ds-author .sidebar-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .ds-author .sidebar-scroll::-webkit-scrollbar-thumb {
          background: var(--rule);
          border-radius: 10px;
        }

        .ds-author .sidebar-scroll::-webkit-scrollbar-thumb:hover {
          background: var(--ink-soft);
        }

        /* Soft fade at the bottom hints that the list keeps going */
        .ds-author .sidebar-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 36px;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0), var(--surface));
          pointer-events: none;
        }

        .ds-author .author-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .ds-author .author-list li {
          margin-bottom: 2px;
        }

        .ds-author .author-list li a {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 9px 10px;
          border-radius: 10px;
          border-left: 3px solid transparent;
          color: var(--ink);
          text-decoration: none;
          transition: background 0.2s ease, border-color 0.2s ease;
        }

        .ds-author .author-list li a:hover {
          background: var(--paper);
        }

        .ds-author .author-list li.active a {
          background: var(--ledger-soft);
          border-left-color: var(--ledger);
        }

        .ds-author .author-list li img {
          width: 38px;
          height: 38px;
          border-radius: 100%;
          object-fit: cover;
          border: 1px solid var(--rule);
          flex-shrink: 0;
        }

        .ds-author .author-list li span {
          font-size: 14.5px;
          font-weight: 500;
        }

        .ds-author .author-list li.active span {
          color: var(--ledger);
          font-weight: 600;
        }

        /* ===========================
        HEADING
        =========================== */

        .ds-author .author-heading {
          margin-bottom: 30px;
        }

        .ds-author .author-heading h2 {
          font-size: 30px;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 6px;
        }

        .ds-author .author-heading-sub {
          font-size: 12.5px;
          letter-spacing: 0.04em;
          color: var(--ink-soft);
          margin: 0;
        }

        /* ===========================
        BLOG GRID CARD
        =========================== */

        .ds-author .author-blog-grid-card {
          background: var(--surface);
          border: 1px solid var(--rule);
          border-radius: 14px;
          overflow: hidden;
          height: 100%;
          transition: border-color 0.25s ease, transform 0.25s ease;
        }

        .ds-author .author-blog-grid-card:hover {
          transform: translateY(-4px);
        }

        .ds-author .blog-card-image {
          position: relative;
          overflow: hidden;
        }

        .ds-author .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .ds-author .author-blog-grid-card:hover .blog-card-image img {
          transform: scale(1.05);
        }

        .ds-author .blog-category-badge {
          position: absolute;
          top: 14px;
          left: 14px;
          background: var(--surface);
          color: var(--stamp);
          border: 1px solid var(--stamp-soft);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 11px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          font-weight: 500;
          z-index: 2;
        }

        .ds-author .blog-entry-number {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(21, 25, 43, 0.78);
          color: #fff;
          padding: 5px 10px;
          border-radius: 6px;
          font-size: 11px;
          letter-spacing: 0.03em;
          z-index: 2;
        }

        /* ===========================
        CARD CONTENT
        =========================== */

        .ds-author .blog-card-content {
          padding: 24px;
        }

        .ds-author .blog-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 14px;
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--ink-soft);
        }

        .ds-author .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ds-author .blog-meta-item i {
          font-size: 13px;
        }

        .ds-author .blog-card-content h3 {
          margin-bottom: 12px;
        }

        .ds-author .blog-card-content h3 a {
          color: var(--ink);
          text-decoration: none;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
          display:block
        }

        .ds-author .blog-card-content h3 a:hover {
          color: var(--ledger);
        }

        .ds-author .blog-card-content p {
          color: var(--ink-soft);
          line-height: 1.7;
          font-size: 14.5px;
          margin-bottom: 20px;
        }

        /* ===========================
        CARD FOOTER
        =========================== */

        .ds-author .blog-author-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 16px;
          border-top: 1px solid var(--rule);
        }

        .ds-author .author-info {
          display: flex;
          align-items: center;
        }

        .ds-author .author-info img {
          width: 32px;
          height: 32px;
          border-radius: 100%;
          object-fit: cover;
          border: 1px solid var(--rule);
          margin-right: 8px;
        }

        .ds-author .author-info span {
          font-size: 13px;
          font-weight: 500;
          color: var(--ink-soft);
        }

        .ds-author .read-link {
          font-size: 12.5px;
          letter-spacing: 0.03em;
          color: var(--ledger);
          text-decoration: none;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .ds-author .read-link:hover{
        color:#b5101f
        }
        .ds-author .read-link::after {
          content: "→";
          transition: transform 0.2s ease;
        }

        .ds-author .read-link:hover::after {
          transform: translateX(3px);
        }

        /* ===========================
        EMPTY STATE
        =========================== */

        .ds-author .empty-state {
          text-align: center;
          padding: 64px 24px;
          background: var(--surface);
          border: 1px dashed var(--rule);
          border-radius: 14px;
        }

        .ds-author .empty-state i {
          font-size: 30px;
          color: var(--ledger);
          margin-bottom: 14px;
          display: inline-block;
        }

        .ds-author .empty-state p {
          font-size: 19px;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 6px;
        }

        .ds-author .empty-state span {
          font-size: 14px;
          color: var(--ink-soft);
        }

        /* ===========================
        PAGINATION
        =========================== */

        .ds-author .pagination {
          margin-top: 44px;
          justify-content: center;
        }

        .ds-author .pagination .page-link {
          border-radius: 8px;
          margin: 0 4px;
          font-size: 13px;
          color: var(--ink);
          border-color: var(--rule);
        }

        .ds-author .pagination .page-item.active .page-link {
          background: var(--ledger);
          border-color: var(--ledger);
          color: #fff;
        }

        /* ===========================
        ACCESSIBILITY
        =========================== */

        .ds-author a:focus-visible,
        .ds-author button:focus-visible {
          outline: 2px solid var(--ledger);
          outline-offset: 2px;
          border-radius: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .ds-author * {
            transition: none !important;
            animation: none !important;
          }
        }

        /* ===========================
        MOBILE
        =========================== */

        @media (max-width: 991px) {
          .ds-author .author-profile-card {
            text-align: center;
          }

          .ds-author .author-profile-img {
            margin-bottom: 20px;
          }

          .ds-author .author-statline {
            justify-content: center;
          }

          .ds-author .author-social-links {
            justify-content: center;
              margin: 0px 0px 30px;
          }

          .ds-author .author-name-heading {
            justify-content: center;
          }

          .ds-author .author-sidebar {
            margin-bottom: 30px;
            position: static;
          }

          .ds-author .sidebar-scroll {
            max-height: 320px;
          }
            
        }

        @media (max-width: 767px) {
          .ds-author .author-banner {
            padding: 48px 0;
          }

          .ds-author .author-profile-card {
            padding: 26px;
          }

          .ds-author .author-profile-card h1 {
            font-size: 32px;
          }

          .ds-author .blog-card-image img {
            height: 210px;
          }

          .ds-author .blog-author-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </>
  );
}

export default Authors;
