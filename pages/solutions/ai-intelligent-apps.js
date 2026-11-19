import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/products/microsoft-power-apps/",
    img: "/img/menu-icons/power-apps.svg",
    alt: "Power Apps",
    title: "Power Apps",
    tag: "Custom business apps",
    desc: "Turn paper forms and spreadsheets into secure apps for desktop and mobile, connected to Dynamics 365 and your other business data.",
  },
  {
    href: "/products/microsoft-power-automate/",
    img: "/img/menu-icons/power-automate.svg",
    alt: "Power Automate",
    title: "Power Automate",
    tag: "Workflow automation",
    desc: "Automate approvals, notifications and repetitive data entry between Dynamics 365, Outlook, Teams and hundreds of other apps.",
  },
  {
    href: "/ai-solutions/copilot-studio/",
    img: "/img/menu-icons/virtual-agent.svg",
    alt: "Copilot Studio",
    title: "Copilot Studio",
    tag: "AI agents",
    desc: "Design AI agents that answer staff and customer questions, look up records and complete tasks for you, all grounded in your own data.",
  },
];

const AiIntelligentApps = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="AI-Intelligent Apps | Dynamics Square"
      description="Power Apps, Power Automate and Copilot Studio."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="power"
      heading="AI-Intelligent Apps"
      title="Build AI-Intelligent Apps with Microsoft Power Platform"
      intro="Build apps with little or no code, automate workflows, and create AI agents for your business processes with Power Apps, Power Automate and Copilot Studio - delivered by Dynamics Square."
      items={ITEMS}
    />
  </>
);

export default AiIntelligentApps;
