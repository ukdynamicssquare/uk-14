import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import TimerModal from "../../components/TimerModal";
import BlogSeo from "../../components/BlogSeo";
import { BlogService, BACKEND_URL } from "../../helpers/blogApi";

const AUTHOR_ABOUT_PREVIEW_LENGTH = 1000;

/* =========================================================
   HELPERS
========================================================= */

function getImageUrl(src) {
  if (!src) return "";

  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//")
  ) {
    return src;
  }

  if (src.startsWith("/")) {
    return `${BACKEND_URL}${src}`;
  }

  return `${BACKEND_URL}/${src}`;
}

function formatDate(date) {
  if (!date) return "";

  const parsedDate = new Date(
    String(date).replace(/\.\d+Z$/, "Z")
  );

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function extractTextFromHtml(html) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}
/* =========================================================
   FIX HTML STYLE STRING → REACT STYLE OBJECT
========================================================= */

function convertStyle(styleString) {
  if (!styleString || typeof styleString !== "string") {
    return undefined;
  }

  return styleString
    .split(";")
    .filter(Boolean)
    .reduce((styles, declaration) => {
      const [property, ...valueParts] = declaration.split(":");

      if (!property || valueParts.length === 0) {
        return styles;
      }

      const value = valueParts.join(":").trim();

      const camelProperty = property
        .trim()
        .replace(
          /-([a-z])/g,
          (_, letter) => letter.toUpperCase()
        );

      styles[camelProperty] = value;

      return styles;
    }, {});
}

/* =========================================================
   CREATE UNIQUE HEADING SLUG
========================================================= */

function createHeadingSlug(text, usedSlugs) {
  const baseSlug =
    text
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "heading";

  if (!usedSlugs[baseSlug]) {
    usedSlugs[baseSlug] = 1;
    return baseSlug;
  }

  usedSlugs[baseSlug] += 1;
  return `${baseSlug}-${usedSlugs[baseSlug]}`;
}

/* =========================================================
   SAFE HTML
========================================================= */

function SafeHTML({ html, tocList, handleTocClick }) {
  let pCount = 0;

  const parsed = parse(html || "", {
    replace: (domNode) => {

       /* =====================================================
         FIX STYLE ATTRIBUTE
      ===================================================== */

      if (
        domNode.type === "tag" &&
        domNode.attribs?.style
      ) {
        domNode.attribs.style = convertStyle(
          domNode.attribs.style
        );
      }

       // ==========================================
      // ADD THIS — DYNAMIC BLOG ANCHOR TAGS
      // ==========================================

     if (
  domNode.type === "tag" &&
  domNode.name === "a"
) {
  const attribs = domNode.attribs || {};

  const {
    class: existingClass,
    ...restAttribs
  } = attribs;

  return (
    <a
      {...restAttribs}
      className={`u-i ${existingClass || ""}`.trim()}
    >
      {domToReact(domNode.children)}
    </a>
  );
}

         // ==========================================
      // ADD THIS — DYNAMIC BLOG ANCHOR TAGS
      // ==


      /* =====================================================
         IMAGES
      ===================================================== */

      if (
  domNode.type === "tag" &&
  domNode.name === "img"
) {
  const attribs = domNode.attribs || {};
  const src = getImageUrl(attribs.src || "");

  if (!src) {
    return null;
  }

  const alt =
    attribs.alt?.trim() ||
    attribs.title?.trim() ||
    "Blog image";

  const width = Number(attribs.width);
  const height = Number(attribs.height);

  // Images that already have dimensions
  if (width > 0 && height > 0) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(max-width: 991px) 100vw, 66.666vw"
        style={{
          width: "auto",
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "30px 0",
        }}
      />
    );
  }

  // Images without dimensions
  return (
    <Image
      src={src}
      alt={alt}
      width={1}
      height={1}
      sizes="(max-width: 991px) 100vw, 66.666vw"
      style={{
        width: "auto",
        maxWidth: "100%",
        height: "auto",
        display: "block",
        margin: "30px 0",
      }}
    />
  );
}
      /* =====================================================
         PARAGRAPH + TOC
      ===================================================== */

      if (domNode.type === "tag" && domNode.name === "p") {
        pCount++;

        if (pCount === 2 && tocList?.length > 0) {
          return (
            <>
              <p {...domNode.attribs}>
                {domToReact(domNode.children)}
              </p>

              {/* <div
                className="toc-wrapper mb-5 p-4"
                style={{
                  backgroundColor: "#f8f9fa",
                  borderRadius: "8px",
                  borderLeft: "4px solid #c22221",
                  marginTop: "2rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "15px",
                  }}
                >
                  Table of Contents
                </h2>

                <ul
                  style={{
                    listStyleType: "none",
                    paddingLeft: 0,
                    margin: 0,
                  }}
                >
                  {tocList.map((toc) => (
                    <li
                      key={toc.slug}
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      <a
                        href={`#${toc.slug}`}
                        onClick={(e) =>
                          handleTocClick?.(e, toc.slug)
                        }
                        style={{
                          color: "#333",
                          textDecoration: "none",
                          fontSize: "16px",
                          display: "flex",
                          alignItems: "flex-start",
                        }}
                      >
                        <i
                          className="bi bi-chevron-right"
                          style={{
                            fontSize: "12px",
                            marginTop: "4px",
                            marginRight: "8px",
                            color: "#c22221",
                          }}
                        />

                        {toc.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div> */}
            </>
          );
        }
      }

      return undefined;
    },
  });

  return <div>{parsed}</div>;
}

