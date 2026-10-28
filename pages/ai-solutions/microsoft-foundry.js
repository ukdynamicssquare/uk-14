import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../public/data/microsoftfoundry.json';
import { sanitizeHtml } from '../../helpers/sanitizeHtml';
import PageSeo from "../../components/PageSeo";
import styles from "../../styles/microsoft-foundry.module.css";

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "about": {
        "@type": "SoftwareApplication",
        "name": "Microsoft Foundry",
        "alternateName": ["Azure AI Foundry", "Microsoft AI Foundry", "Azure AI Studio"],
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "url": "https://ai.azure.com",
        "publisher": { "@type": "Organization", "name": "Microsoft" }
      }
    },
    {
      "@type": "Service",
      "serviceType": "Microsoft Foundry consulting, agent development, integration, pricing and support",
      "audience": { "@type": "BusinessAudience", "name": "UK businesses" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Foundry Agent Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Knowledge agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Action agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Multi-agent workflows" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hosted agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Edge agents" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Foundry Support After Go-Live" } }
        ]
      }
    }
  ]
};

const COMPONENTS = [
  ['Foundry Models', "The model catalogue, with over 11,000 options from OpenAI, Anthropic, Meta, Google, xAI, Hugging Face and Microsoft's own MAI family, covering text, reasoning, multimodal and sector-specific needs"],
  ['Foundry Agent Service', 'Builds, hosts, connects and scales AI agents'],
  ['Foundry Tools', 'Prebuilt services for reading documents, translating, handling speech and recognising objects, with your own APIs added through Model Context Protocol (MCP)'],
  ['Foundry IQ', 'Permission-aware grounding that gives agents access to your organisational knowledge'],
  ['Foundry Control Plane', 'Central oversight of your agents, their tools and the knowledge they draw on, connected to Microsoft Entra, Purview and Defender'],
  [<Link href="/products/azure-machine-learning/" className="u-i" key="aml">Azure Machine Learning</Link>, 'Model training and machine learning workflows'],
  ['Foundry Local', 'Models and capabilities that run on a device or at the edge'],
];

const ADOPTION = [
  { icon: '/img/copilot-studio-04.png', title: 'Scale already in production.', text: 'Microsoft reports developers at over 80,000 organisations use Foundry, and that group includes 80% of the Fortune 500.' },
  { icon: '/img/copilot-studio-07.png', title: 'A catalogue that fits the task.', text: "With over 11,000 models on offer, teams match a model to each job. Microsoft's compact Phi family has passed 60 million downloads on Foundry Models, and model routing picks the most suitable option for every request as it arrives." },
  { icon: '/img/copilot-studio-05.png', title: 'Open standards for the agent layer.', text: 'Developers build and coordinate agents with Microsoft Agent Framework, which is open source, and Foundry tools connect through the open MCP standard. Agents built today can grow with your estate.' },
  { icon: '/img/microsoft-foundry-04.svg', title: 'Governance designed in.', text: <>IT teams oversee agents from the Foundry Control Plane, which also reaches agents built in <Link href="/ai-solutions/copilot-studio/" className="u-i">Copilot Studio</Link> or by partners and reports on security posture, business value and management in one view.</> },
];

const AGENT_PATTERNS = [
  ['Knowledge agents', "Answer questions from connected documents and data, respecting the asking user's permissions", 'Staff helpdesks, policy queries, supplier and customer information'],
  ['Action agents', 'Call tools, connectors and APIs to create, update and approve records', 'Order entry, ticket creation, approvals'],
  ['Multi-agent workflows', 'Coordinate specialist agents, built with Microsoft Agent Framework', 'Processes that cross finance, supply chain and customer teams'],
  ['Hosted agents', 'Run agents written in frameworks such as Microsoft Agent Framework and LangGraph on a managed Foundry runtime with built-in scaling, observability and governance', 'Teams with existing code-first agent projects'],
  ['Edge agents', 'Run models on-device through Foundry Local', 'Sites that need local processing or low-latency response'],
];

