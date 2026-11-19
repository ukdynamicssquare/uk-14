import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import PageSeo from "../../components/PageSeo";

const BedmaxBusinessCentralSupportUpgrade = () => {
  return (
    <>
      <PageSeo
        type="Article"
        title="Business Central On-Premises Upgrade & Support | Bedmax Case Study"
        description="See how Bedmax moved its Business Central on-premises support to Dynamics Square and upgraded from version 22 to 25 without replacing the system."
        image="/img/bedmax-case-study.png"
        imageAlt="Bedmax case study – Dynamics Square"
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
                  <h1>Microsoft Dynamics 365 Business Central Support and Upgrade for Manufacturing</h1>
                  <p>How Bedmax Changed Support Partners and Upgraded Microsoft Dynamics 365 Business Central to Build a Stronger Base for Production and Quality Data</p>
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
                clientName="Bedmax"
                logo="/img/case-study-logos/bedmax-logo.png"
                meta={[
                  { icon: "bi-gear", label: "Manufacturing" },
                  { icon: "bi-geo-alt", label: "Northumberland, UK" },
                  { icon: "bi-people", label: "15–16 Full Users" },
                ]}
                title="A Crux of the Case Story"
              >
                  <p><strong>Bedmax</strong>, a Northumberland manufacturer of premium wood-shavings horse bedding, had moved from <a href="/dynamics-nav-to-business-central/" className="u-i">Dynamics NAV to Business Central</a> on-premises, but the result left gaps. Approval workflows and production quality data were weak points, and the long-standing partner relationship was no longer meeting the business’s needs. Dynamics Square took over support of the live Business Central system and <a href="/dynamics-365-business-central-upgrade/" className="u-i">upgraded it from version 22 to version 25</a>.</p>
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
                <p>Bedmax produces wood-shavings bedding for horses and sells across the UK and internationally. The business runs its finance, sales, purchasing, inventory, accounts receivable and accounts payable on <a href="/products/dynamics-365-business-central/" className="u-i">Microsoft Dynamics 365 Business Central</a>.</p>
                <p>The company had worked with the same Microsoft partner for around 12 years. That partner moved Bedmax from Dynamics NAV to Business Central, which went live on-premises in October 2023. The partner had pushed for a cloud deployment, but Bedmax chose to stay on-premises.</p>
                <p>Although Bedmax is a manufacturer, it does not use the <a href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">Business Central manufacturing module</a>. Production runs outside the ERP, and the system carries a modest amount of custom development. Reporting relies on Jet Reports.</p>
                <p>Around 15 to 16 people use Business Central as full users, and the business holds about 50 licences in total. A new Director of Finance joined and began reviewing how well the system served the business.</p>
                <p>Two issues stood out: approval workflows did not work the way the team needed, and there was no reliable way to capture production and quality data. Bedmax wanted a partner who knew Business Central well and could support the system it already had.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="busine_service_bottom-left custom012">
                <Image
                  src="/img/case-v-15.png"
                  className="fix-im"
                  alt="Bedmax business overview"
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
                    <p>Approval workflows in Business Central did not match how the business needed to authorise transactions.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>There was no structured way to capture production and quality data.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The long-standing partner had limited depth in Business Central, despite years of NAV experience.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The previous partner pushed a cloud move that did not suit the business at the time.</p>
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
                    <p>The system ran on an older Business Central version (22), falling behind Microsoft’s release cycle.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Custom development made support and upgrades harder to manage.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Reporting depended on Jet Reports, with <a href="/products/microsoft-power-bi/" className="u-i">Power BI</a> not yet in place.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>A new finance leader needed confidence that the platform could support future plans.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="section-header" style={{ marginTop: "40px", marginBottom: 0 }}>
                <p>Bedmax needed a partner who could stabilise the system it already had and help it get more value from Business Central.</p>
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
              <Image src="/img/case-v-16.png" alt="Bedmax Business Central support and upgrade requirements" width={633} height={561} />
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="ms-c-po">
                <ul>
                  <li><i className="bi bi-arrow-right"></i> <span><a href="/d365-business-central-support/" className="u-i">A support partner with deep, current Business Central expertise</a>.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Support for Business Central on-premises, respecting the decision to stay on-premises.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>An upgrade to a current, supported Business Central version.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Approval workflows that reflect real business processes.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A route to capturing production and quality data.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A full review of how the system was configured and used.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>Flexible support options, both ad hoc and prepaid.</span></li>
                  <li><i className="bi bi-arrow-right"></i> <span>A path to Power BI reporting in the future.</span></li>
                </ul>
                <p style={{ marginTop: "30px" }}><b>The goal was not to replace Business Central, but to make the existing investment work properly.</b></p>
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
                <p>Bedmax agreed clear objectives for the engagement:</p>
              </header>
            </div>
          </div>
          <div className="row g-3" style={{ paddingTop: "40px" }}>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Transfer Business Central support to Dynamics Square.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Upgrade Business Central on-premises from version 22 to version 25.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Review approval workflows and improve them where needed.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Assess the options for capturing production and quality data.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Keep custom development under control during the upgrade.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="card-929">
                <p>Prepare the platform for future reporting improvements.</p>
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
                <Image src="/img/case-v-17.png" alt="Bedmax Business Central support and upgrade" width={858} height={519} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-5">
              <div className="stic-ss section-header">
                <h2>Solutions Proposed by Dynamics Square</h2>
                <p>Dynamics Square proposed a combined support and upgrade engagement. The approach was to take ownership of the live system first, then upgrade it on a controlled timeline, so the business never lost continuity.</p>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="flex-c-card-scroll">
                <div className="flex-c-card">
                  <h3>Support Transition for Business Central On-Premises</h3>
                  <ul>
                    <li>Took over production support for Business Central on-premises version 22.</li>
                    <li>Reviewed the existing custom development to understand its role and upgrade impact.</li>
                    <li>Offered both ad hoc and prepaid support models, letting Bedmax choose the right level of cover.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Upgrade from Version 22 to Version 25</h3>
                  <ul>
                    <li>Planned and delivered the upgrade of Business Central on-premises from version 22 to version 25.</li>
                    <li>Assessed custom code for compatibility with the newer version.</li>
                    <li>Tested the upgraded system before go-live to protect daily operations.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>System Review and Workflow Improvement</h3>
                  <ul>
                    <li>Reviewed how Business Central was configured across finance, sales, purchasing and inventory.</li>
                    <li>Identified improvements to approval workflows.</li>
                    <li>Scoped options for capturing production and quality data alongside Business Central.</li>
                  </ul>
                </div>
                <div className="flex-c-card">
                  <h3>Customer References and Future Roadmap</h3>
                  <ul>
                    <li>Connected Bedmax’s leadership with <a href="/case-studies/" className="u-i">existing Dynamics Square customers</a> using Business Central for manufacturing and production data capture.</li>
                    <li>Outlined how Power BI could extend reporting beyond Jet Reports.</li>
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
                <p>The engagement gave Bedmax a supported, current Business Central platform and a partner focused on making it work for the business.</p>
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
                  <p>Business Central now runs on version 25, closer to Microsoft’s current release.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>Support is provided by a team with dedicated Business Central expertise.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The on-premises deployment the business chose is fully supported.</p>
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
                  <p>Custom development is documented and understood.</p>
                </div>
              </div>
              <div className="style-grid-1 style-grid-09">
                <div className="style-grid-icons">
                  <div className="grid-i-tick">
                    <i className="bi bi-check2"></i>
                  </div>
                </div>
                <div className="style-grid-content">
                  <p>The finance team has a clear roadmap for workflows and reporting.</p>
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
                <p><a href="/industries/manufacturing/" className="u-i">Many manufacturers</a> upgrade from NAV to Business Central and assume the hard part is over. Bedmax’s experience shows that the upgrade is only the start: the value depends on configuration, workflows and a partner who knows the current product well.</p>
                <p>Bedmax did not need a new ERP. It needed its existing Business Central investment supported properly, kept current and aligned with how the business actually works. <a href="/change-your-erp-partner-for-a-better-future/" className="u-i">Changing support partner</a> gave the new finance leadership a clear view of the system and a practical plan for improving it.</p>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="content-icons-modil-1">
                <p><b>The next phase of the journey is already defined:</b></p>
                <ul>
                  <li>Capturing production and quality data alongside Business Central.</li>
                  <li>Redesigned approval workflows.</li>
                  <li>Power BI reporting to complement or replace Jet Reports.</li>
                  <li>Ongoing review of custom code to reduce upgrade effort.</li>
                  <li>Regular upgrades to stay on supported Business Central versions.</li>
                  <li>A future review of the case for <a href="/microsoft-dynamics-365-cloud-vs-on-premise/" className="u-i">moving to the cloud</a>.</li>
                </ul>
                <p>With a stable, supported platform, Bedmax can now focus on using its data to improve production and quality.</p>
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

export default BedmaxBusinessCentralSupportUpgrade;
