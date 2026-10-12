// One page of the blog home's "All articles" grid, as small card objects.
// The grid lists every post except the newest one (that one is featured),
// so grid page N covers posts [1 + (N-1)*size, 1 + N*size) of the full list.
// Page 1 is rendered at build time; this route serves pages 2+ on demand so
// the blog home doesn't ship every post in its page data.

import { BlogService } from "../../helpers/blogApi";
import { extractArray, slimPost } from "../../helpers/blogData";

const UPSTREAM_PAGE = 100; // the blog API caps `limit` at 100
const MAX_SIZE = 24;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const page = Number.parseInt(req.query.page, 10);
  const size = Math.min(Number.parseInt(req.query.size, 10) || 9, MAX_SIZE);

  if (!Number.isInteger(page) || page < 1 || page > 1000) {
    return res.status(400).json({ message: "Invalid page" });
  }

  const start = 1 + (page - 1) * size; // index in the full list
  const end = start + size;

  try {
    // Fetch only the upstream 100-post blocks that cover [start, end).
    const firstBlock = Math.floor(start / UPSTREAM_PAGE) + 1;
    const lastBlock = Math.floor((end - 1) / UPSTREAM_PAGE) + 1;

    const blocks = [];
    for (let block = firstBlock; block <= lastBlock; block++) {
      blocks.push(BlogService.getBlogs(UPSTREAM_PAGE, block));
    }
    const responses = await Promise.all(blocks);

    const list = responses.flatMap((r) => extractArray(r));
    const offset = (firstBlock - 1) * UPSTREAM_PAGE;
    const posts = list.slice(start - offset, end - offset).map(slimPost);
    const totalBlogs = responses[0]?.pagination?.totalBlogs;

    // Cached at Vercel's edge; matches the page's 60s ISR window loosely.
    res.setHeader("Cache-Control", "public, s-maxage=300, stale-while-revalidate=600");
    return res.status(200).json({
      posts,
      total: typeof totalBlogs === "number" ? Math.max(totalBlogs - 1, 0) : null,
    });
  } catch (error) {
    console.error("blog-list error:", error.message);
    return res.status(502).json({ message: "Blog API is unavailable. Please try again." });
  }
}
