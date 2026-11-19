import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const StephensNav2017ToBusinessCentral = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Dynamics NAV to Business Central Upgrade | Stephens Catering Case Study"
        description="Stephens Catering upgraded from Dynamics NAV 2017 to Business Central SaaS and replaced its in-house engineer app with Dynamics 365 Field Service."
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
                  <h1>Dynamics NAV 2017 to Microsoft Dynamics 365 Business Central Upgrade with Field Service for Catering Equipment</h1>
                  <p>How Stephens Catering Equipment Is Moving from NAV 2017 to Business Central SaaS and Replacing Its Bespoke Field Service App with Dynamics 365 Field Service</p>
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
                clientName="Stephens Catering Equipment"
                logo="/img/case-study-logos/stephens-catering-equipment-logo.png"
                meta={[
                  { icon: "bi-tools", label: "Catering Equipment" },
                  { icon: "bi-geo-alt", label: "UK & Ireland" },
                  { icon: "bi-shop", label: "Four Branches" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>Stephens Catering Equipment</strong> supplies and services commercial catering equipment from four branches across the UK and Ireland. Its Dynamics NAV 2017 system had become slow, heavily customised and stuck on an old version, while a bespoke field service app was unreliable for engineers on the road. Dynamics Square is upgrading the business to <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central SaaS</a> under its existing Microsoft maintenance plan and replacing the in-house app with <a href="/products/microsoft-dynamics-365-field-service/" className="u-i">Dynamics 365 Field Service</a>.</p>
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
                <p>Stephens Catering Equipment supplies, installs and maintains commercial catering equipment. It operates as a single legal entity with four branches: two in the UK, trading in pounds sterling, and two in Ireland, trading in euros. Branch codes drive reporting across the business.</p>
                <p>The company ran Dynamics NAV 2017 on-premises. Despite strong server hardware, the system had become slow. Years of customisation meant the previous partner would not upgrade it, so the business had missed a series of Microsoft updates.</p>
                <p><a href="/continia-document-capture-with-business-central/" className="u-i">Continia Document Capture</a> had recently been added to automate document processing and was confirmed compatible with Business Central.</p>
                <p>Field engineers used a custom-built field service app developed in-house. It was unreliable, and the team had already looked at several third-party alternatives without seeing Microsoft’s own Field Service solution.</p>
                <p>The business pays for Microsoft’s <a href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">Business Ready Enhancement Plan (BREP)</a>, which entitles it to discounted Business Central licences when moving from NAV. Leadership wanted to use that benefit, keep customisation to a minimum and stay inside the Microsoft ecosystem.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-29.png"
                  className="fix-im"
                  alt="Stephens Catering Equipment business overview"
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
                    <p>Dynamics NAV 2017 had become slow, despite running on strong hardware.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Heavy customisation had blocked upgrades, leaving the system behind on Microsoft updates.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The bespoke field service app was unreliable for engineers.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Engineers often work in remote areas with poor connectivity.</p>
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
                    <p>Concurrent NAV licences needed to move to named Business Central users.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Reporting had to work across branches trading in two currencies.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The <a href="/shopify-connector-business-central/" className="u-i">Shopify website</a> was not connected to the ERP.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The team needed to decide how much historical data to bring across.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The business needed a modern, supported ERP and a field service solution engineers could rely on.</p>
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
              <Image src="/img/case-v-30.png" alt="Stephens Catering Equipment NAV 2017 to Business Central with Field Service requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>An upgrade path from NAV 2017 to Business Central SaaS.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Use of BREP to reduce Business Central licence costs.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Minimal customisation, so future updates stay straightforward.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A native Microsoft field service solution with offline capability.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Branch reporting across the UK and Ireland, consolidated into one currency.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Continued use of Continia Document Capture.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Integration between Shopify and Business Central.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Warehouse scanning and stock control.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was a simpler, supported system, not a heavier one.</b></p>
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
                <p>Stephens Catering Equipment set clear objectives:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p><a href="/dynamics-nav-to-business-central/" className="u-i">Upgrade from Dynamics NAV 2017</a> to Microsoft Dynamics 365 Business Central SaaS.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Replace the in-house field service app with Dynamics 365 Field Service.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Migrate data, open transactions and the customisations that still add value.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Keep Continia Document Capture in place.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Deliver branch-level reporting in GBP and EUR, consolidated into the local currency.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Connect Shopify and introduce <a href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Tasklet mobile warehouse management</a>.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Avoid unnecessary customisation in the new system.</p>
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
                <Image src="/img/case-v-31.png" alt="Stephens Catering Equipment NAV 2017 to Business Central with Field Service" width={955} height={493} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square analysed the NAV 2017 object list and presented commercial options for both an upgrade and a fresh re-implementation. Stephens chose the <a href="/dynamics-365-business-central-upgrade/" className="u-i">upgrade route</a>, using its BREP entitlement, with Field Service, Sales and warehouse capabilities added alongside.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Phase 1: NAV 2017 to Business Central SaaS Upgrade</h3>
                  <ul>
                    <li>Reviewed every NAV customisation against standard Business Central functionality.</li>
                    <li>Upgraded to Business Central SaaS, retiring customisations that standard features now cover.</li>
                    <li>Migrated master data, open transactions and the agreed level of history.</li>
                    <li>Moved from concurrent NAV licences to named Business Central users under BREP.</li>
                    <li>Set up branch dimensions for UK and Irish branches, with GBP and EUR reporting consolidated into the local currency.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Dynamics 365 Field Service</h3>
                  <ul>
                    <li>Demonstrated Dynamics 365 Field Service as a native replacement for the bespoke app.</li>
                    <li>Configured Field Service integrated with Business Central for jobs, parts and billing.</li>
                    <li>Enabled offline working for engineers in areas with poor connectivity.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Sales, Warehouse and E-Commerce</h3>
                  <ul>
                    <li>Implemented <a href="/products/microsoft-dynamics-365-sales/" className="u-i">Dynamics 365 Sales</a> alongside Business Central.</li>
                    <li>Introduced Tasklet mobile warehouse management for scanning and stock control.</li>
                    <li>Connected the Shopify website to Business Central.</li>
                    <li>Kept Continia Document Capture for automated document processing.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Onsite Workshops and Demo</h3>
                  <ul>
                    <li>Ran onsite sessions with the Stephens team.</li>
                    <li>Built a demo configured with sample company data, focused on production and service management.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Future Innovation</h3>
                  <ul>
                    <li>Scoped AI voice recognition to speed up job notes for field engineers.</li>
                    <li>Explored handheld proof-of-delivery and messaging integration for internal communication.</li>
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
                <p>The move to Business Central and Field Service gives Stephens a supported, connected platform for sales, service and finance.</p>
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
                  <p>The business runs on a current, cloud-based version of Business Central that updates automatically.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>BREP entitlement reduced the cost of moving to Business Central licences.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Field engineers use a native Microsoft field service app that works offline.</p>
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
                  <p>Branch reporting covers the UK and Ireland in both currencies.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Shopify orders flow into Business Central.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Fewer customisations mean simpler updates and lower support effort.</p>
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
                <p>Many NAV customers are <a href="/dynamics-nav-support-ending-soon/" className="u-i">stuck on old versions</a> because years of customisation have made upgrades look risky and expensive. Stephens Catering Equipment shows that the move can be planned in a controlled way: review every customisation, keep only what still adds value, and let standard Business Central handle the rest.</p>
                <p>For service-led businesses, the ERP decision is only half the picture. Pairing Business Central with Dynamics 365 Field Service gives engineers and back-office staff one connected system, from the job on site to the invoice.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>AI voice recognition for engineer job notes.</li>
                  <li>Handheld proof of delivery.</li>
                  <li>Messaging integration for internal communication.</li>
                  <li>Wider use of Dynamics 365 Sales across branches.</li>
                  <li><a href="/products/microsoft-power-bi/" className="u-i">Power BI dashboards</a> for service and branch performance.</li>
                  <li>Continued optimisation under Dynamics Square support.</li>
                </ul>
                <p>With a modern platform in place, Stephens can grow its service operation across the UK and Ireland without being held back by legacy systems.</p>
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

export default StephensNav2017ToBusinessCentral;
