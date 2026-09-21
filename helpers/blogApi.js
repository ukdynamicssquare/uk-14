
const API_BASE_URL = process.env.MERN_API_URL || "https://blogdsukapi.onrender.com";
const API_KEY = process.env.MERN_API_KEY;

if (!API_KEY && typeof window === "undefined") {
  console.error(
    "MERN_API_KEY is not set. Blog API requests will be rejected by the upstream server."
  );
}

export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "https://blogdsukapi.onrender.com"; 
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 429 is a transient rate-limit, not a real outage — worth a few retries
// before giving up. Everything else (network error, 5xx, bad JSON) still
// fails immediately; only this specific status gets the backoff treatment.
const MAX_429_RETRIES = 3;

// Returns null only for a genuine "not found" (404) response from the API.
// Any other failure (network error, timeout, 5xx, auth error, bad JSON) is
// thrown so callers can tell "no data" apart from "API is broken" — the
// latter must never be treated as an empty result (see getStaticProps in
// pages/blog/index.js and pages/blog/[slug].js).
export async function fetchBlogApi(endpoint) {
  const url = `${API_BASE_URL}${endpoint}`;

  for (let attempt = 0; attempt <= MAX_429_RETRIES; attempt++) {
    let response;
    try {
      response = await fetch(url, {
        headers: {
          "x-api-key": API_KEY,
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      throw new Error(`Blog API network error [${endpoint}]: ${error.message}`);
    }

    if (response.status === 429) {
      if (attempt === MAX_429_RETRIES) {
        throw new Error(`Blog API HTTP 429 [${endpoint}]`);
      }

      const retryAfterHeader = Number(response.headers.get("retry-after"));
      const delayMs = Number.isFinite(retryAfterHeader) && retryAfterHeader > 0
        ? retryAfterHeader * 1000
        : 500 * 2 ** attempt; // 500ms, 1s, 2s

      await sleep(delayMs);
      continue;
    }

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Blog API HTTP ${response.status} [${endpoint}]`);
    }

    try {
      return await response.json();
    } catch (error) {
      throw new Error(`Blog API invalid JSON [${endpoint}]: ${error.message}`);
    }
  }
}
 
export const BlogService = {
  // Fetch one page of published blogs. NOTE: the upstream API silently caps
  // `limit` at 100 per page no matter what's requested here — asking for
  // limit=1000 still only returns 100 blogs plus a `pagination` object
  // (page/limit/totalPages/totalBlogs). Use getAllBlogs() below when every
  // blog is needed (sitemap, getStaticPaths, blog listing), not this method.
  async getBlogs(limit = 1000, page = 1) {
    const data = await fetchBlogApi(`/api/public/blogs?limit=${limit}&page=${page}`);
    return data || [];
  },

  // Walk every page and return the full blog list. Needed anywhere "all
  // blogs" is required, since getBlogs() only ever returns the first 100
  // (see note above).
  async getAllBlogs() {
    const first = await this.getBlogs(100, 1);
    const blogs = Array.isArray(first) ? [...first] : Array.isArray(first?.blogs) ? [...first.blogs] : [];
    const totalPages = first?.pagination?.totalPages || 1;

    for (let page = 2; page <= totalPages; page++) {
      const next = await this.getBlogs(100, page);
      const nextBlogs = Array.isArray(next) ? next : Array.isArray(next?.blogs) ? next.blogs : [];
      blogs.push(...nextBlogs);
    }

    return { blogs };
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
