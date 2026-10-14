import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../../components/bcTwo/FaqList";
import ResourceTabs from "../../components/bcTwo/ResourceTabs";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import { navResources, navLinks } from "../../components/bcTwo/legacyResources";
import faqs from "../../public/data/microsoftdynamicsnav.json";

const PAGE_URL = "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-nav/";
const PAGE_TITLE = "Microsoft Dynamics NAV (Navision) Support Partner UK";
const PAGE_DESC = "Looking for Microsoft Dynamics NAV support? Whether you're using an older or newer version, we offer high quality, low cost Navision support services in the UK. Contact Now Today!";
const OG_TITLE = "Microsoft Dynamics NAV: Navision Support Partner UK";
const OG_DESC = "Need Microsoft Dynamics NAV support? Whether you're using an older or newer version, we offer high quality, low cost Navision support services in the UK. Contact Now Today!";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/nav-banner.png";

const benefits = [
  { icon: "bi-graph-up-arrow", title: "Maximized ROI", text: "Maximizing your ROI (return on investment) is the key to success in any business venture. Dynamics NAV helps businesses optimise the current processes, resulting in reduced costs and maximised profitability." },
  { icon: "bi-cloud-arrow-up", title: "Ease of Deployment", text: <>Businesses have the choice to opt for the desired deployment option. Navision generally comes with an on-premises deployment option, but you can avail yourself of the cloud deployment option by <Link href="/dynamics-nav-to-business-central/">upgrading your current NAV version to Business Central</Link>. You can also use the <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">hybrid deployment option</Link> to access the combined capability of on-premises and cloud.</> },
  { icon: "bi-window-sidebar", title: "Effective User Interface", text: "An effective user interface is essential for any system that is intended for use by a large number of people, as it will make the system more user-friendly and therefore more likely to be used. With a simple to understand user interface, it offers seamless features and functions to all users that aid them in navigating easily." },
  { icon: "bi-bar-chart-line", title: "Transparent Reporting and Planning", text: <>Dynamics NAV allows users to get accurate insights and reports to make informed decisions in real-time. It provides the visibility to track almost all performances with the help of Microsoft integrations like <Link href="/products/microsoft-dynamics-365/integration/">Excel and Office</Link>.</> },
  { icon: "bi-headset", title: "Avail Support 24x7", text: <>The basic requirement of Dynamics NAV is having an internal Dynamics NAV support team to keep the system working 24x7, even in tough times. It eliminates the dependency on third-party <Link href="/our-services/dynamics-365-support-services/">NAV support partners</Link>, resulting in a focus on business growth.</> },
  { icon: "bi-sliders", title: "Flexible with Customizations", text: "Dynamics NAV is flexible enough to adapt itself as per the unique requirements of the business. It is totally customizable and can be tailored to offer a personalised user experience with increased productivity." },
  { icon: "bi-emoji-smile", title: "Better Customer Service", text: "Using Microsoft Navision, businesses can make a big difference to the level of customer service they provide. Eventually, it will be more likely to win over new customers and keep their existing ones coming back for more." },
  { icon: "bi-plug", title: "Efficient Integrations", text: <>Integrations are a crucial part of any software system. They allow different components of the system to communicate with each other and exchange data. You can add the <Link href="/products/microsoft-dynamics-365/integration/">desired integrations</Link> with the system to enhance the performance for more business growth.</> },
];

const differences = [
  { icon: "bi-hdd-network", title: "Deployment Option", text: "NAV works with on-premises deployment only, whereas Business Central is flexible enough to deploy data servers using on-premises, cloud, or hybrid deployment." },
  { icon: "bi-cash-stack", title: "Upfront Investment Cost", text: <>Dynamics NAV implementation needs a huge investment to set up for a business, whereas <Link href="/dynamics-365-business-central-implementation/">Business Central implementation</Link> works on a monthly subscription basis due to cloud deployment.</> },
  { icon: "bi-tools", title: "Maintenance Cost", text: "You will need an internal IT team to support all kinds of maintenance and hardware upgrades, resulting in a lot of investment, whereas Business Central will be maintained by Microsoft at no extra cost and without hampering the current processes." },
  { icon: "bi-ui-checks-grid", title: "Simple User Interface", text: <>The user interface of NAV software is a bit complex, and new users find it difficult to understand. On the other hand, <Link href="/products/dynamics-365-business-central/advantages-capabilities/">MS Dynamics 365 Business Central</Link> offers a simple yet powerful user interface where all the functions and tools are easily accessible.</> },
  { icon: "bi-person-gear", title: "Personalization", text: <>NAV provides limited personalization for all industries and requires significant resources to implement. Furthermore, when it comes to Business Central, <Link href="/products/dynamics-365-business-central/customisation/">extensions, add-ons, and other simple-to-implement apps</Link> are available to make the Microsoft ERP work for you.</> },
];

const services = [
  { icon: "bi-gear", title: "Implementation", text: "Drive seamless flow of your enterprise practices leveraging the power of Microsoft Dynamics NAV.", href: "#exampleModal", modal: true },
  { icon: "bi-arrow-up-circle", title: "Upgrade", text: "Upgrade your existing legacy or old Dynamics version with latest NAV version for a modernized and efficient solution.", href: "/dynamics-nav-to-business-central/" },
  { icon: "bi-person-check", title: "Support", text: "Drive consistency in your business operations and ensure smoother workflow by availing of our best Navision support.", href: "#exampleModal", modal: true },
  { icon: "bi-chat-dots", title: "Consulting", text: "Get optimum Dynamics NAV to your customised business needs.", href: "#exampleModal", modal: true },
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
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE, "width": 1024, "height": 576 },
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
        { "@type": "ListItem", "position": 2, "name": "Microsoft Dynamics NAV", "item": PAGE_URL }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#software",
      "name": "Microsoft Dynamics NAV",
      "alternateName": "Navision",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Windows",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "A Flexible Business Management Solution built to Boost profitability of Small and Medium Business.",
      "featureList": benefits.map((b) => b.title)
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "what-is-nav", label: "What is Dynamics NAV?" },
  { id: "benefits", label: "Benefits" },
  { id: "nav-inefficient", label: "Is your NAV inefficient?" },
  { id: "nav-vs-bc", label: "NAV vs Business Central" },
  { id: "pricing", label: "Pricing & Licensing" },
  { id: "partners", label: "NAV Partners UK" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const MicrosoftDynamicsNAV = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:title" content={OG_TITLE} />
        <meta property="og:description" content={OG_DESC} />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="576" />
        <meta property="og:image:alt" content="Microsoft Dynamics NAV (Navision) business management solution" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content={OG_TITLE} />
        <meta name="twitter:description" content={OG_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Microsoft Dynamics NAV</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics NAV</h1>
              <p className={styles.heroLead}>A Flexible Business Management Solution built to Boost profitability of Small and Medium Business.</p>
              <p className={styles.heroLead}>Want to know how Microsoft Dynamics NAV can streamline all your business management processes?</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Book a Demo Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/nav-banner.png" alt="Microsoft Dynamics NAV (Navision) ERP dashboard for small and medium businesses" width={1024} height={576} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Book a Demo Today!" />

      {/* ===== What is NAV ===== */}
      <section id="what-is-nav" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>What is Microsoft Dynamics NAV?</h2>
              <p className={styles.lead}>Microsoft Dynamics NAV (Navision) is a stand-alone business management solution capable of streamlining and optimising all processes while generating opportunities for sustainable growth. Being one of the top <Link href="/products/microsoft-dynamics-erp/">Microsoft ERP solutions</Link>, it offers powerful features to manage and control all business processes. Built specifically for SMBs, it is capable of connecting all departments, including finance, sales, warehousing, operations, customers, supply chain, accounting, and inventory.</p>
              <p>Dynamics NAV is so powerful that it can automate most of the recurring and manual processes using the capabilities of AI (artificial intelligence) and BI (business intelligence) while enhancing the overall efficiency of the business.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/NAV-implementation.jpg" alt="Microsoft Dynamics NAV implementation connecting finance, sales, warehouse and supply chain" width={1000} height={563} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-5`}>
            <div className={styles.infoCard}>
              <i className="bi bi-diagram-3"></i>
              <p>Microsoft Navision ERP provides a centralised platform to connect, collaborate, and share data using a single dashboard for ease of use and accessibility. This enables the users to take intelligent, smart, and fast decisions to succeed on the right path of growth. The NAV system offers rich functionality to help you unlock the full potential of your business, resulting in maximised efficiency while improving relations with customers for a greater experience.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-globe2"></i>
              <p>Businesses are unique, and so are their processes. This Microsoft ERP is so flexible that it fits in all industries, irrespective of the size and business requirements. You can make this ERP solution personalised using your <Link href="/" className="u-i">Microsoft Solutions Partner</Link>, resulting in enhanced productivity and efficiency. One of the best parts of using the Microsoft NAV software is its support for multi-language and multi-currency to improve global operations. It makes the business financially stable throughout tough business situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Benefits Of Microsoft Dynamics NAV</h2>
              <p>Microsoft Dynamics NAV is a top-tier ERP solution that connects people with processes for more efficient data flow and continuous growth. It possesses various capabilities and features catering to all industries in order to smooth the entire business management process. With over 550K+ customers, it has some functions that no other ERP solution can deliver. Some of the top benefits of Dynamics NAV are:</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
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

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Looking for a reliable, supportive, and cost-effective Dynamics NAV Support Partner?</h3>
              <p>With over 150+ NAV consultants, we are ready to check your system using our advanced and unique way.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Talk to our NAV Expert Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Is your NAV inefficient ===== */}
      <section id="nav-inefficient" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Is your Dynamics NAV inefficient?</h2>
              <p>With your current NAV version, you may be experiencing a number of issues, such as performance issues, lags during processing, costly maintenance, a complex user interface, and ineffective features. It might be possible that your current Navision version is inefficient for tackling your current business requirements. If so, your current system needs an urgent upgrade.</p>
              <p>You have two options: upgrade your NAV version to the latest available version or upgrade the whole ERP system to <Link href="/products/dynamics-365-business-central/">Business Central</Link>. Both of these options would cost the same, but upgrading to Business Central is the long-term solution on which you can rely in the future.</p>
              <p>If you&apos;ve been using NAV for a while and want to keep the same user interface and accessibility for a few more years, you can <Link href="/our-services/dynamics-365-upgrade-services/">upgrade to the latest version</Link>. In both cases, Dynamics Square is available to understand your business and suggest the best possible solution.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark} ${styles.quoteLink}`}>
                “Want to <Link href="/dynamics-nav-to-business-central/">upgrade your current Dynamics NAV</Link> version to streamline modern business demands?” <Link href="/schedule-a-demo/">Get Started Now!</Link>
              </p>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/Dynamics-NAV-To-Business-Central-Upgrade-1024x597.webp" alt="Upgrade Microsoft Dynamics NAV to Dynamics 365 Business Central" width={1024} height={597} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NAV vs BC ===== */}
      <section id="nav-vs-bc" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-8 ${styles.textCol}`}>
              <h2 className={styles.h2}>Dynamics NAV vs Dynamics 365 Business Central</h2>
              <p><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link> is the evolved and modern version of NAV software, specially built to aid SMBs with their core business management processes. The <Link href="/dynamics-nav-vs-business-central/">major differences between these two applications</Link> are listed below:</p>
            </div>
            <div className="col-lg-4 text-center">
              <Image src="/img/microosoft-partner.png" alt="Dynamics Square, Microsoft Solutions Partner for Dynamics NAV and Business Central" width={625} height={651} className={styles.imgFlat} style={{ width: 200 }} sizes="200px" />
            </div>
          </div>
          <div className={`${styles.capGrid} mt-4`}>
            {differences.map((d) => (
              <div className={styles.diffTile} key={d.title}>
                <i className={`bi ${d.icon}`}></i>
                <h3>{d.title}</h3>
                <p className={styles.quoteLink}>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Dynamics NAV Pricing &amp; Licensing</h2>
              <p>According to our data, businesses specified a better ROI and more profits after implementing NAV as their business management solution. It might look costly, but it&apos;s worth investing in it. With over 550K+ customers around the world, it is helping businesses grow and scale fast.</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            <article className={styles.capCard}>
              <i className="bi bi-box"></i>
              <h3>Starter Pack</h3>
              <span className={styles.caseTag}>Features</span>
              <p>Starter packs allow only three users in the organisation to access the solution and deal with finance and trade functionality. Users can access the basic financial features, <Link href="/products/dynamics-365-supply-chain-management/">supply chain management</Link>, sales management, and project management without any restrictions. It also allows users to gain insights and create reports on all processes and operations, which they can share with the team with a single click.</p>
            </article>
            <article className={styles.capCard}>
              <i className="bi bi-boxes"></i>
              <h3>Extended Pack</h3>
              <span className={styles.caseTag}>Features</span>
              <p>If you are a growing organisation with complex and advanced business operations, the Extended Pack is for you. Apart from the functions of the starter pack, it offers you a few more modules to manage, including manufacturing and warehousing as an add-on. Users can add more customizations and integrations as their business needs change.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Is your NAV working properly with all your business processes? Upgrade it now!</h3>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Book a Free Consultation Call &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Partners UK ===== */}
      <section id="partners" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics NAV Partners UK</h2>
              <p>Being a leading Microsoft Dynamics NAV partner in the UK, we offer you our cost-effective and advanced services.</p>
            </div>
          </div>
          <div className={`${styles.capGrid} ${styles.capGrid4}`}>
            {services.map((s) => (
              <article className={styles.capCard} key={s.title}>
                <i className={`bi ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.modal ? (
                  <Link href={s.href} data-bs-toggle="modal" className={styles.caseMore} aria-label={`Get Started with Dynamics NAV ${s.title}`}>
                    Get Started <i className="bi bi-arrow-right"></i>
                  </Link>
                ) : (
                  <Link href={s.href} className={styles.caseMore} aria-label={`Get Started with Dynamics NAV ${s.title}`}>
                    Get Started <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
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
                <h2 className={styles.h2}>Have you got questions about Dynamics NAV?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Image src="/img/nav-banner.png" alt="Microsoft Dynamics NAV support from Dynamics Square" width={1024} height={576} sizes="(max-width: 991px) 100vw, 360px" />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Talk to our NAV Expert Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
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
        title="Get Started with Microsoft Dynamics NAV"
        intro="Case studies, e-books, podcasts and blogs to help you explore Dynamics NAV."
        tabs={navResources}
      />

      {/* ===== Internal links ===== */}
      <RelatedLinks links={navLinks} />
    </>
  );
};

export default MicrosoftDynamicsNAV;
