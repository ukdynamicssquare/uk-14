import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PageSeo from "./PageSeo";

/**
 * Shared layout for gated white paper landing pages (hero, walk-through,
 * summary, key takeaways, comparison table, FAQs, related papers, CTA and
 * the registration modal). Each page under pages/white-papers/ passes its
 * own copy; on submit the visitor is sent to `downloadPath`.
 */
const WhitePaperLanding = ({
  seo,
  hero,
  walkThrough,
  about,
  takeaways,
  table,
  faqs,
  related,
  cta,
  downloadPath,
}) => {
  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [errors, setErrors] = useState({});
  const [defaultCountryCode, setDefaultCountryCode] = useState("gb");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company_name: "",
    phone: "",
  });
  const form = useRef();

  useEffect(() => {
    fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch IP information");
        return response.json();
      })
      .then((data) => setDefaultCountryCode(data.country_code.toLowerCase()))
      .catch(() => setDefaultCountryCode("gb"));
  }, []);

  const isValidPhoneNumber = (phone) => /^\d{10,15}$/.test(phone);

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    if (!emailPattern.test(formData.email)) newErrors.email = "Invalid email address";
    if (!formData.company_name) newErrors.company_name = "Company Name is required";
    if (!formData.phone) newErrors.phone = "Phone Number is required";
    else if (!isValidPhoneNumber(formData.phone)) newErrors.phone = "Invalid phone number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setDisplay(true);
    try {
      await emailjs.sendForm("service_4voumj7", "template_68k24ku", form.current, "mJ38M6WTmU7KRrtuZ");
      setFormData({ name: "", email: "", company_name: "", phone: "" });
      router.push(downloadPath);
    } catch (error) {
      console.error(error.text);
    } finally {
      setDisplay(false);
    }
  };

  const DownloadButton = ({ label }) => (
    <Link href="#exampleModal1" data-bs-toggle="modal" className="btn-get-started scrollto">
      <span>{label}</span>
    </Link>
  );

  return (
    <>
      <PageSeo
        type="WebPage"
        title={seo.title}
        description={seo.description}
        image={hero.image}
        imageAlt={hero.alt}
        faqs={faqs}
      />

      <section className="Solution-banner hero-1 hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mobile-1 align-self-center">
              <h1>{hero.title}</h1>
              <p>{hero.intro}</p>
              <div className="text-center text-lg-start">
                <DownloadButton label="Download now!" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center text-center">
              <Image src={hero.image} alt={hero.alt} width={1000} height={800} priority />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-8">
              <header className="section-header">
                <h2>The White Paper will Walk you Through</h2>
              </header>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                {walkThrough.left.map((item, i) => (
                  <div className="left-let" key={item}>
                    <h3>{item}</h3>
                    {i < walkThrough.left.length - 1 && <div className="shape"></div>}
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="text-center remove-pre">
                <Image src={walkThrough.image} alt={walkThrough.alt} width={487} height={613} />
              </div>
            </div>
            <div className="col-lg-3 align-self-center">
              <div className="inner-l">
                {walkThrough.right.map((item, i) => (
                  <div className="left-rit" key={item}>
                    <h3>{item}</h3>
                    {i < walkThrough.right.length - 1 && <div className="shape-l"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aboot-erp">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="pic-ll">
                <Image src="/img/erp-left-about.png" alt={about.title} width={337} height={460} />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="aboot-erp-content">
                <h2 className="wp-h3">{about.title}</h2>
                {about.body}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wp-takeaways">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>{takeaways.title}</h2>
                <p>{takeaways.intro}</p>
              </header>
            </div>
          </div>
          <div className="row g-4 mb-4">
            {takeaways.stats.map((s) => (
              <div className="col-md-4" key={s.value}>
                <div className="wp-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="row g-4">
            {takeaways.items.map((item, i) => (
              <div className="col-md-6 col-lg-4 d-flex" key={item.title}>
                <div className="wp-card">
                  <span className="wp-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wp-table-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>{table.title}</h2>
                <p>{table.intro}</p>
              </header>
            </div>
          </div>
          <div className="table-responsive wp-table">
            <table className="table align-middle mb-0">
              <thead>
                <tr>
                  {table.head.map((h) => (
                    <th scope="col" key={h}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row) => (
                  <tr key={row[0]}>
                    {row.map((cell, i) => (i === 0 ? <th scope="row" key={i}>{cell}</th> : <td key={i}>{cell}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {table.note && <p className="wp-note">{table.note}</p>}
        </div>
      </section>

      <section className="wp-faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <header className="section-header">
                <h2>Frequently Asked Questions</h2>
              </header>
              <div className="accordion" id="wpFaq">
                {faqs.map((f, i) => (
                  <div className="accordion-item" key={f.question}>
                    <h3 className="accordion-header" id={`wpFaqH${i}`}>
                      <button
                        className={`accordion-button${i === 0 ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#wpFaqC${i}`}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={`wpFaqC${i}`}
                      >
                        {f.question}
                      </button>
                    </h3>
                    <div
                      id={`wpFaqC${i}`}
                      className={`accordion-collapse collapse${i === 0 ? " show" : ""}`}
                      aria-labelledby={`wpFaqH${i}`}
                      data-bs-parent="#wpFaq"
                    >
                      <div className="accordion-body">{f.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wp-related">
        <div className="container">
          <header className="section-header">
            <h2>More White Papers for UK Finance Leaders</h2>
          </header>
          <div className="row g-4 justify-content-center">
            {related.map((r) => (
              <div className="col-md-6 col-lg-5 d-flex" key={r.href}>
                <Link href={r.href} className="wp-related-card">
                  <Image src={r.image} alt={r.title} width={487} height={613} />
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.text}</p>
                    <span className="wp-read">Read the white paper <i className="bi bi-arrow-right"></i></span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="call_to_action call_to_action-height">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="call_to_action-right over-img">
                <img src="/img/MaskGroup8.png" alt="Download the white paper" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="call_to_action-left call_to_action-lefts">
                <h3>{cta.title}</h3>
                <p>{cta.text}</p>
                <div className="m-o-t m-o-t-inde">
                  <DownloadButton label="Get a Copy now!" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="modal fade form-main-model" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="exampleModalLabel">Register For White Paper</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <p>Fill the form and receive it straight to your inbox.</p>
            <div className="modal-body">
              <div className="main-form-wrper">
                <form ref={form} onSubmit={sendEmail}>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="*Full Name" name="name" value={formData.name} onChange={handleChange} />
                    {errors.name && <span className="error">{errors.name}</span>}
                    <input type="hidden" value={router.asPath} name="url" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="*Work Email" name="email" value={formData.email} onChange={handleChange} />
                    {errors.email && <span className="error">{errors.email}</span>}
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="*Company Name" name="company_name" value={formData.company_name} onChange={handleChange} />
                    {errors.company_name && <span className="error">{errors.company_name}</span>}
                  </div>
                  <div className="mb-3">
                    <PhoneInput
                      inputStyle={{ width: "100%", height: "auto" }}
                      country={defaultCountryCode}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      inputClass="form-control"
                      inputProps={{ name: "phone", required: true, autoFocus: false }}
                      countryCodeEditable={false}
                      excludeCountries={["pk"]}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                  </div>
                  <div className="mb-3 form-check">
                    <input type="checkbox" checked readOnly className="form-check-input" />
                    <label className="form-check-label">
                      I agree to the
                      <a href="/privacy-policy/" target="_blank"> Privacy Policy </a>
                      and
                      <a href="/terms-of-use/" target="_blank"> Terms of Service </a>.
                    </label>
                  </div>
                  <div className="spinner-wrapper spinner-wrapper-custom wp-submit">
                    <button type="submit" className="btn btn-primary fomr-submit" disabled={display}>
                      {display ? "Submitting..." : "Submit"}
                    </button>
                    {display && (
                      <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        form .error { color: #bb2b36; font-size: 12px; margin-top: 0.25em; }
        .wp-submit { display: flex; align-items: center; gap: 15px; }
        .aboot-erp-content .wp-h3 { font-size: 28px; color: var(--color-blue); font-weight: 700; margin-bottom: 16px; }
        .aboot-erp-content a, .wp-table a, .wp-card a { color: var(--color-red); text-decoration: underline; text-underline-offset: 2px; }
        .wp-takeaways, .wp-faq { background: var(--color-bg); }
        .wp-stat { background: var(--color-blue); color: #fff; border-radius: 12px; padding: 26px 24px; height: 100%; }
        .wp-stat strong { display: block; font-size: 36px; line-height: 1.1; margin-bottom: 8px; }
        .wp-stat span { font-size: 15px; opacity: 0.9; }
        .wp-card { background: #fff; border-radius: 12px; padding: 26px 24px; border: 1px solid #e3e9f0; box-shadow: 0 6px 20px rgba(29, 53, 87, 0.06); width: 100%; }
        .wp-card h3 { font-size: 18px; color: var(--color-blue); font-weight: 700; margin: 10px 0 10px; }
        .wp-card p { margin: 0; font-size: 15px; }
        .wp-num { display: inline-block; font-weight: 800; color: var(--color-red); font-size: 14px; letter-spacing: 1px; }
        .wp-table { border-radius: 12px; border: 1px solid #e3e9f0; box-shadow: 0 6px 20px rgba(29, 53, 87, 0.06); }
        .wp-table table th, .wp-table table td { padding: 16px 18px; font-size: 15px; vertical-align: top; }
        .wp-table thead th { background: var(--color-blue); color: #fff; font-weight: 600; border: 0; }
        .wp-table tbody th { color: var(--color-blue); font-weight: 600; min-width: 200px; }
        .wp-table tbody tr:nth-child(even) { background: var(--color-bg); }
        .wp-note { font-size: 13px; margin-top: 12px; color: var(--color-grey); }
        .wp-faq .accordion-item { border: 1px solid #e3e9f0; border-radius: 10px; margin-bottom: 12px; overflow: hidden; }
        .wp-faq .accordion-header { margin: 0; }
        .wp-faq .accordion-button { font-weight: 600; color: var(--color-blue); font-size: 17px; }
        .wp-faq .accordion-button:not(.collapsed) { background: #fff; box-shadow: none; color: var(--color-red); }
        .wp-faq .accordion-button:focus { box-shadow: none; }
        .wp-related-card { display: flex; gap: 20px; align-items: center; background: #fff; border: 1px solid #e3e9f0; border-radius: 12px; padding: 18px; width: 100%; box-shadow: 0 6px 20px rgba(29, 53, 87, 0.06); transition: transform 0.2s; }
        .wp-related-card:hover { transform: translateY(-3px); }
        .wp-related-card img { width: 110px; height: auto; flex-shrink: 0; border-radius: 8px; }
        .wp-related-card h3 { font-size: 18px; color: var(--color-blue); font-weight: 700; margin-bottom: 6px; }
        .wp-related-card p { font-size: 14px; color: var(--color-grey); margin-bottom: 8px; }
        .wp-read { color: var(--color-red); font-weight: 600; font-size: 14px; }
        @media (max-width: 575px) {
          .wp-related-card { flex-direction: column; text-align: center; }
          .wp-stat strong { font-size: 30px; }
        }
      `}</style>
    </>
  );
};

// Business Central white paper series; each page links to the other two.
export const BC_WHITE_PAPERS = [
  {
    href: "/white-papers/sage-200-to-business-central/",
    image: "/img/sage-200-to-business-central-white-paper-cover.png",
    title: "Sage 200 to Business Central: The UK Migration Business Case",
    text: "Costs, data decisions and a 12-week readiness plan for finance directors running Sage 200.",
  },
  {
    href: "/white-papers/netsuite-to-business-central/",
    image: "/img/netsuite-to-business-central-white-paper-cover.png",
    title: "Leaving NetSuite: A Business Central Renewal and Migration Playbook",
    text: "A 180-day runway, a fair fit test and a GBP cost model for UK teams approaching a NetSuite renewal.",
  },
  {
    href: "/white-papers/business-central-implementation-cost/",
    image: "/img/business-central-implementation-cost-white-paper-cover.png",
    title: "What Business Central Really Costs: A UK Implementation Budget Planner",
    text: "A four-layer budget model, a complexity scorecard and three worked company profiles in GBP.",
  },
];

export const relatedWhitePapers = (currentHref) => BC_WHITE_PAPERS.filter((p) => p.href !== currentHref);

export default WhitePaperLanding;
