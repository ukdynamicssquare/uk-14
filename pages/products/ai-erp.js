import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../public/data/dynamics-erp-faq.json';
import useCardScrollEffect from "../../components/useCardScrollEffect";


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
          <meta name="robots" content="noindex, nofollow" />
        <title>Microsoft Dynamics ERP: A Complete ERP Solution</title>
        <meta
          name="description"
          content="Simplify and manage your enterprise practices by an Integrated Microsoft Dynamics ERP Solution solutions. Request a free demo at Dynamics Square UK today!"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/" />
        <meta property="og:title" content="Microsoft Dynamics ERP: A Complete ERP Solution" />
        <meta property="og:description" content="Simplify and manage your enterprise practices by an Integrated Microsoft Dynamics ERP Solution. Request a free demo from our ERP expert today." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/erp-new-pic-00.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-erp/" />
        <meta property="twitter:title" content="Microsoft Dynamics ERP: A Complete ERP Solution" />
        <meta property="twitter:description" content="Simplify and manage your enterprise practices by an Integrated Microsoft Dynamics ERP Solution. Request a free demo from our ERP expert today." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/erp-new-pic-00.png" />

      </Head>
      <section className="top-banner-new top-banner-new-style new-tex-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions</h1>
              <h2>Agentic and AI-Powered ERP Solutions for Modern Enterprises</h2>
              <p>Microsoft Dynamics ERP is a collection of agentic and AI-powered, cloud-based ERP applications for managing finance, operations, supply chain, sales, projects, and people, all hosted on Microsoft’s secure cloud platform.</p>
              <p style={{ marginTop: '-15px' }}>Get your hands on a suitable Microsoft ERP to make your operations seamless and business futureproof. Schedule a free call today to get clarity on:</p>
              <ul>
                <li>Which ERP fits your size</li>
                <li>How AI fits into finance, supply chain, and operations</li>
                <li>Implementation process, cost, and long-term scalability</li>
              </ul>
              <div className='ne-callt-batt'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">

                  <span>Book a Free Dynamics 365 ERP Consultation</span>
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
                  <Image src="/img/AI-Powered-01.png" width={496} height={540} alt="What Is Microsoft Dynamics 365 ERP" />
                </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Is Microsoft Dynamics 365 ERP?</h2>
                </div>
                <p>Microsoft ERP comprises agentic ERP Solutions which are a part of the bigger <a href="/products/microsoft-dynamics-365/">Dynamics 365 suite</a>. These AI-powered ERPs serve as unified platforms which integrate financial oversight, operational governance, supply chain intelligence, project financials, human resources, and retail functionalities within an interconnected ecosystem.</p>
                <p><b>Key aspects of Microsoft Dynamics ERP software:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Cloud-first deployment</li>
                  <li><i className="bi bi-check2"></i> Deeply integrated with Microsoft 365, Power Platform, and Azure</li>
                  <li><i className="bi bi-check2"></i> Embedded with AI agents and Copilot capabilities</li>
                  <li><i className="bi bi-check2"></i> Modular and scalable</li>
                  <li><i className="bi bi-check2"></i> Designed for mid-sized to enterprise organisations</li>
                </ul>
                <p>Microsoft is transforming ERPs into something more than just automation. With AI agents integrated throughout finance and operations, the system goes beyond merely recording transactions, it detects anomalies, forecasts outcomes, suggests actions, and supports users in real time.</p>
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
                <h2>Core Characteristics of Agentic Microsoft ERP</h2>
                <p>Growth highlights the limits of systems that used to work well. If reporting is taking too long, if information is locked in different systems, if procedures are getting harder to manage, if teams are spending more time chasing updates than performing real work, then it’s time to upgrade. </p>
                <p>UK firms can overcome these constraints with Microsoft Dynamics 365. You don't need to change every process overnight. Instead, you can enhance the key areas that matter most, whether it’s finance, sales, customer service, operations or supply chain, and develop over time as your organisation reaches new heights. </p>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>

              <div className='row g-3'>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-02.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-03.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-04.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-05.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-06.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-07.png" alt="AI-Powered-02" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting</p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='ne-callt-batt'>
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">

                      <span>Book a Free Dynamics 365 ERP Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <p className="serv-card-text-666">
                  Streamlines operations, enhances financial management,
                  and integrates seamlessly with Microsoft tools.
                </p>
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
                <p className="serv-card-text-666">Deliver consistent customer support across multiple channels while helping service teams resolve issues more efficiently</p>
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
                <p className="serv-card-text-666">Optimize operations with accurate demand forecasting, supplier relationship management, and real-time supply chain analytics.</p>
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
                <p className="serv-card-text-666">Enhance productivity with real-time dashboards, automate tasks and build custom apps for unique workflows</p>
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
                <p className="serv-card-text-666">Streamlines operations, enhances financial management, and integrates seamlessly with Microsoft tools.</p>
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
                <p className="serv-card-text-666">Streamlined sales with centralized customer data, AI-driven insights, lead tracking, and simplified quoting and order processing</p>
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
                <p className="serv-card-text-666">Optimize operations with accurate demand forecasting, supplier relationship management, and real-time supply chain analytics.</p>
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
                  <h2>Explore the Dynamics 365 Applications</h2>
                  <p>No two organisations need exactly the same technology. That's why Microsoft Dynamics 365 is available as a collection of business applications that can be deployed individually or together, depending on your goals.</p>
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
                <p>Youdon'thave to deploy every application at once. Many organisations begin with a single solution and expand as new requirementsemerge.</p>

                <p>Need help deciding? Speak to a Dynamics 365 Consultant.</p>
                <div className='ne-callt-batt'>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">

                    <span>Book a Free Dynamics 365 ERP Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>Is Microsoft Dynamics ERP Right for You?</h2>
                <br />
                <div className='product-side-002 product-side-002-ul'>
                  <p>This guide collates details you want to know about Microsoft Dynamics 365 in one place. You’ll find straightforward product comparisons, licensing explained in layman’s terms, tips on implementation and migration, the latest AI capabilities from Microsoft, industry examples and real customer success stories. </p>
                  <p><b>What's Inside This Guide?</b></p>
                  <br />
                  <ul>
                    <li>
                      <h4>61 Pages</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>Detailed Chapters on Solutions</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>7 Real Business Case Studies</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>20+ AI Agents & Copilot Capabilities</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>57 Pages</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
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
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Modules: <br />Everything Finance Demands, Together</h2>
                <p>Enterprises need more than basic accounting tools. You need an intelligent, centralised system that unifies global finance, strengthens compliance, and delivers AI powered insights.</p>
                <p>Here’s what Dynamics 365 Finance covers:</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-09.png" width={36} height={36} alt="AI-Powered-09" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-10.png" width={36} height={36} alt="AI-Powered-10" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-11.png" width={36} height={36} alt="AI-Powered-11" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-12.png" width={36} height={36} alt="AI-Powered-12" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-13.png" width={36} height={36} alt="AI-Powered-13" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-14.png" width={36} height={36} alt="AI-Powered-14" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-15.png" width={36} height={36} alt="AI-Powered-16" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-16.png" width={36} height={36} alt="AI-Powered-16" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
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
                <h3>The Right Time for Smarter Finance Is Now</h3>
                <p>Every day without an intelligent finance system means higher risks, delayed insights, and missed savings. Choose Dynamics 365 Finance ERP: The Smartest Cloud Finance Solution for Modern Enterprises.</p>
                <p>Don’t Wait. Take the Step Toward Intelligent Finance. </p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Try Dynamics 365 Finance Today  &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <p>As a specialised and <a href="/">certified Microsoft Dynamics ERP partner</a>, Dynamics Square focuses exclusively on Microsoft solutions.</p>
                <p>Our approach is structured, transparent, and outcome driven. We prioritise operational clarity, risk mitigation, and measurable ROI. We do not believe in overselling functionality. We architect systems aligned with operational reality.</p>
                <p>As a specialised and <a href="/">certified Microsoft Dynamics ERP partner</a>, Dynamics Square focuses exclusively on Microsoft solutions.</p>
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
                <h2>
                  Want to understand the complete
                  implementation journey?
                </h2>
                <p>
                  Read our Complete Guide to Dynamics 365
                  Implementation.
                </p>
              </div>
            </div>

            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
              <a href="#" className="cta-btn-666">
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
                  <h2>Why Dynamics Square?</h2>
                </div>
                <p>Microsoft Dynamics 365 offers a flexible licensing model. This lets UK organisations to license the applications and users they need without paying for unnecessary functionality. Costs vary depending on the applications selected, user roles, integrations, and the complexity of your implementation.

                  We help UK organisations choose the right licensing model while considering future growth, compliance requirements, operational budgets, and the applications they need today.

                </p>
                <div className='product-side-001-tbas'>
                  <p><b>Our implementation services include:</b></p>
                  <ul className='bc-tags'>
                    <li>Business process discovery</li>
                    <li>Solution design and configuration</li>
                    <li>Data migration</li>
                    <li>System integrations</li>
                    <li>User training</li>
                    <li>Ongoing optimisation</li>
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
                      <a href="#" className="cta-btn-6666">
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
              <div className='solution-new-cta-0011' style={{paddingBottom:'40px'}}>
                <h2>Is Microsoft Dynamics ERP Right for You?</h2>
                <p>Our approach is structured, transparent, and outcome driven. We prioritise operational clarity, risk mitigation, and measurable ROI. </p>
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
                  <p><b>You should consider Microsoft Dynamics 365 ERP if:</b></p>
                  <ul>
                    <li>Your current system lacks scalability.</li>
                    <li>Reporting requires excessive manual effort.</li>
                    <li>Compliance requirements are increasing.</li>
                    <li>You operate across multiple entities or regions.</li>
                    <li>AI-driven forecasting would improve decision-making.</li>
                    <li>You want a unified ecosystem across ERP, CRM, and analytics.</li>
                  </ul>
                </div>
                <br />
                <p>From planning integrations to managing data migration, Dynamics Square ensures your Dynamics 365 solution works seamlessly with the systems your business depends on.</p>
                
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get a Free Consultation! &nbsp;<i className="bi bi-arrow-right"></i></span>
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
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Modules: <br />Everything Finance Demands, Together</h2>
                <p>Enterprises need more than basic accounting tools. You need an intelligent, centralised system that unifies global finance, strengthens compliance, and delivers AI powered insights.</p>
                <p>Here’s what Dynamics 365 Finance covers:</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-20.png" width={36} height={36} alt="AI-Powered-20" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-21.png" width={36} height={36} alt="AI-Powered-21" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-22.png" width={36} height={36} alt="AI-Powered-22" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>AI powered budgeting, forecasting, and performance analytics with Copilot assistance.</p>
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
                  questions about Microsoft Dynamics ERP?</h2>
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
