# WTF is this icon?

A website where people describe a confusing symbol — on a car dashboard, washing machine,
oven, clothing label, phone or packaging — and find out what it means (and whether to panic).

Plain HTML/CSS/JS. No build step, no dependencies, no backend.

## Run it locally

```bash
python3 -m http.server 5178
```

Then open http://localhost:5178. (Opening `index.html` directly from disk works too.)

## Deploy

Before pushing, run `node dev/stamp-assets.mjs`. It adds a content fingerprint (`?v=…`) to every
script and stylesheet link in `index.html`, so browsers never mix a fresh page with stale cached
files (GitHub Pages lets browsers cache for 10 minutes).

Upload the folder as-is to any static host — Netlify (drag-and-drop), Vercel, Cloudflare Pages
or GitHub Pages. The `dev/` folder isn't needed in production.

## How it's organised

| Path | What |
| --- | --- |
| `index.html` | The page |
| `assets/styles.css` | All styling |
| `assets/app.js` | Search, filters, routing (`#/icon/<id>`), detail view |
| `data/_registry.js` | Category list + helpers; loaded first |
| `data/*.js` | The icons, one file per group of categories |
| `data/README.md` | **Icon format and drawing rules — read this before adding icons** |
| `dev/check.mjs` | `node dev/check.mjs` validates all icon data |
| `dev/gallery.html` | Every icon on one page for visual checking (`?cat=car` to filter) |
| `dev/stamp-assets.mjs` | Fingerprints asset links in `index.html` — run before every push |
| `dev/build-catalog.mjs` | Exports the icon list the photo Worker matches against |
| `assets/config.js` | Site settings (the photo Worker URL) |
| `worker/` | Cloudflare Worker that identifies photos with Claude |

## Photo recognition

The **Photo** button (next to search) lets people snap or upload a picture of a symbol.
The page shrinks it to a ≤1280px JPEG and posts it to a small Cloudflare Worker in
`worker/`, which asks Claude (vision) which catalog symbol(s) it shows and returns their ids.

- The button only appears when `assets/config.js` has `PHOTO_API` set to the Worker's URL.
- The Anthropic API key lives only in the Worker as a secret, never in the site.
- Guard rails: requests only from the site's own origins, an 8-per-minute limit per visitor,
  an image size cap, and only known icon ids come back. Also set a monthly spend limit in
  the Anthropic Console.

Deploying the Worker (one-off):

```bash
cd worker
npm install
npx wrangler login                          # sign in to Cloudflare in the browser
npx wrangler deploy                         # prints the https://wtf-photo.<you>.workers.dev URL
npx wrangler secret put ANTHROPIC_API_KEY   # paste your key when asked
```

Then put the Worker URL in `assets/config.js` and push. After adding or changing icons,
run `npm run deploy` inside `worker/` so the Worker knows about them.

## Adding an icon

1. Add an entry to the right `data/*.js` file (see `data/README.md`).
2. Fill in `looksLike` generously — it's what makes search work, because people describe
   shapes ("horseshoe with !") rather than names ("TPMS").
3. Run `node dev/check.mjs`, then eyeball it in `dev/gallery.html`.
4. Redeploy the photo Worker (`cd worker && npm run deploy`) so photo lookups can find it.

A new data file needs a `<script>` tag in `index.html` and `dev/gallery.html`.
