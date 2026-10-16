// menuData.js
// All navigation content lives here. To add/remove/reorder a menu item,
// edit this file only — DeskstopMenu.jsx just maps over it.

export const solutionMenu = {
  tabs: [
    {
      id: "home",
      label: "Company By Size",
      items: [
        {
          href: "/erp-for-startups/",
          icon: "/img/menu-icons/store.png",
          title: "Startup",
          desc: "Smart ERP solutions to kickstart your growth",
        },
        {
          href: "/dynamics-365-for-small-businesses/",
          icon: "/img/menu-icons/storefront.png",
          title: "Small Business",
          desc: "Simplifying business for small, ambitious teams",
        },
        {
          href: "/dynamics-365-for-medium-businesses/",
          icon: "/img/menu-icons/group-3535.png",
          title: "Mid Size",
          desc: "Powering growth for mid-sized businesses.",
        },
        {
          href: "/dynamics-365-for-large-businesses/",
          icon: "/img/menu-icons/factory.png",
          title: "Enterprise",
          desc: "Advanced ERP solutions for large, global enterprises",
        },
      ],
    },
    {
      id: "addon",
      label: "ERP",
      items: [
        {
          href: "/products/dynamics-365-business-central/",
          icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
          title: "Business Central",
          desc: "All-in-one solution for all your business practices",
        },
        {
          href: "/products/microsoft-dynamics-365-finance/",
          icon: "/img/menu-icons/dynamics-365-finance.svg",
          title: "Finance",
          desc: "Improve your finance practices",
        },
        {
          href: "/products/dynamics-365-supply-chain-management/",
          icon: "/img/menu-icons/dynamics-365-supplychainmanagement.svg",
          title: "Supply Chain",
          desc: "Optimize operations and drive agile Supply Chain",
        },
        {
          href: "/products/dynamics-365-human-resources/",
          icon: "/img/menu-icons/dynamics-365-HRM.svg",
          title: "Human Resource",
          desc: "Optimize Your Resource Utilization",
        },
        {
          href: "/products/microsoft-dynamics-365-commerce/",
          icon: "/img/menu-icons/dynamics-365-commerce.svg",
          title: "Commerce",
          desc: "Unify Your Back-Office, In-Store, And Digital Experience",
        },
        {
          href: "/products/dynamics-365-project-operations/",
          icon: "/img/menu-icons/dynamics-365-project-management.svg",
          title: "Project Operations",
          desc: "Automate and streamline your projects",
        },
      ],
    },
    {
      id: "CRM",
      label: "CRM",
      items: [
        {
          href: "/products/microsoft-dynamics-365-sales/",
          icon: "/img/menu-icons/dynamics-365-sales.svg",
          title: "Sales",
          desc: "Drive end-to-end sales practices",
        },
        {
          href: "/products/microsoft-dynamics-365-marketing/",
          icon: "/img/menu-icons/dynamics-365-marketing.svg",
          title: "Marketing",
          desc: "Maximize ROI with integrated Marketing",
        },
        {
          href: "/products/microsoft-dynamics-365-field-service/",
          icon: "/img/menu-icons/dynamics-365-fieldservice.svg",
          title: "Field Service",
          desc: "Drive connected and collaborated field service",
        },
        {
          href: "/products/microsoft-dynamics-365-customer-service/",
          icon: "/img/menu-icons/dynamics-365-customer-service.svg",
          title: "Customer Service",
          desc: "Drive omnichannel customer experience",
        },
        {
          href: "/products/dynamics-365-customer-engagement/",
          icon: "/img/menu-icons/dynamics-365-customer-engagement.svg",
          title: "Customer Engagement",
          desc: "Transform Your Marketing Operations",
        },
      ],
    },
    {
      id: "settingss",
      label: "Integrations",
      items: [
        {
          href: "/continia-for-dynamics-365-business-central/",
          icon: "/img/menu-icons/continia.png",
          title: "Continia integration",
          desc: "Scan, analyse, and process documents with optimum quality",
        },
        {
          href: "/insights-works-for-dynamics-365-business-central/",
          icon: "/img/menu-icons/Insight_Work.png",
          title: "Insight Works",
          desc: "Optimise your inventory and distribution operations effortlessly",
        },
        {
          href: "/sana-commerce-for-dynamics-365-business-central/",
          icon: "/img/menu-icons/Sana_Commerce.png",
          title: "Sana Commerce",
          desc: "Avail a cloud e-commerce solution to supercharge your online store",
        },
        {
          href: "/wms-for-business-central/",
          icon: "/img/menu-icons/taskley-logo-im.png",
          title: "Tasklet's Mobile WMS",
          desc: "Optimize warehouse operations, simplify inventory, boost profits",
        },
        {
          href: "/continia-document-capture-with-business-central/",
          icon: "/img/menu-icons/continia.png",
          title: "Continia OCR",
          desc: "Transform document management, streamline processing, manage easily",
        },
        {
          href: "/continia-expense-management/",
          icon: "/img/menu-icons/continia.png",
          title: "Continia Expense Management ",
          desc: "Monitor corporate expenses, eliminate manual errors with Continia",
        },
        {
          href: "/shopify-connector-business-central/",
          icon: "/img/menu-icons/shopify-integration-logo.svg",
          title: "Shopify Connector",
          desc: "Synchronize orders, inventory, and customers across platforms",
        },
        {
          href: "/yavrio-integration-with-business-central/",
          icon: "/img/menu-icons/image-541.png",
          title: "Yavrio Integration",
          desc: "Connect banking data to ERP for automated workflows",
        },
      ],
    },
    {
      id: "profile",
      label: "Power Platform",
      items: [
        {
          href: "/products/microsoft-power-bi/",
          icon: "/img/menu-icons/power-bi.svg",
          title: "Power BI",
          desc: "Create powerful visual insights, analytics",
        },
        {
          href: "/products/microsoft-power-apps/",
          icon: "/img/menu-icons/power-apps.svg",
          title: "Power Apps",
          desc: "Build web & mobile apps with zero or minimal code",
        },
        {
          href: "/products/microsoft-power-automate/",
          icon: "/img/menu-icons/power-automate.svg",
          title: "Power Automate",
          desc: "Automate your processes to improve workflows",
        },
        {
          href: "/products/microsoft-power-virtual-agents/",
          icon: "/img/menu-icons/virtual agent.svg",
          title: "Power Virtual Agents",
          desc: "Create powerful AI Bots to maximize productivity",
        },
      ],
    },
    {
      id: "settings",
      label: "Legacy Dynamics",
      items: [
        {
          href: "/products/microsoft-dynamics-nav/",
          icon: "/img/menu-icons/NAV.png",
          title: "Dynamics NAV",
          desc: "A flexible ERP solution for SMBs",
        },
        {
          href: "/products/microsoft-dynamics-crm/",
          icon: "/img/menu-icons/CRM.png",
          title: "Dynamics CRM",
          desc: "Increase Revenue and Customer Satisfaction",
        },
        {
          href: "/products/microsoft-dynamics-ax/",
          icon: "/img/menu-icons/AX.png",
          title: "Dynamics AX",
          desc: "The Most Complete, Agile And Powerful ERP",
        },
        {
          href: "/products/microsoft-dynamics-gp/",
          icon: "/img/menu-icons/GP.png",
          title: "Dynamics GP",
          desc: "Accounting software designed for SMEs",
        },
        {
          href: "/products/microsoft-dynamics-erp/",
          icon: "/img/menu-icons/ERP.png",
          title: "Dynamics ERP",
          desc: "Streamline Entire Business Management with Ease",
        },
        {
          href: "/products/microsoft-dynamics-365-finance-operations/",
          icon: "/img/menu-icons/F&Q.png",
          title: "Dynamics F&O",
          desc: "Accelerate your Finance and Inventory more Efficiently",
        },
      ],
    },
  ],
  essentialTool: {
    heading: "Essential Tool",
    items: [
      {
        href: "/tools/erp-implementation-cost-calculator/",
        title: "Get Your ERP Cost Estimate",
        para: "Quick, free, and tailored to your business.",
        cta: "Check Now",
      },
    ],
  },
  promos: [
    {
      href: "https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35",
      image: "/img/forber-01.png",
      width: 771,
      height: 282,
      external: true,
      rel: "nofollow",
    },
    {
      href: "/products/dynamics-365-copilot/",
      image: "/img/menu--ss.png",
      width: 706,
      height: 180,
    },
  ],
};

