import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesaerospace.json';
import PageSeo from "../../../components/PageSeo";

const Aerospace = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Aerospace and Defence Manufacturing"
        description="Optimise aerospace and defence manufacturing with Dynamics 365. Manage production, inventory, supply chains and operations with a connected ERP solution."
        image="https://www.dynamicssquare.co.uk/img/aerospace-00.png"
        faqs={faqData}
      >
        
        <meta name="robots" content="noindex, nofollow" />
      </PageSeo>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Aerospace and Defence Manufacturing</h1>
                <p>Implement Dynamics 365 ERP for aerospace and defence manufacturing to track every part, manage design changes, monitor production costs, and maintain clear records across your aerospace and defence operations. Keep components traceable and ensure teams work with the latest approved specifications. Dynamics Square helps aerospace and defence manufacturers implement Microsoft Dynamics 365 ERP around their production processes, quality requirements, and industry needs.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to an Aerospace ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                  src="/img/aerospace-00.png"
                  alt='Dynamics 365 ERP for aerospace and defence manufacturing: close-up of an aircraft jet engine turbine'
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
                <h2>What Dynamics 365 ERP for Aerospace and Defence Manufacturing Delivers</h2>
              </div>
              <p>Dynamics 365 ERP for aerospace and defence manufacturing connects purchasing, <Link href="/products/dynamics-365-business-central/manufacturing-management/" className="u-i">production</Link>, <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">inventory</Link>, quality checks, and <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">finance</Link> in one system. It helps manufacturers trace every component, record material details, track inspections, and manage design changes.</p>
              <p>Aerospace suppliers can maintain records for aircraft parts, machined components, and assemblies. Defence manufacturers can also monitor contract costs, delivery schedules, and material availability. This gives teams clear information about each part, from material purchase to final delivery, while supporting customer audits and quality requirements.</p>
              <p style={{marginBottom:'40px'}}><b>Dynamics Square suggests two routes into Dynamics 365 for aerospace and defence manufacturing.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central is meant for precision engineering firms, component suppliers, <Link href="/industries/manufacturing/dynamics-365-for-electronics/" className="u-i">wiring and cable harness manufacturers</Link>, and contract manufacturers handling smaller production runs and repeat orders.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Supply Chain Management is an ideal choice for larger manufacturers with several sites, complex products, or projects that involve frequent design changes. It helps manage changing specifications, production schedules, and project costs across larger operations.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">Your business remains responsible for AS9100 certification, customer approvals, and MOD supplier requirements. <Link href="/products/microsoft-dynamics-365/" className="u-i">Dynamics 365</Link> helps maintain the material, inspection, and production records needed to support audits and quality checks.</p>
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
                <h2>UK Aerospace and Defence Compliance Requirements</h2>
              </div>
              <p>Three important areas influence the records and controls that UK aerospace and defence manufacturers must maintain. These requirements cover aviation production, defence supply chain security, and export controls.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/aerospace-01.png" alt="UK CAA Part 21 Subpart G aviation production approvals" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Aviation Production Approvals</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The UK Civil Aviation Authority (CAA) may require aircraft manufacturers and certain component suppliers to hold Part 21 Subpart G approval. This requires an approved production manual and processes that ensure parts meet approved designs. Many aerospace customers also expect suppliers to follow AS9100 quality standards. Manufacturers must maintain production, inspection, and material records to demonstrate that their processes meet these requirements.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/aerospace-02.png" alt="MOD supply chain cyber security requirements under DEFCON 658" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>MOD Supply Chain Cyber Requirements</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Suppliers working on Ministry of Defence (MOD) contracts may face cybersecurity requirements under DEFCON 658. These depend on the contract&apos;s Cyber Risk Profile and the applicable Cyber Security Model requirements. Suppliers may also need to pass relevant requirements to subcontractors. Businesses should consider how contract information is stored, who can access it, and how connected systems handle sensitive data.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/aerospace-03.png" alt="UK strategic export controls and licences" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UK Strategic Export Controls</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UK manufacturers exporting military or controlled dual-use products must follow applicable export control rules. The Export Control Joint Unit manages relevant export licences under the Export Control Order 2008. Manufacturers need accurate records showing which products were shipped, who received them, and which licence covered each shipment. Linking product, customer, and delivery records helps teams demonstrate compliance during checks.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div>
                <p>Aerospace and defence programmes can continue for decades, making reliable records essential throughout their lifespan. Manufacturers need systems that preserve accurate production, inspection, material, and export information, even when employees, suppliers, and business processes change over time.</p>
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
                <h2>Core Capabilities of Dynamics 365 for Aerospace Manufacturing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Bills of Materials and Engineering Changes</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-04.png" alt="Multi-level bills of materials for aerospace assemblies" width={40} height={36} />
                          <p><Link href="/industries/manufacturing/dynamics-365-for-discrete/" className="u-i">Multi-level bills of materials</Link> show how individual components fit together to make larger assemblies, with separate versions and approval records for each item.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-05.png" alt="Where-used searches for components" width={40} height={36} />
                          <p>Where-used searches identify every product or assembly containing a component, helping teams understand which orders may be affected by a change.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-06.png" alt="Engineering change requests and approvals" width={40} height={36} />
                          <p>Engineering change requests and orders follow approval steps, ensuring buyers, production planners, and operators always work from the same approved design.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability and Component History</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-07.png" alt="Material batch and serialised component history" width={40} height={36} />
                          <p>Dynamics 365 records the history of each material batch and serialised component, starting when materials arrive at the factory and continue through production.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-08.png" alt="Tracing a delivered component to its material batch" width={40} height={36} />
                          <p>Teams can trace a delivered component back to its original material batch or identify every finished unit made using a questionable batch.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-09.png" alt="Suspected materials placed on quality hold" width={40} height={36} />
                          <p>Suspected materials or components can be placed on hold, preventing their use in production until the quality team approves them.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Contract-Based and Custom Manufacturing</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-10.png" alt="One-off manufacturing projects and budgets" width={40} height={36} />
                          <p>Dynamics 365 manages <Link href="/products/dynamics-365-project-operations/" className="u-i">one-off manufacturing projects</Link> from design and material purchasing through production, while tracking costs against each project&apos;s approved budget.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-11.png" alt="Contract billing against delivery milestones" width={40} height={36} />
                          <p>Contract billing features help manufacturers track customer payments against agreed project stages, delivery milestones, and completed work.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-12.png" alt="Order-to-order planning for contract-specific components" width={40} height={36} />
                          <p>Order-to-order planning links material purchases and production directly to specific customer requirements, keeping contract-specific components separate from general stock.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Suppliers, Planning and Quality</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-13.png" alt="Subcontracted plating, heat treatment and testing" width={40} height={36} />
                          <p>Subcontracting records help manage outside work such as plating, heat treatment, and testing, while tracking materials sent to external suppliers.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-14.png" alt="Material Requirements Planning" width={40} height={36} />
                          <p>Material Requirements Planning considers customer orders, stock levels, and supplier delivery times when suggesting what manufacturers need to purchase or produce.</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/aerospace-15.png" alt="Inspection results recorded against batches and orders" width={40} height={36} />
                          <p>Inspection results and quality problems can be recorded against specific material batches and production orders, helping teams investigate issues and maintain records.</p>
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
                <h2>Business Central or Supply Chain Management for Aerospace and Defence Manufacturing</h2>
              </div>
              <p>The right ERP for aerospace and defence manufacturing depends on how you manage engineering changes, customer contracts, production, and quality records. Dynamics Square helps you choose between Business Central and Supply Chain Management based on these requirements.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You manufacture components and assemblies using customer-approved engineering drawings.</span></li>
                  <li><i className="bi bi-check"></i><span>You handle repeat orders or smaller production runs using approved material lists.</span></li>
                  <li><i className="bi bi-check"></i><span>You need component tracking, detailed material lists, and production control for a mid-sized business.</span></li>
                  <li><i className="bi bi-check"></i><span>Your quality management activities are handled through a separate system alongside your ERP.</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>Designs change during projects and revisions require formal approval before production.</span></li>
                  <li><i className="bi bi-check"></i><span>Customers select product features that affect materials, components, and manufacturing steps.</span></li>
                  <li><i className="bi bi-check"></i><span>You manage project costs by contract and bill customers against agreed milestones.</span></li>
                  <li><i className="bi bi-check"></i><span>Your manufacturing operations span several factories, companies, or currencies.</span></li>
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
                      <td><b>Manufacturing style</b></td>
                      <td>Discrete and repetitive (Premium licence)</td>
                      <td>Discrete, configured and project-linked</td>
                    </tr>
                    <tr>
                      <td><b>BOM control</b></td>
                      <td>Multi-level production BOMs with versions</td>
                      <td>Product versioning with change requests and orders</td>
                    </tr>
                    <tr>
                      <td><b>Lot and serial tracking</b></td>
                      <td>Item tracking and Item Tracing</td>
                      <td>Batch and serial tracking across production</td>
                    </tr>
                    <tr>
                      <td><b>Engineer-to-order</b></td>
                      <td>Order-linked planning, job accounting alongside</td>
                      <td>Projects with work breakdown structures on production orders</td>
                    </tr>
                    <tr>
                      <td><b>Quality</b></td>
                      <td>Native inspections and lot blocking</td>
                      <td>Quality orders, nonconformance and sampling</td>
                    </tr>
                    <tr>
                      <td><b>Multi-entity scale</b></td>
                      <td>Several companies and locations, with simpler consolidation</td>
                      <td>Multiple entities, sites and currencies at larger scale</td>
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
              <p className="pharma-compare-footnote">Many aerospace and defence manufacturers use separate software to manage engineering designs and quality checks, including AS9102 First Article Inspection. Dynamics 365 manages related material, production, and cost records. During discovery, Dynamics Square identifies <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">which systems need connecting</Link> and how information should move between them.</p>
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
                <Image src="/img/aerospace-16.png" alt="Fit assessment diagram linking Dynamics 365 Business Central and Dynamics 365 Supply Chain above an aircraft, representing an ERP fit assessment for aerospace and defence manufacturers" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Aerospace and Defence Manufacturing?</h2>
                <p>Choosing the <Link href="/industries/manufacturing/" className="u-i">best ERP for aerospace and defence manufacturing</Link> starts with how your programmes are designed, scheduled and invoiced. A precision machining firm and a business engineering to order will reach different answers, and each answer can be right.</p>
                <p>Every aerospace and defence enquiry at Dynamics Square starts with a fit assessment, covering BOM depth, change control, contract structure, site count and the systems that need to connect, before we name a platform.</p>

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
                <h2>How Dynamics Square Runs Dynamics 365 Implementation for Aerospace Manufacturers</h2>
                <p>Dynamics Square follows Microsoft&apos;s <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design approach</Link> when implementing Dynamics 365 for aerospace manufacturers. We focus early on product structures, component tracking, and data transfer because these form the foundation of reliable production records. For UK defence projects, we also agree where sensitive MOD information and engineering designs will be stored.</p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>Dynamics Square reviews your product designs, material lists, tracking requirements, and special manufacturing processes. We also identify which existing systems need connecting to the ERP.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>At this stage, Dynamics Square agrees on the project scope, ERP product, data storage arrangements, and responsibilities with your management team before implementation begins.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>Next, Dynamics Square configures the system, transfers product, material, and batch records, and connects engineering, quality, and factory software where required.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Dynamics Square helps your employees test the system using actual parts and customer orders. We also train your teams before the new system goes live.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>In the end, Dynamics Square continues supporting your business after launch, helping manage customer audits, engineering changes, and new manufacturing programmes.</p>
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
                <h2>Dynamics 365 Pricing for Aerospace and Defence Manufacturers in the UK</h2>
              </div>
              <p>The prices below are <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">current UK list prices</Link> in pounds sterling, excluding VAT. Your final cost depends on the number of full and occasional users and any integrations needed with your design, quality, and factory systems.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">From £61.50<span>/user/month.</span></div>
                <p>It covers financial management, sales, purchasing and inventory.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From £84.60<span>/user/month.</span></div>
                <p>Production orders, BOMs, routings and MRP, plus Quality Management inspections on production output.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">From £6.20<span>/user/month.</span></div>
                <p>It offers read, approve and light self-service access.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Dynamics 365 Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">From £161.50<span>/user/month.</span></div>
                <p>Engineering change, configured products, project-linked production and quality orders, with limited demand planning</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">From £230.70<span>/user/month.</span></div>
                <p>Everything in Standard, together with full demand planning, capacity and storage planning, and Copilot Credits</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">ERP implementation is a separate cost from software licences. The price depends on your factory locations, product complexity, custom manufacturing needs, and the amount of existing data to transfer. Dynamics Square reviews these requirements and prepares a quotation based on your project scope.</p>
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
                <Image src="/img/aerospace-17.png" alt="Two business professionals shaking hands, representing UK aerospace and defence manufacturers working with Dynamics Square" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Aerospace and Defence Manufacturers Work with Us</h2>
                <p>Dynamics Square has completed 60+ <Link href="/case-studies/" className="u-i">manufacturing ERP implementations</Link>, bringing practical experience in production planning, material tracking, component traceability, and quality management.</p>
                <p>Our team of 35+ manufacturing and supply chain consultants understands the challenges of managing complex production processes, engineering changes, and customer requirements.</p>
                <p>We study your traceability needs, engineering processes, and contract requirements before recommending <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central</Link> or <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link>. Our recommendation focuses on what works best for your operations.</p>
                <p><Link href="/our-services/dynamics-365-consultant/" className="u-i">Our consultants</Link> hold Microsoft certifications across both ERP products. This helps us provide balanced advice and configure the system around your manufacturing requirements.</p>
                <p><Link href="/our-services/dynamics-365-support-services/" className="u-i">Our support continues after implementation</Link>, helping your team manage engineering changes, new programmes, customer audits, and changing production requirements.</p>
                <p>We help maintain clear production, inspection, and material records so your business can respond to customer checks and delivery requirements with confidence.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to an Aerospace ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Aerospace;
