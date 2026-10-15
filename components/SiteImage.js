import Image from "next/image";
import { altFor } from "../helpers/imageAlt";

/**
 * next/image with the site's alt-text rules built in. Use it for new images:
 *
 *   <SiteImage src="/img/finance-banner.png" alt="Dynamics 365 Finance dashboard" width={1098} height={657} />
 *   <SiteImage src="/img/Union-shape-one.png" decorative width={200} height={200} />
 *
 * - `decorative` (or a known shape/icon file) renders alt="" + aria-hidden,
 *   so search engines and screen readers skip it.
 * - Known logos get their brand name even if alt is left out.
 * - next/image already lazy-loads, serves WebP/AVIF and sizes the file;
 *   pass `priority` for the hero image so it isn't lazy-loaded.
 */
const SiteImage = ({ src, alt, decorative = false, className = "", ...props }) => {
  const resolved = decorative ? "" : altFor({ src, alt, className });
  const finalAlt = resolved ?? alt ?? "";

  if (process.env.NODE_ENV !== "production" && !decorative && !finalAlt) {
    console.warn(`SiteImage: no alt text for ${src}. Pass alt, or decorative if it is only visual.`);
  }

  return (
    <Image
      src={src}
      alt={finalAlt}
      className={className || undefined}
      {...(finalAlt === "" ? { "aria-hidden": true } : {})}
      {...props}
    />
  );
};

export default SiteImage;
