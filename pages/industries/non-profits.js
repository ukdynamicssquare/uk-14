import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import np from "../../styles/nonProfits.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Dynamics 365 for Nonprofits & Charities UK";
const PAGE_DESC = "Dynamics Square UK implements Dynamics 365 for nonprofits and charities to manage restricted funds, grants, donors, volunteers and trustee reporting.";

const outcomes = [
  { icon: "bi-graph-up-arrow", title: "Improve financial visibility:", text: "Monitor income, expenditure, budgets and financial performance across your organisation." },
  { icon: "bi-safe", title: "Manage restricted funds:", text: "Track funding allocations and expenditure against specific projects and funding conditions." },
  { icon: "bi-heart", title: "Strengthen donor relationships:", text: "Maintain supporter records, communication history and fundraising information." },
  { icon: "bi-people", title: "Improve resource management:", text: "Coordinate staff, volunteers and resources across different programmes." },
  { icon: "bi-file-earmark-bar-graph", title: "Simplify reporting:", text: "Bring relevant operational and financial information together for management and trustee reporting." },
  { icon: "bi-lightning-charge", title: "Automate routine processes:", text: <>Reduce repetitive administrative work through <Link href="/products/microsoft-power-automate/">Power Automate</Link> and customised workflows.</> },
];

const capabilities = [
  { icon: "/img/icon-non-profit-functionality.svg", title: "1. Unified Data and Reporting", text: <>Bring relevant information from finance, fundraising, donor management and programme activities into a more connected view. Use <Link href="/products/microsoft-power-bi/">Power BI dashboards</Link> to monitor key figures, identify trends and support informed decisions.</> },
  { icon: "/img/icon-non-profit-member-management.svg", title: "2. Improved Team Collaboration", text: "Help employees, volunteers and stakeholders work together using Microsoft 365, Teams and connected business applications. Share documents, coordinate activities and keep relevant teams informed across projects and programmes." },
  { icon: "/img/icon-non-profit-case-management.svg", title: "3. Secure Access to Business Information", text: <>Access business information through <Link href="/industries/microsoft-cloud-for-nonprofit/">cloud-based Microsoft applications</Link>, subject to configured user permissions and security policies. Give authorised employees access to the information they need while maintaining appropriate controls over sensitive organisational data.</> },
  { icon: "/img/icon-non-profit-finance.svg", title: "4. Fund and Financial Management", text: <>Use <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link> to manage accounting, budgets, income, expenditure, purchasing and financial reporting. Configure dimensions and reporting structures to monitor project-related costs and funding allocations.</> },
  { icon: "/img/icon-non-profit-fund-raising.svg", title: "5. Fundraising and Donor Relationship Management", text: <>Manage donor and supporter information, communication history and fundraising activities through <Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</Link> or a suitable configured CRM solution. Connect relevant data to improve supporter visibility and campaign reporting.</> },
  { icon: "/img/icon-non-profit-volunteer-management.svg", title: "6. Staff and Volunteer Resource Management", text: "Coordinate staff responsibilities, programme resources and volunteer activities using suitable Microsoft applications and customised Power Platform solutions. Workflows can support volunteer applications, approvals, scheduling and communication." },
  { icon: "/img/icon-non-profit-project-management.svg", title: "7. Data Analytics and Performance Reporting", text: "Use Power BI to analyse financial performance, fundraising activities, project expenditure and programme outcomes. Create dashboards that help management teams and trustees understand organisational performance." },
  { icon: "/img/icon-non-profit-award-management.svg", title: "8. Grant and Award Management", text: "Configure grant management processes to record applications, funding decisions, award details, deadlines and reporting requirements. Connect grant information with financial data to improve visibility of funding allocation and expenditure." },
];

const financeUses = [
  "Monitor income, expenditure and cash flow.",
  "Track budgets across departments and projects.",
  "Record donations, grants and other income in the appropriate financial accounts.",
  "Monitor spending against approved budgets.",
  "Manage supplier invoices and payment processes.",
  "Prepare financial reports to support management and trustee reviews.",
];

const impactPoints = [
  "Improve financial administration and accounting processes.",
  "Monitor grants, project budgets and funding allocations.",
  "Maintain more organised donor and supporter records.",
  "Coordinate staff and volunteer activities.",
  "Automate repetitive administrative workflows.",
  "Use data analytics to evaluate programme performance.",
  "Improve access to relevant information for authorised teams.",
];

