import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bcVsSapTwo.module.css";
import SectionNav, { useSectionNav } from "../components/bcTwo/SectionNav";
import FaqList from "../components/bcTwo/FaqList";
import RelatedLinks from "../components/bcTwo/RelatedLinks";
import PageSeo from "../components/PageSeo";

const PAGE_TITLE = "WMS Tasklet for Dynamics 365 Business Central";
const PAGE_DESC = "Integration Mobile WMS for Business Central supports the core warehouse processes seemlessly while pushing the team towards more efficiency and productivity.";

const whyChoose = [
  { icon: "bi-android2", title: "Works with Most Popular Operating System", text: "You can access Mobile WMS on Android-based mobile phones using the official mobile application." },
  { icon: "bi-wifi-off", title: "Works in Online and Offline Mode", text: "The standard functions and features can be operated on online as well offline mode to keep processes run 24x7." },
  { icon: "bi-hand-index-thumb", title: "Interactive User-Interface", text: "This has a responsive and user-friendly user interface with ease of access for new users as well." },
  { icon: "bi-calendar-check", title: "Fully Functional within a Week", text: <>The total installation and proper working of all functionality of Mobile WMS takes less than a week if you have selected the right <Link href="/dynamics-365-business-central-implementation/">Business Central implementation partner</Link>.</> },
];

const benefits = [
  { title: "Make Staff Productive", text: "Your staff can scan the barcode in a single scan resulting in more productivity while saving a lot of time." },
  { title: "Eliminate the Errors", text: "Mobile WMS works while centralising the data resulting in elimination of error and other similar bugs." },
  { title: "Reduce Warehouse Expenditure", text: "Locating the exact product in the entire warehouse within a single click will significant amount of time and money, resulting in higher warehouse ROI." },
];

