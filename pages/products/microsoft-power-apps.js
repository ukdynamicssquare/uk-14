import Image from "next/image";
// eslint-disable-next-line no-unused-vars
import Script from "next/script";
import Link from "next/link";
import React, { useState } from "react";
import Blog from "../../components/Blog";
import PageSeo from "../../components/PageSeo";
import styles from "../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../components/bcTwo/SectionNav";
import FaqList from "../../components/bcTwo/FaqList";
import RelatedLinks from "../../components/bcTwo/RelatedLinks";

// Same Q&As as the page's original FAQ accordion (also used for FAQPage schema).
const faqs = [
  {
    id: 1,
    question: "Which apps are included in Power Apps?",
    answer: "<p>Power Apps consists of six solutions, which are: AI Builder, Automate Processes, Azure + Power Apps, Build Apps, Connect Data, and Pages. All these solutions have separate motives and can be used for different purposes.</p>",
  },
  {
    id: 2,
    question: "What kinds of apps can I build using Power Apps?",
    answer: "<p>You can rapidly build custom apps to connect your data sources to different Microsoft platforms. These customised apps are based on your business needs and complexity. It allows you to build various kinds of responsive applications that can be operated using the web and mobile.</p>",
  },
  {
    id: 3,
    question: "Is there any need to learn code to build apps?",
    answer: "<p>No, there is no need to learn any kind of code language to build a customised app using Power Apps. It comes with built-in templates and a simple user interface to help you understand the exact requirements and build the app accordingly. It is a kind of drag-and-drop platform where you only need to align the desired functions to get the desired result.</p>",
  },
  {
    id: 4,
    question: "How much time will it take to build an app using Power Apps?",
    answer: "<p>There can be no accurate answer to this question. It totally depends on the complexity of the app and the functions you want in an app. Users can build the required app whenever it is needed and modify it later to meet their changing needs.</p>",
  },
  {
    id: 5,
    question: "How many apps or services can I connect with Power Apps?",
    answer: "<p>You can connect an unlimited number of data sources, apps, and services with Power Apps to make the whole system work together and enhance the growth of the organisation. You can avail yourself of a library of Microsoft Dataverse and connectors to connect various data sources together. Not only data sources, but you can also integrate some other applications too, including <a href=\"/products/microsoft-azure/\">Azure</a>, Power Platform, <a href=\"/products/microsoft-dynamics-365/\">Microsoft Dynamics 365</a>, and more native apps.</p>",
  },
  {
    id: 6,
    question: "What are the top features of Power Apps?",
    answer: "<p>Power Apps offers numerous features and capabilities to help users efficiently build customised apps using low code. Some of the powerful features are pre-built templates, a drag-and-drop builder, a role based personalised user experience, a built-in website development tool, private submission of information, and much more.</p>",
  },
  {
    id: 7,
    question: "What are the available Power Apps pricing options?",
    answer: "<p>The Power Apps pricing and licencing is based on two basic plans: subscription or pay-as-you-go. The Subscription Plan is more flexible for businesses, allowing them to offer licences to users based on app usage. The pay-as-you-go Plan is designed for businesses that want to be charged monthly, per user, for the apps they use.</p><p><b>There are two per-app plan options available under the subscription plan:</b></p><ul><li>£4.10 per user/app/month</li><li>£15.40 per user/month</li></ul><p>The pay-as-you-go plan is £8.20 per active user/app/month.</p><p><b>See Other Power Platforms:</b></p><ul><li><a href=\"/products/microsoft-power-bi/\">Power BI</a></li><li><a href=\"/products/microsoft-power-virtual-agents/\">Power Virtual Agents</a></li><li>Power Automate</li></ul>",
  },
];

