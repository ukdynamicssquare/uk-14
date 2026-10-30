import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Microsoft Dynamics 365 Implementation Services";
const PAGE_DESC = "Expert Dynamics 365 implementation services for seamless integration, improved efficiency, and business transformation. Contact us Dynamics Square UK for a consultation!";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/implimenation-service-banner.png";

const modules = [
  { icon: "bi-truck", title: "Supply Chain", text: <>Enabling resilient <Link href="/products/dynamics-365-supply-chain-management/">supply chain</Link> integrated with AI practices and seamlessly adaptable to bring transparency, faster time to market, optimise inventory &amp; logistics, predict potential disruptions, and enhance asset productivity &amp; longevity.</> },
  { icon: "bi-megaphone", title: "Marketing", text: <>Personalise your customer journey, engage the right customers, build trust, and drive business success by gaining a holistic customer view wrapped with AI analytics, easy-to-use tools to drive seamless yet productive <Link href="/products/microsoft-dynamics-365-marketing/">marketing strategies</Link>.</> },
  { icon: "bi-tools", title: "Field Service", text: <>Bring acceleration in your service part comprising customer management and <Link href="/products/microsoft-dynamics-365-field-service/">field service</Link>. We implement highly configured, connected, and integrated solutions simplified with AI, IoT, and <Link href="/products/microsoft-azure/">Machine Learning capabilities</Link>.</> },
  { icon: "bi-shop", title: "Commerce", text: <>We create a highly unified and omnichannel experience for your customers or partners equipped with AI-driven insights, <Link href="/products/microsoft-dynamics-365-commerce/">centralised commerce management</Link>, and modernised commerce tools that simplify your commerce and enable growth.</> },
  { icon: "bi-cash-coin", title: "Finance", text: <>With real-time and seamless financial reporting, Key analytics, and AI insights, we enable enterprises to unify their <Link href="/products/microsoft-dynamics-365-finance/">finance practices</Link> and automate their processes while minimising the potential risks and global financial complexities.</> },
  { icon: "bi-graph-up-arrow", title: "Sales", text: <>Optimise sales and drive profitability with agile <Link href="/products/microsoft-dynamics-365-sales/">sales insights</Link> and connected sales practices through our Microsoft Dynamics 365 Implementation services. Predict, manage, and streamline your sales and close more deals faster.</> },
  { icon: "bi-headset", title: "Customer Service", text: <>We implement highly embedded <Link href="/products/microsoft-dynamics-365-customer-service/">customer management solutions</Link> helping your business to transform your customer experience by delivering them personalised solutions integrated with proactive support and omnichannel experience.</> },
  { icon: "bi-kanban", title: "Project Management", text: <>Track and manage your workflow and enable a project-centric approach with a single integrated solution for your business. We implement a solution to automate and streamline your <Link href="/products/dynamics-365-project-operations/">project cycle</Link> and ensure overall project success.</> },
];

const phases = [
  { icon: "bi-search", title: "ANALYSIS PHASE", text: "Before we start, we listen to your project ideation, understand your process flow, and evaluate how implementing Dynamics 365 can improve or support your business practices. We examine what sort of customisation or integration should be performed to strategically help your business to streamline and automate your practices along with the future scope." },
  { icon: "bi-vector-pen", title: "DESIGNING PHASE", text: "Once the analysis phase gets done, we start structuring your functional needs including your customisation part, specific configuration, and integration either with Microsoft's products or third-party solutions. In this phase, we strategically define your functional values and ensure a design simplifying and automating your concurrent processes as well as supporting your futuristic needs." },
  { icon: "bi-code-slash", title: "DEVELOPMENT PHASE", text: "When it comes to developing your project, we involve custom coding, strategic & custom interface designing, system integration, data modelling, and migration. During data migration, we gradually and strategically migrate your data from your previous system or software solution to the newly implemented system to ensure successful data migration." },
  { icon: "bi-rocket-takeoff", title: "DEPLOYMENT PHASE", text: <>In this phase, we finally deploy your project that includes key <Link href="/our-services/dynamics-365-training/">user training</Link> &amp; acceptance, module testing, and more just to ensure whether your system is implemented with required modules, strategies, and defined specifications. We apply standard methodology and deploy &amp; monitor changes that ensure agile and successful deployment.</> },
  { icon: "bi-life-preserver", title: "POST-GO-LIVE SUPPORT", text: "Once your project is ready to go live, we ensure all the final changes are made, your system is moulded as per your expectation, and user training is performed so that your end-users can quickly and seamlessly adapt the newly configured and implemented features & functionalities to encourage and drive efficiency throughout the organisation." },
];

