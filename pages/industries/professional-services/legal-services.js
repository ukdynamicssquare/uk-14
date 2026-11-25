import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industrieslegalservices.json';
import PageSeo from "../../../components/PageSeo";
import styles from "../../../styles/dynamics-365-for-legal-services.module.css";

const solutions = [
  {
    title: "Dynamics 365 Business Central",
    href: "/products/dynamics-365-business-central/",
    icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
    text: "Law firm business management software: ledger, banking, purchasing, reporting, projects and time sheets. Configured for matter accounting and fee billing, with client account ledgers custom-built and tested against your client money procedures.",
    bestFor: "finance teams, cashiers and COFAs who need WIP, lockup and client account balances in one place instead of spreadsheets.",
  },
  {
    title: "Dynamics 365 Sales",
    href: "/products/microsoft-dynamics-365-sales/",
    icon: "/img/menu-icons/dynamics-365-sales.svg",
    text: "The legal CRM for relationships, enquiries and business development. Configured with onboarding, conflict search and due diligence workflows that hold a matter until checks are complete.",
    bestFor: "partners, BD and intake teams who need to know which enquiries convert, who owns each relationship and where cross-selling opportunities sit.",
  },
];

const rules = [
  {
    icon: "bi-bank",
    title: "Client Money: SRA Accounts Rules",
    text: "Rule 8.3 requires a three-way client account reconciliation at least every five weeks, signed off by the COFA or a manager. From 1 April 2027, firms holding client money that are required to obtain an accountant's report must also submit it to the SRA, qualified or not; exempt firms declare their exemption.",
    help: "client account ledgers and reconciliation reports, designed and tested against your procedures and the SRA Accounts Rules, make each five-weekly review and annual report faster to evidence.",
  },
  {
    icon: "bi-shield-lock",
    title: "Anti-Money Laundering",
    text: "The Money Laundering Regulations 2017 require risk assessments, ID checks and source-of-funds scrutiny. In 2025-26, 9% of the 5,349 files requiring source-of-funds checks had no evidence of those checks, and SRA fines and settlements totalled about £2.37m. The FCA takes over AML supervision from late 2028.",
    help: "onboarding workflows hold a matter until ID, risk assessment and source-of-funds steps are recorded, creating the audit trail supervisors ask for.",
  },
  {
    icon: "bi-person-lock",
    title: "Conflicts and Confidentiality",
    text: "The SRA Code of Conduct bars acting with a conflict or significant risk of one; UK GDPR adds retention and access duties.",
    help: "one record of clients, opposing parties and related entities makes conflict searches reliable, while role-based security limits who can see sensitive matters.",
  },
  {
    icon: "bi-tags",
    title: "Price Transparency",
    text: "Firms offering conveyancing, probate, employment or immigration services must publish prices that match what clients pay.",
    help: "matter data on fees quoted, final bills and timescales shows whether your published ranges reflect what you actually charge.",
  },
];

