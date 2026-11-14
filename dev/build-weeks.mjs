// Builds the Icon of the week share pages from data/featured.js:
//
//   week/<monday>/index.html   per-week page: its own title, description and 1200×630 preview
//                              image for WhatsApp, iMessage, X, Facebook…; people who open it
//                              are sent straight to that icon on the site.
//   week/<monday>/card.png     the preview image (rendered with headless Chrome)
//   week/index.html            stable "this week's icon" link: generic preview, then forwards
//                              to the current week's icon (worked out in the browser, UK time)
//   week/card.png              the generic preview image
//   week/manifest.json         what each card was rendered from, so unchanged cards are skipped
//
// Runs as part of `node dev/stamp-assets.mjs` (before every push), or on its own:
//   node dev/build-weeks.mjs            only (re)renders cards whose content changed
//   node dev/build-weeks.mjs --force    re-renders every card
// Pages are kept for every week ever scheduled, so old shared links keep their preview.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const SITE = "https://wtfisthisicon.com";
const NEON = "#ccff00";
const INK = "#0a0a0a";
const TEMPLATE = 1; // bump to re-render every card after changing the card design below

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const weekDir = path.join(root, "week");
const force = process.argv.includes("--force");

// ── Load the icons exactly as the site does (script order from index.html) ──
const sb = {};
sb.window = sb;
vm.createContext(sb);
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const [, src] of indexHtml.matchAll(/<script src="(data\/[^"?]+)/g)) {
  vm.runInContext(fs.readFileSync(path.join(root, src), "utf8"), sb, { filename: src });
}
const WTF = sb.WTF;
const byId = new Map(WTF.icons.map((i) => [i.id, i]));
const weeks = ((WTF.featured && WTF.featured.weeks) || []).filter((w) => byId.has(w.id));

// ── Helpers (kept in step with the Icon of the week code in assets/app.js) ──
const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
const DAY = 864e5;
function weekLabel(iso) {
  const a = new Date(iso + "T00:00:00Z"), b = new Date(a.getTime() + 6 * DAY);
  const end = b.getUTCDate() + " " + MONTHS[b.getUTCMonth()];
  return a.getUTCMonth() === b.getUTCMonth()
    ? a.getUTCDate() + "–" + end
    : a.getUTCDate() + " " + MONTHS[a.getUTCMonth()] + " – " + end;
}
const shortName = (icon) => icon.name.replace(/\s*\([^)]*\)\s*$/, "") || icon.name;
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hash = (obj) => crypto.createHash("sha1").update(JSON.stringify(obj)).digest("hex").slice(0, 8);

// ── The preview card (1200×630) ──
function cardHtml({ art, tag, label, title, hook }) {
  const size = title.length > 30 ? 52 : title.length > 18 ? 60 : 72;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #fff; color: ${INK};
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Helvetica, Arial, "Hiragino Sans", sans-serif;
  -webkit-font-smoothing: antialiased; }
