import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Mousewheel } from "swiper/modules";
import faqData from '../../public/data/industrieseducation.json';
const Education = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 for Education | Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform higher education with Microsoft Dynamics 365 for Education. Streamline admissions, student engagement & operations. Contact Dynamics Square UK."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-education/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-education/" />
        <meta property="og:title" content="Microsoft Dynamics 365 for Education | Dynamics Square UK" />
        <meta property="og:description" content="Transform higher education with Microsoft Dynamics 365 for Education. Streamline admissions, student engagement & operations. Contact Dynamics Square UK." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Bc-Discrete-Manufacturing.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/industries/dynamics-365-for-education/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 for Education | Dynamics Square UK" />
        <meta property="twitter:description" content="Transform higher education with Microsoft Dynamics 365 for Education. Streamline admissions, student engagement & operations. Contact Dynamics Square UK." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/Bc-Discrete-Manufacturing.png" />

      </Head>
      <div className='solution-new-banner-one solution-new-banner-one-colo ct-padd'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 for Education</h1>
                <span className='large-heading'>Create Connected Experiences in Your Educational Institution</span>
                <p>Microsoft Dynamics 365 for Education helps educational institutions connect admissions, student engagement, finance, communication, and administration through one AI-powered platform.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Upgrade Your Education Systems &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/education-00.png" alt="wholesale-pic-28" width={540} height={630} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 align-self-center"></div>
            <div className="col-lg-6 align-self-center">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What is Dynamics 365 for Education?</h2>
                <p><b>Microsoft Dynamics 365 for Education is built for universities, colleges, and professional training centres. It allows these institutions to handle admissions, student engagement, financing, communication, reporting and administration through one integrated platform. </b></p>
                <p>In terms of capabilities, D365 lets you operate on a connected platform, comprising an ERP, CRM, AI agents, automation, and analytics to serve throughout students’ lifecycle. What give it an edge over other solutions available out there is its effortless integration with apps inside and outside of the Microsoft ecosystem. This allows institutions to expand their capabilities and work on a platform that is end-to-end connected. Educational organisations using Dynamics 365 platform enjoys centralised data, enhanced collaboration, automated procedures, and confident decision-making with live & accurate insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-22-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>What is Dynamics 365 for Education?</h2>
                <p><a className='u-i' href="/products/dynamics-365-copilot/">Microsoft Copilot</a> comes out-of-the-box in Dynamics 365 for the education industry. It helps educational bodies with:</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 p-top-5">
              <Swiper
                spaceBetween={10}
                grabCursor={true}
                modules={[Navigation, Mousewheel]}
                className="mySwiperss"
                loop={false}
                speed={1000}
                centeredSlides={false}
                breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  },
                  1024: {
                    slidesPerView: 2
                  },
                  1200: {
                    slidesPerView: 3
                  },
                }}
              >


                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-01.png" alt="AI-assisted" />
                    <p>AI-assisted administration for everyday operational tasks</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-02.png" alt="Automated communication" />
                    <p>Automated communication, follow-ups, and scheduling workflows </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-03.png" alt="Instant student summaries" />
                    <p>Instant student summaries with interaction and engagement history </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-04.png" alt="Predictive student" />
                    <p>Predictive student insights that support wellbeing and retention</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-05.png" alt="AI-powered forecasting" />
                    <p>AI-powered forecasting, reporting, and operational visibility</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-06.png" alt="Real-time recommendations" />
                    <p>Real-time recommendations for faster institutional decision-making</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-07.png" alt="Reduced administrative" />
                    <p>Reduced administrative workload across departments and campuses</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='slider-card-0001'>
                    <Image width={826} height={464} src="/img/education-08.png" alt="Better visibility" />
                    <p>Better visibility into student performance, engagement, and support needs</p>
                  </div>
                </SwiperSlide>



              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta02'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-6 align-self-center'>
              <div className='solution-new-cta-0011'>
                <h2>Challenges Educational Institutions Face Today</h2>
                <br />
                <div>
                  <p>Educational institutions in the UK comprise universities, colleges, and vocational/professional training providers. Most of these educational bodies are still not up to date in terms of the way they operate. This primarily includes managing large volumes of student information, communication, finance processes, required compliances, and administrative work on a daily basis. </p>
                  <p>As educational organisations expand across departments, programs, and campuses, it is quite obvious that operational complexity is increasing and becoming tedious to manage. In this situation, sticking to or still relying on disconnected/outdated systems can result in operational lags including delays, duplicate work, reporting difficulties, and fragmented student experiences.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='product-side-002 product-side-0022'>
                <p style={{ color: '#fff', marginBottom: '30px' }}>Prevalent challenges in the education industry are:</p>
                <ul>
                  <li>
                    <h3>Disconnected Student Information</h3>
                    <p>Student data on multiple systems leads to discrepancies and operational lags such as searching for information, updating records, and coordinating across departments.</p>
                  </li>
                  <li>
                    <h3>Slow Admissions and Enquiry Processes</h3>
                    <p>The cost of having scattered data is delays in processes during peak admission seasons. Institutions encounter issues in managing enquiries, applications, enrolments, and follow-ups.</p>
                  </li>
                  <li>
                    <h3>Limited Visibility Across Departments</h3>
                    <p>Collaboration gets difficult when departments operate in silos. This is because the teams don’t have a unified view of operations, student engagement, financial performance, and institutional activities.</p>
                  </li>
                  <li>
                    <h3>Growing Administrative Workloads</h3>
                    <p>Manual efforts on repetitive tasks eat up a lot of productive time while increasing workload. This robs the staff of the time they can spend on student support and strategic activities.</p>
                  </li>
                  <li>
                    <h3>Student Engagement and Wellbeing Concerns</h3>
                    <p>In the absence of a centralised platform, institutes are likely to fail on the most important part of their operations which is to ensure student wellbeing, engagement, and retention. There’s a probability of them not identifying the students who may require additional support.</p>
                  </li>
                  <li>
                    <h3>Reporting and Compliance Complexity</h3>
                    <p>An educational organisation has to manage compliance reporting, audits, funding requirements, and operational reporting. However, when information is not synced or scattered across systems, this becomes time-consuming and difficult to manage.</p>
                  </li>
                  <li>
                    <h3>Legacy Systems and Limited Scalability</h3>
                    <p>Educational bodies operating on outdated systems are often under the impression that things can be kept under control with little manual efforts. This assumption, however, limits their flexibility, slows collaboration, and impacts long-term scalability.</p>
                  </li>
                  <li>
                    <h3>Data Security and Access Management</h3>
                    <p>Data protection is vital for institutes. They require a system with strong access controls, role-based permissions, and secure collaborative settings as they handle sensitive information about students, finances, and operations.</p>
                  </li>
                  <li>
                    <h3>Communication Gaps During the Student Lifecycle</h3>
                    <p>Students want prompt, individualised communication at all phases of their journey. It might be difficult to handle interactions via email, phone, portals, and messaging platforms without integrated solutions.</p>
                  </li>
                  <li>
                    <h3>Increasing Demand for Data-driven Decisions</h3>
                    <p>Educational companies cannot trust data held on different platforms. As a result, they are unable to gain real-time information and are always postponing decisions resulting in bad planning, budgeting, student assistance and overall performance.</p>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003s pd-con-67'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h3>What Dynamics 365 for Education Helps You Manage</h3>
                <p>Dynamics 365 for the education industry not only streamlines everyday operations but also delivers these outcomes:</p>
                <ul>
                  <li><i className="bi bi-check"></i><span>Faster admissions and onboarding workflows </span></li>
                  <li><i className="bi bi-check"></i><span>Better visibility across departments </span></li>
                  <li><i className="bi bi-check"></i><span>Improved student communication and engagement </span></li>
                  <li><i className="bi bi-check"></i><span>Reduced manual administration </span></li>
                  <li><i className="bi bi-check"></i><span>Centralised and secure student data</span></li>
                  <li><i className="bi bi-check"></i><span>Real-time reporting and operational insights</span></li>
                  <li><i className="bi bi-check"></i><span>Enhanced collaboration between staff and teams</span></li>
                  <li><i className="bi bi-check"></i><span>Scalable systems that support institutional growth</span></li>
                </ul>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Speak to Our Expert <i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/education-09.png" alt="education-09" width={540} height={630} className='im-two' />
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className='bg-004sa'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-12">
              <div className="supprt-header-new-one">
                <h2>Core Features of Microsoft Dynamics 365 for Education</h2>
                <p>Microsoft Dynamics 365 for higher Education comes with features that put organisations in greater control of things be it communication, engaging with students, administration, reporting, finance, and so on.</p>
                <br />
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <Image src="/img/education-10.png" alt="Unified Stakeholder Management" width={48} height={48} />
                <h3>Unified Stakeholder Management</h3>
                <p>Use one connected platform to manage student, staff, alumni, and institutional information with real-time visibility in all departments.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-11.png" alt="Workflow Automation" width={48} height={48} />
                <h3>Workflow Automation</h3>
                <p>Automate admissions, approvals, onboarding communication, scheduling, reporting, and other repetitive administrative processes.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-12.png" alt="Communication Tracking" width={48} height={48} />
                <h3>Communication Tracking</h3>
                <p>Track emails, calls, meetings, messages, and student interactions through one centralised system for better collaboration and follow-ups.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-13.png" alt="AI-powered Insights" width={48} height={48} />
                <h3>AI-powered Insights</h3>
                <p>Use AI summaries, predictive insights, forecasting, and analytics to support operational planning and student engagement.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-14.png" alt="Reporting and Analytics" width={48} height={48} />
                <h3>Reporting and Analytics</h3>
                <p>Generate real-time operational, financial, and student performance reports through connected dashboards and analytics tools.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-15.png" alt="Multi-channel Engagement" width={48} height={48} />
                <h3>Multi-channel Engagement</h3>
                <p>Connect with students through email, portals, live chat, SMS, and other communication channels from one platform.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-16.png" alt="Security and Access Control" width={48} height={48} />
                <h3>Security and Access Control</h3>
                <p>Protect institutional data with role-based access, secure sign-ins, permissions management, and Microsoft security capabilities.</p>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/education-17.png" alt="wholesale-pic-11" width={48} height={48} />
                <h3>Microsoft Ecosystem Integration</h3>
                <p>Integrate seamlessly with Microsoft Teams, Microsoft Outlook, Microsoft Power BI, and other Microsoft applications.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-cta-001'>
                <h3 style={{fontSize:'32px'}}>Simplify Admissions, Communication, and Student Management</h3>
                <p>Give your teams connected systems, real-time visibility, and AI-powered tools that help streamline processes and improve experiences across the entire student lifecycle.</p>
                <div>
                  <Link
                    href="/case-studies/upgrade-from-nav09-to-business-central/"
                    className="btn-get-started scrollto">
                    <span>Get Started Now &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image style={{mixBlendMode:"soft-light"}} width={903} height={444} src="/img/education-31.png" alt="education-31" />
      </section>
      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Benefits of Microsoft Dynamics 365 for Education</h2>
                <p>Dynamics 365 is a smart way rethink the operations of your institution. It helps you create connected experiences at all levels.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/AI-Powered-09.png" width={36} height={36} alt="Streamlined Application Procedures" />
                <h3>Streamlined Application Procedures</h3>
                <p>Handle enquiries, applications, admissions, and approvals from one place without long manual processes.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/AI-Powered-11.png" width={36} height={36} alt="Enhancing Student Involvement" />
                <h3>Enhancing Student Involvement</h3>
                <p>Stay connected with students, track interactions, and send updates based on their journey and needs.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/AI-Powered-10.png" width={36} height={36} alt="Enhanced Transparency in Operations" />
                <h3>Enhanced Transparency in Operations</h3>
                <p>See admissions, accounts, reports, and communication updates clearly through one connected dashboard.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/AI-Powered-12.png" width={36} height={36} alt="Decreased Administrative Responsibilities" />
                <h3>Decreased Administrative Responsibilities</h3>
                <p>Cut down repetitive work by automating approvals, follow-ups, scheduling, and regular communication tasks.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/education-18.png" width={36} height={36} alt="Organised Data from Institutions" />
                <h3>Organised Data from Institutions</h3>
                <p>Keep student, staff, finance, and academic records together in one secure system.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/education-19.png" width={36} height={36} alt="Departments Work Together More Effectively" />
                <h3>Departments Work Together More Effectively</h3>
                <p>Help academic, admissions, finance, and student support teams work better with shared information.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/education-20.png" width={36} height={36} alt="Making Decisions with the Help of AI" />
                <h3>Making Decisions with the Help of AI</h3>
                <p>Use AI-based reports and insights to plan better and make everyday decisions with confidence.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg'>
                <Image src="/img/education-21.png" width={36} height={36} alt="Reliable and Protected System Architecture" />
                <h3>Reliable and Protected System Architecture</h3>
                <p>Run your institution on a secure Microsoft cloud platform built to support future growth.</p>
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
                  <h2>Dynamics 365 Applications for Education</h2>
                  <p>Educational bodies require a connected set up where everything works in tandem to manage everyday operations. Microsoft Dynamics 365 provides a flexible ecosystem of applications that support different areas of the education sector.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row g-4 p-top-5'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-business-central/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="dynamics-365-businesscentral" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Dynamics 365 Business Central
                  </h3>
                </div>
                <p className="serv-card-text-666">Manage finance, procurement, budgeting, approvals, reporting, and back-office operations through one connected ERP platform.</p>
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
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="Sales" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Dynamics 365 Sales
                  </h3>
                </div>
                <p className="serv-card-text-666">Streamline student recruitment, admissions management, enquiry tracking, and relationship management through connected CRM capabilities.</p>
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
                    <img src="/img/menu-icons/dynamics-365-customer-service.svg" alt="Customer Service" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Dynamics 365 Customer Service
                  </h3>
                </div>
                <p className="serv-card-text-666">Manage student support requests, communication, case tracking, and service experiences across multiple channels.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/blog/what-is-dynamics-365-customer-insights/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="Customer Insights" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Dynamics 365 Customer Insights
                  </h3>
                </div>
                <p className="serv-card-text-666">Create unified student profiles and improve engagement through connected data and personalised communication insights.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-power-bi/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/power-bi.svg" alt="Microsoft Power BI" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Power BI
                  </h3>
                </div>
                <p className="serv-card-text-666">Access real-time dashboards, operational reports, financial insights, and student analytics for faster institutional decision-making.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/microsoft-power-platform/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/power-apps.svg" alt="Microsoft Power Platform" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                    Microsoft Power Platform
                  </h3>
                </div>
                <p className="serv-card-text-666">Build custom workflows, automate processes, and create institution-specific applications with low-code tools.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>
            {/* <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/products/dynamics-365-customer-engagement/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt=" Microsoft Copilot" width="48" height="48" />
                  </div>
                  <h3 className="serv-card-title-666">
                   Microsoft Copilot
                  </h3>
                </div>
                <p className="serv-card-text-666">Improve productivity with AI-powered summaries, forecasting, reporting assistance, communication support, and operational insights.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div> */}
          </div>
        </div>
      </section>


      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='solution-new-cta-001'>
                <h3 style={{ fontSize: '34px' }}>See How a London-based College Transformed Their Operations with Dynamics 365 Business Central</h3>
                <p>Discover how an educational institution upgraded from Dynamics NAV 2009 to Microsoft Dynamics 365 Business Central to improve financial management, streamline approvals, strengthen collaboration, and support growing operational demands through connected Microsoft technologies.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Read the Case Study  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/education-26.png" alt="n-015" />
      </section>
      <section id='section5' className='solution-new-banner-five solution-new-banner-six'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='solution-new-banner-sub-head'>
                <h2>Services Offered by Dynamics Square UK for the Education Industry</h2>
                <p>We help universities, colleges, training providers, and educational organisations implement, optimise, and manage <a className='u-i' href="/products/microsoft-dynamics-365/">Microsoft Dynamics 365 solutions</a> tailored to their operational structure, student lifecycle, and long-term institutional goals.</p>
              </div>
            </div>
          </div>
          <div className='row g-4'>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-22.png" width={40} height={40} alt="Dynamics 365 Consulting" />
                <h3>Dynamics 365 Consulting</h3>
                <p>Understand the right Dynamics 365 applications, processes, and implementation approach for your institution through expert guidance and strategic planning.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-23.png" width={40} height={40} alt="Dynamics 365 Implementation" />
                <h3>Dynamics 365 Implementation</h3>
                <p>Deploy connected CRM, ERP, AI, reporting, and automation solutions designed around your educational operations and departmental requirements.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-24.png" width={40} height={40} alt="Upgrade and Migration Services" />
                <h3>Upgrade and Migration Services</h3>
                <p>Modernise legacy systems and transition from older platforms to scalable cloud-based Dynamics 365 applications with minimal operational disruption.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-25.png" width={40} height={40} alt="Customisation and Integration" />
                <h3>Customisation and Integration</h3>
                <p><a className='u-i' style={{fontSize:'16px',display:'inline'}} href="/products/microsoft-dynamics-365/integration/">Integrate Dynamics 365 with Microsoft applications</a>, third-party platforms, student systems, finance tools, and institution-specific workflows.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-27.png" width={40} height={40} alt="Managed Support Services" />
                <h3>Managed Support Services</h3>
                <p>Access ongoing technical support, system monitoring, optimisation, training, and operational assistance through flexible support plans.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-28.png" width={40} height={40} alt="AI and Automation Enablement" />
                <h3>AI and Automation Enablement</h3>
                <p>Implement AI-powered workflows, automation, reporting, and operational insights through Microsoft Copilot and Microsoft technologies.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-29.png" width={40} height={40} alt="Making Decisions with the Help of AI" />
                <h3>Reporting and Analytics Solutions</h3>
                <p>Improve institutional visibility with connected dashboards, operational reporting, financial analytics, and real-time insights through <a style={{display:'inline',fontSize:'16px'}} className='u-i' href="/products/microsoft-power-bi/">Microsoft Power BI</a>.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='solution-new-card-001 solution-new-card-001-bg bg-white'>
                <Image src="/img/education-30.png" width={40} height={40} alt="Training and User Adoption" />
                <h3>Training and User Adoption</h3>
                <p>Support staff adoption and day-to-day system usage through role-based training, workshops, and practical guidance for teams across departments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Why Choose Dynamics Square UK for Dynamics 365 for Education?</h2>
                <p>Schools or any educational institutions need technology that helps with operational speed, teamwork, keeping students interested, and expanding in the long run. Dynamics Square helps businesses set up Microsoft Dynamics 365 solutions that are useful, connected, and in line with their real-world needs.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Education-focused Dynamics 365 Expertise</h3>
                      <p>We know the problems that institutions face with things like applications, communication, finances, reporting, and administration.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>End-to-End Dynamics 365 Services</h3>
                      <p>We help institutions with all parts of their digital change, from planning and setting up to ongoing support, optimisation, updates, and training.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Expertise in Microsoft Technology</h3>
                      <p>Our team helps businesses get the most out of Microsoft Dynamics 365 Business Central, Microsoft Power BI, Microsoft Teams, and Microsoft Copilot, which are all connected technologies.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Customised Solutions for Institutions</h3>
                      <p>We set up Dynamics 365 solutions based on your organization's structure, the way your departments work, your business goals, and the way you need to report.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>AI and Automation-driven Approach</h3>
                      <p>We help institutions make their operations more efficient through AI-powered insights, automation, connected reports, and streamlined processes.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Scalable and Ready for the Future Solutions</h3>
                      <p>Our solutions help institutions grow, meet changing business needs, work with multiple campuses, and reach their long-term digital transformation goals.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Support and Improvement All the Time</h3>
                      <p>We keep helping institutions even after the system is set up by providing controlled services, system optimisation, technical support, and ongoing changes.</p>
                    </div>
                  </div>
                </div>
    
              </div>
            </div>
            <div className='col-lg-5 order-2 align-self-center'>
              <div className='img-backs-sid img-backs-sid-t'>
                <Image src="/img/about-new-32.png" alt="copil-side" width={495} height={4985} className='im-two' />
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
                        questions about Dynamics 365 for Education?</h2>
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

export default Education;
