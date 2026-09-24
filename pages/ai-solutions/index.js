import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Index = () => {
    return (
        <>
            <Head>
                <title>
                    Microsoft Dynamics 365 AI Business Solutions | AI Consulting
                </title>

                <link
                    rel="canonical"
                    href="https://www.dynamicssquare.co.uk/ai-solutions/"
                />

                <meta
                    name="description"
                    content="Discover Microsoft Dynamics 365 AI business solutions designed to automate processes, improve productivity, analyse business data, and support smarter decision-making."
                />

                <meta
                    name="keywords"
                    content="Microsoft Dynamics 365 AI business solutions, Dynamics 365 AI solutions, Dynamics 365 Copilot, Microsoft AI solutions, AI business solutions, Dynamics 365 AI consulting, AI automation"
                />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.dynamicssquare.co.uk/ai-solutions/" />
                <meta property="og:title" content="Microsoft Dynamics 365 AI Business Solutions | AI Consulting" />
                <meta property="og:description" content="Discover Microsoft Dynamics 365 AI business solutions designed to automate processes, improve productivity, analyse business data, and support smarter decision-making." />
                <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/AI-Banner.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/ai-solutions/" />
                <meta property="twitter:title" content="Microsoft Dynamics 365 AI Business Solutions | AI Consulting" />
                <meta property="twitter:description" content="Discover Microsoft Dynamics 365 AI business solutions designed to automate processes, improve productivity, analyse business data, and support smarter decision-making." />
                <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/AI-Banner.png" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "BreadcrumbList",
                                    "itemListElement": [
                                        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
                                        { "@type": "ListItem", "position": 2, "name": "AI Solutions", "item": "https://www.dynamicssquare.co.uk/ai-solutions/" }
                                    ]
                                },
                                {
                                    "@type": "ItemList",
                                    "name": "Microsoft Dynamics 365 AI Business Solutions",
                                    "itemListElement": [
                                        {
                                            "@type": "ListItem",
                                            "position": 1,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 AI Consulting",
                                                "description": "Identify practical AI opportunities across your organisation and create a clear strategy for using Microsoft Dynamics 365 AI capabilities.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 2,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 AI Automation",
                                                "description": "Automate repetitive business processes with AI and Microsoft Power Platform capabilities.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 3,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 AI Analytics",
                                                "description": "Turn Dynamics 365 and business data into useful insights with AI-powered analytics.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 4,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 Copilot Solutions",
                                                "description": "Use Microsoft Dynamics 365 Copilot capabilities to give employees AI assistance within their everyday business applications.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 5,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 AI Integration",
                                                "description": "Connect Microsoft Dynamics 365 with AI services, business applications, and data sources to create connected workflows.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        },
                                        {
                                            "@type": "ListItem",
                                            "position": 6,
                                            "item": {
                                                "@type": "Service",
                                                "name": "Dynamics 365 AI Support & Optimisation",
                                                "description": "Get ongoing support and optimisation for your Dynamics 365 AI environment.",
                                                "provider": { "@type": "Organization", "name": "Dynamics Square UK" }
                                            }
                                        }
                                    ]
                                }
                            ]
                        })
                    }}
                />
            </Head>

            <main>

                {/* Hero Section */}
                <section className="ai-solutions-banner">
                    <div className="container">
                        <div className="row align-items-center">

                            <div className="col-lg-7">
                                <div className="solution-new-banner-sub-head">

                                    <span className="ai-eyebrow">
                                        <i className="bi bi-stars"></i>
                                        &nbsp;Microsoft Dynamics 365 AI Solutions
                                    </span>

                                    <h1>
                                        Microsoft Dynamics 365 AI Business Solutions
                                    </h1>

                                    <p>
                                        Transform your business with Microsoft Dynamics 365 AI
                                        business solutions designed to automate processes,
                                        improve productivity, unlock valuable business insights,
                                        and support smarter decision-making.
                                    </p>

                                    <div className="mt-4">
                                        <Link
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn-get-started"
                                        >
                                            <span>
                                                Explore AI Solutions
                                                &nbsp;
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="ai-solutions-banner-img">
                                    <Image
                                        src="/img/AI-Banner.png"
                                        alt="Microsoft Dynamics 365 AI Business Solutions"
                                        width={790}
                                        height={470}
                                        priority
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Introduction */}
                <section className="ai-solutions-intro py-5">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-9">

                                <div className="solution-new-banner-sub-head text-center">

                                    <h2>
                                        AI-Powered Business Solutions with Microsoft Dynamics 365
                                    </h2>

                                    <p>
                                        Microsoft Dynamics 365 AI business solutions help
                                        organisations bring intelligence into everyday business
                                        operations. By combining Dynamics 365 applications with
                                        AI capabilities, businesses can automate repetitive work,
                                        understand customer and operational data, improve
                                        productivity, and make more informed decisions.
                                    </p>

                                    <p>
                                        From Dynamics 365 Copilot and AI-powered automation to
                                        intelligent analytics and connected business workflows,
                                        our solutions are designed to work with your existing
                                        Microsoft business applications and processes.
                                    </p>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>


                {/* AI Services */}
                <section className="ai-services-section py-5">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-9">

                                <div className="solution-new-banner-sub-head text-center">

                                    <span className="ai-eyebrow ai-eyebrow-center">
                                        Our AI Solutions
                                    </span>

                                    <h2>
                                        Microsoft Dynamics 365 AI Business Solutions
                                    </h2>

                                    <p>
                                        Explore AI-powered solutions that can help your business
                                        automate workflows, improve productivity, analyse data,
                                        and get more value from Microsoft Dynamics 365.
                                    </p>

                                </div>

                            </div>
                        </div>


                        <div className="row g-4 mt-3">

                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/icons-azure_machine-learning.svg"
                                            alt="Microsoft AI consulting"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 AI Consulting
                                    </h3>

                                    <p>
                                        Identify practical AI opportunities across your
                                        organisation and create a clear strategy for using
                                        Microsoft Dynamics 365 AI capabilities to support your
                                        business goals, processes, and technology environment.
                                    </p>

                                </div>
                            </div>


                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/automated_workflows.png"
                                            alt="Dynamics 365 AI automation"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 AI Automation
                                    </h3>

                                    <p>
                                        Automate repetitive business processes with AI and
                                        Microsoft Power Platform capabilities. Connect Dynamics
                                        365 workflows and business data to reduce manual work
                                        and improve operational efficiency.
                                    </p>

                                </div>
                            </div>


                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/reporting-and-analytics.png"
                                            alt="Dynamics 365 AI analytics"
                                            width={36}
                                            height={36}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 AI Analytics
                                    </h3>

                                    <p>
                                        Turn Dynamics 365 and business data into useful insights
                                        with AI-powered analytics. Identify trends, understand
                                        business performance, and support data-driven
                                        decision-making across your organisation.
                                    </p>

                                </div>
                            </div>


                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                                            alt="Dynamics 365 Copilot solutions"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 Copilot Solutions
                                    </h3>

                                    <p>
                                        Use Microsoft Dynamics 365 Copilot capabilities to give
                                        employees AI assistance within their everyday business
                                        applications. Help teams access information, generate
                                        content, and complete routine tasks more efficiently.
                                    </p>

                                </div>
                            </div>


                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/seamless-integration.png"
                                            alt="Dynamics 365 AI integration"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 AI Integration
                                    </h3>

                                    <p>
                                        Connect Microsoft Dynamics 365 with AI services,
                                        business applications, and data sources to create
                                        connected workflows. Integrate AI into existing
                                        processes without disrupting your wider technology
                                        environment.
                                    </p>

                                </div>
                            </div>


                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <Image
                                            src="/img/icons-power-automate_AI-Support.svg"
                                            alt="Dynamics 365 AI support and optimisation"
                                            width={48}
                                            height={48}
                                        />
                                    </div>

                                    <h3>
                                        Dynamics 365 AI Support & Optimisation
                                    </h3>

                                    <p>
                                        Get ongoing support and optimisation for your Dynamics
                                        365 AI environment. Continuously improve AI-enabled
                                        workflows, integrations, automation, and business
                                        processes as your requirements evolve.
                                    </p>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                {/* Why AI */}
                <section className="ai-business-section py-5">
                    <div className="container">

                        <div className="row align-items-center">

                            <div className="col-lg-6">

                                <div className="ai-business-content">

                                    <span className="ai-eyebrow">
                                        Why Dynamics 365 AI
                                    </span>

                                    <h2>
                                        How Microsoft Dynamics 365 AI Can Support Your Business
                                    </h2>

                                    <p>
                                        Microsoft Dynamics 365 AI solutions can bring
                                        intelligence and automation into different areas of
                                        your business. By combining Dynamics 365 applications,
                                        AI, automation, and business data, organisations can
                                        improve everyday processes and give teams faster access
                                        to relevant information.
                                    </p>

                                    <ul>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Automate repetitive Dynamics 365 business processes
                                        </li>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Improve employee productivity with AI assistance
                                        </li>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Analyse Dynamics 365 and business data more efficiently
                                        </li>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Support faster and more informed decision-making
                                        </li>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Reduce manual tasks and improve workflow efficiency
                                        </li>

                                        <li>
                                            <span className="ai-li-icon">
                                                <i className="bi bi-check-lg"></i>
                                            </span>
                                            Connect AI with Microsoft Dynamics 365 and Power Platform
                                        </li>

                                    </ul>

                                </div>

                            </div>


                            <div className="col-lg-6">

                                <div className="ai-business-image">
                                    <Image
                                        src="/img/bc-copilote-side-pic.png"
                                        alt="Microsoft Dynamics 365 AI business solutions"
                                        width={630}
                                        height={440}
                                    />
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* CTA */}
                <section className="ai-solutions-cta py-5">
                    <div className="container">

                        <div className="row justify-content-center">
                            <div className="col-lg-9">

                                <div className="text-center">

                                    <span className="ai-eyebrow ai-eyebrow-center">
                                        Get Started
                                    </span>

                                    <h2>
                                        Explore Microsoft Dynamics 365 AI Business Solutions
                                    </h2>

                                    <p>
                                        Discover how Microsoft Dynamics 365 AI, Copilot,
                                        automation, analytics, and intelligent integrations
                                        can support your business processes and help your teams
                                        work more efficiently.
                                    </p>

                                    <div className="mt-4">
                                        <Link
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn-get-started"
                                        >
                                            <span>
                                                Get Your Free Consultation!
                                                &nbsp;
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    );
};

export default Index;