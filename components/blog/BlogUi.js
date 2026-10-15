import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { paginate } from "../../helpers/paginate";
import {
  getBlogImageUrl,
  isOptimizableImage,
  BLOG_FONT_FILES,
} from "../../helpers/blogImage";

// Pieces shared by the blog listing pages (index, category, tag, author).
// Styles live in BlogStyles.js.

export function formatDate(date) {
  if (!date) return "";
  const parsed = new Date(String(date).replace(/\.\d+Z$/, "Z"));
  if (isNaN(parsed)) return "";
  return parsed.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const authorHref = (author) =>
  `/blog/author/${String(author || "").toLowerCase().trim().split(/\s+/).join("-")}/`;

// Font preload tags. Put {blogFontLinks()} inside the page's own <Head>, so
// each page keeps a single <Head>.
export function blogFontLinks() {
  return BLOG_FONT_FILES.map((href) => (
    <link
      key={href}
      rel="preload"
      href={href}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />
  ));
}

export function PostImage({ post, sizes, priority = false, className }) {
  const src = getBlogImageUrl(post.image);

  if (!src) {
    return (
      <span className={`bl-img-placeholder ${className || ""}`}>
        <i className="bi bi-journal-text" />
      </span>
    );
  }

  return (
    <Image
      src={src}
      alt={post.title}
      width={1200}
      height={628}
      sizes={sizes}
      priority={priority}
      quality={75}
      unoptimized={!isOptimizableImage(src)}
      className={className}
    />
  );
}

// Author photo, or their initials when there is no photo.
export function Avatar({ name, src, size = 48, priority = false, className = "" }) {
  const url = getBlogImageUrl(src);

  if (!url) {
    const initials = String(name || "?")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join("");

    return (
      <span
        className={`bl-avatar bl-avatar--initials ${className}`}
        style={{ width: size, height: size, fontSize: Math.round(size * 0.36) }}
        aria-hidden="true"
      >
        {initials}
      </span>
    );
  }

  return (
    <Image
      src={url}
      alt={name}
      width={size}
      height={size}
      sizes={`${size}px`}
      priority={priority}
      unoptimized={!isOptimizableImage(url)}
      className={`bl-avatar ${className}`}
    />
  );
}

export function PostMeta({ post, showAuthor = true }) {
  return (
    <div className="bl-meta">
      {showAuthor && (
        <Link href={authorHref(post.author)} className="bl-meta-author">
          {post.author}
        </Link>
      )}
      {post.publish_date && <span>{formatDate(post.publish_date)}</span>}
      {post.read_time && <span>{post.read_time} min read</span>}
    </div>
  );
}

export function PostCard({ post, priority = false, showAuthor = true, showCategory = true }) {
  return (
    <article className="bl-card">
      <Link
        href={`/blog/${post.title_slug}/`}
        className="bl-card-media"
        tabIndex={-1}
        aria-hidden="true"
      >
        <PostImage
          post={post}
          priority={priority}
          sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 400px"
          className="bl-card-img"
        />
      </Link>

      <div className="bl-card-body">
        {showCategory && post.category_slug && (
          <Link
            href={`/blog/category/${post.category_slug}/`}
            className="bl-chip bl-chip--soft"
          >
            {post.category}
          </Link>
        )}

        <h3 className="bl-card-title">
          <Link href={`/blog/${post.title_slug}/`}>{post.title}</Link>
        </h3>

        {post.short_description && (
          <p className="bl-card-text">{post.short_description}</p>
        )}

        <div className="bl-card-foot">
          <PostMeta post={post} showAuthor={showAuthor} />
        </div>
      </div>
    </article>
  );
}

export function PageNav({ total, pageSize, current, onChange }) {
  const pages = Math.ceil(total / pageSize);
  if (pages <= 1) return null;

  // Up to 5 page numbers around the current page.
  let start = Math.max(1, current - 2);
  const end = Math.min(pages, start + 4);
  start = Math.max(1, end - 4);
  const numbers = [];
  for (let n = start; n <= end; n++) numbers.push(n);

  return (
    <nav className="bl-pager" aria-label="Blog pages">
      <button
        type="button"
        className="bl-pager-btn"
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        aria-label="Previous page"
      >
        <i className="bi bi-arrow-left" />
      </button>

      {start > 1 && (
        <>
          <button type="button" className="bl-pager-num" onClick={() => onChange(1)}>
            1
          </button>
          {start > 2 && <span className="bl-pager-gap">…</span>}
        </>
      )}

      {numbers.map((n) => (
        <button
          key={n}
          type="button"
          className={`bl-pager-num${n === current ? " is-active" : ""}`}
          onClick={() => onChange(n)}
          aria-current={n === current ? "page" : undefined}
        >
          {n}
        </button>
      ))}

      {end < pages && (
        <>
          {end < pages - 1 && <span className="bl-pager-gap">…</span>}
          <button type="button" className="bl-pager-num" onClick={() => onChange(pages)}>
            {pages}
          </button>
        </>
      )}

      <button
        type="button"
        className="bl-pager-btn"
        onClick={() => onChange(current + 1)}
        disabled={current === pages}
        aria-label="Next page"
      >
        <i className="bi bi-arrow-right" />
      </button>
    </nav>
  );
}

// Grid of post cards with page numbers. Scrolls back to the top of the grid
// when the page changes (not on first render).
export function PagedPostGrid({
  posts,
  pageSize = 9,
  colClass = "col-md-6 col-lg-4",
  cardProps = {},
  emptyText = "No articles yet.",
}) {
  const [page, setPage] = useState(1);
  const gridRef = useRef(null);
  const didMount = useRef(false);

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    if (!gridRef.current) return;
    const y = gridRef.current.getBoundingClientRect().top + window.pageYOffset - 130;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [page]);

  if (!posts.length) {
    return (
      <div className="bl-empty">
        <i className="bi bi-journal-text" />
        <p>{emptyText}</p>
        <Link href="/blog/" className="bl-btn">
          Browse all articles
        </Link>
      </div>
    );
  }

  return (
    <div ref={gridRef}>
      <div className="row g-4">
        {paginate(posts, page, pageSize).map((post) => (
          <div className={colClass} key={post.title_slug}>
            <PostCard post={post} {...cardProps} />
          </div>
        ))}
      </div>

      <PageNav total={posts.length} pageSize={pageSize} current={page} onChange={setPage} />
    </div>
  );
}

