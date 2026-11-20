import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PageSeo from "../../components/PageSeo";
import s from "../../styles/caseStudyLogisticUkPremium.module.css";

// Corporate landing-page redesign of
// /case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/
// Copy is kept verbatim from the original page; only layout and styling change.

const challenges = [
  "The existing Dynamics 365 Finance setup did not fully meet expectations due to configuration gaps",
  "Reporting capabilities were not aligned with business requirements, limiting visibility and decision-making",
  "Training and user adoption remained a concern, particularly for finance teams relying on the system daily",
  "The UK entity required a separate and properly localised finance implementation to meet regulatory requirements",
  "Centrally managed, in-house implementations struggled to fully address local compliance requirements and user-specific reporting needs, creating a disconnect between headquarters and regional entities",
  "Coordination across multiple systems, including in-house and third-party applications, added complexity",
  "The business needed to prepare for further rollouts across regions such as the US and Indonesia",
  "A lack of structured consulting support during the initial implementation created uncertainty in future planning",
];

const needs = [
  "A properly configured Dynamics 365 Finance setup for the UK entity, focused on the finance module",
  "Localisation to meet UK financial regulations and compliance requirements",
  "Integration with banking systems to streamline financial transactions",
  "A clear implementation plan aligned with a defined go-live timeline",
  "Comprehensive user training to improve adoption and confidence",
  "Improved reporting capabilities to support financial analysis and decision-making",
  "Expert consulting support to guide both current implementation and future global rollouts",
  "A controlled approach to running systems in parallel during transition",
];

const objectives = [
  "Successfully implement Dynamics 365 Finance for the UK entity with a go-live target of December 30, 2025",
  "Ensure full localisation to comply with UK financial and regulatory requirements",
  "Equip six UK finance users with the skills and confidence to use the system effectively",
  "Address gaps in training and reporting from the initial implementation",
  "Stabilise financial operations before expanding to additional entities",
  "Prepare the system for future rollouts across other regions",
  "Enable parallel system operation during transition to minimise disruption",
];

const phases = [
  {
    title: "Phase 1: UK Entity Finance Implementation",
    items: [
      "Deployment of Dynamics 365 Finance for the UK entity, focused on finance modules",
      "Localisation of the system to align with UK financial regulations",
      "Configuration of financial processes to ensure accuracy and compliance",
      "Targeted go-live date set for December 30, 2025",
    ],
  },
  {
    title: "Global Governance & Global Rollout Strategy",
    items: [
      "Establishment of a Global Blueprint to standardise core financial and operational processes across entities, effectively creating a consistent “financial DNA” across the organisation",
      "Design of a scalable rollout framework that ensures consistency while allowing for regional flexibility",
      {
        text: "Localisation readiness for future rollouts, including:",
        sub: [
          "US operations with Sales Tax and Nexus requirements",
          "Indonesia operations with local tax regulations and Faktur Pajak compliance",
        ],
      },
      "Governance model to align headquarters oversight with regional execution, ensuring both control and adaptability",
    ],
  },
  {
    title: "User Training and Adoption Support",
    items: [
      "Comprehensive training for six UK finance users across London, Aberdeen, and Middlesbrough",
      "Focused sessions to address existing gaps in system understanding",
      "Practical guidance to improve confidence in day-to-day system usage",
    ],
  },
  {
    title: "System Integration and Alignment",
    items: [
      "Continued integration with existing applications, including in-house transport systems and third-party tools",
      "Alignment of financial processes across systems to ensure consistency",
      "Support for bank integration to improve transaction management",
    ],
  },
  {
    title: "Consultative Support for Global Rollout",
    items: [
      "Advisory support to guide future rollouts across additional regions",
      "Assessment of system readiness for expansion into entities beyond the UK",
      "Focus on improving configuration standards for consistency across all entities",
    ],
  },
];

const results = [
  "A structured and localised finance system for the UK entity",
  "Improved user confidence through targeted training and support",
  "Better alignment between system configuration and business requirements",
  "Enhanced reporting capabilities to support financial visibility",
  "Stronger foundation for future multi-entity rollout",
  "Reduced risk during transition through planned parallel system operation",
];

const nextPhase = [
  "Introduction of document capture capabilities to improve accounts payable automation",
  "Implementation of bank feed integration for smoother financial operations",
  "Development of group consolidation reporting for headquarters visibility",
  "Replacement of existing expense management tools with Dynamics 365 Finance",
  "Integration with the in-house transport management system for operational alignment",
  "Implementation of budgeting capabilities to strengthen financial planning",
];

