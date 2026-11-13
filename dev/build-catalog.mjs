// Exports the icon list the photo-recognition Worker matches against.
// Run after adding or editing icons:  node dev/build-catalog.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = path.join(root, "data");
const sandbox = {};
sandbox.window = sandbox;
vm.createContext(sandbox);
const run = (f) => vm.runInContext(fs.readFileSync(path.join(dataDir, f), "utf8"), sandbox, { filename: f });
run("_registry.js");
fs.readdirSync(dataDir).filter((f) => f.endsWith(".js") && f !== "_registry.js").sort().forEach(run);

const cats = Object.fromEntries(sandbox.WTF.categories.map((c) => [c.id, c.name]));
const catalog = sandbox.WTF.icons.map((i) => ({
  id: i.id,
  name: i.name,
  where: cats[i.category],
  ...(i.color ? { color: i.color } : {}),
  looksLike: i.looksLike || [],
}));

const out = path.join(root, "worker", "src", "catalog.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(catalog, null, 0) + "\n");
console.log(`Wrote ${catalog.length} icons to ${path.relative(root, out)}`);
