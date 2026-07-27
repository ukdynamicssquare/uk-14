import React, { useRef, useState, useEffect } from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import FormNewUIndsustry from "../components/FormNewUIndsustry";
const ERPTest = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Head>
        
    <meta name="robots" content="noindex, nofollow" />

        <title>Cloud ERP for Startups UK | Dynamics Square</title>
        <meta
          name="description"
          content="Find the best ERP solutions for startups! Streamline operations, enhance productivity, and drive growth with tailored ERP systems for small businesses in UK."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/erp-for-startups/"
        />

      </Head>
      <section className="top-banner-new top-banner-new-01">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>Free ERP Readiness Assessment</h1>
              <h2>Is your business really ready for Microsoft Dynamics 365?</h2>
              <p>We'll assess your current systems, processes and data — and show you exactly what an ERP upgrade would take, in a free 30-minute consultation with a Dynamics 365 expert.</p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i>  No obligation, no sales pressure</li>
                <li><i className="bi bi-check-circle-fill"></i>  Delivered by certified Dynamics 365 consultants</li>
                <li><i className="bi bi-check-circle-fill"></i>  Personalised report within 3 working days</li>
              </ul>

            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 align-self-center">
              <div>
                <FormNewUIndsustry />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header-two">
                {/* <span>Our Par</span> */}
                <h2>Trusted by leaders across the UK</h2>
                {/* <p>Overcoming Startup Challenges with Microsoft ERP Solutions</p> */}
              </header>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='image-list-new'>
                <div className="image-list-new-im">
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-01.png" alt="rartin-log-01" width={140} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-02.png" alt="rartin-log-01" width={204} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-03.png" alt="rartin-log-01" width={130} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-04.png" alt="rartin-log-01" width={129} height={54} />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-05.png" alt="rartin-log-01" width={155} height={54} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header-two">
                <span>Signs to watch for</span>
                <h2>Is your current setup holding you back?</h2>
                <p>Most businesses don't realise how much time and money outdated systems are costing them until they see it laid out.</p>
              </header>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-3 d-flex'>
              <div className='sign-card'>
                <div className='sign-icon'>
                  <img src="/img/sentiment_dissatisfied.svg" alt="Disconnected systems" />
                </div>
                <h3>Disconnected systems</h3>
                <p>Finance, sales and operations run on separate tools that don't talk to each other.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='sign-card'>
                <div className='sign-icon'>
                  <img src="/img/hourglass_check.svg" alt="Manual, slow reporting" />
                </div>
                <h3>Manual, slow reporting</h3>
                <p>Month-end still means spreadsheets, exports and manual reconciliation.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='sign-card'>
                <div className='sign-icon'>
                  <img src="/img/change_circle.svg" alt="Outgrowing your system" />
                </div>
                <h3>Outgrowing your system</h3>
                <p>Your current ERP or accounting software can't keep up with growth or new markets.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='sign-card'>
                <div className='sign-icon'>
                  <img src="/img/online_prediction.svg" alt="No real-time visibility" />
                </div>
                <h3>No real-time visibility</h3>
                <p>Leadership can't see accurate, up-to-date numbers to make fast decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='process'>
        <div className='container'>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <header className="section-header-two">
                <span>What's included</span>
                <h2>Your assessment, step by step</h2>
                <p>A structured review of where you are today and what a Dynamics 365 upgrade would look like.</p>
              </header>
            </div>
          </div>
          <div className='row g-3'>
            <div className='col-lg-3 d-flex'>
              <div className='proc-step'>
                <div className='proc-num'>
                  01
                </div>
                <h3>Discovery call</h3>
                <p>A 30-minute conversation about your current systems, pain points and goals.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='proc-step'>
                <div className='proc-num'>
                  02
                </div>
                <h3>Systems & process review</h3>
                <p>We map your existing tools, workflows and data to spot gaps and inefficiencies.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='proc-step'>
                <div className='proc-num'>
                  03
                </div>
                <h3>Readiness report</h3>
                <p>A written summary of findings, risks, and where Dynamics 365 would add the most value.</p>
              </div>
            </div>
            <div className='col-lg-3 d-flex'>
              <div className='proc-step'>
                <div className='proc-num'>
                  04
                </div>
                <h3>Roadmap & next steps</h3>
                <p>A clear recommendation on scope, timeline and indicative cost — no obligation to proceed.</p>
              </div>
            </div>
          </div>
          <div className='pt-330'>
            <div className='row'>
              <div className='col-lg-6 align-self-center'>
                <header className="section-header-two section-header-two-left">
                  <span>No pressure, ever</span>
                  <h2>Not ready to move forward after your roadmap? That's completely fine.</h2>
                  <p>The assessment is yours to keep either way. Plenty of businesses use it simply to understand where they stand, plan for next year, or make the case internally — with no commitment to work with us.</p>
                </header>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-5'>
                <div className='oblig-card'>
                  <div className='oblig-icon'>
                    <img src="/img/cancel.svg" alt="Walk away, no cost" />
                  </div>
                  <div>
                    <h3>Walk away, no cost</h3>
                    <p>The assessment and report are free regardless of what you decide afterwards.</p>
                  </div>
                </div>
                <div className='oblig-card'>
                  <div className='oblig-icon'>
                    <img src="/img/hourglass_check.svg" alt="Revisit when you're ready" />
                  </div>
                  <div>
                    <h3>Revisit when you're ready</h3>
                    <p>Keep the roadmap on file and come back to us whenever the timing is right — days, months, or longer.</p>
                  </div>
                </div>
                <div className='oblig-card'>
                  <div className='oblig-icon'>
                    <img src="/img/groups.svg" alt="No follow-up sales calls" />
                  </div>
                  <div>
                    <h3>No follow-up sales calls</h3>
                    <p>We won't chase you. If you want to talk further, you reach out to us.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='processa'>
        <div className='container'>

          <div className='pt-3301'>
            <div className='row'>
              <div className='col-lg-6 align-self-center'>
                <header className="section-header-two section-header-two-left">
                  <span>Why Dynamics Square</span>
                  <h2>A Microsoft partner UK businesses trust with their ERP transformation</h2>
                  <p>We've guided companies of every size through Dynamics 365 implementations — from first assessment to go-live and beyond.</p>
                </header>
              </div>
              <div className='col-lg-1'></div>
              <div className='col-lg-5'>
                <div className='stat-grid'>
                  <div className='stat-card'>
                    <div className='stat-num'>
                      350+
                    </div>
                    <div className='stat-desc'>
                      Certified Microsoft<br /> consultants
                    </div>
                  </div>
                  <div className='stat-card'>
                    <div className='stat-num'>
                      500+
                    </div>
                    <div className='stat-desc'>
                      Successful ERP<br /> implementations
                    </div>
                  </div>
                  <div className='stat-card'>
                    <div className='stat-num'>
                      15+
                    </div>
                    <div className='stat-desc'>
                      Years delivering<br /> Dynamics 365
                    </div>
                  </div>
                  <div className='stat-card'>
                    <div className='stat-num'>
                      98%
                    </div>
                    <div className='stat-desc'>
                      Client <br />satisfaction rate
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='solution-new-cta-001 solution-new-cta-002'>
                <h3>Find out where your ERP readiness stands — for free</h3>
                <p>Takes less than a minute to request. No commitment, no pressure.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Request my free assessment &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
                <div className='text-block'>
                  <span className="ms-partner-badge"><span className="ms-logo"><span></span><span ></span><span ></span><span></span></span><span className="ms-label">Microsoft Certified Partner</span></span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ERPTest;