const whyItems = [
  {
    icon: "bi-lightning-charge",
    title: "Quick and Easy",
    paras: [
      "Power Apps offers easy-to-use tools that allow your team in developing the best applications in a much faster way. There are several essential features and tools to use such as prebuilt templates that help in developing the right application in a much shorter time. The user just can develop the required application by customising and offering some modifications to the already existing templates.",
      "The platform also enables the users to incorporate new updates and improvements as and when they are needed in the application ahead.",
    ],
  },
  {
    icon: "bi-code-square",
    title: "Professional App Development",
    paras: [
      <>Power Apps enable the employees to create applications that are well featured with advanced functionalities to offer a professional look to the applications.The platform includes AI (<Link href="/products/microsoft-dynamics-365-ai/">Artificial Intelligence</Link>) components that are pre-built-in order to offer features and specifications to the applications that are high-end so that they offer a professional look and experience.</>,
    ],
  },
  {
    icon: "bi-arrow-up-right-circle",
    title: "Enhancing Capabilities",
    paras: [
      "Making use of the Power Apps Microsoft platform ensures that you allow your employees the freedom to develop the applications in the best possible way. There are several functions and tools to allow the users to integrate several features and specifications in the applications to make them super professional. Apart from this, the platform also enables the users to enhance the capabilities of the applications from time to time.",
    ],
  },
  {
    icon: "bi-phone",
    title: "Responsive Design",
    paras: [
      "Power Apps ensure that the applications that are getting developed are perfect for several platforms and devices. It is due to the responsive design of the applications attained that the applications designed on this platform run well on any of the browsers and on devices such as smartphones as well as tablets.",
    ],
  },
  {
    icon: "bi-database",
    title: "Data",
    paras: [
      "The platforms enable the customised applications to make use of the data already available on the platform for analysis purposes. The applications can collect such data from the platform and can use them for the results. Apart from the data already existing on the platform, the applications also are offered the capabilities to extract data from external sources and use them to get the desired result.",
    ],
  },
];

const features = [
  { icon: "bi-people", title: "Enable everyone to build apps", text: "Everyone can build apps - from data analysts to professional software developers. Bring more efficiency and accuracy to solve business problems with PowerApps pre-built templates, AI components that require low code or minimal code." },
  { icon: "bi-palette", title: "Develop smart applications", text: "Leverage Power Apps canvas to begin your designing journey from scratch to professional. Customise every aspect of your app to optimise for specific tasks and functions." },
  { icon: "bi-window-stack", title: "Create modern apps from your data", text: "Automatically generate interactive, immersive, and responsive business applications from your data model that can run on any device. The drag-and-drop designer enables your team to customise business entities and tailor the user experience to specific roles." },
  { icon: "bi-plug", title: "Integrate and extend your apps", text: <>Take advantage of more than 200 connectors to <Link href="/products/microsoft-dynamics-365/integration/">integrate data and systems you already use</Link>. Extend Power Apps further as a professional developer with custom connectors and logic.</> },
];

const copilot = [
  { title: "AI-Driven App Creation", text: "Copilot suggests layouts, components, and workflows depending on business demands so users can create low-code apps faster. It simplifies app development by lowering the need for manual setups." },
  { title: "Conversational Automation", text: <>Copilot facilitates internal and customer <Link href="/ai-solutions/copilot-studio/">process automation driven by artificial intelligence</Link>. It can improve user engagement by generating automated responses, handling requests, and instantly starting processes.</> },
  { title: "Enhanced Data Integration", text: "Copilot guarantees flawless integration with Microsoft Dataverse, third-party APIs, and business systems by cleverly connecting and mapping data from many sources. This quickens data-driven decision-making." },
  { title: "Streamline Repetitive Tasks", text: <><Link href="/products/microsoft-power-automate/">Automate approvals, notifications, and repeated activities</Link> to replace manual interventions. AI-generated summaries from Copilot offer rapid process overviews, hence improving efficiency and lowering workload.</> },
];

const services = [
  { icon: "bi-gear", title: "Implementation", text: <>Successfully <Link href="/our-services/dynamics-365-implementation-services/">implement Power Apps solutions</Link> by our experts to ensure your needs are met on time and within budget.</> },
  { icon: "bi-person-check", title: "Support", text: <>Get constant and <Link href="/our-services/dynamics-365-support-services/">seamless support</Link> from Dynamics Square team to manage your web and mobile apps.</> },
  { icon: "bi-chat-dots", title: "Consulting", text: <>Get optimum Power Apps suited to your <Link href="/our-services/dynamics-365-consultant/">customised business needs</Link>.</> },
];