const ROUTES = [
  { icon: '/img/microsoft-foundry-05.svg', name: 'Serverless endpoints', text: 'Quick set-up on Microsoft-managed infrastructure, billed for the model usage you consume' },
  { icon: '/img/microsoft-foundry-06.svg', name: 'Dedicated or self-hosted deployment', text: 'Teams that want full control over server configuration, billed on hourly compute and storage' },
  { icon: '/img/microsoft-foundry-07.svg', name: 'Provisioned throughput (PTU)', text: 'Steady, high-volume production traffic that needs reserved capacity' },
  { icon: '/img/microsoft-foundry-08.svg', name: 'Batch processing', text: 'High-volume background jobs where a next-day result is acceptable' },
  { icon: '/img/microsoft-foundry-09.svg', name: 'Priority processing', text: 'User-facing agents where response speed matters most' },
  { icon: '/img/microsoft-foundry-10.svg', name: 'Small models such as Phi', text: 'Everyday chat, coding and summarising at lower compute cost' },
];

const SERVICES = [
  {
    icon: 'bi-magic',
    title: 'Create',
    items: [
      'Model selection from the Foundry catalogue, with fine-tuning and distillation on your data where it adds accuracy',
      'Intelligent model routing that sends each request to the best-fit model',
      'Agents built with Microsoft Agent Framework for multi-agent processes',
      'Customisable AI solution templates on GitHub for common use cases',
    ],
  },
  {
    icon: 'bi-plug',
    title: 'Connect',
    items: [
      'Over 1,400 pre-built connections via Azure Logic Apps, including Dynamics 365, SAP, Salesforce, Office and Adobe',
      'Custom tools through Model Context Protocol',
      'Foundry IQ and Microsoft Graph for permission-aware grounding in company knowledge',
      'Foundry Tools for OCR, translation, speech and object detection',
      <>A <Link href="/ai-solutions/microsoft-fabric/" className="u-i">Microsoft Fabric</Link> data agent for analysis across your data estate</>,
    ],
  },
  {
    icon: 'bi-send',
    title: 'Deploy',
    items: [
      'One-click deployment to Microsoft 365 Copilot and Microsoft Teams users',
      'Azure App Service and Azure Container Apps for agents inside web applications',
      'Event-driven agents on Azure Functions',
      'Edge and on-device agents on Foundry Local',
    ],
  },
  {
    icon: 'bi-shield-check',
    title: 'Govern',
    items: [
      'Agent identities in Microsoft Entra ID, data controls in Microsoft Purview and threat alerts from Microsoft Defender for Cloud',
      "Tracing of every production interaction on OpenTelemetry, with built-in evaluators that score the quality and safety of each agent's answers",
      'Live safety controls that flag injected prompts, invented answers and leaks of sensitive data',
      'Azure API Management for oversight of models and MCP tools',
    ],
  },
];

const USE_CASES = [
  ['Finance', 'Invoice exceptions agent', 'Compares invoices with purchase orders and receipts, then lists mismatches with a proposed fix for the accounts team to approve'],
  ['Sales', 'Order intake agent', 'Reads customer emails, finds the account, asks about missing quantities or dates and drafts the quote for approval'],
  ['Customer service', 'Order status agent', 'Answers delivery and product questions from live records and hands complex cases to a colleague with the full history'],
  ['Procurement', 'Supplier follow-up agent', 'Chases delivery confirmations, flags late purchase orders and suggests alternative suppliers'],
  ['Operations', 'Document processing agent', 'Reads contracts, delivery notes and forms with Foundry Tools OCR and writes the extracted fields to the right records'],
  ['Human resources', 'Policy knowledge agent', 'Answers staff questions from approved SharePoint content and points to the source document'],
];

