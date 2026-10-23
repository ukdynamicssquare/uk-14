import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../public/data/copilotstudio.json';
import { sanitizeHtml } from '../../helpers/sanitizeHtml';
import PageSeo from "../../components/PageSeo";
import styles from "../../styles/copilot-studio.module.css";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "about": {
        "@type": "SoftwareApplication",
        "name": "Microsoft Copilot Studio",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "publisher": { "@type": "Organization", "name": "Microsoft" }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Microsoft Copilot Studio consulting, agent development, licensing and support",
      "audience": { "@type": "BusinessAudience", "name": "UK businesses" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Copilot Studio Agents",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Answering agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Action agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Autonomous agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-agent systems" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Voice agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Copilot Studio Support After Go-Live" } }
        ]
      }
    }
  ]
};

const ADOPTION = [
  { icon: '/img/copilot-studio-04.png', title: 'Proven at scale.', text: 'Microsoft states that 90% of the Fortune 500 use Copilot Studio.' },
  { icon: '/img/copilot-studio-05.png', title: 'A UK reference point.', text: "Virgin Money built an AI assistant with Copilot Studio and, according to Microsoft's customer story, recorded a 97% journey completion rate and 54% customer engagement on outbound messages." },
  { icon: '/img/copilot-studio-06.png', title: 'Speed from idea to agent.', text: 'Microsoft reports that Amgen built an R&D agent in six weeks with Copilot Studio, and that Dow identified more than 100 use cases for agents.' },
  { icon: '/img/copilot-studio-07.png', title: 'A widening model choice.', text: 'Microsoft has announced GPT-5 and Anthropic models within the Copilot Studio multi-model lineup.' },
];

const AGENT_TYPES = [
  ['Answering agents', 'Retrieve and summarise information from connected knowledge', 'Staff helpdesks, policy queries, customer FAQs'],
  ['Action agents', 'Carry out tasks by calling flows, prompts and APIs linked to your systems', 'Ticket creation, approvals, record updates'],
  ['Autonomous agents', 'Plan, learn and escalate work items with minimal supervision', 'Order handling, reconciliations, screening'],
  ['Multi-agent systems', 'Route work to the right specialist agent, from Microsoft or partner providers', 'Complex, cross-department processes'],
  ['Voice agents', 'Handle phone-based conversations powered by generative AI', 'Contact centre front line'],
];

const HARNESSES = [
  { icon: '/img/copilot-studio-08.png', name: 'GitHub Copilot harness', text: 'Agents that reason through multi-step tasks and complex processes' },
  { icon: '/img/copilot-studio-09.png', name: 'Standard harness', text: 'Predictable agents that follow defined topics and repeatable conversation paths' },
  { icon: '/img/copilot-studio-10.png', name: 'Copilot chat harness', text: 'Grounding Microsoft 365 Copilot Chat answers in your own company content' },
];

const CAPABILITIES = [
  {
    icon: 'bi-magic',
    title: 'Create',
    items: [
      'Natural-language authoring, so a business owner can describe an agent and refine it through conversation',
      'Pre-built agents from the Agent Store and templates to customise',
      'Structured instructions that keep responses consistent and accurate',
      'Multi-agent orchestration for complex processes',
    ],
  },
  {
    icon: 'bi-plug',
    title: 'Connect',
    items: [
      'More than 1,400 external connectors',
      'Model Context Protocol (MCP) servers',
      'Work IQ, the layer that gives Microsoft 365 Copilot and agents context about your role and company',
      <><Link href="/products/microsoft-power-automate/" className="u-i">Flows</Link>, prompts and APIs that let an agent act in your business systems</>,
    ],
  },
  {
    icon: 'bi-send',
    title: 'Deploy',
    items: [
      'Publishing to Microsoft Teams, SharePoint and Microsoft 365 Copilot',
      'Publishing to websites, apps and social channels for customers',
      'Voice and phone agents',
    ],
  },
  {
    icon: 'bi-shield-check',
    title: 'Govern',
    items: [
      'Dedicated development environments and agent lifecycle controls',
      'Agent spends oversight in the Power Platform admin centre',
      'Usage and ROI tracking through Microsoft Purview, the Power Platform admin centre and Viva Insights',
    ],
  },
];

