// Story generator: 1080×1920 Instagram / TikTok stories in the site's look.
//
//   node dev/build-story.mjs            every set in social/stories.json
//   node dev/build-story.mjs quiz-oven  just the named set(s)
//
// Each set writes social/stories/<NN-key>/ (git-ignored): 1.png (and 2.png for a reveal) plus
// sticker.txt saying which native sticker to add in the app (poll, slider, quiz, question, link,
// countdown) and what to type in it. The frames leave an empty band for that sticker; nothing is
// faked, so the stickers stay interactive. Also writes social/stories/GUIDE.txt with every set in order.
//
// Set types: poll, slider, quiz, ask, daily, countdown, week. Text comes from the site's data.
// Keeps clear of the top 250px (profile row) and bottom 250px (reply bar). Rendered with headless Chrome.
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const NEON = "#ccff00", INK = "#0a0a0a", HOT = "#ff2e63";
const LIT = { red: "#ff453a", amber: "#ffb020", green: "#30d158", blue: "#4a8bff", white: "#ffffff" };
const W = 1080, H = 1920;

// Icons, loaded exactly as the site does
const sb = {}; sb.window = sb; vm.createContext(sb);
const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
for (const [, src] of indexHtml.matchAll(/<script src="(data\/[^"?]+)/g)) vm.runInContext(fs.readFileSync(path.join(root, src), "utf8"), sb);
const WTF = sb.WTF;
const byId = new Map(WTF.icons.map((i) => [i.id, i]));
const SITE_ICON = fs.readFileSync(path.join(root, "assets", "icon.svg"), "utf8").replace(/<title>.*?<\/title>\s*/, "");
const config = JSON.parse(fs.readFileSync(path.join(root, "social", "stories.json"), "utf8"));

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const label = (i) => i.quiz || i.name.replace(/\s*\([^)]*\)\s*$/, "") || i.name;
const firstSentence = (t) => (String(t).match(/^.+?[.!?](?=\s|$)/) || [String(t)])[0];
// Whole sentences up to a length budget (urgent advice gets the full instruction, never a cut-down one)
function sentences(t, budget) {
  const all = String(t).match(/[^.!?]+[.!?]+(?=\s|$)/g) || [String(t)];
  let out = "";
  for (const x of all) { const next = (out + " " + x.trim()).trim(); if (out && next.length > budget) break; out = next; }
  return out;
}
const svg = (icon, color, size, knock) =>
  `<svg viewBox="0 0 64 64" width="${size}" height="${size}" fill="none" stroke="${color}" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" style="color:${color};overflow:visible">` +
  `<style>.knock{fill:${knock};stroke:${knock}}</style>${icon.svg}</svg>`;
const URGENCY = { stop: ["Deal with it now", HOT], soon: ["Sort it soon", "#ffb800"], info: ["Relax, it's fine", "#00c853"] };
const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
const weekLabel = (iso) => {
  const a = new Date(iso + "T00:00:00Z"), b = new Date(a.getTime() + 6 * 864e5);
  const end = b.getUTCDate() + " " + MONTHS[b.getUTCMonth()];
  return a.getUTCMonth() === b.getUTCMonth() ? a.getUTCDate() + "–" + end : a.getUTCDate() + " " + MONTHS[a.getUTCMonth()] + " – " + end;
};

