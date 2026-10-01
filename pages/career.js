
import Link from "next/link"; 
import Head from 'next/head';
import Image from 'next/image';

const Career = () => {
    return (
      <>
        <Head>
        <title>Career | Dynamics Square</title>
        <meta
          name="description"
          content="Our effective leaders knows their company's success depends upon not just a vision or product, but the people who carry out the vision and build the product"
        />
        <link rel="canonical" href="https://www.dynamicssquare.co.uk/career/"/>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/career/" />
        <meta property="og:title" content="Career | Dynamics Square" />
        <meta property="og:description" content="Our effective leaders knows their company's success depends upon not just a vision or product, but the people who carry out the vision and build the product" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/carrer-banner.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/career/" />
        <meta property="twitter:title" content="Career | Dynamics Square" />
        <meta property="twitter:description" content="Our effective leaders knows their company's success depends upon not just a vision or product, but the people who carry out the vision and build the product" />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/carrer-banner.png" />

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
                    { "@type": "ListItem", "position": 2, "name": "Career", "item": "https://www.dynamicssquare.co.uk/career/" }
                  ]
                },
                {
                  "@type": "Organization",
                  "name": "Dynamics Square UK",
                  "url": "https://www.dynamicssquare.co.uk",
                  "email": "info@dynamicssquare.co.uk"
                }
              ]
            })
          }}
        />
        </Head>
        <section className="Solution-banner hero-1 hero about-banner carrer-into">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mobile-1 mobile-2 align-self-center">
                <h1>
                  If you are striving
                  <br />
                  to be the best
                  <br /> <span>we want you!</span>
                </h1>
              </div>
              <div className="col-lg-6 align-self-center">
                <Image src="/img/carrer-banner.png" alt="carrer-banner" width={747} height={473} priority = {true} />
              </div>
            </div>
          </div>
        </section>

        <section className="caerrer-start">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 align-self-center">
                <div className="commen-left-pic">
                  <Image
                    src="/img/carrer-left-pic.png"
                    alt="carrer-left-pic"
                    width={514}
                    height={613}
                  />
                </div>
              </div>

              <div className="col-lg-7 align-self-center">
                <div className="commen-right-content">
                  <h2>What Is Dynamics Square?</h2>
                  <p>
                    Dynamics Square is the UK trustworthy and Microsoft's
                    Authorized Solutions Partner for highly customized business
                    solutions to bring digital transformation in businesses
                    through Microsoft Business Applications.
                    <br />
                    <br />
                    Our effective leaders knows their company’s success depends
                    upon not just a vision or product, but the people who carry
                    out the vision and build the product day in and day out –
                    their employees
                    <br />
                    <br />
                    That’s why Dynamics Square is a successful company who is
                    carrying foster culture that allow their employees to thrive
                    and grow. We’ve rounded up some insights from great minds
                    that drive home the importance of having a happy, empowered,
                    curious and mission-driven team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="caerr-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="comm-left-info">
                  <h3>Your best work starts here.</h3>
                  <p>
                    When people ask what it's like to work at <br />
                    Dynamics Square, you'll usually hear the same few
                    sentiments.
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-6 mov-u">
                    <div className="why-solution-wrapper">
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i className="bi bi-check-lg"></i> There's no <br />
                          inner circle.
                        </h3>
                        <div className="overlay" />
                      </div>
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i className="bi bi-check-lg"></i> Everyone's
                          empowered
                          <br />
                          to work autonomously.
                        </h3>
                        <div className="overlay" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mov-d">
                    <div className="why-solution-wrapper">
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i className="bi bi-check-lg"></i> Diverse
                          perspectives <br />
                          are celebrated.
                        </h3>
                        <div className="overlay" />
                      </div>
                      <div className="why-solution-wrapper-inner why-solution-wrapper-new">
                        <h3>
                          <i className="bi bi-check-lg"></i> Employees are
                          treated like
                          <br />
                          people, not line items.
                        </h3>
                        <div className="overlay" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="callto-new-action">
          <div className="container">
            <header className="section-header">
              <h2>What employees are saying</h2>
              <p>
                Thanks to Employees' feedback and reviews over the years,
                <br /> we've been lucky to be named a great place to work.
              </p>
            </header>
            <div className="section-header section-heade-custom">
              <h3>
                4.5 <Image src="/img/star-red.svg" alt="star-red" width={197} height={36} />
              </h3>
              <p>90% of Employees on Glassdoor Recommend Dynamics Square</p>
            </div>
            <div className="row  justify-content-center">
              <div className="col-lg-9">
                <div className="row nn-od justify-content-center">
                  <div className="col-lg-6">
                    <div className="leftinf">
                      <h4>Browse our open positions.</h4>
                      <Link
                        href="#exampleModal"
                        data-bs-toggle="modal"
                        className="btn btn-lg  bt-cust112"
                      >
                        <span>Apply Now</span>
                      </Link>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="rightinfa text-center">
                      <span>Send us your CV at: </span> <br />
                      <a href="mailto:info@dynamicssquare.co.uk">
                        info@dynamicssquare.co.uk
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  export default Career;
  
