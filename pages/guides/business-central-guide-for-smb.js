import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import s from "../../styles/bcVsSapTwo.module.css";
import g from "../../styles/bcGuideTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import PageSeo from "../../components/PageSeo";
import FormGuide from "../../components/FormGuide";

// Business Central guide for SMBs, "-two" template layout. Previous design kept (noindexed) at /guides/business-central-guide-for-smb-old/.
// Generated from "Microsoft Dynamics 365 Business Central The Complete Guide for SMBs (2026)".

const PAGE_TITLE = "Dynamics 365 Business Central For Small & Medium Business [Guide 2026]";
const PAGE_DESC = "Learn how Dynamics 365 Business Central helps for small & Medium businesses streamline operations, boost productivity, and drive growth efficiently.";
const H1 = "Microsoft Dynamics 365 Business Central: The Complete Guide for SMBs";

const INTRO = [
  <>Microsoft Dynamics 365 Business Central is Microsoft's ERP for small and mid-sized businesses. It replaces separate accounting, stock, sales and project tools with one system that runs finance and operations from the same data.</>,
  <>This guide is written for UK owners, CEOs, Finance Directors and IT managers who are deciding whether Business Central fits their business. It covers what the product does, what it costs in the UK, how Copilot and AI agents work, how implementation and migration run, and where Business Central is not the right choice. Facts are checked against Microsoft documentation as of November 2026 and the current release, version 29 (2026 release wave 2).</>,
];

