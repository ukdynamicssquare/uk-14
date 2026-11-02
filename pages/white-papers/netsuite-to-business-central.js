import Head from "next/head";
import Link from "next/link";
import WhitePaperPage from "../../components/WhitePaperPage";

const NetSuiteWhitePaper = () => (
  <>
  <Head>
    <meta name="robots" content="noindex, follow" key="robots" />
  </Head>
  <WhitePaperPage
    page="/white-papers/netsuite-to-business-central/"
    downloadPath="/white-papers/download/pdf-netsuite-to-business-central/"
    seo={{
      title: "NetSuite to Business Central Migration White Paper | Dynamics Square",
      description:
        "Free UK playbook for leaving NetSuite: a 180-day renewal runway, fit test, data-extraction plan and GBP cost model for moving to Business Central.",
    }}
    images={{
      banner: "/img/netsuite-to-business-central-white-paper-banner.png",
      cover: "/img/netsuite-to-business-central-white-paper-cover.png",
    }}
    hero={{
      crumb: "NetSuite to Business Central",
      title: "Leaving NetSuite:",
      subtitle: "A Business Central Renewal and Migration Playbook",
      lead: "A 180-day runway, a fair fit test, a data-extraction plan and a GBP cost model for UK finance leaders approaching a NetSuite renewal.",
      gets: [
        "A 180-day runway that keeps your renewal options open",
        "An honest fit test: when staying on NetSuite is the better call",
        "How NetSuite capabilities map to Business Central, and what does not",
        "A GBP cost model and a renewal comparison worksheet",
      ],
      pages: 20,
      sources: 18,
      audience: "For CFOs, FDs and IT leads",
    }}
    stats={[
      { value: "£61.50", label: "Business Central Essentials, per user per month, annual commitment, ex VAT" },
      { value: "180 days", label: "Recommended runway before your NetSuite renewal date" },
      { value: "51.2%", label: "Of UK firms planning AI investment in the year ahead, up from 36.7% (S&P Global, June 2026)" },
      { value: "9 months", label: "Median ERP project timeline, Panorama Consulting Group 2026 ERP Report" },
    ]}
    statNote="Microsoft UK list prices and research sources as cited in the white paper, checked 22 October 2026."
    why={{
      title: "Start the evaluation 180 days before renewal",
      sub: "Your NetSuite renewal date is the one point in the contract cycle where switching does not mean paying for two ERPs at once.",
      body: (
        <>
          <p>
            If you want a genuine choice at renewal, the evaluation has to start about 180 days before the renewal date, not
            30. Business Central publishes its UK prices; NetSuite does not, so you can model the Business Central side
            precisely and test your renewal quote against it. Our{" "}
            <Link href="/dynamics-365-business-central-vs-netsuite/">Business Central vs NetSuite comparison</Link> sets out
            the product differences.
          </p>
          <p>
            The playbook includes an honest fit test, so you know when staying is the better call. Still building a
            shortlist? Our <Link href="/blog/netsuite-alternatives/">NetSuite alternatives guide</Link> compares ten options
            for UK businesses.
          </p>
          <p>
            It maps NetSuite capabilities to Business Central and explains how OneWorld-style structures translate using{" "}
            <Link href="/blog/multi-entity-multi-currency-consolidation-in-business-central/">multi-entity, multi-currency consolidation</Link>,
            then sets out every route for getting your data out of NetSuite.
          </p>
        </>
      ),
    }}
    chapters={{
      title: "Eleven chapters, from renewal date to go-live",
      items: [
        ["01", "Why the renewal is the decision point", 4],
        ["02", "What the research says about the next five years of ERP", 5],
        ["03", "Fit test: when to stay and when to move", 6],
        ["04", "How NetSuite capabilities map to Business Central", 7],
        ["05", "Getting your data out of NetSuite", 9],
        ["06", "What it costs: a GBP model", 11],
        ["07", "The 180-day runway", 13],
        ["08", "Risks and how to reduce them", 14],
        ["09", "Questions to ask any Business Central partner", 15],
        ["10", "Frequently asked questions", 16],
        ["11", "Next step: a NetSuite exit and fit consultation", 17],
      ],
    }}
    download={{
      title: "Get the full NetSuite exit playbook",
      points: [
        "A 180-day plan that ends at your NetSuite renewal date",
        "A data-extraction plan and a NetSuite exit data checklist",
        "A renewal comparison worksheet and a GBP cost model",
      ],
    }}
    barText="NetSuite to Business Central white paper"
  />
  </>
);

export default NetSuiteWhitePaper;
