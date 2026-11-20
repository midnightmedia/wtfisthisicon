// Builds a real, indexable page for every icon and every category, so search engines can find
// them and every shared link gets its own preview:
//
//   <category>/index.html          every symbol in a category, e.g. /car/
//   <category>/<slug>/index.html   one symbol, e.g. /car/check-engine/ (the icon id minus its category)
//   <category>/<slug>/card.png     its 1200×630 link preview (rendered with headless Chrome)
//   <category>/<slug>/<slug>.png   the symbol on its own (512px, transparent), shown on its page so
//                                  Google Images and Lens can find it
//   sitemap.xml                    home, categories and icons, with their images and last-changed dates
//   index.html                     the category links in the footer (between the <!-- cats --> markers)
//
// The site itself still opens icons in its pop-up; these pages are what Google indexes, what
// "Copy link" shares, and where a card opened in a new tab lands. Folders for icons that no
// longer exist are removed. Card versions live in dev/page-cards.json and symbol image versions in
// dev/page-images.json, so unchanged ones are skipped. dev/page-dates.json remembers when each page's
// content last changed, for the sitemap's <lastmod>.
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
import { searchTitle } from "./search-titles.mjs";

const TEMPLATE = 1; // bump to re-render every icon card
const IMG_TEMPLATE = 1; // bump to re-render every symbol image
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
  airfryer: "Air fryer symbols",
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
const V = { css: ver("assets/styles.css"), icon: ver("assets/icon.svg"), icon96: ver("assets/icon-96.png"), config: ver("assets/config.js"), stats: ver("assets/stats.js"), install: ver("assets/install.js") };
const indexPath = path.join(root, "index.html");
const siteCard = (fs.readFileSync(indexPath, "utf8").match(/<meta property="og:image" content="([^"]+)"/) || [])[1] || `${SITE}/assets/og-card.png`;

