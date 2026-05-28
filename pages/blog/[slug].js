import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import parse from "html-react-parser";
import Image from "next/image";
import * as cheerio from "cheerio";
import { useRouter } from "next/router";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import BlogSearchinner from "../../components/BlogSearchinner";

/* =========================================
   PARSE IMAGES
========================================= */
function parseImagesFromHtml(htmlContent) {
  if (!htmlContent) return [];

  const $ = cheerio.load(htmlContent.toString());

  const images = [];

  $("img").each((index, element) => {
    const src = $(element).attr("src");
    const alt = $(element).attr("alt");

    images.push({ src, alt });
  });

  return images;
}

/* =========================================
   COMPONENT
========================================= */
function Post({ blogs, blogcat, authordetials, author }) {
  const router = useRouter();

  const images = blogs?.[0]?.description
    ? parseImagesFromHtml(blogs[0].description)
    : [];

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /* =========================================
     DATE FORMAT
  ========================================= */
  function formatDate(date) {
    if (!date) return "";

    const parsedDate = new Date(
      String(date).replace(/\.\d+Z$/, "Z")
    );

    if (isNaN(parsedDate)) return "";

    return parsedDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "UTC",
    });
  }

  /* =========================================
     LOADING / EMPTY STATE
  ========================================= */
  if (!blogs || blogs.length < 1) {
    return (
      <div className="container py-5">
        <h2>Blog is updating...</h2>
      </div>
    );
  }

  return (
    <>
      <section>
        {blogs &&
          blogs.map((item, i) => (
            <div key={i}>
              {/* =========================================
                  SEO
              ========================================= */}
              <Head>
                <title>{item.meta_title}</title>

                <meta
                  name="description"
                  content={item.meta_description}
                />

                <link
                  rel="canonical"
                  href={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                />

                {item.rank == 1 && (
                  <meta
                    name="robots"
                    content="noindex, nofollow"
                  />
                )}

                <meta
                  property="og:title"
                  content={item.meta_title}
                />

                <meta
                  property="og:site_name"
                  content="Dynamics Square"
                />

                <meta
                  property="og:url"
                  content={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                />

                <meta
                  property="og:description"
                  content={item.meta_keyword}
                />

                <meta
                  property="og:type"
                  content="website"
                />

                <meta
                  property="og:image"
                  content={`${item.meta_image}`}
                />

                <meta
                  property="twitter:card"
                  content="summary_large_image"
                />

                <meta
                  property="twitter:title"
                  content={item.meta_title}
                />

                <meta
                  property="twitter:description"
                  content={item.meta_keyword}
                />

                <meta
                  property="twitter:image"
                  content={`${item.meta_image}`}
                />

                {/* JSON LD */}
                {item.additional_script &&
                  item.additional_script.trim() !== "{}" && (
                    <script
                      type="application/ld+json"
                      dangerouslySetInnerHTML={{
                        __html: item.additional_script,
                      }}
                    />
                  )}

                {/* MULTI SCRIPT */}
                {item.additional_multiscript &&
                  (() => {
                    try {
                      return JSON.parse(
                        item.additional_multiscript
                      ).map((scriptContent, index) => (
                        <script
                          key={index}
                          type="application/ld+json"
                          dangerouslySetInnerHTML={{
                            __html: scriptContent,
                          }}
                        />
                      ));
                    } catch (error) {
                      return null;
                    }
                  })()}
              </Head>

              <div className="container">

                {/* =========================================
                    BREADCRUMB
                ========================================= */}
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blogs-breadcromb">
                      <nav aria-label="breadcrumb">
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

                          <li className="breadcrumb-item active">
                            {item.title}
                          </li>
                        </ol>
                      </nav>
                    </div>
                  </div>
                </div>

                <BlogSearchinner />

                <div className="row g-5">

                  {/* =========================================
                      LEFT CONTENT
                  ========================================= */}
                  <div className="col-lg-8">

                    <div className="blogs-single-post-sec">

                      <div className="blogs-lates blogs-lates-top-head">

                        <h1>{item.title}</h1>

                        <div className="blogs-info-list">

                          <div className="left-list">

                            <span className="user">
                              <Link
                                href={`/blog/author/${encodeURIComponent(
                                  item.author
                                    .split(" ")
                                    .join("-")
                                )}/`}
                              >
                                {item.author}
                              </Link>
                            </span>

                            {/* PUBLISHED */}
                            {item.publish_date && (
                              <span className="date">
                                <a>
                                  <i className="bi bi-calendar-event"></i>

                                  {" "}
                                  Published:{" "}
                                  {formatDate(
                                    item.publish_date
                                  )}
                                </a>
                              </span>
                            )}

                            {/* UPDATED */}
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
                                    <i className="bi bi-arrow-repeat"></i>

                                    {" "}
                                    Updated:{" "}
                                    {formatDate(
                                      item.updated_at
                                    )}
                                  </a>
                                </span>
                              )}

                            {/* READ TIME */}
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

                            {/* CATEGORY */}
                            <span className="cate">
                              <Link
                                href={`/blog/category/${item.category_slug}/`}
                              >
                                <span>
                                  <i className="bi bi-collection"></i>{" "}
                                  {item.category}
                                </span>
                              </Link>
                            </span>

                          </div>

                          {/* SOCIAL */}
                          <div className="sociallist">
                            {mounted && (
                              <>
                                <FacebookShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                  quote={item.title}
                                >
                                  <a>
                                    <i className="bi bi-facebook"></i>
                                  </a>
                                </FacebookShareButton>

                                <TwitterShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                  quote={item.title}
                                >
                                  <a>
                                    <i className="bi bi-twitter-x"></i>
                                  </a>
                                </TwitterShareButton>

                                <LinkedinShareButton
                                  url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
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

                      {/* =========================================
                          BLOG CONTENT
                      ========================================= */}
                      <div className="blogs-content">

                        <div className="blogs-content-inner">

                          {mounted &&
                            parse(item.description || "", {
                              replace: (domNode) => {

                                /* IMAGE OPTIMIZATION */
                                if (
                                  domNode.name === "img" &&
                                  domNode.attribs?.src
                                ) {

                                  const {
                                    src,
                                    alt,
                                    width,
                                    height,
                                  } = domNode.attribs;

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
                                        alt={
                                          alt || "blog-image"
                                        }
                                        width={
                                          Number(width) ||
                                          1200
                                        }
                                        height={
                                          Number(height) ||
                                          700
                                        }
                                        sizes="(max-width: 768px) 100vw, 1200px"
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

                                /* IFRAME LAZY */
                                if (
                                  domNode.name === "iframe"
                                ) {
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
                            })}
                        </div>

                        {/* SOCIAL BOTTOM */}
                        <div className="sociallist sociallist-bott">

                          {mounted && (
                            <>
                              <FacebookShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                quote={item.title}
                              >
                                <a>
                                  <i className="bi bi-facebook"></i>
                                </a>
                              </FacebookShareButton>

                              <TwitterShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                quote={item.title}
                              >
                                <a>
                                  <i className="bi bi-twitter-x"></i>
                                </a>
                              </TwitterShareButton>

                              <LinkedinShareButton
                                url={`https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`}
                                source={item.title}
                              >
                                <a>
                                  <i className="bi bi-linkedin"></i>
                                </a>
                              </LinkedinShareButton>
                            </>
                          )}
                        </div>

                        {/* AUTHOR */}
                        {authordetials &&
                          authordetials.map(
                            (author, i) => (
                              <div
                                className="author-side-head"
                                key={i}
                              >
                                <div className="left">

                                  <img
                                    src={
                                      author.profile_photo_path
                                    }
                                    alt="author"
                                    width={74}
                                    height={74}
                                  />

                                  <span className="link-din">
                                    <a
                                      href={
                                        author.linkedin_url
                                      }
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
                                    <span>
                                      {author.name}
                                    </span>
                                  </Link>

                                  <p>{author.about}</p>

                                </div>
                              </div>
                            )
                          )}

                      </div>
                    </div>
                  </div>

                  {/* =========================================
                      SIDEBAR
                  ========================================= */}
                  <div className="col-lg-4">

                    <div className="prom-bann">

                      <a
                        style={{
                          marginBottom: "20px",
                          display: "block",
                        }}
                        rel="nofollow"
                        href="https://www.forbes.com/councils/forbestechcouncil/2026/04/21/the-cost-illusion-in-erp-why-companies-overspend/"
                        target="_blank"
                      >
                        <Image
                          src="/img/forber-03.png"
                          width={413}
                          height={392}
                          alt="forbes"
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

                {/* =========================================
                    RELATED BLOGS
                ========================================= */}
                <div className="row pd-90">

                  {blogcat &&
                    blogcat.map((item, i) => {

                      if (
                        router.query.slug !=
                        item.title_slug
                      ) {

                        return (
                          <div
                            className="col-lg-6"
                            key={i}
                          >

                            <div className="blogs-lates blogs-lates-repet">

                              <h3>
                                <Link
                                  href={`/blog/${item.title_slug}/`}
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

                                <span className="time">
                                  <a>
                                    <i className="bi bi-clock"></i>{" "}
                                    {item.read_time}
                                  </a>
                                </span>

                              </div>

                              <div className="b-card-info">

                                <p>
                                  {item.short_description.substring(
                                    0,
                                    60
                                  )}
                                </p>

                                <div className="page-link-read">
                                  <a
                                    href={`/blog/${item.title_slug}/`}
                                  >
                                    Read More{" "}
                                    <span>{">"}</span>
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
    </>
  );
}

/* =========================================
   STATIC PATHS
========================================= */
export async function getStaticPaths() {
  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/allblogsfetch`
    );

    const allBlogs = await res.json();

    const paths = allBlogs
      .filter(
        (blog) =>
          blog?.title_slug &&
          typeof blog.title_slug === "string"
      )
      .map((blog) => ({
        params: {
          slug: blog.title_slug,
        },
      }));

    return {
      paths,

      // IMPORTANT
      fallback: "blocking",
    };

  } catch (error) {

    console.error(
      "Error fetching static paths:",
      error
    );

    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

/* =========================================
   STATIC PROPS + ISR
========================================= */
export async function getStaticProps(context) {

  const { params } = context;

  const slug = params.slug;

  try {

    /* BLOG FETCH */
    const blogRes = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog_details/${slug}`
    );

    /* API FAILED */
    if (!blogRes.ok) {
      return {
        notFound: true,

        // retry quickly
        revalidate: 10,
      };
    }

    const blogs = await blogRes.json();

    /* REDIRECT SLUG SUPPORT */
    if (blogs?.redirect_slug) {

      return {
        redirect: {
          destination: `/blog/${blogs.redirect_slug}/`,
          permanent: true,
        },
      };
    }

    /* BLOG EMPTY */
    if (
      !blogs ||
      !Array.isArray(blogs) ||
      blogs.length === 0
    ) {

      return {
        notFound: true,

        // prevent long cached 404
        revalidate: 10,
      };
    }

    const category =
      blogs?.[0]?.category_slug || "";

    const author =
      blogs?.[0]?.author_email || "";

    /* PARALLEL FETCH */
    const [relatedRes, authorRes] =
      await Promise.allSettled([

        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/related/${category}`
        ),

        fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blog/author/details/${author
            .split("-")
            .join(" ")}`
        ),
      ]);

    /* RELATED BLOGS */
    let blogcat = [];

    if (
      relatedRes.status === "fulfilled" &&
      relatedRes.value.ok
    ) {

      try {
        blogcat =
          await relatedRes.value.json();
      } catch (e) {
        blogcat = [];
      }
    }

    /* AUTHOR DETAILS */
    let authordetials = [];

    if (
      authorRes.status === "fulfilled" &&
      authorRes.value.ok
    ) {

      try {
        authordetials =
          await authorRes.value.json();
      } catch (e) {
        authordetials = [];
      }
    }

    return {
      props: {
        blogs,
        blogcat,
        authordetials,
        author,
      },

      // ISR
      revalidate: 300,
    };

  } catch (error) {

    console.error(
      "ISR BLOG PAGE ERROR:",
      error
    );

    return {
      notFound: true,

      // retry quickly
      revalidate: 10,
    };
  }
}

export default Post;

