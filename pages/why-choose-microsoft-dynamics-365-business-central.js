import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../components/bcTwo/FaqList";
import faqs from "../public/data/whychoosebusinesscentral.json";

const PAGE_URL = "https://www.dynamicssquare.co.uk/why-choose-microsoft-dynamics-365-business-central/";
const PAGE_TITLE = "Why Choose Microsoft Dynamics 365 Business Central? | Dynamics Square UK";
const PAGE_DESC = "Discover why 55,000+ companies choose Microsoft Dynamics 365 Business Central: one connected system, built-in AI, trusted reporting and predictable pricing.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/Dynamics-365-Business-Central.png";

const processes = [
  { icon: "bi-calculator", text: "Finance and accounting" },
  { icon: "bi-cart-check", text: "Sales and customer orders" },
  { icon: "bi-truck", text: "Purchasing and supplier management" },
  { icon: "bi-box-seam", text: "Stock and warehouse control" },
  { icon: "bi-gear-wide-connected", text: "Manufacturing and production" },
  { icon: "bi-kanban", text: "Project and job costing" },
  { icon: "bi-tools", text: "Service and after-sales support" },
];

const reasons = [
  {
    title: "One system instead of several",
    text: "You manage your finance, sales, stock, and service all from one solution. When a warehouse team updates stock, sales can see the changes immediately. When finance closes the books, they are working from the same numbers everyone is aware of. This removes the double entry and the version-control headaches that come with running separate tools.",
  },
  {
    title: "Built-in AI that does real work",
    text: <>Business Central includes <Link href="/products/dynamics-365-copilot/" className="u-i">Microsoft Copilot</Link> as standard, plus there are AI agents that carry out everyday tasks on their own. A Sales Order Agent can turn an incoming email into a sales order. A Payables Agent can capture, match, and route supplier invoices for approval. An Expense Agent can handle receipt capture and policy checks. These agents cut down the manual administration that eats into your team&apos;s day.</>,
  },
  {
    title: "Reports and numbers you can trust",
    text: <>Business Central includes more than 400 ready-made reports and over 110 <Link href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</Link> covering more than 400 key performance indicators. You can also build your own reports without any coding. When the CEO asks how the quarter is looking, the answer is a few clicks away, not a week of pulling data from three systems.</>,
  },
  {
    title: "Works with the tools your team already uses",
    text: <>Because Business Central communicates easily with Outlook, Excel, and Teams, your team keeps working in familiar apps. A salesperson can check a customer&apos;s order history from within Outlook. A finance manager can pull live figures into an Excel worksheet, work on them, and push the update straight back into Business Central.</>,
  },
  {
    title: "Grows with your business",
    text: "You can add users, functionality, and new locations as you grow, without replacing the whole system. Business Central supports multiple currencies, multiple languages, and country-specific tax and compliance rules, so a UK business with plans to trade internationally is not boxed in.",
  },
  {
    title: "Strong security, backed by Microsoft",
    text: <>Your data sits on <Link href="/products/microsoft-azure/" className="u-i">Microsoft Azure</Link>, protected by the same security standards Microsoft uses to safeguard its own cloud services. This includes multi-factor authentication, encryption, and role-based access, so people only see the information relevant to their job.</>,
  },
  {
    title: "Lower cost than running several separate tools",
    text: <>Licensing is based on a simple <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">per-user, per-month subscription</Link>, so you know your costs upfront. On top of that, replacing multiple standalone tools with one connected system usually cuts down the ongoing cost of maintaining and integrating them separately.</>,
  },
  {
    title: "A clear path from wherever you are starting",
    text: <>Whether you are moving off spreadsheets, an older accounting package, <Link href="/dynamics-nav-to-business-central/" className="u-i">legacy Dynamics NAV</Link>, or another ERP system entirely, Business Central has proven migration paths and tools to bring your data across with minimal disruption.</>,
  },
];

