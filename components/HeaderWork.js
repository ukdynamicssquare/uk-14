import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import DeskstopMenu from "./DeskstopMenu";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import TimerModal from "./TimerModal";
import menuStyles from "./HeaderMenu.module.css";

const HeaderWork = () => {
  const [isFixed, setIsFixed] = useState(false);
  // Open megamenus/dropdowns are pure CSS :hover, so clicking a Link inside
  // one (client-side navigation, no full page reload) can leave the panel
  // visually open through the transition. This closes it the moment a
  // route change starts.
  const [navClosing, setNavClosing] = useState(false);
  const router = useRouter();
  // Header class by route. Each key is a URL prefix; the slugs listed under
  // it are appended to make the full route. Add a page by adding its slug.
  const specificHeaderRoutes = ["/", "/index-new", "/the-ultimate-guide-to-microsoft-dynamics-365"];
  const servicesHeaderGroups = {
    "/": [
      "dynamics-365-business-central-implementation", "d365-business-central-support",
      "yavrio-integration-with-business-central", "continia-for-dynamics-365-business-central",
      "continia-expense-management", "book-a-demo", "products", "ai-solutions",
    ],
    "/products/": [
      "dynamics-365-business-central", "microsoft-dynamics-365-finance", "dynamics-365-supply-chain-management",
      "microsoft-dynamics-365-sales", "dynamics-365-human-resources", "dynamics-365-project-operations",
      "microsoft-dynamics-crm", "microsoft-dynamics-365-field-service", "microsoft-dynamics-365-customer-service",
    ],
    "/products/dynamics-365-business-central/": [
      "bc-support", "financial-management", "sales-order-management", "supply-chain-management",
      "warehouse-management", "project-management", "service-management", "pricing-licensing",
    ],
    "/ai-solutions/": ["microsoft-fabric", "copilot-studio", "microsoft-foundry"],
    "/industries/": ["professional-services"],
    "/industries/dynamics-365-for-": ["distribution", "education", "healthcare"],
    "/industries/manufacturing/dynamics-365-for-": [
      "discrete", "pharmaceutical", "medical-device", "chemical", "electronics", "food",
      "plastics", "fashion", "packaging", "furniture", "aerospace", "printing",
    ],
    "/case-studies/": [
      "business-central-reimplementation-for-food-trader",
      "business-central-reimplementation-for-recycling-industry",
      "business-central-for-tool-manufacturing-company",
      "dynamics-365-finance-for-logistic-uk-multi-entity",
      "business-central-with-crm-implement-for-equestrian-manufacturing",
      "d365-finance-and-operations-for-project-management",
      "dynamics-365-f&O-implementation-for-healthcare",
      "bedmax-business-central-on-premises-upgrade-support",
      "traffi-netsuite-to-business-central-migration",
      "acai-outdoorwear-business-central-shopify-support",
      "mis-healthcare-business-central-field-service-rescue",
      "excel-power-construction-copilot-power-platform",
      "stephens-catering-dynamics-nav-to-business-central-upgrade",
      "rafa-sage-200-to-business-central-charity",
      "acbf-dynamics-365-finance-operations-nonprofit",
      "hopkins-estates-nav-to-business-central-aggregates",
      "forensx-quickbooks-to-business-central-professional-services",
      "laundre-quickbooks-to-business-central-textiles",
    ],
  };

  const headerClassMap = Object.fromEntries([
    ...specificHeaderRoutes.map((route) => [route, "specific-header"]),
    ...Object.entries(servicesHeaderGroups).flatMap(([prefix, slugs]) =>
      slugs.map((slug) => [prefix + slug, "services-header"])
    ),
  ]);
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
          <nav id="navbar" className={`navbar ${menuStyles.nav}${navClosing ? " dsq-nav-closing" : ""}`}>
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
