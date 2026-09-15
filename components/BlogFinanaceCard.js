import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogClient, BACKEND_URL } from "../helpers/blogClient";

const BlogFinanaceCard = ({ categorySlug }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getImageUrl = (image) => {
    if (!image) {
      return "/images/blog-placeholder.jpg";
    }

    // API already returns full URL
    if (
      image.startsWith("http://") ||
      image.startsWith("https://")
    ) {
      return image;
    }

    // API returns /uploads/blog/xxxxx.png
    return `${BACKEND_URL.replace(/\/$/, "")}/${image.replace(
      /^\//,
      ""
    )}`;
  };

  useEffect(() => {
    let isMounted = true;

    const fetchBlogPosts = async () => {
      if (!categorySlug) {
        setBlogPosts([]);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(false);

        let data;

        if (categorySlug === "all") {
          data = await BlogClient.getBlogs(1000);
        } else {
          data = await BlogClient.getBlogsByCategory(
            categorySlug,
            1000
          );
        }

        if (!isMounted) return;

        if (Array.isArray(data)) {
          setBlogPosts(data);
        } else if (Array.isArray(data?.blogs)) {
          setBlogPosts(data.blogs);
        } else if (Array.isArray(data?.data)) {
          setBlogPosts(data.data);
        } else {
          setBlogPosts([]);
        }
      } catch (err) {
        console.error("Failed to load blog posts:", err);

        if (isMounted) {
          setError(true);
          setBlogPosts([]);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchBlogPosts();

    return () => {
      isMounted = false;
    };
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="blog-loading">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="col-lg-6 align-self-center"
        style={{
          color: "var(--color-red)",
          fontWeight: "600",
        }}
      >
        Failed to load blog posts. Please try again later.
      </div>
    );
  }

  if (!blogPosts.length) {
    return (
      <div className="blog-empty">
        No blog posts found.
      </div>
    );
  }

  return (
    <>
      <div className="row">
        {blogPosts.slice(0, 3).map((post) => {
          const imageSrc = getImageUrl(
            post?.image ||
            post?.featuredImage?.url ||
            post?.featured_image
          );

          console.log("Finance card image:", imageSrc);

          return (
            <div
              key={
                post._id ||
                post.id ||
                post.title_slug ||
                post.slug
              }
              className="col-lg-4 col-md-4 col-sm-6 d-flex"
            >
              <div className="card0-01 card0-02 card-044">
                <Link
                  href={`/blog/${
                    post.title_slug || post.slug
                  }/`}
                >
                  <div className="blog-image-wrapper">
                    <Image
                      src={imageSrc}
                      alt={post.title || "Blog image"}
                      width={600}
                      height={300}
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                      className="blog-card-image"
                    />
                  </div>

                  <h3 style={{ marginTop: "15px" }}>
                    {post.title}
                  </h3>

                  <p>
                    {post.excerpt ||
                      post.short_description ||
                      "A maturity model designed to strengthen people, processes, and technology."}
                  </p>

                  <div className="ct--a">
                    <span>View more</span>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="read-more-wrapper">
        <Link
          className="bby-btn"
          href={
            categorySlug && categorySlug !== "all"
              ? `/blog/category/${categorySlug}/`
              : "/blog/"
          }
        >
          Read More Articles
        </Link>
      </div>

      <style jsx global>{`
        .blog-loading,
        .blog-empty {
          width: 100%;
          text-align: center;
          padding: 30px 15px;
        }

        .blog-image-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          line-height: 0;
        }

        .blog-card-image {
          width: 100% !important;
          height: auto !important;
          display: block;
          object-fit: contain;
        }

        .read-more-wrapper {
          width: 100%;
          text-align: center;
        }

        .bby-btn {
          background: #494392;
          display: inline-block;
          color: #fff;
          padding: 7px 14px;
          border-radius: 5px;
          box-shadow: 1px 3px 18px #49439291;
          font-size: 16px;
          margin-top: 40px;
          text-decoration: none;
        }

        .bby-btn:hover {
          background: #bb2b36 !important;
          color: #fff;
        }
      `}</style>
    </>
  );
};

export default BlogFinanaceCard;