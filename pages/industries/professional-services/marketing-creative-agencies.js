import React from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesmarketingagencies.json';
import PageSeo from "../../../components/PageSeo";
import styles from "../../../styles/dynamics-365-for-services-industries.module.css";

const solutions = [
  {
    title: "Dynamics 365 Sales",
    href: "/products/microsoft-dynamics-365-sales/",
    icon: "/img/menu-icons/dynamics-365-sales.svg",
    text: ["Use Sales to manage new business enquiries, pitches, client accounts and retainer renewals. Account teams can connect client records with Outlook and Teams activity, giving colleagues a clearer view of conversations, follow-ups and opportunities."],
    bestFor: "New business directors, account directors and agency leadership who need better visibility of the sales pipeline and existing client relationships.",
  },
  {
    title: "Dynamics 365 Business Central",
    href: "/products/dynamics-365-business-central/",
    icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
    text: ["Business Central brings together agency finance and operational control. It supports project budgets, resource capacity, timesheets, purchase orders, project billing and financial reporting."],
    bestFor: "Independent and growing agencies that want a clearer view of job costs, work in progress (WIP), supplier expenses and project profitability.",
  },
  {
    title: "Dynamics 365 Project Operations",
    href: "/products/dynamics-365-project-operations/",
    icon: "/img/menu-icons/dynamics-365-project-management.svg",
    text: [
      "Project Operations supports more involved project and resource management. Its capabilities include estimates, resource requests by skill and role, scheduling, time and expense tracking, and project contract billing.",
      <>The deployment model matters. Project Operations Core supports proforma invoicing and sends invoice proposals to an external finance system. It does not generate customer-facing invoices itself. The Integrated with ERP deployment connects project delivery with <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link> for financial processing and customer invoicing.</>,
    ],
    bestFor: "Larger, multi-office or multi-discipline agencies with complex resource planning and project billing requirements.",
  },
];

const rules = [
  {
    icon: "bi-person-workspace",
    title: "Freelancers and Off-Payroll Working (IR35)",
    text: [
      "Agencies engaging freelance designers, developers and copywriters through limited companies should check whether the off-payroll working rules apply.",
      "For private-sector engagements, medium and large clients generally determine employment status. A company qualifies as small if it meets at least two of these conditions: turnover of no more than £15 million, a balance-sheet total of no more than £7.5 million, and no more than 50 employees on average. The revised thresholds apply from 6 April 2025, but HMRC confirms they will have no practical effect on off-payroll working until 6 April 2027 at the earliest.",
      "Where the rules apply, the client issues a reasoned Status Determination Statement (SDS). The deemed employer, usually the qualifying fee-payer, handles PAYE and relevant National Insurance contributions.",
    ],
    help: <>Contractor records can hold status decisions and supporting documents. A configured <Link href="/products/microsoft-power-automate/" className="u-i">Power Automate</Link> workflow can flag missing assessments before a booking proceeds.</>,
  },
  {
    icon: "bi-envelope-check",
    title: "Marketing Consent: UK GDPR and PECR",
    text: [
      "Agencies running email and SMS campaigns must follow UK GDPR and PECR. Since 5 February 2026, the ICO can impose PECR fines of up to £17.5 million or 4% of global turnover, whichever is higher.",
      "Consent requirements depend on the recipient. Corporate subscribers are treated differently from individuals, including sole traders. The soft opt-in has specific conditions, and agencies must establish whether they act as a controller or processor for each campaign.",
    ],
    help: "Customer Insights – Journeys records contact-point consent and suppression preferences, helping campaign teams manage opt-outs by channel. It does not determine whether a campaign is legally permitted.",
  },
  {
    icon: "bi-receipt-cutoff",
    title: "Making Tax Digital for VAT",
    text: ["VAT-registered agencies must keep digital records and submit VAT returns through compatible software."],
    help: "Business Central supports digital VAT records and VAT return submissions to HMRC. The VAT treatment of media, freelance and production costs still needs to be established correctly. A cost recharged to a client is not automatically a disbursement.",
  },
  {
    icon: "bi-calendar-x",
    title: "Late Payment",
    text: ["The Commercial Payments Bill, introduced in May 2026, proposes measures to address late payments, including restrictions on payment terms in certain commercial contracts. It is proposed legislation, not a current legal requirement. Agencies should check its progress before relying on any proposed payment-term limits."],
    help: "Aged debt by client and configured payment reminders help finance teams identify overdue retainers and outstanding invoices.",
  },
];

const capabilities = [
  {
    title: "New Business and Client Management",
    items: [
      { icon: "bi-funnel", lead: "Pitch pipeline (Standard):", text: "Track briefs by service, value, stage and probability to give agency leadership a clearer sales forecast." },
      { icon: "bi-journal-text", lead: "Account plans (Configured):", text: "Record retainer renewal dates, key client contacts and growth opportunities within each account." },
      { icon: "bi-clock-history", lead: "Relationship history (Standard):", text: "Track Outlook emails and meetings against client records. Automatic capture depends on configuration and user settings; it does not mean every email is logged without user involvement." },
      { icon: "bi-megaphone", lead: "Agency newsletters and events (Separate licence):", text: <><Link href="/products/microsoft-dynamics-365-marketing/" className="u-i">Customer Insights – Journeys</Link> supports campaign creation and contact-point consent management under its own licensing and capacity model.</> },
    ],
  },
  {
    title: "Creative Jobs, Resources and Time",
    items: [
      { icon: "bi-folder-plus", lead: "Job set-up from the won pitch (Configured):", text: "Carry approved budgets, project phases, rate cards and team details into job records through configuration or integration." },
      { icon: "bi-people", lead: "Resource planning:", text: "Business Central provides resource capacity and availability. Project Operations supports resource requests and booking by skills and roles. The appropriate product depends on how the agency allocates its people." },
      { icon: "bi-stopwatch", lead: "Timesheets (Standard):", text: "Record and approve weekly time against projects, subject to the permitted activities of each user's licence." },
      { icon: "bi-arrow-repeat", lead: "Change requests (Configured):", text: "Record additional rounds of amends and changes to the original brief, with approval before extra work begins." },
    ],
  },
  {
    title: "Project Budgets, Billing and Profitability",
    items: [
      { icon: "bi-speedometer2", lead: "Budget against actual (Standard; alerts Configured):", text: "Track hours and costs against each project phase. Configure alerts when a job reaches an agreed threshold, such as 80% of its budget." },
      { icon: "bi-receipt", lead: "Project billing:", text: "Business Central supports project billing options such as fixed price and time and materials. Retainers and other specific billing arrangements need to be configured to match agency contracts." },
      { icon: "bi-cart-check", lead: "Third-party costs (Configured):", text: "Link freelance, print, production and media purchase orders to jobs. Mark-up, recharge and approval rules should reflect the agency's commercial arrangements." },
      { icon: "bi-bar-chart-line", lead: <><Link href="/products/microsoft-power-bi/">Power BI dashboards</Link> (Configured):</>, text: "Report on margin by client and job, utilisation against target and revenue per head, using an agreed reporting model." },
    ],
  },
];

const copilotItems = [
  { icon: "bi-chat-square-text", lead: <><Link href="/products/microsoft-dynamics-365-sales/copilot/">Copilot in Sales</Link>:</>, text: "Sales Enterprise includes eligible Copilot capabilities, subject to product terms and configuration. Account teams can use AI assistance for meeting preparation, summaries and follow-up work." },
  { icon: "bi-person-check", lead: "Sales Qualification Agent:", text: "Microsoft's agent for researching and qualifying inbound enquiries uses Copilot Credits. Check availability, tenant requirements and consumption before including it in a deployment." },
  { icon: "bi-robot", lead: "Project Operations agents (Production-ready preview):", text: "The Time Entry, Expense and Approvals agents assist with administrative tasks. They require supported environments, the appropriate Project Operations version and administrator enablement. They should not be described as generally available." },
  { icon: "bi-file-earmark-text", lead: "Payables Agent in Business Central (Generally available):", text: "Processes supplier PDF invoices and prepares draft purchase documents. Optional purchase-order matching can be configured. Finance staff still need to review supplier details, invoice lines, job allocation and matching results before posting." },
  { icon: "bi-shield-check", lead: "Governed AI (Configured):", text: "Access follows the permissions and security roles assigned to each user. Agent outputs and draft documents should pass through the agency's approval process before they are used or posted." },
];

const compareRows = [
  ["Main purpose", "Win and grow clients", "Jobs, time, billing and finance", "Project delivery and resource management"],
  ["Typical users", "New business and account directors", "Finance, producers and traffic managers", "Resource managers, producers and delivery teams"],
  ["Resource planning", "Not provided", "Capacity by resource", "Requests and booking by skill and role"],
  ["Billing", "Quotes and sales orders", "Fixed fee, time and materials, project billing", "Project and contract billing, including not-to-exceed limits"],
  ["UK list price from", "£50.00/user/month", "£61.50/user/month", "£103.80/user/month"],
];