const results = [
  { num: "60%", text: "One manufacturing business cut its month-end financial close process by 60%, and its finance team saved up to half their time on routine tasks." },
  { num: "20%", text: "A hospitality group centralised its operations onto Business Central and reported a 20% cut in administrative costs, along with a 25% drop in stock shortages." },
  { num: "400%", text: "A gas solutions company reported a 400% faster month-end close and reporting up to five times quicker than before." },
  { num: "80%", text: "A property investment firm reduced its reporting time by 80% and reported that its tax compliance position was fully assured." },
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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 1024, "height": 597 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": { "@id": PAGE_URL + "#business-central" },
      "mainEntity": { "@id": PAGE_URL + "#reasons" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 3, "name": "Why Choose Microsoft Dynamics 365 Business Central", "item": PAGE_URL }
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
      "description": "Microsoft Dynamics 365 Business Central is one cloud system for growing businesses, trusted by 55,000+ companies worldwide.",
      "featureList": processes.map((p) => p.text)
    },
    {
      "@type": "ItemList",
      "@id": PAGE_URL + "#reasons",
      "name": "Why Businesses Choose Business Central",
      "numberOfItems": reasons.length,
      "itemListElement": reasons.map((r, i) => ({ "@type": "ListItem", "position": i + 1, "name": r.title }))
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "quick-insight", label: "Quick Insight" },
  { id: "numbers", label: "In Numbers" },
  { id: "why-businesses-choose", label: "Why Businesses Choose" },
  { id: "results", label: "Results" },
  { id: "how-we-help", label: "How We Help" },
  { id: "faqs", label: "FAQs" },
];

const relatedPages = [
  { href: "/products/dynamics-365-business-central/advantages-capabilities/", title: "Business Central Advantages & Capabilities", icon: "bi-grid" },
  { href: "/dynamics-365-business-central-features/", title: "Business Central Features", icon: "bi-list-check" },
  { href: "/dynamics-nav-vs-business-central/", title: "Dynamics NAV vs Business Central", icon: "bi-arrow-repeat" },
  { href: "/dynamics-365-business-central-vs-finance-operations/", title: "Business Central vs Finance & Operations", icon: "bi-arrow-left-right" },
  { href: "/dynamics-365-business-central-vs-sap-business-one/", title: "Business Central vs SAP Business One", icon: "bi-building" },
];

