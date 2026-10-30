import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "../../components/Blog";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";
import PageSeo from "../../components/PageSeo";

const PAGE_TITLE = "Microsoft Power Automate: Demo & Pricing UK | Dynamics Square";
const PAGE_DESC = "Power Automate offers the ability to easily create workflows directly in your applications with a no-code approach that connects to hundreds of popular. Do call us for demo & pricing!";

const highlights = [
  {
    icon: "/img/icons-power-automate_Quick-and-Secure.svg",
    title: "Quick and Secure",
    paras: [
      <>Creating automated systems through Power Automate is not just quick and easy but also quite secure. The platform comes loaded with features such as drag and drop, prebuilt connectors, and low code to create repetitive activities in automated flows that are also very easy. Most importantly, all the automated tasks are kept secure within your <Link href="/products/microsoft-azure/">Microsoft cloud</Link> and you do not have to worry about any data getting leaked or stolen.</>,
    ],
  },
  {
    icon: "/img/icons-power-automate_Enhanced-Efficiency.svg",
    title: "Enhanced Efficiency",
    paras: [
      "While the platform helps in creating automated flows, it also allows you to record the processes from start to end. You can visualise the recording process and analyse the flow and understand it will actually happen. This way, you can check out in advance how the flow is going to work and look before you actually finalise a particular automated flow. Thus, no more guesswork as you can be pretty sure about the automated flow process that you are finalising for your data or system.",
    ],
  },
  {
    icon: "/img/icons-power-automate_AI-Support.svg",
    title: "AI Support",
    paras: [
      <>Another great thing about Power Automate is that it is supported by an AI system. The Artificial Intelligence system does not just make the working of the system interesting and easy but also quite helpful for the users. It is due to AI technology that you will be able to create new flows on the basis of models that are existing already. The platform can detect texts and images to help you in creating your flow or even help you in <Link href="/products/microsoft-power-bi/">analysing data</Link>.</>,
      "Another great thing about Power Automate is that it is supported by an AI system. The Artificial Intelligence system does not just make the working of the system interesting and easy but also quite helpful for the users. It is due to AI technology that you will be able to create new flows on the basis of models that are existing already. The platform can detect texts and images to help you in creating your flow or even help you in analysing data.",
    ],
  },
  {
    icon: "/img/icons-power-automate_Highly-Compatible.svg",
    title: "Highly Compatible",
    paras: [
      "Another great thing about this platform is that it is highly compatible with different devices and platforms. Whether you are using Power Automate for web on your desktop or you are using it in the form of an application on your smartphone, it will work the same and will offer you the same features and functions. Thus, you can get the right one based on your comfort and requirement and start using it at your own convenience.",
    ],
  },
];

const versions = [
  { icon: "bi-pc-display", word: "Desktop", text: "You can select Power Automate for desktop so that you can work on your desktop from the comfort of your office and create automated flows on Windows 11 OS." },
  { icon: "bi-phone", word: "Mobile", text: "With Power Automate for Mobile, you can complete the task of creating automated flows on your mobile phone itself from anywhere and at any time at your convenience." },
  { icon: "bi-globe2", word: "Web", text: "Create your flows with the help of Power Automate for the web. Just sign in to your account from any web browser on any device. You can even save the created flow and then check it later on from the device you usually use the system." },
  { icon: "bi-microsoft-teams", word: "Microsoft Teams", text: "The most innovative type of Power Automate for Microsoft Teams. This allows the user to create flows in the Microsoft cloud for the conversation of the entire team who are a part of the Microsoft Teams. The whole team can check out the flow and can work accordingly." },
];

const services = [
  { img: "/img/settings_b.png", title: "Implementation", text: "Successfully implement Power Automate solutions by our experts to ensure your needs are met on time and within budget." },
  { img: "/img/person_pin.png", title: "Support", text: "Get constant and seamless support from Dynamics Square team to create and manage your work flows." },
  { img: "/img/forum.png", title: "Consulting", text: <>Get optimum Power Automate Services to your <Link href="/our-services/dynamics-365-consultant/">customised business needs</Link>.</> },
];

