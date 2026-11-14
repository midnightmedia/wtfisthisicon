// Social media post generator: turns an icon into a ready-to-post carousel.
//
//   node dev/build-post.mjs car-check-engine        one post
//   node dev/build-post.mjs car-check-engine laundry-hand-wash …
//   node dev/build-post.mjs week                    this week's Icon of the week (uses its hook)
//   node dev/build-post.mjs hooks                   every icon with a hand-written hook
//   node dev/build-post.mjs list                    which icons have hand-written hooks
//
// Writes social/posts/<id>/ (git-ignored):
//   1-hook.png      the symbol on neon + a hook that doesn't give the answer away
//   2-means.png     "What it actually means"
//   3-todo.png      "What to do about it" (with the urgency badge)
//   4-record.png    "For the record" (only if the icon has a tip)
//   5-site.png      sign-off: the site and the daily quiz
//   caption.txt     ready-to-paste caption with hashtags
// 1080×1350 (4:5), Instagram's tallest carousel size. Text comes straight from the site's data.
// Hooks: social/hooks.json ({ "<id>": { "hook": "...", "caption": "...", "title": "..." } }); icons without one get an
// automatic hook built from how people describe the symbol. Rendered with headless Chrome.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NEON = "#ccff00", INK = "#0a0a0a", HOT = "#ff2e63";
const LIT = { red: "#ff453a", amber: "#ffb020", green: "#30d158", blue: "#4a8bff", white: "#ffffff" };
const W = 1080, H = 1350;

// Icons, loaded exactly as the site does
const sb = {}; sb.window = sb; vm.createContext(sb);
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const [, src] of indexHtml.matchAll(/<script src="(data\/[^"?]+)/g)) vm.runInContext(fs.readFileSync(path.join(root, src), "utf8"), sb);
const WTF = sb.WTF;
const byId = new Map(WTF.icons.map((i) => [i.id, i]));
const catName = Object.fromEntries(WTF.categories.map((c) => [c.id, c.name]));
const SITE_ICON = fs.readFileSync(path.join(root, "assets", "icon.svg"), "utf8").replace(/<title>.*?<\/title>\s*/, "");
let hooks = {};
try { hooks = JSON.parse(fs.readFileSync(path.join(root, "social", "hooks.json"), "utf8")); } catch { /* no hooks file yet */ }

// Where you'd find each kind of symbol, for automatic hooks and captions
const PLACE = {
  car: "dashboard", carcontrols: "car", ev: "dashboard", laundry: "clothes label", washer: "washing machine",
  dryer: "tumble dryer", oven: "oven", dishwasher: "dishwasher", fridge: "fridge", coffee: "coffee machine",
  aircon: "air con remote", heating: "boiler", toilet: "toilet", tech: "phone", keyboard: "keyboard",
  power: "charger", recycling: "packaging", packaging: "packaging", medicine: "medicine box",
};
const TAGS = {
  car: "#cardashboard #driving #carlife", carcontrols: "#driving #carlife", ev: "#electriccar #ev #driving",
  laundry: "#laundry #laundryday", washer: "#laundry #washingmachine", dryer: "#laundry #tumbledryer",
  oven: "#cooking #kitchen", dishwasher: "#kitchen #cleaning", fridge: "#kitchen #fridge", coffee: "#coffee #coffeemachine",
  aircon: "#aircon #homelife", heating: "#boiler #homelife", toilet: "#japan #travel", tech: "#iphone #android #tech",
  keyboard: "#keyboard #tech", power: "#tech #chargers", recycling: "#recycling #sustainability",
  packaging: "#packaging #lifehacks", medicine: "#health #firstaid",
};
const ASK = {
  car: "Be honest, how long has yours been on?", ev: "EV drivers, seen this one yet?", laundry: "Has a label ever ruined something of yours?",
  washer: "What's the most baffling button on yours?", oven: "Which setting do you use for everything?",
  toilet: "Abroad and baffled. Would you have known?", recycling: "Did you know this one?", keyboard: "Ever pressed it on purpose?",
};

// Small helpers
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const hashOf = (s) => [...s].reduce((h, c) => (h * 31 + c.charCodeAt(0)) >>> 0, 7);
const article = (w) => (/^[aeiou]/i.test(w) && !/^(one|uni|use)/i.test(w) ? "an " : "a ");
function autoHook(icon) {
  const look = (icon.looksLike && icon.looksLike[0]) || "weird symbol";
  const place = PLACE[icon.category] || "thing";
  const forms = [
    `There's ${article(look)}${look} on my ${place}. WTF?`,
    `My ${place} is showing me ${article(look)}${look}. Explain.`,
    `${look[0].toUpperCase() + look.slice(1)}. On my ${place}. Why.`,
    `Nobody knows what the ${look} on the ${place} means. Swipe.`,
  ];
  return forms[hashOf(icon.id) % forms.length];
}
const iconSvg = (icon, color, size) =>
  `<svg viewBox="0 0 64 64" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="color:${color};overflow:visible">${icon.svg}</svg>`;

