// Server-side helpers shared by the blog listing pages (index, category,
// tag, author). They turn the blog API's varying response shapes into the
// small objects the cards need, so pages don't ship whole API records to
// the browser.

export const EXCERPT_LENGTH = 150;

export function extractArray(data, keys = ["data", "blogs", "posts"]) {
  if (Array.isArray(data)) return data;
  for (const key of keys) {
    if (Array.isArray(data?.[key])) return data[key];
  }
  return [];
}

// Like extractArray, but a single record (e.g. getLatestBlog()) becomes a
// one-item list.
export function extractList(data, keys) {
  const list = extractArray(data, keys);
  if (list.length || !data || typeof data !== "object") return list;
  return [data];
}

export function extractStr(val) {
  if (!val) return "";
  if (typeof val === "string") return val.trim();
  if (typeof val === "number") return String(val);
  if (Array.isArray(val)) return val.length > 0 ? extractStr(val[0]) : "";
  if (typeof val === "object") return (val.name || val.title || "").trim();
  return String(val);
}

export function trimExcerpt(text, length = EXCERPT_LENGTH) {
  const clean = extractStr(text).replace(/\s+/g, " ");
  if (clean.length <= length) return clean;
  return `${clean.slice(0, length).replace(/\s+\S*$/, "")}…`;
}

// One post, reduced to what a card renders.
export function slimPost(b) {
  return {
    title: extractStr(b.title),
    title_slug: extractStr(b.slug || b.title_slug),
    author: extractStr(b.author) || "Author",
    publish_date: b.publishedAt || b.publish_date || null,
    read_time: extractStr(b.readingTimeMinutes || b.read_time).replace(/\D+$/, ""),
    category: extractStr(b.category) || "Category",
    category_slug: extractStr(b.category?.slug || b.category_slug),
    short_description: trimExcerpt(b.excerpt || b.short_description),
    image: extractStr(b.featuredImage?.url || b.image),
  };
}

export function slimCategory(c) {
  return {
    name: c.name || c.category_name || "",
    slug: c.slug || c.category_slug || "",
    description: extractStr(c.description),
  };
}

export const authorSlugOf = (author) =>
  author?.authorSlug ||
  author?.author_slug ||
  author?.slug ||
  (author?.name || "").toLowerCase().trim().replace(/\s+/g, "-");

export function slimAuthor(a) {
  return {
    name: a.name || "",
    slug: authorSlugOf(a),
    avatar: a.avatarUrl || a.profile_photo_path || "",
    designation: a.designation || a.role_name || "",
    about: a.about || a.description || "",
    linkedin: a.socialLinks?.linkedin || a.linkedin_url || "",
  };
}

// Tag names from the API, as display names, de-duplicated (case-insensitive).
export function tagNameOf(tag) {
  if (typeof tag === "string") return tag.trim();
  return String(tag?.name || tag?.title || tag?.tag || tag?.slug || "").trim();
}

export const tagSlugOf = (name) =>
  String(name)
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
