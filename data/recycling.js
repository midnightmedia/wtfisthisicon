/* Recycling labels (recycling).
 * Format and drawing rules: see data/README.md. All symbols are simplified, original drawings
 * for identification purposes (trademarked marks such as the Green Dot included).
 * The first twelve entries moved here from the Packaging category (old ids "packaging-…";
 * assets/app.js redirects old links). */
WTF.add([
  /* ---------- Classic recycling symbols ---------- */
  {
    id: "recycling-mobius-loop",
    name: "Recycling symbol (Mobius loop)",
    quiz: "Technically recyclable",
    category: "recycling",
    aka: ["Mobius loop", "recyclable symbol", "chasing arrows", "universal recycling symbol"],
    looksLike: ["three arrows in a triangle", "triangle of arrows", "arrows chasing in a triangle", "recycling triangle", "folded arrows", "three bent arrows"],
    meaning: "The item is technically capable of being recycled. It does NOT promise your council collects it, and it doesn't mean it's made from recycled material.",
    action: "Check your local recycling rules, or look for a more specific label on the pack (in the UK, for example, \"Recycle\" / \"Don't recycle\" labels).",
    tip: "Designed in 1970 by student Gary Anderson for a competition around the first Earth Day. It was never trademarked, which is why it turns up on everything.",
    svg: `<path d="M23.35 23.99L29.5 13.33Q32 9 34.5 13.33L38.31 19.94M46.73 34.52L52.88 45.17Q55.38 49.5 50.38 49.5L42.76 49.5M25.92 49.5L13.62 49.5Q8.62 49.5 11.12 45.17L14.93 38.57" stroke-width="5.5"/><polygon points="43.46,28.85 32.25,23.44 44.38,16.44" fill="currentColor" stroke-width="1.5"/><polygon points="32.47,49.5 42.76,42.5 42.76,56.5" fill="currentColor" stroke-width="1.5"/><polygon points="20.07,29.65 20.99,42.07 8.87,35.07" fill="currentColor" stroke-width="1.5"/>`
  },
  {
    id: "recycling-mobius-loop-percent",
    name: "Recycling symbol with a percentage",
    quiz: "Amount of recycled material",
    category: "recycling",
    aka: ["recycled content", "Mobius loop with percentage", "% recycled"],
    looksLike: ["triangle of arrows with a percentage", "recycling triangle with %", "arrows with a number and percent", "three arrows with 50%"],
    meaning: "The packaging contains that percentage of recycled material (e.g. 60% means 60% of it was made from recycled stuff).",
    action: "Nothing to do; it's information about what it's made of. Whether you can recycle it again depends on your local rules.",
    tip: "Not to be confused with the plastic resin codes, which have a single digit 1–7 inside the triangle.",
    svg: `<path d="M22.3 24.3L29.75 11.4Q32 7.5 34.25 11.4L37.82 17.58M46.55 32.7L54 45.6Q56.25 49.5 51.75 49.5L44.61 49.5M27.15 49.5L12.25 49.5Q7.75 49.5 10 45.6L13.57 39.42" stroke-width="3.5"/><polygon points="42.18,25.14 33.66,19.98 41.98,15.18" fill="currentColor" stroke-width="1.5"/><polygon points="35.88,49.5 44.61,44.7 44.61,54.3" fill="currentColor" stroke-width="1.5"/><polygon points="17.94,31.86 17.73,41.82 9.41,37.02" fill="currentColor" stroke-width="1.5"/><text x="33" y="39.5" font-size="10.5">60%</text>`
  },
  {
    id: "recycling-resin-1",
    name: "Plastic code 1 (PET)",
    quiz: "Clear drinks-bottle plastic",
    category: "recycling",
    aka: ["PET", "PETE", "polyethylene terephthalate", "resin identification code 1", "RIC 1"],
    looksLike: ["triangle of arrows with a number", "triangle with 1", "recycling triangle with 1", "number 1 in a triangle", "pet"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 1 = PET: clear drinks bottles, food trays and punnets. It happens to be one of the most widely recycled plastics.",
    action: "Bottles usually go in household recycling. Empty them and put the lid back on if your council asks. Check local rules for trays and punnets.",
    tip: "Recycled PET is turned into new bottles and polyester fabric like fleece.",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">1</text><text x="32" y="58" font-size="11">PET</text>`
  },
  {
    id: "recycling-resin-2",
    name: "Plastic code 2 (HDPE)",
    quiz: "Milk-bottle plastic",
    category: "recycling",
    aka: ["HDPE", "PE-HD", "high-density polyethylene", "resin identification code 2", "RIC 2"],
    looksLike: ["triangle of arrows with a number", "triangle with 2", "recycling triangle with 2", "number 2 in a triangle", "hdpe"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 2 = HDPE: milk bottles, shampoo, detergent and cleaning-product bottles. Widely recycled.",
    action: "Usually fine for household recycling. Rinse it out, and check your council's rules.",
    tip: "Newer packs may show the number in a plain solid triangle without arrows. The industry standard switched to that in 2013 precisely so people stop reading these codes as \"recyclable\".",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">2</text><text x="32" y="58" font-size="11">HDPE</text>`
  },
  {
    id: "recycling-resin-3",
    name: "Plastic code 3 (PVC)",
    quiz: "Vinyl plastic",
    category: "recycling",
    aka: ["PVC", "V", "vinyl", "polyvinyl chloride", "resin identification code 3", "RIC 3"],
    looksLike: ["triangle of arrows with a number", "triangle with 3", "recycling triangle with 3", "number 3 in a triangle", "pvc"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 3 = PVC (vinyl): pipes, window frames, some blister packs and some cling film. Rarely accepted in household recycling.",
    action: "Usually goes in general waste unless your council or recycling centre says otherwise.",
    tip: "Sometimes marked with just a \"V\" under the triangle.",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">3</text><text x="32" y="58" font-size="11">PVC</text>`
  },
  {
    id: "recycling-resin-4",
    name: "Plastic code 4 (LDPE)",
    quiz: "Carrier-bag and film plastic",
    category: "recycling",
    aka: ["LDPE", "PE-LD", "low-density polyethylene", "soft plastic", "plastic film", "resin identification code 4", "RIC 4"],
    looksLike: ["triangle of arrows with a number", "triangle with 4", "recycling triangle with 4", "number 4 in a triangle", "ldpe"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 4 = LDPE: carrier bags, bread bags, bubble wrap, squeezy bottles and plastic film.",
    action: "Soft film often isn't collected from your doorstep, but many supermarkets have collection points for bags and wrappers. Check local rules.",
    tip: "Soft plastic can jam sorting machines, which is why many councils still don't want it in the household recycling bin.",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">4</text><text x="32" y="58" font-size="11">LDPE</text>`
  },
  {
    id: "recycling-resin-5",
    name: "Plastic code 5 (PP)",
    quiz: "Food-tub and bottle-cap plastic",
    category: "recycling",
    aka: ["PP", "polypropylene", "resin identification code 5", "RIC 5"],
    looksLike: ["triangle of arrows with a number", "triangle with 5", "recycling triangle with 5", "number 5 in a triangle", "pp"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 5 = PP (polypropylene): margarine and yoghurt tubs, ready-meal trays, bottle caps and takeaway tubs.",
    action: "Increasingly accepted in household recycling. Rinse it and check your council's list.",
    tip: "PP copes with heat, which is why it's popular for microwaveable containers.",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">5</text><text x="32" y="58" font-size="11">PP</text>`
  },
  {
    id: "recycling-resin-6",
    name: "Plastic code 6 (PS)",
    quiz: "Foam takeaway-box plastic",
    category: "recycling",
    aka: ["PS", "polystyrene", "EPS", "Styrofoam", "resin identification code 6", "RIC 6"],
    looksLike: ["triangle of arrows with a number", "triangle with 6", "recycling triangle with 6", "number 6 in a triangle", "ps"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 6 = PS (polystyrene): foam takeaway boxes and packing blocks, disposable cups and cutlery, some yoghurt pots. Rarely recycled.",
    action: "Usually general waste. Some recycling centres take clean packing foam, but check before you drive there.",
    tip: "Expanded polystyrene foam is around 98% air, which is a big part of why it's so uneconomical to collect and transport.",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">6</text><text x="32" y="58" font-size="11">PS</text>`
  },
  {
    id: "recycling-resin-7",
    name: "Plastic code 7 (Other)",
    quiz: "Mixed or less common plastics",
    category: "recycling",
    aka: ["Other", "O", "polycarbonate", "PC", "PLA", "bioplastic", "mixed plastic", "resin identification code 7", "RIC 7"],
    looksLike: ["triangle of arrows with a number", "triangle with 7", "recycling triangle with 7", "number 7 in a triangle", "other"],
    meaning: "Identifies the plastic type, not whether it can be recycled. 7 = \"other\": everything that isn't 1–6, such as polycarbonate, acrylic, nylon, multi-layer plastics and plant-based PLA. Usually not recyclable at home.",
    action: "Put it in general waste unless the packaging or your council says otherwise. \"Compostable\" PLA usually needs an industrial composter, not your recycling bin.",
    tip: "Triangles with bigger numbers and letters are European material codes: 20–22 PAP (paper), 40 FE (steel), 41 ALU (aluminium), 70–72 GL (glass), 81–84 C/… (composites such as juice cartons).",
    svg: `<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/><text x="32" y="36.5" font-size="15">7</text><text x="32" y="58" font-size="11">OTHER</text>`
  },
  {
    id: "recycling-green-dot",
    name: "Green Dot",
    quiz: "Packaging recovery fee paid",
    category: "recycling",
    aka: ["Der Grüne Punkt", "Grüne Punkt", "Green Point", "Point Vert", "Punto Verde"],
    looksLike: ["two arrows in a circle", "circle with two arrows", "yin yang arrows", "green circle with arrows", "arrows chasing in a circle", "two-tone circle"],
    meaning: "The manufacturer has paid into a packaging recovery scheme in some European countries. It does NOT mean the packaging is recyclable or made from recycled material.",
    action: "Ignore it when sorting your rubbish. Follow your local rules or other recycling labels instead.",
    tip: "Started in Germany in 1991. It's so widely mistaken for a recycling symbol that some countries now actively discourage it. Usually printed in two shades of green, but it can be any colour.",
    svg: `<circle cx="32" cy="32" r="26"/><path d="M27.55 44.22A13 13 0 0 1 27.55 19.78" stroke-width="5"/><polygon points="34.6,17.22 29.78,25.89 25.33,13.68" fill="currentColor" stroke-width="1.5"/><g transform="rotate(180 32 32)"><path d="M27.55 44.22A13 13 0 0 1 27.55 19.78" stroke-width="5"/><polygon points="34.6,17.22 29.78,25.89 25.33,13.68" fill="currentColor" stroke-width="1.5"/></g>`
  },
  {
    id: "recycling-weee",
    name: "Crossed-out wheelie bin (WEEE)",
    quiz: "Don't put it in the household bin",
    category: "recycling",
    aka: ["WEEE", "do not bin", "e-waste symbol", "waste electrical and electronic equipment"],
    looksLike: ["bin with a cross", "crossed out bin", "trash can with an x", "wheelie bin crossed out", "dustbin with x", "bin with a line under it"],
    meaning: "Don't put this in your household rubbish. Electrical items and batteries contain valuable and hazardous materials and must be collected separately.",
    action: "Take it to a recycling centre or an electrical retailer's take-back scheme. Supermarkets and many shops have battery collection bins.",
    tip: "The black bar under the bin means the product went on sale after 13 August 2005. Lithium batteries thrown in normal bins regularly start fires in bin lorries.",
    svg: `<line x1="15" y1="14" x2="49" y2="14"/><path d="M28 14V10H36V14" stroke-width="3"/><polygon points="18,18 46,18 43,46 21,46"/><circle cx="22" cy="47" r="3.5" fill="currentColor" stroke-width="2"/><line x1="12" y1="9" x2="52" y2="51"/><line x1="52" y1="9" x2="12" y2="51"/><rect x="12" y="54" width="40" height="4.5" fill="currentColor" stroke="none"/>`
  },
  {
    id: "recycling-tidyman",
    name: "Tidyman (don't litter)",
    quiz: "Don't drop litter",
    category: "recycling",
    aka: ["Tidyman", "Tidy Man", "dispose of tidily", "keep tidy", "litter symbol"],
    looksLike: ["person putting litter in a bin", "stick man with a bin", "man throwing rubbish", "person and bin", "figure dropping something in a bin"],
    meaning: "Please dispose of this tidily: in a bin, not on the street. It's an anti-litter reminder, not a recycling symbol.",
    action: "Bin it. Look at the other symbols on the pack to see whether that should be the recycling or the general waste bin.",
    tip: "Popularised in the UK by the Keep Britain Tidy campaign.",
    svg: `<circle cx="16" cy="12" r="5" fill="currentColor" stroke="none"/><g stroke-width="5"><line x1="17" y1="20" x2="20" y2="36"/><polyline points="14,54 20,36 27,54"/></g><line x1="18" y1="23" x2="31" y2="27" stroke-width="4.5"/><rect x="34" y="29.5" width="5" height="5" fill="currentColor" stroke="none" transform="rotate(20 36.5 32)"/><polygon points="31,38 51,38 48,56 34,56" fill="currentColor" stroke-width="2"/>`
  }
]);

/* ---------- On-pack labels, material codes, compostable and sourcing marks ----------
 * Added after the classic symbols above. Small shared drawing helpers keep each family
 * consistent: one UK "swoosh" label, one EU material-code triangle (same arrows as the
 * plastic codes), one curved arrow, one compost mark. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }
  function xy(cx, cy, r, deg) {
    var a = (deg * Math.PI) / 180;
    return [r2(cx + r * Math.cos(a)), r2(cy + r * Math.sin(a))];
  }
  function p(q) { return q[0] + " " + q[1]; }
  function t(x, y, size, s) { return '<text x="' + x + '" y="' + y + '" font-size="' + size + '">' + s + "</text>"; }

  // Solid arrowhead with its tip at (x, y), pointing along angle dir (degrees, y down), length L, half-width W.
  function head(x, y, dir, L, W) {
    var a = (dir * Math.PI) / 180, c = Math.cos(a), s = Math.sin(a), bx = x - L * c, by = y - L * s;
    return '<polygon points="' + r2(x) + "," + r2(y) + " " + r2(bx - W * s) + "," + r2(by + W * c) + " " +
      r2(bx + W * s) + "," + r2(by - W * c) + '" fill="currentColor" stroke="none"/>';
  }

  // Arc of radius r from angle a0 to a1 (degrees; a1 > a0 runs clockwise) ending in a solid arrowhead.
  function arcArrow(cx, cy, r, a0, a1, sw, L, W) {
    var dir = a1 > a0 ? 1 : -1, d = ((L / r) * 180) / Math.PI;
    var base = xy(cx, cy, r, a1 - dir * d), tip = xy(cx, cy, r, a1), stop = a1 - dir * d * 0.7;
    var ang = (Math.atan2(tip[1] - base[1], tip[0] - base[0]) * 180) / Math.PI;
    return '<path d="M' + p(xy(cx, cy, r, a0)) + "A" + r + " " + r + " 0 " + (Math.abs(stop - a0) > 180 ? 1 : 0) + " " +
      (dir > 0 ? 1 : 0) + " " + p(xy(cx, cy, r, stop)) + '" stroke-width="' + sw + '"/>' + head(tip[0], tip[1], ang, L, W);
  }

  // UK OPRL "swoosh": a thick ring open at the top right, finished with a heart. Solid, or knocked out of a filled box.
  function swoosh(cx, cy, r, w, knock) {
    var at = knock ? 'class="knock" stroke-width="0"' : 'fill="currentColor" stroke="none"';
    var R = r + w / 2, q = r - w / 2, a0 = -84, a1 = -332;
    var d = "M" + p(xy(cx, cy, R, a0)) + "A" + r2(R) + " " + r2(R) + " 0 1 0 " + p(xy(cx, cy, R, a1)) +
      "L" + p(xy(cx, cy, q, a1)) + "A" + r2(q) + " " + r2(q) + " 0 1 1 " + p(xy(cx, cy, q, a0)) + "Z";
    // Heart sitting on the right-hand end of the ring, point down where the ring runs into it.
    var h = xy(cx, cy, r + w * 0.1, -14), x = h[0], y = h[1], s = w * 1.2;
    var heart = "M" + r2(x) + " " + r2(y + 0.95 * s) +
      "C" + r2(x - 1.25 * s) + " " + r2(y + 0.05 * s) + " " + r2(x - 1.05 * s) + " " + r2(y - 1.05 * s) + " " + r2(x) + " " + r2(y - 0.4 * s) +
      "C" + r2(x + 1.05 * s) + " " + r2(y - 1.05 * s) + " " + r2(x + 1.25 * s) + " " + r2(y + 0.05 * s) + " " + r2(x) + " " + r2(y + 0.95 * s) + "Z";
    return "<path " + at + ' d="' + d + '"/><path ' + at + ' d="' + heart + '"/>';
  }

  // OPRL label box (s × s, top-left x, y) with the swoosh knocked out; crossed = "Don't recycle" slash.
  function oprl(x, y, s, crossed) {
    var out = '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + s + '" rx="' + r2(s * 0.07) + '" fill="currentColor" stroke="none"/>' +
      swoosh(r2(x + s * 0.45), r2(y + s * 0.52), r2(s * 0.255), r2(s * 0.14), true);
    if (crossed) {
      var a = r2(x + s * 0.1), b = r2(y + s * 0.9), c = r2(x + s * 0.9), e = r2(y + s * 0.1);
      var ln = '<line x1="' + a + '" y1="' + b + '" x2="' + c + '" y2="' + e + '"';
      out += ln + ' stroke-width="' + r2(s * 0.115) + '"/>' + ln + ' class="knock" stroke-width="' + r2(s * 0.055) + '"/>';
    }
    return out;
  }

  // EU material code: the same three-arrow triangle as the plastic resin codes, number inside, letters below.
  var TRI = '<path d="M22.91 20.75L30 8.46Q32 5 34 8.46L37.63 14.75M44.56 26.75L51.65 39.04Q53.65 42.5 49.65 42.5L42.39 42.5M28.54 42.5L14.35 42.5Q10.35 42.5 12.35 39.04L15.98 32.75" stroke-width="2.75"/><polygon points="41.09,20.75 34.34,16.65 40.92,12.85" fill="currentColor" stroke-width="1.5"/><polygon points="35.46,42.5 42.39,38.7 42.39,46.3" fill="currentColor" stroke-width="1.5"/><polygon points="19.44,26.75 19.27,34.65 12.69,30.85" fill="currentColor" stroke-width="1.5"/>';
  function code(num, letters) { return TRI + t(32.8, 36.5, 12.5, num) + t(32, 58, 11, letters); }

  // TÜV AUSTRIA "OK compost" mark: three arrows pointing down, a half daisy, then the scheme word.
  function okCompost(word, size) {
    var out = '<path d="M21 5.5V15.5M17 11.5L21 15.5L25 11.5M32 5.5V15.5M28 11.5L32 15.5L36 11.5M43 5.5V15.5M39 11.5L43 15.5L47 11.5" stroke-width="3"/>';
    out += '<g fill="currentColor" stroke="none">';
    for (var i = 0; i < 9; i++) {
      var a = 180 + (i + 0.5) * 20, c = xy(32, 33, 8.4, a);
      out += '<ellipse cx="' + c[0] + '" cy="' + c[1] + '" rx="1.9" ry="4.6" transform="rotate(' + r2(a + 90) + " " + c[0] + " " + c[1] + ')"/>';
    }
    out += '<path d="M27.8 33A4.2 4.2 0 0 1 36.2 33Z"/></g>';
    return out + t(32, 45, 9, "OK compost") + t(32, 58, size, word);
  }

  WTF.add([
    /* ---------- UK on-pack recycling labels (OPRL) ---------- */
    {
      id: "recycling-oprl-recycle",
      name: "Recycle (UK on-pack label)",
      quiz: "Most UK councils collect it",
      category: "recycling",
      aka: ["OPRL", "On-Pack Recycling Label", "Recycle label", "widely recycled", "check locally", "Recycle Now swoosh", "green recycling label"],
      looksLike: ["green box with a white arrow", "arrow going round with a heart", "circle arrow with a heart", "arrow in a green square", "swoosh arrow", "recycle in a box"],
      meaning: "The UK's clearest \"yes\": at least three-quarters of UK councils collect this packaging (or this part of it) for recycling, and it can actually be sorted and reprocessed.",
      action: "Put it in your household recycling and follow any extra word printed with it (Rinse, Lid on, Flatten…). If a pack has several labels, each one is for a different part.",
      tip: "Older packs say \"Widely recycled\" (same thing), \"Check locally\" (only some councils take it: look it up on your council's website or Recycle Now's Recycling Locator) or \"Not yet recycled\" (now \"Don't recycle\"). The labels are run by OPRL, a not-for-profit.",
      svg: oprl(12, 4, 40) + t(32, 57.5, 10.5, "RECYCLE")
    },
    {
      id: "recycling-oprl-dont-recycle",
      name: "Don't recycle (UK on-pack label)",
      quiz: "Keep it out of the recycling",
      category: "recycling",
      aka: ["Don't Recycle", "Do not recycle", "not yet recycled", "not currently recycled", "OPRL", "crossed-out recycling label"],
      looksLike: ["arrow with a line through it", "crossed out circle arrow", "black box with a crossed arrow", "recycle symbol with a slash", "heart arrow crossed out", "dont recycle"],
      meaning: "Fewer than half of UK councils collect this, or it can't yet be sorted and reprocessed properly. Putting it in the recycling can contaminate everything else in the load.",
      action: "Put it in general waste, unless the pack sends you somewhere specific (a supermarket collection point or a take-back scheme). If your own council's list says it takes it, your council wins.",
      tip: "On a multi-part label, \"Don't recycle\" may only apply to one piece (often a film lid or a sleeve) while the rest says \"Recycle\". Separate them.",
      svg: oprl(14, 4, 34, true) + t(32, 49.5, 10, "DON’T") + t(32, 59.5, 10, "RECYCLE")
    },
    {
      id: "recycling-oprl-rinse",
      name: "Rinse | Recycle (UK on-pack label)",
      quiz: "Clean it before recycling",
      category: "recycling",
      aka: ["Rinse", "Clean", "Empty", "Scrape", "Scrunch", "OPRL", "call to action"],
      looksLike: ["recycle label with rinse", "rinse above a recycle box", "green box saying rinse", "rinse recycle", "word rinse on a recycling label"],
      meaning: "Recycle it, but give it a quick rinse first. Leftover food and drink can spoil paper and card in the same load and makes the material worth less. \"Empty\", \"Scrape\" (ready-meal trays), \"Clean\" and \"Scrunch\" (foil) are variations on the same idea.",
      action: "A quick swill with cold or leftover washing-up water is plenty: it doesn't need to be spotless. Scrunch foil into a ball so the sorting machines can catch it.",
      tip: "Don't waste hot water or a dishwasher cycle on your recycling. Wet and greasy is the problem, not a smear.",
      svg: t(32, 12.5, 10, "RINSE") + oprl(18, 16.5, 28) + t(32, 57, 10, "RECYCLE")
    },
    {
      id: "recycling-oprl-lid-on",
      name: "Lid on / Cap on | Recycle (UK on-pack label)",
      quiz: "Put the top back before recycling",
      category: "recycling",
      aka: ["Lid on", "Cap on", "Flatten", "Flatten | Cap on", "Insert straw", "OPRL"],
      looksLike: ["recycle label with lid on", "lid on above a recycle box", "cap on recycle", "green box saying lid on", "flatten cap on", "lid on"],
      meaning: "Recycle it with the lid or cap put back on. Caps narrower than about 4 cm are too small for the sorting machines to catch on their own, but screwed onto the bottle they get recycled with it.",
      action: "Empty it, put the lid back on and recycle. On drinks cartons you'll often see \"Flatten | Cap on\": squash it flat, then cap on.",
      tip: "On small juice cartons, \"Insert straw\" means push the straw back inside. If you remember being told to take lids off, that's older advice: follow the label.",
      svg: t(32, 12.5, 10, "LID ON") + oprl(18, 16.5, 28) + t(32, 57, 10, "RECYCLE")
    },
    {
      id: "recycling-oprl-remove-film",
      name: "Multi-part label (Remove film / sleeve)",
      quiz: "Separate the parts first",
      category: "recycling",
      aka: ["Remove film", "Remove sleeve", "multi-component label", "Tray recycle, Film don't recycle", "OPRL"],
      looksLike: ["two recycle labels side by side", "tray and film labels", "one arrow crossed out and one not", "two boxes with arrows", "tray film", "remove sleeve"],
      meaning: "The pack is made of parts that go different ways, so each part (tray, film, sleeve, box…) gets its own label. Typically the tray says \"Recycle\" and the film lid says \"Don't recycle\". \"Remove film\" or \"Remove sleeve\" means peel that part off first.",
      action: "Separate the pieces and follow each label: recyclable parts in the recycling, \"Don't recycle\" parts in general waste (or a supermarket collection point if the film's label says so).",
      tip: "A plastic sleeve left on a bottle can make the sorting machines misread what the bottle is made of. Look for a perforated strip or \"peel here\".",
      svg: oprl(5, 13, 25) + oprl(34, 13, 25, true) + t(17.5, 51, 10, "TRAY") + t(46.5, 51, 10, "FILM")
    },
    {
      id: "recycling-oprl-bags-at-supermarket",
      name: "Recycle with bags at large supermarkets",
      quiz: "Take it to a big supermarket",
      category: "recycling",
      aka: ["Don't recycle at home", "front of store collection", "soft plastics", "flexible plastic", "plastic film", "recycle with bags at larger stores", "recycle at store", "OPRL"],
      looksLike: ["recycle with bags", "bags at large supermarket", "arrow above a box of text", "dont recycle at home", "soft plastic label", "crisp packet label"],
      meaning: "Soft plastic film (crisp packets, bread bags, fruit-and-veg bags, film lids, multipack wrap) that most councils don't collect from homes yet, but many larger supermarkets do, at collection points usually near the entrance.",
      action: "Stash them in one bag and drop it off on your next big shop. No collection point nearby and your council doesn't collect film? Then it goes in general waste. Some councils now collect film from homes, so check your council's website.",
      tip: "In England, councils must start collecting plastic film from homes by April 2030 (the deadline was pushed back from 2027), so you'll see this label for a while yet. Older versions said \"Recycle with bags at larger stores\" or \"Recycle at store\".",
      svg: swoosh(32, 12.3, 6, 3.1, false) + '<rect x="7" y="22" width="50" height="36.5" rx="2.5" stroke-width="2.5"/>' +
        t(32, 33.8, 9.5, "RECYCLE") + t(32, 44.3, 9.5, "WITH") + t(32, 54.8, 9.5, "BAGS")
    },

    /* ---------- European material codes (paper, composites, glass, metals) ---------- */
    {
      id: "recycling-code-paper",
      name: "PAP 20, 21, 22 (paper and card code)",
      quiz: "Paper and card",
      category: "recycling",
      aka: ["PAP", "PAP 20", "PAP 21", "PAP 22", "paper code", "cardboard code", "material identification code"],
      looksLike: ["triangle with 20", "triangle with 21", "triangle with 22", "pap", "arrows with pap", "pap 20", "number 20 in a triangle"],
      meaning: "European material code for paper and card: 20 = corrugated cardboard (delivery boxes), 21 = other card (cereal boxes, sleeves), 22 = paper. Like the plastic numbers, it tells you what it's made of, not that it will definitely be recycled.",
      action: "Clean, dry paper and card goes in your paper and card recycling. Greasy, food-stained, waxed or glittery bits often don't, and pizza boxes vary, so check your council's list.",
      tip: "These codes come from a 1997 EU decision and are voluntary. New EU-wide picture labels are due to start replacing them from late 2028.",
      svg: code("20", "PAP")
    },
    {
      id: "recycling-code-carton",
      name: "C/PAP 81–84 (drinks carton code)",
      quiz: "Drinks cartons",
      category: "recycling",
      aka: ["C/PAP", "C/PAP 81", "C/PAP 84", "PapAl", "PapPet", "composite", "Tetra Pak", "beverage carton"],
      looksLike: ["triangle with 84", "triangle with 81", "c/pap", "cpap", "arrows with c/pap", "tetra pak symbol", "carton recycling code"],
      meaning: "Code for composite packaging, card bonded to other materials: 81 = card + plastic, 82 = card + aluminium, 83 = card + tinplate, 84 = card + plastic + aluminium (the classic juice, milk and soup carton).",
      action: "Empty it, flatten it, cap back on. In England councils have had to collect cartons from homes since March 2026 (a few may still be switching over), and many councils elsewhere do too; otherwise look for carton banks at recycling centres.",
      tip: "The \"C/\" stands for composite. Cartons go to specialist mills that pulp them to separate the card fibres from the plastic and foil layers.",
      svg: code("84", "C/PAP")
    },
    {
      id: "recycling-code-glass",
      name: "GL 70, 71, 72 (glass code)",
      quiz: "Glass",
      category: "recycling",
      aka: ["GL", "GL 70", "GL 71", "GL 72", "glass code", "clear glass", "green glass", "brown glass"],
      looksLike: ["triangle with 70", "triangle with 71", "triangle with 72", "gl", "arrows with gl", "gl 70", "number 70 in a triangle"],
      meaning: "European material code for glass: 70 = clear, 71 = green, 72 = brown. Glass bottles and jars can be recycled over and over without losing quality.",
      action: "Empty bottles and jars go in your glass collection or a bottle bank; if the bank has separate slots, sort by colour. Drinking glasses, Pyrex, window glass and light bulbs don't belong there.",
      tip: "Ovenproof and drinking glass melt at a different temperature from bottle glass, so even a little can spoil a whole batch.",
      svg: code("70", "GL")
    },
    {
      id: "recycling-code-steel",
      name: "FE 40 (steel code)",
      quiz: "Steel",
      category: "recycling",
      aka: ["FE", "FE 40", "steel", "tinplate", "tin can", "ferrous", "steel code"],
      looksLike: ["triangle with 40", "fe", "arrows with fe", "fe 40", "number 40 in a triangle"],
      meaning: "European material code for steel (FE is from ferrum, Latin for iron): food tins, pet-food tins, some aerosols and jar lids.",
      action: "Empty and rinse it, then put it in your metal recycling. Steel tins are collected by virtually every UK council.",
      tip: "Steel is the easiest packaging to sort: big magnets pull it out of the mix at the sorting plant.",
      svg: code("40", "FE")
    },
    {
      id: "recycling-code-aluminium",
      name: "ALU 41 (aluminium code)",
      quiz: "Aluminium",
      category: "recycling",
      aka: ["ALU", "ALU 41", "aluminium", "aluminum", "aluminium code"],
      looksLike: ["triangle with 41", "alu 41", "arrows with alu", "alu", "number 41 in a triangle"],
      meaning: "European material code for aluminium: drinks cans, foil, foil trays, some aerosols and tubes.",
      action: "Empty and rinse it, then put it in your metal recycling. Scrunch clean foil and foil trays together into a ball so the machines can catch them.",
      tip: "Recycling aluminium uses around 95% less energy than making it from scratch, which is why cans are so worth recycling.",
      svg: code("41", "ALU")
    },

    /* ---------- Metal and glass marks ---------- */
    {
      id: "recycling-alu",
      name: "\"alu\" recycling mark",
      quiz: "Aluminium",
      category: "recycling",
      aka: ["alu", "recyclable aluminium", "aluminium recycling symbol", "aluminum"],
      looksLike: ["alu in a circle", "alu with arrows", "two arrows around alu", "circle of arrows with alu", "arrows round the word alu", "alu"],
      meaning: "The item is made of aluminium, which is recyclable. You'll find it on drinks cans, aerosols, foil and foil trays.",
      action: "Empty it and put it in your metal recycling. Aerosols must be completely empty: don't pierce or squash them.",
      tip: "Not to be confused with the Green Dot (two arrows in a circle with no text), which is about a packaging fee, not recyclability.",
      svg: arcArrow(32, 32, 22, -165, -28, 3.5, 8, 5) + arcArrow(32, 32, 22, 15, 152, 3.5, 8, 5) + t(32, 37.5, 16, "alu")
    },
    {
      id: "recycling-metal-recycles-forever",
      name: "Metal Recycles Forever",
      quiz: "Cans and tins recycle endlessly",
      category: "recycling",
      aka: ["Metal Recycles Forever", "infinity loop", "metal packaging recycling mark", "Metal Packaging Europe"],
      looksLike: ["infinity sign with an arrow", "infinity symbol", "figure of eight arrow", "sideways 8 with an arrow", "metal recycles forever", "infinity loop on a can"],
      meaning: "Industry mark (from Metal Packaging Europe, launched in 2014) for steel and aluminium packaging. It's a reminder that metal can be recycled again and again without losing quality, so please recycle it.",
      action: "Empty the can or tin and put it in your metal recycling.",
      tip: "You'll mostly see it on drinks cans and food tins sold in the UK and Europe. It says nothing about recycled content.",
      svg: t(32, 14.5, 11, "METAL") +
        '<path d="M51.2 31.5C51 28 47.5 26 43 26C37 26 35 31 32 35C29 39 27 44 21 44C16 44 12 40 12 35C12 30 16 26 21 26C27 26 29 31 32 35C35 39 37 44 43 44C45 44 46.6 43.3 47.8 42.3" stroke-width="4"/>' +
        head(52.6, 37.6, -45, 8, 4.8) + t(32, 58, 9, "FOREVER")
    },
    {
      id: "recycling-glass-bottle-bank",
      name: "Glass recycling figure (bottle into a bin)",
      quiz: "Glass",
      category: "recycling",
      aka: ["bottle bank symbol", "glass recycling symbol", "recycle glass", "please recycle glass"],
      looksLike: ["person putting a bottle in a bin", "man throwing a bottle", "stick man with a bottle", "bottle into a bin", "person and bottle bank", "figure dropping a bottle"],
      meaning: "Please recycle this glass: it belongs in a glass collection or bottle bank, not general waste. Common on wine, beer and spirit bottles and jars, sometimes drawn inside the recycling triangle.",
      action: "Empty it and put it in your glass recycling or a bottle bank. Whether lids and corks come off first depends on your council.",
      tip: "Looks a lot like the Tidyman (person putting litter in a bin), but the bottle tells you it's about glass recycling.",
      svg: '<g transform="translate(-1.5 0)"><circle cx="14" cy="12" r="4.5" fill="currentColor" stroke="none"/><g stroke-width="5"><line x1="15" y1="19.5" x2="17" y2="36"/><polyline points="11,55 17,36 23,55"/></g>' +
        '<line x1="16" y1="24" x2="28" y2="20" stroke-width="4.5"/>' +
        '<path d="M-3.5 10V-1.5Q-3.5 -4 -1.5 -5V-9H1.5V-5Q3.5 -4 3.5 -1.5V10Z" fill="currentColor" stroke="none" transform="translate(34 21) rotate(130)"/>' +
        '<path d="M35 56V43A12 12 0 0 1 59 43V56Z" fill="currentColor" stroke="none"/><circle class="knock" cx="46" cy="38.5" r="3.4" stroke-width="0"/></g>'
    },

    /* ---------- Compostable marks ---------- */
    {
      id: "recycling-seedling",
      name: "Seedling (industrially compostable)",
      quiz: "Industrial composting only",
      category: "recycling",
      aka: ["Seedling logo", "compostable", "industrially compostable", "EN 13432", "European Bioplastics", "DIN CERTCO"],
      looksLike: ["seedling", "sprout", "little plant", "two leaves", "plant with a swirl", "leaves on a curly stem", "compostable logo"],
      meaning: "Certified to break down in an industrial composting plant (European standard EN 13432), where it's kept at around 55–60 °C for weeks. It does NOT mean it will rot away in a garden compost heap, in a hedge or in the sea.",
      action: "Never put it in your recycling bin: compostable plastic contaminates plastic recycling. Use your food-waste caddy only if your council says it takes compostable packaging or liners; otherwise it goes in general waste.",
      tip: "Some councils only accept food-caddy liners that show this logo, so it's worth looking for when you buy liners. \"Biodegradable\" on its own is a much vaguer claim.",
      svg: '<g transform="translate(0 -3)"><path d="M14.5 22C22 24 36 27 43 32C49 39 45 50 35 51C27 52 21 46 23 39C24 35 27 33 30 32C31 28 31 24 32.5 20.5" stroke-width="4.5"/>' +
        '<path d="M32.5 20.5C35 11 43 8 50 11C46 18 40 21 32.5 20.5Z" fill="currentColor" stroke="none"/>' +
        '<path d="M31.5 20C28 13 22 12 17 14.5C21 19.5 26 21 31.5 20Z" fill="currentColor" stroke="none"/></g>' +
        t(32, 57.5, 9, "compostable")
    },
    {
      id: "recycling-ok-compost-home",
      name: "OK compost HOME",
      quiz: "Breaks down in a garden heap",
      category: "recycling",
      aka: ["OK compost HOME", "home compostable", "TÜV Austria", "Vinçotte", "OK compost"],
      looksLike: ["three arrows pointing down with a flower", "half a flower", "down arrows and a daisy", "ok compost home", "flower and arrows", "ok compost"],
      meaning: "Certified by TÜV Austria to break down in a home compost heap, at the lower, less steady temperatures of a garden bin, not just in an industrial plant.",
      action: "It can go on your home compost heap (tear it up to help it along). Keep it out of your plastic recycling. Whether your food-waste caddy can take it is up to your council.",
      tip: "Home compostable still needs a compost heap's microbes, warmth and moisture: it's no excuse for littering.",
      svg: okCompost("HOME", 11)
    },
    {
      id: "recycling-ok-compost-industrial",
      name: "OK compost INDUSTRIAL",
      quiz: "Industrial composting only",
      category: "recycling",
      aka: ["OK compost INDUSTRIAL", "industrially compostable", "EN 13432", "TÜV Austria", "Vinçotte", "OK compost"],
      looksLike: ["three arrows pointing down with a flower", "half a flower", "down arrows and a daisy", "ok compost industrial", "industrial", "ok compost"],
      meaning: "Certified to break down only in industrial composting plants, which run at about 55–60 °C (standard EN 13432). It won't break down properly in your garden compost heap.",
      action: "Not for your home compost heap or your plastic recycling. Use your food-waste caddy only if your council says it takes compostable packaging; otherwise general waste.",
      tip: "Same idea as the Seedling logo, from a different certifier. Industrial compostable is not home compostable: if it doesn't say HOME, assume your garden heap can't handle it.",
      svg: okCompost("INDUSTRIAL", 9)
    },

    /* ---------- Sourcing marks (often mistaken for recycling symbols) ---------- */
    {
      id: "recycling-fsc",
      name: "FSC (tree with a tick)",
      quiz: "Responsibly sourced wood and paper",
      category: "recycling",
      aka: ["FSC", "Forest Stewardship Council", "FSC Mix", "FSC 100%", "FSC Recycled", "checkmark and tree"],
      looksLike: ["tree with a tick", "tick tree", "tree and check mark", "tree with a checkmark", "tree logo", "fsc"],
      meaning: "The wood, paper or card comes from FSC-certified, responsibly managed forests and/or recycled material. \"FSC 100%\" = all from FSC forests; \"FSC Mix\" = a blend of FSC, recycled and checked (\"controlled\") sources; \"FSC Recycled\" = recycled material. It's about where it came from, not how to get rid of it.",
      action: "Nothing to do because of this logo. For disposal, look for a recycling label; plain paper and card usually go in your paper and card recycling.",
      tip: "Every FSC label carries a licence code (FSC® C followed by numbers) that you can look up on the FSC website to see who's using it.",
      svg: '<path d="M13 29L20 41L28 13.5C30 8 38 7 41 12C46 10.5 51 15 49.5 20C54 23 52.5 31 47 31.5C48 36 43.5 39.5 40 37V45H34V38.5" stroke-width="3.5"/>' +
        t(32, 58.5, 13, "FSC")
    },
    {
      id: "recycling-pefc",
      name: "PEFC (two trees in a circle)",
      quiz: "Responsibly sourced wood and paper",
      category: "recycling",
      aka: ["PEFC", "Programme for the Endorsement of Forest Certification", "PEFC certified", "PEFC recycled"],
      looksLike: ["two trees in a circle", "trees with an arrow around them", "two trees", "tree in a circle with an arrow", "circle arrow around trees", "pefc"],
      meaning: "The wood, paper or card comes from PEFC-certified, sustainably managed forests (or, on the \"PEFC recycled\" version, recycled material). Like FSC, it's a sourcing label, not a recycling instruction, despite the arrow round the trees.",
      action: "Nothing to do because of this logo. Follow the recycling label or your council's rules to dispose of the packaging.",
      tip: "PEFC and FSC are rival schemes, so a pack normally shows one or the other, not both.",
      svg: arcArrow(31, 26, 18, -100, -400, 4.5, 8, 5.5) +
        '<g fill="currentColor" stroke="none" transform="translate(-1 0)"><circle cx="26" cy="24" r="5.5"/><rect x="24.8" y="27" width="2.4" height="9"/>' +
        '<polygon points="38.5,13.5 44.5,31 32.5,31"/><rect x="37.3" y="30" width="2.4" height="6"/></g>' +
        t(32, 58.5, 12, "PEFC")
    },

    /* ---------- Other marks you'll find on products sold in Europe and beyond ---------- */
    {
      id: "recycling-batteries",
      name: "Crossed-out bin with Pb, Cd or Hg (batteries)",
      quiz: "Battery contains heavy metals",
      category: "recycling",
      aka: ["battery symbol", "Pb", "Cd", "Hg", "lead", "cadmium", "mercury", "battery disposal", "WEEE"],
      looksLike: ["crossed out bin with letters", "bin with a cross and pb", "bin with hg", "bin with cd", "pb under a bin", "battery bin symbol", "wheelie bin with pb"],
      meaning: "Batteries must not go in your household rubbish. Letters under the bin warn that the battery contains heavy metals above set limits: Hg = mercury, Cd = cadmium, Pb = lead.",
      action: "Take used batteries to a battery collection box (many supermarkets and shops that sell batteries have one) or your local recycling centre. Put tape over the ends of lithium and 9-volt batteries while you store them.",
      tip: "Batteries hidden in bins and recycling start fires in bin lorries and sorting plants. Some councils collect them from the kerb in a small bag left on top of your bin; check yours.",
      svg: '<line x1="17" y1="11" x2="47" y2="11" stroke-width="3"/><path d="M28.5 11V8H35.5V11" stroke-width="2.5"/><polygon points="20,14.5 44,14.5 41.5,38 22.5,38" stroke-width="3"/>' +
        '<circle cx="23.5" cy="39" r="3" fill="currentColor" stroke-width="1.5"/><path d="M14 6L50 44M50 6L14 44" stroke-width="3"/>' +
        t(32, 58.5, 13, "Pb Cd")
    },
    {
      id: "recycling-single-use-plastic",
      name: "Plastic in product (turtle marking)",
      quiz: "Harms wildlife if flushed or littered",
      category: "recycling",
      aka: ["PLASTIC IN PRODUCT", "PLASTIC IN FILTER", "single-use plastics marking", "SUP marking", "turtle logo", "dead turtle logo"],
      looksLike: ["turtle with plastic", "turtle", "plastic in product", "crossed out toilet and turtle", "red and blue label with a turtle", "turtle and toilet", "turtle with a cup"],
      meaning: "EU marking for single-use products that contain plastic: wet wipes, sanitary pads, tampons and applicators, cigarette filters and disposable cups. It warns that there's plastic in it and that flushing or littering it harms wildlife.",
      action: "Never flush wipes, pads or tampons: bag them and put them in general waste. Bin cups and cigarette ends rather than dropping them.",
      tip: "The left-hand picture and wording change by product: a crossed-out toilet on wipes and sanitary products, a crossed-out cup or cigarette on cups and filters. It's an EU rule, but you'll see it on plenty of products in UK shops.",
      svg: '<rect x="5.25" y="7.5" width="53.5" height="49" rx="3" stroke-width="2.5"/><line x1="32" y1="7.5" x2="32" y2="44" stroke-width="2.5"/>' +
        '<path d="M5.25 44H58.75V53.5Q58.75 56.5 55.75 56.5H8.25Q5.25 56.5 5.25 53.5Z" fill="currentColor" stroke="none"/>' +
        '<text class="knock" x="32" y="53.9" font-size="10" stroke-width="0">PLASTIC</text>' +
        '<g fill="currentColor" stroke="none"><rect x="20" y="14" width="6" height="13" rx="1"/><path d="M9 27H26V29.5Q25 36 19.5 37L20.5 40.5H12L13 36.5Q9 33.5 9 29.5Z"/></g>' +
        '<path d="M9 14L27 39M27 14L9 39" class="knock" stroke-width="4.5"/><path d="M9 14L27 39M27 14L9 39" stroke-width="2.5"/>' +
        '<g fill="currentColor" stroke="none"><ellipse cx="46" cy="28" rx="6.5" ry="8"/><circle cx="46" cy="17.5" r="3"/>' +
        '<ellipse cx="38.5" cy="22.5" rx="5" ry="2.1" transform="rotate(-30 38.5 22.5)"/><ellipse cx="53.5" cy="22.5" rx="5" ry="2.1" transform="rotate(30 53.5 22.5)"/>' +
        '<ellipse cx="40" cy="35" rx="3.5" ry="1.8" transform="rotate(35 40 35)"/><ellipse cx="52" cy="35" rx="3.5" ry="1.8" transform="rotate(-35 52 35)"/>' +
        '<polygon points="44.5,35.5 47.5,35.5 46,39.5"/></g>' +
        '<path d="M49.5 13.5L51 9.5L56.5 10.5L55 14.5Z" stroke-width="1.8"/>'
    },
    {
      id: "recycling-triman",
      name: "Triman (France)",
      quiz: "Sorting rules apply in France",
      category: "recycling",
      aka: ["Triman", "Info-tri", "French recycling logo", "French sorting logo"],
      looksLike: ["person with arrows", "man with three arrows", "figure in a circle with arrows", "stick man with arrows pointing out", "person inside a circle arrow", "triman"],
      meaning: "French marking that says a sorting rule applies to this item in France, so it shouldn't just go in general waste there. On its own it doesn't promise the item is recyclable. Since 2022 it comes with an \"Info-tri\" panel showing which French bin each part goes in.",
      action: "In France, follow the Info-tri panel next to it. Anywhere else it doesn't apply: follow your own council's rules.",
      tip: "It's on loads of products sold across Europe because brands use one pack for several countries. The bin colours on the Info-tri (often yellow for packaging) won't necessarily match yours.",
      svg: arcArrow(33, 31, 24, -62, -300, 4, 7.5, 5) + '<g transform="translate(1 -1)">' +
        '<circle cx="24" cy="16" r="4.5" fill="currentColor" stroke="none"/><g stroke-width="4.5"><line x1="24" y1="23" x2="25" y2="38"/><polyline points="19,51 25,38 30,51"/><line x1="25" y1="27" x2="36" y2="32"/></g>' +
        '<path d="M39 30L47.5 21.5" stroke-width="3.5"/>' + head(52, 17, -45, 7, 4.5) +
        '<path d="M40 33.5H49" stroke-width="3.5"/>' + head(55, 33.5, 0, 7, 4.5) +
        '<path d="M39 37L46.5 44.5" stroke-width="3.5"/>' + head(51, 49, 45, 7, 4.5) + "</g>"
    },
    {
      id: "recycling-pfand",
      name: "German deposit logo (DPG Pfand)",
      category: "recycling",
      aka: ["Pfand", "Einwegpfand", "DPG", "Deutsche Pfandsystem", "deposit return", "bottle deposit"],
      looksLike: ["bottle and can with an arrow", "bottle can arrow", "pfand logo", "bottle and can with corners", "arrow under a bottle and can", "deposit symbol"],
      meaning: "German deposit logo for single-use drinks bottles and cans (0.1 to 3 litres). A €0.25 deposit was added when the drink was sold in Germany, and you get it back when you return the empty.",
      action: "In Germany, take it back empty and uncrushed (the machine has to read the label) to pretty much any shop that sells drinks in that kind of container. In the UK the deposit doesn't apply: recycle it as normal.",
      tip: "Reusable (Mehrweg) bottles carry a smaller deposit, usually 8 or 15 cents. Other countries have their own deposit logos, such as Ireland's Re-turn.",
      svg: '<g fill="currentColor" stroke="none"><polygon points="6,6 18,6 6,18"/><polygon points="58,6 46,6 58,18"/><rect x="6" y="52" width="6" height="6"/><rect x="52" y="52" width="6" height="6"/>' +
        '<path d="M24.5 40V26Q24.5 22.5 27 21V14H31V21Q33.5 22.5 33.5 26V40Z"/><rect x="36" y="27" width="9" height="13" rx="1.2"/></g>' +
        '<path d="M43.5 44.5C51 44.5 51 51.5 43.5 51.5H23" stroke-width="3.5"/>' + head(15.5, 51.5, 180, 8, 5)
    },
    {
      id: "recycling-recycled-paperboard",
      name: "100% Recycled Paperboard (US)",
      quiz: "Made wholly from recycled card",
      category: "recycling",
      aka: ["100% Recycled Paperboard", "RPA-100%", "recycled paperboard symbol", "recycled content"],
      looksLike: ["semicircle of arrows", "circle of little arrows", "arrows in a circle", "arc of arrows", "ring of arrows with 100%", "100% recycled paperboard"],
      meaning: "US mark meaning the box is made from 100% recycled paperboard (recovered paper fibre). It's about what the box is made of, not an instruction, though the box itself is usually recyclable.",
      action: "Flatten it and put it in your paper and card recycling, as long as it's clean and dry.",
      tip: "In the US, the classic chasing arrows inside a solid circle have traditionally meant \"made from recycled paper\" as well, while plain arrows meant \"recyclable\".",
      svg: (function () {
        var out = '<g fill="currentColor" stroke="none">';
        for (var a = 70; a <= 290; a += 27.5) {
          var c = xy(32.5, 32, 21, a), k = ((a - 90) * Math.PI) / 180;
          // small block arrow pointing anticlockwise along the circle
          var tx = Math.cos(k), ty = Math.sin(k), nx = -ty, ny = tx, pts = [[4.5, 0], [0.5, 3.6], [0.5, 1.7], [-3.5, 1.7], [-3.5, -1.7], [0.5, -1.7], [0.5, -3.6]];
          out += '<polygon points="' + pts.map(function (q) { return r2(c[0] + q[0] * tx + q[1] * nx) + "," + r2(c[1] + q[0] * ty + q[1] * ny); }).join(" ") + '"/>';
        }
        return out + "</g>" + t(39.5, 36.5, 12.5, "100%");
      })()
    }
  ]);
})();
