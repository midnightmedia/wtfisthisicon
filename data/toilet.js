/* Japanese-style washlet / shower-toilet control panels and
 * public-toilet wall buttons (toilet).
 * Format and drawing rules are in data/README.md.
 *
 * The first eight entries are the standard pictograms agreed by the Japan
 * Sanitary Equipment Industry Association (日本レストルーム工業会) in January 2017,
 * six of which went into ISO 7000 in 2018 and seven into JIS S 0103 in 2018.
 * Shared parts below keep that family consistent: one dot size, one dotted
 * "fountain" of water, one side-on toilet bowl with a swinging arrow, one swirl. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }
  function rad(a) { return (a * Math.PI) / 180; }

  var DOT = 2.3; // radius of the water dots used across the family

  function dot(x, y, r) {
    return '<circle cx="' + r2(x) + '" cy="' + r2(y) + '" r="' + (r || DOT) + '"/>';
  }

  // Smooth path through a list of [x, y] points (Catmull-Rom turned into cubic Béziers).
  function smooth(p) {
    var d = "M" + r2(p[0][0]) + " " + r2(p[0][1]);
    for (var i = 0; i < p.length - 1; i++) {
      var a = p[i - 1] || p[i], b = p[i], c = p[i + 1], e = p[i + 2] || c;
      d += "C" + r2(b[0] + (c[0] - a[0]) / 6) + " " + r2(b[1] + (c[1] - a[1]) / 6) + " " +
        r2(c[0] - (e[0] - b[0]) / 6) + " " + r2(c[1] - (e[1] - b[1]) / 6) + " " + r2(c[0]) + " " + r2(c[1]);
    }
    return d;
  }

  // Flush swirl: a spiral running clockwise from angle a0 (radius r0) to a1 (radius r1),
  // followed by n water dots carrying on round the outside.
  function swirl(cx, cy, r0, r1, a0, a1, n, gap, dotStep, sw) {
    var pts = [], k = (r1 - r0) / (a1 - a0);
    for (var a = a0; a <= a1 + 0.01; a += 12) {
      var r = r0 + k * (a - a0);
      pts.push([cx + r * Math.cos(rad(a)), cy + r * Math.sin(rad(a))]);
    }
    var out = '<path d="' + smooth(pts) + '" stroke-width="' + (sw || 3.5) + '"/><g fill="currentColor" stroke="none">';
    for (var i = 1; i <= n; i++) {
      var ang = a1 + gap + (i - 1) * dotStep, rr = r1 + 3.2 + k * (ang - a1) * 0.6;
      out += dot(cx + rr * Math.cos(rad(ang)), cy + rr * Math.sin(rad(ang)));
    }
    return out + "</g>";
  }

  // Dotted fountain: a stem of dots rising to an apex at (cx, top), then spray dots
  // arching out and down on both sides. spread = horizontal reach of the spray.
  function fountain(cx, top, stem, spread, rows) {
    var out = '<g fill="currentColor" stroke="none">', i;
    for (i = 0; i < stem; i++) out += dot(cx, top + 7 + i * 6);
    out += dot(cx, top);
    var n = rows || 2;
    for (i = 1; i <= n; i++) {
      var t = i / n, dx = spread * t, dy = 7 * t * t + 1.5 * t;
      out += dot(cx - dx, top + dy) + dot(cx + dx, top + dy);
    }
    return out + "</g>";
  }

  // Side-on toilet bowl (hinge on the right) used by the lid and seat pictograms.
  var BOWL = '<path d="M18 42H46V45.5A9.5 9.5 0 0 1 36.5 55H27.5A9.5 9.5 0 0 1 18 45.5Z"/>';

  // Lid or seat swung half open: a line from the hinge (hx, hy) up and to the left, length len.
  function lever(hx, hy, len) {
    var a = rad(212);
    return '<path d="M' + hx + " " + hy + "L" + r2(hx + len * Math.cos(a)) + " " + r2(hy + len * Math.sin(a)) + '"/>';
  }

  // Curved double-headed arrow: arc of radius r round (cx, cy) from angle a0 to a1.
  function swingArrow(cx, cy, r, a0, a1, sw) {
    function pt(a, rr) { return [cx + rr * Math.cos(rad(a)), cy + rr * Math.sin(rad(a))]; }
    var s = pt(a0, r), e = pt(a1, r), h = 5.5, w = 32;
    function head(a, dir) {
      var p = pt(a, r), t = a + dir * 90, b1 = rad(t + 180 - w), b2 = rad(t + 180 + w);
      return "M" + r2(p[0] + h * Math.cos(b1)) + " " + r2(p[1] + h * Math.sin(b1)) + "L" + r2(p[0]) + " " + r2(p[1]) +
        "L" + r2(p[0] + h * Math.cos(b2)) + " " + r2(p[1] + h * Math.sin(b2));
    }
    return '<path stroke-width="' + (sw || 3) + '" d="M' + r2(s[0]) + " " + r2(s[1]) + "A" + r + " " + r + " 0 0 1 " +
      r2(e[0]) + " " + r2(e[1]) + head(a0, -1) + head(a1, 1) + '"/>';
  }

  // Wavy line from x0 to x1 at height y (one full S per `len` units), amplitude amp.
  function wave(x0, x1, y, amp) {
    var d = "M" + x0 + " " + y, len = (x1 - x0) / 2;
    d += "C" + r2(x0 + len * 0.35) + " " + r2(y - amp) + " " + r2(x0 + len * 0.65) + " " + r2(y - amp) + " " + r2(x0 + len) + " " + y;
    d += "S" + r2(x0 + len * 1.65) + " " + r2(y + amp) + " " + x1 + " " + y;
    return d;
  }

  // Vertical wavy wisp (heat or smell) from (x, y0) up to (x, y1).
  function wisp(x, y0, y1, amp) {
    var h = (y0 - y1) / 2;
    return "M" + x + " " + y0 + "C" + (x - amp) + " " + r2(y0 - h * 0.35) + " " + (x - amp) + " " + r2(y0 - h * 0.65) + " " + x + " " + r2(y0 - h) +
      "S" + (x + amp) + " " + r2(y0 - h * 1.65) + " " + x + " " + y1;
  }

  // Four-pointed sparkle (solid), centred on (cx, cy), radius s.
  function sparkle(cx, cy, s) {
    var k = s * 0.22;
    return '<path fill="currentColor" stroke="none" d="M' + cx + " " + (cy - s) +
      "C" + r2(cx + k) + " " + r2(cy - k) + " " + r2(cx + k) + " " + r2(cy - k) + " " + (cx + s) + " " + cy +
      "C" + r2(cx + k) + " " + r2(cy + k) + " " + r2(cx + k) + " " + r2(cy + k) + " " + cx + " " + (cy + s) +
      "C" + r2(cx - k) + " " + r2(cy + k) + " " + r2(cx - k) + " " + r2(cy + k) + " " + (cx - s) + " " + cy +
      "C" + r2(cx - k) + " " + r2(cy - k) + " " + r2(cx - k) + " " + r2(cy - k) + " " + cx + " " + (cy - s) + 'Z"/>';
  }

  // Water drop (solid): round part of radius r centred on (cx, cy), point on top.
  function drop(cx, cy, r) {
    var t = r2(cy - 2.2 * r);
    return '<path fill="currentColor" stroke="none" d="M' + cx + " " + t +
      "C" + r2(cx - 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + r2(cx - r) + " " + r2(cy - 0.8 * r) + " " + r2(cx - r) + " " + cy +
      "A" + r + " " + r + " 0 0 0 " + r2(cx + r) + " " + cy +
      "C" + r2(cx + r) + " " + r2(cy - 0.8 * r) + " " + r2(cx + 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + cx + " " + t + 'Z"/>';
  }

  // Bottom seen from behind (the "w" in the rear-wash pictogram).
  var BOTTOM = '<path d="M13 11C13 22 17.5 28 24 28C28 28 30.7 25.7 32 21.5C33.3 25.7 36 28 40 28C46.5 28 51 22 51 11"/>';

  WTF.add([
    // =====================================================================
    // THE STANDARD PICTOGRAMS (JSEIA 2017)
    // =====================================================================
    {
      id: "toilet-stop",
      name: "Stop (止)",
      quiz: "Stop the spray",
      category: "toilet",
      color: "amber",
      aka: ["止 (tome)", "止める (tomeru)", "STOP", "stop button", "停止 (teishi)"],
      looksLike: ["orange button", "orange square", "black square", "square", "止", "button with a square on it", "box"],
      meaning:
        "Stops whatever the seat is doing: the rear wash, the bidet spray or the dryer. In the 2017 industry-standard set the symbol is a plain filled square, and the button is usually orange so you can find it in a hurry.",
      action:
        "Water won't stop spraying? Press 止. The washes only run while a sensor in the seat knows you're sitting, so on most seats they also stop if you stand up, and many switch themselves off after a couple of minutes anyway.",
      tip: "It doesn't flush and it isn't an off switch for the whole toilet. The flush is a separate button, lever or sensor: look for 大 / 小 or 流す.",
      svg:
        '<text x="32" y="27" font-size="22">止</text>' +
        '<rect x="20" y="33" width="24" height="24" rx="2" fill="currentColor" stroke="none"/>'
    },
    {
      id: "toilet-rear-wash",
      name: "Rear wash (おしり)",
      category: "toilet",
      aka: ["おしり (oshiri)", "おしり洗浄 (oshiri senjō)", "rear wash", "rear cleansing", "REAR", "washlet", "spray wash"],
      looksLike: ["bum with water", "bottom with a fountain", "w with dots", "fountain", "dots spraying up", "dotted fountain", "butt", "bum"],
      meaning:
        "A thin nozzle slides out from under the back of the seat and sprays warm water up at your bottom to wash it. The standard picture is a bottom (the curvy 'w') with a dotted fountain of water hitting it from below.",
      action:
        "Stay sitting (it won't work if you're standing), press it, then press 止 (stop) when you're done: 10–20 seconds is plenty. Pat dry with paper or use the dryer. Too fierce? Press − on the pressure (水勢) buttons.",
      tip: "Before 2017 every maker drew this differently: a plain fountain, a side-on person, just a nozzle. Older panels still use their own pictures, but the button is nearly always labelled おしり.",
      svg: BOTTOM + fountain(32, 36, 3, 15, 2)
    },
    {
      id: "toilet-bidet",
      name: "Bidet / front wash (ビデ)",
      category: "toilet",
      aka: ["ビデ (bide)", "ビデ洗浄 (bide senjō)", "front wash", "feminine wash", "FRONT", "bidet"],
      looksLike: ["person sitting", "sitting person with dots", "woman sitting", "person on a toilet", "seated figure with water", "person with a fountain"],
      meaning:
        "The front wash, mainly for women: a softer, wider spray aimed further forward than the rear wash (some seats even use a separate nozzle for it). The standard pictogram is a seated person with a dotted fountain underneath.",
      action:
        "Press it while sitting and press 止 (stop) to end it. If you only came in for a wee, you can ignore it completely.",
      tip: "In Japan 'bidet' means this front wash only; the whole seat is a washlet or 'shower toilet'. On some TOTO remotes the button reads ビデ / ワイド (FRONT / WIDE) and pressing it again gives a wider spray.",
      svg:
        '<circle cx="42" cy="11" r="5.5" fill="currentColor" stroke="none"/>' +
        '<path d="M40 21V34H22V44" stroke-width="7"/><path d="M40 25L30 29" stroke-width="4.5"/>' +
        fountain(37, 43.5, 2, 9, 2)
    },
    {
      id: "toilet-dryer",
      name: "Dryer (乾燥)",
      category: "toilet",
      aka: ["乾燥 (kansō)", "温風乾燥 (onpū kansō)", "warm air dryer", "DRYER", "dry"],
      looksLike: ["three wavy lines", "wavy lines", "wind", "waves", "squiggly lines", "air blowing", "three lines"],
      meaning: "Blows warm air from under the back of the seat to dry your bottom after a wash.",
      action:
        "Press it while you're still sitting, and 止 (stop) when you've had enough. It's slow, so most people pat dry with paper first (or instead). On some seats pressing it again changes the air temperature.",
      tip: "It isn't a hand dryer or a fan for the room. Like the washes it only works while you're sitting, and it switches itself off after a few minutes.",
      svg:
        '<path d="' + wave(10, 54, 19, 5) + wave(10, 54, 32, 5) + wave(10, 54, 45, 5) + '"/>'
    },
    {
      id: "toilet-flush-full",
      name: "Big flush (大)",
      quiz: "Flush after a poo",
      category: "toilet",
      aka: ["大 (dai)", "流す 大 (nagasu dai)", "便器洗浄 大 (benki senjō dai)", "full flush", "large flush", "FLUSH"],
      looksLike: ["big swirl", "spiral", "swirl with dots", "whirlpool", "spiral with dots", "big wave", "大", "snail"],
      meaning:
        "Flushes with the full amount of water: for poo, or plenty of paper. The standard symbol is a big swirl (water spinning round the bowl) with drops around it, and the button or lever is usually marked 大, 'big'.",
      action:
        "Press it once and give it a second to start. On a tank lever, 大 is one direction and 小 the other (look for the arrows). Nothing happening? The flush may be a separate wall button (流す), a hand sensor, or automatic when you stand up.",
      tip: "Toilet paper goes in the bowl in Japan: it's made to break up. Sanitary products go in the little bin.",
      svg: swirl(33, 35, 2.5, 18, -90, 540, 5, 28, 26)
    },
    {
      id: "toilet-flush-small",
      name: "Small flush (小)",
      quiz: "Flush after a wee",
      category: "toilet",
      aka: ["小 (shō)", "流す 小 (nagasu shō)", "便器洗浄 小 (benki senjō shō)", "half flush", "light flush", "eco flush", "LIGHT FLUSH"],
      looksLike: ["small swirl", "little spiral", "small spiral with dots", "small wave", "小", "swirl"],
      meaning:
        "A shorter flush with less water: for a wee and a little paper. The standard symbol is a smaller swirl with fewer drops, and buttons and levers usually say 小, 'small'.",
      action: "Use it after a wee. If it doesn't clear everything, press 大 (big) as well.",
      tip: "TOTO's guidance for one of its toilets: small flush for a wee and up to about 3 metres of single-ply paper, big flush for anything more.",
      svg: swirl(35.5, 36, 2.2, 13.5, -270, 180, 3, 32, 28)
    },
    {
      id: "toilet-lid-open-close",
      name: "Lid open / close (便ふた開閉)",
      category: "toilet",
      aka: ["便ふた開閉 (benfuta kaihei)", "便フタ (benfuta)", "LID OPEN/CLOSE", "toilet lid", "lid"],
      looksLike: ["toilet with curved arrow", "toilet side view", "toilet with lid", "cup with a line and an arrow", "lid going up", "bowl with arrow"],
      meaning:
        "Opens or closes the lid by motor. The standard picture shows the toilet from the side, with the lid half-raised and a curved arrow showing it swing.",
      action:
        "Press once to open, again to close. Many toilets also lift the lid by themselves when you walk in and close it after you leave, so don't be alarmed if it moves on its own. You can still open and close it by hand.",
      tip: "Some toilets (TOTO, for one) can be set to flush only once the lid has shut itself, so a short wait after you stand up is normal.",
      svg: BOWL + '<path d="M18 37.5H46"/>' + lever(46, 34, 20) + swingArrow(46, 34, 28, 200, 254)
    },
    {
      id: "toilet-seat-open-close",
      name: "Seat up / down (便座開閉)",
      category: "toilet",
      aka: ["便座開閉 (benza kaihei)", "便座 (benza)", "SEAT OPEN/CLOSE", "seat up", "toilet seat"],
      looksLike: ["toilet with seat raised", "toilet side view with two lines", "toilet with curved arrow", "toilet with seat up", "cup with lines and an arrow", "bowl with arrow"],
      meaning:
        "Lifts or lowers the seat ring by motor, for anyone who wants to stand to wee. In the standard picture the lid is already fully up (the upright line) and the seat is half-raised with a curved arrow.",
      action:
        "Press once to raise the seat, again to lower it. On toilets that open the lid automatically, only the lid lifts by itself: one TOTO manual tells you to raise the seat with this button.",
      tip: "The two pictograms look almost the same. Lid: one slanted line above a flat seat. Seat: a slanted line plus an upright one behind it.",
      svg: BOWL + '<path d="M50 13V37"/>' + lever(44, 37, 20) + swingArrow(44, 37, 27, 200, 250)
    },

    // =====================================================================
    // OTHER WASHLET / SHOWER-TOILET CONTROLS
    // =====================================================================
    {
      id: "toilet-water-pressure",
      name: "Water pressure (水勢)",
      category: "toilet",
      aka: ["水勢 (suisei)", "洗浄強さ (senjō tsuyosa)", "強 / 弱 (kyō / jaku)", "PRESSURE", "spray strength"],
      looksLike: ["plus and minus", "minus plus", "- +", "two buttons with plus and minus", "水勢", "strong weak"],
      meaning:
        "Makes the wash spray weaker (−) or stronger (+), usually in five steps. Older panels may have a dial instead, or buttons marked 弱 (weak) and 強 (strong).",
      action:
        "Press − straight away if the spray is too fierce; it only works while a wash is running. Some seats go back to the middle setting after you've finished.",
      tip: "If nothing comes out at all on the weakest setting, turn it up: on low mains pressure some seats can't push the nozzle out.",
      svg:
        '<text x="32" y="24" font-size="17">水勢</text>' +
        '<circle cx="18" cy="43" r="10.5"/><circle cx="46" cy="43" r="10.5"/>' +
        '<path d="M13 43H23M41 43H51M46 38V48" stroke-width="3"/>'
    },
    {
      id: "toilet-nozzle-position",
      name: "Nozzle position (位置)",
      category: "toilet",
      aka: ["位置 (ichi)", "洗浄位置 (senjō ichi)", "ノズル位置 (nozuru ichi)", "前 / 後 (mae / ushiro)", "POSITION", "nozzle position"],
      looksLike: ["up and down triangles", "two triangles", "arrows up and down", "triangles", "▲▼", "front back", "位置"],
      meaning:
        "Moves the spray further forward or further back so it hits the right spot. Usually ▲ ▼ buttons, or 前 (front) and 後 (back), with about five steps.",
      action:
        "Adjust it while the wash is running until it feels right. Sitting well back on the seat helps the spray line up and splash less.",
      tip: "Not the same as 水勢 (pressure), which changes how hard the water hits, not where.",
      svg:
        '<text x="32" y="24" font-size="17">位置</text>' +
        '<circle cx="18" cy="43" r="10.5"/><circle cx="46" cy="43" r="10.5"/>' +
        '<path d="M18 37.5L23.5 46.5H12.5Z M46 48.5L40.5 39.5H51.5Z" fill="currentColor" stroke="none"/>'
    },
    {
      id: "toilet-water-temperature",
      name: "Water temperature (温水温度)",
      category: "toilet",
      aka: ["温水温度 (onsui ondo)", "温水 (onsui)", "温度 (ondo)", "TEMP", "water temp", "warm water"],
      looksLike: ["thermometer with a drop", "thermometer and water drop", "thermometer", "drop and thermometer", "温水"],
      meaning:
        "Sets how warm the wash water is, from off to high (roughly 35–40°C). On home seats it's often under a flap, on the back of the remote or in a menu.",
      action:
        "In someone else's loo, best left alone. Water suddenly cold? The little hot-water tank may be used up after a long wash: wait a few minutes. Cold every time? Check power saving (節電) isn't on.",
      tip: "Sliders and menus often just say 切 (off), 低 (low), 中 (medium) and 高 (high).",
      svg:
        '<path d="M20 38.2V14A5 5 0 0 1 30 14V38.2A9 9 0 1 1 20 38.2Z"/>' +
        '<circle cx="25" cy="45.5" r="4" fill="currentColor" stroke="none"/><path d="M25 44V24" stroke-width="3.5"/>' +
        drop(44, 42, 7)
    },
    {
      id: "toilet-seat-temperature",
      name: "Heated seat / seat temperature (便座温度)",
      category: "toilet",
      aka: ["便座温度 (benza ondo)", "便座 (benza)", "暖房便座 (danbō benza)", "heated seat", "seat warmer"],
      looksLike: ["toilet seat with heat waves", "oval with wavy lines", "ring with steam", "seat with squiggles", "oval ring with heat", "doughnut with steam"],
      meaning:
        "Sets how warm the seat is, from off to high. A warm seat is completely normal in Japan; it isn't broken and nobody has just been sitting there.",
      action:
        "Too hot? Turn it down or to 切 (off). Manufacturers say to switch it off for long sits, and for children or anyone who can't feel heat well, as a warm seat over a long time can cause low-temperature burns.",
      tip: "Seat cold? Power saving (節電) may have switched the heater off; on many seats it warms up again within about a minute of you sitting down.",
      svg:
        BOWL + '<path d="M18 37.5H46M50 13V37"/>' +
        '<path d="' + wisp(22, 31, 11, 3.2) + wisp(31, 31, 11, 3.2) + wisp(40, 31, 11, 3.2) + '" stroke-width="3"/>'
    },
    {
      id: "toilet-deodoriser",
      name: "Deodoriser (脱臭)",
      category: "toilet",
      aka: ["脱臭 (dasshū)", "パワー脱臭 (pawā dasshū)", "deodorizer", "odour", "smell", "air freshener"],
      looksLike: ["脱臭", "wavy lines", "smell lines", "squiggly lines going up", "steam", "writing with wavy lines"],
      meaning:
        "A small fan in the seat pulls air out of the bowl and through a filter to take the smell away. Most seats run it automatically while you sit; パワー脱臭 (power deodorise) is a stronger burst.",
      action:
        "Nothing to do: it switches itself on and off. Press it for an extra blast if you need one. A faint whirr while you're sitting is just this fan.",
      tip: "It clears the air in the bowl, not the whole room, so it's no substitute for the extractor fan.",
      svg:
        '<path d="' + wisp(21, 31, 7, 3.5) + wisp(32, 31, 7, 3.5) + wisp(43, 31, 7, 3.5) + '" stroke-width="3"/>' +
        '<text x="32" y="56" font-size="19">脱臭</text>'
    },
    {
      id: "toilet-power-saving",
      name: "Power saving (節電)",
      category: "toilet",
      aka: ["節電 (setsuden)", "タイマー節電 (taimā setsuden)", "おまかせ節電 (omakase setsuden)", "energy saver", "ECO", "power save"],
      looksLike: ["leaf", "leaf in a circle", "green leaf", "green light", "節電", "eco leaf"],
      meaning:
        "Turns the seat and water heaters down or off for hours at a time to save electricity, typically overnight. A green light shows it's on (on TOTO seats, next to a leaf symbol).",
      action:
        "Want a warm seat and warm water? Press it to turn power saving off (the light goes out). Otherwise leave it: everything still works, just cooler.",
      tip: "Some seats learn when the loo is rarely used and turn the heater off by themselves. TOTO calls this おまかせ節電, roughly 'leave it to us' power saving.",
      svg:
        '<path d="M22 37C20 23 30 12 46 10C48 25 40 37 26 37C24.5 37 23.2 37 22 37Z" fill="currentColor" stroke="none"/>' +
        '<path class="knock" d="M24 35L40 18" stroke-width="2.5"/>' +
        '<path d="M22 37L17 42" stroke-width="3"/>' +
        '<text x="32" y="58" font-size="16">節電</text>'
    },
    {
      id: "toilet-oscillating-wash",
      name: "Oscillating wash (ムーブ)",
      category: "toilet",
      aka: ["ムーブ (mūbu)", "ムーブ洗浄 (mūbu senjō)", "OSCILLATE", "oscillating", "moving wash"],
      looksLike: ["spray with arrows", "fountain with left right arrow", "dots with double arrow", "moving spray", "back and forth arrow", "ムーブ"],
      meaning: "Slides the nozzle back and forth while it sprays, so it washes a wider area rather than one spot.",
      action: "Press it during a wash to switch it on, and again to change mode or turn it off. 止 (stop) ends the wash completely.",
      tip: "On TOTO remotes it shares a button with massage (OSCILLATE / PULSATE): each press steps through move, massage, both, then off, with a different beep for each.",
      svg: fountain(32, 12, 3, 14, 2) + '<path d="M12 52H52M18 46L12 52L18 58M46 46L52 52L46 58"/>'
    },
    {
      id: "toilet-pulsating-wash",
      name: "Pulsating / massage wash (マッサージ)",
      category: "toilet",
      aka: ["マッサージ (massāji)", "マッサージ洗浄 (massāji senjō)", "PULSATE", "pulsating", "massage"],
      looksLike: ["spray with a wavy line", "fountain with a wave", "dots big and small", "pulsing water", "wave", "マッサージ"],
      meaning: "Makes the spray pulse between strong and soft, which some people find more pleasant.",
      action: "Press it during a rear wash to start the pulsing and again to stop it. 止 (stop) ends the wash.",
      tip: "How strong the pulse feels depends on the pressure setting: big at +, barely noticeable at −.",
      svg: fountain(32, 12, 3, 14, 2) + '<path d="' + wave(10, 54, 52, 6) + '"/>'
    },
    {
      id: "toilet-soft-wide-wash",
      name: "Soft or wide spray (ソフト / ワイド)",
      category: "toilet",
      aka: ["おしりソフト (oshiri sofuto)", "ワイドビデ (waido bide)", "ソフト (sofuto)", "ワイド (waido)", "SOFT", "WIDE", "gentle wash"],
      looksLike: ["wide fountain", "wide spray", "lots of dots", "spray fan", "dots spreading out", "soft spray"],
      meaning:
        "Gentler versions of the two washes: おしりソフト is a softer rear spray that 'wraps round', ワイドビデ a wider, gentler front spray.",
      action: "On TOTO remotes they share a button with the normal washes (labelled おしり / ソフト and ビデ / ワイド): press it again during the wash to switch. Press 止 (stop) to end it.",
      tip: "There's no standard picture for this one: many remotes just show the normal rear or bidet pictogram with ソフト (soft) or ワイド (wide) written next to it.",
      svg: fountain(32, 20, 4, 21, 3) +
        '<g fill="currentColor" stroke="none">' + dot(32, 10) + dot(21, 12.5) + dot(43, 12.5) + dot(11, 19) + dot(53, 19) + '</g>'
    },
    {
      id: "toilet-nozzle-clean",
      name: "Nozzle clean (ノズルきれい / ノズル洗浄)",
      category: "toilet",
      aka: ["ノズルきれい (nozuru kirei)", "ノズル洗浄 (nozuru senjō)", "ノズルそうじ (nozuru sōji)", "WAND CLEAN", "nozzle cleaning"],
      looksLike: ["stick with sparkles", "wand with stars", "nozzle with sparkles", "pen with sparkles", "magic wand", "sparkles"],
      meaning:
        "Rinses the wash nozzle (the 'wand'). Many seats also do this automatically before and after every wash.",
      action:
        "Best left to whoever owns the toilet. If you press it, water trickles from round the nozzle for a few seconds, which is normal. ノズルそうじ (nozzle cleaning) is different: it pushes the nozzle out so it can be wiped by hand.",
      tip: "Water dribbling near the nozzle just before or after a wash is this self-clean, not a leak.",
      svg:
        '<path d="M12 52L36 28" stroke-width="7"/><path d="M36 28L40 24" stroke-width="7"/>' +
        '<circle class="knock" cx="34" cy="30" r="1.6" stroke="none"/>' +
        sparkle(47, 15, 8) + sparkle(50, 36, 5.5) + sparkle(30, 12, 4.5)
    },

    // =====================================================================
    // PUBLIC TOILETS: WALL BUTTONS, SENSORS, SOUND AND HELP
    // =====================================================================
    {
      id: "toilet-flush-button",
      name: "Flush button on the wall (流す)",
      category: "toilet",
      aka: ["流す (nagasu)", "ながす", "洗浄 (senjō)", "洗浄ボタン (senjō botan)", "便器洗浄 (benki senjō)", "FLUSH", "wash button"],
      looksLike: ["round button", "big round button", "circle on the wall", "silver round button", "流す", "button above the toilet roll"],
      meaning:
        "In many public toilets the flush is a separate button on the side wall. Under the international standard for public loos (ISO 19026, based on a Japanese one) the flush button is round or oval and sits just above the toilet-roll holder.",
      action:
        "Look above the paper holder for the round button marked 流す or 洗浄 and press it. The call-for-help button is at the same height but further back, behind you, and a different shape (often square): not that one.",
      tip: "Some toilets flush when you hold a hand near a sensor, or by themselves when you stand up and walk away. The round button is often there as a backup.",
      svg: '<circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="17.5" stroke-width="2"/><text x="32" y="38" font-size="16">流す</text>'
    },
    {
      id: "toilet-flush-sensor",
      name: "Hand-wave flush sensor",
      quiz: "Touch-free flush",
      category: "toilet",
      aka: ["センサー (sensā)", "手をかざす (te o kazasu)", "touchless flush", "sensor flush", "auto flush", "オート洗浄"],
      looksLike: ["hand", "hand with waves", "hand over a sensor", "palm", "wave your hand", "hand and lines"],
      meaning:
        "A touch-free flush: hold your hand close to the small sensor window, usually on the wall or the cistern, and the toilet flushes. Many newer toilets also flush by themselves a few seconds after you stand up and step away.",
      action:
        "Hold your palm a few centimetres in front of the sensor for a second, then move it away; don't keep tapping. If nothing happens, look for a round flush button (流す) nearby.",
      tip: "The sound-masking box (音姫) often works the same way. Wave at that one and you get the sound of running water instead of a flush: harmless, just confusing.",
      svg:
        '<path d="M25 26V13M31 26V10M37 26V11M43 27V15M22 35L14 27" stroke-width="5.5"/>' +
        '<rect x="20" y="22" width="26" height="20" rx="8" fill="currentColor" stroke="none"/>' +
        '<path d="M21 48A13 4.5 0 0 0 45 48M15 53.5A19 6.5 0 0 0 51 53.5" stroke-width="3"/>'
    },
    {
      id: "toilet-sound-masking",
      name: "Sound princess / flushing-sound button (音姫)",
      category: "toilet",
      aka: ["音姫 (otohime)", "擬音 (gion)", "流水音 (ryūsuion)", "Otohime", "sound princess", "privacy sound", "Sound Decorator"],
      looksLike: ["music note", "musical notes", "bird", "speaker", "notes", "音姫", "hand"],
      meaning:
        "Plays the sound of running water for about 25 seconds to cover any noises you'd rather nobody heard. TOTO launched it in 1988 as Otohime, the 'sound princess', because people were flushing again and again to drown out sounds and wasting a lot of water.",
      action:
        "Press the button or hold your hand over the sensor; do it again to keep it going. It doesn't flush anything and stops on its own.",
      tip: "Most common in women's toilets. Some versions mix birdsong in with the water. 音姫 is TOTO's name; LIXIL's version is called Sound Decorator.",
      svg:
        '<ellipse cx="18" cy="47" rx="7.5" ry="6" transform="rotate(-20 18 47)" fill="currentColor" stroke="none"/>' +
        '<ellipse cx="43" cy="41" rx="7.5" ry="6" transform="rotate(-20 43 41)" fill="currentColor" stroke="none"/>' +
        '<path d="M24.5 45V16M49.5 39V10" stroke-width="3.5"/>' +
        '<path d="M24.5 16L49.5 10V18L24.5 24Z" fill="currentColor" stroke-width="2"/>'
    },
    {
      id: "toilet-emergency-call",
      name: "Emergency call button (呼出)",
      quiz: "Call for help",
      category: "toilet",
      color: "red",
      aka: ["呼出 (yobidashi)", "呼出し (yobidashi)", "非常呼出 (hijō yobidashi)", "呼出ボタン", "CALL", "emergency button", "help button", "assistance alarm"],
      looksLike: ["red button", "square red button", "呼出", "square button with writing", "button behind the toilet", "bell", "pull cord"],
      meaning:
        "Calls for help if you're taken ill or fall: it sets off an alarm or a light in a staff room, station office or outside the cubicle. It does not flush. Under ISO 19026 it's a different shape from the round flush button (often square), usually red, and placed level with the flush button but further back.",
      action:
        "Pressed it by mistake? Don't panic and don't keep pressing. Stay put for a minute: if someone knocks or a voice comes over an intercom, say sorry, it was a mistake (すみません、間違えました, sumimasen, machigaemashita). If nobody comes, tell a member of staff on your way out so nobody goes searching for a collapsed person.",
      tip: "You're in good company: in a 2014 TOTO survey of 600 foreign visitors, about 1 in 11 said they'd pressed an emergency button by mistake. Accessible toilets often have a second button or pull cord low down, for someone who has fallen.",
      svg: '<rect x="9" y="12" width="46" height="40" rx="6"/><text x="32" y="39.5" font-size="18">呼出</text>'
    }
  ]);
})();
