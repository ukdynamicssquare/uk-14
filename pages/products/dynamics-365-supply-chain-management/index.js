import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../../public/data/scm_faq.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
import NavBar from '../../../components/NavBar';
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';
import PageSeo from "../../../components/PageSeo";

const pageUrl = "https://www.dynamicssquare.co.uk/products/dynamics-365-supply-chain-management/";
const pageTitle = "Dynamics 365 Supply Chain Management | Dynamics Square UK";
const pageDescription = "Optimise inventory, improve demand forecasting and streamline operations with Dynamics 365 Supply Chain Management. Partner with Dynamics Square UK for expert implementation and support.";
const pageImage = "https://www.dynamicssquare.co.uk/img/Supplychain-banner.png";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.dynamicssquare.co.uk/products/" },
        { "@type": "ListItem", "position": 3, "name": "Dynamics 365 Supply Chain Management", "item": pageUrl }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": pageTitle,
      "description": pageDescription,
      "inLanguage": "en-GB",
      "primaryImageOfPage": { "@type": "ImageObject", "url": pageImage },
      "about": { "@id": `${pageUrl}#software` }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${pageUrl}#software`,
      "name": "Microsoft Dynamics 365 Supply Chain Management",
      "alternateName": ["Dynamics 365 SCM", "D365 SCM"],
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Enterprise Resource Planning (ERP)",
      "operatingSystem": "Web, Windows, iOS, Android",
      "url": pageUrl,
      "image": pageImage,
      "description": "Dynamics 365 Supply Chain Management is a Microsoft ERP solution that helps businesses manage supply chain processes and connect activities across sourcing, inventory, production, warehousing, and delivery.",
      "publisher": { "@type": "Organization", "name": "Microsoft", "url": "https://www.microsoft.com" },
      "featureList": [
        "Inventory Management",
        "Warehouse Management",
        "Procurement and Sourcing",
        "Sales Order Management",
        "Production Control",
        "Asset Management",
        "Demand Forecasting",
        "Master Planning",
        "Transportation Management",
        "Product Information Management",
        "Service Management",
        "Quality Management",
        "Copilot in Dynamics 365 Supply Chain Management"
      ],
      "offers": [
        {
          "@type": "Offer",
          "name": "Dynamics 365 Supply Chain Management",
          "price": "161.50",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "161.50",
            "priceCurrency": "GBP",
            "unitText": "per user/month, paid yearly",
            "valueAddedTaxIncluded": false
          },
          "seller": { "@type": "Organization", "name": "Dynamics Square UK", "url": "https://www.dynamicssquare.co.uk" }
        },
        {
          "@type": "Offer",
          "name": "Dynamics 365 Supply Chain Management Premium",
          "price": "230.70",
          "priceCurrency": "GBP",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "230.70",
            "priceCurrency": "GBP",
            "unitText": "per user/month, paid yearly",
            "valueAddedTaxIncluded": false
          },
          "seller": { "@type": "Organization", "name": "Dynamics Square UK", "url": "https://www.dynamicssquare.co.uk" }
        }
      ]
    },
    {
      "@type": "Service",
      "name": "Dynamics 365 SCM Support Services",
      "serviceType": "Microsoft Dynamics 365 Supply Chain Management implementation, data migration, upgrades, training and support",
      "url": pageUrl,
      "provider": {
        "@type": "Organization",
        "name": "Dynamics Square UK",
        "url": "https://www.dynamicssquare.co.uk"
      },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dynamics 365 SCM Support Services by Dynamics Square",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "End-to-end implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Data migration" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Version upgrades" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hands-on user training" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Technical troubleshooting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Dedicated technical support" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim(),
        },
      })),
    },
  ],
};

