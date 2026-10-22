import { useState } from "react";
import Link from "next/link";
import { INDUSTRY_TABS, INDUSTRY_FOOTER } from "./menuData";

/*
  Desktop Industries mega menu, same layout as canada-14's HeaderMegaMenu:
  a rail with the menu intro and vertical tabs, and the active tab's
  industries alongside it (with a footer CTA).
  Show/hide on hover comes from the existing .dropdown.megamenu rules.
*/
const IndustriesMegaMenu = () => {
  const [active, setActive] = useState(INDUSTRY_TABS[0].id);
  const tab = INDUSTRY_TABS.find((t) => t.id === active);
  const footer = INDUSTRY_FOOTER;

  return (
    <div className="megamenu-list ind-mega">
      <div className="ind-mega-rail">
        <div className="ind-mega-intro">
          <span className="ind-mega-kicker">Industries</span>
          <span className="ind-mega-title">Dynamics 365 built for the way your sector works</span>
        </div>
        <div className="ind-mega-tabs" role="tablist" aria-orientation="vertical">
          {INDUSTRY_TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              className={`ind-mega-tab${active === t.id ? " is-active" : ""}`}
              onMouseEnter={() => setActive(t.id)}
              onFocus={() => setActive(t.id)}
              onClick={() => setActive(t.id)}
            >
              <i className={`bi ${t.icon}`}></i>
              <span>{t.label}</span>
              <i className="bi bi-chevron-right ind-mega-tab-arrow"></i>
            </button>
          ))}
        </div>
      </div>

      <div className="ind-mega-main" role="tabpanel">
        <div className="ind-mega-head">
          <span className="ind-mega-sub">{tab.sub}</span>
          {tab.overview && (
            <Link className="ind-mega-all" href={tab.overview.href}>
              {tab.overview.label} <i className="bi bi-arrow-right"></i>
            </Link>
          )}
        </div>
        {INDUSTRY_TABS.map((t) => (
          <div key={t.id} className="ind-mega-grid" hidden={t.id !== active}>
            {t.items.map((item) => (
              <Link key={item.href} className="ind-mega-card" href={item.href}>
                <span className="ind-mega-icon">
                  <i className={`bi ${item.icon}`}></i>
                </span>
                <span className="ind-mega-text">
                  <span className="ind-mega-name">{item.title}</span>
                  <span className="ind-mega-desc">{item.desc}</span>
                </span>
              </Link>
            ))}
          </div>
        ))}
        {/* Pinned to the bottom of the panel, so short tabs don't leave a void. */}
        <span className="ind-mega-footer-gap" aria-hidden="true"></span>
        <Link className="ind-mega-footer" href={footer.href}>
          <span className="ind-mega-footer-icon">
            <i className={`bi ${footer.icon}`}></i>
          </span>
          <span className="ind-mega-footer-text">
            <span className="ind-mega-footer-title">{footer.title}</span>
            <span className="ind-mega-footer-desc">{footer.desc}</span>
          </span>
          <span className="ind-mega-footer-cta">
            {footer.cta} <i className="bi bi-arrow-right"></i>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default IndustriesMegaMenu;
