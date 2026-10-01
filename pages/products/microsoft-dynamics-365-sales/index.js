import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/sales_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import BcPopPdf from '../../../components/BCPdfPopup';
import NavBar from '../../../components/NavBar';
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const SalesNew = () => {
  /*gsap card scroll*/
  // const containerRef = useRef(null);
  // useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [pdfType, setPdfType] = useState(null);
  const handleOpenModal = (type) => {
    setPdfType(type);
    // Open modal manually (needed since you use Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById('pdfModel'));
    modal.show();
  };

  return (
    <>
      <Head>
        <title>Dynamics 365 Sales Partner UK | Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform your sales operations with Microsoft Dynamics 365 Sales Software in the UK. Automate workflows and improve customer engagement."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-sales/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-sales/" />
        <meta property="og:title" content="Dynamics 365 Sales Partner UK | Dynamics Square UK" />
        <meta property="og:description" content="Transform your sales operations with Microsoft Dynamics 365 Sales Software in the UK. Automate workflows and improve customer engagement." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/sales-new-01.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-sales/" />
        <meta property="twitter:title" content="Dynamics 365 Sales Partner UK | Dynamics Square UK" />
        <meta property="twitter:description" content="Transform your sales operations with Microsoft Dynamics 365 Sales Software in the UK. Automate workflows and improve customer engagement." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/sales-new-01.png" />

      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 Sales</h1>
                <span className='large-heading'>Deploy a trusted agentic CRM solution used by sales teams across the world</span>
                <p>Microsoft Dynamics 365 Sales brings pipeline, customer data, and seller actions into one connected system. Dynamics 365 for Sales is an agentic CRM solution with built-in AI and Copilot support that help sales professionals to close deals faster and improve daily productivity with guided, data-led selling.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Try for Free &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="solution-new-banner-one-imgs">
                <Image src="/img/sales-new-01.png" alt="sales-new-01" width={916} height={584} className="flot-1" priority />
              </div>
            </div>
          </div>
        </div>



        <div className='container cust-pp'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flecx'>
                <div className='left-fl'>
                  <p>As a trusted Dynamics 365 Sales partner in the UK, Dynamics Square helps businesses manage leads, strengthen customer relationships, and close deals faster with the AI-powered Dynamics 365 Sales CRM.</p>
                </div>
                <div className='left-rl'>
                  <Image src="/img/partner-logo-black.png" width={193} height={55} alt="partner-logo-black" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>What is Dynamics 365 Sales?</h2>
                <p>Microsoft Dynamics 365 for Sales (formerly known as <a href="/products/microsoft-dynamics-crm/">Dynamics CRM</a>) helps to improve end-to-end sales practices, build & improve your customer relationship, and supports to close sales deals faster.</p>
                <p>Microsoft Dynamics 365 Sales integrates sellers, customers, and data into an intelligent sales system. SMEs use this app alongside Business Central. <a href="/blog/business-central-integration-with-dynamics-365-sales/">Business Central integration with Dynamics 365 Sales</a> gives growing enterprises a complete ERP and CRM solution.</p>
                <p>This Agentic CRM solution uses AI, automation, and real-time insights to help sales teams manage leads, opportunities, and customer relationships with greater clarity and focus.</p>
                <p>Built on a flexible and cloud-based platform, Dynamics 365 Sales adapts easily to different sales models and industries. Organisations can configure fields, views, dashboards, and <a href="/products/dynamics-365-copilot/">AI agents in Dynamics 365 Sales</a> to match their sales methodology, data sources, and growth plans.  </p>
                <p><b>In short, Dynamics 365 Sales is:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> A unified system for lead, opportunity, and customer management</li>
                  <li><i className="bi bi-check2"></i> An agentic CRM solution powered by AI, Copilot, and sales agents</li>
                  <li><i className="bi bi-check2"></i> A scalable cloud platform that supports modern selling teams</li>
                </ul>
                <p>Ready to equip your sales team with an intelligent and connected CRM solution?</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Sales CRM Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='dsa-minee'><Image src="/img/sales-new-02.png" alt="sales-new-02" width={630} height={588} /></div>
            </div>
          </div>

        </div>
      </div>
      <NavBar />
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          {/* <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Implementation: <br/>Why Your Business Needs It</h2>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/sales-new-03.png" width={523} height={459} alt="sales-new-03" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="sales-new-03" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Business Challenges Solved by Dynamics 365 Sales</h2>
                </div>
                <p>Dynamics 365 Sales capabilities address common challenges faced by modern sales teams across industries. Some of the most frequent challenges include:</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Working with traditional CRMs that rely heavily on manual updates</li>
                  <li><i className="bi bi-check2"></i> Limited visibility into pipeline health and deal priorities</li>
                  <li><i className="bi bi-check2"></i> Sellers spending excessive time on research and data entry</li>
                  <li><i className="bi bi-check2"></i> Missed follow-ups due to unclear next best actions</li>
                  <li><i className="bi bi-check2"></i> Inconsistent sales execution across teams and regions</li>
                  <li><i className="bi bi-check2"></i> Poor forecasting accuracy caused by incomplete opportunity data</li>
                  <li><i className="bi bi-check2"></i> Difficulty qualifying leads at scale with limited context</li>
                  <li><i className="bi bi-check2"></i> Sales insights scattered across emails, calls, and documents</li>
                  <li><i className="bi bi-check2"></i> Limited guidance for sellers during complex deal cycles</li>
                </ul>
                <p>Dynamics 365 Sales is an agentic CRM solution that brings data, AI, and seller actions into one connected system. It helps sales teams stay focused, act on the right opportunities, and move deals forward with confidence and consistency.</p>
                <p>Whether building a sales function or scaling an established team, Dynamics 365 Sales features support structured growth with full clarity and control.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Sales Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id='section3' className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Inside Dynamics 365 Sales: What Powers Your Sales Teams</h2>
                <p><b>Dynamics 365 Sales features</b> let you run sales operations with total control and confidence. Replace manual follow-ups with AI driven actions, reduce delays through intelligent guidance, and improve deal outcomes with real time visibility. Here is how this agentic CRM solution transforms selling for modern organisations:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Lead and Opportunity Management</h3>
                      <p>Manual lead handling slows response times and weakens conversion rates but with Dynamics 365 CRM Sales, teams can:</p>
                      <ul>
                        <li>Automatically research and qualify incoming leads using AI agents</li>
                        <li>Prioritise opportunities with AI based scoring and guided work lists</li>
                        <li>Reduce manual data entry across emails, calls, and meetings</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/sales-new-04.png" width={510} height={401} alt="Automated Lead and Opportunity Management" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Pipeline and Deal Execution</h3>
                      <p>When priorities are not clear, it causes deals to stall without warning. Dynamics 365 Sales helps teams to:</p>
                      <ul>
                        <li>Track pipeline health with real time insights and summaries</li>
                        <li>Receive AI driven alerts for the best next sales actions</li>
                        <li>Progress deals faster with consistent and guided sales steps</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/sales-new-05.png" width={510} height={401} alt="Intelligent Pipeline and Deal Execution" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smarter Forecasting and Performance Insight</h3>
                      <p>Sales forecasting based on intuition creates risk and uncertainty. With <b>Dynamics 365 Sales app</b>, leaders can:</p>
                      <ul>
                        <li>Predict revenue using AI supported forecasting models</li>
                        <li>Compare performance against targets with clear visual charts</li>
                        <li>Analyse conversion rates and win trends using Copilot queries</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/sales-new-06.png" width={510} height={401} alt="Smarter Forecasting and Performance Insight" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Personalised Customer Engagement at Scale</h3>
                      <p>Make every impression, every engagement count because Generic outreach weakens trust and engagement over time. A part of <a href="/products/dynamics-365-customer-engagement/">Dynamics 365 CE</a> (<b>Customer Engagement</b>), Dynamics 365 Sales enables teams to:</p>
                      <ul>
                        <li>Prepare for meetings with AI generated customer summaries</li>
                        <li>Draft emails and call notes using Copilot assistance</li>
                        <li>Maintain consistent and informed interactions across channels</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/sales-new-07.png" width={510} height={401} alt="Personalised Customer Engagement at Scale<" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Connected Selling with Secure Foundations</h3>
                      <p>When your apps are disconnected, they limit visibility and create security concerns. Dynamics 365 Sales integrates with:</p>
                      <ul>
                        <li>Microsoft 365 and other <a href="/products/microsoft-dynamics-365/">Dynamics 365 apps</a> to support daily seller productivity</li>
                        <li>Power Platform to extend workflows and automation</li>
                        <li>Enterprise grade security controls to protect customer data</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/sales-new-08.png" width={571} height={369} alt="Connected Selling with Secure Foundations" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd asd4'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>Equip Your Sales Teams with Agentic CRM Intelligence</span>
                  <h3>Adopt AI guided selling that improves focus, prioritisation, and consistent deal progression.</h3>
                  <div>
                    <Link href="/contact-us/" className="btn-get-started scrollto">
                      <span>Get Started Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Sales Benefits: The Advantage Modern Sales Teams Need</h2>
                <p>High performing sales organisations share a common trait. They run selling on systems that guide action, reduce friction, and improve outcomes. Dynamics 365 Sales delivers clarity, focus, and execution through an agentic CRM solution built for modern selling teams.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Close Deals Faster with Clear Priorities</h3>
                    <p>Deals stall when sellers juggle too many tasks without direction. Dynamics 365 Sales uses AI driven prioritisation, opportunity scoring, and guided actions so sellers focus on the deals that matter most.</p>
                  </li>
                  <li>
                    <h3>Improve Pipeline Visibility and Forecast Accuracy</h3>
                    <p>Unclear pipelines weaken planning and confidence. With real time pipeline insights and AI supported forecasting, Dynamics 365 Sales helps leaders track progress, predict revenue, and plan with greater certainty.</p>
                  </li>
                  <li>
                    <h3>Increase Seller Productivity with AI Assistance</h3>
                    <p>Manual updates drain selling time and energy. Copilot supports sellers with email drafts, call summaries, meeting preparation, and automatic activity capture across daily workflows.</p>
                  </li>
                  <li>
                    <h3>Deliver Better Customer Experiences at Scale</h3>
                    <p>Inconsistent interactions damage trust over time. Dynamics 365 Sales equips teams with customer summaries, history, and insights so every conversation feels informed, relevant, and timely.</p>
                  </li>
                  <li>
                    <h3>Scale Sales Operations with Security and Control</h3>
                    <p>Growth increases data risk and process complexity. Dynamics 365 Sales provides role-based access, compliance controls, and secure data handling to support expansion without compromising governance.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p>Organisations using Dynamics 365 Sales report stronger pipeline control, improved forecast confidence, and measurable gains in seller productivity across teams.</p>
                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Claim Your Free Dynamics 365 Sales Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/sales-new-10.png" width={592} height={680} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <img src="/img/n-014.png" width={604} height={958} alt="Card 6" />
        </div>
      </section>

      <section id='section6' className='solution-new-six' style={{ backgroundColor: '#fff' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Agents in Dynamics 365 Sales</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-center' style={{marginBottom:'30px'}}>
                <Image src='/img/sales-new-11.png' alt='sales-new-11' width={1282} height={383} />
              </div>
            </div>
          </div>

          <div className='row g-3 m-t-2'>
            <div className='col-lg-6'>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{fontSize:"18px"}}>AI-First Selling, Built into Your CRM</h3>
                  <p>Dynamics 365 Sales delivers a fully agentic CRM solution through prebuilt sales agents that support the entire customer engagement journey, from lead qualification to deal close and beyond. These agents work with sellers to reduce manual effort and improve focus on high value customer conversations.</p>
                </div>
              </div>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{fontSize:"18px"}}>Built on Copilot and Copilot Studio</h3>
                  <p style={{ marginBottom: '15px' }}>Sales agents are powered by <a href="/blog/microsoft-dynamics-copilot/">Microsoft Copilot</a> and extended through Copilot Studio. Organisations can combine prebuilt agents with custom agents to support specific sales processes and scale productivity across teams.</p>
                  <p>Together, <a href="/products/microsoft-dynamics-365-sales/copilot/">Copilot, agents, and Dynamics 365 Sales</a> enable AI-first selling with clarity, consistency, and confidence.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{fontSize:"18px",marginBottom: '25px'}}>Prebuilt Sales Agents+</h3>
                  <div style={{marginBottom: '20px'}}>
                    <h3>Sales Qualification Agent</h3>
                    <p>Researches and prioritises inbound leads, engages prospects, and prepares personalised outreach. Sellers gain time to focus on relationship building and opportunity progression.</p>
                  </div>
                  <div style={{marginBottom: '20px'}}>
                    <h3>Sales Close Agent</h3>
                    <p>Analyses active deals and highlights insights that help sellers prioritise actions and move opportunities forward faster. Available in preview.</p>
                  </div>
                  <div>
                    <h3>Sales Research Agent</h3>
                    <p>Answers complex sales questions in real time by analysing data across systems and turning information into clear, decision ready insights. Available in preview.</p>
                  </div>
                </div>
              </div>
            </div>


            {/* <div className='col-lg-12'>
              <div className='text-center'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Book a Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>Move From Manual Selling to AI-First Sales Execution</h3>
                <p>Support sellers with agents, insights, and guidance across every stage of sales cycles.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/mask-group-aaa.png" alt="n-015" />
      </section>
      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Sales CRM Pricing & Licensing</h2>
                <p>Choose a Dynamics 365 Sales plan that matches your sales structure, data needs, and growth goals. Each edition builds on Microsoft’s agentic CRM solution and supports secure, scalable selling.</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 <span>Sales Professional</span>
                </h3>
                <p>Dynamics 365 Sales Professional covers core sales force automation with Microsoft 365 integration for everyday selling tasks. It is ideal for teams that need structured lead, contact, and opportunity management.</p>
                <h4>£50.00 <span>per user per month<br />(billed annually)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 <span>Sales Enterprise</span>
                </h3>
                <p>Dynamics 365 Sales Enterprise edition comprises advanced sales force automation with contextual insights, next generation AI, and flexible configuration. It is designed for organisations that require deeper pipeline visibility, forecasting, and sales guidance.</p>
                <h4>£80.70<span>per user per month <br />(paid yearly)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 <span>Sales Premium</span>
                </h3>
                <p>Enterprise capabilities combined with prebuilt and customisable intelligence for sellers and managers. Ideal for teams adopting sales agents, advanced insights, and AI driven selling at scale.</p>
                <h4>£115.30<span>per user per month <br />(paid yearly)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>Want to try it for free?</p>
                < a href="/products/dynamics-365-business-central/pricing-licensing" className="btn-get-started scrollto">
                  <span>Claim Your Free Dynamics 365 Sales Trial Here &nbsp;<i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="busnes-upgrade-serve-one" style={{ paddingTop: '0px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="solution-new-banner-sub-head">
                <h2>What Dynamics 365 Sales Services Do We Offer?</h2>
                <p>Work with Dynamics Square to reinforce your sales operations using Dynamics 365 Sales. As a trusted Microsoft Solutions Partner in the UK, we help organisations adopt an agentic CRM solution that supports clarity, structure, and consistent sales performance.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/settings_b.png" alt="settings_b" width={48} height={48} />
                <h3>Implementation</h3>
                <p>Deliver a structured Dynamics 365 Sales implementation aligned with your sales processes and team workflows. Our approach focuses on clean configuration, role-based setup, and practical adoption across sellers and managers.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/outbound.png" alt="outbound" width={48} height={48} />
                <h3>Upgrade and Migration</h3>
                <p>Move from legacy CRM systems to Dynamics 365 Sales with confidence. We manage data migration, process alignment, and transition planning so your sales teams can start working effectively as soon as it goes live.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/person_pin.png" alt="person_pin" width={48} height={48} />
                <h3>Support</h3>
                <p>Keep your sales CRM system running smoothly with ongoing Dynamics 365 Sales support. Our team resolves issues, manages updates, and ensures your CRM continues to support daily selling without any disruption.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <img className="image-backx" src="/img/free-cons.png" alt="free-cons" />
                <Image src="/img/forum.png" alt="forum" width={48} height={48} />
                <h3>Consulting</h3>
                <p>Gain Dynamics 365 Sales insights on improving pipeline visibility, forecasting, and seller productivity. Our consultants help you use Copilot, sales agents, and analytics in ways that are in line with your business goals.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section9' className='p-t-1-60'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Microsoft Dynamics 365 Sales</h2>
              <p>Reports, e-books, videos, training, and more, everything you need to explore the system.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Videos</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-07-tab" data-bs-toggle="pill" data-bs-target="#pills-home-07" type="button" role="tab" aria-controls="pills-home-07" aria-selected="false">Blogs</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home-03" role="tabpanel" aria-labelledby="pills-home-03-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj" target='_blank'>
                            <img src="/img/bc-8-20.png" width={273} height={192} alt="bc-8-20" />
                            <h3>Is Your Business Ready for an ERP System?</h3>
                            <p>Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST" target='_blank'>
                            <img src="/img/bc-8-22.png" width={273} height={192} alt="bc-8-22" />
                            <h3>Signs Your Business Is Ready for an ERP System</h3>
                            <p>Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=buh-r3WxZtA" target='_blank'>
                            <img src="/img/sales-vid-01.jpg" width={273} height={192} alt="bc-8-20" />
                            <h3>Microsoft Dynamics 365 Sales Accelerator Overview</h3>
                            <p>In this video, get a comprehensive overview of Sales Accelerator in Microsoft Dynamics 365.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=RQC9Qu9-hbI" target='_blank'>
                            <img src="/img/sales-vid-02.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>EY redefines CRM with Dynamics 365 Sales and Sales Agent in Microsoft 365 Copilot</h3>
                            <p>EY redefines CRM with Dynamics 365 and Sales Agent in Microsoft 365 Copilot, facilitating data entry and freeing sellers to focus on relationships. </p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=x6zLv5V0eC0" target='_blank'>
                            <img src="/img/sales-vid-03.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>Customer ROI with Dynamics 365 Sales</h3>
                            <p>Learn about the powerful transformations seen with Dynamics 365 Sales and Microsoft 365 Copilot, such as improved sales performance, enhanced customer interactions, and increased productivity.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
  
                  <div className="tab-pane fade" id="pills-home-07" role="tabpanel" aria-labelledby="pills-home-07-tab">
                    <div className='row'>
                      <BlogFinanaceCard categorySlug="dynamics-365-crm" />

                    </div>
                  </div>

                </div>
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
                  questions about Dynamics 365 Finance?</h2>
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
      <BcPopPdf pdfType={pdfType} />
    </>
  );
};

export default SalesNew;
