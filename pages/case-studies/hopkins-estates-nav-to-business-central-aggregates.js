import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const HopkinsEstatesBusinessCentral = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="NAV to Business Central for Aggregates | Hopkins Estates Case Study"
        description="Hopkins Estates replaced Dynamics NAV 2009 with Business Central, integrating QuarryMinder invoicing, Continia document capture and Power BI dashboards."
        image="/img/hopkins-estates-case-study.png"
        imageAlt="Hopkins Estates case study – Dynamics Square"
      />
      <section className="hero hero-new-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 align-self-center">
              <div className="webin-top-left case-study-bann" style={{ textAlign: "center" }}>
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Microsoft Dynamics 365 Business Central Implementation for Construction, Aggregates and Property</h1>
                  <p>How Hopkins Estates Replaced a Dated ERP with Microsoft Dynamics 365 Business Central and Power BI, and Kept QuarryMinder at the Centre of Field Invoicing</p>
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
                clientName="Hopkins Estates"
                logo="/img/case-study-logos/hopkins-estates-logo.png"
                meta={[
                  { icon: "bi-building", label: "Construction & Aggregates" },
                  { icon: "bi-geo-alt", label: "Wincanton, UK" },
                  { icon: "bi-diagram-3", label: "Two Legal Entities" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p>From construction and property to aggregates and materials, <strong>Hopkins Estates</strong> was scaling fast. As growth arrived, so did complexity. With too many manual processes and a dated ERP, teams were spending hours on tasks that could be automated.</p>
                  <p>Finance needed tighter control, operations needed faster execution and reporting needed sharper insight. The business was ready to move, but not at the cost of what already worked. Dynamics Square helped it keep what it valued, especially its field invoicing system, and fix what it had outgrown.</p>
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
                <p>Hopkins Estates operates across <a href="/industries/dynamics-365-for-construction/" className="u-i">concrete, aggregates and property</a>, with two legal entities under its umbrella. The business had recently moved from a foundational stage into a phase of rapid growth.</p>
                <p>Its operations relied on a mix of specialised field software and a legacy ERP. QuarryMinder, its field invoicing tool, was robust and deeply embedded in daily work, handling customer invoicing at the quarry and on site.</p>
                <p>The core ERP, <a href="/dynamics-nav-to-business-central/" className="u-i">Dynamics NAV 2009</a>, had started to show its age. It could not support the growing complexity of the business, offered little scalability and made modern integrations difficult.</p>
                <p>Many processes, especially vendor payments and sales invoicing, were still manual and paper-based. Finance, sales, procurement and inventory worked in separate silos, and reporting could not show margin or profitability by product or customer.</p>
                <p>The leadership team was ready to reimagine finance, sales, procurement and reporting on a scalable, smarter platform, while keeping QuarryMinder exactly where it was.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-38.png"
                  className="fix-im"
                  alt="Hopkins Estates business overview"
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
                <p>The leadership team had identified several gaps that were beginning to slow the business down, affecting efficiency, reporting quality and agility across finance and operations.</p>
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
                    <p>The legacy ERP could not handle the growing complexity of operations.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Vendor payments and sales invoicing were still largely manual and paper-based.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Finance, sales, procurement and inventory operated in disconnected silos.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Invoice, customer and pricing data from QuarryMinder had no automated route into the ERP.</p>
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
                    <p>Reporting lacked depth, especially for profitability and margin by product and customer.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Cash flow and sales performance were hard to track in real time.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The system offered little scalability and few modern integration options.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Supplier invoices were processed by hand, with limited audit trail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The business needed a modern ERP that could keep pace with growth without disrupting the field operations that already worked well.</p>
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
                <p>While it wanted to move away from inefficiency, the business was clear about what worked well. It wanted to build the new system around its strengths rather than replace them.</p>
              </header>
            </div>
          </div>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/case-v-39.png" alt="Hopkins Estates Business Central implementation requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A strong, cloud-based core ERP to anchor finance, procurement and inventory.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Seamless integration with QuarryMinder, its existing invoicing software.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Automated capture and approval of supplier invoices.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Clear visibility across finance and operations through role-specific dashboards.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Deep reporting to track margin, profitability and cash flow.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A solution that grows with the business and simplifies future integrations.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Licensing for essential users, with lighter access for other roles.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Reliable support after go-live.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was progress, not disruption: keep QuarryMinder, replace what had been outgrown.</b></p>
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
                <p>The leadership team agreed focused, practical goals grounded in day-to-day operational needs:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Build a unified ERP platform to centralise finance, procurement and sales.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Connect QuarryMinder with Business Central so invoice, customer and pricing data flow smoothly.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Create <a href="/products/microsoft-power-bi/" className="u-i">Power BI</a> reports on product profitability, customer value and sales performance.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Phase the rollout across both entities, starting with core finance, banking and approvals.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Automate routine tasks to free time for higher-value work.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Give finance and operations real-time visibility through role-based dashboards.</p>
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
                <Image src="/img/case-v-40.png" alt="Hopkins Estates Business Central implementation" width={1110} height={724} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>After detailed discussions with the leadership team and a clear understanding of their goals, Dynamics Square proposed a tailored solution built on <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a>, with QuarryMinder integrated rather than replaced.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Core Product Implementation</h3>
                  <ul>
                    <li>Implemented Microsoft Dynamics 365 Business Central across finance, general ledger, procurement, accounts payable, sales, accounts receivable, bank management, timesheets and reporting.</li>
                    <li>Phased the rollout across both legal entities, starting with core finance, banking and approvals.</li>
                    <li>Set up a licensing mix of <a href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">Essentials and Team Member licences</a>, so essential users get full access and other roles get lighter access.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Add-On Solution: Continia Document Capture</h3>
                  <ul>
                    <li>Document scanning with OCR-based data extraction.</li>
                    <li>Invoice template configuration for each vendor.</li>
                    <li>Automated approval workflows for supplier invoices.</li>
                    <li>Data validation and archiving.</li>
                    <li>Secure, compliant document management.</li>
                    <li>Training so users can manage their own templates.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Custom Integration: QuarryMinder and Business Central</h3>
                  <ul>
                    <li>Transferred sales order and invoice data from QuarryMinder into Business Central.</li>
                    <li>Synchronised customer, item, pricing and tax data automatically.</li>
                    <li>Aligned payment terms and financial dimensions between the two systems.</li>
                    <li>Automated invoice creation within Business Central.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Reporting and Insights: Power BI Dashboards</h3>
                  <ul>
                    <li><b>Product profitability:</b> revenue, cost and profit per item; gross margin per product; comparisons by category, brand and group.</li>
                    <li><b>Customer profitability:</b> revenue and cost per customer or group; lifetime value and cost to serve; the impact of discounts on margin.</li>
                    <li><b>Sales channel and agent margins:</b> sales and margin by rep, agent or channel; commission cost against net profit.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Support and Delivery Framework</h3>
                  <ul>
                    <li>Delivered using the <a href="/our-services/dynamics-365-implementation-services/" className="u-i">Microsoft Sure Step methodology</a>, from planning to post-go-live.</li>
                    <li>Cleansed, mapped and migrated data, including two full upload cycles.</li>
                    <li>Provided a dedicated account manager and <a href="/d365-business-central-support/" className="u-i">12 months of prepaid support hours</a>.</li>
                    <li>Gave access to first-, second- and third-line technical support with clear service levels.</li>
                    <li>Set up a support portal for queries, tickets and updates.</li>
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
                <p>With Business Central and Power BI as the new core, Hopkins Estates gained sharper visibility and stronger control across finance and operations. Manual processes gave way to automation, and siloed data became unified insight. QuarryMinder stayed at the centre of field invoicing, exactly as the team wanted, and now integrates seamlessly with the new system.</p>
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
                  <p>QuarryMinder invoice, customer and pricing data now flows into Business Central automatically.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Supplier invoices are captured, validated and approved digitally.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Clearer insight driving better decisions across customer groups and sales reps.</p>
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
                  <p>Stronger audit readiness through digital document capture and tracking.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Real-time dashboards giving confidence in financial data.</p>
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
                <p>This project shows how a growing business can embrace digital transformation without letting go of what works. Hopkins Estates chose progress, not disruption. Rather than replacing systems wholesale, it built a platform that respects its field realities and prepares it for future growth.</p>
                <p>The approach matters for any business with a specialist operational system at its heart. By integrating QuarryMinder instead of replacing it, Hopkins Estates protected the tool its field teams relied on, while gaining a modern ERP, automated document capture and profitability reporting that the legacy system could never provide.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Extending the rollout across further Business Central modules.</li>
                  <li>Deeper Power BI analysis of cash flow and sales performance.</li>
                  <li>Wider use of timesheets and approvals across the business.</li>
                  <li>Further automation of routine finance tasks.</li>
                  <li>Additional integrations as new operational tools are added.</li>
                  <li>Continued optimisation through prepaid support.</li>
                </ul>
                <p>With a scalable ERP core, seamless integration and powerful reporting, Hopkins Estates now stands stronger and smarter, ready for whatever comes next.</p>
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

export default HopkinsEstatesBusinessCentral;
