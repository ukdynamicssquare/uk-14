import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "../styles/about.module.css";

const team = [
  { img: "/img/aboutus-new/team-gourav-goyal-new.png", name: "Gourav Goyal", role: "Co-Founder, Dynamics Square", quote: "Nurturing people and investing in their capabilities to build a resilient organisation." },
  { img: "/img/aboutus-new/team-manish-goyal-new.png", name: "Manish Goyal", role: "Co-Founder, Dynamics Square", quote: "As a tech company, we believe technology is meant to simplify, not complicate." },
  { img: "/img/aboutus-new/team-felton-lean-new.png", name: "Dr. Felton Lean", role: "The People Person", quote: "Helping employees and organisations achieve more through learning and development." },
  { img: "/img/aboutus-new/team-nitesh-sharma-new.png", name: "Nitesh Sharma", role: "Head of Business Development", quote: "Every successful implementation begins with listening before launching." },
  { img: "/img/aboutus-new/team-nitesh-sharma-new.png", name: "Nitesh Sharma", role: "Head of Business Development", quote: "Every successful implementation begins with listening before launching." },
];

const techGroups = [
  {
    title: "AI-Enabled ERP",
    desc: "Run your entire business with connected ERP",
    headerIcon: "/img/aboutus-new/tech-erp-icon.png",
    items: [
      { icon: "/img/menu-icons/dynamics-365-businesscentral.svg", label: "Business Central", href: "/products/dynamics-365-business-central/" },
      { icon: "/img/menu-icons/dynamics-365-commerce.svg", label: "Commerce", href: "/products/microsoft-dynamics-365-commerce/" },
      { icon: "/img/menu-icons/dynamics-365-finance.svg", label: "Finance", href: "/products/microsoft-dynamics-365-finance/" },
      { icon: "/img/menu-icons/dynamics-365-project-management.svg", label: "Project Operations", href: "/products/dynamics-365-project-operations/" },
      { icon: "/img/menu-icons/dynamics-365-supplychainmanagement.svg", label: "Supply Chain Management", href: "/products/dynamics-365-supply-chain-management/" },
    ],
  },
  {
    title: "AI-Enabled CRM",
    desc: "Build lasting customer relationships",
    headerIcon: "/img/aboutus-new/tech-crm-icon.png",
    items: [
      { icon: "/img/menu-icons/dynamics-365-sales.svg", label: "Sales", href: "/products/microsoft-dynamics-365-sales/" },
      { icon: "/img/menu-icons/customer-insights-scalable-logo.svg", label: "Customer Insights", href: "/products/microsoft-dynamics-365/" },
      { icon: "/img/menu-icons/dynamics-365-fieldservice.svg", label: "Field Service", href: "/products/microsoft-dynamics-365-field-service/" },
      { icon: "/img/menu-icons/dynamics-365-customer-service.svg", label: "Customer Service", href: "/products/microsoft-dynamics-365-customer-service/" },
    ],
  },
  {
    title: "Analytics",
    desc: "Unify your data. Turns insight into actions",
    headerIcon: "/img/aboutus-new/tech-analytics-icon.png",
    items: [
      { icon: "/img/menu-icons/microsoft-fabric.png", label: "Microsoft Fabric", href: "/ai-solutions/microsoft-fabric/" },
      { icon: "/img/menu-icons/power-bi.svg", label: "Power BI", href: "/products/microsoft-power-bi/" },
      { icon: "/img/menu-icons/power-automate.svg", label: "Power Automate", href: "/products/microsoft-power-automate/" },
      { icon: "/img/menu-icons/power-apps.svg", label: "Power Apps", href: "/products/microsoft-power-apps/" },
      { icon: "/img/menu-icons/copilate-small.png", label: "Copilot Studio", href: "/products/dynamics-365-copilot/" },
    ],
  },
  {
    title: "AI",
    desc: "Accelerate innovation with trusted AI",
    headerIcon: "/img/aboutus-new/tech-ai-icon.png",
    items: [
      { icon: "/img/menu-icons/azure.svg", label: "Azure AI", href: "/products/microsoft-dynamics-365-ai/" },
      { icon: "/img/menu-icons/copilate-small.png", label: "Copilot for Dynamics 365", href: "/products/dynamics-365-copilot/" },
    ],
  },
  {
    title: "IoT",
    desc: "Connect your physical world to unlock new possibilities",
    headerIcon: "/img/aboutus-new/tech-iot-icon.png",
    items: [{ icon: "/img/menu-icons/iot-hub.svg", label: "Azure IoT", href: "/products/azure-iot-internet-of-things/" }],
  },
  {
    title: "Mixed Reality",
    desc: "Bring new dimensions to productivity",
    headerIcon: "/img/aboutus-new/tech-mixed-reality-icon.png",
    items: [{ icon: "/img/menu-icons/mixed-Reality-icons.svg", label: "Dynamics 365 Mixed Reality", href: "/products/microsoft-dynamics-365/mixed-reality/" }],
  },
];

