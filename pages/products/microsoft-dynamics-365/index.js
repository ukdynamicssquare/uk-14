import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../../public/data/ai-powered.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";


const AiERP = () => {

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365: AI-Powered ERP & CRM Solutions | Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform your business with Microsoft Dynamics 365 ERP & CRM solutions. Dynamics Square UK delivers implementation, support, migration, AI & Copilot expertise."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/" />
        <meta property="og:title" content="Microsoft Dynamics 365: AI-Powered ERP & CRM Solutions | Dynamics Square UK" />
        <meta property="og:description" content="Transform your business with Microsoft Dynamics 365 ERP & CRM solutions. Dynamics Square UK delivers implementation, support, migration, AI & Copilot expertise." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/d360-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365: AI-Powered ERP & CRM Solutions | Dynamics Square UK" />
        <meta property="twitter:description" content="Transform your business with Microsoft Dynamics 365 ERP & CRM solutions. Dynamics Square UK delivers implementation, support, migration, AI & Copilot expertise." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/d360-banner.png" />

      </Head>
      <section className="top-banner-new top-banner-new-style new-tex-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions</h1>
              <h2>Thrive with intelligent business applications</h2>
              <p>Deploy one intelligent system to drive efficiency across all your operations, be it finance, sales, operations, or customer service. The Microsoft Dynamics 365 suite of AI-powered ERP and CRM applications is built to help UK companies become more efficient, make faster decisions, and grow with confidence. </p>
              <p style={{ marginTop: '-15px' }}>Dynamics Square will lead you through the entire process of implementation, customisation, and support of the solution you choose.</p>
              <ul>
                <li>14+ Years of Microsoft Expertise </li>
                <li>500+ Successful Projects </li>
                <li>150+ Certified Consultants </li>
                <li>End-to-End Dynamics 365 Services</li>
              </ul>
              <div className='ne-callt-batt'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">

                  <span>Book Your Live Dynamics 365 Demo</span>
                </Link>
              </div>

            </div>
            <div className="col-lg-6 align-self-center">
              <div className='text-center'>
                <Image src="/img/AI-Powered-00.png" alt="Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions" width={556} height={563} priority={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/AI-Powered-01.png" width={496} height={540} alt="What Is Microsoft Dynamics 365?" />
                </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Is Microsoft Dynamics 365?</h2>
                </div>
                <p>Microsoft Dynamics 365 software is a set of agentic CRM and ERP applications for managing sales, service, finance, supply chain, HR, operations and other company tasks on a single, unified, cloud platform.</p>
                <p>Business leaders seeking to modernise their processes often ask the question: <b>"What is Dynamics 365 used for?"</b></p>
                <p>And the answer is, it is used for the following:</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i>Managing financial operations and reporting</li>
                  <li><i className="bi bi-check2"></i>Streamlining supply chain and inventory</li>
                  <li><i className="bi bi-check2"></i>Improving sales performance and pipeline visibility</li>
                  <li><i className="bi bi-check2"></i>Delivering responsive customer service</li>
                  <li><i className="bi bi-check2"></i>Supporting field teams and project operations</li>
                  <li><i className="bi bi-check2"></i>Driving data-driven decision-making with AI insights</li>
                </ul>
                <p>In essence, Dynamics 365 from Microsoft is a set of business apps that help organisations modernise how work gets done.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='section4' className='solution-new-banner-four new-bg-00'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='solution-new-banner-sub-head new-bg-00-1'>
                <h2>Why Businesses Choose Microsoft Dynamics 365</h2>
                <p>Growth highlights the limits of systems that used to work well. If reporting is taking too long, if information is locked in different systems, if procedures are getting harder to manage, if teams are spending more time chasing updates than performing real work, then it’s time to upgrade. </p>
                <p>UK firms can overcome these constraints with Microsoft Dynamics 365. You don't need to change every process overnight. Instead, you can enhance the key areas that matter most, whether it’s finance, sales, customer service, operations or supply chain, and develop over time as your organisation reaches new heights.</p>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>

              <div className='row g-3'>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-02.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-03.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Reduce repetitive manual work with AI and workflow automation </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-04.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Support teams with applications built for their day-to-day work </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-05.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Connect Microsoft tools your people already use </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-06.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Scale without replacing your technology again</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-07.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Work securely from anywhere using Microsoft's cloud platform </p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='ne-callt-batt'>
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">

                      <span>Explore the Dynamics 365 applications &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-7 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Explore the Dynamics 365 Applications</h2>
                  <p>No two organisations need exactly the same technology. That's why Microsoft Dynamics 365 is available as a collection of business applications that can be deployed individually or together, depending on your goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-business-central/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p className="serv-card-text-666">Manage finance, purchasing, inventory, projects, and operations through one cloud ERP designed for growing businesses.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-finance/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-finance.svg" alt="dynamics-365-finance" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365<br /> Finance
                  </h3>
                </div>
                <p className="serv-card-text-666">Strengthen financial management with advanced budgeting, reporting, compliance, and multi-entity capabilities.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-supply-chain-management/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Supply Chain Management" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Supply Chain Management
                  </h3>
                </div>
                <p className="serv-card-text-666">Improve planning, manufacturing, warehousing, procurement, and logistics with greater operational visibility.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-sales/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="Sales" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Sales
                  </h3>
                </div>
                <p className="serv-card-text-666">Help your sales teams manage opportunities, strengthen customer relationships, and forecast revenue more accurately.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-customer-service/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-service.svg" alt="Customer Service" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Customer Service
                  </h3>
                </div>
                <p className="serv-card-text-666">Deliver consistent customer support across multiple channels while helping service teams resolve issues more efficiently.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-field-service/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-fieldservice.svg" alt="Field Service" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Field Service
                  </h3>
                </div>
                <p className="serv-card-text-666">Schedule technicians, manage work orders, and improve on-site service delivery with intelligent field service tools.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-customer-engagement/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="Customer Insights" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Customer Insights
                  </h3>
                </div>
                <p className="serv-card-text-666">Bring customer data together to create personalised experiences and support more effective marketing and engagement.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-7 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Choose the Right Dynamics 365 Application</h2>
                  <p>Not every business needs every application from day one. The right starting point depends on your goals, operational priorities, and stage of growth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="table-responsive">
                <table className="table ds-table-666 align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Consider</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        Manage finance, inventory, purchasing, and day-to-day operations
                      </td>
                      <td>Dynamics 365 Business Central</td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Strengthen financial planning, compliance, and global financial management
                      </td>
                      <td>Dynamics 365 Finance</td>
                    </tr>

                    <tr>
                      <td>
                        Improve manufacturing, warehousing, procurement, and logistics
                      </td>
                      <td>Dynamics 365 Supply Chain Management</td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Increase sales productivity and improve pipeline visibility
                      </td>
                      <td>Dynamics 365 Sales</td>
                    </tr>

                    <tr>
                      <td>
                        Deliver better, more consistent customer support
                      </td>
                      <td>Dynamics 365 Customer Service</td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Manage onsite service teams and work orders
                      </td>
                      <td>Dynamics 365 Field Service</td>
                    </tr>

                    <tr>
                      <td>
                        Understand customer behaviour and deliver personalised engagement
                      </td>
                      <td>Dynamics 365 Customer Insights</td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
            <div className='col-lg-7'>
              <div className='mt-4'>
                <p>You don't have to deploy every application at once. Many organisations begin with a single solution and expand as new requirements emerge.</p>

                <p>Need help deciding? Speak to a Dynamics 365 Consultant.</p>
                <div className='ne-callt-batt'>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">

                    <span>Schedule a Free Call Now &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className='solution-new-cta slution-new-cta-two0'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-0011'>
                <h2>Get Your Hands on The Ultimate Guide to Dynamics 365</h2>
                <br />
                <div className='product-side-002 product-side-002-ul'>
                  <p>This guide collates details you want to know about Microsoft Dynamics 365 in one place. You’ll find straightforward product comparisons, licensing explained in layman’s terms, tips on implementation and migration, the latest AI capabilities from Microsoft, industry examples and real customer success stories.</p>
                  <p><b>What's Inside This Guide?</b></p>
                  <br />
                  <ul>
                    <li>
                      <h4>61 Pages</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>Detailed Chapters on Solutions</h4>
                      <p>From Business Central and Finance to Sales, Customer Service, Power Platform, Microsoft Fabric, Copilot, and AI Agents.</p>
                    </li>
                    <li>
                      <h4>7 Real Business Case Studies</h4>
                      <p>See how organisations across different industries solved operational challenges and what they achieved.</p>
                    </li>
                    <li>
                      <h4>20+ AI Agents & Copilot Capabilities</h4>
                      <p>Explore Microsoft's latest AI capabilities across Business Central, Finance, Supply Chain Management, Sales, Field Service, and Customer Insights.</p>
                    </li>
                    <li>
                      <h4>6 Industry Solution Blueprints</h4>
                      <p>Learn how manufacturers, retailers, distributors, professional services firms, healthcare providers, and non-profits use Dynamics 365.</p>
                    </li>
                    <li>
                      <h4>ERP Comparison Framework</h4>
                      <p>Understand the difference between Business Central, Finance, and Supply Chain Management, and identify which fits your business.</p>
                    </li>
                    <li>
                      <h4>Implementation & Migration Roadmaps</h4>
                      <p>Follow proven approaches for Dynamics 365 implementation, NAV migration, legacy ERP replacement, cloud adoption, and post-go-live success.</p>
                    </li>
                    <li>
                      <h4>Licensing Made Simple</h4>
                      <p>Get a straightforward explanation of Business Central licensing, attach licences, and Microsoft's application ecosystem.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Explore the Dynamics 365 applications &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div>
                <Image src="/img/AI-Powered-08.png" alt="AI-Powered-08" width={600} height={822} />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why Choose Dynamics Square?</h2>
                <p>The partner you choose will affect the success of your implementation, the speed of your teams’ adoption of the system, and the long-term value of your investment. As a renowned Dynamics 365 cloud ERP and CRM partner, Dynamics Square has a proven competence in CRM and ERP deployments. </p>
                <p>We help businesses in the UK transform their operations with Microsoft Dynamics 365 solutions built around their processes, people, and long-term goals.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-09.png" width={36} height={36} alt="Microsoft-Certified Expertise" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>Work with a team of Microsoft-certified consultants who specialise in ERP, CRM, Power Platform, AI, and cloud technologies, ensuring your solution is built on proven best practices.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-10.png" width={36} height={36} alt="Business-First Solution Architects" />
                <h3>Business-First Solution Architects</h3>
                <p>We don't begin with software. We begin with your business. Our solution architects analyse your processes, identify gaps, and recommend the right approach before implementation starts.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-11.png" width={36} height={36} alt="End-to-End Microsoft Capability" />
                <h3>End-to-End Microsoft Capability</h3>
                <p>From Dynamics 365 Business Central and Finance to Sales, Customer Service, Power Platform, Azure, and ISV integrations, you'll have one experienced partner for your entire Microsoft ecosystem.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-12.png" width={36} height={36} alt="Experience That Spans Legacy and Modern Platforms" />
                <h3>Experience That Spans Legacy and Modern Platforms</h3>
                <p>Having worked with Microsoft business applications since the Dynamics NAV and AX era, we understand both legacy environments and modern cloud transformation, making upgrades and migrations significantly smoother for UK-based firms.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-13.png" width={36} height={36} alt="Industry Knowledge That Goes Beyond Technology" />
                <h3>Industry Knowledge That Goes Beyond Technology</h3>
                <p>Our consultants have delivered Dynamics 365 projects in manufacturing, healthcare, distribution, retail, education, and professional services domain. We have helped UK firms solve operational challenges than simply deploying software.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-14.png" width={36} height={36} alt="Collaborative Delivery Model" />
                <h3>Collaborative Delivery Model</h3>
                <p>With responsive onsite and offshore teams, we combine local engagement with global delivery capability to keep projects moving efficiently while maintaining close collaboration.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-15.png" width={36} height={36} alt="Built for Long-Term Partnerships" />
                <h3>Built for Long-Term Partnerships</h3>
                <p>Our relationship doesn't end at go-live. We continue to support, optimise, and enhance your Dynamics 365 environment as your business evolves.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-16.png" width={36} height={36} alt="Value Without Compromise" />
                <h3>Value Without Compromise</h3>
                <p>Our hybrid delivery model combines personalised consulting with cost-efficient execution. This lets us help you maximise the return on your Dynamics 365 investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <h3>Experience Dynamics 365<br /> in Action</h3>
                <p>You can also get in touch with us for help related to Dynamics 365 sign-in & trial options so you can test capabilities in a guided environment.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule Your Demo Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image style={{ mixBlendMode: 'normal' }} src="/img/AI-Powered-17.png" alt="AI-Powered-17" width={680} height={418} />
      </section>
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Microsoft Dynamics 365 Implementation That Fits Your Business</h2>
                </div>
                <p>Every Dynamics 365 project is unique. Some UK organisations replace legacy ERP software, others require CRM capabilities, modernise finance, or connect several business apps for the first time.</p>
                <p>Our specialists understand your company process before suggesting the proper implementation solution. Whether you are implementing a single Dynamics 365 application or rolling out in phases, we partner with your team to limit interruption and drive user adoption.</p>
                <p>We have delivered Microsoft Dynamics 365 projects for organisations across the UK because we understand local business processes, regulatory issues, and the practical obstacles of replacing legacy ERP and CRM systems.</p>
              </div>

            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001-tbas'>
                <p><b>Our implementation services include:</b></p>
                <ul className='bc-tags'>
                  <li>Business process discovery</li>
                  <li>Solution design and configuration</li>
                  <li>Data migration</li>
                  <li>System integrations</li>
                  <li>User training</li>
                  <li>Ongoing optimisation</li>
                  <li>Go-live support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row align-items-center cta-impl-666">
            <div className="col-lg-7">
              <div className="cta-content-666">
                <h2>Want to understand the complete implementation journey?</h2>
                <p>
                  Read our Complete <a href="/blog/dynamics-365-implementation-guide/"><b>Guide to Dynamics 365
                    Implementation</b>.</a>
                </p>
              </div>
            </div>

            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
              <a href="#exampleModal"
                data-bs-toggle="modal" className="cta-btn-666">
                Talk to a Dynamics 365 Implementation Expert
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-new-banner-twoa">
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Dynamics 365 Pricing & Licensing</h2>
                </div>
                <p>Microsoft Dynamics 365 offers a flexible licensing model. This lets UK organisations to license the applications and users they need without paying for unnecessary functionality. Costs vary depending on the applications selected, user roles, integrations, and the complexity of your implementation.</p>
                <p>We help UK organisations choose the right licensing model while considering future growth, compliance requirements, operational budgets, and the applications they need today.</p>
                <div className='product-side-001-tbas'>
                  <p><b>We'll help you understand:</b></p>
                  <ul className='bc-tags'>
                    <li>Business and Enterprise applications </li>
                    <li>Full User and Team Member licences </li>

                    <li>Implementation costs</li>
                    <li>Ongoing support options </li>

                    <li>Future licensing requirements </li>
                    <li>Attach licences</li>
                    <li>Advice on licensing for multi-company and multi-entity organisations</li>
                  </ul>
                </div>
                <p>Our approach is structured, transparent, and outcome driven. We prioritise operational clarity, risk mitigation, and measurable ROI. We do not believe in overselling functionality. We architect systems aligned with operational reality.</p>
              </div>

            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/AI-Powered-18.png" width={630} height={336} alt="Why Dynamics Square" />
                </div>
                <div className="cta-box-666">
                  <h3>Looking for a tailored estimate?</h3>
                  <p>
                    Our team will recommend the right licensing approach
                    based on your business goals and budget.
                  </p>
                  <a href="#exampleModal"
                    data-bs-toggle="modal" className="cta-btn-6666">
                    Get a Free Consultation!
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two0'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='solution-new-cta-0011' style={{ paddingBottom: '40px' }}>
                <h2>Dynamics 365 Integrations</h2>
                <p>Connect Dynamics 365 with the Tools Your Business Already Uses</p>
                <p>Microsoft Dynamics 365 works best when it fits naturally into your existing technology setup. Whether you rely on Microsoft applications or third-party business systems, our consultants help you create a connected environment where information flows securely and efficiently across your organisation.</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-6 align-self-center'>
              <div>
                <Image src="/img/AI-Powered-19.png" alt="Microsoft Dynamics 365 ERP Right for You" width={614} height={473} />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='solution-new-cta-0011'>
                <div>
                  <p><b>Popular Dynamics 365 integrations include:</b></p>
                  <ul>
                    <li>Power Apps & Power Automate</li>
                    <li>Microsoft Azure</li>
                    <li>Shopify and other eCommerce platforms</li>
                    <li>Banking, payment, and UK tax compliance solutions</li>
                    <li>Document management systems</li>
                    <li>Warehouse Management Systems (WMS)</li>
                    <li>HR and payroll applications</li>
                    <li>HMRC and Making Tax Digital (MTD) compatible finance solutions</li>
                    <li>Industry-specific ISV solutions</li>
                  </ul>
                </div>
                <br />
                <p>From planning integrations to managing data migration, Dynamics Square ensures your Dynamics 365 solution works seamlessly with the systems your business depends on.</p>

                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to an Integration Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Supporting UK Businesses with Microsoft Dynamics 365</h2>
                <p>Microsoft Dynamics 365 helps organisations across the UK manage finance, operations, sales, customer service, and supply chains while adapting to changing business requirements. Whether you're replacing legacy systems, expanding into new markets, or preparing for future compliance requirements, Dynamics 365 provides the flexibility to support your growth with applications that evolve alongside your business.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-20.png" width={36} height={36} alt="Designed for UK Businesses" />
                <h3>Designed for UK Businesses</h3>
                <p>Implement solutions aligned with local business practices and operational requirements.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-21.png" width={36} height={36} alt="Supports Compliance" />
                <h3>Supports Compliance</h3>
                <p>Applications such as Dynamics 365 Business Central and Finance can support VAT reporting and <a href="/blog/making-tax-digital-business-central-and-hmrc-integration/" style={{display:"inline-block",fontSize:'inherit',color:'#b10817'}}>Making Tax Digital</a> (MTD) requirements when configured appropriately.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-22.png" width={36} height={36} alt="Local Expertise" />
                <h3>Local Expertise</h3>
                <p>Work with Microsoft-certified consultants who have delivered Dynamics 365 projects across the UK.</p>
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
                  questions about Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions?</h2>
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

export default AiERP;