const features = [
  {
    title: 'Inventory Management',
    text: 'Adopt seamless tracking and intelligent stock optimisation. Know exactly what’s in, what’s out, and what’s stuck, without chasing spreadsheets or second-guessing replenishment triggers.',
    keyAspects: true,
    points: [
      'Real-time updates on inventory movements',
      'Automated replenishment suggestions using demand signals',
      'Batch and serial number tracking for compliance',
    ],
    img: '/img/wholesale-pic-14.png', w: 580, h: 456,
    alt: 'Inventory management in Dynamics 365 Supply Chain Management',
  },
  {
    title: 'Warehouse Management',
    text: 'Go hi-tech with mobile-enabled execution with real-time warehouse visibility. Remove silos between systems, devices, and staff. Get a warehouse view built around live metrics and mobile-enabled control, helping teams spot issues sooner.',
    keyAspects: true,
    points: [
      'Location-based picking, packing, and put-away',
      'Integrated with IoT for faster decision-making',
      'Labour tracking and task performance metrics',
    ],
    img: '/img/warehouse-management-side-05.png', w: 580, h: 456,
    alt: 'Warehouse management with Dynamics 365 SCM',
  },
  {
    title: 'Procurement and Sourcing',
    text: 'Keep vendor interactions sharp and spending efficient. Build sourcing pipelines that are measurable, compliant, and always aligned with your business needs.',
    points: [
      'Onboard, rank and monitor suppliers with clear metrics',
      'Automate purchase orders based on current needs',
      'Enforce compliance and approvals with rule-driven flows',
    ],
    img: '/img/bc-supply-02.png', w: 580, h: 456,
    alt: 'Procurement and sourcing in Dynamics 365 Supply Chain Management',
  },
  {
    title: 'Production and Manufacturing',
    text: 'Get the power of agile planning and intelligent shop floor execution. Manufacturing stops being reactive. Replace static schedules with intelligent flow control, giving your shop floor the flexibility it’s always needed.',
    points: [
      'Visualise BOMs and routes in production planning',
      'Track machine usage and output in real-time',
      'Adjust schedules dynamically with planning and forecasting insights',
    ],
    img: '/img/bc-supply-03.png', w: 580, h: 456,
    alt: 'Dynamics 365 Supply Chain Management for manufacturing',
  },
  {
    title: 'Asset Management',
    text: 'Reduce downtime with proactive maintenance. Your assets shouldn’t break to get attention. Use asset history and maintenance plans to help reduce unplanned downtime.',
    points: [
      'Plan equipment maintenance cycles with historical data',
      'Detect failure patterns before downtime hits',
      'Schedule inspections and repairs in one view',
    ],
    img: '/img/warehouse-management-side-02.png', w: 580, h: 456,
    alt: 'Asset management in Dynamics 365 SCM',
  },
  {
    title: 'Sales and Operations Planning (S&OP)',
    text: 'Synchronise demand, supply, and operations to lead your domain. Get your forecasts, inventory, and production into one space. This helps teams spot mismatches and consider their impact on margins.',
    points: [
      'Model multiple demand scenarios with AI',
      'Balance production plans with available resources',
      'Align finance and operations for margin impact',
    ],
    img: '/img/bc-supply-01.png', w: 580, h: 456,
    alt: 'Sales and operations planning with Dynamics 365 Supply Chain Management',
  },
];

const benefits = [
  { title: 'Better inventory decisions', text: 'Use demand and stock information to spot potential shortages or excess inventory earlier and make more informed replenishment decisions.' },
  { title: 'Clearer operational visibility', text: 'Help teams identify delays and focus attention on the issues that need action.' },
  { title: 'More informed supplier decisions', text: 'Use supplier performance information to support purchasing decisions and reduce manual follow-ups.' },
  { title: 'Better coordination across production', text: 'Keep bills of materials, resources, and schedules aligned to help reduce clashes and idle time.' },
  { title: 'More consistent warehouse work', text: 'Mobile workflows give warehouse staff access to relevant tasks and data while working on the floor.' },
  { title: 'Closer alignment between finance and operations', text: 'Shared operational information helps teams consider cost and financial impact alongside supply decisions.' },
];

const modules = [
  { icon: 'bi-box-seam', title: 'Inventory Management', text: 'Track, manage, and plan inventory flow in real time.' },
  { icon: 'bi-boxes', title: 'Warehouse Management', text: 'Run mobile-enabled picking, packing, and location routing.' },
  { icon: 'bi-cart-check', title: 'Procurement and Sourcing', text: 'Streamline purchase cycles and strengthen supplier relations' },
  { icon: 'bi-receipt', title: 'Sales Order Management', text: 'Automate sales processing from order to delivery.' },
  { icon: 'bi-gear-wide-connected', title: 'Production Control', text: 'Monitor machines, labour, and materials on the shop floor.' },
  { icon: 'bi-tools', title: 'Asset Management', text: 'Keep machinery performing with planned and predictive maintenance.' },
  { icon: 'bi-graph-up-arrow', title: 'Demand Forecasting', text: 'Use data science to stay one step ahead of customer needs.' },
  { icon: 'bi-diagram-3', title: 'Master Planning', text: 'Balance demand, capacity, and materials with agility.' },
  { icon: 'bi-truck', title: 'Transportation Management', text: 'Control routes, carriers, and shipping costs precisely.' },
  { icon: 'bi-tags', title: 'Product Information Management', text: 'Manage variants, categories, and compliance in one place.' },
  { icon: 'bi-headset', title: 'Service Management', text: 'Track after-sales services and warranty commitments.' },
  { icon: 'bi-patch-check', title: 'Quality Management', text: 'Ensure every batch meets required standards with documented checks.' },
];

