import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Dynamics 365 Upgrade Solutions & Service UK | Trusted by 500+ Clients";
const PAGE_DESC = "Upgrade your system capabilities, process flow, adapt operational change through our highly integrated Dynamics 365 upgrade solutions. We have extensive experience in helping businesses upgrade services their systems.";

const solutions = [
  {
    icon: "bi-arrow-up-right-circle",
    title: "NAV To Business Central Upgrade",
    img: { src: "/img/nav-logo-icons-1.png", alt: "NAV To Business Central Upgrade", width: 561, height: 355 },
    text: <>Expand your business scope and maximise your profitability by upgrading your NAV system to Business Central either on-premises or on-cloud. Since Microsoft has abandoned its support to older versions of NAV (older than 2018), hence, if you are still leveraging your system capabilities leveraging NAV versions, it&apos;s time to ensure <Link href="/dynamics-nav-to-business-central/">NAV to Business Central upgrade</Link>.</>,
  },
  {
    icon: "bi-boxes",
    title: "AX To Finance & Supply Chain Upgrade",
    img: { src: "/img/nav-ax-log.png", alt: "AX To Finance & Supply Chain Upgrade", width: 592, height: 342 },
    text: <>Since Microsoft disabled <Link href="/products/microsoft-dynamics-ax/">Dynamics AX</Link> for new customers, although existing customers can still avail of additional benefits or AX support. When it comes to <Link href="/blog/dynamics-ax-upgrade-to-dynamics-365-finance-and-operations/">upgrading your AX account with Dynamics 365 Finance &amp; Supply Chain</Link>, enterprises can leverage a range of advanced functionalities supporting their modernised processes and operational flow to drive efficient growth and scalability.</>,
  },
  {
    icon: "bi-cloud-arrow-up",
    title: "Upgrade To Dynamics 365",
    img: { src: "/img/upgrade-logo.png", alt: "Upgrade To Dynamics 365", width: 263, height: 263 },
    text: <>When your enterprise&apos;s processes or data-driven practices start compromising and you are still relying on your legacy systems other than <Link href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365</Link>, it could be the best time to upgrade to Dynamics 365. If you are willing to streamline, automate, and simplify your day-to-day enterprise practices, upgrading to <Link href="/products/dynamics-365-business-central/">Business Central</Link> could be a quite productive decision to maximise growth and scalability.</>,
  },
];

const advantages = [
  { icon: "bi-patch-check", title: "Authorised Solutions Partner", text: <>Comprising extensive expertise along with years of proficiency, we are an <Link href="/microsoft-partners-uk/">authorised Microsoft Solutions Partner</Link> for Microsoft products and services. From seamless <Link href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</Link> to upgrade and support, we take care of your entire system needs. Embedded with experts, advanced methodologies, and a secure data migration skill set, we can implement a highly productive and efficient solution for your enterprise.</> },
  { icon: "bi-sliders", title: "Highly Customised Solution", text: <>Experts at Dynamics Square can drive a complete <Link href="/free-dynamics-365-system-health-check/">system health check</Link> and can suggest to you the optimal solution customised and configured suited to your specific business needs.</> },
  { icon: "bi-shield-lock", title: "Secure Data Migration", text: <>We drive and ensure strategic data migration when you come up to upgrade to Dynamics 365. Whether your need arises to <Link href="/dynamics-365-business-central-upgrade/">upgrade to Business Central</Link> or <Link href="/blog/migrate-nav-to-business-central/">NAV to Business Central migration</Link>, we can ensure secure and reliable data migration. Our Dynamics 365 data migration services are designed that comprise customised, step-by-step, and secure data migration from your existing system to the newly implemented ones.</> },
  { icon: "bi-arrow-repeat", title: "Seamless Upgrade", text: <>Since <Link href="/products/microsoft-dynamics-nav/">Dynamics NAV</Link> has been transformed with Dynamics 365 Business Central and Dynamics AX has been transformed with <Link href="/products/microsoft-dynamics-365-finance-operations/">Dynamics 365 Finance &amp; Supply Chain</Link>, our experts can ensure seamless upgrade depending on your core business needs, process optimisation, and integration with the existing system or other Microsoft&apos;s apps improving your entire process flow and operational environment.</> },
  { icon: "bi-tag", title: "Competitive Pricing", text: "With vast expertise in implementing a range of Microsoft's products and service, upgrading solutions, and ensuring post support models; Dynamics Square offers highly competitive prices compared to other market players. Enterprises that are willing to upgrade to Dynamics 365 can avail of our Microsoft Dynamics 365 upgrades and migrations at 40% reduced costs of being charged globally." },
  { icon: "bi-headset", title: "Reliable Post Support", text: <>To support your continuous process optimisation and strategic operational flow, we provide highly embedded and customised <Link href="/our-services/dynamics-365-support-services/">post support services</Link>. Whether you need annual support services, independent support, or prepaid hour support, we are here to serve you suited to your specific business context and business continuity needs.</> },
];

