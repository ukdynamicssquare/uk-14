import React, { useEffect, useState } from "react";
import Image from "next/image";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import TimerModal from "./TimerModal";

const HeaderWork = () => {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const gname = "services-header"
  const headerClassMap = {
    "/": "specific-header",
    "/index-new": "specific-header",
    "/products/dynamics-365-business-central/bc-support": `${gname}`,
    "/dynamics-365-business-central-implementation": `${gname}`,
    "/d365-business-central-support": `${gname}`,
    "/products/dynamics-365-business-central": `${gname}`,
    "/products/microsoft-dynamics-365-finance": `${gname}`,
    "/products/dynamics-365-business-central/financial-management": `${gname}`,
    "/products/dynamics-365-business-central/sales-order-management": `${gname}`,
    "/products/dynamics-365-business-central/supply-chain-management": `${gname}`,
    "/products/microsoft-dynamics-365-sales": `${gname}`,
    "/products/dynamics-365-business-central/warehouse-management": `${gname}`,
    "/products/dynamics-365-business-central/project-management": `${gname}`,
    "/yavrio-integration-with-business-central": `${gname}`,
    "/products/dynamics-365-business-central/service-management": `${gname}`,
    "/products/dynamics-365-human-resources": `${gname}`,
    "/products/dynamics-365-human-resources": `${gname}`,
    "/products/dynamics-365-project-operations": `${gname}`,
    "/continia-for-dynamics-365-business-central": `${gname}`,
    "/the-ultimate-guide-to-microsoft-dynamics-365": `${gname}`,
    "/industries/professional-services": `${gname}`,
    "/continia-expense-management": `${gname}`,
    "/case-studies/business-central-reimplementation-for-food-trader": `${gname}`,
    "/case-studies/business-central-reimplementation-for-recycling-industry": `${gname}`,
    "/industries/dynamics-365-for-discrete-manufacturing": `${gname}`,
    "/industries/dynamics-365-for-distribution": `${gname}`,
    "/case-studies/business-central-for-tool-manufacturing-company": `${gname}`,
    "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity": `${gname}`,
    "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing": `${gname}`,
    "/case-studies/d365-finance-and-operations-for-project-management": `${gname}`,
    "/case-studies/dynamics-365-f&O-implementation-for-healthcare": `${gname}`,
    "/products/microsoft-dynamics-crm": `${gname}`,
    "/products/dynamics-365-business-central/pricing-licensing": `${gname}`,
    "/book-a-demo": `${gname}`,
  };
  const hide = ["/contact-us", "/thank-you"];
  const currentHeaderClass = headerClassMap[router.pathname] || "";

  const getLogoSrc = () => {
    switch (router.pathname) {
      case "/":
        return "/img/dynamics_square_tm_logo_footer.svg";
      case "/index-new":
        return "/img/dynamics_square_tm_logo_footer.svg";
      default:
        return "/img/dynamics_square_tm_logo.svg";
    }
  };

  const getLogoSrctwo = () => {
    switch (router.pathname) {
      case "/":
        return "/img/partner-logo-white-2.png";
      case "/index-new":
        return "/img/partner-logo-white-2.png";
      default:
        return "/img/partner-logo-black-big.png";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };


    // Handle hover tab switching
    const navLinks = document.querySelectorAll(".megamenu .nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", (event) => {
        const targetTab = new bootstrap.Tab(event.target);
        targetTab.show();
      });
    });

    window.addEventListener("scroll", handleScroll);

    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => { });
      });
    };
  }, []);


  return (
    <>
      {!hide.some((p) => router.pathname.startsWith(p)) && (
        <TimerModal />
      )}
      <header
        id="header"
        className={`header ${isFixed ? "fixed-top" : ""} ${currentHeaderClass}`}
      >
        <div className="top-header-sec">
          <a href="mailto:info@dynamicssquare.co.uk">
            <span><i className="bi bi-envelope"></i> info@dynamicssquare.co.uk</span>
          </a>
          <a href="tel:+442037697689">
            <span><i className="bi bi-telephone"></i> 0203 769 7689</span>
          </a>
        </div>
        <div className="container-fluid">
          <nav id="navbar" className="navbar">
            <div className="left-logo">
              <a href="/" className="logo">
                <div className="logo-wrapper">
                  <Image
                    src={getLogoSrc()}
                    alt="Dynamics Square TM Logo"
                    priority
                    width={301}
                    height={21}
                  />
                  <Image className="log-part" src={getLogoSrctwo()} alt="" width="141"
                    height="40" priority />
                </div>

              </a>
            </div>
            <div className="right-nav">
              <DeskstopMenu />
            </div>
          </nav>
          <MobileMenu />
        </div>
      </header>
    </>
  );
};

export default HeaderWork;
