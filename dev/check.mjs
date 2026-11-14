// Validates every data/*.js file: schema, unique ids, SVG drawing rules.
// Usage: node dev/check.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const files = fs.readdirSync(dataDir).filter((f) => f.endsWith(".js") && f !== "_registry.js").sort();

const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(dataDir, "_registry.js"), "utf8"), sandbox, { filename: "_registry.js" });

const errors = [];
const warn = [];
const origin = new Map();
for (const f of files) {
  const before = sandbox.WTF.icons.length;
  try {
    vm.runInContext(fs.readFileSync(path.join(dataDir, f), "utf8"), sandbox, { filename: f });
  } catch (e) {
    errors.push(`${f}: failed to load: ${e.message}`);
    continue;
  }
  for (const icon of sandbox.WTF.icons.slice(before)) origin.set(icon, f);
}

const cats = new Set(sandbox.WTF.categories.map((c) => c.id));
const COLORS = new Set(["red", "amber", "green", "blue", "white"]);
const URGENCY = new Set(["stop", "soon", "info"]);
const ALLOWED = new Set(["path", "circle", "ellipse", "rect", "line", "polyline", "polygon", "text", "g"]);
const ids = new Set();

function checkSvg(svg, where) {
  const stack = [];
  const tagRe = /<(\/?)([a-zA-Z][\w-]*)([^>]*?)(\/?)>/g;
  let m;
  let last = 0;
  while ((m = tagRe.exec(svg))) {
    const between = svg.slice(last, m.index);
    if (/[<>]/.test(between)) errors.push(`${where}: stray < or > in svg`);
    last = tagRe.lastIndex;
    const [, closing, name, attrs, selfClose] = m;
    if (!ALLOWED.has(name)) errors.push(`${where}: element <${name}> not allowed`);
    if (closing) {
      const top = stack.pop();
      if (top !== name) errors.push(`${where}: </${name}> does not match <${top}>`);
      continue;
    }
    const attrRe = /\s+([a-zA-Z_:][\w:.-]*)\s*=\s*("[^"]*"|'[^']*')/g;
    const stripped = attrs.replace(attrRe, (_, a, v) => {
      if (a === "id") errors.push(`${where}: id attributes not allowed`);
      if (/^(fill|stroke|color|stop-color)$/.test(a)) {
        const val = v.slice(1, -1).trim();
        if (!/^(none|currentColor)$/.test(val)) errors.push(`${where}: ${a}="${val}": only currentColor/none allowed`);
      }
      if (a === "style") errors.push(`${where}: style attributes not allowed`);
      return "";
    });
    if (stripped.trim()) errors.push(`${where}: unparseable attributes "${stripped.trim()}" on <${name}>`);
    if (!selfClose) stack.push(name);
  }
  if (/[<>]/.test(svg.slice(last))) errors.push(`${where}: stray < or > in svg`);
  if (stack.length) errors.push(`${where}: unclosed <${stack.join(">, <")}>`);
}

