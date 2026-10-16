
import Link from "next/link";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import PageSeo from "../components/PageSeo";


// Backup of the previous About Us design (replaced by pages/about-us.js). Never indexed:
// noindex here, X-Robots-Tag in next.config.js, Disallow in robots.txt, left out of the sitemap.
const AboutUs = () => {
  // const [isSSR, setIsSSR] = useState(true);
  // useEffect(() => {
  //   setIsSSR(false);
  // }, []);


  return (
    <>
      <PageSeo
        type="AboutPage"
        title="About Dynamics Square | Dynamics 365 Business Central Partner"
        description="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        image="https://www.dynamicssquare.co.uk/img/about-pic.png"
        canonical="https://www.dynamicssquare.co.uk/about-us/"
        robots="noindex, nofollow"
      />
      <section className="Solution-banner hero-1 hero about-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6  mobile-1 align-self-center">
              <h1>Transforming Businesses Through Cloud Technology </h1>
              <p>
                Dynamics Square is mustering the energy to create a better world and solve your critical business challenges through digital transformation led by innovative Microsoft cloud technology - making your business more agile and resilient.
              </p>
            </div>
            <div className="col-lg-6 align-self-center">
              <Image src="/img/about-pic.png" alt="We’re Microsoft Solutions Partner"
                width={775} height={528}
                priority />
            </div>
          </div>
        </div>
      </section>

      <section className="about-intr">
        <div className="container">
          <div className="col-lg-12">
            <div className="about-intr-wrpper">
              <div className="left-content">
                <h3>We’re Microsoft <br />Solutions Partner  </h3>
              </div>
              <div className="right-content">
                <p>As a Microsoft Solutions Partner, we are trusted by 500+ global clients for our reliable and smooth Dynamics 365 solutions. Our team of 150+ Microsoft consultants is proactively delivering cloud technology, high-tech innovations, effective training, and consistent support to ensure substantial growth for your organisation. </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-sec">
        <div className="container">
          <div className="row inner-side-pad">
            <div className="col-lg-4 col-md-4">
              <div className="counter-sec inerr">
                <h3>500+</h3>
                <p>Clients Worldwide</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="counter-sec inerr">
                <h3>150+</h3>
                <p>Certified Professionals</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="counter-sec inerr">
                <h3>14+</h3>
                <p>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Your Trusted Microsoft Partner</h2>
                <p>
                  Relationships are built over an ever-valuable commodity:
                  <b>Trust</b>. We're out with a simple motto in mind: Be the most
                  preferred technology solution provider in the Global IT
                  Infrastructure by building strong relationships among companies and
                  clients for rapid business growth.
                </p>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mission-content">
                <div className="mission-inner-con">
                  <Image src="/img/mission.png" width={158} height={158} alt="mission" />
                  <h3>Mission</h3>
                  <p>
                    To empower every business on the planet to achieve more and cope with the world's next wave through Microsoft Business Apps such as D365 Business Central, Finance, Sales, Supply Chain - hosted under Microsoft Azure Cloud; a highly secure and advanced cloud network.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mission-content">
                <div className="mission-inner-con">
                  <Image src="/img/vission.png" alt="vission" width={158} height={158} />
                  <h3>Vision</h3>
                  <p>
                    To simplify & automate business processes, improve customer experience, boost sales ROI by breaking data silos into meaningful insights by integrating Power BI, AI, and ML - Powered by Microsoft cloud technology.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mission-content">
                <div className="mission-inner-con">
                  <Image src="/img/approch-new.png" alt="approch" className="wsd" width={158} height={158} />
                  <h3>Approach</h3>
                  <p>
                    We strive to build long-term relationships by making cloud technology accessible. We nurture fundamental values - "customer centricity" and "value proposition". Our clients are at our "central focus" for all our actions - engaging, informing, and adding value to their Vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mission">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="mission-pic">
                <Image
                  src="/img/miss-lefiimage.png"
                  alt="Building Long Term Association"
                  width={683} height={689} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="mission-content-building">
                <h3>Building Long Term Association</h3>
                <p>Backed up by our in-house highly secured ways of delivering IT solutions, we offer Microsoft Cloud Technology for businesses at a reasonable cost; monthly or yearly per-user subscription. It helps us build long-term relationships with our customers.</p>
                <h4>See how our incredible people can help you</h4>
                <div>
                  <div className="text-center text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">

                      <span>Get In Touch</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="domain-expertise">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Meet Our Passionate Team</h2>
                <p>
                  Dynamics Square is led by a team of experienced professionals who embrace new business opportunities.
                </p>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-memb">
                <div className="tem-mem-pic">
                  <Image src="/img/gaurav-goyal.png" alt="Gaurav Goyal" width={238} height={238} />
                </div>
                <div className="tem-mem-info">
                  <h4>Gaurav Goyal</h4>
                  <span>Co-Founder</span>
                  <p>"Nurturing people and investing in their capabilities to build a resilient organisation."</p>
                </div>
                {/* <div className="social">
                    <Link href="https://www.linkedin.com/in/gauravg1">
                      <i className="bi bi-linkedin"></i>
                      </Link>
                    </div> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-memb">
                <div className="tem-mem-pic">
                  <Link href="https://www.linkedin.com/in/manish-g-74854a44">
                    <Image src="/img/manish-goyal.png" alt="Manish Goyal" width={238} height={238} />

                  </Link>
                </div>
                <div className="tem-mem-info">
                  <h4>Manish Goyal</h4>
                  <span>Co-Founder</span>
                  <p>"Helping companies with Digital Transformation using innovative Microsoft cloud technology"</p>
                </div>
                <div className="social">
                  <Link href="https://www.linkedin.com/in/manish-g-74854a44">
                    <i className="bi bi-linkedin" style={{ fontSize: '26px' }}></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-memb">
                <div className="tem-mem-pic">
                  <Image src="/img/dr-felton-lean.png" alt="Dr. Felton Lean" width={238} height={238} />
                </div>
                <div className="tem-mem-info">
                  <h4>Dr. Felton Lean</h4>
                  <span>The People Person</span>
                  <p>"Helping employees and organisations to achieve more through learning and development."</p>
                </div>
                {/* <div className="social">
                    <Link href="https://www.linkedin.com/in/dr-felton-lean-5941bb2b/">
                      <i className="bi bi-linkedin"></i>
                      </Link>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-drak">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header section-header-white-new">
                <h2>Milestones Achieved Since Inception </h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: true,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper about-timeline"
              >
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2011</h4>
                    <p>Dynamics Square came into existence</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2012</h4>
                    <p>Became Microsoft Certified Solutions Partner</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2015</h4>
                    <p>Started our Footprints in Australia</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2016</h4>
                    <p>Launched US/UK Operations</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2017</h4>
                    <p>Became Competent for D365 Customer Engagement</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2018</h4>
                    <p>Became Microsoft Solutions Partner</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2019</h4>
                    <p>Launched Singapore Operations</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="inner-slider-cont">
                    <h4>2020</h4>
                    <p>Emerged as Power Platform competent</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="inner-slider-cont">
                    <h4>2021</h4>
                    <p>
                      Gained competency with entire Microsoft Business
                      Applications
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>We are not merely an IT Solutions provider, but your partner in growth.  </h2>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Image src="/img/group-2192.svg" alt="Our Expertise and Capabilities"
                width={1387} height={534} />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>Our Expertise and Capabilities</h2>
                <p><b>With us, businesses grow fast, strong, and at full throttle.</b></p>
                <p>At Dynamics Square, we follow a unique approach to offer what’s best for the business while being cost-efficient at each stage of development. That’s why small to large businesses call us a “<b>people’s company</b>,” the company you can rely on! </p>
              </header>
            </div>
          </div>
          <Swiper
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]} className="mySwiper mySwiper-about">
            <SwiperSlide>
              <div className="row bg-grays">
                <div className="col-lg-6 align-self-center">
                  <div className="text-center">
                    <Image src="/img/new-side-1.png" alt="Outpace Your Competition with Microsoft's Cloud-based ERP Solutions" width={482} height={448} />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="slider-new-com">
                    <h3>Outpace Your Competition with Microsoft's Cloud-based ERP Solutions</h3>
                    <p>We streamline your business processes with modern ERP systems powered by cloud technology, AI, and machine learning, ensuring sustainability and continuous growth.</p>
                    <ul className="new-com-listss">
                      <li className="icon-box001">
                        <Link href="/products/dynamics-365-business-central/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-businesscentral.svg" alt="Business Central" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Business <br /> Central</span>

                        </Link>
                      </li>
                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-finance/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-finance.svg" alt="Finance" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Finance</span>

                        </Link>
                      </li>
                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-commerce/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-commerce.svg" alt="Commerce" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Commerce</span>

                        </Link>
                      </li>
                      <li className="icon-box001">
                        <Link href="/products/dynamics-365-human-resources/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-HRM.svg" alt="HR" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Human <br /> Resources</span>

                        </Link>
                      </li>
                      <li className="icon-box001">
                        <Link href="/products/dynamics-365-supply-chain-management/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Supply Chain" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Supply <br /> Chain</span>

                        </Link>
                      </li>
                      <li className="icon-box001">
                        <Link href="/products/dynamics-365-project-operations/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-project-management.svg" alt="Project Ops" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Project <br /> Operations</span>

                        </Link>
                      </li>


                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                <div className="col-lg-6 align-self-center">
                  <div className="text-center">
                    <Image src="/img/group-2152.png" alt="Uncover Deeper Insights to Deliver Extraordinary Customer Experience" width={482} height={447} />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="slider-new-com">
                    <h3>Uncover Deeper Insights to Deliver Extraordinary Customer Experience</h3>
                    <p>Digital transformation isn't successful without meeting customer expectations. We help you build strong relationships, nurture clients and boost sales through Microsoft CRM solutions.</p>
                    <ul className="new-com-listss">
                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-sales/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-sales.svg" alt="Sales" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Sales</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-marketing/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-marketing.svg" alt="Marketing" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Marketing</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-field-service/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-fieldservice.svg" alt="Field Service" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Field <br /> Service</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-customer-service/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/dynamics-365-customer-service.svg" alt="Customer Service" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Customer <br /> Service</span>

                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                <div className="col-lg-6 align-self-center">
                  <div className="text-center">
                    <Image src="/img/group-215.png" alt="Integrate Microsoft Business Apps with Power Platform for Impactful Solutions" width={482} height={447} />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="slider-new-com">
                    <h3>Integrate Microsoft Business Apps with Power Platform for Impactful Solutions </h3>
                    <p>Make informed decision by connecting apps with Azure cloud and develop end-to-end business solutions for effectively analysing data, building solutions, automating processes, and creating virtual agents.</p>
                    <ul className="new-com-listss">
                      <li className="icon-box001">
                        <Link href="/products/microsoft-power-bi/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/power-bi.svg" alt="Power BI" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Power <br /> BI</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-power-automate/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/power-automate.svg" alt="Power Automate" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Power <br /> Automate</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-power-apps/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/power-apps.svg" alt="Power Apps" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Power <br /> Apps</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-power-virtual-agents/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/virtual agent.svg" alt="Virtual Agents" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Virtual <br /> Agents</span>

                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="row bg-grays">
                <div className="col-lg-6 align-self-center">
                  <div className="text-center">
                    <Image src="/img/group-2154.png" alt="Leverage Emerging Technologies for Sustainability" width={482} height={447} />
                  </div>
                </div>
                <div className="col-lg-6 align-self-center">
                  <div className="slider-new-com">
                    <h3>Leverage Emerging Technologies for Sustainability</h3>
                    <p>Leverage the power of next-gen technologies like Azure, IoT, IIoT, AI, and ML. Save time and money by connecting your business to intelligent Microsoft Cloud Ecosystem.</p>
                    <ul className="new-com-listss">
                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-mixed-reality/">
                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/mixed-Reality-icons.svg" alt="Mixed Reality" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Mixed <br /> Reality</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-azure/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/azure.svg" alt="Azure" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">Azure</span>

                        </Link>
                      </li>

                      <li className="icon-box001">
                        <Link href="/products/microsoft-dynamics-365-ai/">

                          <div className="icon-box-inner">
                            <div className="inner-circle">
                              <Image src="/img/menu-icons/AI.svg" alt="AI" width={40} height={40} />
                            </div>
                          </div>

                          <span className="icon-label">AI</span>

                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <header className="section-header">
                <h2>Why Businesses Trust Dynamics Square?</h2>
                <p>Being a leading Microsoft Solutions Partner in the UK, Dynamics Square is embracing automation and tech-driven cloud solutions to help you achieve exponential growth while crossing global boundaries. Our core expertise is not just limited to the UK, as our presence is available in other parts of the world, including the USA, Australia, South Africa, Poland, Canada, the Netherlands, and Singapore. </p>
                <p style={{ color: 'red', fontSize: '20px' }}><b>Global Reach, Local Support </b></p>
              </header>
            </div>
          </div>
        </div>
      </section>

      <section className="marn-bus-bo">
        <div className="container">
          <header className="section-header">
            <h2 style={{ color: 'var(--color-blue)' }}>Business Partners We Have Worked With</h2>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <Image src="/img/clients.jpg" alt="clients" width={1394} height={425} />
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="price-btn d-flex justify-content-center">
                <Link href="/case-studies/" className="btn-get-red">

                  <span>Read Success Stories</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="container">
          <header className="section-header">
            <h2>Our Presence Worldwide</h2>
          </header>
          <div className="row">
            <div className="col-lg-12">
              <Image src="/img/word-map.png" alt="Our Presence Worldwide" width={1312} height={637} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;