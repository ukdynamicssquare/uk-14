import { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// import useGsapScrollCards from '../../../hooks/useGsapScrollCards';
import faqData from '../../public/data/project_faq.json';
import useCardScrollEffect from "../../components/useCardScrollEffect";
import BcPopPdf from '../../components/BCPdfPopup';
import NavBar from '../../components/NavBar';
import BlogFinanaceCard from '../../components/BlogFinanaceCard';



// const StackedCards = dynamic(() => import("../../components/StackedCards"), {
//     ssr: false,
//   });

const ProjectOpeartion = () => {
  /*gsap card scroll*/
  // const containerRef = useRef(null);
  // useGsapScrollCards(containerRef);
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

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": "https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/#service",
        "name": "Dynamics 365 Project Operations",
        "serviceType": "Dynamics 365 ERP Implementation and Consulting",
        "provider": {
          "@type": "Organization",
          "name": "Dynamics Square UK",
          "url": "https://www.dynamicssquare.co.uk"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United Kingdom"
        },
        "description": "Dynamics Square UK provides implementation, consulting, migration, and support services for Microsoft Dynamics 365 Project Operations to help organisations manage project delivery, resources, and financials in one unified system.",
        "serviceOutput": {
          "@id": "#software"
        }
      },
      {
        "@type": "SoftwareApplication",
        "@id": "#software",
        "name": "Microsoft Dynamics 365 Project Operations",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Cloud",
        "creator": {
          "@type": "Organization",
          "name": "Microsoft"
        },
        "description": "Microsoft Dynamics 365 Project Operations is an AI-powered project-to-profit solution that connects project management, resource scheduling, finance, billing, and resource planning in one system.",
        "offers": {
          "@type": "Offer",
          "price": "103.80",
          "priceCurrency": "GBP",
          "availability": "https://schema.org/InStock"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dynamicssquare.co.uk/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": "https://www.dynamicssquare.co.uk/products/"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Dynamics 365 Project Operations",
            "item": "https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Does Microsoft Project Operations integrate with Business Central?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Microsoft Dynamics 365 Project Operations can integrate with Dynamics 365 Business Central and other Microsoft applications to extend financial and operational capabilities."
            }
          },
          {
            "@type": "Question",
            "name": "How do I install Project Operations in Dynamics 365?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dynamics 365 Project Operations can be installed in either an existing or a new Power Platform environment using the Power Platform Admin Center and a valid licence."
            }
          },
          {
            "@type": "Question",
            "name": "What are the core modules in Dynamics 365 Project Operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Core modules include contract management, sales management, project management, resource management, finance management, team collaboration, and time and expense tracking."
            }
          },
          {
            "@type": "Question",
            "name": "What is the price of Dynamics 365 Project Operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The standard cloud licensing price for Dynamics 365 Project Operations is approximately £103.80 per user per month when billed annually."
            }
          },
          {
            "@type": "Question",
            "name": "Can Dynamics 365 Project Operations help businesses boost sales and revenue?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The solution improves transparency, provides analytics insights, and helps organisations optimise resources and productivity to increase revenue."
            }
          },
          {
            "@type": "Question",
            "name": "How can organisations start using Dynamics 365 Project Operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Organisations typically begin by working with a Microsoft partner for implementation who configures the system, migrates data, and provides training."
            }
          },
          {
            "@type": "Question",
            "name": "What are the core functions of Dynamics 365 Project Operations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Key functions include project planning, project sales, invoicing, revenue management, financial tracking, resource allocation, and project accounting."
            }
          },
          {
            "@type": "Question",
            "name": "How does Dynamics 365 Project Operations work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "It connects project planning, resource scheduling, time tracking, financial management, and billing within one system to maximise project profitability."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Head>
   
        <title>Dynamics 365 Project Operations Partner UK | Dynamics Square</title>
        <meta
          name="description"
          content="Struggling with project visibility and billing? Deploy Dynamics 365 Project Operations with Dynamics Square UK. Improve resource utilisation and profitability. "
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Dynamics 365 Project Operations Partner UK | Dynamics Square " />
        <meta property="og:description" content="Struggling with project visibility and billing? Deploy Dynamics 365 Project Operations with Dynamics Square UK. Improve resource utilisation and profitability." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/products/dynamics-365-project-operations/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/project-operation-banner.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Dynamics 365 Project Operations Partner UK | Dynamics Square" />
        <meta name="twitter:description" content="Struggling with project visibility and billing? Deploy Dynamics 365 Project Operations with Dynamics Square UK. Improve resource utilisation and profitability." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/project-operation-banner.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Dynamics 365 Project Operations</h1>
                <span className='large-heading'>Connect your project-centric business with a single AI-powered application</span>
                <p>Dynamics 365 Project Operations brings together sales, project management, resources, and finance into one cohesive system.
                  It is a project-to-profit solution driven by AI that comes with Copilot and ERP agents that help teams finish projects on time, stick to budgets, and be more productive every day by using data to make decisions and automating tasks.
                </p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Try for Free &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className="solution-new-banner-one-imgs">
                <Image src="/img/project-operatiom-01.png" alt="project-operatiom-01" width={916} height={584} className="flot-1" priority />
              </div>
            </div>
          </div>
        </div>



        <div className='container cust-pp'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='flecx'>
                <div className='left-fl'>
                  <p>Dynamics Square helps project-based companies plan projects, manage resources, and deliver profitable outcomes with the AI-powered Dynamics 365 Project Operations solution.</p>
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
                <h2>What is Dynamics 365 Project Operations?</h2>
                <p>Microsoft Dynamics 365 Project Operations, is a project-to-profit system made for businesses that provide services through projects. It brings together project accounting, resource scheduling, time and cost tracking, billing, and deal management all in one application.</p>
                <p>Dynamics 365 for project operations supports the complete quote-to-cash journey. Sales teams can build accurate estimates using standardised templates and adaptable billing models such as fixed-price or time and materials. Project managers track budget-to-actual consumption and use built-in insights to adjust delivery. Resource managers align the right people to the right projects using skill profiles and universal resource scheduling.</p>
                <p>With Copilot and ERP agents such as the Time Entry Agent and Expense Agent, routine tasks are automated to improve accuracy and reduce manual effort. <a href="/products/microsoft-dynamics-365-finance/">Integration with Dynamics 365 Finance</a> and support for IFRS strengthen financial control across the lifecycle.</p>
                <p><b>In nutshell:</b></p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Connect sales, delivery, and finance in one system</li>
                  <li><i className="bi bi-check2"></i> Take care of jobs from creating an estimate to recognising revenue</li>
                  <li><i className="bi bi-check2"></i> Use skill-based scheduling to get the most out of your resources</li>
                  <li><i className="bi bi-check2"></i> Improve visibility with dashboards and forecasting tools</li>
                </ul>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Project Operations Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>


                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='dsa-minee'><Image src="/img/project-operatiom-02.png" alt="project-operatiom-02" width={630} height={588} /></div>
            </div>
          </div>

        </div>
      </div>
      <NavBar />
      <section id='section2' className="solution-new-banner-two">
        <div className='container'>
          {/* <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Finance Implementation: <br/>Why Your Business Needs It</h2>
              </div>
            </div>
          </div> */}
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8" style={{textAlign:'left'}}>
                  <Image src="/img/project-operatiom-03.png" width={531} height={459} alt="project-operatiom-03" />
                </div>
               
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Business Challenges Solved by Dynamics 365 Project Operations</h2>
                </div>
                <p>Dynamics 365 Project Operations capabilities address common challenges faced by project-centric organisations across industries. Some of the most frequent challenges include:</p>
                <ul className='banner-sub-head-list'>
                  <li><i className="bi bi-check2"></i> Disconnected systems between sales, project delivery, and finance</li>
                  <li><i className="bi bi-check2"></i> Inaccurate estimates due to lack of standardised templates</li>
                  <li><i className="bi bi-check2"></i> Poor visibility into budget-to-actual consumption</li>
                  <li><i className="bi bi-check2"></i> Resource conflicts caused by limited scheduling transparency</li>
                  <li><i className="bi bi-check2"></i> Manual timesheet and expense entry leading to delays</li>
                  <li><i className="bi bi-check2"></i> Billing complexities across fixed-price and time and materials contracts</li>
                  <li><i className="bi bi-check2"></i> Revenue recognition challenges and compliance requirements such as IFRS</li>
                  <li><i className="bi bi-check2"></i> Limited forecasting insight into project performance trends</li>
                  <li><i className="bi bi-check2"></i> Heavy administrative workload reducing productivity of project teams</li>
                </ul>
                <p>Dynamics 365 Project Operations is an AI-powered project-to-profit solution that connects deal management, resource scheduling, project accounting, and billing in one unified application. With Copilot and ERP agents such as the Time Entry Agent and Expense Agent, it reduces manual effort while improving accuracy and visibility across the entire project lifecycle.</p>
                <p>Whether managing a growing services team or operating at global scale, Dynamics 365 Project Operations supports structured delivery with clarity, financial control, and operational efficiency.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book Your Free Dynamics 365 Project Operations Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
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
                <h2>Inside Dynamics 365 Project Operations: What Powers Your Project Teams</h2>
                <p>Dynamics 365 Project Operations features help organisations run project delivery with clarity and financial control. Replace disconnected tools with one connected system, reduce manual effort through AI-powered agents, and improve project outcomes with real-time visibility. Here is how this project-to-profit solution transforms project execution for modern organisations:</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Structured Deal and Project Planning</h3>
                      <p>Inaccurate estimates and unclear scope create downstream risk across delivery. With Dynamics 365 Project Operations, teams can:</p>
                      <ul>
                        <li>Create detailed estimates using standardised templates</li>
                        <li>Model customised costing and pricing based on geography and exchange rates</li>
                        <li>Set up fixed-price, time and materials, or retainer-type contracts</li>
                        <li>Develop schedules and quotes that align sales with delivery</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/project-operatiom-04.png" width={525} height={401} alt="Structured Deal and Project Planning" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Intelligent Resource Scheduling and Utilisation</h3>
                      <p>Poor resource alignment reduces productivity and margins. Dynamics 365 Project Operations helps teams to:</p>
                      <ul>
                        <li>Match people to projects using skill profiles and proficiency models</li>
                        <li>Distribute workloads using universal resource scheduling</li>
                        <li>Gain visibility into resource availability across projects</li>
                        <li>Optimise utilisation to support timely project delivery</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/project-operatiom-05.png" width={510} height={401} alt="Intelligent Pipeline and Deal Execution" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Budget Control and Project Accounting</h3>
                      <p>Limited financial visibility weakens decision-making. With built-in insights, organisations can:</p>
                      <ul>
                        <li>Track budget-to-actual consumption as projects progress</li>
                        <li>Forecast trends and generate budget snapshots</li>
                        <li>Manage project cost and revenue profiles</li>
                        <li>Support compliance with accounting standards including IFRS</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/project-operatiom-06.png" width={510} height={401} alt="SBudget Control and Project Accounting" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Automated Time, Expense, and Approvals</h3>
                      <p>Manual time sheets and expense reporting delay billing cycles. Dynamics 365 Project Operations includes:</p>
                      <ul>
                        <li>Time Entry Agent to draft and capture project hours</li>
<li>Expense Agent to turn receipts into draft reports</li>
<li>Activity Approvals Agent to prioritise entries needing review</li>
<li>Improved billing accuracy and faster revenue recognition</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/project-operatiom-07.png" width={510} height={401} alt="Automated Time, Expense, and Approvals" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Connected Project Operations with Secure Integration</h3>
                      <p>Disconnected systems create operational gaps and reconciliation challenges. Dynamics 365 Project Operations integrates with:</p>
                      <ul>
                        <li>Dynamics 365 Finance or external ERP systems via open APIs</li>
<li>Microsoft Teams for collaboration within the flow of work</li>
<li>Power BI to visualise KPIs such as utilisation, forecasting, and budgeting</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/project-operatiom-08.png" width={571} height={369} alt="Connected Project Operations with Secure Integration" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta'>
        <div className='asd asd4'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10'>
                <div className='solution-new-cta-001'>
                  <span className='solution-new-cta-t'>Run Your Projects with AI-Powered Project-to-Profit Control</span>
                  <h3>Connect sales, delivery, resources, and finance in one unified application to improve visibility.</h3>
                  <div>
                    <Link href="/contact-us/" className="btn-get-started scrollto">
                      <span>Book Your Free Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section id='section4' className='solution-new-banner-four'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Project Operations Benefits: The Advantage Project-Driven Organisations Need</h2>
                <p>Successful project-centric organisations share a common discipline. They manage delivery, resources, and finance within systems that provide visibility, control, and timely insight. Dynamics 365 Project Operations delivers structure and accuracy through an AI-powered project-to-profit solution built for modern service teams. Here are the notable benefits of Dynamics 365 Project Operations:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='product-side-002'>
                <ul>
                  <li>
                    <h3>Deliver Projects on Time and Within Budget</h3>
                    <p>Projects lose margin when costs and timelines drift without control. Dynamics 365 Project Operations enables teams to track budget-to-actual consumption, forecast trends, and adjust delivery using built-in insights to protect profitability.</p>
                  </li>
                  <li>
                    <h3>Improve Estimate Accuracy and Billing Confidence</h3>
                    <p>Inaccurate estimates create downstream financial pressure. With standardised templates, customised costing and pricing, and adaptable billing models such as fixed-price or time and materials, organisations can strengthen deal quality and revenue recognition.</p>
                  </li>
                  <li>
                    <h3>Optimise Resource Utilisation Across Projects</h3>
                    <p>Unbalanced workloads reduce efficiency and morale. Universal resource scheduling and skill-based matching help align the right people to the right projects while maximising utilisation.</p>
                  </li>
                  <li>
                    <h3>Reduce Administrative Burden with AI Agents</h3>
                    <p>Manual time sheets and expense reports slow billing cycles. Time Entry Agent, Expense Agent, and Activity Approvals Agent reduce manual effort, improve accuracy, and support timely approvals.</p>
                  </li>
                  <li>
                    <h3>Strengthen Financial Control and Compliance</h3>
                    <p>Project accounting complexity increases risk. Integration with Dynamics 365 Finance, support for IFRS, and structured cost and revenue profiles help maintain financial discipline across the lifecycle.</p>
                  </li>
                </ul>
                <div className='product-side-002-ext'>
                  <p>Organisations using Dynamics 365 Project Operations gain stronger financial visibility, improved resource control, and greater confidence across every stage of project delivery.</p>
                  <div className="text-lg-start">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Claim Your Free Dynamics 365 Project Operations Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/project-operatiom-09.png" width={592} height={680} alt="Card 6" />

              </div>
            </div>
          </div>
        </div>
        <div className='n-014' >
          <img src="/img/n-014.png" width={604} height={958} alt="Card 6" />
        </div>
      </section>

      <section id='section6' className='solution-new-six' style={{ backgroundColor: '#fff' }}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Agents in Dynamics 365 Project Operations</h2>
                <p>AI-Powered Project Execution Built into Your ERP</p>
                <p>Dynamics 365 Project Operations introduces ERP agents that support project delivery, financial accuracy, and operational efficiency across the project lifecycle. These agents act as digital colleagues, taking on high-volume, rules-based activities to reduce manual effort and improve consistency.</p>
                <p>Built for project-centric organisations, agents streamline processes such as time tracking, expense reporting, approvals, and financial reconciliation while giving teams greater visibility and control. Some of the notable prebuilt ERP agents are:</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-center' style={{ marginBottom: '30px' }}>
                <Image src='/img/project-operatiom-10.png' alt='project-operatiom-10' width={2564} height={790} />
              </div>
            </div>
          </div>

          <div className='row g-3 m-t-2'>
            <div className='col-lg-6'>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{ fontSize: "18px" }}>Time Entry Agent</h3>
                  <p>Prompts employees to log project hours with smart reminders and context. It improves billing accuracy, payroll processing, and visibility into resource utilisation.</p>
                </div>
              </div>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{ fontSize: "18px" }}>Expense Agent</h3>
                  <p style={{ marginBottom: '15px' }}>Extracts details from receipts and emails to draft compliant expense reports. It reduces manual errors, accelerates reimbursement, and strengthens cost tracking.</p>
                </div>
              </div>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{ fontSize: "18px" }}>Activity Approvals Agent</h3>
                  <p style={{ marginBottom: '15px' }}>Flags only entries that require review, helping managers prioritise approvals, reduce delays, and enforce policy controls.</p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{ fontSize: "18px" }}>Account Reconciliation Agent</h3>
                  <p>Matches ledger entries, flags discrepancies, and recommends resolution steps to support timely and compliant financial statements.</p>
                </div>
              </div>
              <div className='solution-new-bg'>
                <div className='solution-new-six-card'>
                  <h3 style={{ fontSize: "18px" }}>Supplier Communications Agent</h3>
                  <p style={{ marginBottom: '15px' }}>Manages supplier interactions, follows up on order confirmations, and reduces disruptions across source-to-pay processes.</p>
                </div>
              </div>
            </div>
            


            {/* <div className='col-lg-12'>
              <div className='text-center'>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Book a Demo!  &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className='solution-new-cta slution-new-cta-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-cta-001'>
                <h3>Move from Disconnected Project Tools to Intelligent Project Execution</h3>
                <p>Use Copilot and ERP agents such as Time Entry Agent and Expense Agent to reduce manual effort, strengthen financial accuracy, and support consistent project delivery from estimate to revenue recognition.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/mask-group-aaa.png" alt="n-015" />
      </section>
      <section id='section8' className='solution-new-pricing'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Dynamics 365 Project Operations Pricing</h2>
                <p>Choose a suitable Dynamics 365 Project Operations license to connect your project-centric business with visibility, collaboration, and financial control. The solution supports deal management, resource scheduling, time and expense processes, billing, and revenue recognition within one unified application.</p>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-lg-6 d-flex'>
              <div className='solution-new-pricing-card'>
                <h3>Dynamics 365 <span>Project Operations</span>
                </h3>
                <p>Dynamics 365 Project Operations is an AI-powered project-to-profit solution designed for organisations that manage services through projects. It includes customised costing and pricing, adaptable billing models such as fixed-price and time and materials, universal resource scheduling, project accounting, IFRS support, and built-in insights for forecasting and budgeting. </p>
                <p>AI agents and Copilot for Dynamics 365 Project Operations such as the Time Entry Agent and Expense Agent help reduce manual effort and improve productivity across teams.</p>
                <h4>£103.80 <span>user/month<br />paid yearly</span></h4>
                <a href="#exampleModal" data-bs-toggle="modal" className="btn-dd-t btn-get-started" >Contact us</a>
                {/* <p className='disclm'>*Price excludes VAT</p> */}
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-7 d-flex'>
              <div className='solution-new-card-001-p'>
                <p>Need help understanding how Dynamics 365 Project Operations fits your delivery and financial model?</p>
                < a href="/products/dynamics-365-business-central/pricing-licensing" className="btn-get-started scrollto">
                  <span>Speak with Our Experts &nbsp;<i className="bi bi-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="busnes-upgrade-serve-one" style={{ paddingTop: '0px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="solution-new-banner-sub-head">
                <h2>What Dynamics 365 Project Operations Services Do We Offer?</h2>
                <p>Work with Dynamics Square as your Dynamics 365 Project Operations partner to strengthen your project delivery and financial control. 
