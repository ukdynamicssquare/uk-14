import React from 'react';
import Link from 'next/link';
import PageSeo from "../../components/PageSeo";
import { TOOLS } from "../../components/menuData";

// Card copy reuses each tool page's own heading and intro; image and tag come from the menu
const TOOL_COPY = {
    "/tools/microsoft-dynamics-licensing-calculator/": {
        heading: "Dynamics 365 Licensing Calculator (UK)",
        text: "Select the Dynamics 365 apps and users you need and get an itemised estimate of your monthly licence cost, based on Microsoft UK pricing.",
        cta: "Try the Dynamics 365 licensing calculator",
    },
    "/tools/erp-implementation-cost-calculator/": {
        heading: "Dynamics 365 ERP Implementation Price Calculator",
        text: "Easily create your customised fixed price package by simply selecting the capabilities you want in Dynamics 365 ERP.",
    },
    "/tools/top-erp-systems-comparison/": {
        heading: "Compare the Top ERP Systems for Your Business in 2026",
        text: "Compare top ERP systems for 2026. Get features, pricing, and benefits to find the best ERP software that fits your business needs and boosts efficiency.",
    },
};

const anchorFor = (href) => href.split('/').filter(Boolean).pop();

const Index = () => {
    return (
        <>
            <PageSeo
              type="CollectionPage"
              title="Free Dynamics 365 Tools | Dynamics Square UK"
              description="Free tools from Dynamics Square UK to help you plan your Dynamics 365 investment, including our Dynamics 365 licensing and pricing calculator."
            />

            <section className="tl-hero">
                <div className="container">
                    <div className="tl-hero-grid">
                        <div className="tl-hero-copy">
                            <h1>Free Dynamics 365 Tools</h1>
                            <p>
                                Planning a Microsoft Dynamics 365 project? Use our free tools to estimate costs and
                                make better-informed decisions before you speak to a consultant.
                            </p>
                            <nav className="tl-jump" aria-label="Tools">
                                {TOOLS.map((tool, i) => (
                                    <a href={`#${anchorFor(tool.href)}`} key={tool.href}>
                                        <span className="tl-jump-num">{String(i + 1).padStart(2, '0')}</span>
                                        {tool.tag}
                                        <i className="bi bi-arrow-down-short" aria-hidden="true"></i>
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="tl-stack" aria-hidden="true">
                            {TOOLS.map((tool, i) => (
                                <div className={`tl-stack-card c${i + 1}`} key={tool.href}>
                                    <img src={tool.img} alt="" width="263" height="115" decoding="async" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="tl-rows">
                <div className="container">
                    {TOOLS.map((tool, i) => {
                        const copy = TOOL_COPY[tool.href] || {};
                        return (
                            <article className={`tl-row ${i % 2 ? 'is-flipped' : ''}`} id={anchorFor(tool.href)} key={tool.href}>
                                <Link href={tool.href} className="tl-row-visual" aria-hidden="true" tabIndex={-1}>
                                    <span className="tl-row-num">{String(i + 1).padStart(2, '0')}</span>
                                    <img src={tool.img} alt="" width="263" height="115" loading="lazy" decoding="async" />
                                </Link>
                                <div className="tl-row-body">
                                    <span className="tl-tag">{tool.tag}</span>
                                    <h2>{copy.heading || tool.title}</h2>
                                    <p>{copy.text}</p>
                                    <Link href={tool.href} className="tl-btn">
                                        {copy.cta || tool.cta} <i className="bi bi-arrow-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="tl-help-wrap">
                <div className="container">
                    <div className="tl-help">
                        <span className="tl-help-icon" aria-hidden="true"><i className="bi bi-headset"></i></span>
                        <p>
                            Need help choosing the right licences? <Link href="/contact-us/">Talk to our Dynamics 365 team</Link>.
                        </p>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                :root {
                    --tl-ink: #2b2342;
                    --tl-deep: #241c3a;
                    --tl-plum: #60518c;
                    --tl-rose: #984b6e;
                    --tl-red: #bb2b36;
                    --tl-line: #e7e3f0;
                    --tl-soft: #f7f5fb;
                }
                html { scroll-behavior: smooth; }
                @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }

                /* Hero */
                .tl-hero {
                    position: relative;
                    overflow: hidden;
                    padding: 90px 0 100px;
                    color: #fff;
                    background:
                        radial-gradient(700px 420px at 85% 30%, rgba(152, 75, 110, 0.55), transparent 65%),
                        radial-gradient(600px 400px at 10% 100%, rgba(96, 81, 140, 0.6), transparent 70%),
                        linear-gradient(135deg, #1f1834 0%, #2e2449 55%, #3d2f5c 100%);
                }
                .tl-hero::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background-image:
                        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
                    background-size: 48px 48px;
                    mask-image: radial-gradient(ellipse at 70% 40%, #000 20%, transparent 75%);
                    -webkit-mask-image: radial-gradient(ellipse at 70% 40%, #000 20%, transparent 75%);
                    pointer-events: none;
                }
                .tl-hero-grid {
                    position: relative;
                    display: grid;
                    grid-template-columns: 1.05fr 1fr;
                    gap: 60px;
                    align-items: center;
                }
                .tl-hero h1 {
                    font-family: Lato, "Lato Fallback", sans-serif;
                    font-size: 54px !important;
                    font-weight: 800;
                    line-height: 1.08;
                    letter-spacing: -0.02em;
                    margin: 0 0 22px;
                    color: #fff;
                }
                .tl-hero p {
                    font-size: 18px;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.78);
                    max-width: 520px;
                    margin: 0;
                }
                .tl-jump {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                    margin-top: 34px;
                }
                .tl-jump a {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    padding: 9px 14px 9px 10px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.08);
                    border: 1px solid rgba(255, 255, 255, 0.16);
                    color: #fff;
                    font-size: 14px;
                    font-weight: 600;
                    text-decoration: none;
                    backdrop-filter: blur(6px);
                    transition: background .2s, border-color .2s, transform .2s;
                }
                .tl-jump a:hover {
                    background: rgba(255, 255, 255, 0.16);
                    border-color: rgba(255, 255, 255, 0.32);
                    transform: translateY(-1px);
                    color: #fff;
                }
                .tl-jump-num {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    background: #fff;
                    color: var(--tl-plum);
                    font-size: 11px;
                    font-weight: 800;
                }
                .tl-jump .bi { font-size: 18px; opacity: .7; }

                /* Fanned image stack */
                .tl-stack {
                    position: relative;
                    height: 360px;
                }
                .tl-stack-card {
                    position: absolute;
                    width: 300px;
                    padding: 18px;
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.5);
                    transition: transform .4s ease;
                }
                .tl-stack-card img { display: block; width: 100%; height: auto; }
                .tl-stack-card.c1 { top: 10px; left: 4%; transform: rotate(-7deg); z-index: 1; }
                .tl-stack-card.c2 { top: 110px; left: 30%; transform: rotate(3deg); z-index: 3; }
                .tl-stack-card.c3 { top: 210px; left: 8%; transform: rotate(-2deg); z-index: 2; }
                .tl-stack:hover .tl-stack-card.c1 { transform: rotate(-9deg) translate(-8px, -8px); }
                .tl-stack:hover .tl-stack-card.c2 { transform: rotate(5deg) translate(10px, 0); }
                .tl-stack:hover .tl-stack-card.c3 { transform: rotate(-4deg) translate(-6px, 8px); }

                /* Tool rows */
                .tl-rows { padding: 60px 0 30px; background: #fff; }
                .tl-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 64px;
                    align-items: center;
                    padding: 40px 0;
                    scroll-margin-top: 110px;
                }
                .tl-row + .tl-row { border-top: 1px solid var(--tl-line); }
                .tl-row.is-flipped .tl-row-visual { order: 2; }

                .tl-row-visual {
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 300px;
                    border-radius: 24px;
                    overflow: hidden;
                    background:
                        radial-gradient(360px 240px at 80% 15%, rgba(152, 75, 110, 0.14), transparent 70%),
                        linear-gradient(135deg, #f7f4fc 0%, #eee8f8 100%);
                }
                .tl-row-visual img {
                    position: relative;
                    z-index: 1;
                    width: 74%;
                    max-width: 340px;
                    height: auto;
                    padding: 18px;
                    background: #fff;
                    border-radius: 18px;
                    box-shadow: 0 24px 50px -24px rgba(61, 52, 89, 0.45);
                    transition: transform .35s ease;
                }
                .tl-row:hover .tl-row-visual img { transform: translateY(-6px) scale(1.02); }
                .tl-row-num {
                    position: absolute;
                    left: 26px;
                    bottom: -18px;
                    font-family: Lato, "Lato Fallback", sans-serif;
                    font-size: 140px;
                    font-weight: 900;
                    line-height: 1;
                    color: rgba(96, 81, 140, 0.09);
                    pointer-events: none;
                }

                .tl-tag {
                    display: inline-block;
                    padding: 5px 12px;
                    border-radius: 999px;
                    background: #f1edf8;
                    color: var(--tl-plum);
                    font-size: 12px;
                    font-weight: 700;
                    letter-spacing: .06em;
                    text-transform: uppercase;
                    margin-bottom: 18px;
                }
                .tl-row h2 {
                    font-family: Lato, "Lato Fallback", sans-serif;
                    font-size: 36px;
                    font-weight: 800;
                    line-height: 1.18;
                    letter-spacing: -0.01em;
                    color: var(--tl-ink);
                    margin: 0 0 16px;
                    text-wrap: balance;
                }
                .tl-row-body p {
                    font-size: 17px;
                    line-height: 1.75;
                    color: #57536a;
                    margin: 0 0 30px;
                    max-width: 520px;
                }
                .tl-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    padding: 14px 26px;
                    border-radius: 12px;
                    background: var(--tl-red);
                    color: #fff !important;
                    font-weight: 600;
                    font-size: 16px;
                    text-decoration: none;
                    box-shadow: 0 14px 30px -14px rgba(187, 43, 54, 0.75);
                    transition: transform .2s, box-shadow .2s, background .2s;
                }
                .tl-btn:hover {
                    background: #a3232d;
                    transform: translateY(-2px);
                    box-shadow: 0 18px 34px -14px rgba(187, 43, 54, 0.85);
                }
                .tl-btn .bi { transition: transform .2s; }
                .tl-btn:hover .bi { transform: translateX(4px); }

                /* Help band */
                .tl-help-wrap { padding: 30px 0 100px; background: #fff; }
                .tl-help {
                    display: flex;
                    align-items: center;
                    gap: 18px;
                    padding: 30px 36px;
                    border-radius: 22px;
                    color: #fff;
                    background:
                        radial-gradient(500px 200px at 90% 0%, rgba(152, 75, 110, 0.55), transparent 70%),
                        linear-gradient(135deg, #241c3a, #3d2f5c);
                    box-shadow: 0 30px 60px -30px rgba(36, 28, 58, 0.7);
                }
                .tl-help-icon {
                    width: 52px;
                    height: 52px;
                    flex: none;
                    border-radius: 14px;
                    background: rgba(255, 255, 255, 0.12);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 22px;
                }
                .tl-help p { margin: 0; color: #fff; font-size: 19px; font-weight: 500; line-height: 1.5; }
                .tl-help a {
                    color: #ffb4bd;
                    font-weight: 700;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .tl-help a:hover { color: #fff; }

                @media (max-width: 1199px) {
                    .tl-hero h1 { font-size: 46px !important; }
                    .tl-stack-card { width: 260px; }
                    .tl-row h2 { font-size: 30px; }
                    .tl-row { gap: 44px; }
                }
                @media (max-width: 991px) {
                    .tl-hero { padding: 64px 0 70px; }
                    .tl-hero-grid { grid-template-columns: 1fr; gap: 30px; }
                    .tl-stack { height: 300px; max-width: 460px; width: 100%; margin: 0 auto; }
                    .tl-row { grid-template-columns: 1fr; gap: 28px; }
                    .tl-row.is-flipped .tl-row-visual { order: 0; }
                    .tl-rows { padding-top: 60px; }
                }
                @media (max-width: 768px) {
                    .tl-hero { padding: 44px 0 48px; }
                    .tl-hero h1 { font-size: 36px !important; }
                    .tl-hero p { font-size: 16px; }
                    .tl-jump { margin-top: 24px; }
                    .tl-jump a { font-size: 13px; }
                    .tl-stack { height: 250px; }
                    .tl-stack-card { width: 210px; padding: 12px; border-radius: 14px; }
                    .tl-stack-card.c2 { top: 88px; left: 34%; }
                    .tl-stack-card.c3 { top: 166px; left: 4%; }
                    .tl-rows { padding: 40px 0 10px; }
                    .tl-row { padding: 30px 0; }
                    .tl-row-visual { min-height: 210px; border-radius: 18px; }
                    .tl-row-num { font-size: 96px; left: 16px; bottom: -12px; }
                    .tl-row h2 { font-size: 25px; }
                    .tl-row-body p { font-size: 15px; margin-bottom: 24px; }
                    .tl-btn { width: 100%; justify-content: center; font-size: 15px; padding: 13px 16px; }
                    .tl-help-wrap { padding: 10px 0 60px; }
                    .tl-help { flex-direction: column; align-items: flex-start; padding: 24px 22px; }
                    .tl-help p { font-size: 17px; }
                }
                @media (prefers-reduced-motion: reduce) {
                    .tl-stack-card, .tl-row-visual img, .tl-btn, .tl-btn .bi, .tl-jump a { transition: none; }
                }
            `}</style>
        </>
    );
}

export default Index;
