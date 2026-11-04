import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesfurniture.json';
import PageSeo from "../../../components/PageSeo";

const Furniture = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Furniture Manufacturing"
        description="Optimise furniture manufacturing with Dynamics 365. Manage production, inventory, supply chains and operations with a connected ERP solution."
        image="https://www.dynamicssquare.co.uk/img/furniture-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Furniture Manufacturing</h1>
                <p>Implement Dynamics 365 ERP for furniture manufacturing to manage customer orders, track timber, fabric, and fittings, plan production, and monitor delivery schedules in one connected system. Know which materials went into each piece of furniture, and which customer received the finished product. Dynamics Square helps furniture manufacturers implement Microsoft Dynamics 365 ERP around their workshop operations, production needs, and business requirements.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to a Furniture ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/furniture-00.png"
                  alt='Dynamics 365 ERP for furniture manufacturing: woodworking machine with stacked timber on a factory floor'
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
                <h2>What Dynamics 365 ERP for Furniture Manufacturing Does for Your Business</h2>
              </div>
              <p>Dynamics 365 ERP for furniture manufacturing helps businesses making kitchens, cabinets, sofas, beds, chairs, and office furniture manage their operations in one system. It connects <Link href="/products/dynamics-365-business-central/sales-order-management/" className="u-i">customer orders</Link>, material purchases, inventory, production, quality checks, deliveries, and accounts.</p>
              <p style={{marginBottom:'40px'}}>Manufacturers can track timber, boards, fabric, foam, and fittings, while monitoring material waste and production costs. For example, losing 12% of a standard furniture board means wasting around 0.36 square metres. Across 150 boards weekly, that adds up to approximately 54 square metres. Business Central and Supply Chain Management serve different production needs.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central suits cabinet makers, furniture manufacturers, upholsterers, and office furniture businesses that sell standard products from one or a few factories. It helps manage product parts, different sizes and finishes, material requirements, <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production orders</Link>, batch tracking, outsourced work, and quality inspections.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Supply Chain Management suits larger furniture manufacturers with multiple factories or products offering many customer choices. It helps manage custom designs, product changes, material details, machine schedules, <Link href="/products/dynamics-365-supply-chain-management/asset-management/" className="u-i">equipment maintenance</Link>, and warehouse operations.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Furniture businesses must maintain accurate supplier documents, product test results, and quality records for retailers and commercial customers. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> helps keep material, inspection, and production records organised for these requirements.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Workshop &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>What UK Rules Ask of a Furniture Manufacturer&apos;s Records</h2>
              </div>
              <p>Four important areas of UK regulations and customer requirements affect the records furniture manufacturers must maintain. These records help demonstrate product safety, responsible material sourcing, and quality during inspections and customer audits.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/furniture-01.png" alt="Fire safety requirements for upholstered furniture" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Fire Safety of Upholstered Furniture</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Furniture and Furnishings (Fire) (Safety) Regulations 1988 set fire safety requirements for domestic upholstered furniture, including sofas, sofa beds, and children&apos;s furniture. Covers and fillings must pass prescribed fire resistance tests. Most products also need permanent labels, while new furniture requires display labels. Manufacturers and importers should retain supplier details, test results, and records linking fabric and foam batches to finished products.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/furniture-02.png" alt="UK Timber Regulation and legal timber sourcing" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Timber Sourcing</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The UK Timber Regulation requires businesses first placing covered timber products on the Great Britain market to check that their timber comes from legal sources. They must record the wood species, country of harvest, quantity, and supplier details. Businesses must assess the risk of illegal harvesting and reduce it to negligible levels. Traders must also keep records of their suppliers and customers. Requirements depend on product classification.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/furniture-03.png" alt="General Product Safety Regulations records" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>General Product Safety</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The General Product Safety Regulations 2005 require manufacturers to supply products that are safe for consumers. Businesses must also provide information that helps identify the manufacturer and trace products when safety concerns arise. Furniture makers should maintain records of material batches, including boards, adhesives, finishes, and fittings. These records help investigate complaints, identify affected products, and provide relevant information during Trading Standards inspections.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/furniture-04.png" alt="Retailer and contract client audit requirements" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Retailer and Contract Client Requirements</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p><Link href="/industries/dynamics-365-for-retail/" className="u-i">Retailers</Link>, <Link href="/industries/dynamics-365-for-construction/" className="u-i">housebuilders</Link>, hotels, and education providers often ask furniture manufacturers for product test reports, material details, and reliable delivery information. They may also require evidence of quality checks and responsible sourcing. Maintaining records of suppliers, material batches, inspections, and shipments makes these requests easier to handle. It also helps manufacturers answer customer questions quickly and prepare supporting documents for regular supplier audits.</p>
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
                <h2>What Dynamics 365 ERP for Furniture Manufacturing Covers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Timber, Board and Fabric</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-05.png" alt="Boards, timber, foam and fabric recorded as stock items" width={40} height={36} />
                          <p>Furniture materials such as boards, timber, foam, fabric, and fittings are recorded as stock items, with batch numbers assigned whenever new deliveries arrive.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-06.png" alt="Material batches recorded on production orders" width={40} height={36} />
                          <p>Each production order records the material batches used, helping manufacturers trace the timber, fabric, and fittings inside every finished furniture piece.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-07.png" alt="Item tracking from supplier batch to customer" width={40} height={36} />
                          <p>Item tracking connects material batches with production orders and deliveries, helping manufacturers identify which customers received products made from a particular supplier batch.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-08.png" alt="Incoming inspections that block failed materials" width={40} height={36} />
                          <p>Business Central Quality Management, introduced in the 2026 release wave, supports incoming inspections and blocks materials that fail quality checks. The system also converts square metres, linear metres, kilograms, and pieces, helping teams maintain accurate stock quantities.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Bills of Materials, Options and Orders</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-09.png" alt="Multi-level bills of materials for furniture assemblies" width={40} height={36} />
                          <p>Business Central supports <Link href="/industries/manufacturing/dynamics-365-for-discrete/" className="u-i">detailed bills of materials</Link>, allowing manufacturers to break furniture into smaller parts and assemblies. For example, a dining chair can include separate frame, seat, cushion, and fittings assemblies.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-10.png" alt="Dated and approved bill of materials versions" width={40} height={36} />
                          <p>Bills of materials can have different versions, each with its own starting date and approval status. Production teams can then use approved versions when manufacturing furniture.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-11.png" alt="Product variations for sizes, finishes and fabrics" width={40} height={36} />
                          <p>Product variations record different sizes, finishes, and fabrics. Business Central can plan production when customer orders arrive and create production orders directly from those sales.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-12.png" alt="Customer-selected options checked against rules" width={40} height={36} />
                          <p>Supply Chain Management handles products with many customer-selected options by checking choices against set rules. It creates the required material list and production steps, while engineering change management controls design revisions.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Planning, Machines and Finishing</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-13.png" alt="Machine and workstation capacity" width={40} height={36} />
                          <p>Furniture manufacturers can record each machine and workstation with its available hours and production capacity. Production steps also include the setup and operating time required.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-14.png" alt="Advanced scheduling of machines, workers and materials" width={40} height={36} />
                          <p>Both products use customer orders and forecasts to plan material purchases and production. Supply Chain Management adds advanced scheduling to match available machines, workers, and materials with delivery dates.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-15.png" alt="Outsourced painting, veneering and fabric stitching" width={40} height={36} />
                          <p>Furniture makers often outsource painting, coating, veneering, and fabric stitching to specialist suppliers. Dynamics 365 records these activities as production steps, helping teams track supplier work and costs.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-16.png" alt="Router, press and edge banding machine maintenance" width={40} height={36} />
                          <p>Supply Chain Management records routers, presses, and edge banding machines as assets, scheduling maintenance by date or operating hours. Its warehouse tools also help teams organise bulky furniture storage and picking.</p>
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
                          <Image src="/img/furniture-17.png" alt="Expected cutting waste in material lists" width={40} height={36} />
                          <p>Manufacturers can record expected cutting waste in material lists and planned production losses in manufacturing steps. This helps calculate material requirements before production begins.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-18.png" alt="Actual scrap recorded with reason codes" width={40} height={36} />
                          <p>Machine operators record actual production quantities and scrap in Business Central, using separate reason codes. This helps distinguish cutting waste, finishing defects, and upholstery rework.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-19.png" alt="Reusable offcuts recorded as co-products or by-products" width={40} height={36} />
                          <p>Supply Chain Management can record reusable offcuts as co-products or by-products and assign them a share of production costs. Reports show waste by product, machine, and reason, helping managers identify material losses.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/furniture-20.png" alt="Material usage and delivery reporting in Power BI" width={40} height={36} />
                          <p><Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> and Excel use shared Dynamics 365 records to report material usage, production costs, and delivery performance. This gives managers consistent information for reviewing factory performance.</p>
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
                <h2>Business Central or Supply Chain Management for Furniture Manufacturing</h2>
              </div>
              <p>Furniture manufacturers have different production needs, product ranges, and factory setups. Dynamics Square helps you choose between Business Central and Supply Chain Management based on how you make, customise, and deliver furniture.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You mainly sell established furniture designs with standard parts and material lists.</span></li>
                  <li><i className="bi bi-check"></i><span>Your production takes place at one factory or a few locations.</span></li>
                  <li><i className="bi bi-check"></i><span>You need to manage different sizes, finishes, and fabrics using product variations or a partner configurator.</span></li>
                  <li><i className="bi bi-check"></i><span>You need material tracking, incoming quality checks, and production waste records for your business.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Customers select from many product options, each requiring its own materials list and production steps.</span></li>
                  <li><i className="bi bi-check"></i><span>Your furniture designs change frequently and require formal approval before production.</span></li>
                  <li><i className="bi bi-check"></i><span>You need to schedule maintenance for spray lines, routers, and edge banding machines based on usage.</span></li>
                  <li><i className="bi bi-check"></i><span>You operate several factories or companies, manage multiple currencies, or store large volumes of bulky furniture.</span></li>
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
                      <td>Supply triggered by customer orders, Sales Order Planning, blanket orders</td>
                      <td>Quotations and sales orders that carry configured items</td>
                    </tr>
                    <tr>
                      <td><b>Product options</b></td>
                      <td>Variants and attributes on items, plus partner configurators</td>
                      <td>Configuration models with rules linking one option to another</td>
                    </tr>
                    <tr>
                      <td><b>Production style</b></td>
                      <td>BOM and routing driven production orders on a Premium licence</td>
                      <td>Discrete manufacturing with fuller planning, engineering and shop-floor tooling</td>
                    </tr>
                    <tr>
                      <td><b>Revision control</b></td>
                      <td>BOM versions marked certified</td>
                      <td>Engineering change management for live products</td>
                    </tr>
                    <tr>
                      <td><b>Material identity</b></td>
                      <td>Lot numbers assigned through item tracking codes</td>
                      <td>Batch numbers that carry attributes and can be reserved by them</td>
                    </tr>
                    <tr>
                      <td><b>Planning</b></td>
                      <td>MRP, plus calendars attached to work and machine centres</td>
                      <td>Master planning, finite capacity scheduling, graphical production board</td>
                    </tr>
                    <tr>
                      <td><b>Offcuts and waste</b></td>
                      <td>Allowance percentages, scrap codes when output posts</td>
                      <td>Offcuts held as co-products or by-products, shop-floor scrap reporting</td>
                    </tr>
                    <tr>
                      <td><b>Warehouse and despatch</b></td>
                      <td>Locations and bins with simple picking</td>
                      <td>Advanced warehouse management with waves and directives</td>
                    </tr>
                    <tr>
                      <td><b>Machine upkeep</b></td>
                      <td>Fixed asset records or a partner maintenance app</td>
                      <td>Asset Management with plans triggered by counters</td>
                    </tr>
                    <tr>
                      <td><b>Quality control</b></td>
                      <td>Quality Management able to hold back a lot</td>
                      <td>Quality orders, sampling plans, non-conformance cases</td>
                    </tr>
                    <tr>
                      <td><b>Group structure</b></td>
                      <td>Several companies in one environment, with intercompany and consolidation tools</td>
                      <td>Multiple legal entities with shared product and customer data, across sites and currencies</td>
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
              <p className="pharma-compare-footnote">Machines such as saws, panel cutting systems, label printers, weighing scales, and spray booth controls operate separately from Dynamics 365. They can share information with the ERP through <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">integrations</Link> or partner software. During planning, Dynamics Square identifies which machines need connecting and what information they exchange, helping teams access consistent cutting lists, material batches, and job details.</p>
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
                <Image src="/img/furniture-21.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above an upholstered armchair, representing an ERP fit assessment for furniture manufacturers" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Furniture Manufacturing?</h2>
                <p>A bespoke kitchen maker handling custom orders, a sofa manufacturer offering many fabric choices, and a company furnishing hotels all have different production needs. Each requires an <Link href="/industries/manufacturing/" className="u-i">ERP system</Link> that matches how its factory operates.</p>
                <p>Dynamics Square reviews how you receive orders, customise products, manage design changes, run factories, and outsource finishing work. We also consider retailer requirements and customer audits. This helps us recommend the right ERP without paying for features you do not need or relying on spreadsheets for cutting lists, product options, and material waste records.</p>

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
                <h2>Dynamics 365 Implementation for Furniture Manufacturers: How Dynamics Square Does It</h2>
                <p>Clear definitions of product options, leftover materials, and production waste help prevent confusion during ERP implementation. Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link>, starting with an assessment of how your furniture business handles designs, materials, production, and deliveries.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square visits your goods-in area, cutting room, finishing section, upholstery floor, and despatch area. We study how your team manages product options, furniture parts, materials, and production waste.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Dynamics Square confirms the project scope and selects the right ERP for your business. We also assign clear responsibilities for maintaining product details, material lists, and production instructions.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>We set up products, variations, material batches, production steps, waste records, and job costing. We then transfer product, supplier, and open order details, checking everything against your existing records.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Dynamics Square trains your supervisors and operators using actual production orders. Your team practises tracking materials from arrival through cutting, finishing, assembly, and final delivery.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>In the end, we continue supporting your business after launch. We help manage new furniture ranges, seasonal demand, supplier changes, and updates to your production processes.</p>
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
                <h2>Dynamics 365 for Furniture Manufacturing Pricing in the UK</h2>
              </div>
              <p>All prices come from the <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">current UK list</Link> and exclude VAT. The total will vary with the balance of full and occasional users and with any configurator or labelling add-ons.</p>
              <p>The Dynamics 365 prices shown are based on current UK list rates and exclude VAT. Your total cost depends on the number of full and occasional users, along with any additional tools needed for product configuration or labelling.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">£61.50<span> per user per month.</span></div>
                <p>Accounts, sales, purchasing, stock and lot-tracked items are all included.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span> per user per month.</span></div>
                <p>Essentials plus the manufacturing set: production orders, BOMs, routings, MRP and Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">from £6.20<span> per user per month.</span></div>
                <p>A low-cost seat for people who check figures, authorise requests or correct the odd entry.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">from £161.50<span> per user per month</span></div>
                <p>Configuration models, master planning, finite scheduling and warehouse management come with Standard.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £230.70<span> per user per month.</span></div>
                <p>Layers full demand planning, capacity planning, storage planning and Copilot Credits over Standard.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">Furniture ERP implementation costs also depend on the project size and complexity, beyond software licences. A multi-site <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management project</Link> needs more product setup, data transfer, and design records than a single-site <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central implementation</Link>.</p>
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
                <Image src="/img/furniture-22.png" alt="Two business professionals shaking hands, representing furniture makers across the UK choosing Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why Furniture Makers Across the UK Choose Dynamics Square</h2>
                <p>Dynamics Square brings experience from 60+ <Link href="/case-studies/" className="u-i">manufacturing ERP implementations</Link>, helping furniture makers improve production planning, material tracking, job costing, and <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">stock control</Link>.</p>
                <p>Our team includes 35+ manufacturing and supply chain consultants who understand factory operations, from cutting timber and boards to finishing and assembling furniture.</p>
                <p>We study your workshop processes before recommending Business Central or Supply Chain Management. Our recommendation explains which product fits your production needs and why.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> hold Microsoft certifications across both ERP products. This gives your business access to people who understand how to configure and implement each system.</p>
                <p>We <Link href="/our-services/dynamics-365-support-services/" className="u-i">continue supporting your team after launch</Link>, helping manage new furniture ranges, fabric changes, supplier substitutions, and retailer audits.</p>
                <p>We help connect production, inventory, and delivery records so your team can respond to customer requests and provide accurate information during audits.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to a Furniture ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Furniture;
