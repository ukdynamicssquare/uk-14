import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import faqContent from "../public/data/bcvssapbusinessone.json";

const PAGE_URL = "https://www.dynamicssquare.co.uk/dynamics-365-business-central-vs-sap-business-one/";
const PAGE_TITLE = "Business Central vs SAP Business One: 2026 UK ERP Comparison";
const PAGE_DESC = "Compare Dynamics 365 Business Central vs SAP Business One on deployment, pricing, AI, Microsoft 365 integration and implementation time to pick the right ERP.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/bc-vs-sap.png";

const { faqsMore } = faqContent;

const toFaqEntity = (faq) => ({
  "@type": "Question",
  "name": faq.question.replace(/^\d+\.\s*/, ""),
  "acceptedAnswer": {
    "@type": "Answer",
    "text": faq.answer.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
  },
});

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      "url": PAGE_URL,
      "name": PAGE_TITLE,
      "description": PAGE_DESC,
      "inLanguage": "en-GB",
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 602, "height": 315 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": [
        { "@id": PAGE_URL + "#business-central" },
        { "@id": PAGE_URL + "#sap-business-one" }
      ],
      "mainEntity": { "@id": PAGE_URL + "#comparison" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 3, "name": "Business Central vs SAP Business One", "item": PAGE_URL }
      ]
    },
    {
      "@type": "ItemList",
      "@id": PAGE_URL + "#comparison",
      "name": "Business Central vs SAP Business One",
      "numberOfItems": 2,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": PAGE_URL + "#business-central" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": PAGE_URL + "#sap-business-one" } }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#business-central",
      "name": "Microsoft Dynamics 365 Business Central",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Web, Windows, iOS, Android",
      "url": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "Business Central is a cloud-native ERP from Microsoft, which is designed to work and communicate closely with the Microsoft 365 tools that most UK businesses already use. It comes with Copilot and AI agents as standard."
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#sap-business-one",
      "name": "SAP Business One",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Windows, Linux",
      "author": { "@type": "Organization", "name": "SAP SE" },
      "description": "It is designed to run on the SAP HANA or Microsoft SQL Server database. It is available with both on-premises and in the cloud options, with a formidable track record in manufacturing and distribution."
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqsMore.map(toFaqEntity),
    },
  ],
};

const sections = [
  { id: "overview", label: "Difference" },
  { id: "numbers", label: "In Numbers" },
  { id: "comparison", label: "Full Comparison" },
  { id: "fit-finder", label: "How to Decide" },
  { id: "how-we-help", label: "How We Help" },
  { id: "faqs", label: "FAQs" },
];

// Taken word for word from the opening sentence of the section
const keyDifferences = [
  { icon: "bi-boxes", title: "Architecture" },
  { icon: "bi-cloud-arrow-up", title: "Cloud readiness" },
  { icon: "bi-stars", title: "AI capabilities" },
  { icon: "bi-diagram-2", title: "Ecosystem integration" },
];

const comparisonRows = [
  {
    icon: "bi-people",
    factor: "Recommended for",
    bc: "Small to mid-sized businesses, especially those already using Microsoft 365",
    sap: "Small to mid-sized businesses, especially in manufacturing and distribution",
  },
  {
    icon: "bi-cloud-check",
    factor: "Deployment",
    bc: "Cloud-native SaaS, with on-premises options available",
    sap: "On-premises, cloud, or hybrid, running on SAP HANA or Microsoft SQL Server",
  },
  {
    icon: "bi-receipt",
    factor: "Licensing and cost",
    bc: <>Simple <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">per-user, per-month subscription</Link></>,
    sap: "Subscription or perpetual licence, priced by user tier (such as Starter, Limited, and Professional) and modules chosen",
  },
  {
    icon: "bi-stars",
    factor: "AI and automation",
    bc: <><Link href="/products/dynamics-365-copilot/" className="u-i">Microsoft Copilot</Link> and AI agents included as standard</>,
    sap: "Analytics and reporting tools available, with AI capabilities added through SAP's wider Business AI offering",
  },
  {
    icon: "bi-bar-chart-line",
    factor: "Reporting and analytics",
    bc: <>Over 400 ready-made reports and 110+ <Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> dashboards</>,
    sap: "Built-in reporting plus Crystal Reports integration, with Power BI and Tableau connections available",
  },
  {
    icon: "bi-microsoft",
    factor: "Microsoft 365 integration",
    bc: "Deep, native integration with Outlook, Excel, and Teams",
    sap: "Integration available through connectors and add-ons",
  },
  {
    icon: "bi-diagram-3",
    factor: "Industry depth",
    bc: "Strong core coverage across distribution, manufacturing, professional services, and retail",
    sap: "Established industry-specific versions for manufacturing, retail, wholesale distribution, and professional services",
  },
  {
    icon: "bi-hourglass-split",
    factor: "Implementation timeline",
    bc: <>Can take a few weeks to a few months</>,
    sap: "Can take a few months, depending on configuration and modules",
  },
];

