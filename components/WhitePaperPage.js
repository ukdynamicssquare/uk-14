import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageSeo from "./PageSeo";
import WhitePaperForm from "./WhitePaperForm";
import { relatedWhitePapers } from "./WhitePaperLanding";
import s from "../styles/whitePaperPage.module.css";

/**
 * Gated white paper landing page: hero with inline form, key figures,
 * "why read it" copy, chapter list, a download band, related papers and a
 * mobile download bar. Every page under pages/white-papers/ that uses it
 * passes only its own content (see sage-200-to-business-central.js). Each page
 * sets its own robots tag: next-sitemap.config.js reads it from the page file.
 *
 * Optional parts (hero lead, bullets and meta, stats, chapter page numbers,
 * related papers, labels) are left out when a page has no copy for them, so
 * older papers can use the layout with their existing text only (see
 * microsoft-copilot.js).
 */
const FORM_CLASSES = {
  form: s.form,
  field: s.field,
  label: s.label,
  input: s.input,
  inputError: s.inputError,
  error: s.error,
  phone: s.phone,
  phoneInput: s.phoneInput,
  submit: s.submit,
  legal: s.legal,
};

const DEFAULT_EYEBROW = "Free white paper · UK edition · October 2026";

const Check = () => <i className="bi bi-check-circle-fill" aria-hidden="true"></i>;

