import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "../styles/bcVsSapTwo.module.css";
import hc from "../styles/systemHealthCheck.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import PageSeo from "../components/PageSeo";

// The form pulls in emailjs and react-phone-input-2. It sits below the fold,
// so its code is only fetched once the form area is about to scroll into view.
const Form = dynamic(() => import("../components/Form"), { ssr: false });

const FORM_MIN_HEIGHT = 470;

const LazyForm = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setShow(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "400px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ minHeight: FORM_MIN_HEIGHT }}>
      {show && <Form />}
    </div>
  );
};

const PAGE_TITLE = "Dynamics 365 System Health Check | Dynamics Square UK";
const PAGE_DESC = "Book a free Dynamics 365 System Health Check for UK businesses. Review performance, customisations, data quality, integrations, upgrades and licensing needs.";

const helpPoints = [
  { icon: "bi-speedometer2", text: "Identify system performance and configuration issues." },
  { icon: "bi-diagram-3", text: "Review existing business processes and workflows." },
  { icon: "bi-ui-checks-grid", text: "Identify unused Dynamics 365 features and capabilities." },
  { icon: "bi-code-slash", text: "Assess custom code and existing integrations." },
  { icon: "bi-database-check", text: "Evaluate data quality and identify redundant records." },
  { icon: "bi-arrow-up-circle", text: "Understand upgrade and optimisation requirements." },
  { icon: "bi-person-badge", text: "Review current Microsoft licensing and storage needs." },
];

