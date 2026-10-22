import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import TimerModal from "./TimerModal";

const HeaderWork = () => {
  const [isFixed, setIsFixed] = useState(false);
  // Open megamenus/dropdowns are pure CSS :hover, so clicking a Link inside
  // one (client-side navigation, no full page reload) can leave the panel
  // visually open through the transition. This closes it the moment a
  // route change starts.
  const [navClosing, setNavClosing] = useState(false);
  const router = useRouter();
  const gname = "services-header"
  const headerClassMap = {
    "/": "specific-header",
    "/index-new": "specific-header",
    "/the-ultimate-guide-to-microsoft-dynamics-365": "specific-header",
    "/products/dynamics-365-business-central/bc-support": `${gname}`,
    "/dynamics-365-business-central-implementation": `${gname}`,
    "/d365-business-central-support": `${gname}`,
    "/products/dynamics-365-business-central": `${gname}`,
    "/products/microsoft-dynamics-365-finance": `${gname}`,
    "/products/dynamics-365-supply-chain-management": `${gname}`,
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
    "/industries/professional-services": `${gname}`,
    "/continia-expense-management": `${gname}`,
    "/case-studies/business-central-reimplementation-for-food-trader": `${gname}`,
    "/case-studies/business-central-reimplementation-for-recycling-industry": `${gname}`,
    "/industries/manufacturing/dynamics-365-for-discrete": `${gname}`,
    "/industries/dynamics-365-for-distribution": `${gname}`,
    "/case-studies/business-central-for-tool-manufacturing-company": `${gname}`,
    "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity": `${gname}`,
    "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing": `${gname}`,
    "/case-studies/d365-finance-and-operations-for-project-management": `${gname}`,
    "/case-studies/dynamics-365-f&O-implementation-for-healthcare": `${gname}`,
    "/products/microsoft-dynamics-crm": `${gname}`,
    "/products/dynamics-365-business-central/pricing-licensing": `${gname}`,
        "/industries/dynamics-365-for-education": `${gname}`,
         "/products/microsoft-dynamics-365-field-service": `${gname}`,
         "/products/microsoft-dynamics-365-customer-service": `${gname}`,
          "/ai-solutions": `${gname}`,
           "/ai-solutions/microsoft-fabric": `${gname}`,
           "/industries/manufacturing/dynamics-365-for-pharmaceutical": `${gname}`,
           "/industries/manufacturing/dynamics-365-for-medical-device": `${gname}`,
           "/industries/manufacturing/dynamics-365-for-chemical": `${gname}`,
           "/industries/manufacturing/dynamics-365-for-electronics": `${gname}`,
           "/products": `${gname}`,
            "/industries/dynamics-365-for-healthcare": `${gname}`,


    "/book-a-demo": `${gname}`,
  };
  // const hide = ["/contact-us", "/thank-you"];
  const currentHeaderClass = headerClassMap[router.pathname] || "";

  const getLogoSrc = () => {
    switch (router.pathname) {
      case "/":
        return "/img/dynamics_square_tm_logo_footer.svg";
        case "/the-ultimate-guide-to-microsoft-dynamics-365":
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
        case "/the-ultimate-guide-to-microsoft-dynamics-365":
        return "/img/partner-logo-white-2.png";
      case "/index-new":
        return "/img/partner-logo-white-2.png";
      default:
        return "/img/partner-logo-black-big.png";
    }
  };

  // Header leaves the document flow when it becomes fixed; keep its height
  // reserved so the content below doesn't jump up.
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = headerRef.current;
      if (el && !el.classList.contains("fixed-top")) setHeaderHeight(el.offsetHeight);
    };
    measure();
    window.addEventListener("resize", measure);
    // Re-measure whenever the header's own size changes (e.g. the top bar is
    // hidden by the mobile stylesheet after the first measure), so the
    // reserved space never leaves a gap under the header.
    const observer =
      typeof ResizeObserver !== "undefined" && headerRef.current
        ? new ResizeObserver(measure)
        : null;
    if (observer) observer.observe(headerRef.current);
    return () => {
      window.removeEventListener("resize", measure);
      if (observer) observer.disconnect();
    };
  }, [router.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 170) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOpenMenus = () => setNavClosing(true);
    const reopenAllowed = () => setNavClosing(false);

    router.events.on("routeChangeStart", closeOpenMenus);
    router.events.on("routeChangeComplete", reopenAllowed);
    router.events.on("routeChangeError", reopenAllowed);

    return () => {
      router.events.off("routeChangeStart", closeOpenMenus);
      router.events.off("routeChangeComplete", reopenAllowed);
      router.events.off("routeChangeError", reopenAllowed);
    };
  }, [router]);


  return (
    <>
      {/* {!hide.some((p) => router.pathname.startsWith(p)) && (
        <TimerModal />
      )} */}
      <div style={{ minHeight: headerHeight || undefined }}>
      <header
        id="header"
        ref={headerRef}
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
          <nav id="navbar" className={`navbar${navClosing ? " dsq-nav-closing" : ""}`}>
            <div className="left-logo">
              <Link href="/" className="logo">
                <div className="logo-wrapper">
                  <Image
                    src={getLogoSrc()}
                    alt="Dynamics Square TM Logo"
                    priority
                    width={301}
                    height={21}
                  />
                  <Image className="log-part" src={getLogoSrctwo()} alt="Microsoft Solutions Partner logo" width={141}
                    height={40} priority />
                </div>

              </Link>
            </div>
            <div className="right-nav">
              <DeskstopMenu />
            </div>
          </nav>
          <MobileMenu />
        </div>
      </header>
      </div>

      <style jsx global>{`
        /* Dropdowns/megamenus are CSS :hover-driven; force them closed the
           instant a route change starts so a Link click doesn't leave the
           panel visually open through the client-side transition. */
        .navbar.dsq-nav-closing .dropdown .megamenu-list,
        .navbar.dsq-nav-closing .dropdown > ul {
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>
    </>
  );
};

export default HeaderWork;
