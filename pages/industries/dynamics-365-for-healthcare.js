import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import useCardScrollEffect from "../../components/useCardScrollEffect";
import faqData from '../../public/data/industrieshealthcare.json';
import PageSeo from "../../components/PageSeo";
import ImplementationStepper from "../../components/ImplementationStepper";
import styles from "../../styles/dynamics-365-for-healthcare.module.css";

const healthcareApps = [
  {
    title: "Dynamics 365 Business Central",
    href: "/products/dynamics-365-business-central/",
    icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
    text: [
      "Business Central is an ERP solution designed primarily for small and medium-sized businesses. It can help healthcare suppliers, private healthcare businesses and growing healthcare organisations manage finance, purchasing, inventory, sales orders and reporting in one business management system.",
      "It is particularly relevant to organisations looking to replace disconnected accounting, stock management and order processing tools with a more connected ERP solution.",
    ],
  },
  {
    title: "Dynamics 365 Finance",
    href: "/products/microsoft-dynamics-365-finance/",
    icon: "/img/menu-icons/dynamics-365-finance.svg",
    text: [
      "Dynamics 365 Finance supports more complex financial management requirements, including budgeting, financial reporting and financial operations across larger or more complex organisations.",
      "It may suit healthcare groups and healthcare-related businesses that require more advanced financial processes, subject to a detailed assessment of their structure and requirements.",
    ],
  },
  {
    title: "Dynamics 365 Supply Chain Management",
    href: "/products/dynamics-365-supply-chain-management/",
    icon: "/img/menu-icons/dynamics-365-supplychainmanagement.svg",
    text: [
      "Supply Chain Management supports procurement, inventory, warehouse operations and supply chain planning.",
      "It can be relevant to medical equipment suppliers, pharmaceutical distributors and other healthcare businesses that need better control over purchasing, stock movement and distribution operations.",
    ],
  },
  {
    title: "Dynamics 365 Customer Service",
    href: "/products/microsoft-dynamics-365-customer-service/",
    icon: "/img/menu-icons/dynamics-365-customer-service.svg",
    text: [
      "Customer Service helps organisations manage service requests, cases and customer interactions.",
      "Healthcare providers and healthcare service businesses can use it to organise administrative enquiries, track requests and improve visibility into service performance. Patient-facing use cases should be designed around appropriate privacy and access requirements.",
    ],
  },
  {
    title: "Dynamics 365 Sales",
    href: "/products/microsoft-dynamics-365-sales/",
    icon: "/img/menu-icons/dynamics-365-sales.svg",
    text: [
      "Dynamics 365 Sales helps businesses manage leads, customer relationships, opportunities and sales activities.",
      "It can support medical equipment manufacturers, healthcare technology companies, laboratories and suppliers that need to manage B2B sales pipelines and maintain consistent customer records.",
    ],
  },
  {
    title: "Dynamics 365 Field Service",
    href: "/products/microsoft-dynamics-365-field-service/",
    icon: "/img/menu-icons/dynamics-365-fieldservice.svg",
    text: [
      "Field Service helps organisations manage work orders, scheduling and service activities.",
      "For healthcare equipment suppliers, it can support the coordination of equipment installation, maintenance and repair visits, subject to the business's operational requirements.",
    ],
  },
  {
    title: "Power Platform and Power BI",
    href: "/products/microsoft-power-platform/",
    icon: "/img/menu-icons/power-bi.svg",
    text: [
      "Microsoft Power Platform can extend relevant Dynamics 365 applications through low-code applications, workflow automation and reporting.",
      "Power Apps can support suitable business applications, Power Automate can automate defined workflows, and Power BI can provide reporting and analytics. Microsoft Azure and integration services may also be relevant where more advanced connectivity is required.",
    ],
  },
];

