import { useEffect, useRef, useState } from "react";
import PageSeo from "../../components/PageSeo";
import MigrationAssessment from "../../components/MigrationAssessment/MigrationAssessment";

const DISCOVER = [
  "Migration readiness and complexity",
  "Potential Dynamics 365 solution fit",
  "Potential migration challenges",
  "Suggested next steps",
];

const FAQS = [
  {
    id: 1,
    question: "How long does the migration assessment take?",
    answer:
      "<p>Most people finish it in 5 to 7 minutes. There are six short steps: your current system, your business profile, what the business does, what the move involves, timing, and where to send your report.</p>",
  },
  {
    id: 2,
    question: "What will the assessment tell me?",
    answer:
      "<p>It shows whether your business points towards Dynamics 365 Business Central, Dynamics 365 Finance &amp; Operations, or the overlap zone where either could work. It also gives a complexity score, an indicative project duration, an indicative annual licence cost and the main risks to plan for.</p>",
  },
  {
    id: 3,
    question: "Which systems can I migrate from?",
    answer:
      "<p>The assessment covers Dynamics NAV, GP, AX, SL and Business Central on-premises, the Sage range, SAP Business One, ByDesign, ECC and S/4HANA, QuickBooks, Xero, MYOB and spreadsheets, plus NetSuite, Oracle, Infor, Epicor, SYSPRO, IFS, Acumatica, Odoo and custom-built systems.</p>",
  },
  {
    id: 4,
    question: "Do I need technical knowledge to complete it?",
    answer:
      "<p>No. The questions are about your business: how many people use the system, how many entities and countries you run, what you need it to do, and when you want to be live. If you are unsure about something, such as your customisations, there is an option for that.</p>",
  },
  {
    id: 5,
    question: "Is the licence figure a quote?",
    answer:
      "<p>No. It is an indicative subscription cost based on Microsoft list prices for the users you enter. Implementation, data migration and support are separate and depend on the scope of your project.</p>",
  },
  {
    id: 6,
    question: "What happens after I submit my details?",
    answer:
      "<p>A Dynamics Square consultant will follow up within one working day with your migration readiness report. Your results are preliminary and can be refined through a technical discovery session. There is no obligation.</p>",
  },
];

