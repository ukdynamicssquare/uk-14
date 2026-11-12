import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import ax from "../styles/axMigration.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import PageSeo from "../components/PageSeo";

const PAGE_TITLE = "Dynamics AX to Dynamics 365 Finance & SCM Migration";
const PAGE_DESC = "Extended support for Dynamics AX has ended. Learn the benefits, migration routes, timeline and cost of moving AX to Dynamics 365 Finance and Supply Chain.";

const whyMove = [
  { icon: "bi-shield-x", lead: "Support has ended.", text: "Extended support for AX 2009 SP1, AX 2012 and AX 2012 R2 ended on 12 April 2022. AX 2012 R3 followed on 10 January 2023." },
  { icon: "bi-hdd-stack", lead: "The infrastructure is yours to carry.", text: "Servers, databases, backups and security patches all need in-house time or a hosting contract." },
  { icon: "bi-stack", lead: "Customisations pile up.", text: "Years of modifications make every update, integration and report change slower and riskier." },
  { icon: "bi-diagram-2", lead: "Data lives in too many places.", text: "When finance, warehouse, sales and reporting run separately, people re-key data and argue over whose numbers are right." },
  { icon: "bi-buildings", lead: "The business has moved on.", text: "New entities, new sites and new reporting needs push an older ERP further than it was built to go." },
];

const benefits = [
  { icon: "bi-cloud-check", title: "1. Modernise Your ERP Environment", paras: [<>Your AX servers have a shelf life, and so do the Windows Server and SQL Server versions underneath them. Dynamics 365 runs in <Link href="/dynamics-365-finance-cloud-vs-on-premise/">Microsoft&apos;s cloud</Link>, so hardware refreshes and operating system upgrades come off your IT roadmap.</>] },
  { icon: "bi-calculator", title: "2. Improve Financial Management", paras: [
    <>Groups running several legal entities in AX often close each one separately, then pull the results together in Excel. In <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link>, the general ledger, payables, receivables and budgets for every entity are managed within the application. Financial consolidation helps bring the results together, while budget control can check spending against approved budgets before a purchase order is approved.</>,
    "For finance teams, this means less dependence on separate spreadsheets for consolidation and budget monitoring. It also gives them a more consistent view of financial performance across entities.",
  ] },
  { icon: "bi-truck", title: "3. Strengthen Supply Chain Visibility", paras: [
    <>When a customer asks where their order is, your sales team shouldn&apos;t need to ring the warehouse. <Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link> gives teams visibility of inventory across warehouses and sites, alongside procurement, production planning and warehouse operations.</>,
    "It also supports supplier management, inventory replenishment and demand forecasting. Planners can use sales history and other relevant data to inform stock requirements, rather than relying entirely on spreadsheets and manual estimates.",
  ] },
  { icon: "bi-puzzle", title: "4. Simplify Customisation and Maintenance", paras: ["This is often where an AX migration saves the most. AX let developers change Microsoft's own code, a practice called overlayering. Dynamics 365 doesn't. So every modification has to earn its place: some aren't needed because standard features have caught up, and the rest are rebuilt as extensions that sit alongside Microsoft's code rather than inside it. That reduces conflicts with Microsoft's code and makes future updates easier to manage, although extensions still need compatibility testing."] },
  { icon: "bi-server", title: "5. Reduce On-Premises Infrastructure Management", paras: ["Microsoft manages the underlying cloud infrastructure and platform maintenance, so server hardware and operating system patching come off your list. Your IT team still manages user access, security configuration, integrations, environments and data governance. Microsoft's regular service updates also need reviewing and testing against your business processes and extensions."] },
  { icon: "bi-bar-chart-line", title: "6. Improve Financial and Operational Reporting", paras: [<>If your monthly board pack still starts with AX exports into Excel, this one matters. Reports in Dynamics 365 draw on the same data finance and operations work with every day, and <Link href="/products/microsoft-power-bi/">Power BI</Link> can sit on top. Finance and sales teams work from more consistent reporting data.</>] },
  { icon: "bi-microsoft", title: "7. Connect with Microsoft Business Applications", paras: [<>Dynamics 365 works with Microsoft 365, Power BI and Power Automate, and with third-party systems through standard APIs. An approval that used to mean emailing a PDF around can become a <Link href="/products/microsoft-power-automate/">Power Automate flow</Link>. <Link href="/products/dynamics-365-copilot/">Copilot features</Link> are available too, although what you get depends on the app, your licences and how it&apos;s set up.</>] },
];

