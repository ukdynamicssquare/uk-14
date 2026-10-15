import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../../components/bcTwo/FaqList";
import ResourceTabs from "../../components/bcTwo/ResourceTabs";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import { axResources, axLinks } from "../../components/bcTwo/legacyResources";
import faqs from "../../public/data/microsoftdynamicsax.json";
import PageSeo from "../../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-ax/";
const PAGE_TITLE = "Microsoft Dynamics AX (Axapta) Support Partner UK";
const PAGE_DESC = "Looking for Microsoft Dynamics AX support partner in UK? Dynamics Square - trusted by over a 500+ clients in the UK. Contact us today to see how we can help you get the most out of your investment in Axapta!";
const OG_TITLE = "Microsoft Dynamics AX Support Partner UK";
const OG_DESC = "Looking for Microsoft Dynamics AX support partner in UK? Dynamics Square - trusted by over a 500+ clients in the UK. Contact us today to see how we can help you get the most out of your investment in AX!";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/ax-feature1.png";

const features = [
  { icon: "bi-cloud-check", text: "It can be used on-premise as well as on cloud" },
  { icon: "bi-tag", text: "It comes with a transparent pricing" },
  { icon: "bi-window", text: "Simple to understand interface for everyone" },
  { icon: "bi-bar-chart-line", text: "Business intelligence that is superior" },
  { icon: "bi-microsoft", text: "Support and commitment from the brand Microsoft" },
];

const capabilities = [
  { icon: "/img/icons-ax-_financial.svg", title: "Financial Management", items: ["Receivable and payable of account", "Budgetary control", "Compliance management", "General Ledger", "Bank Management"] },
  { icon: "/img/icons-ax-_production.svg", title: "Production", items: ["Receivable and payable of account", "Budgetary control", "Compliance management", "General Ledger", "Bank Management"] },
  { icon: "/img/icons-ax-_supply-chain.svg", title: "Supply Chain Management", items: ["Warehouse management on multiple sites", "Order promising", "Quality management", "Inventory management", "Trade agreements", "Planning of distribution"] },
  { icon: "/img/icons-ax-_business-intelligence.svg", title: "Reporting and Business Intelligence", items: ["Viewing of performance indicators on the dashboard", "Predefined data cubes", "Analytical and standard reports with the help of Server Reporting services of Microsoft SQL"] },
  { icon: "/img/icons-ax-_capital-management.svg", title: "Human Capital Management", items: ["Selection ad recruitment", "Self-service portal for employees", "Workforce management for the organisation", "Performance management including training and development", "Expense management"] },
  { icon: "/img/icons-ax-_procurment.svg", title: "Sourcing and Procurement", items: ["Dispatching and service calls", "Service subscription", "Contracts and service orders", "Repair management"] },
  { icon: "/img/icons-ax-_accounting.svg", title: "Accounting and Project Management", items: ["Cost control of the project", "Interoperability with the projects run by Microsoft", "Invoicing and accounting of project", "Breakdown structures of work"] },
  { icon: "/img/icons-ax-_sales-management.svg", title: "Sales Management", items: ["Opportunity and lead management", "Features for Sales Connector", "Marketing automation and salesforce", "Sales management"] },
];

