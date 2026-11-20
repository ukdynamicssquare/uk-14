import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PulseButton from "./PulseButton";
import ColumnMegaMenu from "./ColumnMegaMenu";
import {
  SOLUTION_TABS,
  SOLUTION_PANELS,
  INDUSTRY_MENU,
  SERVICE_MENU,
  COMPANY_MENU,
  RESOURCE_TABS,
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
  Same markup, classes, and Bootstrap data-bs-* attributes as before —
  the repetitive list items are generated from data arrays imported
  from menuData.js (the single source of truth shared with
  MobileMenu.js), so adding/editing a nav entry means editing one line
  of data instead of a whole card block, and it updates both menus.
*/

/* ===================== small shared renderers ===================== */

function ItemCard({ item, small }) {
  return (
    <div className={`list-itmes-maga-menu${small ? " list-itmes-maga-menu-small" : ""}`}>
      <Link href={item.href}>
        <div className="pic">
          <Image src={item.img} alt={item.alt} width={48} height={48} />
        </div>
        <div className="content">
          <span>{item.title}</span>
          <p>{item.desc}</p>
        </div>
        <i className="bi bi-chevron-right mm-chevron"></i>
      </Link>
    </div>
  );
}

function FeaturedArticle() {
  return (
    <div className="right-resource">
      <div className="res-top-co">
        <span className="n-tag">Featured Article</span>
        <span className="n-title">How Much Time Can Copilot Save in Dynamics 365 Business Central?</span>
        <p>Discover how much time Copilot saves in Dynamics 365 Business Central by automating...</p>
        <div className="imag00">
          <Image src="/img/menu-icons/pic-006.png" alt="Dynamics 365" width={106} height={90} />
        </div>
        <Link href="/blog/copilot-business-central-time-savings/">Read Article <i className="bi bi-arrow-right"></i></Link>
      </div>
      <div className="res-top-bo">
        <Link style={{ padding: "0px" }} href="/products/dynamics-365-copilot/">
          <Image src="/img/menu--ss.png" width={706} height={180} alt="AI" sizes="320px" />
        </Link>
      </div>
    </div>
  );
}

const DeskstopMenu = () => {
  // Solution and Resources tabs switch on hover; clicking a tab opens its core page.
  const [activeSol, setActiveSol] = useState(
    (SOLUTION_TABS.find((t) => t.active) || SOLUTION_TABS[0]).target
  );
  const [activeRes, setActiveRes] = useState(
    (RESOURCE_TABS.find((t) => t.active) || RESOURCE_TABS[0]).target
  );
  const resPane = (target) => `tab-pane fade${activeRes === target ? " show active" : ""}`;

  return (
    <>
      <ul>
        {/* ===================== SOLUTION ===================== */}
        <li className="dropdown megamenu megamenu-new">
          <a href="#">
            <span>Solution</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list">
            <div className="left-list d-flex">
              <div className="d-flex">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {SOLUTION_TABS.map((tab) => (
                    <div
                      key={tab.id}
                      className={`nav-link${activeSol === tab.target ? " active" : ""}`}
                      id={`${tab.target}-tab`}
                      role="tab"
                      aria-selected={activeSol === tab.target}
                      onMouseEnter={() => setActiveSol(tab.target)}
                      onFocus={() => setActiveSol(tab.target)}
                    >
                      {tab.href && tab.href !== "#" ? (
                        <Link href={tab.href}>
                          <span>{tab.label}</span>
                        </Link>
                      ) : (
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <span>{tab.label}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  {SOLUTION_TABS.map((tab) => (
                    <div
                      key={tab.id}
                      className={`tab-pane${tab.id === "addon" || tab.id === "CRM" ? " cc-height" : ""} fade${activeSol === tab.target ? " show active" : ""}`}
                      id={tab.target}
                    >
                      <div className="container">
                        <div className="row g-1">
                          {SOLUTION_PANELS[tab.id].map((item) => (
                            <div className="col-md-6" key={item.href}>
                              <ItemCard item={item} />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-list d-flex ">
              <div className="rigt-list-menu rigt-list-menu-new p-relativ">
                <p>Essential Tool</p>
                <ul>
                  <li>
                    <Link href="/tools/erp-implementation-cost-calculator/">
                      <span className="menu-title-new">
                        Get Your ERP Cost Estimate
                      </span>
                      <span className="menu-title-para">
                        Quick, free, and tailored to your business.
                      </span>
                      <span className="menu-title-link">
                        Check Now <i className="bi bi-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
                <div className="pp-absol" style={{ marginTop: "2px" }}>
                  <a rel="nofollow" href="https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35" target="_blank">
                    <Image src="/img/forber-01.png" width={771} height={282} alt="menu--ss" sizes="320px" />
                  </a>
                </div>
                <div className="pp-absol" style={{ marginTop: "2px" }}>
                  <Link href="/products/dynamics-365-copilot/">
                    <Image src="/img/menu--ss.png" width={706} height={180} alt="menu--ss" sizes="320px" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* ===================== INDUSTRIES ===================== */}
        <li className="dropdown megamenu ind-megamenu">
          <Link href="/industries/">
            <span>Industries</span> <i className="bi bi-chevron-down"></i>
          </Link>
          <ColumnMegaMenu menu={INDUSTRY_MENU} />
        </li>

        {/* ===================== OUR SERVICES ===================== */}
        <li className="dropdown megamenu ind-megamenu">
          <Link href="/our-services/">
            <span>Our Services</span>
            <i className="bi bi-chevron-down"></i>
          </Link>
          <ColumnMegaMenu menu={SERVICE_MENU} />
        </li>

        {/* ===================== COMPANY ===================== */}
        <li className="dropdown megamenu ind-megamenu">
          <a href="#">
            <span>Company</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ColumnMegaMenu menu={COMPANY_MENU} />
        </li>

        {/* ===================== RESOURCES ===================== */}
        <li className="dropdown megamenu">
          <a href="#">
            <span>Resources</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list megamenu-list-resource">
            <div className="left-list">
              <div className="d-flex align-items-start">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab-two"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  {RESOURCE_TABS.map((tab) => (
                    <div
                      key={tab.id}
                      className={`nav-link${activeRes === tab.target ? " active" : ""}`}
                      id={`${tab.target}-tab`}
                      role="tab"
                      aria-selected={activeRes === tab.target}
                      onMouseEnter={() => setActiveRes(tab.target)}
                      onFocus={() => setActiveRes(tab.target)}
                    >
                      {tab.href ? (
                        <Link href={tab.href}>
                          <Image src={tab.icon} alt={tab.label} width={24} height={24} />
                          <span>{tab.label}</span>
                        </Link>
                      ) : (
                        <a href="#" onClick={(e) => e.preventDefault()}>
                          <Image src={tab.icon} alt={tab.label} width={24} height={24} />
                          <span>{tab.label}</span>
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                  {/* ---------- Blogs ---------- */}
                  <div className={resPane("v-pills-res-one")} id="v-pills-res-one">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-9 bg-0-gray-t">
                          <div className="row bg-0-gray">
                            <div className="col-lg-3">
                              <div className="mega-list-01">
                                <span>By product</span>
                                <ul>
                                  {BLOG_BY_PRODUCT.map((l, i) => (
                                    <li key={i}><Link href={l.href}>{l.label}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-3">
                              <div className="mega-list-01">
                                <span>By Industry</span>
                                <ul>
                                  {BLOG_BY_INDUSTRY.map((l, i) => (
                                    <li key={i}><Link href={l.href}>{l.label}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mega-list-01">
                                <span>Editor's Picks</span>
                                <ul>
                                  {BLOG_EDITORS_PICKS.map((l, i) => (
                                    <li key={i}><Link href={l.href}>{l.label}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <Link style={{ padding: "10px 0px !important" }} className="n-tag-link" href="/blog/">View All Blogs <i className="bi bi-arrow-right"></i></Link>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 d-flex">
                          <FeaturedArticle />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Case Studies ---------- */}
                  <div className={resPane("v-pills-res-two")} id="v-pills-res-two">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-9 bg-0-gray-t">
                          <div className="row bg-0-gray">
                            <div className="col-lg-4">
                              <div className="mega-list-01">
                                <span>Browse by Service</span>
                                <ul className="res-st-oo1">
                                  {CASE_STUDY_SERVICES.map((s) => (
                                    <li key={s.href}>
                                      <Link href={s.href}>
                                        <div className="ccc-img">
                                          <i className={`bi ${s.icon}`}></i>
                                        </div>
                                        <div className="ccc-card">
                                          <span>{s.title}</span>
                                          <p>{s.desc}</p>
                                        </div>
                                        <i className="bi bi-chevron-right mm-chevron"></i>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="mega-list-01">
                                <span>Customer Success Highlights</span>
                                <ul>
                                  {CASE_STUDY_HIGHLIGHTS.map((l) => (
                                    <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                                  ))}
                                </ul>
                                <div className="extra-res-link">
                                  <Link href="/case-studies/">Explore Customer Stories <i className="bi bi-arrow-right"></i></Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 d-flex">
                          <FeaturedArticle />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------- eBooks ---------- */}
                  <div className={resPane("v-pills-res-three")} id="v-pills-res-three">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 d-flex  bg-0-gray-t">
                          <div className="res-card-99">
                            <span className="n-tags">Recommended</span>
                            <Link className="n-tag-link" href="/ebook/how-to-choose-right-erp/">
                              <Image className="n-tags-image" src="/img/Cover_Book_Moc.png" width={582} height={466} alt="Cover_Book_Moc" sizes="220px" />
                            </Link>
                            <span className="n-tag-title">Ultimate ERP Guide for Your Business</span>
                            <p className="n-tag-para">Compare ERP solutions before investing</p>
                            <Link className="n-tag-link" href="/ebook/how-to-choose-right-erp/">Get Free eBook <i className="bi bi-arrow-right"></i></Link>
                          </div>
                        </div>
                        <div className="col-lg-9 bg-0-gray-t">
                          <div className="guide-cardwar">
                            <span className="pop-res-title">Popular eBooks</span>
                          </div>
                          <div className="res-flex-wrap">
                            {POPULAR_EBOOKS.map((b) => (
                              <div className="guide-card-01" key={b.href}>
                                <Link href={b.href}>
                                  <div className="guide-card-imag">
                                    <Image width={980} height={578} src={b.img} alt={b.alt} sizes="260px" />
                                  </div>
                                  <div className="guide-card-inf">
                                    <span className="guide-card-title">{b.title}</span>
                                    <span className="guide-card-para">{b.desc}</span>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                          <div className="comm-links-b">
                            <Link className="n-tag-link" href="/ebook/">View All eBooks <i className="bi bi-arrow-right"></i></Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Guides ---------- */}
                  <div className={resPane("v-pills-res-four")} id="v-pills-res-four">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-9 d-flex bg-0-gray-t">
                          <div className="row bg-0-gray">
                            <div className="col-lg-6">
                              <div className="resor-bord">
                                <div className="guide-cardwar">
                                  <span className="pop-res-title">Guides</span>
                                  <p className="pop-res-title-p">Learn before you implement</p>
                                </div>
                                <div className="res-flex-wrap-one">
                                  {GUIDES.map((g) => (
                                    <div className="guide-card-01" key={g.href}>
                                      <Link href={g.href}>
                                        <div className="guide-card-imag">
                                          <Image width={1200} height={628} src={g.img} alt={g.alt} sizes="260px" />
                                        </div>
                                        <div className="guide-card-inf">
                                          {/* <span className="guide-tags-rss">{g.tag}</span> */}
                                          <span className="guide-card-title">{g.title}</span>
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                                <div className="comm-links-b">
                                  <Link className="n-tag-link" href="/guides/">Explore All Guides <i className="bi bi-arrow-right"></i></Link>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="resor-bords">
                                {/* Same card + sub-link list as the Manufacturing entry in ColumnMegaMenu.js */}
                                <div className="ind-mega">
                                  <div className="ind-mega-item">
                                    <Link className="ind-mega-card" href="/white-papers/">
                                      <span className="ind-mega-icon">
                                        <i className="bi bi-file-earmark-text"></i>
                                      </span>
                                      <span className="ind-mega-text">
                                        <span className="ind-mega-name">Whitepapers</span>
                                        <span className="ind-mega-desc">Strategic resources for decision makers</span>
                                      </span>
                                      <i className="bi bi-chevron-right ind-mega-chevron"></i>
                                    </Link>
                                    <ul className="ind-mega-sublinks">
                                      {WHITEPAPERS.map((w) => (
                                        <li key={w.href}>
                                          <Link href={w.href}>{w.title}</Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 d-flex">
                          <FeaturedArticle />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Tools ---------- */}
                  <div className={resPane("v-pills-res-five")} id="v-pills-res-five">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-9 d-flex bg-0-gray-t">
                          <div className="row bg-0-gray align-content-start">
                            <div className="col-12">
                              <div className="resor-bord tools-head">
                                <div className="guide-cardwar">
                                  <span className="pop-res-title">TOOLS</span>
                                  <p className="pop-res-title-p">Estimate costs, compare solutions, and choose the right Microsoft Dynamics 365 platform with confidence.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="resor-bords">
                                <div className="res-flex-wrap-one">
                                  {TOOLS.map((t) => (
                                    <div className="guide-card-01" key={t.href}>
                                      <Link href={t.href}>
                                        <div className="guide-card-imag">
                                          <Image width={980} height={578} src={t.img} alt="guide" sizes="260px" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-tags-rss">{t.tag}</span>
                                          <span className="guide-card-title">{t.title}</span>
                                          <span className="n-tag-link">{t.cta} <i className="bi bi-arrow-right"></i></span>
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 d-flex">
                          <FeaturedArticle />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ---------- Webcasts ---------- */}
                  <div className={resPane("v-pills-res-six")} id="v-pills-res-six">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12 bg-0-gray-t">
                          <div className="guide-cardwar">
                            <span className="pop-res-title">WEBCASTS</span>
                            <p className="pop-res-title-p">Your go-to source for expert insights on CRM, ERP, and business transformation powered by Microsoft Dynamics 365</p>
                          </div>
                          <div className="res-flex-wrap">
                            {WEBCASTS.map((w) => (
                              <div className="guide-card-01" key={w.href}>
                                <a target="_blank" href={w.href} rel="noreferrer">
                                  <div className="guide-card-imag">
                                    <Image width={411} height={216} src={w.img} alt="podcast" sizes="260px" />
                                  </div>
                                  <div className="guide-card-inf">
                                    <span className="guide-card-title">{w.title}</span>
                                    <span className="guide-card-para">{w.desc}</span>
                                  </div>
                                </a>
                              </div>
                            ))}
                          </div>
                          <div className="comm-links-b">
                            <a className="n-tag-link" target="_blank" href="https://www.youtube.com/@DynamicsSquare" rel="noreferrer">View All Podcasts <i className="bi bi-arrow-right"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li>
          <PulseButton />
        </li>
      </ul>
    </>
  );
};

export default DeskstopMenu;
