// Resource cards + internal links for the legacy product pages
// (NAV, AX, GP, Finance & Operations). Titles and summaries reuse the
// existing case-study / e-book / video copy from elsewhere on the site.

const cs = {
  pasante: { href: "/case-studies/nav09-to-business-central-upgrade/", img: "/img/case-studies-2.jpg", alt: "Pasante Healthcare NAV 2009 to Business Central upgrade case study", title: "Pasante Healthcare: NAV 2009 to Business Central On-Premises", text: "Pasante Healthcare improved productivity by up to 68% by upgrading to Business Central On-premise from Dynamics NAV.", cta: "Read More" },
  crmTrading: { href: "/case-studies/nav2009-nav18-upgrade/", img: "/img/case-studies-1.jpg", alt: "CRM Trading Dynamics NAV 2009 to NAV 2018 upgrade case study", title: "CRM Trading: Dynamics NAV 2009 to NAV 2018 Upgrade", text: "CRM Trading boosted operational efficiency up to 4X by upgrading from Dynamics NAV 2009 to Dynamics NAV 2018.", cta: "Read More" },
  wiper: { href: "/case-studies/nav-2016-support-services/", img: "/img/case-studies-6.jpg", alt: "Wiper Supply Dynamics NAV 2016 support case study", title: "Wiper Supply: Dynamics NAV 2016 Support", text: "Wiper Supply doubled its sales volume and customers with dedicated support from Dynamics Square.", cta: "Read More" },
  leda: { href: "/case-studies/upgrading-to-dynamics-365-business-central/", img: "/img/Leda-Ortho.jpg", alt: "Leda Orthopaedics upgrading to Dynamics 365 Business Central case study", title: "Upgrading to Dynamics 365 Business Central", text: "UK’s leading manufacturer of orthopaedic implants has gained 80% more visibility with a Business Central implementation.", cta: "Read More" },
  omicron: { href: "/case-studies/access-dimension-erp-to-business-central-migration/", img: "/img/Omicron-Engineering.jpg", alt: "Omicron Engineering Access Dimensions to Business Central migration case study", title: "Omicron Engineering: Access Dimensions to Business Central", text: "Omicron Engineering, a leading car restoration and customisation company, enhanced its ROI by 30% with Business Central implementation.", cta: "Read More" },
  almi: { href: "/case-studies/sage-erp-to-business-central/", img: "/img/ALMI-Group.jpg", alt: "ALMI Group Sage ERP to Dynamics 365 Business Central case study", title: "Sage ERP to D365 Business Central", text: "A leading builder’s merchant support company has achieved business transparency by 60% with Business Central implementation.", cta: "Read More" },
  logistic: { href: "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/", img: "/img/logistic-uk.jpg", alt: "Dynamics 365 Finance for Logistic UK multi entity case study", title: "Dynamics 365 Finance for Logistic UK Multi Entity", text: "How Bertling Group Strengthened Financial Control and Prepared for a Multi-Entity Rollout with Microsoft Dynamics 365...", cta: "Read More" },
  projectMgmt: { href: "/case-studies/d365-finance-and-operations-for-project-management/", img: "/img/operations-for-project-management.jpg", alt: "D365 Finance and Operations for project management case study", title: "D365 Finance and Operations for Project Management", text: "How a Multi-Entity Engineering Business Built Financial Clarity and Operational Control with Microsoft Dynamics 365..", cta: "Read More" },
  healthcare: { href: "/case-studies/dynamics-365-f&O-implementation-for-healthcare/", img: "/img/f&O-implementation-for-healthcare.jpg", alt: "Dynamics 365 F&O implementation for healthcare case study", title: "Dynamics 365 F&O Implementation for Healthcare", text: "How a Clinical Research Organisation Improved Financial Processes and System Adoption with Dynamics 365 Finance and Operations...", cta: "Read More" },
};

