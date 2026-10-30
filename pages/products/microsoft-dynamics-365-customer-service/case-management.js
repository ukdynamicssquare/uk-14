import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import PageSeo from "../../../components/PageSeo";

const CasetManagement = () => {

  const listcase  =['Retail and E-Commerce', 'Finance', 'Non-Profit Organisations', 'Healthcare', 'Retail and E-Commerce', ];


  return (
    <>
      <PageSeo
        type="Service"
        title="Case Management in Microsoft Dynamics 365 for Customer Service"
        description="Efficiently handle customer cases with Microsoft Dynamics 365 Customer Service for simplified case management."
        image="https://www.dynamicssquare.co.uk/img/Case-Management-Banner.png"
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Case Management in Dynamics 365  for Customer Service</h1>
              <p>Track and boost the issue resolution process along with offering an ideal customer experience with Case Management in Dynamics 365 for Customer Service.</p>
              <div>
                <div className="text-center text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule a Demo Now!</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image
                src="/img/Case-Management-Banner.png"
                alt="What is Case Management Module in Dynamics 365 for Customer Service?"
                width={665} height={447}
                priority = {true} />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>What is Case Management Module in Dynamics 365 for Customer Service? </h2>
                <p>Case management is a module that comes standard with any of the Dynamics 365 Customer Service licences (enterprise or professional). It offers numerous tools and functionalities to help agents manage caseloads with minimum effort while maintaining a good case lifecycle.</p>
                <p>Microsoft Dynamics 365 Customer Service is an advanced solution to help you deliver the best customer experience using limited resources. It unifies different communication channels and analyses the data to offer personalised interaction to customers.</p>
                <p>It comes with modern tools and capabilities to manage multiple communication channels, collect data, build a productive workflow, and provide an interactive customer experience.</p>
              </header>
            </div>
          </div>
          <div className="row p-lg-6">
            <div className="col-lg-6">
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
                        <div className="wr-in">
                          <img src="/img/enhanced_case_forms.png" alt="What is Case Management Module in Dynamics 365 for Customer Service?" />
                        </div>
                        <span>Enhanced Case Forms</span>
                      </button>
                    </h3>
                    <div
                      id="fin1"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>You can create customisable forms to collect as much data as possible and classify different cases in groups for the ease of agents.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img src="/img/omnichannel_experience.png" alt="Enhanced Case Forms"  loading="lazy" decoding="async" />
                        </div>
                        <span>Omnichannel Experience</span>
                      </button>
                    </h3>
                    <div
                      id="fin2"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>It captures customers' data using different communication channels and centralises it to make it easily accessible for all business executives.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img src="/img/automated_workflows.png" alt="Omnichannel Experience"  loading="lazy" decoding="async" />
                        </div>
                        <span>Automated Workflows</span>
                      </button>
                    </h3>
                    <div
                      id="fin3"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Leverage the power of AI to build automated system workflows to eliminate recurring tasks that include escalation and case routing.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img src="/img/knowledge_base.png" alt="Automated Workflows"  loading="lazy" decoding="async" />
                        </div>
                        <span>Knowledge Base</span>
                      </button>
                    </h3>
                    <div
                      id="fin4"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnew"
                    >
                      <div className="accordion-body">
                        <p>Access the huge knowledge base to get access to valuable knowledge in the form of articles and solutions for faster resolution.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <hr className="mob-disp" />
              <div className="finace-acc">
                <div className="accordion" id="accnewadasd">
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
                        <div className="wr-in">
                          <img src="/img/sla_management.png" alt="Knowledge Base"  loading="lazy" decoding="async" />
                        </div>
                        <span>SLA Management</span>
                      </button>
                    </h3>
                    <div
                      id="fin5"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                        <p>Set up and manage different SLAs (service level agreements) to specify timelines and ensure timely delivery of the service or product.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
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
                        <div className="wr-in">
                          <img
                            src="/img/track_customer_interactions.png"
                            alt="SLA Management"  loading="lazy" decoding="async" />
                        </div>
                        <span>Track Customer Interactions</span>
                      </button>
                    </h3>
                    <div
                      id="fin6"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                        <p>Track all accounts to maintain the service history of cases, inquiries, requests, and issues. Also, access customer data to offer personalised interactions.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin7"
                        aria-expanded="false"
                        aria-controls="fin7"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/facilitates_communication.png"
                            alt="Track Customer Interactions"  loading="lazy" decoding="async" />
                        </div>
                        <span>Facilitates Communication</span>
                      </button>
                    </h3>
                    <div
                      id="fin7"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                        <p>Establish a consistent communication bridge between customers and the business for smooth communication using different channels.</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="accordion-item">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#fin8"
                        aria-expanded="false"
                        aria-controls="fin8"
                      >
                        <div className="wr-in">
                          <img
                            src="/img/track_progress_and_resolution.png"
                            alt="Facilitates Communication"  loading="lazy" decoding="async" />
                        </div>
                        <span>Track Progress and Resolution</span>
                      </button>
                    </h3>
                    <div
                      id="fin8"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accnewadasd"
                    >
                      <div className="accordion-body">
                        <p>You can track and monitor various cases until they get resolved. Also, you can boost the process or optimise resources in real-time to enhance profitability.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action-center hero-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="call-to-action-content">
                <h3>Streamline Case Management with Dynamics 365 Customer Service</h3>
                <p>Implement Dynamics 365 Customer Service to simplify the entire processes of creating, accepting and resolving tickets. Connect with a Dynamics 365 consultant to personalise Customer Service to suit your business needs.</p>
                <div className="text-center m-o-t new-btn-nn">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule a Free Demo Now!</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>What is the Case?</h2>
                <p>A case occurs when a product or service that is supposed to function properly fails due to some situation or incident. Once such an incident happens in an organisation, the customer reports the issue to get it resolved ASAP so that operations can be resumed.</p>
                <p>There are different kinds of situations, among which the major ones are:</p>
              </header>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/Case-Management-Banner-side-pic.png"
                  alt="Case-Management-Banner-side-pic"
                  width={489} height={513}
                />
              </div>
            </div> */}
            <div className='col-lg-8 align-self-center'>
              <div className='piller-secr'>
                <h4>Questions</h4>
                <p>When the customer has a question about your service or the product, it is considered a case.</p>
              </div>
              <div className='piller-secr'>
                <h4>Requests</h4>
                <p>When the customer raises a request to let the business take action to resolve the incident, it is known as a request. </p>
              </div>
              <div className='piller-secr'>
                <h4>Issue</h4>
                <p>When the customer encounters a malfunction or a problem with the service or the product, that must be resolved to resume operations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="side-heading-custom-01">
                <h2>Core Functionalities of Case Management Module</h2>
              </div>
              <div className="custom-p-001">
                <p><Link href="/products/microsoft-dynamics-365-customer-service/">Dynamics 365 for Customer Service</Link> is one such high-tech business solution that enables businesses to provide reliable customer service and build loyalty among customers.</p>
                <p>Case management comes as a standard module with Dynamics 365 Customer Service that tracks all customer issues across different channels to give a unified approach towards issue resolution. It streamlines all inquiries, tracks the entire process, and gives real-time data until the issue gets resolved.</p>
                <div className="row" style={{ paddingTop: '40px' }}>
                  <div className="col-lg-6">
                    <p>
                      <ul>
                        <li>Case Creation and Tracking</li>
                        <li>Routing and Escalation</li>
                        <li>SLAs (Service Level Agreements)</li>
                        <li>Knowledge Base Integration</li>
                        <li>Activity Management</li>
                        <li>Email Integration</li>
                        <li>Mobile App Access</li>
                      </ul>
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                      <ul>
                        <li>Audit Trails</li>
                        <li>Record Creation and Update Rules</li>
                        <li>Business Process Flows</li>
                        <li>Social Media Integration</li>
                        <li>Reporting and Analytics</li>
                        <li>Duplicate Data Detection</li>
                        <li>Bulk Editing</li>
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <header className="section-header">
                <h2>Dynamics 365 Case Management Benefits</h2>
                <p>Resolve cases faster and build loyal customers leverage advanced tools and functionalities of D365 Customer Service. It offers numerous benefits, among which some are listed below:</p>
              </header>
            </div>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/enhanced_customer_satisfaction.png" alt="Enhanced Customer Satisfaction" width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Enhanced Customer Satisfaction</h3>
                  <p>You can utilise your business infrastructure to resolve customer issues in minimal time with an efficient resolution. With streamlined workflows, omnichannel support, and a self-service portal, you can enhance overall customer satisfaction to build loyalty and trust.</p>
                </div>
              </div>
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/maximised_productivity.png" alt="Maximised Productivity" width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Maximised Productivity</h3>
                  <p>Utilise the power of cloud deployment and AI to automate different tasks at once and access real-time data to make data-driven, actionable decisions. Reduce repetitive tasks, access centralised data, and empower agents with a knowledge base to enhance overall productivity.</p>
                </div>
              </div>

            </div>
            <div className="col-lg-6">
              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image src="/img/effective_communication.png" alt="Effective Communication" width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Effective Communication</h3>
                  <p>Establish strong and consistent communication between the executive and customers to streamline different operations and maximise results. It lets you gain insights, connect the entire business, and optimise processes for better output.</p>
                </div>
              </div>

              <div className="style-grid-1">
                <div className="style-grid-icons">
                  <Image
                    src="/img/data_driven_decision_making.png"
                    alt="Data-driven Decision Making"
                    width={84} height={84} />
                </div>
                <div className="style-grid-content">
                  <h3>Data-driven Decision Making</h3>
                  <p>Utilise real-time data insights to make data-driven decisions and contact customers with personalised data to increase customer retention. With data insights, you can generate reports, identify trends, and find areas for business improvement.</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom custom05">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/Case-Management-Banner-side-pic.png"
                  alt="Case Management in Different Industries"
                  width={489} height={513} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Case Management in Different Industries</h2>
              </div>
              <div className="custom-p-001">
                <p>To become a successful business, you need to take care of two core factors. First is the optimum quality of your product or service, and second is the reliable after-sales support to keep things working in top-notch condition. </p>
                <p>In business, no one is aware of unexpected errors and complex issues when a product or service goes wrong. We cannot predict the upcoming error, but we can track and resolve it on time so that the business can resume its processes.</p>
                <p>This is where Case Management of Dynamics 365 Customer Service comes in place, and it can be implemented in several industries.</p>
                <p>
                  <ul>
                    {listcase.map((caselist,index) => (
                      <li key={index}>{caselist}</li>
                    ))}

                    {}
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="side-heading-custom-01">
                <h2>How do I get Dynamics 365 Customer Service Case Management?</h2>
              </div>
              <div className="custom-p-001">
                <p>The process of implementing Dynamics 365 Customer Service is easy, but finding the right <Link href="/our-services/dynamics-365-implementation-services/">implementation partner</Link> might be a bit difficult. However, you don’t need to invest resources to find a reliable and trustworthy Dynamics 365 partner, as Dynamics Square has got you covered.</p>
                <p>We have implemented Dynamics 365 in various industries and trained users to leverage the full capabilities of case management. Due to proper training and the right implementation, businesses are now able to track and resolve all their customer queries, boosting customer satisfaction.</p>
                <p>If you want to retain customers with your services and optimum support services, Dynamics 365 Customer Service for Case Management is for you.</p>
                <p>In case of any query, write us an email at info@dynamicssquare.co.uk or call us directly at <b>+44 207 193 2502</b> to avail instant support.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CasetManagement;

