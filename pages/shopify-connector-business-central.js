import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageSeo from "../components/PageSeo";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import RelatedLinks from "../components/bcTwo/RelatedLinks";

const bcFunctions = [
  { title: "Inventory Management", text: <>Manage entire inventory to <Link href="/products/dynamics-365-business-central/warehouse-management/">control the movement of stocks</Link> to eliminate any chances of out-of-stock or overstocking scenarios with real-time data insights.</> },
  { title: "Order Fulfilment", text: <>Track and automate the <Link href="/products/dynamics-365-business-central/sales-order-management/">process of order fulfilment</Link> to ensure fast and accurate delivery to the right customer on time.</> },
  { title: "Financial Management", text: <><Link href="/products/dynamics-365-business-central/financial-management/">Maintain your financial transactions</Link> to keep track of all your finances. Generate invoices, build reports, and accelerate financial performance.</> },
];

const shopifyFunctions = [
  { title: "Build Store with Ease", text: "Build an attractive and beautiful online store with drag-and-drop tools and endless design customisation features." },
  { title: "Seamless Product Management", text: "Manage your products along with their existing inventory for real-time product information. Also, you can edit and modify the product details with ease." },
  { title: "Simplified Payment Processing", text: "Accept global payments to run an international business with full data encryption and security to maximise revenue." },
];

const connectorFeatures = [
  { icon: "bi-arrow-left-right", title: "BI-Directional Sync", text: "Due to bi-directional connectivity, you can receive and process orders for on-time delivery from any solution. It will eliminate any error that can occur through manual order processing." },
  { icon: "bi-boxes", title: "Streamline Stock Management", text: "Get accurate inventory updates for both solutions, eliminating dependency on one solution or platform. It will ensure accurate inventory levels and proper visibility across stocks." },
  { icon: "bi-person-heart", title: "Streamlined Customer Experience", text: "Capture the customer's insights to give them personalised offers and perform faster order processing. The data in Shopify will automatically be available in BC due to a two-way connection." },
];

const caseStudies = [
  {
    title: "Case Study 1:",
    challenge: "A clothing store was unable to get inventory updates in real-time between their POS system and Shopify Store. This was leading them to a loss due to stock-outs and missed sales leads.",
    solution: "The integration of Shopify with Business Central synced inventory levels automatically across platforms. It provided them with real-time stock visibility and avoided any chances of overstocking or stocking out. This reduced the chances of stock-outs and provided them with enhanced sales opportunities.",
  },
  {
    title: "Case Study 2:",
    challenge: "A personalised jewellery brand is unable to get clear visibility across the buying patterns of customers and their behaviour. It is becoming difficult for them to pitch customers with personalised offers through targeted marketing campaigns.",
    solution: <>The integration of Shopify with Business Central enables businesses to collect customer data in real-time along with a complete customer profile in Business Central. It allows the business to analyse customer interactions and build <Link href="/products/microsoft-dynamics-365-marketing/">personalised marketing campaigns</Link>, leading to enhanced sales, a better customer experience, and more revenue.</>,
  },
  {
    title: "Case Study 3:",
    challenge: <>An electronics business is facing delays in processing online orders due to manual data entry in their <Link href="/products/microsoft-dynamics-erp/">ERP system</Link>. This critical issue is leading the business towards low order fulfilment rates and unsatisfied customers.</>,
    solution: "The integration of Business Central with Shopify through Shopify Connector has solved the issue they were facing. Now, they can fulfil orders on time, eliminating the need to enter manual data. Also, the processing time has increased, and customers are happy with the service they are offering.",
  },
];

const benefits = [
  { img: "/img/Increased-Sales-sofi.png", title: "Increased Sales", text: "Automation and streamlined order processing lead businesses to generate more sales with their existing resources." },
  { img: "/img/_Lowered-Overall-Costs.png", title: "Lowered Overall Costs", text: "Elimination of manual data entry and reduction of human errors count for saving time as well as money." },
  { img: "/img/_Enhanced-Inventory-Management.png", title: "Enhanced Inventory Management", text: "Get real-time visibility of the entire inventory and track the stock status to perform proper order fulfilment." },
  { img: "/img/Increased-Customer-Satisfaction.png", title: "Increased Customer Satisfaction", text: "Captured customer profiles and data lead the business to contact the customer with a personalised approach, resulting in better customer satisfaction." },
  { img: "/img/_Centralises-Data.png", title: "Centralises Data", text: <>Leverage the power of <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud data deployment</Link> to centralise the data available in Shopify and Business Central.</> },
  { img: "/img/_Improved-Data-Accuracy-sofi.png", title: "Improved Data Accuracy", text: "Accurate data synchronisation drives the business to lower the rate of errors to achieve a lower complaint and return rate." },
];

