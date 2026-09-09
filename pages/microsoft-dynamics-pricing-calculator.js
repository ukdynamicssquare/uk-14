import Head from "next/head";
import LicenceRateCard from "../components/LicenceRateCard";
import FooterHideNew from "../components/FooterHide";


export const metadata = {
  title: "Dynamics 365 Licence Calculator | Dynamics Square",
  description:
    "Work out which Dynamics 365 licences you need and what they cost, by picking the capabilities your business actually uses.",
};

export default function LicenceCalculatorPage() {
  return (
      <>
      <Head>
        <title>Dynamics 365 Licensing & Pricing Calculator</title>
        <meta
          name="description"
          content="Use our Dynamics 365 pricing calculator to estimate licence costs for your UK business and understand the potential cost of your Microsoft Dynamics 365 solution"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/microsoft-dynamics-pricing-calculator/" />
         <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamics 365 Licensing & Pricing Calculator" />
        <meta property="og:description" content="Use our Dynamics 365 pricing calculator to estimate licence costs for your UK business and understand the potential cost of your Microsoft Dynamics 365 solution" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/erp-implementation-cost-calculator/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/pricing-cal.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Dynamics 365 Licensing & Pricing Calculator" />
        <meta name="twitter:description" content="Calculate your ERP implementation pricing with our easy-to-use calculator. Get accurate estimates tailored to your business needs. Start planning today!" />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/pricing-cal.png" />
      </Head>
      <LicenceRateCard />
      <FooterHideNew />
      </>


  );
}