const fitGroups = [
  {
    side: "bc",
    heading: "Business Central makes sense, if:",
    items: [
      "Your team already works in Outlook, Excel, and Teams, and you want your ERP to fit straight in",
      "You want AI and Copilot built in from day one as standard",
      "You want simple, predictable subscription pricing",
      "You are moving off Dynamics NAV, an older accounting package, or spreadsheets",
      "You want a cloud-first system that is quick to stand up and easy to scale",
    ],
  },
  {
    side: "sap",
    heading: "SAP Business One is suitable, if:",
    items: [
      "You want the choice of an on-premises deployment with a perpetual licence",
      "Your business already runs other SAP products, and you want a closer fit within that ecosystem",
      "You need deep, industry-specific manufacturing configuration out of the box",
      "Your IT team is comfortable managing a SAP HANA or SQL Server environment",
      "You value SAP's long track record in the manufacturing and distribution space",
    ],
  },
];

// The doc's sentence, split at its comma into the two stages it describes
const helpSteps = [
  { icon: "bi-search", text: "We begin with learning about your current system setups, industry, and growth plans," },
  { icon: "bi-display", text: "then show you what a Business Central setup would look like for your business operations." },
];

const relatedComparisons = [
  { href: "/dynamics-365-business-central-vs-netsuite/", title: "Business Central vs NetSuite", icon: "bi-arrow-left-right" },
  { href: "/d365-business-central-vs-d365-finance/", title: "Business Central vs Dynamics 365 Finance", icon: "bi-graph-up" },
  { href: "/dynamics-nav-vs-business-central/", title: "Dynamics NAV vs Business Central", icon: "bi-arrow-repeat" },
  { href: "/dynamics-365-finance-operations-vs-sap-erp/", title: "Finance & Operations vs SAP ERP", icon: "bi-building" },
  { href: "/top-erp-systems-comparison/", title: "Top ERP Systems Comparison", icon: "bi-trophy" },
];

// Verdict wording reuses the doc's own headings and sentences
const getVerdict = (bc, sap) => {
  if (bc > sap) return { tone: "bc", title: "Business Central makes sense" };
  if (sap > bc) return { tone: "sap", title: "SAP Business One is suitable" };
  return {
    tone: bc === 0 ? "idle" : "tie",
    title: "Neither system is a bad choice.",
    text: "The right one depends on your existing technology setup, your industry, and how your business wants to run day to day.",
  };
};

