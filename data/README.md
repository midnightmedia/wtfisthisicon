# Icon data format

Every icon lives in a plain JS file in `data/` that calls `WTF.add([...])`.
Files are loaded with classic `<script>` tags (no modules, no build step), so the
site also works when `index.html` is opened straight from disk.

```js
WTF.add([
  {
    id: "car-check-engine",          // REQUIRED. kebab-case, globally unique, MUST start with the category id + "-"
    name: "Check engine light",      // REQUIRED. The common name people would recognise
    quiz: "Engine fault",            // optional. Short label for the quiz, saying what it MEANS (see below)
    category: "car",                 // REQUIRED. One of the ids in data/_registry.js
    color: "amber",                  // optional. Real-world colour of the light: red | amber | green | blue | white
    urgency: "soon",                 // optional. stop = deal with it now/danger, soon = sort it out soon, info = just letting you know
    aka: ["MIL", "engine management light"],      // other names / jargon
    looksLike: ["submarine", "engine", "boxy blob with a pipe"], // how a confused person would DESCRIBE the shape
    meaning: "Plain-English explanation, 1–3 sentences.",
    action: "What to actually do about it, 1–3 sentences.",
    tip: "Optional extra: a fun fact, a common myth, or a regional difference.",
    svg: `<path d="..."/>`           // REQUIRED. Inner SVG markup only (see drawing rules)
  }
]);
```

## Writing the text

- Audience: a normal person standing in front of the thing, slightly panicked. Plain English, no jargon without explanation.
- Accurate first. Light, friendly humour is welcome (the site is called "WTF is this icon?") but never at the expense of clarity or safety.
- `looksLike` is the most important field for search. People don't know the name, so they type what they see:
  "squiggly lines", "horseshoe with exclamation mark", "triangle with two lines", "square with a circle inside",
  "fan", "wavy lines", "genie lamp", "dots". Give 3–8 phrases, lowercase.
- `urgency` only where it genuinely applies (dashboard lights, appliance faults). Omit for care-label symbols, modes, ports, etc.
- `color` only for things that are actually shown in a specific colour (dashboard lights). Omit otherwise.

## Quiz label (`quiz`)

The quiz shows a label and asks people to match it to the symbol (or the other way round), so the
label must say what the symbol **means**, never what it **looks like**. If `name` already does that
("Fan grill", "Low fuel", "Do not tumble dry"), leave `quiz` out and the quiz uses `name` (without any
bracketed part). Add `quiz` when the name describes the picture or repeats text printed on it:

- `"Heart with a lightning bolt (defibrillator / AED)"` → `quiz: "Defibrillator (AED)"`
- `"Hourglass (use-by date)"` → `quiz: "Use-by date"`
- `"LOT (batch number)"` → `quiz: "Batch number"`

Keep it short (under ~48 characters), sentence case, no em dashes.

## Drawing rules (`svg`)

The site wraps your markup like this:

```html
<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5"
     stroke-linecap="round" stroke-linejoin="round">  …your markup…  </svg>
```

- Coordinate space is **0–64 in both axes**. Keep everything inside **4–60** and visually centred on (32, 32).
- Use **only `currentColor`**, never hex/rgb/named colours. The site colours the icon (e.g. glowing amber on a dark dashboard tile).
- Default is a 3.5 stroke outline. For solid shapes add `fill="currentColor"` (and `stroke="none"` if you don't want the outline). You may change `stroke-width` per element (e.g. 2.5 for fine detail, 5 for chunky bodies).
- Need a "cut-out" (e.g. a dark "!" inside a solid shape)? Use `class="knock"`: it is painted in the tile's background colour.
- Text is allowed: `<text x="32" y="40" font-size="16">ABS</text>`. CSS automatically gives `<text>` a bold sans-serif font, `fill: currentColor`, no stroke and `text-anchor: middle`, so you only need x / y / font-size.
- Allowed elements: `path`, `circle`, `ellipse`, `rect`, `line`, `polyline`, `polygon`, `text`, `g`. No `id` attributes, no `<defs>`, `<use>`, gradients, filters, images or scripts. `transform="rotate(...)"` / `translate(...)` / `scale(...)` on elements or `<g>` is fine.
- Draw your own geometry. Aim for the recognisable standard shape (ISO 2575 dashboard symbols, ISO 3758 / GINETEX care symbols, IEC 60417 equipment symbols, etc.), simplified, bold and readable at 48px.
- The markup must be well-formed XML (quote every attribute, close every tag, self-close empty elements).

Run `node dev/check.mjs` to validate all data files (schema, unique ids, SVG rules).
Open `dev/gallery.html` to eyeball every icon at large size.
