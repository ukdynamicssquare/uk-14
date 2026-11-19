import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/erp-for-startups/",
    img: "/img/menu-icons/store.png",
    alt: "ERP for startups",
    title: "Startup",
    tag: "1-10 employees",
    desc: "Replace spreadsheets and entry-level accounting tools early with a cloud ERP that is quick to set up and grows with your first hires and first investors.",
  },
  {
    href: "/dynamics-365-for-small-businesses/",
    img: "/img/menu-icons/storefront.png",
    alt: "Dynamics 365 for small businesses",
    title: "Small Business",
    tag: "10-50 employees",
    desc: "Bring finance, sales, stock and reporting into one system so a lean team spends less time on admin and more time serving customers.",
  },
  {
    href: "/dynamics-365-for-medium-businesses/",
    img: "/img/menu-icons/group-3535.png",
    alt: "Dynamics 365 for medium businesses",
    title: "Mid Size",
    tag: "50-500 employees",
    desc: "Handle more entities, more locations and more complex processes with Dynamics 365 configured around the way your departments already work.",
  },
  {
    href: "/dynamics-365-for-large-businesses/",
    img: "/img/menu-icons/factory.png",
    alt: "Dynamics 365 for large businesses",
    title: "Enterprise",
    tag: "500+ employees",
    desc: "Run multi-country, multi-currency operations on Dynamics 365 Finance and Supply Chain with the governance, security and scale large organisations need.",
  },
];

const CompanyBySize = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="Company By Size | Dynamics Square"
      description="Microsoft Dynamics 365 solutions for startups, small businesses, mid-size companies and enterprises."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="home"
      heading="Company By Size"
      title="Microsoft Dynamics 365 Solutions for Every Business Size"
      intro="Whether you are a startup, a small business, a mid-size company or a global enterprise, explore the Dynamics 365 solutions built for your stage of growth - implemented and supported by Dynamics Square."
      items={ITEMS}
    />
  </>
);

export default CompanyBySize;
