import {useState } from 'react';
import LicenceRateCard from "../../components/LicenceRateCard";
import FooterHideNew from "../../components/FooterHide";
import faqData from '../../public/data/microsoft-licensing_faq.json';
import PageSeo from "../../components/PageSeo";


export default function LicenceCalculatorPage() {


    const [visibleCount, setVisibleCount] = useState(5);
  
    const handleLoadMore = () => {
      setVisibleCount((prev) => prev + 3);
    };
  return (
      <>
      <PageSeo
        type="WebApplication"
        title="Dynamics 365 Licensing & Pricing Calculator"
        description="Use our Dynamics 365 pricing calculator to estimate licence costs for your UK business and understand the potential cost of your Microsoft Dynamics 365 solution"
        image="https://www.dynamicssquare.co.uk/img/pricing-cal.png"
        faqs={faqData.slice(0, 5)}
      />
      <LicenceRateCard />

      <section className="solution-faq faq solution-faq-r" style={{padding:'80px 0px 100px'}}>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-9 ">
                    <div className="solution-new-banner-sub-head text-center">
                      <h2>Have you got
                        questions about Dynamics 365 licensing?</h2>
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
                              dangerouslySetInnerHTML={{ __html: faq.answer }}
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

      <FooterHideNew />
      </>


  );
}