const approachSteps = [
  { icon: "bi-search", lead: "Discover:", text: "Follow one job from brief to final invoice and identify every system and manual process involved. Output: process map and gap list." },
  { icon: "bi-flag", lead: "Initiate:", text: "Confirm the products, scope and ownership of client, rate card and job data. Output: scope, data owners and project plan." },
  { icon: "bi-gear", lead: "Implement:", text: "Configure the pipeline, job templates, rate cards, mark-up rules and approvals. Connect Outlook and Teams, and migrate agreed client records, live jobs and balances. Output: tested system with migrated data." },
  { icon: "bi-mortarboard", lead: "Prepare:", text: "Train account, creative, production and finance teams. Run timesheets and billing in parallel until the results match. Output: go-live sign-off from finance." },
  { icon: "bi-arrow-repeat", lead: "Operate:", text: <><Link href="/our-services/dynamics-365-support-services/" className="u-i">Provide support</Link> and help the system adapt as the agency adds services, offices or acquisitions.</> },
];

const pricingRows = [
  ["Business Central", "Essentials", "£61.50", "Finance, producers and traffic managers"],
  ["Business Central", "Team Members", "£6.20", "Users with permitted limited access, such as viewing, eligible time entry and approvals"],
  ["Dynamics 365 Sales", "Professional", "£50.00", "Smaller new business teams"],
  ["Dynamics 365 Sales", "Enterprise", "£80.70", "Account planning and eligible advanced sales features"],
  ["Project Operations", "Standard", "£103.80", "Larger, multi-office agencies"],
];

const reasons = [
  { icon: "bi-diagram-3", lead: "A solution built around your workflow:", text: "We assess how your agency wins work, manages projects, allocates resources and invoices clients before recommending a platform." },
  { icon: "bi-receipt", lead: "Job-to-invoice focus:", text: "We design around the way you estimate, staff, change and bill work, rather than simply moving existing spreadsheets into a new system." },
  { icon: "bi-check2-circle", lead: "A clear product recommendation:", text: "We assess Sales, Business Central, Project Operations or a combination, including whether a dedicated agency tool would be a better fit." },
  { icon: "bi-patch-check", lead: "Certified and secure delivery:", text: <>Our team brings <Link href="/our-services/dynamics-365-consultant/" className="u-i">certified expertise</Link> across Microsoft business applications and related technologies. Dynamics Square is ISO 27001:2022 certified.</> },
  { icon: "bi-people", lead: "Experienced team:", text: "150+ Certified Professionals, 14+ Years of Experience and 500+ Clients Worldwide." },
];

const ModalCta = ({ children, className = "" }) => (
  <Link
    href="#exampleModal"
    data-bs-toggle="modal"
    className={`btn-get-started scrollto ${className}`}>
    <span>{children} &nbsp;<i className="bi bi-arrow-right" aria-hidden="true"></i></span>
  </Link>
);

