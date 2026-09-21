import React from "react";
import Link from "next/link";
import PulseButton from "./PulseButton";

/*
  Same markup, classes, and Bootstrap data-bs-* attributes as before —
  only the repetitive list items are now generated from data arrays
  instead of hand-written JSX, so adding/editing a nav entry means
  editing one line of data instead of a whole card block. No visual or
  behavioral change: output HTML is the same as the previous version.
*/

const SOLUTION_TABS = [
  { id: "home", target: "v-pills-home", label: "Company By Size", active: true },
  { id: "addon", target: "v-pills-addon", label: "AI-Powered ERP" },
  { id: "CRM", target: "v-pills-CRM", label: "AI-Powered CRM" },
  { id: "settingss", target: "v-pills-settingss", label: "Integrations", href: "#" },
  { id: "profile", target: "v-pills-profile", label: "Data & AI Solutions" },
  { id: "settings", target: "v-pills-settings", label: "Legacy Dynamics", href: "#" },
  { id: "power", target: "v-pills-power", label: "AI-Intelligent Apps", href: "#" },
];

const SOLUTION_PANELS = {
  home: [
    { href: "/erp-for-startups/", img: "/img/menu-icons/store.png", alt: "azure", title: "Startup", desc: "Smart ERP solutions to kickstart your growth" },
    { href: "/dynamics-365-for-small-businesses/", img: "/img/menu-icons/storefront.png", alt: "mixed-Reality-icons", title: "Small Business", desc: "Simplifying business for small, ambitious teams" },
    { href: "/dynamics-365-for-medium-businesses/", img: "/img/menu-icons/group-3535.png", alt: "AI", title: "Mid Size", desc: "Powering growth for mid-sized businesses." },
    { href: "/dynamics-365-for-large-businesses/", img: "/img/menu-icons/factory.png", alt: "AI", title: "Enterprise", desc: "Advanced ERP solutions for large, global enterprises" },
  ],
  addon: [
    { href: "/products/dynamics-365-business-central/", img: "/img/menu-icons/dynamics-365-businesscentral.svg", alt: "dynamics-365-businesscentral", title: "Business Central", desc: "All-in-one solution for all your business practices" },
    { href: "/products/microsoft-dynamics-365-finance/", img: "/img/menu-icons/dynamics-365-finance.svg", alt: "dynamics-365-finance", title: "Finance", desc: "Improve your finance practices" },
    { href: "/products/dynamics-365-supply-chain-management/", img: "/img/menu-icons/dynamics-365-supplychainmanagement.svg", alt: "dynamics-365-supplychainmanagement", title: "Supply Chain", desc: "Optimize operations and drive agile Supply Chain" },
    { href: "/products/dynamics-365-human-resources/", img: "/img/menu-icons/dynamics-365-HRM.svg", alt: "dynamics-365-HRM", title: "Human Resource", desc: "Optimize Your Resource Utilization" },
    { href: "/products/microsoft-dynamics-365-commerce/", img: "/img/menu-icons/dynamics-365-commerce.svg", alt: "dynamics-365-commerce", title: "Commerce", desc: "Unify Your Back-Office, In-Store, And Digital Experience" },
    { href: "/products/dynamics-365-project-operations/", img: "/img/menu-icons/dynamics-365-project-management.svg", alt: "dynamics-365-project-management", title: "Project Operations", desc: "Automate and streamline your projects" },
  ],
  CRM: [
    { href: "/products/microsoft-dynamics-365-sales/", img: "/img/menu-icons/dynamics-365-sales.svg", alt: "dynamics-365-sales", title: "Sales", desc: "Drive end-to-end sales practices" },
    { href: "/products/microsoft-dynamics-365-marketing/", img: "/img/menu-icons/dynamics-365-marketing.svg", alt: "dynamics-365-marketing", title: "Marketing", desc: "Maximize ROI with integrated Marketing" },
    { href: "/products/microsoft-dynamics-365-field-service/", img: "/img/menu-icons/dynamics-365-fieldservice.svg", alt: "dynamics-365-fieldservice", title: "Field Service", desc: "Drive connected and collaborated field service" },
    { href: "/products/microsoft-dynamics-365-customer-service/", img: "/img/menu-icons/dynamics-365-customer-service.svg", alt: "dynamics-365-customer-service", title: "Customer Service", desc: "Drive omnichannel customer experience" },
    { href: "/products/dynamics-365-customer-engagement/", img: "/img/menu-icons/dynamics-365-customer-engagement.svg", alt: "dynamics-365-customer-engagement", title: "Customer Engagement", desc: "Transform Your Marketing Operations" },
  ],
  profile: [
     { href: "/ai-solutions/microsoft-fabric/", img: "/img/menu-icons/microsoft-fabric.png", alt: "microsoft-fabric", title: "Microsoft Fabric", desc: "Transform Data with Microsoft Fabric Solutions" },
    { href: "/products/microsoft-power-bi/", img: "/img/menu-icons/power-bi.svg", alt: "power-bi", title: "Power BI", desc: "Create powerful visual insights, analytics" },
     { href: "/products/dynamics-365-copilot/", img: "/img/menu-icons/copilate-small.png", alt: "D365 Copilot", title: "D365 Copilot", desc: "AI-powered assistance to automate tasks and improve decisions" },
     { href: "products/azure-machine-learning/", img: "/img/menu-icons/machine-learning.svg", alt: "Machine Learning / Azure", title: "Machine Learning / Azure", desc: "Build scalable enterprise-grade Machine Learning solutions" },
  ],
  settings: [
    { href: "/products/microsoft-dynamics-nav/", img: "/img/menu-icons/NAV.png", alt: "NAV", title: "Dynamics NAV", desc: "A flexible ERP solution for SMBs" },
    { href: "/products/microsoft-dynamics-crm/", img: "/img/menu-icons/CRM.png", alt: "CRM", title: "Dynamics CRM", desc: "Increase Revenue and Customer Satisfaction" },
    { href: "/products/microsoft-dynamics-ax/", img: "/img/menu-icons/AX.png", alt: "AX", title: "Dynamics AX", desc: "The Most Complete, Agile And Powerful ERP" },
    { href: "/products/microsoft-dynamics-gp/", img: "/img/menu-icons/GP.png", alt: "GP", title: "Dynamics GP", desc: "Accounting software designed for SMEs" },
    { href: "/products/microsoft-dynamics-erp/", img: "/img/menu-icons/ERP.png", alt: "GP", title: "Dynamics ERP", desc: "Streamline Entire Business Management with Ease" },
    { href: "/products/microsoft-dynamics-365-finance-operations/", img: "/img/menu-icons/F&Q.png", alt: "GP", title: "Dynamics F&O", desc: "Accelerate your Finance and Inventory more Efficiently" },
  ],
  settingss: [
    { href: "/continia-for-dynamics-365-business-central/", img: "/img/menu-icons/continia.png", alt: "continia", title: "Continia integration", desc: "Scan, analyse, and process documents with optimum quality" },
    { href: "/insights-works-for-dynamics-365-business-central/", img: "/img/menu-icons/Insight_Work.png", alt: "Insight_Work", title: "Insight Works", desc: "Optimise your inventory and distribution operations effortlessly" },
    { href: "/sana-commerce-for-dynamics-365-business-central/", img: "/img/menu-icons/Sana_Commerce.png", alt: "Sana_Commerce", title: "Sana Commerce", desc: "Avail a cloud e-commerce solution to supercharge your online store" },
    { href: "/wms-for-business-central/", img: "/img/menu-icons/taskley-logo-im.png", alt: "Sana_Commerce", title: "Tasklet's Mobile WMS", desc: "Optimize warehouse operations, simplify inventory, boost profits" },
    { href: "/continia-document-capture-with-business-central/", img: "/img/menu-icons/continia.png", alt: "Sana_Commerce", title: "Continia OCR", desc: "Transform document management, streamline processing, manage easily" },
    { href: "/continia-expense-management/", img: "/img/menu-icons/continia.png", alt: "Sana_Commerce", title: "Continia Expense Management ", desc: "Monitor corporate expenses, eliminate manual errors with Continia" },
    { href: "/shopify-connector-business-central/", img: "/img/menu-icons/shopify-integration-logo.svg", alt: "shopify-integration-logo", title: "Shopify Connector", desc: "Synchronize orders, inventory, and customers across platforms" },
    { href: "/yavrio-integration-with-business-central/", img: "/img/menu-icons/image-541.png", alt: "yavrio-integration-logo", title: "Yavrio Integration", desc: "Connect banking data to ERP for automated workflows" },
  ],
    power: [
     { href: "/products/microsoft-power-apps/", img: "/img/menu-icons/power-apps.svg", alt: "power-apps", title: "Power Apps", desc: "Build web & mobile apps with zero or minimal code" },
    { href: "/products/microsoft-power-automate/", img: "/img/menu-icons/power-automate.svg", alt: "power-automate", title: "Power Automate", desc: "Automate your processes to improve workflows" },
    { href: "/products/microsoft-power-virtual-agents/", img: "/img/menu-icons/virtual agent.svg", alt: "virtual agent", title: "Power Virtual Agents", desc: "Create powerful AI Bots to maximize productivity" },
  ],
};