const plans = [
  {
    icon: "bi-code-slash",
    title: "Power Apps Developer Plan Free",
    price: "Free",
    text: "Sign up for a free developer account to build and test unlimited apps and automations.",
    items: ["Three developer environments", "Use prebuilt, custom, and on-premises connectors", "Microsoft Dataverse entitlement of 2 GB database", "Run up to 750 automation flows per month"],
    cta: "Try For Free",
  },
  {
    icon: "bi-stars",
    title: "Power Apps Premium",
    price: "£15.40",
    unit: "user/month, paid yearly",
    text: "Licensed users can build, modernise, and deploy unlimited applications without restrictions or limitations.",
    items: ["Unlimited Power Apps and Power Pages for assigned user", <>500 AI Builder credits<sub>1</sub></>, "Use prebuilt, custom, and on-premises connectors", "Dataverse entitlements of 250 MB database and 2 GB file"],
  },
  {
    icon: "bi-buildings",
    title: "Power Apps Premium",
    note: "(with 2,000-seat minimum)",
    price: "£9.20",
    unit: "user/month, paid yearly",
    text: "Ideal for businesses needing unlimited apps per user and willing to purchase at least 2,000 licences.",
    items: ["Unlimited Power Apps and Power Pages for assigned user", <>500 AI Builder credits<sub>1</sub></>, "Use prebuilt, custom, and on-premises connectors", "Dataverse entitlements of 250 MB database and 2 GB file"],
  },
];

const resourceLinks = [
  { href: "/blog/power-apps-pricing-licensing-uk/", label: "Power Apps Licensing & Pricing UK", icon: "bi-tag" },
  { href: "https://www.youtube.com/watch?v=Evkj4zfpk0Q", label: "Free Power BI Webinar", icon: "bi-play-circle", external: true },
  { href: "https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license", label: "Power BI Licensing Guide", icon: "bi-file-earmark-text", external: true },
  { href: "https://www.dynamicssquare.co.uk/blog/power-bi-architecture/", label: "Power BI Architecture", icon: "bi-diagram-3", external: true },
  { href: "https://www.dynamicssquare.co.uk/blog/power-bi-reports/", label: "Power BI Reports", icon: "bi-bar-chart-line", external: true },
  { href: "https://www.dynamicssquare.co.uk/blog/implement-power-bi-for-your-business/", label: "Why Your Business Should Implement Power BI?", icon: "bi-lightbulb", external: true },
];

const relatedLinks = [
  { href: "/products/azure-machine-learning/", title: "Azure Machine Learning", icon: "bi-cpu" },
  { href: "/ai-solutions/", title: "AI Solutions", icon: "bi-stars" },
  { href: "/ai-solutions/microsoft-fabric/", title: "Microsoft Fabric", icon: "bi-database" },
  { href: "/ai-solutions/microsoft-foundry/", title: "Microsoft Foundry", icon: "bi-boxes" },
];

