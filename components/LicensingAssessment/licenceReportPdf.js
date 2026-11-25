/* Builds the licence estimate PDF (opened in a new tab) from the visitor's answers.
   Loaded on demand (dynamic import) so jsPDF never ships with the page itself. */

import { fmt } from "../licensingEngine";
import { minimumNote, priceNote } from "./LicensingAssessment";

const SITE = "https://www.dynamicssquare.co.uk";
const PHONE = "+44 203 769 7689";
const PHONE_TEL = "tel:+442037697689";
const EMAIL = "info@dynamicssquare.co.uk";

const C = {
  dark: "#3A2E50", dark2: "#2D2340", plum: "#7B3F74", purple: "#B07CC6", purple2: "#8A529F",
  ink: "#1F1B2D", ink2: "#55505F", muted: "#736D7E", line: "#DCDAE0", tile: "#F5F3F8", red: "#BB2B36",
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

const summaryText = (verdict) => {
  if (verdict.platform === "fo") {
    if (verdict.moduleCount > 0) {
      return verdict.moduleCount === 1
        ? "One of the capabilities you selected goes beyond Business Central and needs Finance & Operations."
        : `${verdict.moduleCount} of the capabilities you selected go beyond Business Central and need Finance & Operations.`;
    }
    return "Your users, legal entities, countries or revenue take you past Business Central and into Finance & Operations.";
  }
  return verdict.tier === "premium"
    ? "The manufacturing or service capabilities you selected need Business Central Premium."
    : "Nothing you have selected so far needs more than Business Central Essentials.";
};

/* Position on the Essentials - Premium - Finance & Ops scale, in percent. */
const scalePosition = (verdict) =>
  verdict.platform === "fo" ? 97 : verdict.tier === "premium" ? 50 : 3;

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

export async function buildReport({ catalog, verdict, priced, input, lead }) {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4", compress: true });
  const [logo, partner] = await Promise.all([
    loadImage("/img/dynamics_square_tm_logo_footer.svg"),
    loadImage("/img/partner-logo-white-2.png", 3),
  ]);

  const S = catalog.content?.statement || {};
  const money = (n) => `${priced.symbol}${fmt(n)}`;

  let y = 0;
  const color = (hex) => doc.setTextColor(hex);
  const font = (size, style = "normal") => {
    doc.setFont("helvetica", style);
    doc.setFontSize(size);
  };
  const lines = (text, width) => doc.splitTextToSize(clean(text), width);
  const lineH = (size) => size * 0.42; // mm per line at a given pt size
  const ensure = (h) => {
    if (y + h > FOOTER_Y - 8) {
      doc.addPage();
      y = 20;
    }
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
  const paragraph = (text, size, hex) => {
    font(size);
    const pl = lines(text, CONTENT_W);
    const h = pl.length * lineH(size) * 1.3;
    ensure(h);
    color(hex);
    doc.text(pl, M, y, { lineHeightFactor: 1.3 });
    y += h;
  };
  // Striped two-column table; `right` aligns the values to the right edge.
  const table = (rows, keyW, right) => {
    rows.forEach(([key, value], i) => {
      font(9.5);
      const vl = lines(value, CONTENT_W - keyW - 8);
      font(9, "bold");
      const kl = lines(key, keyW - 8);
      const h = Math.max(kl.length, vl.length) * lineH(9.5) * 1.3 + 4.5;
      ensure(h);
      if (i % 2 === 0) {
        doc.setFillColor(C.tile);
        doc.rect(M, y, CONTENT_W, h, "F");
      }
      font(9, "bold");
      color(C.plum);
      doc.text(kl, M + 4, y + 5.2, { lineHeightFactor: 1.3 });
      font(9.5);
      color(C.ink);
      if (right) doc.text(vl, M + CONTENT_W - 4, y + 5.2, { align: "right", lineHeightFactor: 1.3 });
      else doc.text(vl, M + keyW, y + 5.2, { lineHeightFactor: 1.3 });
      y += h;
    });
    y += 8;
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
  doc.text("Dynamics 365 Licence Estimate", M, 30);
  const who = [lead.name, lead.company].map((v) => v.trim()).filter(Boolean).join(", ");
  const date = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  font(9.5);
  doc.setTextColor(228, 200, 242);
  doc.text(clean(`Prepared for ${who || "you"}  |  ${date}`), M, 38);
  y = 60;

  /* ---------------------------------------------------------------- platform */
  font(8, "bold");
  color(C.purple2);
  doc.text(clean(S.kicker).toUpperCase(), M, y);
  y += 7;
  font(19, "bold");
  color(C.ink);
  doc.text(clean(verdict.platformLabel), M, y);
  y += 8;

  doc.setDrawColor(C.line);
  doc.setLineWidth(0.6);
  doc.line(M, y, M + CONTENT_W, y);
  doc.setFillColor(C.dark);
  doc.roundedRect(M + (CONTENT_W * scalePosition(verdict)) / 100 - 0.8, y - 3.5, 1.6, 7, 0.8, 0.8, "F");
  font(7.5, "bold");
  color(C.ink2);
  doc.text("ESSENTIALS", M, y + 8);
  doc.text("PREMIUM", M + CONTENT_W / 2, y + 8, { align: "center" });
  doc.text("FINANCE & OPS", M + CONTENT_W, y + 8, { align: "right" });
  y += 16;
  paragraph(summaryText(verdict), 10.5, C.ink2);
  y += 4;

  /* ---------------------------------------------------------------- totals */
  const gap = 5;
  const tileW = (CONTENT_W - gap * 2) / 3;
  [
    [S.perMonth, priced.monthly],
    [S.perYear, priced.annual],
    [S.perThreeYears, priced.threeYear],
  ].forEach(([label, value], i) => {
    const x = M + i * (tileW + gap);
    doc.setFillColor(C.tile);
    doc.roundedRect(x, y, tileW, 26, 3, 3, "F");
    font(8.5);
    color(C.muted);
    doc.text(clean(label), x + 6, y + 8);
    font(16, "bold");
    color(C.ink);
    doc.text(clean(money(value)), x + 6, y + 18.5);
  });
  y += 32;
  paragraph(priceNote(catalog, priced), 8, C.muted);
  y += 8;

  /* ---------------------------------------------------------------- licences */
  heading("Licences");
  table(
    priced.lines.map((l) => [
      `${l.qty} x ${l.label}`,
      `${l.sub}\n${money(l.rate)} each, ${money(l.total)} a month`,
    ]),
    78,
    true
  );
  if (priced.foMinimumApplied) {
    y -= 3;
    paragraph(minimumNote(priced.foMinSeats), 9, C.ink2);
    y += 8;
  }

  if (priced.beyondDrivers.length) {
    heading(S.modulesKicker);
    table(priced.beyondDrivers.map((d) => [d.fo, catalog.appName?.[d.app] || ""]), 110, true);
  }
  if (priced.extensions.length) {
    heading(S.extensionsKicker);
    table(priced.extensions.map((e) => [e.label, "Quoted"]), 110, true);
  }

  /* ---------------------------------------------------------------- answers */
  heading("Your answers");
  const answerRows = (catalog.capabilities || []).map((g) => [
    g.name,
    g.group.filter((c) => input.capabilities.has(c.id)).map((c) => c.label).join("; ") || "None selected",
  ]);
  (catalog.sections || []).forEach((section) =>
    section.fields
      .filter((f) => f.showWhen !== "platform:fo" || verdict.platform === "fo")
      .forEach((f) => {
        const value = f.options ? f.options.find((o) => o.id === input[f.key])?.label : input[f.key];
        answerRows.push([f.label, String(value ?? "-")]);
      })
  );
  answerRows.push(["Currency", priced.currency]);
  if (lead.renewal.trim()) answerRows.push(["Current subscription renewal", lead.renewal.trim()]);
  table(answerRows, 66);

  /* ---------------------------------------------------------------- next steps */
  ensure(46);
  doc.setFillColor(C.dark);
  doc.roundedRect(M, y, CONTENT_W, 40, 4, 4, "F");
  font(13, "bold");
  color("#FFFFFF");
  doc.text("Next steps", M + 8, y + 10);
  font(9.5);
  doc.setTextColor(228, 222, 240);
  doc.text(
    lines("Talk to our Dynamics 365 team to check the licence mix and get a price for implementation.", CONTENT_W - 16),
    M + 8, y + 17, { lineHeightFactor: 1.35 }
  );
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

  paragraph(
    "This is an indicative estimate based on the answers you gave and Microsoft list prices. It is not a quote.",
    7.5, C.muted
  );

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

  const slug = clean(lead.company || lead.name)
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40);
  return { doc, filename: `Dynamics-365-licence-estimate-${slug || "report"}.pdf` };
}