const capabilities = [
  {
    title: "Legal Client Management: Intake and Onboarding",
    items: [
      { icon: "bi-inbox", lead: "Enquiry capture (Standard):", text: "web, phone, email and referral leads with source, practice area and fee estimate." },
      { icon: "bi-list-check", lead: "Onboarding workflow (Configured):", text: "engagement letter, ID request and due diligence checklist; the matter is held until each step is done." },
      { icon: "bi-search", lead: "Conflict search (Configured):", text: "clients, contacts, opposing parties and related companies, with reviewer and date recorded." },
      { icon: "bi-person-vcard", lead: "ID and risk checks (Integration):", text: "verification and source-of-funds results from your provider, plus client and matter risk assessments." },
    ],
  },
  {
    title: "CRM for Legal Professionals",
    items: [
      { icon: "bi-clock-history", lead: "Relationship history (Standard):", text: "Outlook and Teams activity logged against every client." },
      { icon: "bi-diagram-3", lead: "Panels and cross-selling (Configured):", text: "appointments, tender dates and renewals across practice groups." },
      { icon: "bi-calendar-event", lead: "Events and updates (Standard, separate licence):", text: <>seminars and legal updates through <Link href="/products/microsoft-dynamics-365-marketing/" className="u-i">Customer Insights – Journeys</Link>, with consent per contact.</> },
      { icon: "bi-stars", lead: "Copilot (Standard in Sales Enterprise):", text: "email summaries, meeting briefs and follow-up drafts." },
    ],
  },
  {
    title: "Matters, Time and Billing",
    items: [
      { icon: "bi-folder-plus", lead: "Matter set-up (Configured):", text: "a Business Central project with client, fee earner, rate card and budget, linked to the CRM record." },
      { icon: "bi-stopwatch", lead: "Time recording (Standard):", text: "project time sheets with approval, on low-cost Team Members licences." },
      { icon: "bi-receipt", lead: "Billing (Configured):", text: "hourly, fixed or staged fees, with WIP, unbilled time and lockup reports." },
      { icon: "bi-cash-coin", lead: "Disbursements (Configured):", text: "court fees, searches and counsel's fees recovered on the next bill." },
    ],
  },
  {
    title: "Finance, Client Account and Reporting",
    items: [
      { icon: "bi-journal-text", lead: "Office accounts (Standard):", text: "ledger, bank reconciliation, purchasing, VAT and Making Tax Digital." },
      { icon: "bi-wallet2", lead: "Client account (Custom):", text: "separate client and office ledgers with a balance for every matter, designed around your client money procedures." },
      { icon: "bi-check2-square", lead: "Reconciliation (Custom):", text: "five-weekly three-way report for COFA sign-off, flagging aged, residual or overdrawn balances." },
      { icon: "bi-bar-chart-line", lead: <><Link href="/products/microsoft-power-bi/">Power BI</Link> (Configured):</>, text: "utilisation, realisation, lockup and profitability by fee earner, client and practice area." },
    ],
  },
];

const copilotItems = [
  { icon: "bi-chat-square-text", lead: <><Link href="/products/microsoft-dynamics-365-sales/copilot/">Copilot in Sales</Link> (Standard):</>, text: "client summaries, meeting prep and follow-up drafts." },
  { icon: "bi-bank2", lead: <><Link href="/products/dynamics-365-copilot/">Copilot in Business Central</Link> (Standard):</>, text: "suggests bank reconciliation matches and helps analyse list data such as projects and ledger entries." },
  { icon: "bi-robot", lead: "Intake agents (Configured, Copilot Studio):", text: <>built in <Link href="/ai-solutions/copilot-studio/" className="u-i">Copilot Studio</Link> and integrated with Dynamics 365 to answer enquiries, collect matter details and create a lead for review.</> },
  { icon: "bi-shield-check", lead: "Governed AI (Configured):", text: "Copilot sees only what each user is permitted to see, so we configure security roles, data access and agent scope to keep privileged matters restricted. Outputs stay drafts until a fee earner approves them." },
];

const chooseCards = [
  {
    title: "Choose Business Central first if:",
    points: [
      "You can't report WIP, lockup or profitability by matter.",
      "Client account reconciliations take days of spreadsheet work.",
      "You bill a mix of hourly, fixed and staged fees.",
      "You run several entities or offices, or are growing by acquisition.",
    ],
  },
  {
    title: "Choose Dynamics 365 Sales first if:",
    points: [
      "Nobody can say which enquiry channels convert.",
      "Client relationships live in partners' inboxes and spreadsheets.",
      "Onboarding and conflict checks rely on manual chasing.",
      "You compete for panel appointments.",
    ],
  },
];

const compareRows = [
  ["Main job", "Firm finances and matter accounting", "Win, onboard and retain clients"],
  ["Daily users", "Finance, cashiers, COFA; fee earners for time", "Partners, BD, marketing, intake"],
  ["Client intake", "Matter set-up from the CRM record (configured)", "Enquiry capture (standard); onboarding (configured)"],
  ["Conflict checks", "Not provided", "Conflict search (configured)"],
  ["Time and billing", "Time sheets (standard); legal fee rules (configured)", "Not provided"],
  ["Client account", "Client and office ledgers, reconciliation report (custom-built and validated)", "Not provided"],
  ["From (UK)", "£61.50/user/month", "£50.00/user/month"],
];

