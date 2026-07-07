import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const FormUltimateGuideFormInner = () => {

  const router = useRouter();
  const [display, setDisplay] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [defaultCountryCode, setDefaultCountryCode] = useState('gb');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company_name: '',
    phone: '',
  });
  const form = useRef();


  /*auto fetch*/
  useEffect(() => {
    // Fetch IP information when the component mounts
    fetchCountryCodeByIP();
  }, []);

  const fetchCountryCodeByIP = () => {
    fetch(`https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch IP information');
        }
        return response.json();
      })
      .then(data => {
        let countryCode = data.country_code.toLowerCase();
        console.log("Country Code:", countryCode); // 
        setDefaultCountryCode(countryCode);
        console.log("Default Country Code:", defaultCountryCode);
      })
      .catch(error => {
        console.error('Error fetching IP information:', error);
        setDefaultCountryCode('gb');
      });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Full Name is required';
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!yahoo.co.in)(?!aol.com)(?!live.com)(?!outlook.com)[a-zA-Z0-9_-]+\.[a-zA-Z0-9-.]{2,61}$/;
    if (!emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.company_name) {
      newErrors.company_name = 'Company Name is required';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!isValidPhoneNumber(formData.phone)) {
      errors.phone = 'Invalid phone number';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone Number is required';
    } else {
      const phonePattern = /^\d{10,13}$/;
      if (!phonePattern.test(formData.phone)) {
        newErrors.phone = 'Invalid phone number';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear the error for the field being edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
    // Clear error message for the phone field
    setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
  };


  const triggerDownload = (url) => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (display) {
      return;
    }

    if (!validate()) {
      return;
    }

    setDisplay(true);
    setSuccessMessage('');

    try {
      const pageUrl = typeof window !== 'undefined'
        ? `${window.location.origin}${router.asPath.split('#')[0]}`
        : router.asPath.split('#')[0];

      const response = await fetch('https://mailserviceportal.onrender.com/api/form/tpl_6a4bb501ba1c4b7d2ab780df', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company_name: formData.company_name,
          phone: formData.phone,
          url: pageUrl,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setFormData({
        name: '',
        email: '',
        company_name: '',
        phone: '',
      });

      const redirectUrl = 'https://www.dynamicssquare.co.uk/pdf/The-Ultimate-Guide-Dynamics-365.pdf';
      setSuccessMessage('Thank you! Your download will start shortly.');
      setSubmitted(true);
      setDisplay(false);

      setTimeout(() => {
        triggerDownload(redirectUrl);
      }, 500);
    } catch (error) {
      console.error(error);
      setDisplay(false);
      setSuccessMessage('There was an error submitting the form. Please try again.');
    }
  };

  const isValidPhoneNumber = (phone) => {
    // Phone number should be between 10 to 13 characters
    return /^\d{10,15}$/.test(phone);
  };



  return (
    <>
      <div className="main-form-wrper main_form-wrper_contact">

        <form ref={form} onSubmit={sendEmail}>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">*Name</label>
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="hidden"
              value={typeof window !== 'undefined'
                ? `${window.location.origin}${router.asPath.split('#')[0]}`
                : router.asPath.split('#')[0]}
              name="url"
            />
          </div>

          <div className="mb-3 form-group">
            <input
              type="email"
              className="form-control"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
             <label htmlFor="email">*Work Email</label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="mb-3 form-group">
            <input
              type="text"
              className="form-control"
              placeholder=""
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
            />
            <label htmlFor="company_name">*Company Name</label>
            {errors.company_name && <span className="error">{errors.company_name}</span>}
          </div>
          <div className="mb-3 form-group">
            <PhoneInput inputStyle={{ width: '100%', height: 'auto' }}
              country={defaultCountryCode} // Set default country code
              value={formData.phone}
              onChange={handlePhoneChange}
              inputClass="form-control" // CSS class for the input
              inputProps={{
                name: 'phone',
                required: true,
                autoFocus: false,
                onBlur: () => {
                  if (formData.phone.trim() !== '') { // Check if phone number is not empty before validation
                    if (!isValidPhoneNumber(formData.phone)) {
                      setErrors({ ...errors, phone: 'Invalid phone number format' });
                    } else {
                      delete errors.phone; // Clear error if phone number is valid
                    }
                  } else {
                    delete errors.phone; // Clear error if phone number is empty
                  }
                }
              }}
              countryCodeEditable={false}
              // onlyCountries={['us', 'ca', 'mx', 'gb']}
              excludeCountries={['pk']}
            />
               <label htmlFor="phone"></label>
            {errors.phone && <span className="error">{errors.phone}</span>}
            {/* <input
                            type="tel"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                          {errors.phone && <span className="error">{errors.phone}</span>} */}
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              checked
              readOnly
              className="form-check-input"
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

          <div className="spinner-wrapper spinner-wrapper-custom">
            <button
              type="submit"
              className="btn btn-primary fomr-submit"
              disabled={display || submitted}
            >
              {submitted ? 'Submitted' : display ? 'Submitting...' : 'Download Free Dynamics 365 Guide →'}
            </button>

            {display && (
              <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
          </div>

          {successMessage && (
            <div className="mt-3 text-success fw-bold">
              {successMessage}
            </div>
          )}
        </form>
      </div>
        
       <style jsx global>
        {`
        .main_form-wrper_contact{
       background: #fff;
    border-radius: 10px;
    padding: 30px;
        }
    .react-tel-input .form-control{
    padding-left: 50px !important;
    }
        `}
       </style>


    </>
  );
};

export default FormUltimateGuideFormInner;
