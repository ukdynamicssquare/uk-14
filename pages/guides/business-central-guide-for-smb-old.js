import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
// import FormGuideBusinessCentral from "../../components/FormGuideBusinessCentral";
import FormGuide from "../../components/FormGuide";
import PageSeo from "../../components/PageSeo";
const FAQS = [
  {
    "question": "What is Dynamics 365 Business Central used for?",
    "answer": "Business Central is used to run a small or mid-sized company's finance and operations in one system. Typical uses include accounting, VAT, sales and purchase processing, stock and warehouse control, project costing, manufacturing, service management and management reporting."
  },
  {
    "question": "Is Business Central suitable for small businesses?",
    "answer": "Yes. Business Central is designed for SMBs and is commonly adopted by businesses with roughly 5 to several hundred users that have outgrown entry-level accounting software. Very small businesses with simple bookkeeping needs may find accounting software such as Xero or QuickBooks sufficient."
  },
  {
    "question": "How much does Business Central cost in the UK?",
    "answer": "Microsoft's UK list prices are £61.50 per user per month for Essentials, £84.60 for Premium and £6.20 for Team Members, excluding VAT and billed annually. Implementation, data migration, training, add-on apps and support are additional."
  },
  {
    "question": "What is the difference between Business Central Essentials and Premium?",
    "answer": "Premium includes everything in Essentials plus manufacturing and service management. Most distributors, retailers and professional services firms use Essentials; manufacturers and businesses running service contracts and dispatch need Premium."
  },
  {
    "question": "What can a Business Central Team Member do?",
    "answer": "A Team Member can read data, update existing records, approve or reject requests, manage quotes, edit their own personal details and complete time sheets. Team Members cannot create or post core transactions such as sales orders, purchase invoices or journals."
  },
  {
    "question": "Is Copilot free in Business Central?",
    "answer": "Copilot features are included with Business Central online licences at no extra cost. AI agents, such as the Sales Order Agent, Payables Agent and Expense Agent, consume Copilot Credits, which are billed separately through prepaid packs or pay-as-you-go. Copilot is not available on-premises."
  },
  {
    "question": "Can Business Central be installed on-premises?",
    "answer": "Yes, but new customers can only license on-premises Business Central through subscription; perpetual licences ended for new customers on 1 April 2025. On-premises customers manage their own infrastructure and upgrades and do not get Copilot or AI agents."
  },
  {
    "question": "How long does a Business Central implementation take?",
    "answer": "A finance-led, single-company implementation typically takes around two to three months. Distribution projects with warehousing and integrations often take three to six months, and manufacturing or multi-entity projects six months or more."
  },
  {
    "question": "Does Business Central support Making Tax Digital?",
    "answer": "Yes. The UK version of Business Central includes Making Tax Digital for VAT, allowing you to retrieve VAT obligations and submit VAT returns to HMRC directly from the system."
  },
  {
    "question": "Will Business Central support UK mandatory e-invoicing in 2029?",
    "answer": "Business Central includes an E-Documents framework that supports Peppol formats, and Microsoft updates UK localisation as regulations are finalised. HMRC's detailed specifications are expected during 2027 to 2028, so staying on a supported, current version is the most important preparation."
  },
  {
    "question": "Does Business Central include UK payroll?",
    "answer": "No. Business Central does not include UK payroll. Businesses use a dedicated payroll product and post payroll journals into Business Central, or use a third-party integration."
  },
  {
    "question": "Is Business Central the same as Dynamics NAV?",
    "answer": "Business Central is the successor to Dynamics NAV. It builds on NAV's accounting and operations logic but runs as a modern cloud service, uses extensions instead of modified source code, and adds Copilot, Power Platform integration and continuous updates."
  },
  {
    "question": "Can I migrate from Sage, Xero or QuickBooks to Business Central?",
    "answer": "Yes. Master data, open balances and summarised history are migrated using configuration packages and migration tools. The project is also a chance to redesign your chart of accounts and dimensions for better reporting."
  },
  {
    "question": "How often is Business Central updated?",
    "answer": "Microsoft releases two major updates a year, in April and October, plus monthly minor updates. Online administrators can schedule each major update within a five-month window to allow testing."
  },
  {
    "question": "Where is Business Central data stored for UK customers?",
    "answer": "Business Central online environments for UK customers are hosted in Microsoft's UK Azure regions. Administrators can confirm the Azure region of each environment in the Business Central admin centre."
  },
  {
    "question": "Is there a free trial of Business Central?",
    "answer": "Yes. Microsoft offers a free trial of Business Central so you can explore the product with demo data. A trial is most useful alongside a guided demonstration based on your own processes."
  }
];

