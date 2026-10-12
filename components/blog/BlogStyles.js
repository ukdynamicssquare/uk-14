// Shared look for the blog listing pages (index, category, tag, author).
// Wrap the page in <div className="bl-page"> and render <BlogStyles />.
// Page-specific styles stay in each page.

export default function BlogStyles() {
  return (
    <style jsx global>{`
      .bl-page {
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

      .bl-page p,
      .bl-page li,
      .bl-page a,
      .bl-page span,
      .bl-page button,
      .bl-page input {
        font-family: var(--bp-sans);
      }

      .bl-page h1,
      .bl-page h2,
      .bl-page h3 {
        font-family: var(--bp-display) !important;
      }

      /* globals.css gives every <section> 60px padding */
      .bl-page section {
        padding: 0;
      }

      /* Blend the unscrolled site header into the grey hero */
      div:has(> #header),
      #header:not(.fixed-top) {
        background: var(--bp-bg);
      }

      /* ---------- HERO ---------- */

      .bl-hero {
        position: relative;
        padding: 20px 0 48px;
        background: var(--bp-bg);
        overflow: hidden;
      }

      .bl-hero::before {
        content: "";
        position: absolute;
        right: -140px;
        top: -160px;
        width: 560px;
        height: 560px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(194, 34, 33, 0.12), transparent 65%);
        pointer-events: none;
      }

      .bl-breadcrumb {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        list-style: none;
        padding: 0;
        margin: 0 0 36px;
        font-size: 13px;
        font-weight: 500;
        color: var(--bp-muted);
      }

      .bl-breadcrumb li + li::before {
        content: "›";
        margin-right: 8px;
        color: #98a2b3;
      }

      .bl-breadcrumb a {
        color: var(--bp-ink);
        font-weight: 600;
      }

      .bl-breadcrumb a:hover {
        color: var(--bp-red);
      }

      .bl-hero-inner {
        position: relative;
        max-width: 760px;
      }

      .bl-eyebrow {
        display: inline-block;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--bp-red);
      }

      .bl-title {
        margin: 10px 0 16px;
        font-size: clamp(32px, 4.4vw, 44px) !important;
        line-height: 1.08 !important;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--bp-ink);
      }

      .bl-intro {
        margin: 0 0 28px;
        max-width: 620px;
        font-size: 18px;
        line-height: 1.65;
        color: var(--bp-text);
      }

      /* ---------- TOPIC / TAG CHIPS ---------- */

      .bl-topics {
        position: relative;
        margin-top: 32px;
      }

      .bl-topics-label {
        display: block;
        margin-bottom: 12px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--bp-muted);
      }

      .bl-topics-list {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        list-style: none;
        padding: 0;
        margin: 0;
      }

      .bl-topic {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 16px;
        font-size: 14px;
        font-weight: 600;
        color: var(--bp-ink);
        background: #fff;
        border: 1px solid var(--bp-line);
        border-radius: 999px;
        transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
      }

      .bl-topic:hover,
      .bl-topic.is-active {
        color: #fff;
        background: var(--bp-ink);
        border-color: var(--bp-ink);
      }

      .bl-topic-count {
        padding: 1px 8px;
        font-size: 12px;
        font-weight: 700;
        color: var(--bp-muted);
        background: var(--bp-bg);
        border-radius: 999px;
      }

      .bl-topic:hover .bl-topic-count,
      .bl-topic.is-active .bl-topic-count {
        color: #fff;
        background: rgba(255, 255, 255, 0.18);
      }

      .bl-topic--toggle {
        color: var(--bp-red);
        border-style: dashed;
        border-color: rgba(194, 34, 33, 0.4);
        background: transparent;
      }

      .bl-topic--toggle:hover {
        color: #fff;
        background: var(--bp-red);
        border-color: var(--bp-red);
      }

      /* ---------- SHARED BITS ---------- */

      .bl-chip {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        align-self: flex-start;
        padding: 6px 14px;
        margin-bottom: 14px;
        font-size: 12px;
        font-weight: 700;
        color: #fff;
        background: var(--bp-red);
        border-radius: 999px;
      }

      .bl-chip:hover {
        color: #fff;
        background: var(--bp-red-dark);
      }

      .bl-chip--soft {
        color: var(--bp-red);
        background: var(--bp-red-soft);
      }

      .bl-chip--soft:hover {
        color: #fff;
        background: var(--bp-red);
      }

      .bl-btn {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 12px 22px;
        border: 0;
        border-radius: 999px;
        background: var(--bp-red);
        color: #fff;
        font-size: 15px;
        font-weight: 700;
        transition: background 0.2s ease, transform 0.2s ease;
      }

      .bl-btn:hover {
        color: #fff;
        background: var(--bp-red-dark);
        transform: translateY(-2px);
      }

      .bl-meta {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 4px 12px;
        font-size: 13px;
        color: var(--bp-muted);
      }

      .bl-meta-author {
        font-weight: 700;
        color: var(--bp-ink);
      }

      .bl-meta-author:hover {
        color: var(--bp-red);
      }

      .bl-meta > * + *::before {
        content: "·";
        margin-right: 12px;
        color: #98a2b3;
      }

      .bl-count {
        padding: 8px 16px;
        font-size: 14px;
        font-weight: 600;
        color: var(--bp-text);
        background: var(--bp-bg);
        border-radius: 999px;
      }

      .bl-avatar {
        flex-shrink: 0;
        border-radius: 50%;
        object-fit: cover;
        background: #fff;
      }

      .bl-avatar--initials {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
        color: #fff;
        background: linear-gradient(135deg, var(--bp-ink) 0%, var(--bp-red) 140%);
      }

      .bl-img-placeholder {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 40px;
        color: rgba(255, 255, 255, 0.4);
        background: linear-gradient(135deg, var(--bp-ink) 0%, #2a1320 100%);
      }

      /* ---------- SECTION HEADING ---------- */

      .bl-section {
        padding: 56px 0 96px !important;
      }

      .bl-section-head {
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 32px;
      }

      .bl-section-head h2 {
        margin: 6px 0 0;
        font-size: clamp(26px, 3vw, 36px) !important;
        font-weight: 800;
        letter-spacing: -0.03em;
        color: var(--bp-ink);
      }

      /* ---------- POST CARD ---------- */

      .bl-card {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        background: #fff;
        border: 1px solid var(--bp-line);
        border-radius: 24px;
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      }

      .bl-card:hover {
        transform: translateY(-6px);
        border-color: transparent;
        box-shadow: 0 24px 48px rgba(11, 19, 36, 0.12);
      }

      .bl-card-media {
        display: block;
        aspect-ratio: 16 / 10;
        overflow: hidden;
        background: var(--bp-bg);
      }

      .bl-card-img {
        width: 100%;
        height: 100%;
        transition: transform 0.5s ease;
      }

      .bl-card:hover .bl-card-img {
        transform: scale(1.06);
      }

      .bl-card-body {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 22px 24px 24px;
      }

      .bl-card-title {
        margin: 0 0 10px;
        font-size: 19px !important;
        line-height: 1.35;
        font-weight: 800;
        letter-spacing: -0.01em;
      }

      .bl-card-title a {
        color: var(--bp-ink);
      }

      .bl-card-title a:hover {
        color: var(--bp-red);
      }

      .bl-card-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        margin: 0 0 20px;
        font-size: 15px;
        line-height: 1.6;
        color: var(--bp-muted);
      }

      .bl-card-foot {
        margin-top: auto;
        padding-top: 16px;
        border-top: 1px solid var(--bp-line);
      }

      /* ---------- EMPTY + PAGER ---------- */

      .bl-empty {
        padding: 56px 24px;
        text-align: center;
        background: var(--bp-bg);
        border-radius: 24px;
      }

      .bl-empty .bi {
        font-size: 32px;
        color: var(--bp-muted);
      }

      .bl-empty p {
        margin: 12px 0 20px;
        font-size: 17px;
        color: var(--bp-text);
      }

      .bl-pager {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        gap: 8px;
        margin-top: 48px;
      }

      .bl-pager-num,
      .bl-pager-btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 44px;
        height: 44px;
        padding: 0 14px;
        font-size: 15px;
        font-weight: 700;
        color: var(--bp-ink);
        background: #fff;
        border: 1px solid var(--bp-line);
        border-radius: 999px;
        transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
      }

      .bl-pager-num:hover,
      .bl-pager-btn:hover:not(:disabled) {
        border-color: var(--bp-ink);
      }

      .bl-pager-num.is-active {
        color: #fff;
        background: var(--bp-red);
        border-color: var(--bp-red);
      }

      .bl-pager-btn:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      .bl-pager-gap {
        padding: 0 4px;
        color: var(--bp-muted);
      }

      /* ---------- RESPONSIVE ---------- */

      @media (max-width: 767px) {
        .bl-breadcrumb {
          margin-bottom: 24px;
        }

        .bl-intro {
          font-size: 16px;
        }

        .bl-section {
          padding: 40px 0 64px !important;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .bl-card,
        .bl-card-img,
        .bl-btn {
          transition: none;
        }
      }
    `}</style>
  );
}
