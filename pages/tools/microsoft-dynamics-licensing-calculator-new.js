import { useEffect, useRef, useState } from "react";
import PageSeo from "../../components/PageSeo";
import LicensingAssessment from "../../components/LicensingAssessment/LicensingAssessment";
import faqData from "../../public/data/microsoft-licensing_faq.json";
import styles from "../../styles/licensingAssessment.module.css";

const STATS = [
  { value: "2 min", label: "To a costed licence position" },
  { value: "600+", label: "UK licence reviews completed" },
  { value: "18%", label: "Average overspend we find at renewal" },
];

const DISCOVER = [
  "The Dynamics 365 platform and licence tier you need",
  "Licence cost per month, per year and over three years",
  "The Finance & Operations modules your needs map to",
  "Add-ons that are quoted separately",
];

export default function LicensingCalculatorNewPage({ catalog }) {
  const [started, setStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const toolRef = useRef(null);

  // Slide the hero out, then swap in the form (which slides in from below).
  const start = () => {
    if (leaving) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setStarted(true);
      return;
    }
    setLeaving(true);
    setTimeout(() => setStarted(true), 450);
  };

  useEffect(() => {
    if (started) toolRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [started]);

  return (
    <div className={styles.page}>
      <PageSeo
        type="WebApplication"
        title="Dynamics 365 Licensing & Pricing Calculator"
        description="Use our Dynamics 365 pricing calculator to estimate licence costs for your UK business and understand the potential cost of your Microsoft Dynamics 365 solution"
        image="https://www.dynamicssquare.co.uk/img/pricing-cal.png"
        faqs={faqData.slice(0, 5)}
      >
        {/* Literal tag (not the robots prop) so next-sitemap.config.js also drops the page from the sitemap */}
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>

      {!started ? (
        <section className={`${styles.land} ${leaving ? styles.leaving : ""}`}>
          <div className="container">
            <div className={styles.landCard}>
              <div className={styles.copy}>
                <span className={styles.eyebrow}>Dynamics Square · Licence rate card</span>
                <h1>Know Your Dynamics 365 Licensing Cost in Minutes</h1>
                <p className={styles.lead}>
                  Select the capabilities your business needs and get an instant, itemised estimate — built on real
                  Microsoft pricing, not guesswork.
                </p>
                <dl className={styles.stats}>
                  {STATS.map((s) => (
                    <div key={s.value}>
                      <dt>{s.value}</dt>
                      <dd>{s.label}</dd>
                    </div>
                  ))}
                </dl>
                <button type="button" className={styles.start} onClick={start} disabled={leaving}>
                  Start my licence estimate <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </button>
                <p className={styles.note}>
                  You only need to know what the system should do and how many people will use it.
                </p>
              </div>

              <div className={styles.discover}>
                <h2>What will you discover?</h2>
                <ul>
                  {DISCOVER.map((d) => (
                    <li key={d}><i className="bi bi-check2" aria-hidden="true"></i> {d}</li>
                  ))}
                </ul>
                <p className={styles.discoverNote}>
                  Licence subscription only. Implementation, data migration, integrations and support are separate.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div ref={toolRef} className={styles.slideIn}>
          <h1 className="visually-hidden">Know Your Dynamics 365 Licensing Cost in Minutes</h1>
          <LicensingAssessment initialCatalog={catalog} />
        </div>
      )}

      <section className={`solution-faq faq solution-faq-r ${styles.faq}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got questions about Dynamics 365 licensing?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="licensing-faq">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#licensing-faq-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div id={`licensing-faq-${faq.id}`} className="accordion-collapse collapse" data-bs-parent="#licensing-faq">
                      <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button
                    type="button"
                    className="btn faq-btn-l btn-get-started"
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                  >
                    Load More <i className="bi bi-chevron-down" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        /* This page only: the header takes the page's grey so the background runs behind the
           navigation, including the sticky header on scroll (which keeps a soft shadow) */
        #header.header,
        #header.header.header-scrolled,
        #header.header.fixed-top {
          background: #f3f3f5;
        }
        #header.header.fixed-top {
          box-shadow: 0 6px 24px rgba(31, 27, 45, 0.08);
        }
        #header.header .top-header-sec {
          background: #e8e6ef;
        }
      `}</style>
    </div>
  );
}

// The public catalog (capabilities, questions and copy, no prices) is fetched at build
// time and refreshed hourly. If the API is slow or down, the page loads it in the browser.
export async function getStaticProps() {
  const base = (process.env.LICENSING_API_URL || "").replace(/\/$/, "");
  let catalog = null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const res = await fetch(`${base}/public/licensing/catalog`, { signal: controller.signal });
    clearTimeout(timer);
    if (res.ok) catalog = await res.json();
  } catch (e) {
    catalog = null;
  }
  return { props: { catalog }, revalidate: 3600 };
}