const DataTable = ({ head, rows }) => (
  <div className="pharma-compare-table">
    <div className="table-responsive">
      <table className={`table table-striped ${styles['si-table']} ${styles['si-table--wide']}`}>
        <thead>
          <tr>
            {head.map((label) => <th scope="col" key={label}>{label}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...cells]) => (
            <tr key={`${label} ${cells[0]}`}>
              <th scope="row">{label}</th>
              {cells.map((cell, i) => <td key={i}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const MarketingCreativeAgencies = () => {

  useCardScrollEffect()

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Marketing & Creative Agencies | Dynamics Square UK"
        description="Dynamics 365 for UK marketing and creative agencies. Connect pitches, job budgets, resource planning, timesheets and billing with Sales and Business Central."
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
                <h1 className='large-heading'>Dynamics 365 for Marketing and Creative Agencies</h1>
                <p>Win more client work, keep projects on budget, and make sure the work you deliver is invoiced correctly. Microsoft Dynamics 365 connects agency sales, project delivery, and finance, with a solution configured around the way your business operates.</p>
                <div className={`text-center ${styles['si-hero-cta']}`}>
                  <ModalCta>Talk to an Agency Specialist</ModalCta>
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
                  alt="Two colleagues reviewing client work on a laptop in an office"
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
              <div className={`partner-trust-strip__stats ${styles['si-glance']}`}>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>500+</p>
                  <p>Clients Worldwide</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>150+</p>
                  <p>Certified Professionals</p>
                </div>
                <div className="partner-trust-strip__item">
                  <p className={styles['si-glance__num']}>14+</p>
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
                  <h2>What is Dynamics 365 for marketing and creative agencies?</h2>
              </div>
               <p><Link href="/products/microsoft-dynamics-365/" className="u-i">Microsoft Dynamics 365</Link> can support agency management by connecting client relationships with project delivery and financial control. Dynamics 365 Sales manages new business and client accounts, while Business Central or Project Operations supports job budgets, resource planning, timesheets and billing.</p>
              <p className="mb-0">The right combination depends on your agency&apos;s size, delivery model and financial processes.</p>
              <p>An agency sells hours, ideas and media. Profit can disappear through small gaps in the process: an extra round of amends nobody records, a freelancer booked outside the agreed budget or a media invoice passed on without the correct mark-up.</p>
              <p>Connecting sales, project delivery and finance helps agencies identify these issues before they affect project margins.</p>
              <p className={styles['si-callout']}><b>Why it matters:</b> Consider a 40-person agency running 30 client jobs at once. If each job absorbs 10 unbilled hours a month at an £85 blended rate, the agency writes off £25,500 a month, or £306,000 a year. This is an illustrative calculation, not a guaranteed saving.</p>
            </div>
          </div>
          <div className="row g-4">
            {solutions.map((solution, i) => (
              <div className={`${i < 2 ? 'col-lg-6' : 'col-12'} d-flex`} key={solution.title}>
                <div className={`erp-expect-card ${styles['si-card']}`}>
                  <div className="erp-expect-card__head">
                    <Image src={solution.icon} alt="" width={48} height={48} />
                    <h3 className={styles['si-card-title']}><Link href={solution.href}>{solution.title}</Link></h3>
                  </div>
                  {solution.text.map((text, j) => <p key={j}>{text}</p>)}
                  <p className={styles['si-best-for']}><b>Best for:</b> {solution.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['si-cta-gap']}>
            <ModalCta>Find the Right Platform for Your Agency</ModalCta>
          </div>
        </div>
      </section>

      <section className="uk-reg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What UK Rules Ask of Agencies</h2>
              </div>
              <p>UK agencies need reliable records for contractor engagements, marketing consent, VAT and customer payments. Dynamics 365 can help organise relevant information and workflows, but it does not replace advice from an accountant, data protection lead or legal adviser.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            {rules.map((rule) => (
              <div className="uk-reg-row" key={rule.title}>
                <div className={`uk-reg-row__icon ${styles['si-icon']}`}>
                  <i className={`bi ${rule.icon}`} aria-hidden="true"></i>
                </div>
                <div className="uk-reg-row__title">
                  <h3 className={styles['si-reg-title']}>{rule.title}</h3>
                </div>
                <div className={`uk-reg-row__desc ${styles['si-reg-desc']}`}>
                  {rule.text.map((text) => <p key={text}>{text}</p>)}
                  <p><b>How Dynamics 365 helps:</b> {rule.help}</p>
                </div>
              </div>
            ))}
          </div>
          <p className={styles['si-note']}>For information only, not legal or tax advice. Last reviewed November 2026.</p>
        </div>
      </section>

      <section className='solution-new-banner-three pd-con-63 pharma-purple-bg'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head pharma-sub-head-light'>
                <h2>Core Capabilities</h2>
              </div>
              <p className={styles['si-on-dark']}>The following capabilities show how Dynamics 365 can support an agency&apos;s work from the initial pitch through to project reporting and invoicing. Availability depends on the selected application, licence and configuration.</p>
              <p className={styles['si-on-dark']}><b>Standard</b> = included in the relevant product · <b>Configured</b> = requires setup using built-in tools or <Link href="/products/microsoft-power-platform/" className="md-light-link">Power Platform</Link> · <b>Custom</b> = requires additional development · <b>Integration</b> = connects to another system</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={`stached-scroll-card ${styles['si-cap-cards']}`}>
                {capabilities.map((cap) => (
                  <div className='mycard' key={cap.title}>
                    <div className='mycard__inner mycard__inner--single'>
                      <div className='mycard__inner-left'>
                        <h3>{cap.title}</h3>
                        <div className={`pharma-capability-items ${styles['si-cap-items']}`}>
                          {cap.items.map((item) => (
                            <div className="pharma-capability-item" key={item.icon}>
                              <span className={styles['si-icon-box']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
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
        </div>
      </section>

      <section className="erp-expect-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Copilot and AI Agents for Agencies</h2>
              </div>
              <p className="mb-4">AI can assist with some of the administrative work that sits around agency projects, including meeting preparation, time entry, approvals and supplier invoice processing. The available features differ by product, environment and licence.</p>
            </div>
          </div>
          <div className="row g-4">
            {copilotItems.map((item, i) => (
              <div className={`${i < 3 ? 'col-lg-4' : 'col-lg-6'} ${i === 4 ? 'col-md-12' : 'col-md-6'} d-flex`} key={item.icon}>
                <div className={`erp-expect-card ${styles['si-lead']}`}>
                  <span className={styles['si-icon-box']}><i className={`bi ${item.icon}`} aria-hidden="true"></i></span>
                  <p><b>{item.lead}</b> {item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Which CRM and Agency Management Software Suits a UK Agency?</h2>
              </div>
              <p>The best starting point depends on where your agency has the greatest operational gap. Sales is focused on winning and growing client relationships. Business Central manages finance and job control, while Project Operations supports more complex project delivery and resource planning.</p>
            </div>
          </div>
          <DataTable
            head={["Requirement", "Dynamics 365 Sales", "Business Central", "Project Operations"]}
            rows={compareRows}
          />
          <div className={`pharma-compare-card ${styles['si-gap']}`}>
            <p><b>A useful starting point:</b></p>
            <ul>
              <li><i className="bi bi-check" aria-hidden="true"></i><span>Choose <b>Sales</b> when the main issue is managing pitches, client relationships and renewals.</span></li>
              <li><i className="bi bi-check" aria-hidden="true"></i><span>Choose <b>Business Central</b> when job costs, timesheets, supplier expenses and billing are difficult to manage across separate systems.</span></li>
              <li><i className="bi bi-check" aria-hidden="true"></i><span>Consider <b>Project Operations</b> when resource requests, skills-based scheduling and contract billing require more detailed control.</span></li>
            </ul>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Some agencies may need a combination of applications. Others may be better served by specialist agency management software. We assess job volumes, billing models and existing tools before recommending a platform.</p>
              <ModalCta>Get a Platform Recommendation</ModalCta>
            </div>
          </div>
        </div>
      </section>

      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>Dynamics 365 Implementation for Marketing Agencies</h2>
                <p>We follow Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link>. Early workshops focus on two important questions: how a successful pitch becomes a project, and how recorded hours and third-party costs become an invoice.</p>
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
                <h2>Dynamics 365 for Agencies Pricing (UK)</h2>
              </div>
              <p>The following are <Link href="/tools/microsoft-dynamics-licensing-calculator/" className="u-i">Microsoft UK list prices</Link> for November 2026, per user per month, billed annually and excluding VAT. The actual cost depends on the applications, licence types, user activities and implementation scope.</p>
            </div>
          </div>
          <DataTable head={["Product", "Plan", "From", "Best for"]} rows={pricingRows} />
          <div className="row">
            <div className="col-lg-9">
              <ul className={styles['si-bullets']}>
                <li>Customer Insights – Journeys for the agency&apos;s own marketing is a separate tenant-based licence with capacity limits. Check the current UK price and included capacity before preparing a quote.</li>
                <li>Copilot and agent consumption can involve Copilot Credits or other capacity charges, depending on the feature.</li>
              </ul>
              <p><b>Example:</b> A 40-person agency with 6 Business Central Essentials users, 30 Team Members and 6 Sales Enterprise users pays £1,039.20 a month (£12,470.40 a year) before VAT. This represents 42 licence assignments across 40 people because two people hold both Business Central Essentials and Sales Enterprise licences. <Link href="/tools/erp-implementation-cost-calculator/" className="u-i">Implementation is priced separately</Link>.</p>
              <p className={styles['si-note-cta']}>Licensing note: The example assumes creatives use Team Members only for permitted tasks such as viewing data, eligible time entry and approvals. Users who need full Business Central or Dynamics 365 Sales functionality require the appropriate licences. Final assignments must be checked against Microsoft&apos;s current Product Terms and licensing guidance.</p>
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
                <h2>Why UK Agencies Choose Dynamics Square</h2>
              </div>
            </div>
          </div>
          <ul className={styles['si-reasons']}>
            {reasons.map((reason) => (
              <li key={reason.lead}>
                <span className={styles['si-icon-box']}><i className={`bi ${reason.icon}`} aria-hidden="true"></i></span>
                <p><b>{reason.lead}</b> {reason.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles['si-cta-gap']}>
            <ModalCta>Talk to an Agency Specialist</ModalCta>
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

export default MarketingCreativeAgencies;