const modules = [
  {
    id: "process-review",
    icon: "bi-diagram-3",
    title: "1. Business Process and Performance Review",
    image: "/img/Dynamics-ERP-CRM-Health-Check.png",
    w: 766,
    h: 576,
    alt: "Dynamics 365 business process and performance review",
    paras: [
      "Your ERP or CRM system should support everyday business operations without creating unnecessary complexity. However, inefficient workflows, incorrect configurations and limited user adoption can affect overall productivity.",
      "Our consultants review your existing business processes to understand how different departments use Dynamics 365 and identify areas where improvements may be required.",
    ],
    listIntro: "The review can help identify:",
    list: [
      "Inefficient workflows and business processes.",
      "Gaps between existing system functionality and business requirements.",
      <><Link href="/our-services/dynamics-365-training/">User training</Link> and system adoption challenges.</>,
      "Opportunities to simplify routine business activities.",
      "Areas where configuration improvements may be beneficial.",
    ],
    closing: "Based on the findings, we provide recommendations to help align your Dynamics 365 environment with your operational requirements.",
  },
  {
    id: "feature-review",
    icon: "bi-ui-checks-grid",
    title: "2. Dynamics 365 Feature Review",
    image: "/img/feature-review.png",
    w: 1024,
    h: 576,
    alt: "Dynamics 365 feature review",
    paras: [
      "Microsoft regularly introduces new features and capabilities across its Dynamics 365 applications. However, businesses may not always use the available functionality effectively.",
      "Our team reviews your existing Dynamics 365 features and configurations to identify unused capabilities, outdated functionality and opportunities for improvement.",
      "We assess whether your current system configuration supports your business processes and highlight relevant features that could improve productivity.",
    ],
    closing: "This review helps businesses get more value from their existing Dynamics 365 investment without introducing unnecessary customisations.",
  },
  {
    id: "code-audit",
    icon: "bi-code-slash",
    title: "3. Dynamics 365 Code and Customisation Audit",
    image: "/img/code-auditing.png",
    w: 1024,
    h: 576,
    alt: "Dynamics 365 code and customisation audit",
    paras: [
      "Custom code and extensions can help organisations meet specific business requirements. However, poorly maintained or unnecessary customisations can increase maintenance complexity and create challenges during system updates.",
      "Our consultants review existing customisations and development practices to identify potential technical issues and improvement opportunities.",
    ],
    listIntro: "The code audit may include:",
    list: [
      "Reviewing custom code and extensions.",
      "Assessing development and deployment practices.",
      "Identifying unsupported or outdated components.",
      "Reviewing integration methods and API usage.",
      "Identifying unnecessary or complex customisations.",
      "Recommending opportunities to simplify existing code.",
      <>Assessing whether suitable <Link href="/products/microsoft-azure/">Microsoft cloud services</Link> can improve specific processes.</>,
    ],
    closing: "The objective is to help maintain a more manageable, maintainable and upgrade-ready Dynamics 365 environment.",
  },
  {
    id: "upgrade-assessment",
    icon: "bi-arrow-up-circle",
    title: "4. Dynamics 365 Upgrade Assessment",
    image: "/img/Upgrading-Analysis.png",
    w: 1024,
    h: 576,
    alt: "Dynamics 365 upgrade assessment",
    paras: [
      "Keeping your Dynamics 365 environment aligned with supported product versions and Microsoft updates is important for long-term system management.",
      "If your organisation is using an older configuration or planning to upgrade, our consultants can assess your existing environment and identify potential upgrade requirements.",
    ],
    listIntro: "Our upgrade assessment considers:",
    list: [
      "Existing Dynamics 365 version and configuration.",
      "Current customisations and extensions.",
      "Third-party integrations and dependencies.",
      "Data migration and compatibility considerations.",
      <><Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">Cloud and on-premises</Link> requirements.</>,
      "Potential risks and preparation activities.",
    ],
    closing: <>Based on the assessment, we recommend suitable next steps to help plan your <Link href="/our-services/dynamics-365-upgrade-services/">Dynamics 365 upgrade</Link> or modernisation project.</>,
  },
  {
    id: "data-health",
    icon: "bi-database-check",
    title: "5. Dynamics 365 Data Health Check",
    image: "/img/data-health-check.png",
    w: 1024,
    h: 576,
    alt: "Dynamics 365 data health check",
    paras: [
      "Reliable business data is essential for accurate reporting, analytics and decision-making. Duplicate, incomplete or inconsistent records can affect business operations and reduce confidence in reports.",
      "Our data health check reviews the quality and structure of your existing data to identify potential issues.",
    ],
    listIntro: "We assess areas such as:",
    list: [
      "Duplicate and redundant records.",
      "Incomplete or inconsistent data.",
      "Data accuracy and reliability.",
      "Existing data management practices.",
      "Reporting and analytics requirements.",
      "Data storage and management considerations.",
    ],
    closing: "Our consultants provide recommendations to help improve data quality, simplify data management and support more reliable business reporting.",
  },
  {
    id: "integration-assessment",
    icon: "bi-plugin",
    title: "6. Dynamics 365 Integration Assessment",
    paras: [
      <>Dynamics 365 often works alongside other business applications, including Microsoft 365, <Link href="/products/microsoft-power-bi/">Power BI</Link>, eCommerce platforms, payroll systems and third-party business software.</>,
      "If integrations are not configured or maintained properly, they can create data inconsistencies, workflow interruptions and operational challenges.",
      "Our consultants review your existing integration environment to identify potential gaps and improvement opportunities.",
    ],
    listIntro: "The assessment may cover:",
    list: [
      "Existing system integrations and connections.",
      "Data synchronisation and transfer processes.",
      "Integration errors and dependencies.",
      "API and integration architecture.",
      "Opportunities to improve automation.",
      "Integration maintenance and monitoring requirements.",
    ],
    closing: "We help you understand whether your current integrations are supporting business requirements effectively.",
  },
  {
    id: "licensing-review",
    icon: "bi-person-badge",
    title: "7. Microsoft Dynamics 365 Licensing Review",
    image: "/img/licensing.png",
    w: 1024,
    h: 576,
    alt: "Microsoft Dynamics 365 licensing review",
    paras: [
      "Your licensing requirements may change as your organisation grows, introduces new users or adopts additional Dynamics 365 applications.",
      "Our consultants review your current licensing arrangements and business requirements to identify potential opportunities for improvement.",
    ],
    listIntro: "The assessment considers:",
    list: [
      "Existing Dynamics 365 applications and licences.",
      "User roles and access requirements.",
      "Current and expected user numbers.",
      "Application usage and licensing needs.",
      "Data storage requirements.",
      "Potential licensing optimisation opportunities.",
    ],
    closing: "Based on your requirements, we help you understand which licensing options may be appropriate for your organisation.",
  },
];

