import React, { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import faqData from '../../../public/data/industriesmedicaldevice.json';

const PAGE_URL = "https://www.dynamicssquare.co.uk/industries/manufacturing/dynamics-365-for-medical-device/";
const PAGE_TITLE = "Dynamics 365 ERP for Medical Device Manufacturing | Dynamics Square UK";
const PAGE_DESC = "Optimise medical device manufacturing with Dynamics 365 ERP. Manage production, quality, compliance, inventory and supply chain with Dynamics Square UK.";
const OG_IMAGE = "https://www.dynamicssquare.co.uk/img/medical-device-00.png";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": PAGE_URL,
      "url": PAGE_URL,
      "name": PAGE_TITLE,
      "description": PAGE_DESC,
      "inLanguage": "en-GB",
      "primaryImageOfPage": { "@type": "ImageObject", "url": OG_IMAGE },
      "isPartOf": { "@id": "https://www.dynamicssquare.co.uk/#website" },
      "about": { "@id": PAGE_URL + "#service" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.dynamicssquare.co.uk/industries/" },
        { "@type": "ListItem", "position": 3, "name": "Manufacturing", "item": "https://www.dynamicssquare.co.uk/industries/manufacturing/" },
        { "@type": "ListItem", "position": 4, "name": "Dynamics 365 ERP for Medical Device Manufacturing", "item": PAGE_URL }
      ]
    },
    {
      "@type": "Service",
      "@id": PAGE_URL + "#service",
      "name": "Dynamics 365 ERP for Medical Device Manufacturing",
      "serviceType": "Dynamics 365 Business Central and Supply Chain Management implementation for medical device manufacturers",
      "provider": { "@id": "https://www.dynamicssquare.co.uk/#organization" },
      "areaServed": [
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Canada" }
      ],
      "audience": { "@type": "BusinessAudience", "audienceType": "Medical device manufacturers" },
      "description": PAGE_DESC,
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dynamics 365 Pricing for Medical Device Manufacturers",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Dynamics 365 Business Central Essentials", "applicationCategory": "BusinessApplication" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "61.50", "priceCurrency": "GBP", "unitText": "user/month", "valueAddedTaxIncluded": false } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Dynamics 365 Business Central Premium", "applicationCategory": "BusinessApplication" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "84.60", "priceCurrency": "GBP", "unitText": "user/month", "valueAddedTaxIncluded": false } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Dynamics 365 Business Central Team Members", "applicationCategory": "BusinessApplication" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "6.20", "priceCurrency": "GBP", "unitText": "user/month", "valueAddedTaxIncluded": false } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Dynamics 365 Supply Chain Management Standard", "applicationCategory": "BusinessApplication" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "165", "priceCurrency": "GBP", "unitText": "user/month", "valueAddedTaxIncluded": false } },
          { "@type": "Offer", "itemOffered": { "@type": "SoftwareApplication", "name": "Dynamics 365 Supply Chain Management Premium", "applicationCategory": "BusinessApplication" }, "priceSpecification": { "@type": "UnitPriceSpecification", "price": "235", "priceCurrency": "GBP", "unitText": "user/month", "valueAddedTaxIncluded": false } }
        ]
      }
    },
    {
      "@type": "HowTo",
      "name": "How Dynamics Square Implement Dynamics 365 for Medical Device Manufacturing",
      "description": "We deliver every medical device build using Microsoft's Success by Design methodology, five stages that keep validation planning woven into the project from the very outset.",
      "step": [
        { "@type": "HowToStep", "position": 1, "name": "Discover", "text": "We spend time on your shop floor understanding your BOM, your routings and how close your quality processes already sit to MHRA expectations" },
        { "@type": "HowToStep", "position": 2, "name": "Initiate", "text": "Platform choice, scope and project governance get agreed before configuration begins" },
        { "@type": "HowToStep", "position": 3, "name": "Implement", "text": "The system takes shape while validation documentation is written alongside it" },
        { "@type": "HowToStep", "position": 4, "name": "Prepare", "text": "Hands-on testing against scenarios pulled from your own production line, training for the people who'll use the system daily, and a cutover date chosen around your manufacturing calendar" },
        { "@type": "HowToStep", "position": 5, "name": "Operate", "text": "We remain on hand through your first post-launch audits, whatever supplier changes come up, and the fine-tuning that naturally follows" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]+>/g, "").trim(),
        },
      })),
    },
  ],
};