const healthcareCaseStudies = [
  {
    title: "Clinical Research Organisation: Dynamics 365 Finance & Operations Implementation",
    text: "Explore our Dynamics 365 Finance & Operations implementation for a clinical research organisation to understand how an ERP solution can support business operations in the healthcare sector.",
    link: "Read the clinical research organisation case study",
    href: "/case-studies/dynamics-365-f&O-implementation-for-healthcare/",
    image: "/img/f&O-implementation-for-healthcare.jpg",
    alt: "Scientist using a microscope in a clinical research laboratory",
  },
  {
    title: "Pasante Healthcare: NAV to Business Central Upgrade",
    text: "Discover how Pasante Healthcare approached its ERP upgrade from Microsoft Dynamics NAV to Dynamics 365 Business Central. The reported case-study outcome includes productivity gains of up to 68%.",
    link: "Read the Pasante Healthcare case study",
    href: "/case-studies/nav09-to-business-central-upgrade/",
    image: "/img/case-studies-2.jpg",
    alt: "Carer holding a patient's hand",
  },
  {
    title: "Medical Instrument Supplier: Business Central Upgrade",
    text: "Learn how a medical instrument supplier and manufacturer modernised its ERP environment by moving from Dynamics NAV to Business Central. Review the case study for the reported business outcomes and implementation details.",
    link: "Read the medical instrument supplier case study",
    href: "/case-studies/nav13R2-to-business-central/",
    image: "/img/case-studies-3.jpg",
    alt: "Medical instruments laid out on a sterile tray",
  },
  {
    title: "UK Orthodontic Supplier: NAV to Business Central Upgrade",
    text: "Explore an ERP modernisation project involving a UK orthodontic supplier upgrading from Microsoft Dynamics NAV 2013 R2 to Business Central.",
    link: "Read the orthodontic supplier case study",
    href: "/case-studies/nav-2013-r2-to-business-central-upgrade/",
    image: "/img/orth-care.png",
    alt: "Orthodontic dental model held in gloved hands",
  },
  {
    title: "Orthopaedic Implants Manufacturer: Business Central Upgrade",
    text: "Discover how an orthopaedic implants manufacturer approached its Business Central upgrade. The reported outcome highlights improved business visibility, with the case study citing an 80% improvement.",
    link: "Read the orthopaedic manufacturer case study",
    href: "/case-studies/upgrading-to-dynamics-365-business-central/",
    image: "/img/Leda-Ortho.jpg",
    alt: "Surgical instruments used by an orthopaedic implants manufacturer",
  },
];

const implementationSteps = [
  {
    title: "Business Requirements Assessment",
    icon: "bi-clipboard-check",
    text: "We review existing systems, operational challenges, reporting needs and business priorities to identify suitable applications and define the project scope.",
  },
  {
    title: "Solution Design and Planning",
    icon: "bi-diagram-3",
    text: "We establish the proposed architecture, application configuration, integration requirements, data migration approach and implementation priorities.",
  },
  {
    title: "Implementation and Configuration",
    icon: "bi-gear",
    text: "The selected applications are configured around agreed business processes. Any required extensions or workflow changes are assessed against the intended outcomes and long-term maintenance requirements.",
  },
  {
    title: "Data Migration and Integration",
    icon: "bi-arrow-left-right",
    text: "Data migration and system integration are planned around source data quality, compatibility, access requirements and validation. Testing helps confirm that information is transferred and exchanged as intended.",
  },
  {
    title: "Testing and User Training",
    icon: "bi-person-check",
    text: "The solution is tested against agreed requirements, including workflows, permissions, reports and integrations. Training helps users understand the new processes and use the applications effectively.",
  },
  {
    title: "Go-Live and Ongoing Support",
    icon: "bi-rocket-takeoff",
    text: "Following deployment, organisations may need technical support, troubleshooting, system updates and further optimisation as business requirements evolve.",
  },
];

