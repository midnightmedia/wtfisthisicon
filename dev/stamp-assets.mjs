// Adds a content fingerprint (?v=abc123) to every local script/stylesheet in index.html,
// so browsers never mix a fresh page with stale cached JS/CSS after a deploy.
// Run before pushing:  node dev/stamp-assets.mjs
// It first rebuilds the share previews: the site card and the Icon of the week pages (dev/build-share.mjs),
// then every icon and category page, their preview cards and sitemap.xml (dev/build-pages.mjs).
import "./build-share.mjs";
import "./build-pages.mjs";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(root, "index.html");
let html = fs.readFileSync(indexPath, "utf8");
let count = 0;

html = html.replace(/(<(?:script[^>]*\bsrc|link[^>]*\bhref)=")((?:assets|data)\/[^"?]+)(?:\?v=[^"]*)?(")/g, (_, pre, file, post) => {
  const hash = crypto.createHash("sha1").update(fs.readFileSync(path.join(root, file))).digest("hex").slice(0, 8);
  count++;
  return `${pre}${file}?v=${hash}${post}`;
});

fs.writeFileSync(indexPath, html);
console.log(`Stamped ${count} assets in index.html`);
