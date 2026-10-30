import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Azure Machine Learning | Dynamics Square";
const PAGE_DESC = "Develop and deploy enterprise-level Machine Learning Models accurately and instantly to support your process optimisation and critical business practices.";

const benefits = [
  { icon: "bi-cpu", title: "Streamlined & Automated ML", text: "Develop efficient ML models instantly to ensure effective analysis, predictions, and forecasting. With the help of model interpretability, understand the process flow of models' development." },
  { icon: "bi-hand-index", title: "Seamless Functionality", text: "Leveraging drag-and-drop and seamless features, enable smoother data transformation, streamlined model training, and easy-to-use data or process evaluation." },
  { icon: "bi-shield-lock", title: "Enterprise-Grade Security", text: <>Build and deploy highly secured ML models when you implement Machine Learning on <Link href="/products/microsoft-azure/">Azure</Link>. In terms of security features, it includes network isolation, private IPs, resource control, etc.</> },
  { icon: "bi-plug", title: "Simplified Integration", text: <>By leveraging built-in integration along with other simplified integration such as <Link href="/products/microsoft-power-bi/">Power BI</Link>, Azure Data Lake, Azure Synapse Analytics, and Azure Cognitive research, etc., boost your production line and impact growth strategy.</> },
  { icon: "bi-cloud", title: "Multi-Network Support", text: "Ensure customised workflow by deploying your Machine Learning Models whether on-premises, multi-cloud equipped environment, or Azure IoT Edge." },
];

const features = [
  { icon: "bi-code-square", title: "Develop & Train ML Models", text: "Leveraging Studio development enables accessing and utilising integrated tools along with optimal support for frameworks and libraries." },
  { icon: "bi-speedometer2", title: "Operational Efficiency", text: "Boost your operational efficiency by leveraging single-click functionality while deploying and managing your ML models. With effective utilisation of MLOps, govern, manage, and scale your deployed models." },
  { icon: "bi-arrows-angle-expand", title: "Scalable ML Solutions", text: <>With built-in <Link href="/ai-solutions/">AI algorithms</Link>, monitor &amp; control your data flow, enable operational transparency, track &amp; debug errors in your ML models, drive accuracy while deploying ML models, and more.</> },
  { icon: "bi-diagram-3", title: "Streamline Your Workloads", text: "By leveraging built-in global compliances and governance, run your entire ML workloads anywhere. Ensure implementing your Machine Learning innovations in a highly secured hybrid environment." },
];

// The page had no FAQ section; answers are taken from the copy above.
const faqs = [
  { id: 1, question: "What is Azure Machine Learning?", answer: "<p>Azure Machine Learning lets you develop and deploy enterprise-level Machine Learning Models accurately and instantly to support your process optimisation and critical business practices, scale your MLOps (Machine Learning Operations), and optimise operational efficiency.</p>" },
  { id: 2, question: "Where can Azure Machine Learning models be deployed?", answer: "<p>You can deploy your Machine Learning Models on-premises, on-cloud, in a multi-cloud equipped environment, or at Azure IoT Edge.</p>" },
  { id: 3, question: "What security features does Azure Machine Learning include?", answer: "<p>Azure Machine Learning lets you build and deploy highly secured ML models. Its security features include network isolation, private IPs and resource control.</p>" },
  { id: 4, question: "Which services does Azure Machine Learning integrate with?", answer: "<p>Along with its built-in integration, Azure Machine Learning integrates with services such as Power BI, Azure Data Lake and Azure Synapse Analytics.</p>" },
  { id: 5, question: "How does Azure Machine Learning support MLOps?", answer: "<p>It offers single-click functionality for deploying and managing your ML models. With effective utilisation of MLOps, you can govern, manage, and scale your deployed models.</p>" },
  { id: 6, question: "Can I build ML models without extensive coding?", answer: "<p>Yes. Drag-and-drop features enable smoother data transformation, streamlined model training, and easy-to-use data or process evaluation.</p>" },
];

const relatedLinks = [
  { href: "/products/azure-iot-internet-of-things/", title: "Azure IoT", icon: "bi-broadcast" },
  { href: "/products/azure-digital-twins/", title: "Azure Digital Twins", icon: "bi-boxes" },
  { href: "/ai-solutions/microsoft-foundry/", title: "Microsoft Foundry", icon: "bi-boxes" },
  { href: "/ai-solutions/microsoft-fabric/", title: "Microsoft Fabric", icon: "bi-database" },
  { href: "/ai-solutions/copilot-studio/", title: "Microsoft Copilot Studio", icon: "bi-robot" },
];

const sections = [
  { id: "what-is-azure-ml", label: "What is Azure ML?" },
  { id: "benefits", label: "Benefits" },
  { id: "features", label: "Features" },
  { id: "faqs", label: "FAQs" },
];

const AzureMachineLearning = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="/img/azure-machine-learning-banner.jpg"
        imageAlt="Azure Machine Learning"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Azure Machine Learning</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Azure Machine Learning</h1>
              <p className={styles.heroLead}>Deploy Machine Learning Models quickly and effortlessly, faster time to market, streamline Machine Learning models deployment and management practices with Azure Machine Learning.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/azure-machine-learning-banner.svg" alt="What Is Azure Machine Learning?" width={1024} height={586} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== What is Azure ML ===== */}
      <section id="what-is-azure-ml" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className={`row g-0 align-items-stretch ${styles.overviewPanel}`}>
            <div className={`col-lg-5 d-flex flex-column justify-content-center align-items-start ${styles.overviewHead}`}>
              <i className="bi bi-cpu" aria-hidden="true"></i>
              <h2 className={styles.h2}>What Is Azure Machine Learning?</h2>
            </div>
            <div className={`col-lg-7 ${styles.overviewBody}`}>
              <p className={styles.lead}>Develop and deploy enterprise-level Machine Learning Models accurately and instantly to support your process optimisation and critical business practices. Accelerate your model deployment with Azure Machine Learning Services, scale your MLOps (Machine Learning Operations), optimise operational efficiency, and your operational costing while enabling high end-security to ensure uninterrupted and efficient business flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Azure Machine Learning Benefits</h2>
              <p className={styles.quoteLink}>With Azure Machine Learning solutions, enable your deployment team to seamlessly prepare data sets, efficiently develop Machine Learning models, bring innovation in your critical business practices wrapped with enterprise-grade security and reliability. Streamline your entire Machine Learning models deployment whether on-premises, on-cloud, or at <Link href="/products/azure-iot-edge/">Azure IoT Edge</Link>.</p>
            </div>
          </div>
          <div className={styles.bento}>
            {benefits.map((b, i) => (
              <div className={`${styles.bentoCard} ${i === 0 ? styles.bentoHero : ""}`} key={b.title}>
                <i className={`bi ${b.icon}`}></i>
                <h3 className={styles.bentoWord}>{b.title}</h3>
                <p className={styles.quoteLink}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Azure Machine Learning Features</h2>
              <p className={styles.lead}>How Azure Machine Learning Can Improve Your Operational Efficiency &amp; Production Line</p>
            </div>
          </div>
          <div className={`${styles.capGrid} ${styles.capGrid4}`}>
            {features.map((f) => (
              <article className={styles.capCard} key={f.title}>
                <i className={`bi ${f.icon}`}></i>
                <h3>{f.title}</h3>
                <p className={styles.quoteLink}>{f.text}</p>
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
              <h3>Connect for Expert Solution</h3>
              <p>Let&apos;s connect to understand and reveal your business potentials and expansion capabilities with Azure Machine Learning Solutions.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Book a Callback &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Azure Machine Learning?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Book a Callback &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default AzureMachineLearning;
