import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriespackaging.json';
import PageSeo from "../../../components/PageSeo";

const Packaging = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Packaging Manufacturing"
        description="Optimise packaging manufacturing with Dynamics 365. Manage production, inventory, supply chains and operations with a connected ERP solution."
        image="https://www.dynamicssquare.co.uk/img/packaging-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Packaging Manufacturing</h1>
                <p>Manage customer orders, plan production, track materials, monitor waste, and calculate job costs in one connected system. Track every roll, sheet, and pallet from arrival at your factory to final delivery. Dynamics Square helps packaging manufacturers implement Microsoft Dynamics 365 ERP around their production processes, material requirements, and business needs.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to a Packaging ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/packaging-00.png"
                  alt='Dynamics 365 ERP for packaging manufacturing: labelling machine with reels of printed film on a production line'
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
                <h2>What Dynamics 365 for Packaging Manufacturing Does for Your Business</h2>
              </div>
              <p>Dynamics 365 ERP for packaging manufacturing helps businesses turn paper, board, film, resin, foil, and ink into boxes, cartons, flexible packs, labels, and containers. It connects <Link href="/products/dynamics-365-business-central/sales-order-management/" className="u-i">customer orders</Link>, purchasing, material tracking, production, quality checks, inventory, shipping, and accounting in one system.</p>
              <p style={{marginBottom:'40px'}}>Teams can track material costs, monitor waste, and understand how much each job costs. For example, a press running at 150 metres per minute uses 9,000 metres of material every hour. Even 2% waste means losing 180 metres each hour. Dynamics Square offers Business Central and Supply Chain Management, depending on your production needs.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central suits packaging manufacturers with one or a few production facilities and standard product specifications. It works well for corrugated box makers, carton printers, label manufacturers, and flexible packaging businesses. It helps manage <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production orders</Link>, material requirements, product variations, scheduled customer orders, outsourced work, batch tracking, and quality inspections.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Supply Chain Management suits larger packaging manufacturers with multiple factories, complex customer requirements, or advanced production needs. It helps manage custom product options, large material rolls, warehouse operations, <Link href="/products/dynamics-365-supply-chain-management/asset-management/" className="u-i">machine maintenance</Link>, production schedules, and leftover materials. It also supports businesses that cut large rolls into smaller ones.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Customer approvals, certifications, and audits depend on accurate production records. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> helps maintain material, batch, and production records that support these requirements.</p>
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
                <h2>What UK Rules Ask of a Packaging Manufacturer&apos;s Records</h2>
              </div>
              <p>UK packaging manufacturers must maintain records to meet legal requirements, support customer audits, and provide evidence about materials and production. Five important areas affect the information they need to record and retain.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/packaging-01.png" alt="Packaging producer responsibility reporting" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Packaging Producer Responsibility</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UK packaging rules require eligible businesses to report the packaging they supply, fill, import, or sell under their own brands. Reporting depends on business size and packaging volumes. Records must identify packaging materials, weights, and whether they serve household or commercial use. Packaging manufacturers provide important material and weight information that their customers need for these reports.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/packaging-02.png" alt="Packaging essential requirements and technical documents" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Packaging Essential Requirements</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UK regulations require packaging to use only the material needed for safety, hygiene, and customer acceptance. The combined concentration of lead, cadmium, mercury, and hexavalent chromium must not exceed 100 parts per million. Manufacturers must retain technical documents showing how their packaging meets these requirements and provide them to Trading Standards when requested.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/packaging-03.png" alt="Plastic Packaging Tax and recycled plastic content" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Plastic Packaging Tax</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Plastic Packaging Tax applies to <Link href="/industries/manufacturing/dynamics-365-for-plastics/" className="u-i">plastic packaging</Link> manufactured in or imported into the UK that contains less than 30% recycled plastic, subject to applicable exemptions. Businesses crossing the registration threshold must register with HMRC and report their taxable packaging. Records showing recycled and virgin plastic quantities help manufacturers calculate taxable volumes and prepare accurate returns.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/packaging-04.png" alt="Food contact materials and packaging compliance" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Food Contact Materials and Packaging</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Packaging used for food must meet UK food contact material safety and traceability requirements. Manufacturers must maintain records showing where materials came from and where finished products went. Plastic food contact packaging also requires a Declaration of Compliance. Many <Link href="/industries/manufacturing/dynamics-365-for-food/" className="u-i">food and drink customers</Link> expect BRCGS Packaging Materials certification and evidence of successful traceability tests.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/packaging-05.png" alt="Evidence for environmental packaging claims" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Environmental Claims</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UK consumer protection law allows the Competition and Markets Authority to take action against misleading environmental claims. Statements such as recyclable, biodegradable, or made with recycled content must have reliable evidence behind them. Packaging manufacturers should retain material specifications, supplier information, recycled content records, and production details to support claims made about their products.</p>
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
                <h2>What Dynamics 365 ERP for Packaging Manufacturing Covers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Orders and Specifications</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-06.png" alt="Order-to-Order planning linking production to customer orders" width={40} height={36} />
                          <p>Business Central can create supply orders when customer demand is recorded, while its Order-to-Order planning links production directly to that specific customer order for production.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-07.png" alt="Sales Order Planning for production orders" width={40} height={36} />
                          <p>Sales Order Planning lets users create a production order for each sales line or one project order covering the entire sale, connecting orders with production and despatch.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-08.png" alt="Item variants for product sizes and print versions" width={40} height={36} />
                          <p>Business Central item variants record differences such as product sizes and print versions, ensuring each purchase, production, and sales transaction identifies the exact version handled.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-09.png" alt="Configuration models for customer options" width={40} height={36} />
                          <p>Supply Chain Management configuration models let salespeople select customer options during quoting or order entry, then create the matching bill of materials and production route.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Materials and Traceability</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-10.png" alt="Lot numbers for board, film, ink and label stock" width={40} height={36} />
                          <p>Packaging materials such as board, film, ink, adhesive, and label stock are recorded as items, with lot numbers assigned when each reel, pallet, or drum arrives.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-11.png" alt="Material lots linked to finished packaging jobs" width={40} height={36} />
                          <p>Production orders record the material lots consumed and assign lot numbers to finished output, linking each completed packaging job to the stock used during manufacturing.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-12.png" alt="Forward and backward tracing of supplier lots" width={40} height={36} />
                          <p>Teams can trace supplier lots forward to finished products and customers, or trace complaints backwards to incoming materials, supporting rapid traceability tests and customer investigations.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-13.png" alt="Unit conversion between reels, sheets and kilograms" width={40} height={36} />
                          <p>Business Central converts quantities between reels, sheets, square metres, and kilograms using units of measure, while Supply Chain Management can track item count and weight together.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Planning, Machines and Tooling</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-14.png" alt="Work centres, calendars and production routings" width={40} height={36} />
                          <p>Work centres and machine centres hold operating calendars and available capacity, while production routings record the setup and running time required for each manufacturing operation.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-15.png" alt="Finite capacity scheduling and Gantt view" width={40} height={36} />
                          <p>Both products use orders and forecasts to suggest purchases and production; Supply Chain Management adds finite capacity scheduling, detailed sequencing, and a Gantt view of press and cutter workloads.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-16.png" alt="Subcontracted printing, laminating and die cutting" width={40} height={36} />
                          <p>Work sent to outside suppliers for printing, laminating, foil blocking, or die cutting can be recorded as subcontracted operations within the original production order process.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-17.png" alt="Press, die and cylinder maintenance" width={40} height={36} />
                          <p>Presses, dies, and cylinders can be recorded as assets; Supply Chain Management Asset Management schedules maintenance by date or usage, such as impressions, and tracks repair costs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Waste, Quality and Reporting</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-18.png" alt="Expected material waste on bills of materials" width={40} height={36} />
                          <p>Manufacturers can add expected material waste to bills of materials and expected production loss to routing steps, helping plans account for scrap before work begins.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-19.png" alt="Actual scrap recorded with reason codes" width={40} height={36} />
                          <p>During production, operators record actual scrap in the Business Central output journal, selecting a reason code and operation, while recording good finished quantities separately too.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-20.png" alt="Quality inspections and blocking failed lots" width={40} height={36} />
                          <p>Business Central&apos;s 2026 release wave adds Quality Management for receiving and production inspections, including blocking failed lots; Supply Chain Management offers quality orders and sampling plans.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/packaging-21.png" alt="Waste and material weight reporting in Power BI" width={40} height={36} />
                          <p><Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> and Excel can use shared ERP records to report waste by job, machine, and cause, while providing material weights for packaging producer responsibility reporting.</p>
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
                <h2>Business Central or Supply Chain Management for Packaging Manufacturing</h2>
              </div>
              <p>Packaging manufacturers have different production needs, and Dynamics Square helps them choose between Business Central and Supply Chain Management based on their products, factory operations, production complexity, and business size.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You receive repeat orders with standard product specifications and familiar customer requirements.</span></li>
                  <li><i className="bi bi-check"></i><span>Your packaging production takes place at one or a few facilities.</span></li>
                  <li><i className="bi bi-check"></i><span>You need production orders, batch tracking, waste records, and incoming material checks at a moderate cost.</span></li>
                  <li><i className="bi bi-check"></i><span>Customers place regular orders and request scheduled deliveries against agreed quantities.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Customers choose product options, and each combination needs its own materials list and production steps.</span></li>
                  <li><i className="bi bi-check"></i><span>You cut large material rolls into smaller rolls or sell leftover material separately.</span></li>
                  <li><i className="bi bi-check"></i><span>You need detailed production scheduling and maintenance tracking based on machine usage.</span></li>
                  <li><i className="bi bi-check"></i><span>Your business operates across several factories, companies, or currencies.</span></li>
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
                      <td><b>Order handling</b></td>
                      <td>Order-driven supply, links from order to production, blanket orders</td>
                      <td>Configuration models behind quotations and sales orders</td>
                    </tr>
                    <tr>
                      <td><b>Production style</b></td>
                      <td>Production orders from BOMs and routings (Premium licence)</td>
                      <td>Discrete and process production with deeper planning tools</td>
                    </tr>
                    <tr>
                      <td><b>Material units</b></td>
                      <td>Units of measure convert reels, sheets and weights</td>
                      <td>Catch weight items hold count and weight together</td>
                    </tr>
                    <tr>
                      <td><b>Planning</b></td>
                      <td>MRP, with calendars set on work and machine centres</td>
                      <td>Master planning, finite capacity, Gantt-style production board</td>
                    </tr>
                    <tr>
                      <td><b>Waste handling</b></td>
                      <td>Expected scrap set as percentages on BOM and routing lines; actual scrap coded in output journals</td>
                      <td>Scrap held on formula and BOM lines; cost divided between co-products and by-products</td>
                    </tr>
                    <tr>
                      <td><b>Outsourced steps</b></td>
                      <td>Subcontracting through a work centre</td>
                      <td>Vendor-based subcontracting</td>
                    </tr>
                    <tr>
                      <td><b>Dies and equipment</b></td>
                      <td>Fixed asset records or a partner maintenance app</td>
                      <td>Asset Management with plans triggered by counters</td>
                    </tr>
                    <tr>
                      <td><b>Quality control</b></td>
                      <td>Quality Management that can hold back a lot</td>
                      <td>Quality orders, sampling plans and non-conformance cases</td>
                    </tr>
                    <tr>
                      <td><b>Group structure</b></td>
                      <td>One operating site</td>
                      <td>Several legal entities, sites and currencies</td>
                    </tr>
                    <tr>
                      <td><b>Starting licence (UK)</b></td>
                      <td>Premium: £84.60/user/month</td>
                      <td>Standard: £161.50/user/month</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-compare-footnote">Packaging manufacturers often use separate software for estimating and preparing print jobs. Dynamics 365 manages purchasing, <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">inventory</Link>, production, and accounts, while sharing job details with these tools. It can also <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">connect with press controls, weighing machines, and label printers</Link>.</p>
              <p className="pharma-compare-footnote">Dynamics Square identifies the required connections during planning, helping job, material batch, and weight information move accurately between systems.</p>
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
                <Image src="/img/packaging-22.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above stacked cartons, representing an ERP fit assessment for packaging manufacturers" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Packaging Manufacturing?</h2>
                <p>A corrugated box manufacturer, a flexible packaging converter, and a drinks label printer follow different production processes. Each needs an <Link href="/industries/manufacturing/" className="u-i">ERP system</Link> that matches how its factory operates.</p>
                <p>Dynamics Square first reviews your order patterns, product changes, factory locations, outsourced work, and customer audit requirements. This helps us recommend the right ERP without adding unnecessary costs or leaving important tasks, such as job costing, waste tracking, and tooling records, dependent on spreadsheets.</p>

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
                <h2>Packaging ERP Implementation in the UK: How Dynamics Square Does It</h2>
                <p>Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link> to implement Dynamics 365 for packaging manufacturers. We first understand how your business handles materials, production, waste, and job costs. This helps us configure the ERP around your factory operations and reporting needs.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square visits your goods-in area, production floor, converting lines, and despatch bay. We study how your team manages materials, machines, tooling, and leftover stock.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Dynamics Square confirms the project scope, selects the right ERP, and agrees on responsibilities with your team. We also assign clear ownership of product specifications, material records, and tooling details.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>Dynamics Square configures products, material batches, production steps, waste records, and job costing. We then transfer customer, supplier, and open order data, checking the figures against your existing records.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Dynamics Square trains your employees and tests the system using actual production jobs. Teams practise tracking materials from goods-in through manufacturing, finished goods, and final delivery.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>Dynamics Square continues supporting your business after launch. We help manage new products, material changes, production requirements, and customer audits as your operations grow.</p>
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
                <h2>Dynamics 365 ERP for Packaging Manufacturing Pricing in the UK</h2>
              </div>
              <p><Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">Current UK list prices</Link> are shown in pounds before VAT. Estimating, weighing or label printing products from partners, and the balance of full and occasional users, change the final total.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">Starts at £61.50<span> per user per month</span></div>
                <p>It comes with finance, sales, purchasing and inventory including lot tracking.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">Starts at £84.60<span> per user per month</span></div>
                <p>Premium carries production orders, BOMs, routings and MRP, along with Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">Starts at £6.20<span> per user per month</span></div>
                <p>It is for people who look up data, approve requests or edit lightly.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">Starts at £161.50<span> per user per month</span></div>
                <p>It covers quality orders, asset management, finite scheduling and option-based configuration.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">Starts at £230.70<span> per user per month</span></div>
                <p>It comes with Standard&apos;s features plus Copilot Credits and planning tools for demand, capacity and storage.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">ERP implementation is priced separately from software licences. A single-factory <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central project</Link> usually requires less work, while a multi-site <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management project</Link> involves more data, specifications, and tooling records to transfer. Dynamics Square reviews your requirements and provides a detailed project quotation.</p>
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
                <Image src="/img/packaging-23.png" alt="Two business professionals shaking hands, representing UK packaging manufacturers working with Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Packaging Manufacturers Work with Us</h2>
                <p>Our experience includes more than 60 <Link href="/case-studies/" className="u-i">manufacturing ERP implementations</Link>, giving us practical knowledge of production processes, material tracking, waste control, and job costing.</p>
                <p>Our team includes 35+ manufacturing and supply chain consultants who understand factory operations and the ERP requirements of packaging businesses.</p>
                <p>We study your production processes before recommending Business Central or Supply Chain Management. You receive a clear explanation of which system fits your factory and why.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> hold certifications in both Business Central and Supply Chain Management. This helps us recommend, configure, and implement the right system for your operations.</p>
                <p>We <Link href="/our-services/dynamics-365-support-services/" className="u-i">continue supporting your business after launch</Link> as you introduce new products, change materials, update tooling, and prepare for customer audits.</p>
                <p>We help connect material, production, and inventory records so your teams can provide accurate information during customer audits and traceability checks.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to a Packaging ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Packaging;
