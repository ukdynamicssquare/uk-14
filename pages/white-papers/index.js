import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import PageSeo from "../../components/PageSeo";
const WhitePaper = () => {
  return (
    <>
      <PageSeo
        type="CollectionPage"
        title="White Paper – Dynamics Square"
        description="Explore Dynamics Square's in-depth white papers on Microsoft Dynamics solutions. Gain insights, optimise processes, and drive business growth with expert guidance."
        image="/img/whit-indexbanner.png"
      />
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>White Paper</h1>
              <p>Explore our white paper to gain insights into how Microsoft business solutions are driving business transformation and helping companies reach new heights.</p>
            </div>
            <div className="col-lg-6 align-self-center">
              <img src="/img/whit-indexbanner.png" alt="white Papper Banner" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div
                className="nav flex-column nav-pills me-3 side-bar-common-tabs"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Latest Paper
                </button>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="tab-content" id="v-pills-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div className="row">
                  <div className="col-lg-6 d-flex">
                      <div className="card card-custom-1 p-3">
                        <a
                          href="/white-papers/microsoft-copilot/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/img/white-p-one.png"
                            alt="White Paper" />
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="/white-papers/microsoft-copilot/">
                            Microsoft Copilot: The Catalyst for Transformation in Your Business
                            </a>
                          </h5>
                          <div className="btn-003 btn-009">
                            <a
                              className="btn btn-sm btn-danger"
                              href="/white-papers/microsoft-copilot/"
                            >
                              Read Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                      <div className="card card-custom-1 p-3">
                        <a
                          href="/white-papers/microsoft-finance/"
                          className="over-ff text-center"
                        >
                          <img
                            className="card-img-top"
                            src="/img/finacne-white-paper-category.png"
                            alt="white paper finance"
                           loading="lazy" decoding="async" />
                        </a>
                        <div className="card-body">
                          <h5 className="card-title">
                            <a href="/white-papers/microsoft-finance/">
                            Dynamics 365 Finance with Copilot WhitePaper
                            </a>
                          </h5>
                          <div className="btn-003 btn-009">
                            <a
                              className="btn btn-sm btn-danger"
                              href="/white-papers/microsoft-finance/"
                            >
                              Read Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                 
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

export default WhitePaper;
