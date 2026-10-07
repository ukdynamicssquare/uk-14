import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import CaseStudyClientCard from "../../components/CaseStudyClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";


const AccessDimensionErpToBusinessCentralMigration = () => {

  return (
    <>
      <Head>
        <title>Omicron Engineering: Access Dimensions to Business Central Case Study | Dynamics Square</title>
        <meta
          name="description"
          content="How Omicron Engineering, a classic Lancia restoration specialist, moved from Access Dimensions to Business Central to simplify costing and margins."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/access-dimension-erp-to-business-central-migration/"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Omicron Engineering: Access Dimensions to Business Central Case Study | Dynamics Square" />
        <meta property="og:description" content="How Omicron Engineering, a classic Lancia restoration specialist, moved from Access Dimensions to Business Central to simplify costing and margins." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/case-studies/access-dimension-erp-to-business-central-migration/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/Omicron-Engineering.jpg" />
        <meta property="og:image:secure_url" content="https://www.dynamicssquare.co.uk/img/Omicron-Engineering.jpg" />
        <meta property="og:image:width" content="851" />
        <meta property="og:image:height" content="410" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content="Omicron Engineering case study – Dynamics Square" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Omicron Engineering: Access Dimensions to Business Central Case Study | Dynamics Square" />
        <meta name="twitter:description" content="How Omicron Engineering, a classic Lancia restoration specialist, moved from Access Dimensions to Business Central to simplify costing and margins." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/Omicron-Engineering.jpg" />
        <meta name="twitter:image:alt" content="Omicron Engineering case study – Dynamics Square" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://www.dynamicssquare.co.uk/case-studies/" },
                    { "@type": "ListItem", "position": 3, "name": "Omicron Engineering: Access Dimensions to Business Central", "item": "https://www.dynamicssquare.co.uk/case-studies/access-dimension-erp-to-business-central-migration/" }
                  ]
                },
                {
                  "@type": "Article",
                  "headline": "Omicron Engineering: Access Dimensions to Business Central Case Study | Dynamics Square",
                  "description": "How Omicron Engineering, a classic Lancia restoration specialist, moved from Access Dimensions to Business Central to simplify costing and margins.",
                  "image": "https://www.dynamicssquare.co.uk/img/Omicron-Engineering.jpg",
                  "publisher": {
                    "@type": "Organization",
                    "name": "Dynamics Square UK",
                    "url": "https://www.dynamicssquare.co.uk"
                  }
                }
              ]
            })
          }}
        />
      </Head>
      <div>
        <section className="hero-1 hero">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="webin-top-left case-study-bann">
                  <div className="top-se">
                    <span className="date-ti">Case Study</span>
                    <h1>Access Dimension ERP to Business Central Upgrade </h1>
                    <p>How Omicron Engineering simplified the processes of calculating cost and predicting profit margins</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="sider-over">
                  <Image
                    src="/img/business-central-implementation-banner-1.svg"
                    alt="Omicron Engineering Dynamics 365 Business Central case study"
                    width={1024}
                    height={586}
                    priority
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
                  clientName="Omicron Engineering"
                  logo="/img/case-study-logos/omicron-engineering-logo.png"
                  meta={[
                    { icon: "bi-car-front", label: "Classic Car Restoration" },
                    { icon: "bi-globe", label: "Clients in 70+ Countries" },
                    { icon: "bi-arrow-up-circle", label: "Access Dimensions → Business Central" },
                  ]}
                  title="About Omicron Engineering"
                >
                  <p><strong>Omicron Engineering</strong> is a leading car restoration and customization company in the UK, specializes in classic Lancia vehicles. They also offer spare parts for classic and antique cars, with a vast inventory of over 11,000 parts available for global delivery. With their exceptional services, they have built a client base spanning over 70 countries. Their fully equipped workshop provides partial and full restorations, along with modifications such as trim, bodywork, engine enhancements, gearbox rebuilds, performance upgrades, and servicing.</p>
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
                <Image src="/img/cast-stu-pic.png" alt="Omicron Engineering business challenges" width={487} height={404} />
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
                      <p>The business was using a conventional on-premises ERP solution called Access Dimension that offers limited functionality for financial management.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-exclamation-triangle"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>It was unable to align with the purpose of managing the growing operations of the business.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-exclamation-triangle"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>The business was not able to manage different projects, track inventory, predict profit margins on each project, and calculate costs.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-exclamation-triangle"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>The business was facing continuous errors and glitches while relying on manual data entry using Excel sheets.</p>
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
              <p>Upgraded their system from Access Dimension ERP to Dynamics 365 Business Central</p>
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
                              <Image
                                src="/img/material-lightbulb-outline.svg"
                                alt="Food-and-beverage"
                                width={21}
                                height={30}
                              />
                            </div>
                            <div className="text-wrp-content">
                              <p>Our team has facilitated the global connectivity for the business, leading to a 2X increase in team collaboration.</p>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="swiper-slide">
                          <div className="swiper-slide">
                            <div className="industries-list-more">
                              <div className="img-wrp">
                                <Image
                                  src="/img/material-lightbulb-outline.svg"
                                  alt="NotforProfit"
                                  width={21}
                                  height={30}
                                />
                              </div>
                              <div className="text-wrp-content">
                                <p>We added a project management module to track all projects, providing a 100% transparent view of costs, time, parts, and profits.</p>
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
                                <Image
                                  src="/img/material-lightbulb-outline.svg"
                                  alt="Ecommerce"
                                  width={21}
                                  height={30}
                                />
                              </div>
                              <div className="text-wrp-content">
                                <p>The inventory management module allowed the business to manage even the minutest details of their spare parts inventory, resulting in 100% resource utilization.</p>
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
                                <Image
                                  src="/img/material-lightbulb-outline.svg"
                                  alt="Ecommerce"
                                  width={21}
                                  height={30}
                                />
                              </div>
                              <div className="text-wrp-content">
                                <p>The optimization of their operations and support of their growth objectives through modern solutions.</p>
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
                      <p>With Business Central, the business can now track, feed, and share inventory data in real-time, ensuring better control over stock levels.</p>
                    </div>
                  </div>

                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check-lg"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>By creating and sharing invoices directly with customers while tracking all costs, the company has streamlined the invoicing process and improved transparency and reliability.</p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check-lg"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>The company can now effectively monitor their finances, including assets, liabilities, liquidity, budget, and cash flow.  </p>
                    </div>
                  </div>
                  <div className="content-inner-moil-1">
                    <div className="icons-left">
                      <div className="ext-bord">
                        <i className="bi bi-check-lg"></i>
                      </div>
                    </div>
                    <div className="cintent-right">
                      <p>Based on their evolving requirements, the business can now manage customer communication and enhance the overall customer experience.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image src="/img/Group1435.png" alt="Omicron Engineering benefits with Dynamics Square" width={640} height={598} />
              </div>
            </div>
          </div>
        </section>

        <section className="call_to_action call_to_action-height pd-404">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="call_to_action-right over-img">
                  <Image src="/img/MaskGroup8.png" alt="image" width={339} height={483} />
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

      </div>
    </>
  );
};

export default AccessDimensionErpToBusinessCentralMigration;
