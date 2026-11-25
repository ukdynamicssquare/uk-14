import React from 'react';
import Image from "next/image";
import Link from "next/link";
import faqData from '../../public/data/industriesbusinessservices.json';
import PageSeo from "../../components/PageSeo";
import styles from "../../styles/dynamics-365-for-services-industries.module.css";

const overview = [
  { icon: "bi-calculator", lead: "Business Central", text: <>connects <Link href="/products/dynamics-365-business-central/financial-management/" className="u-i">financial management</Link> with <Link href="/products/dynamics-365-business-central/project-management/" className="u-i">project accounting</Link>, resource capacity, timesheets and purchasing.</> },
  { icon: "bi-kanban", lead: "Project Operations", text: "supports project planning, resource management, time and expense processes, and project billing." },
  { icon: "bi-funnel", lead: "Dynamics 365 Sales", text: "helps manage leads, opportunities, client accounts and sales activity." },
  { icon: "bi-headset", lead: "Customer Service and Field Service", text: "support businesses with ongoing customer support or on-site service requirements." },
];

const challengeRows = [
  ["Limited project visibility", "Project managers may not see budget overruns until finance closes the reporting period."],
  ["Unclear resource utilisation", "Management struggles to compare billable, non-billable and available employee time."],
  ["Delayed invoicing", "Missing timesheets, unapproved expenses and incomplete project information hold up billing."],
  ["Complex contracts", "Fixed-fee, time-and-materials, milestone and service agreements need different billing controls."],
  ["Resource planning problems", "Managers need to match people with the right skills and availability before confirming delivery dates."],
  ["Disconnected financial information", "Multiple legal entities, subcontractor costs and project revenue make reporting more difficult."],
  ["Growing service obligations", "Ongoing support may require case management, service-level agreements and field-service scheduling."],
];

const applications = [
  {
    title: "Dynamics 365 Business Central",
    icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
    tagline: "ERP and project accounting for growing service businesses",
    intro: "Business Central connects financial management with project accounting and operational processes. It is a practical option for firms that need to track project costs, resource time, purchasing, invoicing and financial performance.",
    capabilities: [
      "General ledger, accounts payable and receivable.",
      "Project budgets, tasks and cost tracking.",
      "Resource capacity, resource costs and prices.",
      "Timesheets and approval processes.",
      "Project billing, including fixed-price and time-and-materials approaches.",
      "Purchasing and supplier management.",
      "VAT reporting and financial controls.",
      "Multiple-company operations and intercompany processes.",
    ],
    bestSuited: "Consultancies, engineering firms and IT service providers that need integrated finance and project accounting without the complexity of a larger enterprise ERP deployment.",
    after: "Business Central supports project accounting and resource management, but it is not a complete replacement for every professional services automation (PSA) platform. Firms with complex skills-based scheduling, advanced project planning or detailed contract requirements should also assess Project Operations.",
    href: "/products/dynamics-365-business-central/",
    linkText: "Explore Dynamics 365 Business Central",
  },
  {
    title: "Dynamics 365 Project Operations",
    icon: "/img/menu-icons/dynamics-365-project-management.svg",
    tagline: "Project delivery and resource management",
    intro: "Project Operations is designed for project-centric businesses that need greater control over the commercial and operational side of service delivery.",
    capabilities: [
      "Project opportunities, estimates and service-based quotes.",
      "Project contracts and commercial terms.",
      "Resource requests based on roles and skills.",
      "Project resource scheduling.",
      "Time and expense recording.",
      "Project actuals and budget monitoring.",
      "Project and contract invoicing.",
      "Commercial controls, including not-to-exceed arrangements.",
    ],
    before: "Project Operations has different deployment models. Project Operations Core can work with an external ERP or finance system, with proforma invoices sent for financial processing. The Integrated with ERP deployment connects project operations with Dynamics 365 Finance and Operations capabilities. The right model depends on the organisation's financial and operational requirements.",
    bestSuited: "Larger consultancies and project-led businesses with complex resource allocation, multiple delivery teams or more involved project contracts.",
    href: "/products/dynamics-365-project-operations/",
    linkText: "Explore Dynamics 365 Project Operations",
  },
  {
    title: "Dynamics 365 Sales",
    icon: "/img/menu-icons/dynamics-365-sales.svg",
    tagline: "CRM for professional services businesses",
    intro: "Sales teams in professional services firms often depend on relationships, referrals, tenders and repeat engagements. Dynamics 365 Sales provides a structured way to manage those activities.",
    capabilities: [
      "Lead capture from different sources.",
      "Opportunity tracking by service line, sector and expected value.",
      "Client accounts and decision-maker records.",
      "Meeting, call and sales activity tracking.",
      "Quotes and proposals.",
      "Sales forecasting and pipeline reporting.",
      "Identification of repeat-business and account-growth opportunities.",
    ],
    before: "Sales can integrate with Outlook and Microsoft Teams, helping employees access customer information in their existing working environment. The level of activity tracking depends on configuration and user settings.",
    bestSuited: "Consultancies, technology service providers and other firms that want a clearer view of their sales pipeline and client relationships.",
    href: "/products/microsoft-dynamics-365-sales/",
    linkText: "Explore Dynamics 365 Sales",
  },
];