const signs = [
  { icon: "bi-hourglass-split", title: "Slow system performance", text: "Users experience delays when accessing records, processing transactions or generating reports." },
  { icon: "bi-toggle-off", title: "Unused system features", text: "Your organisation has functionality that is not being used effectively." },
  { icon: "bi-exclamation-triangle", title: "Frequent technical issues", text: "Users regularly encounter errors, system interruptions or integration problems." },
  { icon: "bi-database-exclamation", title: "Data quality concerns", text: "Duplicate, incomplete or inconsistent records affect reporting and business decisions." },
  { icon: "bi-braces", title: "Complex customisations", text: "Existing custom code makes system maintenance and future upgrades more difficult." },
  { icon: "bi-arrow-left-right", title: "Changing business requirements", text: "Your current Dynamics 365 configuration no longer meets your operational needs." },
  { icon: "bi-currency-pound", title: "Increasing licensing costs", text: "Your organisation may be paying for licences or capabilities that do not match actual usage." },
];

const processSteps = [
  { icon: "bi-chat-dots", title: "Step 1: Initial Consultation", text: "We begin by understanding your business, existing Dynamics 365 environment, current challenges and objectives. This helps us determine the areas that require attention." },
  { icon: "bi-search", title: "Step 2: System Assessment", text: "Our consultants review the agreed areas of your Dynamics 365 environment, which may include system configuration, business processes, customisations, integrations, data and licensing." },
  { icon: "bi-bullseye", title: "Step 3: Identify Gaps and Improvement Areas", text: "We analyse the findings to identify potential performance issues, configuration gaps, technical concerns and opportunities to improve your existing system." },
  { icon: "bi-clipboard-check", title: "Step 4: Recommendations and Action Plan", text: "Following the assessment, we share practical recommendations based on the findings. These may include configuration improvements, code optimisation, data cleansing, integration changes, licensing adjustments or upgrade planning." },
];

const benefits = [
  { title: "Improved system efficiency", text: "Identify potential performance issues and opportunities to streamline business processes." },
  { title: "Better user adoption", text: "Highlight training requirements and unused system capabilities." },
  { title: "Improved data quality", text: "Identify data inconsistencies that may affect reporting and decision-making." },
  { title: "Simplified customisations", text: "Identify unnecessary or complex code that may increase maintenance effort." },
  { title: "Better upgrade planning", text: "Understand technical dependencies and potential upgrade requirements." },
  { title: "Licensing optimisation", text: "Review whether your existing licensing arrangements align with business needs." },
  { title: "Long-term system management", text: "Establish improvement priorities for your Dynamics 365 environment." },
];

const whyUs = [
  "Microsoft Dynamics 365 ERP and CRM expertise.",
  "Experience across different business processes and industries.",
  "Technical assessment of configurations and customisations.",
  "Guidance on system upgrades and modernisation.",
  "Integration and data management expertise.",
  "Ongoing Dynamics 365 support and optimisation services.",
];

