import Head from "next/head";
import Link from "next/link";
import WhitePaperPage from "../../components/WhitePaperPage";

const SageWhitePaper = () => (
  <>
  <Head>
    <meta name="robots" content="noindex, follow" key="robots" />
  </Head>
  <WhitePaperPage
    page="/white-papers/sage-200-to-business-central/"
    downloadPath="/white-papers/download/pdf-sage-200-to-business-central/"
    seo={{
      title: "Sage 200 to Business Central Migration White Paper | Dynamics Square",
      description:
        "Free UK white paper for finance directors on Sage 200: migration costs in GBP, data decisions, a fit test and a 12-week readiness plan for Business Central.",
    }}
    images={{
      banner: "/img/sage-200-to-business-central-white-paper-banner.png",
      cover: "/img/sage-200-to-business-central-white-paper-cover.png",
    }}
    hero={{
      crumb: "Sage 200 to Business Central",
      title: "Sage 200 to Business Central:",
      subtitle: "The UK Migration Business Case",
      lead: "Costs, data decisions and a 12-week readiness plan for finance directors running Sage 200.",
      gets: [
        "An honest fit test: when staying on Sage 200 is the better call",
        "A GBP cost model, by licence layer and workstream, you can take to the board",
        "The data, integration and history decisions that drive migration effort",
        "A week-by-week plan to reach a defensible decision in 12 weeks",
      ],
      pages: 18,
      sources: 15,
      audience: "For FDs, controllers and IT leads",
    }}
    stats={[
      { value: "£61.50", label: "Business Central Essentials, per user per month, annual commitment, ex VAT" },
      { value: "£6.20", label: "Team Members licence for users who approve, look up or make limited updates" },
      { value: "2 per year", label: "Major Business Central updates, in April and October, applied by Microsoft" },
      { value: "2029", label: "Mandatory e-invoicing for UK VAT invoices, per the November 2025 government response" },
    ]}
    statNote="Microsoft UK list prices and government sources as cited in the white paper, checked 22 October 2026."
    why={{
      title: "Decide before you pay for the next Sage 200 upgrade",
      sub: "The cheapest time to evaluate Business Central is before you commit to your next version upgrade, server or SQL Server refresh, not after it.",
      body: (
        <>
          <p>
            Business Central replaces the server, the upgrade cycle and most of the bolt-ons with a Microsoft-run cloud
            service. The licence line is predictable, as our Business Central pricing and licensing guide explains. What
            decides whether the move pays back is how much history you bring across, which integrations you rebuild, and
            how you mix full users with light users. For a feature-by-feature view, see{" "}
            <Link href="/blog/business-central-vs-sage-200/">Business Central vs Sage 200</Link>.
          </p>
          <p>
            Only one trigger is a hard deadline: Sage 200 Manufacturing support ended on 31 December 2025. Business Central
            Premium includes manufacturing management, which makes it a direct candidate for that replacement. For the
            wider journey from any Sage product, read our{" "}
            <Link href="/blog/sage-to-business-central-migration/">Sage to Business Central migration guide</Link>.
          </p>
          <p>
            See how one merchant <Link href="/case-studies/sage-erp-to-business-central/">replaced Sage ERP with Business Central</Link>,
            and how our Business Central implementation and Dynamics 365 upgrade and migration services are delivered.
          </p>
        </>
      ),
    }}
    chapters={{
      title: "Ten chapters, from trigger to board paper",
      items: [
        ["01", "Why Sage 200 sites are reviewing their ERP now", 3],
        ["02", "Should you move at all? An honest fit test", 5],
        ["03", "What independent research says about projects like yours", 6],
        ["04", "What actually moves: the data decisions", 7],
        ["05", "What it costs: a GBP model you can defend", 9],
        ["06", "A 12-week readiness plan", 11],
        ["07", "Risks and how to reduce them", 12],
        ["08", "Questions to ask any Business Central partner", 13],
        ["09", "Frequently asked questions", 14],
        ["10", "Next step: a Sage 200 migration assessment", 15],
      ],
    }}
    download={{
      title: "Get the full Sage 200 migration business case",
      points: [
        "A GBP cost model across licences, services, internal time and run costs",
        "The history, data and integration decisions that drive migration effort",
        "A 12-week readiness plan and the questions to ask any partner",
      ],
    }}
    barText="Sage 200 to Business Central white paper"
  />
  </>
);

export default SageWhitePaper;
