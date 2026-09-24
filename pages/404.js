import Head from "next/head";
import Link from 'next/link';
const Error = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | Dynamics Square</title>
        <meta
          name="description"
          content="The page you were looking for couldn't be found. Return to the Dynamics Square homepage to continue browsing."
        />
      </Head>
      <section className="Solution-banner">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mobile-1">
              <h1 className='text-center error-404-code'>
                404
              </h1>
              <h2 className="text-center">
              The Page You Were Looking For Couldn't Be Found
              </h2>
              <div className='text-center'>
                <div className="text-center">
                  <Link href="/" className="btn-get-started scrollto">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
