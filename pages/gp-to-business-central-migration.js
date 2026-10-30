import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import ResourceTabs from "../components/bcTwo/ResourceTabs";
import RelatedLinks from "../components/bcTwo/RelatedLinks";
import { gpResources, gpLinks } from "../components/bcTwo/legacyResources";
import PageSeo from "../components/PageSeo";

const PAGE_TITLE = "Dynamics GP to Business Central Migration | Dynamics Square UK";
const PAGE_DESC = "Guide to seamless migration from Dynamics GP to Business Central. Enhance your business efficiency with a smooth transition. Upgrade now!";

const options = [
  { title: "Continue Using Dynamics GP", text: "If your GP is working absolutely fine and you are not facing any issues in terms of updates, upgrades, or support, you can continue using this solution." },
  { title: "Migrate to a New ERP", text: <>If your Dynamics GP is unable to align with the changing demands of your business, you should consider migrating or upgrading to a new ERP that understands your business. Based on your requirements, you can opt for an ERP solution like <Link href="/products/microsoft-dynamics-365-finance-operations/">Microsoft Dynamics 365 Finance and Operations</Link> or Business Central.</> },
  { title: "Migrate to Microsoft Business Central", text: <>Your <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud system</Link> provider will make sure to update and upgrade your system on time without hampering your existing business operations. Also, the <Link href="/">ERP implementation partner</Link> will ensure <Link href="/d365-business-central-support/">timely maintenance</Link>, reducing overall downtime.</> },
];

const benefits = [
  { title: "New Tools and Capabilities", text: <>Built using the latest technologies, Microsoft Business Central offers exceptional <Link href="/products/dynamics-365-business-central/advantages-capabilities/">capabilities and tools</Link> to deal with modern business issues.</> },
  { title: "Lower Cost of Ownership", text: "With the flexible licencing and pricing plans, you can reduce the total cost of ownership by a considerable amount—60%." },
  { title: "Access Automation", text: "With AI, ML, and BI, Business Central offers automation to eliminate the chances of errors occurring due to manual and repetitive tasks." },
  { title: "Streamlined Data Reporting", text: "MSD 365 BC offers real-time data insights so that users can make actionable decisions whenever possible for a maximised output." },
  { title: "Auto Updates and Upgrades", text: "Microsoft releases the updates, upgrades, and patches twice a year and automatically makes the changes with Business Central Cloud. It eliminates the need for a company to invest resources in updating." },
  { title: "Lower Maintenance Cost", text: "As Microsoft takes care of updates and upgrades, businesses have to invest fewer resources to maintain BC for optimal performance." },
  { title: "Seamless Customisation", text: <>Unique businesses have unique requirements, and to help such businesses, you can <Link href="/products/dynamics-365-business-central/customisation/">customise these powerful solutions</Link> with the help of a certified Business Central partner to <Link href="/our-services/dynamics-365-support-services/">support</Link> your specific needs.</> },
  { title: "Global Connectivity", text: "With centralised data centres, users can access the data of any business operation from anywhere and anytime." },
  { title: "Ease of Use", text: "The interface of Business Central is so simplified that even a novice user can access and understand it on first use. All functions and tools are properly placed, making this ERP solution efficient and effective." },
  { title: "Add Desired Integration", text: <>Microsoft has an ecosystem that supports businesses in different ways. You can integrate <Link href="/products/microsoft-dynamics-365/integration/">native Microsoft applications</Link> to get enhanced efficiency and productivity using Business Central.</> },
];

const smallBusiness = [
  { icon: "bi-cloud-arrow-up", title: "Move to Cloud - Embrace Future", text: "Cloud technologies are the future of our businesses. Business Central Cloud offers you the opportunity to grow even in tough scenarios while optimising your existing business operations." },
  { icon: "bi-arrows-angle-expand", title: "Scale as you Grow", text: "With the growth of your business, you can increase the performance of your ERP solution by enhancing the server's capabilities in no time." },
  { icon: "bi-graph-up-arrow", title: "Boost Productivity - 2x your Revenue", text: "Business Central simplifies the existing processes, promotes collaboration, and accelerates growth while enhancing overall productivity." },
];

