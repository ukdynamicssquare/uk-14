// Client-safe blog data access — used by components that fetch in the
// browser (useEffect). Calls the internal /api/public/blogs proxy instead
// of the external MERN API directly, so no API key ever reaches the client bundle.
// Server-side data fetching (getStaticProps/getStaticPaths) should keep using
// helpers/blogApi.js, which is stripped from the client build by Next.js.

export const BACKEND_URL =
  process.env.NEXT_PUBLIC_BACKEND_URL || "https://blogdsukapi.onrender.com";

async function fetchPublicBlogs(path) {
  try {
    const response = await fetch(`/api/public/blogs${path}`);

    if (!response.ok) {
      console.warn(
        `HTTP ${response.status}: Failed to fetch /api/public/blogs${path}`
      );
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Blog API Error [${path}]:`, error.message);
    return null;
  }
}

export const BlogClient = {
  async getBlogs(limit = 1000) {
    const data = await fetchPublicBlogs(`?limit=${limit}`);
    return data || [];
  },

  async getBlogsByCategory(slug, limit = 1000) {
    const data = await fetchPublicBlogs(`/category/${slug}?limit=${limit}`);
    return data || [];
  },
};