// No FAQ existed on this page; answers below are taken from the page copy.
const faqs = [
  { id: 1, question: "What is the Shopify Connector for Business Central?", answer: "<p>The Shopify Connector is an application that can establish a connection between Business Central and Shopify with ease. It builds a reciprocating connection between solutions so that an update in one of the solutions will take place in both and in real-time.</p>" },
  { id: 2, question: "How do I access the Shopify Connector?", answer: "<p>With a full-user Business Central licence, a user can access Shopify Connector from Microsoft’s marketplace. After downloading, one can proceed to establish a connection by entering the necessary information, like APIs or access keys.</p>" },
  { id: 3, question: "What features do you get after integrating Shopify with Business Central?", answer: "<p>Some of the major features you will be getting after successful integration are BI-Directional Sync, Streamline Stock Management and Streamlined Customer Experience. The integration of Shopify with Business Central will eliminate manual ways of entering data into the system while automating different core e-commerce processes.</p>" },
  { id: 4, question: "What are the benefits of the Shopify Connector?", answer: "<p>The integration of Shopify with Business Central features numerous benefits for businesses, including Increased Sales, Lowered Overall Costs, Enhanced Inventory Management, Increased Customer Satisfaction, Centralises Data and Improved Data Accuracy.</p>" },
  { id: 5, question: "What role does Business Central play for an e-commerce business?", answer: "<p>For e-commerce companies, the implementation of Business Central acts as a backend solution that manages all back-office functions with full accuracy. It can also handle inventory management, order fulfilment and financial management.</p>" },
];

const relatedLinks = [
  { href: "/sana-commerce-for-dynamics-365-business-central/", title: "Sana Commerce for Business Central", icon: "bi-shop" },
  { href: "/magento-dynamics-365-integration/", title: "Magento Dynamics 365 Integration", icon: "bi-cart3" },
  { href: "/d365-business-central-support/", title: "Business Central Support", icon: "bi-headset" },
  { href: "/continia-document-capture-with-business-central/", title: "Continia Document Capture", icon: "bi-file-earmark-text" },
  { href: "/wms-for-business-central/", title: "WMS for Business Central", icon: "bi-box-seam" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "business-central", label: "Business Central" },
  { id: "shopify", label: "Shopify" },
  { id: "shopify-connector", label: "Shopify Connector" },
  { id: "case-studies", label: "Case Studies" },
  { id: "benefits", label: "Benefits" },
  { id: "faqs", label: "FAQs" },
];

