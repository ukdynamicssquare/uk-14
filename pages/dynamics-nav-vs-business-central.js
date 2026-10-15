import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import ResourceTabs from "../components/bcTwo/ResourceTabs";
import { navVsBcResources } from "../components/bcTwo/legacyResources";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../components/bcTwo/FaqList";
import faqs from "../public/data/navvsbusinesscentral.json";
import PageSeo from "../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/dynamics-nav-vs-business-central/";
const PAGE_TITLE = "Dynamics NAV vs Business Central: Compare & Plan Your Upgrade";
const PAGE_DESC = "Compare Microsoft Dynamics NAV vs Business Central: support end dates, licensing, customisation, AI and what a NAV to Business Central migration involves.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg";

const comparisonRows = [
  { icon: "bi-activity", factor: "Current status", nav: "Legacy, in extended (security-only) support", bc: "Microsoft's actively developed SMB ERP" },
  { icon: "bi-cloud-check", factor: "Deployment", nav: "On-premises, Windows client", bc: "Cloud SaaS, browser-based, with on-premises options" },
  {
    icon: "bi-receipt",
    factor: "Licensing",
    nav: "Perpetual licence plus an annual enhancement plan",
    bc: <>Subscription, per user, per month, see <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">subscription and licensing details</Link></>,
  },
  {
    icon: "bi-sliders",
    factor: "Customisation",
    nav: "Modifications typically written into the core code",
    bc: <><Link href="/products/dynamics-365-business-central/customisation/" className="u-i">Extension-based customisation</Link>, kept separate from the base system</>,
  },
  { icon: "bi-arrow-repeat", factor: "Updates", nav: "None, NAV 2018 was the final release", bc: "Two major update waves every year" },
  { icon: "bi-stars", factor: "AI and Copilot", nav: "Unavailable in any NAV version", bc: "Included as standard" },
  { icon: "bi-bar-chart-line", factor: "Reporting and BI", nav: "Built-in reports, limited without add-ons", bc: "Native Power BI, 400+ reports, 110+ dashboards" },
  { icon: "bi-microsoft", factor: "Microsoft 365 integration", nav: "Limited, mostly add-on based", bc: "Native integration with Outlook, Excel, and Teams" },
  { icon: "bi-calendar-x", factor: "Support outlook", nav: "Extended support ends 11 January 2028 for the final NAV version", bc: "Ongoing Microsoft investment and development" },
];