const faqs = [
  { id: 1, question: "What is a Microsoft Dynamics 365 System Health Check?", answer: "<p>A Microsoft Dynamics 365 System Health Check is an assessment of your existing ERP or CRM environment. It reviews areas such as system performance, configuration, customisations, integrations, data quality and licensing to identify potential issues and improvement opportunities.</p>" },
  { id: 2, question: "Is the Dynamics 365 Health Check free?", answer: "<p>Dynamics Square UK offers a free Dynamics 365 System Health Check. Contact our team to discuss your requirements and confirm the scope of the assessment.</p>" },
  { id: 3, question: "What does a Dynamics 365 Health Check include?", answer: "<p>The assessment can include business process reviews, feature analysis, code auditing, upgrade assessment, data health checks, integration reviews and licensing analysis, depending on your system and requirements.</p>" },
  { id: 4, question: "How long does a Dynamics 365 System Health Check take?", answer: "<p>The time required depends on the size and complexity of your Dynamics 365 environment, the number of applications involved and the assessment scope. Our team can discuss the expected timeline during the initial consultation.</p>" },
  { id: 5, question: "Can you assess an existing Dynamics 365 implementation?", answer: "<p>Yes. We can review an existing Dynamics 365 implementation to understand its configuration, business processes, customisations and technical challenges. The assessment scope will depend on the system and access available.</p>" },
  { id: 6, question: "Which Dynamics 365 applications can be assessed?", answer: "<p>The assessment can be discussed for <a href=\"/products/dynamics-365-business-central/\">Dynamics 365 Business Central</a>, <a href=\"/products/microsoft-dynamics-365-finance/\">Finance</a>, <a href=\"/products/dynamics-365-supply-chain-management/\">Supply Chain Management</a>, <a href=\"/products/microsoft-dynamics-365-sales/\">Sales</a> and other relevant Dynamics 365 applications, depending on your requirements.</p>" },
  { id: 7, question: "Will I receive recommendations after the health check?", answer: "<p>Yes. The purpose of the assessment is to identify potential improvement areas and provide recommendations based on the agreed scope and findings.</p>" },
  { id: 8, question: "Can Dynamics Square UK help resolve the issues identified?", answer: "<p>Yes. Depending on the findings, Dynamics Square UK can discuss suitable services such as <a href=\"/our-services/dynamics-365-support-services/\">Dynamics 365 support</a>, optimisation, customisation, <a href=\"/products/microsoft-dynamics-365/integration/\">integration</a>, data migration and upgrade services.</p>" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "why-health-check", label: "Why a Health Check?" },
  { id: "whats-included", label: "What's Included" },
  { id: "signs", label: "Signs" },
  { id: "process", label: "Process" },
  { id: "benefits", label: "Benefits" },
  { id: "why-dynamics-square", label: "Why Dynamics Square" },
  { id: "faqs", label: "FAQs" },
];

const GetStarted = ({ label }) => (
  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
    <span>{label} &nbsp;<i className="bi bi-arrow-right"></i></span>
  </Link>
);

const ModuleList = ({ m }) => (
  <>
    <h4 className={hc.listTitle}>{m.listIntro}</h4>
    <ul className={`${styles.capList} ${styles.quoteLink}`}>
      {m.list.map((li, k) => <li key={k}>{li}</li>)}
    </ul>
  </>
);