// The page had no FAQ section: these answers only restate facts already on the page.
const faqs = [
  { id: 1, question: "When does Microsoft Dynamics GP support end?", answer: "<p>In September 2024, Microsoft announced the Dynamics GP end-of-life timeline: sales of new GP licences end in 2025 (with existing customers able to add licences until 2026), mainstream support continues until 2029, and security updates continue until 2031.</p>" },
  { id: 2, question: "Do I have to migrate from Dynamics GP to Business Central now?", answer: "<p>If your GP is working absolutely fine and you are not facing any issues in terms of updates, upgrades, or support, you can continue using this solution. If your Dynamics GP is unable to align with the changing demands of your business, you should consider migrating or upgrading to a new ERP that understands your business.</p>" },
  { id: 3, question: "Which ERP can I move to from Dynamics GP?", answer: "<p>Based on your requirements, you can opt for an ERP solution like Microsoft Dynamics 365 Finance and Operations or Business Central.</p>" },
  { id: 4, question: "What is Microsoft Dynamics 365 Business Central?", answer: "<p>D365 BC is an all-in-one business solution capable of streamlining, managing, and controlling the entire business from a unified dashboard in real-time. It is a cloud-based solution that comes with flexible Business Central pricing, licencing, workflow automation, automatic updates, a low cost of ownership, a user-friendly user interface, and much more.</p>" },
  { id: 5, question: "How can Business Central lower costs compared with Dynamics GP?", answer: "<p>With the flexible licencing and pricing plans, you can reduce the total cost of ownership by a considerable amount—60%. As Microsoft takes care of updates and upgrades, businesses have to invest fewer resources to maintain BC for optimal performance.</p>" },
  { id: 6, question: "How often is Business Central updated?", answer: "<p>Microsoft releases the updates, upgrades, and patches twice a year and automatically makes the changes with Business Central Cloud. It eliminates the need for a company to invest resources in updating.</p>" },
];

const relatedLinks = gpLinks.filter((l) => l.href !== "/gp-to-business-central-migration/");

