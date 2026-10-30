import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import faqs from "../public/data/microsoftpartnersuk.json";
import PageSeo from "../components/PageSeo";

const reasons = [
  { icon: "bi-arrow-repeat", title: "Legacy Dynamics Expertise", text: <>Moving from <Link href="/products/microsoft-dynamics-nav/">Dynamics NAV</Link> or <Link href="/products/microsoft-dynamics-ax/">AX</Link> involves more than transferring data. Customisations, historical records, integrations and management reports all influence the migration scope. Reviewing these dependencies helps determine what to retain, what to replace and how existing processes and reporting requirements should be handled in Dynamics 365.</> },
  { icon: "bi-globe2", title: "Onsite and Offshore Delivery Model", text: "Our onsite and offshore delivery model brings customer-facing coordination and technical expertise together around project requirements. Clear responsibilities for business discussions, solution configuration, integrations, data preparation and testing help teams coordinate activities, manage dependencies and prepare users for the transition." },
  { icon: "bi-plug", title: "Connected Business Applications", text: <>Finance, sales, customer service, e-commerce and warehouse operations often rely on separate applications. <Link href="/products/microsoft-dynamics-365/integration/">Connecting these systems</Link> helps reduce duplicate data entry and gives teams a more consistent view of customers, orders and operational performance. The integration approach depends on the systems in place and the processes that need to work together.</> },
  { icon: "bi-diagram-3", title: "Structured Implementation", text: <>A successful <Link href="/our-services/dynamics-365-implementation-services/">implementation</Link> involves more than configuring software. Requirements gathering, solution design, data preparation, testing and user training all influence delivery. Planning these activities early helps establish project scope, clarify responsibilities and prepare employees for new workflows.</> },
  { icon: "bi-headset", title: "Support After Go-Live", text: <>After implementation, businesses need a clear route for resolving issues, improving workflows and managing new requirements. Defining support arrangements around the solution, agreed service scope and operational priorities helps establish how <Link href="/our-services/dynamics-365-support-services/">ongoing assistance</Link> will be provided.</> },
];

const stats = [
  { icon: "bi-award", num: "14+ Years", label: "Industry Experience" },
  { icon: "bi-patch-check", num: "150+", label: "Microsoft Certified Professionals" },
  { icon: "bi-people", num: "500+", label: "Clients Worldwide" },
  { icon: "bi-buildings", num: "12+", label: "Industries Served" },
  { icon: "bi-clock-history", num: "24/7, 365 Days", label: "Support Availability" },
];

