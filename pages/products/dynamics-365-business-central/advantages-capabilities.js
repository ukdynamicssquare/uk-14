import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/bcVsSapTwo.module.css";
import ResourceTabs from "../../../components/bcTwo/ResourceTabs";
import { bcAdvantagesResources } from "../../../components/bcTwo/legacyResources";
import SectionNav, { useSectionNav } from "../../../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../../../components/bcTwo/FaqList";
import faqs from "../../../public/data/bcadvantagescapabilities.json";
import PageSeo from "../../../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/advantages-capabilities/";
const PAGE_TITLE = "Business Central Advantages & Capabilities | Dynamics Square UK";
const PAGE_DESC = "Explore Dynamics 365 Business Central advantages and core capabilities: finance, supply chain, manufacturing, reporting, Copilot AI agents and security.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/advantage-capbilty.png";

const advantages = [
  { icon: "bi-collection", title: "Everything in one place", text: "Finance, sales, stock, service, and projects all live in the same system. When one team updates a record, everyone else sees it straight away, so figures always match and nobody is working from an old spreadsheet." },
  { icon: "bi-bar-chart-line", title: "Decisions backed by real numbers", text: <>With hundreds of ready-made reports and <Link href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</Link> built in, you get a clear view of how the business is performing without having to wait for a report from finance.</> },
  { icon: "bi-robot", title: "Less manual admin", text: "Built-in AI agents handle repetitive jobs such as matching bank transactions, chasing supplier invoices, and turning emails into sales orders, freeing up your team for work that actually needs a person." },
  { icon: "bi-wallet2", title: "Predictable running costs", text: <>Business Central is <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">priced per user, per month</Link>, so you know what you are paying for and can plan your budget with confidence.</> },
  { icon: "bi-graph-up-arrow", title: "Room to grow", text: "You can add users, add functionality, and move into new markets without swapping to a different system. Multiple currencies, languages, and country-specific tax rules are built in from the start." },
  { icon: "bi-shield-lock", title: "Backed by Microsoft's security", text: "Your data sits on Microsoft Azure, protected by the same standards Microsoft uses to secure its own cloud services, with role-based access so people only see what is relevant to their job." },
];

const capabilities = [
  { icon: "bi-calculator", title: "Finance and accounting", text: <>A full <Link href="/products/dynamics-365-business-central/financial-management/" className="u-i">general ledger</Link>, accounts payable and receivable, VAT and tax management, multiple currencies, and automated e-invoicing. Cash flow forecasting uses Azure AI to help predict how your finances will look in the weeks ahead, and Copilot assists with matching bank transactions during reconciliation.</> },
  { icon: "bi-box-seam", title: "Supply chain and inventory", text: <>Manage purchasing, stock levels, and <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">warehouse operations</Link>, including picking, put-away, and bin replenishment. Planning tools help you work out what to order and when, based on demand and available stock.</> },
  { icon: "bi-gear-wide-connected", title: "Manufacturing", text: <>Bills of materials, capacity planning, and production orders help manufacturers plan and cost their output accurately, including material, labour, and overhead costs. Our dedicated <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">manufacturing management page</Link> covers this in more depth.</> },
  { icon: "bi-people", title: "Sales and customer relationships", text: <>Manage <Link href="/products/dynamics-365-business-central/sales-order-management/" className="u-i">quotes, orders, and customer records</Link> in one place, with a clear view of order history and pricing. Business Central connects directly with Outlook, so your sales team can check customer details without leaving their inbox.</> },
  { icon: "bi-kanban", title: "Project management", text: <>Track <Link href="/products/dynamics-365-business-central/project-management/" className="u-i">job costs</Link>, resources, and timelines on any project, with the ability to compare budgeted costs against actual spend as the work progresses.</> },
  { icon: "bi-tools", title: "Service management", text: <>Manage <Link href="/products/dynamics-365-business-central/service-management/" className="u-i">service orders, contracts, and dispatching</Link>, so your team can plan and deliver after-sales support without losing track of jobs.</> },
  { icon: "bi-pie-chart", title: "Reporting and business intelligence", text: <>Over 400 ready-made reports and 110+ <Link href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</Link> come as standard, alongside Excel integration for teams who prefer to work with figures there. You can also build your own reports without any coding.</> },
  { icon: "bi-stars", title: "AI and Copilot", text: <><Link href="/products/dynamics-365-copilot/" className="u-i">AI agents</Link> carry out everyday tasks on their own, including a Sales Order Agent that turns incoming emails into orders and a Payables Agent that captures and routes supplier invoices for approval.</> },
  { icon: "bi-shield-check", title: "Security and compliance", text: <>Data is hosted on <Link href="/products/microsoft-azure/" className="u-i">Microsoft Azure</Link>, with multi-factor authentication, encryption, and role-based permissions. Country-specific tax, VAT, and e-invoicing rules are built in, so compliance travels with you as you expand.</> },
  { icon: "bi-plug", title: "Customisation and integration", text: <>Extend Business Central through Microsoft AppSource, the <Link href="/products/microsoft-power-platform/" className="u-i">Power Platform</Link>, and open APIs, so it connects with other systems your business already relies on. Built-in migration tools help bring your data across from <Link href="/dynamics-nav-to-business-central/" className="u-i">Dynamics NAV</Link>, spreadsheets, or other accounting systems.</> },
];

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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 705, "height": 529 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": { "@id": PAGE_URL + "#business-central" },
      "mainEntity": { "@id": PAGE_URL + "#business-central" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.dynamicssquare.co.uk/products/" },
        { "@type": "ListItem", "position": 3, "name": "Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 4, "name": "Advantages & Capabilities", "item": PAGE_URL }
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
      "description": "Dynamics 365 Business Central is an AI-powered ERP with powerful finance, supply chain, manufacturing, and reporting capabilities, all into one, centralized platform.",
      "featureList": capabilities.map((c) => c.title)
    },
    {
      "@type": "ItemList",
      "name": "Key Advantages of Business Central",
      "numberOfItems": advantages.length,
      "itemListElement": advantages.map((a, i) => ({ "@type": "ListItem", "position": i + 1, "name": a.title }))
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "popular", label: "Why Popular" },
  { id: "numbers", label: "Why Choose" },
  { id: "advantages", label: "Key Advantages" },
  { id: "capabilities", label: "Core Capabilities" },
  { id: "impact", label: "Impact" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const relatedPages = [
  { href: "/dynamics-365-business-central-features/", title: "Business Central Features", icon: "bi-list-check" },
  { href: "/products/dynamics-365-business-central/pricing-licensing/", title: "Business Central Pricing & Licensing", icon: "bi-receipt" },
  { href: "/why-choose-microsoft-dynamics-365-business-central/", title: "Why Choose Microsoft Dynamics 365 Business Central", icon: "bi-patch-check" },
  { href: "/dynamics-nav-vs-business-central/", title: "Dynamics NAV vs Business Central", icon: "bi-arrow-repeat" },
  { href: "/dynamics-365-business-central-vs-finance-operations/", title: "Business Central vs Finance & Operations", icon: "bi-arrow-left-right" },
];

const BCAdvantagesTwo = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="WebPage"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Dynamics 365 Business Central advantages and capabilities"
        extraSchema={pageSchema}
      >
        <meta property="og:image:width" content="705" />
        <meta property="og:image:height" content="529" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/dynamics-365-business-central/">Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Advantages & Capabilities</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Dynamics 365 Business Central Advantages & Capabilities</h1>
              <p className={styles.heroLead}>Dynamics 365 Business Central is an AI-powered ERP with powerful finance, supply chain, manufacturing, and reporting capabilities, all into one, centralized platform.</p>
              <p className={styles.heroLead}>Since over 55,000 companies have deployed Dynamics 365 Business Central advantages and capabilities are worth knowing from a business standpoint.</p>
              <p className={styles.heroSub}>Learn from the experts!</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <Image src="/img/advantage-capbilty.png" alt="Dynamics 365 Business Central dashboard on a tablet showing sales performance" width={705} height={529} priority sizes="(max-width: 991px) 100vw, 560px" style={{ width: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} />

      {/* ===== Why popular ===== */}
      <section id="popular" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why Business Central is Popular Among Businesses?</h2>
              <p className={styles.lead}>Business Central gives a growing business the finance, supply chain, manufacturing, and reporting capabilities that used to be reserved for big companies, all in one connected system.</p>
              <p>It means, every team, accounts, stock, and sales included, works from the same live data. This cloud-based ERP covers the core of what most businesses need, and lets you add more as you grow, whether that is manufacturing, service management, or project costing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why will a business choose (numbers) ===== */}
      <section id="numbers" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Why Will a Business Choose Dynamics 365 Business Central?</h2>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoHero}`}>
              <i className="bi bi-buildings"></i>
              <span className={styles.bentoNum} aria-hidden="true">55,000</span>
              <p><strong>55,000 companies</strong> worldwide manage their operations on Business Central</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-bar-chart-line"></i>
              <span className={styles.bentoNum} aria-hidden="true">400</span>
              <p>Business Central has over <strong>400 ready-made reports</strong> and more than <strong>110 Power BI dashboards</strong>, so you get answers without building anything from scratch</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-translate"></i>
              <span className={styles.bentoNum} aria-hidden="true">157</span>
              <p>According to Microsoft, Business Central is designed to work in <strong>157 countries</strong> and <strong>50+ languages</strong>, so it grows alongside a business trading further afield</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <i className="bi bi-stars"></i>
              <div>
                <span className={styles.bentoWord} aria-hidden="true">Copilot</span>
                <p>Microsoft Copilot and AI agents like Expense Agent, Sales Order Agent, and Payables Agent come built in, helping with tasks like bank reconciliation, cash flow forecasting, and sales order processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Key advantages ===== */}
      <section id="advantages" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Key Advantages of Business Central</h2>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {advantages.map((a) => (
              <article className={styles.reasonCard} key={a.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${a.icon}`}></i></span>
                  <h3>{a.title}</h3>
                </div>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Core capabilities ===== */}
      <section id="capabilities" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Dynamics 365 Business Central Core Capabilities</h2>
          <div className={styles.capGrid}>
            {capabilities.map((c) => (
              <article className={styles.capCard} key={c.title}>
                <i className={`bi ${c.icon}`}></i>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Impact (case studies) ===== */}
      <section id="impact" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Business Central’s Impact on Businesses</h2>
          <div className={`row g-4 ${styles.caseGrid}`}>
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/implement-for-equestrian.jpg" alt="UK manufacturer automated finance and approvals with Business Central and CRM" width={850} height={410} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className={`md-case-card__body ${styles.caseBody}`}>
                  <p>A prominent UK manufacturer went with Business Central as suggested by Dynamics Square to automate their finance and approval workflows to replace manual reporting. The solution helped them achieve multi-entity consolidation to bring its UK and international operations together, and a new CRM gave the sales team real visibility into customers for the first time.</p>
                  <div className="md-case-card__result">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p>The result was a projected 162% return on investment and the equivalent of 1.5 fewer full-time hires in finance and operations.</p>
                  </div>
                  <p>Read the <Link href="/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/" className="md-case-card__link">full case study <i className="bi bi-arrow-right"></i></Link></p>
                </div>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/old-mill-feature.jpg" alt="Northern Ireland retail and warehouse business automated document capture and warehouse management" width={851} height={410} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className={`md-case-card__body ${styles.caseBody}`}>
                  <p>A Northern Ireland retail and warehouse business leaned on a different set of capabilities, automated document capture for supplier paperwork, barcode-driven warehouse management, and automated daily sales reporting by category and vendor.</p>
                  <div className="md-case-card__result">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p>The result was faster vendor processing and far more reliable, same-day reporting.</p>
                  </div>
                  <p>Read the <Link href="/case-studies/business-central-reimplementation-for-retail-market/" className="md-case-card__link">full case study <i className="bi bi-arrow-right"></i></Link></p>
                </div>
              </article>
            </div>
          </div>
          <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Different businesses lean on different parts of Business Central, but more or less the objective remains the same: less time spent chasing information, and more time spent acting on it.</p>
        </div>
      </section>

      {/* ===== How we help ===== */}
      <section id="how-we-help" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className={`col-lg-8 ${styles.helpText}`}>
              <h2 className={styles.h2}>How Dynamics Square Helps You Use These Business Central Capabilities</h2>
              <p>A long capability list means nothing if it is not correctly mapped onto your actual workflows. That mapping is where the real value shows up and that is where Dynamics Square has expertise.</p>
              <p>Our UK team holds Microsoft Solutions Partner status and has taken businesses, including manufacturers, distributors, retailers, and professional services firms, live on Business Central, then supported them long after go-live.</p>
              <p>We prioritise the capabilities that matter most for your operations, so your budget goes toward what your team will genuinely use.</p>
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
      <section id="faqs" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                <div className={styles.faqCtaCard}>
                  <Image src="/img/advantage-capbilty.png" alt="Dynamics 365 Business Central capabilities" width={705} height={529} sizes="(max-width: 991px) 100vw, 360px" />
                  <p>Learn from the experts!</p>
                  <Link href="/contact-us/" className="btn-get-started scrollto">
                    <span>Connect with Us to Learn More &nbsp;<i className="bi bi-arrow-right"></i></span>
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
        title="Get Started with Microsoft Dynamics 365 Business Central"
        intro="Case studies, e-books, podcasts and blogs to help you explore Business Central."
        tabs={bcAdvantagesResources}
      />

      {/* ===== Final CTA ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Ready to See These Capabilities in Action?</h2>
              <p>Talk to a Dynamics Square consultant about how Business Central&apos;s capabilities could work for your business, with no obligation.</p>
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
            {relatedPages.map((item) => (
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

export default BCAdvantagesTwo;