const ebook = {
  navToBc: { href: "/ebook/upgrade-nav-to-business-central/", img: "/img/Ebook-Nav-to-BC.png", alt: "Quick start guide for upgrading NAV to Business Central e-book", title: "Quick Start Guide for Upgrading NAV to Business Central", text: "Learn when, why, and how to upgrade from Dynamics NAV to Business Central with confidence.", cta: "Read now" },
  gpToBc: { href: "/ebook/gp-to-bc-migration/", img: "/img/dynamics-GP-BC-Ebook-featured-image.png", alt: "Dynamics GP to Business Central migration guide e-book", title: "Your Guide to Dynamics GP to Business Central Migration", text: "Find how businesses are moving from Microsoft GP to Business Central with confidence.", cta: "Read now" },
  finance: { href: "/ebook/dynamics-365-finance/", img: "/img/nav-guide-pic.png", alt: "Dynamics 365 Finance guide e-book", title: "Dynamics 365 Finance Guide", text: "A Quick Start Guide To Dynamics 365 Finance", cta: "Read now" },
  scm: { href: "/ebook/d365-supply-chain-management/", img: "/img/dynamics-SCM-Ebook-featured-image.png", alt: "Dynamics 365 Supply Chain Management e-book", title: "A Complete Guide to Dynamics SCM", text: "The Extensive Guide to Dynamics 365 Supply Chain Management", cta: "Read now" },
  erp: { href: "/ebook/how-to-choose-right-erp/", img: "/img/ebooh-img.png", alt: "Ultimate guide to choosing the right ERP e-book", title: "Ultimate Guide to Choose the Right ERP", text: "Free ERP eBook to help you choose the right ERP for your business.", cta: "Read now" },
};

const podcast = {
  ready: { href: "https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj", external: true, img: "/img/bc-8-20.png", alt: "Is your business ready for an ERP system podcast", title: "Is Your Business Ready for an ERP System?", text: "Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.", cta: "Watch now" },
  signs: { href: "https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST", external: true, img: "/img/bc-8-22.png", alt: "Signs your business is ready for an ERP system podcast", title: "Signs Your Business Is Ready for an ERP System", text: "Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.", cta: "Watch now" },
  bc: { href: "https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh", external: true, img: "/img/bc-8-21.png", alt: "Unpacking Microsoft Dynamics 365 Business Central for growth podcast", title: "Unpacking Microsoft Dynamics 365 Business Central for Growth", text: "Learn how Business Central helps streamline operations and scale growth in this expert-driven podcast episode.", cta: "Watch now" },
};

const video = {
  financePremium: { href: "https://youtu.be/f0EmJkDmpg4?si=8kVDObQ4LcrEHEzO", external: true, img: "/img/thumb-01.jpg", alt: "Microsoft Dynamics 365 Finance Premium video", title: "Microsoft Dynamics 365 Finance Premium", text: "Introducing business performance management capabilities in Dynamics 365 Finance.", cta: "Watch now" },
  copilotFinance: { href: "https://youtu.be/43S3_bV8ht0?si=F4Tmf_ebE7D7HsOS", external: true, img: "/img/thumb-02.jpg", alt: "Microsoft Copilot for Finance video", title: "Microsoft Copilot for Finance", text: "Introducing Microsoft Copilot for Finance, the AI assistant for finance professionals.", cta: "Watch now" },
  scm: { href: "https://youtu.be/R3Ol_-prHeI", external: true, img: "/img/Video-Supply%20Chain%20Management.png", alt: "Microsoft Dynamics 365 Supply Chain Management video", title: "Microsoft Dynamics 365 Supply Chain Management", text: "See how Dynamics 365 Supply Chain Management connects inventory, warehousing, manufacturing and logistics.", cta: "Watch now" },
};

export const navResources = [
  { label: "Case Studies", items: [cs.pasante, cs.crmTrading, cs.wiper] },
  { label: "e-Books", items: [ebook.navToBc, ebook.erp] },
  { label: "Podcasts", items: [podcast.ready, podcast.signs, podcast.bc] },
  { label: "Blogs", blogCategory: "business-central" },
];

export const axResources = [
  { label: "Case Studies", items: [cs.logistic, cs.projectMgmt, cs.healthcare] },
  { label: "e-Books", items: [ebook.finance, ebook.scm, ebook.erp] },
  { label: "Podcasts", items: [podcast.ready, podcast.signs] },
  { label: "Videos", items: [video.financePremium, video.copilotFinance, video.scm] },
  { label: "Blogs", blogCategory: "dynamics-365-finance" },
];

export const gpResources = [
  { label: "Case Studies", items: [cs.leda, cs.omicron, cs.almi] },
  { label: "e-Books", items: [ebook.gpToBc, ebook.erp] },
  { label: "Podcasts", items: [podcast.ready, podcast.signs, podcast.bc] },
  { label: "Blogs", blogCategory: "business-central" },
];