const sections = [
  { id: "what-are-power-apps", label: "What are Power Apps?" },
  { id: "features", label: "Features" },
  { id: "copilot", label: "Copilot in Power Apps" },
  { id: "services", label: "Power Apps Service" },
  { id: "pricing", label: "Pricing" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Blogs & Resources" },
];

const PowerApps = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeItem, setActiveItem] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Power Apps Partner UK | Dynamics Square"
        description="Microsoft Power Apps can let you build low-code apps and drive swiftness across the core operations of the business. Schedule a demo today!"
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
            <span>Microsoft Power Apps</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Power Apps</h1>
              <p className={styles.heroLead}>Build low-code applications, drive swiftness and modernise processes across your organisation without compromising quality and speed with Microsoft Power Apps.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/power-apps-banner-01.svg" alt="What are Power Apps?" width={1024} height={586} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Schedule a Demo" />

      {/* ===== What are Power Apps ===== */}
      <section id="what-are-power-apps" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>What are Power Apps?</h2>
              <p>Microsoft Power Apps is a collection of powerful services, solutions, and data platforms to help you build customised apps for your changing business requirements. These customised apps allow users to turn most of the manual and recurring tasks into automated processes with the flexibility to operate on any device, whether web, mobile, or PC. Power Apps is capable of revolutionising the way of building customised apps rapidly without using code, resulting in low investment and high revenue.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Power Apps capabilities">
              {whyItems.map((w, i) => (
                <button
                  key={w.title}
                  type="button"
                  role="tab"
                  id={`pa-tab-${i}`}
                  aria-selected={activeItem === i}
                  aria-controls={`pa-panel-${i}`}
                  className={`${styles.modTab} ${activeItem === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveItem(i)}
                >
                  <i className={`bi ${w.icon}`} aria-hidden="true" style={{ fontSize: 22, width: 34, textAlign: "center" }}></i>
                  {w.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all content is crawlable */}
              {whyItems.map((w, i) => (
                <div
                  key={w.title}
                  id={`pa-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`pa-tab-${i}`}
                  className={`${styles.modPanel}${activeItem === i ? "" : " d-none"}`}
                >
                  <h3>{w.title}</h3>
                  {w.paras.map((p, j) => (
                    <p key={j} className={`${styles.quoteLink}${j < w.paras.length - 1 ? " mb-3" : ""}`}>{p}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-4 ${styles.textCol}`}>
              <h2 className={styles.h2}>What are Power Apps Features</h2>
            </div>
            <div className="col-lg-8">
              <div className={styles.diffGrid}>
                {features.map((f) => (
                  <div className={styles.diffTile} key={f.title}>
                    <i className={`bi ${f.icon}`}></i>
                    <h3>{f.title}</h3>
                    <p className={styles.quoteLink}>{f.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Copilot ===== */}
      <section id="copilot" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-4">
            <div className={`col-lg-5 ${styles.textCol}`}>
              <h2 className={styles.h2}>Copilot in Power Apps</h2>
              <p className={styles.lead}><Link href="/products/dynamics-365-copilot/">Microsoft Copilot</Link> enables AI-powered automation, app optimisation, and intelligent recommendations in Power Apps, hence simplifying app development. It helps users create and run apps with little code required.</p>
            </div>
            <div className="col-lg-7">
              <ol className={styles.numList} style={{ marginTop: 0 }}>
                {copilot.map((c) => (
                  <li key={c.title}>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, color: "#2d2640", marginBottom: 6 }}>{c.title}</h3>
                      <p>{c.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Services ===== */}
      <section id="services" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Power Apps Service</h2>
              <p>We offer a full range of services to support you on your Dynamics journey including implementation, upgrade and support.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {services.map((s) => (
              <article className={styles.capCard} key={s.title}>
                <i className={`bi ${s.icon}`}></i>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <Link href="#exampleModal" data-bs-toggle="modal" className={styles.caseMore} aria-label={`Get Started with Power Apps ${s.title}`}>
                  Get Started <i className="bi bi-arrow-right"></i>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Pricing ===== */}
      <section id="pricing" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Microsoft Power Apps Pricing</h2>
              <p>Explore Power Apps Plans, Costs, And Availability To Start Running Your Business Apps.</p>
            </div>
          </div>
          <div className={`${styles.reasonGrid} ${styles.reasonGrid3}`}>
            {plans.map((p) => (
              <article className={styles.reasonCard} key={p.title + p.price} style={{ display: "flex", flexDirection: "column" }}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${p.icon}`}></i></span>
                  <h3>{p.title}</h3>
                </div>
                {p.note && <p className="mb-2">{p.note}</p>}
                <div className={styles.priceBox} style={{ marginTop: 6, marginBottom: 14 }}>
                  <strong>{p.price}</strong>
                  {p.unit && <span>{p.unit}</span>}
                </div>
                <p>{p.text}</p>
                <ul className={styles.capList}>
                  {p.items.map((it, k) => (
                    <li key={k}>{it}</li>
                  ))}
                </ul>
                {p.cta && (
                  <Link href="#exampleModal" data-bs-toggle="modal" className={styles.caseMore} style={{ marginTop: "auto", paddingTop: 18 }}>
                    {p.cta} <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
              </article>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Get Power Apps Now &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Looking to reduce development costs and improve overall efficiency?</h3>
              <p>Talk to our Power Apps experts to schedule a free demo.</p>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Get Started Now &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2 className={styles.h2}>Have you got questions about Microsoft Power Apps?</h2>
                <p>Click through to our FAQ for the best answers!</p>
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
      <section id="resources" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Explore Our Recent Blogs &amp; Resources</h2>
              <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </div>
          </div>
          <div className={`mt-2 ${styles.resHub}`}>
            <Blog category={"power-apps"} />
            <div className="col-lg-6">
              <div className={styles.resLinksCard}>
                <h3><i className="bi bi-bookmark-star" aria-hidden="true"></i>Important Power BI Links:</h3>
                <ul>
                  {resourceLinks.map((r) => {
                    const inner = (
                      <>
                        <span className={styles.resIcon}><i className={`bi ${r.icon}`} aria-hidden="true"></i></span>
                        <span className={styles.resText}>{r.label}</span>
                        <i className={`bi ${r.external ? "bi-box-arrow-up-right" : "bi-arrow-right"} ${styles.resArrow}`} aria-hidden="true"></i>
                      </>
                    );
                    return (
                      <li key={r.href}>
                        {r.external ? (
                          <a href={r.href} target="_blank" rel="noopener noreferrer">{inner}</a>
                        ) : (
                          <Link href={r.href}>{inner}</Link>
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

export default PowerApps;
