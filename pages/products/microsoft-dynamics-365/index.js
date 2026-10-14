import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../../public/data/ai-powered.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";

const siteUrl = "https://www.dynamicssquare.co.uk";
const pageUrl = `${siteUrl}/products/microsoft-dynamics-365/`;
const pageTitle = "Microsoft Dynamics 365: AI-Powered ERP & CRM Solutions | Dynamics Square UK";
const pageDescription = "Transform your business with Microsoft Dynamics 365 ERP & CRM solutions. Dynamics Square UK delivers implementation, support, migration, AI & Copilot expertise.";
const pageImage = `${siteUrl}/img/d360-banner.png`;

const inlineLink = { display: "inline-block", fontSize: 'inherit', color: '#b10817' };

const d365Apps = [
  { name: "Dynamics 365 Business Central", url: `${siteUrl}/products/dynamics-365-business-central/`, description: "Cloud ERP for finance, purchasing, inventory, projects and operations in growing businesses." },
  { name: "Dynamics 365 Finance", url: `${siteUrl}/products/microsoft-dynamics-365-finance/`, description: "Advanced budgeting, reporting, compliance and multi-entity financial management." },
  { name: "Dynamics 365 Supply Chain Management", url: `${siteUrl}/products/dynamics-365-supply-chain-management/`, description: "Planning, manufacturing, warehousing, procurement and logistics with operational visibility." },
  { name: "Dynamics 365 Sales", url: `${siteUrl}/products/microsoft-dynamics-365-sales/`, description: "Opportunity management, customer relationships and revenue forecasting." },
  { name: "Dynamics 365 Customer Service", url: `${siteUrl}/products/microsoft-dynamics-365-customer-service/`, description: "Omnichannel customer support and faster case resolution." },
  { name: "Dynamics 365 Field Service", url: `${siteUrl}/products/microsoft-dynamics-365-field-service/`, description: "Technician scheduling, work orders and on-site service delivery." },
  { name: "Dynamics 365 Customer Insights", url: `${siteUrl}/products/dynamics-365-customer-engagement/`, description: "Unified customer data for personalised marketing and engagement." },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "inLanguage": "en-GB",
      "primaryImageOfPage": { "@type": "ImageObject", "url": pageImage },
      "breadcrumb": { "@id": `${pageUrl}#breadcrumb` },
      "about": { "@id": `${pageUrl}#service` },
      "publisher": { "@id": `${siteUrl}/#organization` }
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${pageUrl}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${siteUrl}/` },
        { "@type": "ListItem", "position": 2, "name": "Microsoft Dynamics 365", "item": pageUrl }
      ]
    },
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      "name": "Microsoft Dynamics 365 ERP & CRM Solutions",
      "serviceType": "Microsoft Dynamics 365 implementation, licensing, integration, migration and support",
      "url": pageUrl,
      "image": pageImage,
      "description": pageDescription,
      "provider": { "@id": `${siteUrl}/#organization` },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Dynamics 365 Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamics 365 Implementation", "url": `${siteUrl}/our-services/dynamics-365-implementation-services/` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamics 365 Support", "url": `${siteUrl}/our-services/dynamics-365-support-services/` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamics 365 Upgrade & Migration", "url": `${siteUrl}/our-services/dynamics-365-upgrade-services/` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamics 365 Integration", "url": `${siteUrl}/products/microsoft-dynamics-365/integration/` } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dynamics 365 Licensing Advice" } }
        ]
      }
    },
    {
      "@type": "ItemList",
      "@id": `${pageUrl}#applications`,
      "name": "Microsoft Dynamics 365 Applications",
      "itemListElement": d365Apps.map((app, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": app.name,
          "url": app.url,
          "description": app.description,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web, Windows, iOS, Android",
          "publisher": { "@type": "Organization", "name": "Microsoft" }
        }
      }))
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question.replace(/^\d+\.\s*/, ""),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<!--.*?-->/g, "").replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim(),
        },
      })),
    },
  ],
};