const copilotFeatures = [
  { title: 'AI summaries', text: 'Summarises information on supported pages, including vendor, purchase order, and sales order records.' },
  { title: 'Warehouse workload insights', text: 'Summarises available warehouse work in the Warehouse Management mobile app, where supported.' },
  { title: 'Demand-plan analysis', text: 'Helps planners review shifts, trends, anomalies, and forecast accuracy in supported demand-planning experiences.' },
  { title: 'Traceability summaries', text: 'Summarises selected traceability activity and where-used information when the relevant capability is configured.' },
  { title: 'Agent features', text: 'Supplier communication and procurement agents have separate availability and licensing conditions; check Microsoft’s current documentation before promising these capabilities.' },
];

const services = [
  { icon: 'bi-rocket-takeoff', title: 'End-to-end implementation', text: 'Support from planning through go-live.', href: '/d365-supply-chain-management-implementation/' },
  { icon: 'bi-database-up', title: 'Data migration', text: 'Move and validate critical data, with a plan to minimise disruption.' },
  { icon: 'bi-arrow-up-circle', title: 'Version upgrades', text: 'Plan upgrades while accounting for existing customisations and business requirements.' },
  { icon: 'bi-mortarboard', title: 'Hands-on user training', text: 'Equip teams with skills to run things smarter.' },
  { icon: 'bi-wrench-adjustable', title: 'Technical troubleshooting', text: 'Help investigate issues and restore operations as quickly as possible.' },
  { icon: 'bi-life-preserver', title: 'Dedicated technical support', text: 'Help with technical issues when you need it.' },
];

// Decorative hero background: connector lines + faded grid patches drawn to meet the dashboard edges
const HeroLines = () => (
  // viewBox units: 1cqw of the hero = 19.52 units, so every line end below sits on an
  // edge of the dashboard window, a floating card or a stat chip (see .scm-hd-* in globals.css)
  <svg className="flot-1 scm-hero-lines" viewBox="0 0 1952 963" preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    <defs>
      <pattern id="scmGrid" width="44" height="44" patternUnits="userSpaceOnUse">
        <path d="M44 0H0V44" fill="none" stroke="#e4e1ee" strokeWidth="1" />
      </pattern>
      <radialGradient id="scmFadeGrad">
        <stop offset="0" stopColor="#fff" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </radialGradient>
      <mask id="scmFade" maskContentUnits="objectBoundingBox">
        <rect width="1" height="1" fill="url(#scmFadeGrad)" />
      </mask>
      <linearGradient id="scmFadeLeft" gradientUnits="userSpaceOnUse" x1="215" x2="0" y1="0" y2="0">
        <stop offset="0" stopColor="#b9bbe0" />
        <stop offset="1" stopColor="#b9bbe0" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="scmFadeRight" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0" stopColor="#b9bbe0" />
        <stop offset="1" stopColor="#b9bbe0" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="scmFadeDown" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0" stopColor="#b9bbe0" />
        <stop offset="1" stopColor="#b9bbe0" stopOpacity="0" />
      </linearGradient>
    </defs>

    <g mask="url(#scmFade)">
      <rect x="120" y="400" width="420" height="300" fill="url(#scmGrid)" />
    </g>
    <g mask="url(#scmFade)">
      <rect x="780" y="560" width="420" height="300" fill="url(#scmGrid)" />
    </g>
    <g mask="url(#scmFade)">
      <rect x="1440" y="0" width="420" height="300" fill="url(#scmGrid)" />
    </g>

    <g fill="none" strokeWidth="2" strokeLinecap="round">
      {/* page edge -> left card */}
      <path d="M0 369H215" stroke="url(#scmFadeLeft)" />
      {/* left card -> window */}
      <path d="M430 330H488" stroke="#b9bbe0" />
      {/* right card -> top right page edge */}
      <path d="M1640 77V44a44 44 0 0 1 44 -44H1952" stroke="url(#scmFadeRight)" />
      {/* right card -> down to the Supply Chain icon box */}
      <path d="M1640 239V560a40 40 0 0 1 -40 40H1373a40 40 0 0 0 -40 40V963" stroke="url(#scmFadeDown)" />
      {/* last stat chip -> joins the line to the icon box */}
      <path d="M1254 582V690a34 34 0 0 0 34 34H1333" stroke="#b9bbe0" />
      <g stroke="#7d7cc4" strokeDasharray="8 8" className="scm-hero-dash">
        {/* window -> left page edge */}
        <path d="M488 140H0" />
        {/* left card -> first stat chip */}
        <path d="M300 451V503a34 34 0 0 0 34 34H781" />
        {/* window -> right card */}
        <path d="M1484 160H1523" />
      </g>
    </g>

    <g fill="#5b4f96" stroke="#5b4f96" strokeWidth="2">
      <circle cx="110" cy="369" r="5" />
      <path d="M110 369H141" fill="none" />
      <path d="M149 369l-10 -5v10z" stroke="none" />
      <circle cx="600" cy="537" r="5" />
      <path d="M600 537H631" fill="none" />
      <path d="M639 537l-10 -5v10z" stroke="none" />
      <circle cx="1640" cy="380" r="5" />
      <path d="M1640 380V409" fill="none" />
      <path d="M1640 417l-5 -10h10z" stroke="none" />
    </g>
  </svg>
);