const comparison = [
  { icon: "bi-cloud-arrow-up", area: "Deployment", ax: "Commonly hosted on-premises or in a private hosting environment", d365: "Cloud-hosted SaaS deployment" },
  { icon: "bi-hdd-network", area: "Infrastructure", ax: "Your organisation manages, or contracts out, hosting and maintenance", d365: "Microsoft manages the underlying cloud infrastructure" },
  { icon: "bi-cash-coin", area: "Financial management", ax: "Capabilities and reporting depend on AX version and customisations", d365: "Connected financial management, budgeting, budget control and consolidation" },
  { icon: "bi-box-seam", area: "Supply chain", ax: "Procurement, inventory, production and warehouse processes", d365: "Integrated supply chain, multi-site inventory visibility and demand forecasting, with ongoing service updates" },
  { icon: "bi-graph-up", area: "Reporting", ax: "AX reports and add-on tools, often heavily customised", d365: "Built-in financial reporting, embedded Power BI and data export for analytics" },
  { icon: "bi-sliders", area: "Customisation", ax: "Existing modifications may include overlayering", d365: "Configuration, extensions and supported development approaches" },
  { icon: "bi-plug", area: "Integration", ax: "Existing interfaces and custom integrations", d365: <>APIs, supported connectors and <Link href="/products/microsoft-dynamics-365/integration/">integration services</Link></> },
  { icon: "bi-arrow-repeat", area: "Updates", ax: "Your organisation plans and manages application upgrades", d365: "Microsoft delivers service updates; you manage testing and readiness" },
];

const steps = [
  { title: "Assess the existing AX environment.", text: "We look at your AX version, which modules you actually use, database size, custom code, integrations and the reports people depend on. A surprise found here costs far less than one found in testing." },
  { title: "Define the migration strategy.", text: <>Your AX version largely decides the route. AX 2009 uses a data migration approach, while eligible AX 2012 R2 and R3 environments can follow Microsoft&apos;s <Link href="/our-services/dynamics-365-upgrade-services/">code and data upgrade process</Link>. Once the route is clear, we agree scope, data priorities, responsibilities and the timeline.</> },
  { title: "Review customisations and existing code.", text: "Every modification goes on a list, and each one faces the same question: does the business still need it? If it does, we check whether standard Dynamics 365 covers it before rebuilding it as an extension." },
  { title: "Prepare and migrate data.", text: "You probably don't need fifteen years of closed transactions in the new system. We help you decide what comes across, clean up duplicates, map the fields and check the numbers once they land." },
  { title: "Configure Dynamics 365 and integrations.", text: "We set up your finance and supply chain processes, security roles, workflows and reports, then reconnect your warehouse system, bank feeds and other tools." },
  { title: "Test business processes.", text: "Your own finance and operations users test real scenarios: a month-end close, a purchase-to-pay cycle, a stock count. They sign it off, not us." },
  { title: "Prepare users and go live.", text: <><Link href="/our-services/dynamics-365-training/">Training</Link> follows what each person does in their job. Cutover planning then covers data freeze dates, the final migration run, user access and who to call if something goes wrong in week one.</> },
  { title: <>Provide <Link href="/our-services/dynamics-365-support-services/">post-migration support</Link>.</>, key: "support", text: "After go-live we stay close, fixing issues, answering questions and picking up the improvements that were parked to protect the launch date." },
];

const routes = [
  { system: "Dynamics AX 2009", route: "Microsoft's AX 2009 Data Migration Tool (DMT)", text: "This is Microsoft's supported migration route for AX 2009 data. The tool helps map source tables and fields to target data entities, apply data conversions and prepare selected data for transfer. Customisations, integrations and wider implementation work need separate attention." },
  { system: "Dynamics AX 2012 R2", route: "Microsoft's AX 2012 code and data upgrade process, subject to prerequisites", text: "Requires the appropriate cumulative update, the R2 pre-upgrade update and checklist, code migration, database upgrade and functional testing." },
  { system: "Dynamics AX 2012 R3", route: "Microsoft's AX 2012 code and data upgrade process, subject to prerequisites", text: "Requires the appropriate cumulative update, the R3 pre-upgrade update and checklist, code migration, database upgrade and functional testing. Full transaction history can be upgraded, subject to the supported route and technical conditions." },
  { system: "AX 2012 RTM", route: "No direct supported cloud upgrade path", text: "A direct upgrade to the cloud version of Dynamics 365 Finance and Supply Chain Management is not supported. A migration or reimplementation strategy needs to be assessed.", warn: true },
];