for (const icon of sandbox.WTF.icons) {
  const where = `${origin.get(icon)} › ${icon.id || "(no id)"}`;
  for (const k of ["id", "name", "category", "meaning", "action", "svg"]) {
    if (typeof icon[k] !== "string" || !icon[k].trim()) errors.push(`${where}: missing "${k}"`);
  }
  if (icon.id) {
    if (ids.has(icon.id)) errors.push(`${where}: duplicate id`);
    ids.add(icon.id);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(icon.id)) errors.push(`${where}: id must be kebab-case`);
    if (icon.category && !icon.id.startsWith(icon.category + "-")) errors.push(`${where}: id must start with "${icon.category}-"`);
  }
  if (icon.category && !cats.has(icon.category)) errors.push(`${where}: unknown category "${icon.category}"`);
  if (icon.color && !COLORS.has(icon.color)) errors.push(`${where}: bad color "${icon.color}"`);
  if (icon.urgency && !URGENCY.has(icon.urgency)) errors.push(`${where}: bad urgency "${icon.urgency}"`);
  for (const k of ["aka", "looksLike"]) {
    if (icon[k] !== undefined && !Array.isArray(icon[k])) errors.push(`${where}: "${k}" must be an array`);
  }
  if (!icon.looksLike || icon.looksLike.length < 2) warn.push(`${where}: fewer than 2 looksLike phrases`);
  if (icon.quiz !== undefined) {
    if (typeof icon.quiz !== "string" || !icon.quiz.trim()) errors.push(`${where}: "quiz" must be a non-empty string`);
    else {
      if (icon.quiz.length > 48) warn.push(`${where}: quiz label is ${icon.quiz.length} chars (keep it under ~48)`);
      if (/—/.test(icon.quiz)) errors.push(`${where}: quiz label has an em dash`);
    }
  }
  const known = new Set(["id", "name", "quiz", "category", "color", "urgency", "aka", "looksLike", "meaning", "action", "tip", "svg"]);
  for (const k of Object.keys(icon)) if (!known.has(k)) errors.push(`${where}: unknown field "${k}"`);
  if (typeof icon.svg === "string") checkSvg(icon.svg, where);
}

// Icon of the week schedule (data/featured.js)
const featured = sandbox.WTF.featured;
if (featured) {
  const isMonday = (s) => /^\d{4}-\d{2}-\d{2}$/.test(s) && new Date(s + "T00:00:00Z").getUTCDay() === 1;
  if (featured.since && !isMonday(featured.since)) errors.push(`featured.js: "since" must be a Monday (YYYY-MM-DD)`);
  const weeks = new Set();
  for (const f of featured.weeks || []) {
    const where = `featured.js › ${f.week}`;
    if (!isMonday(f.week)) errors.push(`${where}: week must be a Monday (YYYY-MM-DD)`);
    if (weeks.has(f.week)) errors.push(`${where}: week listed twice`);
    weeks.add(f.week);
    if (!ids.has(f.id)) errors.push(`${where}: unknown icon id "${f.id}"`);
    if (typeof f.hook !== "string" || !f.hook.trim()) errors.push(`${where}: missing hook`);
    else if (f.hook.length > 90) warn.push(`${where}: hook is ${f.hook.length} chars (keep it under ~90)`);
  }
  // Share pages (week/<monday>/) are built by dev/build-share.mjs, which stamp-assets runs.
  const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  const stale = (featured.weeks || []).filter((f) => {
    let page = "";
    try { page = fs.readFileSync(path.join(root, "week", f.week, "index.html"), "utf8"); } catch {}
    return !page.includes(`og:description" content="${esc(f.hook)}"`) || !page.includes(`/#/icon/${f.id}"`);
  });
  if (stale.length) warn.push(`featured.js: share pages out of date for ${stale.map((f) => f.week).join(", ")}. Run node dev/stamp-assets.mjs`);
  const today = new Date().toISOString().slice(0, 10);
  const ahead = [...weeks].filter((w) => w >= today).length;
  console.log(`Icon of the week: ${weeks.size} weeks scheduled, ${ahead} still to come`);
}

// Icon pages (<category>/<slug>/) are built by dev/build-pages.mjs, which stamp-assets runs.
const noPage = sandbox.WTF.icons.filter((i) => i.id && i.category && i.id.startsWith(i.category + "-") &&
  !fs.existsSync(path.join(root, i.category, i.id.slice(i.category.length + 1), "index.html")));
if (noPage.length) warn.push(`${noPage.length} icon(s) have no page yet (e.g. ${noPage[0].id}). Run node dev/stamp-assets.mjs`);

const byCat = {};
for (const i of sandbox.WTF.icons) byCat[i.category] = (byCat[i.category] || 0) + 1;
console.log(`Loaded ${sandbox.WTF.icons.length} icons from ${files.length} files:`, byCat);
for (const w of warn) console.log("WARN ", w);
for (const e of errors) console.log("ERROR", e);
if (errors.length) {
  console.log(`\n${errors.length} error(s)`);
  process.exit(1);
}
console.log("All good ✓");
