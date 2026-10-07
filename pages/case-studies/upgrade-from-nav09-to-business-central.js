import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


const UpgradeFromNav09ToBusinessCentral = () => {

  return (
    <>
      <Head>
        <title>BSix Sixth Form College: NAV 2009 to Business Central Case Study | Dynamics Square</title>
        <meta
          name="description"
          content="How BSix Sixth Form College upgraded from Dynamics NAV 2009 to Business Central to manage college operations and improve department collaboration."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/upgrade-from-nav09-to-business-central/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="BSix Sixth Form College: NAV 2009 to Business Central Case Study | Dynamics Square" />
        <meta property="og:description" content="How BSix Sixth Form College upgraded from Dynamics NAV 2009 to Business Central to manage college operations and improve department collaboration." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/case-studies/upgrade-from-nav09-to-business-central/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/BSix.jpg" />
        <meta property="og:image:secure_url" content="https://www.dynamicssquare.co.uk/img/BSix.jpg" />
        <meta property="og:image:width" content="850" />
        <meta property="og:image:height" content="410" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="BSix Sixth Form College case study – Dynamics Square" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="BSix Sixth Form College: NAV 2009 to Business Central Case Study | Dynamics Square" />
        <meta name="twitter:description" content="How BSix Sixth Form College upgraded from Dynamics NAV 2009 to Business Central to manage college operations and improve department collaboration." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/BSix.jpg" />
        <meta name="twitter:image:alt" content="BSix Sixth Form College case study – Dynamics Square" />
      </Head>
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Dynamics NAV 2009 to Business Central Upgrade </h1>
                  <p>How BSix Sixth Form College managed extensive college operations with Dynamics 365 Business Central</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <img
                  src="/img/business-central-implementation-banner-1.svg"
                  alt="BSix Sixth Form College Dynamics 365 Business Central case study"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="cast-studi-into">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <CaseStudyClientCard
                clientName="BSix Sixth Form College"
                logo="/img/case-study-logos/bsix-sixth-form-college-logo.png"
                meta={[
                  { icon: "bi-mortarboard", label: "Education" },
                  { icon: "bi-geo-alt", label: "Clapton, London" },
                  { icon: "bi-arrow-up-circle", label: "NAV 2009 → Business Central" },
                ]}
                title="About BSix Sixth Form College"
              >
                <p><strong>BSix Sixth Form College</strong> was founded in 2002 and situated in Clapton, London, offering world-class education to international students. It is one of the few colleges that provide courses at all levels, from entry to advanced, as well as vocational courses to assist students in discovering their passion. With their well-qualified, approachable, and friendly staff, they work around the clock to help students choose the best path to success. They accept international students in all courses, resulting in a diverse and positive environment for students that allows them to better understand the world. </p>
              </CaseStudyClientCard>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why custom-pd-1 custom-pd-2">
        <div className="container">
          <header className="section-header">
            <h2>
              What are The <br />
              Business Challenges
            </h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6 align-self-center">
              <Image src="/img/cast-stu-pic.png" alt="BSix Sixth Form College business challenges" width={487} height={404} />
            </div>
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They were using traditional automation that resulted in manual and recurring errors, including errors in financial reporting, budgeting, and approvals.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The college experienced significant growth, and it became apparent that they were facing challenges in efficiently managing vast practices involved during college operations.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They faced challenges with the successful management of cash flows, bank reconciliations, costing, fixed assets, banking, and other financial processes using Business Central.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="industry-more-sec casestudy-list-more">
        <div className="container">
          <header className="section-header">
            <h2>Solution Delivered</h2>
            <p>Upgraded their NAV system to D365 Business Central</p>
          </header>
          <div className="row mobile-margin-01">
            <div className="col-lg-12">
              <div className="swiper mySwiper">
                <div className="swiper-wrapper">
                  <Swiper
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    breakpoints={{
                      200: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                      },
                      768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1200: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                      },
                      1300: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                      },
                    }}
                    slidesPerView={3}
                    spaceBetween={15}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Autoplay, FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="industries-list-more">
                          <div className="img-wrp">
                            <img
                              src="/img/material-lightbulb-outline.svg"
                              alt="Food-and-beverage"
                            />
                          </div>
                          <div className="text-wrp-content">
                            <p>Implemented Dynamics 365 Business Central to enhance productivity & efficiency. This resulted in the successful management of the financial processes using Business Central.</p>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="NotforProfit"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Business Central was tailored to match the college's requirements, including the mapping of budgeting and approval processes, specifically for the procurement process in laboratories.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="Ecommerce"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Seamless integrations with Microsoft apps like Outlook, teams, and Office 365. This results in access to more refined and modern solutions to deal with the extensive college operation processes.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="swiper-slide">
                        <div className="swiper-slide">
                          <div className="industries-list-more">
                            <div className="img-wrp">
                              <img
                                src="/img/material-lightbulb-outline.svg"
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Exceptional educational experience for their students, teachers, and other staff which led to efficient management of their day-to-day activities.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>

                  </Swiper>
                </div>
                <div className="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Solution-business-why custom-pd-3">
        <div className="container">
          <header className="section-header">
            <h2>Benefits</h2>
          </header>
          <div className="row gx-5">
            <div className="col-lg-6">
              <div className="content-icons-modil-1">
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The college transitioned to Business Central, an advanced ERP system with comprehensive features.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Business Central proved to be a flexible and scalable solution, catering to the college's evolving needs in the changing educational landscape.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The implementation of Business Central tailored to match college requirements, providing better automation for finance, accounting, and back-office tasks.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The automation capabilities of Business Central streamlined processes, reducing manual effort and improving collaboration and communication among students, teachers, and staff.</p>
                  </div>
                </div>

              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="BSix Sixth Form College benefits with Dynamics Square" width={640} height={598} />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                  We worked with Nitesh to further customise our Microsoft
                  Dynamics Package. He provided us a top level service with well
                  trained staff as well as excellent support when needed.
                  Dynamics Square is a very professional and trustworthy. Will
                  surely recommend to everyone
                </p>
                <h4>Terence Turner</h4>
                <span>General Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left">
                <h3>Consult To Reveal Best Approach</h3>
                <p>
                  Connect with us to facilitate your system to drive a parallel
                  approach in the market you deal with. We help enterprises to
                  implement their unique needs.
                </p>
                <div className="m-o-t m-o-t-inde">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">

                    <span>Schedule a Demo</span>
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

export default UpgradeFromNav09ToBusinessCentral;