export const foResources = [
  { label: "Case Studies", items: [cs.logistic, cs.projectMgmt, cs.healthcare] },
  { label: "e-Books", items: [ebook.finance, ebook.scm, ebook.erp] },
  { label: "Podcasts", items: [podcast.ready, podcast.signs] },
  { label: "Videos", items: [video.financePremium, video.copilotFinance, video.scm] },
  { label: "Blogs", blogCategory: "dynamics-365-finance" },
];

export const navLinks = [
  { href: "/dynamics-nav-to-business-central/", title: "Dynamics NAV to Business Central Upgrade", icon: "bi-arrow-up-circle" },
  { href: "/dynamics-nav-vs-business-central/", title: "Dynamics NAV vs Business Central", icon: "bi-arrow-left-right" },
  { href: "/dynamics-nav-support-ending-soon/", title: "Dynamics NAV Support End of Life", icon: "bi-calendar-x" },
  { href: "/dynamics-nav-to-business-central/", title: "Dynamics NAV is Now Dynamics 365 Business Central", icon: "bi-arrow-repeat" },
  { href: "/products/dynamics-365-business-central/", title: "Microsoft Dynamics 365 Business Central", icon: "bi-grid" },
  { href: "/d365-business-central-support/", title: "Dynamics 365 Business Central Support", icon: "bi-headset" },
];

export const axLinks = [
  { href: "/faqs-upgrading-dynamics-ax-to-dynamics-365/", title: "FAQs: Upgrading Dynamics AX to Dynamics 365", icon: "bi-question-circle" },
  { href: "/products/microsoft-dynamics-365-finance-operations/", title: "Dynamics 365 Finance and Operations", icon: "bi-grid" },
  { href: "/products/microsoft-dynamics-365-finance/", title: "Microsoft Dynamics 365 Finance", icon: "bi-calculator" },
  { href: "/products/dynamics-365-supply-chain-management/", title: "Dynamics 365 Supply Chain Management", icon: "bi-truck" },
  { href: "/why-to-migrate-to-d365-finance-supply-chain/", title: "Why Migrate to Dynamics 365 Finance & Supply Chain", icon: "bi-arrow-up-circle" },
  { href: "/dynamics-365-finance-implementation/", title: "Dynamics 365 Finance Implementation", icon: "bi-gear" },
];

export const gpLinks = [
  { href: "/gp-to-business-central-migration/", title: "Dynamics GP to Business Central Migration", icon: "bi-arrow-up-circle" },
  { href: "/products/dynamics-365-business-central/", title: "Microsoft Dynamics 365 Business Central", icon: "bi-grid" },
  { href: "/dynamics-365-business-central-implementation/", title: "Business Central Implementation", icon: "bi-gear" },
  { href: "/d365-business-central-support/", title: "Dynamics 365 Business Central Support", icon: "bi-headset" },
  { href: "/products/dynamics-365-business-central/pricing-licensing/", title: "Business Central Pricing & Licensing", icon: "bi-tag" },
  { href: "/products/microsoft-dynamics-erp/", title: "Microsoft Dynamics ERP", icon: "bi-diagram-3" },
];

export const foLinks = [
  { href: "/dynamics-365-business-central-vs-finance-operations/", title: "Business Central vs Finance & Operations", icon: "bi-arrow-left-right" },
  { href: "/dynamics-365-finance-operations-vs-sap-erp/", title: "Dynamics 365 Finance & Operations vs SAP ERP", icon: "bi-building" },
  { href: "/blog/d365-finance-and-operations-overview/", title: "D365 Finance And Operations: Overview, Capabilities, Benefits, FAQ", icon: "bi-journal-text" },
  { href: "/products/microsoft-dynamics-365-finance/", title: "What is Microsoft Dynamics 365 Finance?", icon: "bi-calculator" },
  { href: "/blog/d365-supply-chain-management-overview/", title: "Dynamics 365 Supply Chain Management: Overview, Benefits, Features", icon: "bi-truck" },
  { href: "/blog/what-is-dynamics-365-supply-chain-management/", title: "What Is Dynamics 365 Supply Chain?", icon: "bi-box-seam" },
  { href: "/blog/dynamics-365-pricing-and-licensing/", title: "Dynamics 365 Pricing And Licensing", icon: "bi-tag" },
  { href: "/products/microsoft-dynamics-ax/", title: "Microsoft Dynamics AX", icon: "bi-clock-history" },
];

export const foDocuments = [
  { href: "/pdf/Nucleus-Research.pdf", title: "Microsoft Dynamics365 Finance Operations" },
];

