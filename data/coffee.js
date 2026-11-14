/* Coffee machines: bean-to-cup (De'Longhi, Philips, Sage,
 * Jura, Melitta, Krups, Bosch / Siemens) and pod machines (Nespresso Original
 * and Vertuo, Dolce Gusto, Tassimo) (coffee).
 * Format and drawing rules are in data/README.md.
 *
 * Every brand draws its own icons, so each entry says who uses which version.
 * Shared parts below keep the families consistent: one cup on a saucer (used by
 * every drink button), one water drop, one coffee bean and one limescale crystal. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }
  function rad(a) { return (a * Math.PI) / 180; }
  function pt(cx, cy, r, a) { return [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))]; }
  function xy(p) { return r2(p[0]) + " " + r2(p[1]); }

  // Water drop (solid): round part of radius r centred on (cx, cy), point on top.
  // rot turns it round (cx, cy), e.g. so the point faces somewhere else.
  function drop(cx, cy, r, rot) {
    var t = r2(cy - 2.2 * r);
    return '<path fill="currentColor" stroke="none" d="M' + cx + " " + t +
      "C" + r2(cx - 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + r2(cx - r) + " " + r2(cy - 0.8 * r) + " " + r2(cx - r) + " " + cy +
      "A" + r + " " + r + " 0 0 0 " + r2(cx + r) + " " + cy +
      "C" + r2(cx + r) + " " + r2(cy - 0.8 * r) + " " + r2(cx + 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + cx + " " + t + 'Z"' +
      (rot ? ' transform="rotate(' + r2(rot) + " " + cx + " " + cy + ')"' : "") + "/>";
  }

  // ---- The cup family ------------------------------------------------------
  // A cup on a saucer, rim from (cx - w/2, top) to (cx + w/2, top), flat bottom at top + h.
  // o.fill = how full of coffee it is (0–1), o.handle = false to leave the handle off,
  // o.saucer = false to leave the saucer off, o.flare to taper the sides of a tall cup.
  function cupGeom(cx, top, w, h, flare) {
    var x0 = cx - w / 2, bot = top + h, bw = w * 0.3;
    // Left side is a cubic from the rim down to the bottom corner (flare > 0 tapers the sides).
    var P0 = [x0, top], P1 = [x0 + (flare || 0) * w, top + 0.62 * h], P2 = [cx - bw - 0.12 * w, bot], P3 = [cx - bw, bot];
    function at(t) {
      var u = 1 - t;
      return [
        u * u * u * P0[0] + 3 * u * u * t * P1[0] + 3 * u * t * t * P2[0] + t * t * t * P3[0],
        u * u * u * P0[1] + 3 * u * u * t * P1[1] + 3 * u * t * t * P2[1] + t * t * t * P3[1]
      ];
    }
    // x of the left side at height y (bisection on the cubic; y rises steadily with t)
    function leftX(y) {
      var lo = 0, hi = 1;
      for (var i = 0; i < 30; i++) { var m = (lo + hi) / 2; if (at(m)[1] < y) lo = m; else hi = m; }
      return at((lo + hi) / 2)[0];
    }
    return { x0: x0, x1: cx + w / 2, bot: bot, bw: bw, at: at, leftX: leftX, P1: P1, P2: P2 };
  }
  function cup(cx, top, w, h, o) {
    o = o || {};
    var g = cupGeom(cx, top, w, h, o.flare), out = "", i;
    var body = "M" + r2(g.x0) + " " + top +
      "C" + xy(g.P1) + " " + xy(g.P2) + " " + r2(cx - g.bw) + " " + r2(g.bot) +
      "H" + r2(cx + g.bw) +
      "C" + r2(2 * cx - g.P2[0]) + " " + r2(g.P2[1]) + " " + r2(2 * cx - g.P1[0]) + " " + r2(g.P1[1]) + " " + r2(g.x1) + " " + top;
    if (o.fill) {
      var fy = g.bot - o.fill * h, left = [], n = 12;
      for (i = 0; i <= n; i++) {
        var y = fy + (g.bot - fy) * (i / n);
        left.push([g.leftX(Math.min(y, g.bot - 0.01)), y]);
      }
      var d = "M" + xy(left[0]);
      for (i = 1; i <= n; i++) d += "L" + xy(left[i]);
      for (i = n; i >= 0; i--) d += "L" + xy([2 * cx - left[i][0], left[i][1]]);
      out += '<path fill="currentColor" stroke="none" d="' + d + 'Z"/>';
    }
    out += '<path d="' + body + '"/>';
    if (o.handle !== false) {
      var hr = o.hr || Math.max(3, Math.min(5, h * 0.2)), yA = top + (o.hy || 0.16) * h, yB = yA + 2 * hr, gap = 1.2;
      var xa = 2 * cx - g.leftX(yA), xb = 2 * cx - g.leftX(yB);
      out += '<path stroke-width="' + (o.hsw || 3) + '" d="M' + r2(xa) + " " + r2(yA) + "H" + r2(g.x1 + gap) +
        "A" + r2(hr) + " " + r2(hr) + " 0 0 1 " + r2(g.x1 + gap) + " " + r2(yB) + "H" + r2(xb) + '"/>';
    }
    if (o.saucer !== false) {
      var sy = g.bot + (o.sgap || 4.5), sw = w * (o.sw || 0.58);
      out += '<path d="M' + r2(cx - sw) + " " + r2(sy) + "H" + r2(cx + sw) + '"/>';
    }
    return out;
  }

  // Vertical wavy wisp (steam) from (x, y0) up to (x, y1).
  function wisp(x, y0, y1, amp) {
    var h = (y0 - y1) / 2;
    return "M" + r2(x) + " " + r2(y0) + "C" + r2(x - amp) + " " + r2(y0 - h * 0.35) + " " + r2(x - amp) + " " + r2(y0 - h * 0.65) + " " + r2(x) + " " + r2(y0 - h) +
      "S" + r2(x + amp) + " " + r2(y0 - h * 1.65) + " " + r2(x) + " " + r2(y1);
  }

  // Coffee bean (solid) with its crease knocked out, centred on (cx, cy), tilted by rot degrees.
  // The crease runs there and back along the same S-curve so it has no fill area.
  function bean(cx, cy, rx, ry, rot) {
    var a = [cx, cy - ry * 0.78], b = [cx, cy + ry * 0.78];
    var c1 = [cx + rx * 0.75, cy - ry * 0.25], c2 = [cx - rx * 0.75, cy + ry * 0.25];
    return '<g transform="rotate(' + rot + " " + cx + " " + cy + ')">' +
      '<ellipse cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '" fill="currentColor" stroke="none"/>' +
      '<path class="knock" stroke-width="' + r2(rx * 0.28) + '" d="M' + xy(a) + "C" + xy(c1) + " " + xy(c2) + " " + xy(b) +
      "C" + xy(c2) + " " + xy(c1) + " " + xy(a) + '"/></g>';
  }

  // Limescale crystal: small solid triangle centred on (cx, cy), size s, turned by rot degrees.
  function tri(cx, cy, s, rot) {
    var p = [];
    for (var k = 0; k < 3; k++) { var q = pt(cx, cy, s, -90 + 120 * k + (rot || 0)); p.push(r2(q[0]) + "," + r2(q[1])); }
    return '<polygon fill="currentColor" stroke-width="1.2" points="' + p.join(" ") + '"/>';
  }

  // Clockwise arc of radius r round (cx, cy) from angle a0 to a1 (degrees, screen coordinates),
  // with an arrowhead at the a1 end.
  function arcArrow(cx, cy, r, a0, a1, sw, head) {
    var span = (((a1 - a0) % 360) + 360) % 360;
    var s = pt(cx, cy, r, a0), e = pt(cx, cy, r, a1), big = span > 180 ? 1 : 0, h = head || 6;
    var t = a1 + 90; // direction of travel at the end
    var b1 = pt(e[0], e[1], h, t + 180 - 38), b2 = pt(e[0], e[1], h, t + 180 + 38);
    return '<path stroke-width="' + (sw || 3.5) + '" d="M' + xy(s) + "A" + r + " " + r + " 0 " + big + " 1 " + xy(e) +
      "M" + xy(b1) + "L" + xy(e) + "L" + xy(b2) + '"/>';
  }

  // Puff of steam: outline round the bottom of three overlapping circles [cx, cy, r],
  // open at the top. Starts on the first circle at angle aStart, ends on the last at aEnd.
  function puff(c, aStart, aEnd) {
    function meet(A, B) { // lower intersection of two circles
      var dx = B[0] - A[0], dy = B[1] - A[1], d = Math.sqrt(dx * dx + dy * dy);
      var a = (A[2] * A[2] - B[2] * B[2] + d * d) / (2 * d), hh = Math.sqrt(A[2] * A[2] - a * a);
      var mx = A[0] + (a * dx) / d, my = A[1] + (a * dy) / d;
      var p1 = [mx + (hh * dy) / d, my - (hh * dx) / d], p2 = [mx - (hh * dy) / d, my + (hh * dx) / d];
      return p1[1] > p2[1] ? p1 : p2;
    }
    var pts = [pt(c[0][0], c[0][1], c[0][2], aStart)];
    for (var i = 0; i < c.length - 1; i++) pts.push(meet(c[i], c[i + 1]));
    pts.push(pt(c[c.length - 1][0], c[c.length - 1][1], c[c.length - 1][2], aEnd));
    var d = "M" + xy(pts[0]);
    for (i = 0; i < c.length; i++) {
      var A = c[i], p = pts[i], q = pts[i + 1];
      var ang0 = Math.atan2(p[1] - A[1], p[0] - A[0]), ang1 = Math.atan2(q[1] - A[1], q[0] - A[0]);
      var sweep = ang0 - ang1; // anticlockwise (screen) travel
      while (sweep < 0) sweep += 2 * Math.PI;
      d += "A" + A[2] + " " + A[2] + " 0 " + (sweep > Math.PI ? 1 : 0) + " 0 " + xy(q);
    }
    return d;
  }

  // ---- Shared drawings -----------------------------------------------------
  // Cup positions are nudged left so cup + handle sit centred on 32.
  var SMALL_CUP = cup(29, 21, 32, 19, { fill: 0.42 });
  var BIG_CUP = cup(29.5, 13, 30, 32, { fill: 0.68, hy: 0.12, flare: 0.07 });

  WTF.add([
    // =====================================================================
    // DESCALING (every brand draws it differently)
    // =====================================================================
    {
      id: "coffee-descale-calc",
      name: "CALC / calc'nClean (descale needed)",
      category: "coffee",
      urgency: "soon",
      aka: ["calc", "CALC", "calc'nClean", "Calc'n'Clean", "Calc / clean", "descale", "decalcify", "limescale", "descaling light"],
      looksLike: ["calc", "the word calc", "calc light", "red calc light", "calc button", "calc'n clean", "calc lit up"],
      meaning:
        "'Calc' is short for calcium, i.e. limescale. The machine has counted enough water through it to know scale is building up inside, and wants you to run its descaling programme. Tassimo prints 'calc' by the descale light on some models (the Style, for one), Krups bean-to-cup machines such as the Arabica have a CALC light, Bosch and Siemens call their combined clean-and-descale programme calc'nClean, and Philips labels the button Calc / clean.",
      action:
        "Run the descaling programme with the descaler your manufacturer sells (tablets for Tassimo, Bosch and Siemens; liquid for Philips and De'Longhi). Take any water filter out of the tank first, empty the drip tray and grounds container, and allow 30–45 minutes. Don't switch off half-way: most machines then insist on starting again.",
      tip: "Leave it too long and some Bosch and Siemens machines lock themselves ('Device locked') until you run the programme; Philips says not descaling can void the warranty. And skip the vinegar: Philips and Dolce Gusto both warn against it.",
      svg:
        '<rect x="6.5" y="15.5" width="51" height="33" rx="10"/>' +
        '<text x="32" y="39.5" font-size="21">calc</text>'
    },
    {
      id: "coffee-descale",
      name: "Descale (pipe full of limescale)",
      category: "coffee",
      urgency: "soon",
      aka: ["descale", "descaling", "decalcify", "limescale", "scale", "calc", "descale light", "decalcify machine"],
      looksLike: ["pipe with triangles", "column of triangles", "tube with dots", "zigzag box", "pipe with crumbs falling out", "gravel in a tube", "triangles between two lines", "brick wall"],
      meaning:
        "A cut-away of a pipe clogged with limescale: two lines for the pipe walls, little crystals inside, sometimes with flakes falling out of the end. De'Longhi (Magnifica S and friends), Jura and Melitta all use a version of it, and it means 'descale me'.",
      action:
        "On De'Longhi, flashing means descaling is due and steady means a descale is running; the rinse/descale button below the dial starts it (about 45 minutes). Jura lights it when it's due; Melitta lights it when it's due and flashes it while the programme runs. Remove the water filter first, empty the drip tray and grounds container, use the brand's own descaler and follow the prompts.",
      tip: "Ignoring it won't break the machine overnight, but scale builds up where you can't see it: coffee comes out slower and cooler, and in the end pipes can block. Set your water hardness in the menu (many machines come with a test strip) so the reminder comes at the right time.",
      svg:
        '<path d="M21 6V42M43 6V42"/>' +
        tri(27, 12, 3.4, 0) + tri(37, 14, 3.4, 60) + tri(31.5, 21, 3.4, 30) +
        tri(27, 29, 3.4, 60) + tri(37.5, 28, 3.4, 0) + tri(32, 36.5, 3.4, 0) +
        tri(26, 49, 3.2, 20) + tri(37, 47.5, 3.2, 80) + tri(31, 56, 3.2, 50)
    },
    {
      id: "coffee-descale-calc-clean",
      name: "Calc / clean (Philips descale light)",
      category: "coffee",
      urgency: "soon",
      aka: ["Calc / clean", "calc clean", "descale", "Philips descale", "descaling light", "LatteGo descale"],
      looksLike: ["circle of arrows", "two arrows in a circle", "arrows with triangles", "circular arrows with crystals", "recycling arrows", "spinning arrows with dots", "arrows going round"],
      meaning:
        "Philips' descaling symbol on its 1200, 2200 and 3200 series (including the LatteGo models): two arrows chasing round a cluster of limescale crystals. When its light starts to flash slowly, the machine needs descaling.",
      action:
        "Take out the AquaClean filter, empty the drip tray and grounds container, pour a whole bottle of Philips descaler into the tank and top up with water to the CALC / CLEAN line. Hold the Calc / clean button for 3 seconds, then press start. It takes about 30 minutes, with a tank of fresh water for the rinse half-way through.",
      tip: "Philips says use only its own descaler, never vinegar. An AquaClean filter, changed on time, means you'll see this light far less often.",
      svg:
        arcArrow(32, 32, 21, 200, 330, 3.5, 6.5) + arcArrow(32, 32, 21, 20, 150, 3.5, 6.5) +
        tri(27, 27, 3.3, 0) + tri(36.5, 26.5, 3.3, 60) + tri(32, 34, 3.3, 30) + tri(25.5, 37, 3.3, 60) + tri(38.5, 37, 3.3, 0)
    },
    {
      id: "coffee-descale-spray",
      name: "Descale light (spray symbol)",
      category: "coffee",
      urgency: "soon",
      aka: ["descale", "descaling indicator", "calc", "Tassimo descale light", "Dolce Gusto descale light", "Genio descale"],
      looksLike: ["shower", "shower head", "spray", "sprinkler", "lines fanning out", "fountain in a circle", "red light with lines", "orange light with lines"],
      meaning:
        "On Tassimo machines such as the Vivy 2 (the ones that don't say 'calc') and on Nescafé Dolce Gusto Genio S models, this little spray is the descaling warning. Tassimo lights it red, usually the bottom of its three lights; on a Genio S it glows orange after about 300 drinks.",
      action:
        "Tassimo: put Tassimo descaling tablets and water in the tank, place the yellow (on older machines orange) Service T DISC barcode-down in the brew head, and start it as your manual shows; it runs by itself for about 30 minutes. Dolce Gusto: mix the descaler with 0.5 litres of water, fit the rinsing tool in the capsule holder and follow the manual's descaling steps.",
      tip: "It still comes on if you use filtered or softened water: Bosch, who make Tassimo machines, say even softened water contains some lime. Tassimo suggests descaling about four times a year, Dolce Gusto at least every 3–4 months. On Dolce Gusto machines with just one light, that light turning steady orange instead of green means the same thing.",
      svg:
        '<circle cx="32" cy="32" r="24" stroke-width="3.5"/>' +
        '<path fill="currentColor" stroke="none" d="M24 22A8 8 0 0 1 40 22Z"/>' +
        '<path stroke-width="3.2" d="M27 27L21.5 43M30.3 27.5L28.6 45M33.7 27.5L35.4 45M37 27L42.5 43"/>'
    },

    // =====================================================================
    // MACHINE STATUS
    // =====================================================================
    {
      id: "coffee-water-tank",
      name: "Fill water tank",
      category: "coffee",
      urgency: "soon",
      aka: ["water tank", "fill water tank", "tank empty", "no water", "add water", "water tank missing", "water reservoir"],
      looksLike: ["tap with a drop", "tap dripping into a box", "tank with a drop", "jug pouring", "jug with a drop", "crossed out drop", "drop with a line through it", "bucket with water"],
      meaning:
        "The water tank is empty, nearly empty or not pushed in properly. Every brand draws it differently: a tap over a tank (Tassimo), a tap with a drop (Melitta), a tank with a drop above it (Jura), a jug tipping out a drop (De'Longhi) or a crossed-out drop (Philips). On De'Longhi, flashing means low water and steady means the tank is missing; Melitta does it the other way round.",
      action:
        "Fill with fresh, cold tap water to MAX and push the tank firmly home until it clicks. If the light stays on with a full tank, the float inside is probably stuck: rinse the tank and move the float up and down, as Tassimo suggests.",
      tip: "The makers want fresh, still tap water every day. No fizzy water, and Tassimo says no chemically softened water either.",
      svg:
        '<path d="M11 11H30A5 5 0 0 1 35 16V19.5"/><path d="M19 11V6M14.5 6H23.5" stroke-width="3"/>' +
        drop(35, 28, 3.2) +
        '<path d="M15 31V50A5 5 0 0 0 20 55H48A5 5 0 0 0 53 50V31"/>' +
        '<path stroke-width="3" d="M19 42C22 39.5 25 39.5 28 42S34 44.5 37 42S43 39.5 46 42S49 43.5 49 43"/>'
    },
    {
      id: "coffee-grounds-container",
      name: "Empty grounds container",
      category: "coffee",
      urgency: "soon",
      aka: ["grounds container", "coffee grounds", "dregs drawer", "puck drawer", "empty grounds", "coffee dregs container", "used coffee"],
      looksLike: ["bin", "bin with dots", "box of dots", "tub with dots", "container with balls", "bucket with dots", "tipping box with dots", "box with an arrow"],
      meaning:
        "The bin inside a bean-to-cup machine that collects the used coffee 'pucks' is full, or isn't in place. The machine counts coffees rather than looking inside, so it nags after a set number (a Philips 2200 holds about 12). On De'Longhi, flashing means full and steady means it's missing.",
      action:
        "Empty it while the machine is switched ON, and wait about 5 seconds before sliding it back in. Philips spells it out: empty it with the machine off, or shove it straight back, and the counter doesn't reset, so the light stays on.",
      tip: "The other gotcha: whenever you pull the drip tray out, empty the grounds container too, even if it looks nearly empty. De'Longhi and Philips both reset the count when the tray comes out, so a half-full bin can overflow and clog the machine.",
      svg:
        '<path d="M14 15V45A6 6 0 0 0 20 51H44A6 6 0 0 0 50 45V15"/>' +
        '<g fill="currentColor" stroke="none">' +
        '<circle cx="21.5" cy="29" r="2.7"/><circle cx="28.5" cy="29" r="2.7"/><circle cx="35.5" cy="29" r="2.7"/><circle cx="42.5" cy="29" r="2.7"/>' +
        '<circle cx="21.5" cy="36" r="2.7"/><circle cx="28.5" cy="36" r="2.7"/><circle cx="35.5" cy="36" r="2.7"/><circle cx="42.5" cy="36" r="2.7"/>' +
        '<circle cx="21.5" cy="43" r="2.7"/><circle cx="28.5" cy="43" r="2.7"/><circle cx="35.5" cy="43" r="2.7"/><circle cx="42.5" cy="43" r="2.7"/></g>'
    },
    {
      id: "coffee-drip-tray-full",
      name: "Drip tray full (pop-up float)",
      category: "coffee",
      urgency: "soon",
      aka: ["drip tray full", "drip tray indicator", "float", "water level indicator", "empty trays", "empty drip tray"],
      looksLike: ["red button popping up", "red thing sticking up", "tray with a stick", "tray with an arrow", "red float", "red dot in the tray", "tray", "something poking out of the tray"],
      meaning:
        "Most bean-to-cup machines have a float in the drip tray that pops up through the cover when the tray is full (red on Philips). It's not a light, just a plastic marker; Philips, De'Longhi and Bosch all have one. Melitta and Bosch also show a tray symbol on the panel when it's time to empty it.",
      action:
        "Slide the tray out, tip the water away, rinse it and push it back fully. Empty it every day: the machine rinses itself when it switches on and off, and that water lands in the tray, so it fills faster than you'd think.",
      tip: "When the tray comes out, empty the grounds container as well, otherwise the grounds counter resets and the bin can overflow.",
      svg:
        drop(19, 22, 3.6) +
        '<path d="M7 34H57V48A5 5 0 0 1 52 53H12A5 5 0 0 1 7 48Z"/>' +
        '<path stroke-width="3" d="M12 44C14.5 42 17 42 19.5 44S24.5 46 27 44S32 42 34.5 44"/>' +
        '<rect x="40" y="21" width="10" height="13" rx="2.5" fill="currentColor" stroke="none"/>' +
        '<path d="M39.5 15.5L45 10L50.5 15.5" stroke-width="3"/>'
    },
    {
      id: "coffee-alarm",
      name: "General alarm (warning triangle)",
      category: "coffee",
      urgency: "soon",
      aka: ["alarm", "warning", "general alarm", "error", "fault", "!", "alarm light"],
      looksLike: ["triangle with exclamation mark", "warning triangle", "exclamation mark", "triangle", "! in a triangle", "flashing triangle", "red triangle"],
      meaning:
        "Something's wrong that the other lights don't cover. On De'Longhi bean-to-cup machines it lights alongside another symbol to show which part is the problem; flashing on its own it can mean the beans have run out, the brewing unit (infuser) isn't back in, or the pre-ground funnel is blocked. On Philips, steady usually means the grounds container, drip tray or service door isn't in or shut properly, and flashing means the brew group is missing or stuck.",
      action:
        "Check the obvious first: beans in the hopper, the tank, tray and grounds container pushed fully home, the side door shut and the brewing unit clicked into place. If it won't clear, switch off, unplug for a minute and try again; if it keeps coming back, the error table in your manual or the maker's helpline is next.",
      tip: "On a De'Longhi, a steady triangle with nothing else lit means the inside needs a proper clean: take out and rinse the brewing unit and wipe away the loose coffee around it.",
      svg:
        '<path d="M32 8.5L57.5 53H6.5Z" stroke-width="3.5"/>' +
        '<path d="M32 23V38" stroke-width="4.5"/><circle cx="32" cy="45.5" r="2.8" fill="currentColor" stroke="none"/>'
    },

    // =====================================================================
    // CLEANING & MAINTENANCE
    // =====================================================================
    {
      id: "coffee-cleaning-cycle",
      name: "Cleaning needed (cleaning tablet / CLEAN ME)",
      category: "coffee",
      urgency: "soon",
      aka: ["clean", "CLEAN ME", "cleaning cycle", "cleaning tablet", "backflush", "clean machine", "maintenance light", "integrated cleaning programme"],
      looksLike: ["clean me", "circle with drops around it", "tablet with splashes", "fizzing tablet", "sun with drops", "flower with drops", "clean light", "ring with drops"],
      meaning:
        "Time for the cleaning programme, which is NOT the same as descaling: cleaning uses a tablet to dissolve the coffee oils in the brewing unit, while descaling removes limescale from the water pipes. Jura shows a fizzing tablet, Melitta a column of dots, Krups a CLEAN light, and Sage espresso machines a CLEAN ME light. Melitta suggests a clean every 2 months or about 200 cups.",
      action:
        "Use the brand's own cleaning tablets and follow the prompts. Where the tablet goes varies: on a Jura it goes in the ground-coffee chute, on a Bosch into the duct of the brewing unit, and a Sage Barista Express takes it in the single-cup basket on top of the cleaning disc (then, with the machine off, hold 1 CUP, 2 CUP and POWER together for about 10 seconds; it takes about 5 minutes).",
      tip: "Never put a descaling tablet where a cleaning tablet goes, or the other way round: Bosch warns specifically against it. Sage notes the cleaning cycle is separate from descaling, and the Barista Express won't remind you to descale at all.",
      svg:
        '<circle cx="32" cy="32" r="9"/>' +
        drop(32, 13, 3.6, 180) + drop(48.45, 22.5, 3.6, 240) + drop(48.45, 41.5, 3.6, 300) +
        drop(32, 51, 3.6, 0) + drop(15.55, 41.5, 3.6, 60) + drop(15.55, 22.5, 3.6, 120)
    },
    {
      id: "coffee-water-filter",
      name: "Water filter (change filter)",
      category: "coffee",
      urgency: "soon",
      aka: ["water filter", "AquaClean", "CLARIS", "water softener filter", "filter change", "change filter", "filter cartridge"],
      looksLike: ["cartridge", "filter", "tube with a drop", "bottle with a drop", "battery shape", "capsule", "drop in a cartridge", "orange flashing filter light"],
      meaning:
        "The filter cartridge in the water tank is used up, or (on some machines) waiting to be switched on. Philips calls it AquaClean, Jura and Melitta use CLARIS cartridges and De'Longhi a water softener filter. They cut down limescale, so changing them on time means descaling less often.",
      action:
        "Prepare the new cartridge as its leaflet says (Philips: shake it, then soak it upside down in cold water), push it into the holder in the tank, then tell the machine you've done it (on Philips, hold the AquaClean button for 3 seconds and press start) so its counter resets and it flushes the filter through.",
      tip: "Philips' gotcha: change it while the orange AquaClean light is still flashing (about every 95 litres, and at least every 3 months). Miss that window and the machine makes you descale before it'll accept a new filter. And always take the filter out before descaling.",
      svg:
        '<rect x="24" y="7" width="16" height="7" rx="2" stroke-width="3"/>' +
        '<path d="M22 14H42V46L37 55H27L22 46Z"/>' +
        drop(32, 38, 5.2)
    },
    {
      id: "coffee-rinse",
      name: "Rinse",
      category: "coffee",
      aka: ["rinse", "rinse cycle", "auto rinse", "flush", "rinse/descale button", "hot water rinse"],
      looksLike: ["circle arrow with drops", "arrow going round drops", "drops in a circle", "circular arrow", "raindrops in a circle", "refresh symbol with drops"],
      meaning:
        "Runs hot water through the spouts to rinse and warm the coffee circuit. De'Longhi bean-to-cup machines have a rinse button with this symbol (it's also the descale button), and nearly every bean-to-cup does an automatic rinse when it switches on, and again when it switches off after making coffee.",
      action:
        "Nothing to fix: put a cup under the spouts if you don't want the water in the drip tray. Pressing rinse before the first coffee of the day warms the brewing unit and gives a hotter cup; that's De'Longhi's own advice for lukewarm coffee.",
      tip: "The surprise splash of hot water when you switch on or off is normal: it's the machine cleaning itself, and the main reason the drip tray fills up so fast. Keep fingers away from the spouts while it runs.",
      svg:
        arcArrow(32, 32, 22, 300, 220, 3.5, 7) +
        drop(26, 31, 4.2) + drop(38, 31, 4.2) + drop(32, 44, 4.2)
    },

    // =====================================================================
    // DRINK BUTTONS
    // =====================================================================
    {
      id: "coffee-espresso",
      name: "Espresso / short coffee (small cup)",
      category: "coffee",
      aka: ["espresso", "short coffee", "ristretto", "small cup", "1 cup", "single shot", "Espresso button"],
      looksLike: ["small cup", "little cup", "cup on a saucer", "coffee cup", "espresso cup", "cup with a bit of coffee", "short cup", "cup with a line under it"],
      meaning:
        "Makes a small, strong coffee. Nespresso Original machines (Essenza Mini, Pixie, CitiZ) have a small-cup Espresso button set to 40 ml; De'Longhi's short coffee is also about 40 ml and drawn as a cup with a little coffee in the bottom. Jura and Philips have similar small-cup buttons, and some machines add an even smaller Ristretto cup for a shorter shot still.",
      action:
        "Press it once for the preset amount. To change the amount, most machines let you hold the button down while it pours and then let go (or press again) when there's enough in the cup; it remembers the new amount.",
      tip: "On Nespresso Original, each capsule is meant for one cup size, so match the button to the capsule: pushing lungo amounts of water through an espresso capsule just makes it thinner and more bitter.",
      svg: SMALL_CUP
    },
    {
      id: "coffee-lungo",
      name: "Lungo / long coffee (large cup)",
      category: "coffee",
      aka: ["lungo", "long coffee", "large cup", "coffee", "caffè crema", "big cup", "Lungo button", "Espresso lungo"],
      looksLike: ["big cup", "tall cup", "large cup", "mug", "full cup", "cup filled to the top", "tall cup on a saucer"],
      meaning:
        "Makes a longer coffee: more water through the coffee. On Nespresso Original machines it's the big-cup Lungo button, set to 110 ml; De'Longhi shows the same cup as its short coffee but filled to the brim (about 120 ml); Philips and Jura label theirs Coffee or Espresso lungo.",
      action:
        "Use it with capsules or settings meant for a lungo. For a big mug, an Americano (espresso topped up with hot water, a button on some Philips models) often tastes better than pushing lots of water through one dose.",
      tip: "Nespresso Vertuo machines have no size buttons at all: the barcode round the rim of each capsule tells the machine how much to make.",
      svg: BIG_CUP
    },
    {
      id: "coffee-two-cups",
      name: "Two cups / double",
      category: "coffee",
      aka: ["2 cups", "two cups", "x2", "×2", "double", "2 CUP", "doppio", "double shot"],
      looksLike: ["two cups", "2 cups", "two cups on top of each other", "stacked cups", "double cup", "x2", "pair of cups", "two cups side by side"],
      meaning:
        "Makes two coffees at once, one under each spout. De'Longhi stacks two cups in its symbol, Philips shows ×2 under each drink, and Sage espresso machines have a 2 CUP button.",
      action:
        "Put a cup under each side of the spout. On bean-to-cup machines you can't do two with pre-ground coffee: that's one cup at a time. On a Sage with a portafilter (the handle you lock in), 2 CUP only sets the water (about 60 ml instead of 30), so use the double basket and a double dose of coffee too.",
      tip: "Strength turned right up plus two cups can make the coffee come out a drop at a time; De'Longhi warns about this. Turn the strength down a notch for doubles.",
      svg:
        cup(16.5, 23, 17, 15, { fill: 0.45, hr: 3, hsw: 2.75, sw: 0.6 }) +
        cup(43.5, 23, 17, 15, { fill: 0.45, hr: 3, hsw: 2.75, sw: 0.6 })
    },
    {
      id: "coffee-hot-water",
      name: "Hot water",
      category: "coffee",
      aka: ["hot water", "water for tea", "Americano water", "hot water spout", "tea"],
      looksLike: ["cup with steam", "steaming cup", "cup with wavy lines", "hot cup", "tea cup with steam", "cup with squiggles", "empty cup with steam"],
      meaning:
        "Dispenses plain hot water (for tea, an Americano or warming cups) from a separate hot-water spout or the steam nozzle. Philips draws a steaming cup; on De'Longhi and Sage it's a position on the steam / hot water dial.",
      action:
        "Take any milk jug or carafe off first if it sits on the same spout (Philips LatteGo does). Put a cup under the right spout before you press it: the water comes out very hot.",
      tip: "Warming the cup with a splash of hot water first is the easiest route to hotter coffee; it's the first thing De'Longhi suggests if your coffee comes out lukewarm.",
      svg:
        cup(29, 31, 32, 18) +
        '<path stroke-width="3" d="' + wisp(21.5, 25, 8, 3) + wisp(29, 25, 8, 3) + wisp(36.5, 25, 8, 3) + '"/>'
    },
    {
      id: "coffee-steam",
      name: "Steam (milk frothing)",
      category: "coffee",
      aka: ["steam", "steam wand", "milk frother", "cappuccino maker", "Pannarello", "froth milk", "steam button"],
      looksLike: ["cloud with lines", "lines going into a cloud", "puff of smoke", "three lines and a cloud", "nozzle with steam", "cloud", "jets into a cloud"],
      meaning:
        "Turns on steam for frothing milk through the steam wand (also called the cappuccino maker or frother). De'Longhi and Philips both draw three jets going into a puff of cloud.",
      action:
        "On De'Longhi, press the steam button, dip the frother into a jug of cold milk and, when the light flashes, turn the steam dial to I. Turn it back to 0 before you lift the jug away, or hot milk spits everywhere. Afterwards run hot water through it for a few seconds and wash the frother so milk doesn't dry inside.",
      tip: "Steam scalds in an instant: keep hands clear of the nozzle and never point it at anyone. Many machines cut the steam after a few minutes as a safety measure (De'Longhi after 3): wait a moment and start it again.",
      svg:
        '<path d="' + puff([[17.5, 42, 6.5], [25.5, 48.5, 6.5], [38.5, 48.5, 6.5], [46.5, 42, 6.5]], 300, 240) + '" stroke-width="3.5"/>' +
        '<path d="M32 8V37M25 10L27.5 35.5M39 10L36.5 35.5" stroke-width="3.5"/>'
    },
    {
      id: "coffee-milk-drinks",
      name: "Cappuccino / latte (milk drinks)",
      category: "coffee",
      aka: ["cappuccino", "latte", "latte macchiato", "flat white", "milk drink", "LatteGo", "LatteCrema", "one touch"],
      looksLike: ["cup with foam", "cup with a dome", "cup with froth", "cup with a bump on top", "tall glass with layers", "glass with foam", "cup with a hat"],
      meaning:
        "One-touch milk drinks on machines with a milk carafe or jug (Philips LatteGo, De'Longhi LatteCrema, Jura, Melitta and others). A cup with a dome of foam usually means cappuccino; a tall glass with layers means latte macchiato.",
      action:
        "Fill the milk container with cold milk and attach it before you press. Rinse the milk parts after every use (Philips says LatteGo can simply be rinsed under the tap or put in the dishwasher): dried-on milk blocks the frother and goes sour quickly.",
      tip: "Cold milk straight from the fridge froths best. De'Longhi's troubleshooting puts big bubbles down to milk that isn't cold enough, and recommends skimmed or semi-skimmed.",
      svg:
        cup(29, 31, 32, 18, { fill: 0.78 }) +
        '<path fill="currentColor" stroke="none" d="M12 29A6.5 6.5 0 0 1 17.5 20.5A8.5 8.5 0 0 1 32 15.5A7.5 7.5 0 0 1 43 21.5A6 6 0 0 1 46 29Z"/>'
    },

    // =====================================================================
    // SETTINGS & LIGHTS
    // =====================================================================
    {
      id: "coffee-aroma-strength",
      name: "Coffee strength / aroma (beans)",
      category: "coffee",
      aka: ["aroma", "strength", "coffee strength", "aroma strength", "taste", "intensity", "bean button", "add beans"],
      looksLike: ["coffee beans", "three beans", "two beans", "one bean", "bean", "beans with a line", "seeds", "flashing bean"],
      meaning:
        "Sets how strong the coffee is by changing how much is ground per cup: one bean (mild) to three beans (strong) on Melitta, three steps next to a bean on Philips, one or two beans on Jura, or a dial from MIN to MAX round two beans on De'Longhi's Magnifica S.",
      action:
        "Tap the bean button (or turn the dial) before you press the drink. If coffee drips out slowly, go down a step; if it's weak and watery, go up a step or grind finer. On a Melitta Solo, a flashing bean means the hopper's empty: top up the beans.",
      tip: "Holding the strength button for 3 seconds on a Philips switches to pre-ground coffee (the scoop lights up); on a De'Longhi Magnifica S, turning the dial all the way down to the scoop does the same.",
      svg: bean(13, 32, 6.5, 9.5, 30) + bean(32, 32, 6.5, 9.5, 30) + bean(51, 32, 6.5, 9.5, 30)
    },
    {
      id: "coffee-pre-ground",
      name: "Pre-ground coffee (scoop)",
      category: "coffee",
      aka: ["pre-ground", "ground coffee", "powder", "decaf", "bypass doser", "measuring scoop", "coffee powder"],
      looksLike: ["spoon", "scoop", "spoon with powder", "measuring spoon", "spoon with a pile", "ladle", "spoon with dots", "spoon with a heap on it"],
      meaning:
        "Tells the machine to use ground coffee you've tipped into the separate chute instead of grinding beans: handy for decaf. De'Longhi, Philips and Jura all draw a measuring scoop with a heap of coffee on it.",
      action:
        "Select it, then add ONE level scoop (the one that came with the machine) to the pre-ground chute: never beans, never more than one scoop, and only with the machine switched on. It makes one cup at a time, and on Philips you have to choose it again each time.",
      tip: "Selected it with nothing in the chute? De'Longhi flashes its grounds-container light to tell you. A chute clogged with powder can be cleared with the scoop handle (Philips' tip) or as your manual shows.",
      svg:
        '<path d="M8 36H31A11.5 11.5 0 0 1 8 36Z" stroke-width="3.5"/><path d="M31 36H56" stroke-width="4"/>' +
        '<path fill="currentColor" stroke="none" d="M10 34.5C11.5 27 15 23.5 19.5 23.5C24 23.5 27.5 27 29 34.5Z"/>' +
        '<g fill="currentColor" stroke="none"><circle cx="14.5" cy="17" r="2"/><circle cx="21" cy="14" r="2"/><circle cx="25.5" cy="19" r="2"/></g>'
    },
    {
      id: "coffee-thermometer",
      name: "Thermometer (heating up / temperature)",
      category: "coffee",
      aka: ["temperature", "heating up", "warming up", "hot/cold", "coffee temperature", "thermometer light", "cold mode"],
      looksLike: ["thermometer", "thermometer with lines", "temperature", "thermometer with bars", "red thermometer", "blue thermometer", "flashing thermometer"],
      meaning:
        "It means different things on different machines. On De'Longhi's Magnifica S it's a light that flashes while the machine heats up and goes out when it's ready; on some Philips models it's the coffee temperature setting. On a Dolce Gusto Genio S it's the hot/cold button: red for hot drinks, blue for cold, blinking blue while the machine cools down.",
      action:
        "If it's flashing while the machine heats up, just wait. If the coffee comes out lukewarm, look for a temperature setting (Philips and De'Longhi have one) and warm the cup with hot water first.",
      tip: "On a Genio S, only use cold mode with the cold-drink capsules (Cappuccino Ice, for example) and switch back to hot (red) for everything else.",
      svg:
        '<path d="M24 37.5V14A5 5 0 0 1 34 14V37.5A9.5 9.5 0 1 1 24 37.5Z"/>' +
        '<circle cx="29" cy="45" r="4.5" fill="currentColor" stroke="none"/><path d="M29 44V24" stroke-width="3.5"/>' +
        '<path d="M40 15H46M40 22H46M40 29H46" stroke-width="3"/>'
    },
    {
      id: "coffee-flashing-power",
      name: "Flashing lights while warming up",
      category: "coffee",
      urgency: "info",
      aka: ["blinking", "flashing", "warming up", "heating up", "power light flashing", "not ready", "blinking buttons"],
      looksLike: ["flashing power button", "blinking light", "flashing light", "power symbol with lines", "light blinking", "all lights flashing", "pulsing light", "flashing red light"],
      meaning:
        "Nearly every coffee machine blinks while it heats up and goes steady when it's ready. Sage flashes the POWER button; Nespresso Original blinks its buttons slowly for about 25 seconds; Dolce Gusto machines with one light blink red for about 40 seconds, then go green; Philips lights its drink buttons one after another; Tassimo flashes the cup light.",
      action:
        "Wait until the light stays steady, then press your drink. A different pattern means something else: fast, even blinking on a Nespresso Original means it's in descaling mode (hold both buttons for about 5 seconds to get out), and a Sage whose steam light flashes at switch-on wants the steam dial turned back to STANDBY.",
      tip: "Every light flashing at once usually means a fault, not heating: unplug it for a few minutes and try again, and call the maker if it keeps happening. After lots of drinks in a row some machines stop and blink to cool down: Dolce Gusto asks for 20 minutes off, Nespresso at least 30.",
      svg:
        '<path d="M26 24.5A10.5 10.5 0 1 0 38 24.5" stroke-width="3.5"/><path d="M32 19.5V31" stroke-width="3.5"/>' +
        '<path stroke-width="3" d="M32 6V11M50.38 13.62L46.85 17.15M58 32H53M50.38 50.38L46.85 46.85M32 58V53M13.62 50.38L17.15 46.85M6 32H11M13.62 13.62L17.15 17.15"/>'
    },
    {
      id: "coffee-pressure-gauge",
      name: "Pressure gauge (Sage espresso machines)",
      category: "coffee",
      aka: ["pressure gauge", "espresso range", "extraction gauge", "Barista Express gauge", "pre-infusion", "Breville gauge"],
      looksLike: ["dial", "gauge", "speedometer", "dial with a grey zone", "needle", "clock with one hand", "meter", "pressure dial"],
      meaning:
        "Shows the pressure of the water going through the coffee while a shot pours, on the Sage Barista Express (sold as Breville in many countries) and similar machines. The needle starts low in the PRE-INFUSION zone, then should settle in the grey ESPRESSO RANGE band. Below the band means under-extracted (runs fast, thin and watery); above it means over-extracted (runs slowly, dark and bitter).",
      action:
        "Needle too low: grind finer, use a little more coffee or tamp harder. Too high: grind coarser or use a little less. Change one thing at a time; Sage's guide says a good shot starts to flow after 8–12 seconds and takes 25–30 seconds in all.",
      tip: "Needle hardly moving? Sage's troubleshooting blames too little coffee in the basket or stale beans: use beans roasted within the last four weeks and the supplied Razor tool to check the dose.",
      svg:
        '<circle cx="32" cy="32" r="26" stroke-width="3"/>' +
        '<path d="' + "M" + xy(pt(32, 32, 18.5, 200)) + "A18.5 18.5 0 0 1 " + xy(pt(32, 32, 18.5, 320)) + '" stroke-width="7" stroke-linecap="butt"/>' +
        '<path stroke-width="2.5" d="M' + xy(pt(32, 32, 15, 135)) + "L" + xy(pt(32, 32, 22, 135)) + "M" + xy(pt(32, 32, 15, 45)) + "L" + xy(pt(32, 32, 22, 45)) + '"/>' +
        '<path d="M32 32L' + xy(pt(32, 32, 19, 245)) + '" stroke-width="3.5"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/>'
    },
    {
      id: "coffee-vertuo-light",
      name: "Nespresso Vertuo orange light",
      category: "coffee",
      color: "amber",
      urgency: "soon",
      aka: ["Vertuo", "Vertuo Next", "Vertuo Pop", "descaling alert", "orange light", "blinking orange", "Nespresso light"],
      looksLike: ["flashing orange light", "orange light", "blinking orange", "orange button", "light blinks three times", "orange and white light", "yellow light"],
      meaning:
        "Newer Vertuo machines (Next, Pop) talk through the light on their one button: blinking white means heating up and steady white means ready. Steady white broken by three orange blinks, over and over, is the descaling alert. Fast, continuous orange blinking means the machine is in descaling (or emptying) mode.",
      action:
        "After the alert you get a few more coffees, then descale. With the capsule ejected and the lever unlocked, hold the button for about 7 seconds until it blinks orange fast, then follow Nespresso's step-by-step guide for your model (it involves locking and unlocking the lever). Once descaling has started it can't be stopped, and unplugging just makes it start over.",
      tip: "Blinking orange fast and you didn't ask for a descale? Hold the button for at least 7 seconds to leave descaling mode. One blink then a pause means the water tank is empty, and older models such as the Vertuo Plus use different patterns.",
      svg:
        '<circle cx="32" cy="26" r="15" stroke-width="3.5"/><circle cx="32" cy="26" r="8.5" fill="currentColor" stroke="none"/>' +
        '<g fill="currentColor" stroke="none"><circle cx="22" cy="52" r="3.2"/><circle cx="32" cy="52" r="3.2"/><circle cx="42" cy="52" r="3.2"/></g>'
    },
    {
      id: "coffee-eco",
      name: "ECO / energy saving",
      category: "coffee",
      color: "green",
      aka: ["ECO", "energy saving", "standby", "auto-off", "eco mode", "power saving"],
      looksLike: ["eco", "the word eco", "green eco light", "eco light", "dim lights", "all lights dim"],
      meaning:
        "Energy-saving mode is on: the machine doesn't keep itself fully hot between drinks. On De'Longhi's Magnifica S it's a green ECO light (the same light also shows the auto-off time while you set it); on a Melitta Solo, all the symbols glowing faintly means the same thing.",
      action:
        "Nothing's wrong. The first coffee after a pause may take a few extra seconds while it heats up again. You can switch it off in the settings: on a Magnifica S, hold the steam button until ECO lights up, then follow the steps in the manual.",
      tip: "Separate from ECO, an auto-off timer decides when the machine switches itself off: 15 minutes to 3 hours on De'Longhi and Philips bean-to-cups, 9 or 30 minutes on a Nespresso Essenza Mini.",
      svg: '<text x="32" y="40" font-size="22">ECO</text>'
    }
  ]);
})();
