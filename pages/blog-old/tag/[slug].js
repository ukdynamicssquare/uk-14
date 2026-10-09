// BACKUP OF THE OLD BLOG DESIGN (snapshot of pages/blog at commit e8aa03d).
// Served at /blog-old with noindex (meta + X-Robots-Tag in next.config.js)
// and excluded from sitemap.xml. Safe to delete this whole folder.
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

import Pagination from "../../../components/Pagination";
import { paginate } from "../../../helpers/paginate";
import { BlogService } from "../../../helpers/blogApi";

export async function getServerSideProps(context) {
  const slug = context.query.slug;

  try {
    /*
     * Fetch current tag blogs + all tags
     */
    const [blogsRaw, tagsRaw] = await Promise.all([
      BlogService.getBlogsByTag(
        slug.split("-").join(" ")
      ),
      BlogService.getTags(),
    ]);

    console.log("BLOGS RESPONSE:", blogsRaw);
    console.log("TAGS RESPONSE:", tagsRaw);

    /*
     * ---------------------------------------
     * Extract blogs
     * ---------------------------------------
     */

    let blogsExtracted = [];

    if (Array.isArray(blogsRaw)) {
      blogsExtracted = blogsRaw;
    } else if (Array.isArray(blogsRaw?.data)) {
      blogsExtracted = blogsRaw.data;
    } else if (Array.isArray(blogsRaw?.blogs)) {
      blogsExtracted = blogsRaw.blogs;
    } else if (Array.isArray(blogsRaw?.posts)) {
      blogsExtracted = blogsRaw.posts;
    }

    /*
     * ---------------------------------------
     * Extract tags
     * ---------------------------------------
     */

    let tagsExtracted = [];

    if (Array.isArray(tagsRaw)) {
      tagsExtracted = tagsRaw;
    } else if (Array.isArray(tagsRaw?.data)) {
      tagsExtracted = tagsRaw.data;
    } else if (Array.isArray(tagsRaw?.tags)) {
      tagsExtracted = tagsRaw.tags;
    } else if (Array.isArray(tagsRaw?.data?.tags)) {
      tagsExtracted = tagsRaw.data.tags;
    }

    /*
     * ---------------------------------------
     * Extract string helper
     * ---------------------------------------
     */

    const extractString = (value) => {
      if (value === null || value === undefined) {
        return "";
      }

      if (typeof value === "string") {
        return value.trim();
      }

      if (typeof value === "number") {
        return String(value);
      }

      if (Array.isArray(value)) {
        return value.length
          ? extractString(value[0])
          : "";
      }

      if (typeof value === "object") {
        return (
          value.name ||
          value.title ||
          value.tag ||
          value.slug ||
          ""
        )
          .toString()
          .trim();
      }

      return String(value);
    };

    /*
     * ---------------------------------------
     * Format blogs
     * ---------------------------------------
     */

    const blogs = blogsExtracted.map((blog) => ({
      ...blog,

      title: extractString(blog.title),

      title_slug: extractString(
        blog.slug || blog.title_slug
      ),

      author:
        extractString(blog.author) || "Author",

      publish_date:
        blog.publishedAt ||
        blog.publish_date ||
        blog.createdAt ||
        null,

      read_time: blog.readingTimeMinutes
        ? `${blog.readingTimeMinutes} min read`
        : extractString(blog.read_time),

      short_description: extractString(
        blog.excerpt ||
          blog.short_description
      ),

      category:
        extractString(blog.category) ||
        "Category",

      category_slug: extractString(
        blog.category?.slug ||
          blog.category_slug
      ),
    }));

    /*
     * ---------------------------------------
     * Normalize all tags
     * ---------------------------------------
     */

    const alltags = tagsExtracted
      .map((tag) => {
        if (typeof tag === "string") {
          return tag.trim();
        }

        if (tag && typeof tag === "object") {
          return (
            tag.name ||
            tag.title ||
            tag.tag ||
            tag.slug ||
            ""
          )
            .toString()
            .trim();
        }

        return "";
      })
      .filter(Boolean)
      .filter(
        (tag, index, array) =>
          array.findIndex(
            (item) =>
              item.toLowerCase() ===
              tag.toLowerCase()
          ) === index
      );

    /*
     * ---------------------------------------
     * No blogs
     * ---------------------------------------
     */

    if (blogs.length === 0) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        blogs,
        alltags,
        currentTag: slug,
      },
    };
  } catch (error) {
    console.error("TAG PAGE ERROR:", error);

    return {
      notFound: true,
    };
  }
}

