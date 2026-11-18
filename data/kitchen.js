/* Kitchen appliances: oven / hob / microwave, and dishwasher.
 * Format and drawing rules are in data/README.md.
 *
 * Oven-function symbols share one visual language, built from the parts below:
 * the same square frame (the oven cavity), thick bars for heating elements,
 * the same zigzag for the grill and the same three-blade fan everywhere. */
(function () {
  // ---- Shared oven parts ------------------------------------------------
  var FRAME = '<rect x="8" y="8" width="48" height="48" rx="5"/>';
  var TOP = '<line x1="16" y1="15.5" x2="48" y2="15.5" stroke-width="4.5"/>';
  var BOTTOM = '<line x1="16" y1="48.5" x2="48" y2="48.5" stroke-width="4.5"/>';
  var GRILL = '<polyline points="16,14.5 21.3,20.5 26.7,14.5 32,20.5 37.3,14.5 42.7,20.5 48,14.5" stroke-width="3"/>';
  var HALF_GRILL = '<polyline points="21.3,14.5 26.7,20.5 32,14.5 37.3,20.5 42.7,14.5" stroke-width="3"/>';
  var RING = '<circle cx="32" cy="32" r="16.5" stroke-width="3"/>';
  var BLADE = "M32 32C30.6 28.8 29.8 25.2 30.6 22.5C31.8 19.4 37 19.6 39.4 22.3C41.2 24.4 38.8 29.1 32 32Z";
  var FAN =
    '<g fill="currentColor" stroke="none">' +
    '<path d="' + BLADE + '"/>' +
    '<path d="' + BLADE + '" transform="rotate(120 32 32)"/>' +
    '<path d="' + BLADE + '" transform="rotate(240 32 32)"/>' +
    '<circle cx="32" cy="32" r="3"/></g>';
  function fanAt(dy) {
    return '<g transform="translate(0 ' + dy + ')">' + FAN + "</g>";
  }

  // Six-armed snowflake with forked tips, centred on (cx, cy), arm length L.
  function snowflake(cx, cy, L, fork, sw) {
    var arm =
      '<line x1="' + cx + '" y1="' + (cy - L) + '" x2="' + cx + '" y2="' + (cy + L) + '"/>' +
      '<polyline points="' + (cx - fork) + "," + (cy - L) + " " + cx + "," + (cy - L + fork) + " " + (cx + fork) + "," + (cy - L) + '"/>' +
      '<polyline points="' + (cx - fork) + "," + (cy + L) + " " + cx + "," + (cy + L - fork) + " " + (cx + fork) + "," + (cy + L) + '"/>';
    return (
      '<g stroke-width="' + sw + '">' + arm +
      '<g transform="rotate(60 ' + cx + " " + cy + ')">' + arm + "</g>" +
      '<g transform="rotate(120 ' + cx + " " + cy + ')">' + arm + "</g></g>"
    );
  }

  // Four-pointed sparkle (filled), centred on (cx, cy), radius s.
  function sparkle(cx, cy, s) {
    var k = s * 0.2;
    return (
      '<path fill="currentColor" stroke="none" d="M' + cx + " " + (cy - s) +
      "Q" + (cx + k) + " " + (cy - k) + " " + (cx + s) + " " + cy +
      "Q" + (cx + k) + " " + (cy + k) + " " + cx + " " + (cy + s) +
      "Q" + (cx - k) + " " + (cy + k) + " " + (cx - s) + " " + cy +
      "Q" + (cx - k) + " " + (cy - k) + " " + cx + " " + (cy - s) + 'Z"/>'
    );
  }

  // Vertical wavy "heat / steam" line starting at (x, y0) going up in n half-waves of height h.
  function heatLine(x, y0, n, h) {
    var d = "M" + x + " " + y0 + "q-3 " + -h / 2 + " 0 " + -h;
    for (var i = 1; i < n; i++) d += "t0 " + -h;
    return '<path d="' + d + '" stroke-width="3"/>';
  }

  // Horizontal microwave wave from x=12 to x=52 at height y.
  function wave(y) {
    return '<path d="M12 ' + y + 'q5-7 10 0t10 0t10 0t10 0"/>';
  }

  WTF.add([
    // =====================================================================
    // OVEN FUNCTIONS (the dial / display symbols)
    // =====================================================================
    {
      id: "oven-conventional",
      name: "Conventional (top & bottom heat)",
      category: "oven",
      aka: ["static oven", "top and bottom heat", "traditional oven", "upper and lower heat", "conventional bake"],
      looksLike: [
        "square with a line at the top and bottom",
        "box with two lines",
        "equals sign in a box",
        "two lines in a square",
        "square with bars top and bottom"
      ],
      meaning:
        "The classic oven setting: heating elements in the roof and the floor of the oven, and no fan. Heat rises, so the top of the oven runs a bit hotter.",
      action:
        "Use it for cakes, bread, roasts and any recipe that gives a temperature without saying 'fan'. Preheat fully and use the middle shelf for even results.",
      tip: "Recipe says '180°C (160°C fan)'? This is the 180°C one. Switching to a fan setting? Knock about 20°C off.",
      svg: FRAME + TOP + BOTTOM
    },
    {
      id: "oven-top-heat",
      name: "Top heat only",
      category: "oven",
      aka: ["upper heat", "top element", "browning element", "top heat"],
      looksLike: ["square with a line at the top", "box with a line at the top", "line at the top", "square with a bar on top"],
      meaning:
        "Only the element in the roof of the oven is on, giving gentle heat from above. It's the grill's calmer, softer sibling.",
      action:
        "Use it to finish dishes: browning the top of a gratin, lasagne, crumble or meringue. It isn't meant for cooking raw food all the way through.",
      tip: "Don't mix it up with the grill: a straight line is the top element, a zigzag is the grill.",
      svg: FRAME + TOP
    },
    {
      id: "oven-bottom-heat",
      name: "Bottom heat only",
      category: "oven",
      aka: ["lower heat", "base heat", "bottom element", "bottom heat"],
      looksLike: ["square with a line at the bottom", "box with a line at the bottom", "line at the bottom", "underlined square"],
      meaning: "Only the element under the oven floor is on, so all the heat comes from below.",
      action:
        "Use it to crisp up a pastry or pizza base at the end of cooking, or for slow cooking and water baths. Put the food on a low shelf.",
      tip: "Soggy-bottomed pie? Give it the last 10 minutes or so on this setting. Nobody need ever know.",
      svg: FRAME + BOTTOM
    },
    {
      id: "oven-fan-only",
      name: "Plain fan (defrost or fan oven)",
      quiz: "Fan only (defrost or fan oven)",
      category: "oven",
      aka: ["defrost", "fan with no heat", "air circulation", "cool fan", "fan oven"],
      looksLike: ["fan", "fan in a box", "propeller", "windmill", "three petals", "flower in a square"],
      meaning:
        "The fan at the back of the oven spins. Whether any heat comes with it depends on the oven, and the symbol isn't telling. If yours ALSO has a fan-inside-a-circle setting, this plain fan is usually defrost: room-temperature air blown around with no heat. If it's the only fan symbol on the dial, it usually means the normal fan oven.",
      action:
        "Set a temperature, turn it on and see whether the heating light comes on and the oven warms up. If it stays cold, it's defrost: use it to thaw food on a plate. If it heats, treat it as a fan oven and use about 20°C less than conventional recipes.",
      tip: "Small items thaw nicely on defrost. Big joints of meat and whole birds are safer thawed slowly in the fridge.",
      svg: FRAME + FAN
    },
    {
      id: "oven-true-fan",
      name: "Fan oven (true fan / fan forced)",
      category: "oven",
      aka: ["true fan", "fan forced", "convection", "hot air", "3D hot air", "CircoTherm", "circular element", "fan oven"],
      looksLike: ["fan in a circle", "fan inside a circle in a square", "propeller in a ring", "circle with a fan inside", "flower in a circle"],
      meaning:
        "The everyday fan oven setting. A ring-shaped element around the fan heats the air and the fan pushes it all round the oven, so the temperature is even from top to bottom. The circle in the symbol is that ring element.",
      action:
        "Use it for almost everything, especially when you're cooking on several shelves at once. Set it about 20°C lower than a conventional recipe says (so 180°C becomes 160°C fan).",
      tip: "When a recipe says 'fan', this is the setting it means. It heats up faster than conventional, too.",
      svg: FRAME + RING + FAN
    },
    {
      id: "oven-fan-assisted",
      name: "Fan-assisted (top & bottom heat + fan)",
      category: "oven",
      aka: ["fan assisted", "convection bake", "conventional with fan", "top and bottom heat with fan"],
      looksLike: ["fan with lines top and bottom", "fan between two lines", "square with a fan and two lines", "propeller between bars"],
      meaning:
        "The top and bottom elements are on and the fan spreads their heat around. It sits halfway between conventional and true fan: more even than conventional, with a bit more heat from above and below than true fan.",
      action:
        "Good for things that want a well-browned top and a crisp base, like pies, quiches and roasts. Use about 10–20°C less than a conventional recipe and keep an eye on the browning.",
      tip: "In the UK people often say 'fan-assisted' to mean any fan oven, which doesn't help. This symbol is the specific top + bottom + fan combination.",
      svg: FRAME + TOP + BOTTOM + FAN
    },
    {
      id: "oven-fan-bottom-heat",
      name: "Pizza setting (fan + bottom heat)",
      category: "oven",
      aka: ["pizza", "pizza setting", "base heat with fan", "bottom heat and fan", "base crisp"],
      looksLike: ["fan with a line at the bottom", "fan above a line", "fan with a line under it", "propeller with a bar underneath"],
      meaning:
        "The bottom element and the fan work together: strong heat from below plus moving hot air, so the base goes crisp while the toppings cook.",
      action:
        "Use it for pizza, tarts, quiche and anything with a base that mustn't go soggy. Use a low or middle shelf, and preheat first.",
      tip: "Some brands draw a circle around the fan (fan oven + bottom heat). Same job: crispy bottoms.",
      svg: FRAME + BOTTOM + fanAt(-2)
    },
    {
      id: "oven-full-grill",
      name: "Full grill",
      category: "oven",
      aka: ["grill", "broil", "broiler", "large grill", "full surface grill", "top grill"],
      looksLike: ["zigzag at the top", "zigzag line in a box", "w line at the top", "squiggle at the top", "saw teeth at the top"],
      meaning:
        "The grill element in the roof is on across its full width. That's intense, direct heat from above, like an upside-down barbecue.",
      action:
        "Use it for toast, cheese on toast, browning, bacon, sausages and chops. Put the food near the top, watch it closely and turn it halfway. Some ovens want the door shut while grilling and some want it ajar, and the zigzag won't tell you which, so check the manual.",
      tip: "Americans call grilling 'broiling'. The same zigzag on a microwave means its grill.",
      svg: FRAME + GRILL
    },
    {
      id: "oven-half-grill",
      name: "Half grill (eco grill)",
      category: "oven",
      aka: ["eco grill", "economy grill", "small grill", "centre grill", "half surface grill"],
      looksLike: ["short zigzag at the top", "small zigzag", "half zigzag", "zigzag in the middle at the top"],
      meaning:
        "Only the middle part of the grill element heats up. It works like the full grill, just over a smaller area and using less energy.",
      action:
        "Use it for small amounts, like two slices of toast or one or two portions. Put the food in the centre of the shelf, right under the glowing part.",
      svg: FRAME + HALF_GRILL
    },
    {
      id: "oven-fan-grill",
      name: "Fan grill",
      category: "oven",
      aka: ["thermal grill", "turbo grill", "hot air grilling", "circulated air grill", "convection broil"],
      looksLike: ["zigzag with a fan", "fan under a zigzag", "zigzag at the top and a fan", "propeller with a zigzag"],
      meaning:
        "The grill element and the fan work together. The grill browns the top while the fan moves the heat around, so thicker food cooks through instead of burning on top.",
      action:
        "Use it for thicker things like whole chicken, chicken thighs, pork belly, roast potatoes and kebabs. Set a temperature as you would for roasting, and use the middle shelf.",
      tip: "This is the one for roast chicken with crispy skin.",
      svg: FRAME + GRILL + fanAt(4.5)
    },
    {
      id: "oven-air-fry",
      name: "Air fry (fan above a basket)",
      quiz: "Air fry",
      category: "oven",
      aka: ["air fry", "airfry", "air fryer mode", "air fry function", "air fry setting", "AirFry"],
      looksLike: ["fan above a basket", "fan over a basket", "fan and a basket in a box", "basket with a fan", "fan over a chip basket"],
      meaning:
        "Air fry mode: your oven doing an impression of an air fryer. The oven heats up while the fan blows hot air hard round the food, for crisp results with less oil. Hotpoint describes its symbol as a fan above a basket.",
      action:
        "Use the air fry basket or tray if your oven came with one, spread the food out in a single layer with nothing overlapping, and follow the air fry cooking table in the manual. Hotpoint suggests a baking tray on a lower shelf to catch crumbs and drips.",
      tip: "Stick to one tray of food: Hotpoint says more than one stops it cooking evenly. On some Hotpoint ovens Air Fry hides in the special functions menu rather than getting its own symbol.",
      svg:
        FRAME +
        // Hotpoint's version, drawn a touch smaller to sit inside the frame: a three-bladed fan in a broken circle above a basket.
        '<g transform="matrix(0.93 0 0 0.93 2.24 2.24)">' +
        '<path stroke-width="2.8" d="M11.6 27.2H15.7V47Q15.7 50 18.7 50H44.8Q47.8 50 47.8 47V27.2H52.4"/>' +
        '<path stroke-width="2.3" d="M15.7 37.2H47.8M15.7 43.4H47.8M24.7 37.2V50M38.8 37.2V50"/>' +
        '<g stroke-width="2.3"><polygon points="26,12.4 31.7,12.4 31.8,19.4 28.4,21.3"/><polygon points="33.6,19.4 42,21.2 40,25.9 33.4,22.6"/>' +
        '<polygon points="31,22.4 23.7,26.1 26.3,30.6 33,25"/>' +
        '<path d="M35.68 13.21A10 10 0 0 1 39.18 16.04M21.3 22.37A10 10 0 0 1 22.03 18.45M37.04 30.39A10 10 0 0 1 33.55 31.94"/></g></g>'
    },
    {
      id: "oven-defrost",
      name: "Defrost",
      category: "oven",
      aka: ["thaw", "defrosting", "defrost mode"],
      looksLike: ["snowflake with a drop", "snowflake and water drop", "snowflake in a box", "star with a droplet", "melting snowflake"],
      meaning:
        "Defrost mode. The fan moves air around with little or no heat, so frozen food thaws faster than it would on the worktop.",
      action:
        "Put the frozen food on a plate or tray (to catch the drips) in the middle of the oven, and cook it soon after it has thawed. Big joints of meat and poultry are safer thawed slowly in the fridge.",
      tip: "On some ovens defrost is just a plain fan with no lines or circle. On microwaves it's usually a snowflake on a button.",
      svg:
        FRAME +
        snowflake(32, 24.5, 10, 3.5, 3) +
        '<path d="M32 38.5L28.3 42.7A5 5 0 1 0 35.7 42.7Z" fill="currentColor" stroke-width="2"/>'
    },
    {
      id: "oven-light",
      name: "Oven light",
      category: "oven",
      aka: ["lamp", "interior light", "oven lamp", "bulb"],
      looksLike: ["light bulb", "bulb in a box", "bulb with rays", "lightbulb", "sun in a box"],
      meaning: "Switches on the light inside the oven, without any heating. A light bulb that means 'light'. Refreshing.",
      action:
        "Use it to check on food without opening the door and letting the heat out. If it won't come on, the bulb has probably blown. Oven bulbs are special heat-proof ones, so buy the right type, and switch the oven off at the wall before changing it.",
      tip: "On most ovens the light also comes on by itself whenever you pick a cooking function.",
      svg:
        FRAME +
        '<path d="M28.5 41V37.2A8 8 0 1 1 35.5 37.2V41Z" stroke-width="3"/>' +
        '<line x1="29" y1="44.5" x2="35" y2="44.5" stroke-width="3"/>' +
        '<line x1="30.5" y1="48" x2="33.5" y2="48" stroke-width="3"/>' +
        '<g stroke-width="3"><line x1="32" y1="18.5" x2="32" y2="16"/>' +
        '<line x1="23.9" y1="21.9" x2="22.1" y2="20.1"/><line x1="40.1" y1="21.9" x2="41.9" y2="20.1"/>' +
        '<line x1="20.5" y1="30" x2="18" y2="30"/><line x1="43.5" y1="30" x2="46" y2="30"/></g>'
    },
    {
      id: "oven-self-clean",
      name: "Self-clean (pyrolytic or steam clean)",
      category: "oven",
      aka: ["pyrolytic", "pyrolysis", "pyro", "self cleaning", "aqua clean", "steam clean", "hydrolytic", "EcoClean"],
      looksLike: ["square with sparkles", "stars in a box", "sparkle in a box", "box with a star", "p in a box", "flames in a box", "drop in a box"],
      meaning:
        "The oven's own cleaning programme. The symbol varies a lot between brands, because of course it does. Pyrolytic ovens heat themselves to around 400–500°C and burn grease to ash, locking the door for safety. Steam or 'aqua clean' versions use a little water in the base at a low temperature to soften grime.",
      action:
        "Take out trays, racks and loose dirt first (unless your manual says they can stay in), then start it. After a pyrolytic clean the door stays locked until the oven has cooled; then just wipe out the ash with a damp cloth. Keep the kitchen ventilated.",
      tip: "Many manuals warn that fumes from a pyrolytic clean can harm pet birds, so move them to another room first.",
      svg: FRAME + sparkle(28.5, 36, 12.5) + sparkle(42, 22, 6.5) + sparkle(44.5, 44, 4)
    },
    {
      id: "oven-keep-warm",
      name: "Keep warm / plate warming",
      category: "oven",
      aka: ["keep warm", "plate warmer", "warming", "hold warm", "warm plates"],
      looksLike: ["stack of plates", "plates with wavy lines", "dishes with steam above", "wavy lines above lines", "three plates"],
      meaning:
        "A low-temperature setting, well below normal cooking temperatures, for warming plates or keeping cooked food warm without cooking it any further.",
      action:
        "Put the plates or the finished food in and keep the door shut. Don't use it to cook raw food, and don't leave food sitting in it for hours.",
      tip: "Some ovens split this into two symbols, as if one wasn't puzzling enough: a stack of plates for plate warming and a dish with wavy lines for keeping food warm.",
      svg:
        FRAME +
        heatLine(24, 29, 3, 5) + heatLine(32, 29, 3, 5) + heatLine(40, 29, 3, 5) +
        '<g stroke-width="3"><path d="M16 35Q20 38.5 26 38.5H38Q44 38.5 48 35"/>' +
        '<path d="M16 40Q20 43.5 26 43.5H38Q44 43.5 48 40"/>' +
        '<path d="M16 45Q20 48.5 26 48.5H38Q44 48.5 48 45"/></g>'
    },
    {
      id: "oven-steam",
      name: "Steam",
      category: "oven",
      aka: ["steam", "steam assisted", "added steam", "steam bake", "moisture", "humidity", "Steamify"],
      looksLike: ["wavy lines", "three wavy lines in a box", "squiggly lines", "steam", "vertical squiggles"],
      meaning:
        "A steam-assisted setting. The oven adds water vapour (from a water tank or a tray in the base) while it heats, so food stays moist and bread gets a crisp, shiny crust.",
      action:
        "Fill the water tank or tray first; most ovens warn you, or won't start, if it's empty. Great for bread, reheating leftovers, fish and vegetables. Descale the oven when it asks you to.",
      tip: "Steam symbols vary: wavy lines, water drops, or a drop combined with the fan symbol are all common.",
      svg: FRAME + heatLine(22, 46, 4, 7) + heatLine(32, 46, 4, 7) + heatLine(42, 46, 4, 7)
    },
    {
      id: "oven-proving",
      name: "Dough proving",
      category: "oven",
      aka: ["proving", "proofing", "dough rise", "bread proving", "yeast dough"],
      looksLike: ["bowl with dough", "cloud in a bowl", "bowl with a bump on top", "rising dough", "mushroom"],
      meaning:
        "A very gentle warm setting (around 30–40°C) that helps yeast dough rise faster and more reliably than a cool kitchen counter. The symbol is a bowl of rising dough, though it does look a bit like a mushroom.",
      action:
        "Put the covered bowl of dough in and leave it until it has roughly doubled in size. Then take it out, switch to a baking setting and preheat properly before baking.",
      tip: "Take the dough out before you preheat for baking, or the outside starts cooking while it's still rising.",
      svg:
        FRAME +
        '<path d="M15 31H49C49 40 41.5 45 32 45C22.5 45 15 40 15 31Z"/>' +
        '<path d="M19 31C17.5 25.5 21.5 21.5 26 23C27.5 17.5 36.5 17.5 38 23C42.5 21.5 46.5 25.5 45 31" stroke-width="3"/>'
    },
    {
      id: "oven-rapid-preheat",
      name: "Rapid preheat / heating up",
      category: "oven",
      aka: ["fast heat up", "quick heat", "rapid heat", "booster", "preheat", "heat-up indicator"],
      looksLike: ["thermometer with arrows", "thermometer and arrows pointing up", "thermometer", "arrows pointing up", "up arrows in a box"],
      meaning:
        "Rapid preheat uses extra elements (and usually the fan) to get the oven up to temperature faster. A thermometer symbol on its own is often just the heat-up indicator, showing the oven is still warming up.",
      action:
        "Wait until it has finished (usually a beep, or the symbol stops flashing or fills up) before the food goes in. The extra heat during rapid preheat can burn the top of your food.",
      tip: "Rapid preheat is the warm-up act, not a cooking mode: food goes in afterwards, on your normal setting.",
      svg:
        FRAME +
        '<path d="M20 36V19A4 4 0 0 1 28 19V36A7 7 0 1 1 20 36Z" stroke-width="3"/>' +
        '<line x1="24" y1="24" x2="24" y2="39" stroke-width="3"/>' +
        '<circle cx="24" cy="41.7" r="3.5" fill="currentColor" stroke="none"/>' +
        '<polyline points="34.5,32 40,26.5 45.5,32"/><polyline points="34.5,41 40,35.5 45.5,41"/>'
    },

    // =====================================================================
    // OVEN CLOCK / TIMER BUTTONS
    // =====================================================================
    {
      id: "oven-timer-bell",
      name: "Minute minder (timer bell)",
      category: "oven",
      aka: ["timer", "kitchen timer", "minute minder", "alarm", "countdown"],
      looksLike: ["bell", "ringing bell", "notification bell", "alarm bell"],
      meaning:
        "A simple countdown timer that beeps when the time is up. On most ovens it does NOT switch the oven off. It's a reminder, not a butler.",
      action:
        "Press it, set the minutes (with + and −, or the knob) and wait for the beep. Press any button to stop the beeping. If you want the oven to switch itself off, use the cooking time or end time function instead.",
      tip: "Bell flashing and beeping after cooking? The timer has just run out. Press it to silence it.",
      svg:
        '<path d="M17 42.5H47C43.5 39 43 34.5 43 27.5C43 21 38 16.5 32 16.5C26 16.5 21 21 21 27.5C21 34.5 20.5 39 17 42.5Z"/>' +
        '<line x1="32" y1="13" x2="32" y2="16.5"/>' +
        '<path d="M27.5 46.5A4.5 4.5 0 0 0 36.5 46.5"/>'
    },
    {
      id: "oven-cook-time",
      name: "Cooking time / cooking on (saucepan)",
      category: "oven",
      aka: ["cook time", "duration", "auto cook", "cook period", "cookpot", "cooking indicator"],
      looksLike: ["saucepan", "pot", "pan with a lid", "cooking pot", "pot with handles", "casserole dish"],
      meaning:
        "On many oven clocks the saucepan (or 'cookpot') is the cooking-time button: set how long to cook and the oven switches itself off at the end. When the saucepan is lit on the display, the oven is ready to heat or is cooking. A saucepan, to run an oven. Bold choice.",
      action:
        "To set a cooking time, press the button, set the duration, then choose the function and temperature as normal. If the saucepan isn't showing and the oven won't heat, the clock probably needs setting or switching back to manual (often the hand symbol, or two buttons pressed together; check the manual).",
      tip: "Some brands use an arrow between two lines (|→|) for cooking time instead of a saucepan.",
      svg:
        '<line x1="15" y1="22" x2="49" y2="22"/>' +
        '<path d="M28 22V18.5H36V22" stroke-width="3"/>' +
        '<path d="M18 27V40A6 6 0 0 0 24 46H40A6 6 0 0 0 46 40V27Z"/>' +
        '<line x1="11" y1="30.5" x2="18" y2="30.5"/><line x1="46" y1="30.5" x2="53" y2="30.5"/>'
    },
    {
      id: "oven-end-time",
      name: "End time (auto switch-off)",
      category: "oven",
      aka: ["end time", "stop time", "end of cooking", "auto off", "delayed start"],
      looksLike: ["arrow pointing to a line", "arrow hitting a wall", "arrow and a bar", "right arrow with a line", "arrow into a wall"],
      meaning:
        "Sets the clock time you want cooking to finish. Used with a cooking time, the oven works out when to start and switches itself off at the end time.",
      action:
        "Press it and set the finish time, usually after setting a cooking time. Handy for a casserole that's ready when you get home, but don't leave raw meat or dairy sitting in a cold oven for hours before it starts.",
      tip: "Some clocks write 'End' instead, or show a saucepan with an arrow.",
      svg:
        '<g stroke-width="4.5"><line x1="13" y1="32" x2="41" y2="32"/>' +
        '<polyline points="32,23 41,32 32,41"/><line x1="50" y1="18" x2="50" y2="46"/></g>'
    },
    {
      id: "oven-manual",
      name: "Manual mode (hand symbol)",
      category: "oven",
      aka: ["manual", "hand", "manual cooking", "cancel auto", "reset clock"],
      looksLike: ["hand", "open hand", "palm", "stop hand", "high five", "glove"],
      meaning:
        "Takes the oven out of timed (automatic) mode so it works normally from the knobs. The hand means 'I'll do it myself'. Common on oven clocks from brands like Belling, Stoves, Hotpoint and Indesit.",
      action:
        "If the oven won't heat (often after a power cut or changing the clock), press the hand button (on some models two buttons together; check the manual) until the saucepan symbol appears. Then try the oven again.",
      tip: "A 'broken' oven is very often just a clock stuck in auto mode. Try the hand button before you call an engineer.",
      svg:
        '<path d="M27 52C25 48 22 45 19.5 41L15.5 34.5A2.6 2.6 0 0 1 20 32L24 37V19A3 3 0 0 1 30 19V31V15A3 3 0 0 1 36 15V31V17A3 3 0 0 1 42 17V32V22A2.75 2.75 0 0 1 47.5 22V38C47.5 45 45 49 44 52" stroke-width="3"/>'
    },
    {
      id: "oven-auto-flashing",
      name: "AUTO flashing on the clock",
      quiz: "Timed mode, or clock needs setting",
      category: "oven",
      urgency: "soon",
      aka: ["auto", "A flashing", "clock flashing", "auto mode", "timer mode"],
      looksLike: ["the word auto", "auto", "flashing auto", "letter a flashing", "auto on the clock"],
      meaning:
        "The oven clock is in automatic (timed) mode, or there's been a power cut and it's waiting for you to set the time. Many ovens flatly refuse to heat until you sort it out.",
      action:
        "Set the time of day (often by pressing two buttons together, or the clock button, then + or −). Then press the manual/hand button or cancel the timed programme. When AUTO goes out or stops flashing, the oven will heat normally.",
      tip: "AUTO flashing after a power cut is one of the most common reasons an oven seems to have 'stopped working'. It's the clock sulking, not the oven.",
      svg: '<text x="32" y="38" font-size="16">AUTO</text>'
    },
    {
      id: "oven-child-lock",
      name: "Child lock / control lock",
      category: "oven",
      aka: ["child lock", "child safety lock", "key lock", "control lock", "safety lock"],
      looksLike: ["key", "padlock", "lock", "key symbol"],
      meaning:
        "The controls (and on some models the door) are locked so nobody can switch the oven or hob on by accident. While it's on, the buttons just beep or do nothing. It's equally good at stopping adults.",
      action:
        "Press and hold the key or lock button for a few seconds (often 3–5) until the symbol goes out. On some models you hold two buttons together; check the manual if holding the key doesn't work.",
      tip: "A padlock that lights up during pyrolytic self-cleaning is different: the door locks itself while the oven is dangerously hot and unlocks once it cools.",
      svg:
        '<g stroke-width="4"><circle cx="20" cy="32" r="8"/><line x1="28" y1="32" x2="52" y2="32"/>' +
        '<line x1="46" y1="32" x2="46" y2="40"/><line x1="39.5" y1="32" x2="39.5" y2="38"/></g>'
    },

    // =====================================================================
    // HOB
    // =====================================================================
    {
      id: "oven-hob-ring-selector",
      name: "Which ring this knob controls",
      category: "oven",
      aka: ["hob ring indicator", "burner position", "zone indicator", "knob diagram", "cooking zone selector"],
      looksLike: ["four circles one filled", "four dots one black", "four rings one solid", "circles in a square", "2x2 circles", "dots in a grid"],
      meaning:
        "A tiny map of the hob, printed next to each knob. The filled-in circle shows which ring (or gas burner) that knob controls, laid out as if you're looking down at the hob from the front. This one, bottom-left filled, means the front-left ring.",
      action:
        "Match the filled circle to the hob: top of the little diagram = back of the hob, bottom = front. So filled top-right = rear-right ring, filled bottom-left = front-left ring, and so on.",
      tip: "Bigger and smaller circles in the diagram match the bigger and smaller rings. Hobs with five or six rings use the same idea, just with more circles to squint at.",
      svg:
        '<circle cx="20" cy="20" r="8"/><circle cx="44" cy="20" r="8"/>' +
        '<circle cx="20" cy="44" r="8" fill="currentColor"/><circle cx="44" cy="44" r="8"/>'
    },
    {
      id: "oven-hob-dual-zone",
      name: "Dual zone / extended ring",
      category: "oven",
      aka: ["dual circuit", "dual zone", "extended zone", "double ring", "expandable zone"],
      looksLike: ["circle inside a circle", "two circles", "target", "bullseye", "ring with a dot", "concentric circles"],
      meaning:
        "This cooking zone has an extra outer ring. Switch the outer ring on and both the inner and outer parts heat, giving a bigger area for big pans.",
      action:
        "Use just the inner zone for small pans, and bring in the outer ring only for large ones. On touch controls, press this symbol; on knobs you usually turn past the symbol (against a click) to bring in the outer ring.",
      tip: "Oval or rectangular versions (two zones joined) are 'bridge' or 'casserole' zones for fish kettles and griddle pans. Fish kettle owners, this is your moment.",
      svg: '<circle cx="32" cy="32" r="19.5"/><circle cx="32" cy="32" r="8.5" fill="currentColor"/>'
    },
    {
      id: "oven-hob-residual-heat",
      name: "Residual heat 'H'",
      quiz: "Hob zone still hot",
      category: "oven",
      urgency: "info",
      aka: ["hot surface", "residual heat indicator", "hot hob", "H light"],
      looksLike: ["letter h", "h on the hob", "h on the display", "glowing h", "capital h"],
      meaning:
        "That cooking zone is switched off but still hot enough to burn you. Ceramic and induction hobs show an H until the zone has cooled to a safe temperature.",
      action:
        "Don't touch that zone or put anything on it that could melt, like plastic or a tea towel. The H goes out by itself once it has cooled, so nothing is broken. You can use the leftover heat to keep a pan warm.",
      tip: "Some hobs show a small 'h' when the zone is only warm and a big 'H' when it's hot. If an H stays on for hours, the sensor may be faulty.",
      svg:
        '<g stroke-width="6"><line x1="21" y1="15" x2="21" y2="49"/><line x1="43" y1="15" x2="43" y2="49"/>' +
        '<line x1="21" y1="32" x2="43" y2="32"/></g>'
    },
    {
      id: "oven-hob-pan-detect",
      name: "No pan / unsuitable pan (induction)",
      category: "oven",
      urgency: "info",
      aka: ["pan detection", "no pan detected", "pot symbol", "unsuitable cookware", "flashing U"],
      looksLike: ["u with a line on top", "little pot", "u with a bar over it", "saucepan with a lid", "flashing u", "cup with a lid"],
      meaning:
        "The induction hob can't find a suitable pan on that zone. There may be no pan, or it's too small, off-centre, or not magnetic. Induction only heats pans a magnet will stick to.",
      action:
        "Put a suitable pan in the middle of the zone within a few seconds; the symbol stops flashing and heating starts. Still flashing? Test the pan base with a fridge magnet: if the magnet doesn't stick, the pan won't work on induction. The zone usually switches itself off if no pan turns up within a minute or two.",
      tip: "Aluminium, copper, glass and some stainless steel pans don't work on induction unless the base has the coil symbol.",
      svg:
        '<g stroke-width="4.5"><line x1="16" y1="18.5" x2="48" y2="18.5"/>' +
        '<path d="M20 25.5V36.5A9 9 0 0 0 29 45.5H35A9 9 0 0 0 44 36.5V25.5"/></g>'
    },
    {
      id: "oven-hob-boost",
      name: "Power boost 'P'",
      quiz: "Extra-fast heating boost",
      category: "oven",
      aka: ["boost", "power boost", "PowerBoost", "booster"],
      looksLike: ["letter p", "p on the hob", "p on the display", "capital p"],
      meaning:
        "Boost is on. The induction zone runs above its normal maximum, borrowing power from its neighbour, for very fast heating like boiling a pan of water.",
      action:
        "Use it to bring water to the boil or to sear, then turn it down. It drops back to the normal top setting by itself after a few minutes (often 5–10). The zone next door may be limited while boost is on.",
      tip: "Never boost an empty pan: it gets hot enough to damage the pan or its coating in seconds.",
      svg: '<path d="M23 48V16H33A8.5 8.5 0 0 1 33 33H23" stroke-width="6"/>'
    },
    {
      id: "oven-induction-compatible",
      name: "Induction-compatible (coil symbol)",
      category: "oven",
      aka: ["induction symbol", "induction suitable", "induction ready", "induction coil"],
      looksLike: ["spring", "coil", "loops", "curly line", "telephone cord", "loopy line", "slinky"],
      meaning:
        "Found on the bottom of pans and their packaging, it means the pan has a magnetic base and will work on an induction hob. Not a telephone cord, whatever it looks like.",
      action:
        "No coil symbol on your pan? Hold a fridge magnet against the base. If it sticks firmly, the pan will work on induction.",
      tip: "The coil stands for the copper coil under the glass, which makes the magnetic field that heats the pan directly.",
      svg:
        '<path stroke-width="3" d="M15.7 42C16.6 41.8 19.7 41.5 21.3 40.7C23 39.8 24.6 38.4 25.7 37C26.7 35.6 27.5 33.7 27.7 32C27.9 30.3 27.7 28.4 27 27C26.4 25.6 25.3 24.2 24.1 23.3C22.9 22.5 21.2 22 19.7 22C18.3 22 16.6 22.5 15.4 23.3C14.2 24.2 13.1 25.6 12.4 27C11.8 28.4 11.6 30.3 11.8 32C12 33.7 12.8 35.6 13.8 37C14.9 38.4 16.5 39.8 18.2 40.7C19.8 41.5 21.9 42 23.8 42C25.7 42 27.8 41.5 29.5 40.7C31.2 39.8 32.8 38.4 33.9 37C34.9 35.6 35.6 33.7 35.9 32C36.1 30.3 35.8 28.4 35.2 27C34.6 25.6 33.5 24.2 32.2 23.3C31 22.5 29.4 22 27.9 22C26.5 22 24.8 22.5 23.6 23.3C22.4 24.2 21.2 25.6 20.6 27C20 28.4 19.7 30.3 20 32C20.2 33.7 20.9 35.6 22 37C23 38.4 24.6 39.8 26.3 40.7C28 41.5 30.1 42 32 42C33.9 42 36 41.5 37.7 40.7C39.4 39.8 41 38.4 42 37C43.1 35.6 43.8 33.7 44 32C44.3 30.3 44 28.4 43.4 27C42.8 25.6 41.6 24.2 40.4 23.3C39.2 22.5 37.5 22 36.1 22C34.6 22 33 22.5 31.8 23.3C30.5 24.2 29.4 25.6 28.8 27C28.2 28.4 27.9 30.3 28.1 32C28.4 33.7 29.1 35.6 30.1 37C31.2 38.4 32.8 39.8 34.5 40.7C36.2 41.5 38.3 42 40.2 42C42.1 42 44.2 41.5 45.8 40.7C47.5 39.8 49.1 38.4 50.2 37C51.2 35.6 52 33.7 52.2 32C52.4 30.3 52.2 28.4 51.6 27C50.9 25.6 49.8 24.2 48.6 23.3C47.4 22.5 45.7 22 44.3 22C42.8 22 41.1 22.5 39.9 23.3C38.7 24.2 37.6 25.6 37 27C36.3 28.4 36.1 30.3 36.3 32C36.5 33.7 37.3 35.6 38.3 37C39.4 38.4 41 39.8 42.7 40.7C44.3 41.5 47.4 41.8 48.3 42"/>'
    },

    // =====================================================================
    // MICROWAVE
    // =====================================================================
    {
      id: "oven-microwave-power",
      name: "Microwave power",
      category: "oven",
      aka: ["microwave", "power level", "watts", "micro power", "power"],
      looksLike: ["three wavy lines", "wavy lines", "waves", "squiggly lines", "water lines"],
      meaning:
        "Microwave mode, and the button for choosing how strong it is. Power shows up in watts (like 800W), as a number (1–10) or as bars. Lower settings switch the microwaves on and off in bursts for gentler heating.",
      action:
        "Use full power for drinks and ready meals. Use medium or low for reheating dense food evenly, defrosting, and melting butter or chocolate. Ready-meal labels give times for specific wattages, so adjust if your microwave is different.",
      tip: "On combination ovens the wavy lines mean 'microwave on'. Next to a fan or grill symbol, it means both work together.",
      svg: wave(20) + wave(32) + wave(44)
    },
    {
      id: "oven-microwave-grill",
      name: "Microwave + grill combination",
      category: "oven",
      aka: ["combi", "combination", "micro grill", "grill combi", "combi grill"],
      looksLike: ["zigzag above wavy lines", "zigzag and waves", "zigzag with squiggly lines", "w line over wavy lines"],
      meaning:
        "Microwaves and the grill work at the same time. The microwaves cook the food through quickly while the grill browns and crisps the top.",
      action:
        "Use it for jacket potatoes, lasagne, gratins and reheating anything that should be crispy. Only use dishes that are safe in a microwave AND under a grill, so no plastic.",
      tip: "A zigzag alone = grill only. Wavy lines alone = microwave only. A fan with wavy lines = fan oven + microwave.",
      svg: GRILL + wave(33) + wave(45)
    },
    {
      id: "oven-microwave-defrost",
      name: "Microwave defrost",
      category: "oven",
      aka: ["defrost", "auto defrost", "weight defrost", "time defrost", "thaw"],
      looksLike: ["snowflake", "star", "ice crystal", "asterisk", "frost symbol"],
      meaning:
        "The defrost programme. The microwave uses low power in bursts to thaw food without cooking the edges. 'Weight defrost' asks how heavy the food is; 'time defrost' asks how long to run.",
      action:
        "Take off the packaging, put the food on a microwave-safe plate, enter the weight or time, and turn or separate the food when it beeps halfway. Cook it straight away afterwards.",
      tip: "Defrost by weight usually beats guessing a time. If the edges start to cook, stop early and let it stand.",
      svg: snowflake(32, 32, 19, 6, 3.5)
    },

    // =====================================================================
    // DISHWASHER
    // =====================================================================
    {
      id: "dishwasher-rinse-aid",
      name: "Rinse aid refill",
      category: "dishwasher",
      urgency: "soon",
      aka: ["rinse aid", "rinse agent", "Jet-Dry", "rinse aid empty", "rinse aid light"],
      looksLike: ["sun", "flower", "asterisk", "swirly star", "sun with curly rays", "sparkle", "spinning sun", "star"],
      meaning:
        "The rinse aid dispenser is empty or nearly empty. Rinse aid helps water slide off the dishes so they dry faster, without spots or streaks. Why a swirly sun means that is anyone's guess.",
      action:
        "Fill the rinse aid dispenser (usually a cap next to the detergent compartment inside the door) with rinse aid, up to the mark. Never use washing-up liquid: it will foam everywhere. Wipe up any spills. The light goes off straight away or after the next wash.",
      tip: "Using all-in-one tablets with rinse aid built in? Many machines have a setting to switch this light off. Glasses coming out spotty or wet? More rinse aid usually fixes it.",
      svg:
        '<circle cx="32" cy="32" r="5"/>' +
        '<path d="M32 22Q33.6 16.3 41.3 16M39.1 24.9Q44.2 22.1 49.9 27.2M42 32Q47.7 33.6 48 41.3M39.1 39.1Q41.9 44.2 36.8 49.9M32 42Q30.4 47.7 22.8 48M24.9 39.1Q19.8 41.9 14.1 36.8M22 32Q16.3 30.4 16 22.8M24.9 24.9Q22.1 19.8 27.2 14.1" stroke-width="3"/>'
    },
    {
      id: "dishwasher-salt",
      name: "Salt refill",
      category: "dishwasher",
      urgency: "soon",
      aka: ["salt", "dishwasher salt", "regeneration salt", "softener salt", "water softener", "salt light"],
      looksLike: ["two curly arrows", "s with arrows", "s-shaped arrows", "curly s", "snake", "two arrows making an s", "recycling arrows"],
      meaning:
        "Your dishwasher's water softener has run out of salt. No, not the stuff on your chips. Without it, hard water leaves limescale and a cloudy film on your glasses and inside the machine.",
      action:
        "Unscrew the cap in the floor of the dishwasher (under the bottom basket) and fill it with dishwasher salt using a funnel. Never use table salt or detergent. The very first time, also pour in about a litre of water. Run a programme straight after so spilled salt doesn't corrode the inside.",
      tip: "Soft-water area? Set the machine's water hardness to the lowest level and you may never need salt. Light still on right after filling? It can take a wash for the salt to dissolve and the sensor to notice.",
      svg:
        '<path d="M29.7 31.8A11 9.5 0 1 1 42 18.5M36.3 15.3L42 18.5L42.4 12M34.3 32.2A11 9.5 0 1 1 22 45.5M27.7 48.7L22 45.5L21.6 52" stroke-width="3.5"/>'
    },
    {
      id: "dishwasher-water-tap",
      name: "Water supply fault (tap)",
      category: "dishwasher",
      urgency: "soon",
      aka: ["tap", "faucet", "water supply", "no water", "check water supply", "water inlet"],
      looksLike: ["tap", "faucet", "tap with a drop", "dripping tap", "water tap"],
      meaning:
        "Your dishwasher isn't getting enough water. The tap may be off, the hose kinked or squashed, the inlet filter blocked, or the water pressure too low.",
      action:
        "Check the tap under the sink is fully open and the hose isn't kinked or squashed behind the machine. Still showing? Switch off, turn the tap off, unscrew the hose from the machine and rinse the little mesh filter inside the connection. Then restart the programme.",
      tip: "After plumbing work or a cold snap, the usual culprit is a blocked inlet filter or a frozen pipe.",
      svg:
        '<path d="M15 25H38Q47 25 47 34V35" stroke-width="5.5"/>' +
        '<line x1="31" y1="25" x2="31" y2="17"/><line x1="25" y1="15.5" x2="37" y2="15.5"/>' +
        '<path d="M47 41L44 44.3A4 4 0 1 0 50 44.3Z" fill="currentColor" stroke-width="2"/>'
    },
    {
      id: "dishwasher-eco",
      name: "Eco programme",
      category: "dishwasher",
      aka: ["eco", "eco 50", "eco 45", "energy saving", "economy", "green programme"],
      looksLike: ["leaf", "the word eco", "green leaf", "plant leaf", "eco leaf"],
      meaning:
        "The energy- and water-saving programme for normally dirty dishes. It washes at a lower temperature for longer, getting the same clean result with less energy.",
      action:
        "Use it as your everyday programme. It often takes 3–4 hours. That feels wrong, but it's normal, not a fault: the long soak is how it saves energy.",
      tip: "Eco is the programme the energy label is measured on. Long cycle, smaller bills.",
      svg:
        '<path d="M18 45.5C16 27.5 28 14.5 49 14.5C49 34.5 37 46.5 18 45.5Z"/>' +
        '<line x1="18" y1="45.5" x2="38" y2="25.5" stroke-width="3"/><line x1="18" y1="45.5" x2="14" y2="49.5"/>'
    },
    {
      id: "dishwasher-intensive",
      name: "Intensive (pots & pans)",
      category: "dishwasher",
      aka: ["intensive", "intensive 70", "heavy", "pots and pans", "power wash", "heavy duty"],
      looksLike: ["saucepan", "pot with steam", "pan with wavy lines", "cooking pot", "pot"],
      meaning:
        "The hottest, strongest programme (often around 65–70°C), for heavily dirty pots, pans, casserole dishes and baked-on food.",
      action:
        "Use it for greasy, dried-on or burnt food. Scrape off leftovers first and keep delicate glasses and decorated china out. It uses more energy, so save it for the roasting tin, not the teaspoons.",
      tip: "Not everything survives a hot wash: cast iron, wooden handles, and some non-stick and aluminium pans are better washed by hand.",
      svg:
        heatLine(24, 26.5, 3, 4) + heatLine(32, 26.5, 3, 4) + heatLine(40, 26.5, 3, 4) +
        '<line x1="12" y1="32.5" x2="52" y2="32.5"/>' +
        '<path d="M17 32.5V43.5A6 6 0 0 0 23 49.5H41A6 6 0 0 0 47 43.5V32.5"/>'
    },
    {
      id: "dishwasher-auto",
      name: "Auto programme",
      quiz: "Self-adjusting sensor programme",
      category: "dishwasher",
      aka: ["auto", "automatic", "sensor wash", "auto 45-65", "smart wash"],
      looksLike: ["a in a circle", "letter a with an arrow round it", "circular arrow", "the word auto", "a in a circle arrow"],
      meaning:
        "The machine senses how dirty the water is and adjusts the temperature, water and time to suit the load. It's the 'you decide' button.",
      action:
        "Use it for mixed loads when you're not sure which programme to pick. It's a little less efficient than Eco, but it takes the guesswork out.",
      tip: "Auto symbols vary a lot. Often it's just the word 'Auto', or a glass and plate with an 'A'.",
      svg:
        '<path d="M41.5 15.5A19 19 0 1 1 20.3 17M18.1 23.1L20.3 17L13.8 17.7" stroke-width="3"/>' +
        '<text x="32" y="40" font-size="22">A</text>'
    },
    {
      id: "dishwasher-quick",
      name: "Quick / express wash",
      category: "dishwasher",
      aka: ["quick", "express", "rapid", "speed wash", "quick 45", "30 minute wash"],
      looksLike: ["stopwatch", "clock with lines", "fast clock", "stopwatch with speed lines", "timer"],
      meaning:
        "A short wash (often 30–60 minutes) for lightly dirty dishes without dried-on food.",
      action:
        "Use it for lightly dirty loads you need done fast. It struggles with dried-on food, and dishes may come out wetter because there's less drying time, so open the door at the end to let the steam out.",
      tip: "Annoyingly, shorter isn't greener: a quick wash usually uses more energy per load than Eco.",
      svg:
        '<circle cx="38" cy="35" r="13"/><line x1="38" y1="22" x2="38" y2="17.5"/><line x1="34" y1="16" x2="42" y2="16"/>' +
        '<line x1="38" y1="35" x2="38" y2="27.5" stroke-width="3"/><line x1="38" y1="35" x2="43" y2="38" stroke-width="3"/>' +
        '<line x1="15" y1="29" x2="21" y2="29"/><line x1="12" y1="35" x2="21" y2="35"/><line x1="15" y1="41" x2="21" y2="41"/>'
    },
    {
      id: "dishwasher-glass",
      name: "Glass / delicate",
      category: "dishwasher",
      aka: ["glass", "glass 40", "delicate", "glassware", "gentle", "crystal"],
      looksLike: ["wine glass", "glass", "goblet", "cocktail glass", "champagne glass"],
      meaning:
        "A gentle, lower-temperature programme (around 40°C) for glasses and delicate items that hot water could damage. The nice wine glasses' programme.",
      action:
        "Use it for wine glasses and lightly dirty delicate items, and make sure the glasses don't touch in the rack. Crystal, hand-painted and antique glass should still be washed by hand. Sorry.",
      tip: "Cloudy glasses? If the film wipes off with vinegar, it's limescale (top up the salt and rinse aid). If it won't come off, it's permanent etching from hot, soft water.",
      svg:
        '<path d="M21.5 14H42.5C42.5 27 38 33.5 32 33.5C26 33.5 21.5 27 21.5 14Z"/>' +
        '<line x1="32" y1="33.5" x2="32" y2="49"/><line x1="24" y1="50" x2="40" y2="50"/>'
    },
    {
      id: "dishwasher-half-load",
      name: "Half load / upper basket only",
      category: "dishwasher",
      aka: ["half load", "upper basket", "top basket only", "zone wash", "1/2 load", "half wash"],
      looksLike: ["box half filled", "square with the top half shaded", "square split in half", "1/2", "half box", "rectangle half black"],
      meaning:
        "Washes only one part of the machine (the filled half shows which basket), so a small load uses less water and energy.",
      action:
        "Put all the dishes in the basket shown and select the option before you start. Dishes in both baskets? Run a normal full programme instead.",
      tip: "Some machines label this '½' or call it 'Zone wash', and let you pick the upper or lower basket.",
      svg:
        '<rect x="15" y="13" width="34" height="38" rx="4"/>' +
        '<path d="M15 32V17A4 4 0 0 1 19 13H45A4 4 0 0 1 49 17V32Z" fill="currentColor"/>'
    },
    {
      id: "dishwasher-pre-rinse",
      name: "Pre-rinse",
      category: "dishwasher",
      aka: ["pre rinse", "prewash", "rinse and hold", "rinse only", "soak"],
      looksLike: ["shower head", "shower", "watering can", "drops falling", "sprinkler", "rain"],
      meaning:
        "A short cold rinse with no detergent, to stop food drying onto the dishes when the full wash is still a while off.",
      action:
        "Use it when the machine is half full and you won't run it until tomorrow. It stops smells and dried-on egg. Run a normal programme later.",
      tip: "No need to rinse plates under the tap before loading. Scraping off leftovers is enough, and modern detergents work better with a bit of food to grab onto.",
      svg:
        '<path d="M18 30.5A14 14 0 0 1 46 30.5Z"/><line x1="32" y1="16.5" x2="32" y2="12.5"/>' +
        '<g stroke-width="3"><line x1="23" y1="36.5" x2="21.5" y2="41"/><line x1="32" y1="36.5" x2="32" y2="41"/><line x1="41" y1="36.5" x2="42.5" y2="41"/>' +
        '<line x1="18.5" y1="46" x2="17" y2="50.5"/><line x1="27.5" y1="46" x2="27" y2="50.5"/><line x1="36.5" y1="46" x2="37" y2="50.5"/><line x1="45.5" y1="46" x2="47" y2="50.5"/></g>'
    },
    {
      id: "dishwasher-machine-care",
      name: "Machine care / self-clean",
      category: "dishwasher",
      aka: ["machine care", "machine clean", "self clean", "clean machine", "descale", "maintenance wash"],
      looksLike: ["dishwasher with a sparkle", "box with a star", "machine with a star", "square with a sparkle", "appliance with sparkles"],
      meaning:
        "A cleaning programme for the dishwasher itself: a long, hot run that clears grease, limescale and smells. Yes, the thing that does the cleaning needs cleaning. Some machines light it up to remind you it's due.",
      action:
        "Run it empty, with a dishwasher cleaner if your manual suggests one. Clean the filter in the floor of the machine while you're at it; that's where most smells come from.",
      tip: "A hot wash every month or so, plus a regular filter rinse, keeps most dishwashers smelling fresh.",
      svg:
        '<rect x="15" y="10" width="34" height="44" rx="4"/><line x1="15" y1="19" x2="49" y2="19" stroke-width="3"/>' +
        '<circle cx="21" cy="14.5" r="1.5" fill="currentColor" stroke="none"/>' + sparkle(32, 37, 10)
    },
    {
      id: "dishwasher-extra-dry",
      name: "Extra dry",
      category: "dishwasher",
      aka: ["extra dry", "extra drying", "heated dry", "dry plus", "drying boost"],
      looksLike: ["wavy lines over a plate", "heat lines", "steam over a dish", "squiggly lines", "wavy lines above a line"],
      meaning:
        "An option that adds extra drying, usually a hotter final rinse or a longer drying phase, for plastics and anything that keeps coming out soggy.",
      action:
        "Turn it on if cups and plastic tubs keep coming out wet. It adds a little time and energy. Opening the door a crack at the end of the cycle also helps a lot.",
      tip: "Plastic always dries worse than glass or china because it doesn't hold heat. It's not you, it's the tub. Rinse aid helps more than any setting.",
      svg:
        heatLine(24, 35.5, 4, 5) + heatLine(32, 35.5, 4, 5) + heatLine(40, 35.5, 4, 5) +
        '<path d="M14 43.5Q17 48.5 23 48.5H41Q47 48.5 50 43.5"/>'
    },
    {
      id: "dishwasher-hygiene",
      name: "Hygiene / sanitise",
      category: "dishwasher",
      aka: ["sanitise", "sanitize", "hygiene plus", "hygiene", "antibacterial", "sterilise"],
      looksLike: ["shield with a cross", "shield with a plus", "shield", "plus in a shield", "badge with a cross"],
      meaning:
        "Raises the final rinse temperature (often to around 70°C) and holds it there for a while to kill more bacteria. Useful for chopping boards, baby bottles, or when someone in the house has been ill.",
      action:
        "Select it as an option before you start. It takes longer and uses more energy, so save it for when it matters, and check plastic items can take the heat.",
      tip: "On American dishwashers a 'Sanitized' light comes on after the cycle if the water got hot enough.",
      svg:
        '<path d="M32 10L50 16.5V30C50 41 42.5 48.5 32 53C21.5 48.5 14 41 14 30V16.5Z"/>' +
        '<g stroke-width="4"><line x1="32" y1="22" x2="32" y2="40"/><line x1="23" y1="31" x2="41" y2="31"/></g>'
    },
    {
      id: "dishwasher-delay-start",
      name: "Delay start",
      category: "dishwasher",
      aka: ["delay", "delay start", "delayed start", "start later", "time delay", "3h 6h 9h"],
      looksLike: ["clock", "clock face", "clock with hands", "clock with h", "3h 6h 9h", "watch"],
      meaning:
        "Sets the dishwasher to start later, after a chosen number of hours, so it can run overnight on cheaper electricity or be finished by the time you're up.",
      action:
        "Press it until the delay you want shows (like 1–24h, or 3/6/9h), then press start and close the door. The countdown begins. To cancel, press it again or hold the start/reset button.",
      tip: "Some machines count down to the END of the wash rather than the start, so check what the number means on yours.",
      svg:
        '<circle cx="32" cy="32" r="19"/>' +
        '<line x1="32" y1="32" x2="32" y2="20"/><line x1="32" y1="32" x2="40" y2="36"/>'
    }
  ]);
})();