// Frame shell: background, brand line at the top, an optional empty band for the sticker
function frame({ bg, fg, body, stickerTop }) {
  return `<!doctype html><meta charset="utf-8"><style>
*{box-sizing:border-box}
html,body{margin:0;width:${W}px;height:${H}px;overflow:hidden;background:${bg};color:${fg};
  font-family:-apple-system,BlinkMacSystemFont,"Inter","Helvetica Neue",Helvetica,Arial,"Hiragino Sans",sans-serif;-webkit-font-smoothing:antialiased}
svg text{font-family:inherit;font-weight:700;fill:currentColor;stroke:none;text-anchor:middle}
.brand{position:absolute;left:0;right:0;top:270px;text-align:center;font-size:36px;font-weight:800;letter-spacing:-0.035em}
.brand mark{padding:2px 12px 4px;border-radius:10px;margin-right:4px;background:${bg === NEON ? INK : NEON};color:${bg === NEON ? NEON : INK}}
.wrap{position:absolute;left:90px;right:90px;top:380px;${stickerTop ? `bottom:${H - stickerTop + 40}px;` : "bottom:300px;"}display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}
h1{margin:0;font-weight:800;letter-spacing:-0.05em;line-height:.98}
p{margin:0}
</style><body><div class="brand"><mark>WTF</mark> is this icon?</div><div class="wrap">${body}</div>`;
}

// Prompt + reveal for each kind of set
function pollFrames(set) {
  const icon = byId.get(set.icon);
  const prompt = frame({ bg: NEON, fg: INK, stickerTop: 1300, body:
    `${svg(icon, INK, 520, NEON)}<h1 style="font-size:132px;margin-top:70px">WTF is this?</h1>` });
  const reveal = revealFrame(icon, "It's the…");
  return { frames: [prompt, reveal], sticker:
    `Frame 1: add a POLL sticker in the empty space under "WTF is this?".\n  Question: (leave blank or "Be honest")\n  Options: "${set.options[0]}" / "${set.options[1]}"\n` +
    `Frame 2 (the answer, post it a few hours later): add a LINK sticker in the empty space at the bottom, linking to wtfisthisicon.com/#/icon/${icon.id}\n  Link text: "Full answer"` };
}

function sliderFrames(set) {
  const icon = byId.get(set.icon);
  const color = LIT[icon.color] || "#ffffff";
  const prompt = frame({ bg: INK, fg: "#fff", stickerTop: 1300, body:
    `<div style="width:520px;height:520px;border-radius:72px;background:#111318;display:grid;place-items:center;filter:drop-shadow(0 0 60px ${color}55)">${svg(icon, color, 360, "#111318")}</div>` +
    `<h1 style="font-size:112px;margin-top:80px">How much would you panic?</h1>` });
  const [verdict, dot] = URGENCY[icon.urgency || "info"];
  const reveal = frame({ bg: INK, fg: "#fff", stickerTop: 1440, body:
    `<div style="display:flex;align-items:center;gap:24px;padding:22px 44px;border-radius:999px;background:#1c1c1f;font-size:56px;font-weight:800;letter-spacing:-0.03em"><span style="width:34px;height:34px;border-radius:50%;background:${dot};box-shadow:0 0 0 10px ${dot}33"></span>${esc(verdict)}</div>` +
    `<h1 style="font-size:96px;margin-top:70px;color:${NEON}">${esc(label(icon))}</h1>` +
    `<p style="font-size:${icon.urgency === "stop" ? 42 : 46}px;line-height:1.3;font-weight:500;margin-top:40px">${esc(icon.urgency === "stop" ? icon.action : sentences(icon.action, 170))}</p>` });
  return { frames: [prompt, reveal], sticker:
    `Frame 1: add an EMOJI SLIDER sticker in the empty space under the question.\n  Question: "How much would you panic?"  Emoji: 😱\n` +
    `Frame 2 (the verdict): add a LINK sticker at the bottom, linking to wtfisthisicon.com/#/icon/${icon.id}\n  Link text: "What to do"` };
}

