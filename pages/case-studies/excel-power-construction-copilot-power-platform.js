import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const ExcelPowerCopilotPowerPlatform = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Copilot & Power Platform for Construction | Excel Power"
        description="How Excel Power Construction uses Microsoft 365 Copilot, Power Automate and Power BI to track requests, allocate plant and report site progress live."
        image="/img/excel-power-construction-case-study.png"
        imageAlt="Excel Power Construction case study – Dynamics Square"
      />
      <section className="hero hero-new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="webin-top-left case-study-bann" style={{ textAlign: "center" }}>
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Microsoft Copilot and Power Platform for Construction Project Operations</h1>
                  <p>How Excel Power Construction Is Connecting Projects, People, Plant and Procurement with Microsoft Copilot and Power Platform</p>
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
                clientName="Excel Power Construction"
                logo="/img/case-study-logos/excel-power-construction-logo.png"
                meta={[
                  { icon: "bi-building", label: "Construction" },
                  { icon: "bi-geo-alt", label: "United Kingdom" },
                  { icon: "bi-diagram-3", label: "Copilot & Power Platform" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>Excel Power Construction</strong> ran its projects through Teams, SharePoint lists, a stock control system, a time-clocking app and Xero. Each held part of the picture, so the managing director spent much of his time chasing people and pulling data into Excel. Dynamics Square designed a phased approach using <a href="/products/microsoft-power-platform/" className="u-i">Microsoft Copilot and Power Platform</a> to connect project, resource, equipment and procurement data, and to automate the requests and follow-ups that were previously chased by hand.</p>
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
                <p>Excel Power Construction <a href="/industries/dynamics-365-for-construction/" className="u-i">delivers construction projects</a> that depend on the right people, plant, vehicles, equipment and materials being in the right place at the right time. Each project involves drawings, risk assessments and method statements (RAMS), material deliveries, procurement, plant hire and galvanising collections.</p>
                <p>The business already worked inside Microsoft 365. New projects were set up in Teams, and SharePoint held lists and forms for almost everything: van and equipment registers, consumables, holiday requests and more.</p>
                <p>Alongside Microsoft 365, the company used a bespoke stock control system that had become outdated, a separate app for clocking in and out, and Xero for accounting. None of these systems talked to each other.</p>
                <p>As a result, information sat in silos. The team pulled data manually into Excel to plan resources, and the managing director spent a large part of each week checking status, chasing requests and making sure everyone knew what was coming next.</p>
                <p>The leadership team wanted the business to run in sync, with everyone able to see live project status, ownership and deadlines without being chased.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-26.png"
                  className="fix-im"
                  alt="Excel Power Construction business overview"
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
                    <p>Project, stock, timekeeping and accounting data sat in separate systems.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Staff pulled data manually into Excel to plan resources.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>There was no single view of which people, vehicles, plant and equipment were free for a new project.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Holiday and sickness were not linked to resource planning.</p>
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
                    <p>Requests for procurement, plant hire and deliveries were chased by hand.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Site progress was not reported back in a structured, daily way.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Stock and consumables were reordered without automatic alerts.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Invoicing was not linked to project milestones or completion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The business needed its existing Microsoft tools to work together as one connected system.</p>
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

              </header>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/case-v-27.png" alt="Excel Power Construction Copilot and Power Platform requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A live dashboard showing every project, its resources and its status.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Resource and equipment allocation that checks availability before assigning to a new project.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Holiday and sickness built into resource planning.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Closed-loop request tracking, with deadlines, notifications and acknowledgement.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Daily site returns from supervisors on their phones, linked to projects.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Automatic reorder alerts for stock and consumables.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Interim and milestone invoicing based on project completion.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span><a href="/ai-solutions/" className="u-i">Copilot as an AI layer</a> across Microsoft 365.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was a business that runs in sync, without the managing director chasing every task.</b></p>
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
                <p>Excel Power Construction set clear objectives:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Connect project, resource, equipment and procurement data in one place.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Automate request tracking and follow-ups across the team.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Give supervisors a simple mobile way to report daily site progress.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Trigger stock and consumables reorders automatically.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Link invoicing to project milestones.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Use Copilot to help staff find information and act on it faster.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Start with quick wins on the existing Microsoft 365 platform, then decide on a full ERP layer.</p>
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
                <Image src="/img/case-v-28.png" alt="Excel Power Construction Copilot and Power Platform" width={733} height={581} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square recommended a phased approach: deliver quick wins with Power Platform and Copilot on top of the Microsoft 365 tools the team already used, then assess whether the business had outgrown Xero and needed an ERP foundation such as <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a>.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Discovery and Process Mapping</h3>
                  <ul>
                    <li>Ran a discovery session with the managing director and operations lead.</li>
                    <li>Mapped how projects, resources, equipment, procurement and invoicing flowed through Teams, SharePoint and the existing apps.</li>
                    <li>Prioritised the processes where automation would save the most management time.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Closed-Loop Request Management</h3>
                  <ul>
                    <li>Built a request tracking process with <a href="/products/microsoft-power-automate/" className="u-i">Power Automate</a>, so each request has an owner, a deadline and a status.</li>
                    <li>Set up automatic notifications, acknowledgement and status updates.</li>
                    <li>Created request logs per recipient so priorities are clear.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Resource, Plant and Equipment Allocation</h3>
                  <ul>
                    <li>Brought equipment, vehicle, consumable and staff registers together in one data model.</li>
                    <li>Linked holiday and sickness to resource availability.</li>
                    <li>Checked availability automatically when resources are assigned to a new project.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Site Returns and Live Dashboards</h3>
                  <ul>
                    <li>Gave supervisors a mobile way to submit daily site returns and job check-off sheets through Teams.</li>
                    <li>Streamed project status into <a href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</a> visible to the whole team.</li>
                    <li>Set up stock and consumables reorder alerts.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Copilot and the Path to ERP</h3>
                  <ul>
                    <li>Enabled Microsoft 365 Copilot to help staff summarise, find and act on project information.</li>
                    <li>Assessed milestone-based invoicing and whether Business Central should replace Xero as the finance and project foundation.</li>
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
                <p>The first phase turns Excel Power Construction’s existing Microsoft 365 tools into a connected operations platform.</p>
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
                  <p>Requests are tracked from creation to completion, without manual chasing.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Everyone can see live project status, ownership and deadlines.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Resources, plant and equipment are allocated against real availability.</p>
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
                  <p>Supervisors report daily site progress from their phones.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Stock and consumables reorders are triggered automatically.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Copilot helps staff find and act on project information faster.</p>
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
                <p>Many construction and contracting businesses already pay for Microsoft 365 but use only a fraction of it. Teams and SharePoint become filing cabinets, while the real coordination happens by phone, email and spreadsheet.</p>
                <p>Excel Power Construction shows how much can be achieved by connecting what is already there. Power Automate, <a href="/products/microsoft-power-apps/" className="u-i">Power Apps</a> and Power BI can automate requests, resource checks and site reporting quickly, and Copilot adds an AI layer that helps people work with the information.</p>
                <p>The phased approach also protects the business from over-investing too early. Quick wins prove the value first; the decision on a full ERP foundation follows, based on real needs.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Milestone and interim invoicing linked to project completion.</li>
                  <li>A decision on moving from Xero to Business Central.</li>
                  <li>Replacing the legacy stock control system.</li>
                  <li>Integrating time-clocking data with projects and payroll.</li>
                  <li>Expanding Copilot use across commercial and operations teams.</li>
                  <li>Further dashboards for directors and project managers.</li>
                </ul>
                <p>With its operations connected, Excel Power Construction can take on more projects without adding more chasing.</p>
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

export default ExcelPowerCopilotPowerPlatform;