const faqs = [
  { id: 1, question: "How can Microsoft Dynamics 365 help non-profit organisations?", answer: "<p>Microsoft Dynamics 365 helps non-profit organisations manage financial operations, donor relationships, fundraising activities and organisational data. Combined with Power BI and Power Automate, it can support reporting, data analysis and workflow automation, helping charities improve operational efficiency.</p>" },
  { id: 2, question: "Can Microsoft Dynamics 365 manage charity donations and fundraising?", answer: "<p>Yes. Dynamics 365 Sales can be configured to manage donor records, supporter interactions, fundraising opportunities and communication history. Additional integrations or custom applications may be required for donation processing, recurring contributions and specialised fundraising workflows.</p>" },
  { id: 3, question: "How much does Microsoft Dynamics 365 implementation cost for charities in the UK?", answer: "<p>The <a href=\"/tools/erp-implementation-cost-calculator/\">implementation cost</a> depends on the Microsoft applications selected, number of users, data migration requirements, integrations, customisations and <a href=\"/our-services/dynamics-365-training/\">training</a>. A smaller implementation may require less configuration, while complex charity operations can involve additional development and integration. Dynamics Square UK can assess your requirements and provide a tailored estimate.</p>" },
  { id: 4, question: "Can Microsoft Dynamics 365 manage restricted funds and grant management for charities?", answer: "<p>Yes. Business Central can be configured to track financial transactions, budgets and expenditure against different funds, projects and funding sources. Grant applications, award tracking, deadlines and reporting can also be managed through suitable Microsoft applications or customised solutions.</p>" },
  { id: 5, question: "How can Dynamics Square UK help charities implement Microsoft Dynamics 365?", answer: "<p>Dynamics Square UK helps charities and non-profit organisations implement Microsoft Dynamics 365, Business Central and Power Platform solutions based on their operational requirements. From financial management and donor relationship management to reporting, data migration, <a href=\"/products/microsoft-dynamics-365/integration/\">system integration</a> and <a href=\"/our-services/dynamics-365-support-services/\">ongoing support</a>, our consultants help organisations build connected business systems. Contact Dynamics Square UK to discuss your charity's requirements and explore a suitable implementation approach.</p>" },
];

const sections = [
  { id: "why-dynamics-365", label: "Why Dynamics 365?" },
  { id: "capabilities", label: "Capabilities" },
  { id: "financial-visibility", label: "Financial Visibility" },
  { id: "charity-impact", label: "Charity Impact" },
  { id: "faqs", label: "FAQs" },
];

const ModalBtn = ({ label }) => (
  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
    <span>{label} &nbsp;<i className="bi bi-arrow-right"></i></span>
  </Link>
);