// Backup of the previous guide design (same copy), kept noindexed. Live page: /guides/business-central-guide-for-smb/
const PowerBIGuide = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [display, setDisplay] = useState("ds-none");
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const listenToScroll = () => {
    let heightToShowFrom = 600;
    let heightToHideFrom = 48500;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToShowFrom) {
      setDisplay("hd-div");
      isVisible && // to limit setting state only the first time
        setIsVisible(true);
    } else {
      setDisplay("hd-div");
      setIsVisible(false);
    }

    if (winScroll > heightToHideFrom) {
      setIsVisible(false);
    }
  };
  return (
    <>
      <PageSeo
        type="Article"
        title="Dynamics 365 Business Central For Small Business [Guide 2026]"
        description="Learn how Dynamics 365 Business Central helps for small businesses streamline operations, boost productivity, and drive growth efficiently."
        image="/img/chapter5-5.png"
        faqs={FAQS}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <section className="banner-guide hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="guide-left">
                <h1>Microsoft Dynamics 365 Business Central: The Complete Guide for SMBs</h1>
                <p>Microsoft Dynamics 365 Business Central is Microsoft's ERP for small and mid-sized businesses. It replaces separate accounting, stock, sales and project tools with one system that runs finance and operations from the same data.</p>
                <p>This guide is written for UK owners, CEOs, Finance Directors and IT managers who are deciding whether Business Central fits their business. It covers what the product does, what it costs in the UK, how Copilot and AI agents work, how implementation and migration run, and where Business Central is not the right choice. Facts are checked against Microsoft documentation as of November 2026 and the current release, version 29 (2026 release wave 2).</p>
              </div>
            </div>
            <div className="col-lg-7 align-self-center text-center">
              <Image
                src="/img/chapter5-5.png"
                alt="Microsoft Dynamics 365 Business Central guide for SMBs"
                width={992}
                height={499}
                priority={true}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="tbale-wrr-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <header className="section-header">
                <h2>Table of Contents</h2>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-1" rel="" target="_self">
                  <img src="/img/business-central-logo-3.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 1</h3>
                  <p>What is Business Central and how it works</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-2" rel="" target="_self">
                  <img src="/img/power-2.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 2</h3>
                  <p>Business Central features, reporting and analytics</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-3" rel="" target="_self">
                  <img src="/img/power-3.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 3</h3>
                  <p>Copilot, AI agents and integrations</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-4" rel="" target="_self">
                  <img src="/img/power-4.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 4</h3>
                  <p>Business Central cloud vs on-premises</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-5" rel="" target="_self">
                  <img src="/img/power-5.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 5</h3>
                  <p>Business Central licensing and pricing in the UK</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-6" rel="" target="_self">
                  <img src="/img/power-6.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 6</h3>
                  <p>Implementation, migration and compliance</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-7" rel="" target="_self">
                  <img src="/img/group-2330.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 7</h3>
                  <p>Scalability, benefits and how Business Central compares</p>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="table-of-content-list text-center">
                <a href="#tabs-8" rel="" target="_self">
                  <img src="/img/power-7.png" alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <h3>Chapter 8</h3>
                  <p>Readiness, common challenges and choosing a partner</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isVisible && (
        <div className={display}>
          <ul>
            <li>
              <a href="#tabs-1" rel="" target="_self">
                1. What is BC
              </a>
            </li>
            <li>
              <a href="#tabs-2" rel="" target="_self">
                2. Features &amp; Reporting
              </a>
            </li>
            <li>
              <a href="#tabs-3" rel="" target="_self">
                3. Copilot &amp; Integrations
              </a>
            </li>
            <li>
              <a href="#tabs-4" rel="" target="_self">
                4. Cloud vs On-premises
              </a>
            </li>
            <li>
              <a href="#tabs-5" rel="" target="_self">
                5. Pricing &amp; Licensing
              </a>
            </li>
            <li>
              <a href="#tabs-6" rel="" target="_self">
                6. Implementation
              </a>
            </li>
            <li>
              <a href="#tabs-7" rel="" target="_self">
                7. Industries &amp; Comparisons
              </a>
            </li>
            <li>
              <a href="#tabs-8" rel="" target="_self">
                8. Choosing a Partner
              </a>
            </li>
          </ul>
        </div>
      )}
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h2>Business Central at a glance</h2>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Question</th><th scope="col">Short answer</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">What is it?</th><td>A cloud ERP covering finance, sales, purchasing, inventory, warehousing, projects, manufacturing and service</td></tr>
                      <tr><th scope="row">Who is it for?</th><td>Growing SMBs that have outgrown entry-level accounting software such as Sage 50, Xero or QuickBooks</td></tr>
                      <tr><th scope="row">How is it deployed?</th><td>Mainly as SaaS on Microsoft Azure; on-premises is still available on subscription</td></tr>
                      <tr><th scope="row">UK price (list, ex VAT, billed annually)</th><td>Essentials £61.50, Premium £84.60, Team Members £6.20 per user per month</td></tr>
                      <tr><th scope="row">Is Copilot included?</th><td>Yes, Copilot features are included in the online licence. Autonomous AI agents are billed separately by usage</td></tr>
                      <tr><th scope="row">How often is it updated?</th><td>Two major updates a year (April and October) plus monthly minor updates</td></tr>
                      <tr><th scope="row">UK compliance</th><td>Built-in Making Tax Digital for VAT; e-invoicing framework ahead of the UK's April 2029 mandate</td></tr>
                      <tr><th scope="row">Typical implementation</th><td>Weeks for a simple finance-led rollout; several months for multi-entity, manufacturing or heavy integration</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>If you already know Business Central is on your shortlist and want a scoped estimate, <Link href="/contact-us/">speak to a Business Central consultant</Link> at Dynamics Square.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-1"
        className="col-yellow"
        style={{ background: "#04828c" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 1</strong> What is Business Central and how it works
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/business-central-logo-3.png"
                    alt="What is Business Central and how it works"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">What is Microsoft Dynamics 365 Business Central?</h3>
                <p><b>Microsoft Dynamics 365 Business Central is a cloud-based enterprise resource planning (ERP) system for small and mid-sized businesses. It manages financials, sales, purchasing, inventory, warehousing, projects, manufacturing and service in one database, with Microsoft Copilot built in.</b></p>
                <p>In practical terms, Business Central gives a growing company one version of the truth. A sales order reserves stock, triggers a purchase if stock is short, posts revenue and cost to the general ledger, and feeds the cash flow forecast, without anyone re-keying data between systems.</p>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter1-9.png" alt="Business Central as one cloud ERP connecting finance, sales, inventory, customer service and HR" width={733} height={449} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <h4 className="h4 mt-4">Where Business Central came from</h4>
                <p>Business Central is the successor to Microsoft Dynamics NAV, which began life as Navision. Microsoft launched Business Central in 2018, carrying NAV's proven accounting and operations logic onto a modern cloud platform. Many UK businesses still run NAV, which is why the <Link href="/dynamics-nav-to-business-central/">NAV to Business Central upgrade</Link> is one of the most common projects in the Microsoft SMB market.</p>
                <h4 className="h4 mt-4">Who Business Central is for</h4>
                <p>Business Central suits organisations that need more than an accounting package but less than a large-enterprise ERP. Typical fits include:</p>
                <ul>
                  <li>Companies with 5 to several hundred users that have outgrown Sage 50, Xero or QuickBooks.</li>
                  <li>Distributors, wholesalers and e-commerce businesses managing stock across locations.</li>
                  <li>Small and mid-sized manufacturers (with the Premium licence).</li>
                  <li>Project-based and professional services firms that need job costing and time recording.</li>
                  <li>Multi-company groups that need intercompany postings and consolidation.</li>
                </ul>
                <p>Microsoft does not set a hard user limit. Very large or highly complex global operations usually fit <Link href="/products/microsoft-dynamics-365-finance/">Dynamics 365 Finance</Link> and Supply Chain Management better; the comparison section later in this guide explains where that line sits.</p>
                <h4 className="h4 mt-4">Business Central editions</h4>
                <p>There are two full-user editions. <b>Essentials</b> covers finance, sales, purchasing, inventory, warehousing, projects and basic HR. <b>Premium</b> adds manufacturing and service management. Light users can be licensed as <b>Team Members</b>. Licensing is covered in detail in the pricing section, and you can explore the product further on our <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central overview</Link>.</p>
                <hr className="my-5" />
                <h3 className="h3-b">How Business Central works: architecture explained</h3>
                <p>Business Central online is software as a service (SaaS) hosted by Microsoft on Azure. Microsoft runs the servers, database, backups, security patching and version updates; your business configures and uses the application. For UK customers, environment data is stored in Microsoft's UK Azure regions.</p>
                <h4 className="h4 mt-4">Tenants, environments and companies</h4>
                <ul>
                  <li><b>Tenant:</b> your organisation's Microsoft cloud account, managed through Microsoft Entra ID (formerly Azure Active Directory).</li>
                  <li><b>Environments:</b> separate instances of Business Central. Each subscription includes one production environment and three sandbox environments for testing and training.</li>
                  <li><b>Companies:</b> separate legal entities inside an environment, each with its own ledger, so a group can run several UK and overseas entities in one place.</li>
                </ul>
                <h4 className="h4 mt-4">The application layers</h4>
                <p>Business Central is built in layers, which is why it can be tailored without breaking upgrades:</p>
                <ol>
                  <li><b>Base application:</b> Microsoft's standard ERP functionality.</li>
                  <li><b>Localisation:</b> country-specific features. From version 27, the UK localisation runs as a set of extensions on top of the worldwide base app.</li>
                  <li><b>AppSource apps:</b> certified add-ons from independent software vendors (ISVs) for document capture, warehouse scanning, payroll links, EDI and more.</li>
                  <li><b>Per-tenant extensions:</b> your own customisations, written in Microsoft's AL language.</li>
                </ol>
                <p>Because customisations sit in extensions rather than inside Microsoft's code, they survive Microsoft's updates far better than the modified code bases common in older NAV systems. That is the single biggest technical difference between NAV and Business Central. If you need tailored functionality, see our approach to <Link href="/products/dynamics-365-business-central/customisation/">Business Central customisation</Link>.</p>
                </div>
              <div className="iner-pp">
                <img src="/img/business-central-architecture-layers.png" alt="Business Central architecture showing the four application layers: base application, localisation, AppSource apps and per-tenant extensions" width={1344} height={784} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <p className="text-center"><b>Business Central architecture · 4 application layers</b></p>
                <p className="text-center"><small>People and connected systems work against the same environment, while your own customisations stay separate from Microsoft's code.</small></p>
                <h4 className="h4 mt-4">How users and systems connect</h4>
                <ul>
                  <li><b>People:</b> web browser, Windows, iOS and Android apps, plus Microsoft Teams, Outlook and Excel.</li>
                  <li><b>Systems:</b> REST APIs and OData, Power Platform connectors, Dataverse, and, since version 29, an MCP (Model Context Protocol) server that lets approved AI tools run data queries against Business Central.</li>
                  <li><b>Legacy integrations:</b> version 29 makes disabling SOAP web services on Microsoft UI pages mandatory. Older integrations that depended on them need to move to APIs.</li>
                </ul>
                <h4 className="h4 mt-4">How updates work</h4>
                <p>Microsoft ships two major updates a year, in April and October, called release waves. Monthly minor updates add features, regulatory changes and fixes in between. For a major update, administrators can schedule the upgrade on any date within a five-month window, which allows time to test extensions in a sandbox first.</p>
                <p>Since September 2026, Microsoft no longer publishes Business Central release plans. New capabilities are announced on Microsoft's AI at Work roadmap instead, so check that roadmap rather than older release-plan pages.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-2"
        className="col-yellow col-yel"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 2</strong> Business Central features, reporting and analytics
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/Busines-cent-Accelerate.png"
                    alt="Business Central features, reporting and analytics"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">Business Central features and capabilities</h3>
                <p>Business Central's standard functionality covers most of what an SMB needs to run finance and operations. This section explains each area in business terms, flags which licence it needs, and notes where businesses usually add an extension. For a module-by-module overview, see <Link href="/products/dynamics-365-business-central/advantages-capabilities/">Business Central capabilities</Link>.</p>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter4-1.png" alt="Business Central modules: finance, supply chain, sales, service, manufacturing, warehouse, human resources and expense management" width={754} height={494} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <h4 className="h4 mt-4">Essentials vs Premium: what each licence includes</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Capability</th><th scope="col">Essentials</th><th scope="col">Premium</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Financial management, VAT, multi-currency, consolidation</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Sales, purchasing and basic CRM</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Inventory, multiple locations, lot and serial tracking</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Warehouse management (bins, picks, put-aways, shipments)</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Supply planning, demand forecasting, assembly</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Project management and time sheets</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Basic HR records</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Shopify connector, e-documents, sustainability management</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Copilot in Business Central</th><td>Yes</td><td>Yes</td></tr>
                      <tr><th scope="row">Manufacturing (production orders, routings, capacity planning)</th><td>No</td><td>Yes</td></tr>
                      <tr><th scope="row">Service management (service items, contracts, dispatching)</th><td>No</td><td>Yes</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Microsoft's licensing guide defines Premium as everything in Essentials plus service order management and manufacturing. The edition is set per environment, so you cannot give some full users Premium and others Essentials in the same environment.</p>
                <h4 className="h4 mt-4">Financial management and accounting</h4>
                <p>Finance is the core of Business Central and the main reason most SMBs move to it. Standard capabilities include:</p>
                <ul>
                  <li>General ledger with dimensions for analysis by department, project, region or any other driver.</li>
                  <li>Accounts payable and receivable, payment journals, reminders and finance charges.</li>
                  <li>VAT management, including UK Making Tax Digital submission.</li>
                  <li>Bank reconciliation, with Copilot suggesting matches.</li>
                  <li>Multi-currency, intercompany postings and group consolidation.</li>
                  <li>Budgets, cash flow forecasts, deferrals and allocation accounts.</li>
                  <li>Fixed assets, including depreciation, insurance and maintenance.</li>
                  <li>Subscription billing with revenue and expense recognition, for recurring-revenue businesses.</li>
                  <li>Financial reporting (formerly "account schedules") for management accounts and board packs.</li>
                </ul>
                <p><b>Example:</b> a UK group with three trading companies and a euro subsidiary posts intercompany recharges automatically, revalues currency balances at month end and runs a consolidated P&amp;L without exporting to spreadsheets. Our guide to <Link href="/blog/multi-entity-multi-currency-consolidation-in-business-central/">multi-entity and multi-currency consolidation</Link> explains the setup, and the <Link href="/products/dynamics-365-business-central/financial-management/">financial management module</Link> page covers the full feature list.</p>
                <h4 className="h4 mt-4">Sales and customer relationship management</h4>
                <p>Business Central handles the full quote-to-cash process: quotes, blanket orders, sales orders, partial shipments, invoicing, returns and credit notes. Price lists and discounts can be set by customer, group, campaign, quantity or date. Copilot can suggest sales lines from a plain-language request or an attached file.</p>
                <p>Built-in CRM covers contacts, interaction history, campaigns, segmentation and opportunity tracking, with Outlook integration. That is enough for many SMBs. Businesses with larger sales teams, pipeline forecasting or marketing automation needs usually integrate <Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</Link>. Read more about <Link href="/blog/crm-functionality-in-dynamics-365-business-central/">CRM functionality in Business Central</Link> and <Link href="/products/dynamics-365-business-central/sales-order-management/">sales order management</Link>.</p>
                <h4 className="h4 mt-4">Purchasing and vendor management</h4>
                <p>Purchasing covers vendor records, purchase quotes, blanket and standard orders, returns, approvals, vendor price lists and invoice discounts. Item charges let you add freight, duty and insurance to stock cost for accurate landed cost. Drop shipments and special orders support businesses that ship direct from suppliers.</p>
                <p>For inbound invoices, the Payables Agent (covered in the Copilot section) can read PDF vendor invoices and prepare draft purchase invoices matched to purchase order lines for human approval.</p>
                <h4 className="h4 mt-4">Inventory and warehouse management</h4>
                <p>Inventory control includes items, variants, stock-keeping units, multiple locations, transfers, lot and serial number tracking, item attributes and substitutions, and physical counts. Costing methods include FIFO, LIFO, average, standard and specific.</p>
                <p>Warehousing scales from simple to advanced on the same licence:</p>
                <ul>
                  <li><b>Basic:</b> inventory picks and put-aways at a location.</li>
                  <li><b>Advanced:</b> bins, warehouse receipts and shipments, directed put-away and pick, cross-docking and FEFO (first expired, first out) picking.</li>
                </ul>
                <p>High-volume warehouses typically add handheld scanning. Tasklet Factory's <Link href="/wms-for-business-central/">Mobile WMS for Business Central</Link> is a widely used third-party option.</p>
                <h4 className="h4 mt-4">Supply chain planning</h4>
                <p>Planning tools help you buy and make the right quantities at the right time:</p>
                <ul>
                  <li>Planning and requisition worksheets that calculate supply from demand, reorder policies and lead times.</li>
                  <li>Demand forecasts and reservations.</li>
                  <li>Order promising, using available-to-promise and capable-to-promise logic.</li>
                  <li>Assembly management, including assemble-to-order, on Essentials.</li>
                </ul>
                <p>The <Link href="/products/dynamics-365-business-central/supply-chain-management/">Business Central supply chain management</Link> page covers these features in more depth.</p>
                <h4 className="h4 mt-4">Manufacturing (Premium)</h4>
                <p>The Premium licence adds production bills of materials, routings, work and machine centres, production orders, capacity planning, finite loading, version management and standard cost worksheets. Version 29 strengthened subcontracting, including carrying subcontracting instructions onto purchase orders and using inventory picks for subcontracted work.</p>
                <p>Business Central also includes quality management for inspections on purchase receipts, production output and assembly output; version 29 reduced manual work in quality tests. Business Central suits discrete and light process manufacturing. Manufacturers with complex process, formula or regulated batch requirements often add an industry extension; see <Link href="/industries/business-central-for-process-manufacturing/">Business Central for process manufacturing</Link>.</p>
                <h4 className="h4 mt-4">Project management and job costing</h4>
                <p>Projects (previously called "jobs") let you set up tasks, budgets and resources, record time through time sheets, calculate work in progress (WIP), and invoice on fixed-price or time-and-materials terms. Project managers see budget versus actual cost and profitability in real time. Learn more about <Link href="/products/dynamics-365-business-central/project-management/">Business Central project management</Link>.</p>
                <h4 className="h4 mt-4">Service management (Premium)</h4>
                <p>Service management tracks service items, service contracts and warranties, service orders and repairs, dispatching, and service pricing. It integrates with <Link href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service</Link> for businesses that need mobile technician scheduling. Field Service is a separate Dynamics 365 application with its own licence. See <Link href="/products/dynamics-365-business-central/service-management/">Business Central service management</Link>.</p>
                <h4 className="h4 mt-4">Human resources and expenses</h4>
                <p>Business Central includes basic HR: employee records, contracts, qualifications, absence registration and employee expense reimbursement. <b>It does not include UK payroll.</b> UK businesses run payroll in a dedicated payroll product and post journals into Business Central, or use a certified integration.</p>
                <p>For expenses, Microsoft's Expense Agent is in public preview, and established add-ons such as <Link href="/continia-expense-management/">Continia Expense Management</Link> are available today.</p>
                <h4 className="h4 mt-4">Sustainability management</h4>
                <p>Business Central includes sustainability management for recording greenhouse gas emissions across scopes 1, 2 and 3, tracking water and waste, and reporting ESG figures. Version 29 extended carbon footprint tracking to fixed assets, item journals, purchase documents and service management. This matters for SMBs that supply large UK corporates and public bodies, which increasingly ask suppliers for emissions data.</p>
                <h4 className="h4 mt-4">E-commerce and Shopify</h4>
                <p>The standard Shopify connector synchronises items, prices, stock, customers and orders between Shopify and Business Central. Version 29 added management of Shopify B2B companies, catalogues and pricing, plus handling of order changes, exchanges and refunds. See our <Link href="/shopify-connector-business-central/">Shopify connector for Business Central</Link>. For B2B portals beyond Shopify, <Link href="/sana-commerce-for-dynamics-365-business-central/">Sana Commerce</Link> is a common choice.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Reporting, analytics and Power BI</h3>
                <p>Business Central gives SMBs four layers of reporting, from quick answers inside the app to group-wide dashboards. Most businesses use all four.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Layer</th><th scope="col">What it does</th><th scope="col">Typical user</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Role Centres and KPIs</th><td>Live tiles and charts on each user's home page, such as overdue invoices, stock below reorder point or cash position</td><td>Everyone</td></tr>
                      <tr><th scope="row">Analysis mode and Copilot analysis assist</th><td>Pivot-style grouping, filtering and totals on any list, with Copilot building an analysis from a plain-English request</td><td>Finance, operations, managers</td></tr>
                      <tr><th scope="row">Financial reporting and Excel</th><td>Management accounts, board packs and statutory views; "Open in Excel" and Excel layouts for ad hoc work</td><td>Finance team</td></tr>
                      <tr><th scope="row">Power BI</th><td>Interactive dashboards across Business Central and other data sources</td><td>Directors, finance, operations leads</td></tr>
                    </tbody>
                  </table>
                </div>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter1-10.png" alt="Business Central Role Centre KPIs and analytics shown on tablets" width={580} height={537} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <h4 className="h4 mt-4">What's new in reporting in version 29</h4>
                <ul>
                  <li>Financial report definition changes are now always logged, and you can trace where each G/L account is used across reports. This supports audit trails for management reporting.</li>
                  <li>Several financial reports can be run together into a single PDF, which speeds up month-end packs.</li>
                  <li>Report output can be automated, and document reports (invoices, statements) can be branded with report themes using the updated Word add-in.</li>
                  <li>List views and analysis tabs can be bookmarked for reuse.</li>
                </ul>
                <h4 className="h4 mt-4">Power BI integration</h4>
                <p>Microsoft publishes Power BI apps for Business Central covering finance, sales, purchasing, inventory, projects and manufacturing, plus a Subscription Billing app. Reports can be embedded in Business Central Role Centres so users see them without switching tools. Users who view shared Power BI content generally need their own Power BI licence or access through capacity-based licensing; check this when budgeting.</p>
                <p>For groups that combine Business Central with CRM, e-commerce or legacy data, <Link href="/ai-solutions/microsoft-fabric/">Microsoft Fabric</Link> provides a governed analytics layer above individual systems.</p>
                <p>See our <Link href="/products/microsoft-power-bi/">Power BI services</Link> and examples of <Link href="/blog/power-bi-reports/">Power BI reports for finance and operations</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-3"
        className="col-yellow col-blue"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 3</strong> Copilot, AI agents and integrations
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/busine-integration.png"
                    alt="Copilot, AI agents and integrations"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">Microsoft Copilot and AI agents in Business Central</h3>
                <p><b>Copilot in Business Central is included with Business Central online licences at no extra cost. Autonomous AI agents, such as the Sales Order Agent and Payables Agent, are billed separately by usage in Copilot Credits.</b> That distinction is the most important thing to understand when budgeting for AI in Business Central.</p>
                <p>Copilot is available in Business Central online only. On-premises deployments do not get Copilot or agents.</p>
                <h4 className="h4 mt-4">Copilot features: assistance inside everyday tasks</h4>
                <p>Copilot features help users complete work faster, but a person stays in control of every step:</p>
                <ul>
                  <li><b>Sales line suggestions:</b> builds sales lines from a plain-language request or an attached file.</li>
                  <li><b>Bank reconciliation assist:</b> proposes matches between bank statement lines and ledger entries.</li>
                  <li><b>Analysis assist:</b> creates grouped and filtered analysis views from a typed question.</li>
                  <li><b>Marketing text:</b> drafts product descriptions from item attributes for web shops and catalogues.</li>
                  <li><b>Item substitutions and number series suggestions:</b> speeds up master data setup.</li>
                  <li><b>E-document matching:</b> suggests links between incoming vendor e-invoices and purchase order lines.</li>
                  <li><b>Microsoft Copilot chat:</b> in version 29, the earlier "Chat with Copilot" is being replaced by a Microsoft Copilot chat experience, currently in public preview, that answers questions about your Business Central data and how to use the product.</li>
                </ul>
                <h4 className="h4 mt-4">AI agents: work done on your behalf</h4>
                <p>Agents go further than Copilot. They monitor an inbox or a queue, carry out multi-step tasks, and hand results to a human supervisor for review.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Agent</th><th scope="col">Status (Nov 2026)</th><th scope="col">What it does</th><th scope="col">Human checkpoint</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Sales Order Agent</th><td>Generally available</td><td>Reads customer emails in a shared mailbox, checks availability, creates sales quotes and orders, drafts replies</td><td>Staff review the quote, order and email before anything is sent</td></tr>
                      <tr><th scope="row">Payables Agent</th><td>Generally available</td><td>Reads PDF vendor invoices from a shared mailbox, creates purchase document drafts and matches them to purchase order lines</td><td>Finance reviews drafts before approval and posting</td></tr>
                      <tr><th scope="row">Expense Agent</th><td>Public preview</td><td>Reads uploaded receipts, categorises expenses and prepares expense reports</td><td>Managers approve expense reports</td></tr>
                      <tr><th scope="row">Custom agents (agent design)</th><td>Preview</td><td>Lets organisations design their own agents in plain language, with set permissions</td><td>Defined by the agent design</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Version 29 made agents easier to supervise: a dedicated task pane for all agent tasks, review of agent-generated content directly on pages, notifications on lists, and simpler agent permissions. Version 29 also improved purchase order matching in the Payables Agent.</p>
                <p>Read our explainer on the <Link href="/blog/sales-order-agent-explained-features-setup-and-benefits/">Sales Order Agent</Link> and why <Link href="/blog/why-are-ai-agents-the-game-changer-for-business-central-users/">AI agents matter for Business Central users</Link>.</p>
                <h4 className="h4 mt-4">How agent billing works</h4>
                <p>Microsoft publishes Copilot Credit rates for each agent action. At the time of writing:</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Agent</th><th scope="col">Billing basis</th><th scope="col">Worked example (based on Microsoft's published rates)</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Sales Order Agent</th><td>2 credits to analyse an email or generate a reply; 5 credits per availability check, quote or order action, or attachment with sales data</td><td>100 requests a month, half with an order attachment = 1,650 credits a month</td></tr>
                      <tr><th scope="row">Payables Agent</th><td>50 credits per invoice plus 5 credits per invoice line</td><td>100 invoices a month with 3 lines each = 6,500 credits a month</td></tr>
                      <tr><th scope="row">Expense Agent</th><td>50 credits per uploaded receipt</td><td>200 receipts a month = 10,000 credits a month</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Credits are bought in advance as Copilot Credit packs or paid for monthly through pay-as-you-go via an Azure subscription; both can be used together, and prepaid capacity is consumed first. If capacity runs out, the agent stops until more is added, so set budgets and monitor usage in the Power Platform admin center. Check Microsoft's current Copilot Studio pricing for the per-credit cost in your currency.</p>
                <h4 className="h4 mt-4">Data protection and governance</h4>
                <p>Copilot respects Business Central permissions, so users only see data they are allowed to see. For UK-hosted environments, Copilot processing takes place within the UK geography. Some features may rely on Azure OpenAI services in another geography and are only available if an administrator consents to that data movement, so review the Copilot and agent capabilities page before switching features on.</p>
                <p>Since version 29, Business Central also provides an MCP server for running data queries. This allows approved AI assistants and tools to query Business Central data under your security model, which is worth planning into your AI governance policy.</p>
                <h4 className="h4 mt-4">How to get value from AI without losing control</h4>
                <ol>
                  <li>Pick one high-volume, rules-based process, such as emailed purchase orders or PDF supplier invoices.</li>
                  <li>Measure today's baseline: volume, minutes per document and error rate.</li>
                  <li>Clean the master data the agent relies on (items, prices, vendors, units of measure).</li>
                  <li>Run the agent in a sandbox, then in production with a named supervisor and a credit budget.</li>
                  <li>Compare cost per document and cycle time after 60 to 90 days before expanding.</li>
                </ol>
                <p>For real-world estimates, see <Link href="/blog/copilot-business-central-time-savings/">how much time Copilot can save in Business Central</Link>. Dynamics Square's <Link href="/products/dynamics-365-copilot/">Copilot and AI agent services</Link> cover readiness checks, mailbox and permission setup, billing configuration and supervisor training, and our <Link href="/ai-solutions/copilot-studio/">Copilot Studio</Link> team builds custom agents when standard ones do not fit.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Integrations: Microsoft 365, Power Platform and third-party apps</h3>
                <p>Business Central's biggest practical advantage over most SMB ERPs is how closely it works with the Microsoft tools your staff already use every day.</p>
                <h4 className="h4 mt-4">Microsoft 365: Outlook, Excel, Teams and Word</h4>
                <ul>
                  <li><b>Outlook:</b> see a customer's or vendor's balance and documents alongside an email, and create quotes, orders or invoices without leaving the inbox.</li>
                  <li><b>Excel:</b> open any list in Excel, edit and publish data back with the Excel add-in, and design reports with Excel layouts.</li>
                  <li><b>Teams:</b> share a live Business Central record card in a chat or channel. When an administrator enables it, colleagues with an eligible Microsoft 365 licence can read records shared with them in Teams without a Business Central licence. This access is read-only and requires at least one licensed Business Central user in the organisation.</li>
                  <li><b>Word:</b> design branded invoices, statements and other document layouts with the Word add-in, which was updated in version 29.</li>
                  <li><b>OneDrive and SharePoint:</b> store and share files and attachments linked to Business Central records.</li>
                </ul>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter7-1.png" alt="A Business Central sales invoice shared as a live record in a Microsoft Teams channel" width={925} height={549} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <h4 className="h4 mt-4">Microsoft Power Platform</h4>
                <ul>
                  <li><Link href="/products/microsoft-power-automate/"><b>Power Automate</b></Link><b>:</b> automates approvals, notifications and cross-system workflows using the Business Central connector.</li>
                  <li><Link href="/products/microsoft-power-apps/"><b>Power Apps</b></Link><b>:</b> builds focused mobile or web apps, such as a site-visit app or a goods-in checklist, on top of Business Central data.</li>
                  <li><b>Dataverse:</b> connects Business Central with Dynamics 365 Sales, Customer Service and Field Service. Version 29 makes it easier to map new Dataverse fields into Business Central.</li>
                  <li><b>Copilot Studio:</b> builds custom agents and conversational experiences connected to Business Central.</li>
                </ul>
                <p>Our guide to <Link href="/blog/business-central-with-power-platform-integration/">integrating Business Central with Power Platform</Link> shows common patterns, and our <Link href="/products/microsoft-power-platform/">Microsoft Power Platform</Link> team delivers them.</p>
                <h4 className="h4 mt-4">Third-party apps and extensions (AppSource)</h4>
                <p>Microsoft AppSource offers a large catalogue of Business Central apps from independent software vendors. Extensions are the normal way to add specialist functionality without custom code. Common categories for UK SMBs include:</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Need</th><th scope="col">Typical extension</th><th scope="col">Dynamics Square resource</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Supplier invoice capture and approval</th><td>Document capture and OCR</td><td><Link href="/continia-document-capture-with-business-central/">Continia Document Capture</Link></td></tr>
                      <tr><th scope="row">Bank feeds and payments</th><td>Open banking and payment integration</td><td><Link href="/yavrio-integration-with-business-central/">Yavrio integration</Link></td></tr>
                      <tr><th scope="row">Warehouse scanning</th><td>Mobile warehouse management</td><td><Link href="/wms-for-business-central/">Tasklet Mobile WMS</Link></td></tr>
                      <tr><th scope="row">Distribution and shipping</th><td>Inventory, shipping and field apps</td><td><Link href="/insights-works-for-dynamics-365-business-central/">Insight Works</Link></td></tr>
                      <tr><th scope="row">B2B and B2C web shops</th><td>E-commerce platforms</td><td><Link href="/shopify-connector-business-central/">Shopify connector</Link> and Sana Commerce</td></tr>
                      <tr><th scope="row">UK payroll</th><td>Payroll integration</td><td>Third-party payroll with journal integration</td></tr>
                      <tr><th scope="row">Document management</th><td>Document workflows and archiving</td><td><Link href="/continia-for-dynamics-365-business-central/">Continia for Business Central</Link></td></tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="h4 mt-4">APIs, EDI and e-documents</h4>
                <p>Business Central exposes REST APIs for integration with other systems, and the E-Documents framework supports electronic invoice formats such as Peppol. Version 29 added EDI document exchange in public preview, which matters for suppliers to large retailers and distributors.</p>
                <p><b>Good practice:</b> choose an established AppSource app before commissioning custom code, confirm the vendor supports each new Business Central release, and build new integrations on APIs rather than legacy SOAP web services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-4"
        className="col-yellow col-red"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 4</strong> Business Central cloud vs on-premises
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/Business-Central-depolyed.png"
                    alt="Business Central cloud vs on-premises"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p><b>For most UK SMBs starting today, Business Central online (SaaS) is the right choice.</b> On-premises remains available, but Microsoft has moved new customers to subscription licensing only, and the newest capabilities, including Copilot and AI agents, are online-only.</p>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter5-4.png" alt="Business Central online benefits: low upfront cost, low maintenance cost, low cost of ownership and automatic updates" width={817} height={348} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <h3 className="h3-b">The deployment options</h3>
                <ul>
                  <li><b>Business Central online:</b> Microsoft hosts and runs Business Central on Azure. This is the standard option.</li>
                  <li><b>On-premises:</b> you install Business Central on your own servers and SQL Server, and your IT team or partner maintains it.</li>
                  <li><b>Partner-hosted or private cloud:</b> the on-premises software runs on virtual machines in Azure or a partner's data centre. It is still on-premises software from a licensing and maintenance point of view, even though it is accessed over the internet.</li>
                </ul>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter2-1.png" alt="Business Central on-premises components: web client and app, web server, Business Central server and SQL database" width={869} height={538} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <p>There is no product called "hybrid Business Central". Some businesses run on-premises while replicating data to an online environment during a cloud migration, but that is a transition approach rather than a permanent deployment model.</p>
                <h3 className="h3-b">Side-by-side comparison</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Factor</th><th scope="col">Business Central online</th><th scope="col">Business Central on-premises</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Infrastructure</th><td>Hosted and managed by Microsoft on Azure</td><td>Your servers or a hosting provider; you manage SQL Server, backups and security</td></tr>
                      <tr><th scope="row">Licensing for new customers</th><td>Monthly per-user subscription</td><td>Subscription only (perpetual licences ended for new customers on 1 April 2025)</td></tr>
                      <tr><th scope="row">Upfront cost</th><td>Low: no servers to buy</td><td>Higher: hardware or hosting, SQL Server and set-up</td></tr>
                      <tr><th scope="row">Updates</th><td>Applied by Microsoft; you choose the date within a five-month window for major updates</td><td>You plan, test and install each upgrade yourself or through your partner</td></tr>
                      <tr><th scope="row">Copilot and AI agents</th><td>Included (agents billed by usage)</td><td>Not available</td></tr>
                      <tr><th scope="row">Power Platform, Teams and Microsoft 365 features</th><td>Fullest support</td><td>Partial; some features need extra configuration or are online-only</td></tr>
                      <tr><th scope="row">Data location</th><td>Microsoft's UK Azure regions for UK environments</td><td>Wherever your servers are</td></tr>
                      <tr><th scope="row">Customisation</th><td>Via extensions and apps</td><td>Via extensions; more technical control, but heavy modification makes upgrades harder</td></tr>
                      <tr><th scope="row">Best for</th><td>Most SMBs</td><td>Specific regulatory, connectivity or legacy integration constraints</td></tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="h3-b">Points existing on-premises customers should know</h3>
                <ul>
                  <li>Existing customers with perpetual licences and an active enhancement plan can continue to add users and upgrade.</li>
                  <li>From October 2026, new on-premises releases use a single forward-compatible "28+" licence key, which must be refreshed before upgrading to each new version.</li>
                  <li>Customers running on-premises through Dual Use Rights (an online subscription benefit) must replace their licence keys every six months, and on-premises access depends on the online subscription staying active.</li>
                  <li>Each on-premises version is supported for a limited period under Microsoft's modern lifecycle policy, so staying current still requires regular upgrades.</li>
                </ul>
                <h3 className="h3-b">When on-premises can still make sense</h3>
                <p>On-premises can be justified where a contract or regulator requires data to sit on your own infrastructure, where sites have unreliable internet, or where deep database-level integrations need to be rebuilt before a cloud move. In most other cases, the total cost and the loss of Copilot make online the stronger option.</p>
                <p>Moving an existing on-premises system to the cloud is a well-trodden path. Read how Dalebrook Supplies achieved a <Link href="/case-studies/migrate-on-premises-to-business-central-cloud/">cloud re-implementation from on-premises Business Central</Link>, or talk to our <Link href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade team</Link> about your options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-5"
        className="col-yellow col-per"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 5</strong> Business Central licensing and pricing in the UK
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/PowerBi-Licensing.png"
                    alt="Business Central licensing and pricing in the UK"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <p><b>Business Central is licensed per named user, per month, on an annual commitment. Microsoft's UK list prices are £61.50 for Essentials, £84.60 for Premium and £6.20 for Team Members, excluding VAT.</b> Microsoft raised Business Central prices in late 2025 for the first time since launch, so quotes or articles from before then are out of date.</p>
                <h3 className="h3-b">Business Central licence types</h3>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter5-2.png" alt="Business Central licence types: Essentials and Premium full users, and Team Members additional users" width={846} height={385} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Licence</th><th scope="col">UK list price (per user/month, ex VAT, billed annually)</th><th scope="col">Who it is for</th><th scope="col">What it allows</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Essentials</th><td>£61.50</td><td>Finance, sales, purchasing, warehouse and project staff</td><td>Full use of finance, sales, purchasing, inventory, warehousing, projects, basic HR and Copilot</td></tr>
                      <tr><th scope="row">Premium</th><td>£84.60</td><td>Businesses that run manufacturing or service management</td><td>Everything in Essentials plus manufacturing and service management</td></tr>
                      <tr><th scope="row">Team Members</th><td>£6.20</td><td>Managers, approvers and occasional users</td><td>Read data, update existing records, approve or reject, manage quotes, personal details and time sheets</td></tr>
                      <tr><th scope="row">External Accountant</th><td>Included</td><td>Your external accountant or auditor</td><td>Access for up to three external accountants per tenant</td></tr>
                      <tr><th scope="row">Microsoft 365 (Teams access)</th><td>No extra cost</td><td>Any employee with an eligible Microsoft 365 licence</td><td>Read-only view of records shared in Teams</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Team Members cannot create or post core transactions such as new sales orders, purchase invoices or journals. If someone raises orders or posts entries, they need an Essentials or Premium licence. Licences are bought through a Microsoft Cloud Solution Provider (CSP) partner such as Dynamics Square, and partner terms can differ from Microsoft's list prices.</p>
                <h3 className="h3-b">What every subscription includes</h3>
                <ul>
                  <li>One production environment and three sandbox environments.</li>
                  <li>80 GB of database capacity per tenant, plus 3 GB for each Essentials licence and 5 GB for each Premium licence.</li>
                  <li>Copilot in Business Central (online).</li>
                  <li>Microsoft-managed hosting, backups and updates.</li>
                </ul>
                <p>Extra environments and database capacity can be bought as add-ons if you outgrow the included allowance.</p>
                <h3 className="h3-b">Example licence costs</h3>
                <p>These examples use UK list prices and exclude VAT, implementation and add-ons. Remember that Premium is set per environment, so all full users in a Premium environment need Premium licences.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Scenario</th><th scope="col">Licence mix</th><th scope="col">Monthly cost</th><th scope="col">Annual cost</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">10-person wholesaler</th><td>6 Essentials + 4 Team Members</td><td>£393.80</td><td>£4,725.60</td></tr>
                      <tr><th scope="row">40-person professional services group</th><td>20 Essentials + 20 Team Members</td><td>£1,354.00</td><td>£16,248.00</td></tr>
                      <tr><th scope="row">25-person manufacturer</th><td>12 Premium + 13 Team Members</td><td>£1,095.80</td><td>£13,149.60</td></tr>
                    </tbody>
                  </table>
                </div>
                <h3 className="h3-b">Total cost of ownership: what else to budget for</h3>
                <p>Licences are usually not the largest cost in year one. A realistic budget also covers:</p>
                <ul>
                  <li>Implementation and configuration services.</li>
                  <li>Data migration and cleansing.</li>
                  <li>Training and change management.</li>
                  <li>AppSource apps, which often have their own per-user or per-company fees.</li>
                  <li>Power BI licences for report consumers.</li>
                  <li>Copilot Credits if you use AI agents.</li>
                  <li>Ongoing support and optimisation.</li>
                  <li>Extra storage or environments, if needed.</li>
                  <li>Internal staff time for testing and sign-off.</li>
                </ul>
                <h3 className="h3-b">How to avoid overpaying for licences</h3>
                <ol>
                  <li>Map every user to the lowest licence that covers their actual tasks; many approvers and managers only need Team Members.</li>
                  <li>Only choose Premium if you will genuinely use manufacturing or service management.</li>
                  <li>Use device licences for shared warehouse or shop-floor terminals.</li>
                  <li>Use Microsoft 365 read-only access in Teams for staff who only need to look up information.</li>
                  <li>Review licence allocation before each annual renewal.</li>
                </ol>
                <p>See our detailed <Link href="/products/dynamics-365-business-central/pricing-licensing/">Business Central pricing and licensing guide</Link> or model your own scenario with the <Link href="/tools/microsoft-dynamics-licensing-calculator/">Dynamics 365 licensing calculator</Link>. For a licence review against how your teams actually work, <Link href="/contact-us/">request Business Central licensing guidance</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-6"
        className="col-yellow col-perpul"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 6</strong> Implementation, migration and compliance
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/business-central-logo-3.png"
                    alt="Implementation, migration and compliance"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">Business Central implementation: process, timeline and cost</h3>
                <p><b>A Business Central implementation typically takes from around two to three months for a finance-led, single-company rollout to six months or more for multi-entity, manufacturing or integration-heavy projects.</b> Scope, data quality and the availability of your own team drive the timeline far more than the software does.</p>
                <h4 className="h4 mt-4">The implementation phases</h4>
                <ol>
                  <li><b>Discovery and fit-gap analysis:</b> map current processes, reporting needs and pain points; confirm what standard Business Central covers and where apps or extensions are needed.</li>
                  <li><b>Solution design:</b> agree chart of accounts, dimensions, posting groups, approval workflows, integrations and the licence mix.</li>
                  <li><b>Configuration and build:</b> set up the system, install AppSource apps, build any extensions and integrations.</li>
                  <li><b>Data migration:</b> cleanse source data, run trial loads, and reconcile balances against the old system.</li>
                  <li><b>Testing and training:</b> user acceptance testing on real scenarios in a sandbox; role-based training for each team.</li>
                  <li><b>Go-live and cutover:</b> final data load, opening balances, parallel checks on the first period end.</li>
                  <li><b>Hypercare and optimisation:</b> close support for the first weeks, then continuous improvement, including Copilot and agent adoption.</li>
                </ol>
                <p>Our article on <Link href="/blog/what-is-business-central-implementation-methodology/">Business Central implementation methodology</Link> explains how each phase is governed.</p>
                <h4 className="h4 mt-4">Indicative timelines by project type</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Project type</th><th scope="col">Typical scope</th><th scope="col">Indicative timeline</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Finance-led</th><td>One company, finance plus sales and purchasing, few integrations</td><td>About 2 to 3 months</td></tr>
                      <tr><th scope="row">Distribution or e-commerce</th><td>Multiple locations, warehousing, Shopify or WMS integration</td><td>About 3 to 6 months</td></tr>
                      <tr><th scope="row">Manufacturing or multi-entity</th><td>Production, several companies, consolidation, more extensions</td><td>About 6 to 9 months or longer</td></tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="h4 mt-4">What drives implementation cost</h4>
                <p>Published UK industry ranges run from around £15,000 for a simple finance-led rollout to £100,000 or more for complex multi-entity or manufacturing projects. The main drivers are:</p>
                <ul>
                  <li>Number of companies, locations and users.</li>
                  <li>Modules in scope, especially manufacturing, warehousing and service.</li>
                  <li>Volume and quality of data to migrate, and how many years of history you bring across.</li>
                  <li>Number and complexity of integrations.</li>
                  <li>Custom development versus standard functionality and AppSource apps.</li>
                  <li>Reporting requirements, including Power BI.</li>
                  <li>Training approach and how much your own team can take on.</li>
                </ul>
                <p>For a figure based on your business, use our <Link href="/tools/erp-implementation-cost-calculator/">ERP implementation cost calculator</Link> or download the <Link href="/white-papers/business-central-implementation-cost/">Business Central implementation cost planner</Link>.</p>
                <h4 className="h4 mt-4">Business Central readiness checklist</h4>
                <ul className="list-unstyled">
                  <li>☐ Executive sponsor and internal project lead named, with time allocated</li>
                  <li>☐ Current processes and pain points documented for each department</li>
                  <li>☐ Reporting requirements agreed (management accounts, KPIs, board pack)</li>
                  <li>☐ Chart of accounts and dimensions reviewed and simplified</li>
                  <li>☐ Data owners assigned for customers, vendors, items and open balances</li>
                  <li>☐ Integrations listed (web shop, banking, payroll, EDI, CRM)</li>
                  <li>☐ Licence mix mapped by role (Essentials, Premium, Team Members)</li>
                  <li>☐ Go-live date set away from year end and peak trading</li>
                  <li>☐ Testing scenarios written from real transactions</li>
                  <li>☐ Training plan and super-users identified</li>
                  <li>☐ Post-go-live support arrangement agreed</li>
                </ul>
                <p>Dynamics Square delivers <Link href="/dynamics-365-business-central-implementation/">Business Central implementation services</Link> for UK SMBs, together with role-based <Link href="/our-services/dynamics-365-training/">Dynamics 365 training</Link>. <Link href="/contact-us/">Book a scoping call</Link> to get a timeline and estimate for your requirements.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Data migration and upgrades to Business Central</h3>
                <p><b>Most businesses move to Business Central from an accounting package (Sage, Xero, QuickBooks) or from an older Microsoft ERP (Dynamics NAV or GP).</b> The migration route depends on the source system, but the principle is the same: migrate clean master data and open balances, and keep detailed history where it is genuinely needed.</p>
                <h4 className="h4 mt-4">Migration routes by source system</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Moving from</th><th scope="col">Typical route</th><th scope="col">Key consideration</th><th scope="col">Further reading</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Dynamics GP</th><td>Microsoft's built-in cloud migration tool for GP</td><td>GP product support ends 31 December 2029</td><td><Link href="/gp-to-business-central-migration/">GP to Business Central migration</Link></td></tr>
                      <tr><th scope="row">Dynamics NAV</th><td>Technical upgrade, then data migration to online</td><td>Old customisations must be rebuilt as extensions or replaced by standard features</td><td><Link href="/ebook/upgrade-nav-to-business-central/">NAV upgrade quick-start guide</Link></td></tr>
                      <tr><th scope="row">Sage 50 or Sage 200</th><td>Data migration using configuration packages and partner tools</td><td>Map Sage nominal codes and departments to a new chart of accounts and dimensions</td><td><Link href="/blog/sage-to-business-central-migration/">Sage to Business Central migration</Link></td></tr>
                      <tr><th scope="row">QuickBooks</th><td>Migration tools plus configuration packages</td><td>Move beyond class and location tracking to dimensions</td><td><Link href="/blog/quickbooks-to-microsoft-business-central-migration/">QuickBooks to Business Central migration</Link></td></tr>
                      <tr><th scope="row">Xero</th><td>Configuration packages and Excel templates</td><td>Separate stock or e-commerce apps usually consolidate into Business Central</td><td><Link href="/blog/xero-to-business-central-migration/">Xero to Business Central migration</Link></td></tr>
                      <tr><th scope="row">NetSuite</th><td>Structured data migration</td><td>Plan the subscription exit date and data extraction early</td><td><Link href="/white-papers/netsuite-to-business-central/">NetSuite to Business Central playbook</Link></td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Sage 200 users can also download our <Link href="/white-papers/sage-200-to-business-central/">Sage 200 to Business Central migration white paper</Link>.</p>
                <h4 className="h4 mt-4">Legacy Microsoft ERP support deadlines</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Date</th><th scope="col">What happens</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">1 April 2026</th><td>New customers can no longer buy Dynamics GP subscription licences</td></tr>
                      <tr><th scope="row">14 April 2026</th><td>Extended support ended for Dynamics NAV 2016 (earlier NAV versions are already unsupported)</td></tr>
                      <tr><th scope="row">11 January 2027</th><td>Extended support ends for Dynamics NAV 2017</td></tr>
                      <tr><th scope="row">11 January 2028</th><td>Extended support ends for Dynamics NAV 2018, the final NAV release, and for Dynamics GP 2018</td></tr>
                      <tr><th scope="row">31 December 2029</th><td>Dynamics GP product enhancements, tax and regulatory updates, and technical support end</td></tr>
                      <tr><th scope="row">30 April 2031</th><td>Dynamics GP security updates end</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Running an unsupported ERP means no tax or regulatory updates. For UK businesses facing mandatory e-invoicing from April 2029, that is a material compliance risk, not just a technology issue.</p>
                <h4 className="h4 mt-4">What to migrate</h4>
                <ul>
                  <li><b>Always:</b> chart of accounts, customers, vendors, items, open sales and purchase documents, open receivables and payables, stock quantities and values, fixed assets, bank balances.</li>
                  <li><b>Usually:</b> opening trial balance and monthly G/L balances for comparative reporting, typically for the current and previous financial year.</li>
                  <li><b>Case by case:</b> detailed transaction history. Many businesses keep the old system read-only or archive history to a data store rather than importing years of detail.</li>
                </ul>
                <h4 className="h4 mt-4">Six rules for a clean migration</h4>
                <ol>
                  <li>Cleanse before you migrate: remove duplicates, inactive records and obsolete items.</li>
                  <li>Redesign the chart of accounts and dimensions rather than copying old structures.</li>
                  <li>Run at least two trial loads and reconcile every balance to the source.</li>
                  <li>Choose a cutover date at a period end, away from year end and peak trading.</li>
                  <li>Give business owners, not just IT, sign-off on migrated data.</li>
                  <li>Keep read-only access to the old system for audit and HMRC record-keeping needs.</li>
                </ol>
                <p>Existing Business Central on-premises customers can also move to the cloud using Microsoft's cloud migration tools. Dynamics Square's <Link href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade services</Link> cover NAV, GP and on-premises Business Central; for GP users, our <Link href="/ebook/gp-to-bc-migration/">GP to Business Central guide</Link> sets out the full process.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Security, permissions, compliance and UK regulation</h3>
                <p>Business Central online combines Microsoft's cloud security with detailed, role-based control over who can see and change what. Security is shared: Microsoft secures the platform; your organisation and partner configure users, permissions and policies correctly.</p>
                <h4 className="h4 mt-4">Identity and access</h4>
                <ul>
                  <li><b>Sign-in:</b> users authenticate through Microsoft Entra ID, so you can enforce multi-factor authentication and conditional access policies alongside your Microsoft 365 security.</li>
                  <li><b>Permissions:</b> permission sets control access to pages, reports and data, and can be assigned through Entra security groups, making joiners, movers and leavers easier to manage.</li>
                  <li><b>Record-level security:</b> security filters can restrict a user to specific records, such as one company, location or department.</li>
                  <li><b>Sensitive data:</b> version 29 makes UI support for masking sensitive data mandatory.</li>
                  <li><b>Audit trail:</b> the change log records who changed which fields and when; system fields show who created and last modified each record.</li>
                </ul>
                <h4 className="h4 mt-4">Data protection and UK GDPR</h4>
                <ul>
                  <li>UK environments are hosted in Microsoft's UK Azure regions.</li>
                  <li>Data is encrypted in transit and at rest, and Microsoft manages backups. Administrators can restore an environment to an earlier point in time within Microsoft's retention period.</li>
                  <li>Data classification and data subject tools help you respond to access and erasure requests under UK GDPR.</li>
                  <li>Retention policies let you delete old log and document data that you no longer need to keep.</li>
                </ul>
                <p>For Microsoft's current certifications and audit reports, refer to the Microsoft Service Trust Portal rather than relying on third-party summaries.</p>
                <h4 className="h4 mt-4">UK localisation and HMRC compliance</h4>
                <p>The UK version of Business Central includes:</p>
                <ul>
                  <li><b>Making Tax Digital (MTD) for VAT:</b> retrieve VAT obligations from HMRC and submit VAT returns directly from Business Central.</li>
                  <li>VAT reverse charge, VAT group management, VAT reports and audit reports.</li>
                  <li>APACS cheque printing and remittance advices.</li>
                  <li>UK postcode lookup through the GetAddress.io extension.</li>
                </ul>
                <p>Microsoft lists functionality to resubmit a VAT return as planned for 2027 release wave 1.</p>
                <h4 className="h4 mt-4">Preparing for UK mandatory e-invoicing (April 2029)</h4>
                <p>The UK government has confirmed that, from 1 April 2029, VAT invoices between VAT-registered businesses, and to the public sector, must be issued and received as structured e-invoices. HMRC has confirmed a decentralised model built on the Peppol network, without real-time reporting to HMRC at launch. Detailed standards, exemptions and guidance are expected during 2027 to 2028.</p>
                <p>Business Central already includes an E-Documents framework that supports Peppol formats, and Microsoft updates the UK localisation as regulations are finalised. To prepare:</p>
                <ol>
                  <li>Clean customer and vendor master data, including VAT numbers and addresses.</li>
                  <li>Make sure you are on a current, supported version so you receive regulatory updates.</li>
                  <li>Review how supplier invoices arrive today and whether OCR, the Payables Agent or Peppol receipt will replace manual entry.</li>
                  <li>Ask your partner how your AppSource apps and integrations will handle e-invoices.</li>
                </ol>
                <p>Not sure whether your current setup is secure and compliant? Book a <Link href="/free-dynamics-365-system-health-check/">free Dynamics 365 system health check</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-7"
        className="col-yellow col-green"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 7</strong> Scalability, benefits and how Business Central compares
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/Business-Central-Benefits.png"
                    alt="Scalability, benefits and how Business Central compares"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">Scalability and industry use cases</h3>
                <h4 className="h4 mt-4">How Business Central scales with your business</h4>
                <p>Business Central grows in small, predictable steps rather than through disruptive re-platforming:</p>
                <ul>
                  <li><b>Users:</b> add licences as you hire, and use Team Members for light users.</li>
                  <li><b>Entities:</b> add companies for new subsidiaries, with intercompany postings and consolidation.</li>
                  <li><b>Countries:</b> Business Central is available with local versions in many countries, which helps UK businesses opening overseas entities.</li>
                  <li><b>Capacity:</b> buy more database storage or environments when needed.</li>
                  <li><b>Functionality:</b> switch on modules or add AppSource apps as processes mature.</li>
                </ul>
                <p>Most SMBs never outgrow Business Central. Businesses that eventually move to Microsoft's enterprise ERP, <Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Finance and Supply Chain Management</Link>, usually have several of these traits: complex global operations across many legal entities and currencies, advanced shared-service or treasury needs, very high transaction volumes, or complex manufacturing and warehouse automation. If you are already at that scale, compare both options before deciding.</p>
                <h4 className="h4 mt-4">Business Central by industry</h4>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Industry</th><th scope="col">Where Business Central fits well</th><th scope="col">Common additions</th><th scope="col">Learn more</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Manufacturing</th><td>BOMs, routings, production orders, capacity planning, quality inspections (Premium)</td><td>Shop-floor data capture, advanced planning, process manufacturing extensions</td><td><Link href="/industries/manufacturing/">Manufacturing</Link></td></tr>
                      <tr><th scope="row">Wholesale and distribution</th><td>Multi-location stock, landed cost, warehouse picking, drop shipments</td><td>Mobile WMS, EDI, shipping integrations</td><td><Link href="/industries/dynamics-365-for-distribution/">Distribution</Link></td></tr>
                      <tr><th scope="row">Retail and e-commerce</th><td>Shopify connector, item variants, pricing, returns</td><td>B2B portals, marketplace connectors</td><td><Link href="/industries/ecommerce/">E-commerce</Link></td></tr>
                      <tr><th scope="row">Professional services</th><td>Projects, time sheets, WIP, project invoicing</td><td>Resource planning, expense management</td><td><Link href="/industries/professional-services/">Professional services</Link></td></tr>
                      <tr><th scope="row">Food and beverage</th><td>Lot tracking, expiry dates, FEFO picking, recall traceability</td><td>Process manufacturing and quality extensions</td><td><Link href="/industries/food-and-beverages/">Food and beverage</Link></td></tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="h4 mt-4">Practical scenarios</h4>
                <p><b>A growing wholesaler moving off Sage 50.</b> Stock sits in a separate system, purchase orders are raised in spreadsheets and month end takes two weeks. In Business Central, sales orders reserve stock, the planning worksheet proposes purchase orders from reorder points, item charges capture freight and duty, and finance closes from one ledger. The Payables Agent can draft supplier invoices from emailed PDFs for review.</p>
                <p><b>A UK manufacturer replacing NAV 2013.</b> Heavy customisations make every update risky. The upgrade rebuilds only the customisations that still add value as extensions, moves standard processes to standard functionality, and adds quality inspections on goods in and production output.</p>
                <h4 className="h4 mt-4">Dynamics Square customer stories</h4>
                <ul>
                  <li><Link href="/case-studies/business-central-reimplementation-for-recycling-industry/">How Summit Systems, a UK plastic automation company, streamlined operations with Business Central</Link></li>
                  <li><Link href="/case-studies/business-central-for-tool-manufacturing-company/">How Rolson Tools restored compliance with Business Central</Link></li>
                  <li><Link href="/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/">Business Central and CRM implementation for a UK equestrian manufacturer</Link></li>
                  <li><Link href="/case-studies/business-central-reimplementation-for-food-trader/">Business Central re-implementation for a world food trading business</Link></li>
                  <li><Link href="/case-studies/nav-2013-r2-to-business-central-upgrade/">NAV 2013 R2 to Business Central upgrade for a UK orthodontic supplier</Link></li>
                </ul>
                <p>Browse all <Link href="/case-studies/">Dynamics Square case studies</Link>.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Benefits and limitations of Business Central</h3>
                <h4 className="h4 mt-4">Business benefits</h4>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter3-1.png" alt="Business benefits of Dynamics 365 Business Central for SMBs" width={930} height={372} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Benefit</th><th scope="col">What it means in practice</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">One source of truth</th><td>Finance, stock, sales and projects share one database, so reports reconcile and decisions use current figures</td></tr>
                      <tr><th scope="row">Faster month end</th><td>Automated bank reconciliation, intercompany, deferrals and financial reporting reduce manual close tasks</td></tr>
                      <tr><th scope="row">Familiar Microsoft experience</th><td>Staff work from Outlook, Excel and Teams, which shortens training and improves adoption</td></tr>
                      <tr><th scope="row">AI built in</th><td>Copilot is included online; agents can take on repetitive order and invoice processing</td></tr>
                      <tr><th scope="row">Predictable cost</th><td>Per-user subscription with no servers to buy or maintain</td></tr>
                      <tr><th scope="row">Always current</th><td>Microsoft delivers regulatory updates and new features twice a year</td></tr>
                      <tr><th scope="row">Room to grow</th><td>Add users, companies, countries and apps without changing platform</td></tr>
                      <tr><th scope="row">Large partner and app ecosystem</th><td>Specialist needs are usually met by an existing AppSource app rather than custom code</td></tr>
                    </tbody>
                  </table>
                </div>
                <h4 className="h4 mt-4">Limitations to plan for</h4>
                <p>An honest assessment helps you budget properly and avoid surprises:</p>
                <ul>
                  <li><b>No UK payroll.</b> Payroll runs in a separate product, with journals or an integration into Business Central.</li>
                  <li><b>Built-in CRM is basic.</b> Larger sales teams usually add Dynamics 365 Sales.</li>
                  <li><b>Manufacturing depth.</b> Strong for discrete and light process manufacturing; complex process, formula or regulated batch manufacturing often needs an industry extension.</li>
                  <li><b>Specialist functions need apps.</b> Warehouse scanning, document capture, EDI and advanced expense management typically come from AppSource apps with their own fees.</li>
                  <li><b>Updates need testing.</b> Twice-yearly major updates are an advantage, but extensions and integrations must be tested in a sandbox each time.</li>
                  <li><b>AI costs are variable.</b> Copilot is included, but agents consume paid Copilot Credits.</li>
                  <li><b>Premium applies per environment.</b> You cannot mix Essentials and Premium full users in the same environment.</li>
                  <li><b>Enterprise scale.</b> Very large, complex global organisations are usually better served by Dynamics 365 Finance and Supply Chain Management.</li>
                  <li><b>Partner quality matters.</b> The same software can deliver very different results depending on the implementation.</li>
                </ul>
                <hr className="my-5" />
                <h3 className="h3-b">Business Central vs other ERP and accounting systems</h3>
                <p>Business Central most often competes with entry-level accounting software that a business has outgrown, and with other mid-market ERPs. The table below summarises typical positioning; always check each vendor's current editions and pricing.</p>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">System</th><th scope="col">Type</th><th scope="col">Typically best for</th><th scope="col">How Business Central compares</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Xero / QuickBooks Online</th><td>Cloud accounting software</td><td>Small businesses with straightforward accounting</td><td>Business Central adds full ERP: multi-location inventory, warehousing, manufacturing, projects, consolidation and deeper reporting</td></tr>
                      <tr><th scope="row">Sage 50 / Sage 200</th><td>Accounting and mid-market business software</td><td>UK SMBs already familiar with Sage</td><td>Business Central offers one cloud platform with native Microsoft 365, Power Platform and Copilot integration. See <Link href="/blog/business-central-vs-sage-50/">Business Central vs Sage 50</Link></td></tr>
                      <tr><th scope="row">Oracle NetSuite</th><td>Cloud-only ERP</td><td>Fast-growing, multi-entity businesses</td><td>Both are cloud ERPs; Business Central offers on-premises as an option, tighter Microsoft 365 integration and a wide partner choice</td></tr>
                      <tr><th scope="row">SAP Business One</th><td>SMB ERP, on-premises or partner-hosted</td><td>SMBs in SAP-centric supply chains</td><td>Business Central is Microsoft-hosted SaaS with continuous updates. See <Link href="/dynamics-365-business-central-vs-sap-business-one/">Business Central vs SAP Business One</Link></td></tr>
                      <tr><th scope="row">Odoo</th><td>Modular business suite, cloud or self-hosted</td><td>Businesses wanting many modules from one vendor</td><td>Business Central offers deeper accounting and Microsoft ecosystem integration; compare modules and partner support carefully</td></tr>
                      <tr><th scope="row">Dynamics 365 Finance and Supply Chain Management</th><td>Enterprise ERP</td><td>Large or complex global organisations</td><td>Business Central is faster and cheaper to implement for SMBs; Finance and SCM handle greater scale and complexity</td></tr>
                    </tbody>
                  </table>
                </div>
                <p>Use our <Link href="/tools/top-erp-systems-comparison/">ERP comparison tool</Link> to compare options side by side, or download the <Link href="/ebook/how-to-choose-right-erp/">ultimate ERP selection guide</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-8"
        className="col-yellow col-blue"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  <strong>Chapter 8</strong> Readiness, common challenges and choosing a partner
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/PowerBi-vs.png"
                    alt="Readiness, common challenges and choosing a partner"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">Signs your business is ready for Business Central</h3>
                <p>If three or more of these apply, it is worth a structured review:</p>
                <ul>
                  <li>Month end takes more than a week because data is pulled from several systems.</li>
                  <li>Stock figures in your accounts and your warehouse rarely agree.</li>
                  <li>Staff re-key orders between your web shop, email and accounts.</li>
                  <li>You run more than one company and consolidate in spreadsheets.</li>
                  <li>Management reports are built manually in Excel and are out of date when shared.</li>
                  <li>Your accounting software cannot handle multi-location stock, projects or manufacturing.</li>
                  <li>Approvals happen by email with no audit trail.</li>
                  <li>Your current ERP is out of mainstream support, or its vendor or partner can no longer support it.</li>
                  <li>Updates are avoided because customisations break.</li>
                  <li>You cannot easily prepare for MTD changes or e-invoicing in 2029.</li>
                </ul>
                <p>For small and growing teams, our page on <Link href="/dynamics-365-for-small-businesses/">Dynamics 365 for small businesses</Link> outlines typical starting points.</p>
                <hr className="my-5" />
                <h3 className="h3-b">Common implementation challenges and how to avoid them</h3>
                <div className="table-responsive">
                  <table className="table table-bordered">
                    <thead>
                      <tr><th scope="col">Challenge</th><th scope="col">Why it happens</th><th scope="col">How to address it</th></tr>
                    </thead>
                    <tbody>
                      <tr><th scope="row">Scope creep</th><td>Requirements keep growing during the build</td><td>Agree a phase 1 scope and park non-critical items for phase 2</td></tr>
                      <tr><th scope="row">Poor data quality</th><td>Years of duplicates and inactive records in the old system</td><td>Cleanse before migration and assign data owners</td></tr>
                      <tr><th scope="row">Over-customisation</th><td>Recreating every legacy process in code</td><td>Adopt standard Business Central processes first; customise only for genuine advantage</td></tr>
                      <tr><th scope="row">Low user adoption</th><td>Training is generic or late</td><td>Train by role, use real scenarios, appoint super-users</td></tr>
                      <tr><th scope="row">Underestimated internal effort</th><td>Staff run the business and the project at once</td><td>Back-fill key roles and protect project time</td></tr>
                      <tr><th scope="row">Integration surprises</th><td>Third-party systems discovered late</td><td>List every integration during discovery and test early</td></tr>
                      <tr><th scope="row">Weak post-go-live support</th><td>Partner disengages after launch</td><td>Agree hypercare and an ongoing support model up front</td></tr>
                    </tbody>
                  </table>
                </div>
                <hr className="my-5" />
                <h3 className="h3-b">How to choose a Business Central partner</h3>
                <p>The partner you choose has as much influence on results as the software. Before you sign, check that the partner:</p>
                <ul className="list-unstyled">
                  <li>☐ Holds a current Microsoft Solutions Partner designation for Business Applications</li>
                  <li>☐ Specialises in Business Central and SMBs, not only enterprise ERP</li>
                  <li>☐ Can show UK references in your industry</li>
                  <li>☐ Understands UK localisation, MTD and e-invoicing</li>
                  <li>☐ Explains clearly what is fixed price and what is time and materials</li>
                  <li>☐ Has a structured data migration method</li>
                  <li>☐ Can supply licences as a Cloud Solution Provider (CSP)</li>
                  <li>☐ Offers ongoing support with defined response times</li>
                  <li>☐ Can advise on Copilot, agents and Power Platform, not just core ERP</li>
                </ul>
                <h4 className="h4 mt-4">Why businesses work with Dynamics Square</h4>
                <p>Dynamics Square is a Microsoft Solutions Partner for Business Applications with a Specialist designation in Small and Midsize Business Management, with offices in the UK, US and Canada and ISO 9001 and ISO 27001 certification. Our UK team covers the full Business Central lifecycle: <Link href="/our-services/dynamics-365-consultant/">consulting</Link>, implementation, migration, licensing and <Link href="/d365-business-central-support/">Business Central support</Link>. Learn more about <Link href="/why-us/">why businesses choose Dynamics Square</Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="tabs-9"
        className="col-yellow col-green"
        style={{ background: "#5f774b" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-tabless">
                <h2>
                  Frequently asked questions about Business Central
                </h2>
                <div className="balnde-imge-mode">
                  <img
                    src="/img/business-FAQ.png"
                    alt="Frequently asked questions about Business Central"
                    className="shape-1 shape-2" loading="lazy" decoding="async" />
                  <img
                    src="/img/over-lay-shape.png"
                    alt=""
                    className="overlay-1"
                    aria-hidden="true" loading="lazy" decoding="async" />
                </div>
              </header>
            </div>
          </div>
        </div>
      </section>
      <section className="color-whi">
        <div className="container">
          <div className="row justify-content-center g-4">
            <div className="col-lg-12">
              <div className="cont-table-inner">
                <h3 className="h3-b">What is Dynamics 365 Business Central used for?</h3>
                <p>Business Central is used to run a small or mid-sized company's finance and operations in one system. Typical uses include accounting, VAT, sales and purchase processing, stock and warehouse control, project costing, manufacturing, service management and management reporting.</p>
                <h3 className="h3-b">Is Business Central suitable for small businesses?</h3>
                <p>Yes. Business Central is designed for SMBs and is commonly adopted by businesses with roughly 5 to several hundred users that have outgrown entry-level accounting software. Very small businesses with simple bookkeeping needs may find accounting software such as Xero or QuickBooks sufficient.</p>
                <h3 className="h3-b">How much does Business Central cost in the UK?</h3>
                <p>Microsoft's UK list prices are £61.50 per user per month for Essentials, £84.60 for Premium and £6.20 for Team Members, excluding VAT and billed annually. Implementation, data migration, training, add-on apps and support are additional.</p>
                <h3 className="h3-b">What is the difference between Business Central Essentials and Premium?</h3>
                <p>Premium includes everything in Essentials plus manufacturing and service management. Most distributors, retailers and professional services firms use Essentials; manufacturers and businesses running service contracts and dispatch need Premium.</p>
                <h3 className="h3-b">What can a Business Central Team Member do?</h3>
                <p>A Team Member can read data, update existing records, approve or reject requests, manage quotes, edit their own personal details and complete time sheets. Team Members cannot create or post core transactions such as sales orders, purchase invoices or journals.</p>
                <h3 className="h3-b">Is Copilot free in Business Central?</h3>
                <p>Copilot features are included with Business Central online licences at no extra cost. AI agents, such as the Sales Order Agent, Payables Agent and Expense Agent, consume Copilot Credits, which are billed separately through prepaid packs or pay-as-you-go. Copilot is not available on-premises.</p>
                <h3 className="h3-b">Can Business Central be installed on-premises?</h3>
                <p>Yes, but new customers can only license on-premises Business Central through subscription; perpetual licences ended for new customers on 1 April 2025. On-premises customers manage their own infrastructure and upgrades and do not get Copilot or AI agents.</p>
                <h3 className="h3-b">How long does a Business Central implementation take?</h3>
                <p>A finance-led, single-company implementation typically takes around two to three months. Distribution projects with warehousing and integrations often take three to six months, and manufacturing or multi-entity projects six months or more.</p>
                <h3 className="h3-b">Does Business Central support Making Tax Digital?</h3>
                <p>Yes. The UK version of Business Central includes Making Tax Digital for VAT, allowing you to retrieve VAT obligations and submit VAT returns to HMRC directly from the system.</p>
                <h3 className="h3-b">Will Business Central support UK mandatory e-invoicing in 2029?</h3>
                <p>Business Central includes an E-Documents framework that supports Peppol formats, and Microsoft updates UK localisation as regulations are finalised. HMRC's detailed specifications are expected during 2027 to 2028, so staying on a supported, current version is the most important preparation.</p>
                <h3 className="h3-b">Does Business Central include UK payroll?</h3>
                <p>No. Business Central does not include UK payroll. Businesses use a dedicated payroll product and post payroll journals into Business Central, or use a third-party integration.</p>
                <h3 className="h3-b">Is Business Central the same as Dynamics NAV?</h3>
                <p>Business Central is the successor to Dynamics NAV. It builds on NAV's accounting and operations logic but runs as a modern cloud service, uses extensions instead of modified source code, and adds Copilot, Power Platform integration and continuous updates.</p>
                <h3 className="h3-b">Can I migrate from Sage, Xero or QuickBooks to Business Central?</h3>
                <p>Yes. Master data, open balances and summarised history are migrated using configuration packages and migration tools. The project is also a chance to redesign your chart of accounts and dimensions for better reporting.</p>
                <h3 className="h3-b">How often is Business Central updated?</h3>
                <p>Microsoft releases two major updates a year, in April and October, plus monthly minor updates. Online administrators can schedule each major update within a five-month window to allow testing.</p>
                <h3 className="h3-b">Where is Business Central data stored for UK customers?</h3>
                <p>Business Central online environments for UK customers are hosted in Microsoft's UK Azure regions. Administrators can confirm the Azure region of each environment in the Business Central admin centre.</p>
                <h3 className="h3-b">Is there a free trial of Business Central?</h3>
                <p>Yes. Microsoft offers a free trial of Business Central so you can explore the product with demo data. A trial is most useful alongside a guided demonstration based on your own processes.</p>
                <h2 className="mt-5">Next steps: talk to a Business Central specialist</h2>
                <p>Choosing an ERP is a multi-year decision. The fastest way to know whether Business Central fits is to test it against your own processes, data and growth plans.</p>
                </div>
              <div className="iner-pp">
                <img src="/img/chapter7-6.png" alt="Dynamics 365 Business Central Role Centre on a laptop" width={1190} height={948} loading="lazy" decoding="async" />
              </div>
              <div className="cont-table-inner">
                <p>Dynamics Square UK can help you:</p>
                <ul>
                  <li><b>Evaluate fit:</b> a <Link href="/contact-us/">free Business Central consultation</Link> and a demo built around your processes.</li>
                  <li><b>Implement:</b> a scoped, phased rollout through our <Link href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation services</Link>.</li>
                  <li><b>Migrate or upgrade:</b> from Sage, Xero, QuickBooks, NAV, GP or on-premises Business Central.</li>
                  <li><b>License correctly:</b> the right mix of Essentials, Premium and Team Members.</li>
                  <li><b>Support and optimise:</b> ongoing <Link href="/our-services/dynamics-365-support-services/">Dynamics 365 support services</Link>, including Copilot and agent adoption.</li>
                </ul>
                <p>Call <b>+44 203 769 7689</b>, email <b>info@dynamicssquare.co.uk</b>, or <Link href="/contact-us/">request a callback</Link> to speak with a Business Central consultant.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FormGuide />
    </>
  );
};

export default PowerBIGuide;
