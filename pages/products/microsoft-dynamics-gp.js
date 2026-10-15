import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList, { faqSchema } from "../../components/bcTwo/FaqList";
import ResourceTabs from "../../components/bcTwo/ResourceTabs";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import { gpResources, gpLinks } from "../../components/bcTwo/legacyResources";
import faqs from "../../public/data/microsoftdynamicsgp.json";
import PageSeo from "../../components/PageSeo";

const PAGE_URL = "https://www.dynamicssquare.co.uk/products/microsoft-dynamics-gp/";
const PAGE_TITLE = "Microsoft Dynamics GP (Great Plains) Support Partner UK";
const PAGE_DESC = "Looking for Microsoft Dynamics GP support in UK? Streamline your finances, sales, service and operations by implementing Great Plains. Contact Now Today!";
const OG_TITLE = "Dynamics GP Partner | Dynamics Great Plains Partner UK | Dynamics Square";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/gpbanner.png";

const features = [
  { icon: "bi-calculator", title: "Financial Management", text: "With analytics and security, Dynamics GP offers to be a great financial accounting solution as it aids in banking and managing your budgets, assets, and cash flow. This tool allows you in tracking your financial records and data without investing any extra effort or extra time on it." },
  { icon: "bi-bar-chart-line", title: "Business Intelligence", text: <>The <Link href="/products/microsoft-power-bi/">BI system</Link> of the tool allows you to check out the reports of data that are pre-built on your dashboard so that you are able to make instant decisions that are intelligent as well as much efficient for your organisation.</> },
  { icon: "bi-box-seam", title: "Inventory Management", text: "Being an accounting and ERP solution, Dynamics GP aids you in inventory management, where you can keep records of your returns, orders, and others. With the proper inventory management, you can meet the customer's requirements on time and maintain the profit and reputation of your company." },
  { icon: "bi-cart-check", title: "Sales and Service", text: "Dynamics GP Implementation in your business operations ensures that you carry on your sales and service in an even better way. The tool offers functions and features such as automating your sales process so that you can provide an enhanced service to your customers. Also, this will help you control your invoicing well and minimize the costs for shipping and labour for the entire process." },
  { icon: "bi-kanban", title: "Project Management", text: "Dynamics GP offers a tracking solution for the project that helps track all the financial transactions because of a particular project. It allows you to seamlessly integrate all financial elements such as accounts receivables, inventory, and other financials to ensure that all the accounting and billing are done accurately." },
  { icon: "bi-people", title: "HR/Payroll Management", text: "With Microsoft Dynamics Great Plains HR/Payroll Management Solution, you can optimise your employees' management and improve service to employees via accurate reporting and user query tools and customized lists that support better intelligence into different levels of employee data" },
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
        { "@type": "ListItem", "position": 2, "name": "Microsoft Dynamics GP", "item": PAGE_URL }
      ]
    },
    {
      "@type": "SoftwareApplication",
      "@id": PAGE_URL + "#software",
      "name": "Microsoft Dynamics GP",
      "alternateName": "Great Plains",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Windows",
      "author": { "@type": "Organization", "name": "Microsoft" },
      "description": "Microsoft Dynamics GP is a standalone ERP solution specifically built for mid-market companies.",
      "featureList": features.map((f) => f.title)
    },
    faqSchema(faqs),
  ],
};