const solutions = [
  {
    icon: "bi-grid-1x2",
    title: "1. Microsoft Dynamics 365 ERP and CRM",
    paras: [
      <>Microsoft Dynamics 365 supports business processes across finance, <Link href="/products/dynamics-365-supply-chain-management/">supply chain</Link>, sales and customer service. Applications such as <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link> and <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> help organisations manage operational information, financial processes and business performance.</>,
      <>The choice between applications depends on company size, operational complexity, reporting requirements, integrations and future plans. Businesses <Link href="/our-services/dynamics-365-upgrade-services/">replacing a legacy system</Link> should also assess existing customisations, data quality and the impact of changing established workflows.</>,
    ],
    link: { href: "/products/microsoft-dynamics-365/", label: "Explore Microsoft Dynamics 365" },
  },
  {
    icon: "bi-lightning-charge",
    title: "2. Microsoft Power Platform and Automation",
    paras: [
      <>Microsoft Power Platform includes <Link href="/products/microsoft-power-apps/">Power Apps</Link>, <Link href="/products/microsoft-power-automate/">Power Automate</Link> and <Link href="/products/microsoft-power-bi/">Power BI</Link>. These tools help businesses develop applications, automate workflows and analyse information without treating every process improvement as a large software development project.</>,
      "Practical use cases include digitising approval processes, reducing repetitive data entry and improving departmental reporting. The important consideration is how each solution connects with existing applications, who will maintain it and how access, security and governance will be managed.",
    ],
    link: { href: "/products/microsoft-power-platform/", label: "Explore Microsoft Power Platform" },
  },
  {
    icon: "bi-bar-chart-line",
    title: "3. Microsoft Fabric and Data Analytics",
    paras: [
      <>Microsoft Fabric brings data integration, engineering, warehousing, real-time analytics and business intelligence into an integrated platform. Working with <Link href="/power-bi-implementation/">Power BI</Link>, it can help organisations bring information together, establish more consistent reporting and give decision-makers a clearer view of business performance.</>,
      "Before choosing a data platform, assess where information currently resides, how reliable it is, which reports matter most and how frequently data needs to be refreshed. These requirements help determine the appropriate architecture and implementation scope.",
    ],
    link: { href: "/ai-solutions/microsoft-fabric/", label: "Explore Microsoft Fabric" },
  },
  {
    icon: "bi-robot",
    title: "4. Microsoft AI and Intelligent Agents",
    paras: [
      <><Link href="/ai-solutions/microsoft-foundry/">Microsoft Foundry</Link> provides capabilities for building, deploying and managing AI applications and agents. <Link href="/ai-solutions/copilot-studio/">Copilot Studio</Link> allows organisations to create agents and automate workflows connected to relevant business information.</>,
      "Potential use cases include internal knowledge retrieval, employee assistance and defined business processes. The starting point should be a specific business problem, not the technology itself. Data readiness, access permissions, security, governance and evaluation all need to be considered before an AI solution is introduced into day-to-day operations.",
      "For businesses exploring these technologies, the next step is to define the intended use case, identify the systems and data involved, and establish the implementation requirements before deciding on the appropriate solution.",
    ],
  },
  {
    icon: "bi-cloud",
    title: "5. Microsoft Azure and Microsoft 365",
    paras: [
      "Microsoft Azure provides cloud infrastructure and services for applications, data and AI workloads. Microsoft 365 supports productivity, communication and collaboration. Together with business applications, these technologies can help organisations connect systems and support teams working across different locations.",
      "Architecture, identity management, security, integration and ongoing operating costs should inform decisions about cloud services. Businesses moving existing applications or data to the cloud should also consider dependencies, performance requirements and the effort involved in migration.",
    ],
    link: { href: "/products/microsoft-azure/", label: "Explore Microsoft Azure" },
  },
];

const stages = [
  { icon: "bi-search", title: "Requirements and discovery", text: "Document the current process, business challenges and intended outcomes." },
  { icon: "bi-clipboard-check", title: "Solution planning", text: "Assess the relevant Microsoft applications, integration requirements and project scope." },
  { icon: "bi-gear", title: "Implementation and configuration", text: "Configure the agreed solution around the business processes it needs to support." },
  { icon: "bi-database", title: "Data and integration", text: "Plan data migration, validation and connections with existing applications." },
  { icon: "bi-person-check", title: "Testing and adoption", text: "Validate important workflows, prepare users and address issues before deployment." },
  { icon: "bi-graph-up-arrow", title: "Ongoing improvement", text: "Review how the solution performs and identify changes based on business needs." },
];

const sections = [
  { id: "why-dynamics-square", label: "Why Dynamics Square?" },
  { id: "experience", label: "Experience at a Glance" },
  { id: "solutions", label: "Microsoft Solutions" },
  { id: "idc-marketscape", label: "IDC MarketScape" },
  { id: "perry-group", label: "The Perry Group" },
  { id: "approach", label: "Our Approach" },
  { id: "faqs", label: "FAQs" },
];

