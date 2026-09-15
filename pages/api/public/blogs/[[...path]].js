// Server-side proxy for the public blog API.
// Keeps MERN_API_URL / MERN_API_KEY off the client bundle — this file
// only ever runs on the server (Next.js API routes are never shipped to the browser).

const UPSTREAM_API =
  process.env.MERN_API_URL || "https://blogdsukapi.onrender.com";
const API_KEY = process.env.MERN_API_KEY;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!API_KEY) {
    console.error("MERN_API_KEY is not set.");
    return res.status(500).json({ message: "Blog API is not configured." });
  }

  const path = Array.isArray(req.query.path)
    ? req.query.path.join("/")
    : "";

  const query = new URLSearchParams();
  Object.entries(req.query).forEach(([key, value]) => {
    if (key === "path") return;
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
    } else if (value !== undefined) {
      query.append(key, value);
    }
  });

  const url = `${UPSTREAM_API.replace(/\/$/, "")}/api/public/blogs${
    path ? `/${path}` : ""
  }${query.toString() ? `?${query.toString()}` : ""}`;

  try {
    const upstream = await fetch(url, {
      headers: {
        "x-api-key": API_KEY,
        "Content-Type": "application/json",
      },
    });

    const contentType = upstream.headers.get("content-type");
    const text = await upstream.text();

    res.setHeader(
      "Cache-Control",
      "public, max-age=60, stale-while-revalidate=300"
    );
    if (contentType) res.setHeader("Content-Type", contentType);
    return res.status(upstream.status).send(text);
  } catch (error) {
    return res.status(502).json({
      message: "Blog API is unavailable. Please try again.",
    });
  }
}
