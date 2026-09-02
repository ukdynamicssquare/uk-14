import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
// import BlogSubscriberForm from "../../../components/BlogSubscriberForm";
import { useRouter } from 'next/router';
import Pagination from "../../../components/Pagination";
import { paginate } from "../../../helpers/paginate";
import { useState } from "react";
export async function getServerSideProps(context) {
  let slug = context.query.slug;
  console.log(slug)
  const alltag = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}`+"/api/all/blogs/tag");
  const alltags = await alltag.json();
  const res = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/api/blog/tagged/" + slug.split("-").join(" ")
  );
  const blogs = await res.json();
  const bloglength = blogs.length;
  if(bloglength >=1)
  {
    return { props: { blogs,alltags} };
  }
  else{
    return{
      notFound:true,
     };
  }
  
}
const categoryColors = [
  '#01808a',
  '#cd9e1b',
  '#3e4f8a',
  '#000000',
  '#b52c36',
  '#273266',
];

function TagBlogs({ blogs,alltags}) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
 
  const onPageChange = (page) => {
    setCurrentPage(page);
  };
  const paginatedPosts = paginate(blogs, currentPage, pageSize);
  return (
    <div>
      <Head>
        <title>Blog System</title>
        <meta
          name="description"
          content="All Modern Stylish Product Men|Female"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blogs-extra-new">
        <div className="container">
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
                    <li className="breadcrumb-item">
                      <Link href="/blog/tag/">
                        Tag
                      </Link>
                    </li>
                   
                    <li className="breadcrumb-item active">{router.query.slug}</li>
              
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="blogs-ex-side-cate">
                <h3>Explore by Tag</h3>
                <ul>
  {alltags
    ?.flatMap((item) =>
      item.meta_tags?.split(",").map((tag) => tag.trim()) || []
    )
    .map((tag, index) => {
      const color = categoryColors[index % categoryColors.length];

      const currentTag = router.query.slug
        ?.split("-")
        .join(" ")
        .toLowerCase();

      const isActive = tag.toLowerCase() === currentTag;

      return (
        <li key={`${tag}-${index}`}>
          <Link
            className={`blog-tag-link ${isActive ? "active" : ""}`}
            href={`/blog/tag/${tag.split(" ").join("-")}`}
            style={{
              "--tag-color": color,
              color: isActive ? "#fff" : color,
              backgroundColor: isActive ? color : "transparent",
              border: `1px solid ${color}`,
            }}
          >
            <span className="blog-tagged">
              {tag.charAt(0).toUpperCase() + tag.slice(1)}
            </span>
          </Link>
        </li>
      );
    })}
</ul>
              </div>
            </div>
            <div className="col-lg-9">
              {
                paginatedPosts.map((item, i) => (
                  <div className="blogs-lates blogs-lates-rept" key={i}>
                    <h3>
                      <Link href={`/blog/${item.title_slug}`}>
                        {item.title}
                      </Link>
                    </h3>
                    <div className="blogs-info-list">
                      <span className="user">
                        <a href={`/blog/author/${item.author?.toLowerCase().split(" ").join("-")}`}>
                          <i className="bi bi-person-circle"></i>
                          {item.author}
                        </a>
                      </span>
                      <span className="date">
                        <a>
                          <i className="bi bi-calendar-event"></i>
                          {item.publish_date}
                        </a>
                      </span>
                      <span className="time">
                        <a>
                          <i className="bi bi-clock"></i>
                          {item.read_time}
                        </a>
                      </span>
                      <span className="cate">
                      <Link href={`/blog/category/${item.category_slug}`}>
                        <i className="bi bi-collection"></i> {item.category}
                      </Link>
                      </span>
                    </div>
                    <div className="b-card-info">
                      <p>{item.short_description}</p>
                      <div className="page-link-read">
                        <Link href={`/blog/${item.title_slug}`}>
                          Read More <span>{">"}</span>

                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                   
                   <Pagination
                          items={blogs.length}  
                           currentPage={currentPage}  
                          pageSize={pageSize}
                          onPageChange={onPageChange}
                          />
              {/* <div className="pagination-main">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {"<"}
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        ...
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        {">"}
                      </a>
                    </li>
                  </ul>
                </nav>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bootom-blogs-sub">
        <div className="container">
          <div className="row justify-content-center row-bg">
            <div className="col-lg-6">
              {/* <div className="form-subscriber-card">
                <div className="sub-head">
                  <h3>Join our newsletter</h3>
                  <p>
                    Engaging stories and exclusive data, designed for our best
                    customers. We only send one issue each month, so we try to
                    make it useful.
                  </p>
                </div>
                <BlogSubscriberForm />
              </div> */}
            </div>
          </div>
        </div>
      </div>

                <style jsx global>{` .blogs-ex-side-cate ul { padding: 0; margin: 0; list-style: none; } .blogs-ex-side-cate li { display: inline-block; margin: 0 8px 10px 0; } .blog-tag-link { display: inline-block; padding: 7px 14px; border-radius: 4px; text-decoration: none !important; transition: all 0.3s ease; } /* Normal tag */ .blog-tag-link { color: var(--tag-color); background-color: transparent; } /* Hover */ .blog-tag-link:hover { color: #fff !important; background-color: var(--tag-color) !important; border-color: var(--tag-color) !important; text-decoration: none !important; } /* Active tag */ .blog-tag-link.active { color: #fff !important; background-color: var(--tag-color) !important; border-color: var(--tag-color) !important; } /* Active + hover */ .blog-tag-link.active:hover { color: #fff !important; background-color: var(--tag-color) !important; border-color: var(--tag-color) !important; } .blog-tagged { display: inline-block; } `}</style>

    </div>
  );
}

export default TagBlogs;