const upgradeStages = [
  { lead: "Check the source environment.", text: "Confirm the AX release, cumulative update, installed components, database configuration and customisations." },
  { lead: "Run the upgrade analysis.", text: "Use Microsoft's Upgrade Analysis Report to identify deprecated features, database issues and other potential upgrade problems." },
  { lead: "Prepare the AX environment.", text: "Install the applicable pre-upgrade update and complete Microsoft's checklist. This includes validating the source version and preparing required metadata and user mappings." },
  { lead: "Migrate and review custom code.", text: "Use the applicable Microsoft code migration tools and developer processes to prepare existing application code. Developers must review the converted code and resolve issues that require manual intervention." },
  { lead: "Upgrade the database.", text: "Run the data upgrade process to bring supported AX data into the new environment." },
  { lead: "Validate and test.", text: "Check migrated data, application configuration, security roles, integrations and important finance and operational processes. Complete functional testing and a test cutover before production go-live." },
];

const timeFactors = [
  { icon: "bi-signpost-split", text: "Your AX version, and whether you upgrade or migrate data" },
  { icon: "bi-globe2", text: "The number of legal entities and countries" },
  { icon: "bi-database", text: "Database size and how much historical data you bring across" },
  { icon: "bi-code-square", text: "The number and complexity of customisations" },
  { icon: "bi-plug", text: "Third-party integrations that need rebuilding or reconnecting" },
  { icon: "bi-people", text: "Testing and training effort, including users, roles and sites" },
];

const costDrivers = [
  { icon: "bi-database-gear", driver: "Data migration and cleansing", up: "Large databases, poor data quality, years of history" },
  { icon: "bi-code-slash", driver: "Customisation redevelopment", up: "Many modifications, overlayering, undocumented code" },
  { icon: "bi-plug", driver: "Integration replacement", up: "Older interfaces, custom connectors, many connected systems" },
  { icon: "bi-gear", driver: "Finance and supply chain configuration", up: "Multiple entities, currencies and sites, complex processes" },
  { icon: "bi-mortarboard", driver: "Testing and training", up: "Many users, roles and locations" },
  { icon: "bi-rocket-takeoff", driver: "Deployment and post-go-live support", up: "Phased rollouts, longer hypercare, wider support scope" },
];

const challenges = [
  { icon: "bi-file-earmark-code", title: "Legacy Customisations", text: "A pricing routine written for one customer in 2013. A report built by someone who left years ago. Most AX systems carry code like this, often undocumented. If nobody can explain what a modification does, that's a good sign it shouldn't come with you." },
  { icon: "bi-database-exclamation", title: "Historical Data and Data Quality", text: "Duplicate customers, suppliers set up three times, items nobody has sold since 2018. Moving all of it slows the new system down and undermines trust in it. Agree early which history you genuinely need, and archive the rest." },
  { icon: "bi-diagram-3", title: "Existing Integrations and Reports", text: "AX rarely works alone. It might send orders to a warehouse system, take in bank statements and feed your website. Each link needs testing against Dynamics 365, and some will need rebuilding. The same goes for reports: find out which ones people actually open before rebuilding them all." },
  { icon: "bi-people", title: "Business Disruption and User Adoption", text: "A new finance system lands hardest on the people who use it every day. Involve your key users in process design and testing and they'll spot problems you won't. Then train people on their own tasks, using their own data where possible." },
];

