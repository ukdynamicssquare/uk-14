import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../public/data/business_centeral_imple.json';
import useCardScrollEffect from "../components/useCardScrollEffect";
import PageSeo from "../components/PageSeo";

const pageUrl = "https://www.dynamicssquare.co.uk/dynamics-365-business-central-implementation/";
const pageTitle = "Business Central Implementation | Dynamics Square™ UK";
const pageDescription = "Partner with Dynamics Square UK for Microsoft Dynamics 365 Business Central implementation. Get expert guidance on data migration, system integration, training and ongoing support.";
const pageImage = "https://www.dynamicssquare.co.uk/img/bc-support-banner.png";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Dynamics 365 Business Central", "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-business-central/" },
        { "@type": "ListItem", "position": 3, "name": "Business Central Implementation", "item": pageUrl }
      ]
    },
    {
      "@type": "Service",
      "name": "Dynamics 365 Business Central Implementation",
      "serviceType": "Microsoft Dynamics 365 Business Central implementation, data migration, integration, training and support",
      "url": pageUrl,
      "image": pageImage,
      "provider": {
        "@type": "Organization",
        "name": "Dynamics Square UK",
        "url": "https://www.dynamicssquare.co.uk"
      },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "description": pageDescription,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Central Implementation Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Discovery & Requirements Assessment" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Solution Design & Customisation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Deployment & Data Migration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Training & User Adoption" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ongoing Support & Optimisation" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]+>/g, "").trim(),
        },
      })),
    },
  ],
};