const MedicalDevice = () => {

  useCardScrollEffect()
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESC} />
        <link rel="canonical" href={PAGE_URL} />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESC} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="1097" />
        <meta property="og:image:height" content="656" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESC} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>
      <div className='solution-new-banner-one solution-new-banner-one-colos'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 ERP for Medical Device Manufacturing</h1>
                <p>Dynamics 365 ERP for medical device manufacturing ensures traceable components, a documented build history for every unit, and quality management that stands up to an MHRA visit. Dynamics Square, a Microsoft Gold Certified partner, already knows this industry and delivers an ERP that is configured for your industry.</p>
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
              <div className='m-b-image-nnn m-b-image-nna'>
                <Image
                  src="/img/medical-device-00.png"
                  alt='Dynamics 365 ERP for Medical Device Manufacturing showing a device history record with component lot and serial traceability'
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

      <section className="partner-trust-strip md-glance">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-9">
              <h2 className="md-glance__title">At a Glance</h2>
              <ul className="md-glance__grid">
                <li><span className="md-glance__num">14+</span><span>Years of Experience</span></li>
                <li><span className="md-glance__num">150+</span><span>Certified Dynamics 365 Consultants</span></li>
                <li><span className="md-glance__num">350+</span><span>Successful Implementations</span></li>
                <li><i className="bi bi-patch-check"></i><span>Microsoft Solutions Partner</span></li>
                <li><i className="bi bi-gear-wide-connected"></i><span>Business Central &amp; Supply Chain Management Specialists</span></li>
              </ul>
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
                <h2>Why Dynamics 365 Matters for Medical Device Manufacturing</h2>
              </div>
              <p>When you build a medical device, an inspector can ask at any point which batch of parts went into a specific unit, who signed off on it, and where it shipped. Dynamics 365 for medical device manufacturing puts that answer on screen in seconds, straight from the same system that runs your production floor, and the inspection stays calm and moves on quickly. Manufacturers still relying on paper files and scattered spreadsheets often spend hours digging for that same answer, turning a routine visit into a stressful scramble.</p>
              <p style={{ marginBottom: '40px' }}><b>Microsoft offers two products built for this job. Which one you need depends less on how big your company is, and more on how complicated your production actually is.</b></p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link></h4>
                </div>
                <p>Business Central suits contract manufacturers and single-site producers building a set range of devices from a bill of materials that stays largely the same.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="erp-expect-card">
                <div className="erp-expect-card__head">
                  <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management" width={48} height={48} />
                  <h4><Link href="/products/dynamics-365-supply-chain-management/">Dynamics 365 Supply Chain Management</Link></h4>
                </div>
                <p>Supply Chain Management suits manufacturers running more than one site, working through frequent design changes, or needing formal checks in place every time something goes wrong with a part or a batch.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="erp-expect-footnote">UKCA marking and MHRA clearance belong to your device and your own quality system. Only your organisation can earn them, through testing, checks and registration. What Dynamics 365 does is hold the data behind that work, which batch, which changes, which checks, ready the moment you need it.</p>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="btn-get-started scrollto">
                <span>Find the Right Platform for Your Build &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>What UK Medical Device Regulations Require</h2>
              </div>
              <p>Dynamics 365 for medical device manufacturing is built to keep pace with exactly these rules, so here is what UK regulation actually asks of your operation.</p>
            </div>
          </div>
          <div className="uk-reg-panel">
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/medical-device-01.png" alt="UK MDR 2002 and MHRA device registration" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UK MDR 2002 and MHRA registration</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Devices sold in Great Britain sit under the UK Medical Devices Regulations 2002, as amended, with the MHRA as the regulator. Every device, regardless of class, has to be registered on the MHRA&apos;s Device Online Registration System before it reaches the market. Registration confirms a device is on record; the underlying compliance work remains the manufacturer&apos;s own responsibility throughout.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/medical-device-02.png" alt="UKCA marking and the CE transition for medical devices" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>UKCA marking and the CE transition</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>UKCA is the UK&apos;s own conformity mark, assessed by a UK Approved Body, and manufacturers based outside the UK need a UK Responsible Person to handle registration and act as the MHRA&apos;s point of contact. CE-marked devices still have a transitional route into Great Britain, though the deadlines and their possible extension are under active MHRA consultation through 2026.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/medical-device-03.png" alt="Field Safety Corrective Actions reported to the MHRA" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Field Safety Corrective Actions</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>The UK&apos;s version of a device recall runs through Field Safety Corrective Actions and Field Safety Notices, reported to the MHRA through the Manufacturer&apos;s Online Reporting Environment. Under the 2024 post-market surveillance regulations, the window to report an incident expected to cause serious deterioration in health tightened from 30 days to 15.</p>
              </div>
            </div>
            <div className="uk-reg-row">
              <div className="uk-reg-row__icon">
                <Image src="/img/medical-device-04.png" alt="Post-market surveillance obligations for medical device manufacturers" width={40} height={36} />
              </div>
              <div className="uk-reg-row__title">
                <h4>Post-market surveillance obligations</h4>
              </div>
              <div className="uk-reg-row__desc">
                <p>Vigilance continues well past registration. Manufacturers have to track incident trends, investigate root causes and prove they can act quickly when a pattern emerges, obligations that sit directly on top of day-to-day production and quality data.</p>
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
                <h2>Core Capabilities of Dynamics 365 for Medical Device Manufacturing</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Traceability</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-05.png" alt="Lot and serial number logging at goods receipt and production" width={40} height={36} />
                          <p>Every lot and serial number gets logged the moment stock arrives or a unit comes off the line</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-06.png" alt="Forward and backward component traceability for medical devices" width={40} height={36} />
                          <p>Trace a finished device back to its individual components, or follow one component forward to every device it went into</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-07.png" alt="Search a single unit history in Dynamics 365" width={40} height={36} />
                          <p>Pull up a specific unit&apos;s history in the time it takes to run a search</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Device history and documentation</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-08.png" alt="Inspection results and disposition decisions attached to a unit or batch" width={40} height={36} />
                          <p>Inspection results and disposition decisions attach to a unit or batch automatically as production happens</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-09.png" alt="Device build history ready for an inspector" width={40} height={36} />
                          <p>Every device carries a build history that&apos;s ready the moment an inspector asks to see it</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-10.png" alt="Records that meet UK MDR 2002 expectations" width={40} height={36} />
                          <p>Records that meet UK MDR 2002 expectations as a matter of course, with no last-minute scramble to assemble them</p>
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
                          <Image src="/img/medical-device-11.png" alt="Business Central Quality Management module with inspections and quarantine" width={40} height={36} />
                          <p>Business Central&apos;s Quality Management module, native since the 2026 release: set up inspections, grade pass or fail, and quarantine anything that fails, right inside the core product</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-12.png" alt="Supply Chain Management non-conformance, CAPA and statistical sampling" width={40} height={36} />
                          <p>Supply Chain Management goes further for bigger operations, with formal non-conformance investigation, CAPA and statistical sampling built in</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-13.png" alt="Supplier performance and incoming inspection data linked to components" width={40} height={36} />
                          <p>Supplier performance data, incoming inspection results and corrective action history, all linked back to the specific components a supplier actually sent</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner mycard__inner--single'>
                    <div className='mycard__inner-left'>
                      <h3>Production and engineering control</h3>
                      <div className="pharma-capability-items">
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-14.png" alt="Multi-level BOMs and routings connected to production" width={40} height={36} />
                          <p>Multi-level BOMs and routings stay connected to production, so an engineering revision flows through to future builds automatically</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-15.png" alt="MRP and MPS production planning against capacity" width={40} height={36} />
                          <p><Link href="/products/dynamics-365-business-central/manufacturing-management/" className="md-light-link">MRP and MPS</Link> plan production against real capacity and what components are actually available</p>
                        </div>
                        <div className="pharma-capability-item">
                          <Image src="/img/medical-device-16.png" alt="Traceable design revisions build after build" width={40} height={36} />
                          <p>Every design revision stays traceable, build after build, so the current version is always the obvious one</p>
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
                <span>Talk to Us About Your Manufacturing Process &nbsp;<i className="bi bi-arrow-right"></i></span>
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
                <h2>Business Central or Supply Chain Management for Medical Device Manufacturing: Which ERP to Choose?</h2>
              </div>
              <p className="md-compare-intro">Medical device manufacturing runs as <Link href="/industries/manufacturing/dynamics-365-for-discrete/" className="u-i">discrete manufacturing</Link> on both platforms. There&apos;s no formula or batch chemistry involved, so the decision comes down to how complex your bill of materials is, how deep your quality process needs to go, and how many sites you&apos;re managing.</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card">
                <h4>Choose Business Central if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You build a defined range of devices from a workable, multi-level BOM</span></li>
                  <li><i className="bi bi-check"></i><span>You&apos;re running a single facility</span></li>
                  <li><i className="bi bi-check"></i><span>Standard inspection, pass or fail grading and quarantine cover your quality needs</span></li>
                  <li><i className="bi bi-check"></i><span>You want real manufacturing and quality functionality at a cost and timeline built for a smaller operation</span></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="pharma-compare-card pharma-compare-card--alt">
                <h4>Choose Supply Chain Management if:</h4>
                <ul>
                  <li><i className="bi bi-check"></i><span>You&apos;re managing production across several sites or legal entities</span></li>
                  <li><i className="bi bi-check"></i><span>Engineering changes happen often enough that version control is a daily concern</span></li>
                  <li><i className="bi bi-check"></i><span>Formal CAPA and statistical sampling need to run as standard practice every time</span></li>
                  <li><i className="bi bi-check"></i><span>Your BOM structure includes configurable products or complex change control</span></li>
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
                        <td>Discrete manufacturing (Premium licence)</td>
                        <td>Discrete manufacturing built for larger operations</td>
                      </tr>
                      <tr>
                        <td><b>Lot and serial tracking</b></td>
                        <td>Native</td>
                        <td>Native, with multi-attribute tracking</td>
                      </tr>
                      <tr>
                        <td><b>Quality management</b></td>
                        <td>Native inspection checkpoints and quarantine</td>
                        <td>Quality orders, non-conformance management, CAPA, statistical sampling</td>
                      </tr>
                      <tr>
                        <td><b>BOM and engineering complexity</b></td>
                        <td>Multi-level BOMs, single revision path</td>
                        <td>Configurable products, complex change control</td>
                      </tr>
                      <tr>
                        <td><b>Organisational scale</b></td>
                        <td>One facility, one legal entity</td>
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
              <p className="pharma-compare-footnote">Design control is where Dynamics 365 hands off to something else. Manufacturers with heavy design history file obligations pair it with a dedicated electronic quality management system for design controls and validated electronic signatures, keeping <a href="/products/microsoft-dynamics-365/" className='u-i'>Dynamics 365</a> as the home for production, inventory and the device history record while the eQMS owns the design record itself. If that split applies to you, expect us to raise it early, well before it becomes a mid-project surprise.</p>
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
                <Image src="/img/medical-device-17.png" alt="Fit assessment for the best ERP for medical device manufacturing covering BOM, quality, sites and regulations" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 align-self-center order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What Is the Best ERP for Medical Device Manufacturing?</h2>
                <p>It comes down to whichever platform matches how you actually build. A single-site contract manufacturer and a multi-site producer wrestling with constant engineering change are dealing with entirely different problems, and the table above shows where those two situations pull apart.</p>
                <p>Every enquiry starts with a short conversation covering four things: your BOM, the state of your quality processes, your site footprint, and the rules you need to answer to. That&apos;s what decides which platform we point you toward.</p>

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
                  We deliver every medical device build using Microsoft&apos;s{" "}
                  <Link href="/our-services/dynamics-365-implementation-services/" className="md-light-link">Success by Design methodology</Link>,
                  five stages that keep validation planning woven into the project from the very outset.
                </p>
              </div>
            </div>
          </div>

          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discover</h4>
                <p>We spend time on your shop floor understanding your BOM, your routings and how close your quality processes already sit to MHRA expectations</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Initiate</h4>
                <p>Platform choice, scope and project governance get agreed before configuration begins</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Implement</h4>
                <p>The system takes shape while validation documentation is written alongside it</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Prepare</h4>
                <p>Hands-on testing against scenarios pulled from your own production line, training for the people who&apos;ll use the system daily, and a cutover date chosen around your manufacturing calendar</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Operate</h4>
                <p>We remain on hand through your first post-launch audits, whatever supplier changes come up, and the fine-tuning that naturally follows</p>
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
                <h2>Dynamics 365 Pricing for Medical Device Manufacturers</h2>
              </div>
              <p>The numbers below come from Microsoft&apos;s current <Link href="/products/dynamics-365-business-central/pricing-licensing/" className="u-i">UK price list</Link> for 2026, shown in GBP and excluding VAT. What you actually pay depends on user count, any ISV work for design control or eQMS integration, and how the implementation is scoped.</p>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Business Central</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Essentials</span>
                <div className="pharma-pricing-card__price">from £61.50<span>/user/month</span></div>
                <p>Core financials, sales, purchasing and inventory.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from £84.60<span>/user/month</span></div>
                <p>Adds production orders, BOMs, routings, MRP, MPS and native Quality Management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Team Members</span>
                <div className="pharma-pricing-card__price">from £6.20<span>/user/month</span></div>
                <p>Read, approve and light self-service access.</p>
              </div>
            </div>
          </div>
          <h3 className="pharma-pricing-group-title">Supply Chain Management</h3>
          <div className="row g-4">
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card">
                <span className="pharma-pricing-card__tier">Standard</span>
                <div className="pharma-pricing-card__price">from approximately £165<span>/user/month</span></div>
                <p>Full discrete manufacturing, advanced quality management and warehouse management.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="pharma-pricing-card pharma-pricing-card--highlight">
                <span className="pharma-pricing-card__tier">Premium</span>
                <div className="pharma-pricing-card__price">from approximately £235<span>/user/month</span></div>
                <p>Adds advanced analytics and financial planning.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <p className="pharma-pricing-footnote">Licence fees are only one part of the bill. Add implementation, and a single-site <a className='u-i' href="/dynamics-365-business-central-implementation/">Business Central project</a> generally lands somewhere in the tens of thousands of pounds. A <a className='u-i' href="/d365-supply-chain-management-implementation/">Supply Chain Management build</a> spanning multiple sites, with validation and eQMS integration folded in, climbs considerably higher, often into six figures.</p>
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

      <section className="md-case-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Case Studies</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/case-studies-3.jpg" alt="Surgical instrument manufacturer upgraded from Dynamics NAV 2013 R2 to Business Central" width={600} height={340} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className="md-case-card__body">
                  <h3>Surgical Instrument Manufacturer: NAV to Business Central Upgrade</h3>
                  <p>Supplying anaesthesia, surgery, general medical and podiatry products across the UK, this manufacturer was stuck on an ageing, on-premises Dynamics NAV 2013 R2 system with a support partner that was falling short on response times.</p>
                  <p>We <Link href="/dynamics-365-business-central-upgrade/" className="u-i">upgraded them to Dynamics 365 Business Central Online</Link>, added document management integration, and ran onsite user training throughout the transition.</p>
                  <div className="md-case-card__result">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p><b>The result:</b> a cloud-based, Azure-backed system built to support doubled production capacity and revenue growth.</p>
                  </div>
                  <Link href="/case-studies/nav13R2-to-business-central/" className="md-case-card__link">
                    Read the Full Case Study <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
            <div className="col-lg-6 d-flex">
              <article className="md-case-card">
                <div className="md-case-card__img">
                  <Image src="/img/Leda-Ortho.jpg" alt="Orthopaedic implant manufacturer replaced spreadsheets with Business Central" width={600} height={340} sizes="(max-width: 991px) 100vw, 600px" />
                </div>
                <div className="md-case-card__body">
                  <h3>Orthopaedic Implant Manufacturer: Replaced Spreadsheets with Real-Time Visibility</h3>
                  <p>A UK manufacturer of joint replacement, trauma, spine and sports medicine implants was running core operations through spreadsheets, leaving warehouse teams struggling to locate stock and finance struggling to reconcile the bank each month.</p>
                  <p>We implemented Business Central with <Link href="/products/dynamics-365-business-central/warehouse-management/" className="u-i">WMS Mobile for warehouse operations</Link> and a Yavr.io integration for real-time bank reconciliation.</p>
                  <div className="md-case-card__result">
                    <i className="bi bi-graph-up-arrow"></i>
                    <p><b>The result:</b> 80% more inventory visibility and a system built to support MHRA compliance requirements.</p>
                  </div>
                  <Link href="/case-studies/upgrading-to-dynamics-365-business-central/" className="md-case-card__link">
                    Read the Full Case Study <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/medical-device-18.png" alt="UK medical device manufacturers working with Dynamics Square" width={540} height={536} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Why UK Medical Device Manufacturers Work with Us</h2>
                <p>Every project starts with the regulatory reality already factored in. Tracing a batch, keeping a build record, holding stock for a quality check, these shape the build from the outset, baked in from the earliest planning stage.</p>
                <p>We recommend platforms honestly. If Business Central covers everything your operation needs, that&apos;s what we say, even when Supply Chain Management is the bigger deal for us.</p>
                <p>Our consultants hold current certifications across both platforms, so the comparison you get is grounded in genuine expertise on both sides.</p>
                <p>Go-live is where a lot of the real work actually starts. Audits, engineering changes and the process tweaks that follow all sit inside our <Link href="/our-services/dynamics-365-support-services/" className="u-i">ongoing support</Link>, right alongside your quality system as it keeps evolving.</p>
                <p>A device that ends up inside or on a patient carries a weight of responsibility most software vendors never really reckon with. For us, that&apos;s the baseline every medical device engagement starts from.</p>

                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to a Medical Device ERP Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default MedicalDevice;