const NonProfits = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="https://www.dynamicssquare.co.uk/img/Dynamics-non-profit-Banner.png"
        imageAlt="Microsoft Dynamics 365 for nonprofits and charities"
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
            <span>Dynamics 365 for Nonprofits</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics 365 for Nonprofits and Charities</h1>
              <p className={styles.heroLead}>Manage charity operations, improve financial visibility and strengthen relationships with donors and volunteers using Microsoft business applications. As a trusted Microsoft partner, Dynamics Square UK helps non-profit organisations implement and customise Dynamics 365 solutions to support fundraising, finance, reporting and day-to-day operations.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <ModalBtn label="Talk to a Nonprofit Solutions Consultant" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/Dynamics-non-profit-Banner.png" alt="Charity volunteer delivering food and medicine supplies" width={790} height={470} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} showCta={false} />

      {/* ===== Why Dynamics 365 ===== */}
      <section id="why-dynamics-365" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Implement Microsoft Dynamics 365 for Nonprofits?</h2>
              <p className={styles.lead}>Charities and non-profit organisations need to manage limited budgets, funding commitments, donor relationships and operational responsibilities while staying focused on their mission. Disconnected systems and manual processes can make it difficult to maintain accurate records, monitor expenditure and report on organisational performance.</p>
              <p><Link href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</Link> and <Link href="/products/microsoft-power-platform/">Power Platform</Link> provide flexible business applications that can be configured around these requirements. Depending on the organisation&apos;s needs, they can help charities manage financial operations, supporter information, funding activities and reporting through connected systems.</p>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/non-profit side.png" alt="Charity volunteer holding a box of medicine" width={553} height={548} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
          <p className={`${styles.processIntro} mt-5`}>With the right implementation, your organisation can:</p>
          <ul className={np.outcomes}>
            {outcomes.map((o) => (
              <li key={o.title}>
                <i className={`bi ${o.icon}`}></i>
                <span><strong>{o.title}</strong>{o.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Consultant CTA ===== */}
      <section className={`${styles.block} pt-0`}>
        <div className="container">
          <div className={np.consult}>
            <div className={np.consultPhoto}>
              <Image src="/img/MaskGroup8.png" alt="Dynamics Square nonprofit solutions consultant" width={339} height={483} sizes="(max-width: 991px) 220px, 240px" />
            </div>
            <div className={np.consultBody}>
              <h2>Speak to a Nonprofit ERP or CRM Consultant</h2>
              <p>Every charity has different operational and funding requirements. Whether you need better financial control, improved donor relationship management or connected reporting, our consultants can help identify the right Microsoft solution for your organisation.</p>
              <p>Discuss your requirements with Dynamics Square UK and explore an implementation approach aligned with your charity&apos;s objectives.</p>
              <ModalBtn label="Schedule a Consultation" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section id="capabilities" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={`${styles.h2} ${styles.h2Light}`}>Microsoft Dynamics 365 and Power Platform Capabilities for Nonprofits</h2>
              <p className={`${styles.lead} ${np.capLead}`}>Use Microsoft business applications to connect financial, fundraising, operational and programme-related information. The capabilities below can be delivered through suitable Microsoft products, integrations and customised solutions, depending on your requirements.</p>
            </div>
          </div>
          <div className={np.capGrid}>
            {capabilities.map((c) => (
              <article className={np.capItem} key={c.title}>
                <span className={np.capIcon}><Image src={c.icon} alt="" width={34} height={34} /></span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Financial visibility ===== */}
      <section id="financial-visibility" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/Business-Central-FInance-Mangment.png" alt="Dynamics 365 Business Central finance dashboard on a laptop" width={718} height={447} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Improve Financial Visibility with Microsoft Dynamics 365 for Nonprofits</h2>
              <p className={styles.lead}>Managing cash flow and funding commitments is essential for charities working with limited financial resources. Microsoft Dynamics 365 Business Central helps non-profit organisations manage accounting, budgets, payments, purchasing and financial reporting in one connected ERP system.</p>
              <div className={np.checkPanel}>
                <p className={np.panelTitle}>Your organisation can use it to:</p>
                <ul className={styles.capList}>
                  {financeUses.map((u) => <li key={u}>{u}</li>)}
                </ul>
              </div>
              <p>With suitable configuration and reporting, your charity can gain better visibility of its financial position and make more informed decisions about resource allocation.</p>
              <div className={`mt-4 ${styles.heroActions} ${styles.heroActionsLeft}`}>
                <ModalBtn label="Schedule a Demo Today" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Charity impact ===== */}
      <section id="charity-impact" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Use Technology to Increase Your Charity&apos;s Impact</h2>
              <p className={styles.lead}>Charities often operate with limited budgets, staff and resources while managing multiple programmes, funding commitments and stakeholder expectations. Manual administration and disconnected systems can make these responsibilities more difficult.</p>
              <p>Microsoft business applications can help simplify these processes by connecting financial information, operational workflows and organisational reporting.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Dynamics Square UK helps charities assess their requirements, select suitable Microsoft applications and implement solutions that support their operational objectives.</p>
              <div className={`mt-4 ${styles.heroActions} ${styles.heroActionsLeft}`}>
                <ModalBtn label="Discuss Your Nonprofit Requirements" />
              </div>
            </div>
            <div className="col-lg-6">
              <p className={np.impactTitle}>With the right Microsoft technology, your organisation can:</p>
              <ol className={np.impactList}>
                {impactPoints.map((p) => <li key={p}>{p}</li>)}
              </ol>
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
                <h2 className={styles.h2}>Frequently Asked Questions</h2>
                <div className="mt-3">
                  <ModalBtn label="Talk to a Nonprofit Solutions Consultant" />
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Final CTA ===== */}
      <section className={styles.finalWrap}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h2>Find the Right Microsoft Solution for Your Charity</h2>
              <p>Every non-profit organisation has different financial, operational and reporting requirements. Speak to Dynamics Square UK to understand how Microsoft Dynamics 365, Business Central and Power Platform can support your organisation.</p>
            </div>
            <div className={styles.finalAction}>
              <ModalBtn label="Speak to Our Microsoft Consultants" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NonProfits;