const FaqList = ({ items }) => {
  const [openFaq, setOpenFaq] = useState(items[0].id);
  const [visibleCount, setVisibleCount] = useState(5);
  return (
    <>
    <div className={styles.faqList}>
      {items.map((faq, i) => {
        const open = openFaq === faq.id;
        // Items past visibleCount stay in the HTML (hidden) so every answer is crawlable
        return (
          <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}${i < visibleCount ? "" : " d-none"}`} key={faq.id}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={`faq2-${faq.id}`}
                onClick={() => setOpenFaq(open ? null : faq.id)}
              >
                <span>{faq.question}</span>
                <i className="bi bi-plus-lg"></i>
              </button>
            </h3>
            <div id={`faq2-${faq.id}`} className={styles.faqPanel} role="region">
              <div className={styles.faqPanelInner}>
                <div className={styles.faqBody} dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
    {visibleCount < items.length && (
      <div className="text-center mt-4">
        <button className="btn faq-btn-l btn-get-started" onClick={() => setVisibleCount((prev) => prev + 3)}>
          Load More <i className="bi bi-chevron-down"></i>
        </button>
      </div>
    )}
    </>
  );
};

const BCvsSapTwo = () => {
  const [active, setActive] = useState(sections[0].id);
  const [navTop, setNavTop] = useState(0);
  const [picked, setPicked] = useState([]);

  // Keep the section nav pinned just under the site header (which only
  // becomes fixed after scrolling) and highlight the section in view.
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const header = document.getElementById("header");
      const bottom = header && header.classList.contains("fixed-top") ? header.getBoundingClientRect().bottom : 0;
      setNavTop(Math.max(0, Math.round(bottom)));

      const offset = window.innerHeight * 0.35;
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top - offset <= 0) current = id;
      });
      setActive(current);
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // picked holds keys like "bc-0" / "sap-3"
  const togglePick = (key) => {
    setPicked((prev) => (prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]));
  };

  const bcScore = picked.filter((key) => key.startsWith("bc-")).length;
  const sapScore = picked.length - bcScore;
  const bcShare = picked.length ? Math.round((bcScore / picked.length) * 100) : 50;
  const verdict = getVerdict(bcScore, sapScore);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        {/* Demo URL: remove noindex when this page replaces the live one */}
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="602" />
        <meta property="og:image:height" content="315" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Dynamics 365 Business Central vs SAP Business One" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/dynamics-365-business-central/">Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Business Central vs SAP Business One</span>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h1 className={styles.heroTitle}>
                Business Central <span className={styles.heroVs}>vs</span> SAP Business One
              </h1>
              <p className={styles.heroLead}>An ERP shapes how your business runs for years. Microsoft Dynamics 365 Business Central and SAP Business One are two popular choices for growing businesses.</p>
              <p className={styles.heroLead}>Find out which one gives your growing business the edge it needs.</p>
            </div>
          </div>

          <div className={styles.versus}>
            <div className={styles.contender}>
              <div className={styles.contenderLogo}>
                <Image src="/img/businescentrallogo.png" alt="Microsoft Dynamics 365 Business Central" width={268} height={66} priority />
              </div>
            </div>
            <div className={styles.vsBadge} aria-hidden="true">VS</div>
            <div className={styles.contender}>
              <div className={styles.contenderLogo}>
                <Image src="/img/saplogo.png" alt="SAP Business One" width={198} height={59} priority />
              </div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
          <p className={styles.heroNote}>Dynamics Square helps you pick the right solution after analysing your day-to-day operations, so you have a solution you can count on for your growth and future plans.</p>
        </div>
      </section>

      {/* ===== Sticky section nav ===== */}
      <nav className={styles.sectionNav} style={{ top: navTop }} aria-label="On this page">
        <div className="container">
          <div className={styles.sectionNavInner}>
            <ul>
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? styles.navActive : undefined} aria-current={active === s.id ? "true" : undefined}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.navCta}>
              Book a Free Consultation <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </nav>

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-6">
              <h2 className={styles.h2}>What is the Difference Between Business Central and SAP Business One?</h2>
              <p className={styles.lead}>Business Central and SAP Business One differ to each other in terms of architecture, cloud readiness, AI capabilities, and most importantly, ecosystem integration.</p>
              <p><Link href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</Link> is an affordable, cloud-first, AI-powered ERP for small and mid-sized businesses, while SAP Business One is a conventional ERP that comes with solid, in-depth features for light and advanced manufacturing.</p>
              <p>Both ERP platforms do the same job. They bring finance, sales, CRM, purchasing, inventory, and reporting into one platform for small and mid-sized firms.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.diffGrid}>
                {keyDifferences.map((d) => (
                  <div className={styles.diffTile} key={d.title}>
                    <i className={`bi ${d.icon}`}></i>
                    <h3>{d.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`row g-4 ${styles.profileRow}`}>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagBc}`}>Microsoft</span>
                <h3>Business Central</h3>
                <p>Business Central is a cloud-native ERP from Microsoft, which is designed to work and communicate closely with the <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">Microsoft 365 tools</Link> that most UK businesses already use. It comes with Copilot and AI agents as standard. It is highly adaptable and flexible to be worked effectively for various industries.</p>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagSap}`}>SAP SE</span>
                <h3>SAP Business One</h3>
                <p>SAP Business One belong to the SAP SE company and is an SME product. It is designed to run on the SAP HANA or Microsoft SQL Server database. It is available with both on-premises and in the cloud options, with a formidable track record in manufacturing and distribution.</p>
              </article>
            </div>
          </div>

          <div className={styles.callout}>
            <p><strong>Neither system is a bad choice.</strong> The right one depends on your existing technology setup, your industry, and how your business wants to run day to day.</p>
            <Link href="/contact-us/" className={styles.calloutLink}>
              Connect with Our Experts to Learn More <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Numbers (bento) ===== */}
      <section id="numbers" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Business Central vs SAP Business One in Numbers</h2>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoHero}`}>
              <i className="bi bi-buildings"></i>
              <span className={styles.bentoNum} aria-hidden="true">55,000+</span>
              <p>55,000+ companies place their trust on Business Central and it supports 157 countries and 50+ languages</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-translate"></i>
              <span className={styles.bentoNum} aria-hidden="true">50</span>
              <p>SAP Business One is available in around 50 country-specific versions and 28 languages, with a long history dating back to 2002</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-cloud-arrow-up"></i>
              <span className={styles.bentoWord} aria-hidden="true">Cloud-native</span>
              <p>Business Central is cloud-native by design, while SAP Business One can run on-premises, in the cloud, or as a hybrid setup</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <i className="bi bi-stars"></i>
              <div>
                <span className={styles.bentoWord} aria-hidden="true">Copilot</span>
                <p>Business Central includes <Link href="/products/dynamics-365-copilot/" className="u-i">Microsoft Copilot</Link> and AI agents as standard, covering sales, purchasing, and expense tasks out of the box</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Head-to-head comparison ===== */}
      <section id="comparison" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="text-center">
            <h2 className={`${styles.h2} mx-auto`}>Business Central vs SAP Business One: Full Comparison</h2>
          </div>
          <div className={styles.board}>
            <div className={styles.boardHead}>
              <div className={styles.boardSideBc}>
                <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="" width={30} height={30} />
                Business Central
              </div>
              <div className={styles.boardMid}>Factor</div>
              <div className={styles.boardSideSap}>SAP Business One</div>
            </div>
            {comparisonRows.map((row) => (
              <div className={styles.boardRow} key={row.factor}>
                <div className={`${styles.boardCell} ${styles.boardCellBc}`}>
                  <span className={styles.cellLabel}>Business Central</span>
                  {row.bc}
                </div>
                <div className={styles.boardFactor}>
                  <i className={`bi ${row.icon}`}></i>
                  <span>{row.factor}</span>
                </div>
                <div className={`${styles.boardCell} ${styles.boardCellSap}`}>
                  <span className={styles.cellLabel}>SAP Business One</span>
                  {row.sap}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Fit finder ===== */}
      <section id="fit-finder" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-7">
              <h2 className={`${styles.h2} ${styles.h2Light}`}>How to Decide Between Business Central and SAP Business One</h2>
              <div className={styles.miniMeter} style={{ top: navTop + 56 }} aria-hidden="true">
                <div className={styles.meterLabels}>
                  <span>Business Central <b>{bcScore}</b></span>
                  <span><b>{sapScore}</b> SAP Business One</span>
                </div>
                <div className={styles.meter}>
                  <div className={styles.meterBc} style={{ width: `${bcShare}%` }}></div>
                  <div className={styles.meterSap} style={{ width: `${100 - bcShare}%` }}></div>
                </div>
                {picked.length > 0 && <p>{verdict.title}</p>}
              </div>
              {fitGroups.map((group) => (
                <div className={styles.chipGroup} key={group.side}>
                  <h3 className={styles.chipHeading}>{group.heading}</h3>
                  <div className={styles.chips}>
                    {group.items.map((text, i) => {
                      const key = `${group.side}-${i}`;
                      const on = picked.includes(key);
                      return (
                        <button
                          type="button"
                          key={key}
                          aria-pressed={on}
                          onClick={() => togglePick(key)}
                          className={`${styles.chip} ${on ? (group.side === "bc" ? styles.chipBc : styles.chipSap) : ""}`}
                        >
                          <i className={`bi ${on ? "bi-check-circle-fill" : "bi-plus-circle"}`}></i>
                          <span>{text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-5">
              <div className={styles.result} aria-live="polite">
                <div className={styles.meterLabels}>
                  <span>Business Central <b>{bcScore}</b></span>
                  <span><b>{sapScore}</b> SAP Business One</span>
                </div>
                <div className={styles.meter}>
                  <div className={styles.meterBc} style={{ width: `${bcShare}%` }}></div>
                  <div className={styles.meterSap} style={{ width: `${100 - bcShare}%` }}></div>
                </div>
                <div className={`${styles.verdict} ${styles["verdict_" + verdict.tone]}`}>
                  <h3>{verdict.title}</h3>
                  {verdict.text && <p>{verdict.text}</p>}
                </div>
                <Link href="#exampleModal" data-bs-toggle="modal" className={`btn-get-started scrollto ${styles.resultBtn}`}>
                  <span>Talk to Our Solutions Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
                {picked.length > 0 && (
                  <button type="button" className={styles.resetBtn} onClick={() => setPicked([])} aria-label="Clear selections">
                    <i className="bi bi-arrow-counterclockwise"></i>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== How we help ===== */}
      <section id="how-we-help" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-8">
              <h2 className={styles.h2}>How Dynamics Square Helps You Decide</h2>
              <p>A business transforms and thrives when it has the right technology to manage its operations and Dynamics Square helps you work out which platform actually suits your business.</p>
              <p>We are one of the trusted Microsoft Solutions Partner in the UK and specialise in <Link href="/dynamics-365-business-central-implementation/" className="u-i">Dynamics 365 Business Central</Link>. We give you a clear, honest picture of where it fits well and where another system might suit you better, so you can make the call with confidence.</p>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner for Business Applications"
                width={180}
                height={165}
                className={styles.partnerBadge}
              />
            </div>
          </div>
          <ol className={`${styles.steps} ${styles.stepsTwo}`}>
            {helpSteps.map((step) => (
              <li key={step.text} className={styles.step}>
                <span className={styles.stepDot}><i className={`bi ${step.icon}`}></i></span>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="text-center">
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Talk to Our Solutions Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Ready to compare ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Ready to Compare Your Options?</h2>
              <p>Talk to a Dynamics Square consultant about whether Business Central is the right fit for your business, with no obligation.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Request a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Frequently Asked Questions ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                <div className={styles.faqCtaCard}>
                  <Image
                    src="/img/bc-vs-sap.png"
                    alt="Microsoft Dynamics 365 Business Central versus SAP Business One"
                    width={602}
                    height={315}
                    sizes="(max-width: 991px) 100vw, 360px"
                  />
                  <p>Dynamics Square helps you pick the right solution after analysing your day-to-day operations, so you have a solution you can count on for your growth and future plans.</p>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Talk to Our Solutions Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={faqsMore} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related comparisons (internal links) ===== */}
      <section className={styles.related}>
        <div className="container">
          <div className={styles.relatedRail}>
            {relatedComparisons.map((item) => (
              <Link href={item.href} className={styles.relatedCard} key={item.href}>
                <i className={`bi ${item.icon}`}></i>
                <span>{item.title}</span>
                <i className={`bi bi-arrow-right ${styles.relatedArrow}`}></i>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BCvsSapTwo;
