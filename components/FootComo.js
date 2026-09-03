"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "../styles/Footer.module.css";
import FormNewUIFooter from './FormNewUIFooter';
/* ============================================================================
   DATA — swap [FILL] values for real content before shipping
   ============================================================================ */

const NAV_COLUMNS = [
  {
    id: "products",
    title: "Dynamics 365 Products",
    links: [
      { label: "Business Central", href: "/products/dynamics-365-business-central/" },
      { label: "Finance", href: "/products/microsoft-dynamics-365-finance/" },
      { label: "Supply Chain Management", href: "/products/dynamics-365-supply-chain-management/" },
      { label: "Sales (CRM)", href: "/products/microsoft-dynamics-365-sales/" },
      { label: "Customer Service", href: "/products/microsoft-dynamics-365-customer-service/" },
      { label: "Field Service", href: "/products/microsoft-dynamics-365-field-service/" },
      { label: "Customer Insights", href: "/blog/dynamics-365-customer-insights-journeys/" },
      { label: "Power Platform", href: "/products/microsoft-power-platform/" },
      { label: "Copilot & AI Agents", href: "/products/dynamics-365-copilot/" },
    ],
  },
  {
    id: "services",
    title: "Services",
    links: [
      { label: "Implementation", href: "/our-services/dynamics-365-implementation-services/" },
      { label: "Migration & Upgrade", href: "/our-services/dynamics-365-upgrade-services/" },
      { label: "Support & Managed Services", href: "/our-services/dynamics-365-support-services/" },
      { label: "Consulting", href: "/our-services/dynamics-365-consultant/" },
    //   { label: "Licensing & CSP", href: "/products/dynamics-365-business-central/pricing-licensing/" },
      { label: "Training", href: "/our-services/dynamics-365-training/" },
      { label: "Free D365 Health Check", href: "/free-dynamics-365-system-health-check/", isKey: true },
    ],
  },
  {
    id: "industries",
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/microsoft-cloud-for-manufacturing/" },
      { label: "Wholesale & Distribution", href: "/industries/dynamics-365-for-distribution/" },
      { label: "Retail", href: "/industries/dynamics-365-for-retail/" },
      { label: "Financial Services", href: "/industries/microsoft-cloud-for-financial-services/" },
      { label: "Professional Services", href: "/industries/professional-services/" },
      { label: "Healthcare", href: "/industries/dynamics-365-for-healthcare/" },
      { label: "Food & Beverage", href: "/industries/food-and-beverages/" },
      { label: "Not-for-Profit", href: "/industries/non-profits/" },
    ],
  },
  {
    id: "resources",
    title: "Tools & Resources",
    links: [
      { label: "Business Central Pricing", href: "/products/dynamics-365-business-central/pricing-licensing/", isKey: true },
      { label: "Dynamics 365 Guide", href: "/the-ultimate-guide-to-microsoft-dynamics-365/", isKey: true },
      { label: "ERP Cost Calculator", href: "/erp-implementation-cost-calculator/", isKey: true },
       {label: "EERP Comparison", href: "/top-erp-systems-comparison/", isKey: true },
      { label: "Business Central vs SAP B1", href: "/dynamics-365-business-central-vs-sap-business-one/" },
      { label: "Business Central vs Sage", href: "/blog/business-central-vs-sage-50/" },
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Blog", href: "/blog/" },
    ],
  },
  {
    id: "company",
    title: "Company & Support",
    links: [
      { label: "About Us", href: "/about-us/" },
      { label: "Our Partners", href: "/partner//" },
      { label: "Careers", href: "/careers/" },
      { label: "Contact Us", href: "/contact-us/" },
      { label: "Existing client support", href: "/support/", isKey: true },
    //   { label: "Raise a ticket", href: "/support/raise-a-ticket/" },
    ],
  },
];