const sections = [
  { id: "what-is-gp", label: "What Is Dynamics GP?" },
  { id: "features", label: "Features" },
  { id: "free-demo", label: "Try Dynamics GP for Free" },
  { id: "gp-support-ended", label: "GP Support" },
  { id: "gp-upgrade", label: "GP Upgrade" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const MicrosoftDynamicsGP = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="WebPage"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image={OG_IMAGE}
        imageAlt="Microsoft Dynamics GP (Great Plains) ERP solution"
        ogTitle={OG_TITLE}
        extraSchema={pageSchema}
      >
        <meta property="og:image:width" content="1024" />
        <meta property="og:image:height" content="576" />
      </PageSeo>

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Microsoft Dynamics GP</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics GP</h1>
              <p className={styles.heroLead}>Streamline your business, avail automation, get a transparent business view, simplify different operations, and integrate desired applications by implementing Dynamics GP (Great Plains).</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/gpbanner.png" alt="Microsoft Dynamics GP (Great Plains) ERP dashboard" width={1024} height={576} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== What is GP ===== */}
      <section id="what-is-gp" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>What Is Microsoft Dynamics GP (Great Plains)?</h2>
              <p>Microsoft Dynamics GP is a standalone <Link href="/products/microsoft-dynamics-erp/">ERP solution</Link> specifically built for mid-market companies. Some businesses also consider Great Plains as accounting software, but it can streamline all core business operations. You can deploy the servers in the <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud or on-premises</Link> based on business requirements. It offers robust features to manage different departments of the business, including finance, inventory, supply chain, manufacturing, operations, and human resources. Due to its flexible customization and integration options, you can implement GP in any business or industry. Such industries include hospitality, retail, automotive, oil &amp; Gas, non-profit, and more. Whether you are an existing brand or a growing organisation, Microsoft GP is perfect for you.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/Dynamics-GP-overview.svg" alt="Microsoft Dynamics GP overview for mid-market companies" width={1138} height={765} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics GP Features</h2>
              <p>Dynamics GP is loaded with some exclusive features that make it absolutely perfect for your enterprise.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {features.map((f) => (
              <article className={styles.capCard} key={f.title}>
                <i className={`bi ${f.icon}`}></i>
                <h3>{f.title}</h3>
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
              <h3>Stuck with the limited capabilities of Dynamics GP 2018 or GP 2021?</h3>
              <p>Upgrade your system today and avail yourself of advanced features to supercharge your business with enhanced tools, features, and capabilities.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Upgrade Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Free demo ===== */}
      <section id="free-demo" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/gp-newimga.png" alt="Free Microsoft Dynamics GP demo showing features and tools" width={1024} height={630} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Try Dynamics GP for Free!</h2>
              <p>No doubt, Dynamics GP is a powerful solution, but is it perfect as per your business needs? It is always a great idea to try a system before investing in it. This will help you understand whether you are investing in the right resource for the business or not. Similarly, you can avail of a Dynamics GP demo from Dynamics Square (one of the UK’s leading <Link href="/our-services/dynamics-365-support-services/">Dynamics GP support partners</Link>) to understand its functionality, features, and tools.</p>
              <p>The demo of Dynamics GP is absolutely free, regardless of your industry. This demo will give you insights into the sheer capabilities of Microsoft GP and how it aligns with all businesses. Once you find the Great Plains software good for your business, you can go ahead and make the right decision for your business - implementing Dynamics GP.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Get the Dynamics GP Demo for free!</h3>
              <p>Check out the tools, features, and efficiency of Dynamics GP with a free demo from Microsoft-certified Dynamics GP experts.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Book a Free Dynamics GP Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Support ended ===== */}
      <section id="gp-support-ended" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6 d-flex">
              <article className={`${styles.capCard} w-100`}>
                <i className="bi bi-calendar-x"></i>
                <h2 className={styles.h2}>Has Microsoft ended Dynamics GP Support for all Versions?</h2>
                <p>Yes, Microsoft has ended the mainstream support of Dynamics GP 2013, 2015, 2016, and 2018 running on a fixed lifecycle policy, or you can also consider it the end of the life of Dynamics GP. It means these versions will not get any kind of updates, upgrades, bug fixes, or patches from Microsoft. However, you can still avail of extended support for Dynamics GP 2015, 2016, and 2018, and Microsoft will continue to release security updates on time until the end of extended support.</p>
                <p>The latest version (Dynamics GP 18.) is available under modern lifecycle policy, which means Microsoft will continue to release GP updates, upgrades, patches, and more automatically until Microsoft rolls out new information.</p>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className={`${styles.capCard} w-100`}>
                <i className="bi bi-signpost-split"></i>
                <h2 className={styles.h2}>My Dynamics GP Support has ended - What Should I Do?</h2>
                <p>If so, it&apos;s high time you need to make a smart decision for your business. Because you must provide all necessary resources to empower your business to grow, irrespective of its complexity. Based on your GP version, you have two choices. Either you upgrade your system to the latest Dynamics GP version or you upgrade to <Link href="/products/dynamics-365-business-central/">Business Central</Link>.</p>
                <p>Based on our analysis and market research, we have found that <Link href="/gp-to-business-central-migration/">upgrading Dynamics GP to Business Central</Link> is a better and more cost-effective decision. Because, sooner or later, the support of all Dynamics GP versions will end, and you need to eventually upgrade to a modern ERP solution. If you have to upgrade tomorrow, why not consider upgrading today? It will save a lot of essential resources for your business that can be utilised for business growth rather than investing in upgrading to the latest version of GP.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Upgrade + Support ===== */}
      <section id="gp-upgrade" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className={`row align-items-center gy-5 ${styles.splitRow}`}>
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics GP Upgrade</h2>
              <p><b>Dynamics Square is a Microsoft Dynamics GP 2023 Expert.</b></p>
              <p>There are a number of organisations that have been using Dynamics GP for a long time now with different versions, like 2013, 2015, 2016, or 2018. The latest update of Dynamics GP version 18.6 (Dynamics GP 2025) offers exceptional features and functions. These features include more fields in the payable transaction workflow, new workflows for different processes, and more. These added functionalities will help your organisation run smoothly.</p>
              <p>Getting the <Link href="/our-services/dynamics-365-upgrade-services/">upgrade to Microsoft Dynamics GP 18.6</Link> will offer you new features over your existing package that will make your operations even more powerful than before. These features will streamline complex operations in different areas such as finances, human resources, inventory management, and many others.</p>
              <p>You can get a hands-on Dynamics GP trial to understand the latest features and tools and identify whether this is a perfect ERP solution or not based on your business needs. As per Microsoft Dynamics policy, you can avail yourself of a trial of any Dynamics solution for a month to test the solution&apos;s reliability.</p>
              <p>After you have checked out the functioning of the tool for a month, you can proceed further to find the Microsoft Dynamics GP cost and the prices of different licences.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/gp-upgrade-1024x630.png" alt="Microsoft Dynamics GP upgrade to version 18.6" width={1024} height={630} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
          </div>

          <div className={`row align-items-center gy-5 ${styles.splitRow}`}>
            <div className="col-lg-6 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/gp-support-1024x630.png" alt="Microsoft-certified Dynamics GP support team" width={1024} height={630} sizes="(max-width: 991px) 100vw, 540px" />
              </div>
            </div>
            <div className={`col-lg-6 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Get Dynamics GP Support - Cost Effective and Productive</h2>
              <p><b>Get Dynamics GP support from our dedicated team of Microsoft-certified Great Plains software experts.</b></p>
              <p>Microsoft is known for its brand name and its reliability. Hence, when you are investing your hard-earned money in Dynamics GP, you can surely expect some excellent results according to your requirements. But a technical glitch can happen even with the best options available. But you do not have to worry much, as we offer you the best, most reliable, and most trustworthy Dynamics GP support for all versions.</p>
              <p>Our support team ensures to offer a huge list of services such as <Link href="/our-services/dynamics-365-consultant/">consulting</Link>, licencing, upgrading your older version, <Link href="/our-services/dynamics-365-implementation-services/">implementation</Link>, <Link href="/products/microsoft-dynamics-365/integration/">integration</Link>, customization, and others.</p>
              <p>Regardless of your query, our expert Dynamics consultants will resolve it in no time so that your business can continue to grow. Also, if you are having issues, you can get <Link href="/our-services/dynamics-365-training/">Microsoft Dynamics GP training</Link> to get a deep understanding of this powerful <Link href="/products/microsoft-dynamics-erp/">Microsoft ERP solution</Link>.</p>
              <Link href="/contact-us/" className={styles.ctaGhost}>
                Get Support Now! <i className="bi bi-arrow-right"></i>
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
                <h2 className={styles.h2}>Have you got questions about Microsoft Dynamics GP</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Image src="/img/gpbanner.png" alt="Microsoft Dynamics GP support from Dynamics Square" width={1024} height={576} sizes="(max-width: 991px) 100vw, 360px" />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Book a Free Dynamics GP Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
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
        title="Get Started with Microsoft Dynamics GP"
        intro="Case studies, e-books, podcasts and blogs to help you explore Dynamics GP and your move to Business Central."
        tabs={gpResources}
      />

      {/* ===== Internal links ===== */}
      <RelatedLinks links={gpLinks} />
    </>
  );
};

export default MicrosoftDynamicsGP;