const USE_CASES = [
  ['Finance', 'Balance sheet reconciliation agent', 'Detects variances and automates corrections'],
  ['Human resources', 'Recruitment assistant agent', 'Screens candidates and highlights the best matches'],
  ['Customer service', 'Cross-sell and upsell agent', 'Spots customer preferences and recommends offers'],
  ['IT', 'IT support agent', 'Automates ticket intake, creation, triage and communication'],
  ['Legal', 'Contract review agent', 'Detects risks and deviations, then recommends changes'],
];

const CONNECTIONS = [
  [
    <>Dynamics 365 CRM apps (<Link href="/products/microsoft-dynamics-365-sales/" className="u-i">Sales</Link> and <Link href="/products/microsoft-dynamics-365-customer-service/" className="u-i">Service</Link>)</>,
    'Work IQ MCP, which Copilot Studio agents can use to reach Dynamics 365 business data',
    'Agents carry out governed actions such as reassigning ownership, escalating issues and updating records within user permissions, presenting proposed changes and following any required approval before source records update',
  ],
  [
    <Link href="/products/microsoft-dynamics-365-finance-operations/" className="u-i">Dynamics 365 Finance and Operations</Link>,
    'Work IQ coverage for Finance and Operations apps',
    'Microsoft has announced Work IQ coverage for its Finance and Operations apps, and Dynamics Square confirms availability for your tenant during scoping',
  ],
  [
    <Link href="/products/dynamics-365-business-central/" className="u-i">Business Central</Link>,
    'Connectors, flows and APIs that we configure and test with you',
    <><Link href="/products/dynamics-365-copilot/" className="u-i">Copilot</Link> ships in the product with the Business Central licence for online customers, and Microsoft&apos;s release plan describes a Payables Agent that reads invoices, matches vendors and accounts, and prepares invoices for approval with human oversight</>,
  ],
  [
    'Other line-of-business systems',
    'Any of the 1,400+ external connectors, plus MCP servers',
    'Work IQ also covers third-party line-of-business applications',
  ],
];

const PRICING = [
  ['Microsoft 365 Copilot', 'From £23.10 per user per month, paid yearly, excluding VAT', 'Includes Copilot Chat and the Standard harness in Copilot Studio for internal agents'],
  ['Copilot Studio capacity pack', '£153.80 per pack per month, 25,000 Copilot Credits each', 'Tenant-wide, paid up front'],
  ['Pay-as-you-go', 'Charged for the credits consumed', <>Billed at month end through an <Link href="/products/microsoft-azure/" className="u-i">Azure</Link> subscription, with usage-based charges only</>],
  ['Pre-purchase plan', 'Save up to 20% on prepaid Copilot Credit Commit Units', 'One-year prepaid pool, bought through Azure, with automatic pay-as-you-go cover if credits run out'],
];

const CREDITS = [
  ['Classic answer (predefined response)', '1'],
  ['Generative answer', '2'],
  ['Agent action', '5'],
  ['Tenant graph grounding', '10'],
  ['Agent flow actions, per 100 actions', '13'],
];

const GUARDRAILS = [
  'Unused Copilot Credits expire at the end of each month.',
  'When consumption reaches 125% of prepaid capacity, custom agents are disabled until capacity is increased or reset. Conversations already in progress finish normally.',
  'You can cap credit use for individual agents in the Power Platform admin centre before enforcement applies.',
  'Microsoft provides an agent usage estimator to forecast credit volumes from your planned agent design and expected traffic.',
];

const LICENCE_M365 = [
  'Your agents serve employees inside Microsoft 365',
  'Your users already hold, or will hold, Microsoft 365 Copilot licences',
  'Copilot Chat and the Standard harness meet your needs',
  'You want agent building included in your Microsoft 365 Copilot licence',
];

const LICENCE_STANDALONE = [
  'Your agents serve customers on websites, apps or social platforms',
  'Your agents serve people outside your licensed base',
  'You want the GitHub Copilot harness for demanding reasoning tasks',
  'You want to choose between capacity packs, pay-as-you-go and pre-purchase',
];

