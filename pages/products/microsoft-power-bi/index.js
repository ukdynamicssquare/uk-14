import React, { useState } from "react";
import Image from "next/image";
// eslint-disable-next-line no-unused-vars
import Script from "next/script";
import Link from "next/link";
import styles from "../../../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../../../components/bcTwo/SectionNav";
import FaqList from "../../../components/bcTwo/FaqList";
import RelatedLinks from "../../../components/bcTwo/RelatedLinks";
import FormGuide from "../../../components/FormGuide";
import Blog from "../../../components/Blog";
import PageSeo from "../../../components/PageSeo";

const components = [
  {
    title: "Power BI Desktop",
    img: { src: "/img/Power-BI-Desktop.svg", alt: "Get Microsoft Power BI Consulting Services" },
    text: "Leveraging Power BI Desktop, connect all your data sources, create data models, and finally prepare interactive visuals and key analytics to make smarter decisions with instant efficiency.",
  },
  {
    title: "Power BI Service",
    img: { src: "/img/Power-Bi-Service.svg", alt: "Power BI Desktop" },
    text: "Streamline your data visualisation and key analytics across your business channels so as everyone can make effective and productive decisions fulfilling the timely need.",
  },
  {
    title: "Power BI Mobile",
    img: { src: "/img/Power-Bi-Mobile.svg", alt: "Power BI Service" },
    text: <>Stay connected to your data with mobile intelligence. With Power BI Mobile, access, view, and leverage the Power BI reports & insights whenever and wherever required.</>,
  },
];

const features = [
  { icon: "bi-sliders", title: "Highly Customizable", text: <>Power BI can be configured and customised suited to your specific business requirements. Businesses can integrate their Power BI with <Link href="/products/microsoft-dynamics-365/integration/">existing Microsoft apps or third-party apps</Link> seamlessly.</> },
  { icon: "bi-bar-chart-line", title: "Transform Your Data", text: "With Power BI, it becomes easy to create visual reports & analytics, publish & share the insights, and enable everyone to make data-driven decisions across the organisational boundaries." },
  { icon: "bi-shield-lock", title: "Secure & Reliable", text: "Power BI is a highly secured and reliable tool that meets your company's compliance and regulation needs when it comes to sharing data globally." },
  { icon: "bi-hand-index-thumb", title: "Easy User Adaptation", text: "From creating powerful visual insights to publishing & sharing with others; Power BI is built imbibing MS drag and drop features, thereby, allows easy and quick user adaption." },
];

const copilot = [
  { icon: "bi-book", title: "Advanced Data Storytelling", text: "By aggregating important trends, anomalies, and business patterns, Copilot turns unprocessed data into gripping stories. It saves hours of laborious analysis by automatically creating reports and dashboards with insightful commentary." },
  { icon: "bi-chat-square-text", title: "Interactive Query Assistance", text: "Users can interact with Copilot using natural language to ask complex queries and receive accurate, contextual insights. It eliminates the need for extensive DAX or SQL knowledge, making data analytics more accessible." },
  { icon: "bi-graph-up-arrow", title: "Real-time Insights & Predictive Analytics", text: <>Copilot offers forecast insights and constantly watches data patterns to enable companies to make proactive decisions. Real-time updates from <Link href="/ai-solutions/">cloud-based artificial intelligence models</Link> guarantee reliable, data-backed strategies.</> },
  { icon: "bi-file-earmark-bar-graph", title: "Automate Report Generation", text: "Reduce manual effort with AI-driven report creation. Copilot automates data structuring, visualisation, and summary writing, ensuring teams focus more on analysis rather than repetitive tasks." },
];

const services = [
  { img: "/img/settings_b.png", alt: "", title: "Implementation", text: "Get Power BI Implementation customised and configured suited to your specific business needs.", href: "/power-bi-implementation/" },
  { img: "/img/person_pin.png", alt: "", title: "Support", text: "Get our Power BI Support Services to fully meet your business needs. Contact our Power Expert Now.", href: "/products/microsoft-power-bi/support/" },
  { img: "/img/forum.png", alt: "forum", title: "Consulting", text: "Get optimum D365 Power BI service suited to your customised business needs.", href: "#exampleModal", modal: true, badge: true },
];

