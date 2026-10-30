import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Dynamics 365 Customer Engagement (D365 CE) Partner UK";
const PAGE_DESC = "Uplift your sales & marketing efforts and improve your customer relationships with our Microsoft Dynamics 365 Customer Engagement (CE) plans.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/customer-engagement-banner.png";

const getStarted = [
  { icon: "bi-graph-up-arrow", text: "Level up your customer engagement, enhance your sales & marketing capabilities, and drive highly productive and efficient results with our Dynamics 365 Customer Engagement plans." },
  { icon: "bi-sliders", text: <>Dynamics Square can <Link href="/our-services/dynamics-365-consultant/">configure your system</Link> to strategically manage your clients or customers, centralise your customers’ data, and streamline your sales practice to drive efficient and profitability-driven results.</> },
  { icon: "bi-people", text: "With Microsoft Dynamics 365 Customer Engagement, we enable enterprises to strengthen their client/customer relationship, empower their sales & marketing team with built-in intelligence to ensure data analysis, and effectively carry out campaign management." },
];

const apps = [
  {
    icon: "bi-graph-up",
    title: "Dynamics 365 Sales",
    img: { src: "/img/dynamics-365-sales.png", alt: "Dynamics 365 Sales", width: 1025, height: 587 },
    paras: [
      "Connect your sales team and system and enable an omnichannel experience to your customers.",
      <>With <Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 for Sales</Link>, improve your customer engagement, predict your sales pipeline, and accelerate your sales flow by leveraging in-depth AI-based sales insights to generate maximised revenue.</>,
    ],
  },
  {
    icon: "bi-megaphone",
    title: "Dynamics 365 Customer insights",
    img: { src: "/img/marketing-banner-1.png", alt: "Dynamics 365 Marketing", width: 758, height: 432 },
    paras: [
      <>Engage and serve customers in real-time, acquire more customer base, provide AI-based personalised experience to your customers by leveraging a unified and quickly adaptable user platform i.e., <Link href="/products/microsoft-dynamics-365-marketing/">Dynamics 365 Marketing</Link> (Customer insights) module of the Dynamics 365 Customer Engagement package.</>,
    ],
  },
  {
    icon: "bi-headset",
    title: "Dynamics 365 Customer Service",
    img: { src: "/img/customer-sservice-banner.png", alt: "Dynamics 365 Customer Service", width: 1024, height: 586 },
    paras: [
      <>Facilitate your customers with self-service options, improve your customer engagement level, <Link href="/dynamics-365-customer-service-implementation/">empower your support agents</Link> to quickly resolve customer issues using AI-powered insights, optimise service operations, proactively monitor & fix device issues by combining them with IoT solutions.</>,
    ],
  },
  {
    icon: "bi-truck",
    title: "Dynamics 365 Field Service",
    img: { src: "/img/field-service-banner.png", alt: "Dynamics 365 Field Service", width: 1024, height: 586 },
    paras: [
      <>Drive connected service experience, uplift your employees&apos; effectiveness, and optimise your services operations all through <Link href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service</Link> module.</>,
      "Leverage real-time actionable insights, ensure productive remote services in real-time, and generate customer trust and loyalty.",
    ],
  },
];

