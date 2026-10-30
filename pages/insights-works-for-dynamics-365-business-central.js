import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import RelatedLinks from "../components/bcTwo/RelatedLinks";
import PageSeo from "../components/PageSeo";

const features = [
  { icon: "bi-plug", title: "Full integration with Business Central", text: <>Business Central is a flexible <Link href="/products/microsoft-dynamics-erp/">ERP solution</Link> built specifically for SMBs, irrespective of the industry. With its advanced capabilities, it easily integrates with various solutions to enhance the overall efficiency. Insights Works is one such integration that fully integrates with Business Central, resulting in enhanced productivity and outputs.</> },
  { icon: "bi-graph-up", title: "Real-time Reporting", text: <>It lets the staff track inventory in real-time, ensuring an efficient flow of goods from warehouse to customer. <Link href="/products/microsoft-power-bi/">Real-time reporting</Link> enables the concerned authority to calculate the cost and create a strategy accordingly. Also, it ensures users can track a process in real time and make instant decisions whenever required.</> },
  { icon: "bi-box-seam", title: "Ensure Accurate Inventory", text: "Ensuring accurate inventory is a must for businesses to offer great delivery services. Insight Works tracks and calculates the inventory accurately. It manages the work-in-progress and matches it with the existing inventory to give accurate available inventory numbers." },
  { icon: "bi-graph-up-arrow", title: "Enhanced ROI", text: <>When you maintain the inventory and warehouse requirements accurately, Insight Works with Business Central will help you maximise ROI while optimising the existing <Link href="/products/dynamics-365-business-central/supply-chain-management/">inventory operations</Link>.</> },
];

const warehouseFeatures = [
  { icon: "bi-gear-wide-connected", text: "Easily conforms to the Business Central configuration." },
  { icon: "bi-phone", text: "Manage all inventory using a handheld device." },
  { icon: "bi-upc-scan", text: "Tracks serial number and lot number of each movement." },
  { icon: "bi-window", text: "Comes with a responsive and interactive user interface." },
  { icon: "bi-file-earmark-text", text: "Using a handheld device, scan all sales documents." },
];

const apps = [
  {
    icon: "bi-building-gear",
    title: "Shop Floor Insights",
    text: <>Shop Floor Insights is a <Link href="/products/dynamics-365-business-central/manufacturing-management/">Manufacturing Execution System</Link> solution that allows employees to capture floor data using barcode scanners. With digitalised data, it eliminates the chances of data entry errors, resulting in enhanced floor efficiency while tracking the entire operational data.</>,
    items: [
      "Automate data entry using barcodes.",
      "Tracks employee attendance and calculates overtime, too.",
      "Offers data insights for enhanced productivity.",
      "Eliminate the manual time collection costs, resulting in reduced labour costs.",
      "Tracks the sources of rework and helps reduce it.",
    ],
  },
  {
    icon: "bi-clipboard-data",
    title: "Advanced Inventory Count",
    text: "The Advanced Inventory Count add-on enables users to count inventory and eliminates the chances of errors associated with manual calculation. Also, it does carry historical data about a particular product before you start counting. For inventory without a proper barcode, it allows users to process counting and resolutions without any hassle.",
    items: [
      "It supports all kinds of inventory counts, from direct pick to optional bins.",
      "Easy to create count sheets based on desired parameters.",
      "Make sure to offer accurate count data.",
      "Enables multi-user data entry.",
      "Provides interactive user interface with integrations.",
    ],
  },
  {
    icon: "bi-truck",
    title: "Dynamic Ship",
    text: <>Dynamic Ship streamlines the entire <Link href="/products/dynamics-365-business-central/sales-order-management/">shipment process</Link>, eliminating the manual tasks of tracking and shipment management. It lets the employees scan the package directly and forward it for further shipment processes, which leads to huge time-saving opportunities.</>,
    items: [
      "Provides shipment data in real-time.",
      "Easily integrates with 100+ global carriers.",
      "Offers detailed information about a product.",
      "Comes with a simple user interface and easy functionality.",
      "Enables package tracking at all levels of delivery.",
    ],
  },
];

// Added FAQs: every answer is taken from facts already stated on this page.
const faqs = [
  {
    id: 1,
    question: "What is Insight Works?",
    answer: "<p>Insight Works is a set of 15 applications, of which four are flagship applications and the remaining are available for free. It is a solution built to align with Microsoft Dynamics 365 Business Central and Microsoft Dynamics NAV, and its applications easily integrate with Business Central to offer great warehouse management capabilities and functionalities.</p>",
  },
  {
    id: 2,
    question: "Which Insight Works applications integrate with Business Central?",
    answer: "<p>Some of the intelligent applications include Fixed Asset Count, DocXtender, Dynamic Express, WMS Express, Warehouse Insight, Shop Floor Data Collection, and Barcode Generator.</p>",
  },
  {
    id: 3,
    question: "What does Warehouse Insights do?",
    answer: "<p>By providing an accurate mobile device with barcode integration, Warehouse Insights eliminates the cause of manual inventory tracking and incorrect warehouse movements. It includes NAV location and item tracking configuration to accurately process all warehouse transactions.</p>",
  },
  {
    id: 4,
    question: "What is Shop Floor Insights?",
    answer: "<p>Shop Floor Insights is a Manufacturing Execution System solution that allows employees to capture floor data using barcode scanners. It automates data entry using barcodes, tracks employee attendance and calculates overtime, and tracks the sources of rework.</p>",
  },
  {
    id: 5,
    question: "How many carriers does Dynamic Ship integrate with?",
    answer: "<p>Dynamic Ship easily integrates with 100+ global carriers. It streamlines the entire shipment process, provides shipment data in real-time, and enables package tracking at all levels of delivery.</p>",
  },
  {
    id: 6,
    question: "How does Insight Works help ensure accurate inventory?",
    answer: "<p>Insight Works tracks and calculates the inventory accurately. It manages the work-in-progress and matches it with the existing inventory to give accurate available inventory numbers.</p>",
  },
];

