import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../components/useCardScrollEffect";
import faqData from '../../public/data/industriespharmaceutical.json';
const INDDD = () => {

  useCardScrollEffect()
      const [visibleCount, setVisibleCount] = useState(5);
  
    const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 3);
    };

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
        <meta property="og:title" content="Dynamics 365 ERP for Pharmaceutical Manufacturing | Dynamics Square UK " />
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
                <h1>Dynamics 365 ERP for Pharmaceutical Manufacturing</h1>
                <span className='large-heading'>Every Process Connected. Every Decision Profitable</span>
                <p>Traceable batches, controlled expiry dates and audit-ready quality management, delivered by a Microsoft solutions partner that understands MHRA-regulated manufacturing.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Request a Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
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
              <p style={{marginBottom:'40px'}}><b>Microsoft answers this differently depending on scale, through two distinct products, and the choice between them shapes everything that follows on this page.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4>Dynamics 365 Business Central</h4>
                </div>
                <p>It suits formulation houses, tableting and packaging operations, nutraceutical producers and contract manufacturers running fixed recipes at small to mid-sized scale.</p>
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
          <div className="row">
            <div className="col-lg-8">
              <div>
                <p>UK manufacturers currently have flexibility on packaging technology, alongside a consistent level of pressure on batch documentation, quality records and MHRA inspection readiness.</p>
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
                      <h3>Expiry and shelf-life control</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Mandatory expiry date capture on any item flagged for tracking</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>First-Expired-First-Out (FEFO) picking, so warehouse teams and automated logic always clear ageing stock before it turns over into fresher batches</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Advance alerts as shelf-life deadlines approach, rather than discovering them at the point of sale</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Quality management</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Business Central&apos;s native Quality Management module (added in the 2026 release wave): inspection templates, pass/fail grading and quarantine, built into the core product</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Supply Chain Management&apos;s advanced quality orders, non-conformance management, CAPA workflows and statistical sampling for higher-complexity operations</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Quality holds recorded against the batch itself, visible to anyone looking at that stock</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Production and planning</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Demand-driven production scheduling through MRP and MPS, weighed against the capacity you actually have</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Formula-based planning in Supply Chain Management that adjusts ingredient quantities automatically for potency and yield variance</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/wholesale-pic-04.png" alt="wholesale-pic-04" width={40} height={36} />
                          <p>Bin-level inventory, temperature-sensitive storage zones and consumption-based reorder points</p>
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
                <span>Talk to Us About Your Production Process &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Aspects/Parameters</th>
                      <th>Business Central</th>
                      <th>Supply Chain Management</th>
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
                <span>Get a Platform Recommendation &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
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
                <h2>What Is the Best Dynamics 365 ERP for Pharmaceutical Manufacturing? </h2>
                <p>The best ERP for pharmaceutical manufacturing is the one that matches your actual production process, and that&apos;s a different answer for a formulation house than it is for an API manufacturer. Buying more platform than your operation needs adds cost and complexity for little real benefit; buying less means outgrowing the system before the implementation has even paid for itself.</p>
                <p>We run a fit assessment with every pharmaceutical enquiry before recommending a platform, covering your production style, batch complexity, site count and compliance obligations.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Book Your Free Fit Assessment &nbsp;<i className="bi bi-arrow-right"></i></span>
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
          <p>
            Every pharmaceutical engagement runs through Microsoft&apos;s
            Success by Design framework. Validation and documentation get
            built into the plan from the outset, as working parts of it from
            day one.
          </p>
        </div>
      </div>
    </div>

    <div className="pharma-timeline">
      <div className="pharma-timeline__line"></div>

      <div className="pharma-timeline__row">
        <div className="pharma-timeline__card pharma-timeline__card--left">
          <h4>Discover</h4>
          <p>
            We sit down with your production and quality teams to understand
            how batches move through your facility today.
          </p>
        </div>

        <div className="pharma-timeline__dot">1</div>

        <div className="pharma-timeline__spacer"></div>
      </div>

      <div className="pharma-timeline__row">
        <div className="pharma-timeline__spacer"></div>

        <div className="pharma-timeline__dot">2</div>

        <div className="pharma-timeline__card pharma-timeline__card--right">
          <h4>Initiate</h4>
          <p>
            We lock down scope, decide on the platform and agree how the
            project will be governed.
          </p>
        </div>
      </div>

      <div className="pharma-timeline__row">
        <div className="pharma-timeline__card pharma-timeline__card--left">
          <h4>Implement</h4>
          <p>
            The system takes shape and validation paperwork gets written in
            parallel with it.
          </p>
        </div>

        <div className="pharma-timeline__dot">3</div>

        <div className="pharma-timeline__spacer"></div>
      </div>

      <div className="pharma-timeline__row">
        <div className="pharma-timeline__spacer"></div>

        <div className="pharma-timeline__dot">4</div>

        <div className="pharma-timeline__card pharma-timeline__card--right">
          <h4>Prepare</h4>
          <p>
            Your team tests the system against real scenarios and trains on
            it before go-live.
          </p>
        </div>
      </div>

      <div className="pharma-timeline__row">
        <div className="pharma-timeline__card pharma-timeline__card--left">
          <h4>Operate</h4>
          <p>
            We stay involved through the first audits and the process tweaks
            that inevitably follow.
          </p>
        </div>

        <div className="pharma-timeline__dot">5</div>

        <div className="pharma-timeline__spacer"></div>
      </div>
    </div>

    <Link
      href="#exampleModal"
      data-bs-toggle="modal"
      className="btn-get-started scrollto pharma-timeline__cta"
    >
      <span>
        Get Your Free Migration Assessment&nbsp;
        <i className="bi bi-arrow-right"></i>
      </span>
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
                <div className="pharma-pricing-card__price">from £61.50<span>/user/month</span></div>
                <p>It covers core financials, sales, purchasing and inventory</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span>/user/month</span></div>
                <p>It adds production orders, BOMs, routings, MRP, MPS and native Quality Management module</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">from £6.20<span>/user/month</span></div>
                <p>It offers read, approve and light self-service access</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">from approximately £165<span>/user/month</span></div>
                <p>It offers full process manufacturing engine, formula management and advanced quality management tools</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from approximately £235<span>/user/month</span></div>
                <p>It offers layers in advanced analytics and financial planning capability</p>
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
                <h2>Why UK Pharmaceutical Manufacturers Work with Dynamics Square</h2>
                <p>Regulated manufacturing sits at the centre of how we scope a project from our very first conversation with you. Traceable batches, documented quality decisions and audit-ready validation records all get planned in from day one.</p>
                <p>Dynamics Square recommends platforms honestly. Where Business Central fits, we say so; where Supply Chain Management makes more sense for your operation, we say that instead, because matching the tool to your operation matters more than which product we happen to sell more of.</p>
                <p>Cross-product certification runs deep on our team, spanning both Business Central and Supply Chain Management, so you&apos;re getting a genuine comparison rather than a pitch angled towards whichever platform we know best.</p>
                <p>Go-live is where the relationship really begins. We stay close through the audits that follow, the change requests that come up, and the process refinements your operation needs as it grows.</p>
                <p>In an industry where the margin for error is measured in patient safety, we work as a genuine partner inside your quality culture.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to a Pharma ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
       <section className="solution-faq faq solution-faq-r">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 ">
                    <div className="solution-new-banner-sub-head text-center">
                      <h2>Have you got
                        questions about Dynamics 365 for Pharmaceutical Manufacturing?</h2>
                      <p>Click through to our FAQ for the best answers!</p>
                    </div>
                  </div>
                </div>
      
      
                <div className="row justify-content-center mar-top-7">
                  <div className="col-lg-8">
                    <div className="accordion accordion-flush" id="faqlist1">
                      {faqData.slice(0, visibleCount).map((faq) => (
                        <div className="accordion-item" key={faq.id}>
                          <h3 className="accordion-header">
                            <button
                              className="accordion-button collapsed"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq-content-${faq.id}`}
                            >
                              {faq.question}
                            </button>
                          </h3>
                          <div
                            id={`faq-content-${faq.id}`}
                            className="accordion-collapse collapse"
                            data-bs-parent="#faqlist1"
                          >
                            <div
                              className="accordion-body"
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
      
                    {visibleCount < faqData.length && (
                      <div className="text-center mt-4">
                        <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                          Load More <i className="bi bi-chevron-down"></i>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-cta-001'>
                <h3 style={{fontSize:'32px'}}>Get an ERP That Fits How Your Facility Runs</h3>
                <p>Get the batch traceability, expiry control and quality workflow your team needs to manufacture confidently and face an MHRA inspection with real composure.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Request a Free Consultation Today &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default INDDD;
