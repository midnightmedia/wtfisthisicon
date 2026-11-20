// Builds the link previews (what WhatsApp, iMessage, X, Facebook, Slack… show for a link):
//
//   assets/og-card.png         the site's own 1200×630 preview; index.html's og:image points at it
//                              (any wtfisthisicon.com link, including #/icon/… ones, shows this)
//   quiz/index.html + card.png the general quiz link; forwards to #/quiz
//   quiz/<0-10>/               one page + card per score ("I scored 8/10…"), which is what
//                              "Share your score" links to; also forwards to #/quiz
//
// and the Icon of the week share pages from data/featured.js:
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
//   node dev/build-share.mjs            only (re)renders cards whose content changed
//   node dev/build-share.mjs --force    re-renders every card
// Pages are kept for every week ever scheduled, so old shared links keep their preview.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { SITE, NEON, INK, ICON, root, loadWTF, shortName, esc, iconArt, cardHtml, findChrome, CHROME_ARGS } from "./cards.mjs";

const TEMPLATE = 1; // bump to re-render every card after changing the card design (dev/cards.mjs)

const weekDir = path.join(root, "week");
const force = process.argv.includes("--force");

const WTF = loadWTF();
const byId = new Map(WTF.icons.map((i) => [i.id, i]));
const weeks = ((WTF.featured && WTF.featured.weeks) || []).filter((w) => byId.has(w.id));

// Helpers (kept in step with the Icon of the week code in assets/app.js)
const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
const DAY = 864e5;
function weekLabel(iso) {
  const a = new Date(iso + "T00:00:00Z"), b = new Date(a.getTime() + 6 * DAY);
  const end = b.getUTCDate() + " " + MONTHS[b.getUTCMonth()];
  return a.getUTCMonth() === b.getUTCMonth()
    ? a.getUTCDate() + "–" + end
    : a.getUTCDate() + " " + MONTHS[a.getUTCMonth()] + " – " + end;
}
const hash = (obj) => crypto.createHash("sha1").update(JSON.stringify(obj)).digest("hex").slice(0, 8);

// The site's own card: big headline on white, a neon wall of well-known symbols on the right.
function siteCardHtml({ icons, count }) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #fff; color: ${INK};
  font-family: -apple-system, BlinkMacSystemFont, "Inter", "Helvetica Neue", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased; }
