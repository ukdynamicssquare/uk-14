import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesprinting.json';
import PageSeo from "../../../components/PageSeo";

const Printing = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Printing and Label Manufacturing"
        description="Optimise printing and label manufacturing with Dynamics 365. Manage production, inventory, supply chains and operations with a connected ERP solution."
        image="https://www.dynamicssquare.co.uk/img/printing-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Printing and Label Manufacturing</h1>
                <p>Deploy Dynamics 365 Erp for printing and label manufacturing to manage customer quotes, print orders, materials, production schedules, and deliveries in one connected system. Track every roll of stock and finished label while keeping production costs and delivery dates under control. Dynamics Square helps printing and label manufacturers implement Microsoft Dynamics 365 ERP around their production processes, equipment, and business needs.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to a Print ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/printing-00.png"
                  alt='Dynamics 365 ERP for printing and label manufacturing: close-up of inking rollers on a printing press'
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
                <h2>Dynamics 365 ERP for Printing and Label Manufacturing in the UK</h2>
              </div>
              <p>Dynamics 365 ERP for printing and label manufacturing connects job estimates, <Link href="/products/dynamics-365-business-central/sales-order-management/" className="u-i">customer orders</Link>, production, materials, quality checks, inventory, deliveries, and accounting in one system. It supports commercial printers, label manufacturers, digital printers, wide-format businesses, and print finishing companies. Teams can compare estimated and actual job costs while tracking the materials used for every order.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square helps printing businesses select the right Dynamics 365 system by assessing their production methods, job complexity, customer requirements, and factory operations.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central works well for printers and <Link href="/industries/manufacturing/dynamics-365-for-packaging/" className="u-i">packaging converters</Link> with standard products and one or a few production sites. It helps manage <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production orders</Link>, material lists, manufacturing steps, machine schedules, batch tracking, outsourced work, customer product codes, and quality inspections.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Larger printing businesses with several factories or complex customer requirements can use Supply Chain Management. It helps manage custom label options, ink formulas, production schedules, design changes, <Link href="/products/dynamics-365-supply-chain-management/asset-management/" className="u-i">machine maintenance</Link>, and warehouse operations.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Your quality team and customers remain responsible for approving designs, checking colours, and meeting regulatory requirements. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> maintains the material, production, and batch records needed to support these checks.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Print Business &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>UK Rules and Buyer Standards Behind Print and Label Records</h2>
              </div>
              <p>UK printing and label manufacturers must maintain accurate records to meet regulatory requirements and customer expectations. Four important areas influence the information they need to keep.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/printing-01.png" alt="Medicine labelling and packaging requirements" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Medicine Labelling</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Human Medicines Regulations 2012 set requirements for medicine packaging and leaflets. The MHRA also provides guidance on medicine labelling and packaging. <Link href="/industries/manufacturing/dynamics-365-for-pharmaceutical/" className="u-i">Pharmaceutical companies</Link> expect their label suppliers to control approved artwork versions and quantities printed. Printers need clear job and batch records to show which labels were produced, which versions were used, and how many were supplied.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/printing-02.png" alt="Food label ingredient and allergen information" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Food and Allergen Information</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Food Information Regulations 2014 cover ingredient and allergen information that must appear on food labels. Printers working with <Link href="/industries/manufacturing/dynamics-365-for-food/" className="u-i">food brands</Link> need to use the latest customer-approved artwork for every production run. Keeping approved designs, revision dates, and job records together helps prevent outdated information from appearing on labels and supports customer checks.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/printing-03.png" alt="GB CLP hazard labels on chemical products" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Hazard Labels on Chemical Products</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The GB CLP Regulation sets labelling requirements for <Link href="/industries/manufacturing/dynamics-365-for-chemical/" className="u-i">hazardous chemicals</Link> sold in Great Britain. These labels must display the correct hazard symbols, warning words, and safety statements. Printers must work from approved customer artwork and retain records linking each design version to its production orders. This helps identify which labels were printed and supplied to customers.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/printing-04.png" alt="Solvent emissions records and retailer audits" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Solvent Emissions and Retailer Audits</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Some printing operations using solvent-based inks and coatings must follow environmental rules controlling solvent emissions. These requirements can involve recording solvent use and related production details. Retailers and brand owners may also audit suppliers against standards such as BRCGS Packaging Materials. Accurate records of incoming materials, production batches, and finished goods help printers answer audit questions and demonstrate traceability.</p>
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
                <h2>Core Capabilities of Dynamics 365 for Printing and Label Manufacturing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Estimating, quoting and job costing</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-05.png" alt="Quotes built from materials and production steps" width={40} height={36} />
                          <p>Start a quote using the materials and production steps from a similar job. Include stock, press time, finishing, and subcontracting costs before adding your margin.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-06.png" alt="Actual job costs compared with estimates" width={40} height={36} />
                          <p>Production orders record actual material use, machine hours, labour, and subcontracting charges. Cost reports then compare these figures with estimates to show where costs changed.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-07.png" alt="Specialist print estimating apps for sheet layouts" width={40} height={36} />
                          <p>Specialist print estimating apps handle sheet layouts and artwork placement calculations. These apps connect with Dynamics 365 and are available through Microsoft AppSource.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-08.png" alt="Product configuration for label options" width={40} height={36} />
                          <p>Supply Chain Management helps manage labels with many customer options. Its product configuration feature checks each selection and creates the required material list and production steps.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Scheduling and the shop floor</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-09.png" alt="Presses and die cutters set up as work centres" width={40} height={36} />
                          <p>Set up presses, die cutters, laminators, slitters, and rewinders as separate work centres. Each centre can have its own working hours and production capacity.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-10.png" alt="Capacity-based scheduling on a production board" width={40} height={36} />
                          <p>Both products use material planning to suggest what businesses should purchase and produce. Supply Chain Management also offers capacity-based scheduling through a visual production board.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-11.png" alt="Operators recording job start and finish times" width={40} height={36} />
                          <p>Supply Chain Management lets machine operators record when production jobs start and finish. These updates help managers compare actual machine hours with planned production times.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-12.png" alt="Outside work such as foil stamping and binding" width={40} height={36} />
                          <p>Outside work, such as foil stamping, embossing, laminating, and binding, can be added to production plans. This helps businesses schedule, purchase, and track subcontracting costs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Paper, ink and substrate control</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-13.png" alt="Reels, sheets and inks recorded as stock items" width={40} height={36} />
                          <p>Record reels, sheets, pallets, inks, adhesives, foils, plates, and dies as stock items. Assign batch numbers when deliveries arrive and convert between sheets, reams, reels, and metres.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-14.png" alt="Expiry dates for inks, adhesives and coatings" width={40} height={36} />
                          <p>Set expiry dates for materials such as inks, adhesives, and coatings. <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Stock picking</Link> can then prioritise materials with the earliest expiry dates.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-15.png" alt="Item tracing from supplier batch to finished label" width={40} height={36} />
                          <p>Item tracing shows which production jobs and customers received materials from a supplier batch. Teams can also trace a finished label back to its original material batch.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-16.png" alt="Batch details such as width, weight and colour shade" width={40} height={36} />
                          <p>Supply Chain Management records batch details such as width, weight, and colour shade. It also supports in-house ink mixing and records slit reels returned to stock.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Waste, repeat work and quality</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-17.png" alt="Expected and actual waste recorded with reasons" width={40} height={36} />
                          <p>Add expected setup and cutting waste to material lists and production steps. Operators can record actual waste with a reason, helping managers identify losses by job, machine, and cause.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-18.png" alt="Customer product codes and blanket orders for repeat work" width={40} height={36} />
                          <p>Store each customer&apos;s product codes and use blanket orders to manage repeat deliveries. Approved material lists, production steps, proofs, and artwork help teams follow the correct specifications.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-19.png" alt="Quality checks on arrival and completion" width={40} height={36} />
                          <p>Business Central added a Quality Management module in its 2026 release wave. It supports checks when materials arrive and products are completed, while Supply Chain Management also offers sampling plans and non-conformance records.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/printing-20.png" alt="Job profit and press performance reporting in Power BI" width={40} height={36} />
                          <p><Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> and Excel reports use the same Dynamics 365 data. This helps teams compare job profits, material waste, press performance, and delivery results consistently.</p>
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
                <h2>Business Central or Supply Chain Management for Printing and Label Manufacturing</h2>
              </div>
              <p>The right ERP depends on your product range, production methods, factory size, and level of operational complexity. Use the following points to identify which system matches your printing business.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You produce a defined range of labels and printed products, with established specifications for repeat customers.</span></li>
                  <li><i className="bi bi-check"></i><span>Your production takes place at one factory or across a small number of sites.</span></li>
                  <li><i className="bi bi-check"></i><span>You purchase ready-mixed inks, and customer label specifications change only occasionally.</span></li>
                  <li><i className="bi bi-check"></i><span>You need estimating, production scheduling, and job costing for a mid-sized operation, with a relatively straightforward implementation.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Customers select labels from extensive option lists, where one choice affects other product specifications.</span></li>
                  <li><i className="bi bi-check"></i><span>You mix inks within your own facility or convert large master reels into several smaller rolls.</span></li>
                  <li><i className="bi bi-check"></i><span>Product specifications change frequently, requiring formal approval and controlled revision records.</span></li>
                  <li><i className="bi bi-check"></i><span>Your business operates across multiple sites, companies, or currencies, with more complex warehouse and reel storage requirements.</span></li>
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
                      <td><b>Quoting</b></td>
                      <td>Cost built from BOM and routing on sales quotes, with AppSource estimating apps</td>
                      <td>Configuration models that price and build each configured item, plus estimating apps</td>
                    </tr>
                    <tr>
                      <td><b>Job costing</b></td>
                      <td>Actual material, machine, labour and subcontract cost per production order</td>
                      <td>The same, with added cost accounting across entities</td>
                    </tr>
                    <tr>
                      <td><b>Press scheduling</b></td>
                      <td>MRP plus calendars on machine and work centres</td>
                      <td>Finite capacity scheduling, graphical production board</td>
                    </tr>
                    <tr>
                      <td><b>Stock identity</b></td>
                      <td>Lot numbers and expiry dates from item tracking codes</td>
                      <td>Batches with attributes, reservable by attribute</td>
                    </tr>
                    <tr>
                      <td><b>Ink</b></td>
                      <td>Bought as items or built as sub-assemblies</td>
                      <td>Mixed from formulas, with co-products and by-products</td>
                    </tr>
                    <tr>
                      <td><b>Revisions</b></td>
                      <td>BOM versions certified before use</td>
                      <td>Engineering change management</td>
                    </tr>
                    <tr>
                      <td><b>Reel and pallet storage</b></td>
                      <td>Locations and bins with simple picking</td>
                      <td>Waves and location directives in advanced warehouse management</td>
                    </tr>
                    <tr>
                      <td><b>Quality</b></td>
                      <td>Quality Management able to hold a lot</td>
                      <td>Quality orders, sampling plans and non-conformance cases</td>
                    </tr>
                    <tr>
                      <td><b>Press maintenance</b></td>
                      <td>Fixed asset records or a partner app</td>
                      <td>Asset Management with counter-triggered plans</td>
                    </tr>
                    <tr>
                      <td><b>Structure</b></td>
                      <td>One operating company</td>
                      <td>Several legal entities, sites and currencies</td>
                    </tr>
                    <tr>
                      <td><b>Starting licence (UK)</b></td>
                      <td>Premium at £84.60/user/month</td>
                      <td>Standard at £161.50/user/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Press controls, prepress, colour management, and online print stores usually need separate software. These systems <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">connect with Dynamics 365</Link>, often through partner solutions, to share information.</p>
              <p className="pharma-compare-footnote">During discovery, Dynamics Square identifies each system and agrees what information it sends and receives. This helps job details reach the right teams and workstations without repeated data entry.</p>
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
                <Image src="/img/printing-21.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above a reel of printed labels, representing an ERP fit assessment for printing and label manufacturers" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Printing and Label Manufacturing?</h2>
                <p>The <Link href="/industries/manufacturing/" className="u-i">best ERP for printing businesses</Link> should match how you receive orders, plan production, and handle repeat jobs. A digital printer completing daily orders, a label manufacturer producing repeat designs, and a printing group running several factories may each need a different system.</p>
                <p>Dynamics Square assesses your job sizes, repeat orders, ink handling, outsourced finishing, number of sites, and customer requirements. Choosing a system with more features than you need can increase costs and extend implementation. A system with limited capabilities may leave teams managing estimates, schedules, and waste records in spreadsheets.</p>

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
                <h2>Dynamics 365 Implementation for Printing Companies: How Dynamics Square Does It</h2>
                <p>Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design method</Link> across five implementation stages. We begin by understanding how your printing business works, from preparing quotes and scheduling presses to recording waste and meeting customer requirements. We also agree on how to record setup waste, production waste, and repeat orders, so everyone follows the same process.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square reviews actual printing jobs, from the first customer quote to final delivery. We identify how your team currently manages estimates, production schedules, material usage, and waste records.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Next, Dynamics Square agrees on the project scope and recommends Business Central or Supply Chain Management. We also assign people to manage product details, material lists, and production instructions.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>At this step, Dynamics Square sets up products, measurement units, material batches, production steps, waste records, and job costing. We connect press, prepress, and estimating software, then transfer customer details, products, and open orders.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Dynamics Square trains estimators, production planners, and machine operators using real printing jobs. We also test material tracking to confirm that each stock batch can be traced to the finished labels.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>In the end, Dynamics Square supports your team after the system goes live. We help manage new presses, additional product ranges, changing customer needs, and information requests during customer audits.</p>
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
                <h2>Dynamics 365 for Printing and Label Manufacturing Pricing in the UK</h2>
              </div>
              <p>Figures are <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">current published list prices</Link> in pounds sterling, excluding VAT. What you pay in total depends on the balance of full and Team Members users and on any estimating, barcode or press-integration add-ons.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">From £61.50<span> per user per month</span></div>
                <p>The books, sales orders, purchasing and stock records for the commercial side of the business.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From £84.60<span> per user per month</span></div>
                <p>Essentials plus the production set for the press floor: production orders, BOMs, routings, MRP and Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">From £6.20<span> per user per month.</span></div>
                <p>A light seat for people who review figures, approve requests or make small entries.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">From £161.50<span> per user per month.</span></div>
                <p>Process and configurable production arrive here: formulas, configuration models, finite scheduling and directed warehousing.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From £230.70<span> per user per month.</span></div>
                <p>Copilot Credits, demand planning, and capacity and storage planning sit on top of Standard.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">Software licensing and implementation are priced separately. Your implementation budget will reflect the number of production sites and presses, required software connections, and the amount of existing product and job data to migrate. Dynamics Square reviews your current setup and project needs before providing a tailored implementation estimate.</p>
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
                <Image src="/img/printing-22.png" alt="Two business professionals shaking hands, representing UK printers and label converters choosing Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Printers and Label Converters Choose Dynamics Square</h2>
                <p>Dynamics Square begins by understanding how your printing jobs move from customer quotes to finished deliveries. Our team looks at setup time, material waste, production costs, and rework before recommending an ERP system.</p>
                <p>We have completed 60+ <Link href="/case-studies/" className="u-i">manufacturing ERP implementations</Link>, supported by 35+ manufacturing and supply chain consultants. This experience helps us understand production challenges and recommend practical solutions for different business sizes.</p>
                <p>We assess your requirements and recommend either <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central</Link> or <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link>. If Business Central covers your needs, we will explain why a larger system may add unnecessary costs.</p>
                <p>Our <Link href="/our-services/dynamics-365-consultant/" className="u-i">certified consultants</Link> work with both Dynamics 365 products and understand how each supports manufacturing operations. After launch, Dynamics Square <Link href="/our-services/dynamics-365-support-services/" className="u-i">continues supporting your team</Link> as production needs, equipment, and customer requirements change.</p>
                <p>We help your business maintain reliable job costs, production records, and material traceability. These records make it easier to respond to customer questions and provide information during supplier audits.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to a Print ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Printing;
