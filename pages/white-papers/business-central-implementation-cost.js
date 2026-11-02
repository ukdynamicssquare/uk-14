import Head from "next/head";
import Link from "next/link";
import WhitePaperPage from "../../components/WhitePaperPage";

const CostWhitePaper = () => (
  <>
  <Head>
    <meta name="robots" content="noindex, follow" key="robots" />
  </Head>
  <WhitePaperPage
    page="/white-papers/business-central-implementation-cost/"
    downloadPath="/white-papers/download/pdf-business-central-implementation-cost/"
    seo={{
      title: "Business Central Implementation Cost White Paper UK | Dynamics Square",
      description:
        "Free UK budget planner for Business Central: a four-layer cost model, complexity scorecard and three worked company profiles in GBP, backed by named research.",
    }}
    images={{
      banner: "/img/business-central-implementation-cost-white-paper-banner.png",
      cover: "/img/business-central-implementation-cost-white-paper-cover.png",
    }}
    hero={{
      crumb: "Business Central Implementation Cost",
      title: "What Business Central Really Costs:",
      subtitle: "A UK Implementation Budget Planner",
      lead: "A four-layer budget model, a complexity scorecard and three worked company profiles in GBP, informed by Panorama, Gartner, IDC, S&P Global and Microsoft research.",
      gets: [
        "A four-layer budget model you can defend to a board",
        "A complexity scorecard that shows where your project sits",
        "Three worked company profiles with licence costs in GBP",
        "The questions that turn partner quotes into comparable numbers",
      ],
      pages: 17,
      sources: 12,
      audience: "For FDs, CFOs and business owners",
    }}
    stats={[
      { value: "25%+", label: "Of ERP projects reported over budget, Panorama Consulting Group 2026 ERP Report (n=170)" },
      { value: "9 months", label: "Median ERP project timeline in the same study" },
      { value: "£61.50", label: "Business Central Essentials, per user per month, annual commitment, ex VAT" },
      { value: "10–15%", label: "Contingency on services we recommend, released only through change control" },
    ]}
    statNote="Microsoft UK list prices and research sources as cited in the white paper, checked 22 October 2026."
    why={{
      title: "The licence is the smallest number in your budget",
      sub: "The numbers that decide whether your project lands on budget are the ones nobody publishes.",
      body: (
        <>
          <p>
            In a Business Central project, the licence is the smallest and most predictable line, as our{" "}
            <Link href="/products/dynamics-365-business-central/pricing-licensing/">Business Central pricing and licensing</Link>{" "}
            guide explains. Implementation services, integrations, data work and the time your own people spend on the
            project are what decide the total.
          </p>
          <p>
            The planner shows how partners estimate effort, with six complexity drivers to score before you ask for a price,
            and maps each workstream to the{" "}
            <Link href="/blog/what-is-business-central-implementation-methodology/">Business Central implementation methodology</Link>.
          </p>
          <p>
            It closes with the accounting treatment of SaaS configuration costs under IFRS. Pair that with our view of{" "}
            <Link href="/blog/erp-roi-business-central-for-cfos/">ERP ROI for CFOs</Link>, which covers the benefit side of the
            case.
          </p>
        </>
      ),
    }}
    chapters={{
      title: "Ten chapters, from research to comparable quotes",
      items: [
        ["01", "What the research says about ERP budgets", 4],
        ["02", "The four layers of a Business Central budget", 6],
        ["03", "Layer 1: licences, storage and AI consumption", 7],
        ["04", "Layer 2: implementation services and the complexity scorecard", 8],
        ["05", "Layers 3 and 4: the costs nobody quotes", 10],
        ["06", "Three worked company profiles", 11],
        ["07", "Accounting treatment: agree it before you budget", 12],
        ["08", "Turning quotes into comparable numbers", 13],
        ["09", "Frequently asked questions", 14],
        ["10", "Next step: a Business Central cost estimate", 15],
      ],
    }}
    download={{
      title: "Get the full Business Central budget planner",
      points: [
        "Licences, services, internal time and run costs in one four-layer model",
        "A six-driver complexity scorecard to fill in before you ask for prices",
        "A hidden-cost checklist and the red flags to look for in quotes",
      ],
    }}
    barText="Business Central implementation cost white paper"
  />
  </>
);

export default CostWhitePaper;
