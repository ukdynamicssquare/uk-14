import Link from "next/link";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PageSeo from "../../components/PageSeo";


const CaseStudyArteak = () => {

  return (
    <>
      <PageSeo
        type="Article"
        title="Arteak Ltd: NAV 9 R2 to Business Central Migration Case Study | Dynamics Square"
        description="How Arteak Ltd, a London HSSE consulting firm, migrated from Dynamics NAV 9 R2 to Dynamics 365 Business Central to improve accounting and financial processes."
        image="https://www.dynamicssquare.co.uk/img/case-studies-5.jpg"
        imageAlt="Arteak Ltd case study – Dynamics Square"
      />
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>NAV 9 R2 to Dynamics 365 Business Central Upgrade</h1>
                  <p>How Arteak Ltd implemented Dynamics 365 Business Central Cloud</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <img
                  src="/img/business-central-implementation-banner-1.svg"
                  alt="Arteak Ltd Dynamics 365 Business Central case study"
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
                clientName="Arteak Ltd"
                logo="/img/case-study-logos/arteak-ltd-logo.png"
                meta={[
                  { icon: "bi-clipboard-check", label: "HSSE Consulting" },
                  { icon: "bi-geo-alt", label: "London, UK" },
                  { icon: "bi-arrow-up-circle", label: "NAV 9 R2 → Business Central" },
                ]}
                title="About Arteak Ltd"
              >
                <p>Based in London, <strong>Arteak Ltd</strong> is serving its expertise in HSSE consulting and operational services. They offer a wide range of services to its national as well as international clients to consistently manage the HSE (Health, Safety, and Environment) and register unhindered growth.</p>
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
              <Image src="/img/cast-stu-pic.png" alt="Arteak Ltd business challenges" width={487} height={404} />
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
                    <p>The company was running on NAV 9 version, and they have to deal with inaccurate accounting system. They were looking to upgrade their existing NAV version with Business Central online to streamline the finance and accounting system.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Also, they were facing difficulties in managing the regularly increasing workload on existing operations with their version of NAV. They are unable to match their existing trial balance.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The company was unsatisfied with the support and services of its existing ERP partner. Their existing servers were deployed on a host server and the hosting provider refused to provide any access for further development. The existing partner was hampering them to enhance the performance using existing system. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Businesses were struggling to comply with the UK government's new requirement of electronically submitting VAT returns to HMRC due to their NAV version being incompatible.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With the help of Business Central, businesses can now seamlessly integrate their NAV software with the latest VAT return submission guidelines, ensuring compliance and streamlined financial operations.</p>
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
            <p>Upgrading to Dynamics 365 Business Central Online</p>
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
                              Dynamics Square upgraded  the company ERP from an
                              older version of{" "}
                              <Link href="/products/microsoft-dynamics-nav/">

                                Dynamics NAV
                              </Link>{" "}
                              to Microsoft Dynamics 365 Business Central Online.
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
                                Business Central Cloud enables the employees of
                                the company to run and manage the entire
                                business from anywhere and anytime.
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
                                  Microsoft Dynamics BC
                                </Link>{" "}
                                helped them in dealing with finance and
                                accounting needs.
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
                                We helped  the company with the required
                                customizations and integrations for seamless
                                operations.
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
                                departments, like finance, accounting, sales,
                                and customer management.
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
                    <p>The new ERP solution of the company started to perform flawlessly without any lag issues.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>They are now able to match the accurate figures of their turnovers along with the allocated costs. </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The hectic task of analysing the business income over expenditure become simple.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Now, they can use Dynamics 3655 Business Central to generate the balance sheet and profit/loss statements and can share the same with the concerned people in a matter of few clicks.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The client now works with the new technology to make the business smooth without system performance issues. Now, they are able to automate the production process.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>After the implementation of new ERP, they possess complete control and safety over ERP data due to the server deployment on Microsoft Azure.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With the help of Business Central, they can share the tax invoice of their client over email, saving a lot of manual paperwork.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>With the new Dynamics 365 Business Central, it becomes easy to submit the tax reports as MTD returns with HMRC directly from Business Central without any delay.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="Arteak Ltd benefits with Dynamics Square" width={640} height={598} />
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

export default CaseStudyArteak;