const AiERP = () => {

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content={pageImage} />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>
      <section className="top-banner-new top-banner-new-style new-tex-left">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions</h1>
              <h2>Thrive with intelligent business applications</h2>
              <p>Deploy one intelligent system to drive efficiency across all your operations, be it finance, sales, operations, or customer service. The Microsoft Dynamics 365 suite of AI-powered ERP and CRM applications is built to help UK companies become more efficient, make faster decisions, and grow with confidence. </p>
              <p style={{ marginTop: '-15px' }}>Dynamics Square will lead you through the entire process of <Link href="/our-services/dynamics-365-implementation-services/" className="u-i">implementation</Link>, customisation, and <Link href="/our-services/dynamics-365-support-services/" className="u-i">support</Link> of the solution you choose.</p>
              <ul>
                <li>14+ Years of Microsoft Expertise </li>
                <li>500+ Successful Projects </li>
                <li>150+ Certified Consultants </li>
                <li>End-to-End Dynamics 365 Services</li>
              </ul>
              <div className='ne-callt-batt'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">

                  <span>Book Your Live Dynamics 365 Demo</span>
                </Link>
              </div>

            </div>
            <div className="col-lg-6 align-self-center">
              <div className='text-center'>
                <Image src="/img/AI-Powered-00.png" alt="Microsoft Dynamics 365 AI-powered ERP and CRM applications dashboard" width={556} height={563} priority={true} fetchPriority="high" sizes="(max-width: 991px) 90vw, 556px" style={{ width: '100%', height: 'auto', maxWidth: 556 }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/AI-Powered-01.png" width={496} height={540} alt="Microsoft Dynamics 365 unified cloud platform for finance, sales, service and supply chain" sizes="(max-width: 991px) 90vw, 496px" style={{ width: '100%', height: 'auto', maxWidth: 496 }} />
                </div>
              </div>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Is Microsoft Dynamics 365?</h2>
                </div>
                <p>Microsoft Dynamics 365 software is a set of agentic CRM and ERP applications for managing sales, service, finance, supply chain, HR, operations and other company tasks on a single, unified, cloud platform.</p>
                <p>Business leaders seeking to modernise their processes often ask the question: <b>"What is Dynamics 365 used for?"</b></p>
                <p>And the answer is, it is used for the following:</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i>Managing financial operations and reporting</li>
                  <li><i className="bi bi-check2"></i>Streamlining supply chain and inventory</li>
                  <li><i className="bi bi-check2"></i>Improving sales performance and pipeline visibility</li>
                  <li><i className="bi bi-check2"></i>Delivering responsive customer service</li>
                  <li><i className="bi bi-check2"></i>Supporting field teams and project operations</li>
                  <li><i className="bi bi-check2"></i>Driving data-driven decision-making with <Link href="/products/microsoft-dynamics-365-ai/" className="u-i">AI insights</Link></li>
                </ul>
                <p>In essence, Dynamics 365 from Microsoft is a set of business apps that help organisations modernise how work gets done.</p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id='section4' className='solution-new-banner-four new-bg-00'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-center'>
              <div className='solution-new-banner-sub-head new-bg-00-1'>
                <h2>Why Businesses Choose Microsoft Dynamics 365</h2>
                <p>Growth highlights the limits of systems that used to work well. If reporting is taking too long, if information is locked in different systems, if procedures are getting harder to manage, if teams are spending more time chasing updates than performing real work, then it’s time to upgrade. </p>
                <p>UK firms can overcome these constraints with Microsoft Dynamics 365. You don't need to change every process overnight. Instead, you can enhance the key areas that matter most, whether it’s finance, sales, customer service, operations or supply chain, and develop over time as your organisation reaches new heights.</p>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>

              <div className='row g-3'>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-02.png" alt="Real-time reporting icon" width={40} height={40} />
                    </div>
                    <p>Improve visibility throughout your business with real-time reporting </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-03.png" alt="AI workflow automation icon" width={40} height={40} />
                    </div>
                    <p>Reduce repetitive manual work with AI and workflow automation </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-04.png" alt="Role-based business applications icon" width={40} height={40} />
                    </div>
                    <p>Support teams with applications built for their day-to-day work </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-05.png" alt="Microsoft 365 integration icon" width={40} height={40} />
                    </div>
                    <p>Connect <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">Microsoft tools</Link> your people already use </p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-06.png" alt="Scalable cloud growth icon" width={40} height={40} />
                    </div>
                    <p>Scale without replacing your technology again</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="solution-new-six-card d-flexsolu">
                    <div className='i-pic'>
                      <Image src="/img/AI-Powered-07.png" alt="Secure cloud access icon" width={40} height={40} />
                    </div>
                    <p>Work securely from anywhere using Microsoft's <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/" className="u-i">cloud platform</Link> </p>
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='ne-callt-batt'>
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">

                      <span>Explore the Dynamics 365 applications &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-7 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Explore the Dynamics 365 Applications</h2>
                  <p>No two organisations need exactly the same technology. That's why Microsoft Dynamics 365 is available as a collection of business applications that can be deployed individually or together, depending on your goals.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-business-central/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Dynamics 365 Business Central icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Business Central
                  </h3>
                </div>
                <p className="serv-card-text-666">Manage finance, purchasing, inventory, projects, and operations through one cloud ERP designed for growing businesses.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-finance/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-finance.svg" alt="Dynamics 365 Finance icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365<br /> Finance
                  </h3>
                </div>
                <p className="serv-card-text-666">Strengthen financial management with advanced budgeting, reporting, compliance, and multi-entity capabilities.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-supply-chain-management/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Supply Chain Management
                  </h3>
                </div>
                <p className="serv-card-text-666">Improve planning, manufacturing, warehousing, procurement, and logistics with greater operational visibility.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-sales/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="Dynamics 365 Sales icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Sales
                  </h3>
                </div>
                <p className="serv-card-text-666">Help your sales teams manage opportunities, strengthen customer relationships, and forecast revenue more accurately.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-customer-service/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-service.svg" alt="Dynamics 365 Customer Service icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Customer Service
                  </h3>
                </div>
                <p className="serv-card-text-666">Deliver consistent customer support across multiple channels while helping service teams resolve issues more efficiently.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-field-service/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-fieldservice.svg" alt="Dynamics 365 Field Service icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Field Service
                  </h3>
                </div>
                <p className="serv-card-text-666">Schedule technicians, manage work orders, and improve on-site service delivery with intelligent field service tools.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-customer-engagement/" className="serv-card-666">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="Dynamics 365 Customer Insights icon" width="48" height="48" loading="lazy" decoding="async" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Dynamics 365 <br /> Customer Insights
                  </h3>
                </div>
                <p className="serv-card-text-666">Bring customer data together to create personalised experiences and support more effective marketing and engagement.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-7 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Choose the Right Dynamics 365 Application</h2>
                  <p>Not every business needs every application from day one. The right starting point depends on your goals, operational priorities, and stage of growth.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className="table-responsive">
                <table className="table ds-table-666 align-middle mb-0">
                  <thead>
                    <tr>
                      <th>Purpose</th>
                      <th>Consider</th>
                    </tr>
                  </thead>

                  <tbody>

                    <tr>
                      <td>
                        Manage finance, inventory, purchasing, and day-to-day operations
                      </td>
                      <td><Link href="/products/dynamics-365-business-central/" className="u-i">Dynamics 365 Business Central</Link></td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Strengthen financial planning, compliance, and global financial management
                      </td>
                      <td><Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link></td>
                    </tr>

                    <tr>
                      <td>
                        Improve manufacturing, warehousing, procurement, and logistics
                      </td>
                      <td><Link href="/products/dynamics-365-supply-chain-management/" className="u-i">Dynamics 365 Supply Chain Management</Link></td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Increase sales productivity and improve pipeline visibility
                      </td>
                      <td><Link href="/products/microsoft-dynamics-365-sales/" className="u-i">Dynamics 365 Sales</Link></td>
                    </tr>

                    <tr>
                      <td>
                        Deliver better, more consistent customer support
                      </td>
                      <td><Link href="/products/microsoft-dynamics-365-customer-service/" className="u-i">Dynamics 365 Customer Service</Link></td>
                    </tr>

                    <tr className='ds-table-bg'>
                      <td>
                        Manage onsite service teams and work orders
                      </td>
                      <td><Link href="/products/microsoft-dynamics-365-field-service/" className="u-i">Dynamics 365 Field Service</Link></td>
                    </tr>

                    <tr>
                      <td>
                        Understand customer behaviour and deliver personalised engagement
                      </td>
                      <td><Link href="/products/dynamics-365-customer-engagement/" className="u-i">Dynamics 365 Customer Insights</Link></td>
                    </tr>

                  </tbody>
                </table>

              </div>
            </div>
            <div className='col-lg-7'>
              <div className='mt-4'>
                <p>You don't have to deploy every application at once. Many organisations begin with a single solution and expand as new requirements emerge. Still weighing up ERP options? Compare <Link href="/d365-business-central-vs-d365-finance/" className="u-i">Business Central vs Finance</Link>.</p>

                <p>Need help deciding? <Link href="/contact-us/" className="u-i">Speak to a Dynamics 365 Consultant</Link>.</p>
                <div className='ne-callt-batt'>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">

                    <span>Schedule a Free Call Now &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className='solution-new-cta slution-new-cta-two0'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-0011'>
                <h2>Get Your Hands on The Ultimate Guide to Dynamics 365</h2>
                <br />
                <div className='product-side-002 product-side-002-ul'>
                  <p>This guide collates details you want to know about Microsoft Dynamics 365 in one place. You’ll find straightforward product comparisons, licensing explained in layman’s terms, tips on implementation and migration, the latest AI capabilities from Microsoft, industry examples and real customer success stories.</p>
                  <p><b>What's Inside This Guide?</b></p>
                  <br />
                  <ul>
                    <li>
                      <h4>61 Pages</h4>
                      <p>A practical guide that explains Microsoft Dynamics 365 from the ground up, without the jargon.</p>
                    </li>
                    <li>
                      <h4>Detailed Chapters on Solutions</h4>
                      <p>From Business Central and Finance to Sales, Customer Service, Power Platform, Microsoft Fabric, Copilot, and AI Agents.</p>
                    </li>
                    <li>
                      <h4>7 Real Business Case Studies</h4>
                      <p>See how organisations across different industries solved operational challenges and what they achieved.</p>
                    </li>
                    <li>
                      <h4>20+ AI Agents & Copilot Capabilities</h4>
                      <p>Explore Microsoft's latest AI capabilities across Business Central, Finance, Supply Chain Management, Sales, Field Service, and Customer Insights.</p>
                    </li>
                    <li>
                      <h4>6 Industry Solution Blueprints</h4>
                      <p>Learn how manufacturers, retailers, distributors, professional services firms, healthcare providers, and non-profits use Dynamics 365.</p>
                    </li>
                    <li>
                      <h4>ERP Comparison Framework</h4>
                      <p>Understand the difference between Business Central, Finance, and Supply Chain Management, and identify which fits your business.</p>
                    </li>
                    <li>
                      <h4>Implementation & Migration Roadmaps</h4>
                      <p>Follow proven approaches for Dynamics 365 implementation, NAV migration, legacy ERP replacement, cloud adoption, and post-go-live success.</p>
                    </li>
                    <li>
                      <h4>Licensing Made Simple</h4>
                      <p>Get a straightforward explanation of Business Central licensing, attach licences, and Microsoft's application ecosystem.</p>
                    </li>
                  </ul>
                </div>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Explore the Dynamics 365 applications &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div>
                <Image src="/img/AI-Powered-08.png" alt="The Ultimate Guide to Microsoft Dynamics 365 ebook cover" width={600} height={822} sizes="(max-width: 991px) 90vw, 600px" quality={70} style={{ width: '100%', height: 'auto', maxWidth: 600 }} />
              </div>
            </div>
          </div>
        </div>
      </section>




      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why Choose Dynamics Square?</h2>
                <p>The partner you choose will affect the success of your implementation, the speed of your teams’ adoption of the system, and the long-term value of your investment. As a renowned Dynamics 365 cloud ERP and CRM partner, Dynamics Square has a proven competence in CRM and ERP deployments. </p>
                <p>We help businesses in the UK transform their operations with Microsoft Dynamics 365 solutions built around their processes, people, and long-term goals.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-09.png" width={36} height={36} loading="lazy" decoding="async" alt="Microsoft-Certified Expertise" />
                <h3>Microsoft-Certified Expertise</h3>
                <p>Work with a team of Microsoft-certified consultants who specialise in ERP, CRM, Power Platform, AI, and cloud technologies, ensuring your solution is built on proven best practices.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-10.png" width={36} height={36} loading="lazy" decoding="async" alt="Business-First Solution Architects" />
                <h3>Business-First Solution Architects</h3>
                <p>We don't begin with software. We begin with your business. Our solution architects analyse your processes, identify gaps, and recommend the right approach before implementation starts.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-11.png" width={36} height={36} loading="lazy" decoding="async" alt="End-to-End Microsoft Capability" />
                <h3>End-to-End Microsoft Capability</h3>
                <p>From Dynamics 365 Business Central and Finance to Sales, Customer Service, <a href="/products/microsoft-power-platform/" style={inlineLink}>Power Platform</a>, <a href="/products/microsoft-azure/" style={inlineLink}>Azure</a>, and ISV integrations, you'll have one experienced partner for your entire Microsoft ecosystem.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-12.png" width={36} height={36} loading="lazy" decoding="async" alt="Experience That Spans Legacy and Modern Platforms" />
                <h3>Experience That Spans Legacy and Modern Platforms</h3>
                <p>Having worked with Microsoft business applications since the Dynamics NAV and AX era, we understand both legacy environments and modern cloud transformation, making <a href="/our-services/dynamics-365-upgrade-services/" style={inlineLink}>upgrades and migrations</a> significantly smoother for UK-based firms.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-13.png" width={36} height={36} loading="lazy" decoding="async" alt="Industry Knowledge That Goes Beyond Technology" />
                <h3>Industry Knowledge That Goes Beyond Technology</h3>
                <p>Our consultants have delivered Dynamics 365 projects in <a href="/industries/manufacturing/" style={inlineLink}>manufacturing</a>, healthcare, distribution, retail, education, and professional services domain. We have helped UK firms solve operational challenges than simply deploying software.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-14.png" width={36} height={36} loading="lazy" decoding="async" alt="Collaborative Delivery Model" />
                <h3>Collaborative Delivery Model</h3>
                <p>With responsive onsite and offshore teams, we combine local engagement with global delivery capability to keep projects moving efficiently while maintaining close collaboration.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-15.png" width={36} height={36} loading="lazy" decoding="async" alt="Built for Long-Term Partnerships" />
                <h3>Built for Long-Term Partnerships</h3>
                <p>Our relationship doesn't end at go-live. We continue to <a href="/our-services/dynamics-365-support-services/" style={inlineLink}>support</a>, optimise, and enhance your Dynamics 365 environment as your business evolves.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-16.png" width={36} height={36} loading="lazy" decoding="async" alt="Value Without Compromise" />
                <h3>Value Without Compromise</h3>
                <p>Our hybrid delivery model combines personalised consulting with cost-efficient execution. This lets us help you maximise the return on your Dynamics 365 investment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <h3>Experience Dynamics 365<br /> in Action</h3>
                <p>You can also get in touch with us for help related to Dynamics 365 sign-in & trial options so you can test capabilities in a guided environment.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Schedule Your Demo Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image style={{ mixBlendMode: 'normal' }} src="/img/AI-Powered-17.png" alt="Live Microsoft Dynamics 365 demo on laptop and mobile" width={680} height={418} sizes="(max-width: 991px) 100vw, 680px" quality={70} />
      </section>
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Microsoft Dynamics 365 Implementation That Fits Your Business</h2>
                </div>
                <p>Every Dynamics 365 project is unique. Some UK organisations replace legacy ERP software, others require CRM capabilities, modernise finance, or connect several business apps for the first time.</p>
                <p>Our specialists understand your company process before suggesting the proper implementation solution. Whether you are implementing a single Dynamics 365 application or rolling out in phases, we partner with your team to limit interruption and drive user adoption. Explore our application-specific services for <Link href="/dynamics-365-business-central-implementation/" className="u-i">Business Central</Link>, <Link href="/dynamics-365-finance-implementation/" className="u-i">Finance</Link>, <Link href="/d365-supply-chain-management-implementation/" className="u-i">Supply Chain Management</Link>, <Link href="/dynamics-365-sales-implementation/" className="u-i">Sales</Link>, <Link href="/dynamics-365-customer-service-implementation/" className="u-i">Customer Service</Link> and <Link href="/dynamics-365-field-service-implementation/" className="u-i">Field Service</Link> implementation.</p>
                <p>We have delivered <Link href="/our-services/dynamics-365-implementation-services/" className="u-i">Microsoft Dynamics 365 implementation</Link> projects for organisations across the UK because we understand local business processes, regulatory issues, and the practical obstacles of replacing legacy ERP and CRM systems.</p>
              </div>

            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001-tbas'>
                <p><b>Our implementation services include:</b></p>
                <ul className='bc-tags'>
                  <li>Business process discovery</li>
                  <li>Solution design and configuration</li>
                  <li>Data migration</li>
                  <li>System integrations</li>
                  <li>User training</li>
                  <li>Ongoing optimisation</li>
                  <li>Go-live support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row align-items-center cta-impl-666">
            <div className="col-lg-7">
              <div className="cta-content-666">
                <h2>Want to understand the complete implementation journey?</h2>
                <p>
                  Read our Complete <a href="/blog/dynamics-365-implementation-guide/"><b>Guide to Dynamics 365
                    Implementation</b>.</a>
                </p>
              </div>
            </div>

            <div className="col-lg-5 text-lg-end mt-3 mt-lg-0">
              <a href="#exampleModal"
                data-bs-toggle="modal" className="cta-btn-666">
                Talk to a Dynamics 365 Implementation Expert
                <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-new-banner-twoa">
        <div className='container'>
          <div className='row'>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Dynamics 365 Pricing & Licensing</h2>
                </div>
                <p>Microsoft Dynamics 365 offers a flexible licensing model. This lets UK organisations to license the applications and users they need without paying for unnecessary functionality. Costs vary depending on the applications selected, user roles, integrations, and the complexity of your implementation.</p>
                <p>We help UK organisations choose the right licensing model while considering future growth, compliance requirements, operational budgets, and the applications they need today.</p>
                <div className='product-side-001-tbas'>
                  <p><b>We'll help you understand:</b></p>
                  <ul className='bc-tags'>
                    <li>Business and Enterprise applications </li>
                    <li>Full User and Team Member licences </li>

                    <li><Link href="/erp-implementation-cost-calculator/">Implementation costs</Link></li>
                    <li><Link href="/our-services/dynamics-365-support-services/">Ongoing support options</Link></li>

                    <li>Future licensing requirements </li>
                    <li>Attach licences</li>
                    <li>Advice on licensing for multi-company and multi-entity organisations</li>
                  </ul>
                </div>
                <p>Our approach is structured, transparent, and outcome driven. We prioritise operational clarity, risk mitigation, and measurable ROI. We do not believe in overselling functionality. We architect systems aligned with operational reality.</p>
              </div>

            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/AI-Powered-18.png" width={630} height={336} alt="Microsoft Dynamics 365 pricing and licensing options" sizes="(max-width: 991px) 90vw, 630px" quality={70} style={{ width: '100%', height: 'auto', maxWidth: 630 }} />
                </div>
                <div className="cta-box-666">
                  <h3>Looking for a tailored estimate?</h3>
                  <p>
                    Our team will recommend the right licensing approach
                    based on your business goals and budget.
                  </p>
                  <a href="#exampleModal"
                    data-bs-toggle="modal" className="cta-btn-6666">
                    Get a Free Consultation!
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two0'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8 text-center'>
              <div className='solution-new-cta-0011' style={{ paddingBottom: '40px' }}>
                <h2>Dynamics 365 Integrations</h2>
                <p>Connect <Link href="/products/microsoft-dynamics-365/integration/" className="u-i">Dynamics 365 with the tools your business already uses</Link></p>
                <p>Microsoft Dynamics 365 works best when it fits naturally into your existing technology setup. Whether you rely on Microsoft applications or third-party business systems, our consultants help you create a connected environment where information flows securely and efficiently across your organisation.</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-6 align-self-center'>
              <div>
                <Image src="/img/AI-Powered-19.png" alt="Microsoft Dynamics 365 integrations with Power Platform, Azure and third-party apps" width={614} height={473} sizes="(max-width: 991px) 90vw, 614px" quality={70} style={{ width: '100%', height: 'auto', maxWidth: 614 }} />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='solution-new-cta-0011'>
                <div>
                  <p><b>Popular Dynamics 365 integrations include:</b></p>
                  <ul>
                    <li><Link href="/products/microsoft-power-platform/" className="u-i">Power Apps & Power Automate</Link></li>
                    <li><Link href="/products/microsoft-azure/" className="u-i">Microsoft Azure</Link></li>
                    <li>Shopify and other eCommerce platforms</li>
                    <li>Banking, payment, and UK tax compliance solutions</li>
                    <li>Document management systems</li>
                    <li>Warehouse Management Systems (WMS)</li>
                    <li>HR and payroll applications</li>
                    <li>HMRC and Making Tax Digital (MTD) compatible finance solutions</li>
                    <li>Industry-specific ISV solutions</li>
                  </ul>
                </div>
                <br />
                <p>From planning integrations to managing data migration, Dynamics Square ensures your Dynamics 365 solution works seamlessly with the systems your business depends on.</p>

                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak to an Integration Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Supporting UK Businesses with Microsoft Dynamics 365</h2>
                <p>Microsoft Dynamics 365 helps organisations across the UK manage finance, operations, sales, customer service, and supply chains while adapting to changing business requirements. Whether you're replacing legacy systems, expanding into new markets, or preparing for future compliance requirements, Dynamics 365 provides the flexibility to support your growth with applications that evolve alongside your business.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-20.png" width={36} height={36} loading="lazy" decoding="async" alt="Designed for UK Businesses" />
                <h3>Designed for UK Businesses</h3>
                <p>Implement solutions aligned with local business practices for <a href="/dynamics-365-for-small-businesses/" style={inlineLink}>small</a>, <a href="/dynamics-365-for-medium-businesses/" style={inlineLink}>medium</a> and <a href="/dynamics-365-for-large-businesses/" style={inlineLink}>large</a> businesses.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-21.png" width={36} height={36} loading="lazy" decoding="async" alt="Supports Compliance" />
                <h3>Supports Compliance</h3>
                <p>Applications such as Dynamics 365 Business Central and Finance can support VAT reporting and <a href="/blog/making-tax-digital-business-central-and-hmrc-integration/" style={inlineLink}>Making Tax Digital</a> (MTD) requirements when configured appropriately.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <img src="/img/AI-Powered-22.png" width={36} height={36} loading="lazy" decoding="async" alt="Local Expertise" />
                <h3>Local Expertise</h3>
                <p>Work with Microsoft-certified consultants who have delivered Dynamics 365 projects across the UK. See our <a href="/case-studies/" style={inlineLink}>case studies</a>.</p>
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
                <h2>Have you got
                  questions about Microsoft Dynamics 365 for AI-Powered ERP & CRM Solutions?</h2>
                <p>Click through to our FAQ for the best answers!</p>
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

export default AiERP;
