import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesaccountingfirms.json';
import PageSeo from "../../../components/PageSeo";
import styles from "../../../styles/dynamics-365-for-accounting-firms.module.css";

const apps = [
  {
    title: "Dynamics 365 Business Central (ERP)",
    href: "/products/dynamics-365-business-central/",
    icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
    text: "Microsoft Business Central for accounting firms is built for owner-managed and mid-tier practices. Partners get jobs, timesheets, WIP valuation, fee notes, retainer contracts and Making Tax Digital VAT filing in a single system that opens inside Microsoft 365.",
  },
  {
    title: "Dynamics 365 Finance with Project Operations (ERP)",
    href: "/products/microsoft-dynamics-365-finance/",
    icon: "/img/menu-icons/dynamics-365-finance.svg",
    text: <>Top-tier firms, networks and groups consolidating LLPs, service companies and overseas members in several currencies use Dynamics 365 Finance for the group ledger. <Link href="/products/dynamics-365-project-operations/" className="u-i">Dynamics 365 Project Operations</Link> helps these firms assign the right employees to client projects based on their skills, experience level and availability.</>,
  },
  {
    title: "Dynamics 365 Sales (CRM)",
    href: "/products/microsoft-dynamics-365-sales/",
    icon: "/img/menu-icons/dynamics-365-sales.svg",
    text: "Business development teams use Dynamics 365 Sales to see who is talking to whom: introducers such as banks and solicitors, open proposals, and clients ready for tax planning or advisory work.",
  },
  {
    title: "Dynamics 365 Customer Service (CRM)",
    href: "/products/microsoft-dynamics-365-customer-service/",
    icon: "/img/menu-icons/dynamics-365-customer-service.svg",
    text: "Dynamics 365 Customer Service brings order to the payroll and bookkeeping inbox. Client emails arrive as cases in team queues, each with a reply deadline and a full trail of responses.",
  },
  {
    title: "Dynamics 365 Customer Insights (CRM)",
    href: "/products/microsoft-dynamics-365-marketing/",
    icon: "/img/menu-icons/customer-insights-scalable-logo.svg",
    text: "Dynamics 365 Customer Insights powers the practice newsletter, Budget briefings and tax-year-end campaigns. Seminar registrations and a consent record sit behind every email sent.",
  },
];

const rules = [
  {
    icon: "bi-shield-lock",
    title: "Anti-Money Laundering Supervision",
    text: "UK rules require accounting firms to check their clients and understand where their money comes from. Under the Money Laundering Regulations 2017, firms must have proper supervision, verify client identities and keep relevant records for five years after a business relationship ends. Accounting software can help store client details, verification documents, risk assessments and review reminders, making it easier to find evidence when needed.",
  },
  {
    icon: "bi-person-lock",
    title: "UK GDPR and the Data Protection Act 2018",
    text: "Accounting firms handle private information, including client details, salary records and family finances. UK data protection laws require firms to keep this information secure, control who can access it and know where it is stored. Software with user permissions and access records helps firms manage these responsibilities and show who has viewed or changed important client information.",
  },
  {
    icon: "bi-receipt-cutoff",
    title: "Making Tax Digital for VAT",
    text: "VAT-registered businesses, including accounting firms, must maintain digital VAT records and submit returns through HMRC-approved software. Dynamics 365 Business Central and Dynamics 365 Finance support direct VAT return submission to HMRC. This helps firms maintain a digital record of VAT transactions, prepare returns and submit the required information without relying on separate manual processes.",
  },
  {
    icon: "bi-bank",
    title: "Professional Ethics and Auditor Independence",
    text: "Accounting firms must follow professional rules when working with clients, particularly those they audit. The FRC Ethical Standard limits certain additional services that auditors can offer, especially to public interest entities. ICAEW and ACCA also require members to protect client information. Accounting software can help flag audit clients, allowing partners to check independence before approving additional advisory or consulting work.",
  },
];

