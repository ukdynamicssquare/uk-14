import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { calculate, resolveVerdict, fmt } from "../licensingEngine";
import styles from "../../styles/licensingAssessment.module.css";

const API = "/api/licensing";

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

const fetchCatalog = async (unlockToken) => {
  const r = await fetch(`${API}/catalog/`, {
    cache: "no-store",
    headers: unlockToken ? { "x-unlock-token": unlockToken } : {},
  });
  if (!r.ok) throw new Error("catalog");
  return r.json();
};

const submitLead = async (payload) => {
  const r = await fetch(`${API}/lead/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(data.message || "");
  return data;
};

/* UK site: show GBP first when the catalog offers it. */
const pickCurrency = (c) => ((c?.currencies || []).includes("GBP") ? "GBP" : c?.defaultCurrency);

const Icon = ({ name }) => <i className={`bi bi-${name}`} aria-hidden="true" />;

const cx = (...names) => names.filter(Boolean).join(" ");

const twoDigits = (n) => String(n).padStart(2, "0");

/* Each capability group and each question section in the catalog is its own step. */
const buildSteps = (catalog) => [
  ...(catalog.capabilities || []).map((group) => ({ title: group.name, group })),
  ...(catalog.sections || []).map((section) => ({ title: section.name, section })),
  { title: catalog.content?.form?.lockedHeading, report: true },
];

/* Form checks are the same as the live calculator (components/LicenceRateCard.js). */
const isValidBusinessEmail = (email) => {
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
};

const isValidPhoneNumber = (phone) => {
  const digitsOnly = (phone || "").replace(/\D/g, "");
  return digitsOnly.length >= 8 && digitsOnly.length <= 15;
};

// The widget seeds the field with a dial code, so that alone is not an entry.
const phoneProvided = (phone, dial) => {
  const digits = (phone || "").replace(/\D/g, "");
  const code = (dial || "").replace(/\D/g, "");
  return !!digits && digits !== code;
};

const validateField = (field, value, dial) => {
  if (field === "name") return value.trim() ? "" : "Name is required";
  if (field === "email") {
    if (!value.trim()) return "Email is required";
    return isValidBusinessEmail(value) ? "" : "Please enter a valid company email address";
  }
  if (field === "phone") {
    // Optional, but a number that is typed still has to be a real one.
    if (!phoneProvided(value, dial)) return "";
    return isValidPhoneNumber(value) ? "" : "Please enter a valid phone number";
  }
  return "";
};

/* Licence rows before prices are unlocked; the panel shows the first one. */
const unpricedLines = (verdict, answers) =>
  [
    {
      k: "full",
      qty: verdict.billedFullUsers,
      label: `Dynamics 365 ${verdict.platformLabel}`,
      sub: verdict.foMinimumApplied
        ? `${verdict.foMinSeats} full-user minimum (you entered ${answers.fullUsers})`
        : "Full user",
    },
    verdict.platform === "fo" && {
      k: "activity",
      qty: answers.activityUsers,
      label: "Operations Activity",
      sub: "Single-function operational access",
    },
    { k: "team", qty: answers.teamUsers, label: "Team Members", sub: "Read, approve, time and expense" },
    {
      k: "device",
      qty: answers.deviceUsers,
      label: verdict.platform === "fo" ? "Operations Device" : "Device licence",
      sub: "Shared terminal, unlimited users",
    },
  ].filter((l) => l && l.qty > 0);

export const priceNote = (catalog, priced) => {
  const S = catalog.content?.statement || {};
  const parts = [priced.extensions.length > 0 && S.coreOnlyPrefix, S.footnote];
  if (!priced.pricingTrusted) parts.push("Prices in this currency are placeholders pending verification.");
  else if (priced.pricingVerified && priced.pricingVerified !== "placeholder") {
    parts.push(`List prices verified ${priced.pricingVerified}.`);
  }
  return parts.filter(Boolean).join(" ");
};

export const minimumNote = (seats) =>
  `Microsoft sells the primary Finance & Operations application with a ${seats} full-user minimum, and it cannot be split across core applications.`;

export default function LicensingAssessment({ initialCatalog = null }) {
  const [catalog, setCatalog] = useState(initialCatalog);
  const [loadError, setLoadError] = useState(null);
  const [currency, setCurrency] = useState(() => pickCurrency(initialCatalog) || null);
  const topRef = useRef(null);
  const headRef = useRef(null);
  const firstRender = useRef(true);
  const [step, setStep] = useState(0);
  // Step on which Next was pressed with questions unanswered; those questions are flagged.
  const [tried, setTried] = useState(-1);

  const [caps, setCaps] = useState(() => new Set());
  const [answers, setAnswers] = useState({
    entities: 1, countries: 1, revenue: "", fullUsers: 1, teamUsers: 0, deviceUsers: 0, activityUsers: 0,
  });

  const [lead, setLead] = useState({ name: "", email: "", company: "", phone: "", renewal: "" });
  const [defaultPhoneCountry, setDefaultPhoneCountry] = useState("gb");
  const [phoneDialCode, setPhoneDialCode] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState(null);

  useEffect(() => {
    if (initialCatalog) return undefined;
    let alive = true;
    fetchCatalog()
      .then((data) => {
        if (!alive) return;
        setCatalog(data);
        setCurrency(pickCurrency(data));
      })
      .catch(() => alive && setLoadError("The rate card could not be loaded. Please refresh and try again."));
    return () => { alive = false; };
  }, [initialCatalog]);

  useEffect(() => {
    const detectPhoneCountry = async () => {
      try {
        const res = await fetch("https://api.ipdata.co?api-key=00163619f1de9b2adebdc3a316b8958c4864bcc38ca547a8fd081d6e");
        if (!res.ok) throw new Error("IP detection failed");
        const data = await res.json();
        setDefaultPhoneCountry((data?.country_code || "gb").toLowerCase());
      } catch {
        setDefaultPhoneCountry("gb");
      }
    };

    detectPhoneCountry();
  }, []);

  useEffect(() => {
    if (firstRender.current) { firstRender.current = false; return; }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    headRef.current?.focus({ preventScroll: true });
  }, [step, sent]);

  const steps = useMemo(() => (catalog ? buildSteps(catalog) : []), [catalog]);
  const input = useMemo(() => ({ ...answers, capabilities: caps }), [answers, caps]);
  const verdict = useMemo(() => (catalog ? resolveVerdict(catalog, input) : null), [catalog, input]);
  // Rates only arrive with the unlock token that comes back once the form is sent.
  const prices = currency ? catalog?.pricing?.[currency] : null;
  const priced = useMemo(
    () => (catalog && !catalog.gated && prices?.bc ? calculate(catalog, prices, input) : null),
    [catalog, prices, input]
  );

  const toggleCap = (id) =>
    setCaps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });

  const setAnswer = (key, value) => setAnswers((prev) => ({ ...prev, [key]: value }));
  const setLeadField = (key, value, dial) => {
    setLead((prev) => ({ ...prev, [key]: value }));
    setFormErrors((prev) => ({ ...prev, [key]: validateField(key, value, dial) }));
  };

  const send = async (event) => {
    event.preventDefault();

    const errors = {
      name: validateField("name", lead.name),
      email: validateField("email", lead.email),
      phone: validateField("phone", lead.phone, phoneDialCode),
    };
    setFormErrors(errors);
    if (Object.values(errors).some(Boolean) || sending) return;

    setSending(true);
    setSendError(null);
    const company = lead.company.trim();
    const phone = lead.phone.trim();
    const renewal = lead.renewal.trim();
    try {
      // Same lead format as the live calculator (components/LicenceRateCard.js).
      const res = await submitLead({
        name: lead.name.trim(),
        email: lead.email.trim(),
        company, company_name: company, companyname: company,
        phone, phone_number: phone, telephone: phone, mobile: phone,
        renewal, renewal_month: renewal,
        source: "licence-rate-card",
        currency,
        ...answers,
        activityUsers: verdict.platform === "fo" ? answers.activityUsers : 0,
        capabilities: [...caps],
      });
      if (res?.unlockToken) {
        try {
          setCatalog(await fetchCatalog(res.unlockToken));
        } catch {
          // The enquiry is already recorded, so show the result without prices.
        }
      }
      setSent(true);
    } catch (err) {
      setSendError(err.message || catalog.content?.errors?.submitFailed || "Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  // Builds the PDF in the browser; the generator (and jsPDF) load only on click.
  // The tab is opened straight away (inside the click) so pop-up blockers allow it,
  // then pointed at the PDF once it has been built.
  const downloadPdf = async () => {
    setPdfBusy(true);
    setPdfError(null);
    const tab = window.open("", "_blank");
    if (tab) {
      tab.opener = null;
      tab.document.title = "Preparing your report…";
      tab.document.body.innerHTML =
        '<p style="font:16px/1.5 system-ui,sans-serif;color:#55505F;padding:32px">Preparing your report…</p>';
    }
    try {
      const { buildReport } = await import("./licenceReportPdf");
      const { doc, filename } = await buildReport({ catalog, verdict, priced, input, lead });
      if (tab && !tab.closed) {
        tab.location.href = URL.createObjectURL(doc.output("blob"));
      } else {
        doc.save(filename); // pop-ups blocked: fall back to a normal download
      }
    } catch (err) {
      if (tab && !tab.closed) tab.close();
      setPdfError("The report could not be created. Please try again.");
    } finally {
      setPdfBusy(false);
    }
  };

  if (loadError || !catalog || !verdict) {
    return (
      <div className={styles.tool}>
        <p className={cx(styles.load, loadError && styles.loadError)}>{loadError || "Loading the rate card…"}</p>
      </div>
    );
  }

  const C = catalog.content || {};
  const S = C.statement || {};
  const current = steps[step];
  const last = steps.length - 1;
  const money = (n) => `${priced.symbol}${fmt(n)}`;

  // A tag shared by the whole group is shown once under the heading.
  const tagOf = (c) => catalog.tierTag?.[c.tier]?.label;
  const groupTags = [...new Set((current.group?.group || []).map(tagOf))];
  const groupTag = groupTags.length === 1 ? groupTags[0] : null;

  const isVisible = (f) => f.showWhen !== "platform:fo" || verdict.platform === "fo";
  const fields = (current.section?.fields || []).filter(isVisible);
  const userKeys = ["fullUsers", "teamUsers", "deviceUsers", "activityUsers"];
  const asksUsers = fields.some((f) => userKeys.includes(f.key));
  const hasUsers = fields.some((f) => userKeys.includes(f.key) && answers[f.key] > 0);

  const canNext = fields.every((f) => f.type !== "choice" || answers[f.key]) && (!asksUsers || hasUsers);
  const goNext = () => {
    if (!canNext) {
      setTried(step);
      requestAnimationFrame(() =>
        topRef.current?.querySelector("[data-missing]")?.scrollIntoView({ behavior: "smooth", block: "center" })
      );
      return;
    }
    setTried(-1);
    setStep(step + 1);
  };

  return (
    <div className={styles.tool} ref={topRef}>
      <div className={styles.wrap}>
        {sent && (
          <h2 className={cx(styles.section, styles.sectionDone)} ref={headRef} tabIndex={-1}>Your licence estimate</h2>
        )}

        <div className={cx(styles.grid, sent && styles.gridDone)}>
          {!sent && (
            <div className={styles.card}>
              <div className={styles.cardBar} role="progressbar" aria-label="Estimate progress"
                aria-valuemin={1} aria-valuemax={steps.length} aria-valuenow={step + 1}>
                <span style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
              </div>
              <span className={styles.stepCount}>Step {step + 1} of {steps.length}</span>
              <h2 id="la-title" className={styles.section} ref={headRef} tabIndex={-1}>{current.title}</h2>
              {groupTag && <p className={styles.groupTag}>{groupTag}</p>}

              {current.group && (
                <div className={styles.field} role="group" aria-labelledby="la-title">
                  {current.group.sub && <p className={styles.sub}>{current.group.sub}</p>}
                  <ul className={styles.caps}>
                    {current.group.group.map((c) => (
                      <li key={c.id}>
                        <Capability item={c} tag={groupTag ? null : tagOf(c)} on={caps.has(c.id)} toggle={toggleCap} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {current.section && (
                <>
                  {current.section.sub && <p className={cx(styles.sub, styles.subLead)}>{current.section.sub}</p>}
                  {fields.map((f) =>
                    f.type === "choice" ? (
                      <Choice key={f.key} field={f} value={answers[f.key]} set={(v) => setAnswer(f.key, v)}
                        missing={tried === step && !answers[f.key]} />
                    ) : (
                      <div key={f.key}>
                        <Stepper field={f} value={answers[f.key]} set={(v) => setAnswer(f.key, v)} />
                        {f.key === "fullUsers" && verdict.foMinimumApplied && (
                          <div className={styles.flag} role="status">{minimumNote(verdict.foMinSeats)}</div>
                        )}
                      </div>
                    )
                  )}
                  {asksUsers && !hasUsers && tried === step && (
                    <span className={cx(styles.err, styles.missingMsg)} role="alert" data-missing>
                      <Icon name="exclamation-circle" /> {S.emptyText}
                    </span>
                  )}
                </>
              )}

              {current.report && (
                <form className={styles.capture} onSubmit={send}>
                  <p className={styles.sub}>{C.form?.lockedBody}</p>
                  <div className={styles.form}>
                    <div>
                      <input
                        className={styles.input}
                        placeholder={C.form?.namePlaceholder}
                        aria-label={C.form?.namePlaceholder}
                        autoComplete="name"
                        value={lead.name}
                        onChange={(e) => setLeadField("name", e.target.value)}
                        required
                      />
                      {formErrors.name && <p className={styles.err} role="alert">{formErrors.name}</p>}
                    </div>
                    <div>
                      <input
                        className={styles.input}
                        type="email"
                        placeholder={C.form?.emailPlaceholder}
                        aria-label={C.form?.emailPlaceholder}
                        autoComplete="email"
                        value={lead.email}
                        onChange={(e) => setLeadField("email", e.target.value)}
                        required
                      />
                      {formErrors.email && <p className={styles.err} role="alert">{formErrors.email}</p>}
                    </div>
                    <div>
                      <input
                        className={styles.input}
                        placeholder={C.form?.companyPlaceholder}
                        aria-label={C.form?.companyPlaceholder}
                        autoComplete="organization"
                        value={lead.company}
                        onChange={(e) => setLeadField("company", e.target.value)}
                      />
                    </div>
                    <div>
                      <PhoneInput
                        country={defaultPhoneCountry || "gb"}
                        value={lead.phone}
                        onChange={(value, country) => {
                          const dial = country?.dialCode || "";
                          setPhoneDialCode(dial);
                          setLeadField("phone", value || "", dial);
                        }}
                        inputProps={{
                          name: "phone",
                          "aria-label": "Phone number (optional)",
                          autoComplete: "tel",
                        }}
                        containerClass={styles.phone}
                        countryCodeEditable={false}
                        disableSearchIcon
                        excludeCountries={["pk"]}
                      />
                      {formErrors.phone && <p className={styles.err} role="alert">{formErrors.phone}</p>}
                    </div>
                    <div className={styles.wide}>
                      <label className={styles.inputLabel} htmlFor="la-renewal">
                        {C.form?.renewalLabel}
                      </label>
                      <input
                        id="la-renewal"
                        className={styles.input}
                        placeholder={C.form?.renewalPlaceholder}
                        value={lead.renewal}
                        onChange={(e) => setLeadField("renewal", e.target.value)}
                      />
                    </div>
                  </div>
                  {sendError && <p className={styles.err} role="alert">{sendError}</p>}
                  <button
                    type="submit"
                    className={styles.submit}
                    disabled={!lead.name.trim() || !isValidBusinessEmail(lead.email) || sending}
                  >
                    {sending ? C.form?.sendingLabel : C.form?.lockedCtaLabel}
                  </button>
                </form>
              )}

              <div className={styles.nav}>
                {step > 0 ? (
                  <button type="button" className={styles.back} onClick={() => setStep(step - 1)} disabled={sending}>
                    <Icon name="arrow-left" /> Back
                  </button>
                ) : <span />}

                {step < last && (
                  <button type="button" className={styles.next} onClick={goNext}>
                    Next <Icon name="arrow-right" />
                  </button>
                )}
              </div>
            </div>
          )}

          <aside className={styles.side}>
            <div className={styles.verdict}>
              <span className={styles.kicker}>{S.kicker}</span>
              <h3 className={styles.vname} aria-live="polite">Dynamics 365 {verdict.platformLabel}</h3>

              <ul className={styles.counts}>
                <li><b>{twoDigits(verdict.capabilityCount)}</b> Capabilities selected</li>
                <li><b>{twoDigits(verdict.moduleCount)}</b> F&amp;O modules</li>
                <li><b>{twoDigits(verdict.extensionCount)}</b> Quoted separately</li>
              </ul>

              <Lines lines={priced?.lines || unpricedLines(verdict, answers).slice(0, 1)} money={priced && money} emptyText={S.emptyText} />

              {sent && !priced ? (
                <p className={styles.vnote}>{C.success?.body}</p>
              ) : (
                <div className={styles.pricing}>
                  <span className={styles.pricingHead}>Pricing</span>
                  <dl>
                    <Price label={S.perMonth} value={priced && money(priced.monthly)} symbol={prices?.symbol} />
                    <Price label={S.perYear} value={priced && money(priced.annual)} symbol={prices?.symbol} />
                    <Price label={S.perThreeYears} value={priced && money(priced.threeYear)} symbol={prices?.symbol} />
                  </dl>
                </div>
              )}

              {sent && priced && <Extras catalog={catalog} priced={priced} />}
            </div>

            {sent && priced && (
              <>
                {catalog.currencies.length > 1 && (
                  <div className={styles.currency} role="group" aria-label="Currency">
                    {catalog.currencies.map((c) => (
                      <button type="button" key={c} className={currency === c ? styles.on : undefined}
                        onClick={() => setCurrency(c)} aria-pressed={currency === c}>{c}</button>
                    ))}
                  </div>
                )}
                <p className={styles.foot}>{priceNote(catalog, priced)}</p>
                <button type="button" className={styles.pdf} onClick={downloadPdf} disabled={pdfBusy}>
                  <Icon name="file-earmark-arrow-down" /> {pdfBusy ? "Preparing your report…" : "Download full report"}
                </button>
                {pdfError && <span className={styles.err} role="alert">{pdfError}</span>}
              </>
            )}

            {sent && (
              <div className={styles.ctaRow}>
                <Link href="/schedule-a-demo/" className={styles.ctaMain}>
                  Schedule demo <Icon name="arrow-right" />
                </Link>
                <a href="tel:+442037697689" className={styles.ctaCall}>
                  <Icon name="telephone" /> Call +44 203 769 7689
                </a>
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

function Lines({ lines, money, emptyText }) {
  if (!lines.length) return <p className={styles.vnote}>{emptyText}</p>;
  return (
    <ul className={styles.lines}>
      {lines.map((l) => (
        <li key={l.k}>
          <b>{l.qty}</b>
          <span aria-hidden="true">×</span>
          <span className={styles.lineText}>{l.label}<small>{l.sub}</small></span>
          {money && <span className={styles.lineAmount}>{money(l.total)}<small>{money(l.rate)} each</small></span>}
        </li>
      ))}
    </ul>
  );
}

function Price({ label, value, symbol }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>
        {value || (
          <>
            <span className={styles.blurred} aria-hidden="true">{symbol} 00,000</span>
            <span className="visually-hidden">Locked</span>
          </>
        )}
      </dd>
    </div>
  );
}

function Extras({ catalog, priced }) {
  const S = catalog.content?.statement || {};

  return (
    <>
      {priced.beyondDrivers.length > 0 && (
        <div className={styles.ev}>
          <span className={styles.evHead}>{S.modulesKicker}</span>
          {priced.beyondDrivers.map((d) => (
            <span className={styles.evRow} key={d.id}>{d.fo}<em>{catalog.appShort?.[d.app]}</em></span>
          ))}
        </div>
      )}

      {priced.extensions.length > 0 && (
        <div className={styles.ev}>
          <span className={styles.evHead}>{S.extensionsKicker}</span>
          {priced.extensions.map((e) => (
            <span className={styles.evRow} key={e.id}>{e.label}<em>Quoted</em></span>
          ))}
        </div>
      )}
    </>
  );
}

function Capability({ item, tag, on, toggle }) {
  return (
    <button type="button" className={cx(styles.cap, on && styles.on)} onClick={() => toggle(item.id)} aria-pressed={on}>
      <span className={styles.capBox} aria-hidden="true">{on && <Icon name="check-lg" />}</span>
      <span className={styles.capText}>
        <span className={styles.capLabel}>{item.label}</span>
        {item.note && <span className={styles.capNote}>{item.note}</span>}
        {tag && <span className={styles.capTag}>{tag}</span>}
      </span>
    </button>
  );
}

function Choice({ field, value, set, missing }) {
  return (
    <div className={cx(styles.field, missing && styles.missing)} data-missing={missing || undefined}>
      <span className={styles.label} id={`la-${field.key}`}>{field.label}</span>
      <div className={styles.segs} role="group" aria-labelledby={`la-${field.key}`}>
        {field.options.map((o) => (
          <button type="button" key={o.id} className={cx(styles.seg, value === o.id && styles.on)}
            onClick={() => set(o.id)} aria-pressed={value === o.id}>{o.label}</button>
        ))}
      </div>
      {missing && (
        <span className={cx(styles.err, styles.missingMsg)} role="alert">
          <Icon name="exclamation-circle" /> Please select an option
        </span>
      )}
    </div>
  );
}

function Stepper({ field, value, set }) {
  const { label, hint, min = 0, max = 999 } = field;
  const clamp = (n) => Math.min(max, Math.max(min, Math.round(n) || 0));

  return (
    <div className={styles.stepper}>
      <div className={styles.stepperText}>
        <span className={styles.label}>{label}</span>
        {hint && <span className={styles.stepperHint}>{hint}</span>}
      </div>
      <div className={styles.stepperCtl}>
        <button type="button" onClick={() => set(clamp(value - 1))} aria-label={`Decrease ${label}`}><Icon name="dash-lg" /></button>
        <input type="number" inputMode="numeric" value={value} min={min} max={max} aria-label={label}
          onChange={(e) => set(clamp(Number(e.target.value)))} />
        <button type="button" onClick={() => set(clamp(value + 1))} aria-label={`Increase ${label}`}><Icon name="plus-lg" /></button>
      </div>
    </div>
  );
}
