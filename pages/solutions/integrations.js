import PageSeo from "../../components/PageSeo";
import SolutionTabLanding from "../../components/SolutionTabLanding";

const ITEMS = [
  {
    href: "/continia-for-dynamics-365-business-central/",
    img: "/img/menu-icons/continia.png",
    alt: "Continia",
    title: "Continia integration",
    tag: "Finance automation",
    desc: "Add Continia's suite of add-ons to Business Central to automate invoice capture, approvals, expenses and payments across your finance team.",
  },
  {
    href: "/insights-works-for-dynamics-365-business-central/",
    img: "/img/menu-icons/Insight_Work.png",
    alt: "Insight Works",
    title: "Insight Works",
    tag: "Inventory and distribution",
    desc: "Use Insight Works apps for barcode scanning, shipping and shop-floor data collection, working directly inside Business Central.",
  },
  {
    href: "/sana-commerce-for-dynamics-365-business-central/",
    img: "/img/menu-icons/Sana_Commerce.png",
    alt: "Sana Commerce",
    title: "Sana Commerce",
    tag: "B2B and B2C e-commerce",
    desc: "Launch a web store that reads prices, stock and customer terms straight from Business Central, so online orders need no re-keying.",
  },
  {
    href: "/wms-for-business-central/",
    img: "/img/menu-icons/taskley-logo-im.png",
    alt: "Tasklet's Mobile WMS",
    title: "Tasklet's Mobile WMS",
    tag: "Warehouse operations",
    desc: "Give warehouse staff handheld scanners for picking, packing, receiving and counting, with every movement posted to Business Central in real time.",
  },
  {
    href: "/continia-document-capture-with-business-central/",
    img: "/img/menu-icons/continia.png",
    alt: "Continia Document Capture",
    title: "Continia OCR",
    tag: "Document capture",
    desc: "Read supplier invoices and documents automatically with OCR, match them to purchase orders and route them for approval without manual entry.",
  },
  {
    href: "/continia-expense-management/",
    img: "/img/menu-icons/continia.png",
    alt: "Continia Expense Management",
    title: "Continia Expense Management",
    tag: "Employee expenses",
    desc: "Let employees snap receipts on their phones and submit claims that flow into Business Central for approval, reimbursement and VAT reporting.",
  },
  {
    href: "/shopify-connector-business-central/",
    img: "/img/menu-icons/shopify-integration-logo.svg",
    alt: "Shopify Connector",
    title: "Shopify Connector",
    tag: "Shopify stores",
    desc: "Keep your Shopify store and Business Central in step, with products, prices, stock levels and orders syncing automatically in both directions.",
  },
  {
    href: "/yavrio-integration-with-business-central/",
    img: "/img/menu-icons/image-541.png",
    alt: "Yavrio",
    title: "Yavrio Integration",
    tag: "Open banking",
    desc: "Pull bank transactions into Business Central through open banking feeds to speed up reconciliation and give you an up-to-date cash position.",
  },
];

const Integrations = () => (
  <>
    <PageSeo
      type="CollectionPage"
      title="Integrations | Dynamics Square"
      description="Business Central integrations including Continia, Insight Works, Sana Commerce, Tasklet, Shopify and Yavrio."
    >
      <meta name="robots" content="noindex, follow" />
    </PageSeo>
    <SolutionTabLanding
      panelId="settingss"
      heading="Integrations"
      title="Extend Dynamics 365 Business Central with Trusted Integrations"
      intro="Connect Business Central with document capture, warehouse management, e-commerce, expense management and banking tools - integrated and supported by Dynamics Square."
      items={ITEMS}
    />
  </>
);

export default Integrations;
