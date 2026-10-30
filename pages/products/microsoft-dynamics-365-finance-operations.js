import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../../components/bcTwo/FaqList";
import ResourceTabs from "../../components/bcTwo/ResourceTabs";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import { foResources, foLinks, foDocuments } from "../../components/bcTwo/legacyResources";
import TimerModal from "../../components/TimerModal";
import faqs from "../../public/data/microsoftdynamicsfinanceoperations.json";
import PageSeo from "../../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance-operations/";
const PAGE_TITLE = "Microsoft Dynamics 365 Finance and Operations | ERP Solutions UK";
const PAGE_DESC = "Consider Dynamics Square as your D365 Finance and operations implementation partner to streamline and enhance your business performance and visibility.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png";

const pillars = [
  { icon: "bi-lightbulb", title: "MAKE SMARTER DECISIONS", text: "Unifying financial and business operations enables businesses to deliver real-time visibility across their organisation for better and faster decisions." },
  { icon: "bi-lightning-charge", title: "TRANSFORM BUSINESS FASTER", text: "Transforming businesses by easily redesigning processes without disrupting operations is crucial for organisations to stay competitive." },
  { icon: "bi-graph-up-arrow", title: "GROW AT YOUR PACE", text: "Helping businesses grow at their own pace is about giving them the choice and flexibility to modernise their organisations at the pace that works for them with the ability to do business anywhere, anytime." },
];

