import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const TraffiNetSuiteToBusinessCentral = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="NetSuite to Business Central Migration | Traffi Case Study"
        description="How Traffi replaced NetSuite OneWorld with Business Central across the UK, Italy, US and Canada, with HubSpot, warehouse scanning and Power BI connected."
        image="/img/traffi-case-study.png"
        imageAlt="Traffi UK case study – Dynamics Square"
      />
      <section className="hero hero-new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="webin-top-left case-study-bann" style={{ textAlign: "center" }}>
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>NetSuite to Microsoft Dynamics 365 Business Central Migration for a Multi-Country Distributor</h1>
                  <p>How Traffi Replaced NetSuite OneWorld with Microsoft Dynamics 365 Business Central to Unite Finance, Warehousing and Reporting Across Four Countries</p>
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
                clientName="Traffi UK"
                logo="/img/case-study-logos/traffi-uk-logo.png"
                meta={[
                  { icon: "bi-shield-check", label: "B2B Safety Clothing" },
                  { icon: "bi-globe", label: "UK, Italy, US & Canada" },
                  { icon: "bi-diagram-3", label: "Multiple Legal Entities" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>Traffi</strong>, a B2B safety clothing business operating in the UK, Italy, the US and Canada, wanted to leave <a href="/dynamics-365-business-central-vs-netsuite/" className="u-i">NetSuite OneWorld</a> and consolidate on the Microsoft platform it already used every day. Its finance, warehouse and reporting tools sat in separate systems, and <a href="/products/microsoft-power-bi/" className="u-i">Power BI</a> was difficult to connect to NetSuite. Dynamics Square <a href="/white-papers/netsuite-to-business-central/" className="u-i">planned a migration to Microsoft Dynamics 365 Business Central</a>, timed to go live before the NetSuite contract ended.</p>
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
                <p>Traffi sells safety clothing to business customers across four countries. The UK operation fulfils orders from its own warehouse, while Italy, the US and Canada use third-party logistics providers. Trading between the entities creates regular intercompany transactions.</p>
                <p>The business processes around 500 to 700 sales orders and 20 to 30 purchase orders a month. Its catalogue is focused: around 60 active products, each in five sizes. Pricing combines price bands with customer-specific prices.</p>
                <p>Traffi ran on NetSuite OneWorld. Around it sat a separate warehouse management system and a standalone BI tool, so data lived in several places. Connecting Power BI to NetSuite proved difficult, which limited the reporting the team could build.</p>
                <p>The company already used Microsoft 365 across the business and wanted its ERP to sit on the same platform. Its CRM, HubSpot, was heavily customised to the way the sales team works and was staying in place.</p>
                <p>With the NetSuite contract due to end in July 2026, Traffi had a fixed deadline. Leadership was clear that the priority was not the lowest price, but a capable partner with UK-based support.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-18.png"
                  className="fix-im"
                  alt="Traffi UK business overview"
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
                    <p>Finance, warehousing and BI ran in separate, disconnected systems.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Power BI was difficult to integrate with NetSuite.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The ERP sat outside the Microsoft 365 environment the business used every day.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Four countries brought different tax rules, including VAT, US sales tax and Canadian HST.</p>
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
                    <p>Intercompany trading between entities added complexity to finance.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Warehouse processes in the UK needed better mobile tools and container tracking.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Sales performance and cash flow reporting required manual effort.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>A fixed NetSuite contract end date left no room for an extended project.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The organisation needed a single, modern ERP that fitted its Microsoft environment and could support growth across four countries.</p>
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
              <Image src="/img/case-v-19.png" alt="Traffi UK NetSuite to Business Central migration requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>One ERP platform for finance, warehousing and reporting.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Localised finance for the UK, Italy, the US and Canada.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Clean handling of intercompany transactions.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Mobile warehouse management for the UK warehouse.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Power BI connected directly to ERP data.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Continued integration with the existing HubSpot CRM.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Support for price bands and customer-specific pricing.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A partner with UK-based support and a delivery plan that met the contract deadline.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was not simply to replace NetSuite, but to bring the whole operation onto one connected Microsoft platform.</b></p>
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
                <p>Traffi set clear objectives for the migration:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Move from NetSuite OneWorld to Microsoft Dynamics 365 Business Central.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Deliver finance, accounts payable, accounts receivable and warehouse management in phase one.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Set up separate localised companies for each country.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Connect Power BI for financial, sales and cash flow reporting.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Keep HubSpot in place and integrated with Business Central.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Go live before the NetSuite contract ended in July 2026.</p>
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
                <Image src="/img/case-v-20.png" alt="Traffi UK NetSuite to Business Central migration" width={865} height={519} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square recommended Microsoft Dynamics 365 Business Central <a href="/dynamics-365-business-central-vs-finance-operations/" className="u-i">rather than Finance and Operations</a>, matching the platform to Traffi’s size and order volumes. The project was run using the <a href="/our-services/dynamics-365-implementation-services/" className="u-i">Microsoft Sure Step methodology</a>, led by a principal solution architect and a dedicated project manager, with a steering committee and clear escalation path on both sides. Phase one was scoped to go live before the NetSuite contract ended.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Finance Across Multiple Legal Entities</h3>
                  <ul>
                    <li>Set up Business Central for <a href="/products/dynamics-365-business-central/financial-management/" className="u-i">multiple legal entities</a>, each with its own chart of accounts, fiscal periods, currencies and VAT handling.</li>
                    <li>Configured journals, recurring and reversal journals, deferrals, budgets, cost accounting and cash flow functions.</li>
                    <li>Delivered fixed assets, bank management with automatic reconciliation matching, and financial reporting by dimension.</li>
                    <li>Set up intercompany sales between entities, with dedicated reporting.</li>
                    <li>Applied permissions and approval workflows across finance processes.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Procure-to-Pay and Order-to-Cash</h3>
                  <ul>
                    <li>Vendor management with approval workflows, purchase order approvals and receipt tracking for under- and over-supply.</li>
                    <li>Suggested vendor payments and payment approval workflows, including multi-currency payments to the same vendor.</li>
                    <li>Customer management with approval workflows, sales price and discount management, and credit limit approvals.</li>
                    <li>Sales orders, shipments, delivery notes, returns and credit memos, with on-demand emailing of documents.</li>
                    <li>Purchase and sales analysis reports, including top 10 vendors, top customers and sales trends by customer group.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Warehouse Management with Tasklet</h3>
                  <ul>
                    <li>Implemented locations, transfers, replenishment policies and physical inventory processes.</li>
                    <li>Set up warehouse receipts, put-aways, picks, shipments and movements for the UK warehouse.</li>
                    <li>Added <a href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Tasklet WMS</a> for mobile scanning and warehouse tasks.</li>
                    <li>Delivered inventory ageing, valuation and stock movement reporting.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Import Container Tracking</h3>
                  <ul>
                    <li>Recorded bill of lading details, document checklists and attachments for each import consignment.</li>
                    <li>Linked containers to purchase order and transfer order lines, including split lines, pallets, weights and freight.</li>
                    <li>Updated expected receipt dates on linked orders automatically when a container’s ETA changes, while keeping the original dates for comparison.</li>
                    <li>Updated shipment dates on reserved sales order lines automatically.</li>
                    <li>Added dashboard tiles showing containers due at port this week and next, and sales orders whose shipment dates changed recently.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Automation Add-Ons</h3>
                  <ul>
                    <li><a href="/continia-document-capture-with-business-central/" className="u-i">Continia Document Capture</a> to turn supplier documents into data using OCR.</li>
                    <li><a href="/continia-expense-management/" className="u-i">Continia Expense Management</a> for digital capture, submission and approval of employee expenses.</li>
                    <li><a href="/yavrio-integration-with-business-central/" className="u-i">Yavrio bank integration</a> to import bank transactions into reconciliation and upload payments from Business Central to the bank.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>HubSpot Integration and Power BI</h3>
                  <ul>
                    <li>Integrated Business Central with the existing HubSpot CRM to synchronise customers, quotes, orders and financial information.</li>
                    <li>Built Power BI reports for sales performance and cash flow forecasting.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Data Migration and UK-Based Support</h3>
                  <ul>
                    <li>Migrated three years of history from NetSuite: monthly trial balances, sales orders, purchase orders and sales invoices, using custom history tables in Business Central.</li>
                    <li>Provided UK-based project leadership and support, a key selection requirement.</li>
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
                <p>The migration gives Traffi one connected platform for finance, warehousing and reporting across four countries.</p>
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
                  <p>Finance for the UK, Italy, the US and Canada runs on a single Microsoft platform.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Intercompany transactions are handled within Business Central.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The UK warehouse uses mobile scanning for faster, more accurate picking.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Inbound containers are tracked against purchase orders, with order dates updating automatically when arrival dates change.</p>
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
                  <p>Power BI reports draw directly from ERP data.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>HubSpot and Business Central share customer and order information.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The business is no longer tied to NetSuite contract renewals.</p>
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
                <p>Many growing distributors adopt NetSuite early, then find that their reporting and day-to-day tools live elsewhere. For businesses that already run on Microsoft 365, moving the ERP onto the same platform removes a layer of integration work and makes reporting far simpler.</p>
                <p>Traffi’s migration also shows the value of matching the platform to the business. Dynamics 365 Finance and Operations was not needed; Business Central covered multi-country finance, intercompany trading and warehousing at the right scale and cost.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Advanced Power BI forecasting.</li>
                  <li>Further automation of intercompany processes.</li>
                  <li>Deeper integration between HubSpot and Business Central.</li>
                  <li>Additional Business Central modules as the business expands.</li>
                  <li>Ongoing UK-based support and optimisation.</li>
                </ul>
                <p>With its operations on one platform, Traffi can grow into new markets without adding new systems.</p>
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

export default TraffiNetSuiteToBusinessCentral;
