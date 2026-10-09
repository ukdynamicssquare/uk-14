import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

import TimerModal from "../../components/TimerModal";
import BlogSeo from "../../components/BlogSeo";
import { BlogService } from "../../helpers/blogApi";
import { BACKEND_URL } from "../../helpers/blogClient";

const AUTHOR_ABOUT_PREVIEW_LENGTH = 1000;

/*
 * Blog fonts are self-hosted from /public/fonts instead of next/font.
 * Reason: in the Next 14 pages router, next/font looks up preloads by the
 * real URL (/blog/some-post) while its manifest is keyed by the route
 * (/blog/[slug]), so dynamic pages never get the font preloaded. The text
 * then renders in the fallback first and visibly switches on load.
 * Fixed URLs let us preload them ourselves (see <Head> in Post).
 * Both files are the Latin subset of the variable fonts (all weights in
 * one file). Rename the -vN suffix if the files ever change: they are
 * served with a 1-year immutable cache (next.config.js).
 */
const BLOG_FONT_FILES = [
  "/fonts/plus-jakarta-sans-latin-var-v1.woff2",
  "/fonts/dm-sans-latin-var-v1.woff2",
];

/* =========================================================
   HELPERS
========================================================= */

function getImageUrl(src) {
  if (!src) return "";

  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("//")
  ) {
    return src;
  }

  if (src.startsWith("/")) {
    return `${BACKEND_URL}${src}`;
  }

  return `${BACKEND_URL}/${src}`;
}

const OPTIMIZABLE_IMAGE_HOSTS = [
  "blognew.dynamicssquare.co.uk",
  "blognew.dynamicssquare.com",
  "blogdsukapi.onrender.com",
  "cdn.gemsroot.com",
];

function isOptimizableImage(src) {
  if (!src || src.startsWith("/")) return true;

  try {
    return OPTIMIZABLE_IMAGE_HOSTS.includes(new URL(src).hostname);
  } catch (error) {
    return false;
  }
}

function formatDate(date) {
  if (!date) return "";

  const parsedDate = new Date(
    String(date).replace(/\.\d+Z$/, "Z")
  );

  if (isNaN(parsedDate.getTime())) {
    return "";
  }

  return parsedDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

function extractTextFromHtml(html) {
  if (!html) return "";

  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .trim();
}
/* =========================================================
   FIX HTML STYLE STRING → REACT STYLE OBJECT
========================================================= */

function convertStyle(styleString) {
  if (!styleString || typeof styleString !== "string") {
    return undefined;
  }

  return styleString
    .split(";")
    .filter(Boolean)
    .reduce((styles, declaration) => {
      const [property, ...valueParts] = declaration.split(":");

      if (!property || valueParts.length === 0) {
        return styles;
      }

      const value = valueParts.join(":").trim();

      const camelProperty = property
        .trim()
        .replace(
          /-([a-z])/g,
          (_, letter) => letter.toUpperCase()
        );

      styles[camelProperty] = value;

      return styles;
    }, {});
}

/* =========================================================
   CREATE UNIQUE HEADING SLUG
========================================================= */

function createHeadingSlug(text, usedSlugs) {
  const baseSlug =
    text
      ?.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "") || "heading";

  if (!usedSlugs[baseSlug]) {
    usedSlugs[baseSlug] = 1;
    return baseSlug;
  }

  usedSlugs[baseSlug] += 1;
  return `${baseSlug}-${usedSlugs[baseSlug]}`;
}

/* =========================================================
   SAFE HTML
========================================================= */

function SafeHTML({ html, tocList, handleTocClick }) {
  let pCount = 0;

  const options = {
    replace: (domNode) => {

      /* =====================================================
        FIX STYLE ATTRIBUTE
     ===================================================== */

      if (
        domNode.type === "tag" &&
        domNode.attribs
      ) {
        const style = domNode.attribs.style;

        if (typeof style === "string") {
          domNode.attribs.style = convertStyle(style);
        } else if (
          style != null &&
          typeof style !== "object"
        ) {
          delete domNode.attribs.style;
        }
      }

      // ==========================================
      // DYNAMIC BLOG ANCHOR TAGS
      // ==========================================

      if (
        domNode.type === "tag" &&
        domNode.name === "a"
      ) {
        const attribs = domNode.attribs || {};

        const {
          class: existingClass,
          ...restAttribs
        } = attribs;

        return (
          <a
            {...restAttribs}
            className={`u-i ${existingClass || ""}`.trim()}
          >
            {domToReact(domNode.children, options)}
          </a>
        );
      }

      /* =====================================================
    TABLES → WRAP IN .table-responsive + ADD CLASSES
    THEAD → ADD table-dark CLASS
 ===================================================== */

      if (
        domNode.type === "tag" &&
        (domNode.name === "table" || domNode.name === "thead")
      ) {
        const attribs = domNode.attribs || {};
        const existingClass = attribs.class || "";

        const classes = new Set(
          existingClass.split(/\s+/).filter(Boolean)
        );

        if (domNode.name === "table") {
          ["table", "table-bordered", "table-striped"].forEach(
            (c) => classes.add(c)
          );
        }

        if (domNode.name === "thead") {
          classes.add("table-dark");
        }

        const { class: _omit, ...restAttribs } = attribs;

        /* =====================================================
           THEAD → return directly, no wrapping needed
        ===================================================== */

        if (domNode.name === "thead") {
          return (
            <thead
              {...restAttribs}
              className={Array.from(classes).join(" ")}
            >
              {domToReact(domNode.children, options)}
            </thead>
          );
        }

        /* =====================================================
           TABLE → wrap in .table-responsive
        ===================================================== */

        const tableElement = (
          <table
            {...restAttribs}
            className={Array.from(classes).join(" ")}
          >
            {domToReact(domNode.children, options)}
          </table>
        );

        const parent = domNode.parent;
        const parentClass = parent?.attribs?.class || "";

        const alreadyWrapped =
          parent &&
          parent.type === "tag" &&
          parent.name === "div" &&
          parentClass.split(/\s+/).includes("table-responsive");

        if (alreadyWrapped) {
          return tableElement;
        }

        return (
          <div className="table-responsive">
            {tableElement}
          </div>
        );
      }

      /* =====================================================
         IMAGES
      ===================================================== */

      if (
        domNode.type === "tag" &&
        domNode.name === "img"
      ) {
        const attribs = domNode.attribs || {};
        const src = getImageUrl(attribs.src || "");

        if (!src) {
          return null;
        }

        const alt =
          attribs.alt?.trim() ||
          attribs.title?.trim() ||
          "Blog image";

        const width = Number(attribs.width);
        const height = Number(attribs.height);

        // Images WITH real dimensions from the CMS
        // → target width = the image's own natural width,
        //   shrinks only if the container is smaller than that.
        if (width > 0 && height > 0) {
          return (
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              quality={90}
              sizes="(max-width: 991px) 100vw, 88.666vw"
              style={{
                width: `${width}px`,
                maxWidth: "100%",
                height: "auto",
                display: "block",
                margin: "30px 0",
              }}
            />
          );
        }

        // Images WITHOUT dimensions from the CMS
        // → no real target size to use, so fetch a reasonable
        //   resolution and let it fill the column responsively.
        return (
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={800}
            quality={90}
            sizes="(max-width: 991px) 100vw, 88.666vw"
            style={{
              width: "auto",
              maxWidth: "100%",
              height: "auto",
              display: "block",
              margin: "30px 0",
            }}
          />
        );
      }

      /* =====================================================
         PARAGRAPH + TOC
      ===================================================== */

      if (domNode.type === "tag" && domNode.name === "p") {
        pCount++;

        if (pCount === 2 && tocList?.length > 0) {
          return (
            <>
              <p {...domNode.attribs}>
                {domToReact(domNode.children, options)}
              </p>

              <TocList
                tocList={tocList}
                handleTocClick={handleTocClick}
              />
            </>
          );
        }
      }

      return undefined;
    },
  };
  const parsed = parse(html || "", options);
  return <div>{parsed}</div>;
}

