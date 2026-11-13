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
    errors.push(`${f}: failed to load — ${e.message}`);
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
        if (!/^(none|currentColor)$/.test(val)) errors.push(`${where}: ${a}="${val}" — only currentColor/none allowed`);
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
  const known = new Set(["id", "name", "category", "color", "urgency", "aka", "looksLike", "meaning", "action", "tip", "svg"]);
  for (const k of Object.keys(icon)) if (!known.has(k)) errors.push(`${where}: unknown field "${k}"`);
  if (typeof icon.svg === "string") checkSvg(icon.svg, where);
}

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