const BusinessCentralImplementation = () => {
  /*gsap card scroll*/
  // const containerRef = useRef(null);
  // useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  return (
    <>
      <PageSeo
        type="Service"
        title={pageTitle}
        description={pageDescription}
        keywords="Dynamics 365 Business Central Implementation, Business Central Implementation UK, Business Central Implementation Partner, Business Central Implementation Cost, Business Central Data Migration, Microsoft Business Central Implementation Services"
        image={pageImage}
        extraSchema={pageSchema}
      >
        <link rel="preload" href="/fonts/lato-latin-700-v1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </PageSeo>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 Business Central Implementation </h1>
                <span className='large-heading'>Implement Business Central, Unlock AI-Powered Growth!</span>
                <p>Looking to Business Central implementation? Dynamics Square is a trusted Microsoft partner in the UK, helping businesses plan and deliver successful ERP implementations.</p>
                <p>From planning and data migration to system integration, AI-powered capabilities and user training, our experts help align Business Central with your business requirements for a smooth, well-managed implementation.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>See How Does It Work  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              <div className='m-b-image-banner'>
                <Image src="/img/bc-support-banner.png" alt='Dynamics 365 Business Central implementation' width={1097} height={656} priority sizes="(max-width: 991px) 100vw, 1097px" />
                <div className='ff-one'>  <span className=''>Scalability for Future Growth</span></div>
                <div className='ff-two'>  <span className=''>Tailored Implementation Strategy</span></div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='bg-003'>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one">
                <h2>Why is Business Central Implementation Important? </h2>
                <p>Losing edge due to data silos? Or bothered by slow or manual processes? Poor integration can lead to disconnected and inefficient processes. Besides, things like high maintenance costs and limited scalability can limit the potential of your business. </p>
                <p>Business Central implementation ends these woes and helps your business not just stay competitive but thrive. It is not an implementation; it is digital transformation! </p>
                <Link
                  href="/products/dynamics-365-business-central/"
                  className="btn-get-started scrollto">
                  <span>Learn What Business Central Is  &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='support-image--one'>
                <Image src="/img/bc-support-side-011.png" alt='Why Business Central implementation is important' width={402} height={436} sizes="(max-width: 991px) 90vw, 402px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-004'>
        <div className="container">
          <div className='row' style={{ paddingBottom: '20px' }}>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Benefits of Implementing<br />
                  Dynamics 365 Business Central</h2>
                <p>Implementing <a className="u-i" href="/products/dynamics-365-business-central/">Business Central</a> is not about replacing legacy systems. It's about recalibrating how your business runs structurally, financially, and strategically. </p>
                <p>Here's what actually changes when Business Central is implemented right: </p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-01.png" alt="Improved Financials" width={32} height={32} />
                <h3>Improved Financials</h3>
                <p>No more gathering numbers from different tools. Business Central pulls real-time financials, reconciles data automatically, and leaves zero room for manual errors. Your CFO gets to focus on forecasting, not formatting spreadsheets. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-02.png" alt="Proactive Operations" width={32} height={32} />
                <h3>Proactive Operations</h3>
                <p>With Business Central, inventory doesn’t go out of sync. Supply chain shocks are met with preemptive adjustments, not apologies to clients. Business Central turns your business operations from reactive to proactive. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-03.png" alt="A Single Source of Operational Truth" width={32} height={32} />
                <h3>A Single Source of Operational Truth </h3>
                <p>Sales, finance, warehousing, and procurement, all talking to the same system in real time. Decisions aren’t something to be discussed; they’re aligned by default. No lags, no duplicates, no misreads, just pure efficiency!</p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-04.png" alt="Run Business Without Risks" width={32} height={32} />
                <h3>Run Business Without Risks</h3>
                <p>With role-based permissions, audit trails, and ready-to-go compliance reports, Business Central makes governance effortless. You don’t need extra tools or manual checks, control is built into every process, right from the start.</p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-05.png" alt="Scale Without System Stress" width={32} height={32} />
                <h3>Scale Without System Stress</h3>
                <p>As your business evolves with new teams, new markets, and new models, Business Central flexes with you. No patchwork fixes, no painful upgrades. It’s built to handle complexity without collapsing under it.</p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-06.png" alt="Integrate Effortlessly" width={32} height={32} />
                <h3>Integrate Effortlessly</h3>
                <p>Business Central integration connects apps like <a className="u-i" href="/shopify-connector-business-central/">Shopify</a> across and beyond the Microsoft ecosystem, creating a unified system where everything just clicks. No silos and no slowdowns. Just smoother operations, powered by coherence. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-07.png" alt="Stay Up and Running, All the Time" width={32} height={32} />
                <h3>Stay Up and Running, All the Time</h3>
                <p>Business Central’s <a className="u-i" href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud architecture</a> and low-code environment help keep your business agile. Upgrades, be they manual customisations or automatic regular updates from Microsoft, keep your system running smoothly and up-to-date. </p>

              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className="card-671">
                <Image src="/img/serv-08.png" alt="Insights That Speak Before You Ask" width={32} height={32} />
                <h3>Insights That Speak Before You Ask</h3>
                <p>Dashboards update in real time with <a className="u-i" href="/power-bi-implementation/">Power BI</a>. Trends surface early. Business Central replaces rearview reporting with forward-looking clarity, so leaders act on what will happen, not just what did. </p>

              </div>
            </div>
            <div className='col-lg-8'>
              <div style={{ paddingTop: '20px' }}>
                <p><b>With all these aforementioned benefits, it’s time to make your business agile! </b></p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Book a Free Consultation Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-005'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why the Right Implementation Partner Matters</h2>
                <p><b>Is it important to go with an experienced Business Central implementation partner?</b></p>
                <p>Many ERP initiatives don’t hit the mark on their objectives, leaving businesses with untapped potential and unmet goals. </p>
                <p>So, what does this research indicate? The intervention of a Dynamics 365 implementation partner who holds expertise in your business domain becomes crucial. With <a className="u-i" href="/industries/">14+ industries</a> penetrated, Dynamics Square can help you avoid these frequently made ERP implementation mistakes: </p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-6 d-flex'>
              <div className='card-671'>
                <h3>Lack of a Clear Implementation Plan </h3>
                <p>Without a structured plan, businesses end up with unnecessary delays, budget overruns, and feature misalignment. </p>
                <p>Dynamics Square has certified Microsoft consultants with deep industry expertise. They analyse your business and devise a detailed Business Central implementation project plan. This helps ensure a seamless transition from planning to execution. </p>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='card-671'>
                <h3>Hidden Costs and Poor Budgeting</h3>
                <p>The fear of Business Central implementation cost overruns is real. Many businesses underestimate the total cost, including training, integrations, and support. </p>
                <p>Dynamics Square provides a transparent cost breakdown, ensuring you know where every penny is going. Our goal? Maximum ROI with zero surprises. To calculate ERP implementation cost, you can try our <a className="u-i" href="/tools/erp-implementation-cost-calculator/">ERP implementation cost calculator</a>. </p>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Implementation Methodology: A Proven Approach </h2>
                <p>Dynamics Square is a certified Microsoft partner that helps businesses get the most out of Dynamics 365 Business Central implementation. Speaking of <a className="u-i" href="/blog/what-is-business-central-implementation-methodology/">Business Central implementation methodology</a>, we follow Microsoft Sure Step methodology, which enables us to build a clear path from challenge to solution. Our approach blends proven frameworks with real-world agility, ensuring faster rollouts, minimal risk, and systems that are ready to grow with you. </p>
                <p>Here’s a sneak peek into how the implementation takes place, in general: </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Phase 1: Discovery & Assessment </h3>
                      <p>Before we do anything, we take a deep dive into your existing systems, workflows, and friction points. We make note of what’s working, what’s broken, and what your teams wish they had. This phase is all about aligning technology with business goals, identifying critical integrations, and laying the groundwork for a solution that actually solves problems and not just adds another layer. </p>
                      <ul>
                        <li>Understand current systems & gaps</li>
                        <li>Define goals, needs & integrations</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-01.jpg" width={580} height={408} alt="Discovery and assessment phase" sizes="(max-width: 991px) 100vw, 580px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Phase 2: Solution Design & Customization </h3>
                      <p>Here’s where the blueprint becomes a tailored solution. We shape Dynamics 365 Business Central around your processes, not the other way around. From custom configurations to smart integrations with third-party tools and even embedding AI agents and Copilot automation, we build with the future in mind. </p>
                      <ul>
                        <li>Configure Business Central to fit </li>
                        <li>Integrate tools & enable AI automation </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-02.jpg" width={580} height={408} alt="Solution design and customisation phase" sizes="(max-width: 991px) 100vw, 580px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Phase 3: Deployment & Data Migration </h3>
                      <p>Whether you are moving from <a className="u-i" href="/dynamics-nav-to-business-central/">Dynamics NAV</a>, <a className="u-i" href="/gp-to-business-central-migration/">Dynamics GP</a> or another system, we move your data with care, securely and with precision, so your business keeps running while everything shifts behind the scenes. Our deep expertise ensures no downtime surprises. Just a clean handover into a system that’s ready to go. </p>
                      <ul>
                        <li>Migrate data securely </li>
                        <li>Ensure smooth, disruption-free go-live </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-03.jpg" width={580} height={408} alt="Deployment and data migration phase" sizes="(max-width: 991px) 100vw, 580px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Phase 4: Training & User Adoption </h3>
                      <p>Technology works when people have clarity on how to use it. We train your teams with real-life scenarios and practical sessions, so they’re confident from day one. Testing in a safe environment helps them get comfortable and helps us fine-tune the setup. </p>
                      <ul>
                        <li>Train teams in real-world use</li>
                        <li>Conduct user testing & readiness checks </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-04.jpg" width={580} height={408} alt="Training and user adoption phase" sizes="(max-width: 991px) 100vw, 580px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Phase 5: Ongoing Support & Optimization </h3>
                      <p>Once you’re live, we stay with you for as long as you want us to be. You have our unwavering <a className="u-i" href="/d365-business-central-support/">Business Central support</a>, all the time. We monitor performance, apply <a className="u-i" href="/dynamics-365-business-central-upgrade/">updates and upgrades</a>, and are always on call for enhancements or troubleshooting. Your system evolves as your business does. </p>
                      <ul>
                        <li>Continuous monitoring & updates</li>
                        <li>Dedicated support & enhancements </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/rectang-05.jpg" width={580} height={408} alt="Ongoing support and optimisation phase" sizes="(max-width: 991px) 100vw, 580px" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-006'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>The Role of AI and Automation in Business Central Implementation</h2>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-6 d-flex'>
              <div className='card-672'>
                <Image src="/img/rectang-04.png" alt="Copilot in Microsoft Dynamics 365 Business Central" width={630} height={248} sizes="(max-width: 991px) 100vw, 630px" style={{ width: '100%', height: 'auto' }} />
                <h3>Copilot in Microsoft Business Central: AI That Works for You </h3>
                <p>With out-of-the-box <a className="u-i" href="/products/dynamics-365-copilot/">Microsoft Copilot</a> integration, your teams have an assistant that automates repetitive tasks, analyses financial data at the blink of an eye, and helps in making data-driven decisions. Copilot in Microsoft Business Central takes efficiency to the next level by: </p>
                <ul>
                  <li>Automating invoice processing and approvals</li>
                  <li>Providing real-time business insights through AI-powered reporting </li>
                  <li>Enhancing customer interactions with intelligent forecasting </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='card-672'>
                <Image src="/img/rectang-05.png" alt="AI agents in Dynamics 365 Business Central" width={630} height={248} sizes="(max-width: 991px) 100vw, 630px" style={{ width: '100%', height: 'auto' }} />
                <h3>AI Agents in D365 Business Central: The Future of Smart ERP </h3>
                <p>AI has turned out to be an integral and inevitable part of the operations of most businesses. Those who are not harnessing its potential are missing out on efficiency and growth. <a className="u-i" href="/blog/why-are-ai-agents-the-game-changer-for-business-central-users/">AI Agents in D365 Business Central</a> help businesses: </p>
                <ul>
                  <li>Detect anomalies in financial transactions</li>
                  <li>Automate compliance tracking </li>
                  <li>Optimise supply chain processes in real-time  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className='bg-005'>
        <div className='container'>
          <div className="row">
          <div className="col-lg-7">
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Implementation Cost: What to Expect?</h2>
                <p>Need clarity on <a className="u-i" href="/products/dynamics-365-business-central/pricing-licensing/">Business Central implementation cost</a>? While costs vary based on business size and requirements, here’s what to expect:</p>
                <div className='ol-list'>
                  <div className='ol-listitem'>
                  Implementation Stage
                  </div>
                  <div className='ol-listitem'>
                  Licensing
                  </div>
                  <div className='ol-listitem'>
                  Customization
                  </div>
                  <div className='ol-listitem'>
                  Data Migration
                  </div>
                  <div className='ol-listitem'>
                  Training
                  </div>
                  <div className='ol-listitem'>
                  Support & Maintenance
                  </div>
                </div>
                <p>Dynamics Square ensures you get maximum value for your investment without overspending. Besides, you can use our <a className="u-i" href="/tools/erp-implementation-cost-calculator/">ERP implementation cost calculator</a> to calculate the actual cost of implementation.</p>
                <Link
                  href="/tools/erp-implementation-cost-calculator/"
                  className="btn-get-started scrollto">
                  <span>Calculate Your ERP Cost &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className='col-lg-5 align-self-center'>
              <div className='support-image--one'>
                <Image src="/img/rectang-06.png" alt='Business Central implementation cost breakdown' width={513} height={510} sizes="(max-width: 991px) 90vw, 513px" />
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>If You Keep Waiting, Things Might Get Out of Hands </h3>
                <p>Many ERP implementations don’t meet expectations. But that’s not your story, unless you delay. Let us show you how a right-sized, low-risk Business Central implementation can future-proof your business. </p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Claim Your Free Consultation Today!   &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/img/n-015.png" alt="" aria-hidden="true" width={671} height={344} sizes="(max-width: 991px) 100vw, 671px" />
      </section>
      <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Why Choose Dynamics Square as Your Implementation Partner? </h2>
                <p>Choosing an implementation partner is as important as choosing the ERP itself. Here’s why businesses trust Dynamics Square: </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 order-1 align-self-center'>
              <div className='row'>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Proven Expertise</h3>
                    </div>
                    <p>500+ successful Business Central implementation projects across 14+ industries. See our <a className="u-i" href="/case-studies/">case studies</a>.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Custom-Tailored Solutions</h3>
                    </div>
                    <p>We customise solutions to fit your business needs. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Seamless Business Central Integration</h3>
                    </div>
                    <p>On requirement, we integrate Business Central with Microsoft apps like <a className="u-i" href="/power-bi-implementation/">Power BI</a> and third-party apps. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>End-to-End Support</h3>
                    </div>
                    <p>From planning to post-implementation optimisation, we ensure your success at every step with <a className="u-i" href="/d365-business-central-support/">dedicated support</a>. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>AI-Driven Transformation</h3>
                    </div>
                    <p>We speed up your operations with Copilot and AI Agents in D365 Business Central. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Competitive Pricing:</h3>
                    </div>
                    <p>Get world-class service without breaking the bank. </p>

                  </div>
                </div>


              </div>
            </div>
            <div className='col-lg-5 order-2'>
              <div className='img-backs-sid'>
                <Image src="/img/n-016.png" alt="Dynamics Square, Microsoft Dynamics 365 Business Central implementation partner" width={401} height={455} sizes="(max-width: 991px) 90vw, 401px" className='im-two' />
              </div>
            </div>
          </div>
        </div>
     
      </section>
      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got
                  questions about Business Central?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>
            </div>
          </div>


          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>




        </div>
      </section>
    </>
  );
};

export default BusinessCentralImplementation;
