import Link from "next/link";
import WhitePaperPage from "../../components/WhitePaperPage";

const Whitepaerguide = () => (
  <WhitePaperPage
    page="/white-papers/microsoft-copilot/"
    downloadPath="/white-papers/download/pdf-microsoft-copilot/"
    seo={{
      title: "Microsoft Copilot White Paper | Dynamics Square",
      description:
        "Explore Microsoft's Copilot White Paper by Dynamics Square, offering insights into AI-driven productivity, integration, and business transformation.",
    }}
    images={{
      banner: "/img/whitepaper-one.png",
      cover: "/img/whitepaper-one.png",
      coverSize: [893, 1119],
      inside: "/img/tablet-ebook-one.png",
      insideSize: [487, 613],
      insideAlt: "The Essence of the Cloud for Productivity",
    }}
    hero={{
      crumb: "Microsoft Copilot",
      eyebrow: null,
      title: "Get Started with Microsoft Copilot:",
      subtitle: "A Guide to AI-induced Business Transformation",
      image: "/img/whitepaper-one.png",
      imageSize: [893, 1119],
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
            This white paper will guide you through the substantial impact of AI on our daily lives as well as business. It
            will help you understand the impact of AI for businesses, the introduction to Microsoft&apos;s in-house AI
            assistance - <Link href="/products/dynamics-365-copilot/">Copilot</Link>, and its integration with other solutions
            in the <Link href="/products/microsoft-dynamics-365/">Dynamics 365 Ecosystem</Link>.
          </p>
          <p>
            From start to finish, you will find the facts and latest statistics to justify the statements about AI, digital
            transformation, business efficiency, and digital transformation through innovations. This white paper offers the
            essential information you need to know about the current scenarios of AI and its different aspects.
          </p>
          <p>
            Reading this in-depth piece of knowledge enables businesses to implement automation, increase productivity, and
            ensure high-end data security. Even so, you will get to know the different deployment options and what suits you
            best to meet your business needs.
          </p>
        </>
      ),
    }}
    chapters={{
      kicker: null,
      title: "The White paper will Walk you Through",
      cta: "Download now!",
      items: [
        ["01", "The Role of AI in Building the Future"],
        ["02", "An Overview of Microsoft Copilot"],
        ["03", "Copilot: The Need for Modern Businesses"],
        ["04", "The Essence of the Cloud for Productivity"],
        ["05", "Dealing with Evolving Business Needs"],
        ["06", "Copilot for Individuals and Organisations"],
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

export default Whitepaerguide;