const WhyChooseBCTwo = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="597" />
        <meta property="og:image:alt" content="Microsoft Dynamics 365 Business Central dashboard" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/dynamics-365-business-central/">Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Why Choose Business Central</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Why Choose Microsoft Dynamics 365 Business Central?</h1>
              <p className={styles.heroSub}>Tired of managing business in multiple systems?</p>
              <p className={styles.heroLead}>Microsoft Dynamics 365 Business Central is one cloud system for growing businesses, trusted by 55,000+ companies worldwide.</p>
              <p className={styles.heroLead}>Want to learn if it fits your business. Learn From the Experts.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroImageCard}>
                <Image src="/img/Dynamics-365-Business-Central.png" alt="Microsoft Dynamics 365 Business Central dashboard showing sales and payments" width={1024} height={597} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} />

      {/* ===== Quick insight ===== */}
      <section id="quick-insight" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <h2 className={styles.h2}>A Quick Insight into Business Central</h2>
              <p className={styles.lead}>Data is everything for a business and from that standpoint, Business Central works like one single brain for your business. Your teams, be they finance, warehouse, sales, or project management, access and work from the same live data. No discrepancies whatsoever. That’s what Business Central promises to its users.</p>
              <p className={styles.processIntro}>The processes Business Central supports include the core of what businesses need to run every day:</p>
            </div>
          </div>
          <ul className={styles.processGrid}>
            {processes.map((p) => (
              <li key={p.text}><i className={`bi ${p.icon}`}></i>{p.text}</li>
            ))}
          </ul>
          <div className={styles.twoCol}>
            <div className={styles.infoCard}>
              <i className="bi bi-cloud-check"></i>
              <p>To add to it, it runs in the cloud, which mean you don’t have to bear the cost of maintaining servers on-premises. You and your teams can access it from anywhere, anyplace and on any device, be it a laptop, tablet, or phone.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-microsoft"></i>
              <p>It also communicates well with <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">Microsoft 365 apps</Link> which include Excel, Outlook, and Teams. It means you can view and update Business Central information without leaving the screen of your Microsoft apps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Numbers ===== */}
      <section id="numbers" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Business Central in Numbers</h2>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoHero}`}>
              <i className="bi bi-buildings"></i>
              <span className={styles.bentoNum} aria-hidden="true">55,000+</span>
              <p>55,000+ companies worldwide run their business on Business Central</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-graph-up-arrow"></i>
              <span className={styles.bentoNum} aria-hidden="true">200%</span>
              <p>Expect over 200% return on investment reported over three years, based on a Microsoft-commissioned Forrester study of a composite organisation</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-hourglass-split"></i>
              <span className={styles.bentoNum} aria-hidden="true">6</span>
              <p>6 months, the potential time to pay back the investment, according to the same study</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <i className="bi bi-translate"></i>
              <div>
                <span className={styles.bentoWord} aria-hidden="true">157</span>
                <p>50+ languages and 157 countries supported, so the system scales with you as you grow or expand abroad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why businesses choose ===== */}
      <section id="why-businesses-choose" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why Businesses Choose Business Central</h2>
              <p>A growing business, sooner or later, hits a point where it finds things have moved out of its control. This is quite usual when a business is using separate systems for managing accounts, inventory, sales, and customer service. The repercussions of using different systems include issues with number reconciliation, reporting taking longer to be prepared, and crucial decisions getting delayed because of that.</p>
              <p><Link href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</Link> is designed to fulfil the needs of growing businesses. It is an AI-powered cloud-based Microsoft ERP that is trusted by more than 55,000 companies across the world. If you are not sure if it is the right ERP for your business, Dynamics Square helps you understand why it can be.</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {reasons.map((r, i) => (
              <article className={styles.reasonCard} key={r.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}>{i + 1}.</span>
                  <h3>{r.title}</h3>
                </div>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Results ===== */}
      <section id="results" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <h2 className={`${styles.h2} ${styles.h2Light}`}>Let’s See What Businesses Are Achieving with Business Central</h2>
          <p className={styles.lightText}>Independent Microsoft customer studies give a sense of the real-world impact once a business is up and running on Business Central:</p>
          <div className={styles.resultGrid}>
            {results.map((r) => (
              <div className={styles.resultCard} key={r.num}>
                <span className={styles.resultNum} aria-hidden="true">{r.num}</span>
                <p>{r.text}</p>
              </div>
            ))}
          </div>
          <p className={`${styles.closingLine} ${styles.lightText}`}>Results vary by business, but the pattern is consistent: less time spent on administration and manual work, and more time spent running the business itself.</p>
        </div>
      </section>

      {/* ===== How we help ===== */}
      <section id="how-we-help" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className={`col-lg-8 ${styles.helpText}`}>
              <h2 className={styles.h2}>How Dynamics Square Helps You Get There</h2>
              <p>Software alone does not transform a business. The right technology can change everything, and Dynamics Square makes sure it is set up around how your business actually works, not the other way round.</p>
              <p>As a Microsoft Solutions Partner in the UK, our consultants have implemented, upgraded, and supported Business Central across manufacturing, distribution, retail, professional services, and more. We take the time to understand your processes first, then configure Business Central to fit them, so your team adopts it quickly and gets real value from day one.</p>
              <p>If you are still deciding whether Business Central is right for you, our <Link href="/guides/business-central-guide-for-smb/" className="u-i">SMB guide to Business Central</Link> covers the details in more depth. If you already use an older system, take a look at how it compares on our <Link href="/dynamics-nav-vs-business-central/" className="u-i">Dynamics NAV vs Business Central page</Link>, or explore the <Link href="/dynamics-365-business-central-features/" className="u-i">full list of Business Central features</Link>.</p>
              <div className={styles.ctaRow}>
                <Link href="/case-studies/" className={styles.ctaGhost}>
                  Check Out Our Case Studies <i className="bi bi-arrow-right"></i>
                </Link>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Talk to a Dynamics Square Consultant &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
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
                  <Image src="/img/Dynamics-365-Business-Central.png" alt="Microsoft Dynamics 365 Business Central" width={1024} height={597} sizes="(max-width: 991px) 100vw, 360px" />
                  <p>Want to learn if it fits your business. Learn From the Experts.</p>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
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

      {/* ===== Final CTA ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Ready to See Business Central in Action?</h2>
              <p>Talk to a Dynamics Square consultant about what Business Central could look like for your business, with no obligation.</p>
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

export default WhyChooseBCTwo;
