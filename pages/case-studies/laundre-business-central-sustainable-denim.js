import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const LaundReBusinessCentralSustainableDenim = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="LaundRe Case Study | Business Central for Sustainable Denim"
        description="How LaundRe, an East London circular denim finishing hub, uses Dynamics 365 Business Central to run production, track water and energy use and prepare for growth."
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
                  <h1>Microsoft Dynamics 365 Business Central for Sustainable Denim Finishing</h1>
                  <p>How LaundRe, a Circular Denim Finishing Hub in East London, Built a Scalable Digital Core with Microsoft Dynamics 365 Business Central and Dynamics Square’s Expertise</p>
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
                clientName="LaundRe"
                logo="/img/case-study-logos/laundre-logo.png"
                meta={[
                  { icon: "bi-recycle", label: "Sustainable Denim" },
                  { icon: "bi-geo-alt", label: "Canning Town, London" },
                  { icon: "bi-building", label: "Single Legal Entity" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>LaundRe</strong>, which describes itself as the UK’s first female-founded, tech-enabled and circular denim finishing hub, went from scattered tools and limited control to a central system. That system now manages production, tracks sustainability data, improves team productivity and prepares the business for direct-to-consumer growth. Dynamics Square implemented <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a> with <a href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production management</a> and machine-level tracking of water and energy use, giving LaundRe the structure to scale its circular mission.</p>
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
                <p>LaundRe launched in Canning Town, East London, in 2025 to tackle <a href="/industries/manufacturing/dynamics-365-for-fashion/" className="u-i">fast-fashion waste</a> and overproduction. Industry estimates suggest that around a quarter of the UK’s garment stock goes unsold each year, and LaundRe gives brands a local, onshore way to bring that stock back to market.</p>
                <p>The business works across three services:</p>
                <ul>
                  <li><b>Re-Finish:</b> re-assessing, re-washing, sterilising and re-finishing unsold or deadstock denim, including custom and vintage graphic finishes.</li>
                  <li><b>Re-Shoring:</b> importing unfinished jeans and completing small-batch and on-demand finishes in the UK.</li>
                  <li><b>Re-Educate:</b> an on-site Denim School offering workshops, apprenticeships and training in sustainable washing and laser design.</li>
                </ul>
                <p>The hub runs on low-impact technology. Laser and ozone processing distresses and patterns denim without pumice stones or harsh chemicals, and low-water, low-chemistry machines handle the washing. Measuring the water and energy each machine uses is therefore central to LaundRe’s promise, and to proving it.</p>
                <p>What began as a refurbishing unit soon grew into full production. New machines, growing stock and a larger team brought bigger ambitions. The business also handled two kinds of stock: its own, and stock owned by the brands whose denim it refinishes. Behind that growth, however, sat scattered systems, disconnected tools and data that nobody could use.</p>
                <p>To scale its vision of responsible consumption and measurable impact, LaundRe turned to Dynamics Square.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-00.png"
                  className="fix-im"
                  alt="LaundRe business overview"
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
                <p>As <a href="/industries/startups/" className="u-i">the startup moved from trials</a> to full-scale production, the systems it relied on in its early days could no longer support the speed or depth the business needed.</p>
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
                    <p>Data was split across systems, so finance, production and customer activity could not be seen in one place.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Tracking both customer-owned and in-house stock created gaps in visibility and accountability.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Production had no system support for routings, bills of material or machine tracking.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Water and energy data from machines was missing from reports, limiting sustainability insight.</p>
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
                    <p>Without that data, the business could not measure its efforts to <a href="/products/microsoft-sustainability-manager/" className="u-i">reduce its carbon footprint</a>.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p><a href="/case-studies/quickbooks-to-business-central-migration/" className="u-i">QuickBooks could not support</a> real-time operations or long-term planning.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Bank payments and reconciliations relied on manual work.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Client records were kept informally, with no route to a proper CRM.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The business needed a system that could match its production ambition and ethical focus.</p>
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
              <Image src="/img/case-v-01.png" alt="LaundRe Business Central for sustainable denim requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A central platform connecting finance, stock, production and customer data.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Clear visibility of how much stock was handled and where it was.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Support for batch production, routing logic and consumption tracking.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Data collection from machines to track energy and water use.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Tools that work with Microsoft 365 and SharePoint.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>CRM features for early-stage client data, with room to expand.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Integrated bank payments to simplify reconciliation.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Flexible user setup that expands as the business grows.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was structure that scales, without losing the values the business was built on.</b></p>
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
                <p>Before go-live, the leadership team set out specific outcomes:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Set up a future-ready ERP that supports scaling operations.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Make the production flow visible, from small samples to full manufacturing runs.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Monitor customer stock levels every month for better accountability.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Give finance and production staff access to live data.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Use basic CRM tools now, ready for CRM expansion later.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Prepare for Power BI and mobile warehouse tools as production matures.</p>
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
                <Image src="/img/case-v-02.png" alt="LaundRe Business Central for sustainable denim" width={863} height={597} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square mapped the business’s growth stage and designed a system around both current needs and future plans. Microsoft Dynamics 365 Business Central was chosen as the core ERP, using a standard setup sized for the business today and its future scale, avoiding unnecessary custom development.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Finance and Accounting</h3>
                  <ul>
                    <li>Set up finance for a single legal entity, with configuration that scales.</li>
                    <li>Chart of accounts and general ledger.</li>
                    <li>Budgeting, fixed assets, VAT management and audit trail.</li>
                    <li>Bank reconciliation and deferral management.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Procurement and Payables</h3>
                  <ul>
                    <li>Vendor records and purchase order processing.</li>
                    <li>Invoice handling with approval workflows.</li>
                    <li>Suggested and automated vendor payments.</li>
                    <li>Credit memo handling.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Sales and Receivables</h3>
                  <ul>
                    <li>Customer order processing with credit limit workflows.</li>
                    <li>Returns, discounts and delivery notes.</li>
                    <li>Sales budgeting and payment application.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Production Management</h3>
                  <ul>
                    <li>Bills of material and routings.</li>
                    <li>Machine and work centre setup, capturing water and energy use.</li>
                    <li>Capacity planning and production orders.</li>
                    <li>Consumption and output tracking, including customer-owned stock.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Bank Integration</h3>
                  <ul>
                    <li><a href="/yavrio-integration-with-business-central/" className="u-i">Yavrio-based payments</a> for UK banking.</li>
                    <li>Live bank feeds and direct journal uploads.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>CRM, Reporting and Analytics</h3>
                  <ul>
                    <li>Early-stage customer records and interaction tracking, ready for future CRM upgrades.</li>
                    <li>Account schedules and dimension-based reports.</li>
                    <li>Management reporting for financial and production data, with Power BI readiness.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Implementation and Support</h3>
                  <ul>
                    <li>Offsite delivery using the <a href="/our-services/dynamics-365-implementation-services/" className="u-i">Microsoft Sure Step methodology</a>.</li>
                    <li>Two rounds of data upload, with the client preparing the data.</li>
                    <li>Ten days of post-go-live support plus prepaid support hours.</li>
                    <li>Structured service levels and a dedicated account manager.</li>
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
                <p>After implementation, the startup began to operate with greater control, speed and confidence.</p>
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
                  <p>More than £32,000 in costs avoided compared with previous solutions.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>A projected 172% return on investment over three years.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Break-even forecast within seven months of go-live.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>One full-time and one part-time finance and operations hire avoided.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Flow of operations improved by an average of 8%.</p>
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
                  <p>Finance and operations teams 18% more productive.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Real-time visibility of stock levels and machine resource use.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Stronger sustainability claims, backed by water and energy data needed to measure and lower carbon emissions.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Smoother collaboration across teams using Microsoft tools.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Ready to adopt advanced reporting and CRM without disruption.</p>
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
                <p>This is not a story about ERP software. It is about a growing business that knew where it wanted to go and found the right partner to help build the road.</p>
                <p>The transformation worked because the system was aligned with the business’s values: circular production, ethical sourcing and traceable reporting, alongside active efforts to cut its carbon footprint as operations scale. For a sustainability-led brand, data on water and energy use is not a nice-to-have; it is the evidence behind every claim.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>A move to a direct-to-customer model.</li>
                  <li><a href="/products/microsoft-power-bi/" className="u-i">Power BI reporting</a> on production, sustainability and finance.</li>
                  <li>Mobile warehouse tools as production volumes grow.</li>
                  <li>CRM expansion beyond early-stage client records.</li>
                </ul>
                <p>With the right foundation in place, the business can scale production and its sustainability commitments together.</p>
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

export default LaundReBusinessCentralSustainableDenim;