const vendorQuestions = [
  "Does it log Outlook and Teams activity without manual entry?",
  "Can it hold a matter until conflict and due diligence checks are recorded?",
  "Does client data flow into billing and finance without re-keying?",
  "Where is your data hosted, and who can see privileged matters?",
  "What is the full cost, including licences, implementation and support?",
];

const approachSteps = [
  { icon: "bi-search", lead: "Discover:", text: "map one matter from enquiry to final bill, and every system it touches. Output: process map and gap list." },
  { icon: "bi-flag", lead: "Initiate:", text: "confirm scope and products, and agree which system owns each record. Output: scope, data owners and project plan." },
  { icon: "bi-gear", lead: "Implement:", text: "configure workflows, conflict search, billing and ledgers; integrate case, document and ID tools; migrate and validate client, matter and ledger data. Output: tested system with migrated data." },
  { icon: "bi-mortarboard", lead: "Prepare:", text: "train partners, fee earners, cashiers and BD staff, then run parallel reconciliations until client balances agree to the penny. Output: COFA-ready go-live sign-off." },
  { icon: "bi-arrow-repeat", lead: "Operate:", text: <><Link href="/our-services/dynamics-365-support-services/" className="u-i">ongoing support</Link> through new practice areas, rule changes such as accountant&apos;s report submission from 1 April 2027, and acquisitions.</> },
];

const pricingRows = [
  ["Business Central", "Essentials", "£61.50", "Finance and cashiering teams (usual choice)"],
  ["Business Central", "Premium", "£84.60", "Adds manufacturing and service management; rarely needed"],
  ["Business Central", "Team Members", "£6.20", "Fee earners entering time, approving and viewing; cannot post transactions"],
  ["Dynamics 365 Sales", "Professional", "£50.00", "Smaller BD teams; limited customisation, no Copilot"],
  ["Dynamics 365 Sales", "Enterprise", "£80.70", "Onboarding and conflict workflows, Copilot (usual choice)"],
  ["Dynamics 365 Sales", "Premium", "£115.30", "Relationship analytics and full Sales Insights"],
  ["Project Operations", "Standard", "£103.80", "Matter budgeting and resource scheduling in larger firms"],
];

const reasons = [
  { icon: "bi-people", title: "Sized for your firm", text: "built for UK firms with 10 to 150 fee earners: too complex for spreadsheets, too small for multi-year enterprise legal programmes. Delivered in phases." },
  { icon: "bi-signpost-split", title: "Legal process first", text: "we design around how you win work, open matters and handle client money, not a generic sales pipeline." },
  { icon: "bi-check2-circle", title: "One clear recommendation", text: "Sales, Business Central or both, with reasons, including when a specialist legal product fits better." },
  { icon: "bi-patch-check", title: "Certified and secure", text: <><Link href="/our-services/dynamics-365-consultant/" className="u-i">Microsoft-certified consultants</Link> across CRM, ERP, Power Platform and Copilot; ISO 27001:2022 certified for information security.</> },
  { icon: "bi-geo-alt", title: "UK data residency and support", text: "deployment planning covers Microsoft's UK cloud regions, applicable data residency commitments and who can access sensitive client information, with support after go-live." },
];

const proofStats = [
  { value: "£32,000+", label: "of legacy system costs removed" },
  { value: "162%", label: "projected ROI over three years, with payback in year one" },
  { value: "1.5", label: "full-time hires avoided" },
];

const ModalCta = ({ children, className = "" }) => (
  <Link
    href="#exampleModal"
    data-bs-toggle="modal"
    className={`btn-get-started scrollto ${className}`}>
    <span>{children} &nbsp;<i className="bi bi-arrow-right" aria-hidden="true"></i></span>
  </Link>
);

