import React from 'react';
import Link from 'next/link';
import PageSeo from "../../components/PageSeo";

const Index = () => {
    return (
        <>
            <PageSeo
              type="CollectionPage"
              title="Free Dynamics 365 Tools | Dynamics Square UK"
              description="Free tools from Dynamics Square UK to help you plan your Dynamics 365 investment, including our Dynamics 365 licensing and pricing calculator."
            />
            <section className="sp-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <h1>Free Dynamics 365 Tools</h1>
                            <p>
                                Planning a Microsoft Dynamics 365 project? Use our free tools to estimate costs and
                                make better-informed decisions before you speak to a consultant.
                            </p>
                            <h2>Dynamics 365 Licensing Calculator (UK)</h2>
                            <p>
                                Select the Dynamics 365 apps and users you need and get an itemised estimate of your
                                monthly licence cost, based on Microsoft UK pricing.
                            </p>
                            <p>
                                <Link href="/tools/microsoft-dynamics-licensing-calculator/">
                                    Try the Dynamics 365 licensing calculator
                                </Link>
                            </p>
                            <p>
                                Need help choosing the right licences? <Link href="/contact-us/">Talk to our Dynamics 365 team</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Index;