const functions = [
  {
    icon: "bi-box-arrow-in-down",
    title: "Receive",
    text: <>Register new items and create a lot number, a serial number, and other details. The Receive option will let you effectively receive the items and add them to your <Link href="/products/dynamics-365-business-central/supply-chain-management/">inventory</Link>. Using this feature, you can directly receive receipts, purchase orders, return orders, and transfer orders. Even so, the Receive feature allows you to access the camera to document the delivery of the product in the form of pictures. This will make the condition of the product transparent throughout the process.</>,
    label: "Benefits of Receive:",
    items: ["Printing and generating new or missing barcodes.", "Receiving products from multiple locations and updating them in real-time.", "Minimising the chances of error in the entire product receiving process.", "Enabling camera to take photos for further reference or to document the current condition of the product.", "Use filters to find the right product."],
  },
  {
    icon: "bi-hand-index",
    title: "Pick",
    text: <>Pick single, bulk, or consolidated items correctly. The Pick option will let you pick the right item from the warehouse accurately for a <Link href="/products/dynamics-365-business-central/sales-order-management/">sales order</Link>, <Link href="/products/dynamics-365-business-central/manufacturing-management/">production order</Link>, purchase order, return order, and more. Once you use it, this feature will choose the fastest and safest route to pick the particular item around the warehouse.</>,
    label: "Benefits of Pick:",
    items: ["Display products along with their images to help users find them easily.", "It makes sure to pick the right item.", "Getting tote bag for picking up multiple orders at once.", "Uses predefined routes for fast and safe picking.", "Visually indicates the distance between the employee and the item to be picked."],
  },
  {
    icon: "bi-arrows-move",
    title: "Move",
    text: "Move planned, unplanned, single, and bulk items. The Move option allows users to perform sophisticated item movement, whether single or bulk, eliminating the need for paper-based movement.",
    label: "Benefits of the Move:",
    items: ["Minimising errors in moving items from one place to another.", "It performs a planned move to make it a faster and safer movement.", "Creating space for new items.", "It can move items in bulk too."],
  },
  {
    icon: "bi-shuffle",
    title: "Unplanned Move",
    text: "Move unplanned items. The Unplanned Move option lets users effortlessly plan the instantaneous movement of unplanned items. It keeps up the inventory and seasonal stock while using the best route possible, eliminating the excess steps of moving an item.",
    label: "Benefits of Unplanned Move:",
    items: ["Enable users to prepare for an unplanned move.", "There is no need to prepare the existing financial system.", "Can be performed in real-time.", "Removes unnecessary steps, resulting in resource savings."],
  },
  {
    icon: "bi-123",
    title: "Count",
    text: "Count all orders, including single, bulk, planned, and unplanned items. This feature eliminates the method of counting using pen and paper. It automates the process of counting products accurately and without error.",
    label: "Benefits of Count:",
    items: ["Automate the item counting operation.", "Reduce manual efforts for counting.", "The product count will be validated and maintained with high accuracy."],
  },
  {
    icon: "bi-calculator",
    title: "Unplanned Count",
    text: <>Count unplanned items seamlessly. The Unplanned Count option is similar to the Count option, but it is generally used for ad-hoc counting. When a user selects this option, the counting is immediately reflected in the <Link href="/products/dynamics-365-business-central/financial-management/">financial system</Link>.</>,
    label: "Benefits of an Unplanned Count:",
    items: ["Automate unplanned count.", "Direct accounting that is reflected in the financial system.", "Shows data in real-time."],
  },
  {
    icon: "bi-plus-slash-minus",
    title: "Adjust Quantity",
    text: "Perform a quantity adjustment of any item with a reason. The Adjust Quantity option allows users to adjust the quantity of a product either negatively or positively in order to balance inventory levels. Using Mobile WMS, you can make the adjustment with a few clicks while assigning a reason to it.",
    label: "Benefits of Adjust Quantity:",
    items: ["Positively and negatively adjust the inventory.", "Removes the damaged and unmatched item from a specific inventory.", "Adjust the quantity with a reason code using the pre-defined drop-down menu."],
  },
  {
    icon: "bi-boxes",
    title: "Bulk Move",
    text: "Move all planned and unplanned items in bulk. Item movement, whether single or bulk, is critical in a warehouse to streamline inventory levels and free up space for new items. The Mobile WMS eliminates the chances of errors occurring due to manual moving and tracking of items.",
    label: "Benefits of Bulk Move",
    items: ["Move items in bulk from one place to another within a few clicks.", "Errors that occur during movement must be eliminated.", "Making space in bins for other items.", "Perform unplanned item movement in real time."],
  },
  {
    icon: "bi-geo-alt",
    title: "Locate Item",
    text: "Get item location, check quantity, and avail product data. Mobile WMS lets you locate the item available in the warehouse using a simple barcode scan. Even so, you can find the exact product available in both internal and external locations while getting an overview of inventory levels.",
    label: "Benefits of Locate Item:",
    items: ["Locating items in internal and external locations.", "Provides exact location of the item available in the warehouse.", "Offers exact information about the item, including the lot number, serial number, and expiration date.", "Shows the image of the item on the Mobile WMS app.", "Comes with the Locate Item feature to find the item whenever needed."],
  },
  {
    icon: "bi-upc-scan",
    title: "Item Cross Reference",
    text: "Assign a barcode to an item, which is generally used when receiving inventory. The Item Cross Reference option is generally used when a user receives an item and assigns the barcodes. Also, it assigns the new barcodes to the existing item without following the whole process of adding a barcode to the new item.",
    label: "Benefits of Item Cross Reference:",
    items: ["Adds barcodes to the new items.", "Add barcodes to the existing items with missing barcode details.", "Add multiple barcodes to the same item."],
  },
  {
    icon: "bi-printer",
    title: "Print Label",
    text: "Print labels for distribution using a mobile application. The Print Label option is a must-have feature for a warehouse management application, and Mobile WMS provides it effectively. You can easily print the labels directly from your mobile device. Even so, you can choose the labels for printing.",
    label: "Benefits of Print Label:",
    items: [<>Prints labels using the <Link href="/microsoft-dynamics-365-cloud-vs-on-premise/">cloud as well as an on-premises platform</Link>.</>, "User can easily customise the label design.", "Avail data from other features of Mobile WMS."],
  },
  {
    icon: "bi-arrow-left-right",
    title: "Substitute Item",
    text: "Search for a substitute item by scanning the barcode. The Substitute Item option plays an important role when finding an alternative to the item. It allows users to quickly find a replacement for an actual product with a few clicks. like finding an alternate item for an out-of-stock item directly from your mobile device.",
    label: "Benefits of a Substitute Item:",
    items: ["Finds the best replacement for the unavailable item.", "Provides information on all alternate products.", "It prevents downtime in production.", "Optimises existing resources."],
  },
  {
    icon: "bi-truck",
    title: "Shipping",
    text: "Process items for shipping using a mobile application. The shipping option allows users to use the mobile application to ship a single product or a group of products.",
    label: "Benefits of Shipping:",
    items: ["Ships items using a mobile application.", "Tracks item during and after shipping.", "Also shows the location."],
  },
];