const capabilities = [
  {
    title: "Jobs, Timesheets and WIP",
    items: [
      { icon: "bi-arrow-repeat", text: "Regular work, such as annual accounts, corporation tax and self-assessment, can be copied from the previous year, saving time when creating new client assignments." },
      { icon: "bi-stopwatch", text: "Employees record their working hours every week and send timesheets to managers for approval. Staff who only need to record time can use the Team Members licence." },
      { icon: "bi-hourglass-split", text: "Firms can track the value of unfinished client work using methods such as cost, selling price or percentage of completion, with figures transferred into accounts monthly." },
      { icon: "bi-people", text: <>Larger firms can use <Link href="/products/dynamics-365-project-operations/" className="u-i">Project Operations</Link> to assign employees based on their skills and availability, check workloads through planning boards and record working hours using mobile devices.</> },
    ],
  },
  {
    title: "Fee Notes, Packages and Deferred Income",
    items: [
      { icon: "bi-file-earmark-check", text: "Partners can review draft client invoices prepared from approved working hours, make changes to individual charges and approve the final invoice before sending it." },
      { icon: "bi-calendar2-check", text: "Monthly bookkeeping, payroll and management accounting packages can be set up with regular billing schedules, allowing invoices to be generated automatically for each client." },
      { icon: "bi-piggy-bank", text: "When clients pay in advance, firms can record the money as deferred income and recognise it as earned revenue gradually as services are delivered." },
      { icon: "bi-signpost-split", text: "Firms can manage advisory and due diligence projects with different payment arrangements, including hourly charges, milestone-based payments and agreed limits on total project costs." },
    ],
  },
  {
    title: "Practice Accounts, Group Structure and VAT",
    items: [
      { icon: "bi-pie-chart", text: "Firms can track income and expenses by partner, office, department or service type, making it easier to understand which areas generate the most revenue and profit." },
      { icon: "bi-diagram-3", text: "Firms operating through an LLP and a separate service company can manage their combined financial records in Business Central, while larger groups can use Finance for consolidation." },
      { icon: "bi-bank2", text: "Firms can submit VAT returns directly to HMRC from their accounting system and import bank statements to match transactions, reducing manual reconciliation work." },
      { icon: "bi-grid-1x2", text: "Bookkeeping teams managing several clients using Business Central can access their accounts through one Company Hub page. Each client's subscription includes three free External Accountant users." },
    ],
  },
  {
    title: "Introducers, Client Queries, Campaigns and Copilot",
    items: [
      { icon: "bi-person-plus", text: "Firms can record relationships with banks, solicitors and independent financial advisers, then track which referral partners bring new clients and generate business opportunities." },
      { icon: "bi-chat-left-text", text: "Payroll and bookkeeping teams can organise client queries, set response deadlines and maintain answers to frequently asked questions about HMRC rules and procedures." },
      { icon: "bi-megaphone", text: "Firms can manage seminar registrations, group contacts by their service interests and send Budget updates while recording marketing permissions required under UK data protection rules." },
      { icon: "bi-stars", text: <><Link href="/products/dynamics-365-copilot/" className="u-i">Copilot</Link> helps employees draft emails and summarise information, while Business Central&apos;s Payables Agent converts supplier invoices received by email into draft purchase invoices for review.</> },
    ],
  },
];

const erpRows = [
  ["Best suited to", "Owner-managed and mid-tier practices", "Top-tier firms, networks and large groups"],
  ["How jobs start", "A new job, or a copy of last year's", "A quote converted into a contract with estimates"],
  ["Time capture", "Weekly timesheet periods with manager sign-off", "Desktop or phone entry with routed approvals"],
  ["WIP", "Methods such as cost value, sales value or percentage of completion", "Revenue and cost recognised on contract lines"],
  ["Packages and retainers", "Subscription Billing contracts", "Subscription billing with deferral schedules"],
  ["Fee arrangements", "Hourly and fixed-fee jobs", "Hourly, milestone and not-to-exceed in one contract"],
  ["Entities", "An LLP and service company, or a few subsidiaries", "Dozens of entities, automated eliminations, many currencies"],
  ["VAT", "MTD return filed from the ledger", "MTD return filed from the ledger"],
  ["AI", "Payables Agent for supplier bills; Copilot for questions and bank matching", "Copilot drafting project plans and status reports; Finance insights cash forecasts"],
  ["Starting licence (UK)", "Essentials: £61.50/user/month", "Finance: £161.50/user/month; Project Operations: £103.80/user/month"],
];

const crmCards = [
  {
    title: "Choose Dynamics 365 Sales if:",
    points: [
      "Partners want to see which introducers send the most work.",
      "Proposals for advisory, R&D tax relief or corporate finance work need tracking to a decision.",
      "Audit clients must be flagged before additional services are offered.",
    ],
  },
  {
    title: "Choose Dynamics 365 Customer Service if:",
    points: [
      "Payroll and bookkeeping clients email the team every day.",
      "Managers need to see open queries sorted by age and owner.",
      "A client portal on Power Pages, licensed separately, would cut the time spent chasing documents.",
    ],
  },
  {
    title: "Choose Dynamics 365 Customer Insights if:",
    points: [
      "Budget briefings, webinars and tax-year-end mailings are regular fixtures.",
      "Seminar sign-ups and attendance should flow into client records.",
      "Consent under UK GDPR and PECR must be evidenced for every marketing email.",
    ],
  },
];

