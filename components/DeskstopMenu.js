import React from "react";
import PulseButton from "./PulseButton";

const DeskstopMenu = () => {
  return (
    <>
      <ul>
        <li className="dropdown megamenu megamenu-new">
          <a href="#">
            <span>Solution</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <div className="megamenu-list">
            <div className="left-list d-flex">
              <div className="d-flex">
                <div
                  className="nav flex-column nav-pills me-3"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="vertical"
                >
                  <div
                    className="nav-link active"
                    id="v-pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-home"
                  >
                    <a>
                      <span>Company By Size</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-addon-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-addon"
                    aria-selected="false"
                  >
                    <a>
                      <span>ERP</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-CRM-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-CRM"
                    aria-selected="false"
                  >
                    <a>
                      <span>CRM</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-settingss-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settingss"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Integrations</span>
                    </a>
                  </div>
                  <div
                    className="nav-link"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    aria-selected="false"
                  >
                    <a>
                      <span>Power Platform</span>
                    </a>
                  </div>
                  {/* <div
                    className="nav-link"
                    id="v-pills-messages-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-messages"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Power Platform</span>
                    </a>
                  </div> */}
                  <div
                    className="nav-link"
                    id="v-pills-settings-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-settings"
                    aria-selected="false"
                  >
                    <a href="#">
                      <span>Legacy Dynamics</span>
                    </a>
                  </div>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  <div className="tab-pane fade show active" id="v-pills-home">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/erp-for-startups/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/store.png"
                                  alt="azure"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Startup</span>
                                <p>
                                  Smart ERP solutions to kickstart your growth
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-small-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/storefront.png"
                                  alt="mixed-Reality-icons"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Small Business</span>
                                <p>
                                  Simplifying business for small, ambitious
                                  teams
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-medium-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/group-3535.png"
                                  alt="AI"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Mid Size</span>
                                <p>Powering growth for mid-sized businesses.</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-365-for-large-businesses/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/factory.png"
                                  alt="AI"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Enterprise</span>
                                <p>
                                  Advanced ERP solutions for large, global
                                  enterprises
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane cc-height fade" id="v-pills-addon">
                    <div className="container">
                      <div className="row g-1">
                        {/* <div className='col-lg-12'>
                          <div className='mm-title'>
                            <p>ERP</p>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-businesscentral.svg"
                                  alt="dynamics-365-businesscentral"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Business Central</span>
                                <p>
                                  All-in-one solution for all your business
                                  practices
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-finance/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-finance.svg"
                                  alt="dynamics-365-finance"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Finance</span>
                                <p>Improve your finance practices</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-supply-chain-management/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-supplychainmanagement.svg"
                                  alt="dynamics-365-supplychainmanagement"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Supply Chain</span>
                                <p>
                                  Optimize operations and drive agile Supply
                                  Chain
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-human-resources/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-HRM.svg"
                                  alt="dynamics-365-HRM"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Human Resource</span>
                                <p>Optimize Your Resource Utilization</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-commerce/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-commerce.svg"
                                  alt="dynamics-365-commerce"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Commerce</span>
                                <p>
                                  Unify Your Back-Office, In-Store, And Digital
                                  Experience
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-project-operations/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-project-management.svg"
                                  alt="dynamics-365-project-management"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Project Operations</span>
                                <p>Automate and streamline your projects</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane cc-height fade" id="v-pills-CRM">
                    <div className="container">
                      <div className="row g-1">
                        {/* <div className='col-lg-12'>
                          <div className='mm-title'>
                            <p>CRM-Customer Engagement</p>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-sales/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-sales.svg"
                                  alt="dynamics-365-sales"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sales</span>
                                <p>Drive end-to-end sales practices</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-marketing/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-marketing.svg"
                                  alt="dynamics-365-marketing"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Marketing</span>
                                <p>Maximize ROI with integrated Marketing</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-field-service/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-fieldservice.svg"
                                  alt="dynamics-365-fieldservice"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Field Service</span>
                                <p>
                                  Drive connected and collaborated field service
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>

                        {/* <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-human-resources/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-HRM.svg"
                                  alt="dynamics-365-HRM"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Human Resource</span>
                                <p>
                                  Optimize Your Resource Utilization
                                </p>
                              </div>
                            </a>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-customer-service/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-customer-service.svg"
                                  alt="dynamics-365-customer-service"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Customer Service</span>
                                <p>Drive omnichannel customer experience</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/d365-icon.png"
                                  alt="d365-icon"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics 365 Suite</span>
                                <p>Empower the Business with a suite of Advanced Solutions </p>
                              </div>
                            </a>
                          </div>
                        </div> */}
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-customer-engagement/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-customer-engagement.svg"
                                  alt="dynamics-365-customer-engagement"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Customer Engagement</span>
                                <p>Transform Your Marketing Operations</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-profile">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-bi/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-bi.svg"
                                  alt="power-bi"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power BI</span>
                                <p>
                                  Create powerful visual insights, analytics
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-apps/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-apps.svg"
                                  alt="power-apps"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Apps</span>
                                <p>
                                  Build web & mobile apps with zero or minimal
                                  code
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-automate/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/power-automate.svg"
                                  alt="power-automate"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Automate</span>
                                <p>
                                  Automate your processes to improve workflows
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-power-virtual-agents/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/virtual agent.svg"
                                  alt="virtual agent"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Power Virtual Agents</span>
                                <p>
                                  Create powerful AI Bots to maximize
                                  productivity
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="v-pills-settings">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-nav/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/NAV.png"
                                  alt="NAV"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics NAV</span>
                                <p>A flexible ERP solution for SMBs</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-crm/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/CRM.png"
                                  alt="CRM"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics CRM</span>
                                <p>
                                  Increase Revenue and Customer Satisfaction
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-ax/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/AX.png"
                                  alt="AX"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics AX</span>
                                <p>The Most Complete, Agile And Powerful ERP</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-gp/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/GP.png"
                                  alt="GP"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics GP</span>
                                <p>Accounting software designed for SMEs</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-erp/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/ERP.png"
                                  alt="GP"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics ERP</span>
                                <p>
                                  Streamline Entire Business Management with
                                  Ease
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-finance-operations/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/F&Q.png"
                                  alt="GP"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Dynamics F&O</span>
                                <p>
                                  Accelerate your Finance and Inventory more
                                  Efficiently
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="v-pills-settingss"
                  >
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-azure/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/azure.svg"
                                  alt="azure"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Microsoft Azure</span>
                                <p>
                                  Create secure, future-ready cloud
                                  solutions
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365/mixed-reality/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/mixed-Reality-icons.svg"
                                  alt="mixed-Reality-icons"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Mixed Reality</span>
                                <p>
                                  Technology that modernises your
                                  workforce
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-dynamics-365-ai/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/AI.svg"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Artificial Intelligence</span>
                                <p>
                                  Leverage Microsoft's deep learning
                                  technology
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/microsoft-sustainability-manager/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Sustainability-Manager.png"
                                  alt="AI"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sustainability Manager</span>
                                <p>
                                  Record, report, and reduce the environmental impact
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/dynamics-nav-to-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/NAV.png"
                                  alt="NAV Upgrade"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Nav Upgrade</span>
                                <p>
                                  Let us help you with a smoother and stress-free NAV upgrade process
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-non-profit-accelerator/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/non-profit.png"
                                  alt="NAV Upgrade"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Non-profits Accelerator</span>
                                <p>Supercharge Non-profits with AI</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/products/dynamics-365-business-central/customisation/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/dynamics-365-businesscentral.svg"
                                  alt="businesscentral"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Business Central Customisations</span>
                                <p>Personalise Business Central to meet unique customer needs and boost ROI</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="tab-pane fade" id="v-pills-settingss">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="continia"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia integration</span>
                                <p>
                                  Scan, analyse, and process documents with
                                  optimum quality
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/insights-works-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Insight_Work.png"
                                  alt="Insight_Work"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Insight Works</span>
                                <p>
                                  Optimise your inventory and distribution
                                  operations effortlessly
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/sana-commerce-for-dynamics-365-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/Sana_Commerce.png"
                                  alt="Sana_Commerce"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Sana Commerce</span>
                                <p>
                                  Avail a cloud e-commerce solution to
                                  supercharge your online store
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/wms-for-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/taskley-logo-im.png"
                                  alt="Sana_Commerce"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Tasklet's Mobile WMS</span>
                                <p>
                                  Optimize warehouse operations, simplify
                                  inventory, boost profits
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-document-capture-with-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="Sana_Commerce"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia OCR</span>
                                <p>
                                  Transform document management, streamline
                                  processing, manage easily
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/continia-expense-management/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/continia.png"
                                  alt="Sana_Commerce"
                                  width="48"
                                  height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Continia Expense Management </span>
                                <p>
                                  Monitor corporate expenses, eliminate manual
                                  errors with Continia
                                </p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/shopify-connector-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/shopify-integration-logo.svg"
                                  alt="shopify-integration-logo"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Shopify Connector</span>
                                <p>Synchronize orders, inventory, and customers across platforms</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="list-itmes-maga-menu">
                            <a href="/yavrio-integration-with-business-central/">
                              <div className="pic">
                                <img
                                  src="/img/menu-icons/image-541.png"
                                  alt="yavrio-integration-logo"
                                  width="48" height="48"
                                />
                              </div>
                              <div className="content">
                                <span>Yavrio Integration</span>
                                <p>Connect banking data to ERP for automated workflows</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-list d-flex ">
              <div className="rigt-list-menu rigt-list-menu-new p-relativ">
                <p>Essential Tool</p>
                <ul>
                  <li>
                    <a href="/erp-implementation-cost-calculator/">
                      <span className="menu-title-new">
                        Get Your ERP Cost Estimate
                      </span>
                      <span className="menu-title-para">
                        Quick, free, and tailored to your business.
                      </span>
                      <span className="menu-title-link">
                        Check Now <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </li>
                  {/* <li>
                    <a href="/dynamics-nav-to-business-central/">
                      <span className="menu-title-new">
                        Dynamics NAV To Business Central Upgrade
                      </span>
                      <span className="menu-title-para">
                        Ensure a smoother transition for you, without costing a
                        million bucks!
                      </span>
                      <span className="menu-title-link">
                        Read more <i className="bi bi-arrow-right"></i>
                      </span>
                    </a>
                  </li> */}
                </ul>
                  <div className="pp-absol" style={{ marginTop: "2px" }}>
                  <a rel="nofollow" href="https://councils.forbes.com/profile/Manish-Goyal-Co-founder-Dynamics-Square/1e25d5c2-1d98-46cd-834b-70d335b73b35" target="_blank">
                    <img
                      src="/img/forber-01.png"
                      width={771}
                      height={282}
                      alt="menu--ss"
                    />
                  </a>
                </div>
                <div className="pp-absol" style={{ marginTop: "2px" }}>
                  <a href="/products/dynamics-365-copilot/">
                    <img
                      src="/img/menu--ss.png"
                      width={706}
                      height={180}
                      alt="menu--ss"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </li>

        <li className="dropdown dropdown-smal-mega">
          <a href="/industries/">
            <span>Industries</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            {/* <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/startups/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Startup.png"
                      alt="Startup"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Startups</span>
                    <p>
                      Support your startup ideation and maximise your growth
                    </p>
                  </div>
                </a>
              </div>
            </li> */}
            {/* <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/microsoft-cloud-for-nonprofit/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Not-FOr-Profit.png"
                      alt="Not FOr Profit"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Not for Profit (Microsoft Cloud)</span>
                    <p>
                      Carry out mission-critical Challenges with perfect tools
                    </p>
                  </div>
                </a>
              </div>
            </li> */}
             <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-distribution/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/distribution-truck.png"
                      alt="MAnufacturing"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Distribution</span>
                    <p>Drive seamless supply flow with connected operations </p>
                  </div>
                </a>
              </div>
            </li>
              <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/microsoft-cloud-for-manufacturing/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/MAnufacturing.png"
                      alt="MAnufacturing"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Manufacturing</span>
                    <p>
                      Connect your people and operations to drive profitability
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-education/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/education.png"
                      alt="education"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Education</span>
                    <p>
                      Effectively manage students and staff for overall growth
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/ecommerce/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/E-commerce.png"
                      alt="E-commerce"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Ecommerce</span>
                    <p>Optimise E-commerce processes with real-time stocks</p>
                  </div>
                </a>
              </div>
            </li>
          
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/professional-services/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Professional-ervice.png"
                      alt="Professional-ervice"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Professional Services</span>
                    <p>
                      Streamline administration processes leveraging automation
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/food-and-beverages/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/Food.png"
                      alt="Food"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Food & Beverages</span>
                    <p>
                      Manage supply and inventory processes with real-time data
                    </p>
                  </div>
                </a>
              </div>
            </li>
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-healthcare/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/healthcare.png"
                      alt="healthcare"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Healthcare</span>
                    <p>
                      Track clinical operations while enhancing patient
                      experience
                    </p>
                  </div>
                </a>
              </div>
            </li>
            {/* <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-automotive-accelerator/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/automaotive.png"
                      alt="automaotive"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Automotive Accelerator</span>
                    <p>
                      Maintain, manage, and streamline an automotive business
                    </p>
                  </div>
                </a>
              </div>
            </li> */}
            <li>
              <div className="list-itmes-maga-menu list-itmes-maga-menu-small">
                <a href="/industries/dynamics-365-for-retail/">
                  <div className="pic">
                    <img
                      src="/img/menu-icons/retail-icon.png"
                      alt="retail-icon"
                      width="48"
                      height="48"
                    />
                  </div>
                  <div className="content">
                    <span>Retail</span>
                    <p>
                      Optimize retail operations with seamless user experience
                    </p>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="/our-services/">
            <span>Our Services</span>
            <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="/our-services/dynamics-365-implementation-services/">
                Implementation Services
              </a>
            </li>
            <li>
              <a href="/our-services/dynamics-365-support-services/">
                Support Services
              </a>
            </li>
            <li>
              <a href="/our-services/dynamics-365-upgrade-services/">
                Upgrade Services
              </a>
            </li>
            <li>
              <a href="/our-services/dynamics-365-training/">
                Dynamics 365 Training
              </a>
            </li>
            <li>
              <a href="/our-services/dynamics-365-consultant/">
                Dynamics 365 Consultants
              </a>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <a href="#">
            <span>Company</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="/about-us/">About Us</a>
            </li>
            <li>
              <a href="/why-us/">Why Us</a>
            </li>
            <li>
              <a href="/partner/">Partners</a>
            </li>
            <li>
              <a href="/career/">Careers</a>
            </li>
          </ul>
        </li>
         {/* <li className="dropdown megamenu">
                  <a href="#">
                    <span>Resources</span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <div className="megamenu-list megamenu-list-resource">
                    <div className="left-list">
                      <div className="d-flex align-items-start">
                        <div
                          className="nav flex-column nav-pills me-3"
                          id="v-pills-tab-two"
                          role="tablist"
                          aria-orientation="vertical"
                        >
                          <div
                            className="nav-link active"
                            id="v-pills-res-one-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-one"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-00.png"
                                alt="Blogs"
                                width="24"
                                height="24"
                              /><span>Blogs</span>
                            </a>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-res-two-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-two"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-01.png"
                                alt="Case Study"
                                width="24"
                                height="24"
                              /><span>Case Study</span>
                            </a>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-res-three-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-three"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-03.png"
                                alt="eBooks"
                                width="24"
                                height="24"
                              /><span>eBooks</span>
                            </a>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-res-four-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-four"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-04.png"
                                alt="Guides"
                                width="24"
                                height="24"
                              /><span>Guides</span>
                            </a>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-res-five-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-five"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-05.png"
                                alt="Tools"
                                width="24"
                                height="24"
                              /><span>Tools</span>
                            </a>
                          </div>
                          <div
                            className="nav-link"
                            id="v-pills-res-six-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-res-six"
                          >
                            <a href="#">
                              <img
                                src="/img/menu-icons/res-meg-06.png"
                                alt="Webcasts"
                                width="24"
                                height="24"
                              /><span>Webcasts</span>
                            </a>
                          </div>

                        </div>

                        <div className="tab-content" id="v-pills-tabContent">
                          <div
                            className="tab-pane fade show active"
                            id="v-pills-res-one"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-9 d-flex bg-0-gray-t">
                                  <div className="row bg-0-gray">
                                    <div className="col-lg-3">
                                      <div className="mega-list-01">
                                        <span>By product</span>
                                        <ul>
                                          <li><a href="">Business Central</a></li>
                                          <li><a href="">Finance</a></li>
                                          <li><a href="">Supply Chain</a></li>
                                          <li><a href="">Sales</a></li>
                                          <li><a href="">Field Service</a></li>
                                          <li><a href="">Copilot</a></li>
                                          <li><a href="">Customer Service</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-3">
                                      <div className="mega-list-01">
                                        <span>By Industry</span>
                                        <ul>
                                          <li><a href="#manufacturing">Manufacturing</a></li>
                                          <li><a href="#retail-ecommerce">Retail & Ecommerce</a></li>
                                          <li><a href="#distribution">Distribution</a></li>
                                          <li><a href="#professional-services">Professional Services</a></li>
                                          <li><a href="#food-beverages">Food & Beverages</a></li>
                                          <li><a href="#healthcare">Healthcare</a></li>
                                          <li><a href="#education">Education</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="mega-list-01">
                                        <span>Editor's Picks</span>
                                        <ul>
                                          <li>
                                            <a href="/business-central-implementation-methodology/">
                                              Business Central Implementation Methodology
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/quickbooks-to-microsoft-business-central-migration/">
                                              QuickBooks to Microsoft Business Central Migration
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/sage-to-microsoft-business-central-migration/">
                                              Why Should You Consider Migrating from Sage to Microsoft Business Central?
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/nav-upgrade-vs-d365-business-central-reimplementation/">
                                              NAV Upgrade vs D365 Business Central Re-Implementation
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/dynamics-365-business-central-vs-dynamics-365-crm/">
                                              Dynamics 365 Business Central vs Dynamics 365 CRM
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/business-central-vs-sage-200/">
                                              Business Central vs Sage 200
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 d-flex">
                                  <div className="right-resource">
                                    <div className="res-top-co">
                                      <span className="n-tag">Featured Article</span>
                                      <span className="n-title">Business Central + Dynamics 365 Sales Integration</span>
                                      <p>Learn how to unify ERP and CRM for better sales visibility.</p>
                                      <div className="imag00"><img src="/img/menu-icons/pic-002.png" alt="Business Central" width={177} height={80} /></div>
                                      <a href="">Read Article <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    <div className="res-top-bo">
                                      <a href="#"><img src="/img/menu--ss.png" width={706} height={180} alt="AI" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-res-two"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-9 d-flex bg-0-gray-t">
                                  <div className="row bg-0-gray">
                                    <div className="col-lg-4">
                                      <div className="mega-list-01">
                                        <span>Browse by Service</span>
                                        <ul className="res-st-oo1">
                                          <li><a href="#">
                                            <div className="ccc-img">

                                              <i className="bi bi-gear"></i>
                                            </div>
                                            <div className="ccc-card">
                                              <span>Implementation</span>
                                              <p>Business Central | Finance</p>
                                            </div>
                                          </a></li>
                                          <li><a href="#">
                                            <div className="ccc-img">

                                              <i className="bi bi-back"></i>
                                            </div>
                                            <div className="ccc-card">
                                              <span>ERP Upgrade</span>
                                              <p>Nav, GP, AX Upgrade</p>
                                            </div>
                                          </a></li>
                                          <li><a href="#">
                                            <div className="ccc-img">

                                              <i className="bi bi-person-add"></i>
                                            </div>
                                            <div className="ccc-card">
                                              <span>Managed Support</span>
                                              <p>24×7 Support & Optimization</p>
                                            </div>
                                          </a></li>

                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-2">
                                      <div className="mega-list-01">
                                        <span>By Industry</span>
                                        <ul>
                                          <li><a href="#manufacturing">Manufacturing</a></li>
                                          <li><a href="#retail-ecommerce">Retail & Ecommerce</a></li>
                                          <li><a href="#distribution">Distribution</a></li>
                                          <li><a href="#professional-services">Professional Services</a></li>
                                          <li><a href="#food-beverages">Food & Beverages</a></li>
                                          <li><a href="#healthcare">Healthcare</a></li>
                                          <li><a href="#education">Education</a></li>
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="mega-list-01">
                                        <span>Customer Success Highlights</span>
                                        <ul>
                                          <li>
                                            <a style={{ color: '#8E44AD' }} href="/business-central-implementation-methodology/">80% Better Department Collaboration London College</a>
                                          </li>
                                          <li>
                                            <a href="/quickbooks-to-microsoft-business-central-migration/">
                                              30% Higher ROI through Custom Dynamics Solutions Classic Car Restoration Company
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/sage-to-microsoft-business-central-migration/">
                                              50% Operational Efficiency Improvement UK Defence Apparel Manufacturer
                                            </a>
                                          </li>
                                          <li>
                                            <a href="/nav-upgrade-vs-d365-business-central-reimplementation/">
                                              Manufacturing ERP Transformation Production & Inventory Optimised
                                            </a>
                                          </li>

                                        </ul>
                                        <div className="extra-res-link">
                                          <a href="/nav-upgrade-vs-d365-business-central-reimplementation/">Explore Customer Stories <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 d-flex">
                                  <div className="right-resource">
                                    <div className="res-top-co">
                                      <span className="n-tag">Featured Article</span>
                                      <span className="n-title">60% More Operational Visibility with Dynamics 365</span>
                                      <p>See how a medical device manufacturer transformed production planning, inventory and reporting.</p>
                                      <div className="imag00"><img src="/img/menu-icons/pic-006.png" alt="Dynamics 365" width={106} height={90} /></div>
                                      <a href="">Read Story <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    <div className="res-top-bo">
                                      <img src="/img/menu--ss.png" width={706} height={180} alt="AI" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-res-three"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-3 d-flex  bg-0-gray-t">
                                  <div className="res-card-99">
                                    <span className="n-tags">Recommended</span>
                                    <img className="n-tags-image" src="/img/Cover_Book_Moc.png" width={582} height={466} alt="Cover_Book_Moc" />
                                    <span className="n-tag-title">Ultimate Guide to Choose the Right ERP For Your Business</span>
                                    <p className="n-tag-para">Compare ERP solutions before making your investment.</p>
                                    <a className="n-tag-link" href="/the-ultimate-guide-to-microsoft-dynamics-365/">Get Free eBook <i className="bi bi-arrow-right"></i></a>
                                  </div>
                                </div>
                                <div className="col-lg-9 bg-0-gray-t">
                                  <div className="guide-cardwar">
                                    <span className="pop-res-title">Popular eBooks</span>
                                  </div>
                                  <div className="res-flex-wrap">
                                    <div className="guide-card-01">
                                      <a href="#">
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src="/img/nav-guide-pic.png" alt="manufacturing" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">A Complete Guide to Dynamics GP to BC</span>
                                          <span className="guide-card-para">The Extensive Guide to Dynamics 365 Finance</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a href="#">
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src="/img/Ebook-Nav-to-BC.png" alt="manufacturing" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Dynamics NAV to Business Central</span>
                                          <span className="guide-card-para">Upgrade From Dynamics NAV to Business Central</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a href="#">
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src="/img/nav-guide-pic.png" alt="manufacturing" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">A Complete Guide to Dynamics 365 Finance</span>
                                          <span className="guide-card-para">The Extensive Guide to Dynamics 365 Finance</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a href="#">
                                        <div className="guide-card-imag">
                                          <img width={980} height={578} src="/img/ebooh-img.png" alt="manufacturing" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Choose the Right ERP
                                            For Your Business</span>
                                          <span className="guide-card-para">Ultimate Guide to Choose the Right ERP For Your Business
                                          </span>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                  <div className="comm-links-b">
                                    <a className="n-tag-link" href="">View All eBooks <i className="bi bi-arrow-right"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-res-four"
                          >
                            <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-9 d-flex bg-0-gray-t">
                                  <div className="row bg-0-gray">
                                    <div className="col-lg-6">
                                      <div className="resor-bord">
                                        <div className="guide-cardwar">
                                          <span className="pop-res-title">Guides</span>
                                          <p className="pop-res-title-p">Learn before you implement</p>
                                        </div>
                                        <div className="res-flex-wrap-one">
                                          <div className="guide-card-01">
                                            <a href="/ebook/gp-to-bc-migration/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/dynamics-GP-BC-Ebook-featured-image.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                  <span className="guide-tags-rs">Guide</span>
                                                <span className="guide-card-title">A Complete Guide to Dynamics GP to BC</span>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="guide-card-01">
                                            <a href="/ebook/d365-supply-chain-management/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/dynamics-SCM-Ebook-featured-image.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                <span className="guide-tags-rs">Guide</span>
                                                <span className="guide-card-title">A Complete Guide to Dynamics SCM</span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="comm-links-b">
                                          <a className="n-tag-link" href="/ebook/">Explore All eBooks <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="resor-bords">
                                        <div className="guide-cardwar">
                                          <span className="pop-res-title">Whitepapers</span>
                                          <p className="pop-res-title-p">Strategic resources for decision makers</p>
                                        </div>
                                        <div className="res-flex-wrap-one">
                                          <div className="guide-card-01">
                                            <a href="/white-papers/microsoft-copilot/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/white-p-one.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                  <span className="guide-tags-rs">Whitepapers</span>
                                                <span className="guide-card-title">Microsoft Copilot: The Catalyst for Transformation in Your Business</span>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="guide-card-01">
                                            <a href="/white-papers/microsoft-finance/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/finacne-white-paper-category.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                <span className="guide-tags-rs">Whitepapers</span>
                                                <span className="guide-card-title">Dynamics 365 Finance with Copilot WhitePaper</span>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="comm-links-b">
                                          <a className="n-tag-link" href="/white-papers/">Explore All Guides <i className="bi bi-arrow-right"></i></a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 d-flex">
                                  <div className="right-resource">
                                    <div className="res-top-co">
                                      <span className="n-tag">Featured Article</span>
                                      <span className="n-title">60% More Operational Visibility with Dynamics 365</span>
                                      <p>See how a medical device manufacturer transformed production planning, inventory and reporting.</p>
                                      <div className="imag00">
                                        <img src="/img/menu-icons/pic-006.png" alt="Dynamics 365" width={106} height={90} />
                                        
                                        </div>
                                      <a href="">Read Story <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    <div className="res-top-bo">
                                      <img src="/img/menu--ss.png" width={706} height={180} alt="AI" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-res-five"
                          >
                             <div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-9 d-flex bg-0-gray-t">
                                  <div className="row bg-0-gray">
                                    <div className="col-lg-4">
                                      <div className="resor-bord">
                                        <div className="guide-cardwar">
                                          <span className="pop-res-title">TOOLS</span>
                                          <p className="pop-res-title-p">Estimate costs, compare solutions, and choose the right Microsoft Dynamics 365 platform with confidence.</p>
                                        </div>
                                      
                                      </div>
                                    </div>

                                    <div className="col-lg-8">
                                      <div className="resor-bords">
                                       
                                        <div className="res-flex-wrap-one">
                                          <div className="guide-card-01">
                                            <a href="/erp-implementation-cost-calculator/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/tools-one.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                  <span className="guide-tags-rs">ERP Calculator</span>
                                                <span className="guide-card-title">Estimate implementation costs in minutes.</span>
                                                <a className="n-tag-link" href="/erp-implementation-cost-calculator/">Calculate Now <i className="bi bi-arrow-right"></i></a>
                                              </div>
                                            </a>
                                          </div>
                                          <div className="guide-card-01">
                                            <a href="/top-erp-systems-comparison/">
                                              <div className="guide-card-imag">
                                                <img width={980} height={578} src="/img/tools-two.png" alt="guide" />
                                              </div>
                                              <div className="guide-card-inf">
                                                <span className="guide-tags-rs">ERP Comparison</span>
                                                <span className="guide-card-title">Compare Dynamics 365 solutions side-by-side.</span>
                                                <a className="n-tag-link" href="/top-erp-systems-comparison/">Compare Now <i className="bi bi-arrow-right"></i></a>
                                              </div>
                                            </a>
                                          </div>
                                        </div>
                                        <div className="comm-links-b">
                                          
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-lg-3 d-flex">
                                  <div className="right-resource">
                                    <div className="res-top-co">
                                      <span className="n-tag">Featured Article</span>
                                      <span className="n-title">60% More Operational Visibility with Dynamics 365</span>
                                      <p>See how a medical device manufacturer transformed production planning, inventory and reporting.</p>
                                      <div className="imag00">
                                        
                                        <img src="/img/menu-icons/pic-006.png" alt="Dynamics 365" width={106} height={90} />
                                        
                                        </div>
                                      <a href="">Read Story <i className="bi bi-arrow-right"></i></a>
                                    </div>
                                    <div className="res-top-bo">
                                      <a href="#"><img src="/img/menu--ss.png" width={706} height={180} alt="AI" /></a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="v-pills-res-six"
                          ><div className="container-fluid">
                              <div className="row">
                                <div className="col-lg-12 bg-0-gray-t">
                                  <div className="guide-cardwar">
                                    <span className="pop-res-title">Webcasts</span>
                                    <p>Your go-to source for expert insights on CRM, ERP, and business transformation powered by Microsoft Dynamics 365</p>
                                  </div>
                                  <div className="res-flex-wrap">
                                    <div className="guide-card-01">
                                      <a target="_blank" href="https://www.youtube.com/watch?v=44hqw-S27D0">
                                        <div className="guide-card-imag">
                                          <img width={411} height={216} src="/img/bc-8-20.png" alt="potcast" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Is Your Business Ready for an ERP System?</span>
                                          <span className="guide-card-para">Explore key signs, benefits, and steps to ERP readiness</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a target="_blank" href="https://youtu.be/hUPT5DejiR0?si=p_hlO_BdCj_gbWwh">
                                        <div className="guide-card-imag">
                                          <img width={411} height={216} src="/img/bc-8-21.png" alt="potcast" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Unpacking Microsoft Dynamics 365 Business Central for Growth</span>
                                          <span className="guide-card-para">Learn how Business Central helps streamline operations and scale growth in this expert-driven podcast episode.</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a target="_blank" href="https://youtu.be/Of8upj7BtGo?si=Lsf5SCwBtIpSU1ST">
                                        <div className="guide-card-imag">
                                          <img width={411} height={216} src="/img/bc-8-22.png" alt="potcast" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Signs Your Business Is Ready for an ERP System</span>
                                          <span className="guide-card-para">Understand when to adopt ERP, its benefits, and how Dynamics 365 drives business transformation.</span>
                                        </div>
                                      </a>
                                    </div>
                                    <div className="guide-card-01">
                                      <a target="_blank" href="https://www.youtube.com/watch?v=44hqw-S27D0">
                                        <div className="guide-card-imag">
                                          <img width={411} height={216} src="/img/bc-8-20.png" alt="potcast" />
                                        </div>
                                        <div className="guide-card-inf">
                                          <span className="guide-card-title">Is Your Business Ready for an ERP System?</span>
                                          <span className="guide-card-para">Explore key signs, benefits, and steps to ERP readiness</span>
                                        </div>
                                      </a>
                                    </div>
                                 
                                  </div>
                                  <div className="comm-links-b">
                                    <a className="n-tag-link" target="_blank" href="https://www.youtube.com/@DynamicsSquare">View All Podcasts <i className="bi bi-arrow-right"></i></a>
                                  </div>
                                </div>
                              </div>
                            </div></div>
                        </div>
                      </div>
                    </div>

                  </div>
                </li>  */}
        <li className="dropdown">
          <a href="#">
            <span>Resources</span> <i className="bi bi-chevron-down"></i>
          </a>
          <ul>
            <li>
              <a href="/blog/" target="_self">
                Blogs
              </a>
            </li>
            
            <li>
              <a href="/case-studies/">Case Studies</a>
            </li>
            <li>
              <a href="/ebook/">eBooks</a>
            </li>

            <li>
              <a href="/guides/">Guides</a>
            </li>
            <li>
              <a href="/white-papers/">White Papers</a>
            </li>
            <li className="dropdown dropdown-s">
              <a href="">
                Tools <sub className="s-dd">new!</sub>
                <i className="bi bi-chevron-right"></i>
              </a>
              <ul>
                <li>
                  <a href="/erp-implementation-cost-calculator/" target="_self">
                    ERP Calculator
                  </a>
                </li>
                <li>
                  <a href="/top-erp-systems-comparison/" target="_self">
                    ERP Comparison
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/webinars/">Webinars</a>
            </li>
            
          </ul>
        </li>
        <li>
          <PulseButton />
        </li>
      </ul>
    </>
  );
};

export default DeskstopMenu;
