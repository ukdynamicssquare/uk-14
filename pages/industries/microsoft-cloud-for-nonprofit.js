import React, { useState } from "react";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import ModalVideo from "react-modal-video";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Blog from "../../components/Blog";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import PageSeo from "../../components/PageSeo";
const MicrosoftCloudForNonprofit = () => {
  const [isOpen, setOpen] = useState(false);
  const [open, setsOpen] = useState(false);
  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Cloud for Nonprofit | Dynamics Square"
        description="Microsoft Cloud for Nonprofit is a fully integrated suite of solutions, including Dynamics 365, Azure, Microsoft 365, Microsoft Teams and Power Platform, designed to support the most common processes and challenges of the nonprofit sector."
        image="https://www.dynamicssquare.co.uk/img/Not-For-Profit-banner.png"
      />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="wWF7Z-8WaPU"
        onClose={() => setOpen(false)}
      />
        <section className="Solution-banner hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 align-self-center">
                <h1>
                  Microsoft Cloud
                  <br />
                  For NonProfit
                </h1>
                <p>
                  Drive Mission-Critical Practices And Ensure Continuous Growth
                  Of Your Non-Profit organisation With Microsoft Cloud <br />
                  For Non-Profit Solution.
                </p>
                <div className="text-center text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">

                    <span>Schedule a Demo</span>

                  </Link>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/Not-For-Profit-banner.png"
                  alt="Grow Your Nonprofit Business With Microsoft Cloud"
                  width={723} height={473}
                  priority={true} />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <header className="section-header">
              <h2>
                Grow Your Nonprofit Business <br />
                With Microsoft Cloud
              </h2>
              <p>
                Microsoft Cloud for Nonprofits is designed to effectively carry
                out mission-critical practices ensuring growth for now
                scalability in the future. Designed specifically for
                fundraisers, volunteer managers, program managers, and other
                essential roles that take part to undertake and overcome
                day-to-day challenges. This non-profit industry solution brings
                the capability to seamlessly support the unique roles created to
                drive involved challenges.
              </p>
            </header>
          </div>
        </section>
        <section className="Solution-business-why custom-pd-1">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-6 align-self-center">
                <h2>
                  Why Microsoft
                  <br />
                  Cloud for <br />
                  NonProfit ?
                </h2>
                <p>
                  Microsoft Cloud for Nonprofit enables non-profit hubs to
                  seamlessly manage their donors & supporters, ensure seamless
                  fundraising & engagement, and drive a smoother constituent
                  marketing journey. This non-profit industry solution helps to
                  effectively ensure their volunteer management, volunteer
                  engagement, volunteer centre management, and more.
                </p>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="content-icons-modil-1">
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Considering your specific mission-critical needs, your
                        non-profit solution can be configured and customized to
                        fulfil your foundational needs and can serve the
                        purpose. The non-profit sector can drive unified
                        fundraising, ensure centralized data comprising both the
                        back office and frontline.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        By making effective use of this cloud solution,
                        non-profit units can gain constituents’ analytics to
                        understand whenever any supporter or constituent ensures
                        interest and are likely to engage along with channel and
                        time constraints. To attain powerful visual analytics,
                        your cloud non-profit solution can be integrated
                        seamlessly with Power BI.
                      </p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check2"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>
                        Microsoft’s cloud solution helps to ensure personalized
                        engagement through built-in capability, enables to
                        ensure seamless program delivery, allows to effectively
                        manage awards & donations, and drives purposeful
                        volunteer management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <img src="/img/MaskGroup8.png" alt="Business consultant" />
                </div>
              </div>
              <div className="col-lg-7 align-self-center">
                <div className="call_to_action-left">
                  <h3>
                    Talk to <br />
                    Our Expert Team
                  </h3>
                  <p>
                    Let's understand how Microsoft Cloud for your Non-for-profit
                    organisation
                    <br />
                    can support and serve your mission purpose.
                    <br />
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
        <section className="industry_service_bottoms">
          <header className="section-header">
            <h2>
              7 Microsoft Cloud
              <br />
              For Nonprofit Features
            </h2>
          </header>
          <div className="container">
            <div className="row position-relative">
              <div className="col-lg-6 ">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Management</h3>
                    <p>
                      Attract, engage, and retain your donors to support your
                      foundational base. By leveraging the centralized view of
                      constituents' data, know your donors, supports, or
                      fundraisers.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Personalized Engagement.svg"
                      alt="icons_Personalized Engagement"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Personalized Engagement</h3>
                    <p>
                      Take advantage of personalized engagement and impact your
                      engaging campaigns wherein connect the donor with in-built
                      engaging capability via the most trusted platforms.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons_Constituent Analytics.svg"
                      alt="icons_Constituent Analytics"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Constituent Analytics</h3>
                    <p>
                      Constituents Analytics can be leveraged to proactively
                      understand how likely your supporter, donor, or
                      constituent is interested to engage with you.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-_centralised data.svg"
                      alt="icons-_centralised data"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Unified Data</h3>
                    <p>
                      Unify your fundraising data, campaign data, and enable
                      non-profits to centralize back office and frontline data
                      comprising programs, finance & operations, etc.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Awards Management.svg"
                      alt="icons-nonprofits_Awards Management"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Donation & Award Management</h3>
                    <p>
                      Cloud solution for non-profits strengthens donation and
                      award management capabilities including payment
                      processing, fund accounting, fundraising, awards, etc.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_Constituent Management.svg"
                      alt="icons-nonprofits_Constituent Management"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Volunteer Management</h3>
                    <p>
                      Cloud solution enables non-profits to match volunteer
                      skills with the needs and ensure collaborative efforts
                      between volunteer coordinators and volunteers.
                    </p>
                  </div>
                </div>
                <div className="busine_service_bottom-right-indst">
                  <div className="card_new_img">
                    <img
                      src="/img/icons-nonprofits_program delivery.svg"
                      alt="icons-nonprofits_program delivery"
                      width="48"
                      height="48"
                     loading="lazy" decoding="async" />
                  </div>
                  <div className="card_new_content">
                    <h3>Program Delivery</h3>
                    <p>
                      To ensure program or campaign success, cloud non-profit
                      solution helps to design, deliver, and measure the ongoing
                      campaigns to accelerate mission success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action-center hero-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="call-to-action-content">
                  <h3>
                    How to bring Transformative Mission Impact with the Help of
                    Cloud Non-profit solution
                  </h3>
                  <p>
                    Considering your specific nonprofit movement, foundational
                    requirement, and to support your continuous scalability, we
                    can implement a highly configured and integrated Microsoft
                    Cloud solution for your non-profit domain to impact your
                    mission value and ensure campaign success.
                  </p>
                  <div className="text-center m-o-t m-o-t-hv">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">

                      <span>Get Started Now</span>

                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="busine_service_bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="busine_service_bottom-left">
                  <div className="busine_service_bottom-right">
                    <Image
                      src="/img/non-profit side.png"
                      className="fix-im"
                      alt="non-profit side"
                      width={553} height={548}
                    />
                    <div className="video-ytube video-ytubes">
                      <div className="popup-btn popup-btns">
                        <Link href="#javascript:void(0)" onClick={() => setOpen(true)}>

                          <Image
                            src="/img/Video-Non Profit.png"
                            alt="Video-Non Profit"
                            width={390} height={259}
                          />
                          <span className="cente-icns">
                            <img src="/img/play_icons.svg" alt="" aria-hidden="true"  loading="lazy" decoding="async" />
                          </span>

                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex align-items-center">
                <div className="side-heading">
                  <h2>
                    How Microsoft Cloud
                    <br />
                    Solution for Nonprofits Can
                    <br />
                    Help to Ensure Program Success?
                  </h2>
                  <p>
                    Before moving ahead, here is a sneak peek about how
                    Microsoft Cloud for Non-Profit can help you to support your
                    customized nonprofit activities whether to engage donors,
                    drive successful events, manage volunteers, streamline data,
                    or get in-depth engagement analytics.
                  </p>
                  <div className="text-lg-start mm-t">
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
        <section id="pricing" className="pricing">
          <div className="container">
            <header className="section-header">
              <h2>Microsoft Cloud For Nonprofit Pricing</h2>
              <p>
                Contact Dynamics Square To Get Started With Microsoft Cloud For
                Nonprofit
              </p>
            </header>
            <div className="row gy-4 p-9">
              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Basic</h3>
                  <div className="price">
                    <sup>£</sup>0<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>Available To Nonprofits Of All Sizes</strong>
                    </li>
                    <li> Prerequisite licensing costs only</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>£</sup>554.79<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 1 For Nonprofits
                        <br /> 1-250 Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Standard</h3>
                  <div className="price">
                    <sup>£</sup>1479.43<span>Per Month</span>
                  </div>
                  <ul>
                    <li>
                      <strong>
                        Plan 2 For Nonprofits And IGOs <br />
                        250+ Employees
                      </strong>
                    </li>
                    <li>Prerequisite licensing costs +</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3">
                <div className="box box-22 box-11">
                  <h3>Azure Services</h3>
                  {/* <div className="price"><sup>£</sup>0<span>Per Month</span></div> */}
                  <ul>
                    <li className="textdd">
                      <strong>As Metered</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-12 col-md-12">
                <div className="price-btn price-btnasd d-flex justify-content-center">
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-red">

                    <span>Get Started Now</span>

                  </Link>
                  {/* <Link href="#about" className="btn-get-whit">
                              <span>See Licensing Guide</span>
                              </Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="industry-more-sec">
          <div className="container">
            <header className="section-header">
              <h2>Explore Other Industries</h2>
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
                        640: {
                          slidesPerView: 1,
                          spaceBetween: 20,
                        },
                        768: {
                          slidesPerView: 1,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1300: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1400: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                      }}
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
                            <Link href="/industries/food-and-beverages/">

                              <div className="img-wrp">
                                <img
                                  src="/img/Food-and-beverage.svg"
                                  alt=""
                                  width="48"
                                  height="48"
                                 aria-hidden="true"  loading="lazy" decoding="async" />
                              </div>
                              <div className="text-wrp-content">
                                <h3>Food & Beverages</h3>
                                <p>
                                  Efficiently manage your inventory and supply
                                  chain by implementing Dynamics 365 for Food
                                  and Beverages business.
                                </p>
                                <span>Explore Now</span>
                              </div>

                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/ecommerce/">

                                <div className="img-wrp">
                                  <img
                                    src="/img/Ecommerce.svg"
                                    alt="Ecommerce"
                                    width="48"
                                  height="48"
                                   loading="lazy" decoding="async" />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>E-Commerce</h3>
                                  <p>
                                    Optimize Your End-To-End Ecommerce
                                    Processes And Improve Your Customer
                                    Experience.
                                  </p>
                                  <span>Explore Now</span>
                                </div>

                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/professional-services/">

                                <div className="img-wrp">
                                  <img
                                    src="/img/proffesional-service.svg"
                                    alt=""
                                    width="48"
                                  height="48"
                                   aria-hidden="true"  loading="lazy" decoding="async" />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Professional Services</h3>
                                  <p>
                                    Streamline And Efficiently Manage Your
                                    Professional Services with Microsoft
                                    Dynamics 365 Business Applications.
                                  </p>
                                  <span>Explore Now</span>
                                </div>

                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/microsoft-cloud-for-manufacturing/">

                                <div className="img-wrp">
                                  <img
                                    src="/img/microsoft-cloud-for-manufacturing.svg"
                                    alt="Manufacturing & Distribution"
                                    width="48"
                                  height="48"  loading="lazy" decoding="async" />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Manufacturing & Distribution</h3>
                                  <p>
                                    Keep track of your production lines and
                                    bring transparency with Microsoft Dynamics
                                    365 for Manufacturing and Distribution.
                                  </p>
                                  <span>Explore Now</span>
                                </div>

                              </Link>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <Link href="/industries/startups/">

                                <div className="img-wrp">
                                  <img
                                    src="/img/start-up.svg"
                                    alt=""
                                    width="48"
                                  height="48"
                                   aria-hidden="true"  loading="lazy" decoding="async" />
                                </div>
                                <div className="text-wrp-content">
                                  <h3>Startups</h3>
                                  <p>
                                    Leverage maximum possible resources to
                                    manage end-to-end business processes for
                                    your Startup with Microsoft Dynamics 365.
                                  </p>
                                  <span>Explore Now</span>
                                </div>

                              </Link>
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

        <section className="blogs-extra">
          <div className="container">
            <header className="section-header">
              <h2>Explore Our Recent Blogs & Resources</h2>
            </header>
            <div className="row top-2 gx-5">
              <Blog />
              <div className="col-lg-6 align-self-center">
                <Image
                  src="/img/n/Microsoft-Cloud-For-Non-Profits-Banner.png"
                  alt="Explore Our Recent Blogs & Resources"
                  width={1024} height={586} />
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default MicrosoftCloudForNonprofit;
