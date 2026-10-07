
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import caseStudies from "../../public/data/case-studies.json";

const tabs = [
  "All",
  "Upgrade",
  "Implementation",
  "Support",
];

const CategoryList = () => {
  const [activeTab, setActiveTab] = useState("All");

  // ==========================================================
  // READ CATEGORY FROM URL HASH
  // ==========================================================

useEffect(() => {
  const scrollToFilters = () => {
    const element = document.getElementById(
      "case-study-filters"
    );

    if (!element) return;

    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top;

    const offsetPosition =
      elementPosition +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const handleHashChange = () => {
    const hash = decodeURIComponent(
      window.location.hash.substring(1)
    );

    if (!tabs.includes(hash)) {
      setActiveTab("All");
      return;
    }

    setActiveTab(hash);

    // Wait for filtered content to render
    setTimeout(() => {
      scrollToFilters();
    }, 150);
  };

  // Direct URL:
  // /case-studies/#Support
  if (window.location.hash) {
    handleHashChange();
  }

  window.addEventListener(
    "hashchange",
    handleHashChange
  );

  return () => {
    window.removeEventListener(
      "hashchange",
      handleHashChange
    );
  };
}, []);

  // ==========================================================
  // FILTER CASE STUDIES
  // ==========================================================

  const filteredData =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter(
          (item) => item.category === activeTab
        );

  // ==========================================================
  // CATEGORY CHANGE
  // ==========================================================

const handleTabChange = (tab) => {
  setActiveTab(tab);

  // Update URL
  if (tab === "All") {
    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  } else {
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}#${tab}`
    );
  }

  // Scroll to category section
  setTimeout(() => {
    const element = document.getElementById(
      "case-study-filters"
    );

    if (!element) return;

    const headerOffset = 100;

    const elementPosition =
      element.getBoundingClientRect().top;

    const offsetPosition =
      elementPosition +
      window.pageYOffset -
      headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, 100);
};

  // ==========================================================
  // RESET FILTER
  // ==========================================================

  const resetFilter = () => {
    setActiveTab("All");

    window.history.replaceState(
      null,
      "",
      window.location.pathname
    );
  };

  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Case Studies | Dynamics Square
        </title>

        <meta
          name="description"
          content="Discover how Dynamics Square helps businesses transform their operations with Microsoft Dynamics 365 solutions, implementation, upgrades and support."
        />

        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/"
        />
      </Head>

      <main className="case-studies-page">

        {/* ====================================================
            HERO
        ===================================================== */}

        <section className="case-hero">

          <div className="case-hero-shape"></div>

          <div className="container">

            <div className="row align-items-center">

              {/* LEFT */}
              <div className="col-lg-7">

                <div className="case-hero-content">

                  <span className="case-eyebrow">
                    DYNAMICS SQUARE
                  </span>

                  <h1>
                    Real businesses.
                    <br />
                    <span>Real transformation.</span>
                  </h1>

                  <p>
                    Explore how businesses across industries use
                    Microsoft Dynamics 365 to improve operations,
                    increase efficiency and create better customer
                    experiences.
                  </p>

                  <div className="case-hero-stats">

                    <div className="hero-stat">
                      <strong>{caseStudies.length}+</strong>
                      <span>Case Studies</span>
                    </div>

                    <div className="hero-stat-divider"></div>

                    <div className="hero-stat">
                      <strong>365</strong>
                      <span>Microsoft Solutions</span>
                    </div>

                    <div className="hero-stat-divider"></div>

                    <div className="hero-stat">
                      <strong>UK</strong>
                      <span>Business Expertise</span>
                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT */}
              <div className="col-lg-5">

                <div className="case-hero-visual">

                  <div className="hero-circle"></div>

                  <div className="hero-main-card">

                    <div className="hero-card-top">
                      <span className="hero-card-dot"></span>
                      CUSTOMER SUCCESS
                    </div>

                    <div className="hero-card-number">
                      365
                    </div>

                    <div className="hero-card-text">
                      Microsoft Dynamics
                    </div>

                    <div className="hero-card-line"></div>

                    <div className="hero-card-bottom">
                      <span>Business transformation</span>
                      <span>→</span>
                    </div>

                  </div>

                  <div className="hero-floating-card floating-one">
                    <span>ERP</span>
                    <strong>Business Central</strong>
                  </div>

                  <div className="hero-floating-card floating-two">
                    <span>CRM</span>
                    <strong>Dynamics 365</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* ====================================================
            INTRO
        ===================================================== */}

        <section className="case-intro">

          <div className="container">

            <div className="case-intro-inner">

              <div>
                <span className="section-label">
                  CUSTOMER SUCCESS
                </span>

                <h2>
                  See what transformation
                  <br />
                  looks like in practice.
                </h2>
              </div>

              <p>
                From Dynamics 365 implementations and upgrades to
                ongoing support, discover how we help organisations
                solve real business challenges.
              </p>

            </div>

          </div>

        </section>


        {/* ====================================================
            CATEGORY NAVIGATION
        ===================================================== */}

        <section
  className="case-navigation"
  id="case-study-filters"