const boosts = [
  { icon: "bi-person-heart", title: "Build Customer Relationships", text: <>Store, access, and streamline your customers' data using Dynamics 365 Customer Engagement. Know what's happening in your sales, marketing, services, and project operation team in real-time to make informed decisions and serve your customers before they could even realise the issue. Through this, you can build improved customer relationships to drive growth and efficiency.</> },
  { icon: "bi-lightning-charge", title: "Drive Predictive Approach", text: "Leverage data analytics capabilities to analyse your customer data to serve better. Gain predictive sales & marketing insights to proactively make informed decisions. Predict your project service pipeline, optimise resources, drive project service automation, and ensure successful client or customer delivery as anticipated." },
  { icon: "bi-phone", title: "Remain Productive", text: <>Dynamics 365 Customer Engagement apps, when deployed on a cloud network, enable enterprises to access and leverage their customers' data from anywhere using any device. It helps to proactively track your customer issues, serve them in real-time by empowering your employees and field executives with the required tools and capabilities.</> },
  { icon: "bi-person-check", title: "Drive Personalised Experienced", text: <>Implementing Dynamics 365 Customer Engagement Plan can help enterprises to understand their customers and serve them a personalised solution whenever and wherever they are in need. With built-in business intelligence, enterprises can ensure seamless customer support, quick solutions to their customers, and can drive successful customer-driven campaigns.</> },
];

const growth = [
  { icon: "bi-speedometer2", title: "Drive Process Efficiency", text: "Centralise your sales, customers/clients, or project data to make real-time and improved decisions. Streamline and access your processes in real-time while ensuring seamless remote services and strengthening your employee's capability with highly efficient and productive tools." },
  { icon: "bi-chat-dots", title: "Uplift Customer Interaction", text: "Efficiently engage your customers via customer-preferred communicating channels through AI-based recommendations and ensure seamless interactions across sales, marketing, and services. Proactively serve your customers via connected people, devices, and processes all through Dynamics 365 Customer Engagement modules." },
  { icon: "bi-database", title: "Centralise Your Data", text: "Centralise your customers, sales, marketing, and services data to streamline, track, and manage your processes in real-time leveraging a single unified dashboard. Increase your employees' efficiency with integrated data and assist your remote team in proactively serving customers to attain profitability." },
  { icon: "bi-bar-chart-line", title: "Gain Improved Insights", text: <>With the <Link href="/products/microsoft-power-bi/">built-in business intelligence</Link> of Dynamics 365 CE, gain real-time insights to empower your support team, marketing people, and sales individuals with process clarity and decision-making capability to make a strategic yet productive decision in real-time without ensuring a single delay.</> },
  { icon: "bi-trophy", title: "Close More Deals", text: <>Dynamics 365 Customer Engagement Apps help to empower your service agents to quickly solve customer issues, keep track of your sales pipeline, plan capacity, <Link href="/products/dynamics-365-supply-chain-management/">streamline your supply chain</Link>, and improve your sales practices to close more deals faster and generate more improved revenue.</> },
];

const faqs = [
  { id: 1, question: "What is Dynamics 365 Customer Engagement?", answer: "<p>Dynamics 365 CE, formerly known as Dynamics 365 CRM, is a complete set of applications essential to building a strong relationship with customers. It is a complete package capable of streamlining the entire CRM requirements of a business.</p>" },
  { id: 2, question: "What is the difference between Dynamics 365 Customer Engagement and Sales?", answer: "<p>D365 CE is a complete package of CRM applications, whereas D365 Sales is one such application from the package. Dynamics 365 CE can empower you to streamline sales, enhance the customer experience, and drive maximum results, whereas D365 Sales specifically focuses on capturing more clients and increasing sales.</p>" },
  { id: 3, question: "What applications come under Dynamics 365 Customer Engagement?", answer: "<p>Dynamics 365 CE contains four applications that include Dynamics 365 Sales, Dynamics 365 Marketing, Dynamics 365 Customer Service, and Dynamics 365 Field Service. Based on requirements, a business can implement any solution or a combination of more than one.</p>" },
  { id: 4, question: "Why is D365 CE necessary for businesses?", answer: "<p>D365 CE is very essential to streamline, manage, and control all customer relationship requirements for a business. It can be customised to match the business requirements to drive effective customer engagement with proven results.</p>" },
  { id: 5, question: "What are the core benefits of Dynamics 365 Customer Engagement?", answer: "<p>There are numerous benefits to D365 CE that can help you achieve higher sales numbers while offering great customer service. It empowers businesses to drive customer-centric campaigns, lowers sales and marketing efforts, and offers efficient results.</p>" },
];

const sections = [
  { id: "what-is-ce", label: "What is D365 CE?" },
  { id: "get-started", label: "Why Dynamics Square" },
  { id: "ce-apps", label: "Customer Engagement Apps" },
  { id: "boost-engagement", label: "Boost Engagement" },
  { id: "growth", label: "Growth & Scalability" },
  { id: "faqs", label: "FAQs" },
];

const Dynamics365CustomerEngagement = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeApp, setActiveApp] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Microsoft Dynamics 365 Customer Engagement"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Dynamics 365 Customer Engagement</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics 365 Customer Engagement</h1>
              <p className={styles.heroLead}>Drive your sales higher, provide excellent customer service and improve your marketing capabilities by Dynamics 365 CE</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Book Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/customer-engagement-banner.png" alt="D365 customer engagement" width={699} height={447} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Book Free Consultation" />

      {/* ===== What is CE ===== */}
      <section id="what-is-ce" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>What Is Dynamics 365 Customer Engagement?</h2>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-4`}>
            <div className={styles.infoCard}>
              <i className="bi bi-diagram-3"></i>
              <p>Dynamics 365 customer engagement (formerly known as <Link href="/products/microsoft-dynamics-crm/">Microsoft Dynamics CRM</Link>) refers to the complete customer-driven package comprising modules like sales, <Link href="/products/microsoft-dynamics-365-customer-service/">customer service</Link>, marketing, field service, and <Link href="/products/dynamics-365-project-operations/">project service automation</Link>. This combined package helps enterprises to manage, drive, and support their end-to-end customer-related practices to maximise return on investment and drive efficiency.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-cloud-arrow-up"></i>
              <p>Comes with flexible deployment options, Dynamics 365 Customer Engagement can be deployed either <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">on-premises, on-cloud, or Hybrid</Link>. By implementing Dynamics 365 CE (Customer Engagement), enterprises can extend their business capabilities, drive customer-oriented practices, and can ensure improved agility that helps to drive growth and scalability in the long run.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Get Started ===== */}
      <section id="get-started" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/Ds-Consultant.webp" alt="Dynamics Square consultants planning a Dynamics 365 Customer Engagement implementation" width={1013} height={846} sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Choose Dynamics Square for Dynamics 365 Customer Engagement?</h2>
              <p className={styles.lead}>As your <Link href="/our-services/dynamics-365-implementation-services/">implementation partner</Link>, we set up Dynamics 365 Customer Engagement around the way your sales, marketing and service teams work, so customer data, pipelines and campaigns are managed from one connected system.</p>
              <ol className={styles.numList}>
                {getStarted.map((g) => (
                  <li key={g.icon}>
                    <p>{g.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Planning to Implement Dynamics CE?</h3>
              <p>Ask our experts how Dynamics 365 Customer Engagement can help to improve and support your customer-driven practices.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Talk To Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CE Apps ===== */}
      <section id="ce-apps" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics 365 Customer Engagement Apps</h2>
              <p>Dynamics 365 Customer Engagement apps are a complete package of related app services that helps enterprises to streamline their sales, improve their customer experience, drive effective marketing campaigns, improve field service level, and enable project service automation to acquire success and drive maximised results.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Dynamics 365 Customer Engagement apps">
              {apps.map((a, i) => (
                <button
                  key={a.title}
                  type="button"
                  role="tab"
                  id={`app-tab-${i}`}
                  aria-selected={activeApp === i}
                  aria-controls={`app-panel-${i}`}
                  className={`${styles.modTab} ${activeApp === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveApp(i)}
                >
                  <i className={`bi ${a.icon}`} aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {a.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all app content is crawlable */}
              {apps.map((a, i) => (
                <div
                  key={a.title}
                  id={`app-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`app-tab-${i}`}
                  className={`${styles.modPanel}${activeApp === i ? "" : " d-none"}`}
                >
                  <h3>{a.title}</h3>
                  {a.paras.map((p, j) => (
                    <p key={j} className={`${styles.quoteLink}${j < a.paras.length - 1 ? " mb-3" : ""}`}>{p}</p>
                  ))}
                  <div className={`${styles.mediaFlat} mt-4`}>
                    <Image src={a.img.src} alt={a.img.alt} width={a.img.width} height={a.img.height} sizes="(max-width: 991px) 100vw, 760px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Boost Engagement ===== */}
      <section id="boost-engagement" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>How Dynamics 365 Customer Engagement Apps Can Boost Your Customer Engagement</h2>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {boosts.map((b) => (
              <article className={styles.reasonCard} key={b.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${b.icon}`}></i></span>
                  <h3>{b.title}</h3>
                </div>
                <p>{b.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Growth & Scalability ===== */}
      <section id="growth" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Drive Growth and Scalability Through Microsoft Dynamics 365 CE</h2>
              <p>To compete in the market and outreach in your desired marketplace requires implementing the right customer relationship management solution. Implementing Dynamics 365 Customer Engagement Plan can help you to improve your overall customer relationship management experience.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {growth.map((g) => (
              <article className={styles.capCard} key={g.title}>
                <i className={`bi ${g.icon}`}></i>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Microsoft Dynamics 365 Customer Engagement?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Talk To Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
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
    </>
  );
};

export default Dynamics365CustomerEngagement;
