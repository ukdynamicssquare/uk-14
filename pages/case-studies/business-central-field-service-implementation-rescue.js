import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const MisHealthcareImplementationRescue = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Business Central & Field Service Rescue | MIS Healthcare Case Study"
        description="A stalled Business Central and Field Service project at MIS Healthcare: how we assessed the build, traced integration failures and planned go-live."
        image="/img/mis-healthcare-case-study.png"
        imageAlt="MIS Healthcare case study – Dynamics Square"
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
                  <h1>Microsoft Dynamics 365 Business Central and Field Service Implementation Rescue for Medical Imaging</h1>
                  <p>How MIS Healthcare Brought in Dynamics Square to Stabilise a Stalled Business Central and Field Service Project and Get It Back on Track for Go-Live</p>
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
                clientName="MIS Healthcare"
                logo="/img/case-study-logos/mis-healthcare-logo.png"
                meta={[
                  { icon: "bi-heart-pulse", label: "Medical Imaging" },
                  { icon: "bi-geo-alt", label: "United Kingdom" },
                  { icon: "bi-people", label: "Around 190 Staff" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>MIS Healthcare</strong>, a <a href="/industries/dynamics-365-for-healthcare/" className="u-i">UK medical imaging business</a> and a leading European reseller of Samsung medical imaging equipment, was part-way through a Business Central and Field Service implementation that had stalled. Business Central was around 90% complete and Field Service around 80%, but unreliable integrations had halted user acceptance testing. Dynamics Square was brought in to assess the project technically and set out a <a href="/change-your-erp-partner-for-a-better-future/" className="u-i">structured rescue plan</a> to reach go-live.</p>
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
                <p>MIS Healthcare sells, installs and maintains medical imaging equipment, and provides clinical training to the healthcare teams that use it. The business operates through two UK trading companies and employs around 190 people.</p>
                <p>The company was moving from a family-owned model to private-equity-backed growth. Its legacy systems, <a href="/case-studies/sage-erp-to-business-central/" className="u-i">Sage Line 50</a> for finance and a bespoke tool for field engineering, could not support that scale.</p>
                <p>After a full tender, MIS Healthcare selected a partner to implement <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a> with <a href="/products/microsoft-dynamics-365-field-service/" className="u-i">Dynamics 365 Field Service</a>, connected through <a href="/products/microsoft-power-automate/" className="u-i">Power Automate</a> and <a href="/products/microsoft-azure/" className="u-i">Azure Logic Apps</a>. Third-party apps covered warehouse scanning, document capture and bank feeds.</p>
                <p>Around 90 to 100 people were expected to use the system: 50 to 60 field engineers and 40 to 45 back-office staff. Production, test and development environments were in place, and licences had been bought.</p>
                <p>Despite that progress, the project had stalled. Integration failures between Business Central and Field Service stopped user acceptance testing, and users were taken off the project. With the NHS year-end peak approaching, the business needed a reliable route to go-live.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-23.png"
                  className="fix-im"
                  alt="MIS Healthcare business overview"
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
                    <p>Integrations between Business Central and Field Service were unstable, with Power Automate flows and Logic Apps failing.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Stock synchronisation, serial number tracking and billing flows were unreliable.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>User acceptance testing started but was stopped because of recurring issues.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Users were taken off the project, losing momentum.</p>
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
                    <p>The original partner lacked the bandwidth and capability to complete the integration work.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Approvals, personalisation and reports were still outstanding in Business Central.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Significant consultancy budget had already been spent.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The NHS year-end peak in April created a hard deadline.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The organisation needed an independent view of what could be saved and a credible plan to reach go-live.</p>
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
              <Image src="/img/case-v-24.png" alt="MIS Healthcare Business Central and Field Service rescue requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A technical assessment of the existing Business Central and Field Service build.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A clear decision on rescue versus a fresh implementation.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Reliable integrations for stock, serial numbers and billing.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A restart of user acceptance testing with confidence.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Strong combined expertise in Business Central, Field Service and <a href="/products/microsoft-power-platform/" className="u-i">Power Platform</a>.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Transparent governance and service levels.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A go-live plan that avoided the April peak.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A long-term support model after go-live.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The priority was reliability over cost: a system the business could trust from day one.</b></p>
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
                <p>MIS Healthcare set clear objectives for the rescue:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Assess the integration approach, environment setup, flows and Logic Apps.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Decide whether to stabilise the current build or re-implement.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Stabilise the Business Central and Field Service integration.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Complete outstanding approvals, personalisation and reports in Business Central.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Restart and complete user acceptance testing.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Go live early in the new year, before the NHS year-end peak.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Put long-term support, governance and service levels in place.</p>
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
                <Image src="/img/case-v-25.png" alt="MIS Healthcare Business Central and Field Service rescue" width={805} height={607} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square’s approach was assessment first, rescue second. Rather than restarting the project, a senior solution architect reviewed what had already been built and identified exactly what was needed to make it reliable.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Phase 1: Technical Discovery and Assessment</h3>
                  <ul>
                    <li>Ran a technical discovery session with the MIS Healthcare project team.</li>
                    <li>Reviewed the integration design, environment setup, Power Automate flows and Logic Apps.</li>
                    <li>Assessed the Business Central configuration, data migration and outstanding work.</li>
                    <li>Recommended whether to stabilise the existing build or re-implement.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Integration Stabilisation</h3>
                  <ul>
                    <li>Focused on the three failing areas: stock synchronisation, serial number tracking and billing flows.</li>
                    <li>Reworked unreliable flows between Business Central and Field Service.</li>
                    <li>Validated the integrations across production, test and development environments.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Business Central Completion</h3>
                  <ul>
                    <li>Completed outstanding approval workflows, personalisation and reports.</li>
                    <li>Validated the final data migration.</li>
                    <li>Confirmed third-party apps, including Tasklet, Continia and bank feeds, worked with the stabilised setup.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Testing and Go-Live Planning</h3>
                  <ul>
                    <li>Restarted user acceptance testing with a clear test plan.</li>
                    <li>Scheduled go-live around team availability and the NHS year-end peak.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Governance and Long-Term Support</h3>
                  <ul>
                    <li>Set up transparent project governance and reporting.</li>
                    <li>Agreed service levels for post-go-live support.</li>
                    <li>Provided a long-term support model for Business Central, Field Service and Power Platform.</li>
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
                <p>The rescue gave MIS Healthcare an independent, evidence-based path from a stalled project to a working system.</p>
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
                  <p>The existing investment in Business Central and Field Service was assessed rather than written off.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The root causes of integration failures were identified.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Stock, serial tracking and billing flows have a clear stabilisation plan.</p>
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
                  <p>User acceptance testing has a defined restart plan.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Go-live is scheduled around the NHS year-end peak.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Governance and service levels are in place for the long term.</p>
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
                <p>When a Dynamics 365 project stalls at 80 to 90% complete, the instinct is often to start again. That is rarely the best option. In most cases, the platform is sound and the problems sit in a small number of integrations, configuration gaps or untested processes.</p>
                <p>MIS Healthcare’s project shows the value of a <a href="/dynamics-365-health-check/" className="u-i">technical assessment before any decision is made</a>. By reviewing the build first, Dynamics Square could focus effort where it mattered and protect the work, licences and data the business had already paid for.</p>
                <p>For field service businesses, integration reliability is critical. Engineers need accurate stock, serial numbers and job data on site, and finance needs every completed job to bill correctly.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Go-live of Business Central and Field Service for all users.</li>
                  <li>Mobile working for 50 to 60 field engineers.</li>
                  <li>Automated billing from completed jobs.</li>
                  <li>Reliable serial number tracking from warehouse to customer site.</li>
                  <li>Reporting across both trading companies.</li>
                  <li>Ongoing optimisation under agreed service levels.</li>
                </ul>
                <p>With a stable platform, MIS Healthcare can support its private-equity-backed growth plans with systems that scale.</p>
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

export default MisHealthcareImplementationRescue;
