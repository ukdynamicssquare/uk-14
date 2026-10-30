import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import RelatedLinks from "../components/bcTwo/RelatedLinks";
import PageSeo from "../components/PageSeo";

const reasons = [
  { img: "/img/intelegent-ocr.png", alt: "Intelligent OCR", title: "Intelligent OCR", text: "Being a smart solution, it captures the text written on the document and submits it on the digital sheet." },
  { img: "/img/automation.png", alt: "automation", title: "Automation Enabled", text: "Automation lets you eliminate the data entry of manual and recurring documents, resulting in enhanced productivity." },
  { img: "/img/automatic-approval.png", alt: "Automatic Approval", title: "Automatic Approval", text: "With preset parameters, you can automate the approval of quotes, tasks, and processes." },
  { img: "/img/history.png", alt: "history", title: "Document History", text: "With access to digital archive storage, you can access the desired document along with the history of data transactions." },
];

const keyFeatures = [
  { title: "Digital Data Capture", text: "It eliminates the tedious tasks of manual data entry, resulting in no manual errors while saving a lot of employee time." },
  { title: "Order Matching", text: <>Equipped with <Link href="/products/dynamics-365-business-central/supply-chain-management/">three-way matching</Link>, you can easily match the data and eliminate the source of errors automatically.</> },
  { title: "Purchase Contracts", text: "With Continia, you can make sure to provide correct invoicing, manage all contracts, and save a lot of money." },
];

// Added FAQs: every answer is taken from facts already stated on this page.
const faqs = [
  {
    id: 1,
    question: "What is Continia Document Capture for Dynamics 365 Business Central?",
    answer: "<p>Continia Document Capture is a document capturing solution built on award-winning OCR technology. Used with Dynamics 365 Business Central, it helps you automate data entry, improve accuracy, eliminate errors, and scan documents with the utmost quality.</p>",
  },
  {
    id: 2,
    question: "How many languages can Continia Document Capture scan documents in?",
    answer: "<p>Document Capture can scan documents irrespective of their geolocation in more than 180 languages, sufficient for global business operations.</p>",
  },
  {
    id: 3,
    question: "What types of documents can Continia Document Capture capture?",
    answer: "<p>It can easily capture documents, including personal data, invoices, payments, quotes, and much more.</p>",
  },
  {
    id: 4,
    question: "How does Continia OCR work with Business Central?",
    answer: "<p>It accurately fetches the data from the scanned documents, analyses the entire document, and places the values in the preferred fields of Microsoft Dynamics 365 Business Central. You can also view the entire activity of previously scanned documents using digital archive storage and access the required data whenever needed.</p>",
  },
  {
    id: 5,
    question: "Which processes can Continia Document Capture automate?",
    answer: "<p>It can automate most of the accounting operations, including invoice processing, quote management, electronic invoicing, and streamlining disrupted operations. With preset parameters, you can also automate the approval of quotes, tasks, and processes.</p>",
  },
  {
    id: 6,
    question: "Is Continia OCR suitable for small and large businesses?",
    answer: "<p>Yes. Continia OCR is efficient, user-friendly, and business-oriented for all businesses, whether small or large.</p>",
  },
];

const relatedLinks = [
  { href: "/continia-expense-management/", title: "Continia Expense Management", icon: "bi-receipt" },
  { href: "/dynamics-365-business-central-implementation/", title: "Business Central Implementation", icon: "bi-gear" },
  { href: "/d365-business-central-support/", title: "Business Central Support", icon: "bi-headset" },
  { href: "/insights-works-for-dynamics-365-business-central/", title: "Insight Works for Business Central", icon: "bi-graph-up" },
  { href: "/wms-for-business-central/", title: "WMS for Business Central", icon: "bi-box-seam" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "scan-capture", label: "Scan, Capture & Analyse" },
  { id: "why-continia", label: "Why Continia OCR" },
  { id: "key-features", label: "Key Features" },
  { id: "faqs", label: "FAQs" },
];

