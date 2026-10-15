import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/bclicance.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';
import PageSeo from "../../../components/PageSeo";



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
      <PageSeo
        type="Service"
        title="Dynamics 365 Business Central Pricing UK (2026)"
        description="Microsoft Dynamics 365 Business Central UK pricing 2026: full GBP breakdown of Essentials and Premium licences, Team Member costs, setup, support and total cost guide."
        image="https://www.dynamicssquare.co.uk/img/Dynamics-365-Finance-Banner.png"
        faqs={faqData.slice(0, 5)}
      />
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
                <p>Core business management across finance, sales, and operations with Microsoft Copilot included.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff4'>
                <h3>Premium
                </h3>
                <h4>£84.60<span>/user/month</span></h4>
                <p>Includes everything in Essentials, plus advanced capabilities for service management and manufacturing.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff4'>
                <h3>Team Members
                </h3>
                <h4>£6.20<span>/user/month</span></h4>
                <p>Offers limited access for read, approvals, and light data updates.</p>
                <p className="disclm">*Excluding VAT</p>
              </div>
            </div>
          </div>
          <div className="trial-banner">
            <div className="row align-items-center g-0">

              <div className="col-lg-4">
                <div className="trial-title">
                  Dynamics 365 Business Central <strong>Free Trial</strong>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="trial-content">
                  Dynamics Square offers a 30-day trial for <a style={{ color: '#50080e' }} href="/products/dynamics-365-business-central/">Business Central ERP</a>  where you will get the full access to explore finance,
                  sales, service, and operations in one system. We encourage you to explore the solution before you commit.
                </div>
              </div>

              <div className="col-lg-1 text-center">
                <a
                  href="/contact-us/"
                  className="trial-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 2.5a.5.5 0 0 0-.5-.5H8a.5.5 0 0 0 0 1h4.293L2.146 13.146a.5.5 0 1 0 .708.708L13 3.707V8a.5.5 0 0 0 1 0V2.5z"
                    />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container py-5">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>What All Costs Add Up to Dynamics 365 Business Central Pricing?</h2>
                <p>Dynamics 365 Business Central license price is only one part of the total cost. Your actual investment depends on three key areas:</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="cost-card h-100">
                <Image src="/img/price-pic-03.png" alt="" className="card-icon" width={48} height={48} aria-hidden="true" />
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
                <Image src="/img/price-pic-04.png" alt="" className="card-icon" width={48} height={48} aria-hidden="true" />
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
                <Image src="/img/price-pic-05.png" alt="" className="card-icon" width={48} height={48} aria-hidden="true" />

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
      </section>

      <section className="pricing-estimator-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className='row'>
                <div className='col-lg-9'>
                  <div className='solution-new-banner-sub-head'>
                    <h2>How to Estimate Your Microsoft Business Central Pricing?</h2>
                    <p>You can use a simple estimation approach to understand your expected cost for Microsoft Dynamics 365 Business Central pricing.</p>
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
                <p>Besides, you can also use our  Dynamics 365 ERP Implementation Price Calculator to get an estimated cost of ERP implementation.</p>
                <a href="/erp-implementation-cost-calculator/" className="calculator-btn">
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
                <h3>Want an Exact Dynamics 365 Business Central Pricing for Your Business?</h3>
                <p>Every business has different requirements, workflows, and growth plans. A tailored estimate for Microsoft Business Central pricing gives you a far more accurate picture than standard pricing.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get a Tailored Pricing Estimate &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="" aria-hidden="true"  loading="lazy" decoding="async" />
      </section>

      <section className="license-section py-5">
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>How Business Central Pricing Works: Licensing Model</h2>
                <p>Microsoft Dynamics 365 Business Central pricing follows a subscription-based pricing model, where businesses pay per user, per month, billed annually.</p>
                <p>However, pricing is not just about choosing a plan, it is structured around how different users interact with the system. Let’s understand different licensing models right from the official Dynamics 365 Business Central Licensing guide.</p>
              </div>
            </div>
          </div>
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
                    Your base licence determines the functionality available to each user,
                    which is why choosing the right base licence
                    is critical.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end text-center">
                <a href="#exampleModal"
                    data-bs-toggle="modal" className="insight-btn">
                  Get Your Licensing Right
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section3' className='solution-new-banner-three' style={{ paddingBottom: '40px', backgroundColor: 'rgb(241 240 244)' }}>
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
          <div className="row mar-top-7 justify-content-center" style={{ backgroundColor: 'rgb(241 240 244)', padding: '30px 0px' }}>
            <div className="col-lg-12">
              <div className="accordion accordion-flush acc-bc-ho" id="bclist1">
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-1">
                    <div className='bec-acc'>
                      <div className='d-flex-99'><Image src="/img/price-pic-06.png" alt="" className="card-iconss" width={48} height={48} aria-hidden="true" /><h3>User Licenses</h3></div>
                      <span>User licences are assigned to named individuals and allow access from any device. These are further classified into two subcategories: Full-Access User Licenses and Additional User Licenses.</span></div>
                  </div>

                  <div
                    id="bc-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist1"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <h4>1.1 Full-Access User Licences</h4>
                        <p><b>Essentials Licence: £61.50/user/month</b></p>
                        <p>It is meant for businesses that need core operational capabilities:</p>
                        <ul>
                          <li>Financial management (general ledger, budgets, multi-currency, etc.)</li>
                          <li>Supply chain management (inventory, purchasing, order management, etc.)</li>
                          <li>Customer relationship management (contacts, opportunities, etc.)</li>
                          <li>Project management and time tracking</li>
                          <li>Warehouse and inventory management</li>
                          <li>Human resources capabilities</li>
                          <li>AI-supported forecasting and Microsoft Copilot</li>
                        </ul>
                        <h4>Premium Licence: £84.60/user/month</h4>
                        <p><b>It is everything that is there in Essentials, plus:</b></p>
                        <ul>
                          <li>Service order management (planning, dispatching, contracts, and more) </li>
                          <li>Manufacturing capabilities (production orders, bills of materials, capacity planning, and more) </li>
                        </ul>
                        <p>A premium license is best suited for businesses with manufacturing or service operations.</p>
                        <h4>1.2 Additional User Licences</h4>
                        <p><b>Team Members Licence: £6.20/user/month</b></p>
                        <p>Team Members Licence: £6.20/user/month</p>
                        <ul>
                          <li>Read access across Business Central data </li>
                          <li>Limited write capabilities (update records, approve workflows) </li>
                          <li>Create or edit quotes, update timesheets </li>
                          <li>Approve or reject tasks </li>
                        </ul>
                        <p><b>Who uses Business Central Team Member License:</b></p>
                        <ul>
                          <li>Managers approving workflows </li>
                          <li>Employees accessing reports </li>
                          <li>Teams needing light interaction with the system </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-2">
                    <div className='bec-acc'>
                      <div className='d-flex-99'><Image src="/img/price-pic-07.png" alt="" className="card-iconss" width={48} height={48} aria-hidden="true" /><h3>Device Licences</h3></div>
                      <span>Device licences are assigned to a shared device, not an individual user.</span></div>
                  </div>

                  <div
                    id="bc-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist2"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <ul>
                          <li>Multiple users can access Business Central through a single licensed device </li>
                          <li>It is suitable for roles such as warehouse staff or shop floor teams </li>
                          <li>It supports shared or individual logins without separate user licences </li>
                        </ul>
                        <p>It helps reduce licensing cost where multiple users share the same workstation. It shows the flexibility offered by Microsoft to keep licensing cost minimum for shared workspaces. Business Central Device license price starts at <b>£34.60</b> per device/month.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <div className="accordion-button bec-acc-bott collapsed" data-bs-toggle="collapse"
                    data-bs-target="#bc-content-3">
                    <div className='bec-acc'>
                      <div className='d-flex-99'><Image src="/img/price-pic-08.png" alt="" className="card-iconss" width={48} height={48} aria-hidden="true" /><h3>Tenant-Level Licensing</h3></div>
                      <span>A tenant licence in Microsoft Dynamics 365 Business Central is not assigned to a person or a device. Instead, it applies to your entire organisation (your system environment).</span></div>
                  </div>

                  <div
                    id="bc-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#bclist3"
                  >
                    <div className="accordion-body">
                      <div></div>
                      <div>
                        <p><b>So, in simple terms, you can think of your Business Central setup like a building:</b></p>
                        <ul>
                          <li>User licenses are like people working inside</li>
                          <li>Device licenses are like shared machines in the building, and</li>
                          <li>Tenant licences are like the building itself and its capacity (storage capacity)</li>
                        </ul>
                        <h4>Storage Capacity (How Much Data You Can Store)</h4>
                        <ul>
                          <li>80 GB included by default per tenant </li>
                          <li>Additional storage:
                            <ul>
                              <li>+3 GB per Essentials user </li>
                              <li>+5 GB per Premium user </li>
                              <li>+1.5 GB per device licence </li>
                            </ul>
                          </li>
                        </ul>
                        <h4>Environments (Production and Sandbox Systems)</h4>
                        <p><b>Each subscription includes:</b></p>
                        <ul>
                          <li>1 Production environment </li>
                          <li>3 Sandbox (non-production) environments </li>
                        </ul>
                        <p>Additional environments and storage can be purchased as needed.</p>
                        <h4>Additional Entitlements</h4>
                        <ul>
                          <li>Up to 3 External Accountant licences at no extra cost </li>
                          <li>Microsoft Teams read-only access for licensed Microsoft 365 users </li>
                          <li>Dual-use rights (cloud + on-premises deployment flexibility) </li>
                          <li>Access to Copilot and AI agents, with additional Copilot credits available separately</li>
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
      <section className="license-comparison-section py-5">
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>A Quick Comparison of Business Central Plans</h2>
                <p>Choosing the right Dynamics 365 Business Central pricing plan depends on your business model, operations, and growth plans.</p>
              </div>
            </div>
          </div>
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





      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Increases the Cost of Business Central?</h2>
                </div>
                <p>Business Central price increases due to different cost drivers and knowing them helps you make informed decisions.</p>
                <p style={{ color: '#443c68' }}><b>Factors That Lead to Business Central Price Increase:</b></p>
                <ul className='ss-tab-01'>
                  <li><Image src="/img/price-pic-14.png" width={24} height={24} alt="" aria-hidden="true" /> <span>Heavy customisation beyond standard features</span></li>
                  <li><Image src="/img/price-pic-15.png" width={24} height={24} alt="" aria-hidden="true" /> <span>Complex or unstructured legacy data </span></li>
                  <li><Image src="/img/price-pic-16.png" width={24} height={24} alt="" aria-hidden="true" /> <span>Multiple entities or international operations </span></li>
                  <li><Image src="/img/price-pic-17.png" width={24} height={24} alt="" aria-hidden="true" /> <span>Extensive third-party integrations </span></li>
                  <li><Image src="/img/price-pic-21.png" width={24} height={24} alt="" aria-hidden="true" /> <span>Compressed implementation timelines </span></li>
                </ul>
                {/* <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule Your Finance Demo Now  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div> */}
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/price-pic-09.png" width={580} height={456} alt="" aria-hidden="true" />
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="solution-new-banner-twoe">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/price-pic-10.png" width={580} height={456} alt="" aria-hidden="true" />
                </div>

              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Keeps Business Central Costs Lower?</h2>
                </div>
                <p>Microsoft Dynamics 365 Business Central pricing is highly flexible for its cost optimisation with the right approach.</p>
                <p style={{ color: '#443c68' }}><b>Factors That Reduce Cost:</b></p>
                <ul className='ss-tab-01'>
                  <li><i className="bi bi-check2"></i> <span>Using standard Business Central functionality</span></li>
                  <li><i className="bi bi-check2"></i> <span>Cleaning and preparing data before migration </span></li>
                  <li><i className="bi bi-check2"></i> <span>Phased implementation approach</span></li>
                  <li><i className="bi bi-check2"></i> <span>Choosing the right mix of licences</span></li>
                  <li><i className="bi bi-check2"></i> <span>Working with an experienced implementation partner</span></li>
                </ul>
                {/* <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule Your Finance Demo Now  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-three' style={{ backgroundColor: '#f1f0f4' }}>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Microsoft Integrations and Their Impact on Pricing</h2>
                <p>One of the biggest advantages of Microsoft Dynamics 365 Business Central is how seamlessly it connects with the broader Microsoft ecosystem. These integrations can improve productivity, but they also influence your overall setup and cost.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner-bg-1'>
                    <div className='mycard__inner-left'>
                      <h3>Built-in Microsoft Integrations</h3>
                      <p>Business Central integrates natively with:</p>
                      <ul>
                        <li><b>Microsoft Outlook</b> for customer interactions, quotes, and approvals. </li>
                        <li><b>Microsoft Excel</b> for real-time data editing and analysis. </li>
                        <li><b>Microsoft Word</b> for invoices, reports, and business documents. </li>
                        <li><b>Microsoft Teams</b> for accessing BC data and collaborating efficiently.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/price-pic-12.png" width={580} height={456} alt="Built-in Microsoft Integrations" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner  mycard__inner-bg-1'>
                    <div className='mycard__inner-left'>
                      <h3>Power Platform Integration</h3>
                      <p>Business Central also connects with <a href="/products/microsoft-power-platform/"> Microsoft Power Platform</a>, which comprises:</p>
                      <ul>
                        <li><b>Power BI</b> for reporting and analytics </li>
                        <li><b>Power Automate</b> for workflow automation </li>
                        <li><b>Power Apps</b> for custom applications</li>
                        <li><b>Copilot Studio</b> to build enterprise-grade chatbots & custom copilots.</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/price-pic-11.png" width={580} height={456} alt="Power Platform Integration" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner  mycard__inner-bg-1'>
                    <div className='mycard__inner-left'>
                      <h3>Third-Party Integrations and Add-Ons</h3>
                      <p>Businesses often extend functionality using ISV solutions and apps.</p>
                      <ul>
                        <li><b>Shopify</b> for e-commerce integration </li>
                        <li><b>Continia</b> Document Capture for invoices</li>
                        <li><b>Continia</b> Expense Management for managing expenses</li>
                        <li><b>Tasklet Mobile</b> WMS for warehouse operations</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/price-pic-13.png" width={580} height={456} alt="Third-Party Integrations and Add-Ons" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-new-banner-twoe">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Why Your Microsoft Business Central Partner Matters</h2>
                </div>
                <p>Choosing the right Microsoft partner has a direct impact on both integration and implementation costs and long-term success.</p>
                <div className="comparison-boxes">

                  <div className="compare-card average-card">
                    <h4 style={{ color: '#61518c' }}>Average Partner</h4>

                    <ul>
                      <li>• Lower Initial Cost</li>
                      <li>• Excess Licensing</li>
                      <li>• More Customisation</li>
                      <li>• Faster Deployment</li>
                      <li>• System Inefficiencies</li>
                      <li>• Costly Rework</li>
                    </ul>
                  </div>

                  <div className="vs-image">
                    <img src="/img/price-pic-19.png" alt="VS"  loading="lazy" decoding="async" />
                  </div>

                  <div className="compare-card dynamics-card">
                    <h4>Dynamics Square</h4>

                    <ul>
                      <li>• Strategic Planning</li>
                      <li>• Optimised Licensing</li>
                      <li>• Clean Migration</li>
                      <li>• Process Alignment</li>
                      <li>• Scalable Growth</li>
                      <li>• Long-term Value</li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
            <div className='col-lg-1 align-self-center'></div>
            <div className='col-lg-6 align-self-end'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/price-pic-20.png" width={697} height={401} alt="" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bc-investment-section py-5">
        <div className="container">
          <div className="row align-items-center g-5">

            <div className="col-lg-5">
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Plan Your Business Central Investment Properly</h2>
                </div>
                <p>Business Central is a long-term business investment. Planning your implementation carefully ensures:</p>
              </div>

              <ul className="bc-investment-benefits">
                <li>Better cost control</li>
                <li>Faster user adoption</li>
                <li>Higher return on investment</li>
                <li>Scalability as your business grows</li>
              </ul>

              <p className="bc-investment-note">
                Don't delay it further. Take the call today. The right
                decisions early on prevent unnecessary costs later.
              </p>

            </div>

            <div className="col-lg-7">

              <div className="bc-trial-card">

                <h3 className="bc-trial-title">
                  Try Business Central Before You Commit
                </h3>

                <p className="bc-trial-description">
                  Validate your decision with zero upfront cost as
                  Microsoft offers a free 30-day trial of
                  Dynamics 365 Business Central.
                </p>

                <h5 className="bc-trial-subtitle">
                  This allows you to:
                </h5>

                <ul className="bc-trial-list">
                  <li>
                    Explore core features across finance, sales,
                    service, and operations
                  </li>

                  <li>
                    Understand how the system fits your
                    business processes
                  </li>

                  <li>
                    Evaluate usability before making a
                    financial commitment
                  </li>
                </ul>

                <a href="/contact-us/" className="bc-trial-button">
                  Claim Your Free Trial
                  <span>→</span>
                </a>

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
    </>
  );
};

export default BusinessCentral;
