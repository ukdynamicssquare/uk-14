import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import ResourceTabs from "../components/bcTwo/ResourceTabs";
import { bcVsFoResources } from "../components/bcTwo/legacyResources";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../components/bcTwo/FaqList";
import faqs from "../public/data/bcvsfinanceoperations.json";
import PageSeo from "../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/dynamics-365-business-central-vs-finance-operations/";
const PAGE_TITLE = "Business Central vs Finance & Operations: 2026 UK Comparison";
const PAGE_DESC = "Compare Dynamics 365 Business Central vs Finance & Operations on size, cost, deployment, AI and implementation time to choose the right Microsoft ERP.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/Dynamics-365-Business-Central-vs-Finance-Operations.png";

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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": [
        { "@id": PAGE_URL + "#business-central" },
        { "@id": PAGE_URL + "#finance-operations" }
      ],
      "mainEntity": { "@id": PAGE_URL + "#comparison" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 3, "name": "Business Central vs Finance & Operations", "item": PAGE_URL }
      ]
    },
    {
      "@type": "ItemList",
      "@id": PAGE_URL + "#comparison",
      "name": "Business Central vs Finance & Operations",
      "numberOfItems": 2,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": PAGE_URL + "#business-central" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": PAGE_URL + "#finance-operations" } }
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
      "description": "This AI-powered ERP from Microsoft caters to the growing needs of small and mid-sized companies. It serves as one connected platform for finance, sales, CRM, stock, project, and so on."
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#finance-operations",
      "name": "Microsoft Dynamics 365 Finance & Operations",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Web",
      "url": "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance-operations/",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "Dynamics 365 Finance & Operations or D365 F&O are two distinct applications now: Dynamics 365 Finance and Dynamics 365 Supply Chain Management. It is designed for companies with complex operations spread across multiple entities, geographical areas, and highly specialised operations."
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "numbers", label: "In Numbers" },
  { id: "comparison", label: "Full Comparison" },
  { id: "how-to-decide", label: "How to Decide" },
  { id: "how-we-help", label: "How We Help" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const comparisonRows = [
  { icon: "bi-people", factor: "Suitable for", bc: "Small to mid-sized companies", fo: "Medium to large, often multinational organisations" },
  { icon: "bi-diagram-3", factor: "Industry focus", bc: "Distribution, manufacturing, professional services, retail", fo: "Distribution, manufacturing, professional services, retail, public sector, at enterprise scale" },
  { icon: "bi-cloud-check", factor: "Deployment", bc: "Cloud (SaaS), with on-premises options available", fo: "Cloud, with hybrid options for complex environments" },
  {
    icon: "bi-receipt",
    factor: "Licensing and cost",
    bc: <>Simple <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">per-user, per-month subscription</Link>, generally the more affordable option</>,
    fo: "Priced per user based on the application and modules selected, generally a higher investment given its enterprise scope",
  },
  { icon: "bi-hourglass-split", factor: "Implementation timeline", bc: "A few weeks to a few months", fo: "Several months to over a year for complex, multi-entity rollouts" },
  {
    icon: "bi-stars",
    factor: "AI and Copilot",
    bc: <><Link href="/products/dynamics-365-copilot/" className="u-i">Copilot and AI agents</Link> included as standard, covering sales, purchasing, and expense processes</>,
    fo: "Copilot and AI agents included, with deeper automation for finance close, collections, and industry-specific supply chain processes",
  },
  {
    icon: "bi-bar-chart-line",
    factor: "Reporting and analytics",
    bc: <>Over 400 ready-made reports and 110+ <Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> dashboards</>,
    fo: "Embedded Power BI with deep, cross-entity financial and operational analytics",
  },
  { icon: "bi-sliders", factor: "Customisation depth", bc: "Configurable to most SMB requirements out of the box", fo: "Built for extensive customisation and integration across large, complex application landscapes" },
  { icon: "bi-graph-up-arrow", factor: "Scalability", bc: "Scales well for growing SMBs and lower mid-market businesses", fo: "Built to scale to enterprises with thousands of employees and complex multi-entity structures" },
];

const fitGroups = [
  {
    side: "bc",
    heading: "Choose Business Central If",
    items: [
      "You run a small or mid-sized business and need finance, sales, stock, and service in one system",
      "You want to be live and running within weeks or at max in couple of months",
      "You want a lower total cost of ownership and simpler licensing",
      "You trade from the UK or a handful of international markets",
      "You are moving off spreadsheets, an older accounting package, or Dynamics NAV",
    ],
  },
  {
    side: "sap",
    heading: "Choose Finance & Operations If",
    items: [
      "You run a large or multinational organisation with complex, multi-entity operations",
      "You need deep, industry-specific manufacturing or supply chain capability at real scale",
      "You operate across many countries with complex local tax and compliance requirements",
      "You need extensive customisation across a wide application landscape, with dedicated IT resource to support it",
      "Your finance team manages complex multi-currency, multi-entity consolidations every month",
    ],
  },
];

const relatedComparisons = [
  { href: "/dynamics-365-business-central-vs-sap-business-one/", title: "Business Central vs SAP Business One", icon: "bi-arrow-left-right" },
  { href: "/dynamics-nav-vs-business-central/", title: "Dynamics NAV vs Business Central", icon: "bi-arrow-repeat" },
  { href: "/why-choose-microsoft-dynamics-365-business-central/", title: "Why Choose Microsoft Dynamics 365 Business Central", icon: "bi-patch-check" },
  { href: "/products/dynamics-365-business-central/advantages-capabilities/", title: "Business Central Advantages & Capabilities", icon: "bi-grid" },
  { href: "/tools/top-erp-systems-comparison/", title: "Top ERP Systems Comparison", icon: "bi-trophy" },
];

const getVerdict = (bc, fo) => {
  if (bc > fo) return { tone: "bc", title: "Dynamics 365 Business Central" };
  if (fo > bc) return { tone: "sap", title: "Dynamics 365 Finance & Operations" };
  return { tone: bc === 0 ? "idle" : "tie", text: "The right selection will depend on your business requirements in terms of size, complexity of operations, and future plans." };
};

const BCvsFinanceOperationsTwo = () => {
  const { active, navTop } = useSectionNav(sections);
  const [picked, setPicked] = useState([]);

  const togglePick = (key) => {
    setPicked((prev) => (prev.includes(key) ? prev.filter((p) => p !== key) : [...prev, key]));
  };
  const bcScore = picked.filter((key) => key.startsWith("bc-")).length;
  const foScore = picked.length - bcScore;
  const bcShare = picked.length ? Math.round((bcScore / picked.length) * 100) : 50;
  const verdict = getVerdict(bcScore, foScore);

  const meter = (
    <>
      <div className={styles.meterLabels}>
        <span>Business Central <b>{bcScore}</b></span>
        <span><b>{foScore}</b> Finance & Operations</span>
      </div>
      <div className={styles.meter}>
        <div className={styles.meterBc} style={{ width: `${bcShare}%` }}></div>
        <div className={styles.meterSap} style={{ width: `${100 - bcShare}%` }}></div>
      </div>
    </>
  );

  return (
    <>
      <PageSeo
        type="Article"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Dynamics 365 Business Central vs Finance & Operations"
        extraSchema={pageSchema}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/dynamics-365-business-central/">Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Business Central vs Finance & Operations</span>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h1 className={styles.heroTitle}>
                Business Central <span className={styles.heroVs}>vs</span> Finance & Operations: Which One to Choose?
              </h1>
              <p className={styles.heroLead}>Dynamics 365 Business Central and Dynamics 365 Finance & Operations or D365 F&O are top agentic ERPs from Microsoft.</p>
              <p className={styles.heroLead}>But which one is for your business? Let’s find out together.</p>
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
              <div className={`${styles.contenderLogo} ${styles.iconLogo}`}>
                <Image src="/img/menu-icons/finance-operations-scalable-logo.svg" alt="Microsoft Dynamics 365 Finance & Operations" width={48} height={48} priority />
                <span><small>Dynamics 365</small><strong>Finance & Operations</strong></span>
              </div>
            </div>
          </div>

          <div className={styles.heroActions}>
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} />

      {/* ===== Overview: two ERP options, side by side ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Dynamics 365 suite has two popular ERP options for businesses:</h2>
          <div className={`row g-4 ${styles.profileRow} mt-0`}>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagBc}`}>Microsoft</span>
                <h3>Dynamics 365 Business Central</h3>
                <p>This AI-powered ERP from Microsoft caters to the growing needs of small and mid-sized companies. It serves as one connected platform for finance, sales, CRM, stock, project, and so on.</p>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagSap}`}>Microsoft</span>
                <h3>Dynamics 365 Finance & Operations</h3>
                <p>Dynamics 365 Finance & Operations or D365 F&O are two distinct applications now: <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/" className="u-i">Dynamics 365 Supply Chain Management</Link>. It is designed for companies with complex operations spread across multiple entities, geographical areas, and highly specialised operations.</p>
              </article>
            </div>
          </div>
          <div className={styles.callout}>
            <div className={styles.calloutStack}>
              <p>Coming from the same Microsoft Dynamics 365 family, both applications follow the same design principles and now include advanced AI capabilities like Microsoft Copilot and AI agents as standard, out of the box.</p>
              <p><strong>The right selection will depend on your business requirements in terms of size, complexity of operations, and future plans.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Numbers ===== */}
      <section id="numbers" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Business Central vs Finance & Operations in Numbers</h2>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoHero}`}>
              <i className="bi bi-buildings"></i>
              <span className={styles.bentoNum} aria-hidden="true">55,000+</span>
              <p><strong>55,000+</strong> companies across the world run Dynamics 365 Business Central, most of them small to mid-sized businesses</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-globe-europe-africa"></i>
              <span className={styles.bentoNum} aria-hidden="true">57</span>
              <p>Dynamics 365 Finance helps with regulatory compliance across <strong>57 countries and regions</strong>, in <strong>67 languages</strong>, designed for organisations with global, complex operations</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-translate"></i>
              <span className={styles.bentoNum} aria-hidden="true">157</span>
              <p>Business Central alone supports <strong>157 countries</strong> and <strong>50+ languages</strong>, enough for most growing UK businesses trading internationally</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <i className="bi bi-stars"></i>
              <div>
                <span className={styles.bentoWord} aria-hidden="true">AI</span>
                <p>These ERP platforms are AI-powered and offer built-in AI agents and Copilot, though Finance & Operations offers deeper, industry-specific automation for large-scale manufacturing and supply chain processes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Full comparison ===== */}
      <section id="comparison" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="text-center">
            <h2 className={`${styles.h2} mx-auto`}>Business Central vs Finance & Operations: Full Comparison</h2>
          </div>
          <div className={styles.board}>
            <div className={styles.boardHead}>
              <div className={styles.boardSideBc}>
                <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="" width={30} height={30} />
                Business Central
              </div>
              <div className={styles.boardMid}>Factor</div>
              <div className={styles.boardSideSap}>Finance & Operations</div>
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
                  <span className={styles.cellLabel}>Finance & Operations</span>
                  {row.fo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== How to decide (interactive) ===== */}
      <section id="how-to-decide" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-7">
              <h2 className={`${styles.h2} ${styles.h2Light}`}>Business Central Vs Finance Operations: How to Decide?</h2>
              <div className={styles.miniMeter} style={{ top: navTop + 56 }} aria-hidden="true">
                {meter}
                {picked.length > 0 && verdict.title && <p>{verdict.title}</p>}
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
                {meter}
                <div className={`${styles.verdict} ${styles["verdict_" + verdict.tone]}`}>
                  {verdict.title && <h3>{verdict.title}</h3>}
                  {verdict.text && <p>{verdict.text}</p>}
                </div>
                <Link href="#exampleModal" data-bs-toggle="modal" className={`btn-get-started scrollto ${styles.resultBtn}`}>
                  <span>Talk to a Dynamics Square Consultant &nbsp;<i className="bi bi-arrow-right"></i></span>
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
            <div className={`col-lg-8 ${styles.helpText}`}>
              <h2 className={styles.h2}>How Dynamics Square Helps You Decide</h2>
              <p>Dynamics Square believes the right technology can change everything, and thus it is on us to ensure you land on the system that fits how you work.</p>
              <p>As a Microsoft Solutions Partner in the UK, we implement and support both Business Central and Finance & Operations, so we recommend whichever platform genuinely fits your business. We start by understanding your size, complexity, and growth plans, then point you towards the platform that fits today and gives you room to grow.</p>
              <p>If Business Central looks like the right fit, our <Link href="/guides/business-central-guide-for-smb/" className="u-i">SMB guide to Business Central</Link> is a good next read, along with the full <Link href="/dynamics-365-business-central-features/" className="u-i">list of Business Central features</Link> and its <Link href="/products/dynamics-365-business-central/advantages-capabilities/" className="u-i">advantages and capabilities</Link>. If you are currently on Dynamics NAV, see how Business Central compares on our Dynamics <Link href="/dynamics-nav-vs-business-central/" className="u-i">NAV vs Business Central</Link> page.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Talk to a Dynamics Square Consultant &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <Image src="/img/microsoft-partner-footer.png" alt="Microsoft Solutions Partner for Business Applications" width={180} height={165} className={styles.partnerBadge} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                <div className={styles.faqCtaCard}>
                  <p>But which one is for your business? Let’s find out together.</p>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Schedule a Free Call Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Resources ===== */}
      <ResourceTabs
        title="Get Started with Microsoft Dynamics 365 ERP"
        intro="Case studies, e-books, podcasts, videos and blogs to help you choose between Business Central and Finance & Operations."
        tabs={bcVsFoResources}
      />

      {/* ===== Final CTA ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Still Not Sure? Let Us Help You!</h2>
              <p>Talk to a Dynamics Square consultant about which Microsoft ERP system fits your business operations, with no obligation.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Request a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Related (internal links) ===== */}
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

export default BCvsFinanceOperationsTwo;