export const industriesMenu = [
  {
    href: "/industries/dynamics-365-for-distribution/",
    icon: "/img/menu-icons/distribution-truck.png",
    title: "Distribution",
    desc: "Drive seamless supply flow with connected operations ",
  },
  {
    href: "/industries/microsoft-cloud-for-manufacturing/",
    icon: "/img/menu-icons/MAnufacturing.png",
    title: "Manufacturing",
    desc: "Connect your people and operations to drive profitability",
  },
  {
    href: "/industries/dynamics-365-for-education/",
    icon: "/img/menu-icons/education.png",
    title: "Education",
    desc: "Effectively manage students and staff for overall growth",
  },
  {
    href: "/industries/ecommerce/",
    icon: "/img/menu-icons/E-commerce.png",
    title: "Ecommerce",
    desc: "Optimise E-commerce processes with real-time stocks",
  },
  {
    href: "/industries/professional-services/",
    icon: "/img/menu-icons/Professional-ervice.png",
    title: "Professional Services",
    desc: "Streamline administration processes leveraging automation",
  },
  {
    href: "/industries/food-and-beverages/",
    icon: "/img/menu-icons/Food.png",
    title: "Food & Beverages",
    desc: "Manage supply and inventory processes with real-time data",
  },
  {
    href: "/industries/dynamics-365-for-healthcare/",
    icon: "/img/menu-icons/healthcare.png",
    title: "Healthcare",
    desc: "Track clinical operations while enhancing patient experience",
  },
  {
    href: "/industries/dynamics-365-for-retail/",
    icon: "/img/menu-icons/retail-icon.png",
    title: "Retail",
    desc: "Optimize retail operations with seamless user experience",
  },
];