const reasons = [
  { icon: "bi-patch-check", title: "Authorised Microsoft Solutions Partner", text: <>Dynamics Square is an authorised Microsoft Solutions Partner that delivers trustworthy Microsoft Dynamics 365 implementation services followed by standard practices, specialised with modernised methodologies, and strategised with high-end <Link href="/our-services/dynamics-365-support-services/">post support</Link>.</> },
  { icon: "bi-people", title: "High-End Implementation Team", text: "Since we are a trustworthy Microsoft Dynamics implementation partner and hence, comprise a team of certified people with years of implementation proficiency." },
  { icon: "bi-headset", title: "Dedicated Support Model", text: "To ensure and drive continuity, we provide a dedicated support model from the planning & analysis phase to user training to post-deployment." },
  { icon: "bi-piggy-bank", title: "Cost-Effective Solution", text: "We deploy a standard Microsoft Dynamics implementation at 40% discounted rates in comparison to other implementation partners." },
  { icon: "bi-sliders", title: "Highly Customised", text: "By deeply reviewing your process flow and involved domain modules, we deploy enterprise-specific implementation practices." },
  { icon: "bi-calendar-check", title: "Flexible Delivery", text: "Considering the importance of your time constraints, we invest our full potential efforts to ensure flexible and dedicated delivery." },
];

// Same Q&As as the visible FAQ (also used for the FAQPage schema).
const faqs = [
  { id: 1, question: "What is Microsoft Dynamics 365?", answer: "<p><a href=\"/products/microsoft-dynamics-365/\">Microsoft Dynamics 365</a> is an all-in-one business management tool with the added applications of ERP and CRM. It is a cloud-based tool capable of enhancing the efficiency and productivity of your business using technologies like AI and ML.</p>" },
  { id: 2, question: "How much time does implementation take?", answer: "<p>There is no absolute data about the exact time taken in the implementation process. It depends on various factors, including business requirements, deployment options, the complexity of business, and customised requirements.</p>" },
  { id: 3, question: "How to choose the right Dynamics 365 implementation partner?", answer: "<p>Selecting the right partner is a task that needs a lot of effort. However, various factors must be evaluated before selecting the right partner, including precious work, expertise in a particular module, support availability, time to implement, and implementation cost.</p>" },
  { id: 4, question: "What is the cost of implementing Dynamics 365?", answer: "<p>The cost of implementation depends on various factors, including business requirements, server deployment, business complexity, process types, and data amount. However, your implementation partner will get you the exact cost and resolve your related issues.</p>" },
  { id: 5, question: "Are there any specialised Dynamics 365 implementation partners?", answer: "<p>Yes, many partners have been providing D365 implementation services for years. They have specified industry verticals for whom they serve. You need to check with the partner whether they belong to your industry or not.</p>" },
  { id: 6, question: "What is the role of Dynamics Square in D365 Implementation?", answer: "<p>Dynamics Square is one of the leading implementation support partners in the UK and has been providing its services for the last 14 years. Our team is an expert in <a href=\"/our-services/dynamics-365-consultant/\">consulting</a>, implementing, upgrade, and providing support for modules of Dynamics Square.</p>" },
  { id: 7, question: "What is the process of Dynamics 365 Sales implementation?", answer: "<p>The implementation process of Dynamics 365 and Dynamics 365 Sales is slightly different. Dynamics 365 is a full package consisting of CRM and ERP solutions, whereas Sales is one of the modules of 365 to streamline the whole sales process.</p>" },
  { id: 8, question: "Is Business Central Implementation different from Dynamics 365?", answer: "<p>Yes, <a href=\"/dynamics-365-business-central-implementation/\">Business Central implementation</a> is a low-cost and less time-consuming process than D365. Microsoft Dynamics Business Central is an ERP solution with some parts of CRM, but Dynamics 365 is a fully-fledged ERP and CRM solution built to transform the overall business management.</p>" },
  { id: 9, question: "Can we integrate Microsoft Dynamics 365 Finance with Dynamics 365?", answer: "<p>MS Dynamics 365 Finance is a part of Dynamics 365 and comes together in the package. However, you need to pay an extra licensing fee starting from £50.00 per user/month (Sales Professional) or £80.70 per user/month (Sales Enterprise) to avail the features and capabilities of Sales.</p>" },
  { id: 10, question: "Does Dynamics 365 Supply Chain Management come with Dynamics 365?", answer: "<p>Yes, being a part of Dynamics 365, Supply Chain Management comes as a standard. To avail of D365 Supply Chain Management services, users have to pay a subscription fee starting from £161.50 per user per month.</p>" },
];