const powerBiLinks = [
  { href: "/blog/what-is-power-bi/", title: "What is Power BI?", icon: "bi-question-circle" },
  { href: "https://www.youtube.com/watch?v=Evkj4zfpk0Q", title: "Free Power BI Webinar", icon: "bi-play-circle", external: true },
  { href: "https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license", title: "Power BI Licensing Guide", icon: "bi-file-earmark-text", external: true },
  { href: "/blog/power-bi-architecture/", title: "Power BI Architecture", icon: "bi-diagram-3" },
  { href: "/blog/power-bi-reports/", title: "Power BI Reports", icon: "bi-bar-chart-line" },
  { href: "/blog/implement-power-bi-for-your-business/", title: "Why Your Business Should Implement Power BI?", icon: "bi-lightbulb" },
];

// The page had no FAQ section: these answers only restate facts already on the page.
const faqs = [
  { id: 1, question: "What is Power Automate?", answer: "<p>Power Automate offers the ability to easily create workflows directly in your applications with a no-code approach that connects to hundreds of popular applications and services on the market. Sync files, get notifications, collect data, and much more.</p>" },
  { id: 2, question: "What versions of Power Automate are available?", answer: "<p>Power Automate is available in four different versions from which you can select the right one depending upon your requirements: Power Automate for desktop, Power Automate for Mobile, Power Automate for the web and Power Automate for Microsoft Teams.</p>" },
  { id: 3, question: "Is Power Automate secure?", answer: "<p>Yes. All the automated tasks are kept secure within your Microsoft cloud and you do not have to worry about any data getting leaked or stolen.</p>" },
  { id: 4, question: "How does AI support Power Automate?", answer: "<p>Power Automate is supported by an AI system. It is due to AI technology that you will be able to create new flows on the basis of models that are existing already. The platform can detect texts and images to help you in creating your flow or even help you in analysing data.</p>" },
  { id: 5, question: "How much does Power Automate cost?", answer: "<p>Power Automate Premium is £11.50 user/month, paid yearly, and Power Automate Process is £115.30 bot/month, paid yearly. You can also experience Power Automate, including premium features, free for 30 days.</p>" },
  { id: 6, question: "Which Power Automate services does Dynamics Square offer?", answer: "<p>Dynamics Square offers Power Automate implementation, support and consulting, so your needs are met on time and within budget and your work flows are created and managed with constant and seamless support.</p>" },
];

const relatedLinks = [
  { href: "/ai-solutions/copilot-studio/", title: "Microsoft Copilot Studio", icon: "bi-robot" },
  { href: "/ai-solutions/", title: "AI Solutions", icon: "bi-stars" },
  { href: "/ai-solutions/microsoft-fabric/", title: "Microsoft Fabric", icon: "bi-database" },
  { href: "/our-services/dynamics-365-training/", title: "Dynamics 365 Training", icon: "bi-mortarboard" },
];

