import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesfashion.json';
import PageSeo from "../../../components/PageSeo";

const Fashion = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Fashion and Apparel Manufacturing"
        description="Optimise fashion and apparel manufacturing with Dynamics 365. Manage production, inventory, supply chains and operations with a connected ERP solution."
        image="https://www.dynamicssquare.co.uk/img/fashion-00.png"
        faqs={faqData}
      />
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Fashion and Apparel Manufacturing</h1>
                <p>Dynamics 365 ERP for fashion and apparel manufacturing brings product, inventory, and production data together in one system. It helps you track every style, colour, and size, from fabric receipt to finished goods dispatch. The experts at Dynamics Square help you configure the ERP to match your manufacturing processes, from cutting and sewing to finishing and shipping.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to Our Fashion ERP Team &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/fashion-00.png"
                  alt='Dynamics 365 ERP for fashion and apparel manufacturing: coloured thread spools on an industrial embroidery machine'
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
                <h2>What Dynamics 365 ERP for Fashion and Apparel Manufacturing Does for Your Business</h2>
              </div>
              <p>Dynamics 365 ERP for fashion and apparel manufacturing helps clothing businesses manage their products, materials, production, orders, and accounts in one system. It suits knitwear manufacturers, clothing factories, workwear makers, private label suppliers, and fashion brands with their own production. Each style can come in several colours and sizes, creating many product variations to track. For example, 250 styles, each available in five colours and seven sizes, create 8,750 product variations.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square offers two ERP solutions to manage these needs, depending on the number of styles, product variations, and factories involved.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>It is meant for private label producers, workwear and uniform makers, and growing labels that cut and sew at one site or a handful. Core modules include item variants with attributes, production bills of materials with scrap allowances, routings across work centres, subcontracting, lot numbers for dye lots, assembly BOMs for kits and prepacks, and the Sales and Inventory Forecast extension.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>It is applicable for large wholesale vendors, multi-brand groups and producers with several factories or distribution centres. Core modules include product dimensions for colour, size, style, configuration and version, bulk variant generation, master planning with forecast plans, vendor-based subcontracting, batch attributes and advanced warehouse management.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Compliance with textile and clothing law rests on your labels, your test houses and your paperwork. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> holds the fibre, supplier and lot data that feed all three, and the numbered list below places each feature.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Range &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>UK Regulations and Dynamics 365 ERP for Fashion and Apparel Manufacturing</h2>
              </div>
              <p>Clothing producers in the UK answer to four sets of expectations, and each one leaves a trail in the ERP.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/fashion-01.png" alt="Fibre content labelling on textile products" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Fibre content on every textile product</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Textile Products (Labelling and Fibre Composition) Regulations 2012 require textile products to carry a label stating fibre content in English, and the label has to be durable, legible, visible and accessible. Fibre names come from an official list, a jacket with a lining shows the composition of each component, and the word &quot;pure&quot; describes a single-fibre product only. The manufacturer or the importer into the UK carries the responsibility, and catalogues and online listings repeat the fibre content wherever a buyer can order from the description alone.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/fashion-02.png" alt="Flammability rules for children's nightwear" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Flammability rules for children&apos;s nightwear</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Nightwear (Safety) Regulations 1985 cover nightwear designed for and normally worn by children under 13. Most of it has to meet the flammability standard BS 5722 after washing, while babies&apos; garments up to three months and pyjamas are exempt from that standard. Nightwear outside the requirement is labelled to show whether it meets BS 5722, using a red &quot;KEEP AWAY FROM FIRE&quot; label and a black &quot;LOW FLAMMABILITY TO BS 5722&quot; label, and online adverts carry a coloured triangle.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/fashion-03.png" alt="Modern Slavery Act supply chain statements" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Supply chain statements</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Section 54 of the Modern Slavery Act 2015 applies to organisations that carry on business in the UK with a global turnover of at least £36 million. They publish an annual statement on the steps taken to identify and eradicate modern slavery in their own business and supply chains, approved by the board and linked from the website homepage. Records showing which factory and which subcontractor made each order give that statement something concrete to describe.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/fashion-04.png" alt="Retailer and brand ethical audits" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Retailer and brand audits</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Retail customers and brand owners commonly ask for factory lists, subcontractor approvals and ethical audit evidence before they place or renew orders. A system that records which site cut, sewed and finished every order shortens the time taken to answer.</p>
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
                <h2>What Dynamics 365 ERP for Fashion and Apparel Manufacturing Covers</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Styles, variants and size scales</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-05.png" alt="Colour and size combinations as item variants" width={40} height={36} />
                          <p>Business Central records each colour and size combination as an item variant. Variants appear on orders and inventory records, inherit product details, and can include pictures.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-06.png" alt="Mandatory variant selection on documents and journals" width={40} height={36} />
                          <p>Business Central&apos;s Variant Mandatory if Exists setting requires variant selection on relevant documents and journals. This helps keep stock records linked to the correct size and colour.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-07.png" alt="Product masters with colour, size and style dimensions" width={40} height={36} />
                          <p>Supply Chain Management groups variants under product masters using colour, size, style, configuration, and version. Variant suggestions create selected combinations in one step.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-08.png" alt="Stockkeeping units with reorder points and safety stock" width={40} height={36} />
                          <p>Business Central stockkeeping units let warehouses set separate reorder points, safety stock levels, lead times, and replenishment methods for individual products and sizes.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Materials, bills of materials and dye lots</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-09.png" alt="Production bills of materials for fabric, trims and packaging" width={40} height={36} />
                          <p><Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">Production bills of materials</Link> list fabric, lining, trims, labels, and packaging. Seasonal versions, cutting waste allowances, and variant specific material requirements help manage fabric consumption.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-10.png" alt="Fabric roll lot numbers for dye batch tracing" width={40} height={36} />
                          <p>Fabric rolls carry lot numbers that help teams trace dye batches to cutting orders. This makes it easier to identify garments affected by shade differences.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-11.png" alt="Fabric batch attributes such as shade, width and shrinkage" width={40} height={36} />
                          <p>Supply Chain Management records batch attributes such as shade, width, and shrinkage. Attribute based reservations help cutting teams select fabric that meets production requirements.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-12.png" alt="Assembly bills of materials for kits and prepacks" width={40} height={36} />
                          <p>Business Central assembly bills of materials define kits and prepacks. Size assortments can be split into individual sizes for accurate stock tracking and fulfilment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Cut-and-sew production and subcontractors</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-13.png" alt="Production orders through cutting, sewing and finishing work centres" width={40} height={36} />
                          <p>Production orders follow work centres through spreading, cutting, sewing, pressing, finishing, and packing. Routing times help teams schedule workloads and monitor factory progress.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-14.png" alt="Material requirements planning for fabric purchases" width={40} height={36} />
                          <p>Material requirements planning uses confirmed orders and forecasts to suggest fabric purchases and production quantities. Both systems help manufacturers prepare orders for timely dispatch.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-15.png" alt="Subcontracting purchase orders and transfer orders" width={40} height={36} />
                          <p>Business Central links routing operations to vendor connected work centres. Its Subcontracting app creates purchase orders, while transfer orders track cut pieces sent out and finished garments returned.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-16.png" alt="Subcontractor service products and vendor managed warehouses" width={40} height={36} />
                          <p>Supply Chain Management identifies subcontractors through service products and generates purchase orders from production estimates. Work lists track jobs, picking journals support dispatch notes, and vendor managed warehouses track partner held stock.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Demand, warehousing and reporting</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-17.png" alt="Sales and Inventory Forecast extension" width={40} height={36} />
                          <p>Business Central&apos;s Sales and Inventory Forecast extension uses historical sales to project demand for individual items and support replenishment planning.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-18.png" alt="Azure Machine Learning baseline demand forecasts" width={40} height={36} />
                          <p>Supply Chain Management uses <Link href="/products/azure-machine-learning/" className="u-i">Azure Machine Learning</Link> for baseline forecasts. Planners assess accuracy, adjust values, and release approved forecasts to master planning.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-19.png" alt="Warehouse locations, bins, picking and put away" width={40} height={36} />
                          <p>Business Central supports <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">warehouse locations, bins, picking, and put away</Link> activities. Supply Chain Management adds advanced warehouse management for complex storage and fulfilment operations.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/fashion-20.png" alt="Sell-through and margin reporting in Power BI" width={40} height={36} />
                          <p><Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> and Excel report on product sell through, margins by style, and outstanding customer orders. These insights help teams monitor profitability and fulfilment.</p>
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
                <span>Talk to Us About Your Cutting Room and Sewing Floor &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>Business Central or Supply Chain Management for Fashion and Apparel Manufacturing</h2>
              </div>
              <p>Dynamics 365 for fashion manufacturing offers two options, and the lists below show which one fits which kind of operation.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Your range runs to hundreds of styles, each defined by colour and size</span></li>
                  <li><i className="bi bi-check"></i><span>You cut and sew at a single site, or at two or three sites close together</span></li>
                  <li><i className="bi bi-check"></i><span>Contractors top up your own capacity at busy times</span></li>
                  <li><i className="bi bi-check"></i><span>Production orders working from bills of materials and routings describe how you make product</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Styles number in the thousands, or products vary by more than colour and size</span></li>
                  <li><i className="bi bi-check"></i><span>Production spans factories, countries, companies or currencies</span></li>
                  <li><i className="bi bi-check"></i><span>Planners need a forecast baseline they can edit each season before purchasing acts on it</span></li>
                  <li><i className="bi bi-check"></i><span>Large volumes of outside manufacturing need purchase orders, delivery notes and vendor-held stock</span></li>
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
                      <td><b>Variants</b></td>
                      <td>Item variants with variant codes, attributes and pictures</td>
                      <td>Colour, size, style, configuration and version dimensions, with bulk variant generation</td>
                    </tr>
                    <tr>
                      <td><b>Bills of materials</b></td>
                      <td>Production BOMs with versions, scrap percentage and variant lines</td>
                      <td>BOMs with versions, scrap and engineering change control</td>
                    </tr>
                    <tr>
                      <td><b>Fabric and dye lots</b></td>
                      <td>Lot numbers through item tracking codes</td>
                      <td>Batch numbers with attributes, merging and reservation by attribute</td>
                    </tr>
                    <tr>
                      <td><b>Production planning</b></td>
                      <td>MRP, routings, work and machine centres (Premium licence)</td>
                      <td>Master planning with forecast plans, production orders and lean production flows</td>
                    </tr>
                    <tr>
                      <td><b>Subcontracting</b></td>
                      <td>Vendor-linked work centres, plus the Subcontracting app for purchase orders from routings</td>
                      <td>Vendor route operations with service products, plus activity-based subcontracting</td>
                    </tr>
                    <tr>
                      <td><b>Demand forecasting</b></td>
                      <td>Sales and Inventory Forecast extension, item level</td>
                      <td>Demand forecasting with Azure Machine Learning baselines, review and publishing</td>
                    </tr>
                    <tr>
                      <td><b>Warehouse</b></td>
                      <td>Locations, bins, picks and put aways</td>
                      <td>Advanced warehouse management</td>
                    </tr>
                    <tr>
                      <td><b>Multi-entity scale</b></td>
                      <td>One operation</td>
                      <td>Multiple entities, sites and currencies</td>
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
              <p className="pharma-compare-footnote">Retailer EDI, design and lifecycle tools, barcode printers and grid order screens come from partner apps or <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">run alongside Dynamics 365</Link>. Discovery maps each of them, with the aim that style, size and barcode data is entered once and flows on to every system that needs it.</p>
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
                <Image src="/img/fashion-21.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above a sewing machine, representing an ERP fit assessment for fashion manufacturers" width={540} height={672} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Which ERP for Fashion Industry Manufacturers Fits Your Product Range?</h2>
                <p>The right <Link href="/industries/manufacturing/" className="u-i">ERP for fashion manufacturers</Link> should match how your business designs, makes, and sells clothing. A brand managing 300 styles in one factory needs a different system from a supplier handling 5,000 styles across factories on three continents. Both businesses can choose the right solution for their needs.</p>
                <p>At Dynamics Square, we assess your product range, colour and size combinations, factories, warehouses, and reliance on outside manufacturers. We also consider production processes and retailer requirements. An ERP that exceeds your needs can increase costs and implementation time, while a basic system may leave size planning and seasonal production schedules in spreadsheets. The goal is to find an ERP that fits your operations today and supports your future growth.</p>

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
                <h2>Dynamics 365 Implementation for Fashion Manufacturers, Step by Step</h2>
                <p>Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design framework</Link> to guide fashion manufacturers through each stage of Dynamics 365 implementation. We start by setting up product variations, as these decisions affect inventory, production, and purchasing.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square reviews your styles, size ranges, technical packs, and garment production process, from cutting to dispatch. We also identify the outside contractors you work with.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>We define the project scope, select the right Dynamics 365 solution, and assign responsibility for maintaining style, material, and size information.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>We configure product variations, material lists, production steps, and fabric batch tracking. We then import your products, suppliers, and open orders and check the data for accuracy.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Your planners and factory teams test a real cutting order through finishing and dispatch. We provide training and check whether fabric batches can be traced to the customers who received the garments.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>Dynamics Square supports your team after launch through seasonal production peaks, new collection launches, and changes to product sizes.</p>
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
                <h2>What Dynamics 365 ERP for Fashion and Apparel Manufacturing Costs in the UK</h2>
              </div>
              <p>The <Link href="/tools/erp-implementation-cost-calculator/" className="u-i">final implementation cost</Link> depends on your business needs, including any additional apps for retailer EDI or grid-based order entry. It also varies depending on how many users need full access and how many only use the system occasionally.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">Starts at £61.50<span> per user per month</span></div>
                <p>It includes the finance ledger, sales, purchasing, stock and item variants.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">Starts at £84.60<span> per user per month</span></div>
                <p>It is the tier for the production floor, with production orders, bills of materials, routings, MRP and subcontract work centres.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">Starts at £6.20<span> per user per month</span></div>
                <p>It is for occasional users who read data, approve requests and make light updates.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">Starts at £165<span> per user per month</span></div>
                <p>It includes product dimensions, master planning, demand forecasting and advanced warehouse management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">Starts at £235<span> per user per month</span></div>
                <p>It extends Standard with deeper analytics and financial planning.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">A clothing manufacturer operating from one site can often <Link href="/dynamics-365-business-central-implementation/" className="u-i">implement Business Central</Link> with a simpler setup and lower overall costs. Businesses managing several factories may need <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link>, which requires more work to migrate product data, configure size and colour variations, and set up production planning.</p>
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
                <Image src="/img/fashion-22.png" alt="Two business professionals shaking hands, representing UK clothing makers and fashion brands working with Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Clothing Makers and Fashion Brands Work with Us</h2>
                <p>Dynamics Square starts by understanding how you design, make, and deliver clothing. Our team looks at your size ranges, technical packs, cutting orders, and delivery dates to configure Dynamics 365 around your daily work.</p>
                <p>With 60+ <Link href="/case-studies/" className="u-i">manufacturing implementations</Link> completed, Dynamics Square understands the challenges clothing manufacturers face when managing products, production, and deliveries.</p>
                <p>Our 35+ manufacturing and supply chain consultants help you choose between Business Central and Supply Chain Management. We recommend the solution that fits your operations, rather than pushing a more complex system when a simpler one will do.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> hold current certifications for both platforms, bringing practical knowledge of their features and setup to your implementation.</p>
                <p>After launch, Dynamics Square <Link href="/our-services/dynamics-365-support-services/" className="u-i">continues to support your business</Link> through new collection launches, changes in size ranges, new manufacturing partners, and seasonal production peaks.</p>
                <p>We also work with your operations team to improve order accuracy and help ensure retailers receive the right products on time.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to Our Fashion ERP Team &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Fashion;
