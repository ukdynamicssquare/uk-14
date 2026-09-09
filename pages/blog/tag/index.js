import Head from "next/head";
import { BlogService } from "../../../helpers/blogApi";

export async function getServerSideProps() {
  try {
    const response = await BlogService.getTags();

    const tags = Array.isArray(response)
      ? response
      : response?.data || response?.tags || [];

    return {
      props: {
        tags,
      },
    };
  } catch (error) {
    console.error("Error fetching tags:", error);

    return {
      props: {
        tags: [],
      },
    };
  }
}

function TagsBlogs({ tags }) {
  const getTagName = (tag) => {
    if (!tag) return "";

    if (typeof tag === "string") {
      return tag.trim();
    }

    return (
      tag.name ||
      tag.title ||
      tag.tag ||
      tag.slug ||
      ""
    ).trim();
  };

  const getTagSlug = (tagName) => {
    return tagName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]/g, "");
  };

  return (
    <div>
      <Head>
        <title>Blog Tags</title>

        <meta
          name="description"
          content="Explore all blog tags and discover articles by topic."
        />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="blogs-extra-new">
        <div className="container">

          {/* Breadcrumb */}
          <div className="row">
            <div className="col-lg-12">
              <div className="blogs-breadcromb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">

                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>

                    <li className="breadcrumb-item">
                      <a href="/blog/">Blog</a>
                    </li>

                    <li className="breadcrumb-item active">
                      Tags
                    </li>

                  </ol>
                </nav>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="row">
            <div className="col-lg-12">

              <div className="blogs-ex-side-cate blogs-ex-side-cate-home">

                <h3>Explore by Tags</h3>

                <ul>
                  {tags && tags.length > 0 ? (
                    tags.map((tag, index) => {
                      const tagName = getTagName(tag);

                      if (!tagName) {
                        return null;
                      }

                      const tagSlug = getTagSlug(tagName);

                      return (
                        <li key={`${tagSlug}-${index}`}>
                          <a href={`/blog/tag/${tagSlug}`}>
                            <span className="blog-tagged">
                              {tagName.charAt(0).toUpperCase() +
                                tagName.slice(1)}
                            </span>
                          </a>
                        </li>
                      );
                    })
                  ) : (
                    <li>
                      <span className="blog-tagged">
                        No tags available
                      </span>
                    </li>
                  )}
                </ul>

              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TagsBlogs;