const ShopifyConnectorBusinessCentral = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeCase, setActiveCase] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title="Shopify Connector for Business Central & Integration | Dynamics Square UK"
        description="Streamline your operations with our Shopify Connector for Business Central, enabling seamless integration and efficient management. Boost your productivity now!"
        image="https://www.dynamicssquare.co.uk/img/Shopify-Connector-banner.png"
        imageAlt="Shopify Connector for Microsoft Dynamics 365 Business Central"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Shopify Connector for Business Central</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Shopify Connector for Microsoft Dynamics 365 Business Central</h1>
              <p className={styles.heroLead}>Digitalise your commerce business to serve global customers, earn maximised profits, and simplify your business operations with Shopify Connector for Microsoft Dynamics 365 Business Central.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Get Started Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/Shopify-Connector-banner.png" alt="Shopify Connector for Microsoft Dynamics 365 Business Central" width={1224} height={672} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Get Started Now!" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.introCol}`}>
              <h2 className={styles.h2}>Uplift your E-commerce Business with the Collaboration of Shopify and Business Central</h2>
              <p className={styles.lead}>In a world of sheer market competition, the success of a business depends on the systematic approach of leveraging technologies to simplify business operations and make data-driven decisions for better output. The collaboration of Dynamics 365 Business Central and Shopify can empower you to maximise profits and achieve your goals on time.</p>
              <p>You can leverage the capabilities of Shopify Connector to easily <Link href="/products/microsoft-dynamics-365/integration/">connect Shopify with Business Central</Link>, enabling you to streamline your business operations while supercharging your e-commerce game.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Business Central ===== */}
      <section id="business-central" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Business Central: Your all-in-one Business Management Solution</h2>
              <p><Link href="/products/dynamics-365-business-central/">Microsoft Dynamics 365 Business Central</Link> is a powerful yet flexible solution with advanced tools and capabilities to manage a business from scratch. D365 BC is a cloud-based solution that can streamline different processes, centralise the entire database, offer collaboration opportunities, and empower you to make real-time decisions.</p>
              <p>For e-commerce companies, the <Link href="/dynamics-365-business-central-implementation/">implementation of Business Central</Link> acts as a backend solution that manages all back-office functions with full accuracy. However, it can perform other functions as well, like:</p>
              <ul className={styles.capList}>
                {bcFunctions.map((f) => (
                  <li key={f.title}>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/all-in-one-bc.png" alt="Business Central all-in-one business management solution for inventory, orders and finance" width={950} height={545} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shopify ===== */}
      <section id="shopify" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/Interactive-Shopfront.png" alt="Shopify: Your Interactive Shopfront for Global Customers" width={946} height={529} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Shopify: Your Interactive Shopfront for Global Customers</h2>
              <p>Shopify is an interactive and user-friendly platform that empowers businesses to build and deploy e-commerce stores within minutes. It enables you to list your products and sell them to global customers in no time.</p>
              <p>With pre-built templates, you can leverage the drag-and-drop feature to build your store, even if you are a beginner Shopify user. Some of its core functions are:</p>
              <ol className={styles.numList}>
                {shopifyFunctions.map((f) => (
                  <li key={f.title}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2d2640", marginBottom: 6 }}>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shopify Connector ===== */}
      <section id="shopify-connector" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Automate Your E-Commerce with the Shopify Connector</h2>
              <p>The Shopify Connector is an application that can establish a connection between Business Central and Shopify with ease. It builds a reciprocating connection between solutions so that an update in one of the solutions will take place in both and in real-time.</p>
              <p>With a full-user <Link href="/products/dynamics-365-business-central/pricing-licensing/">Business Central licence</Link>, a user can access Shopify Connector from Microsoft’s marketplace. After downloading, one can proceed to establish a connection by entering the necessary information, like APIs or access keys.</p>
              <p>The integration of Shopify with Business Central will eliminate manual ways of entering data into the system while automating different core e-commerce processes. Some of the major features you will be getting after successful integration are:</p>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/Automate-Your-E-Commerce.png" alt="Streamline your e-commerce with Shopify Connector" width={870} height={513} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {connectorFeatures.map((f) => (
              <article className={styles.reasonCard} key={f.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${f.icon}`}></i></span>
                  <h3>{f.title}</h3>
                </div>
                <p>{f.text}</p>
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
              <h3>Streamline your e-commerce with Shopify Connector</h3>
              <p>Simplify business operations, get valuable insights, and achieve consistent growth in tough competition with expert guidance.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Contact a Dynamics 365 Integration Expert! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Case Studies ===== */}
      <section id="case-studies" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Successful Shopify Integration with Business Central</h2>
              <p>We have integrated Shopify Connector into different industries to resolve the complex challenges and push them towards growth. Some of the case studies are:</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Shopify integration case studies">
              {caseStudies.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  role="tab"
                  id={`case-tab-${i}`}
                  aria-selected={activeCase === i}
                  aria-controls={`case-panel-${i}`}
                  className={`${styles.modTab} ${activeCase === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveCase(i)}
                >
                  <i className="bi bi-journal-text" aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {c.title.replace(/:$/, "")}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all case study content is crawlable */}
              {caseStudies.map((c, i) => (
                <div
                  key={c.title}
                  id={`case-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`case-tab-${i}`}
                  className={`${styles.modPanel}${activeCase === i ? "" : " d-none"}`}
                >
                  <h3>{c.title}</h3>
                  <p className={`${styles.quoteLink} mb-3`}><strong>Challenge:</strong> {c.challenge}</p>
                  <p className={styles.quoteLink}><strong>Solution:</strong> {c.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Benefits of Shopify Connector</h2>
              <p>The integration of Shopify with Business Central features numerous benefits for businesses. Some of the major benefits are:</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {benefits.map((b) => (
              <article className={styles.capCard} key={b.title}>
                <Image src={b.img} alt="" aria-hidden="true" width={104} height={104} className={styles.capIcon} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
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
                <h2 className={styles.h2}>FAQs</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Get Started Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default ShopifyConnectorBusinessCentral;