export const servicesMenu = [
  { href: "/our-services/dynamics-365-implementation-services/", label: "Implementation Services" },
  { href: "/our-services/dynamics-365-support-services/", label: "Support Services" },
  { href: "/our-services/dynamics-365-upgrade-services/", label: "Upgrade Services" },
  { href: "/our-services/dynamics-365-training/", label: "Dynamics 365 Training" },
  { href: "/our-services/dynamics-365-consultant/", label: "Dynamics 365 Consultants" },
];

export const companyMenu = [
  { href: "/about-us/", label: "About Us" },
  { href: "/why-us/", label: "Why Us" },
  { href: "/partner/", label: "Partners" },
  { href: "/career/", label: "Careers" },
];

// Same featured-article card appears in every Resources tab's right rail.
export const resourcesFeaturedArticle = {
  tag: "Featured Article",
  title: "How Much Time Can Copilot Save in Dynamics 365 Business Central?",
  para: "Discover how much time Copilot saves in Dynamics 365 Business Central by automating...",
  image: "/img/menu-icons/pic-006.png",
  href: "/blog/copilot-business-central-time-savings/",
  bannerImage: "/img/menu--ss.png",
  bannerHref: "/products/dynamics-365-copilot/",
};

export const resourcesMenu = {
  tabs: [
    {
      id: "res-one",
      label: "Blogs",
      icon: "/img/menu-icons/res-meg-00.png",
      type: "blogs",
      columns: [
        {
          heading: "By product",
          links: [
            { href: "/blog/category/business-central/", label: "Business Central" },
            { href: "/blog/category/dynamics-365-fo/", label: "Finance" },
            { href: "/blog/category/dynamics-365-scm/", label: "Supply Chain" },
            { href: "/blog/category/dynamics-365-crm/", label: "Sales" },
            { href: "/blog/category/field-service/", label: "Field Service" },
            { href: "/blog/category/microsoft-dynamics-365/", label: "Copilot" },
            { href: "/blog/category/dynamics-365-crm/", label: "Customer Service" },
          ],
        },
        {
          heading: "By Industry",
          links: [
            { href: "/blog/tag/Manufacturing", label: "Manufacturing" },
            { href: "/blog/tag/Retail/", label: "Retail & Ecommerce" },
            { href: "/blog/tag/Distribution/", label: "Distribution" },
            { href: "/blog/tag/Professional-Services/", label: "Professional Services" },
            { href: "/blog/tag/Healthcare", label: "Healthcare" },
            { href: "/blog/tag/Education", label: "Education" },
          ],
        },
      ],
      editorsPicks: {
        heading: "Editor's Picks",
        links: [
          { href: "/blog/what-is-business-central-implementation-methodology/", label: "Business Central Implementation Methodology" },
          { href: "/blog/quickbooks-to-microsoft-business-central-migration/", label: "QuickBooks to Business Central Migration" },
          { href: "/blog/sage-to-business-central-migration/", label: "Sage to Business Central Migration" },
          { href: "/dynamics-nav-to-business-central/", label: "NAV to Business Central Upgrade" },
          { href: "/gp-to-business-central-migration/", label: "Dynamics GP to Business Central Migration" },
          { href: "/blog/xero-to-business-central-migration/", label: "Xero to Business Central Migration" },
        ],
      },
    },
    {
      id: "res-two",
      label: "Case Study",
      icon: "/img/menu-icons/res-meg-01.png",
      type: "caseStudy",
      services: [
        { href: "/case-studies/#Implementation", icon: "bi-gear", title: "Implementation", desc: "Business Central | Finance" },
        { href: "/case-studies/#Upgrade", icon: "bi-back", title: "ERP Upgrade", desc: "Nav, GP, AX Upgrade" },
        { href: "/case-studies/#Support", icon: "bi-person-add", title: "Managed Support", desc: "24×7 Support & Optimization" },
      ],
      highlights: {
        heading: "Customer Success Highlights",
        links: [
          { href: "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/", label: "Stronger Financial Control for Global Rollout | Bertling Group", highlighted: true },
          { href: "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/", label: "162% Projected ROI with 8% Efficiency Gain | UK Manufacturer" },
          { href: "/business-central-reimplementation-for-retail-market/", label: "Digitally Synchronized Warehouse Operations | Northern Ireland Saddlery Business" },
          { href: "/case-studies/business-central-reimplementation-for-food-trader/", label: "162% Projected ROI and £32K+ Savings | World Food Trading" },
          { href: "/case-studies/nav-2013-r2-to-business-central-upgrade/", label: "Improved Efficiency and Real-Time Visibility | UK Orthodontic Supplier" },
        ],
        exploreHref: "/case-studies/",
        exploreLabel: "Explore Customer Stories",
      },
    },
    {
      id: "res-three",
      label: "eBooks",
      icon: "/img/menu-icons/res-meg-03.png",
      type: "ebooks",
      recommended: {
        tag: "Recommended",
        href: "/ebook/how-to-choose-right-erp/",
        image: "/img/Cover_Book_Moc.png",
        title: "Ultimate Guide to Choose the Right ERP For Your Business",
        desc: "Compare ERP solutions before making your investment.",
        cta: "Get Free eBook",
      },
      popularHeading: "Popular eBooks",
      items: [
        { href: "/ebook/gp-to-bc-migration/", image: "/img/dynamics-GP-BC-Ebook-featured-image.png", title: "A Complete Guide to Dynamics GP to BC", desc: "A Complete Guide for Microsoft Dynamics GP (Great Plains) to Business Central Migration" },
        { href: "/ebook/d365-supply-chain-management/", image: "/img/dynamics-SCM-Ebook-featured-image.png", title: "A Complete Guide to Dynamics SCM", desc: "A Complete Guide to Dynamics 365 Supply Chain Management" },
        { href: "/ebook/dynamics-crm/", image: "/img/dynamics-CRM-Ebook-featured-image.jpg", title: "A Complete Guide to Dynamics CRM", desc: "Microsoft Dynamics CRM is a simple yet powerful tool that can help businesses streamline" },
        { href: "/ebook/dynamics-365-finance/", image: "/img/nav-guide-pic.png", title: "The Extensive Guide to Dynamics 365 Finance", desc: "D365 Finance is an intelligent ERP (Enterprise Resource Planning) solution" },
      ],
      viewAllHref: "/ebook/",
      viewAllLabel: "View All eBooks",
    },
    {
      id: "res-four",
      label: "Guides",
      icon: "/img/menu-icons/res-meg-04.png",
      type: "guides",
      guides: {
        heading: "Guides",
        subheading: "Learn before you implement",
        items: [
          { href: "/the-ultimate-guide-to-microsoft-dynamics-365/", image: "/img/the-ultmate-ai-guide-banner.png", tag: "Guide", title: "Microsoft Dynamics 365: Complete Guide to CRM, ERP & Business Applications (2026)" },
          { href: "/guides/business-central-guide-for-smb/", image: "/img/chapter5-5.png", tag: "Guide", title: "Business Central: The Definitive Guide For SMBs" },
        ],
        viewAllHref: "/guides/",
        viewAllLabel: "Explore All Guides",
      },
      whitepapers: {
        heading: "Whitepapers",
        subheading: "Strategic resources for decision makers",
        items: [
          { href: "/white-papers/microsoft-copilot/", image: "/img/white-p-one.png", tag: "Whitepapers", title: "Microsoft Copilot: The Catalyst for Transformation in Your Business" },
          { href: "/white-papers/microsoft-finance/", image: "/img/finacne-white-paper-category.png", tag: "Whitepapers", title: "Dynamics 365 Finance with Copilot WhitePaper" },
        ],
        viewAllHref: "/white-papers/",
        viewAllLabel: "Explore All Whitepapers",
      },
    },
    {
      id: "res-five",
      label: "Tools",
      icon: "/img/menu-icons/res-meg-05.png",
      type: "tools",
      heading: "TOOLS",
      subheading: "Estimate costs, compare solutions, and choose the right Microsoft Dynamics 365 platform with confidence.",
      items: [
        { href: "/tools/microsoft-dynamics-licensing-calculator/", image: "/img/tools-three.png", tag: "Licensing Calculator", title: "Calculate your Dynamics 365 licensing costs.", cta: "Calculate Now" },
        { href: "/tools/erp-implementation-cost-calculator/", image: "/img/tools-one.png", tag: "ERP Calculator", title: "Estimate implementation costs in minutes.", cta: "Calculate Now" },
        { href: "/tools/top-erp-systems-comparison/", image: "/img/tools-two.png", tag: "ERP Comparison", title: "Compare Dynamics 365 solutions side-by-side.", cta: "Compare Now" },
      ],
    },
    {
      id: "res-six",
      label: "Webcasts",
      icon: "/img/menu-icons/res-meg-06.png",
      type: "webcasts",
      heading: "WEBCASTS",
      subheading: "Your go-to source for expert insights on CRM, ERP, and business transformation powered by Microsoft Dynamics 365",
      items: [
        { href: "https://www.youtube.com/watch?v=44hqw-S27D0", image: "/img/bc-8-20.png", title: "Is Your Business Ready for an ERP System?", desc: "Explore key signs, benefits, and steps to ERP readiness" },
        { href: "https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST", image: "/img/bc-8-22.png", title: "Signs Your Business Is Ready for an ERP System", desc: "Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation." },
        { href: "https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh", image: "/img/bc-8-21.png", title: "Unpacking Microsoft Dynamics 365 Business Central for Growth", desc: "Learn how Business Central helps streamline operations and scale growth in this expert-driven podcast episode." },
        { href: "https://www.youtube.com/watch?v=rAHE2BiaPkc", image: "/img/New-pic-Project.png", title: "CRM EXPLAINED! Why Your Business Might Fail Without It ", desc: "What really is a CRM—and why does every growing business keep talking about it?" },
      ],
      viewAllHref: "https://www.youtube.com/@DynamicsSquare",
      viewAllLabel: "View All Podcasts",
    },
  ],
};