const LICENCE_RULES = [
  'Microsoft 365 Copilot requires an eligible Microsoft 365 business or enterprise plan.',
  'Employee-facing use of agents in Copilot Chat, Teams or SharePoint by Microsoft 365 Copilot licensed users carries zero-rated charges for classic answers, generative answers and tenant graph grounding, subject to fair usage limits.',
  'Computer-Using Agent usage sits outside the Microsoft 365 Copilot inclusion.',
  'Makers need a Copilot Studio user licence, which is free of charge and assigned by an administrator once a tenant capacity pack subscription exists. A trial licence lets you build and test agents, and publishing requires a paid route.',
];

const WHY_POINTS = [
  { title: 'One partner across the stack', text: <>ERP, <Link href="/products/microsoft-dynamics-crm/" className="u-i">CRM</Link>, ISV solutions and Power Platform sit under one roof at Dynamics Square, so your agents are designed alongside the systems they serve.</> },
  { title: 'Certified people', text: 'More than 150 certified professionals support over 500 clients worldwide, and we have delivered Microsoft solutions since 2011.' },
  { title: 'A structured method', text: 'Our architects question, analyse and recommend before they deploy anything.' },
  { title: 'Partnership over transactions', text: 'We work as an extension of your team, and our clients stay with us for more than five years on average.' },
];

const STEPS = [
  { title: 'Analysis', text: 'We run discovery sessions, shortlist agent use cases, assess data readiness and select the licensing route.' },
  { title: 'Design', text: 'We define agent instructions, knowledge sources, actions, channels, security boundaries and the credit forecast.' },
  { title: 'Development', text: 'We build and configure the agents and flows, connect systems and test against real scenarios.' },
  { title: 'Deployment', text: 'We publish to Teams, Microsoft 365 Copilot, your website or other channels, train your users and complete go-live.' },
  { title: 'Post go-live', text: 'We monitor performance, tune agents and guide your internal teams as usage grows.' },
];

const SUPPORT = [
  'Performance monitoring using Copilot Studio analytics to track outcomes and session results',
  'Quality checks with test sets before and after each change',
  'Credit consumption reviews in the Power Platform admin centre, with per-agent limits where needed',
  'Governance across your agent inventory, environments and access roles',
  'Enhancements as Microsoft releases new features and models',
];

const CONSULT = [
  'Shortlist the agent use cases with the strongest payback in your business',
  'Recommend the licensing route for your users and channels',
  "Estimate Copilot Credit consumption with Microsoft's usage estimator",
  'Outline the path from pilot to production',
];