const benefits = [
  { icon: "bi-arrows-move", title: "Flexibility", text: <>The tool is not just easy for the purpose of customization but also is extremely flexible to use. The users do not have to be an expert in anything to use this particular tool. There are several videos and details available that will help you in understanding the functions and features of the platform well so that you can use it comfortably. Also, it is quite flexible in use as you can use it on your <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud as well as on your on-premise devices</Link> as per your requirements.</> },
  { icon: "bi-sliders", title: "Customization", text: "Dynamics AX comes with ease of customization so that the users can customise its features and specifications depending upon their requirements. Every organisation has got different requirements and necessities. Hence, the organisations can make the required customization in the tool to match up with their requirements." },
  { icon: "bi-plug", title: "Integration", text: <>Dynamics AX also allows <Link href="/products/microsoft-dynamics-365/integration/">easy integration of different tools and software</Link> options available within your organisation to manage things in a much better way.</> },
  { icon: "bi-phone", title: "User Interface", text: "Most importantly, the user interface of the tool is extremely clean and easy to understand. Whether you are using the tool on your mobile or on any other device, it offers an interface that is simple and clean." },
  { icon: "bi-currency-pound", title: "Pricing", text: "No doubt, pricing plays a major role while selecting any tool or software for your organisation. Dynamics AX is definitely not going to disappoint in this section. It comes with a much lower cost that does not offer a burden on your investments and finances even if you are a small organisation or even just a startup." },
  { icon: "bi-patch-check", title: "Preferred Vendor", text: <>When it comes to investment, the majority of clients prefer to choose the one that is well-known and has a good market reputation. Microsoft is a well-known name now and also a highly reliable one. Thus, a lot of organisations prefer to choose Microsoft and its recently released Microsoft Dynamics AX (Axapta) for solving several <Link href="/products/microsoft-dynamics-erp/">ERP-related instances</Link>.</> },
];