// The symbol as a standalone image: the drawing at 512px on a transparent background, in the light
// theme's colour (pages turn uncoloured ones white in dark mode with a CSS invert). It's drawn black on
// white first and an SVG filter turns that into alpha, so knock-outs become real holes. IMG_PAD units
// of margin keep strokes at the edge of the 64-unit frame from being clipped; the page's CSS scales the
// image up by the same amount (.ico--img) so it lines up exactly with the inline SVG it replaces.
const IMG_SIZE = 512;
const IMG_PAD = 4;
const INK = { "": "#0a0a0a", red: "#ff3b30", amber: "#ff9f0a", green: "#00c853", blue: "#2962ff" };
const imgName = (icon) => `${slugOf(icon)}.png`;
function glyphHtml(icon) {
  const [r, g, b] = [1, 3, 5].map((k) => (parseInt((INK[icon.color || ""] || INK[""]).slice(k, k + 2), 16) / 255).toFixed(4));
  const lo = -IMG_PAD, span = 64 + 2 * IMG_PAD;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
html, body { margin: 0; background: transparent; } svg { display: block; }
.knock { fill: #fff; stroke: #fff; }
text { font-family: -apple-system, BlinkMacSystemFont, "Inter", "SF Pro Text", "Segoe UI", Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans", sans-serif; font-weight: 700; fill: currentColor; stroke: none; text-anchor: middle; }
</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="${IMG_SIZE}" height="${IMG_SIZE}" viewBox="${lo} ${lo} ${span} ${span}">
<filter id="ink" filterUnits="userSpaceOnUse" x="${lo}" y="${lo}" width="${span}" height="${span}" color-interpolation-filters="sRGB">
<feColorMatrix type="matrix" values="0 0 0 0 ${r}  0 0 0 0 ${g}  0 0 0 0 ${b}  -1 0 0 0 1"/>
</filter>
<g filter="url(#ink)"><rect x="${lo}" y="${lo}" width="${span}" height="${span}" fill="#fff"/>
<g color="#000" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</g></g>
</svg></body></html>`;
}
const IMG_ARGS = [
  ...CHROME_ARGS.filter((a) => !a.startsWith("--window-size")),
  `--window-size=${IMG_SIZE},${IMG_SIZE}`, "--default-background-color=00000000",
];

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
  if (window.WTF && WTF.stats) WTF.stats.page(location.pathname);
})();`;

const HEADER = `<header class="top">
  <div class="wrap top__inner">
    <a class="logo" href="/"><mark>WTF</mark> is this icon?</a>
    <nav class="top__right" aria-label="Site">
      <a class="top__link" href="/#/quiz">Quiz</a>
      <a class="top__link top__link--browse" href="/#browse">Browse</a>
      <button type="button" class="top__link" id="install-btn" hidden><span class="install-btn__long">Get the app</span><span class="install-btn__short">App</span></button>
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
    <span>Made by <a href="https://midnightmedia.io" target="_blank" rel="noopener"><strong>Midnight Media</strong></a></span>
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
<link rel="icon" href="/assets/icon-96.png?v=${V.icon96}" type="image/png" sizes="96x96">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="WTF icon">
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

<script src="/assets/config.js?v=${V.config}"></script>
<script src="/assets/stats.js?v=${V.stats}"></script>
<script src="/assets/install.js?v=${V.install}"></script>
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

function iconPage(icon, cardVersion, imgVersion) {
  const cat = catById[icon.category];
  const url = SITE + pathOf(icon);
  const phrase = searchTitle(icon);
  // The symbol image (falls back to the inline drawing if it hasn't been rendered)
  const art = imgVersion
    ? `<img class="ico ico--img${icon.color ? "" : " ico--ink"}" src="${pathOf(icon)}${imgName(icon)}?v=${imgVersion}" width="${IMG_SIZE}" height="${IMG_SIZE}" alt="${esc(phrase)}">`
    : WTF.svg(icon, icon.name);
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
      <div class="${tileClass(icon)}">${art}</div>
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
    title: `${phrase}: what it means · WTF is this icon?`,
    description: clip(icon.meaning, 155),
    url,
    ogTitle: `${phrase}: what it means`,
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
      <p class="section__blurb">${esc(cat.blurb)}${/[.?!]$/.test(cat.blurb) ? "" : "."} ${list.length} of them, decoded.</p>
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

// Preview cards and symbol images: only (re)render the ones whose content changed
const readJson = (f) => { try { return JSON.parse(fs.readFileSync(f, "utf8")); } catch { return {}; } };
const sha = (v) => crypto.createHash("sha1").update(typeof v === "string" ? v : JSON.stringify(v)).digest("hex").slice(0, 8);
const manifestPath = path.join(root, "dev", "page-cards.json");
const imgManifestPath = path.join(root, "dev", "page-images.json");
const manifest = readJson(manifestPath), imgManifest = readJson(imgManifestPath);
const nextManifest = {}, nextImgManifest = {};
const chrome = findChrome();
const jobs = [], imgJobs = [];
for (const icon of ICONS) {
  const spec = {
    art: iconArt(icon),
    tag: catById[icon.category].name,
    label: icon.urgency ? URGENCY[icon.urgency].label : "",
    title: shortName(icon),
    hook: sentences(icon.meaning, 130),
  };
  const h = sha({ TEMPLATE, ICON, ...spec });
  const out = path.join(root, icon.category, slugOf(icon), "card.png");
  if (!force && fs.existsSync(out) && manifest[icon.id] === h) nextManifest[icon.id] = h;
  else if (!chrome) { if (fs.existsSync(out) && manifest[icon.id]) nextManifest[icon.id] = manifest[icon.id]; }
  else jobs.push({ id: icon.id, html: cardHtml(spec), out, h, args: CHROME_ARGS, done: nextManifest });

  const glyph = glyphHtml(icon);
  const ih = sha({ IMG_TEMPLATE, glyph });
  const iout = path.join(root, icon.category, slugOf(icon), imgName(icon));
  if (!force && fs.existsSync(iout) && imgManifest[icon.id] === ih) nextImgManifest[icon.id] = ih;
  else if (!chrome) { if (fs.existsSync(iout) && imgManifest[icon.id]) nextImgManifest[icon.id] = imgManifest[icon.id]; }
  else imgJobs.push({ id: icon.id, html: glyph, out: iout, h: ih, args: IMG_ARGS, done: nextImgManifest });
}

const run = promisify(execFile);
async function renderAll(list, what) {
  if (!list.length) return;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-pages-"));
  let next = 0, done = 0;
  const workers = Math.min(6, list.length);
  await Promise.all(Array.from({ length: workers }, async (_, w) => {
    const dir = path.join(tmp, "w" + w);
    fs.mkdirSync(dir);
    const file = path.join(dir, "page.html");
    while (next < list.length) {
      const job = list[next++];
      fs.mkdirSync(path.dirname(job.out), { recursive: true });
      fs.rmSync(job.out, { force: true });
      fs.writeFileSync(file, job.html);
      await run(chrome, [...job.args, `--user-data-dir=${path.join(dir, "profile")}`, `--screenshot=${job.out}`, "file://" + file], { timeout: 60000 });
      if (!fs.existsSync(job.out)) throw new Error("Chrome produced no image for " + job.out);
      job.done[job.id] = job.h;
      if (++done % 50 === 0) console.log(`  ${done}/${list.length} ${what}`);
    }
  }));
  fs.rmSync(tmp, { recursive: true, force: true });
}
await renderAll(jobs, "icon cards");
await renderAll(imgJobs, "symbol images");

// When each page's content last changed, for the sitemap. A page's date moves on only when what it
// says or shows changes (not when CSS or script versions do).
const datesPath = path.join(root, "dev", "page-dates.json");
const oldDates = readJson(datesPath), dates = {};
const today = new Date().toISOString().slice(0, 10);
const dated = (url, content) => {
  const h = sha(content);
  dates[url] = oldDates[url] && oldDates[url][0] === h ? oldDates[url] : [h, today];
  return dates[url][1];
};
const iconContent = (i) => ({ name: i.name, phrase: searchTitle(i), aka: i.aka, meaning: i.meaning, action: i.action, tip: i.tip, looksLike: i.looksLike, svg: i.svg, color: i.color, urgency: i.urgency, cat: catById[i.category].name });

// Pages
const entries = [];
for (const cat of CATS) {
  const list = byCat[cat.id];
  const dir = path.join(root, cat.id);
  if (!list.length) continue;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), catPage(cat));
  entries.push({ loc: `${SITE}/${cat.id}/`, lastmod: dated(`/${cat.id}/`, { title: catTitle(cat), blurb: cat.blurb, icons: list.map((i) => [pathOf(i), i.name, firstSentence(i.meaning), i.svg, i.urgency, i.color]) }) });
  const keep = new Set(list.map(slugOf));
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ent.isDirectory() && !keep.has(ent.name)) fs.rmSync(path.join(dir, ent.name), { recursive: true, force: true });
  }
  for (const icon of list) {
    const idir = path.join(dir, slugOf(icon));
    fs.mkdirSync(idir, { recursive: true });
    const iv = nextImgManifest[icon.id] || "";
    fs.writeFileSync(path.join(idir, "index.html"), iconPage(icon, nextManifest[icon.id] || "", iv));
    entries.push({
      loc: SITE + pathOf(icon),
      lastmod: dated(pathOf(icon), iconContent(icon)),
      image: iv ? `${SITE}${pathOf(icon)}${imgName(icon)}?v=${iv}` : "",
      order: icon._order,
    });
  }
}
// Category pages first, then icons in data order (as before); the home page changes whenever anything does
const catEntries = entries.filter((e) => e.order === undefined);
const iconEntries = entries.filter((e) => e.order !== undefined).sort((a, b) => a.order - b.order);
const all = [...catEntries, ...iconEntries];
const home = { loc: `${SITE}/`, lastmod: all.reduce((m, e) => (e.lastmod > m ? e.lastmod : m), "") };
const urls = [home, ...all];

// Sitemap
const xmlEsc = (s) => s.replace(/&/g, "&amp;");
fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.map((u) => `  <url><loc>${u.loc}</loc><lastmod>${u.lastmod}</lastmod>${u.image ? `<image:image><image:loc>${xmlEsc(u.image)}</image:loc></image:image>` : ""}</url>`).join("\n")}
</urlset>
`);
fs.writeFileSync(datesPath, JSON.stringify(Object.fromEntries(Object.keys(dates).sort().map((k) => [k, dates[k]])), null, 2) + "\n");

// Category links in the home page footer
const html = fs.readFileSync(indexPath, "utf8");
const re = /<!-- cats -->[\s\S]*?<!-- \/cats -->/;
if (re.test(html)) fs.writeFileSync(indexPath, html.replace(re, `<!-- cats -->\n  ${footCats()}\n  <!-- /cats -->`));
else console.warn("build-pages: no <!-- cats --> markers in index.html, so its footer category links weren't updated");

// Saved in icon order, so rebuilds don't reshuffle the files (images finish rendering in any order)
const ordered = (m) => Object.fromEntries(ICONS.filter((i) => m[i.id]).map((i) => [i.id, m[i.id]]));
fs.writeFileSync(manifestPath, JSON.stringify(ordered(nextManifest), null, 2) + "\n");
fs.writeFileSync(imgManifestPath, JSON.stringify(ordered(nextImgManifest), null, 2) + "\n");
if (!chrome) console.warn("build-pages: Chrome not found (set CHROME=/path/to/chrome), so new icons have no preview card or symbol image yet");
console.log(`Icon pages: ${ICONS.length} icons in ${CATS.filter((c) => byCat[c.id].length).length} categories, ${jobs.length} card(s) and ${imgJobs.length} symbol image(s) rendered, sitemap has ${urls.length} URLs`);