const INDUSTRIES = [
  { href: "/industries/dynamics-365-for-distribution/", img: "/img/menu-icons/distribution-truck.png", alt: "MAnufacturing", title: "Distribution", desc: "Drive seamless supply flow with connected operations " },
  { href: "/industries/microsoft-cloud-for-manufacturing/", img: "/img/menu-icons/MAnufacturing.png", alt: "MAnufacturing", title: "Manufacturing", desc: "Connect your people and operations to drive profitability" },
  { href: "/industries/dynamics-365-for-education/", img: "/img/menu-icons/education.png", alt: "education", title: "Education", desc: "Effectively manage students and staff for overall growth" },
  { href: "/industries/ecommerce/", img: "/img/menu-icons/E-commerce.png", alt: "E-commerce", title: "Ecommerce", desc: "Optimise E-commerce processes with real-time stocks" },
  { href: "/industries/professional-services/", img: "/img/menu-icons/Professional-ervice.png", alt: "Professional-ervice", title: "Professional Services", desc: "Streamline administration processes leveraging automation" },
  { href: "/industries/food-and-beverages/", img: "/img/menu-icons/Food.png", alt: "Food", title: "Food & Beverages", desc: "Manage supply and inventory processes with real-time data" },
  { href: "/industries/dynamics-365-for-healthcare/", img: "/img/menu-icons/healthcare.png", alt: "healthcare", title: "Healthcare", desc: "Track clinical operations while enhancing patient experience" },
  { href: "/industries/dynamics-365-for-retail/", img: "/img/menu-icons/retail-icon.png", alt: "retail-icon", title: "Retail", desc: "Optimize retail operations with seamless user experience" },
];