/* =====================================================================
   Live navigation data — this is what DeskstopMenu.js and MobileMenu.js
   both render from, so editing a label/link here updates both menus.
   ===================================================================== */

export const SOLUTION_TABS = [
  { id: "home", target: "v-pills-home", label: "Company By Size", active: true },
  { id: "addon", target: "v-pills-addon", label: "AI-Powered ERP" },
  { id: "CRM", target: "v-pills-CRM", label: "AI-Powered CRM" },
  { id: "settingss", target: "v-pills-settingss", label: "Integrations", href: "#" },
  { id: "profile", target: "v-pills-profile", label: "Data & AI Solutions" },
  { id: "settings", target: "v-pills-settings", label: "Legacy Dynamics", href: "#" },
  { id: "power", target: "v-pills-power", label: "AI-Intelligent Apps", href: "#" },
];

export const SOLUTION_PANELS = {
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
    { href: "/products/azure-machine-learning/", img: "/img/menu-icons/machine-learning.svg", alt: "Machine Learning / Azure", title: "Machine Learning / Azure", desc: "Build scalable enterprise-grade Machine Learning solutions" },
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

export const INDUSTRIES = [
  { href: "/industries/dynamics-365-for-distribution/", img: "/img/menu-icons/distribution-truck.png", alt: "MAnufacturing", title: "Distribution", desc: "Drive seamless supply flow with connected operations " },
  { href: "/industries/microsoft-cloud-for-manufacturing/", img: "/img/menu-icons/MAnufacturing.png", alt: "MAnufacturing", title: "Manufacturing", desc: "Connect your people and operations to drive profitability" },
  { href: "/industries/dynamics-365-for-education/", img: "/img/menu-icons/education.png", alt: "education", title: "Education", desc: "Effectively manage students and staff for overall growth" },
  { href: "/industries/ecommerce/", img: "/img/menu-icons/E-commerce.png", alt: "E-commerce", title: "Ecommerce", desc: "Optimise E-commerce processes with real-time stocks" },
  { href: "/industries/professional-services/", img: "/img/menu-icons/Professional-ervice.png", alt: "Professional-ervice", title: "Professional Services", desc: "Streamline administration processes leveraging automation" },
  { href: "/industries/food-and-beverages/", img: "/img/menu-icons/Food.png", alt: "Food", title: "Food & Beverages", desc: "Manage supply and inventory processes with real-time data" },
  { href: "/industries/dynamics-365-for-healthcare/", img: "/img/menu-icons/healthcare.png", alt: "healthcare", title: "Healthcare", desc: "Track clinical operations while enhancing patient experience" },
  { href: "/industries/dynamics-365-for-retail/", img: "/img/menu-icons/retail-icon.png", alt: "retail-icon", title: "Retail", desc: "Optimize retail operations with seamless user experience" },
];

export const OUR_SERVICES = [
  { href: "/our-services/dynamics-365-implementation-services/", label: "Implementation Services", icon: "bi-gear-wide-connected" },
  { href: "/our-services/dynamics-365-support-services/", label: "Support Services", icon: "bi-headset" },
  { href: "/our-services/dynamics-365-upgrade-services/", label: "Upgrade Services", icon: "bi-arrow-up-circle" },
  { href: "/our-services/dynamics-365-training/", label: "Dynamics 365 Training", icon: "bi-mortarboard" },
  { href: "/our-services/dynamics-365-consultant/", label: "Dynamics 365 Consultants", icon: "bi-people" },
];

export const COMPANY_LINKS = [
  { href: "/about-us/", label: "About Us", icon: "bi-building" },
  { href: "/why-us/", label: "Why Us", icon: "bi-patch-check" },
  { href: "/partner/", label: "Partners", icon: "bi-person-heart" },
  { href: "/career/", label: "Careers", icon: "bi-briefcase" },
];

export const RESOURCE_TABS = [
  { id: "res-one", target: "v-pills-res-one", label: "Blogs", icon: "/img/menu-icons/res-meg-00.png", active: true },
  { id: "res-two", target: "v-pills-res-two", label: "Case Studies", icon: "/img/menu-icons/res-meg-01.png" },
  { id: "res-three", target: "v-pills-res-three", label: "eBooks", icon: "/img/menu-icons/res-meg-03.png" },
  { id: "res-four", target: "v-pills-res-four", label: "Guides", icon: "/img/menu-icons/res-meg-04.png" },
  { id: "res-five", target: "v-pills-res-five", label: "Tools", icon: "/img/menu-icons/res-meg-05.png" },
  { id: "res-six", target: "v-pills-res-six", label: "Webcasts", icon: "/img/menu-icons/res-meg-06.png" },
];

export const BLOG_BY_PRODUCT = [
  { href: "/blog/category/business-central/", label: "Business Central" },
  { href: "/blog/category/dynamics-365-fando/", label: "Finance" },
  { href: "/blog/category/dynamics-365-scm/", label: "Supply Chain" },
  { href: "/blog/category/dynamics-365-crm/", label: "Sales" },
  { href: "/blog/category/field-service/", label: "Field Service" },
  { href: "/blog/category/microsoft-dynamics-365/", label: "Copilot" },
  { href: "/blog/category/dynamics-365-crm/", label: "Customer Service" },
];

export const BLOG_BY_INDUSTRY = [
  { href: "/blog/tag/Manufacturing", label: "Manufacturing" },
  { href: "/blog/tag/Retail/", label: "Retail & Ecommerce" },
  { href: "/blog/tag/Distribution/", label: "Distribution" },
  { href: "/blog/tag/Professional-Services/", label: "Professional Services" },
  { href: "/blog/tag/Healthcare", label: "Healthcare" },
  { href: "/blog/tag/Education", label: "Education" },
];

export const BLOG_EDITORS_PICKS = [
  { href: "/blog/what-is-business-central-implementation-methodology/", label: "Business Central Implementation Methodology" },
  { href: "/blog/quickbooks-to-microsoft-business-central-migration/", label: "QuickBooks to Business Central Migration" },
  { href: "/blog/sage-to-business-central-migration/", label: "Sage to Business Central Migration" },
  { href: "/dynamics-nav-to-business-central/", label: "NAV to Business Central Upgrade" },
  { href: "/gp-to-business-central-migration/", label: "Dynamics GP to Business Central Migration" },
  { href: "/blog/xero-to-business-central-migration/", label: "Xero to Business Central Migration" },
];

export const CASE_STUDY_SERVICES = [
  { href: "/case-studies/#Implementation", icon: "bi-gear", title: "Implementation", desc: "Business Central | Finance" },
  { href: "/case-studies/#Upgrade", icon: "bi-back", title: "ERP Upgrade", desc: "Nav, GP, AX Upgrade" },
  { href: "/case-studies/#Support", icon: "bi-person-add", title: "Managed Support", desc: "24×7 Support & Optimization" },
];

export const CASE_STUDY_HIGHLIGHTS = [
  { href: "/case-studies/dynamics-365-finance-for-logistic-uk-multi-entity/", label: "Stronger Financial Control for Global Rollout | Bertling Group" },
  { href: "/case-studies/business-central-with-crm-implement-for-equestrian-manufacturing/", label: "162% Projected ROI with 8% Efficiency Gain | UK Manufacturer" },
  { href: "/case-studies/business-central-reimplementation-for-retail-market/", label: "Digitally Synchronized Warehouse Operations | Northern Ireland Saddlery Business" },
  { href: "/case-studies/business-central-reimplementation-for-food-trader/", label: "162% Projected ROI and £32K+ Savings | World Food Trading" },
  { href: "/case-studies/nav-2013-r2-to-business-central-upgrade/", label: "Improved Efficiency and Real-Time Visibility | UK Orthodontic Supplier" },
];

export const POPULAR_EBOOKS = [
  { href: "/ebook/gp-to-bc-migration/", img: "/img/dynamics-GP-BC-Ebook-featured-image.png", alt: "dynamics-GP-BC-Ebook-featured-image", title: "Dynamics GP to BC Guide", desc: "GP to Business Central migration guide" },
  { href: "/ebook/d365-supply-chain-management/", img: "/img/dynamics-SCM-Ebook-featured-image.png", alt: "dynamics-SCM-Ebook", title: "Dynamics 365 SCM Guide", desc: "Guide to Supply Chain Management" },
  { href: "/ebook/dynamics-crm/", img: "/img/dynamics-CRM-Ebook-featured-image.jpg", alt: "dynamics-CRM-Ebook", title: "Dynamics 365 CRM Guide", desc: "Streamline your business with Dynamics CRM" },
  { href: "/ebook/dynamics-365-finance/", img: "/img/nav-guide-pic.png", alt: "manufacturing", title: "Dynamics 365 Finance Guide", desc: "Intelligent ERP solution for finance" },
];

export const GUIDES = [
  { href: "/the-ultimate-guide-to-microsoft-dynamics-365/", img: "/img/the-ultmate-ai-guide-banner.png", alt: "the-ultmate-ai-guide", tag: "Guide", title: "Dynamics 365: CRM, ERP & Apps Guide (2026)" },
  { href: "/guides/business-central-guide-for-smb/", img: "/img/chapter5-5.png", alt: "guide", tag: "Guide", title: "Business Central Guide for SMBs" },
];

export const WHITEPAPERS = [
  { href: "/white-papers/microsoft-copilot/", img: "/img/white-p-one.png", alt: "guide", tag: "Whitepapers", title: "Microsoft Copilot for Business Transformation" },
  { href: "/white-papers/microsoft-finance/", img: "/img/finacne-white-paper-category.png", alt: "guide", tag: "Whitepapers", title: "Dynamics 365 Finance with Copilot" },
];

export const TOOLS = [
  { href: "/tools/microsoft-dynamics-licensing-calculator/", img: "/img/tools-three.png", tag: "Licensing Calculator", title: "Calculate your Dynamics 365 licensing costs.", cta: "Calculate Now" },
  { href: "/tools/erp-implementation-cost-calculator/", img: "/img/tools-one.png", tag: "ERP Calculator", title: "Estimate implementation costs in minutes.", cta: "Calculate Now" },
  { href: "/tools/top-erp-systems-comparison/", img: "/img/tools-two.png", tag: "ERP Comparison", title: "Compare Dynamics 365 solutions side-by-side.", cta: "Compare Now" },
];

export const WEBCASTS = [
  { href: "https://www.youtube.com/watch?v=44hqw-S27D0", img: "/img/bc-8-20.png", title: "Is Your Business ERP-Ready?", desc: "Key signs and steps to readiness" },
  { href: "https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST", img: "/img/bc-8-22.png", title: "Signs You Need an ERP", desc: "When and why to adopt Dynamics 365" },
  { href: "https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh", img: "/img/bc-8-21.png", title: "Business Central for Growth", desc: "How BC streamlines and scales operations" },
  { href: "https://www.youtube.com/watch?v=rAHE2BiaPkc", img: "/img/New-pic-Project.png", title: "CRM Explained", desc: "Why every business needs a CRM" },
];
