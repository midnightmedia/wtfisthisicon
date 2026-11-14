/* Clothing care labels, washing machines and tumble dryers.
 * Categories: laundry (ISO 3758 / GINETEX + US ASTM care symbols), washer, dryer.
 * See data/README.md for the format and drawing rules. */
(function () {
  // ---- Shared shapes, so every symbol family uses the same outline ----------

  // Washtub: sloped sides, flat bottom, wavy water line just below the rim.
  var TUB = '<path d="M7 15 L14 49 H50 L57 15"/><path d="M8.2 21 q5.95 -6 11.9 0 t11.9 0 t11.9 0 t11.9 0"/>';
  // Temperature number inside the washtub.
  function num(n) { return '<text x="32" y="43" font-size="17">' + n + "</text>"; }
  // Washtub lifted up with one or two "gentle" bars underneath.
  function tubBars(inner, bars) {
    if (bars === 1) return '<g transform="translate(0,-4)">' + TUB + inner + '</g><path d="M9 53 H55"/>';
    return '<g transform="translate(0,-7)">' + TUB + inner + '</g><path d="M9 49 H55 M9 56 H55"/>';
  }
  // Hand dipping into the tub from the top right: mitten with thumb + two finger lines.
  // The knock copy hides the water line behind the hand.
  var HAND_D = "M43 7 V36 A6 6 0 0 1 31 36 V26.8 L26.6 31.2 A2.75 2.75 0 0 1 22.8 27.4 L31 19.2 V7";
  var HANDWASH = TUB + '<g transform="rotate(25 37 20) translate(2,3)"><path class="knock" stroke="none" d="' + HAND_D +
    ' Z"/><path d="' + HAND_D + '"/><path d="M35 33 V41 M39 33 V41" stroke-width="2.25"/></g>';

  // Bleach triangle.
  var TRIANGLE = '<path d="M32 9 L58 54 H6 Z"/>';

  // Drying square (tumble + natural drying) and the tumble-dryer circle.
  var SQUARE = '<rect x="9" y="9" width="46" height="46" rx="2"/>';
  var TUMBLE = SQUARE + '<circle cx="32" cy="32" r="17"/>';

  // Small filled dot used for temperatures (tumble dry, ironing).
  function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="3" fill="currentColor" stroke="none"/>'; }

  // Iron: pointed nose on the left, flat sole, arched handle on top.
  var IRON = '<path d="M7 47 C9 36 17 29 30 29 H57 V47 Z"/><path d="M27 29 C27 21 30 17 37 17 H51 C55 17 57 20 57 24 V29"/>';

  // Professional cleaning circle + letter.
  var CIRCLE = '<circle cx="32" cy="32" r="22"/>';
  function letter(l) { return CIRCLE + '<text x="32" y="41.5" font-size="26">' + l + "</text>"; }

  // "Don't" cross: two lines corner to corner.
  function cross(a, b, c, d) { return '<path d="M' + a + " " + b + " L" + c + " " + d + " M" + c + " " + b + " L" + a + " " + d + '"/>'; }

  // Spin spiral (four half-turns, opening outwards).
  var SPIRAL = '<path d="M36 34 A4 4 0 0 0 28 34 A8 8 0 0 0 44 34 A12 12 0 0 0 20 34 A16 16 0 0 0 52 34 A20 20 0 0 0 12 34"/>';

  // Padlock.
  var LOCK = '<rect x="15" y="28" width="34" height="26" rx="4"/><path d="M22 28 V20 A10 10 0 0 1 42 20 V28"/>';

  // T-shirt (centred on x = 31).
  var SHIRT = '<path d="M23 10 L9 18 L14 28 L19 25 V52 H43 V25 L48 28 L53 18 L39 10 C37 15 25 15 23 10 Z"/>';

  // Wardrobe / cupboard.
  var WARDROBE = '<rect x="14" y="7" width="36" height="45" rx="2"/><path d="M32 7 V52 M28 26 V33 M36 26 V33 M18 52 V57 M46 52 V57"/>';

  // Rinse shower: slanted water drops falling into the tub.
  function shower(xs) {
    var d = "";
    for (var i = 0; i < xs.length; i++) {
      var x = xs[i];
      d += "M" + (x + 2) + " 6 L" + x + " 10 M" + x + " 14 L" + (x - 2) + " 18 ";
    }
    return '<path d="' + d.trim() + '"/>';
  }

  WTF.add([
    // =====================================================================
    // CLOTHING CARE LABELS
    // =====================================================================

    // ---- Washing ----------------------------------------------------------
    {
      id: "laundry-machine-wash",
      name: "Machine wash",
      category: "laundry",
      aka: ["washable", "machine wash normal", "washtub"],
      looksLike: ["bucket", "bucket with wavy line", "tub with water", "washtub", "cup with a wave", "bowl with wavy top"],
      meaning: "The washtub means it can go in the washing machine. On US labels, an empty tub means a normal machine wash at any temperature that suits the fabric.",
      action: "Use a normal cycle. If in doubt, 30–40 °C is the safe middle ground.",
      tip: "This is the base shape for every washing symbol. A number (Europe) or dots (US) inside give the maximum temperature, and lines underneath ask for a gentler cycle.",
      svg: TUB
    },
    {
      id: "laundry-wash-30",
      name: "Wash at 30 °C",
      category: "laundry",
      aka: ["cold wash", "30 degrees", "machine wash cold", "85 °F"],
      looksLike: ["bucket with 30", "tub with 30", "bucket with a number", "bucket with one dot", "tub with a dot", "30 in a bucket"],
      meaning: "Machine wash at no more than 30 °C (86 °F). It's an upper limit: cooler is fine, but hotter risks shrinking, fading or warping.",
      action: "Pick a 30° or cold cycle. Ideal for darks, bright colours and anything you're a bit nervous about.",
      tip: "US labels count dots instead: 1 dot = 30 °C (cold), 2 = 40 °C, 3 = 50 °C, 4 = 60 °C, 5 = 70 °C, 6 = 95 °C. One dot in the tub means the same as this.",
      svg: TUB + num(30)
    },
    {
      id: "laundry-wash-40",
      name: "Wash at 40 °C",
      category: "laundry",
      aka: ["warm wash", "40 degrees", "machine wash warm", "105 °F"],
      looksLike: ["bucket with 40", "tub with 40", "bucket with a number", "bucket with two dots", "tub with 2 dots", "40 in a bucket"],
      meaning: "Machine wash at no more than 40 °C (104 °F). It's the everyday setting for most cottons, mixed fabrics and coloured clothes.",
      action: "Use a normal 40° cycle. Going cooler is always allowed.",
      tip: "On US labels, two dots in the tub means the same as 40 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60 °C).",
      svg: TUB + num(40)
    },
    {
      id: "laundry-wash-60",
      name: "Wash at 60 °C",
      category: "laundry",
      aka: ["hot wash", "60 degrees", "machine wash hot", "140 °F"],
      looksLike: ["bucket with 60", "tub with 60", "bucket with a number", "bucket with four dots", "tub with 4 dots", "60 in a bucket"],
      meaning: "Machine wash at up to 60 °C (140 °F). You'll see it on towels, bedding, underwear and sturdy whites, since it's hot enough to kill most germs and dust mites.",
      action: "Use a 60° cotton cycle for hygiene loads. For lightly worn things 40 °C is fine: the label is giving permission, not orders.",
      tip: "On US labels, four dots in the tub means the same as 60 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60 °C).",
      svg: TUB + num(60)
    },
    {
      id: "laundry-wash-95",
      name: "Wash at 95 °C",
      category: "laundry",
      aka: ["boil wash", "very hot wash", "95 degrees", "200 °F"],
      looksLike: ["bucket with 95", "tub with 95", "bucket with a number", "bucket with six dots", "tub with 6 dots", "95 in a bucket"],
      meaning: "It can be washed at up to 95 °C (around 200 °F), which is practically boiling. Only the toughest white cottons and linens are up to it, such as tea towels, cloths and some bedding.",
      action: "Use the hottest cotton cycle for really grubby or hygiene-critical items. For everyday dirt, 60 °C is plenty.",
      tip: "On US labels, six dots in the tub means the same as 95 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60, 5 = 70, 6 = 95 °C).",
      svg: TUB + num(95)
    },
    {
      id: "laundry-wash-gentle",
      name: "Gentle wash (one line underneath)",
      category: "laundry",
      aka: ["permanent press", "synthetics cycle", "easy care", "mild wash"],
      looksLike: ["bucket with a line under it", "bucket with one line", "underlined bucket", "tub with underline", "bucket with 40 and a line"],
      meaning: "One line under the tub means a gentler machine cycle, with less agitation and a slower spin, like the 'synthetics', 'easy care' or 'permanent press' programme. The number still gives the maximum temperature.",
      action: "Choose the synthetics, easy-care or permanent press programme at or below the temperature shown, and don't overload the drum.",
      tip: "Underlining usually means 'important'. Here it means 'calm down': no line = normal, one = gentle, two = very gentle. It works the same under dry-cleaning circles (and under tumble-dry symbols on US labels).",
      svg: tubBars(num(40), 1)
    },
    {
      id: "laundry-wash-very-gentle",
      name: "Very gentle wash (two lines underneath)",
      category: "laundry",
      aka: ["delicate cycle", "wool cycle", "delicates", "very mild wash"],
      looksLike: ["bucket with two lines under it", "bucket with two lines", "double underlined bucket", "tub with two lines", "bucket with 30 and two lines"],
      meaning: "Two lines under the tub mean a very gentle machine wash, with minimal agitation and a low spin, as on a 'wool', 'delicates' or 'silk' programme. Stick to the temperature in the tub.",
      action: "Use the wool or delicates programme, wash a small load, and consider a mesh laundry bag.",
      tip: "Two lines is as gentle as machine washing gets. One step further is the hand-wash symbol: a hand in the tub.",
      svg: tubBars(num(30), 2)
    },
    {
      id: "laundry-hand-wash",
      name: "Hand wash only",
      category: "laundry",
      aka: ["hand wash", "wash by hand", "no machine wash"],
      looksLike: ["bucket with a hand", "hand in a bucket", "hand in water", "hand dipping into a tub", "tub with hand"],
      meaning: "Wash by hand only, in water no hotter than 40 °C (104 °F). Keep it out of a normal machine cycle.",
      action: "Use lukewarm water and a little gentle detergent. Squeeze rather than rub or wring, rinse, then press the water out in a towel.",
      tip: "Many modern machines have a hand-wash or wool programme that's gentle enough. Check your machine's manual before trusting it with your favourite jumper.",
      svg: HANDWASH
    },
    {
      id: "laundry-do-not-wash",
      name: "Do not wash",
      category: "laundry",
      aka: ["not washable", "no washing"],
      looksLike: ["bucket crossed out", "tub with an x", "crossed out bucket", "bucket with a cross", "x over bucket"],
      meaning: "Don't wash it at all, not in a machine and not by hand. Water will damage it: shrinking, staining or losing its shape.",
      action: "Check the other symbols. Usually it needs professional dry cleaning (a circle). Spot-clean small marks carefully if you must.",
      tip: "A big X through any care symbol simply means 'don't do this'. Finally, one that needs no translation.",
      svg: TUB + cross(8, 9, 56, 55)
    },

    // ---- Bleaching --------------------------------------------------------
    {
      id: "laundry-bleach",
      name: "Any bleach allowed",
      category: "laundry",
      aka: ["bleach ok", "chlorine bleach allowed", "bleach when needed"],
      looksLike: ["triangle", "empty triangle", "plain triangle", "triangle with cl", "warning triangle"],
      meaning: "An empty triangle means any bleach can be used if needed, chlorine or oxygen (non-chlorine). For a shape that looks like a warning sign, it's surprisingly relaxed.",
      action: "Bleach is optional. Follow the instructions on the bottle and always dilute chlorine bleach.",
      tip: "Older labels sometimes show 'Cl' inside the triangle. That also means chlorine bleach is OK.",
      svg: TRIANGLE
    },
    {
      id: "laundry-non-chlorine-bleach",
      name: "Non-chlorine bleach only",
      category: "laundry",
      aka: ["oxygen bleach only", "colour-safe bleach", "no chlorine bleach"],
      looksLike: ["triangle with two lines", "triangle with stripes", "triangle with diagonal lines", "striped triangle", "triangle with slashes"],
      meaning: "Only oxygen-based, non-chlorine bleach (the 'colour-safe' kind) is allowed. Chlorine bleach would damage or discolour it.",
      action: "If you need a stain remover, use a colour-safe (oxygen) one, and keep household chlorine bleach well away.",
      tip: "Many everyday detergents already contain oxygen bleach, so washing as normal is fine.",
      svg: TRIANGLE + '<path d="M18 50.5 L35 21.1 M30 50.5 L41 31.5"/>'
    },
    {
      id: "laundry-do-not-bleach",
      name: "Do not bleach",
      category: "laundry",
      aka: ["no bleach"],
      looksLike: ["triangle crossed out", "triangle with an x", "crossed out triangle", "x over triangle", "solid triangle with a cross"],
      meaning: "Don't use any bleach at all, chlorine or oxygen.",
      action: "Skip bleach and bleach-based stain removers. Use a 'colour' detergent, since powders for whites often contain oxygen bleach.",
      tip: "US labels sometimes draw this as a solid black triangle with the cross. Same meaning, more ink.",
      svg: '<g transform="translate(0,-3)">' + TRIANGLE + "</g>" + cross(12, 14, 52, 58)
    },

    // ---- Tumble drying ----------------------------------------------------
    {
      id: "laundry-tumble-dry",
      name: "Tumble dry",
      category: "laundry",
      aka: ["dryer safe", "tumble dry normal", "machine dry"],
      looksLike: ["square with a circle inside", "circle in a square", "box with a circle", "square with a ring", "washing machine door"],
      meaning: "A circle inside a square means it can go in the tumble dryer. With no dots, any normal heat setting is fine.",
      action: "Dry on a normal setting and take it out promptly to avoid creases.",
      tip: "Dots inside set the heat: one dot = low, two dots = normal, and US labels add three dots for high. A filled-in circle means no heat at all.",
      svg: TUMBLE
    },
    {
      id: "laundry-tumble-dry-low",
      name: "Tumble dry, low heat",
      category: "laundry",
      aka: ["low heat", "gentle tumble dry", "delicate dry"],
      looksLike: ["square with circle and one dot", "circle in a square with a dot", "box with circle and dot", "square circle dot"],
      meaning: "Tumble drying is fine, but only on low heat. The standard allows an exhaust temperature of max 60 °C.",
      action: "Choose the low-heat, delicate or gentle setting on your dryer.",
      tip: "Too much heat is the main reason clothes shrink in the dryer. If yours has no low setting, air-dry instead.",
      svg: TUMBLE + dot(32, 32)
    },
    {
      id: "laundry-tumble-dry-normal",
      name: "Tumble dry, normal heat",
      category: "laundry",
      aka: ["normal heat", "medium heat"],
      looksLike: ["square with circle and two dots", "circle in a square with two dots", "box with circle and dots", "square circle two dots"],
      meaning: "Tumble drying at normal (higher) heat is fine. The standard allows an exhaust temperature of max 80 °C.",
      action: "Use the standard or cotton drying programme.",
      tip: "On US labels, two dots means medium heat and three dots means high. Same dots, different dialect.",
      svg: TUMBLE + dot(25.5, 32) + dot(38.5, 32)
    },
    {
      id: "laundry-tumble-dry-no-heat",
      name: "Tumble dry, no heat",
      category: "laundry",
      aka: ["air fluff", "air only", "no heat", "cool tumble"],
      looksLike: ["square with black circle", "square with filled circle", "solid circle in a square", "black dot in a square", "square with a full moon"],
      meaning: "You can tumble it, but with unheated air only (the 'air fluff' or 'no heat' setting). It's a US-style symbol, and not the most obvious one.",
      action: "Use the air-only, no-heat or refresh setting, or just let it air-dry.",
      tip: "The air-only setting is handy for shaking dust out of curtains, cushions and pillows without any heat.",
      svg: SQUARE + '<circle cx="32" cy="32" r="17" fill="currentColor"/>'
    },
    {
      id: "laundry-do-not-tumble-dry",
      name: "Do not tumble dry",
      category: "laundry",
      aka: ["no dryer", "no tumble dry", "air dry only"],
      looksLike: ["square with circle crossed out", "crossed out square", "box with an x", "square with circle and x", "circle in a square with a cross"],
      meaning: "Keep it out of the tumble dryer. The heat and tumbling could shrink, melt, pill or misshape it.",
      action: "Air-dry instead. One of the natural-drying symbols (a square with lines) should show you how.",
      tip: "You'll often see it on wool, very stretchy clothes, printed T-shirts and anything with rubbery or plastic parts.",
      svg: TUMBLE + cross(9, 9, 55, 55)
    },

    // ---- Natural drying ---------------------------------------------------
    {
      id: "laundry-line-dry",
      name: "Line dry",
      category: "laundry",
      aka: ["hang to dry", "clothesline", "hang dry"],
      looksLike: ["square with a curve", "envelope", "square with a smile", "square with curved line at the top", "square with a hammock"],
      meaning: "Hang it up to dry on a clothesline, airer or hanger.",
      action: "Shake it out, hang it up and let it air-dry, indoors or out.",
      tip: "This curved-line version is common on US and older labels. The newer European (ISO) version has a single vertical line in the square instead.",
      svg: SQUARE + '<path d="M9 12 Q32 36 55 12"/>'
    },
    {
      id: "laundry-line-dry-vertical",
      name: "Line dry (vertical line)",
      category: "laundry",
      aka: ["line drying", "hang to dry", "hang up"],
      looksLike: ["square with a vertical line", "square with one line", "box with a line down the middle", "square with a stick", "square with an i"],
      meaning: "Hang it up to dry after spinning, on a line or a hanger. This is the European (ISO) line-drying symbol.",
      action: "Hang it up and let it air-dry. Keep it out of the tumble dryer unless another symbol allows it.",
      tip: "One vertical line = hang to dry. Two = hang it up dripping wet (no spin). Add two diagonal lines in the corner and it means 'in the shade'. A lot of meaning for a few lines.",
      svg: SQUARE + '<path d="M32 18 V46"/>'
    },
    {
      id: "laundry-drip-dry",
      name: "Drip dry",
      category: "laundry",
      aka: ["drip dry", "hang wet"],
      looksLike: ["square with three lines", "square with three vertical lines", "box with three lines", "square with stripes", "barcode in a square"],
      meaning: "Hang it up soaking wet, straight out of the wash. No wringing, no spinning: just let the water drip out.",
      action: "Skip the spin (or take it out before spinning), hang it over the bath or outdoors, and let gravity do the work.",
      tip: "The three-line version is the US symbol. European labels use two vertical lines for the same idea.",
      svg: SQUARE + '<path d="M21 18 V46 M32 18 V46 M43 18 V46"/>'
    },
    {
      id: "laundry-drip-line-dry",
      name: "Drip line dry (two vertical lines)",
      category: "laundry",
      aka: ["drip dry", "hang dripping wet", "no spin"],
      looksLike: ["square with two lines", "square with two vertical lines", "box with two lines", "square with a pause symbol", "square with ii"],
      meaning: "Hang it up dripping wet, without spinning or wringing. This is the European (ISO) drip-dry symbol.",
      action: "Use the no-spin option or take it out before the spin, then hang it somewhere the drips don't matter.",
      tip: "Spinning would crease or stretch the fabric, while drip-drying lets the weight of the water pull the creases out. US labels use three lines for this; Europe makes do with two.",
      svg: SQUARE + '<path d="M26 18 V46 M38 18 V46"/>'
    },
    {
      id: "laundry-dry-flat",
      name: "Dry flat",
      category: "laundry",
      aka: ["lay flat to dry", "flat drying"],
      looksLike: ["square with a horizontal line", "square with a line in the middle", "box with a dash", "minus in a square", "square with a flat line"],
      meaning: "Lay it flat to dry, on a towel or a mesh drying rack, instead of hanging it.",
      action: "Gently reshape it while damp and lay it flat away from direct heat. Turn it over once so it dries evenly.",
      tip: "Typical for knitted wool and cashmere: hang a wet jumper and the water's weight stretches it into a dress. Two horizontal lines (European labels) means lay it flat while still dripping wet.",
      svg: SQUARE + '<path d="M18 32 H46"/>'
    },
    {
      id: "laundry-dry-in-shade",
      name: "Dry in the shade",
      category: "laundry",
      aka: ["dry away from sunlight", "shade dry", "no direct sun"],
      looksLike: ["square with diagonal lines in the corner", "square with two slashes in the corner", "square with corner lines", "box with lines in the top left", "folded corner"],
      meaning: "Dry it out of direct sunlight, which can fade colours or yellow some fabrics. The two corner lines are the shade, if you squint.",
      action: "Dry indoors or in a shady spot. Turning dark clothes inside out helps too.",
      tip: "The corner lines often team up with another drying symbol, such as a vertical or horizontal line: 'hang to dry in the shade' or 'dry flat in the shade'.",
      svg: SQUARE + '<path d="M9 20 L20 9 M9 29 L29 9"/>'
    },

    // ---- Ironing ----------------------------------------------------------
    {
      id: "laundry-iron-low",
      name: "Iron on low heat",
      category: "laundry",
      aka: ["cool iron", "low iron", "110 °C"],
      looksLike: ["iron with one dot", "iron with a dot", "iron one dot"],
      meaning: "Iron at a low temperature, max 110 °C (230 °F). Typical for delicate synthetics like acrylic, nylon or acetate.",
      action: "Set the iron to its one-dot setting and skip the steam. At this setting, steam can cause permanent damage.",
      tip: "Most irons have the same dots printed on the dial, so just match them up. A rare bit of joined-up thinking.",
      svg: IRON + dot(36, 39)
    },
    {
      id: "laundry-iron-medium",
      name: "Iron on medium heat",
      category: "laundry",
      aka: ["warm iron", "medium iron", "150 °C"],
      looksLike: ["iron with two dots", "iron with dots", "iron 2 dots"],
      meaning: "Iron at a medium temperature, max 150 °C (300 °F). Typical for polyester, wool, silk and blends.",
      action: "Set the iron to two dots. For wool and silk, iron inside out or use a pressing cloth to avoid shiny patches.",
      tip: "Just match the dots on the label to the ones on your iron's dial.",
      svg: IRON + dot(30, 39) + dot(42, 39)
    },
    {
      id: "laundry-iron-high",
      name: "Iron on high heat",
      category: "laundry",
      aka: ["hot iron", "high iron", "200 °C"],
      looksLike: ["iron with three dots", "iron with 3 dots", "iron with dots"],
      meaning: "Iron at a high temperature, max 200 °C (390 °F). Typical for cotton and linen, which can take it.",
      action: "Set the iron to three dots and use steam freely. Linen irons best while slightly damp.",
      tip: "On US labels, an iron with no dots at all means any temperature is OK.",
      svg: IRON + dot(25, 39) + dot(36, 39) + dot(47, 39)
    },
    {
      id: "laundry-do-not-iron",
      name: "Do not iron",
      category: "laundry",
      aka: ["no ironing", "no iron"],
      looksLike: ["iron crossed out", "iron with an x", "crossed out iron", "x over iron"],
      meaning: "Don't iron it. Heat would melt, glaze or flatten the fabric or a print. The European version also rules out steaming.",
      action: "Hang it up straight after washing so the creases drop out on their own. As instructions go, it's one of the nicer ones.",
      tip: "Often found on clothes with plastic prints, sequins, velvet or heat-sensitive synthetics.",
      svg: IRON + cross(9, 10, 55, 54)
    },
    {
      id: "laundry-no-steam",
      name: "Do not steam",
      category: "laundry",
      aka: ["no steam", "iron without steam", "dry iron only"],
      looksLike: ["iron with an x underneath", "iron with crossed lines below", "iron with a cross under it", "iron with crossed out steam"],
      meaning: "You can iron it, but without steam. Steam could leave water marks or damage the fabric.",
      action: "Switch off the steam (or empty the water tank) and dry-iron at the temperature the label allows.",
      tip: "Silk and some synthetics get water spots from steam, and they're hard to get out again.",
      svg: '<g transform="translate(0,-7)">' + IRON + "</g>" + cross(25, 46, 39, 56)
    },

    // ---- Professional cleaning --------------------------------------------
    {
      id: "laundry-dry-clean",
      name: "Dry clean",
      category: "laundry",
      aka: ["dry cleaning", "professional cleaning", "dry clean only"],
      looksLike: ["circle", "empty circle", "ring", "letter o", "plain circle", "hollow circle"],
      meaning: "A plain circle means it can be professionally dry cleaned (US labels). Dry cleaning uses solvents instead of water.",
      action: "Take it to a dry cleaner. This isn't a home job, and 'dry clean' doesn't mean 'dry it'.",
      tip: "Circles are for professional cleaners, and a letter inside (P, F or W) tells them which process to use. A circle inside a square is something else entirely: tumble drying.",
      svg: CIRCLE
    },
    {
      id: "laundry-dry-clean-p",
      name: "Dry clean (P)",
      category: "laundry",
      aka: ["professional dry clean", "perchloroethylene", "perc"],
      looksLike: ["circle with p", "p in a circle", "letter p in a circle", "parking sign"],
      meaning: "Professional dry cleaning with tetrachloroethylene ('perc') or any of the milder hydrocarbon solvents is fine. This is the standard dry-cleaning process. Not, despite appearances, a parking sign.",
      action: "Take it to a dry cleaner, who'll know exactly what P means. It's not something you can do at home.",
      tip: "A line under the circle asks the cleaner for a gentle process; two lines mean very gentle.",
      svg: letter("P")
    },
    {
      id: "laundry-dry-clean-f",
      name: "Dry clean (F)",
      category: "laundry",
      aka: ["hydrocarbon solvent", "petroleum solvent", "gentle dry clean"],
      looksLike: ["circle with f", "f in a circle", "letter f in a circle"],
      meaning: "Professional dry cleaning with hydrocarbon (petroleum-based) solvents only. It's milder than the standard 'P' process.",
      action: "Take it to a dry cleaner and point out the F. Not every cleaner uses hydrocarbon solvents.",
      tip: "F items often have sequins, beads, plastic trims or bonded fabrics that the stronger 'perc' solvent could damage.",
      svg: letter("F")
    },
    {
      id: "laundry-wet-clean-w",
      name: "Professional wet clean (W)",
      category: "laundry",
      aka: ["wet cleaning", "professional wet cleaning"],
      looksLike: ["circle with w", "w in a circle", "letter w in a circle"],
      meaning: "It can be professionally wet cleaned: a specialist water-based process with careful detergents and controlled drying. Confusingly, it's offered by many dry cleaners.",
      action: "Take it to a cleaner that offers wet cleaning. It does not mean it can go in your machine at home (check the washtub symbol for that).",
      tip: "A crossed-out W means no professional wet cleaning.",
      svg: letter("W")
    },
    {
      id: "laundry-do-not-dry-clean",
      name: "Do not dry clean",
      category: "laundry",
      aka: ["no dry cleaning"],
      looksLike: ["circle crossed out", "circle with an x", "crossed out circle", "x over circle", "o with an x"],
      meaning: "Don't dry clean it. The cleaning solvents would damage it.",
      action: "Follow the washing symbols on the label instead (usually machine or hand wash).",
      tip: "You'll find it on items with rubber, plastic or coated parts that solvents would dissolve.",
      svg: CIRCLE + cross(11, 11, 53, 53)
    },

    // ---- Other ------------------------------------------------------------
    {
      id: "laundry-do-not-wring",
      name: "Do not wring",
      category: "laundry",
      aka: ["no wringing", "do not twist"],
      looksLike: ["twisted towel crossed out", "bow tie with an x", "sweet wrapper with an x", "twisted cloth with a cross", "crossed out bow tie"],
      meaning: "Don't twist or wring it to get the water out. That stretches and distorts the fibres.",
      action: "Gently squeeze the water out, or roll it up in a towel like a Swiss roll and press. Then dry it as the label says.",
      tip: "Mostly a US-label symbol, usually on knits, wool and delicate fabrics.",
      svg: '<path d="M28 27 C22 25 16 20 9 18 V46 C16 44 22 39 28 37 M36 27 C42 25 48 20 55 18 V46 C48 44 42 39 36 37"/>' +
        '<rect x="28" y="25" width="8" height="14" rx="2"/>' + cross(8, 9, 56, 55)
    },

    // =====================================================================
    // WASHING MACHINE
    // =====================================================================
    {
      id: "washer-prewash",
      name: "Prewash",
      category: "washer",
      aka: ["pre-wash", "pre wash", "compartment I"],
      looksLike: ["bucket with a line", "tub with an i", "bucket with a vertical line", "bucket with 1", "tub with one stroke"],
      meaning: "Adds a short extra wash before the main wash to loosen heavy dirt, like muddy sports kit or very dirty work clothes.",
      action: "Only use it for genuinely filthy loads, and put a little detergent in the compartment marked I in the detergent drawer.",
      tip: "Detergent drawer cheat sheet, in Roman numerals for some reason: I = prewash, II = main wash, flower = fabric softener. Most loads only need II.",
      svg: TUB + '<path d="M32 29 V43"/>'
    },
    {
      id: "washer-rinse",
      name: "Rinse",
      category: "washer",
      aka: ["rinse only", "rinse cycle", "rinse and spin"],
      looksLike: ["bucket with dotted lines", "bucket with a shower", "water falling into a bucket", "tub with dashes above", "rain over a bucket"],
      meaning: "Runs a rinse with clean water, usually followed by a spin, without a full wash.",
      action: "Use it to rinse out leftover detergent, freshen up swimwear, or add softener to a load that's already washed.",
      tip: "If your skin reacts to detergent, an extra rinse removes much of what's left in the fabric.",
      svg: '<g transform="translate(0,6)">' + TUB + "</g>" + shower([20, 32, 44])
    },
    {
      id: "washer-extra-rinse",
      name: "Extra rinse",
      category: "washer",
      aka: ["rinse plus", "rinse+", "additional rinse", "allergy rinse"],
      looksLike: ["bucket with a plus", "rinse with a plus", "shower bucket with plus", "tub with dotted lines and a plus"],
      meaning: "Adds one more rinse at the end of the programme to wash out more detergent.",
      action: "Turn it on for babies' clothes, sensitive skin or allergies, or if white detergent marks show up on dark clothes.",
      tip: "It costs extra water and time, so leave it off for everyday loads.",
      svg: '<g transform="translate(0,6)">' + TUB + "</g>" + shower([17, 28, 39]) + '<path d="M51 5.5 V16.5 M45.5 11 H56.5"/>'
    },
    {
      id: "washer-rinse-hold",
      name: "Rinse hold",
      category: "washer",
      aka: ["rinse stop", "water stop", "no final spin", "crease guard"],
      looksLike: ["bucket full of water", "bucket with two wavy lines", "tub with waves", "bucket with water lines"],
      meaning: "The machine stops after the last rinse and leaves the laundry sitting in the water instead of spinning, so delicates don't crease.",
      action: "When you're ready, choose spin or drain to finish the cycle. Don't leave it for hours or it'll start to smell.",
      tip: "If the door won't open and the drum is full of water, rinse hold is often why. It's paused, not broken.",
      svg: TUB + '<path d="M10.6 32.5 q5.2 -6 10.35 0 t10.35 0 t10.35 0 t10.35 0"/>'
    },
    {
      id: "washer-spin",
      name: "Spin",
      category: "washer",
      aka: ["spin cycle", "spin only", "rpm", "spin speed"],
      looksLike: ["spiral", "snail", "swirl", "coil", "snail shell", "spiral line"],
      meaning: "The spin function or spin-speed setting. The drum whizzes round fast to fling the water out of the laundry.",
      action: "Pick a high speed (1200–1400 rpm) for towels and cottons so they dry faster, and a lower one for delicates and synthetics to avoid creases.",
      tip: "On most machines, pressing the spin button cycles through the speeds. As a programme on its own, it spins the water out without washing.",
      svg: SPIRAL
    },
    {
      id: "washer-no-spin",
      name: "No spin",
      category: "washer",
      aka: ["spin off", "spin stop", "0 rpm"],
      looksLike: ["spiral crossed out", "crossed out swirl", "snail with an x", "spiral with an x"],
      meaning: "The final spin is switched off, so the cycle ends after draining and the laundry comes out very wet.",
      action: "Use it for drip-dry items or delicates that crease badly. Have a basin ready: it'll be soggy.",
      tip: "This matches the 'drip dry' symbols on care labels. Hang things up straight away.",
      svg: SPIRAL + cross(10, 10, 54, 54)
    },
    {
      id: "washer-drain",
      name: "Drain",
      category: "washer",
      aka: ["pump out", "drain only", "empty water", "spin/drain"],
      looksLike: ["bucket with an arrow down", "tub with a downward arrow", "arrow out of a bucket", "bucket with arrow"],
      meaning: "Pumps the water out of the drum, either on its own or as part of a spin/drain programme.",
      action: "Use it to empty the machine after rinse hold or after cancelling a programme halfway. The door usually unlocks once the water's gone.",
      tip: "If the machine won't drain, the pump filter (behind a small flap at the bottom front) is probably clogged with the usual suspects: fluff, coins or hair clips.",
      svg: '<g transform="translate(0,-6)">' + TUB + '</g><path d="M32 24 V54 M25 47 L32 54 L39 47"/>'
    },
    {
      id: "washer-door-locked",
      name: "Door locked",
      category: "washer",
      aka: ["door lock", "lock", "door closed"],
      looksLike: ["padlock", "lock", "closed padlock", "lock with keyhole", "handbag"],
      meaning: "The door is locked for safety while the machine runs, and afterwards while there's still water in the drum or it's still hot.",
      action: "Wait for the light to go out, usually a minute or two after the programme ends. If it stays on, there may still be water inside: run a drain.",
      tip: "Never force the door. It's a safety lock, and it will break before it opens.",
      svg: LOCK + dot(32, 38.5) + '<path d="M32 40 V46"/>'
    },
    {
      id: "washer-child-lock",
      name: "Child lock",
      category: "washer",
      aka: ["child safety lock", "key lock", "button lock", "control lock"],
      looksLike: ["padlock with a face", "lock with a smiley", "padlock with a smiley face", "lock with a baby face", "key"],
      meaning: "The buttons are locked so little fingers (or cats) can't change or stop the programme.",
      action: "To unlock, press and hold the button (or pair of buttons) marked with the lock symbol for about 3 seconds. The panel or manual shows which.",
      tip: "If none of the buttons respond, check this first. Some brands use a key symbol instead.",
      svg: LOCK + '<circle cx="26.5" cy="37.5" r="2.3" fill="currentColor" stroke="none"/><circle cx="37.5" cy="37.5" r="2.3" fill="currentColor" stroke="none"/>' +
        '<path d="M25.5 43.5 Q32 49.5 38.5 43.5" stroke-width="3"/>'
    },
    {
      id: "washer-delay-start",
      name: "Delay start / end time",
      category: "washer",
      aka: ["delay end", "time delay", "finish in", "ready in", "delay timer", "timer"],
      looksLike: ["clock with an arrow", "clock", "clock with a circular arrow", "circle arrow with clock hands"],
      meaning: "Sets the machine to start later, or to finish at a time you choose, such as when you're home or on cheap night-time electricity.",
      action: "Press it repeatedly to add hours, then press Start. The machine counts down and starts by itself.",
      tip: "For long delays, put detergent in the drawer rather than the drum, and avoid it for very smelly or damp loads.",
      svg: '<path d="M45.5 15.9 A21 21 0 1 1 21.5 13.8"/><path d="M13.8 11.7 L21.5 13.8 L19.4 21.5"/><path d="M32 21 V32 H41"/>'
    },
    {
      id: "washer-quick-wash",
      name: "Quick wash",
      category: "washer",
      aka: ["15 minute wash", "rapid wash", "speed wash", "quick 15", "quick 30", "express"],
      looksLike: ["stopwatch with 15", "clock with 15", "timer with 15", "15 with an apostrophe", "stopwatch"],
      meaning: "A short programme for small, lightly worn loads, often 15 or 30 minutes long. The ' means minutes. It's not a typo.",
      action: "Use it for a few lightly worn items, with less detergent than usual. It won't shift real stains.",
      tip: "Quick washes are short and cool, so they're not great for towels, bedding or anything properly dirty.",
      svg: '<circle cx="32" cy="35" r="19"/><path d="M27 8 H37 M32 8 V16 M45.5 20.5 L49 17"/><text x="32" y="41" font-size="16">15\'</text>'
    },
    {
      id: "washer-eco-40-60",
      name: "Eco 40-60",
      quiz: "Energy-saving programme for cottons",
      category: "washer",
      aka: ["eco", "eco programme", "energy saving", "eco 40-60 programme"],
      looksLike: ["eco 40-60", "text eco", "40-60", "eco with numbers"],
      meaning: "The EU's standard energy-saving programme. It cleans normally soiled cottons labelled for 40 °C or 60 °C, even mixed together, using as little energy and water as possible.",
      action: "Use it as your everyday programme for normal cotton loads. It's long (3 hours is normal) but cheap to run.",
      tip: "It saves energy by washing cooler for longer, so the water rarely reaches 40 or 60 °C, whatever the name says. The energy label on your machine is based on this programme.",
      svg: '<text x="32" y="28" font-size="20">eco</text><text x="32" y="48" font-size="16">40-60</text>'
    },
    {
      id: "washer-cotton",
      name: "Cotton",
      category: "washer",
      aka: ["cottons", "cotton programme", "normal"],
      looksLike: ["flower", "cotton flower", "cloud on a stem", "puffy flower", "cotton boll", "popcorn on a stick"],
      meaning: "The cotton programme: the sturdy, hard-working cycle for towels, bedding, T-shirts and other cotton or linen items.",
      action: "Choose it for robust everyday cottons and set the temperature to match the care labels (usually 40 or 60 °C).",
      tip: "Cotton programmes use more drum movement and a faster spin than the synthetics or delicates programmes.",
      svg: '<g transform="translate(0,-1)"><path d="M17.3 31.7 A8 8 0 0 1 24 18.1 A8 8 0 0 1 40 18.1 A8 8 0 0 1 46.7 31.7"/>' +
        '<path d="M17.3 31.7 Q20 38 25 37 Q28 42 32 37 Q36 42 39 37 Q44 38 46.7 31.7 M32 39.5 V56 M32 50 Q25 50 22 45 M32 50 Q39 50 42 45"/></g>'
    },
    {
      id: "washer-synthetics",
      name: "Synthetics / easy care",
      category: "washer",
      aka: ["easy care", "synthetics", "permanent press", "mixed fabrics"],
      looksLike: ["bucket with a line under it", "tub with a line", "underlined bucket", "shirt", "blouse"],
      meaning: "A gentler programme for polyester, nylon and blends, with less drum movement and a slower spin to reduce creasing. It matches care labels with one line under the tub.",
      action: "Use it for shirts, blouses, sportswear and anything labelled with one line. Don't overfill: half a drum is ideal.",
      tip: "Some brands show this programme as a shirt or blouse instead of the tub with a line.",
      svg: tubBars("", 1)
    },
    {
      id: "washer-wool",
      name: "Wool",
      category: "washer",
      aka: ["woollens", "wool programme", "woolmark"],
      looksLike: ["ball of yarn", "yarn ball", "ball of wool", "circle with lines and a tail", "ball with string"],
      meaning: "A very gentle, cool programme for machine-washable wool and cashmere, with minimal drum movement and a low spin.",
      action: "Use it for items with a washtub and two lines on the label, or marked 'machine washable wool', and use a wool detergent.",
      tip: "Machines with Woolmark approval have had this programme tested as safe even for some hand-wash wool.",
      svg: '<g transform="translate(-1.5,-1.5)"><circle cx="30" cy="30" r="19"/>' +
        '<path d="M12.1 36.5 Q20 20 36.5 12.1 M17.8 44.6 Q26 26 44.6 17.8 M28.3 48.9 Q36 36 48.9 28.3" stroke-width="3"/>' +
        '<path d="M43.4 43.4 C47 50 52 46 56 54"/></g>'
    },
    {
      id: "washer-hand-wash",
      name: "Hand wash / delicates programme",
      category: "washer",
      aka: ["hand wash", "delicates", "silk", "gentle"],
      looksLike: ["hand in a bucket", "bucket with a hand", "hand in water", "tub with a hand"],
      meaning: "An extra-gentle programme that imitates hand washing: cool water, slow rocking movements and very little spinning.",
      action: "Use it for lingerie, silk and delicate items, but check your manual before trusting it with hand-wash-only labels. A mesh bag adds extra protection.",
      tip: "Some machines use a feather, flower or butterfly for their delicates programme instead, just to keep things interesting.",
      svg: HANDWASH
    },
    {
      id: "washer-steam",
      name: "Steam / anti-allergy",
      category: "washer",
      aka: ["steam", "allergy care", "hygiene", "anti-allergen", "refresh"],
      looksLike: ["bucket with steam", "wavy lines above a bucket", "steaming bucket", "tub with squiggly lines", "hot bucket"],
      meaning: "Adds steam to the wash to help kill bacteria and dust mites and loosen dirt. As a separate programme, it can also refresh and de-wrinkle dry clothes.",
      action: "Use it for bedding, baby clothes or allergy sufferers. Check the care labels first: steam is hot, so it's not for wool or delicates.",
      tip: "Steam programmes take longer and use more energy than a normal wash, so save them for when hygiene really matters.",
      svg: '<g transform="translate(0,6)">' + TUB + '</g><path d="M20 22 q-4 -2.5 0 -5 t0 -5 t0 -5 M32 22 q-4 -2.5 0 -5 t0 -5 t0 -5 M44 22 q-4 -2.5 0 -5 t0 -5 t0 -5"/>'
    },
    {
      id: "washer-drum-clean",
      name: "Drum clean / tub clean",
      category: "washer",
      aka: ["tub clean", "drum clean", "self clean", "machine care", "hygiene clean"],
      looksLike: ["circle with a sparkle", "drum with a star", "washing machine door with sparkle", "two circles with a star", "porthole with sparkle"],
      meaning: "A hot cleaning cycle for the empty machine, to remove limescale, detergent residue, mould and smells. Many machines light it up as a reminder every few dozen washes.",
      action: "Run it with the drum empty (yes, no laundry at all), optionally with a washing-machine cleaner. Afterwards, wipe the rubber door seal and leave the door ajar.",
      tip: "A smelly machine usually means too many cool washes. Leaving the door and detergent drawer open between washes helps a lot.",
      svg: '<circle cx="28" cy="36" r="19"/><circle cx="28" cy="36" r="10"/>' +
        '<path d="M49 6 Q50 14 58 15 Q50 16 49 24 Q48 16 40 15 Q48 14 49 6 Z" fill="currentColor" stroke="none"/>'
    },
    {
      id: "washer-add-garment",
      name: "Add garment / pause and add",
      category: "washer",
      aka: ["add item", "add wash", "addwash", "pause and add", "add laundry", "forgotten sock"],
      looksLike: ["t-shirt with a plus", "shirt with a plus sign", "top with a plus", "clothes plus"],
      meaning: "Lets you pause the programme and add a forgotten item after it has started. The lone sock's second chance.",
      action: "Press it and wait for the door to unlock (only possible while the water level and temperature are low). Add the item, close the door and press Start again.",
      tip: "After a certain point in the cycle, or above a certain temperature, the machine won't let you add anything.",
      svg: SHIRT + '<circle class="knock" cx="49" cy="47" r="10" stroke="none"/><path d="M49 41 V53 M43 47 H55"/>'
    },
    {
      id: "washer-temperature",
      name: "Temperature",
      category: "washer",
      aka: ["temp", "°C", "heat", "water temperature"],
      looksLike: ["thermometer", "stick with a bulb", "lollipop", "thermometer with lines"],
      meaning: "Sets the wash water temperature, usually from cold up to 90 °C.",
      action: "Press it to cycle through the temperatures, and match the number in the washtub on your care labels. That number is a maximum.",
      tip: "Lower is often fine: modern detergents clean well at 30 °C, and every step down saves energy.",
      svg: '<path d="M24 37.92 V14 A5 5 0 0 1 34 14 V37.92 A9.5 9.5 0 1 1 24 37.92 Z"/>' +
        '<circle cx="29" cy="46" r="5" fill="currentColor" stroke="none"/><path d="M29 46 V22" stroke-width="3"/>' +
        '<path d="M39 15 H45 M39 23 H45 M39 31 H45" stroke-width="3"/>'
    },
    {
      id: "washer-water-supply-fault",
      name: "Water supply problem (tap)",
      category: "washer",
      urgency: "soon",
      aka: ["no water", "tap light", "water inlet error", "check water supply", "4C error", "IE error"],
      looksLike: ["tap", "faucet", "tap with a drop", "water tap", "spigot", "tap with water drop"],
      meaning: "The machine isn't getting enough water. The tap may be off, the inlet hose kinked, the little filter in the hose blocked, or the water pressure too low.",
      action: "Check the tap behind the machine is fully open and the hose isn't squashed, then restart. If it keeps happening, turn the tap off, unscrew the hose at the machine end and clean the mesh filter.",
      tip: "A classic after plumbing work or a freezing night, or when someone turned the tap off before going on holiday.",
      svg: '<g transform="translate(2.5,0)"><path d="M8 15 V31 M8 19 H37 C46 19 51 25 51 33 V37 H43 V33 C43 29.5 40.5 27 37 27 H8 M25 19 V12 M17 11 H33"/>' +
        '<path d="M47 43 C47 43 43 48.5 43 51 A4 4 0 0 0 51 51 C51 48.5 47 43 47 43 Z" fill="currentColor" stroke="none"/></g>'
    },
    {
      id: "washer-softener",
      name: "Fabric softener compartment",
      category: "washer",
      aka: ["softener", "conditioner", "fabric conditioner", "flower compartment"],
      looksLike: ["flower", "star", "daisy", "flower in the drawer", "asterisk"],
      meaning: "The flower (or star) compartment in the detergent drawer is for fabric softener or conditioner only. The machine flushes it in during the final rinse.",
      action: "Pour softener up to the MAX line and no further, and never put detergent in here. Overfilling makes it siphon away too early.",
      tip: "The other compartments: I = prewash detergent, II = main wash detergent. Skip softener for towels and sportswear, as it reduces absorbency and breathability.",
      svg: '<g transform="translate(0,1.5)" stroke-width="3">' +
        '<ellipse cx="32" cy="18.5" rx="6" ry="8"/><ellipse cx="32" cy="18.5" rx="6" ry="8" transform="rotate(72 32 32)"/>' +
        '<ellipse cx="32" cy="18.5" rx="6" ry="8" transform="rotate(144 32 32)"/><ellipse cx="32" cy="18.5" rx="6" ry="8" transform="rotate(216 32 32)"/>' +
        '<ellipse cx="32" cy="18.5" rx="6" ry="8" transform="rotate(288 32 32)"/><circle cx="32" cy="32" r="4.5" fill="currentColor" stroke="none"/></g>'
    },

    // =====================================================================
    // TUMBLE DRYER
    // =====================================================================
    {
      id: "dryer-clean-lint-filter",
      name: "Clean lint filter",
      category: "dryer",
      urgency: "soon",
      aka: ["clean fluff filter", "lint screen", "filter light", "clean filter"],
      looksLike: ["grid", "mesh", "net", "square with criss-cross lines", "waffle", "sieve"],
      meaning: "The fluff (lint) filter is full or needs a clean. A clogged filter makes drying slow and expensive, and lint build-up is a fire risk.",
      action: "Pull out the filter (usually in the door opening), peel or brush off the fluff and slide it back in. Ideally, do this after every load.",
      tip: "If it looks clean but the light stays on, rinse the filter under the tap and let it dry. Fabric softener can leave an invisible film that blocks the mesh.",
      svg: '<path d="M12 11 H52 V36 Q52 54 32 54 Q12 54 12 36 Z"/>' +
        '<path d="M22 11 V52.5 M32 11 V54 M42 11 V52.5 M12 21 H52 M12 31 H52 M12.5 41 H51.5" stroke-width="2.5"/>'
    },
    {
      id: "dryer-empty-water",
      name: "Empty water container",
      category: "dryer",
      urgency: "soon",
      aka: ["water tank full", "empty tank", "condensate container", "drain tank"],
      looksLike: ["box with water", "tank with a wave", "container with a wavy line", "drawer with water", "box with a wave"],
      meaning: "The water tank is full. Condenser and heat-pump dryers collect the water from your clothes in a tank, and the dryer will stop (or won't start) until you empty it.",
      action: "Pull out the water container (often a drawer at the top, or behind the bottom flap), pour it down the sink and push it fully back in.",
      tip: "If the dryer stands near a drain or sink, most models can pipe the water away through a hose, and then you'll never have to empty the tank again.",
      svg: '<rect x="10" y="14" width="44" height="36" rx="5"/><path d="M25 21 H39"/>' +
        '<path d="M10 36 q5.5 -5 11 0 t11 0 t11 0 t11 0"/>'
    },
    {
      id: "dryer-clean-condenser",
      name: "Clean condenser / heat-pump filter",
      category: "dryer",
      urgency: "soon",
      aka: ["clean condenser", "clean heat exchanger", "base filter", "clean heat pump filter"],
      looksLike: ["box with a snake line", "square with a zigzag", "radiator", "coil in a box", "square with an s", "pipe going back and forth"],
      meaning: "The condenser, or the extra filter at the bottom of a condenser or heat-pump dryer, is clogged with fluff and needs cleaning.",
      action: "Open the flap at the bottom front and take out the condenser or base filter. Rinse off the fluff under the tap, let it drip dry and refit it. Your manual shows how it comes apart.",
      tip: "A blocked condenser is the most common reason a heat-pump dryer suddenly takes hours to dry a load.",
      svg: '<rect x="10" y="12" width="44" height="40" rx="3"/><path d="M16 20 H44 A4 4 0 0 1 44 28 H20 A4 4 0 0 0 20 36 H44 A4 4 0 0 1 44 44 H16" stroke-width="3"/>'
    },
    {
      id: "dryer-anti-crease",
      name: "Anti-crease",
      category: "dryer",
      aka: ["wrinkle guard", "wrinkle prevent", "crease guard", "anti-wrinkle", "extended tumble"],
      looksLike: ["t-shirt with a wavy line", "shirt with a wave", "top with a squiggle", "shirt"],
      meaning: "After drying, the drum keeps turning briefly every few minutes with cool air, so clothes don't settle into creases if you can't unload straight away.",
      action: "Turn it on if you won't be there when the cycle ends. Opening the door stops it.",
      tip: "The display may say 'End' or keep blinking while it's in anti-crease mode. Whatever the blinking suggests, it's finished and you can open it any time.",
      svg: '<g transform="translate(1,0)">' + SHIRT + '<path d="M23 36 q2.25 -3.5 4.5 0 t4.5 0 t4.5 0 t4.5 0" stroke-width="3"/></g>'
    },
    {
      id: "dryer-cupboard-dry",
      name: "Cupboard dry",
      category: "dryer",
      aka: ["closet dry", "normal dry", "store dry", "dry to put away"],
      looksLike: ["wardrobe", "cupboard", "closet", "cabinet", "box with two doors"],
      meaning: "Dries clothes completely, ready to fold and put straight into the cupboard.",
      action: "Use it for everyday cottons and anything you won't be ironing.",
      tip: "The moisture sensor stops the dryer once the clothes are dry, so this is usually more efficient than a fixed timer.",
      svg: WARDROBE
    },
    {
      id: "dryer-iron-dry",
      name: "Iron dry",
      category: "dryer",
      aka: ["damp dry", "ready to iron"],
      looksLike: ["iron", "clothes iron", "iron without dots", "flat iron"],
      meaning: "Leaves the laundry slightly damp, which makes ironing much easier. The dryer still won't do the ironing for you, sadly.",
      action: "Use it for shirts, linen and cotton you plan to iron, and iron them soon after the cycle.",
      tip: "Slightly damp fabric irons faster and smoother than bone-dry fabric, so this saves effort, not just energy.",
      svg: IRON
    },
    {
      id: "dryer-extra-dry",
      name: "Extra dry",
      category: "dryer",
      aka: ["cupboard dry plus", "very dry", "cupboard plus"],
      looksLike: ["wardrobe with a plus", "cupboard with a plus", "closet plus", "cabinet with a plus sign"],
      meaning: "Dries even more thoroughly than cupboard dry, for thick items like towels, jeans or bedding that stay damp in the seams.",
      action: "Use it for heavy cottons, but not for everyday clothes: over-drying wastes energy and can shrink things.",
      tip: "If items are still damp after 'cupboard dry', try this rather than running a second full cycle.",
      svg: '<rect x="9" y="13" width="32" height="40" rx="2"/><path d="M25 13 V53 M21 30 V36 M29 30 V36 M13 53 V57 M37 53 V57"/>' +
        '<path d="M50 7 V21 M43 14 H57"/>'
    },
    {
      id: "dryer-low-heat",
      name: "Low heat / delicate",
      category: "dryer",
      aka: ["low temperature", "gentle", "delicates", "low heat"],
      looksLike: ["square with circle and one dot", "circle in a square with a dot", "one dot", "square circle dot"],
      meaning: "Dries at a lower temperature for delicate, synthetic or heat-sensitive items. It's the same symbol as the care label for 'tumble dry, low heat'.",
      action: "Use it for anything whose label shows the tumble-dry symbol with one dot. It takes longer, but it saves your clothes.",
      tip: "Some brands show this as a feather or a flower instead.",
      svg: TUMBLE + dot(32, 32)
    },
    {
      id: "dryer-timed-dry",
      name: "Timed dry",
      category: "dryer",
      aka: ["time dry", "timer", "time programme", "manual dry"],
      looksLike: ["clock", "clock face", "watch", "circle with hands"],
      meaning: "Dries for a fixed time you choose, instead of stopping automatically when the sensor decides the clothes are dry.",
      action: "Use it for small loads, to finish off slightly damp items, or for things the sensor can't judge well, like pillows (if their label allows).",
      tip: "Timed drying can easily over-dry clothes, and there's no sensor looking out for them. Start short (20–30 minutes) and check.",
      svg: '<circle cx="32" cy="32" r="22"/><path d="M32 13 V16 M51 32 H48 M32 51 V48 M13 32 H16" stroke-width="3"/><path d="M32 32 V20 M32 32 L41 37"/>'
    }
  ]);
})();