const CONNECTIONS = [
  [
    <>Dynamics 365 CRM apps (<Link href="/products/microsoft-dynamics-365-sales/" className="u-i">Sales</Link> and <Link href="/products/microsoft-dynamics-365-customer-service/" className="u-i">Customer Service</Link>)</>,
    'Azure Logic Apps connectors, configured and tested with you',
    'Dynamics 365 sits among the 1,400+ business systems that Foundry agents can act on in real time',
  ],
  [
    <>Dynamics 365 <Link href="/products/microsoft-dynamics-365-finance/" className="u-i">Finance</Link> and <Link href="/products/dynamics-365-supply-chain-management/" className="u-i">Supply Chain Management</Link></>,
    'Connectors, MCP tools and APIs, with connector coverage confirmed for your tenant during scoping',
    'Foundry agents can extend to custom tools through open MCP standards',
  ],
  [
    <Link href="/products/dynamics-365-business-central/" className="u-i" key="bc">Business Central</Link>,
    'Connectors and APIs that we configure and test with you',
    <><Link href="/products/dynamics-365-copilot/" className="u-i">Copilot</Link> ships with Business Central, and Microsoft&apos;s capability guide describes agents such as the Sales Order Agent, with custom agents buildable in Copilot Studio</>,
  ],
  [
    'Other line-of-business systems',
    'Any of the 1,400+ pre-built connections, plus MCP',
    'SAP and Salesforce appear alongside Dynamics 365 in Microsoft\'s connection list',
  ],
];

const PRICING = [
  ['Pay-as-you-go', 'Per token processed, or per hour of server usage', 'Testing, new projects and traffic that is hard to forecast'],
  ['Provisioned capacity (PTU)', 'Reserved Provisioned Throughput Units, committed for a month or a year', 'Steady, high-volume production workloads'],
  ['Priority processing', 'Pay-as-you-go with guaranteed low latency', 'Live customer service and other time-sensitive agents'],
  ['Batch processing', 'Requests queue and complete asynchronously, usually inside a day, at a discount of up to 50% against standard rates', 'Overnight and other background workloads'],
  ['Partner models', "Billed through Azure Marketplace at the vendor's own rates", 'Teams that choose a third-party model'],
  ['Fine-tuning', 'Tokens processed in training, plus hosting of the tuned model', 'Models adapted to your own data'],
];

const COST_PARTS = [
  ['Model usage', 'Tokens are billed at the rate set for each model used through Foundry Models.'],
  ['Foundry native agents', 'There is no separate platform charge for these agents. Costs come from the models, tools, and connections they use.'],
  ['Hosted agents', 'Charges are based on container compute time, measured by the hour.'],
  ['Foundry Tools and Foundry IQ connections', 'Connected services may have separate usage charges or licence fees, including Azure Logic Apps connectors, Microsoft Fabric, SharePoint, and Grounding with Bing Search.'],
  ['Safety', 'Starter safety templates are included. Extended live content filtering may incur per use charges.'],
  ['Evaluation and monitoring', 'Manual tests use standard token rates. Automated evaluations and Azure Monitor logging may add costs for compute, storage, and the model used to score responses.'],
];

const SPEND = [
  'Run your expected token volumes and reservations through the free Azure Pricing Calculator before anything is deployed.',
  'Choose a deployment region with favourable rates.',
  'Route everyday tasks to smaller models such as Phi.',
  'Move non-urgent jobs to batch processing.',
  'Reserve provisioned capacity once daily volumes settle.',
  'Ask us about the Microsoft Agent Pre-Purchase Plan (P3) and Azure Consumption Commitments (MACC), two volume programmes that reduce the overall bill.',
];

const ROUTE_PAYG = [
  'You are prototyping or running a first pilot',
  'Demand swings from week to week',
  'Your volume is low to medium',
  'You want spend to follow actual usage',
];

const ROUTE_PTU = [
  'Your agent serves steady daily traffic in production',
  'You want a predictable monthly cost',
  'Your volume is high and sustained',
  'You want dedicated throughput reserved for your workload',
];

const PLANNING = [
  <>Exploring Foundry is open to everyone, and building agents requires an <Link href="/products/microsoft-azure/" className="u-i">Azure</Link> subscription.</>,
  'Platforms from other vendors that your agents call can bill separately through their own APIs.',
  'Agents built in Copilot Studio can draw on Foundry Models, so a Copilot Studio licence and Foundry consumption can sit in one solution.',
  'Region, model and commitment term all change the final rate.',
];

