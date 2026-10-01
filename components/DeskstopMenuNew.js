import React from "react";
import PulseButton from "./PulseButton";
import {
  solutionMenu,
  industriesMenu,
  servicesMenu,
  companyMenu,
  resourcesMenu,
  resourcesFeaturedArticle,
} from "./menuData";

/* ---------- small reusable pieces ---------- */

const MegaMenuItem = ({ href, icon, title, desc }) => (
  <div className="col-md-6">
    <div className="list-itmes-maga-menu">
      <a href={href}>
        <div className="pic">
          <img src={icon} alt={title} width="48" height="48" />
        </div>
        <div className="content">
          <span>{title}</span>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  </div>
);

const SmallMegaMenuItem = ({ href, icon, title, desc }) => (
  <li>
    <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
      <a href={href}>
        <div className="pic">
          <img src={icon} alt={title} width="48" height="48" />
        </div>
        <div className="content">
          <span>{title}</span>
          <p>{desc}</p>
        </div>
      </a>
    </div>
  </li>
);

const FeaturedArticleCard = ({ data }) => (
  <div className="col-lg-3 d-flex">
    <div className="right-resource">
      <div className="res-top-co">
        <span className="n-tag">{data.tag}</span>
        <span className="n-title">{data.title}</span>
        <p>{data.para}</p>
        <div className="imag00">
          <img src={data.image} alt="Dynamics 365" width={106} height={90} />
        </div>
        <a href={data.href}>
          Read Article <i className="bi bi-arrow-right"></i>
        </a>
      </div>
      <div className="res-top-bo">
        <a style={{ padding: "0px" }} href={data.bannerHref}>
          <img src={data.bannerImage} width={706} height={180} alt="AI" />
        </a>
      </div>
    </div>
  </div>
);

/* ---------- Resources tab content, one renderer per type ---------- */

const BlogsTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-9 bg-0-gray-t">
        <div className="row bg-0-gray">
          {tab.columns.map((col) => (
            <div className="col-lg-3" key={col.heading}>
              <div className="mega-list-01">
                <span>{col.heading}</span>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="col-lg-6">
            <div className="mega-list-01">
              <span>{tab.editorsPicks.heading}</span>
              <ul>
                {tab.editorsPicks.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <FeaturedArticleCard data={resourcesFeaturedArticle} />
    </div>
  </div>
);

const CaseStudyTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-9 bg-0-gray-t">
        <div className="row bg-0-gray">
          <div className="col-lg-4">
            <div className="mega-list-01">
              <span>Browse by Service</span>
              <ul className="res-st-oo1">
                {tab.services.map((s) => (
                  <li key={s.title}>
                    <a href={s.href}>
                      <div className="ccc-img">
                        <i className={`bi ${s.icon}`}></i>
                      </div>
                      <div className="ccc-card">
                        <span>{s.title}</span>
                        <p>{s.desc}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mega-list-01">
              <span>{tab.highlights.heading}</span>
              <ul>
                {tab.highlights.links.map((l) => (
                  <li key={l.label}>
                    <a style={l.highlighted ? { color: "#8E44AD" } : undefined} href={l.href}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="extra-res-link">
                <a href={tab.highlights.exploreHref}>
                  {tab.highlights.exploreLabel} <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedArticleCard data={resourcesFeaturedArticle} />
    </div>
  </div>
);

const EbooksTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-3 d-flex bg-0-gray-t">
        <div className="res-card-99">
          <span className="n-tags">{tab.recommended.tag}</span>
          <a className="n-tag-link" href={tab.recommended.href}>
            <img className="n-tags-image" src={tab.recommended.image} width={582} height={466} alt={tab.recommended.title} />
          </a>
          <span className="n-tag-title">{tab.recommended.title}</span>
          <p className="n-tag-para">{tab.recommended.desc}</p>
          <a className="n-tag-link" href={tab.recommended.href}>
            {tab.recommended.cta} <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
      <div className="col-lg-9 bg-0-gray-t">
        <div className="guide-cardwar">
          <span className="pop-res-title">{tab.popularHeading}</span>
        </div>
        <div className="res-flex-wrap">
          {tab.items.map((item) => (
            <div className="guide-card-01" key={item.title}>
              <a href={item.href}>
                <div className="guide-card-imag">
                  <img width={980} height={578} src={item.image} alt={item.title} />
                </div>
                <div className="guide-card-inf">
                  <span className="guide-card-title">{item.title}</span>
                  <span className="guide-card-para">{item.desc}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="comm-links-b">
          <a className="n-tag-link" href={tab.viewAllHref}>
            {tab.viewAllLabel} <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const GuideBlock = ({ block, extraClass }) => (
  <div className={extraClass}>
    <div className="guide-cardwar">
      <span className="pop-res-title">{block.heading}</span>
      <p className="pop-res-title-p">{block.subheading}</p>
    </div>
    <div className="res-flex-wrap-one">
      {block.items.map((item) => (
        <div className="guide-card-01" key={item.title}>
          <a href={item.href}>
            <div className="guide-card-imag">
              <img width={1200} height={628} src={item.image} alt={item.title} />
            </div>
            <div className="guide-card-inf">
              <span className="guide-tags-rss">{item.tag}</span>
              <span className="guide-card-title">{item.title}</span>
            </div>
          </a>
        </div>
      ))}
    </div>
    <div className="comm-links-b">
      <a className="n-tag-link" href={block.viewAllHref}>
        {block.viewAllLabel} <i className="bi bi-arrow-right"></i>
      </a>
    </div>
  </div>
);

const GuidesTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-9 d-flex bg-0-gray-t">
        <div className="row bg-0-gray">
          <div className="col-lg-6">
            <GuideBlock block={tab.guides} extraClass="resor-bord" />
          </div>
          <div className="col-lg-6">
            <GuideBlock block={tab.whitepapers} extraClass="resor-bords" />
          </div>
        </div>
      </div>
      <FeaturedArticleCard data={resourcesFeaturedArticle} />
    </div>
  </div>
);

const ToolsTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-9 d-flex bg-0-gray-t">
        <div className="row bg-0-gray align-content-start">
          <div className="col-12">
            <div className="resor-bord tools-head">
              <div className="guide-cardwar">
                <span className="pop-res-title">{tab.heading}</span>
                <p className="pop-res-title-p">{tab.subheading}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="resor-bords">
              <div className="res-flex-wrap-one">
                {tab.items.map((item) => (
                  <div className="guide-card-01" key={item.title}>
                    <a href={item.href}>
                      <div className="guide-card-imag">
                        <img width={980} height={578} src={item.image} alt={item.tag} />
                      </div>
                      <div className="guide-card-inf">
                        <span className="guide-tags-rss">{item.tag}</span>
                        <span className="guide-card-title">{item.title}</span>
                        <a className="n-tag-link" href={item.href}>
                          {item.cta} <i className="bi bi-arrow-right"></i>
                        </a>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FeaturedArticleCard data={resourcesFeaturedArticle} />
    </div>
  </div>
);

const WebcastsTabContent = ({ tab }) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-lg-12 bg-0-gray-t">
        <div className="guide-cardwar">
          <span className="pop-res-title">{tab.heading}</span>
          <p className="pop-res-title-p">{tab.subheading}</p>
        </div>
        <div className="res-flex-wrap">
          {tab.items.map((item) => (
            <div className="guide-card-01" key={item.title}>
              <a target="_blank" rel="noreferrer" href={item.href}>
                <div className="guide-card-imag">
                  <img width={411} height={216} src={item.image} alt="potcast" />
                </div>
                <div className="guide-card-inf">
                  <span className="guide-card-title">{item.title}</span>
                  <span className="guide-card-para">{item.desc}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
        <div className="comm-links-b">
          <a className="n-tag-link" target="_blank" rel="noreferrer" href={tab.viewAllHref}>
            {tab.viewAllLabel} <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
);

const RESOURCE_RENDERERS = {
  blogs: BlogsTabContent,
  caseStudy: CaseStudyTabContent,
  ebooks: EbooksTabContent,
  guides: GuidesTabContent,
  tools: ToolsTabContent,
  webcasts: WebcastsTabContent,
};

/* ---------- main component ---------- */

const DeskstopMenuNew = () => {
  return (
    <>
      <ul>
        {/* Solution mega menu */}
        <li className="dropdown megamenu megamenu-new">
          <a href="#">
            <span>Solution</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list">
            <div className="left-list d-flex">
              <div className="d-flex">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  {solutionMenu.tabs.map((tab, i) => (
                    <div
                      key={tab.id}
                      className={`nav-link${i === 0 ? " active" : ""}`}
                      id={`v-pills-${tab.id}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#v-pills-${tab.id}`}
                      aria-selected={i === 0 ? undefined : "false"}
                    >
                      <a href="#">
                        <span>{tab.label}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                  {solutionMenu.tabs.map((tab, i) => (
                    <div
                      key={tab.id}
                      className={`tab-pane${i === 0 ? "" : " cc-height"} fade${i === 0 ? " show active" : ""}`}
                      id={`v-pills-${tab.id}`}
                    >
                      <div className="container">
                        <div className="row g-1">
                          {tab.items.map((item) => (
                            <MegaMenuItem key={item.title} {...item} />
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
                <p>{solutionMenu.essentialTool.heading}</p>
                <ul>
                  {solutionMenu.essentialTool.items.map((item) => (
                    <li key={item.title}>
                      <a href={item.href}>
                        <span className="menu-title-new">{item.title}</span>
                        <span className="menu-title-para">{item.para}</span>
                        <span className="menu-title-link">
                          {item.cta} <i className="bi bi-arrow-right"></i>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                {solutionMenu.promos.map((promo) => (
                  <div className="pp-absol" style={{ marginTop: "2px" }} key={promo.image}>
                    <a
                      rel={promo.rel}
                      href={promo.href}
                      target={promo.external ? "_blank" : undefined}
                    >
                      <img src={promo.image} width={promo.width} height={promo.height} alt="menu--ss" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>

        {/* Industries */}
        <li className="dropdown dropdown-smal-mega">
          <a href="/industries/">
            <span>Industries</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            {industriesMenu.map((item) => (
              <SmallMegaMenuItem key={item.title} {...item} />
            ))}
          </ul>
        </li>

        {/* Our Services */}
        <li className="dropdown">
          <a href="/our-services/">
            <span>Our Services</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            {servicesMenu.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </li>

        {/* Company */}
        <li className="dropdown">
          <a href="#">
            <span>Company</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            {companyMenu.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </li>

        {/* Resources mega menu */}
        <li className="dropdown megamenu">
          <a href="#">
            <span>Resources</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list megamenu-list-resource">
            <div className="left-list">
              <div className="d-flex align-items-start">
                <div className="nav flex-column nav-pills me-3" id="v-pills-tab-two" role="tablist" aria-orientation="vertical">
                  {resourcesMenu.tabs.map((tab, i) => (
                    <div
                      key={tab.id}
                      className={`nav-link${i === 0 ? " active" : ""}`}
                      id={`v-pills-${tab.id}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#v-pills-${tab.id}`}
                    >
                      <a href="#">
                        <img src={tab.icon} alt={tab.label} width="24" height="24" />
                        <span>{tab.label}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                  {resourcesMenu.tabs.map((tab, i) => {
                    const Renderer = RESOURCE_RENDERERS[tab.type];
                    return (
                      <div
                        key={tab.id}
                        className={`tab-pane fade${i === 0 ? " show active" : ""}`}
                        id={`v-pills-${tab.id}`}
                      >
                        <Renderer tab={tab} />
                      </div>
                    );
                  })}
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

export default DeskstopMenuNew;
