import Head from "next/head";
import Link from "next/link";

const productCategories = [
  {
    id: "erp",
    title: "Dynamics 365 ERP",
    subtitle: "Run finance, operations, supply chain, and projects on one AI-powered platform.",
    products: [
      {
        href: "/products/dynamics-365-business-central/",
        icon: "/img/menu-icons/dynamics-365-businesscentral.svg",
        title: "Business Central",
        desc: "All-in-one AI-powered ERP for all your business practices",
      },
      {
        href: "/products/microsoft-dynamics-365-finance/",
        icon: "/img/menu-icons/dynamics-365-finance.svg",
        title: "Finance",
        desc: "Improve your finance practices with built-in Copilot AI insights",
      },
      {
        href: "/products/dynamics-365-supply-chain-management/",
        icon: "/img/menu-icons/dynamics-365-supplychainmanagement.svg",
        title: "Supply Chain Management",
        desc: "Optimize operations and drive an agile, AI-driven supply chain",
      },
      {
        href: "/products/dynamics-365-human-resources/",
        icon: "/img/menu-icons/dynamics-365-HRM.svg",
        title: "Human Resources",
        desc: "Optimize resource utilization with AI-assisted HR insights",
      },
      {
        href: "/products/microsoft-dynamics-365-commerce/",
        icon: "/img/menu-icons/dynamics-365-commerce.svg",
        title: "Commerce",
        desc: "Unify your back-office, in-store, and digital experience with AI",
      },
      {
        href: "/products/dynamics-365-project-operations/",
        icon: "/img/menu-icons/dynamics-365-project-management.svg",
        title: "Project Operations",
        desc: "Automate and streamline projects with AI-powered planning",
      },
    ],
  },
  {
    id: "crm",
    title: "Dynamics 365 CRM",
    subtitle: "Win more deals and deliver standout customer experiences with agentic AI.",
    products: [
      {
        href: "/products/microsoft-dynamics-365-sales/",
        icon: "/img/menu-icons/dynamics-365-sales.svg",
        title: "Sales",
        desc: "Drive end-to-end selling with an agentic AI CRM solution",
      },
      {
        href: "/products/microsoft-dynamics-365-marketing/",
        icon: "/img/menu-icons/dynamics-365-marketing.svg",
        title: "Marketing",
        desc: "Maximize ROI with AI-driven, integrated marketing",
      },
      {
        href: "/products/microsoft-dynamics-365-field-service/",
        icon: "/img/menu-icons/dynamics-365-fieldservice.svg",
        title: "Field Service",
        desc: "Drive connected, AI-assisted field service operations",
      },
      {
        href: "/products/microsoft-dynamics-365-customer-service/",
        icon: "/img/menu-icons/dynamics-365-customer-service.svg",
        title: "Customer Service",
        desc: "Deliver AI-powered omnichannel customer experiences",
      },
      {
        href: "/products/dynamics-365-customer-engagement/",
        icon: "/img/menu-icons/dynamics-365-customer-engagement.svg",
        title: "Customer Engagement",
        desc: "Transform your marketing operations with intelligent AI tools",
      },
    ],
  },
  {
    id: "power-platform",
    title: "Microsoft Power Platform",
    subtitle: "Analyze data, automate workflows, and build AI-powered apps with low code.",
    products: [
      {
        href: "/products/microsoft-power-bi/",
        icon: "/img/menu-icons/power-bi.svg",
        title: "Power BI",
        desc: "Create powerful, AI-generated visual insights and analytics",
      },
      {
        href: "/products/microsoft-power-apps/",
        icon: "/img/menu-icons/power-apps.svg",
        title: "Power Apps",
        desc: "Build AI-powered web and mobile apps with zero or minimal code",
      },
      {
        href: "/products/microsoft-power-automate/",
        icon: "/img/menu-icons/power-automate.svg",
        title: "Power Automate",
        desc: "Automate processes and improve workflows with AI",
      },
      {
        href: "/products/microsoft-power-virtual-agents/",
        icon: "/img/menu-icons/virtual-agent.svg",
        title: "Power Virtual Agents",
        desc: "Create powerful AI Copilot bots to maximize productivity",
      },
    ],
  },
  {
    id: "legacy",
    title: "Legacy Dynamics Products",
    subtitle: "Still on an older Dynamics system? We support, upgrade, and modernize these with AI too.",
    products: [
      {
        href: "/products/microsoft-dynamics-nav/",
        icon: "/img/menu-icons/NAV.png",
        title: "Dynamics NAV",
        desc: "A flexible ERP solution for SMBs, ready for an AI-powered upgrade",
      },
      {
        href: "/products/microsoft-dynamics-crm/",
        icon: "/img/menu-icons/CRM.png",
        title: "Dynamics CRM",
        desc: "Increase revenue and customer satisfaction",
      },
      {
        href: "/products/microsoft-dynamics-ax/",
        icon: "/img/menu-icons/AX.png",
        title: "Dynamics AX",
        desc: "The most complete, agile and powerful ERP",
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
        desc: "Streamline entire business management with ease",
      },
    ],
  },
];

