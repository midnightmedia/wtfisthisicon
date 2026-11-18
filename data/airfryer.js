/* Air fryers: Cosori, Philips, Ninja, Tower and Instant Vortex (airfryer).
 * Format and drawing rules are in data/README.md.
 *
 * Every brand draws its own panel, so each entry says whose version it is.
 * Drawings follow the makers' own manuals: Cosori's preset buttons (CS358 / TurboBlaze),
 * Philips' Smart Sensing panel (HD986x), Tower's Vortx panel (T17175), Ninja's
 * Dual Zone quick start guide (AF451UK) and Instant's VersaZone manual. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }
  function rad(a) { return (a * Math.PI) / 180; }
  function pt(cx, cy, r, a) { return [cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))]; }
  function xy(p) { return r2(p[0]) + " " + r2(p[1]); }

  // Cut-out line through a solid shape. <line> only, so nothing gets filled by accident.
  function knockLine(a, b, sw) {
    return '<line class="knock" stroke-width="' + sw + '" x1="' + r2(a[0]) + '" y1="' + r2(a[1]) + '" x2="' + r2(b[0]) + '" y2="' + r2(b[1]) + '"/>';
  }
  // Six-armed snowflake: arms of length L, a V-shaped fork at distance d with branches of length b, fa degrees off the arm.
  function snowflake(cx, cy, L, d, b, sw, fa) {
    var out = "", i, k = fa || 45;
    for (i = 0; i < 6; i++) {
      var a = -90 + i * 60, tip = pt(cx, cy, L, a), f = pt(cx, cy, d, a);
      out += '<line x1="' + cx + '" y1="' + cy + '" x2="' + r2(tip[0]) + '" y2="' + r2(tip[1]) + '"/>';
      var l = [f[0] + b * Math.cos(rad(a - k)), f[1] + b * Math.sin(rad(a - k))];
      var rr = [f[0] + b * Math.cos(rad(a + k)), f[1] + b * Math.sin(rad(a + k))];
      out += '<polyline points="' + xy(l).replace(" ", ",") + " " + xy(f).replace(" ", ",") + " " + xy(rr).replace(" ", ",") + '"/>';
    }
    return '<g stroke-width="' + sw + '">' + out + "</g>";
  }

  // Tidy numbers for path data
  function r1(n) { return Math.round(n * 10) / 10; }
  function p1(p) { return r1(p[0]) + " " + r1(p[1]); }
  function pts(list) { return list.map(function (p) { return r1(p[0]) + "," + r1(p[1]); }).join(" "); }

  // Smooth curve through points (Catmull-Rom, written as cubic Beziers). A point with a third value of 1 is a sharp corner.
  function curve(list, open) {
    var n = list.length, d = "", i;
    function at(k) { return open ? list[Math.max(0, Math.min(n - 1, k))] : list[(k + n) % n]; }
    for (i = 0; i < (open ? n - 1 : n); i++) {
      var a = at(i - 1), b = at(i), c = at(i + 1), e = at(i + 2);
      var c1 = b[2] ? b : [b[0] + (c[0] - a[0]) / 6, b[1] + (c[1] - a[1]) / 6];
      var c2 = c[2] ? c : [c[0] - (e[0] - b[0]) / 6, c[1] - (e[1] - b[1]) / 6];
      d += "C" + p1(c1) + " " + p1(c2) + " " + p1(c);
    }
    return d;
  }
  function outline(list) { return "M" + p1(list[0]) + curve(list) + "Z"; }
  function line(list) { return "M" + p1(list[0]) + curve(list, true); }

  // A band of width w along a smooth line, round at both ends, shifted by (dx, dy).
  // Inside a filled shape drawn with fill-rule="evenodd" it becomes a cut-out.
  function ribbon(list, w, dx, dy) {
    var L = [], R = [], n = list.length, h = w / 2, i;
    for (i = 0; i < n; i++) {
      var a = list[Math.max(0, i - 1)], b = list[Math.min(n - 1, i + 1)];
      var tx = b[0] - a[0], ty = b[1] - a[1], m = Math.sqrt(tx * tx + ty * ty);
      var p = [list[i][0] + (dx || 0), list[i][1] + (dy || 0)];
      L.push([p[0] - (ty / m) * h, p[1] + (tx / m) * h]);
      R.unshift([p[0] + (ty / m) * h, p[1] - (tx / m) * h]);
    }
    var cap = "A" + h + " " + h + " 0 0 0 ";
    return "M" + p1(L[0]) + curve(L, true) + cap + p1(R[0]) + curve(R, true) + cap + p1(L[0]) + "Z";
  }

  // Outlined stick (a chip or a fry) that hides whatever is behind it.
  // Centred on (cx, cy), len x wid measured along the outline's centre, turned by rot degrees.
  function stick(cx, cy, len, wid, rot, sw) {
    var box = 'x="' + r1(cx - len / 2) + '" y="' + r1(cy - wid / 2) + '" width="' + len + '" height="' + wid + '" rx="1" transform="rotate(' + rot + " " + cx + " " + cy + ')"';
    return '<rect class="knock" stroke-width="' + (sw + 2) + '" ' + box + "/>" + '<rect stroke-width="' + sw + '" ' + box + "/>";
  }
  // Philips' three chips: one at the back, a long one rising to the right, one crossing in front.
  var PHILIPS_CHIPS = stick(27.9, 18.6, 24.6, 5.6, 9.8, 2.7) + stick(28.8, 23.8, 44.3, 6, -20.9, 2.7) + stick(19.3, 23.4, 23.7, 6.3, 17.5, 2.7);
  // Philips' potato: a lopsided bean. On the home-made chips icon Philips draws the chips a size up, so they get scaled to match.
  var POTATO = outline([
    [47.6, 19.9], [52.5, 21], [55.9, 24.5], [57.3, 28.8], [56.7, 32.6], [54.4, 35.8], [52.5, 38.8], [50.4, 46.4], [47, 51.8], [42.7, 54],
    [38.5, 54.7], [33.6, 53.4], [29.6, 49.8], [27.9, 45.5], [28, 40.8], [30.5, 34.6], [34.4, 28.6], [40.6, 22.8], [44, 20.6]
  ]);
  // Cosori fry: an outlined stick hanging from its top-centre (tx, ty), leaning by rot degrees, tucked into the carton.
  function fry(tx, ty, len, wid, rot) {
    var box = 'x="' + r1(tx - wid / 2) + '" y="' + ty + '" width="' + wid + '" height="' + len + '" rx="1" transform="rotate(' + rot + " " + tx + " " + ty + ')"';
    return '<rect class="knock" stroke-width="4.4" ' + box + "/>" + '<rect stroke-width="2.4" ' + box + "/>";
  }

  // A seven-segment style display window, with whatever sits inside it.
  function display(inner, h) {
    var hh = h || 32, y = r2(32 - hh / 2);
    return '<rect x="5" y="' + y + '" width="54" height="' + hh + '" rx="6"/>' + inner;
  }

  // Cosori shrimp: a thick curl with a round head at the top, shell plates down the back and a heart-shaped tail fan.
  var SHRIMP =
    '<path fill="currentColor" stroke="none" d="' + outline([
      [30, 8.1], [35.5, 8.3], [39.3, 9.8], [40.3, 13.8], [39.7, 18.3], [37.6, 22.6, 1], [41.6, 19.3], [44.4, 12.2, 1],
      [49, 15.5], [52.4, 20.2], [54.4, 24.8], [54.6, 27.8], [52.4, 30.4], [48.6, 32.7], [43.9, 34.6, 1], [48.5, 35.6], [55.1, 33.3, 1],
      [54.9, 37.5], [53.7, 41.2], [51.4, 45.2], [48.4, 48.4], [45.3, 48.9], [42.4, 47.6], [39.5, 45.9, 1], [41.6, 49.8], [44.2, 52.6, 1],
      [39.8, 54.6], [34.5, 55.9], [27.8, 55.9], [23, 54.8], [19.6, 52.8], [17.8, 50.4, 1], [22.4, 47.8, 1],
      [25.8, 49.2], [31.9, 48.6], [35.6, 46.5], [38.2, 43.6], [39.7, 40], [39.9, 35], [38.9, 31.6], [37.2, 28.9], [35, 26.8],
      [32.3, 25.4], [28.5, 24.7], [25.4, 24.3], [22.9, 23.1], [21, 21.3], [19.7, 18.5], [19.5, 14.6], [21.4, 11], [24.8, 8.8]
    ]) + '"/>' +
    '<path stroke-width="3.3" d="M20.9 48.6C21.2 43.5 20.2 38.6 17.6 36.5C16 35.2 14 35.6 13.7 39C13 37.8 11.4 37.6 10.7 38.6C9.8 40 10.6 42.6 12.2 44.6C14 46.9 17 48.4 20.9 48.6Z"/>';

  // Philips drumstick: solid meat, with the bone and its two-lobed knuckle drawn in outline.
  var DRUMSTICK =
    '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="' + outline([
      [46.7, 8.4], [49.9, 9.3], [51.8, 12.2, 1], [55.2, 14.6], [55.9, 18.3], [54.8, 20.6], [52.2, 22], [48.7, 21.7, 1],
      [42.7, 27.7], [40.6, 35.5], [39.5, 40.3], [36, 47], [30.6, 52.4], [24, 55.5], [18.5, 55.3], [13.5, 52.9], [10.2, 49.7],
      [8, 44.3], [8.2, 39], [10.2, 35.8], [15.1, 30.7], [21.2, 26.5], [30.1, 22.8], [36.2, 21.6, 1], [42.5, 15.4, 1], [42, 13.2],
      [42.5, 10.9], [44.3, 9.1]
    ]) + outline([
      [47.4, 11.2], [48.9, 12.3], [49.3, 14], [50.4, 15.1], [52.2, 15.3], [53.1, 16.3], [53, 18.1], [51.2, 19.4], [49.1, 18.6],
      [47.8, 19, 1], [41.3, 25.3, 1], [38.7, 22.7, 1], [45.1, 16.4, 1], [45.3, 15], [44.4, 13.4], [44.8, 12.1], [46, 11.2]
    ]) + '"/>';

  // Cosori's rasher: one wavy strip, squared off at both ends, with two streaks of fat cut out of it.
  var BACON_STREAK = [[46.3, 12.1], [40, 15.9], [36.3, 19.1], [32.7, 25.2], [30.1, 27.6], [25.2, 29.7], [23.2, 31.6], [20, 37.9], [16.9, 40.7], [10.3, 44.3]];

  WTF.add([
    // =====================================================================
    // REMINDERS AND MODES
    // =====================================================================
    {
      id: "airfryer-shake",
      name: "Shake reminder (basket with arrows)",
      quiz: "Shake the basket",
      category: "airfryer",
      aka: ["shake reminder", "shake indicator", "shake indication", "SHAKE", "(( SHAKE ))", "shake light", "flip food", "turn food", "Philips shake"],
      looksLike: ["basket with arrows", "arrows pointing apart", "pan with arrows above it", "basket full of dots", "bucket with arrows", "shake", "shake in brackets"],
      meaning:
        "Time to shake the basket. Air fryers blast heat down from the top, so anything piled up (chips, nuggets, prawns, chopped veg) browns on top and stays pale underneath unless you move it about half-way. Philips shows this basket with arrows on its digital models, Cosori lights up ((SHAKE)) on the display and Tower flashes the word SHAKE, with a few beeps for good measure.",
      action:
        "Pull the drawer out, give the basket a good shake (or turn bigger pieces with tongs) and slide it back in. Cosori pauses by itself when the basket comes out and carries on when it goes back; on a Philips, press the dial to pause first. Ignore it and cooking simply carries on, just less evenly.",
      tip: "On a Cosori the SHAKE button turns the reminder on or off. It comes on by itself for the frozen food, fries, shrimp and vegetables presets. Philips suggests lifting the basket out of the pan and shaking it over the sink.",
      svg:
        '<polygon fill="currentColor" stroke-width="1" points="7.6,18.35 18,12.9 18,16.7 25.5,16.7 25.5,20 18,20 18,23.8"/>' +
        '<polygon fill="currentColor" stroke-width="1" points="56.1,18.35 45.8,12.9 45.8,16.7 38.4,16.7 38.4,20 45.8,20 45.8,23.8"/>' +
        '<path stroke-width="4.3" d="M14.2 34.5V47Q14.2 49 16.2 49H43.2Q45.2 49 45.2 47V34.6H52.4L54.7 49.3"/>' +
        '<g fill="currentColor" stroke="none"><circle cx="25.6" cy="35.5" r="2.2"/><circle cx="33.6" cy="35.5" r="2.2"/>' +
        '<circle cx="21.6" cy="41.8" r="2.2"/><circle cx="29.7" cy="41.8" r="2.2"/><circle cx="37.6" cy="41.8" r="2.2"/></g>'
    },
    {
      id: "airfryer-keep-warm",
      name: "Keep warm (arrow round heat waves)",
      quiz: "Keep warm",
      category: "airfryer",
      aka: ["keep warm", "KEEP WARM", "WARM", "warm", "keep warm button", "keep warm indication", "hold warm"],
      looksLike: ["circle arrow with wavy lines", "arrow going round three squiggles", "wavy lines in a circle", "steam inside a circular arrow", "three wavy lines with an arrow", "refresh symbol with steam", "circle of arrow with heat"],
      meaning:
        "Keep warm. It holds the food at a low heat after cooking so it doesn't go cold while you sort out the rest of dinner. This version, an arrow circling three heat waves, is Philips'. Cosori and Tower just print KEEP WARM or WARM on the button.",
      action:
        "Press it at any time. On a Philips Airfryer the light pulses and the keep warm timer is set to 30 minutes, which you can shorten (1 to 30 minutes), but you can't change the temperature. Press it during cooking and it keeps the food warm for 30 minutes after the time runs out. The return or on/off button stops it.",
      tip: "Chips go soft if they sit warm for too long. Philips suggests 2 to 3 minutes back at 180°C to crisp them up again. For the record, Cosori keeps warm at 77°C and Tower's WARM preset runs at 90°C.",
      svg:
        '<path stroke-width="3.9" d="M' + xy(pt(31.85, 32, 20.9, -79.3)) + 'A20.9 20.9 0 1 1 ' + xy(pt(31.85, 32, 20.9, 237)) + '"/>' +
        '<polygon fill="currentColor" stroke-width="1" points="18.05,9.85 28.6,9.5 23.1,18.5"/>' +
        '<g stroke-width="2.3">' +
        '<path d="M27.6 23.6C25 25.2 23.6 27.5 24.5 30C25.3 32.3 27.9 34.4 27.9 36.8C27.9 38.3 27.1 39.6 25.9 40.6"/>' +
        '<path d="M33.45 23.6C30.85 25.2 29.45 27.5 30.35 30C31.15 32.3 33.75 34.4 33.75 36.8C33.75 38.3 32.95 39.6 31.75 40.6"/>' +
        '<path d="M39.4 23.6C36.8 25.2 35.4 27.5 36.3 30C37.1 32.3 39.7 34.4 39.7 36.8C39.7 38.3 38.9 39.6 37.7 40.6"/></g>'
    },
    {
      id: "airfryer-fan",
      name: "Fan symbol (fan indicator)",
      quiz: "Fan running",
      category: "airfryer",
      aka: ["fan indicator", "fan light", "fan symbol", "fan running", "cooling fan", "air circulation"],
      looksLike: ["fan in a circle", "propeller in a circle", "four petals in a circle", "flower in a circle", "windmill", "spinning fan", "four blades"],
      meaning:
        "The fan is running. Tower puts this fan in a circle on its Vortx panels and its manual simply calls it the fan indicator. The fan is what makes an air fryer an air fryer: it blows hot air from the element down through the food.",
      action:
        "Nothing to do. If the fan carries on whirring after you switch off, that's normal: on a Tower, holding the power button mid-cook shows OFF on the display while the fan winds down, finishing with five beeps. Let it finish rather than pulling the plug.",
      tip: "The same fan on an oven means the fan oven settings. On an air fryer it's simply telling you the fan is going round, which, given the noise, you probably knew.",
      svg:
        '<circle cx="32" cy="32" r="22.2" stroke-width="2.6"/>' +
        '<g stroke-width="2.4">' +
        '<path transform="translate(32 32) rotate(-67)" d="M3.2 0C5.2 -2.8 7.6 -4.6 11 -4.6A4.6 4.6 0 0 1 11 4.6C7.6 4.6 5.2 2.8 3.2 0Z"/>' +
        '<path transform="translate(32 32) rotate(23)" d="M3.2 0C5.2 -2.8 7.6 -4.6 11 -4.6A4.6 4.6 0 0 1 11 4.6C7.6 4.6 5.2 2.8 3.2 0Z"/>' +
        '<path transform="translate(32 32) rotate(113)" d="M3.2 0C5.2 -2.8 7.6 -4.6 11 -4.6A4.6 4.6 0 0 1 11 4.6C7.6 4.6 5.2 2.8 3.2 0Z"/>' +
        '<path transform="translate(32 32) rotate(203)" d="M3.2 0C5.2 -2.8 7.6 -4.6 11 -4.6A4.6 4.6 0 0 1 11 4.6C7.6 4.6 5.2 2.8 3.2 0Z"/>' +
        '</g>'
    },

    // =====================================================================
    // FOOD PRESETS (Cosori draws them in circles; Philips on the display)
    // =====================================================================
    {
      id: "airfryer-frozen",
      name: "Snowflake (frozen food preset)",
      quiz: "Frozen food preset",
      category: "airfryer",
      aka: ["frozen foods", "frozen", "frozen food preset", "from frozen", "cook from frozen", "FROZEN"],
      looksLike: ["snowflake", "star", "asterisk", "ice crystal", "snowflake in a circle", "star with branches"],
      meaning:
        "The frozen food preset, for things that go straight from the freezer into the basket: nuggets, fish fingers, potato waffles and the like. It cooks them from frozen; it doesn't defrost them.",
      action:
        "Press it, then check the time against the packet and adjust. On a Cosori it starts at 193°C (380°F) for 8 minutes with the shake reminder on. Spread the food out in a single layer so the air can get round it.",
      tip: "Plenty of packs now print air fryer times. If yours only gives oven times, check a few minutes early. The same snowflake means fast freeze on a fridge and frost warning on a car, because one symbol doing three jobs is apparently fine.",
      svg:
        snowflake(32, 32, 23.4, 15.4, 7.2, 3.2)
    },
    {
      id: "airfryer-frozen-fries",
      name: "Chips with a snowflake (frozen chips)",
      quiz: "Frozen chips programme",
      category: "airfryer",
      aka: ["frozen fries", "frozen chips", "frozen snacks", "Smart Chef frozen fries", "Philips frozen fries"],
      looksLike: ["chips with a snowflake", "fries with a snowflake", "sticks with a snowflake", "matchsticks and a star", "crossed sticks and a snowflake", "planks with a snowflake"],
      meaning:
        "Philips' Smart Chef programme for frozen chips. On Philips Airfryers with Smart Sensing (the HD986x XXL, for one) it works out the time and temperature itself.",
      action:
        "Tip the chips in straight from the freezer, don't preheat, choose the icon and start. For the first few minutes the display shows blinking bars while it calculates: don't pull the drawer out then, or the programme stops and goes back to the menu. Shake when the shake light blinks; when the timer reaches zero, they're done.",
      tip: "Not brown enough? Press the timer button and add a few minutes. The chips with a potato next to them are the same idea for home-made chips.",
      svg:
        PHILIPS_CHIPS +
        '<circle class="knock" stroke="none" cx="43.6" cy="38.6" r="18"/>' +
        '<g transform="rotate(30 43.6 38.6)">' + snowflake(43.6, 38.6, 14.5, 9.5, 5.5, 2.2, 55) + '</g>' +
        '<polygon fill="currentColor" stroke="none" points="' + pts([0, 60, 120, 180, 240, 300].map(function (a) { return pt(43.6, 38.6, 4.2, a); })) + '"/>'
    },
    {
      id: "airfryer-homemade-fries",
      name: "Chips with a potato (home-made chips)",
      quiz: "Home-made chips programme",
      category: "airfryer",
      aka: ["home-made fries", "homemade fries", "home-made chips", "fresh fries", "Smart Chef home-made fries", "Philips homemade fries"],
      looksLike: ["chips with a potato", "fries with a potato", "sticks and a potato", "planks and a potato", "matchsticks and a pebble"],
      meaning:
        "Philips' Smart Chef programme for chips you've cut yourself from raw potatoes, as opposed to a bag from the freezer (that's the chips with a snowflake).",
      action:
        "Philips suggests soaking the cut chips for 30 minutes in cold water (or 3 minutes in lukewarm water at about 40°C), drying them well and tossing them in about 1 tbsp of oil per 500 g. Then choose the icon, start, and shake when the shake light blinks.",
      tip: "Soaking washes off surface starch, which is what makes chips stick together and burn before they crisp. Cosori says the same and adds that thinner chips come out crispier.",
      svg:
        '<g transform="matrix(1.098 0 0 1.098 -0.49 -4.93)">' + PHILIPS_CHIPS + '</g>' +
        '<path class="knock" stroke-width="9" d="' + POTATO + '"/><path stroke-width="3.2" d="' + POTATO + '"/>' +
        '<path stroke-width="2.4" d="M37.3 33.4L38.9 34.4M33.2 40.3L34.9 41.1M39.5 40.9L41.1 41.7"/>'
    },
    {
      id: "airfryer-fries",
      name: "Chips in a carton (fries preset)",
      quiz: "Chips preset",
      category: "airfryer",
      aka: ["french fries", "fries", "chips", "FRIES", "fries preset", "chips preset"],
      looksLike: ["fries in a box", "chips in a carton", "box of chips", "carton with sticks", "fast food fries", "chips in a packet"],
      meaning:
        "The chips preset (French fries, to the panel). Cosori draws it as a carton of fries; other brands use a pile of chips or just write FRIES.",
      action:
        "On a Cosori it starts at 193°C (380°F) for 25 minutes with the shake reminder on, which suits a basket of frozen chips. Adjust for thin or chunky cuts, and shake when it tells you.",
      tip: "Making them from raw potatoes? Cosori suggests soaking the cut chips in water for 15 minutes, patting them dry, then adding a little oil. Cut them thinner for crispier chips.",
      svg:
        fry(38.2, 11.6, 18, 4.6, 4) + fry(45.6, 15.4, 14, 4.4, 13.5) + fry(18.3, 17.1, 14, 4.2, -13) + fry(31.4, 12.9, 19, 4.4, -6) + fry(24.3, 10.1, 22, 4.8, -8.5) +
        '<path fill="currentColor" stroke="none" d="M15.4 23.6H48.4Q49.7 23.6 49.5 25L46 54.6Q45.9 55.9 44.6 55.9H19.2Q17.9 55.9 17.8 54.6L14.3 25Q14.1 23.6 15.4 23.6Z"/>'
    },
    {
      id: "airfryer-chicken",
      name: "Drumstick (chicken preset)",
      quiz: "Chicken preset",
      category: "airfryer",
      aka: ["chicken", "poultry", "chicken drumsticks", "drumsticks", "chicken preset", "Smart Chef chicken drumsticks", "chicken leg", "chicken leg symbol", "turkey leg"],
      looksLike: ["drumstick", "chicken drumstick", "turkey drumstick", "meat on a bone", "bone with meat", "ham hock"],
      meaning:
        "The chicken preset, for drumsticks, thighs, wings and breasts. Cosori and Philips both draw a drumstick; on Philips Smart Sensing models it's a Smart Chef programme for drumsticks that sets its own time.",
      action:
        "On a Cosori it starts at 193°C (380°F) for 23 minutes. Bone-in pieces can take longer, so treat it as a starting point and check the thickest piece: juices running clear, no pink at the bone, at least 75°C in the middle if you have a thermometer.",
      tip: "Pat the skin dry first for crispier skin. Philips also has a whole chicken icon (a roast chicken with kg next to it), which asks for the weight.",
      svg: DRUMSTICK
    },
    {
      id: "airfryer-whole-chicken",
      name: "Roast chicken with kg (whole chicken)",
      quiz: "Whole chicken programme",
      category: "airfryer",
      aka: ["whole chicken", "roast chicken", "Smart Chef whole chicken", "chicken weight", "kg"],
      looksLike: ["chicken with kg", "roast chicken", "turkey with kg", "kg", "roast dinner with kg"],
      meaning:
        "Philips' Smart Chef programme for a whole chicken. The kg is there because it wants to know how heavy the bird is before it works out the cooking time.",
      action:
        "Weigh the chicken first. Choose the programme, turn the dial to the weight and press it to confirm, then let it cook. While the display shows blinking bars it's still calculating, so keep the drawer shut: opening it then stops the programme.",
      tip: "Make sure it's cooked through before serving: juices running clear and no pink meat at the thickest part of the thigh. Philips says the same, in more words.",
      svg:
        '<path fill="currentColor" stroke="none" d="' + outline([
          [25.9, 10.1], [32.4, 10.6], [35.3, 12.3, 1], [29.7, 14.4], [25.5, 17.4], [21.4, 21.6], [19.6, 26.4], [20.4, 30.1], [22, 32.6],
          [24.9, 35.2], [27.8, 36.3], [31.1, 36.3], [34.6, 35], [38.2, 32.1], [40.8, 28.4], [42.6, 24.4], [44.2, 20.4, 1], [47.5, 26.6],
          [49.6, 32.8], [49.9, 38.5], [48.9, 41.6], [47.2, 42.9], [45.1, 42.8, 1], [44.6, 40.4], [42.6, 38.9], [39.8, 38.8], [37.8, 39.6],
          [36.8, 41.6], [36.8, 45.6, 1], [18, 45.6, 1], [13.2, 44.2], [10.2, 41.8], [7.6, 37.9], [6.2, 33], [6.4, 28], [8.2, 22.4],
          [11.2, 17.8], [16.6, 13.2], [21.9, 10.8]
        ]) + '"/>' +
        '<path fill="currentColor" stroke="none" d="' + outline([
          [45.2, 6], [46.6, 6.5], [47.6, 8.4], [49.6, 9.7], [49.8, 12.6], [48.2, 13.8], [46.2, 13.6, 1], [41.6, 18.3], [39.4, 25.6], [37.5, 28.9],
          [35.2, 31.2], [31.5, 33.4], [28.4, 33.6], [26, 32.6], [23.7, 30.2], [22.6, 28], [22.6, 25.4], [23.6, 23.4], [26.1, 20.4],
          [30, 17.5], [34.4, 15.4], [38.4, 14.4], [42.7, 10, 1], [42.6, 7.4], [43.6, 6.3]
        ]) + '"/>' +
        '<text x="48.7" y="55" font-size="16.5">kg</text>'
    },
    {
      id: "airfryer-steak",
      name: "Steak (steak preset)",
      quiz: "Steak preset",
      category: "airfryer",
      aka: ["steak", "beef", "meat", "steak preset", "STEAK"],
      looksLike: ["steak", "tbone", "tbone steak", "piece of meat", "chop", "ham", "lump of meat", "piece of beef"],
      meaning:
        "The steak preset. Cosori draws a T-bone with a strip of fat along the bottom edge.",
      action:
        "On a Cosori it starts at 204°C (400°F) for 6 minutes, which suits a fairly thin steak. Add a few minutes for thick cuts or well done, then let it rest before cutting.",
      tip: "Cosori warns that wet, marinated meat spits and smokes in an air fryer, so pat it dry before it goes in.",
      svg:
        '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="' + outline([
          [25.8, 16], [34.5, 16.5], [43.2, 18.3], [47.6, 20], [52.2, 22.6], [54.8, 25], [56.6, 28.4], [57, 32.5], [56.8, 36.9], [55.6, 39.6],
          [53, 41.7], [48, 42.6], [40.4, 43.5], [31.5, 45.5], [23.1, 47.6], [16.4, 47.3], [11.2, 44.7], [8, 40.4], [7, 36.5], [7, 28],
          [8, 24.4], [11.4, 20.4], [14.8, 18.3], [19.4, 16.8]
        ]) + outline([
          [26.9, 21.3], [25.6, 21.5], [16, 32], [15.7, 33.7], [16.4, 34.3], [18, 34], [21.9, 30.4], [26, 29], [38.4, 30.2], [40.4, 29.3],
          [40.3, 28.2], [39.4, 27.3], [27.9, 26], [26.9, 24.8], [27.4, 22.1]
        ]) + outline([
          [54.2, 35.4, 1], [50.9, 36.7], [37.9, 38.3], [23.1, 42.2], [18.7, 42.2], [15.7, 41.5], [10.1, 38.3, 1], [12.2, 41.9], [14.8, 43.9],
          [17.8, 45], [22.9, 45.2], [38.4, 41.1], [51.4, 39.5], [53.8, 37.6]
        ]) + '"/>'
    },
    {
      id: "airfryer-fish",
      name: "Fish (seafood preset)",
      quiz: "Fish preset",
      category: "airfryer",
      aka: ["fish", "seafood", "whole fish", "fish preset", "seafood preset", "Smart Chef fish"],
      looksLike: ["fish", "goldfish", "fish shape", "fish in a circle", "fish with an eye", "little fish"],
      meaning:
        "The fish preset. Cosori calls it Seafood; on Philips Smart Sensing models it's a Smart Chef programme for a whole fish.",
      action:
        "On a Cosori it starts at 177°C (350°F) for 8 minutes, and the shake reminder stays off, because shaken fish is just flakes. Turn fillets gently with a fish slice if they need it.",
      tip: "Breaded or battered fish from the freezer is better done on the frozen food preset, or by the packet instructions.",
      svg:
        '<path fill="currentColor" stroke="none" d="' + outline([
          [24.2, 18.5], [28.5, 18.5], [34.7, 20.4], [38.5, 22.6], [43.3, 26.5, 1], [48.7, 22.4], [52.4, 21.5], [55.1, 21.7], [55.9, 23.3],
          [52.4, 28.9], [52.2, 34.1], [53.3, 37.2], [55.9, 40.5], [55.6, 41.8], [54.7, 42.3], [49.7, 41.9], [45.7, 39.8], [43.3, 37.3, 1],
          [38.9, 41], [33.8, 43.9], [28.7, 45.3], [23.5, 45.3], [18.9, 43.9], [13, 40.5], [8, 35.9], [8, 34.5], [10.3, 32, 1], [8, 29.3],
          [8.2, 27.7], [11.6, 24.5], [16.7, 21]
        ]) + '"/>' +
        '<circle class="knock" stroke="none" cx="20.1" cy="28.9" r="2.2"/>'
    },
    {
      id: "airfryer-shrimp",
      name: "Prawn (shrimp preset)",
      quiz: "Prawn preset",
      category: "airfryer",
      aka: ["shrimp", "prawns", "prawn", "king prawns", "shrimp preset", "SHRIMP"],
      looksLike: ["prawn", "shrimp", "curled bug", "lobster tail", "curled caterpillar", "crustacean", "seahorse"],
      meaning:
        "The prawn preset. It says Shrimp because the panel speaks American.",
      action:
        "On a Cosori it starts at 188°C (370°F) for 6 minutes with the shake reminder on. Raw prawns are done when they've turned pink and opaque all the way through; a minute too long and they go rubbery.",
      tip: "Most supermarket prawns are already cooked (the pink ones), so you're only heating them through. A few minutes is plenty.",
      svg:
        SHRIMP
    },
    {
      id: "airfryer-bacon",
      name: "Bacon (bacon preset)",
      quiz: "Bacon preset",
      category: "airfryer",
      aka: ["bacon", "rashers", "streaky bacon", "bacon preset", "BACON"],
      looksLike: ["bacon", "wavy strip", "rasher", "wavy ribbon", "stripy wave", "ribbon", "streaky bacon"],
      meaning:
        "The bacon preset, drawn as a wavy rasher of streaky.",
      action:
        "On a Cosori it starts at 160°C (320°F) for 8 minutes. Lay the rashers flat in one layer; thick back bacon may want a couple of minutes more.",
      tip: "Fat drips into the bottom of the basket. Cosori says to pour it away after cooking, or it smokes next time you use it.",
      svg:
        '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="' + outline([
          [44.5, 7.9, 1], [57, 20.8, 1], [54.5, 23.9], [50.7, 26], [47.4, 28.6], [45.1, 33.2], [41.2, 37.7], [35.4, 40.8], [32.4, 43.6],
          [29.2, 49.2], [25.6, 53.3], [18.9, 56.1, 1], [7, 42.8, 1], [9.6, 40.2], [13.8, 38], [16.6, 35.6], [18.7, 32.4], [20.3, 28.4],
          [22.6, 26], [27.5, 23.8], [31, 21.3], [33.2, 17.2], [34.8, 14.6], [37.2, 12.3], [42.4, 9.8]
        ]) + ribbon(BACON_STREAK, 2.3) + ribbon(BACON_STREAK, 2.3, 3.5, 3.4) + '"/>'
    },
    {
      id: "airfryer-vegetables",
      name: "Carrot (vegetables preset)",
      quiz: "Vegetables preset",
      category: "airfryer",
      aka: ["vegetables", "veg", "veggies", "vegetable preset", "VEG"],
      looksLike: ["carrot", "carrot with leaves", "parsnip", "radish", "vegetable", "carrot in a circle"],
      meaning:
        "The vegetables preset. Cosori draws a carrot but means any veg: broccoli, peppers, courgettes, sprouts.",
      action:
        "On a Cosori it starts at 160°C (320°F) for 8 minutes with the shake reminder on. Cut everything to a similar size, toss it in a little oil, and shake when it reminds you.",
      tip: "Potatoes and other root veg take a lot longer than 8 minutes. Some Cosori models have a separate root vegetables preset for exactly that.",
      svg:
        '<path fill="currentColor" stroke="none" d="' + outline([
          [7.7, 56.4], [7.1, 54.6], [11.6, 44.8], [17.5, 34.6], [23.6, 25.4], [28.4, 20.7], [32.4, 17.4], [36.4, 15.1], [40.4, 15.1],
          [44.6, 17.2], [47.6, 20.9], [48.5, 25.2], [47.3, 30.1], [45.1, 33.2], [38.9, 39.4], [35.5, 42.2], [27, 47.6], [17.9, 52.7], [9.2, 56.7]
        ]) + '"/>' +
        knockLine([28.3, 18.4], [35, 24.6], 2.6) + knockLine([39.4, 42.4], [32.4, 35.6], 2.6) + knockLine([11, 41.6], [15.8, 45.9], 2.6) +
        '<g stroke-width="2.8"><path d="M45.2 15L46.5 8.6M48 15.6L54.3 9.3M48.4 18.9L55.6 17.2"/></g>'
    },

    // =====================================================================
    // WHAT THE DISPLAY SAYS
    // =====================================================================
    {
      id: "airfryer-end",
      name: "End on the display",
      quiz: "Cooking finished",
      category: "airfryer",
      aka: ["End", "END", "End message", "cooking finished", "program ended"],
      looksLike: ["end", "end in digits", "3nd"],
      meaning:
        "Cooking's finished. Cosori and Instant Vortex air fryers both show End when the time runs out, along with some beeping.",
      action:
        "Take the food out, or add a few more minutes if it isn't done. An Instant beeps once a minute for up to 10 minutes until you deal with it.",
      tip: "Food left in a hot drawer keeps cooking for a while, so get chips out promptly if you like them crisp rather than crunchy.",
      svg: display('<text x="32" y="40.5" font-size="22">End</text>')
    },
    {
      id: "airfryer-add-food",
      name: "Add Food on the display",
      quiz: "Preheated, put the food in",
      category: "airfryer",
      aka: ["Add Food", "ADD FOOD", "add food message", "preheated", "preheat done"],
      looksLike: ["add food", "add"],
      meaning:
        "The air fryer has finished preheating and is ready for your food. Instant Vortex models show it on Air Fry, Roast, Bake and Grill (Broil on American models).",
      action:
        "Pull out the basket, put the food in and slide it back. Cooking and the countdown start once the basket is back in.",
      tip: "Cosori does the same job with READY and a row of dashes after preheating. Different words, same message: hurry up with the chips.",
      svg: display('<text x="32" y="29" font-size="14">Add</text><text x="32" y="45" font-size="14">Food</text>', 40)
    },
    {
      id: "airfryer-turn-food",
      name: "Turn Food on the display",
      quiz: "Turn the food over",
      category: "airfryer",
      aka: ["Turn Food", "TURN FOOD", "turn food message", "flip food", "turn reminder"],
      looksLike: ["turn food", "turn"],
      meaning:
        "A reminder, part-way through cooking, to turn the food over. It's Instant Vortex's version of the shake reminder.",
      action:
        "Pull the basket out, flip or turn the food, and slide it back in; cooking carries on. Do nothing and it carries on anyway after 10 seconds.",
      tip: "Flat things like burgers, chicken breasts and fish fillets want turning; small things like chips just want a shake.",
      svg: display('<text x="32" y="29" font-size="14">Turn</text><text x="32" y="45" font-size="14">Food</text>', 40)
    },
    {
      id: "airfryer-hold",
      name: "Hold on a Ninja display",
      quiz: "Waiting to finish in sync",
      category: "airfryer",
      aka: ["Hold", "HOLD", "Hold message", "Ninja hold", "dual zone hold"],
      looksLike: ["hold", "hold on a ninja"],
      meaning:
        "Nothing's wrong. On a Ninja Dual Zone air fryer using SYNC, the drawer with the shorter cooking time shows Hold and waits, so that both drawers finish at the same time.",
      action:
        "Leave it. It starts cooking by itself once the other drawer's time has counted down to match. Put the food in both drawers before you press start, so you don't have to come back.",
      tip: "Seeing Hold when you wanted both drawers cooking at once? You pressed SYNC. MATCH is the one that runs both drawers together.",
      svg: display('<text x="32" y="40.5" font-size="21">Hold</text>')
    },
    {
      id: "airfryer-sync",
      name: "SYNC button (dual zone)",
      quiz: "Finish both drawers together",
      category: "airfryer",
      aka: ["SYNC", "sync", "SyncFinish", "sync finish", "Ninja sync", "dual zone sync", "smart finish"],
      looksLike: ["sync", "sync on a ninja", "sync in a box"],
      meaning:
        "SYNC makes both drawers of a Ninja Dual Zone air fryer finish at the same time, even with different foods, functions and times. Instant calls its version SyncFinish.",
      action:
        "Set drawer 1, then drawer 2, each with its own function, temperature and time. Press SYNC, then START/STOP. The drawer with the shorter time shows Hold and starts later by itself.",
      tip: "Instant's SyncCook does what Ninja's MATCH does, and its SyncFinish does what Ninja's SYNC does. Clear as mud.",
      svg: '<rect x="6" y="18" width="52" height="28" rx="8"/><text x="32" y="38" font-size="15.5">SYNC</text>'
    },
    {
      id: "airfryer-match",
      name: "MATCH button (dual zone)",
      quiz: "Copy drawer 1 to drawer 2",
      category: "airfryer",
      aka: ["MATCH", "match", "SyncCook", "sync cook", "match cook", "Ninja match", "dual zone match"],
      looksLike: ["match", "match on a ninja", "match in a box"],
      meaning:
        "MATCH copies the function, temperature and time from drawer 1 to drawer 2, for a double batch of the same thing. Instant calls its version SyncCook.",
      action:
        "Set drawer 1, press MATCH, then START/STOP. Both drawers then cook with the same settings, side by side.",
      tip: "On an Instant, changing the time or temperature keeps SyncCook on for both zones, but pick one zone to change and SyncCook switches off.",
      svg: '<rect x="5" y="18" width="54" height="28" rx="8"/><text x="32" y="37.5" font-size="12.5">MATCH</text>'
    },
    {
      id: "airfryer-error",
      name: "E1 or E2 on the display",
      quiz: "Temperature sensor fault",
      category: "airfryer",
      urgency: "soon",
      aka: ["E1", "E2", "E01", "E02", "E21", "E22", "E3", "error code", "air fryer error", "E message"],
      looksLike: ["e1", "e2", "e01", "e02", "e3"],
      meaning:
        "There's a fault with the temperature sensor inside. On Cosori and Instant air fryers, E1 means the sensor's circuit is open (a broken connection) and E2 means it has short-circuited. Without it the air fryer can't control its temperature.",
      action:
        "Switch it off and unplug it. Cosori and Instant both say to contact customer support for E1 and E2, as it isn't something you can fix yourself.",
      tip: "Cosori's TurboBlaze uses E01/E21 and E02/E22 for the same two faults. E3 on a Cosori means the overheat protection has kicked in: unplug it and let it cool completely before trying again. Ninja just shows E and says to contact customer service.",
      svg: display('<text x="32" y="41" font-size="24">E1</text>')
    },
    {
      id: "airfryer-dashes",
      name: "Dashes on the display (- - -)",
      quiz: "Preheated, or still calculating",
      category: "airfryer",
      aka: ["dashes", "- - -", "---", "blinking bars", "lines on the display", "READY", "calculating"],
      looksLike: ["dashes", "three dashes", "lines instead of numbers", "minus signs", "blinking lines", "dash dash dash", "underscores"],
      meaning:
        "Depends on the brand. On a Cosori, dashes with READY underneath mean it has finished preheating and is waiting for the food. On a Philips with Smart Sensing, blinking bars mean it's still working out how long to cook for.",
      action:
        "Cosori: put the food in and press start. Philips: keep the drawer shut until the bars stop blinking and a time appears, because opening it during the calculation stops the Smart Chef programme.",
      tip: "On a Philips, setting the time to - - puts it into preheating mode instead of cooking.",
      svg: display('<g stroke-width="4.5"><path d="M12 32H20.5M27.75 32H36.25M43.5 32H52"/></g>')
    }
  ]);
})();