const serviceRows = [
  [<Link href="/products/microsoft-dynamics-365-customer-service/" key="cs">Dynamics 365 Customer Service</Link>, "Customer case management, service-level agreements, knowledge management and support processes."],
  [<Link href="/products/microsoft-dynamics-365-field-service/" key="fs">Dynamics 365 Field Service</Link>, "Work orders, scheduling, technician assignments and mobile workflows for on-site service delivery."],
  ["Business Central Premium service management", "Service orders, service contracts, service items and related invoicing."],
];

const engagementRows = [
  ["1. Opportunity", "Record the prospect, stakeholders, expected value and sales stage.", "Dynamics 365 Sales"],
  ["2. Proposal and agreement", "Prepare the scope, milestones, resources, rates and commercial terms.", "Sales and configured proposal processes"],
  ["3. Project planning", "Set up the approved engagement, tasks and budget.", "Business Central or Project Operations"],
  ["4. Resource assignment", "Allocate consultants based on the skills and availability required.", "Business Central or Project Operations, depending on requirements"],
  ["5. Time and expenses", "Submit project time and eligible expenses for review.", "The selected project application"],
  ["6. Cost monitoring", "Compare actual time and costs with the approved budget.", "Project application and financial reporting"],
  ["7. Client invoicing", "Prepare invoices using the agreed billing model and approved project information.", "Business Central or Project Operations"],
  ["8. Performance reporting", "Review project margins, utilisation, revenue and outstanding receivables.", <>Dynamics 365 and <Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link></>],
];

const businessAreaRows = [
  ["Sales and client relationships", "Lead and opportunity tracking, account history, proposal processes, tender tracking, sales approvals and pipeline reporting."],
  ["Project accounting and resources", "Project set-up, budgets, resource capacity, skills-based scheduling, time recording, expense processes and subcontractor cost tracking."],
  ["Finance and commercial control", "Project billing, work-in-progress reporting, purchasing, receivables, payables, multi-company operations and financial reporting."],
  ["Customer support and field operations", "Service contracts, customer cases, service-level agreements, work orders, technician scheduling and customer self-service portals."],
];

const distinctions = [
  { icon: "bi-people", lead: "Resource management:", text: "Business Central supports resource capacity and project allocation. Project Operations provides more extensive resource requests, skills matching and scheduling." },
  { icon: "bi-receipt", lead: "Project billing:", text: "Business Central supports project billing, including fixed-price and time-based approaches. Project Operations provides more extensive project contract and billing capabilities." },
  { icon: "bi-hourglass-split", lead: "Work in progress:", text: "Reporting can be configured to monitor costs incurred, work not yet billed and project financial positions." },
  { icon: "bi-diagram-3", lead: "Multi-company operations:", text: "Business Central supports multiple companies and intercompany processes. Consolidation and reporting need to be configured around the organisation's structure." },
  { icon: "bi-window", lead: "Customer portals:", text: "Power Pages can be configured for selected customer interactions, subject to security, integration and licensing requirements." },
];

