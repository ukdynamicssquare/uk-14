import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";
import TimerModal from "../../../components/TimerModal";

import { BlogService } from "../../../helpers/blogApi";

export async function getStaticProps({ params }) {
  const slug = params?.slug || "";

  try {
    const [blogsRaw, categoryResRaw] = await Promise.all([
      slug ? BlogService.getBlogsByCategory(slug) : BlogService.getLatestBlog(), // If there's no slug, fallback (though index.js shouldn't have slug)
      BlogService.getCategories(),
    ]);

    const extractStr = (val) => {
      if (!val) return "";
      if (typeof val === 'string') return val;
      if (Array.isArray(val)) return val.length > 0 ? extractStr(val[0]) : "";
      if (typeof val === 'object') return val.name || val.title || "";
      return String(val);
    };

    const mapBlog = b => ({
      ...b,
      title: extractStr(b.title),
      title_slug: extractStr(b.slug || b.title_slug),
      author: extractStr(b.author) || "Author",
      publish_date: b.publishedAt || b.publish_date || null,
      read_time: extractStr(b.readingTimeMinutes || b.read_time),
      updated_at: b.updatedAt || b.updated_at || null,
      short_description: extractStr(b.excerpt || b.short_description),
      category: extractStr(b.category) || "Category",
      category_slug: extractStr(b.category?.slug || b.category_slug),
    });

    let blogsExtracted = [];
    if (Array.isArray(blogsRaw)) blogsExtracted = blogsRaw;
    else if (blogsRaw?.data && Array.isArray(blogsRaw.data)) blogsExtracted = blogsRaw.data;
    else if (blogsRaw?.blogs && Array.isArray(blogsRaw.blogs)) blogsExtracted = blogsRaw.blogs;
    else if (blogsRaw?.posts && Array.isArray(blogsRaw.posts)) blogsExtracted = blogsRaw.posts;

    const blogs = blogsExtracted.map(mapBlog);
    
    const categoryblogs = (Array.isArray(categoryResRaw) ? categoryResRaw : (categoryResRaw?.data || [])).map(c => ({
      ...c,
      category_name: c.name || c.category_name,
      category_slug: c.slug || c.category_slug
    }));

    return {
      props: {
        blogs,
        categoryblogs,
      },
      revalidate: 60, // ISR
    };
  } catch (error) {
    console.error("Error in getStaticProps:", error.message);

    return {
      props: {
        blogs: [],
        categoryblogs: [],
        error: error.message || "Failed to load data",
      },
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



function CategoryBlogs({ blogs, categoryblogs }) {
  return (
    <div>
      <Head>
        <title>Blog Category</title>
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
                    <li className="breadcrumb-item active"></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-ex-side-cate blogs-ex-side-cate-home">
                <h3>Explore by Category</h3>
                <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li>
    
                          <a style={{
                          textDecoration: 'none',
                          color: categoryColors[i % categoryColors.length],
                          border: `1px solid ${categoryColors[i % categoryColors.length]}`,
                        }} href={`/blog/category/${cateitem.category_slug}/`}>{cateitem.category_name}</a>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <TimerModal />
    </div>
  );
}

export default CategoryBlogs;
