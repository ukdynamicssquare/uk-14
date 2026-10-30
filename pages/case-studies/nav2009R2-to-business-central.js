import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PageSeo from "../../components/PageSeo";

const CaseStudyCqc = () => {

  return (
    <>
      <PageSeo
        type="Article"
        title="CQC Ltd: NAV 9 R2 to Business Central Upgrade Case Study | Dynamics Square"
        description="How CQC Ltd, a UK defence textile manufacturer, upgraded from Dynamics NAV 9 R2 to Dynamics 365 Business Central with Dynamics Square."
        image="https://www.dynamicssquare.co.uk/img/case-studies-4.jpg"
        imageAlt="CQC Ltd case study – Dynamics Square"
      />
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>NAV 9 R2 to Dynamics 365 Business Central Upgrade</h1>
                  <p>How CQC Ltd implemented Dynamics 365 Business Central Cloud</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <img
                  src="/img/business-central-implementation-banner-1.svg"
                  alt="CQC Ltd Dynamics 365 Business Central case study"
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
                clientName="CQC Ltd"
                logo="/img/case-study-logos/cqc-ltd-logo.png"
                meta={[
                  { icon: "bi-shield-check", label: "Defence Textiles" },
                  { icon: "bi-calendar-check", label: "Established 1948" },
                  { icon: "bi-arrow-up-circle", label: "NAV 9 R2 → Business Central" },
                ]}
                title="About CQC Ltd"
              >
                <p><strong>CQC Ltd</strong> was established in 1948 and is currently a world-leading manufacturer of textile products mainly for the defence market. The company is known for its world-class high quality and robust military products serving the UK Ministry of Defence and other international military agencies. They are working to establish itself as one of the UK experts in designing and manufacturing CBRN clothing.</p>
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
              <Image src="/img/cast-stu-pic.png" alt="CQC Ltd business challenges" width={487} height={407} />
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
                    <p>The company was not satisfied with the inventory valuation of their current{" "}
                      <Link
                        href="/products/microsoft-dynamics-nav/"
                        target="_blank"
                      >
                        NAV version.
                      </Link>{" "}
                      They were looking for a NAV to Dynamics 365 Business Central cloud ERP upgrade solution to manage finance, supply chain, and inventory departments.
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
                    <p>They were facing difficulties to tally their inventory with the trial balance of any financial period. This issue was impacting the financial performance of the overall business.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The company could not match and manage the actual WIP (work-in-progress) figure and BIN-wise inventory.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Also, they were experiencing issues matching the figures between product consumption and product production.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Due to the mandatory submission of VAT returns to HMRC, they were facing issues with their NAV version as it was not compatible with the new norms of the UK government for all VAT returns. Because the new rules states that the submission has to be done electronically.</p>
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
            <p>NAV 9 R2 to Business Central Online Upgrade</p>
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
                              Dynamics Square upgraded the ERP of the company from{" "}
                              <Link href="/dynamics-nav-to-business-central/">

                                NAV to Microsoft Dynamics 365 Business Central
                                Online.
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
                                D365 Business Central Cloud enables the users of
                                the company to run and manage the entire business from
                                anywhere and anytime.
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
                                <Link
                                  target="_blank"
                                  href="/products/dynamics-365-business-central/"
                                >
                                  Dynamics 365 Business Central
                                </Link>{" "}
                                Online helped the client meet their accounting
                                needs by implementing this new online ERP
                                solution.
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
                                We helped the company with the required customisations
                                and integrations for seamless operations.
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
                                Dynamics Square helped the client understand all
                                features and tools of Business Central Online
                                and helped them connect data across the
                                departments, like finance, inventory, sales, and
                                purchase.
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
                    <p>The upgraded system of the company was started to perform flawlessly without any lag issues.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Dynamics Square has resolved the issues they were facing with inventory management. Now, they are able to tally its inventory valuation with TB (Trial Balance).</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>After the upgrade, they have started getting accurate WIP (work-in-progress) figures and can monitor the data in real-time.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With multi-bins on location, the client was able to get the bin-wise inventory position.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With the help of Business Intelligence of Dynamics 365 Business Central, the system started to give suggestions to the client for the consumed raw material against the produced products.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The client now works with the new technology to make the business flow smooth without any performance issues. Now, they are able to automate the production process.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With Dynamics 365 Business Central, it becomes easy to submit the tax reports as MTD returns with HMRC directly from Business Central without any delay.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>As a trusted partner, Dynamics Square helped them understand the working of 365 Business Central for growth and scalability.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="CQC Ltd benefits with Dynamics Square" width={640} height={598} />
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
                  I recommend Dynamics Square as a provider of Microsoft
                  Dynamics 365. We were using a very old version of NAV which
                  was time-consuming and not user-friendly. Nitesh called me to
                  offer the services of Dynamics Square as a partner, and it was
                  a good decision to change and upgrade to Dynamics 365 Business
                  Central Cloud. At first, my team was hesitant to use the
                  upgraded version of ERP, but after training and testing, we
                  have 6+ months of good experience. With the upgraded system,
                  we are happy with our decision. The service provided by
                  Dynamics Square has been great during the implementation, and
                  Nitesh has continued to keep in touch with us for follow-up.
                </p>
                <h4>Davina Bevan</h4>
                <span>Finance Director</span>
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

export default CaseStudyCqc;