const OUR_SERVICES = [
  { href: "/our-services/dynamics-365-implementation-services/", label: "Implementation Services" },
  { href: "/our-services/dynamics-365-support-services/", label: "Support Services" },
  { href: "/our-services/dynamics-365-upgrade-services/", label: "Upgrade Services" },
  { href: "/our-services/dynamics-365-training/", label: "Dynamics 365 Training" },
  { href: "/our-services/dynamics-365-consultant/", label: "Dynamics 365 Consultants" },
];

const COMPANY_LINKS = [
  { href: "/about-us/", label: "About Us" },
  { href: "/why-us/", label: "Why Us" },
  { href: "/partner/", label: "Partners" },
  { href: "/career/", label: "Careers" },
];

const RESOURCE_TABS = [
  { id: "res-one", target: "v-pills-res-one", label: "Blogs", icon: "/img/menu-icons/res-meg-00.png", active: true },
  { id: "res-two", target: "v-pills-res-two", label: "Case Studies", icon: "/img/menu-icons/res-meg-01.png" },
  { id: "res-three", target: "v-pills-res-three", label: "eBooks", icon: "/img/menu-icons/res-meg-03.png" },
  { id: "res-four", target: "v-pills-res-four", label: "Guides", icon: "/img/menu-icons/res-meg-04.png" },
  { id: "res-five", target: "v-pills-res-five", label: "Tools", icon: "/img/menu-icons/res-meg-05.png" },
  { id: "res-six", target: "v-pills-res-six", label: "Webcasts", icon: "/img/menu-icons/res-meg-06.png" },
];

