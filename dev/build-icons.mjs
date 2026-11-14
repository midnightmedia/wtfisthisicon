// Builds every site icon from the one master drawing, assets/icon.svg:
//
//   favicon.ico                 16/32/48px, for browsers and anything that asks for /favicon.ico
//   apple-touch-icon.png        180px, iPhone/iPad home screen (square: iOS rounds the corners)
//   assets/icon-192.png         Android / installed-site icons
//   assets/icon-512.png
//   assets/icon-maskable-512.png  square version Android can crop to a circle or squircle
//   site.webmanifest            tells Android which icons to use
//
// Only needed when the icon changes:  node dev/build-icons.mjs
// (Renders with headless Chrome, like dev/build-share.mjs.)
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const master = fs.readFileSync(path.join(root, "assets", "icon.svg"), "utf8");
const square = master.replace('rx="14" fill="#ccff00"', 'fill="#ccff00"'); // full-bleed tile

const chrome = [
  process.env.CHROME,
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/Applications/Chromium.app/Contents/MacOS/Chromium",
  "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
].filter(Boolean).find((p) => fs.existsSync(p));
if (!chrome) { console.error("build-icons: Chrome not found (set CHROME=/path/to/chrome)"); process.exit(1); }

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "wtf-icons-"));
function png(svg, size) {
  const html = path.join(tmp, "icon.html"), out = path.join(tmp, `icon-${size}.png`);
  fs.writeFileSync(html, `<!doctype html><style>html,body{margin:0;background:transparent}img{display:block}</style>` +
    `<img width="${size}" height="${size}" src="data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}">`);
  execFileSync(chrome, [
    "--headless=new", "--disable-gpu", "--hide-scrollbars", "--no-first-run", "--no-default-browser-check",
    "--force-device-scale-factor=1", "--default-background-color=00000000", `--window-size=${size},${size}`,
    `--user-data-dir=${path.join(tmp, "profile")}`, `--screenshot=${out}`, "file://" + html,
  ], { stdio: "ignore", timeout: 60000 });
  return fs.readFileSync(out);
}

// An .ico that simply wraps PNGs (supported by every current browser).
function ico(images) {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ size, data }, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size >= 256 ? 0 : size, e); head.writeUInt8(size >= 256 ? 0 : size, e + 1);
    head.writeUInt16LE(1, e + 4); head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(data.length, e + 8); head.writeUInt32LE(offset, e + 12);
    offset += data.length;
  });
  return Buffer.concat([head, ...images.map((i) => i.data)]);
}

const write = (rel, data) => { fs.writeFileSync(path.join(root, rel), data); console.log("  " + rel); };
console.log("Site icons:");
write("favicon.ico", ico([16, 32, 48].map((size) => ({ size, data: png(master, size) }))));
write("apple-touch-icon.png", png(square, 180));
write("assets/icon-192.png", png(master, 192));
write("assets/icon-512.png", png(master, 512));
write("assets/icon-maskable-512.png", png(square, 512));
write("site.webmanifest", JSON.stringify({
  name: "WTF is this icon?",
  short_name: "WTF icon",
  description: "Describe the symbol. Get a plain-English answer.",
  start_url: "/",
  display: "standalone",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  icons: [
    { src: "/assets/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/assets/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "/assets/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
  ],
}, null, 2) + "\n");
fs.rmSync(tmp, { recursive: true, force: true });
