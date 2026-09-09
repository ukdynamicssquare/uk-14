
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogService, BACKEND_URL } from "../helpers/blogApi";

const Blog = ({ category }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // IMAGE URL
  // ==========================================

  const getImageUrl = (image) => {
    if (!image) {
      return "/images/blog-placeholder.jpg";
    }

    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    return `${BACKEND_URL.replace(/\/$/, "")}/${image.replace(
      /^\//,
      ""
    )}`;
  };

  // ==========================================
  // DATE FORMAT
  // ==========================================

  const formatDate = (date) => {
    if (!date) return "";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return "";
    }

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ==========================================
  // GET DATE FOR SORTING
  // ==========================================

  const getPostDate = (post) => {
    return (
      post?.publish_date ||
      post?.publishedAt ||
      post?.createdAt ||
      post?.updatedAt ||
      ""
    );
  };

  // ==========================================
  // EXTRACT POSTS FROM API RESPONSE
  // ==========================================

  const extractPosts = (data) => {
    if (Array.isArray(data)) {
      return data;
    }

    if (Array.isArray(data?.blogs)) {
      return data.blogs;
    }

    if (Array.isArray(data?.data)) {
      return data.data;
    }

    if (Array.isArray(data?.posts)) {
      return data.posts;
    }

    return [];
  };

  // ==========================================
  // FETCH BLOGS
  // ==========================================

  useEffect(() => {
    let isMounted = true;

    const loadBlogs = async () => {
      try {
        setLoading(true);

        let posts = [];

        // ======================================
        // CATEGORY SELECTED
        // ======================================

        if (category) {
          console.log(
            "BLOG: Loading category:",
            category
          );

          const categoryData =
            await BlogService.getBlogsByCategory(
              category,
              3
            );

          posts = extractPosts(categoryData);

          console.log(
            "BLOG: Category posts:",
            posts
          );

          // ====================================
          // CATEGORY HAS NO POSTS
          // GET LATEST 3 BLOGS
          // ====================================

          if (posts.length === 0) {
            console.log(
              "BLOG: Category empty, loading latest blogs"
            );

            const latestData =
              await BlogService.getBlogs(3);

            posts = extractPosts(latestData);

            console.log(
              "BLOG: Latest posts:",
              posts
            );
          }
        }

        // ======================================
        // NO CATEGORY
        // GET LATEST 3 BLOGS
        // ======================================

        else {
          console.log(
            "BLOG: No category, loading latest blogs"
          );

          const latestData =
            await BlogService.getBlogs(3);

          posts = extractPosts(latestData);
        }

        if (!isMounted) return;

        // ======================================
        // SORT BY LATEST DATE
        // ======================================

        posts = [...posts].sort((a, b) => {
          const dateA = new Date(
            getPostDate(a)
          ).getTime();

          const dateB = new Date(
            getPostDate(b)
          ).getTime();

          // Keep valid dates first
          if (Number.isNaN(dateA)) return 1;
          if (Number.isNaN(dateB)) return -1;

          return dateB - dateA;
        });

        // ======================================
        // ONLY SHOW 3
        // ======================================

        setBlogPosts(posts.slice(0, 3));

      } catch (error) {
        console.error(
          "BLOG COMPONENT ERROR:",
          error
        );

        if (isMounted) {
          setBlogPosts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadBlogs();

    return () => {
      isMounted = false;
    };
  }, [category]);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="col-lg-6">
        <div className="blogs-extra-title">
          <h3>Articles</h3>
        </div>

        <div className="blog-list">
          {[1, 2, 3].map((item) => (
            <div
              className="blogs-extra-left"
              key={item}
            >
              <div className="blogs-extra-left-img">
                <div className="blog-skeleton-image" />
              </div>

              <div className="blogs-extra-left-content">
                <div className="blog-skeleton-title" />
                <div className="blog-skeleton-date" />
              </div>
            </div>
          ))}
        </div>

        <BlogStyles />
      </div>
    );
  }

  // ==========================================
  // MAIN
  // ==========================================

  return (
    <div className="col-lg-6">
      {/* TITLE */}

      <div className="blogs-extra-title">
        <h3>Articles</h3>
      </div>

      {/* BLOGS */}

      {blogPosts.length > 0 ? (
        <div className="blog-list">
          {blogPosts.map((post, index) => {
            // ==================================
            // SLUG
            // ==================================

            const slug =
              post?.title_slug ||
              post?.slug ||
              post?.url_slug ||
              "";

            // ==================================
            // TITLE
            // ==================================

            const title =
              post?.title ||
              post?.name ||
              "Blog Article";

            // ==================================
            // IMAGE
            // ==================================

            const rawImage =
              post?.image ||
              post?.featured_image ||
              post?.featuredImage?.url ||
              (typeof post?.featuredImage === "string"
                ? post.featuredImage
                : "") ||
              "";

            const imageUrl =
              getImageUrl(rawImage);

            // ==================================
            // DATE
            // ==================================

            const rawDate =
              getPostDate(post);

            const formattedDate =
              formatDate(rawDate);

            // ==================================
            // BLOG URL
            // ==================================

            const blogUrl = slug
              ? `/blog/${slug}/`
              : "/blog/";

            return (
              <div
                className="blogs-extra-left"
                key={
                  post?._id ||
                  post?.id ||
                  slug ||
                  index
                }
              >
                {/* IMAGE */}

                <div className="blogs-extra-left-img">
                  <Link href={blogUrl}>
                    <Image
                      src={imageUrl}
                      alt={title}
                      width={180}
                      height={100}
                      sizes="(max-width: 767px) 120px, 180px"
                      priority={index === 0}
                      className="blog-card-image"
                    />
                  </Link>
                </div>

                {/* CONTENT */}

                <div className="blogs-extra-left-content">
                  <h4>
                    <Link href={blogUrl}>
                      {title}
                    </Link>
                  </h4>

                  {formattedDate && (
                    <span className="blog-date">
                      {formattedDate}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="blog-no-data">
          No articles found.
        </div>
      )}

      {/* READ MORE */}

      <div className="blog-read-more">
        <Link
          href="/blog/"
          className="bby-btn"
        >
          Read More Articles
        </Link>
      </div>

      <BlogStyles />
    </div>
  );
};

// ==================================================
// STYLES
// ==================================================

const BlogStyles = () => (
  <style jsx global>{`
    .blog-list {
      width: 100%;
    }

    .blogs-extra-left {
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 20px;
    }

    .blogs-extra-left-img {
      width: 180px;
      min-width: 180px;
      height: 100px;
      overflow: hidden;
      flex-shrink: 0;
    }

    .blog-card-image {
      width: 180px !important;
      height: 100px !important;
      max-width: 100%;
      display: block;
      object-fit: cover;
      border-radius: 4px;
    }

    .blogs-extra-left-content {
      flex: 1;
      min-width: 0;
    }

    .blogs-extra-left-content h4 {
      margin: 0 0 8px;
      line-height: 1.35;
    }

    .blogs-extra-left-content h4 a {
      text-decoration: none;
    }

    .blog-date {
      display: block;
      font-size: 13px;
      line-height: 1.4;
    }

    .blog-read-more {
      text-align: center;
      margin-top: 15px;
    }

    .bby-btn {
      background: #494392;
      display: inline-block;
      color: #fff;
      padding: 7px 14px;
      border-radius: 5px;
      box-shadow: 1px 3px 18px #49439291;
      font-size: 14px;
      text-decoration: none;
      transition: 0.3s ease;
    }

    .bby-btn:hover {
      background: #bb2b36 !important;
      color: #fff;
    }

    .blog-no-data {
      padding: 20px 0;
      font-size: 14px;
    }

    .blog-skeleton-image {
      width: 180px;
      height: 100px;
      border-radius: 4px;
      background: #eeeeee;
      animation: blogPulse 1.2s infinite;
    }

    .blog-skeleton-title {
      width: 220px;
      height: 18px;
      border-radius: 4px;
      background: #eeeeee;
      margin-bottom: 12px;
      animation: blogPulse 1.2s infinite;
    }

    .blog-skeleton-date {
      width: 100px;
      height: 12px;
      border-radius: 4px;
      background: #eeeeee;
      animation: blogPulse 1.2s infinite;
    }

    @keyframes blogPulse {
      0% {
        opacity: 0.5;
      }

      50% {
        opacity: 1;
      }

      100% {
        opacity: 0.5;
      }
    }

    @media (max-width: 767px) {
      .blogs-extra-left {
        gap: 12px;
      }

      .blogs-extra-left-img {
        width: 120px;
        min-width: 120px;
        height: 80px;
      }

      .blog-card-image {
        width: 120px !important;
        height: 80px !important;
      }

      .blog-skeleton-image {
        width: 120px;
        height: 80px;
      }

      .blog-skeleton-title {
        width: 160px;
      }

      .blog-skeleton-date {
        width: 80px;
      }
    }
  `}</style>
);

export default Blog;

