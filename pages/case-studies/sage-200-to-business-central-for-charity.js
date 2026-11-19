import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const RafaSage200ToBusinessCentral = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Sage 200 to Business Central Migration for Charity | RAFA"
        description="How the Royal Air Forces Association replaced Sage 200 with Business Central for fund, entity and VAT reporting across the charity and its subsidiaries."
        image="/img/rafa-case-study.png"
        imageAlt="Royal Air Forces Association case study – Dynamics Square"
      >
        {/* Pending client naming approval: keep noindex until sign-off */}
        <meta name="robots" content="noindex, follow" />
      </PageSeo>
      <section className="hero hero-new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="webin-top-left case-study-bann" style={{ textAlign: "center" }}>
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Sage 200 to Microsoft Dynamics 365 Business Central for a Multi-Entity Charity</h1>
                  <p>How the Royal Air Forces Association Is Replacing Sage 200 with Microsoft Dynamics 365 Business Central to Unite Finance, Warehousing and Reporting Across Its Charity and Subsidiaries</p>
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
                clientName="Royal Air Forces Association"
                logo="/img/case-study-logos/rafa-logo.png"
                meta={[
                  { icon: "bi-heart", label: "Registered Charity" },
                  { icon: "bi-geo-alt", label: "Leicester, UK" },
                  { icon: "bi-diagram-3", label: "Six Entities" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p>The <strong>Royal Air Forces Association</strong> supports the RAF community through a main charity and five subsidiary companies covering trading, housing, nursery and events operations. Its finance team ran on Sage 200, hosted in Azure but not built for the cloud, and relied heavily on Excel to report across entities and restricted funds. After a structured selection process, RAFA chose Dynamics Square to implement <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a> as a single system for finance, warehousing and reporting.</p>
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
                <p>The Royal Air Forces Association is a <a href="/industries/non-profits/" className="u-i">registered charity</a> that supports serving and former members of the Royal Air Force and their families. Alongside the main charity, it operates five subsidiary companies covering trading, housing, nursery and events operations.</p>
                <p>Finance for the group ran on <a href="/white-papers/sage-200-to-business-central/" className="u-i">Sage 200 Professional</a>, hosted on Microsoft Azure. Because Sage 200 is not a native cloud application, the team regularly faced slow performance and connection problems.</p>
                <p>Charity accounting brings specific demands. RAFA needed to report on restricted and unrestricted funds, manage a VAT group with partial exemption and give budget holders visibility of their spending. Sage 200’s limited dimensional structure meant much of this reporting happened manually in Excel.</p>
                <p>Around the finance system sat separate tools for CRM, expenses and warehousing, each holding part of the picture. The trading operation also needed robust stock and warehouse capability.</p>
                <p>RAFA’s finance systems team ran a formal two-stage selection: initial demos to shortlist two or three systems, followed by targeted demos for senior finance and management. Their aim was a single, cloud-based system with stronger reporting and automation.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-32.png"
                  className="fix-im"
                  alt="Royal Air Forces Association business overview"
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
                    <p>Sage 200 was hosted in Azure but not built for the cloud, causing slow performance and connection problems.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Reporting across six entities relied heavily on manual work in Excel.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>A limited dimensional structure made restricted-fund and charity reporting difficult.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>VAT group reporting with partial exemption added complexity.</p>
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
                    <p>CRM, expenses and warehouse ran in separate, disconnected systems.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Budget holders lacked easy, read-only access to their own figures.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Approvals were not routed by cost centre or spending threshold.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Accounts payable, expenses and bank processes were largely manual.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The organisation needed a single, cloud-based finance platform designed for a multi-entity charity.</p>
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
              <Image src="/img/case-v-04.png" alt="Royal Air Forces Association Sage 200 to Business Central requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>One system for finance across the charity and all subsidiaries.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>VAT group compliance, including partial exemption.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Flexible, multi-dimensional reporting for funds and charity structures.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Robust stock and warehouse capability for the trading operation.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Cost-centre approval workflows with spending thresholds.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Read-only access for budget holders.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Bank feeds and automation for accounts payable and expenses.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span><a href="/products/dynamics-365-copilot/" className="u-i">AI and Copilot capability</a> for the future.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was a single source of truth for the whole group, not another system to reconcile.</b></p>
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
                <p>RAFA set clear objectives for the project:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Replace Sage 200 with Microsoft Dynamics 365 Business Central in the cloud.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Bring the main charity and five subsidiaries onto one platform.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Build dimensions for fund, entity and cost-centre reporting.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Introduce mobile warehouse management for the trading operation.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Automate approvals, bank feeds, payables and expenses.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Give budget holders read-only access to live figures.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Go live in line with the financial year-end.</p>
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
                <Image src="/img/case-v-05.png" alt="Royal Air Forces Association Sage 200 to Business Central" width={872} height={519} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>After discovery discussions and demonstrations with RAFA’s finance team, Dynamics Square proposed Microsoft Dynamics 365 Business Central as a single platform for the charity and all five subsidiaries. The rollout is phased: core finance first, designed as a blueprint for every entity, followed by warehouse operations, automation and wider integration. Licensing uses Microsoft’s <a href="/industries/microsoft-cloud-for-nonprofit/" className="u-i">not-for-profit programme</a>.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Phase 1: Core Finance as the Blueprint</h3>
                  <ul>
                    <li>Set up Business Central for the charity, RAFATRAD Limited, RAFA Housing Limited, RAFA Kidz Limited, RAFA Kidz Zone Limited and RAFA Events.</li>
                    <li>Redesigned the chart of accounts and introduced dimensions for entity, cost centre and restricted funds.</li>
                    <li>Configured the general ledger, budgets, deferrals, fixed assets, bank management with automatic reconciliation, receivables and payables.</li>
                    <li>Set up intercompany transactions between the charity and its subsidiaries.</li>
                    <li>Supported VAT group requirements, including partial exemption, with a strengthened audit trail.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Approvals and Purchasing Controls</h3>
                  <ul>
                    <li>Built approval workflows aligned to cost centres, with spending thresholds rather than a rigid hierarchy.</li>
                    <li>Added a purchase requisition process: raise a requisition, send it for approval and convert it into a purchase order.</li>
                    <li>Gave budget holders read-only access to their own figures.</li>
                    <li>Designed four customised document layouts, including purchase order, sales invoice, delivery note and credit note.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Accounts Payable and Expenses Automation</h3>
                  <ul>
                    <li><a href="/continia-document-capture-with-business-central/" className="u-i">Continia Document Capture</a> to read supplier invoices with OCR, match them to orders and route them for approval.</li>
                    <li><a href="/continia-expense-management/" className="u-i">Continia Expense Management</a> for mobile receipt capture, credit card matching and mileage tracking.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Warehouse, Retail and E-Commerce</h3>
                  <ul>
                    <li>Implemented inventory and warehouse management, with <a href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Tasklet WMS</a> for mobile scanning.</li>
                    <li>Connected two Shopify stores through Business Central’s <a href="/shopify-connector-business-central/" className="u-i">standard Shopify connector</a>.</li>
                    <li>Built API integrations with RAFA’s web portal and the eBay marketplace for items, stock levels and orders.</li>
                    <li>Enabled integration with Salesforce to reduce manual data entry.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Data Migration, Go-Live and Support</h3>
                  <ul>
                    <li>Uploaded master data from templates prepared by RAFA, plus one year of financial history as monthly trial balances.</li>
                    <li>Followed a structured delivery covering analysis, design, development, user acceptance testing and deployment.</li>
                    <li>Provided two weeks of hypercare after go-live and a one-month warranty period.</li>
                    <li>Set up ongoing support with prepaid hours, a support portal and response times by priority.</li>
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
                <p>The move to Business Central gives RAFA one cloud platform for finance, warehousing and reporting across the whole group.</p>
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
                  <p>The charity and five subsidiaries run on a single, cloud-native system.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Performance and connection problems from hosted Sage 200 are gone.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Fund, entity and cost-centre reporting no longer depends on Excel.</p>
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
                  <p>VAT group and partial exemption are handled within the system.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Budget holders see their own figures without waiting for finance.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Approvals, bank feeds and payables are automated.</p>
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
                <p>Charities with trading subsidiaries face the same complexity as commercial groups, plus the extra demands of fund accounting, VAT partial exemption and accountability to trustees. Many still rely on finance systems that were never designed for that combination, filling the gaps with spreadsheets.</p>
                <p>RAFA’s project shows how Microsoft Dynamics 365 Business Central can serve a multi-entity charity at the right scale. Dimensions handle fund and cost-centre reporting, approvals reflect real budget responsibility, and warehousing for the trading arm sits in the same system as the charity’s finances.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li><a href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</a> for trustees and senior management.</li>
                  <li>Copilot to speed up reporting and analysis.</li>
                  <li>Document management alongside finance and warehousing.</li>
                  <li>Integration with RAFA’s CRM and fundraising data.</li>
                  <li>Further automation of expenses and approvals.</li>
                  <li>Ongoing support and optimisation from Dynamics Square.</li>
                </ul>
                <p>With one system across the group, RAFA’s finance team can spend less time reconciling and more time supporting the charity’s work.</p>
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

export default RafaSage200ToBusinessCentral;
