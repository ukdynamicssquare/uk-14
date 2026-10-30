import Image from "next/image";
import Link from "next/link";
import PageSeo from "../components/PageSeo";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import RelatedLinks from "../components/bcTwo/RelatedLinks";

const features = [
  { icon: "bi-speedometer2", title: "Great Performance", text: "Sana Commerce, as a high-speed single-page application, provides excellent features to all B2B industries. It offers reliable and interactive user experiences so that all users can understand the features and functions effectively, resulting in enhanced performance." },
  { icon: "bi-graph-up", title: "Real-time Data Insights", text: <>Once you integrate Sana Commerce with Business Central ERP, you can access any kind of data in real-time from anywhere and anytime using any device. It unifies all data sources and provides a centralised platform when it comes to accessing data. Even so, it updates the database in real-time, enabling users to <Link href="/products/microsoft-power-bi/">make informed decisions</Link> instantly.</> },
  { icon: "bi-emoji-smile", title: "Maximised Customer Experience", text: <>Sana Commerce offers a simple user interface with an easy flow of business functions. Once it integrates with Business Central or <Link href="/products/microsoft-dynamics-nav/">NAV</Link>, you can instantly get product information, product categories, and other relevant data. The entire data set becomes available at the customer&apos;s fingertips, resulting in an enhanced customer experience and utmost satisfaction.</> },
  { icon: "bi-box-seam", title: "Efficient Order Processing", text: <>Sana Commerce tracks the journey of each product from the time it is placed using the online portal to the time it is delivered appropriately. Even so, it streamlines the <Link href="/products/dynamics-365-business-central/sales-order-management/">process of return and refund</Link> efficiently, making the entire process smooth and simple.</> },
];

const shipping = [
  { icon: "bi-shield-lock", title: "Secure Payment Gateway", text: "Sana Commerce offers a fully secured payment gateway using PCI DSS certification with support for local currencies and different payment modes. Once a payment is completed, it securely deposits the payment to the primary account, offering instant credit visibility." },
  { icon: "bi-hdd-stack", title: "Secured Data Servers", text: <>The servers of Sana Commerce are deployed using <Link href="/products/microsoft-azure/">Azure hosting</Link>, the most secure and reliable cloud data servers offered by Microsoft, hosted on SQL Azure servers. With 99.9% uptime, Azure offers optimal performance and the best architecture for all data transactions.</> },
  { icon: "bi-arrows-angle-expand", title: "Scalable", text: <>Whenever your business grows, you can scale the entire system with ease. It can easily adapt to high order volumes while optimising the existing processes to get more results out of the limited resources. All such changes can be done with the help of your Sana Commerce <Link href="/dynamics-365-business-central-implementation/">implementation partner</Link>.</> },
];

// No FAQ existed on this page; answers below are taken from the page copy.
const faqs = [
  { id: 1, question: "What is Sana Commerce?", answer: "<p>Sana Commerce is a flexible and scalable e-commerce platform that integrates seamlessly with Business Central or NAV and provides a competitive advantage over others in the market.</p>" },
  { id: 2, question: "How does Sana Commerce work with Business Central?", answer: "<p>Sana Commerce integrates with Business Central to help sell online, centralise the ERP data, manage the entire process from providing a quote to delivering the order, and fortify the customer experience. Sana Commerce works on cloud servers to offer a uniform source of data using different channels while offering exact and real-time information whenever needed.</p>" },
  { id: 3, question: "Does Sana Commerce support B2B and B2C businesses?", answer: "<p>Yes. It connects the ERP system with the online store to provide extremely fast performance in both B2B and B2C industries.</p>" },
  { id: 4, question: "How are shipping fees and taxes calculated in Sana Commerce?", answer: "<p>When a customer purchases a product from your Sana Commerce-powered online store, all sales invoices and taxes are calculated precisely. Also, using the ERP data, it will calculate the upfront shipping fees so that a customer can get the exact information (cost and fees) before actually purchasing a product.</p>" },
  { id: 5, question: "How secure is Sana Commerce?", answer: "<p>Sana Commerce offers a fully secured payment gateway using PCI DSS certification with support for local currencies and different payment modes. Its servers are deployed using Azure hosting, hosted on SQL Azure servers, with 99.9% uptime.</p>" },
  { id: 6, question: "Can Sana Commerce scale as my business grows?", answer: "<p>Whenever your business grows, you can scale the entire system with ease. It can easily adapt to high order volumes while optimising the existing processes to get more results out of the limited resources.</p>" },
];

