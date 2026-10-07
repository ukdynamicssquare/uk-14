import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";
import useCardScrollEffect from "../../../components/useCardScrollEffect";

const Dynamics365ForDiscreteManufacturing = () => {

  useCardScrollEffect()

  return (
    <>
      <Head>
        <title>Dynamics 365 For Discrete Manufacturing</title>
        <meta
          name="description"
          content="Dynamics 365 for Discrete Manufacturing helps UK manufacturers streamline production, BOMs, inventory, and operations with real-time insights."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/industries/manufacturing/dynamics-365-for-discrete/"
        />
        <meta property="og:locale" content="GB" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content=" Dynamics 365 For Discrete Manufacturing " />
        <meta property="og:description" content="Dynamics 365 for Discrete Manufacturing helps UK manufacturers streamline production, BOMs, inventory, and operations with real-time insights." />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/industries/manufacturing/dynamics-365-for-discrete/" />
        <meta property="og:site_name" content="Dynamics Square UK" />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/discrete-01.png" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dsquare_uk" />
        <meta name="twitter:title" content="Dynamics 365 For Discrete Manufacturing" />
        <meta name="twitter:description" content="Dynamics 365 for Discrete Manufacturing helps UK manufacturers streamline production, BOMs, inventory, and operations with real-time insights." />
        <meta name="twitter:image" content="https://www.dynamicssquare.co.uk/img/discrete-01.png" />
      </Head>
      <div className='solution-new-banner-one solution-new-banner-one-colo'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='solution-new-banner-one-content'>
                <h1>Dynamics 365 for Discrete Manufacturing</h1>
                <span className='large-heading'>Every Component Tracked. Every Product Built with Confidence</span>
                <p>Dynamics 365 for discrete manufacturing helps UK manufacturers who want stable control over production, inventory, machines, supply chain, and finance. Choose a solution that connects planning, scheduling, procurement, sales, and service so that every stage supports clear and confident decisions.</p>
                <div className="text-center">
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Start Your Manufacturing Transformation &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className='m-b-image-nnn'>
                <Image src="/img/discrete-01.png" alt='bc-support-banner' width={1097} height={656} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003s pd-con-69'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one">
                <h2>What is Dynamics 365 for Discrete Manufacturing Companies?</h2>
                <p>Dynamics 365 for discrete manufacturing industry helps manufacturers build products from individual parts, and each stage depends on accurate planning and clear visibility. Microsoft offers two strong ERP systems that help discrete manufacturers run daily operations with discipline and control: </p>
                <br />
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-6 d-flex">
              <div className="col-whole-card">
                <h4>1. Dynamics 365 Business Central</h4>
                <div className="col-bag-car">
                  <Image src="/img/wholesale-pic-02.png" alt="wholesale-pic-02" width={93} height={93} />
                </div>
                <p><a href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</a> ERP for discrete manufacturing suits small to mid-sized manufacturers who want a single ERP for discrete manufacturing that covers production planning, inventory, procurement, sales, finance, and service. </p>
                <p><b>Discrete manufacturers choose D365 Business Central when:</b></p>
                <ul>
                  <li>The company has controlled operations and plans for steady growth.</li>
                  <li>Teams need clear tracking for components, assemblies, and finished goods.</li>
                  <li>The goal is to align sales, planning, purchasing, and production without heavy customisation.</li>
                  <li>The business depends on accurate stock levels and stable scheduling.</li>
                  <li>The team wants a tool that is simple to learn and easy to maintain.</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 d-flex">
              <div className="col-whole-card">
                <h4>2. Dynamics 365 Finance and Supply Chain Management, formerly known as Dynamics 365 Finance and Operations or D365 F&O</h4>
                <div className="col-bag-car">
                  <Image src="/img/wholesale-pic-03.png" alt="wholesale-pic-03" width={386} height={96} />
                </div>
                <p><a href="/products/microsoft-dynamics-365-finance-operations/">Dynamics 365 Finance and Operations</a> for discrete manufacturing is chosen by large manufacturers when they handle multi-plant operations, global sourcing, detailed engineering, and advanced automation. </p>
                <p><b>Manufacturers choose Dynamics 365 Finance and Operations for discrete manufacturing when:</b></p>
                <ul>
                  <li>The business has several legal entities or serves several countries.</li>
                  <li>Financial consolidation and multi-currency control are essential.</li>
                  <li>Production cycles involve several stages with complex routing.</li>
                  <li>The team wants deep insights into machine performance, supplier trends, and cost behaviour.</li>
                  <li>Thousands of components require structured tracking and stable procurement cycles.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-004s'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-6">
              <div className="supprt-header-new-one">
                <h2>Challenges in the Discrete Manufacturing Industry</h2>
                <p>Discrete manufacturers build products that depend on parts, assemblies, and machines working in sync. Even a small gap slows the complete process. Some of the evident challenges of the discrete manufacturing industry in the UK include:</p>
                <br />
              </div>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-02.png" alt="Fragmented Production Information" width={40} height={36} />
                <h3>Fragmented Production Information</h3>
                <p>When production data stays in different systems, teams cannot follow work in progress correctly. This affects planning accuracy.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-03.png" alt="Paper Based Scheduling Pressure" width={40} height={36} />
                <h3>Paper Based Scheduling Pressure</h3>
                <p>When job cards, drawings, and routing details travel through manual steps, planning falls behind. This slows production flow. </p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-04.png" alt="Parts and Materials Visibility Gaps" width={40} height={36} />
                <h3>Parts and Materials Visibility Gaps</h3>
                <p>When stock systems do not connect with planning tools, material shortages appear without warning.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-05.png" alt="Supplier Variability" width={40} height={36} />
                <h3>Supplier Variability</h3>
                <p>When supplier records are scattered, teams cannot track delivery behaviour. This slows raw material availability.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-06.png" alt="Unclear Costing and Margin View" width={40} height={36} />
                <h3>Unclear Costing and Margin View</h3>
                <p>When costing stays disconnected from procurement and production, teams cannot understand true product margins.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-07.png" alt="Engineering Updates Reaching Teams Late" width={40} height={36} />
                <h3>Engineering Updates Reaching Teams Late</h3>
                <p>When design changes do not reach production lines quickly, assembly errors appear.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-08.png" alt="Weak Forecasting Confidence" width={40} height={36} />
                <h3>Weak Forecasting Confidence</h3>
                <p>When demand planning relies on estimates, teams cannot prepare accurate material and production schedules.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-09.png" alt="Quality and Compliance Records Spread Across Files" width={40} height={36} />
                <h3>Quality and Compliance Records Spread Across Files</h3>
                <p>When quality checks depend on manual notes, teams cannot trace issues quickly.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <div className="solution-new-card-001 solution-new-card-009">
                <img src="/img/discrete-10.png" alt="Service Data Sitting Outside Manufacturing Records" width={40} height={36} />
                <h3>Service Data Sitting Outside Manufacturing Records</h3>
                <p>When service history stays in isolated tools, teams cannot plan improvements based on real usage.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section className='solution-new-banner-three pd-con-63'>
        {/* <div className="container" ref={containerRef}> */}
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>How Dynamics 365 for Discrete Manufacturing Resolves These Challenges</h2>
                <p>Manufacturers face delays when systems fail to share data and when daily work depends on manual recording. Dynamics 365 for discrete manufacturing removes this friction by connecting production, procurement, inventory, finance, sales, engineering, and service into a single environment. 
And when decision starts relying on live and consistent data, it builds discipline across the organisation. </p>
                <p><b>Here is how D365 for discrete manufacturing supports a steady production cycle:</b></p>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-12">
              <div className="stached-scroll-card">
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Live View of Production, Components, and Work Orders</h3>
                      <p>With Dynamics 365 production planning, every part, assembly, and work order stays visible in real time. Your teams can track progress, capacity, and bottlenecks with clarity. This helps planners create schedules that match material availability and machine effort.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Accurate work order planning</li>
<li>Clear visibility for planners and supervisors</li> 
<li>Smarter scheduling with real-time alerts </li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-11.png" width={580} height={456} alt="Live View of Production, Components, and Work Orders" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Smooth Production Flow with Automated Steps</h3>
                      <p>An ERP for discrete manufacturing automates steps from sales orders to production orders and purchase requests. Jobs move from one stage to the next without duplicate entries. Be it assemblies, routings, or pick lists, everything stays linked to the correct order.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Faster cycle time</li>
                        <li>Reduced manual effort</li>
                        <li>Reduced manual effort</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-12.png" width={580} height={456} alt="Smooth Production Flow with Automated Steps" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Integrated Financial Insights for Manufacturing Teams</h3>
                      <p><a href="/industries/manufacturing/">Dynamics 365 for manufacturing</a> industry comprises systems that connect operational data with financial figures. This means your teams can see material costs, labour costs, overheads, and variance trends directly from the system. This helps leaders prepare budgets with confidence.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Clear breakdown of material, labour, and overhead costs</li>
                        <li>Real-time variance tracking across BOM and routing</li>
                        <li>Faster month-end closing with accurate manufacturing data</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-13.png" width={580} height={456} alt="Integrated Financial Insights for Manufacturing Teams" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Strong Supplier Evaluation and Material Planning</h3>
                      <p>With Microsoft Dynamics 365 procurement, supplier performance stays recorded against timelines, price stability, and quality behaviour. As a result, material planning teams work with reliable data and prepare purchase cycles earlier.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Real visibility into supplier delivery and reliability</li>
                        <li>More accurate planning using performance data</li>
                        <li>Fewer shortages with proactive purchasing cycles</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-14.png" width={580} height={456} alt="Strong Supplier Evaluation and Material Planning" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Clear Cost and Margin Tracking Across Components</h3>
                      <p>When procurement, production, logistics, and sales share one data source, costing stays accurate. Consequently, your professionals view cost behaviour for each item, assembly, or finished product. This enables margin decisions to follow real-time numbers.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Cleaner cost structures</li>
                        <li>Strong margin confidence</li>
                        <li>Practical pricing decisions</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-15.png" width={580} height={456} alt="Clear Cost and Margin Tracking Across Components" />
                    </div>
                  </div>
                </div>

                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Connected Sales, Production, and Service Cycles</h3>
                      <p>Manufacturers use <a href="/products/microsoft-dynamics-crm/">CRM</a> for discrete manufacturing to track enquiries, quotes, orders, service visits, and warranty requests in one place. Each update reaches planning, production, and stock teams quickly, which helps them prepare accurate schedules that reflect real demand and customer expectations. This helps manufacturers link actual customer demand to material planning, reducing overproduction and stockouts.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Better customer response time</li>
                        <li>Clear coordination between sales and production</li>
                        <li>Stronger service delivery</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-16.png" width={580} height={456} alt="Connected Sales, Production, and Service Cycles" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Consistent Financial View Across Plants and Teams</h3>
                      <p>Finance teams use Dynamics 365 for discrete manufacturing to see cash flow, expenses, production costs, and sales performance in one dashboard. This helps leaders guide planning cycles with clarity and steady decision support across every site.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Quick financial clarity</li>
                        <li>Balanced cash flow</li>
                        <li>Simple planning</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-17.png" width={580} height={456} alt="Consistent Financial View Across Plants and Teams" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Reliable Forecasting with AI Assistance</h3>
                      <p>AI driven planning studies sales patterns, seasonal behaviour, stock movement, and production history to prepare steady forecasts. Teams plan material, labour, and machine capacity with confidence, which reduces last minute adjustments and helps maintain a smooth production flow.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Balanced component stock</li>
                        <li>Steady material flow</li>
                        <li>Better workload distribution</li>

                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-18.png" width={580} height={456} alt="Reliable Forecasting with AI Assistance" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Structured Quality Checks and Full Traceability</h3>
                      <p>With an <a href="/products/microsoft-dynamics-erp/">ERP</a> for discrete manufacturing, every quality check links directly to the correct component, assembly, and production stage. Batch numbers and serial numbers create full traceability, which helps teams track issues quickly and maintain steady compliance across the entire process.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Full traceability using serials and batches</li>
                        <li>Faster root-cause analysis across components</li>
                        <li>Faster root-cause analysis across components</li>


                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-19.png" width={580} height={456} alt="Structured Quality Checks and Full Traceability" />
                    </div>
                  </div>
                </div>
                <div className='mycard'>
                  <div className='mycard__inner'>
                    <div className='mycard__inner-left'>
                      <h3>Unified Product Lifecycle and Customer View</h3>
                      <p>From product design through delivery and after sales service, every interaction stays in one connected system. This means your teams plan upgrades, handle warranty cases, respond to service needs, and maintain strong customer relationships with clear insight into product performance across its complete lifecycle.</p>
                      <p><b>Benefits:</b></p>
                      <ul>
                        <li>Higher customer confidence</li>
                        <li>Strong repeat business</li>
                        <li>Clear insight into product behaviour</li>
                      </ul>
                    </div>
                    <div className='mycard__inner-right'>
                      <Image src="/img/discrete-20.png" width={580} height={456} alt="Unified Product Lifecycle and Customer View" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003-023'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className="whole-image">
                <Image src="/img/discrete-21.png" alt="discrete-21" width={383} height={487} />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-3 ">
                <div className="col-lg-12">
                  <div className="supprt-header-new-one">
                    <h2>Why Dynamics 365 is a Strong Fit for Discrete Manufacturing</h2>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Connected Operations</h4>
                    <p>Dynamics 365 keeps production, procurement, stock, engineering, finance, and service working together within one connected system.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Scalable for All Sizes</h4>
                    <p>The system supports small workshops and large engineering units through flexible tools that grow with the business.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Reduced Manual Work</h4>
                    <p>Automation lowers rework and manual entry, which helps teams maintain steady accuracy throughout daily manufacturing tasks.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Cloud Based Access</h4>
                    <p>Cloud based tools keep teams connected, support remote work, and help maintain steady access to important information.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>Helpful AI Insights</h4>
                    <p>AI driven insights guide planning, machine utilisation, and workload balance through clear data that supports confident decisions.</p>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="card-712">
                    <h4>UK-Ready Features</h4>
                    <p>Dynamics 365 supports UK VAT rules, <a href="/blog/making-tax-digital-business-central-and-hmrc-integration/">Making Tax Digital</a> (MTD), landed cost calculations for imports, and practical compliance features required by UK manufacturing teams.</p>
                  </div>
                </div>
                <div className="col-lg-12 align-self-center">
                  <div className="card-700-bot">
                    <Link
                      href="#exampleModal"
                      data-bs-toggle="modal"
                      className="btn-get-started scrollto">
                      <span>Connect now  <i className="bi bi-arrow-right"></i></span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
      <section>
        <div className="container">
          <div className='row'>
            <div className='col-lg-7'>
              <div className='solution-new-banner-sub-head'>
                <h2>Choosing the Best ERP Software for Discrete Manufacturing</h2>
                <p>A simple comparison helps manufacturers choose a system based on scale and complexity.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9">
              <div className="table-responsive tabls-cloud tabls-cloud-pad">
                <table className="table table-bordered table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Criteria</th>
                      <th>Business Central</th>
                      <th>Finance and Operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Company Size</td>
                      <td>Small to mid-sized</td>
                      <td>Large enterprises</td>
                    </tr>
                    <tr>
                      <td>Users</td>
                      <td>10–300</td>
                      <td>300+</td>
                    </tr>
                    <tr>
                      <td>Operations</td>
                      <td>Single or few sites</td>
                      <td>Multi-site and global</td>
                    </tr>
                    <tr>
                      <td>Project Complexity</td>
                      <td>Basic to mid-level</td>
                      <td>Complex and detailed</td>
                    </tr>
                    <tr>
                      <td>Warehouse Needs</td>
                      <td>Moderate</td>
                      <td>Highly automated</td>
                    </tr>
                    <tr>
                      <td>Implementation Time</td>
                      <td>2–6 months</td>
                      <td>6–12 months</td>
                    </tr>
                    <tr>
                      <td>Cost</td>
                      <td>Lower</td>
                      <td>Higher</td>
                    </tr>
                    <tr>
                      <td>Reporting</td>
                      <td>Built-in</td>
                      <td>Deep financial consolidation</td>
                    </tr>
                    <tr>
                      <td>Flexibility</td>
                      <td>High and simple</td>
                      <td>Extensive configuration</td>
                    </tr>
                    <tr>
                      <td>Best For</td>
                      <td>Growing manufacturers</td>
                      <td>Large engineering units</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className='solution-new-cta slution-new-cta-two pd-con-62'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='solution-new-cta-001'>
                <h3>Strengthen Your Manufacturing Cycle with the Right ERP</h3>
                <p>Adopt supply chain ERP for discrete manufacturing to keep your process steady from planning to delivery.</p>
                <div>
                  <Link
                    href="#exampleModal"
                    data-bs-toggle="modal"
                    className="btn-get-started scrollto">
                    <span>Get Started Now &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/n-015.png" alt="n-015" />
      </section>
      <section className='bg-003s pd-con-66'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center order-3">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/wholesale-pic-28.png" alt="wholesale-pic-28" width={401} height={455} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1 order-2"></div>
            <div className="col-lg-6 order-1">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h2>Partnering With Dynamics Square UK</h2>
                <p>Discrete manufacturers in the UK prefer to work with a partner who understands production processes, supply chain operations, and finance.</p>
                <p>A Dynamics 365 partner in the UK like Dynamics Square brings experience in <a href="/our-services/dynamics-365-implementation-services/">Dynamics 365 implementation</a> and ongoing Dynamics 365 support for discrete manufacturing companies.</p>
                <p>Our team guides businesses across scheduling setup, production planning, stock alignment, engineering updates, supplier integration, and financial reporting.</p>
                <p>Whether the goal is automation, cost clarity, or supply chain visibility, our specialists help bring steady improvements from the first phase.</p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Transform Your Manufacturing Business &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-003s pd-con-67'>
        <div className="container my-float-i">
          <div className="row">
            <div className="col-lg-5 align-self-center">
              <div className='img-backs-sid-two text-center'>
                <Image src="/img/wholesale-pic-29.png" alt="wholesale-pic-29" width={400} height={450} className='im-two' />
              </div>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <div className="supprt-header-new-one supprt-header-new-one-ul">
                <h3>Outcomes You Can Expect with Dynamics 365 for Discrete Manufacturing</h3>
                <ul>
                  <li><i className="bi bi-check"></i><span>Over 95% production plan adherence and fewer last-minute schedule changes </span></li>
                  <li><i className="bi bi-check"></i><span>Faster planning to dispatch cycles </span></li>
                  <li><i className="bi bi-check"></i><span>Clear cost and margin insights</span></li>
                  <li><i className="bi bi-check"></i><span>Full supplier and component traceability</span></li>
                  <li><i className="bi bi-check"></i><span>Single dashboard for production and finance</span></li>

                </ul>
                <p>These results reflect UK manufacturers running Dynamics 365 for discrete manufacturing with guidance from Dynamics Square UK.</p>
                <Link
                  href="#exampleModal"
                  data-bs-toggle="modal"
                  className="btn-get-started scrollto">
                  <span>Schedule A Free Consultation Today <i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>




          </div>
        </div>
      </section>
    </>
  );
};

export default Dynamics365ForDiscreteManufacturing;
