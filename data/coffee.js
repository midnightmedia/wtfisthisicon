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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.9 7.3C16.5 7.9 16.7 9.7 16.7 10.5C16.7 13.2 16.7 16 16.7 18.8C16.7 27.9 16.7 37 16.7 46.2C16.7 48.7 16.7 51.2 16.7 53.7C16.7 54.5 16.5 56.1 16.9 56.8C17.3 57.1 20.6 57.1 21.1 56.8C21.4 56.2 21.2 51.7 21.2 50.6C21.2 50 21 48.9 21.5 48.4C22.3 48.4 23.2 49.1 23.9 49.5C24.9 49.9 29.4 52.3 30.1 52.3C30.5 51.9 30.3 51.1 30.4 50.5C30.4 49 30.6 47.4 30.6 45.9C30.6 45.3 30.9 44.6 30.5 44.1C29.7 44 28.9 44.6 28.1 44.9C26.7 45.5 25.2 46.1 23.7 46.8C23.1 47 22.1 47.7 21.4 47.5C21 46.8 21.2 43.2 21.2 42.1C21.2 37.8 21.2 33.4 21.2 29.1C21.2 28.1 21 23.9 21.4 23.4C22.2 23.3 22.9 24 23.6 24.3C25.1 24.9 26.5 25.8 28 26.4C28.7 26.7 29.4 27.3 30.1 27.1C30.5 26.7 30.3 25.9 30.3 25.3C30.3 23.8 30.3 22.4 30.3 21C30.3 20.4 30.5 19.6 30.2 19.1C29.6 18.8 28.7 19.5 28.1 19.7C26.8 20.2 22.4 22.4 21.4 22.4C21 21.9 21.2 19.9 21.2 19.2C21.2 16.4 21.2 13.6 21.2 10.8C21.2 10 21.5 7.9 20.9 7.3C20.2 7 17.6 7 16.9 7.3ZM43 7.3C42.5 8 42.7 9.8 42.7 10.6C42.7 13.4 42.7 16.2 42.7 19C42.7 28 42.7 36.9 42.7 45.9C42.7 48.4 42.7 50.9 42.7 53.5C42.7 54.3 42.5 56 42.9 56.8C43.3 57.1 46.6 57.1 47.1 56.8C47.5 56.2 47.3 54.4 47.3 53.6C47.3 50.9 47.3 48.2 47.3 45.5C47.3 36.2 47.3 27 47.3 17.8C47.3 15.3 47.3 12.8 47.3 10.3C47.3 9.5 47.5 8 47.1 7.4C46.5 7 43.6 7 43 7.3ZM21.8 12C21.7 12.6 22.3 13.4 22.5 13.9C22.9 14.9 24.6 19 25.2 19.5C25.9 19.3 26.3 18.4 26.7 17.9C27.4 17.1 28.1 16.5 28.8 15.7C29.3 15.1 29.8 14.5 30.3 13.8C30.7 13.4 31.7 12.8 31.7 12.1C31.1 11.8 30.1 11.9 29.4 11.9C28.2 11.9 27 11.9 25.7 11.9C25.3 11.9 24.8 11.9 24.3 11.9C23.7 11.8 22.3 11.7 21.8 12ZM31.4 16.3C31.5 16.9 32.3 17.4 32.7 17.8C33.6 18.6 36.4 21.7 37.4 21.9C37.9 21.6 38.1 20.3 38.2 19.7C38.8 18 39.4 16.4 39.9 14.6C40.1 14.1 40.7 13 40.4 12.5C39.9 12.3 38.9 13 38.3 13.2C36.7 13.7 35.2 14.5 33.7 15.2C33 15.5 31.8 15.7 31.4 16.3ZM32 21.8C32.1 22.5 34.9 27.2 35.5 28.1C35.9 28.7 36.2 29.8 36.9 30.1C37.4 30 37.6 29.3 38 28.9C38.2 28.6 38.4 28.2 38.6 27.9C39.3 26.9 40.1 26 40.7 25C41.1 24.5 41.7 24.1 41.6 23.4C41.2 22.9 40.6 23.2 40.1 23C39.4 22.7 38.9 22.8 38.2 22.6C37.9 22.6 37.6 22.3 37.3 22.2C37.1 22.1 36.8 22.3 36.5 22.3C36 22.2 35.6 22 35.1 21.9C34.9 21.8 34.6 21.9 34.3 21.9C33.6 21.8 32.5 21 32 21.8ZM23 27C22.7 27.6 23.4 28.6 23.6 29.2C24.4 30.7 24.9 32.4 25.7 33.9C26 34.6 26.1 35.6 26.8 36C27.4 35.9 27.8 35 28.2 34.6C28.9 33.7 32.2 30.8 32.2 29.9C31.5 29.2 28.9 28.7 27.9 28.4C27.3 28.2 26.8 27.9 26.1 27.7C25.9 27.6 25.6 27.6 25.3 27.5C24.8 27.3 23.5 26.7 23 27ZM31.6 33.3C32 34 33.3 34.4 34 34.7C35.7 35.4 37.4 36.4 39.1 37.2C39.5 37.3 39.9 37.6 40.3 37.7C40.8 37.4 40.7 36.5 40.7 35.9C40.7 34.5 40.5 32.9 40.7 31.5C40.7 30.9 40.9 29.8 40.5 29.4C39.9 29.3 39.2 29.8 38.7 30.1C37 30.7 35.4 31.6 33.6 32.2C33.2 32.4 31.8 32.9 31.6 33.3ZM22.1 38C21.9 38.6 22.4 39.5 22.7 40C23.4 41.2 23.7 42.7 24.4 43.9C24.7 44.4 24.8 45.2 25.4 45.4C26.2 45.1 26.8 44.2 27.3 43.5C28.1 42.6 31.5 39 31.7 38.2C31.3 37.7 30.1 38 29.4 38C27.7 38 25.9 37.9 24.2 37.9C23.5 37.9 22.6 37.7 22.1 38ZM31.4 43.1C31.6 43.5 35.7 46.5 36.4 46.9C36.8 47.2 37.4 47.9 38 47.8C38.5 47.2 38.9 44.2 39.1 43.4C39.1 43 39.3 42.8 39.4 42.5C39.5 42 39.4 41.6 39.5 41.2C39.7 40.7 40.2 38.5 40.1 38.2C39.5 38 38.6 38.8 38.1 39.1C36.5 40 34.9 40.9 33.3 41.7C32.7 42 31.6 42.4 31.4 43.1ZM32.9 47.5C32.7 48 33.2 49.2 33.5 49.8C33.6 50.1 33.6 50.4 33.7 50.7C34.2 52.1 34.6 53.6 35.1 55C35.4 55.6 35.4 56.4 36 56.8C37 56.5 39.5 53.7 40.4 52.9C40.9 52.4 41.7 52 42 51.4C41.7 50.7 40.7 50.6 40.1 50.3C38.5 49.6 36.7 49 35.1 48.2C34.6 47.9 33.5 47.2 32.9 47.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8 10.8C7.7 10.8 7.4 11 7.2 11.3C6.7 12.1 7 15 7 16.1C7 21.7 7 27.3 7 32.9C7 35.1 7 37.3 7 39.5C7 40.4 6.9 41.5 7 42.5C7.2 43.9 7.5 45.3 8.1 46.6C9.2 49.1 11.1 51.5 13.8 52.6C15.7 53.4 17.9 53.2 19.9 53.2C23.3 53.2 26.7 53.2 30.1 53.2C34.6 53.2 39 53.2 43.4 53.2C46.2 53.2 48.8 53.5 51.3 52.1C54.2 50.4 56.7 47 57 43.5C57.1 41.5 57 39.5 57 37.5C57 29.7 57 21.9 57 14C57 13.2 57.2 12.1 56.9 11.4C56.5 10.5 54.8 10.6 54.3 11.3C54 11.8 54.2 13.2 54.2 13.7C54.2 15.8 54.2 17.9 54.2 19.9C54.2 25.5 54.3 31.2 54.1 36.8C54.1 39.5 54.6 42.5 53.5 45.2C52.7 47.4 50.4 50 47.9 50.2C46.2 50.4 44.4 50.2 42.7 50.2C39.8 50.2 36.8 50.2 33.9 50.2C29.5 50.2 25.2 50.2 20.9 50.2C19.3 50.2 16.2 50.5 14.8 49.9C12.4 48.9 10.8 46.3 10.2 43.8C9.9 42.5 10 41.2 10 39.9C10 38.3 10 36.7 10 35.1C10 29.5 10 24 10 18.4C10 16.8 10 15.1 10 13.5C10 12.9 10.1 11.9 9.8 11.3C9.5 10.7 8.6 10.7 8 10.8ZM28 27.6C27.8 27.4 27.8 27.1 27.6 26.8C27.4 26.2 26.9 25.6 26.3 25.3C25.7 24.8 25 24.7 24.3 24.7C19.7 24.7 19.9 31.8 24.4 31.8C25.1 31.8 25.8 31.5 26.3 31.2C26.9 30.8 27.4 30.2 27.7 29.5C27.8 29.3 27.8 29 28 28.8C28.7 29.6 28.6 30.5 29.8 31.1C30.4 31.5 31 31.6 31.7 31.6C32.3 31.6 32.9 31.5 33.4 31.2C36.8 29.1 34.9 23.9 31 24.7C30.5 24.8 30 25 29.6 25.3C28.6 26.1 28.6 26.7 28 27.6ZM42.8 29.3C43 29.5 43.1 29.8 43.3 30C43.9 31 45 31.6 46 31.8C47.9 32 50.1 29.9 49.9 28.1C49.6 25.8 47.8 24.4 45.6 24.7C44.8 24.9 43.8 25.5 43.4 26.2C43.2 26.6 43.1 26.9 42.8 27.1C42 26.2 42 25.6 40.9 25C40.1 24.6 39.3 24.6 38.5 24.7C34.7 25.5 35 31.4 38.9 31.6C39.5 31.6 40 31.7 40.6 31.4C41.3 31.1 41.9 30.6 42.3 29.9C42.5 29.7 42.5 29.4 42.8 29.3ZM28.1 41.5C27.4 40.6 27.4 39.9 26.4 39.2C22.9 36.9 19 41.7 22.1 44.7C22.6 45.3 23.6 45.7 24.4 45.7C25 45.7 25.7 45.6 26.2 45.2C26.9 44.9 27.4 44.3 27.7 43.7C27.8 43.4 27.9 43 28.2 42.8C28.8 43.6 28.8 44.4 29.8 45C30.3 45.4 30.8 45.5 31.4 45.6C32.4 45.7 33.5 45.4 34.2 44.6C37.1 41.8 33.7 37.1 30.1 39C28.5 39.8 28.7 41 28.1 41.5ZM42.8 42.9C43 43.1 43.1 43.4 43.2 43.7C43.6 44.4 44.2 45 44.9 45.4C45.5 45.6 46.3 45.8 47 45.6C47.8 45.4 48.5 45.1 49.1 44.4C51.1 42.1 49.4 38.7 46.4 38.7C45.8 38.7 45.2 38.8 44.6 39.1C44 39.5 43.5 40.1 43.2 40.7C43.1 41 43 41.3 42.8 41.5C42.4 41.3 42.3 40.6 42 40.2C41.4 39.4 40.5 38.8 39.5 38.7C38.6 38.6 37.4 39 36.8 39.6C33.6 42.9 37.5 47.2 40.7 45.4C41.5 45 42 44.5 42.4 43.7C42.5 43.4 42.6 43.1 42.8 42.9Z"/><g fill="currentColor" stroke="none"><circle cx="17.03" cy="28.09" r="3.53"/><circle cx="16.86" cy="42.2" r="3.53"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.9 7.2C20.6 7.8 20.8 9.9 20.8 10.6C20.8 13.6 20.8 16.6 21.2 19.5C21.5 21.5 20.9 23.9 21.2 25.9C21.5 28.4 21.6 30.9 21.6 33.5C21.6 34.7 21.4 36.1 21.6 37.3C21.8 38.9 21.9 40.6 22 42.2C22 44.3 21.9 46.4 22 48.5C22.1 49.6 22 51.1 22.4 52.1C22.6 52.7 25 54.8 25.6 55.3C26.2 55.8 26.7 56.8 27.5 56.9C28.1 57.1 28.9 57 29.5 57C31 57 32.5 57 33.9 57C34.6 57 36 57.2 36.6 56.9C37.4 56.6 38.5 55 39.3 54.4C39.8 53.9 41.3 52.6 41.5 52.1C41.8 51.5 41.7 50.7 41.8 50.1C42.1 47.9 42 45.6 42 43.4C42 42.7 41.9 42 42 41.3C42.1 39.7 42.2 38.1 42.4 36.5C42.6 34.5 42.1 31.9 42.4 30C42.8 27.1 42.8 24.2 42.8 21.3C42.8 17.9 43.2 14.5 43.2 11.1C43.2 10.2 43.4 7.9 43.1 7.2C42.6 6.9 39.8 6.8 39.3 7.2C39 7.8 39.1 9.4 39 10.1C38.8 12.3 38.8 14.5 38.8 16.7C38.8 17.6 38.9 18.6 38.8 19.6C38.6 21.1 38.4 22.8 38.4 24.4C38.4 25.9 38.4 27.4 38.4 28.9C38.4 29.5 38.5 30.2 38.4 30.8C38.2 32.4 38 34 38 35.6C37.9 39.4 38.1 43.1 37.6 46.8C37.5 47.6 37.7 48.5 37.6 49.3C37.5 49.9 36.3 50.9 35.8 51.3C35.4 51.8 34.9 52.6 34.3 52.9C33.8 53.1 32.9 53 32.3 53C31.6 53 30.3 53.1 29.7 52.9C29.3 52.8 26.6 49.9 26.5 49.6C26.2 49 26.4 47.3 26.3 46.6C26.1 44 26 41.4 26 38.7C26 36.3 25.8 33.9 25.6 31.6C25.5 31 25.6 30.4 25.6 29.8C25.6 28.2 25.6 26.7 25.6 25.2C25.5 22.9 25.2 20.6 25.2 18.3C25.2 16.9 25.3 15.4 25.2 14C25.1 12.7 24.9 11.4 24.9 10.1C24.8 9.3 25 7.7 24.6 7.1C24 6.9 21.3 6.8 20.9 7.2Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M53.1 16C53.3 15.6 53.3 13 53 12.6C52.1 11.5 48.2 9.5 46.9 8.9C39.6 5.9 31.3 6.7 24.5 10.6C22.5 11.8 20.2 13.6 18.7 15.4C18.5 15.7 18.1 16 18 16.4C17.6 17.2 18.6 18.1 19.4 18.1C20.2 18.2 20.7 17.1 21.2 16.7C22.5 15.3 23.9 14.2 25.5 13.2C29.5 10.7 34.8 9.2 39.5 9.9C39.8 10 40.1 9.9 40.3 9.9C43.4 10.4 46.4 11.5 49 13.1C49.8 13.6 50.6 14.1 51.3 14.7C51.8 15.1 52.3 15.7 52.8 16C53 16.1 52.9 16 53.1 16ZM48.3 14.9C47.3 15.1 46.4 15.7 45.5 16.2C43.4 17.3 39.4 19.9 38.1 21.9C37.6 22.6 37 23.3 36.6 24.2C35.3 27.3 36.9 31 40 32.3C43.2 33.7 47.1 31.9 48.2 28.6C48.4 27.9 48.7 27.1 48.5 26.4C48.1 24.5 48.3 21 48.8 19.2C49 18.4 49.7 17.1 49.8 16.4C49.9 15.6 49.1 14.8 48.3 14.9ZM33.4 19.2C32.6 19.4 31.8 20 31.1 20.4C28.7 21.6 26.6 23.1 24.7 24.8C24.1 25.2 23.8 25.8 23.3 26.3C20.1 29.5 21 34.8 25.2 36.6C28.7 38.1 32.8 35.9 33.6 32.3C33.8 31.7 33.7 31.2 33.7 30.6C33.7 29.9 33.5 29.3 33.5 28.6C33.5 27.5 33.5 26.3 33.7 25.2C33.8 24.2 34.1 23.2 34.5 22.2C34.6 21.8 34.9 21.4 35 20.9C35.1 20 34.4 19 33.4 19.2ZM45.9 19.2C46.1 19.8 45.7 21 45.6 21.7C45.6 22.3 45.6 23 45.6 23.6C45.6 24.3 45.5 25 45.6 25.6C45.7 26.1 45.9 26.5 45.9 26.9C45.4 29.9 41.6 31.3 39.7 28.8C37.4 25.9 40.6 22.6 43 21C43.6 20.6 45.2 19.2 45.9 19.2ZM31.1 23.6C31.2 23.7 31.1 23.5 31.2 23.7C31.2 24.3 31 24.9 30.9 25.4C30.9 26.2 30.8 27 30.8 27.8C30.8 29.3 31.4 31.3 30.6 32.7C29.2 35.1 25.7 34.8 24.5 32.5C22.8 29.5 26.7 26.3 28.9 24.8C29.6 24.4 30.3 23.7 31.1 23.6ZM53.1 28.8C52.3 28.8 49.9 30.5 49.2 31.1C47.8 32 46.6 33.1 45.6 34.4C44.1 36.8 44.3 39.8 46.6 41.6C48.1 42.9 50.4 43.1 52.1 42.2C52.5 42 52.9 41.8 53.1 41.5C53.3 41.1 53.2 39.9 53.2 39.4C53.2 37.8 53.2 36.2 53.2 34.7C53.2 33.7 53.4 29.4 53.1 28.8ZM52.2 32.5C52.3 32.9 52.1 34.9 52.1 35.5C52.1 36.2 52.3 37.4 52.2 37.9C51.7 41.2 46.9 40.2 47.3 37.3C47.5 35.8 49 34.8 50 33.8C50.4 33.4 51.7 32.4 52.2 32.5ZM11.4 33.6C10.9 34 11.1 35.2 11 35.9C10.9 37.6 11.1 39.4 10.9 41.1C10.8 41.9 10.5 43.2 10.9 43.9C11.8 44.1 13.5 42.4 14.5 42.5C15.1 43 15.4 44 15.8 44.7C16.5 45.9 17.3 47.1 18.3 48.2C22.3 52.7 27.7 55.9 33.8 56.8C34 56.8 34.1 56.8 34.4 56.8C36 57 38.1 57.2 39.7 56.9C40.5 56.8 41.4 56.7 42.2 56.5C45.2 56.1 48.2 54.7 50.8 53.1C51.4 52.7 52.9 51.8 53.1 51.2C53.3 50.8 53.2 50.1 53.2 49.6C53.2 49.1 53.3 48.5 53.1 48C52.6 48 51.2 49.5 50.7 49.9C48.5 51.3 46.4 52.5 43.9 53.3C41.8 54 39.7 54.2 37.5 54.2C36.8 54.2 36.1 54.3 35.4 54.2C30.1 53.6 25.2 51.4 21.5 47.7C20.3 46.5 17.3 42.9 17.2 41.3C17.7 40.4 20.5 40 20.8 39.2L11.4 33.6ZM39.2 35.5C38.5 35.6 37.9 36.1 37.2 36.4C34.9 37.7 32.6 39.2 31 41.3C29.2 43.5 29 46.5 31 48.6C31.6 49.1 32.2 49.6 32.9 49.8C36.3 50.9 40.3 48.4 39.8 44.6C39.6 43.2 39.7 40.8 40 39.5C40.2 38.7 40.7 37.9 40.8 37.1C40.9 36.1 40.2 35.4 39.2 35.5ZM37.1 39.9C37.1 40 37 42.5 37 43C37 43.5 37.2 45 37.1 45.4C36.7 48.3 32.6 47.9 32.2 45.1C32 43.7 33.9 42 34.8 41.2C35.3 40.9 36.6 39.7 37.1 39.9Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.6 43.7C20.2 44.1 18.4 43.9 17.8 43.9C15.3 43.9 12.8 43.9 10.3 43.9C9.2 43.9 7.2 43.5 7 45.1C6.9 45.7 7.2 46.5 8 46.6C8.8 46.7 9.7 46.6 10.5 46.6C12.4 46.6 14.3 46.6 16.2 46.6C25.3 46.6 34.3 46.6 43.3 46.6C45.4 46.6 47.6 46.6 49.8 46.6C50.5 46.6 51.5 46.9 51.9 46.1C52.1 45.8 52.1 45.5 52.1 45.2C52.1 43.7 50.4 43.9 49.4 43.9C46.9 43.9 44.5 43.9 42 43.9C41.3 43.9 39.6 44.1 39 43.8C39 43.3 40.2 42 40.6 41.6C41.4 40.9 42.1 39.6 42.9 39C43.2 38.7 43.7 38.6 44 38.5C44.9 38.1 45.7 37.7 46.5 37.2C50 35.2 53.2 32.4 55.5 29.1C56 28.4 56.6 27.7 56.9 26.9C57.1 26.2 57 22.9 57 22C57 21 57.2 18.1 56.8 17.4C56 17.1 54.4 17.3 53.5 17.3C51 17.3 48.5 17.3 45.9 17.3C37.3 17.3 28.7 17.3 20.1 17.3C17.4 17.3 14.7 17.3 12 17.3C11 17.3 9.5 17.1 9.1 18.3C8.8 19.1 9.3 22.3 9.5 23.4C10.4 29.4 12.1 33.3 16 38.1C17 39.4 18 40.5 19 41.8C19.5 42.4 20.4 43 20.6 43.7ZM47.6 20C47.9 20.5 47.4 23.4 47.3 24.1C46.6 27.2 45.8 30.1 44.2 32.8C43.8 33.5 42.8 35.3 42.2 35.7C41.7 36 40.1 35.8 39.5 35.8C37.1 35.8 34.8 35.8 32.5 35.8C29 35.8 25.4 35.8 21.9 35.8C21 35.8 18.1 36 17.4 35.7C16.7 35.5 15.7 33.4 15.3 32.7C13.7 29.9 12.8 26.8 12.2 23.7C12.1 23 11.6 20.6 11.8 20C12.4 19.6 13.6 19.9 14.3 19.9C16.3 19.9 18.4 19.9 20.4 19.9C26.8 19.9 33.2 19.9 39.6 19.9C41.5 19.9 43.3 19.9 45.1 19.9C45.9 19.9 46.9 19.7 47.6 20ZM56.1 20.1C56.6 21.2 55.9 22.9 55.4 24C54.2 27 51.9 29.8 49.5 31.9C48.7 32.4 47.9 33.4 47 33.7C46.9 33.3 48 31.1 48.3 30.5C49.2 28.3 49.7 25.9 50.1 23.5C50.2 22.7 50.2 20.6 50.6 20.1C51 19.9 55.7 19.9 56.1 20.1Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.1 43.3C19.5 43.6 17.9 43.5 17.1 43.5C14.8 43.5 12.3 43.5 9.9 43.5C8.8 43.5 7.3 43 7.1 44.5C7.1 44.9 7.1 45.2 7.2 45.6C7.5 46.3 8.7 46.1 9.3 46.1C11.3 46.1 13.3 46.1 15.3 46.1C23.9 46.1 32.5 46.1 41.1 46.1C43.5 46.1 45.9 46.1 48.2 46.1C49 46.1 50.3 46.2 50.4 45.2C50.5 44.5 50.4 43.7 49.6 43.5C48.9 43.3 47.8 43.5 47 43.5C44.8 43.5 42.6 43.5 40.4 43.5C39.8 43.5 38.1 43.6 37.8 43.2C38 42.5 39 41.7 39.5 41.1C40 40.5 40.9 39.3 41.5 38.8C42 38.3 42.9 38.1 43.5 37.8C44.2 37.5 44.9 37.1 45.5 36.7C50.8 33.6 58.4 25.6 56.8 19C56.5 17.7 55.1 17.9 54.2 17.9C51.6 17.9 49 17.9 46.4 17.9C37.1 17.9 27.8 17.9 18.5 17.9C16.3 17.9 14 17.9 11.8 17.9C11 17.9 9.8 17.7 9.3 18.4C8.6 19.2 9.3 22.6 9.4 23.6C10 29.1 12.5 34.1 16 38.2C17 39.5 18.1 40.7 19.1 41.9C19.4 42.3 20.1 42.7 20.1 43.3ZM46.2 20.5C46.4 21 46.2 21.6 46.1 22.1C45.9 23.2 45.8 26 45.1 26.9C44.5 27.1 39.1 27 38 27C32.2 27 26.5 27 20.8 27C18.9 27 17.1 27 15.2 27C14.5 27 13.4 27.2 12.8 26.8C12.3 26 11.4 21.2 11.8 20.4C12.4 20.2 13.4 20.3 14.1 20.3C15.9 20.3 17.6 20.3 19.4 20.3C25.5 20.3 31.7 20.3 37.8 20.3C39.8 20.3 41.7 20.3 43.7 20.3C44.4 20.3 45.5 20.1 46.2 20.5ZM54.3 20.5C54.7 21.4 54.1 23 53.8 23.9C52.9 26.5 50.6 29.6 48.4 31.4C47.9 31.9 46.1 33.6 45.5 33.5C45.6 32.7 46.3 31.7 46.6 30.9C47.3 29 47.9 27 48.3 25C48.5 24.1 48.7 21 49 20.5C49.6 20.3 53.8 20.3 54.3 20.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.7 25C23.1 25.4 22.1 25.2 21.5 25.2C19.7 25.2 18 25.2 16.3 25.2C15.7 25.2 14.7 25 14.2 25.4C13.9 25.8 13.9 26.3 14.1 26.8C14.8 27.4 18.4 27.1 19.4 27.1C24.4 27.1 29.4 27.1 34.3 27.1C37.5 27.1 40.7 27.1 43.9 27.1C44.9 27.1 47 27.4 46.5 25.7C46.2 24.9 44.9 25.2 44.2 25.2C42.5 25.2 40.8 25.2 39 25.2C38.5 25.2 37.5 25.4 37.1 25C37.1 24.4 38 23.7 38.4 23.2C39 22.7 39.3 22 39.9 21.5C40.6 21 41.7 20.7 42.5 20.2C44.9 18.8 47 16.9 48.8 14.7C49.1 14.2 49.7 13.6 49.9 13C50.1 12.3 50 9.5 49.9 8.8C49.8 7.9 50.2 6.8 49.8 6.1C48.9 5.8 43.1 6 41.8 6C35.6 6 29.5 6 23.4 6C21.4 6 19.4 6 17.4 6C16.8 6 15.6 5.8 15.4 6.6C15.3 7.8 15.6 8.9 15.7 10.1C15.8 10.3 15.7 10.6 15.7 10.8C15.8 11.1 15.9 11.3 16 11.6C16.5 14.6 17.6 17.3 19.5 19.7C20.4 20.9 21.4 22 22.3 23.1C22.7 23.7 23.6 24.3 23.7 25ZM43.3 7.8C43.6 8.5 43.2 9.2 43.1 9.8C43.1 10.1 43.2 10.3 43.1 10.5C43.1 10.9 42.9 11.2 42.9 11.6C42.6 13.4 41.8 15.3 40.9 16.9C40.6 17.5 39.8 19 39.2 19.2C38.5 19.4 36.7 19.3 35.9 19.3C33.3 19.3 30.7 19.3 28.2 19.3C26.5 19.3 24.9 19.3 23.2 19.3C22.7 19.3 21.8 19.4 21.3 19.2C20.7 18.8 20.3 17.7 19.9 17.1C18.8 15.1 18 12.7 17.7 10.5C17.6 9.7 17.1 8.5 17.6 7.8C18.4 7.5 22.3 7.7 23.4 7.7C27.9 7.7 32.5 7.7 37 7.7C38.5 7.7 40 7.7 41.5 7.7C42 7.7 42.8 7.5 43.3 7.8ZM49.5 8C49.7 8.6 49.3 9.6 49.1 10.3C48.5 12.2 46.6 14.8 45 16.1C44.5 16.5 43.5 17.5 43 17.5C42.9 17 43.7 15.6 43.9 15C44.3 14 44.6 13 44.8 12C44.9 11.7 44.8 11.4 44.9 11.2C45 10.9 45.1 10.6 45.1 10.3C45.2 9.5 45.1 8.5 45.6 7.8C46.3 7.6 49 7.5 49.5 8ZM23.7 55.8C23.2 56.2 22.1 56 21.5 56C19.8 56 18 56 16.3 56C15.7 56 14.8 55.8 14.2 56.2C13.9 56.6 13.9 57.2 14.2 57.6C15.1 58.2 18.8 58 20 58C25 58 30.1 58 35.1 58C38.2 58 41.3 58 44.4 58C45.1 58 46.4 58.1 46.5 57.2C46.6 56.8 46.5 56.5 46.4 56.3C45.8 55.8 44.7 56 44 56C42.4 56 40.8 56 39.2 56C38.6 56 37.7 56.2 37.1 55.9C37.1 55.2 38 54.5 38.4 54.1C38.9 53.6 39.3 52.9 39.8 52.4C40.4 51.9 41.7 51.5 42.5 51.1C44.6 49.8 46.7 48.1 48.3 46.2C48.5 45.9 48.6 45.6 48.8 45.4C49.2 44.9 49.7 44.4 49.9 43.8C50.1 43.1 50 40.4 49.9 39.6C49.8 38.8 50.2 37.6 49.8 36.9C49.1 36.6 48.1 36.8 47.4 36.8C45.6 36.8 43.8 36.8 42 36.8C35.8 36.8 29.6 36.8 23.4 36.8C21.4 36.8 19.4 36.8 17.4 36.8C16.8 36.8 15.7 36.6 15.5 37.3C15.2 38.4 15.6 39.9 15.7 40.9C15.8 41.1 15.7 41.4 15.7 41.6C15.8 42.3 16.1 43 16.3 43.7C16.9 46.7 18.5 49.4 20.4 51.8C21 52.5 23.6 55.1 23.7 55.8ZM43.3 38.7C43.6 39.4 43.2 40 43.1 40.7C43.1 40.9 43.2 41.2 43.1 41.4C43.1 41.7 43 41.9 42.9 42.2C42.9 42.4 42.9 42.7 42.8 42.9C42.4 44.6 41.8 46.3 40.9 47.8C40.6 48.3 39.8 49.8 39.3 50C38.8 50.2 36 50.1 35.2 50.1C32 50.1 28.8 50.1 25.6 50.1C24.9 50.1 21.7 50.2 21.3 50C20.8 49.6 20.2 48.3 19.9 47.8C18.7 45.8 18 43.5 17.7 41.2C17.6 40.4 17.2 39.5 17.5 38.6C18.1 38.3 22 38.5 23 38.5C27.8 38.5 32.6 38.5 37.4 38.5C38.4 38.5 42.8 38.3 43.3 38.7ZM49.5 38.8C49.7 39.5 49.3 40.5 49.1 41.1C48.5 43.2 46.8 45.1 45.3 46.6C44.9 47 43.4 48.4 42.9 48.3C42.9 48 44 45.5 44.2 45C44.5 44.1 44.7 43.1 44.9 42.2C44.9 41.8 45.1 41.5 45.1 41.1C45.2 40.3 45.1 39.4 45.5 38.7C46.1 38.4 49 38.4 49.5 38.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M27.7 29.5L30.5 28.7C30.6 28.3 30.5 28.1 30.4 27.7C30.3 26.1 29.2 24.5 28.3 23.2C27.8 22.5 27 21.7 26.9 20.8C26.7 19.1 27.7 17.7 28.9 16.8C29.2 16.4 29.7 16.3 29.9 15.8C29.9 15.3 28.9 13.5 28.4 13.3C27.9 13.4 27.4 14 26.9 14.3C24.7 16.2 23.2 18.8 23.9 21.8C24.3 23.6 25.7 24.9 26.6 26.4C26.9 27 27.3 27.7 27.4 28.4C27.4 28.7 27.4 28.9 27.5 29.2C27.5 29.4 27.6 29.4 27.7 29.5ZM36 28.4C36.4 28.6 38.6 29 39 28.9C39.3 28.4 38.8 27.4 38.6 26.8C38.3 25.5 37.5 24.4 36.8 23.3C36.2 22.5 35.4 21.7 35.3 20.6C35.1 19.2 36.1 17.8 37.1 16.9C37.5 16.5 38.1 16.3 38.4 15.8C38.3 15.3 37.4 13.5 36.9 13.3C36 13.5 34.7 14.8 34.1 15.5C32.2 17.8 31.5 20.3 32.8 23.1C33.3 24.1 34.2 25 34.8 26C35.2 26.8 35.5 27.7 36 28.4ZM19.1 30.7C19.6 31.2 21.6 31.2 22.1 30.8C22.4 30.2 22.1 29.5 22 28.9C21.8 27.2 20.8 25.7 19.9 24.3C19.4 23.5 18.6 22.8 18.5 21.8C18.3 20.3 19.1 19 20.2 18C20.6 17.6 21.3 17.3 21.5 16.8C21.4 16.2 20.6 14.6 20.1 14.3C19.1 14.4 17.4 16.1 16.9 16.9C16.1 17.9 15.6 18.9 15.4 20.2C15.3 20.6 15.2 20.9 15.2 21.3C15.3 23.9 17.1 25.6 18.4 27.8C19 29 18.8 29.6 19.1 30.7ZM7.3 30.9C6.8 31.6 7.1 34.8 7.2 35.8C7.2 36.7 7.2 37.5 7.2 38.3C7.3 38.9 7.4 39.4 7.5 39.9C7.5 40.1 7.5 40.4 7.5 40.7C7.5 41 7.7 41.3 7.7 41.6C8 43.5 8.3 44.9 8.7 46.8C9 47.8 9.4 49.8 10 50.6C10.4 50.8 14.1 50.9 14.4 50.7C14.6 50.6 14.5 50.6 14.6 50.5C14.4 49.8 13.3 48.2 12.9 47.4C12 45.2 11.3 43 10.8 40.8C10.4 38.7 10.3 36.6 10.3 34.5C10.3 33.5 10.5 31.8 10.2 30.9C9.8 30.6 7.8 30.6 7.3 30.9ZM44.6 30.9C44.3 31.7 44.5 34.1 44.5 35.2C44.5 37.2 44.2 39.9 43.7 41.9C43.2 43.9 42.5 45.8 41.6 47.8C41.4 48.5 40.2 50 40.2 50.6C40.7 50.9 44.1 50.9 44.7 50.6C45.2 50.1 45.8 47.8 46 47C46.1 46.5 46.1 45.9 46.5 45.5C47.4 45.1 49.3 45.5 50.4 45.4C53.1 45 55.2 43.4 56.3 40.9C56.9 39.7 57 38.3 56.8 37C56.3 34 54 31.3 50.9 30.8C50 30.7 49.1 30.7 48.2 30.7C47.3 30.7 45.2 30.5 44.6 30.9ZM13.7 33.8C13.4 34.1 13.6 34.6 13.6 35.1C13.7 35.7 13.6 36.2 13.9 36.7C14.3 37.2 17.6 37.9 18.4 38C18.7 38 19 37.9 19.3 38C20.9 38.2 22.5 38.1 24.1 38C24.4 37.9 24.8 37.8 25.1 37.7C25.3 37.7 25.5 37.7 25.7 37.6C28 36.9 30.6 35.9 33.1 35.7C34 35.6 35.1 35.6 36.1 35.7C36.5 35.7 36.9 35.9 37.3 35.9C37.6 36 37.9 35.9 38.2 36C38.8 36.1 40.3 36.7 40.8 36.5C41.5 35.7 41.3 34.2 40.8 33.3C39.9 32.8 38.6 32.8 37.6 32.6C37.2 32.6 36.9 32.4 36.5 32.4C35.9 32.3 35.2 32.4 34.7 32.4C32.7 32.4 30.9 32.4 29 32.9C27.1 33.5 25.4 34.4 23.4 34.7C23.1 34.7 22.8 34.6 22.5 34.7C20.5 34.9 18.6 34.7 16.7 34.4C15.8 34.3 14.4 33.6 13.7 33.8ZM47.1 42.1C47 41.7 47.4 39.6 47.5 39.1C47.7 37.9 47.4 34.9 47.7 34C48.1 33.8 48.5 33.9 49 33.9C51 33.9 53.1 34.9 53.6 37.1C54.1 39.1 52.9 41.1 51 41.9C50.6 42.1 50 42.2 49.5 42.2C48.9 42.3 47.7 42.4 47.1 42.1Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.4 15.6C31.3 15.9 31.4 16.1 31.3 16.4C31.1 17.2 30.8 18 30.3 18.6C27.9 21.7 23.4 21.9 19.8 22.4C18.3 22.6 16.8 22.3 15.3 22.4C14.7 22.4 14 22.6 13.4 22.6C13.1 22.7 12.9 22.8 12.7 22.8C11 23.3 10.3 24.1 10.3 25.9C10.3 26.3 10.2 26.8 10.5 27.1C11.2 27.4 16.9 27.2 18.1 27.2C24 27.2 29.9 27.2 35.8 27.2C37.8 27.2 39.8 27.2 41.8 27.2C42.5 27.2 43.6 27.4 44.3 27.1C44.5 26.7 44.4 26.1 44.4 25.6C44.4 23.5 43.9 21.1 41.6 20.4C40.3 19.9 38.5 20.3 37.5 19.4C37 19 36.7 18.5 36.4 18C35.6 16.5 34.7 16.1 33.2 15.6C32.6 15.5 31.9 15.3 31.4 15.6ZM7.1 28.8C6.8 29.4 7 32.5 7 33.4C7 37.2 7.6 41 8.5 44.8C8.7 45.6 9.2 47.9 9.8 48.5C10.4 48.6 13.7 48.7 14.2 48.4C14.1 47.8 12.7 45.6 12.4 44.8C11.6 42.8 11 40.6 10.6 38.4C10.6 38.1 10.6 37.9 10.6 37.6C10.5 37.1 10.4 36.7 10.3 36.3C10.3 35.8 10.4 35.3 10.3 34.9C10.2 34 10.1 33.2 10.2 32.3C10.3 31.6 10.5 29.5 10.2 28.9C9.7 28.6 7.7 28.6 7.1 28.8ZM44.5 28.9C44.2 29.6 44.4 31.6 44.4 32.4C44.4 34.7 44.3 37 43.9 39.2C43.5 41.3 42.9 43.3 42 45.2C41.7 45.9 40.5 47.8 40.5 48.3C40.9 48.6 44.3 48.6 44.9 48.4C45.5 47.6 45.8 45.9 46.1 44.8C46.2 44.5 46.2 44.1 46.5 43.8C47.3 43.4 49 43.8 50 43.6C53 43.4 55.6 41.5 56.6 38.7C56.9 38 56.9 37.5 57 36.8C57.4 33.7 55.5 30.7 52.7 29.4C51.2 28.7 49.7 28.7 48.1 28.7C47.3 28.7 45.2 28.5 44.5 28.9ZM13.7 31.1C13.4 31.6 13.3 33.6 13.7 34.1C14.6 34.4 18.9 34.2 20.1 34.2C24.8 34.2 29.5 34.2 34.2 34.2C35.8 34.2 37.4 34.2 39 34.2C39.6 34.2 40.5 34.3 41 34L41 31.2C40.5 30.8 39.7 31 39.1 31C37.6 31 36 31 34.5 31C29.6 31 24.7 31 19.8 31C18.7 31 14.4 30.8 13.7 31.1ZM47.2 40.1L47.9 32C48.2 31.8 48.5 31.9 48.9 31.9C50.4 31.9 51.9 32.4 52.9 33.6C54.6 35.6 53.8 38.5 51.7 39.8C51 40.2 50.3 40.3 49.5 40.3C48.9 40.3 47.7 40.5 47.2 40.1ZM14 37.7C13.8 38.2 14.3 40.1 14.6 40.6C15.2 41.1 19.7 40.8 20.8 40.8C25.2 40.8 29.7 40.8 34.1 40.8C35.2 40.8 39.2 41 40 40.7C40.4 40.3 40.8 38.2 40.7 37.6C40.1 37.3 36 37.5 35 37.5C30 37.5 25 37.5 20.1 37.5C19.1 37.5 14.6 37.3 14 37.7Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.2 43.9C18.6 43.3 18.4 39 18.4 38.1C18.4 33.3 18.4 28.5 18.4 23.8C18.4 22.8 18.6 19 18.2 18.4C17.6 17.9 16.8 18.4 16.2 18.7C14.4 19.4 12.8 20.9 11.7 22.5C8 27.5 8.3 34.4 11.5 39.5C12.6 41.2 14.3 42.7 16.1 43.5C16.7 43.7 17.6 44.2 18.2 43.9ZM21.6 43.9C22.4 44.2 23.2 43.7 23.9 43.4C26.1 42.5 27.8 40.6 28.9 38.6C29.9 36.9 30.6 35 30.8 33C30.9 32.5 30.8 31.9 30.8 31.3C30.8 30.6 30.9 29.9 30.8 29.2C30.4 26.1 28.9 22.6 26.6 20.5C25.8 19.9 22.8 17.7 21.8 18.3C21.6 18.4 21.4 18.7 21.4 19C21.2 20.2 21.4 21.6 21.4 22.8C21.4 27.4 21.4 31.9 21.4 36.4C21.4 38.2 21.4 40 21.4 41.8C21.4 42.5 21.2 43.4 21.6 43.9ZM36.5 43.2C37.1 43 39.3 39.4 39.8 38.7C41.9 35 44.5 31.6 46.7 28.1C47.3 27.1 49.3 24.6 49.3 23.7C49 23 48 22.8 47.3 22.8C45.2 22.8 44.3 22.8 42.3 23.4C37.7 25.1 34.5 29.7 33.8 34.5C33.6 35.6 33.5 36.6 33.7 37.8C34.1 39.4 34.4 41 35.6 42.4C35.9 42.7 36.1 43.1 36.5 43.2ZM39.1 44.8C39.4 45.5 40.3 45.5 40.9 45.6C42.8 45.9 44.7 45.7 46.4 45C50.7 43.1 54.1 39.1 54.8 34.5C54.8 34.1 55 33.8 55 33.4C55 32.9 55 32.3 55 31.7C55 30.2 53.8 25.7 52.1 25.4C51.9 25.4 51.7 25.5 51.6 25.6C51.3 25.9 51 26.4 50.8 26.8C50.1 27.8 49.5 28.8 48.9 29.7C46.5 33.2 44.3 36.8 42 40.3C41.4 41.1 39.2 44 39.1 44.8Z"/>'
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