const WHY_POINTS = [
  { title: 'A single team from ledger to agent', text: <>Dynamics 365 <Link href="/products/microsoft-dynamics-erp/" className="u-i">ERP</Link> and <Link href="/products/microsoft-dynamics-crm/" className="u-i">CRM</Link>, ISV solutions, <Link href="/products/microsoft-power-platform/" className="u-i">Power Platform</Link>, Microsoft Fabric and Foundry come together in one team, so your agent and the system it reads share a designer.</> },
  { title: 'Certified depth', text: 'Dynamics 365 has been our specialism since 2011. Today 150+ certified professionals serve clients worldwide, and the 500+ organisations we have worked with give us a broad view of how agents behave in real finance and supply chain processes.' },
  { title: 'Discovery that tests assumptions', text: 'Our architects challenge every assumption about data quality and process ownership during discovery, then recommend a design once the picture is complete.' },
  { title: 'Relationships that last', text: 'Our average client stays beyond five years, because we operate as part of your team.' },
];

const STEPS = [
  { title: 'Analysis', text: 'Discovery workshops with process owners and IT produce a ranked list of agent use cases, a data readiness check and a view of the right pricing route.' },
  { title: 'Design', text: 'We settle the architecture, model choices, deployment route, knowledge sources, integration points, approval steps, security boundaries and the cost forecast.' },
  { title: 'Development', text: 'Our team builds the agents, tools and connectors in a Foundry project and tests them against real scenarios from your business.' },
  { title: 'Deployment', text: 'We release agents to Microsoft 365 Copilot, Teams, your web applications or other channels, brief the people who will rely on them and take the agents live.' },
  { title: 'Post go-live', text: 'Tracing, evaluation results and spend are reviewed on a regular rhythm, and we tune agents as usage grows.' },
];

const SUPPORT = [
  'Tracing and evaluation reviews of the scores each agent earns on answer quality and safety, with an agreed threshold that triggers action',
  'Regression testing on a fixed question set whenever a prompt, model or connection changes',
  'Spend reviews covering token consumption, model routing and capacity choices',
  'Governance across agent identities, access roles and connected knowledge sources',
  'Model and feature upgrades as Microsoft adds new models and capabilities to Foundry',
];

const CONSULT = [
  'Rank your candidate processes by expected return and pick the first agent worth building',
  'Recommend a model, deployment and pricing route for each use case',
  'Map the Dynamics 365 and other systems your agents need to connect to',
  'Sketch the route from pilot to live service, with milestones',
];

