/* Fridges, freezers and fridge-freezers (fridge).
 * Freezer star ratings, control-panel buttons, alarms, dispensers and the
 * small print on the rating plate.
 * Format and drawing rules are in data/README.md.
 *
 * Shared parts below keep the families consistent: one six-pointed star (for the
 * freezer star ratings), one snowflake, one water drop and one drinking glass. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }

  // Six-pointed star (the freezer "star" marking), point straight up, outer radius R.
  function star(cx, cy, R, k) {
    var pts = [];
    for (var i = 0; i < 12; i++) {
      var a = ((-90 + 30 * i) * Math.PI) / 180, r = i % 2 ? R * (k || 0.44) : R;
      pts.push(r2(cx + r * Math.cos(a)) + "," + r2(cy + r * Math.sin(a)));
    }
    return pts.join(" ");
  }
  function solidStar(cx, cy, R) {
    return '<polygon fill="currentColor" stroke="none" points="' + star(cx, cy, R) + '"/>';
  }

  // Six-armed snowflake centred on (cx, cy), arm length L, with a V-shaped branch on each arm.
  function snowflake(cx, cy, L, sw) {
    var v = L * 0.56, b = L * 0.3;
    var arm = "M" + cx + " " + cy + "V" + r2(cy - L) +
      "M" + r2(cx - b) + " " + r2(cy - v - b) + "L" + cx + " " + r2(cy - v) + "L" + r2(cx + b) + " " + r2(cy - v - b);
    var out = '<g stroke-width="' + sw + '">';
    for (var k = 0; k < 6; k++) {
      out += '<path d="' + arm + '"' + (k ? ' transform="rotate(' + 60 * k + " " + cx + " " + cy + ')"' : "") + "/>";
    }
    return out + "</g>";
  }

  // Water drop: round part of radius r centred on (cx, cy), point on top. Solid unless outline is set.
  function drop(cx, cy, r, outline) {
    var t = r2(cy - 2.2 * r);
    return '<path ' + (outline ? "" : 'fill="currentColor" stroke="none" ') + 'd="M' + cx + " " + t +
      "C" + r2(cx - 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + r2(cx - r) + " " + r2(cy - 0.8 * r) + " " + r2(cx - r) + " " + cy +
      "A" + r + " " + r + " 0 0 0 " + r2(cx + r) + " " + cy +
      "C" + r2(cx + r) + " " + r2(cy - 0.8 * r) + " " + r2(cx + 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + cx + " " + t + 'Z"/>';
  }

  // Drinking glass (tumbler) for the dispenser buttons: open top at y = 18, thick base from y = 50 to 56.
  var GLASS = '<path d="M16 18L20.5 56H43.5L48 18"/><path d="M19.9 50.5H44.1" stroke-width="3"/>';

  // Fan with three solid curved blades (as used on the air-con icons).
  var BLADE = "M0,0C-3.5,-5 -5,-11.5 -3,-16.5C-0.5,-22.5 9.5,-22 13,-17C16,-12.5 11.5,-4.5 0,0Z";
  function fan(cx, cy, s) {
    var b = BLADE.replace(/(-?\d*\.?\d+),(-?\d*\.?\d+)/g, function (m, x, y) {
      return r2(cx + s * x) + " " + r2(cy + s * y);
    });
    return '<g fill="currentColor" stroke="none">' +
      '<path d="' + b + '" transform="rotate(-10 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(110 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(230 ' + cx + " " + cy + ')"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2(3.5 * s) + '"/></g>';
  }

  // Ice cube seen from above at an angle (hexagon with a "Y" inside), centre (cx, cy), size s.
  function cube(cx, cy, s, sw) {
    var w = r2(0.87 * s), h = r2(0.5 * s);
    return '<g stroke-width="' + sw + '"><path d="M' + cx + " " + r2(cy - s) + "L" + r2(cx + w) + " " + r2(cy - h) +
      "V" + r2(cy + h) + "L" + cx + " " + r2(cy + s) + "L" + r2(cx - w) + " " + r2(cy + h) + "V" + r2(cy - h) + 'Z"/>' +
      '<path d="M' + r2(cx - w) + " " + r2(cy - h) + "L" + cx + " " + cy + "L" + r2(cx + w) + " " + r2(cy - h) +
      "M" + cx + " " + cy + "V" + r2(cy + s) + '"/></g>';
  }

  WTF.add([
    // =====================================================================
    // FREEZER STAR RATINGS
    // =====================================================================
    {
      id: "fridge-freezer-one-star",
      name: "One star (*) freezer compartment",
      quiz: "Keeps frozen food for about a week",
      category: "fridge",
      aka: ["1 star", "one star", "*", "ice box", "frozen food compartment", "-6°C", "star rating"],
      looksLike: ["one star", "single star", "star", "asterisk", "star on the ice box", "one snowflake"],
      meaning:
        "A one-star compartment (usually the little ice box inside a fridge) only gets down to about −6°C. That's cold enough to keep food that's already frozen for about a week, but it isn't a real freezer. Think paddling pool, not swimming pool.",
      action:
        "Use it for ice cubes and for shop-bought frozen food you'll eat within a week or so. Don't try to freeze fresh food in it.",
      tip: "Frozen food packets often carry a little star chart: roughly one star = 1 week, two stars = 1 month, three stars or a freezer = until the best-before date. Match the stars on the packet to the stars on your compartment.",
      svg: solidStar(32, 32, 21)
    },
    {
      id: "fridge-freezer-two-star",
      name: "Two star (**) freezer compartment",
      quiz: "Keeps frozen food for about a month",
      category: "fridge",
      aka: ["2 star", "two star", "**", "ice box", "frozen food compartment", "-12°C", "star rating"],
      looksLike: ["two stars", "2 stars", "two asterisks", "double star", "stars on the ice box", "two snowflakes"],
      meaning:
        "A two-star compartment or section runs at about −12°C or colder. That keeps food that's already frozen for up to about a month, but it can't freeze fresh food properly.",
      action:
        "Use it for ice and for frozen food you'll get through within a few weeks. For anything longer, or for freezing your own food, you need a four-star freezer.",
      tip: "Some proper freezers have a 'two-star section' too: a shelf or tray marked with two stars that runs warmer than the rest. It's the place for ice cream or things you'll eat soon, not the long-term stuff.",
      svg: solidStar(18, 32, 14) + solidStar(46, 32, 14)
    },
    {
      id: "fridge-freezer-three-star",
      name: "Three star (***) freezer compartment",
      quiz: "Keeps frozen food for about 3 months",
      category: "fridge",
      aka: ["3 star", "three star", "***", "frozen food compartment", "-18°C", "star rating"],
      looksLike: ["three stars", "3 stars", "three asterisks", "row of stars", "stars on the freezer", "three snowflakes"],
      meaning:
        "Runs at −18°C or colder, so it keeps food that's already frozen for about 3 months (often longer: check the packet). It's built for storing frozen food, not for freezing fresh food.",
      action:
        "Fine for your frozen shopping. Don't put lots of fresh or unfrozen food in at once: it freezes slowly and warms up everything that's already in there.",
      tip: "The only difference from a four-star freezer is that missing big star. Same temperature, but not powerful enough to freeze fresh food quickly and safely.",
      svg: solidStar(12.5, 32, 9.75) + solidStar(32, 32, 9.75) + solidStar(51.5, 32, 9.75)
    },
    {
      id: "fridge-freezer-four-star",
      name: "Four star freezer (big star + three small stars)",
      quiz: "Freezer that can freeze fresh food",
      category: "fridge",
      aka: ["4 star", "four star", "****", "food freezer", "freeze fresh food", "-18°C", "star rating"],
      looksLike: ["big star and three small stars", "star with three small stars", "four stars", "one big star three little stars", "large star and small stars", "snowflake and three stars"],
      meaning:
        "The proper freezer rating. The three small stars mean it stores food at −18°C or colder; the big star means it's also powerful enough to freeze fresh food from room temperature right through, within 24 hours. It's the only rating meant for freezing fresh food, so that big star is doing the heavy lifting.",
      action:
        "Freeze fresh or home-cooked food in small, flat, well-wrapped portions. Check the 'freezing capacity' (kg per 24 h) on the rating plate and don't add more than that in one day. For a big load, switch on fast freeze a few hours beforehand.",
      tip: "Most food keeps its best quality for 3–12 months in a four-star freezer. Frozen food doesn't go off as such; it just slowly loses flavour and texture, so a label with the date helps.",
      svg:
        '<polygon points="' + star(32, 21.5, 15.5, 0.42) + '" stroke-width="3.25"/>' +
        solidStar(15, 49, 7.5) + solidStar(32, 49, 7.5) + solidStar(49, 49, 7.5)
    },

    // =====================================================================
    // PANEL BUTTONS & MODES
    // =====================================================================
    {
      id: "fridge-super-freeze",
      name: "Super freeze / fast freeze",
      category: "fridge",
      aka: ["super freeze", "fast freeze", "quick freeze", "power freeze", "express freeze", "turbo freeze", "FAST FREEZE"],
      looksLike: ["snowflake with lines", "snowflake with speed lines", "snowflake button", "moving snowflake", "snowflake in a hexagon", "amber light on the freezer", "yellow light on the freezer"],
      meaning:
        "Runs the freezer flat out, colder than normal, so a big batch of fresh food freezes right through quickly and the food already in there stays frozen. On chest and upright freezers it's often a switch with an amber or yellow light.",
      action:
        "Switch it on a few hours before adding a big load of fresh food. Manuals say anything from 4 to 24 hours, which narrows it down. Most digital models turn it off by themselves after one to three days. On older freezers with a switch and an amber light you may have to turn it off yourself, or it runs non-stop and wastes electricity.",
      tip: "Not needed for a bag of shop-bought frozen peas: it's for freezing lots of fresh or home-cooked food at once. Some freezers have an automatic version that switches itself on when warm food goes in.",
      svg:
        snowflake(38, 32, 18.5, 3.5) +
        '<path d="M6 23H14M4 32H14M6 41H14" stroke-width="3.5"/>'
    },
    {
      id: "fridge-super-cool",
      name: "Super cool / fast cool",
      category: "fridge",
      aka: ["super cool", "fast cool", "quick cool", "power cool", "express cool", "quick fridge", "super cooling"],
      looksLike: ["water drop with a snowflake", "drop and snowflake", "snowflake with a drop", "snowflake next to the fridge temperature", "raindrop and snowflake"],
      meaning:
        "Runs the fridge section at its coldest for a few hours to chill a big shop or warm drinks quickly, then calms back down to your normal temperature by itself.",
      action:
        "Turn it on just before you load a big shop (on Samsung, hold the fridge button for about 3 seconds). It usually switches off after around 6 hours, up to 15 on some models, or you can press the button again to cancel. It's a bit noisier while it runs.",
      tip: "Icons vary a lot: a drop with a snowflake, a snowflake by the fridge temperature or, mercifully, just the word. If lettuce at the back is freezing, check super cool isn't stuck on and the fridge isn't set colder than about 3°C.",
      svg:
        drop(24, 35, 13, true) +
        '<circle class="knock" cx="44" cy="44" r="14.5" stroke="none"/>' + snowflake(44, 44, 12, 3.25)
    },
    {
      id: "fridge-holiday-mode",
      name: "Holiday / vacation mode",
      category: "fridge",
      aka: ["holiday", "vacation", "away mode", "holiday mode", "vacation mode", "eco friendly"],
      looksLike: ["suitcase", "briefcase", "luggage", "bag with a handle", "case with a handle", "palm tree", "plane"],
      meaning:
        "Saves energy while you're away. The freezer carries on as normal, but the fridge section is allowed to warm up: on Bosch and Samsung models, for example, it's held at about 14–15°C, far too warm for food.",
      action:
        "Empty the fridge part before switching it on (the freezer can stay full), and switch it off when you're back. Let the fridge cool down again before you restock it.",
      tip: "Not every brand packs for the same holiday. LG's 'Vacation' (once called 'Eco Friendly') just nudges the fridge up to about 7°C and the freezer to −15°C. That's still too warm for milk and meat, so check your manual before leaving food in.",
      svg:
        '<rect x="8" y="20" width="48" height="33" rx="5"/>' +
        '<path d="M24 20V15A3 3 0 0 1 27 12H37A3 3 0 0 1 40 15V20"/>' +
        '<path d="M8 33H56" stroke-width="3"/><path d="M28 30V36H36V30" stroke-width="3"/>'
    },
    {
      id: "fridge-eco-mode",
      name: "Eco / energy-saving mode",
      category: "fridge",
      aka: ["eco", "ECO", "energy saver", "energy saving", "eco mode", "AI energy mode", "economy"],
      looksLike: ["leaf", "green leaf", "eco", "plant", "leaf button", "leaf with a line"],
      meaning:
        "Lets the fridge and freezer run a little warmer to use less electricity. One Bosch model, for example, sets the fridge to 8°C and the freezer to −16°C in eco mode.",
      action:
        "Fine when the fridge is nearly empty, but the UK Food Standards Agency recommends 5°C or below for the fridge, and freezers should be at −18°C. If food goes off sooner than it should, turn eco off.",
      tip: "On Samsung, 'Energy Saver' is something else: it switches off little heaters (yes, in a fridge) that stop condensation forming round the doors. If you see water on the door seals, turn it off.",
      svg:
        '<path d="M16.5 47.5C13.5 28.5 25.5 12.5 51.5 11.5C52.5 35.5 37.5 49.5 16.5 47.5Z"/>' +
        '<path d="M16.5 47.5L38.5 25.5" stroke-width="3"/><path d="M16.5 47.5L11.5 52.5"/>'
    },
    {
      id: "fridge-child-lock",
      name: "Child lock / control lock",
      category: "fridge",
      aka: ["child lock", "control lock", "lock", "key lock", "button lock", "dispenser lock", "panel lock"],
      looksLike: ["padlock", "lock", "closed padlock", "padlock with a keyhole", "lock symbol", "key"],
      meaning:
        "The buttons are locked so nobody can change the temperature (or, on American-style fridges, use the water and ice dispenser) by accident. While it's on, the buttons just beep or do nothing.",
      action:
        "Press and hold the lock button, or the button with the padlock printed next to it, for about 3 seconds until the padlock goes out. Some models use two buttons held together: the manual will say.",
      tip: "If none of the buttons respond, check this first. Some Samsung fridges have two locks: one for the whole panel and a separate one just for the dispenser.",
      svg:
        '<rect x="14" y="28" width="36" height="27" rx="4"/><path d="M21 28V20A11 11 0 0 1 43 20V28"/>' +
        '<circle cx="32" cy="38.5" r="3.5" fill="currentColor" stroke="none"/><path d="M32 40V46.5" stroke-width="3.5"/>'
    },
    {
      id: "fridge-fan",
      name: "Fan switch inside the fridge",
      category: "fridge",
      aka: ["fan", "fan button", "air circulation", "multi airflow", "fan on/off", "ventilation"],
      looksLike: ["fan", "propeller", "three blades", "fan in a circle", "windmill", "pinwheel", "flower"],
      meaning:
        "Some fridges (Hotpoint, Indesit and others) have a fan inside the fridge section with its own on/off button. It stirs the cold air so the top and bottom shelves stop disagreeing about the temperature.",
      action:
        "Leave it on in a warm kitchen: Hotpoint suggests having it on when the room is above about 27°C, or if droplets form on the glass shelves. It starts and stops by itself, so a still fan may just be having a rest while switched on.",
      tip: "Bigger fridges sell the same idea as 'Multi Airflow': cold air blown out of several vents so there are fewer warm spots. Either way, don't block the vents with food.",
      svg: '<circle cx="32" cy="32" r="24"/>' + fan(32, 32.5, 0.92)
    },

    // =====================================================================
    // ALARMS & WARNINGS
    // =====================================================================
    {
      id: "fridge-temperature-alarm",
      name: "High temperature alarm / red light",
      quiz: "Freezer or fridge too warm",
      category: "fridge",
      color: "red",
      urgency: "soon",
      aka: ["temperature alarm", "high temp alarm", "red light", "warning light", "freezer alarm", "freezer too warm", "alarm"],
      looksLike: ["thermometer with exclamation mark", "thermometer", "thermometer with a warning", "red light", "red light on the freezer", "flashing temperature"],
      meaning:
        "The freezer (or fridge) is warmer than it should be. Usual causes: it's only just been switched on, a big load of unfrozen food has gone in, or the door or lid was left open or isn't sealing. On many chest and upright freezers this is the red light (green means power, amber means fast freeze).",
      action:
        "Press the alarm button to stop the beeping, check the door or lid is shut and the seal is clean, and give it a few hours. Beko says to wait 24 hours before calling for service if the red light stays on. If the food has thawed, don't refreeze it raw: cook it first, then it can be frozen again.",
      tip: "Many digital models flash the warmest temperature the freezer reached, so you can see how bad it got. Food that's still frozen hard is fine to keep.",
      svg:
        '<path d="M19 38.6V15A6 6 0 0 1 31 15V38.6A10 10 0 1 1 19 38.6Z"/>' +
        '<circle cx="25" cy="46" r="5" fill="currentColor" stroke="none"/><path d="M25 46V24" stroke-width="3.5"/>' +
        '<path d="M46 12V37" stroke-width="5.5"/><circle cx="46" cy="49" r="3.4" fill="currentColor" stroke="none"/>'
    },
    {
      id: "fridge-door-alarm",
      name: "Door open alarm",
      category: "fridge",
      urgency: "soon",
      aka: ["door alarm", "door open", "door ajar", "beeping fridge", "door open warning", "door alert"],
      looksLike: ["fridge with door open", "open door", "fridge with sound waves", "fridge with lines", "box with open door", "beeping"],
      meaning:
        "A door has been open (or not quite shut) for too long, usually a minute or two. The fridge takes this personally: it beeps, and the display or light flashes.",
      action:
        "Close the door properly. Still beeping? Something's stopping it sealing: a jar or shelf sticking out, a drawer not pushed in, a folded-over seal, or the fridge leaning forwards so the door swings open. Most models let you silence it with the alarm button.",
      tip: "Samsung's door alarm kicks in after 2 minutes. If it beeps with the door firmly shut, the door switch or sensor may be faulty.",
      svg:
        '<rect x="22" y="8" width="22" height="48" rx="3"/>' +
        '<path d="M22 8L10 13.5V50.5L22 56Z"/>' +
        '<path d="M50 24A10 10 0 0 1 50 40M55.5 18A18 18 0 0 1 55.5 46" stroke-width="3"/>'
    },
    {
      id: "fridge-alarm-off",
      name: "Alarm off / mute button",
      category: "fridge",
      aka: ["alarm off", "alarm", "mute", "silence", "warning signal off", "alarm reset", "buzzer off"],
      looksLike: ["bell with a line through it", "crossed out bell", "bell", "muted bell", "speaker with a line through it", "bell with a slash"],
      meaning:
        "Silences the beeping from a door or temperature alarm. It stops the noise, not the problem: the display may keep flashing until the door is shut or the freezer is back down to temperature.",
      action:
        "Press it once to stop the beep, then work out why it went off (door open? freezer too warm?). If the alarm keeps coming back, whatever caused it hasn't gone away.",
      tip: "On some brands the same button doubles as the button lock when held for a few seconds (Neff labels it 'alarm off/lock'), so a long press can lock the panel by accident. Two problems for the price of one.",
      svg:
        '<path d="M32 9A3 3 0 0 1 35 12V12.6A14 14 0 0 1 46 26.5V35.5L50.5 42.5H13.5L18 35.5V26.5A14 14 0 0 1 29 12.6V12A3 3 0 0 1 32 9Z"/>' +
        '<path d="M27 48A5 5 0 0 0 37 48"/>' +
        '<path d="M11 11L53 53" class="knock" stroke-width="10"/><path d="M11 11L53 53"/>'
    },

    // =====================================================================
    // ICE & WATER DISPENSER (American-style fridges)
    // =====================================================================
    {
      id: "fridge-dispenser-water",
      name: "Water (dispenser)",
      category: "fridge",
      aka: ["water", "chilled water", "dispenser", "water dispenser", "cold water", "WATER"],
      looksLike: ["glass with a drop", "glass of water", "cup with water", "glass", "tumbler", "glass with a water drop"],
      meaning:
        "Sets the dispenser on the front of the door to give chilled, filtered water when you press the paddle or button. The fridge's party trick.",
      action:
        "Select it, then push your glass against the paddle. After installing, or fitting a new filter, run a few litres through and pour them away to flush out air and filter dust. Spluttering or slow water usually means air in the pipe, or a filter that's due a change.",
      tip: "Water only flows if the fridge is plumbed into the mains or has a built-in tank you fill yourself. If nothing at all comes out, check the dispenser lock isn't on.",
      svg:
        GLASS + '<path d="M18.6 37H45.4L43.5 56H20.5Z" fill="currentColor"/>' +
        drop(32, 23, 4.6)
    },
    {
      id: "fridge-dispenser-cubed-ice",
      name: "Cubed ice",
      category: "fridge",
      aka: ["cubed", "cubes", "ice cubes", "ice type", "CUBED", "cube ice"],
      looksLike: ["glass with ice cubes", "glass with cubes", "cup with squares", "glass with blocks", "ice in a glass", "glass with boxes"],
      meaning:
        "Sets the dispenser to drop whole ice cubes. Pressing the Ice Type (or Ice) button usually cycles through water, cubed and crushed: whichever icon is lit is what you'll get.",
      action:
        "Select it and press your glass against the paddle. Nothing coming out? Check the ice maker isn't switched off, and that the ice bucket isn't empty or jammed with a frozen clump of cubes.",
      tip: "Leave the ice unused for a while and the cubes fuse together, which rather defeats the point of cubes. Empty the bucket, break up the clump and let it refill.",
      svg:
        GLASS + '<g stroke-width="3">' +
        '<rect x="20.5" y="35.5" width="11" height="11" rx="2.5" transform="rotate(-12 26 41)"/>' +
        '<rect x="33" y="35" width="11" height="11" rx="2.5" transform="rotate(14 38.5 40.5)"/>' +
        '<rect x="26.5" y="22.5" width="11" height="11" rx="2.5" transform="rotate(6 32 28)"/></g>'
    },
    {
      id: "fridge-dispenser-crushed-ice",
      name: "Crushed ice",
      category: "fridge",
      aka: ["crushed", "crushed ice", "ice type", "CRUSHED", "ice chips"],
      looksLike: ["glass with small bits", "glass with ice chips", "glass with pieces", "glass with dots", "cup with crumbs", "glass with broken ice"],
      meaning:
        "The dispenser runs the ice through a crusher before it drops into your glass, so you get small chips of ice instead of whole cubes.",
      action:
        "Select it and hold your glass to the paddle. A grinding noise is normal. After switching back to cubes, a little crushed ice may come out first; that's normal too.",
      tip: "Crushed ice melts faster: lovely in a cocktail, less so in a drink you want to stay strong.",
      svg:
        GLASS +
        '<g fill="currentColor" stroke="none">' +
        '<path d="M22 43L26.5 41L28 45.5L23 46.5Z"/><path d="M31 42L36 41L35.5 46L30.5 46.5Z"/><path d="M38.5 43L42.5 40.5L43 45.5L39 46.5Z"/>' +
        '<path d="M25 34.5L30 33L29.5 38L24.5 38.5Z"/><path d="M34 32.5L39 34L37 38L33 37Z"/>' +
        '<path d="M28.5 25L33.5 25.5L32 30L27.5 29Z"/><path d="M38.5 26L42.5 27.5L40.5 31.5L37 29.5Z"/>' +
        '</g>'
    },
    {
      id: "fridge-ice-maker-off",
      name: "Ice maker off",
      quiz: "Ice maker disabled",
      category: "fridge",
      aka: ["ice off", "ice maker off", "ice on/off", "ice maker", "ICE OFF", "ice"],
      looksLike: ["ice cubes", "ice cubes with off", "two cubes", "cubes with the word off", "ice off", "dice"],
      meaning:
        "The automatic ice maker is switched off and won't make any more ice. If you (or someone else) turned it off on purpose, that's all it means.",
      action:
        "Press (or hold) the ice button to turn it back on. The first batch can take several hours, up to a day. If the fridge isn't connected to a water supply, leave it off, or the water valve can buzz as it tries to fill.",
      tip: "Throw away the first few batches of ice after installation or a new filter. They can taste odd or contain fine bits of carbon from the filter.",
      svg:
        cube(21, 23, 11, 3.5) + cube(43, 23, 11, 3.5) +
        '<text x="32" y="56" font-size="15">OFF</text>'
    },
    {
      id: "fridge-water-filter",
      name: "Water filter indicator / filter reset",
      category: "fridge",
      urgency: "soon",
      aka: ["filter", "replace filter", "change filter", "filter reset", "water filter", "FILTER", "filter light"],
      looksLike: ["dotted square with a drop", "square with a water drop", "drop in a box", "water drop", "filter", "red light with a drop"],
      meaning:
        "A reminder that the water filter for the dispenser and ice maker needs replacing. It's usually just a timer: about 6 months (or a set amount of water) since it was last reset. On Samsung it turns orange or purple as a warning, then red when it's due.",
      action:
        "Fit a new filter (the manual shows where it lives: inside at the top, in the base grille or behind a cover). Run a few litres of water through to flush it, then reset the reminder, usually by holding the filter or alarm button for about 3 seconds.",
      tip: "The light has no idea whether you've actually changed the filter. Forget the reset and it keeps nagging; reset it without changing the filter and it won't. It's a timer, not a detective.",
      svg:
        '<rect x="9" y="9" width="46" height="46" rx="8" stroke-dasharray="6 6.4" stroke-width="3.5"/>' +
        drop(32, 37, 9.5)
    },

    // =====================================================================
    // INSIDE THE FRIDGE
    // =====================================================================
    {
      id: "fridge-humidity-slider",
      name: "Humidity slider (salad drawer)",
      quiz: "Salad drawer vent setting",
      category: "fridge",
      aka: ["humidity control", "crisper", "salad drawer", "vegetable drawer", "fruit and veg", "high / low humidity", "VitaFresh"],
      looksLike: ["slider with drops", "small drop and big drop", "water drops", "slider with fruit and vegetables", "apple and carrot", "slider on the drawer"],
      meaning:
        "Opens or closes a vent on the salad (crisper) drawer. High humidity (vent closed, big drop or a vegetable picture) keeps moisture in for leafy veg. Low humidity (vent open, small drop or a fruit picture) lets out moisture and the ripening gas some fruit gives off.",
      action:
        "Use high for lettuce, herbs, broccoli and anything that wilts, and low for apples, pears, stone fruit and avocados. With two drawers, set one each way. Bosch suggests low for a mixed or very full drawer.",
      tip: "Some drawers show a fish or meat picture instead. That's a colder, drier setting for raw meat and fish, not for salad.",
      svg:
        drop(15, 26.5, 3.2) + drop(46, 25.5, 6.5) +
        '<rect x="8" y="40" width="48" height="8" rx="4"/>' +
        '<rect x="27" y="35.5" width="10" height="17" rx="2.5" fill="currentColor" stroke="none"/>'
    },
    {
      id: "fridge-zero-degree-zone",
      name: "0°C fresh / chill zone",
      quiz: "Extra-cold drawer for meat and fish",
      category: "fridge",
      aka: ["0°C", "chill zone", "fresh zone", "VitaFresh", "BioFresh", "Fresh 0 Zone", "chiller drawer", "meat drawer"],
      looksLike: ["0°c", "0 degrees", "zero degrees", "zero with a degree sign", "drawer with 0°c", "0c"],
      meaning:
        "A drawer kept colder than the rest of the fridge, just above freezing, for raw meat, fish and other food that goes off quickly. It keeps them fresh for longer than a normal shelf does.",
      action:
        "Use it for wrapped raw meat, fish and other very perishable food. Keep out food that doesn't like the cold (bananas, tomatoes, cucumbers, potatoes) and anything that would spoil if it froze a little: the temperature can dip just below 0°C.",
      tip: "Every brand has its own name for it: Bosch VitaFresh, Liebherr BioFresh, LG Fresh 0 Zone. Fridges without one still have a coldest spot, usually the bottom shelf just above the salad drawer.",
      svg:
        '<rect x="7" y="15" width="50" height="34" rx="6"/>' +
        '<text x="32" y="40" font-size="20">0°C</text>'
    },
    {
      id: "fridge-ok-indicator",
      name: "'OK' temperature indicator",
      quiz: "Fridge is cold enough",
      category: "fridge",
      aka: ["OK", "temperature indicator", "OK indicator", "coldest zone", "fridge thermometer", "OK sticker"],
      looksLike: ["ok", "the word ok", "ok in a box", "ok sticker", "ok window", "black box", "blank box"],
      meaning:
        "A little temperature gauge in the coldest part of some fridges (AEG, Smeg, Miele, Candy and others). 'OK' showing means that zone is at about 4°C or colder, which is right for fresh food. If it stays dark or blank, it's too warm. Refreshingly, OK means OK.",
      action:
        "If OK doesn't appear, turn the thermostat a step colder, keep the door shut for several hours (overnight is ideal) and check again. A new fridge, a big shop or a door left open can hide it for a while.",
      tip: "It sits next to a symbol marking the coldest zone, the best place for raw meat and fish. Fan (No Frost) fridges are about the same temperature everywhere, so many don't have one.",
      svg:
        '<rect x="9" y="17" width="46" height="30" rx="6"/>' +
        '<text x="32" y="40.5" font-size="20">OK</text>'
    },
    {
      id: "fridge-no-frost",
      name: "No Frost / Frost Free",
      quiz: "Defrosts itself automatically",
      category: "fridge",
      aka: ["no frost", "frost free", "total no frost", "NoFrost", "auto defrost", "low frost", "NO FROST"],
      looksLike: ["no frost", "snowflake with a line through it", "crossed out snowflake", "frost free badge", "snowflake with no", "snowflake crossed out"],
      meaning:
        "A fan blows cold, dry air around so ice doesn't build up on the walls, and the appliance defrosts its own cooling coil automatically now and then. 'Frost Free' usually means the freezer; 'Total No Frost' means fridge and freezer.",
      action:
        "You don't need to defrost it. If ice does build up, it's usually a door that isn't sealing or keeps getting left open, or a fault in the defrost system. 'Low Frost' is a different thing, despite the family resemblance: less ice, but you still defrost it by hand now and then.",
      tip: "No Frost freezers dry food out a bit faster, so wrap things well. Static freezers (no fan) are quieter and cheaper, but need defrosting by hand.",
      svg:
        snowflake(32, 23, 16, 3.25) +
        '<path d="M15.5 7L48.5 39" class="knock" stroke-width="8.5"/><path d="M15.5 7L48.5 39" stroke-width="3.25"/>' +
        '<text x="32" y="56.5" font-size="11">NO FROST</text>'
    },
    {
      id: "fridge-sabbath-mode",
      name: "Sabbath mode",
      category: "fridge",
      aka: ["Sabbath", "Sabbath mode", "Shabbat", "Shabbos mode", "SB"],
      looksLike: ["candle", "candle with a flame", "lit candle", "sb", "s6", "5b"],
      meaning:
        "A mode for observant Jewish households. The fridge turns off the interior light, beeps, alarms, display messages and extra functions, so opening the door on the Sabbath or holidays doesn't switch anything on. It keeps cooling as normal.",
      action:
        "Turned it on by accident (no light, no beeps, dark panel)? Turn it off by holding the same button or buttons that turn it on, often for several seconds (15 on some Bosch models). Most go back to normal by themselves after a few days: about 80 hours on Bosch, 96 on LG.",
      tip: "Fisher & Paykel shows a small candle. On LG the display shows 'SB', which can look like 'S6', '5b' or '56'. It's not an error code.",
      svg:
        '<rect x="24" y="30" width="16" height="25" rx="2"/>' +
        '<path d="M32 30V25.5" stroke-width="3"/>' +
        '<path d="M32 6.5C35 11 38.5 14.5 38.5 18.5A6.5 6.5 0 0 1 25.5 18.5C25.5 14.5 29 11 32 6.5Z" fill="currentColor" stroke="none"/>' +
        '<path d="M16 55H48"/>'
    },

    // =====================================================================
    // RATING PLATE
    // =====================================================================
    {
      id: "fridge-climate-class",
      name: "Climate class (SN, N, ST, T)",
      quiz: "Room temperatures it's built for",
      category: "fridge",
      aka: ["climate class", "SN", "N", "ST", "T", "SN-T", "SN-ST", "ambient temperature", "rating plate"],
      looksLike: ["sn", "sn-t", "sn-st", "st", "class sn", "letters on the sticker", "letters on the rating plate"],
      meaning:
        "Printed on the rating plate (the sticker inside the fridge or on the back), it says what room temperatures the appliance is built to cope with: SN 10–32°C, N 16–32°C, ST 16–38°C, T 16–43°C. Combined codes like SN-T cover the whole span, 10–43°C.",
      action:
        "Check it before putting a fridge or freezer in a garage, shed or conservatory. Yes, a room can be too cold: a fridge-freezer with one thermostat can stop cooling the freezer, so the food defrosts. Too hot, and it runs flat out and can overheat.",
      tip: "Most UK models are SN or SN-ST. Some are sold specifically as suitable for garages and keep working in much colder rooms: look for that if yours lives in an outbuilding.",
      svg:
        '<rect x="6" y="13" width="52" height="38" rx="4"/>' +
        '<text x="32" y="26" font-size="9">CLASS</text>' +
        '<text x="32" y="44" font-size="17">SN-T</text>'
    }
  ]);
})();