// Same Q&As as the visible accordion (also used for the FAQPage schema).
const faqs = [
  { id: 1, question: "What are the basic requirements to implement Mobile WMS?", answer: "<p>Mobile WMS is an add-on that can be implemented with a <a href=\"/products/microsoft-dynamics-erp/\">Microsoft ERP solution</a>. To implement it with your existing system, you need to search for the right <a href=\"/\">Microsoft Certified Solutions Partner</a> in UK. (Select a partner who offers implementation as well as support services to enable your solution to get going.)</p><p><b>Contact Dynamics Square for Mobile WMS <a href=\"/d365-business-central-support/\">support</a> and implementation services.</b></p>" },
  { id: 2, question: "Is Mobile WMS programmable?", answer: "<p>Yes, depending on the specific business requirements, Mobile WMS by Tasklet Factory can be customised. It is simple to set up and integrates with standard Dynamics 365 Business Central or Dynamics NAV functions.</p><p><b>Contact us for customised needs.</b></p>" },
  { id: 3, question: "How much time does it take a certified partner to implement Mobile WMS?", answer: "<p>The total time needed for an implementation depends on the complexity of the business. However, on a standard implementation process, it can be implemented in less than 7 days after implementing warehouse management with the existing ERP.</p><p><b>Contact Dynamics Square to know the exact time of implementation.</b></p>" },
  { id: 4, question: "What is the total number of devices we can use with Mobile WMS?", answer: "<p>You can access Mobile WMS on the desired number of devices. It totally depends on your requirements, whether you want to use it on a single device or on multiple devices.</p>" },
  { id: 5, question: "What type of barcode does Mobile WMS support?", answer: "<p>Mobile WMS supports international standard GS1 barcodes. If you need help choosing the right barcodes, contact <b>Dynamics Square</b>.</p>" },
];

const relatedLinks = [
  { href: "/industries/business-central-for-distribution/", title: "Business Central for Distribution", icon: "bi-truck" },
  { href: "/insights-works-for-dynamics-365-business-central/", title: "Insight Works for Business Central", icon: "bi-graph-up" },
  { href: "/continia-document-capture-with-business-central/", title: "Continia Document Capture", icon: "bi-file-earmark-text" },
  { href: "/shopify-connector-business-central/", title: "Shopify Connector for Business Central", icon: "bi-bag" },
];

const sections = [
  { id: "overview", label: "Mobile WMS" },
  { id: "simplify", label: "Simplify Warehouse Processes" },
  { id: "why-mobile-wms", label: "Why Mobile WMS" },
  { id: "benefits", label: "Benefits" },
  { id: "functionality", label: "Functionality" },
  { id: "faqs", label: "FAQs" },
];

