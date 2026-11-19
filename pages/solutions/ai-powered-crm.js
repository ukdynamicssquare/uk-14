import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/products/microsoft-dynamics-365-sales/",
    img: "/img/menu-icons/dynamics-365-sales.svg",
    alt: "Dynamics 365 Sales",
    title: "Sales",
    tag: "For sales teams",
    desc: "Track leads, opportunities and pipeline in one place, with Copilot summarising accounts and suggesting the next best action for every deal.",
  },
  {
    href: "/products/microsoft-dynamics-365-marketing/",
    img: "/img/menu-icons/dynamics-365-marketing.svg",
    alt: "Dynamics 365 Marketing",
    title: "Marketing",
    tag: "For marketing teams",
    desc: "Plan campaigns, build customer journeys and score leads using the same customer data your sales team works from, so every handover is warm.",
  },
  {
    href: "/products/microsoft-dynamics-365-field-service/",
    img: "/img/menu-icons/dynamics-365-fieldservice.svg",
    alt: "Dynamics 365 Field Service",
    title: "Field Service",
    tag: "For engineers and dispatchers",
    desc: "Schedule technicians, manage work orders and parts, and give engineers a mobile app so jobs are fixed right the first time.",
  },
  {
    href: "/products/microsoft-dynamics-365-customer-service/",
    img: "/img/menu-icons/dynamics-365-customer-service.svg",
    alt: "Dynamics 365 Customer Service",
    title: "Customer Service",
    tag: "For support teams",
    desc: "Handle email, chat, phone and social cases from a single workspace, with AI-drafted replies and a shared knowledge base that cuts resolution times.",
  },
  {
    href: "/products/dynamics-365-customer-engagement/",
    img: "/img/menu-icons/dynamics-365-customer-engagement.svg",
    alt: "Dynamics 365 Customer Engagement",
    title: "Customer Engagement",
    tag: "For the whole customer lifecycle",
    desc: "Connect sales, marketing and service on one platform to see every interaction with a customer and build longer, more profitable relationships.",
  },
];

const AiPoweredCrm = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="AI-Powered CRM | Dynamics Square"
      description="Dynamics 365 Sales, Marketing, Field Service, Customer Service and Customer Engagement."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="CRM"
      heading="AI-Powered CRM"
      title="Explore Microsoft Dynamics 365 AI-Powered CRM Solutions"
      intro="From sales and marketing to field service and customer service, explore the Dynamics 365 CRM lineup - with built-in AI and Copilot - implemented, integrated, and supported by Dynamics Square."
      items={ITEMS}
    />
  </>
);

export default AiPoweredCrm;
