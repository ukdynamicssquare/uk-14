'use client';

import { useEffect, useState } from 'react';
import Head from 'next/head';
import guideData from './guideData.json';

/* ════════════════════════════════════════════════════════════
   DESIGN TOKENS — Matching DynamicsSquare.co.uk exactly
   Primary Teal:   #984b6e  (links, teal accents, active states)
   Red/Crimson:    #b42828  (CTA buttons, labels)
   Dark Text:      #333333  (body)
   Heading Dark:   #1a1a2e  (h1, h2)
   Bg Light:       #f0eff4  (page background)
   Card White:     #ffffff
   Border:         #e2e0ea
   Muted:          #6b7280
════════════════════════════════════════════════════════════ */

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Source+Serif+4:wght@400;600;700&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css');

  :root {
    --ds-teal:       #984b6e;
    --ds-teal-dark:  #60518c);
    --ds-teal-light: #eae9f1;
    --ds-red:        #b42828;
    --ds-red-dark:   #8f1f1f;
    --ds-gold:       #f0a500;
    --ds-navy:       #1a1a2e;
    --ds-text:       #333333;
    --ds-muted:      #6b7280;
    --ds-bg:         #f0eff4;
    --ds-bg2:        #e8e6ef;
    --ds-white:      #ffffff;
    --ds-border:     #e2e0ea;
    --font-head:     'Poppins', sans-serif;
    --font-body:     'Poppins', sans-serif;
    --font-serif:    'Source Serif 4', Georgia, serif;
  }

  // *, *::before, *::after { box-sizing: border-box; }
  // html { scroll-behavior: smooth; }
  // body {
  //   font-family: var(--font-body);
  //   color: var(--ds-text); background: var(--ds-bg);
  //   font-size: 16px; line-height: 1.75;
  //   -webkit-font-smoothing: antialiased; margin: 0;
  // }

  /* TOP BAR */
  .top-bar {
    background: var(--ds-bg2); font-size: 0.78rem; color: var(--ds-muted);
    padding: 0.3rem 0; border-bottom: 1px solid var(--ds-border);
  }
  .top-bar a { color: var(--ds-teal); text-decoration: none; }
  .top-bar a:hover { text-decoration: underline; }

  /* NAV */
  .ds-nav {
    position: sticky; top: 0; z-index: 1000;
    background: var(--ds-white); box-shadow: 0 2px 12px rgba(0,0,0,0.08);
    padding: 0.75rem 0;
  }
  .ds-nav .brand {
    font-family: var(--font-head); font-weight: 800; font-size: 1.25rem;
    color: var(--ds-navy); text-decoration: none; letter-spacing: -0.02em;
  }
  .ds-nav .brand span { color: var(--ds-teal); }
  .ds-nav .brand sup { font-size: 0.45rem; font-weight: 600; color: var(--ds-muted); vertical-align: super; }
  .nav-cta {
    background: var(--ds-red); color: white; font-weight: 600;
    font-size: 0.85rem; padding: 0.55rem 1.4rem; border-radius: 4px;
    text-decoration: none; letter-spacing: 0.01em;
    transition: background 0.2s, transform 0.15s; display: inline-block;
  }
  .nav-cta:hover { background: var(--ds-red-dark); color: white; transform: translateY(-1px); }
  .ms-badge {
    display: flex; align-items: center; gap: 0.5rem;
    border: 1px solid var(--ds-border); border-radius: 6px;
    padding: 0.3rem 0.8rem; font-size: 0.72rem; color: var(--ds-muted); font-weight: 500;
    line-height: 1.3;
  }

  /* HERO */
  .herooo {
    background: var(--ds-bg); padding: 5.5rem 0 4rem;
    position: relative; overflow: hidden; text-align: center;
  }
  .herooo::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background: radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,120,128,0.08) 0%, transparent 70%);
    pointer-events: none;
  }
  .herooo-eyebrow {
    display: inline-block; background: var(--ds-teal-light); color: var(--ds-teal);
    font-size: 0.74rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
    padding: 0.3rem 1rem; border-radius: 20px; margin-bottom: 1.2rem;
  }
  .herooo h1 {
    font-family: var(--font-head); font-weight: 800;
    font-size: clamp(2rem, 4.5vw, 3.4rem); line-height: 1.15;
    letter-spacing: -0.03em; color: var(--ds-navy); margin-bottom: 1.2rem;
  }
  .herooo h1 .gradient-text {
    background: linear-gradient(135deg, var(--ds-teal) 0%, #60518c 50%, #60518c 100%);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .herooo .herooo-sub {
    font-size: 1.05rem; color: var(--ds-muted);
    max-width: 600px; margin: 0 auto 2rem; line-height: 1.8;
  }
  .btn-ds-primary {
    background: var(--ds-red); color: white; font-weight: 600; font-size: 0.92rem;
    padding: 0.75rem 1.8rem; border-radius: 4px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.5rem;
    transition: background 0.2s, transform 0.15s; border: 2px solid var(--ds-red);
  }
  .btn-ds-primary:hover { background: var(--ds-red-dark); color: white; border-color: var(--ds-red-dark); transform: translateY(-2px); }
  .btn-ds-outline {
    background: transparent; color: var(--ds-teal); font-weight: 600; font-size: 0.92rem;
    padding: 0.75rem 1.8rem; border-radius: 4px; text-decoration: none;
    display: inline-flex; align-items: center; gap: 0.5rem;
    border: 2px solid var(--ds-teal); transition: all 0.2s;
  }
  .btn-ds-outline:hover { background: var(--ds-teal); color: white; transform: translateY(-2px); }
  .herooo-stats-bar {
    background: var(--ds-white); border-radius: 12px; border: 1px solid var(--ds-border);
    box-shadow: 0 4px 24px rgba(0,0,0,0.06); padding: 1.5rem 2rem;
    display: flex; justify-content: space-around; flex-wrap: wrap; gap: 1.5rem;
    max-width: 700px; margin: 2.5rem auto 0;
  }
  .herooo-stat-num { font-family: var(--font-head); font-weight: 800; font-size: 1.9rem; color: var(--ds-teal); display: block; line-height: 1; }
  .herooo-stat-label { font-size: 0.78rem; color: var(--ds-muted); display: block; margin-top: 0.2rem; line-height: 1.4; }
  .ceo-card {
    background: var(--ds-navy); border-radius: 12px; padding: 2rem;
    margin-top: 2rem; text-align: left; position: relative; overflow: hidden;
  }
  .ceo-card::before {
    content: '""'; position: absolute; top: -15px; right: 15px;
    font-family: var(--font-serif); font-size: 8rem; color: var(--ds-teal);
    opacity: 0.15; line-height: 1;
  }
  .ceo-card p { font-size: 1rem; color: rgba(255,255,255,0.82); font-style: italic; line-height: 1.8; margin-bottom: 1rem; }
  .ceo-card .ceo-sig { font-weight: 700; font-size: 0.95rem; color: var(--ds-teal); display: block; }
  .ceo-card .ceo-title { font-size: 0.78rem; color: rgba(255,255,255,0.45); }

  /* LAYOUT */
  .page-wrap { padding: 3.5rem 0 5rem; }
  .guide-content { padding-left: 2rem; }

  /* SIDEBAR */
  .toc-sidebar {
    position: sticky; top: 72px; max-height: calc(100vh - 90px); overflow-y: auto;
    font-size: 0.82rem; background: var(--ds-white);
    border: 1px solid var(--ds-border); border-radius: 10px; padding: 1rem;
  }
  .toc-sidebar::-webkit-scrollbar { width: 3px; }
  .toc-sidebar::-webkit-scrollbar-thumb { background: var(--ds-border); border-radius: 4px; }
  .toc-heading {
    font-weight: 700; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em;
    color: var(--ds-navy); display: block; margin-bottom: 0.75rem; padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--ds-teal);
  }
  .toc-sidebar a {
    display: block; color: var(--ds-muted); text-decoration: none;
    padding: 0.28rem 0.6rem; border-left: 2px solid transparent;
    margin-bottom: 1px; transition: all 0.15s; line-height: 1.4; border-radius: 0 4px 4px 0;
  }
  .toc-sidebar a:hover { color: var(--ds-teal); border-left-color: var(--ds-teal); background: var(--ds-teal-light); }
  .toc-sidebar a.active { color: var(--ds-teal); border-left-color: var(--ds-red); background: var(--ds-teal-light); font-weight: 600; }
  .toc-sidebar .toc-sub { padding-left: 1.3rem; font-size: 0.76rem; }

  /* SECTION HEADINGS */
  .section-anchor { padding-top: 3rem; margin-top: -3rem; }
  .section-eyebrow {
    display: inline-flex; align-items: center; gap: 0.4rem;
    font-size: 1rem; font-weight: 700; text-transform: uppercase;
    letter-spacing: 0.1em; color: var(--ds-red); margin-bottom: 0.5rem;
  }
  .section-eyebrow::before { content: ''; display: inline-block; width: 20px; height: 2px; background: var(--ds-red); }
  h2.section-titleee {
    font-family: var(--font-head); font-weight: 700;
    font-size: clamp(1.5rem, 2.5vw, 2rem); color: var(--ds-navy);
    line-height: 1.25; letter-spacing: -0.02em; margin-bottom: 1rem;
  }
  h3.sub-title { font-family: var(--font-head); font-weight: 700; font-size: 1.2rem; color: var(--ds-navy); margin-top: 2rem; margin-bottom: 0.7rem; }
  h4.sub-sub { font-weight: 600; font-size: 0.97rem; color: var(--ds-navy); margin-top: 1.4rem; margin-bottom: 0.5rem; }

  /* PROSE */
  .guide-content p { color: var(--ds-text); margin-bottom: 1rem; }
  .lead-para { font-size: 1.05rem; color: var(--ds-muted); line-height: 1.85; }
  .ds-divider { border: none; border-top: 1px solid var(--ds-border); margin: 3rem 0; }

  /* CALLOUTS */
  .callout {
    background: var(--ds-white); border: 1px solid var(--ds-border);
    border-left: 4px solid var(--ds-teal); border-radius: 0 8px 8px 0;
    padding: 1.2rem 1.5rem; margin: 1.5rem 0;
  }
  .callout.red   { border-left-color: var(--ds-red);  background: #fff8f8; }
  .callout.gold  { border-left-color: var(--ds-gold); background: #fffbf0; }
  .callout.teal  { border-left-color: var(--ds-teal); background: var(--ds-teal-light); }
  .callout-label { font-size: 0.68rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ds-muted); display: block; margin-bottom: 0.5rem; }
  .callout ul { margin: 0; padding-left: 1.2rem; }
  .callout ul li { color: var(--ds-text); font-size: 0.92rem; line-height: 1.7; margin-bottom: 0.3rem; }

  /* QUOTES */
  .ds-quote {
    background: var(--ds-navy); border-radius: 10px; padding: 1.8rem 2rem;
    margin: 2rem 0; position: relative; border-left: 4px solid var(--ds-teal);
  }
  .ds-quote::before {
    content: '“'; position: absolute; top: -8px; left: 18px;
    font-family: var(--font-serif); font-size: 4.5rem; color: var(--ds-teal);
    line-height: 1; opacity: 0.5;
  }
  .ds-quote p { font-size: 1rem; font-style: italic; color: rgba(255,255,255,0.88); line-height: 1.75; margin-bottom: 0.7rem; padding-top: 0.75rem; }
  .ds-quote .quote-attr { font-size: 0.8rem; color: var(--ds-teal); font-weight: 600; }

  /* CAP CARDS */
  .cap-card {
    background: var(--ds-white); border: 1px solid var(--ds-border);
    border-radius: 8px; padding: 1.4rem; height: 100%;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .cap-card:hover { box-shadow: 0 6px 24px rgba(0,0,0,0.08); transform: translateY(-2px); }
  .cap-icon {
    width: 42px; height: 42px; background: var(--ds-teal-light); border-radius: 8px;
    display: flex; align-items: center; justify-content: center; margin-bottom: 0.9rem; font-size: 1.3rem;
  }
  .cap-card h5 { font-weight: 700; font-size: 0.92rem; margin-bottom: 0.45rem; color: var(--ds-navy); }
  .cap-card p { font-size: 0.85rem; color: var(--ds-muted); line-height: 1.6; margin: 0; }

  /* TABLES */
  .ds-table-wrap { border-radius: 8px; overflow: hidden; border: 1px solid var(--ds-border); margin: 1.5rem 0; }
  .ds-table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
  .ds-table th { background: var(--ds-navy); color: white; font-weight: 600; padding: 0.8rem 1rem; text-align: left; font-size: 0.8rem; }
  .ds-table td { padding: 0.75rem 1rem; border-bottom: 1px solid var(--ds-border); color: var(--ds-text); vertical-align: top; }
  .ds-table tr:last-child td { border-bottom: none; }
  .ds-table tr:hover td { background: #fafafa; }
  .ds-table tr td:first-child { font-weight: 600; color: var(--ds-teal); }

  /* PILLS */
  .ds-pill {
    display: inline-block; background: var(--ds-teal-light); color: var(--ds-teal);
    font-size: 0.73rem; font-weight: 600; padding: 0.22rem 0.65rem;
    border-radius: 20px; margin: 0.2rem; letter-spacing: 0.02em;
    border: 1px solid rgba(0,120,128,0.2);
  }

  /* STAT BLOCKS */
  .stat-block {
    background: var(--ds-white); border: 1px solid var(--ds-border);
    border-radius: 10px; padding: 1.8rem 1.5rem; text-align: center;
    border-top: 3px solid var(--ds-teal);
  }
  .stat-block .big-num { font-family: var(--font-head); font-size: 2.8rem; font-weight: 800; color: var(--ds-teal); display: block; line-height: 1; margin-bottom: 0.4rem; }
  .stat-block p { color: var(--ds-muted); font-size: 0.88rem; margin: 0; line-height: 1.5; }
  .stat-banner {
    background: var(--ds-teal); color: white; border-radius: 10px;
    padding: 1.8rem 2.5rem; text-align: center; margin: 1.8rem 0;
    display: flex; flex-direction: column; align-items: center;
  }
  .stat-banner .big-num { font-family: var(--font-head); font-size: 3.2rem; font-weight: 800; color: white; line-height: 1; margin-bottom: 0.4rem; }
  .stat-banner p { color: rgba(255,255,255,0.85); font-size: 0.95rem; margin: 0; max-width: 500px; }

  /* AGENT CARDS */
  .agent-card { background: var(--ds-white); border: 1px solid var(--ds-border); border-top: 3px solid var(--ds-teal); border-radius: 8px; padding: 1.2rem; margin-bottom: 0.75rem; }
  .agent-card h5 { font-weight: 700; font-size: 0.9rem; color: var(--ds-navy); margin-bottom: 0.35rem; }
  .agent-card p { font-size: 0.83rem; color: var(--ds-muted); margin: 0; line-height: 1.6; }

  /* PROCESS STEPS */
  .process-step { display: flex; gap: 1.1rem; margin-bottom: 1.8rem; align-items: flex-start; }
  .step-num { width: 36px; height: 36px; background: var(--ds-teal); color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; margin-top: 0.15rem; }
  .step-content h5 { font-weight: 700; font-size: 0.97rem; margin-bottom: 0.35rem; color: var(--ds-navy); }
  .step-content p { font-size: 0.9rem; color: var(--ds-muted); margin: 0; line-height: 1.65; }

  /* CASE CARDS */
  .case-card { background: var(--ds-white); border: 1px solid var(--ds-border); border-radius: 10px; overflow: hidden; margin-bottom: 1.8rem; box-shadow: 0 2px 8px rgba(0,0,0,0.04); }
  .case-card-header { background: var(--ds-navy); color: white; padding: 1.1rem 1.4rem; display: flex; align-items: center; gap: 1rem; }
  .case-num { width: 34px; height: 34px; background: var(--ds-red); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 0.85rem; flex-shrink: 0; }
  .case-card-header h4 { margin: 0; font-size: 0.97rem; font-weight: 700; }
  .case-card-header small { display: block; color: rgba(255,255,255,0.5); font-size: 0.75rem; margin-top: 0.1rem; }
  .case-card-body { padding: 1.4rem; }
  .case-card-body p { font-size: 0.9rem; margin-bottom: 0.6rem; line-height: 1.65; }
  .case-metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(120px,1fr)); gap: 0.75rem; margin-top: 1rem; background: var(--ds-bg); border-radius: 8px; padding: 1rem; }
  .case-metric-val { font-family: var(--font-head); font-weight: 800; font-size: 1.4rem; color: var(--ds-red); display: block; line-height: 1; }
  .case-metric-label { font-size: 0.72rem; color: var(--ds-muted); display: block; margin-top: 0.2rem; line-height: 1.3; }

  /* PARTNER */
  .partner-feature { background: var(--ds-navy); border-radius: 12px; padding: 2.5rem; margin: 1.5rem 0; }
  .partner-feature h3 { font-family: var(--font-head); font-weight: 700; font-size: 1.5rem; color: var(--ds-teal); margin-bottom: 0.75rem; }
  .partner-feature p { color: rgba(255,255,255,0.72); font-size: 0.97rem; line-height: 1.8; }
  .partner-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1.2rem; }
  .partner-item { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 7px; padding: 0.9rem; font-size: 0.87rem; color: rgba(255,255,255,0.75); border-left: 3px solid var(--ds-teal); }
  .partner-item strong { display: block; color: var(--ds-teal); font-size: 0.75rem; margin-bottom: 0.25rem; text-transform: uppercase; letter-spacing: 0.06em; }

  /* CTA */
  .ds-cta { background: var(--ds-navy); border-radius: 14px; padding: 3rem 3.5rem; text-align: center; color: white; margin: 3.5rem 0 1.5rem; position: relative; overflow: hidden; }
  .ds-cta::before { content: ''; position: absolute; top: -60px; right: -60px; width: 250px; height: 250px; background: radial-gradient(circle, rgba(0,120,128,0.25) 0%, transparent 70%); border-radius: 50%; }
  .ds-cta h2 { font-family: var(--font-head); font-weight: 800; font-size: 1.7rem; margin-bottom: 0.8rem; line-height: 1.3; }
  .ds-cta p { color: rgba(255,255,255,0.75); font-size: 1rem; margin-bottom: 1.8rem; }
  .ds-cta .contact-details { margin-top: 1.2rem; font-size: 0.85rem; color: rgba(255,255,255,0.55); }
  .ds-cta .contact-details a { color: var(--ds-teal); text-decoration: none; }
  .ds-cta .contact-details a:hover { text-decoration: underline; }

  /* SCENARIO CARDS */
  .scenario-card { background: var(--ds-white); border: 1px solid var(--ds-border); border-radius: 8px; padding: 1.3rem 1.5rem; margin-bottom: 1rem; border-left: 4px solid var(--ds-teal); }
  .scenario-card h4 { font-weight: 700; font-size: 1rem; color: var(--ds-navy); margin-bottom: 0.4rem; }
  .scenario-card p { font-size: 0.9rem; color: var(--ds-muted); margin: 0; line-height: 1.65; }

  /* FOOTER */
  .ds-footer { background: var(--ds-navy); color: rgba(255,255,255,0.45); text-align: center; padding: 1.8rem; font-size: 0.8rem; }

  /* FADE IN */
  .fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }
  .fade-in.visible { opacity: 1; transform: none; }

  /* RESPONSIVE */
  @media (max-width: 991px) {
    .toc-sidebar { display: none !important; }
    .guide-content { padding-left: 0; }
    .partner-grid { grid-template-columns: 1fr; }
    .herooo { padding: 4rem 0 3rem; }
  }
  @media (max-width: 767px) {
    .herooo-stats-bar { flex-direction: column; align-items: center; }
    .ds-cta { padding: 2rem 1.5rem; }
    .case-metrics { grid-template-columns: repeat(2,1fr); }
  }