const BLOG_BY_PRODUCT = [
  { href: "/blog/category/business-central/", label: "Business Central" },
  { href: "/blog/category/dynamics-365-fando/", label: "Finance" },
  { href: "/blog/category/dynamics-365-scm/", label: "Supply Chain" },
  { href: "/blog/category/dynamics-365-crm/", label: "Sales" },
  { href: "/blog/category/field-service/", label: "Field Service" },
  { href: "/blog/category/microsoft-dynamics-365/", label: "Copilot" },
  { href: "/blog/category/dynamics-365-crm/", label: "Customer Service" },
];

const BLOG_BY_INDUSTRY = [
  { href: "/blog/tag/Manufacturing", label: "Manufacturing" },
  { href: "/blog/tag/Retail/", label: "Retail & Ecommerce" },
  { href: "/blog/tag/Distribution/", label: "Distribution" },
  { href: "/blog/tag/Professional-Services/", label: "Professional Services" },
  { href: "/blog/tag/Healthcare", label: "Healthcare" },
  { href: "/blog/tag/Education", label: "Education" },
];

const BLOG_EDITORS_PICKS = [
  { href: "/blog/what-is-business-central-implementation-methodology/", label: "Business Central Implementation Methodology" },
  { href: "/blog/quickbooks-to-microsoft-business-central-migration/", label: "QuickBooks to Business Central Migration" },
  { href: "/blog/sage-to-business-central-migration/", label: "Sage to Business Central Migration" },
  { href: "/dynamics-nav-to-business-central/", label: "NAV to Business Central Upgrade" },
  { href: "/gp-to-business-central-migration/", label: "Dynamics GP to Business Central Migration" },
  { href: "/blog/xero-to-business-central-migration/", label: "Xero to Business Central Migration" },
];

const CASE_STUDY_SERVICES = [
  { href: "/case-studies/#Implementation", icon: "bi-gear", title: "Implementation", desc: "Business Central | Finance" },
  { href: "/case-studies/#Upgrade", icon: "bi-back", title: "ERP Upgrade", desc: "Nav, GP, AX Upgrade" },
  { href: "/case-studies/#Support", icon: "bi-person-add", title: "Managed Support", desc: "24×7 Support & Optimization" },
];

const CASE_STUDY_HIGHLIGHTS = [
  { href: "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/", label: "Stronger Financial Control for Global Rollout | Global Logistics Business" },
  { href: "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/", label: "162% Projected ROI with 8% Efficiency Gain | UK Manufacturer" },
  { href: "/case-studies/business-central-reimplementation-for-retail-market/", label: "Digitally Synchronized Warehouse Operations | Northern Ireland Saddlery Business" },
  { href: "/case-studies/business-central-reimplementation-for-food-trader/", label: "162% Projected ROI and £32K+ Savings | Food Trading Startup" },
  { href: "/case-studies/nav-2013-r2-to-business-central-upgrade/", label: "Improved Efficiency and Real-Time Visibility | UK Orthodontic Supplier" },
];

const POPULAR_EBOOKS = [
  { href: "/ebook/gp-to-bc-migration/", img: "/img/dynamics-GP-BC-Ebook-featured-image.png", alt: "dynamics-GP-BC-Ebook-featured-image", title: "Dynamics GP to BC Guide", desc: "GP to Business Central migration guide" },
  { href: "/ebook/d365-supply-chain-management/", img: "/img/dynamics-SCM-Ebook-featured-image.png", alt: "dynamics-SCM-Ebook", title: "Dynamics 365 SCM Guide", desc: "Guide to Supply Chain Management" },
  { href: "/ebook/dynamics-crm/", img: "/img/dynamics-CRM-Ebook-featured-image.jpg", alt: "dynamics-CRM-Ebook", title: "Dynamics 365 CRM Guide", desc: "Streamline your business with Dynamics CRM" },
  { href: "/ebook/dynamics-365-finance/", img: "/img/nav-guide-pic.png", alt: "manufacturing", title: "Dynamics 365 Finance Guide", desc: "Intelligent ERP solution for finance" },
];

