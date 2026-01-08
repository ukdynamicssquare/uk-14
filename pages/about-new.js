import React, { useRef, useState } from 'react';
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import useCardScrollEffect from "../components/useCardScrollEffect";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import CircularRing from '../components/CircularRing';
const AboutNew = () => {

  useCardScrollEffect()

  return (
    <>
      <Head>
        <title>
          About Dynamics Square | Dynamics 365 Business Central Partner
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="header-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="about-title-head">
                <span>Dynamics Square UK</span>
                <h1>About Us</h1>
                <p>
                  At Dynamics Square, our story began with a clear purpose in
                  2011 that guides us even today. We formed our company with the
                  belief that trust should be the foundation of every business
                  relationship.
                </p>
                <Image
                  src="/img/partner-logo-black-3.png"
                  width={200}
                  height={56}
                  alt="partner-logo-black"
                />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="about-head-pic">
                <Image
                  src="/img/about-new-1.png"
                  alt="about-new-1"
                  width={481}
                  height={351}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container-fluid p-0 m-0">
          <div className="row g-0">
            <div className="col-lg-12">
              <div className="second-head text-center">
                <h2>Our Journey So Far</h2>
              </div>
            </div>
          </div>
          <div className="row g-0 achiv-desk-d">
            <div className="col-lg-12">
              <img
                src="/img/about-new-sv-r.svg"
                alt="about-new-2"
                width={1920}
                height={874}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
          <div className="row g-0 achiv-mobile-d">
            <div className="col-lg-12">
              <div className='achiv-mobile'>
                <ul>
                  <li>
                    <Image src="/img/about-new-33.png" width={34} height={34} alt="about-new-33" />
                    <div>
                      <span>2011</span>
                      <p>Our company began with a mission to simplify ERP complexity for businesses.</p>
                    </div>
                  </li>
                  <li>
                    <Image src="/img/about-new-34.png" width={34} height={34} alt="about-new-34" />
                    <div>
                      <span>2015</span>
                      <p>We expanded across the UK, US, Canada, and Australia through a consistent demand for practical and reliable support.</p>
                    </div>
                  </li>
                  <li>
                    <Image src="/img/about-new-35.png" width={34} height={34} alt="about-new-35" />
                    <div>
                      <span>2023</span>
                      <p>We supported more than 500 customers with solutions designed around real-world needs.</p>
                    </div>
                  </li>
                  <li>
                    <Image src="/img/about-new-37.png" width={34} height={34} alt="about-new-36" />
                    <div>
                      <span>2024</span>
                      <p>We reached a team strength of 150 certified experts across global offices.</p>
                    </div>
                  </li>
                  <li>
                    <Image src="/img/about-new-38.png" width={34} height={34} alt="about-new-37" />
                    <div>
                      <span>2025</span>
                      <p>We stepped into a future shaped by AI led transformation and sustainability focussed progress.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 about-bg-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="second-head text-center size-sz">
                <p>
                  We never aimed to work as just another technology provider.
                  Our intention has always centred around careful understanding,
                  honest guidance, and steady partnership.
                </p>
              </div>
            </div>
          </div>
          <div className="row about-p-40">
            <div className="col-lg-4">
              <div className="leader-se">
                <Image
                  src="/img/about-new-3.png"
                  alt="about-new-2"
                  width={523}
                  height={464}
                />
                <div className="float-inf--card float-inf--card-f">
                  <p>
                    As a tech company, we believe technology is meant to
                    simplify, not complicate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="leader-se-about">
                <p>
                  As a Microsoft Dynamics 365 implementation partner, we focus
                  on serving businesses with practical help that brings clarity
                  and confidence to their everyday operations.
                </p>
                <p>
                  Technology moves at a fast pace, yet we choose to approach
                  every client through careful listening. Trust grows
                  progressively when conversations stay honest and simple, and
                  we work to build that trust through every interaction.
                </p>
                <p>
                  Each member of our team believes that meaningful partnerships
                  come from genuine care. This value influences the way we build
                  solutions and the way we stand with our clients across their
                  entire journey.
                </p>
                <p>
                  Our Co-Founder and CEO, Manish Goyal, shaped our approach with
                  a belief that guides our work every day.
                </p>
                <p>
                  <b>
                    As an ERP and CRM partner in UK, we bring Dynamics 365
                    solutions that support consistent growth, smoother
                    processes, and stronger visibility across your business.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2 className="mine-77">What We Deliver</h2>
                <p className="new-col">
                  <b>Complete Microsoft Business Solutions</b>
                </p>
                <p>
                  We provide a wide ecosystem of solutions that bring structure
                  into business operations. Our delivery covers:
                </p>
                <ul>
                  <li>Dynamics 365 ERP and CRM</li>
                  <li>Power Platform, including Power Apps and Power BI</li>
                  <li>Azure cloud services</li>
                  <li>
                    Microsoft 365, covering communication and collaboration
                  </li>
                  <li>ISV integrations across industries</li>
                  <li>Copilot AI features for productivity and planning</li>
                </ul>
                <p>
                  Each service forms one part of a larger structure that
                  supports business stability and growth. We guide clients
                  through planning, setup, development, deployment, and support,
                  giving each organisation a clear path forward.
                </p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto"
                  >
                    <span>Transform My Business &nbsp;
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="dsa-minee">
                <Image
                  src="/img/about-new-4.png"
                  alt="about-new-4"
                  width={565}
                  height={634}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Industries We Have Worked For</h2>
                <p>
                  As a reliable Microsoft Dynamics 365 implementation partner in
                  the UK, our work spans across several industries that require
                  stable systems, clear processes, and strong operational
                  control.
                </p>
                <p>
                  <b>We partner with businesses that are into:</b>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img
                      src="/img/about-new-5.jpg"
                      alt="Distribution and logistics"
                    />
                    <h3>Distribution and logistics</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img src="/img/about-new-6.jpg" alt="Manufacturing" />
                    <h3>Manufacturing</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img
                      src="/img/about-new-7.jpg"
                      alt="Finance and Professional Services"
                    />
                    <h3>Finance and Professional Services</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img
                      src="/img/about-new-8.jpg"
                      alt="Retail and eCommerce"
                    />
                    <h3>Retail and eCommerce</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img src="/img/about-new-9.jpg" alt="Healthcare" />
                    <h3>Healthcare</h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex">
              <div className="indut-card-one indut-card-one-cu">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img src="/img/about-new-10.jpg" alt="Education" />
                    <h3>Education</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row g-p-40">
            <div className="col-lg-6">
              <p style={{ marginBottom: '-10px' }}>
                Each industry carries unique challenges, varied data flows,
                specialised compliance, and distinct customer expectations. Our
                deep industry experience helps us shape solutions that meet
                daily realities with clarity and confidence.
              </p>
              <div className="text-lg-start" style={{ paddingBottom: '20px' }}>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto"
                >
                  <span>
                    Explore More Industries &nbsp;
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Case Study Highlights</h2>
                <p>
                  <b>Our work spans a wide range of transformation journeys. These stories show our approach to real challenges.</b>
                </p>
              </div>
            </div>
          </div>
          <div className="row  g-p-40">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Global Manufacturer</h3>
                      <p>A global manufacturer faced system limitations, supply chain concerns, data gaps, and operational complexity. We delivered Business Central, customer engagement solutions, and a complete eCommerce link. This created stable processes, automated warehouse functions, unified data, and powerful customer engagement capabilities.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/about-new-11.jpg" width={580} height={456} alt="Global Manufacturer" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Medical Supplies Provider</h3>
                      <p>A medical supplier operated with an outdated NAV system, manual work, and visibility concerns. We deployed Business Central, mobile warehouse systems, document management, and training. Their operations received clarity, stability, and efficiency, supported by a cloud structure suitable for future growth.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/about-new-12.jpg" width={580} height={456} alt="Medical Supplies Provider" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Orthopaedic Supplier</h3>
                      <p>A surgical instrument supplier dealt with spreadsheets, errors, delays, and warehouse issues. We created a Business Central solution supported by mobile tools, automated bank settlement, and faster invoicing. This transformed operations and reduced manual workload.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/about-new-13.jpg" width={580} height={456} alt="Orthopaedic Supplier" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Distribution Business</h3>
                      <p>A distribution firm experienced unnecessary system add-ons, delays, and operational complexity. We migrated them to the cloud, redesigned their configuration, and helped them gain real-time system clarity. This created better financial tracking, improved warehouse functions, and dependable decision-making.</p>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/about-new-14.jpg" width={580} height={456} alt="Distribution Business" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two slution-new-cta-two-p'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10'>
              <div className='solution-new-cta-001'>
                <h3>Start Your Journey with Dynamics Square</h3>
                <p>You deserve a partner who listens, guides, builds, and stays with you throughout your journey.</p>
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
        <Image src="/img/about-new-15.png" alt="n-015" width={863} height={424} />
      </section>
      <section className="about-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Dynamics Square Delivers Practical Industry-Specific Solutions</h2>
                <p>We support everyday business needs through tools such as:</p>
              </div>
            </div>
          </div>



        </div>
        <div className='row-d'>
          <div className='col-lg-12'>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
                1400: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                },
              }}

              className="mySwiper mySwiper-side"
            >
              <SwiperSlide>
                <div className='card0-01 card0-01-1'>
                  <a href="/shopify-connector-business-central/">
                    <img src="/img/about-new-16.png" width={273} height={192} alt="about-new-16" />
                    <h3>Continia Document Capture for AP automation</h3>
                    <div className='ct--a'>
                      <span>Get Started</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card0-01 card0-01-1'>
                  <a href="/shopify-connector-business-central/">
                    <img src="/img/about-new-18.png" width={273} height={192} alt="about-new-18" />
                    <h3>Import Consignment Solution for consignment updates</h3>
                    <div className='ct--a'>
                      <span>Get Started</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card0-01 card0-01-1'>
                  <a href="/shopify-connector-business-central/">
                    <img src="/img/about-new-17.png" width={273} height={192} alt="about-new-17" />
                    <h3>Continia Expense Management for employee expenses</h3>
                    <div className='ct--a'>
                      <span>Get Started</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card0-01 card0-01-1'>
                  <a href="/shopify-connector-business-central/">
                    <img src="/img/about-new-19.png" width={273} height={192} alt="about-new-19" />
                    <h3>Yavrio for bank reconciliation</h3>
                    <div className='ct--a'>
                      <span>Get Started</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='card0-01 card0-01-1'>
                  <a href="/shopify-connector-business-central/">
                    <img src="/img/about-new-20.png" width={273} height={192} alt="about-new-20" />
                    <h3>Tasklet for warehouse management</h3>
                    <div className='ct--a'>
                      <span>Get Started</span>
                    </div>
                  </a>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </section>
      <section className="about-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>How Do We Implement: Our Methodology</h2>
                <p>
                  <b>We follow a simple and transparent method that helps clients move steadily through their transformation.</b>
                </p>
              </div>
            </div>
          </div>

          <div className="row g-p-40 ds-hh">
            <div className="col-lg-12">
              <div className="abot-status-pic">
                <Image src="/img/about-new-21.png" alt="about-new-21" width={1225} height={440} />
              </div>
            </div>
          </div>
          <div className="row solution-faq solution-faq-col faq ms-hh">
            <div className="col-lg-12">
              <div className="accordion accordion-flush" id="faqlist1">
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >Analysis Phase</button>
                  </h3>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We gather requirements, run gap fit sessions, define the project scope, and create necessary functional documents.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >Design Phase</button>
                  </h3>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We translate your business needs into detailed solution blueprints, data templates, and architecture plans.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-3"
                    >Development Phase</button>
                  </h3>
                  <div
                    id="faq-content-3"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We configure systems, develop necessary features, perform unit testing, and prepare your UAT environment.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-4"
                    >Deployment Phase</button>
                  </h3>
                  <div
                    id="faq-content-4"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We train users, run final tests, migrate data, and complete a smooth go live.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h3 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-5"
                    >Post Go-Live Phase</button>
                  </h3>
                  <div
                    id="faq-content-5"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist1"
                  >
                    <div className="accordion-body">
                      <p>We provide post launch support, monitor systems, resolve issues, and guide your internal teams for future continuity.</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bg-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Services That Support Every Stage of Your Growth</h2>
                <p>We work with a consultative approach that studies your business, industry, and goals. The guidance you receive is practical, structured, and easy to follow.</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-22.png" width={40} height={40} alt="Advisory and Consulting" />
                <h3>Advisory and Consulting</h3>
                <p>We work with a consultative approach that studies your business, industry, and goals. The guidance you receive is practical, structured, and easy to follow.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-23.png" width={40} height={40} alt="Dynamics 365 Implementation" />
                <h3>Dynamics 365 Implementation</h3>
                <p>We ensure every stage of implementation stays consistent through detailed scoping, configuration, data migration, and testing. Every step is explained with clarity so your team stays confident.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-24.png" width={40} height={40} alt="Solutioning" />
                <h3>Solutioning</h3>
                <p>We study your workflows and customer journeys carefully so that we can design systems that support efficiency and scalability.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-25.png" width={40} height={40} alt="Upgrade" />
                <h3>Upgrade</h3>
                <p>Our upgrade services include careful planning, structured communication, and minimal functional disruption.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-26.png" width={40} height={40} alt="Training" />
                <h3>Training</h3>
                <p>Our training programmes are role-based and hands on. Each session empowers your team to feel confident and comfortable with the system.</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-001'>
                <Image src="/img/about-new-27.png" width={40} height={40} alt="Dedicated Support" />
                <h3>Dedicated Support</h3>
                <p>Support remains proactive, responsive, and handled by real people who understand your business. Every interaction stays human and helpful.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-bg-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>The Team of Experts Who Guide Our Work</h2>
                <p>Our strength comes from the experience and the values carried by the people who lead our solutions. Their clarity, patience, and steady approach have shaped our reputation as trusted Dynamics 365 consultants.</p>
              </div>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-002'>
                <Image src="/img/about-new-28.png" width={185} height={176} alt="Advisory and Consulting" />
                <div className="float-inf--card float-inf--card-icn">
                  <p>The best solutions are understood, designed, and earned</p>
                </div>
                <div className='back-white-r'>
                  <h4>Darshan Mungekar,
                    <span>Principal Solution Architect</span></h4>
                  <p>Darshan holds more than 22 years of experience in manufacturing and ERP consulting. His knowledge spans the entire Dynamics 365 suite, warehouse management systems, and digital transformation projects across continents. </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-002'>
                <Image src="/img/about-new-29.png" width={185} height={176} alt="Advisory and Consulting" />
                <div className="float-inf--card float-inf--card-icn">
                  <p>Every business has a story, and I learn about it before supporting its transformation.</p>
                </div>
                <div className='back-white-r'>
                  <h4>Nitesh Sharma,
                    <span>Head of Business Development</span></h4>
                  <p>Nitesh carries a decade of experience and deep market understanding. His approach focuses on helping organisations make informed decisions with the right guidance and the right technology</p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-card-002'>
                <Image src="/img/about-new-30.png" width={185} height={176} alt="Advisory and Consulting" />
                <div className="float-inf--card float-inf--card-icn">
                  <p>Every successful implementation begins with listening before launching</p>
                </div>
                <div className='back-white-r'>
                  <h4>B. Ravindran,
                    <span>Solution Architect</span></h4>
                  <p>Ravindran brings more than 12 years of experience in Dynamics 365 Finance and large-scale implementations. His calm and structured approach helps organisations move through complex projects with confidence.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='center-cta-abot text-center'>
                <h4>Dynamics Square Has a Team That Truly Cares</h4>
                <p>Behind every solution stands a group of people who invest fully in the success of your business. Our team includes support engineers with empathy, industry specific consultants, NAV, BC, and AX specialists, and experienced solution architects who focus on solving real business problems. We keep our commitment firm across every project, small or large, and we work with the simple intention of creating systems that support your growth.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Speak To Our Expert Today &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two slution-new-cta-two-pp'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-10'>
              <div className='solution-new-cta-001'>
                <h3>Explore Dynamics 365 Solutions</h3>
                <p>Learn how the right Microsoft technologies can support your growth.</p>
                <div>
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
        <Image src="/img/about-new-31.png" alt="n-015" width={1097} height={424} />
      </section>
      <section className="about-bg-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="solution-new-banner-sub-head second-head">
                <h2>Why Organisations Choose Dynamics Square</h2>
                <p>Businesses across sectors choose Dynamics Square for several reasons.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Certified Microsoft Partner</h3>
                      <p>500+ projects powered by certified Dynamics 365 experts.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Rich Industry Experience</h3>
                      <p>We carry 14 of experience across 12 different industries.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Agile Global Teams</h3>
                      <p>Onsite and offshore teams work together to support your operations.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Deep Knowledge Across NAV and AX</h3>
                      <p>Our experience dates back to early NAV and AX systems.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Value-Driven Approach</h3>
                      <p>Our hybrid model supports cost efficiency with steady personal attention.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Structured Solution Architecture</h3>
                      <p>Our architects question, analyse, and recommend before they deploy any system.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Full 360-Degree Dynamics Expertise</h3>
                      <p>We bring ERP, CRM, ISVs, and Power Platform under one partner.</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-6 d-flex '>
                  <div className='card557'>
                    <div className='card-233-body'>
                      <h3><span><i className="bi bi-check2"></i></span>Strong Client Relationships</h3>
                      <p>Clients stay with us for more than 5 years on average.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div>
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Let’s Get You Started &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
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
      {/* <CircularRing /> */}

    </>
  );
};

export default AboutNew;
