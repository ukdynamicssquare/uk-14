import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Blog = ({ category }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(false);

        const baseUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        // Category = category blogs
        // No category = random blogs
        const url = category
          ? `${baseUrl}/api/blog/category/${encodeURIComponent(category)}?limit=3`
          : `${baseUrl}/api/random/allblog?limit=3`;

        console.log("BLOG URL:", url);

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }

        const result = await response.json();

        if (controller.signal.aborted) return;

        // Support different API response formats
        let posts = [];

        if (Array.isArray(result)) {
          posts = result;
        } else if (Array.isArray(result.data)) {
          posts = result.data;
        } else if (Array.isArray(result.blogs)) {
          posts = result.blogs;
        } else if (Array.isArray(result.posts)) {
          posts = result.posts;
        }

        setBlogPosts(posts.slice(0, 3));

      } catch (err) {
        if (err.name === "AbortError") return;

        console.error("BLOG ERROR:", err);
        setError(true);
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchBlogs();

    return () => {
      controller.abort();
    };
  }, [category]);

  return (
    <div className="col-lg-6">

      {/* TITLE */}
      <div className="blogs-extra-title">
        <h3>Articles</h3>
      </div>

      {/* LOADING */}
      {loading && (
        <div className="blog-list">

          {[1, 2, 3].map((item) => (
            <div className="blogs-extra-left" key={item}>

              <div className="blogs-extra-left-img">
                <div className="blog-skeleton-image"></div>
              </div>

              <div className="blogs-extra-left-content">

                <div className="blog-skeleton-title"></div>

                <div className="blog-skeleton-date"></div>

              </div>

            </div>
          ))}

        </div>
      )}

      {/* ERROR */}
      {!loading && error && (
        <div
          className="blog-error"
          style={{
            color: "var(--color-red)",
            fontWeight: "600",
          }}
        >
          Failed to load blog posts. Please try again later.
        </div>
      )}

      {/* BLOGS */}
      {!loading && !error && blogPosts.length > 0 && (
        <div className="blog-list">

          {blogPosts.map((post, index) => {

            const slug =
              post.title_slug ||
              post.slug;

            const title =
              post.title ||
              "Blog Article";

            const image =
              post.image ||
              post.featured_image;

            return (
              <div
                className="blogs-extra-left"
                key={
                  post.id ||
                  post._id ||
                  slug ||
                  index
                }
              >

                {/* IMAGE */}
                <div className="blogs-extra-left-img">

                  <Link href={`/blog/${slug}`}>

                    {image && (
                      <Image
                        src={image}
                        alt={title}
                        width={180}
                        height={100}
                        loading={
                          index === 0
                            ? "eager"
                            : "lazy"
                        }
                      />
                    )}

                  </Link>

                </div>

                {/* CONTENT */}
                <div className="blogs-extra-left-content">

                  <h4>
                    <Link href={`/blog/${slug}`}>
                      {title}
                    </Link>
                  </h4>

                  {post.publish_date && (
                    <span>
                      {post.publish_date}
                    </span>
                  )}

                </div>

              </div>
            );
          })}

        </div>
      )}

      {/* NO BLOGS */}
      {!loading &&
        !error &&
        blogPosts.length === 0 && (
          <div className="blog-no-data">
            No articles found.
          </div>
        )}

      {/* READ MORE */}
      {!error && (
        <div className="blog-read-more">

          <Link
            href="/blog/"
            className="bby-btn"
          >
            Read More Articles
          </Link>

        </div>
      )}

      <style jsx global>{`

        /* ==============================
           READ MORE
        ============================== */

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


        /* ==============================
           SKELETON
        ============================== */

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


        /* ==============================
           ERROR
        ============================== */

        .blog-error {
          padding: 15px 0;
        }


        /* ==============================
           NO DATA
        ============================== */

        .blog-no-data {
          padding: 20px 0;
          font-size: 14px;
        }


        /* ==============================
           MOBILE
        ============================== */

        @media (max-width: 767px) {

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

    </div>
  );
};

export default Blog;  