`;

/* ══ COMPONENTS ══ */
const SectionEyebrow = ({ label }) => <span className="section-eyebrow">{label}</span>;

const CapCard = ({ icon, title, children, borderTopColor }) => (
  <div className="cap-card" style={borderTopColor ? { borderTop: `3px solid ${borderTopColor}` } : {}}>
    {icon && <div className="cap-icon">{icon}</div>}
    <h5>{title}</h5>
    <p>{children}</p>
  </div>
);

const Callout = ({ label, variant = 'teal', children }) => (
  <div className={`callout ${variant}`}>
    {label && <span className="callout-label">{label}</span>}
    {children}
  </div>
);

const Quote = ({ text, attr }) => (
  <div className="ds-quote">
    <p>{text}</p>
    <span className="quote-attr">— {attr}</span>
  </div>
);

const StatBanner = ({ num, text }) => (
  <div className="stat-banner">
    <span className="big-num">{num}</span>
    <p>{text}</p>
  </div>
);

const AgentCallout = ({ product, items, accent }) => (
  <Callout variant={accent ? 'red' : 'teal'} label={product}>
    <ul>
      {items.map((item, i) => <li key={i}><strong>{item.name}</strong> — {item.text}</li>)}
    </ul>
  </Callout>
);

const ProcessStep = ({ num, title, children }) => (
  <div className="process-step">
    <div className="step-num">{num}</div>
    <div className="step-content"><h5>{title}</h5><p>{children}</p></div>
  </div>
);

const CaseCard = ({ num, title, subtitle, challenge, solution, metrics }) => (
  <div className="case-card">
    <div className="case-card-header">
      <div className="case-num">{num}</div>
      <div><h4>{title}</h4><small>{subtitle}</small></div>
    </div>
    <div className="case-card-body">
      <p><strong>The Challenge:</strong> {challenge}</p>
      <p><strong>The Solution:</strong> {solution}</p>
      <div className="case-metrics">
        {metrics.map((m, i) => (
          <div key={i}>
            <span className="case-metric-val">{m.val}</span>
            <span className="case-metric-label">{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

/* ══ MAIN PAGE ══ */
export default function Dynamics365GuidePage() {
  const [activeId, setActiveId] = useState('introduction');
  const { meta, herooo, toc, sections: s } = guideData;

  useEffect(() => {
    const els = document.querySelectorAll('.fade-in');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
      { threshold: 0.06 }
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const anchors = document.querySelectorAll('.section-anchor[id]');
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-10% 0px -85% 0px' }
    );
    anchors.forEach(a => obs.observe(a));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Head>
       <title>The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square</title>
        <meta
          name="description"
          content="Integrate Insights Works with Business Central to optimise your entire order fulfillment process along with streamlining warehouse operations."
        />
        <link
          rel="canonical"
          href="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/" />
        <meta property="og:title" content="The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square" />
        <meta property="og:description" content="Dynamics 365 cloud vs on-premise, which one is better for your business? Let's compare both Dynamics 365 cloud and Dynamics 365 on-premise." />
        <meta property="og:image" content="https://www.dynamicssquare.co.uk/img/MicrosoftTeams-image-5.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dynamicssquare.co.uk/the-ultimate-guide-to-microsoft-dynamics-365/" />
        <meta property="twitter:title" content="The Ultimate Guide to Microsoft Dynamics 365 | Dynamics Square" />
        <meta property="twitter:description" content="Dynamics 365 cloud vs on-premise, which one is better for your business? Let's compare both Dynamics 365 cloud and Dynamics 365 on-premise." />
        <meta property="twitter:image" content="https://www.dynamicssquare.co.uk/img/MicrosoftTeams-image-5.png" />
        <style dangerouslySetInnerHTML={{ __html: CSS }} />
      </Head>



      {/* HERO */}
      <section className="herooo">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-xl-8">
              <span className="herooo-eyebrow">{herooo.badge}</span>
              <h1>{herooo.heading}<br /><span className="gradient-text">{herooo.headingAccent}</span></h1>
              <p className="herooo-sub">{herooo.subheading}</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <a href={herooo.ctaPrimary.href} className="btn-ds-primary" onClick={e => scrollTo(e, herooo.ctaPrimary.href)}>{herooo.ctaPrimary.label} →</a>
                <a href={herooo.ctaSecondary.href} className="btn-ds-outline" onClick={e => scrollTo(e, herooo.ctaSecondary.href)}>{herooo.ctaSecondary.label}</a>
              </div>
              <div className="herooo-stats-bar">
                {herooo.stats.map(st => (
                  <div key={st.num}>
                    <span className="herooo-stat-num">{st.num}</span>
                    <span className="herooo-stat-label" style={{ whiteSpace: 'pre-line' }}>{st.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-8 col-xl-7 mt-4">
              <div className="ceo-card">
                <p>"{herooo.ceoQuote.text}"</p>
                <span className="ceo-sig">{herooo.ceoQuote.name}</span>
                <span className="ceo-title">{herooo.ceoQuote.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="container page-wrap">
        <div className="row">

          {/* SIDEBAR */}
          <div className="col-lg-3 d-none d-lg-block">
            <nav className="toc-sidebar">
              <span className="toc-heading">Contents</span>
              {toc.map(item => (
                <a key={item.href} href={item.href}
                  className={`${item.sub ? 'toc-sub' : ''}${activeId === item.href.replace('#','') ? ' active' : ''}`}
                  onClick={e => scrollTo(e, item.href)}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="col-lg-9 guide-content">

            {/* ── 01 INTRODUCTION ── */}
            <div id="introduction" className="section-anchor fade-in">
              <SectionEyebrow label={s.introduction.label} />
              <h2 className="section-titleee">{s.introduction.title}</h2>
              <p className="lead-para">{s.introduction.lead}</p>
              <p>{s.introduction.body}</p>

              <div id="challenges" className="section-anchor">
                <h3 className="sub-title">{s.introduction.challenges.title}</h3>
                <p>{s.introduction.challenges.intro}</p>
                <p>{s.introduction.challenges.body}</p>
                <div className="row g-3 my-2">
                  {s.introduction.challenges.cards.map(c => (
                    <div key={c.title} className="col-sm-6"><CapCard icon={c.icon} title={c.title}>{c.text}</CapCard></div>
                  ))}
                </div>
                <StatBanner num={s.introduction.challenges.stat.num} text={s.introduction.challenges.stat.text} />
              </div>

              <div id="why-integrated" className="section-anchor">
                <h3 className="sub-title">{s.introduction.whyIntegrated.title}</h3>
                <p>{s.introduction.whyIntegrated.intro}</p>
                <ul style={{ paddingLeft: '1.2rem', lineHeight: 2, color: 'var(--ds-text)' }}>
                  {s.introduction.whyIntegrated.benefits.map(b => (
                    <li key={b.bold}><strong>{b.bold}</strong> — {b.text}</li>
                  ))}
                </ul>
                <Callout variant="gold" label="The Bottom Line">
                  <p className="mb-0" style={{ fontSize: '0.93rem' }}><strong>{s.introduction.whyIntegrated.callout}</strong></p>
                </Callout>
              </div>

              <div id="about-ds" className="section-anchor">
                <h3 className="sub-title">{s.introduction.aboutDS.title}</h3>
                <p>{s.introduction.aboutDS.intro}</p>
                <div className="row g-3 mt-1">
                  {s.introduction.aboutDS.pillars.map(p => (
                    <div key={p.title} className="col-md-4"><CapCard title={p.title} borderTopColor={p.color}>{p.text}</CapCard></div>
                  ))}
                </div>
                <Quote text={`"${s.introduction.aboutDS.quote.text}"`} attr={s.introduction.aboutDS.quote.attr} />
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 02 ECOSYSTEM ── */}
            <div id="ecosystem" className="section-anchor fade-in">
              <SectionEyebrow label={s.ecosystem.label} />
              <h2 className="section-titleee">{s.ecosystem.title}</h2>
              <p className="lead-para">{s.ecosystem.lead}</p>
              <p>{s.ecosystem.body}</p>

              <div id="applications-stack" className="section-anchor">
                <h3 className="sub-title">The Microsoft Dynamics 365 Applications Stack</h3>
                <div className="row g-3 mt-1">
                  {s.ecosystem.layers.map(l => (
                    <div key={l.title} className="col-12">
                      <Callout variant={l.accent ? 'red' : 'teal'}>
                        <h4 className="sub-sub mb-1">{l.title}</h4>
                        <p className="mb-0" style={{ fontSize: '0.91rem' }}>{l.text}</p>
                      </Callout>
                    </div>
                  ))}
                </div>
              </div>

              <div id="azure" className="section-anchor">
                <h3 className="sub-title">{s.ecosystem.azure.title}</h3>
                <p>{s.ecosystem.azure.intro}</p>
                <StatBanner num={s.ecosystem.azure.stat.num} text={s.ecosystem.azure.stat.text} />
                <div className="row g-3 mt-2">
                  {s.ecosystem.azure.cards.map(c => (
                    <div key={c.title} className="col-sm-6"><CapCard icon={c.icon} title={c.title}>{c.text}</CapCard></div>
                  ))}
                </div>
                <Quote text={`"${s.ecosystem.azure.quote.text}"`} attr={s.ecosystem.azure.quote.attr} />
              </div>
              <Callout variant="teal" label="Key Takeaways — The Ecosystem">
                <ul>{s.ecosystem.takeaways.map(t => <li key={t}>{t}</li>)}</ul>
              </Callout>
            </div>

            <hr className="ds-divider" />

            {/* ── 03 D365 ── */}
            <div id="dynamics365" className="section-anchor fade-in">
              <SectionEyebrow label={s.dynamics365.label} />
              <h2 className="section-titleee">{s.dynamics365.title}</h2>
              <p className="lead-para">{s.dynamics365.lead}</p>
              <p>{s.dynamics365.body}</p>
              <h3 className="sub-title">{s.dynamics365.erpCrm.title}</h3>
              <div className="row g-3">
                <div className="col-md-6">
                  <div className="cap-card h-100" style={{ border: '2px solid var(--ds-teal)' }}>
                    <div className="cap-icon">{s.dynamics365.erpCrm.erp.icon}</div>
                    <h5 style={{ fontWeight: 700, fontSize: '1rem' }}>{s.dynamics365.erpCrm.erp.title}</h5>
                    <p>{s.dynamics365.erpCrm.erp.text}</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="cap-card h-100" style={{ border: '2px solid var(--ds-red)' }}>
                    <div className="cap-icon" style={{ background: 'rgba(180,40,40,0.08)' }}>{s.dynamics365.erpCrm.crm.icon}</div>
                    <h5 style={{ fontWeight: 700, fontSize: '1rem' }}>{s.dynamics365.erpCrm.crm.title}</h5>
                    <p>{s.dynamics365.erpCrm.crm.text}</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 04 ERP ── */}
            <div id="erp-solutions" className="section-anchor fade-in">
              <SectionEyebrow label={s.erp.label} />
              <h2 className="section-titleee">{s.erp.title}</h2>
              <p className="lead-para">{s.erp.lead}</p>

              <div id="business-central" className="section-anchor">
                <h3 className="sub-title">{s.erp.businessCentral.title}</h3>
                <p>{s.erp.businessCentral.intro}</p>
                <p>{s.erp.businessCentral.body}</p>
                <div className="row g-3 mt-1">
                  {s.erp.businessCentral.capabilities.map(c => (
                    <div key={c.title} className="col-sm-6 col-md-4"><CapCard icon={c.icon} title={c.title}>{c.text}</CapCard></div>
                  ))}
                </div>
                <Quote text={`"${s.erp.businessCentral.quote.text}"`} attr={s.erp.businessCentral.quote.attr} />
                <p className="mt-2">Best suited for: {s.erp.businessCentral.industries.map(p => <span key={p} className="ds-pill">{p}</span>)}</p>
              </div>

              <div id="bc-new" className="section-anchor">
                <h3 className="sub-title">{s.erp.businessCentral.whatsNew.title}</h3>
                <p>{s.erp.businessCentral.whatsNew.intro}</p>
                <div className="row g-3 mt-1">
                  {s.erp.businessCentral.whatsNew.updates.map(u => (
                    <div key={u.title} className="col-md-6">
                      <div className="agent-card"><h5>{u.title}</h5><p>{u.text}</p></div>
                    </div>
                  ))}
                </div>
                <Callout variant="gold" label="Bottom Line">
                  <p className="mb-0" style={{ fontSize: '0.92rem' }}><strong>{s.erp.businessCentral.whatsNew.callout}</strong></p>
                </Callout>
              </div>

              <div id="bc-licensing" className="section-anchor">
                <h3 className="sub-title">{s.erp.businessCentral.licensing.title}</h3>
                <div className="ds-table-wrap">
                  <table className="ds-table">
                    <thead><tr><th>Licence Type</th><th>Who It's For</th><th>What's Included</th></tr></thead>
                    <tbody>{s.erp.businessCentral.licensing.rows.map(r => <tr key={r.type}><td>{r.type}</td><td>{r.who}</td><td>{r.includes}</td></tr>)}</tbody>
                  </table>
                </div>
              </div>

              <div id="d365-finance" className="section-anchor">
                <h3 className="sub-title">{s.erp.finance.title}</h3>
                <p>{s.erp.finance.intro}</p><p>{s.erp.finance.capabilities}</p>
                <p>Best suited for: {s.erp.finance.industries.map(p => <span key={p} className="ds-pill">{p}</span>)}</p>
              </div>

              <div id="d365-scm" className="section-anchor">
                <h3 className="sub-title">{s.erp.scm.title}</h3>
                <p>{s.erp.scm.intro}</p><p>{s.erp.scm.capabilities}</p>
                <p>Best suited for: {s.erp.scm.industries.map(p => <span key={p} className="ds-pill">{p}</span>)}</p>
              </div>

              <div id="comparison" className="section-anchor">
                <h3 className="sub-title">{s.erp.comparison.title}</h3>
                <div className="ds-table-wrap">
                  <table className="ds-table">
                    <thead><tr>{s.erp.comparison.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>{s.erp.comparison.rows.map((row,i) => <tr key={i}>{row.map((cell,j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              </div>
              <Callout variant="teal" label="Key Takeaways — ERP">
                <ul>{s.erp.takeaways.map(t => <li key={t}>{t}</li>)}</ul>
              </Callout>
            </div>

            <hr className="ds-divider" />

            {/* ── 05 CRM ── */}
            <div id="crm-solutions" className="section-anchor fade-in">
              <SectionEyebrow label={s.crm.label} />
              <h2 className="section-titleee">{s.crm.title}</h2>
              <p className="lead-para">{s.crm.lead}</p>

              <div id="d365-sales" className="section-anchor">
                <h3 className="sub-title">{s.crm.sales.title}</h3>
                <p>{s.crm.sales.intro}</p>
                <div className="row g-3 mt-1">
                  {s.crm.sales.cards.map(c => (
                    <div key={c.title} className="col-sm-6"><CapCard icon={c.icon} title={c.title}>{c.text}</CapCard></div>
                  ))}
                </div>
              </div>

              <div id="d365-service" className="section-anchor">
                <h3 className="sub-title">{s.crm.customerService.title}</h3>
                <p>{s.crm.customerService.intro}</p>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--ds-text)', lineHeight: 1.9 }}>
                  {s.crm.customerService.capabilities.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>

              <div id="field-service" className="section-anchor">
                <h3 className="sub-title">{s.crm.fieldService.title}</h3>
                <p>{s.crm.fieldService.intro}</p>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--ds-text)', lineHeight: 1.9 }}>
                  {s.crm.fieldService.capabilities.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>

              <div id="customer-insights" className="section-anchor">
                <h3 className="sub-title">{s.crm.customerInsights.title}</h3>
                <p>{s.crm.customerInsights.intro}</p>
                <ul style={{ paddingLeft: '1.2rem', color: 'var(--ds-text)', lineHeight: 1.9 }}>
                  {s.crm.customerInsights.capabilities.map(c => <li key={c}>{c}</li>)}
                </ul>
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 06 DATA ── */}
            <div id="data-layer" className="section-anchor fade-in">
              <SectionEyebrow label={s.dataLayer.label} />
              <h2 className="section-titleee">{s.dataLayer.title}</h2>
              <p className="lead-para">{s.dataLayer.lead}</p>
              <h4 className="sub-sub">{s.dataLayer.powerBI.title}</h4>
              <p>{s.dataLayer.powerBI.text}</p>
              <h4 className="sub-sub">{s.dataLayer.fabric.title}</h4>
              <p>{s.dataLayer.fabric.text}</p>
            </div>

            <hr className="ds-divider" />

            {/* ── 07 POWER PLATFORM ── */}
            <div id="power-platform" className="section-anchor fade-in">
              <SectionEyebrow label={s.powerPlatform.label} />
              <h2 className="section-titleee">{s.powerPlatform.title}</h2>
              <p className="lead-para">{s.powerPlatform.lead}</p>
              <div className="row g-3 mt-1">
                {s.powerPlatform.tools.map(c => (
                  <div key={c.title} className="col-sm-6"><CapCard icon={c.icon} title={c.title}>{c.text}</CapCard></div>
                ))}
              </div>
              <div id="copilot" className="section-anchor">
                <h3 className="sub-title">{s.powerPlatform.copilot.title}</h3>
                <p>{s.powerPlatform.copilot.intro}</p>
                <StatBanner num={s.powerPlatform.copilot.stat.num} text={s.powerPlatform.copilot.stat.text} />
                <h4 className="sub-sub mt-3">Pre-Built AI Agents Across Dynamics 365</h4>
                <div className="row g-3 mt-1">
                  {s.powerPlatform.copilot.agents.map(a => (
                    <div key={a.product} className="col-md-6">
                      <AgentCallout product={a.product} items={a.items} accent={a.accent} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 08 INDUSTRIES ── */}
            <div id="industries" className="section-anchor fade-in">
              <SectionEyebrow label={s.industries.label} />
              <h2 className="section-titleee">{s.industries.title}</h2>
              <p className="lead-para">{s.industries.lead}</p>
              <div className="ds-table-wrap">
                <table className="ds-table">
                  <thead><tr>{s.industries.headers.map(h => <th key={h}>{h}</th>)}</tr></thead>
                  <tbody>{s.industries.rows.map((row,i) => <tr key={i}>{row.map((cell,j) => <td key={j}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 09 ISV ── */}
            <div id="isv" className="section-anchor fade-in">
              <SectionEyebrow label={s.isv.label} />
              <h2 className="section-titleee">{s.isv.title}</h2>
              <p className="lead-para">{s.isv.lead}</p>
              <p>{s.isv.body}</p>
              <div className="row g-3 mt-1">
                {s.isv.categories.map(c => (
                  <div key={c.title} className="col-sm-6"><CapCard title={c.title}>{c.text}</CapCard></div>
                ))}
              </div>
              <Callout variant="red" label="Dynamics Square's Own ISV">
                <p className="mb-0"><strong>{s.isv.ownIsv.name}</strong> — {s.isv.ownIsv.text}</p>
              </Callout>
              <h3 className="sub-title">How Dynamics Square Evaluates and Recommends ISVs</h3>
              <p>{s.isv.evalProcess}</p>
            </div>

            <hr className="ds-divider" />

            {/* ── 10 ARCHITECTURE ── */}
            <div id="architecture" className="section-anchor fade-in">
              <SectionEyebrow label={s.architecture.label} />
              <h2 className="section-titleee">{s.architecture.title}</h2>
              <p className="lead-para">{s.architecture.lead}</p>
              <div className="row g-3 mt-1">
                {s.architecture.layers.map(l => (
                  <div key={l.title} className="col-sm-6 col-md-4">
                    <CapCard title={l.title} borderTopColor={l.color}>{l.text}</CapCard>
                  </div>
                ))}
              </div>
              <Quote text={`"${s.architecture.quote.text}"`} attr={s.architecture.quote.attr} />
            </div>

            <hr className="ds-divider" />

            {/* ── 11 IMPLEMENTATION ── */}
            <div id="implementation" className="section-anchor fade-in">
              <SectionEyebrow label={s.implementation.label} />
              <h2 className="section-titleee">{s.implementation.title}</h2>
              <p className="lead-para">{s.implementation.lead}</p>
              {s.implementation.steps.map(step => (
                <ProcessStep key={step.num} num={step.num} title={step.title}>{step.text}</ProcessStep>
              ))}
              <Quote text={`"${s.implementation.quote.text}"`} attr={s.implementation.quote.attr} />
            </div>

            <hr className="ds-divider" />

            {/* ── 12 MIGRATION ── */}
            <div id="migration" className="section-anchor fade-in">
              <SectionEyebrow label={s.migration.label} />
              <h2 className="section-titleee">{s.migration.title}</h2>
              <p className="lead-para">{s.migration.lead}</p>
              {s.migration.scenarios.map(sc => (
                <div key={sc.title} className="scenario-card">
                  <h4>{sc.title}</h4><p>{sc.text}</p>
                </div>
              ))}
              <Callout variant="red" label="Common Migration Risks — and How DS Avoids Them">
                <ul>{s.migration.risks.map(r => <li key={r}>{r}</li>)}</ul>
              </Callout>
              <Quote text={`"${s.migration.quote.text}"`} attr={s.migration.quote.attr} />
            </div>

            <hr className="ds-divider" />

            {/* ── 13 ROI ── */}
            <div id="roi" className="section-anchor fade-in">
              <SectionEyebrow label={s.roi.label} />
              <h2 className="section-titleee">{s.roi.title}</h2>
              <p className="lead-para">{s.roi.lead}</p>
              <div className="row g-3 mt-1">
                {s.roi.stats.map(st => (
                  <div key={st.num} className="col-md-4">
                    <div className="stat-block">
                      <span className="big-num">{st.num}</span><p>{st.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Quote text={`"${s.roi.quote.text}"`} attr={s.roi.quote.attr} />

              <div id="case-stories" className="section-anchor">
                <h3 className="sub-title">{s.roi.caseStories.title}</h3>
                <p>{s.roi.caseStories.intro}</p>
                {s.roi.caseStories.cases.map(c => (
                  <CaseCard key={c.num} {...c} />
                ))}
              </div>
            </div>

            <hr className="ds-divider" />

            {/* ── 14 PARTNER ── */}
            <div id="partner" className="section-anchor fade-in">
              <SectionEyebrow label={s.partner.label} />
              <h2 className="section-titleee">{s.partner.title}</h2>
              <p className="lead-para">{s.partner.lead}</p>
              <div className="partner-feature">
                <h3>Why Dynamics Square Is Different</h3>
                <p>Dynamics Square positions itself as a long-term partner, not a transactional vendor. The relationship doesn't end at go-live — it evolves as the business evolves.</p>
                <div className="partner-grid">
                  {s.partner.dsAdvantages.map(p => (
                    <div key={p.label} className="partner-item"><strong>{p.label}</strong>{p.text}</div>
                  ))}
                </div>
              </div>
              <Quote text={`"${s.partner.quote.text}"`} attr={s.partner.quote.attr} />
              <h3 className="sub-title">{s.partner.evalTitle}</h3>
              <p>{s.partner.evalText}</p>
            </div>

            <hr className="ds-divider" />

            {/* ── 15 FINAL THOUGHTS ── */}
            <div id="final-thoughts" className="section-anchor fade-in">
              <SectionEyebrow label={s.finalThoughts.label} />
              <h2 className="section-titleee">{s.finalThoughts.title}</h2>
              <p className="lead-para">{s.finalThoughts.lead}</p>
              {s.finalThoughts.sections.map(sec => (
                <div key={sec.title}>
                  <h3 className="sub-title">{sec.title}</h3>
                  <p>{sec.text}</p>
                </div>
              ))}
              <Callout variant="gold" label="A Long-Term Perspective">
                <p className="mb-0" style={{ fontSize: '0.97rem' }}>{s.finalThoughts.callout}</p>
              </Callout>
            </div>

            <hr className="ds-divider" />

            {/* ── CTA ── */}
            <div id="contact" className="section-anchor fade-in">
              <div className="ds-cta">
                <h2>{s.cta.heading}</h2>
                <p>{s.cta.body}</p>
                <a href="#exampleModal"  data-bs-toggle="modal" rel="noreferrer" className="btn-ds-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                  {s.cta.btnLabel} →
                </a>
                <div className="contact-details">
                  <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
                    <span>📧 <a style={{color:"#fff"}} href={`mailto:${meta.email}`}>{meta.email}</a></span>
                    <span>📞 <a style={{color:"#fff"}} href={`tel:${meta.phone.replace(/\s/g,'')}`}>{meta.phone}</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