const crmRows = [
  ["Job in the practice", "Turning introductions into instructions", "Keeping client queries on track", "Running campaigns and events"],
  ["Who uses it", "Partners, business development", "Payroll, bookkeeping and client service staff", "Marketing and practice development"],
  ["Key records", "Introducers, opportunities, fee quotes", "Cases, queues, SLA timers, knowledge articles", "Segments, journeys, event registrations, consent"],
  ["AI", "Copilot in Sales, from Enterprise", "Copilot in Customer Service, from Enterprise", "Copilot for campaign drafts and segments"],
  ["ERP connection", "Client and invoice data shared with Business Central", "Billing history visible to service staff", "Targets clients using ERP and Sales data"],
  ["Starting licence (UK)", "Professional: £50.00/user/month", "Professional: £38.40/user/month", "£1,397.30/tenant/month, unlimited users"],
];

const approachSteps = [
  { title: "Discover", text: "Dynamics Square meets with partners, practice managers, billing teams and credit control staff to understand how client work moves from the first agreement to final payment." },
  { title: "Initiate", text: "Dynamics Square agrees on the project scope, software licences and responsibilities, while your practice identifies people to manage account codes, job categories and employee billing rates." },
  { title: "Implement", text: "Dynamics Square sets up your accounts, job templates and WIP rules, then transfers client records, outstanding payments and unfinished work, checking figures against existing financial reports." },
  { title: "Prepare", text: "Dynamics Square tests the system using real monthly activities, including timesheets, WIP reviews, invoices and VAT returns, while training employees, managers and partners on their tasks." },
  { title: "Operate", text: "After launch, Dynamics Square provides ongoing support, helps manage Microsoft updates and new AI features, and improves management reports based on feedback from your first quarterly review." },
];

const pricing = [
  {
    product: "Dynamics 365 Business Central",
    tiers: [
      { tier: "Essentials", price: "£61.50", unit: "/user/month.", text: "The licence most practices need: ledger, jobs, timesheets, WIP, purchasing and retainer billing.", highlight: true },
      { tier: "Premium", price: "£84.60", unit: "/user/month.", text: "Built for manufacturers and field service businesses, so practices can usually skip it." },
      { tier: "Team Members", price: "£6.20", unit: "/user/month.", text: "Timesheet entry, approvals and read access for occasional users." },
    ],
  },
  {
    product: "Dynamics 365 Finance",
    tiers: [
      { tier: "Standard", price: "£161.50", unit: "/user/month.", text: "Multi-entity ledger, eliminations, recurring billing, deferrals and expenses." },
      { tier: "Premium", price: "£230.70", unit: "/user/month.", text: "Planning and analysis tools for budgets and forecasts, supplied with Copilot Credits.", highlight: true },
    ],
  },
  {
    product: "Dynamics 365 Project Operations",
    tiers: [
      { price: "£103.80", unit: "/user/month.", text: "Plans people and contracts, captures time and expenses, and passes project costs to Finance." },
    ],
  },
  {
    product: "Dynamics 365 Sales",
    tiers: [
      { tier: "Professional", price: "£50.00", unit: "/user/month.", text: "Contacts, accounts, opportunities and quotes." },
      { tier: "Enterprise", price: "£80.70", unit: "/user/month.", text: "Copilot in Sales, forecasting and fuller customisation.", highlight: true },
      { tier: "Premium", price: "£115.30", unit: "/user/month.", text: "Sales AI tools, supplied with Copilot Credits." },
    ],
  },
  {
    product: "Dynamics 365 Customer Service",
    tiers: [
      { tier: "Professional", price: "£38.40", unit: "/user/month.", text: "Case handling and a searchable knowledge base." },
      { tier: "Enterprise", price: "£80.70", unit: "/user/month.", text: "Copilot, plus routing by skill and capacity.", highlight: true },
    ],
  },
  {
    product: "Dynamics 365 Customer Insights",
    tiers: [
      { tier: "Standard", price: "£1,397.30", unit: "/tenant/month.", text: "Journeys and Data, priced for the whole tenant." },
      { tier: "With a qualifying Dynamics 365 application", price: "£821.90", unit: "/tenant/month.", highlight: true },
    ],
  },
];

