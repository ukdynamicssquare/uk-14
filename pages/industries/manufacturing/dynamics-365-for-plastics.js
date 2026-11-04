import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesplastics.json';
import PageSeo from "../../../components/PageSeo";

const Plastics = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Plastics Manufacturing | Dynamics Square UK"
        description="Transform plastics manufacturing with Dynamics 365 ERP. Improve production efficiency, manage complex processes, control inventory and streamline supply chain operations."
        image="https://www.dynamicssquare.co.uk/img/plastics-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Plastics Manufacturing</h1>
                <p>Dynamics 365 ERP for plastics manufacturing lets you trace every kilogram of resin from delivery note to finished part, with scrap, regrind, moulds and machine time recorded against the same item numbers. Dynamics Square helps you set up this unified platform with consultants who know how a plastics plant runs.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to a Plastics ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/plastics-00.png"
                  alt='Dynamics 365 ERP for plastics manufacturing: rows of plastic bottles with blue caps on a production line'
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
                <h2>What Dynamics 365 for Plastics Manufacturing Does for Your Business</h2>
              </div>
              <p><Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> helps plastics manufacturers manage purchasing, raw materials, production, quality checks, inventory, shipping and finances in one system. It supports processes such as moulding, extrusion, blow moulding, thermoforming and compounding, while tracking material costs from resin purchase to finished parts.</p>
              <p>Production errors can quickly affect costs and quality. For example, a four-cavity mould running on a 30 second cycle can produce 480 parts per hour. A mislabelled resin batch, delayed colour change or unrecorded regrind can therefore affect hundreds of parts before anyone notices.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square recommends two Dynamics 365 products for plastics manufacturers. The right choice depends on your production processes, plant size and operational needs.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central suits custom moulders, extruders and thermoformers that make a defined range of products at one or a few sites. It supports <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production orders</Link>, scrap recording, resin lot tracking, quality inspections, machine schedules and material planning.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Supply Chain Management suits compounders, blenders and manufacturers managing complex production across several plants. It supports formula-based production, batch tracking, regrind recovery, production scheduling, <Link href="/products/dynamics-365-supply-chain-management/asset-management/" className="u-i">equipment maintenance</Link> and shop floor reporting.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Customer approvals and regulatory compliance depend on your quality processes, testing and supplier documents. Dynamics 365 helps maintain the material batch records, inspection results and production history needed to support these requirements. The following sections explain the key features.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Plant &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>What UK Rules Ask of a Plastics Manufacturer&apos;s Records</h2>
              </div>
              <p>Four areas of UK law and customer requirements shape the records plastics manufacturers must maintain. These records support packaging reports, food contact compliance, customer audits and material traceability. An ERP system helps organise this information but does not replace legal advice or established quality procedures.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/plastics-01.png" alt="Plastic Packaging Tax and recycled plastic content" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Plastic Packaging Tax</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Plastic Packaging Tax may apply to UK made or imported packaging containing less than 30% recycled plastic. The rate is £228.82 per tonne. Businesses reaching the threshold must register, keep required records and complete due diligence checks. Recording recycled and virgin material weights for each job supports accurate tax reporting.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/plastics-02.png" alt="Packaging producer responsibility reporting" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Packaging Producer Responsibility</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Under packaging producer responsibility rules, businesses must register with the environmental regulator and report packaging they supply. Moulders and film manufacturers serving brand owners may need to provide packaging weights and material types. Keeping this information by product or job helps customers prepare reports about packaging placed on the market.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/plastics-03.png" alt="Food contact plastics compliance" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Plastics That Touch Food</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UK food contact rules cover plastics that touch food, alongside safety and manufacturing practice requirements. Suppliers may need a written declaration naming the manufacturer, describing the material and confirming compliance. Trading Standards or Environmental Health officers may request evidence. Material specifications, supplier certificates and batch records help teams assemble documents.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/plastics-04.png" alt="Customer quality requirements such as IATF 16949 and PPAP" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Customer Quality Requirements</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Automotive customers expect suppliers to follow IATF 16949 requirements and may request production part approval process (PPAP) submissions. Medical and consumer goods customers may ask for batch traceability and material certificates. Linking resin lots to inspections, production orders and shipments helps teams identify parts and respond during audits or complaints.</p>
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
                <h2>Core Capabilities of Dynamics 365 for Plastics Manufacturing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Materials and Resin Lots</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-05.png" alt="Resin, masterbatch and additive lot tracking" width={40} height={36} />
                          <p>Track resin, masterbatch, additives, fillers and packaging by item and lot number, covering bags, octabins, tanker loads and silo deliveries.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-06.png" alt="Material lots linked to production orders and finished batches" width={40} height={36} />
                          <p>Link material lots to production orders and finished product batches, helping teams identify which raw materials went into each part.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-07.png" alt="Forward and backward tracing from supplier lot to customer" width={40} height={36} />
                          <p>Trace supplier lots forward to finished products and customers, or backward from a defective part to the resin batch involved.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-08.png" alt="Incoming resin inspections, certificate checks and material holds" width={40} height={36} />
                          <p>Configure incoming resin inspections, certificate checks and material holds through suitable quality tools, with unit conversions for kilograms, bags and parts.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Formulas, Batches and Quality</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-09.png" alt="Versioned production bills of materials with certification status" width={40} height={36} />
                          <p>Business Central production bills of materials support dated versions and certification status, helping teams use approved material lists for production and planning.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-10.png" alt="Approved formulas with percentage-based ingredients" width={40} height={36} />
                          <p>Supply Chain Management supports approved formulas, batch quantities, percentage-based ingredients, and co products or by products from production runs.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-11.png" alt="Batch test results such as melt flow and moisture" width={40} height={36} />
                          <p>Record batch test results, such as melt flow and moisture, and reserve or combine suitable batches based on product attributes.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-12.png" alt="Quality orders, sampling plans and first piece inspections" width={40} height={36} />
                          <p>Supply Chain Management quality orders and sampling plans support regular testing, including first piece inspections and checks during production.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Planning, Moulds and Machines</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-13.png" alt="Machine capacity, working calendars and production steps" width={40} height={36} />
                          <p>Set machine capacity, working calendars and production steps, including setup and running times for each operation.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-14.png" alt="Material planning and master planning proposals" width={40} height={36} />
                          <p>Both products support material planning, while Supply Chain Management adds broader master planning to turn demand into purchasing and production proposals.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-15.png" alt="Press and mould maintenance scheduled by shot count" width={40} height={36} />
                          <p>Record presses and moulds as assets, then use Supply Chain Management to schedule maintenance by time or usage, such as machine shots.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-16.png" alt="Shop floor production reporting by operators" width={40} height={36} />
                          <p>Supply Chain Management shop floor tools let operators report production progress directly from the factory floor.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Scrap, Waste and Reporting</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-17.png" alt="Expected scrap allowances on material lists and routings" width={40} height={36} />
                          <p>Set expected scrap allowances in material lists and production steps to account for material waste and reduced output during manufacturing.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-18.png" alt="Actual scrap recorded by operation with reason codes" width={40} height={36} />
                          <p>Record actual scrap by operation in Business Central, using reason codes where configured and keeping rejected quantities separate from good output.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-19.png" alt="Recovered regrind returned to inventory" width={40} height={36} />
                          <p>Supply Chain Management can return recovered regrind to inventory as a co product or by product, with costs allocated as configured.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/plastics-20.png" alt="Scrap rate, yield and margin analysis in Power BI" width={40} height={36} />
                          <p>Use <Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> and Excel to analyse scrap rates, production yields and product margins using shared business data.</p>
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
                <h2>Business Central or Supply Chain Management for Plastics Manufacturing</h2>
              </div>
              <p>Dynamics Square offers two Dynamics 365 options for plastics manufacturers, Business Central and Supply Chain Management, with the right choice depending on your production processes, plant size and operational needs.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You make products using established material lists and production steps.</span></li>
                  <li><i className="bi bi-check"></i><span>Moulding, extrusion or thermoforming takes place at one or a few plants.</span></li>
                  <li><i className="bi bi-check"></i><span>You need resin lot tracking, incoming material checks and scrap recording.</span></li>
                  <li><i className="bi bi-check"></i><span>Your production relies on fixed material lists and standard production orders.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You blend or compound materials using formulas with set proportions.</span></li>
                  <li><i className="bi bi-check"></i><span>You recover regrind or other by products for reuse, resale or further processing.</span></li>
                  <li><i className="bi bi-check"></i><span>You need maintenance schedules based on mould or machine usage, such as shot counts.</span></li>
                  <li><i className="bi bi-check"></i><span>You manage several plants, companies or currencies, or need operators to record production progress directly in the system.</span></li>
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
                      <th>Aspects</th>
                      <th>Business Central</th>
                      <th>Supply Chain Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Production style</b></td>
                      <td>Production orders built from BOMs and routings (Premium licence)</td>
                      <td>Process manufacturing from formulas, alongside discrete production orders</td>
                    </tr>
                    <tr>
                      <td><b>Recipe control</b></td>
                      <td>BOM versions carrying a certification status</td>
                      <td>Formulas that are approved, then activated for use</td>
                    </tr>
                    <tr>
                      <td><b>Lot tracking</b></td>
                      <td>Lot numbers assigned through item tracking codes</td>
                      <td>Batch numbers holding attributes, with merge and attribute-based reservation</td>
                    </tr>
                    <tr>
                      <td><b>Planning</b></td>
                      <td>MRP plus work and machine centres on calendars</td>
                      <td>Master planning with finite capacity scheduling</td>
                    </tr>
                    <tr>
                      <td><b>Scrap handling</b></td>
                      <td>Allowance percentages on BOM and routing lines; scrap codes in the output journal</td>
                      <td>Allowances on formula and BOM lines; scrap reported from the shop floor</td>
                    </tr>
                    <tr>
                      <td><b>Co-products and by-products</b></td>
                      <td>Set up by your implementation team</td>
                      <td>Built in, with cost allocation across outputs</td>
                    </tr>
                    <tr>
                      <td><b>Mould and press upkeep</b></td>
                      <td>Fixed assets, or a partner maintenance app</td>
                      <td>Asset Management with plans driven by counters</td>
                    </tr>
                    <tr>
                      <td><b>Quality control</b></td>
                      <td>Quality Management with lot blocking</td>
                      <td>Quality orders, sampling plans and non-conformance cases</td>
                    </tr>
                    <tr>
                      <td><b>Group structure</b></td>
                      <td>A single operating site</td>
                      <td>Several legal entities, sites and currencies</td>
                    </tr>
                    <tr>
                      <td><b>Starting licence (UK)</b></td>
                      <td>Premium: £84.60/user/month</td>
                      <td>Standard: £165/user/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Blenders, dryers, presses, scales and label printers connect to Dynamics 365 through <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">integrations</Link> or partner tools. During discovery, Dynamics Square identifies each device and defines the data it sends and receives, keeping material, batch and production details consistent across machines and labels.</p>
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
                <Image src="/img/plastics-21.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above an injection moulding machine, representing an ERP fit assessment for plastics manufacturing" width={540} height={712} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Plastics Manufacturing?</h2>
                <p>A custom moulder making 300 parts, a compounder blending materials to specific formulas and a packaging manufacturer running several production lines have different needs. The right <Link href="/industries/manufacturing/" className="u-i">ERP for plastics manufacturing</Link> should match your products, production methods and plant operations.</p>
                <p>Dynamics Square assesses your moulding, extrusion or compounding processes, product range, number of plants, regrind recovery, mould maintenance and customer audit requirements. Choosing a system that exceeds your needs can add cost and complexity, while a basic system may leave formula records, scrap reports and tooling maintenance in spreadsheets.</p>

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
                <h2>Dynamics 365 Implementation for Plastics Manufacturers: How Dynamics Square Does It</h2>
                <p>Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link> for plastics ERP implementation in the UK. Early workshops define how materials and scrap are recorded because these details affect production costs and reporting.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square examines your plant from material receiving to regrinding, learning how your team handles resin, tooling and production waste.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>At this stage, we confirm the project scope, select the right ERP system and assign owners for product, formula and tooling records.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>Dynamics Square configures material records, batch tracking, production steps, scrap codes and costing. The team then imports product, supplier and open order data and checks it against your existing records.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Dynamics Square trains supervisors and operators to run production jobs from resin receipt to dispatch. Your team also tests whether one resin batch can be traced to every customer who received the finished products.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>At this stage, we support your team after launch as new tools arrive, materials change and customer or regulatory audits take place.</p>
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
                <h2>Dynamics 365 for Plastics Manufacturing Pricing in the UK</h2>
              </div>
              <p>Prices below come from <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">Microsoft&apos;s 2026 UK list</Link>, in pounds before VAT. Partner products for scales, blenders or mould monitoring, along with the proportion of full to occasional users, move the final total.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">From £61.50<span> per user per month</span></div>
                <p>It comes with finance, sales, purchasing, inventory and lot tracking.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From £84.60<span> per user per month</span></div>
                <p>It is the licence a production plant needs for production orders, BOMs, routings, MRP and Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">From £6.20<span> per user per month</span></div>
                <p>It is for colleagues who look things up, approve requests or make small edits.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">From roughly £165<span> per user per month</span></div>
                <p>It comes with formulas, master planning, quality orders and Asset Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From roughly £235<span> per user per month</span></div>
                <p>It is everything that Standard is plus advanced analytics and financial planning.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">A single-site plastics manufacturer typically needs a simpler <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central implementation</Link>, while a multi-site operation using <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link> requires more extensive setup. Costs depend on the number of plants, the complexity of production formulas and the amount of product and maintenance data that needs transferring.</p>
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
                <Image src="/img/plastics-22.png" alt="Two business professionals shaking hands, representing UK moulders, extruders and compounders working with Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Moulders, Extruders and Compounders Work with Us</h2>
                <p>60+ <Link href="/case-studies/" className="u-i">Manufacturing implementations</Link> and a team of 35+ manufacturing and supply chain consultants bring practical industry knowledge to your ERP project.</p>
                <p>Dynamics Square starts by understanding how your plant handles resin, colour changes, regrind and tooling. These details help shape a system around your actual production processes and material costs.</p>
                <p>You receive one clear product recommendation, with reasons based on your needs. If Business Central fits your plant, we explain why. If Supply Chain Management suits your operations better, we explain that choice too.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> hold Microsoft certifications across both products, helping you compare their capabilities based on practical implementation experience.</p>
                <p><Link href="/our-services/dynamics-365-support-services/" className="u-i">Support continues after launch</Link> through new product introductions, resin substitutions, mould changes and customer audits. This helps your team keep production records accurate as operations change.</p>
                <p>Customers expect deliveries and paperwork to match their orders. Dynamics Square helps your team maintain reliable material, quality and shipment records to meet those expectations.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to a Plastics ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
    </>
  );
};

export default Plastics;