const sections = [
  { id: "why-migrate", label: "Why Migrate?" },
  { id: "gp-support", label: "GP Licence & Support" },
  { id: "what-to-do", label: "What to do Now?" },
  { id: "benefits", label: "Benefits" },
  { id: "small-businesses", label: "Small Businesses" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const VideoEmbed = ({ src, title }) => (
  <div className="mx-auto mt-4" style={{ maxWidth: 720 }}>
    <div className="ratio ratio-16x9" style={{ borderRadius: 16, overflow: "hidden" }}>
      <iframe src={src} title={title} loading="lazy" style={{ border: 0 }} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  </div>
);

const WhyMigrade360 = () => {
  const { active, navTop } = useSectionNav(sections);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="https://www.dynamicssquare.co.uk/img/why-migrate-36--banner.png"
        imageAlt="Microsoft Dynamics GP to Business Central migration"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Dynamics GP to Business Central Migration</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Dynamics GP to Business Central Migration: Upgrade to an Advanced Solution</h1>
              <p className={styles.heroLead}>Embrace a modern and advanced ERP solution to avail automation, simplicity, and enhanced visibility.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Let&apos;s Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/why-migrate-36--banner.png" alt="Migrating from Microsoft Dynamics GP to Dynamics 365 Business Central" width={660} height={464} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Let's Get Started" />

      {/* ===== Why Migrate ===== */}
      <section id="why-migrate" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why Migrate from Dynamics GP to Microsoft Dynamics 365 Business Central?</h2>
              <p className={`${styles.lead} ${styles.quoteLink}`}>Undoubtedly, <Link href="/products/microsoft-dynamics-gp/">Microsoft GP</Link> is a powerful ERP solution when it comes to managing the finance and accounting operations of a business. But, with the changing requirements of modern businesses, it is unable to cope with the change&apos;s businesses are going through.</p>
              <p className={styles.quoteLink}>Microsoft understands the requirements and demands of such businesses and has offered a modern, simple, and advanced ERP solution: <Link href="/products/dynamics-365-business-central/">Microsoft Dynamics 365 Business Central</Link>. D365 BC is an all-in-one business solution capable of streamlining, managing, and controlling the entire business from a unified dashboard in real-time.</p>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-4`}>
            <div className={styles.infoCard}>
              <i className="bi bi-cloud-check"></i>
              <p className={styles.quoteLink}>It is a cloud-based solution that comes with flexible <Link href="/products/dynamics-365-business-central/pricing-licensing/">Business Central pricing, licencing</Link>, workflow automation, automatic updates, a low cost of ownership, a user-friendly user interface, and much more.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-calendar-x"></i>
              <p>There can be numerous reasons that justify the migration from Dynamics GP to Business Central. But, among them, the ending of service and support offered by Microsoft for Dynamics GP users is the major one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GP Licence & Support ===== */}
      <section id="gp-support" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Dynamics GP Licence and Support Details</h2>
              <p className={styles.lead}>In September 2024, Microsoft announced the Dynamics GP end-of-life timeline: sales of new GP licences end in 2025 (with existing customers able to add licences until 2026), mainstream support continues until 2029, and security updates continue until 2031.</p>
              <p className={`${styles.closingLine} ${styles.closingLineDark} ${styles.quoteLink}`}>Most probably, you are using Microsoft GP, and if it is working fine, there is no need to <Link href="/dynamics-365-business-central-implementation/">migrate or upgrade to Business Central</Link> until it starts to show errors and bugs. But you are possibly looking for a solution to what to do next with unbalanced Dynamics GP—your reason for being here.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles.mediaFlat}>
                <Image src="/img/gptobusinesscentralmigrate.png" alt="Dynamics GP licence and support end-of-life timeline" width={624} height={359} sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== What to do now ===== */}
      <section id="what-to-do" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>What to do Now? - Migrate to BC or Keep Using GP</h2>
              <p>This is a very typical question to answer, but you will get your answer here. If you are stuck in this situation, you have three options:</p>
              <ol className={styles.numList}>
                {options.map((o) => (
                  <li key={o.title}>
                    <div>
                      <h3 className="mb-1" style={{ fontSize: 19 }}>{o.title}</h3>
                      <p>{o.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-6 align-self-center">
              <VideoEmbed src="https://www.youtube.com/embed/nTl0_n7rnxI" title="YouTube video player" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Top Benefits of Migrating to Dynamics 365 Business Central</h2>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {benefits.map((b, i) => (
              <article className={styles.reasonCard} key={b.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge} style={{ fontWeight: 800 }}>{i + 1}</span>
                  <h3>{b.title}</h3>
                </div>
                <p className={styles.quoteLink}>{b.text}</p>
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
              <h3>Migrate to Microsoft Dynamics 365 Business Central Today!</h3>
              <p>Supercharge your business with a set of advanced features, capabilities, and tools for enhanced profitability and revenue.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Implement the Business Central Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Small businesses ===== */}
      <section id="small-businesses" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-lg-9 text-center ${styles.introCol}`}>
              <h2 className={styles.h2}>Why Small Businesses Should Migrate to Dynamics 365 Business Central Now!</h2>
            </div>
          </div>
          <ol className={styles.steps}>
            {smallBusiness.map((s) => (
              <li className={styles.step} key={s.title}>
                <span className={styles.stepDot}><i className={`bi ${s.icon}`}></i></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <p className={`text-center mt-5 mb-0 ${styles.quoteLink}`}>Check out the video comparing <Link href="/products/dynamics-365-business-central/financial-management/">financial reporting tools</Link> between Dynamics GP and Business Central.</p>
          <VideoEmbed src="https://www.youtube.com/embed/TlYBumCmTeA?start=1" title="YouTube video player" />
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Dynamics GP to Business Central migration?</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat} text-center`}>
                  <Image src="/img/MaskGroup8.png" alt="Business consultant" width={339} height={483} sizes="(max-width: 991px) 60vw, 240px" style={{ width: "60%", height: "auto", margin: "0 auto" }} />
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Let&apos;s Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
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
        title="Get Started with Your GP to Business Central Migration"
        intro="Case studies, e-books, podcasts and blogs to help you plan your move from Dynamics GP to Business Central."
        tabs={gpResources}
      />

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />
    </>
  );
};

export default WhyMigrade360;