const aiRows = [
  ["Sales Qualification Agent", "Researches leads, assesses their fit against target-customer criteria and prepares outreach. Its research-and-engage mode can also support configured prospect engagement.", "Requires supported Dynamics 365 Sales capabilities, administrator configuration and agent capacity."],
  ["Time Entry Agent", "Prepares draft project time entries using project assignments, resource bookings and historical patterns.", "Production-ready preview for supported Project Operations environments, version 4.140.0.239 or later."],
  ["Expense Agent", "Extracts receipt information and prepares expense entries and reports.", "Production-ready preview for supported Project Operations and Finance and Operations environments."],
  ["Approvals Agent", "Reviews time, expense and material entries against configured policy documents and identifies items needing attention.", "Production-ready preview for supported Project Operations environments, version 4.140.0.239 or later."],
  ["Payables Agent", "Processes supplier invoice and credit-note PDFs and prepares draft purchase documents for review.", "Generally available in supported Business Central environments, including the UK. Requires a configured Microsoft 365 mailbox and Copilot Studio message billing."],
];

const aiChecks = [
  "Whether the required Dynamics 365 application and deployment model are supported.",
  "Whether the environment meets the documented version requirements.",
  "Which user and agent licences are needed.",
  <>Whether <Link href="/ai-solutions/copilot-studio/" className="u-i">Copilot Studio</Link> capacity or Copilot Credits are required.</>,
  "Whether administrators need to enable features, connectors, workflows or agent permissions.",
  "Whether the agent is generally available or still in production-ready preview.",
];

const compareRows = [
  ["Main purpose", "Finance and project accounting", "Project delivery and resource management", "Customer and opportunity management"],
  ["Typical users", "Finance, project managers and consultants", "Delivery leads, resource managers and consultants", "Partners, sales teams and account managers"],
  ["Project budgets", "Yes", "Yes", "Not its main purpose"],
  ["Resource management", "Capacity and project allocation", "More detailed resource requests and scheduling", "Not its main purpose"],
  ["Time and expenses", "Project timesheets and related processes", "Project time and expense management", "Not its main purpose"],
  ["Billing", "Project billing, including fixed-price and time-based approaches", "Project and contract billing", "Sales quotes and orders"],
  ["Best fit", "Growing service businesses", "Complex project-led organisations", "Firms improving sales and account management"],
];

const chooseCards = [
  {
    title: "Business Central may be the right starting point if:",
    points: [
      "You need finance and project accounting in one business system.",
      "Project budgets, actual costs and invoicing are managed through spreadsheets.",
      "Your billing model mainly involves fixed-price or time-and-materials projects.",
      "You need resource capacity and timesheet processes.",
      "You want better financial visibility across more than one company.",
    ],
  },
  {
    title: "Consider Project Operations if:",
    points: [
      "You manage a large number of concurrent client engagements.",
      "Resource requests need to account for skills, roles and availability.",
      "Project contracts have detailed billing arrangements or not-to-exceed limits.",
      "Project managers need more extensive control over scheduling, estimates and delivery.",
      <>Your organisation uses or plans to use <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link> or another supported finance system.</>,
    ],
  },
  {
    title: "Choose Dynamics 365 Sales if:",
    points: [
      "Client relationships and opportunities are spread across individual inboxes.",
      "Partners lack a consistent view of the sales pipeline.",
      "Proposals and follow-ups are difficult to track.",
      "Management needs better reporting on opportunities and account growth.",
    ],
  },
  {
    title: "Add Customer Service or Field Service if:",
    points: [
      "You manage support cases and service-level agreements after project delivery.",
      "Engineers or technicians carry out scheduled work at customer locations.",
      "Service contracts, work orders and mobile job reporting are important to your business.",
    ],
  },
];

const selectionQuestions = [
  "Can project managers see costs and budget consumption before the engagement is complete?",
  "Can consultants record time and expenses through a process they will use consistently?",
  "Can finance prepare invoices from approved project information?",
  "What will the full cost be after licences, implementation, integrations, support and additional applications?",
];