const plans = [
  {
    icon: "bi-gift",
    title: "Microsoft Power BI Free Trial",
    price: "£0",
    unit: "",
    text: "Create rich, interactive reports that put visual analytics at your fingertips.",
    items: [<>Included in <Link href="/ai-solutions/microsoft-fabric/">Microsoft Fabric</Link> free account</>, "No credit card required", "Upgrade to Pro or Premium to share reports"],
    cta: "Try For Free",
  },
  {
    icon: "bi-person-badge",
    title: "Power BI Pro",
    price: "£10.80",
    unit: "user/month, paid yearly",
    text: "Access Power BI reports shared with you and publish your own for an even bigger impact.",
    items: ["Publish and share Power BI reports", "Included in Microsoft 365 E5 and Office 365 E5", "Available to buy now with a credit card1"],
  },
  {
    icon: "bi-gem",
    title: "Power BI Premium",
    price: "£18.50",
    unit: "user/month, paid yearly",
    text: "License data professionals with access to enterprise-scale features.2",
    items: ["Includes all the features available with Power BI Pro", "Access larger model sizes", "More frequent refreshes", "Available to buy now with a credit card1"],
  },
  {
    icon: "bi-window-stack",
    title: "Microsoft Power BI Embedded",
    price: "Variable",
    unit: "",
    text: "Create customer-facing reports, dashboards, and analytics in your own applications.",
    items: ["Brand Power BI reports as your own", "Automate monitoring, management, and deployment", "Reduce developer overhead"],
    cta: "Contact Sales",
  },
];

const faqs = [
  {
    id: 1,
    question: "What is Power BI?",
    answer: "<p>Power BI is Microsoft's highly embedded analytics tool to develop and share reports with people across your business. Power BI is designed that can seamlessly be configured with Microsoft's own applications as well as other well-known third-party applications so as businesses without disturbing their existing system set-up can avail of Power BI and get it configured with their existing system to work in an integrated manner.</p><p>Power BI helps enterprises to make powerful reporting visuals, key analytics, and other graphical analysis. Users can even develop their own visuals suited to their specific business needs and can share the same within their organisation to be used further by their workforce. All the Power BI reports can be published and demonstrated on user dashboards. These reports and insights available in different visualisations help businesses for better decision making. Moreover, dashboards can also be customised to address specific user needs.</p><p>Get more insight about \"What is Power BI?\"</p>",
  },
  {
    id: 2,
    question: "Does Power BI produce Paginated reports?",
    answer: "<p>Yes, Power BI allows users to create pixel-perfect and highly formatted Paginated reports that can be leveraged for a printing purpose or to create a pdf version. Paginated reports are developed and available in the Power BI premium plan to fit well on multiple pages. User(s) can publish and share paginated reports through the Power BI dashboard across their workspace.</p>",
  },
  {
    id: 3,
    question: "Can I use Power BI for Budgeting & Forecasting?",
    answer: "<p>Power BI is a powerful data visualisation and business analytics tool that makes effective use of the data sources you connect with and prepares your data for budgeting and forecasting insights.</p><p>You could have data on MS Excel, Salesforce, or QuickBooks; Power BI utilises your data sources and prepares your data for budgeting and forecasting insights. For instance, it could be sales forecasting reports, production analysis, operational budgets, Cashflow statements, asset planning, and more. To know more about how it works, you can contact <a href=\"/\">Dynamics Square</a>.</p>",
  },
  {
    id: 4,
    question: "How is Power BI different from traditional BI implementations?",
    answer: "<p>When it comes to comparing Power BI with traditional BI tools, there could be several differences. Power BI is a next-generation Business Intelligence tool that is facilitated with cloud and self-service opportunities.</p><p>The very first benefit of Power BI over a traditional one is - Power BI can be configured for <a href=\"/microsoft-dynamics-365-cloud-vs-on-premise/\">on-premises as well as on-cloud</a> i.e., Software as a Service (SaaS). Users can access their data (hosted on <a href=\"/products/microsoft-azure/\">Microsoft's Azure Server</a>) simply using their browser. Cloud-based Power BI solution eliminates the upfront cost, hardware investment, and lowers the licence pricing.</p><p>The Next but not the least benefit of Power BI over traditional BI systems is Self-service facilitation. With Power BI, you can create custom reports, create your own visuals, and can extend the existing Power BI reports which are not possible with traditional business intelligence systems. Using traditional BI configuration, users can make decisions based on guided analytics or reports only; they can't make their own reports or perform customisations, etc. Moreover, Power BI reduces your costs, stimulates the development cycle, and accelerates user adoption.</p>",
  },
  {
    id: 5,
    question: "What is Power BI Report Server? Does this mean you are making Power BI available for on-premises systems?",
    answer: "<p>Power BI Report Server is the on-premises reporting solution wherein users can create reports today and can move to the cloud later. If you want to keep data within your organisational boundaries, you can simply create, access, and share accordingly. It is included in the Power BI premium plan. It works on your own terms.</p><p>Report Server enables you to create interactive and intuitive reports leveraging the reporting capabilities of SSRS (SQL Server Reporting Services). You can even design pixel-perfect paginated reports configured to your business needs. Since the Power BI Report Server is an enterprise-grade platform, it also allows you to scale thousands of users.</p>",
  },
  {
    id: 6,
    question: "How is Power BI licensed? How much does the Power BI premium cost?",
    answer: "<p>In terms of Power BI licensing, Power BI Desktop is available to download for free. All you need to register your business at no cost. With this simple step, any business user can start creating their reports, but this will not allow you to share or distribute your reports to the people in your organisation.</p><p>Once you opt for the Power BI Pro licence, you will be get permitted to share your reports with other users each with a Power BI Pro licence in your workspace. Rest, you can always contact Dynamics Square to enquire about Power BI licensing costs for your business.</p>",
  },
  {
    id: 7,
    question: "What if I want more functionality or change?",
    answer: "<p>Power BI is a highly flexible business analytics solution that can be customised as per your specific business domain and contextual needs. Even post-implementation, you can ask for more functionality from your Power BI implementation provider.</p><p>For instance, your current system is on-premises facilitated and you want cloud later or you are using Power BI Pro and want to upgrade with Power BI premium. You can even get your custom implementation for now and can ask for more functionality upgrades or customisation suited to your continuously changing need. To get more information on this, simply connect with Dynamics Square.</p>",
  },
];