// Slides
const BASE = `
*{box-sizing:border-box}
html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;font-family:-apple-system,BlinkMacSystemFont,"Inter","Helvetica Neue",Helvetica,Arial,"Hiragino Sans",sans-serif;-webkit-font-smoothing:antialiased}
svg text{font-family:inherit;font-weight:700;fill:currentColor;stroke:none;text-anchor:middle}
.brand{font-size:40px;font-weight:800;letter-spacing:-0.035em}
.brand mark{padding:2px 12px 4px;border-radius:10px;margin-right:4px}
.foot{position:absolute;left:84px;right:84px;bottom:64px;display:flex;justify-content:space-between;align-items:center;font-size:30px;font-weight:700}
.site{display:flex;align-items:center;gap:14px}.site svg{width:44px;height:44px}
.pager{font-weight:600;opacity:.45}
`;
const FIT = `<script>
// Shrink text until it fits its box. data-fit="parent": the element is a block inside a bottom-aligned
// box, so compare its height with the box's (overflow there goes upwards and never scrolls).
document.querySelectorAll("[data-fit]").forEach(function (el) {
  var s = +el.dataset.max, min = +el.dataset.min, box = el.dataset.fit === "parent" ? el.parentElement : null;
  var over = function () { return box ? el.offsetHeight > box.clientHeight : el.scrollHeight > el.clientHeight + 1; };
  el.style.fontSize = s + "px";
  while (s > min && over()) { s -= 2; el.style.fontSize = s + "px"; }
});
</script>`;

function hookSlide(icon, hook, pages) {
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
body{background:${NEON};color:${INK}}
.brand{position:absolute;left:84px;top:84px}.brand mark{background:${INK};color:${NEON}}
.sym{position:absolute;left:0;right:0;top:170px;bottom:470px;display:grid;place-items:center}
.sym svg .knock{fill:${NEON};stroke:${NEON}}
.hook{position:absolute;left:84px;right:84px;top:880px;height:330px;font-weight:800;line-height:1.02;letter-spacing:-0.045em;overflow:hidden;display:flex;align-items:flex-end}
.foot{color:${INK}}
</style><body>
<div class="brand"><mark>WTF</mark> is this icon?</div>
<div class="sym">${iconSvg(icon, INK, 620)}</div>
<div class="hook"><span data-fit="parent" data-max="88" data-min="46" style="display:block">${esc(hook)}</span></div>
<div class="foot"><span class="pager">1/${pages}</span><span>Swipe for the answer &rarr;</span></div>
${FIT}`;
}

function infoSlide(icon, { kicker, title, badge, text, page, pages }) {
  const lit = icon.color && LIT[icon.color];
  const tileBg = lit ? "#111318" : NEON, tileFg = lit || INK;
  const badgeHtml = badge ? `<span class="badge badge--${badge.level}">${esc(badge.label)}</span>` : "";
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
body{background:#fff;color:${INK}}
.head{position:absolute;left:84px;right:84px;top:84px;display:flex;gap:36px;align-items:center}
.tile{flex:none;width:200px;height:200px;border-radius:36px;background:${tileBg};display:grid;place-items:center}
.tile svg .knock{fill:${tileBg};stroke:${tileBg}}
.kicker{margin:0 0 12px;font-size:28px;font-weight:600;color:#8a8a8a}
h1{margin:0;font-size:58px;line-height:1;font-weight:800;letter-spacing:-0.045em}
.badge{display:inline-flex;align-items:center;gap:12px;margin-top:16px;padding:10px 20px;border-radius:999px;font-size:26px;font-weight:700;background:#f2f2f2}
.badge::before{content:"";width:14px;height:14px;border-radius:50%}
.badge--stop::before{background:${HOT}}.badge--soon::before{background:#ffb800}.badge--info::before{background:#00c853}
.text{position:absolute;left:84px;right:84px;top:360px;bottom:170px;overflow:hidden;font-size:52px;line-height:1.3;font-weight:500;letter-spacing:-0.015em}
.foot{color:${INK}}
</style><body>
<div class="head"><div class="tile">${iconSvg(icon, tileFg, 120)}</div>
<div><p class="kicker">${esc(kicker)}</p><h1>${esc(title)}</h1>${badgeHtml}</div></div>
<div class="text" data-fit data-max="54" data-min="30">${esc(text)}</div>
<div class="foot"><span class="pager">${page}/${pages}</span><span class="site">${SITE_ICON}wtfisthisicon.com</span></div>
${FIT}`;
}

