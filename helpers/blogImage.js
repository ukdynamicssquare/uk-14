import { BACKEND_URL } from "./blogClient";

// Hosts allowed in next.config.js images.remotePatterns. Images from any
// other host are rendered unoptimized so next/image never throws.
const OPTIMIZABLE_IMAGE_HOSTS = [
  "blognew.dynamicssquare.co.uk",
  "blognew.dynamicssquare.com",
  "blogdsukapi.onrender.com",
  "cdn.gemsroot.com",
];

export function getBlogImageUrl(src) {
  if (!src) return "";
  if (/^(https?:)?\/\//.test(src)) return src;
  return `${BACKEND_URL}${src.startsWith("/") ? "" : "/"}${src}`;
}

export function isOptimizableImage(src) {
  if (!src || src.startsWith("/")) return true;

  try {
    return OPTIMIZABLE_IMAGE_HOSTS.includes(new URL(src).hostname);
  } catch (error) {
    return false;
  }
}

// Blog fonts are self-hosted (styles/fonts.css). Preload them on blog pages.
export const BLOG_FONT_FILES = [
  "/fonts/plus-jakarta-sans-latin-var-v1.woff2",
  "/fonts/dm-sans-latin-var-v1.woff2",
];
