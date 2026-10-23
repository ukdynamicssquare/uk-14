import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesfoodbeverage.json';
import PageSeo from "../../../components/PageSeo";

const FoodAndBeverage = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 ERP for Food and Beverage Manufacturing"
        description="Trace ingredient lots, control expiry dates, manage recipes and allergens, and run quality checks in one system with Dynamics 365 ERP for food and beverage manufacturing."
        image="https://www.dynamicssquare.co.uk/img/food-and-beverage-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Food and Beverage Manufacturing</h1>
                <p>Dynamics 365 for food and beverage manufacturing lets you trace any ingredient lot to the batches it entered and the customers they reached and see how many days of shelf life each lot has left.</p>
                <p>Dynamics Square helps you deploy Dynamics 365 with a team that understands food production.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to a Food ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/food-and-beverage-00.png"
                  alt='Dynamics 365 ERP for food and beverage manufacturing: operator logging a roasting batch on a laptop beside the roaster'
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
                <h2>Dynamics 365 ERP for Food and Beverage Manufacturing, Explained</h2>
              </div>
              <p>Dynamics 365 ERP for food and beverage manufacturing configures <Link href="/products/microsoft-dynamics-365/" className="u-i">Microsoft&apos;s cloud ERP</Link> for firms that make, blend, bake, brew or bottle goods for sale. Purchasing, goods-in, recipes, production orders, date marks, quality checks, warehousing and accounts share one set of records. When a supplier flags a faulty delivery, the system lists the production runs that drew on it and the customers who received what those runs made.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square proposes two products here, each suited to a different kind of producer.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>It suits bakeries, specialist food producers, craft brewers and distillers, soft drinks makers and co-packers who work from an established recipe set across one or a few sites. The modules that matter most are <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production orders with bills of materials</Link>, lot numbers with expiry dates, <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">warehouse picking by earliest expiry</Link> and the Quality Management module introduced with the 2026 release wave.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>It suits dairy, meat and fish processors, ingredient and flavour makers and larger drinks groups. Formulas there vary with raw material quality, runs give off co-products, goods are sold by weight, or output comes from several sites. Its main modules are formula management, batch attributes, shelf-life dating, catch weight handling and quality orders.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Food safety compliance depends on your HACCP plan, trained staff, and accurate records. Dynamics 365 helps maintain the lot history, date controls, and quality records that support these programmes. The sections below explain how each feature supports your food safety processes.</p>
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
                <h2>UK Food Law: Required Records and Compliance</h2>
              </div>
              <p>Four areas of UK food law and industry practice shape how a food manufacturer&apos;s systems need to behave.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/food-and-beverage-01.png" alt="Traceability one step back and one step forward under general food law" width={48} height={48} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Traceability under general food law</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Article 18 of assimilated Regulation (EC) 178/2002 requires every food business to trace what it receives from suppliers and what it supplies to other businesses, one step back and one step forward. Records cover names and addresses, the product, quantity and transaction dates. The Food Standards Agency (FSA) guidance suggests keeping them, as a minimum, for the shelf life of a prepacked product plus 12 months.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/food-and-beverage-02.png" alt="Food withdrawal and recall duties" width={48} height={48} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Withdrawal and recall duties</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Under Article 19, a business that has reason to believe food is unsafe must start withdrawing it immediately and tell its enforcement authority, as well as the FSA or Food Standards Scotland. Suppliers and business customers affected by the incident also need to be informed. A recall record that already links lots to customers turns that notification into a short report.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/food-and-beverage-03.png" alt="Allergen labelling and use by and best before date marks" width={48} height={48} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Allergens and date marks</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Fourteen allergens are controlled in UK law: celery, cereals containing gluten, crustaceans, eggs, fish, lupin, milk, molluscs, mustard, peanuts, sesame, soya, sulphur dioxide and sulphites, and tree nuts. On prepacked food they must be emphasised within the ingredients list. Since 1 October 2021, food packed on the premises where it is sold, such as a bakery&apos;s shop-counter products, must also carry a full ingredients list. A &quot;use by&quot; date marks a food safety limit, whereas &quot;best before&quot; describes quality, and an ERP that stores both dates separately keeps stock decisions accurate.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/food-and-beverage-04.png" alt="HACCP records and BRCGS customer audits" width={48} height={48} />
              </div>
              <div className="uk-reg-row__title">
                <h4>HACCP records and customer audits</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Food businesses must keep procedures based on HACCP principles and the records that prove them. Retail customers and audit schemes such as BRCGS commonly expect regular mock recall tests, in which a lot is traced end to end against the clock.</p>
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
                <h2>Core Capabilities of Dynamics 365 for Food and Beverage Manufacturers</h2>
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
                          <Image src="/img/food-and-beverage-05.png" alt="Lot numbers for ingredients, intermediates and finished products" width={40} height={40} />
                          <p>Lot numbers issued to every ingredient, intermediate, pack component and finished product on arrival or manufacture</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-06.png" alt="Production orders logging ingredient lots and creating output lots" width={40} height={40} />
                          <p>Production orders that log the ingredient lots they use and open a new lot for the product they make, which is the basis of <Link href="/industries/business-central-for-process-manufacturing/" className="u-i">food batch manufacturing software</Link></p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-07.png" alt="Two-way item tracing from supplier lot to finished lot" width={40} height={40} />
                          <p>Item tracing in both directions, so one supplier lot reveals every finished lot it entered, and one customer complaint reveals every ingredient lot behind the pack</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-08.png" alt="Tracing to affected customers and shipped sales orders" width={40} height={40} />
                          <p>In Supply Chain Management, the trace extends to the customers and shipped sales orders affected, which is the working core of <Link href="/industries/food-and-beverages/" className="u-i">food traceability software</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Date marks and shelf-life control</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-09.png" alt="Expiry dates with strict expiration posting" width={40} height={40} />
                          <p>Expiry dates captured at goods-in or at production, with strict expiration posting available to keep expired lots out of picks</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-10.png" alt="Picking by earliest expiry date per warehouse location" width={40} height={40} />
                          <p><Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Picking by earliest expiry date</Link>, switched on per warehouse location in Business Central</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-11.png" alt="Shelf advice, best-before and expiry periods per product" width={40} height={40} />
                          <p>In Supply Chain Management, shelf advice, best-before and expiry periods set per product, so the three dates follow the product&apos;s own rules</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-12.png" alt="Customer sellable days for minimum remaining shelf life" width={40} height={40} />
                          <p>Sellable days per customer, which stops short-dated lots going to a customer who needs a minimum remaining life on delivery</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Recipes, formulas and allergen data</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-13.png" alt="Versioned production bills of materials for recipes" width={40} height={40} />
                          <p><Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">Business Central production bills of materials</Link>, where each version has its own start date and certification status, so a reformulation goes live on an agreed day</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-14.png" alt="Approved formulas scaled by batch size or ingredient percentage" width={40} height={40} />
                          <p>Supply Chain Management formulas that are approved and activated before use, with quantities driven by batch size or by the percentage of each ingredient, and ingredients drawn down in stages. This is recipe and formula management software built for plants that adapt to raw material variation.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-15.png" alt="Co-products and by-products from the same production run" width={40} height={40} />
                          <p>Co-products and by-products booked into stock from the same run, such as whey from cheesemaking or spent grain from brewing</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-16.png" alt="Allergen details held as item or batch attributes" width={40} height={40} />
                          <p>Allergen details held as item or batch attributes, shown wherever the product appears. Label artwork and cleaning validation belong to your food safety team and labelling tools</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Quality and production</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-17.png" alt="Quality inspections on receipt and production output with lot holds" width={40} height={40} />
                          <p>Business Central Quality Management, with inspections generated on receipt and on production output, and a failing lot held back from dispatch until an authorised person lifts the hold</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-18.png" alt="Quality orders, non-conformance cases and sampling plans" width={40} height={40} />
                          <p>Supply Chain Management quality orders, non-conformance cases and sampling plans for heavier testing</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-19.png" alt="MRP and master scheduling balanced against shelf life" width={40} height={40} />
                          <p><Link href="/products/dynamics-365-supply-chain-management/" className="u-i">MRP and master scheduling</Link> in both products, balancing demand against capacity and against the days of life left in stock</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/food-and-beverage-20.png" alt="Catch weight items stocked in kilograms and handled in cases" width={40} height={40} />
                          <p>Catch weight items in Supply Chain Management, stocked in kilograms yet handled in cases that each weigh a little differently</p>
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
                <h2>Business Central or Supply Chain Management for Food and Beverage Manufacturing</h2>
              </div>
              <p>Two Dynamics 365 products can run a food or beverage plant, and the right one depends on how your recipes behave and how many plants you operate.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Your recipes are settled and your product range changes gradually</span></li>
                  <li><i className="bi bi-check"></i><span>You make, bake, brew or pack at one or a few sites</span></li>
                  <li><i className="bi bi-check"></i><span>You want lot control, expiry handling and quality inspection sized and priced for a mid-sized business</span></li>
                  <li><i className="bi bi-check"></i><span>Production orders working from fixed bills of materials cover how you make product</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Quantities in your formulas follow ingredient percentages or vary with the strength of incoming raw materials</span></li>
                  <li><i className="bi bi-check"></i><span>Runs produce co-products or by-products that you sell or process further</span></li>
                  <li><i className="bi bi-check"></i><span>Products are sold by actual weight, as with cheese, meat or fish</span></li>
                  <li><i className="bi bi-check"></i><span>Production crosses sites, companies or currencies, or the quality team needs formal non-conformance handling</span></li>
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
                      <td><b>Production style</b></td>
                      <td>Production orders with bills of materials (Premium licence)</td>
                      <td>Formula-based process manufacturing, batch and continuous</td>
                    </tr>
                    <tr>
                      <td><b>Recipe control</b></td>
                      <td>Versioned bills of materials</td>
                      <td>Approved and activated formula versions</td>
                    </tr>
                    <tr>
                      <td><b>Lot tracking</b></td>
                      <td>Lot numbers with expiry dates</td>
                      <td>Batch numbers with attributes, merging and reservation by attribute</td>
                    </tr>
                    <tr>
                      <td><b>Shelf-life dating</b></td>
                      <td>Expiry date, strict expiration posting, earliest-expiry picking</td>
                      <td>Shelf advice, best-before and expiry dates, plus customer sellable days</td>
                    </tr>
                    <tr>
                      <td><b>Sold-by-weight products</b></td>
                      <td>Typically added through a partner app</td>
                      <td>Catch weight items</td>
                    </tr>
                    <tr>
                      <td><b>Quality management</b></td>
                      <td>Quality Management module with lot blocking</td>
                      <td>Quality orders, non-conformances, sampling</td>
                    </tr>
                    <tr>
                      <td><b>Allergen data</b></td>
                      <td>Item attributes or partner apps</td>
                      <td>Batch attributes built around your allergen list</td>
                    </tr>
                    <tr>
                      <td><b>Multi-entity scale</b></td>
                      <td>One operation</td>
                      <td>Multiple entities, sites and currencies</td>
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
              <p className="pharma-compare-footnote">Most label printing, laboratory systems and scale integrations <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">connect to Dynamics 365</Link> as separate systems. Dynamics Square lists them with you during discovery so that data such as allergens and lot numbers reaches the label or the scale from one source.</p>
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
                <Image src="/img/food-and-beverage-21.png" alt="Baker sifting flour with recipe quantities and yield impact overlaid, representing an ERP fit assessment for food manufacturers" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Food Manufacturers</h2>
                <p>ERP for food manufacturers earns its keep when it mirrors how product is really made. A bakery on fixed recipes and a cheese or ingredients processor with variable yields will land on different answers, and both answers can be right.</p>
                <p>Every enquiry for ERP software for the food and beverage industry begins with a fit assessment. It reviews recipes, batch sizes, site count, whether you sell by unit or by weight, and the audits your customers and certification bodies carry out. <Link href="/industries/manufacturing/" className="u-i">Food manufacturing ERP software</Link> sized beyond that picture adds cost and months, and software sized below it leaves spreadsheets doing the missing work. A food and beverage manufacturing ERP is judged on that fit.</p>

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
                <h2>How Dynamics Square Implements ERP for Food Manufacturers: Phase by Phase</h2>
                <p>Dynamics Square follows Microsoft’s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design framework</Link> for food manufacturing ERP implementations in the UK, addressing food safety requirements from the first workshop.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square reviews your production process from goods receipt to dispatch, documenting how recipes, batches, and date labels are managed.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Next, Dynamics Square defines the project scope, selects the right product, and assigns responsibility for recipe and item data.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>Dynamics Square configures batch tracking, expiry dates, and quality checks, then loads and verifies your recipes and item records.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>At this stage, we train your team, test real production scenarios, and conduct a mock product recall before the system goes live.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>Dynamics Square supports your team through initial audits, new product launches, and recipe changes after the system goes live.</p>
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
                <h2>What Dynamics 365 ERP for Food and Beverage Manufacturing Costs in the UK</h2>
              </div>
              <p>The <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">UK list prices</Link> below are shown in pounds, excluding VAT. Your total cost depends on user types, labelling systems, and scale integrations required.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">from £61.50<span>/user/month</span></div>
                <p>It covers the finance ledger, sales, purchasing and stock, plus lot tracking.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span>/user/month</span></div>
                <p>It is the tier for the shop floor, bringing production orders, bills of materials, MRP and the Quality Management module.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">from £6.20<span>/user/month</span></div>
                <p>It gives occasional users read, approval and light update access.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">from approximately £165<span>/user/month</span></div>
                <p>It brings process manufacturing with formulas, catch weight items and quality orders.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from approximately £235<span>/user/month</span></div>
                <p>It adds deeper analytics and financial planning on top of Standard.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">A food or drink producer with one site needs a <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central implementation</Link> covering its core operations. A multi-site <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management project</Link> involves recipe migration and traceability setup across facilities, increasing the project scope.</p>
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
                <Image src="/img/food-and-beverage-22.png" alt="Two business people shaking hands, representing UK food and drink producers working with Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Food and Drink Producers Work with Dynamics Square</h2>
                <p>Dynamics Square begins project scoping on your production floor, reviewing batch tracking, date labelling, allergen handling, and recall procedures. These requirements shape the implementation because they matter to your auditors and customers.</p>
                <p>We recommend Business Central if it meets your needs, or Supply Chain Management if your operations require more advanced capabilities. Our recommendation is based on your business needs.</p>
                <p>Dynamics Square has done over 60 <Link href="/industries/manufacturing/" className="u-i">implementations in manufacturing</Link> and with the team of 35+ consultants who are certified on both products, we recommend the best fit for your business.</p>
                <p>Besides, Dynamics Square’s association <Link href="/our-services/dynamics-365-support-services/" className="u-i">carries on after go-live</Link>. We support seasonal peaks, new product lines, recipe revisions and audit preparation as your business grows.</p>
                <p>Retailers and consumers buy from food companies they trust, and our job is to help your quality team keep that trust intact.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to a Food ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h3 style={{fontSize:'32px'}}>Dispatch Every Order with Its Ingredient Lots on the Record</h3>
                <p>Equip your team with traceability, date control and quality checks, so any recall stays narrow and audits go smoothly.</p>
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

export default FoodAndBeverage;
