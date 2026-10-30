import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/business_centeral_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import NavBar from '../../../components/NavBar';
import CaseStudies from '../../../components/CaseStudies';
import PageSeo from "../../../components/PageSeo";

// Modal form (EmailJS + phone input) and client-fetched blog cards are not needed for first paint.
const BcPopPdf = dynamic(() => import('../../../components/BCPdfPopup'), { ssr: false });
const BlogFinanaceCard = dynamic(() => import('../../../components/BlogFinanaceCard'), { ssr: false });



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const BusinessCentral = () => {
  /*gsap card scroll*/
  // const containerRef = useRef(null);
  // useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [activeCap, setActiveCap] = useState(1);
  const capPanesRef = useRef(null);
  // Bring the opened capability into view when its top is off screen (long panels leave it above the fold).
  const selectCap = (i, btn) => {
    setActiveCap(i);
    // On mobile the tabs are a horizontal pill row: slide the tapped pill to the centre.
    const nav = btn && btn.parentElement;
    if (nav && nav.scrollWidth > nav.clientWidth) {
      const navRect = nav.getBoundingClientRect();
      const btnRect = btn.getBoundingClientRect();
      nav.scrollTo({ left: nav.scrollLeft + btnRect.left - navRect.left - (navRect.width - btnRect.width) / 2, behavior: 'smooth' });
    }
    const el = capPanesRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 120 || top > window.innerHeight - 160) {
      window.scrollTo({ top: window.scrollY + top - 120, behavior: 'smooth' });
    }
  };

  const [pdfType, setPdfType] = useState(null);
  const handleOpenModal = (type) => {
    setPdfType(type);
    // Open modal manually (needed since you use Bootstrap)
    // BcPopPdf is lazy-loaded, so the modal may not be in the DOM on a very early click.
    const el = document.getElementById('pdfModel');
    if (!el || typeof bootstrap === 'undefined') return;
    const modal = new bootstrap.Modal(el);
    modal.show();
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Dynamics 365 Business Central - Dynamics Square UK"
        description="Microsoft Dynamics 365 Business Central is an all-in-one cloud ERP for SMBs to manage finance, sales, inventory and operations efficiently with real-time insights and scalable growth."
        keywords="Microsoft Dynamics 365 Business Central, Business Central UK, Microsoft Dynamics 365 Pricing, Business Central Team Member License, Business Dynamics 365, Dynamics 365 Business Central Essentials, ERP Microsoft Dynamics 365,Microsoft 365 Business, Microsoft Bc, Microsoft Business Central Pricing UK, Microsoft Business Central Partner, Business Central Integration, MS Dynamics Business Central, Business Central Support"
        image="/img/business-center-new-banner.png"
        extraSchema={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [{
                  "@type": "Question",
                  "name": "What is Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is a one-stop solution for all your enterprise needs. Since Business Central is built with excel-like features and easy-to-use navigation, anyone exposed to advanced excel functionality can easily adapt and leverage the powerful use of Business Central.Business Central is designed as a complete ERP solution for modern enterprises seeking to simplify end-to-end enterprise practices from financials to sales, warehousing to supply chain, project management to general reporting, assembly to manufacturing; Business Central is embedded with all potential business management solutions that give you real-time eyes into your business. You can host your application whether on cloud (private or public) or on-premise; the choice is yours. When it comes to Dynamics 365 Business Central Overview, it comprises huge things. To get more information about Business Central, how it works, and how it can transform your business context, do contact Dynamics Square. Our Dynamics 365 Business Central experts can assist you with the right and precise information."
                  }
                }, {
                  "@type": "Question",
                  "name": "How is Business Central related to Dynamics NAV?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is the updated version of Dynamics NAV. With its upgrade, Microsoft changed its name too. The Core functionality remains the same and is updated with advanced features and navigation to support modern enterprises and to serve every industry. However, existing Dynamics NAV users can still avail of the support services. Dynamics Square offers highly reliable and efficient NAV and Business Central Support Services at cost-effective rates."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do I upgrade to Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Often, enterprises seem confused about when is the right time to upgrade to Dynamics 365 Business Central. If the same question is rolling out in your mind, contact Dynamics Square. We provide free-system health-check to identify your system lacks and upgrading needs considering your current business practices. Our experts can let you know whether you are in need to upgrade your current system or not. To know more about Why move to Dynamics 365 Business Central? Contact our Dynamics 365 experts, we can help you with all your questions. For instance, when you need to upgrade, what are possible personalised options for you? What sort of implementation practices do we follow while upgrading your existing business solution to Microsoft Dynamics 365 Business Central?"
                  }
                }, {
                  "@type": "Question",
                  "name": "Is there any training available to understand Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Microsoft Dynamics 365 Business Central comes with a simple, easy-to understand user interface and provides a smooth experience to all users, whether administrators or operators. There might be a need for training to understand the workings of added integrations, customisations, and add-ons. In such a case, you can avail yourself of the learning and training provided by your Business Central implementation partner, and they will guide you along the right path."
                  }
                }, {
                  "@type": "Question",
                  "name": "Can I customise Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Business Central is totally customisable as per your unique business and its changing needs. Irrespective of the industry, business type, and size, you can customise this powerful application to simplify your business operations. In short, customisations are the path to more productivity and easy business growth."
                  }
                }, {
                  "@type": "Question",
                  "name": "What industries can Dynamics 365 Business Central Support?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central is designed in such a way that any industry from retailers to manufacturers, food & beverages to operations, e-commerce industry to financial services, and more can avail of seamless support in terms of Dynamics 365 business central. Moreover, Business Central can be personalised as per your industry-specific needs, or custom operational navigation takes place in your organization.To get more information about how this ERP solution can be implemented and leveraged by your specific industry, talk to us, we as a Business Central Consulting Services Provider are here to answer all your queries."
                  }
                }, {
                  "@type": "Question",
                  "name": "How much does Dynamics 365 Business Central cost?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Dynamics 365 Business Central pricing goes as per your specific business processes. You can choose out of the given licensing options:Essential Premium Team Member Essential plan comes to fulfil your essential business requirement whereas premium comes with extra functionality layers. For Dynamics 365 Business Central Essential plan, you will be charged £61.50 per user/per month. For Dynamics 365 Business Central Premium plan, you need to invest £84.60 per user/per month. For Dynamics 365 Business Central Team Member, users will be charged £6.20 per user/per month. If you manage processes like finance, purchase/sales, and inventory, an essential license would be an ideal deal for your business to start your journey. If you are a manufacturer and provide services, a premium license would be the best-suitable way to start with. So, it's up to you, you can buy Business Central suited to your specific needs or user requirements. To know more or which plan would be ideal for your business, Dynamics Square - Microsoft authorised Business Central Consulting Services provider can help. Here you need to understand that this cost is just a licensing cost, it doesn't include any sort of implementation, customisation, or integration cost. Your actual costs can be revealed by your Dynamics 365 Business Central Implementation Partner once you share your requirement with them. Initially, you can start with Microsoft Business Central Trial at no cost for 30 days. After your trial period, if you find Business Central - a suitable deal for your business, you can continue by availing any of the given licensing suited to your budget and requirements."
                  }
                }, {
                  "@type": "Question",
                  "name": "How do I get ongoing support for Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You will get direct support from Dynamics Square as we are a Microsoft Solutions Partner for Microsoft's products with existence in the UK market and other global locations with a well-equipped support system. Our support system includes end-user training, technical assistance, and off-hours support whenever required. If you are seeking professional and trustworthy support services, selecting Dynamics Square - a trustworthy Business Central Support Partner in the UK can help."
                  }
                }, {
                  "@type": "Question",
                  "name": "How does Power BI Fit with Dynamics 365 Business Central?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Business Central is an all-in-one ERP solution. In case you want advancement in your reporting & analytics terms, seamless integration with Power BI can be done as both are Microsoft's products, hence, Power BI fits well with Dynamics 365 Business Central. Power BI can enable visualisation in your reporting, key metrics, and your entire business analytics. You can create your own business reports and dashboards leveraging standard reporting templates and other visuals. If you want expert advice on how you can leverage Power BI and Business Central together, connect with us, being a reliable Business Central Support, NAV Upgrade, and Implementation partner, we can always provide you with expert consulting."
                  }
                }]
              }}
      >
        <link rel="preload" href="/fonts/lato-latin-700-v1.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </PageSeo>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Business Central</h1>
                <span className='large-heading'>Deploy a solution trusted <br />by over 50,000 SMBs across the world</span>
                <p>Microsoft Dynamics 365 Business Central eliminates the need for multiple tools and acts as a single source of truth across your operations. Business Central is an advanced Microsoft ERP with out-of-the-box AI capabilities and has less than 6 months of payback on investment.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to our business central experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              {/* <div className='m-b-image'>
                <Image src="/img/bc-mobile-banner.png" alt='bc-mobile-banner' width={1098} height={657} sizes="(max-width: 991px) 100vw, 1098px" />
              </div> */}
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="solution-new-banner-one-imgs">
                <Image src="/img/business-new-banner.png" alt="Microsoft Dynamics 365 Business Central dashboard" width={890} height={568} className="flot-1" sizes="(max-width: 991px) 100vw, 890px" priority />
              </div>
            </div>
          </div>
        </div>



        <div className='container cust-pp'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flecx'>
                <div className='left-fl'>
                  <p>Dynamics Square helps small and medium sized UK businesses simplify processes, boost productivity, and achieve measurable results with the AI-powered Dynamics 365 Business Central ERP.</p>
                </div>
                <div className='left-rl'>
                  <Image src="/img/partner-logo-black.png" width={193} height={55} alt="Microsoft Solutions Partner badge" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>What is Dynamics 365 Business Central?</h2>
                <p>Microsoft Dynamics 365 Business Central ties together your finance, operations, sales, customer service, project management and more to deliver a 360-degree business management system through AI, automation, and real-time insights.</p>
                <p>D365 Business Central brings your teams and business processes in sync and serves as one smart system. This helps you stay steady, save time, and make better decisions to take your business into the right direction. With the option of <a className='u-i' href="/products/dynamics-365-business-central/customisation/">Businesses Central customisation</a>, companies can add/remove Business Central functionalities cater to their operational requirements.</p>
                <p><b>In short, Microsoft Business Central is:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> All-in-one system for finance and operations</li>
                  <li><i className="bi bi-check2"></i> An AI-powered ERP with out-of-the-box Copilot</li>
                  <li><i className="bi bi-check2"></i> A scalable cloud platform that grows with your business</li>
                </ul>
                <p>Ready to move to this powerful cloud-based Microsoft ERP to unlock the growth of your business?</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Business Central Demo  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='dsa-minee'><Image src="/img/bb-cc-busneww.png" alt="business central dashboard" width={630} height={540} sizes="(max-width: 991px) 100vw, 630px" /></div>
            </div>
          </div>

        </div>
      </div>
      <NavBar />
      <section id='section2' className="solution-new-banner-two cv-auto">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Challenges Solved by Business Central</h2>
                <p><a href="/products/dynamics-365-business-central/advantages-capabilities/">Dynamics 365 Business Central capabilities</a> address challenges that a modern UK business can potentially face. Some of the most certain challenges include:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/bb-cc-busnew-01.png" width={320} height={440} alt="Business Challenges Solved by Business Central" />
                </div>
                <Image width={563} height={478} src="/img/n-007.png" alt="" className="flot-9 flot-10" aria-hidden="true" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <ul>
                  <li><i className="bi bi-check2"></i> <span> Operating on outdated, legacy solutions like <a href="/products/microsoft-dynamics-nav/">Dynamics NAV</a></span></li>
                  <li><i className="bi bi-check2"></i> Disconnected systems (no single source of truth)</li>
                  <li><i className="bi bi-check2"></i> Reduced productivity due to repetitive manual tasks</li>
                  <li><i className="bi bi-check2"></i> Issues navigating complex processes or data-heavy systems</li>
                  <li><i className="bi bi-check2"></i> Difficulty meeting HMRC reporting requirements and staying compliant with Making Tax Digital (MTD) regulations</li>
                  <li><i className="bi bi-check2"></i> Financial close cycles take too long, causing reporting delays</li>
                  <li><i className="bi bi-check2"></i> Poor forecasting due to fragmented data & manual entries</li>
                  <li><i className="bi bi-check2"></i> No multi-site capabilities, resulting in errors and duplication</li>
                  <li><i className="bi bi-check2"></i> Bank reconciliations wasting hours and remain prone to human error</li>
                  
                </ul>
                <p>And the list goes on…</p>
                <p>Business Central ERP is an integrated system that addresses all these aforementioned problems and beyond. It helps future-proof your business whether you are a startup that has just kicked off its operations or a promising growing business.</p>
                <p>Whether starting small or growing fast, D365 Business Central is what you need.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section3' className='solution-new-banner-three cv-auto' style={{ paddingBottom: '80px' }}>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Business Central Capabilities</h2>
                <p>Microsoft Dynamics 365 Business Central capabilities make it a widely preferred choice by small and midsize UK businesses.</p>
                <p>Is<a href="/blog/business-central-accounting-software/"> Business Central for Accounting</a>? Yes… and no. D365 BC is much more than just being accounting software. It supports companies across industries and keeps teams connected anywhere in the world.</p>
                <p><b>Business Central comes with the following capabilities:</b></p>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-12">
              
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Finance & Accounting </h3>
                      <p>Handling finances manually? One miscalculation could cost you thousands. With Business Central, you get: </p>
                      <ul>
                        <li>AI-powered financial forecasts to know your cash flow before problems arise.</li>
                        <li>Automated invoicing & bank reconciliation to eliminate costly human errors. </li>
                        <li>Built-in compliance tracking to stay audit-ready and never miss a tax deadline. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-008.png" width={574} height={369} alt="Automated finance and accounting in Business Central" sizes="(max-width: 991px) 100vw, 574px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smart Inventory & Supply Chain </h3>
                      <p>Every product you mismanage is money lost. Business Central ensures you: </p>
                      <ul>
                        <li>Avoid stockouts with demand forecasting. </li>
                        <li>Cut carrying costs by ordering just the right amount. </li>
                        <li>Automate vendor & purchase order management to reduce delays. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-009.png" width={574} height={360} alt="Smart inventory and supply chain in Business Central" sizes="(max-width: 991px) 100vw, 574px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>AI-Driven Insights: With Out-of-the-box Copilot </h3>
                      <p>Your competitors are using data to make smarter, faster decisions; are you? With Dynamics 365 Business Central, you:</p>
                      <ul>
                        <li>Get real-time dashboards to track sales, expenses & customer behaviour. </li>
                        <li>Use predictive analytics to anticipate trends and demand shifts. </li>
                        <li>Optimise pricing & marketing strategies using AI-driven insights. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-010.png" width={574} height={360} alt="AI-driven insights with Copilot in Business Central" sizes="(max-width: 991px) 100vw, 574px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Sales CRM: Close More Deals, Faster </h3>
                      <p>Your sales team shouldn’t waste time manually tracking leads or missing follow-ups. BC ERP empowers them to:</p>
                      <ul>
                        <li>Automate lead nurturing so no opportunity slips through the cracks. </li>
                        <li>Track every customer interaction for personalised service. </li>
                        <li>Turn data into sales strategies and know what works, and double down. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-011.png" width={584} height={369} alt="Sales CRM in Business Central" sizes="(max-width: 991px) 100vw, 584px" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Seamless Integrations: Work Smarter, Not Harder </h3>
                      <p>Switching between platforms kills productivity. Microsoft Business Central integrates effortlessly with:</p>
                      <ul>
                        <li>Microsoft 365 for smooth collaboration. </li>
                        <li>Power BI for next-level analytics & custom dashboards. </li>
                        <li>Third-party apps like Shopify, PayPal & more to fit your workflow. </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/n-012.png" width={571} height={369} alt="Business Central integrations" sizes="(max-width: 991px) 100vw, 571px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          <div className="row mar-top-7 bc-cap-tabs">
            <div className="col-lg-4">
              <div className="bc-cap-nav" role="tablist" aria-label="Business Central capabilities">
                <button type="button" role="tab" id="bc-cap-tab-1" aria-controls="bc-cap-pane-1" aria-selected={activeCap === 1} className={`bc-cap-nav-item${activeCap === 1 ? ' active' : ''}`} onClick={(e) => selectCap(1, e.currentTarget)}>
                  <span className='bc-cap-num'>01</span>
                  <span className='bc-cap-nav-title'>Financial Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-2" aria-controls="bc-cap-pane-2" aria-selected={activeCap === 2} className={`bc-cap-nav-item${activeCap === 2 ? ' active' : ''}`} onClick={(e) => selectCap(2, e.currentTarget)}>
                  <span className='bc-cap-num'>02</span>
                  <span className='bc-cap-nav-title'>Supply Chain Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-3" aria-controls="bc-cap-pane-3" aria-selected={activeCap === 3} className={`bc-cap-nav-item${activeCap === 3 ? ' active' : ''}`} onClick={(e) => selectCap(3, e.currentTarget)}>
                  <span className='bc-cap-num'>03</span>
                  <span className='bc-cap-nav-title'>Sales Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-4" aria-controls="bc-cap-pane-4" aria-selected={activeCap === 4} className={`bc-cap-nav-item${activeCap === 4 ? ' active' : ''}`} onClick={(e) => selectCap(4, e.currentTarget)}>
                  <span className='bc-cap-num'>04</span>
                  <span className='bc-cap-nav-title'>Ecommerce Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-5" aria-controls="bc-cap-pane-5" aria-selected={activeCap === 5} className={`bc-cap-nav-item${activeCap === 5 ? ' active' : ''}`} onClick={(e) => selectCap(5, e.currentTarget)}>
                  <span className='bc-cap-num'>05</span>
                  <span className='bc-cap-nav-title'>Customer Relationship Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-6" aria-controls="bc-cap-pane-6" aria-selected={activeCap === 6} className={`bc-cap-nav-item${activeCap === 6 ? ' active' : ''}`} onClick={(e) => selectCap(6, e.currentTarget)}>
                  <span className='bc-cap-num'>06</span>
                  <span className='bc-cap-nav-title'>Project Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-7" aria-controls="bc-cap-pane-7" aria-selected={activeCap === 7} className={`bc-cap-nav-item${activeCap === 7 ? ' active' : ''}`} onClick={(e) => selectCap(7, e.currentTarget)}>
                  <span className='bc-cap-num'>07</span>
                  <span className='bc-cap-nav-title'>Service Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-8" aria-controls="bc-cap-pane-8" aria-selected={activeCap === 8} className={`bc-cap-nav-item${activeCap === 8 ? ' active' : ''}`} onClick={(e) => selectCap(8, e.currentTarget)}>
                  <span className='bc-cap-num'>08</span>
                  <span className='bc-cap-nav-title'>Human Resources Management</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-9" aria-controls="bc-cap-pane-9" aria-selected={activeCap === 9} className={`bc-cap-nav-item${activeCap === 9 ? ' active' : ''}`} onClick={(e) => selectCap(9, e.currentTarget)}>
                  <span className='bc-cap-num'>09</span>
                  <span className='bc-cap-nav-title'>Business Intelligence: Analytics and Reporting</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-10" aria-controls="bc-cap-pane-10" aria-selected={activeCap === 10} className={`bc-cap-nav-item${activeCap === 10 ? ' active' : ''}`} onClick={(e) => selectCap(10, e.currentTarget)}>
                  <span className='bc-cap-num'>10</span>
                  <span className='bc-cap-nav-title'>Security</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
                <button type="button" role="tab" id="bc-cap-tab-11" aria-controls="bc-cap-pane-11" aria-selected={activeCap === 11} className={`bc-cap-nav-item${activeCap === 11 ? ' active' : ''}`} onClick={(e) => selectCap(11, e.currentTarget)}>
                  <span className='bc-cap-num'>11</span>
                  <span className='bc-cap-nav-title'>Workflows and Automation</span>
                  <i className="bi bi-arrow-right-short"></i>
                </button>
              </div>
            </div>
            <div className="col-lg-8" ref={capPanesRef}>
              <div role="tabpanel" id="bc-cap-pane-1" aria-labelledby="bc-cap-tab-1" className={`bc-cap-pane${activeCap === 1 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>01</span>
                  <h3>Financial Management</h3>
                  <p>General ledger, accounts payable and receivable, VAT and tax management, budgets, cash flow forecast, fixed assets, <a href="/blog/multi-entity-multi-currency-consolidation-in-business-central">multi-currency support</a></p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Financial Management Features:</h4>
                  <p>General ledger, accounts payable and receivable, VAT and tax management, dimensions, budgets, cost accounting, deferrals, allocation accounts, multiple currencies, consolidation, intercompany postings, fixed assets, cash management, bank reconciliation, reminders, check writing, subscription billing, and recurring and consumption-based billing.</p>
                  <h4>Business Central Financial Management Overview:</h4>
                  <p>Dynamics 365 Business Central Finance functionality simplifies daily accounting and covers advanced financial operations.
                  <a href="/products/dynamics-365-business-central/financial-management/">The Business Central Financial Management module</a> contains features like ledger posting, dimensions, VAT management, AP and AR, budgets, bank connectivity, reconciliations, subscription billing, and more. Leaders have access to timely Business Central reporting with reliable numbers for planning and compliant close.
                  </p>
                  <h4>Business Central Financial Management Benefits:</h4>
                  <ul>
                    <li>Faster financial close</li>
                    <li>Accurate forecasting</li>
                    <li>Stronger compliance</li>
                    <li>Improved, real-time visibility</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-2" aria-labelledby="bc-cap-tab-2" className={`bc-cap-pane${activeCap === 2 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>02</span>
                  <h3>Supply Chain Management</h3>
                  <p>Purchasing, inventory control, demand forecasting, warehouse management, manufacturing, planning and availability</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Supply Chain Management Features:</h4>
                  <p>Purchasing, vendor management, invoice discounts, alternative vendors, product information management, item attributes and variants, item references, substitutions with Copilot, inventory control and costing, item tracking, multiple locations, SKUs, transfers, shipping agents, item charges, planning and availability, demand forecasting, ATP or CTP, reservation, calendars, warehouse management, bins and picks, FEFO picking, cross docking, and manufacturing.</p>
                  <h4>Business Central Supply Chain Management Overview:</h4>
                  <p>Microsoft <a href="/products/dynamics-365-business-central/supply-chain-management/">Business Central Supply Chain module</a> helps manage inventory, vendors, and logistics with real-time visibility and automation.</p>
                  <p>D365 Business Central (BC) Supply Chain Management functionality comes with features like end-to-end flow across purchasing, inventory, planning, warehouse, and manufacturing. </p>
                  <p>Teams manage vendors and prices, maintain rich item data, track stock with serial or lot, plan supply through MPS or MRP, promise dates with ATP or CTP, and run warehousing with bins, picks, and put aways. This way, operations stay coordinated and timely.</p>
                  <h4>Business Central Supply Chain Management Benefits:</h4>
                  <ul>
                    <li>On-time deliveries</li>
                    <li>Lower stock holding</li>
                    <li>Stronger supplier control</li>
                    <li>Efficient warehouse flow</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-3" aria-labelledby="bc-cap-tab-3" className={`bc-cap-pane${activeCap === 3 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>03</span>
                  <h3>Sales Management</h3>
                  <p>Sales quotes, order management, flexible pricing, invoice discounts, return management, Copilot sales assistance</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Sales Management Features:</h4>
                  <p>Customer records, quotes, blanket orders, sales orders, flexible line pricing and discounts, campaign pricing, invoice discounts, partial shipping, returns management, and <a href="/products/microsoft-dynamics-365-sales/copilot/">Microsoft Copilot sales assistance</a>.</p>
                  <h4>Business Central Sales Management Overview:</h4>
                  <p><a href="/products/dynamics-365-business-central/sales-order-management/">Dynamics 365 Business Central Sales</a> streamlines quotes, orders, and pricing to build stronger customer relationships.</p>
                  <p>Business Central Sales functionality handles the order to invoice journey. Teams create quotes and orders, apply price lists and discounts, ship partially when required, manage returns and credit, and generate accurate invoices. Microsoft Copilot in Business Central can suggest sales lines from natural prompts or files, which speeds document creation and reduces manual entry.</p>
                  <h4>Business Central Sales Management Benefits:</h4>
                  <ul>
                    <li>Faster order cycle</li>
                    <li>Accurate pricing logic</li>
                    <li>Happier repeat customers</li>
                    <li>Stronger sales control</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-4" aria-labelledby="bc-cap-tab-4" className={`bc-cap-pane${activeCap === 4 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>04</span>
                  <h3>Ecommerce Management</h3>
                  <p>Shopify integration, multi-store management, customer sync, inventory synchronisation, e-documents support</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Ecommerce Management Features:</h4>
                  <p><a href="/shopify-connector-business-central/">Shopify connector</a>, multi store scenarios, sync items, inventory, customers, orders and transactions, Shopify DTC and B2B, metafields support, scheduled background sync, export posted invoices, and electronic documents handling with Microsoft Copilot mapping.</p>
                  <h4>Business Central Ecommerce Management Overview:</h4>
                  <p>D365 Business Central Ecommerce module helps connect online stores and business processes for seamless selling and fulfilment. </p>
                  <p>Products, variants, prices, and stock flow to Shopify, while orders, customers, edits, refunds, and fulfilments flow back. Teams run DTC and B2B models, map metafields, and schedule sync tasks, with electronic documents supported for compliant billing.</p>
                  <h4>Business Central Ecommerce Management Benefits:</h4>
                  <ul>
                    <li>Unified commerce data</li>
                    <li>Fewer order errors</li>
                    <li>Faster fulfilment cycles</li>
                    <li>Connected operations</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-5" aria-labelledby="bc-cap-tab-5" className={`bc-cap-pane${activeCap === 5 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>05</span>
                  <h3>Customer Relationship Management</h3>
                  <p>Contact management, campaigns, opportunity tracking, email logging, Dynamics 365 Sales integration</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Customer Relationship Management Features:</h4>
                  <p>Contacts and accounts, profiling and ABC segmentation, campaigns, interaction and document history, email logging with Exchange, opportunity management, and <a href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a> integration.</p>
                  <h4>Business Central Customer Relationship Management Overview:</h4>
                  <p>Dynamics 365 Business Central CRM module centralises customer data to improve campaigns, sales, and engagement.</p>
                  <p>This <a href="/blog/crm-functionality-in-dynamics-365-business-central/">Business Central CRM functionality</a> covers contact centric selling. Teams manage people and companies, track calls, meetings, and files, plan and run campaigns, score segments, and follow opportunities through defined stages. Integration with Dynamics 365 Sales supports lead to cash flow, shared price lists, inventory checks, and order sync for fulfilment and billing.</p>
                  <h4>Business Central Customer Relationship Management Benefits:</h4>
                  <ul>
                    <li>Centralised customer view</li>
                    <li>Targeted campaigns</li>
                    <li>Better pipeline clarity</li>
                    <li>Higher retention rates</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-6" aria-labelledby="bc-cap-tab-6" className={`bc-cap-pane${activeCap === 6 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>06</span>
                  <h3>Project Management</h3>
                  <p>Project setup, budgeting, time tracking, resource allocation, invoicing, WIP calculation</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Project Management Features:</h4>
                  <p>Project setup and tasks, budgets, resource and capacity planning, timesheets, WIP calculation, project invoicing, project-specific prices and costs, and project-based replenishment.</p>
                  <h4>Business Central Project Management Overview:</h4>
                  <p><a href="/products/dynamics-365-business-central/project-management/">Microsoft Dynamics 365 Business Central Project Management</a> functionality supports planning, tracking, and billing for successful project delivery.</p>
                  <p>Project Management functionality in Business Central allows managers to create tasks and budgets, allocate resources, collect time, calculate WIP to the ledger, and invoice fixed price or time and materials. Projects draw items through assembly to order or purchase creation, with role-based pages and reports for progress, costs, and profitability.</p>
                  <h4>Business Central Project Management Benefits:</h4>
                  <ul>
                    <li>On schedule delivery</li>
                    <li>Controlled project costs</li>
                    <li>Accurate phased billing</li>
                    <li>Clear profitability view</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-7" aria-labelledby="bc-cap-tab-7" className={`bc-cap-pane${activeCap === 7 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>07</span>
                  <h3>Service Management</h3>
                  <p>Service contracts, work order management, dispatching, service pricing, warranty tracking, Field Service integration</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Service Management Features:</h4>
                  <p>Planning and dispatching, service contracts, warranties, service items, service orders and repairs, service price management, and <a href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service integration</a>.</p>
                  <h4>Business Central Service Management Overview:</h4>
                  <p><a href="/products/dynamics-365-business-central/service-management/">Microsoft Business Central Service Management functionality</a> enhances service delivery with better scheduling and contract management.</p>
                  <p>The role of Service Management functionality in Business Central is to ensure service as a connected workflow. Teams dispatch technicians, manage contracts and entitlements, track service items and parts, set price groups for labour and materials, and invoice completed work. </p>
                  <p>Integration with Dynamics 365 Field Service carries work orders, consumption, and completion data back for accurate billing and inventory impact.</p>
                  <h4>Business Central Service Management Benefits:</h4>
                  <ul>
                    <li>Faster service response</li>
                    <li>Lower service costs</li>
                    <li>Contract-driven control</li>
                    <li>Higher satisfaction levels</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-8" aria-labelledby="bc-cap-tab-8" className={`bc-cap-pane${activeCap === 8 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>08</span>
                  <h3>Human Resources Management</h3>
                  <p>Employee records, absence tracking, payments, reimbursements</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Human Resources Management Features:</h4>
                  <p>Employee records, contracts and qualifications, absence registration and analysis, and employee payments and reimbursements.</p>
                  <h4>Business Central Human Resources Management Overview:</h4>
                  <p>D365 Business Central Human Resources module simplifies employee data management and streamlines HR tasks.</p>
                  <p>The HR functionality in Business Central helps HR teams to maintain accurate employee data, register leave with category or period filters, and process reimbursements through journals, including foreign currency claims. Clean records and basic reporting support compliance needs and smooth handling of day-to-day HR tasks.</p>
                  <h4>Business Central Human Resources Management Benefits:</h4>
                  <ul>
                    <li>Organised employee records</li>
                    <li>Clear absence trends</li>
                    <li>Smooth reimbursements</li>
                    <li>Lighter admin effort</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-9" aria-labelledby="bc-cap-tab-9" className={`bc-cap-pane${activeCap === 9 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>09</span>
                  <h3>Business Intelligence: Analytics and Reporting</h3>
                  <p><a href="/products/microsoft-power-bi/">Power BI integration</a>, 300+ built-in KPIs, financial reporting, data analysis with Copilot, 400+ reports</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Business Intelligence Features:</h4>
                  <p><a href="/blog/power-bi-reports/">Power BI reports</a>, 300+ built-in KPIs, self-service financial reporting, Excel export and layouts, built-in Data Analysis, Analysis Assist with Copilot, 400+ built-in reports, and ESG figures in statements.</p>
                  <h4>Business Central Business Intelligence Overview:</h4>
                  <p>Dynamics 365 Business Central Business Intelligence delivers insights and reporting tools for smarter decision-making.</p>
                  <p>Using Microsoft Business Central, teams can view reports in the client or mobile, set thresholds, share scorecards, and build statements from the chart of accounts. Besides, features like Lists support pivot-style analysis, while <a href="/blog/microsoft-dynamics-copilot/">Microsoft Copilot</a> prepares analysis tabs from plain prompts. Excel layouts and OneDrive links streamline reporting cycles.</p>
                  <h4>Business Central Business Intelligence Benefits:</h4>
                  <ul>
                    <li>Deeper KPI insight</li>
                    <li>Faster ad hoc analysis</li>
                    <li>Flexible reporting stacks</li>
                    <li>Confident analysis daily</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-10" aria-labelledby="bc-cap-tab-10" className={`bc-cap-pane${activeCap === 10 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>10</span>
                  <h3>Security</h3>
                  <p>Access control, compliance tools, multi-factor authentication, Microsoft Cloud security</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Security Features:</h4>
                  <p>Role-based access, privacy controls, audit and compliance foundations, Microsoft Cloud security, tenant data separation, and multi-factor authentication.</p>
                  <h4>Business Central Security Overview:</h4>
                  <p>Microsoft Dynamics 365 Business Central Security protects data with enterprise-grade security and compliance features.</p>
                  <p>In Business Central, access aligns with roles and permissions, privacy controls apply across services, and compliance frameworks support regional obligations. Authentication and tenant separation keep information segmented while teams work efficiently across integrated business processes.</p>
                  <h4>Business Central Security Benefits:</h4>
                  <ul>
                    <li>Strong data protection</li>
                    <li>Regulatory compliance</li>
                    <li>Granular access control</li>
                    <li>Enterprise-level cloud trust</li>
                  </ul>
                </div>
              </div>
              <div role="tabpanel" id="bc-cap-pane-11" aria-labelledby="bc-cap-tab-11" className={`bc-cap-pane${activeCap === 11 ? ' active' : ''}`}>
                <div className='bc-cap-pane-head'>
                  <span className='bc-cap-pane-num'>11</span>
                  <h3>Workflows and Automation</h3>
                  <p>Approval workflows, Power Automate integration, AI assistance</p>
                </div>
                <div className='bc-cap-pane-body'>
                  <h4>Business Central Workflows and Automation Features:</h4>
                  <p>Approval workflows, <a href="/products/microsoft-power-automate/">Power Automate integration</a>, and out-of-the-box Microsoft Copilot (AI) assistance for steps and mapping.</p>
                  <h4>Business Central Workflows and Automation Overview:</h4>
                  <p>Business Central Workflows and Automation streamline approvals and reduce manual tasks.</p>
                  <p>Business Central supports approvals and background processing across finance, purchasing, and sales. Power Automate connects workflows across teams, while Microsoft Copilot in Business Central assists with mappings and repetitive steps, which shortens cycle times and reduces manual entry. Processes keep moving while teams focus attention on higher value work.</p>
                  <h4>Business Central Workflows and Automation Benefits:</h4>
                  <ul>
                    <li>Faster approvals flow</li>
                    <li>Reduced manual errors</li>
                    <li>Smarter workflows</li>
                    <li>Smarter workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      <section id='section6' className='solution-new-six bc-copilot-ux cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Microsoft Copilot in Business Central</h2>
                <p>What if your ERP wasn’t just a system but an intelligent assistant that worked alongside you? Copilot in Dynamics 365 Business Central brings <a href="/blog/why-are-ai-agents-the-game-changer-for-business-central-users/">AI-powered automation</a>, smart insights, and real-time assistance to transform how your business operates. No more guesswork, no more wasted hours: just seamless efficiency! </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='solution-new-six-img'>
                <Image src="/img/copilotbc-new.png" width={1282} height={394} alt="Chat with Copilot Gives Guidance Inside Business Central" sizes="(max-width: 991px) 100vw, 1282px" />
              </div>
            </div>
          </div>
          <div className='row g-3 m-t-4'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-chat-dots"></i></span>
                <h3>Chat with Copilot Gives Guidance Inside Business Central</h3>
                <p>Ask questions in plain words, learn features, and follow guided steps directly in the app to complete daily work faster.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-shield-lock"></i></span>
                <h3>Responsible AI Safeguards Company Data Always</h3>
                <p>Data remains within tenant boundaries, with permissions carried through, and privacy and compliance supported by Microsoft’s Responsible AI principles.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-bank"></i></span>
                <h3>Bank Reconciliation Assist Matches Transactions with Confidence Faster</h3>
                <p>AI improves matching of bank statement lines, suggests ledger accounts, and helps finance teams reconcile balances with less manual effort.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-file-earmark-arrow-up"></i></span>
                <h3>Electronic Document Mapping Links Vendor Invoices with Purchase Orders</h3>
                <p>Copilot speeds invoice processing by suggesting mappings between vendor e-documents and purchase orders, reducing errors and saving processing time.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-arrow-left-right"></i></span>
                <h3>Item Substitution Suggestions Save Time and Prevent Duplicates</h3>
                <p>Copilot identifies close alternatives for items by scanning descriptions, which helps staff avoid duplicates and improves catalogue accuracy.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-pencil-square"></i></span>
                <h3>Marketing Text Suggestions Speed Product Listings and Pages</h3>
                <p>AI drafts item descriptions based on product attributes, giving brand-friendly phrasing to list items faster across sales channels.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-robot"></i></span>
                <h3>AI Agents Like <a href="/blog/sales-order-agent-explained-features-setup-and-benefits/">Sales Order Agent</a> Transform Daily Workflows</h3>
                <p>Agents such as the Sales Order Agent handle customer requests end-to-end, turning conversations into orders with user oversight.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card'>
                <span className='bc-copilot-icon'><i className="bi bi-chat-square-text"></i></span>
                <h3>Copilot Studio Builds Conversational Experiences Tied to Data</h3>
                <p>Businesses can design chat experiences connected to records and workflows, enabling staff to query data and act on processes easily.</p>
              </div>
            </div>

            <div className='col-lg-4 d-flex'>
              <div className='solution-new-six-card-cat'>
                <h3>Ready to move faster? See Copilot in Action!</h3>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Book a Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section-ai-agents' className='bc-ai-agents cv-auto'>
        <div className='container'>
          <div className='row g-4 align-items-start'>
            <div className='col-lg-5'>
              <div className='bc-ai-agents-head'>
                <h2>AI Agents in Business Central</h2>
                <p className='bc-ai-agents-tagline'>Let agents handle the routine. Let your people handle the thinking.</p>
                <p>Copilot answers questions, while <a href="/blog/why-are-ai-agents-the-game-changer-for-business-central-users/">AI agents in Business Central</a> handle routine jobs, involving people whenever decisions are needed.</p>
                <p>Microsoft provides agents for sales orders, supplier invoices and expenses, alongside tools to design your own.</p>
              </div>
            </div>
            <div className='col-lg-7'>
              <div className='row g-3'>
                <div className='col-md-6 d-flex'>
                  <div className='bc-ai-agent-card'>
                    <span className='bc-ai-agent-icon'><i className="bi bi-envelope-paper"></i></span>
                    <h3>Sales Order Agent</h3>
                    <p>Turns customer emails into PDF quotes by identifying products, checking stock and requesting clarification when needed. Your team approves every email before sending.</p>
                  </div>
                </div>
                <div className='col-md-6 d-flex'>
                  <div className='bc-ai-agent-card'>
                    <span className='bc-ai-agent-icon'><i className="bi bi-receipt"></i></span>
                    <h3>Payables Agent</h3>
                    <p>Reads supplier invoices, prepares draft purchase invoices and suggests matching purchase order lines. Your finance team reviews drafts before approval and posting.</p>
                  </div>
                </div>
                <div className='col-md-6 d-flex'>
                  <div className='bc-ai-agent-card'>
                    <span className='bc-ai-agent-icon'><i className="bi bi-wallet2"></i></span>
                    <h3>Expense Agent</h3>
                    <p>Reads receipts, categorises expenses and prepares expense reports for managerial review and approval.</p>
                  </div>
                </div>
                <div className='col-md-6 d-flex'>
                  <div className='bc-ai-agent-card'>
                    <span className='bc-ai-agent-icon'><i className="bi bi-tools"></i></span>
                    <h3>Build Your Own Agent</h3>
                    <p>Agent Designer lets you create agents using plain language, set permissions and test them safely. Activity logs record every run.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='bc-ai-agents-help bc-ai-agents-help--v2'>
            <div className='bc-ai-agents-help-text'>
              <span className='bc-ai-agents-help-icon'><i className="bi bi-person-check"></i></span>
              <div>
                <h3>How Dynamics Square Helps</h3>
                <p>Dynamics Square checks your data, connects mailboxes, configures permissions and trains supervisors to manage agents confidently.</p>
              </div>
            </div>
            <div className='bc-ai-agents-help-cta'>
              <h4>Ready to put agents to work?</h4>
              <Link
                href="#exampleModal"
                data-bs-toggle="modal"
                className="bc-ai-agents-btn">
                Book a demo! <span className='bc-ai-agents-btn-arrow'><i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='p-t-1-100 cv-auto'>
        <div className='container'>
          <div className="col-lg-8">
            <div className="solution-new-banner-sub-head">
              <h2>Why Business Central is Preferred by Small and Midsize Businesses</h2>
              <p>Irrespective of the industry, Dynamics 365 Business Central is the go-to choice for most SMBs. Some of the industries where this <a href="/products/microsoft-dynamics-erp/">Microsoft Cloud ERP</a> is deployed are:</p>
              <p>Manufacturing & Distribution |   Logistics & Supply Chain | Healthcare & Medical Service Providers | Education | Food and Beverages</p>
              <p>And the list goes on… Let’s explore more about the Business Central ERP solution.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link  active" id="pill-bc-01-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-01" type="button" role="tab" aria-controls="pill-bc-01" aria-selected="true">Forrester Study</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-02-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-02" type="button" role="tab" aria-controls="pill-bc-02" aria-selected="false">Success Stories</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-03-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-03" type="button" role="tab" aria-controls="pill-bc-03" aria-selected="false">Best ERP Solution</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pill-bc-04-tab" data-bs-toggle="pill" data-bs-target="#pill-bc-04" type="button" role="tab" aria-controls="pill-bc-04" aria-selected="false">Highly Rated</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* <p className='pt-200'><b>Reach new markets with Business Central</b></p> */}
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pill-bc-01" role="tabpanel" aria-labelledby="pill-bc-01-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='solution-new-banner-sub-head'>
                          <p>A 2024 Total Economic Impact™ Study by Forrester looked at how companies using Business Central cut costs and ran things more smoothly.</p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4 d-flex'>
                        <div className='icons-box-9901'>
                          <Image src="/img/bc-8-01.png" width={65} height={65} alt="" aria-hidden="true" />
                          <p className='stat-value'>265%</p>
                          <span>Return over 3 years </span>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='icons-box-9901'>
                          <Image src="/img/bc-8-02.png" width={65} height={65} alt="" aria-hidden="true" />
                          <p className='stat-value'>{"<"} 6 months</p>
                          <span>Of payback on investment</span>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='icons-box-9901'>
                          <Image src="/img/bc-8-03.png" width={65} height={65} alt="" aria-hidden="true" />
                          <p className='stat-value'>Up to 12.5%</p>
                          <span>Productivity boost for finance and ops teams</span>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className="text-lg-start">
                          <button
                            className="btn-get-started scrollto pdf-dd"
                            onClick={() => handleOpenModal('pdf1')}
                          >
                            Get the Full Report* &nbsp;<i className="bi bi-arrow-right"></i>
                          </button>
                          <p className='disclm'>*This report was commissioned by Microsoft and conducted by Forrester Consulting. All rights belong to their respective owners.</p>

                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-02" role="tabpanel" aria-labelledby="pill-bc-02-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div>
                          <p>Stats speak for themselves. When a solution is trusted by over 45,000 SMBs, it is for a reason. It is for the results that Microsoft Business Central has delivered.</p>
                          <p><b>Business Central Success Stories:</b></p>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <div>
                            <Image src="/img/bb-cc-busnew-03.jpg" width={733} height={384} alt="Oil and gas company finance team using Business Central" sizes="(max-width: 991px) 100vw, 733px" />
                            <h3>A reputed brand from the oil & gas industry achieved:</h3>
                            <ul>
                              <li>Up to 5x faster financial reporting</li>
                              <li>400% faster month-end close process</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <div>
                            <Image src="/img/bb-cc-busnew-04.jpg" width={733} height={384} alt="Laboratory equipment manufacturer using Business Central" sizes="(max-width: 991px) 100vw, 733px" />
                            <h3>A leading laboratory equipment manufacturer attained:</h3>
                            <ul>
                              <li>20% reduction in order processing times</li>
                              <li>From 3 days to 2 hours reduction in data repair times</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card-0-001'>
                          <div>
                            <Image src="/img/bb-cc-busnew-05.jpg" width={733} height={384} alt="Freight company operations managed in Business Central" sizes="(max-width: 991px) 100vw, 733px" />
                            <h3>A well-known freight company achieved:</h3>
                            <ul>
                              <li>33% improvement in close time</li>
                              <li>18% boost in on-time collections</li>
                            </ul>
                            {/* <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-03" role="tabpanel" aria-labelledby="pill-bc-03-tab">
                    <div className='row'>
                      <div><p>Business Central is the best cloud-based ERP for growing businesses.</p>
                        <p><b>Key aspects:</b></p></div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Integrated Microsoft ERP</h3>
                          <p>Integrated Microsoft ERP: Connects easily with Microsoft 365 apps like Outlook, Excel, Teams, OneDrive, and <a href="/products/microsoft-power-platform/">Power Platform</a> to boost productivity and collaboration.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Out-of-the-box Microsoft Copilot</h3>
                          <p>First AI assistant across business functions that simplifies daily tasks such as creating sales lines, reconciling banks, analysing data, and mapping e-documents.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Cloud-based flexibility</h3>
                          <p>Delivers scalability, easier onboarding, and frees IT resources while ensuring security, privacy, and compliance.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex' Cloud-base>
                        <div className='solution-new-six-card'>
                          <h3>Fast to implement, easy to configure</h3>
                          <p>Businesses can start quickly, tailor settings for specific industries, and use in-product wizards and Microsoft Learn resources.</p>
                        </div>
                      </div>

                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Built-in analytics</h3>
                          <p>Out-of-the-box KPIs, dashboards, and Power BI integration provide insights for every role.</p>
                        </div>
                      </div>
                      <div className='col-lg-4 d-flex'>
                        <div className='solution-new-six-card'>
                          <h3>Global-ready</h3>
                          <p>Supports 50+ languages and 170+ localisations to meet local compliance and reporting needs.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pill-bc-04" role="tabpanel" aria-labelledby="pill-bc-04-tab">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='image-list-new' style={{ padding: '0px 0px' }}>
                          <p><b>Rated highly by leading tech platforms</b></p>
                          <div className="image-list-new-im image-list-new-im-flex">
                            <div className='ii-pic-list'>
                              <div className='s-widt-p'>
                                <Image src="/img/rartin-log-01.png" alt="Gartner rating 4.3 out of 5" width={140} height={54} />
                              </div>
                            </div>
                            <div className='ii-pic-list'>
                              <div className='s-widt-p'>
                                <Image src="/img/rartin-log-02.png" alt="Forbes Advisor rating 5 out of 5" width={204} height={54} />
                              </div>
                            </div>
                            <div className='ii-pic-list'>
                              <div className='s-widt-p'>
                                <Image src="/img/rartin-log-03.png" alt="G2 rating 4 out of 5" width={130} height={54} />
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-lg-12'>
                        <div className='image-list-new' style={{ padding: '40px 0px 0px' }}>
                          <div className="image-list-new-im image-list-new-im-flex">
                            <div className='ii-pic-list'>
                              <div className='s-widt-p'>
                                <Image src="/img/rartin-log-04.png" alt="Software Suggest rating 4.7 out of 5" width={129} height={54} />
                              </div>
                            </div>
                            <div className='ii-pic-list'>
                              <div className='s-widt-p'>
                                <Image src="/img/rartin-log-05.png" alt="Capterra rating 4 out of 5" width={155} height={54} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudies />
      <section id='section5' className='solution-new-banner-five cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Trusted Microsoft Dynamics 365 Business Central Services by Dynamics Square</h2>
                <p>We are among the UK’s most trusted Microsoft Dynamics 365 Business Central partners. Our team helps small and mid-sized businesses run better with Dynamics 365 Business Central. From first setup to ongoing care, we make sure your system supports your goals at every step.</p>
                <p>With our industry knowledge, firms manage finance, sales, projects, and supply chains in one connected place. This reduces waste, improves clarity, and helps decision-makers act with confidence.</p>
                <p><b>Microsoft Dynamics 365 Business Central Services</b></p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/dynamics-365-business-central-implementation/">
                  <Image src="/img/new-b-i01.png" width={32} height={32} alt="Implementation" />
                  <h3>Implementation</h3>
                  <p>Our team at Dynamics Square carries out smooth Business Central implementations . We study your business needs carefully and configure the system so that every process runs in line with your goals.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/dynamics-nav-to-business-central/">
                  <Image src="/img/new-b-i02.png" width={32} height={32} alt="Upgrade and Migration" />
                  <h3>Upgrade and Migration</h3>
                  <p>Older systems can slow down growth. Microsoft Dynamics 365 Business Central helps firms move data safely from on-premises legacy systems into a cloud ERP that always stays up to date.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/d365-business-central-support/">
                  <Image src="/img/new-b-i03.png" width={32} height={32} alt="Support and Maintenance" />
                  <h3>Support and Maintenance</h3>
                  <p>Dynamics Square provides Business Central support and regular system care. Our focus is on keeping your ERP running smoothly, solving issues quickly, and improving efficiency without disruption.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/our-services/dynamics-365-consultant/">
                  <Image src="/img/new-b-i04.png" width={32} height={32} alt="Consulting" />
                  <h3>Consulting</h3>
                  <p>Our consultants guide firms on how to get the best from Business Central. With better planning, clearer reporting, and smoother workflows, businesses improve daily results.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/products/dynamics-365-business-central/customisation/">
                  <Image src="/img/new-b-i05.png" width={32} height={32} alt="Customisation" />
                  <h3>Customisation</h3>
                  <p>Every company works in its own way. Dynamics 365 Business Central allows tailored extensions and add-ons. Dynamics Square designs changes that match the way your teams actually work.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011'>
                <a href="/blog/business-central-with-power-platform-integration/">
                  <Image src="/img/new-b-i06.png" width={32} height={32} alt="Integration" />
                  <h3>Integration</h3>
                  <p>Business Central connects easily with Microsoft 365, Power Platform, and other third-party applications from ISVs. Dynamics Square integrates these systems so that staff can work from one source of truth.</p>
                  <span>Learn More</span>
                </a>
              </div>
            </div>



            <div className='col-lg-12' style={{ marginTop: '15px' }}>
              <div className='solution-new-card-001 solution-new-card-0011-p text-center'>
                <p>Our team of specialists is ready to help you make Business Central work for your business. Speak with us today and take the next step in managing finance, supply chain, sales, and service through one trusted system.</p>
                <div className="text-center" style={{ marginTop: '30px' }}>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                    style={{ display: 'inline-block', color: '#fff' }}>
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-cta cv-auto'>
        <div className='asd asd3'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>CASE STORY</span>
                  <h3>How a European Food Trading Startup Built Control Using Business Central</h3>
                  <div>
                    <Link href="/case-studies/business-central-reimplementation-for-food-trader/" className="btn-get-started scrollto">
                      <span>Read Case Story &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
     
      <section className='solution-new-banner-four cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Why Businesses Choose Dynamics Square</h2>
                <p>Dynamics Square is a trusted <a href="/our-services/dynamics-365-implementation-services/">Microsoft Dynamics 365 implementation partner</a> in the UK. We help small and mid-sized UK businesses manage finance, supply chain, sales, service, and projects with Microsoft Dynamics 365 Business Central. Our team focuses on steady results, clear guidance, and strong support. UK Businesses choose Dynamics Square as their Business Central implementation partner because we are:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Certified Microsoft Partner</h3>
                    <p>Proven expertise with 500+ successful projects and 150+ certified consultants</p>
                  </li>
                  <li>
                    <h3>Profound Industry Experience</h3>
                    <p>14+ years of experience with 12+ industries transformed</p>
                  </li>
                  <li>
                    <h3>Solution Architects</h3>
                    <p>We question, analyse, recommend, before we deploy</p>
                  </li>
                  <li>
                    <h3>360°Dynamics Expertise</h3>
                    <p>ERP, CRM, ISVs, Power Platform, all under one roof</p>
                  </li>
                  <li>
                    <h3>Agile Global Teams</h3>
                    <p>Collaborative and responsive onsite and offshore teams</p>
                  </li>
                  <li>
                    <h3>Presence Since NAV 5.0 and AX Era</h3>
                    <p>Experts who are into this when legacy systems used to be a big thing</p>
                  </li>
                  <li>
                    <h3>Value-Driven</h3>
                    <p>Hybrid model = cost-efficiency + personalised attention</p>
                  </li>
                  <li>
                    <h3>Trusted Long-Term Partner</h3>
                    <p>Our average client stays for 5+ years, and grows with us</p>
                  </li>
                  <li>
                    <h3>24x7 Customer Support</h3>
                    <p>Continuous support to keep your business up and running.</p>
                  </li>
                  <li>
                    <h3>Customer Satisfaction</h3>
                    <p>Our clients vouch for us. They share their success stories with us.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>

                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Get Free Consultation!  &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/bb-cc-busnew-06.png" width={401} height={455} alt="Why businesses choose Dynamics Square" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <Image src="/img/n-014.png" width={604} height={958} alt="" aria-hidden="true" />
        </div>
      </section>
      <section id='section7' className='solution-new-banner-fives cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-sub-head'>
                <h2>Make Business Central Work Smarter for Your Business</h2>
                <p>Add trusted apps that help shape Business Central around your needs. From payments to mobility, reporting to sales, find tools that fit right in and make daily work easier. </p>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/shopify-connector-business-central/">
                  <Image src="/img/bc-8-13.png" width={273} height={192} alt="" aria-hidden="true" />
                  <h3>Shopify Connector</h3>
                  <p>Keep stock, orders, and customer details in sync</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/blog/yavrio-integration-with-business-central/">
                  <Image src="/img/bc-8-14.png" width={273} height={192} alt="" aria-hidden="true" />
                  <h3>Bank Feeds and Payments</h3>
                  <p>Handle bank transactions and payments directly from Business Central</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/continia-for-dynamics-365-business-central/">
                  <Image src="/img/bc-8-15.png" width={273} height={192} alt="" aria-hidden="true" />
                  <h3>Document Management</h3>
                  <p>Scan, store, and track documents without switching systems</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <div className='card0-01'>
                <a href="/wms-for-business-central/">
                  <Image src="/img/bc-8-16.png" width={273} height={192} alt="" aria-hidden="true" />
                  <h3>Mobile WMS</h3>
                  <p>Pick, pack, and move stock on the go with handheld devices</p>
                  <div className='ct--a'>
                    <span>Get Started</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-new-banner-two cv-auto" style={{ backgroundColor: '#fff' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics’ Square Custom Business Central Solution</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/bc-cotainer.png" width={395} height={440} alt="Dynamics’ Square Custom Business Central Solution" />
                </div>
                <Image width={563} height={478} src="/img/n-007.png" alt="" className="flot-9" aria-hidden="true" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <p><b>Import Consignment Solution</b></p>
                <p>Manufacturers and supply chain firms in the UK depend heavily on overseas shipments. Delays, poor visibility, and scattered paperwork often create planning gaps that affect production. Import Consignment Solution is a Business Central based solution created by Dynamics Square to fix these challenges in a simple and direct way.</p>
                <p>With this extension, companies can see every container linked with purchase orders, record shipment details, and manage critical documents in one system. Teams can follow expected arrival times, split orders where needed, and track real dates against original plans. This means fewer surprises, steady production flow, and greater control over consignments.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Explore the Solution&nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>Act Now or Watch Others Take the Lead</h3>
                <p>Every moment without an integrated and AI-powered system is a lost opportunity, wasted time, and unnecessary expense. Choose Business Central: The Smartest Cloud ERP for Your Business!</p>
                <p>If Not Now, When?</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get Your Free Trial of BC Today*  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image src="/img/n-015.png" alt="" width={671} height={344} aria-hidden="true" />
      </section>
      <section id='section8' className='solution-new-pricing cv-auto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>D365 Business Central Pricing & Licensing:<br /> Invest in Growth, Not Complexity </h2>
                <p>Effortless scaling unlocks when you choose to invest in Business Central Cloud ERP. Decisions that used to wait for days, now take seconds! </p>
                <p>Transparent Pricing for UK Businesses </p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Free Trial</span>
                </h3>
                <p>Begin a 30-day trial to see how finance, sales, service, and operations align within a single experience. Engage with the platform and see real results.</p>
                <h4>£0.0*</h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Try for Free </a>
                <p className='disclm'>*Get a 30-day free trial to see it for yourself.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Essentials</span>
                </h3>
                <p>Handle finance, sales, and operations through one smart system. Built-in Copilot (Microsoft AI) helps you drive clarity, speed, and stronger outcomes.</p>
                <h4>£61.50<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Business Central<span>Premium</span>
                </h3>
                <p>Access every feature from the Essentials plan, along with advanced tools for service and manufacturing. Designed for expanding teams seeking better clarity.</p>
                <h4>£84.60<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Business Central<span>Team Member</span>
                </h3>
                <p>Gain access to view records, approve requests, and edit specific details. A perfect match for those supporting daily tasks across departments.</p>
                <h4>£6.20<span>/user/month</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Excluding VAT</p>
              </div>
            </div>

          </div>
          {/* <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001 solution-new-card-0011-p'>
                <p>No hidden fees. No overpriced customisations. Just the right tools to power your business.
                  The Cost of Doing Nothing? Far Greater. Compare plans and find your perfect fit!</p>
                < a href="/products/dynamics-365-business-central/pricing-licensing" className="btn-get-started scrollto">
                  <span>Learn More! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className='s-options-end'>
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Extend Smartly with Attach Licenses</h2>
                <p>Add new Dynamics 365 apps without paying the full price. Attach licenses allow you to expand across key areas while keeping your budget in check. Ideal for brands planning to add:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='hov-card-im01'>
                <a href="#exampleModal" data-bs-toggle="modal"><Image src="/img/bcplusales.png" width={631} height={320} alt="Business Central plus Dynamics 365 Sales attach licence" sizes="(max-width: 991px) 100vw, 631px" /></a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='hov-card-im01'>
                <a href="#exampleModal" data-bs-toggle="modal"><Image src="/img/bcpluscutmer.png" width={631} height={320} alt="Business Central plus Dynamics 365 Customer Service attach licence" sizes="(max-width: 991px) 100vw, 631px" /></a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 order-2'>
              <div className='row'>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Fresh Implementation & Migration Assistance</h3>
                    </div>
                    <p>Get up and running without headaches or hiccups. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Customisation & Optimisation</h3>
                    </div>
                    <p>Tailor Business Central ERP to match your workflows perfectly.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>24/7 Troubleshooting & Issue Resolution</h3>
                    </div>
                    <p>No waiting. No guesswork. Just solutions.</p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Performance Tuning & Upgrades</h3>
                    </div>
                    <p>Stay ahead with the latest features, AI enhancements & security updates. </p>

                  </div>
                </div>
                <div className='col-lg-6 d-flex'>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>User Training & Best Practices</h3>
                    </div>
                    <p>Empower your team to maximise efficiency and productivity.</p>

                  </div>
                </div>

              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div style={{ marginLeft: '15px' }}>
                    < a href="/d365-business-central-support/" className="btn-get-started scrollto">
                      <span>Learn More! &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-5 order-1'>
              <div className='img-backs-sid'>
                <Image src="/img/n-016.png" alt="copil-side" width={401} height={455} className='im-two' />
              </div>
            </div>
          </div>
        </div>
        <div className='n-017'><img src="/img/n-017.png" width={698} height={449} alt="copil-side" className='im-one-17' /></div>
      </section> */}
      <section id='section9' className='p-t-1-1000 cv-auto'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Business Central</h2>
              <p>Reports, e-books, videos, training, and more, everything you need to explore the system.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Case Stories</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-01-tab" data-bs-toggle="pill" data-bs-target="#pills-home-01" type="button" role="tab" aria-controls="pills-home-01" aria-selected="true">Researches</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-02-tab" data-bs-toggle="pill" data-bs-target="#pills-home-02" type="button" role="tab" aria-controls="pills-home-02" aria-selected="false">e-Books</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-04-tab" data-bs-toggle="pill" data-bs-target="#pills-home-04" type="button" role="tab" aria-controls="pills-home-04" aria-selected="false">Guides</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-06-tab" data-bs-toggle="pill" data-bs-target="#pills-home-06" type="button" role="tab" aria-controls="pills-home-06" aria-selected="false">Blog</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              {/* <p className='pt-200'><b>Reach new markets with Business Central</b></p> */}
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade" id="pills-home-01" role="tabpanel" aria-labelledby="pills-home-01-tab">

                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="#pdfModel" onClick={(e) => { e.preventDefault(); handleOpenModal('pdf2'); }}>
                            <Image src="/img/bc-8-18.png" width={368} height={192} alt="" aria-hidden="true" />
                            <h3>Reach new markets with Business Central</h3>
                            <p>Research from Nucleus shows better productivity, lower costs, and stronger control.</p>
                            <div className='ct--a'>
                              <span>Download the report</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="#pdfModel" onClick={(e) => { e.preventDefault(); handleOpenModal('pdf1'); }}>
                            <Image src="/img/bc-8-17.png" width={368} height={192} alt="" aria-hidden="true" />
                            <h3>See how firms gained from Business Central</h3>
                            <p>This 2024 Forrester study shows the returns real customers saw after getting started.</p>
                            <div className='ct--a'>
                              <span>Download the study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="#pdfModel" onClick={(e) => { e.preventDefault(); handleOpenModal('pdf3'); }}>
                            <Image src="/img/bc-8-19.png" width={368} height={192} alt="" aria-hidden="true" />
                            <h3>Why IDC picked Microsoft as a Leader</h3>
                            <p>Read how Microsoft stands out in small business ERP software. </p>
                            <div className='ct--a'>
                              <span>Read the excerpt</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="tab-pane fade" id="pills-home-02" role="tabpanel" aria-labelledby="pills-home-02-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/upgrade-nav-to-business-central/">
                            <Image src="/img/Ebook-Nav-to-BC.png" width={980} height={579} alt="Quick Start Guide for Upgrading NAV to Business Central" sizes="(max-width: 991px) 100vw, 980px" />
                            <h3>Quick Start Guide for Upgrading NAV to Business Central</h3>
                            <p>Learn when, why, and how to upgrade from Dynamics NAV to Business Central with confidence.</p>

                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/gp-to-bc-migration/">
                            <Image src="/img/dynamics-GP-BC-Ebook-featured-image.png" width={980} height={578} alt="Your Guide to Dynamics GP to Business Central Migration" sizes="(max-width: 991px) 100vw, 980px" />
                            <h3>Your Guide to Dynamics GP to Business Central Migration</h3>
                            <p>Find how businesses are moving from Microsoft GP to Business Central with confidence.</p>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-03" role="tabpanel" aria-labelledby="pills-home-03-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj" target='_blank'>
                            <Image src="/img/bc-8-20.png" width={411} height={216} alt="" aria-hidden="true" />
                            <h3>Is Your Business Ready for an ERP System?</h3>
                            <p>Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh" target='_blank'>
                            <Image src="/img/bc-8-21.png" width={411} height={216} alt="" aria-hidden="true" />
                            <h3>Unpacking Microsoft Dynamics 365 Business Central for Growth</h3>
                            <p>Learn how Business Central helps streamline operations and scale growth in this expert-driven podcast episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST" target='_blank'>
                            <Image src="/img/bc-8-22.png" width={411} height={216} alt="" aria-hidden="true" />
                            <h3>Signs Your Business Is Ready for an ERP System</h3>
                            <p>Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-04" role="tabpanel" aria-labelledby="pills-home-04-tab"><div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                      <div className='card0-01 card0-02'>
                        <a href="/guides/business-central-guide-for-smb/">
                          <Image src="/img/chapter5-5.png" width={992} height={499} alt="Comprehensive Business Central Guide for SMBs in 2026" sizes="(max-width: 991px) 100vw, 992px" />
                          <h3>Comprehensive Business Central Guide for SMBs in 2026</h3>
                          <p>A detailed guide helping SMBs automate operations, improve scalability, and prepare for long-term digital growth.</p>
                          <div className='ct--a'>
                            <span>View this Guide</span>
                          </div>
                        </a>
                      </div>
                    </div>

                  </div>
                  </div>
                  <div className="tab-pane fade show active" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/business-central-reimplementation-for-recycling-industry/">
                            <Image src="/img/Summit-Systems.png" width={850} height={410} alt="Driving Efficiency with Microsoft Business Central for Manufacturers" sizes="(max-width: 991px) 100vw, 850px" />
                            <h3>Driving Efficiency with Microsoft Business Central for Manufacturers</h3>
                            <p>Summit Systems, a UK plastic automation company, streamlined operations and scaled growth with Dynamics 365 Business Central.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/business-central-for-tool-manufacturing-company/">
                            <Image src="/img/tool-manufacturing-company.jpg" width={850} height={410} alt="Rolson Tools Restored Compliance with Business Central" sizes="(max-width: 991px) 100vw, 850px" />
                            <h3>Rolson Tools Restored Compliance with Business Central</h3>
                            <p>Rolson Tools restored compliance and rebuilt trust with Microsoft Dynamics 365.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/case-studies/migrate-on-premises-to-business-central-cloud/">
                            <Image src="/img/Dalebrook-Supplies.jpg" width={850} height={410} alt="Moving Business Central from On-Premises to Cloud" sizes="(max-width: 991px) 100vw, 850px" />
                            <h3>Moving Business Central from On-Premises to Cloud</h3>
                            <p>Dalebrook Supplies, a leading UK melamine food display manufacturer, achieved 50% higher productivity with a Business Central cloud re-implementation.</p>
                            <div className='ct--a'>
                              <span>Read Case Study</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-06" role="tabpanel" aria-labelledby="pills-home-06-tab"><div className='row'>
                    <BlogFinanaceCard categorySlug='business-central' />

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq solution-faq-r cv-auto">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got
                  questions about Business Central?</h2>
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
      <BcPopPdf pdfType={pdfType} />
    </>
  );
};

export default BusinessCentral;
