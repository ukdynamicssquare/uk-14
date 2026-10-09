// BACKUP OF THE OLD BLOG DESIGN (snapshot of pages/blog at commit e8aa03d).
// Served at /blog-old with noindex (meta + X-Robots-Tag in next.config.js)
// and excluded from sitemap.xml. Safe to delete this whole folder.
import Image from "next/image";
import Head from "next/head";
import BlogSubscriberForm from "../../../components/BlogSubscriberForm";

export async function getServerSideProps(context) {
  let slug = context.query.slug;
  const res = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/blog/category/" + slug);
  const blogs = await res.json();

  const categoryblog = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}` + "/api/blog/category");
  const categoryblogs = await categoryblog.json();

  return { props: { blogs, categoryblogs } };
}

function CategoryBlogs({ blogs, categoryblogs }) {
  return (
    <div>
      <Head>
        <title>Blog Category</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="blogs-extra-new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="/blog-old/">
                        Blog
                      </a>
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
                  {categoryblogs.length > 0 &&
                    categoryblogs.map((cateitem, i) => {
                      const colors = ['#01808a', '#cd9e1b', '#3e4f8a', '#000000', '#b52c36', '#273266'];
                      const borderTypes = ['solid'];

                      const color = colors[i % colors.length];
                      const borderStyle = borderTypes[i % borderTypes.length];

                      return (
                        <li key={i}>
                          <a
                            href={`/blog-old/category/${cateitem.category_slug}`}
                            style={{
                              border: `1px ${borderStyle} ${color}`,
                              color: color,
                            }}
                          >
                            {cateitem.category_name}
                          </a>
                        </li>
                      );
                    })}
                </ul>
                {/* <ul>
                  {categoryblogs &&
                    categoryblogs.map((cateitem, i) => (
                      <li>
                        <a href={`/blog-old/category/${cateitem.category_slug}`}>
                          {cateitem.category_name}
                        </a>
                      </li>
                    ))}
                </ul> */}
              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  );
}

export default CategoryBlogs;