.card { display: flex; height: 630px; }
.body { flex: 1; min-width: 0; display: flex; flex-direction: column; padding: 70px 56px 54px 72px; }
h1 { margin: 0; font-size: 116px; line-height: .92; font-weight: 800; letter-spacing: -0.055em; }
h1 mark { background: ${NEON}; color: ${INK}; padding: 0 .08em; margin: 0 -.02em; border-radius: .08em; }
.sub { margin: 36px 0 0; font-size: 30px; line-height: 1.3; font-weight: 500; letter-spacing: -0.01em; color: #262626; max-width: 15em; }
.foot { margin-top: auto; display: flex; align-items: center; gap: 12px; font-size: 22px; font-weight: 700; letter-spacing: -0.01em; }
.foot svg { width: 30px; height: 30px; flex: none; }
.foot span { font-weight: 500; color: #8a8a8a; }
.wall { flex: none; width: 470px; height: 630px; background: ${NEON}; display: grid; place-content: center;
  grid-template-columns: repeat(3, 100px); gap: 42px; color: ${INK}; }
.wall svg { width: 100px; height: 100px; overflow: visible; }
.wall svg text { font-family: inherit; font-weight: 700; fill: currentColor; stroke: none; text-anchor: middle; }
.wall svg .knock { fill: ${NEON}; stroke: ${NEON}; }
</style></head><body><div class="card">
<div class="body">
  <h1><mark>WTF</mark> is this&nbsp;icon?</h1>
  <p class="sub">Describe the symbol. Get a <span style="white-space: nowrap">plain-English</span> answer.</p>
  <div class="foot">${ICON}wtfisthisicon.com <span>· ${count} symbols decoded</span></div>
</div>
<div class="wall">${icons.map(iconArt).join("")}</div>
</div></body></html>`;
}

// Headless Chrome, with a throwaway profile so it never touches your own browser
const chrome = findChrome();
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-cards-"));
function render(html, outPng) {
  const file = path.join(tmp, "card.html");
  fs.writeFileSync(file, html);
  execFileSync(chrome, [
    ...CHROME_ARGS, `--user-data-dir=${path.join(tmp, "profile")}`,
    `--screenshot=${outPng}`, "file://" + file,
  ], { stdio: "ignore", timeout: 60000 });
  if (!fs.existsSync(outPng)) throw new Error("Chrome produced no image for " + outPng);
}

// Pages
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
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/assets/icon.svg" type="image/svg+xml">
<link rel="icon" href="/assets/icon-96.png" type="image/png" sizes="96x96">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
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
function card(key, spec, outPng, layout = cardHtml) {
  // Week cards change version via TEMPLATE; the site card re-renders whenever its layout code changes.
  const h = hash({ TEMPLATE, ICON, ...(layout === cardHtml ? {} : { layout: layout.toString() }), ...spec });
  const have = fs.existsSync(outPng);
  if (!force && have && manifest[key] === h) { next[key] = h; skipped++; return h; }
  if (!chrome) { // can't render: keep whatever image is already there
    if (have && manifest[key]) next[key] = manifest[key];
    return have ? manifest[key] || "" : "";
  }
  render(layout(spec), outPng);
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
    title: `${title} · Icon of the week · WTF is this icon?`,
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

// The quiz link (shared with daily scores): its own card, then forwards to #/quiz.
const quizArt = '<div style="display:grid;grid-template-columns:repeat(2,140px);gap:40px">' +
  ["oven-true-fan", "car-oil-pressure", "laundry-tumble-dry"].map((id) => byId.get(id)).filter(Boolean)
    .map((i) => iconArt(i).replace("<svg ", '<svg style="width:140px;height:140px" ')).join("") +
  '<div style="width:118px;height:118px;margin:11px;box-sizing:border-box;border:9px solid currentColor;border-radius:24px;display:grid;place-items:center;font-size:80px;font-weight:800;line-height:1">?</div></div>';
fs.mkdirSync(path.join(root, "quiz"), { recursive: true });
const qh = card("_quiz", {
  art: quizArt, tag: "Daily quiz", label: "",
  title: "Do you speak symbol?", hook: "Ten confusing symbols a day. How many do you know?",
}, path.join(root, "quiz", "card.png"));
fs.writeFileSync(path.join(root, "quiz", "index.html"), pageHtml({
  title: "Daily quiz: do you speak symbol? · WTF is this icon?",
  ogTitle: "Do you speak symbol? The WTF is this icon? daily quiz",
  description: "Ten confusing symbols a day. How many do you know?",
  url: `${SITE}/quiz/`,
  image: qh ? `${SITE}/quiz/card.png?v=${qh}` : "",
  imageAlt: "The WTF is this icon? daily symbol quiz",
  script: 'location.replace("/#/quiz");',
  fallbackHref: "/#/quiz",
  fallbackText: "Play the daily symbol quiz on WTF is this icon?",
}));

// One page per possible score, so a shared result previews as "I scored 8/10".
const tierFor = (n) => WTF.quizTiers.find((t) => n >= t[0]) || WTF.quizTiers[WTF.quizTiers.length - 1];
for (let n = 0; n <= 10; n++) {
  const dir = path.join(root, "quiz", String(n));
  fs.mkdirSync(dir, { recursive: true });
  const tier = tierFor(n);
  const dare = n === 10 ? "Think you can match a perfect score?" : n === 0 ? "Surely you can beat that." : "Can you beat it?";
  const bar = Array.from({ length: 10 }, (_, k) =>
    `<span style="flex:1;height:22px;border-radius:6px;background:currentColor;opacity:${k < n ? 1 : 0.18}"></span>`).join("");
  const art = '<div style="width:400px">' +
    `<div style="font-size:250px;font-weight:800;letter-spacing:-0.07em;line-height:.8">${n}<span style="font-size:96px;letter-spacing:-0.04em;opacity:.55">/10</span></div>` +
    `<div style="display:flex;gap:9px;margin-top:44px">${bar}</div></div>`;
  const h = card(`_score${n}`, {
    art, tag: "Daily quiz", label: "", title: tier[1], hook: `I scored ${n}/10 on today's symbol quiz. ${dare}`,
  }, path.join(dir, "card.png"));
  const url = `${SITE}/quiz/${n}/`;
  fs.writeFileSync(path.join(dir, "index.html"), pageHtml({
    title: `I scored ${n}/10 · Daily quiz · WTF is this icon?`,
    ogTitle: `I scored ${n}/10 on the WTF is this icon? daily quiz`,
    description: `${tier[1]}. Ten confusing symbols a day. ${dare}`,
    url,
    image: h ? `${url}card.png?v=${h}` : "",
    imageAlt: `${n} out of 10 on the WTF is this icon? daily symbol quiz`,
    script: 'location.replace("/#/quiz");',
    fallbackHref: "/#/quiz",
    fallbackText: "Play the daily symbol quiz on WTF is this icon?",
  }));
}

// The site's own preview card, and its cache-busting version in index.html's og:image.
const WALL = ["car-check-engine", "car-oil-pressure", "car-tyre-pressure", "laundry-tumble-dry", "laundry-hand-wash",
  "oven-true-fan", "recycling-mobius-loop", "fridge-freezer-four-star", "toilet-rear-wash"];
const sh = card("_site", {
  icons: WALL.map((id) => byId.get(id)).filter(Boolean).map((i) => ({ svg: i.svg })),
  count: Math.floor(WTF.icons.length / 25) * 25 + "+",
}, path.join(root, "assets", "og-card.png"), siteCardHtml);
if (sh) {
  const re = /(<meta property="og:image" content="[^"?]+og-card\.png)(?:\?v=[^"]*)?(")/;
  const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
  if (re.test(html)) fs.writeFileSync(path.join(root, "index.html"), html.replace(re, `$1?v=${sh}$2`));
}

fs.writeFileSync(manifestPath, JSON.stringify(next, null, 2) + "\n");
fs.rmSync(tmp, { recursive: true, force: true });

if (!chrome) console.warn("build-share: Chrome not found (set CHROME=/path/to/chrome), so share pages were written without new preview images");
console.log(`Share previews: site, quiz and 11 score cards, Icon of the week pages: ${weeks.length} weeks, ${rendered} card(s) rendered, ${skipped} unchanged`);
