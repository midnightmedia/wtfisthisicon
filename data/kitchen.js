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
      // Bosch's own symbol, traced, in the standard oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.8 29.2C30.7 29.3 30.5 29.5 30.3 29.5C29.9 29.5 29.6 29.3 29.2 29.3C28.5 29.2 27.5 29.2 26.7 29.3C24.4 29.7 20.4 31 18.5 32.4C18.3 32.6 18.1 32.8 18.1 33C18 33.8 18.4 36.5 18.7 37.2C18.9 37.7 18.9 38.3 19.5 38.5C20.2 38.8 21 38.7 21.7 38.8C23.7 39.1 24.9 39.1 26.9 38.8C27.6 38.8 28.3 38.7 29 38.5C29.8 38.4 31.7 37.3 32.1 37.3C32.3 37.4 32.4 37.5 32.6 37.7C32.7 37.9 32.7 38.2 32.9 38.5C33.2 39.2 33.6 40 34.1 40.6C35.3 42.2 39.4 46 41.2 46.4C42.2 46.7 44.4 44.5 45 43.8C45.4 43.4 46 43 45.8 42.4C45 39.5 43.2 36.8 41.3 34.5C40.8 33.9 40.2 33.4 39.5 32.9C39.2 32.7 38.8 32.6 38.5 32.3L38.5 31.7C38.9 31 39.5 30.4 39.9 29.6C41 27.8 41.8 24.1 41.8 21.9C41.8 21.2 42.1 20.1 41.7 19.5C41.3 18.9 40.3 18.6 39.6 18.4C39 18.1 36.9 17.3 36.3 17.5C35.6 17.8 34.7 19.4 34.2 20C33 21.9 31.9 23.9 31.3 26C31.1 26.5 31 27.2 30.9 27.8C30.9 28.3 31 28.7 30.8 29.2ZM37.2 20.1L39.4 20.9C39.6 22.8 38.5 28.2 37.1 29.4C36.4 28.9 35.6 28.3 34.6 28.2C34.2 28.2 33.8 28.3 33.4 28.1C33.2 26.4 35.9 21.3 37.2 20.1ZM33.3 30.6C34.5 30.4 35.8 31.1 36 32.4C36.3 33.5 35.6 35 34.3 35.2C33.1 35.4 31.9 34.8 31.5 33.5C31.2 32.3 32 30.9 33.3 30.6ZM29.1 31.7C29.2 32.5 29 33.3 29.2 34C29.3 34.6 29.8 35.1 29.8 35.6C27.7 36.7 24.6 36.8 22.3 36.5C21.9 36.4 21.5 36.5 21.1 36.4C20.7 35.9 20.5 34.6 20.7 34C22.1 32.9 24.8 32.2 26.5 31.9C27.3 31.7 28.3 31.4 29.1 31.7ZM38.1 35C38.8 35.1 39.4 36 39.9 36.5C40.8 37.8 43 40.7 43.1 42.2C42.8 42.8 41.9 43.6 41.3 43.7C39.6 43 35.5 39.4 35.1 37.5C35.5 37.3 35.9 37.2 36.2 37C37 36.5 37.5 35.8 38.1 35Z"/>'
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
      // Bosch 3D hot air: an outline fan tight inside a ring, in the oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.3 16.9C30.5 17 29.7 17 29 17.2C22.9 18.7 17.9 23.5 17.1 30C17 30.9 17 31.8 17 32.7C17 33.8 17.2 34.8 17.5 35.8C19 41.5 23.9 46.2 29.9 46.8C30.9 46.9 31.8 47.2 32.8 47.1C34.3 46.9 36 46.6 37.4 46C42.2 43.9 46.1 39.7 46.9 34.3C47 33.3 47 32.3 47 31.2C47 24.6 41.8 18.9 35.5 17.4C34.2 17 32.6 16.8 31.3 16.9ZM32.3 19.4C31.2 21.2 30.1 23 29.5 25.1C29.3 25.5 29.2 26 29.1 26.4C29.1 27 29.2 27.9 28.9 28.4C28.5 28.5 28 28.3 27.5 28.2C26.7 28.1 25.7 28.2 24.9 28.4C23.5 28.6 22.2 29.1 20.9 29.6C20.4 29.7 20 30 19.6 30.1C19.5 29.4 19.8 28.6 20.1 27.9C21.4 24.1 24.3 21.2 28.1 20C28.9 19.7 31.6 19 32.3 19.4ZM37.5 20.6C37.6 21.1 37.4 21.6 37.4 22C37.1 23.9 36.8 27.4 35.3 28.8C35 28.6 34.7 28.3 34.3 28.1C33.9 27.9 33.5 27.7 33 27.5C32.5 27.4 32 27.6 31.5 27.4C31.4 25.6 33.8 20.9 35.1 19.8C35.8 19.8 36.9 20.2 37.5 20.6ZM39.8 22.1C40.7 22.4 42.4 24.7 42.9 25.5C44.7 28.8 45.2 32.7 43.9 36.2C43.6 37 43.3 37.8 42.8 38.5C42.4 38.1 42.1 37.4 41.8 36.9C41.2 35.8 40.6 34.8 39.8 33.8C39.1 33 38.3 32.3 37.5 31.7C37.2 31.5 36.9 31.3 36.6 31.1C36.8 30.7 37.2 30.4 37.5 30C37.9 29.3 38.3 28.6 38.6 27.9C39.1 26.5 39.6 24.7 39.7 23.3C39.7 22.9 39.7 22.5 39.8 22.1ZM31.8 29.8C32.9 29.6 33.9 30.6 34.1 31.7C34.3 32.9 33.4 33.8 32.2 34.1C31.2 34.3 30.1 33.3 29.9 32.3C29.8 31.1 30.6 30.1 31.8 29.8ZM27.6 30.8C27.5 33 27.5 32.7 28.4 34.7C27.8 35.2 26.6 35.4 25.9 35.4C24.2 35.6 21.5 35.9 19.9 35.4C19.6 34.8 19.4 33.5 19.5 32.9C20.5 32 23.9 31 25.3 30.8C26 30.7 27 30.4 27.6 30.8ZM36.1 33.8C36.8 33.9 37.5 34.8 37.9 35.3C39 36.7 40.6 39 41 40.7C40.7 41.4 39.8 42.1 39.1 42.4C37.5 41.8 35.3 39.5 34.2 38.2C33.8 37.7 33.2 37.1 33.1 36.4C34.6 35.6 35.3 35.4 36.1 33.8ZM30.5 36.4C30.7 36.8 30.8 37.3 31 37.7C31.5 38.7 32.1 39.5 32.8 40.4C33.6 41.3 34.6 42 35.5 42.8C35.8 43.1 36.3 43.4 36.6 43.7C35.7 44.2 34.7 44.3 33.7 44.5C33 44.5 32.2 44.8 31.5 44.7C28.1 44.3 24.8 43 22.5 40.3C21.9 39.6 21.3 38.9 21 38C21.4 37.9 22 38 22.5 38.1C23.4 38.1 24.4 38.1 25.2 38C26.5 37.8 27.7 37.6 28.9 37.1C29.4 36.9 29.9 36.5 30.5 36.4Z"/>'
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
      // Top and bottom heat with the Bosch outline fan between them.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><line x1="16" y1="15.5" x2="48" y2="15.5" stroke-width="4.5"/><line x1="16" y1="48.5" x2="48" y2="48.5" stroke-width="4.5"/><g transform="matrix(0.82 0 0 0.82 5.76 5.76)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.8 29.2C30.7 29.3 30.5 29.5 30.3 29.5C29.9 29.5 29.6 29.3 29.2 29.3C28.5 29.2 27.5 29.2 26.7 29.3C24.4 29.7 20.4 31 18.5 32.4C18.3 32.6 18.1 32.8 18.1 33C18 33.8 18.4 36.5 18.7 37.2C18.9 37.7 18.9 38.3 19.5 38.5C20.2 38.8 21 38.7 21.7 38.8C23.7 39.1 24.9 39.1 26.9 38.8C27.6 38.8 28.3 38.7 29 38.5C29.8 38.4 31.7 37.3 32.1 37.3C32.3 37.4 32.4 37.5 32.6 37.7C32.7 37.9 32.7 38.2 32.9 38.5C33.2 39.2 33.6 40 34.1 40.6C35.3 42.2 39.4 46 41.2 46.4C42.2 46.7 44.4 44.5 45 43.8C45.4 43.4 46 43 45.8 42.4C45 39.5 43.2 36.8 41.3 34.5C40.8 33.9 40.2 33.4 39.5 32.9C39.2 32.7 38.8 32.6 38.5 32.3L38.5 31.7C38.9 31 39.5 30.4 39.9 29.6C41 27.8 41.8 24.1 41.8 21.9C41.8 21.2 42.1 20.1 41.7 19.5C41.3 18.9 40.3 18.6 39.6 18.4C39 18.1 36.9 17.3 36.3 17.5C35.6 17.8 34.7 19.4 34.2 20C33 21.9 31.9 23.9 31.3 26C31.1 26.5 31 27.2 30.9 27.8C30.9 28.3 31 28.7 30.8 29.2ZM37.2 20.1L39.4 20.9C39.6 22.8 38.5 28.2 37.1 29.4C36.4 28.9 35.6 28.3 34.6 28.2C34.2 28.2 33.8 28.3 33.4 28.1C33.2 26.4 35.9 21.3 37.2 20.1ZM33.3 30.6C34.5 30.4 35.8 31.1 36 32.4C36.3 33.5 35.6 35 34.3 35.2C33.1 35.4 31.9 34.8 31.5 33.5C31.2 32.3 32 30.9 33.3 30.6ZM29.1 31.7C29.2 32.5 29 33.3 29.2 34C29.3 34.6 29.8 35.1 29.8 35.6C27.7 36.7 24.6 36.8 22.3 36.5C21.9 36.4 21.5 36.5 21.1 36.4C20.7 35.9 20.5 34.6 20.7 34C22.1 32.9 24.8 32.2 26.5 31.9C27.3 31.7 28.3 31.4 29.1 31.7ZM38.1 35C38.8 35.1 39.4 36 39.9 36.5C40.8 37.8 43 40.7 43.1 42.2C42.8 42.8 41.9 43.6 41.3 43.7C39.6 43 35.5 39.4 35.1 37.5C35.5 37.3 35.9 37.2 36.2 37C37 36.5 37.5 35.8 38.1 35Z"/></g>'
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
      // Beko: the outline fan over a bottom heat line.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><line x1="16" y1="48.5" x2="48" y2="48.5" stroke-width="4.5"/><g transform="matrix(0.88 0 0 0.88 3.84 1.6)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.8 29.2C30.7 29.3 30.5 29.5 30.3 29.5C29.9 29.5 29.6 29.3 29.2 29.3C28.5 29.2 27.5 29.2 26.7 29.3C24.4 29.7 20.4 31 18.5 32.4C18.3 32.6 18.1 32.8 18.1 33C18 33.8 18.4 36.5 18.7 37.2C18.9 37.7 18.9 38.3 19.5 38.5C20.2 38.8 21 38.7 21.7 38.8C23.7 39.1 24.9 39.1 26.9 38.8C27.6 38.8 28.3 38.7 29 38.5C29.8 38.4 31.7 37.3 32.1 37.3C32.3 37.4 32.4 37.5 32.6 37.7C32.7 37.9 32.7 38.2 32.9 38.5C33.2 39.2 33.6 40 34.1 40.6C35.3 42.2 39.4 46 41.2 46.4C42.2 46.7 44.4 44.5 45 43.8C45.4 43.4 46 43 45.8 42.4C45 39.5 43.2 36.8 41.3 34.5C40.8 33.9 40.2 33.4 39.5 32.9C39.2 32.7 38.8 32.6 38.5 32.3L38.5 31.7C38.9 31 39.5 30.4 39.9 29.6C41 27.8 41.8 24.1 41.8 21.9C41.8 21.2 42.1 20.1 41.7 19.5C41.3 18.9 40.3 18.6 39.6 18.4C39 18.1 36.9 17.3 36.3 17.5C35.6 17.8 34.7 19.4 34.2 20C33 21.9 31.9 23.9 31.3 26C31.1 26.5 31 27.2 30.9 27.8C30.9 28.3 31 28.7 30.8 29.2ZM37.2 20.1L39.4 20.9C39.6 22.8 38.5 28.2 37.1 29.4C36.4 28.9 35.6 28.3 34.6 28.2C34.2 28.2 33.8 28.3 33.4 28.1C33.2 26.4 35.9 21.3 37.2 20.1ZM33.3 30.6C34.5 30.4 35.8 31.1 36 32.4C36.3 33.5 35.6 35 34.3 35.2C33.1 35.4 31.9 34.8 31.5 33.5C31.2 32.3 32 30.9 33.3 30.6ZM29.1 31.7C29.2 32.5 29 33.3 29.2 34C29.3 34.6 29.8 35.1 29.8 35.6C27.7 36.7 24.6 36.8 22.3 36.5C21.9 36.4 21.5 36.5 21.1 36.4C20.7 35.9 20.5 34.6 20.7 34C22.1 32.9 24.8 32.2 26.5 31.9C27.3 31.7 28.3 31.4 29.1 31.7ZM38.1 35C38.8 35.1 39.4 36 39.9 36.5C40.8 37.8 43 40.7 43.1 42.2C42.8 42.8 41.9 43.6 41.3 43.7C39.6 43 35.5 39.4 35.1 37.5C35.5 37.3 35.9 37.2 36.2 37C37 36.5 37.5 35.8 38.1 35Z"/></g>'
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
      // Bosch's own symbol, traced, in the standard oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M24 14.8L27.9 18.2C29 18.1 30.9 15.4 32 14.8C32.8 15.4 35.5 18.3 36.2 18.1C36.8 18 39.2 15.4 40 14.9C41 15.2 43.2 18.2 44.1 18.1C44.7 18.1 45.3 17.3 45.7 16.9C46.5 16.2 49.5 13.6 49.9 13C50.5 12 50 10.7 48.8 10.6C47.4 10.5 45.3 13.8 44 14.2C43.1 13.7 40.9 11.1 40.2 10.9C39.4 10.8 36.9 13.7 36 14.2C34.9 13.7 33 11.1 32 10.9C30.9 11.1 29.1 13.7 27.9 14.2C27 13.6 26 12.5 25.1 11.7C24.7 11.4 24.4 10.8 23.8 10.9C23 11.1 20.9 13.7 20 14.2C18.6 13.6 16.7 10.5 15.2 10.6C14 10.6 13.4 11.9 14 12.8C14.5 13.7 17.4 16.1 18.2 16.9C18.7 17.2 19.2 18 19.8 18.1C20.7 18.3 23 15.3 24 14.8ZM29 33.2C28.9 33.3 28.7 33.5 28.5 33.5C28.1 33.5 27.8 33.3 27.4 33.2C26.7 33.1 25.7 33.2 24.9 33.3C22.6 33.7 18.6 35 16.7 36.4C16.5 36.5 16.3 36.8 16.3 37C16.2 37.8 16.6 40.4 16.9 41.2C17.1 41.7 17.1 42.3 17.7 42.5C18.4 42.8 19.2 42.7 19.9 42.8C21.9 43.1 23.1 43 25.1 42.8C25.8 42.8 26.5 42.7 27.2 42.5C28 42.4 29.9 41.3 30.3 41.3C30.5 41.4 30.6 41.5 30.8 41.7C30.9 41.9 30.9 42.2 31.1 42.5C31.4 43.2 31.8 44 32.3 44.6C33.5 46.2 37.5 50 39.4 50.4C40.4 50.7 42.6 48.4 43.2 47.8C43.6 47.4 44.2 47 44 46.4C43.2 43.5 41.5 40.8 39.5 38.5C39 37.9 38.4 37.4 37.7 36.9C37.4 36.7 37 36.5 36.7 36.3L36.7 35.7C37.1 35 37.7 34.4 38.1 33.6C39.2 31.7 40 28.1 40 25.9C40 25.2 40.3 24.1 39.9 23.5C39.5 22.9 38.5 22.6 37.8 22.4C37.2 22.1 35.1 21.3 34.5 21.5C33.8 21.8 32.9 23.4 32.4 24C31.2 25.9 30.1 27.9 29.5 30C29.3 30.5 29.2 31.2 29.1 31.8C29.1 32.2 29.2 32.7 29 33.2ZM35.4 24.1L37.6 24.9C37.9 26.8 36.7 32.2 35.3 33.4C34.5 32.9 33.8 32.3 32.8 32.2C32.4 32.2 32 32.2 31.6 32.1C31.4 30.4 34.1 25.3 35.4 24.1ZM31.5 34.6C32.7 34.4 34 35.1 34.2 36.4C34.5 37.5 33.8 39 32.5 39.2C31.3 39.4 30.1 38.8 29.7 37.5C29.4 36.2 30.2 34.8 31.5 34.6ZM27.3 35.7C27.4 36.5 27.2 37.3 27.4 38C27.5 38.6 27.9 39.1 28 39.6C25.9 40.7 22.8 40.8 20.5 40.5C20.1 40.4 19.7 40.5 19.3 40.4C18.9 39.9 18.7 38.6 18.9 38C20.3 36.9 23 36.2 24.7 35.8C25.5 35.7 26.5 35.4 27.3 35.7ZM36.3 39C37 39.1 37.6 40 38.1 40.5C39 41.8 41.2 44.7 41.3 46.2C41 46.8 40.1 47.6 39.5 47.7C37.8 47 33.7 43.4 33.4 41.5C33.7 41.3 34.1 41.2 34.4 41C35.2 40.5 35.7 39.8 36.3 39Z"/>'
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
      // Bosch's own symbol, traced, in the standard oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.8 17.6C28.7 17.7 25.6 17.4 24.8 17.8C23.8 18.2 23.8 19.6 24.9 20C25.7 20.3 28.7 20.1 29.8 20.1C29.7 21.1 27.6 23.4 27.4 24.6C27.3 25.6 28.6 26.2 29.4 25.6C30.6 24.6 30.9 22.4 32 21.3C32.8 22.5 33.6 24.6 34.6 25.5C35.3 26.2 36.4 25.7 36.5 24.8C36.6 24 34.6 21.1 34.1 20.1C35.5 19.9 38 20.4 39.1 19.9C40.1 19.6 40.1 18.3 39.2 17.8C38.3 17.2 35.4 17.9 34.1 17.6C34.6 16.6 36.5 13.9 36.5 13.1C36.6 12.1 35.4 11.5 34.6 12.1C33.9 12.7 32.6 15.4 32 16.4C31.1 15.5 30.3 12.7 29.3 12.1C28.4 11.5 27.2 12.3 27.5 13.3C27.9 14.6 29.6 16.5 29.8 17.6ZM32 28.6C31.3 28.7 31 29.5 30.7 30C29.8 31.4 28.9 32.8 28 34.1C26.8 36.1 24.5 39 24 41.1C22.8 46 26 50.9 31.1 51.5C36.4 52.1 40.9 47.3 40.2 42.1C39.8 39.1 37.5 36.6 36 34.2C35.1 32.8 34.2 31.4 33.3 30C33 29.5 32.6 28.7 32 28.6ZM31.9 32.5C32.6 33.1 34.4 36.2 35.1 37.2C35.9 38.4 37.3 40.2 37.6 41.6C37.9 42.9 37.9 43.6 37.6 44.8C37.5 45.7 36.8 46.7 36.2 47.4C32.9 50.6 27.2 49.1 26.3 44.5C26.1 43.8 26 43.2 26.1 42.5C26.4 41 27.1 39.9 28 38.6C29.3 36.6 30.5 34.5 31.9 32.5ZM27.9 42.5C27.3 43.1 27.6 44.2 27.9 44.9C28.6 46.6 31.8 48.8 33.4 47.2C33.6 46.8 33.5 46.5 33.4 46.2C32.7 44.5 31.8 45.8 30.6 44.7C29.9 44 30.2 43.4 29.7 42.7C29.3 42.4 28.4 42.3 27.9 42.5Z"/>'
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
      // Bosch's own symbol, traced, in the standard oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37.5 22.2C37.4 21.7 37.4 21.1 37.4 20.6C37.4 18.8 37.7 16.8 36.7 15.1C34.8 11.9 30.1 11.6 27.7 14.5C26.2 16.4 26.5 18.4 26.5 20.6C26.5 21.1 26.6 21.7 26.4 22.1C26.3 22.6 25.5 22.9 25.1 23.2C24.2 23.9 23.4 24.7 22.7 25.6C20.3 28.6 20.1 34 22.1 37.3C26.5 44.8 37 45.2 41.6 37.7C42.2 36.7 42.8 35.5 43 34.3C43.1 34.1 43 33.8 43.1 33.6C43.1 33.2 43.3 32.8 43.3 32.4C43.3 31.7 43.2 31.1 43.1 30.5C43 30.1 43.1 29.8 43 29.4C42.6 27.6 41.6 25.9 40.4 24.5C39.9 24 39.3 23.5 38.7 23C38.3 22.8 37.8 22.5 37.5 22.2ZM34 18.8L29.9 18.8C29.7 18.4 29.8 18 29.9 17.6C30.3 14.6 34.9 15.6 34 18.8ZM34 22.1C34.4 22.8 34 23.5 34.6 24.2C35.2 24.9 36.2 25.1 36.9 25.7C38.6 27.2 39.7 29.1 39.9 31.4C40 32.1 39.9 32.7 39.8 33.3C39 38.2 34.3 40.6 29.8 39.5C27.3 39 25.4 36.9 24.5 34.7C24 33.7 23.9 32.4 24 31.3C24.2 29.3 25.2 27.3 26.7 25.9C27.4 25.3 29 24.8 29.5 24.1C29.9 23.5 29.6 22.8 29.8 22.2L34 22.1ZM14.2 30.3C12.8 30.5 11.7 31.8 12.8 33C13.7 33.9 15.4 33.6 16.5 33.6C18 33.6 18.9 32.1 17.9 30.9C17.2 30.1 15.1 30.2 14.2 30.3ZM49.2 30.3C47.9 30.5 46.5 30 45.8 31.4C45.4 32.2 46 33.4 46.9 33.5C47.3 33.6 47.7 33.5 48 33.5C49.1 33.6 51 33.9 51.4 32.5C51.9 31.1 50.6 30.1 49.2 30.3ZM20.8 41.1C19.8 41.3 18.2 43.2 17.5 44C17.2 44.4 16.9 44.7 16.8 45.1C16.5 46.2 17.5 47.2 18.6 47.1C19.7 46.9 21.2 45 22 44.2C22.3 43.9 22.6 43.6 22.7 43.3C23 42.1 22 40.9 20.8 41.1ZM42.6 41.1C41.5 41.3 40.8 42.5 41.3 43.5C41.5 43.9 41.9 44.2 42.2 44.5C43 45.3 44.5 47.3 45.8 47.1C46.8 46.9 47.5 45.8 47 44.8C46.9 44.4 46.5 44 46.1 43.7C45.3 42.9 43.9 40.9 42.6 41.1ZM31.7 45.6C30.1 45.8 30.3 47.6 30.3 48.8C30.3 49.8 30.3 50.8 31.3 51.3C31.6 51.4 31.9 51.5 32.3 51.4C33.8 51 33.6 49.5 33.6 48.2C33.6 46.9 33.4 45.4 31.7 45.6Z"/>'
    },
    {
      id: "oven-self-clean",
      name: "Self-clean (pyrolytic or steam clean)",
      category: "oven",
      aka: ["pyrolytic", "pyrolysis", "pyro", "self cleaning", "aqua clean", "steam clean", "hydrolytic", "EcoClean"],
      looksLike: ["grid of dots getting smaller", "circles shrinking to dots", "nine circles", "circles and dots in a box", "dots in a square"],
      meaning:
        "The oven's own cleaning programme. The symbol varies a lot between brands, because of course it does. Pyrolytic ovens heat themselves to around 400–500°C and burn grease to ash, locking the door for safety. Steam or 'aqua clean' versions use a little water in the base at a low temperature to soften grime.",
      action:
        "Take out trays, racks and loose dirt first (unless your manual says they can stay in), then start it. After a pyrolytic clean the door stays locked until the oven has cooled; then just wipe out the ash with a damp cloth. Keep the kitchen ventilated.",
      tip: "Many manuals warn that fumes from a pyrolytic clean can harm pet birds, so move them to another room first.",
      // Bosch pyrolytic (ActiveClean): a grid of circles shrinking to dots.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.3 9.8C12.4 10.4 9.8 13.2 9.8 17.2C9.9 20.7 13.7 24.1 17.2 23.6C20.3 23.2 23.1 21.2 23.5 17.9C23.6 17.4 23.7 16.9 23.6 16.4C23.3 13.4 21.4 10.7 18.3 10C17.6 9.9 16.9 9.8 16.3 9.8ZM31.5 9.8C28.2 10.3 25.8 12.4 25.2 15.7C25.1 16.2 25 16.7 25.1 17.2C25.2 17.9 25.3 18.6 25.6 19.3C26.6 21.9 29.6 24 32.4 23.6C35.7 23.2 38.2 21.2 38.7 17.9C38.8 17.4 39 16.9 38.9 16.3C38.5 13.3 36.5 10.7 33.4 10C32.8 9.9 32.1 9.8 31.5 9.8ZM46.7 9.8C43.9 10.2 41.6 11.9 40.7 14.7C40.4 15.5 40.2 16.4 40.3 17.2C40.9 21 43.6 23.8 47.6 23.6C51.4 23.5 54.2 20 54.1 16.4C54 12.8 50.4 9.4 46.7 9.8ZM16.4 12.3C18.7 12 21.1 14 21.2 16.3C21.2 16.8 21.2 17.4 21.1 17.9C20.6 19.6 19 21.1 17.1 21.2C14.5 21.2 12.8 19.8 12.3 17.2C11.8 14.7 14.1 12.6 16.4 12.3ZM31.7 12.3C33.4 12.1 35.3 13.2 36 14.8C36.2 15.3 36.3 15.9 36.4 16.4C36.8 18.8 34.6 21.1 32.3 21.2C30.2 21.2 28.3 20.1 27.7 18C27.6 17.7 27.6 17.4 27.6 17.1C27.5 16.7 27.6 16.4 27.6 16C27.9 13.8 29.7 12.6 31.7 12.3ZM46.8 12.3C49.3 12 51.3 14 51.7 16.3C52.1 18.7 50 21 47.6 21.2C45.4 21.4 42.8 19.6 42.8 17.2C42.8 14.6 44.1 12.7 46.8 12.3ZM16.5 29.6C16.2 29.6 15.9 29.6 15.6 29.7C13.3 30.2 11.3 32.6 11.6 35C11.8 38 13.9 40 16.9 40C19.8 40 22 37.4 22 34.6C22 31.9 19.3 29.2 16.5 29.6ZM31.7 29.6C28.6 30 26.8 32 26.8 35.1C26.8 38 29.5 40 32.2 40C34.5 40 36.6 38.1 37.1 35.9C37.2 35.5 37.2 35 37.2 34.6C37.2 31.8 34.5 29.2 31.7 29.6ZM46.8 29.6C43.8 30 42 32.1 42 35.1C42 37.5 44.1 39.5 46.4 40C46.7 40 47.2 40 47.5 40C50.4 40 52.6 37.1 52.4 34.5C52.2 31.7 49.7 29.2 46.8 29.6ZM16.4 32C17.9 31.8 19.2 32.9 19.6 34.4C19.9 35.9 18.6 37.3 17.1 37.6C15.8 37.9 14 36.6 14 35.1C14 33.5 14.7 32.2 16.4 32ZM31.8 32C33.2 31.8 34.8 33 34.8 34.5C34.8 36 33.8 37.4 32.2 37.6C30.8 37.8 29.2 36.5 29.2 35C29.2 33.3 30.1 32.2 31.8 32ZM47.1 32C48.6 31.8 49.9 33.1 50 34.5C50.1 36.1 49 37.5 47.4 37.6C46 37.7 44.4 36.4 44.4 35C44.4 33.3 45.5 32.2 47.1 32Z"/><g fill="currentColor" stroke="none"><circle cx="16.76" cy="48.71" r="2.81"/><circle cx="31.99" cy="48.72" r="2.8"/><circle cx="47.21" cy="48.71" r="2.81"/></g>'
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
      // Bosch's own symbol, traced, in the standard oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.7 15.1C24.6 15.2 23.9 16.2 23.3 17C21.9 18.9 21.3 21.7 21.9 23.9C22.3 25 22.8 26 23.4 27C24.8 29.4 26.3 31.2 24.9 34.1C24.5 34.9 23.2 36.1 23.1 36.7C22.9 37.6 23.7 38.7 24.7 38.7C25.8 38.6 26.4 37.6 27 36.9C28.5 35.1 29.1 31.9 28.4 29.7C28.1 28.7 27.6 27.8 27.1 26.8C25.8 24.5 24.1 22.8 25.3 19.9C25.7 19 27.2 17.6 27.3 17C27.5 16.1 26.7 14.9 25.7 15.1ZM32.5 15.1C31.4 15.2 30.5 16.5 29.9 17.4C28.1 20.6 28.2 24 30.4 27C31.9 29.1 33.1 31.3 32 33.9C31.5 34.9 30.2 36.1 30.1 36.9C29.9 37.8 30.8 38.6 31.7 38.6C32.8 38.6 33.6 37.4 34.2 36.6C34.8 35.8 35.2 34.8 35.4 33.8C35.4 33.5 35.6 33.1 35.6 32.8C35.9 30.4 35.2 28.7 34 26.8C32.7 24.7 31.2 22.6 32.3 20C32.7 19 34.2 17.6 34.3 16.9C34.4 16 33.5 14.9 32.5 15.1ZM39.6 15.1C38.5 15.2 37.7 16.4 37.1 17.2C34.9 20.2 35.4 24.1 37.4 27C38.7 28.9 39.8 30.5 39.3 33C39.2 33.2 39.2 33.4 39.1 33.7C39 34 38.8 34.4 38.5 34.7C38.1 35.4 37.1 36 37 36.9C37 37.8 37.7 38.7 38.7 38.7C39.8 38.6 40.6 37.4 41.2 36.6C42.6 34.7 43.1 31.8 42.4 29.5C42.1 28.6 41.5 27.7 41.1 26.8C39.6 24.3 38.1 22.7 39.4 19.7C39.8 18.9 41.1 17.8 41.2 17.1C41.4 16.1 40.7 14.9 39.6 15.1ZM16.6 39.7C15.3 39.8 15.1 41 15.1 42C15.1 43.9 16.1 45.9 17.5 47C18.6 47.9 19.9 48.4 21.2 48.6C22.1 48.7 23.1 48.6 24 48.6C25.8 48.6 27.7 48.6 29.5 48.6C32.3 48.6 35.1 48.6 37.9 48.6C39.9 48.6 41.9 48.8 43.9 48.4C46 47.8 48.1 45.9 48.6 43.7C49 42.3 49.2 39.4 47 39.7C44.8 40 46.4 43.3 44 44.8C42.5 45.8 36.5 45.4 34.4 45.4C31.3 45.4 28.2 45.4 25.1 45.4C23.7 45.4 21.7 45.6 20.4 45.1C19.3 44.6 18.5 43.6 18.4 42.4C18.3 42 18.4 41.5 18.3 41C18.2 40.2 17.3 39.5 16.6 39.7Z"/>'
    },
    {
      id: "oven-steam",
      name: "Steam",
      category: "oven",
      aka: ["steam", "steam assisted", "added steam", "steam bake", "moisture", "humidity", "Steamify"],
      looksLike: ["cloud with lines", "steam cloud", "puff of steam", "lines rising into a cloud", "cloud in a box"],
      meaning:
        "A steam-assisted setting. The oven adds water vapour (from a water tank or a tray in the base) while it heats, so food stays moist and bread gets a crisp, shiny crust.",
      action:
        "Fill the water tank or tray first; most ovens warn you, or won't start, if it's empty. Great for bread, reheating leftovers, fish and vegetables. Descale the oven when it asks you to.",
      tip: "Steam symbols vary: wavy lines, water drops, or a drop combined with the fan symbol are all common.",
      // Siemens added steam: lines rising into a cloud, in the oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M27 13.2C26.4 13.7 25.8 16.1 25.4 17C24.5 19.2 23.6 21.4 22.8 23.6C22.7 23.8 22.7 24 22.6 24.2C22.3 24.9 22 25.7 21.7 26.4C21.5 27.1 20.9 28.3 21.8 28.8C22.1 28.9 22.4 28.9 22.6 28.8C23.3 28.3 23.8 26.1 24.2 25.3C25.3 22.7 26.1 20 27.2 17.4C27.4 16.9 28.5 14.3 28.5 14C28.6 13.2 27.7 13 27 13.2ZM42.9 28.9C43.4 28.8 43.8 28.4 44 28C44 27.1 43 25.4 42.7 24.5C42.2 23 41.5 21.6 41 20.1C40.5 18.8 40 17.4 39.5 16.1C39.2 15.3 38.4 12.2 37.1 13.3C36.1 14.1 37.7 16 37.8 16.9C38 17.8 38.5 18.7 38.8 19.5C39.5 21.6 40.4 23.6 41.2 25.7C41.6 26.7 41.8 28.4 42.9 28.9ZM33.3 17.1L32.5 16.6C32.2 16.7 31.8 16.8 31.7 17.1C31.5 17.7 31.6 21 31.6 21.9C31.6 25.6 31.6 29.4 31.6 33.1C31.6 33.8 31.4 36.7 31.8 37.1C32.3 37.7 33.2 37.5 33.4 36.7C33.4 36.1 33.4 35.4 33.4 34.8C33.4 33.3 33.4 31.8 33.4 30.2C33.4 28.4 33.4 26.6 33.4 24.8C33.4 23.5 33.5 17.9 33.3 17.1ZM22.2 42.8C22.4 43.1 22.3 43.4 22.4 43.8C22.5 44 22.6 44.2 22.7 44.5C22.9 45.6 23.2 46.9 24 47.9C24.7 48.6 25.4 49.5 26.2 50C27 50.6 28 51 28.9 51.2C29.6 51.5 30.4 51.7 31.1 51.9C31.7 52 32.3 51.9 32.9 51.9C33.5 51.9 34.1 52 34.7 51.9C35 51.8 35.2 51.6 35.5 51.6C35.8 51.5 36 51.6 36.3 51.5C37.9 51.1 39.5 49.9 40.6 48.6C41 48.1 41.8 46.6 41.9 46.1C42 45.8 41.9 45.5 42 45.2C42 45 42.2 44.8 42.2 44.6C42.4 44 42.2 43.5 42.4 43C43 42.7 43.8 43 44.4 42.9C44.7 42.8 45 42.7 45.4 42.6C45.6 42.6 45.9 42.6 46.2 42.6C46.5 42.6 46.7 42.4 47 42.3C47.2 42.3 47.4 42.3 47.5 42.2C49 41.7 50.1 40.6 50.9 39.3C51.3 38.6 51.7 37.8 51.9 37C52.1 36.1 52 33.9 51.6 33.1C51.4 32.5 51 30.8 50 31.4C48.8 32 49.9 33.6 50.1 34.4C50.4 35.7 49.7 37.8 49 38.8C47.8 40.3 45.9 40.9 44.1 40.9C43.4 40.9 41.4 40.7 40.9 41.1C40.3 41.6 40.7 42.7 40.6 43.4C40.5 43.8 40.3 44 40.2 44.4C40.2 44.7 40.3 45 40.1 45.2C39.9 45.8 39.7 46.4 39.5 46.9C39.3 47.2 39 47.4 38.9 47.6C37.9 48.8 37.2 49 35.9 49.6C35.7 49.6 35.6 49.8 35.4 49.8C35 49.9 34.7 49.8 34.3 49.9C33.8 49.9 33.4 50.1 32.9 50.2C32.3 50.2 31.9 49.9 31.3 49.8C31.1 49.8 30.8 49.9 30.6 49.8C30.3 49.8 30.1 49.6 29.8 49.5C29.6 49.5 29.3 49.5 29.1 49.4C27.1 48.6 25.7 47.3 24.9 45.3C24.7 44.9 24.5 44.4 24.4 44C24.4 43.8 24.5 43.5 24.4 43.2C24.4 42.8 24 41.2 23.7 41C23.1 40.7 21.6 41 20.9 40.9C20.6 40.9 20.3 40.7 19.9 40.6C18.1 40.3 16.6 39.3 15.6 37.7C15.1 36.8 14.9 35.3 15.2 34.3C15.4 33.5 16.4 32.1 15.5 31.4C14.4 30.7 13.9 32.5 13.6 33.2C13.4 33.6 13.5 33.9 13.4 34.3C13.3 34.6 13.2 34.8 13.1 35.1C13.1 35.8 13.3 36.3 13.4 36.9C13.5 37.1 13.4 37.4 13.5 37.6C13.7 38.1 14 38.5 14.2 39C14.3 39.3 14.6 39.5 14.8 39.7C15.7 40.8 16.9 41.9 18.3 42.2C18.5 42.3 18.7 42.3 18.9 42.3C19.2 42.4 19.4 42.6 19.7 42.6C20.5 42.7 21.5 42.4 22.2 42.8Z"/>'
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
      // Siemens dough proving: a scalloped dome in a flat-bottomed bowl, in the oven frame.
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.9 21.2C23.4 21.4 22.8 21.1 22.3 21.2C21.6 21.2 21 21.2 20.4 21.4C20.1 21.4 19.9 21.5 19.7 21.6C18.4 22.2 17.3 23 16.7 24.3C16.5 24.7 16.2 25.2 16.2 25.6C16.1 26.2 16.1 27.9 16.2 28.6C16.3 29.1 16.6 29.7 16.8 30.1C17.1 30.7 17.4 31.9 18.4 31.6C18.9 31.4 19.1 30.7 18.9 30.2C18.8 29.8 18.5 29.4 18.4 29.1C18.3 28.9 18.3 28.6 18.2 28.4C18.1 28.2 18 28 18 27.8C17.6 26.7 18.2 25.5 18.7 24.6C19.6 23.1 22.2 22.9 23.7 23.1C24.2 23.1 24.9 23.7 25.5 23.3C26.3 22.7 26 21.8 25.9 21C25.9 20.7 26.1 20.4 26.1 20.1C26.2 19.3 26.2 18.9 26.6 18.1C27.3 16.5 28.7 15.8 30.3 15.5C30.6 15.4 30.8 15.3 31 15.2C31.7 15 32.9 15.1 33.6 15.2C34 15.2 34.3 15.4 34.6 15.5C35.5 15.6 36.2 15.8 37 16.3C37.9 16.8 38.9 18 39.1 19.1C39.2 19.3 39.2 19.6 39.2 19.9C39.3 20.1 39.5 20.4 39.5 20.7C39.6 21.4 39.2 22.8 40 23.3C40.5 23.6 43.1 23.4 43.9 23.4C44.2 23.4 44.4 23.6 44.7 23.7C46.1 24.2 47.2 25 47.4 26.6C47.5 26.9 47.6 27.2 47.6 27.6C47.6 27.9 47.5 28.8 47.3 29.1C47 29.6 46.5 30.2 46.5 30.8C47.5 32.8 48.5 30.8 49 29.8C49.1 29.6 49.1 29.4 49.2 29.2C49.2 29.1 49.4 28.9 49.4 28.7C49.7 27.9 49.5 26.7 49.2 25.9C49.1 25.7 49.1 25.4 49 25.2C48.1 23.6 47.4 22.6 45.6 22C45.4 21.9 45.2 21.8 45 21.7C44.7 21.7 44.4 21.7 44.1 21.6C43.7 21.6 43.4 21.4 43 21.3C42.5 21.3 41.9 21.5 41.4 21.2C41.1 20.7 41.3 20.1 41.2 19.6C41.2 18.9 40.5 17.1 40.1 16.6C39.1 15.3 37.7 14.4 36.2 13.8C36 13.8 35.7 13.8 35.4 13.8C35.2 13.7 35 13.5 34.7 13.5C34.1 13.3 33.4 13.4 32.8 13.4C32.5 13.4 32.3 13.3 32 13.3C31.6 13.3 30.7 13.4 30.2 13.4C29.9 13.5 29.7 13.6 29.4 13.7C28.1 14.2 26.7 14.7 25.7 15.8C25 16.6 24.7 17.7 24.4 18.7C24.3 18.9 24.2 19.1 24.1 19.4C24 19.9 24.3 20.7 23.9 21.2ZM18.4 40.4C17.3 39.8 17.1 35.5 15 35.1C14.4 35.3 13.4 35.9 13.5 36.6C13.5 37.3 14.5 39 14.8 39.7C15.9 42.4 17 45.1 18.1 47.7C18.5 48.6 19.4 51.2 20 51.7C20.6 52 21.4 51.9 22 51.9C23.5 51.9 25 51.9 26.5 51.9C30.5 51.9 34.5 51.9 38.5 51.9C39.8 51.9 41.1 51.9 42.4 51.9C43 51.9 43.7 52 44.2 51.9C45.2 51.8 46.1 49 46.4 48.2C47.8 44.9 49.4 41.8 50.8 38.5C51 38 51.5 37.1 51.5 36.6C51.6 35.8 50.5 35.2 49.9 35.1C47.8 35.7 47.8 39.6 46.5 40.2C46.1 40.1 43.9 38.1 43.2 37.7C41.5 36.5 39.6 35.5 37.7 34.8C37.5 34.7 37.2 34.8 37 34.7C36.8 34.6 36.7 34.5 36.5 34.4C36.2 34.4 35.9 34.4 35.6 34.3C35.4 34.3 35.2 34.1 35 34.1C34.2 33.9 33.4 34 32.7 34C31.9 34 31 33.9 30.2 34C29.9 34.1 29.7 34.3 29.4 34.3C29.1 34.4 28.8 34.3 28.4 34.4C28.3 34.5 28.1 34.6 27.9 34.7C27.4 34.9 26.8 34.9 26.3 35.2C25 35.8 23.7 36.5 22.4 37.3C21.6 37.8 21 38.5 20.2 39.1C19.9 39.3 19.6 39.4 19.3 39.7C19 39.9 18.8 40.3 18.4 40.4ZM42.7 49.1C41.8 49.3 39 49.1 37.8 49.1C34.4 49.1 30.9 49.1 27.5 49.1C26.6 49.1 22.6 49.3 22.1 49C21.6 48.8 20.9 46.6 20.6 46C20.4 45.4 19.2 43.2 19.3 42.7C19.4 42 20.9 40.8 21.4 40.5C21.8 40.2 22.2 39.9 22.5 39.5C23.8 38.6 25.7 37.4 27.2 36.9C27.7 36.7 29.1 36.2 29.6 36.1C29.9 36.1 30.2 36.1 30.5 36.1C31.7 35.9 32.2 35.7 33.5 35.8C33.9 35.8 34.2 36 34.6 36.1C34.9 36.1 35.2 36.1 35.6 36.1C35.8 36.2 36 36.4 36.2 36.4C38.5 37 40.6 38.1 42.5 39.5C43 40 45.6 41.8 45.7 42.3C45.8 43 44.4 45.5 44.1 46.3C43.7 47.2 43.4 48.3 42.7 49.1Z"/>'
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
      // Hotpoint preheat: a thermometer with two solid up triangles, no box.
      svg: '<g transform="translate(-1 0)"><path d="M20 36V19A4 4 0 0 1 28 19V36A7 7 0 1 1 20 36Z" stroke-width="3"/><line x1="24" y1="24" x2="24" y2="39" stroke-width="3"/><circle cx="24" cy="41.7" r="3.5" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none"><polygon points="34,33 41,25 48,33"/><polygon points="34,43 41,35 48,43"/></g></g>'
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
      // Hotpoint cook-time pot with steam wisps.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M13.3 34.9C12.4 35.4 8.2 33.6 7.4 34.1C7.2 34.6 6.9 36 7 36.5C7.4 37 10.9 37.6 11.8 37.8C12.4 38 12.9 37.9 13.3 38.3C13.5 38.8 13.4 39.5 13.4 40C13.4 42.1 13 45.1 14.2 46.9C14.4 47.2 14.5 47.5 14.8 47.8C15.4 48.2 16.3 48 16.9 48C18.6 48 20.3 48 22 48C28.5 48 35.1 48 41.7 48C43.5 48 45.4 48 47.3 48C47.9 48 48.9 48.2 49.4 47.8C51 46.2 50.6 42.1 50.6 40C50.6 39.5 50.5 38.9 50.6 38.3C51.3 37.5 56.1 37.4 56.9 36.5C57 36.2 56.7 34.5 56.5 34.1C55.8 33.6 51.6 35.3 50.7 35C50.3 34.4 50.6 33.3 50.6 32.6C50.6 31.1 50.5 30.1 49.7 28.8C49.5 28.5 49.2 28.3 49 28.1C47.4 26.5 45.8 27 43.8 26.8C43.4 26.7 43 26.8 42.6 26.6C42.6 26.3 42.7 26.1 42.7 25.8C42.9 24.3 42.4 22.9 41.3 21.8C40.7 21.1 39.7 20.6 40 19.5C40.3 18.4 41.9 17.9 41.1 16.6C40.9 16.2 40.5 16 40 16C38.5 16 37.3 17.8 37.1 19.2C36.9 20.9 37.6 22.3 38.9 23.5C39.2 23.8 39.6 24 39.8 24.5C40.2 25.3 39.5 26.6 38.6 26.7C38 26.7 37.3 26.7 36.7 26.7C36 26.7 35.2 26.8 34.5 26.6C34.5 26.3 34.6 26.1 34.6 25.8C34.7 24.3 34.4 22.9 33.3 21.9C32.6 21.2 31.7 20.7 31.9 19.7C32 18.5 34.1 17.9 32.9 16.5C32.7 16.1 32.3 16 31.9 16C30.2 16 29.1 18.1 29.1 19.6C29.1 20.7 29.2 21.8 29.9 22.6C30.5 23.3 31.4 23.7 31.8 24.5C32.1 25.4 31.4 26.6 30.4 26.7C29.9 26.7 29.2 26.7 28.6 26.7C28 26.7 27.1 26.8 26.5 26.5C26.4 26.3 26.5 26.1 26.5 25.9C26.7 25 26.6 23.9 26.2 23.2C25.6 22.1 23.9 20.9 23.7 20.1C23.6 18.8 25.7 18.2 25 16.8C24.8 16.3 24.4 16 23.9 16C22.4 16 21.1 17.7 20.9 19.2C20.8 20.4 21.1 21.7 21.9 22.7C22.5 23.5 24.4 24.4 23.6 25.7C23 26.8 22 26.5 20.9 26.5C19.2 26.5 16.9 26.1 15.4 27.4C14.4 28.2 13.6 29.3 13.4 30.7C13.3 31.7 13.7 34.2 13.3 34.9ZM47.3 30.5C47 30.9 46 30.8 45.5 30.8C43.8 30.8 42.1 30.8 40.4 30.8C34.6 30.8 28.7 30.8 22.9 30.8C21.4 30.8 19.9 30.8 18.4 30.8C17.9 30.8 17 30.9 16.6 30.6C16.5 30 17.1 29.5 17.7 29.5C19.5 29.3 21.3 29.5 23.1 29.5C24.9 29.5 26.7 29.5 28.5 29.5C29.4 29.5 30.3 29.4 31.2 29.5C32.7 29.6 34.3 29.5 35.8 29.6C37.7 29.7 39.5 29.7 41.3 29.7C42.2 29.7 45.9 29.6 46.5 29.8C46.8 29.9 47.1 30.2 47.3 30.5ZM47.6 33.8C48 34.4 47.8 35.9 47.8 36.6C47.8 38.8 47.8 41 47.8 43.2C47.8 44.4 47.9 45.4 46.9 46.1C46 46.8 44.8 46.5 43.8 46.5C41.3 46.5 38.8 46.4 36.3 46.4C31.5 46.3 26.7 46.2 21.9 46.2C20.4 46.2 17.7 46.7 16.6 45.4C16.4 45.2 16.2 44.9 16.2 44.5C16.1 44 16.2 43.3 16.2 42.8C16.2 41.4 16.2 40 16.2 38.7C16.2 37.7 16 34.5 16.3 33.8C16.9 33.5 17.9 33.7 18.6 33.7C20.3 33.7 22 33.7 23.8 33.7C29.4 33.7 35.1 33.7 40.8 33.7C41.9 33.7 47 33.5 47.6 33.8Z"/>'
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
      looksLike: ["u with a line underneath", "u and a dash", "small u", "letter u on the hob", "u with underscore"],
      meaning:
        "The induction hob can't find a suitable pan on that zone. There may be no pan, or it's too small, off-centre, or not magnetic. Induction only heats pans a magnet will stick to.",
      action:
        "Put a suitable pan in the middle of the zone within a few seconds; the symbol stops flashing and heating starts. Still flashing? Test the pan base with a fridge magnet: if the magnet doesn't stick, the pan won't work on induction. The zone usually switches itself off if no pan turns up within a minute or two.",
      tip: "Aluminium, copper, glass and some stainless steel pans don't work on induction unless the base has the coil symbol.",
      // Belling induction display: a seven-segment u with a separate bar beneath it.
      svg: '<g stroke-width="5"><path d="M22 24V38M42 24V38M25 42H39M25 52H39"/></g>'
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
      // Traced from ISO 7000-2659.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M14.1 6C10.2 6.4 7.1 8.7 6.2 12.6C5.8 14.4 6 16.2 6 18C6 21 6 24 6 27C6 32.1 6 37.2 6 42.3C6 44 6 45.7 6 47.4C6 48.2 5.9 49 6 49.8C6.4 53.7 8.7 56.9 12.6 57.8C14.4 58.2 16.3 58 18.1 58C21 58 23.9 58 26.9 58C32.1 58 37.3 58 42.5 58C44.1 58 45.8 58 47.4 58C48.2 58 49 58 49.8 58C53.8 57.7 57.2 55 57.9 50.9C58.1 49.3 58 47.6 58 46C58 43.1 58 40.3 58 37.4C58 32.2 58 27.1 58 21.9C58 19.3 58.1 16.8 58 14.2C57.8 10.3 55 6.9 51.1 6.1C49.3 5.8 47.5 6 45.7 6C42.5 6 39.3 6 36.1 6C31.2 6 26.3 6 21.4 6C19.8 6 18.2 6 16.5 6C15.7 6 14.9 5.9 14.1 6ZM14.2 7.6C16 7.4 18 7.5 19.8 7.5C23.8 7.5 27.8 7.5 31.8 7.5C35.9 7.5 40 7.5 44.1 7.5C46.1 7.5 48.2 7.4 50.3 7.6C53.7 8 56.1 10.8 56.4 14.1C56.6 16.1 56.4 18.2 56.4 20.2C56.4 24.4 56.4 28.6 56.4 32.7C56.4 36.6 56.4 40.5 56.4 44.4C56.4 46.4 56.6 48.5 56.4 50.5C55.9 53.9 53 56.1 49.8 56.4C48 56.6 46 56.4 44.2 56.4C40.2 56.4 36.2 56.4 32.2 56.4C28.1 56.4 24 56.4 19.9 56.4C17.9 56.4 15.7 56.6 13.7 56.4C10.3 56 7.9 53.2 7.6 49.9C7.4 47.9 7.5 45.8 7.5 43.8C7.5 39.5 7.5 35.4 7.5 31.1C7.5 27.3 7.5 23.5 7.5 19.6C7.5 17.6 7.4 15.5 7.6 13.5C8 10.1 10.9 7.9 14.2 7.6ZM19.4 43.6C18.5 45.4 16.1 46.5 14.2 46.2C13.7 46.1 13.1 45.9 12.7 45.6C12 45.3 11 44.3 10.6 45.6C10.7 46.5 11.8 47 12.5 47.3C14.5 48.2 16.8 47.9 18.6 46.6C19.2 46.1 19.8 45.3 20.4 45C21 45.2 21.8 46.4 22.4 46.8C24.2 48.2 26.6 48.6 28.8 47.7C29.5 47.4 30.1 46.9 30.7 46.4C31.1 46.1 31.5 45.4 32 45.3C32.6 45.5 33.5 46.6 34.2 47.1C36 48.3 38.2 48.5 40.2 47.7C40.9 47.3 41.6 46.9 42.2 46.3C42.6 45.9 43 45.2 43.5 45C44.2 45.4 44.8 46.1 45.4 46.6C47.1 47.8 49.3 48.2 51.3 47.4C52 47.1 53.4 46.5 53.3 45.5C52.8 44.4 51.8 45.4 51.2 45.7C50.7 45.9 50.3 46.1 49.8 46.2C47.9 46.5 45.4 45.3 44.5 43.5C44.5 42.9 45.3 41.8 45.5 41.1C46.2 39.6 46.6 38 46.8 36.4C47.5 31.8 47.2 27.2 46.6 22.6C46.4 20.9 45.8 16.5 44 15.7C43 15.2 42.2 15.9 41.7 16.7C40.8 18.2 40.5 20.2 40.2 22C39.4 27 39.1 32.9 40.2 37.8C40.5 39.1 41 40.3 41.5 41.5C41.8 42.2 42.2 42.8 42.4 43.5C42.3 44.1 41.6 44.7 41.1 45.1C39.1 46.9 36.7 47.2 34.5 45.4C34 45 33.3 44.4 33 43.7C33.1 43 33.8 42.1 34 41.5C34.6 40.1 35 38.7 35.3 37.3C36.2 32.9 36 26.5 35.2 22C34.9 20.5 34.2 15.3 31.9 15.5C29.7 15.7 29.1 20.4 28.8 22.2C28 26.4 27.8 33.1 28.7 37.2C29 38.7 29.4 40.1 29.9 41.5C30.2 42.2 30.9 43 30.9 43.8C30.6 44.3 30.1 44.9 29.6 45.3C27.4 47.2 25 47 22.8 45.1C22.4 44.7 21.7 44.1 21.5 43.5C21.7 42.8 22.2 42.2 22.4 41.6C23 40.4 23.4 39.2 23.7 37.9C24.9 33.1 24.6 26.9 23.8 22C23.5 20.2 23.2 18.2 22.2 16.7C21.7 15.8 20.8 15.2 19.9 15.7C18.2 16.7 17.6 20.9 17.3 22.6C16.8 27.2 16.3 32 17.1 36.5C17.4 38.1 17.8 39.7 18.4 41.1C18.7 41.8 19.4 42.9 19.4 43.6ZM32 17.3C33 17.7 33.5 21.4 33.7 22.5C34.3 27.4 34.8 32.5 33.7 37.4C33.5 38.2 32.7 41.5 31.9 41.8C31.2 41.2 30.5 38.4 30.3 37.4C29.2 32.7 29.7 27.8 30.2 23C30.4 21.8 31 17.9 32 17.3ZM20.6 17.3C21.6 17.8 22.2 21.8 22.4 22.9C22.9 27.5 23.4 32.4 22.3 37C22.1 38 21.3 41.1 20.5 41.6C19.8 41.2 19.1 38 18.9 37.1C17.9 32.4 18.3 27.4 18.9 22.8C19.1 21.7 19.6 17.7 20.6 17.3ZM43.4 17.3C44.3 17.8 44.8 20.9 45 22C45.6 26.7 46.1 31.6 45.3 36.4C45 37.7 44.7 39.1 44.2 40.4C44 40.8 43.9 41.5 43.4 41.6C42.6 41 42 38.4 41.7 37.3C40.7 32.6 41.1 27.8 41.6 23.1C41.8 21.6 42.1 20.1 42.5 18.6C42.7 18.2 42.9 17.4 43.4 17.3Z"/>'
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
      looksLike: ["sun with dashed rays", "starburst", "asterisk of dashes", "dashed sun", "sparkle", "sun"],
      meaning:
        "The rinse aid dispenser is empty or nearly empty. Rinse aid helps water slide off the dishes so they dry faster, without spots or streaks. Why a swirly sun means that is anyone's guess.",
      action:
        "Fill the rinse aid dispenser (usually a cap next to the detergent compartment inside the door) with rinse aid, up to the mark. Never use washing-up liquid: it will foam everywhere. Wipe up any spills. The light goes off straight away or after the next wash.",
      tip: "Using all-in-one tablets with rinse aid built in? Many machines have a setting to switch this light off. Glasses coming out spotty or wet? More rinse aid usually fixes it.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 8C30 8.2 30.5 10.8 30.5 12.2C30.5 13.3 30.1 15.5 31.4 16.1C31.6 16.2 31.9 16.4 32.1 16.3C34 16.1 33.5 13.5 33.5 12.2C33.5 11 33.9 7.8 31.9 8ZM15.8 14.6C15.4 14.7 15.1 14.9 14.9 15.3C14 16.5 15.5 17.6 16.3 18.3C17 19.1 18.3 20.6 19.1 21.1C19.4 21.3 19.8 21.3 20.1 21.3C20.6 21.2 20.9 21 21.1 20.6C21.9 19.4 20.5 18.4 19.7 17.6C18.9 16.7 17.1 14.4 15.8 14.6ZM47.7 14.6C46.8 14.8 44.7 17.2 44 17.9C43.7 18.3 43 18.7 42.8 19.2C42.3 20.3 43.2 21.4 44.4 21.3C45.3 21.1 47.3 18.8 48 18.1C48.5 17.6 49 17.2 49.3 16.6C49.8 15.6 48.7 14.5 47.7 14.6ZM31.7 18.7C30.1 19 30.5 21.9 30.5 23.1C30.5 24.4 30.1 27.3 32.3 26.9C34 26.6 33.5 23.8 33.5 22.5C33.5 21.2 34 18.3 31.7 18.7ZM23.6 22.1C22.6 22.2 21.8 23.4 22.4 24.3C22.7 24.9 23.2 25.3 23.7 25.7C24.4 26.4 25.9 28.2 26.7 28.7C26.9 28.8 27.2 28.9 27.5 28.9C27.9 28.9 28.4 28.6 28.6 28.2C29.4 27 28.2 26.1 27.4 25.3C26.6 24.5 24.6 22 23.6 22.1ZM40.3 22.1C39.3 22.3 37.4 24.6 36.6 25.3C36.1 25.8 35.5 26.3 35.2 26.9C34.9 27.8 35.6 29 36.7 28.9C38.1 28.6 39.3 26.6 40.4 25.7C40.9 25.3 41.5 24.8 41.7 24.3C42.1 23.3 41.4 21.9 40.3 22.1ZM9.4 30.5C7.4 30.8 7.6 33.5 9.9 33.5C11.4 33.5 13.5 33.7 14.9 33.5C17 33.1 16.7 30.5 14.5 30.5C13.1 30.5 10.7 30.3 9.4 30.5ZM20.1 30.5C18.1 30.8 18.3 33.5 20.6 33.5C21.9 33.5 24.4 33.7 25.6 33.5C27.6 33.2 27.4 30.5 25.1 30.5C23.7 30.5 21.3 30.3 20.1 30.5ZM38.4 30.5C36.4 30.8 36.6 33.5 38.9 33.5C40.4 33.5 42.5 33.6 43.9 33.5C46 33.2 45.8 30.5 43.5 30.5C42.1 30.5 39.7 30.3 38.4 30.5ZM49.1 30.5C47.1 30.8 47.3 33.5 49.6 33.5C51 33.5 53.2 33.7 54.6 33.5C56.5 33.2 56.5 30.5 54.1 30.5C52.8 30.5 50.3 30.3 49.1 30.5ZM27.2 35.1C26.3 35.3 24.3 37.6 23.6 38.4C23.1 38.8 22.4 39.3 22.2 39.9C22 40.9 22.8 42 23.9 41.8C25 41.6 26.6 39.4 27.5 38.6C27.9 38.2 28.6 37.7 28.8 37.1C29.1 36.1 28.3 34.9 27.2 35.1ZM36.4 35.1C36 35.2 35.6 35.4 35.4 35.8C34.5 37 36 38 36.8 38.8C37.5 39.6 39.5 42 40.6 41.8C41.1 41.7 41.4 41.5 41.6 41.1C42.2 39.9 41.1 38.8 40.2 38.1C39.3 37.3 37.7 34.9 36.4 35.1ZM31.7 37.1C30 37.3 30.5 40.1 30.5 41.4C30.5 42.7 30 45.5 32.3 45.3C32.7 45.2 33.1 44.9 33.3 44.5C33.6 44 33.5 41.7 33.5 41C33.5 39.6 33.9 36.7 31.7 37.1ZM19.7 42.7C18.7 42.8 16.8 45.1 16.1 45.9C15.7 46.3 15.1 46.7 14.8 47.2C14.2 48.2 15.2 49.5 16.3 49.3C17.2 49.2 19.2 46.9 20 46.1C20.4 45.7 21 45.3 21.2 44.7C21.7 43.7 20.8 42.5 19.7 42.7ZM43.9 42.7C43.5 42.8 43.1 43 42.9 43.4C42.2 44.6 43.5 45.5 44.3 46.3C45.1 47.1 46.2 48.5 47.1 49.1C47.4 49.3 47.8 49.4 48.1 49.3C48.6 49.3 49 49 49.2 48.6C49.9 47.4 48.6 46.5 47.8 45.7C47.1 44.9 45.7 43.3 44.9 42.8C44.6 42.7 44.2 42.6 43.9 42.7ZM31.9 47.6C30 47.9 30.5 50.5 30.5 51.9C30.5 53.1 30.1 56.2 32.1 56C34 55.7 33.5 53.1 33.5 51.7C33.5 50.6 33.9 47.4 31.9 47.6Z"/>'
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
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M50.4 13.4C49.8 13.8 48.6 13.5 47.9 13.5C45.9 13.5 43.8 13.5 41.8 13.5C35.9 13.5 29.9 13.5 24 13.5C22.7 13.5 20.8 13.4 19.6 13.6C15.8 14.1 12.2 15.5 10.1 19C9.3 20.3 8.6 21.8 8.4 23.3C8.3 24 8.4 24.8 8.4 25.5C8.4 26.3 8.3 27.1 8.4 27.9C9.2 31.9 12.1 35.2 15.9 36.6C18.3 37.4 20.8 37.3 23.4 37.3C25.4 37.3 27.4 37.3 29.5 37.3C32.3 37.3 35.1 37.3 38 37.3C38.9 37.3 40.4 37.6 40.9 36.7C41.5 35.8 41 34.6 39.9 34.5C39 34.4 38 34.5 37 34.5C34.9 34.5 32.7 34.5 30.6 34.5C28.4 34.5 26.1 34.5 23.9 34.5C22.6 34.5 21.1 34.6 19.8 34.5C15.9 34.1 12.5 31.8 11.4 28C11.2 27 11.1 25.9 11.1 24.9C11.3 21.2 14.2 17.4 18 16.7C21.1 16.2 24.3 16.4 27.5 16.4C31.8 16.4 36.2 16.4 40.5 16.4C42.8 16.4 45 16.4 47.3 16.4C48.2 16.4 49.4 16.2 50.4 16.5C50.4 16.9 49.7 17.4 49.4 17.7C48.6 18.5 46.9 19.9 46.4 20.8C46.1 21.1 46.1 21.6 46.2 22C46.5 22.9 47.6 23.2 48.4 22.7C49 22.3 49.5 21.6 50.1 21.1C51.4 19.8 52.7 18.4 54 17.1C54.6 16.6 55.7 15.8 55.6 14.8C55.4 13.9 54.5 13.2 53.8 12.6C52.6 11.4 51.4 10.1 50.1 8.9C49.6 8.4 49.1 7.7 48.5 7.3C47.4 6.6 46 7.4 46.2 8.7C46.4 9.9 49.8 12.1 50.4 13.4ZM13.4 47.4C14.1 46.1 17.4 43.9 17.6 42.7C17.8 41.6 16.6 40.6 15.5 41.2C14.9 41.5 14.3 42.3 13.8 42.8C12.6 44 11.4 45.2 10.1 46.5C9.7 46.9 8.5 47.9 8.4 48.4C8.2 49.8 8.9 50.3 9.8 51.2C11.1 52.5 12.3 53.7 13.5 54.9C14.1 55.5 14.6 56.1 15.3 56.6C16.1 57.2 17.4 56.9 17.6 55.8C17.7 55.5 17.6 55.1 17.5 54.9C17 54 15.1 52.2 14.3 51.5C13.9 51.2 13.5 50.9 13.4 50.5C14.1 50.2 15.2 50.4 15.9 50.4C17.7 50.4 19.5 50.4 21.3 50.4C26.7 50.4 32.1 50.4 37.5 50.4C40.2 50.4 43.9 50.8 46.5 50C50.9 48.8 54.7 45.5 55.4 40.7C55.6 39.1 55.6 37.6 55.4 36.1C55.2 35 54.8 33.9 54.3 32.9C52.4 29.3 48.7 27.2 44.8 26.7C43.7 26.5 42.6 26.7 41.5 26.7C39.1 26.7 36.6 26.7 34.2 26.7C31.2 26.7 28.3 26.7 25.3 26.7C24.2 26.7 22.7 26.5 22.6 28C22.5 28.7 23.2 29.4 23.9 29.5C24.6 29.6 25.4 29.5 26.2 29.5C27.9 29.5 29.6 29.5 31.3 29.5C33.9 29.5 36.5 29.5 39.1 29.5C40.7 29.5 42.4 29.3 44 29.5C47.4 29.8 50.6 31.6 52 34.8C52.4 35.8 52.5 36.8 52.7 37.8C52.9 39.2 52.5 40.8 52 42C50.8 44.9 48 46.9 45 47.4C43.5 47.6 41.9 47.5 40.4 47.5C34.6 47.5 28.8 47.6 23 47.6C20.7 47.6 18.3 47.6 15.9 47.6C15.3 47.6 13.8 47.8 13.4 47.4Z"/>'
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
      // Bosch and Hotpoint: a tap with no drop.
      svg: '<g transform="translate(0,6)"><path d="M15 25H38Q47 25 47 34V35" stroke-width="5.5"/><line x1="31" y1="25" x2="31" y2="17"/><line x1="25" y1="15.5" x2="37" y2="15.5"/></g>'
    },
    {
      id: "dishwasher-eco",
      name: "Eco programme",
      category: "dishwasher",
      aka: ["eco", "eco 50", "eco 45", "energy saving", "economy", "green programme"],
      looksLike: ["eco", "word eco", "letters eco", "leaf"],
      meaning:
        "The energy- and water-saving programme for normally dirty dishes. It washes at a lower temperature for longer, getting the same clean result with less energy.",
      action:
        "Use it as your everyday programme. It often takes 3–4 hours. That feels wrong, but it's normal, not a fault: the long soak is how it saves energy.",
      tip: "Eco is the programme the energy label is measured on. Long cycle, smaller bills.",
      // Most makers print the word (Bosch, Samsung, AEG).
      svg: '<text x="32" y="39.5" font-size="20">Eco</text>'
    },
    {
      id: "dishwasher-intensive",
      name: "Intensive (pots & pans)",
      category: "dishwasher",
      aka: ["intensive", "intensive 70", "heavy", "pots and pans", "power wash", "heavy duty"],
      looksLike: ["pot with a lid", "saucepan with lid", "pot and plates", "casserole dish", "pan"],
      meaning:
        "The hottest, strongest programme (often around 65–70°C), for heavily dirty pots, pans, casserole dishes and baked-on food.",
      action:
        "Use it for greasy, dried-on or burnt food. Scrape off leftovers first and keep delicate glasses and decorated china out. It uses more energy, so save it for the roasting tin, not the teaspoons.",
      tip: "Not everything survives a hot wash: cast iron, wooden handles, and some non-stick and aluminium pans are better washed by hand.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M13.3 26.8C12.5 27.3 8.9 26.6 7.6 27C6.9 27.1 6.7 28.3 7.3 28.7C8.2 29.2 12.4 28.4 13.4 29C13.8 29.7 13.5 30.9 13.5 31.7C13.5 33.9 13.5 36.1 13.5 38.2C13.5 40.5 13.1 42.9 15.1 44.6C16.1 45.5 17.4 45.5 18.7 45.5C19.3 45.5 20.2 45.4 20.1 44.5C19.9 43.4 18.6 43.8 17.8 43.7C16.9 43.6 15.9 43 15.6 42.1C15 40.9 15.3 38.7 15.3 37.3C15.3 33.8 15.3 30.4 15.3 26.9C15.3 26.1 15.1 22.7 15.6 22.2C16.4 21.9 21.1 22.1 22.3 22.1C27.4 22.1 32.5 22.1 37.7 22.1C39.4 22.1 41.1 22.1 42.8 22.1C43.5 22.1 44.5 22 45.1 22.3C45.5 22.9 45.3 24.7 45.3 25.5C45.3 28.1 45.3 30.8 45.3 33.5C45.3 34.3 45.1 35.8 46.2 35.9C46.5 36 46.8 35.8 47 35.6C47.7 34.7 46.7 30 47.4 29C48.3 28.5 51.7 29 53.1 28.8C54 28.6 54.1 27.5 53.3 27.1C52.5 26.6 48.4 27.3 47.4 26.8C46.6 25.7 47.7 21.4 46.9 20.6C46.3 20 44.6 20.2 43.8 20.2C42 20.2 40.1 20.2 38.2 20.2C37.4 20.2 36.5 20.3 35.7 20.2C35 20.1 34.8 19 34.4 18.4C33.8 17.5 32.5 16.5 31.3 16.4C29.6 16.2 27.9 16.5 26.7 17.9C26.4 18.2 26.1 18.6 25.9 19.1C25.8 19.4 25.7 19.8 25.5 20C25.3 20.2 25.1 20.2 24.9 20.2C24.1 20.3 23.2 20.2 22.3 20.2C20.4 20.2 18.6 20.2 16.8 20.2C15.9 20.2 14.4 19.9 13.8 20.6C13 21.5 14 25.6 13.3 26.8ZM33 19.9C32.7 20.3 32.2 20.2 31.8 20.2C30.9 20.2 28.7 20.4 28 20.2C27.9 20.2 27.9 20.1 27.8 20C27.8 19.6 28 19.4 28.3 19.1C28.7 18.6 29.4 18.2 30.1 18.2C31.1 18.1 32.8 18.8 33 19.9ZM29.4 43.5C29.3 43.6 29.2 43.7 29.1 43.7C27.9 43.9 25.9 43.7 24.5 43.7C23.9 43.7 23.1 43.6 22.9 44.3C22.6 44.9 23.1 45.5 23.6 45.5C24.7 45.7 26 45.3 27 45.6C27.9 45.9 28 47.3 28.9 47.5C29.2 47.6 29.6 47.6 30 47.6C30.3 47.6 30.6 47.6 30.9 47.4L29.9 45.8C30.3 45.4 33.6 45.5 34.4 45.5C38.2 45.5 42 45.5 45.8 45.5C46.6 45.5 49.3 45.3 49.8 45.8L48.9 47.5C49.2 47.6 49.5 47.6 49.9 47.6C50.2 47.6 50.6 47.6 50.9 47.5C51.7 47.3 51.9 45.8 52.8 45.6C53.8 45.3 55.4 45.9 56.4 45.5C56.9 45.2 57 44.5 56.7 44C56 43.2 50.9 44.2 50.3 43.5C50.4 43 52.3 40.5 52.8 40.4C53.9 40.2 55.1 40.6 56.2 40.4C56.8 40.2 57.1 39.5 56.7 39C56.2 38.4 55.4 38.5 54.8 38.5C53.2 38.5 51.7 38.5 50.1 38.5C43.5 38.5 36.9 38.5 30.3 38.5C28.5 38.5 26.6 38.5 24.8 38.5C24.1 38.5 23.2 38.4 22.9 39.2C22.6 39.8 23.1 40.3 23.8 40.4C26.5 40.6 26.5 39.5 28.5 42.1C28.8 42.6 29.3 43 29.4 43.5ZM49.7 40.5C49.8 41.3 47.7 43.6 47 43.7C45.4 43.9 42.7 43.7 41 43.7C39.2 43.7 37.5 43.7 35.7 43.7C34.8 43.7 33.8 43.8 32.8 43.7C32.6 43.7 32.3 43.6 32.1 43.4C31.6 43 30 41.2 30 40.6C30.5 40.2 33.7 40.4 34.5 40.4C38.2 40.4 41.9 40.4 45.5 40.4C46.3 40.4 49.2 40.2 49.7 40.5Z"/>'
    },
    {
      id: "dishwasher-auto",
      name: "Auto programme",
      quiz: "Self-adjusting sensor programme",
      category: "dishwasher",
      aka: ["auto", "automatic", "sensor wash", "auto 45-65", "smart wash"],
      looksLike: ["auto", "word auto", "letters auto", "a in a circle"],
      meaning:
        "The machine senses how dirty the water is and adjusts the temperature, water and time to suit the load. It's the 'you decide' button.",
      action:
        "Use it for mixed loads when you're not sure which programme to pick. It's a little less efficient than Eco, but it takes the guesswork out.",
      tip: "Auto symbols vary a lot. Often it's just the word 'Auto', or a glass and plate with an 'A'.",
      // Bosch, Samsung and AEG print the word.
      svg: '<text x="32" y="39.5" font-size="19">Auto</text>'
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
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.9 10.2C31.4 9.8 36.3 9.8 36.9 10.2C37.1 10.7 36.8 11.4 37.1 11.9C37.6 12.8 38.8 12.9 39.4 12.1C39.7 11.6 39.7 9 39.5 8.4C39.4 8.1 39.1 7.8 38.8 7.6C37.6 7.1 32.1 7.2 30.7 7.4C29.9 7.5 28.9 7.4 28.4 8.2C28 8.8 28 11.2 28.3 11.9C28.6 12.6 29.6 13 30.2 12.5C31 11.8 30.5 10.9 30.9 10.2ZM49.7 15.4C50.5 15.7 53.8 18.9 53.8 19.6C53.6 20.1 52.9 20.5 52.8 21.1C52.5 22.1 53.4 22.8 54.4 22.6C54.9 22.6 56.8 20.7 57 20.2C57.1 19.9 57.1 19.5 57 19.1C56.6 17.9 52.9 14.4 51.7 13.5C51 12.9 50.2 12.1 49.2 12.2C48.3 12.4 45 15.6 47.2 16.4C48.6 16.9 48.8 15.6 49.7 15.4ZM33.1 14.2C32.2 14.3 31.2 14.3 30.3 14.5C29.9 14.5 29.4 14.7 28.9 14.8C24.8 15.8 21.4 18 18.4 20.9C17.1 22.2 15.7 24.2 15 25.9C14.6 26.8 15.3 27.8 16.3 27.9C17.4 28 17.9 26.5 18.3 25.8C19.5 23.8 21.2 21.9 23.1 20.6C27.1 17.7 31.8 16.7 36.6 17.3C37 17.3 37.3 17.3 37.6 17.4C38.8 17.6 40 18.1 41.1 18.5C43.2 19.3 45.3 20.7 46.8 22.3C50.3 25.9 52.3 30.4 52.3 35.4C52.3 36 52.4 36.5 52.3 37.1C51.5 44.4 46.1 51.2 38.9 53C37.5 53.4 36.3 53.5 34.9 53.6C33.2 53.8 31.4 53.6 29.8 53.2C26.3 52.3 22.9 50.5 20.4 47.8C19.9 47.2 19.5 46.6 19.1 46.1C18.7 45.5 18.3 44.7 17.8 44.2C17.4 44 17 43.9 16.6 44C16.3 44 16.1 44.2 15.9 44.4C15 45.3 15.7 46.4 16.4 47.3C18.2 49.8 20.4 52 23.1 53.6C25.5 55 28.1 56 30.8 56.4C36.1 57.1 41.9 56 46.2 52.7C50.5 49.5 54 44.8 54.8 39.5C54.9 38.7 55.1 38 55.2 37.2C55.3 36.3 55.3 34.6 55.2 33.6C55 32.1 54.7 30.5 54.2 29C52.4 23.4 48.2 18.4 42.7 16.1C41.5 15.5 40.2 15.2 39 14.8C37.4 14.3 34.7 14 33.1 14.2ZM35.3 34.4C35 33.6 35.2 32.5 35.2 31.6C35.2 29.6 35.2 27.6 35.2 25.6C35.2 24.6 35.5 23.1 34.5 22.4C33.7 21.8 32.5 22.4 32.3 23.4C32.2 24.4 32.3 25.5 32.3 26.5C32.3 28.8 32.3 31 32.3 33.3C32.3 34.2 32.1 36.1 32.6 36.8C33.3 37.6 34.6 37.4 35.5 37.4C37.3 37.4 39.2 37.4 41 37.4C41.8 37.4 42.7 37.5 43.5 37.3C44.6 37.1 44.8 35.7 44.2 35C43.6 34.3 42.5 34.5 41.8 34.5C40.3 34.5 38.7 34.5 37.2 34.5C36.6 34.5 35.8 34.6 35.3 34.4ZM11.1 35.9C11 36.4 10.6 36.6 10.3 36.9C9.7 37.6 7.6 39.4 7.2 40.1C7.1 40.5 7.1 41 7.1 41.3C7.3 42.3 8.5 42.2 9.1 41.8C9.6 41.5 9.9 41 10.3 40.7C11.3 39.7 12.3 38.8 13.2 37.8C13.7 37.4 14.5 36.8 14.5 36.1C14.6 35.2 13.9 34.7 13.3 34.1C12.4 33.2 11.5 32.3 10.6 31.4C10.1 30.9 9.6 30.4 9.1 30C8.4 29.5 7.4 29.7 7.2 30.6C7.1 31 7.1 31.5 7.3 31.9C7.8 32.7 9.6 34.1 10.3 34.9C10.7 35.2 11.1 35.5 11.1 35.9ZM18.5 36C18 37.4 14.1 39.6 14.3 41.1C14.5 42.2 15.8 42.3 16.6 41.8C17.7 41.1 19.5 38.9 20.6 37.9C21 37.4 21.8 36.9 21.9 36.2C22 35.3 21.4 34.8 20.8 34.3C19.9 33.4 17.1 30.3 16.3 29.9C15.5 29.5 14.6 30 14.4 30.8C14 32.2 18.3 34.7 18.5 36Z"/>'
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
      // Samsung: a small bar inset at the top of a square.
      svg: '<rect x="15" y="13" width="34" height="38" rx="4"/><rect x="21" y="19" width="22" height="8" rx="1" fill="currentColor" stroke="none"/>'
    },
    {
      id: "dishwasher-pre-rinse",
      name: "Pre-rinse",
      category: "dishwasher",
      aka: ["pre rinse", "prewash", "rinse and hold", "rinse only", "soak"],
      looksLike: ["dashes spraying onto a plate", "spray on a tilted plate", "dotted lines and a plate", "shower on a plate", "rain on a plate"],
      meaning:
        "A short cold rinse with no detergent, to stop food drying onto the dishes when the full wash is still a while off.",
      action:
        "Use it when the machine is half full and you won't run it until tomorrow. It stops smells and dried-on egg. Run a normal programme later.",
      tip: "No need to rinse plates under the tap before loading. Scraping off leftovers is enough, and modern detergents work better with a bit of food to grab onto.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.2 9C17.8 9.1 17.5 9.2 17.3 9.5C16.7 10.2 16.1 13.6 15.8 14.6C15.5 15.4 14.6 18.4 14.7 19C14.7 19.7 15.3 20.2 16 20.2C16.4 20.2 16.8 19.9 17.1 19.5C17.5 18.8 18.2 15.6 18.4 14.6C18.6 13.9 18.8 13.3 19 12.6C19.2 11.7 20.2 8.8 18.2 9ZM35 9C34.5 9.1 34 9.5 33.9 10.1C33.8 10.8 34.8 13.9 35 14.8C35.3 15.9 35.9 18.8 36.4 19.6C36.6 20 37.1 20.3 37.6 20.2C38.2 20.1 38.7 19.6 38.7 19C38.8 18.1 37.9 15.4 37.6 14.4C37.4 13.5 36.6 10.1 36.2 9.5C35.9 9.2 35.5 9 35 9ZM23.6 10.1C23.1 10.2 22.7 10.4 22.6 10.8C22.2 11.7 22.2 14.9 22.1 16C21.9 16.9 21.5 20 21.8 20.7C22 21.2 22.6 21.6 23.1 21.5C23.5 21.4 23.9 21.2 24.1 20.8C24.5 20 24.5 16.8 24.6 15.6C24.8 14.8 25.1 11.6 24.9 11C24.8 10.4 24.2 10 23.6 10.1ZM29.5 10.1C29.1 10.2 28.7 10.4 28.5 10.9C28.1 11.8 28.8 14.8 28.8 16C28.8 16.7 29.1 20.2 29.3 20.7C29.5 21.2 30.1 21.6 30.6 21.5C31.1 21.4 31.5 21.2 31.6 20.7C31.9 20.1 31.5 16.5 31.4 15.6C31.2 14.5 31.2 11.6 30.8 10.8C30.6 10.3 30.1 10 29.5 10.1ZM14.3 23.2C13.9 23.3 13.5 23.5 13.3 23.9C12.8 24.7 12.3 27.8 11.9 28.9C11.7 29.6 11.6 30.2 11.4 30.8C11.2 31.8 10.4 33.2 11.3 34.1C11.6 34.3 11.9 34.4 12.3 34.4C12.7 34.3 13.1 34.1 13.3 33.7C13.8 32.7 14.3 29.9 14.7 28.7C14.9 27.9 15.8 25.1 15.8 24.5C15.7 23.8 15.1 23.1 14.3 23.2ZM38.8 23.2C38.1 23.3 37.8 23.8 37.7 24.4C37.6 25.2 38.5 27.7 38.8 28.6C39 29.5 39.7 33 40.2 33.4C40.5 33.7 40.9 33.9 41.3 33.8C41.9 33.7 42.3 33.3 42.4 32.7C42.5 31.9 41.6 29.4 41.4 28.4C41.1 27.6 40.4 24.2 40 23.7C39.7 23.4 39.2 23.2 38.8 23.2ZM22.3 24.7C21.9 24.8 21.5 25.1 21.3 25.5C21 26.2 20.9 29.6 20.8 30.6C20.7 31.4 20.7 32.3 20.6 33.1C20.4 34.2 20 36.4 21.8 36.1C22.2 36.1 22.6 35.9 22.8 35.5C23.1 34.8 23.2 31.3 23.4 30.3C23.5 29.3 23.5 28.4 23.6 27.4C23.7 26.9 23.8 26.4 23.7 25.9C23.7 25.2 23 24.6 22.3 24.7ZM30.8 24.7C30.4 24.8 30 25.1 29.8 25.5C29.5 26.3 30 29.5 30.1 30.6C30.2 31.6 30.3 34.9 30.7 35.6C30.9 36 31.4 36.2 31.9 36.1C32.4 36.1 32.7 35.8 32.9 35.4C33.2 34.7 32.7 31.2 32.6 30.3C32.5 29.4 32.5 28.5 32.4 27.6C32.2 26.6 32.5 24.5 30.8 24.7ZM26.1 54.8C26.5 55.1 27.3 54.9 27.8 54.9C28.5 54.9 29.2 55 29.9 54.9C30.6 54.7 32.5 52.9 33.2 52.4C37.4 49.6 41.2 46.3 45.3 43.4C46 42.8 49.3 40.1 49.9 40.1C50.3 40.6 50 42.6 50 43.2C49.9 43.9 50.1 44.6 49.8 45.2C49.2 46.3 47.9 46.9 47 47.6C45 49.2 43 50.6 41.1 52.1C40.4 52.7 38 54.1 37.8 54.8C38.1 55 41.1 55 41.5 54.9C42.1 54.7 43.8 53.2 44.4 52.8C46.1 51.6 47.7 50.3 49.3 49.1C50 48.6 50.7 48.2 51.3 47.6C51.8 47 52.1 46.4 52.4 45.6C52.6 44.8 52.5 43.9 52.5 43C52.5 42 52.7 41 52.7 40C52.7 39.4 52.5 38.4 52.8 37.9C52.9 37.5 53.3 37.3 53.5 37.1C54.2 36.7 56.3 35.2 56.6 34.7C56.9 34.3 57 33.9 56.8 33.5C56.5 32.7 55.5 32.5 54.8 33C52.9 34.4 51 35.9 49.1 37.3C47.7 38.2 46.4 39.2 45.1 40.3C43.1 41.9 41 43.2 39 44.8C37.1 46.4 35 47.9 32.9 49.4C31.3 50.6 29.7 51.8 28.2 53C27.5 53.5 26.4 54 26.1 54.8ZM10.6 37.4C10.2 37.5 9.9 37.6 9.7 37.9C9.2 38.6 8.4 42 8.1 43.1C7.9 44 7 46.6 7.1 47.5C7.2 48.1 7.8 48.6 8.4 48.6C8.8 48.6 9.1 48.4 9.3 48.1C9.8 47.5 10.6 43.9 10.9 43C11.1 42 12 39.4 11.9 38.5C11.8 37.9 11.2 37.3 10.6 37.4ZM32.2 39.4C30.5 39.5 31 41.8 31.1 42.9C31.3 44 31 46.4 32.7 46.4C34.4 46.3 33.9 43.9 33.7 42.9C33.6 41.9 33.9 39.2 32.2 39.4ZM21 39.4C20.5 39.5 20.1 39.8 20 40.2C19.8 40.6 19.5 44.6 19.5 45.3C19.5 46 19.4 47 19.3 47.7C19.2 48.6 18.8 50 19.7 50.6C20 50.8 20.3 50.9 20.6 50.8C21.1 50.7 21.4 50.4 21.6 50C21.8 49.6 22.1 45.5 22.1 44.9C22.1 44.1 22.2 43.2 22.3 42.4C22.4 41.3 22.8 39.1 21 39.4Z"/>'
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
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.1 18.1C38.9 18.3 34.6 15.5 33.5 15.7C32.5 15.8 32.5 16.9 33 17.5C33.8 18.7 34.7 19.9 35.6 21.1C36 21.5 36.5 22 36.6 22.6C36.4 23.2 32.7 24.9 31.9 25.4C31.3 25.8 30.2 26.2 30.4 27.1C30.6 28 31.6 27.9 32.3 27.9C33.3 27.9 37.3 27.9 37.9 28.3C38.2 29.1 37.1 32.9 37 34.1C37 34.8 36.8 35.9 37.8 36C38.6 36.2 39.1 35.2 39.5 34.7C40.1 34.1 42.4 31 43 30.9C43.7 31.2 44.2 32.2 44.6 32.8C45.6 34.2 46.7 35.6 47.7 37.1C48.2 37.8 49.1 39.2 50.1 38.3C50.8 37.7 50.2 36.4 50 35.6C49.5 34 49.2 32.2 48.7 30.5C48.6 29.9 48.1 28.8 48.4 28.2C48.9 27.9 53 27.9 54 27.8C54.6 27.8 55.5 27.9 55.8 27.2C56.3 26.3 55.2 25.8 54.6 25.5C53.7 25 50.2 23.4 49.8 22.8C49.8 22.1 50.9 21.4 51.3 20.9C52.6 19.6 54.3 18 55.4 16.6C56 15.9 57.3 15.1 57 14.2C56.5 12.8 54.9 13.9 54.1 14.2C52.1 15.2 50.2 16.3 48.2 17.1C47.5 17.4 46.7 18.1 46 18.1C45.6 17.6 45.5 16.6 45.4 16C45.3 15.2 45 14.6 44.8 13.9C44.6 12.9 44.4 11.9 44.2 10.8C44 10.1 43.7 8.7 42.7 8.8C41.7 9 41.7 10.4 41.5 11.2C41.3 12.9 40.9 14.5 40.6 16.1C40.5 16.7 40.6 17.7 40.1 18.1ZM43 15C43.2 15.3 43.2 15.6 43.2 16C43.4 16.8 44 20.1 44.5 20.6C45.2 21.1 46 20.6 46.6 20.2C47.5 19.8 50.8 17.8 51.4 17.7C51.4 18.2 50.6 18.6 50.3 18.9C49.6 19.7 46.6 22.4 46.8 23.3C47.1 24.5 50.2 25 50.6 25.8C49.9 26.5 46.7 25.5 46 26.5C45.4 27.5 46.8 30.4 47 31.5C47.1 32 47.5 32.5 47.3 32.9C46.8 32.6 45 29.8 44.5 29.1C44.1 28.5 43.6 27.7 42.8 28C41.8 28.3 40.5 30.9 39.8 31C39.6 29.7 41.1 27.2 39.8 26.2C39.1 25.6 36.2 26.4 35.7 25.8C36.1 25 38.9 24.5 39.3 23.5C39.9 22.3 37.4 20.5 37.1 19.4C37.9 19.1 40.6 21.5 41.6 20.6C42.3 20.1 42.5 17.4 42.6 16.5C42.7 16 42.5 15.2 43 15ZM7.1 55.1L9.5 55.1C9.9 54.6 9.7 53.5 9.7 52.8C9.7 50.8 9.7 48.9 9.7 46.9C9.7 40.6 9.7 34.3 9.7 28.1C9.7 26.3 9.4 21.5 10.1 20.2C11.5 17.7 13.7 17.7 16.2 17.7C19.5 17.7 22.8 17.7 26.1 17.7C26.9 17.7 29.3 17.9 29.9 17.6C30.2 17.4 30.4 17 30.5 16.7C30.5 16.4 30.5 16 30.3 15.8C30.1 15.5 29.8 15.3 29.4 15.2C28.3 15 26 15.2 24.8 15.2C22 15.2 19.2 15.2 16.5 15.2C15.2 15.2 13.8 15 12.5 15.3C10.9 15.6 9.5 16.5 8.5 17.7C6.5 20.1 7 23.6 7 26.5C7 33.1 7 39.8 7 46.4C7 48.5 7 50.6 7 52.6C7 53.4 6.8 54.5 7.1 55.1ZM15.8 33.1C15.2 31.9 16.2 27.5 15.3 26.5C14.6 25.7 13.2 26.1 13 27.1C12.8 27.7 12.9 28.4 12.9 29.1C12.9 30.6 12.9 32 12.9 33.5C12.9 34.2 12.8 35.2 13.5 35.6C14.2 36.1 17.7 35.8 18.6 35.8C22 35.8 25.3 35.8 28.6 35.8C29.9 35.8 31.6 36 32.9 35.8C33.9 35.7 34.4 34.4 33.7 33.6C33.1 33 30.2 33.2 29.3 33.2C26 33.2 22.8 33.3 19.6 33.3C18.8 33.3 16.3 33.4 15.8 33.1ZM46.1 55.1C46.6 55.4 48 55.4 48.5 55.1C48.9 54.5 48.7 52.7 48.7 51.9C48.7 50 48.7 48.1 48.7 46.2C48.7 45.4 48.8 44.5 48.7 43.6C48.5 42.5 49.1 40.8 47.5 40.5C45.8 40.2 46 42.4 46 43.4C46 46.1 46 48.8 46 51.5C46 52.3 45.8 54.4 46.1 55.1ZM39.8 52.4C39 52.7 35.4 52.5 34.3 52.5C30.1 52.5 25.8 52.5 21.6 52.5C20.6 52.5 16.3 52.8 15.7 52.3C15.4 51.4 15.6 49.2 15.6 48.1C15.6 47.5 15.8 46.6 15.5 46C14.9 45.1 13.7 45.1 13.1 46C12.7 46.7 12.9 47.7 12.9 48.4C12.9 50.2 12.9 52 12.9 53.8C12.9 54.4 13.4 54.9 13.9 55.1C14.6 55.3 19.4 55.1 20.5 55.1C25.4 55.1 30.4 55.1 35.3 55.1C36.9 55.1 38.6 55.1 40.2 55.1C40.8 55.1 41.7 55.2 42.2 54.8C42.8 54.3 42.6 53.3 42.6 52.6C42.6 51.2 42.6 49.7 42.6 48.2C42.6 47.6 42.7 47 42.6 46.4C42.4 45.5 41.4 45.1 40.7 45.5C39.1 46.4 40.5 51.4 39.8 52.4Z"/>'
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
      // AEG: wavy lines over a flat tray.
      svg: '<path d="M24 35.5q-3 -2.5 0 -5t0 -5t0 -5t0 -5M32 35.5q-3 -2.5 0 -5t0 -5t0 -5t0 -5M40 35.5q-3 -2.5 0 -5t0 -5t0 -5t0 -5" stroke-width="3"/><path d="M12 45H15Q16 49 19 49H45Q48 49 49 45H52"/>'
    },
    {
      id: "dishwasher-hygiene",
      name: "Hygiene / sanitise",
      category: "dishwasher",
      aka: ["sanitise", "sanitize", "hygiene plus", "hygiene", "antibacterial", "sterilise"],
      looksLike: ["baby bottle with a sparkle", "bottle with a star", "feeding bottle", "baby bottle", "shield with a cross"],
      meaning:
        "Raises the final rinse temperature (often to around 70°C) and holds it there for a while to kill more bacteria. Useful for chopping boards, baby bottles, or when someone in the house has been ill.",
      action:
        "Select it as an option before you start. It takes longer and uses more energy, so save it for when it matters, and check plastic items can take the heat.",
      tip: "On American dishwashers a 'Sanitized' light comes on after the cycle if the water got hot enough.",
      // Traced from the Samsung manual.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M39.8 31.6C40.2 30.9 39.9 30.1 40.1 29.4C40.3 28.8 41 28.6 41.1 28C41.4 27.2 41.2 24.3 41.2 23.3C41.2 22.8 41.3 22 41.1 21.5C40.6 20.4 39.5 21 38.9 20.3C38.2 19.4 38.1 17.6 37.3 16.5C36.4 15.4 35.5 14.4 34.4 13.6C33.9 13.2 33.2 12.9 32.7 12.5C32.4 12.2 32 11.8 31.8 11.4C31.6 10.9 31.8 10.3 31.6 9.7C31.3 8.7 30.6 7.6 29.6 7.1C29.2 6.9 28.6 6.9 28.2 6.8C27.7 6.8 27.3 6.8 26.8 6.9C26.1 7.1 25.7 7.2 25.2 7.6C23.5 8.8 24.2 10.8 23.1 12.3C22.6 12.9 21.7 13.2 21.1 13.7C20.2 14.4 19.3 15.4 18.5 16.3C18.1 16.9 17.6 17.8 17.4 18.5C17.3 19.1 17.2 19.7 16.8 20.2C16.2 21 14.9 20.3 14.5 21.1C14.1 22 14.1 27.3 14.4 28.3C14.7 29 15.5 29 15.6 29.8C15.8 31.1 15.6 32.8 15.6 34.2C15.6 38 15.6 41.9 15.6 45.8C15.6 47.5 15.4 49.6 15.7 51.3C15.7 51.7 15.9 52 16.1 52.3C16.7 53.7 17.3 54.6 18.8 55.1C20.3 55.6 25.6 55.3 27.6 55.3C28.5 55.3 31.6 55.6 32.3 55.1C32.8 54.8 32.9 53.6 32.6 53.1C32.4 52.9 32 52.9 31.7 52.8C30.8 52.7 29.8 52.8 28.8 52.8C26.8 52.8 24.7 52.8 22.7 52.8C21.5 52.8 19.9 53.1 18.9 52.2C17.8 51 18.1 48.2 18.1 46.7C18.1 42.7 18.1 38.7 18.1 34.7C18.1 33.6 17.9 30.4 18.3 29.6C18.6 28.7 21.9 29 22.7 29C25.8 29 28.9 29 32 29C33.5 29 35.1 28.9 36.7 29C38.6 29.2 36.4 31.8 38.7 31.9C39.2 32 39.5 31.9 39.8 31.6ZM35.6 20.4C34.9 20.9 33.1 20.7 32.2 20.7C29.4 20.7 26.5 20.7 23.7 20.7C22.8 20.7 20.8 20.9 20 20.4C19.5 19.7 20 19.2 20.3 18.5C21.1 16.6 22.8 15.9 24.3 14.7C25.2 14 25.8 12.9 26.2 11.8C26.6 10.6 25.9 9.3 28 9.4C29.2 9.4 29.1 11.9 29.6 12.8C30.1 13.7 30.9 14.6 31.9 15.2C32.2 15.3 32.5 15.4 32.8 15.6C33.6 16.2 34.4 17 35 17.7C35.5 18.4 36.2 19.6 35.6 20.4ZM17.1 26.4C16.6 25.9 16.6 23.8 17.1 23.2C17.9 22.8 20.9 23.1 22 23.1C25.9 23.1 29.8 23.1 33.7 23.1C34.8 23.1 37.3 22.8 38.2 23.2C38.5 23.3 38.6 23.6 38.6 24C38.7 24.7 38.9 26.1 38.1 26.5C37.4 26.8 33.9 26.6 32.9 26.6C29.2 26.6 25.6 26.6 21.9 26.6C20.8 26.6 18 26.9 17.1 26.4ZM38.5 36.2C37.4 36.3 37.4 37.5 37.3 38.3C37.2 39 37.1 39.7 36.9 40.3C36.6 41.1 35.7 42.5 35 43.1C34.2 43.7 32.7 44.8 31.7 45C30.9 45.2 30 44.9 29.2 45.2C28.6 45.4 28.1 46 28.1 46.7C28.4 48.4 30.6 47.9 31.7 48.1C32.5 48.2 34.8 49.6 35.3 50.2C35.9 51 36.6 52 36.9 52.9C37.3 54.1 36.9 57.2 38.9 57C40.4 56.8 39.9 55.1 40.1 54.2C40.2 53.8 40.4 53.6 40.5 53.3C40.6 53 40.6 52.7 40.7 52.5C41.2 51.4 42 50.5 42.8 49.7C43.4 49.2 45 48.3 45.9 48.1C46.7 48 47.6 48.2 48.4 47.9C48.9 47.7 49.6 47 49.4 46.3C48.9 44.8 47.2 45.2 46 45C44.9 44.9 42.9 43.5 42.1 42.7C41.3 41.9 40.2 39.6 40.1 38.6C40 38 40.1 37.2 39.9 36.7C39.6 36.2 39 36.1 38.5 36.2ZM38.7 42.9C38.9 43 39 43 39.1 43.1C39.4 43.4 39.6 43.7 39.8 44C40.2 44.5 40.7 45 41.2 45.4C41.6 45.7 42.1 46 42.3 46.5C42.3 46.7 42.3 46.8 42.1 46.9C41.7 47.4 41.2 47.8 40.7 48.2C40.2 48.8 39.7 49.5 39.1 50C38.9 50.1 38.8 50.1 38.6 50.1C38.3 49.9 36.8 48 36.1 47.5C35.7 47.2 35.2 47 35.1 46.5C35.4 45.9 36 45.7 36.5 45.3C37 44.9 37.4 44.5 37.7 44.1C38 43.6 38.2 43.1 38.7 42.9Z"/>'
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
      // Samsung, Beko, Hotpoint, AEG: the rim broken by dots at the upper right, L hands.
      svg: '<path d="M51 32A19 19 0 1 1 32 13"/><path d="M28 9L32 13L28 17"/><g fill="currentColor" stroke="none"><circle cx="39.27" cy="14.45" r="1.8"/><circle cx="45.44" cy="18.56" r="1.8"/><circle cx="49.55" cy="24.73" r="1.8"/></g><path d="M32 32V21M32 32H42"/>'
    }
  ]);
})();
