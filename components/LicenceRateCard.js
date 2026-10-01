"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { calculate, resolveVerdict, fmt } from "./licensingEngine";

const PERSONAL_EMAIL_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "msn.com",
  "protonmail.com",
  "zoho.com",
  "gmx.com",
  "mail.com",
  "yandex.com",
  "yeah.net",
];

const API = process.env.NEXT_PUBLIC_LICENSING_API_URL || "/api/licensing";

function endpoint(path) {
  const base = API.replace(/\/$/, "");
  if (base.endsWith("/api")) return `${base}/public/licensing${path}`;
  if (base.endsWith("/public/licensing")) return `${base}${path}`;
  return `${base}${base.startsWith("/") && !path.endsWith("/") ? `${path}/` : path}`;
}

async function call(path, options = {}) {
  const res = await fetch(endpoint(path), { cache: "no-store", ...options });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.message || "Request failed");
    err.response = { data };
    throw err;
  }
  return data;
}

const getCatalog = (unlockToken) =>
  call("/catalog", { headers: unlockToken ? { "x-unlock-token": unlockToken } : {} });

const sendLead = (payload) =>
  call("/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

export default function LicenceRateCard({ source = "licence-rate-card", initialCatalog = null }) {
  // rendered on the server first, so the capability list is in the HTML for crawlers
  const [catalog, setCatalog] = useState(initialCatalog);
  const [loadError, setLoadError] = useState("");

  // resolved by the server from the visitor country; null only while loading
  const [currency, setCurrency] = useState(
    initialCatalog?.defaultCurrency || initialCatalog?.currencies?.[0] || null
  );
  const [caps, setCaps] = useState(() => new Set());
  const [open, setOpen] = useState(() => new Set());
  const [entities, setEntities] = useState(1);
  const [countries, setCountries] = useState(1);
  const [revenue, setRevenue] = useState("5_25");
  const [fullUsers, setFullUsers] = useState(1);
  const [teamUsers, setTeamUsers] = useState(0);
  const [deviceUsers, setDeviceUsers] = useState(0);
  const [activityUsers, setActivityUsers] = useState(0);
  const [lead, setLead] = useState({ name: "", email: "", phone: "", company: "", renewal: "" });
  const [defaultPhoneCountry, setDefaultPhoneCountry] = useState("gb");
  const [phoneDialCode, setPhoneDialCode] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [sent, setSent] = useState(false);
  const [unlockToken, setUnlockToken] = useState(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [showQuotedPreview, setShowQuotedPreview] = useState(false);

  const p = currency ? catalog?.pricing?.[currency] : null;
  const locked = !!catalog?.gated;

  useEffect(() => {
    let alive = true;
    if (initialCatalog) return;
    getCatalog()
      .then((data) => {
        if (!alive) return;
        setCatalog(data);
        // keep whatever the visitor already chose; otherwise take the geo default
        setCurrency((prev) =>
          prev && data.pricing?.[prev] ? prev : data.defaultCurrency || data.currencies?.[0] || "USD"
        );
      })
      .catch(() => alive && setLoadError("The rate card could not be loaded. Please refresh and try again."));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!locked) setShowLeadModal(false);
  }, [locked]);

  useEffect(() => {
    const detectPhoneCountry = async () => {
      try {
        const res = await fetch("https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e");
        if (!res.ok) throw new Error("IP detection failed");
        const data = await res.json();
        const countryCode = (data?.country_code || "gb").toLowerCase();
        setDefaultPhoneCountry(countryCode || "gb");
      } catch {
        setDefaultPhoneCountry("gb");
      }
    };

    detectPhoneCountry();
  }, []);

  const toggle = (id) =>
    setCaps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const model = useMemo(() => {
    if (!catalog) return null;
    const input = { capabilities: caps, entities, countries, revenue, fullUsers, teamUsers, deviceUsers, activityUsers };
    if (locked || !p?.bc) return resolveVerdict(catalog, input);
    return calculate(catalog, p, input, lead);
  }, [catalog, p, locked, caps, entities, countries, revenue, fullUsers, teamUsers, deviceUsers, activityUsers, lead]);

  useEffect(() => {
    if (!model?.extensionCount) setShowQuotedPreview(false);
  }, [model?.extensionCount]);

  const isValidBusinessEmail = useCallback((email) => {
    const value = (email || "").trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!emailRegex.test(value)) return false;

    const domain = value.split("@")[1];
    const isPersonalDomain =
      PERSONAL_EMAIL_DOMAINS.includes(domain) ||
      domain.endsWith("gmail.com") ||
      domain.endsWith("yahoo.com") ||
      domain.endsWith("hotmail.com") ||
      domain.endsWith("outlook.com") ||
      domain.endsWith("live.com") ||
      domain.endsWith("icloud.com");

    return !isPersonalDomain;
  }, []);

  const isValidPhoneNumber = useCallback((phone) => {
    const digitsOnly = (phone || "").replace(/\D/g, "");
    return digitsOnly.length >= 8 && digitsOnly.length <= 15;
  }, []);

  // The widget seeds the field with a dial code, so that alone is not an entry.
  const phoneProvided = useCallback((phone, dial) => {
    const digits = (phone || "").replace(/\D/g, "");
    const code = ((dial ?? phoneDialCode) || "").replace(/\D/g, "");
    return !!digits && digits !== code;
  }, [phoneDialCode]);

  const validateLeadForm = useCallback((nextLead) => {
    const errors = {};

    if (!nextLead.name.trim()) errors.name = "Name is required";
    if (!nextLead.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidBusinessEmail(nextLead.email)) {
      errors.email = "Please enter a valid company email address";
    }
    // Optional, but a number that is typed still has to be a real one.
    if (phoneProvided(nextLead.phone) && !isValidPhoneNumber(nextLead.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    return errors;
  }, [isValidBusinessEmail, isValidPhoneNumber, phoneProvided]);

  const validateField = useCallback((field, value, dial) => {
    if (field === "name") return value.trim() ? "" : "Name is required";
    if (field === "email") {
      if (!value.trim()) return "Email is required";
      return isValidBusinessEmail(value) ? "" : "Please enter a valid company email address";
    }
    if (field === "phone") {
      if (!phoneProvided(value, dial)) return "";
      return isValidPhoneNumber(value) ? "" : "Please enter a valid phone number";
    }
    return "";
  }, [isValidBusinessEmail, isValidPhoneNumber, phoneProvided]);

  const handleSubmit = useCallback(async (event) => {
    event?.preventDefault();

    const errors = validateLeadForm(lead);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0 || sending) return;

    setSending(true);
    setSendError("");
    try {
      const res = await sendLead({
        ...lead,
        name: lead.name.trim(),
        email: lead.email.trim(),
        company: lead.company.trim(),
        company_name: lead.company.trim(),
        companyname: lead.company.trim(),
        phone: lead.phone.trim(),
        phone_number: lead.phone.trim(),
        telephone: lead.phone.trim(),
        mobile: lead.phone.trim(),
        renewal: lead.renewal.trim(),
        renewal_month: lead.renewal.trim(),
        source,
        currency,
        capabilities: [...caps],
        entities,
        countries,
        revenue,
        fullUsers,
        teamUsers,
        deviceUsers,
        activityUsers,
      });
      setSent(true);

      if (res?.unlockToken) {
        setUnlockToken(res.unlockToken);
        try {
          setCatalog(await getCatalog(res.unlockToken));
          setShowLeadModal(false);
        } catch {
          // the enquiry is safely recorded; only the live reveal is missed
        }
      }
    } catch (err) {
      setSendError(
        err?.response?.data?.message ||
          catalog?.content?.errors?.submitFailed ||
          "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  }, [lead, sending, source, currency, caps, entities, countries, revenue, fullUsers, teamUsers, deviceUsers, activityUsers, validateLeadForm]);

  if (loadError) {
    return (
      <div className="rc">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="rc-load rc-load-error">{loadError}</div>
      </div>
    );
  }

  if (!catalog || !model || !currency) {
    return (
      <div className="rc">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <div className="rc-load">Loading the rate card…</div>
      </div>
    );
  }

  const {
    capabilities: CAP_GROUPS,
    sections: SECTIONS,
    tierTag: TIER_TAG,
    appShort: APP_SHORT,
    content: C,
  } = catalog;

  const values = { entities, countries, revenue, fullUsers, teamUsers, deviceUsers, activityUsers };
  const setters = {
    entities: setEntities,
    countries: setCountries,
    revenue: setRevenue,
    fullUsers: setFullUsers,
    teamUsers: setTeamUsers,
    deviceUsers: setDeviceUsers,
    activityUsers: setActivityUsers,
  };
  // `showWhen: "platform:fo"` keeps the Activity stepper out until it applies.
  const visible = (f) => !f.showWhen || f.showWhen !== "platform:fo" || model.platform === "fo";

  const annual = model.annual;
  const previewSymbol = currency === "GBP" ? "£" : currency === "CAD" ? "C$" : "$";
  const previewFullRate = model.platform === "fo" ? 148 : model.tier === "premium" ? 75 : 55;
  const previewTeamRate = model.platform === "fo" ? 6.6 : 6;
  const previewDeviceRate = model.platform === "fo" ? 75 : 30;
  const previewActivityRate = 50;
  // the floor applies before pricing, so the blurred preview counts seats the same way
  const billedFullUsers = model.billedFullUsers ?? fullUsers;
  const lockedMainPreviewLines = [
    fullUsers > 0 && {
      k: "full-preview",
      qty: billedFullUsers,
      label: model.platform === "fo" ? "Dynamics 365 Finance" : model.platformLabel,
      sub: model.foMinimumApplied
        ? `${model.foMinSeats} full-user minimum (you entered ${fullUsers})`
        : "Full user",
      rate: previewFullRate,
    },
  ].filter(Boolean);
  const lockedQuotedPreviewLines = [
    teamUsers > 0 && {
      k: "team-preview",
      qty: teamUsers,
      label: "Team Members",
      sub: "Read, approve, time and expense",
      rate: previewTeamRate,
    },
    deviceUsers > 0 && {
      k: "device-preview",
      qty: deviceUsers,
      label: model.platform === "fo" ? "Operations Device" : "Device licence",
      sub: "Shared terminal, unlimited users",
      rate: previewDeviceRate,
    },
    model.platform === "fo" &&
      activityUsers > 0 && {
        k: "activity-preview",
        qty: activityUsers,
        label: "Operations Activity",
        sub: "Single-function operational access",
        rate: previewActivityRate,
      },
  ].filter(Boolean);
  const lockedPreviewLines = showQuotedPreview
    ? [...lockedMainPreviewLines, ...lockedQuotedPreviewLines]
    : lockedMainPreviewLines;
  const lockedPreviewMonthly = lockedPreviewLines.reduce((sum, line) => sum + line.qty * line.rate, 0);

  return (
    <div className="rc">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <header className="rc-head">
        <div className="rc-head-inner">
          <div className="rc-eyebrow">{C.header.eyebrow}</div>
          <h1>Know Your Dynamics 365 Licensing Cost in Minutes</h1>
          <p className="rc-dek">Select the capabilities your business needs and get an instant, itemised estimate — built on real Microsoft pricing, not guesswork.</p>
          <dl className="rc-stats">
            <div>
              <dt>2 min</dt>
              <dd>To a costed licence position</dd>
            </div>
            <div>
              <dt>600+</dt>
              <dd>UK licence reviews completed</dd>
            </div>
            <div>
              <dt>18%</dt>
              <dd>Average overspend we find at renewal</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="rc-grid">
        {/* ------------------------------- INPUTS ------------------------------- */}
        <div className="rc-inputs">
          <div className="rc-toolbar">
            <div className="rc-currency" role="group" aria-label="Currency">
              {catalog.currencies.map((c) => (
                <button
                  key={c}
                  type="button"
                  className={"chip" + (currency === c ? " on" : "")}
                  onClick={() => setCurrency(c)}
                  aria-pressed={currency === c}
                >
                  {c}
                </button>
              ))}
            </div>
            {/* <div className="billing-tabs" aria-label="Billing period">
              <span className="billing-tab on">Monthly</span>
              <span className="billing-tab">Annual</span>
            </div> */}
          </div>
          {CAP_GROUPS.map(({ name: g, id: gid, sub, collapsible, group: inGroup }) => {
            const isOpen = !collapsible || open.has(g);
            const picked = inGroup.filter((c) => caps.has(c.id)).length;
            return (
              <section className="block" key={gid}>
                <h2 className="block-title">{g}</h2>
                {sub && <p className="block-sub">{sub}</p>}
                {collapsible && (
                  <button
                    type="button"
                    className="disclose"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpen((prev) => {
                        const n = new Set(prev);
                        if (n.has(g)) n.delete(g);
                        else n.add(g);
                        return n;
                      })
                    }
                  >
                    <span className="disclose-caret" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    {isOpen ? "Hide" : "Show"} {inGroup.length} capabilities
                    {picked > 0 && <em>{picked} selected</em>}
                  </button>
                )}
                <ul className={"caps" + (isOpen ? "" : " is-closed")}>
                  {inGroup.map((c) => {
                    const on = caps.has(c.id);
                    return (
                      <li key={c.id}>
                        <button
                          type="button"
                          className={"cap" + (on ? " on" : "")}
                          onClick={() => toggle(c.id)}
                          aria-pressed={on}
                        >
                          <span className="cap-box" aria-hidden="true">{on ? "✓" : ""}</span>
                          <span className="cap-text">
                            <span className="cap-label">{c.label}</span>
                            <span className="cap-note">{c.note}</span>
                          </span>
                          <span className={"tag " + TIER_TAG[c.tier].cls}>{TIER_TAG[c.tier].label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}

          {SECTIONS.map((section) => {
            const numbers = section.fields.filter((f) => f.type === "number" && visible(f));
            const choices = section.fields.filter((f) => f.type === "choice");
            return (
              <section className="block" key={section.id}>
                <h2 className="block-title">{section.name}</h2>
                {section.sub && <p className="block-sub">{section.sub}</p>}

                {numbers.length > 0 && (
                  <div className="steppers">
                    {numbers.map((f) => (
                      <Stepper
                        key={f.key}
                        label={f.label}
                        hint={f.hint}
                        big={f.emphasis}
                        min={f.min}
                        max={f.max}
                        value={values[f.key]}
                        set={setters[f.key]}
                      />
                    ))}
                  </div>
                )}

                {choices.map((f) => (
                  <div className="field" key={f.key}>
                    <span className="field-label">{f.label}</span>
                    <div className="segs">
                      {f.options.map((o) => (
                        <button
                          key={o.id}
                          type="button"
                          className={"seg" + (values[f.key] === o.id ? " on" : "")}
                          onClick={() => setters[f.key](o.id)}
                          aria-pressed={values[f.key] === o.id}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                ))}
                
              </section>
              
            );
            
          })}
           <div className="mm-hide">
                   {locked && (
                  <button
                    type="button"
                    className="unlock-btn mm-hide-new"
                    onClick={() => {
                      setSent(false);
                      setSendError("");
                      setShowLeadModal(true);
                    }}
                  >Unlock pricing</button>
                )}
                </div>
        </div>

        {/* ----------------------------- STATEMENT ----------------------------- */}
        <aside className="rc-statement">
          <div className="stmt">
            <div className="stmt-top">
              <span className="stmt-kicker">{C.statement.kicker}</span>
              <div className="stmt-heading-row">
                <span className={"stmt-platform " + (model.platform === "fo" ? "is-fo" : "")}>
                  {model.platformLabel}
                </span>
                {locked && (
                  <button
                    type="button"
                    className="unlock-btn"
                    onClick={() => {
                      setSent(false);
                      setSendError("");
                      setShowLeadModal(true);
                    }}
                  >
                    Unlock
                  </button>
                )}
              </div>
            </div>

            {locked ? (
              <div className="lockbox">
                <div className="lock-verdict">
                  <span className="lock-kicker">{C.locked.kicker}</span>
                  <p className="lock-answer">
                    {C.locked.verdictPrefix} <b>{model.platformLabel}</b>.
                  </p>
                  <ul className="lock-counts">
                    <li><b>{model.capabilityCount}</b> {C.locked.capabilitiesSuffix}</li>
                    {model.moduleCount > 0 && <li><b>{model.moduleCount}</b> {C.locked.modulesSuffix}</li>}
                    {model.extensionCount > 0 && (
                      <li className="quoted-count">
                        <button
                          type="button"
                          className={showQuotedPreview ? "is-on" : ""}
                          onClick={() => setShowQuotedPreview((current) => !current)}
                          aria-pressed={showQuotedPreview}
                        >
                          <b>{model.extensionCount}</b> {C.locked.extensionsSuffix}
                        </button>
                      </li>
                    )}
                  </ul>
                </div>

                <div className="locked-preview">
                  <div className="locked-preview-data" aria-hidden="true">
                    <table className="stmt-table is-blurred">
                    <tbody>
                      {lockedPreviewLines.map((line) => (
                        <tr key={line.k}>
                          <td className="q">{line.qty}<span>×</span></td>
                          <td className="d">
                            <span className="d-label">{line.label}</span>
                            <span className="d-sub">{line.sub}</span>
                          </td>
                          <td className="v">
                            <span className="v-rate locked-value">{previewSymbol}{fmt(line.rate)}</span>
                            <span className="v-line locked-value">{previewSymbol}{fmt(line.qty * line.rate)}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    </table>

                    <div className="stmt-totals is-blurred">
                      <div className="tot">
                        <span>{C.statement.perMonth}</span>
                        <b className="locked-value">{previewSymbol}{fmt(lockedPreviewMonthly)}</b>
                      </div>
                      <div className="tot lead">
                        <span>{C.statement.perYear}</span>
                        <b className="locked-value">{previewSymbol}{fmt(lockedPreviewMonthly * 12)}</b>
                      </div>
                      <div className="tot">
                        <span>{C.statement.perThreeYears}</span>
                        <b className="locked-value">{previewSymbol}{fmt(lockedPreviewMonthly * 36)}</b>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="unlock-overlay-btn"
                    onClick={() => {
                      setSent(false);
                      setSendError("");
                      setShowLeadModal(true);
                    }}
                  >
                    Unlock pricing
                  </button>
                </div>

                {model.foMinimumApplied && (
                  <p className="stmt-min">
                    Microsoft sells the primary Finance &amp; Operations application with a{" "}
                    {model.foMinSeats} full-user minimum, and it cannot be split across core
                    applications. The statement is priced at that floor.
                  </p>
                )}

                <p className="lock-cta">
                  <span className="lock-icon" aria-hidden="true">🔒</span>
                  {C.locked.ctaText}
                </p>
              </div>
            ) : (
            <>
            <table className="stmt-table">
              <tbody>
                {model.lines.length === 0 && (
                  <tr><td className="stmt-empty" colSpan={3}>{C.statement.emptyText}</td></tr>
                )}
                {model.lines.map((l) => (
                  <tr key={l.k}>
                    <td className="q">{l.qty}<span>×</span></td>
                    <td className="d">
                      <span className="d-label">{l.label}</span>
                      <span className="d-sub">{l.sub}</span>
                    </td>
                    <td className="v">
                      <span className="v-rate">{model.symbol}{fmt(l.rate)}</span>
                      <span className="v-line">{model.symbol}{fmt(l.total)}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
{model.foMinimumApplied && (
<p className="stmt-min">
    Microsoft sells the primary Finance &amp; Operations application with a{" "}
    {model.foMinSeats} full-user minimum, and it cannot be split across core
    applications. The statement is priced at that floor.
</p>
)}
            <div className="stmt-totals">
              <div className="tot"><span>{C.statement.perMonth}</span><b>{model.symbol}{fmt(model.monthly)}</b></div>
              <div className="tot lead"><span>{C.statement.perYear}</span><b>{model.symbol}{fmt(annual)}</b></div>
              <div className="tot"><span>{C.statement.perThreeYears}</span><b>{model.symbol}{fmt(model.threeYear)}</b></div>
            </div>

            {model.beyondDrivers.length > 0 && (
              <div className="stmt-ext is-fo-map">
                <span className="ext-kicker fo">{C.statement.modulesKicker}</span>
                <ul className="ext-list">
                  {model.beyondDrivers.map((d) => (
                    <li key={d.id}><span>{d.fo}</span><em>{APP_SHORT[d.app]}</em></li>
                  ))}
                </ul>
              </div>
            )}

            {model.extensions.length > 0 && (
              <div className="stmt-ext">
                <span className="ext-kicker">{C.statement.extensionsKicker}</span>
                <ul className="ext-list">
                  {model.extensions.map((e) => (
                    <li key={e.id}><span>{e.label}</span><em>Quoted</em></li>
                  ))}
                </ul>
                <p className="ext-note">
                  {C.statement.extensionsNote.replace(
                    "{tier}",
                    model.platform === "fo" ? "Finance & Operations" : model.tier === "premium" ? "Premium" : "Essentials"
                  )}
                </p>
              </div>
            )}

            <p className="stmt-foot">
              {model.extensions.length > 0 ? `${C.statement.coreOnlyPrefix} ` : ""}
              {C.statement.footnote}{" "}
              List prices{" "}
              {model.pricingTrusted
                ? `verified ${model.pricingVerified}`
                : "are placeholders pending verification"}
              .
            </p>
            </>
            )}
          </div>

        </aside>
      </div>

      {showLeadModal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onClick={() => !sending && setShowLeadModal(false)}
        >
          <div
            className="capture modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="rc-unlock-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close unlock form"
              onClick={() => !sending && setShowLeadModal(false)}
              disabled={sending}
            >
              x
            </button>
            {!sent ? (
              <form onSubmit={handleSubmit}>
                <h3 id="rc-unlock-title">{locked ? C.form.lockedHeading : C.form.heading}</h3>
                <p>{locked ? C.form.lockedBody : C.form.body}</p>
                <input
                  className="inp"
                  placeholder={C.form.namePlaceholder}
                  value={lead.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    setLead({ ...lead, name: value });
                    setFormErrors((prev) => ({ ...prev, name: validateField("name", value) }));
                  }}
                  required
                />
                {formErrors.name && <p className="err">{formErrors.name}</p>}
                <input
                  className="inp"
                  type="email"
                  placeholder={C.form.emailPlaceholder}
                  value={lead.email}
                  onChange={(e) => {
                    const value = e.target.value;
                    setLead({ ...lead, email: value });
                    setFormErrors((prev) => ({ ...prev, email: validateField("email", value) }));
                  }}
                  required
                />
                {formErrors.email && <p className="err">{formErrors.email}</p>}
                <input
                  className="inp"
                  placeholder={C.form.companyPlaceholder}
                  value={lead.company}
                  onChange={(e) => setLead({ ...lead, company: e.target.value })}
                />
                <PhoneInput
                  country={defaultPhoneCountry || "gb"}
                  value={lead.phone}
                  onChange={(value, country) => {
                    const nextPhone = value || "";
                    const dial = country?.dialCode || "";
                    setPhoneDialCode(dial);
                    setLead({ ...lead, phone: nextPhone });
                    setFormErrors((prev) => ({ ...prev, phone: validateField("phone", nextPhone, dial) }));
                  }}
                  inputProps={{
                    name: "phone",
                    "aria-label": "Phone number (optional)",
                    autoComplete: "tel",
                  }}
                  inputClass="inp"
                  containerStyle={{ width: "100%", marginBottom: "9px" }}
                  inputStyle={{
                    width: "100%",
                    height: "42px",
                    border: "1px solid #d9d4e3",
                    borderLeft: "0",
                    borderRadius: "0 6px 6px 0",
                    fontSize: "14px",
                    color: "#24163d",
                    background: "#fff",
                    boxShadow: "none",
                    paddingLeft: "48px",
                  }}
                  buttonStyle={{
                    width: "46px",
                    height: "42px",
                    border: "1px solid #d9d4e3",
                    borderRight: "0",
                    borderRadius: "6px 0 0 6px",
                    background: "#fff",
                  }}
                  dropdownStyle={{
                    border: "1px solid #d9d4e3",
                    borderRadius: "6px",
                    boxShadow: "0 12px 30px rgba(22,16,35,0.14)",
                  }}
                  countryCodeEditable={false}
                  disableSearchIcon
                  excludeCountries={["pk"]}
                />
                {formErrors.phone && <p className="err">{formErrors.phone}</p>}
                <label className="inp-label" htmlFor="rc-renewal">
                  {C.form.renewalLabel}
                </label>
                <input
                  id="rc-renewal"
                  className="inp"
                  placeholder={C.form.renewalPlaceholder}
                  value={lead.renewal}
                  onChange={(e) => setLead({ ...lead, renewal: e.target.value })}
                />
                {sendError && <p className="err">{sendError}</p>}
                <button
                  type="submit"
                  className="cta"
                  disabled={
                    !lead.name.trim() ||
                    !isValidBusinessEmail(lead.email) ||
                    // (phoneProvided(lead.phone) && !isValidPhoneNumber(lead.phone)) ||
                    sending
                  }
                >
                  {sending ? C.form.sendingLabel : locked ? C.form.lockedCtaLabel : C.form.ctaLabel}
                </button>
              </form>
            ) : (
              <div className="done">
                <h3 id="rc-unlock-title">{unlockToken ? C.success.unlockedHeading : C.success.heading}</h3>
                <p>{unlockToken ? C.success.unlockedBody : C.success.body}</p>
              </div>
            )}
          </div>
        </div>
      )}
{!showLeadModal && (
  <div className="rc-mobile-bar">
    <div className={`rc-mobile-bar-price ${locked ? "is-locked" : "is-unlocked"}`}>
      <span>{C.statement.perMonth}</span>

      <b>
        {locked
          ? `${previewSymbol}${fmt(lockedPreviewMonthly)}`
          : `${model.symbol}${fmt(model.monthly)}`}
      </b>
    </div>

    <button
      type="button"
      className="rc-mobile-bar-cta"
      onClick={() => {
        setSent(false);
        setSendError("");
        setShowLeadModal(true);
      }}
    >
      {locked ? "Unlock pricing" : "Get this quote"}
    </button>
  </div>
)}
    </div>
  );
}

function Stepper({ label, hint, value, set, min = 0, max = 999, big }) {
  return (
    <div className={"stp" + (big ? " big" : "")}>
      <div className="stp-text">
        <span className="stp-label">{label}</span>
        {hint && <span className="stp-hint">{hint}</span>}
      </div>
      <div className="stp-ctl">
        <button type="button" onClick={() => set(Math.max(min, value - 1))} aria-label={`Decrease ${label}`}>−</button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => set(Math.min(max, Math.max(min, Number(e.target.value) || 0)))}
          aria-label={label}
        />
        <button type="button" onClick={() => set(Math.min(max, value + 1))} aria-label={`Increase ${label}`}>+</button>
      </div>
    </div>
  );
}

const CSS = `
.rc{--paper:#f7f8fc;--panel:#fff;--ink:#24163d;--ink-2:#516073;--purple:#5d5084;
--purple-dark:#3b2f58;--purple-mid:#4c406b;--purple-soft:#efedf5;--rule:#e6e2ed;--rule-2:#f1eff6;
--blue:#0B5FA5;--blue-soft:#E8F0F7;--clay:#c83242;--clay-soft:#fff0f2;--jade:#0E6E4F;--jade-soft:#E9F2EE;
/* --mono:"IBM Plex Mono","SF Mono",ui-monospace,Menlo,monospace; */
/* --sans:"Inter",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif; */
min-height:100vh;background:linear-gradient(180deg,var(--purple) 0 504px,var(--paper) 504px 100%);
color:var(--ink);font-family:var(--sans);font-size:15px;line-height:1.5;padding:0 24px 80px;
-webkit-font-smoothing:antialiased}
.rc *{box-sizing:border-box}
.rc button{font-family:inherit}
.rc :focus-visible{outline:2px solid #c8bcff;outline-offset:2px}

.rc-load{max-width:1184px;margin:0 auto;padding:90px 0;text-align:center;color:#fff;font-size:14px}
.rc-load-error{color:#ffe4e7}

.rc-head{color:#fff;margin:0;padding:66px 0 132px}
.rc-head-inner{max-width:1280px;margin:0 auto}
.rc-eyebrow{display:inline-flex;align-items:center;border:1px solid rgba(255,255,255,.32);
border-radius:999px;padding:3px 14px;font-family:var(--mono);font-size:12px;font-weight:700;
letter-spacing:.08em;text-transform:uppercase;color:#fff}
.rc-head h1{font-size:56px;line-height:1.08;letter-spacing:0;font-weight:600;margin:24px 0 18px;max-width:760px}
.rc-dek{color:rgba(255,255,255,.92);font-size:19px;line-height:1.55;max-width:650px;margin:0}
.rc-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:40px;max-width:820px;margin:44px 0 0;padding:0}
.rc-stats div{min-width:0}
.rc-stats dt{font-size:31px;line-height:1;font-weight:600;color:#fff;margin:0}
.rc-stats dd{font-size:14px;color:rgba(255,255,255,.78);margin:4px 0 0}

.rc-grid{max-width:1280px;margin:-56px auto 0;display:grid;grid-template-columns:minmax(0,744px) minmax(320px,400px);
gap:40px;align-items:start;justify-content:center}
.rc-inputs{background:var(--panel);border-radius:8px;padding:40px;box-shadow:0 22px 60px rgba(43,35,66,.10)}
.rc-toolbar{display:flex;align-items:center;justify-content:space-between;gap:18px;border-bottom:1px solid var(--rule);
padding-bottom:24px;margin-bottom:30px}
.rc-currency,.billing-tabs{display:flex;flex-wrap:wrap;gap:8px}
.rc .chip,.billing-tab{font-size:13px;line-height:1;font-weight:700;padding:10px 17px;border:1px solid #d9d4e3;
background:#fff;color:#39485b;border-radius:5px}
.rc .chip{cursor:pointer}
.rc .chip.on,.billing-tab.on{background:var(--purple-dark);border-color:var(--purple-dark);color:#fff}

.rc .block{border-top:1px solid var(--rule);padding-top:28px;margin-bottom:32px;padding-bottom: 0;}
.rc .block:first-of-type{border-top:0;padding-top:0}
.block-title{font-family:var(--mono);font-size:12px;letter-spacing:.14em;text-transform:uppercase;
font-weight:700;margin:0 0 10px;color:#5c4d8d}
.block-sub{color:#415268;font-size:16px;line-height:1.55;margin:0 0 20px;max-width:650px}
.caps{list-style:none;margin:14px 0 0;padding:0;display:flex;flex-direction:column;gap:6px}
.caps li{margin:0}
.caps li+li{border-top:0}
.cap{display:flex;align-items:flex-start;gap:14px;width:100%;text-align:left;background:#fff;border:0;
border-radius:8px;padding:13px 12px;cursor:pointer;color:var(--ink)}
.cap.on{background:var(--purple-soft)}
.cap:hover .cap-label{color:var(--purple-dark)}
.cap-box{flex:none;width:20px;height:20px;border:1px solid #cbc5d8;margin-top:2px;display:grid;place-items:center;
font-size:12px;font-weight:600;color:transparent;border-radius:4px;transition:.12s;background:#fff}
.cap.on .cap-box{background:var(--purple-dark);border-color:var(--purple-dark);color:#fff}
.cap-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.cap-label{font-size:16px;font-weight:600;line-height:1.3;transition:color .12s}
.cap-note{font-size:14px;line-height:1.4;color:#536379}
.rc .tag{flex:none;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;
padding:4px 8px;border-radius:4px;margin-top:2px}
.tag-ess{background:transparent;color:#5d4f91}
.tag-prem{background:var(--blue-soft);color:var(--blue)}
.tag-addon{background:var(--jade-soft);color:var(--jade)}
.tag-beyond{background:var(--clay-soft);color:var(--clay)}

.steppers{display:flex;flex-direction:column;gap:6px}
.stp{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:14px 12px;border-radius:8px;background:transparent}
.stp+.stp{border-top:0}
.block .steppers .stp.big,.block .steppers .stp:nth-child(n+3){background:var(--purple-soft)}
.stp-text{display:flex;flex-direction:column;gap:2px;min-width:0}
.stp-label{font-size:16px;line-height:1.3;font-weight:600;color:var(--ink)}
.stp-hint{font-family:var(--mono);font-size:12px;letter-spacing:.08em;text-transform:uppercase;color:#415268;font-weight:600}
.stp-ctl{flex:none;display:grid;grid-template-columns:40px 52px 40px;align-items:center;border:1px solid #d9d4e3;
border-radius:8px;background:#fff;overflow:hidden}
.stp-ctl button{width:40px;height:40px;border:0;background:#fff;cursor:pointer;font-size:17px;color:#334258}
.stp-ctl button:hover{color:var(--purple-dark);background:#faf9fc}
.stp-ctl input{width:52px;height:40px;border:0;border-left:1px solid #d9d4e3;border-right:1px solid #d9d4e3;
text-align:center;font-family:var(--mono);font-size:15px;font-weight:600;background:#fff;color:var(--ink);-moz-appearance:textfield}
.stp-ctl input::-webkit-outer-spin-button,.stp-ctl input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}

.rc .field{margin-top:20px}
.field-label{display:block;font-size:16px;font-weight:600;margin-bottom:9px;color:var(--ink)}
.segs{display:flex;flex-wrap:wrap;gap:8px}
.seg{font-size:14px;font-weight:700;padding:9px 17px;border:1px solid #d9d4e3;background:#fff;cursor:pointer;
border-radius:6px;color:#39485b}
.seg.on{background:var(--purple-dark);border-color:var(--purple-dark);color:#fff}

.rc-statement{position:sticky;top:124px;height: 500px;
    overflow-y: scroll; scrollbar-width: thin;
  scrollbar-color: #999 #f1f1f1;}
   .rc-statement::-webkit-scrollbar {
  width: 8px;
}

.rc-statement::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.rc-statement::-webkit-scrollbar-thumb {
  background: #999;
  border-radius: 10px;
}

.rc-statement::-webkit-scrollbar-thumb:hover {
  background: #666;
} 
.stmt{background:var(--purple-dark);color:#fff;padding:28px 28px 24px;border-radius:8px;box-shadow:0 22px 60px rgba(43,35,66,.16)}
.stmt-top{display:flex;flex-direction:column;gap:8px;padding-bottom:18px;border-bottom:1px solid rgba(255,255,255,.16)}
.stmt-kicker{font-family:var(--mono);font-size:11px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.5)}
.stmt-heading-row{display:flex;align-items:flex-start;justify-content:space-between;gap:14px}
.stmt-platform{font-size:28px;line-height:1.1;font-weight:600;letter-spacing:0}
.stmt-platform.is-fo{color:#f7cbc4}
.unlock-btn{flex:none;border:1px solid rgba(255,255,255,.18);background: rgb(215 61 61);color:#fff;
border-radius:6px;padding:9px 14px;font-size:13px;font-weight:600;cursor:pointer}
.unlock-btn:hover{background:rgba(255,255,255,.2)}
.stmt-table{width:100%;border-collapse:collapse;margin:8px 0 0}
.stmt-table tr{border-bottom:1px solid rgba(255,255,255,.10)}
.stmt-table tr:last-child{border:none}
.stmt-table td{padding:13px 0;vertical-align:top}
.stmt-table .q{font-family:var(--mono);font-size:13px;width:44px;color:#fff;font-variant-numeric:tabular-nums}
.stmt-table .q span{color:rgba(255,255,255,.45);margin-left:2px}
.stmt-table .d{padding-right:10px}
.d-label{display:block;font-size:14px;line-height:1.35;font-weight:700}
.d-sub{display:block;font-size:12px;color:rgba(255,255,255,.58);margin-top:2px}
.stmt-table .v{text-align:right;white-space:nowrap;font-family:var(--mono);font-variant-numeric:tabular-nums}
.v-rate{display:block;font-size:11px;color:rgba(255,255,255,.48)}
.v-line{display:block;font-size:14px;margin-top:2px}
.stmt-empty{font-size:13px;color:rgba(255,255,255,.58);padding:20px 0!important}
.stmt-totals{margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.28)}
.tot{display:flex;justify-content:space-between;align-items:baseline;padding:5px 0}
.tot span{font-size:13px;color:rgba(255,255,255,.65)}
.tot b{font-family:var(--mono);font-size:15px;font-weight:700;font-variant-numeric:tabular-nums}
.tot.lead b{font-size:27px;letter-spacing:0}
.tot.lead span{color:#fff}
.disclose{display:flex;align-items:center;gap:8px;background:none;border:0;padding:4px 0 8px;font-family:var(--mono);
font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#5c4d8d;cursor:pointer}
.disclose:hover{color:var(--purple-dark)}
.disclose-caret{width:17px;height:17px;border:1px solid var(--rule);display:grid;place-items:center;font-size:12px;line-height:1;border-radius:4px}
.disclose em{font-style:normal;background:var(--clay-soft);color:var(--clay);padding:2px 6px;border-radius:4px;letter-spacing:.05em}
.caps.is-closed{display:none}

.is-fo-map .ext-kicker.fo{color:#f7cbc4}
.is-fo-map{border-top-style:solid;border-top-color:rgba(247,203,196,.32)}
.stmt-ext{margin-top:18px;padding-top:14px;border-top:1px dashed rgba(255,255,255,.28)}
.ext-kicker{display:block;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#a8e4c5;margin-bottom:9px}
.ext-list{list-style:none;margin:0;padding:0}
.ext-list li{display:flex;justify-content:space-between;align-items:baseline;gap:12px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.08)}
.ext-list li span{font-size:13px;line-height:1.35}
.ext-list li em{flex:none;font-family:var(--mono);font-style:normal;font-size:10.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:rgba(255,255,255,.48)}
.ext-note{font-size:12px;line-height:1.45;color:rgba(255,255,255,.56);margin:11px 0 0}
.stmt-min{font-size:11.5px;line-height:1.45;color:#F2B8AE;margin:14px 0 0;
padding:10px 12px;background:rgba(242,184,174,.09);border-left:2px solid rgba(242,184,174,.5);border-radius:2px}
.stmt-foot{font-size:12px;line-height:1.45;color:rgba(255,255,255,.52);margin:16px 0 0}

.lockbox{padding:18px 0 2px}
.lock-kicker{display:block;font-family:var(--mono);font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.46);margin-bottom:8px}
.lock-answer{font-size:15px;line-height:1.45;margin:0 0 14px;color:rgba(255,255,255,.82);font-weight:500}
.lock-answer b{font-weight:600;color:#fff}
.lock-counts{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.lock-counts li,.lock-counts button{font-size:12px;font-weight:600;color:#fff;background:rgba(255,255,255,.14);padding:5px 11px;border-radius:5px}
.lock-counts .quoted-count{padding:0;background:transparent}
.lock-counts button{border:0;cursor:pointer;font-family:inherit}
.lock-counts button:hover,.lock-counts button.is-on{background:rgba(255,255,255,.24)}
.lock-counts b{font-family:var(--mono);color:#fff}
.locked-preview{position:relative;margin:20px 0 18px}
.locked-preview:after{content:"";position:absolute;inset:-8px;border-radius:8px;z-index:1;
background:linear-gradient(180deg,rgba(59,47,88,0),rgba(59,47,88,.28));pointer-events:none}
.locked-preview-data{position:relative}
.is-blurred .locked-value{display:inline-block;filter:blur(5px);opacity:.72;user-select:none}
.is-blurred .d-label,.is-blurred .d-sub,.is-blurred .q{opacity:.86}
.stmt-table.is-blurred,.stmt-totals.is-blurred{position:relative}
.unlock-overlay-btn{position:absolute;left:50%;top:57%;z-index:2;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.28);background:rgb(215 61 61);backdrop-filter:blur(8px);color:#fff;border-radius:7px;padding:10px 16px;font-size:13px;font-weight:600;
box-shadow:0 12px 30px rgba(20,14,34,.24);cursor:pointer;text-transform: capitalize;}
.unlock-overlay-btn:hover{background:rgba(255,255,255,.25)}
.lock-cta{display:flex;gap:9px;font-size:13px;line-height:1.5;color:rgba(255,255,255,.74);margin:0;padding-top:15px;border-top:1px solid rgba(255,255,255,.16)}
.lock-icon{flex:none;font-size:13px;line-height:1.4}

.capture{margin-top:0;border:1px solid var(--rule);border-radius:8px;padding:24px;background:#fff}
.capture h3{font-size:22px;line-height:1.2;margin:0 0 8px;font-weight:600;color:var(--ink)}
.capture p{font-size:14px;color:var(--ink-2);margin:0 0 17px;line-height:1.5}
.modal-backdrop{position:fixed;inset:0;z-index:9999;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(36,22,61,.64)}
.modal-card{position:relative;width:min(100%,430px);max-height:calc(100vh - 44px);overflow:auto;box-shadow:0 28px 90px rgba(22,16,35,.28)}
.modal-close{position:absolute;top:12px;right:12px;width:32px;height:32px;border:1px solid var(--rule);background:var(--paper);color:var(--ink-2);border-radius:6px;cursor:pointer;font-size:16px;line-height:1}
.modal-close:hover{color:var(--ink);border-color:#b9b1ca}
.modal-close:disabled{opacity:.55;cursor:not-allowed}
.modal-card h3,.modal-card p{padding-right:34px}
.inp{width:100%;padding:11px 12px;border:1px solid #d9d4e3;border-radius:6px;font-size:14px;font-family:inherit;margin-bottom:9px;background:#fff;color:var(--ink)}
.react-tel-input{width:100%}
.react-tel-input .form-control{width:100%;height:42px;padding-left:48px;border:1px solid #d9d4e3;border-left:0;border-radius:0 6px 6px 0;background:#fff;color:var(--ink);font-size:14px;box-shadow:none}
.react-tel-input .form-control:focus{border-color:#8b79ba;box-shadow:0 0 0 3px rgba(93,80,132,.12);outline:none}
.react-tel-input .selected-flag{height:42px;border:1px solid #d9d4e3;border-right:0;border-radius:6px 0 0 6px;background:#fff;padding:0 0 0 10px}
.react-tel-input .selected-flag:hover,.react-tel-input .selected-flag:focus,.react-tel-input .selected-flag.open{background:#fff}
.react-tel-input .country-list{border:1px solid #d9d4e3;border-radius:6px;box-shadow:0 12px 30px rgba(22,16,35,.14);margin-top:6px}
.inp-label{display:block;font-size:12px;color:var(--ink-2);margin:8px 0 5px}
.rc .err{font-size:12px;color:var(--clay);margin:4px 0 0}
.cta{width:100%;margin-top:8px;padding:12px;background:var(--purple-dark);color:#fff;border:0;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer,text-transform: capitalize;}
.cta:disabled{background:#d9d4e3;color:#6f6a78;cursor:not-allowed}
.done h3{color:var(--jade)}
.mm-hide{
text-align:center;
padding:40px 0px
}
.mm-hide .mm-hide-new{
padding: 13px 60px;
    font-size: 18px;

    background: #3b2f58;
}
.mm-hide .mm-hide-new:hover{
    background: #d73d3d;
}
@media (max-width:1100px){
  .rc-grid{grid-template-columns:minmax(0,1fr);gap:24px}
  .rc-statement{position:static;order:2}
}
/* @media (max-width:992px){ */
/*   .rc{padding:0 16px 48px;background:linear-gradient(180deg,var(--purple) 0 560px,var(--paper) 560px 100%)} */
/*   .rc-head{padding:42px 0 104px} */
/*   .rc-head h1{font-size:40px;line-height:1.1} */
/*   .rc-dek{font-size:17px} */
/*   .rc-stats{grid-template-columns:1fr;gap:18px;margin-top:32px} */
/*   .rc-grid{margin-top:-64px} */
/*   .rc-inputs,.stmt{padding:24px} */
/*   .rc-toolbar{align-items:flex-start;flex-direction:column} */
/*   .cap{align-items:flex-start} */
/*   .rc .tag{margin-left:auto} */
/*   .stp{align-items:flex-start;flex-direction:column} */
/*   .stp-ctl{align-self:flex-end} */
/*   .stmt-heading-row{align-items:flex-start;flex-direction:column} */
/* } */
@media (max-width:992px){
  .rc{padding:0 16px 108px;background:linear-gradient(180deg,var(--purple) 0 560px,var(--paper) 560px 100%)}
  .rc-head{padding:42px 0 104px}
  .rc-head h1{font-size:40px;line-height:1.1}
  .rc-dek{font-size:17px}

  /* 3-up compact stat row instead of stacked full-width rows */
  .rc-stats{grid-template-columns:repeat(3,1fr);gap:14px;margin-top:28px}
  .rc-stats dt{font-size:22px}
  .rc-stats dd{font-size:11px;line-height:1.3}

  .rc-grid{margin-top:-64px}
  .rc-inputs,.stmt{padding:24px}
  .rc-toolbar{align-items:flex-start;flex-direction:column}
  .cap{align-items:flex-start}
  .rc .tag{margin-left:auto}
  .stp{align-items:flex-start;flex-direction:column}
  .stp-ctl{align-self:flex-end}
  .stmt-heading-row{align-items:flex-start;flex-direction:column}

  /* sticky bar now owns the primary CTA on mobile */
  .stmt-heading-row .unlock-btn{display:none}

  /* modal becomes a bottom sheet */
  .modal-backdrop{align-items:flex-end;padding:0}
  .modal-card{width:100%;max-width:100%;border-radius:16px 16px 0 0;max-height:88vh}
}

/* sticky mobile summary/CTA bar */
.rc-mobile-bar{display:none}
@media (max-width:992px){
  .rc-mobile-bar{
    display:flex;align-items:center;justify-content:space-between;gap:14px;
    position:fixed;left:0;right:0;bottom:0;z-index: 2147483647 !important;
    background:var(--purple-dark);color:#fff;
    padding:12px 16px calc(12px + env(safe-area-inset-bottom));
    box-shadow:0 -8px 24px rgba(22,16,35,.22);
  }
  .rc-mobile-bar-price{display:flex;flex-direction:column;line-height:1.15}
  .rc-mobile-bar-price span{font-size:11px;color:rgba(255,255,255,.65)}
  .rc-mobile-bar-price b{font-family:var(--mono);font-size:19px;font-variant-numeric:tabular-nums}
  .rc-mobile-bar-cta{
    flex:none;background:rgb(215 61 61);color:#fff;border:0;border-radius:6px;
    padding:11px 18px;font-size:14px;font-weight:600;cursor:pointer;text-transform: capitalize;
  }
   .zsiq_custommain,
  .zsiq_floatmain {
    z-index: 1 !important;
  } 
    .rc-mobile-bar-price {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
  }

  .rc-mobile-bar-price span {
    font-size: 11px;
    color: rgba(255,255,255,.65);
  }

  .rc-mobile-bar-price b {
    font-family: var(--mono);
    font-size: 19px;
    font-variant-numeric: tabular-nums;

    /* Blur price until form is submitted */
    filter: blur(6px);
    user-select: none;
    opacity: .7;
    transition: filter .25s ease, opacity .25s ease;
  }

  /* Show real price after form submission */
  .rc-mobile-bar-price.is-unlocked b {
    filter: blur(0);
    opacity: 1;
  }
    .siq_bR {
    bottom: 80px;
    right: 10px;
    display:none !important
}
    .fixed-button,.mm-hide {
    bottom: 130px;
    display:none
}
}
@media (prefers-reduced-motion:reduce){.rc *{transition:none!important}}
`;