function quizFrames(set) {
  const icons = set.icons.map((id) => byId.get(id));
  const L = ["A", "B", "C", "D"];
  const grid = (highlight) => `<div style="display:grid;grid-template-columns:repeat(2,360px);gap:36px;margin-top:70px">` + icons.map((ic, k) => {
    const on = highlight === k, dim = highlight != null && !on;
    return `<div style="position:relative;width:360px;height:360px;border-radius:44px;background:${on ? NEON : "#fff"};display:grid;place-items:center;opacity:${dim ? 0.35 : 1};box-shadow:${on ? `0 0 0 10px ${NEON}` : "none"}">` +
      `<span style="position:absolute;left:24px;top:20px;font-size:40px;font-weight:800">${L[k]}</span>${svg(ic, INK, 220, on ? NEON : "#fff")}</div>`;
  }).join("") + `</div>`;
  const prompt = frame({ bg: NEON, fg: INK, stickerTop: 1440, body:
    `<h1 style="font-size:88px">${esc(set.question)}</h1>${grid(null)}` });
  const right = icons[set.answer];
  const reveal = frame({ bg: INK, fg: "#fff", stickerTop: 1500, body:
    `<h1 style="font-size:76px;color:${NEON}">${L[set.answer]}. ${esc(label(right))}</h1>${grid(set.answer)}` +
    `<p style="font-size:40px;line-height:1.3;font-weight:500;margin-top:50px">${esc(firstSentence(right.meaning))}</p>` });
  return { frames: [prompt, reveal], sticker:
    `Frame 1: add a QUIZ sticker in the empty space under the grid.\n  Question: "${set.question}"\n  Answers: A / B / C / D (mark ${L[set.answer]} as correct)\n` +
    `Frame 2 (the answer): add a LINK sticker at the bottom, linking to wtfisthisicon.com/#/icon/${right.id}` };
}

function revealFrame(icon, kicker) {
  const lit = LIT[icon.color];
  return frame({ bg: INK, fg: "#fff", stickerTop: 1440, body:
    `<div style="width:300px;height:300px;border-radius:52px;background:${lit ? "#111318" : NEON};display:grid;place-items:center">${svg(icon, lit || INK, 200, lit ? "#111318" : NEON)}</div>` +
    `<p style="font-size:44px;font-weight:600;color:#8a8a8a;margin-top:60px">${esc(kicker)}</p>` +
    `<h1 style="font-size:104px;margin-top:16px;color:${NEON}">${esc(label(icon))}</h1>` +
    `<p style="font-size:46px;line-height:1.3;font-weight:500;margin-top:44px">${esc(firstSentence(icon.meaning))}</p>` });
}

function askFrames() {
  return { frames: [frame({ bg: NEON, fg: INK, stickerTop: 1260, body:
    `<div style="width:300px;height:300px">${SITE_ICON.replace("<svg ", '<svg width="300" height="300" ')}</div>` +
    `<h1 style="font-size:112px;margin-top:70px">Seen a symbol that made you go WTF?</h1>` +
    `<p style="font-size:44px;line-height:1.3;font-weight:500;margin-top:40px">Send it in. We'll decode the best ones in tomorrow's stories.</p>` })],
    sticker: `Add a QUESTION sticker in the empty space at the bottom.\n  Prompt: "Describe it (or DM us a photo)"\nTomorrow: screenshot the best replies and answer them, or use the site's photo button to identify them.` };
}

function dailyFrames() {
  const bar = Array.from({ length: 10 }, (_, k) => `<span style="flex:1;height:26px;border-radius:7px;background:${k < 7 ? NEON : "#2a2a2e"}"></span>`).join("");
  return { frames: [frame({ bg: INK, fg: "#fff", stickerTop: 1320, body:
    `<h1 style="font-size:136px;color:${NEON}">Today's quiz is live.</h1>` +
    `<p style="font-size:52px;line-height:1.25;font-weight:600;margin-top:50px">Ten symbols. How many do you actually speak?</p>` +
    `<div style="display:flex;gap:12px;width:760px;margin-top:70px">${bar}</div>` +
    `<p style="font-size:38px;font-weight:500;color:#8a8a8a;margin-top:30px">Post your score. Tag someone who'd fail.</p>` })],
    sticker: `Add a LINK sticker in the empty space at the bottom, linking to wtfisthisicon.com/quiz/\n  Link text: "Play today's quiz"` };
}