const whyUs = [
  { icon: "bi-clock-history", title: "Experience with Legacy Dynamics Systems", paras: [
    "Our consultants work with legacy Dynamics environments as well as Dynamics 365. That experience helps us review how an AX system was built, which processes it supports and where older modifications have become difficult to maintain.",
    "The assessment looks at what the business still needs, what standard Dynamics 365 functionality can replace and which customisations or integrations require further work. The aim is to make informed decisions before development and migration begin, rather than carry every existing workaround into the new system.",
  ] },
  { icon: "bi-globe-europe-africa", title: "Onsite and Offshore Delivery Model", paras: ["Your finance and operations teams work with onsite consultants who run the workshops and agree requirements. Behind them, offshore specialists handle data mapping, code review and integration build. You keep a local face on the project and gain more technical capacity."] },
  { icon: "bi-kanban", title: "AX Migration Planning and Delivery", paras: ["Before the project starts, you get a clear scope, delivery plan and project estimate, along with the dependencies, the data plan and how testing will run."] },
  { icon: "bi-life-preserver", title: "Support After Go-Live", paras: ["The first weeks after launch usually raise questions nobody thought to ask in testing. Depending on your support agreement, we fix technical issues, help users with migrated processes and make changes as your teams get used to Dynamics 365."] },
];

const glance = [
  { num: "14+", text: <>years of <Link href="/microsoft-partners-uk/">Microsoft partnership</Link> experience</> },
  { num: "150+", text: "Microsoft Certified Professionals" },
  { num: "500+", text: "clients worldwide" },
  { num: "12+", text: "industries served" },
];

const faqs = [
  { id: 1, question: "Why should businesses migrate from Dynamics AX to Dynamics 365?", answer: "<p>Because AX no longer gets Microsoft's extended support, and it keeps getting more expensive to host, patch and change. A Dynamics AX to Dynamics 365 migration moves you onto <a href=\"/products/microsoft-dynamics-365/\">Microsoft's current ERP</a>, Dynamics 365 Finance and Supply Chain Management, and gives you a chance to retire customisations and workarounds you no longer need.</p>" },
  { id: 2, question: "Is Dynamics AX still supported by Microsoft?", answer: "<p>No. Extended support for AX 2009 SP1, AX 2012 and AX 2012 R2 ended on 12 April 2022, and for AX 2012 R3 on 10 January 2023. Microsoft no longer provides security updates or hotfixes through extended support for these versions.</p>" },
  { id: 3, question: "Can Dynamics AX 2012 be upgraded to Dynamics 365 Finance?", answer: "<p>Eligible AX 2012 R2 and R3 environments can follow Microsoft's documented code and data upgrade process, provided the prerequisites are met. Both releases must be brought to the latest available cumulative update, and the relevant pre-upgrade update and checklist must be completed. AX 2012 RTM isn't a supported direct starting point. Systems using certain deprecated features, virtual companies or data partitions can't use the documented upgrade tools. We confirm the right path during the assessment.</p>" },
  { id: 4, question: "What is the difference between an AX upgrade and a data migration?", answer: "<p>An upgrade, available for eligible AX 2012 R2 and R3 environments, uses Microsoft's code and data upgrade process to bring the database and application code forward. The result still needs code remediation, data validation and testing.</p><p>A data migration, used for AX 2009 or when you choose a <a href=\"/dynamics-365-finance-implementation/\">fresh implementation</a>, moves selected data into a newly configured Dynamics 365 system. Customisations are reviewed and rebuilt where needed rather than simply carried across.</p>" },
  { id: 5, question: "How long does a Dynamics AX migration take?", answer: "<p>There's no standard timeline. It depends on your AX version and route, the number of legal entities, database size, customisations, integrations and testing and training needs. A lightly customised system moves much faster than one with years of modifications. An assessment gives you a realistic, phased estimate.</p>" },
  { id: 6, question: "How much does a Dynamics AX to Dynamics 365 migration cost?", answer: "<p>It depends mainly on data migration and cleansing, customisation redevelopment, integration replacement, finance and supply chain configuration, testing and training, and post-go-live support. <a href=\"/tools/microsoft-dynamics-licensing-calculator/\">Dynamics 365 licences</a> are priced separately. An environment assessment lets us give you a costed scope rather than a guess.</p>" },
  { id: 7, question: "Can existing AX customisations be transferred to Dynamics 365?", answer: "<p>Not as they are. Dynamics 365 doesn't support overlayering, so each modification is reviewed: some are replaced by standard features or configuration, and the rest are rebuilt as extensions or other supported development. For eligible AX 2012 R2 and R3 environments, the applicable code migration process helps prepare existing code, but it still needs developer review, remediation and testing.</p>" },
  { id: 8, question: "Can businesses migrate historical AX data?", answer: "<p>Yes, but the approach depends on the source version and migration route. Historical transaction data, including full transaction history, can be included through an eligible AX 2012 upgrade, subject to the technical prerequisites and data validation. For AX 2009, selected data is migrated using Microsoft's Data Migration Tool. Most businesses review what they need in the live system and archive older records that are mainly required for reference or reporting.</p>" },
  { id: 9, question: "Will existing integrations continue to work after migration?", answer: "<p>Not without checks. Interfaces, authentication, data formats and custom integration code all need reviewing against Dynamics 365, and some will need rebuilding using its APIs and integration services.</p>" },
];

