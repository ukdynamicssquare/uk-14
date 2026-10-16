import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import faqData from '../../public/data/erp_faq.json';
import FormErpCompare from '../../components/FormErpCompare';
import PageSeo from "../../components/PageSeo";

const ERP_API = 'https://erptoolapi.onrender.com/api/frontend/products/domain/dynamicssquare-uk';
const UNLOCK_KEY = 'erpc_unlocked';
const MAX_SLOTS = 4;

const featureLabels = {
  overview: "Overview",
  deployment: "Deployment",
  costPerUser: "Cost Per User",
  priceRange: "Price Range",
  coreModules: "Core Modules",
  scalability: "Scalability",
  customization: "Customization",
  usabilitySupportTraining: "Usability / Support / Training",
  analyticsSecurity: "Analytics & Security",
  keyMarketStrength: "Key Market Strength",
  notableContext: "Notable Context",
  customerPerceptionUpdates: "Customer Perception Updates"
};

// Manual row order; any new keys from the API are appended after these
const featureOrder = [
  "overview",
  "deployment",
  "coreModules",
  "scalability",
  "customization",
  "usabilitySupportTraining",
  "analyticsSecurity",
  "priceRange",
  "costPerUser",
  "keyMarketStrength",
  "notableContext",
];

const orderFeatures = (erps) => {
  if (!erps.length) return [];
  const apiFeatures = Object.keys(erps[0].features || {});
  return [...featureOrder, ...apiFeatures.filter(f => !featureOrder.includes(f))];
};

const fetchErps = async (signal) => {
  const res = await fetch(ERP_API, { signal });
  if (!res.ok) throw new Error(`ERP API responded ${res.status}`);
  const data = await res.json();
  if (!Array.isArray(data) || !data.length) throw new Error("ERP API returned no products");
  return data;
};

// Before Compare, slots keep their position (gaps allowed)
const padSlots = (erps) => {
  const slots = erps.slice(0, MAX_SLOTS);
  while (slots.length < MAX_SLOTS) slots.push(null);
  return slots;
};

// In the table, selected ERPs sit side by side with one "Select ERP" column after them
const packForTable = (erps) => {
  const filled = erps.filter(Boolean);
  return filled.length < MAX_SLOTS ? [...filled, null] : filled;
};

