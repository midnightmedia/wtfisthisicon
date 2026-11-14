// Builds a real, indexable page for every icon and every category, so search engines can find
// them and every shared link gets its own preview:
//
//   <category>/index.html          every symbol in a category, e.g. /car/
//   <category>/<slug>/index.html   one symbol, e.g. /car/check-engine/ (the icon id minus its category)
//   <category>/<slug>/card.png     its 1200×630 link preview (rendered with headless Chrome)
//   sitemap.xml                    home, categories and icons, for search engines
//   index.html                     the category links in the footer (between the <!-- cats --> markers)
//
// The site itself still opens icons in its pop-up; these pages are what Google indexes, what
// "Copy link" shares, and where a card opened in a new tab lands. Folders for icons that no
// longer exist are removed. Card versions live in dev/page-cards.json, so unchanged cards are skipped.
//
// Runs as part of `node dev/stamp-assets.mjs` (before every push), or on its own:
//   node dev/build-pages.mjs            only renders cards whose content changed
//   node dev/build-pages.mjs --force    re-renders every card
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { SITE, ICON, root, loadWTF, shortName, esc, sentences, iconArt, cardHtml, findChrome, CHROME_ARGS } from "./cards.mjs";

const TEMPLATE = 1; // bump to re-render every icon card
const force = process.argv.includes("--force");
const WTF = loadWTF();
const ICONS = WTF.icons;
const CATS = WTF.categories;
const catById = Object.fromEntries(CATS.map((c) => [c.id, c]));
ICONS.forEach((icon, n) => { icon._order = n; });

// Folders at the site root that a category must never be called
const RESERVED = new Set(["assets", "data", "dev", "quiz", "week", "worker", "social", "icon"]);
for (const c of CATS) if (RESERVED.has(c.id)) throw new Error(`build-pages: category id "${c.id}" clashes with the /${c.id}/ folder`);

const slugOf = (icon) => icon.id.slice(icon.category.length + 1);
const pathOf = (icon) => `/${icon.category}/${slugOf(icon)}/`;

// How each category is titled on its own page (falls back to "<name> symbols")
const CAT_TITLES = {
  car: "Car dashboard warning lights",
  carcontrols: "Car button and switch symbols",
  ev: "Electric and hybrid car symbols",
  laundry: "Clothing care label symbols",
  washer: "Washing machine symbols",
  dryer: "Tumble dryer symbols",
  oven: "Oven, hob and microwave symbols",
  dishwasher: "Dishwasher symbols",
  fridge: "Fridge and freezer symbols",
  coffee: "Coffee machine symbols",
  aircon: "Air con and heat pump symbols",
  heating: "Boiler and heating symbols",
  toilet: "Japanese toilet buttons",
  tech: "Phone and gadget symbols",
  keyboard: "Keyboard symbols",
  power: "Charger and plug symbols",
  recycling: "Recycling symbols",
  packaging: "Packaging label symbols",
  medicine: "Medicine and medical symbols",
};
const catTitle = (c) => CAT_TITLES[c.id] || `${c.name} symbols`;
const lowerFirst = (s) => /^Japanese/.test(s) ? s : s.charAt(0).toLowerCase() + s.slice(1);

// Kept in step with assets/app.js
const URGENCY = {
  stop: { label: "Deal with it now", rank: 0 },
  soon: { label: "Sort it soon", rank: 1 },
  info: { label: "Relax, it's fine", rank: 2 },
};
const DASH_CATS = { car: true, ev: true };
const tileClass = (icon) => "tile tile--" + (catById[icon.category]?.tile || "panel") + (icon.color ? " is-" + icon.color : "");
const badge = (icon) => icon.urgency ? `<span class="badge badge--${icon.urgency}">${esc(URGENCY[icon.urgency].label)}</span>` : "";
const firstSentence = (s) => { const m = String(s).match(/^.*?[.!?](\s|$)/); return m ? m[0].trim() : s; };
const sortForCategory = (list) => list.slice().sort((a, b) => {
  const ra = a.urgency ? URGENCY[a.urgency].rank : 3, rb = b.urgency ? URGENCY[b.urgency].rank : 3;
  return (ra - rb) || (a._order - b._order);
});

