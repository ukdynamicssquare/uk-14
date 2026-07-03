import Link from "next/link";
import Head from "next/head";
import Image from "next/image";


const ScheduleDemoForm = () => {
  return (
    <>
      <Head>
      <title>Schedule A Demo | Dynamics Square</title>
      <meta name="description" content="Scale up your business productivity by implemeting Dynamics 365 Business Apps. Schedule a demo today."/>
      <link rel="canonical" href="https://www.dynamicssquare.co.uk/schedule-a-demo/" />
      </Head>
  

         
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