const updates = [
  { icon: "bi-window-stack", title: "Modern Interface", text: "The latest interface of the tool is modern and is even simpler in looks as well as use. Thus, a lot of time and money is saved as the organisations do not have to invest in training of the employees for the tool. The interface is easy to understand so that the employees can go through it to understand it and just a minor knowledge can help them in starting with the operations too." },
  { icon: "bi-briefcase", title: "Productivity Tools", text: <>The latest updated tool can once again integrate seamlessly with <Link href="/products/microsoft-dynamics-365/integration/">Office 365 applications</Link> and this time it is loaded with even more productivity tools to help the users in operating different functions in an even smoother way. The integration of the option Workplaces has made the integration of several applications even better.</> },
  { icon: "bi-mic", title: "Cortana Integration", text: <>The integration of Cortana feature has simplified tasks even better. The users can make use of voice command to get several tasks done. Thus, it allows the users to do two tasks together at the same time that can help in saving a lot of time and effort. With all such features and benefits, surely, Microsoft Dynamics AX is going to transform the way business organisations operate these days to have a better future ahead.</> },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      "url": PAGE_URL,
      "name": PAGE_TITLE,
      "description": PAGE_DESC,
      "inLanguage": "en-GB",
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 1024, "height": 586 },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "publisher": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "breadcrumb": { "@id": PAGE_URL + "#breadcrumb" },
      "about": { "@id": PAGE_URL + "#software" }
    },
    {
      "@type": "BreadcrumbList",
      "@id": PAGE_URL + "#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Microsoft Dynamics AX", "item": PAGE_URL }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#software",
      "name": "Microsoft Dynamics AX",
      "alternateName": "Axapta",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Windows",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "The Most Complete, Agile And Powerful ERP For The Management Of Medium And Large Companies.",
      "featureList": capabilities.map((c) => c.title)
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "what-is-ax", label: "What is Dynamics AX?" },
  { id: "features", label: "Features" },
  { id: "capabilities", label: "Capabilities" },
  { id: "benefits", label: "Benefits" },
  { id: "recent-update", label: "Recent Update" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const MicrosoftDynamicsAX = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="WebPage"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Microsoft Dynamics AX (Axapta) ERP solution"
        ogTitle={OG_TITLE}
        ogDescription={OG_DESC}
        extraSchema={pageSchema}
      >
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="586" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Microsoft Dynamics AX</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics AX</h1>
              <p className={styles.heroLead}>The Most Complete, Agile And Powerful ERP For The Management Of Medium And Large Companies.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/ax-feature1.png" alt="Microsoft Dynamics AX (Axapta) ERP for medium and large companies" width={1024} height={586} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== What is AX ===== */}
      <section id="what-is-ax" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/ax.png" alt="Microsoft Dynamics AX production performance dashboard with reports and KPIs" width={1024} height={576} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>What is Microsoft Dynamics AX?</h2>
              <p className={styles.lead}>Microsoft Dynamics AX (Axapta) is a complete business management solution for medium-sized and large organisations that work with <Link href="/products/microsoft-dynamics-365/integration/">popular Microsoft software</Link> to improve staff productivity.</p>
              <p>Dynamics AX has been created to make it easier to conduct business in different locations and countries.</p>
              <p>Microsoft Dynamics AX consolidates and standardizes processes, improving visibility across the organisation and simplifying compliance.</p>
              <p>With Microsoft Dynamics AX (Axapta), you can be sure that your business management solution is, and will continue to be, relevant to the needs of your staff and to the demands of your industry and business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Dynamics AX Features</h2>
              <p><strong>Microsoft Dynamics AX 2012 (formerly Axapta )</strong> is an <Link href="/products/microsoft-dynamics-erp/">ERP solution</Link> designed for companies with financial management, operations management and human resources needs, providing specific integrated capabilities for sectors such as manufacturing, distribution, services or the public sector.</p>
              <p>Therefore, if you are looking for a powerful and very flexible ERP , Microsoft Dynamics AX may be your best bet.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/ax-feature-1-1024x630.png" alt="Microsoft Dynamics AX 2012 features for finance, operations and HR" width={1024} height={630} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
          </div>
          <ul className={`${styles.processGrid} mt-5 mb-0`}>
            {features.map((f) => (
              <li key={f.text}><i className={`bi ${f.icon}`}></i>{f.text}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Capabilities ===== */}
      <section id="capabilities" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics AX Capabilities</h2>
              <p>Microsoft Dynamics AX (Axapta) can help you manage your by-products and collateral, comply with legal obligations, meet changing customer demands, and improve your processes.</p>
            </div>
          </div>
          <div className={`${styles.capGrid} ${styles.capGrid4}`}>
            {capabilities.map((c) => (
              <article className={styles.capCard} key={c.title}>
                <Image src={c.icon} alt={`Dynamics AX ${c.title} icon`} width={48} height={48} className={styles.capIcon} />
                <h3>{c.title}</h3>
                <ul className={styles.capList}>
                  {c.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
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
              <h3>Let&apos;s Talk to Our Experts</h3>
              <p>It&apos;s time to connect and share with experts at Dynamics Square to reveal business solutions defining your core business values and process flow.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Benefits Of Using Dynamics AX</h2>
              <p>Streamline your <Link href="/products/microsoft-dynamics-365-finance-operations/">financial operations</Link> and lead your business towards growth and easy scalability while implementing Dynamics AX. Check out some of the benefits to understand how it can help you achieve maximised profitability.</p>
            </div>
          </div>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {benefits.map((b) => (
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

      {/* ===== Recent update ===== */}
      <section id="recent-update" className={`${styles.block} ${styles.blockDark} ${styles.anchor}`}>
        <div className="container">
          <h2 className={`${styles.h2} ${styles.h2Light}`}>Dynamics AX Recent Update</h2>
          <p className={styles.lightText}>Microsoft Dynamics AX is now available with its latest update that offers a lot of extended benefits and features for the users.</p>
          <div className={`${styles.resultGrid} ${styles.resultGrid3}`}>
            {updates.map((u) => (
              <div className={styles.resultCard} key={u.title}>
                <i className={`bi ${u.icon} ${styles.resultNum}`} aria-hidden="true"></i>
                <h3 className="h5 text-white fw-bold mb-3">{u.title}</h3>
                <p>{u.text}</p>
              </div>
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
                <h2 className={styles.h2}>Have You Got Questions About Dynamics AX?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Image src="/img/ax-feature1.png" alt="Microsoft Dynamics AX support from Dynamics Square" width={1024} height={586} sizes="(max-width: 991px) 100vw, 360px" />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
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
      {/* ===== Resources ===== */}
      <ResourceTabs
        title="Get Started with Microsoft Dynamics AX"
        intro="Case studies, e-books, podcasts, videos and blogs to help you explore Dynamics AX and its successor, Dynamics 365 Finance and Operations."
        tabs={axResources}
      />

      {/* ===== Internal links ===== */}
      <RelatedLinks links={axLinks} />
    </>
  );
};

export default MicrosoftDynamicsAX;