const GUIDES = [
  { href: "/the-ultimate-guide-to-microsoft-dynamics-365/", img: "/img/the-ultmate-ai-guide-banner.png", alt: "the-ultmate-ai-guide", tag: "Guide", title: "Dynamics 365: CRM, ERP & Apps Guide (2026)" },
  { href: "/guides/business-central-guide-for-smb/", img: "/img/chapter5-5.png", alt: "guide", tag: "Guide", title: "Business Central Guide for SMBs" },
];

const WHITEPAPERS = [
  { href: "/white-papers/microsoft-copilot/", img: "/img/white-p-one.png", alt: "guide", tag: "Whitepapers", title: "Microsoft Copilot for Business Transformation" },
  { href: "/white-papers/microsoft-finance/", img: "/img/finacne-white-paper-category.png", alt: "guide", tag: "Whitepapers", title: "Dynamics 365 Finance with Copilot" },
];

const TOOLS = [
  { href: "/erp-implementation-cost-calculator/", img: "/img/tools-one.png", tag: "ERP Calculator", title: "Estimate implementation costs in minutes.", cta: "Calculate Now" },
  { href: "/top-erp-systems-comparison/", img: "/img/tools-two.png", tag: "ERP Comparison", title: "Compare Dynamics 365 solutions side-by-side.", cta: "Compare Now" },
];

const WEBCASTS = [
  { href: "https://www.youtube.com/watch?v=44hqw-S27D0", img: "/img/bc-8-20.png", title: "Is Your Business ERP-Ready?", desc: "Key signs and steps to readiness" },
  { href: "https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST", img: "/img/bc-8-22.png", title: "Signs You Need an ERP", desc: "When and why to adopt Dynamics 365" },
  { href: "https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh", img: "/img/bc-8-21.png", title: "Business Central for Growth", desc: "How BC streamlines and scales operations" },
  { href: "https://www.youtube.com/watch?v=rAHE2BiaPkc", img: "/img/New-pic-Project.png", title: "CRM Explained", desc: "Why every business needs a CRM" },
];

/* ===================== small shared renderers ===================== */

function ItemCard({ item, small }) {
  return (
    <div className={`list-itmes-maga-menu${small ? " list-itmes-maga-menu-small" : ""}`}>
      <Link href={item.href}>
        <div className="pic">
          <img src={item.img} alt={item.alt} width="48" height="48" />
        </div>
        <div className="content">
          <span>{item.title}</span>
          <p>{item.desc}</p>
        </div>
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
          <img src="/img/menu-icons/pic-006.png" alt="Dynamics 365" width={106} height={90} />
        </div>
        <Link href="/blog/copilot-business-central-time-savings/">Read Article <i className="bi bi-arrow-right"></i></Link>
      </div>
      <div className="res-top-bo">
        <Link style={{ padding: "0px" }} href="/products/dynamics-365-copilot/">
          <img src="/img/menu--ss.png" width={706} height={180} alt="AI" />
        </Link>
      </div>
    </div>
  );
}

