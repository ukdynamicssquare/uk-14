"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
// White card design. Swap to "../styles/cookieConsentBar.module.css" for the dark bar + drawer design.
import styles from "../styles/cookieConsent.module.css";

// Same cookie name react-cookie-consent used, so returning visitors who already chose aren't asked again
const CONSENT_COOKIE = "myAwesomeCookieName2";
const COOKIE_OPTS = { expires: 180 };

const CATEGORIES = [
  {
    key: "functional",
    label: "Functional Cookies (Required)",
    required: true,
    description:
      "These cookies are essential for the website to function properly. They enable basic features like page navigation, security, and access to protected areas. The website cannot function properly without these cookies.",
  },
  {
    key: "analytics",
    label: "Analytics Cookies",
    description:
      "Analytical cookies help us improve our website by collecting and reporting information on its usage.",
  },
  {
    key: "marketing",
    label: "Marketing Cookies",
    description:
      "Marketing cookies are used to track visitors across websites to allow publishers to display relevant and engaging advertisements. By enabling marketing cookies, you grant permission for personalised advertising across various platforms.",
  },
];

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [cookieSettings, setCookieSettings] = useState({
    analytics: true,
    marketing: true,
    functional: true,
  });

  // Read the cookie after mount to avoid SSR hydration mismatch
  useEffect(() => {
    if (Cookies.get(CONSENT_COOKIE) === undefined) setVisible(true);
  }, []);

  // On mobile the Zoho chat bubble covers the banner buttons, so hide it while the banner is up.
  // Uses the SalesIQ API (widget loads lazily, so retry briefly) plus a CSS fallback in globals.css.
  useEffect(() => {
    if (!visible || !window.matchMedia("(max-width: 768px)").matches) return;
    document.body.classList.add("cookie-banner-open");
    const setChat = (state) => {
      const fb = window.$zoho?.salesiq?.floatbutton;
      if (typeof fb?.visible !== "function") return false;
      fb.visible(state);
      return true;
    };
    let tries = 0;
    const timer = setInterval(() => {
      if (setChat("hide") || ++tries > 20) clearInterval(timer);
    }, 1000);
    setChat("hide");
    return () => {
      clearInterval(timer);
      document.body.classList.remove("cookie-banner-open");
      setChat("show");
    };
  }, [visible]);

  // Lock page scroll and close on Escape while preferences are open
  useEffect(() => {
    if (!showModal) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && setShowModal(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [showModal]);

  const finish = (consentValue, accepted) => {
    Cookies.set("cookie_consent", consentValue, COOKIE_OPTS);
    Cookies.set(CONSENT_COOKIE, accepted ? "true" : "false", COOKIE_OPTS);
    setShowModal(false);
    setVisible(false);
  };

  const handleAccept = () => finish("all", true);

  const handleDecline = () => finish("none", false);

  const handleSavePreferences = () =>
    finish(JSON.stringify({ ...cookieSettings, functional: true }), true);

  if (!visible) return null;

  return (
    <>
      {!showModal && (
        <div
          className={styles.banner}
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
        >
          <div className={styles.body}>
            <div className={styles.top}>
              <span className={styles.icon} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21.5 12.3A9.5 9.5 0 1 1 11.7 2.5a3 3 0 0 0 3.6 3.6 3 3 0 0 0 3.6 3.6 3 3 0 0 0 2.6 2.6Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinejoin="round"
                  />
                  <circle cx="8.5" cy="10" r="1.2" fill="currentColor" />
                  <circle cx="14" cy="15.5" r="1.2" fill="currentColor" />
                  <circle cx="8.8" cy="15.8" r="0.9" fill="currentColor" />
                </svg>
              </span>
              <p className={styles.text}>
                We use cookies on our website to give you the most relevant
                experience by remembering your preferences and repeat visits. By
                clicking &quot;Accept&quot;, you consent to the use of ALL the
                cookies. Do not sell my personal information.
              </p>
            </div>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.link}
                onClick={() => setShowModal(true)}
              >
                Optional Cookies
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={handleDecline}
              >
                Decline
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleAccept}
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div
          className={styles.overlay}
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-pref-title"
          >
            <div className={styles.modalHead}>
              <div>
                <h5 id="cookie-pref-title">Manage Cookie Preferences</h5>
                <p>Choose which cookies you’d like to enable:</p>
              </div>
              <button
                type="button"
                className={styles.close}
                aria-label="Close"
                onClick={() => setShowModal(false)}
                autoFocus
              >
                ×
              </button>
            </div>

            <div className={styles.list}>
              {CATEGORIES.map(({ key, label, description, required }) => (
                <div className={styles.item} key={key}>
                  <div className={styles.itemHead}>
                    <label htmlFor={`cookie-${key}`}>{label}</label>
                    <span className={styles.switch}>
                      <input
                        type="checkbox"
                        role="switch"
                        id={`cookie-${key}`}
                        checked={required ? true : cookieSettings[key]}
                        disabled={required}
                        onChange={(e) =>
                          setCookieSettings({
                            ...cookieSettings,
                            [key]: e.target.checked,
                          })
                        }
                      />
                      <span className={styles.track} />
                    </span>
                  </div>
                  <p>{description}</p>
                </div>
              ))}
            </div>

            <div className={styles.modalFoot}>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnGhost}`}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`${styles.btn} ${styles.btnPrimary}`}
                onClick={handleSavePreferences}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
