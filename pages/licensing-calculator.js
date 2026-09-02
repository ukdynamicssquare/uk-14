import Head from "next/head";
import LicenceRateCard from "../components/LicenceRateCard";


export const metadata = {
  title: "Dynamics 365 Licence Calculator | Dynamics Square",
  description:
    "Work out which Dynamics 365 licences you need and what they cost, by picking the capabilities your business actually uses.",
};

export default function LicenceCalculatorPage() {
  return (
      <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <LicenceRateCard />
      </>


  );
}