function siteSlide(page, pages) {
  return `<!doctype html><meta charset="utf-8"><style>${BASE}
body{background:${INK};color:#fff}
.wrap{position:absolute;left:84px;right:84px;top:200px}
.wrap svg{width:240px;height:240px}
h1{margin:70px 0 0;font-size:96px;line-height:.98;font-weight:800;letter-spacing:-0.05em;color:${NEON}}
p{margin:36px 0 0;font-size:44px;line-height:1.3;font-weight:500;letter-spacing:-0.01em}
p.small{margin-top:28px;font-size:34px;color:rgba(255,255,255,.6)}
.foot{color:#fff}
</style><body>
<div class="wrap">${SITE_ICON}
<h1>Got a WTF of your own?</h1>
<p>Describe it, or snap a photo, at wtfisthisicon.com. ${Math.floor(WTF.icons.length / 25) * 25}+ symbols, decoded.</p>
<p class="small">New daily quiz. Link in bio.</p></div>
<div class="foot"><span class="pager">${page}/${pages}</span><span>wtfisthisicon.com</span></div>`;
}

// Rendering
const chrome = [process.env.CHROME, "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium", "/usr/bin/google-chrome", "/usr/bin/chromium"]
  .filter(Boolean).find((p) => fs.existsSync(p));
if (!chrome) { console.error("build-post: Chrome not found (set CHROME=/path/to/chrome)"); process.exit(1); }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-post-"));
function render(html, out) {
  const file = path.join(tmp, "slide.html");
  fs.writeFileSync(file, html);
  execFileSync(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
    "--force-device-scale-factor=1", `--window-size=${W},${H}`, `--user-data-dir=${path.join(tmp, "profile")}`,
    `--screenshot=${out}`, "file://" + file], { stdio: "ignore", timeout: 60000 });
}

const URGENCY = { stop: "Deal with it now", soon: "Sort it soon", info: "Relax, it's fine" };
const shortName = (i) => i.name.replace(/\s*\([^)]*\)\s*$/, "") || i.name;

function build(id, hookOverride) {
  const icon = byId.get(id);
  if (!icon) { console.error(`  ✗ unknown icon "${id}"`); return false; }
  const h = hooks[id] || {};
  const hook = hookOverride || h.hook || autoHook(icon);
  const dir = path.join(root, "social", "posts", id);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  // Reveal-slide title: a hand-picked one from hooks.json, else what it MEANS (quiz label), else the name
  const title = h.title || icon.quiz || shortName(icon);
  const pages = icon.tip ? 5 : 4;
  const slides = [["1-hook", hookSlide(icon, hook, pages)]];
  let n = 2;
  slides.push(["2-means", infoSlide(icon, { kicker: "What it actually means", title, text: icon.meaning, page: n++, pages })]);
  slides.push(["3-todo", infoSlide(icon, { kicker: "What to do about it", title, text: icon.action, page: n++, pages,
    badge: icon.urgency ? { level: icon.urgency, label: URGENCY[icon.urgency] } : null })]);
  if (icon.tip) slides.push(["4-record", infoSlide(icon, { kicker: "For the record", title, text: icon.tip, page: n++, pages })]);
  slides.push([`${n}-site`, siteSlide(n, pages)]);
  for (const [name, html] of slides) render(html, path.join(dir, name + ".png"));
  const caption = [hook, "", h.caption || ASK[icon.category] || "Did you know this one?", "",
    "Swipe for what it means and what to do about it.", "",
    "Describe any symbol at wtfisthisicon.com (link in bio)", "",
    `#wtfisthisicon ${TAGS[icon.category] || ""}`.trim()].join("\n");
  fs.writeFileSync(path.join(dir, "caption.txt"), caption + "\n");
  console.log(`  ✓ ${id}  (${slides.length} slides${h.hook || hookOverride ? "" : ", automatic hook"})  →  social/posts/${id}/`);
  return true;
}

// Which posts to make
const args = process.argv.slice(2);
if (!args.length) {
  console.log("Usage: node dev/build-post.mjs <icon-id> [...] | week | hooks | list");
  process.exit(0);
}
if (args[0] === "list") {
  Object.keys(hooks).filter((k) => !k.startsWith("_")).forEach((k) => console.log(`${k}: ${hooks[k].hook}`));
  process.exit(0);
}
console.log("Building posts:");
if (args[0] === "week") {
  const m = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date()).match(/(\d+)-(\d+)-(\d+)/);
  let t = Date.UTC(+m[1], m[2] - 1, +m[3]); t -= ((new Date(t).getUTCDay() + 6) % 7) * 864e5;
  const key = new Date(t).toISOString().slice(0, 10);
  const pick = (WTF.featured && WTF.featured.weeks || []).find((w) => w.week === key);
  if (!pick) { console.error(`  ✗ nothing scheduled for the week of ${key} in data/featured.js`); process.exit(1); }
  build(pick.id, hooks[pick.id] && hooks[pick.id].hook ? null : pick.hook);
} else if (args[0] === "hooks") {
  Object.keys(hooks).filter((k) => !k.startsWith("_")).forEach((k) => build(k));
} else {
  args.forEach((id) => build(id));
}
fs.rmSync(tmp, { recursive: true, force: true });
