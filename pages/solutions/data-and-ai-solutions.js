import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/ai-solutions/",
    img: "/img/menu-icons/ai-solutions-sparkle.svg",
    alt: "AI Solutions",
    title: "AI Solutions",
    tag: "Dynamics 365 AI",
    desc: "See how AI fits across Dynamics 365, from automating everyday tasks to giving teams faster answers, and where to start for your business.",
  },
  {
    href: "/ai-solutions/microsoft-fabric/",
    img: "/img/menu-icons/microsoft-fabric.png",
    alt: "Microsoft Fabric",
    title: "Microsoft Fabric",
    tag: "Unified data platform",
    desc: "Bring data from Dynamics 365 and your other systems into one lakehouse, so engineering, analytics and reporting all work from a single source of truth.",
  },
  {
    href: "/ai-solutions/microsoft-foundry/",
    img: "/img/menu-icons/azure.svg",
    alt: "Microsoft Foundry",
    title: "Microsoft Foundry",
    tag: "Enterprise AI agents",
    desc: "Design, deploy and monitor AI agents on Azure, with the security controls and governance your IT team needs before AI goes into production.",
  },
  {
    href: "/products/microsoft-power-bi/",
    img: "/img/menu-icons/power-bi.svg",
    alt: "Power BI",
    title: "Power BI",
    tag: "Reporting and dashboards",
    desc: "Turn finance, sales and operations data into interactive dashboards that managers can explore themselves, on desktop, mobile or inside Teams.",
  },
  {
    href: "/products/dynamics-365-copilot/",
    img: "/img/menu-icons/copilate-small.png",
    alt: "D365 Copilot",
    title: "D365 Copilot",
    tag: "AI inside Dynamics 365",
    desc: "Use Copilot within Business Central, Sales and Customer Service to draft content, summarise records and answer questions about your business data.",
  },
  {
    href: "/products/azure-machine-learning/",
    img: "/img/menu-icons/machine-learning.svg",
    alt: "Azure Machine Learning",
    title: "Machine Learning / Azure",
    tag: "Predictive models",
    desc: "Build and run models that forecast demand, flag risk and spot patterns in your data, managed end to end on Azure Machine Learning.",
  },
];

const DataAndAiSolutions = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="Data & AI Solutions | Dynamics Square"
      description="Microsoft Fabric, Microsoft Foundry, Power BI, Dynamics 365 Copilot and Azure Machine Learning."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="profile"
      heading="Data & AI Solutions"
      title="Unlock Your Business Data with Microsoft Data and AI"
      intro="Unify your data, report on it with confidence and put AI to work across your business with Microsoft Fabric, Foundry, Power BI, Copilot and Azure Machine Learning - delivered by Dynamics Square."
      items={ITEMS}
    />
  </>
);

export default DataAndAiSolutions;