const methodologies = [
  { icon: "/img/aboutus-new/method-agile-icon.png", title: "Agile", text: "Built for businesses whose requirements evolve as the project progresses. We work in short, focused sprints, so you see working functionality early and can adjust direction based on real feedback as the project unfolds." },
  { icon: "/img/aboutus-new/method-surestep-icon.png", title: "Sure Step", text: "Best suited to organisations with clearly defined, stable requirements from the outset. This structured, phase-based methodology gives you predictable milestones and tight control over scope, budget, and timeline." },
  { icon: "/img/aboutus-new/method-success-icon.png", title: "Success by Design", text: "Microsoft's own framework for Dynamics 365 cloud implementations. We use this approach when a project calls for strict alignment with Microsoft's recommended architecture, environment strategy, and application lifecycle management practices from day one." },
];

const services = [
  { icon: "bi-chat-square-text-fill", title: "Advisory and Consulting", text: "We work with a consultative approach that studies your business, industry, and goals. The guidance you receive is practical, structured, and easy to follow." },
  { icon: "bi-gear-fill", title: "Dynamics 365 Implementation", text: "We ensure every stage of implementation stays consistent through detailed scoping, configuration, data migration, and testing. Every step is explained with clarity so your team stays confident." },
  { icon: "bi-lightbulb-fill", title: "Solutioning", text: "We study your workflows and customer journeys carefully so that we can design systems that support efficiency and scalability." },
  { icon: "bi-cloud-arrow-up-fill", title: "Upgrade", text: "Our upgrade services include careful planning, structured communication, and minimal functional disruption." },
  { icon: "bi-person-video3", title: "Training", text: "Our training programmes are role-based and hands on. Each session empowers your team to feel confident and comfortable with the system." },
  { icon: "bi-headset", title: "Dedicated Support", text: "Support remains proactive, responsive, and handled by real people who understand your business. Every interaction stays human and helpful." },
];

const choices = [
  { title: "Certified Microsoft Partner", text: "500+ projects powered by certified Dynamics 365 experts." },
  { title: "Rich Industry Experience", text: "We carry 14 of experience across 12 different industries." },
  { title: "Agile Global Teams", text: "Onsite and offshore teams work together to support your operations." },
  { title: "Deep Knowledge Across NAV and AX", text: "Our experience dates back to early NAV and AX systems." },
  { title: "Value-Driven Approach", text: "Our hybrid model supports cost efficiency with steady personal attention." },
  { title: "Structured Solution Architecture", text: "Our architects question, analyse, and recommend before they deploy any system." },
  { title: "Full 360-Degree Dynamics Expertise", text: "We bring ERP, CRM, ISVs, and Power Platform under one partner." },
  { title: "Strong Client Relationships", text: "Clients stay with us for more than 5 years on average." },
];