function TagBlogs({
  blogs,
  alltags,
  currentTag,
}) {
  const router = useRouter();

  const [currentPage, setCurrentPage] =
    useState(1);

  const pageSize = 6;

  /*
   * ---------------------------------------
   * Tag colors
   * ---------------------------------------
   */

  const tagColors = [
    "#D99A00",
    "#4A5FA8",
    "#222222",
    "#E53935",
    "#24436F",
    "#00897B",
    "#7B1FA2",
    "#1976D2",
    "#F57C00",
    "#388E3C",
    "#C2185B",
    "#5D4037",
  ];

  const getTagColor = (index) => {
    return tagColors[index % tagColors.length];
  };

  /*
   * ---------------------------------------
   * Tag slug
   * ---------------------------------------
   */

  const getTagSlug = (tag) => {
    return String(tag)
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  /*
   * ---------------------------------------
   * Tag name
   * ---------------------------------------
   */

  const formatTagName = (tag) => {
    if (!tag) return "";

    return String(tag)
      .split(" ")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");
  };

  /*
   * ---------------------------------------
   * Date format
   * ---------------------------------------
   */

  const formatDate = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (
      Number.isNaN(
        parsedDate.getTime()
      )
    ) {
      return String(date);
    }

    return parsedDate.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  };

  /*
   * ---------------------------------------
   * Pagination
   * ---------------------------------------
   */

  const onPageChange = (page) => {
    setCurrentPage(page);

    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const paginatedPosts = paginate(
    blogs,
    currentPage,
    pageSize
  );

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>
          {formatTagName(
            String(currentTag).replace(
              /-/g,
              " "
            )
          )}{" "}
          | Blog
        </title>

        <meta
          name="description"
          content={`Explore blogs about ${String(
            currentTag
          ).replace(
            /-/g,
            " "
          )}.`}
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div className="blogs-extra-new">
        <div className="container">

          {/* ===============================
              BREADCRUMB
          =============================== */}

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
                      <Link href="/blog-old/">
                        Blog
                      </Link>
                    </li>

                    <li className="breadcrumb-item">
                      <Link href="/blog-old/tag/">
                        Tag
                      </Link>
                    </li>

                    <li className="breadcrumb-item active">
                      {formatTagName(
                        String(
                          currentTag
                        ).replace(
                          /-/g,
                          " "
                        )
                      )}
                    </li>

                  </ol>

                </nav>

              </div>

            </div>
          </div>

          {/* ===============================
              MAIN CONTENT
          =============================== */}

          <div className="row">

            {/* ===============================
                TAG SIDEBAR
            =============================== */}

            <div className="col-lg-3">

              <div className="blogs-ex-side-cates">

                <h3>
                  Explore by Tag
                </h3>

                <ul>

                  {alltags &&
                  alltags.length > 0 ? (

                    alltags.map(
                      (tag, index) => {

                        const tagName =
                          String(tag).trim();

                        const tagSlug =
                          getTagSlug(
                            tagName
                          );

                        const currentSlug =
                          String(
                            currentTag
                          ).toLowerCase();

                        const isActive =
                          tagSlug ===
                          currentSlug;

                        const color =
                          getTagColor(index);

                        return (
                          <li
                            key={`${tagSlug}-${index}`}
                            className={
                              isActive
                                ? "active"
                                : ""
                            }
                          >

                            <Link
                              href={`/blog-old/tag/${tagSlug}`}
                            >

                              <span
                                className="blog-tagged"
                                style={{
                                  color: isActive
                                    ? "#fff"
                                    : color,

                                  borderColor:
                                    color,

                                  backgroundColor:
                                    isActive
                                      ? color
                                      : "transparent",

                                  "--tag-color":
                                    color,
                                }}
                              >

                                {formatTagName(
                                  tagName
                                )}

                              </span>

                            </Link>

                          </li>
                        );
                      }
                    )

                  ) : (

                    <li>
                      <span className="blog-tagged no-tags">
                        No tags available
                      </span>
                    </li>

                  )}

                </ul>

              </div>

            </div>

            {/* ===============================
                BLOG LIST
            =============================== */}

            <div className="col-lg-9">

              {paginatedPosts &&
              paginatedPosts.length > 0 ? (

                paginatedPosts.map(
                  (item, index) => (

                    <div
                      className="blogs-lates blogs-lates-rept"
                      key={
                        item._id ||
                        item.id ||
                        index
                      }
                    >

                      {/* BLOG TITLE */}

                      <h3>

                        <Link
                          href={`/blog-old/${item.title_slug}`}
                        >
                          {item.title}
                        </Link>

                      </h3>

                      {/* BLOG INFORMATION */}

                      <div className="blogs-info-list">

                        {/* AUTHOR */}

                        <span className="user">

                          <Link
                            href={`/blog-old/author/${String(
                              item.author ||
                                ""
                            )
                              .toLowerCase()
                              .trim()
                              .replace(
                                /\s+/g,
                                "-"
                              )}`}
                          >

                            <i className="bi bi-person-circle"></i>{" "}

                            {item.author}

                          </Link>

                        </span>

                        {/* DATE */}

                        <span className="date">

                          <a>

                            <i className="bi bi-calendar"></i>{" "}

                            {formatDate(
                              item.publish_date
                            )}

                          </a>

                        </span>

                        {/* READ TIME */}

                        <span className="time">

                          <a>

                            <i className="bi bi-clock"></i>{" "}

                            {item.read_time}

                          </a>

                        </span>

                        {/* CATEGORY */}

                        <span className="cate">

                          <Link
                            href={`/blog-old/category/${item.category_slug}`}
                          >

                            <i className="bi bi-collection"></i>{" "}

                            {item.category}

                          </Link>

                        </span>

                      </div>

                      {/* DESCRIPTION */}

                      <div className="b-card-info">

                        <p>
                          {
                            item.short_description
                          }
                        </p>

                        {/* READ MORE */}

                        <div className="page-link-read">

                          <Link
                            href={`/blog-old/${item.title_slug}`}
                          >
                            Read More{" "}
                            <span>
                              &gt;
                            </span>
                          </Link>

                        </div>

                      </div>

                    </div>

                  )
                )

              ) : (

                <div className="blogs-lates">

                  <h3>
                    No blogs found
                  </h3>

                </div>

              )}

              {/* ===============================
                  PAGINATION
              =============================== */}

              {blogs.length > pageSize && (

                <Pagination
                  items={blogs.length}
                  currentPage={
                    currentPage
                  }
                  pageSize={pageSize}
                  onPageChange={
                    onPageChange
                  }
                />

              )}

            </div>

          </div>

        </div>
      </div>

      {/* ======================================
          PAGE CSS
      ====================================== */}

      <style jsx global>{`

  /* =====================================
     TAG SIDEBAR
  ===================================== */

  .blogs-ex-side-cates {
    width: 100%;
    padding: 24px 20px;
    background: #f8f9fb;
    border: 1px solid #e7e9ee;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
      position: sticky;
  top: 7rem;
  display: block;
  overflow: hidden;
  }

  .blogs-ex-side-cates h3 {
    margin: 0 0 20px;
    padding-bottom: 15px;
    border-bottom: 1px solid #e1e3e8;

    font-size: 21px;
    font-weight: 600;
    line-height: 1.3;
    color: #20242a;
  }
  .blogs-ex-side-cates ul {
    display: flex;
    flex-direction: column;

    list-style: none;
    padding: 0;
    margin: 0;
height: 300px;
    overflow-y: scroll;
    gap: 5px;
  }

  .blogs-ex-side-cates ul li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .blogs-ex-side-cates ul li a {
    display: inline-block;
    text-decoration: none;
    border:none;
    padding:0px
  }

  /* =====================================
     TAG
  ===================================== */

  .blog-tagged {
    display: block;

    width: 100%;
    box-sizing: border-box;

    padding: 9px 14px;

    border: 1px solid;
    border-radius: 7px;

    background: #ffffff;

    font-size: 14px;
    font-weight: 500;
    line-height: 20px;

    transition:
      all 0.25s ease;

    cursor: pointer;
  }

  /* =====================================
     HOVER
  ===================================== */

  // .blog-tagged:hover {
  //   color: #ffffff !important;

  //   background-color: var(--tag-color) !important;
  //   border-color: var(--tag-color) !important;

  //   transform: translateX(5px);

  //   box-shadow:
  //     0 4px 10px rgba(0, 0, 0, 0.10);
  // }

  /* =====================================
     ACTIVE TAG
  ===================================== */

  .blogs-ex-side-cates
    ul
    li.active
    .blog-tagged {

    color: #ffffff !important;

    font-weight: 600;

    box-shadow:
      0 4px 10px rgba(0, 0, 0, 0.12);
  }

  /* =====================================
     NO TAGS
  ===================================== */

  .blog-tagged.no-tags {
    color: #777 !important;

    border-color: #ddd;

    background: #fff;

    cursor: default;
  }

  .blog-tagged.no-tags:hover {
    color: #777 !important;

    background: #fff !important;

    border-color: #ddd !important;

    transform: none;

    box-shadow: none;
  }

  /* =====================================
     TABLET
  ===================================== */

  @media (max-width: 991px) {

    .blogs-ex-side-cates {
      margin-bottom: 30px;
    }

    .blogs-ex-side-cates ul {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px;
    }

    .blogs-ex-side-cates ul li {
      width: auto;
    }

    .blog-tagged {
      width: auto;
      display: inline-block;
    }

  }

  /* =====================================
     MOBILE
  ===================================== */

  @media (max-width: 575px) {

    .blogs-ex-side-cates {
      padding: 18px 15px;
      border-radius: 10px;
    }

    .blogs-ex-side-cates h3 {
      font-size: 19px;
      margin-bottom: 15px;
    }

    .blog-tagged {
      padding: 7px 12px;
      font-size: 13px;
    }

  }

`}</style>
    </>
  );
}

export default TagBlogs;