export default function MigrationAssessmentPage({ catalog }) {
  const [started, setStarted] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const toolRef = useRef(null);

  // Slide the hero out, then swap in the form (which slides in from the right).
  const start = () => {
    if (leaving) return;
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return setStarted(true);
    setLeaving(true);
    setTimeout(() => setStarted(true), 450);
  };

  useEffect(() => {
    if (started) toolRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [started]);

  return (
    <>
      <PageSeo
        type="WebApplication"
        title="Dynamics 365 Migration Assessment Tool | Dynamics Square UK"
        description="Find out whether Dynamics 365 Business Central or Finance & Operations fits your business, what the migration involves and how long it takes."
        image="/img/tools-four.png"
        faqs={FAQS}
      >
        {/* Literal tag (not the robots prop) so next-sitemap.config.js also drops the page from the sitemap */}
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>

      {!started ? (
        <section className={`mat-land${leaving ? " is-leaving" : ""}`}>
          <div className="container">
            <div className="mat-card">
              <div className="mat-copy">
                <span className="mat-eyebrow">Free ERP readiness assessment</span>
                <h1>Is your business ready for its next ERP?</h1>
                <p className="mat-lead">
                  Discover your migration readiness, identify potential challenges and find the right Microsoft
                  Dynamics 365 direction for your business.
                </p>
                <ul className="mat-meta">
                  <li><i className="bi bi-clock" aria-hidden="true"></i> 5–7 minutes</li>
                  <li><i className="bi bi-check2" aria-hidden="true"></i> Confidential assessment</li>
                  <li><i className="bi bi-arrow-up-right" aria-hidden="true"></i> No obligation</li>
                </ul>
                <button type="button" className="mat-cta" onClick={start} disabled={leaving}>
                  Start my free assessment <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </button>
                <p className="mat-note">
                  No technical expertise required. Your answers help shape a more relevant recommendation.
                </p>
              </div>

              <div className="mat-discover">
                <h2>What will you discover?</h2>
                <ul>
                  {DISCOVER.map((d) => (
                    <li key={d}><i className="bi bi-check2" aria-hidden="true"></i> {d}</li>
                  ))}
                </ul>
                <p className="mat-discover-note">
                  Your results are preliminary and can be refined through a technical discovery session.
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div ref={toolRef} className="mat-tool">
          <h1 className="visually-hidden">Is your business ready for its next ERP?</h1>
          <MigrationAssessment initialCatalog={catalog} />
        </div>
      )}

      <FaqSection />

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
        .mat-land {
          padding: 100px 0;
          background: linear-gradient(180deg, #f3f3f5 0%, #fff 100%);
        }
        .mat-card {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr);
          gap: 60px;
          align-items: center;
          padding: 72px 64px 92px 74px;
          border-radius: 24px;
          color: #fff;
          background:
            radial-gradient(520px 340px at 50% 105%, rgba(118, 96, 172, 0.95), transparent 70%),
            radial-gradient(700px 420px at 30% 60%, rgba(96, 74, 140, 0.55), transparent 70%),
            linear-gradient(160deg, #3b2e52 0%, #3a2d50 60%, #3b2e52 100%);
        }
        .mat-eyebrow {
          display: block;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 12px;
        }
        .mat-copy h1 {
          font-family: Lato, "Lato Fallback", sans-serif;
          font-size: 46px !important;
          font-weight: 700;
          line-height: 1.25;
          color: #fff;
          max-width: 500px;
          margin: 0 0 14px;
        }
        .mat-lead {
          font-size: 17px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.85);
          max-width: 470px;
          margin: 0;
        }
        .mat-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 32px;
          list-style: none;
          padding: 0;
          margin: 44px 0 40px;
          font-size: 17px;
          color: rgba(255, 255, 255, 0.85);
        }
        .mat-meta li {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .mat-meta .bi {
          font-size: 13px;
        }
        .mat-cta {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          height: 62px;
          padding: 0 32px;
          border: 0;
          border-radius: 5px;
          background: var(--color-red, #bb2b36);
          color: #fff;
          font-size: 20px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }
        .mat-cta:hover {
          background: #a0232d;
        }
        .mat-cta:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
        .mat-note {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.85);
          margin: 34px 0 0;
        }
        .mat-discover {
          padding: 40px 24px 28px;
          border-radius: 14px;
          background: #f1f0f5;
          color: #1f1b2d;
        }
        .mat-discover h2 {
          font-size: 20px !important;
          font-weight: 600;
          color: #1f1b2d;
          margin: 0 0 20px 14px;
        }
        .mat-discover ul {
          list-style: none;
          padding: 0;
          margin: 0 0 28px 14px;
        }
        .mat-discover li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          line-height: 1.4;
          margin-bottom: 12px;
        }
        .mat-discover li .bi {
          font-size: 14px;
        }
        .mat-discover-note {
          padding: 22px 20px;
          border-radius: 12px;
          background: #fff;
          font-size: 15px;
          line-height: 1.5;
          color: #85808f;
          margin: 0;
        }
        .mat-tool {
          scroll-margin-top: 90px;
        }
        .mat-tool > .ma {
          animation: mat-slide-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .mat-land {
          overflow: hidden;
        }
        .mat-land.is-leaving .mat-card {
          animation: mat-slide-out 0.45s cubic-bezier(0.55, 0, 0.75, 0.2) forwards;
        }
        .mat-cta:disabled {
          cursor: default;
        }
        @keyframes mat-slide-out {
          to {
            opacity: 0;
            transform: translateY(-80px);
          }
        }
        @keyframes mat-slide-in {
          from {
            opacity: 0;
            transform: translateY(60px);
          }
          to {
            opacity: 1;
            transform: none;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .mat-tool > .ma,
          .mat-land.is-leaving .mat-card {
            animation: none;
          }
        }
        .mat-faq {
          padding: 80px 0 100px;
        }

        @media (max-width: 1199px) {
          .mat-card {
            padding: 56px 44px 64px;
            gap: 40px;
          }
          .mat-copy h1 {
            font-size: 40px !important;
          }
        }
        @media (max-width: 991px) {
          .mat-card {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .mat-land {
            padding: 32px 0 48px;
          }
          .mat-card {
            padding: 36px 22px 40px;
            border-radius: 18px;
          }
          .mat-copy h1 {
            font-size: 32px !important;
          }
          .mat-lead,
          .mat-meta {
            font-size: 15px;
          }
          .mat-meta {
            gap: 8px 20px;
            margin: 28px 0;
          }
          .mat-cta {
            width: 100%;
            justify-content: center;
            height: 54px;
            font-size: 18px;
            padding: 0 20px;
          }
          .mat-note {
            margin-top: 20px;
          }
          .mat-discover {
            padding: 28px 16px 18px;
          }
          .mat-discover h2,
          .mat-discover ul {
            margin-left: 6px;
          }
        }
      `}</style>
    </>
  );
}

function FaqSection() {
  return (
    <section className="solution-faq faq solution-faq-r mat-faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head text-center">
              <h2>Frequently asked questions</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mar-top-7">
          <div className="col-lg-8">
            <div className="accordion accordion-flush" id="migration-faq">
              {FAQS.map((faq) => (
                <div className="accordion-item" key={faq.id}>
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#migration-faq-${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h3>
                  <div id={`migration-faq-${faq.id}`} className="accordion-collapse collapse" data-bs-parent="#migration-faq">
                    <div className="accordion-body" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// The catalog (options, weights, prices, copy) is fetched at build time and
// refreshed hourly. The API sleeps when idle and can take up to a minute to
// wake, so the fetch is capped; if it fails the page loads it in the browser.
export async function getStaticProps() {
  const base = (process.env.MIGRATION_API_URL || "https://blogdsusaapi.onrender.com/api").replace(/\/$/, "");
  let catalog = null;
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 25000);
    const res = await fetch(`${base}/public/migration/catalog`, { signal: controller.signal });
    clearTimeout(timer);
    if (res.ok) catalog = await res.json();
  } catch (e) {
    catalog = null;
  }
  return { props: { catalog }, revalidate: 3600 };
}