const implementationRows = [
  ["1. Discover the business model", "Review how the firm wins work, prices engagements, assigns resources, records time, manages expenses and prepares invoices.", "Process maps, business requirements and a gap assessment."],
  ["2. Define the solution architecture", "Select the appropriate Dynamics 365 applications. Establish how customer, project, resource and financial data will be managed. Review legal entities, reporting and integration needs.", "Application design, scope, data ownership and implementation plan."],
  ["3. Configure and integrate", "Configure sales processes, project templates, rate cards, billing rules, approval workflows and financial settings. Plan integrations with payroll, HR, Microsoft 365 and other required systems.", "Configured applications, integrations and migrated test data."],
  ["4. Test and prepare for go-live", "Test real business scenarios, including a new engagement, resource assignment, timesheet submission, expense approval, project cost update and client invoice. Train partners, project managers, consultants and finance teams.", "User acceptance sign-off, training and cutover plan."],
  ["5. Go live and improve", "Move agreed processes into production, support users and monitor adoption. Plan further phases for reporting, automation, service applications and integrations.", "Supported live system and an improvement roadmap."],
];

const pricingRows = [
  ["Business Central", "Essentials", "£61.50", "Finance and project accounting"],
  ["Business Central", "Premium", "£84.60", "Essentials plus service management and manufacturing"],
  ["Business Central", "Team Members", "£6.20", "Limited access, subject to licence rights"],
  ["Dynamics 365 Project Operations", "Standard", "£103.80", "Project-centric businesses"],
  ["Dynamics 365 Sales", "Professional", "£50.00", "Core CRM and sales processes"],
  ["Dynamics 365 Sales", "Enterprise", "£80.70", "Advanced sales capabilities"],
  ["Dynamics 365 Customer Service", "Professional", "£38.40", "Standard customer support requirements"],
];

const exampleRows = [
  ["Business Central Essentials", "8", "£61.50", "£492.00"],
  ["Business Central Team Members", "50", "£6.20", "£310.00"],
  ["Dynamics 365 Sales Enterprise", "10", "£80.70", "£807.00"],
];

const reasons = [
  { icon: "bi-search", lead: "Service-business discovery:", text: "We assess how your firm manages contracts, projects, resources, time, expenses and billing." },
  { icon: "bi-check2-circle", lead: "Practical application selection:", text: "We evaluate Business Central, Project Operations, Sales, Finance and customer-service applications against your requirements." },
  { icon: "bi-cash-coin", lead: "Project-to-cash focus:", text: "We plan how approved work, resource costs, project actuals and invoices connect." },
  { icon: "bi-plug", lead: "Integration planning:", text: "We assess the data and workflows that need to move between Dynamics 365, Microsoft 365 and other business systems." },
  { icon: "bi-layers", lead: "Phased implementation:", text: "We prioritise essential processes and plan further improvements around business needs." },
  { icon: "bi-patch-check", lead: "Microsoft expertise:", text: <>Our team includes more than 150 <Link href="/our-services/dynamics-365-consultant/" className="u-i">certified professionals</Link>, with over 14 years of experience and 500+ clients worldwide.</> },
  { icon: "bi-shield-lock", lead: "Information security:", text: "Dynamics Square is ISO 27001:2022 certified." },
];

const ModalCta = ({ children, className = "" }) => (
  <Link
    href="#exampleModal"
    data-bs-toggle="modal"
    className={`btn-get-started scrollto ${className}`}>
    <span>{children} &nbsp;<i className="bi bi-arrow-right" aria-hidden="true"></i></span>
  </Link>
);