const relatedLinks = [
  { href: "/shopify-connector-business-central/", title: "Shopify Connector for Business Central", icon: "bi-bag" },
  { href: "/magento-dynamics-365-integration/", title: "Magento Dynamics 365 Integration", icon: "bi-cart3" },
  { href: "/d365-business-central-support/", title: "Business Central Support", icon: "bi-headset" },
  { href: "/insights-works-for-dynamics-365-business-central/", title: "Insight Works for Business Central", icon: "bi-graph-up" },
  { href: "/wms-for-business-central/", title: "WMS for Business Central", icon: "bi-box-seam" },
];

const sections = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "shipping-tax", label: "Shipping & Tax" },
  { id: "faqs", label: "FAQs" },
];

const Bcinsights = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title="Sana Commerce for Microsoft Dynamics 365 business central"
        description="Sana Commerce is the ultimate e-commerce solution for Microsoft Dynamics 365 Business Central. With seamless integration and user-friendly features, boost your online sales and improve customer satisfaction."
        image="/img/sana-Commerce.png"
        imageAlt="Sana Commerce for Dynamics 365 Business Central"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Sana Commerce for Dynamics 365 Business Central</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Sana Commerce for Dynamics 365 Business Central</h1>
              <p className={styles.heroLead}>Sell to global customers with a superior customer experience using Sana Commerce, a powerful e-commerce solution for Business Central.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Integrate Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/sana-Commerce.png" alt="Sana Commerce for Dynamics 365 Business Central" width={1018} height={687} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Integrate Now!" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-10 ${styles.textCol}`}>
              <h2 className={styles.h2}>Power Up your E-commerce Game while Empowering your Customers</h2>
              <p className={styles.lead}>Sana Commerce is a flexible and scalable e-commerce platform that <Link href="/products/microsoft-dynamics-365/integration/">integrates seamlessly</Link> with Business Central or NAV and provides a competitive advantage over others in the market. It allowed businesses to build an online store without compromising their current offline business flow. With its exceptional capability of centralising all business data, it eliminates unnecessary complexities from the system to achieve a better result.</p>
              <p><Link href="/products/dynamics-365-business-central/">Business Central</Link> is a renowned ERP (enterprise resource planning) solution available for SMBs. With modernisation, it is a must for distributors, wholesalers, and manufacturers to sell their product globally using an online store. Here, Sana Commerce integrates with Business Central to help sell online, centralise the ERP data, manage the entire process from providing a quote to delivering the order, and fortify the customer experience. Sana Commerce works on <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud servers</Link> to offer a uniform source of data using different channels while offering exact and real-time information whenever needed.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark}`}>Streamline online sales, offer a superior customer experience, and implement a ready-to-go, scalable commerce solution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Align with Customer and Market Demands with Sana Commerce</h2>
              <p>Customer and market demands change with time. Sana Commerce is a reliable and adaptable solution that matches changing needs and exceeds all expectations. Due to cloud computing, it expanded its capabilities based on a sudden change in industry to offer seamless services. It connects the <Link href="/products/microsoft-dynamics-erp/">ERP system</Link> with the online store to provide extremely fast performance in both B2B and B2C industries. Some of its features are:</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {features.map((f) => (
              <article className={styles.reasonCard} key={f.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${f.icon}`}></i></span>
                  <h3>{f.title}</h3>
                </div>
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
              <h3>Get a SaaS-based, scalable e-commerce solution with out-of-the-box features to tackle modern e-commerce issues.</h3>
              <p>Want to generate more ROI with a huge list of satisfied customers?</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Schedule a Demo with Us! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Shipping & Tax ===== */}
      <section id="shipping-tax" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Simplified Shipping and Tax</h2>
              <p>When a customer purchases a product from your Sana Commerce-powered online store, all <Link href="/products/dynamics-365-business-central/financial-management/">sales invoices and taxes</Link> are calculated precisely. Also, using the ERP data, it will calculate the upfront shipping fees so that a customer can get the exact information (cost and fees) before actually purchasing a product.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {shipping.map((s) => (
              <article className={styles.capCard} key={s.title}>
                <i className={`bi ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
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
                <h2 className={styles.h2}>FAQs</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Schedule a Demo with Us! &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Bcinsights;
