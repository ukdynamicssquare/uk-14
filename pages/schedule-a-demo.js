import Link from "next/link";
import Head from "next/head";
import Image from "next/image";


const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
        <title>Schedule a Dynamics 365 Demo | Free Consultation | Dynamics Square UK</title>
        <meta name="description" content="Schedule a free Dynamics 365 demo with Dynamics Square UK. See Business Central, Sales, Customer Service, Finance and Supply Chain apps in action and get expert advice on licensing and implementation." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/schedule-a-demo/" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Schedule a Dynamics 365 Demo | Dynamics Square UK" />
        <meta property="og:description" content="Book a free, no-obligation Dynamics 365 demo with our UK experts and see which apps fit your business." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/schedule-a-demo/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/sec-bac-demo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Schedule a Dynamics 365 Demo | Dynamics Square UK" />
        <meta name="twitter:description" content="Book a free, no-obligation Dynamics 365 demo with our UK experts." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/sec-bac-demo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.dynamicssquare.co.uk/schedule-a-demo/#webpage",
                  "url": "https://www.dynamicssquare.co.uk/schedule-a-demo/",
                  "name": "Schedule a Dynamics 365 Demo",
                  "description": "Schedule a free Dynamics 365 demo with Dynamics Square UK and get expert advice on licensing and implementation.",
                  "inLanguage": "en-GB",
                  "isPartOf": { "@type": "WebSite", "name": "Dynamics Square UK", "url": "https://www.dynamicssquare.co.uk/" }
                },
                {
                  "@type": "BreadcrumbList",
                  "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.dynamicssquare.co.uk/" },
                    { "@type": "ListItem", "position": 2, "name": "Schedule a Demo", "item": "https://www.dynamicssquare.co.uk/schedule-a-demo/" }
                  ]
                }
              ]
            })
          }}
        />
      </Head>
  

         
      <section className="sp-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 text-center">
              <h1>Schedule a Dynamics 365 Demo</h1>
              <p>
                Book a free, no-obligation demo with our Dynamics 365 experts. We will walk you through the
                Dynamics 365 Business Central, Sales, Customer Service, Finance and Supply Chain apps
                that fit your business, and answer your questions on features, licensing and implementation.
              </p>
              <ul style={{listStyle:'none',padding:0}}>
                <li>Live walkthrough tailored to your industry and processes</li>
                <li>Guidance on the right Dynamics 365 apps and licences</li>
                <li>Clear next steps, timelines and pricing for the UK</li>
              </ul>
              <p>Pick a time that suits you below.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="sp-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <h2>What You Will See in Your Dynamics 365 Demo</h2>
              <ul>
                <li><Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link> for finance, sales, inventory and operations</li>
                <li><Link href="/products/microsoft-dynamics-365-sales/">Dynamics 365 Sales</Link> and <Link href="/products/microsoft-dynamics-365-customer-service/">Customer Service</Link> for CRM</li>
                <li><Link href="/products/microsoft-dynamics-365-finance-operations/">Finance and Operations</Link> and <Link href="/products/dynamics-365-supply-chain-management/">Supply Chain Management</Link> for larger enterprises</li>
              </ul>
              <h2>How It Works</h2>
              <ol>
                <li>Choose a convenient date and time in the calendar below.</li>
                <li>Tell us about your business and what you want to achieve.</li>
                <li>Meet our Dynamics 365 consultants for a tailored walkthrough and Q&amp;A.</li>
              </ol>
              <p>
                Prefer to talk first? <Link href="/contact-us/">Contact our team</Link> or explore our{" "}
                <Link href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation services</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="custom-sed-demp-wraperaa">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="pix-fixed">
                  <img src="/img/sec-bac-demo.png" alt="Schedule A Demo" className="ds-hh" />
                   <img src="/img/mobile-pic.png" alt="Schedule A Demo" className="ms-hh" />
              </div>
            </div>
            <div className="col-lg-12">
           
              <div className="sedule-forma">
                {/* <Form /> */}
                <iframe src='https://outlook.office.com/book/Bookademo1@dynamicssquare.com' className="mycc-width"></iframe>
              </div>
              
              
            </div>
          </div>
        </div>
      </section>
    </>
    
  );
};
ScheduleDemoForm.noFooter = true;
export default ScheduleDemoForm;
