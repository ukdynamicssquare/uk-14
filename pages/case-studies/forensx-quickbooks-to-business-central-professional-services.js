import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const ForensxQuickBooksToBusinessCentral = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="QuickBooks to Business Central for Services Firms | Forensx Case Study"
        description="Forensx replaced QuickBooks and spreadsheets with Business Central for multi-entity finance, project costing, WIP tracking and timesheet approvals."
        image="/img/forensx-case-study.png"
        imageAlt="Forensx case study – Dynamics Square"
      />
      <section className="hero hero-new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="webin-top-left case-study-bann" style={{ textAlign: "center" }}>
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>QuickBooks to Microsoft Dynamics 365 Business Central for Professional Services</h1>
                  <p>How a Growing Forensic Accounting and Architecture Firm Built a Scalable, Project-Driven ERP Foundation with Microsoft Dynamics 365 Business Central</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cast-studi-into minr">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <CaseStudyClientCard
                clientName="Forensx"
                logo="/img/case-study-logos/forensx-logo.png"
                meta={[
                  { icon: "bi-briefcase", label: "Professional Services" },
                  { icon: "bi-geo-alt", label: "United Kingdom" },
                  { icon: "bi-diagram-3", label: "Multi-Entity Group" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>Forensx</strong>, a <a href="/industries/professional-services/" className="u-i">professional services firm</a> specialising in forensic accounting and architecture, was preparing for rapid growth into new regions. Its finances ran on QuickBooks and spreadsheets, timesheets were tracked by hand and invoicing was slow and error-prone. Dynamics Square implemented cloud-based <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a>, giving the firm a structured, scalable framework for project finances, timesheets and invoicing before growth made the change harder.</p>
              </CaseStudyClientCard>
            </div>
          </div>
        </div>
      </section>
      <section className="busine_service_bottom" style={{ padding: "60px 0px 80px" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="side-heading-custom-01">
                <h2>Business Overview</h2>
              </div>
              <div className="custom-p-001">
                <p>Forensx delivers project-based services in forensic accounting and architecture. Its work depends on accurate financial tracking, structured resource management and clear visibility of every project.</p>
                <p>When Dynamics Square became involved, the business was at an early stage but changing fast. It planned to grow from around 15 people to between 50 and 100 by the end of 2026, open a new office in Dubai and expand further in the US and Europe.</p>
                <p>The firm operates through a group holding company and several operating entities, including international operations. The holding company does not trade actively, but it plays an important role in financial transactions and governance.</p>
                <p>The business already used Microsoft 365 and wanted a cloud-based system that would fit naturally into that environment. Project management ran in Primavera.</p>
                <p>Core financial operations, however, still ran on QuickBooks, which was showing clear limits as the business grew in scale and complexity.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-41.png"
                  className="fix-im"
                  alt="Forensx business overview"
                  width={400} height={450}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why custom-pd-1" style={{ paddingBottom: "80px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>
                  What are The <br />
                  Business Challenges
                </h2>
                <p>Despite having foundational systems in place, the firm faced operational challenges that limited efficiency and visibility.</p>
              </header>
            </div>
          </div>
          <div className="row g-5 gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Reliance on QuickBooks limited scalability and left financial data fragmented.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Project management lacked visibility of budgets, costs and overall progress.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Timesheets were tracked manually or in spreadsheets, with few controls or approvals.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Invoicing was time-consuming and prone to errors.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Limited visibility and control over work in progress (WIP) made financial tracking difficult.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Heavy dependence on spreadsheets for reporting reduced efficiency and risked inconsistencies.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>There was no central document management, creating a risk of outdated or duplicated documents.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Client data was not connected to financial processes.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Complex processes and unfriendly workflows made systems harder to use.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>These challenges created friction and made it difficult for the business to scale efficiently.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>What the Business Needed</h2>
                <p>To support its growth, the firm needed a system that could unify operations while staying simple and easy to use.</p>
              </header>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/case-v-42.png" alt="Forensx QuickBooks to Business Central requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A cloud-based ERP to <a href="/case-studies/quickbooks-to-business-central-migration/" className="u-i">replace QuickBooks</a>.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Integrated timesheet management with approval workflows.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Invoicing linked directly to project and timesheet data.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Clear visibility of project budgets, costs and profitability.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Accurate WIP tracking and financial controls.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>System-driven reporting to reduce dependence on spreadsheets.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Central document management integrated with SharePoint.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Client data connected across finance and operational workflows.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>An intuitive system that removes manual workarounds.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The focus was clear: simplify operations while enabling control and scale.</b></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-pd-221">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>Business Objectives</h2>
                <p>The leadership team set clear objectives for the transformation:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Implement a scalable ERP to support growth across regions.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Improve financial accuracy and centralise financial management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Introduce structured timesheet capture and approval.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Automate invoicing to reduce manual effort and errors.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Improve visibility of project performance, including budgets and profitability.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Strengthen WIP tracking and financial governance.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Provide real-time, role-based reporting.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Establish a single source of truth for documents and client data.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Improve usability to drive faster adoption.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ce-image-ce">
                <Image src="/img/case-v-43.png" alt="Forensx QuickBooks to Business Central" width={999} height={519} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square recommended Microsoft Dynamics 365 Business Central (SaaS) to support project-based work and expansion across several entities, using the <a href="/products/dynamics-365-business-central/project-management/" className="u-i">Jobs module</a> as the backbone for project finance.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Core ERP Implementation</h3>
                  <ul>
                    <li>Deployed Business Central in the cloud.</li>
                    <li>Set up <a href="/products/dynamics-365-business-central/financial-management/" className="u-i">multi-company and multi-currency</a> operations for the holding company and operating entities.</li>
                    <li>Integrated Business Central with Microsoft 365.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Jobs Module for Project Management</h3>
                  <ul>
                    <li>Set up projects and project tasks, project planning lines and project WIP tracking.</li>
                    <li>Configured project, general ledger and recurring journals, plus project expense booking.</li>
                    <li>Enabled project sales invoicing, timesheet booking and approval, and resource management.</li>
                    <li>Delivered project reports: project analysis, planning lines, transaction details, actual versus budget, WIP to G/L, and projects per customer.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Timesheet, Invoicing and WIP Integration</h3>
                  <ul>
                    <li>Built end-to-end timesheet-to-invoice workflows.</li>
                    <li>Introduced structured timesheet capture with approvals.</li>
                    <li>Configured WIP accounting to improve financial tracking and control.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Process Enhancements and Customisations</h3>
                  <ul>
                    <li>Redesigned the invoice layout to match the firm’s branding and client communication.</li>
                    <li>Developed project-wise resource utilisation reports for better planning.</li>
                    <li>Added a validation that restricts invoice creation against defined WIP thresholds.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Reporting and Document Management</h3>
                  <ul>
                    <li>Delivered real-time, role-based reporting to reduce dependence on spreadsheets.</li>
                    <li>Gave visibility of project budgets, costs and profitability.</li>
                    <li>Integrated SharePoint so project documents are linked directly from Business Central, creating one source of truth.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>CRM and Data Integration</h3>
                  <ul>
                    <li>Enabled <a href="/products/dynamics-365-business-central/crm-module/" className="u-i">basic CRM capabilities</a> within Business Central.</li>
                    <li>Integrated Outlook to track client communication.</li>
                    <li>Created a unified view of client data across finance and project operations.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>Results and Impact: What This Transformation Means</h2>
                <p>The implementation moves Forensx from fragmented, manual processes to a structured, integrated way of working.</p>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Centralised financial management with better accuracy and control.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>End-to-end visibility of project budgets, costs and profitability.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Controlled timesheet processes with approval workflows.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Automated invoicing that cuts manual effort and shortens billing cycles.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Stronger WIP tracking and financial governance.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Real-time reporting in place of spreadsheets.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>A single source of truth for project documents.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Client data connected across finance and project work.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>An easier system that teams adopt faster.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <div className="section-header" style={{ marginBottom: "-25px" }}>
                <h2>Why This Case Matters and Future Prospects</h2>
              </div>
              <div className="content-icons-modil-1">
                <p>This story reflects a common problem for growing professional services firms. Systems that work well at the start become restrictive as the firm grows across projects, regions and teams.</p>
                <p>Forensx chose to put a structured framework in place early in its growth, rather than replacing systems under pressure later. In a project-based business, linking timesheets, WIP and invoicing in one system is what protects margin as headcount rises.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Expansion into Dubai, the US and Europe on the same platform.</li>
                  <li><a href="/continia-expense-management/" className="u-i">Continia expense management</a>.</li>
                  <li>Further automation and reporting enhancements.</li>
                  <li>Closer alignment between project management and financial operations.</li>
                </ul>
                <p>As the firm scales, its ERP foundation will support both operational control and strategic growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
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

export default ForensxQuickBooksToBusinessCentral;