const modules = [
  {
    id: "finance-management", icon: "/img/Budget.svg", title: "Finance Management",
    intro: "Provide a fast and efficient way to register financial transactions, manage relationships between subsidiaries and the parent organisation, manage internal cost accounting, currency translation, and reports in any supported currency.",
    items: [
      { title: "General Ledger", text: "Financial accounting with flexible configuration options for setup and maintenance of general ledger. Share data such as chart of accounts or currency exchange rates across multiple legal entities, and create flexible journal entries for all account types. Use Financial period close workspace to track your financial closing processes across companies, areas, and people." },
      { title: "Budget Planning", text: "Manage your organisation's budget, including flexible configuration options, instant calculation of available budget funds, pooling of budgets, and budget workflows for review and approval, with configurable budget planning supporting a flexible chart of accounts and dimensions, custom-defined process configurations, workflows, and the use of Microsoft Excel to create a budget planning worksheets." },
      { title: "Financial Reporting", text: "Financial statements enable a custom reporting structure and mapping of ledger accounts or dimensions to the reporting structures, and to comply with legal requirements and international accounting standards. They include balance sheet, income statement, and cash flow statement." },
    ],
  },
  {
    id: "supply-chain-management", icon: "/img/Supply-chain.png", title: "Supply Chain Management",
    intro: <>Connect sales and purchasing processes with logistics, production, and warehouse management to provide visibility and management throughout the <Link href="/products/dynamics-365-supply-chain-management/">supply chain</Link>. Manage distributed organisations with inter-company and multi-site capabilities.</>,
    items: [
      { title: "Vendor Collaboration", text: "Streamline vendor collaboration to respond to business needs and customer demands. Dynamics 365 for Finance and Operations enables vendors to work with purchase order, invoice, and consignment inventory information. Vendors can review, accept and reject purchase orders, review the status of invoices and online payment. Users can create purchase order invoices and upload invoice documents to a portal." },
      { title: "Inventory Management", text: "Track items by inventory dimensions, including site, warehouse, pallet, location, batch, and serial number. Take advantage of multiple inventory control systems and inventory valuation methods including first in/ first out, last in/ first out, standard cost, moving, and weighted average." },
      { title: "Multi-site Warehouse Management", text: "Manage storage locations and material handling within warehouses. Apply advanced inbound algorithms using multiple warehouse zones and replenishment strategies. Optimise picking with a choice of picking methods. Track inventory on hand per warehouse." },
    ],
  },
  {
    id: "stock-management", icon: "/img/Stock-Management.png", title: "Stock Management",
    intro: "Get a transparent view of your entire inventory and goods to make your business profitable and efficient. It enables the business to maintain an organised supply chain while maintaining optimal stock levels. Also, you can eliminate all chances of stock mismanagement.",
    items: [
      { title: "Cost Cutting", text: "It lets you order out-of-stock goods in the right quantity and at the right time to continue business without any financial loss." },
      { title: "Maximised Labour", text: "Eliminate the causes of missing and finding items during peak business hours to enhance productivity and business efficiency." },
      { title: "Organise Warehouse Space", text: "D365 Finance and Operations will let you save and organise the area in the warehouse to make warehousing more efficient." },
    ],
  },
  {
    id: "project-management", icon: "/img/project-management.png", title: "Project Management",
    intro: <>Manage a project, streamline its different activities, allocate resources, generate financial results, and achieve planned results with the <Link href="/products/dynamics-365-project-operations/">project management</Link> module of Dynamics 365 Finance and Operations. Regardless of the complexity, this feature can be used in different industries to track the progress of all projects. In general, there are three phases of project management:</>,
    items: [
      { title: "Initiate a Project", text: "Start a project by giving a quotation of materials, labour, work estimates, billing terms, a project agreement, and other expenses." },
      { title: "Execute a Project", text: "Record the work on timesheets and build expense reports to perform a detailed analysis of the entire project. Also, you can track the budget, procure materials, and bill customers as per the invoice." },
      { title: "Analyse a Project", text: "Evaluate the project based on different parameters that include expense reports, inventory transactions, allocated budgets, utilisation rate, and success rate." },
    ],
  },
  {
    id: "manufacturing", icon: "/img/Project.svg", title: "Manufacturing",
    intro: "Designed for ease of implementation and adoption, Microsoft Dynamics 365 for Finance and Operations delivers insights at all levels of the organisation to support innovation, speeds response to changing constraints, and improves quality and customer satisfaction. Microsoft Dynamics supports integration with existing systems, lowering your total cost of ownership and future-proofing your investment through continuous delivery of new innovation.",
    items: [
      { title: "Material And Capacity Planning", text: "Optimise production and materials planning, forecasting, and scheduling. Simultaneously schedule materials and capacity. Calculate available-to-promise (ATP) and capable-to-promise (CTP) deliveries." },
      { title: "Production Scheduling", text: "Use finite or infinite scheduling, forward and backward from various dates. Quickly (re)schedule jobs and simulate alternatives by dragging Gantt chart items. Resolve scheduling overloads by reassigning operations to alternate work centers. Optimise scheduling across the organisation with a unified resource model and scheduling engine." },
      { title: "Demand Forecasting", text: <>Demand Forecasting is a lightweight, yet powerful tool that enables organisations to forecast based on historical data, leverage the power of <Link href="/products/azure-machine-learning/">Azure Machine Learning</Link>, adjust the forecasts using <Link href="/products/microsoft-dynamics-365/integration/">Microsoft Excel</Link>, and import the values into Microsoft Dynamics 365 for Finance and Operations forecast models.</> },
    ],
  },
  {
    id: "services", icon: "/img/services.png", title: "Services",
    items: [
      { title: "Cloud Service", text: "Microsoft Dynamics 365 helps IT professionals manage business growth, mitigate risk, improve organisational productivity, and deliver amazing customer experiences through tools that improve the speed of doing business." },
      { title: "Mobility", text: "The Dynamics 365 for Finance and Operations mobile app empowers your organisation to mobilise your business processes. Enable employees to perform work anytime, anywhere to keep your customers happy, increase productivity, and drive business profitability." },
      { title: "Workspace", text: "D365 for Finance and Operations provides powerful user and role-based work-spaces that connects your people with data and processes to make better decisions." },
    ],
    outro: { title: "Integrated, Flexible And Scalable Solutions", text: "Start with D365 Finance and Operations, then add more Dynamics 365 modules as you grow." },
  },
  {
    id: "asset-management", icon: "/img/Asset-Management.png", title: "Asset Management",
    intro: <><Link href="/products/dynamics-365-supply-chain-management/asset-management/">Manage all assets and jobs</Link> while establishing a stable connection with finance and operations departments. It will enable you to maintain different assets of the organisation, which include machines, equipment, and resources.</>,
    items: [
      { title: "Fault Management", text: "Track all machines and their faults until they become functional again while maintaining the work order." },
      { title: "Work Order Management", text: "Maintain all work order jobs and workflow using the advanced capabilities of Dynamics 365 Finance and Operations. Also, this lets the users automate work order management while maintaining an efficient lifecycle state." },
      { title: "Scheduling", text: "Schedule the work order jobs, maintenance processes, and asset management by building a scheduling calendar." },
    ],
  },
  {
    id: "warehouse-management", icon: "/img/warehouse-management.png", title: "Warehouse Management",
    intro: "From manufacturing to distribution, manage the entire warehouse operations of a business without any hassle. With advanced features, you can streamline all core business processes, which include quality control, manufacturing, purchase, and sales.",
    items: [
      { title: "Receive Goods", text: "Receive the goods based on the requested quantity. Report any faults and quality issues within the application to ensure customer satisfaction." },
      { title: "Move Items", text: "Move items from one location to the correct location for ease of findability." },
      { title: "Storage in the Warehouse", text: "Store the items safely while marking the exact location for fast picking whenever required." },
      { title: "Picking the Right Product", text: "Pick the item to fulfil the order from the respected location to enhance the warehouse's effectiveness." },
      { title: "Packing for Delivery", text: "Perform the safe packing of items before the shipment to ensure secure delivery." },
      { title: "Shipping", text: "Send the shipping details to the transportation company as well as the customer so that they can receive them on time." },
    ],
  },
];

