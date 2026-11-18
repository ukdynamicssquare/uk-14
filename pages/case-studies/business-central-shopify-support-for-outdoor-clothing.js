import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const AcaiBusinessCentralShopifySupport = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Business Central and Shopify Support | ACAI Outdoorwear Case Study"
        description="How ACAI Outdoorwear switched support partners to fix its Business Central and Shopify integration and manage retail and wholesale stock."
        image="/img/acai-outdoorwear-case-study.png"
        imageAlt="ACAI Outdoorwear case study – Dynamics Square"
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
                  <h1>Microsoft Dynamics 365 Business Central and Shopify Support for Outdoor Clothing</h1>
                  <p>How ACAI Outdoorwear Switched Support Partners to Fix Its Business Central and Shopify Integration and Take Control of Retail and Wholesale Stock</p>
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
                clientName="ACAI Outdoorwear"
                logo="/img/case-study-logos/acai-outdoorwear-logo.png"
                meta={[
                  { icon: "bi-bag", label: "Outdoor Clothing" },
                  { icon: "bi-shop", label: "E-commerce & Wholesale" },
                  { icon: "bi-people", label: "Around 15 Users" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>ACAI Outdoorwear</strong> sells outdoor clothing online through Shopify and to wholesale customers, with <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a> running finance and stock behind the scenes. The original implementation had left the Shopify integration unreliable, refunds failing to reconcile and wholesale stock managed by hand. After long resolution times and high charges for basic requests from its previous partner, ACAI moved support and licensing to Dynamics Square.</p>
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
                <p>ACAI Outdoorwear designs and sells outdoor clothing, trading through its own <a href="/shopify-connector-business-central/" className="u-i">Shopify store</a> and through wholesale accounts. Business Central (cloud) manages finance, inventory and order processing, connected to Shopify for online orders and to SWAP for shipping and returns.</p>
                <p>The business runs two warehouse operations: main stock for online retail orders and stock for wholesale customers. Around 15 people use Business Central on Essentials licences.</p>
                <p>The Head of Finance joined after the system went live and inherited an implementation that, in the team’s view, had not been set up well. Parts of the system appeared to be incorrectly configured, incompletely integrated or not used in the way they were designed.</p>
                <p>Support from the previous partner had become a source of frustration. Simple requests were quoted as chargeable development work, and one report the team asked for turned out to exist in Business Central already, needing only extra fields switched on. Issues took weeks to diagnose.</p>
                <p>ACAI was on a rolling support agreement with no long-term lock-in, which gave it the freedom to look for a partner with stronger Business Central and Shopify expertise.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-21.png"
                  className="fix-im"
                  alt="ACAI Outdoorwear business overview"
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
                    <p>Refunds raised in Shopify created credit notes in Business Central, but the credit notes were not closed off against customer accounts.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The previous partner spent more than three weeks diagnosing the refund issue; ACAI’s own team traced it in about 30 minutes.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>A fix that worked in the test environment failed when deployed to the live system.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Shopify could only pick stock from a single warehouse in Business Central.</p>
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
                    <p>Staff adjusted wholesale stock in Shopify by hand because no separate wholesale warehouse existed.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Simple configuration requests were quoted as large, costly development projects.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Issue resolution times were long, and basic guidance was often missing.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>There was limited confidence in the technical depth of the support team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>The business needed a partner who could fix the foundations, not just log tickets.</p>
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
              <Image src="/img/case-v-07.png" alt="ACAI Outdoorwear Business Central and Shopify support requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span>A technical review of the Business Central architecture and integrations.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>An audit of the Shopify and Business Central integration design.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Refunds that reconcile automatically against customer accounts.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A separate wholesale warehouse with transfers between locations.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Proactive, technically competent support with faster resolution.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Clear, fair charging for support and configuration.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Training and guidance for users.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Support, services and licensing from a single Microsoft partner.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was not more development, but a system that was set up correctly in the first place.</b></p>
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
                <p>ACAI agreed clear objectives for the move:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p><a href="/d365-business-central-support/" className="u-i">Transfer Business Central support and licensing</a> to Dynamics Square.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Review existing customisations, extension architecture and source code access.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Audit the Shopify, SWAP and Business Central integrations.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Resolve the refund reconciliation issue in the live environment.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Set up a wholesale warehouse and stock transfers.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Reduce reliance on costly custom fixes.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Put near 24/7 support coverage in place.</p>
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
                <Image src="/img/case-v-22.png" alt="ACAI Outdoorwear Business Central and Shopify support" width={1059} height={558} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square had already onboarded several businesses moving from the same previous partner, so the common issues were familiar. The approach was to review the system before changing anything, then stabilise the integrations and simplify warehouse processes using standard Business Central features.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Support and Licensing Transition</h3>
                  <ul>
                    <li>Moved Business Central support and licensing to Dynamics Square under a single agreement.</li>
                    <li>Reviewed existing customisations, extensions, integrations and source code access before taking over.</li>
                    <li>Put a global support model in place, giving near 24/7 coverage.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Shopify and Business Central Integration Audit</h3>
                  <ul>
                    <li>Audited how orders, refunds and payments flow between Shopify and Business Central.</li>
                    <li>Investigated the posting logic behind the refund reconciliation failure.</li>
                    <li>Reviewed why fixes tested successfully but failed in the live environment.</li>
                    <li>Reviewed the SWAP integration for shipping and returns.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Warehouse Optimisation</h3>
                  <ul>
                    <li>Scoped a <a href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">dedicated wholesale warehouse in Business Central</a>, using standard locations.</li>
                    <li>Planned warehouse transfers so wholesale and retail stock are managed separately.</li>
                    <li>Removed the need to adjust wholesale stock by hand in Shopify.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Proactive Support and User Guidance</h3>
                  <ul>
                    <li>Answered configuration questions using standard Business Central functionality before proposing development.</li>
                    <li>Provided training and guidance for finance and warehouse users.</li>
                    <li>Took ownership of future improvements and stabilisation.</li>
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
                <p>The switch gave ACAI a <a href="/change-your-erp-partner-for-a-better-future/" className="u-i">support partner focused on fixing root causes</a> rather than billing for workarounds.</p>
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
                  <p>Support, services and licensing now sit with one Microsoft partner.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The Shopify and Business Central integration has been reviewed end to end.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Refund reconciliation has a clear root cause and fix path.</p>
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
                  <p>Wholesale and retail stock can be managed separately in Business Central.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Configuration requests are answered with standard features first, lowering support costs.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Near 24/7 support coverage is in place.</p>
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
                <p>For many e-commerce businesses, the ERP is only as good as its integration with the online store. When that link is built poorly, the problems surface in finance: refunds that do not reconcile, stock that does not match and teams fixing records by hand.</p>
                <p>ACAI’s experience also shows that support quality matters as much as the original implementation. A partner who recognises standard Business Central capability can turn what looks like a costly development request into a simple configuration change.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Completing the wholesale warehouse and transfer setup.</li>
                  <li>Hardening the Shopify refund and payment flows.</li>
                  <li>Reviewing the SWAP shipping and returns integration.</li>
                  <li>Reducing custom code that standard features can replace.</li>
                  <li>Role-based training for finance and warehouse users.</li>
                  <li>A roadmap for further Business Central improvements.</li>
                </ul>
                <p>With the foundations reviewed and support in capable hands, ACAI can focus on growing both its online and wholesale channels.</p>
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

export default AcaiBusinessCentralShopifySupport;