const CompareErps = ({ initialErps = [] }) => {
  const [allErps, setAllErps] = useState(initialErps);
  const [selectedErps, setSelectedErps] = useState(padSlots(initialErps.slice(0, 1)));
  const [showModal, setShowModal] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const features = orderFeatures(allErps);
  const isLoading = allErps.length === 0;

  // Fallback when the build-time fetch failed: load in the browser and retry,
  // since the Render API can take a while to wake up
  useEffect(() => {
    if (initialErps.length) return;
    let cancelled = false;
    let timer;
    const load = async (attempt) => {
      try {
        const data = await fetchErps();
        if (cancelled) return;
        setAllErps(data);
        setSelectedErps(padSlots([data[0]]));
      } catch (err) {
        console.error("Error loading ERP data:", err);
        if (!cancelled && attempt < 4) timer = setTimeout(() => load(attempt + 1), 3000 * attempt);
      }
    };
    load(1);
    return () => { cancelled = true; clearTimeout(timer); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Keep the comparison unlocked for visitors who already submitted the form
  useEffect(() => {
    try {
      if (localStorage.getItem(UNLOCK_KEY) === '1') setFormFilled(true);
    } catch (e) { /* storage blocked */ }
  }, []);

  const handleUnlocked = () => {
    setFormFilled(true);
    setShowFormModal(false);
    try { localStorage.setItem(UNLOCK_KEY, '1'); } catch (e) { /* storage blocked */ }
  };

  const arrange = (arr) => (showTable ? packForTable(arr) : padSlots(arr));

  const handleSelect = (erp) => {
    if (selectedErps.some(selected => selected && selected.name === erp.name)) return;

    // Fill the first available slot from the left
    const updated = [...selectedErps];
    const emptyIndex = updated.findIndex(item => item === null);
    if (emptyIndex !== -1) updated[emptyIndex] = erp;

    setSelectedErps(arrange(updated));
    setShowModal(false);
  };

  const removeSelection = (index) => {
    const updated = [...selectedErps];
    updated[index] = null;

    // A comparison needs at least two ERPs; go back to the selection cards
    if (showTable && updated.filter(Boolean).length < 2) {
      setShowTable(false);
      setSelectedErps(padSlots(updated.filter(Boolean)));
      return;
    }
    setSelectedErps(arrange(updated));
  };

  const handleCompare = () => {
    setShowTable(true);
    setSelectedErps(packForTable(selectedErps));
  };

  const hasEnoughToCompare = selectedErps.filter(Boolean).length >= 2;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <div className="erpc-chips">
          {value.map((v, i) => <span className="erpc-chip" key={i}>{v}</span>)}
        </div>
      );
    }
    return value;
  };

  const renderSlot = (erp, index, compact = false) => (
    erp ? (
      <div className={`erpc-slot is-filled ${compact ? "is-compact" : ""}`}>
        <button
          type="button"
          className="erpc-remove"
          aria-label={`Remove ${erp.name}`}
          onClick={() => removeSelection(index)}
        >
          <i className="bi bi-x-lg"></i>
        </button>
        <div className="erpc-logo">
          <img
            src={`https://cdn.gemsroot.com/${erp.logo}`}
            alt={erp.name}
            decoding="async"
            onError={(e) => (e.currentTarget.src = "/img/e-r-p-logo.png")}
          />
        </div>
        <h5>{erp.name}</h5>
      </div>
    ) : (
      <button
        type="button"
        className={`erpc-slot is-empty ${compact ? "is-compact" : ""}`}
        onClick={() => setShowModal(true)}
      >
        <span className="erpc-plus"><i className="bi bi-plus-lg"></i></span>
        <img src="/img/e-r-p-logo.png" alt="Default ERP" className="erpc-default-logo" />
        <p>Select ERP</p>
      </button>
    )
  );

  const columns = showTable ? packForTable(selectedErps) : padSlots(selectedErps);
  const lockFrom = Math.floor(features.length / 2);

  return (
    <>
      <PageSeo
        type="WebApplication"
        title="ERP Comparison 2026: Which System Fits Your Business Needs?"
        description="Compare top ERP systems for 2026. Get features, pricing, and benefits to find the best ERP software that fits your business needs and boosts efficiency."
        image="https://www.dynamicssquare.co.uk/img/erp-f-im.png"
        faqs={faqData.slice(0, 5)}
      />

      <section className="erpc-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <div className="solution-new-banner-one-content text-center">
                <h1 className="large-heading">Compare the Top ERP Systems for Your Business in 2026 </h1>
                <p>Start with our side-by-side ERP software comparison 2026 tool, covering top ERP systems for 2026 in terms of features, pricing, and deployment. Assess capabilities, estimate ERP cost per user, and shortlist platforms that match your requirements across cloud ERP systems for 2026 and on-premises ERP systems. </p>
                <p>Request ERP demos and price quotes for leading options below or browse categories to compare industry picks and other popular segments.
                  Read our selection guide packed with practical insights to support a confident choice among the top 10 ERP systems for 2026 so you choose the best ERP software for your business in 2026. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="erpc-tool">
        <div className="container">
          <div className="erpc-panel">
            {!showTable && (
              <>
                <div className="erpc-slots">
                  {columns.map((erp, index) => (
                    <div className="erpc-slot-wrap" key={index}>
                      <span className="erpc-slot-num">{index + 1}</span>
                      {isLoading && index === 0
                        ? <div className="erpc-slot erpc-skeleton" aria-busy="true" />
                        : renderSlot(erp, index)}
                    </div>
                  ))}
                </div>

                {hasEnoughToCompare && (
                  <div className="text-center">
                    <Button className="erpc-btn" onClick={handleCompare}>
                      Compare <i className="bi bi-arrow-right"></i>
                    </Button>
                  </div>
                )}
              </>
            )}

            {showTable && (
              <div className="erpc-table-wrap">
                <div className="erpc-scroll">
                  <table className="erpc-table" style={{ "--erpc-cols": columns.length }}>
                    <thead>
                      <tr>
                        <th className="erpc-feature-col">Feature</th>
                        {columns.map((erp, index) => (
                          <th key={index}>{renderSlot(erp, index, true)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {features.map((feature, rowIndex) => {
                        const shouldBlurRow = !formFilled && rowIndex >= lockFrom;
                        return (
                          <tr key={feature} className={shouldBlurRow ? "is-locked" : ""}>
                            <td className="erpc-feature-col">
                              <b>{featureLabels[feature] || feature}</b>
                            </td>
                            {columns.map((erp, colIndex) => (
                              <td key={colIndex} className={shouldBlurRow ? "blurred-cell" : ""}>
                                {/* Locked values are left out of the page until the form is submitted */}
                                {erp && (shouldBlurRow
                                  ? <span className="erpc-locked" aria-hidden="true"><span /><span /></span>
                                  : renderValue(erp.features[feature]))}
                              </td>
                            ))}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {!formFilled && (
                  <div className="erpc-unlock">
                    <Button className="erpc-btn" onClick={() => setShowFormModal(true)}>
                      <i className="bi bi-lock-fill"></i> Unlock Full Comparison
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ERP Modal */}
      <Modal show={showModal} size="lg" onHide={() => setShowModal(false)} centered dialogClassName="erpc-modal" backdropClassName="erpc-backdrop" scrollable>
        <Modal.Header closeButton>
          <Modal.Title><div className='text-center'>Select an ERP</div></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="erpc-pick-grid">
            {isLoading && Array.from({ length: 9 }, (_, i) => (
              <div className="erpc-pick erpc-skeleton" key={`sk-${i}`} aria-busy="true" />
            ))}
            {allErps.map((erp, idx) => {
              const isSelected = selectedErps.some(sel => sel && sel.name === erp.name);
              return (
                <button
                  type="button"
                  key={erp.name || idx}
                  className={`erpc-pick ${isSelected ? "is-selected" : ""}`}
                  onClick={() => !isSelected && handleSelect(erp)}
                  disabled={isSelected}
                >
                  {isSelected && <span className="erpc-pick-check"><i className="bi bi-check-lg"></i></span>}
                  <span className="erpc-pick-logo">
                    <img
                      src={`https://cdn.gemsroot.com/${erp.logo}`}
                      alt={erp.name}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => (e.currentTarget.src = "/img/e-r-p-logo.png")}
                    />
                  </span>
                  <h5>{erp.name}</h5>
                </button>
              );
            })}
          </div>
        </Modal.Body>
      </Modal>

      {/* Form Modal */}
      <Modal show={showFormModal} onHide={() => setShowFormModal(false)} centered dialogClassName="erpc-modal" backdropClassName="erpc-backdrop">
        <Modal.Header closeButton>
          <Modal.Title>Unlock Full Comparison</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormErpCompare
            selectedErps={selectedErps}
            onSuccess={handleUnlocked}
          />
        </Modal.Body>
      </Modal>

      <section className="solution-faq faq solution-faq-r erpc-faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 ">
              <div className="solution-new-banner-sub-head text-center">
                <h2>Have you got
                  questions about ERP Systems?</h2>
                <p>Click through to our FAQ for the best answers!</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center mar-top-7">
            <div className="col-lg-8">
              <div className="accordion accordion-flush" id="faqlist1">
                {faqData.slice(0, visibleCount).map((faq) => (
                  <div className="accordion-item" key={faq.id}>
                    <h3 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-content-${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h3>
                    <div
                      id={`faq-content-${faq.id}`}
                      className="accordion-collapse collapse"
                      data-bs-parent="#faqlist1"
                    >
                      <div
                        className="accordion-body"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {visibleCount < faqData.length && (
                <div className="text-center mt-4">
                  <button className="erpc-btn erpc-btn-outline" onClick={handleLoadMore}>
                    Load More <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        :root {
          --erpc-ink: #3d3459;
          --erpc-plum: #60518c;
          --erpc-rose: #984b6e;
          --erpc-red: #bb2b36;
          --erpc-line: #e7e3f0;
          --erpc-soft: #f7f5fb;
        }

        /* Hero */
        .erpc-hero {
          position: relative;
          padding: 70px 0 130px;
          background:
            radial-gradient(900px 380px at 15% 0%, rgba(152, 75, 110, 0.12), transparent 70%),
            radial-gradient(900px 380px at 85% 10%, rgba(96, 81, 140, 0.14), transparent 70%),
            linear-gradient(180deg, #faf8fd 0%, #fff 100%);
        }
        .erpc-hero .solution-new-banner-one-content p {
          color: #555;
          font-size: 16px;
          line-height: 1.75;
          margin: 18px auto 0;
          max-width: 760px;
        }
        .erpc-hero .large-heading { margin-bottom: 6px; }

        /* Tool panel */
        .erpc-tool { margin-top: -90px; position: relative; z-index: 2; }
        .erpc-panel {
          background: #fff;
          border: 1px solid var(--erpc-line);
          border-radius: 20px;
          box-shadow: 0 24px 60px -24px rgba(61, 52, 89, 0.25);
          padding: 32px;
        }

        /* Slots */
        .erpc-slots {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }
        .erpc-slot-wrap { position: relative; }
        .erpc-slot-num {
          position: absolute;
          top: -10px;
          left: 16px;
          z-index: 2;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--erpc-rose), var(--erpc-plum));
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .erpc-slot {
          position: relative;
          width: 100%;
          min-height: 190px;
          border-radius: 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px 16px 18px;
          text-align: center;
          transition: border-color .2s, box-shadow .2s, transform .2s, background .2s;
        }
        .erpc-slot.is-filled {
          background: #fff;
          border: 1px solid var(--erpc-line);
          box-shadow: 0 6px 20px -12px rgba(61, 52, 89, 0.35);
        }
        .erpc-slot.is-empty {
          background: var(--erpc-soft);
          border: 2px dashed #cfc6e2;
          cursor: pointer;
        }
        .erpc-slot.is-empty:hover,
        .erpc-slot.is-empty:focus-visible {
          border-color: var(--erpc-plum);
          background: #f1edf8;
          transform: translateY(-2px);
          outline: none;
        }
        .erpc-slot.is-empty p {
          margin: 0;
          color: var(--erpc-plum);
          font-weight: 600;
          font-size: 14px;
        }
        .erpc-plus {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #fff;
          color: var(--erpc-plum);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          box-shadow: 0 4px 14px -6px rgba(96, 81, 140, 0.5);
          margin-bottom: 10px;
          transition: transform .2s;
        }
        .erpc-slot.is-empty:hover .erpc-plus { transform: rotate(90deg); }
        .erpc-default-logo { display: none; }
        .erpc-logo {
          height: 90px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .erpc-logo img { max-height: 90px; width: 100%; max-width: 220px; object-fit: contain; }
        .erpc-slot h5 {
          font-size: 14px;
          font-weight: 700;
          color: var(--erpc-ink);
          margin: 0;
          line-height: 1.35;
        }
        .erpc-remove {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 0;
          background: #f3f1f7;
          color: #6b6580;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background .2s, color .2s;
        }
        .erpc-remove:hover { background: var(--erpc-red); color: #fff; }

        .erpc-slot.is-compact { min-height: 130px; padding: 18px 10px 12px; box-shadow: none; }
        .erpc-slot.is-compact .erpc-logo { height: 70px; margin-bottom: 8px; }
        .erpc-slot.is-compact .erpc-logo img { max-height: 70px; max-width: 180px; }
        .erpc-slot.is-compact .erpc-plus { width: 38px; height: 38px; font-size: 16px; }
        .erpc-slot.is-compact h5 { font-size: 13px; }

        /* Buttons */
        .erpc-btn, .erpc-btn.btn, .erpc-btn.btn:focus {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 28px;
          padding: 13px 34px;
          border-radius: 999px;
          border: 0;
          font-weight: 600;
          font-size: 16px;
          color: #fff;
          background: var(--erpc-red);
          box-shadow: 0 12px 28px -12px rgba(187, 43, 54, 0.7);
          transition: transform .2s, box-shadow .2s, background .2s;
        }
        .erpc-btn:hover, .erpc-btn.btn:hover, .erpc-btn.btn:active {
          background: #a3232d !important;
          color: #fff;
          transform: translateY(-2px);
          box-shadow: 0 16px 32px -12px rgba(187, 43, 54, 0.8);
        }
        .erpc-btn .bi-arrow-right { transition: transform .2s; }
        .erpc-btn:hover .bi-arrow-right { transform: translateX(4px); }
        .erpc-btn-outline {
          background: #fff;
          color: var(--erpc-plum);
          border: 1.5px solid var(--erpc-plum);
          box-shadow: none;
          margin-top: 10px;
        }
        .erpc-btn-outline:hover { background: var(--erpc-plum) !important; color: #fff; }
        .erpc-skeleton {
          border: 1px solid var(--erpc-line);
          background: linear-gradient(90deg, #f3f0f8 25%, #fbfafd 50%, #f3f0f8 75%);
          background-size: 200% 100%;
          animation: erpc-shimmer 1.4s ease-in-out infinite;
          min-height: 110px;
          cursor: default;
        }
        @keyframes erpc-shimmer {
          from { background-position: 200% 0; }
          to { background-position: -200% 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .erpc-skeleton { animation: none; }
        }
        .erpc-locked span {
          display: block;
          height: 10px;
          margin: 6px 0 12px;
          border-radius: 6px;
          background: #ddd6ea;
        }
        .erpc-locked span:last-child { width: 60%; }

        /* Table */
        .erpc-table-wrap { position: relative; }
        .erpc-scroll {
          overflow-x: auto;
          border: 1px solid var(--erpc-line);
          border-radius: 14px;
          -webkit-overflow-scrolling: touch;
        }
        .erpc-table {
          width: 100%;
          min-width: calc(200px + var(--erpc-cols, 4) * 220px);
          table-layout: fixed;
          border-collapse: separate;
          border-spacing: 0;
          font-size: 14px;
        }
        .erpc-table th, .erpc-table td {
          padding: 16px 18px;
          border-bottom: 1px solid var(--erpc-line);
          border-right: 1px solid var(--erpc-line);
          vertical-align: top;
          color: #444;
          line-height: 1.6;
          background: #fff;
        }
        .erpc-table th:last-child, .erpc-table td:last-child { border-right: 0; }
        .erpc-table tbody tr:last-child td { border-bottom: 0; }
        .erpc-table thead th {
          background: var(--erpc-soft);
          padding: 14px 12px;
          vertical-align: middle;
        }
        .erpc-table tbody tr:nth-child(even) td { background: #fcfbfe; }
        .erpc-table tbody tr:hover td { background: #f5f2fa; }
        .erpc-feature-col {
          width: 200px;
          position: sticky;
          left: 0;
          z-index: 1;
          box-shadow: 6px 0 10px -8px rgba(61, 52, 89, 0.25);
        }
        .erpc-table thead .erpc-feature-col {
          color: var(--erpc-ink);
          font-size: 15px;
          font-weight: 700;
          text-align: left;
          z-index: 2;
        }
        .erpc-table td.erpc-feature-col b {
          color: var(--erpc-ink);
          font-size: 14px;
          font-weight: 700;
        }
        .erpc-chips { display: flex; flex-wrap: wrap; gap: 6px; }
        .erpc-chip {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 999px;
          background: #f1edf8;
          color: var(--erpc-plum);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.6;
        }
        .erpc-table td.blurred-cell {
          filter: blur(5px);
          user-select: none;
        }
        .erpc-unlock {
          position: absolute;
          left: 201px;
          right: 1px;
          bottom: 1px;
          height: 45%;
          min-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 0 0 14px 0;
          background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.85) 35%, #fff 100%);
          pointer-events: none;
          z-index: 3;
        }
        .erpc-unlock .erpc-btn { pointer-events: auto; margin-top: 0; }

        /* Modals */
        .modal-backdrop.erpc-backdrop {
          display: block;
          background: #1f1a33;
        }
        .modal-backdrop.erpc-backdrop.show { opacity: .55; }
        .erpc-modal { margin-top: 90px; margin-bottom: 24px; }
        .erpc-modal.modal-dialog-scrollable { height: calc(100% - 114px); }
        .erpc-modal .modal-content {
          box-shadow: 0 30px 80px -20px rgba(31, 26, 51, 0.5);
          border: 0;
          border-radius: 18px;
          overflow: hidden;
        }
        .erpc-modal .modal-header {
          border-bottom: 1px solid var(--erpc-line);
          padding: 18px 24px;
        }
        .erpc-modal .modal-title {
          color: var(--erpc-ink);
          font-weight: 700;
          font-size: 20px;
        }
        .erpc-modal .modal-body { padding: 24px; }
        .erpc-pick-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
        }
        .erpc-pick {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 10px;
          border-radius: 14px;
          border: 1px solid var(--erpc-line);
          background: #fff;
          cursor: pointer;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .erpc-pick:hover:not(:disabled), .erpc-pick:focus-visible {
          border-color: var(--erpc-plum);
          box-shadow: 0 10px 24px -14px rgba(96, 81, 140, 0.6);
          transform: translateY(-2px);
          outline: none;
        }
        .erpc-pick.is-selected {
          background: var(--erpc-soft);
          border-color: #cfc6e2;
          cursor: default;
          opacity: .65;
        }
        .erpc-pick-logo { height: 64px; display: flex; align-items: center; justify-content: center; }
        .erpc-pick-logo { width: 100%; }
        .erpc-pick-logo img { max-height: 64px; width: 100%; max-width: 170px; object-fit: contain; }
        .erpc-pick h5 { font-size: 13px; font-weight: 600; color: var(--erpc-ink); margin: 0; }
        .erpc-pick-check {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--erpc-plum);
          color: #fff;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* FAQ */
        .erpc-faq { padding: 100px 0 40px; }
        .erpc-faq .accordion-item {
          border: 1px solid var(--erpc-line) !important;
          border-radius: 14px !important;
          margin-bottom: 12px;
          overflow: hidden;
          background: #fff;
          transition: box-shadow .2s;
        }
        .erpc-faq .accordion-item:hover { box-shadow: 0 10px 24px -18px rgba(61, 52, 89, 0.5); }
        .erpc-faq .accordion-button {
          font-weight: 600;
          color: var(--erpc-ink);
          padding: 18px 22px;
          background: #fff;
          box-shadow: none !important;
        }
        .erpc-faq .accordion-button:not(.collapsed) {
          background: var(--erpc-soft);
          color: var(--erpc-plum);
        }
        .erpc-faq .accordion-body { padding: 4px 22px 18px; color: #555; line-height: 1.7; background: var(--erpc-soft); }

        @media (max-width: 991px) {
          .erpc-slots { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px 16px; }
          .erpc-pick-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (max-width: 768px) {
          .erpc-hero { padding: 40px 0 110px; }
          .erpc-hero .solution-new-banner-one-content p { font-size: 15px; }
          .erpc-panel { padding: 22px 16px; border-radius: 16px; }
          .erpc-slot { min-height: 150px; padding: 20px 10px 14px; }
          .erpc-logo { height: 70px; }
          .erpc-logo img { max-height: 70px; max-width: 140px; }
          .erpc-feature-col { width: 112px; }
          .erpc-table { min-width: calc(112px + var(--erpc-cols, 4) * 170px); }
          .erpc-chip { font-size: 11px; padding: 2px 8px; }
          .erpc-slot.is-compact { padding: 26px 8px 10px; }
          .erpc-slot.is-compact .erpc-logo img { max-width: 130px; max-height: 60px; }
          .erpc-unlock { left: 113px; }
          .erpc-unlock .erpc-btn.btn { font-size: 12px; padding: 10px 14px; gap: 6px; white-space: nowrap; }
          .erpc-table th, .erpc-table td { padding: 12px; font-size: 13px; }
          .erpc-table td.erpc-feature-col b { font-size: 13px; }
          .erpc-btn, .erpc-btn.btn { padding: 12px 26px; font-size: 15px; }
          .erpc-faq { padding-top: 70px; }
        }
      `}</style>
    </>
  );
};

export async function getStaticProps() {
  try {
    const initialErps = await fetchErps(AbortSignal.timeout(20000));
    return { props: { initialErps }, revalidate: 3600 };
  } catch (err) {
    // Page still renders; the browser fetch in CompareErps takes over
    console.error("ERP comparison: build-time fetch failed", err);
    return { props: { initialErps: [] }, revalidate: 60 };
  }
}

export default CompareErps;
