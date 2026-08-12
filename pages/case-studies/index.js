import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import caseStudies from "../../public/data/case-studies.json";

const tabs = [
  "All",
  "Upgrade",
  "Implementation",
  "Support",
];

const CategoryList = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredData =
    activeTab === "All"
      ? caseStudies
      : caseStudies.filter(
          (item) => item.category === activeTab
        );

  return (
    <>
      <Head>
        <title>
          Microsoft Dynamics 365 Case Studies | Dynamics Square
        </title>

        <meta
          name="description"
          content="Discover our client's case studies and see how we care about them from start to finish. We have worked with them to provide long lasting Dynamics 365 Support."
        />

        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/case-studies/"
        />
      </Head>

      {/* HERO SECTION */}
      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1 className="text-center">Case Studies</h1>

              <p className="text-center">
                Check out some of our case studies to see how
                Dynamics 365 has made a difference for our
                clients.
              </p>
            </div>

            {/* <div className="col-lg-6 align-self-center">
              <Image
                src="/img/case-icons-list.png"
                alt="case-icons-list"
                width={600}
                height={500}
                className="img-fluid"
                priority
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section>
        <div className="container">
          <div className="row">
            {/* SIDEBAR */}
            <div className="col-lg-3">
              <div className="nav flex-column nav-pills me-3 side-bar-common-tabs m-stickks">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    className={`nav-link ${
                      activeTab === tab ? "active" : ""
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* CONTENT */}
            <div className="col-lg-9">
              <div className="row">
                {filteredData?.map((item) => (
                  <div
                    className="col-lg-6 mb-4"
                    key={item.id}
                  >
                    <div className="commen-box-2 commen-box-9 h-100">
                      <div className="icons icons-0102">
                        <Link href={item.slug}>
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={563}
                          height={350}
                          className="img-fluid"
                        />
                        </Link>
                      </div>

                      <div className="commen-boc-2-info">
                        <p>{item.title}</p>
                      </div>

                      <div className="btn-003">
                        <Link
                          href={item.slug}
                          className="btn btn md btn-danger"
                        >
                          Read Case Study
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}

                {filteredData.length === 0 && (
                  <div className="col-12">
                    <div className="text-center py-5">
                      <h4>No Case Studies Found</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryList;