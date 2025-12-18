import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs, Mousewheel, Autoplay } from "swiper/modules";
import FooterNew from '../components/FooterNew';
import Image from 'next/image';


const HomeOneNew = () => {
    return (
        <>

            <Head>
                <title>Microsoft Dynamics 365 Partner UK & Business Central Partner | Dynamics Square™</title>
                <meta
                    name="description"
                    content="Dynamics Square™ is a trusted Microsoft Dynamics 365 Partner in UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!"
                />
                <link rel="canonical" href="https://www.dynamicssquare.co.uk/" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dynamicssquare.co.uk/" />
                <meta property="og:title" content="Microsoft Dynamics 365 Partner UK & Business Central Partner | Dynamics Square™" />
                <meta property="og:description" content="Dynamics Square™ is a trusted Microsoft Dynamics 365 Partner in UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!" />
                <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/" />
                <meta property="twitter:title" content="Microsoft Dynamics 365 Partner UK & Business Central Partner | Dynamics Square™" />
                <meta property="twitter:description" content="Dynamics Square™ is a trusted Microsoft Dynamics 365 Partner in UK, offering expert Dynamics 365 solutions for Business Central, CRM, ERP & more. Contact us today!" />
                <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/home-page-og.png" />

            </Head>

            <main>
                <section className='home-baner-head-new'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12'>

                                <div className='floting-b'>
                                    <div className="orbit-parent">
                                        <div className="orbit-child child1"></div>
                                        <div className="orbit-child child2"></div>
                                        <div className="orbit-child child3"></div>
                                    </div>
                                </div>
                                <div className='home-baner-head'>
                                    <h1>UK's Trusted Microsoft Dynamics 365 Partner</h1>
                                    <span className='home-span'>When results count, <br />Dynamics Square delivers! </span>
                                    <p>As a certified Microsoft Dynamics 365 partner in the UK, we empower businesses with future-ready technologies that deliver impact. Dominate and thrive with AI-powered Microsoft solutions. With Dynamics Square, your success is powered by years of proven expertise—no matter the industry!</p>

                                    <a href="#exampleModal" data-bs-toggle="modal" className='btn btn-home'><img src='/img/buttion-ic-1.png' width={26} height={26} alt='icons' /> Book a Free Consultation <span><i className="bi bi-arrow-right-circle"></i></span></a>

                                </div>
                                <div className='specialtitle'>
                                    <span>Trusted by 500+ businesses · No obligation · Fast response</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container-fluid hh-150'>
                        <div className='row'>
                            <div className='col-lg-12'>
                                <div className='home-floting-image text-center'>
                                    <img src="/img/new-home-banner.png" alt="new-home-banner.png" />

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='client-home-new-list'>

                                    <ul>
                                        <li>
                                            <Image src="/img/cli-1.png" alt="cli-1.png" width={223} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-2.png" alt="cli-2.png" width={174} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-3.png" alt="cli-3.png" width={230} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-4.png" alt="cli-4.png" width={241} height={78} />
                                        </li>
                                        <li>
                                            <Image src="/img/cli-5.png" alt="cli-5.png" width={122} height={78} />
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="client-home-new-list-btom">
                        <img src="/img/new-home-banner-1.png" alt="new-home-banner.png" />
                    </div>
                </section>

                <section>
                    <div className='container'>
                        <div className='row p-80'>
                            <div className='col-lg-8 col-md-12 col-sm-12'>
                                <div className='new-title-heading new-tit-heading'>
                                    <h2>Dynamics Square: Your Microsoft Solutions Partner</h2>
                                    <p>As a Microsoft Dynamics 365 implementation partner, we have been consistently delivering impactful solutions, earning trust through innovation & commitment and empowering businesses to achieve excellence, irrespective of the industry. Recognised as a trusted Microsoft Gold Partner and expert Microsoft Dynamics ERP partner, our team drives successful digital transformations through industry-aligned expertise and strategic execution. </p>
                                    <div className='more-sboyt-lin'>
                                        <a href="/about-us/"
                                        >
                                            <span>Learn more about us &nbsp;<i className="bi bi-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 align-self-end'>
                                <div className='border-left-img'>
                                    <img src="/img/partner-logo-black-big.png"  alt="partner-logo-black-big" width={308} height={86} />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>500+</span>
                                    <p>Innovative implementations delivered with strategy, precision, and success.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>150+</span>
                                    <p>Skilled professionals with deep, industry-specific expertise driving innovation.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>14+</span>
                                    <p>Years of industry mastery, delivering excellence in every solution.</p>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 col-6 d-flex'>
                                <div className='accive-new-list'>
                                    <span>12+</span>
                                    <p>Industries transformed with cutting-edge technology and innovation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='new-side-home-00'>
                    <div className='container'>
                        <div className='row g-5'>
                            <div className='col-lg-5 align-self-center'>
                                <div className='new-side-home-001'>
                                    <div>
                                        <Image src="/img/new-side-home-001.png" width={1175} height={1410} alt="new-side-home-001" />
                                    </div>
                                </div>
                            </div>
                             <div className='col-lg-1 d-nonea'></div>
                            <div className='col-lg-6'>
                                <div className='new-side-home-002'>
                                    <div className='new-title-heading'>
                                        <h2>Finding it Hard to Keep Pace with Change?</h2>
                                        <p>Business moves fast, and many businesses still depend on old systems that slow everything down. Their teams keep spending hours fixing files and checking numbers instead of planning growth. When work feels harder than it should, it means your systems need a better way forward. Simple, connected tools can free your people to focus on what truly matters. </p>
                                        <p></p>
                                    </div>
                                </div>
                                <br />
                                <div className='row dd-scroll'>
                                    <div className='col-lg-12 d-flex'>
                                        <div className='new-side-home-00-card'>
                                            <h3>Slow Processes and Repeated Work</h3>
                                            <p>Your team spends many hours repeating the same tasks, switching across spreadsheets, and handling broken workflows. This makes daily work slow, creates mistakes, and limits the energy they could spend on smarter tasks.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 d-flex'>
                                        <div className='new-side-home-00-card'>
                                            <h3>Disconnected Teams and Services</h3>
                                            <p>Finance, sales, service, and operations often stay apart without sharing proper data. This breaks clarity and makes decisions weak because leaders cannot see the whole picture in front of them.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 d-flex'>
                                        <div className='new-side-home-00-card'>
                                            <h3>Weak Clarity of Data</h3>
                                            <p>When data is spread across many systems instead of coming together, leaders feel blind. Without clear, live numbers, it becomes harder to make strong decisions that carry full confidence.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 d-flex'>
                                        <div className='new-side-home-00-card'>
                                            <h3>Customer Disappointment and Delays</h3>
                                            <p>When service feels uneven and responses take too long, customers lose trust. Their faith in your brand falls when each experience feels different or late.</p>
                                        </div>
                                    </div>
                                    <div className='col-lg-12 d-flex'>
                                        <div className='new-side-home-00-card'>
                                            <h3>Heavy Costs and Wasted Effort</h3>
                                            <p>Old systems take high money to run, are hard to change, and stop your growth. They waste both money and energy while making it difficult to grow smoothly.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className='solution-new-cta solution-new-cta-0'>
                    <div className='asdss'>
                        <img src="/img/mask-group-aaa.png" alt="" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='solution-new-cta-001'>
                                    <h3>Digital Transformation Is a Must If You Aim for Lasting Success!</h3>
                                    <p>Microsoft Dynamics 365 brings every part of your business into one smart system that works together smoothly. Manage daily work better, make faster decisions, and prepare your business for steady growth. </p>
                                    <div>
                                        <a

                                            className="btn-get-started scrollto"
                                           href="#exampleModal" data-bs-toggle="modal"
                                        >
                                            <span>Book A Free Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section> */}

                <section className='bg-gra-sc op-01'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Our Services: Simple, Clear, and Focused</h2>
                                    <p>At Dynamics Square, we bring far more than software setup. We help businesses reach full strength by guiding them with clear advice, smooth execution, and steady support. As a trusted Microsoft Business Solutions Partner, we make work simple by turning problems into chances for growth with consulting, careful delivery, and care that continues long after. </p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40 '>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <a href="our-services/dynamics-365-consultant/">
                                            <img src="/img/serve-ic-01.png" alt="serve-ic-01" width={40} height={40} />
                                            <h3>Consulting</h3>
                                            <p>We study how your business runs today and show where Microsoft Dynamics 365 can add real value. Every feature is matched carefully with your goals so that the system supports you in the best way.</p>
                                            <span>Learn more</span></a>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <a href="/our-services/dynamics-365-implementation-services/">
                                            <img src="/img/serve-ic-02.png" alt="serve-ic-02" width={40} height={40} />
                                            <h3>Implementation</h3>
                                            <p>From Dynamics 365 Business Central to Dynamics 365 Finance and other systems, we manage every part of setup. Our aim is to deliver a clean start that keeps daily work running without stress or stops.</p>
                                            <span>Learn more</span></a>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <a href="/our-services/dynamics-365-upgrade-services/">
                                            <img src="/img/serve-ic-03.png" alt="serve-ic-03" width={40} height={40} />
                                            <h3>Upgrade</h3>
                                            <p>Our team works quietly in the background, so your systems stay smooth and strong. This helps your people focus fully on growing the business without worrying about slowdowns.</p>
                                            <span>Learn more</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667'>
                                    <div className='card-top'>
                                        <a href="/our-services/dynamics-365-support-services/">
                                            <img src="/img/serve-ic-04.png" alt="serve-ic-04" width={40} height={40} />
                                            <h3>Ongoing Support</h3>
                                            <p>Dynamics Square stays beside you after the system goes live. Our experts keep things working at their best so you can stay focused on building success while feeling secure about your technology.</p>
                                            <span>Learn more</span>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className='col-lg-12 text-center to-22'>
                                <a href="/our-services/" className='btn-red btn'>Explore More <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Your Industry? Our Expertise!</h2>
                                    <p>Dynamics Square brings decades of profound industry expertise that merges ongoing industry insights with Microsoft technology to help you capitalise on your biggest opportunities. As a trusted Microsoft Dynamics 365 implementation partner, we deliver solutions customised for your business growth. Whether you’re in retail, manufacturing, education, or healthcare, we’re the Microsoft Dynamics 365 implementation partner UK businesses trust to deliver measurable results. </p>
                                </div>
                            </div>
                        </div>
                        <div className='row g-3 m--t-40 sliding-row'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/dynamics-365-for-education/">
                                        <Image src="/img/ind-i-01.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Education</h3>
                                            <p>Modernising education with technology-driven solutions and tools.</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/microsoft-cloud-for-manufacturing/">
                                        <Image src="/img/ind-i-02.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Manufacturing</h3>
                                            <p>Implementing automation for improved manufacturing performance.</p>
                                        </div>

                                    </a>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex sliding-col'>
                                <div className='card-668'>
                                    <a href="/industries/food-and-beverages/">
                                        <Image src="/img/ind-i-03.jpg" alt="serve-ic-01" width={818} height={792} />
                                        <div className='flt'>
                                            <h3>Food & Beverages</h3>
                                            <p>Manage supply and inventory processes with real-time data.</p>
                                        </div>

                                    </a>
                                </div>
                            </div>

                            <div className='col-lg-12 text-center to-22'>
                                <a href="/industries/" className='btn-red btn'>Discover our industry expertise <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
               
                <section className='bg-gra-sc'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Smart AI Solutions for Every Business </h2>
                                    <p>Stay agile and adaptable with modern AI solutions meant to give you the required competitive edge. Dynamics Square empowers businesses of all sizes to harness Microsoft Dynamics 365 solutions tailored for their growth. We are a dedicated Microsoft Dynamics CRM partner and ERP expert delivering value to:  </p>
                                </div>
                            </div>
                        </div>
                        <div className='row g-3 m--t-40 '>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-2.png" alt="startic-01" width={40} height={40} />
                                        <h3>Startups </h3>
                                        <p>Agile, cost-effective solutions to set a strong foundation for growth. </p>
                                    </div>
                                    <a href="/erp-for-startups/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-01.png" alt="startic-02" width={40} height={40} />
                                        <h3>Small Businesses </h3>
                                        <p>Scalable tools to drive efficiency, productivity, and customer engagement. </p>
                                    </div>
                                    <a href="/dynamics-365-for-small-businesses/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-03.png" alt="sstartic-03" width={40} height={40} />
                                        <h3>Medium Businesses </h3>
                                        <p>Advanced solutions to streamline operations and boost profitability. </p>
                                    </div>
                                    <a href="/dynamics-365-for-medium-businesses/">Get Started</a>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-667 card-667-hover'>
                                    <div className='card-top'>
                                        <img src="/img/startic-04.png" alt="startic-04" width={40} height={40} />
                                        <h3>Large Enterprises </h3>
                                        <p>Enterprise-grade solutions designed to optimise processes and accelerate success. </p>
                                    </div>
                                    <a href="/dynamics-365-for-large-businesses/">Get Started</a>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>
                 <section>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>See how our customers drive impact</h2>
                                </div>
                            </div>
                        </div>
                        <div className='row case-div-o'>
                            
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                    <div className='card-666'>
                                        <div className='crad-img'>
                                            <Image src="/img/case-imgs-2.jpg" alt="case-imgs-1" width={610} height={592} />
                                            <p>London’s top college boosts departmental synergy by 80% with a system upgrade.</p>
                                        </div>
                                        <div className='card-666-anc'>
                                            <a href="/case-studies/upgrade-from-nav09-to-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                    <div className='card-666'>
                                        <div className='crad-img'>
                                            <Image src="/img/case-imgs-3.jpg" alt="case-imgs-2" width={610} height={592} />
                                            <p>A car restoration company boosted ROI by 30% through custom solutions.</p>
                                        </div>
                                        <div className='card-666-anc'>
                                            <a href="/case-studies/access-dimension-erp-to-business-central-migration/">Read more <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                    <div className='card-666'>
                                        <div className='crad-img'>
                                            <Image src="/img/case-imgs-1.jpg" alt="case-imgs-1" width={610} height={592} />
                                            <p>A renowned UK defence apparel company maximised efficiency by 50%.</p>
                                        </div>
                                        <div className='card-666-anc'>
                                            <a href="/case-studies/nav2009R2-to-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                    <div className='card-666'>
                                        <div className='crad-img'>
                                            <Image src="/img/case-imgs-4.jpg" alt="case-imgs-4" width={610} height={592} />
                                            <p>Strategic advancements led an orthopedic implant manufacturer to 60% more visibility.</p>
                                        </div>
                                        <div className='card-666-anc'>
                                            <a href="/case-studies/upgrading-to-dynamics-365-business-central/">Read more <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-12 text-center to-22'>
                                <a href="/case-studies/" className='btn-red btn'>Explore more use cases <i className="bi bi-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className='bg-gra-scs'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Our method? As straightforward as your goals!</h2>
                                    <p>Simplify transformation with a Microsoft Dynamics 365 implementation partner dedicated to your growth.</p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-4 m--t-40'>
                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669'>
                                    <Image src="/img/card-669-01.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Discover What Matters</h3>
                                    <p>We listen to understand your challenges and goals deeply.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <Image src="/img/card-669-02.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Craft the Solution</h3>
                                    <p>With Microsoft tools, we design solutions that fit your vision.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 card-669-liner'>
                                    <Image src="/img/card-669-03.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Flawless Execution</h3>
                                    <p>From integration to training, we handle every step for you.</p>
                                </div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-6 d-flex'>
                                <div className='card-669 '>
                                    <img src="/img/card-669-04.png" alt="card-669-01" width={340} height={235} />
                                    <h3>Growth-Ready Support</h3>
                                    <p>We adapt and optimise your systems as your business evolves.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className='bg-gra-scss t-99'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Delivering Impact Where It Matters Because You Deserve More </h2>
                                    <p>At Dynamics Square, we’ve guided businesses to optimise operations and boost performance. As a results-driven Microsoft Dynamics 365 partner in the UK, we’ve helped clients achieve 4x revenue growth, 87% customer retention, and real transformation through strategic implementations. </p>
                                </div>
                            </div>
                        </div>

                        <div className='row g-3 m--t-40'>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/testimonials/Terence-Turner.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Terence Turner</h3>
                                    <span>General Manager</span>
                                    <p>Dynamics Square Team provided us a top-level service. Well trained staff as well as excellent support when needed. Very professional and trustworthy.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p'>
                                    <img src="/img/testimonials/Jonathan-W.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Jonathan W</h3>
                                    <span>Technical Director</span>
                                    <p>We have worked with Dynamics Square since 2019. Our working relationship has built during this period, and we have found them to be very professional.</p>
                                </div>
                            </div>
                            <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                                <div className='card-669 card-669-p card-669-liner'>
                                    <img src="/img/avatar.png" alt="card-669-01" width={126} height={126} />
                                    <h3>Mark Shaxted</h3>
                                    <span>Operations Manager</span>
                                    <p>Dynamics Square has been a solid partner for 4 years, skillfully upgrading our Microsoft Dynamics NAV to Dynamics 365 Business Central. They offer great value and professionalism.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className='bg-gra-scss'>
                    <div className='container'>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Featured On</h2>
                                    <p>We are proud to share that our work and insights have appeared across respected platforms like Clutch, Manufacturing Today, Forbes Technology Council, Tech Partner Impact Awards, and ERPSoftwareBlog, reflecting the trust and recognition we carry.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-12'>
                                 <div className='client-home-new-list client-home-new-list-one'>

                                    <ul>
                                         <li>
                                            <Image src="/img/feat-02.png" alt="cli-2.png" width={250} height={150} />
                                        </li>
                                          <li>
                                            <Image src="/img/feat-04.png" alt="cli-4.png" width={250} height={150} />
                                        </li>
                            ``             <li>
                                            <Image src="/img/feat-03.png" alt="cli-3.png" width={250} height={150} />
                                        </li>              
                                        <li>
                                            <Image src="/img/feat-05.png" alt="cli-5.png" width={250} height={150} />
                                        </li>
                                        <li>
                                            <Image src="/img/ms-dyanmics-logo.png" alt="ms-dyanmics-logo" width={250} height={150} />
                                        </li>
                                        <li>
                                            <Image src="/img/feat-01.png" alt="cli-1.png" width={250} height={150} />
                                        </li>
                                        
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-md-9'>
                                <div className='new-title-heading title-heading-center'>
                                    <h2>Resources & Insights</h2>
                                    <p>Discover knowledge-packed resources designed to help you make informed decisions with the support of a reliable Microsoft Dynamics ERP partner and innovation-led Microsoft Solutions Partner. </p>
                                </div>
                            </div>
                        </div>

                        <div className='row m--t-40'>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-05.png" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/white-papers/micorosoft-copilot/">Whitepaper</a></span>
                                        <p>Microsoft Copilot: The Catalyst for Transformation in Your Business.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/white-papers/micorosoft-copilot/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-02.jpg" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/white-papers/micorosoft-finance/">Whitepaper</a></span>
                                        <p>The Future of Finance Management.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/white-papers/micorosoft-finance/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-03.jpg" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/guides/">Guide</a></span>
                                        <p>A Complete Guide to Dynamics CRM.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/guides/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-6 d-flex'>
                                <div className='card-666 card-666-1'>
                                    <div className='crad-img'>
                                        <Image src="/img/res-tag-04.png" alt="res-tag-01" width={610} height={610} />
                                        <span><a href="/erp-implementation-cost-calculator/">Calculator</a></span>
                                        <p>Dynamics 365 ERP Implementation Price Calculator.</p>
                                    </div>
                                    <div className='card-666-anc'>
                                        <a href="/erp-implementation-cost-calculator/">Read more <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </main>


            <FooterNew />

        </>
    );
}

export default HomeOneNew;
