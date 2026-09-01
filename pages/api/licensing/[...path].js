const UPSTREAM_API =
  process.env.LICENSING_API_URL || "https://blogdsukapi.onrender.com/api";

const allowedMethods = new Set(["GET", "POST"]);

export default async function handler(req, res) {
  if (!allowedMethods.has(req.method)) {
    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ message: "Method not allowed" });
  }

  const path = Array.isArray(req.query.path)
    ? req.query.path.join("/")
    : req.query.path;

  if (!path || !["catalog", "lead"].includes(path.split("/")[0])) {
    return res.status(404).json({ message: "Not found" });
  }

  const query = new URLSearchParams();
  Object.entries(req.query).forEach(([key, value]) => {
    if (key === "path") return;
    if (Array.isArray(value)) {
      value.forEach((item) => query.append(key, item));
    } else if (value !== undefined) {
      query.append(key, value);
    }
  });

  const url = `${UPSTREAM_API.replace(/\/$/, "")}/public/licensing/${path}${
    query.toString() ? `?${query.toString()}` : ""
  }`;

  const headers = {};
  if (req.headers["content-type"]) {
    headers["content-type"] = req.headers["content-type"];
  }
  if (req.headers["x-unlock-token"]) {
    headers["x-unlock-token"] = req.headers["x-unlock-token"];
  }

  try {
    const upstream = await fetch(url, {
      method: req.method,
      headers,
      body:
        req.method === "POST"
          ? typeof req.body === "string"
            ? req.body
            : JSON.stringify(req.body || {})
          : undefined,
    });

    const contentType = upstream.headers.get("content-type");
    const text = await upstream.text();

    res.setHeader("Cache-Control", "no-store");
    if (contentType) res.setHeader("Content-Type", contentType);
    return res.status(upstream.status).send(text);
  } catch (error) {
    return res.status(502).json({
      message: "Licensing API is unavailable. Please try again.",
    });
  }
}