// "Not to be confused with": icons sharing looksLike words (same scoring as lookalikes() in app.js)
const STOP = new Set("a an the with and or of in on at to my is it its this that what whats which does do mean means meaning icon icons symbol symbols sign thing like looks look looking some kind sort has have there one inside shaped shape shaped little small big weird funny help please".split(" "));
const norm = (str) => String(str || "").toLowerCase().replace(/!/g, " exclamation ").replace(/['’]s\b/g, "").replace(/[^a-z0-9]+/g, " ").trim();
function stem(w) {
  if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + "y";
  if (w.length > 4 && /(ss|x|z|ch|sh)es$/.test(w)) return w.slice(0, -2);
  if (w.length > 3 && /s$/.test(w) && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
  return w;
}
const tokens = (str) => norm(str).split(" ").filter(Boolean).map(stem).filter((w) => !STOP.has(w));
const LOOKS = new Map(ICONS.map((i) => [i, new Set(tokens((i.looksLike || []).join(" ")))]));
const GENERIC = new Set("line circle square dot arrow light box".split(" "));
function lookalikes(icon, limit) {
  const keys = [...LOOKS.get(icon)];
  if (!keys.length) return [];
  const scored = [];
  for (const other of ICONS) {
    if (other === icon) continue;
    const theirs = LOOKS.get(other);
    let shared = 0;
    for (const k of keys) if (theirs.has(k)) shared += GENERIC.has(k) ? 0.4 : 1;
    if (shared < 1) continue;
    const score = shared / Math.sqrt(keys.length * theirs.size) + (other.category !== icon.category ? 0.08 : 0);
    scored.push({ icon: other, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.icon);
}

// Text for search results: whole sentences, clipped at a word if one sentence is too long
function clip(t, max) {
  const s = sentences(t, max);
  return s.length <= max ? s : s.slice(0, max - 1).replace(/[\s,;:]+\S*$/, "") + "…";
}

// Fingerprints, same as dev/stamp-assets.mjs, so these pages never get stale CSS
const ver = (f) => crypto.createHash("sha1").update(fs.readFileSync(path.join(root, f))).digest("hex").slice(0, 8);
const V = { css: ver("assets/styles.css"), icon: ver("assets/icon.svg") };
const indexPath = path.join(root, "index.html");
const siteCard = (fs.readFileSync(indexPath, "utf8").match(/<meta property="og:image" content="([^"]+)"/) || [])[1] || `${SITE}/assets/og-card.png`;

// Page parts
const THEME_PICK = `(function () {
    var t;
    try { t = localStorage.getItem("wtf-theme"); } catch (e) {}
    if (t !== "light" && t !== "dark") t = window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", t);
  })();`;
const PAGE_JS = `(function () {
  var root = document.documentElement, btn = document.getElementById("theme-toggle"), meta = document.querySelector('meta[name="theme-color"]');
  function apply(t, fade) {
    if (fade) { root.classList.add("theme-fade"); setTimeout(function () { root.classList.remove("theme-fade"); }, 350); }
    root.setAttribute("data-theme", t);
    btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (meta) meta.setAttribute("content", t === "dark" ? "#0b0b0c" : "#ffffff");
  }
  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");
  btn.addEventListener("click", function () {
    var t = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem("wtf-theme", t); } catch (e) {}
    apply(t, true);
  });
  var f = document.getElementById("find");
  if (f) f.addEventListener("submit", function (e) {
    e.preventDefault();
    var q = f.q.value.trim();
    location.href = "/" + (q ? "#/?q=" + encodeURIComponent(q) : "");
  });
})();`;

const HEADER = `<header class="top">
  <div class="wrap top__inner">
    <a class="logo" href="/"><mark>WTF</mark> is this icon?</a>
    <nav class="top__right" aria-label="Site">
      <a class="top__link" href="/#/quiz">Quiz</a>
      <a class="top__link top__link--browse" href="/#browse">Browse</a>
      <button type="button" class="top__link theme-toggle" id="theme-toggle" aria-label="Switch to dark mode">
        <span class="theme-toggle__off">Lights off</span><span class="theme-toggle__on">Lights on</span>
      </button>
    </nav>
  </div>
</header>`;

const footCats = () => `<nav class="wrap foot__cats" aria-label="Symbols by category">
    ${CATS.filter((c) => ICONS.some((i) => i.category === c.id)).map((c) => `<a href="/${c.id}/">${esc(c.name)}</a>`).join("\n    ")}
  </nav>`;

const FOOTER = `<footer class="foot">
  <div class="wrap foot__inner">
    <span class="foot__brand">WTF is this icon?</span>
    <p class="foot__small">Symbols vary between manufacturers and countries, because of course they do. This is general guidance, not a substitute for your manual or a professional. If a red warning light comes on while driving, stop somewhere safe first.</p>
  </div>
  ${footCats()}
  <div class="wrap foot__credit">
    <span>&copy; 2026 WTF is this icon?</span>
    <span>Made by <strong>Midnight Media</strong></span>
  </div>
</footer>`;

const FIND = `<section class="section page__find" aria-labelledby="find-title">
    <h2 class="section__title page__h2" id="find-title">Not the one?</h2>
    <p class="section__blurb">Describe what you&rsquo;re looking at and we&rsquo;ll find it.</p>
    <form class="search" role="search" id="find" action="/">
      <label for="q" class="sr-only">Describe the icon</label>
      <svg class="search__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
      <input id="q" name="q" type="search" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="search" placeholder="Describe it&hellip;">
    </form>
  </section>`;

const ld = (obj) => JSON.stringify(obj).replace(/</g, "\\u003c");
const crumbsLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map(([name, url], n) => ({ "@type": "ListItem", position: n + 1, name, item: url })),
});

function shell({ title, description, url, ogTitle, image, imageAlt, jsonld, body }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${url}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="WTF is this icon?">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${esc(ogTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:image" content="${image}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#ffffff">
<link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48">
<link rel="icon" href="/assets/icon.svg?v=${V.icon}" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<script>
  ${THEME_PICK}
</script>
<link rel="stylesheet" href="/assets/styles.css?v=${V.css}">
<script type="application/ld+json">${ld(jsonld)}</script>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>

${HEADER}

${body}

${FOOTER}

<script>
${PAGE_JS}
</script>
</body>
</html>
`;
}

const mini = (i, showCat = true) =>
  `<a class="mini" href="${pathOf(i)}"><div class="${tileClass(i)}">${WTF.svg(i)}</div><span>${esc(i.name)}${showCat ? `<small>${esc(catById[i.category].name)}</small>` : ""}</span></a>`;

const byCat = Object.fromEntries(CATS.map((c) => [c.id, sortForCategory(ICONS.filter((i) => i.category === c.id))]));

function iconPage(icon, cardVersion) {
  const cat = catById[icon.category];
  const url = SITE + pathOf(icon);
  const catHref = `/${cat.id}/`;
  const similar = lookalikes(icon, 6);
  // A different handful of neighbours on each page, so every icon gets linked from somewhere
  const list = byCat[cat.id];
  const at = list.indexOf(icon);
  const more = [];
  for (let k = 1; k < list.length && more.length < 12; k++) {
    const i = list[(at + k) % list.length];
    if (!similar.includes(i)) more.push(i);
  }
  const lit = icon.color && (DASH_CATS[icon.category] || icon.category === "carcontrols")
    ? `<div class="detail__lit"><span class="lit is-${icon.color}">${WTF.svg(icon)}</span>How it looks lit up</div>` : "";
  const looks = icon.looksLike && icon.looksLike.length
    ? `<aside class="detail__side detail__side--extra">
      <h2>What normal people call it</h2>
      <div class="detail__looks">${icon.looksLike.map((l) => `<a href="/#/?q=${encodeURIComponent(l)}">${esc(l)}</a>`).join("")}</div>
    </aside>` : "";
  const colour = icon.color ? ` &middot; ${esc(icon.color.charAt(0).toUpperCase() + icon.color.slice(1))} light` : "";
  const body = `<main class="wrap page" id="main">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">All symbols</a><span aria-hidden="true">/</span><a href="${catHref}">${esc(cat.name)}</a></nav>
  <article class="detail__grid">
    <div class="detail__side detail__side--tile">
      <div class="${tileClass(icon)}">${WTF.svg(icon, icon.name)}</div>
      ${lit}
    </div>
    ${looks}
    <div class="detail__main">
      <p class="detail__cat"><a href="${catHref}">${esc(cat.name)}</a>${colour}</p>
      <h1 class="detail__title">${esc(icon.name)}</h1>
      ${icon.aka && icon.aka.length ? `<p class="detail__aka">Also called: ${esc(icon.aka.join(", "))}</p>` : ""}
      ${badge(icon)}
      <div class="detail__block"><h2>WTF it means</h2><p>${esc(icon.meaning)}</p></div>
      <div class="detail__block detail__block--todo${icon.urgency === "stop" ? " detail__block--stop" : ""}"><h2>What to do about it</h2><p>${esc(icon.action)}</p></div>
      ${icon.tip ? `<div class="detail__block detail__block--tip"><h2>For the record</h2><p>${esc(icon.tip)}</p></div>` : ""}
      ${similar.length ? `<div class="detail__similar"><h2>Not to be confused with</h2><div class="mini-grid">${similar.map((i) => mini(i)).join("")}</div></div>` : ""}
    </div>
  </article>

  ${more.length ? `<section class="section page__more" aria-labelledby="more-title">
    <div class="section__head">
      <h2 class="section__title page__h2" id="more-title">More ${esc(lowerFirst(catTitle(cat)))}</h2>
      <a class="section__more" href="${catHref}">See all ${list.length}</a>
    </div>
    <div class="mini-grid">${more.map((i) => mini(i, false)).join("")}</div>
  </section>` : ""}

  ${FIND}
</main>`;
  return shell({
    title: `${icon.name}: what it means and what to do · WTF is this icon?`,
    description: clip(icon.meaning, 155),
    url,
    ogTitle: `${icon.name}: what it means`,
    image: cardVersion ? `${url}card.png?v=${cardVersion}` : siteCard,
    imageAlt: `${icon.name}, explained on WTF is this icon?`,
    jsonld: crumbsLd([["WTF is this icon?", SITE + "/"], [cat.name, SITE + catHref], [icon.name, url]]),
    body,
  });
}

function catPage(cat) {
  const list = byCat[cat.id];
  const title = catTitle(cat);
  const url = `${SITE}/${cat.id}/`;
  const legend = DASH_CATS[cat.id] ? `<div class="legend" role="note">
    <span><i class="dot dot--red"></i><b>Red</b> = stop safely &amp; check now</span>
    <span><i class="dot dot--amber"></i><b>Amber</b> = get it checked soon</span>
    <span><i class="dot dot--green"></i><i class="dot dot--blue"></i><b>Green / blue</b> = a system is on, all fine</span>
  </div>` : "";
  const cards = list.map((i) => `<a class="card" href="${pathOf(i)}">
      <div class="${tileClass(i)}">${WTF.svg(i)}</div>
      <div class="card__body">
        <h2 class="card__name">${esc(i.name)}</h2>
        <p class="card__text">${esc(firstSentence(i.meaning))}</p>
        ${i.urgency ? `<div class="card__meta">${badge(i)}</div>` : ""}
      </div>
    </a>`).join("\n    ");
  const body = `<main class="wrap page" id="main">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="/">All symbols</a></nav>
  <div class="section__head page__head">
    <div>
      <h1 class="section__title">${esc(title)}</h1>
      <p class="section__blurb">${esc(cat.blurb)}. ${list.length} of them, decoded.</p>
    </div>
  </div>
  ${legend}
  <div class="grid">
    ${cards}
  </div>

  ${FIND}
</main>`;
  return shell({
    title: `${title} explained · WTF is this icon?`,
    description: `${list.length} ${lowerFirst(title)} decoded: what each one means and what to do about it.`,
    url,
    ogTitle: `${title}, decoded`,
    image: siteCard,
    imageAlt: "WTF is this icon? Describe the symbol, get a plain-English answer.",
    jsonld: crumbsLd([["WTF is this icon?", SITE + "/"], [cat.name, url]]),
    body,
  });
}

// Preview cards: only (re)render the ones whose content changed
const manifestPath = path.join(root, "dev", "page-cards.json");
let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")); } catch {}
const nextManifest = {};
const chrome = findChrome();
const jobs = [];
for (const icon of ICONS) {
  const spec = {
    art: iconArt(icon),
    tag: catById[icon.category].name,
    label: icon.urgency ? URGENCY[icon.urgency].label : "",
    title: shortName(icon),
    hook: sentences(icon.meaning, 130),
  };
  const h = crypto.createHash("sha1").update(JSON.stringify({ TEMPLATE, ICON, ...spec })).digest("hex").slice(0, 8);
  const out = path.join(root, icon.category, slugOf(icon), "card.png");
  if (!force && fs.existsSync(out) && manifest[icon.id] === h) { nextManifest[icon.id] = h; continue; }
  if (!chrome) { if (fs.existsSync(out) && manifest[icon.id]) nextManifest[icon.id] = manifest[icon.id]; continue; }
  jobs.push({ id: icon.id, html: cardHtml(spec), out, h });
}

const run = promisify(execFile);
async function renderAll(list) {
  if (!list.length) return;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-pages-"));
  let next = 0, done = 0;
  const workers = Math.min(6, list.length);
  await Promise.all(Array.from({ length: workers }, async (_, w) => {
    const dir = path.join(tmp, "w" + w);
    fs.mkdirSync(dir);
    const file = path.join(dir, "card.html");
    while (next < list.length) {
      const job = list[next++];
      fs.mkdirSync(path.dirname(job.out), { recursive: true });
      fs.rmSync(job.out, { force: true });
      fs.writeFileSync(file, job.html);
      await run(chrome, [...CHROME_ARGS, `--user-data-dir=${path.join(dir, "profile")}`, `--screenshot=${job.out}`, "file://" + file], { timeout: 60000 });
      if (!fs.existsSync(job.out)) throw new Error("Chrome produced no image for " + job.out);
      nextManifest[job.id] = job.h;
      if (++done % 50 === 0) console.log(`  ${done}/${list.length} icon cards`);
    }
  }));
  fs.rmSync(tmp, { recursive: true, force: true });
}
await renderAll(jobs);

// Pages
for (const cat of CATS) {
  const list = byCat[cat.id];
  const dir = path.join(root, cat.id);
  if (!list.length) continue;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), catPage(cat));
  const keep = new Set(list.map(slugOf));
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory() && !keep.has(ent.name)) fs.rmSync(path.join(dir, ent.name), { recursive: true, force: true });
  }
  for (const icon of list) {
    const idir = path.join(dir, slugOf(icon));
    fs.mkdirSync(idir, { recursive: true });
    fs.writeFileSync(path.join(idir, "index.html"), iconPage(icon, nextManifest[icon.id] || ""));
  }
}

// Sitemap
const urls = [`${SITE}/`, ...CATS.filter((c) => byCat[c.id].length).map((c) => `${SITE}/${c.id}/`), ...ICONS.map((i) => SITE + pathOf(i))];
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>
`);

// Category links in the home page footer
const html = fs.readFileSync(indexPath, "utf8");
const re = /<!-- cats -->[\s\S]*?<!-- \/cats -->/;
if (re.test(html)) fs.writeFileSync(indexPath, html.replace(re, `<!-- cats -->\n  ${footCats()}\n  <!-- /cats -->`));
else console.warn("build-pages: no <!-- cats --> markers in index.html, so its footer category links weren't updated");

// Saved in icon order, so rebuilds don't reshuffle the file (cards finish rendering in any order)
const ordered = Object.fromEntries(ICONS.filter((i) => nextManifest[i.id]).map((i) => [i.id, nextManifest[i.id]]));
fs.writeFileSync(manifestPath, JSON.stringify(ordered, null, 2) + "\n");
if (!chrome) console.warn("build-pages: Chrome not found (set CHROME=/path/to/chrome), so new icons have no preview card yet");
console.log(`Icon pages: ${ICONS.length} icons in ${CATS.filter((c) => byCat[c.id].length).length} categories, ${jobs.length} card(s) rendered, sitemap has ${urls.length} URLs`);