const relatedLinks = [
  { href: "/our-services/dynamics-365-upgrade-services/", title: "Dynamics 365 Upgrade Services", icon: "bi-arrow-up-circle" },
  { href: "/free-dynamics-365-system-health-check/", title: "Free Dynamics 365 System Health Check", icon: "bi-clipboard-pulse" },
  { href: "/microsoft-dynamics-365-cloud-vs-on-premise/", title: "Dynamics 365 Cloud vs On-Premise", icon: "bi-cloud" },
  { href: "/gp-to-business-central-migration/", title: "GP to Business Central Migration", icon: "bi-arrow-left-right" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "partner", label: "Implementation Partner" },
  { id: "approach", label: "Our Approach" },
  { id: "solutions", label: "Solutions We Implement" },
  { id: "methodology", label: "Methodology" },
  { id: "why-us", label: "Why Dynamics Square" },
  { id: "faqs", label: "FAQs" },
];

const ImplementationServices = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activePhase, setActivePhase] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Dynamics 365 implementation services"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/our-services/">Our Services</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Dynamics 365 Implementation Services</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Dynamics 365 Implementation Services</h1>
              <p className={styles.heroLead}><strong>Partner with the most experienced Dynamics 365 implementation experts</strong></p>
              <p className={styles.heroLead}>Don&apos;t let outdated systems hinder your growth. Choose Dynamics Square for concrete Dynamics 365 implementation services. Proper implementation is vital; failing to implement effectively could mean missing out on crucial growth opportunities.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Talk To Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/implimenation-service-banner.png" alt="Dynamics 365 implementation services" width={805} height={473} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Talk To Expert" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Implementation of Microsoft Dynamics 365 ERP and CRM Solutions</h2>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-4`}>
            <div className={styles.infoCard}>
              <i className="bi bi-diagram-3"></i>
              <p>To ensure a successful implementation, it is crucial to choose a domain-specific solution, leverage modernised methodologies, and collaborate with a trustworthy Dynamics 365 implementation partner like Dynamics Square.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-award"></i>
              <p>An ideal partner needs to possess deep industry expertise, a refined skill set, and a proven ability to deliver high-quality results within the defined time frame and budget, while ensuring <Link href="/products/microsoft-dynamics-365/integration/">seamless integration</Link>, scalability, and long-term business value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Implementation Partner ===== */}
      <section id="partner" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-4 text-center order-2 order-lg-1">
              <Image src="/img/microosoft-partner.png" alt="Microsoft Solutions Partner badge" width={625} height={651} className={styles.imgFlat} style={{ width: 240, height: "auto" }} sizes="240px" />
            </div>
            <div className={`col-lg-8 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics 365 Implementation Partner</h2>
              <p className={styles.lead}>Experts at Dynamics Square - an <Link href="/microsoft-partners-uk/">authorised Microsoft Solutions Partner</Link> have the proficiency to understand your complex business requirement and undertake challenges involved to deliver highly customised, process-integrated, and profitability-driven implementation.</p>
              <p>We ensure highly embedded implementation practices whether to support your <Link href="/products/microsoft-dynamics-erp/">ERP needs</Link>, <Link href="/products/microsoft-dynamics-crm/">CRM practices</Link>, <Link href="/products/microsoft-dynamics-365-finance-operations/">finance operations</Link>, project automation respectively, and even your entire integrated business needs with a single unified solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Approach ===== */}
      <section id="approach" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Delivering Domain-Specific &amp; Agile Implementation Approach</h2>
              <p>A successful Dynamics 365 implementation involves technical competence, industry-specific knowledge, and a flexible approach to changing business needs. We achieve seamless integration, minimal disruption, and faster time-to-value with domain-driven strategies and adaptable approaches.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark} ${styles.quoteLink}`}>Our agile implementation methodology emphasises iterative development, continuous feedback loops, and scalable solutions that meet your long-term goals. Whether you&apos;re in <Link href="/industries/dynamics-365-for-retail/">retail</Link>, <Link href="/industries/manufacturing/">manufacturing</Link>, <Link href="/industries/dynamics-365-for-healthcare/">healthcare</Link>, or finance, we tailor every step to improve operational efficiency, user adoption, and business growth.</p>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/Dynamics-365-overview.svg" alt="Delivering Domain-Specific & Agile Implementation Approach" width={555} height={552} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Solutions we implement ===== */}
      <section id="solutions" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className={`${styles.capGrid} ${styles.capGrid4}`}>
            {modules.map((m) => (
              <article className={styles.capCard} key={m.title}>
                <i className={`bi ${m.icon}`}></i>
                <h3>{m.title}</h3>
                <p className={styles.quoteLink}>{m.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Get Dedicated Implementation Support!</h3>
              <p>Our specialists have implemented Dynamics 365 in businesses of all sizes.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Request a Call Back &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Methodology (replaces the phase slider; every phase stays in the HTML) ===== */}
      <section id="methodology" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Our Dynamics 365 Implementation Methodology</h2>
              <p>We adapt standard yet custom approach by embracing Microsoft&apos;s Sure Step Methodology to streamline your business processes, ensuring maximum security and transparency.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Dynamics 365 implementation phases">
              {phases.map((p, i) => (
                <button
                  key={p.title}
                  type="button"
                  role="tab"
                  id={`phase-tab-${i}`}
                  aria-selected={activePhase === i}
                  aria-controls={`phase-panel-${i}`}
                  className={`${styles.modTab} ${activePhase === i ? styles.modTabActive : ""}`}
                  onClick={() => setActivePhase(i)}
                >
                  <i className={`bi ${p.icon}`} aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {p.title}
                </button>
              ))}
            </div>
            <div>
              {phases.map((p, i) => (
                <div
                  key={p.title}
                  id={`phase-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`phase-tab-${i}`}
                  className={`${styles.modPanel}${activePhase === i ? "" : " d-none"}`}
                >
                  <h3>{p.title}</h3>
                  <p className={styles.quoteLink}>{p.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Dynamics Square ===== */}
      <section id="why-us" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why Dynamics Square for Implementation Services Applications</h2>
            </div>
          </div>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {reasons.map((r) => (
              <article className={styles.reasonCard} key={r.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${r.icon}`}></i></span>
                  <h3>{r.title}</h3>
                </div>
                <p className={styles.quoteLink}>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Dynamics 365 Implementation Service?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Talk To Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
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

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />
    </>
  );
};

export default ImplementationServices;