const ContiniaDocumentCapture = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title="Continia Document Capture with Business Central"
        description="Achieve superior document scanning quality and ensure error-free data entry with automation by utilising Continia Document Capture with Dynamics 365 Business Central."
        image="/img/Continia-Document.png"
        imageAlt="Continia Document Capture"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/continia-for-dynamics-365-business-central/">Continia for Business Central</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Continia Document Capture</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Continia Document Capture with Business Central</h1>
              <p className={styles.heroLead}>Automate invoice processing and data entry in Dynamics 365 Business Central with Continia Document Capture. Its OCR technology scans invoices, quotes and payments, then places the captured values straight into Business Central.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Let&apos;s Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/Continia-Document.png" alt="Continia Document Capture" width={960} height={666} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Request a Demo" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className={`row g-0 align-items-stretch ${styles.overviewPanel}`}>
            <div className={`col-lg-5 ${styles.overviewHead}`}>
              <i className="bi bi-file-earmark-text" aria-hidden="true"></i>
              <h2 className={styles.h2}>Continia Document Capture for Dynamics 365 Business Central</h2>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Request a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className={`col-lg-7 ${styles.overviewBody}`}>
              <p className={`${styles.lead} ${styles.quoteLink}`}>Automate data entry, improve accuracy, eliminate errors, and scan documents with the utmost quality using Continia Document Capture with <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link>. Built on award-winning OCR technology, Document Capture can scan documents irrespective of their geolocation in more than 180 languages, sufficient for global business operations. It can easily capture documents, including personal data, invoices, payments, quotes, and much more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Scan, Capture, Analyse ===== */}
      <section id="scan-capture" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/scan-capture-analyse.png" alt="Scan, Capture, and Analyse Document Efficiently" width={530} height={545} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Scan, Capture, and Analyse Document Efficiently</h2>
              <p>After integrating Continia OCR with Business Central, you have a reliable and strong solution to manage all documents. Being a powerful document capturing solution, it saves a lot of time and effort when it comes to fetching numbers and values from a document. Because a minor mistake can lead you into complex and critical situations that no one wants to face.</p>
              <p>Like, it is so powerful that it can automate most of the <Link href="/products/dynamics-365-business-central/financial-management/">accounting operations</Link>, including invoice processing, <Link href="/products/dynamics-365-business-central/sales-order-management/">quote management</Link>, electronic invoicing, streamlining disrupted operations, and much more.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark}`}>It accurately fetches the data from the scanned documents, analyses the entire document, and places the values in the preferred fields of Microsoft Dynamics 365 Business Central. Also, you can view the entire activity of previously scanned documents using digital archive storage and access the required data whenever needed. This makes the Continia OCR solution efficient, user-friendly, and business-oriented for all businesses, whether small or large.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Continia OCR ===== */}
      <section id="why-continia" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why You Should Choose Continia OCR?</h2>
            </div>
          </div>
          <div className={`${styles.capGrid} ${styles.capGrid4}`}>
            {reasons.map((r) => (
              <article className={styles.capCard} key={r.title}>
                <Image src={r.img} alt={r.alt} width={98} height={98} className={styles.capIcon} />
                <h3>{r.title}</h3>
                <p>{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Key Features ===== */}
      <section id="key-features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Key Features of Continia Document Capture</h2>
              <ol className={styles.numList}>
                {keyFeatures.map((f) => (
                  <li key={f.title}>
                    <div>
                      <h3 style={{ fontSize: 19, marginBottom: 6 }}>{f.title}</h3>
                      <p>{f.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/contonia-BC-addonn.png" alt="Continia Document Capture" width={1085} height={656} sizes="(max-width: 991px) 100vw, 560px" />
              </div>
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
                <h2 className={styles.h2}>Have you got questions about Continia Document Capture?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Request a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default ContiniaDocumentCapture;
