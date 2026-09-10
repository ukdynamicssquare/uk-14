import Image from "next/image";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import Pagination from "../../components/Pagination";
import { paginate } from "../../helpers/paginate";
import TimerModal from "../../components/TimerModal";

import { BlogService, BACKEND_URL } from "../../helpers/blogApi";

export async function getStaticProps() {
  const [blogsRaw, businesscentralRaw, categoryblogs, allBlogsRaw, blogtrandingRaw] =
    await Promise.all([
      BlogService.getLatestBlog(),
      BlogService.getBlogsByCategory("business-central"),
      BlogService.getCategories(),
      BlogService.getBlogs(), 
      BlogService.getTrendingBlogs(),
    ]);
 
  const extractArray = (data) => {
    if (Array.isArray(data)) return data;
    if (data?.data && Array.isArray(data.data)) return data.data;
    if (data?.blogs && Array.isArray(data.blogs)) return data.blogs;
    if (data?.posts && Array.isArray(data.posts)) return data.posts;
    if (data && typeof data === 'object') return [data];
    return [];
  };

  const blogs = extractArray(blogsRaw);
  const businesscentral = extractArray(businesscentralRaw);
  
  const allBlogsArray = extractArray(allBlogsRaw);
  
  const blograndomblogs = allBlogsArray.length > 1 ? allBlogsArray.slice(1) : allBlogsArray;
 
  const blogtranding = extractArray(blogtrandingRaw).slice(0, 1);

  const extractStr = (val) => {
    if (!val) return "";
    if (typeof val === 'string') return val;
    if (Array.isArray(val)) return val.length > 0 ? extractStr(val[0]) : "";
    if (typeof val === 'object') return val.name || val.title || "";
    return String(val);
  };
 
  const slim = (items) =>
    items.map((b) => ({
      title: extractStr(b.title),
      title_slug: extractStr(b.slug || b.title_slug),
      author: extractStr(b.author) || "Author",
      publish_date: b.publishedAt || b.publish_date || null,
      read_time: extractStr(b.readingTimeMinutes || b.read_time),
      updated_at: b.updatedAt || b.updated_at || null,
      category: extractStr(b.category) || "Category",
      category_slug: extractStr(b.category?.slug || b.category_slug),
      short_description: extractStr(b.excerpt || b.short_description),
      image: extractStr(b.featuredImage?.url || b.image),
    }));

  return {
    props: {
      blogs: slim(blogs),
      businesscentral: slim(businesscentral),
      categoryblogs: (Array.isArray(categoryblogs) ? categoryblogs : []).map(c => ({
        ...c,
        category_name: c.name || c.category_name,
        category_slug: c.slug || c.category_slug
      })), // categories are small enough
      blograndomblogs: slim(blograndomblogs),
      blogtranding: slim(blogtranding),
    },
    revalidate: 60,
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


const categoryColors = ["#01808a", "#cd9e1b", "#3e4f8a", "#000000", "#b52c36", "#273266"];

function Blogshome({ blogs, businesscentral, categoryblogs, blograndomblogs, blogtranding }) {
  const [currentPage, setCurrentPage] = useState(1);

  const blogListRef = useRef(null);

  const pageSize = 6;

  const paginatedPosts = paginate(blograndomblogs, currentPage, pageSize);

 useEffect(() => {
  if (currentPage > 1 && blogListRef.current) {
    const y =
      blogListRef.current.getBoundingClientRect().top +
      window.pageYOffset -
      160;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
}, [currentPage]);


  return (
    <div>
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

      {/* ✅ Latest Section */}
      {blogs.length > 0 && (
        <div className="blogs-main">
          <div className="container">
            <div className="row">
              {/* Left: Latest Blog */}
              <div className="col-lg-6">
                <div className="blogs-lates">
                  <div className="blog-sian">
                    <span>Latest</span>
                  </div>
                  <h1>
                    <a href={`/blog/${blogs[0].title_slug}/`}>{blogs[0].title}</a>
                  </h1>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${blogs[0].author?.toLowerCase().split(" ").join("-")}/`}>
                        <i className="bi bi-person-circle"></i> {blogs[0].author}
                      </a>
                    </span>
                     <>
                      {blogs?.[0]?.publish_date && (
                        <span className="date">
                          <a>
                            <i className="bi bi-calendar-event"></i>
                            {" "}Published: {formatDate(blogs[0].publish_date)}
                          </a>
                        </span>
                      )}

                      {blogs?.[0]?.updated_at &&
                        blogs?.[0]?.publish_date &&
                        formatDate(blogs[0].updated_at) !== formatDate(blogs[0].publish_date) && (
                          <span className="date ms-2">
                            <a>
                              <i className="bi bi-arrow-repeat"></i>
                              {" "}Updated: {formatDate(blogs[0].updated_at)}
                            </a>
                          </span>
                        )}
                    </>
                    <span className="time">
                      <a><i className="bi bi-clock"></i> {blogs[0].read_time} mins read</a>
                    </span>
                    <span className="cate">
                      <a href={`/blog/category/${blogs[0].category_slug}/`}>
                        <i className="bi bi-collection"></i> {blogs[0].category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{blogs[0].short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${blogs[0].title_slug}/`}>
                        Read More <span>{">"}</span>
                      </a>
                    </div>
                  </div>
                </div>
                {blogs[0].image && (
                  <div className="prom-bann">
                    <a href={`/blog/${blogs[0].title_slug}/`}>
                      <Image
                        src={blogs[0].image.startsWith("http") ? blogs[0].image : `${BACKEND_URL}${blogs[0].image}`}
                        alt={blogs[0].title}
                        width={1200}
                        height={628}
                        placeholder="blur"
                        blurDataURL="/img/placeholder.png"
                      />
                    </a>
                  </div>
                )}
              </div>

              {/* Right: Business Central Section */}
              <div className="col-lg-6">
                <div className="blogs-side">
                  {/* <div className="blog-side-head">
                    <div className="left">
                      <img src="/img/business-center-logo.svg" alt="bg-pic" />
                    </div>
                    <div className="right">
                      Dynamics 365 <br />
                      <span>Business Central</span>
                    </div>
                  </div> */}
                  <div className="tt-pico">
                    <a href="https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35" target="_balnk" rel="nofollow"><img src="/img/forber-01.png" alt="menu--ss" /></a>
                  </div>
                  {businesscentral.slice(0,4).map((item, i) => (
                    <div className="blogs-info-list blogs-info-list-side" key={`bc-${i}`}>
                      <h3>
                        <a href={`/blog/${item.title_slug}/`}>{item.title}</a>
                      </h3>
                      <span className="user">
                        <a href={`/blog/author/${item.author?.toLowerCase().split(" ").join("-")}/`}>
                          <i className="bi bi-person-circle"></i> {item.author}
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
                        <a><i className="bi bi-clock"></i> {item.read_time} mins read</a>
                      </span>
                      <span className="cate">
                        <a href={`/blog/category/${item.category_slug}/`}>
                          <i className="bi bi-collection"></i> {item.category}
                        </a>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Trending Section */}
      <div className="mid-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              {blogtranding.map((item, i) => (
                <div className="blogs-lates" key={`tr-${i}`}>
                  <div className="blog-sian">
                    <span>Most Trending</span>
                  </div>
                  <h2>
                    <a href={`/blog/${item.title_slug}/`}>{item.title}</a>
                  </h2>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${item.author?.toLowerCase().split(" ").join("-")}/`}>
                        <i className="bi bi-person-circle"></i> {item.author}
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
                      <a><i className="bi bi-clock"></i> {item.read_time} mins read</a>
                    </span>
                    <span className="cate">
                      <a href={`/blog/category/${item.category_slug}/`}>
                        <i className="bi bi-collection"></i> {item.category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{item.short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${item.title_slug}/`}>
                        Read More <span>{">"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-lg-6">
              <div className="prom-bann" style={{ textAlign: "center" }}>
                <a
                  href="/schedule-a-demo/"
                  target="_blank"
                  style={{ marginBottom: "20px", display: "block" }}
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

      {/* ✅ Random Blogs + Categories */}
      <div className="blogs-extra-new">
        <div className="container">
          <div className="row">
            {/* Categories */}
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate">
                <h3>Explore by Topic</h3>
                
                <ul>
                  {categoryblogs.map((item, i) => (
                    <li key={`cat-${i}`} style={{ listStyle: "none", margin: "5px 0" }}>
                      <a
                        href={`/blog/category/${item.category_slug}/`}
                        style={{
                          textDecoration: "none",
                          color: categoryColors[i % categoryColors.length],
                          border: `1px solid ${categoryColors[i % categoryColors.length]}`,
                        }}
                      >
                        {item.category_name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Random blogs with pagination */}
            <div className="col-lg-9" ref={blogListRef}>
              {paginatedPosts.map((item, i) => (
                <div className="blogs-lates blogs-lates-rept" key={`rnd-${i}`}>
                  <h3>
                    <a href={`/blog/${item.title_slug}/`}>{item.title}</a>
                  </h3>
                  <div className="blogs-info-list">
                    <span className="user">
                      <a href={`/blog/author/${item.author?.toLowerCase().split(" ").join("-")}/`}>
                        <i className="bi bi-person-circle"></i> {item.author}
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
                      <a><i className="bi bi-clock"></i> {item.read_time} mins read</a>
                    </span>
                    <span className="cate">
                      <a href={`/blog/category/${item.category_slug}/`}>
                        <i className="bi bi-collection"></i> {item.category}
                      </a>
                    </span>
                  </div>
                  <div className="b-card-info">
                    <p>{item.short_description?.substring(0, 180)}...</p>
                    <div className="page-link-read">
                      <a href={`/blog/${item.title_slug}/`}>
                        Read More <span>{">"}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
              <Pagination
  items={blograndomblogs.length}
  currentPage={currentPage}
  pageSize={pageSize}
  onPageChange={setCurrentPage}
  pageLimit={5}
/>
            </div>
          </div>
        </div>
      </div>
      <TimerModal />
    </div>
  );
}

export default Blogshome;