const Wms = () => {
  const { active, navTop } = useSectionNav(sections);
  const [activeFn, setActiveFn] = useState(0);

  return (
    <>
      <PageSeo
        type="Service"
        title={PAGE_TITLE}
        description={PAGE_DESC}
        image="/img/wms-bc-banner.png"
        imageAlt="Mobile WMS for Dynamics 365 Business Central"
        faqs={faqs}
      />

      {/* ===== Hero ===== */}
      <section className={styles.hero}>
        <div className="container">
          <nav aria-label="breadcrumb" className={styles.crumbs}>
            <Link href="/">Home</Link>
            <i className="bi bi-chevron-right"></i>
            <span>Mobile WMS for Business Central</span>
          </nav>
          <div className="row align-items-center gy-5">
            <div className={`col-lg-6 ${styles.heroSplit}`}>
              <h1 className={styles.heroTitle}>Best Mobile WMS for Business Central</h1>
              <p className={styles.heroLead}>Receive, pick, move and count stock from a mobile device with barcode scanning, with every update recorded in Business Central in real time.</p>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Get Started &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.heroVisual}>
                <Image src="/img/wms-bc-banner.png" alt="Mobile WMS for Business Central on a handheld barcode scanner" width={739} height={471} priority sizes="(max-width: 991px) 100vw, 560px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionNav sections={sections} active={active} navTop={navTop} ctaLabel="Request a Demo" />

      {/* ===== Overview ===== */}
      <section id="overview" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className={`row g-0 align-items-stretch ${styles.overviewPanel}`}>
            <div className={`col-lg-5 ${styles.overviewHead}`}>
              <i className="bi bi-upc-scan" aria-hidden="true"></i>
              <h2 className={styles.h2}>Mobile WMS for Dynamics 365 Business Central</h2>
              <div className={`${styles.heroActions} ${styles.heroActionsLeft}`}>
                <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                  <span>Request a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                </Link>
              </div>
            </div>
            <div className={`col-lg-7 ${styles.overviewBody}`}>
              <p className={`${styles.lead} ${styles.quoteLink}`}>Streamline your barcode scanning needs by leveraging the effective, productive, and efficient mobile WMS solution built by Tasklet Factory. It is a widely recognised tool capable of optimising the existing warehouse operations for a more promising output while reducing the chances of errors. It is one of the most important warehouse management add-ons available for <Link href="/products/dynamics-365-business-central/">Dynamics 365 Business Central</Link>, which simplifies the scanning operation. Want to know more about its capabilities?</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Simplify ===== */}
      <section id="simplify" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className="col-lg-5 order-2 order-lg-1">
              <div className={styles.mediaFlat}>
                <Image src="/img/wms-team-business-central.png" alt="Warehouse team using Mobile WMS with Business Central" width={422} height={453} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
            <div className={`col-lg-7 order-1 order-lg-2 ${styles.textCol}`}>
              <h2 className={styles.h2}>Simplify your Warehouse Processes while Enhancing Efficiency</h2>
              <p className={styles.lead}>Mobile WMS for Business Central supports the core warehouse processes seamlessly while pushing the team towards more efficiency and productivity. It also supports basic workflow and offers easy integration with Business Central and <Link href="/products/microsoft-dynamics-nav/">Microsoft Dynamics NAV</Link>.</p>
              <p>With a simple user interface and an attractive graphical evaluation, Mobile WMS for Business Central is easy to configure for all kinds of warehouse requirements. Even for unique business needs, the performance and capability of Mobile WMS from Tasklet factory can be extended to meet all <Link href="/products/dynamics-365-business-central/customisation/">custom needs</Link>.</p>
            </div>
          </div>
          <div className={`${styles.twoCol} mt-5`}>
            <div className={styles.infoCard}>
              <i className="bi bi-building"></i>
              <p className={styles.quoteLink}><Link href="/products/dynamics-365-business-central/warehouse-management/">Warehouse Management in Business Central</Link> is a separate module to tackle all kinds of complex warehouse operations. Based on the unique requirements of a business, you have to integrate add-ons to make it ideal for your business. It integrates with the standard functionalities of D365 Business Central or Dynamics NAV ERP, making it a stable and perfect WMS tool.</p>
            </div>
            <div className={styles.infoCard}>
              <i className="bi bi-wifi-off"></i>
              <p>We live in an era of centralised businesses where data transfer happens in real-time. Without online connectivity, warehouse operations may stop, leading to financial as well as efficiency losses. But, Mobile WMS from Tasklet Factory has you covered, as you can use the app with full functionality in offline mode too. Whatever the task you are performing, whether counting, moving, receiving items, or sending them to distribution, you can perform it without any issue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Why Mobile WMS ===== */}
      <section id="why-mobile-wms" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Why you Should Choose Mobile WMS?</h2>
            </div>
          </div>
          <div className={`${styles.diffGrid} mt-4`}>
            {whyChoose.map((w) => (
              <div className={styles.diffTile} key={w.title}>
                <i className={`bi ${w.icon}`}></i>
                <h3>{w.title}</h3>
                <p className={styles.quoteLink}>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Benefits ===== */}
      <section id="benefits" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row align-items-center gy-5">
            <div className={`col-lg-7 ${styles.textCol}`}>
              <h2 className={styles.h2}>Benefits of Using Mobile WMS by Tasklet Factory</h2>
              <ol className={styles.numList}>
                {benefits.map((b) => (
                  <li key={b.title}>
                    <div>
                      <h3 className="mb-1" style={{ fontSize: 19 }}>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-lg-5">
              <div className={styles.mediaFlat}>
                <Image src="/img/wms-mobile.png" alt="Mobile WMS app for Business Central warehouse staff" width={536} height={584} sizes="(max-width: 991px) 100vw, 460px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Functionality ===== */}
      <section id="functionality" className={`${styles.block} ${styles.anchor}`}>
        <div className="container">
          <div className="row">
            <div className={`col-lg-9 ${styles.introCol}`}>
              <h2 className={styles.h2}>Tasklet Mobile WMS Functionality</h2>
              <p>Some of the top functionalities of Tasklet Factory Mobile WMS are:</p>
            </div>
          </div>
          <div className={styles.modTabs}>
            <div className={styles.modTabList} role="tablist" aria-label="Tasklet Mobile WMS functionality">
              {functions.map((f, i) => (
                <button
                  key={f.title}
                  type="button"
                  role="tab"
                  id={`fn-tab-${i}`}
                  aria-selected={activeFn === i}
                  aria-controls={`fn-panel-${i}`}
                  className={`${styles.modTab} ${activeFn === i ? styles.modTabActive : ""}`}
                  onClick={() => setActiveFn(i)}
                >
                  <i className={`bi ${f.icon}`} aria-hidden="true" style={{ fontSize: 20, width: 30, textAlign: "center" }}></i>
                  {f.title}
                </button>
              ))}
            </div>
            <div className={styles.modPanelSticky}>
              {/* every panel stays in the HTML so all functionality content is crawlable */}
              {functions.map((f, i) => (
                <div
                  key={f.title}
                  id={`fn-panel-${i}`}
                  role="tabpanel"
                  aria-labelledby={`fn-tab-${i}`}
                  className={`${styles.modPanel}${activeFn === i ? "" : " d-none"}`}
                >
                  <h3>{f.title}</h3>
                  <p className={styles.quoteLink}>{f.text}</p>
                  <p className="mb-0"><b>{f.label}</b></p>
                  <ul className={`${styles.capList} ${styles.quoteLink}`}>
                    {f.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className={styles.ctaBand}>
        <div className="container">
          <div className={styles.final}>
            <div className={styles.finalText}>
              <h3>Best Mobile WMS for Business Central</h3>
            </div>
            <div className={styles.finalAction}>
              <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto">
                <span>Request a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQs ===== */}
      <section id="faqs" className={`${styles.block} ${styles.blockTint} ${styles.anchor}`}>
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className={styles.faqAside}>
                <h2 className={styles.h2}>Most Asked FAQs</h2>
                <div className={`${styles.faqCtaCard} ${styles.faqCtaCardFlat}`}>
                  <Link href="#exampleModal" data-bs-toggle="modal" className="btn-get-started scrollto" style={{ marginTop: 0 }}>
                    <span>Request a Demo &nbsp;<i className="bi bi-arrow-right"></i></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <FaqList items={faqs} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== Internal links ===== */}
      <RelatedLinks links={relatedLinks} />
    </>
  );
};

export default Wms;
