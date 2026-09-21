import React, { useEffect } from "react";
import Link from "next/link";
import {
  SOLUTION_TABS as SOLUTION_TAB_META,
  SOLUTION_PANELS,
  INDUSTRIES as INDUSTRIES_DATA,
  OUR_SERVICES as OUR_SERVICES_DATA,
  COMPANY_LINKS as COMPANY_LINKS_DATA,
  BLOG_BY_PRODUCT,
  BLOG_BY_INDUSTRY,
  BLOG_EDITORS_PICKS,
  CASE_STUDY_SERVICES,
  CASE_STUDY_HIGHLIGHTS,
  POPULAR_EBOOKS,
  GUIDES,
  WHITEPAPERS,
  TOOLS,
  WEBCASTS,
} from "./menuData";

/*
  Mirrors DeskstopMenu.js: both read from menuData.js, so the same
  labels/links drive both menus — this file just flattens each entry
  down to name+link accordion rows instead of the desktop's mega-menu
  cards/icons/descriptions.
*/

// Bootstrap's data-bs-dismiss click handler calls event.preventDefault()
// whenever the dismiss trigger is an <a>, which cancels next/link's own
// navigation on that same click. Closing the offcanvas imperatively (via
// the JS instance) instead of via the data-api attribute avoids that race
// so the link still navigates.
const closeMobileNav = () => {
  if (typeof window === "undefined" || !window.bootstrap) return;
  const el = document.getElementById("offcanvasWithBothOptions");
  if (!el) return;
  const instance = window.bootstrap.Offcanvas.getOrCreateInstance(el);
  instance.hide();
};

const toNameLink = (item) => ({ href: item.href, title: item.title || item.label });

const SOLUTION_TABS = SOLUTION_TAB_META.map((tab) => ({
  label: tab.label,
  items: SOLUTION_PANELS[tab.id].map(toNameLink),
}));

const INDUSTRIES = INDUSTRIES_DATA.map(toNameLink);
const OUR_SERVICES = OUR_SERVICES_DATA.map(toNameLink);
const COMPANY_LINKS = COMPANY_LINKS_DATA.map(toNameLink);

const RESOURCE_TABS = [
  {
    label: "Blogs",
    groups: [
      { heading: "By product", items: BLOG_BY_PRODUCT.map(toNameLink) },
      { heading: "By Industry", items: BLOG_BY_INDUSTRY.map(toNameLink) },
      { heading: "Editor's Picks", items: BLOG_EDITORS_PICKS.map(toNameLink) },
    ],
    viewAll: { href: "/blog/", title: "View All Blogs" },
  },
  {
    label: "Case Studies",
    groups: [
      { heading: "Browse by Service", items: CASE_STUDY_SERVICES.map(toNameLink) },
      { heading: "Customer Success Highlights", items: CASE_STUDY_HIGHLIGHTS.map(toNameLink) },
    ],
    viewAll: { href: "/case-studies/", title: "Explore Customer Stories" },
  },
  {
    label: "eBooks",
    groups: [
      { heading: "Recommended", items: [{ href: "/ebook/how-to-choose-right-erp/", title: "Ultimate ERP Guide for Your Business" }] },
      { heading: "Popular eBooks", items: POPULAR_EBOOKS.map(toNameLink) },
    ],
    viewAll: { href: "/ebook/", title: "View All eBooks" },
  },
  {
    label: "Guides",
    groups: [
      { heading: "Guides", items: GUIDES.map(toNameLink) },
      { heading: "Whitepapers", items: WHITEPAPERS.map(toNameLink) },
    ],
    viewAll: { href: "/guides/", title: "Explore All Guides" },
  },
  {
    label: "Tools",
    groups: [{ heading: "Tools", items: TOOLS.map(toNameLink) }],
  },
  {
    label: "Webcasts",
    groups: [{ heading: "Webcasts", items: WEBCASTS.map((w) => ({ href: w.href, title: w.title, external: true })) }],
    viewAll: { href: "https://www.youtube.com/@DynamicsSquare", title: "View All Podcasts", external: true },
  },
];