const ModalCta = ({ children, className = "" }) => (
  <Link
    href="#exampleModal"
    data-bs-toggle="modal"
    className={`btn-get-started scrollto ${className}`}>
    <span>{children} &nbsp;<i className="bi bi-arrow-right"></i></span>
  </Link>
);

const AccountingFirms = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Accounting | Dynamics Square UK"
        description="Transform your accounting with Dynamics 365. Manage finances, automate reporting and improve financial visibility with Microsoft Dynamics 365 experts at Dynamics Square UK."
        image="https://www.dynamicssquare.co.uk/img/professional-services-01.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 Apps for Accounting and Advisory Firms</h1>
                <p>Use Dynamics 365 apps for your accounting and advisory practice. The suite comprises Microsoft&apos;s connected ERP and CRM, where every fee earner&apos;s hour, every engagement budget, every fee note and every client conversation sits in one place, ready for the partner who needs it.</p>
                <p>Dynamics Square tailors Dynamics 365 to the way UK accountancy and advisory practices win clients, staff their work and bill for it.</p>
                <div className={`text-center ${styles['af-hero-ctas']}`}>
                  <ModalCta>Request a Practice Review</ModalCta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='m-b-image-nnn m-b-image-nna'>
                <Image
                  src="/img/professional-services-01.png"
                  alt="Dynamics 365 for accounting and advisory firms: two advisers reviewing client work on a laptop in an office"
                  width={1097}
                  height={656}
                  priority
                  sizes="(max-width: 768px) 100vw, 1097px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="partner-trust-strip">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-9">
              <div className={`partner-trust-strip__stats ${styles['af-glance']}`}>
                <div className="partner-trust-strip__label">
                  <span>UK, USA, and Canada Coverage</span>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['af-glance__num']}>150+</p>
                  <p>Certified Dynamics 365 Consultants</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['af-glance__num']}>350+</p>
                  <p>Successful Implementations</p>
                </div>
                <div className={`partner-trust-strip__item ${styles['af-glance__text']}`}>
                  <i className="bi bi-intersect" aria-hidden="true"></i>
                  <p>One Team for Both ERP and CRM</p>
                </div>
                <div className={`partner-trust-strip__item ${styles['af-glance__text']}`}>
                  <i className="bi bi-patch-check" aria-hidden="true"></i>
                  <p>Business Central, Finance and CRM Specialists</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner for Business Applications"
                width={220}
                height={202}
                className="partner-trust-strip__badge"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="erp-expect-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What Dynamics 365 for Accounting Firms Does for Your Practice</h2>
              </div>
              <p>Dynamics 365 for accounting firms helps practices manage their finances, client work and daily operations in one place. Whether a firm charges by the hour, offers fixed-fee services or provides regular bookkeeping and payroll, it can track work, fees, projects and client relationships more easily.</p>
              <p><b>For example, a 40-person firm could lose around £240,000 annually if each employee forgets to record just 20 minutes of billable work daily.</b></p>
              <p style={{ marginBottom: '40px' }}>Microsoft offers different <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365 applications</Link>, allowing firms to choose what suits their needs. Dynamics Square supports five applications for accounting firms.</p>
            </div>
          </div>
          <div className="row g-4">
            {apps.map((app, i) => (
              <div className={`${i < 3 ? 'col-lg-4' : 'col-lg-6'} col-md-6 d-flex`} key={app.title}>
                <div className="erp-expect-card">
                  <div className="erp-expect-card__head">
                    <Image src={app.icon} alt={app.title} width={48} height={48} />
                    <h3 className={styles['af-card-title']}><Link href={app.href}>{app.title}</Link></h3>
                  </div>
                  <p>{app.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Compliance stays with your partners and your money laundering reporting officer. The platform of Dynamics 365 gives them the evidence trail: who opened a client file, who changed a figure, and when.</p>
              <ModalCta>Find the Right Applications for Your Practice</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-reg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What UK Rules Ask of an Accounting Firm&apos;s Records</h2>
              </div>
              <p>UK accounting firms handle sensitive financial and personal information, so they must follow several important rules. These rules cover how firms verify clients, protect information, manage tax records and maintain professional independence. Accounting software and CRM systems help organise the necessary records and supporting documents. However, firms must follow their own compliance policies and seek professional advice where required.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            {rules.map((rule) => (
              <div className="uk-reg-row" key={rule.title}>
                <div className={`uk-reg-row__icon ${styles['af-icon']}`}>
                  <i className={`bi ${rule.icon}`} aria-hidden="true"></i>
                </div>
                <div className="uk-reg-row__title">
                  <h3 className={styles['af-reg-title']}>{rule.title}</h3>
                </div>
                <div className="uk-reg-row__desc">
                  <p>{rule.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='solution-new-banner-three pd-con-63 pharma-purple-bg'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head pharma-sub-head-light'>
                <h2>Core Capabilities of Dynamics 365 for Accounting Firms</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                {capabilities.map((cap) => (
                  <div className='mycard' key={cap.title}>
                    <div className='mycard__inner mycard__inner--single'>
                      <div className='mycard__inner-left'>
                        <h3>{cap.title}</h3>
                        <div className="pharma-capability-items">
                          {cap.items.map((item, j) => (
                            <div className="pharma-capability-item" key={j}>
                              <span className={styles['af-cap-icon']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
                              <p>{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ModalCta className="pharma-capability-cta">Discuss Your Practice&apos;s Requirements</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Business Central or Dynamics 365 Finance for Accounting Firms</h2>
              </div>
              <p>Accounting firms choosing Dynamics 365 must decide between two options: <Link href="/products/dynamics-365-business-central/" className="u-i">Business Central</Link>, which offers simpler financial management, and <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link>, which supports more complex financial operations.</p>
              <p>The right choice depends mainly on the firm&apos;s business structure, number of entities and project management needs, rather than employee count alone.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h3 className={styles['af-compare-title']}>Choose Business Central if:</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Fee income comes mainly from compliance work, bookkeeping and a growing advisory line.</span></li>
                  <li><i className="bi bi-check"></i><span>Partners and managers plan their own engagements and staffing.</span></li>
                  <li><i className="bi bi-check"></i><span>The practice trades through one or two entities, for example an LLP and a service company.</span></li>
                  <li><i className="bi bi-check"></i><span>You want MTD VAT, WIP and fee notes handled by one affordable system.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h3 className={styles['af-compare-title']}>Choose Dynamics 365 Finance with Project Operations if:</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Overseas offices or network members report in several currencies.</span></li>
                  <li><i className="bi bi-check"></i><span>A central resourcing team books hundreds of staff onto assignments.</span></li>
                  <li><i className="bi bi-check"></i><span>Large assignments mix hourly, milestone and capped fees in one contract.</span></li>
                  <li><i className="bi bi-check"></i><span>Group finance needs automated eliminations across many entities.</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pharma-compare-table">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Aspects</th>
                        <th>Business Central</th>
                        <th>Finance + Project Operations</th>
                      </tr>
                    </thead>
                    <tbody>
                      {erpRows.map(([label, bc, fin]) => (
                        <tr key={label}>
                          <td><b>{label}</b></td>
                          <td>{bc}</td>
                          <td>{fin}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Specialist tools for tax returns, managing daily practice work, storing documents and collecting digital signatures continue to serve their specific purposes. Subsequent discovery sessions help decide where information should be stored and how it should be shared with Dynamics 365.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`pharma-compare-section ${styles['af-crm-section']}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Sales, Customer Service or Customer Insights: Choosing Your Microsoft Dynamics ERP+CRM Mix</h2>
              </div>
              <p>CRM can be adopted one application at a time. One sensible order is Sales first for partners, Customer Service when query volumes grow, and Customer Insights once marketing becomes a planned activity.</p>
            </div>
          </div>
          <div className="row g-4">
            {crmCards.map((card, i) => (
              <div className="col-lg-4 d-flex" key={card.title}>
                <div className={`pharma-compare-card ${i === 1 ? 'pharma-compare-card--alt' : ''}`}>
                  <h3 className={styles['af-compare-title']}>{card.title}</h3>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}><i className="bi bi-check"></i><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pharma-compare-table">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Aspects</th>
                        <th>Sales</th>
                        <th>Customer Service</th>
                        <th>Customer Insights</th>
                      </tr>
                    </thead>
                    <tbody>
                      {crmRows.map(([label, ...cells]) => (
                        <tr key={label}>
                          <td><b>{label}</b></td>
                          {cells.map((cell, i) => <td key={i}>{cell}</td>)}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className={styles['af-cta-gap']}>
                <ModalCta>Get an ERP and CRM Recommendation</ModalCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/professional-services-23.png" alt="Adviser reviewing practice reports in Dynamics 365 on a laptop, representing an ERP fit review for UK accounting and advisory firms" width={400} height={450} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP Software for Accounting and Advisory Firms in the UK?</h2>
                <p>The best ERP software for a UK accounting firm depends on how the business operates, rather than simply how many employees it has. A small partnership handling tax returns, annual accounts and monthly bookkeeping can manage its work with Business Central. Larger firms with overseas offices, multiple companies and complex staff scheduling may need Dynamics 365 Finance and Project Operations.</p>
                <p>We assess your business structure, billing methods, staff scheduling, client queries and marketing activities. Based on this, we provide a written recommendation explaining which applications you need and which licences suit each employee.</p>
                <ModalCta>Arrange Your Practice Fit Review</ModalCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>Dynamics 365 Implementation for UK Accounting Practices: Our Approach</h2>
                <p>Every Dynamics 365 implementation by Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design framework</Link>. We plan the launch around your firm&apos;s workload, avoiding busy periods such as self-assessment season and financial year-end.</p>
              </div>
            </div>
          </div>
          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>
            {approachSteps.map((step, i) => {
              const left = i % 2 === 0;
              const card = (
                <div className={`pharma-timeline__card pharma-timeline__card--${left ? 'left' : 'right'}`}>
                  <h3 className={styles['af-step-title']}>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
              return (
                <div className="pharma-timeline__row" key={step.title}>
                  {left ? card : <div className="pharma-timeline__spacer"></div>}
                  <div className="pharma-timeline__dot">{i + 1}</div>
                  {left ? <div className="pharma-timeline__spacer"></div> : card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={`pharma-pricing-section ${styles['af-pricing']}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 for Accounting Firms Pricing in the UK</h2>
              </div>
              <p>All figures below are current list prices in sterling, VAT excluded. Customer Insights carries one tenant-wide price, and every other application is priced per user, per month, on a yearly term. Mixing full users with Team Members licences keeps the total down.</p>
            </div>
          </div>
          {pricing.map((group) => (
            <React.Fragment key={group.product}>
              <h3 className="pharma-pricing-group-title">{group.product}</h3>
              <div className="row g-4">
                {group.tiers.map((t) => (
                  <div className="col-lg-4 col-md-6 d-flex" key={t.price}>
                    <div className={`pharma-pricing-card ${t.highlight ? 'pharma-pricing-card--highlight' : ''}`}>
                      {t.tier && <span className="pharma-pricing-card__tier">{t.tier}</span>}
                      <div className="pharma-pricing-card__price">From {t.price}<span>{t.unit}</span></div>
                      {t.text && <p>{t.text}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </React.Fragment>
          ))}
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">AI agents use Copilot Credits to perform tasks. You can either purchase these credits in advance or pay based on how much you use.</p>
              <p className={styles['af-footnote-follow']}>Software licences are only one part of the total cost. Implementation costs depend on your existing software, the amount of old data to transfer, the integrations needed and the number of companies moving to the new system together. Dynamics Square provides a detailed written quotation after understanding your requirements in an initial discussion.</p>
              <ModalCta>Get a Tailored Licensing and Project Quote</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/professional-services-21.png" alt="Two Dynamics 365 consultants, representing UK accountancy and advisory practices working with Dynamics Square" width={416} height={436} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Accountancy and Advisory Practices Choose Dynamics Square</h2>
                <p>Dynamics Square helps UK accounting and advisory firms implement Dynamics 365 to manage their finances, client relationships and daily work through connected applications.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> understand accounting processes, including unfinished client work, billable hours, fees and payment tracking. We recommend suitable software licences for each employee, helping firms avoid unnecessary costs.</p>
                <p>We also plan implementation around busy periods, such as self-assessment season and financial year-end, with training scheduled during quieter weeks.</p>
                <p>Our team of 150+ certified Dynamics 365 consultants brings experience from over 350 successful implementations. We also provide <Link href="/our-services/dynamics-365-support-services/" className="u-i">ongoing support</Link>, software updates, reporting improvements and access to new Copilot features.</p>
                <ModalCta>Speak to an Accounting Systems Consultant</ModalCta>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                        aria-expanded="false"
                        aria-controls={`faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-cta-001'>
                <h3 style={{ fontSize: '32px' }}>Give Every Partner a Clear View of Every Client</h3>
                <p>Get Dynamics Square UK help to bring time, fees and client relationships onto one Microsoft platform, set up for the way your practice works.</p>
                <div>
                  <ModalCta>Book a Practice Consultation</ModalCta>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccountingFirms;