/* =========================================================
   BLOG POST
========================================================= */

function Post({
  blogs,
  blogcat,
  authordetials,
}) {
  const router = useRouter();

  const [expandedAuthors, setExpandedAuthors] = useState({});

  /* =======================================================
     AUTHOR TOGGLE
  ======================================================= */

  const handleAuthorToggle = (index) => {
    const isExpanded = Boolean(expandedAuthors[index]);

    setExpandedAuthors((current) => ({
      ...current,
      [index]: !isExpanded,
    }));

    if (!isExpanded) {
      requestAnimationFrame(() => {
        document
          .getElementById(`blog-author-details-${index}`)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    }
  };

  /* =======================================================
     TOC CLICK
  ======================================================= */

  const handleTocClick = (e, slug) => {
    e.preventDefault();

    const element = document.getElementById(slug);

    if (!element) {
      return;
    }

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    /*
     * Keep URL hash for accessibility/navigation.
     */
    if (window.history?.replaceState) {
      window.history.replaceState(
        null,
        "",
        `#${slug}`
      );
    }
  };

  /* =======================================================
     404
  ======================================================= */

  if (!blogs || blogs.length === 0) {
    return (
      <>
        <Head>
          <title>404 - Blog Not Found</title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />
        </Head>

        <section className="Solution-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 mobile-1">
                <h1
                  className="text-center"
                  style={{
                    fontSize: "60px",
                  }}
                >
                  404
                </h1>

                <h2 className="text-center">
                  The Post You Were Looking For
                  Couldn't Be Found
                </h2>

                <div
                  className="text-center"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="/blog"
                    className="btn-get-started scrollto"
                  >
                    <span>Back To Blog</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <div>
      <section>
        {blogs.map((item) => {
          const canonicalUrl = `https://www.dynamicssquare.com/blog/${item.title_slug}/`;

          return (
            <article
              key={item.title_slug}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* =================================================
                  SEO
              ================================================= */}

              <BlogSeo
                meta_title={item.meta_title}
                meta_description={item.meta_description}
                meta_image={item.meta_image}
                meta_keyword={item.meta_keyword}
                canonicalUrl={canonicalUrl}

                /*
                 * IMPORTANT:
                 * Only use noindex when rank=1 really means
                 * "do not index".
                 *
                 * If rank=1 means your BEST blog, change this.
                 */
                robots={
                  item.rank === 1
                    ? "noindex, nofollow"
                    : null
                }

                additional_script={
                  item.additional_script
                }

                additional_multiscript={
                  item.additional_multiscript
                }
              />

              {/* =================================================
                  BREADCRUMB
              ================================================= */}

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blogs-breadcromb">
                      <nav
                        aria-label="breadcrumb"
                      >
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link href="/">
                              Home
                            </Link>
                          </li>

                          <li className="breadcrumb-item">
                            <Link href="/blog/">
                              Blog
                            </Link>
                          </li>

                          <li
                            className="breadcrumb-item active"
                            aria-current="page"
                          >
                            {item.title}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    MAIN CONTENT
                ================================================= */}

                <div className="row g-5">
                  <div className="col-lg-8">
                    <div className="blogs-single-post-sec">
                      <div className="blogs-lates blogs-lates-top-head">
                        <h1 itemProp="headline">
                          {item.title}
                        </h1>

                        <div
                          className="blogs-info-list"
                          style={{
                            flexWrap: "inherit",
                          }}
                        >
                          <div className="left-list">
                            {/* AUTHOR */}

                            <span className="user">
                              <Link
                                href={`/blog/author/${encodeURIComponent(
                                  item.author
                                    ?.toLowerCase()
                                    .split(" ")
                                    .join("-")
                                )}/`}
                                itemProp="author"
                              >
                                {item.author}
                              </Link>
                            </span>

                            {/* PUBLISHED DATE */}

                            {item.publish_date && (
                              <span className="date">
                                <a>
                                  <i className="bi bi-calendar-event" />
                                  {" "}
                                  Published:{" "}
                                  {formatDate(
                                    item.publish_date
                                  )}
                                </a>
                              </span>
                            )}

                            {/* UPDATED DATE */}

                            {item.updated_at &&
                              item.publish_date &&
                              formatDate(
                                item.updated_at
                              ) !==
                                formatDate(
                                  item.publish_date
                                ) && (
                                <span className="date">
                                  <a>
                                    <i className="bi bi-arrow-repeat" />
                                    {" "}
                                    Updated:{" "}
                                    {formatDate(
                                      item.updated_at
                                    )}
                                  </a>
                                </span>
                              )}

                            {/* READ TIME */}

                            {item.read_time && (
                              <span className="time">
                                <a>
                                  <i className="bi bi-clock" />{" "}
                                  {item.read_time} mins read
                                </a>
                              </span>
                            )}

                            {/* CATEGORY */}

                            {item.category_slug && (
                              <span className="cate">
                                <Link
                                  href={`/blog/category/${item.category_slug}`}
                                >
                                  <i className="bi bi-collection" />{" "}
                                  {item.category}
                                </Link>
                              </span>
                            )}
                          </div>

                          {/* =================================================
                              SOCIAL SHARE
                          ================================================= */}

                          <div className="sociallist">
                            <FacebookShareButton
                              url={canonicalUrl}
                              quote={item.title}
                            >
                              <a
                                aria-label="Share on Facebook"
                                role="button"
                              >
                                <i className="bi bi-facebook" />
                              </a>
                            </FacebookShareButton>

                            <TwitterShareButton
                              url={canonicalUrl}
                              title={item.title}
                            >
                              <a
                                aria-label="Share on Twitter"
                                role="button"
                              >
                                <i className="bi bi-twitter" />
                              </a>
                            </TwitterShareButton>

                            <LinkedinShareButton
                              url={canonicalUrl}
                              title={item.title}
                              summary={
                                item.short_description
                              }
                            >
                              <a
                                aria-label="Share on LinkedIn"
                                role="button"
                              >
                                <i className="bi bi-linkedin" />
                              </a>
                            </LinkedinShareButton>
                          </div>
                        </div>
                      </div>

                      {/* =================================================
                          BLOG CONTENT

                          IMPORTANT:
                          No useEffect.
                          Content is rendered immediately.
                      ================================================= */}

                      <div
                        className="blogs-content"
                        itemProp="articleBody"
                      >
                        <div className="blogs-content-inner">
                          <SafeHTML
                            html={
                              item.description || ""
                            }
                            tocList={item.tocList}
                            handleTocClick={
                              handleTocClick
                            }
                          />
                        </div>

                        {/* =================================================
                            AUTHOR
                        ================================================= */}

                        {authordetials?.length > 0 &&
                          authordetials.map(
                            (author, i) => {
                              const isAuthorExpanded =
                                Boolean(
                                  expandedAuthors[i]
                                );

                              const authorAbout =
                                author.about || "";

                              const shouldShowAuthorToggle =
                                authorAbout.length >
                                AUTHOR_ABOUT_PREVIEW_LENGTH;

                              const visibleAuthorAbout =
                                isAuthorExpanded ||
                                !shouldShowAuthorToggle
                                  ? authorAbout
                                  : `${authorAbout
                                      .slice(
                                        0,
                                        AUTHOR_ABOUT_PREVIEW_LENGTH
                                      )
                                      .trim()}...`;

                              const authorImage =
                                author.profile_photo_path
                                  ? getImageUrl(
                                      author.profile_photo_path
                                    )
                                  : "/img/default-author.png";

                              const authorSlug =
                                author.name
                                  ?.toLowerCase()
                                  .trim()
                                  .replace(
                                    /\s+/g,
                                    "-"
                                  );

                              return (
                                <div
                                  className="author-side-head author-side-head--expandable"
                                  id={`blog-author-details-${i}`}
                                  key={
                                    author.name ||
                                    i
                                  }
                                  itemScope
                                  itemType="https://schema.org/Person"
                                >
                                  <div className="left">
                                    <Image
                                      src={authorImage}
                                      alt={
                                        author.name
                                          ? `${author.name} - Author`
                                          : "Blog author"
                                      }
                                      width={74}
                                      height={74}
                                      sizes="74px"
                                      itemProp="image"
                                      style={{
                                        width: "74px",
                                        height: "74px",
                                        objectFit:
                                          "cover",
                                        borderRadius:
                                          "50%",
                                      }}
                                    />

                                    {author.linkedin_url && (
                                      <span className="link-din">
                                        <a
                                          href={
                                            author.linkedin_url.startsWith(
                                              "http"
                                            )
                                              ? author.linkedin_url
                                              : `https://${author.linkedin_url}`
                                          }
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          aria-label={`${author.name || "Author"} LinkedIn`}
                                        >
                                          <i className="bi bi-linkedin" />
                                        </a>
                                      </span>
                                    )}
                                  </div>

                                  <div className="right">
                                    {authorSlug ? (
                                      <Link
                                        href={`/blog/author/${authorSlug}/`}
                                      >
                                        <span itemProp="name">
                                          {author.name}
                                        </span>
                                      </Link>
                                    ) : (
                                      <span itemProp="name">
                                        {author.name}
                                      </span>
                                    )}

                                    <p className="author-about">
                                      {visibleAuthorAbout}
                                    </p>

                                    {shouldShowAuthorToggle && (
                                      <button
                                        type="button"
                                        className="author-about-toggle"
                                        onClick={() =>
                                          handleAuthorToggle(
                                            i
                                          )
                                        }
                                        aria-expanded={
                                          isAuthorExpanded
                                        }
                                        style={{
                                          marginTop:
                                            "10px",
                                          padding: 0,
                                          border: 0,
                                          background:
                                            "transparent",
                                          color: "#ffffff",
                                          fontSize:
                                            "14px",
                                          fontWeight: 600,
                                          textDecoration:
                                            "underline",
                                          textUnderlineOffset:
                                            "4px",
                                          cursor:
                                            "pointer",
                                        }}
                                      >
                                        {isAuthorExpanded
                                          ? "Read less"
                                          : "Read more"}
                                      </button>
                                    )}
                                  </div>
                                </div>
                              );
                            }
                          )}
                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      SIDEBAR
                  ================================================= */}

                  <div className="col-lg-4">
                    <aside className="prom-bann">
                      <a
                        style={{
                          marginBottom: "20px",
                          display: "block",
                        }}
                        rel="nofollow"
                        href="https://www.forbes.com/councils/forbestechcouncil/2026/06/01/what-companies-get-wrong-about-agentic-erp/"
                        target="_blank"
                      >
                        <Image
                          src="/img/forber-03.png"
                          width={413}
                          height={392}
                          sizes="(max-width: 991px) 100vw, 413px"
                          alt="Dynamics Square Forbes technology article"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </a>

                      <a
                        href="https://msdynamicsworld.com/vendor/dynamics-square-usa"
                        target="_blank"
                        rel="nofollow"
                      >
                        <Image
                          src="/img/blog-side001.png"
                          alt="Dynamics Square on Microsoft Dynamics World"
                          width={413}
                          height={168}
                          sizes="(max-width: 991px) 100vw, 413px"
                          style={{
                            width: "100%",
                            height: "auto",
                          }}
                        />
                      </a>
                    </aside>
                  </div>
                </div>

                {/* =================================================
                    RELATED BLOGS
                ================================================= */}

                {blogcat?.length > 0 && (
                  <section
                    className="row pd-90"
                    aria-labelledby="related-posts-title"
                  >
                    <div className="col-lg-12">
                      <h2
                        id="related-posts-title"
                        className="visually-hidden"
                      >
                        Related Blog Posts
                      </h2>
                    </div>

                    {blogcat.slice(0,2).map((item1) => {
                      const authorSlug =
                        item1.author
                          ?.toLowerCase()
                          .trim()
                          .replace(/\s+/g, "-");

                      return (
                        <div
                          className="col-lg-6"
                          key={item1.title_slug}
                        >
                          <div className="blogs-lates blogs-lates-repet">
                            <h3>
                              <Link
                                href={`/blog/${item1.title_slug}`}
                              >
                                {item1.title}
                              </Link>
                            </h3>

                            <div className="blogs-info-list">
                              <span className="user">
                                {authorSlug ? (
                                  <Link
                                    href={`/blog/author/${authorSlug}/`}
                                  >
                                    <i className="bi bi-person-circle" />{" "}
                                    {item1.author}
                                  </Link>
                                ) : (
                                  <a>
                                    <i className="bi bi-person-circle" />{" "}
                                    {item1.author}
                                  </a>
                                )}
                              </span>

                              {item1.publish_date && (
                                <span className="date">
                                  <a>
                                    <i className="bi bi-calendar-event" />{" "}
                                    Published:{" "}
                                    {formatDate(
                                      item1.publish_date
                                    )}
                                  </a>
                                </span>
                              )}

                              {item1.updated_at &&
                                item1.publish_date &&
                                formatDate(
                                  item1.updated_at
                                ) !==
                                  formatDate(
                                    item1.publish_date
                                  ) && (
                                  <span className="date">
                                    <a>
                                      <i className="bi bi-arrow-repeat" />{" "}
                                      Updated:{" "}
                                      {formatDate(
                                        item1.updated_at
                                      )}
                                    </a>
                                  </span>
                                )}

                              {item1.read_time && (
                                <span className="time">
                                  <a>
                                    <i className="bi bi-clock" />{" "}
                                    {
                                      item1.read_time
                                    }{" "}
                                    mins read
                                  </a>
                                </span>
                              )}

                              {item1.category_slug && (
                                <span className="cate">
                                  <Link
                                    href={`/blog/category/${item1.category_slug}`}
                                  >
                                    <i className="bi bi-collection" />{" "}
                                    {item1.category}
                                  </Link>
                                </span>
                              )}
                            </div>

                            <div className="b-card-info">
                              <p>
                                {
                                  item1.short_description
                                }
                              </p>

                              <div className="page-link-read">
                                <Link
                                  href={`/blog/${item1.title_slug}`}
                                >
                                  Read More{" "}
                                  <span>{">"}</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                )}
              </div>
            </article>
          );
        })}
      </section>
<style jsx global>{`
  @media (max-width: 1400px) {
    .blog-content img,.blog-content p img{
      width: 100% !important;
      max-width: 100% !important;
      height: auto !important;
    }
  }
`}</style>
      <TimerModal />
    </div>
  );
}

/* =========================================================
   STATIC PATHS
========================================================= */

export async function getStaticPaths() {
  try {
    const allBlogsRaw =
      await BlogService.getBlogs();

    const allBlogs = Array.isArray(allBlogsRaw)
      ? allBlogsRaw
      : allBlogsRaw?.data || [];

    const paths = Array.isArray(allBlogs)
      ? allBlogs
          .map(
            (b) =>
              b.title_slug || b.slug
          )
          .filter(
            (slug) =>
              typeof slug === "string" &&
              slug.trim() !== ""
          )
          .map((slug) => ({
            params: {
              slug,
            },
          }))
      : [];

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    console.error(
      "Error fetching slugs:",
      error
    );

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

/* =========================================================
   STATIC PROPS
========================================================= */

export async function getStaticProps({
  params,
}) {
  const slug = params?.slug || "";

  try {
    /* =====================================================
       GET BLOG
    ===================================================== */

    const blogsDataRaw =
      await BlogService.getBlogBySlug(slug);

    let blogsData = [];

    if (Array.isArray(blogsDataRaw)) {
      blogsData = blogsDataRaw;
    } else if (
      Array.isArray(blogsDataRaw?.data)
    ) {
      blogsData = blogsDataRaw.data;
    } else if (
      Array.isArray(blogsDataRaw?.blogs)
    ) {
      blogsData = blogsDataRaw.blogs;
    } else if (
      Array.isArray(blogsDataRaw?.posts)
    ) {
      blogsData = blogsDataRaw.posts;
    } else if (
      blogsDataRaw &&
      typeof blogsDataRaw === "object"
    ) {
      blogsData = [blogsDataRaw];
    }

    /* =====================================================
       NOT FOUND
    ===================================================== */

    if (
      !blogsData ||
      blogsData.length === 0
    ) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }

    /* =====================================================
       STRING HELPER
    ===================================================== */

    const extractStr = (value) => {
      if (!value) {
        return "";
      }

      if (typeof value === "string") {
        return value;
      }

      if (Array.isArray(value)) {
        return value.length > 0
          ? extractStr(value[0])
          : "";
      }

      if (
        typeof value === "object"
      ) {
        return (
          value.name ||
          value.title ||
          ""
        );
      }

      return String(value);
    };

    /* =====================================================
       NORMALIZE BLOG DATA
    ===================================================== */

    const blogs = blogsData.map((b) => ({
      title: extractStr(b.title),

      title_slug: extractStr(
        b.slug || b.title_slug
      ),

      description: extractStr(
        b.content || b.description
      ),

      meta_title: extractStr(
        b.seo?.metaTitle ||
          b.meta_title
      ),

      meta_description: extractStr(
        b.seo?.metaDescription ||
          b.meta_description
      ),

      meta_image: extractStr(
        b.featuredImage?.url ||
          b.meta_image
      ),

      meta_keyword: extractStr(
        b.seo?.focusKeyword ||
          b.meta_keyword
      ),

      publish_date:
        b.publishedAt ||
        b.publish_date ||
        null,

      updated_at:
        b.updatedAt ||
        b.updated_at ||
        null,

      read_time: extractStr(
        b.readingTimeMinutes ||
          b.read_time
      ),

      author:
        extractStr(b.author) ||
        "Author",

      author_email: extractStr(
        b.author?.email ||
          b.author_email
      ),

      category:
        extractStr(b.category) ||
        "Category",

      category_slug: extractStr(
        b.category?.slug ||
          b.category_slug
      ),

      rank: b.rank || 0,

      short_description: extractStr(
        b.excerpt ||
          b.short_description
      ),

      additional_script: null,

      additional_multiscript:
        (() => {
          try {
            if (
              b.schemaMarkup &&
              Array.isArray(
                b.schemaMarkup
              )
            ) {
              return b.schemaMarkup.map(
                (schema) =>
                  schema.json ||
                  JSON.stringify(schema)
              );
            }

            if (
              b.additional_multiscript
            ) {
              const parsed =
                typeof b.additional_multiscript ===
                "string"
                  ? JSON.parse(
                      b.additional_multiscript
                    )
                  : b.additional_multiscript;

              return Array.isArray(
                parsed
              )
                ? parsed.map((item) =>
                    typeof item ===
                    "string"
                      ? item
                      : JSON.stringify(
                          item
                        )
                  )
                : [];
            }

            return [];
          } catch (error) {
            console.error(
              "Schema parsing error:",
              error
            );

            return [];
          }
        })(),
    }));

    /* =====================================================
       PROCESS HEADINGS + TOC
    ===================================================== */

    blogs.forEach((blog) => {
      const html =
        blog.description || "";

      const headings = [];
      const usedSlugs = {};

      /*
       * Matches H2/H3 headings.
       */
      const headingRegex =
        /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi;

      blog.description = html.replace(
        headingRegex,
        (
          match,
          tag,
          attrs,
          innerHtml
        ) => {
          const level =
            tag.toLowerCase() ===
            "h2"
              ? 2
              : 3;

          let textContent =
            extractTextFromHtml(
              innerHtml
            );

          const existingIdMatch =
            attrs.match(
              /id=["']([^"']+)["']/i
            );

          let headingSlug =
            existingIdMatch?.[1];

          /*
           * Use existing CMS ID when available.
           */
          if (!headingSlug) {
            headingSlug =
              createHeadingSlug(
                textContent,
                usedSlugs
              );
          } else {
            /*
             * Register existing ID so future
             * generated IDs don't collide.
             */
            usedSlugs[headingSlug] =
              (usedSlugs[
                headingSlug
              ] || 0) + 1;
          }

          if (!textContent) {
            textContent = `Section ${
              headings.length + 1
            }`;
          }

          /*
           * Add ID only if one doesn't already exist.
           */
          let newAttrs = attrs;

          if (!existingIdMatch) {
            newAttrs = `${attrs} id="${headingSlug}"`;
          }

          headings.push({
            level,
            text: textContent,
            slug: headingSlug,
          });

          return `<${tag}${newAttrs}>${innerHtml}</${tag}>`;
        }
      );

      const hasH2 = headings.some(
        (heading) =>
          heading.level === 2
      );

      blog.tocList = headings.filter(
        (heading) =>
          hasH2
            ? heading.level === 2
            : heading.level === 3
      );
    });

    /* =====================================================
       RELATED BLOGS
    ===================================================== */

    let blogcat = [];

    try {
      if (
        blogs[0].category_slug
      ) {
        const relatedDataRaw =
          await BlogService.getBlogsByCategory(
            blogs[0].category_slug
          );

        let relatedData = [];

        if (
          Array.isArray(
            relatedDataRaw
          )
        ) {
          relatedData =
            relatedDataRaw;
        } else if (
          Array.isArray(
            relatedDataRaw?.data
          )
        ) {
          relatedData =
            relatedDataRaw.data;
        } else if (
          Array.isArray(
            relatedDataRaw?.blogs
          )
        ) {
          relatedData =
            relatedDataRaw.blogs;
        } else if (
          Array.isArray(
            relatedDataRaw?.posts
          )
        ) {
          relatedData =
            relatedDataRaw.posts;
        }

        const currentSlug =
          blogs[0].title_slug;

        const relatedDataFiltered =
          relatedData.filter(
            (blog) =>
              extractStr(
                blog.slug ||
                  blog.title_slug
              ) !== currentSlug
          );

        /*
         * Keep 3 related articles.
         * Change back to 2 if you prefer.
         */
        blogcat =
          relatedDataFiltered
            .slice(0, 3)
            .map((c) => ({
              title: extractStr(
                c.title
              ),

              title_slug:
                extractStr(
                  c.slug ||
                    c.title_slug
                ),

              author:
                extractStr(
                  c.author
                ) || "Author",

              publish_date:
                c.publishedAt ||
                c.publish_date ||
                null,

              updated_at:
                c.updatedAt ||
                c.updated_at ||
                null,

              read_time:
                extractStr(
                  c.readingTimeMinutes ||
                    c.read_time
                ),

              category:
                extractStr(
                  c.category
                ) || "Category",

              category_slug:
                extractStr(
                  c.category?.slug ||
                    c.category_slug
                ),

              short_description:
                extractStr(
                  c.excerpt ||
                    c.short_description
                ),
            }));
      }
    } catch (error) {
      console.error(
        "Error fetching related blogs:",
        error
      );
    }

    /* =====================================================
       AUTHOR DETAILS
    ===================================================== */

    let authordetials = [];

    try {
      const rawAuthor =
        blogsData[0]?.author;

      /*
       * New API structure:
       * author is an object.
       */
      if (
        rawAuthor &&
        typeof rawAuthor ===
          "object"
      ) {
        authordetials = [
          {
            name:
              rawAuthor.name ||
              null,

            linkedin_url:
              rawAuthor
                .socialLinks
                ?.linkedin ||
              rawAuthor.linkedin ||
              rawAuthor.linkedin_url ||
              "",

            twitter_url:
              rawAuthor
                .socialLinks
                ?.twitter ||
              rawAuthor.twitter_url ||
              "",

            facebook_url:
              rawAuthor
                .socialLinks
                ?.facebook ||
              rawAuthor.facebook_url ||
              "",

            instagram_url:
              rawAuthor
                .socialLinks
                ?.instagram ||
              rawAuthor.instagram_url ||
              "",

            profile_photo_path:
              rawAuthor.avatarUrl ||
              rawAuthor.profile_photo_path ||
              "",

            about:
              rawAuthor.about ||
              rawAuthor.description ||
              "",
          },
        ];
      } else {
        /*
         * Legacy API structure.
         */
        const author =
          blogs[0]
            .author_email ||
          blogs[0].author;

        if (author) {
          const authorSlug =
            author
              .toLowerCase()
              .split("-")
              .join(" ")
              .replace(
                /\s+/g,
                "-"
              );

          const authorDataRaw =
            await BlogService.getAuthorDetails(
              authorSlug
            );

          const authorData =
            Array.isArray(
              authorDataRaw
            )
              ? authorDataRaw
              : authorDataRaw
              ? [authorDataRaw]
              : [];

          authordetials =
            authorData.map(
              (a) => ({
                name:
                  a.name ||
                  null,

                linkedin_url:
                  a.socialLinks
                    ?.linkedin ||
                  a.linkedin ||
                  a.linkedin_url ||
                  "",

                twitter_url:
                  a.socialLinks
                    ?.twitter ||
                  a.twitter_url ||
                  "",

                facebook_url:
                  a.socialLinks
                    ?.facebook ||
                  a.facebook_url ||
                  "",

                instagram_url:
                  a.socialLinks
                    ?.instagram ||
                  a.instagram_url ||
                  "",

                profile_photo_path:
                  a.avatarUrl ||
                  a.profile_photo_path ||
                  "",

                about:
                  a.about ||
                  a.description ||
                  "",
              })
            );
        }
      }
    } catch (error) {
      console.error(
        "Error fetching author:",
        error
      );
    }

    /* =====================================================
       RETURN PROPS
    ===================================================== */

    return {
      props: {
        blogs,
        blogcat,
        authordetials,
      },

      /*
       * Revalidate every 4 hours.
       */
      revalidate: 14400,
    };
  } catch (error) {
    console.error(
      "Error in getStaticProps:",
      error
    );

    return {
      notFound: true,
      revalidate: 60,
    };
  }
}

export default Post;