/* ---------- shared sub-accordion renderers ---------- */

const SubAccordion = ({ id, tabs, renderBody }) => (
  <div className="accordion iner-sub-accordion" id={id}>
    {tabs.map((tab, i) => {
      const headerId = `${id}-head-${i}`;
      const collapseId = `${id}-collapse-${i}`;
      return (
        <div className="accordion-item" key={tab.label}>
          <div className="accordion-header" id={headerId}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${collapseId}`}
              aria-expanded="false"
              aria-controls={collapseId}
            >
              <a href="#">
                <span>{tab.label}</span>
              </a>
            </button>
          </div>
          <div
            id={collapseId}
            className="accordion-collapse collapse"
            aria-labelledby={headerId}
            data-bs-parent={`#${id}`}
          >
            <div className="accordion-body">{renderBody(tab)}</div>
          </div>
        </div>
      );
    })}
  </div>
);

const LinkList = ({ items }) => (
  <div className="iner-list">
    <ul>
      {items.map((item) => (
        <li key={item.href}>
          {item.external ? (
            <a href={item.href} target="_blank" rel="noreferrer" onClick={closeMobileNav}>
              {item.title}
            </a>
          ) : (
            <Link href={item.href} onClick={closeMobileNav}>
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const ResourceTabBody = (tab) => (
  <>
    {tab.groups.map((group) => (
      <div key={group.heading}>
        <span className="mobile-group-heading">{group.heading}</span>
        <LinkList items={group.items} />
      </div>
    ))}
    {tab.viewAll && (
      <div className="iner-list">
        <ul>
          <li>
            {tab.viewAll.external ? (
              <a href={tab.viewAll.href} target="_blank" rel="noreferrer" onClick={closeMobileNav}>
                {tab.viewAll.title}
              </a>
            ) : (
              <Link href={tab.viewAll.href} onClick={closeMobileNav}>
                {tab.viewAll.title}
              </Link>
            )}
          </li>
        </ul>
      </div>
    )}
  </>
);

const MobileMenu = () => {
  // Reset every accordion (top-level and nested sub-tabs) back to
  // collapsed whenever the sidebar closes, so reopening the menu always
  // starts fresh instead of remembering whatever was left expanded.
  useEffect(() => {
    const el = document.getElementById("offcanvasWithBothOptions");
    if (!el) return;

    const resetAccordions = () => {
      if (!window.bootstrap) return;
      el.querySelectorAll(".accordion-collapse.show").forEach((collapseEl) => {
        window.bootstrap.Collapse.getOrCreateInstance(collapseEl, { toggle: false }).hide();
      });
    };

    el.addEventListener("hidden.bs.offcanvas", resetAccordions);
    return () => el.removeEventListener("hidden.bs.offcanvas", resetAccordions);
  }, []);

  // The Zoho SalesIQ chat bubble is injected into document.body by its own
  // script with a high z-index, so it visually floats on top of (and looks
  // "inside") the offcanvas sidebar. Hide it for as long as the sidebar is
  // open, via a body class, instead of touching Zoho's own DOM/script.
  useEffect(() => {
    const el = document.getElementById("offcanvasWithBothOptions");
    if (!el) return;

    const addHideClass = () => document.body.classList.add("dsq-mobile-nav-open");
    const removeHideClass = () => document.body.classList.remove("dsq-mobile-nav-open");

    el.addEventListener("show.bs.offcanvas", addHideClass);
    el.addEventListener("hidden.bs.offcanvas", removeHideClass);
    return () => {
      el.removeEventListener("show.bs.offcanvas", addHideClass);
      el.removeEventListener("hidden.bs.offcanvas", removeHideClass);
    };
  }, []);

  return (
    <>
      <div className="mobile-menu-section-wr">
        <div className="togglr-icon-nav">
          <div className="cont-m-mobile">
            <a
              className="getstarted custtss"
              href="tel:+442037697689"
              target="_self" aria-label="Call us at +44 20 3769 7689"
            >
              <i className="bi bi-telephone-fill"></i>
            </a>
          </div>
          <a
            href="#offcanvasWithBothOptions"
            data-bs-toggle="offcanvas"
            aria-controls="offcanvasWithBothOptions"
            aria-label="offcanvas"
          >
            <i className="bi bi-list mobile-nav-toggle"></i>
          </a>
        </div>
        <div className="mobile-new-nav">
          <div
            className="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div className="offcanvas-header">
              <a href="/" className="logo d-flex align-items-center">
                <img
                  src="/img/dynamicssqure-logo.svg"
                  alt="Dynamics Square logo"
                  width="282"
                  height="19"
                />
              </a>
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="accordion" id="mobile-toggle-nav">
                {/* ===================== SOLUTION ===================== */}
                <div className="accordion-item">
                  <div className="accordion-header" id="list-1">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="false"
                      aria-controls="collapseOne"
                    >
                      <a href="#">
                        <span>Solution</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-1"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <SubAccordion
                        id="solution-sub-accordion"
                        tabs={SOLUTION_TABS}
                        renderBody={(tab) => <LinkList items={tab.items} />}
                      />
                    </div>
                  </div>
                </div>

                {/* ===================== INDUSTRIES ===================== */}
                <div className="accordion-item">
                  <div className="accordion-header" id="list-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      <a href="#">
                        <span>Industries</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-2"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <LinkList items={INDUSTRIES} />
                    </div>
                  </div>
                </div>

                {/* ===================== OUR SERVICES ===================== */}
                <div className="accordion-item">
                  <div className="accordion-header" id="list-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      <a href="#">
                        <span>Our Services</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-3"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <LinkList items={OUR_SERVICES} />
                    </div>
                  </div>
                </div>

                {/* ===================== COMPANY ===================== */}
                <div className="accordion-item">
                  <div className="accordion-header" id="list-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefour"
                      aria-expanded="false"
                      aria-controls="collapsefour"
                    >
                      <a href="#">
                        <span>Company</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapsefour"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-4"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <LinkList items={COMPANY_LINKS} />
                    </div>
                  </div>
                </div>

                {/* ===================== RESOURCES ===================== */}
                <div className="accordion-item">
                  <div className="accordion-header" id="list-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapsefive"
                      aria-expanded="false"
                      aria-controls="collapsefive"
                    >
                      <a href="#">
                        <span>Resources</span>
                      </a>
                    </button>
                  </div>
                  <div
                    id="collapsefive"
                    className="accordion-collapse collapse"
                    aria-labelledby="list-5"
                    data-bs-parent="#mobile-toggle-nav"
                  >
                    <div className="accordion-body">
                      <SubAccordion
                        id="resources-sub-accordion"
                        tabs={RESOURCE_TABS}
                        renderBody={ResourceTabBody}
                      />
                    </div>
                  </div>
                </div>

                {/* ===================== CONTACT US ===================== */}
                <div className="accordion-item">
                  <Link className="nav-link" href="/contact-us/" onClick={closeMobileNav}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Zoho SalesIQ injects its floating chat bubble into document.body
           with its own high z-index, so it visually sits on top of (and
           looks "inside") the offcanvas sidebar. Hide anything it renders
           while the sidebar is open (the .dsq-mobile-nav-open body class
           is toggled in the useEffect above). Covers the known SalesIQ
           container ids/classes without touching Zoho's own script/DOM. */
        body.dsq-mobile-nav-open [id^="zsiq"],
        body.dsq-mobile-nav-open [class*="zsiq"],
        body.dsq-mobile-nav-open #zsiqbtn,
        body.dsq-mobile-nav-open #zsiqwidget {
          display: none !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }

        /* All rules below are anchored to #mobile-toggle-nav so they win
           the cascade over the older, higher-specificity class rule in
           globals.css (.mobile-new-nav .accordion-item .accordion-body
           .iner-list ul li a) that otherwise flattens this design. */

        /* ---------- top-level sections ---------- */
        #mobile-toggle-nav {
          padding: 6px 4px 24px;
        }
        #mobile-toggle-nav > .accordion-item {
          border: none;
          border-bottom: 1px solid #eceef4;
        }
        #mobile-toggle-nav > .accordion-item:last-child {
          border-bottom: none;
        }
        #mobile-toggle-nav .accordion-button {
          border-radius: 8px;
        }
        #mobile-toggle-nav .accordion-button:not(.collapsed) {
          background: #f6f7fb;
        }
        #mobile-toggle-nav .accordion-button::after {
          color: var(--color-red);
          font-size: 1.3rem !important;
        }
        #mobile-toggle-nav .nav-link {
          display: block;
          padding: 12px 15px;
          color: var(--color-blue) !important;
          font-size: 15px;
          font-weight: 600;
          border-radius: 8px;
          transition: background 0.15s ease, color 0.15s ease;
        }
        #mobile-toggle-nav .nav-link:hover,
        #mobile-toggle-nav .nav-link:active {
          color: #fff !important;
          background: var(--color-red);
        }

        /* ---------- level-1 link lists (Industries, Our Services, Company) ---------- */
        #mobile-toggle-nav > .accordion-item > .accordion-collapse > .accordion-body > .iner-list ul li {
          margin-bottom: 0 !important;
        }
        #mobile-toggle-nav > .accordion-item > .accordion-collapse > .accordion-body > .iner-list ul li a {
          font-size: 14.5px !important;
          font-weight: 500 !important;
          color: var(--color-blue) !important;
          margin-bottom: 2px !important;
          border-radius: 6px;
          padding: 10px 10px 10px 18px;
          position: relative;
          transition: background 0.15s ease, color 0.15s ease, padding-left 0.15s ease;
        }
        #mobile-toggle-nav > .accordion-item > .accordion-collapse > .accordion-body > .iner-list ul li a::before {
          content: "";
          position: absolute;
          left: 4px;
          top: 50%;
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #c7cbdb;
          transform: translateY(-50%);
        }
        #mobile-toggle-nav > .accordion-item > .accordion-collapse > .accordion-body > .iner-list ul li a:hover,
        #mobile-toggle-nav > .accordion-item > .accordion-collapse > .accordion-body > .iner-list ul li a:active {
          background: #f6f7fb;
          color: var(--color-red) !important;
          padding-left: 22px;
        }

        /* ---------- nested (level-2) accordion used inside Solution / Resources ---------- */
        #mobile-toggle-nav .iner-sub-accordion {
          margin-top: 6px;
          margin-bottom: 4px;
          padding: 4px 0 4px 12px;
          border-left: 2px solid #eceef4;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-item {
          border: none !important;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-item + .accordion-item {
          border-top: 1px solid #eceef4 !important;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-button {
          padding: 10px 12px;
          border-radius: 6px;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-button::after {
          font-size: 1.1rem !important;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-button a {
          color: var(--color-blue);
          font-size: 14px;
          font-weight: 600;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-body {
          padding: 2px 4px 12px 6px;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-body .iner-list ul li {
          margin-bottom: 0 !important;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-body .iner-list ul li a {
          font-size: 13.5px !important;
          font-weight: 400 !important;
          color: #333 !important;
          margin-bottom: 2px !important;
          padding: 8px 8px 8px 18px;
          line-height: 1.35;
        }
        #mobile-toggle-nav .iner-sub-accordion .accordion-body .iner-list ul li a::before {
          left: 4px;
          width: 3px;
          height: 3px;
        }

        #mobile-toggle-nav .mobile-group-heading {
          display: block;
          font-size: 12px !important;
          font-weight: 700 !important;
          letter-spacing: 0.05em;
          text-transform: uppercase !important;
          color: #9498ac !important;
          margin: 14px 0 4px 8px !important;
          padding-bottom: 4px;
          border-bottom: 1px solid #eceef4;
        }
        #mobile-toggle-nav .mobile-group-heading:first-child {
          margin-top: 10px !important;
        }
      `}</style>
    </>
  );
};

export default MobileMenu;