const moveReasons = [
  { icon: "bi-alarm", title: "NAV's clock is running down", text: "Microsoft's development on Dynamics NAV stopped with the 2018 release. Every NAV version is now either fully out of support or running on security updates only, with no new features, design changes, or guaranteed regulatory updates coming." },
  { icon: "bi-shield-exclamation", title: "Compliance risk grows every year", text: "Tax rules, VAT reporting, and payroll requirements change regularly. A system stuck on security-only updates carries real risk of falling behind on the regulatory changes that keep a UK business compliant." },
  { icon: "bi-cloud-check", title: "Cloud access, anywhere", text: "Business Central runs in the cloud, so your team can work from a laptop, tablet, or phone, without being tied to the NAV Windows client on a specific machine." },
  { icon: "bi-stars", title: "AI that actually does the work", text: <>Business Central includes <Link href="/products/dynamics-365-copilot/" className="u-i">Microsoft Copilot and AI agents</Link> built in, handling tasks like turning emails into sales orders or matching bank transactions during reconciliation, well beyond anything Dynamics NAV was originally built to do.</> },
  { icon: "bi-arrow-up-circle", title: "Safer, easier updates going forward", text: "NAV customisations often changed the core system directly, which made every future upgrade a bigger, costlier project. Business Central's extension model keeps customisations separate, so updates are far less likely to break what you have built." },
  { icon: "bi-wallet2", title: "Predictable monthly cost", text: "NAV licensing usually meant a large upfront cost plus an annual enhancement fee. Business Central runs on a simple per-user, per-month subscription, making budgeting more straightforward." },
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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 2048, "height": 1070 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": [
        { "@id": PAGE_URL + "#dynamics-nav" },
        { "@id": PAGE_URL + "#business-central" }
      ],
      "mainEntity": { "@id": PAGE_URL + "#comparison" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 3, "name": "Dynamics NAV vs Business Central", "item": PAGE_URL }
      ]
    },
    {
      "@type": "ItemList",
      "@id": PAGE_URL + "#comparison",
      "name": "Dynamics NAV vs Business Central",
      "numberOfItems": 2,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "item": { "@id": PAGE_URL + "#dynamics-nav" } },
        { "@type": "ListItem", "position": 2, "item": { "@id": PAGE_URL + "#business-central" } }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#dynamics-nav",
      "name": "Microsoft Dynamics NAV",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Windows",
      "softwareVersion": "2018",
      "url": "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-nav/",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "Dynamics NAV was Microsoft's on-premises ERP system for small and mid-sized businesses."
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
      "description": "Business Central is Microsoft's actively developed replacement, built on much of the same foundation but delivered as a modern cloud service."
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "facts", label: "Facts" },
  { id: "comparison", label: "Full Comparison" },
  { id: "why-move", label: "Why Move" },
  { id: "migration", label: "Migration" },
  { id: "case-studies", label: "Case Studies" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const relatedPages = [
  { href: "/dynamics-nav-to-business-central/", title: "Dynamics NAV to Business Central", icon: "bi-arrow-repeat" },
  { href: "/dynamics-365-business-central-upgrade/", title: "Business Central Upgrade", icon: "bi-arrow-up-circle" },
  { href: "/dynamics-365-business-central-implementation/", title: "Business Central Implementation", icon: "bi-rocket-takeoff" },
  { href: "/why-choose-microsoft-dynamics-365-business-central/", title: "Why Choose Microsoft Dynamics 365 Business Central", icon: "bi-patch-check" },
  { href: "/dynamics-365-business-central-vs-finance-operations/", title: "Business Central vs Finance & Operations", icon: "bi-arrow-left-right" },
];

const NavVsBCTwo = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Article"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central"
        extraSchema={pageSchema}
      >
        <meta property="og:image:width" content="2048" />
        <meta property="og:image:height" content="1070" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/dynamics-365-business-central/">Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Dynamics NAV vs Business Central</span>
          </nav>
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h1 className={styles.heroTitle}>
                Dynamics NAV <span className={styles.heroVs}>vs</span> Business Central
              </h1>
              <p className={styles.heroLead}>Still running Dynamics NAV? Microsoft has moved on, and support is running out.</p>
              <p className={styles.heroLead}>Talk to our experts to understand how exactly Dynamics NAV compares to Business Central, and what staying on NAV could cost your business.</p>
            </div>
          </div>

          <div className={styles.versus}>
            <div className={styles.contender}>
              <div className={`${styles.contenderLogo} ${styles.iconLogo}`}>
                <Image src="/img/menu-icons/NAV.png" alt="Microsoft Dynamics NAV" width={48} height={48} priority />
                <span><small>Microsoft</small><strong>Dynamics NAV</strong></span>
              </div>
            </div>
            <div className={styles.vsBadge} aria-hidden="true">VS</div>
            <div className={styles.contender}>
              <div className={styles.contenderLogo}>
                <Image src="/img/businescentrallogo.png" alt="Microsoft Dynamics 365 Business Central" width={268} height={66} priority />
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

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <h2 className={styles.h2}>You’re Running Out of Time. Upgrade to Business Central Today!</h2>
              <p className={styles.lead}><strong>Dynamics NAV was Microsoft&apos;s on-premises ERP system for small and mid-sized businesses, and Business Central is its cloud-based successor.</strong></p>
            </div>
          </div>
          <div className={`row g-4 ${styles.profileRow} mt-0`}>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagSap}`}>NAV 2018</span>
                <h3>Dynamics NAV</h3>
                <p><Link href="/products/microsoft-dynamics-nav/" className="u-i">Dynamics NAV</Link> development ended with NAV 2018, its final release, which moved into extended, security-only support on 10 January 2023.</p>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className={styles.profile}>
                <span className={`${styles.profileTag} ${styles.profileTagBc}`}>Microsoft</span>
                <h3>Business Central</h3>
                <p><Link href="/products/dynamics-365-business-central/" className="u-i">Business Central</Link> is Microsoft&apos;s actively developed replacement, built on much of the same foundation but delivered as a modern cloud service.</p>
              </article>
            </div>
          </div>
          <div className={styles.callout}>
            <p>The clock is ticking on Dynamics NAV. This page covers what has changed, what your options are, and what moving to Business Central actually involves, while you still have time to plan it properly.</p>
          </div>
        </div>
      </section>

      {/* ===== Facts ===== */}
      <section id="facts" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Dynamics NAV vs Business Central: Facts Worth Knowing</h2>
          <div className={styles.bento}>
            <div className={`${styles.bentoCard} ${styles.bentoHero}`}>
              <i className="bi bi-calendar-x"></i>
              <span className={styles.bentoNum} aria-hidden="true">2028</span>
              <p>Dynamics NAV 2018, the final release, moved out of mainstream support in January 2023 and Microsoft&apos;s own lifecycle policy has its extended, security-only support ending on 11 January 2028</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-buildings"></i>
              <span className={styles.bentoNum} aria-hidden="true">55,000+</span>
              <p>Microsoft reports that Business Central now runs over <strong>55,000 businesses</strong> worldwide, with continued investment and two major update releases every year</p>
            </div>
            <div className={styles.bentoCard}>
              <i className="bi bi-stars"></i>
              <span className={styles.bentoWord} aria-hidden="true">Copilot</span>
              <p>Business Central includes Microsoft Copilot and AI agents as standard, something no version of Dynamics NAV was ever built with</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoWide}`}>
              <i className="bi bi-puzzle"></i>
              <div>
                <span className={styles.bentoWord} aria-hidden="true">Extensions</span>
                <p>NAV customisations were typically written directly into the core system, while Business Central uses separate extensions, built to survive future updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Full comparison ===== */}
      <section id="comparison" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="text-center">
            <h2 className={`${styles.h2} mx-auto`}>Dynamics NAV vs Business Central: Full Comparison</h2>
          </div>
          <div className={styles.board}>
            <div className={styles.boardHead}>
              <div className={styles.boardSideBc}>
                <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="" width={30} height={30} />
                Business Central
              </div>
              <div className={styles.boardMid}>Factor</div>
              <div className={styles.boardSideSap}>Dynamics NAV</div>
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
                  <span className={styles.cellLabel}>Dynamics NAV</span>
                  {row.nav}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Why move ===== */}
      <section id="why-move" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Why Businesses Are Moving from NAV to Business Central</h2>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {moveReasons.map((r) => (
              <article className={styles.reasonCard} key={r.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${r.icon}`}></i></span>
                  <h3>{r.title}</h3>
                </div>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Migration ===== */}
      <section id="migration" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.helpText}`}>
              <h2 className={styles.h2}>What a NAV to Business Central Migration Actually Involves</h2>
              <p>A move from NAV to Business Central is a structured project, not a simple software update as many might think. It typically covers three things: bringing your financial and operational data across, rebuilding any custom NAV modifications as Business Central extensions, and testing everything against your real business processes before go-live.</p>
              <p>The amount of work depends heavily on how customised your current NAV system is. A fairly standard NAV setup can move across in a matter of weeks. A heavily customised system, built up over many years, takes longer, since those customisations need proper rebuilding to work in the new system. Our <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central implementation</Link> service is built around exactly this kind of project.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaCard}>
                <Image src="/img/Group-nav.png" alt="Moving from Microsoft Dynamics NAV to Business Central by upgrade or re-implementation" width={729} height={192} sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Case studies ===== */}
      <section id="case-studies" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <h2 className={styles.h2}>Businesses Like Yours Have Trusted Us with NAV to BC Upgrade & Migration</h2>
          <div className={`row g-4 ${styles.caseGrid}`}>
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/tool-manufacturing-company.jpg" alt="UK tooling and distribution business upgraded from Dynamics NAV 2016 to Business Central" width={850} height={410} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className={`md-case-card__body ${styles.caseBody}`}>
                  <span className={styles.caseTag}>Case study 1</span>
                  <p>A UK tooling and distribution business found out the hard way what an unsupported NAV system can cost.</p>
                  <p>Running Dynamics NAV 2016 on ageing on-premises infrastructure, the business found itself unable to submit VAT returns for the first time in 39 years, after HMRC withdrew support for the outdated server behind its Making Tax Digital setup.</p>
                  <p>Dynamics Square rebuilt the business&apos;s custom tooling and distribution add-ons as modern Business Central extensions, restored full HMRC compliance, and fixed the landed-cost tracking on its China and India import lines, which had become unreliable on the failing legacy system.</p>
                  <p className="md-case-card__link-wrap">Read the <Link href="/case-studies/business-central-for-tool-manufacturing-company/" className="md-case-card__link">full case study <i className="bi bi-arrow-right"></i></Link></p>
                </div>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/orth-care.png" alt="UK orthodontic products supplier upgraded from Dynamics NAV 2013 R2 to Business Central" width={850} height={410} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className={`md-case-card__body ${styles.caseBody}`}>
                  <span className={styles.caseTag}>Case study 2</span>
                  <p>A UK orthodontic products supplier faced a different problem, an older Dynamics NAV 2013 R2 system that had fallen behind its growth, with manual processes, limited real-time visibility, and a struggle to connect its warehouse and mobile systems.</p>
                  <p>Moving to Business Central brought finance, sales, and inventory together, added warehouse management and document automation, and gave the team mobile access and live reporting for the first time.</p>
                  <p className="md-case-card__link-wrap">Read the <Link href="/case-studies/nav-2013-r2-to-business-central-upgrade/" className="md-case-card__link">full case study <i className="bi bi-arrow-right"></i></Link></p>
                </div>
              </article>
            </div>
          </div>
          <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Two very different businesses, one common thread: staying on an unsupported system eventually becomes a bigger risk than the migration itself.</p>
          <Link href="/case-studies/" className={styles.caseMore}>Read more upgrade case stories here <i className="bi bi-arrow-right"></i></Link>
        </div>
      </section>

      {/* ===== How we help ===== */}
      <section id="how-we-help" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className={`col-lg-8 ${styles.helpText}`}>
              <h2 className={styles.h2}>How Dynamics Square Helps You Move on from NAV</h2>
              <p>Migrating off a system your business has run on for years is a big decision, and it deserves a plan built around your actual data and processes.</p>
              <p>Our <Link href="/our-services/dynamics-365-consultant/" className="u-i">Dynamics 365 consultants</Link> have taken businesses through this exact move, from assessing how customised your current NAV system is, through data migration, to getting your team confident on Business Central. We plan the project around your live operations, so your business keeps running while the move happens in the background.</p>
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
                  <Image src="/img/Microsoft-Dynamics-NAV-and-Business-Central.jpg" alt="Difference between Microsoft Dynamics NAV and Dynamics 365 Business Central" width={2048} height={1070} sizes="(max-width: 991px) 100vw, 360px" />
                  <p>Talk to our experts to understand how exactly Dynamics NAV compares to Business Central, and what staying on NAV could cost your business.</p>
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

      {/* ===== Resources ===== */}
      <ResourceTabs
        title="Get Started with Your Move from NAV to Business Central"
        intro="Case studies, e-books, podcasts and blogs to help you plan your Dynamics NAV to Business Central upgrade."
        tabs={navVsBcResources}
      />

      {/* ===== Final CTA ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Ready to Plan Your Move Off Dynamics NAV?</h2>
              <p>Talk to a Dynamics Square consultant about what a NAV to Business Central migration would look like for your business, with no obligation.</p>
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

export default NavVsBCTwo;
