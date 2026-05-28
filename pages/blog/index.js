import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import BlogSearch from "../../components/BlogSearch";
// import TimerModal from "../../components/TimerModal";

/* ===============================
   STATIC PROPS
================================ */
export async function getStaticProps() {
  const backend = process.env.NEXT_PUBLIC_BACKEND_URL;

  const urls = {
    blogs: `${backend}/api/allblog`,
    businesscentral: `${backend}/api/blog/category/Business/business-central`,
    categoryblogs: `${backend}/api/blog/category`,
    blograndomblogs: `${backend}/api/random/allblog`,
    blogtranding: `${backend}/api/blog/most/trending`,
  };

  const fetchSafeJson = async (label, url) => {
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      return await res.json();
    } catch (err) {
      console.error(
        `Failed to fetch [${label}] from ${url}:`,
        err.message
      );

      return [];
    }
  };

  const [
    blogs,
    businesscentral,
    categoryblogs,
    blograndomblogs,
    blogtranding,
  ] = await Promise.all([
    fetchSafeJson("blogs", urls.blogs),
    fetchSafeJson("businesscentral", urls.businesscentral),
    fetchSafeJson("categoryblogs", urls.categoryblogs),
    fetchSafeJson("blograndomblogs", urls.blograndomblogs),
    fetchSafeJson("blogtranding", urls.blogtranding),
  ]);

  /* ===============================
     OPTIMIZED BLOG OBJECT
  ================================ */
  const slimBlog = (post) => ({
    id: post.id,
    title: post.title,
    title_slug: post.title_slug,
    short_description:
      post.short_description?.substring(0, 180) || "",
    image: post.image,
    publish_date: post.publish_date,
    updated_at: post.updated_at,
    read_time: post.read_time,
    author: post.author,
    category: post.category,
    category_slug: post.category_slug,
  });

  return {
    props: {
      blogs: blogs.map(slimBlog),

      businesscentral: businesscentral.map(slimBlog),

      /* =====================================
         IMPORTANT PERFORMANCE OPTIMIZATION
         ONLY SEND 30 BLOGS
      ===================================== */
      blograndomblogs: blograndomblogs
        .slice(0, 30)
        .map(slimBlog),

      blogtranding: blogtranding.map(slimBlog),

      categoryblogs,
    },

    revalidate: 60,
  };
}

const categoryColors = [
  "#01808a",
  "#cd9e1b",
  "#3e4f8a",
  "#000000",
  "#b52c36",
  "#273266",
];

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

