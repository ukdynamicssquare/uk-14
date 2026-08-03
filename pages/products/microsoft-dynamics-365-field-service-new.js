import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useGsapScrollCards from '../../hooks/useGsapScrollCards';
import faqData from '../../public/data/field-service.json';
import useCardScrollEffect from "../../components/useCardScrollEffect";
import NavBar from '../../components/NavBar';
import BlogFinanaceCard from '../../components/BlogFinanaceCard';
import dynamic from "next/dynamic";


const StackedCards = dynamic(() => import("../../components/StackedCards"), {
  ssr: false,
});

const FieldService = () => {
  /*gsap card scroll*/
  const containerRef = useRef(null);
  useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [pdfType, setPdfType] = useState(null);
  const handleOpenModal = (type) => {
    setPdfType(type);
    // Open modal manually (needed since you use Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById('pdfModel'));
    modal.show();
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
         <title>Microsoft Dynamics 365 Field Service - Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform field operations with Dynamics 365 Field Service. UK experts for implementation, integration & support. Book your free consultation."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-field-service/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-field-service/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Field Service - Dynamics Square UK" />
        <meta property="og:description" content="Transform field operations with Dynamics 365 Field Service. UK experts for implementation, integration & support. Book your free consultation." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/FieldServicebanner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-field-service/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Field Service - Dynamics Square UK" />
        <meta property="twitter:description" content="Transform field operations with Dynamics 365 Field Service. UK experts for implementation, integration & support. Book your free consultation." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/FieldServicebanner.png" />
      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Field Service</h1>
                <span className='large-heading'>Implement an agentic service solution trusted by service teams worldwide</span>
                <p>Microsoft Dynamics 365 for Field Service is an agent-based service solution that joins service operations, work orders, and schedules in one place. It has smart schedule features that let companies provide service timely, operate efficiently, and make the customer experience better.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Try for Free &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              {/* <div className='m-b-image'>
                <Image src="/img/bc-mobile-banner.png" alt='bc-mobile-banner' width={1098} height={657} />
              </div> */}
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="solution-new-banner-one-imgs">
                <Image src="/img/field-service-000.png" alt="Field Service" width={916} height={585} className="flot-1" priority />
              </div>
            </div>
          </div>
        </div>



        <div className='container cust-pp'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flecx'>
                <div className='left-fl'>
                  <p>Dynamics Square helps small and medium businesses simplify processes, boost productivity, and achieve measurable results with the AI-powered Dynamics 365 Business Central ERP.</p>
                </div>
                <div className='left-rl'>
                  <Image src="/img/partner-logo-black.png" width={193} height={55} alt="partner-logo-black" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>What is Dynamics 365 Field Service?</h2>
                <p>Service-based firms deploy Microsoft Dynamics 365 Field Service because it serves as an intelligent service management solution. The platform integrates service operations, technicians, and customer interactions on a single centralised platform which helps firms deliver a better service experience to customers. </p>
                <p>As this agentic service solution employs AI, automation, IoT, and real-time data, it helps your workforce to handle work orders, improve schedules, and provide reliable, convenient, and efficient service without sweating it out.</p>
                <p>Designed on a flexible, cloud-based platform, Dynamics 365 Field Service can adapt to different service models and industries. Firms can set up this CRM as per their operational goals and resource availability.</p>
                <p><b>In short, Dynamics 365 Field Service is:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> A connected platform for work orders, scheduling, and service delivery</li>
                  <li><i className="bi bi-check2"></i> An agentic solution powered by Copilot and intelligent scheduling</li>
                  <li><i className="bi bi-check2"></i> A scalable platform designed for modern, field-based service teams</li>
                </ul>
                <p>Ready to improve service delivery with a connected and intelligent solution?</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Field Service Demo  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='dsa-minee'><Image src="/img/field-service-001.png" alt="What is Dynamics 365 Field Service" width={630} height={540} /></div>
            </div>
          </div>

        </div>
      </div>
      <NavBar />
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Challenges Solved by Dynamics 365 Field Service</h2>
                <p>Dynamics 365 Field Service capabilities can resolve common/specific challenges encountered by service-based firms in various industries. Mentioned below are some of the most frequent challenges: </p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Manual scheduling with constant adjustments throughout the day</li>
                  <li><i className="bi bi-check2"></i> Limited visibility into appointments, technician availability, and service status</li>
                  <li><i className="bi bi-check2"></i> Inefficient routing that increases travel time and delays service delivery</li>
                  <li><i className="bi bi-check2"></i> Delayed response to changing conditions such as cancellations or traffic</li>
                  <li><i className="bi bi-check2"></i> Technicians wasting time searching manuals or lacking relevant information</li>
                  <li><i className="bi bi-check2"></i> No sync in data across work orders, inventory, and financial systems</li>
                  <li><i className="bi bi-check2"></i> Restricted ability to anticipate issues without connected devices and insights</li>
                  <li><i className="bi bi-check2"></i> High administrative effort for dispatchers managing intricate schedules</li>
                  <li><i className="bi bi-check2"></i> Unreliable service delivery across teams and service locations</li>
                </ul>

              </div>

            </div>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/field-service-002.png" width={630} height={256} alt="New Solution" />
                </div>
                <p style={{ paddingTop: '30px' }}>Microsoft Dynamics 365 for field service management is an agentic service solution that helps service teams optimise operations, respond faster to changes, and deliver reliable, high-quality service.</p>
                <p>No matter the goal is to improve existing service processes or scale operations, <a className='u-i' href="/products/microsoft-dynamics-crm/">Dynamics 365 CRM</a> supports efficient service delivery with greater visibility and control.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Field Service Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd asd5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-7'>
                <div className='solution-new-cta-001'>
                  <h3>Optimise Your Service Operations with AI-Driven Intelligent Solution</h3>
                  <p>Adopt an intelligent CRM to improve service efficiency and response times.</p>
                  <div>
                    <Link href="#exampleModal"
                      data-bs-toggle="modal" className="btn-get-started scrollto">
                      <span>Book Your Free Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='section3' className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Inside Dynamics 365 Field Service: What Powers Your Service Operations</h2>
                <p>Dynamics 365 Field Service capabilities help UK-based service-oriented firms run and manage operations with higher levels of efficiency, visibility, and control. Now, get rid of manual scheduling effort, respond faster to service needs, and improve service outcomes with AI, Copilot, and intelligent optimisation.</p>
                <p><b>Here is how this agentic service solution supports service teams:</b></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Scheduling and Dispatch Optimisation</h3>
                      <p>Manual scheduling requires constant adjustments and effort throughout the day. With Dynamics 365 Field Service features, teams can:</p>
                      <ul>
                        <li>Optimise technicians' tasks with AI-driven scheduling features </li>
                        <li>Update schedules quickly as conditions change, including delays or cancellations</li>
                        <li>Minimise travel time while considering priorities and availability</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/field-service-003.png" width={510} height={424} alt="Intelligent Scheduling and Dispatch Optimisation" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Connected Work Order and Service Management</h3>
                      <p>Disconnected processes limit visibility across service operations. Dynamics 365 Field Service helps teams to:</p>
                      <ul>
                        <li>Manage work orders and service activities in one system</li>
                        <li>Gain real-time visibility into appointments and service status</li>
                        <li>Access scheduling and service information through a unified interface</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/field-service-004.png" width={510} height={424} alt="Connected Work Order and Service Management" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>AI-Assisted Technician Productivity</h3>
                      <p>Technicians get AI assistance during service tasks. With Dynamics 365 Field Service, teams can:</p>
                      <ul>
                        <li>Use Copilot to get relevant product-related information/answers quickly</li>
                        <li>Access key work order details directly within Microsoft Teams</li>
                        <li>Stay focused on tasks without switching between tools</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/field-service-005.png" width={510} height={424} alt="AI-Assisted Technician Productivity" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Service Insights with Connected Data</h3>
                      <p>Limited visibility into service data slows decision-making. With Dynamics 365 Field Service, organisations can:</p>
                      <ul>
                        <li>Use IoT and service data to improve operational awareness</li>
                        <li>Gain insights through AI-driven summaries and responses</li>
                        <li>Track service performance with connected data across systems</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/field-service-006.png" width={510} height={424} alt="Service Insights with Connected Data" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Integrated Operations with Business Applications</h3>
                      <p>When systems operate in isolation, it reduces efficiency and control. Field Service in Dynamics 365 integrates with:</p>
                      <ul>
                        <li><a className='u-i' href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</a> to unify financial and inventory data</li>
                        <li>Microsoft Teams and Outlook to streamline communication</li>
                        <li>Connected applications to support end-to-end service operations</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/field-service-007.png" width={510} height={424} alt="Integrated Operations with Business Applications" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Field Service Benefits: The Advantage Emerging Service Firms Need</h2>
                <p>Efficient service organisations share a common trait. They run service operations on systems that decrease manual effort, adapt to change, and support timely service delivery. Dynamics 365 Field Service provides visibility, optimisation, and control as an agentic service solution built for growing service teams.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Deliver Timely Service with Optimised Scheduling</h3>
                    <p>Service delays become a norm in your operations when you manage schedules manually. Dynamics 365 Field Service with AI-driven scheduling and optimisation helps dispatchers choose the right technician, minimise travel time, and respond to changing conditions.</p>
                  </li>
                  <li>
                    <h3>Improve Visibility into Appointments and Service Activity</h3>
                    <p>Limited visibility makes it difficult to manage daily service operations. With real-time appointment tracking and connected scheduling data, Dynamics 365 Field Service helps teams stay informed and maintain control.</p>
                  </li>
                  <li>
                    <h3>Increase Technician Productivity with AI Assistance</h3>
                    <p>Technicians can't waste time searching for information during service tasks. <a className='u-i' href="/products/dynamics-365-copilot/">Copilot in Dynamics 365 Field Service</a> let's them find relevant answers from manuals, access work order details, and complete tasks more efficiently within their workflow.</p>
                  </li>
                  <li>
                    <h3>Support Better Customer Communication and Feedback</h3>
                    <p>Customers feel valued when they are informed. Dynamics 365 Field Service has self-service scheduling, automated communication, and post-service surveys to keep customers informed and engaged.</p>
                  </li>
                  <li>
                    <h3>Adjust Operations as Conditions Change</h3>
                    <p>Service environments change throughout the day. Dynamics 365 Field Service helps dispatchers update schedules, manage priorities, and maintain service commitments using intelligent scheduling optimisation.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p style={{ fontSize: '16px' }}>Organisations using Dynamics 365 Field Service improve scheduling efficiency, reduce delays, and respond more effectively to service changes.</p>
                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Claim Your Free Dynamics 365 Field Service Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/field-service-008.png" width={592} height={680} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-four new-bg-00 new-bg-001'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 align-self-end'>
              <div className='product-side-002-im'>
                <Image src="/img/group-3602s1.png" width={485} height={627} alt="Card 6" />

              </div>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='solution-new-banner-sub-head new-bg-00-1'>
                    <h2>Agents in Dynamics 365 Field Service</h2>
                    <p><b>AI-Driven Scheduling and Assistance for Service Operations</b></p>
                    <p>Dynamics 365 Field Service has AI capabilities which help with scheduling optimisation and work order management. These capabilities let dispatchers and technicians reduce manual effort, respond to changes, and work more efficiently with real-time data and natural language interaction. </p>
                  </div>
                </div>
              </div>
              <div className='row g-3'>
                <div className='product-side-002 product-side-0022'>
                  <ul>
                    <li>
                      <h3>Scheduling Operations Agent (Preview)</h3>
                      <p>The Scheduling Operations Agent empowers dispatchers to optimise technician schedules by considering priorities, travel time, and promised service windows. It helps update schedules right away in response to cancellations, delays, or availability changes, decreasing the need for manual rescheduling.</p>
                    </li>
                    <li>
                      <h3>Copilot Capabilities in Field Service</h3>
                      <p>Copilot supports service teams with AI-powered assistance across daily workflows. Teams can:</p>
                      <div className='drd-f'>
                        <p>•	Ask questions in natural language to access system data and information</p>
                        <p>•	Generate work order summaries with status, priority, and recommended actions</p>
                        <p>•	Update work order details using natural language inputs in the mobile app</p>
                        <p>•	Create inspection templates from uploaded documents and images</p>
                      </div>
                    </li>
                    <li>
                      <h3>AI-Assisted Work Order Management</h3>
                      <p>In many service teams, a good amount of time still goes into writing updates, checking past job notes, or calling back and forth for missing information. Copilot in Dynamics 365 Field Service helps reduce that effort. Technicians can pull up job details faster, add service notes while work is happening, and keep work orders updated without stopping to handle paperwork later. <br /><br />For dispatchers and managers, it becomes easier to see what is pending, what has changed, and where delays are building up across service operations.</p>
                    </li>
                  </ul>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Field Service Pricing</h2>
                <p>Choose a Microsoft Dynamics 365 Field Service pricing plan that aligns with your service operations, workforce model, and scheduling needs. Each option supports AI-driven service management, intelligent scheduling, and connected service delivery.</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Dynamics 365 Field Service</h3>
                <p>Dynamics 365 Field Service provides comprehensive service management capabilities, including work order management, intelligent scheduling, and AI-powered assistance for technicians and dispatchers. It is designed for organisations managing end-to-end service operations.</p>
                 <h4>£61.50<span>per user per month, paid yearly</span></h4>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 Field Service Contractor</h3>
                <p>Dynamics 365 Field Service Contractor supports organisations that need to manage and assign external or third-party technicians efficiently. This Dynamics 365 Field Service license enables coordination with contract-based service resources while maintaining visibility and control.</p>
                <h4>£38.40<span>per user per month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            
          </div>
        </div>
      </section>
     <section className='solution-new-banner-six'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-12 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Dynamics 365 Field Service Services Do We Offer?</h2>
                  <p>Dynamics Square helps organisations strengthen service operations with Microsoft Dynamics 365 Field Service. As a Microsoft Solutions Partner in the UK, we help teams simplify scheduling, connect field and office operations, and reduce the gaps that slow service delivery. </p>
                </div>
              </div>
            </div>
          </div>
          <div className='row g-4 p-top-5'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/dynamics-365-field-service-implementation/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-010.png" alt="Implementation" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Implementation</h3>
                </div>
                <p className="serv-card-text-666">Deliver a structured Dynamics 365 Field Service implementation aligned with your service workflows, scheduling needs, and resource planning. Our approach focuses on correct setup of work orders, scheduling logic, and technician processes to support daily service operations.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-sales/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-011.png" alt="Upgrade and Migration" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Upgrade and Migration</h3>
                </div>
                <p className="serv-card-text-666">Move from legacy service systems to Dynamics 365 Field Service with clarity and control. We manage data migration, scheduling alignment, and system transition to ensure your teams can operate effectively from day one.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
            </div>
             <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-sales/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-012.png" alt="Support" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Support</h3>
                </div>
                <p className="serv-card-text-666">Keep your field service system up and running with our Dynamics 365 Field Service support. Our team resolves issues, manages updates, and ensures schedules, work orders, and service processes continue without disruption.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-dynamics-365-customer-service/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-013.png" alt="Consulting" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Consulting</h3>
                </div>
                <p className="serv-card-text-666">Get proven guidance on improving operational efficiency, technician productivity, and service visibility. Our certified consultants help you use Copilot, scheduling capabilities, and service insights in line with your operational goals.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
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
                  questions about Microsoft Dynamics 365 Field Service?</h2>
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

export default FieldService;