const sections = [
  { id: "why-move", label: "Why Move?" },
  { id: "benefits", label: "Benefits" },
  { id: "ax-vs-d365", label: "AX vs Dynamics 365" },
  { id: "how-it-works", label: "How It Works" },
  { id: "migration-approach", label: "Migration Approach" },
  { id: "timeline-cost", label: "Timeline & Cost" },
  { id: "challenges", label: "Challenges" },
  { id: "why-dynamics-square", label: "Why Dynamics Square" },
  { id: "faqs", label: "FAQs" },
];

const ModalBtn = ({ label }) => (
  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
    <span>{label} &nbsp;<i className="bi bi-arrow-right"></i></span>
  </Link>
);

const WhyMigrateAx = () => {
  const { active, navTop } = useSectionNav(sections);
  const [routeTab, setRouteTab] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);
  // highlight the benefit nearest the middle of the viewport
  useEffect(() => {
    const items = document.querySelectorAll("[data-benefit]");
    if (!items.length || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActiveBenefit(Number(en.target.dataset.benefit));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="https://www.dynamicssquare.co.uk/img/AX-Dynamics-365-banner.png"
        imageAlt="Dynamics AX to Dynamics 365 Finance and Supply Chain Management migration"
        faqs={faqs}
      >
        {/* hero heading font: preloaded so it doesn't swap in late and shift the layout */}
        <link rel="preload" href="/fonts/lato-latin-900-v1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Why Migrate from Dynamics AX to Dynamics 365</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Why Migrate from Dynamics AX to Dynamics 365 Finance and Supply Chain Management?</h1>
              <p className={styles.heroLead}>Your AX system probably still works. The problem is everything it now takes to keep it working.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <ModalBtn label="Request an AX Environment Assessment" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/AX-Dynamics-365-banner.png" alt="Migrating from Dynamics AX to Dynamics 365 Finance and Supply Chain Management" width={723} height={473} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} showCta={false} />

      {/* ===== Intro ===== */}
      <section className={styles.block}>
        <div className="container">
          <div className={styles.capGrid}>
            <article className={styles.capCard}>
              <i className="bi bi-tools"></i>
              <p className={styles.quoteLink}>Servers to patch, customisations nobody fully understands anymore, integrations held together by code written a decade ago. Every year on <Link href="/products/microsoft-dynamics-ax/">Dynamics AX</Link>, that list gets longer.</p>
            </article>
            <article className={styles.capCard}>
              <i className="bi bi-calendar-x"></i>
              <p className={styles.quoteLink}>Microsoft has ended extended support for every major AX release. A <Link href="/faqs-upgrading-dynamics-ax-to-dynamics-365/">Dynamics AX to Dynamics 365 migration</Link> is your chance to fix what you&apos;ve been working around, not just change platforms. <Link href="/products/microsoft-dynamics-365-finance-operations/">Dynamics 365 Finance and Supply Chain Management</Link> is where AX customers go next.</p>
            </article>
            <article className={styles.capCard}>
              <i className="bi bi-person-check"></i>
              <p className={styles.quoteLink}><Link href="/about-us/">Dynamics Square</Link> assesses your AX environment, plans the migration and gets your teams ready for day one on Dynamics 365.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== Why move ===== */}
      <section id="why-move" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Move from Dynamics AX to Dynamics 365?</h2>
              <p className={styles.lead}>Most AX systems don&apos;t suddenly fail. They just get slower, harder and more expensive to change. And without Microsoft&apos;s extended support, that risk now sits with you.</p>
              <ul className={ax.leadList}>
                {whyMove.map((w) => (
                  <li key={w.lead}><i className={`bi ${w.icon}`}></i><span><strong>{w.lead}</strong> {w.text}</span></li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/ax-feature-1-1024x630.png" alt="Legacy Microsoft Dynamics AX role centre" width={1024} height={630} sizes="(max-width: 991px) 100vw, 560px" />
              </div>
              <p className={`mt-4 ${styles.closingLine} ${styles.closingLineDark}`}>A good migration fixes these problems. A poor one simply moves them to a new system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Benefits of Moving to Dynamics 365 Finance and Supply Chain Management</h2>
              <p className={styles.lead}>Most AX customers we speak to aren&apos;t chasing new features. They want a system that costs less to run and is easier to change. Here&apos;s where Dynamics 365 Finance and Supply Chain Management makes that possible.</p>
            </div>
          </div>
          <div className="row gy-5 mt-1">
            <div className="col-lg-7">
              <div className={ax.rail}>
                {benefits.map((b, i) => (
                  <article
                    id={`benefit-${i + 1}`}
                    data-benefit={i}
                    className={`${ax.railItem} ${activeBenefit === i ? ax.railItemActive : ""}`}
                    key={b.title}
                  >
                    <span className={ax.railIcon}><i className={`bi ${b.icon}`}></i></span>
                    <div className={ax.railBody}>
                      <h3>{b.title}</h3>
                      {b.paras.map((p, k) => <p key={k}>{p}</p>)}
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-5">
              <aside className={ax.benefitAside}>
                <div className={ax.benefitNav}>
                  <div className={ax.benefitCount}>
                    <strong>{String(activeBenefit + 1).padStart(2, "0")}</strong>
                    <span>/ {String(benefits.length).padStart(2, "0")}</span>
                  </div>
                  <div className={ax.benefitBar}><span style={{ width: `${((activeBenefit + 1) / benefits.length) * 100}%` }}></span></div>
                  <ul>
                    {benefits.map((b, i) => (
                      <li key={b.title}>
                        <a
                          href={`#benefit-${i + 1}`}
                          className={activeBenefit === i ? ax.benefitNavActive : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(`benefit-${i + 1}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
                          }}
                        >
                          <i className={`bi ${b.icon}`}></i>
                          <span>{b.title.replace(/^\d+\.\s*/, "")}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ModalBtn label="Request an AX Environment Assessment" />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ===== AX vs D365 ===== */}
      <section id="ax-vs-d365" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics AX vs Dynamics 365 Finance and Supply Chain Management</h2>
              <p className={styles.lead}>The table below shows what changes when you move. Some of it is technical, but most of it affects how your team works.</p>
            </div>
          </div>
          <div className={styles.board}>
            <div className={styles.boardHead}>
              <div className={`${styles.boardSideBc} ${ax.sideOld}`}>Dynamics AX</div>
              <div className={styles.boardMid}>Area</div>
              <div className={`${styles.boardSideSap} ${ax.sideNew}`}>Dynamics 365 Finance and Supply Chain Management</div>
            </div>
            {comparison.map((row) => (
              <div className={styles.boardRow} key={row.area}>
                <div className={`${styles.boardCell} ${styles.boardCellBc} ${ax.cellOld}`}>
                  <span className={styles.cellLabel}>Dynamics AX</span>
                  {row.ax}
                </div>
                <div className={styles.boardFactor}>
                  <i className={`bi ${row.icon}`}></i>
                  <span>{row.area}</span>
                </div>
                <div className={`${styles.boardCell} ${styles.boardCellSap} ${ax.cellNew}`}>
                  <span className={styles.cellLabel}>Dynamics 365 Finance and Supply Chain Management</span>
                  {row.d365}
                </div>
              </div>
            ))}
          </div>
          <p className={ax.boardNote}>The exact gap depends on your AX version, the modules you use and how heavily the system was customised. That&apos;s what the assessment is for: deciding what moves as it is and what gets redesigned.</p>
        </div>
      </section>

      {/* ===== How it works ===== */}
      <section id="how-it-works" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics AX to Dynamics 365 Migration: How Does It Work?</h2>
              <p className={styles.lead}>We don&apos;t start with a project plan. We start with your AX system, because until we know what&apos;s in it, any timeline is a guess.</p>
            </div>
          </div>
          <ol className={ax.timeline}>
            {steps.map((s, i) => (
              <li key={s.key || i}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Migration approach ===== */}
      <section id="migration-approach" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Choosing the Right Migration Approach</h2>
              <p className={styles.lead}>Your AX version decides the route, and neither route is a push-button upgrade. Microsoft documents different approaches for AX 2009 and AX 2012. The available route also depends on the source environment meeting the relevant technical requirements.</p>
            </div>
          </div>
          <div className={ax.routeTable}>
            <div className={ax.routeHead}>
              <span>Your current system</span>
              <span>Migration route</span>
              <span>What it involves</span>
            </div>
            {routes.map((r) => (
              <div className={`${ax.routeRow} ${r.warn ? ax.routeRowWarn : ""}`} key={r.system}>
                <div className={ax.routeSystem}>
                  <i className={`bi ${r.warn ? "bi-x-octagon" : "bi-database"}`}></i>
                  <h3>{r.system}</h3>
                </div>
                <div className={ax.routeWay}>
                  <span className={ax.routeLabel}>Migration route</span>
                  {r.route}
                </div>
                <div className={ax.routeWhat}>
                  <span className={ax.routeLabel}>What it involves</span>
                  {r.text}
                </div>
              </div>
            ))}
          </div>

          <div className={ax.routeTabs} role="tablist" aria-label="Migration route details">
            {["How the AX 2009 Data Migration Route Works", "How the AX 2012 R2/R3 Upgrade Works"].map((t, i) => (
              <button
                type="button"
                role="tab"
                key={t}
                aria-selected={routeTab === i}
                className={`${ax.routeTab} ${routeTab === i ? ax.routeTabActive : ""}`}
                onClick={() => setRouteTab(i)}
              >
                <i className={`bi ${i === 0 ? "bi-box-arrow-in-right" : "bi-arrow-up-square"}`}></i>
                {i === 0 ? "AX 2009" : "AX 2012 R2/R3"}
              </button>
            ))}
          </div>
          <div className={ax.tabPanel}>
            <div className={routeTab === 0 ? "" : "d-none"} role="tabpanel">
              <div className={ax.tabPanelInner}>
                <h3>How the AX 2009 Data Migration Route Works</h3>
                <p>Microsoft&apos;s AX 2009 Data Migration Tool supports the transfer of data from AX 2009 to finance and operations apps. It helps map source tables and fields to target data entities, apply data conversions, set default values and filter the data selected for migration.</p>
                <p>The process also requires decisions about legal entities, dimensions and ledger setup. Source data must be prepared and mapped to the relevant target entities before it can be imported.</p>
                <p>The DMT does not convert AX 2009 custom code into Dynamics 365 extensions. Customisations must be assessed and rebuilt where required. Integrations, configuration and migrated data also need separate validation. The amount of work depends on the source database and the processes the business needs to retain.</p>
              </div>
            </div>
            <div className={routeTab === 1 ? "" : "d-none"} role="tabpanel">
              <div className="row gy-4">
                <div className={`col-lg-6 ${ax.tabPanelInner}`}>
                  <h3>How the AX 2012 R2/R3 Upgrade Works</h3>
                  <p>For eligible AX 2012 R2 and R3 environments, Microsoft provides a code and data upgrade process. It is not a direct, automatic upgrade. Both releases must be brought to the latest available cumulative update, and the source environment must meet Microsoft&apos;s requirements.</p>
                  <p>The pre-upgrade checklist is included in AX 2012 R3 CU13. Older R3 environments need the relevant update, KB4035163, while R2 environments need KB4048614. The appropriate update and checklist must be completed before proceeding.</p>
                  <p>The exact work depends on the AX version, installed components, custom code and database condition. Systems using certain deprecated features, virtual companies or data partitions cannot use the documented upgrade tools. Some businesses may therefore need a different migration or reimplementation approach.</p>
                  <p>Historical transaction data, including full transaction history, can be brought forward through an eligible AX 2012 upgrade. The business should still decide how much history it needs in the live system and whether older records are better kept in an archive.</p>
                </div>
                <div className="col-lg-6">
                  <div className={ax.stageBox}>
                    <p className={ax.stageTitle}>The main stages include:</p>
                    <ol className={ax.stageList}>
                      {upgradeStages.map((s) => (
                        <li key={s.lead}><strong>{s.lead}</strong> {s.text}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className={`mt-4 mb-0 ${styles.closingLine} ${styles.closingLineDark}`}>Dynamics Square reviews these conditions before recommending a migration method or agreeing project dates.</p>
        </div>
      </section>

      {/* ===== Timeline & cost ===== */}
      <section id="timeline-cost" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>How Long Does a Dynamics AX Migration Take?</h2>
              <p className={styles.lead}>We won&apos;t quote a timeline before we&apos;ve seen your system, because the same eight steps can take very different amounts of time. These factors drive it most:</p>
            </div>
          </div>
          <ul className={`mt-3 ${styles.processGrid} ${ax.factorGrid}`}>
            {timeFactors.map((f) => (
              <li key={f.text}><i className={`bi ${f.icon}`}></i>{f.text}</li>
            ))}
          </ul>
          <p className={`${styles.closingLine} ${styles.closingLineDark}`}>The assessment gives you a phased plan with realistic dates.</p>

          <div className="row gy-5 align-items-center mt-4">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>What Affects Dynamics AX Migration Costs?</h2>
              <p className={styles.lead}>Licences aside, project cost depends on how much work each area needs.</p>
              <div className={ax.costList}>
                <div className={ax.costHead}><span>Cost driver</span><span>What pushes it up</span></div>
                <ul className="list-unstyled m-0">
                  {costDrivers.map((c) => (
                    <li key={c.driver}>
                      <span><i className={`bi ${c.icon}`}></i>{c.driver}</span>
                      <span>{c.up}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`mt-4 ${styles.heroActions} ${styles.heroActionsLeft}`}>
                <ModalBtn label="Request an AX Environment Assessment" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/why-migart.png" alt="Dynamics AX migration cost drivers" width={744} height={473} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Challenges ===== */}
      <section id="challenges" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={`${styles.h2} ${styles.h2Light}`}>Common Challenges During Dynamics AX Migration</h2>
              <p className={`${styles.lead} ${ax.darkLead}`}>None of these problems is unusual. They only do real damage when nobody plans for them.</p>
            </div>
          </div>
          <div className={ax.darkGrid}>
            {challenges.map((c, i) => (
              <article className={ax.darkCard} key={c.title}>
                <span className={ax.darkNum}>{String(i + 1).padStart(2, "0")}</span>
                <i className={`bi ${c.icon}`}></i>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Planning CTA ===== */}
      <section className={styles.block}>
        <div className="container">
          <div className={ax.planCta}>
            <span className={ax.planIcon}><i className="bi bi-signpost-2"></i></span>
            <div className={ax.planText}>
              <h2>Planning Your Move from Dynamics AX?</h2>
              <p>Tell us what you&apos;re running today. We&apos;ll assess your AX environment, flag the dependencies that matter and give you a realistic route to Dynamics 365 Finance and Supply Chain Management.</p>
            </div>
            <div className={ax.planAction}>
              <ModalBtn label="Discuss Your Dynamics AX Migration" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Dynamics Square ===== */}
      <section id="why-dynamics-square" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-5">
              <div className={ax.whyAside}>
                <h2 className={styles.h2}>Why Choose Dynamics Square for Your AX Migration?</h2>
                <p className={styles.lead}>An AX migration needs people who understand the old system as well as the new one. Without that, customisations get rebuilt that didn&apos;t need to be, and data gets moved that should have been archived.</p>
                <h3 className={ax.glanceTitle}>Dynamics Square at a Glance</h3>
                <div className={ax.stats}>
                  {glance.map((g) => (
                    <div className={ax.stat} key={g.num}>
                      <strong>{g.num}</strong>
                      <span>{g.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={ax.featureList}>
                {whyUs.map((w) => (
                  <article className={ax.feature} key={w.title}>
                    <span className={ax.featureIcon}><i className={`bi ${w.icon}`}></i></span>
                    <div>
                      <h3>{w.title}</h3>
                      {w.paras.map((p, k) => <p key={k}>{p}</p>)}
                    </div>
                  </article>
                ))}
              </div>
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
                <h2 className={styles.h2}>FAQs</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat} text-center`}>
                  <Image src="/img/MaskGroup8.png" alt="Dynamics 365 consultant" width={339} height={483} sizes="(max-width: 991px) 60vw, 240px" style={{ width: "60%", height: "auto", margin: "0 auto" }} />
                  <ModalBtn label="Discuss Your Dynamics AX Migration" />
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

export default WhyMigrateAx;
