import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industrieschemical.json';
import PageSeo from "../../../components/PageSeo";

const Chemical = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 ERP for Chemical Manufacturing"
        description="Run recipes, batches, lot traceability, quality control and hazardous materials in one system with Dynamics 365 ERP for chemical manufacturing."
        image="https://www.dynamicssquare.co.uk/img/chemical-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 ERP for Chemical Manufacturing</h1>
                <p>From recipe approval to the delivery note, every stage in the life of a chemical product sits in one connected system when you deploy Dynamics 365 for chemical manufacturing.</p>
                <p>Dynamics Square help you implement a chemical manufacturing ERP that is built around your processes.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to a Chemical ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
              <div className='m-b-image-nnn m-b-image-nna'>
                <Image
                  src="/img/chemical-00.png"
                  alt='Dynamics 365 ERP for Chemical Manufacturing'
                  width={1097}
                  height={656}
                  priority
                  sizes="(max-width: 768px) 100vw, 1097px"
                />
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
                <h2>What Dynamics 365 ERP for Chemical Manufacturing Does for Your Business</h2>
              </div>
              <p>Dynamics 365 ERP for chemical manufacturing gives a plant that blends, reacts, formulates or packs chemicals a single record of what it makes and how. Recipes, batches, ingredient lots, laboratory results, hazard classifications and the accounts sit in one database, so a chemist amending a formula, a planner scheduling a run and a driver collecting a pallet of drums all work from the same facts.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square recommends two ERP options for chemical manufacturing which include Dynamics 365 Business Central and Supply Chain Management. The final choice rests on recipe behaviour, site count and the amount of hazard handling the ERP should take on.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>This AI-powered Microsoft ERP is the usual home for smaller chemical businesses with set recipes and a single site. These businesses include paint and coatings makers, adhesive and sealant producers, cleaning product manufacturers, lubricant blenders and toll packers.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>It is built for chemical producers whose recipes flex with batch size or ingredient strength, whose reactions give off co-products or by-products, or whose operations stretch across several plants and companies. Specialty chemical, polymer and intermediate manufacturers are typical examples.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Your CLP classifications, safety data sheets, COSHH assessments and any COMAH duties are produced by your own people and systems. Dynamics 365 holds the records those duties lean on, such as which ingredient lots went into which batch, where hazardous stock is kept and which customers received a given batch.</p>
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
                <h2>UK Regulations and Dynamics 365 ERP for Chemical Manufacturing</h2>
              </div>
              <p>Five sets of UK rules shape how a chemical manufacturer&apos;s records need to behave. Each is summarised below, along with the data it draws on.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/chemical-01.png" alt="Classification, labelling and packaging under GB CLP" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Classification, labelling and packaging under GB CLP</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Anyone supplying substances or mixtures in Great Britain has to classify them against the GB CLP hazard criteria, label them with the right pictograms, signal words and hazard statements, and pack them safely. The Health and Safety Executive (HSE) is the agency for the regulation and keeps the GB mandatory classification list. Since 21 May 2026 the separate duty to notify classifications to HSE has been abolished, and the duty to classify remains. A change in a mixture&apos;s composition is a prompt to review its classification, which is why accurate formula data matters. Northern Ireland continues to follow EU CLP.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/chemical-02.png" alt="UK REACH" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UK REACH</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Companies that manufacture or import substances at one tonne or more a year need to register them. Amending regulations that took effect in August 2026 moved the transitional registration deadlines to 27 October 2029, 2030 and 2031, depending on the tonnage and hazard tier of the substance. Registration planning relies on annual tonnage by substance, and safety data sheets follow the UK REACH Annex II format.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/chemical-03.png" alt="COSHH" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>COSHH</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Control of Substances Hazardous to Health Regulations 2002 oblige employers to assess the risks from hazardous substances at work, control exposure, and plan, manage and monitor those controls. Supplier safety data sheets feed the assessments, so each ingredient and product record needs to point to the current version.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/chemical-04.png" alt="COMAH 2015" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>COMAH 2015</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Sites holding listed dangerous substances above threshold quantities fall under the Control of Major Accident Hazards Regulations 2015. Lower-tier sites prepare a major accident prevention policy. Upper-tier sites add a safety report, an internal emergency plan and a review at least every five years. HSE acts as competent authority alongside the Environment Agency in England, SEPA in Scotland or Natural Resources Wales. Tier status turns on how much of each listed substance is held, so dependable stock quantities by substance matter.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/chemical-05.png" alt="Carriage of dangerous goods" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Carriage of dangerous goods</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Carriage of Dangerous Goods and Use of Transportable Pressure Equipment Regulations 2009 give ADR, the international agreement on carrying dangerous goods by road, legal force in Great Britain. ADR expects many duty holders, including carriers, packers, fillers and loaders, to appoint a dangerous goods safety adviser, subject to exemptions such as small loads. Every consignment needs the correct classification, packaging, marking, labelling and paperwork.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <p>Behind each of these duties sits a record of what was made, how much, from what, and where it went. Keeping that kind of record is what a Dynamics ERP exists to do.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-three pd-con-63 pharma-purple-bg'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head pharma-sub-head-light'>
                <h2>Core Capabilities of Dynamics 365 for Chemical Manufacturing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Formulas and recipes</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-06.png" alt="Production BOM versions with certification status" width={40} height={36} />
                          <p>Production BOMs in Business Central, with dated versions and a certification status, so a recipe change takes effect once approved</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-07.png" alt="Formula versions that scale by quantity or ingredient percentage" width={40} height={36} />
                          <p>Formula management software for chemical manufacturing in Supply Chain Management, with approved versions that scale by quantity, ingredient percentage or consumption step</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-08.png" alt="Co-products and by-products from the same formula" width={40} height={36} />
                          <p>Co-products and by-products received into stock from the same formula in Supply Chain Management, with burden allocation for overheads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Batches, lots and traceability</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-09.png" alt="Batch and lot tracking with expiry dates" width={40} height={36} />
                          <p>Batch and lot tracking for chemical manufacturing in both products, giving every lot a number and expiry date from receipt or production</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-10.png" alt="Two-way lot genealogy" width={40} height={36} />
                          <p>Two-way genealogy, so a supplier lot leads to every batch and customer it reached, and a returned drum leads to its ingredient lots</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-11.png" alt="Batch attributes checked against a target range" width={40} height={36} />
                          <p>Batch attributes in Supply Chain Management that check measured values against a target range and raise a warning or error, plus batch merge and reservation by attribute</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Quality control</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-12.png" alt="Automatic quality inspections in Business Central" width={40} height={36} />
                          <p>Chemical quality control software inside Business Central, through the 2026 Quality Management module, which raises inspections automatically at goods receipt and finished output</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-13.png" alt="Lot blocking and quarantine bins" width={40} height={36} />
                          <p>Lot blocking that holds a failing lot back from sale or use until released, with quarantine bins for stock awaiting a decision</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-14.png" alt="Quality orders and statistical sampling plans" width={40} height={36} />
                          <p>A heavier quality toolkit in Supply Chain Management, with quality orders, formal non-conformance cases and statistical sampling plans</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Hazardous materials and planning</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-15.png" alt="Hazmat classes, packing groups and compatibility groups" width={40} height={36} />
                          <p>Hazmat set-up in Supply Chain Management, where regulations such as ADR carry classes, packing groups and compatibility groups, with a warning for incompatible loads</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-16.png" alt="Hazmat stock limits and shipment documents" width={40} height={36} />
                          <p>Hazmat stock checked against limits you define, with printable shipment documents including the shipper’s declaration and a road carriage document</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/chemical-17.png" alt="MRP, master scheduling and formula-based production orders" width={40} height={36} />
                          <p>MRP and master scheduling in both products, plus formula-based production orders in Supply Chain Management for batch and continuous processes</p>
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
                <h2>Dynamics 365 for Chemical Manufacturing: Business Central or Supply Chain Management?</h2>
              </div>
              <p>Chemical production runs on both Microsoft ERP. Recipe behaviour, site count and the amount of hazard handling you want inside the ERP are what separate them.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Your formulas are fixed recipes and batches repeat in the same quantities</span></li>
                  <li><i className="bi bi-check"></i><span>Production runs from one site and one legal entity</span></li>
                  <li><i className="bi bi-check"></i><span>You want lot tracking, expiry dates and quality inspections live soon, within a budget and timeline that a growing business can carry</span></li>
                  <li><i className="bi bi-check"></i><span>Hazard documents come from a specialist system or an AppSource extension</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Formulas scale by ingredient percentage or run in steps</span></li>
                  <li><i className="bi bi-check"></i><span>A single reaction produces a main product alongside co-products or by-products</span></li>
                  <li><i className="bi bi-check"></i><span>Production or storage spans several sites, companies or currencies</span></li>
                  <li><i className="bi bi-check"></i><span>You want hazard classes, compatibility checks and carriage documents managed inside the ERP, together with formal quality processes</span></li>
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
                      <td>Production BOMs with fixed quantities (Premium licence)</td>
                      <td>Formula-based production for batch and continuous processes, with co-products and by-products</td>
                    </tr>
                    <tr>
                      <td><b>Formula control</b></td>
                      <td>Production BOM versions with certification status</td>
                      <td>Formula versions with approval and activation, plus scalable, percentage-based and step consumption formulas</td>
                    </tr>
                    <tr>
                      <td><b>Batch and lot tracking</b></td>
                      <td>Native lot tracking with expiry dates</td>
                      <td>Native, plus batch attributes with ranges and tolerances, batch merge and reservation by attribute</td>
                    </tr>
                    <tr>
                      <td><b>Quality control</b></td>
                      <td>Native Quality Management with automatic inspections and lot blocking</td>
                      <td>Quality orders, non-conformance management and statistical sampling</td>
                    </tr>
                    <tr>
                      <td><b>Hazardous materials</b></td>
                      <td>AppSource extensions</td>
                      <td>Hazmat regulations, classes, compatibility groups, stock limit report and shipment documents</td>
                    </tr>
                    <tr>
                      <td><b>Organisational scale</b></td>
                      <td>One site, one legal entity</td>
                      <td>Multiple entities, sites and currencies</td>
                    </tr>
                    <tr>
                      <td><b>Starting licence (UK)</b></td>
                      <td>Premium at £84.60/user/month</td>
                      <td>Standard at approximately £165/user/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Safety data sheets themselves are usually written in a specialist SDS or environmental, health and safety (EHS) tool, with the ERP linking each product to its current version. We find out early whether you already run such a tool and how it should connect to Dynamics 365.</p>
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
                <Image src="/img/chemical-18.png" alt="Best ERP for chemical manufacturing fit assessment" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Chemical Manufacturing?</h2>
                <p>The best ERP for chemical manufacturing follows the route your recipes, batches and hazard paperwork take through the plant. A drum-filling operation on fixed formulas needs far less from chemical manufacturing ERP software than a plant that splits one reaction into a main product and several by-products, and the table above shows where the dividing line falls.</p>
                <p>We run a fit assessment on every chemical enquiry before naming a product. It covers how your formulas behave, how large your batches are, how many sites you operate, how much hazardous stock you hold, and which rules apply to what you sell.</p>

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
                <h2>How Dynamics Square Implements Dynamics 365 ERP for Chemical Manufacturing</h2>
                <p>Dynamics Square follows Microsoft&apos;s Success by Design framework for chemical ERP implementations for UK-based manufacturers, and the first weeks go on getting formula and item data into shape.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square’s expert consultants sit with laboratory, production and warehouse staff to walk through your formulas, batch routes, hazard data and annual reporting duties.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Dynamics Square helps you finalize the platform, define scope and governance, and give formula and item data a named owner.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>Configuration runs alongside migration and checking of formula and item records, and connections to your SDS tool, laboratory system and other applications are built.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Planners, laboratory staff and warehouse teams run the system on real batches, are trained on the job, and settle a go-live date clear of your busiest production weeks.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>Once the system is live, Dynamics Square remains involved for early formula revisions, regulatory updates and process changes.</p>
              </div>
              <div className="pharma-timeline__dot">5</div>
              <div className="pharma-timeline__spacer"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="pharma-pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 Pricing for Chemical Manufacturers</h2>
              </div>
              <p>Mentioned below are Microsoft’s official Dynamics 365 pricings for chemical manufacturers in pounds, excluding VAT. Business Central Essentials covers finance, sales, purchasing and inventory, and anything involving production orders, BOMs or MRP needs Premium, so check each role against the descriptions before counting seats.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">from £61.50<span>/user/month</span></div>
                <p>It handles core financials plus sales, purchasing and inventory.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span>/user/month</span></div>
                <p>It includes everything in Essentials plus production orders, bills of materials, routings, MRP, master production scheduling and native Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">from £6.20<span>/user/month</span></div>
                <p>It gives read, approve and light self-service access.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">from approximately £165<span>/user/month</span></div>
                <p>It opens up the full process manufacturing toolset, formula management and advanced quality management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from approximately £235<span>/user/month</span></div>
                <p>It extends Standard with advanced analytics and financial planning capability.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">The scale of your project sets the budget. A blender or formulator running one site on Business Central needs less than a multi-site operation on Supply Chain Management with formula migration and hazmat set-up.</p>
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
                <Image src="/img/chemical-19.png" alt="UK chemical manufacturers working with Dynamics Square" width={540} height={536} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Chemical Manufacturers Work with Dynamics Square?</h2>
                <p>Every project starts with a close read of your formulas, item master and hazard records, because reports, traceability and costing all draw on that data and any mistake in it spreads.</p>
                <p>Dynamics Square recommends by fit and expects you to hold us to it. Ask for the reasons behind a recommendation and we set them out against your formulas, sites and stored quantities.</p>
                <p>Dynamics Square has over 60+ implementations in manufacturing and 35+ manufacturing and supply chain consultants with deep expertise in both Business Central and Supply Chain Management. So, the differences between the products come from hands-on experience.</p>
                <p>Formula revisions, regulatory updates such as the 2026 changes to GB CLP notification and UK REACH deadlines, and new product launches all arrive after go-live. We stay on to help your team absorb them.</p>
                <p>Dispatch stops quickly when a drum is mislabelled or a batch has gaps in its history, so we work alongside your quality and compliance people.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to a Chemical ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>Frequently Asked Questions</h2>
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
                <h3 style={{fontSize:'32px'}}>Run Every Formula, Batch and Delivery from One Record</h3>
                <p>Keep recipes, lot histories, laboratory results and hazard records in a single place, so an audit, a customer question or a recall begins with answers already on screen.</p>
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

export default Chemical;