const DeskstopMenu = () => {
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
                      className={`nav-link${tab.active ? " active" : ""}`}
                      id={`${tab.target}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#${tab.target}`}
                      {...(!tab.active ? { "aria-selected": "false" } : {})}
                    >
                      <a href={tab.href}>
                        <span>{tab.label}</span>
                      </a>
                    </div>
                  ))}
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  {SOLUTION_TABS.map((tab) => (
                    <div
                      key={tab.id}
                      className={`tab-pane${tab.id === "addon" || tab.id === "CRM" ? " cc-height" : ""} fade${tab.active ? " show active" : ""}`}
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
                    <Link href="/erp-implementation-cost-calculator/">
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
                    <img src="/img/forber-01.png" width={771} height={282} alt="menu--ss" />
                  </a>
                </div>
                <div className="pp-absol" style={{ marginTop: "2px" }}>
                  <Link href="/products/dynamics-365-copilot/">
                    <img src="/img/menu--ss.png" width={706} height={180} alt="menu--ss" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>

        {/* ===================== INDUSTRIES ===================== */}
        <li className="dropdown dropdown-smal-mega">
          <Link href="/industries/">
            <span>Industries</span> <i className="bi bi-chevron-down"></i>
          </Link>
          <ul>
            {INDUSTRIES.map((item) => (
              <li key={item.href}>
                <ItemCard item={item} small />
              </li>
            ))}
          </ul>
        </li>

        {/* ===================== OUR SERVICES ===================== */}
        <li className="dropdown">
          <Link href="/our-services/">
            <span>Our Services</span>
            <i className="bi bi-chevron-down"></i>
          </Link>
          <ul>
            {OUR_SERVICES.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </li>

        {/* ===================== COMPANY ===================== */}
        <li className="dropdown">
          <a href="#">
            <span>Company</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            {COMPANY_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
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
                      className={`nav-link${tab.active ? " active" : ""}`}
                      id={`${tab.target}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#${tab.target}`}
                    >
                      <a href="#">
                        <img src={tab.icon} alt={tab.label} width="24" height="24" />
                        <span>{tab.label}</span>
                      </a>
                    </div>
                  ))}
                </div>

                <div className="tab-content" id="v-pills-tabContent">
                  {/* ---------- Blogs ---------- */}
                  <div className="tab-pane fade show active" id="v-pills-res-one">
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
                  <div className="tab-pane fade" id="v-pills-res-two">
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
                  <div className="tab-pane fade" id="v-pills-res-three">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-3 d-flex  bg-0-gray-t">
                          <div className="res-card-99">
                            <span className="n-tags">Recommended</span>
                            <Link className="n-tag-link" href="/ebook/how-to-choose-right-erp/">
                              <img className="n-tags-image" src="/img/Cover_Book_Moc.png" width={582} height={466} alt="Cover_Book_Moc" />
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
                                    <img width={980} height={578} src={b.img} alt={b.alt} />
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
                  <div className="tab-pane fade" id="v-pills-res-four">
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
                                          <img width={1200} height={628} src={g.img} alt={g.alt} />
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
                                <div className="guide-cardwar">
                                  <span className="pop-res-title">Whitepapers</span>
                                  <p className="pop-res-title-p">Strategic resources for decision makers</p>
                                </div>
                                <div className="res-flex-wrap-one">
                                  {WHITEPAPERS.map((w) => (
                                    <div className="guide-card-01" key={w.href}>
                                      <Link href={w.href}>
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src={w.img} alt={w.alt} />
                                        </div>
                                        <div className="guide-card-inf">
                                          {/* <span className="guide-tags-rss">{w.tag}</span> */}
                                          <span className="guide-card-title">{w.title}</span>
                                        </div>
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                                <div className="comm-links-b">
                                  <Link className="n-tag-link" href="/white-papers/">Explore All Whitepapers <i className="bi bi-arrow-right"></i></Link>
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
                  <div className="tab-pane fade" id="v-pills-res-five">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-9 d-flex bg-0-gray-t">
                          <div className="row bg-0-gray">
                            <div className="col-lg-4">
                              <div className="resor-bord">
                                <div className="guide-cardwar">
                                  <span className="pop-res-title">TOOLS</span>
                                  <p className="pop-res-title-p">Estimate costs, compare solutions, and choose the right Microsoft Dynamics 365 platform with confidence.</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-8">
                              <div className="resor-bords">
                                <div className="res-flex-wrap-one">
                                  {TOOLS.map((t) => (
                                    <div className="guide-card-01" key={t.href}>
                                      <Link href={t.href}>
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src={t.img} alt="guide" />
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
                  <div className="tab-pane fade" id="v-pills-res-six">
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-lg-12 bg-0-gray-t">
                          <div className="guide-cardwar">
                            <span className="pop-res-title">Webcasts</span>
                            <p>Your go-to source for expert insights on CRM, ERP, and business transformation powered by Microsoft Dynamics 365</p>
                          </div>
                          <div className="res-flex-wrap">
                            {WEBCASTS.map((w) => (
                              <div className="guide-card-01" key={w.href}>
                                <a target="_blank" href={w.href} rel="noreferrer">
                                  <div className="guide-card-imag">
                                    <img width={411} height={216} src={w.img} alt="potcast" />
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
