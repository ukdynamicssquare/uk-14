import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import faqData from '../../public/data/fabric.json';
import { sanitizeHtml } from '../../helpers/sanitizeHtml';

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
        { "@type": "ListItem", "position": 2, "name": "AI Solutions", "item": "https://www.dynamicssquare.co.uk/ai-solutions/" },
        { "@type": "ListItem", "position": 3, "name": "Microsoft Fabric", "item": "https://www.dynamicssquare.co.uk/ai-solutions/microsoft-fabric/" }
      ]
    },
    {
      "@type": "Service",
      "name": "Microsoft Fabric Partner Services",
      "serviceType": "Microsoft Fabric consulting, implementation, integration, migration and support",
      "provider": {
        "@type": "Organization",
        "name": "Dynamics Square UK",
        "url": "https://www.dynamicssquare.co.uk"
      },
      "areaServed": { "@type": "Country", "name": "United Kingdom" },
      "description": "Dynamics Square UK is a Microsoft Fabric partner offering implementation, analytics, Power BI integration and support to help businesses unlock data insights.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Microsoft Fabric Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Consulting" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Implementation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Integration Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Migration Services" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Data Warehouse Setup" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric Data Engineering" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Microsoft Fabric AI Enablement" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ongoing Support" } }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer.replace(/<[^>]+>/g, "").trim(),
        },
      })),
    },
  ],
};