const locations = [
    {
        name: "Canada",
        url: "/canada",
        className: "canada",
        flag: "/images/canada-flag.png",
    },
    {
        name: "USA",
        url: "/usa",
        className: "usa",
        flag: "/images/usa-flag.png",
    },
    {
        name: "United Kingdom",
        url: "/uk",
        className: "uk",
        flag: "/images/uk-flag.png",
    },
    {
        name: "Netherlands",
        url: "/netherlands",
        className: "netherlands",
        flag: "/images/netherlands-flag.png",
    },
    {
        name: "India",
        url: "/india",
        className: "india",
        flag: "/images/india-flag.png",
    },
    {
        name: "Singapore",
        url: "/singapore",
        className: "singapore",
        flag: "/images/singapore-flag.png",
    },
    {
        name: "Australia",
        url: "/australia",
        className: "australia",
        flag: "/images/australia-flag.png",
    },
];


const AboutUsNew = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>About Dynamics Square | Dynamics 365 Business Central Partner</title>
        <meta
          name="description"
          content="Learn about Dynamics Square and explore what makes us unique and one of the most trusted Dynamics 365 Business Central partners in the UK and Europe region."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Hero */}
      <section className={styles.hero}>
        <div className="container">
          <span className={styles.eyebrow}>About Us</span>
          <h1 className={styles.heroTitle}>
            Transforming Businesses with Trusted Microsoft Technology &amp; AI Solutions
          </h1>
          <p className={styles.heroText}>
            Dynamics Square helps organisations solve real operational challenges through Microsoft cloud
            technology and intelligent automation, making businesses more agile, more resilient, and ready to
            compete on their own terms.
          </p>
          <p className={styles.heroSubText}>
            We build the kind of partnership that earns trust project after project, year after year.
          </p>
          <div className={styles.heroImageWrap}>
            <Image
              src="/img/aboutus-new-00.png"
              alt="Dynamics Square team"
              width={1920}
              height={808}
              priority
            />
          </div>
        </div>
      </section>

      {/* Microsoft Solutions Partner */}
      <section className={styles.partnerSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className={styles.statrpadding}>
                <h3>We&apos;re a Microsoft Solutions Partner</h3>
              <p>
                Since 2011, Dynamics Square has held to one belief: Trust. It is the foundation every business
                relationship is built on. As a Microsoft Solutions Partner, we are trusted by 500+ global clients
                for reliable, well-executed Dynamics 365 implementations. Our team of 150+ certified consultants
                with deep industry expertise delivers cloud technology, AI-powered automation, hands-on training,
                and consistent support that drives measurable growth for every organisation we work with.
              </p>
              <div className={styles.statRow}>
                <div>
                  <h4>500+</h4>
                  <span>Clients Worldwide</span>
                </div>
                <div>
                  <h4>150+</h4>
                  <span>Certified Professionals</span>
                </div>
                <div>
                  <h4>14+</h4>
                  <span>Years of Experience</span>
                </div>
              </div>
              </div>
            </div>
             <div className="col-lg-1"></div>
            <div className="col-lg-3 mt-4 mt-lg-0">
              <div className={styles.partnerBadge}>
                <Image
                  src="/img/aboutus-new/partner-badge.png"
                  alt="Dynamics Square - Microsoft Solutions Partner"
                  width={330}
                  height={400}
                />
              </div>
            </div>
             <div className="col-lg-1"></div>
          </div>
        </div>
      </section>

      {/* Trusted / Mission Vision */}
      <section className={styles.trustedSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <h2>Your Trusted Microsoft Solutions Partner in the UK</h2>
              <p>
                Relationships are built on one commodity that never loses its value: trust. Our motto has stayed
                the same since day one: become the most preferred technology partner in global IT infrastructure by
                building relationships that are strong enough to carry businesses through real change.
              </p>
              <p>
                Trust builds gradually, through every honest conversation, every commitment kept, and every problem
                solved without excuses. That is the standard we hold ourselves to on every engagement, in the UK
                and everywhere else we operate.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-md-6">
                  <div className={styles.mvCard}>
                    <h5>
                      <Image src="/img/aboutus-new-03.png" alt="Mission" width={32} height={32} /> Mission
                    </h5>
                    <p>
                      To empower every business we work with to achieve more and meet the demands of a changing
                      market, through Microsoft Business Applications such as Dynamics 365 Business Central,
                      Finance, Sales, and Supply Chain Management, hosted on Microsoft Azure, a secure and
                      enterprise-grade cloud platform.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className={styles.mvCard}>
                    <h5>
                       <Image src="/img/aboutus-new-04.png" alt="Vision" width={32} height={32} /> Vision
                    </h5>
                    <p>
                      To simplify and automate business processes, sharpen customer experience, and turn scattered
                      data into meaningful insight by integrating Microsoft Fabric, AI, and Microsoft Copilot into
                      everyday operations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey timeline */}
      <section className={styles.journeySection}>
        <div className="container-fluid g-0">
          <div className={styles.journeyImageWrap}>
            <Image
              src="/img/aboutus-new-05.png"
              alt="Our Journey So Far - Dynamics Square timeline from 2011 to 2025"
              width={1920}
              height={900}
              sizes="100vw"
            />
            <div className={`container ${styles.journeyOverlay}`}>
              <h2 className={styles.journeyHeading}>Our Journey So Far</h2>
              <blockquote className={styles.journeyQuote}>
                <span className={styles.journeyQuoteMark} aria-hidden="true">&ldquo;</span>
                We never aimed to work as just another technology provider. Our intention has always
                centred around careful understanding, honest guidance, and steady partnership.
                <span className={styles.journeyQuoteMark} aria-hidden="true">&rdquo;</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      {/* Team */}
      <section className={styles.teamSection}>
        <div className="container">
          <h2>Meet the People Behind Dynamics Square</h2>
          <p>
            Dynamics Square is led by a team of experienced professionals who show up for our clients long after
            the contract is signed. Every one of them carries the same belief: technology only earns trust when the
            people behind it do the work it deserves.
          </p>
          <div className={styles.teamSlider}>
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={30}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1300: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
            >
              {team.map((member) => (
                <SwiperSlide key={member.name}>
                  <div className={styles.teamCard}>
                    <div className={styles.imgWrap}>
                      {member.img ? (
                        <Image src={member.img} alt={member.name} fill sizes="238px" />
                      ) : (
                        <div className="d-flex align-items-center justify-content-center h-100 bg-light">
                          <i className="bi bi-person-circle" style={{ fontSize: "60px", color: "#7a3fa0" }}></i>
                        </div>
                      )}
                    </div>
                    <div className={styles.teamMeta}>
                      <h4>{member.name}</h4>
                      <span>{member.role}</span>
                    </div>
                    <p className={styles.quote}>{member.quote}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.teamCallout}>
            <div>
              <h5>Dynamics Square Has a Team That Truly Cares</h5>
              <p>
                Behind every solution stands a group of people who invest fully in the success of your business.
                Our team includes support engineers who lead with empathy, industry-specific consultants, NAV, BC,
                and AX specialists, and solution architects who focus on solving problems that matter. That
                commitment holds on every project, whatever its size.
              </p>
            </div>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
              Speak To Our Expert Today <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Tech grid */}
      <section className={styles.techSection}>
        <div className="container">
          <h2>Accelerating Your Digital Transformation Journey</h2>
          <div className="row g-3">
            {[0, 1, 2].map((col) => (
              <div className="col-md-6 col-lg-4 d-flex flex-column gap-3" key={col}>
                {[techGroups[col], techGroups[col + 3]].map((group) => (
                  <div className={styles.techCard} key={group.title}>
                    <div className={styles.techCardHead}>
                      <div>
                        <h5>{group.title}</h5>
                        <p>{group.desc}</p>
                      </div>
                      {group.headerIcon ? (
                        <Image
                          src={group.headerIcon}
                          alt=""
                          width={44}
                          height={44}
                          aria-hidden="true"
                          className={styles.techHeaderIcon}
                        />
                      ) : null}
                    </div>
                    <div className={styles.techItemsGrid}>
                      {group.items.map((item, idx) => {
                        const isLastOdd = group.items.length % 2 === 1 && idx === group.items.length - 1;
                        return (
                          <Link
                            href={item.href}
                            key={item.label}
                            className={`${styles.techItem} ${isLastOdd ? styles.techItemFull : ""}`}
                          >
                            <Image src={item.icon} alt={item.label} width={28} height={28} />
                            <span>{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className={styles.deliverSection}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h4>What We Deliver</h4>
              <h5>Complete Microsoft Business Solutions</h5>
              <p>
                We provide a wide ecosystem of solutions that bring structure into business operations. Our
                delivery covers:
              </p>
              <ul>
                <li>Dynamics 365 ERP and CRM</li>
                <li>Power Platform, including Power Apps and Power BI</li>
                <li>Azure cloud services</li>
                <li>Microsoft 365, covering communication and collaboration</li>
                <li>ISV integrations across industries</li>
                <li>Copilot AI features for productivity and planning</li>
              </ul>
              <p>
                Each service forms one part of a larger structure that supports business stability and growth. We
                guide clients through planning, setup, development, deployment, and support, giving each
                organisation a clear path forward.
              </p>
              <Link href="/products/dynamics-365-business-central/" className={styles.btnRed}>
                Learn What Business Central Is <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className={styles.ringWrap}>
                <Image
                  src="/img/aboutus-new/deliver-ring.png"
                  alt="Dynamics Square solution ring: Power Platform, Azure Cloud, Microsoft 365, ISV Integrations, Copilot AI, Dynamics 365"
                  width={566}
                  height={634}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 1 */}
      <section className={styles.ctaBanner}>
        <Image
          src="/img/aboutus-new/cta-bg-1.png"
          alt=""
          width={820}
          height={330}
          className={styles.ctaBannerPhoto}
          aria-hidden="true"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Start Your Journey with Dynamics Square</h2>
              <p>You deserve a partner who listens, guides, builds, and stays with you throughout your journey.</p>
              <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
                Talk to Our Experts <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className={styles.methodSection}>
        <div className="container">
          <div className={styles.methodTop}>
            <div className={styles.methodIntro}>
              <h2>How Do We Implement: Our Methodology</h2>
              <p>
                The right implementation method depends on your requirements, your timeline, and how your
                organisation operates. We match the method to your business.
              </p>
              <p>
                Before we recommend a methodology, we study your business model, the complexity of your
                requirements, and how much flexibility your project timeline allows for. We work across three
                proven implementation methodologies and choose the one that fits your situation.
              </p>
            </div>
            <div className={styles.methodChevronCol}>
              <div className={styles.chevronTrack}>
                <div className={styles.chevron}></div>
                <div className={styles.chevron}></div>
                <div className={styles.chevron}></div>
                <div className={styles.chevron}>
                  <i className="bi bi-check-lg"></i>
                </div>
              </div>
              <span className={styles.methodStemDown}></span>
            </div>
          </div>

          <div className={styles.methodFrame}>
            <span className={`${styles.methodFrameLine} ${styles.methodFrameLineTop}`}></span>
            <span className={`${styles.methodFrameLine} ${styles.methodFrameLineBottom}`}></span>
            <div className="row g-4">
              {methodologies.map((m) => (
                <div className={`col-md-4 ${styles.methodCol}`} key={m.title}>
                  <div className={styles.methodCard}>
                    <Image src={m.icon} alt="" width={40} height={40} aria-hidden="true" />
                    <h5>{m.title}</h5>
                    <p>{m.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.methodNote}>
            <span className={styles.methodStemUp}></span>
            <div className={styles.methodCheckBubble}>
              <i className="bi bi-check-lg"></i>
            </div>
            <p>
              We walk you through which methodology fits your situation before the project begins, and we explain
              the reasoning in plain terms, so your team understands exactly what to expect at each stage.
            </p>
            <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
              Speak To Our Expert Today <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2>Services That Support Every Stage of Your Growth</h2>
              <p>
                As a leading Dynamics 365 consultants, our services are designed to guide your transformation with
                care and structure. Every engagement stays transparent, collaborative, and aligned with your
                expectations.
              </p>
            </div>
          </div>
          <div className="row">
            {services.map((s) => (
              <div className="col-md-6 col-lg-4" key={s.title}>
                <div className={styles.serviceCard}>
                  <i className={`bi ${s.icon}`}></i>
                  <h5>{s.title}</h5>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA 2 */}
      <section className={styles.ctaBanner}>
        <Image
          src="/img/aboutus-new/cta-bg-2.png"
          alt=""
          width={820}
          height={330}
          className={styles.ctaBannerPhoto}
          aria-hidden="true"
        />
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h2>Start Your Journey with Dynamics Square</h2>
              <p>
                You deserve a partner who listens, guides, builds, and stays with you well past go-live. That is
                the standard we set for ourselves, and it is the standard we invite you to hold us to.
              </p>
              <Link href="#exampleModal" data-bs-toggle="modal" className={styles.btnRed}>
                Talk to Our Experts <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Preferred choice */}
      <section className={styles.choiceSection}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2>What Makes Dynamics Square a Preferred Choice</h2>
              <p>Businesses across sectors choose Dynamics Square for reasons that go beyond price.</p>
              <div className="row">
                {choices.map((c) => (
                  <div className="col-sm-6" key={c.title}>
                    <div className={styles.checkItem}>
                      <i className="bi bi-check-circle-fill"></i>
                      <div>
                        <h6>{c.title}</h6>
                        <p>{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact-us" className={styles.btnRed}>
                Let&apos;s Get You Started <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
            <div className="col-lg-6 mt-5 mt-lg-0">
              <div className={styles.choiceImageWrap}>
                <Image
                  src="/img/aboutus-new/team-celebrating.png"
                  alt="Dynamics Square team celebrating"
                  width={420}
                  height={520}
                  style={{ width: "100%", height: "auto", borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presence worldwide */}
      <section className={styles.globalPresence}>
  <div className="container">
    <h2>Our Presence Worldwide</h2>
    <p>Delivering Microsoft-led transformation across border, helping businesses grow globally.</p>
  </div>
  <div className="container px-0">

    <div className={styles.globalMap}>

      {/* Canada */}
      <a
        href="/canada"
        className={`${styles.locationPin} ${styles.canada}`}
        aria-label="Canada"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-canada.png"
              alt="Canada"
            />
          </div>
        </div>
      </a>


      {/* USA */}
      <a
        href="/usa"
        className={`${styles.locationPin} ${styles.usa}`}
        aria-label="USA"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-usa.png"
              alt="USA"
            />
          </div>
        </div>
      </a>


      {/* UK */}
      <a
        href="/uk"
        className={`${styles.locationPin} ${styles.uk}`}
        aria-label="United Kingdom"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-uk.png"
              alt="United Kingdom"
            />
          </div>
        </div>
      </a>


      {/* Netherlands */}
      <a
        href="/netherlands"
        className={`${styles.locationPin} ${styles.netherlands}`}
        aria-label="Netherlands"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-netherlands.png"
              alt="Netherlands"
            />
          </div>
        </div>
      </a>


      {/* India */}
      <a
        href="/india"
        className={`${styles.locationPin} ${styles.india}`}
        aria-label="India"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/images/locations/india.svg"
              alt="India"
            />
          </div>
        </div>
      </a>


      {/* Singapore */}
      <a
        href="/singapore"
        className={`${styles.locationPin} ${styles.singapore}`}
        aria-label="Singapore"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-singapore.png"
              alt="Singapore"
            />
          </div>
        </div>
      </a>


      {/* Australia */}
      <a
        href="/australia"
        className={`${styles.locationPin} ${styles.australia}`}
        aria-label="Australia"
      >
        <div className={styles.pinBody}>
          <div className={styles.pinIcon}>
            <img
              src="/img/aboutus-new/flag-australia.png"
              alt="Australia"
            />
          </div>
        </div>
      </a>

    </div>
  </div>
</section>

    </div>
  );
};

export default AboutUsNew;
