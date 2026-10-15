/**
 * Maintains page-lastmod.json: "pages/foo.js" -> ISO date the file last changed.
 *
 * next-sitemap.config.js reads it for each page's <lastmod>. It has to be a
 * committed file because Vercel builds from a shallow clone, where the git
 * history for most pages simply isn't there.
 *
 *   node scripts/page-lastmod.js           rebuild the whole file from git history
 *   node scripts/page-lastmod.js --staged  stamp staged page files with "now"
 *                                          (run by .githooks/pre-commit)
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const MANIFEST = path.join(ROOT, 'page-lastmod.json');

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();
}

function readManifest() {
  try {
    return JSON.parse(fs.readFileSync(MANIFEST, 'utf8'));
  } catch {
    return {};
  }
}

function writeManifest(map) {
  const sorted = Object.fromEntries(Object.keys(map).sort().map((key) => [key, map[key]]));
  fs.writeFileSync(MANIFEST, `${JSON.stringify(sorted, null, 2)}\n`);
}

function rebuildFromHistory() {
  const map = {};
  const log = git(['log', '--format=__C__%cI', '--name-only', '--', 'pages']);
  let date = null;
  for (const line of log.split('\n')) {
    if (line.startsWith('__C__')) date = new Date(line.slice(5)).toISOString();
    else if (line && !(line in map) && fs.existsSync(path.join(ROOT, line))) map[line] = date; // newest-first
  }
  writeManifest(map);
  console.log(`[page-lastmod] Wrote ${Object.keys(map).length} page dates from git history.`);
}

function stampStaged() {
  const changes = git(['diff', '--cached', '--name-status', '--no-renames', '--', 'pages']);
  if (!changes) return;

  const map = readManifest();
  const now = new Date().toISOString();
  for (const line of changes.split('\n')) {
    const [status, file] = line.split('\t');
    if (status === 'D') delete map[file];
    else map[file] = now;
  }
  writeManifest(map);
  git(['add', 'page-lastmod.json']);
}

if (process.argv.includes('--staged')) stampStaged();
else rebuildFromHistory();
