
const API_BASE_URL = process.env.MERN_API_URL || "https://blogdsukapi.onrender.com";
const API_KEY = process.env.MERN_API_KEY;

if (!API_KEY && typeof window === "undefined") {
  console.error(
    "MERN_API_KEY is not set. Blog API requests will be rejected by the upstream server."
  );
}

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://blogdsukapi.onrender.com"; 
export async function fetchBlogApi(endpoint) {
  try {
    const url = `${API_BASE_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.warn(`HTTP ${response.status}: Failed to fetch ${url}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Blog API Error [${endpoint}]:`, error.message);
    return null;
  }
}
 
export const BlogService = {
  // Fetch paginated published blogs 
  async getBlogs(limit = 1000) {
    const data = await fetchBlogApi(`/api/public/blogs?limit=${limit}`);
    return data || [];
  },

  // Fetch a single blog by its URL slug
  async getBlogBySlug(slug) {
    const data = await fetchBlogApi(`/api/public/blogs/slug/${slug}`);
    return data || null;
  },

  // Fetch blogs under a specific category
  async getBlogsByCategory(slug, limit = 1000) {
    const data = await fetchBlogApi(`/api/public/blogs/category/${slug}?limit=${limit}`);
    return data || [];
  },

  // Fetch blogs with a specific tag
  async getBlogsByTag(tag, limit = 1000) {
    const data = await fetchBlogApi(`/api/public/blogs/tag/${tag}?limit=${limit}`);
    return data || [];
  },

  // ✅ ADD THIS
  async getTags() {
    const data = await fetchBlogApi(`/api/public/blogs/tags`);
    return data || [];
  },

  // Fetch blogs written by a specific author
  async getBlogsByAuthor(slug, limit = 1000) {
    const data = await fetchBlogApi(`/api/public/blogs/author/${slug}?limit=${limit}`);
    return data || [];
  },

  // Search through published blogs
  async searchBlogs(keyword) {
    const data = await fetchBlogApi(`/api/public/blogs/search?q=${keyword}`);
    return data || [];
  },

  

  // Fetch all categories for the sidebar
  async getCategories() {
    const data = await fetchBlogApi(`/api/public/blogs/categories`);
    return data || [];
  },

  // Fetch random blogs
  async getRandomBlogs() {
    const data = await fetchBlogApi(`/api/public/blogs/random`);
    return data || [];
  },

  // Fetch trending blogs
  async getTrendingBlogs() {
    const data = await fetchBlogApi(`/api/public/blogs/trending`);
    return data || [];
  },

  // Fetch all authors (for author sidebar)
  async getAuthors() {
    const data = await fetchBlogApi(`/api/public/blogs/authors`);
    return data || [];
  },

  // Fetch author details
  async getAuthorDetails(slug) {
    const data = await fetchBlogApi(`/api/public/blogs/author/${slug}`);
    if (data?.author) return data.author;
    return null;
  },

  // Fetch latest blog(s)
  async getLatestBlog() {
    const data = await fetchBlogApi(`/api/public/blogs/latest`);
    return data || [];
  },

  // Fetch archive blogs
  async getArchiveBlogs() {
    const data = await fetchBlogApi(`/api/public/blogs/archive`);
    return data || [];
  },
 
  // async getAuthorDetails(slug) {
  //   const data = await fetchBlogApi(`/api/public/blogs/author/${slug}`);
  //   return data || [];
  // },
};
