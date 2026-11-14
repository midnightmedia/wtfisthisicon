# WTF is this icon?

A website where people describe a confusing symbol — on a car dashboard, washing machine,
fridge, oven, clothing label, phone, recycling label or medicine box — and find out what it
means (and whether to panic).

Plain HTML/CSS/JS. No build step, no dependencies, no backend.

## Run it locally

```bash
python3 -m http.server 5178
```

Then open http://localhost:5178. (Opening `index.html` directly from disk works too.)

## Deploy

Before pushing, run `node dev/stamp-assets.mjs`. It adds a content fingerprint (`?v=…`) to every
script and stylesheet link in `index.html`, so browsers never mix a fresh page with stale cached
files (GitHub Pages lets browsers cache for 10 minutes). It also rebuilds the link previews:
the site's preview card (`assets/og-card.png`) and the Icon of the week share pages in `week/`
(needs Google Chrome installed, to draw the images).

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
| `data/featured.js` | Icon of the week schedule (see below) |
| `dev/check.mjs` | `node dev/check.mjs` validates all icon data |
| `dev/gallery.html` | Every icon on one page for visual checking (`?cat=car` to filter) |
| `dev/stamp-assets.mjs` | Fingerprints asset links in `index.html` and rebuilds `week/` — run before every push |
| `dev/build-share.mjs` | Builds the link-preview images: the site card and the Icon of the week pages |
| `assets/og-card.png` | Generated preview image for any wtfisthisicon.com link — don't edit by hand |
| `week/` | Generated share pages (`/week/<monday>/`), one per scheduled week — don't edit by hand |
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

## Icon of the week

The home page features one symbol each week, in a neon card above the categories. The pick
switches over at midnight on Monday, UK time, straight from `data/featured.js`, so you can
queue up weeks in advance and they go live by themselves with no deploy:

```js
{ week: "2026-11-16", id: "car-tyre-pressure", hook: "Cold mornings drop tyre pressure. That's why this light just came on." },
```

- `week` must be a Monday, `id` any icon id, `hook` one short line (under ~90 characters).
- A week with no entry gets an automatic pick, the same for everyone, using the icon's tip as
  the hook, so the card never goes stale.
- "Past weeks" shows the last four picks, back as far as `since`.
- `node dev/check.mjs` checks the dates are Mondays and the ids exist, and says how many weeks
  are still queued up. `WTF.iconOfTheWeek()` in the browser console shows the current pick.

**Sharing.** Every scheduled week gets its own page, e.g. `wtfisthisicon.com/week/2026-11-09/`,
with a title, description and a 1200×630 neon preview card, so the link shows that week's icon
when it's pasted into WhatsApp, iMessage, X, Facebook, Slack and so on. Opening it takes people
straight to that icon on the site. The Share button on the home page uses this link.

- `wtfisthisicon.com/week/` is the stable "this week's icon" link (for a bio or a newsletter).
  Its preview is a general Icon of the week card, and it forwards to whatever is on this week.
- `node dev/stamp-assets.mjs` builds the pages (via `dev/build-share.mjs`) and only re-renders
  cards whose icon or hook changed. `node dev/build-share.mjs --force` re-renders them all.
- Pages are never deleted, so a link shared in an old week keeps its preview.
- Automatic picks (weeks with no entry) don't get a page; Share falls back to the plain icon link.

## Adding an icon

1. Add an entry to the right `data/*.js` file (see `data/README.md`).
2. Fill in `looksLike` generously — it's what makes search work, because people describe
   shapes ("horseshoe with !") rather than names ("TPMS").
3. Run `node dev/check.mjs`, then eyeball it in `dev/gallery.html`.
4. Redeploy the photo Worker (`cd worker && npm run deploy`) so photo lookups can find it.

A new data file needs a `<script>` tag in `index.html` and `dev/gallery.html`.
