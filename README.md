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

## Adding an icon

1. Add an entry to the right `data/*.js` file (see `data/README.md`).
2. Fill in `looksLike` generously — it's what makes search work, because people describe
   shapes ("horseshoe with !") rather than names ("TPMS").
3. Run `node dev/check.mjs`, then eyeball it in `dev/gallery.html`.

A new data file needs a `<script>` tag in `index.html` and `dev/gallery.html`.
