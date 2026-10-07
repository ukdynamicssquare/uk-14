import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const CrmTrading = () => {

  return (
    <>
      <Head>
        <title>CRM Trading: Dynamics NAV 2009 to NAV 2018 Upgrade Case Study | Dynamics Square</title>
        <meta
          name="description"
          content="How CRM Trading, a UK fragrance and cosmetics wholesaler, upgraded from Dynamics NAV 2009 to NAV 2018 with Dynamics Square to boost operational efficiency."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/nav2009-nav18-upgrade/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="CRM Trading: Dynamics NAV 2009 to NAV 2018 Upgrade Case Study | Dynamics Square" />
        <meta property="og:description" content="How CRM Trading, a UK fragrance and cosmetics wholesaler, upgraded from Dynamics NAV 2009 to NAV 2018 with Dynamics Square to boost operational efficiency." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/case-studies/nav2009-nav18-upgrade/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/case-studies-1.jpg" />
        <meta property="og:image:secure_url" content="https://www.dynamicssquare.co.uk/img/case-studies-1.jpg" />
        <meta property="og:image:width" content="850" />
        <meta property="og:image:height" content="410" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="CRM Trading case study – Dynamics Square" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="CRM Trading: Dynamics NAV 2009 to NAV 2018 Upgrade Case Study | Dynamics Square" />
        <meta name="twitter:description" content="How CRM Trading, a UK fragrance and cosmetics wholesaler, upgraded from Dynamics NAV 2009 to NAV 2018 with Dynamics Square to boost operational efficiency." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/case-studies-1.jpg" />
        <meta name="twitter:image:alt" content="CRM Trading case study – Dynamics Square" />
      </Head>
      <section className="hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="webin-top-left case-study-bann">
                <div className="top-se">
                  <span className="date-ti">Case Study</span>
                  <h1>Dynamics NAV 2009 to NAV 2018 Upgrade</h1>
                  <p>How CRM Trading boosted operational efficiency with Microsoft Dynamics NAV 2018</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="sider-over">
                <Image
                  src="/img/Dynamics-365-Business-Central.png"
                  alt="CRM Trading Dynamics 365 Business Central case study"
                  width={1024} height={597}
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
                clientName="CRM Trading"
                logo="/img/case-study-logos/crm-trading-logo.png"
                meta={[
                  { icon: "bi-bag", label: "Fragrance & Cosmetics Wholesale" },
                  { icon: "bi-geo-alt", label: "United Kingdom" },
                  { icon: "bi-arrow-up-circle", label: "NAV 2009 → NAV 2018" },
                ]}
                title="About CRM Trading"
              >
                <p><strong>CRM Trading</strong> is a leading wholesaler of fragrance, skincare, hair-care, and cosmetics has decided for NAV 2009 to NAV 2018 upgrade for enhancing their overall operational efficiency. They were having 35 years of experience in the beauty industry and serving their products to a number of brands like Calvin Klein, Davidoff, Vera Wang, Marc Jacobs, and Sarah Jessica Parker. With a warehouse based in the UK, they are ready to source any products and deliver them to the destination within the UK and abroad. Also, they are available in trade shows like Spring and Autumn Fairs at NEC Birmingham, Cosmoprof in Bologna, and the TFWA show in Cannes to showcase their wide variety of premium products.</p>
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
              <Image src="/img/cast-stu-pic.png" alt="CRM Trading business challenges" width={484} height={407} />
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
                    <p>The company was not satisfied with the output of <Link href="/products/microsoft-dynamics-nav/">Dynamics NAV</Link> 2009. They primarily need an ERP solution to manage finance, but NAV09 lacks several aspects.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Facing difficulties in dealing with the expansion in business operations in terms of transaction volume. Also, they cannot manage the increase in workload due to the high volume of business operations.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>NAV09 starts to perform slower in completing the tasks like opening ledgers and exporting data in excel.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-exclamation-triangle"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>Due to the new norms by the UK government, the MTD (Making Tax Digital) compliance became mandatory, and NAV09 was not built for this.</p>
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
            <p>Upgraded their NAV 2009 to NAV 2018</p>
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
                            <p>
                              Dynamics Square upgraded the company System from
                              NAV09 to NAV 2018.
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
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We have integrated the whole Financial process
                                into NAV 2018 to meet the accounting needs.
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
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                NAV 2018 is capable of streamlining the tasks
                                such as setup change, user tasks, maintaining
                                employee ledger, and more.
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
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                Dynamics Square helped the company to understand
                                the NAV's Business Intelligence, which helped
                                them gain accurate insights about the business
                                and make informed decisions in real-time.
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
                                alt="proffesional-service"
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>
                                We helped the company embed the NAV 2018 with
                                apps like Office 365 and Microsoft Excel.
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
                    <p>The upgraded system of the company started to perform flawlessly and glitch-free since the upgrade. Also, the client's issue about the slow opening of ledgers is resolved with one click opening.</p>
                  </div>
                </div>

                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>
                      With{" "}
                      <Link
                        href="/products/microsoft-dynamics-nav/"
                        target="_blank"
                      >
                        Dynamics NAV 2018
                      </Link>
                      , the client was able to export any number of data to excel without any error or issue.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>The integration with Microsoft Office 365 enables the client to share the reports or data, like tax invoices, through e-mails instantly with their customers. This real-time sharing of data results in quicker disbursement of the products and paper savings for nature.
                    </p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>From NAV 2009 to NAV 2018 upgrade, the company can now submit its tax reports as MTD return with HMRC without any delay.</p>
                  </div>
                </div>
                <div className="content-inner-moil-1">
                  <div className="icons-left">
                    <div className="ext-bord">
                      <i className="bi bi-check-lg"></i>
                    </div>
                  </div>
                  <div className="cintent-right">
                    <p>As a trusted partner, Dynamics Square helped the company for the betterment of the support ticket system to measure the time and quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/Group1435.png" alt="CRM Trading benefits with Dynamics Square" width={640} height={598} />
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

export default CrmTrading;
