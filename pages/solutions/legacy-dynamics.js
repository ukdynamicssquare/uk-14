import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/products/microsoft-dynamics-nav/",
    img: "/img/menu-icons/NAV.png",
    alt: "Dynamics NAV",
    title: "Dynamics NAV",
    tag: "Upgrade path: Business Central",
    desc: "Keep your NAV system running smoothly with support and fixes, and plan a move to Business Central that carries your data and customisations forward.",
  },
  {
    href: "/products/microsoft-dynamics-crm/",
    img: "/img/menu-icons/CRM.png",
    alt: "Dynamics CRM",
    title: "Dynamics CRM",
    tag: "Upgrade path: Dynamics 365 Sales",
    desc: "Support for older on-premises Dynamics CRM versions, plus migration to Dynamics 365 Sales and Customer Service to unlock Copilot and cloud access.",
  },
  {
    href: "/products/microsoft-dynamics-ax/",
    img: "/img/menu-icons/AX.png",
    alt: "Dynamics AX",
    title: "Dynamics AX",
    tag: "Upgrade path: Finance & Supply Chain",
    desc: "Stabilise and maintain AX 2009 or AX 2012 while we map out a phased move to Dynamics 365 Finance and Supply Chain Management.",
  },
  {
    href: "/products/microsoft-dynamics-gp/",
    img: "/img/menu-icons/GP.png",
    alt: "Dynamics GP",
    title: "Dynamics GP",
    tag: "Upgrade path: Business Central",
    desc: "With Dynamics GP nearing the end of support, get help keeping it secure today and a clear plan for migrating your finance data to Business Central.",
  },
  {
    href: "/products/microsoft-dynamics-erp/",
    img: "/img/menu-icons/ERP.png",
    alt: "Dynamics ERP",
    title: "Dynamics ERP",
    tag: "All Dynamics ERP versions",
    desc: "Not sure which Dynamics ERP you are running or where to go next? We assess your current system and recommend the right Dynamics 365 destination.",
  },
  {
    href: "/products/microsoft-dynamics-365-finance-operations/",
    img: "/img/menu-icons/F&Q.png",
    alt: "Dynamics F&O",
    title: "Dynamics F&O",
    tag: "Optimise and extend",
    desc: "Already on Finance and Operations? We review your setup, tidy up customisations and help you adopt the latest features and Copilot capabilities.",
  },
];

const LegacyDynamics = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="Legacy Dynamics | Dynamics Square"
      description="Dynamics NAV, CRM, AX, GP, ERP and F&O."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="settings"
      heading="Legacy Dynamics"
      title="Support and Upgrades for Legacy Microsoft Dynamics Products"
      intro="Still running Dynamics NAV, CRM, AX, GP or F&O? Explore the legacy Dynamics products we support, upgrade, and modernise for today's AI-powered Dynamics 365."
      items={ITEMS}
    />
  </>
);

export default LegacyDynamics;