const healthcareChallenges = [
  {
    title: "Disconnected Business Systems",
    icon: "/img/wholesale-pic-06.png",
    text: "When finance, customer service, purchasing and operational data sit in separate systems, employees may need to enter the same information more than once. Integrating suitable applications can improve data consistency and reduce repetitive work.",
  },
  {
    title: "Manual Administrative Processes",
    icon: "/img/wholesale-pic-05.png",
    text: "Manual approvals, spreadsheets and repetitive data entry can slow down everyday operations. Workflow automation can help standardise suitable processes, reduce avoidable errors and improve task visibility.",
  },
  {
    title: "Limited Financial Visibility",
    icon: "/img/wholesale-pic-10.png",
    text: "Healthcare businesses need a clear view of costs, budgets, cash flow and financial performance. Connected financial management and reporting tools can help management teams review performance and make better-informed decisions.",
  },
  {
    title: "Inventory and Supply Chain Challenges",
    icon: "/img/wholesale-pic-04.png",
    text: <>Medical equipment suppliers, healthcare distributors and <Link href="/industries/manufacturing/dynamics-365-for-pharmaceutical/" className="u-i">pharmaceutical businesses</Link> need accurate stock information and effective purchasing processes. ERP and supply chain applications can help manage inventory, orders, supplier information and replenishment planning.</>,
  },
  {
    title: "Difficulties Coordinating Customer Service",
    icon: "/img/wholesale-pic-13.png",
    text: "Private clinics, healthcare service providers and medical suppliers may handle enquiries across email, telephone and other communication channels. A suitable CRM system can help teams organise enquiries, track interactions and manage follow-up activities.",
  },
  {
    title: "Limited Reporting and Business Insights",
    icon: "/img/wholesale-pic-11.png",
    text: "When operational information is spread across different systems, producing reliable reports can take time. Power BI and suitable data integrations can help bring relevant information together for reporting and business analysis.",
  },
];

const approachPoints = [
  {
    label: "Business-led solution design:",
    text: "Select applications based on your operational requirements rather than implementing unnecessary functionality.",
  },
  {
    label: "Connected business processes:",
    text: "Identify opportunities to improve the flow of information between finance, customer service, inventory and other business systems.",
  },
  {
    label: "Practical implementation planning:",
    text: "Define project scope, migration needs, integration requirements and testing before deployment.",
  },
  {
    label: "Scalable solutions:",
    text: "Plan an architecture that can support changing business requirements.",
  },
  {
    label: "Ongoing support:",
    text: "Help maintain and improve the solution as your organisation evolves.",
  },
];