// Icons paired by index with the copy arrays above.
const challengeIcons = ["bi-gear", "bi-bar-chart-line", "bi-person-workspace", "bi-flag", "bi-diagram-3", "bi-intersect", "bi-globe-americas", "bi-signpost-split"];
const objectiveIcons = ["bi-calendar2-check", "bi-shield-check", "bi-people", "bi-clipboard2-data", "bi-bank", "bi-globe2", "bi-arrow-left-right"];
const resultIcons = ["bi-journal-check", "bi-person-check", "bi-sliders", "bi-bar-chart", "bi-buildings", "bi-shield-check"];
const nextIcons = ["bi-file-earmark-text", "bi-bank", "bi-diagram-2", "bi-receipt", "bi-truck", "bi-piggy-bank"];

// Challenge → Solution → Result summary, each line taken from the page copy.
const storyTiles = [
  { title: "Challenge", icon: "bi-exclamation-triangle", href: "#challenges", accent: "#bb2b36", text: challenges[3] },
  { title: "Solution", icon: "bi-tools", href: "#solutions", accent: "#163556", text: phases[0].items[0] },
  { title: "Result", icon: "bi-graph-up-arrow", href: "#results", accent: "#1f9d63", text: results[0] },
];

const BertlingCaseStudyPremium = () => {
  const rootRef = useRef(null);
  const [active, setActive] = useState(0);

  // Gentle reveal; content stays visible without JS or with reduced motion.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;
    root.classList.add(s.ready);
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add(s.in);
          io.unobserve(e.target);
        }
      }),
      { rootMargin: "0px 0px -8% 0px", threshold: 0.1 }
    );
    root.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Arrow keys move between phase tabs (WAI-ARIA tabs pattern).
  const onStepKey = (e) => {
    const last = phases.length - 1;
    let next = null;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = active === last ? 0 : active + 1;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = active === 0 ? last : active - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    document.getElementById(`step-${next}`)?.focus();
  };

  return (
    <>
      <PageSeo
        type="Article"
        title="Bertling Group: Dynamics 365 Finance Multi-Entity Case Study | Dynamics Square"
        description="How Bertling Group stabilised its UK finance function on Dynamics 365 Finance and built a blueprint for rolling out across 30 legal entities, including the US and Indonesia."
        image="https://www.dynamicssquare.co.uk/img/logistic-uk.jpg"
        imageAlt="Bertling Group case study – Dynamics Square"
        canonical="https://www.dynamicssquare.co.uk/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/"
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>

      <div className={s.page} ref={rootRef}>
        {/* Hero */}
        <section className={s.hero}>
          <Image src="/img/logistic-uk.jpg" alt="Bertling Group case study – Dynamics Square" fill priority sizes="100vw" className={s.heroImg} />
          <div className={`container ${s.heroInner}`}>
            <div className={s.heroCopy}>
              <span className={s.pill}>Case Study</span>
              <h1>Microsoft Dynamics 365 Finance Implementation Optimisation</h1>
              <p className={s.heroSub}>
                How Bertling Group Strengthened Financial Control and Prepared for a Multi-Entity Rollout with Microsoft Dynamics 365 Finance
              </p>
              <div className={s.heroCta}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Schedule a Demo</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Client bar */}
        <div className={`container ${s.clientBarWrap}`}>
          <div className={s.clientBar}>
            <div>
              <Image src="/img/bertling-group-logo.png" alt="Bertling Group" width={190} height={42} style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>
            <div><span className={s.metaIcon}><i className="bi bi-truck" aria-hidden="true"></i></span>Global Logistics</div>
            <div><span className={s.metaIcon}><i className="bi bi-geo-alt" aria-hidden="true"></i></span>HQ: Germany</div>
            <div><span className={s.metaIcon}><i className="bi bi-diagram-3" aria-hidden="true"></i></span>30 Legal Entities</div>
          </div>
        </div>

        {/* Crux + story tiles */}
        <section className={s.section}>
          <div className="container">
            <div className={s.crux} data-reveal>
              <span className={s.label}>A Crux of the Case Story</span>
              <p>This case story shows the challenges encountered by <strong>Bertling Group</strong>, a global logistics organisation already operating on Microsoft Dynamics 365 Finance. These challenges included user adoption, reporting, and configuration. With growing pressure to standardise operations across entities, the business took a structured approach to stabilise its UK finance function first. By focusing on correct implementation, localisation, and training, it began building a reliable foundation for broader global rollout.</p>
            </div>
            <div className={s.tiles}>
              {storyTiles.map((t, i) => (
                <a key={t.title} href={t.href} className={s.tileLink} style={{ "--accent": t.accent, "--d": `${i * 90}ms` }} data-reveal>
                  <span className={s.tileTop}>
                    <span className={s.tileIcon}><i className={`bi ${t.icon}`} aria-hidden="true"></i></span>
                    <span className={s.tileTitle}>{t.title}</span>
                  </span>
                  <p>{t.text}</p>
                  <i className={`bi bi-arrow-right ${s.tileMore}`} aria-hidden="true"></i>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className={`${s.section} ${s.soft}`}>
          <div className="container">
            <div className={s.overview}>
              <div className={s.overviewMedia} data-reveal>
                <div className={s.overviewImg}>
                  <Image src="/img/case-v-00.png" alt="Bertling Group global logistics business overview" fill sizes="(max-width: 991px) 100vw, 45vw" />
                </div>
                <div className={s.badge}>
                  <span className={s.badgeNum}>30</span>
                  <span className={s.badgeText}>Legal Entities</span>
                </div>
              </div>
              <div className={s.overviewText} data-reveal style={{ "--d": "100ms" }}>
                <h2 className={s.h2}>Business Overview</h2>
                <p><b>Bertling Group</b> is a global logistics business headquartered in Germany, managing a network of 30 legal entities covering multiple regions. It necessitates a high degree of consistency and accuracy in financial processes, as its operations encompass international transport, coordination, and financial administration across multiple geographies.</p>
                <p>The organisation had already <a href="/products/microsoft-dynamics-365-finance/">implemented Microsoft Dynamics 365 Finance</a> through its internal technical team, which was situated in Germany. Despite the fact it provided a central system, the implementation did not completely meet operational expectations, particularly in areas such as user adoption, configuration, and reporting.</p>
                <p>The organisation utilised a variety of supporting applications in addition to its ERP system. These consisted of an in-house transport management system, document management tools for accounts payable automation, expense management software, and tax filing solutions. Internally, these systems were integrated.</p>
                <p>The necessity of a more structured and consistent distribution approach became apparent as the business continued to expand, beginning with the UK entity.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section id="challenges" className={s.section}>
          <div className="container">
            <div className={s.head} data-reveal>
              <h2 className={s.h2}>What are The Business Challenges</h2>
              <p className={s.lead}>Despite having a <a href="/products/microsoft-dynamics-erp/">modern ERP</a> platform in place, the organisation faced several challenges that affected day-to-day operations and long-term scalability.</p>
            </div>
            <ul className={s.challengeGrid}>
              {challenges.map((text, i) => (
                <li key={text} data-reveal style={{ "--d": `${(i % 4) * 70}ms` }}>
                  <span className={s.cIcon}><i className={`bi ${challengeIcons[i]}`} aria-hidden="true"></i></span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Needs */}
        <section className={`${s.section} ${s.soft}`}>
          <div className="container">
            <div className={s.needs}>
              <div className={s.needsImg} data-reveal>
                <Image src="/img/case-v-01.png" alt="Bertling Group Dynamics 365 Finance UK implementation requirements" width={633} height={651} />
              </div>
              <div data-reveal style={{ "--d": "100ms" }}>
                <h2 className={s.h2}>What the Business Needed</h2>
                <p className={s.lead}>To move forward, the organisation required a more structured and reliable approach to ERP deployment, starting with its UK operations.</p>
                <ul className={s.checks}>
                  {needs.map((text) => (
                    <li key={text}><i className="bi bi-check-lg" aria-hidden="true"></i><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div className={s.goal} data-reveal>
              <i className="bi bi-bullseye" aria-hidden="true"></i>
              <p><b>The goal was not to replace the system, but to get it to perform well.</b></p>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className={s.section}>
          <div className="container">
            <div className={s.head} data-reveal>
              <h2 className={s.h2}>Business Objectives</h2>
              <p className={s.lead}>The leadership team aligned on practical objectives that would ensure both immediate improvement and long-term scalability.</p>
            </div>
            <ul className={s.objGrid}>
              {objectives.map((text, i) => (
                <li key={text} className={i === 0 ? s.objFeature : undefined} data-reveal style={{ "--d": `${(i % 4) * 70}ms` }}>
                  <i className={`bi ${objectiveIcons[i]} ${s.oIcon}`} aria-hidden="true"></i>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Solutions */}
        <section id="solutions" className={`${s.section} ${s.soft}`}>
          <div className="container">
            <div className={s.head} data-reveal>
              <h2 className={s.h2}>Solutions Proposed by Dynamics Square</h2>
              <p className={s.lead}>Dynamics Square approached the engagement with a focus on stabilising the current system while preparing it for future expansion, with an emphasis on standardising core financial processes and creating a consistent operational framework across entities.</p>
            </div>
            <div data-reveal>
              <div className={s.steps} role="tablist" aria-label="Solutions Proposed by Dynamics Square">
                {phases.map((p, i) => (
                  <button
                    key={p.title}
                    id={`step-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={active === i}
                    aria-controls={`stage-${i}`}
                    tabIndex={active === i ? 0 : -1}
                    className={`${s.step} ${active === i ? s.stepOn : ""}`}
                    onClick={() => setActive(i)}
                    onKeyDown={onStepKey}
                  >
                    <span className={s.stepNum} aria-hidden="true">{i + 1}</span>
                    <span className={s.stepTitle}>{p.title}</span>
                  </button>
                ))}
              </div>
              {phases.map((p, i) => (
                <div
                  key={p.title}
                  id={`stage-${i}`}
                  role="tabpanel"
                  aria-labelledby={`step-${i}`}
                  className={`${s.stagePanel} ${active === i ? "" : s.panelOff}`}
                >
                  <div>
                    <h3>{p.title}</h3>
                    <ul>
                      {p.items.map((item) =>
                        typeof item === "string" ? (
                          <li key={item}><i className="bi bi-check2-circle" aria-hidden="true"></i><span>{item}</span></li>
                        ) : (
                          <li key={item.text}>
                            <i className="bi bi-check2-circle" aria-hidden="true"></i>
                            <div>
                              {item.text}
                              <ul className={s.subList}>
                                {item.sub.map((sub) => (
                                  <li key={sub}>{sub}</li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className={s.stageImg}>
                    <Image src="/img/case-v-02.png" alt="Bertling Group Dynamics 365 Finance UK implementation" width={863} height={597} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section id="results" className={`${s.section} ${s.results}`}>
          <div className="container">
            <div className={s.head} data-reveal>
              <h2 className={s.h2}>Results and Impact: What This Transformation Means</h2>
              <p className={s.lead}>This phase of the project is designed to deliver stability, clarity, and readiness for broader transformation.</p>
            </div>
            <ul className={s.resultGrid}>
              {results.map((text, i) => (
                <li key={text} data-reveal style={{ "--d": `${(i % 3) * 80}ms` }}>
                  <span className={s.rIcon}><i className={`bi ${resultIcons[i]}`} aria-hidden="true"></i></span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why it matters */}
        <section className={s.section}>
          <div className="container">
            <div className={s.future}>
              <div data-reveal>
                <h2 className={s.h2}>Why This Case Matters and Future Prospects</h2>
                <p>This case study highlights an often-overlooked reality. Implementing an ERP system is only one part of the journey. Ensuring it is configured correctly, adopted by users, and aligned with business needs is what determines success.</p>
                <p>In this instance, Bertling Group recognised the gaps in its initial implementation and chose to address them with a structured approach. By focusing on one entity first, it created a controlled environment to correct issues, build confidence, and establish best practices.</p>
                <div className={s.closing}>
                  <p>As the business prepares to expand its system across additional regions, the lessons learned from this phase will play a critical role.</p>
                  <p>This transformation does not involve the replacement of systems. The objective is to enhance their productivity. It involves transforming an existing investment into a dependable platform that facilitates growth, compliance, and clarity.</p>
                  <p>Dynamics Square supports this transition by applying a structured and informed approach, helping convert an incomplete implementation into a stable and dependable system.</p>
                </div>
              </div>
              <div data-reveal style={{ "--d": "100ms" }}>
                <p className={s.nextTitle}><b>The next phase of the journey is already defined:</b></p>
                <ul className={s.nextGrid}>
                  {nextPhase.map((text, i) => (
                    <li key={text}><i className={`bi ${nextIcons[i]}`} aria-hidden="true"></i><span>{text}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA – unchanged site component */}
      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="Business consultant" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                    <span>Schedule a Demo</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BertlingCaseStudyPremium;