// ---------------------------------------------------------------------
// Business Central template pages (BC vs SAP, BC vs F&O, Why Choose BC,
// NAV vs BC, BC Advantages & Capabilities)
// ---------------------------------------------------------------------
const bcCs = {
  summit: { href: "/case-studies/business-central-reimplementation-for-recycling-industry/", img: "/img/Summit-Systems.png", alt: "Summit Systems Business Central reimplementation case study", title: "Summit Systems: Business Central Reimplementation", text: "Summit Systems, a specialist in plastic automation, simplified its complex buy-sell operations and strengthened project control using Microsoft Dynamics 365 Business Central.", cta: "Read More" },
  foodTrader: { href: "/case-studies/business-central-reimplementation-for-food-trader/", img: "/img/mgg-food-feautre.jpg", alt: "World Food Trading Business Central implementation case study", title: "World Food Trading: Business Central Implementation", text: "World Food Trading boosted operational control by 162% ROI in 3 years by adopting Business Central from scratch with Dynamics Square.", cta: "Read More" },
  quickbooks: { href: "/case-studies/quickbooks-to-business-central-migration/", img: "/img/Greenstar.jpg", alt: "QuickBooks to Business Central migration case study", title: "QuickBooks ERP to Business Central Migration", text: "An established importer of citrus fruits has achieved enhanced operational efficiency by 80% with the Business Central implementation.", cta: "Read More" },
  bsix: { href: "/case-studies/upgrade-from-nav09-to-business-central/", img: "/img/BSix.jpg", alt: "BSix Sixth Form College NAV 2009 to Business Central case study", title: "BSix Sixth Form College: NAV 2009 to Business Central", text: "BSix Sixth Form College in London improved department collaboration by 80% with the Business Central upgrade.", cta: "Read More" },
  meirion: { href: "/case-studies/dynamics-nav09-to-business-central-upgrade/", img: "/img/Meirion-Davies.jpg", alt: "Dynamics NAV 2009 to Business Central upgrade case study", title: "Dynamics NAV 2009 to Business Central Upgrade", text: "A leading supplier of fertilizer and agrochemicals has increased customer satisfaction by 70% with Business Central upgrade.", cta: "Read More" },
  dalebrook: { href: "/case-studies/migrate-on-premises-to-business-central-cloud/", img: "/img/Dalebrook-Supplies.jpg", alt: "Dalebrook Supplies on-premises to Business Central cloud case study", title: "Dalebrook Supplies: On-Premises to Business Central Cloud", text: "Dalebrook Supplies, a leading UK melamine food display manufacturer, achieved enhanced productivity by 50% with Business Central cloud re-implementation.", cta: "Read More" },
};
const bcPodcasts = [podcast.bc, podcast.ready, podcast.signs];

export const bcVsSapResources = [
  { label: "Case Studies", items: [bcCs.summit, bcCs.foodTrader, cs.omicron] },
  { label: "e-Books", items: [ebook.erp, ebook.navToBc, ebook.gpToBc] },
  { label: "Podcasts", items: bcPodcasts },
  { label: "Blogs", blogCategory: "business-central" },
];

export const bcVsFoResources = [
  { label: "Case Studies", items: [cs.leda, cs.logistic, cs.projectMgmt] },
  { label: "e-Books", items: [ebook.erp, ebook.finance, ebook.navToBc] },
  { label: "Podcasts", items: bcPodcasts },
  { label: "Videos", items: [video.financePremium, video.copilotFinance] },
  { label: "Blogs", blogCategory: "business-central" },
];

export const whyBcResources = [
  { label: "Case Studies", items: [bcCs.summit, bcCs.foodTrader, bcCs.quickbooks] },
  { label: "e-Books", items: [ebook.erp, ebook.navToBc, ebook.gpToBc] },
  { label: "Podcasts", items: bcPodcasts },
  { label: "Blogs", blogCategory: "business-central" },
];

export const navVsBcResources = [
  { label: "Case Studies", items: [cs.pasante, bcCs.bsix, bcCs.meirion] },
  { label: "e-Books", items: [ebook.navToBc, ebook.erp] },
  { label: "Podcasts", items: bcPodcasts },
  { label: "Blogs", blogCategory: "business-central" },
];

export const bcAdvantagesResources = [
  { label: "Case Studies", items: [bcCs.summit, cs.leda, bcCs.dalebrook] },
  { label: "e-Books", items: [ebook.erp, ebook.navToBc, ebook.gpToBc] },
  { label: "Podcasts", items: bcPodcasts },
  { label: "Blogs", blogCategory: "business-central" },
];
