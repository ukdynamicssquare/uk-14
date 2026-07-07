import Head from 'next/head';
import Image from 'next/image';
import FormUltimateGuideForm from '../components/FormUltimateGuideForm';
import FormUltimateGuideFormInner from '../components/FormUltimateGuideFormInner';
export default function TheUltimateGuide() {

const checklistItems = [
  { text: 'What Dynamics 365 actually includes', width: 'auto' },
  { text: 'Which applications are relevant to your organisation', width: 'wide' },
  { text: 'How ERP and CRM fit together', width: 'medium' },
  { text: 'Where AI delivers practical value', width: 'medium' },
  { text: 'How implementation and migration projects succeed', width: 'wide' },
  { text: 'What long-term business value looks like beyond go-live', width: 'wide' },
];
const stats = [
    {
      number: '70%',
      text: 'of new ERP deployments now favour cloud-based platforms.',
    },
    {
      number: '78%',
      text: 'of organisations report productivity improvements following ERP adoption.',
    },
    {
      number: '91%',
      text: 'report improved inventory visibility after implementation.',
    },
    {
      number: '172%',
      text: 'projected three-year ROI across featured case studies.',
    },
  ];
  const features = [
    'Dynamics 365 ecosystem overview',
    'Business Central vs Finance vs Supply Chain Management comparison',
    'CRM application breakdowns',
    'Power Platform and Copilot guidance',
    'AI Agent use cases',
    'Industry solution blueprints',
    'Migration frameworks',
    'Implementation methodology',
    'Real-world case studies',
  ];
const logos = [
  { src: '/img/feat-03.png', alt: 'Clutch' },
 { src: '/img/awa-02.png', alt: 'Clutch' },
 { src: '/img/feat-04.png', alt: 'Clutch' },
 { src: '/img/awa-01.png', alt: 'Clutch' },
 { src: '/img/feat-01.png', alt: 'Clutch' },
];

    return (
        <>
            <Head>
               <title>The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square</title>
        <meta
          name="description"
          content="Comprehensive guide to Microsoft Dynamics 365—features, benefits, modules and how it transforms modern business operations."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/" />
        <meta property="og:title" content="The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square" />
        <meta property="og:description" content="Comprehensive guide to Microsoft Dynamics 365—features, benefits, modules and how it transforms modern business operations." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/The-Ultimate-Guide-Dynamics-365-feature.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/" />
        <meta property="twitter:title" content="The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square" />
        <meta property="twitter:description" content="Comprehensive guide to Microsoft Dynamics 365—features, benefits, modules and how it transforms modern business operations." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/The-Ultimate-Guide-Dynamics-365-feature.png" />
            </Head>

            <section className="home-baner-head-new home-baner-head-nepd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="home-baner-head home-baner-head-guid">
                                <h1><span className="home-span">
                                    The Ultimate Guide to Dynamics 365
                                </span></h1>
                                <p style={{ margin: '20px 0px 0px' }}>Declutter the Operational Mess. Build a Business That Moves as One.
                                    See how Microsoft Dynamics 365 powered by Copilot and AI Agents helps you eliminate incoherent systems, improve visibility, and support business growth. </p>

                                <p style={{ margin: '20px 0px 30px' }}>The 60-Page guide is built from insights into real implementation experience, industry-specific solution architectures, migration projects, and practical business outcomes.</p>

                                <a style={{fontSize:'16px !important'}}
                                    href="#powerBIModals" data-bs-toggle="modal"
                                    className="btn btn-home"
                                >{" "} Download Free Dynamics 365 Guide{" "}
                                    <span>
                                        <i className="bi bi-arrow-right-circle"></i>
                                    </span>
                                </a>
                                <p style={{ margin: '20px 0px 0px' }}>Written by Manish Goyal, Co-Founder Dynamics Square and member of the Forbes Technology Council.</p>
                            </div>

                        </div>
                        <div className='col-lg-6'>
                            <div className='guide-side-b-pic'>
                                <Image src="/img/guide-00.png" alt='guide-00' width={1476} height={1292} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="clarity-section">
      <div className="container">
        <div className="row g-5 align-items-start">
          
          {/* Left Column */}
          <div className="col-12 col-lg-6">
            <h2 className="clarity-title">
              Most Businesses Don't Lack Ambition. They Lack Clarity.
           
            </h2>
            
            <p className="clarity-text">
              Growth becomes difficult when different parts of the business rely on different information.
            </p>
            
            <p className="clarity-text">
              It happens when key business data is spread throughout different systems. Consequently, even simple questions can take time to answer. Teams spend hours compiling reports, reconciling figures, and searching for information that should already be available.
            </p>
            
            <h4 className="clarity-subheading">This leads to:</h4>
            
            <ul className="clarity-list">
              <li>Manual processes that consume valuable time</li>
              <li>Limited visibility across departments</li>
              <li>Reporting delays</li>
              <li>Decisions based on incomplete data</li>
              <li>Operational complexity that grows year after year</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-6">
            {/* Quote Card */}
            <div className="quote-card">
              <p className="quote-author-label">
                As Dynamics Square Principal Solution Architect<br />
                Darshan Mungekar puts it
              </p>
              
              <div className="quote-content">
                <div className="quote-avatar">
                  <Image
                    src="/img/guide-01.png"
                    alt="Darshan Mungekar"
                    width={80}
                    height={80}
                    className="avatar-img"
                  />
                </div>
                <blockquote className="quote-text">
                  "Most operational complexity is not created by scale, but by disconnected decisions made over time."
                </blockquote>
              </div>
            </div>

            {/* Description */}
            <p className="clarity-text description-below">
              This guide explains how companies are addressing those challenges through a connected Microsoft ecosystem that brings ERP, CRM, data, automation, analytics, and AI together on one platform.
            </p>

            {/* CTA Button */}
            <a href="#powerBIModals" data-bs-toggle="modal" className="cta-button">
              Download Free Dynamics 365 Guide
              <span className="cta-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
            <div className="guide-wrapper">
                <div className="container py-5">
                    {/* Header */}
                    <div className="mb-5 pb-3">
                        <h2 className="guide-title">What's Inside the 60-Page Guide?</h2>
                        <p className="guide-subtitle">
                            The guide lets you get insights into clear differentiation between solutions
                            existing within the Dynamics 365 suite.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="guide-divider"></div>
                
                   <div className='row'>
                    <div className='col-lg-12'>
                         {/* Bootstrap Accordion */}
                    <div className="accordion accordion-flush" id="guideAccordion">

                        {/* Module 01 */}
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingOne">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne"
                                    aria-expanded="false"
                                    aria-controls="collapseOne"
                                >
                                    <div className="container px-0">
                                        <div className="row g-0 align-items-start">
                                            <div className="col-12 col-md-3">
                                                <span className="module-label">Module 01</span>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <span className="module-title">ERP Applications Explained</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h3>
                            <div
                                id="collapseOne"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingOne"
                                data-bs-parent="#guideAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-3"></div>
                                        <div className="col-12 col-md-9">
                                            <p className="module-desc">
                                                Learn about different Dynamics 365 ERP solutions. It is one of the most requested
                                                topics among business leaders evaluating Microsoft technology which includes:
                                            </p>
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Where <a style={{color:"#ee3442"}} href="/products/dynamics-365-business-central/">Business Central</a> fits</li>
                                                        <li>When Finance becomes necessary</li>
                                                        <li>When Supply Chain Management delivers greater value</li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Licensing considerations</li>
                                                        <li>How organisations typically scale across Microsoft's ERP portfolio</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 02 */}
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingTwo">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                >
                                    <div className="container px-0">
                                        <div className="row g-0 align-items-start">
                                            <div className="col-12 col-md-3">
                                                <span className="module-label">Module 02</span>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <span className="module-title">CRM Applications Explained</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h3>
                            <div
                                id="collapseTwo"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingTwo"
                                data-bs-parent="#guideAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-3"></div>
                                        <div className="col-12 col-md-9">
                                            <p className="module-desc">Understand how Microsoft's customer engagement applications support the complete customer lifecycle:</p>
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</a></li>
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-dynamics-365-customer-service/">Dynamics 365 Customer Service</a></li>
                                                        
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-dynamics-365-field-service/">Dynamics 365 Field Service</a></li>
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-dynamics-365-marketing/">Dynamics 365 Customer Insights</a></li>
                                                    </ul>
                                                </div>
                                                <p className="module-desc">See how customer data, service operations, sales activity and business processes all come together in one platform.</p>
                                            </div>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 03 */}
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <div className="container px-0">
                                        <div className="row g-0 align-items-start">
                                            <div className="col-12 col-md-3">
                                                <span className="module-label">Module 03</span>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <span className="module-title">Power Platform, Copilot & AI Agents</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h3>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#guideAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-3"></div>
                                        <div className="col-12 col-md-9">
                                            <p className="module-desc">AI is transforming the way companies work. Inside the guide, you'll find practical coverage of:</p>
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-power-apps/">Power Apps</a></li>
                                                        <li><a style={{color:"#ee3442"}} href="/products/microsoft-power-automate/">Power Automate</a></li>
                                                        <li>Power Pages</li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Copilot Studio</li>
                                                        <li>Microsoft's growing AI Agent workforce</li>
                                                    </ul>
                                                </div>
                                                <p className="module-desc">This includes Sales Order Agent, Payables Agent, Bank Reconciliation Agent, Sales Qualification Agent, Scheduling Operations Agent, and other emerging capabilities designed to reduce manual effort and accelerate decision-making.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 04 */}
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFour">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour"
                                    aria-expanded="false"
                                    aria-controls="collapseFour"
                                >
                                    <div className="container px-0">
                                        <div className="row g-0 align-items-start">
                                            <div className="col-12 col-md-3">
                                                <span className="module-label">Module 04</span>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <span className="module-title">Industry-Specific Solution Blueprints</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h3>
                            <div
                                id="collapseFour"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFour"
                                data-bs-parent="#guideAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-3"></div>
                                        <div className="col-12 col-md-9">
                                            <p className="module-desc">Explore how Dynamics 365 supports organisations across:</p>
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Manufacturing</li>
                                                        <li>Wholesale & Distribution</li>
                                                        <li>Retail & E-commerce</li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Professional Services</li>
                                                        <li>Non-Profit Organisations</li>
                                                        <li>Healthcare & Public Sector</li>
                                                    </ul>
                                                </div>
                                                <p className="module-desc">This includes recommended solution architectures, common challenges, and practical deployment approaches.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Module 05 */}
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="headingFive">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFive"
                                    aria-expanded="false"
                                    aria-controls="collapseFive"
                                >
                                    <div className="container px-0">
                                        <div className="row g-0 align-items-start">
                                            <div className="col-12 col-md-3">
                                                <span className="module-label">Module 05</span>
                                            </div>
                                            <div className="col-12 col-md-9">
                                                <span className="module-title">Migration & Modernisation Frameworks</span>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </h3>
                            <div
                                id="collapseFive"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFive"
                                data-bs-parent="#guideAccordion"
                            >
                                <div className="accordion-body">
                                    <div className="row g-0">
                                        <div className="col-12 col-md-3"></div>
                                        <div className="col-12 col-md-9">
                                            <p className="module-desc">Planning a move from a legacy platform? The guide includes practical guidance covering:</p>
                                            <div className="row g-4">
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>NAV to Business Central migration</li>
                                                        <li>Legacy ERP replacement</li>
                                                        <li>On-premises to cloud transitions</li>
                                                        <li>Data migration</li>
                                                    </ul>
                                                </div>
                                                <div className="col-12 col-sm-6">
                                                    <ul className="module-list">
                                                        <li>Integrations</li>
                                                        <li>User adoption</li>
                                                        <li>Risk mitigation</li>
                                                    </ul>
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

            <section className="why-guide-section">
      <div className="container">
        
        {/* Header */}
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="why-guide-title">Why Read This Guide?</h2>
            <p className="why-guide-lead">
              Most Dynamics 365 content available today focuses on individual products. This guide takes a different approach.
            </p>
            <p className="why-guide-text">
              Instead of looking at Business Central, CRM, Power Platform, Copilot, or AI in isolation, it explains how they work together as part of a connected business platform.
            </p>
          </div>
        </div>

        {/* Main Content - Book + Checklist */}
        <div className="row g-5 align-items-center mt-2">
          
          {/* Left - Book Image */}
          <div className="col-12 col-lg-5">
            <div className="book-wrapper">
              <Image
                src="/img/guide-02.png"
                alt="The Ultimate Guide to Dynamics 365"
                width={630}
                height={766}
                className="book-image"
                priority
              />
            </div>
          </div>

          {/* Right - Checklist with Dashed Border */}
          <div className="col-12 col-lg-7">
            <div className="checklist-wrapper">
              
              {/* Dashed vertical line */}
              <div className="checklist-border-line"></div>
              
              <div className="checklist-items">
                {checklistItems.map((item, index) => (
                  <div key={index} className="checklist-row">
                    <div className="checkmark-circle">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.91675 7.58333L5.25008 9.91667L11.0834 4.08333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={`checklist-bubble checklist-bubble-${item.width}`}>
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom text */}
            <p className="why-guide-bottom-text">
              Whether you're looking at Dynamics 365, evaluating ERP systems, preparing for a migration or just interested in Microsoft's AI capabilities, This is the only Dynamics 365 guide you'll ever need.
            </p>

            {/* CTA Button */}
            <a href="#powerBIModals" data-bs-toggle="modal" className="why-guide-cta">
              Download Free Dynamics 365 Guide
              <span className="cta-arrow">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>

<section className="stats-section">
      <div className="container">
        
        {/* Header */}
        <div className="row">
          <div className="col-12 col-lg-6">
            <h2 className="stats-title">Key Statistics Featured in the Guide</h2>
            <p className="stats-subtitle">
              Dynamics Square brings you this guide as a result of extensive research done to provide organisations clarity around Dynamics 365 ecosystem.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="row g-3 mt-1">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-lg-3">
              <div className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <p className="stat-text">{stat.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <section className="cta-section">
      <div className="container">
        <div className="row g-5 align-items-start">
          
          {/* Left Content */}
          <div className="col-12 col-lg-6">
            <h2 className="cta-title">Get Your Free Dynamics 365 Guide</h2>
            <h4 className="cta-subtitle">Inside you'll find:</h4>
            
            <ul className="cta-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Right side - empty for your form */}
          <div className="col-12 col-lg-6">
           <div>
            <FormUltimateGuideFormInner />
           </div>
          </div>

        </div>
      </div>
    </section>
    <section className="discuss-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            
            <h2 className="discuss-title">Let's Discuss Dynamics 365?</h2>
            
            <p className="discuss-lead">
              If you are already considering Dynamics 365 for your organisation, speak to a Dynamics Square specialist <strong>about your requirements, timelines and next steps.</strong>
            </p>
            
            <p className="discuss-text">
              Thinking of Business Central, Finance, Supply Chain Management, CRM applications, migration, implementation, support or optimisation? Our team can help you craft a roadmap aligned to your business goals.
            </p>
            
            <a href="#powerBIModals" data-bs-toggle="modal" className="discuss-cta">
              Book a Free Discovery Call
            </a>

          </div>
        </div>
      </div>
    </section>
    <section className="featured-section">
      <div className="container">
        
        <h2 className="featured-title">Featured On</h2>
        
        <div className="row g-4 justify-content-center align-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-2">
              <div className="featured-logo">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={250}
                  height={150}
                  className="logo-img"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
    <FormUltimateGuideForm />
        </>
    );
}