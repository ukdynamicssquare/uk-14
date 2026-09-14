import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import Pagination from "../../../components/Pagination";
import { paginate } from "../../../helpers/paginate";
import { useState } from "react";
import TimerModal from "../../../components/TimerModal";

import { BlogService } from "../../../helpers/blogApi";

export async function getStaticPaths() {
  try {
    const categoriesRaw = await BlogService.getCategories();
    const categories = Array.isArray(categoriesRaw) ? categoriesRaw : (categoriesRaw?.data || []);

    const paths = categories.map((cat) => ({
      params: { slug: cat.slug || cat.category_slug },
    }));

    return {
      paths,
      fallback: "blocking",  
    };
  } catch (error) {
    console.error("Error fetching categories:", error);
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";
 
  const blogsRaw = await BlogService.getBlogsByCategory(slug);
  let blogs = [];
  if (Array.isArray(blogsRaw)) blogs = blogsRaw;
  else if (blogsRaw?.data && Array.isArray(blogsRaw.data)) blogs = blogsRaw.data;
  else if (blogsRaw?.blogs && Array.isArray(blogsRaw.blogs)) blogs = blogsRaw.blogs;
  else if (blogsRaw?.posts && Array.isArray(blogsRaw.posts)) blogs = blogsRaw.posts;

  if (!blogs || blogs.length === 0) {
    return { notFound: true };
  }

  const extractStr = (val) => {
    if (!val) return "";
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) return val.length > 0 ? extractStr(val[0]) : "";
    if (typeof val === 'object') return val.name || val.title || "";
    return String(val);
  };
 
  const trimmedBlogs = blogs.map((b) => ({
    title: extractStr(b.title),
    title_slug: extractStr(b.slug || b.title_slug),
    author: extractStr(b.author) || "Author",
    publish_date: b.publishedAt || b.publish_date || null,
    read_time: extractStr(b.readingTimeMinutes || b.read_time),
    updated_at: b.updatedAt || b.updated_at || null,
    short_description: extractStr(b.excerpt || b.short_description),
    category: extractStr(b.category) || "Category",
    category_slug: extractStr(b.category?.slug || b.category_slug),
  }));

  // Fetch all categories
  const categoryResRaw = await BlogService.getCategories();
  const categoryblogs = (Array.isArray(categoryResRaw) ? categoryResRaw : (categoryResRaw?.data || [])).map(c => ({
    ...c,
    category_name: c.name || c.category_name,
    category_slug: c.slug || c.category_slug
  }));

  return {
    props: {
      blogs: trimmedBlogs,
      categoryblogs,
    },
    revalidate: 60, // regenerate page every 60s if updated
  };
}

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

function CategoryBlogs({ blogs, categoryblogs }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => setCurrentPage(page);
  const paginatedPosts = paginate(blogs, currentPage, pageSize);

  return (
    <div>
      <Head>
        <title>{blogs[0]?.category} Blogs | Dynamics Square</title>
        <meta
          name="description"
          content={`Read the latest ${blogs[0]?.category} blogs and insights.`}
        />
      </Head>

      <div className="blogs-extra-new">
        <div className="container">
          {/* Breadcrumb */}
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item"><a href="/blog/">Blog</a></li>
                    <li className="breadcrumb-item"><a href="/blog/category/">Category</a></li>
                    <li className="breadcrumb-item active">{blogs[0]?.category}</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="row">
            {/* Sidebar Categories */}
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-inn">
                <h3>Explore by Topic</h3>
                <ul>
                  {categoryblogs.map((cateitem, i) => {
                    const colors = ["#01808a","#cd9e1b","#3e4f8a","#000000","#b52c36","#273266"];
                    const color = colors[i % colors.length];

                    return (
                      <li key={i} className={router.query.slug === cateitem.category_slug ? "active" : ""}>
                        <a href={`/blog/category/${cateitem.category_slug}/`} style={{ border: `1px solid ${color}`, color }}>
                          {cateitem.category_name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Blog List */}
            <div className="col-lg-9">
              {paginatedPosts.map((item, i) => (
                <div className="blogs-lates blogs-lates-rept" key={i}>
                  <h3><a href={`/blog/${item.title_slug}/`}>{item.title}</a></h3>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${item.author?.toLowerCase().split(" ").join("-")}/`}>
                        <i className="bi bi-person-circle"></i>{item.author}
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
                    <span className="time"><a><i className="bi bi-clock"></i>{item.read_time} mins read</a> </span>
                    <span className="cate"><a href={`/blog/category/${item.category_slug}/`}><i className="bi bi-app"></i> {item.category}</a></span>
                  </div>
                  <div className="b-card-info">
                    <p>{item.short_description}</p>
                    <div className="page-link-read">
                      <a href={`/blog/${item.title_slug}/`}>Read More <span>{">"}</span></a>
                    </div>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <Pagination
                items={blogs.length}
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={onPageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <TimerModal />
    </div>
  );
}

export default CategoryBlogs;
