/**
 * Alt-text rules shared by components/SiteImage.js (at render time) and
 * scripts/fix-image-alts.js (to clean up existing pages).
 *
 * Three kinds of image:
 *  - decorative: shapes, overlays, icons sitting next to their own text.
 *    These get alt="" so search engines and screen readers skip them.
 *  - logos: named after the brand they show.
 *  - content: described by the nearest heading on the page (the script
 *    passes it in as `context`), so the alt matches what the section says.
 *
 * CommonJS so the Node script can require it as well as Next pages.
 */

// Rating badges: file -> what the badge actually shows.
const LOGO_ALTS = {
  "rartin-log-01.png": "Gartner rating 4.3 out of 5",
  "rartin-log-02.png": "Forbes Advisor rating 5 out of 5",
  "rartin-log-03.png": "G2 rating 4 out of 5",
  "rartin-log-04.png": "Software Suggest rating 4.7 out of 5",
  "rartin-log-05.png": "Capterra rating 4 out of 5",
  "microosoft-partner.png": "Microsoft Solutions Partner badge",
  "Arteak-new-logo.png": "Arteak logo",
  "Arteak-logo-small.png": "Arteak logo",
  "parweld-new-logo.png": "Parweld logo",
  "green-wireless-logo.png": "Green Wireless logo",
  "timesco-logo.png": "Timesco logo",
  "omicron_engineering_blur.png": "Omicron Engineering logo",
  "COMXO-LIMITED-logo.png": "COMXO Limited logo",
  "JVEquip_logo.png": "JV Equip logo",
  "MexiLand_logos.png": "MexiLand logo",
  "PLASP-LOGO.png": "PLASP logo",
  "SOS-MANUFACTURING-LOGO.png": "SOS Manufacturing logo",
  "Spectra-Aluminum-logo-new.png": "Spectra Aluminum logo",
  "VidPro_logo.png": "VidPro logo",
  "cli-1.png": "Parweld logo",
  "cli-2.png": "NCC Education logo",
  "cli-3.png": "COMXO logo",
  "cli-4.png": "Arteak logo",
  "cli-5.png": "MTA logo",
  "client-1.png": "CQC logo",
  "client-2.png": "Global Tea logo",
  "client-3.png": "Parweld logo",
  "client-4.png": "Britannia Garment Packaging logo",
  "client-5.png": "Arteak logo",
  "partner-logo-black.png": "Microsoft Solutions Partner badge",
  "partner-logo-black-big.png": "Microsoft Solutions Partner badge",
  "business-central-logo-3.png": "Dynamics 365 Business Central logo",
  "tasklet-factoty-logo.png": "Tasklet Factory logo",
  "awa-01.png": "ERP Software Blog Top Member 2025 award",
  "awa-02.png": "MSDynamicsWorld 2025 Marketing Impact Award for Blogging Performance",
  // Stock photo used beside the consultation call-to-action.
  "MaskGroup8.png": "Business consultant",
  "Terence-Turner.png": "Terence Turner",
  "Jonathan-W.png": "Jonathan W",
  "Nicolas-Hopwood.png": "Nicolas Hopwood",
  "Eliaz-picaso.png": "Eliaz Picaso",
};

// Shapes, overlays and icons that only decorate text next to them.
const DECORATIVE_SRC = [
  /shape/i,
  /over-?lay/i,
  /^n-?\d+\./i,
  /^Component-\d/i,
  /icons?[-_.]/i,
  /-icons?\b/i,
  /^Icon /i,
  /^material-/i,
  /^bc-8-\d+/i,
  /^(serve-ic|con-ic|startic|exp-mangnet-icon|nav-icon-mac|service-i|hr-banner-icon|price-pic)-/i,
  /^(play_icons|quote-(up|down)|settings_b|person_pin|manage_accounts|imp-left)/i,
  /^(Food-and-beverage|proffesional-service|start-up)\.svg$/i,
  /^menu-icons\//i,
  /^febric-/i,
  /^star(-\w+)?\.svg$/i,
];

const DECORATIVE_CLASS = /(^|\s)(flot-\d+|flot-img|overlay-\d+|over(-\d+)?|overmain-thumb(-\d+)?|card-icons?)(\s|$)/;

// Alts that say nothing: "image", "New Solution", file names, "n-015"...
const MEANINGLESS_ALT =
  /^(new solution|image|img|picture|pic|photo|banner|icon|logo|.*\.(png|jpe?g|svg|webp|gif)|[a-z0-9]+([-_][a-z0-9]+)+|n-?\d+|untitled.*)$/i;

function fileOf(src = "") {
  return String(src).split("?")[0].replace(/^.*\/img\//, "");
}

function isDecorative(src, className = "") {
  const file = fileOf(src);
  if (LOGO_ALTS[file.split("/").pop()]) return false;
  return DECORATIVE_SRC.some((re) => re.test(file)) || DECORATIVE_CLASS.test(className);
}

function isMeaningfulAlt(alt) {
  return typeof alt === "string" && alt.trim() !== "" && !MEANINGLESS_ALT.test(alt.trim());
}

// Headings make good alts, but screen readers cut off long ones (~125
// characters) and list numbering ("2. ") means nothing out of context.
function shortenHeading(text = "") {
  let alt = String(text).replace(/\s+/g, " ").replace(/^\d+[.)]\s*/, "").trim();
  if (alt.length <= 125) return alt;
  const lead = alt.split(/[:?]| – | - /)[0].trim();
  if (lead.length >= 15 && lead.length <= 125) return lead;
  return alt.slice(0, 125).replace(/\s+\S*$/, "");
}

/**
 * Best alt for an image. Returns "" for decorative images and null when
 * nothing better than the existing alt is known.
 */
function altFor({ src, alt, className = "", context = "" }) {
  const logo = LOGO_ALTS[fileOf(src).split("/").pop()];
  if (logo) return logo;
  if (isMeaningfulAlt(alt)) return alt;
  if (isDecorative(src, className)) return "";
  return shortenHeading(context) || null;
}

module.exports = { LOGO_ALTS, altFor, isDecorative, isMeaningfulAlt };