// Rows of a table; on phones each row stacks into a card labelled by its column.
const DataTable = ({ labelledBy, columns, rows, numCol }) => (
  <div className={styles['cs-table-wrap']}>
    <table className={styles['cs-table']} aria-labelledby={labelledBy}>
      <thead>
        <tr>
          {columns.map((c) => <th scope="col" key={c}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r}>
            {row.map((cell, i) => (
              <td
                key={i}
                data-label={columns[i]}
                className={i === numCol ? styles['cs-num'] : undefined}
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CheckList = ({ items }) => (
  <ul className={styles['cs-list']}>
    {items.map((item, i) => <li key={i}>{item}</li>)}
  </ul>
);

const ConsultButton = ({ label, className = '' }) => (
  <Link
    href="#exampleModal"
    data-bs-toggle="modal"
    className={`btn-get-started scrollto ${className}`}>
    <span>{label} &nbsp;<i className="bi bi-arrow-right" aria-hidden="true"></i></span>
  </Link>
);

const CopilotStudio = () => {

  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Copilot Studio Partner - Dynamics Square UK"
        description="Partner with Dynamics Square UK for Microsoft Copilot Studio services. Build AI agents, automate workflows and improve business productivity with tailored Copilot Studio solutions."
        image="/img/copilot-studio-og.png"
        imageAlt="Microsoft Copilot Studio Partner for UK Businesses"
        keywords="copilot studio partner, Microsoft copilot studio, copilot studio, what is copilot studio, copilot studio pricing, copilot studio license, copilot studio agents, copilot studio support"
        faqs={faqData}
        extraSchema={pageSchema}
      />
      <div className={`solution-new-banner-one ${styles['cs-hero']}`}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Microsoft Copilot Studio Partner</h1>
                <p>Dynamics Square designs, builds and supports Microsoft Copilot Studio agents that draw on your data, act inside your systems and work where your people already work: Microsoft Teams, Microsoft 365 Copilot, your website and your customer channels.</p>
                <p className={styles['cs-tagline']}>Build the agents your competitors are still planning.</p>
                <div className="text-center">
                  <ConsultButton label="Book a Copilot Studio Consultation" />
                </div>
              </div>
              <div className='m-b-image'>
                <Image src="/img/copilot-studio-00.png" alt="" width={1920} height={776} quality={100} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="solution-new-banner-one-img imm-mins">
          <Image
            src="/img/copilot-studio-00.png"
            alt="Copilot Studio screens showing an agent being built, its instructions and the agent working inside Microsoft Teams"
            width={1920}
            height={776}
            quality={100}
            priority
            className="flot-1"
          />
        </div>
      </div>

      <section className={styles['cs-trust']} aria-label="Trust bar">
        <div className="container">
          <ul className={styles['cs-trust__list']}>
            <li className={styles['cs-trust__item']}>
              <i className="bi bi-people" aria-hidden="true"></i>
              <span><strong>500+</strong> clients worldwide</span>
            </li>
            <li className={styles['cs-trust__item']}>
              <i className="bi bi-patch-check" aria-hidden="true"></i>
              <span><strong>150+</strong> certified professionals</span>
            </li>
            <li className={styles['cs-trust__item']}>
              <i className="bi bi-calendar-check" aria-hidden="true"></i>
              <span>Delivering Dynamics 365 since <strong>2011</strong></span>
            </li>
            <li className={styles['cs-trust__item']}>
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner badge"
                width={220}
                height={202}
                sizes="64px"
                className={styles['cs-trust__badge']}
              />
              <span>Microsoft Solutions Partner</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="solution-new-banner-fove">
        <div className='container'>
          <div className='row g-4 g-lg-5'>
            <div className='col-lg-6 align-self-center'>
              <div className={`product-side-002-content ${styles['cs-copy']}`}>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What is Microsoft Copilot Studio?</h2>
                </div>
                <p>Copilot Studio is Microsoft&apos;s low-code platform for building, publishing and managing AI agents and workflows. Describe the agent you want in everyday language or build it in the graphical designer, then connect it to your knowledge sources and business systems. Once tested, you publish it where your users already work, including Teams, Microsoft 365 Copilot, your website and mobile apps.</p>
                <p>Copilot Studio brings agents, workflows and agent flows into one studio, so a single team can design a complete business solution and manage it in one place. Microsoft has folded <Link href="/products/microsoft-power-virtual-agents/" className='u-i'>Power Virtual Agents</Link> into Copilot Studio, so teams with chatbot experience keep their skills and gain new tools for building and coordinating agents.</p>
                <p>A Copilot Studio partner turns that platform into working agents. Dynamics Square scopes the right use cases, builds and connects the agents, selects the licensing route and stays with you after go-live.</p>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <Image
                src="/img/copilot-studio-01.png"
                alt="Copilot Studio home screen asking what you would like to build, with options to start an agent or a workflow"
                width={630}
                height={588}
                className={styles['cs-img']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['cs-section']} ${styles['cs-section--tint']}`}>
        <div className="container">
          <div className={`${styles['cs-head']} text-center`}>
            <h2>Why UK Organisation are Adopting Copilot Studio</h2>
          </div>
          <div className={styles['cs-stats']}>
            {ADOPTION.map((item) => (
              <div className={styles['cs-stat']} key={item.title}>
                <Image src={item.icon} alt="" width={40} height={40} className={styles['cs-stat__icon']} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['cs-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['cs-head']} text-center`}>
                <h2 id="cs-agents">Copilot Studio Agents: What You Can Build</h2>
                <p>Copilot Studio agents are AI systems that carry out business work for an individual, a team or a whole company. Microsoft groups them by how much independence they carry.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="cs-agents"
            columns={['Agent type', 'What it does', 'Where it fits']}
            rows={AGENT_TYPES}
          />

          <div className={styles['cs-engine']}>
            <div className="text-center">
              <h3 className={styles['cs-sub']}>Choose the Engine Behind the Agent</h3>
              <p className={styles['cs-note']} style={{ marginBottom: '28px' }}>Everything built in Copilot Studio runs on a harness, which shapes how the agent reasons, what it can handle and how it is billed.</p>
            </div>
            <div className={styles['cs-cards3']}>
              {HARNESSES.map((h) => (
                <div className={styles['cs-engine-card']} key={h.name}>
                  <Image src={h.icon} alt="" width={52} height={52} className={styles['cs-engine-card__icon']} />
                  <div>
                    <h4>{h.name}</h4>
                    <p>{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['cs-section']} ${styles['cs-section--tint']}`}>
        <div className="container">
          <div className={`${styles['cs-head']} text-center`}>
            <h2>Copilot Studio Capabilities We Configure for Your Business</h2>
          </div>
          <div className={styles['cs-caps']}>
            {CAPABILITIES.map((cap) => (
              <div className={styles['cs-cap']} key={cap.title}>
                <div className={styles['cs-cap__head']}>
                  <i className={`bi ${cap.icon}`} aria-hidden="true"></i>
                  <h3>{cap.title}</h3>
                </div>
                <CheckList items={cap.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['cs-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['cs-head']} text-center`}>
                <h2 id="cs-usecases">Copilot Studio Use Cases by Department</h2>
                <p>Microsoft&apos;s own use case library gives a clear map of where agents earn their place first.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="cs-usecases"
            columns={['Department', 'Agent', 'What it does']}
            rows={USE_CASES}
          />
          <p className={styles['cs-note']} style={{ margin: '40px 0 24px' }}>Dynamics Square builds these around the systems your teams already run. Every agent design starts from the process, then records four things: the Dynamics 365 or Business Central data the agent reads, the actions it may take, the person who approves changes and the Copilot Credit cost of each interaction.</p>
          <DataTable
            labelledBy="cs-usecases"
            columns={['Where the process runs', 'How the agent connects', 'What Microsoft states']}
            rows={CONNECTIONS}
          />
          <p className={styles['cs-callout']}>The result is an agent that answers from your own records and acts inside your processes, with approvals wherever your policies require them.</p>
        </div>
      </section>

      <section className={`${styles['cs-section']} ${styles['cs-section--tint']}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['cs-head']} text-center`}>
                <h2 id="cs-pricing">Copilot Studio Pricing in the UK</h2>
                <p>Copilot Studio pricing follows a credit model. Every response or action an agent completes consumes Copilot Credits, and the number of credits depends on the complexity of the task. Microsoft&apos;s published UK prices are shown below as of 2026.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="cs-pricing"
            columns={['Route', 'UK price', 'Billing']}
            rows={PRICING}
          />
          <p className={styles['cs-note']}>Capacity packs and pay-as-you-go deliver the same product features. Only the way you pay differs. Pay-as-you-go and the pre-purchase plan both need an active Azure subscription.</p>

          <div className={`row g-4 ${styles['cs-block']}`}>
            <div className="col-lg-6">
              <h3 className={styles['cs-sub']} id="cs-credits">How Copilot Credits are Consumed?</h3>
              <DataTable
                labelledBy="cs-credits"
                columns={['Agent activity', 'Copilot Credits']}
                rows={CREDITS}
                numCol={1}
              />
              <p className={styles['cs-note']}>These rates apply to agents on the standard harness. Reasoning models add a premium charge of 10 Copilot Credits per 1,000 tokens on top of the feature rate. Voice agents are billed per minute, at 10, 35 or 75 credits depending on the voice tier.</p>
            </div>
            <div className="col-lg-6">
              <div className={styles['cs-example']}>
                <h3 className={styles['cs-sub']}>Worked Example for Better Understanding</h3>
                <p>Microsoft&apos;s own customer support example describes an agent that gives four classic answers and two generative answers per conversation for 900 customers a day: <strong>(4 x 1 + 2 x 2) x 900 = 7,200 Copilot Credits per day.</strong></p>
                <p>Dynamics Square arithmetic on that example: over a 30-day month the agent consumes 216,000 credits, which equals 8.64 packs. Rounded up to nine whole packs, capacity costs £1,384.20 per month at the published pack price. An internal order processing agent from the same Microsoft guidance uses four agent actions per order, so each order consumes 20 credits.</p>
              </div>
            </div>
          </div>

          <div className={`${styles['cs-guard']} ${styles['cs-block']}`}>
            <h3 className={styles['cs-sub']}>Guardrails That Protect Your Budget</h3>
            <CheckList items={GUARDRAILS} />
          </div>
          <p className={styles['cs-callout']}>Dynamics Square builds the credit forecast into every project, so you see the likely running cost of each agent before you commit.</p>
        </div>
      </section>

      <section className={styles['cs-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['cs-head']} text-center`}>
                <h2>Copilot Studio License: Which Route Fits Your Business</h2>
                <p>The right Copilot Studio licence depends on who uses your agents and where they run.</p>
              </div>
            </div>
          </div>
          <div className={styles['cs-compare']}>
            <div className={styles['cs-compare__col']}>
              <h3>Choose Microsoft 365 Copilot when</h3>
              <CheckList items={LICENCE_M365} />
            </div>
            <div className={`${styles['cs-compare__col']} ${styles['cs-compare__col--alt']}`}>
              <h3>Choose standalone Copilot Studio when</h3>
              <CheckList items={LICENCE_STANDALONE} />
            </div>
          </div>
          <div className={styles['cs-rules']}>
            <p>Microsoft&apos;s licensing rules add a few points worth planning around:</p>
            <CheckList items={LICENCE_RULES} />
          </div>
          <p className={styles['cs-callout']}>Dynamics Square reviews your users, channels and expected volumes, then recommends the licensing mix that fits, so you avoid paying twice for the same capability.</p>
        </div>
      </section>

      <section className={`${styles['cs-section']} ${styles['cs-section--tint']}`}>
        <div className='container'>
          <div className='row g-4 g-lg-5'>
            <div className='col-lg-7 align-self-center'>
              <div className={styles['cs-head']} style={{ marginBottom: 0 }}>
                <h2>Why Dynamics Square is the Copilot Studio Partner for the UK</h2>
                <p>The right technology can change everything, and Dynamics Square ensures your business gets the tools it needs to succeed. An agent creates value only when it connects to your real data and your real processes, and that is where our Dynamics 365 and <Link href="/products/microsoft-power-platform/" className='u-i'>Power Platform</Link> depth counts.</p>
              </div>
              <div className={styles['cs-points']}>
                {WHY_POINTS.map((p) => (
                  <div className={styles['cs-point']} key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-lg-5 align-self-center'>
              <Image
                src="/img/copilot-studio-02.png"
                alt="Copilot Studio stacked on Dynamics 365 and Power Platform"
                width={593}
                height={602}
                className={styles['cs-img']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`pharma-timeline-section ${styles['cs-timeline']}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>How We Deliver Copilot Studio Projects</h2>
              </div>
            </div>
          </div>
          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>
            {STEPS.map((step, i) => {
              const card = (
                <div className={`pharma-timeline__card pharma-timeline__card--${i % 2 ? 'right' : 'left'}`}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              );
              return (
                <div className="pharma-timeline__row" key={step.title}>
                  {i % 2 ? <div className="pharma-timeline__spacer"></div> : card}
                  <div className="pharma-timeline__dot">{i + 1}</div>
                  {i % 2 ? card : <div className="pharma-timeline__spacer"></div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="solution-new-banner-fove">
        <div className='container'>
          <div className='row g-4 g-lg-5'>
            <div className='col-lg-6 align-self-center order-2 order-lg-1'>
              <Image
                src="/img/copilot-studio-03.png"
                alt="Copilot Studio analytics showing conversation outcomes and run duration trends"
                width={589}
                height={540}
                className={styles['cs-img']}
              />
            </div>
            <div className='col-lg-6 align-self-center order-1 order-lg-2'>
              <div className={styles['cs-head']} style={{ marginBottom: 0 }}>
                <h2>Copilot Studio Support After Go-Live</h2>
                <p>Agents improve with attention. Our Copilot Studio support covers the work that keeps them accurate and affordable:</p>
              </div>
              <CheckList items={SUPPORT} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['cs-section']} ${styles['cs-section--tint']}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={styles['cs-consult']}>
                <div className={styles['cs-head']} style={{ marginBottom: '22px' }}>
                  <h2>Start with a Free Copilot Studio Consultation</h2>
                  <p>Speak to a Copilot Studio partner who gives you a plan you can act on. In one session, our experts will:</p>
                </div>
                <CheckList items={CONSULT} />
                <div className="text-center" style={{ marginTop: '30px' }}>
                  <ConsultButton label="Book My Consultation" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                        aria-expanded="false"
                        aria-controls={`faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(faq.answer) }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down" aria-hidden="true"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopilotStudio;