// Decorative hero illustration: a Dynamics 365 SCM style workspace built in HTML/SVG
// (matches the Finance hero composition: main window, two floating cards, three stat chips)
const dashNav = ['Inventory management', 'Warehouse management', 'Procurement and sourcing', 'Production control', 'Master planning', 'Transportation'];
const dashBars = [62, 84, 48, 72, 38, 90, 56, 68];
const dashColumns = [30, 52, 44, 70, 58, 82, 64, 76, 60, 88, 72, 94];

const HeroDashboard = ({ compact = false }) => (
  <div className='scm-hd' role="img" aria-label="Illustration of a Dynamics 365 Supply Chain Management workspace">
    <div className='scm-hd-window' aria-hidden="true">
      <div className='scm-hd-bar'>
        <svg viewBox="0 0 12 12" className='scm-hd-waffle'><g fill="#fff">{[1, 6, 11].map((x) => [1, 6, 11].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.1" />))}</g></svg>
        <b>Dynamics 365</b>
        <span className='scm-hd-sep'>Supply chain management</span>
        <span className='scm-hd-search'>Search</span>
        <span className='scm-hd-user'>DS</span>
      </div>
      <div className='scm-hd-body'>
        <div className='scm-hd-nav'>
          <span className='scm-hd-nav-title'>Workspaces</span>
          {dashNav.map((item, i) => (
            <span key={item} className={i === 0 ? 'is-active' : ''}>{item}</span>
          ))}
        </div>
        <div className='scm-hd-main'>
          <div className='scm-hd-head'>
            <span className='scm-hd-title'>Inventory visibility</span>
            <span className='scm-hd-filter'>Site: All</span>
            <span className='scm-hd-filter'>Warehouse: All</span>
          </div>
          <div className='scm-hd-kpis'>
            <div className='scm-hd-kpi'><span>On-hand items</span><b>12,480 <i className="bi bi-check2"></i></b></div>
            <div className='scm-hd-kpi'><span>Open purchase orders</span><b>346 <i className="bi bi-check2"></i></b></div>
            <div className='scm-hd-kpi'><span>Released production orders</span><b>58</b></div>
          </div>
          <div className='scm-hd-charts'>
            <div className='scm-hd-panel'>
              <span>Stock by warehouse</span>
              <svg viewBox="0 0 160 90" preserveAspectRatio="none">
                {[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="160" y1={y} y2={y} stroke="#e7e7ef" strokeWidth="0.6" />)}
                {dashBars.map((h, i) => (
                  <rect key={i} x={8 + i * 19} y={88 - h * 0.85} width="10" height={h * 0.85} rx="1.5" fill={i % 2 ? '#7b6fd6' : '#2f9aa8'} />
                ))}
              </svg>
            </div>
            <div className='scm-hd-panel'>
              <span>Demand forecast vs actual</span>
              <svg viewBox="0 0 160 90" preserveAspectRatio="none">
                {[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="160" y1={y} y2={y} stroke="#e7e7ef" strokeWidth="0.6" />)}
                <path d="M0 70 C20 62 30 40 50 46 S80 30 100 34 S140 18 160 22" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <path d="M0 76 C20 70 34 54 52 56 S82 40 100 44 S138 30 160 30" fill="none" stroke="#d6197f" strokeWidth="1.6" strokeDasharray="4 3" />
              </svg>
            </div>
            <div className='scm-hd-panel'>
              <span>Orders by month</span>
              <svg viewBox="0 0 160 90" preserveAspectRatio="none">
                {[20, 40, 60, 80].map((y) => <line key={y} x1="0" x2="160" y1={y} y2={y} stroke="#e7e7ef" strokeWidth="0.6" />)}
                {dashColumns.map((h, i) => (
                  <rect key={i} x={6 + i * 13} y={88 - h * 0.8} width="8" height={h * 0.8} fill="#3b82f6" />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>

    {!compact && (
    <>
    <div className='scm-hd-card scm-hd-card-left' aria-hidden="true">
      <span className='scm-hd-card-title'>Supplier performance</span>
      <span className='scm-hd-card-meta'>On-time delivery &middot; last 6 months</span>
      <svg viewBox="0 0 120 50" preserveAspectRatio="none">
        <path d="M0 34 C15 30 25 22 40 24 S65 14 80 16 S105 8 120 10" fill="none" stroke="#7b6fd6" strokeWidth="1.6" />
        <path d="M0 42 C18 40 30 36 45 37 S70 32 85 33 S108 28 120 28" fill="none" stroke="#d6197f" strokeWidth="1.2" />
      </svg>
    </div>

    <div className='scm-hd-card scm-hd-card-right' aria-hidden="true">
      <span className='scm-hd-card-title'>Production orders</span>
      <span className='scm-hd-card-meta'>By status</span>
      <svg viewBox="0 0 120 60" preserveAspectRatio="none">
        {[40, 22, 46, 30, 52, 36].map((h, i) => (
          <rect key={i} x={6 + i * 19} y={58 - h} width="9" height={h} fill="#d6197f" />
        ))}
      </svg>
    </div>
    </>
    )}

    <div className='scm-hd-stat scm-hd-stat-1' aria-hidden="true"><span>Shipment status</span><b className='is-ok'>On track <i className="bi bi-check-circle-fill"></i></b></div>
    <div className='scm-hd-stat scm-hd-stat-2' aria-hidden="true"><span>Open warehouse work</span><b>128</b></div>
    <div className='scm-hd-stat scm-hd-stat-3' aria-hidden="true"><span>Orders picked today</span><b>2,340</b></div>
  </div>
);

const SupplyChainManagement = () => {
  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title={pageTitle}
        description={pageDescription}
        keywords="Dynamics 365 Supply Chain Management, what is Dynamics 365 Supply Chain Management, Microsoft Dynamics 365 Supply Chain Management, Microsoft Dynamics 365 Finance and Supply Chain Management, Dynamics 365 Supply Chain Management features, Dynamics 365 Supply Chain Management modules, Dynamics 365 SCM, Dynamics 365 F&SCM, Copilot in Microsoft Dynamics 365 Supply Chain Management, Dynamics 365 Supply Chain Management pricing, Dynamics 365 Supply Chain Management training, Dynamics 365 SCM implementation partner, Microsoft ERP solution, Dynamics 365 Supply Chain Management manufacturing"
        image={pageImage}
        imageAlt="Microsoft Dynamics 365 Supply Chain Management"
        extraSchema={pageSchema}
      />
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 Supply Chain Management</h1>
                <span className='large-heading'>AI-Powered Supply Chain Management for Seamless, Intelligent Operations</span>
                <p>Dynamics 365 Supply Chain Management gives you a supply chain that analyzes, predicts, and acts in real-time. Cut down lead times, help reduce overstock, and spend less time firefighting with D365 SCM. Operate with control, speed, and full clarity.</p>
                <p>As a trusted Dynamics 365 partner in the UK, Dynamics Square helps businesses streamline supply chain operations, optimise inventory, improve demand forecasting, and achieve greater efficiency with AI-powered ERP solutions.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Start Transforming Now! &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              <div className='m-b-image scm-hd-mobile'>
                <HeroDashboard compact />
              </div>
            </div>
          </div>
        </div>
        <div className="solution-new-banner-one-img solution-new-banner-one-img-f scm-hero-visual">
          <HeroLines />
          <HeroDashboard />
          <div className='flot-5 flot-5-a'>
            <img src="/img/menu-icons/dynamics-365-supplychainmanagement.svg" alt="Dynamics 365 Supply Chain Management icon" className="flot-img" width={48} height={48} />
          </div>
        </div>
        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head r-top-60 scm-intro'>
                <h2>What is Dynamics 365 Supply Chain Management?</h2>
                <p>Dynamics 365 Supply Chain Management is an effective application in Microsoft's Dynamics 365 suite, alongside <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Dynamics 365 Finance</Link>. This <Link href="/products/microsoft-dynamics-erp/" className="u-i">Microsoft ERP solution</Link> helps businesses manage supply chain processes and connect activities across sourcing, inventory, production, warehousing, and delivery.</p>
                <p>D365 SCM is not just software but a live ecosystem that integrates AI intelligence into your business. It reads inventory signals, aligns production rhythm, balances supplier inputs, and removes the fog from planning. It doesn’t just capture and store data but interprets it. With Dynamics 365 Supply Chain Management, your supply chain becomes a sharp, adaptive, self-correcting system.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Give Your Supply Chain A Brain &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='image-list-new'>
                <p><b>Rated highly by leading tech platforms</b></p>
                <div className="image-list-new-im">
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-01.png" alt="Rating platform logo 1" width={140} height={54} loading="lazy" />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-02.png" alt="Rating platform logo 2" width={204} height={54} loading="lazy" />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-03.png" alt="Rating platform logo 3" width={130} height={54} loading="lazy" />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-04.png" alt="Rating platform logo 4" width={129} height={54} loading="lazy" />
                    </div>
                  </div>
                  <div className='ii-pic-list'>
                    <div className='s-widt-p'>
                      <img src="/img/rartin-log-05.png" alt="Rating platform logo 5" width={155} height={54} loading="lazy" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavBar />
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/supply-chain-page-side-image.png" width={579} height={548} alt="Warehouse team using Dynamics 365 Supply Chain Management" sizes="(max-width: 991px) 100vw, 579px" />
                </div>
                <img width={563} height={478} src="/img/n-007.png" alt="" aria-hidden="true" className="flot-9" loading="lazy" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Dynamics 365 Supply Chain Management Implementation: How Does It Help?</h2>
                </div>
                <ul>
                  <li><i className="bi bi-x-circle"></i> Inventory goes missing or untracked</li>
                  <li><i className="bi bi-x-circle"></i> Stockouts slow production or delay delivery</li>
                  <li><i className="bi bi-x-circle"></i> Too much manual intervention in order flow</li>
                  <li><i className="bi bi-x-circle"></i> No real-time visibility into logistics and warehousing</li>
                  <li><i className="bi bi-x-circle"></i> Poor supplier performance impacts customer experience</li>
                </ul>
                <p>Dynamics 365 SCM can help address these problems by connecting processes, improving warehouse visibility, supporting alerts, and tracking supplier performance. The results depend on configuration and the quality of your data.</p>
                <p>With Microsoft Dynamics 365 Supply Chain Management, businesses can see everything clearly from sourcing to production to delivery, making sure that everything is done right without compromising.</p>
                <p><b>Make every process accountable with Dynamics 365 Supply Chain Management.</b></p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Demo! &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section3' className='solution-new-banner-three'>
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Supply Chain Management Features: What’s Inside?</h2>
                <p>Dynamics 365 Supply Chain Management is a connected, modular system with role-based capabilities. It is built to manage complex supply chains end-to-end. Below are the core Dynamics 365 Supply Chain Management modules and capabilities:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card scm-stack">
                {features.map((card) => (
                  <div className='mycard' key={card.title}>
                    <div className='mycard__inner'>
                      <div className='mycard__inner-left'>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                        {card.keyAspects && <p><b>Key aspects:</b></p>}
                        <ul>
                          {card.points.map((point) => (
                            <li key={point}>{point}</li>
                          ))}
                        </ul>
                      </div>
                      <div className='mycard__inner-right scm-card-img'>
                        <Image src={card.img} width={card.w} height={card.h} alt={card.alt} sizes="(max-width: 991px) 100vw, 580px" />
                      </div>
                    </div>
                  </div>
                ))}
                <div className='scm-stack-hold' aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Supply Chain Management Benefits That Provide Real Value</h2>
                <p>D365 SCM can help teams identify issues earlier rather than waiting for something to go wrong. A supply chain powered with the Dynamics 365 Supply Chain Management app brings information together to support decisions. This Microsoft ERP solution for businesses is built to respond and can help reduce waste. In a nutshell, it is designed to help protect profits.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  {benefits.map((item) => (
                    <li key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </li>
                  ))}
                </ul>
                <div className='product-side-002-ext'>
                  <p>Deploy Microsoft Dynamics 365 Supply Chain Management to give a complete transformation to your operations and remove inefficiencies.</p>
                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Claim Your Free Consultation! &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/Supplychain-banner-side.png" width={489} height={513} alt="Logistics and shipping visibility with Dynamics 365 SCM" sizes="(max-width: 991px) 100vw, 489px" />
              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <img src="/img/n-014.png" width={604} height={958} alt="" aria-hidden="true" loading="lazy" />
        </div>
      </section>
      <section id='section5' className='solution-new-banner-five'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Supply Chain Management Modules: One Place to Manage Everything</h2>
                <p>Dynamics 365 Supply Chain Management brings these supply chain functions together in one connected experience.</p>
              </div>
            </div>
          </div>
          <div className='row g-5'>
            {modules.map((item) => (
              <div className='col-lg-4 col-md-6 d-flex' key={item.title}>
                <div className='solution-new-card-001'>
                  <span className='scm-icon' aria-hidden="true"><i className={`bi ${item.icon}`}></i></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Click For A Personalised Demo Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section6' className='solution-new-six'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Copilot in Dynamics 365 Supply Chain Management</h2>
                <p><Link href="/products/dynamics-365-copilot/" className="u-i">Copilot</Link> in Microsoft Dynamics 365 Supply Chain Management includes specific features for summarising operational records, reviewing warehouse workload, and analysing demand plans. Available capabilities depend on the feature, product version, licence, and release status.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='solution-new-six-img'>
                <Image src="/img/solution-new-six-img.png" width={1282} height={383} alt="Copilot in Dynamics 365 Supply Chain Management" sizes="(max-width: 1320px) 100vw, 1282px" />
              </div>
            </div>
          </div>
          <div className='row g-3 m-t-4 justify-content-center'>
            {copilotFeatures.map((item) => (
              <div className='col-lg-4 col-md-6 d-flex' key={item.title}>
                <div className='solution-new-six-card'>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}

            <div className='col-lg-12'>
              <div className='text-center'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>See Microsoft Copilot In Action! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd' style={{
          backgroundImage: "url('/img/Maskgrou12.png')"
        }}>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>Make Your Supply Chain Think!</span>
                  <h3>Dynamics 365 Supply Chain Management helps teams bring supply chain information together and respond to changes with better visibility and planning.</h3>
                  <div>
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Yes, Futureproof My Business! &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Supply Chain Management & Licensing: Invest in the Future of Your Business</h2>
                <p>You invest in control when you choose Dynamics 365 Supply Chain Management. This is the decision that can make your business future-proof.</p>
                <p>Below are the current UK licence options, based on Microsoft's published prices (paid yearly; VAT excluded):</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-5 col-md-6 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365<span>Supply Chain Management</span></h3>
                <h4>£161.50<span>per user/month<br />(paid yearly)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started">Contact us</a>
                <p className='disclm'>*VAT excluded</p>
              </div>
            </div>
            <div className='col-lg-5 col-md-6 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365<span>Supply Chain Management Premium</span></h3>
                <h4>£230.70<span>per user/month<br />(paid yearly)</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started">Contact us</a>
                <p className='disclm'>*VAT excluded</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='scm-pricing-note'>
                <p>Pricing and additional usage costs can vary depending on the licences, integrations, and AI services required. Check Microsoft's current pricing before preparing a quote.</p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Talk To An Expert Today! &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="busnes-upgrade-serve-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head">
                <h2>Dynamics 365 SCM Support Services by Dynamics Square</h2>
                <p>Your implementation is only as good as your partner. As a trusted <Link href="/d365-supply-chain-management-implementation/" className="u-i">Dynamics 365 SCM implementation partner</Link>, Dynamics Square offers full-lifecycle support:</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {services.map((item) => (
              <div className="col-lg-4 col-md-6 d-flex" key={item.title}>
                <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                  <span className='scm-icon' aria-hidden="true"><i className={`bi ${item.icon}`}></i></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href ? (
                    <Link href={item.href} className="u-i">Learn More <i className="bi bi-arrow-right"></i></Link>
                  ) : (
                    <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className='scm-pricing-note'>
                <p>Whether you're <Link href="/why-to-migrate-to-d365-finance-supply-chain/" className="u-i">migrating from legacy ERP</Link> or starting fresh, we help configure your Microsoft ERP solution around your requirements and support you before and after go-live.</p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Get Expert-Backed Support &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section9' className='p-t-1-60'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Microsoft Dynamics 365 Supply Chain Management</h2>
              <p>Case studies, e-books, podcasts, videos and blogs to help you explore D365 SCM.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-01-tab" data-bs-toggle="pill" data-bs-target="#pills-home-01" type="button" role="tab" aria-controls="pills-home-01" aria-selected="true">Case Studies</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-02-tab" data-bs-toggle="pill" data-bs-target="#pills-home-02" type="button" role="tab" aria-controls="pills-home-02" aria-selected="false">e-Books</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Videos</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-07-tab" data-bs-toggle="pill" data-bs-target="#pills-home-07" type="button" role="tab" aria-controls="pills-home-07" aria-selected="false">Blogs</button>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home-01" role="tabpanel" aria-labelledby="pills-home-01-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href='/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/'>
                            <img src="/img/logistic-uk.jpg" width={273} height={192} alt="Dynamics 365 Finance for Logistic UK multi entity case study" loading="lazy" />
                            <h3>Dynamics 365 Finance for Logistic UK Multi Entity</h3>
                            <p>How Bertling Group Strengthened Financial Control and Prepared for a Multi-Entity Rollout with Microsoft Dynamics 365...</p>
                            <div className='ct--a'>
                              <span>Read More</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href='/case-studies/d365-finance-and-operations-for-project-management/'>
                            <img src="/img/operations-for-project-management.jpg" width={273} height={192} alt="D365 Finance and Operations for project management case study" loading="lazy" />
                            <h3>D365 Finance and Operations for Project Management</h3>
                            <p>How a Multi-Entity Engineering Business Built Financial Clarity and Operational Control with Microsoft Dynamics 365..</p>
                            <div className='ct--a'>
                              <span>Read More</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href='/case-studies/dynamics-365-f&O-implementation-for-healthcare/'>
                            <img src="/img/f&O-implementation-for-healthcare.jpg" width={273} height={192} alt="Dynamics 365 F&O implementation for healthcare case study" loading="lazy" />
                            <h3>Dynamics 365 F&O Implementation for Healthcare</h3>
                            <p>How a Clinical Research Organisation Improved Financial Processes and System Adoption with Dynamics 365 Finance and Operations...</p>
                            <div className='ct--a'>
                              <span>Read More</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-02" role="tabpanel" aria-labelledby="pills-home-02-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="/ebook/d365-supply-chain-management/">
                            <img src="/img/dynamics-SCM-Ebook-featured-image.png" width={273} height={192} alt="Dynamics 365 Supply Chain Management e-book" loading="lazy" />
                            <h3>A Complete Guide to Dynamics SCM</h3>
                            <p>The Extensive Guide to Dynamics 365 Supply Chain Management</p>
                            <div className='ct--a'>
                              <span>Read now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-03" role="tabpanel" aria-labelledby="pills-home-03-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj" target='_blank' rel="noopener noreferrer">
                            <img src="/img/bc-8-20.png" width={273} height={192} alt="Is your business ready for an ERP system podcast" loading="lazy" />
                            <h3>Is Your Business Ready for an ERP System?</h3>
                            <p>Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST" target='_blank' rel="noopener noreferrer">
                            <img src="/img/bc-8-22.png" width={273} height={192} alt="Signs your business is ready for an ERP system podcast" loading="lazy" />
                            <h3>Signs Your Business Is Ready for an ERP System</h3>
                            <p>Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/R3Ol_-prHeI" target='_blank' rel="noopener noreferrer">
                            <img src="/img/Video-Supply%20Chain%20Management.png" width={273} height={192} alt="Microsoft Dynamics 365 Supply Chain Management video" loading="lazy" />
                            <h3>Microsoft Dynamics 365 Supply Chain Management</h3>
                            <p>See how Dynamics 365 Supply Chain Management connects inventory, warehousing, manufacturing and logistics.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-07" role="tabpanel" aria-labelledby="pills-home-07-tab">
                    <div className='row'>
                      <BlogFinanaceCard categorySlug="dynamics-365-scm" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                        aria-expanded="false"
                        aria-controls={`faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SupplyChainManagement;