const DataTable = ({ head, rows, total }) => (
  <div className="pharma-compare-table">
    <div className="table-responsive">
      <table className={`table table-striped ${styles['si-table']} ${head.length > 2 ? styles['si-table--wide'] : ''}`}>
        <thead>
          <tr>
            {head.map((label) => <th scope="col" key={label}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells], i) => (
            <tr key={i}>
              <th scope="row">{label}</th>
              {cells.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
        {total && (
          <tfoot>
            <tr>
              <th scope="row">{total[0]}</th>
              {total.slice(1).map((cell, i) => <td key={i}>{cell}</td>)}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  </div>
);

const CheckList = ({ items }) => (
  <ul className={styles['si-check-list']}>
    {items.map((item, i) => (
      <li key={i}><i className="bi bi-check" aria-hidden="true"></i><span>{item}</span></li>
    ))}
  </ul>
);

const IconList = ({ items }) => (
  <ul className={styles['si-reasons']}>
    {items.map((item) => (
      <li key={item.lead}>
        <span className={styles['si-icon-box']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
        <p><b>{item.lead}</b> {item.text}</p>
      </li>
    ))}
  </ul>
);

const BusinessServices = () => {
  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Business Services | Dynamics Square UK"
        description="Dynamics 365 for UK consultancies, IT service providers and engineering firms. Connect sales, project delivery, resource planning, finance and client billing."
        image="/img/bc-support-banner.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 for Business Services</h1>
                <p><b>Manage client engagements, improve resource utilisation and gain better control of project finances with Microsoft Dynamics 365.</b></p>
                <p>Connect sales, project delivery, finance and customer service through business applications designed around the way your firm works. Dynamics Square helps UK consultancies, IT service providers, engineering businesses and other professional services organisations implement Microsoft Dynamics 365.</p>
                <div className={`text-center ${styles['si-hero-cta']}`}>
                  <ModalCta>Talk to a Business Services Specialist</ModalCta>
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
                  src="/img/bc-support-banner.png"
                  alt="Dynamics 365 Business Central home page with sales, purchasing and payment activity"
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
              <div className={`partner-trust-strip__stats ${styles['si-glance']} ${styles['si-glance--five']}`}>
                <div className="partner-trust-strip__label">
                  <span>Serving businesses across the UK, USA and Canada</span>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>500+</p>
                  <p>clients worldwide</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>150+</p>
                  <p>certified professionals</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>14+</p>
                  <p>years of experience</p>
                </div>
                <div className={`partner-trust-strip__item ${styles['si-glance__text']}`}>
                  <i className="bi bi-shield-lock" aria-hidden="true"></i>
                  <p>ISO 27001:2022 certified</p>
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

      <section className={styles['si-section']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Microsoft Dynamics 365 for Professional Services Businesses</h2>
              </div>
              <p><Link href="/industries/professional-services/" className="u-i">Professional services firms</Link> need to manage more than customer relationships. They must coordinate people, projects, contracts, costs and client billing.</p>
              <p>Microsoft Dynamics 365 brings together ERP, CRM and project management applications to support these activities. The right combination depends on the firm&apos;s size, financial structure, delivery model and project complexity.</p>
            </div>
          </div>
          <IconList items={overview} />
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['si-gap']}>These applications can connect with Microsoft 365, <Link href="/products/microsoft-power-platform/" className="u-i">Power Platform</Link> and reporting tools. Integration and workflows need to be designed around the firm&apos;s processes, data and existing systems.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Business Challenges We Help Address</h2>
              </div>
              <p>As a professional services firm grows, managing projects and finances through spreadsheets and disconnected applications becomes harder. The effects often appear in project margins, resource utilisation and billing.</p>
            </div>
          </div>
          <DataTable head={["Common challenge", "What it means for the business"]} rows={challengeRows} />
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['si-table-after']}>Dynamics 365 can connect client commitments, project delivery, employee time and financial results. This gives management a clearer view of how work is sold, delivered and billed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Microsoft Dynamics 365 Applications for Business Services</h2>
              </div>
              <p>Different service businesses need different applications. A consultancy focused on project accounting may not need the same system as an IT support provider or an engineering firm with field-service teams.</p>
            </div>
          </div>
          {applications.map((app) => (
            <div className={styles['si-app']} key={app.title}>
              <div className={styles['si-app__grid']}>
                <div>
                  <div className={styles['si-app__head']}>
                    <Image src={app.icon} alt="" width={48} height={48} />
                    <h3>{app.title}</h3>
                  </div>
                  <p><b>{app.tagline}</b></p>
                  <p>{app.intro}</p>
                </div>
                <div className={styles['si-app__list']}>
                  <p><b>Key capabilities</b></p>
                  <CheckList items={app.capabilities} />
                </div>
                <div>
                  {app.before && <p>{app.before}</p>}
                  <p><b>Best suited to:</b> {app.bestSuited}</p>
                  {app.after && <p>{app.after}</p>}
                  <Link href={app.href} className={styles['si-app__link']}>{app.linkText}</Link>
                </div>
              </div>
            </div>
          ))}
          <div className={styles['si-app']}>
            <div className={styles['si-app__head']}>
              <Image src="/img/menu-icons/dynamics-365-customer-service.svg" alt="" width={48} height={48} />
              <h3>Dynamics 365 Customer Service and Field Service</h3>
            </div>
            <p><b>Customer support and on-site service delivery</b></p>
            <p className="mb-0">Some businesses continue working with customers long after the initial project has been delivered. IT support providers, facilities management businesses and engineering service firms may need dedicated applications for these activities.</p>
            <DataTable head={["Application", "What it supports"]} rows={serviceRows} />
            <p className={styles['si-table-after']}>Business Central Premium includes service management capabilities, but these are different from the broader customer support and field-service functions in the dedicated Dynamics 365 applications.</p>
            <p className="mb-0"><b>Best suited to:</b> IT support businesses, managed service providers, facilities management companies and engineering firms with ongoing service obligations.</p>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Connect the Client Engagement from Opportunity to Invoice</h2>
              </div>
              <p>A professional services firm needs a reliable process that connects what it sells with what it delivers and bills.</p>
              <p>Consider a consultancy that wins a fixed-fee transformation project. A connected Dynamics 365 setup can support the following process:</p>
            </div>
          </div>
          <DataTable head={["Stage", "Business activity", "How the applications can help"]} rows={engagementRows} />
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['si-table-after']}>The exact workflow depends on the applications selected and how they are configured. For example, connecting a Sales opportunity to a project does not automatically create every project record or transfer every field without the required integration and process design.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Business Management Capabilities for Professional Services</h2>
              </div>
              <p>The selected applications and configuration determine which processes are available. These are some of the wider business requirements a Dynamics 365 solution can address.</p>
            </div>
          </div>
          <DataTable head={["Business area", "Capabilities"]} rows={businessAreaRows} />
          <p className={styles['si-table-after']}>A few distinctions matter when selecting the applications:</p>
          <IconList items={distinctions} />
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Copilot and AI Agents for Business Services</h2>
              </div>
              <p>Microsoft Dynamics 365 includes <Link href="/ai-solutions/" className="u-i">AI capabilities</Link> that can help professional services firms reduce manual work across sales, project administration, expense processing and finance. Availability depends on the application, deployment model, software version and licensing.</p>
            </div>
          </div>
          <DataTable head={["AI capability", "Business use", "Availability"]} rows={aiRows} />
          <div className={styles['si-panel']}>
            <h3>What businesses should check before enabling AI agents</h3>
            <p>AI agents are not automatically available in every Dynamics 365 deployment. Before introducing them, organisations should check:</p>
            <CheckList items={aiChecks} />
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="mb-0">AI-generated entries and documents should also be reviewed by authorised employees before approval or posting.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Which Dynamics 365 Solution Is Right for Your Business?</h2>
              </div>
              <p>The choice depends on the complexity of your projects, financial structure, resource requirements and customer-service model.</p>
            </div>
          </div>
          <DataTable
            head={["Business requirement", "Business Central", "Project Operations", "Dynamics 365 Sales"]}
            rows={compareRows}
          />
          <div className={`row g-4 ${styles['si-gap']}`}>
            {chooseCards.map((card, i) => (
              <div className="col-lg-6 d-flex" key={card.title}>
                <div className={`pharma-compare-card ${i === 1 || i === 2 ? 'pharma-compare-card--alt' : ''}`}>
                  <h3 className={styles['si-compare-title']}>{card.title}</h3>
                  <ul>
                    {card.points.map((point, j) => (
                      <li key={j}><i className="bi bi-check" aria-hidden="true"></i><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['si-panel']}>
            <h3>Four questions to ask before selecting an ERP or CRM</h3>
            <CheckList items={selectionQuestions} />
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="mb-0">A specialist professional services automation platform may still be the better option for firms with highly specific resource scheduling, project planning or contract requirements. The right solution should be based on a fit-gap assessment rather than product preference alone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="pharma-timeline-head">
                <h2>Dynamics 365 Implementation for Business Services</h2>
                <p>A service-business implementation needs to reflect the relationship between contracts, project delivery, employee time and financial reporting. Dynamics Square uses a structured delivery approach informed by Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design guidance</Link>.</p>
              </div>
            </div>
          </div>
          <div className={styles['si-dark']}>
            <h3>Our five-stage implementation approach</h3>
            <DataTable head={["Stage", "What happens", "Expected output"]} rows={implementationRows} />
            <div className="row">
              <div className="col-lg-9">
                <p className={styles['si-table-after']}>The implementation scope should be agreed before configuration begins. This helps avoid unnecessary customisation and ensures that the selected applications support the firm&apos;s actual delivery and financial processes.</p>
                <Link href="/products/microsoft-dynamics-365/">Explore Dynamics 365 implementation services</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 Pricing for Business Services Companies in the UK</h2>
              </div>
              <p>The following <Link href="/tools/microsoft-dynamics-licensing-calculator/" className="u-i">Microsoft UK list prices</Link> are per user per month, paid annually and excluding VAT. They are licence reference points, not the total cost of implementing a business system.</p>
            </div>
          </div>
          <DataTable head={["Product", "Licence", "Price per user/month", "Typical use"]} rows={pricingRows} />
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['si-table-after']}>Prices are paid annually and exclude VAT. Microsoft prices and product terms can change. Check the current Microsoft UK pricing pages before preparing a quotation. Copilot agents and Copilot Studio can introduce separate capacity or consumption costs.</p>
              <h3 className={styles['si-sub-title']}>Example licence cost for a professional services firm</h3>
              <p>Consider a firm with:</p>
              <CheckList
                items={[
                  "8 Business Central Essentials users.",
                  "50 Business Central Team Members users.",
                  "10 Dynamics 365 Sales Enterprise users.",
                ]}
              />
            </div>
          </div>
          <DataTable
            head={["Licence", "Quantity", "Price per user/month", "Monthly total"]}
            rows={exampleRows}
            total={["Total", "68 licence assignments", "", "£1,609.00"]}
          />
          <div className="row">
            <div className="col-lg-9">
              <div className={styles['si-totals']}>
                <p><b>Estimated monthly licence cost: £1,609</b></p>
                <p><b>Estimated annual licence cost: £19,308</b></p>
              </div>
              <p>The 68 assignments do not necessarily represent 68 separate employees. Some employees may need more than one application licence, while others may qualify for restricted Team Members access. Team Members licences do not provide the same rights as full Business Central licences. The correct licence must be selected according to each person&apos;s actual tasks, and any base or attach licence conditions must be checked before purchase.</p>
              <p><Link href="/tools/erp-implementation-cost-calculator/" className="u-i">Implementation</Link>, data migration, integrations, <Link href="/our-services/dynamics-365-support-services/" className="u-i">support</Link> and additional capacity are separate costs.</p>
              <ModalCta>Get a Custom Quote</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Why Business Services Companies Choose Dynamics Square</h2>
              </div>
              <p>An ERP or CRM implementation should improve the way a service business manages client work and financial performance. It should not introduce unnecessary complexity or force teams into processes that do not match the way they operate.</p>
              <p>Dynamics Square works with organisations looking to connect Microsoft business applications with their operational requirements.</p>
              <h3 className={styles['si-sub-title']}>What we bring to a business services implementation</h3>
            </div>
          </div>
          <IconList items={reasons} />
          <div className={styles['si-cta-gap']}>
            <ModalCta>Talk to a Business Services Specialist</ModalCta>
          </div>
        </div>
      </section>

      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>FAQs</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.map((faq) => (
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessServices;