const SystemHealth = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="https://www.dynamicssquare.co.uk/img/why-Free-Health-Check-1024x-576.png"
        imageAlt="Free Dynamics 365 System Health Check for UK businesses"
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
            <span>Free Dynamics 365 System Health Check</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Free Dynamics 365 System Health Check for UK Businesses</h1>
              <p className={styles.heroLead}>Is your Microsoft Dynamics 365 system delivering the performance and business value your organisation expects? Over time, outdated configurations, inefficient customisations, unused features, data quality issues and integration gaps can affect system performance and productivity.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <GetStarted label="Schedule Free Health Check" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/why-Free-Health-Check-1024x-576.png" alt="Free Microsoft Dynamics 365 ERP and CRM system health check" width={1024} height={576} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} showCta={false} />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className={styles.twoCol}>
            <div className={styles.infoCard}>
              <i className="bi bi-clipboard2-pulse"></i>
              <p className={styles.quoteLink}>Dynamics Square UK offers a free Microsoft Dynamics 365 System Health Check to help businesses assess their existing ERP or CRM environment, identify potential issues and understand opportunities for improvement.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-lightbulb"></i>
              <p>Our Dynamics 365 consultants review key areas of your system, including business processes, system performance, customisations, data quality, upgrades and licensing requirements. Based on the assessment, we provide practical recommendations to help you improve system efficiency, reduce operational challenges and get more value from your Dynamics 365 investment.</p>
            </div>
          </div>
          <div className={styles.callout}>
            <p>Request your free Dynamics 365 System Health Check and understand where your system can improve.</p>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.calloutLink}>
              Book a Free Health Check <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Why a health check ===== */}
      <section id="why-health-check" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Does Your Business Need a Dynamics 365 System Health Check?</h2>
              <p className={styles.lead}>A successful Dynamics 365 implementation does not automatically guarantee long-term system efficiency. As business requirements change, your ERP or CRM environment may need regular reviews to remain aligned with operational goals.</p>
              <p>Businesses may continue using outdated configurations, unnecessary customisations or inefficient workflows without realising their impact on productivity and reporting.</p>
              <p>A Dynamics 365 System Health Check helps identify these gaps and provides a clearer understanding of your existing system.</p>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/system-health-check.png" alt="Dynamics 365 system health check assessment" width={553} height={531} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
          <p className={styles.processIntro}>It can help your organisation:</p>
          <ul className={styles.processGrid}>
            {helpPoints.map((p) => (
              <li key={p.text}><i className={`bi ${p.icon}`}></i>{p.text}</li>
            ))}
          </ul>
          <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Our objective is to help you understand the condition of your Dynamics 365 environment and identify practical improvement opportunities.</p>
        </div>
      </section>

      {/* ===== What's included ===== */}
      <section id="whats-included" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>What Does Our Dynamics 365 Health Check Include?</h2>
              <p className={styles.lead}>Dynamics Square UK reviews several important areas of your Microsoft Dynamics 365 environment. The assessment is tailored to your existing system, business requirements and operational challenges.</p>
            </div>
          </div>

          <div className="row gy-5 mt-2">
            <div className="col-lg-8">
              <div className={hc.moduleStack}>
                {modules.map((m) => (
                  <article id={m.id} className={`${hc.moduleCard} ${styles.anchor}`} key={m.id}>
                    <div className={hc.moduleHead}>
                      <span className={hc.moduleIcon}><i className={`bi ${m.icon}`}></i></span>
                      <h3>{m.title}</h3>
                    </div>
                    <div className="row gy-3 align-items-center">
                      <div className={`${m.image ? "col-md-7" : "col-12"} ${styles.textCol} ${hc.moduleText}`}>
                        {m.paras.map((p, k) => <p key={k}>{p}</p>)}
                      </div>
                      {m.image && (
                        <div className="col-md-5">
                          <div className={hc.moduleMedia}>
                            <Image src={m.image} alt={m.alt} width={m.w} height={m.h} sizes="(max-width: 767px) 100vw, 300px" />
                          </div>
                        </div>
                      )}
                    </div>
                    {m.list && (
                      <div className={hc.moduleList}>
                        <ModuleList m={m} />
                      </div>
                    )}
                    <p className={`${hc.moduleClosing} ${styles.quoteLink}`}><i className="bi bi-check2-circle"></i><span>{m.closing}</span></p>
                  </article>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <aside className={hc.formAside}>
                <div className={hc.formCard}>
                  <h3>Schedule Free Health Check</h3>
                  <LazyForm />
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Signs ===== */}
      <section id="signs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Signs Your Business Needs a Dynamics 365 Health Check</h2>
              <p className={styles.lead}>Not sure whether your existing ERP or CRM system needs an assessment? Here are some common signs that indicate it may be time to review your Dynamics 365 environment.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {signs.map((s) => (
              <article className={styles.capCard} key={s.title}>
                <i className={`bi ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
            <div className={hc.signNote}>
              <p>A system health check can help identify these challenges and establish where improvements may be needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Process ===== */}
      <section id="process" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-9 text-center ${styles.introCol}`}>
              <h2 className={styles.h2}>How Our Dynamics 365 System Health Check Process Works</h2>
              <p className={styles.lead}>At Dynamics Square UK, we follow a structured assessment approach to understand your existing system and identify relevant improvement opportunities.</p>
            </div>
          </div>
          <ol className={`${styles.steps} ${hc.steps4}`}>
            {processSteps.map((s) => (
              <li className={styles.step} key={s.title}>
                <span className={styles.stepDot}><i className={`bi ${s.icon}`}></i></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Benefits of a Microsoft Dynamics 365 System Health Check</h2>
              <p className={styles.lead}>A regular system assessment can help your organisation maintain a more efficient and manageable Dynamics 365 environment.</p>
              <p className={styles.processIntro}>Key benefits include:</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {benefits.map((b, i) => (
              <article className={styles.reasonCard} key={b.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge} style={{ fontWeight: 800 }}>{i + 1}</span>
                  <h3>{b.title}</h3>
                </div>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
          <p className={`mt-4 mb-0 ${styles.closingLine} ${styles.closingLineDark}`}>The actual benefits will depend on your existing system, business requirements and the findings of the assessment.</p>
        </div>
      </section>

      {/* ===== Why Dynamics Square ===== */}
      <section id="why-dynamics-square" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/Dynamics-ERP-CRM-Health-Check.png" alt="Dynamics Square UK Dynamics 365 consultants" width={766} height={576} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Choose Dynamics Square UK for Your Dynamics 365 Health Check?</h2>
              <p className={`${styles.lead} ${styles.quoteLink}`}>Dynamics Square UK is a <Link href="/">Microsoft Dynamics 365 partner</Link> providing ERP and CRM consulting, <Link href="/our-services/dynamics-365-implementation-services/">implementation</Link>, migration, upgrade and support services.</p>
              <p>Our consultants understand the challenges businesses can face when managing and maintaining Dynamics 365 environments. We focus on assessing existing systems, identifying improvement opportunities and recommending practical solutions based on business requirements.</p>
              <p className="fw-bold mb-0">By choosing Dynamics Square UK, you can benefit from:</p>
              <ul className={`${styles.capList} ${styles.quoteLink}`}>
                {whyUs.map((w) => <li key={w}>{w}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles.callout}>
            <p>Whether you need to review an existing implementation, address technical challenges or prepare your system for future growth, our team can help you understand the next steps.</p>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.calloutLink}>
              Book a Free Health Check <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Frequently Asked Questions About Dynamics 365 System Health Check</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat} text-center`}>
                  <Image src="/img/MaskGroup8.png" alt="Dynamics 365 consultant" width={339} height={483} sizes="(max-width: 991px) 60vw, 240px" style={{ width: "60%", height: "auto", margin: "0 auto" }} />
                  <GetStarted label="Book a Free Health Check" />
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
          <div className={hc.cta}>
            <div className="row gy-5 align-items-center position-relative">
              <div className="col-lg-7">
                <h2 className={hc.ctaTitle}>Request Your Free Dynamics 365 System Health Check</h2>
                <p className={hc.ctaLead}>Is your existing Dynamics 365 system meeting your business requirements? Do you want to identify performance issues, review existing customisations or understand your upgrade and optimisation options?</p>
                <ul className={hc.ctaPoints}>
                  <li><i className="bi bi-search"></i><span>Dynamics Square UK can help you assess your existing Dynamics 365 environment and identify practical ways to improve it.</span></li>
                  <li><i className="bi bi-chat-square-text"></i><span>Share your requirements with our Microsoft Dynamics 365 consultants. Our team will discuss your current challenges and help determine the appropriate assessment scope.</span></li>
                  <li><i className="bi bi-clipboard2-pulse"></i><span>Request your free Dynamics 365 System Health Check today and take the next step towards a more efficient business system.</span></li>
                </ul>
              </div>
              <div className="col-lg-5">
                <div className={hc.ctaCard}>
                  <div className={hc.ctaVisual}>
                    <Image src="/img/system-health-check.png" alt="Request a free Dynamics 365 system health check" width={553} height={531} sizes="(max-width: 991px) 70vw, 300px" />
                  </div>
                  <p className={hc.ctaCardText}>Contact Dynamics Square UK to get started.</p>
                  <GetStarted label="Book a Free Health Check" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SystemHealth;