const pageUrl = "https://www.dynamicssquare.co.uk/products/";
const pageTitle = "Microsoft Dynamics 365 AI-Powered Products | Dynamics Square";
const pageDescription =
  "Explore the full range of Microsoft Dynamics 365 AI solutions and Power Platform tools - ERP, CRM, Copilot, and legacy Dynamics products - implemented and supported by Dynamics Square.";

const productSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Microsoft Dynamics 365 Products",
  url: pageUrl,
  itemListElement: productCategories.flatMap((category) => category.products).map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: product.title,
    url: `https://www.dynamicssquare.co.uk${product.href}`,
  })),
};

const ProductsList = () => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta
          name="keywords"
          content="Microsoft Dynamics 365 products, Business Central, Dynamics 365 Finance, Supply Chain Management, Dynamics 365 Sales, Power Platform, Power BI, Power Apps"
        />
        <link rel="canonical" href={pageUrl} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/logo.png" />
        <meta property="og:site_name" content="Dynamics Square" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={pageUrl} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      <div className="solution-new-banner-one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="solution-new-banner-one-content">
                <h1>Products</h1>
                <span className="large-heading">Explore Microsoft Dynamics 365 AI-Powered Business Solutions</span>
                <p>
                  From finance and supply chain to sales and customer service, explore the complete
                  Dynamics 365 and Power Platform lineup - built-in AI and Copilot included - all
                  implemented, integrated, and supported by Dynamics Square.
                </p>
                <div className="text-center">
                  <Link href="/contact-us/" className="btn-get-started scrollto">
                    <span>Talk to an Expert &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {productCategories.map((category) => (
        <section className="bg-graya py-5" key={category.id} id={category.id}>
          <div className="container">
            <div className="ind-index-heading">
              <h3>{category.title}</h3>
              <p>{category.subtitle}</p>
            </div>
            <div className="row g-4">
              {category.products.map((product) => (
                <div className="col-lg-3 col-md-6 d-flex" key={product.href}>
                  <Link
                    href={product.href}
                    className="indut-icon-card-one product-hover-card text-decoration-none w-100"
                  >
                    <span className="product-hover-card__badge">AI-Powered</span>
                    <img src={product.icon} alt={product.title} width={48} height={48} />
                    <h4>{product.title}</h4>
                    <p>{product.desc}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <style jsx global>{`
        .product-hover-card {
          position: relative;
          display: block;
          overflow: hidden;
          transition: transform 0.35s ease, box-shadow 0.35s ease, background-color 0.35s ease;
        }
        .product-hover-card img {
          transition: transform 0.35s ease;
        }
        .product-hover-card h4 {
          transition: color 0.35s ease;
        }
        .product-hover-card__badge {
          position: absolute;
          top: 14px;
          right: 14px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #fff;
          background-image: linear-gradient(to right, #984b6e, #60518c);
          padding: 4px 10px;
          border-radius: 20px;
          opacity: 0;
          transform: translateY(-6px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .product-hover-card:hover {
          transform: translateY(-10px);
          background-color: #fff;
          box-shadow: 0 20px 40px 0 rgba(87, 108, 188, 0.25);
        }
        .product-hover-card:hover img {
          transform: scale(1.15) rotate(-4deg);
        }
        .product-hover-card:hover h4 {
          color: #984b6e;
        }
        .product-hover-card:hover .product-hover-card__badge {
          opacity: 1;
          transform: translateY(0);
        }
        @media (prefers-reduced-motion: reduce) {
          .product-hover-card,
          .product-hover-card img,
          .product-hover-card h4,
          .product-hover-card__badge {
            transition: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default ProductsList;
