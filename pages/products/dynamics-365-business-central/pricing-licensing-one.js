import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/finance_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import BcPopPdf from '../../../components/BCPdfPopup';
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const BusinessCentral = () => {
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
        <title>Microsoft Dynamics 365 Business Central Pricing</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Get a Clear & Transparent Pricing for Microsoft Dynamics 365 Business Central UK"
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Business Central Pricing" />
        <meta property="og:description" content="Get a Clear & Transparent Pricing for Microsoft Dynamics 365 Business Central UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-finance/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Business Central Pricing" />
        <meta property="twitter:description" content="Get a Clear & Transparent Pricing for Microsoft Dynamics 365 Business Central UK" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png" />

      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central Pricing</h1>
                <span className='large-heading'>Get a Clear & Transparent Pricing for Microsoft Dynamics 365 Business Central UK</span>
                <p>Business Central pricing in the UK starts at £61.50 per user/month, with flexible licensing designed to scale with your business. Learn here what you will pay, how licensing works, and what influences your total investment, before you commit.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get Your Exact Pricing &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <section id='section8' className='solution-new-pricing col-ff3 '>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Pricing: A Quick Insight</h2>
                <p>Microsoft Dynamics 365 Business Central pricing based on official Microsoft plans are as follows:</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff4'>
                <h3>Essentials
                </h3>
                <h4>£61.50<span>/user/month</span></h4>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff4'>
                <h3>Premium
                </h3>
                <h4>£61.50<span>/user/month</span></h4>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff4'>
                <h3>Team Members
                </h3>
                <h4>£61.50<span>/user/month</span></h4>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
          </div>
          <div className="trial-banner">
            <div className="row align-items-center g-0">

              <div className="col-lg-4">
                <div className="trial-title">
                  Dynamics 365 Business Central
                  <strong>Free Trial</strong>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="trial-content">
                  Dynamics Square offers a 30-day trial for <a href="#">Business Central ERP</a>  where you will get the full access to explore finance,
                  sales, service, and operations in one system.
                  We encourage you to explore the solution before you commit.
                </div>
              </div>

              <div className="col-lg-1 text-center">
                <a href="/products/dynamics-365-business-central/" className="trial-btn">
                  <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0 0 1h4.293L2.146 13.146a.5.5 0 1 0 .708.708L13 3.707V8a.5.5 0 0 0 1 0V2.5z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className="container py-5">
        <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Pricing: A Quick Insight</h2>
                <p>Microsoft Dynamics 365 Business Central pricing based on official Microsoft plans are as follows:</p>
              </div>
            </div>
          </div>
        <div className="row g-4">

          <div className="col-lg-4 col-md-6">
            <div className="cost-card h-100">
              <img src="images/licensing.png" alt="" className="card-icon" />

              <h4>Licensing Costs</h4>

              <p>
                It is based on the number of users and the type of access required:
              </p>

              <ul>
                <li>Full users (Essentials or Premium)</li>
                <li>Additional users (Team Members)</li>
                <li>Shared access via device licences</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="cost-card h-100">
              <img src="images/implementation.png" alt="" className="card-icon" />

              <h4>Implementation Costs</h4>

              <p>
                The final Business Central implementation cost includes everything required to get your system live:
              </p>

              <ul>
                <li>System configuration</li>
                <li>Data migration</li>
                <li>Process alignment</li>
                <li>User training</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="cost-card h-100">
              <img src="images/ongoing.png" alt="" className="card-icon" />

              <h4>Ongoing Costs</h4>

              <p>
                Post go-live of Business Central, organisations choose to invest in:
              </p>

              <ul>
                <li>Support and maintenance</li>
                <li>System enhancements</li>
                <li>Additional storage or environments</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <section className="pricing-estimator-section py-5">
        <div className="container">

          <div className="row align-items-center">


            <div className="col-lg-8">
              <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Central Pricing: A Quick Insight</h2>
                <p>Microsoft Dynamics 365 Business Central pricing based on official Microsoft plans are as follows:</p>
              </div>
            </div>
          </div>

              <div className="steps-wrapper">

                <div className="timeline-line"></div>

                <div className="row text-center">
                  <div className="col-md-4">
                    <div className="step-circle">1</div>

                    <h5>Choose User Types</h5>

                    <p>
                      Determine who needs full functionality vs.
                      light access.
                    </p>
                  </div>

                  <div className="col-md-4">
                    <div className="step-circle">2</div>

                    <h5>Define Number of Users</h5>

                    <p>
                      Calculate how many seats your business currently
                      requires.
                    </p>
                  </div>

                  <div className="col-md-4">
                    <div className="step-circle">3</div>

                    <h5>Consider Additional Needs</h5>

                    <p>
                      Factor in integrations, customizations,
                      and storage.
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="calculator-card">

                <p>
                  Besides, you can also use our
                  <a href="#">
                    Dynamics 365 ERP Implementation Price Calculator
                  </a>
                  to get an estimated cost of ERP implementation.
                </p>

                <a href="#" className="calculator-btn">
                  Calculate Now
                  <span>→</span>
                </a>

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
        <img src="/img/n-015.png" alt="n-015" />
      </section>

    <section className="license-section py-5">
    <div className="container">

        <div className="row g-4">

            <div className="col-lg-6">
                <div className="license-card h-100">

                    <h3>Base Licensing Model</h3>

                    <p>
                        Every full-access user must have a base licence,
                        which is the primary application they use.
                    </p>

                    <p className="mb-2">
                        For Business Central, this includes:
                    </p>

                    <ul>
                        <li>Essentials</li>
                        <li>Premium</li>
                    </ul>

                    <p className="highlight-text">
                        You choose on the basis of your operational requirements.
                    </p>

                    <p className="mb-2">
                        The base licence determines:
                    </p>

                    <ul>
                        <li>The level of functionality available</li>
                        <li>The type of additional applications that can be attached</li>
                    </ul>

                </div>
            </div>

            <div className="col-lg-6">
                <div className="license-card h-100">

                    <h3>Attach Licences (Cost Optimisation Opportunity)</h3>

                    <p>
                        If users require multiple Dynamics 365 applications,
                        Microsoft offers attach licences at a discounted rate.
                    </p>

                    <p className="mb-2">
                        For example:
                    </p>

                    <ul>
                        <li>
                            Users with a qualifying base licence can add applications
                            like <a href="#">Dynamics 365 Sales</a>,
                            <a href="#">Customer Service</a>, or
                            <a href="#">Field Service</a>
                            at a lower monthly cost.
                        </li>
                    </ul>

                    <p className="highlight-text">
                        Attach licences can be typically availed at one-third
                        of the base licence pricing:
                    </p>

                    <ul>
                        <li>
                            £20 per user/month for apps like Dynamics 365 Sales
                            or Customer Service
                        </li>
                        <li>
                            £30 per user/month for apps like Dynamics 365 Finance
                            or Supply Chain Management
                        </li>
                    </ul>

                </div>
            </div>

        </div>

        <div className="insight-banner">

            <div className="row align-items-center">

                <div className="col-lg-8">
                    <div className="insight-content">
                        <h4>An Important Insight:</h4>

                        <p>
                            Attach licences do not include separate platform
                            entitlements. They rely on the base licence,
                            which is why choosing the right base licence
                            is critical.
                        </p>
                    </div>
                </div>

                <div className="col-lg-4 text-lg-end text-center">
                    <a href="#" className="insight-btn">
                        Get Your Licensing Right
                        <span>→</span>
                    </a>
                </div>

            </div>

        </div>

    </div>
</section>

<section className="license-comparison-section py-5">
    <div className="container">

        <div className="table-responsive">

            <table className="table comparison-table align-middle mb-0">

                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>Essentials</th>
                        <th>Premium</th>
                        <th>Team Members</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><strong>Price (per user/month)</strong></td>
                        <td>£61.50</td>
                        <td>£84.60</td>
                        <td>£6.20</td>
                    </tr>

                    <tr className='comparison-bg'>
                        <td><strong>Access Level</strong></td>
                        <td>Full</td>
                        <td>Full</td>
                        <td>Limited</td>
                    </tr>

                    <tr>
                        <td><strong>Financial Management</strong></td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>View only</td>
                    </tr>

                    <tr className='comparison-bg'>
                        <td><strong>Supply Chain Management</strong></td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Limited</td>
                    </tr>

                    <tr>
                        <td><strong>CRM Capabilities</strong></td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Limited</td>
                    </tr>

                    <tr className='comparison-bg'>
                        <td><strong>Project Management</strong></td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>Limited</td>
                    </tr>

                    <tr>
                        <td><strong>Warehouse Management</strong></td>
                        <td>Yes</td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>

                    <tr className='comparison-bg'>
                        <td><strong>Service Management</strong></td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>

                    <tr>
                        <td><strong>Manufacturing</strong></td>
                        <td>No</td>
                        <td>Yes</td>
                        <td>No</td>
                    </tr>

                    <tr className='comparison-bg'>
                        <td><strong>Best For</strong></td>
                        <td>SMEs with core operations</td>
                        <td>Manufacturing & service-driven businesses</td>
                        <td>Light users, approvals, reporting</td>
                    </tr>
                </tbody>

            </table>

        </div>


        <div className="license-note mt-5">

            <h3>Which Licence Should You Choose?</h3>

            <ul>
                <li>
                    Choose Essentials if your focus is finance, sales, and operations
                </li>

                <li>
                    Choose Premium if you require manufacturing or service management capabilities
                </li>

                <li>
                    Use Team Members to extend access without increasing costs significantly
                </li>
            </ul>

        </div>

    </div>
</section>

  <section id='section3' className='solution-new-banner-three' style={{ paddingBottom: '80px' }}>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Business Central Capabilities</h2>
                <p>Microsoft Dynamics 365 Business Central capabilities make it a widely preferred choice by small and midsize businesses.</p>
                <p>Is<a href="/blog/business-central-for-accounting/"> Business Central for Accounting</a>? Yes… and no. D365 BC is much more than just being accounting software. It supports companies across industries and keeps teams connected anywhere in the world.</p>
                <p><b>Business Central comes with the following capabilities:</b></p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                        <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-008.png" width={574} height={369} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smart Inventory & Supply Chain </h3>
                      <p>Every product you mismanage is money lost. Business Central ensures you: </p>
                      <ul>
                        <li>Avoid stockouts with demand forecasting. </li>
                        <li>Cut carrying costs by ordering just the right amount. </li>
                        <li>Automate vendor & purchase order management to reduce delays. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-009.png" width={574} height={360} alt="Card 2" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>AI-Driven Insights: With Out-of-the-box Copilot </h3>
                      <p>Your competitors are using data to make smarter, faster decisions; are you? With Dynamics 365 Business Central, you:</p>
                      <ul>
                        <li>Get real-time dashboards to track sales, expenses & customer behaviour. </li>
                        <li>Use predictive analytics to anticipate trends and demand shifts. </li>
                        <li>Optimise pricing & marketing strategies using AI-driven insights. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-010.png" width={574} height={360} alt="Card 3" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Sales CRM: Close More Deals, Faster </h3>
                      <p>Your sales team shouldn’t waste time manually tracking leads or missing follow-ups. BC ERP empowers them to:</p>
                      <ul>
                        <li>Automate lead nurturing so no opportunity slips through the cracks. </li>
                        <li>Track every customer interaction for personalised service. </li>
                        <li>Turn data into sales strategies and know what works, and double down. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-011.png" width={584} height={369} alt="Card 4" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations: Work Smarter, Not Harder </h3>
                      <p>Switching between platforms kills productivity. Microsoft Business Central integrates effortlessly with:</p>
                      <ul>
                        <li>Microsoft 365 for smooth collaboration. </li>
                        <li>Power BI for next-level analytics & custom dashboards. </li>
                        <li>Third-party apps like Shopify, PayPal & more to fit your workflow. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-012.png" width={571} height={369} alt="Card 5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mar-top-7 justify-content-center" style={{ backgroundColor: 'rgb(241 240 244)', padding: '60px 0px' }}>
            <div className="col-lg-10 ">
              <div className="accordion accordion-flush acc-bc-ho" id="bclist1">
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-1">
                    <div className='bec-acc'>
                      <h3>Financial Management</h3>
                      <span>General ledger, accounts payable and receivable, VAT and tax management, budgets, cash flow forecast, fixed assets, <a href="/blog/multi-entity-multi-currency-consolidation-in-business-central">multi-currency support</a></span>
                    </div>
                  </div>

                  <div
                    id="bc-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist1"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Financial Management Features:</h4>
                        <p>General ledger, accounts payable and receivable, VAT and tax management, dimensions, budgets, cost accounting, deferrals, allocation accounts, multiple currencies, consolidation, intercompany postings, fixed assets, cash management, bank reconciliation, reminders, check writing, subscription billing, and recurring and consumption-based billing.</p>
                        <h4>Business Central Financial Management Overview:</h4>
                        <p>Dynamics 365 Business Central Finance functionality simplifies daily accounting and covers advanced financial operations.
                          <a href="/products/dynamics-365-business-central/financial-management/">The Business Central Financial Management module</a> contains features like ledger posting, dimensions, VAT management, AP and AR, budgets, bank connectivity, reconciliations, subscription billing, and more. Leaders have access to timely Business Central reporting with reliable numbers for planning and compliant close.
                        </p>
                        <h4>Business Central Financial Management Benefits:</h4>
                        <ul>
                          <li>Faster financial close</li>
                          <li>Accurate forecasting</li>
                          <li>Stronger compliance</li>
                          <li>Improved, real-time visibility</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-2">
                    <div className='bec-acc'>
                      <h3>Supply Chain Management</h3>
                      <span>Purchasing, inventory control, demand forecasting, warehouse management, manufacturing, planning and availability</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist2"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Supply Chain Management Features:</h4>
                        <p>Purchasing, vendor management, invoice discounts, alternative vendors, product information management, item attributes and variants, item references, substitutions with Copilot, inventory control and costing, item tracking, multiple locations, SKUs, transfers, shipping agents, item charges, planning and availability, demand forecasting, ATP or CTP, reservation, calendars, warehouse management, bins and picks, FEFO picking, cross docking, and manufacturing.</p>
                        <h4>Business Central Supply Chain Management Overview:</h4>
                        <p>Microsoft <a href="/products/dynamics-365-business-central/supply-chain-management/">Business Central Supply Chain module</a> helps manage inventory, vendors, and logistics with real-time visibility and automation.</p>
                        <p>D365 Business Central (BC) Supply Chain Management functionality comes with features like end-to-end flow across purchasing, inventory, planning, warehouse, and manufacturing. </p>
                        <p>Teams manage vendors and prices, maintain rich item data, track stock with serial or lot, plan supply through MPS or MRP, promise dates with ATP or CTP, and run warehousing with bins, picks, and put aways. This way, operations stay coordinated and timely.</p>
                        <h4>Business Central Supply Chain Management Benefits:</h4>
                        <ul>
                          <li>On-time deliveries</li>
                          <li>Lower stock holding</li>
                          <li>Stronger supplier control</li>
                          <li>Efficient warehouse flow</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-3">
                    <div className='bec-acc'>
                      <h3>Sales Management</h3>
                      <span>Sales quotes, order management, flexible pricing, invoice discounts, return management, Copilot sales assistance</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist3"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Sales Management Features:</h4>
                        <p>Customer records, quotes, blanket orders, sales orders, flexible line pricing and discounts, campaign pricing, invoice discounts, partial shipping, returns management, and <a href="/products/microsoft-dynamics-365-sales/copilot/">Microsoft Copilot sales assistance</a>.</p>
                        <h4>Business Central Sales Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/sales-order-management/">Dynamics 365 Business Central Sales</a> streamlines quotes, orders, and pricing to build stronger customer relationships.</p>
                        <p>Business Central Sales functionality handles the order to invoice journey. Teams create quotes and orders, apply price lists and discounts, ship partially when required, manage returns and credit, and generate accurate invoices. Microsoft Copilot in Business Central can suggest sales lines from natural prompts or files, which speeds document creation and reduces manual entry.</p>
                        <h4>Business Central Sales Management Benefits:</h4>
                        <ul>
                          <li>Faster order cycle</li>
                          <li>Accurate pricing logic</li>
                          <li>Happier repeat customers</li>
                          <li>Stronger sales control</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-4">
                    <div className='bec-acc'>
                      <h3>Ecommerce Management</h3>
                      <span>Shopify integration, multi-store management, customer sync, inventory synchronization, e-documents support</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist4"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Ecommerce Management Features:</h4>
                        <p><a href="/shopify-connector-business-central/">Shopify connector</a>, multi store scenarios, sync items, inventory, customers, orders and transactions, Shopify DTC and B2B, metafields support, scheduled background sync, export posted invoices, and electronic documents handling with Microsoft Copilot mapping.</p>
                        <h4>Business Central Ecommerce Management Overview:</h4>
                        <p>D365 Business Central Ecommerce module helps connect online stores and business processes for seamless selling and fulfilment. </p>
                        <p>Products, variants, prices, and stock flow to Shopify, while orders, customers, edits, refunds, and fulfilments flow back. Teams run DTC and B2B models, map metafields, and schedule sync tasks, with electronic documents supported for compliant billing.</p>
                        <h4>Business Central Ecommerce Management Benefits:</h4>
                        <ul>
                          <li>Unified commerce data</li>
                          <li>Fewer order errors</li>
                          <li>Faster fulfilment cycles</li>
                          <li>Connected operations</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-5">
                    <div className='bec-acc'>
                      <h3>Customer Relationship Management</h3>
                      <span>Contact management, campaigns, opportunity tracking, email logging, Dynamics 365 Sales integration</span>

                    </div>
                  </div>

                  <div
                    id="bc-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist5"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Customer Relationship Management Features:</h4>
                        <p>Contacts and accounts, profiling and ABC segmentation, campaigns, interaction and document history, email logging with Exchange, opportunity management, and <a href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a> integration.</p>
                        <h4>Business Central Customer Relationship Management Overview:</h4>
                        <p>Dynamics 365 Business Central CRM module centralises customer data to improve campaigns, sales, and engagement.</p>
                        <p>This <a href="/blog/crm-functionality-in-dynamics-365-business-central/">Business Central CRM functionality</a> covers contact centric selling. Teams manage people and companies, track calls, meetings, and files, plan and run campaigns, score segments, and follow opportunities through defined stages. Integration with Dynamics 365 Sales supports lead to cash flow, shared price lists, inventory checks, and order sync for fulfilment and billing.</p>
                        <h4>Business Central Customer Relationship Management Benefits:</h4>
                        <ul>
                          <li>Centralised customer view</li>
                          <li>Targeted campaigns</li>
                          <li>Better pipeline clarity</li>
                          <li>Higher retention rates</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-6">
                    <div className='bec-acc'>
                      <h3>Project Management</h3>
                      <span>Project setup, budgeting, time tracking, resource allocation, invoicing, WIP calculation</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-6"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist6"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Project Management Features:</h4>
                        <p>Project setup and tasks, budgets, resource and capacity planning, timesheets, WIP calculation, project invoicing, project-specific prices and costs, and project-based replenishment.</p>

                        <h4>Business Central Project Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/project-management/">Microsoft Dynamics 365 Business Central Project Management</a> functionality supports planning, tracking, and billing for successful project delivery.</p>
                        <p>Project Management functionality in Business Central allows managers to create tasks and budgets, allocate resources, collect time, calculate WIP to the ledger, and invoice fixed price or time and materials. Projects draw items through assembly to order or purchase creation, with role-based pages and reports for progress, costs, and profitability.</p>
                        <h4>Business Central Project Management Benefits:</h4>
                        <ul>
                          <li>On schedule delivery</li>
                          <li>Controlled project costs</li>
                          <li>Accurate phased billing</li>
                          <li>Clear profitability view</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-7">
                    <div className='bec-acc'>
                      <h3>Service Management</h3>
                      <span>Service contracts, work order management, dispatching, service pricing, warranty tracking, Field Service integration</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-7"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist7"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Service Management Features:</h4>
                        <p>Planning and dispatching, service contracts, warranties, service items, service orders and repairs, service price management, and <a href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service integration</a>.</p>
                        <h4>Business Central Service Management Overview:</h4>
                        <p><a href="/products/dynamics-365-business-central/service-management/">Microsoft Business Central Service Management functionality</a> enhances service delivery with better scheduling and contract management.</p>
                        <p>The role of Service Management functionality in Business Central is to ensure service as a connected workflow. Teams dispatch technicians, manage contracts and entitlements, track service items and parts, set price groups for labour and materials, and invoice completed work. </p>
                        <p>Integration with Dynamics 365 Field Service carries work orders, consumption, and completion data back for accurate billing and inventory impact.</p>
                        <h4>Business Central Service Management Benefits:</h4>
                        <ul>
                          <li>Faster service response</li>
                          <li>Lower service costs</li>
                          <li>Contract-driven control</li>
                          <li>Higher satisfaction levels</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-8">
                    <div className='bec-acc'>
                      <h3>Human Resources Management</h3>
                      <span>Employee records, absence tracking, payments, reimbursements</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-8"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist8"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Human Resources Management Features:</h4>
                        <p>Employee records, contracts and qualifications, absence registration and analysis, and employee payments and reimbursements.</p>
                        <h4>Business Central Human Resources Management Overview:</h4>
                        <p>D365 Business Central Human Resources module simplifies employee data management and streamlines HR tasks.</p>
                        <p>The HR functionality in Business Central helps HR teams to maintain accurate employee data, register leave with category or period filters, and process reimbursements through journals, including foreign currency claims. Clean records and basic reporting support compliance needs and smooth handling of day-to-day HR tasks.</p>
                        <h4>Business Central Human Resources Management Benefits:</h4>
                        <ul>
                          <li>Organised employee records</li>
                          <li>Clear absence trends</li>
                          <li>Smooth reimbursements</li>
                          <li>Lighter admin effort</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-9">
                    <div className='bec-acc'>
                      <h3>Business Intelligence: Analytics and Reporting</h3>
                      <span><a href="/products/microsoft-power-bi/">Power BI integration</a>, 300+ built-in KPIs, financial reporting, data analysis with Copilot, 400+ reports</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-9"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist9"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Business Intelligence Features:</h4>
                        <p><a href="/blog/power-bi-reports/">Power BI reports</a>, 300+ built-in KPIs, self-service financial reporting, Excel export and layouts, built-in Data Analysis, Analysis Assist with Copilot, 400+ built-in reports, and ESG figures in statements.</p>
                        <h4>Business Central Business Intelligence Overview:</h4>
                        <p>Dynamics 365 Business Central Business Intelligence delivers insights and reporting tools for smarter decision-making.</p>
                        <p>Using Microsoft Business Central, teams can view reports in the client or mobile, set thresholds, share scorecards, and build statements from the chart of accounts. Besides, features like Lists support pivot-style analysis, while <a href="/blog/microsoft-dynamics-copilot/">Microsoft Copilot</a> prepares analysis tabs from plain prompts. Excel layouts and OneDrive links streamline reporting cycles.</p>
                        <h4>Business Central Business Intelligence Benefits:</h4>
                        <ul>
                          <li>Deeper KPI insight</li>
                          <li>Faster ad hoc analysis</li>
                          <li>Flexible reporting stacks</li>
                          <li>Confident analysis daily</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-10">
                    <div className='bec-acc'>
                      <h3>Security</h3>
                      <span>Access control, compliance tools, multi-factor authentication, Microsoft Cloud security</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-10"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist10"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Security Features:</h4>
                        <p>Role-based access, privacy controls, audit and compliance foundations, Microsoft Cloud security, tenant data separation, and multi-factor authentication.</p>
                        <h4>Business Central Security Overview:</h4>
                        <p>Microsoft Dynamics 365 Business Central Security protects data with enterprise-grade security and compliance features.</p>
                        <p>In Business Central, access aligns with roles and permissions, privacy controls apply across services, and compliance frameworks support regional obligations. Authentication and tenant separation keep information segmented while teams work efficiently across integrated business processes.</p>
                        <h4>Business Central Security Benefits:</h4>
                        <ul>
                          <li>Strong data protection</li>
                          <li>Regulatory compliance</li>
                          <li>Granular access control</li>
                          <li>Enterprise-level cloud trust</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-11">
                    <div className='bec-acc'>
                      <h3>Workflows and Automation</h3>
                      <span>Approval workflows, Power Automate integration, AI assistance</span>
                    </div>
                  </div>

                  <div
                    id="bc-content-11"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist11"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>Business Central Workflows and Automation Features:</h4>
                        <p>Approval workflows, <a href="/products/microsoft-power-automate/">Power Automate integration</a>, and out-of-the-box Microsoft Copilot (AI) assistance for steps and mapping.</p>
                        <h4>Business Central Workflows and Automation Overview:</h4>
                        <p>Business Central Workflows and Automation streamline approvals and reduce manual tasks.</p>
                        <p>Business Central supports approvals and background processing across finance, purchasing, and sales. Power Automate connects workflows across teams, while Microsoft Copilot in Business Central assists with mappings and repetitive steps, which shortens cycle times and reduces manual entry. Processes keep moving while teams focus attention on higher value work.</p>
                        <h4>Business Central Workflows and Automation Benefits:</h4>
                        <ul>
                          <li>Faster approvals flow</li>
                          <li>Reduced manual errors</li>
                          <li>Smarter workflows</li>
                          <li>Smarter workflows</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


        </div>
      </section>



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
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/ff-finance-side.png" width={535} height={455} alt="New Solution" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="New Solution" className="flot-9" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Dynamics 365 Finance Implementation: <br />Why Your Business Needs It</h2>
                </div>
                <p>If you face these challenges, your financial health is already at risk.</p>
                <p>You need a single finance system that gives accuracy, automation, and intelligence. This is where Dynamics 365 Finance helps you gain control.</p>
                <p>Companies using Dynamics 365 Finance have observed faster book closure, improved cash flow, and better profit margins.</p>
                <p>Whether your organisation is growing across cities or expanding worldwide, Dynamics 365 Finance gives the strength and clarity you need.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule Your Finance Demo Now  &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>Inside Dynamics 365 Finance: What Powers Your Business</h2>
                <p>Run finance with confidence using Dynamics 365 Finance. Replace manual entries with automation, remove delays with AI powered insights, and eliminate compliance risks with real-time control. Here’s how it transforms finance for your enterprise:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting</h3>
                      <p>Handling accounts manually? Every delay and mistake hits margins. With Dynamics 365 Finance, you get:</p>
                      <ul>
                        <li>Automated journal entries and reconciliations to close faster.</li>
                        <li>AI powered forecasts to stay ahead of cash flow risks.</li>
                        <li>Built in compliance support to stay audit ready always.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-01.png" width={574} height={369} alt="Card 1" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Cash & Collections</h3>
                      <p>Liquidity gaps slow growth and create stress. Dynamics 365 for Finance helps you:</p>
                      <ul>
                        <li>Monitor cash flow with predictive analytics.</li>
                        <li>Automate collections with rules and AI based reminders.</li>
                        <li>Reduce write offs and improve payment timelines.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-02.png" width={574} height={360} alt="Card 2" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smart Budgeting & Forecasting</h3>
                      <p>Guesswork in planning costs both money and trust. With Dynamics 365 Finance, you:</p>
                      <ul>
                        <li>Create intelligent budget proposals from historical data.</li>
                        <li>Run rolling forecasts that adjust as numbers change.</li>
                        <li>Save time and redirect effort toward strategy.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-03.png" width={574} height={360} alt="Card 3" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Global Scale & Compliance</h3>
                      <p>Growth across regions adds complex financial rules. Dynamics 365 Finance ensures you:</p>
                      <ul>
                        <li>Manage multi entity and multi-currency in one place.</li>
                        <li>Stay compliant with local tax and reporting requirements.</li>
                        <li>Handle electronic invoicing and regulatory changes smoothly.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-04.png" width={584} height={369} alt="Card 4" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations: Finance Connected</h3>
                      <p>Disconnected systems weaken decision making. Dynamics 365 Finance integrates with:</p>
                      <ul>
                        <li>Microsoft 365 for productivity and collaboration.</li>
                        <li>Power BI for advanced financial dashboards.</li>
                        <li>Partner apps to expand capabilities without disruption.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/ff-finance-sid-05.png" width={571} height={369} alt="Card 5" />
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

export default BusinessCentral;
