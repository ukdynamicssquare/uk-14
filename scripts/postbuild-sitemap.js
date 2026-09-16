/**
 * postbuild entry point (see package.json "postbuild").
 *
 * next-sitemap regenerates public/sitemap*.xml from live data (page routes +
 * the blog API — see next-sitemap.config.js). If the blog API is having a
 * bad moment during a Vercel build, we must NOT let that overwrite the
 * previously committed sitemap with an empty or partial one — a sitemap
 * that suddenly shrinks tells Google half the site vanished.
 *
 * So: back up the existing sitemap files, run next-sitemap, and only keep
 * the new output if it succeeded AND looks like a real, complete sitemap.
 * Otherwise restore the backup. This script always exits 0 — a sitemap
 * problem should never fail the whole Vercel build (the blog/page data
 * itself already fails the build earlier, in `next build`, if the API is
 * down — see pages/blog/index.js and pages/blog/[slug].js).
 */
const { execFileSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const MIN_EXPECTED_URLS = 50; // this site has 270+ static routes alone

function findSitemapFiles() {
  if (!fs.existsSync(PUBLIC_DIR)) return [];
  return fs
    .readdirSync(PUBLIC_DIR)
    .filter((name) => /^sitemap.*\.xml$/i.test(name))
    .map((name) => path.join(PUBLIC_DIR, name));
}

function backup(files) {
  const snapshot = new Map();
  for (const file of files) {
    snapshot.set(file, fs.readFileSync(file));
  }
  return snapshot;
}

function restore(snapshot, newFiles) {
  // Remove anything the failed/suspicious run wrote that wasn't there before.
  for (const file of newFiles) {
    if (!snapshot.has(file)) {
      fs.rmSync(file, { force: true });
    }
  }
  for (const [file, content] of snapshot) {
    fs.writeFileSync(file, content);
  }
}

function countUrls(files) {
  let total = 0;
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const content = fs.readFileSync(file, 'utf8');
    total += (content.match(/<loc>/g) || []).length;
  }
  return total;
}

function main() {
  const before = findSitemapFiles();
  const snapshot = backup(before);

  let generationFailed = false;

  try {
    execFileSync(
      process.execPath, // node — invoked directly so this works the same on Windows and Linux/Vercel
      [
        path.join(__dirname, '..', 'node_modules', 'next-sitemap', 'bin', 'next-sitemap.mjs'),
        '--config',
        'next-sitemap.config.js',
      ],
      { stdio: 'inherit', cwd: path.join(__dirname, '..') }
    );
  } catch (error) {
    generationFailed = true;
    console.error('\n[postbuild-sitemap] next-sitemap run failed:', error.message);
  }

  const after = findSitemapFiles();
  const urlCount = generationFailed ? 0 : countUrls(after);

  if (generationFailed || urlCount < MIN_EXPECTED_URLS) {
    console.warn(
      `[postbuild-sitemap] ${
        generationFailed
          ? 'Sitemap generation failed'
          : `New sitemap only has ${urlCount} URL(s), expected at least ${MIN_EXPECTED_URLS}`
      } — most likely the blog API was unreachable during this build. ` +
        (snapshot.size > 0
          ? 'Keeping the previously committed sitemap instead of publishing an empty/partial one.'
          : 'No previous sitemap existed to restore — skipping sitemap for this build.')
    );
    restore(snapshot, after);
    process.exitCode = 0;
    return;
  }

  console.log(`[postbuild-sitemap] Sitemap regenerated successfully with ${urlCount} URL(s).`);
}

main();