const Healthcare = () => {

  useCardScrollEffect()

  const [visibleCount, setVisibleCount] = useState(5);
  const [activeApp, setActiveApp] = useState(0);
  const [openPoint, setOpenPoint] = useState(0);
  const caseListRef = useRef(null);

  // Stacked case cards: as the next card slides up over a card, shrink and
  // dim the card underneath in step with the scroll position.
  useEffect(() => {
    const list = caseListRef.current;
    if (!list || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const cards = Array.from(list.querySelectorAll(`.${styles['hc-case-item']}`));
    const applied = cards.map(() => '');
    let frame = null;
    let steps = [];
    let heights = [];

    // Sticky offsets and card heights only change on resize, so measure them
    // once rather than on every scroll frame. offsetHeight ignores the scale
    // transform applied below.
    const measure = () => {
      const tops = cards.map((card) => parseFloat(getComputedStyle(card).top) || 0);
      steps = cards.map((_, i) => (i + 1 < cards.length ? tops[i + 1] - tops[i] : 0));
      heights = cards.map((card) => card.offsetHeight);
    };

    const update = () => {
      frame = null;
      // Read every position first, then write, so the browser lays out once.
      const tops = cards.map((card) => card.getBoundingClientRect().top);
      cards.forEach((card, i) => {
        let progress = 0;
        if (i + 1 < cards.length) {
          const gap = tops[i + 1] - tops[i];
          progress = Math.min(1, Math.max(0, 1 - (gap - steps[i]) / heights[i]));
        }
        const value = progress.toFixed(3);
        if (value !== applied[i]) {
          card.style.setProperty('--stack-scale', (1 - progress * 0.06).toFixed(4));
          card.style.setProperty('--stack-dim', (progress * 0.3).toFixed(3));
          applied[i] = value;
        }
      });
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      onScroll();
    };

    // Only listen to scroll while the case studies are on screen.
    let listening = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !listening) {
        window.addEventListener('scroll', onScroll, { passive: true });
        listening = true;
        onScroll();
      } else if (!entry.isIntersecting && listening) {
        window.removeEventListener('scroll', onScroll);
        listening = false;
      }
    });

    measure();
    update();
    observer.observe(list);
    window.addEventListener('resize', onResize);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Dynamics 365 for Healthcare | Dynamics Square UK"
        description="Transform healthcare operations with Microsoft Dynamics 365 for Healthcare. Explore AI-powered solutions, ERP, CRM and implementation services in the UK."
        image="https://www.dynamicssquare.co.uk/img/Dynamics-365-for-Healthcare.png"
        faqs={faqData}
      />
      <div className='solution-new-banner-one solution-new-banner-one-colo'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Dynamics 365 for Healthcare</h1>
                <p>Transform healthcare operations with Dynamics 365 for Healthcare and AI-powered solutions. Improve patient engagement, automate business processes and streamline healthcare management with integrated ERP, CRM and intelligent automation capabilities.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`m-b-image-nnn ${styles['hc-hero-img']} text-center`}>
                <Image src="/img/Dynamics-365-for-Healthcare.png" alt="Healthcare professional beside a Dynamics 365 for Healthcare scheduling screen" width={717} height={484} sizes="(max-width: 991px) 100vw, 717px" priority={true} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`bg-003s pd-con-69 ${styles['hc-intro-section']}`}>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/Dynamics-365-for-Health-care-side.png" alt="Healthcare team reviewing business data on a computer screen" width={422} height={453} sizes="(max-width: 991px) 90vw, 422px" className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>AI-Powered Dynamics 365 for Healthcare: Smarter Business Management</h2>
                <p>Healthcare organisations need reliable systems to manage business operations, coordinate teams and respond to changing service demands. Disconnected applications, manual processes and limited reporting can make it difficult to maintain visibility across departments.</p>
                <p><Link href="/products/microsoft-dynamics-365/" className="u-i">Microsoft Dynamics 365</Link> offers ERP and CRM applications that help healthcare organisations manage financial operations, customer relationships, inventory, service requests and business data. Combined with AI-powered capabilities, Microsoft Cloud and <Link href="/products/microsoft-power-platform/" className="u-i">Power Platform</Link>, these solutions can help automate routine tasks, improve productivity and support better business decisions.</p>
                <p>As a trusted <Link href="/microsoft-partners-uk/" className="u-i">Microsoft Dynamics 365 partner in the UK</Link>, Dynamics Square helps healthcare businesses identify suitable solutions, implement business applications and integrate systems around their operational requirements. Whether you need to improve financial control, streamline administration or adopt AI-powered capabilities, our team can help you plan the right approach.</p>
                <p><b>Looking to improve your healthcare business operations? Contact Dynamics Square UK to discuss your requirements.</b></p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['hc-what-section']}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className={styles['hc-what-lead']}>
                <h2>What is Dynamics 365 for Healthcare?</h2>
                <div className={styles['hc-what-lead__card']}>
                  <i className="bi bi-quote" aria-hidden="true"></i>
                  <p>Dynamics 365 for Healthcare describes the use of Dynamics 365 business applications and relevant Microsoft healthcare capabilities to support healthcare-related processes.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={styles['hc-what-points']}>
                <div className={styles['hc-what-point']}>
                  <span className={styles['hc-what-point__icon']}><i className="bi bi-grid-1x2" aria-hidden="true"></i></span>
                  <p>Rather than being a single, all-in-one clinical system, Dynamics 365 provides a range of applications that organisations can select according to their needs. These may include customer service, sales, finance, supply chain management and field service.</p>
                </div>
                <div className={styles['hc-what-point']}>
                  <span className={styles['hc-what-point__icon']}><i className="bi bi-lightbulb" aria-hidden="true"></i></span>
                  <p>For example, a private healthcare provider may need better control over customer enquiries and financial reporting, while a <Link href="/industries/manufacturing/dynamics-365-for-medical-device/" className="u-i">medical equipment supplier</Link> may prioritise inventory management, order processing and field service scheduling.</p>
                </div>
                <div className={styles['hc-what-point']}>
                  <span className={styles['hc-what-point__icon']}><i className="bi bi-diagram-3" aria-hidden="true"></i></span>
                  <p>With the right configuration and integrations, Dynamics 365 can help organisations reduce disconnected workflows, improve access to business information and establish more consistent processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['hc-challenge-section']}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="supprt-header-new-one">
                <h2>Key Challenges Dynamics 365 Can Help Healthcare Businesses Address</h2>
                <p>Healthcare organisations face different operational challenges depending on their services, size and existing technology. The following are common areas where connected business applications can help.</p>
              </div>
            </div>
          </div>
          <div className={styles['hc-challenges']}>
            {healthcareChallenges.map((item, i) => (
              <div className={styles['hc-challenge']} key={item.title}>
                <div className={styles['hc-challenge__top']}>
                  <span className={styles['hc-challenge__icon']}>
                    <img src={item.icon} alt={`${item.title} icon`} width={40} height={36} loading="lazy" decoding="async" />
                  </span>
                  <span className={styles['hc-challenge__num']} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className='solution-new-banner-three pd-con-63'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Benefits of Microsoft Dynamics 365 for Healthcare Organisations</h2>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Improve Financial Management</h3>
                      <p><Link href="/products/dynamics-365-business-central/" className="u-i">Dynamics 365 Business Central</Link> and <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link> support financial processes such as accounting, budgeting, reporting and financial control, depending on the application selected.</p>
                      <p>These capabilities can help healthcare businesses understand their financial position, monitor expenditure and improve visibility across business operations.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-16.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 Finance cash flow forecast with pending invoices and payment prediction" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Leverage AI to Improve Healthcare Operations</h3>
                      <p>Use <Link href="/products/dynamics-365-copilot/" className="u-i">Microsoft Dynamics 365 Copilot</Link> and AI-powered capabilities to automate routine administrative tasks, summarise information and support faster decision-making. These tools can help healthcare teams improve productivity and manage business workflows more efficiently.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-21.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="AI-powered demand forecast and revenue insights in Microsoft Power Apps" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Streamline Business Processes</h3>
                      <p><Link href="/products/microsoft-power-automate/" className="u-i">Power Automate</Link> and relevant Dynamics 365 workflows can automate suitable routine activities, such as approvals, notifications and information handovers.</p>
                      <p>Automation should be designed around actual business requirements, with appropriate checks for sensitive or high-impact processes.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-15.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 operations dashboard charting order quantities" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Strengthen Customer and Patient Engagement</h3>
                      <p><Link href="/products/microsoft-dynamics-365-sales/" className="u-i">Dynamics 365 Sales</Link> and <Link href="/products/microsoft-dynamics-365-customer-service/" className="u-i">Customer Service</Link> can help organisations manage customer relationships, enquiries, service cases and follow-up activities.</p>
                      <p>For healthcare providers, the appropriate configuration may support administrative communication and service coordination. Clinical records and patient-facing workflows require suitable systems, integrations and access controls.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-23.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 sales pipeline and customer order summary" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Improve Inventory and Purchasing Control</h3>
                      <p>For healthcare suppliers and organisations managing physical stock, Dynamics 365 Business Central or <Link href="/products/dynamics-365-supply-chain-management/" className="u-i">Supply Chain Management</Link> can support purchasing, inventory visibility, order management and warehouse processes.</p>
                      <p>This can help teams monitor stock levels, improve purchasing decisions and manage supply chain activity more effectively.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-14.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 on-hand inventory query listing product quantities" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Support Better Business Decisions</h3>
                      <p><Link href="/products/microsoft-power-bi/" className="u-i">Power BI</Link> can turn relevant operational and financial data into reports and dashboards. Management teams can use these insights to monitor costs, review demand, assess service performance and identify areas for improvement.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-20.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 Business Central cash flow forecast report" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Build a More Connected Technology Environment</h3>
                      <p>Dynamics 365 can integrate with suitable Microsoft and third-party applications. A well-planned integration approach can reduce duplicated data entry and help teams access the information required for their roles.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/wholesale-pic-18.png" width={580} height={456} sizes="(max-width: 991px) 100vw, 580px" alt="Dynamics 365 Business Central sales order with pricing and discount details" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['hc-apps-section']}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Microsoft Dynamics 365 Applications for Healthcare</h2>
                <p>There is no single Dynamics 365 configuration that suits every healthcare organisation. The right combination depends on whether your priorities involve financial management, customer relationships, supply chain operations or service delivery.</p>
              </div>
            </div>
          </div>
          <div className={styles['hc-apps']}>
            <div className={styles['hc-apps__nav']} role='tablist' aria-label='Microsoft Dynamics 365 Applications for Healthcare'>
              {healthcareApps.map((app, i) => (
                <button
                  key={app.title}
                  type='button'
                  role='tab'
                  id={`hc-app-tab-${i}`}
                  aria-selected={activeApp === i}
                  aria-controls={`hc-app-panel-${i}`}
                  className={`${styles['hc-apps__tab']}${activeApp === i ? ' is-active' : ''}`}
                  onClick={() => setActiveApp(i)}
                >
                  <img src={app.icon} alt={`${app.title} logo`} width={32} height={32} loading='lazy' decoding='async' />
                  <span>{app.title}</span>
                  <i className='bi bi-chevron-right' aria-hidden='true'></i>
                </button>
              ))}
            </div>
            <div className={styles['hc-apps__panels']}>
              {healthcareApps.map((app, i) => (
                <div
                  key={app.title}
                  role='tabpanel'
                  id={`hc-app-panel-${i}`}
                  aria-labelledby={`hc-app-tab-${i}`}
                  className={`${styles['hc-apps__panel']}${activeApp === i ? ' is-active' : ''}`}
                >
                  <div className={styles['hc-apps__panel-head']}>
                    <div className={styles['hc-apps__panel-icon']}>
                      <img src={app.icon} alt={`${app.title} logo`} width={44} height={44} loading='lazy' decoding='async' />
                    </div>
                    <h3>{app.title}</h3>
                  </div>
                  {app.text.map((t) => <p key={t}>{t}</p>)}
                  <Link href={app.href} className={styles['hc-apps__link']} aria-label={app.title}>
                    <i className='bi bi-arrow-right'></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ImplementationStepper
        id="hc-step"
        title="Dynamics 365 Healthcare Implementation Services"
        intro={<>A successful implementation starts with understanding the business problem, not simply choosing software. Dynamics Square can help your organisation assess requirements and plan a suitable <Link href="/our-services/dynamics-365-implementation-services/" className="u-i">Microsoft Dynamics 365 solution</Link>.</>}
        steps={implementationSteps}
        note="The implementation timeline and cost depend on application selection, user numbers, data volumes, integration complexity and customisation requirements. A project assessment is needed to establish a realistic estimate."
        ctaLabel="Talk to Our Experts"
      />
      <section className={styles['hc-case-section']}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className={styles['hc-case-intro']}>
                <h2>Microsoft Dynamics 365 Healthcare Case Studies</h2>
                <p>Every healthcare business has different operational requirements, from financial management and ERP modernisation to inventory control and supply chain visibility. Dynamics Square has supported healthcare and medical businesses with Microsoft Dynamics 365 implementations and upgrades designed around their business needs.</p>
                <p>Explore our healthcare and medical <Link href="/case-studies/" className="u-i">case studies</Link> to see how we have helped organisations modernise their business systems.</p>
              </div>
            </div>
            <div className="col-lg-8">
              <div className={styles['hc-case-list']} ref={caseListRef}>
                {healthcareCaseStudies.map((cs, i) => (
                  <article className={styles['hc-case-item']} key={cs.href} style={{ '--i': i }}>
                    <Link href={cs.href} className={styles['hc-case-item__img']} tabIndex={-1} aria-hidden="true">
                      <Image src={cs.image} alt={cs.alt} width={850} height={410} sizes="(max-width: 767px) 100vw, 260px" />
                      <span className={styles['hc-case-item__num']}>{String(i + 1).padStart(2, '0')}</span>
                    </Link>
                    <div className={styles['hc-case-item__body']}>
                      <h3>{cs.title}</h3>
                      <p>{cs.text}</p>
                      <Link href={cs.href} className={styles['hc-case-item__link']}>
                        {cs.link} <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <p>Looking to modernise your healthcare or medical business systems? Contact Dynamics Square UK to discuss your Microsoft Dynamics 365 implementation, ERP upgrade or integration requirements.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="Decorative cloud illustration" loading="lazy" decoding="async" />
      </section>
      <section className={styles['hc-why-section']}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className={styles['hc-why-head']}>
                <h2>Why Choose Dynamics Square for Dynamics 365 Healthcare Solutions?</h2>
                <p>Healthcare businesses need a technology partner that understands their operational priorities and can translate requirements into a practical implementation plan.</p>
                <p>Dynamics Square helps UK organisations with Microsoft Dynamics 365 implementation, <Link href="/products/microsoft-dynamics-erp/" className="u-i">ERP</Link> and <Link href="/products/microsoft-dynamics-crm/" className="u-i">CRM</Link> solutions, system integration, <Link href="/our-services/dynamics-365-upgrade-services/" className="u-i">upgrades</Link>, <Link href="/our-services/dynamics-365-training/" className="u-i">training</Link> and <Link href="/our-services/dynamics-365-support-services/" className="u-i">support</Link>.</p>
              </div>
              <p className={styles['hc-why-label']}>Our approach focuses on:</p>
              <ol className={styles['hc-why-list']}>
                {approachPoints.map((point, i) => (
                  <li className={`${styles['hc-why-row']}${openPoint === i ? ' is-open' : ''}`} key={point.label}>
                    <button
                      type="button"
                      className={styles['hc-why-row__toggle']}
                      aria-expanded={openPoint === i}
                      aria-controls={`hc-why-point-${i}`}
                      onClick={() => setOpenPoint(openPoint === i ? -1 : i)}
                    >
                      <span className={styles['hc-why-row__num']} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                      <b className={styles['hc-why-row__label']}>{point.label} </b>
                      <i className={`bi bi-plus-lg ${styles['hc-why-row__icon']}`} aria-hidden="true"></i>
                    </button>
                    <div className={styles['hc-why-row__body']} id={`hc-why-point-${i}`}>
                      <div>
                        <p>{point.text}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-5">
              <div className={styles['hc-why-photo']}>
                <div className={styles['hc-why-ring']}>
                  <div className={styles['hc-why-ring__img']}>
                    <Image src="/img/wholesale-pic-28.png" alt="Dynamics Square team celebrating together in the office" width={401} height={455} sizes="(max-width: 575px) 320px, 470px" />
                  </div>
                  <img className={styles['hc-why-ring__logo']} src="/img/ds-logo-badge.png" alt="Dynamics Square logo" width={88} height={88} loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles['hc-why-goal']}>
            <i className="bi bi-check2-circle" aria-hidden="true"></i>
            <p>Our goal is to help your organisation make informed technology decisions and build a Microsoft business application environment that supports its operational and commercial objectives.</p>
          </div>
        </div>
      </section>
      <section className={`bg-003s pd-con-67 ${styles['hc-plan-section']}`}>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/wholesale-pic-29.png" alt="Business user reviewing a Dynamics 365 sales dashboard on a laptop" width={400} height={450} sizes="(max-width: 991px) 90vw, 400px" className='im-two' />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6 align-self-center">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Plan Your Microsoft Dynamics 365 Healthcare Project with Dynamics Square UK</h2>
                <p>Whether you need to modernise financial management, improve customer service, connect existing systems or streamline inventory and operational processes, the right Dynamics 365 solution starts with a clear understanding of your business requirements.</p>
                <p>Dynamics Square can help you assess suitable Microsoft applications, define an implementation approach and plan the next steps for your organisation.</p>
                <p><b><Link href="/contact-us/" className="u-i">Contact Dynamics Square UK</Link> to discuss your Microsoft Dynamics 365 requirements and explore a solution tailored to your business.</b></p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
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

export default Healthcare;