function countdownFrames() {
  return { frames: [frame({ bg: NEON, fg: INK, stickerTop: 1300, body:
    `<div style="width:300px;height:300px">${SITE_ICON.replace("<svg ", '<svg width="300" height="300" ')}</div>` +
    `<h1 style="font-size:120px;margin-top:70px">New icon of the week drops Monday.</h1>` +
    `<p style="font-size:46px;font-weight:600;margin-top:40px">Bets on what it is? Wrong answers only.</p>` })],
    sticker: `Post on Sunday. Add a COUNTDOWN sticker in the empty space at the bottom.\n  Name: "Icon of the week"  Ends: Monday 08:00\nAdd a QUESTION sticker too if there's room: "Your guess?"` };
}

function weekFrames(set) {
  const pick = (WTF.featured && WTF.featured.weeks || []).find((w) => w.week === set.week);
  if (!pick) throw new Error(`nothing scheduled for the week of ${set.week} in data/featured.js`);
  const icon = byId.get(pick.id);
  return { frames: [frame({ bg: NEON, fg: INK, stickerTop: 1440, body:
    `<p style="display:inline-block;padding:12px 26px;border-radius:999px;background:${INK};color:${NEON};font-size:36px;font-weight:700">Icon of the week · ${weekLabel(set.week)}</p>` +
    `<div style="margin-top:60px">${svg(icon, INK, 460, NEON)}</div>` +
    `<h1 style="font-size:88px;margin-top:60px">${esc(pick.hook)}</h1>` })],
    sticker: `Post on Monday morning. Add a LINK sticker in the empty space at the bottom, linking to wtfisthisicon.com/week/${set.week}/\n  Link text: "What it means"` };
}

const BUILD = { poll: pollFrames, slider: sliderFrames, quiz: quizFrames, ask: askFrames, daily: dailyFrames, countdown: countdownFrames, week: weekFrames };

// Rendering
const chrome = [process.env.CHROME, "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium", "/usr/bin/google-chrome", "/usr/bin/chromium"]
  .filter(Boolean).find((p) => fs.existsSync(p));
if (!chrome) { console.error("build-story: Chrome not found (set CHROME=/path/to/chrome)"); process.exit(1); }
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-story-"));
function render(html, out) {
  const file = path.join(tmp, "frame.html");
  fs.writeFileSync(file, html);
  execFileSync(chrome, ["--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
    "--force-device-scale-factor=1", `--window-size=${W},${H}`, `--user-data-dir=${path.join(tmp, "profile")}`,
    `--screenshot=${out}`, "file://" + file], { stdio: "ignore", timeout: 60000 });
}

const only = process.argv.slice(2);
const outRoot = path.join(root, "social", "stories");
fs.mkdirSync(outRoot, { recursive: true });
let guide = "WTF is this icon? Stories\n\nPost them in this order, one or two a day. Each folder has the frames (1.png, then 2.png for the answer) and which sticker to add in the app.\n";
console.log("Building stories:");
config.sets.forEach((set, n) => {
  const num = String(n + 1).padStart(2, "0");
  const dir = path.join(outRoot, `${num}-${set.key}`);
  if (only.length && !only.includes(set.key)) return;
  const made = BUILD[set.type](set);
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(dir, { recursive: true });
  made.frames.forEach((html, k) => render(html, path.join(dir, `${k + 1}.png`)));
  fs.writeFileSync(path.join(dir, "sticker.txt"), made.sticker + "\n");
  guide += `\n${num} ${set.key} (${made.frames.length} frame${made.frames.length > 1 ? "s" : ""})\n${made.sticker}\n`;
  console.log(`  ✓ ${num}-${set.key}  (${made.frames.length} frame${made.frames.length > 1 ? "s" : ""})`);
});
if (!only.length) fs.writeFileSync(path.join(outRoot, "GUIDE.txt"), guide);
fs.rmSync(tmp, { recursive: true, force: true });