const PartnerUK = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Partners UK | Dynamics Square"
        description="Dynamics Square is a leading Microsoft partner in the UK, delivering end-to-end business solutions and expert consulting services. Do Contact us today!"
        image="/img/microsoft-new-pic.png"
        imageAlt="Dynamics Square, Microsoft partner in the UK"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Microsoft Partner UK</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Partner UK</h1>
              <p className={styles.heroLead}><strong>Plan, implement and connect Microsoft business solutions around your business needs.</strong></p>
              <p className={styles.heroLead}>As a Microsoft partners UK, Dynamics Square helps UK businesses modernise ERP and CRM systems, connect applications, improve reporting and automate operational processes. Whether you&apos;re replacing a legacy system, linking finance and customer operations, or exploring an AI use case, we help identify the right Microsoft technologies and plan how they fit your business.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="/contact-us/" className="btn-get-started scrollto">
                  <span>Discuss Your Microsoft Requirements &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/microsoft-new-pic.png" alt="Dynamics Square, Microsoft partner helping UK businesses with Microsoft business solutions" width={751} height={566} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Discuss Your Requirements" />

      {/* ===== Why Dynamics Square ===== */}
      <section id="why-dynamics-square" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Choose Dynamics Square?</h2>
              <p className={styles.lead}>Choosing a Microsoft partner involves more than comparing software knowledge and implementation costs. You need a team that understands your business processes, recognises the limitations of your existing systems and plans the solution around your operational priorities.</p>
              <p>Dynamics Square works with businesses across <Link href="/products/microsoft-dynamics-erp/">ERP</Link>, <Link href="/products/dynamics-365-customer-engagement/">CRM</Link>, system integration and process automation, taking into account existing technology, project requirements and the changes needed to support your business.</p>
            </div>
            <div className="col-lg-5 text-center">
              <Image src="/img/why-side.png" alt="Why choose Dynamics Square as your Microsoft partner in the UK" width={514} height={534} className={styles.imgFlat} style={{ maxWidth: 420, height: "auto" }} sizes="(max-width: 991px) 100vw, 420px" />
            </div>
          </div>
          <div className={styles.capGrid}>
            {reasons.map((r) => (
              <article className={styles.capCard} key={r.title}>
                <i className={`bi ${r.icon}`}></i>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
          {/* mobile: the same badge strip split into a 2x2 grid so each badge stays readable */}
          <div
            className="d-grid d-md-none mt-5"
            role="img"
            aria-label="Dynamics Square Microsoft Solutions Partner designations: Infrastructure Azure, Power Platform, Business Application and Security"
            style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: 12 }}
          >
            {[0, 1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  aspectRatio: "300 / 254",
                  backgroundImage: "url(/img/service-offer-new-pic.png)",
                  backgroundSize: "400% 100%",
                  backgroundPosition: `${(n * 100) / 3}% 0`,
                  backgroundRepeat: "no-repeat",
                }}
              />
            ))}
          </div>
          <div className="text-center mt-5 d-none d-md-block">
            <Image src="/img/service-offer-new-pic.png" alt="Dynamics Square Microsoft Solutions Partner designations: Infrastructure Azure, Power Platform, Business Application and Security" width={1201} height={254} className={styles.imgFlat} style={{ width: "100%", height: "auto" }} sizes="(max-width: 1199px) 100vw, 1140px" />
          </div>
        </div>
      </section>

      {/* ===== Experience at a Glance ===== */}
      <section id="experience" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Experience at a Glance</h2>
              <p>Dynamics Square combines Microsoft technology expertise with experience across different industries and business requirements.</p>
            </div>
          </div>
          <div className={styles.bento}>
            {stats.map((s, i) => (
              <div className={`${styles.bentoCard} ${i === 0 ? styles.bentoHero : ""}`} key={s.label}>
                <i className={`bi ${s.icon}`}></i>
                <span className={styles.bentoNum}>{s.num}</span>
                <p>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Microsoft Solutions ===== */}
      <section id="solutions" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Solutions We Offer</h2>
              <p>Microsoft offers business applications, cloud services, analytics, and AI capabilities for different operational needs. Dynamics Square helps businesses assess the technologies relevant to their requirements, existing systems, and plans for growth.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Microsoft solutions">
              {solutions.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  id={`solution-tab-${i}`}
                  aria-selected={activeSolution === i}
                  aria-controls={`solution-panel-${i}`}
                  className={`${styles.modTab} ${activeSolution === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveSolution(i)}
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {s.title.replace(/^\d+\.\s*/, "")}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all solution content is crawlable */}
              {solutions.map((s, i) => (
                <div
                  key={s.title}
                  id={`solution-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`solution-tab-${i}`}
                  className={`${styles.modPanel}${activeSolution === i ? "" : " d-none"}`}
                >
                  <h3>{s.title}</h3>
                  {s.paras.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {s.link && (
                    <Link href={s.link.href} className={styles.caseMore}>
                      {s.link.label} <i className="bi bi-arrow-right"></i>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== IDC MarketScape ===== */}
      <section id="idc-marketscape" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.textCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics 365 Named a Leader in the 2026 IDC MarketScape</h2>
              <p className={styles.lead}>Microsoft was named a Leader in the IDC MarketScape: Worldwide AI-Enabled Operational ERP 2026 Vendor Assessment. The assessment considers vendors&apos; current capabilities and how their strategies align with customer needs over the following three to five years.</p>
              <p>For businesses evaluating ERP platforms, this provides context on Microsoft&apos;s direction in operational ERP and its wider business applications ecosystem. Choosing an implementation partner still requires assessing project experience, integration requirements and the support available after go-live.</p>
              <a href="https://www.microsoft.com/en-us/dynamics-365/blog/business-leader/2026/10/15/microsoft-named-a-leader-in-the-2026-idc-marketscape-for-ai-enabled-operational-erp/" target="_blank" rel="noopener noreferrer" className={styles.caseMore}>
                Read Microsoft&apos;s announcement of the IDC MarketScape recognition <i className="bi bi-box-arrow-up-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== The Perry Group ===== */}
      <section id="perry-group" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Solutions in Practice: The Perry Group</h2>
              <p>The Perry Group, a manufacturing business with operations in the UK and India, partnered with Dynamics Square to modernise its operational and customer engagement systems.</p>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-4`}>
            <div className={styles.infoCard}>
              <i className="bi bi-diagram-3"></i>
              <p>The project included Dynamics 365 Business Central, <Link href="/products/microsoft-dynamics-365-sales/">Sales</Link>, <Link href="/products/microsoft-dynamics-365-customer-service/">Customer Service</Link> and <Link href="/products/microsoft-dynamics-365-marketing/">Customer Insights – Journeys</Link>, alongside integrations with its B2B website and e-commerce channels, including Amazon and eBay. The work also addressed warehouse automation, inventory planning, import container tracking, shipping cost analytics and automated invoicing.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-arrow-left-right"></i>
              <p>The Perry Group project illustrates how ERP, customer engagement, e-commerce and warehouse processes need to work together. For businesses planning a similar transformation, the key consideration is how information moves from order placement through fulfilment and invoicing, and where disconnected systems create unnecessary work.</p>
            </div>
          </div>
          <div className="mt-4">
            <Link href="/blog/the-perry-group-chooses-dynamics-square-as-the-digital-transformation-partner/" className={styles.caseMore}>
              Read the full Perry Group case study <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Approach ===== */}
      <section id="approach" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>How We Approach a Microsoft Project</h2>
              <p>The implementation plan should reflect the problem being solved. Replacing an ERP system, connecting CRM applications and building a data platform involve different requirements, risks and delivery activities.</p>
              <p>A typical project considers the following stages:</p>
            </div>
          </div>
          <ol className={styles.steps}>
            {stages.map((s, i) => (
              <li className={styles.step} key={s.title}>
                <span className={styles.stepDot}><i className={`bi ${s.icon}`}></i></span>
                <span className={styles.stepNum}>Stage {i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className={`${styles.closingLine} ${styles.closingLineDark}`}>For a complex project, the plan should also define responsibilities, dependencies, acceptance criteria and the approach to managing change. These details help establish realistic expectations for cost, delivery time and the work required from your team.</p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Discuss Your Microsoft Requirements</h3>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Discuss Your Microsoft Requirements &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
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
                <h2 className={styles.h2}>FAQs</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Image src="/img/MaskGroup8.png" alt="Talk to a Dynamics Square Microsoft consultant" width={339} height={483} sizes="(max-width: 991px) 100vw, 360px" style={{ maxHeight: 280, width: "auto", margin: "0 auto", display: "block" }} />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Discuss Your Microsoft Requirements &nbsp;<i className="bi bi-arrow-right"></i></span>
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
    </>
  );
};

export default PartnerUK;
