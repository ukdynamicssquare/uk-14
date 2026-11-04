import { useEffect, useState } from "react";
import FormCaseScroll from "../../components/FormCaseScroll";
import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PageSeo from "../../components/PageSeo";

const CaseStudyTimosco = () => {

  return (
    <>
      <PageSeo
        type="Article"
        title="Timesco UK: NAV 13 R2 to Business Central Upgrade Case Study | Dynamics Square"
        description="How Timesco UK, a surgical instrument manufacturer, upgraded from Dynamics NAV 13 R2 to Dynamics 365 Business Central Online with Dynamics Square."
        image="https://www.dynamicssquare.co.uk/img/case-studies-3.jpg"
        imageAlt="Timesco UK case study – Dynamics Square"
      />
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>NAV 13 R2 to Dynamics 365 Business Central Upgrade</h1>
                  <p>How Timesco UK upgraded from NAV 13 R2 to Dynamics 365 Business Central Online</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sider-over">
                <Image
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="Timesco UK case study"
                  width={1024}
                  height={597}
                  priority={true}
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
                clientName="Timesco UK"
                logo="/img/case-study-logos/timesco-uk-logo.png"
                meta={[
                  { icon: "bi-heart-pulse", label: "Surgical Instruments" },
                  { icon: "bi-calendar-check", label: "Established 1964" },
                  { icon: "bi-arrow-up-circle", label: "NAV 13 R2 → Business Central" },
                ]}
                title="About Timesco UK"
              >
                <p>Established in 1964, <strong>Timesco UK</strong> is a well-known manufacturer and supplier of surgical instruments in the UK market and is continuously working to expand the same globally. The company was expanding with a product range that includes Anesthesia, Surgery, General Medical, and Podiatry in the medical industry. They were also working toward innovating and developing medical technologies to bring awareness and improve the quality of human life.</p>
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
            <div className="col-lg-6">
              <Image
                src="/img/cast-stu-pic.png"
                alt="Timesco UK business challenges"
                width={484}
                height={407} />
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
                    <p>The company was not satisfied with their previous Dynamics NAV support partner in terms of providing on-time system support and the sort of services they anticipate.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They were facing difficulties while driving their manufacturing, supplying, and distribution operations through on-premises{" "}
                      <Link
                        href="/products/microsoft-dynamics-nav/"
                        target="_blank"
                        rel="noopener"
                      >
                        Dynamics NAV
                      </Link>{" "}
                      2013 R2.
                    </p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Finding a trustworthy partner for NAV 13 R2 to Dynamics 365 Business Central upgrade and getting timely support were the major challenges for them.</p>
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
            <p>NAV 13 R2 to Dynamics 365 Business Central Online Upgrade</p>
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
                              alt=""
                             aria-hidden="true"  loading="lazy" decoding="async" />
                          </div>
                          <div className="text-wrp-content">
                            <p>
                              Dynamics Square upgraded the company system from
                              Dynamics NAV 2013 R2 to{" "}
                              <Link
                                href="/products/dynamics-365-business-central/"
                                target="_blank"
                              >
                                Dynamics 365 Business Central online.
                              </Link>
                            </p>
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
                               loading="lazy" decoding="async" />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Integrated the company Business Central account
                                with third-party Document Management add on and
                                performed seamless migration to ensure connected
                                and smoother data-driven practices.
                              </p>
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
                               loading="lazy" decoding="async" />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We provided onsite UAT (User Acceptance
                                Training) for two weeks during the pandemic & Go
                                Live Sessions to ensure seamless user adaptation
                                to the company team.
                              </p>
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
                                alt=""
                               aria-hidden="true"  loading="lazy" decoding="async" />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We helped the company to easily move to Dynamics 365
                                Business Central and seamlessly start using the
                                newly upgraded system.
                              </p>
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
                    <p>The company is now using D365 Business Central on the cloud while leveraging Azure-based data-driven practices. Also, the system was integrated with Outlook helping them to accelerate their business flow while improving their financial capabilities and ensuring reliable compliance management.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They want to double their production capacity and increase their revenue by leveraging connected data experience through our integrated business management solution.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Our end-to-end user training and support helped employees of the company to adapt, learn, and use the system efficiently without losing the current workflow.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/Group1435.png"
                alt="Timesco UK benefits with Dynamics Square"
                width={640}
                height={598}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="case-clent">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="case-clent-test">
                <p>
                  We are impressed with their product awareness, technical
                  skills and commitment to us. They analyse the situation and
                  deliver to best fit our requirement and solutions.
                </p>
                <h4>Mark Shaxted</h4>
                <span>Operations Manager</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call_to_action call_to_action-height pd-404">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="Business consultant"  loading="lazy" decoding="async" />
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

export default CaseStudyTimosco;