const Fabric = () => {

  const [visibleCount, setVisibleCount] = useState(5);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <>
      <Head>
        <title>Microsoft Fabric Partner - Dynamics Square UK</title>
        <meta
          name="description"
          content="Dynamics Square UK is a Microsoft Fabric partner offering implementation, analytics, Power BI integration and support to help businesses unlock data insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/ai-solutions/microsoft-fabric/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/ai-solutions/microsoft-fabric/" />
        <meta property="og:title" content="Microsoft Fabric Partner - Dynamics Square UK" />
        <meta property="og:description" content="Dynamics Square UK is a Microsoft Fabric partner offering implementation, analytics, Power BI integration and support to help businesses unlock data insights." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/febric-00.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/ai-solutions/microsoft-fabric/" />
        <meta property="twitter:title" content="Microsoft Fabric Partner - Dynamics Square UK" />
        <meta property="twitter:description" content="Dynamics Square UK is a Microsoft Fabric partner offering implementation, analytics, Power BI integration and support to help businesses unlock data insights." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/febric-00.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
        />
      </Head>
      <div className='solution-new-banner-one'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Microsoft Fabric Partner</h1>
                <span className='large-heading'>Tired of disparate data scattered across systems?</span>
                <p>Time to turn to Microsoft Fabric. Dynamics Square helps UK businesses use Microsoft Fabric to bring their data together, so you can make sense of it, get clearer insights, and make better business decisions.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Talk to a Fabric Specialist &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
              <div className='m-b-image'>
                <Image src="/img/febric-00.png" alt='febric-00' width={1098} height={657} />
              </div>
            </div>

          </div>
        </div>
        <div className="solution-new-banner-one-img imm-mins">
          <Image src="/img/febric-00.png" alt="New Solution" width={1920} height={993} className="flot-1" />
        </div>

      </div>
      <section className="partner-trust-strip">
        <div className="container">
          <div className="row align-items-center gy-4">
            <div className="col-lg-9">
              <div className="partner-trust-strip__stats">
                <div className="partner-trust-strip__label">
                  <span>Serving the UK, USA &amp; Canada Businesses</span>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>500+</h3>
                  <p>Innovative Implementations</p>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>150+</h3>
                  <p>Certified Professionals</p>
                </div>
                <div className="partner-trust-strip__item">
                  <h3>14+</h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center text-lg-end">
              <Image
                src="/img/microsoft-partner-footer.png"
                alt="Microsoft Solutions Partner for Business Applications, with a Specialist designation in Small and Midsize Business Management"
                width={220}
                height={202}
                className="partner-trust-strip__badge"
              />
            </div>
          </div>
        </div>
      </section>
      <section id='section2' className="solution-new-banner-fove">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>What Is Microsoft Fabric?</h2>
                </div>
                <p>
                  Microsoft Fabric is a cloud-based data analytics platform
                  that handles and manage the complete data journey in one
                  place. It includes different processes like data ingestion,
                  transformation, real-time stream processing, analytics, and
                  reporting, all within a single software-as-a-service
                  environment.
                </p>

                <p>
                  Speaking of the tools and technologies Microsoft Fabric
                  brings to the table, they include data engineering, data
                  factory, data science, real-time intelligence, data
                  warehouse, and databases. The idea behind Microsoft Fabric
                  is to address the challenge of modern data fragmentation.
                  This will enable teams to use the same data without moving
                  or duplicating it.
                </p>

                <p>
                  At the centre of Fabric sits OneLake, a single logical data
                  lake for the whole organisation. Every workload stores and
                  reads data through OneLake, which means a data engineer, a
                  data scientist, and a business analyst can all work from
                  one governed copy of the data. Built-in AI capabilities,
                  including Copilot, assist with data preparation, query
                  authoring, and analysis throughout the platform.
                </p>

                <p>
                  For a UK business already running a <a href="/products/microsoft-dynamics-365/" className='u-i'>Dynamics 365 app</a> or
                  Business Central, Fabric matters because it gives finance,
                  operations, and leadership teams one governed environment
                  for reporting and analytics, built on the same Microsoft
                  ecosystem the ERP already lives in.
                </p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book a Fabric Consultation &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>
            <div className='col-lg-6'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/febric-01.png" width={630} height={588} alt="New Solution" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='solution-new-banner-two'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head'>
                <h2>Microsoft Fabric Capabilities and Components</h2>
                <p>Fabric is made up of role-specific workloads that connect through a common platform layer. Here is what each one delivers.</p>
              </div>
            </div>
          </div>
          <div className='row'>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-img001'>
                <Image src="/img/febric-04.png" width={569} height={590} alt="Card 6" />
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002'>
                <ul>

                  <li>
                    <h3>Power BI</h3>
                    <p>
                      Business teams use <a href="/products/microsoft-power-bi/" className='u-i'>Power BI</a> to turn raw Fabric data into dashboards
                      and reports that non-technical stakeholders can read at a glance,
                      pulling directly from every other Fabric workload without a separate
                      export step.
                    </p>
                  </li>

                  <li>
                    <h3>Data Factory</h3>
                    <p>
                      Data Factory handles the intake side of Fabric, pulling data in from
                      over 200 connector types, whether the source sits on-premises or in
                      the cloud, and shaping it into a usable format before anything
                      downstream touches it.
                    </p>
                  </li>

                  <li>
                    <h3>Data Engineering</h3>
                    <p>
                      Built on Apache Spark, this workload gives engineering teams
                      notebooks and scheduling tools to construct and run the pipelines
                      that clean and transform data at volume, ready for whatever workload
                      uses it next.
                    </p>
                  </li>

                  <li>
                    <h3>Data Science</h3>
                    <p>
                      Data teams build and deploy machine learning models within Fabric
                      itself, tracking experiments through a direct link to Azure Machine
                      Learning without leaving the platform.
                    </p>
                  </li>

                  <li>
                    <h3>Data Warehouse</h3>
                    <p>
                      A SQL-based warehouse that keeps compute and storage on separate
                      scaling paths, so each can grow on its own schedule, with every table
                      stored in the open Delta Lake format underneath.
                    </p>
                  </li>

                  <li>
                    <h3>Real-Time Intelligence</h3>
                    <p>
                      This workload watches data the moment it is generated, sensor
                      readings, log entries, site activity, and turns that stream into live
                      visualisations and automated responses as events happen.
                    </p>
                  </li>

                  <li>
                    <h3>Databases</h3>
                    <p>
                      A transactional database layer built for developers, with a
                      mirroring feature that pulls data continuously from sources such as
                      Azure SQL Database, Azure Cosmos DB, and Snowflake directly into
                      OneLake.
                    </p>
                  </li>

                  <li>
                    <h3>Fabric IQ (preview)</h3>
                    <p>
                      The newest addition to Fabric, built to give an organisation one
                      consistent set of business definitions and metrics across every model
                      and system it touches, with automation that understands that shared
                      context.
                    </p>
                  </li>

                  <li>
                    <h3>OneLake</h3>
                    <p>
                      Every workload in Fabric reads and writes through OneLake, one shared
                      data lake for the whole tenant, so a file created in one workload is
                      instantly available in the next without a copy or export.
                    </p>
                  </li>

                  <li>
                    <h3>Copilot in Fabric</h3>
                    <p>
                      An AI layer built into notebooks, pipelines, and reports, drafting
                      queries, suggesting pipeline logic, and summarising results so
                      analysts spend less time on the mechanical parts of the job.
                    </p>
                  </li>

                </ul>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='section6' className='solution-new-a'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='solution-new-banner-sub-head text-center'>
                <h2>Microsoft Fabric for Dynamics 365 and Business Central</h2>
                <p><a href="/products/dynamics-365-business-central/">Business Central</a> is part of the Dynamics 365 suite, alongside apps such as Finance, Supply Chain Management, Sales, and Customer Service. Whichever of these a business runs, Fabric connects to the underlying data through OneLake, giving finance and operations teams a single governed layer for reporting that sits above the transactional system.</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='solution-new-six-img' style={{textAlign:'center'}}>
                <Image src="/img/febric-03.png" width={1137} height={396} alt="New Solution" />
              </div>
            </div>
          </div>
          <div className='row m-t-4 g-5'>
            <div className='col-lg-6'>
              <div className="feature-list">
                <p><b>For Business Central users, this means:</b></p>
                <div className="feature-item">
                  <div className="feature-icon">
                    <Image
                      src="/img/febric-05.png"
                      alt="febric"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="feature-text">Consolidated reporting across multiple Business Central companies or entities</div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Image
                      src="/img/febric-06.png"
                      alt="febric"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="feature-text">Historical and real-time data combined in one warehouse, without manual exports</div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <Image
                      src="/img/febric-07.png"
                      alt="febric"
                      width={40}
                      height={40}
                    />
                  </div>

                  <div className="feature-text">AI-assisted analysis through Copilot in Fabric, built on data your finance team already trusts</div>
                </div>

              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='as-p'>
                <p>For businesses running other Dynamics 365 apps, such as <a href="/products/microsoft-dynamics-365-finance/" className='u-i'>Finance</a>, Supply Chain Management, or <a href="/products/microsoft-dynamics-365-sales/" className='u-i'>Sales</a>, Fabric brings that data into the same governed layer, so it can sit alongside Business Central data, other business systems, and third-party sources in one place.</p>
                <p>A foundation like this scales with the business. New Dynamics 365 modules, acquisitions, or additional systems plug into the same data layer, so reporting stays consolidated as the business grows.</p>
                <p>Dynamics Square designs this connection around how your business already uses Dynamics 365, so the Fabric implementation supports your existing workflows and builds on them directly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fabric-services-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="solution-new-banner-sub-head text-center">

                <h2>Our Microsoft Fabric Services</h2>

                <p>
                  We work as a full <strong>Microsoft Fabric implementation partner</strong>,
                  covering every stage from first assessment to ongoing support.
                </p>

              </div>
            </div>
          </div>


          <div className="row g-3 g-lg-3">

            {/* Card 1 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                  <Image
                    src="/img/febric-08.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Consulting</h3>

                <p>
                  We assess your current data estate, systems, and reporting gaps,
                  then map out where Fabric fits and what value it delivers first.
                  This stage sets the scope before any implementation work begins.
                </p>

              </div>
            </div>


            {/* Card 2 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                 <Image
                    src="/img/febric-09.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Implementation</h3>

                <p>
                  We configure workspaces, set up OneLake, build out the workloads
                  your business needs (Data Factory, Data Warehouse, Data Engineering,
                  Power BI, or Real-Time Intelligence), and test the environment
                  against your actual reporting requirements.
                </p>

              </div>
            </div>


            {/* Card 3 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                 <Image
                    src="/img/febric-10.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Integration Services</h3>

                <p>
                  We connect Fabric to Dynamics 365, Business Central, and other
                  business systems, so data flows into OneLake without manual
                  exports or duplicate entry.
                </p>

              </div>
            </div>


            {/* Card 4 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                  <Image
                    src="/img/febric-11.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Migration Services</h3>

                <p>
                  For businesses moving off legacy BI tools, on-premises warehouses,
                  or fragmented reporting setups, we plan and execute the migration
                  into Fabric with minimal disruption to daily reporting.
                </p>

              </div>
            </div>


            {/* Card 5 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                  <Image
                    src="/img/febric-12.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Data Warehouse Setup</h3>

                <p>
                  We design and build your Fabric Data Warehouse, structured for your
                  reporting needs and scaled to your data volumes, with compute and
                  storage configured independently.
                </p>

              </div>
            </div>


            {/* Card 6 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                  <Image
                    src="/img/febric-13.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric Data Engineering</h3>

                <p>
                  We build the pipelines, notebooks, and transformation jobs that
                  turn raw data from your business systems into clean, usable
                  datasets ready for analysis.
                </p>

              </div>
            </div>


            {/* Card 7 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                 <Image
                    src="/img/febric-14.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Microsoft Fabric AI Enablement</h3>

                <p>
                  We configure <a href="/products/dynamics-365-copilot/">Copilot</a> in Fabric and connect Fabric to your AI and
                  machine learning workflows, so your team can query data in plain
                  language and get faster answers.
                </p>

              </div>
            </div>


            {/* Card 8 */}
            <div className="col-lg-3 col-md-6">
              <div className="fabric-service-card">

                <div className="fabric-service-icon">
                 <Image
                    src="/img/febric-15.png"
                    alt="fabric-consulting"
                    width={40}
                    height={40}
                  />
                </div>

                <h3>Ongoing Support</h3>

                <p>
                  Once live, we monitor performance, manage governance, and support
                  your team as data volumes and reporting needs grow.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>
      <section id='section2' className="solution-new-banner-fove">
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Why Dynamics Square as Your Microsoft Fabric Partner</h2>
                </div>
                <p>Fear no data chaos. Dynamics Square exists to turn scattered systems into one clear, usable source of truth, and Microsoft Fabric is the platform we use to make that happen.</p>
                <p>We are a Microsoft Solutions Partner with over a decade of hands-on Microsoft ecosystem experience, spanning Dynamics 365, Business Central, Power Platform, Azure, and now Fabric. That combination matters. A Fabric implementation built by a team that also understands your ERP and CRM will always fit your business better than one built in isolation.</p>
                <p>We treat Fabric as an extension of the systems you already run. Every implementation starts with your existing systems, your reporting pain points, and your team's day-to-day workflows, and builds outward from there. The result is a data platform your team opens and uses every day.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Book a Fabric Consultation  &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>

            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/febric-16.png" width={632} height={455} alt="New Solution" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="pharma-timeline-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="pharma-timeline-head">
                <h2>How We Implement Microsoft Fabric</h2>
              </div>
            </div>
          </div>
          <div className="pharma-timeline">
            <div className="pharma-timeline__line"></div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Discovery</h4>
                <p>We review your current data sources, systems, and reporting gaps, and identify where Fabric delivers value fastest.</p>
              </div>
              <div className="pharma-timeline__dot">1</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">2</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Solution Design</h4>
                <p>We map out the Fabric workloads, OneLake structure, and integration points your business needs, based on the discovery findings.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Build and Configure</h4>
                <p>We set up workspaces, build data pipelines, configure the warehouse, and connect Fabric to Dynamics 365, Business Central, or other source systems.</p>
              </div>
              <div className="pharma-timeline__dot">3</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">4</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Testing and Validation</h4>
                <p>We test data accuracy, pipeline performance, and reporting outputs against your actual business scenarios before go-live.</p>
              </div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__card pharma-timeline__card--left">
                <h4>Go-Live and Training</h4>
                <p>We launch the environment and train your team on the workloads they will use day to day.</p>
              </div>
              <div className="pharma-timeline__dot">5</div>
              <div className="pharma-timeline__spacer"></div>
            </div>

            <div className="pharma-timeline__row">
              <div className="pharma-timeline__spacer"></div>
              <div className="pharma-timeline__dot">6</div>
              <div className="pharma-timeline__card pharma-timeline__card--right">
                <h4>Ongoing Support</h4>
                <p>We monitor the environment, manage governance, and adjust the setup as your data needs grow.</p>
              </div>
            </div>
          </div>
          <Link
            href="#exampleModal"
            data-bs-toggle="modal"
            className="btn-get-started scrollto pharma-timeline__cta">
            <span>Get Your Free Implement Assessment &nbsp;<i className="bi bi-arrow-right"></i></span>
          </Link>
        </div>
      </section>
      <section id='section2' className="solution-new-banner-fove">
        <div className='container'>
          <div className='row g-5'>
             <div className='col-lg-6 align-self-center'>
              <div className='product-side-001'>
                <div className="flot-8">
                  <Image src="/img/febric-17.png" width={580} height={456} alt="febric-17" />
                </div>
              </div>
            </div>

            <div className='col-lg-6 align-self-center'>
              <div className='product-side-002-content'>
                <div className='solution-new-banner-sub-head' style={{ paddingBottom: '0px' }}>
                  <h2>Microsoft Fabric Pricing</h2>
                </div>
                <p>Microsoft Fabric uses a capacity-based licensing model through Azure. You choose a Fabric capacity size, and that single capacity powers every workload your team uses. Microsoft also offers a free trial, giving each user their own fixed Fabric capacity to test the platform first.</p>
                <p>Because capacity needs depend on data volume, number of users, and which workloads your business runs, a general price figure would not reflect what your business would actually pay. Dynamics Square reviews your requirements and works out the right capacity size and licensing approach for your specific setup, so you pay for what your business needs and nothing extra.</p>
                <div className="text-lg-start">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get a Fabric Pricing Estimate for Your Business &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
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
                  questions about Microsoft Fabri?</h2>
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
                        dangerouslySetInnerHTML={{ __html: sanitizeHtml(faq.answer) }}
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

export default Fabric;
