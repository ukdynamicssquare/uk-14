// Server-side proxy for the migration assessment API. The upstream API only
// accepts browser requests from a fixed list of origins, so the page calls
// this route and the request is made from the server instead.
const UPSTREAM_API =
  process.env.MIGRATION_API_URL || "https://blogdsusaapi.onrender.com/api";

const ROUTES = { catalog: "GET", lead: "POST" };

export default async function handler(req, res) {
  const path = Array.isArray(req.query.path) ? req.query.path.join("/") : req.query.path;
  const method = ROUTES[path];

  if (!method) return res.status(404).json({ message: "Not found" });
  if (req.method !== method) {
    res.setHeader("Allow", method);
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const upstream = await fetch(`${UPSTREAM_API.replace(/\/$/, "")}/public/migration/${path}`, {
      method,
      headers: method === "POST" ? { "content-type": "application/json" } : {},
      body:
        method === "POST"
          ? typeof req.body === "string" ? req.body : JSON.stringify(req.body || {})
          : undefined,
    });

    const contentType = upstream.headers.get("content-type");
    const text = await upstream.text();

    res.setHeader("Cache-Control", "no-store");
    if (contentType) res.setHeader("Content-Type", contentType);
    return res.status(upstream.status).send(text);
  } catch (error) {
    return res.status(502).json({ message: "The assessment service is unavailable. Please try again." });
  }
}