const LOCATIONS = [
  {
    code: "UK",
    name: "United Kingdom",
    href: "/locations/united-kingdom/",
    city: "London",
    address: ["Kemp House, 124 City Road,", "London EC1V 2NX"],
    tel: "+44 203 769 7689",
     email: "info@dynamicssquare.co.uk",
  },
  {
    code: "US",
    name: "United States",
    href: "/locations/united-states/",
    city: "California",
    address: ["2372 Morse Ave, Ste.,", "310 Irvine, CA 92614"],
    tel: "+1 213 784 0845",
      email: "info@dynamicssquare.com",
  },
  {
    code: "CA",
    name: "Canada",
    href: "/locations/canada/",
    city: "Ontario",
    address: ["800 Steeles Ave. W. #B10155 Thornhill,", "ON. L4J 7L2"],
    tel: "+1 289 807 0740",
      email: "info@dynamicssquare.ca",
  },
];

const REGIONS = [
  { code: "UK", name: "United Kingdom", href: "https://www.dynamicssquare.co.uk/", current: true },
  { code: "US", name: "United States", href: "https://www.dynamicssquare.com/" },
  { code: "CA", name: "Canada", href: "https://www.dynamicssquare.ca/" },
];

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/showcase/dynamics-square-uk/", icon: "bi-linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@DynamicsSquare", icon: "bi-youtube" },
  { label: "X, formerly Twitter", href: "https://x.com/dsquare_uk", icon: "bi-twitter-x" },
  { label: "Facebook", href: "https://www.facebook.com/dynamicssquareuk/", icon: "bi-facebook" },
  { label: "Instagram", href: "https://www.instagram.com/dynamicssquareuk/", icon: "bi-instagram" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms of Use", href: "/terms-of-use/" },
  { label: "Cookie Policy", href: "/cookie-policy/" },
  { label: "Accessibility", href: "/accessibility/" },
  { label: "Modern Slavery Statement", href: "/modern-slavery-act/" },
  { label: "Sitemap", href: "/sitemap.xml/" },
];

/* Fires a GA4 event — wire into your existing GTM container / dataLayer */
function trackFooterLink(id, label, href) {
  if (typeof window === "undefined" || typeof window.dataLayer === "undefined") return;
  window.dataLayer.push({
    event: "footer_link_click",
    footer_link_id: id,
    footer_link_text: label,
    footer_link_url: href,
  });
}

/* ============================================================================
   COMPONENT
   ============================================================================ */

