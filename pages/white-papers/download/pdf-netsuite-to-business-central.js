import Head from 'next/head';
const PdfNetSuiteToBusinessCentral = () => {
  return (
    <>
      <Head>
        <title>NetSuite to Business Central White Paper | Dynamics Square</title>
        <meta
          name="description"
          content="Thanks for getting in touch - someone will contact you soon!"
        />
        <meta name="robots" content="noindex, follow" />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/white-papers/download/pdf-netsuite-to-business-central/"
        />
      </Head>

      <section className="Solution-banner hero-1 custom-pd-4">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-lg-7 align-self-center text-center custom0004">
              <h1 style={{fontSize:'30px'}}>Leaving NetSuite: A Business Central Renewal and Migration Playbook</h1>
              <p>Get Your Copy Now!</p>
              <div className="text-center">
                <a
                  href="/pdf/NetSuite-to-Business-Central-Migration-Whitepaper.pdf"
                  className="btn-get-started scrollto"
                  download
                >
                  <span>
                    Download <i className="bi bi-file-earmark-pdf"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PdfNetSuiteToBusinessCentral;