>

          <div className="container">

            <div className="category-navigation">

              <div className="category-title">
                Explore by
              </div>

              <div className="category-list">

                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    className={
                      activeTab === tab
                        ? "category-button active"
                        : "category-button"
                    }
                    onClick={() =>
                      handleTabChange(tab)
                    }
                  >
                    {tab}
                  </button>
                ))}

              </div>

            </div>

          </div>

        </section>


        {/* ====================================================
            CASE STUDIES
        ===================================================== */}

        <section className="case-content">

          <div className="container">

            {/* HEADER */}

            <div className="case-section-header">

              <div>

                <span className="section-label">
                  {activeTab === "All"
                    ? "OUR WORK"
                    : `${activeTab.toUpperCase()} CASE STUDIES`}
                </span>

                <h2>
                  {activeTab === "All"
                    ? "Customer stories"
                    : `${activeTab} success stories`}
                </h2>

              </div>

              <div className="case-count">

                <strong>
                  {filteredData.length}
                </strong>

                <span>
                  {filteredData.length === 1
                    ? "Case Study"
                    : "Case Studies"}
                </span>

              </div>

            </div>


            {/* =================================================
                CASE STUDY GRID
            ================================================== */}

            {filteredData.length > 0 ? (

              <div className="case-grid">

                {filteredData.map((item, index) => (

                  <article
                    className={
                      index === 0 && activeTab === "All"
                        ? "case-card case-card-featured"
                        : "case-card"
                    }
                    key={item.id}
                  >

                    {/* IMAGE */}

                    <Link
                      href={item.slug}
                      className="case-image"
                    >

                      <Image
                        src={item.image}
                        alt={
                          item.alt ||
                          item.title
                        }
                        width={563}
                        height={350}
                        className="case-card-image"
                      />

                      <span className="case-image-arrow">
                        ↗
                      </span>

                      {index === 0 &&
                        activeTab === "All" && (
                          <span className="featured-label">
                            Featured
                          </span>
                        )}

                    </Link>


                    {/* CONTENT */}

                    <div className="case-card-content">

                      <div className="case-card-meta">

                        <span>
                          {item.category}
                        </span>

                        <span className="meta-dot">
                          •
                        </span>

                        <span>
                          Case Study
                        </span>

                      </div>

                      <h3>

                        <Link href={item.slug}>
                          {item.title}
                        </Link>

                      </h3>

                      <div className="case-card-footer">

                        <Link
                          href={item.slug}
                          className="case-read-more"
                        >
                          Read Case Study

                          <span>
                            →
                          </span>
                        </Link>

                      </div>

                    </div>

                  </article>

                ))}

              </div>

            ) : (

              /* =================================================
                 EMPTY STATE
              ================================================== */

              <div className="case-empty">

                <div className="empty-number">
                  0
                </div>

                <h3>
                  No Case Studies Found
                </h3>

                <p>
                  We couldn't find any case studies
                  in this category.
                </p>

                <button
                  type="button"
                  onClick={resetFilter}
                >
                  View All Case Studies
                </button>

              </div>

            )}

          </div>

        </section>


        {/* ====================================================
            CTA
        ===================================================== */}

        <section className="case-cta">

          <div className="container">

            <div className="case-cta-inner">

              <div className="case-cta-content">

                <span className="section-label">
                  YOUR BUSINESS NEXT
                </span>

                <h2>
                  Ready to create your
                  <br />
                  own success story?
                </h2>

                <p>
                  Talk to our Dynamics 365 experts about
                  your business requirements.
                </p>

              </div>

              <Link
                href="/contact-us/"
                className="case-cta-button"
              >
                Talk to an expert
                <span>→</span>
              </Link>

            </div>

          </div>

        </section>

      </main>


      {/* ======================================================
          CSS
      ======================================================= */}

      <style jsx global>{`

        /* ====================================================
           BASE
        ===================================================== */

        .case-studies-page {
          background: #ffffff;
          color: #1b1b1b;
          overflow: hidden;
        }

        .case-studies-page a {
          text-decoration: none;
        }


        /* ====================================================
           HERO
        ===================================================== */

        .case-hero {
          position: relative;
          overflow: hidden;
          min-height: 570px;
          display: flex;
          align-items: center;
          background:
            linear-gradient(
              135deg,
              #f4f8ff 0%,
              #ffffff 55%,
              #eef5ff 100%
            );
        }

        .case-hero-shape {
          position: absolute;
          width: 650px;
          height: 650px;
          right: -270px;
          top: -330px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.07);
        }

        .case-hero-content {
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .case-eyebrow {
          display: inline-block;
          margin-bottom: 20px;
          color: #392f57;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .case-hero-content h1 {
          margin: 0;
          color: #111827;
          font-size: clamp(46px, 5.2vw, 70px);
          line-height: 1.02;
          letter-spacing: -3px;
          font-weight: 750;
        }

        .case-hero-content h1 span {
          color: #392f57;
        }

        .case-hero-content p {
          max-width: 650px;
          margin: 27px 0 0;
          color: #667085;
          font-size: 17px;
          line-height: 1.75;
        }


        /* ====================================================
           HERO STATS
        ===================================================== */

        .case-hero-stats {
          display: flex;
          align-items: center;
          gap: 25px;
          margin-top: 42px;
        }

        .hero-stat {
          display: flex;
          flex-direction: column;
        }

        .hero-stat strong {
          color: #111827;
          font-size: 25px;
          line-height: 1;
          font-weight: 750;
        }

        .hero-stat span {
          margin-top: 7px;
          color: #8a94a5;
          font-size: 11px;
          font-weight: 600;
        }

        .hero-stat-divider {
          width: 1px;
          height: 35px;
          background: #dce2eb;
        }


        /* ====================================================
           HERO VISUAL
        ===================================================== */

        .case-hero-visual {
          position: relative;
          height: 470px;
        }

        .hero-circle {
          position: absolute;
          width: 390px;
          height: 390px;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          background: rgba(37, 99, 235, 0.07);
        }

        .hero-main-card {
          position: absolute;
          z-index: 3;
          left: 50%;
          top: 50%;
          width: 310px;
          min-height: 320px;
          padding: 30px;
          border: 1px solid rgba(255,255,255,0.9);
          border-radius: 18px;
          transform: translate(-50%, -50%) rotate(-3deg);
          background: rgba(255,255,255,0.94);
          box-shadow:
            0 30px 70px rgba(15,23,42,0.12);
        }

        .hero-card-top {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #667085;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .hero-card-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #dc2626;
        }

        .hero-card-number {
          margin-top: 45px;
          color: #392f57;
          font-size: 85px;
          line-height: .8;
          font-weight: 800;
          letter-spacing: -6px;
        }

        .hero-card-text {
          margin-top: 17px;
          color: #111827;
          font-size: 20px;
          font-weight: 700;
        }

        .hero-card-line {
          height: 1px;
          margin-top: 30px;
          background: #e4e7ec;
        }

        .hero-card-bottom {
          display: flex;
          justify-content: space-between;
          margin-top: 17px;
          color: #667085;
          font-size: 10px;
          font-weight: 600;
        }

        .hero-floating-card {
          position: absolute;
          z-index: 5;
          display: flex;
          flex-direction: column;
          padding: 12px 15px;
          border-radius: 9px;
          background: #ffffff;
          box-shadow:
            0 15px 35px rgba(15,23,42,0.10);
        }

        .hero-floating-card span {
          color: #392f57;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .hero-floating-card strong {
          margin-top: 5px;
          color: #344054;
          font-size: 11px;
        }

        .floating-one {
          left: 5px;
          top: 105px;
        }

        .floating-two {
          right: 0;
          bottom: 90px;
        }


        /* ====================================================
           INTRO
        ===================================================== */

        .case-intro {
          padding: 95px 0 55px;
        }

        .case-intro-inner {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 60px;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 13px;
          color: #392f57;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .case-intro h2 {
          margin: 0;
          color: #111827;
          font-size: clamp(32px, 4vw, 46px);
          line-height: 1.15;
          letter-spacing: -1.5px;
          font-weight: 720;
        }

        .case-intro p {
          max-width: 430px;
          margin: 0 0 3px;
          color: #667085;
          font-size: 15px;
          line-height: 1.75;
        }


        /* ====================================================
           CATEGORY NAV
        ===================================================== */

        .case-navigation {
          padding: 20px 0 45px;
        }

        .category-navigation {
          display: flex;
          align-items: center;
          gap: 25px;
          padding: 8px 0;
          border-bottom: 1px solid #e7eaf0;
        }

        .category-title {
          flex-shrink: 0;
          color: #667085;
          font-size: 12px;
          font-weight: 700;
        }

        .category-list {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .category-button {
          padding: 9px 17px;
          border: 1px solid #e1e5eb;
          border-radius: 50px;
          background: #ffffff;
          color: #667085;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          transition: all .2s ease;
        }

        .category-button:hover {
          border-color: #392f57;
          color: #392f57;
        }

        .category-button.active {
          border-color: #392f57;
          background: #392f57;
          color: #ffffff;
        }


        /* ====================================================
           CONTENT
        ===================================================== */

        .case-content {
          padding: 30px 0 105px;
        }

        .case-section-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 32px;
        }

        .case-section-header h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          line-height: 1.15;
          letter-spacing: -1px;
          font-weight: 720;
        }

        .case-count {
          display: flex;
          align-items: baseline;
          gap: 7px;
          color: #98a2b3;
          font-size: 11px;
        }

        .case-count strong {
          color: #111827;
          font-size: 28px;
        }


        /* ====================================================
           GRID
        ===================================================== */

        .case-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }


        /* ====================================================
           CARD
        ===================================================== */

        .case-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-width: 0;
          border: 1px solid #e4e7ec;
          border-radius: 13px;
          background: #ffffff;
          transition:
            transform .3s ease,
            box-shadow .3s ease,
            border-color .3s ease;
        }

        .case-card:hover {
          transform: translateY(-5px);
          border-color: #d5dbe5;
          box-shadow:
            0 18px 45px rgba(15,23,42,.09);
        }


        /* ====================================================
           FEATURED CARD
        ===================================================== */

        .case-card-featured {
          grid-column: span 2;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
        }

        .case-card-featured .case-image {
          height: 100%;
          min-height: 380px;
          min-width: 0;
          aspect-ratio: auto;
        }

        .case-card-featured .case-card-content {
          justify-content: center;
          min-width: 0;
          padding: 45px;
        }

        .case-card-featured .case-card-content h3 {
          font-size: 31px;
        }


        /* ====================================================
           IMAGE
        ===================================================== */

        .case-image {
          position: relative;
          display: block;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: #f2f4f7;
        }

        .case-card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .5s ease;
        }

        .case-card:hover .case-card-image {
          transform: scale(1.04);
        }

        .case-image-arrow {
          position: absolute;
          top: 17px;
          right: 17px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 37px;
          height: 37px;
          border-radius: 50%;
          background: rgba(255,255,255,.94);
          color: #111827;
          font-size: 16px;
          box-shadow: 0 6px 18px rgba(0,0,0,.12);
          transition: all .2s ease;
        }

        .case-card:hover .case-image-arrow {
          background: #392f57;
          color: #ffffff;
        }

        .featured-label {
          position: absolute;
          left: 18px;
          top: 18px;
          padding: 7px 11px;
          border-radius: 50px;
          background: #ffffff;
          color: #392f57;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .7px;
          box-shadow: 0 6px 18px rgba(0,0,0,.09);
        }


        /* ====================================================
           CARD CONTENT
        ===================================================== */

        .case-card-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 25px 27px 27px;
        }

        .case-card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          color: #392f57;
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .8px;
        }

        .meta-dot {
          color: #c5cad2;
        }

        .case-card-content h3 {
          margin: 0;
          color: #111827;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -.35px;
          font-weight: 700;
        }

        .case-card-content h3 a {
          color: #111827;
          transition: color .2s ease;
        }

        .case-card-content h3 a:hover {
          color: #392f57;
        }

        .case-card-footer {
          margin-top: auto;
          padding-top: 25px;
        }

        .case-read-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #dc2626;
          font-size: 12px;
          font-weight: 750;
          transition: gap .2s ease;
        }

        .case-read-more span {
          font-size: 17px;
        }

        .case-read-more:hover {
          gap: 15px;
          color: #b91c1c;
        }


        /* ====================================================
           EMPTY
        ===================================================== */

        .case-empty {
          padding: 85px 20px;
          text-align: center;
          border: 1px solid #e4e7ec;
          border-radius: 13px;
        }

        .empty-number {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #f2f4f7;
          color: #667085;
          font-size: 20px;
          font-weight: 800;
        }

        .case-empty h3 {
          margin: 0;
          color: #111827;
          font-size: 24px;
        }

        .case-empty p {
          margin: 10px 0 0;
          color: #667085;
          font-size: 14px;
        }

        .case-empty button {
          margin-top: 23px;
          padding: 11px 18px;
          border: 0;
          border-radius: 6px;
          background: #dc2626;
          color: #ffffff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }


        /* ====================================================
           CTA
        ===================================================== */

        .case-cta {
          padding-bottom: 100px;
        }

        .case-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 50px;
          padding: 55px 60px;
          border-radius: 15px;
          background: #111827;
        }

        .case-cta-content h2 {
          margin: 0;
          color: #ffffff;
          font-size: 36px;
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .case-cta-content p {
          margin: 14px 0 0;
          color: #aab3c1;
          font-size: 14px;
          line-height: 1.7;
        }

        .case-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 18px;
          flex-shrink: 0;
          padding: 14px 18px 14px 22px;
          border-radius: 7px;
          background: #dc2626;
          color: #ffffff;
          font-size: 13px;
          font-weight: 750;
          transition: all .25s ease;
        }

        .case-cta-button span {
          font-size: 18px;
        }

        .case-cta-button:hover {
          background: #b91c1c;
          color: #ffffff;
          transform: translateY(-2px);
        }


        /* ====================================================
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .case-hero {
            min-height: auto;
          }

          .case-hero-content {
            padding: 70px 0 30px;
            text-align: center;
          }

          .case-hero-content p {
            margin-left: auto;
            margin-right: auto;
          }

          .case-hero-stats {
            justify-content: center;
          }

          .case-hero-visual {
            max-width: 600px;
            margin: auto;
          }

          .case-intro-inner {
            display: block;
          }

          .case-intro p {
            margin-top: 20px;
          }

          .case-card-featured {
            grid-template-columns: 1fr;
          }

          .case-card-featured .case-image {
            min-height: auto;
            aspect-ratio: 16 / 9;
          }

          .case-card-featured .case-card-content {
            padding: 35px;
          }

          .case-cta-inner {
            display: block;
          }

          .case-cta-button {
            margin-top: 28px;
          }

        }


        /* ====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .case-hero-content {
            padding: 55px 0 20px;
          }

          .case-hero-content h1 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .case-hero-content p {
            font-size: 15px;
          }

          .case-hero-stats {
            gap: 15px;
          }

          .hero-stat strong {
            font-size: 21px;
          }

          .hero-stat span {
            font-size: 9px;
          }

          .case-hero-visual {
            height: 360px;
          }

          .hero-circle {
            width: 300px;
            height: 300px;
          }

          .hero-main-card {
            width: 260px;
            min-height: 285px;
            padding: 25px;
          }

          .hero-card-number {
            font-size: 70px;
          }

          .floating-one {
            left: 0;
            top: 70px;
          }

          .floating-two {
            right: 0;
            bottom: 55px;
          }

          .case-intro {
            padding: 70px 0 35px;
          }

          .case-intro h2 {
            font-size: 32px;
          }

          .case-intro h2 br {
            display: none;
          }

          .case-navigation {
            padding-top: 15px;
          }

          .category-navigation {
            display: block;
          }

          .category-list {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding: 13px 0 7px;
            scrollbar-width: none;
          }

          .category-list::-webkit-scrollbar {
            display: none;
          }

          .category-button {
            flex: 0 0 auto;
          }

          .case-content {
            padding: 25px 0 75px;
          }

          .case-section-header {
            display: block;
          }

          .case-section-header h2 {
            font-size: 31px;
          }

          .case-count {
            margin-top: 13px;
          }

          .case-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .case-card-featured {
            grid-column: span 1;
          }

          .case-card-featured .case-card-content {
            padding: 27px;
          }

          .case-card-featured .case-card-content h3 {
            font-size: 25px;
          }

          .case-card-content {
            padding: 23px;
          }

          .case-card-content h3 {
            font-size: 20px;
          }

          .case-cta {
            padding-bottom: 70px;
          }

          .case-cta-inner {
            padding: 35px 25px;
          }

          .case-cta-content h2 {
            font-size: 29px;
          }

          .case-cta-content h2 br {
            display: none;
          }

        }

      `}</style>
    </>
  );
};

export default CategoryList;