export default function FootComo() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [openCols, setOpenCols] = useState(() =>
    Object.fromEntries(NAV_COLUMNS.map((c) => [c.id, true]))
  );
  const [regionOpen, setRegionOpen] = useState(false);
  const regionRef = useRef(null);

  // Auto year (client only, avoids hydration mismatch)
  useEffect(() => setYear(new Date().getFullYear()), []);

  // Mobile accordions start closed under the lg breakpoint, always open above it
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 992px)");
    const sync = () => {
      if (mq.matches) {
        setOpenCols(Object.fromEntries(NAV_COLUMNS.map((c) => [c.id, true])));
      }
    };
    if (!mq.matches) {
      setOpenCols(Object.fromEntries(NAV_COLUMNS.map((c) => [c.id, false])));
    }
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Close region switcher on outside click / Escape
  useEffect(() => {
    function onClick(e) {
      if (regionRef.current && !regionRef.current.contains(e.target)) setRegionOpen(false);
    }
    function onKey(e) {
      if (e.key === "Escape") setRegionOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggleCol = (id) => setOpenCols((prev) => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <section id="services" className="services mo-top-30">
        <div className="container" data-aos="fade-up">
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="row bbb-colooer">
                <div className='col-lg-5 align-self-center'>
                  <div className='foot-tag-head'>
                    <h3>Let’s build the future of your business—together!</h3>
                    <p>The right technology can change everything, and Dynamics Square ensures your business gets the tools it needs to succeed. Take the first step towards smarter solutions now!</p>
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='fg-custom'>
                    <FormNewUIFooter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <footer className={styles.footer} role="contentinfo">
      {/* ---------- TIER 1: CONVERSION BAND ---------- */}
      <section className={styles.convert} aria-labelledby="ds-convert-title">
        <div className="container">
          <div className="row align-items-center gy-4 py-4 py-lg-5">
            <div className="col-12 col-lg-7">
              <span className={styles.eyebrow}>No cost, no obligation</span>
              <h2 className={styles.convertTitle} id="ds-convert-title">
                Still weighing up whether Dynamics 365 fits your business?
              </h2>
              <p className={styles.convertSub}>
                Spend 30 minutes with a certified consultant. You&rsquo;ll leave with a licence
                estimate, an implementation range, and a straight answer on fit.
              </p>
            </div>
            <div className="col-12 col-lg-5 d-flex flex-wrap gap-3 justify-content-lg-end">
              <Link
                href="/book-assessment/"
                className={`btn ${styles.btnPrimary}`}
                onClick={() => trackFooterLink("cta-assessment", "Book a free 30-min assessment", "/book-assessment/")}
              >
                Book a free 30-min assessment
              </Link>
              <Link
                href="/dynamics-365-business-central/pricing/"
                className={`btn ${styles.btnGhost}`}
                onClick={() => trackFooterLink("cta-pricing", "See Business Central pricing", "/dynamics-365-business-central/pricing/")}
              >
                See Business Central pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TIER 2: LINK GRID ---------- */}
      <div className="container">
        <div className="row gy-4 py-5">
          {/* Brand block */}
          <div className="col-12 col-lg-3">
            <Link href="/" className={styles.brandLogo} aria-label="Dynamics Square home">
              DYNAMICS <b>SQUARE</b>
              <sup aria-hidden="true">&trade;</sup>
            </Link>
            <p className={styles.brandPitch}>
              A Microsoft Solutions Partner delivering Dynamics 365, Business Central and Copilot
              across the UK, United States and Canada.
            </p>

            <div className={styles.contact}>
              <a
                href="tel:+442037697689"
                onClick={() => trackFooterLink("contact-phone", "+44 203 769 7689", "tel:+442037697689")}
              >
                <i className="bi bi-telephone" aria-hidden="true" />
                +44 203 769 7689
              </a>
              <a
                href="mailto:info@dynamicssquare.co.uk"
                onClick={() =>
                  trackFooterLink("contact-email", "info@dynamicssquare.co.uk", "mailto:info@dynamicssquare.co.uk")
                }
              >
                <i className="bi bi-envelope" aria-hidden="true" />
                info@dynamicssquare.co.uk
              </a>
            </div>

            <div className={styles.creds}>
              {/* [FILL] Replace with production badge asset */}
              <img
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner for Business Applications, with a Specialist designation in Small and Midsize Business Management"
                width={150}
                height={58}
                loading="lazy"
              />
              {/* [FILL] Swap for your live review platform + real counts */}
              <Link href="/reviews/" className={styles.credChip}>
                <i className="bi bi-star-fill" aria-hidden="true" /> 4.9/5 &middot; Full reviews
              </Link>
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLUMNS.map((col) => (
            <div className="col-md-4 col-lg" key={col.id}>
              <button
                type="button"
                className={styles.colHeader}
                onClick={() => toggleCol(col.id)}
                aria-expanded={openCols[col.id]}
                aria-controls={`ds-col-${col.id}`}
              >
                <span className={styles.colHead}>{col.title}</span>
                <i
                  className={`bi bi-chevron-down d-lg-none ${styles.chevron} ${
                    openCols[col.id] ? styles.chevronOpen : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`ds-col-${col.id}`}
                className={`${styles.colBody} ${openCols[col.id] ? styles.colBodyOpen : ""}`}
              >
                <nav aria-label={col.title}>
                  <ul className={styles.colLinks}>
                    {col.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={link.isKey ? styles.isKey : undefined}
                          onClick={() => trackFooterLink(`${col.id}-${link.label}`, link.label, link.href)}
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          ))}
        </div>
          <div className="row">
            <div className="col-md-12">
              <div className="award-ss" style={{justifyContent:'right',marginTop:'-10px'}}>
                <div>
                  <img
                    src="/img/Tech-For-Socil-Impact.svg"
                    alt="Tech-For-Socil-Impact"
                    width={200}
                    height={120}
                  />
                </div>
                <div>
                  <img
                    src="/img/UK-badge.png"
                    alt="UK badge"
                    width={88}
                    height={88}
                  />
                </div>
                <img
                  src="/img/ISO_9001-2015.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="90"
                  height="90"
                />
                <img
                  src="/img/ISO_9001-2015_2.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="90"
                  height="90"
                />
              </div>
            </div>
          </div> 
      </div>

      {/* ---------- TIER 2b: LOCATIONS ---------- */}
      <section className={`container ${styles.locations}`} aria-labelledby="ds-loc-title">
        <div className="d-flex flex-wrap align-items-baseline justify-content-between gap-3 mb-4">
          <h2 className={styles.colHead} id="ds-loc-title" style={{ margin: 0 }}>
            Where we operate
          </h2>
          <Link href="/contact-us/#contscroll" className={styles.topLink}>
            All locations &rarr;
          </Link>
        </div>
        <div className="row gy-3">
          {LOCATIONS.map((loc) => (
            <div className="col-12 col-md-4" key={loc.code}>
              <Link href={loc.href} className={styles.locCard}>
                <span className={styles.locRegion}>
                  <span className={styles.regionCode}>{loc.code}</span> {loc.name}
                </span>
                <address className={styles.locAddr}>
                  <strong>{loc.city}</strong>
                  {loc.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <span className={styles.locTel}>{loc.tel}</span>
                <span className={styles.email}>{loc.email}</span>
                </address>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- TIER 3: TRUST RIBBON ---------- */}
      <div className={styles.trust}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <div className={styles.facts}>
            <span>
              Company No. <b>10462699</b>
            </span>
            <span>
              VAT No. <b></b>
            </span>
            <span>
              Microsoft Partner ID <b></b>
            </span>
            <span>
              ISO 27001 &amp; 9001 certified <b></b>
            </span>
          </div>
          <ul className={styles.social} aria-label="Dynamics Square on social media">
            {SOCIAL_LINKS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={`Dynamics Square on ${s.label}`}
                  rel="noopener"
                  target="_blank"
                  onClick={() => trackFooterLink(`social-${s.label}`, s.label, s.href)}
                >
                  <i className={`bi ${s.icon}`} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- TIER 3: LEGAL ---------- */}
      <div className={styles.legal}>
        <div className="container d-flex flex-wrap align-items-center justify-content-between gap-3 py-3">
          <div className={styles.region} ref={regionRef}>
            <button
              type="button"
              className={styles.regionToggle}
              aria-label="Change region. Current region: United Kingdom"
              aria-expanded={regionOpen}
              onClick={() => setRegionOpen((v) => !v)}
            >
              <span className={styles.regionCode}>UK</span> United Kingdom
              <i
                className={`bi bi-chevron-down ${styles.chevron} ${regionOpen ? styles.chevronOpen : ""}`}
                aria-hidden="true"
              />
            </button>
            {regionOpen && (
              <div className={styles.regionMenu}>
                {REGIONS.map((r) => (
                  <a key={r.code} href={r.href} aria-current={r.current || undefined}>
                    <span className={styles.regionCode}>{r.code}</span> {r.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav className={styles.legalLinks} aria-label="Legal and policies">
            {LEGAL_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => trackFooterLink(`legal-${l.label}`, l.label, l.href)}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <span className={styles.copyright}>&copy; {year} Dynamics Square. All rights reserved.</span>

          <a
            className={styles.topLink}
            href="#top"
            onClick={() => trackFooterLink("back-to-top", "Back to top", "#top")}
          >
            <i className="bi bi-chevron-up" aria-hidden="true" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
    </>
  );
}