const GLANCE_TITLE = "Business Central at a glance";
const GLANCE = [
  { q: "What is it?", a: <>A cloud ERP covering finance, sales, purchasing, inventory, warehousing, projects, manufacturing and service</> },
  { q: "Who is it for?", a: <>Growing SMBs that have outgrown entry-level accounting software such as Sage 50, Xero or QuickBooks</> },
  { q: "How is it deployed?", a: <>Mainly as SaaS on Microsoft Azure; on-premises is still available on subscription</> },
  { q: "UK price (list, ex VAT, billed annually)", a: <>Essentials £61.50, Premium £84.60, Team Members £6.20 per user per month</> },
  { q: "Is Copilot included?", a: <>Yes, Copilot features are included in the online licence. Autonomous AI agents are billed separately by usage</> },
  { q: "How often is it updated?", a: <>Two major updates a year (April and October) plus monthly minor updates</> },
  { q: "UK compliance", a: <>Built-in Making Tax Digital for VAT; e-invoicing framework ahead of the UK's April 2029 mandate</> },
  { q: "Typical implementation", a: <>Weeks for a simple finance-led rollout; several months for multi-entity, manufacturing or heavy integration</> },
];
const GLANCE_CALLOUT = <>If you already know Business Central is on your shortlist and want a scoped estimate, <Link href="/contact-us/">speak to a Business Central consultant</Link> at Dynamics Square.</>;

const CHAPTERS = [
  {
    id: "what-is-business-central",
    nav: "What is BC",
    title: "What is Business Central and how it works",
    toc: [
      { id: "what-is-microsoft-dynamics-365-business-central", title: "What is Microsoft Dynamics 365 Business Central?", level: 3 },
      { id: "where-business-central-came-from", title: "Where Business Central came from", level: 4 },
      { id: "who-business-central-is-for", title: "Who Business Central is for", level: 4 },
      { id: "business-central-editions", title: "Business Central editions", level: 4 },
      { id: "how-business-central-works-architecture-explained", title: "How Business Central works: architecture explained", level: 3 },
      { id: "tenants-environments-and-companies", title: "Tenants, environments and companies", level: 4 },
      { id: "the-application-layers", title: "The application layers", level: 4 },
      { id: "how-users-and-systems-connect", title: "How users and systems connect", level: 4 },
      { id: "how-updates-work", title: "How updates work", level: 4 },
    ],
    blocks: [
      { t: "h", level: 3, id: "what-is-microsoft-dynamics-365-business-central", text: <>What is Microsoft Dynamics 365 Business Central?</> },
      { t: "answer", text: <>Microsoft Dynamics 365 Business Central is a cloud-based enterprise resource planning (ERP) system for small and mid-sized businesses. It manages financials, sales, purchasing, inventory, warehousing, projects, manufacturing and service in one database, with Microsoft Copilot built in.</> },
      { t: "p", text: <>In practical terms, Business Central gives a growing company one version of the truth. A sales order reserves stock, triggers a purchase if stock is short, posts revenue and cost to the general ledger, and feeds the cash flow forecast, without anyone re-keying data between systems.</> },
      { t: "figure", src: "/img/chapter1-9.png", w: 733, h: 449, alt: "Business Central as one cloud ERP connecting finance, sales, inventory, customer service and HR" },
      { t: "h", level: 4, id: "where-business-central-came-from", text: <>Where Business Central came from</> },
      { t: "p", text: <>Business Central is the successor to Microsoft Dynamics NAV, which began life as Navision. Microsoft launched Business Central in 2018, carrying NAV's proven accounting and operations logic onto a modern cloud platform. Many UK businesses still run NAV, which is why the <Link href="/dynamics-nav-to-business-central/">NAV to Business Central upgrade</Link> is one of the most common projects in the Microsoft SMB market.</> },
      { t: "h", level: 4, id: "who-business-central-is-for", text: <>Who Business Central is for</> },
      { t: "p", text: <>Business Central suits organisations that need more than an accounting package but less than a large-enterprise ERP. Typical fits include:</> },
      { t: "list", ordered: false, items: [
        <>Companies with 5 to several hundred users that have outgrown Sage 50, Xero or QuickBooks.</>,
        <>Distributors, wholesalers and e-commerce businesses managing stock across locations.</>,
        <>Small and mid-sized manufacturers (with the Premium licence).</>,
        <>Project-based and professional services firms that need job costing and time recording.</>,
        <>Multi-company groups that need intercompany postings and consolidation.</>,
      ] },
      { t: "p", text: <>Microsoft does not set a hard user limit. Very large or highly complex global operations usually fit <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> and Supply Chain Management better; the comparison section later in this guide explains where that line sits.</> },
      { t: "h", level: 4, id: "business-central-editions", text: <>Business Central editions</> },
      { t: "p", text: <>There are two full-user editions. <b>Essentials</b> covers finance, sales, purchasing, inventory, warehousing, projects and basic HR. <b>Premium</b> adds manufacturing and service management. Light users can be licensed as <b>Team Members</b>. Licensing is covered in detail in the pricing section, and you can explore the product further on our <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central overview</Link>.</> },
      { t: "h", level: 3, id: "how-business-central-works-architecture-explained", text: <>How Business Central works: architecture explained</> },
      { t: "p", text: <>Business Central online is software as a service (SaaS) hosted by Microsoft on Azure. Microsoft runs the servers, database, backups, security patching and version updates; your business configures and uses the application. For UK customers, environment data is stored in Microsoft's UK Azure regions.</> },
      { t: "h", level: 4, id: "tenants-environments-and-companies", text: <>Tenants, environments and companies</> },
      { t: "cards", items: [
        { title: <>Tenant</>, text: <>your organisation's Microsoft cloud account, managed through Microsoft Entra ID (formerly Azure Active Directory).</> },
        { title: <>Environments</>, text: <>separate instances of Business Central. Each subscription includes one production environment and three sandbox environments for testing and training.</> },
        { title: <>Companies</>, text: <>separate legal entities inside an environment, each with its own ledger, so a group can run several UK and overseas entities in one place.</> },
      ] },
      { t: "h", level: 4, id: "the-application-layers", text: <>The application layers</> },
      { t: "p", text: <>Business Central is built in layers, which is why it can be tailored without breaking upgrades:</> },
      { t: "steps", items: [
        { title: <>Base application</>, text: <>Microsoft's standard ERP functionality.</> },
        { title: <>Localisation</>, text: <>country-specific features. From version 27, the UK localisation runs as a set of extensions on top of the worldwide base app.</> },
        { title: <>AppSource apps</>, text: <>certified add-ons from independent software vendors (ISVs) for document capture, warehouse scanning, payroll links, EDI and more.</> },
        { title: <>Per-tenant extensions</>, text: <>your own customisations, written in Microsoft's AL language.</> },
      ] },
      { t: "p", text: <>Because customisations sit in extensions rather than inside Microsoft's code, they survive Microsoft's updates far better than the modified code bases common in older NAV systems. That is the single biggest technical difference between NAV and Business Central. If you need tailored functionality, see our approach to <Link href="/products/dynamics-365-business-central/customisation/">Business Central customisation</Link>.</> },
      { t: "figure", src: "/img/business-central-architecture-layers.png", w: 1344, h: 784, alt: "Business Central architecture showing the four application layers: base application, localisation, AppSource apps and per-tenant extensions", captionTitle: "Business Central architecture · 4 application layers", caption: <>People and connected systems work against the same environment, while your own customisations stay separate from Microsoft's code.</> },
      { t: "h", level: 4, id: "how-users-and-systems-connect", text: <>How users and systems connect</> },
      { t: "cards", items: [
        { title: <>People</>, text: <>web browser, Windows, iOS and Android apps, plus Microsoft Teams, Outlook and Excel.</> },
        { title: <>Systems</>, text: <>REST APIs and OData, Power Platform connectors, Dataverse, and, since version 29, an MCP (Model Context Protocol) server that lets approved AI tools run data queries against Business Central.</> },
        { title: <>Legacy integrations</>, text: <>version 29 makes disabling SOAP web services on Microsoft UI pages mandatory. Older integrations that depended on them need to move to APIs.</> },
      ] },
      { t: "h", level: 4, id: "how-updates-work", text: <>How updates work</> },
      { t: "p", text: <>Microsoft ships two major updates a year, in April and October, called release waves. Monthly minor updates add features, regulatory changes and fixes in between. For a major update, administrators can schedule the upgrade on any date within a five-month window, which allows time to test extensions in a sandbox first.</> },
      { t: "p", text: <>Since September 2026, Microsoft no longer publishes Business Central release plans. New capabilities are announced on Microsoft's AI at Work roadmap instead, so check that roadmap rather than older release-plan pages.</> },
    ],
  },
  {
    id: "features-and-reporting",
    nav: "Features & Reporting",
    title: "Business Central features, reporting and analytics",
    toc: [
      { id: "business-central-features-and-capabilities", title: "Business Central features and capabilities", level: 3 },
      { id: "essentials-vs-premium-what-each-licence-includes", title: "Essentials vs Premium: what each licence includes", level: 4 },
      { id: "financial-management-and-accounting", title: "Financial management and accounting", level: 4 },
      { id: "sales-and-customer-relationship-management", title: "Sales and customer relationship management", level: 4 },
      { id: "purchasing-and-vendor-management", title: "Purchasing and vendor management", level: 4 },
      { id: "inventory-and-warehouse-management", title: "Inventory and warehouse management", level: 4 },
      { id: "supply-chain-planning", title: "Supply chain planning", level: 4 },
      { id: "manufacturing-premium", title: "Manufacturing (Premium)", level: 4 },
      { id: "project-management-and-job-costing", title: "Project management and job costing", level: 4 },
      { id: "service-management-premium", title: "Service management (Premium)", level: 4 },
      { id: "human-resources-and-expenses", title: "Human resources and expenses", level: 4 },
      { id: "sustainability-management", title: "Sustainability management", level: 4 },
      { id: "e-commerce-and-shopify", title: "E-commerce and Shopify", level: 4 },
      { id: "reporting-analytics-and-power-bi", title: "Reporting, analytics and Power BI", level: 3 },
      { id: "whats-new-in-reporting-in-version-29", title: "What's new in reporting in version 29", level: 4 },
      { id: "power-bi-integration", title: "Power BI integration", level: 4 },
    ],
    blocks: [
      { t: "h", level: 3, id: "business-central-features-and-capabilities", text: <>Business Central features and capabilities</> },
      { t: "p", text: <>Business Central's standard functionality covers most of what an SMB needs to run finance and operations. This section explains each area in business terms, flags which licence it needs, and notes where businesses usually add an extension. For a module-by-module overview, see <Link href="/products/dynamics-365-business-central/advantages-capabilities/">Business Central capabilities</Link>.</> },
      { t: "figure", src: "/img/chapter4-1.png", w: 754, h: 494, alt: "Business Central modules: finance, supply chain, sales, service, manufacturing, warehouse, human resources and expense management" },
      { t: "h", level: 4, id: "essentials-vs-premium-what-each-licence-includes", text: <>Essentials vs Premium: what each licence includes</> },
      {
        t: "table",
        headText: ["Capability","Essentials","Premium"],
        head: [<>Capability</>, <>Essentials</>, <>Premium</>],
        rows: [
          [<>Financial management, VAT, multi-currency, consolidation</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Sales, purchasing and basic CRM</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Inventory, multiple locations, lot and serial tracking</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Warehouse management (bins, picks, put-aways, shipments)</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Supply planning, demand forecasting, assembly</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Project management and time sheets</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Basic HR records</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Shopify connector, e-documents, sustainability management</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Copilot in Business Central</>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Manufacturing (production orders, routings, capacity planning)</>, <><span className={g.no}><i className="bi bi-dash-lg" aria-hidden="true"></i>No</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
          [<>Service management (service items, contracts, dispatching)</>, <><span className={g.no}><i className="bi bi-dash-lg" aria-hidden="true"></i>No</span></>, <><span className={g.yes}><i className="bi bi-check-lg" aria-hidden="true"></i>Yes</span></>],
        ],
      },
      { t: "p", text: <>Microsoft's licensing guide defines Premium as everything in Essentials plus service order management and manufacturing. The edition is set per environment, so you cannot give some full users Premium and others Essentials in the same environment.</> },
      { t: "h", level: 4, id: "financial-management-and-accounting", text: <>Financial management and accounting</> },
      { t: "p", text: <>Finance is the core of Business Central and the main reason most SMBs move to it. Standard capabilities include:</> },
      { t: "list", ordered: false, items: [
        <>General ledger with dimensions for analysis by department, project, region or any other driver.</>,
        <>Accounts payable and receivable, payment journals, reminders and finance charges.</>,
        <>VAT management, including UK Making Tax Digital submission.</>,
        <>Bank reconciliation, with Copilot suggesting matches.</>,
        <>Multi-currency, intercompany postings and group consolidation.</>,
        <>Budgets, cash flow forecasts, deferrals and allocation accounts.</>,
        <>Fixed assets, including depreciation, insurance and maintenance.</>,
        <>Subscription billing with revenue and expense recognition, for recurring-revenue businesses.</>,
        <>Financial reporting (formerly "account schedules") for management accounts and board packs.</>,
      ] },
      { t: "note", label: "Example:", text: <>a UK group with three trading companies and a euro subsidiary posts intercompany recharges automatically, revalues currency balances at month end and runs a consolidated P&amp;L without exporting to spreadsheets. Our guide to <Link href="/blog/multi-entity-multi-currency-consolidation-in-business-central/">multi-entity and multi-currency consolidation</Link> explains the setup, and the <Link href="/products/dynamics-365-business-central/financial-management/">financial management module</Link> page covers the full feature list.</> },
      { t: "h", level: 4, id: "sales-and-customer-relationship-management", text: <>Sales and customer relationship management</> },
      { t: "p", text: <>Business Central handles the full quote-to-cash process: quotes, blanket orders, sales orders, partial shipments, invoicing, returns and credit notes. Price lists and discounts can be set by customer, group, campaign, quantity or date. Copilot can suggest sales lines from a plain-language request or an attached file.</> },
      { t: "p", text: <>Built-in CRM covers contacts, interaction history, campaigns, segmentation and opportunity tracking, with Outlook integration. That is enough for many SMBs. Businesses with larger sales teams, pipeline forecasting or marketing automation needs usually integrate <Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</Link>. Read more about <Link href="/blog/crm-functionality-in-dynamics-365-business-central/">CRM functionality in Business Central</Link> and <Link href="/products/dynamics-365-business-central/sales-order-management/">sales order management</Link>.</> },
      { t: "h", level: 4, id: "purchasing-and-vendor-management", text: <>Purchasing and vendor management</> },
      { t: "p", text: <>Purchasing covers vendor records, purchase quotes, blanket and standard orders, returns, approvals, vendor price lists and invoice discounts. Item charges let you add freight, duty and insurance to stock cost for accurate landed cost. Drop shipments and special orders support businesses that ship direct from suppliers.</> },
      { t: "p", text: <>For inbound invoices, the Payables Agent (covered in the Copilot section) can read PDF vendor invoices and prepare draft purchase invoices matched to purchase order lines for human approval.</> },
      { t: "h", level: 4, id: "inventory-and-warehouse-management", text: <>Inventory and warehouse management</> },
      { t: "p", text: <>Inventory control includes items, variants, stock-keeping units, multiple locations, transfers, lot and serial number tracking, item attributes and substitutions, and physical counts. Costing methods include FIFO, LIFO, average, standard and specific.</> },
      { t: "p", text: <>Warehousing scales from simple to advanced on the same licence:</> },
      { t: "cards", items: [
        { title: <>Basic</>, text: <>inventory picks and put-aways at a location.</> },
        { title: <>Advanced</>, text: <>bins, warehouse receipts and shipments, directed put-away and pick, cross-docking and FEFO (first expired, first out) picking.</> },
      ] },
      { t: "p", text: <>High-volume warehouses typically add handheld scanning. Tasklet Factory's <Link href="/wms-for-business-central/">Mobile WMS for Business Central</Link> is a widely used third-party option.</> },
      { t: "h", level: 4, id: "supply-chain-planning", text: <>Supply chain planning</> },
      { t: "p", text: <>Planning tools help you buy and make the right quantities at the right time:</> },
      { t: "list", ordered: false, items: [
        <>Planning and requisition worksheets that calculate supply from demand, reorder policies and lead times.</>,
        <>Demand forecasts and reservations.</>,
        <>Order promising, using available-to-promise and capable-to-promise logic.</>,
        <>Assembly management, including assemble-to-order, on Essentials.</>,
      ] },
      { t: "p", text: <>The <Link href="/products/dynamics-365-business-central/supply-chain-management/">Business Central supply chain management</Link> page covers these features in more depth.</> },
      { t: "h", level: 4, id: "manufacturing-premium", text: <>Manufacturing (Premium)</> },
      { t: "p", text: <>The Premium licence adds production bills of materials, routings, work and machine centres, production orders, capacity planning, finite loading, version management and standard cost worksheets. Version 29 strengthened subcontracting, including carrying subcontracting instructions onto purchase orders and using inventory picks for subcontracted work.</> },
      { t: "p", text: <>Business Central also includes quality management for inspections on purchase receipts, production output and assembly output; version 29 reduced manual work in quality tests. Business Central suits discrete and light process manufacturing. Manufacturers with complex process, formula or regulated batch requirements often add an industry extension; see <Link href="/industries/business-central-for-process-manufacturing/">Business Central for process manufacturing</Link>.</> },
      { t: "h", level: 4, id: "project-management-and-job-costing", text: <>Project management and job costing</> },
      { t: "p", text: <>Projects (previously called "jobs") let you set up tasks, budgets and resources, record time through time sheets, calculate work in progress (WIP), and invoice on fixed-price or time-and-materials terms. Project managers see budget versus actual cost and profitability in real time. Learn more about <Link href="/products/dynamics-365-business-central/project-management/">Business Central project management</Link>.</> },
      { t: "h", level: 4, id: "service-management-premium", text: <>Service management (Premium)</> },
      { t: "p", text: <>Service management tracks service items, service contracts and warranties, service orders and repairs, dispatching, and service pricing. It integrates with <Link href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service</Link> for businesses that need mobile technician scheduling. Field Service is a separate Dynamics 365 application with its own licence. See <Link href="/products/dynamics-365-business-central/service-management/">Business Central service management</Link>.</> },
      { t: "h", level: 4, id: "human-resources-and-expenses", text: <>Human resources and expenses</> },
      { t: "p", text: <>Business Central includes basic HR: employee records, contracts, qualifications, absence registration and employee expense reimbursement. <b>It does not include UK payroll.</b> UK businesses run payroll in a dedicated payroll product and post journals into Business Central, or use a certified integration.</> },
      { t: "p", text: <>For expenses, Microsoft's Expense Agent is in public preview, and established add-ons such as <Link href="/continia-expense-management/">Continia Expense Management</Link> are available today.</> },
      { t: "h", level: 4, id: "sustainability-management", text: <>Sustainability management</> },
      { t: "p", text: <>Business Central includes sustainability management for recording greenhouse gas emissions across scopes 1, 2 and 3, tracking water and waste, and reporting ESG figures. Version 29 extended carbon footprint tracking to fixed assets, item journals, purchase documents and service management. This matters for SMBs that supply large UK corporates and public bodies, which increasingly ask suppliers for emissions data.</> },
      { t: "h", level: 4, id: "e-commerce-and-shopify", text: <>E-commerce and Shopify</> },
      { t: "p", text: <>The standard Shopify connector synchronises items, prices, stock, customers and orders between Shopify and Business Central. Version 29 added management of Shopify B2B companies, catalogues and pricing, plus handling of order changes, exchanges and refunds. See our <Link href="/shopify-connector-business-central/">Shopify connector for Business Central</Link>. For B2B portals beyond Shopify, <Link href="/sana-commerce-for-dynamics-365-business-central/">Sana Commerce</Link> is a common choice.</> },
      { t: "h", level: 3, id: "reporting-analytics-and-power-bi", text: <>Reporting, analytics and Power BI</> },
      { t: "p", text: <>Business Central gives SMBs four layers of reporting, from quick answers inside the app to group-wide dashboards. Most businesses use all four.</> },
      {
        t: "table",
        headText: ["Layer","What it does","Typical user"],
        head: [<>Layer</>, <>What it does</>, <>Typical user</>],
        rows: [
          [<>Role Centres and KPIs</>, <>Live tiles and charts on each user's home page, such as overdue invoices, stock below reorder point or cash position</>, <>Everyone</>],
          [<>Analysis mode and Copilot analysis assist</>, <>Pivot-style grouping, filtering and totals on any list, with Copilot building an analysis from a plain-English request</>, <>Finance, operations, managers</>],
          [<>Financial reporting and Excel</>, <>Management accounts, board packs and statutory views; "Open in Excel" and Excel layouts for ad hoc work</>, <>Finance team</>],
          [<>Power BI</>, <>Interactive dashboards across Business Central and other data sources</>, <>Directors, finance, operations leads</>],
        ],
      },
      { t: "figure", src: "/img/chapter1-10.png", w: 580, h: 537, alt: "Business Central Role Centre KPIs and analytics shown on tablets" },
      { t: "h", level: 4, id: "whats-new-in-reporting-in-version-29", text: <>What's new in reporting in version 29</> },
      { t: "list", ordered: false, items: [
        <>Financial report definition changes are now always logged, and you can trace where each G/L account is used across reports. This supports audit trails for management reporting.</>,
        <>Several financial reports can be run together into a single PDF, which speeds up month-end packs.</>,
        <>Report output can be automated, and document reports (invoices, statements) can be branded with report themes using the updated Word add-in.</>,
        <>List views and analysis tabs can be bookmarked for reuse.</>,
      ] },
      { t: "h", level: 4, id: "power-bi-integration", text: <>Power BI integration</> },
      { t: "p", text: <>Microsoft publishes Power BI apps for Business Central covering finance, sales, purchasing, inventory, projects and manufacturing, plus a Subscription Billing app. Reports can be embedded in Business Central Role Centres so users see them without switching tools. Users who view shared Power BI content generally need their own Power BI licence or access through capacity-based licensing; check this when budgeting.</> },
      { t: "p", text: <>For groups that combine Business Central with CRM, e-commerce or legacy data, <Link href="/ai-solutions/microsoft-fabric/">Microsoft Fabric</Link> provides a governed analytics layer above individual systems.</> },
      { t: "p", text: <>See our <Link href="/products/microsoft-power-bi/">Power BI services</Link> and examples of <Link href="/blog/power-bi-reports/">Power BI reports for finance and operations</Link>.</> },
    ],
  },
  {
    id: "copilot-and-integrations",
    nav: "Copilot & Integrations",
    title: "Copilot, AI agents and integrations",
    toc: [
      { id: "microsoft-copilot-and-ai-agents-in-business-central", title: "Microsoft Copilot and AI agents in Business Central", level: 3 },
      { id: "copilot-features-assistance-inside-everyday-tasks", title: "Copilot features: assistance inside everyday tasks", level: 4 },
      { id: "ai-agents-work-done-on-your-behalf", title: "AI agents: work done on your behalf", level: 4 },
      { id: "how-agent-billing-works", title: "How agent billing works", level: 4 },
      { id: "data-protection-and-governance", title: "Data protection and governance", level: 4 },
      { id: "how-to-get-value-from-ai-without-losing-control", title: "How to get value from AI without losing control", level: 4 },
      { id: "integrations-microsoft-365-power-platform-and-third-party-apps", title: "Integrations: Microsoft 365, Power Platform and third-party apps", level: 3 },
      { id: "microsoft-365-outlook-excel-teams-and-word", title: "Microsoft 365: Outlook, Excel, Teams and Word", level: 4 },
      { id: "microsoft-power-platform", title: "Microsoft Power Platform", level: 4 },
      { id: "third-party-apps-and-extensions-appsource", title: "Third-party apps and extensions (AppSource)", level: 4 },
      { id: "apis-edi-and-e-documents", title: "APIs, EDI and e-documents", level: 4 },
    ],
    blocks: [
      { t: "h", level: 3, id: "microsoft-copilot-and-ai-agents-in-business-central", text: <>Microsoft Copilot and AI agents in Business Central</> },
      { t: "p", text: <><b>Copilot in Business Central is included with Business Central online licences at no extra cost. Autonomous AI agents, such as the Sales Order Agent and Payables Agent, are billed separately by usage in Copilot Credits.</b> That distinction is the most important thing to understand when budgeting for AI in Business Central.</> },
      { t: "p", text: <>Copilot is available in Business Central online only. On-premises deployments do not get Copilot or agents.</> },
      { t: "h", level: 4, id: "copilot-features-assistance-inside-everyday-tasks", text: <>Copilot features: assistance inside everyday tasks</> },
      { t: "p", text: <>Copilot features help users complete work faster, but a person stays in control of every step:</> },
      { t: "cards", items: [
        { title: <>Sales line suggestions</>, text: <>builds sales lines from a plain-language request or an attached file.</> },
        { title: <>Bank reconciliation assist</>, text: <>proposes matches between bank statement lines and ledger entries.</> },
        { title: <>Analysis assist</>, text: <>creates grouped and filtered analysis views from a typed question.</> },
        { title: <>Marketing text</>, text: <>drafts product descriptions from item attributes for web shops and catalogues.</> },
        { title: <>Item substitutions and number series suggestions</>, text: <>speeds up master data setup.</> },
        { title: <>E-document matching</>, text: <>suggests links between incoming vendor e-invoices and purchase order lines.</> },
        { title: <>Microsoft Copilot chat</>, text: <>in version 29, the earlier "Chat with Copilot" is being replaced by a Microsoft Copilot chat experience, currently in public preview, that answers questions about your Business Central data and how to use the product.</> },
      ] },
      { t: "h", level: 4, id: "ai-agents-work-done-on-your-behalf", text: <>AI agents: work done on your behalf</> },
      { t: "p", text: <>Agents go further than Copilot. They monitor an inbox or a queue, carry out multi-step tasks, and hand results to a human supervisor for review.</> },
      {
        t: "table",
        headText: ["Agent","Status (Nov 2026)","What it does","Human checkpoint"],
        head: [<>Agent</>, <>Status (Nov 2026)</>, <>What it does</>, <>Human checkpoint</>],
        rows: [
          [<>Sales Order Agent</>, <>Generally available</>, <>Reads customer emails in a shared mailbox, checks availability, creates sales quotes and orders, drafts replies</>, <>Staff review the quote, order and email before anything is sent</>],
          [<>Payables Agent</>, <>Generally available</>, <>Reads PDF vendor invoices from a shared mailbox, creates purchase document drafts and matches them to purchase order lines</>, <>Finance reviews drafts before approval and posting</>],
          [<>Expense Agent</>, <>Public preview</>, <>Reads uploaded receipts, categorises expenses and prepares expense reports</>, <>Managers approve expense reports</>],
          [<>Custom agents (agent design)</>, <>Preview</>, <>Lets organisations design their own agents in plain language, with set permissions</>, <>Defined by the agent design</>],
        ],
      },
      { t: "p", text: <>Version 29 made agents easier to supervise: a dedicated task pane for all agent tasks, review of agent-generated content directly on pages, notifications on lists, and simpler agent permissions. Version 29 also improved purchase order matching in the Payables Agent.</> },
      { t: "p", text: <>Read our explainer on the <Link href="/blog/sales-order-agent-explained-features-setup-and-benefits/">Sales Order Agent</Link> and why <Link href="/blog/why-are-ai-agents-the-game-changer-for-business-central-users/">AI agents matter for Business Central users</Link>.</> },
      { t: "h", level: 4, id: "how-agent-billing-works", text: <>How agent billing works</> },
      { t: "p", text: <>Microsoft publishes Copilot Credit rates for each agent action. At the time of writing:</> },
      {
        t: "table",
        headText: ["Agent","Billing basis","Worked example (based on Microsoft's published rates)"],
        head: [<>Agent</>, <>Billing basis</>, <>Worked example (based on Microsoft's published rates)</>],
        rows: [
          [<>Sales Order Agent</>, <>2 credits to analyse an email or generate a reply; 5 credits per availability check, quote or order action, or attachment with sales data</>, <>100 requests a month, half with an order attachment = 1,650 credits a month</>],
          [<>Payables Agent</>, <>50 credits per invoice plus 5 credits per invoice line</>, <>100 invoices a month with 3 lines each = 6,500 credits a month</>],
          [<>Expense Agent</>, <>50 credits per uploaded receipt</>, <>200 receipts a month = 10,000 credits a month</>],
        ],
      },
      { t: "p", text: <>Credits are bought in advance as Copilot Credit packs or paid for monthly through pay-as-you-go via an Azure subscription; both can be used together, and prepaid capacity is consumed first. If capacity runs out, the agent stops until more is added, so set budgets and monitor usage in the Power Platform admin center. Check Microsoft's current Copilot Studio pricing for the per-credit cost in your currency.</> },
      { t: "h", level: 4, id: "data-protection-and-governance", text: <>Data protection and governance</> },
      { t: "p", text: <>Copilot respects Business Central permissions, so users only see data they are allowed to see. For UK-hosted environments, Copilot processing takes place within the UK geography. Some features may rely on Azure OpenAI services in another geography and are only available if an administrator consents to that data movement, so review the Copilot and agent capabilities page before switching features on.</> },
      { t: "p", text: <>Since version 29, Business Central also provides an MCP server for running data queries. This allows approved AI assistants and tools to query Business Central data under your security model, which is worth planning into your AI governance policy.</> },
      { t: "h", level: 4, id: "how-to-get-value-from-ai-without-losing-control", text: <>How to get value from AI without losing control</> },
      { t: "list", ordered: true, items: [
        <>Pick one high-volume, rules-based process, such as emailed purchase orders or PDF supplier invoices.</>,
        <>Measure today's baseline: volume, minutes per document and error rate.</>,
        <>Clean the master data the agent relies on (items, prices, vendors, units of measure).</>,
        <>Run the agent in a sandbox, then in production with a named supervisor and a credit budget.</>,
        <>Compare cost per document and cycle time after 60 to 90 days before expanding.</>,
      ] },
      { t: "p", text: <>For real-world estimates, see <Link href="/blog/copilot-business-central-time-savings/">how much time Copilot can save in Business Central</Link>. Dynamics Square's <Link href="/products/dynamics-365-copilot/">Copilot and AI agent services</Link> cover readiness checks, mailbox and permission setup, billing configuration and supervisor training, and our <Link href="/ai-solutions/copilot-studio/">Copilot Studio</Link> team builds custom agents when standard ones do not fit.</> },
      { t: "h", level: 3, id: "integrations-microsoft-365-power-platform-and-third-party-apps", text: <>Integrations: Microsoft 365, Power Platform and third-party apps</> },
      { t: "p", text: <>Business Central's biggest practical advantage over most SMB ERPs is how closely it works with the Microsoft tools your staff already use every day.</> },
      { t: "h", level: 4, id: "microsoft-365-outlook-excel-teams-and-word", text: <>Microsoft 365: Outlook, Excel, Teams and Word</> },
      { t: "cards", items: [
        { title: <>Outlook</>, text: <>see a customer's or vendor's balance and documents alongside an email, and create quotes, orders or invoices without leaving the inbox.</> },
        { title: <>Excel</>, text: <>open any list in Excel, edit and publish data back with the Excel add-in, and design reports with Excel layouts.</> },
        { title: <>Teams</>, text: <>share a live Business Central record card in a chat or channel. When an administrator enables it, colleagues with an eligible Microsoft 365 licence can read records shared with them in Teams without a Business Central licence. This access is read-only and requires at least one licensed Business Central user in the organisation.</> },
        { title: <>Word</>, text: <>design branded invoices, statements and other document layouts with the Word add-in, which was updated in version 29.</> },
        { title: <>OneDrive and SharePoint</>, text: <>store and share files and attachments linked to Business Central records.</> },
      ] },
      { t: "figure", src: "/img/chapter7-1.png", w: 925, h: 549, alt: "A Business Central sales invoice shared as a live record in a Microsoft Teams channel" },
      { t: "h", level: 4, id: "microsoft-power-platform", text: <>Microsoft Power Platform</> },
      { t: "cards", items: [
        { title: <><Link href="/products/microsoft-power-automate/">Power Automate</Link></>, text: <>automates approvals, notifications and cross-system workflows using the Business Central connector.</> },
        { title: <><Link href="/products/microsoft-power-apps/">Power Apps</Link></>, text: <>builds focused mobile or web apps, such as a site-visit app or a goods-in checklist, on top of Business Central data.</> },
        { title: <>Dataverse</>, text: <>connects Business Central with Dynamics 365 Sales, Customer Service and Field Service. Version 29 makes it easier to map new Dataverse fields into Business Central.</> },
        { title: <>Copilot Studio</>, text: <>builds custom agents and conversational experiences connected to Business Central.</> },
      ] },
      { t: "p", text: <>Our guide to <Link href="/blog/business-central-with-power-platform-integration/">integrating Business Central with Power Platform</Link> shows common patterns, and our <Link href="/products/microsoft-power-platform/">Microsoft Power Platform</Link> team delivers them.</> },
      { t: "h", level: 4, id: "third-party-apps-and-extensions-appsource", text: <>Third-party apps and extensions (AppSource)</> },
      { t: "p", text: <>Microsoft AppSource offers a large catalogue of Business Central apps from independent software vendors. Extensions are the normal way to add specialist functionality without custom code. Common categories for UK SMBs include:</> },
      {
        t: "table",
        headText: ["Need","Typical extension","Dynamics Square resource"],
        head: [<>Need</>, <>Typical extension</>, <>Dynamics Square resource</>],
        rows: [
          [<>Supplier invoice capture and approval</>, <>Document capture and OCR</>, <><Link href="/continia-document-capture-with-business-central/">Continia Document Capture</Link></>],
          [<>Bank feeds and payments</>, <>Open banking and payment integration</>, <><Link href="/yavrio-integration-with-business-central/">Yavrio integration</Link></>],
          [<>Warehouse scanning</>, <>Mobile warehouse management</>, <><Link href="/wms-for-business-central/">Tasklet Mobile WMS</Link></>],
          [<>Distribution and shipping</>, <>Inventory, shipping and field apps</>, <><Link href="/insights-works-for-dynamics-365-business-central/">Insight Works</Link></>],
          [<>B2B and B2C web shops</>, <>E-commerce platforms</>, <><Link href="/shopify-connector-business-central/">Shopify connector</Link> and Sana Commerce</>],
          [<>UK payroll</>, <>Payroll integration</>, <>Third-party payroll with journal integration</>],
          [<>Document management</>, <>Document workflows and archiving</>, <><Link href="/continia-for-dynamics-365-business-central/">Continia for Business Central</Link></>],
        ],
      },
      { t: "h", level: 4, id: "apis-edi-and-e-documents", text: <>APIs, EDI and e-documents</> },
      { t: "p", text: <>Business Central exposes REST APIs for integration with other systems, and the E-Documents framework supports electronic invoice formats such as Peppol. Version 29 added EDI document exchange in public preview, which matters for suppliers to large retailers and distributors.</> },
      { t: "note", label: "Good practice:", text: <>choose an established AppSource app before commissioning custom code, confirm the vendor supports each new Business Central release, and build new integrations on APIs rather than legacy SOAP web services.</> },
    ],
  },
  {
    id: "cloud-vs-on-premises",
    nav: "Cloud vs On-premises",
    title: "Business Central cloud vs on-premises",
    toc: [
      { id: "the-deployment-options", title: "The deployment options", level: 3 },
      { id: "side-by-side-comparison", title: "Side-by-side comparison", level: 3 },
      { id: "points-existing-on-premises-customers-should-know", title: "Points existing on-premises customers should know", level: 3 },
      { id: "when-on-premises-can-still-make-sense", title: "When on-premises can still make sense", level: 3 },
    ],
    blocks: [
      { t: "p", text: <><b>For most UK SMBs starting today, Business Central online (SaaS) is the right choice.</b> On-premises remains available, but Microsoft has moved new customers to subscription licensing only, and the newest capabilities, including Copilot and AI agents, are online-only.</> },
      { t: "figure", src: "/img/chapter5-4.png", w: 817, h: 348, alt: "Business Central online benefits: low upfront cost, low maintenance cost, low cost of ownership and automatic updates" },
      { t: "h", level: 3, id: "the-deployment-options", text: <>The deployment options</> },
      { t: "cards", items: [
        { title: <>Business Central online</>, text: <>Microsoft hosts and runs Business Central on Azure. This is the standard option.</> },
        { title: <>On-premises</>, text: <>you install Business Central on your own servers and SQL Server, and your IT team or partner maintains it.</> },
        { title: <>Partner-hosted or private cloud</>, text: <>the on-premises software runs on virtual machines in Azure or a partner's data centre. It is still on-premises software from a licensing and maintenance point of view, even though it is accessed over the internet.</> },
      ] },
      { t: "figure", src: "/img/chapter2-1.png", w: 869, h: 538, alt: "Business Central on-premises components: web client and app, web server, Business Central server and SQL database" },
      { t: "p", text: <>There is no product called "hybrid Business Central". Some businesses run on-premises while replicating data to an online environment during a cloud migration, but that is a transition approach rather than a permanent deployment model.</> },
      { t: "h", level: 3, id: "side-by-side-comparison", text: <>Side-by-side comparison</> },
      {
        t: "table",
        headText: ["Factor","Business Central online","Business Central on-premises"],
        head: [<>Factor</>, <>Business Central online</>, <>Business Central on-premises</>],
        rows: [
          [<>Infrastructure</>, <>Hosted and managed by Microsoft on Azure</>, <>Your servers or a hosting provider; you manage SQL Server, backups and security</>],
          [<>Licensing for new customers</>, <>Monthly per-user subscription</>, <>Subscription only (perpetual licences ended for new customers on 1 April 2025)</>],
          [<>Upfront cost</>, <>Low: no servers to buy</>, <>Higher: hardware or hosting, SQL Server and set-up</>],
          [<>Updates</>, <>Applied by Microsoft; you choose the date within a five-month window for major updates</>, <>You plan, test and install each upgrade yourself or through your partner</>],
          [<>Copilot and AI agents</>, <>Included (agents billed by usage)</>, <>Not available</>],
          [<>Power Platform, Teams and Microsoft 365 features</>, <>Fullest support</>, <>Partial; some features need extra configuration or are online-only</>],
          [<>Data location</>, <>Microsoft's UK Azure regions for UK environments</>, <>Wherever your servers are</>],
          [<>Customisation</>, <>Via extensions and apps</>, <>Via extensions; more technical control, but heavy modification makes upgrades harder</>],
          [<>Best for</>, <>Most SMBs</>, <>Specific regulatory, connectivity or legacy integration constraints</>],
        ],
      },
      { t: "h", level: 3, id: "points-existing-on-premises-customers-should-know", text: <>Points existing on-premises customers should know</> },
      { t: "list", ordered: false, items: [
        <>Existing customers with perpetual licences and an active enhancement plan can continue to add users and upgrade.</>,
        <>From October 2026, new on-premises releases use a single forward-compatible "28+" licence key, which must be refreshed before upgrading to each new version.</>,
        <>Customers running on-premises through Dual Use Rights (an online subscription benefit) must replace their licence keys every six months, and on-premises access depends on the online subscription staying active.</>,
        <>Each on-premises version is supported for a limited period under Microsoft's modern lifecycle policy, so staying current still requires regular upgrades.</>,
      ] },
      { t: "h", level: 3, id: "when-on-premises-can-still-make-sense", text: <>When on-premises can still make sense</> },
      { t: "p", text: <>On-premises can be justified where a contract or regulator requires data to sit on your own infrastructure, where sites have unreliable internet, or where deep database-level integrations need to be rebuilt before a cloud move. In most other cases, the total cost and the loss of Copilot make online the stronger option.</> },
      { t: "p", text: <>Moving an existing on-premises system to the cloud is a well-trodden path. Read how Dalebrook Supplies achieved a <Link href="/case-studies/migrate-on-premises-to-business-central-cloud/">cloud re-implementation from on-premises Business Central</Link>, or talk to our <Link href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade team</Link> about your options.</> },
    ],
  },
  {
    id: "pricing-and-licensing",
    nav: "Pricing & Licensing",
    title: "Business Central licensing and pricing in the UK",
    toc: [
      { id: "business-central-licence-types", title: "Business Central licence types", level: 3 },
      { id: "what-every-subscription-includes", title: "What every subscription includes", level: 3 },
      { id: "example-licence-costs", title: "Example licence costs", level: 3 },
      { id: "total-cost-of-ownership-what-else-to-budget-for", title: "Total cost of ownership: what else to budget for", level: 3 },
      { id: "how-to-avoid-overpaying-for-licences", title: "How to avoid overpaying for licences", level: 3 },
    ],
    blocks: [
      { t: "p", text: <><b>Business Central is licensed per named user, per month, on an annual commitment. Microsoft's UK list prices are £61.50 for Essentials, £84.60 for Premium and £6.20 for Team Members, excluding VAT.</b> Microsoft raised Business Central prices in late 2025 for the first time since launch, so quotes or articles from before then are out of date.</> },
      { t: "h", level: 3, id: "business-central-licence-types", text: <>Business Central licence types</> },
      { t: "figure", src: "/img/chapter5-2.png", w: 846, h: 385, alt: "Business Central licence types: Essentials and Premium full users, and Team Members additional users" },
      {
        t: "table",
        headText: ["Licence","UK list price (per user/month, ex VAT, billed annually)","Who it is for","What it allows"],
        head: [<>Licence</>, <>UK list price (per user/month, ex VAT, billed annually)</>, <>Who it is for</>, <>What it allows</>],
        rows: [
          [<>Essentials</>, <>£61.50</>, <>Finance, sales, purchasing, warehouse and project staff</>, <>Full use of finance, sales, purchasing, inventory, warehousing, projects, basic HR and Copilot</>],
          [<>Premium</>, <>£84.60</>, <>Businesses that run manufacturing or service management</>, <>Everything in Essentials plus manufacturing and service management</>],
          [<>Team Members</>, <>£6.20</>, <>Managers, approvers and occasional users</>, <>Read data, update existing records, approve or reject, manage quotes, personal details and time sheets</>],
          [<>External Accountant</>, <>Included</>, <>Your external accountant or auditor</>, <>Access for up to three external accountants per tenant</>],
          [<>Microsoft 365 (Teams access)</>, <>No extra cost</>, <>Any employee with an eligible Microsoft 365 licence</>, <>Read-only view of records shared in Teams</>],
        ],
      },
      { t: "p", text: <>Team Members cannot create or post core transactions such as new sales orders, purchase invoices or journals. If someone raises orders or posts entries, they need an Essentials or Premium licence. Licences are bought through a Microsoft Cloud Solution Provider (CSP) partner such as Dynamics Square, and partner terms can differ from Microsoft's list prices.</> },
      { t: "h", level: 3, id: "what-every-subscription-includes", text: <>What every subscription includes</> },
      { t: "list", ordered: false, items: [
        <>One production environment and three sandbox environments.</>,
        <>80 GB of database capacity per tenant, plus 3 GB for each Essentials licence and 5 GB for each Premium licence.</>,
        <>Copilot in Business Central (online).</>,
        <>Microsoft-managed hosting, backups and updates.</>,
      ] },
      { t: "p", text: <>Extra environments and database capacity can be bought as add-ons if you outgrow the included allowance.</> },
      { t: "h", level: 3, id: "example-licence-costs", text: <>Example licence costs</> },
      { t: "p", text: <>These examples use UK list prices and exclude VAT, implementation and add-ons. Remember that Premium is set per environment, so all full users in a Premium environment need Premium licences.</> },
      {
        t: "table",
        headText: ["Scenario","Licence mix","Monthly cost","Annual cost"],
        head: [<>Scenario</>, <>Licence mix</>, <>Monthly cost</>, <>Annual cost</>],
        rows: [
          [<>10-person wholesaler</>, <>6 Essentials + 4 Team Members</>, <>£393.80</>, <>£4,725.60</>],
          [<>40-person professional services group</>, <>20 Essentials + 20 Team Members</>, <>£1,354.00</>, <>£16,248.00</>],
          [<>25-person manufacturer</>, <>12 Premium + 13 Team Members</>, <>£1,095.80</>, <>£13,149.60</>],
        ],
      },
      { t: "h", level: 3, id: "total-cost-of-ownership-what-else-to-budget-for", text: <>Total cost of ownership: what else to budget for</> },
      { t: "p", text: <>Licences are usually not the largest cost in year one. A realistic budget also covers:</> },
      { t: "list", ordered: false, items: [
        <>Implementation and configuration services.</>,
        <>Data migration and cleansing.</>,
        <>Training and change management.</>,
        <>AppSource apps, which often have their own per-user or per-company fees.</>,
        <>Power BI licences for report consumers.</>,
        <>Copilot Credits if you use AI agents.</>,
        <>Ongoing support and optimisation.</>,
        <>Extra storage or environments, if needed.</>,
        <>Internal staff time for testing and sign-off.</>,
      ] },
      { t: "h", level: 3, id: "how-to-avoid-overpaying-for-licences", text: <>How to avoid overpaying for licences</> },
      { t: "list", ordered: true, items: [
        <>Map every user to the lowest licence that covers their actual tasks; many approvers and managers only need Team Members.</>,
        <>Only choose Premium if you will genuinely use manufacturing or service management.</>,
        <>Use device licences for shared warehouse or shop-floor terminals.</>,
        <>Use Microsoft 365 read-only access in Teams for staff who only need to look up information.</>,
        <>Review licence allocation before each annual renewal.</>,
      ] },
      { t: "p", text: <>See our detailed <Link href="/products/dynamics-365-business-central/pricing-licensing/">Business Central pricing and licensing guide</Link> or model your own scenario with the <Link href="/tools/microsoft-dynamics-licensing-calculator/">Dynamics 365 licensing calculator</Link>. For a licence review against how your teams actually work, <Link href="/contact-us/">request Business Central licensing guidance</Link>.</> },
    ],
  },
  {
    id: "implementation-and-migration",
    nav: "Implementation",
    title: "Implementation, migration and compliance",
    toc: [
      { id: "business-central-implementation-process-timeline-and-cost", title: "Business Central implementation: process, timeline and cost", level: 3 },
      { id: "the-implementation-phases", title: "The implementation phases", level: 4 },
      { id: "indicative-timelines-by-project-type", title: "Indicative timelines by project type", level: 4 },
      { id: "what-drives-implementation-cost", title: "What drives implementation cost", level: 4 },
      { id: "business-central-readiness-checklist", title: "Business Central readiness checklist", level: 4 },
      { id: "data-migration-and-upgrades-to-business-central", title: "Data migration and upgrades to Business Central", level: 3 },
      { id: "migration-routes-by-source-system", title: "Migration routes by source system", level: 4 },
      { id: "legacy-microsoft-erp-support-deadlines", title: "Legacy Microsoft ERP support deadlines", level: 4 },
      { id: "what-to-migrate", title: "What to migrate", level: 4 },
      { id: "six-rules-for-a-clean-migration", title: "Six rules for a clean migration", level: 4 },
      { id: "security-permissions-compliance-and-uk-regulation", title: "Security, permissions, compliance and UK regulation", level: 3 },
      { id: "identity-and-access", title: "Identity and access", level: 4 },
      { id: "data-protection-and-uk-gdpr", title: "Data protection and UK GDPR", level: 4 },
      { id: "uk-localisation-and-hmrc-compliance", title: "UK localisation and HMRC compliance", level: 4 },
      { id: "preparing-for-uk-mandatory-e-invoicing-april-2029", title: "Preparing for UK mandatory e-invoicing (April 2029)", level: 4 },
    ],
    blocks: [
      { t: "h", level: 3, id: "business-central-implementation-process-timeline-and-cost", text: <>Business Central implementation: process, timeline and cost</> },
      { t: "p", text: <><b>A Business Central implementation typically takes from around two to three months for a finance-led, single-company rollout to six months or more for multi-entity, manufacturing or integration-heavy projects.</b> Scope, data quality and the availability of your own team drive the timeline far more than the software does.</> },
      { t: "h", level: 4, id: "the-implementation-phases", text: <>The implementation phases</> },
      { t: "steps", items: [
        { title: <>Discovery and fit-gap analysis</>, text: <>map current processes, reporting needs and pain points; confirm what standard Business Central covers and where apps or extensions are needed.</> },
        { title: <>Solution design</>, text: <>agree chart of accounts, dimensions, posting groups, approval workflows, integrations and the licence mix.</> },
        { title: <>Configuration and build</>, text: <>set up the system, install AppSource apps, build any extensions and integrations.</> },
        { title: <>Data migration</>, text: <>cleanse source data, run trial loads, and reconcile balances against the old system.</> },
        { title: <>Testing and training</>, text: <>user acceptance testing on real scenarios in a sandbox; role-based training for each team.</> },
        { title: <>Go-live and cutover</>, text: <>final data load, opening balances, parallel checks on the first period end.</> },
        { title: <>Hypercare and optimisation</>, text: <>close support for the first weeks, then continuous improvement, including Copilot and agent adoption.</> },
      ] },
      { t: "p", text: <>Our article on <Link href="/blog/what-is-business-central-implementation-methodology/">Business Central implementation methodology</Link> explains how each phase is governed.</> },
      { t: "h", level: 4, id: "indicative-timelines-by-project-type", text: <>Indicative timelines by project type</> },
      {
        t: "table",
        headText: ["Project type","Typical scope","Indicative timeline"],
        head: [<>Project type</>, <>Typical scope</>, <>Indicative timeline</>],
        rows: [
          [<>Finance-led</>, <>One company, finance plus sales and purchasing, few integrations</>, <>About 2 to 3 months</>],
          [<>Distribution or e-commerce</>, <>Multiple locations, warehousing, Shopify or WMS integration</>, <>About 3 to 6 months</>],
          [<>Manufacturing or multi-entity</>, <>Production, several companies, consolidation, more extensions</>, <>About 6 to 9 months or longer</>],
        ],
      },
      { t: "h", level: 4, id: "what-drives-implementation-cost", text: <>What drives implementation cost</> },
      { t: "p", text: <>Published UK industry ranges run from around £15,000 for a simple finance-led rollout to £100,000 or more for complex multi-entity or manufacturing projects. The main drivers are:</> },
      { t: "list", ordered: false, items: [
        <>Number of companies, locations and users.</>,
        <>Modules in scope, especially manufacturing, warehousing and service.</>,
        <>Volume and quality of data to migrate, and how many years of history you bring across.</>,
        <>Number and complexity of integrations.</>,
        <>Custom development versus standard functionality and AppSource apps.</>,
        <>Reporting requirements, including Power BI.</>,
        <>Training approach and how much your own team can take on.</>,
      ] },
      { t: "p", text: <>For a figure based on your business, use our <Link href="/tools/erp-implementation-cost-calculator/">ERP implementation cost calculator</Link> or download the <Link href="/white-papers/business-central-implementation-cost/">Business Central implementation cost planner</Link>.</> },
      { t: "h", level: 4, id: "business-central-readiness-checklist", text: <>Business Central readiness checklist</> },
      { t: "checklist", id: "check-business-central-readiness-checklist", items: [
        <>Executive sponsor and internal project lead named, with time allocated</>,
        <>Current processes and pain points documented for each department</>,
        <>Reporting requirements agreed (management accounts, KPIs, board pack)</>,
        <>Chart of accounts and dimensions reviewed and simplified</>,
        <>Data owners assigned for customers, vendors, items and open balances</>,
        <>Integrations listed (web shop, banking, payroll, EDI, CRM)</>,
        <>Licence mix mapped by role (Essentials, Premium, Team Members)</>,
        <>Go-live date set away from year end and peak trading</>,
        <>Testing scenarios written from real transactions</>,
        <>Training plan and super-users identified</>,
        <>Post-go-live support arrangement agreed</>,
      ] },
      { t: "callout", text: <>Dynamics Square delivers <Link href="/dynamics-365-business-central-implementation/">Business Central implementation services</Link> for UK SMBs, together with role-based <Link href="/our-services/dynamics-365-training/">Dynamics 365 training</Link>. <Link href="/contact-us/">Book a scoping call</Link> to get a timeline and estimate for your requirements.</> },
      { t: "h", level: 3, id: "data-migration-and-upgrades-to-business-central", text: <>Data migration and upgrades to Business Central</> },
      { t: "p", text: <><b>Most businesses move to Business Central from an accounting package (Sage, Xero, QuickBooks) or from an older Microsoft ERP (Dynamics NAV or GP).</b> The migration route depends on the source system, but the principle is the same: migrate clean master data and open balances, and keep detailed history where it is genuinely needed.</> },
      { t: "h", level: 4, id: "migration-routes-by-source-system", text: <>Migration routes by source system</> },
      {
        t: "table",
        headText: ["Moving from","Typical route","Key consideration","Further reading"],
        head: [<>Moving from</>, <>Typical route</>, <>Key consideration</>, <>Further reading</>],
        rows: [
          [<>Dynamics GP</>, <>Microsoft's built-in cloud migration tool for GP</>, <>GP product support ends 31 December 2029</>, <><Link href="/gp-to-business-central-migration/">GP to Business Central migration</Link></>],
          [<>Dynamics NAV</>, <>Technical upgrade, then data migration to online</>, <>Old customisations must be rebuilt as extensions or replaced by standard features</>, <><Link href="/ebook/upgrade-nav-to-business-central/">NAV upgrade quick-start guide</Link></>],
          [<>Sage 50 or Sage 200</>, <>Data migration using configuration packages and partner tools</>, <>Map Sage nominal codes and departments to a new chart of accounts and dimensions</>, <><Link href="/blog/sage-to-business-central-migration/">Sage to Business Central migration</Link></>],
          [<>QuickBooks</>, <>Migration tools plus configuration packages</>, <>Move beyond class and location tracking to dimensions</>, <><Link href="/blog/quickbooks-to-microsoft-business-central-migration/">QuickBooks to Business Central migration</Link></>],
          [<>Xero</>, <>Configuration packages and Excel templates</>, <>Separate stock or e-commerce apps usually consolidate into Business Central</>, <><Link href="/blog/xero-to-business-central-migration/">Xero to Business Central migration</Link></>],
          [<>NetSuite</>, <>Structured data migration</>, <>Plan the subscription exit date and data extraction early</>, <><Link href="/white-papers/netsuite-to-business-central/">NetSuite to Business Central playbook</Link></>],
        ],
      },
      { t: "p", text: <>Sage 200 users can also download our <Link href="/white-papers/sage-200-to-business-central/">Sage 200 to Business Central migration white paper</Link>.</> },
      { t: "h", level: 4, id: "legacy-microsoft-erp-support-deadlines", text: <>Legacy Microsoft ERP support deadlines</> },
      {
        t: "table",
        headText: ["Date","What happens"],
        head: [<>Date</>, <>What happens</>],
        rows: [
          [<>1 April 2026</>, <>New customers can no longer buy Dynamics GP subscription licences</>],
          [<>14 April 2026</>, <>Extended support ended for Dynamics NAV 2016 (earlier NAV versions are already unsupported)</>],
          [<>11 January 2027</>, <>Extended support ends for Dynamics NAV 2017</>],
          [<>11 January 2028</>, <>Extended support ends for Dynamics NAV 2018, the final NAV release, and for Dynamics GP 2018</>],
          [<>31 December 2029</>, <>Dynamics GP product enhancements, tax and regulatory updates, and technical support end</>],
          [<>30 April 2031</>, <>Dynamics GP security updates end</>],
        ],
      },
      { t: "p", text: <>Running an unsupported ERP means no tax or regulatory updates. For UK businesses facing mandatory e-invoicing from April 2029, that is a material compliance risk, not just a technology issue.</> },
      { t: "h", level: 4, id: "what-to-migrate", text: <>What to migrate</> },
      { t: "cards", items: [
        { title: <>Always</>, text: <>chart of accounts, customers, vendors, items, open sales and purchase documents, open receivables and payables, stock quantities and values, fixed assets, bank balances.</> },
        { title: <>Usually</>, text: <>opening trial balance and monthly G/L balances for comparative reporting, typically for the current and previous financial year.</> },
        { title: <>Case by case</>, text: <>detailed transaction history. Many businesses keep the old system read-only or archive history to a data store rather than importing years of detail.</> },
      ] },
      { t: "h", level: 4, id: "six-rules-for-a-clean-migration", text: <>Six rules for a clean migration</> },
      { t: "list", ordered: true, items: [
        <>Cleanse before you migrate: remove duplicates, inactive records and obsolete items.</>,
        <>Redesign the chart of accounts and dimensions rather than copying old structures.</>,
        <>Run at least two trial loads and reconcile every balance to the source.</>,
        <>Choose a cutover date at a period end, away from year end and peak trading.</>,
        <>Give business owners, not just IT, sign-off on migrated data.</>,
        <>Keep read-only access to the old system for audit and HMRC record-keeping needs.</>,
      ] },
      { t: "p", text: <>Existing Business Central on-premises customers can also move to the cloud using Microsoft's cloud migration tools. Dynamics Square's <Link href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade services</Link> cover NAV, GP and on-premises Business Central; for GP users, our <Link href="/ebook/gp-to-bc-migration/">GP to Business Central guide</Link> sets out the full process.</> },
      { t: "h", level: 3, id: "security-permissions-compliance-and-uk-regulation", text: <>Security, permissions, compliance and UK regulation</> },
      { t: "p", text: <>Business Central online combines Microsoft's cloud security with detailed, role-based control over who can see and change what. Security is shared: Microsoft secures the platform; your organisation and partner configure users, permissions and policies correctly.</> },
      { t: "h", level: 4, id: "identity-and-access", text: <>Identity and access</> },
      { t: "cards", items: [
        { title: <>Sign-in</>, text: <>users authenticate through Microsoft Entra ID, so you can enforce multi-factor authentication and conditional access policies alongside your Microsoft 365 security.</> },
        { title: <>Permissions</>, text: <>permission sets control access to pages, reports and data, and can be assigned through Entra security groups, making joiners, movers and leavers easier to manage.</> },
        { title: <>Record-level security</>, text: <>security filters can restrict a user to specific records, such as one company, location or department.</> },
        { title: <>Sensitive data</>, text: <>version 29 makes UI support for masking sensitive data mandatory.</> },
        { title: <>Audit trail</>, text: <>the change log records who changed which fields and when; system fields show who created and last modified each record.</> },
      ] },
      { t: "h", level: 4, id: "data-protection-and-uk-gdpr", text: <>Data protection and UK GDPR</> },
      { t: "list", ordered: false, items: [
        <>UK environments are hosted in Microsoft's UK Azure regions.</>,
        <>Data is encrypted in transit and at rest, and Microsoft manages backups. Administrators can restore an environment to an earlier point in time within Microsoft's retention period.</>,
        <>Data classification and data subject tools help you respond to access and erasure requests under UK GDPR.</>,
        <>Retention policies let you delete old log and document data that you no longer need to keep.</>,
      ] },
      { t: "p", text: <>For Microsoft's current certifications and audit reports, refer to the Microsoft Service Trust Portal rather than relying on third-party summaries.</> },
      { t: "h", level: 4, id: "uk-localisation-and-hmrc-compliance", text: <>UK localisation and HMRC compliance</> },
      { t: "p", text: <>The UK version of Business Central includes:</> },
      { t: "list", ordered: false, items: [
        <><b>Making Tax Digital (MTD) for VAT:</b> retrieve VAT obligations from HMRC and submit VAT returns directly from Business Central.</>,
        <>VAT reverse charge, VAT group management, VAT reports and audit reports.</>,
        <>APACS cheque printing and remittance advices.</>,
        <>UK postcode lookup through the GetAddress.io extension.</>,
      ] },
      { t: "p", text: <>Microsoft lists functionality to resubmit a VAT return as planned for 2027 release wave 1.</> },
      { t: "h", level: 4, id: "preparing-for-uk-mandatory-e-invoicing-april-2029", text: <>Preparing for UK mandatory e-invoicing (April 2029)</> },
      { t: "p", text: <>The UK government has confirmed that, from 1 April 2029, VAT invoices between VAT-registered businesses, and to the public sector, must be issued and received as structured e-invoices. HMRC has confirmed a decentralised model built on the Peppol network, without real-time reporting to HMRC at launch. Detailed standards, exemptions and guidance are expected during 2027 to 2028.</> },
      { t: "p", text: <>Business Central already includes an E-Documents framework that supports Peppol formats, and Microsoft updates the UK localisation as regulations are finalised. To prepare:</> },
      { t: "list", ordered: true, items: [
        <>Clean customer and vendor master data, including VAT numbers and addresses.</>,
        <>Make sure you are on a current, supported version so you receive regulatory updates.</>,
        <>Review how supplier invoices arrive today and whether OCR, the Payables Agent or Peppol receipt will replace manual entry.</>,
        <>Ask your partner how your AppSource apps and integrations will handle e-invoices.</>,
      ] },
      { t: "callout", text: <>Not sure whether your current setup is secure and compliant? Book a <Link href="/free-dynamics-365-system-health-check/">free Dynamics 365 system health check</Link>.</> },
    ],
  },
  {
    id: "benefits-and-comparisons",
    nav: "Industries & Comparisons",
    title: "Scalability, benefits and how Business Central compares",
    toc: [
      { id: "scalability-and-industry-use-cases", title: "Scalability and industry use cases", level: 3 },
      { id: "how-business-central-scales-with-your-business", title: "How Business Central scales with your business", level: 4 },
      { id: "business-central-by-industry", title: "Business Central by industry", level: 4 },
      { id: "practical-scenarios", title: "Practical scenarios", level: 4 },
      { id: "dynamics-square-customer-stories", title: "Dynamics Square customer stories", level: 4 },
      { id: "benefits-and-limitations-of-business-central", title: "Benefits and limitations of Business Central", level: 3 },
      { id: "business-benefits", title: "Business benefits", level: 4 },
      { id: "limitations-to-plan-for", title: "Limitations to plan for", level: 4 },
      { id: "business-central-vs-other-erp-and-accounting-systems", title: "Business Central vs other ERP and accounting systems", level: 3 },
    ],
    blocks: [
      { t: "h", level: 3, id: "scalability-and-industry-use-cases", text: <>Scalability and industry use cases</> },
      { t: "h", level: 4, id: "how-business-central-scales-with-your-business", text: <>How Business Central scales with your business</> },
      { t: "p", text: <>Business Central grows in small, predictable steps rather than through disruptive re-platforming:</> },
      { t: "cards", items: [
        { title: <>Users</>, text: <>add licences as you hire, and use Team Members for light users.</> },
        { title: <>Entities</>, text: <>add companies for new subsidiaries, with intercompany postings and consolidation.</> },
        { title: <>Countries</>, text: <>Business Central is available with local versions in many countries, which helps UK businesses opening overseas entities.</> },
        { title: <>Capacity</>, text: <>buy more database storage or environments when needed.</> },
        { title: <>Functionality</>, text: <>switch on modules or add AppSource apps as processes mature.</> },
      ] },
      { t: "p", text: <>Most SMBs never outgrow Business Central. Businesses that eventually move to Microsoft's enterprise ERP, <Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Finance and Supply Chain Management</Link>, usually have several of these traits: complex global operations across many legal entities and currencies, advanced shared-service or treasury needs, very high transaction volumes, or complex manufacturing and warehouse automation. If you are already at that scale, compare both options before deciding.</> },
      { t: "h", level: 4, id: "business-central-by-industry", text: <>Business Central by industry</> },
      {
        t: "table",
        headText: ["Industry","Where Business Central fits well","Common additions","Learn more"],
        head: [<>Industry</>, <>Where Business Central fits well</>, <>Common additions</>, <>Learn more</>],
        rows: [
          [<>Manufacturing</>, <>BOMs, routings, production orders, capacity planning, quality inspections (Premium)</>, <>Shop-floor data capture, advanced planning, process manufacturing extensions</>, <><Link href="/industries/manufacturing/">Manufacturing</Link></>],
          [<>Wholesale and distribution</>, <>Multi-location stock, landed cost, warehouse picking, drop shipments</>, <>Mobile WMS, EDI, shipping integrations</>, <><Link href="/industries/dynamics-365-for-distribution/">Distribution</Link></>],
          [<>Retail and e-commerce</>, <>Shopify connector, item variants, pricing, returns</>, <>B2B portals, marketplace connectors</>, <><Link href="/industries/ecommerce/">E-commerce</Link></>],
          [<>Professional services</>, <>Projects, time sheets, WIP, project invoicing</>, <>Resource planning, expense management</>, <><Link href="/industries/professional-services/">Professional services</Link></>],
          [<>Food and beverage</>, <>Lot tracking, expiry dates, FEFO picking, recall traceability</>, <>Process manufacturing and quality extensions</>, <><Link href="/industries/food-and-beverages/">Food and beverage</Link></>],
        ],
      },
      { t: "h", level: 4, id: "practical-scenarios", text: <>Practical scenarios</> },
      { t: "scenarios", items: [
        { title: <>A growing wholesaler moving off Sage 50</>, text: <>Stock sits in a separate system, purchase orders are raised in spreadsheets and month end takes two weeks. In Business Central, sales orders reserve stock, the planning worksheet proposes purchase orders from reorder points, item charges capture freight and duty, and finance closes from one ledger. The Payables Agent can draft supplier invoices from emailed PDFs for review.</> },
        { title: <>A UK manufacturer replacing NAV 2013</>, text: <>Heavy customisations make every update risky. The upgrade rebuilds only the customisations that still add value as extensions, moves standard processes to standard functionality, and adds quality inspections on goods in and production output.</> },
      ] },
      { t: "h", level: 4, id: "dynamics-square-customer-stories", text: <>Dynamics Square customer stories</> },
      { t: "links", items: [
        { href: "/case-studies/business-central-reimplementation-for-recycling-industry/", text: <>How Summit Systems, a UK plastic automation company, streamlined operations with Business Central</> },
        { href: "/case-studies/business-central-for-tool-manufacturing-company/", text: <>How Rolson Tools restored compliance with Business Central</> },
        { href: "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/", text: <>Business Central and CRM implementation for a UK equestrian manufacturer</> },
        { href: "/case-studies/business-central-reimplementation-for-food-trader/", text: <>Business Central re-implementation for a world food trading business</> },
        { href: "/case-studies/nav-2013-r2-to-business-central-upgrade/", text: <>NAV 2013 R2 to Business Central upgrade for a UK orthodontic supplier</> },
      ] },
      { t: "p", text: <>Browse all <Link href="/case-studies/">Dynamics Square case studies</Link>.</> },
      { t: "h", level: 3, id: "benefits-and-limitations-of-business-central", text: <>Benefits and limitations of Business Central</> },
      { t: "h", level: 4, id: "business-benefits", text: <>Business benefits</> },
      { t: "figure", src: "/img/chapter3-1.png", w: 930, h: 372, alt: "Business benefits of Dynamics 365 Business Central for SMBs" },
      {
        t: "table",
        headText: ["Benefit","What it means in practice"],
        head: [<>Benefit</>, <>What it means in practice</>],
        rows: [
          [<>One source of truth</>, <>Finance, stock, sales and projects share one database, so reports reconcile and decisions use current figures</>],
          [<>Faster month end</>, <>Automated bank reconciliation, intercompany, deferrals and financial reporting reduce manual close tasks</>],
          [<>Familiar Microsoft experience</>, <>Staff work from Outlook, Excel and Teams, which shortens training and improves adoption</>],
          [<>AI built in</>, <>Copilot is included online; agents can take on repetitive order and invoice processing</>],
          [<>Predictable cost</>, <>Per-user subscription with no servers to buy or maintain</>],
          [<>Always current</>, <>Microsoft delivers regulatory updates and new features twice a year</>],
          [<>Room to grow</>, <>Add users, companies, countries and apps without changing platform</>],
          [<>Large partner and app ecosystem</>, <>Specialist needs are usually met by an existing AppSource app rather than custom code</>],
        ],
      },
      { t: "h", level: 4, id: "limitations-to-plan-for", text: <>Limitations to plan for</> },
      { t: "p", text: <>An honest assessment helps you budget properly and avoid surprises:</> },
      { t: "cards", items: [
        { title: <>No UK payroll</>, text: <>Payroll runs in a separate product, with journals or an integration into Business Central.</> },
        { title: <>Built-in CRM is basic</>, text: <>Larger sales teams usually add Dynamics 365 Sales.</> },
        { title: <>Manufacturing depth</>, text: <>Strong for discrete and light process manufacturing; complex process, formula or regulated batch manufacturing often needs an industry extension.</> },
        { title: <>Specialist functions need apps</>, text: <>Warehouse scanning, document capture, EDI and advanced expense management typically come from AppSource apps with their own fees.</> },
        { title: <>Updates need testing</>, text: <>Twice-yearly major updates are an advantage, but extensions and integrations must be tested in a sandbox each time.</> },
        { title: <>AI costs are variable</>, text: <>Copilot is included, but agents consume paid Copilot Credits.</> },
        { title: <>Premium applies per environment</>, text: <>You cannot mix Essentials and Premium full users in the same environment.</> },
        { title: <>Enterprise scale</>, text: <>Very large, complex global organisations are usually better served by Dynamics 365 Finance and Supply Chain Management.</> },
        { title: <>Partner quality matters</>, text: <>The same software can deliver very different results depending on the implementation.</> },
      ] },
      { t: "h", level: 3, id: "business-central-vs-other-erp-and-accounting-systems", text: <>Business Central vs other ERP and accounting systems</> },
      { t: "p", text: <>Business Central most often competes with entry-level accounting software that a business has outgrown, and with other mid-market ERPs. The table below summarises typical positioning; always check each vendor's current editions and pricing.</> },
      {
        t: "table",
        headText: ["System","Type","Typically best for","How Business Central compares"],
        head: [<>System</>, <>Type</>, <>Typically best for</>, <>How Business Central compares</>],
        rows: [
          [<>Xero / QuickBooks Online</>, <>Cloud accounting software</>, <>Small businesses with straightforward accounting</>, <>Business Central adds full ERP: multi-location inventory, warehousing, manufacturing, projects, consolidation and deeper reporting</>],
          [<>Sage 50 / Sage 200</>, <>Accounting and mid-market business software</>, <>UK SMBs already familiar with Sage</>, <>Business Central offers one cloud platform with native Microsoft 365, Power Platform and Copilot integration. See <Link href="/blog/business-central-vs-sage-50/">Business Central vs Sage 50</Link></>],
          [<>Oracle NetSuite</>, <>Cloud-only ERP</>, <>Fast-growing, multi-entity businesses</>, <>Both are cloud ERPs; Business Central offers on-premises as an option, tighter Microsoft 365 integration and a wide partner choice</>],
          [<>SAP Business One</>, <>SMB ERP, on-premises or partner-hosted</>, <>SMBs in SAP-centric supply chains</>, <>Business Central is Microsoft-hosted SaaS with continuous updates. See <Link href="/dynamics-365-business-central-vs-sap-business-one/">Business Central vs SAP Business One</Link></>],
          [<>Odoo</>, <>Modular business suite, cloud or self-hosted</>, <>Businesses wanting many modules from one vendor</>, <>Business Central offers deeper accounting and Microsoft ecosystem integration; compare modules and partner support carefully</>],
          [<>Dynamics 365 Finance and Supply Chain Management</>, <>Enterprise ERP</>, <>Large or complex global organisations</>, <>Business Central is faster and cheaper to implement for SMBs; Finance and SCM handle greater scale and complexity</>],
        ],
      },
      { t: "p", text: <>Use our <Link href="/tools/top-erp-systems-comparison/">ERP comparison tool</Link> to compare options side by side, or download the <Link href="/ebook/how-to-choose-right-erp/">ultimate ERP selection guide</Link>.</> },
    ],
  },
  {
    id: "choosing-a-partner",
    nav: "Choosing a Partner",
    title: "Readiness, common challenges and choosing a partner",
    toc: [
      { id: "signs-your-business-is-ready-for-business-central", title: "Signs your business is ready for Business Central", level: 3 },
      { id: "common-implementation-challenges-and-how-to-avoid-them", title: "Common implementation challenges and how to avoid them", level: 3 },
      { id: "how-to-choose-a-business-central-partner", title: "How to choose a Business Central partner", level: 3 },
      { id: "why-businesses-work-with-dynamics-square", title: "Why businesses work with Dynamics Square", level: 4 },
    ],
    blocks: [
      { t: "h", level: 3, id: "signs-your-business-is-ready-for-business-central", text: <>Signs your business is ready for Business Central</> },
      { t: "p", text: <>If three or more of these apply, it is worth a structured review:</> },
      { t: "checklist", id: "check-signs-your-business-is-ready-for-business-central", items: [
        <>Month end takes more than a week because data is pulled from several systems.</>,
        <>Stock figures in your accounts and your warehouse rarely agree.</>,
        <>Staff re-key orders between your web shop, email and accounts.</>,
        <>You run more than one company and consolidate in spreadsheets.</>,
        <>Management reports are built manually in Excel and are out of date when shared.</>,
        <>Your accounting software cannot handle multi-location stock, projects or manufacturing.</>,
        <>Approvals happen by email with no audit trail.</>,
        <>Your current ERP is out of mainstream support, or its vendor or partner can no longer support it.</>,
        <>Updates are avoided because customisations break.</>,
        <>You cannot easily prepare for MTD changes or e-invoicing in 2029.</>,
      ] },
      { t: "p", text: <>For small and growing teams, our page on <Link href="/dynamics-365-for-small-businesses/">Dynamics 365 for small businesses</Link> outlines typical starting points.</> },
      { t: "h", level: 3, id: "common-implementation-challenges-and-how-to-avoid-them", text: <>Common implementation challenges and how to avoid them</> },
      {
        t: "table",
        headText: ["Challenge","Why it happens","How to address it"],
        head: [<>Challenge</>, <>Why it happens</>, <>How to address it</>],
        rows: [
          [<>Scope creep</>, <>Requirements keep growing during the build</>, <>Agree a phase 1 scope and park non-critical items for phase 2</>],
          [<>Poor data quality</>, <>Years of duplicates and inactive records in the old system</>, <>Cleanse before migration and assign data owners</>],
          [<>Over-customisation</>, <>Recreating every legacy process in code</>, <>Adopt standard Business Central processes first; customise only for genuine advantage</>],
          [<>Low user adoption</>, <>Training is generic or late</>, <>Train by role, use real scenarios, appoint super-users</>],
          [<>Underestimated internal effort</>, <>Staff run the business and the project at once</>, <>Back-fill key roles and protect project time</>],
          [<>Integration surprises</>, <>Third-party systems discovered late</>, <>List every integration during discovery and test early</>],
          [<>Weak post-go-live support</>, <>Partner disengages after launch</>, <>Agree hypercare and an ongoing support model up front</>],
        ],
      },
      { t: "h", level: 3, id: "how-to-choose-a-business-central-partner", text: <>How to choose a Business Central partner</> },
      { t: "p", text: <>The partner you choose has as much influence on results as the software. Before you sign, check that the partner:</> },
      { t: "checklist", id: "check-how-to-choose-a-business-central-partner", items: [
        <>Holds a current Microsoft Solutions Partner designation for Business Applications</>,
        <>Specialises in Business Central and SMBs, not only enterprise ERP</>,
        <>Can show UK references in your industry</>,
        <>Understands UK localisation, MTD and e-invoicing</>,
        <>Explains clearly what is fixed price and what is time and materials</>,
        <>Has a structured data migration method</>,
        <>Can supply licences as a Cloud Solution Provider (CSP)</>,
        <>Offers ongoing support with defined response times</>,
        <>Can advise on Copilot, agents and Power Platform, not just core ERP</>,
      ] },
      { t: "h", level: 4, id: "why-businesses-work-with-dynamics-square", text: <>Why businesses work with Dynamics Square</> },
      { t: "p", text: <>Dynamics Square is a Microsoft Solutions Partner for Business Applications with a Specialist designation in Small and Midsize Business Management, with offices in the UK, US and Canada and ISO 9001 and ISO 27001 certification. Our UK team covers the full Business Central lifecycle: <Link href="/our-services/dynamics-365-consultant/">consulting</Link>, implementation, migration, licensing and <Link href="/d365-business-central-support/">Business Central support</Link>. Learn more about <Link href="/why-us/">why businesses choose Dynamics Square</Link>.</> },
    ],
  },
];

const FAQ_TITLE = "Frequently asked questions about Business Central";
const FAQS = [
  {
    "id": 1,
    "question": "What is Dynamics 365 Business Central used for?",
    "answer": "<p>Business Central is used to run a small or mid-sized company's finance and operations in one system. Typical uses include accounting, VAT, sales and purchase processing, stock and warehouse control, project costing, manufacturing, service management and management reporting.</p>"
  },
  {
    "id": 2,
    "question": "Is Business Central suitable for small businesses?",
    "answer": "<p>Yes. Business Central is designed for SMBs and is commonly adopted by businesses with roughly 5 to several hundred users that have outgrown entry-level accounting software. Very small businesses with simple bookkeeping needs may find accounting software such as Xero or QuickBooks sufficient.</p>"
  },
  {
    "id": 3,
    "question": "How much does Business Central cost in the UK?",
    "answer": "<p>Microsoft's UK list prices are £61.50 per user per month for Essentials, £84.60 for Premium and £6.20 for Team Members, excluding VAT and billed annually. Implementation, data migration, training, add-on apps and support are additional.</p>"
  },
  {
    "id": 4,
    "question": "What is the difference between Business Central Essentials and Premium?",
    "answer": "<p>Premium includes everything in Essentials plus manufacturing and service management. Most distributors, retailers and professional services firms use Essentials; manufacturers and businesses running service contracts and dispatch need Premium.</p>"
  },
  {
    "id": 5,
    "question": "What can a Business Central Team Member do?",
    "answer": "<p>A Team Member can read data, update existing records, approve or reject requests, manage quotes, edit their own personal details and complete time sheets. Team Members cannot create or post core transactions such as sales orders, purchase invoices or journals.</p>"
  },
  {
    "id": 6,
    "question": "Is Copilot free in Business Central?",
    "answer": "<p>Copilot features are included with Business Central online licences at no extra cost. AI agents, such as the Sales Order Agent, Payables Agent and Expense Agent, consume Copilot Credits, which are billed separately through prepaid packs or pay-as-you-go. Copilot is not available on-premises.</p>"
  },
  {
    "id": 7,
    "question": "Can Business Central be installed on-premises?",
    "answer": "<p>Yes, but new customers can only license on-premises Business Central through subscription; perpetual licences ended for new customers on 1 April 2025. On-premises customers manage their own infrastructure and upgrades and do not get Copilot or AI agents.</p>"
  },
  {
    "id": 8,
    "question": "How long does a Business Central implementation take?",
    "answer": "<p>A finance-led, single-company implementation typically takes around two to three months. Distribution projects with warehousing and integrations often take three to six months, and manufacturing or multi-entity projects six months or more.</p>"
  },
  {
    "id": 9,
    "question": "Does Business Central support Making Tax Digital?",
    "answer": "<p>Yes. The UK version of Business Central includes Making Tax Digital for VAT, allowing you to retrieve VAT obligations and submit VAT returns to HMRC directly from the system.</p>"
  },
  {
    "id": 10,
    "question": "Will Business Central support UK mandatory e-invoicing in 2029?",
    "answer": "<p>Business Central includes an E-Documents framework that supports Peppol formats, and Microsoft updates UK localisation as regulations are finalised. HMRC's detailed specifications are expected during 2027 to 2028, so staying on a supported, current version is the most important preparation.</p>"
  },
  {
    "id": 11,
    "question": "Does Business Central include UK payroll?",
    "answer": "<p>No. Business Central does not include UK payroll. Businesses use a dedicated payroll product and post payroll journals into Business Central, or use a third-party integration.</p>"
  },
  {
    "id": 12,
    "question": "Is Business Central the same as Dynamics NAV?",
    "answer": "<p>Business Central is the successor to Dynamics NAV. It builds on NAV's accounting and operations logic but runs as a modern cloud service, uses extensions instead of modified source code, and adds Copilot, Power Platform integration and continuous updates.</p>"
  },
  {
    "id": 13,
    "question": "Can I migrate from Sage, Xero or QuickBooks to Business Central?",
    "answer": "<p>Yes. Master data, open balances and summarised history are migrated using configuration packages and migration tools. The project is also a chance to redesign your chart of accounts and dimensions for better reporting.</p>"
  },
  {
    "id": 14,
    "question": "How often is Business Central updated?",
    "answer": "<p>Microsoft releases two major updates a year, in April and October, plus monthly minor updates. Online administrators can schedule each major update within a five-month window to allow testing.</p>"
  },
  {
    "id": 15,
    "question": "Where is Business Central data stored for UK customers?",
    "answer": "<p>Business Central online environments for UK customers are hosted in Microsoft's UK Azure regions. Administrators can confirm the Azure region of each environment in the Business Central admin centre.</p>"
  },
  {
    "id": 16,
    "question": "Is there a free trial of Business Central?",
    "answer": "<p>Yes. Microsoft offers a free trial of Business Central so you can explore the product with demo data. A trial is most useful alongside a guided demonstration based on your own processes.</p>"
  }
];

const NEXT = {
  title: "Next steps: talk to a Business Central specialist",
  intro: <>Choosing an ERP is a multi-year decision. The fastest way to know whether Business Central fits is to test it against your own processes, data and growth plans.</>,
  lead: <>Dynamics Square UK can help you:</>,
  items: [
    { title: <>Evaluate fit</>, text: <>a <Link href="/contact-us/">free Business Central consultation</Link> and a demo built around your processes.</> },
    { title: <>Implement</>, text: <>a scoped, phased rollout through our <Link href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation services</Link>.</> },
    { title: <>Migrate or upgrade</>, text: <>from Sage, Xero, QuickBooks, NAV, GP or on-premises Business Central.</> },
    { title: <>License correctly</>, text: <>the right mix of Essentials, Premium and Team Members.</> },
    { title: <>Support and optimise</>, text: <>ongoing <Link href="/our-services/dynamics-365-support-services/">Dynamics 365 support services</Link>, including Copilot and agent adoption.</> },
  ],
  contact: <>Call <a href="tel:+442037697689">+44 203 769 7689</a>, email <a href="mailto:info@dynamicssquare.co.uk">info@dynamicssquare.co.uk</a>, or <Link href="/contact-us/">request a callback</Link> to speak with a Business Central consultant.</>,
};

// sticky nav + scroll-spy lists (module level so their identity never changes)
const NAV = [
  { id: "at-a-glance", label: "At a Glance" },
  ...CHAPTERS.map((c) => ({ id: c.id, label: c.nav })),
  { id: "faqs", label: "FAQs" },
];
const HEADING_IDS = CHAPTERS.flatMap((c) => c.toc.map((t) => t.id));
const pad = (n) => String(n).padStart(2, "0");
// chapter sidebar sits this far below the top of the sticky section nav (nav height + breathing room)
const ASIDE_GAP = 96;

// last chapter heading that has scrolled past the sticky navs
const useActiveHeading = (ids) => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - 250 <= 0) current = id;
        else break;
      }
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
  }, [ids]);
  return active;
};

const ReadingProgress = () => {
  const bar = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      if (bar.current) bar.current.style.transform = `scaleX(${ratio})`;
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
  return (
    <div className={g.progress} aria-hidden="true">
      <span ref={bar} />
    </div>
  );
};

// tickable checklist; ticks are kept in this browser only
const Checklist = ({ id, items }) => {
  const key = `bc-guide-two:${id}`;
  const [done, setDone] = useState(() => items.map(() => false));
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(key) || "null");
      if (Array.isArray(saved) && saved.length === items.length) setDone(saved.map(Boolean));
    } catch (e) {
      // storage unavailable: start unticked
    }
  }, [key, items.length]);
  const toggle = (i) => {
    const next = done.map((v, j) => (j === i ? !v : v));
    setDone(next);
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch (e) {
      // storage unavailable: ticks last for this visit only
    }
  };
  const count = done.filter(Boolean).length;
  return (
    <div className={g.checklist}>
      <div className={g.checkMeter} aria-hidden="true">
        <div className={g.checkTrack}>
          <span style={{ width: `${(count / items.length) * 100}%` }} />
        </div>
        <em>
          {count} / {items.length}
        </em>
      </div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            <label className={done[i] ? g.checkDone : undefined}>
              <input type="checkbox" checked={done[i]} onChange={() => toggle(i)} />
              <span>{item}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Figure = ({ b }) => (
  <figure className={g.figure}>
    <div className={g.figureFrame}>
      <Image src={b.src} alt={b.alt} width={b.w} height={b.h} sizes="(max-width: 991px) 100vw, 820px" />
    </div>
    {b.captionTitle && (
      <figcaption>
        <strong>{b.captionTitle}</strong>
        <span>{b.caption}</span>
      </figcaption>
    )}
  </figure>
);

const DataTable = ({ b }) => (
  <div className={g.tableWrap}>
    <table className={g.table}>
      <thead>
        <tr>
          {b.head.map((h, i) => (
            <th key={i} scope="col">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {b.rows.map((row, ri) => (
          <tr key={ri}>
            {row.map((cell, ci) =>
              ci === 0 ? (
                <th key={ci} scope="row">
                  {cell}
                </th>
              ) : (
                <td key={ci} data-label={b.headText[ci]}>
                  {cell}
                </td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const Block = ({ b }) => {
  switch (b.t) {
    case "h":
      return b.level === 3 ? (
        <h3 id={b.id} className={g.h3}>
          {b.text}
        </h3>
      ) : (
        <h4 id={b.id} className={g.h4}>
          {b.text}
        </h4>
      );
    case "p":
      return <p>{b.text}</p>;
    case "answer":
      return (
        <div className={g.answer}>
          <p>{b.text}</p>
        </div>
      );
    case "note":
      return (
        <div className={g.note}>
          <i className="bi bi-lightbulb" aria-hidden="true"></i>
          <p>
            <b>{b.label}</b> {b.text}
          </p>
        </div>
      );
    case "callout":
      return (
        <div className={`${s.callout} ${g.callout}`}>
          <p>{b.text}</p>
        </div>
      );
    case "figure":
      return <Figure b={b} />;
    case "table":
      return <DataTable b={b} />;
    case "list":
      return b.ordered ? (
        <ol className={g.numbered}>
          {b.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : (
        <ul className={g.bullets}>
          {b.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "checklist":
      return <Checklist id={b.id} items={b.items} />;
    case "cards":
      return (
        <div className={g.cardGrid}>
          {b.items.map((item, i) => (
            <div className={g.card} key={i}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      );
    case "steps":
      return (
        <ol className={g.stepper}>
          {b.items.map((item, i) => (
            <li key={i}>
              <span className={g.stepNo} aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "scenarios":
      return (
        <div className={g.scenarioGrid}>
          {b.items.map((item, i) => (
            <article className={g.scenario} key={i}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      );
    case "links":
      return (
        <ul className={g.linkGrid}>
          {b.items.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={g.linkCard}>
                <span>{item.text}</span>
                <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
              </Link>
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};

const BusinessCentralGuideTwo = () => {
  const { active, navTop } = useSectionNav(NAV);
  const activeHeading = useActiveHeading(HEADING_IDS);

  return (
    <>
      <PageSeo type="Article" title={PAGE_TITLE} description={PAGE_DESC} image="/img/chapter5-5.png" imageAlt="Microsoft Dynamics 365 Business Central guide for SMBs" faqs={FAQS} />
      <ReadingProgress />

      {/* ===== Hero ===== */}
      <section className={`${s.hero} ${g.hero}`}>
        <div className="container">
          <nav aria-label="breadcrumb" className={s.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/guides/">Guides</Link>
            <i className="bi bi-chevron-right"></i>
            <span>{H1}</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${s.heroSplit}`}>
              <h1 className={`${s.heroTitle} ${g.heroTitle}`}>{H1}</h1>
              {INTRO.map((text, i) => (
                <p className={`${s.heroLead} ${g.heroLead}`} key={i}>
                  {text}
                </p>
              ))}
              <div className={`${s.heroActions} ${s.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>
                    Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
                <Link href="#powerBIModals" data-bs-toggle="modal" className={`${s.ghostBtn} ${g.ghostBtn}`}>
                  Download as PDF <i className="bi bi-file-earmark-pdf"></i>
                </Link>
              </div>
            </div>
            <div className="col-lg-5">
              <div className={s.heroVisual}>
                <Image src="/img/chapter5-5.png" alt="Microsoft Dynamics 365 Business Central Role Centre on a laptop" width={992} height={499} priority sizes="(max-width: 991px) 100vw, 480px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={NAV} active={active} navTop={navTop} showCta={false} />

      {/* ===== At a glance ===== */}
      <section id="at-a-glance" className={`${s.block} ${s.anchor}`}>
        <div className="container">
          <h2 className={s.h2}>{GLANCE_TITLE}</h2>
          <dl className={g.glanceGrid}>
            {GLANCE.map((item) => (
              <div className={g.glanceCard} key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <div className={`${s.callout} ${g.callout}`}>
            <p>{GLANCE_CALLOUT}</p>
          </div>
        </div>
      </section>

      {/* ===== Table of contents ===== */}
      <section id="table-of-contents" className={`${s.block} ${s.blockTint} ${s.anchor}`}>
        <div className="container">
          <h2 className={s.h2}>Table of Contents</h2>
          <ol className={g.tocGrid}>
            {CHAPTERS.map((c, i) => (
              <li className={g.tocCard} key={c.id}>
                <a href={`#${c.id}`} className={g.tocHead}>
                  <span className={g.tocNum}>{pad(i + 1)}</span>
                  <span className={g.tocTitle}>{c.title}</span>
                </a>
                <ul>
                  {c.toc
                    .filter((t) => t.level === 3)
                    .map((t) => (
                      <li key={t.id}>
                        <a href={`#${t.id}`}>{t.title}</a>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Chapters ===== */}
      {CHAPTERS.map((c, i) => (
        <section key={c.id} id={c.id} className={`${s.block} ${i % 2 ? s.blockTint : ""} ${s.anchor}`}>
          <div className="container">
            <header className={g.chapterHead}>
              <span className={g.chapterNum} aria-hidden="true">
                {pad(i + 1)}
              </span>
              <div>
                <span className={s.kicker}>Chapter {i + 1}</span>
                <h2 className={`${s.h2} ${g.chapterTitle}`}>{c.title}</h2>
              </div>
            </header>
            <div className={g.layout}>
              <aside className={g.aside} style={{ top: navTop + ASIDE_GAP, maxHeight: `calc(100vh - ${navTop + ASIDE_GAP + 20}px)` }}>
                <nav aria-label={`Chapter ${i + 1}`}>
                  <ul>
                    {c.toc.map((t) => (
                      <li key={t.id} className={t.level === 4 ? g.asideSub : undefined}>
                        <a href={`#${t.id}`} className={activeHeading === t.id ? g.asideActive : undefined} aria-current={activeHeading === t.id ? "true" : undefined}>
                          {t.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </aside>
              <div className={g.article}>
                {c.blocks.map((b, bi) => (
                  <Block b={b} key={bi} />
                ))}
              </div>
            </div>
            {/* download banner: opens FormGuide's PDF form */}
            <Link href="#powerBIModals" data-bs-toggle="modal" className={`${g.downloadBanner} ${g.chapterCta}`}>
              <Image src={`/img/bc-guide-download-cta-${(i % 3) + 1}.png`} alt="Download the Business Central guide for SMBs as a PDF" width={1260} height={511} sizes="(max-width: 1199px) 100vw, 1100px" />
            </Link>
          </div>
        </section>
      ))}

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${s.block} ${s.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={s.faqAside}>
                <h2 className={s.h2}>{FAQ_TITLE}</h2>
                <div className={`${s.faqCtaCard} ${s.faqCtaCardFlat} text-center`}>
                  <Image src="/img/MaskGroup8.png" alt="Business Central consultant" width={339} height={483} sizes="(max-width: 991px) 60vw, 240px" style={{ width: "60%", height: "auto", margin: "0 auto" }} />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>
                      Book a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={FAQS} initialCount={8} step={8} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Next steps ===== */}
      <section id="next-steps" className={`${s.ctaBand} ${s.anchor}`}>
        <div className="container">
          <div className={g.nextBox}>
            <div className="row align-items-center gy-4">
              <div className="col-lg-7">
                <h2 className={`${s.h2} ${s.h2Light}`}>{NEXT.title}</h2>
                <p>{NEXT.intro}</p>
                <p>{NEXT.lead}</p>
              </div>
              <div className="col-lg-5">
                <div className={g.nextVisual}>
                  <Image src="/img/chapter7-6.png" alt="Dynamics 365 Business Central Role Centre on a laptop" width={1190} height={948} sizes="(max-width: 991px) 100vw, 440px" />
                </div>
              </div>
            </div>
            <div className={g.nextGrid}>
              {NEXT.items.map((item, i) => (
                <div className={g.nextCard} key={i}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <p className={g.nextContact}>{NEXT.contact}</p>
          </div>
        </div>
      </section>
      <FormGuide />
    </>
  );
};

export default BusinessCentralGuideTwo;