function Blogshome({
  blogs,
  businesscentral,
  categoryblogs,
  blograndomblogs,
  blogtranding,
}) {
  /* =====================================
     LOAD MORE STATE
  ===================================== */
  const [visibleBlogs, setVisibleBlogs] =
    useState(6);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <>
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
          property="og:locale"
          content="en_GB"
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
          property="og:site_name"
          content="Best Microsoft Dynamics 365 Blogs | Dynamics Square"
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
      </Head>

      {/* ===============================
          PAGE CSS
      ================================ */}
      <style jsx>{`
        .blog-fade-item {
          opacity: 0;
          transform: translateY(35px);
          animation: fadeBlogUp 0.7s ease forwards;
        }

        @keyframes fadeBlogUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .load-more-wrap {
          text-align: center;
          margin-top: 45px;
        }

        .load-more-btn {
          background: linear-gradient(
            135deg,
            #273266,
            #01808a
          );

          color: #fff;

          border: none;

          padding: 15px 38px;

          border-radius: 60px;

          font-size: 16px;

          font-weight: 700;

          cursor: pointer;

          position: relative;

          overflow: hidden;

          transition: all 0.4s ease;

          letter-spacing: 0.5px;
        }

        .load-more-btn:hover {
          transform: translateY(-5px);

          box-shadow: 0 18px 35px
            rgba(39, 50, 102, 0.28);
        }

        .load-more-btn::before {
          content: "";

          position: absolute;

          top: 0;

          left: -120%;

          width: 100%;

          height: 100%;

          background: rgba(255, 255, 255, 0.25);

          transform: skewX(-20deg);

          transition: all 0.7s ease;
        }

        .load-more-btn:hover::before {
          left: 120%;
        }

        .load-more-btn span {
          position: relative;
          z-index: 2;
        }
      `}</style>

      {/* ===============================
          MAIN LATEST SECTION
      ================================ */}
      <BlogSearch />

      {blogs.length > 0 && (
        <div className="blogs-main">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="blogs-lates">
                  <div className="blog-sian">
                    <span>Latest</span>
                  </div>

                  <h1>
                    <a
                      href={`/blog/${blogs[0].title_slug}/`}
                    >
                      {blogs[0].title}
                    </a>
                  </h1>

                  <div className="blogs-info-list">
                    <span className="user">
                      <a
                        href={`/blog/author/${blogs[0].author
                          ?.split(" ")
                          .join("-")}/`}
                      >
                        <i className="bi bi-person-circle"></i>{" "}
                        {blogs[0].author}
                      </a>
                    </span>

                    <>
                      {blogs?.[0]?.publish_date && (
                        <span className="date">
                          <a>
                            <i className="bi bi-calendar-event"></i>
                            {" "}Published:{" "}
                            {formatDate(
                              blogs[0].publish_date
                            )}
                          </a>
                        </span>
                      )}

                      {blogs?.[0]?.updated_at &&
                        blogs?.[0]
                          ?.publish_date &&
                        formatDate(
                          blogs[0].updated_at
                        ) !==
                          formatDate(
                            blogs[0]
                              .publish_date
                          ) && (
                          <span className="date ms-2">
                            <a>
                              <i className="bi bi-arrow-repeat"></i>
                              {" "}Updated:{" "}
                              {formatDate(
                                blogs[0]
                                  .updated_at
                              )}
                            </a>
                          </span>
                        )}
                    </>

                    <span className="time">
                      <a>
                        <i className="bi bi-clock"></i>{" "}
                        {blogs[0].read_time}
                      </a>
                    </span>

                    <span className="cate">
                      <a
                        href={`/blog/category/${blogs[0].category_slug}/`}
                      >
                        <i className="bi bi-collection"></i>{" "}
                        {blogs[0].category}
                      </a>
                    </span>
                  </div>

                  <div className="b-card-info">
                    <p>
                      {blogs[0]
                        .short_description?.substring(
                          0,
                          180
                        )}
                      ...
                    </p>

                    <div className="page-link-read">
                      <a
                        href={`/blog/${blogs[0].title_slug}/`}
                      >
                        Read More{" "}
                        <span>{">"}</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="prom-bann">
                  <a
                    href={`/blog/${blogs[0].title_slug}/`}
                  >
                    <img
                      src={blogs[0].image}
                      alt={blogs[0].title}
                    />
                  </a>
                </div>
              </div>

              {/* ===============================
                  BUSINESS CENTRAL SIDE
              ================================ */}
              <div className="col-lg-6">
                <div className="blogs-side">
                  <div
                    className="blog-sian"
                    style={{
                      marginBottom: "30px",
                    }}
                  >
                    <span>
                      Insights from Forbes
                      Technology Council
                    </span>
                  </div>

                  <div className="blg-side-new">
                    <a
                      href="https://www.forbes.com/councils/forbestechcouncil/2025/10/30/how-to-reimagine-erp-for-the-ai-era-of-business/"
                      target="_balnk"
                      rel="nofollow"
                    >
                      <img
                        src="/img/fab-3.jpg"
                        width={140}
                        alt="fob-ai"
                      />

                      <h3>
                        How To Reimagine ERP For
                        The AI Era Of Business
                      </h3>
                    </a>

                    <div className="user-grid">
                      <span className="user">
                        <a
                          href="https://www.forbes.com/councils/forbestechcouncil/people/manishgoyal/"
                          target="_balnk"
                          rel="nofollow"
                        >
                          <i className="bi bi-person-circle"></i>{" "}
                          Manish Goyal
                        </a>

                        <span className="date">
                          <a>
                            <i className="bi bi-calendar-event"></i>{" "}
                            Oct 30, 2025
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="blg-side-new">
                    <a
                      href="https://www.forbes.com/councils/forbestechcouncil/2025/09/19/how-to-integrate-generative-ai-as-a-strategic-partner/"
                      target="_balnk"
                      rel="nofollow"
                    >
                      <img
                        src="/img/fob-ai.jpg"
                        width={140}
                        alt="fob-ai"
                      />

                      <h3>
                        How to integrate
                        generative AI as a
                        strategic partner
                      </h3>
                    </a>

                    <div className="user-grid">
                      <span className="user">
                        <a
                          href="https://www.forbes.com/councils/forbestechcouncil/people/manishgoyal/"
                          target="_balnk"
                          rel="nofollow"
                        >
                          <i className="bi bi-person-circle"></i>{" "}
                          Manish Goyal
                        </a>

                        <span className="date">
                          <a>
                            <i className="bi bi-calendar-event"></i>{" "}
                            Sep 19, 2025
                          </a>
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="blg-side-new">
                    <a
                      href="https://www.forbes.com/councils/forbestechcouncil/2025/08/29/how-to-address-or-avoid-negative-feedback-on-saas-ux-rollouts/"
                      target="_balnk"
                      rel="nofollow"
                    >
                      <img
                        src="/img/saas-ux.jpg"
                        width={140}
                        alt="saas-ux"
                      />

                      <h3>
                        How To Address (Or Avoid)
                        Negative Feedback On SaaS
                        UX Rollouts
                      </h3>
                    </a>
                  </div>

                  <div className="nxx-image">
                    <a
                      href="https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35"
                      target="_balnk"
                      rel="nofollow"
                    >
                      <img
                        src="/img/forber-01.png"
                        alt="menu--ss"
                        width={400}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ===============================
          TRENDING SECTION
      ================================ */}
      <div className="mid-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              {blogtranding.map((item, i) => (
                <div
                  className="blogs-lates"
                  key={`tr-${i}`}
                >
                  <div className="blog-sian">
                    <span>Most Trending</span>
                  </div>

                  <h2>
                    <a
                      href={`/blog/${item.title_slug}/`}
                    >
                      {item.title}
                    </a>
                  </h2>

                  <div className="blogs-info-list">
                    <span className="user">
                      <a
                        href={`/blog/author/${item.author
                          ?.split(" ")
                          .join("-")}/`}
                      >
                        <i className="bi bi-person-circle"></i>{" "}
                        {item.author}
                      </a>
                    </span>
                      <>
                      {item?.publish_date && (
                        <span className="date">
                          <a>
                            <i className="bi bi-calendar-event"></i>
                            {" "}Published: {formatDate(item.publish_date)}
                          </a>
                        </span>
                      )}

                      {item?.updated_at &&
                        item?.publish_date &&
                        formatDate(item.updated_at) !== formatDate(item.publish_date) && (
                          <span className="date ms-2">
                            <a>
                              <i className="bi bi-arrow-repeat"></i>
                              {" "}Updated: {formatDate(item.updated_at)}
                            </a>
                          </span>
                        )}
                    </>
                    <span className="time">
                      <a>
                        <i className="bi bi-clock"></i>{" "}
                        {item.read_time}
                      </a>
                    </span>
                  </div>

                  <div className="b-card-info">
                    <p>
                      {item.short_description?.substring(
                        0,
                        180
                      )}
                      ...
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
              ))}
            </div>

            <div className="col-lg-6">
              <div
                className="prom-bann"
                style={{
                  textAlign: "center",
                }}
              >
                <a
                  href="/schedule-a-demo/"
                  target="_blank"
                  style={{
                    marginBottom: "20px",
                    display: "block",
                  }}
                >
                  <Image
                    src="/img/blog-side-pic-top.png"
                    width={413}
                    height={350}
                    alt="schedule"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===============================
          RANDOM BLOGS + CATEGORIES
      ================================ */}
      <div className="blogs-extra-new">
        <div className="container">
          <div className="row">
            {/* ===============================
                CATEGORY
            ================================ */}
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate">
                <h3>Explore by Topic</h3>

                <ul>
                  {categoryblogs.map((item, i) => (
                    <li
                      key={`cat-${i}`}
                      style={{
                        listStyle: "none",
                        margin: "5px 0",
                      }}
                    >
                      <a
                        href={`/blog/category/${item.category_slug}/`}
                        style={{
                          textDecoration: "none",

                          color:
                            categoryColors[
                              i %
                                categoryColors.length
                            ],

                          border: `1px solid ${
                            categoryColors[
                              i %
                                categoryColors.length
                            ]
                          }`,
                        }}
                      >
                        {item.category_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ===============================
                BLOG LIST
            ================================ */}
            <div className="col-lg-9">
              {blograndomblogs
                .slice(0, visibleBlogs)
                .map((item, i) => (
                  <div
                    className="blogs-lates blogs-lates-rept blog-fade-item"
                    key={`rnd-${i}`}
                    style={{
                      animationDelay: `${
                        i * 0.08
                      }s`,
                    }}
                  >
                    <h3>
                      <a
                        href={`/blog/${item.title_slug}/`}
                      >
                        {item.title}
                      </a>
                    </h3>

                    <div className="blogs-info-list">
                      <span className="user">
                        <a
                          href={`/blog/author/${item.author
                            ?.split(" ")
                            .join("-")}/`}
                        >
                          <i className="bi bi-person-circle"></i>{" "}
                          {item.author}
                        </a>
                      </span>

                      <>
                        {item?.publish_date && (
                          <span className="date">
                            <a>
                              <i className="bi bi-calendar-event"></i>
                              {" "}Published:{" "}
                              {formatDate(
                                item.publish_date
                              )}
                            </a>
                          </span>
                        )}

                        {item?.updated_at &&
                          item?.publish_date &&
                          formatDate(
                            item.updated_at
                          ) !==
                            formatDate(
                              item.publish_date
                            ) && (
                            <span className="date ms-2">
                              <a>
                                <i className="bi bi-arrow-repeat"></i>
                                {" "}Updated:{" "}
                                {formatDate(
                                  item.updated_at
                                )}
                              </a>
                            </span>
                          )}
                      </>

                      <span className="time">
                        <a>
                          <i className="bi bi-clock"></i>{" "}
                          {item.read_time}
                        </a>
                      </span>

                      <span className="cate">
                        <a
                          href={`/blog/category/${item.category_slug}/`}
                        >
                          <i className="bi bi-collection"></i>{" "}
                          {item.category}
                        </a>
                      </span>
                    </div>

                    <div className="b-card-info">
                      <p>
                        {item.short_description?.substring(
                          0,
                          180
                        )}
                        ...
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
                ))}

              {/* ===============================
                  LOAD MORE BUTTON
              ================================ */}
              {visibleBlogs <
                blograndomblogs.length && (
                <div className="load-more-wrap">
                  <button
                    className="load-more-btn"
                    onClick={handleLoadMore}
                  >
                    <span>
                      Load More Articles
                    </span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <TimerModal /> */}
    </>
  );
}

export default Blogshome;