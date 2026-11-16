import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { assess, fmt } from "./migrationEngine";

/* Calls go through /api/migration (pages/api/migration) because the upstream API
   only accepts browser requests from a fixed list of origins. */
const API = "/api/migration";

const fetchMigrationCatalog = async () => {
  const r = await fetch(`${API}/catalog/`);
  if (!r.ok) throw new Error("catalog");
  return r.json();
};

const submitMigrationLead = async (payload) => {
  const r = await fetch(`${API}/lead/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await r.json().catch(() => ({}));
  if (!r.ok) throw { response: { data } };
  return data;
};

/* UK site: show GBP first when the catalog offers it. */
const pickCurrency = (c) => ((c?.currencies || []).includes("GBP") ? "GBP" : c?.defaultCurrency);

const Icon = ({ name }) => <i className={`bi bi-${name}`} aria-hidden="true" />;

const list = (a) => (a.length === 1 ? a[0] : `${a.slice(0, -1).join(", ")} and ${a[a.length - 1]}`);

const STEPS = ["Current System", "Business Profile", "Operations", "What the Move Involves", "Timing", "Your Report"];

export default function MigrationAssessment({ initialCatalog = null }) {
  const [catalog, setCatalog] = useState(initialCatalog);
  const [loadError, setLoadError] = useState(null);
  const [currency, setCurrency] = useState(() => pickCurrency(initialCatalog) || null);
  const topRef = useRef(null);
  const firstStep = useRef(true);
  const [step, setStep] = useState(0);
  // Step on which Next was pressed with questions unanswered; those questions are flagged.
  const [tried, setTried] = useState(-1);

  const [source, setSource] = useState("");
  const [version, setVersion] = useState("");
  const [years, setYears] = useState("");
  const [users, setUsers] = useState("");
  const [full, setFull] = useState(1);
  const [light, setLight] = useState(0);
  const [entities, setEntities] = useState("");
  const [countries, setCountries] = useState("");
  const [revenue, setRevenue] = useState("");
  const [volume, setVolume] = useState("");
  const [cx, setCx] = useState(() => new Set());
  const [custom, setCustom] = useState("");
  const [integrations, setIntegrations] = useState(2);
  const [history, setHistory] = useState("");
  const [it, setIt] = useState("");
  const [golive, setGolive] = useState("");
  const [budget, setBudget] = useState("");

  const [lead, setLead] = useState({ name: "", email: "", company: "", phone: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState(null);
  const [sendError, setSendError] = useState(null);

  useEffect(() => {
    if (initialCatalog) return undefined;
    let alive = true;
    fetchMigrationCatalog()
      .then((data) => {
        if (!alive) return;
        setCatalog(data);
        setCurrency(pickCurrency(data));
      })
      .catch(() => alive && setLoadError("The assessment could not be loaded. Please refresh and try again."));
    return () => { alive = false; };
  }, [initialCatalog]);

  useEffect(() => {
    if (firstStep.current) { firstStep.current = false; return; }
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step]);

  const toggleCx = (id) =>
    setCx((prev) => {
      const n = new Set(prev);
      if (n.has(id)) n.delete(id); else n.add(id);
      return n;
    });

  const input = useMemo(
    () => ({
      source, version, years, users, entities, countries, revenue, volume,
      complexity: [...cx], customisations: custom, integrations, history, it,
      golive, budget, fullUsers: full, lightUsers: light,
    }),
    [source, version, years, users, entities, countries, revenue, volume, cx, custom, integrations, history, it, golive, budget, full, light]
  );

  const p = currency ? catalog?.pricing?.[currency] : null;
  const m = useMemo(() => (catalog ? assess(catalog, p, input) : null), [catalog, p, input]);

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
      const { buildReport } = await import("./reportPdf");
      const { doc, filename } = await buildReport({ catalog, m, input, lead, currency });
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

  const send = async () => {
    setSending(true);
    setSendError(null);
    try {
      // `source` inside input is the system being left; `channel` tags the lead.
      await submitMigrationLead({ ...input, ...lead, currency, channel: "migration-assessment" });
      setSent(true);
    } catch (err) {
      setSendError(err?.response?.data?.message || catalog?.content?.errors?.submitFailed || "That did not send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  if (loadError || !catalog || !m) {
    return (
      <div className="ma">
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
        <p className={"ma-load" + (loadError ? " err" : "")}>{loadError || "Loading the assessment…"}</p>
      </div>
    );
  }

  const C = catalog.content || {};
  // Warnings tied to a question show under that question while answering.
  const flagsFor = (field) => m.risks.filter((r) => r.field === field);
  const last = STEPS.length - 1;
  // Every option question on a step must be answered before moving on (the step 3 checklist is optional).
  const required = [
    [source, years],
    [users, entities, countries, revenue, volume],
    [],
    [custom, history, it],
    [golive, budget],
    [],
  ];
  const canNext = (required[step] || []).every(Boolean);
  const miss = (v) => tried === step && !v;
  const goNext = () => {
    if (!canNext) {
      setTried(step);
      requestAnimationFrame(() =>
        document.querySelector(".ma-field.missing")?.scrollIntoView({ behavior: "smooth", block: "center" })
      );
      return;
    }
    setTried(-1);
    setStep(step + 1);
  };
  const marker = Math.max(3, Math.min(97, 50 + m.score * 0.55));
  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="ma" ref={topRef}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="ma-wrap">
        <div className={"ma-head" + (sent ? " done" : "")}>
          <h2 className="ma-section">{STEPS[step]}</h2>
        </div>

        <div className={"ma-grid" + (sent ? " done" : "")}>
          {/* -------------------------- main card (hidden once the report is requested) -------------------------- */}
          {!sent && (
          <div className="ma-card">
            {/* progress runs along the top edge of the card */}
            <div className="ma-card-bar" role="progressbar" aria-label="Assessment progress"
              aria-valuemin={1} aria-valuemax={STEPS.length} aria-valuenow={step + 1}>
              <span style={{ width: `${progress}%` }} />
            </div>
            <span className="ma-progress-step">Step {step + 1} of {STEPS.length}</span>
            {step === 0 && (
              <>
                <Field label="What you are running today" missing={miss(source)}>
                  <p className="ma-sub">
                    Pick the system your finance team posts to. If you run more than one, pick the one that owns the ledger.
                  </p>
                  <SourcePicker groups={catalog.sources || []} value={source} set={setSource} />
                  <Flags list={flagsFor("source")} />
                </Field>

                <Field label="Which version or edition?" htmlFor="ver">
                  <input id="ver" className="ma-input" placeholder="e.g. NAV 2016, GP 2018 R2, ECC 6 EHP7"
                    value={version} onChange={(e) => setVersion(e.target.value)} />
                  <span className="ma-hint">This decides your lifecycle position, which is often not what people expect.</span>
                </Field>

                <Field label="How long have you been on it?" missing={miss(years)}>
                  <Segs value={years} set={setYears} options={catalog.years} />
                </Field>
              </>
            )}

            {step === 1 && (
              <>
                <Field label="People who create and post transactions" missing={miss(users)}>
                  <Segs value={users} set={setUsers} options={catalog.bands.users} />
                </Field>

                <Stepper label="Full users, exact number" hint="For the licence estimate" value={full} set={setFull} min={1} max={2000} />
                <Flags list={flagsFor("fullUsers")} gap />
                <Stepper label="People who only approve or view" hint="Team Member licences" value={light} set={setLight} min={0} max={2000} />

                <div className="ma-two">
                  <div>
                    <Field label="Legal Entities" missing={miss(entities)}>
                      <Segs value={entities} set={setEntities} options={catalog.bands.entities} compact />
                    </Field>
                    <Field label="Countries you operate in" missing={miss(countries)}>
                      <Segs value={countries} set={setCountries} options={catalog.bands.countries} compact />
                    </Field>
                  </div>
                  <Field label="Annual revenue" missing={miss(revenue)}>
                    <Segs value={revenue} set={setRevenue} options={catalog.bands.revenue} />
                  </Field>
                </div>

                <Field label="Transactions a month" missing={miss(volume)}>
                  <Segs value={volume} set={setVolume} options={catalog.bands.volume} />
                </Field>
              </>
            )}

            {step === 2 && (
              <Field label="What the business actually does">
                <p className="ma-sub ma-sub-tight">Tick anything that genuinely applies. Several of these decide the platform on their own.</p>
                <ul className="ma-caps">
                  {(catalog.complexity || []).map((c) => {
                    const on = cx.has(c.id);
                    return (
                      <li key={c.id}>
                        <button className={"ma-cap" + (on ? " on" : "")} onClick={() => toggleCx(c.id)} aria-pressed={on}>
                          <span className="ma-cap-box" aria-hidden="true">{on && <Icon name="check-lg" />}</span>
                          <span className="ma-cap-text">
                            <span className="ma-cap-label">{c.label}</span>
                            {c.note && <span className="ma-cap-note">{c.note}</span>}
                          </span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Field>
            )}

            {step === 3 && (
              <>
                <Field label="Customisations in the current system" missing={miss(custom)}>
                  <Segs value={custom} set={setCustom} options={catalog.customisations} />
                  <Flags list={flagsFor("customisations")} />
                </Field>
                <Stepper label="Systems that connect to it" hint="Banking, EDI, web store, CRM, payroll, BI"
                  value={integrations} set={setIntegrations} min={0} max={30} />
                <Flags list={flagsFor("integrations")} gap />
                <Field label="History you need to bring across" missing={miss(history)}>
                  <Segs value={history} set={setHistory} options={catalog.history} />
                  <Flags list={flagsFor("history")} />
                </Field>
                <Field label="Internal IT capability" missing={miss(it)}>
                  <Segs value={it} set={setIt} options={catalog.it} />
                  <Flags list={flagsFor("it")} />
                </Field>
              </>
            )}

            {step === 4 && (
              <>
                <Field label="When do you need to be live?" missing={miss(golive)}>
                  <Segs value={golive} set={setGolive} options={catalog.golive} />
                  <Flags list={flagsFor("golive")} />
                </Field>
                <Field label="Is there a budget?" missing={miss(budget)}>
                  <Segs value={budget} set={setBudget} options={catalog.budget} />
                </Field>
              </>
            )}

            {step === 5 && (
              <>
                <div className="ma-capture">
                  {!sent ? (
                    <>
                      <h3>{C.form?.heading || "Get your full migration report"}</h3>
                      {C.form?.body && <p className="ma-sub">{C.form.body}</p>}
                      <div className="ma-form">
                        <input className="ma-input" placeholder={C.form?.namePlaceholder || "Full name"}
                          value={lead.name} onChange={(e) => setLead({ ...lead, name: e.target.value })} />
                        <input className="ma-input" type="email" placeholder={C.form?.emailPlaceholder || "Work email"}
                          value={lead.email} onChange={(e) => setLead({ ...lead, email: e.target.value })} />
                        <input className="ma-input" placeholder={C.form?.companyPlaceholder || "Company"}
                          value={lead.company} onChange={(e) => setLead({ ...lead, company: e.target.value })} />
                        <input className="ma-input" placeholder={C.form?.phonePlaceholder || "Phone (optional)"}
                          value={lead.phone} onChange={(e) => setLead({ ...lead, phone: e.target.value })} />
                      </div>
                      {!source && <span className="ma-hint">{C.form?.sourceHint || "Pick your current system in step 1 first."}</span>}
                      {sendError && <span className="ma-err">{sendError}</span>}
                    </>
                  ) : (
                    <div className="ma-done">
                      <span className="ma-done-icon"><Icon name="check-lg" /></span>
                      <h3>{C.success?.heading || "Your report is on its way"}</h3>
                      <p className="ma-sub">{C.success?.body}</p>
                    </div>
                  )}
                </div>
              </>
            )}

            {/* -------------------------- nav -------------------------- */}
            <div className="ma-nav">
              {step > 0 ? (
                <button className="ma-back" onClick={() => setStep(step - 1)}>
                  <Icon name="arrow-left" /> Back
                </button>
              ) : <span />}

              {step < last ? (
                <button className="ma-next" onClick={goNext}>
                  Next <Icon name="arrow-right" />
                </button>
              ) : !sent && (
                <button className="ma-next" onClick={send} disabled={sending || !lead.name || !lead.email || !source}>
                  {sending ? C.form?.sendingLabel || "Sending…" : C.form?.ctaLabel || "Send me the report"}
                  {!sending && <Icon name="arrow-right" />}
                </button>
              )}
            </div>
          </div>
          )}

          {/* -------------------------- verdict -------------------------- */}
          <aside className="ma-side">
            <div className="ma-verdict">
              <span className="ma-kicker">Where you land</span>
              <h3 className="ma-vname">{m.verdict}</h3>

              <div className="ma-bar" role="img" aria-label={`Routing: ${m.verdict}`}>
                <div className="ma-bar-track">
                  <span className="ma-bar-zone" />
                  <span className="ma-bar-pin" style={{ left: `${marker}%` }} />
                </div>
                <div className="ma-bar-ends"><span>Business Central</span><span>Finance &amp; Ops</span></div>
              </div>

              <p className="ma-vtext">
                {m.sourcePath ||
                  (m.platform === "fo"
                    ? "Your current system and business profile are leaning towards Finance & Operations, built for complex, multi-entity organisations."
                    : m.platform === "overlap"
                      ? "Your profile sits in the overlap zone, where either platform can work. The details of the move decide it."
                      : "Your current system and business profile are leaning towards Business Central, the streamlined ERP for growing organisations.")}
              </p>

              {sent && (
                <div className="ma-metrics">
                  <div className="ma-met"><span>Complexity</span><b>{m.complexity}<i>/100</i></b></div>
                  <div className="ma-met"><span>Duration</span><b>{m.minMonths}–{m.maxMonths}<i>mo</i></b></div>
                  <div className="ma-met">
                    <span>Licences</span>
                    <b>{m.licence ? `${m.licence.symbol}${fmt(m.licence.annual)}` : "—"}<i>/yr</i></b>
                  </div>
                </div>
              )}

              {sent && (m.forBC.length > 0 || m.forFO.length > 0) && (
                <div className="ma-ev">
                  <div>
                    <span className="ma-ev-head">Points to Business Central</span>
                    {m.forBC.length === 0 && <span className="ma-ev-none">Nothing yet</span>}
                    {m.forBC.map((e, i) => <span className="ma-ev-row" key={i}>{e.label}{!e.neutral && <em>{e.w}</em>}</span>)}
                  </div>
                  <div>
                    <span className="ma-ev-head">Points to Finance &amp; Ops</span>
                    {m.forFO.length === 0 && <span className="ma-ev-none">Nothing yet</span>}
                    {m.forFO.map((e, i) => <span className="ma-ev-row" key={i}>{e.label}<em>{e.w}</em></span>)}
                  </div>
                </div>
              )}

              {sent && m.complexityDrivers.length > 0 && (
                <p className="ma-vnote">Complexity is driven by {list(m.complexityDrivers)}.</p>
              )}
            </div>

            {(catalog.currencies || []).length > 1 && sent && (
              <div className="ma-currency" role="group" aria-label="Currency">
                {catalog.currencies.map((c) => (
                  <button key={c} className={currency === c ? "on" : ""} onClick={() => setCurrency(c)}
                    aria-pressed={currency === c}>{c}</button>
                ))}
              </div>
            )}

            {/* risks are written up in the PDF report, so the results screen leaves them out */}

            {sent && m.licence && (
              <p className="ma-foot">
                Licence subscription only, at {m.licence.billedFull} full users on {m.licence.symbol}
                {fmt(m.licence.seat)} a month. Implementation, data migration and support are separate.
                {m.licence.trusted
                  ? ` List prices verified ${m.licence.verified}.`
                  : " Prices in this currency are placeholders pending verification."}
              </p>
            )}

            {sent && (
              <button type="button" className="ma-cta-pdf" onClick={downloadPdf} disabled={pdfBusy}>
                <Icon name="file-earmark-arrow-down" /> {pdfBusy ? "Preparing your report…" : "Download full report"}
              </button>
            )}
            {sent && pdfError && <span className="ma-err">{pdfError}</span>}

            {sent && (
              <div className="ma-cta-row">
                <Link href="/schedule-a-demo/" className="ma-cta-main">
                  Schedule demo <Icon name="arrow-right" />
                </Link>
                <a href="tel:+442037697689" className="ma-cta-call">
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

function Field({ label, htmlFor, children, missing }) {
  return (
    <div className={"ma-field" + (missing ? " missing" : "")}>
      {htmlFor
        ? <label className="ma-label" htmlFor={htmlFor}>{label}</label>
        : <span className="ma-label">{label}</span>}
      {children}
      {missing && (
        <span className="ma-err ma-missing-msg" role="alert">
          <Icon name="exclamation-circle" /> Please select an option
        </span>
      )}
    </div>
  );
}

/* Step 1 system picker: a "Select your ERP" dropdown of system families;
   choosing one shows that family's systems as options below it. */
function SourcePicker({ groups, value, set }) {
  const [group, setGroup] = useState(
    () => groups.find((g) => g.items.some((s) => s.id === value))?.group || null
  );
  const [open, setOpen] = useState(false);
  const boxRef = useRef(null);
  const current = groups.find((g) => g.group === group);

  useEffect(() => {
    if (!open) return undefined;
    const onDown = (e) => { if (!boxRef.current?.contains(e.target)) setOpen(false); };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (name) => {
    if (name !== group) set("");
    setGroup(name);
    setOpen(false);
  };

  return (
    <div className="ma-src">
      <div className="ma-src-box" ref={boxRef}>
        <button type="button" className={"ma-src-head" + (open ? " open" : "") + (group ? "" : " empty")}
          onClick={() => setOpen(!open)} aria-haspopup="listbox" aria-expanded={open}>
          {group || "Select your ERP"}
          <Icon name="chevron-down" />
        </button>

        {open && (
          <ul className="ma-src-list" role="listbox" aria-label="Current system type">
            {groups.map((g) => (
              <li key={g.group}>
                <button type="button" className={"ma-src-row" + (g.group === group ? " on" : "")}
                  role="option" aria-selected={g.group === group} onClick={() => choose(g.group)}>
                  {g.group}
                  {g.group === group && <Icon name="check2" />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {current && (
        <div className="ma-segs ma-src-items" role="group" aria-label={group}>
          {current.items.map((s) => (
            <button type="button" key={s.id} className={"ma-seg" + (value === s.id ? " on" : "")}
              onClick={() => set(s.id)} aria-pressed={value === s.id}>{s.label}</button>
          ))}
        </div>
      )}
    </div>
  );
}

function Flags({ list, gap }) {
  if (!list.length) return null;
  return (
    <div className={"ma-flags ma-flags-inline" + (gap ? " gap" : "")} role="status">
      {list.map((f, i) => (
        <div className={"ma-flag f-" + f.kind} key={i}>
          <span className="ma-flag-title">{f.title}</span>
          <span className="ma-flag-body">{f.body}</span>
        </div>
      ))}
    </div>
  );
}

function Segs({ value, set, options, compact }) {
  return (
    <div className={"ma-segs" + (compact ? " compact" : "")}>
      {(options || []).map((o) => (
        <button key={o.id} className={"ma-seg" + (value === o.id ? " on" : "")}
          onClick={() => set(o.id)} aria-pressed={value === o.id}>{o.label}</button>
      ))}
    </div>
  );
}

function Stepper({ label, hint, value, set, min = 0, max = 999 }) {
  return (
    <div className="ma-stp">
      <div className="ma-stp-text">
        <span className="ma-label">{label}</span>
        {hint && <span className="ma-stp-hint">{hint}</span>}
      </div>
      <div className="ma-stp-ctl">
        <button onClick={() => set(Math.max(min, value - 1))} aria-label={`Decrease ${label}`}><Icon name="dash-lg" /></button>
        <input type="number" value={value} min={min} max={max} aria-label={label}
          onChange={(e) => set(Math.min(max, Math.max(min, Number(e.target.value) || 0)))} />
        <button onClick={() => set(Math.min(max, value + 1))} aria-label={`Increase ${label}`}><Icon name="plus-lg" /></button>
      </div>
    </div>
  );
}

const CSS = `
.ma{--bg:#F3F3F5;--card:#fff;--ink:#1F1B2D;--ink-2:#55505F;--muted:#8A8594;--line:#DCDAE0;
--plum:#7B3F74;--purple:#B07CC6;--purple-2:#9A62B3;--purple-soft:#F4ECF8;--track:#9D90C4;
--red:var(--color-red,#BB2B36);--red-2:#A0232D;--dark:#3A2E50;--dark-2:#2D2340;
--clay:#A32A1F;--clay-soft:#FBEDEB;--amber:#8A5A0B;--amber-soft:#FBF3E4;
--sans:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;--head:Lato,"Lato Fallback",var(--sans);
color:var(--ink);font-family:var(--sans);font-size:15px;line-height:1.5;
background:var(--bg);
padding:56px 12px 80px;-webkit-font-smoothing:antialiased;scroll-margin-top:90px}
.ma *{box-sizing:border-box}
.ma button{font-family:inherit;cursor:pointer}
.ma :focus-visible{outline:2px solid var(--purple-2);outline-offset:2px}
.ma-load{max-width:1270px;margin:80px auto;text-align:center;color:var(--ink-2)}
.ma-load.err{color:var(--clay)}
/* same widths as the site .container (minus its gutters) so the form lines up with the landing card and FAQ */
.ma-wrap{max-width:1296px;margin:0 auto}
@media (max-width:1399px){.ma-wrap{max-width:1116px}}
@media (max-width:1199px){.ma-wrap{max-width:936px}}
@media (max-width:991px){.ma-wrap{max-width:696px}}
@media (max-width:767px){.ma-wrap{max-width:516px}}
@media (max-width:575px){.ma-wrap{max-width:none}}

/* progress */
.ma-progress-step{position:absolute;top:16px;right:24px;font-size:12px;font-weight:700;letter-spacing:.04em;color:var(--purple-2);text-transform:uppercase}
.ma-head{display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin:0 0 16px}
.ma-head.done{justify-content:center}
.ma-section{font-family:var(--head);font-size:18px;font-weight:700;color:var(--ink);margin:0}

/* layout */
.ma-grid{display:grid;grid-template-columns:minmax(0,1fr) 408px;gap:20px;align-items:start}
.ma-grid.done{grid-template-columns:minmax(0,560px);justify-content:center}
.ma-grid.done .ma-side{position:static}
.ma-cta-pdf{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:52px;margin-top:6px;
border:0;border-radius:5px;background:var(--plum);color:#fff;font-size:16px;font-weight:600;transition:background .15s}
.ma-cta-pdf:hover{background:#63305D}
.ma-cta-pdf:disabled{opacity:.7;cursor:progress}
.ma-cta-pdf .bi{font-size:18px;line-height:1}
.ma-cta-row{display:flex;flex-wrap:wrap;gap:10px;margin-top:6px}
.ma-cta-main,.ma-cta-call{flex:1 1 220px;display:inline-flex;align-items:center;justify-content:center;gap:10px;
min-height:52px;padding:0 20px;border-radius:5px;font-size:16px;font-weight:600;text-decoration:none;transition:background .15s,border-color .15s,color .15s}
.ma-cta-main{background:var(--red);color:#fff}
.ma-cta-main:hover{background:var(--red-2);color:#fff}
.ma-cta-call{border:1.5px solid var(--purple);background:#fff;color:var(--plum)}
.ma-cta-call:hover{background:var(--purple-soft);color:var(--plum)}
.ma-cta-row .bi{font-size:17px;line-height:1}
.ma-card{position:relative;overflow:hidden;background:var(--card);border-radius:22px;padding:40px 44px 32px;box-shadow:0 10px 40px rgba(31,27,45,.06)}
.ma-card-bar{position:absolute;top:0;left:0;right:0;height:6px;background:#E9E3F1}
.ma-card-bar span{display:block;height:100%;background:var(--purple);border-radius:0 6px 6px 0;transition:width .35s cubic-bezier(.4,0,.2,1)}

/* fields */
.ma-field{margin-bottom:30px}
.ma-label{display:block;font-family:var(--head);font-size:16px;font-weight:700;color:var(--plum);margin-bottom:12px}
.ma-sub{font-size:15px;color:var(--ink-2);max-width:470px;margin:-2px 0 18px;line-height:1.6}
.ma-hint{display:block;font-size:12px;color:var(--muted);margin-top:6px}
.ma-err{display:block;font-size:13px;color:var(--clay);margin-top:8px}
/* unanswered question after pressing Next */
.ma-missing-msg{display:flex;align-items:center;gap:6px;font-weight:500}
.ma-field.missing .ma-label{color:var(--clay)}
.ma-field.missing .ma-seg:not(.on),.ma-field.missing .ma-src-head{border-color:#E8A9A2}
.ma-input{width:100%;height:44px;padding:0 16px;border:1px solid var(--line);border-radius:8px;font:inherit;
font-size:14px;color:var(--ink);background:#fff}
.ma-input::placeholder{color:#B4B0BB}
.ma-input:focus{outline:none;border-color:var(--purple)}
/* system picker */
.ma-src-box{position:relative}
.ma-src-list{position:absolute;z-index:20;left:0;right:0;top:calc(100% + 6px);list-style:none;margin:0;padding:0 14px;
border:1px solid var(--line);border-radius:8px;background:#fff;box-shadow:0 14px 34px rgba(31,27,45,.12)}
.ma-src-head.empty{color:var(--muted)}
.ma-src-head .bi{transition:transform .2s}
.ma-src-head.open{border-color:var(--purple)}
.ma-src-head.open .bi{transform:rotate(180deg)}
.ma-src-row.on .bi{color:var(--purple-2)}
.ma-src-list li+li{border-top:1px solid var(--line)}
.ma-src-row,.ma-src-head{display:flex;align-items:center;justify-content:space-between;gap:12px;width:100%;
border:0;background:none;text-align:left;font-size:14px;color:var(--ink)}
.ma-src-row{min-height:40px;padding:0 10px;transition:color .15s}
.ma-src-row:hover,.ma-src-row.on{color:var(--purple-2)}
.ma-src-head{min-height:44px;padding:0 18px;border:1px solid var(--line);border-radius:8px;background:#fff;transition:border-color .15s}
.ma-src-head:hover{border-color:var(--purple)}
.ma-src-row .bi,.ma-src-head .bi{font-size:15px;line-height:1;color:var(--ink)}
.ma-src-items{margin-top:12px}
.ma-select{position:relative}
.ma-select select{width:100%;height:52px;padding:0 48px 0 24px;border:1px solid var(--line);border-radius:8px;
font:inherit;font-size:16px;color:var(--ink);background:#fff;appearance:none;-webkit-appearance:none;cursor:pointer}
.ma-select select:focus{outline:none;border-color:var(--purple)}
.ma-select .bi{position:absolute;right:20px;top:50%;transform:translateY(-50%);pointer-events:none;color:var(--ink);font-size:16px;line-height:1}

/* segmented options */
.ma-segs{display:flex;flex-wrap:wrap;gap:8px}
.ma-seg{min-height:42px;min-width:88px;padding:0 18px;border:1px solid var(--line);border-radius:6px;background:#fff;
font-size:14px;color:var(--ink);transition:background .15s,border-color .15s,color .15s}
.ma-segs.compact{gap:6px}
.ma-segs.compact .ma-seg{min-width:52px;padding:0 14px}
.ma-seg:hover{border-color:var(--purple)}
.ma-seg.on{background:var(--purple);border-color:var(--purple);color:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06)}

/* steppers */
.ma-stp{display:flex;align-items:center;justify-content:space-between;gap:20px;margin:-6px 0 22px}
.ma-stp .ma-label{margin:0 0 2px}
.ma-stp-text{flex:1;display:flex;flex-direction:column;min-width:0}
.ma-stp-hint{font-size:12px;color:var(--muted)}
.ma-stp-ctl{flex:none;display:flex;align-items:center;gap:4px;padding:2px;border:1px solid var(--line);border-radius:6px;background:#fff}
.ma-stp-ctl button{width:34px;height:34px;display:grid;place-items:center;border:1.5px solid var(--purple);
border-radius:4px;background:#fff;color:var(--purple-2)}
.ma-stp-ctl button:hover{background:var(--purple-soft)}
.ma-stp-ctl .bi{font-size:15px;line-height:1}
.ma-stp-ctl input{width:44px;height:34px;border:0;text-align:center;font:inherit;font-size:14px;color:var(--ink);
background:none;-moz-appearance:textfield}
.ma-stp-ctl input:focus{outline:none}
.ma-stp-ctl input::-webkit-outer-spin-button,.ma-stp-ctl input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}

.ma-two{display:grid;grid-template-columns:auto 1fr;gap:20px 96px;margin-top:40px}
.ma-two .ma-field{margin-bottom:20px}

/* capability checklist */
.ma-sub-tight{color:var(--ink);margin:-6px 0 34px}
/* two columns, filled top-to-bottom like the design */
.ma-caps{list-style:none;margin:0 0 10px;padding:0;columns:2;column-gap:28px}
.ma-caps li{break-inside:avoid;margin-bottom:22px}
.ma-cap{display:flex;align-items:flex-start;gap:12px;width:100%;text-align:left;padding:0;border:0;background:none}
.ma-cap-box{flex:none;width:21px;height:21px;margin-top:1px;border:1.5px solid #D6B4E4;border-radius:3px;
display:grid;place-items:center;color:#fff;background:#fff;transition:background .15s,border-color .15s}
.ma-cap:hover .ma-cap-box{border-color:var(--purple)}
.ma-cap.on .ma-cap-box{background:var(--purple);border-color:var(--purple)}
.ma-cap-box .bi{font-size:13px;line-height:1}
.ma-cap-text{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.ma-cap-label{font-size:14px;font-weight:500;color:var(--ink);line-height:1.35}
.ma-cap-note{font-size:11px;color:var(--muted);line-height:1.4}

/* capture */
.ma-capture{margin-bottom:28px}
.ma-capture h3{font-family:var(--head);font-size:20px;font-weight:700;color:var(--ink);margin:0 0 8px}
.ma-form{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:6px}
.ma-done{text-align:center;padding:12px 0 4px}
.ma-done .ma-sub{margin:0 auto}
.ma-done-icon{display:inline-grid;place-items:center;width:48px;height:48px;border-radius:50%;
background:var(--purple);color:#fff;margin-bottom:12px;font-size:22px}

/* nav */
.ma-nav{display:flex;justify-content:space-between;align-items:center;margin-top:12px}
.ma-next{display:inline-flex;align-items:center;gap:12px;height:52px;padding:0 22px 0 26px;border:0;border-radius:5px;
background:var(--red);color:#fff;font-size:20px;font-weight:600;transition:background .15s}
.ma-next:hover{background:var(--red-2)}
.ma-next .bi{font-size:20px;line-height:1}
.ma-next:disabled{background:#DDA3A8;cursor:not-allowed}
.ma-back{display:inline-flex;align-items:center;gap:8px;border:0;background:none;color:var(--ink-2);font-size:15px;font-weight:500}
.ma-back:hover{color:var(--purple-2)}

/* verdict card */
.ma-side{position:sticky;top:104px;display:flex;flex-direction:column;gap:14px}
.ma-verdict{position:relative;overflow:hidden;border-radius:22px;padding:40px 24px 36px;color:#fff;
background:radial-gradient(260px 160px at 40% 115%,rgba(146,104,200,.55),transparent 70%),
linear-gradient(160deg,var(--dark) 0%,var(--dark-2) 100%)}
.ma-kicker{display:block;font-size:15px;text-transform:uppercase;letter-spacing:.01em;color:#fff}
.ma-vname{font-size:24px;font-weight:700;line-height:1.2;letter-spacing:-.01em;margin:6px 0 0}
.ma-bar{margin:24px 2px 0}
.ma-bar-track{position:relative;height:1px;background:rgba(255,255,255,.55)}
.ma-bar-zone{position:absolute;left:43%;width:15%;top:-2px;height:5px;border-radius:3px;background:#E4C8F2}
.ma-bar-pin{position:absolute;top:-8px;width:3px;height:16px;border-radius:2px;background:#fff;transform:translateX(-50%);
transition:left .3s cubic-bezier(.4,0,.2,1)}
.ma-bar-ends{display:flex;justify-content:space-between;margin-top:16px;font-size:12px;letter-spacing:.02em;text-transform:uppercase}
.ma-vtext{font-size:12px;line-height:1.85;color:rgba(255,255,255,.85);margin:34px 6px 0}
.ma-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:24px;padding-top:18px;
border-top:1px solid rgba(255,255,255,.18)}
.ma-met{display:flex;flex-direction:column;gap:2px;min-width:0}
.ma-met span{font-size:11px;color:rgba(255,255,255,.6)}
.ma-met b{font-size:19px;font-weight:600;font-variant-numeric:tabular-nums;display:flex;align-items:baseline;gap:2px;flex-wrap:wrap}
.ma-met i{font-style:normal;font-size:10px;font-weight:400;color:rgba(255,255,255,.55)}
.ma-ev{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px;padding-top:16px;border-top:1px solid rgba(255,255,255,.18)}
.ma-ev>div{display:flex;flex-direction:column;gap:5px;min-width:0}
.ma-ev-head{font-size:10px;letter-spacing:.08em;text-transform:uppercase;color:#E4C8F2;margin-bottom:2px}
.ma-ev-row{display:flex;justify-content:space-between;gap:8px;font-size:11.5px;line-height:1.35;color:rgba(255,255,255,.82)}
.ma-ev-row em{flex:none;font-style:normal;font-size:10px;color:rgba(255,255,255,.45)}
.ma-ev-none{font-size:11.5px;color:rgba(255,255,255,.4)}
.ma-vnote{font-size:12px;line-height:1.6;color:rgba(255,255,255,.7);margin:16px 0 0}

.ma-currency{display:flex;gap:6px;justify-content:flex-end}
.ma-currency button{padding:6px 14px;border:1px solid var(--line);border-radius:999px;background:#fff;font-size:12px;
font-weight:600;color:var(--ink-2)}
.ma-currency button.on{background:var(--purple);border-color:var(--purple);color:#fff}

.ma-flags{display:flex;flex-direction:column;gap:8px}
.ma-flag{padding:14px 16px;border-radius:12px;border-left:3px solid;background:#fff}
.ma-flag-title{display:block;font-size:13.5px;font-weight:600;margin-bottom:3px}
.ma-flag-body{display:block;font-size:12.5px;line-height:1.5;color:var(--ink-2)}
.f-cost{background:var(--clay-soft);border-color:var(--clay)}.f-cost .ma-flag-title{color:var(--clay)}
.f-eol{background:var(--amber-soft);border-color:var(--amber)}.f-eol .ma-flag-title{color:var(--amber)}
.f-prompt{background:var(--purple-soft);border-color:var(--purple-2)}.f-prompt .ma-flag-title{color:var(--purple-2)}
.ma-flags-inline{margin-top:14px}
.ma-flags-inline.gap{margin:-8px 0 26px}
.ma-foot{font-size:11px;line-height:1.5;color:var(--muted);margin:0 4px}

@media (max-width:1199px){
  .ma-grid{grid-template-columns:1fr}
  .ma-side{position:static}
  .ma-two{gap:0 40px}
}
@media (max-width:640px){
  .ma{padding:32px 12px 56px}
  .ma-card{padding:40px 18px 22px;border-radius:16px}
  .ma-progress-step{font-size:11px;top:14px;right:18px}
  .ma-seg{min-width:0;flex:1 1 auto;padding:0 12px;font-size:14px;min-height:40px}
  .ma-two,.ma-form{grid-template-columns:1fr}
  .ma-caps{columns:1}
  .ma-stp{gap:12px}
  .ma-next{font-size:17px;height:48px}
}
@media (prefers-reduced-motion:reduce){.ma *{transition:none!important}}
`;
