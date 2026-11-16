/* Builds the "Migration readiness report" PDF (opened in a new tab) from the visitor's
   answers and the assess() result. Loaded on demand (dynamic import) so jsPDF
   never ships with the page itself. */

import { fmt } from "./migrationEngine";

const SITE = "https://www.dynamicssquare.co.uk";
const PHONE = "+44 203 769 7689";
const PHONE_TEL = "tel:+442037697689";
const EMAIL = "info@dynamicssquare.co.uk";

const C = {
  dark: "#3A2E50", dark2: "#2D2340", plum: "#7B3F74", purple: "#B07CC6", purple2: "#9A62B3",
  purpleSoft: "#F4ECF8", zone: "#E4C8F2", ink: "#1F1B2D", ink2: "#55505F", muted: "#8A8594",
  line: "#DCDAE0", tile: "#F5F3F8", red: "#BB2B36", clay: "#A32A1F", claySoft: "#FBEDEB",
  amber: "#8A5A0B", amberSoft: "#FBF3E4",
};

const PAGE_W = 210;
const PAGE_H = 297;
const M = 16; // side margin
const CONTENT_W = PAGE_W - M * 2;
const FOOTER_Y = PAGE_H - 12;

// The built-in PDF fonts only cover basic Latin, so swap typographic characters.
const clean = (t) =>
  String(t ?? "")
    .replace(/[–—]/g, "-")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/…/g, "...")
    .replace(/ /g, " ");

const labelOf = (list, id) => (list || []).find((x) => x.id === id)?.label || "-";