const sections = [
  { id: "what-is-power-automate", label: "What is Power Automate?" },
  { id: "features", label: "Features" },
  { id: "services", label: "Services" },
  { id: "pricing", label: "Pricing" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Blogs & Resources" },
];

const PowerAutomate = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <Link href="/products/microsoft-power-platform/">Microsoft Power Platform</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Microsoft Power Automate</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Power Automate</h1>
              <p className={styles.heroLead}>Automate processes and increase productivity with Power Automate. No coding Required.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/power-automate-banner.svg" alt="What is Power Automate?" width={1024} height={586} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== What is Power Automate ===== */}
      <section id="what-is-power-automate" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>What is Power Automate?</h2>
              <p className={styles.lead}>Power Automate offers the ability to easily create workflows directly in your applications with a no-code approach that connects to hundreds of popular applications and services on the market. Sync files, get notifications, collect data, and much more.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Power Automate highlights">
              {highlights.map((h, i) => (
                <button
                  key={h.title}
                  type="button"
                  role="tab"
                  id={`pa-tab-${i}`}
                  aria-selected={activeTab === i}
                  aria-controls={`pa-panel-${i}`}
                  className={`${styles.modTab} ${activeTab === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  <img src={h.icon} alt="" aria-hidden="true" width={34} height={34} loading="lazy" decoding="async" />
                  {h.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all content is crawlable */}
              {highlights.map((h, i) => (
                <div
                  key={h.title}
                  id={`pa-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`pa-tab-${i}`}
                  className={`${styles.modPanel}${activeTab === i ? "" : " d-none"}`}
                >
                  <h3>{h.title}</h3>
                  {h.paras.map((p, j) => (
                    <p key={j} className={`${styles.quoteLink}${j < h.paras.length - 1 ? " mb-3" : " mb-0"}`}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features (versions) ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>What are Power Automate Features</h2>
              <h3 className={styles.lead} style={{ fontSize: 18, fontWeight: 400 }}>Power Automate is available in four different versions from which you can select the right one depending upon your requirements.</h3>
            </div>
          </div>
          <div className={styles.bento}>
            {versions.map((v, i) => (
              <div
                className={`${styles.bentoCard} ${i === 0 ? styles.bentoHero : ""} ${i === versions.length - 1 ? styles.bentoWide : ""}`}
                key={v.word}
              >
                <i className={`bi ${v.icon}`}></i>
                <div>
                  <h3 className={styles.bentoWord} style={i === 0 ? { color: "#fff" } : undefined}>For {v.word}</h3>
                  <p>{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Power Automate Services</h2>
              <p className={styles.quoteLink}>We offer a full range of services to support you on your <Link href="/products/microsoft-dynamics-365/">Dynamics journey</Link> including <Link href="/our-services/dynamics-365-implementation-services/">implementation</Link>, upgrade and <Link href="/our-services/dynamics-365-support-services/">support</Link>.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {services.map((s) => (
              <article className={styles.capCard} key={s.title}>
                <Image src={s.img} alt="" aria-hidden="true" width={48} height={48} className={styles.capIcon} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href="#exampleModal" data-bs-toggle="modal" className={styles.caseMore} aria-label={`Get Started with Power Automate ${s.title}`}>
                  Get Started <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Power Automate Pricing</h2>
              <p>Explore Power Automate Plans, Costs, And Availability To Start Creating Workflows</p>
            </div>
          </div>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            <article className={`${styles.reasonCard} d-flex flex-column`}>
              <div className={styles.reasonHead}>
                <span className={styles.reasonBadge}><i className="bi bi-code-slash"></i></span>
                <h3><Link href="/products/microsoft-power-apps/" className="text-reset">Power Apps Developer</Link> Plan Free</h3>
              </div>
              <div className={styles.priceBox}><strong>Free</strong></div>
              <p className="mt-3">Experience Power Automate, including premium features, free for 30 days.</p>
              <div className="mt-auto pt-3">
                <Link href="#exampleModal" data-bs-toggle="modal" className={styles.caseMore}>
                  Try For Free <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </article>
            <article className={styles.reasonCard}>
              <div className={styles.reasonHead}>
                <span className={styles.reasonBadge}><i className="bi bi-person-check"></i></span>
                <h3>Power Automate Premium</h3>
              </div>
              <p>Per user plan</p>
              <div className={styles.priceBox}><strong>£11.50</strong><span>user/month, paid yearly</span></div>
              <p className="mt-3">Scale workflows using cloud and desktop flows, premium connectors, process mining, AI, and automation tools.</p>
            </article>
            <article className={styles.reasonCard}>
              <div className={styles.reasonHead}>
                <span className={styles.reasonBadge}><i className="bi bi-robot"></i></span>
                <h3>Power Automate Process</h3>
              </div>
              <p>Per user plan with attended RPA</p>
              <div className={styles.priceBox}><strong>£115.30</strong><span>bot/month, paid yearly</span></div>
              <p className="mt-3">License a bot for unattended desktop or cloud flows, accessible by unlimited users across your organisation for streamlined, scalable automation and workflow execution.</p>
            </article>
          </div>
          <div className={`${styles.heroActions} mt-5`}>
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Get Power Automate Now &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Microsoft Power Automate?</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
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

      {/* ===== Blogs & Resources ===== */}
      <section id="resources" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Explore Our Recent Blogs &amp; Resources</h2>
              <p className={styles.quoteLink}>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </div>
          </div>
          <div className={`mt-2 ${styles.resHub}`}>
            <Blog category={"power-platform"} />
            <div className="col-lg-6">
              <div className={styles.resLinksCard}>
                <h3><i className="bi bi-bookmark-star" aria-hidden="true"></i>Important Power BI Links:</h3>
                <ul>
                  {powerBiLinks.map((l) => {
                    const inner = (
                      <>
                        <span className={styles.resIcon}><i className={`bi ${l.icon}`} aria-hidden="true"></i></span>
                        <span className={styles.resText}>{l.title}</span>
                        <i className={`bi ${l.external ? "bi-box-arrow-up-right" : "bi-arrow-right"} ${styles.resArrow}`} aria-hidden="true"></i>
                      </>
                    );
                    return (
                      <li key={l.href}>
                        {l.external ? (
                          <a href={l.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                        ) : (
                          <Link href={l.href}>{inner}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />
    </>
  );
};

export default PowerAutomate;
