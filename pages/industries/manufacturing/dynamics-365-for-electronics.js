import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industrieselectronics.json';
import PageSeo from "../../../components/PageSeo";

const Electronics = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 ERP for Electronics Manufacturing"
        description="Manage multi-level BOMs, engineering change, component sourcing, serial number tracking and production in one system with Dynamics 365 ERP for electronics manufacturing."
        image="https://www.dynamicssquare.co.uk/img/electronics-00.png"
        faqs={faqData}
      >
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Electronics Manufacturing</h1>
                <p>Dynamics 365 for electronics manufacturing delivers one system for your product designs, parts, production and accounts. Design changes reach the shop floor, every unit traces back to its components, and you see a late part before it stops the line.</p>
                <p>Dynamics Square configures the system the way your electronics business builds, buys and ships.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to an Electronics ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/electronics-00.png"
                  alt='Dynamics 365 ERP for electronics manufacturing: technician soldering components onto a green printed circuit board'
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
                <h2>What Dynamics 365 ERP for Electronics Manufacturing Does for Your Business</h2>
              </div>
              <p>Dynamics 365 ERP for electronics manufacturing is a unified system that holds your <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">bills of materials</Link> (the parts lists behind each product), component purchasing, production, quality records and accounts. This means the design office, the buyers and the shop floor work from the same figures.</p>
              <p>Dynamics 365 ERP for electronics manufacturing adapts that idea to your trade, where products are built from many parts and several layers of assemblies, designs get revised while builds are under way, and a supplier delay can arrive with little warning.</p>
              <p>When an engineer releases a revised part, Dynamics 365 for electronics manufacturing passes the revision to purchasing and production in the same system, so the buyer orders the current component, and the line builds to the current drawing.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square delivers this through Business Central and Supply Chain Management. The right choice depends on how many levels your parts lists have, how often engineering changes a design and how many sites you build at.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Dynamics 365 Business Central is meant for contract electronics manufacturers and single-site assemblers who build a set product range, where the parts list behind each product stays stable between revisions.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Dynamics 365 Supply Chain Management is helpful for original equipment manufacturers (OEMs) and larger manufacturers who receive engineering changes regularly, build products to a customer&apos;s own specification, or produce and buy across several sites.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">When a customer audits you, or a market surveillance authority asks questions, you need to show which component batch went into which unit, which version of the parts list was built and which inspections each unit passed. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> holds those records. Your declaration of conformity, your customers&apos; supplier approvals and your ISO 9001 certificate remain the result of work your own organisation does.</p>
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
                <h2>UK Regulation and Dynamics 365 ERP for Electronics Manufacturing</h2>
              </div>
              <p>A well-configured Dynamics 365 ERP for electronics manufacturing keeps the evidence for five sets of UK obligations within easy reach. Here is what each one asks of your operation.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/electronics-01.png" alt="Product conformity for safety, EMC and radio" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Product conformity for safety, EMC and radio</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Electrical products placed on the Great Britain market fall under the Electrical Equipment (Safety) Regulations 2016 and the Electromagnetic Compatibility Regulations 2016, with the Radio Equipment Regulations 2017 added for anything that transmits or receives.</p>
                <p>Great Britain now recognises CE marking indefinitely across 21 product regulations, and UKCA marking remains available, so you can choose either mark for most of these products. Northern Ireland follows CE marking under the Windsor Framework. Whichever mark you use, the declaration of conformity and the technical file stay your responsibility as the manufacturer.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/electronics-02.png" alt="UK RoHS restricted hazardous substances" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UK RoHS</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The Restriction of Hazardous Substances Regulations 2012 limit ten substances in electrical and electronic equipment. These are lead, mercury, hexavalent chromium, the flame retardants PBB and PBDE, and four phthalates, each held to 0.1 per cent by weight in homogeneous materials, plus cadmium at 0.01 per cent.</p>
                <p>Manufacturers, importers and distributors share responsibility, the Office for Product Safety and Standards (OPSS) enforces the rules, and technical documentation has to be kept for 10 years after the last product is first placed on the market.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/electronics-03.png" alt="WEEE producer responsibility" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>WEEE producer responsibility</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Under the Waste Electrical and Electronic Equipment Regulations 2013, producers join an approved compliance scheme, mark products with the crossed-out wheeled bin symbol and keep records of the quantities they place on the UK market for at least four years.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/electronics-04.png" alt="Product security for connected products" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Product security for connected products</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Consumer products that connect to the internet, or to other connected devices, come under the Product Security and Telecommunications Infrastructure regime, which has applied since 29 April 2024.</p>
                <p>Manufacturers need passwords that are unique to each product or set by the user, a published point of contact for vulnerability reports, a stated minimum period for security updates, and a statement of compliance supplied with the product. Compliance records are kept for 10 years or the support period, whichever is longer.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/electronics-05.png" alt="Counterfeit avoidance in defence supply chains" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Counterfeit avoidance in defence supply chains</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Defence contracts typically flow down DEF STAN 05-135, the Ministry of Defence standard on counterfeit materiel. It expects components to be bought from original manufacturers or authorised distributors, chain-of-custody evidence to be kept, suspect parts to be quarantined, and counterfeit occurrences to be reported, including to the police or Trading Standards.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <p>Each of these obligations comes back to evidence tied to a specific part, supplier lot and product revision. That is exactly the data an ERP holds when it is set up properly.</p>
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
                <h2>What Dynamics 365 for Electronics Manufacturing Covers: Core Capabilities</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Bills of materials and engineering change</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-06.png" alt="Multi-level BOMs for boards, sub-assemblies and finished products" width={40} height={36} />
                          <p><Link href="/industries/business-central-for-discrete-manufacturing/" className="u-i">Bill of materials software for electronics manufacturing</Link>, with multi-level BOMs for boards, sub-assemblies and finished products, linked to routings and production orders</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-07.png" alt="Dated production BOM versions with certification status" width={40} height={36} />
                          <p>Business Central production BOM versions, each with a start date and certification status, so a revision goes live on the day you choose</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-08.png" alt="Engineering Change Management request, approval and release" width={40} height={36} />
                          <p>Engineering Change Management in <Link href="/products/dynamics-365-supply-chain-management/" className="u-i">Supply Chain Management</Link>, where a change request becomes an order, gets approved and reaches production as a released revision</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Component sourcing and inventory</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-09.png" alt="Component stock by location and bin" width={40} height={36} />
                          <p><Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">Component inventory management software</Link> inside the ERP, showing stock by location and bin, with reorder policies based on supplier lead times</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-10.png" alt="Approved substitute components" width={40} height={36} />
                          <p>Approved substitute items stored against the parts they cover in Business Central, so planners can swap a short component quickly</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-11.png" alt="Material requirements planning flagging shortfalls early" width={40} height={36} />
                          <p>Material requirements planning that checks demand against stock, open orders and lead times, and flags a shortfall early enough to act</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability and quality</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-12.png" alt="Lot and serial number tracking" width={40} height={36} />
                          <p>Serial number tracking software in the standard product, with lot and serial numbers assigned at goods-in or at the end of the line</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-13.png" alt="Forward and backward component tracing" width={40} height={36} />
                          <p>Forward tracing from any supplier lot to every unit shipped, and backward tracing from a returned unit to every component lot inside it</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-14.png" alt="Quality inspection built around IPC-A-610 class" width={40} height={36} />
                          <p>Quality inspection built around your IPC-A-610 class, with templates, graded results and quarantine holds, plus quality orders and statistical sampling in Supply Chain Management</p>
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
                          <Image src="/img/electronics-15.png" alt="Make-to-order production linked to sales orders" width={40} height={36} />
                          <p>Make-to-order production in Business Central, where the Order reordering policy waits for a sales order, then links the production order to it</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-16.png" alt="Configure-to-order and engineer-to-order" width={40} height={36} />
                          <p>Configure-to-order and engineer-to-order in Supply Chain Management, using configuration models for variants and projects for one-off designs</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/electronics-17.png" alt="Production costing and board margins" width={40} height={36} />
                          <p>Production costing that rolls component prices and routing time into unit cost, so board margins update after a supplier price change</p>
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
                <h2>Dynamics 365 for Electronics Manufacturing: Business Central or Supply Chain Management?</h2>
              </div>
              <p>Both Microsoft ERPs treat electronics as <Link href="/industries/manufacturing/dynamics-365-for-discrete/" className="u-i">discrete manufacturing</Link>. What separates them is how deep your BOMs go, how often engineering changes land, how you take orders and how many sites or legal entities you run.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Your product range is defined, or you contract-build to customer designs, around a workable multi-level BOM</span></li>
                  <li><i className="bi bi-check"></i><span>Production sits in a single facility and a single legal entity</span></li>
                  <li><i className="bi bi-check"></i><span>Engineering revisions arrive occasionally and production BOM versions can handle them</span></li>
                  <li><i className="bi bi-check"></i><span>You want real production and inspection tools at a price and rollout size suited to a mid-sized operation</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Engineering change orders arrive often enough that formal approval and release control is a daily need</span></li>
                  <li><i className="bi bi-check"></i><span>Some orders are configured to the customer&apos;s specification, or engineered from scratch before production starts</span></li>
                  <li><i className="bi bi-check"></i><span>Production or sourcing spans several sites, entities or currencies</span></li>
                  <li><i className="bi bi-check"></i><span>Your quality function needs non-conformance handling and statistical sampling as standard</span></li>
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
                      <td><b>Production approach</b></td>
                      <td>Discrete production, requiring the Premium licence</td>
                      <td>Discrete production built for large organisations</td>
                    </tr>
                    <tr>
                      <td><b>Handling design revisions</b></td>
                      <td>Multi-level parts lists with dated BOM versions</td>
                      <td>Engineering Change Management: request, approval, release</td>
                    </tr>
                    <tr>
                      <td><b>Lot and serial numbers</b></td>
                      <td>Part of the product</td>
                      <td>Part of the product, with tracking on several attributes at once</td>
                    </tr>
                    <tr>
                      <td><b>Inspection and quality</b></td>
                      <td>Inspection templates with quarantine holds</td>
                      <td>Quality orders, non-conformance cases, sampling by statistics</td>
                    </tr>
                    <tr>
                      <td><b>Customer-driven builds</b></td>
                      <td>Make-to-order through the Order reordering policy</td>
                      <td>Make-to-order, configure-to-order and engineer-to-order</td>
                    </tr>
                    <tr>
                      <td><b>Size of organisation</b></td>
                      <td>One site, one company</td>
                      <td>Many sites, companies and currencies</td>
                    </tr>
                    <tr>
                      <td><b>Entry licence (UK)</b></td>
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
              <p className="pharma-compare-footnote">Where engineering designs in a separate PLM tool, released revisions need a destination. Supply Chain Management provides one in Engineering Change Management, which accepts engineering products from the design stage and passes them on to the companies that produce them, with connectors from Microsoft partners, listed on the marketplace, carrying the data. Business Central receives each revision as a fresh production BOM version, loaded through <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">integration</Link> or typed in. The route is agreed during discovery.</p>
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
                <Image src="/img/electronics-18.png" alt="Engineer reviewing production data on a laptop beside electronics equipment, representing an ERP fit assessment for electronics manufacturing" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Electronics Manufacturing?</h2>
                <p>The best electronics manufacturing ERP software is whichever one matches the way you manufacture. Weekly engineering change orders across three sites call for different tools from steady volumes out of <Link href="/industries/manufacturing/" className="u-i">one plant</Link>, and the comparison above marks the points where the products diverge.</p>
                <p>We begin by listening. Tell us how many levels your BOMs have, how quickly engineering changes arrive, how orders reach the line, where your sites are and which standards your customers hold you to, and our platform recommendation follows from that.</p>

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
                <h2>Dynamics 365 ERP for Electronics Manufacturing: How Dynamics Square Implement</h2>
                <p>Dynamics Square implements Dynamics ERPs for electronics manufacturers in the UK via Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design framework</Link>. It has five stages that put BOM and item data quality at the front of the plan.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square spends time with your engineering office and shop floor, mapping BOM structures, revision habits, your production mix and the points where component shortages hurt most today.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Dynamics Square finalises the platform, the scope and how the project is run, and name the people who own BOM and item data.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>The system is configured, BOM and item records are migrated and checked, and connections to your PLM, EDI or supplier portals are built alongside.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Planners, buyers and line leaders test with real work orders from your own boards and receive hands-on training, and a cutover date is chosen between your busiest build periods.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>Dynamics Square stays with you through your first engineering change orders in the new system, the first component shortage it helps you handle, and the refinements that follow.</p>
              </div>
              <div className="pharma-timeline__dot">5</div>
              <div className="pharma-timeline__spacer"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <p>A Dynamics 365 implementation for electronics manufacturers goes best when it starts with clean BOMs and item data, because every later feature depends on them.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pharma-pricing-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="supprt-header-new-one">
                <h2>Dynamics 365 Pricing for Electronics Manufacturers</h2>
              </div>
              <p>Anyone who plans or runs production in Business Central needs a Premium licence, because production orders, BOMs and MRP sit in that tier. The list below shows Microsoft&apos;s <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">2026 UK prices</Link> in pounds, excluding VAT, and the Team Members licence costs far less for people who only view records or approve requests.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">from £61.50<span>/user/month</span></div>
                <p>It covers core financials, sales, purchasing and inventory.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span>/user/month</span></div>
                <p>It further adds production orders, BOMs, routings, MRP, MPS and native Quality Management.</p>
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
                <div className="pharma-pricing-card__price">from £165<span>/user/month</span></div>
                <p>It brings full discrete manufacturing, Engineering Change Management and advanced quality management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £235<span>/user/month</span></div>
                <p>It further adds advanced analytics and financial planning.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">Implementation accounts for most of the variation in budget. A single-site electronics assembler on <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central</Link> has a lighter project than a multi-site manufacturer on <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link>, where PLM integration and a large BOM migration add scope.</p>
              <p className="pharma-pricing-footnote">The number of users, the volume of BOM and item data, and the systems you connect all shape the final figure, and we confirm it in a quote after a short scoping conversation.</p>
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
                <Image src="/img/electronics-19.png" alt="Two engineers in safety glasses assembling electronic components, representing UK electronics manufacturers working with Dynamics Square" width={540} height={536} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Electronics Manufacturers Work with Us</h2>
                <p>Dynamics 365 ERP for electronics manufacturing performs only as well as the BOM and item data underneath it, so every project of ours begins at the BOM and the supplier list, with the finance ledger coming after.</p>
                <p>If Business Central is enough for your business, we will tell you, even when Supply Chain Management would be the bigger project for us. Our consultants work in both products regularly, so what we tell you about them comes from experience. Designs and suppliers keep changing after go-live, so we stay on to <Link href="/our-services/dynamics-365-support-services/" className="u-i">help with every revision, supplier change and planning update</Link>.</p>
                <p>Component supply decides what a production line can build next week, so we stay close to your planning and purchasing teams for as long as you want us there.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to an Electronics ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h3 style={{fontSize:'32px'}}>Build Every Board with a Complete Record Behind It</h3>
                <p>Give your engineers, buyers and line leaders one set of numbers, so a revision, a shortage or a customer question gets answered from the system on the same day.</p>
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

export default Electronics;