const apps = [
  {
    icon: "/img/finance-icns-1.svg", title: "Dynamics 365 Finance", href: "/products/microsoft-dynamics-365-finance/",
    text: "It is an ERP solution focused on streamlining finance operations while offering sufficient tools to manage other business operations as well. It can increase your decision-making capabilities, predict future outcomes, automate core operations, reduce operational costs, and help you scale the business on a global platform. Some of its features are:",
    items: ["Cash Management", "Tax Management", "Business Accounting", "Financial Planning", "Optimise Cash Flow"],
    price: "£161.50 user/month, paid yearly.",
  },
  {
    icon: "/img/supply-chain-icons.svg", title: "Dynamics 365 Supply Chain Management", href: "/products/dynamics-365-supply-chain-management/",
    text: "D365 Supply Chain Management is also an ERP solution built for complex businesses that includes the flow of goods or services from one place to another. It supports the business from purchasing the raw materials to delivering the final product to the customer. Some of its core features are:",
    items: ["Procurement and Sourcing Management", "Supply Chain Planning", "Shop Floor Management", "Order Management", "Order Fulfilment", "Assets Management"],
    price: "£161.50 user/month,paid yearly.",
  },
];

const copilot = [
  { icon: "bi-envelope-paper", title: "Effective Communication", text: "Copilot eliminates the method of collecting data from different departments. It lets you summarise customer data and send personalised emails based on intentions to collect overdue payments." },
  { icon: "bi-heart-pulse", title: "Better Financial Health", text: "Copilot captures the entire customer data to find exciting trends and pending issues of financial health. It empowers the team to build consistent cash flow to enhance financial health." },
  { icon: "bi-speedometer2", title: "Enhance Business Productivity", text: "Eliminate recurring and manual tasks with automation to enhance overall productivity. It enables users to focus on important tasks rather than being stuck with system redundancies." },
  { icon: "bi-people", title: "Supports Team Collaboration", text: "You can integrate other business solutions in the Microsoft Dynamics 365 ecosystem to enhance performance and establish seamless collaboration between different departments." },
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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 868, "height": 487 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": { "@id": PAGE_URL + "#software" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Dynamics 365 Finance & Operations", "item": PAGE_URL }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#software",
      "name": "Microsoft Dynamics 365 Finance and Operations",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Web, Windows, iOS, Android",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "Implementing D365 Finance and Operations is the perfect option for large or diversified businesses that need to control and streamline their finances, inventory, and supply chain operations through digital means.",
      "featureList": modules.map((m) => m.title)
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "what-is-fo", label: "What is D365 F&O?" },
  { id: "features", label: "Features" },
  { id: "whats-new", label: "What's New?" },
  { id: "copilot", label: "Copilot" },
  { id: "pricing", label: "Licensing & Pricing" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const FinanceOperations = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeModule, setActiveModule] = useState(modules[0].id);

  return (
    <>
      <PageSeo
        type="WebPage"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Microsoft Dynamics 365 Finance and Operations ERP"
        extraSchema={pageSchema}
      >
        <meta property="og:image:width" content="868" />
        <meta property="og:image:height" content="487" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Dynamics 365 Finance &amp; Operations</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Dynamics 365 Finance &amp; Operations</h1>
              <p className={styles.heroLead}>Implementing D365 Finance and Operations is the perfect option for large or diversified businesses that need to control and streamline their finances, inventory, and supply chain operations through digital means.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Talk to F&amp;O Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/Dynamics-365-Finance-Banner.png" alt="Microsoft Dynamics 365 Finance and Operations dashboard" width={868} height={487} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Talk to F&O Expert" />

      {/* ===== What is F&O ===== */}
      <section id="what-is-fo" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.introCol}`}>
              <h2 className={styles.h2}>What is D365 Finance and Operations?</h2>
              <p className={styles.lead}>Microsoft Dynamics 365 for Finance and Operations, Enterprise edition, is <Link href="/products/microsoft-dynamics-365/">Microsoft&apos;s business application</Link> for enterprises that enables people to make smarter decisions quickly through an intuitive user interface that provides access to real-time insights and intelligence. D365 Finance and Operations enables business to transform by delivering proven business logic and enabling them to redesign their business processes faster so they can innovate, get quick time to value to stay ahead of the competition.It gives businesses the flexibility to grow at their own pace and do business nearly anywhere, anytime.</p>
            </div>
          </div>
          <div className={`${styles.capGrid} mt-4`}>
            {pillars.map((p) => (
              <div className={styles.diffTile} key={p.title}>
                <i className={`bi ${p.icon}`}></i>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Free demo ===== */}
      <section className={`${styles.block} ${styles.blockTint}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5 order-2 order-lg-1 text-center">
              <Image src="/img/proffesional service side.png" alt="Free Dynamics 365 Finance and Operations demo by Dynamics Square" width={553} height={541} className={styles.mediaFlat} style={{ width: "100%", maxWidth: 460, height: "auto" }} sizes="(max-width: 991px) 90vw, 460px" />
            </div>
            <div className={`col-lg-7 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Get started with Dynamics 365 for Finance and Operations free Demo!</h2>
              <p>All decision-makers and business professionals want the best for their businesses, right? So, before choosing a solution, getting an insightful demo is always a good option. It will let you analyse the benefits of all the tools and capabilities that can help your business grow.</p>
              <p>So why not try it out and see how Dynamics 365 Finance and Operations can help your business grow?</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features (module tabs) ===== */}
      <section id="features" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics 365 Finance and Operations Features</h2>
              <p>Let&apos;s Take A Closer Look At How Finance And Operations Can Help You To Take Smarter Decisions, Transform Business Faster, And Grow At Your Pace.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Finance and Operations features">
              {modules.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  role="tab"
                  id={`tab-${m.id}`}
                  aria-selected={activeModule === m.id}
                  aria-controls={`panel-${m.id}`}
                  className={`${styles.modTab} ${activeModule === m.id ? styles.modTabActive : ""}`}
                  onClick={() => setActiveModule(m.id)}
                >
                  <Image src={m.icon} alt="" width={34} height={34} aria-hidden="true" />
                  {m.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all feature content is crawlable */}
              {modules.map((m) => (
                <div
                  key={m.id}
                  id={`panel-${m.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${m.id}`}
                  className={`${styles.modPanel}${activeModule === m.id ? "" : " d-none"}`}
                >
                  <h3>{m.title}</h3>
                  {m.intro && <p>{m.intro}</p>}
                  <ul className={styles.capList}>
                    {m.items.map((it) => (
                      <li key={it.title}>
                        <strong>{it.title}</strong>
                        <p>{it.text}</p>
                      </li>
                    ))}
                  </ul>
                  {m.outro && (
                    <div className={styles.priceBox}>
                      <strong style={{ color: "#2d2640" }}>{m.outro.title}</strong>
                      <p className="mb-0">{m.outro.text}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Get 100% process visibility and make informed decisions with Dynamics 365 Finance and Operations</h3>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Sign Up for Request a demo! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What's new ===== */}
      <section id="whats-new" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.introCol} ${styles.textCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics 365 for Finance and Operations: What&apos;s New?</h2>
              <p>D365 F&amp;O has come a long way from a simple accounting software known as <Link href="/products/microsoft-dynamics-ax/">IBM Axapta</Link> to a powerful ERP solution as Dynamics 365 Finance and Operations. But the modern ways of doing business require more capabilities to deal with changing requirements and increasing global complexity.</p>
              <p>Microsoft recognises the fact and has split D365 F&amp;O into two separate applications, <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link>. Nonetheless, most customers, business owners, and consultants are familiar with it as a whole; Finance and Operations (D365 F&amp;O).</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {apps.map((a) => (
              <article className={styles.capCard} key={a.title}>
                <Image src={a.icon} alt={`${a.title} icon`} width={64} height={64} className={styles.capIcon} style={{ width: 64, height: 64 }} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
                <ul className={styles.capList}>
                  {a.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
                <div className={styles.priceBox}>
                  <span>Pricing</span>
                  <strong>{a.price}</strong>
                </div>
                <Link href={a.href} className={styles.caseMore}>
                  See More<span className="visually-hidden"> about {a.title}</span> <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Copilot ===== */}
      <section id="copilot" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Copilot in Microsoft Finance and Operations</h2>
              <p>D365 Finance is a complex yet powerful solution where Copilot simplifies most of the operations. <Link href="/products/dynamics-365-copilot/">Microsoft Copilot</Link> in Dynamics 365 Finance and Operations offers AI-based, comprehensive support to users so that they can streamline different financial processes.</p>
            </div>
          </div>
          <div className="row align-items-center gy-5 mt-1">
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/f-and-o-copilote-side-pic.png" alt="Microsoft Copilot in Dynamics 365 Finance and Operations" width={630} height={440} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.diffGrid}>
                {copilot.map((c) => (
                  <div className={styles.diffTile} key={c.title}>
                    <i className={`bi ${c.icon}`}></i>
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Licensing & pricing + partner ===== */}
      <section id="pricing" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics 365 Finance and Operations Licensing &amp; Pricing</h2>
              <p>Currently, there is no pricing or licencing available for Dynamics 365 Finance and Operations as a whole. Because Microsoft has already separated this single solution into two powerful ERPs. So, <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain</Link> licencing are a bit different and available in different terms. However, you will be required to purchase at least 20 user licences to avail yourself of any of the solutions.</p>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-3`}>
            <div className={styles.infoCard} style={{ background: "#fff" }}>
              <i className="bi bi-calculator"></i>
              <p>Dynamics 365 Finance is a powerful ERP solution specifically designed to monitor and supercharge complex financial processes in real-time. Based on your requirements, you can access this ERP using four licencing options: Team Members, Operations Activity, Finance, and Finance Premium.</p>
            </div>
            <div className={styles.infoCard} style={{ background: "#fff" }}>
              <i className="bi bi-truck"></i>
              <p>Dynamics 365 Supply Chain comes with asset management and intelligent order management capacity and is available in three licencing options: Team Members, Operations Activity, and SCM.</p>
            </div>
          </div>

          <div className="row align-items-center gy-5" style={{ marginTop: 70 }}>
            <div className="col-lg-4 text-center">
              <Image src="/img/microosoft-partner.png" alt="Dynamics Square, Microsoft Solutions Partner for Dynamics 365 Finance and Operations" width={625} height={651} className={styles.imgFlat} style={{ width: "100%", maxWidth: 320 }} sizes="320px" />
            </div>
            <div className={`col-lg-8 ${styles.textCol}`}>
              <h2 className={styles.h2}>How Dynamics Square can be your partner of growth?</h2>
              <p>In the world of complex business scenarios, managing the financial and operational activities of a business isn&apos;t easy at all. You will need an advanced solution to deal with all issues without complicating the operations. In such a scenario, Dynamics Square is available by your side to help you analyse your business requirements and offer you a highly personalised solution that can facilitate your business growth.</p>
              <p>With <strong>500+</strong> global clients and <strong>150+</strong> <Link href="/our-services/dynamics-365-consultant/">Dynamics 365 technical consultants</Link>, we offer you our consistent and reliable support to keep you going regardless of the complexity. With a track record of <Link href="/dynamics-365-finance-implementation/">successful implementation</Link>, Dynamics Square has gained the trust of business owners while transforming their businesses towards steady growth and business scalability.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Talk to our expert &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Standardise adapting to changing market fluctuations with Dynamics 365 F&amp;O.</h3>
              <p>Accept market and customer requirements while offering optimum satisfaction. On-board Dynamics 365 for Finance and Operations experts to give your business a must needed digital transformation.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Request a Call Back &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
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
                <h2 className={styles.h2}>Have you got questions about Dynamics 365 Finance &amp; Operations?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Image src="/img/Dynamics-365-Finance-Banner.png" alt="Dynamics 365 Finance and Operations experts at Dynamics Square" width={868} height={487} sizes="(max-width: 991px) 100vw, 360px" />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Talk to F&amp;O Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
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
        title="Get Started with Microsoft Dynamics 365 Finance and Operations"
        intro="Case studies, e-books, podcasts, videos and blogs to help you explore D365 Finance and Operations."
        tabs={foResources}
      />

      {/* ===== Internal links ===== */}
      <RelatedLinks links={foLinks} documents={foDocuments} />
      <TimerModal />
    </>
  );
};

export default FinanceOperations;
