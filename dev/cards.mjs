// Shared bits for the page and preview-card builders (build-share.mjs, build-pages.mjs):
// loading the icons exactly as the site does, text helpers, and the 1200×630 preview card.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const SITE = "https://wtfisthisicon.com";
export const NEON = "#ccff00";
export const INK = "#0a0a0a";
export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const ICON = fs.readFileSync(path.join(root, "assets", "icon.svg"), "utf8").replace(/<title>.*?<\/title>\s*/, "").trim();

// Load the icons exactly as the site does (script order from index.html)
export function loadWTF() {
  const sb = {};
  sb.window = sb;
  vm.createContext(sb);
  const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
  for (const [, src] of indexHtml.matchAll(/<script src="(data\/[^"?]+)/g)) {
    vm.runInContext(fs.readFileSync(path.join(root, src), "utf8"), sb, { filename: src });
  }
  vm.runInContext(fs.readFileSync(path.join(root, "assets", "quiz-tiers.js"), "utf8"), sb, { filename: "quiz-tiers.js" });
  return sb.WTF;
}

export const shortName = (icon) => icon.name.replace(/\s*\([^)]*\)\s*$/, "") || icon.name;
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Whole sentences from the start of t, as many as fit in budget (always at least one).
export function sentences(t, budget) {
  const all = String(t).match(/[^.!?]+[.!?]+(?=\s|$)/g) || [String(t)];
  let out = "";
  for (const x of all) {
    const next = (out + " " + x.trim()).trim();
    if (out && next.length > budget) break;
    out = next;
  }
  return out;
}

export const iconArt = (icon) =>
  `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round">${icon.svg}</svg>`;

// The preview card (1200×630): neon art panel on the left, title and hook on the right.
export function cardHtml({ art, tag, label, title, hook }) {
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
.foot svg { width: 30px; height: 30px; flex: none; }
</style></head><body><div class="card">
<div class="art">${art}</div>
<div class="body">
  <div class="label"><span class="tag">${esc(tag)}</span>${label ? esc(label) : ""}</div>
  <h1>${esc(title)}</h1>
  <p class="hook">${esc(hook)}</p>
  <div class="foot">${ICON}wtfisthisicon.com</div>
</div></div></body></html>`;
}

// Headless Chrome, with a throwaway profile so it never touches your own browser
export function findChrome() {
  const candidates = [
    process.env.CHROME,
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
  ].filter(Boolean);
  return candidates.find((p) => fs.existsSync(p));
}
export const CHROME_ARGS = [
  "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
  "--force-device-scale-factor=1", "--window-size=1200,630",
];
