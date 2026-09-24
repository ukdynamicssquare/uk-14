// Lightweight whitelist-based HTML sanitizer for static/CMS-authored snippets
// (e.g. FAQ answers). Not a full HTML parser - strips script/style/iframe
// elements, all event handler attributes, and javascript:/data: URLs, and
// only keeps a small set of safe formatting/link tags.

const ALLOWED_TAGS = [
  "p",
  "br",
  "b",
  "strong",
  "i",
  "em",
  "u",
  "ul",
  "ol",
  "li",
  "span",
  "a",
];

export function sanitizeHtml(html) {
  if (!html || typeof html !== "string") return "";

  let clean = html;

  // Remove dangerous elements entirely, including their content.
  clean = clean.replace(
    /<(script|style|iframe|object|embed|form|input|link|meta)[^>]*>[\s\S]*?<\/\1>/gi,
    ""
  );
  clean = clean.replace(
    /<(script|style|iframe|object|embed|form|input|link|meta)[^>]*\/?>/gi,
    ""
  );

  // Strip HTML comments.
  clean = clean.replace(/<!--[\s\S]*?-->/g, "");

  // Strip any tag that isn't in the whitelist.
  clean = clean.replace(/<\/?([a-zA-Z0-9]+)([^>]*)>/g, (match, tagName, attrs) => {
    const tag = tagName.toLowerCase();
    if (!ALLOWED_TAGS.includes(tag)) return "";

    const isClosing = match.startsWith("</");
    if (isClosing) return `</${tag}>`;

    // For allowed tags, only keep a safe href attribute on <a>.
    if (tag === "a") {
      const hrefMatch = attrs.match(/href\s*=\s*("([^"]*)"|'([^']*)')/i);
      const href = hrefMatch ? hrefMatch[2] || hrefMatch[3] || "" : "";
      const safeHref = /^(https?:\/\/|\/|#)/i.test(href) ? href : "";
      return safeHref
        ? `<a href="${safeHref}" rel="noopener noreferrer">`
        : `<a>`;
    }

    return `<${tag}>`;
  });

  return clean;
}