const relatedLinks = [
  { href: "/products/microsoft-power-apps/", title: "Microsoft Power Apps", icon: "bi-phone" },
  { href: "/products/microsoft-dynamics-365/", title: "Microsoft Dynamics 365", icon: "bi-grid-3x3-gap" },
  { href: "/products/azure-machine-learning/", title: "Azure Machine Learning", icon: "bi-cpu" },
  { href: "/ai-solutions/copilot-studio/", title: "Microsoft Copilot Studio", icon: "bi-robot" },
];

const sections = [
  { id: "consulting", label: "Consulting Services" },
  { id: "features", label: "Features & Capabilities" },
  { id: "copilot", label: "Copilot in Power BI" },
  { id: "partner", label: "Power BI Partner" },
  { id: "pricing", label: "Pricing" },
  { id: "faqs", label: "FAQs" },
  { id: "resources", label: "Resources" },
];

const PowerBI = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Power BI Partner: Experts & Consultant - Dynamics Square UK"
        description="Need Microsoft Power BI services in the UK? Hire a trusted Power BI expert to transform your data into actionable insights. Get free online consultation today."
        image="/img/Power-BI-1024x586.webp"
        imageAlt="Microsoft Power BI"
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
            <span>Microsoft Power BI</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Microsoft Power BI</h1>
              <p className={styles.heroLead}>Our Power BI experts help to transform your data into actionable insights. Get customised Power BI plans to bring more scalability and flexibility to your business. Talk to our Power BI consultant today.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/Power-BI-1024x586.webp" alt="Microsoft Power BI" width={1024} height={586} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Get Started" />

      {/* ===== Consulting Services (vertical tabs) ===== */}
      <section id="consulting" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Get Microsoft Power BI Consulting Services</h2>
              <p>With our dedicated Power BI consulting services you can transform and strengthen your data into actionable insights. With Microsoft Power BI solution, you can visualise data, create immersive reports and can share the same across their organisation to strengthen everyone with productive decision-making capabilities.</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Power BI components">
              {components.map((c, i) => (
                <button
                  key={c.title}
                  type="button"
                  role="tab"
                  id={`pbi-tab-${i}`}
                  aria-selected={activeTab === i}
                  aria-controls={`pbi-panel-${i}`}
                  className={`${styles.modTab} ${activeTab === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveTab(i)}
                >
                  <img src={c.img.src} alt={c.img.alt} width="36" height="36" loading="lazy" decoding="async" />
                  {c.title}
                </button>
              ))}
            </div>
            <div>
              {/* every panel stays in the HTML so all content is crawlable */}
              {components.map((c, i) => (
                <div
                  key={c.title}
                  id={`pbi-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`pbi-tab-${i}`}
                  className={`${styles.modPanel}${activeTab === i ? "" : " d-none"}`}
                >
                  <h3>{c.title}</h3>
                  <p className={styles.quoteLink}>{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Features & Capabilities ===== */}
      <section id="features" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Power BI Features & Capabilities</h2>
              <p className={styles.lead} style={{ fontWeight: 700 }}>Why Choose Power BI as a Business Intelligence Solution?</p>
            </div>
          </div>
          <div className={styles.reasonGrid}>
            {features.map((f) => (
              <article className={styles.reasonCard} key={f.title}>
                <div className={styles.reasonHead}>
                  <span className={styles.reasonBadge}><i className={`bi ${f.icon}`}></i></span>
                  <h3>{f.title}</h3>
                </div>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Copilot in Power BI ===== */}
      <section id="copilot" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Copilot in Power BI</h2>
              <p><Link href="/products/dynamics-365-copilot/">Microsoft Copilot</Link> enhances Power BI features. It enables business users and data analysts to rapidly review and understand data. Acting as an intelligent assistant, real-time, AI-generated insights help to simplify decision-making, <Link href="/products/microsoft-power-automate/">automate activities</Link>, and improve reports.</p>
            </div>
          </div>
          <div className={`${styles.diffGrid} mt-4`}>
            {copilot.map((c) => (
              <div className={styles.diffTile} key={c.title}>
                <i className={`bi ${c.icon}`}></i>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Power BI Guide ===== */}
      <section className={`${styles.block} ${styles.blockTint}`}>
        <div className="container">
          <div className="row align-items-center justify-content-center gy-5">
            <div className={`col-lg-6 ${styles.textCol}`}>
              <h2 className={styles.h2}>Do you want to know more about Power BI?</h2>
              <p className={styles.lead}>Our exhaustive Power BI Guide helps you to make informed decisions.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="/guides/power-bi-guide-for-smb/" className="btn-get-started scrollto">
                  <span>Read It Now &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
                <Link href="#powerBIModals" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Download as PDF &nbsp;<i className="bi bi-download"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 text-center">
              <Image src="/img/mask-group3x.png" alt="Power BI Guide for SMBs" width={894} height={954} className={styles.imgFlat} style={{ maxWidth: 320, height: "auto" }} sizes="320px" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Trusted Power BI Partner ===== */}
      <section id="partner" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Your Trusted Power BI Partner</h2>
              <p>Uplift Your Business with our Power BI Consulting Services.</p>
            </div>
          </div>
          <div className={styles.capGrid}>
            {services.map((s) => (
              <article className={styles.capCard} key={s.title}>
                {s.badge && (
                  <Image src="/img/free-cons.png" alt="Support" width={64} height={64} style={{ position: "absolute", top: 18, right: 18 }} />
                )}
                <Image src={s.img} alt={s.alt} width={48} height={48} className={styles.capIcon} aria-hidden={s.alt === "" ? "true" : undefined} />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.modal ? (
                  <Link href={s.href} data-bs-toggle="modal" className={styles.caseMore} aria-label={`Get Started with Power BI ${s.title}`}>
                    Get Started <i className="bi bi-arrow-right"></i>
                  </Link>
                ) : (
                  <Link href={s.href} className={styles.caseMore} aria-label={`Get Started with Power BI ${s.title}`}>
                    Get Started <i className="bi bi-arrow-right"></i>
                  </Link>
                )}
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
              <h2 className={styles.h2}>Microsoft Power BI Pricing</h2>
              <p>Being a trusted Power BI implementation partner, we can reveal the best-suited Power <Link href="/blog/">Power BI pricing</Link> plans for your business to grow.</p>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-4`}>
            {plans.map((p) => (
              <div className={styles.infoCard} key={p.title} style={{ background: "#fff", border: "1px solid #ebe6f2" }}>
                <i className={`bi ${p.icon}`}></i>
                <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                  <h3 style={{ fontFamily: "Lato, sans-serif", fontSize: 20, fontWeight: 800, color: "#2d2640", marginBottom: 0 }}>{p.title}</h3>
                  <div className={styles.priceBox} style={{ marginTop: 12, marginBottom: 14 }}>
                    <strong>{p.price}</strong>
                    {p.unit && <span>{p.unit}</span>}
                  </div>
                  <p>{p.text}</p>
                  <ul className={styles.capList}>
                    {p.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                  {p.cta && (
                    <Link href="#exampleModal" data-bs-toggle="modal" className={styles.caseMore} style={{ marginTop: 14 }}>
                      {p.cta} <i className="bi bi-arrow-right"></i>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
              <span>Get Power Bi Now &nbsp;<i className="bi bi-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Do you want to watch Power BI in Action?</h3>
              <p>Discuss your business problems with our Power BI experts, we can reveal the best-in-class Power BI solution customised to your business.</p>
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
      <section id="faqs" className={`${styles.block} pt-0 ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Have you got questions about Power BI?</h2>
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

      {/* ===== Blogs & Resources ===== */}
      <section id="resources" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Explore Our Recent Blogs & Resources</h2>
              <p>Whether you are a start-up, an SMB, or an enterprise, the Dynamics Square blog is the best place to get inspired and learn more about Microsoft Business Applications.</p>
            </div>
          </div>
          <div className={`mt-2 ${styles.resHub}`}>
            <Blog category={"power-bi"} />

            <div className="col-lg-6">
              <div className={styles.resLinksCard}>
                <h3><i className="bi bi-bookmark-star" aria-hidden="true"></i>Important Power BI Links:</h3>
                <ul>
                  <li>
                    <Link href="/blog/what-is-power-bi/">
                      <span className={styles.resIcon}><i className="bi bi-question-circle" aria-hidden="true"></i></span>
                      <span className={styles.resText}>What is Power BI?</span>
                      <i className={`bi bi-arrow-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=Evkj4zfpk0Q">
                      <span className={styles.resIcon}><i className="bi bi-play-circle" aria-hidden="true"></i></span>
                      <span className={styles.resText}>Free Power BI Webinar</span>
                      <i className={`bi bi-box-arrow-up-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noopener" href="https://docs.microsoft.com/en-us/power-bi/consumer/end-user-license">
                      <span className={styles.resIcon}><i className="bi bi-file-earmark-text" aria-hidden="true"></i></span>
                      <span className={styles.resText}>Power BI Licensing Guide</span>
                      <i className={`bi bi-box-arrow-up-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <Link href="/blog/power-bi-architecture/">
                      <span className={styles.resIcon}><i className="bi bi-diagram-3" aria-hidden="true"></i></span>
                      <span className={styles.resText}>Power BI Architecture</span>
                      <i className={`bi bi-arrow-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/power-bi-reports/">
                      <span className={styles.resIcon}><i className="bi bi-bar-chart-line" aria-hidden="true"></i></span>
                      <span className={styles.resText}>Power BI Reports</span>
                      <i className={`bi bi-arrow-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/implement-power-bi-for-your-business/">
                      <span className={styles.resIcon}><i className="bi bi-lightbulb" aria-hidden="true"></i></span>
                      <span className={styles.resText}>Why Your Business Should Implement Power BI?</span>
                      <i className={`bi bi-arrow-right ${styles.resArrow}`} aria-hidden="true"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />

      <FormGuide />
    </>
  );
};

export default PowerBI;