.card { display: flex; height: 630px; }
.art { flex: none; width: 630px; height: 630px; background: ${NEON}; display: grid; place-items: center; color: ${INK}; }
.art svg { width: 330px; height: 330px; overflow: visible; }
.art svg text { font-family: inherit; font-weight: 700; fill: currentColor; stroke: none; text-anchor: middle; }
.art svg .knock { fill: ${NEON}; stroke: ${NEON}; }
.art .wtf { font-size: 190px; font-weight: 800; letter-spacing: -0.06em; line-height: 1; }
.body { flex: 1; min-width: 0; display: flex; flex-direction: column; padding: 64px 60px 54px 60px; }
.label { display: flex; align-items: center; gap: 16px; font-size: 22px; color: #8a8a8a; }
.tag { background: ${INK}; color: ${NEON}; font-weight: 600; font-size: 20px; padding: 9px 18px; border-radius: 999px; }
h1 { margin: 44px 0 0; font-size: ${size}px; line-height: 1; font-weight: 800; letter-spacing: -0.045em; }
.hook { margin: 28px 0 0; font-size: 29px; line-height: 1.32; font-weight: 500; letter-spacing: -0.01em; color: #262626;
  display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
.foot { margin-top: auto; display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.foot::before { content: ""; width: 18px; height: 18px; border-radius: 5px; background: ${NEON}; box-shadow: 0 0 0 1px rgba(0,0,0,.1); }
</style></head><body><div class="card">
<div class="art">${art}</div>
<div class="body">
  <div class="label"><span class="tag">${esc(tag)}</span>${label ? esc(label) : ""}</div>
  <h1>${esc(title)}</h1>
  <p class="hook">${esc(hook)}</p>
  <div class="foot">wtfisthisicon.com</div>
</div></div></body></html>`;
}
const iconArt = (icon) =>
  `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</svg>`;

// ── Headless Chrome, with a throwaway profile so it never touches your own browser ──
function findChrome() {
  const candidates = [
    process.env.CHROME,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p));
}
const chrome = findChrome();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-cards-"));
function render(html, outPng) {
  const file = path.join(tmp, "card.html");
  fs.writeFileSync(file, html);
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
    "--force-device-scale-factor=1", "--window-size=1200,630", `--user-data-dir=${path.join(tmp, "profile")}`,
    `--screenshot=${outPng}`, "file://" + file,
  ], { stdio: "ignore", timeout: 60000 });
  if (!fs.existsSync(outPng)) throw new Error("Chrome produced no image for " + outPng);
}

// ── Pages ──
function pageHtml({ title, ogTitle, description, url, image, imageAlt, script, fallbackHref, fallbackText }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<meta name="robots" content="noindex">
<meta name="theme-color" content="#ffffff">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WTF is this icon?">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
${image ? `<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(imageAlt)}">
<meta name="twitter:card" content="summary_large_image">` : `<meta name="twitter:card" content="summary">`}
<script>${script}</script>
<style>body { margin: 48px 24px; font: 17px/1.5 -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif; color: ${INK}; }</style>
</head>
<body>
<p><a href="${fallbackHref}">${esc(fallbackText)}</a></p>
</body>
</html>
`;
}

const manifestPath = path.join(weekDir, "manifest.json");
let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch {}
const next = {};
let rendered = 0, skipped = 0;

// Returns the card's version hash (used to bust caches in og:image), or "" if there's no image.
function card(key, spec, outPng) {
  const h = hash({ TEMPLATE, ...spec });
  const have = fs.existsSync(outPng);
  if (!force && have && manifest[key] === h) { next[key] = h; skipped++; return h; }
  if (!chrome) { // can't render: keep whatever image is already there
    if (have && manifest[key]) next[key] = manifest[key];
    return have ? manifest[key] || "" : "";
  }
  render(cardHtml(spec), outPng);
  next[key] = h;
  rendered++;
  return h;
}

fs.mkdirSync(weekDir, { recursive: true });

for (const w of weeks) {
  const icon = byId.get(w.id);
  const dir = path.join(weekDir, w.week);
  fs.mkdirSync(dir, { recursive: true });
  const title = shortName(icon);
  const h = card(w.week, { art: iconArt(icon), tag: "Icon of the week", label: weekLabel(w.week), title, hook: w.hook }, path.join(dir, "card.png"));
  const url = `${SITE}/week/${w.week}/`;
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml({
    title: `${title} — Icon of the week · WTF is this icon?`,
    ogTitle: `Icon of the week: ${title}`,
    description: w.hook,
    url,
    image: h ? `${url}card.png?v=${h}` : "",
    imageAlt: `${icon.name}: icon of the week for ${weekLabel(w.week)} on WTF is this icon?`,
    script: `location.replace("/#/icon/${icon.id}");`,
    fallbackHref: `/#/icon/${icon.id}`,
    fallbackText: `${title}: icon of the week on WTF is this icon?`,
  }));
}

// Stable /week/ link: generic preview, then forward to whatever is on this week (UK time).
const schedule = Object.fromEntries(weeks.map((w) => [w.week, w.id]));
const gh = card("_generic", {
  art: '<div class="wtf">WTF</div>', tag: "Icon of the week", label: "",
  title: "Icon of the week", hook: "One confusing symbol, decoded every Monday.",
}, path.join(weekDir, "card.png"));
fs.writeFileSync(path.join(weekDir, "index.html"), pageHtml({
  title: "Icon of the week · WTF is this icon?",
  ogTitle: "Icon of the week",
  description: "One confusing symbol, decoded every Monday.",
  url: `${SITE}/week/`,
  image: gh ? `${SITE}/week/card.png?v=${gh}` : "",
  imageAlt: "Icon of the week on WTF is this icon?",
  script: `(function () {
  var W = ${JSON.stringify(schedule)}, t;
  try {
    var m = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()).match(/(\\d{4})-(\\d{2})-(\\d{2})/);
    t = Date.UTC(+m[1], m[2] - 1, +m[3]);
  } catch (e) { var d = new Date(); t = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()); }
  t -= ((new Date(t).getUTCDay() + 6) % 7) * 864e5;
  var id = W[new Date(t).toISOString().slice(0, 10)];
  location.replace(id ? "/#/icon/" + id : "/");
})();`,
  fallbackHref: "/",
  fallbackText: "Icon of the week on WTF is this icon?",
}));

fs.writeFileSync(manifestPath, JSON.stringify(next, null, 2) + "\n");
fs.rmSync(tmp, { recursive: true, force: true });

if (!chrome) console.warn("build-weeks: Chrome not found (set CHROME=/path/to/chrome) — share pages written without new preview images");
console.log(`Icon of the week pages: ${weeks.length} weeks, ${rendered} card(s) rendered, ${skipped} unchanged`);
