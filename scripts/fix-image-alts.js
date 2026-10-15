/**
 * Applies helpers/imageAlt.js to the <img>/<Image> tags already in the pages.
 *
 *   node scripts/fix-image-alts.js [files...]   fix the given files
 *   node scripts/fix-image-alts.js --dry ...    only report what would change
 *
 * For each tag with a missing or meaningless alt ("image", "n-015", a file
 * name...):
 *  - known logos get the brand name,
 *  - decorative shapes/icons get alt="" aria-hidden="true",
 *  - other images get the text of the nearest heading: the next heading when
 *    the image sits at the top of a card, otherwise the one above it.
 * With --lazy, raw <img> tags after the first two on the page also get
 * loading="lazy" decoding="async" (the first two are usually the hero).
 */
const fs = require('fs');
const { altFor, isMeaningfulAlt } = require('../helpers/imageAlt');

const args = process.argv.slice(2);
const DRY = args.includes('--dry');
const LAZY = args.includes('--lazy');
const files = args.filter((a) => !a.startsWith('--'));

const TAG = /<(img|Image)\b([^>]*?)(\/?)>/g;
const HEADING = /<h([1-4])\b[^>]*>([\s\S]*?)<\/h\1>/g;

function headingText(jsx) {
  if (/\{(?!\s*["'`])/.test(jsx.replace(/\{\s*["'`][^"'`]*["'`]\s*\}/g, ''))) return '';
  return jsx
    .replace(/\{\s*["'`]([^"'`]*)["'`]\s*\}/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&apos;|&#39;|&rsquo;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function contextFor(source, index, tagEnd) {
  // A heading shortly after the image, with no other image in between
  // (image at the top of a card, title under it).
  const after = source.slice(tagEnd, tagEnd + 700);
  const next = new RegExp(HEADING.source).exec(after);
  if (next && !/<(img|Image)\b/.test(after.slice(0, next.index))) {
    const text = headingText(next[2]);
    if (text) return text;
  }
  // Otherwise the closest heading above it.
  let last = '';
  for (const m of source.slice(0, index).matchAll(HEADING)) {
    const text = headingText(m[2]);
    if (text) last = text;
  }
  return last;
}

function attr(attrs, name) {
  const m = attrs.match(new RegExp(`\\b${name}=(?:"([^"]*)"|'([^']*)'|\\{\\s*["'\`]([^"'\`]*)["'\`]\\s*\\})`));
  return m ? (m[1] ?? m[2] ?? m[3]) : undefined;
}

function setAlt(attrs, value) {
  const quoted = value.includes('"') ? `{${JSON.stringify(value)}}` : `"${value}"`;
  const hasAlt = /\balt=(?:"[^"]*"|'[^']*'|\{[^}]*\})/.test(attrs);
  let out = hasAlt
    ? attrs.replace(/\balt=(?:"[^"]*"|'[^']*'|\{[^}]*\})/, `alt=${quoted}`)
    : `${attrs} alt=${quoted}`;
  if (value === '' && !/aria-hidden=/.test(out)) out = `${out.replace(/\s+$/, '')} aria-hidden="true"`;
  return out;
}

let total = 0;
for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  const headEnd = Math.max(0, source.indexOf('</Head>'));
  const changes = [];
  let imgCount = 0;

  const result = source.replace(TAG, (whole, tag, attrs, selfClose, index) => {
    // Commented-out JSX is left alone.
    const before = source.slice(0, index);
    if (before.lastIndexOf('{/*') > before.lastIndexOf('*/}')) return whole;
    // An arrow function's ">" cut the tag short; leave it alone.
    if ((attrs.match(/\{/g) || []).length !== (attrs.match(/\}/g) || []).length) return whole;

    const src = attr(attrs, 'src');
    const alt = attr(attrs, 'alt');
    const dynamicAlt = /\balt=\{(?!\s*["'`])/.test(attrs);
    let next = attrs;

    if (src && !dynamicAlt && !isMeaningfulAlt(alt)) {
      const className = attr(attrs, 'className') || '';
      const better = altFor({ src, alt, className, context: contextFor(source, index, index + whole.length) });
      if (better !== null && better !== alt) {
        next = setAlt(next, better);
        changes.push(`${src}: ${JSON.stringify(alt)} -> ${JSON.stringify(better)}`);
      }
    }

    if (index > headEnd) imgCount += 1;
    if (LAZY && tag === 'img' && index > headEnd && imgCount > 2 && !/\bloading=/.test(next)) {
      next += ' loading="lazy" decoding="async"';
    }

    return next === attrs ? whole : `<${tag}${next.replace(/\s+$/, '')}${selfClose ? ' /' : ''}>`;
  });

  if (result !== source) {
    total += changes.length;
    console.log(`${file}: ${changes.length} alt fixes`);
    if (DRY && process.env.ALL) changes.forEach((c) => console.log(`   ${c}`)); else if (DRY) changes.slice(0, 4).forEach((c) => console.log(`   ${c}`));
    else fs.writeFileSync(file, result);
  }
}
console.log(`${DRY ? 'Would fix' : 'Fixed'} ${total} alts`);
