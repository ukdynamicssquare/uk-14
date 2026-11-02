import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/**
 * Inline white paper registration form (same EmailJS template and fields as
 * the modal in WhitePaperLanding). On success the visitor goes to
 * `downloadPath`. `classes` maps the page's CSS module class names onto the
 * form parts so each page can style it.
 */
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;

const WhitePaperForm = ({ downloadPath, classes = {}, submitLabel = "Get the free white paper", idPrefix = "wp" }) => {
  const router = useRouter();
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [country, setCountry] = useState("gb");
  const [formData, setFormData] = useState({ name: "", email: "", company_name: "", phone: "" });

  useEffect(() => {
    fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch IP information");
        return response.json();
      })
      .then((data) => setCountry(data.country_code.toLowerCase()))
      .catch(() => setCountry("gb"));
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim()) e.name = "Please enter your full name";
    if (!EMAIL_PATTERN.test(formData.email)) e.email = "Please use your work email address";
    if (!formData.company_name.trim()) e.company_name = "Please enter your company name";
    if (!/^\d{10,15}$/.test(formData.phone)) e.phone = "Please enter a valid phone number";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: "" });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);
    try {
      await emailjs.sendForm("service_4voumj7", "template_68k24ku", form.current, "mJ38M6WTmU7KRrtuZ");
      router.push(downloadPath);
    } catch (error) {
      setErrors({ form: "Something went wrong. Please try again." });
      console.error(error.text);
    } finally {
      setSending(false);
    }
  };

  const field = (name, label, type, autoComplete) => (
    <div className={classes.field}>
      <label htmlFor={`${idPrefix}-${name}`} className={classes.label}>{label}</label>
      <input
        id={`${idPrefix}-${name}`}
        type={type}
        name={name}
        autoComplete={autoComplete}
        className={`${classes.input}${errors[name] ? ` ${classes.inputError}` : ""}`}
        value={formData[name]}
        onChange={handleChange}
        aria-invalid={errors[name] ? "true" : "false"}
        aria-describedby={errors[name] ? `${idPrefix}-${name}-err` : undefined}
      />
      {errors[name] && <span id={`${idPrefix}-${name}-err`} className={classes.error}>{errors[name]}</span>}
    </div>
  );

  return (
    <form ref={form} onSubmit={sendEmail} noValidate className={classes.form}>
      <input type="hidden" value={router.asPath} name="url" />
      {field("name", "Full name", "text", "name")}
      {field("email", "Work email", "email", "email")}
      {field("company_name", "Company", "text", "organization")}
      <div className={classes.field}>
        <label htmlFor={`${idPrefix}-phone`} className={classes.label}>Phone</label>
        <PhoneInput
          country={country}
          value={formData.phone}
          onChange={(phone) => {
            setFormData({ ...formData, phone });
            setErrors((prev) => ({ ...prev, phone: "" }));
          }}
          inputClass={classes.phoneInput}
          containerClass={classes.phone}
          inputProps={{ name: "phone", id: `${idPrefix}-phone`, autoComplete: "tel" }}
          countryCodeEditable={false}
          excludeCountries={["pk"]}
        />
        {errors.phone && <span className={classes.error}>{errors.phone}</span>}
      </div>
      <button type="submit" className={classes.submit} disabled={sending}>
        {sending ? "Sending…" : submitLabel}
        {!sending && <i className="bi bi-download" aria-hidden="true"></i>}
      </button>
      {errors.form && <span className={classes.error} role="alert">{errors.form}</span>}
      <p className={classes.legal}>
        By submitting you agree to our <a href="/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a> and{" "}
        <a href="/terms-of-use/" target="_blank" rel="noopener">Terms of Service</a>.
      </p>
    </form>
  );
};

export default WhitePaperForm;
