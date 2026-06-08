import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import parse, { domToReact } from "html-react-parser";
import Image from "next/image";
import * as cheerio from "cheerio";
import { useRouter } from "next/router";
import TimerModal from "../../components/TimerModal";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import BlogSearchinner from "../../components/BlogSearchinner";

const cleanSlug = (slug = "") => {
  return String(slug).replace(/^\/+/, "").replace(/\/+$/, "").trim();
};

function TableOfContents({ toc, showAllToc, setShowAllToc }) {
  if (!toc.length) return null;

  return (
    <div className="blog-toc">
      <h3>In this article</h3>

      <ul>
        {(showAllToc ? toc : toc.slice(0, 4)).map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`}>
              <i className="bi bi-chevron-right"></i>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>

      {toc.length > 4 && (
        <button
          type="button"
          className="toc-load-more"
          onClick={() => setShowAllToc(!showAllToc)}
        >
          {showAllToc ? "Show Less" : "Load More"}
        </button>
      )}
    </div>
  );
}

// Utility function to parse HTML content and extract image URLs
function parseImagesFromHtml(htmlContent) {
  if (!htmlContent) {
    return [];
  }

  const $ = cheerio.load(htmlContent.toString());

  const images = [];

  $("img").each((index, element) => {
    const src = $(element).attr("src");
    const alt = $(element).attr("alt");

    images.push({ src, alt });
  });

  return images;
}

//table of content
function generateTOC(htmlContent) {
  if (!htmlContent) {
    return {
      toc: [],
      updatedHtml: "",
    };
  }

  const $ = cheerio.load(htmlContent);

  const toc = [];

  $("h2").each((index, element) => {
    const text = $(element).text().trim();

    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    $(element).attr("id", id);

    toc.push({
      id,
      text,
    });
  });

  return {
    toc,
    updatedHtml: $.html(),
  };
}

function Post({ blogs, blogcat, authordetials, author }) {
  const router = useRouter();

  // SSR LOADING FIX
  if (!blogs || blogs.length === 0) {
    return (
      <div className="container py-5">
        <h2>Loading blog...</h2>
      </div>
    );
  }

  const images = blogs?.[0]?.description
    ? parseImagesFromHtml(blogs[0].description)
    : [];

  const { toc = [], updatedHtml = "" } = blogs?.[0]?.description
    ? generateTOC(blogs[0].description)
    : {};

  const [mounted, setMounted] = useState(false);
  const [showAllToc, setShowAllToc] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <>
      <section>
        {blogs &&
          blogs.map((item, i) => (
            <div key={i}>
              <Head>
                <title>{item.meta_title}</title>

                <meta name="description" content={item.meta_description} />

                <link
                  rel="canonical"
                  href={`https://www.dynamicssquare.co.uk/blog/${cleanSlug(item.title_slug)}/`}
                />

                {item.rank == 1 && (
                  <meta name="robots" content="noindex, nofollow" />
                )}

                <meta property="og:title" content={item.meta_title} />

                <meta property="og:site_name" content="Dynamics Square" />

                <meta
                  property="og:url"
                  content={`https://www.dynamicssquare.co.uk/blog/${cleanSlug(item.title_slug)}/`}
                />

                <meta property="og:description" content={item.meta_description} />

                <meta property="og:type" content="website" />

                <meta property="og:image" content={`${item.meta_image}`} />

                <meta property="twitter:card" content="summary_large_image" />

                <meta property="twitter:title" content={item.meta_title} />

                <meta
                  property="twitter:description"
                  content={item.meta_description}
                />

                <meta property="twitter:image" content={`${item.meta_image}`} />

                {item.additional_script &&
                  item.additional_script.trim() !== "{}" && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: item.additional_script,
                      }}
                    />
                  )}

                {item.additional_multiscript &&
                  (() => {
                    try {
                      return JSON.parse(item.additional_multiscript).map(
                        (scriptContent, index) => (
                          <script
                            key={index}
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                              __html: scriptContent,
                            }}
                          />
                        ),
                      );
                    } catch (error) {
                      return null;
                    }
                  })()}
              </Head>

              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blogs-breadcromb">
                      <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <Link href="/">Home</Link>
                          </li>

                          <li className="breadcrumb-item">
                            <Link href="/blog/">Blog</Link>
                          </li>

                          <li className="breadcrumb-item active">
                            {item.title}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>

                <BlogSearchinner />

                <div className="row g-5 justify-content-center">
                  <div className="col-lg-8">
                    <div className="blogs-single-post-sec">
                      <div className="blogs-lates blogs-lates-top-head">
                        <h1>{item.title}</h1>

                        <div className="blogs-info-list">
                          <div className="left-list">
                            <span className="user">
                              <Link
                                href={`/blog/author/${cleanSlug(
                                  encodeURIComponent(
                                    item.author.split(" ").join("-"),
                                  ),
                                )}/`}
                              >
                                {item.author}
                              </Link>
                            </span>

                            <>
                              {item.publish_date && (
                                <span className="date">
                                  <a>
                                    <i className="bi bi-calendar-event"></i>{" "}
                                    Published: {formatDate(item.publish_date)}
                                  </a>
                                </span>
                              )}

                              {item.updated_at &&
                                item.publish_date &&
                                formatDate(item.updated_at) !==
                                formatDate(item.publish_date) && (
                                  <span className="date">
                                    <a>
                                      <i className="bi bi-arrow-repeat"></i>{" "}
                                      Updated: {formatDate(item.updated_at)}
                                    </a>
                                  </span>
                                )}
                            </>

                            <span className="time">
                              <a>
                                {item.read_time && (
                                  <>
                                    <i className="bi bi-clock"></i>{" "}
                                    {item.read_time}
                                  </>
                                )}
                              </a>
                            </span>

                            <span className="cate">
                              <Link
                                href={`/blog/category/${cleanSlug(item.category_slug)}/`}
                              >
                                <span>
                                  <i className="bi bi-collection"></i>{" "}
                                  {item.category}
                                </span>
                              </Link>
                            </span>
                          </div>

                          <div className="sociallist">
                            {mounted && (
                              <>
                                <FacebookShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${cleanSlug(item.title_slug)}/`}
                                  quote={item.title}
                                >
                                  <a>
                                    <i className="bi bi-facebook"></i>
                                  </a>
                                </FacebookShareButton>

                                <TwitterShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${cleanSlug(item.title_slug)}/`}
                                  quote={item.title}
                                >
                                  <a>
                                    <i className="bi bi-twitter-x"></i>
                                  </a>
                                </TwitterShareButton>

                                <LinkedinShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${cleanSlug(item.title_slug)}/`}
                                  source={item.title}
                                >
                                  <a>
                                    <i className="bi bi-linkedin"></i>
                                  </a>
                                </LinkedinShareButton>
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="blogs-content">
                        <div className="blogs-content-inner">
                          {mounted &&
                            (() => {
                              let tocInserted = false;

                              return parse(
                                updatedHtml || item.description || "",
                                {
                                  replace: (domNode) => {
                                    if (domNode.name === "p" && !tocInserted) {
                                      tocInserted = true;

                                      return (
                                        <>
                                          <p>
                                            {domToReact(domNode.children || [])}
                                          </p>

                                          <TableOfContents
                                            toc={toc}
                                            showAllToc={showAllToc}
                                            setShowAllToc={setShowAllToc}
                                          />
                                        </>
                                      );
                                    }

                                    if (
                                      domNode.name === "img" &&
                                      domNode.attribs?.src
                                    ) {
                                      const { src, alt, width, height } =
                                        domNode.attribs;

                                      return (
                                        <div
                                          style={{
                                            position: "relative",
                                            width: "100%",
                                            margin: "30px 0",
                                          }}
                                        >
                                          <Image
                                            src={src}
                                            alt={alt || "blog-image"}
                                            width={Number(width) || 1200}
                                            height={Number(height) || 700}
                                            sizes="(max-width:768px) 100vw,1200px"
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                            }}
                                            quality={75}
                                            loading="lazy"
                                          />
                                        </div>
                                      );
                                    }

                                    if (domNode.name === "iframe") {
                                      return (
                                        <iframe
                                          {...domNode.attribs}
                                          loading="lazy"
                                          style={{
                                            width: "100%",
                                            minHeight: "400px",
                                          }}
                                        />
                                      );
                                    }

                                    return undefined;
                                  },
                                },
                              );
                            })()}
                        </div>

                        <div className="sociallist sociallist-bott">
                          {mounted && (
                            <>
                              <FacebookShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                media={`${item.meta_image}`}
                                quote={item.title}
                              >
                                <a>
                                  <i className="bi bi-facebook"></i>
                                </a>
                              </FacebookShareButton>

                              <TwitterShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                media={`${item.meta_image}`}
                                quote={item.title}
                              >
                                <a>
                                  <i className="bi bi-twitter-x"></i>
                                </a>
                              </TwitterShareButton>

                              <LinkedinShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                media={`${item.meta_image}`}
                                source={item.title}
                              >
                                <a>
                                  <i className="bi bi-linkedin"></i>
                                </a>
                              </LinkedinShareButton>
                            </>
                          )}
                        </div>

                        {authordetials &&
                          authordetials.map((author, i) => (
                            <div className="author-side-head" key={i}>
                              <div className="left">
                                <img
                                  src={author.profile_photo_path}
                                  alt="bg-pic"
                                  width={74}
                                  height={74}
                                />

                                <span className="link-din">
                                  <a
                                    href={author.linkedin_url}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    <i className="bi bi-linkedin"></i>
                                  </a>
                                </span>
                              </div>

                              <div className="right">
                                <Link
                                  href={`/blog/author/${author.name
                                    .split(" ")
                                    .join("-")}/`}
                                >
                                  <span>{author.name}</span>
                                </Link>

                                <p>{author.about}</p>
                              </div>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="prom-bann">
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
                          alt="d605-left"
                        />
                      </a>

                      <a
                        href="https://msdynamicsworld.com/vendor/dynamics-square-usa"
                        target="_blank"
                        rel="nofollow"
                      >
                        <Image
                          src="/img/blog-side001.png"
                          alt="blog-side-pic-2"
                          width={413}
                          height={168}
                        />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="row pd-90">
                  {blogcat &&
                    blogcat.map((item, i) => {
                      if (router.query.slug != item.title_slug) {
                        return (
                          <div className="col-lg-6" key={i}>
                            <div className="blogs-lates blogs-lates-repet">
                              <h3>
                                <Link
                                  href={`/blog/${cleanSlug(item.title_slug)}/`}
                                >
                                  {item.title}
                                </Link>
                              </h3>

                              <div className="blogs-info-list">
                                <span className="user">
                                  <Link
                                    href={`/blog/author/${item.author
                                      .split(" ")
                                      .join("-")}/`}
                                  >
                                    <i className="bi bi-person-circle"></i>{" "}
                                    {item.author}
                                  </Link>
                                </span>

                                <>
                                  {item.publish_date && (
                                    <span className="date">
                                      <a>
                                        <i className="bi bi-calendar-event"></i>{" "}
                                        Published:{" "}
                                        {formatDate(item.publish_date)}
                                      </a>
                                    </span>
                                  )}

                                  {item.updated_at &&
                                    item.publish_date &&
                                    formatDate(item.updated_at) !==
                                    formatDate(item.publish_date) && (
                                      <span className="date">
                                        <a>
                                          <i className="bi bi-arrow-repeat"></i>{" "}
                                          Updated: {formatDate(item.updated_at)}
                                        </a>
                                      </span>
                                    )}
                                </>

                                <span className="time">
                                  <a>
                                    {item.read_time && (
                                      <>
                                        <i className="bi bi-clock"></i>{" "}
                                        {item.read_time}
                                      </>
                                    )}
                                  </a>
                                </span>

                                <span className="cate">
                                  <Link
                                    href={`/blog/category/${cleanSlug(item.category_slug)}/`}
                                  >
                                    <span>
                                      <i className="bi bi-collection"></i>{" "}
                                      {item.category}
                                    </span>
                                  </Link>
                                </span>
                              </div>

                              <div className="b-card-info">
                                <p>{item.short_description.substring(0, 60)}</p>

                                <div className="page-link-read">
                                  <a
                                    href={`/blog/${cleanSlug(item.title_slug)}/`}
                                  >
                                    Read More <span>{">"}</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          ))}
      </section>
        <TimerModal />
    </>
  );
}

// ==========================
// SERVER SIDE RENDERING
// ==========================

export async function getServerSideProps(context) {
  /* =====================================
     CLEAN SLUG
  ===================================== */
  const cleanSlug = (slug = "") => {
    return String(slug).replace(/^\/+/, "").replace(/\/+$/, "").trim();
  };

  const slug = cleanSlug(context?.params?.slug);

  try {
    // MAIN BLOG FETCH
    const blogRes = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog_details/${slug}`,
      {
        headers: {
          Accept: "application/json",
        },
      },
    );

    // REAL 404 ONLY
    if (!blogRes.ok) {
      return {
        notFound: true,
      };
    }

    const blogsData = await blogRes.json();

    // EMPTY BLOG
    if (!blogsData || !Array.isArray(blogsData) || blogsData.length === 0) {
      return {
        notFound: true,
      };
    }

    /* =====================================
       CLEAN BLOG DATA
    ===================================== */
    const blogs = blogsData.map((blog) => ({
      ...blog,

      title_slug: cleanSlug(blog.title_slug),

      category_slug: cleanSlug(blog.category_slug),
    }));

    const category = cleanSlug(blogs?.[0]?.category_slug) || "";

    const author = blogs?.[0]?.author_email || "";

    // PARALLEL FETCH
    const [relatedRes, authorRes] = await Promise.allSettled([
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/related/${category}`,
      ),

      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/author/details/${author}`,
      ),
    ]);

    let blogcat = [];
    let authordetials = [];

    /* =====================================
       RELATED BLOGS
    ===================================== */
    if (relatedRes.status === "fulfilled" && relatedRes.value.ok) {
      const relatedData = await relatedRes.value.json();

      blogcat = relatedData.map((blog) => ({
        ...blog,

        title_slug: cleanSlug(blog.title_slug),

        category_slug: cleanSlug(blog.category_slug),
      }));
    }

    /* =====================================
       AUTHOR DETAILS
    ===================================== */
    if (authorRes.status === "fulfilled" && authorRes.value.ok) {
      authordetials = await authorRes.value.json();
    }

    return {
      props: {
        blogs,
        blogcat,
        authordetials,
        author,
      },
    };
  } catch (error) {
    console.error("BLOG PAGE ERROR:", error);

    return {
      notFound: true,
    };
  }
}

export default Post;
