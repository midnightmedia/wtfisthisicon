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


  WTF.add([
    // =====================================================================
    // DESCALING (every brand draws it differently)
    // =====================================================================
    {
      id: "coffee-descale-calc",
      name: "CALC / calc'nClean (descale needed)",
      quiz: "Time to descale",
      category: "coffee",
      urgency: "soon",
      aka: ["calc", "CALC", "calc'nClean", "Calc'n'Clean", "Calc / clean", "descale", "decalcify", "limescale", "descaling light"],
      looksLike: ["calc", "the word calc", "calc light", "red calc light", "calc button", "calc'n clean", "calc lit up"],
      meaning:
        "The machine wants you to run its descaling programme. 'Calc' is short for calcium, i.e. limescale: the machine has counted enough water through it to know scale is building up inside. Tassimo prints 'calc' by the descale light on some models (the Style, for one), Krups bean-to-cup machines such as the Arabica have a CALC light, Bosch and Siemens call their combined clean-and-descale programme calc'nClean, and Philips labels the button Calc / clean.",
      action:
        "Run the descaling programme with the descaler your manufacturer sells (tablets for Tassimo, Bosch and Siemens; liquid for Philips and De'Longhi). Take any water filter out of the tank first, empty the drip tray and grounds container, and allow 30–45 minutes. Don't switch off half-way: most machines then insist on starting again.",
      tip: "Leave it too long and some Bosch and Siemens machines lock themselves ('Device locked') until you run the programme. Philips says not descaling can void the warranty. And skip the vinegar: Philips and Dolce Gusto both warn against it.",
      // Tassimo, Krups and Philips print plain lowercase calc, no border.
      svg: '<text x="32" y="40" font-size="22">calc</text>'
    },
    {
      id: "coffee-descale",
      name: "Descale (pipe full of limescale)",
      quiz: "Time to descale",
      category: "coffee",
      urgency: "soon",
      aka: ["descale", "descaling", "decalcify", "limescale", "scale", "calc", "descale light", "decalcify machine"],
      looksLike: ["pipe with triangles", "column of triangles", "tube with dots", "zigzag box", "pipe with crumbs falling out", "gravel in a tube", "triangles between two lines", "brick wall"],
      meaning:
        "Time to descale. The symbol is a cut-away of a pipe clogged with limescale: two lines for the pipe walls, little crystals inside, sometimes with flakes falling out of the end. De'Longhi (Magnifica S and friends), Jura and Melitta all use a version of it.",
      action:
        "On De'Longhi, flashing means descaling is due and steady means a descale is running; the rinse/descale button below the dial starts it (about 45 minutes). Jura lights it when it's due. Melitta, naturally, does the opposite of De'Longhi: lit when it's due, flashing while the programme runs. Remove the water filter first, empty the drip tray and grounds container, use the brand's own descaler and follow the prompts.",
      tip: "Ignoring it won't break the machine overnight, but scale builds up where you can't see it: coffee comes out slower and cooler, and in the end the pipes can block. Set your water hardness in the menu (many machines come with a test strip) so the reminder comes at the right time.",
      // De'Longhi: two thick walls packed with solid triangles.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.9 7.2L21.1 7.5C21.1 7.5 21.1 19.8 21.1 22.4C21.2 24.9 21.4 22.6 21.4 22.6C21.4 22.6 28.1 19.6 29.6 19.1C31 18.5 30.4 19.1 30.4 19.1L30.1 27.2C30.1 27.2 23.8 24.1 22.2 23.4C20.8 22.8 21.1 23.4 21.1 23.4L21.1 47.5C21.1 47.5 20.7 48.1 22.2 47.5C23.8 47 30.4 44 30.4 44C30.4 44 30.7 44 30.6 45.4C30.6 46.7 30.1 52.4 30.1 52.4C30.1 52.4 23.4 49 21.9 48.4C20.4 47.7 21.1 48.5 21.1 48.5L21.1 57L16.8 56.9L16.9 7.2ZM21.9 11.8L31.6 11.9L31.9 12.2L25.1 19.6C25.1 19.6 22.7 14.6 22.1 13.2C21.6 11.9 21.9 11.8 21.9 11.8ZM40 12.4L40.5 12.8C40.5 12.8 38.2 20.1 37.6 21.6C37.1 23.1 37.1 21.9 37.1 21.9L31.2 16.2L40 12.4ZM31.9 21.6C31.9 21.6 35.8 22 37.5 22.4C39.1 22.7 41.8 23.4 41.8 23.4L36.8 30.1L31.9 21.6ZM23.1 26.9L32.2 29.9L26.9 36.1C26.9 36.1 24 30.1 23.4 28.6C22.7 27.2 22.9 27.7 22.9 27.4C22.8 27.1 23.1 26.9 23.1 26.9ZM40.1 29.4C41.7 28.7 40.6 29.4 40.6 29.4L40.5 37.8L31.4 33.4C31.4 33.4 38.6 30 40.1 29.4ZM22.2 37.9C23.9 37.9 31.8 38 31.8 38L31.9 38.4C31.9 38.4 27.3 43.7 26.1 44.9C25 46 25.1 45.5 25.1 45.5C25.1 45.5 22.7 40.2 22.1 39C21.6 37.7 21.9 38 21.9 38C21.9 38 20.6 37.8 22.2 37.9ZM40 38C40 38 40.3 37.7 40.1 38.8C40 39.8 39.3 43 39 44.5C38.6 45.9 38.4 47.1 38.1 47.6C37.9 48.2 37.8 48 37.8 48L31.2 43L40 38ZM32.9 47.4C32.9 47.4 39 49.8 40.5 50.5C42.1 51.2 42 51.5 42 51.5L36 57C36 57 34.2 52.2 33.6 50.6C33.1 49 32.9 47.4 32.9 47.4Z"/><polygon fill="currentColor" stroke="none" points="47.3,7.2 47.3,57.0 42.7,57.0 42.7,7.2"/>'
    },
    {
      id: "coffee-descale-calc-clean",
      name: "Calc / clean (Philips descale light)",
      quiz: "Time to descale",
      category: "coffee",
      urgency: "soon",
      aka: ["Calc / clean", "calc clean", "descale", "Philips descale", "descaling light", "LatteGo descale"],
      looksLike: ["circle of arrows", "two arrows in a circle", "arrows with triangles", "circular arrows with crystals", "recycling arrows", "spinning arrows with dots", "arrows going round"],
      meaning:
        "Philips' descaling symbol on its 1200, 2200 and 3200 series (including the LatteGo models): two arrows chasing each other round a cluster of limescale crystals. When its light starts to flash slowly, the machine needs descaling.",
      action:
        "Take out the AquaClean filter, empty the drip tray and grounds container, pour a whole bottle of Philips descaler into the tank and top up with water to the CALC / CLEAN line. Hold the Calc / clean button for 3 seconds, then press start. It takes about 30 minutes, with a tank of fresh water for the rinse half-way through.",
      tip: "Philips says use only its own descaler, never vinegar. Change the AquaClean filter on time and you'll see this light far less often.",
      svg:
        arcArrow(32, 32, 21, 200, 330, 3.5, 6.5) + arcArrow(32, 32, 21, 20, 150, 3.5, 6.5) +
        tri(27, 27, 3.3, 0) + tri(36.5, 26.5, 3.3, 60) + tri(32, 34, 3.3, 30) + tri(25.5, 37, 3.3, 60) + tri(38.5, 37, 3.3, 0)
    },
    {
      id: "coffee-descale-spray",
      name: "Descale light (spray symbol)",
      quiz: "Time to descale",
      category: "coffee",
      urgency: "soon",
      aka: ["descale", "descaling indicator", "calc", "Tassimo descale light", "Dolce Gusto descale light", "Genio descale"],
      looksLike: ["jets spraying in a circle", "spray in a circle", "lines fanning out in a circle", "dashed lines fanning down", "sprinkler", "shower", "red light with lines", "orange light with lines"],
      meaning:
        "It's the descaling warning on Tassimo machines such as the Vivy 2 (the ones that don't say 'calc') and on Nescafé Dolce Gusto Genio S models. Five little jets fanning out in a circle meaning 'descale' is a stretch, but there we are. Tassimo lights it red, usually the bottom of its three lights; on a Genio S it glows orange after about 300 drinks.",
      action:
        "Tassimo: put Tassimo descaling tablets and water in the tank, place the yellow (on older machines orange) Service T DISC barcode-down in the brew head, and start it as your manual shows. It runs by itself for about 30 minutes. Dolce Gusto: mix the descaler with 0.5 litres of water, fit the rinsing tool in the capsule holder and follow the manual's descaling steps.",
      tip: "It still comes on if you use filtered or softened water: Bosch, who make Tassimo machines, say even softened water contains some lime. Tassimo suggests descaling about four times a year, Dolce Gusto at least every 3–4 months. On Dolce Gusto machines with just one light, that light turning steady orange instead of green means the same thing.",
      // Tassimo Vivy 2: five jets fanning down from one point, each a long stroke then a dash, in a circle.
      svg: '<circle cx="32" cy="32" r="25" stroke-width="3.5"/><path stroke-width="3" d="M30.1 17.3L16.6 33.4M14.0 36.4L11.4 39.5M31.0 17.8L23.8 37.6M22.4 41.3L21.1 45.1M32.0 18.0L32.0 39.0M32.0 43.0L32.0 47.0M33.0 17.8L40.2 37.6M41.6 41.3L42.9 45.1M33.9 17.3L47.4 33.4M50.0 36.4L52.6 39.5"/>'
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
        "The water tank is empty, nearly empty or not pushed in properly. Every brand draws it differently, because one symbol for 'water' would be too easy: a tap over a tank (Tassimo), a tap with a drop (Melitta), a tank with a drop above it (Jura), a jug tipping out a drop (De'Longhi) or a crossed-out drop (Philips). On De'Longhi, flashing means low water and steady means the tank is missing; Melitta does it the other way round.",
      action:
        "Fill it with fresh, cold tap water up to MAX and push the tank firmly home until it clicks. Light still on with a full tank? The float inside is probably stuck: rinse the tank and move the float up and down, as Tassimo suggests.",
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
        "Empty it while the machine is switched ON, and wait about 5 seconds before sliding it back in. Yes, really. Philips spells it out: empty it with the machine off, or shove it straight back, and the counter doesn't reset, so the light stays on.",
      tip: "The other gotcha: whenever you pull the drip tray out, empty the grounds container too, even if it looks nearly empty. De'Longhi and Philips both reset the count when the tray comes out, so a half-full bin can overflow and clog the machine.",
      // De'Longhi: a wide tub with two rows of five dots.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M7.8 10.8C7.8 10.8 8.9 10.7 9.2 10.8C9.6 11 9.8 6.2 9.9 11.7C10.1 17.1 9.7 37.6 10.1 43.5C10.4 49.5 11.3 46.6 11.8 47.5C12.4 48.5 12.9 48.8 13.6 49.2C14.2 49.7 9.9 50.1 15.7 50.2C21.4 50.4 42.3 50.5 48.2 50.2C54.2 50 50.5 49.4 51.4 48.5C52.2 47.7 53.2 46.1 53.6 45.1C54.1 44.2 54.1 48.2 54.2 42.6C54.4 37 54.1 16.9 54.2 11.6C54.4 6.3 54.6 10.9 55 10.8C55.4 10.8 56.6 11.1 56.6 11.1C56.6 11.1 57 6.7 57 12.2C57.1 17.6 57.1 38 57 43.9C56.8 49.7 56.4 46 56 47C55.5 47.9 55 48.8 54.2 49.6C53.5 50.5 52.6 51.3 51.6 51.9C50.6 52.4 54.2 52.9 48.2 53.1C42.3 53.4 21.6 53.3 15.8 53.1C9.9 53 13.8 52.6 13.2 52.4C12.5 52.1 12.3 52 11.8 51.5C11.2 51 10.2 50.1 9.7 49.4C9.1 48.6 8.8 48.3 8.3 47.2C7.9 46.2 7.3 48.8 7 42.9C6.8 36.9 6.9 17.1 7 11.8C7.2 6.4 7.8 10.8 7.8 10.8ZM31.2 24.6C31.9 24.6 32.7 24.7 33.4 25.1C34 25.4 34.7 26.2 35 26.9C35.2 27.5 35.2 28.2 35.1 28.8C35.1 29.2 35 29.5 34.8 29.9C34.5 30.2 33.9 30.9 33.5 31.1C33.2 31.4 33.2 31.5 32.6 31.6C32.1 31.6 30.8 31.6 30.1 31.4C29.5 31.1 29.2 30.8 28.9 30.2C28.5 29.8 28.1 28.4 28.1 28.4C28.1 28.4 27.7 29.9 27.1 30.4C26.6 31 25.7 31.6 24.9 31.8C24.2 31.9 23.3 31.6 22.8 31.4C22.2 31.1 21.8 30.5 21.4 30.1C21.1 29.8 21 29.5 20.9 29.1C20.9 28.6 20.7 28 20.9 27.4C21.2 26.7 21.9 25.8 22.4 25.4C22.8 24.9 23.1 24.8 23.8 24.8C24.4 24.7 25.3 24.8 25.9 25.1C26.6 25.3 27 25.7 27.4 26.2C27.7 26.8 28.1 28.1 28.1 28.1C28.1 28.1 28.5 26.6 28.8 26.1C29 25.7 29.2 25.5 29.6 25.2C30.1 25 30.6 24.7 31.2 24.6ZM38.9 24.6C39.6 24.6 40.8 24.9 41.5 25.4C42.1 25.8 42.8 27.4 42.8 27.4C42.8 27.4 44.3 25.5 44.8 25.1C45.2 24.6 45.1 24.8 45.5 24.8C46 24.7 47 24.7 47.6 24.9C48.3 25.2 48.9 25.9 49.2 26.2C49.6 26.6 49.5 26.7 49.6 27.1C49.8 27.4 49.9 28.2 49.9 28.6C49.8 29.1 49.8 29.4 49.5 29.9C49.1 30.3 48.5 31 48 31.4C47.4 31.7 46.6 31.8 46 31.8C45.3 31.7 44.7 31.4 44.1 30.9C43.6 30.5 42.8 29.1 42.8 29.1C42.8 29.1 42.2 30.2 41.9 30.6C41.5 30.9 41.4 31.2 40.8 31.4C40.1 31.5 38.6 31.7 37.9 31.4C37.1 31.1 36.4 30.2 36 29.6C35.7 28.9 35.7 27.9 35.9 27.2C36 26.6 36.6 25.8 37.1 25.4C37.6 24.9 38.1 24.6 38.9 24.6ZM31.6 38.5C32.4 38.5 33.3 38.8 33.9 39.2C34.4 39.7 35 40.4 35.1 41.1C35.3 41.9 35.2 43 35 43.6C34.7 44.3 34.2 44.8 33.5 45.1C32.9 45.5 31.6 45.6 30.9 45.5C30.3 45.5 30.2 45.3 29.9 45C29.5 44.8 28.9 44.2 28.6 43.8C28.3 43.3 28.1 42.4 28.1 42.4C28.1 42.4 27.9 43.6 27.4 44.1C27 44.7 26.3 45.3 25.6 45.5C24.8 45.8 23.8 45.7 23.1 45.5C22.5 45.2 21.9 44.8 21.6 44.1C21.2 43.5 20.9 42.5 20.9 41.9C20.9 41.2 21.3 40.7 21.6 40.2C21.8 39.8 22.2 39.5 22.6 39.2C22.9 39 23.1 38.8 23.6 38.8C24.2 38.7 25.2 38.8 25.9 39C26.5 39.2 26.9 39.5 27.2 40C27.6 40.4 28.1 41.9 28.1 41.9C28.1 41.9 29 39.9 29.6 39.4C30.1 38.8 30.9 38.6 31.6 38.5Z"/><g fill="currentColor" stroke="none"><circle cx="17" cy="28.1" r="3.5"/><circle cx="16.9" cy="42.2" r="3.5"/><circle cx="39.2" cy="42.2" r="3.5"/><circle cx="46.4" cy="42.2" r="3.5"/></g>'
    },
    {
      id: "coffee-drip-tray-full",
      name: "Drip tray full (pop-up float)",
      category: "coffee",
      urgency: "soon",
      aka: ["drip tray full", "drip tray indicator", "float", "water level indicator", "empty trays", "empty drip tray"],
      looksLike: ["red button popping up", "red thing sticking up", "tray with a stick", "tray with an arrow", "red float", "red dot in the tray", "tray", "something poking out of the tray"],
      meaning:
        "The drip tray is full. Most bean-to-cup machines have a float in the tray that pops up through the cover to tell you (red on Philips). It's not a light, just a plastic marker; Philips, De'Longhi and Bosch all have one. Melitta and Bosch also show a tray symbol on the panel when it's time to empty it.",
      action:
        "Slide the tray out, tip the water away, rinse it and push it back fully. Empty it every day: the machine rinses itself when it switches on and off, and that water lands in the tray, so it fills faster than you'd think.",
      tip: "When the tray comes out, empty the grounds container as well. Otherwise the grounds counter resets and the bin can overflow.",
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
        "Something's wrong that the other lights don't cover. On De'Longhi bean-to-cup machines it lights alongside another symbol to show which part is the problem; flashing on its own, it can mean the beans have run out, the brewing unit (infuser) isn't back in, or the pre-ground funnel is blocked. On Philips, steady usually means the grounds container, drip tray or service door isn't in or shut properly, and flashing means the brew group is missing or stuck.",
      action:
        "Check the obvious first: beans in the hopper, the tank, tray and grounds container pushed fully home, the side door shut and the brewing unit clicked into place. If it won't clear, switch off, unplug for a minute and try again. If it keeps coming back, the error table in your manual or the maker's helpline is next.",
      tip: "On a De'Longhi, a steady triangle with nothing else lit means the inside needs a proper clean: take out and rinse the brewing unit, and wipe away the loose coffee around it.",
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
        "Time for the cleaning programme, which is NOT the same as descaling. Cleaning uses a tablet to dissolve the coffee oils in the brewing unit; descaling removes limescale from the water pipes. Jura shows a fizzing tablet, Melitta a column of dots, Krups a CLEAN light, and Sage espresso machines a CLEAN ME light, like a message on a dusty van. Melitta suggests a clean every 2 months or about 200 cups.",
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
        "The filter cartridge in the water tank is used up or, on some machines, waiting to be switched on. Philips calls it AquaClean, Jura and Melitta use CLARIS cartridges and De'Longhi a water softener filter. They cut down limescale, so changing them on time means descaling less often.",
      action:
        "Prepare the new cartridge as its leaflet says (Philips: shake it, then soak it upside down in cold water) and push it into the holder in the tank. Then tell the machine you've done it (on Philips, hold the AquaClean button for 3 seconds and press start) so its counter resets and it flushes the filter through.",
      tip: "Philips' gotcha: change it while the orange AquaClean light is still flashing (about every 95 litres, and at least every 3 months). Miss that window and the machine makes you descale before it'll accept a new filter. And always take the filter out before descaling.",
      // Jura and Melitta: a slim filter cartridge.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.9 7L24.8 7.2C24.8 7.2 25.5 41.9 26.4 49.5C27.2 57.2 28.4 52.5 29.8 53C31.1 53.6 32.9 53.6 34.2 53C35.6 52.5 36.8 57.2 37.6 49.5C38.5 41.9 39.2 7.2 39.2 7.2L43.1 7.2C43.1 7.2 42.7 43.5 41.6 51.9C40.6 60.2 39 56.1 36.6 57C34.3 57.8 29.7 57.8 27.4 57C25 56.1 23.4 58.9 22.4 52C21.3 45 21.1 22.6 20.9 15.2C20.6 7.7 20.9 7 20.9 7Z"/>'
    },
    {
      id: "coffee-rinse",
      name: "Rinse",
      category: "coffee",
      aka: ["rinse", "rinse cycle", "auto rinse", "flush", "rinse/descale button", "hot water rinse"],
      looksLike: ["circle arrow with drops", "arrow going round drops", "drops in a circle", "circular arrow", "raindrops in a circle", "refresh symbol with drops"],
      meaning:
        "Runs hot water through the spouts to rinse and warm the coffee circuit. De'Longhi bean-to-cup machines have a rinse button with this symbol (it doubles as the descale button), and nearly every bean-to-cup does an automatic rinse when it switches on, and again when it switches off after making coffee.",
      action:
        "Nothing to fix. Put a cup under the spouts if you don't want the water in the drip tray. Pressing rinse before the first coffee of the day warms the brewing unit and gives a hotter cup; that's De'Longhi's own advice for lukewarm coffee.",
      tip: "The surprise splash of hot water when you switch on or off is normal. It's the machine cleaning itself, and the main reason the drip tray fills up so fast. Keep fingers away from the spouts while it runs.",
      // De'Longhi rinse: a nearly closed circular arrow around outline drops.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.1 7C38.2 7 40.7 7.1 43 7.7C45.2 8.2 47.8 9.3 49.5 10.2C51.2 11 53.1 12.8 53.1 12.8L53 16.1C53 16.1 51 14.2 49.6 13.3C48.3 12.5 46.7 11.6 45.1 11.1C43.6 10.5 42 10.1 40.5 9.8C39.1 9.6 37.9 9.5 36.2 9.7C34.6 9.8 32.4 10.2 30.8 10.7C29.1 11.1 27.8 11.8 26.6 12.4C25.3 13.1 24.4 13.7 23.2 14.7C22.1 15.6 20.4 17.5 19.8 18.1C19.1 18.6 19.3 18.2 19.1 18.1C18.8 17.9 18.2 17.5 18.1 17.2C17.9 17 17.8 16.8 17.9 16.4C18.1 16 18.5 15.5 19.1 14.8C19.8 14.2 20.6 13.4 21.6 12.7C22.5 11.9 23.5 11.1 24.9 10.3C26.4 9.6 28.5 8.6 30.4 8.1C32.2 7.5 34 7.1 36.1 7ZM48.5 14.8L49.5 15.4C49.5 15.4 50 15.6 49.8 16.6C49.5 17.5 48.6 19.3 48.4 21.1C48.1 22.8 48.7 25.7 48.5 27.1C48.4 28.6 48 29.1 47.6 29.8C47.3 30.4 46.9 30.9 46.2 31.4C45.6 31.8 44.5 32.3 43.9 32.5C43.2 32.8 43 32.9 42.1 32.8C41.3 32.6 39.8 32.1 39 31.8C38.3 31.4 38 31 37.5 30.4C37.1 29.9 36.7 29.3 36.5 28.4C36.2 27.6 36.2 26.2 36.2 25.4C36.3 24.6 36.5 24.2 36.9 23.6C37.2 23 37.4 22.5 38.1 21.8C38.9 21 40 19.8 41.1 18.9C42.3 18.1 43.7 17.1 45 16.4C46.2 15.8 48.5 14.8 48.5 14.8ZM45.8 19.1C45.8 19.1 45.7 26.2 45.5 27.9C45.4 29.5 45.3 28.5 45 28.9C44.6 29.2 44.3 29.6 43.6 29.8C43 29.9 41.6 29.9 41 29.8C40.4 29.6 40.4 29.5 40 29.1C39.7 28.8 39.3 28.5 39.1 27.9C39 27.2 38.7 26.1 39.1 25.1C39.6 24.2 40.6 22.9 41.8 21.9C42.9 20.9 45.8 19.1 45.8 19.1ZM33.5 19.1L34.6 19.6C34.6 19.6 35.1 19.9 35 20.8C34.8 21.6 33.9 23 33.6 24.9C33.4 26.7 33.8 30.4 33.6 31.9C33.5 33.5 33.4 33.3 33 34C32.6 34.6 31.9 35.4 31.2 35.9C30.6 36.4 29.6 36.8 28.8 37C27.9 37.1 27.1 37.1 26.4 37C25.6 36.8 25 36.5 24.4 36.1C23.7 35.8 23.1 35.3 22.6 34.6C22.2 34 21.7 33.2 21.6 32.4C21.4 31.5 21.4 30.1 21.6 29.4C21.7 28.6 21.9 28.3 22.2 27.6C22.6 27 23.1 26.3 23.8 25.6C24.4 24.9 25.1 24.2 26.1 23.4C27.2 22.6 28.8 21.6 30.1 20.9C31.3 20.1 33.5 19.1 33.5 19.1ZM31.1 23.4C31.1 23.4 30.8 25.3 30.8 26.6C30.7 28 31 30.5 30.9 31.4C30.9 32.4 30.9 32.1 30.6 32.5C30.4 32.8 30 33.4 29.6 33.6C29.3 33.9 29.3 34.1 28.6 34.1C28 34.2 26.6 34.1 25.9 34C25.3 33.8 25.1 33.4 24.9 33C24.6 32.7 24.4 32.4 24.2 31.9C24.1 31.5 24 31 24.1 30.6C24.1 30.1 23.9 30 24.4 29.2C25 28.5 26.1 27 27.2 26.1C28.4 25.1 31.1 23.4 31.1 23.4ZM52.9 28.8L53.1 28.9L53.1 41.4C53.1 41.4 51.9 42.4 51 42.5C50.1 42.7 48.5 42.4 47.8 42.2C47 42.1 46.9 41.9 46.5 41.5C46 41 45.3 40.1 45 39.5C44.8 39 44.7 38.6 44.6 38C44.6 37.5 44.6 36.7 44.9 36C45.1 35.4 45.4 34.8 45.9 34.1C46.3 33.5 46.3 33.2 47.5 32.4C48.6 31.5 52.9 28.8 52.9 28.8ZM52 32.4C52 32.4 52.3 37.2 52 38.5C51.8 39.7 51.1 39.6 50.6 39.9C50.1 40.1 49.6 40.1 49 39.9C48.5 39.6 47.8 39 47.5 38.5C47.3 37.9 47.2 37.3 47.5 36.5C47.9 35.8 48.9 34.8 49.6 34C50.4 33.3 52 32.4 52 32.4ZM11.3 33.5L20.9 39.1L17.1 41.1C17.1 41.1 17.2 41.9 17.6 42.6C18 43.4 18.6 44.4 19.4 45.5C20.3 46.5 21.2 47.7 22.6 48.9C24.1 50 26.6 51.6 28.1 52.4C29.7 53.1 30.7 53.3 31.9 53.6C33 54 33.5 54.2 35 54.2C36.6 54.3 39.4 54.3 41 54C42.7 53.8 43.9 53.4 45 53C46.2 52.6 46.6 52.5 48 51.6C49.3 50.8 53 47.9 53 47.9L53.1 51.1C53.1 51.1 50 53.5 48.5 54.4C46.9 55.2 45.2 55.7 44 56C42.8 56.4 42.8 56.5 41.2 56.6C39.8 56.8 36.7 56.9 35 56.9C33.4 56.8 32.6 56.5 31.4 56.2C30.2 56 29.2 55.6 27.9 55C26.6 54.5 24.8 53.6 23.6 52.9C22.4 52.1 21.7 51.5 20.6 50.5C19.6 49.5 18.3 48.2 17.2 46.9C16.2 45.5 14.6 42.4 14.6 42.4L10.8 43.9L11.3 33.5ZM39.5 35.5L40.6 36.1C40.6 36.1 40.9 36.5 40.8 37.2C40.6 38 39.8 39.5 39.6 41C39.5 42.4 39.8 44.8 39.8 45.9C39.7 46.9 39.5 46.9 39.2 47.4C39 47.9 38.6 48.4 38 48.9C37.5 49.3 36.8 49.8 36 50C35.1 50.1 33.6 49.9 32.9 49.8C32.1 49.6 31.8 49.3 31.4 48.9C30.9 48.4 30.2 47.5 29.9 47C29.6 46.4 29.6 46.1 29.6 45.5C29.6 44.8 29.6 43.7 29.9 42.9C30.3 42 31 41.2 31.6 40.5C32.1 39.9 32.7 39.4 33.5 38.8C34.4 38.1 35.8 37.2 36.8 36.6C37.7 36.1 39.5 35.5 39.5 35.5ZM36.9 39.8C37.2 39.5 37.1 39.8 37.1 39.8C37.1 39.8 37.2 44.6 37 45.9C36.7 47.1 36 47 35.5 47.2C35 47.5 34.5 47.5 34 47.2C33.5 47 32.7 46.4 32.5 45.9C32.2 45.3 32.1 44.7 32.5 44C32.9 43.2 34.1 41.9 34.9 41.1C35.6 40.4 36.5 40 36.9 39.8Z"/>'
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
        "Press it once for the preset amount. To change the amount, most machines let you hold the button down while it pours, then let go (or press again) when there's enough in the cup. It remembers the new amount.",
      tip: "On Nespresso Original, each capsule is meant for one cup size, so match the button to the capsule. Pushing lungo amounts of water through an espresso capsule just makes it thinner and more bitter: the worst of both worlds.",
      // De'Longhi short coffee: a wide tapered cup filled in the bottom third.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.9 17.4C17.9 17.3 56.8 17.4 56.8 17.4C56.8 17.4 57 25 56.9 26.9C56.7 28.8 56.2 28.1 55.6 28.9C55.1 29.6 54.5 30.5 53.5 31.6C52.5 32.6 51 34 49.6 35C48.3 36.1 46.8 37 45.6 37.6C44.5 38.3 43.9 38 42.8 39C41.6 40 38.8 43.6 38.8 43.6L38.9 44C38.9 44 48.9 43.8 51 44C53.2 44.1 52 44.6 52 44.6C52 44.6 52 45.8 51.9 46.1C51.8 46.5 58.8 46.5 51.4 46.5C43.9 46.6 7.3 46.4 7.3 46.4L7 44.9C7 44.9 5.7 44.1 8 44C10.2 43.8 20.8 43.8 20.8 43.8C20.8 43.8 16.2 38.5 14.7 36.5C13.1 34.4 12.3 33 11.6 31.2C10.8 29.5 10.3 27.8 9.9 26.1C9.5 24.5 9.3 22.6 9.2 21.4C9 20.1 8.9 19.1 9.1 18.4C9.2 17.8 2 17.6 9.9 17.4ZM11.8 19.9L47.5 19.9C47.5 19.9 47.7 19.7 47.6 20.6C47.6 21.6 47.2 24.2 47 25.6C46.7 26.9 46.4 27.8 46 28.9C45.5 30.1 45.1 31.1 44.5 32.2C43.8 33.4 42 35.8 42 35.8L17.4 35.8C17.4 35.8 16.2 34.4 15.6 33.2C14.9 32.1 14 30.2 13.4 28.8C12.9 27.3 12.5 25.8 12.2 24.4C12 22.9 11.8 19.9 11.8 19.9ZM50.6 20.1L56 20.1C56 20.1 56.1 21.6 55.9 22.6C55.6 23.6 54.9 25 54.4 26.1C53.8 27.1 53.2 27.8 52.5 28.8C51.7 29.7 50.6 30.8 49.6 31.6C48.7 32.5 46.8 33.8 46.8 33.8C46.8 33.8 48.7 29.5 49.4 27.2C50 25 50.6 20.1 50.6 20.1Z"/>'
    },
    {
      id: "coffee-lungo",
      name: "Lungo / long coffee (large cup)",
      category: "coffee",
      aka: ["lungo", "long coffee", "large cup", "coffee", "caffè crema", "big cup", "Lungo button", "Espresso lungo"],
      looksLike: ["big cup", "tall cup", "large cup", "mug", "full cup", "cup filled to the top", "tall cup on a saucer"],
      meaning:
        "Makes a longer coffee, with more water through the coffee. On Nespresso Original machines it's the big-cup Lungo button, set to 110 ml; De'Longhi shows the same cup as its short coffee but filled to the brim (about 120 ml); Philips and Jura label theirs Coffee or Espresso lungo.",
      action:
        "Use it with capsules or settings meant for a lungo. For a big mug, an Americano (espresso topped up with hot water, a button on some Philips models) often tastes better than pushing lots of water through one dose.",
      tip: "Nespresso Vertuo machines have no size buttons at all. The barcode round the rim of each capsule tells the machine how much to make.",
      // De'Longhi long coffee: the same cup filled near the brim.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.9 17.9C17.8 17.8 56.2 18.1 56.2 18.1C56.2 18.1 56.9 19 57 19.9C57 20.7 57 22.2 56.6 23.4C56.3 24.6 55.7 26 55.1 27.1C54.6 28.1 54.6 28.3 53.5 29.6C52.3 31 49.6 33.7 48.1 35C46.6 36.2 45.5 36.8 44.5 37.4C43.4 38 42.9 37.6 41.8 38.5C40.6 39.5 37.6 43.2 37.6 43.2C37.6 43.2 35.9 43.5 38 43.5C40 43.6 47.8 43.4 49.9 43.5C51.9 43.7 50.4 43.9 50.5 44.2C50.5 44.6 50.4 45.5 50.4 45.5C50.4 45.5 56.8 46 49.6 46C42.5 46.1 7.5 45.9 7.5 45.9C7.5 45.9 7.1 44.9 7.2 44.5C7.2 44.2 7.8 43.5 7.8 43.5L20.4 43.4C20.4 43.4 16.1 38.5 14.7 36.5C13.2 34.5 12.2 32.7 11.6 31.4C10.9 30 10.8 29.6 10.4 28.2C10.1 26.9 9.6 24.5 9.3 22.9C9.1 21.4 9.1 19.6 9.2 18.8C9.2 17.9 2.1 18.1 9.9 17.9ZM11.9 20.4L46 20.4C46 20.4 46.3 20.7 46.2 21.4C46.2 22.2 46 24.1 45.8 25.1C45.5 26 45 26.9 45 26.9L12.9 26.9C12.9 26.9 12.1 24.4 11.9 23.2C11.8 22.1 11.9 20.4 11.9 20.4ZM49.1 20.4L54.2 20.4C54.2 20.4 54.4 22.1 54.1 23.1C53.9 24 53.5 24.9 53 25.9C52.4 26.8 51.8 27.8 51 28.6C50.3 29.5 49.7 30.3 48.8 31.1C47.8 32 45.5 33.6 45.5 33.6C45.5 33.6 47.2 29.8 47.9 27.6C48.5 25.4 49.1 20.4 49.1 20.4Z"/>'
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
      tip: "Strength turned right up plus two cups can make the coffee come out a drop at a time; De'Longhi warns about this. Turn the strength down a notch for doubles, or bring a book.",
      // De'Longhi: two cups stacked, each on its saucer.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.9 6L49.8 6C49.8 6 50 11.7 49.9 13.1C49.8 14.4 49.9 13.4 49.1 14.2C48.4 15.1 46.7 17.1 45.5 18.1C44.4 19.2 43.3 19.8 42.4 20.4C41.4 20.9 40.8 20.8 39.9 21.6C39 22.3 37 24.9 37 24.9L37.1 25.2C37.1 25.2 44.4 25.2 46 25.2C47.5 25.3 46.5 25.6 46.5 25.6L46.5 26.6C46.5 26.6 51.3 27 46 27.1C40.6 27.1 14.2 26.9 14.2 26.9C14.2 26.9 14 25.9 14.1 25.6C14.1 25.4 12.8 25.3 14.4 25.2C16.1 25.2 23.9 25.1 23.9 25.1C23.9 25.1 20.5 21.1 19.4 19.6C18.2 18 17.8 17.2 17.2 16.1C16.7 14.9 16.3 13.5 16.1 12.3C15.8 11.2 15.7 10.3 15.6 9.3C15.5 8.4 15.4 7.4 15.4 6.8C15.5 6.3 15.9 6 15.9 6ZM17.6 7.8L43.1 7.8C43.1 7.8 43.5 7.7 43.4 8.8C43.2 10 42.6 13.1 42 14.8C41.3 16.6 39.2 19.2 39.2 19.2L21.4 19.2C21.4 19.2 20.1 17.3 19.6 16.4C19 15.4 18.7 14.5 18.4 13.3C18 12.2 17.6 10.3 17.4 9.3C17.3 8.4 17.6 7.8 17.6 7.8ZM45.5 7.8L49.4 7.8C49.4 7.8 49.7 8.8 49.4 9.8C49 10.7 48 12.6 47.2 13.7C46.5 14.7 45.6 15.6 44.9 16.2C44.1 16.9 42.9 17.6 42.9 17.6C42.9 17.6 44.2 14.7 44.6 13.1C45.1 11.4 45.5 7.8 45.5 7.8ZM15.9 36.9L49.8 36.9C49.8 36.9 50 42.6 49.9 44C49.8 45.3 49.9 44.2 49.1 45C48.4 45.9 46.6 48 45.5 49C44.4 50 43.5 50.5 42.5 51C41.6 51.6 40.8 51.6 39.9 52.4C38.9 53.1 37 55.8 37 55.8L37 56C37 56 44.4 56 46 56C47.5 56.1 46.5 56.5 46.5 56.5L46.5 57.5C46.5 57.5 50.8 57.9 45.5 58C40.3 58 20.3 58 15.1 58C9.8 57.9 14.2 57.6 14.2 57.6C14.2 57.6 14 56.8 14.1 56.5C14.1 56.3 14.4 56 14.4 56L23.9 56C23.9 56 20.5 51.9 19.4 50.4C18.2 48.8 17.8 48.1 17.2 46.9C16.7 45.6 16.3 44.3 16.1 43.1C15.8 42 15.7 41.1 15.6 40.1C15.5 39.2 15.4 38.2 15.4 37.6C15.5 37.1 15.9 36.9 15.9 36.9ZM17.6 38.5L43 38.5C43 38.5 43.5 38.5 43.4 39.6C43.2 40.8 42.6 43.9 42 45.6C41.3 47.4 39.2 50 39.2 50L21.4 50C21.4 50 20.3 48.5 19.8 47.5C19.2 46.6 18.7 45.5 18.4 44.2C18 43 17.6 41.1 17.4 40.1C17.3 39.2 17.6 38.5 17.6 38.5ZM45.6 38.6L49.2 38.6C49.2 38.6 49.5 38.7 49.5 39C49.6 39.4 49.5 39.9 49.4 40.5C49.2 41.1 49 41.8 48.5 42.6C48 43.5 47.3 44.6 46.4 45.5C45.4 46.5 42.9 48.5 42.9 48.5C42.9 48.5 44.2 45.5 44.6 43.9C45.1 42.2 45.6 38.6 45.6 38.6Z"/>'
    },
    {
      id: "coffee-hot-water",
      name: "Hot water",
      category: "coffee",
      aka: ["hot water", "water for tea", "Americano water", "hot water spout", "tea"],
      looksLike: ["cup with steam", "steaming cup", "cup with wavy lines", "hot cup", "tea cup with steam", "cup with squiggles", "empty cup with steam"],
      meaning:
        "Dispenses plain hot water (for tea, an Americano or warming cups) from a separate hot-water spout or the steam nozzle. So yes, the coffee machine does tea, more or less. Philips draws a steaming cup; on De'Longhi and Sage it's a position on the steam / hot water dial.",
      action:
        "Take any milk jug or carafe off first if it sits on the same spout (Philips LatteGo does). Put a cup under the right spout before you press it: the water comes out very hot.",
      tip: "Warming the cup with a splash of hot water first is the easiest route to hotter coffee. It's the first thing De'Longhi suggests if your coffee comes out lukewarm.",
      // Philips hot water, traced.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.4 13.2C28.4 13.2 28.6 13.1 28.9 13.6C29.1 14 29.9 15.8 29.9 15.8C29.9 15.8 28.1 17.5 27.6 18.1C27 18.6 27 18.9 26.9 19.4C26.7 19.8 26.4 19.9 26.9 20.9C27.4 22 29.2 24.6 29.9 25.9C30.5 27.1 30.6 28.6 30.6 28.6L27.6 29.4C27.6 29.4 27.2 27.5 26.6 26.4C26.1 25.2 24.6 23.7 24.1 22.6C23.7 21.4 23.6 20.6 23.8 19.6C23.9 18.5 24.2 17.4 24.9 16.4C25.7 15.3 28.4 13.2 28.4 13.2ZM36.9 13.2L38.4 15.9C38.4 15.9 37.2 16.7 36.8 17.1C36.3 17.6 35.8 18.1 35.5 18.8C35.3 19.4 34.8 19.7 35.2 20.9C35.7 22 37.6 24.4 38.2 25.8C38.9 27.1 39 28.9 39 28.9L35.9 28.4C35.9 28.4 35.6 27.2 35.1 26.4C34.7 25.7 33.6 24.5 33.1 23.6C32.7 22.8 32.4 22.4 32.2 21.6C32.1 20.8 32.1 19.6 32.2 18.9C32.4 18.1 32.5 17.8 32.9 17.2C33.2 16.7 33.5 16.1 34.1 15.4C34.8 14.8 36.9 13.2 36.9 13.2ZM19.9 14.2L21.4 16.9C21.4 16.9 19.2 18.8 18.8 19.6C18.2 20.5 17.9 20.7 18.4 22.1C18.9 23.4 21.1 26.3 21.8 27.6C22.4 29 22.2 29.5 22.2 29.9C22.3 30.4 22.2 30.6 22.2 30.6C22.2 30.6 22.3 30.9 21.8 30.9C21.2 31 19.1 30.6 19.1 30.6C19.1 30.6 19.2 29.5 18.8 28.4C18.3 27.4 16.7 25.6 16.1 24.4C15.6 23.3 15.4 22.5 15.2 21.6C15.1 20.8 15.2 20.2 15.4 19.6C15.6 18.9 16 18.1 16.4 17.4C16.9 16.8 17.7 16 18.2 15.4C18.8 14.9 19.9 14.2 19.9 14.2ZM7.3 30.8L10.2 30.9C10.2 30.9 10.2 35.4 10.2 37C10.3 38.7 10.4 39.4 10.8 40.8C11.1 42.1 11.4 43.8 12.1 45.5C12.7 47.1 14.6 50.6 14.6 50.6C14.6 50.6 11 50.7 10.2 50.6C9.5 50.6 10.1 51 9.8 50.2C9.6 49.5 8.9 47.7 8.6 46.1C8.2 44.6 7.8 42.6 7.5 40.9C7.3 39.1 7.2 37.1 7.2 35.5C7.1 33.8 7.3 30.8 7.3 30.8ZM44.6 30.8C44.6 30.8 49.4 30.6 51 30.9C52.6 31.1 53.5 31.8 54.2 32.4C55 32.9 55.5 33.6 55.9 34.2C56.2 34.9 56.5 35.2 56.6 36.1C56.8 37.1 56.9 38.8 56.6 40C56.4 41.1 55.6 42.3 55 43C54.3 43.8 53.7 44.2 53 44.5C52.2 44.9 51.8 45.1 50.8 45.2C49.7 45.4 46.5 45.4 46.5 45.4L44.5 50.6L40.1 50.6C40.1 50.6 42.1 46.8 42.8 45.4C43.4 43.9 43.5 43.4 43.8 42C44 40.5 44.4 38.4 44.5 36.5C44.7 34.7 44.6 30.8 44.6 30.8ZM47.8 34C47.8 34 50.2 34 51 34.1C51.7 34.3 51.8 34.5 52.1 34.9C52.5 35.2 53.1 35.6 53.4 36.4C53.6 37.1 53.7 38.4 53.5 39.1C53.4 39.9 53 40.3 52.6 40.8C52.3 41.2 51.8 41.5 51.4 41.8C50.9 42 50.6 42.1 49.9 42.1C49.1 42.2 47 42 47 42C47 42 47.4 40.6 47.5 39.2C47.7 37.9 47.8 34 47.8 34ZM31.6 32.4C33.6 32 35 32.2 36.5 32.4C38 32.5 40.6 33.1 40.6 33.1C40.6 33.1 41.1 33.5 41.1 34C41.2 34.6 40.9 36.5 40.9 36.5C40.9 36.5 37.9 35.8 36.5 35.6C35.2 35.5 33.8 35.5 32.5 35.6C31.3 35.8 30.3 36 29.1 36.4C28 36.7 27.2 37.4 25.6 37.6C24.1 37.9 21.9 38.1 20.1 38C18.2 38 15.8 37.3 14.8 37.1C13.9 37 14.3 37 14.2 36.9C14 36.7 13.7 36.5 13.7 36C13.6 35.4 13.8 33.6 13.8 33.6C13.8 33.6 16.5 34.4 17.8 34.6C19 34.9 20.3 34.9 21.4 34.9C22.6 34.8 23.2 34.9 24.9 34.5C26.6 34 29.7 32.7 31.6 32.4Z"/>'
    },
    {
      id: "coffee-steam",
      name: "Steam (milk frothing)",
      quiz: "Froth milk with the wand",
      category: "coffee",
      aka: ["steam", "steam wand", "milk frother", "cappuccino maker", "Pannarello", "froth milk", "steam button"],
      looksLike: ["cloud with lines", "lines going into a cloud", "puff of smoke", "three lines and a cloud", "nozzle with steam", "cloud", "jets into a cloud"],
      meaning:
        "Turns on steam for frothing milk through the steam wand (also called the cappuccino maker or frother). De'Longhi and Philips both draw three jets going into a puff of cloud.",
      action:
        "On De'Longhi, press the steam button, dip the frother into a jug of cold milk and, when the light flashes, turn the steam dial to I. Turn it back to 0 before you lift the jug away, or hot milk spits everywhere. Afterwards, run hot water through it for a few seconds and wash the frother so milk doesn't dry inside.",
      tip: "Steam scalds in an instant: keep hands clear of the nozzle and never point it at anyone. Many machines cut the steam after a few minutes as a safety measure (De'Longhi after 3). Wait a moment and start it again.",
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
        "One-touch milk drinks on machines with a milk carafe or jug (Philips LatteGo, De'Longhi LatteCrema, Jura, Melitta and others). A cup with a dome of foam (or a hat, depending how you squint) usually means cappuccino; a tall glass with layers means latte macchiato.",
      action:
        "Fill the milk container with cold milk and attach it before you press. Rinse the milk parts after every use (Philips says LatteGo can simply be rinsed under the tap or put in the dishwasher), because dried-on milk blocks the frother and goes sour quickly.",
      tip: "Cold milk straight from the fridge froths best. De'Longhi's troubleshooting puts big bubbles down to milk that isn't cold enough, and recommends skimmed or semi-skimmed.",
      // Philips cappuccino, traced.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.6 15.4C31.6 15.4 33.2 15.6 33.8 15.8C34.3 15.9 34.2 15.7 35 16.4C35.7 17 37.1 19.2 38 19.9C39 20.5 40.1 20 40.9 20.1C41.6 20.3 42.1 20.5 42.6 20.9C43.2 21.4 43.8 21.9 44 22.9C44.3 24 44.1 27.1 44.1 27.1L10.3 27.1C10.3 27.1 10.1 25.4 10.3 24.8C10.6 24.1 11 23.5 11.8 23.1C12.5 22.8 12.9 22.6 14.8 22.4C16.6 22.3 20.8 22.3 22.6 22.1C24.5 22 25.1 21.7 26.1 21.4C27.2 21 28.2 20.5 28.9 20.1C29.6 19.6 29.9 19.4 30.4 18.6C30.8 17.9 31.6 15.4 31.6 15.4ZM7.2 28.8L10.1 28.8C10.1 28.8 10.2 28.1 10.2 29.1C10.3 30 10.1 32.7 10.2 34.5C10.2 36.2 10.4 38.1 10.8 39.8C11.1 41.4 11.5 42.7 12.1 44.1C12.6 45.6 14.1 48.5 14.1 48.5L9.8 48.5C9.8 48.5 9.5 48.5 9.1 46.9C8.6 45.2 7.6 41.6 7.2 38.5C6.9 35.5 7.2 28.8 7.2 28.8ZM44.5 28.8C44.5 28.8 49.5 28.6 51.1 28.9C52.8 29.1 53.5 29.9 54.2 30.4C55 30.8 55 30.9 55.4 31.4C55.8 32 56.4 32.7 56.6 33.8C56.9 34.8 57.1 36.5 56.9 37.8C56.6 39 55.8 40.2 55.1 41C54.5 41.9 53.8 42.3 53 42.8C52.2 43.2 51.4 43.4 50.4 43.5C49.3 43.7 46.5 43.6 46.5 43.6L44.8 48.5L40.5 48.5C40.5 48.5 42.1 45.3 42.6 43.8C43.2 42.2 43.7 40.5 44 39C44.2 37.6 44.4 37 44.5 35.2C44.6 33.5 44.5 28.8 44.5 28.8ZM47.9 31.9C47.9 31.9 50.1 32 50.9 32.1C51.6 32.3 51.8 32.5 52.2 33C52.7 33.4 53.3 34.1 53.5 34.8C53.8 35.4 53.8 36.1 53.8 36.6C53.7 37.2 53.5 37.7 53.2 38.1C53 38.6 52.8 38.9 52.4 39.2C51.9 39.6 51.3 40.1 50.5 40.2C49.6 40.4 47.1 40.1 47.1 40.1L47.9 31.9Z"/><polygon fill="currentColor" stroke="none" points="13.4,31.0 41.1,31.0 41.1,34.2 13.4,34.2"/><polygon fill="currentColor" stroke="none" points="13.9,37.5 40.7,37.5 40.7,40.8 13.9,40.8"/>'
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
        "Tap the bean button (or turn the dial) before you press the drink. Coffee dripping out slowly? Go down a step. Weak and watery? Go up a step or grind finer. On a Melitta Solo, a flashing bean means the hopper's empty: top up the beans.",
      tip: "Holding the strength button for 3 seconds on a Philips switches to pre-ground coffee (the scoop lights up). On a De'Longhi Magnifica S, turning the dial all the way down to the scoop does the same.",
      // De'Longhi aroma: two coffee beans.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M17.2 18.4C17.9 18.1 18.4 18.6 18.4 18.6L18.1 44C18.1 44 17.6 44.1 17.1 44C16.5 43.8 15.8 43.6 14.9 43C14.1 42.3 12.6 41 11.8 40C10.9 38.9 10.4 37.8 9.9 36.5C9.5 35.3 9.2 34 9.1 32.6C8.9 31.2 8.9 29.7 9.2 28.1C9.6 26.6 10.2 24.8 11.1 23.4C11.9 22.1 13.1 20.8 14.2 19.9C15.2 19.1 16.6 18.6 17.2 18.4ZM21.9 18.4C21.9 18.4 22.1 18.2 22.6 18.4C23.1 18.5 24.1 18.8 24.9 19.4C25.6 19.9 26.6 20.5 27.4 21.4C28.1 22.4 29 23.6 29.6 24.9C30.1 26.1 30.6 27.3 30.8 28.9C30.9 30.6 30.9 32.9 30.6 34.5C30.2 36.2 29.7 37.4 28.9 38.6C28.2 39.9 27.1 41.2 26.1 42.1C25 43 23.1 43.8 22.4 44C21.6 44.3 21.4 43.9 21.4 43.9C21.4 43.9 21.4 23.1 21.4 18.9C21.5 14.6 21.9 18.4 21.9 18.4ZM45.5 22.9C46.5 22.8 48.1 23 48.8 23.1C49.4 23.3 49.4 23.8 49.4 23.8C49.4 23.8 51.3 20.9 49.2 24.1C47.2 27.4 39.1 39.9 37 43C34.8 46.2 36.4 43.2 36.4 43.2C36.4 43.2 34.8 41.3 34.4 40.4C33.9 39.4 33.7 38.7 33.6 37.5C33.6 36.4 33.7 34.8 33.9 33.6C34 32.5 34.3 31.9 34.8 30.9C35.2 30 35.9 28.7 36.6 27.8C37.4 26.8 38 26.1 39 25.4C39.9 24.8 41.2 24 42.2 23.6C43.3 23.1 44.4 22.9 45.5 22.9ZM52 25.4C52 25.4 52.2 25.3 52.5 25.6C52.7 25.8 53.2 26.4 53.5 26.9C53.9 27.5 54.2 28.2 54.5 28.9C54.7 29.7 55 30.2 55 31.4C55 32.5 54.8 34.6 54.5 36C54.1 37.3 53.5 38.5 52.8 39.6C52 40.8 50.9 42.1 49.8 43C48.6 44 47.2 44.7 46.1 45.1C45 45.6 44.3 45.8 43.1 45.9C42 45.9 39.4 45.2 39.4 45.2L39.1 44.6C39.1 44.6 37.5 47.1 39.6 43.9C41.8 40.6 52 25.4 52 25.4Z"/>'
    },
    {
      id: "coffee-pre-ground",
      name: "Pre-ground coffee (scoop)",
      category: "coffee",
      aka: ["pre-ground", "ground coffee", "powder", "decaf", "bypass doser", "measuring scoop", "coffee powder"],
      looksLike: ["spoon", "scoop", "spoon with powder", "measuring spoon", "spoon with a pile", "ladle", "spoon with dots", "spoon with a heap on it"],
      meaning:
        "Tells the machine to use ground coffee you've tipped into the separate chute instead of grinding beans. Handy for decaf. De'Longhi, Philips and Jura all draw a measuring scoop with a heap of coffee on it.",
      action:
        "Select it, then add ONE level scoop (the one that came with the machine) to the pre-ground chute. Never beans, never more than one scoop, and only with the machine switched on. It makes one cup at a time, and on Philips you have to choose it again each time.",
      tip: "Selected it with nothing in the chute? De'Longhi tells you by flashing its grounds-container light, which is not the most obvious way to put it. A chute clogged with powder can be cleared with the scoop handle (Philips' tip) or as your manual shows.",
      svg:
        '<path d="M8 36H31A11.5 11.5 0 0 1 8 36Z" stroke-width="3.5"/><path d="M31 36H56" stroke-width="4"/>' +
        '<path fill="currentColor" stroke="none" d="M10 34.5C11.5 27 15 23.5 19.5 23.5C24 23.5 27.5 27 29 34.5Z"/>' +
        '<g fill="currentColor" stroke="none"><circle cx="14.5" cy="17" r="2"/><circle cx="21" cy="14" r="2"/><circle cx="25.5" cy="19" r="2"/></g>'
    },
    {
      id: "coffee-thermometer",
      name: "Thermometer (heating up / temperature)",
      quiz: "Coffee temperature",
      category: "coffee",
      aka: ["temperature", "heating up", "warming up", "hot/cold", "coffee temperature", "thermometer light", "cold mode"],
      looksLike: ["thermometer", "thermometer with lines", "temperature", "thermometer with bars", "red thermometer", "blue thermometer", "flashing thermometer"],
      meaning:
        "It means different things on different machines, which is the least helpful thing a symbol can do. On De'Longhi's Magnifica S it's a light that flashes while the machine heats up and goes out when it's ready; on some Philips models it's the coffee temperature setting. On a Dolce Gusto Genio S it's the hot/cold button: red for hot drinks, blue for cold, blinking blue while the machine cools down.",
      action:
        "If it's flashing while the machine heats up, just wait. If the coffee comes out lukewarm, look for a temperature setting (Philips and De'Longhi have one) and warm the cup with hot water first.",
      tip: "On a Genio S, only use cold mode with the cold-drink capsules (Cappuccino Ice, for example), and switch back to hot (red) for everything else.",
      svg:
        '<path d="M24 37.5V14A5 5 0 0 1 34 14V37.5A9.5 9.5 0 1 1 24 37.5Z"/>' +
        '<circle cx="29" cy="45" r="4.5" fill="currentColor" stroke="none"/><path d="M29 44V24" stroke-width="3.5"/>' +
        '<path d="M40 15H46M40 22H46M40 29H46" stroke-width="3"/>'
    },
    {
      id: "coffee-flashing-power",
      name: "Flashing lights while warming up",
      quiz: "Still heating up, not ready yet",
      category: "coffee",
      urgency: "info",
      aka: ["blinking", "flashing", "warming up", "heating up", "power light flashing", "not ready", "blinking buttons"],
      looksLike: ["flashing power button", "blinking light", "flashing light", "power symbol with lines", "light blinking", "all lights flashing", "pulsing light", "flashing red light"],
      meaning:
        "Nearly every coffee machine blinks while it heats up and goes steady when it's ready. Sage flashes the POWER button; Nespresso Original blinks its buttons slowly for about 25 seconds; Dolce Gusto machines with one light blink red for about 40 seconds, then go green; Philips lights its drink buttons one after another; Tassimo flashes the cup light.",
      action:
        "Wait until the light stays steady, then press your drink. A different pattern means something else: fast, even blinking on a Nespresso Original means it's in descaling mode (hold both buttons for about 5 seconds to get out), and a Sage whose steam light flashes at switch-on wants the steam dial turned back to STANDBY.",
      tip: "Every light flashing at once usually means a fault, not heating. Unplug it for a few minutes and try again, and call the maker if it keeps happening. After lots of drinks in a row some machines stop and blink to cool down: Dolce Gusto asks for 20 minutes off, Nespresso at least 30.",
      svg:
        '<path d="M26 24.5A10.5 10.5 0 1 0 38 24.5" stroke-width="3.5"/><path d="M32 19.5V31" stroke-width="3.5"/>' +
        '<path stroke-width="3" d="M32 6V11M50.38 13.62L46.85 17.15M58 32H53M50.38 50.38L46.85 46.85M32 58V53M13.62 50.38L17.15 46.85M6 32H11M13.62 13.62L17.15 17.15"/>'
    },
    {
      id: "coffee-pressure-gauge",
      name: "Pressure gauge (Sage espresso machines)",
      quiz: "Espresso extraction pressure",
      category: "coffee",
      aka: ["pressure gauge", "espresso range", "extraction gauge", "Barista Express gauge", "pre-infusion", "Breville gauge"],
      looksLike: ["dial", "gauge", "speedometer", "dial with a grey zone", "needle", "clock with one hand", "meter", "pressure dial"],
      meaning:
        "Shows the pressure of the water going through the coffee while a shot pours, on the Sage Barista Express (sold as Breville in many countries) and similar machines. The needle starts low in the PRE-INFUSION zone, then should settle in the grey ESPRESSO RANGE band. Below the band means under-extracted (runs fast, thin and watery); above it means over-extracted (runs slowly, dark and bitter).",
      action:
        "Needle too low: grind finer, use a little more coffee or tamp harder. Too high: grind coarser or use a little less. Change one thing at a time, tempting as it is to change everything; Sage's guide says a good shot starts to flow after 8–12 seconds and takes 25–30 seconds in all.",
      tip: "Needle hardly moving? Sage's troubleshooting blames too little coffee in the basket or stale beans. Use beans roasted within the last four weeks, and the supplied Razor tool to check the dose.",
      svg:
        '<circle cx="32" cy="32" r="26" stroke-width="3"/>' +
        '<path d="' + "M" + xy(pt(32, 32, 18.5, 200)) + "A18.5 18.5 0 0 1 " + xy(pt(32, 32, 18.5, 320)) + '" stroke-width="7" stroke-linecap="butt"/>' +
        '<path stroke-width="2.5" d="M' + xy(pt(32, 32, 15, 135)) + "L" + xy(pt(32, 32, 22, 135)) + "M" + xy(pt(32, 32, 15, 45)) + "L" + xy(pt(32, 32, 22, 45)) + '"/>' +
        '<path d="M32 32L' + xy(pt(32, 32, 19, 245)) + '" stroke-width="3.5"/><circle cx="32" cy="32" r="4" fill="currentColor" stroke="none"/>'
    },
    {
      id: "coffee-vertuo-light",
      name: "Nespresso Vertuo orange light",
      quiz: "Status light with blink codes",
      category: "coffee",
      color: "amber",
      urgency: "soon",
      aka: ["Vertuo", "Vertuo Next", "Vertuo Pop", "descaling alert", "orange light", "blinking orange", "Nespresso light"],
      looksLike: ["flashing orange light", "orange light", "blinking orange", "orange button", "light blinks three times", "orange and white light", "yellow light"],
      meaning:
        "Newer Vertuo machines (Next, Pop) talk through the light on their one button, and that one light has a lot to say. Blinking white means heating up and steady white means ready. Steady white broken by three orange blinks, over and over, is the descaling alert. Fast, continuous orange blinking means the machine is in descaling (or emptying) mode.",
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
      quiz: "Saves power between drinks",
      category: "coffee",
      color: "green",
      aka: ["ECO", "energy saving", "standby", "auto-off", "eco mode", "power saving"],
      looksLike: ["eco", "the word eco", "green eco light", "eco light", "dim lights", "all lights dim"],
      meaning:
        "Energy-saving mode is on: the machine doesn't keep itself fully hot between drinks. On De'Longhi's Magnifica S it's a green ECO light (the same light also shows the auto-off time while you set it). On a Melitta Solo, all the symbols glowing faintly means the same thing; it looks half asleep, which is rather the point.",
      action:
        "Nothing's wrong. The first coffee after a pause may take a few extra seconds while it heats up again. You can switch it off in the settings: on a Magnifica S, hold the steam button until ECO lights up, then follow the steps in the manual.",
      tip: "Separate from ECO, an auto-off timer decides when the machine switches itself off: 15 minutes to 3 hours on De'Longhi and Philips bean-to-cups, 9 or 30 minutes on a Nespresso Essenza Mini.",
      svg: '<text x="32" y="40" font-size="22">ECO</text>'
    }
  ]);
})();
