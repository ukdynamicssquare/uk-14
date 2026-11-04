import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { anySubmissionSucceeded } from "../helpers/anySubmissionSucceeded";
import { useRouter } from "next/router";
// import FormFooterSubscriber from './FormFooterSubscriber';
import Image from "next/image";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import FormNewUIFooter from "./FormNewUIFooter";

const FooterNew = () => {
  const [display, setDisplay] = useState("dspn");
  const [closeModal, setCloseModal] = useState(false);
  function handleCloseModal() {
    document.getElementById("exampleModal").classList.remove("show", "d-block");
    document
      .querySelectorAll(".modal-backdrop")
      .forEach((el) => el.classList.remove("modal-backdrop"));
  }
  const router = useRouter();
  const form = useRef();
  const [currentPageUrl, setCurrentPageUrl] = useState("");
  const [defaultCountryName, setDefaultCountryName] = useState(""); // Default to 'us'
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyname: "",
    message: "",
    formtag: "CTA Form",
    defaultCountryName: "",
    // job: '',
    // service: '',
    currentPageUrl: "",
  });

  const [defaultCountryCode, setDefaultCountryCode] = useState("gb"); // Default to 'us'

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  /*auto fetch*/
  useEffect(() => {
    // Fetch IP information when the component mounts
    fetchCountryCodeByIP();
  }, []);

  const fetchCountryCodeByIP = () => {
    fetch(
      `https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`,
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch IP information");
        }
        return response.json();
      })
      .then((data) => {
        let countryCode = data.country_code.toLowerCase();
        let countryName = data.country_name;
        console.log("Country Code:", countryCode); //
        setDefaultCountryCode(countryCode);
        setDefaultCountryName(countryName);
        console.log("Default Country Code:", defaultCountryCode);
      })
      .catch((error) => {
        console.error("Error fetching IP information:", error);
        setDefaultCountryCode("gb");
      });
  };

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, currentPageUrl }));
  }, [currentPageUrl]);

  useEffect(() => {
    setFormData((prevFormData) => ({ ...prevFormData, defaultCountryName }));
  }, [defaultCountryName]);

  useEffect(() => {
    setCurrentPageUrl(window.location.href);
    setDefaultCountryName(defaultCountryName);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error message for the field being edited
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: "" }));
  };

  // const handlePhoneChange = (e) => {
  //   const { value } = e.target;

  //   const cleanedValue = value.replace(/\D/g, '');

  //   const truncatedValue = cleanedValue.slice(0, 13);
  //   setFormData({ ...formData, phone: truncatedValue });

  //   setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        const isSuccess = await anySubmissionSucceeded(
          emailjs.sendForm("service_x0eo9w8", "template_e2eswsj", e.target, "xIFtTfBj6NR498Plv"),
          fetch("https://mailserviceportal.onrender.com/api/form/tpl_6aeb072bd50bb4676b8d4d87", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }),
        );
        if (isSuccess) {
          console.log("Form submitted successfully");
          console.log("Form Data:", formData);
          // Clear form data after successful submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            companyname: "",
            message: "",
            // job: '',
            // service: '',
            currentPageUrl: "",
            defaultCountryName: "",
          });
          setTimeout(() => {
            // router.push('/thank-you/');
            window.location.href = "/thank-you/";
          }, 300);
        } else {
          console.error("Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setSubmitting(false);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.companyname.trim()) {
      errors.companyname = "Company name is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    // if (!formData.job.trim()) {
    //   errors.job = 'Job title is required';
    // }
    // if (!formData.service.trim()) {
    //   errors.service = 'Service selection is required';
    // }
    return errors;
  };

  const isValidEmail = (email) => {
    // Basic email format validation
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };

  return (
    <>
      {!closeModal && (
        <div
          className="modal fade form-main-model"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title" id="exampleModalLabel">
                  Request Callback
                </h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
                <p></p>
              </div>
              <p>
                Please complete the form below and we will be in touch or{" "}
                <a href="tel:+442037697689" target="_self" rel="">
                  book a call
                </a>{" "}
                with one of our Microsoft consultants.
              </p>
              <div className="modal-body">
                <div className="main-form-wrper">
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <input
                        type="hidden"
                        name="currentPageUrl"
                        value={currentPageUrl}
                      />
                      <input type="hidden" value="CTA Form" name="formtag" />
                      {errors.name && (
                        <div className="text-danger">{errors.name}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="*Work Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <div className="text-danger">{errors.email}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="*Company Name"
                        name="companyname"
                        value={formData.companyname}
                        onChange={handleChange}
                      />
                      {errors.companyname && (
                        <div className="text-danger">{errors.companyname}</div>
                      )}
                    </div>
                    <div className="mb-3">
                      {/* <input
                        type="tel"
                        className="form-control"
                        placeholder="*Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                      /> */}
                      <PhoneInput
                        inputStyle={{ width: "100%", height: "auto" }}
                        country={defaultCountryCode} // Set default country code
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        inputClass="form-control" // CSS class for the input
                        inputProps={{
                          name: "phone",
                          required: true,
                          autoFocus: false,
                          onBlur: () => {
                            if (formData.phone.trim() !== "") {
                              // Check if phone number is not empty before validation
                              if (!isValidPhoneNumber(formData.phone)) {
                                setErrors({
                                  ...errors,
                                  phone: "Invalid phone number format",
                                });
                              } else {
                                delete errors.phone; // Clear error if phone number is valid
                              }
                            } else {
                              delete errors.phone; // Clear error if phone number is empty
                            }
                          },
                        }}
                        // onlyCountries={['us', 'ca', 'mx', 'gb']}
                        countryCodeEditable={false}
                        excludeCountries={["pk"]}
                      />
                      <input
                        type="hidden"
                        value={defaultCountryName}
                        name="countryName"
                      />
                      {errors.phone && (
                        <div className="text-danger">{errors.phone}</div>
                      )}
                    </div>

                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        placeholder="*How Can We Help You?"
                        rows="3"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      {errors.message && (
                        <div className="text-danger">{errors.message}</div>
                      )}
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        checked
                        readOnly
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label">
                        I agree to the
                        <a href="/privacy-policy/" target="_blank">
                          {" "}
                          Privacy Policy{" "}
                        </a>
                        and
                        <a href="/terms-of-use/" target="_blank">
                          {" "}
                          Terms of Service{" "}
                        </a>
                        .
                      </label>
                    </div>

                    <div className="spiner-wrper">
                      <button
                        type="submit"
                        className="btn btn-primary fomr-submit"
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </button>
                      {submitting && (
                        <div
                          className="spinner-border text-primary"
                          role="status"
                        ></div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <section id="services" className="services mo-top-30">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row bbb-colooer">
                <div className="col-lg-5 align-self-center">
                  <div className="foot-tag-head">
                    <h3>Let’s build the future of your business—together!</h3>
                    <p>
                      The right technology can change everything, and Dynamics
                      Square ensures your business gets the tools it needs to
                      succeed. Take the first step towards smarter solutions
                      now!
                    </p>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="fg-custom">
                    <FormNewUIFooter />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer footer-pink">
        <div className="footer-top top-pd-2020">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-lg-2 footer-info">
                <Link href="/" className="logo d-flex align-items-center">
                  <img
                    src="/img/dynamics_square_tm_logo_footer.svg"
                    alt="Dynamics Square TM Logo"
                    style={{
                      marginBottom: "20px",
                      height: "21px",
                      width: "auto",
                    }}
                    width={301}
                    height={21}
                  />
                </Link>
                <p>
                  Dynamics Square is UK's leading Microsoft Solutions Partner
                  that caters to the needs of organisations who can source
                  next-gen Microsoft Business Apps from our highly skilled
                  Microsoft consultants.
                </p>
                <div className="addre-new">
                  <div
                    className="award-ssd"
                    style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}
                  >
                    <img
                      src="/img/microsoft-partner-footer.png"
                      alt="microsoft-partner"
                      className="footer-img"
                      width={150}
                      height={150}
                    />
                    <br />
                  </div>
                  {/* <div className="contact-list">
                    <div className="icons-left">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="content-right">
                      Kemp House, 124 City Road,London, <br />EC1V 2NX, U.K.
                    </div>
                  </div> */}
                  {/* <div className="contact-list">
                    <div className="icons-left">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="content-right">
                      <a target="_self" rel="" href="tel:+442037697689">
                        + 44 203 769 7689
                      </a>
                    </div>
                  </div>
                  <div className="contact-list">
                    <div className="icons-left">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="content-right">info@dynamicssquare.co.uk</div>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-2 footer-links">
                <p>Products</p>
                <ul>
                  <li>
                    <a href="#">Business Central</a>
                  </li>
                  <li>
                    <a href="#">Finance &amp; Operations</a>
                  </li>
                  <li>
                    <a href="#">Sales (CRM)</a>
                  </li>
                  <li>
                    <a href="#">Customer Service</a>
                  </li>
                  <li>
                    <a href="#">Field Service</a>
                  </li>
                  <li>
                    <a href="#">Supply Chain</a>
                  </li>
                  <li>
                    <a href="#">Power Platform</a>
                  </li>
                  <li>
                    <a href="#">Copilot &amp; AI Agents</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 footer-links">
                <p>Services</p>
                <ul>
                  <li>
                    <a href="#">Implementation</a>
                  </li>
                  <li>
                    <a href="#">Migration &amp; Upgrade</a>
                  </li>
                  <li>
                    <a href="#">Support &amp; Managed Svcs</a>
                  </li>
                  <li>
                    <a href="#">Consulting</a>
                  </li>
                  <li>
                    <a href="#">Licensing</a>
                  </li>
                  <li>
                    <a href="#">Training</a>
                  </li>
                  <li>
                    <a href="#">D365 Health Check</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 footer-links">
                <p>Industries</p>
                <ul>
                  <li>
                    <a href="#">Manufacturing</a>
                  </li>
                  <li>
                    <a href="#">Wholesale &amp; Distribution</a>
                  </li>
                  <li>
                    <a href="#">Retail &amp; eCommerce</a>
                  </li>
                  <li>
                    <a href="#">Financial Services</a>
                  </li>
                  <li>
                    <a href="#">Professional Services</a>
                  </li>
                  <li>
                    <a href="#">Healthcare</a>
                  </li>
                  <li>
                    <a href="#">Food &amp; Beverage</a>
                  </li>
                  <li>
                    <a href="#">Not-for-Profit</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 footer-links">
                <p>Tools &amp; Resources</p>
                <ul>
                  <li>
                    <a href="#">ERP Calculator</a>
                  </li>
                  <li>
                    <a href="#">ERP Comparison</a>
                  </li>
                  <li>
                    <a href="#">D365 License Cost Guide</a>
                  </li>
                  <li>
                    <a href="#">BC vs NetSuite</a>
                  </li>
                  <li>
                    <a href="#">BC vs SAP B1</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="#">Webinars</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 footer-links">
                <p>Company &amp; Support</p>
                <ul>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Our Consultants</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Support Portal</a>
                  </li>
                  <li>
                    <a href="#">Raise a Ticket</a>
                  </li>
                </ul>
              </div>
            </div>
              <div className="row">
            <div className="col-md-12">
              <div className="award-ss" style={{justifyContent:'left'}}>
                <div>
                  <img
                    src="/img/Tech-For-Socil-Impact.svg"
                    alt="Tech-For-Socil-Impact"
                    width={200}
                    height={120}
                  />
                </div>
                <div>
                  <img
                    src="/img/UK-badge.png"
                    alt="UK badge"
                    width={88}
                    height={88}
                  />
                </div>
                <img
                  src="/img/ISO_9001-2015.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="90"
                  height="90"
                />
                <img
                  src="/img/ISO_9001-2015_2.png"
                  alt="microsoft-partner"
                  className="footer-img"
                  width="90"
                  height="90"
                />
              </div>
            </div>
          </div>       
            <div class="row gy-2 align-items-center trust-bar">
                  <div class="col-12">
                    <i class="bi bi-geo-alt-fill me-1"></i>
                    Kemp House, 124 City Road, London EC1V 2NX
                    &nbsp;&middot;&nbsp;
                    <i class="bi bi-telephone-fill me-1"></i>+44 203 769 7689
                  </div>
                  <div class="col-12">
                    Company No. [X] &nbsp;&middot;&nbsp; VAT No. [X]
                    &nbsp;&middot;&nbsp; Microsoft Partner ID [X]
                  </div>
                  <div class="col-12 col-md-8">
                   &copy; Copyright &nbsp;2026 Dynamics Square UK. All rights
                    <span class="legal-sep">|</span>
                    <a href="#">Privacy</a>
                    <span class="legal-sep">|</span>
                    <a href="#">Terms</a>
                    <span class="legal-sep">|</span>
                    <a href="#">Cookies</a>
                    <span class="legal-sep">|</span>
                    <a href="#">Accessibility</a>
                    <span class="legal-sep">|</span>
                    <a href="#">Sitemap</a>
                  </div>
                  <div class="col-12 col-md-4 text-md-end social-icons">
                    <a href="#" aria-label="LinkedIn">
                      <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="#" aria-label="YouTube">
                      <i class="bi bi-youtube"></i>
                    </a>
                    <a href="#" aria-label="X">
                      <i class="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" aria-label="Facebook">
                      <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" aria-label="Instagram">
                      <i class="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
          </div>
        </div>
       
      </footer>
      <div className="call-bb-wr">
        <button className="fixed-button wobble" type="button">
          <a href="tel:+442037697689" target="_self" aria-label="telephone">
            <i className="bi bi-telephone-fill"></i>
          </a>
        </button>
      </div>
    </>
  );
};
export default FooterNew;