// The page had no FAQ section; answers are taken from the copy above.
const faqs = [
  { id: 1, question: "Why upgrade to Dynamics 365?", answer: "<p>To support dynamically changing processes and operational flow, enterprises are required to upgrade their system fulfilling timely needs. With Dynamics 365 upgrade services, businesses can improve their current workflow as well can get ready to cope with upcoming business challenges.</p>" },
  { id: 2, question: "Which Dynamics 365 upgrade services does Dynamics Square provide?", answer: "<p>Dynamics Square provides NAV to Business Central upgrade, AX to Finance &amp; Supply Chain upgrade, and upgrades from legacy systems to Dynamics 365, either on-premises or on-cloud.</p>" },
  { id: 3, question: "Does Microsoft still support older versions of Dynamics NAV?", answer: "<p>Microsoft has abandoned its support to older versions of NAV (older than 2018). If you are still running an older NAV version, it's time to ensure a NAV to Business Central upgrade.</p>" },
  { id: 4, question: "Can existing Dynamics AX customers still get support?", answer: "<p>Microsoft disabled Dynamics AX for new customers, although existing customers can still avail of additional benefits or AX support. Upgrading to Dynamics 365 Finance &amp; Supply Chain gives enterprises a range of advanced functionalities supporting their modernised processes and operational flow.</p>" },
  { id: 5, question: "How is data handled during a Dynamics 365 upgrade?", answer: "<p>We drive and ensure strategic data migration when you come up to upgrade to Dynamics 365. Our Dynamics 365 data migration services comprise customised, step-by-step, and secure data migration from your existing system to the newly implemented ones.</p>" },
  { id: 6, question: "What support is available after the upgrade?", answer: "<p>We provide highly embedded and customised post support services. Whether you need annual support services, independent support, or prepaid hour support, we serve you suited to your specific business context and business continuity needs.</p>" },
];

const relatedLinks = [
  { href: "/gp-to-business-central-migration/", title: "GP to Business Central Migration", icon: "bi-arrow-left-right" },
  { href: "/our-services/dynamics-365-training/", title: "Dynamics 365 Training", icon: "bi-mortarboard" },
  { href: "/our-services/dynamics-365-consultant/", title: "Dynamics 365 Consultant", icon: "bi-chat-dots" },
  { href: "/d365-business-central-support/", title: "Business Central Support", icon: "bi-headset" },
];

const sections = [
  { id: "why-upgrade", label: "Why Upgrade" },
  { id: "upgrade-solutions", label: "Upgrade Solutions" },
  { id: "why-us", label: "Why Dynamics Square" },
  { id: "faqs", label: "FAQs" },
];