const WhitePaperPage = ({
  page,
  downloadPath,
  seo,
  images,
  hero,
  form = {},
  stats,
  statNote,
  why,
  chapters,
  download,
  related = true,
  barText,
  barCta = "Download free",
}) => {
  const [showBar, setShowBar] = useState(false);
  const formRef = useRef(null);

  // Mobile download bar appears once the hero form has scrolled out of view.
  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(([entry]) => setShowBar(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const goToForm = (e) => {
    e.preventDefault();
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => document.getElementById("hero-name")?.focus({ preventScroll: true }), 500);
  };

  const [coverW, coverH] = images.coverSize || [487, 613];
  const [insideW, insideH] = images.insideSize || [1000, 800];
  const eyebrow = hero.eyebrow === undefined ? DEFAULT_EYEBROW : hero.eyebrow;
  const fullTitle = hero.subtitle ? `${hero.title} ${hero.subtitle}` : hero.title;

  return (
    <>
      <PageSeo
        type="WebPage"
        title={seo.title}
        description={seo.description}
        image={seo.image || images.banner}
        imageAlt={`${hero.crumb} white paper cover`}
      />

      <div className={s.page}>
        {/* ============ Hero with inline form ============ */}
        <section className={s.hero}>
          <div className="container">
            <nav className={s.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
              <Link href="/white-papers/">White Papers</Link>
              <i className="bi bi-chevron-right" aria-hidden="true"></i>
              <span aria-current="page">{hero.crumb}</span>
            </nav>
            <div className="row g-5 align-items-center">
              <div className="col-lg-7">
                {eyebrow && (
                  <span className={s.eyebrow}>
                    <i className="bi bi-file-earmark-text" aria-hidden="true"></i> {eyebrow}
                  </span>
                )}
                <h1 className={s.h1}>
                  {hero.title} {hero.subtitle && <span>{hero.subtitle}</span>}
                </h1>
                {hero.lead && <p className={s.lead}>{hero.lead}</p>}
                {hero.gets && (
                  <ul className={s.gets}>
                    {hero.gets.map((g) => (
                      <li key={g}><Check />{g}</li>
                    ))}
                  </ul>
                )}
                {hero.pages && (
                  <div className={s.meta}>
                    <span><i className="bi bi-journal-text" aria-hidden="true"></i>{hero.pages} pages</span>
                    <span><i className="bi bi-filetype-pdf" aria-hidden="true"></i>PDF download</span>
                    <span><i className="bi bi-bookmark-check" aria-hidden="true"></i>{hero.sources} cited sources</span>
                    <span><i className="bi bi-people" aria-hidden="true"></i>{hero.audience}</span>
                  </div>
                )}
                {hero.image && (
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt || fullTitle}
                    width={hero.imageSize[0]}
                    height={hero.imageSize[1]}
                    className={s.heroImg}
                    priority
                  />
                )}
              </div>
              <div className="col-lg-5">
                <div className={s.formCard} ref={formRef} id="download">
                  <div className={s.formHead}>
                    <Image src={images.cover} alt={fullTitle} width={coverW} height={coverH} className={s.formCover} priority />
                    <div>
                      <h2>{form.title || "Get your free copy"}</h2>
                      <p>{form.text || "Fill in your details and download the PDF straight away."}</p>
                    </div>
                  </div>
                  <WhitePaperForm downloadPath={downloadPath} classes={FORM_CLASSES} idPrefix="hero" submitLabel={form.submitLabel} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Stat strip ============ */}
        {stats ? (
          <section className={s.stats} aria-label="Key figures">
            <div className="container">
              <div className={s.statGrid}>
                {stats.map((st) => (
                  <div className={s.stat} key={st.value}>
                    <strong>{st.value}</strong>
                    <span>{st.label}</span>
                  </div>
                ))}
              </div>
              <p className={s.statNote}>{statNote}</p>
            </div>
          </section>
        ) : null}

        {/* ============ Why read it (internal links) ============ */}
        <section className={s.section}>
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5">
                <div className={s.whyAside}>
                  {why.kicker !== null && <span className={s.kicker}>{why.kicker || "Why read it"}</span>}
                  <h2 className={s.h2}>{why.title}</h2>
                  {why.sub && <p className={s.sub}>{why.sub}</p>}
                  {why.image && (
                    <Image
                      src={why.image.src}
                      alt={why.image.alt || why.title}
                      width={why.image.width}
                      height={why.image.height}
                      className={s.whyImg}
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-7">
                <div className={s.prose}>{why.body}</div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Inside the paper ============ */}
        <section className={`${s.section} ${s.tint}`}>
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-4 text-center">
                <Image
                  src={images.inside || images.banner}
                  alt={images.insideAlt || `Inside the ${hero.crumb} white paper`}
                  width={insideW}
                  height={insideH}
                  className={s.insideImg}
                />
              </div>
              <div className="col-lg-8">
                {chapters.kicker !== null && <span className={s.kicker}>{chapters.kicker || "Inside the paper"}</span>}
                <h2 className={s.h2}>{chapters.title}</h2>
                <ol className={s.toc}>
                  {chapters.items.map(([n, title, pg]) => (
                    <li key={n}>
                      <span className={s.tocNum}>{n}</span>
                      <span className={s.tocTitle}>{title}</span>
                      {pg && <span className={s.tocPage}>p.{pg}</span>}
                    </li>
                  ))}
                </ol>
                <a href="#download" onClick={goToForm} className={`${s.btnPrimary} ${s.tocCta}`}>
                  {chapters.cta || "Download PDF"} <i className="bi bi-file-earmark-arrow-down" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Mid-page download CTA ============ */}
        <section className={s.section}>
          <div className="container">
            <div className={s.midCta}>
              <Image src={images.cover} alt={`${hero.crumb} white paper`} width={coverW} height={coverH} className={s.midCover} />
              <div className={s.midBody}>
                {download.kicker !== null && <span className={s.kicker}>{download.kicker || "Free download"}</span>}
                <h2 className={s.h2}>{download.title}</h2>
                {download.text && <p className={s.midText}>{download.text}</p>}
                {download.points && (
                  <ul className={s.midList}>
                    {download.points.map((p) => (
                      <li key={p}><Check />{p}</li>
                    ))}
                  </ul>
                )}
                <a href="#download" onClick={goToForm} className={s.btnPrimary}>
                  {download.cta || "Download the white paper"} <i className="bi bi-download" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ============ Related papers ============ */}
        {related && (
          <section className={`${s.section} ${s.tint}`}>
            <div className="container">
              <div className={s.head}>
                <span className={s.kicker}>Keep reading</span>
                <h2 className={s.h2}>More white papers for UK finance leaders</h2>
              </div>
              <div className={s.related}>
                {relatedWhitePapers(page).map((r) => (
                  <Link href={r.href} className={s.relatedCard} key={r.href}>
                    <Image src={r.image} alt={r.title} width={487} height={613} />
                    <div>
                      <h3>{r.title}</h3>
                      <p>{r.text}</p>
                      <span className={s.textCta}>Read the white paper <i className="bi bi-arrow-right" aria-hidden="true"></i></span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ Mobile sticky download bar ============ */}
        <div className={`${s.mobileBar}${showBar ? ` ${s.mobileBarOn}` : ""}`} aria-hidden={!showBar}>
          {barText && <span>{barText}</span>}
          <a href="#download" onClick={goToForm} tabIndex={showBar ? 0 : -1}>
            {barCta}
          </a>
        </div>
      </div>
    </>
  );
};

export default WhitePaperPage;