As a leading Microsoft Solutions Partner in the UK, we help organisations adopt an AI-powered project-to-profit solution that connects sales, resources, delivery, and finance within one unified system.
</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/settings_b.png" alt="settings_b" width={48} height={48} />
                <h3>Implementation</h3>
                <p>Deliver a structured Dynamics 365 Project Operations implementation aligned with your project lifecycle, billing models, and financial processes. Our approach focuses on clean configuration, resource scheduling setup, project accounting structure, and practical adoption across project managers, finance teams, and leadership.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/outbound.png" alt="outbound" width={48} height={48} />
                <h3>Upgrade and Migration</h3>
                <p>Move from disconnected project management tools or legacy ERP systems to Dynamics 365 Project Operations with clarity and control. We manage data migration, process alignment, billing configuration, and integration with Dynamics 365 Finance or external ERP systems to ensure a smooth transition.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <Image src="/img/person_pin.png" alt="person_pin" width={48} height={48} />
                <h3>Support</h3>
                <p>Keep your project operations system stable and efficient with ongoing support. Our team resolves issues, manages updates, and ensures time entry, expense management, approvals, and billing processes continue without disruption.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>

            <div className="col-lg-3 d-flex">
              <div className="upgrade-box-one upgrade-box-one-c d-flex-fil">
                <img className="image-backx" src="/img/free-cons.png" alt="free-cons" />
                <Image src="/img/forum.png" alt="forum" width={48} height={48} />
                <h3>Consulting</h3>
                <p>Gain expert guidance on improving resource utilisation, forecasting accuracy, revenue recognition, and compliance with standards such as IFRS. Our consultants help you use Copilot and ERP agents such as the Time Entry Agent and Expense Agent to reduce manual effort and improve visibility across projects.</p>
                <a href="#exampleModal" data-bs-toggle="modal">Get Started <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='section9' className='p-t-1-60'>
        <div className='container'>
          <div className="col-lg-9">
            <div className="solution-new-banner-sub-head">
              <h2>Get Started with Microsoft Dynamics 365 Project Operations </h2>
              <p>As a trusted Dynamics 365 applications partner, Dynamics Square helps you make Dynamics 365 Project Operations a practical and reliable system for managing projects from estimate to revenue recognition with clarity and financial discipline.</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>

              <div className='bc-new-tabs-li'>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-03-tab" data-bs-toggle="pill" data-bs-target="#pills-home-03" type="button" role="tab" aria-controls="pills-home-03" aria-selected="false">Podcasts</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-05-tab" data-bs-toggle="pill" data-bs-target="#pills-home-05" type="button" role="tab" aria-controls="pills-home-05" aria-selected="false">Videos</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-home-07-tab" data-bs-toggle="pill" data-bs-target="#pills-home-07" type="button" role="tab" aria-controls="pills-home-07" aria-selected="false">Blogs</button>
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-lg-12'>
              <div className='bc-new-tabs-li-body'>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home-03" role="tabpanel" aria-labelledby="pills-home-03-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/44hqw-S27D0?si=mCEpK1p1hVAXszlj" target='_blank'>
                            <img src="/img/bc-8-20.png" width={273} height={192} alt="bc-8-20" />
                            <h3>Is Your Business Ready for an ERP System?</h3>
                            <p>Explore key signs, benefits, and steps to ERP readiness with Dynamics Square experts in this episode.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST" target='_blank'>
                            <img src="/img/bc-8-22.png" width={273} height={192} alt="bc-8-22" />
                            <h3>Signs Your Business Is Ready for an ERP System</h3>
                            <p>Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-home-05" role="tabpanel" aria-labelledby="pills-home-05-tab">
                    <div className='row'>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=xU_kJ4_7hzY" target='_blank'>
                            <img src="/img/project-vid-01.jpg" width={273} height={192} alt="bc-8-20" />
                            <h3>Get started with the Time and Expense Agent for Dynamics 365 Project Operations</h3>
                            <p>The Time and Expense Agent in Dynamics 365 Project Operations autonomously manages time entry...</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=UNk4-k1_g4U" target='_blank'>
                            <img src="/img/project-vid-02.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>Deep dive: Finance, human resources and project operations with Dynamics 365</h3>
                            <p>Watch a demo of the new 2023 release wave 1 features and highlights—featuring capabilities like business...</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className='col-lg-4 col-md-4 col-sm-6 d-flex'>
                        <div className='card0-01 card0-02'>
                          <a href="https://www.youtube.com/watch?v=N8uT5Zla24E" target='_blank'>
                            <img src="/img/project-vid-03.jpg" width={273} height={192} alt="bc-8-21" />
                            <h3>BDO unifies tax and accounting services with Dynamics 365 Project Operations and Copilot</h3>
                            <p>BDO USA has ignited a revolution in project management with its groundbreaking BDO Tax UserVerse on Microsoft Dynamics 365...</p>
                            <div className='ct--a'>
                              <span>Watch now</span>
                            </div>
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-home-07" role="tabpanel" aria-labelledby="pills-home-07-tab">
                    <div className='row'>
                      <BlogFinanaceCard categorySlug="erp" />

                    </div>
                  </div>

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
                <h2>Have you got
                  questions about Dynamics 365 Project Operations?</h2>
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
      <BcPopPdf pdfType={pdfType} />
    </>
  );
};

export default ProjectOpeartion;
