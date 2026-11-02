import Link from "next/link";
import WhitePaperPage from "../../components/WhitePaperPage";

const WhitepaerguideFianace = () => (
  <WhitePaperPage
    page="/white-papers/microsoft-finance/"
    downloadPath="/white-papers/download/pdf-microsoft-finance/"
    seo={{
      title: "Dynamics 365 Finance with Copilot WhitePaper | Dynamics Square",
      description:
        "How Dynamics 365 Finance with Copilot boosts efficiency, automates tasks, and drives smarter financial decisions in this comprehensive whitepaper.",
    }}
    images={{
      banner: "/img/finace-white-papper-banner.png",
      cover: "/img/finace-whitper-center.png",
      coverSize: [487, 613],
      inside: "/img/finace-whitper-center.png",
      insideSize: [487, 613],
      insideAlt: "The Perfect Solution to Eliminate all Financial Challenges",
    }}
    hero={{
      crumb: "Dynamics 365 Finance with Copilot",
      eyebrow: null,
      title: "The Future of Finance Management:",
      subtitle: "Transform the way Finance works with Microsoft Copilot",
      image: "/img/finace-white-papper-banner.png",
      imageSize: [800, 600],
      imageAlt: "The White paper will Walk you Through",
    }}
    form={{
      title: "Register For White Paper",
      text: "Fill the form and receive it straight to your inbox.",
      submitLabel: "Submit",
    }}
    why={{
      kicker: null,
      title: "What’s More in This White Paper?",
      image: { src: "/img/erp-left-about.png", width: 337, height: 460, alt: "What’s More in This White Paper?" },
      body: (
        <>
          <p>
            The whitepaper goes into great detail about{" "}
            <Link href="/products/microsoft-dynamics-365-finance/">Microsoft Dynamics 365 Finance</Link>, and{" "}
            <Link href="/products/dynamics-365-copilot/">Microsoft Copilot</Link> comes integrated into it, showing how they
            can completely change the way you handle your finances. It starts by listing the main financial problems that
            companies have, like inefficient processes, poor data quality, regulatory compliance complexities, lack of
            integration, and multi-entity management. These problems make it harder to make decisions, run operations
            efficiently, and keep track of finances correctly.
          </p>
          <p>
            Microsoft Dynamics 365 Finance is a strong business solution that improves finance-related tasks, automates work
            processes, and gathers all data in one place. It helps increase the output of various crucial processes such as
            automated bank reconciliation, cash flow management, and customised financial reporting.
          </p>
          <p>
            The integrated Microsoft Copilot helps automate repetitive processes, offer real-time information, and improve the
            abilities of users by acting as a personal assistant to them. Copilot’s functionalities, such as tracking customer
            balances, generating automated emails, and centralising financial data, are emphasised for their ability to save
            time and improve accuracy.
          </p>
          <p>
            The white paper concludes with an emphasis on using an advanced financial management tool like Dynamics 365
            Finance powered with Copilot to deal with challenges. The solution helps drive business growth through new ideas
            and increase overall efficiency through process automation. No wonder why it is the preferred choice for companies
            that want to improve their finances and be successful in the long run.
          </p>
        </>
      ),
    }}
    chapters={{
      kicker: null,
      title: "The White paper will Walk you Through",
      cta: "Download now!",
      items: [
        ["01", "The Future of Finance Management: Dynamics 365 Finance"],
        ["02", "Finance Microsoft – Your Partner for Business Success"],
        ["03", "Common Financial Challenges in Modern Industries"],
        ["04", "The Perfect Solution to Eliminate all Financial Challenges"],
        ["05", "Microsoft 365 Copilot for Finance"],
      ],
    }}
    download={{
      kicker: null,
      title: "Want to digitally transform your business with AI and modern tech?",
      text: "Press the Download Now button and uncover the knowledge, especially curated for you.",
      cta: "Get a Copy now!",
    }}
    related={false}
    barCta="Get a Copy now!"
  />
);

export default WhitepaerguideFianace;
