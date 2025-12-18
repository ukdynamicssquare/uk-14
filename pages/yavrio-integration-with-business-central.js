import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import useCardScrollEffect from "/components/useCardScrollEffect";

const Continia = () => {

  useCardScrollEffect()

  return (
    <>
      <Head>
        <title>Yavrio Integration with Business Central | Dynamics Square UK</title>

        <meta
          name="description"
          content="Simplify banking with Yavrio integration with Dynamics 365 Business Central — automate reconciliation, enhance accuracy, and save hours of manual work."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/yavrio-integration-with-business-central/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Yavrio Integration with Business Central | Dynamics Square UK " />
        <meta property="og:description" content="Simplify banking with Yavrio integration with Dynamics 365 Business Central — automate reconciliation, enhance accuracy, and save hours of manual work." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/yavrio-integration-with-business-central/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/yavrio-side.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Yavrio Integration with Business Central | Dynamics Square UK" />
        <meta name="twitter:description" content="Simplify banking with Yavrio integration with Dynamics 365 Business Central — automate reconciliation, enhance accuracy, and save hours of manual work." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/yavrio-side.png" />
      </Head>
      <div className='solution-new-banner-one solution-new-banner-one-colo'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Yavrio Integration with Business Central</h1>
                <span className='large-heading'>Precision Banking Now Inside Your ERP</span>
                <p>Yavrio integration with Business Central ensures your finance team does not end up spending hours on manual banking tasks such as expense reconciliation and matching records across multiple systems. Transform manual finance into real-time, automated, and fully connected operations.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Yavrio Integration Demo Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              <div className='m-b-image-banner m-b-image-banner-nn'>
                <Image src="/img/yavrio-banner.png" alt='bc-support-banner' width={944} height={322} />
              </div>
              <div className='m-b-image-banner-bott'>
                <Image src="/img/cont-shape.png" alt='cont-shape' width={1898} height={470} />
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='bg-003s pd-con-60'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6 align">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>The Consequences of Disconnected Banking</h2>
                <p>Be it a missing transaction, delayed payment, or mismatched reconciliation, it is rarely your finance team at fault. The real challenge lies in disconnected bank data and manual entry processes.</p>
                <p><b>Here is what your business experiences when banking and ERP operate in silos:</b></p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Bank transactions appear in Business Central days after activity</span></li>
                  <li><i className="bi bi-check"></i><span>Teams download and import CSV files repeatedly across accounts</span></li>
                  <li><i className="bi bi-check"></i><span>Approvals stall because payment data sits outside ERP</span></li>
                  <li><i className="bi bi-check"></i><span>Month-end reconciliations stretch into weeks</span></li>
                  <li><i className="bi bi-check"></i><span>Cash flow reports lack accuracy until it is too late</span></li>

                </ul>
                <p>These issues compound quickly. By the time leadership sees the impact, finance teams have already spent countless hours firefighting instead of focusing on strategy. This is where Yavrio integration with Business Central changes the story.</p>
                {/* <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Know How It Works &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link> */}
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/yavrio-side.png" alt="con-side-01" width={485} height={450} className='im-two' />
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='bg-003-021 pd-con-61'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What is Yavrio Integration with Business Central?</h2>
                <p>Yavrio Business Central Integration connects <a href="/products/dynamics-365-business-central/">Microsoft Dynamics 365 Business Central</a> with secure, automated banking workflows. Acting as a Business Central Yavrio Connector, it synchronises account data, enables direct bank feeds, automates reconciliations, and streamlines payment handling.</p>
                <p>This Yavrio ERP Integration removes barriers between your bank and ERP so you can run finance operations on autopilot while keeping accuracy, compliance, and transparency at the centre.</p>
                <p><b>With Yavrio Bank integration, you get:</b></p>
                <br />
              </div>
            </div>
          </div>
          <div className="row g-3 ">
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <p>Secure, live bank feeds directly connected to Business Central ERP.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <p>Automated reconciliation ensures accurate matches across accounts and ledgers.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <p>API-driven payments processed seamlessly within Business Central workflows.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6  d-flex">
              <div className="card-700 card-700-img">
                <p>Real-time financial visibility with compliance and audit-ready reporting.</p>
              </div>
            </div>

          </div>
          <div className="row min-m-t-20">
            <div className="col-lg-6 align-self-center">
              <div className="card-700-bot">
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Automate with Yavrio &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-banner-three pd-con-63'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Yavrio Capabilities: Key Features</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>Banking Feed Automation</h3>
                      <p>Connect Business Central directly with Yavrio for live bank feeds. Gain up-to-date transaction data across accounts without manual imports.</p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>Real-time synchronisation of bank data into Business Central</span></li>
                        <li><i class="bi bi-check"></i> <span>Multi-bank and multi-currency support</span></li>
                        <li><i class="bi bi-check"></i> <span>Fileless, automated data refresh for accurate cash visibility</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/yavrio-side-01.png" width={580} height={456} alt="con-side-02" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>Reconciliation Automation</h3>
                      <p>Eliminate manual reconciliation with smart matching tools.</p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>AI-driven transaction matching for faster month-end close</span></li>
                        <li><i class="bi bi-check"></i> <span>Error reduction through automated checks</span></li>
                        <li><i class="bi bi-check"></i> <span>Transparent, audit-ready reconciliation inside Business Central</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/yavrio-side-02.png" width={580} height={456} alt="con-side-03" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left mycard__inner-left-ul'>
                      <h3>Payment Processing Integration</h3>
                      <p>Move payments securely and directly from Business Central using Yavrio connectivity.</p>
                      <ul>
                        <li><i class="bi bi-check"></i> <span>API-driven payment initiation with connected banks</span></li>
                        <li><i class="bi bi-check"></i> <span>Approval workflows managed inside Business Central</span></li>
                        <li><i class="bi bi-check"></i> <span>Payment status updates returned directly to ERP</span></li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/yavrio-side-03.png" width={580} height={456} alt="con-side-04" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="nnn-bg pd-con-64">

        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>The Stack of Continia Tools</h2>
                <p>Manual processes are eating hours, missing deadlines, and draining your finance team. Continia for Dynamics 365 Business Central fixes that. These are not tools but time-savers that sit natively inside your ERP and quietly get the hard work done.</p>
                <p><b>Here’s what makes Continia Business Central a no-brainer for modern finance operations:</b></p>
              </div>
            </div>
          </div>
          <div className="row solution-new-tab-content d-lg-none">
            <div className="col-lg-12">
              <div className="finace-acc">
                <div className="accordion" id="accnew">
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin1"
                        aria-expanded="false"
                        aria-controls="fin1"
                      >
                        <span>Process Automation with Precision</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>10+ hours saved weekly for AP teams</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Bulk payment processing from a single journal, all bank-compliant</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Scheduled email distribution of documents with zero manual touchpoints</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin2"
                        aria-expanded="false"
                        aria-controls="fin2"
                      >
                        <span>Accuracy Where It Matters Most</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>One typo can turn into a fraud risk. One missed approval can derail a project. Continia closes the margin for error, not with more control, but with smarter systems.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Up to 95% match rate on payment and bank statement reconciliation
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Auto-validation of IBAN/SWIFT details to prevent failed or misdirected payments</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Missing credit card receipts flagged automatically for employees and managers</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in audit trails across documents, approvals, and emissions reporting</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin3"
                        aria-expanded="false"
                        aria-controls="fin3"
                      >
                        <span>Built-in Security and Compliance</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Continia doesn’t just automate but protects too. Fraud prevention, approval flows, bank verification, and secure archiving come standard, not optional.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Payment lines must pass through secure approval workflows before bank export</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Any changes to bank info are auto-flagged and blocked until verified</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Secure, audit-proof document and receipt archiving certified for compliance</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Support for Peppol eDelivery Network and CSRD carbon tracking ensures you're always onside with regulations</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin4"
                        aria-expanded="false"
                        aria-controls="fin4"
                      >
                        <span>Real-Time Visibility and Control</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>When everything flows through Business Central, you’re not looking for information. It’s already in front of you: accurate, timely, and most importantly, decision-ready.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Real-time status updates on payments and expenses across departments</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in carbon tracking using your existing financial data</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Instant overview of employee spending, mileage, and contract costs</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Full visibility into pending approvals via mobile or web portal</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin5"
                        aria-expanded="false"
                        aria-controls="fin5"
                      >
                        <span>ROI You Can Measure in Days</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Once you integrate Continia, teams start seeing value immediately. They experience less manual work, fewer errors, and faster outcomes. Results start the day automation goes live.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>2/3 reduction in manual finance admin costs with Continia Document Capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Automated matching and reconciliation mean month-end closes faster</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Fewer delays in expense reimbursement improves employee satisfaction</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Summarised payment runs lower transaction fees and saves bank charges</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin6"
                        aria-expanded="false"
                        aria-controls="fin6"
                      >
                        <span>Sustainability (Without the Consultant Fee)</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <div className="inner-con-div">
                          <p>Need to track carbon emissions? Don’t hire another specialist. Continia Sustainability calculates your footprint using the data your ERP already holds.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Automated emission calculations from travel, energy, invoices, and more</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in factor sets from global data sources, no need to search for conversion values</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Transparent audit trail for every calculation and correction</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>                                                                                        Integrated dashboards and reporting tools for internal or regulatory use</p>
                              </div>
                            </div>
                          </div>


                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row tabs-none">
            <div className="cpl-lg-12">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3 solution-new-tab solution-new-tab-cant"
                  id="s-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <button
                    className="nav-link active"
                    id="s-pills-home-1-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-1"
                    aria-selected="true"
                  >
                    <h3><img src="/img/autostop-01.png" alt="autostop-01" width={24} height={24} />Process Automation with Precision</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-2-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-2"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-02.png" alt="autostop-02" width={24} height={24} />Accuracy Where It Matters Most</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-hpme-3-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-hpme-3"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-hpme-3"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-03.png" alt="autostop-03" width={24} height={24} />Built-in Security and Compliance</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-4-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-4"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-4"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-04.png" alt="autostop-04" width={24} height={24} />Real-Time Visibility and Control</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-5-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-5"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-5"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-05.png" alt="autostop-05" width={24} height={24} />ROI You Can Measure in Days</h3>
                  </button>
                  <button
                    className="nav-link"
                    id="s-pills-home-6-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#s-pills-home-6"
                    type="button"
                    role="tab"
                    aria-controls="s-pills-home-6"
                    aria-selected="false"
                  >
                    <h3><img src="/img/autostop-06.png" alt="autostop-06" width={24} height={24} />Sustainability</h3>
                  </button>

                </div>
                <div
                  className="tab-content solution-new-tab-content solution-new-tab-cant-cont"
                  id="s-pills-tabContent-"
                >
                  <div
                    className="tab-pane fade show active"
                    id="s-pills-home-1"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-1-tab"
                  >
                    <div className="inner-con-div">
                          <p>Continia automates finance processes that used to require full-time effort. From invoice scanning to payment processing, every module works inside Business Central.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>80% faster invoice processing time with OCR and AI-driven document capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>10+ hours saved weekly for AP teams</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Bulk payment processing from a single journal, all bank-compliant</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Scheduled email distribution of documents with zero manual touchpoints</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-2"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-2-tab"
                  >
                    <div className="inner-con-div">
                          <p>One typo can turn into a fraud risk. One missed approval can derail a project. Continia closes the margin for error, not with more control, but with smarter systems.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Up to 95% match rate on payment and bank statement reconciliation
                                </p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Auto-validation of IBAN/SWIFT details to prevent failed or misdirected payments</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Missing credit card receipts flagged automatically for employees and managers</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in audit trails across documents, approvals, and emissions reporting</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-hpme-3"
                    role="tabpanel"
                    aria-labelledby="s-pills-hpme-3-tab"
                  >
                    <div className="inner-con-div">
                          <p>Continia doesn’t just automate but protects too. Fraud prevention, approval flows, bank verification, and secure archiving come standard, not optional.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Payment lines must pass through secure approval workflows before bank export</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Any changes to bank info are auto-flagged and blocked until verified</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Secure, audit-proof document and receipt archiving certified for compliance</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Support for Peppol eDelivery Network and CSRD carbon tracking ensures you're always onside with regulations</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-4"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-4-tab"
                  >
                    <div className="inner-con-div">
                          <p>When everything flows through Business Central, you’re not looking for information. It’s already in front of you: accurate, timely, and most importantly, decision-ready.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Real-time status updates on payments and expenses across departments</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in carbon tracking using your existing financial data</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Instant overview of employee spending, mileage, and contract costs</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Full visibility into pending approvals via mobile or web portal</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-5"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-5-tab"
                  >
                    <div className="inner-con-div">
                          <p>Once you integrate Continia, teams start seeing value immediately. They experience less manual work, fewer errors, and faster outcomes. Results start the day automation goes live.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>2/3 reduction in manual finance admin costs with Continia Document Capture</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Automated matching and reconciliation mean month-end closes faster</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Fewer delays in expense reimbursement improves employee satisfaction</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Summarised payment runs lower transaction fees and saves bank charges</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="s-pills-home-6"
                    role="tabpanel"
                    aria-labelledby="s-pills-home-6-tab"
                  >
                    <div className="inner-con-div">
                          <p>Need to track carbon emissions? Don’t hire another specialist. Continia Sustainability calculates your footprint using the data your ERP already holds.</p>
                          <p><b>Key Aspects</b></p>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Automated emission calculations from travel, energy, invoices, and more</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Built-in factor sets from global data sources, no need to search for conversion values</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Transparent audit trail for every calculation and correction</p>
                              </div>
                            </div>
                            <div className="col-lg-6 d-flex">
                              <div className="inner-con-div-card">
                                <p>Integrated dashboards and reporting tools for internal or regulatory use</p>
                              </div>
                            </div>
                          </div>


                        </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className='solution-new-cta pd-con-65'>
        <div className='asd asd1'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='solution-new-cta-001'>
                  <h3>Ready to Move Fast? Then Move Once With Yavrio!</h3>
                  <p>Yavrio Integration with Business Central strengthens your ERP. Banking, payments, and reconciliation stay inside Microsoft’s trusted ecosystem, keeping you secure and fully in control.</p>
                  <div>
                    <Link href="/contact-us/" className="btn-get-started scrollto">
                      <span>Unify with Yavrio Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className='s-options-end'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-7 order-1 align-self-center'>
              <div className='row'>
                <div className="col-lg-12">
                  <div className="solution-new-banner-sub-head">
                    <h2>Benefits of Yavrio and Dynamics 365 Business Central Integration</h2>
                    <p><b>Process Automation with Precision</b></p>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Yavrio Business Central automation</h3>
                      <p>cuts repetitive tasks and delivers end-to-end control.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Accuracy Where It Matters</h3>
                      <p>Direct synchronisation of bank data ensures reliable reconciliation, payments, and reporting.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Security and Compliance by Design</h3>
                      <p>Yavrio ERP Integration uses banking-grade standards for secure transactions, while Business Central ensures compliance and audit readiness.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Real-Time Visibility</h3>
                      <p>With instant bank feeds, dashboards reflect actual balances and transactions across connected accounts.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Return on Investment</h3>
                      <p>Manual finance errors cost money. Automating with Yavrio Dynamics 365 Business Central Integration delivers faster closes, fewer errors, and stronger compliance. You get the efficiency gains that pay back quickly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 order-2 align-self-center'>
              <div className='img-backs-sid'>
                <Image src="/img/yavrio-side-04.png" alt="copil-side" width={627} height={517} className='im-two' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
       <div className='container'>
         <div className='row'>
           <div className='col-lg-8'>
             <div className='solution-new-cta-001'>
               <h3>Run Banking and ERP as ONE with Yavrio!</h3>
               <p>When every transaction counts, you need more than a connector. You need a system that transforms the way finance operates. The Business Central Yavrio Connector delivers automation that scales with your growth.</p>
               <div>
                 <Link
                   href="#exampleModal"
                   data-bs-toggle="modal"
                   className="btn-get-started scrollto">
                   <span>Request Your Free Demo  &nbsp;<i className="bi bi-arrow-right"></i></span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </div>
       <img src="/img/n-015.png" alt="n-015" />
     </section>
      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/yavrio-side-05.png" alt="con-side-06" width={580} height={456} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Business Central Yavrio Connector: Precision in Finance</h2>
                <p>Finance leaders want accuracy, speed, and control. Yavrio integration services for Business Central by Dynamics Square deliver that. Here’s what to expect after the integration: </p>
                <ul className="bx-pi-cc">
                  <li><div className="im-60-b"><img src="/img/autostop-07.png" alt="autostop-02" width={24} height={24} /></div><span>Accuracy in every transaction through direct bank data integration</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-08.png" alt="autostop-02" width={24} height={24} /></div><span>Speed from automated reconciliation and instant payment processing</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-09.png" alt="autostop-02" width={24} height={24} /></div><span>Control with secure workflows inside Microsoft’s trusted ERP ecosystem</span></li>
                  <li><div className="im-60-b"><img src="/img/autostop-10.png" alt="autostop-02" width={24} height={24} /></div><span>Transparency that strengthens compliance and builds business reputation</span></li>
                </ul>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Empower Your Business With Yavrio Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className='bg-003s pd-con-67'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Leverage the Potential of the Hidden Genius: Continia OCR Business Central</h2>
                <p>This is the power most businesses underestimate.</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Scans scanned PDFs and images</span></li>
                  <li><i className="bi bi-check"></i><span>Reads handwriting (where possible)</span></li>
                  <li><i className="bi bi-check"></i><span>Extracts header, line item, tax data</span></li>
                  <li><i className="bi bi-check"></i><span>Routes to approval</span></li>
                  <li><i className="bi bi-check"></i><span>Learns over time</span></li>

                </ul>
                <p>So yes, a document your vendor emailed without a subject line, half-cropped, sideways? Continia OCR Business Central processes it without asking you to rotate or rename it.</p>
                <Link href="#exampleModal"><a
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>Experience OCR Now &nbsp;<i className="bi bi-arrow-right"></i></span></a>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/con-side-07.png" alt="con-side-07" width={400} height={450} className='im-two' />
              </div>
            </div>


          </div>
        </div>
      </section> */}
      <section className="solution-faq faq pd-con-68">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="solution-new-banner-sub-head">
                <h2>Frequently asked questions</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>

            </div>
          </div>
          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >How does Yavrio Business Central Integration work?</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>It connects Business Central directly to Yavrio through secure APIs. This ensures automated data flows between your <a href="/blog/15-best-erp-systems-for-small-businesses/">ERP</a> and banks.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >What are the benefits of Yavrio and Business Central integration?</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>You gain automated bank feeds, faster reconciliations, simplified payment handling, and real-time financial visibility — all within Dynamics 365 Business Central.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Can Yavrio integration support multi-currency and multiple banks?</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes. The integration supports a wide range of banks, accounts, and currencies for global operations.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >Is Yavrio ERP Integration secure?</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Yes. It uses banking-grade encryption and secure data protocols combined with Business Central compliance and audit tools.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >Why choose Dynamics Square for Yavrio integration consulting for Business Central?</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>Dynamics Square is a certified Microsoft partner with expertise in <a href="/dynamics-365-business-central-implementation/">Business Central implementation</a>, <a href="/our-services/dynamics-365-support-services/">support services</a>, and third-party integrations. With proven consulting for Dynamics 365 Business Central Yavrio integration, we deliver faster adoption, smoother automation, and long-term success.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Continia;