/* Turn an image URL (SVG or PNG) into a PNG data URL at `scale`x for crisp print. */
function loadImage(src, scale = 4) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      try {
        const w = (img.naturalWidth || img.width) * scale;
        const h = (img.naturalHeight || img.height) * scale;
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        canvas.getContext("2d").drawImage(img, 0, 0, w, h);
        resolve({ data: canvas.toDataURL("image/png"), ratio: h / w });
      } catch (e) {
        resolve(null);
      }
    };
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function buildReport({ catalog, m, input, lead, currency }) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const [logo, partner] = await Promise.all([
    loadImage("/img/dynamics_square_tm_logo_footer.svg"),
    loadImage("/img/partner-logo-white-2.png", 3),
  ]);

  let y = 0;
  const color = (hex) => doc.setTextColor(hex);
  const font = (size, style = "normal") => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
  };
  const lines = (text, width) => doc.splitTextToSize(clean(text), width);
  const lineH = (size) => size * 0.42; // mm per line at a given pt size
  const newPage = () => {
    doc.addPage();
    y = 20;
  };
  const ensure = (h) => {
    if (y + h > FOOTER_Y - 8) newPage();
  };
  const heading = (text, keepWith = 30) => {
    ensure(16 + keepWith);
    font(13, "bold");
    color(C.ink);
    doc.text(clean(text), M, y);
    doc.setDrawColor(C.purple);
    doc.setLineWidth(0.6);
    doc.line(M, y + 2.2, M + 14, y + 2.2);
    y += 9;
  };

  /* ---------------------------------------------------------------- header band */
  doc.setFillColor(C.dark);
  doc.rect(0, 0, PAGE_W, 46, "F");
  doc.setFillColor(C.dark2);
  doc.rect(0, 46, PAGE_W, 1.2, "F");
  if (logo) {
    doc.addImage(logo.data, "PNG", M, 11, 62, 62 * logo.ratio);
    doc.link(M, 9, 62, 62 * logo.ratio + 4, { url: SITE }); // logo opens the website
  }
  if (partner) doc.addImage(partner.data, "PNG", PAGE_W - M - 30, 8.5, 30, 30 * partner.ratio);

  font(21, "bold");
  color("#FFFFFF");
  doc.text("Migration Readiness Report", M, 30);
  const who = [lead.name, lead.company].filter(Boolean).join(", ");
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  font(9.5);
  doc.setTextColor(228, 200, 242);
  doc.text(clean(`Prepared for ${who || "you"}  |  ${date}`), M, 38);

  y = 60;

  /* ---------------------------------------------------------------- verdict */
  font(8, "bold");
  color(C.purple2);
  doc.text("WHERE YOU LAND", M, y);
  y += 7;
  font(19, "bold");
  color(C.ink);
  const vLines = lines(m.verdict, CONTENT_W);
  doc.text(vLines, M, y);
  y += (vLines.length - 1) * lineH(19) * 1.15 + 6;

  // BC <-> F&O scale with the overlap zone and the visitor's position
  const trackY = y + 2;
  doc.setDrawColor(C.line);
  doc.setLineWidth(0.6);
  doc.line(M, trackY, M + CONTENT_W, trackY);
  doc.setFillColor(C.zone);
  doc.roundedRect(M + CONTENT_W * 0.43, trackY - 1.2, CONTENT_W * 0.15, 2.4, 1.2, 1.2, "F");
  const marker = Math.max(3, Math.min(97, 50 + m.score * 0.55)) / 100;
  doc.setFillColor(C.dark);
  doc.roundedRect(M + CONTENT_W * marker - 0.8, trackY - 3.5, 1.6, 7, 0.8, 0.8, "F");
  font(7.5, "bold");
  color(C.ink2);
  doc.text("BUSINESS CENTRAL", M, trackY + 8);
  doc.text("FINANCE & OPS", M + CONTENT_W, trackY + 8, { align: "right" });
  y = trackY + 16;

  const summary =
    m.sourcePath ||
    (m.platform === "fo"
      ? "Your current system and business profile are leaning towards Finance & Operations, built for complex, multi-entity organisations."
      : m.platform === "overlap"
        ? "Your profile sits in the overlap zone, where either platform can work. The details of the move decide it."
        : "Your current system and business profile are leaning towards Business Central, the streamlined ERP for growing organisations.");
  font(10.5);
  color(C.ink2);
  const sLines = lines(summary, CONTENT_W);
  doc.text(sLines, M, y, { lineHeightFactor: 1.35 });
  y += (sLines.length - 1) * lineH(10.5) * 1.35 + 9;

  /* ---------------------------------------------------------------- metrics */
  const gap = 5;
  const tileW = (CONTENT_W - gap * 2) / 3;
  const tiles = [
    ["Complexity", String(m.complexity), "/100"],
    ["Duration", `${m.minMonths}-${m.maxMonths}`, "months"],
    ["Licences", m.licence ? `${m.licence.symbol}${fmt(m.licence.annual)}` : "-", "/year"],
  ];
  tiles.forEach(([label, value, unit], i) => {
    const x = M + i * (tileW + gap);
    doc.setFillColor(C.tile);
    doc.roundedRect(x, y, tileW, 26, 3, 3, "F");
    font(8.5);
    color(C.muted);
    doc.text(label, x + 6, y + 8);
    font(17, "bold");
    color(C.ink);
    doc.text(clean(value), x + 6, y + 18.5);
    const vw = doc.getTextWidth(clean(value));
    font(8.5);
    color(C.muted);
    doc.text(unit, x + 6 + vw + 1.5, y + 18.5);
  });
  y += 32;

  if (m.licence) {
    const note =
      `Licence subscription only, at ${m.licence.billedFull} full users on ${m.licence.symbol}${fmt(m.licence.seat)} a month. ` +
      "Implementation, data migration and support are separate." +
      (m.licence.trusted
        ? ` List prices verified ${m.licence.verified}.`
        : " Prices in this currency are placeholders pending verification.");
    font(8);
    color(C.muted);
    const nLines = lines(note, CONTENT_W);
    doc.text(nLines, M, y, { lineHeightFactor: 1.3 });
    y += nLines.length * lineH(8) * 1.3 + 6;
  }

  /* ---------------------------------------------------------------- evidence */
  heading("What points where");
  const colW = (CONTENT_W - 10) / 2;
  const drawCol = (x, title, rows) => {
    let cy = y;
    font(8, "bold");
    color(C.purple2);
    doc.text(title, x, cy);
    cy += 6;
    if (!rows.length) {
      font(9.5);
      color(C.muted);
      doc.text("Nothing yet", x, cy);
      return cy + 6;
    }
    rows.forEach((r) => {
      font(9.5);
      color(C.ink);
      const rl = lines(r.label, colW - 12);
      doc.text(rl, x, cy);
      if (!r.neutral) {
        font(8.5, "bold");
        color(C.muted);
        doc.text(String(r.w), x + colW, cy, { align: "right" });
      }
      cy += rl.length * lineH(9.5) * 1.25;
      doc.setDrawColor(C.line);
      doc.setLineWidth(0.2);
      doc.line(x, cy - 1.8, x + colW, cy - 1.8);
      cy += 2.5;
    });
    return cy;
  };
  const evH = Math.max(m.forBC.length, m.forFO.length, 1) * 7.5 + 12;
  ensure(evH);
  const endBC = drawCol(M, "POINTS TO BUSINESS CENTRAL", m.forBC);
  const endFO = drawCol(M + colW + 10, "POINTS TO FINANCE & OPS", m.forFO);
  y = Math.max(endBC, endFO) + 2;

  if (m.complexityDrivers.length) {
    const list = m.complexityDrivers;
    const joined = list.length === 1 ? list[0] : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`;
    font(9.5, "italic");
    color(C.ink2);
    const dl = lines(`Complexity is driven by ${joined}.`, CONTENT_W);
    ensure(dl.length * 5 + 4);
    doc.text(dl, M, y, { lineHeightFactor: 1.3 });
    y += dl.length * lineH(9.5) * 1.3 + 6;
  }

  /* ---------------------------------------------------------------- risks */
  if (m.risks.length) {
    y += 2;
    // keep the heading with the first risk box
    heading("Risks and considerations", 40);
    const tone = { eol: [C.amber, C.amberSoft], cost: [C.clay, C.claySoft], prompt: [C.purple2, C.purpleSoft] };
    m.risks.forEach((r) => {
      const [fg, bg] = tone[r.kind] || tone.prompt;
      font(10.5, "bold");
      const tl = lines(r.title, CONTENT_W - 14);
      font(9.5);
      const bl = lines(r.body, CONTENT_W - 14);
      const h = 7 + tl.length * lineH(10.5) * 1.2 + 1.5 + (bl.length - 1) * lineH(9.5) * 1.35 + 5;
      ensure(h + 4);
      doc.setFillColor(bg);
      doc.roundedRect(M, y, CONTENT_W, h, 2.5, 2.5, "F");
      doc.setFillColor(fg);
      doc.rect(M, y, 1.4, h, "F");
      let ry = y + 7;
      font(10.5, "bold");
      color(fg);
      doc.text(tl, M + 7, ry);
      ry += tl.length * lineH(10.5) * 1.2 + 1.5;
      font(9.5);
      color(C.ink2);
      doc.text(bl, M + 7, ry, { lineHeightFactor: 1.35 });
      y += h + 4;
    });
    y += 2;
  }

  /* ---------------------------------------------------------------- answers */
  const B = catalog.bands || {};
  const sources = (catalog.sources || []).flatMap((g) => g.items || []);
  const reqs = (catalog.complexity || []).filter((c) => input.complexity.includes(c.id)).map((c) => c.label);
  const answers = [
    ["Current system", labelOf(sources, input.source)],
    ["Version or edition", input.version || "-"],
    ["Time on current system", labelOf(catalog.years, input.years)],
    ["People who post transactions", labelOf(B.users, input.users)],
    ["Full users", String(input.fullUsers)],
    ["Approve or view only", String(input.lightUsers)],
    ["Legal entities", labelOf(B.entities, input.entities)],
    ["Countries", labelOf(B.countries, input.countries)],
    ["Annual revenue", labelOf(B.revenue, input.revenue)],
    ["Transactions a month", labelOf(B.volume, input.volume)],
    ["Business requirements", reqs.length ? reqs.join("; ") : "None selected"],
    ["Customisations", labelOf(catalog.customisations, input.customisations)],
    ["Connected systems", String(input.integrations)],
    ["History to bring across", labelOf(catalog.history, input.history)],
    ["Internal IT capability", labelOf(catalog.it, input.it)],
    ["Target go-live", labelOf(catalog.golive, input.golive)],
    ["Budget", labelOf(catalog.budget, input.budget)],
    ["Currency", currency || "-"],
  ];
  heading("Your answers");
  const keyW = 58;
  answers.forEach(([k, v], i) => {
    font(9.5);
    const vl = lines(v, CONTENT_W - keyW - 8);
    const h = Math.max(1, vl.length) * lineH(9.5) * 1.3 + 4.5;
    ensure(h);
    if (i % 2 === 0) {
      doc.setFillColor(C.tile);
      doc.rect(M, y, CONTENT_W, h, "F");
    }
    font(9, "bold");
    color(C.plum);
    doc.text(clean(k), M + 4, y + 5.2);
    font(9.5);
    color(C.ink);
    doc.text(vl, M + keyW, y + 5.2, { lineHeightFactor: 1.3 });
    y += h;
  });
  y += 8;

  /* ---------------------------------------------------------------- next steps */
  ensure(46);
  doc.setFillColor(C.dark);
  doc.roundedRect(M, y, CONTENT_W, 40, 4, 4, "F");
  font(13, "bold");
  color("#FFFFFF");
  doc.text("Next steps", M + 8, y + 10);
  font(9.5);
  doc.setTextColor(228, 222, 240);
  const ns = lines(
    "Your results are preliminary and can be refined through a technical discovery session. Talk to our Dynamics 365 team about your migration.",
    CONTENT_W - 16
  );
  doc.text(ns, M + 8, y + 17, { lineHeightFactor: 1.35 });
  // Schedule demo button + contact links
  const btnY = y + 26;
  doc.setFillColor(C.red);
  doc.roundedRect(M + 8, btnY, 46, 9, 1.5, 1.5, "F");
  font(10, "bold");
  color("#FFFFFF");
  doc.text("Schedule demo", M + 8 + 23, btnY + 6, { align: "center" });
  doc.link(M + 8, btnY, 46, 9, { url: `${SITE}/schedule-a-demo/` });
  font(9.5);
  doc.setTextColor(228, 222, 240);
  doc.textWithLink(`Call ${PHONE}`, M + 62, btnY + 6, { url: PHONE_TEL });
  doc.textWithLink(EMAIL, M + 112, btnY + 6, { url: `mailto:${EMAIL}` });
  y += 48;

  font(7.5);
  color(C.muted);
  const disc = lines(
    "This report is an indicative assessment generated from the answers you gave. Platform fit, timelines and licence figures are estimates, not a quote. Licence figures are Microsoft subscription list prices only; implementation, data migration and support are priced separately.",
    CONTENT_W
  );
  ensure(disc.length * 4);
  doc.text(disc, M, y, { lineHeightFactor: 1.35 });

  /* ---------------------------------------------------------------- footers */
  const pages = doc.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    doc.setPage(p);
    doc.setDrawColor(C.line);
    doc.setLineWidth(0.2);
    doc.line(M, FOOTER_Y - 4, PAGE_W - M, FOOTER_Y - 4);
    font(7.5);
    color(C.muted);
    doc.textWithLink("Dynamics Square UK  |  dynamicssquare.co.uk", M, FOOTER_Y, { url: SITE });
    doc.text(`Page ${p} of ${pages}`, PAGE_W - M, FOOTER_Y, { align: "right" });
  }

  const slug = clean(lead.company || lead.name || "report")
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return { doc, filename: `Dynamics-365-migration-report-${slug || "report"}.pdf` };
}