const UpgradeServices = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeSolution, setActiveSolution] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="/img/upgrade-service-banner.png"
        imageAlt="Dynamics 365 Upgrade Services"
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
            <span>Dynamics 365 Upgrade Services</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Dynamics 365 Upgrade Services</h1>
              <p className={styles.heroLead}>Upgrade your system capabilities, process flow, adapt operational change, and bring quick user acceptance through our highly integrated and requirement-specific Dynamics 365 upgrade services.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/upgrade-service-banner.png" alt="Dynamics 365 Upgrade Services" width={514} height={472} priority sizes="(max-width: 991px) 100vw, 514px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== Why Upgrade ===== */}
      <section id="why-upgrade" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/upgrade-why.png" alt="Why Upgrade To Dynamics 365?" width={601} height={591} sizes="(max-width: 991px) 100vw, 480px" />
              </div>
            </div>
            <div className={`col-lg-7 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Why Upgrade To Dynamics 365?</h2>
              <p className={styles.lead}>Are you looking to upgrade solution to Dynamics 365? Discover all the answers right here.</p>
              <p>To support dynamically changing processes and operational flow, enterprises are required to upgrade their system fulfilling timely needs. When your process flow starts taking a lope, managing your data could be a complex task with reliability and security.</p>
              <p>With Dynamics 365 upgrade services, businesses can improve their current workflow as well can get ready to cope with upcoming business challenges. However, system upgrading needs may vary from business to business.</p>
              <p>Dynamics Square has vast experience and expertise to diagnose your current system needs and suggest you the best potential solution addressing your specific business needs, custom configurations, and initial integrations that could complete your entire upgrading needs.</p>
              <p>Whether to upgrade your legacy system with <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud capabilities</Link>, or performing NAV to Business Central upgrade, or ensuring <Link href="/blog/dynamics-ax-to-dynamics-365-migration/">AX to finance and supply chain upgrade</Link>, we can provide seamless and cost-effective upgrade solutions.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Get in Touch &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Upgrade Solutions ===== */}
      <section id="upgrade-solutions" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Dynamics 365 Upgrade Solutions</h2>
              <p>Leverage new functionalities and capabilities by upgrading your current ERP or CRM systems to Dynamics 365</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Dynamics 365 upgrade solutions">
              {solutions.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  id={`upgrade-tab-${i}`}
                  aria-selected={activeSolution === i}
                  aria-controls={`upgrade-panel-${i}`}
                  className={`${styles.modTab} ${activeSolution === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveSolution(i)}
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {s.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all upgrade content is crawlable */}
              {solutions.map((s, i) => (
                <div
                  key={s.title}
                  id={`upgrade-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`upgrade-tab-${i}`}
                  className={`${styles.modPanel}${activeSolution === i ? "" : " d-none"}`}
                >
                  <h3>{s.title}</h3>
                  <p className={styles.quoteLink}>{s.text}</p>
                  <div className="mt-4 text-center">
                    <Image src={s.img.src} alt={s.img.alt} width={s.img.width} height={s.img.height} className={styles.imgFlat} style={{ width: "100%", maxWidth: s.img.width > 300 ? 360 : 200, height: "auto" }} sizes="360px" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Looking for Dynamics 365 Upgrade Services?</h3>
              <p>Our team of experts will work with you to ensure a smooth and seamless upgrade experience.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Get Started Now &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Dynamics Square ===== */}
      <section id="why-us" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>How Upgrading to Dynamics 365 with Dynamics Square Could Be a Growth Hacking Deal for Your Enterprise?</h2>
            </div>
          </div>
          <div className={styles.diffGrid}>
            {advantages.map((a) => (
              <div className={styles.diffTile} key={a.title}>
                <i className={`bi ${a.icon}`}></i>
                <h3>{a.title}</h3>
                <p className={styles.quoteLink}>{a.text}</p>
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
                <h2 className={styles.h2}>Have you got questions about Dynamics 365 Upgrade Services?</h2>
                <p>Click through to our FAQ for the best answers!</p>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Get Started Now &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default UpgradeServices;
