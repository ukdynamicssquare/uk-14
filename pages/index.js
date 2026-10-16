import FooterNew from "../components/FooterNew";
import Image from "next/image";
import Link from "next/link";
import pageLastmod from "../page-lastmod.json";
import PageSeo from "../components/PageSeo";

// Homepage-only WebPage node. Organization, WebSite and #logo are defined
// site-wide in _app.js and referenced here by @id.
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.dynamicssquare.co.uk/#webpage",
  url: "https://www.dynamicssquare.co.uk/",
  name: "Microsoft Dynamics 365 Partner UK - Dynamics Square™",
  description:
    "Dynamics Square™ is a leading Microsoft Dynamics 365 Partner in the UK, empowering organisations with expert CRM and ERP solutions, seamless implementation, and ongoing support.",
  isPartOf: { "@id": "https://www.dynamicssquare.co.uk/#website" },
  about: { "@id": "https://www.dynamicssquare.co.uk/#organization" },
  primaryImageOfPage: { "@id": "https://www.dynamicssquare.co.uk/#logo" },
  datePublished: "2021-08-31T06:09:16+00:00",
  dateModified: pageLastmod["pages/index.js"],
  inLanguage: "en-GB",
};

const HomeOneNew = () => {
  return (
    <>
      <PageSeo
        type="WebPage"
        title="Microsoft Dynamics 365 Partner UK - Dynamics Square™"
        description="Dynamics Square™ is a leading Microsoft Dynamics 365 Partner in the UK, empowering organisations with expert CRM and ERP solutions, seamless implementation, and ongoing support."
        image="/img/home-page-og.png"
        extraSchema={webPageSchema}
      />

        <section className="home-baner-head-new">
          <div className="container">
            <div className="row">
              {/* <div className="col-lg-12">
                <div className="prom-banner-new">
                  <a href="https://forms.reg.buzz/subcon-2026/?exhibitor-inviter=dynamics-square" rel="nofollow"><Image src="/img/regis-banner.png" alt="regis-banner" width={1900} height={300}/></a>
                </div>
              </div> */}
              <div className="col-lg-12">
                <div className="floting-b">
                  <div className="orbit-parent">
                    <div className="orbit-child child1"></div>
                    <div className="orbit-child child2"></div>
                    <div className="orbit-child child3"></div>
                  </div>
                </div>
                <div className="home-baner-head">
                  <h1>UK's Trusted Microsoft Dynamics 365 Partner</h1>
                  <span className="home-span">
                    When results count, <br />
                    Dynamics Square delivers!{" "}
                  </span>
                  <p>
                    As a certified Microsoft Dynamics 365 partner in the UK, we
                    empower businesses with future-ready technologies that
                    deliver impact. Dominate and thrive with AI-powered
                    Microsoft solutions. With Dynamics Square, your success is
                    powered by years of proven expertise—no matter the industry!
                  </p>

                  <a
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn btn-home"
                  >
                    <img
                      src="/img/buttion-ic-1.png"
                      width={26}
                      height={26}
                      alt="icons"
                    />{" "}
                    Book a Free Consultation{" "}
                    <span>
                      <i className="bi bi-arrow-right-circle"></i>
                    </span>
                  </a>
                </div>
                <div className="specialtitle">
                  <span>
                    Trusted by 500+ businesses · No obligation · Fast response
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid hh-150">
            <div className="row">
              <div className="col-lg-12">
                <div className="home-floting-image text-center">
                  <Image width={1388} height={318}
                    src="/img/new-home-banner.png"
                    alt="UK's Trusted Microsoft Dynamics 365 Partner"
                    priority />
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="client-home-new-list">
                  <ul>
                    <li>
                      <Image
                        src="/img/cli-1.png"
                        alt="Parweld logo"
                        width={223}
                        height={78} />
                    </li>
                    <li>
                      <Image
                        src="/img/cli-2.png"
                        alt="NCC Education logo"
                        width={174}
                        height={78} />
                    </li>
                    <li>
                      <Image
                        src="/img/cli-3.png"
                        alt="COMXO logo"
                        width={230}
                        height={78} />
                    </li>
                    <li>
                      <Image
                        src="/img/cli-4.png"
                        alt="Arteak logo"
                        width={241}
                        height={78} />
                    </li>
                    <li>
                      <Image
                        src="/img/cli-5.png"
                        alt="MTA logo"
                        width={122}
                        height={78} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="client-home-new-list-btom">
            <Image width={423} height={425} src="/img/new-home-banner-1.png" alt="Dynamics Square: Your Microsoft Solutions Partner" />
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row p-80">
              <div className="col-lg-8 col-md-12 col-sm-12">
                <div className="new-title-heading new-tit-heading">
                  <h2>Dynamics Square: Your Microsoft Solutions Partner</h2>
                  <p>
                    As a Microsoft Dynamics 365 implementation partner, we have
                    been consistently delivering impactful solutions, earning
                    trust through innovation & commitment and empowering
                    businesses to achieve excellence, irrespective of the
                    industry. Recognised as a trusted Microsoft Solutions Partner and
                    expert Microsoft Dynamics ERP partner, our team drives
                    successful digital transformations through industry-aligned
                    expertise and strategic execution.{" "}
                  </p>
                  <div className="more-sboyt-lin">
                    <a href="/about-us/">
                      <span>
                        Learn more about us &nbsp;
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 align-self-end">
                <div className="border-left-img">
                  <img
                    src="/img/partner-logo-black-big.png"
                    alt="Microsoft Solutions Partner badge"
                    width={308}
                    height={86}  loading="lazy" decoding="async" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex">
                <div className="accive-new-list">
                  <span>500+</span>
                  <p>
                    Innovative implementations delivered with strategy,
                    precision, and success.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex">
                <div className="accive-new-list">
                  <span>150+</span>
                  <p>
                    Skilled professionals with deep, industry-specific expertise
                    driving innovation.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex">
                <div className="accive-new-list">
                  <span>14+</span>
                  <p>
                    Years of industry mastery, delivering excellence in every
                    solution.
                  </p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-6 d-flex">
                <div className="accive-new-list">
                  <span>12+</span>
                  <p>
                    Industries transformed with cutting-edge technology and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gra-sc op-01">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>Our Services: Simple, Clear, and Focused</h2>
                  <p>
                    At Dynamics Square, we bring far more than software setup.
                    We help businesses reach full strength by guiding them with
                    clear advice, smooth execution, and steady support. As a
                    trusted Microsoft Business Solutions Partner, we make work
                    simple by turning problems into chances for growth with
                    consulting, careful delivery, and care that continues long
                    after.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-3 m--t-40 ">
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667">
                  <div className="card-top">
                    <a href="/our-services/dynamics-365-consultant/">
                      <img
                        src="/img/serve-ic-01.png"
                        alt=""
                        width={40}
                        height={40}
                       aria-hidden="true"  loading="lazy" decoding="async" />
                      <h3>Consulting</h3>
                      <p>
                        We study how your business runs today and show where
                        Microsoft Dynamics 365 can add real value. Every feature
                        is matched carefully with your goals so that the system
                        supports you in the best way.
                      </p>
                      <span>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667">
                  <div className="card-top">
                    <a href="/our-services/dynamics-365-implementation-services/">
                      <img
                        src="/img/serve-ic-02.png"
                        alt=""
                        width={40}
                        height={40}
                       aria-hidden="true"  loading="lazy" decoding="async" />
                      <h3>Implementation</h3>
                      <p>
                        From Dynamics 365 Business Central to Dynamics 365
                        Finance and other systems, we manage every part of
                        setup. Our aim is to deliver a clean start that keeps
                        daily work running without stress or stops.
                      </p>
                      <span>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667">
                  <div className="card-top">
                    <a href="/our-services/dynamics-365-upgrade-services/">
                      <img
                        src="/img/serve-ic-03.png"
                        alt=""
                        width={40}
                        height={40}
                       aria-hidden="true"  loading="lazy" decoding="async" />
                      <h3>Upgrade</h3>
                      <p>
                        Our team works quietly in the background, so your
                        systems stay smooth and strong. This helps your people
                        focus fully on growing the business without worrying
                        about slowdowns.
                      </p>
                      <span>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667">
                  <div className="card-top">
                    <a href="/our-services/dynamics-365-support-services/">
                      <img
                        src="/img/serve-ic-04.png"
                        alt=""
                        width={40}
                        height={40}
                       aria-hidden="true"  loading="lazy" decoding="async" />
                      <h3>Ongoing Support</h3>
                      <p>
                        Dynamics Square stays beside you after the system goes
                        live. Our experts keep things working at their best so
                        you can stay focused on building success while feeling
                        secure about your technology.
                      </p>
                      <span>Learn more</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 text-center to-22">
                <a href="/our-services/" className="btn-red btn">
                  Explore More <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gra-scs">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>Your Industry? Our Expertise!</h2>
                  <p>
                    Dynamics Square brings decades of profound industry
                    expertise that merges ongoing industry insights with
                    Microsoft technology to help you capitalise on your biggest
                    opportunities. As a trusted Microsoft Dynamics 365
                    implementation partner, we deliver solutions customised for
                    your business growth. Whether you’re in retail,
                    manufacturing, education, or healthcare, we’re the Microsoft
                    Dynamics 365 implementation partner UK businesses trust to
                    deliver measurable results.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-77">
              <div className="tabs-service-slide-solution">
                <div
                  className="nav nav-tabs mb-3"
                  id="nav-tab-new"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-industry-four-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-four"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-four"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/ind-06.png"
                        alt="Distribution"
                        width="32"
                        height="32"
                       loading="lazy" decoding="async" />
                    </div>
                    <span>Distribution</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-industry-one-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-one"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-one"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/shopping_cart.png"
                        alt="Your Industry? Our Expertise!"
                        width="32"
                        height="32"  loading="lazy" decoding="async" />
                    </div>
                    <span>E-commerce</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-industry-two-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-two"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-two"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/school.png"
                        alt="Education"
                        width="32"
                        height="32"
                       loading="lazy" decoding="async" />
                    </div>
                    <span>Education</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-industry-three-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-three"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-three"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/manufacturing-ds-uk-ico.png"
                        alt="Manufacturing"
                        width="32"
                        height="32"
                       loading="lazy" decoding="async" />
                    </div>
                    <span>Manufacturing</span>
                  </button>
                  
                  <button
                    className="nav-link"
                    id="nav-industry-five-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-five"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-five"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/ind-07.png"
                        alt="Retail"
                        width="32"
                        height="32"
                       loading="lazy" decoding="async" />
                    </div>
                    <span>Retail</span>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-industry-six-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-industry-six"
                    type="button"
                    role="tab"
                    aria-controls="nav-industry-six"
                    aria-selected="true"
                  >
                    <div className="rounded-circle">
                      <img
                        src="/img/ind-08.png"
                        alt="Logistics"
                        width="32"
                        height="32"
                       loading="lazy" decoding="async" />
                    </div>
                    <span>Logistics</span>
                  </button>
                  {/* <button className="nav-link">
                    <div className="rounded-circle">
                      <img
                        src="/img/add_circle.png"
                        alt="Explore More"
                        width="32"
                        height="32"
                      />
                    </div>
                    <span>
                      <a>Explore More</a>
                    </span>
                  </button> */}
                </div>

                <div className="tab-content" id="nav-tabContentss">
                  <div
                    className="tab-pane fade"
                    id="nav-industry-one"
                    role="tabpanel"
                    aria-labelledby="nav-industry-one-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/001.png"
                            alt="Scale Your Online Stores Confidently" />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>E-commerce </span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Scale Your Online Stores Confidently</h3>
                          <p>
                            Delivering exceptional experiences to your buyers
                            and sellers, all in one place.
                          </p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Seamless Order Processing</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Smart Inventory Management</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Efficient Shipping Integration</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Automated Financial Insights</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Enhanced Customer Service</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/ecommerce/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-industry-two"
                    role="tabpanel"
                    aria-labelledby="nav-industry-two-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/002.png"
                            alt="Education"
                          />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Education</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>
                            Automate Your Education System with Dynamics
                            365{" "}
                          </h3>
                          <p>
                            Manage staff, student & curriculum data with
                            AI-powered ERP & CRM solution
                          </p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Improved learning paths</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Automated admin tasks</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Student, Staff Management</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Alumni Relations & Fundraising</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Enhanced Stakeholder Collaboration</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/dynamics-365-for-education/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-industry-three"
                    role="tabpanel"
                    aria-labelledby="nav-industry-three-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/003.png"
                            alt="Manufacturing"
                          />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Manufacturing </span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Connect, Collaborate & Overcome Disruptions</h3>
                          <p>
                            Modernise your supply chain for better visibility,
                            planning, and efficiency
                          </p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Minimise Unplanned Downtime</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Predictive Maintenance</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Demand Forecasting & Planning</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Smart Factory Solutions</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Supply Chain Visibility</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/microsoft-cloud-for-manufacturing/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade active show"
                    id="nav-industry-four"
                    role="tabpanel"
                    aria-labelledby="nav-industry-four-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/ind-03.png"
                            alt="Distribution"
                          />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Distribution</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Streamline Your Distribution Operations at Scale</h3>
                          <p>Empowering distributors with connected systems to manage supply, demand, and profitability in one place.</p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Real-Time Inventory Visibility</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Smarter Demand & Supply Planning</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Automated Order & Procurement Workflows</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Actionable Financial & Sales Insights</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Stronger Partner & Customer Relationships</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/dynamics-365-for-distribution/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-industry-five"
                    role="tabpanel"
                    aria-labelledby="nav-industry-five-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/ind-04.png"
                            alt="Retail"
                          />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Retail</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Deliver Unified Retail Experiences Across Channels</h3>
                          <p>Helping retailers connect stores, customers, and operations to drive growth and loyalty seamlessly.</p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Omnichannel Sales & Customer Engagement</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Intelligent Inventory & Replenishment</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Faster Billing & POS Integration</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Data-Driven Pricing & Promotions</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Personalized Customer Experiences</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/dynamics-365-for-retail/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="tab-pane fade"
                    id="nav-industry-six"
                    role="tabpanel"
                    aria-labelledby="nav-industry-six-tab"
                  >
                    <div className="tab-industry-contant-one">
                      <div className="right-sect">
                        <div className="d-colomn">
                          <Image
                            width={414}
                            height={465}
                            src="/img/ind-05.png"
                            alt="Logistics"
                          />
                        </div>
                      </div>
                      <div className="left-sect">
                        <div className="tags-indy">
                          <span>Logistics</span>
                        </div>
                        <div className="inner-info-left">
                          <h3>Optimize Logistics Operations with Intelligent Automation</h3>
                          <p>Enabling logistics businesses to improve visibility, efficiency, and delivery performance across the supply chain.</p>
                          <ul>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>End-to-End Shipment Tracking</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>
                                Warehouse & Fleet Optimization
                              </span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Automated Routing & Scheduling</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Cost & Performance Analytics</span>
                            </li>
                            <li>
                              <i className="bi bi-check-circle"></i>{" "}
                              <span>Improved Service Reliability & Compliance</span>
                            </li>
                          </ul>
                          <Link
                            href="/industries/dynamics-365-for-logistics/"
                            className="lins-indu"
                          >
                            Know more about solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
           <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>See how our customers drive impact</h2>
                </div>
              </div>
            </div>
            <div className="row case-div-o">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                  <div className="card-666">
                    <div className="crad-img">
                      <Image
                        src="/img/case-imgs-2.jpg"
                        alt="See how our customers drive impact"
                        width={610}
                        height={592} />
                      <p>
                        London’s top college boosts departmental synergy by 80%
                        with a system upgrade.
                      </p>
                    </div>
                    <div className="card-666-anc">
                      <a href="/case-studies/upgrade-from-nav09-to-business-central/">
                        Read more <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                  <div className="card-666">
                    <div className="crad-img">
                      <Image
                        src="/img/case-imgs-3.jpg"
                        alt="See how our customers drive impact"
                        width={610}
                        height={592} />
                      <p>
                        A car restoration company boosted ROI by 30% through
                        custom solutions.
                      </p>
                    </div>
                    <div className="card-666-anc">
                      <a href="/case-studies/access-dimension-erp-to-business-central-migration/">
                        Read more <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                  <div className="card-666">
                    <div className="crad-img">
                      <Image
                        src="/img/case-imgs-1.jpg"
                        alt="See how our customers drive impact"
                        width={610}
                        height={592} />
                      <p>
                        A renowned UK defence apparel company maximised
                        efficiency by 50%.
                      </p>
                    </div>
                    <div className="card-666-anc">
                      <a href="/case-studies/nav2009R2-to-business-central/">
                        Read more <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                  <div className="card-666">
                    <div className="crad-img">
                      <Image
                        src="/img/case-imgs-4.jpg"
                        alt="See how our customers drive impact"
                        width={610}
                        height={592} />
                      <p>
                        Strategic advancements led an orthopaedic implant
                        manufacturer to 60% more visibility.
                      </p>
                    </div>
                    <div className="card-666-anc">
                      <a href="/case-studies/upgrading-to-dynamics-365-business-central/">
                        Read more <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12 text-center to-22">
                <a href="/case-studies/" className="btn-red btn">
                  Explore more use cases <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section>          
       
         <section>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                 <h2>Microsoft Business Apps: New Age Solutions to Drive Exponential Growth</h2>
                  <p>The world is changing, and so is technology! If you're struggling to thrive in a fast-paced market, don't worry. Dynamics Square will address your business challenges with Microsoft Business Apps </p>
                </div>
              </div>
            </div>
            <div className="row">


              <div className="tabs-service-slide">
                <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                  <button className="nav-link active" id="nav-service-one-tab" data-bs-toggle="tab" data-bs-target="#nav-service-one" type="button" role="tab" aria-controls="nav-service-one" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure> Business Central</button>
                  <button className="nav-link" id="nav-service-two-tab" data-bs-toggle="tab" data-bs-target="#nav-service-two" type="button" role="tab" aria-controls="nav-service-two" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-finance.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure> Finance</button>
                  <button className="nav-link" id="nav-service-five-tab" data-bs-toggle="tab" data-bs-target="#nav-service-five" type="button" role="tab" aria-controls="nav-service-five" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure> Supply Chain</button>
                  <button className="nav-link" id="nav-service-three-tab" data-bs-toggle="tab" data-bs-target="#nav-service-three" type="button" role="tab" aria-controls="nav-service-three" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-sales.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure>Sales</button>
                  <button className="nav-link" id="nav-service-four-tab" data-bs-toggle="tab" data-bs-target="#nav-service-four" type="button" role="tab" aria-controls="nav-service-four" aria-selected="true"><figure>
                    <img src="/img/menu-icons/power-bi.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure>Power BI</button>

                  <button className="nav-link" id="nav-service-six-tab" data-bs-toggle="tab" data-bs-target="#nav-service-six" type="button" role="tab" aria-controls="nav-service-six" aria-selected="true"><figure>
                    <img src="/img/menu-icons/dynamics-365-customer-engagement.svg" alt="" width="48" height="48" aria-hidden="true"  loading="lazy" decoding="async" />
                  </figure> Customer Service</button>



                </div>

                <div className="tab-content" id="nav-tabContent">
                  <div className="tab-pane fade active show" id="nav-service-one" role="tabpanel" aria-labelledby="nav-service-one-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">
                        <div className="inner-info-left">
                          <h3>Smart, AI-enabled ERP for SMBs</h3>
                          <p>Outperform smartly with the ERP trusted by 96% of Fortune 500 companies.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Enjoy more savings with low cost of ownership</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Boost efficiency with AI and automated workflows</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>No more manual data entry or app-switching</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Increase revenue with precise cash flow forecasts</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Flexibility to manage your business from anywhere</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="Smart, AI-enabled ERP for SMBs"  loading="lazy" decoding="async" />
                            <span>Cloud-Enabled Growth</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/AI-powered-efficiency.png" alt="Smart, AI-enabled ERP for SMBs"  loading="lazy" decoding="async" />
                            <span>AI-Powered Efficiency</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/work-on-the-move.png" alt="Smart, AI-enabled ERP for SMBs"  loading="lazy" decoding="async" />
                            <span>Work on the Move</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/flexible-integration.png" alt="Smart, AI-enabled ERP for SMBs"  loading="lazy" decoding="async" />
                            <span>Flexible Integration</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/intelligent-decision-making.png" alt="Smart, AI-enabled ERP for SMBs"  loading="lazy" decoding="async" />
                            <span>Intelligent Decision Making </span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/dynamics-365-business-central/"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="nav-service-two" role="tabpanel" aria-labelledby="nav-service-two-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Accurate financials, every time, on time</h3>
                          <p>Boost ROI, Cut Risks: Automate Financial Activities</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Real-time financial analytics for informed decisions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>AI-driven insights for proactive risk management</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Streamline operations and improve cash flow with automation</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Stay compliant with ever-changing global financial regulations</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Get a unified financial view to make informed decisions</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/financial-agility.png" alt="Accurate financials, every time, on time"  loading="lazy" decoding="async" />
                            <span>Accurate financial forecasting</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/AI-Powerdbilling.png" alt="Accurate financials, every time, on time"  loading="lazy" decoding="async" />
                            <span>AI for risk predictions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cash-flow.png" alt="Accurate financials, every time, on time"  loading="lazy" decoding="async" />
                            <span>Automated financial workflows</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/away-from-dijointed.png" alt="Accurate financials, every time, on time"  loading="lazy" decoding="async" />
                            <span>Regulatory compliance tools</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/cloud_done.png" alt="Accurate financials, every time, on time"  loading="lazy" decoding="async" />
                            <span>Secure, unified data platform</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/microsoft-dynamics-365-finance/"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-three" role="tabpanel" aria-labelledby="nav-service-three-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Close deals faster and win more customers</h3>
                          <p>Leverage AI to simplify sales, convert leads fast and expand customer base.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Use Copilot to reduce mundane tasks </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Ease selling with intelligent customer insights </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Meet customer’s preferences with personalized interactions</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Filter the right customers with AI-based scoring and visualizations</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Integrated sales processes within the Microsoft Ecosystem</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/control_point_duplicate.png" alt="Close deals faster and win more customers"  loading="lazy" decoding="async" />
                            <span>AI-powered Sales Automation</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/perm_data_setting.png" alt="Close deals faster and win more customers"  loading="lazy" decoding="async" />
                            <span>Integration with native Solutions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/data_exploration.png" alt="Close deals faster and win more customers"  loading="lazy" decoding="async" />
                            <span>Data-driven sales strategies</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/aspect_ratio.png" alt="Close deals faster and win more customers"  loading="lazy" decoding="async" />
                            <span>Avail Real-time insights</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Unified-data.png" alt="Close deals faster and win more customers"  loading="lazy" decoding="async" />
                            <span>Shorten sales cycle using AI</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/microsoft-dynamics-365-sales/"
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-four" role="tabpanel" aria-labelledby="nav-service-four-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Visualise Data, See Beyond the Numbers</h3>
                          <p>Transform data into actionable insight and make data driven decisions.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Enhanced decision making with real-time insights</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved operational efficiency with increased productivity</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Analyse customer behaviour for tailored experience</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Simplify data visualization and report generation</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improves communication and enable team collaboration</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/experimental-journey.png" alt="Visualise Data, See Beyond the Numbers"  loading="lazy" decoding="async" />
                            <span>Cloud-based data connectivity</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/multi-channel-campaign.png" alt="Visualise Data, See Beyond the Numbers"  loading="lazy" decoding="async" />
                            <span>Data transformation and modelling</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/customer-insights.png" alt="Visualise Data, See Beyond the Numbers"  loading="lazy" decoding="async" />
                            <span>Interactive reports and dashboards</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Scalable-market.png" alt="Visualise Data, See Beyond the Numbers"  loading="lazy" decoding="async" />
                            <span>Advanced data analytics</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/realtime-performance.png" alt="Visualise Data, See Beyond the Numbers"  loading="lazy" decoding="async" />
                            <span>Fully secured data</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/microsoft-power-bi/"
                            data-bs-toggle="modal"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-five" role="tabpanel" aria-labelledby="nav-service-five-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Secure, smart and optimised Supply Chain</h3>
                          <p>Be disruption-ready, mitigate supply chain issues with Dynamics 365 SCM.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Boosted Performance with Intelligent Guidance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Proactive Issue Detection for Quality Assurance</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Complete Visibility for Supply Chain Efficiency</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Resource Management for Optimal Material Use</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Maximized Equipment Effectiveness for Productivity</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/unmatched-cybersecurity.png" alt="Secure, smart and optimised Supply Chain"  loading="lazy" decoding="async" />
                            <span>Strategic Supply Chain Mapping</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/proactive-inventory-management.png" alt="Secure, smart and optimised Supply Chain"  loading="lazy" decoding="async" />
                            <span>Efficient Procurement Solutions</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/warehouse-optimisation.png" alt="Secure, smart and optimised Supply Chain"  loading="lazy" decoding="async" />
                            <span>Streamlined Manufacturing Flow</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/agile-manufacturing-practice.png" alt="Secure, smart and optimised Supply Chain"  loading="lazy" decoding="async" />
                            <span>Effective Order & Pricing System</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/minimise-downtime.png" alt="Secure, smart and optimised Supply Chain"  loading="lazy" decoding="async" />
                            <span>Optimized Warehouse & Fulfilment</span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/dynamics-365-supply-chain-management/"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="nav-service-six" role="tabpanel" aria-labelledby="nav-service-six-tab">
                    <div className="tab-inner-contant-one">
                      <div className="left-sect">

                        <div className="inner-info-left">
                          <h3>Empower agents to offer great customer experience</h3>
                          <p>Get advanced tools and real-time insights to build lasting customer relationships.</p>
                          <ul>
                            <li><i className="bi bi-check-circle"></i> <span>Advanced service delivery tracking and placements</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Deliver consistent support across multiple channels </span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Personalize customer interactions through AI-Insights</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Improved innovation with real-time feedback and analysis.</span></li>
                            <li><i className="bi bi-check-circle"></i> <span>Enable self-service options for faster issue resolution.</span></li>
                          </ul>
                        </div>
                      </div>
                      <div className="right-sect">
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Seamless-support.png" alt="Empower agents to offer great customer experience"  loading="lazy" decoding="async" />
                            <span>Seamless Support</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/customer-accesibility.png" alt="Empower agents to offer great customer experience"  loading="lazy" decoding="async" />
                            <span>Enhanced Customer Accessibility</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Personalisation-for-customer.png" alt="Empower agents to offer great customer experience"  loading="lazy" decoding="async" />
                            <span>AI-Driven Personalization</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/issuee-resolution.png" alt="Empower agents to offer great customer experience"  loading="lazy" decoding="async" />
                            <span>Proactive Issue Resolution</span>
                          </figure>
                        </div>
                        <div className="d-colomn">
                          <figure>
                            <img src="/img/Knowledge-management.png" alt="Empower agents to offer great customer experience"  loading="lazy" decoding="async" />
                            <span>Knowledge Management </span>
                          </figure>
                        </div>
                        <div className="bnn">
                          <Link
                            href="/products/microsoft-dynamics-365-customer-service/"
                            className="btn-get-started scrollto">

                            <span>Get Started</span>

                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
              </div>




            </div>
          </div>
        </section>
         <section className="bg-gra-sc">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>Smart AI Solutions for Every Business </h2>
                  <p>
                    Stay agile and adaptable with modern AI solutions meant to
                    give you the required competitive edge. Dynamics Square
                    empowers businesses of all sizes to harness Microsoft
                    Dynamics 365 solutions tailored for their growth. We are a
                    dedicated Microsoft Dynamics CRM partner and ERP expert
                    delivering value to:{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="row g-3 m--t-40 ">
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667 card-667-hover">
                  <div className="card-top">
                    <img
                      src="/img/startic-2.png"
                      alt=""
                      width={40}
                      height={40}
                     aria-hidden="true"  loading="lazy" decoding="async" />
                    <h3>Startups </h3>
                    <p>
                      Agile, cost-effective solutions to set a strong foundation
                      for growth.{" "}
                    </p>
                  </div>
                  <a href="/erp-for-startups/">Get Started</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667 card-667-hover">
                  <div className="card-top">
                    <img
                      src="/img/startic-01.png"
                      alt=""
                      width={40}
                      height={40}
                     aria-hidden="true"  loading="lazy" decoding="async" />
                    <h3>Small Businesses </h3>
                    <p>
                      Scalable tools to drive efficiency, productivity, and
                      customer engagement.{" "}
                    </p>
                  </div>
                  <a href="/dynamics-365-for-small-businesses/">Get Started</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667 card-667-hover">
                  <div className="card-top">
                    <img
                      src="/img/startic-03.png"
                      alt=""
                      width={40}
                      height={40}
                     aria-hidden="true"  loading="lazy" decoding="async" />
                    <h3>Medium Businesses </h3>
                    <p>
                      Advanced solutions to streamline operations and boost
                      profitability.{" "}
                    </p>
                  </div>
                  <a href="/dynamics-365-for-medium-businesses/">Get Started</a>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-667 card-667-hover">
                  <div className="card-top">
                    <img
                      src="/img/startic-04.png"
                      alt=""
                      width={40}
                      height={40}
                     aria-hidden="true"  loading="lazy" decoding="async" />
                    <h3>Large Enterprises </h3>
                    <p>
                      Enterprise-grade solutions designed to optimise processes
                      and accelerate success.{" "}
                    </p>
                  </div>
                  <a href="/dynamics-365-for-large-businesses/">Get Started</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gra-scss t-99">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>
                    Delivering Impact Where It Matters Because You Deserve
                    More{" "}
                  </h2>
                  <p>
                    At Dynamics Square, we’ve guided businesses to optimise
                    operations and boost performance. As a results-driven
                    Microsoft Dynamics 365 partner in the UK, we’ve helped
                    clients achieve 4x revenue growth, 87% customer retention,
                    and real transformation through strategic
                    implementations.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-3 m--t-40">
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                <div className="card-669 card-669-p card-669-liner">
                  <img
                    src="/img/testimonials/Terence-Turner.png"
                    alt="Terence Turner"
                    width={126}
                    height={126}  loading="lazy" decoding="async" />
                  <h3>Terence Turner</h3>
                  <span>General Manager</span>
                  <p>
                    Dynamics Square Team provided us a top-level service. Well
                    trained staff as well as excellent support when needed. Very
                    professional and trustworthy.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                <div className="card-669 card-669-p">
                  <img
                    src="/img/testimonials/Jonathan-W.png"
                    alt="Jonathan W"
                    width={126}
                    height={126}  loading="lazy" decoding="async" />
                  <h3>Jonathan W</h3>
                  <span>Technical Director</span>
                  <p>
                    We have worked with Dynamics Square since 2019. Our working
                    relationship has built during this period, and we have found
                    them to be very professional.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 d-flex">
                <div className="card-669 card-669-p card-669-liner">
                  <img
                    src="/img/avatar.png"
                    alt="Mark Shaxted"
                    width={126}
                    height={126}  loading="lazy" decoding="async" />
                  <h3>Mark Shaxted</h3>
                  <span>Operations Manager</span>
                  <p>
                    Dynamics Square has been a solid partner for 4 years,
                    skilfully upgrading our Microsoft Dynamics NAV to Dynamics
                    365 Business Central. They offer great value and
                    professionalism.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gra-scss">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>Featured On</h2>
                  <p>
                    We are proud to share that our work and insights have
                    appeared across respected platforms like Clutch,
                    Manufacturing Today, Forbes Technology Council, Tech Partner
                    Impact Awards, and ERPSoftwareBlog, reflecting the trust and
                    recognition we carry.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="client-home-new-list client-home-new-list-one">
                  <ul>
                     <li>
                      <Image src="/img/feat-03.png" alt="Featured On" width={250} height={150} />
                    </li>
                    <li>
                      <Image src="/img/feat-02.png" alt="Featured On" width={250} height={150} />
                    </li>
                    <li>
                      <Image src="/img/feat-04.png" alt="Featured On" width={250} height={150} />
                    </li>      
                    <li>
                      <Image src="/img/awa-01.png" alt="ERP Software Blog Top Member 2025 award" width={250} height={150} />
                    </li>
                    
                    <li>
                      <Image src="/img/awa-02.png" alt="MSDynamicsWorld 2025 Marketing Impact Award for Blogging Performance" width={250} height={150} />
                    </li>
                    <li>
                      <Image src="/img/feat-01.png" alt="Resources & Insights" width={250} height={150} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <div className="new-title-heading title-heading-center">
                  <h2>Resources & Insights</h2>
                  <p>
                    Discover knowledge-packed resources designed to help you
                    make informed decisions with the support of a reliable
                    Microsoft Dynamics ERP partner and innovation-led Microsoft
                    Solutions Partner.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="row m--t-40">
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-666 card-666-1">
                  <div className="crad-img">
                    <Image
                      src="/img/res-tag-05.png"
                      alt="Resources & Insights"
                      width={610}
                      height={610} />
                    <span>
                      <a href="/white-papers/microsoft-copilot/">Whitepaper</a>
                    </span>
                    <p>
                      Microsoft Copilot: The Catalyst for Transformation in Your
                      Business.
                    </p>
                  </div>
                  <div className="card-666-anc">
                    <a href="/white-papers/microsoft-copilot/">
                      Read more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-666 card-666-1">
                  <div className="crad-img">
                    <Image
                      src="/img/res-tag-02.jpg"
                      alt="Resources & Insights"
                      width={610}
                      height={610} />
                    <span>
                      <a href="/white-papers/microsoft-finance/">Whitepaper</a>
                    </span>
                    <p>The Future of Finance Management.</p>
                  </div>
                  <div className="card-666-anc">
                    <a href="/white-papers/microsoft-finance/">
                      Read more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-666 card-666-1">
                  <div className="crad-img">
                    <Image
                      src="/img/res-tag-03.jpg"
                      alt="Resources & Insights"
                      width={610}
                      height={610} />
                    <span>
                      <a href="/guides/">Guide</a>
                    </span>
                    <p>A Complete Guide to Dynamics CRM.</p>
                  </div>
                  <div className="card-666-anc">
                    <a href="/guides/">
                      Read more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 d-flex">
                <div className="card-666 card-666-1">
                  <div className="crad-img">
                    <Image
                      src="/img/res-tag-04.png"
                      alt="Resources & Insights"
                      width={610}
                      height={610} />
                    <span>
                      <a href="/tools/erp-implementation-cost-calculator/">
                        Calculator
                      </a>
                    </span>
                    <p>Dynamics 365 ERP Implementation Price Calculator.</p>
                  </div>
                  <div className="card-666-anc">
                    <a href="/tools/erp-implementation-cost-calculator/">
                      Read more <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      <FooterNew />
    </>
  );
};

export default HomeOneNew;