/* =========================================================
   TABLE OF CONTENTS (collapsible with blur teaser)
========================================================= */

function TocList({ tocList, handleTocClick }) {
  const [expanded, setExpanded] = useState(false);

  if (!Array.isArray(tocList) || tocList.length === 0) {
    return null;
  }

  const INITIAL_COUNT = 3;
  const hasMore = tocList.length > INITIAL_COUNT;
  const visibleList = tocList.slice(0, INITIAL_COUNT);
  const hiddenList = hasMore ? tocList.slice(INITIAL_COUNT) : [];

  const renderItem = (toc) => (
    <li key={toc.slug} className="toc-item">
      <a
        href={`#${toc.slug}`}
        onClick={(e) => handleTocClick?.(e, toc.slug)}
        className="toc-link"
      >
        <i className="bi bi-chevron-right toc-chevron" />
        {toc.text}
      </a>
    </li>
  );

  return (
    <div className="toc-wrapper mb-5 p-4">
      <h2 className="toc-title">Table of Contents</h2>

      <ul className="toc-list">
        {visibleList.map(renderItem)}
      </ul>

      {hasMore && (
        <div
          className={`toc-collapsible ${expanded ? "toc-collapsible--open" : ""
            }`}
        >
          <ul className="toc-list toc-list--hidden">
            {hiddenList.map(renderItem)}
          </ul>

          {!expanded && <div className="toc-fade-overlay" />}
        </div>
      )}

      {hasMore && (
        <button
          type="button"
          className="toc-toggle-btn"
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? (
            <>
              Show less <i className="bi bi-chevron-up" />
            </>
          ) : (
            <>
              Show all ({tocList.length}) <i className="bi bi-chevron-down" />
            </>
          )}
        </button>
      )}

      <style jsx global>{`
        .toc-wrapper {
          background: linear-gradient(135deg, #ffffff 0%, #f6f8fb 100%);
          border-radius: 18px;
          border: 1px solid #e6e9f0;
          border-left: 4px solid #c22221;
          margin-top: 2rem;
          box-shadow: 0 6px 20px rgba(16, 24, 40, 0.04);
        }

        .toc-title {
          font-size: 13px !important;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #14213d !important;
          margin: 0 0 16px !important;
        }

        .toc-list {
          list-style-type: none;
          padding-left: 0;
          margin: 0 !important;
        }

        .toc-item {
          margin-bottom: 10px;
        }
.toc-item a{
color: #301b54 !important;
    font-size: 15px !important;
}
        .toc-link {
          color: #333;
          text-decoration: none;
          font-size: 16px;
          display: flex;
          align-items: flex-start;
          transition: color 0.15s ease;
        }

        .toc-link:hover {
          color: #c22221 !important;
        }

        .toc-chevron {
          font-size: 12px;
          margin-top: 4px;
          margin-right: 8px;
          color: #301b54;
          flex-shrink: 0;
        }

        .toc-collapsible {
          position: relative;
          overflow: hidden;
          transition: max-height 0.35s ease;
        }

        .toc-collapsible:not(.toc-collapsible--open) {
          max-height: 40px;
        }

        .toc-list--hidden {
          margin-top: 10px;
        }

        .toc-collapsible:not(.toc-collapsible--open) .toc-list--hidden {
          filter: blur(3px);
          user-select: none;
          pointer-events: none;
        }

        .toc-fade-overlay {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 60px;
          background: linear-gradient(
            to bottom,
            rgba(248, 249, 250, 0) 0%,
            rgba(248, 249, 250, 0.95) 80%
          );
          pointer-events: none;
        }

        .toc-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          padding: 0;
          border: none;
          background: transparent;
          color: #1b1848;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .toc-toggle-btn:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   FAQ ACCORDION (Bootstrap + custom styling)
========================================================= */

const FAQ_INITIAL_COUNT = 4;

function FaqAccordion({ faqs, articleSlug }) {
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const hasMoreFaqs = faqs.length > FAQ_INITIAL_COUNT;
  const accordionId = `faq-accordion-${articleSlug}`;

  /*
   * Same anchor-tag handling as SafeHTML:
   * adds the "u-i" class to every link inside FAQ answers.
   */
  const faqAnswerOptions = {
    replace: (domNode) => {
      if (domNode.type === "tag" && domNode.name === "a") {
        const attribs = domNode.attribs || {};

        const { class: existingClass, ...restAttribs } = attribs;

        return (
          <a
            {...restAttribs}
            className={`u-i ${existingClass || ""}`.trim()}
          >
            {domToReact(domNode.children, faqAnswerOptions)}
          </a>
        );
      }

      return undefined;
    },
  };

  return (
    <div className="faq-accordion-wrapper mt-5 mb-5" id="faqs-section">
      <h2 className="faq-accordion-title mb-4">
        Frequently Asked Questions
      </h2>

      <div className="faq-accordion accordion" id={accordionId}>
        {faqs.map((faq, index) => {
          const faqId = faq._id || index;
          const headingId = `faq-heading-${faqId}`;
          const collapseId = `faq-collapse-${faqId}`;
          const isFirst = index === 0;
          // Hidden items stay in the DOM so FAQ content remains crawlable.
          const isExtra = index >= FAQ_INITIAL_COUNT;
          const isHidden = !showAllFaqs && isExtra;
          const isRevealed = showAllFaqs && isExtra;

          return (
            <div
              className={`faq-accordion-item accordion-item ${isHidden ? "faq-hidden" : ""
                } ${isRevealed ? "faq-reveal" : ""}`}
              style={
                isRevealed
                  ? { animationDelay: `${(index - FAQ_INITIAL_COUNT) * 80}ms` }
                  : undefined
              }
              key={faqId}
            >
              <h3 className="accordion-header" id={headingId}>
                <button
                  className={`faq-accordion-button accordion-button ${isFirst ? "" : "collapsed"
                    }`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded={isFirst ? "true" : "false"}
                  aria-controls={collapseId}
                >
                  <span className="faq-question-text">
                    {faq.question}
                  </span>

                  <span className="faq-icon" aria-hidden="true">
                    <span className="faq-icon-line faq-icon-line--h" />
                    <span className="faq-icon-line faq-icon-line--v" />
                  </span>
                </button>
              </h3>

              <div
                id={collapseId}
                className={`accordion-collapse collapse ${isFirst ? "show" : ""
                  }`}
                aria-labelledby={headingId}
                data-bs-parent={`#${accordionId}`}
              >
                <div className="faq-accordion-body accordion-body">
                  {parse(faq.answer || "", faqAnswerOptions)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {hasMoreFaqs && (
        <div className="text-center mt-3">
          <button
            type="button"
            className="faq-load-more"
            onClick={() => setShowAllFaqs((prev) => !prev)}
            aria-expanded={showAllFaqs}
          >
            <span>{showAllFaqs ? "Show less" : "Load more"}</span>
            <span
              className={`faq-load-more-arrow ${showAllFaqs ? "is-open" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      )}

      <style jsx>{`
        .faq-hidden {
          display: none;
        }

        .faq-reveal {
          opacity: 0;
          animation: faqReveal 0.45s ease forwards;
        }

        @keyframes faqReveal {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .faq-load-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 10px 28px;
          font-size: 15px;
          font-weight: 600;
          color: #c22221;
          background: #ffffff;
          border: 1px solid #c22221;
          border-radius: 6px;
          transition: background 0.25s ease, color 0.25s ease,
            transform 0.2s ease, box-shadow 0.25s ease;
        }

        .faq-load-more:hover {
          color: #ffffff;
          background: #c22221;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(194, 34, 33, 0.25);
        }

        .faq-load-more:active {
          transform: translateY(0);
        }

        .faq-load-more-arrow {
          width: 8px;
          height: 8px;
          border-right: 2px solid currentColor;
          border-bottom: 2px solid currentColor;
          transform: translateY(-2px) rotate(45deg);
          transition: transform 0.3s ease;
        }

        .faq-load-more-arrow.is-open {
          transform: translateY(2px) rotate(-135deg);
        }

        @media (prefers-reduced-motion: reduce) {
          .faq-reveal {
            opacity: 1;
            animation: none;
          }
        }

        .faq-accordion-title {
          font-size: 26px;
          font-weight: 700;
          color: #1a1a1a;
          position: relative;
          padding-left: 16px;
        }

        .faq-accordion-title::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 4px;
          background: #c22221;
          border-radius: 2px;
        }

        .faq-accordion-item {
          border: 1px solid #e9e9ec;
          border-radius: 10px !important;
          margin-bottom: 14px;
          overflow: hidden;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .faq-accordion-item:hover {
          border-color: #d8d8dc;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
        }

        .faq-accordion-item h3 {
          margin-bottom: 0px;
          font-size: 17px !important;
        }
.accordion-header .accordion-button {
        font-size: 17px !important;
    }
        .faq-accordion-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          padding: 18px 22px;
          font-size: 16px;
          font-weight: 600;
          color: #1a1a1a;
          background: #ffffff;
          border: none;
          text-align: left;
          box-shadow: none !important;
        }

        .faq-accordion-button:not(.collapsed) {
          color: #c22221;
          background: #fdf5f5;
        }

        .faq-accordion-button::after {
          display: none !important;
        }

        .faq-question-text {
          flex: 1;
        }

        .faq-icon {
          position: relative;
          flex-shrink: 0;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f1f1f3;
        }

        .faq-accordion-button:not(.collapsed) .faq-icon {
          background: #c22221;
        }

        .faq-icon-line {
          position: absolute;
          background: #6b6b6b;
          border-radius: 2px;
          transition: transform 0.25s ease, background 0.25s ease;
        }

        .faq-accordion-button:not(.collapsed) .faq-icon-line {
          background: #ffffff;
        }

        .faq-icon-line--h {
          top: 50%;
          left: 50%;
          width: 10px;
          height: 2px;
          transform: translate(-50%, -50%);
        }

        .faq-icon-line--v {
          top: 50%;
          left: 50%;
          width: 2px;
          height: 10px;
          transform: translate(-50%, -50%);
        }

        .faq-accordion-button:not(.collapsed) .faq-icon-line--v {
          transform: translate(-50%, -50%) rotate(90deg) scaleY(0);
        }

        .faq-accordion-body {
          padding: 4px 22px 20px 22px;
          font-size: 15px;
          line-height: 1.7;
          color: #4a4a4a;
        }

        .faq-accordion-body :global(p) {
          margin-bottom: 10px;
        }

        .faq-accordion-body :global(p:last-child) {
          margin-bottom: 0;
        }

        .faq-accordion-body :global(a.u-i) {
          color: #c22221;
          text-decoration: underline;
          font-weight: 500;
        }

        .faq-accordion-body :global(a.u-i:hover) {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   BLOG POST
========================================================= */

function Post({
  blogs,
  blogcat,
  authordetials,
}) {
  const router = useRouter();

  const [expandedAuthors, setExpandedAuthors] = useState({});
  const progressRef = useRef(null);

  /* =======================================================
     READING PROGRESS (visual only, does not gate content)
     Writes straight to the DOM so scrolling never re-renders
     the article (keeps INP / TBT low).
  ======================================================= */

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress =
        max > 0 ? Math.min(window.scrollY / max, 1) : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    const onScroll = () => {
      if (frame === null) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [router.asPath]);

  /* =======================================================
     AUTHOR TOGGLE
  ======================================================= */

  const handleAuthorToggle = (index) => {
    const isExpanded = Boolean(expandedAuthors[index]);

    setExpandedAuthors((current) => ({
      ...current,
      [index]: !isExpanded,
    }));

    if (!isExpanded) {
      requestAnimationFrame(() => {
        document
          .getElementById(`blog-author-details-${index}`)
          ?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      });
    }
  };

  /* =======================================================
     TOC CLICK
  ======================================================= */

  const handleTocClick = (e, slug) => {
    e.preventDefault();

    const element = document.getElementById(slug);

    if (!element) {
      return;
    }

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      120;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    /*
     * Keep URL hash for accessibility/navigation.
     */
    if (window.history?.replaceState) {
      window.history.replaceState(
        null,
        "",
        `#${slug}`
      );
    }
  };

  /* =======================================================
     404
  ======================================================= */

  if (!blogs || blogs.length === 0) {
    return (
      <>
        <Head>
          <title>404 - Blog Not Found</title>

          <meta
            name="robots"
            content="noindex, nofollow"
          />
        </Head>

        <section className="Solution-banner">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 mobile-1">
                <h1
                  className="text-center"
                  style={{
                    fontSize: "60px",
                  }}
                >
                  404
                </h1>

                <h2 className="text-center">
                  The Post You Were Looking For
                  Couldn't Be Found
                </h2>

                <div
                  className="text-center"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Link
                    href="/blog"
                    className="btn-get-started scrollto"
                  >
                    <span>Back To Blog</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <div className="bp-page">
      <Head>
        {BLOG_FONT_FILES.map((href) => (
          <link
            key={href}
            rel="preload"
            href={href}
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        ))}
      </Head>

      <div
        className="bp-progress"
        ref={progressRef}
        aria-hidden="true"
      />

      <section>
        {blogs.map((item) => {
          const canonicalUrl = `https://www.dynamicssquare.co.uk/blog/${item.title_slug}/`;

          const heroAuthor = authordetials?.[0];

          const heroAuthorImage = heroAuthor?.profile_photo_path
            ? getImageUrl(heroAuthor.profile_photo_path)
            : "/img/default-author.png";

          const heroImage = item.meta_image
            ? getImageUrl(item.meta_image)
            : "";

          const showUpdated =
            item.updated_at &&
            item.publish_date &&
            formatDate(item.updated_at) !==
            formatDate(item.publish_date);

          const shareButtons = (
            <>
              <FacebookShareButton
                url={canonicalUrl}
                quote={item.title}
                aria-label="Share on Facebook"
              >
                <span className="bp-share-btn">
                  <i className="bi bi-facebook" />
                </span>
              </FacebookShareButton>

              <TwitterShareButton
                url={canonicalUrl}
                title={item.title}
                aria-label="Share on X"
              >
                <span className="bp-share-btn">
                  <i className="bi bi-twitter-x" />
                </span>
              </TwitterShareButton>

              <LinkedinShareButton
                url={canonicalUrl}
                title={item.title}
                summary={item.short_description}
                aria-label="Share on LinkedIn"
              >
                <span className="bp-share-btn">
                  <i className="bi bi-linkedin" />
                </span>
              </LinkedinShareButton>
            </>
          );

          return (
            <article
              key={item.title_slug}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              {/* =================================================
                  SEO
              ================================================= */}

              <BlogSeo
                meta_title={item.meta_title}
                meta_description={item.meta_description}
                meta_image={item.meta_image}
                meta_keyword={item.meta_keyword}
                canonicalUrl={canonicalUrl}

                robots={
                  item.noIndex || item.rank === 1
                    ? "noindex, nofollow"
                    : null
                }

                additional_script={
                  item.additional_script
                }

                additional_multiscript={
                  item.additional_multiscript
                }
              />

              {/* =================================================
                  HERO (split: text left, image right)
              ================================================= */}

              <header className="bp-hero">
                <div className="container">
                  <nav aria-label="breadcrumb">
                    <ol className="bp-breadcrumb">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li>
                        <Link href="/blog/">Blog</Link>
                      </li>
                      <li aria-current="page">{item.title}</li>
                    </ol>
                  </nav>

                  <div className="row align-items-center g-5">
                    <div className={heroImage ? "col-lg-6" : "col-lg-10"}>
                      {item.category_slug && (
                        <Link
                          href={`/blog/category/${item.category_slug}`}
                          className="bp-pill"
                        >
                          {item.category}
                        </Link>
                      )}

                      <h1 className="bp-title" itemProp="headline">
                        {item.title}
                      </h1>

                      {item.short_description && (
                        <p className="bp-lead">{item.short_description}</p>
                      )}

                      <div className="bp-byline">
                        <Image
                          src={heroAuthorImage}
                          alt={
                            item.author
                              ? `${item.author} - Author`
                              : "Blog author"
                          }
                          width={48}
                          height={48}
                          sizes="48px"
                          className="bp-byline-avatar"
                        />

                        <div className="bp-byline-text">
                          <Link
                            href={`/blog/author/${encodeURIComponent(
                              item.author
                                ?.toLowerCase()
                                .split(" ")
                                .join("-")
                            )}/`}
                            className="bp-byline-name"
                            itemProp="author"
                          >
                            {item.author}
                          </Link>

                          <span className="bp-byline-sub">
                            {item.publish_date && (
                              <span>
                                <i className="bi bi-calendar3" />
                                {formatDate(item.publish_date)}
                              </span>
                            )}

                            {showUpdated && (
                              <span>
                                <i className="bi bi-arrow-repeat" />
                                Updated {formatDate(item.updated_at)}
                              </span>
                            )}

                            {item.read_time && (
                              <span>
                                <i className="bi bi-clock" />
                                {item.read_time} min read
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>

                    {heroImage && (
                      <div className="col-lg-6">
                        <div className="bp-hero-media">
                          <Image
                            src={heroImage}
                            alt={item.title}
                            width={1200}
                            height={750}
                            priority
                            quality={75}
                            sizes="(max-width: 991px) 100vw, 640px"
                            unoptimized={!isOptimizableImage(heroImage)}
                            className="bp-hero-img"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </header>

              {/* =================================================
                  MAIN CONTENT
              ================================================= */}

              <div className="container">
                <div className="row g-5 bp-body">
                  {/* Floating share rail (desktop) */}
                  <div className="col-lg-1 d-none d-lg-block">
                    <div className="bp-rail">
                      <span className="bp-rail-label">Share</span>
                      {shareButtons}
                    </div>
                  </div>

                  <div className="col-lg-7">
                    {/* =================================================
                        BLOG CONTENT

                        IMPORTANT:
                        No useEffect.
                        Content is rendered immediately.
                    ================================================= */}

                    <div
                      className="blogs-content bp-content"
                      itemProp="articleBody"
                    >
                      <div className="blogs-content-inner">
                        <SafeHTML
                          html={item.description || ""}
                          tocList={
                            item.faqs?.length > 0
                              ? [
                                ...(item.tocList || []),
                                { text: "Frequently Asked Questions", slug: "faqs-section" },
                              ]
                              : item.tocList
                          }
                          handleTocClick={handleTocClick}
                        />

                        <FaqAccordion
                          faqs={item.faqs}
                          articleSlug={item.title_slug}
                        />
                      </div>
                    </div>

                    <div className="bp-share-inline d-lg-none">
                      <span className="bp-rail-label">Share</span>
                      <div className="bp-share-row">{shareButtons}</div>
                    </div>

                    {/* =================================================
                        AUTHOR
                    ================================================= */}

                    {authordetials?.length > 0 &&
                      authordetials.map((author, i) => {
                        const isAuthorExpanded = Boolean(
                          expandedAuthors[i]
                        );

                        const authorAbout = author.about || "";

                        const shouldShowAuthorToggle =
                          authorAbout.length >
                          AUTHOR_ABOUT_PREVIEW_LENGTH;

                        const visibleAuthorAbout =
                          isAuthorExpanded || !shouldShowAuthorToggle
                            ? authorAbout
                            : `${authorAbout
                              .slice(0, AUTHOR_ABOUT_PREVIEW_LENGTH)
                              .trim()}...`;

                        const authorImage = author.profile_photo_path
                          ? getImageUrl(author.profile_photo_path)
                          : "/img/default-author.png";

                        const authorSlug = author.name
                          ?.toLowerCase()
                          .trim()
                          .replace(/\s+/g, "-");

                        return (
                          <div
                            className="bp-author"
                            id={`blog-author-details-${i}`}
                            key={author.name || i}
                            itemScope
                            itemType="https://schema.org/Person"
                          >
                            <div className="bp-author-top">
                              <Image
                                src={authorImage}
                                alt={
                                  author.name
                                    ? `${author.name} - Author`
                                    : "Blog author"
                                }
                                width={72}
                                height={72}
                                sizes="72px"
                                itemProp="image"
                                className="bp-author-avatar"
                              />

                              <div>
                                <span className="bp-author-eyebrow">
                                  About the author
                                </span>

                                {authorSlug ? (
                                  <Link
                                    href={`/blog/author/${authorSlug}/`}
                                    className="bp-author-name"
                                  >
                                    <span itemProp="name">{author.name}</span>
                                  </Link>
                                ) : (
                                  <span
                                    className="bp-author-name"
                                    itemProp="name"
                                  >
                                    {author.name}
                                  </span>
                                )}
                              </div>

                              {author.linkedin_url && (
                                <a
                                  href={
                                    author.linkedin_url.startsWith("http")
                                      ? author.linkedin_url
                                      : `https://${author.linkedin_url}`
                                  }
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bp-author-social"
                                  aria-label={`${author.name || "Author"} LinkedIn`}
                                >
                                  <i className="bi bi-linkedin" />
                                </a>
                              )}
                            </div>

                            <p className="bp-author-about">
                              {visibleAuthorAbout}
                            </p>

                            {shouldShowAuthorToggle && (
                              <button
                                type="button"
                                className="bp-author-toggle"
                                onClick={() => handleAuthorToggle(i)}
                                aria-expanded={isAuthorExpanded}
                              >
                                {isAuthorExpanded
                                  ? "Read less"
                                  : "Read more"}
                                <i
                                  className={`bi ${isAuthorExpanded
                                    ? "bi-arrow-up"
                                    : "bi-arrow-down"
                                    }`}
                                />
                              </button>
                            )}
                          </div>
                        );
                      })}
                  </div>

                  {/* =================================================
                      SIDEBAR
                  ================================================= */}

                  <div className="col-lg-4">
                    <aside className="bp-sidebar">
                      <a
                        className="bp-side-promo"
                        rel="nofollow"
                        href="https://www.forbes.com/councils/forbestechcouncil/2026/06/01/what-companies-get-wrong-about-agentic-erp/"
                        target="_blank"
                      >
                        <Image
                          src="/img/forber-03.png"
                          width={413}
                          height={392}
                          sizes="(max-width: 991px) 100vw, 413px"
                          alt="Dynamics Square Forbes technology article"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </a>

                      <a
                        className="bp-side-promo"
                        href="https://msdynamicsworld.com/vendor/dynamics-square-usa"
                        target="_blank"
                        rel="nofollow"
                      >
                        <Image
                          src="/img/blog-side001.png"
                          alt="Dynamics Square on Microsoft Dynamics World"
                          width={413}
                          height={168}
                          sizes="(max-width: 991px) 100vw, 413px"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </a>
                    </aside>
                  </div>
                </div>
              </div>

              {/* =================================================
                  RELATED BLOGS
              ================================================= */}

              {blogcat?.length > 0 && (
                <section
                  className="bp-related"
                  aria-labelledby="related-posts-title"
                >
                  <div className="container">
                    <div className="bp-related-head">
                      <div>
                        <span className="bp-related-eyebrow">
                          Related articles
                        </span>
                        <h2 id="related-posts-title">
                          You might also like
                        </h2>
                      </div>

                      {item.category_slug && (
                        <Link
                          href={`/blog/category/${item.category_slug}`}
                          className="bp-related-all"
                        >
                          View all <i className="bi bi-arrow-right" />
                        </Link>
                      )}
                    </div>

                    <div className="row g-4">
                      {blogcat.slice(0, 3).map((item1) => {
                        const relatedImage = item1.image
                          ? getImageUrl(item1.image)
                          : "";

                        return (
                          <div
                            className="col-md-6 col-lg-4"
                            key={item1.title_slug}
                          >
                            <Link
                              href={`/blog/${item1.title_slug}`}
                              className="bp-card"
                            >
                              <div className="bp-card-media">
                                {relatedImage ? (
                                  <Image
                                    src={relatedImage}
                                    alt={item1.title}
                                    width={640}
                                    height={400}
                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                                    unoptimized={!isOptimizableImage(relatedImage)}
                                    className="bp-card-img"
                                  />
                                ) : (
                                  <div className="bp-card-placeholder">
                                    <i className="bi bi-journal-text" />
                                  </div>
                                )}

                                {item1.category && (
                                  <span className="bp-card-pill">
                                    {item1.category}
                                  </span>
                                )}
                              </div>

                              <div className="bp-card-body">
                                <div className="bp-card-meta">
                                  {item1.publish_date && (
                                    <span>{formatDate(item1.publish_date)}</span>
                                  )}
                                  {item1.read_time && (
                                    <span>{item1.read_time} min read</span>
                                  )}
                                </div>

                                <h3 className="bp-card-title">
                                  {item1.title}
                                </h3>

                                {item1.short_description && (
                                  <p className="bp-card-text">
                                    {item1.short_description}
                                  </p>
                                )}

                                <span className="bp-card-cta">
                                  Read article <i className="bi bi-arrow-right" />
                                </span>
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </section>
              )}
            </article>
          );
        })}
      </section>

      <style jsx global>{`
        @font-face {
          font-family: "BP Jakarta";
          src: url("/fonts/plus-jakarta-sans-latin-var-v1.woff2") format("woff2");
          font-weight: 200 800;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
            U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "BP Jakarta Fallback";
          src: local("Arial");
          ascent-override: 98.88%;
          descent-override: 21.15%;
          line-gap-override: 0%;
          size-adjust: 104.98%;
        }

        @font-face {
          font-family: "BP DM Sans";
          src: url("/fonts/dm-sans-latin-var-v1.woff2") format("woff2");
          font-weight: 100 1000;
          font-style: normal;
          font-display: swap;
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6,
            U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122,
            U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
          font-family: "BP DM Sans Fallback";
          src: local("Arial");
          ascent-override: 94.9%;
          descent-override: 29.66%;
          line-gap-override: 0%;
          size-adjust: 104.53%;
        }

        .bp-page {
          --bp-ink: #0b1324;
          --bp-text: #344054;
          --bp-muted: #667085;
          --bp-line: #e4e7ec;
          --bp-red: #c22221;
          --bp-red-dark: #9e1a19;
          --bp-red-soft: #fdecec;
          --bp-bg: #f5f6f8;
          --bp-display: "BP Jakarta", "BP Jakarta Fallback", Arial, sans-serif;
          --bp-sans: "BP DM Sans", "BP DM Sans Fallback", Arial, sans-serif;
          font-family: var(--bp-sans);
          color: var(--bp-text);
        }

        .bp-page p,
        .bp-page li,
        .bp-page a,
        .bp-page span,
        .bp-page button,
        .bp-page td,
        .bp-page th {
          font-family: var(--bp-sans);
        }

        .bp-page h1,
        .bp-page h2,
        .bp-page h3,
        .bp-page h4,
        .bp-page .bp-title,
        .bp-page .bp-card-title,
        .bp-page .bp-author-name,
        .bp-page .bp-author-name span {
          font-family: var(--bp-display) !important;
        }

        .bp-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--bp-red);
          transform-origin: 0 50%;
          z-index: 1100;
          pointer-events: none;
        }

        /* ---------- HERO ---------- */

        /* Blend the (transparent, unscrolled) site header into the hero.
           Once it turns .fixed-top on scroll it goes back to white. */
        div:has(> #header),
        #header:not(.fixed-top) {
          background: var(--bp-hero-bg, #f5f6f8);
        }

        /* globals.css gives every <section> 60px padding; not wanted here */
        .bp-page > section {
          padding: 0;
        }

        .bp-hero {
          position: relative;
          padding: 20px 0 56px;
          background: var(--bp-bg);
          overflow: hidden;
        }

        .bp-hero::before {
          content: "";
          position: absolute;
          right: -120px;
          top: -120px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(194, 34, 33, 0.12), transparent 65%);
          pointer-events: none;
        }

        .bp-breadcrumb {
          position: relative;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          list-style: none;
          padding: 0;
          margin: 0 0 28px;
          font-size: 13px;
          font-weight: 500;
          color: var(--bp-muted);
        }

        .bp-breadcrumb li + li::before {
          content: "›";
          margin-right: 8px;
          color: #98a2b3;
        }

        .bp-breadcrumb li:last-child {
          max-width: 360px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .bp-breadcrumb a {
          color: var(--bp-ink);
          font-weight: 600;
        }

        .bp-breadcrumb a:hover {
          color: var(--bp-red);
        }

        .bp-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 16px;
          margin-bottom: 22px;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          background: var(--bp-red);
          border-radius: 999px;
          transition: background 0.2s ease;
        }

        .bp-pill::before {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #fff;
        }

        .bp-pill:hover {
          color: #fff;
          background: var(--bp-red-dark);
        }

        .bp-title {
          font-size: clamp(32px, 4.4vw, 42px) !important;
          line-height: 1.1 !important;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--bp-ink);
          margin: 0 0 20px;
        }

        .bp-lead {
          font-size: 18px;
          line-height: 1.65;
          color: var(--bp-text);
          margin: 0 0 32px;
        }

        .bp-byline {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .bp-byline-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--bp-red);
          padding: 2px;
          background: #fff;
        }

        .bp-byline-text {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .bp-byline-name {
          font-size: 16px;
          font-weight: 700;
          color: var(--bp-ink);
        }

        .bp-byline-name:hover {
          color: var(--bp-red);
        }

        .bp-byline-sub {
          display: flex;
          flex-wrap: wrap;
          gap: 4px 16px;
          font-size: 13px;
          color: var(--bp-muted);
        }

        .bp-byline-sub i {
          margin-right: 6px;
          color: var(--bp-red);
        }

        .bp-hero-media {
          position: relative;
          padding: 0 0 18px 18px;
        }

        .bp-hero-media::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 70%;
          height: 70%;
          border-radius: 24px;
          background: var(--bp-red);
        }

        .bp-hero-img {
          position: relative;
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 16 / 10;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 24px 60px rgba(11, 19, 36, 0.18);
        }

        /* ---------- BODY ---------- */

        .bp-body {
          padding-top: 56px;
        }

        .bp-rail {
          position: sticky;
          top: 130px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .bp-rail-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--bp-muted);
        }

        .bp-share-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          font-size: 16px;
          color: var(--bp-ink);
          background: var(--bp-bg);
          border-radius: 12px;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .bp-page button:hover .bp-share-btn {
          color: #fff;
          background: var(--bp-red);
          transform: translateY(-2px);
        }

        .bp-share-inline {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 24px 0;
          border-top: 1px solid var(--bp-line);
        }

        .bp-share-row {
          display: flex;
          gap: 10px;
        }

        .bp-content.blogs-content {
          padding-top: 0;
          padding-bottom: 32px;
          border-bottom: 0;
        }

        .bp-content p,
        .bp-content ul li,
        .bp-content ol li,
        .bp-content ul li p {
          font-size: 18px !important;
          line-height: 1.8;
          color: var(--bp-text);
        }

        .bp-content h2,
        .bp-content h3 {
          color: var(--bp-ink);
          scroll-margin-top: 120px;
        }

        /* Article section headings (not TOC / FAQ) */
        .bp-content .blogs-content-inner > div > h2 {
          position: relative;
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.2;
          margin: 56px 0 20px;
          padding-left: 18px;
        }

        .bp-content .blogs-content-inner > div > h2::before {
          content: "";
          position: absolute;
          left: 0;
          top: 4px;
          bottom: 4px;
          width: 5px;
          border-radius: 4px;
          background: var(--bp-red);
        }

        .bp-content h3 {
          font-size: 23px;
          font-weight: 700;
          margin: 36px 0 14px;
        }

        /* FAQ question headers are h3s too: keep them flush */
        .bp-content .faq-accordion-item h3,
        .bp-content .accordion-header {
          margin: 0 !important;
        }

        .bp-content .faq-accordion-body p {
          font-size: 16px !important;
          line-height: 1.7;
        }

        /* Plain text links only (SafeHTML gives them exactly class="u-i").
           CMS links with their own class or inline style (buttons, CTA
           boxes) keep their own styling. */
        .bp-content a[class="u-i"]:not([style]) {
          color: var(--bp-red);
          font-weight: 600;
          text-decoration: none;
          background-image: linear-gradient(var(--bp-red-soft), var(--bp-red-soft));
          background-size: 100% 35%;
          background-position: 0 90%;
          background-repeat: no-repeat;
          transition: background-size 0.2s ease;
        }

        .bp-content a[class="u-i"]:not([style]):hover {
          background-size: 100% 90%;
        }

        /* CMS call-to-action box, recoloured to the page palette */
        .bp-content .blog-cta {
          margin: 40px 0;
          padding: 28px 32px;
          background: var(--bp-bg);
          border-left: 5px solid var(--bp-red);
          border-radius: 0 20px 20px 0;
        }

        .bp-content .blog-cta h4,
        .bp-content .blog-cta .blog-cta__title {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          color: var(--bp-ink);
        }

        .bp-content .blog-cta .blog-cta__desc,
        .bp-content .blog-cta .blog-cta__desc p {
          margin-bottom: 18px;
          font-size: 16px !important;
          line-height: 1.7;
        }

        .bp-content .blog-cta p:last-child {
          margin-bottom: 0;
        }

        .bp-content .blog-cta .blog-cta__btn {
          display: inline-flex;
          align-items: center;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
          color: #fff !important;
          background: var(--bp-red);
          border-radius: 999px;
          text-decoration: none !important;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .bp-content .blog-cta .blog-cta__btn:hover {
          background: var(--bp-red-dark);
          transform: translateY(-2px);
        }

        .bp-content img {
          border-radius: 16px;
        }

        .bp-content blockquote {
          position: relative;
          margin: 40px 0;
          padding: 28px 28px 28px 72px;
          background: var(--bp-ink);
          border-radius: 20px;
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.5;
        }

        .bp-content blockquote::before {
          content: "“";
          position: absolute;
          left: 24px;
          top: 6px;
          font-family: Georgia, serif;
          font-size: 64px;
          color: var(--bp-red);
        }

        .bp-content blockquote p {
          color: #fff !important;
          margin: 0;
        }

        .bp-content .table-responsive {
          margin: 32px 0;
          border-radius: 16px;
          border: 1px solid var(--bp-line);
        }

        .bp-content .table {
          margin-bottom: 0;
          font-size: 16px;
        }

        .bp-content .table-dark th {
          background: var(--bp-ink);
          border-color: var(--bp-ink);
        }

        /* ---------- TOC + FAQ ---------- */

        .bp-page .toc-wrapper {
          background: var(--bp-bg);
          border: 0;
          border-radius: 20px;
          padding: 28px !important;
        }

        .bp-page .toc-title {
          font-size: 14px !important;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--bp-red) !important;
        }

        .bp-page .toc-item a {
          color: var(--bp-ink) !important;
          font-weight: 600;
        }

        .bp-page .toc-chevron {
          color: var(--bp-red);
        }

        .bp-page .toc-item a:hover {
          color: var(--bp-red) !important;
        }

        .bp-page .toc-toggle-btn {
          color: var(--bp-red);
        }

        .bp-page .toc-fade-overlay {
          background: linear-gradient(
            to bottom,
            rgba(245, 246, 248, 0) 0%,
            rgba(245, 246, 248, 0.95) 80%
          );
        }

        .bp-page .faq-accordion-item {
          border-radius: 16px !important;
        }

        /* ---------- AUTHOR ---------- */

        .bp-author {
          position: relative;
          margin: 32px 0 8px;
          padding: 32px;
          background: var(--bp-ink);
          border-radius: 24px;
          overflow: hidden;
          scroll-margin-top: 120px;
        }

        .bp-author::after {
          content: "";
          position: absolute;
          right: -60px;
          bottom: -60px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(194, 34, 33, 0.5), transparent 70%);
          pointer-events: none;
        }

        .bp-author-top {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 18px;
        }

        .bp-author-avatar {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid var(--bp-red);
        }

        .bp-author-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ff8a80;
        }

        .bp-author-name,
        .bp-author-name span {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
        }

        a.bp-author-name:hover span {
          color: #ff8a80;
        }

        .bp-author-social {
          margin-left: auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          font-size: 16px;
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: background 0.2s ease;
        }

        .bp-author-social:hover {
          color: #fff;
          background: #0a66c2;
        }

        .bp-author-about {
          position: relative;
          margin: 0;
          font-size: 15px;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.75);
          white-space: pre-line;
        }

        .bp-author-toggle {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 14px;
          padding: 0;
          border: 0;
          background: transparent;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
        }

        .bp-author-toggle:hover {
          color: #ff8a80;
        }

        /* ---------- SIDEBAR ---------- */

        .bp-sidebar {
          position: sticky;
          top: 120px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .bp-side-promo {
          display: block;
          overflow: hidden;
          border-radius: 20px;
          box-shadow: 0 8px 24px rgba(11, 19, 36, 0.08);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .bp-side-promo:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(11, 19, 36, 0.14);
        }

        /* ---------- RELATED ---------- */

        .bp-related {
          margin-top: 72px;
          padding: 80px 0 96px;
          background: var(--bp-bg);
        }

        .bp-related-head {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 36px;
        }

        .bp-related-eyebrow {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--bp-red);
        }

        .bp-related-head h2 {
          font-size: clamp(28px, 3.4vw, 40px) !important;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: var(--bp-ink);
          margin: 6px 0 0;
        }

        .bp-related-all {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          background: var(--bp-ink);
          border-radius: 999px;
          transition: background 0.2s ease;
        }

        .bp-related-all:hover {
          color: #fff;
          background: var(--bp-red);
        }

        .bp-card {
          display: flex;
          flex-direction: column;
          height: 100%;
          overflow: hidden;
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 4px 16px rgba(11, 19, 36, 0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .bp-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px rgba(11, 19, 36, 0.14);
        }

        .bp-card-media {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: var(--bp-ink);
        }

        .bp-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .bp-card:hover .bp-card-img {
          transform: scale(1.06);
        }

        .bp-card-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          font-size: 44px;
          color: rgba(255, 255, 255, 0.35);
          background: linear-gradient(135deg, var(--bp-ink) 0%, #2a1320 100%);
        }

        .bp-card-pill {
          position: absolute;
          left: 16px;
          top: 16px;
          padding: 5px 12px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          background: var(--bp-red);
          border-radius: 999px;
        }

        .bp-card-body {
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 24px;
        }

        .bp-card-meta {
          display: flex;
          gap: 14px;
          font-size: 13px;
          color: var(--bp-muted);
          margin-bottom: 10px;
        }

        .bp-card-title {
          font-size: 20px !important;
          line-height: 1.35;
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--bp-ink);
          margin: 0 0 10px;
          transition: color 0.2s ease;
        }

        .bp-card:hover .bp-card-title {
          color: var(--bp-red);
        }

        .bp-card-text {
          font-size: 15px;
          line-height: 1.6;
          color: var(--bp-muted);
          margin: 0 0 20px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .bp-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          font-size: 14px;
          font-weight: 700;
          color: var(--bp-red);
        }

        .bp-card-cta i {
          transition: transform 0.2s ease;
        }

        .bp-card:hover .bp-card-cta i {
          transform: translateX(4px);
        }

        /* ---------- RESPONSIVE ---------- */

        @media (max-width: 991px) {
          .bp-sidebar {
            position: static;
          }

          .bp-hero {
            padding-bottom: 48px;
          }
        }

        @media (max-width: 767px) {
          .bp-breadcrumb {
            margin-bottom: 28px;
          }

          .bp-breadcrumb li:last-child {
            max-width: 180px;
          }

          .bp-lead {
            font-size: 16px;
          }

          .bp-content p,
          .bp-content ul li,
          .bp-content ol li,
          .bp-content ul li p {
            font-size: 17px !important;
          }

          .bp-content .blogs-content-inner > div > h2 {
            font-size: 25px;
          }

          .bp-content h3 {
            font-size: 21px;
          }

          .bp-author {
            padding: 24px;
          }

          .bp-related {
            padding: 56px 0 64px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bp-card,
          .bp-card-img,
          .bp-side-promo,
          .bp-share-btn {
            transition: none;
          }
        }

        @media (max-width: 1400px) {
          .blog-content img,
          .blog-content p img {
            width: 100% !important;
            max-width: 100% !important;
            height: auto !important;
          }
        }
      `}</style>
      <TimerModal />
    </div>
  );
}

/* =========================================================
   STATIC PATHS
========================================================= */

export async function getStaticPaths() {
  // Let a real API/network failure throw here so `next build` fails instead
  // of silently pre-rendering zero blog posts (which would ship a site with
  // every blog URL 404-ing). See helpers/blogApi.js for the error/not-found
  // distinction.
  const allBlogsRaw = await BlogService.getAllBlogs();

  // BlogService.getAllBlogs() resolves to { blogs: [...] }, walking every
  // page since the upstream API caps a single request at 100 blogs (see
  // helpers/blogApi.js). Using getBlogs() here used to pre-render only the
  // first 100 blog posts at build time, so every blog past #100 never
  // appeared in the sitemap even though it rendered fine on-demand via the
  // `fallback: "blocking"` path.
  const allBlogs = Array.isArray(allBlogsRaw)
    ? allBlogsRaw
    : allBlogsRaw?.blogs || allBlogsRaw?.data || [];

  const paths = Array.isArray(allBlogs)
    ? allBlogs
      .map(
        (b) =>
          b.title_slug || b.slug
      )
      .filter(
        (slug) =>
          typeof slug === "string" &&
          slug.trim() !== ""
      )
      .map((slug) => ({
        params: {
          slug,
        },
      }))
    : [];

  return {
    paths,
    fallback: "blocking",
  };
}

/* =========================================================
   STATIC PROPS
========================================================= */

export async function getStaticProps({
  params,
}) {
  const slug = params?.slug || "";

  try {
    /* =====================================================
       GET BLOG
    ===================================================== */

    const blogsDataRaw =
      await BlogService.getBlogBySlug(slug);

    let blogsData = [];

    if (Array.isArray(blogsDataRaw)) {
      blogsData = blogsDataRaw;
    } else if (
      Array.isArray(blogsDataRaw?.data)
    ) {
      blogsData = blogsDataRaw.data;
    } else if (
      Array.isArray(blogsDataRaw?.blogs)
    ) {
      blogsData = blogsDataRaw.blogs;
    } else if (
      Array.isArray(blogsDataRaw?.posts)
    ) {
      blogsData = blogsDataRaw.posts;
    } else if (
      blogsDataRaw &&
      typeof blogsDataRaw === "object"
    ) {
      blogsData = [blogsDataRaw];
    }

    /* =====================================================
       NOT FOUND
    ===================================================== */

    if (
      !blogsData ||
      blogsData.length === 0
    ) {
      return {
        notFound: true,
        revalidate: 60,
      };
    }

    /* =====================================================
       STRING HELPER
    ===================================================== */

    const extractStr = (value) => {
      if (!value) {
        return "";
      }

      if (typeof value === "string") {
        return value;
      }

      if (Array.isArray(value)) {
        return value.length > 0
          ? extractStr(value[0])
          : "";
      }

      if (
        typeof value === "object"
      ) {
        return (
          value.name ||
          value.title ||
          ""
        );
      }

      return String(value);
    };

    /* =====================================================
       STRIP BASE64 IMAGES FROM JSON-LD
       CMS schema markup sometimes embeds a base64 data URI
       in `image`, which can bloat the page payload by 100s
       of KB. Swap it for the real (tiny) image URL instead.
    ===================================================== */

    const sanitizeSchemaJson = (jsonStr, fallbackImage) => {
      if (typeof jsonStr !== "string") {
        return jsonStr;
      }

      try {
        const parsed = JSON.parse(jsonStr);

        if (
          typeof parsed?.image === "string" &&
          parsed.image.startsWith("data:")
        ) {
          parsed.image = fallbackImage || "";
        }

        return JSON.stringify(parsed);
      } catch (error) {
        return jsonStr;
      }
    };

    /* =====================================================
       NORMALIZE BLOG DATA
    ===================================================== */

    const blogs = blogsData.map((b) => ({
      title: extractStr(b.title),

      title_slug: extractStr(
        b.slug || b.title_slug
      ),
      faqs: Array.isArray(b.faqs) ? b.faqs : [],
      description: extractStr(
        b.content || b.description
      ),

      meta_title: extractStr(
        b.seo?.metaTitle ||
        b.meta_title
      ),

      meta_description: extractStr(
        b.seo?.metaDescription ||
        b.meta_description
      ),

      meta_image: extractStr(
        b.featuredImage?.url ||
        b.meta_image
      ),

      meta_keyword: extractStr(
        b.seo?.focusKeyword ||
        b.meta_keyword
      ),

      publish_date:
        b.publishedAt ||
        b.publish_date ||
        null,

      updated_at:
        b.updatedAt ||
        b.updated_at ||
        null,

      read_time: extractStr(
        b.readingTimeMinutes ||
        b.read_time
      ),

      author:
        extractStr(b.author) ||
        "Author",

      author_email: extractStr(
        b.author?.email ||
        b.author_email
      ),

      category:
        extractStr(b.category) ||
        "Category",

      category_slug: extractStr(
        b.category?.slug ||
        b.category_slug
      ),

      rank: b.rank || 0,

      noIndex: b.seo?.noIndex === true,

      short_description: extractStr(
        b.excerpt ||
        b.short_description
      ),

      additional_script: null,

      additional_multiscript:
        (() => {
          try {
            if (
              b.schemaMarkup &&
              Array.isArray(
                b.schemaMarkup
              )
            ) {
              return b.schemaMarkup.map(
                (schema) =>
                  sanitizeSchemaJson(
                    schema.json ||
                    JSON.stringify(schema),
                    b.featuredImage?.url
                  )
              );
            }

            if (
              b.additional_multiscript
            ) {
              const parsed =
                typeof b.additional_multiscript ===
                  "string"
                  ? JSON.parse(
                    b.additional_multiscript
                  )
                  : b.additional_multiscript;

              return Array.isArray(
                parsed
              )
                ? parsed.map((item) =>
                  sanitizeSchemaJson(
                    typeof item ===
                      "string"
                      ? item
                      : JSON.stringify(
                        item
                      ),
                    b.featuredImage?.url
                  )
                )
                : [];
            }

            return [];
          } catch (error) {
            console.error(
              "Schema parsing error:",
              error
            );

            return [];
          }
        })(),
    }));

    /* =====================================================
       PROCESS HEADINGS + TOC
    ===================================================== */

    blogs.forEach((blog) => {
      const html =
        blog.description || "";

      const headings = [];
      const usedSlugs = {};

      /*
       * Matches H2/H3 headings.
       */
      const headingRegex =
        /<(h[23])([^>]*)>([\s\S]*?)<\/\1>/gi;

      blog.description = html.replace(
        headingRegex,
        (
          match,
          tag,
          attrs,
          innerHtml
        ) => {
          const level =
            tag.toLowerCase() ===
              "h2"
              ? 2
              : 3;

          let textContent =
            extractTextFromHtml(
              innerHtml
            );

          const existingIdMatch =
            attrs.match(
              /id=["']([^"']+)["']/i
            );

          let headingSlug =
            existingIdMatch?.[1];

          /*
           * Use existing CMS ID when available.
           */
          if (!headingSlug) {
            headingSlug =
              createHeadingSlug(
                textContent,
                usedSlugs
              );
          } else {
            /*
             * Register existing ID so future
             * generated IDs don't collide.
             */
            usedSlugs[headingSlug] =
              (usedSlugs[
                headingSlug
              ] || 0) + 1;
          }

          if (!textContent) {
            textContent = `Section ${headings.length + 1
              }`;
          }

          /*
           * Add ID only if one doesn't already exist.
           */
          let newAttrs = attrs;

          if (!existingIdMatch) {
            newAttrs = `${attrs} id="${headingSlug}"`;
          }

          headings.push({
            level,
            text: textContent,
            slug: headingSlug,
          });

          return `<${tag}${newAttrs}>${innerHtml}</${tag}>`;
        }
      );

      const hasH2 = headings.some(
        (heading) =>
          heading.level === 2
      );

      blog.tocList = headings.filter(
        (heading) =>
          hasH2
            ? heading.level === 2
            : heading.level === 3
      );
    });

    /* =====================================================
       RELATED BLOGS
    ===================================================== */

    let blogcat = [];

    try {
      if (
        blogs[0].category_slug
      ) {
        const relatedDataRaw =
          await BlogService.getBlogsByCategory(
            blogs[0].category_slug
          );

        let relatedData = [];

        if (
          Array.isArray(
            relatedDataRaw
          )
        ) {
          relatedData =
            relatedDataRaw;
        } else if (
          Array.isArray(
            relatedDataRaw?.data
          )
        ) {
          relatedData =
            relatedDataRaw.data;
        } else if (
          Array.isArray(
            relatedDataRaw?.blogs
          )
        ) {
          relatedData =
            relatedDataRaw.blogs;
        } else if (
          Array.isArray(
            relatedDataRaw?.posts
          )
        ) {
          relatedData =
            relatedDataRaw.posts;
        }

        const currentSlug =
          blogs[0].title_slug;

        const relatedDataFiltered =
          relatedData.filter(
            (blog) =>
              extractStr(
                blog.slug ||
                blog.title_slug
              ) !== currentSlug
          );

        /*
         * Keep 3 related articles.
         * Change back to 2 if you prefer.
         */
        blogcat =
          relatedDataFiltered
            .slice(0, 3)
            .map((c) => ({
              title: extractStr(
                c.title
              ),

              title_slug:
                extractStr(
                  c.slug ||
                  c.title_slug
                ),

              author:
                extractStr(
                  c.author
                ) || "Author",

              publish_date:
                c.publishedAt ||
                c.publish_date ||
                null,

              updated_at:
                c.updatedAt ||
                c.updated_at ||
                null,

              read_time:
                extractStr(
                  c.readingTimeMinutes ||
                  c.read_time
                ),

              category:
                extractStr(
                  c.category
                ) || "Category",

              category_slug:
                extractStr(
                  c.category?.slug ||
                  c.category_slug
                ),

              short_description:
                extractStr(
                  c.excerpt ||
                  c.short_description
                ),

              image: extractStr(
                c.featuredImage?.url ||
                c.meta_image
              ),
            }));
      }
    } catch (error) {
      console.error(
        "Error fetching related blogs:",
        error
      );
    }

    /* =====================================================
       AUTHOR DETAILS
    ===================================================== */

    let authordetials = [];

    try {
      const rawAuthor =
        blogsData[0]?.author;

      /*
       * New API structure:
       * author is an object.
       */
      if (
        rawAuthor &&
        typeof rawAuthor ===
        "object"
      ) {
        authordetials = [
          {
            name:
              rawAuthor.name ||
              null,

            linkedin_url:
              rawAuthor
                .socialLinks
                ?.linkedin ||
              rawAuthor.linkedin ||
              rawAuthor.linkedin_url ||
              "",

            twitter_url:
              rawAuthor
                .socialLinks
                ?.twitter ||
              rawAuthor.twitter_url ||
              "",

            facebook_url:
              rawAuthor
                .socialLinks
                ?.facebook ||
              rawAuthor.facebook_url ||
              "",

            instagram_url:
              rawAuthor
                .socialLinks
                ?.instagram ||
              rawAuthor.instagram_url ||
              "",

            profile_photo_path:
              rawAuthor.avatarUrl ||
              rawAuthor.profile_photo_path ||
              "",

            about:
              rawAuthor.about ||
              rawAuthor.description ||
              "",
          },
        ];
      } else {
        /*
         * Legacy API structure.
         */
        const author =
          blogs[0]
            .author_email ||
          blogs[0].author;

        if (author) {
          const authorSlug =
            author
              .toLowerCase()
              .split("-")
              .join(" ")
              .replace(
                /\s+/g,
                "-"
              );

          const authorDataRaw =
            await BlogService.getAuthorDetails(
              authorSlug
            );

          const authorData =
            Array.isArray(
              authorDataRaw
            )
              ? authorDataRaw
              : authorDataRaw
                ? [authorDataRaw]
                : [];

          authordetials =
            authorData.map(
              (a) => ({
                name:
                  a.name ||
                  null,

                linkedin_url:
                  a.socialLinks
                    ?.linkedin ||
                  a.linkedin ||
                  a.linkedin_url ||
                  "",

                twitter_url:
                  a.socialLinks
                    ?.twitter ||
                  a.twitter_url ||
                  "",

                facebook_url:
                  a.socialLinks
                    ?.facebook ||
                  a.facebook_url ||
                  "",

                instagram_url:
                  a.socialLinks
                    ?.instagram ||
                  a.instagram_url ||
                  "",

                profile_photo_path:
                  a.avatarUrl ||
                  a.profile_photo_path ||
                  "",

                about:
                  a.about ||
                  a.description ||
                  "",
              })
            );
        }
      }
    } catch (error) {
      console.error(
        "Error fetching author:",
        error
      );
    }

    /* =====================================================
       RETURN PROPS
    ===================================================== */

    return {
      props: {
        blogs,
        blogcat,
        authordetials,
      },

      /*
       * Revalidate every 60 sec.
       */
      revalidate: 60,
    };
  } catch (error) {
    console.error(
      "Error in getStaticProps:",
      error
    );

    // Do NOT return notFound here — a genuine 404 already returned above.
    // Reaching this catch means the API call itself failed (network error,
    // 5xx, etc.) or the data-shaping logic broke. Rethrowing fails the build
    // (so Vercel keeps the last good deployment) or, during ISR background
    // revalidation, keeps serving the last successfully generated page
    // instead of 404-ing a post that is actually still live.
    throw error;
  }
}

export default Post;