// Grey band at the top of a listing page: breadcrumb, eyebrow, title, intro.
export function BlogPageHero({ crumbs, eyebrow, title, intro, children }) {
  return (
    <header className="bl-hero">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="bl-breadcrumb">
            {crumbs.map((crumb) =>
              crumb.href ? (
                <li key={crumb.label}>
                  <Link href={crumb.href}>{crumb.label}</Link>
                </li>
              ) : (
                <li key={crumb.label} aria-current="page">
                  {crumb.label}
                </li>
              )
            )}
          </ol>
        </nav>

        <div className="bl-hero-inner">
          {eyebrow && <span className="bl-eyebrow">{eyebrow}</span>}
          <h1 className="bl-title">{title}</h1>
          {intro && <p className="bl-intro">{intro}</p>}
        </div>

        {children}
      </div>
    </header>
  );
}

// Chips linking to sibling topics/tags, the current one highlighted.
// Shows `collapsed` chips until "+N more" is clicked.
export function ChipNav({ label, items, activeSlug, hrefFor, collapsed = 14 }) {
  const [open, setOpen] = useState(false);
  if (!items.length) return null;

  // Keep the active chip visible even when the list is collapsed.
  let visible = open ? items : items.slice(0, collapsed);
  if (!open && activeSlug && !visible.some((i) => i.slug === activeSlug)) {
    const active = items.find((i) => i.slug === activeSlug);
    if (active) visible = [active, ...visible.slice(0, collapsed - 1)];
  }

  return (
    <div className="bl-topics">
      {label && <span className="bl-topics-label">{label}</span>}
      <ul className="bl-topics-list">
        {visible.map((item) => (
          <li key={item.slug}>
            <Link
              href={hrefFor(item)}
              className={`bl-topic${item.slug === activeSlug ? " is-active" : ""}`}
              aria-current={item.slug === activeSlug ? "page" : undefined}
            >
              {item.name}
              {item.count ? <span className="bl-topic-count">{item.count}</span> : null}
            </Link>
          </li>
        ))}

        {items.length > collapsed && (
          <li>
            <button
              type="button"
              className="bl-topic bl-topic--toggle"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
            >
              {open ? "Show fewer" : `+${items.length - collapsed} more`}
            </button>
          </li>
        )}
      </ul>
    </div>
  );
}