const LegalServices = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Legal Services | Dynamics Square UK"
        description="Simplify legal operations with Dynamics 365 for legal services. Improve client management, automate processes and enhance productivity with Dynamics Square UK."
        image="/img/professional-services-01.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 for Legal Services</h1>
                <p>Dynamics 365 for Legal Services gives law firms one Microsoft platform for client relationships, matter finances and firm reporting, inside the Outlook and Teams your fee earners already use. Dynamics Square configures it around how your firm wins, opens and bills a matter.</p>
                <div className={`text-center ${styles['ls-hero-cta']}`}>
                  <ModalCta>Talk to a Legal Sector Specialist</ModalCta>
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
                  alt="Two professionals reviewing client work on a laptop in an office"
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
              <div className={`partner-trust-strip__stats ${styles['ls-glance']}`}>
                <div className="partner-trust-strip__item">
                  <p className={styles['ls-glance__num']}>500+</p>
                  <p>Innovative Implementations</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['ls-glance__num']}>150+</p>
                  <p>Certified Professionals</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['ls-glance__num']}>14+</p>
                  <p>Years of Experience</p>
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
                <h2>Microsoft Dynamics 365 for Law Firms</h2>
              </div>
              <p>One record for every client, enquiry and matter. Dynamics 365 provides finance, CRM and workflow; Dynamics Square adds the legal layer.</p>
              <p className={styles['ls-callout']}><b>Why it matters:</b> a firm opening 120 matters a month runs 120 rounds of ID, source-of-funds and conflict checks. One stuck in an inbox while funds arrive is the gap the SRA&apos;s 2025-26 AML report flagged: no automated stop when due diligence is incomplete.</p>
              <p className={styles['ls-lead']}><b>Dynamics Square recommends two Microsoft Dynamics 365 solutions for law firms. Start with one; add the other as you grow.</b></p>
            </div>
          </div>
          <div className="row g-4">
            {solutions.map((solution) => (
              <div className="col-lg-6 d-flex" key={solution.title}>
                <div className={`erp-expect-card ${styles['ls-solution']}`}>
                  <div className="erp-expect-card__head">
                    <Image src={solution.icon} alt="" width={48} height={48} />
                    <h3 className={styles['ls-card-title']}><Link href={solution.href}>{solution.title}</Link></h3>
                  </div>
                  <p>{solution.text}</p>
                  <p className={styles['ls-best-for']}><b>Best for:</b> {solution.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Dynamics 365 is not a packaged practice management system. It connects to your case and document management tools, so client and matter data is entered once and stays consistent across fee earners, finance and BD.</p>
              <ModalCta>Find the Right Platform for Your Firm</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="uk-reg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What UK Regulation Asks of Your Records</h2>
              </div>
              <p>Four areas of regulation shape the records a UK law firm must keep and how quickly it must produce them. Your system organises the evidence; it does not replace your COFA, your policies or legal advice.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            {rules.map((rule) => (
              <div className="uk-reg-row" key={rule.title}>
                <div className={`uk-reg-row__icon ${styles['ls-icon']}`}>
                  <i className={`bi ${rule.icon}`} aria-hidden="true"></i>
                </div>
                <div className="uk-reg-row__title">
                  <h3 className={styles['ls-reg-title']}>{rule.title}</h3>
                </div>
                <div className={`uk-reg-row__desc ${styles['ls-reg-desc']}`}>
                  <p>{rule.text}</p>
                  <p><b>How Dynamics 365 helps:</b> {rule.help}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles['ls-note']}>For information only, not legal advice. Last reviewed November 2026.</p>
        </div>
      </section>

      <section className='solution-new-banner-three pd-con-63 pharma-purple-bg'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head pharma-sub-head-light'>
                <h2>Core Capabilities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['ls-key']}><b>Standard</b> = included in the licence · <b>Configured</b> = set up with built-in tools and <Link href="/products/microsoft-power-platform/" className="md-light-link">Power Platform</Link> · <b>Custom</b> = built by Dynamics Square for your firm · <b>Integration</b> = connects to another system</p>
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
                        <div className={`pharma-capability-items ${styles['ls-cap-items']}`}>
                          {cap.items.map((item) => (
                            <div className="pharma-capability-item" key={item.icon}>
                              <span className={styles['ls-cap-icon']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
                              <p><b>{item.lead}</b> {item.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['ls-cap-note']}>Client account functions are custom-built by Dynamics Square, not supplied by an off-the-shelf legal accounting extension. They are designed against the SRA Accounts Rules and your client money procedures, run in parallel with your current reconciliations, and reviewed by your COFA and reporting accountant before go-live.</p>
              <ModalCta>Talk to Us About Your Practice</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="erp-expect-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Copilot and AI Agents for Law Firms</h2>
              </div>
              <p className={styles['ls-lead']}>88% of UK and Ireland legal professionals use AI; only 27% have embedded it in daily work (Clio, 2026). Close the gap by connecting AI to your own client and matter data inside your Microsoft 365 tenant, with permissions set up correctly first.</p>
            </div>
          </div>
          <div className="row g-4">
            {copilotItems.map((item) => (
              <div className="col-md-6 d-flex" key={item.icon}>
                <div className={`erp-expect-card ${styles['ls-copilot-card']}`}>
                  <span className={styles['ls-cap-icon']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
                  <p><b>{item.lead}</b> {item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['ls-cta-gap']}>
            <ModalCta>See Copilot for Law Firms in Action</ModalCta>
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>ERP or CRM for Law Firms?</h2>
              </div>
              <p>An ERP runs money and matters; a CRM wins and keeps clients. Start where the pain is greatest.</p>
            </div>
          </div>
          <div className="row g-4">
            {chooseCards.map((card, i) => (
              <div className="col-lg-6 d-flex" key={card.title}>
                <div className={`pharma-compare-card ${i === 1 ? 'pharma-compare-card--alt' : ''}`}>
                  <h3 className={styles['ls-compare-title']}>{card.title}</h3>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}><i className="bi bi-check" aria-hidden="true"></i><span>{point}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="pharma-compare-table">
            <div className="table-responsive">
              <table className={`table table-striped ${styles['ls-table']}`}>
                <thead>
                  <tr>
                    <td></td>
                    <th scope="col">Business Central (ERP)</th>
                    <th scope="col">Dynamics 365 Sales (CRM)</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map(([label, erp, crm]) => (
                    <tr key={label}>
                      <th scope="row">{label}</th>
                      <td>{erp}</td>
                      <td>{crm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Larger firms can add <Link href="/products/dynamics-365-project-operations/" className="u-i">Project Operations</Link> for resource planning. Case, document, ID verification and e-signature tools connect through integrations.</p>
              <ModalCta>Get a Platform Recommendation</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row gy-5 gx-lg-5">
            <div className="col-lg-6">
              <div className="supprt-header-new-one">
                <h2>Which Legal CRM Software Suits UK Law Firms?</h2>
                <p><b>Legal CRM software</b> manages clients, relationships and business development. <b>Legal practice management software</b> packages matters, documents, time, billing and client accounts in one product.</p>
                <p>Choose a packaged practice management system if you&apos;ll work its way. Choose Dynamics 365 if you run on Microsoft 365 and want CRM and finance shaped around your own intake, fees and reporting.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles['ls-questions']}>
                <p><b>Five questions to ask any legal CRM vendor:</b></p>
                <ol>
                  {vendorQuestions.map((question) => <li key={question}>{question}</li>)}
                </ol>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className={styles['ls-fit']}>We review your enquiry volumes, onboarding steps, billing models and existing systems first, and tell you if Dynamics 365 is not the right fit.</p>
              <ModalCta>Book Your Free Fit Assessment</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>Dynamics 365 Implementation for Law Firms</h2>
                <p>Delivered with Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link>. Early workshops settle two rules that shape everything else: how an enquiry becomes a matter, and how client money is recorded.</p>
              </div>
            </div>
          </div>
          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>
            {approachSteps.map((step, i) => {
              const left = i % 2 === 0;
              const card = (
                <div className={`pharma-timeline__card pharma-timeline__card--${left ? 'left' : 'right'}`}>
                  <p><b>{step.lead}</b> {step.text}</p>
                </div>
              );
              return (
                <div className="pharma-timeline__row" key={step.lead}>
                  {left ? card : <div className="pharma-timeline__spacer"></div>}
                  <div className="pharma-timeline__dot"><i className={`bi ${step.icon}`} aria-hidden="true"></i></div>
                  {left ? <div className="pharma-timeline__spacer"></div> : card}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pharma-pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 for Law Firms Pricing (UK)</h2>
              </div>
              <p><Link href="/tools/microsoft-dynamics-licensing-calculator/" className="u-i">Microsoft UK list prices</Link>, November 2026, per user per month, billed annually, excluding VAT. Paying monthly on an annual term adds about 5%. Most firms keep costs down by giving full licences only to finance, BD and partners, and Team Members licences to everyone else.</p>
            </div>
          </div>
          <div className="pharma-compare-table">
            <div className="table-responsive">
              <table className={`table table-striped ${styles['ls-table']}`}>
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Plan</th>
                    <th scope="col">From</th>
                    <th scope="col">Best for</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map(([product, plan, price, bestFor]) => (
                    <tr key={`${product} ${plan}`}>
                      <th scope="row">{product}</th>
                      <td>{plan}</td>
                      <td className={styles['ls-price']}>{price}</td>
                      <td>{bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <ul className={styles['ls-price-notes']}>
                <li>Fee earners needing CRM access require a separate Dynamics 365 Team Members licence; Copilot Studio agents use Copilot Credits.</li>
                <li><b>Example:</b> 5 Business Central Essentials, 30 Team Members and 10 Sales Enterprise users cost about £1,300 a month (£15,606 a year) before VAT. <Link href="/tools/erp-implementation-cost-calculator/" className="u-i">Implementation is priced separately</Link> and depends mainly on data migration, the number of integrations and how many offices or entities you run.</li>
              </ul>
              <p className={styles['ls-licensing-note']}>Licensing note: the example assumes fee earners use Business Central Team Members only for permitted activities such as entering time sheets, approvals and viewing data. Fee earners who also need Dynamics 365 Sales need separate licensing. Final assignments are checked against Microsoft&apos;s current use rights.</p>
              <ModalCta>Get a Custom Quote</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one mb-4">
                <h2>Why UK Law Firms Choose Dynamics Square</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {reasons.map((reason, i) => (
              <div className={`${i < 3 ? 'col-lg-4' : 'col-lg-6'} ${i === 4 ? 'col-md-12' : 'col-md-6'} d-flex`} key={reason.title}>
                <div className={`erp-expect-card ${styles['ls-reason']}`}>
                  <span className={styles['ls-cap-icon']}><i className={`bi ${reason.icon}`} aria-hidden="true"></i></span>
                  <p><b>{reason.title}:</b> {reason.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['ls-proof']}>
            <div>
              <Image
                src="/img/case-study-logos/a-perry-group-logo.png"
                alt="A Perry Group logo"
                width={175}
                height={48}
                className={styles['ls-proof__logo']}
              />
              <h3>Proof: Business Central and Sales, Delivered Together</h3>
              <p>A Perry Group, a UK manufacturer and distributor, replaced its legacy system with Business Central, Dynamics 365 Sales and Customer Insights – Journeys, including approval workflows and multi-entity consolidation.</p>
            </div>
            <ul>
              {proofStats.map((stat) => (
                <li key={stat.value}><span className={styles['ls-proof__num']}>{stat.value}</span> <span>{stat.label}</span></li>
              ))}
            </ul>
            <div>
              <p>The project shows our experience delivering Business Central and Dynamics 365 Sales together. Legal workflows such as matter accounting and client money management need additional configuration and validation.</p>
              <Link href="/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/" className="btn-get-started scrollto">
                <span>Read the case study &nbsp;<i className="bi bi-arrow-right" aria-hidden="true"></i></span>
              </Link>
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
    </>
  );
};

export default LegalServices;
