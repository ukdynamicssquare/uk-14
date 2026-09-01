"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const caseStudies = [
  {
    caseNumber: "Case study 1",
    title:
      "Upgrade from Dynamics NAV to Business Central",
    description:
      "Think beyond Dynamics NAV with a structured upgrade to Business Central. We help you migrate data, modernise customisations, and transition to Microsoft's cloud ERP, so you can benefit from continuous updates, AI capabilities, and seamless integration with the wider Microsoft ecosystem.",
    link: "/dynamics-nav-to-business-central/",
    linktext:'Learn About NAV to Business Central Upgrade',
    benefits: [
      "Dynamics NAV users ",
      "Businesses running older NAV versions ",
      "Organisations planning cloud migration "
    ],
  },
  {
    title:
      "Upgrade from Dynamics GP to Business Central",
    description:
      "Upgrade from your ageing Dynamics GP system to a modern agentic ERP built for today's business needs. From migration planning and data transfer to configuration and user adoption, we ensure a smooth upgrade to Business Central with minimal disruption.",
    link: "/gp-to-business-central-migration/",
    linktext:'Learn About GP to Business Central Migration',
    benefits: [
      "Microsoft Dynamics GP users",
      "Organisations replacing on-premises ERP",
      "Businesses seeking a unified cloud ERP"
    ],
  },

  {
    caseNumber: "Case study 2",
    title:
      "Migrate from Sage to Business Central",
    description:
      "If you've outgrown Sage, Business Central offers a connected platform for finance, sales, purchasing, inventory, and reporting. We help you migrate your data securely and move to a scalable ERP that supports long-term business growth.",
    link: "/blog/sage-to-business-central-migration/",
     linktext:'Learn About Sage to Business Central Migration',
    benefits: [
      "Sage 50 users ",
      "Sage 200 users ",
      "Growing businesses moving to Microsoft ERP ",
    ],
  },

  {
    caseNumber: "Case study 4",
    title:
      "Migrate from QuickBooks to Business Central",
    description:
      "As your business grows, QuickBooks may no longer provide the visibility and control you need. We help you transition to Business Central with secure data migration, streamlined processes, and a unified platform for managing your operations.",
    link: "/blog/quickbooks-to-microsoft-business-central-migration/",
     linktext:'Learn About QuickBooks to Business Central Migration',
    benefits: [
      "QuickBooks Desktop users ",
      "QuickBooks Online users ",
      "Businesses requiring advanced financial management ",
    ],
  },
  {
    caseNumber: "Case study 3",
    title:
      "Migrate from Xero to Business Central",
    description:
      "Transition from standalone accounting to Business Central and manage your entire business from one integrated system. Our migration experts ensure your financial data is transferred accurately, helping you gain better control over finance and operations.",
    link: "/products/dynamics-365-business-central/",
     linktext:'Learn More',
    benefits: [
      "Xero users",
      "Businesses with expanding operational needs",
      "Organisations seeking an integrated ERP solution",
    ],
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies-section">
      <div className="container">

        {/* Heading */}
        <div className="case-studies-heading">
          <h2>Upgrade & Migration to Business Central</h2>

          <p>Don’t manage your operations on an outdated Microsoft ERP or legacy accounting software. If you do, you lose it to your competitors. You compromise on up-to-date features like strong adherence to compliances, out-of-the-box AI functionalities, flexibility of cloud architecture, automation, and overall operational efficiency. </p><br />
          <p>Move to Dynamics 365 Business Central today to run your operations on a modern, cloud-based platform and make your business future-proof. Our specialists help you upgrade/migrate with minimal disruption while preserving your critical business data.</p>
        </div>

        {/* Slider Wrapper */}
        <div className="case-slider-wrapper">

          {/* Previous */}
          <button
            className="case-slider-prev"
            aria-label="Previous case study"
          >
            <i className="bi bi-arrow-left"></i>
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".case-slider-prev",
              nextEl: ".case-slider-next",
            }}
            pagination={{
              el: ".case-slider-pagination",
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            speed={600}
            className="case-studies-swiper"
          >
            {caseStudies.map((study, index) => (
              <SwiperSlide key={index}>
                <div className="case-study-card">

                  {/* LEFT */}
                  <div className="case-study-content">

                    {/* <div className="case-study-number">
                      {study.caseNumber}
                    </div> */}

                    <h3>{study.title}</h3>

                    <p>{study.description}</p>

                    <a href={study.link} className="case-study-link">
                      {study.linktext}
                      <span><i className="bi bi-arrow-right"></i></span>
                    </a>
                  </div>

                  {/* RIGHT */}
                  <div className="case-study-benefits">

                    {study.benefits.map((benefit, benefitIndex) => (
                      <div
                        className="case-benefit"
                        key={benefitIndex}
                      >
                        <span className="case-benefit-icon">
                          <i className="bi bi-arrow-right-circle"></i>
                        </span>

                        <span className="case-benefit-text">
                          {benefit}
                        </span>
                      </div>
                    ))}

                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Next */}
          <button
            className="case-slider-next"
            aria-label="Next case study"
          >
            <i className="bi bi-arrow-right"></i>
          </button>

        </div>

        {/* Pagination */}
        <div className="case-slider-pagination"></div>

      </div>
      <style jsx global>
            {`
.case-studies-section {
  position: relative;
  width: 100%;
  padding: 72px 0 68px;
  overflow: hidden;

  background-image: radial-gradient(circle at 50% -36%, #7865af, #393053 62%);
}

.case-studies-heading {
  margin: 0 auto 37px;
}

.case-studies-heading h2 {
  margin: 0 0 10px;

  color: #ffffff;

  font-size: 32px;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.3px;
}

.case-studies-heading p {
  max-width: 820px;
  margin: 0;

  color: #ffffff;

  font-size: 14px;
  line-height: 1.35;
  font-weight: 400;
}

.case-slider-wrapper {
  position: relative;
  margin: 0 auto;
}

.case-studies-swiper {
  width: 100%;
  overflow: hidden;
}

.case-studies-swiper .swiper-slide {
  height: auto;
}


.case-study-card {
  width: 100%;
  min-height: 338px;

  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 46px;

  padding: 40px;

  border-radius: 9px;

  background:#F1F0F4;

  box-sizing: border-box;
}

.case-study-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.case-study-number {
  margin-bottom: 10px;

  color: #56487e;

  font-size: 15px;
  line-height: 1.2;
  font-weight: 700;
}

.case-study-content h3 {
  margin: 0 0 24px;

  color: #3f3f3f;

  font-size: 19px;
  line-height: 1.4;
  font-weight: 700;
  letter-spacing: -0.2px;
}

.case-study-content p {
  margin: 0 0 25px;

  color: #4d4d4d;
  font-weight: 400;
}

.case-study-link {
  display: inline-flex;
  align-items: center;
  gap: 3px;

  margin-top: auto;

  color: #C00F0C;

  font-size: 16px;
  font-weight: 400;
  transition: all 0.2s ease;
}

.case-study-link:hover {
  color: #3855a0;
  text-decoration-thickness: 1.5px;
  text-decoration: underline;
}

.case-study-link span {
  font-size: 18px;
  line-height: 1;
}

.case-study-benefits {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  gap: 12px;

  padding-top: 0;
}

.case-benefit {
  min-height: 74px;

  display: flex;
  align-items: center;

  padding: 10px 13px;

  border-radius: 6px;

  background: #ffffff;

  box-sizing: border-box;
}

.case-benefit-icon {
  flex: 0 0 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;

  color: #7865af;

}

.case-benefit-text {
  color: #515151;
  font-weight: 400;
  font-size:16px
}

.case-slider-prev,
.case-slider-next {
  position: absolute;
  top: 50%;
  z-index: 10;

  width: 30px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;

  background: transparent;

  color: #ffffff;

  font-size: 15px;

  transform: translateY(-50%);

  cursor: pointer;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;
}

.case-slider-prev {
  left: -65px;
}

.case-slider-next {
  right: -65px;
}

.case-slider-prev:hover,
.case-slider-next:hover {
  background: #ffffff;
  color: #40559a;
  border-color: #ffffff;
}

.case-slider-prev i,
.case-slider-next i {
  display: block;
  line-height: 1;
}

.case-slider-pagination {
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 11px;

  margin-top: 30px;
}

.case-slider-pagination .swiper-pagination-bullet {
  width: 15px;
  height: 15px;

  margin: 0 !important;

  opacity: 1;

  background: #ffffff;

  border-radius: 50%;
}

.case-slider-pagination .swiper-pagination-bullet-active {
  background: #b5101f;
}


@media (max-width: 1199px) {

  .case-slider-wrapper {
    max-width: calc(100% - 90px);
  }

  .case-slider-prev {
    left: -45px;
  }

  .case-slider-next {
    right: -45px;
  }

}

@media (max-width: 991px) {

  .case-studies-section {
    padding: 55px 0;
  }

  .case-studies-heading {
    margin-bottom: 30px;
  }

  .case-study-card {
    grid-template-columns: 1fr;

    gap: 25px;

    min-height: auto;

    padding: 28px;
  }

  .case-study-content h3 {
    margin-bottom: 16px;
  }

  .case-study-content p {
    margin-bottom: 20px;
  }

  .case-study-link {
    margin-top: 0;
  }

  .case-study-benefits {
    gap: 10px;
  }

  .case-benefit {
    min-height: 52px;
  }

}

@media (max-width: 767px) {

  .case-studies-section {
    padding: 45px 0 48px;
  }

  .case-studies-heading {
    margin-bottom: 25px;
  }

  .case-studies-heading h2 {
    font-size: 22px;
  }

  .case-studies-heading p {
    font-size: 13px;
    line-height: 1.45;
  }

  .case-slider-wrapper {
    max-width: 100%;
  }

  .case-study-card {
    padding: 24px 20px;

    border-radius: 8px;
  }

  .case-study-number {
    font-size: 16px;
  }

  .case-study-content h3 {
    font-size: 18px;
    line-height: 1.4;
  }

  .case-study-content p {
    line-height: 1.4;
  }

  .case-benefit {
    align-items: flex-start;

    padding: 12px;
  }

  .case-benefit-text {
    font-size: 16px;
    line-height: 1.35;
  }

  .case-slider-prev,
  .case-slider-next {
    width: 28px;
    height: 28px;

    top: auto;
    bottom: -50px;

    transform: none;
  }

  .case-slider-prev {
    left: 5px;
  }

  .case-slider-next {
    right: 5px;
  }

  .case-slider-pagination {
    margin-top: 30px;
  }

}


@media (max-width: 480px) {

  .case-study-card {
    padding: 20px 16px;
  }

  .case-studies-heading h2 {
    font-size: 20px;
  }

  .case-study-content h3 {
    font-size: 17px;
  }

}
            `}
      </style>
    </section>
  );
}