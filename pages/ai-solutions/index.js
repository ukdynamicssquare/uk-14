import Head from 'next/head';
import React from 'react';

const Index = () => {
    return (
        <>
            <Head>
                <title>AI Solutions for Business | AI Consulting Services</title>
                  <link
        rel="canonical"
        href="https://www.dynamicssquare.co.uk/ai-solutions/"
    />   
                <meta
                    name="description"
                    content="Explore AI solutions and consulting services designed to help businesses automate processes, improve decision-making, and unlock new opportunities."
                />

                <meta
                    name="keywords"
                    content="AI solutions, AI consulting, artificial intelligence services, business AI solutions"
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
                                        &nbsp;AI Solutions
                                    </span>

                                    <h1>
                                        AI Solutions for Smarter Business
                                    </h1>

                                    <p>
                                        Transform the way your business works with
                                        practical AI solutions designed to automate
                                        processes, uncover insights, and support
                                        better decision-making.
                                    </p>

                                    <div className="mt-4">
                                        <a
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn-get-started"
                                        >
                                            <span>
                                                Get Started
                                                &nbsp;
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="ai-solutions-banner-img">
                                    <img
                                        src="/img/AI-Banner.png"
                                        alt="AI Solutions"
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
                                        AI Solutions Built Around Your Business
                                    </h2>

                                    <p>
                                        AI can help businesses simplify repetitive
                                        work, make sense of large volumes of data,
                                        and give teams faster access to useful
                                        information. Our AI solutions focus on
                                        practical business applications that can
                                        integrate with your existing systems and
                                        processes.
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
                                        Our Solutions
                                    </span>

                                    <h2>
                                        Our AI Solutions
                                    </h2>

                                    <p>
                                        From intelligent automation to AI-powered
                                        analytics, explore solutions that can
                                        support different areas of your business.
                                    </p>

                                </div>

                            </div>
                        </div>


                        <div className="row g-4 mt-3">

                            {/* Card 1 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/icons-azure_machine-learning.svg"
                                            alt=""
                                        />
                                    </div>

                                    <h3>AI Consulting</h3>

                                    <p>
                                        Identify practical opportunities for AI
                                        across your business and develop a clear
                                        strategy based on your existing systems,
                                        processes, and objectives.
                                    </p>

                                </div>
                            </div>


                            {/* Card 2 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/automated_workflows.png"
                                            alt=""
                                        />
                                    </div>

                                    <h3>AI Automation</h3>

                                    <p>
                                        Reduce repetitive manual tasks by using
                                        intelligent automation to streamline
                                        workflows and help teams spend more time
                                        on higher-value activities.
                                    </p>

                                </div>
                            </div>


                            {/* Card 3 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/reporting-and-analytics.png"
                                            alt=""
                                        />
                                    </div>

                                    <h3>AI-Powered Analytics</h3>

                                    <p>
                                        Turn business data into useful insights
                                        with AI-assisted analysis, helping teams
                                        identify patterns and make informed
                                        decisions.
                                    </p>

                                </div>
                            </div>


                            {/* Card 4 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/icons-power-apps_Enhancing-Capabilities.svg"
                                            alt=""
                                        />
                                    </div>

                                    <h3>Copilot Solutions</h3>

                                    <p>
                                        Give employees AI assistance within their
                                        existing business environment to help
                                        find information, generate content, and
                                        complete everyday tasks.
                                    </p>

                                </div>
                            </div>


                            {/* Card 5 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/seamless-integration.png"
                                            alt=""
                                        />
                                    </div>

                                    <h3>AI Integration</h3>

                                    <p>
                                        Connect AI capabilities with your existing
                                        applications and business data to create
                                        connected and intelligent workflows.
                                    </p>

                                </div>
                            </div>


                            {/* Card 6 */}
                            <div className="col-lg-4 col-md-6">
                                <div className="ai-service-card">

                                    <div className="ai-service-icon">
                                        <img
                                            src="/img/icons-power-automate_AI-Support.svg"
                                            alt=""
                                        />
                                    </div>

                                    <h3>AI Support & Optimisation</h3>

                                    <p>
                                        Continue improving your AI environment
                                        with ongoing support, optimisation, and
                                        guidance as your business requirements
                                        evolve.
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
                                        Why AI
                                    </span>

                                    <h2>
                                        How AI Can Support Your Business
                                    </h2>

                                    <p>
                                        AI can be applied across different business
                                        functions to help teams work with data,
                                        automate routine activities, and access
                                        information more efficiently.
                                    </p>

                                    <ul>
                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Automate repetitive business processes
                                        </li>

                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Improve access to business information
                                        </li>

                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Analyse large volumes of business data
                                        </li>

                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Support faster decision-making
                                        </li>

                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Improve employee productivity
                                        </li>

                                        <li>
                                            <span className="ai-li-icon"><i className="bi bi-check-lg"></i></span>
                                            Connect AI capabilities with existing
                                            business applications
                                        </li>
                                    </ul>

                                </div>

                            </div>


                            <div className="col-lg-6">

                                <div className="ai-business-image">
                                    <img
                                        src="/img/bc-copilote-side-pic.png"
                                        alt="AI business solutions"
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
                                        Ready to Explore AI for Your Business?
                                    </h2>

                                    <p>
                                        Discover where AI can fit into your existing
                                        business processes and technology
                                        environment.
                                    </p>

                                    <div className="mt-4">
                                        <a
                                            href="#exampleModal"
                                            data-bs-toggle="modal"
                                            className="btn-get-started"
                                        >
                                            <span>
                                                Claim Your Free Consultation!
                                                &nbsp;
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </a>
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