const relatedLinks = [
  { href: "/dynamics-365-business-central-implementation/", title: "Business Central Implementation", icon: "bi-gear" },
  { href: "/continia-for-dynamics-365-business-central/", title: "Continia for Business Central", icon: "bi-puzzle" },
  { href: "/d365-business-central-support/", title: "Business Central Support", icon: "bi-headset" },
  { href: "/continia-document-capture-with-business-central/", title: "Continia Document Capture", icon: "bi-file-earmark-text" },
  { href: "/shopify-connector-business-central/", title: "Shopify Connector for Business Central", icon: "bi-bag" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "warehouse-insights", label: "Warehouse Insights" },
  { id: "apps", label: "Insight Works Apps" },
  { id: "faqs", label: "FAQs" },
];

const Bcinsights = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeApp, setActiveApp] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title="Insight Works for Dynamics 365 Business Central"
        description="Integrate Insights Works with Business Central to optimise your entire order fulfilment process along with streamlining warehouse operations."
        image="/img/insightworks.png"
        imageAlt="Insights Works for Dynamics 365 Business Central"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Insights Works for Dynamics 365 Business Central</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Insights Works for Dynamics 365 Business Central</h1>
              <p className={styles.heroLead}>Optimise order fulfilment process, manage counter sales, and streamline warehouse operations by integrating Insights Works</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Integrate Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/insightworks.png" alt="Insights Works for Dynamics 365 Business Central" width={991} height={666} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule demo" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.introCol}`}>
              <h2 className={styles.h2}>Enhance Warehouse Efficiency while leveraging Inventory Management</h2>
              <p className={styles.lead}>When it comes to streamlining the entire warehouse operations of a business, whether production, manufacturing, or <Link href="/industries/business-central-for-distribution/">distribution</Link>, no one is superior to Insight Works. As a market leader, it provides seamless capabilities for managing and tracking stocks without error. Insight Works is a solution built to align with <Link href="/products/dynamics-365-business-central/">Microsoft Dynamics 365 Business Central</Link> and <Link href="/products/microsoft-dynamics-nav/">Microsoft Dynamics NAV</Link>.</p>
              <p>Insight Works is a set of 15 applications, of which four are flagship applications and the remaining are available for free. These applications easily integrate with Business Central to offer great warehouse management capabilities and functionalities. Some of the intelligent applications include Fixed Asset Count, DocXtender, Dynamic Express, WMS Express, Warehouse Insight, Shop Floor Data Collection, and Barcode Generator.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Automate inventory management, collect floor insights, and improve your operational productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Optimise Warehouse Operations with Intelligent Insight Works Apps</h2>
              <p>Warehouse requirements are subject to change with market fluctuations as well as customer demands. To deal with sudden changes, you require an <Link href="/wms-for-business-central/">intelligent warehouse management application</Link> like Insights Works that can accept the abrupt changes and offer an uninterrupted service. It offers various features, among which some are listed below:</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {features.map((f) => (
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
              <h3>Get accurate inventory levels, track stocks, enhance ROI, and avail a reliable solution for your warehouse needs with Insights Works</h3>
              <p>Want to explore more possibilities with Insight Works?</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Schedule demo &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Warehouse Insights ===== */}
      <section id="warehouse-insights" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Warehouse Insights</h2>
              <p>By providing an accurate mobile device with barcode integration, Warehouse Insights eliminates the cause of manual inventory tracking and incorrect warehouse movements. It includes NAV location and item tracking configuration to accurately process all <Link href="/products/dynamics-365-business-central/warehouse-management/">warehouse transactions</Link>. Some of its features are:</p>
            </div>
          </div>
          <ul className={`${styles.processGrid} mt-4 mb-0`}>
            {warehouseFeatures.map((w) => (
              <li key={w.text}><i className={`bi ${w.icon}`}></i>{w.text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Insight Works Apps (vertical tabs) ===== */}
      <section id="apps" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className={styles.modTabs} style={{ marginTop: 0 }}>
            <div className={styles.modTabList} role="tablist" aria-label="Insight Works apps">
              {apps.map((a, i) => (
                <button
                  key={a.title}
                  type="button"
                  role="tab"
                  id={`iw-tab-${i}`}
                  aria-selected={activeApp === i}
                  aria-controls={`iw-panel-${i}`}
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
                  id={`iw-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`iw-tab-${i}`}
                  className={`${styles.modPanel}${activeApp === i ? "" : " d-none"}`}
                >
                  <h3>{a.title}</h3>
                  <p className={styles.quoteLink}>{a.text}</p>
                  <p className="mt-3 mb-0"><strong>Some of its features are:</strong></p>
                  <ul className={styles.capList}>
                    {a.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
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
                <h2 className={styles.h2}>Have you got questions about Insight Works?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Integrate Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={faqs} initialCount={6} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />
    </>
  );
};

export default Bcinsights;