// Rows of a table; on phones each row stacks into a card labelled by its column.
const DataTable = ({ labelledBy, columns, rows }) => (
  <div className={styles['mf-table-wrap']}>
    <table className={styles['mf-table']} aria-labelledby={labelledBy}>
      <thead>
        <tr>
          {columns.map((c) => <th scope="col" key={c}>{c}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, r) => (
          <tr key={r}>
            {row.map((cell, i) => (
              <td key={i} data-label={columns[i]}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const CheckList = ({ items }) => (
  <ul className={styles['mf-list']}>
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

const MicrosoftFoundry = () => {

  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <PageSeo
        type="Service"
        title="Microsoft Foundry Consulting Services - Dynamics Square UK"
        description="Dynamics Square UK offers Microsoft Foundry consulting services. Build, connect and govern AI agents across Dynamics 365 and your business systems."
        image="/img/microsoft-foundry-og.png"
        imageAlt="Microsoft Foundry overview dashboard showing active alerts, agent count, estimated cost and token usage"
        keywords="microsoft foundry consulting services, microsoft foundry services, microsoft foundry, microsoft foundry agent services, what is microsoft foundry, microsoft ai foundry, connect ai agents, microsoft foundry integration, microsoft azure ai foundry, microsoft foundry pricing"
        faqs={faqData}
        extraSchema={pageSchema}
      />
      <div className={`solution-new-banner-one ${styles['mf-hero']}`}>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-one-content'>
                <h1 className='large-heading'>Microsoft Foundry Consulting Services </h1>
                <p>Dynamics Square plans, builds and runs Microsoft Foundry solutions that put AI agents to work on your orders, ledgers, documents and customer queries. Every agent we deliver reads from your own records, acts within the applications your staff open each morning and stays under the governance your risk team expects.</p>
                <p className={styles['mf-tagline']}>Move your AI roadmap from slide deck to production while your market is still choosing a vendor.</p>
                <div className="text-center">
                  <ConsultButton label="Book a Foundry Consultation" />
                </div>
              </div>
              <div className='m-b-image'>
                <Image src="/img/microsoft-foundry-00.png" alt="" width={1920} height={888} quality={100} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="solution-new-banner-one-img imm-mins">
          <Image
            src="/img/microsoft-foundry-00.png"
            alt="Microsoft Foundry screens showing the model leaderboard, the Discover page with featured models and the agent overview with active alerts"
            width={1920}
            height={888}
            quality={100}
            priority
            className="flot-1"
          />
        </div>
      </div>

      <section className={styles['mf-trust']} aria-label="Trust bar">
        <div className="container">
          <ul className={styles['mf-trust__list']}>
            <li className={styles['mf-trust__item']}>
              <i className="bi bi-people" aria-hidden="true"></i>
              <span><strong>500+</strong> clients worldwide</span>
            </li>
            <li className={styles['mf-trust__item']}>
              <i className="bi bi-patch-check" aria-hidden="true"></i>
              <span><strong>150+</strong> certified professionals</span>
            </li>
            <li className={styles['mf-trust__item']}>
              <i className="bi bi-calendar-check" aria-hidden="true"></i>
              <span>Delivering Dynamics 365 since <strong>2011</strong></span>
            </li>
            <li className={styles['mf-trust__item']}>
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner badge"
                width={220}
                height={202}
                sizes="64px"
                className={styles['mf-trust__badge']}
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
              <div className={`product-side-002-content ${styles['mf-copy']}`}>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2 id="mf-what">What Is Microsoft Foundry?</h2>
                </div>
                <p>Microsoft Foundry is where Microsoft brings its AI development tools together: a place to build applications and agents, connect them to what your organisation knows and keep them under control. Models, agent tooling, knowledge grounding, security and monitoring share one portal at ai.azure.com, so developers, data teams and IT administrators work from a common set of controls.</p>
                <p>The platform has changed name twice. It began life as Azure AI Studio, became Azure AI Foundry and now carries the name Microsoft Foundry. A search for Microsoft Azure AI Foundry or Microsoft AI Foundry lands on the same product, and documentation published under the earlier names still describes it.</p>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <Image
                src="/img/microsoft-foundry-01.png"
                alt="Microsoft Foundry agent playground with model choice, instructions, tools, knowledge, memory and guardrails settings"
                width={630}
                height={588}
                className={styles['mf-img']}
              />
            </div>
          </div>
          <p className={styles['mf-note']} style={{ margin: '40px 0 24px' }}><strong>Foundry brings together these natively integrated services:</strong></p>
          <DataTable
            labelledBy="mf-what"
            columns={['Component', 'What it does']}
            rows={COMPONENTS}
          />
          <p className={styles['mf-callout']}>Owning the platform is the starting line. Dynamics Square closes the gap between a Foundry subscription and a working agent: we pick the use cases, match models and deployment routes to them, wire the agents into <Link href="/products/microsoft-dynamics-365/" className='u-i'>Dynamics 365</Link> and your other systems, forecast the monthly cost and remain on call once users depend on the result.</p>
        </div>
      </section>

      <section className={`${styles['mf-section']} ${styles['mf-section--tint']}`}>
        <div className="container">
          <div className={`${styles['mf-head']} text-center`}>
            <h2>Why UK Organisations Are Adopting Microsoft Foundry</h2>
          </div>
          <div className={styles['mf-stats']}>
            {ADOPTION.map((item) => (
              <div className={styles['mf-stat']} key={item.title}>
                <Image src={item.icon} alt="" width={40} height={40} unoptimized={item.icon.endsWith('.svg')} className={styles['mf-stat__icon']} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['mf-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['mf-head']} text-center`}>
                <h2 id="mf-agents">Microsoft Foundry Agent Services: What You Can Build</h2>
                <p>Microsoft Foundry agent services give developers a managed home for agents that reason, call tools and finish tasks. Agents are created in the Foundry portal or in code through the Foundry SDK. Microsoft frames the aim as agents that act on complex business processes while humans stay in control.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="mf-agents"
            columns={['Agent pattern', 'What it does', 'Where it fits']}
            rows={AGENT_PATTERNS}
          />
          <p className={styles['mf-note']}>Foundry Agent Service also includes managed long-term memory, so an agent can carry context from one session to the next.</p>

          <div className={styles['mf-engine']}>
            <div className="text-center">
              <h3 className={styles['mf-sub']}>Choose the Model and Deployment Route</h3>
              <p className={styles['mf-note']} style={{ marginBottom: '28px' }}>Every Foundry workload sits on a deployment route, and the route shapes performance, control and cost.</p>
            </div>
            <div className={styles['mf-cards3']}>
              {ROUTES.map((r) => (
                <div className={styles['mf-engine-card']} key={r.name}>
                  <Image src={r.icon} alt="" width={52} height={52} unoptimized className={styles['mf-engine-card__icon']} />
                  <div>
                    <h4>{r.name}</h4>
                    <p>{r.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['mf-section']} ${styles['mf-section--tint']}`}>
        <div className="container">
          <div className={`${styles['mf-head']} text-center`}>
            <h2>Microsoft Foundry Services We Configure for Your Business</h2>
          </div>
          <div className={styles['mf-caps']}>
            {SERVICES.map((cap) => (
              <div className={styles['mf-cap']} key={cap.title}>
                <div className={styles['mf-cap__head']}>
                  <i className={`bi ${cap.icon}`} aria-hidden="true"></i>
                  <h3>{cap.title}</h3>
                </div>
                <CheckList items={cap.items} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles['mf-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['mf-head']} text-center`}>
                <h2 id="mf-usecases">Microsoft Foundry Use Cases by Department</h2>
                <p>Foundry supports everything from a question-and-answer chatbot to autonomous multi-agent workflows. These are agent designs Dynamics Square scopes for finance, sales, service, procurement, operations and HR teams.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="mf-usecases"
            columns={['Department', 'Agent', 'What it does']}
            rows={USE_CASES}
          />
          <p className={styles['mf-callout']}>A design sheet accompanies each agent. It lists which records the agent can see, which actions sit within its authority, who signs off on changes it proposes and what a month of running it should cost.</p>
        </div>
      </section>

      <section className={`${styles['mf-section']} ${styles['mf-section--tint']}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['mf-head']} text-center`}>
                <h2 id="mf-connect">Connect AI Agents to Dynamics 365 and Your Other Business Systems</h2>
                <p>Microsoft Foundry integration is what lets an agent read an order, update a record or start an approval. Azure Logic Apps supplies the connectors, MCP supplies custom tools and Foundry IQ supplies grounded knowledge.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="mf-connect"
            columns={['Where the process runs', 'How the agent connects', 'What Microsoft states']}
            rows={CONNECTIONS}
          />
          <p className={styles['mf-callout']}>Microsoft 365 users meet these agents in the tools they open every day, because Foundry deploys to Microsoft 365 Copilot and Teams in one click.</p>
        </div>
      </section>

      <section className={styles['mf-section']}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['mf-head']} text-center`}>
                <h2 id="mf-pricing">Microsoft Foundry Pricing in the UK</h2>
                <p>Microsoft Foundry pricing is based on usage, with each service billed separately. Your total cost depends on the models you use, the capacity you reserve, and the services you connect. Microsoft calculates UK pricing in US dollars and converts it to pounds using London closing spot exchange rates, so prices in pounds can change with currency movements. Rates also vary by model and Azure region, so an estimate based on your expected usage gives you a clearer view of the cost.</p>
              </div>
            </div>
          </div>
          <DataTable
            labelledBy="mf-pricing"
            columns={['Route', 'How it bills', 'Best for']}
            rows={PRICING}
          />

          <div className={styles['mf-block']}>
            <h3 className={styles['mf-sub']} id="mf-costs">How Microsoft Foundry Pricing Adds Up</h3>
            <DataTable
              labelledBy="mf-costs"
              columns={['Service', 'How you pay']}
              rows={COST_PARTS}
            />
          </div>

          <div className={`row g-4 ${styles['mf-block']}`}>
            <div className="col-lg-6">
              <div className={styles['mf-example']}>
                <h3 className={styles['mf-sub']}>Worked Example: How Batch Processing Can Reduce Costs</h3>
                <p>Consider this illustrative example from Dynamics Square. An overnight document processing job costs <strong>£2,000 per month</strong> at standard rates. If the workload qualifies for Microsoft&apos;s maximum batch processing discount of 50%, the monthly cost falls to <strong>£1,000</strong>.</p>
                <p>Actual savings depend on the model used and whether the workload can wait for results until the next day. Dynamics Square assesses your workload before recommending batch processing as a cost saving option.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles['mf-guard']}>
                <h3 className={styles['mf-sub']}>Ways to Keep Spend in Check</h3>
                <CheckList items={SPEND} />
              </div>
            </div>
          </div>
          <p className={styles['mf-callout']}>Every Foundry project we run includes a usage forecast, which puts a monthly figure on each agent ahead of your approval to build it.</p>
        </div>
      </section>

      <section className={`${styles['mf-section']} ${styles['mf-section--tint']}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={`${styles['mf-head']} text-center`}>
                <h2>Microsoft Foundry Pricing Routes: Which One Fits Your Business</h2>
                <p>The right route depends on how predictable your traffic is and how quickly users expect answers.</p>
              </div>
            </div>
          </div>
          <div className={styles['mf-compare']}>
            <div className={styles['mf-compare__col']}>
              <h3>Choose pay-as-you-go when</h3>
              <CheckList items={ROUTE_PAYG} />
            </div>
            <div className={`${styles['mf-compare__col']} ${styles['mf-compare__col--alt']}`}>
              <h3>Choose provisioned capacity when</h3>
              <CheckList items={ROUTE_PTU} />
            </div>
          </div>
          <div className={styles['mf-rules']}>
            <p>A few planning points sit alongside that choice:</p>
            <CheckList items={PLANNING} />
          </div>
          <p className={styles['mf-callout']}>We study your workloads, user numbers and growth plans, then assign each workload the billing basis that suits it from day one.</p>
        </div>
      </section>

      <section className={styles['mf-section']}>
        <div className='container'>
          <div className='row g-4 g-lg-5'>
            <div className='col-lg-7 align-self-center'>
              <div className={styles['mf-head']} style={{ marginBottom: 0 }}>
                <h2>Why Dynamics Square for Microsoft Foundry Consulting Services in the UK</h2>
                <p>An agent proves its worth when it reads your ledgers and acts on your orders. That calls for a partner who knows the systems behind the AI as well as the AI itself.</p>
              </div>
              <div className={styles['mf-points']}>
                {WHY_POINTS.map((p) => (
                  <div className={styles['mf-point']} key={p.title}>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='col-lg-5 align-self-center'>
              <Image
                src="/img/microsoft-foundry-02.svg"
                alt="AI agents built in Microsoft Foundry on top of Power Platform, Microsoft Fabric and Dynamics 365 ERP and CRM"
                width={593}
                height={602}
                unoptimized
                className={styles['mf-img']}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`pharma-timeline-section ${styles['mf-timeline']}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>How We Deliver Microsoft Foundry Consulting Services</h2>
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
                src="/img/microsoft-foundry-03.svg"
                alt="Foundry tracing and evaluation view with answer quality, safety checks, token spend and an evaluation score trend"
                width={589}
                height={540}
                unoptimized
                className={styles['mf-img']}
              />
            </div>
            <div className='col-lg-6 align-self-center order-1 order-lg-2'>
              <div className={styles['mf-head']} style={{ marginBottom: 0 }}>
                <h2>Microsoft Foundry Support After Go-Live</h2>
                <p>An agent in production keeps meeting new questions, new data and new model releases. Our Microsoft Foundry support keeps it accurate, safe and affordable:</p>
              </div>
              <CheckList items={SUPPORT} />
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles['mf-section']} ${styles['mf-section--tint']}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className={styles['mf-consult']}>
                <div className={styles['mf-head']} style={{ marginBottom: '22px' }}>
                  <h2>Start with a Free Microsoft Foundry Consultation</h2>
                  <p>Talk to a Microsoft Foundry consulting team that sends you away with a plan. Over a single working session, our specialists will:</p>
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

export default MicrosoftFoundry;
