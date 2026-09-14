import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import useCardScrollEffect from "../../components/useCardScrollEffect";

const DManu = () => {

  useCardScrollEffect()

  return (
    <>
      <Head>
        <title>Dynamics 365 ERP for Pharmaceutical Manufacturing | Dynamics Square UK</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta
          name="description"
          content="Batch traceability, expiry control and MHRA-ready quality management in one system. Compare Business Central and Supply Chain Management for UK pharmaceutical manufacturers."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-pharmaceutical-manufacturing/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Dynamics 365 ERP for Pharmaceutical Manufacturing | Dynamics Square UK " />
        <meta property="og:description" content="Batch traceability, expiry control and MHRA-ready quality management in one system. Compare Business Central and Supply Chain Management for UK pharmaceutical manufacturers." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-pharmaceutical-manufacturing/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/wholesale-pic-01.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Dynamics 365 ERP for Pharmaceutical Manufacturing | Dynamics Square UK" />
        <meta name="twitter:description" content="Batch traceability, expiry control and MHRA-ready quality management in one system. Compare Business Central and Supply Chain Management for UK pharmaceutical manufacturers." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/wholesale-pic-01.png" />
      </Head>
      <div className='solution-new-banner-one solution-new-banner-one-colo'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 for Wholesale and Distribution</h1>
                <span className='large-heading'>Every Process Connected. Every Decision Profitable</span>
                <p>Dynamics 365 for Wholesale and Distribution is built for distributors who want their data, processes, people, and systems aligned.
                  Invest in a solution that connects every process so that every decision creates profit.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Start Your Distribution Transformation &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='m-b-image-nnn'>
                <Image src="/img/wholesale-pic-01.png" alt='bc-support-banner' width={1097} height={656} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="partner-trust-strip">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-9">
              <div className="partner-trust-strip__stats">
                <div className="partner-trust-strip__label">
                  <span>Serving the UK, USA &amp; Canada Businesses</span>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>500+</h3>
                  <p>Innovative Implementations</p>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>150+</h3>
                  <p>Certified Professionals</p>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>14+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner for Business Applications, with a Specialist designation in Small and Midsize Business Management"
                width={220}
                height={202}
                className="partner-trust-strip__badge"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="erp-expect-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>What Pharmaceutical Manufacturers Expect From an ERP</h2>
              </div>
              <p>A pharmaceutical manufacturer needs more than software that counts stock. It needs a system that can answer, on demand, which raw material lot went into which batch, who tested it, what the result was and where every finished unit ended up.</p>
              <p>Dynamics 365 ERP for Pharmaceutical Manufacturing builds that answer into the data model itself, so a lot number picked up at goods-in follows the product all the way through production, quality release and dispatch.</p>
              <p><b>Microsoft answers this differently depending on scale, through two distinct products, and the choice between them shapes everything that follows on this page.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4>Dynamics 365 Business Central</h4>
                </div>
                <p>It suits formulation houses, tabletting and packaging operations, nutraceutical producers and contract manufacturers running fixed recipes at small to mid-sized scale.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4>Dynamics 365 Supply Chain Management</h4>
                </div>
                <p>It suits organisations manufacturing active ingredients or biologics, and groups running production across several sites, where formulas need adjusting for potency and co-products come out of the same process.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Neither product arrives pre-certified against MHRA&apos;s Good Manufacturing Practice standards. Your organisation earns that status by operating validated procedures the MHRA can inspect and sign off on. Dynamics 365&apos;s part in that story is the underlying traceability, audit trail and quality workflow, the groundwork that turns an inspection into a straightforward walkthrough rather than a scramble. We unpack exactly how, below.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Operation &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="uk-reg-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 for The UK Regulatory Environment</h2>
              </div>
              <p>Three frameworks shape how pharmaceutical manufacturers in the UK need their systems to behave.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UK GMP, enforced by the MHRA</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Good Manufacturing Practice in the UK sits under the Human Medicines Regulations 2012, with the MHRA&apos;s Orange Guide compiling the legislation and expected practice into one reference. UK GMP stays closely aligned with EU GMP (EudraLex Volume 4) and PIC/S standards, since the MHRA remains a PIC/S member, so UK manufacturers exporting internationally are working to familiar, internationally recognised principles.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Good Distribution Practice, for anyone moving product</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Wholesale distribution of medicines in the UK falls under GDP, which the MHRA inspects alongside GMP. Storage conditions, temperature control and chain-of-custody records all need to hold up to the same scrutiny as manufacturing records.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Post-Brexit labelling and the falsified medicines position</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Since the Windsor Framework took effect on 1 January 2025, medicines authorised for the UK market, including Northern Ireland, carry &quot;UK Only&quot; labelling as Britain&apos;s own packaging safety standard, replacing the EU Falsified Medicines Directive&apos;s 2D barcoded system. Existing UK safety requirements, including batch number and expiry date on the pack, remain in force, and the MHRA is still weighing up a UK-specific falsified medicines framework for the future. Manufacturers exporting into the EU or Northern Ireland under EU rules still need FMD-compliant serialisation on those specific product lines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-three pd-con-63 pharma-purple-bg'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head pharma-sub-head-light'>
                <h2>Core Capabilities:<br />What Problems Dynamics 365 Solves</h2>
              </div>
            </div>
          </div>
          {/* One capability group below — copy this whole .mycard block again for each additional group (e.g. Quality Management, Expiry Control, MHRA Compliance) */}
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability and batch genealogy</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Lot and batch numbers assigned automatically the moment stock arrives or is produced</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A finished pack traced back to its raw materials, and any raw material lot traced forward to every pack that used it, in one lookup</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A recall scoped in minutes, straight from the system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability and batch genealogy</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Lot and batch numbers assigned automatically the moment stock arrives or is produced</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A finished pack traced back to its raw materials, and any raw material lot traced forward to every pack that used it, in one lookup</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A recall scoped in minutes, straight from the system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability and batch genealogy</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Lot and batch numbers assigned automatically the moment stock arrives or is produced</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A finished pack traced back to its raw materials, and any raw material lot traced forward to every pack that used it, in one lookup</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>A recall scoped in minutes, straight from the system</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto pharma-capability-cta">
                <span>Speak to Our Expert Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pharma-compare-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Business Central ERP or Supply Chain Management: Which One to Choose?</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Dynamics 365 Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You formulate, package or tablet a defined product range with fixed recipes</span></li>
                  <li><i className="bi bi-check"></i><span>Your operation runs at roughly 10 to 250 employees</span></li>
                  <li><i className="bi bi-check"></i><span>You want genuine manufacturing and quality functionality, sized, priced and timed for a smaller to mid-sized operation</span></li>
                  <li><i className="bi bi-check"></i><span>Your production runs on fixed bills of materials</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Dynamics 365 Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You manufacture APIs, biologics or other potency-sensitive products</span></li>
                  <li><i className="bi bi-check"></i><span>Production spans multiple sites, entities or currencies</span></li>
                  <li><i className="bi bi-check"></i><span>You need native formula management with co-products and by-products</span></li>
                  <li><i className="bi bi-check"></i><span>Your quality function requires formal CAPA workflows and statistical sampling as standard</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pharma-compare-table">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Feature</th>
                      <th>Essentials</th>
                      <th>Team Members</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Manufacturing style</b></td>
                      <td>Discrete and repetitive (Premium licence)</td>
                      <td>Native/true process manufacturing</td>
                    </tr>
                    <tr>
                      <td><b>Batch and lot tracking</b></td>
                      <td>Native, FEFO included</td>
                      <td>Native, FEFO plus multi-attribute lot handling</td>
                    </tr>
                    <tr>
                      <td><b>Quality management</b></td>
                      <td>Built-in inspection templates and quarantine</td>
                      <td>Full quality orders, CAPA and statistical sampling</td>
                    </tr>
                    <tr>
                      <td><b>Formula and potency scaling</b></td>
                      <td>Fixed BOM only</td>
                      <td>Native</td>
                    </tr>
                    <tr>
                      <td><b>Multi-entity scale</b></td>
                      <td>Single mid-sized operation</td>
                      <td>Multi-entity, multi-site, multi-currency</td>
                    </tr>
                    <tr>
                      <td><b>Starting licence (UK)</b></td>
                      <td>Premium: £84.60/user/month</td>
                      <td>Standard: approximately £165/user/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">For manufacturers working under strict electronic signature requirements, most implementations pair Dynamics 365 with a dedicated electronic batch record (eBR) or quality management system (QMS). Dynamics 365 holds the materials, costing and production data; the eBR or QMS holds the validated batch record itself. We&apos;ll flag it early in discovery if your compliance position calls for that pairing.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Speak to Our Expert Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003-023'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="whole-image">
                <Image src="/img/wholesale-pic-27.png" alt="wholesale-pic-27" width={383} height={487} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-3 ">
                <div className="col-lg-12">
                  <div className="supprt-header-new-one">
                    <h2>Why Dynamics 365 is the Best ERP for Wholesale and Distribution Industry?</h2>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Connected Operations</h4>
                    <p>Finance, sales, inventory, and logistics operate in one space, improving communication and decision-making.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Scalable Platform</h4>
                    <p>Suitable for small, medium, and large distributors with flexible modules that grow with business needs.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Automation Built-In</h4>
                    <p>Reduces manual work while improving data accuracy and productivity.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Cloud-Powered Security</h4>
                    <p>Keeps business data safe and accessible anywhere.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>AI and Insights</h4>
                    <p>Transforms raw data into meaningful predictions that drive performance.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Tailored for the UK Market</h4>
                    <p>Perfect fit for businesses seeking ERP for wholesale distribution in the UK with compliance-ready modules and localisation support.</p>
                  </div>
                </div>
                <div className="col-lg-12 align-self-center">
                  <div className="card-700-bot">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Connect now  <i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <h3>Improve Your Distribution Cycle with the Right ERP</h3>
                <p>Deploy Dynamics 365 for your distribution business to keep your process aligned end-to-end.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get Started Now  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>
      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/wholesale-pic-28.png" alt="wholesale-pic-28" width={401} height={455} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Partnering with Dynamics Square, UK</h2>
                <p>Implementing wholesale and distribution ERP solutions works best with a trusted partner who understands your industry inside out.  </p>
                <p>Dynamics Square in the UK has helped several reputed trade and distribution businesses adopt Microsoft Dynamics 365 for the wholesale industry with smooth <a href="/our-services/dynamics-365-implementation-services/">implementation</a>, training, and support.</p>
                <p>As a Microsoft Dynamics 365 Partner in the UK, Dynamics Square brings certified expertise and hands-on guidance to help your business realise value faster.</p>
                <p>Whether you need automation, reporting, or warehouse visibility, our Dynamics 365 experts for wholesale distribution in the UK ensure your system delivers measurable results from day one.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Transform Your Business &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003s pd-con-67'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/wholesale-pic-29.png" alt="wholesale-pic-29" width={400} height={450} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h3>The Outcomes to Expect with Dynamics 365 For Wholesale and Distribution Industry</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Inventory accuracy above 95 per cent</span></li>
                  <li><i className="bi bi-check"></i><span>40 per cent faster order-to-cash cycle</span></li>
                  <li><i className="bi bi-check"></i><span>Clear margin insights across all channels</span></li>
                  <li><i className="bi bi-check"></i><span>Complete supplier and shipment traceability</span></li>
                  <li><i className="bi bi-check"></i><span>Single dashboard for all business data</span></li>

                </ul>
                <p>These are proven outcomes achieved by businesses already running Dynamics 365 Distribution Management through Dynamics Square, UK.</p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Schedule A Free Consultation Today <i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>




          </div>
        </div>
      </section>
      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>How Dynamics Square Implement: Step by Step</h2>
                <p>Every pharmaceutical engagement runs through Microsoft&apos;s Success by Design framework. Validation and documentation get built into the plan from the outset, as working parts of it from day one.</p>
              </div>
            </div>
          </div>
          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Assessment &amp; Readiness Check</h4>
                <p>We audit your current NAV environment, which includes version, customizations, integrations, and data volume, to scope the upgrade accurately before a single line of code moves.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Choose Your Path: Upgrade or Reimplementation</h4>
                <ul>
                  <li>Direct Upgrade: It is best if your NAV setup is lightly customised. Your processes, workflows, and historical data move into Business Central largely as-is.</li>
                  <li>Reimplementation: It is best if you want to modernise. We rebuild your configuration around current best practices while retaining historical NAV data for reference.</li>
                </ul>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Data Migration &amp; Customisation Review</h4>
                <p>We review your existing <a href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</a>, business processes, integrations, and operational priorities to understand your support requirements.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Testing &amp; Validation</h4>
                <p>We review your existing <a href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</a>, business processes, integrations, and operational priorities to understand your support requirements.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Go-Live &amp; Hypercare Support</h4>
                <p>We review your existing <a href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</a>, business processes, integrations, and operational priorities to understand your support requirements.</p>
              </div>
              <div className="pharma-timeline__dot">5</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">6</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Continuous Improvement &amp; Compliance Reviews</h4>
                <p>Once you are live, we keep checking in on performance, user adoption, and any new MHRA guidance, then tune workflows and reports so your system keeps pace with the business.</p>
              </div>
            </div>
          </div>
          <Link
            href="#exampleModal"
            data-bs-toggle="modal"
            className="btn-get-started scrollto pharma-timeline__cta">
            <span>Get Your Free Migration Assessment &nbsp;<i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>
      <section className="pharma-pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 Pricing for Pharmaceutical Manufacturers</h2>
              </div>
              <p>Figures below reflect Microsoft&apos;s published UK list pricing as of 2026, in GBP, excluding VAT. The number you actually pay moves with your user count, any compliance-specific extensions you need, and how much implementation work the rollout requires.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">£61.50<span>/user/month</span></div>
                <p>Handle enquiries, applications, admissions, and approvals from one place without long manual processes.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">£84.60<span>/user/month</span></div>
                <p>Stay connected with students, track interactions, and send updates based on their journey and needs</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Member</span>
                <div className="pharma-pricing-card__price">£6.20<span>/user/month</span></div>
                <p>See admissions, accounts, reports, and communication updates clearly through one connected dashboard.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">£61.50<span>/user/month</span></div>
                <p>Handle enquiries, applications, admissions, and approvals from one place without long manual processes.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">£84.60<span>/user/month</span></div>
                <p>Stay connected with students, track interactions, and send updates based on their journey and needs</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">A focused Business Central rollout for a pharma manufacturer in the UK generally costs somewhere between ten and thirty thousand pounds once implementation is added to licensing. A Supply Chain Management project spanning several sites, with validation work and compliance extensions layered in, climbs into six figures.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Get a Custom Quote &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DManu;
