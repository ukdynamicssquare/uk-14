import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../../public/data/customer-service.json';
import useCardScrollEffect from "../../../components/useCardScrollEffect";
// import NavBar from '../../../components/NavBar';
import BlogFinanaceCard from '../../../components/BlogFinanaceCard';
import dynamic from "next/dynamic";


const StackedCards = dynamic(() => import("../../../components/StackedCards"), {
  ssr: false,
});

const FieldService = () => {
  /*gsap card scroll*/
  const containerRef = useRef(null);
  useGsapScrollCards(containerRef);
  /*gsap card scroll*/

  useCardScrollEffect()

  /*faq*/
  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const [pdfType, setPdfType] = useState(null);
  const handleOpenModal = (type) => {
    setPdfType(type);
    // Open modal manually (needed since you use Bootstrap)
    const modal = new bootstrap.Modal(document.getElementById('pdfModel'));
    modal.show();
  };

  return (
    <>
      <Head>
        <title>Microsoft Dynamics 365 Customer Service | Dynamics Square UK</title>
        <meta
          name="description"
          content="Transform customer support with Microsoft Dynamics 365 Customer Service. Manage cases, automate workflows and deliver personalised omnichannel support."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="og:title" content="Microsoft Dynamics 365 Customer Service | Dynamics Square UK" />
        <meta property="og:description" content="Transform customer support with Microsoft Dynamics 365 Customer Service. Manage cases, automate workflows and deliver personalised omnichannel support." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/customer-service-001.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/products/microsoft-dynamics-365-customer-service/" />
        <meta property="twitter:title" content="Microsoft Dynamics 365 Customer Service | Dynamics Square UK" />
        <meta property="twitter:description" content="Transform customer support with Microsoft Dynamics 365 Customer Service. Manage cases, automate workflows and deliver personalised omnichannel support." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/customer-service-001.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "What is Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Customer Service is an intelligent, agent-based service solution that helps businesses manage customer interactions, resolve cases, and deliver support across multiple channels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What does Dynamics 365 Customer Service help businesses achieve?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "It helps customer-focused businesses resolve issues faster, improve service representatives' productivity, and provide consistent, personalised support across voice, chat, email, and social channels."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Dynamics 365 Customer Service improve response and resolution times?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Customer Service uses Copilot to help service representatives troubleshoot issues, draft responses, and find relevant knowledge articles. AI-based routing assigns cases to the most suitable representative, helping reduce delays."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does case management work in Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Cases are managed within a unified platform where service representatives can track interactions, access customer history, and resolve issues efficiently with AI assistance and automation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are AI agents in Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "AI agents automate service functions such as case lifecycle management, knowledge updates, customer intent detection, and service quality monitoring to improve efficiency and consistency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Copilot support service representatives?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Copilot allows service representatives to interact with the system using natural language, generate contextual responses, receive knowledge recommendations, and troubleshoot issues faster during customer interactions."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Dynamics 365 Customer Service support self-service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It provides AI-powered chatbots, conversational IVR, and community portals that allow customers to resolve common issues independently."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can businesses manage customer interactions across multiple channels?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Dynamics 365 Customer Service supports omnichannel engagement, allowing organisations to manage interactions across voice, chat, email, and social channels within a unified platform."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Dynamics 365 Customer Service provide real-time insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It provides insights such as sentiment analysis, interaction analytics, and performance metrics to help organisations monitor and improve service quality."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Dynamics 365 Customer Service integrate with other Microsoft applications?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It integrates with Microsoft applications such as Teams and Outlook to support communication and collaboration across customer service workflows."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the pricing of Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Customer Service offers different licensing options based on the features and service capabilities an organisation requires. Businesses should check Microsoft's current pricing or consult a Dynamics 365 partner for an accurate quotation."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Is Dynamics 365 Customer Service suitable for growing businesses?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. It is a scalable solution designed to support organisations of different sizes, helping them improve service efficiency, adapt to changing customer needs, and deliver consistent support experiences."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is Dynamics 365 Customer Service Insights?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Customer Service Insights provides actionable information related to customer interactions, operational performance, and service trends. These insights can help businesses make informed decisions, improve customer satisfaction, and increase operational efficiency."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I install Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "An administrator can install the relevant Dynamics 365 Customer Service application through the Power Platform admin centre. The administrator must select the appropriate environment, complete the installation process, and assign the required security roles and licences before users access the application."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the key features of Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Key features include case management, customer interaction tracking, knowledge management, queues and case routing, service-level agreements, entitlements, reports and dashboards, scheduling, chat, and omnichannel conversation management."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the difference between Dynamics 365 Sales and Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Sales helps businesses manage leads, opportunities, customer relationships, and sales activities. Dynamics 365 Customer Service focuses on managing cases, support interactions, knowledge, service levels, and after-sales customer experiences."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What are the benefits of Dynamics 365 Customer Service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Benefits include advanced reporting, self-service capabilities, omnichannel support, improved case management, AI-assisted productivity, Microsoft application integrations, scalability, and adaptability to changing business requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "How does Dynamics 365 Customer Service CRM help improve customer service?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Dynamics 365 Customer Service CRM centralises customer information and support interactions, giving service representatives the context required to provide personalised, data-driven assistance. It also helps businesses manage after-sales service and strengthen customer retention."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Can Dynamics 365 Customer Service CRM be customised for specific business needs?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes. Dynamics 365 Customer Service can be customised using configurations, integrations, add-ons, Power Platform tools, and custom development to support an organisation's particular processes and requirements."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What is the role of the knowledge base in Dynamics 365 Customer Service CRM?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "The knowledge base provides a central repository of approved articles, solutions, instructions, and troubleshooting information. Service representatives can use it to resolve cases consistently, while customers can access relevant articles through supported self-service channels."
                    }
                  }
                ]
              }

            ),
          }}
        />
      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Customer Service</h1>
                <span className='large-heading'>Implement an agentic service solution trusted by support teams worldwide </span>
                <p>Set up Microsoft Dynamics 365 Customer Service for unified operations. Companies use this agent-based CRM solution to diagnose & address issues, automate responses, and resolve cases in a much faster way.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Try for Free &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              {/* <div className='m-b-image'>
                <Image src="/img/bc-mobile-banner.png" alt='bc-mobile-banner' width={1098} height={657} />
              </div> */}
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="solution-new-banner-one-imgs">
                <Image src="/img/customer-service-001.png" alt="Field Service" width={916} height={585} className="flot-1" priority />
              </div>
            </div>
          </div>
        </div>



        <div className='container cust-pp'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flecx'>
                <div className='left-fl'>
                  <p>Dynamics Square helps small and medium businesses streamline customer support, resolve cases faster, and deliver personalised experiences with the AI-powered Dynamics 365 Customer Service CRM.</p>
                </div>
                <div className='left-rl'>
                  <Image src="/img/partner-logo-black.png" width={193} height={55} alt="partner-logo-black" />
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className='container' id='section1'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>What is Dynamics 365 Customer Service?</h2>
                <p>Microsoft Dynamics 365 Customer Service is an AI-powered customer service CRM solution. It helps you bring together customer interactions, case management, and knowledge on a single centralised platform.</p>
                <p>Customer service firms can use this application with <a className='u-i' href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</a> to merge their customer service with financial, operational, and customer data.</p>
                <p>Dynamics 365 Customer Service equips your service reps so that they can identify issues, automate responses, and handle cases in an effective way. Furthermore, this platform allows intelligent routing, self-service with chatbots & IVR, and sentiment analysis, which helps you to increase the response quality and speed.</p>
                <p>It is a versatile, cloud-based, and modular platform, which is used efficiently by enterprises independent of their service settings and customer interaction models. They can build up processes, knowledge bases, automation flows, and AI functions so they align with service goals, team capacity and customer expectations.</p>
                <p><b>To summarise, Dynamics 365 Customer Service is:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> A connected system for customer interactions, case management, and knowledge delivery</li>
                  <li><i className="bi bi-check2"></i> An agentic solution powered by AI, Copilot, and intelligent routing</li>
                  <li><i className="bi bi-check2"></i> A scalable platform designed for modern, omnichannel customer service teams </li>
                </ul>
                <p>Ready to transform customer service with an intelligent and unified solution?</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Customer Service Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='dsa-minee'><Image src="/img/customer-service-002.png" alt="Dynamics 365 Customer Service" width={630} height={540} /></div>
            </div>
          </div>

        </div>
      </div>
      {/* <NavBar /> */}
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-banner-sub-head'>
                <h2>Business Problems Solved by Dynamics 365 Customer Service</h2>
                <p>Dynamics 365 Customer Service capabilities solve both common and specific challenges faced by support teams across industries. Some of the most frequent challenges are:</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> High volume of customer requests leading to slower resolution times</li>
                  <li><i className="bi bi-check2"></i> Limited understanding of customer interactions across channels</li>
                  <li><i className="bi bi-check2"></i> Manual case handling increases the workload of service representatives</li>
                  <li><i className="bi bi-check2"></i> Trouble routing cases to the most appropriate service representative</li>
                  <li><i className="bi bi-check2"></i> Low self-service adoption, more reliance on support teams</li>
                  <li><i className="bi bi-check2"></i> No real-time visibility on customer sentiment and service performance</li>
                  <li><i className="bi bi-check2"></i> Inconsistent responses due to knowledge articles not always being available</li>
                  <li><i className="bi bi-check2"></i> Fragmented engagement across voice, chat, email, and social channels</li>
                  <li><i className="bi bi-check2"></i> High administrative effort in managing cases, workflows, and service operations</li>
                </ul>

              </div>

            </div>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8" style={{ textAlign: 'center' }}>
                  <Image src="/img/customer-service-003.png" width={630} height={256} alt="Business Problems Solved by Dynamics 365 Customer Service" />
                </div>
                <p style={{ paddingTop: '30px' }}>Now resolve issues before they escalate. <a className='u-i' href="/blog/what-is-copilot-in-dynamics-365-customer-service/">Copilot in D365 Customer Service</a> helps with flagging problems early, automating case handling, and routing requests to the right agent based on context and customer sentiment.</p>
                <p>The platform also has self-service options, a centralised knowledge base, and real-time dashboards. As a result, customers get consistent support across phone, email, chat, and other channels.</p>
                <p>For organizations focused on service quality or operational efficiency, it provides the automation and visibility needed to manage customer service effectively.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Customer Service Demo  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd asd6'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='solution-new-cta-001'>
                  <h3>Need help selecting the right Dynamics 365 Customer Service licence for your organisation?</h3>
                  <div>
                    <Link href="#exampleModal"
                      data-bs-toggle="modal" className="btn-get-started scrollto">
                      <span>Speak with Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id='section3' className='solution-new-banner-three'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Inside Dynamics 365 Customer Service: What Powers Your Service Operations</h2>
                <p>Dynamics 365 Customer Service helps you set high standards for customer service. It allows your service reps to deliver faster, more consistent, and personalised support across channels. Additionally, it helps reduce manual effort, respond intelligently to customer needs, and improve service outcomes using AI capabilities and automation.</p>
                <p><b>This agent-based service system helps support teams in the following ways:</b></p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Case Routing and Resolution</h3>
                      <p>Manual case handling and routing often delay resolution. With D365 Customer Service, teams can:</p>
                      <ul>
                        <li>Route cases automatically using AI-based and sentiment-based routing </li>
                        <li>Prioritise requests based on urgency, context, and customer intent</li>
                        <li>Resolve issues faster with Copilot-assisted responses and recommendations</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-006.png" width={510} height={424} alt="Intelligent Case Routing and Resolution" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Unified Case Management and Omnichannel Engagement</h3>
                      <p>Fragmented systems limit visibility across customer interactions. This intelligent customer service solution helps teams to:</p>
                      <ul>
                        <li>Manage cases, interactions, and customer requests in one platform</li>
                        <li>Engage across channels including voice, chat, email, and social</li>
                        <li>Access a complete view of customer interactions in real time</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-007.png" width={510} height={424} alt="Unified Case Management and Omnichannel Engagement" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>AI-Assisted Service Representative Productivity</h3>
                      <p>Service representatives don’t have to spend time searching for information and drafting responses. Dynamics 365 Customer Service allows to:</p>
                      <ul>
                        <li>Use Copilot to troubleshoot issues and draft contextual responses</li>
                        <li>Access AI-recommended knowledge articles during interactions </li>
                        <li>Reduce manual effort and focus on resolving customer issues efficiently </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-008.png" width={510} height={424} alt="AI-Assisted Service Representative Productivity" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Real-Time Insights and Service Analytics</h3>
                      <p>Confident decision-making relies on real-time insights, and with D365 Customer Service, companies can:</p>
                      <ul>
                        <li>Assess customer feedback, interactions, and service patterns in real time</li>
                        <li>Monitor performance through omnichannel analytics and KPIs</li>
                        <li>Identify improvement opportunities across service interactions and knowledge management</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-009.png" width={510} height={424} alt="Real-Time Insights and Service Analytics" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Self-Service and Automation at Scale</h3>
                      <p>Manage workload by reducing dependency on service teams. Dynamics 365 Customer Service increases response time and customer experience by allow firms to:</p>
                      <ul>
                        <li>Set up AI-powered chatbots and interactive IVR for instant support</li>
                        <li>Automate routine tasks and processes with prebuilt and custom flows</li>
                        <li>Enable customers to find answers through knowledge bases and community portals</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-010.png" width={510} height={424} alt="Self-Service and Automation at Scale" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Agentic AI Capabilities for Continuous Improvement</h3>
                      <p>Improving as you are expanding is not as easy as it might sound. Keeping up the service quality and adapting to changing customer needs require firms to use a solid customer service CRM that can:</p>
                      <ul>
                        <li>Automate case lifecycle management using AI agents</li>
                        <li>Keep knowledge content up to date through continuous learning</li>
                        <li>Identify customer intent across interactions to improve self-service</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/customer-service-011.png" width={510} height={424} alt="Agentic AI Capabilities for Continuous Improvement" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Customer Service Benefits: The Advantage Support Teams Need</h2>
                <p>Organisations, well-received for their customer service, have one thing in common. They manage their operations on systems that minimise manual effort, are highly adaptable to changing demand, and help with timely resolution of issues.</p>
                <p>The agentic service solution of Dynamics 365 Customer Service ticks all the boxes for support teams.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Resolve Issues Faster with AI and Copilot</h3>
                    <p>Delays are usual outcomes where manual processes are an integral part of everyday operations. Dynamics 365 Customer Service uses Copilot and AI capabilities to help your service reps troubleshoot issues, draft responses, and access relevant information as and when required, which improve their response time and accuracy.</p>
                  </li>
                  <li>
                    <h3>Improve Visibility into Customer Interactions</h3>
                    <p>Service reps cannot address customer concerns until they are completely aware of the context. Real-time insights, sentiment analysis, and a unified view of customer interactions in Dynamics 365 Customer Service help your teams stay informed and maintain control across all channels. </p>
                  </li>
                  <li>
                    <h3>Increase Service Representatives’ Productivity with AI Assistance</h3>
                    <p>Service representatives spend a lot of time searching for correct answers and managing repetitive tasks. Copilot in Dynamics 365 Customer Service helps provide AI-powered knowledge articles, automate repetitive actions, and let representatives focus on resolving customer issues efficiently.</p>
                  </li>
                  <li>
                    <h3>Enable Consistent Omnichannel Customer Engagement</h3>
                    <p>Renowned customer service companies know it better than the most that consistency in communication is the key. Otherwise, it can lead to inconsistent & poor service experiences. Dynamics 365 Customer Service helps you serve your customers across voice, chat, email, and social channels consistently without losing context and continuity in every interaction.</p>
                  </li>
                  <li>
                    <h3>Expand Self-Service and Reduce Support Load</h3>
                    <p>Smart companies focus on reducing dependency on support teams, as it puts operational load on them. Dynamics 365 Customer Service comes with AI-powered chatbots, conversational IVR, and community portals, which let customers resolve issues independently and in real-time.</p>
                  </li>
                  <li>
                    <h3>Improve Service Quality with Agentic Capabilities</h3>
                    <p>Keeping up with the service quality when you are growing at scale can be challenging but that’s not the case when you have Dynamics 365 Customer Service. It has got you covered with its AI agents to automate case management, keep knowledge content up to date, identify customer intent, and monitor service quality across interactions.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p style={{ fontSize: '16px' }}>Witness improved response times, enhanced service quality, and more consistent customer experiences across channels with D365 Customer Service.</p>
                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Claim Your Free Dynamics 365 Customer Service Consultation  &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/field-service-008.png" width={592} height={680} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section4' className='solution-new-banner-four new-bg-00 new-bg-001'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-5 align-self-end'>
              <div className='product-side-002-im'>
                <Image src="/img/group-3602s1.png" width={485} height={627} alt="Card 6" />

              </div>
            </div>
            <div className='col-lg-7'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='solution-new-banner-sub-head new-bg-00-1'>
                    <h2>Agents in Dynamics 365 Customer Service</h2>
                    <p><b>Intelligent Service Execution with Agentic CRM</b></p>
                    <p>Dynamics 365 Customer Service has <a style={{ color: '#dc8dff' }} className='u-i' href="/blog/from-assistants-to-autonomous-the-rise-of-ai-agents-in-dynamics-365/">AI agents</a> that rethink how support teams operate. In place of relying on manual effort and static workflows, firms can use these agents to learn from interactions, guide service reps, and improve service quality in real time. </p>
                  </div>
                </div>
              </div>
              <div className='row g-3'>
                <div className='product-side-002 product-side-0022'>
                  <ul>
                    <li>
                      <h3>Case Management Agent</h3>
                      <p>Manual case management not just eats up a lot of productive time but also slows down resolution and increases workload. Case Management Agent in Dynamics 365 Customer Service streamlines this process through automation. From creation to resolution, cases are handled with greater consistency, reduced handling time, and minimal manual intervention.</p>
                    </li>
                    <li>
                      <h3>Customer Knowledge Management Agent</h3>
                      <p>Outdated or incomplete knowledge often leads to inconsistent responses. The Customer Knowledge Management Agent in D365 Customer Service analyse case data and continuously refine knowledge articles. This ensures that both service representatives and customers always have access to relevant, up-to-date information during interactions.</p>
                    </li>
                    <li>
                      <h3>Customer Intent Agent</h3>
                      <p>Customer requests can be unclear or vary across channels. The Customer Intent Agent in Dynamics 365 Customer Service recognises intent from conversations that happened via chat, voice, and messaging platforms. This enables more accurate responses, better self-service experiences, and improved routing decisions.</p>
                    </li>
                    <li>
                      <h3>Quality Evaluation Agent</h3>
                      <p>The Quality Evaluation Agent helps customer service companies maintain service standards at scale. It monitors interactions from both human-assisted and automated channels to evaluate quality, detect patterns, and highlight areas for improvement. This helps companies maintain consistency as they scale.</p>
                    </li>
                    <li>
                      <h3>Copilot Capabilities in Customer Service</h3>
                      <p>Service representatives are supported by Copilot throughout their workflow. Instead of searching multiple systems, they can interact using natural language to: </p>
                      <div className='drd-f'>
                        <p>•	Access customer and case information instantly </p>
                        <p>•	Receive recommended knowledge articles during conversations </p>
                        <p>•	Generate contextual responses for faster communication</p>
                        <p>•	Troubleshoot issues using AI-guided suggestions</p>
                      </div>
                    </li>
                  </ul>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Customer Service Pricing</h2>
                <p>Select a Microsoft Dynamics 365 Customer Service plan that satisfies your customer service support model, service complexity, and customer engagement needs. Available plans are designed to boost your service delivery.</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card col-ff3'>
                <h3>Dynamics 365 Customer Service Professional</h3>
                <p>Dynamics 365 Customer Service Professional provides core customer service capabilities, including case management, knowledge management, and basic self-service. It is suitable for organisations looking to establish structured and efficient support operations. </p>
                <h4>£38.40<span> per user per month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 Customer Service Enterprise</h3>
                <p>Dynamics 365 Customer Service Enterprise offers advanced customer service capabilities to provide personalised customer experiences, improve service reps' productivity, and optimise operations with AI-driven insights and automation.</p>
                <h4>£80.70<span> per user per month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
            <div className='col-lg-4 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 Customer Service Premium</h3>
                <p>Dynamics 365 Customer Service Premium offers a complete, AI-powered contact centre solution with agentic service capabilities. It supports advanced engagement, automation, and intelligent assistance throughout all service channels.</p>
                <h4>£149.90<span> per user per month, paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                <p className='disclm'>*Price excludes VAT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-banner-six'>
        <div className='container'>
          <div className='row g-5'>
            <div className='col-lg-12 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Dynamics 365 Customer Service Services Do We Offer?</h2>
                  <p>Team up with Dynamics Square to reinforce your customer service operations. We are a trusted Microsoft Solutions Partner in the UK that has helped customer-focused firms adopt agentic service solutions. D365 Customer Service CRM configured by Dynamics Square helps companies improve case resolution, enhance customer engagement, and deliver consistent support throughout all channels.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='row g-4 p-top-5'>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/our-services/dynamics-365-implementation-services/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-010.png" alt="Implementation" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Implementation</h3>
                </div>
                <p className="serv-card-text-666">We deploy a structured Dynamics 365 Customer Service aligned with your workflows, case management processes, and service goals. Our approach focuses on setting up case management, knowledge bases, omnichannel capabilities, and AI-driven features such as intelligent routing. </p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>

              </a>
            </div>

            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/our-services/dynamics-365-upgrade-services/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-011.png" alt="Upgrade and Migration" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Upgrade and Migration</h3>
                </div>
                <p className="serv-card-text-666">Move from legacy support systems to Dynamics 365 Customer Service with clarity and control. We manage data migration, process alignment, and system transition to ensure service representatives can handle cases efficiently from day one.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/our-services/dynamics-365-support-services/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-012.png" alt="Support" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Support</h3>
                </div>
                <p className="serv-card-text-666">Our Dynamics 365 Customer Service support helps you keep your customer service environment up and running. Our team addresses issues, manages updates, and ensures case handling, automation, and customer interactions continue without disruption.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
            </div>
            <div className='col-lg-3 col-md-4 col-sm-6 d-flex'>
              <a href="/our-services/dynamics-365-consultant/" className="serv-card-666 serv-card-666-1">
                <div className='serv-card-666-flex'>
                  <div className="serv-card-icon-666">
                    <Image src="/img/field-service-013.png" alt="Consulting" width="40" height="40" />
                  </div>
                  <h3 className="serv-card-title-666">Consulting</h3>
                </div>
                <p className="serv-card-text-666">We offer the guidance you need to improve your service quality, response times, and customer satisfaction. Our consultants help you utilise AI, automation, and routing capabilities of the CRM to fulfil your service objectives.</p>
                <div className="serv-card-footer-666">
                  <span className="serv-card-btn-666">Get Started</span>
                  <span className="serv-card-arrow-666"><i className="bi bi-arrow-right"></i></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="solution-faq faq solution-faq-r">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got
                  questions about Microsoft Dynamics 365 Field Service?</h2>
                <p>Click through to our FAQ for the best answers!</p>
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
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="btn faq-btn-l btn-get-started" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
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

export default FieldService;
