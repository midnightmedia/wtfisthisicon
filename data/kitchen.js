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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.5 17.6C36.5 17.6 39.1 18.2 40 18.6C40.9 18.9 41.9 19.8 41.9 19.8C41.9 19.8 42 21.8 41.9 22.9C41.7 24.1 41.4 25.8 41 26.9C40.7 28.1 40.2 29.3 39.8 30.1C39.3 30.8 38.7 31.3 38.5 31.6C38.2 32 37.9 31.6 38.5 32.2C39.1 32.9 41.1 34.2 42 35.4C43 36.5 43.7 37.7 44.4 39C45 40.2 46 42.6 46 42.6C46 42.6 44.8 44.2 44 44.9C43.3 45.5 41.5 46.5 41.5 46.5C41.5 46.5 39.1 45.2 38 44.5C37 43.7 36 42.9 35 41.8C34.1 40.6 32.4 37.4 32.4 37.4C32.4 37.4 29.1 38.6 27.8 38.9C26.4 39.1 25.7 39.1 24.6 39.1C23.4 39.1 21.5 39 20.6 38.9C19.8 38.7 19.1 38.2 19.1 38.2C19.1 38.2 18.6 36.8 18.4 36C18.3 35.1 18.1 33 18.1 33C18.1 33 18.8 32.3 19.9 31.8C20.9 31.2 23.4 30.2 24.6 29.9C25.7 29.5 25.9 29.4 26.9 29.4C27.9 29.3 29.9 29.6 30.6 29.6C31.2 29.5 31.1 29.1 31.1 29.1C31.1 29.1 30.9 28.3 31.1 27.4C31.2 26.6 31.5 25.4 32 24.1C32.6 22.9 33.7 21 34.5 19.9C35.2 18.8 36.5 17.6 36.5 17.6ZM37.1 20.2L39.5 20.9C39.5 20.9 39.2 24.3 38.9 25.8C38.5 27.2 37.2 29.4 37.2 29.4C37.2 29.4 36.2 28.7 35.5 28.4C34.9 28.2 33.5 28.1 33.5 28.1C33.5 28.1 33.8 26 34.5 24.6C35.1 23.3 37.1 20.2 37.1 20.2ZM33 30.8C33.5 30.6 34.1 30.5 34.6 30.8C35.1 31 35.8 31.7 36 32.2C36.3 32.8 36.2 33.5 36 34C35.7 34.4 35.1 35 34.6 35.1C34.2 35.3 33.5 35.3 33 35.1C32.6 35 31.9 34.5 31.8 34C31.6 33.4 31.6 32.3 31.9 31.8C32.1 31.2 32.6 30.9 33 30.8ZM27.2 31.8C27.9 31.7 29.1 31.8 29.1 31.8C29.1 31.8 29 33.5 29.1 34.1C29.3 34.8 29.9 35.8 29.9 35.8C29.9 35.8 26.8 36.5 25.4 36.6C23.9 36.8 21.1 36.4 21.1 36.4L20.9 34C20.9 34 23.9 32.6 24.9 32.2C26 31.9 26.6 31.8 27.2 31.8ZM38.1 35C38.1 35 40 36.6 40.9 37.8C41.7 38.9 42.7 41 43 41.8C43.4 42.5 43.1 42.4 43.1 42.4L41.5 43.8C41.5 43.8 38.8 42 37.8 41C36.7 40 35.2 37.8 35.2 37.8C35.2 37.8 36.6 37 37 36.5C37.5 36.1 38.1 35 38.1 35Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.8 16.9C32.8 16.9 34 17 35 17.2C36.1 17.5 36.8 17.6 38 18.2C39.3 18.9 41.4 20.4 42.5 21.2C43.5 22.1 43.9 22.9 44.5 23.6C45 24.4 45.3 25 45.6 25.9C46 26.7 46.4 27.8 46.6 28.8C46.9 29.7 46.9 30.6 47 31.6C47 32.5 47 33.4 46.9 34.4C46.7 35.3 46.4 36.3 46 37.2C45.7 38.2 45.1 39.2 44.6 40C44.1 40.9 43.7 41.4 43 42.1C42.4 42.9 41.4 43.8 40.5 44.4C39.7 45 39.3 45.3 38 45.8C36.8 46.2 34.7 46.9 33 47C31.4 47.2 29.4 46.9 28.1 46.5C26.7 46.2 25.6 45.6 24.6 45.1C23.7 44.6 23.1 44.1 22.4 43.5C21.7 43 21.1 42.4 20.4 41.6C19.8 40.9 19.2 40.2 18.6 39C18.1 37.7 17.3 35.4 17.1 34C16.8 32.5 17 31.1 17.1 30.1C17.1 29 17.2 28.7 17.6 27.8C17.9 26.8 18.4 25.5 18.9 24.6C19.4 23.6 19.9 23 20.6 22.2C21.2 21.5 21.8 20.9 22.6 20.2C23.4 19.6 24.3 19.1 25.4 18.6C26.4 18.1 27.9 17.5 28.9 17.2C30 17 30.7 16.9 31.8 16.9ZM30.9 19.4C31.8 19.3 32.2 19.4 32.2 19.4C32.2 19.4 30.1 22.9 29.6 24.4C29 25.9 28.9 28.4 28.9 28.4C28.9 28.4 26.7 28 25.1 28.2C23.6 28.5 19.6 30.1 19.6 30.1C19.6 30.1 20.2 27.2 20.9 25.9C21.7 24.5 23 23.1 23.9 22.2C24.9 21.4 25.7 20.9 26.9 20.4C28 20 30.1 19.6 30.9 19.4ZM35 19.9L37.5 20.8C37.5 20.8 37.1 24.3 36.8 25.6C36.4 27 35.2 28.9 35.2 28.9C35.2 28.9 33.5 27.7 32.9 27.4C32.2 27.2 31.4 27.4 31.4 27.4C31.4 27.4 31.6 25.7 32.2 24.4C32.9 23.2 35 19.9 35 19.9ZM39.9 22.1C39.9 22.1 42 24.3 42.8 25.4C43.5 26.6 44 27.6 44.2 29.1C44.5 30.5 44.6 32.6 44.5 33.9C44.4 35.1 43.9 36.1 43.6 36.9C43.4 37.6 42.8 38.5 42.8 38.5C42.8 38.5 40.9 35.1 39.9 33.9C38.8 32.6 36.5 31.1 36.5 31.1C36.5 31.1 38.2 29.1 38.8 27.6C39.3 26.1 39.9 22.1 39.9 22.1ZM31.4 29.9C31.9 29.8 32.7 30 33.1 30.2C33.6 30.5 33.9 30.8 34 31.2C34.1 31.7 34 32.7 33.8 33.1C33.5 33.6 33 33.9 32.5 34C32 34.1 31.2 34 30.8 33.8C30.3 33.5 30.1 33.1 29.9 32.6C29.8 32.2 29.9 31.4 30.1 30.9C30.4 30.5 30.9 30.1 31.4 29.9ZM25.8 30.8C26.6 30.6 27.6 30.8 27.6 30.8C27.6 30.8 27.3 32.4 27.4 33C27.6 33.7 28.4 34.8 28.4 34.8C28.4 34.8 26.9 35.3 26.1 35.5C25.4 35.6 24.7 35.7 23.6 35.6C22.6 35.6 19.9 35.4 19.9 35.4L19.6 32.9C19.6 32.9 21.7 31.8 22.8 31.4C23.8 31.1 24.9 30.9 25.8 30.8ZM36.1 33.9C36.1 33.9 37.8 35.1 38.5 36.2C39.3 37.4 40.5 39.7 40.9 40.5C41.2 41.2 41.1 40.6 40.9 41C40.6 41.3 39.2 42.4 39.2 42.4C39.2 42.4 36.8 40.9 35.8 40C34.7 39 33 36.5 33 36.5C33 36.5 34.1 36.2 34.6 35.8C35.2 35.3 36.1 33.9 36.1 33.9ZM30.4 36.5C30.4 36.5 31.5 39 32.5 40.2C33.6 41.5 36.5 43.8 36.5 43.8C36.5 43.8 33.9 44.5 32.8 44.6C31.6 44.8 30.9 44.8 29.6 44.5C28.4 44.2 26.6 43.5 25.4 42.9C24.3 42.2 23.5 41.5 22.8 40.6C22 39.8 20.9 38 20.9 38C20.9 38 25 38.2 26.6 38C28.1 37.7 30.4 36.5 30.4 36.5Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><line x1="16" y1="15.5" x2="48" y2="15.5" stroke-width="4.5"/><line x1="16" y1="48.5" x2="48" y2="48.5" stroke-width="4.5"/><g transform="matrix(0.82 0 0 0.82 5.76 5.76)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.5 17.6C36.5 17.6 39.1 18.2 40 18.6C40.9 18.9 41.9 19.8 41.9 19.8C41.9 19.8 42 21.8 41.9 22.9C41.7 24.1 41.4 25.8 41 26.9C40.7 28.1 40.2 29.3 39.8 30.1C39.3 30.8 38.7 31.3 38.5 31.6C38.2 32 37.9 31.6 38.5 32.2C39.1 32.9 41.1 34.2 42 35.4C43 36.5 43.7 37.7 44.4 39C45 40.2 46 42.6 46 42.6C46 42.6 44.8 44.2 44 44.9C43.3 45.5 41.5 46.5 41.5 46.5C41.5 46.5 39.1 45.2 38 44.5C37 43.7 36 42.9 35 41.8C34.1 40.6 32.4 37.4 32.4 37.4C32.4 37.4 29.1 38.6 27.8 38.9C26.4 39.1 25.7 39.1 24.6 39.1C23.4 39.1 21.5 39 20.6 38.9C19.8 38.7 19.1 38.2 19.1 38.2C19.1 38.2 18.6 36.8 18.4 36C18.3 35.1 18.1 33 18.1 33C18.1 33 18.8 32.3 19.9 31.8C20.9 31.2 23.4 30.2 24.6 29.9C25.7 29.5 25.9 29.4 26.9 29.4C27.9 29.3 29.9 29.6 30.6 29.6C31.2 29.5 31.1 29.1 31.1 29.1C31.1 29.1 30.9 28.3 31.1 27.4C31.2 26.6 31.5 25.4 32 24.1C32.6 22.9 33.7 21 34.5 19.9C35.2 18.8 36.5 17.6 36.5 17.6ZM37.1 20.2L39.5 20.9C39.5 20.9 39.2 24.3 38.9 25.8C38.5 27.2 37.2 29.4 37.2 29.4C37.2 29.4 36.2 28.7 35.5 28.4C34.9 28.2 33.5 28.1 33.5 28.1C33.5 28.1 33.8 26 34.5 24.6C35.1 23.3 37.1 20.2 37.1 20.2ZM33 30.8C33.5 30.6 34.1 30.5 34.6 30.8C35.1 31 35.8 31.7 36 32.2C36.3 32.8 36.2 33.5 36 34C35.7 34.4 35.1 35 34.6 35.1C34.2 35.3 33.5 35.3 33 35.1C32.6 35 31.9 34.5 31.8 34C31.6 33.4 31.6 32.3 31.9 31.8C32.1 31.2 32.6 30.9 33 30.8ZM27.2 31.8C27.9 31.7 29.1 31.8 29.1 31.8C29.1 31.8 29 33.5 29.1 34.1C29.3 34.8 29.9 35.8 29.9 35.8C29.9 35.8 26.8 36.5 25.4 36.6C23.9 36.8 21.1 36.4 21.1 36.4L20.9 34C20.9 34 23.9 32.6 24.9 32.2C26 31.9 26.6 31.8 27.2 31.8ZM38.1 35C38.1 35 40 36.6 40.9 37.8C41.7 38.9 42.7 41 43 41.8C43.4 42.5 43.1 42.4 43.1 42.4L41.5 43.8C41.5 43.8 38.8 42 37.8 41C36.7 40 35.2 37.8 35.2 37.8C35.2 37.8 36.6 37 37 36.5C37.5 36.1 38.1 35 38.1 35Z"/></g>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><line x1="16" y1="48.5" x2="48" y2="48.5" stroke-width="4.5"/><g transform="matrix(0.88 0 0 0.88 3.84 1.6)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.5 17.6C36.5 17.6 39.1 18.2 40 18.6C40.9 18.9 41.9 19.8 41.9 19.8C41.9 19.8 42 21.8 41.9 22.9C41.7 24.1 41.4 25.8 41 26.9C40.7 28.1 40.2 29.3 39.8 30.1C39.3 30.8 38.7 31.3 38.5 31.6C38.2 32 37.9 31.6 38.5 32.2C39.1 32.9 41.1 34.2 42 35.4C43 36.5 43.7 37.7 44.4 39C45 40.2 46 42.6 46 42.6C46 42.6 44.8 44.2 44 44.9C43.3 45.5 41.5 46.5 41.5 46.5C41.5 46.5 39.1 45.2 38 44.5C37 43.7 36 42.9 35 41.8C34.1 40.6 32.4 37.4 32.4 37.4C32.4 37.4 29.1 38.6 27.8 38.9C26.4 39.1 25.7 39.1 24.6 39.1C23.4 39.1 21.5 39 20.6 38.9C19.8 38.7 19.1 38.2 19.1 38.2C19.1 38.2 18.6 36.8 18.4 36C18.3 35.1 18.1 33 18.1 33C18.1 33 18.8 32.3 19.9 31.8C20.9 31.2 23.4 30.2 24.6 29.9C25.7 29.5 25.9 29.4 26.9 29.4C27.9 29.3 29.9 29.6 30.6 29.6C31.2 29.5 31.1 29.1 31.1 29.1C31.1 29.1 30.9 28.3 31.1 27.4C31.2 26.6 31.5 25.4 32 24.1C32.6 22.9 33.7 21 34.5 19.9C35.2 18.8 36.5 17.6 36.5 17.6ZM37.1 20.2L39.5 20.9C39.5 20.9 39.2 24.3 38.9 25.8C38.5 27.2 37.2 29.4 37.2 29.4C37.2 29.4 36.2 28.7 35.5 28.4C34.9 28.2 33.5 28.1 33.5 28.1C33.5 28.1 33.8 26 34.5 24.6C35.1 23.3 37.1 20.2 37.1 20.2ZM33 30.8C33.5 30.6 34.1 30.5 34.6 30.8C35.1 31 35.8 31.7 36 32.2C36.3 32.8 36.2 33.5 36 34C35.7 34.4 35.1 35 34.6 35.1C34.2 35.3 33.5 35.3 33 35.1C32.6 35 31.9 34.5 31.8 34C31.6 33.4 31.6 32.3 31.9 31.8C32.1 31.2 32.6 30.9 33 30.8ZM27.2 31.8C27.9 31.7 29.1 31.8 29.1 31.8C29.1 31.8 29 33.5 29.1 34.1C29.3 34.8 29.9 35.8 29.9 35.8C29.9 35.8 26.8 36.5 25.4 36.6C23.9 36.8 21.1 36.4 21.1 36.4L20.9 34C20.9 34 23.9 32.6 24.9 32.2C26 31.9 26.6 31.8 27.2 31.8ZM38.1 35C38.1 35 40 36.6 40.9 37.8C41.7 38.9 42.7 41 43 41.8C43.4 42.5 43.1 42.4 43.1 42.4L41.5 43.8C41.5 43.8 38.8 42 37.8 41C36.7 40 35.2 37.8 35.2 37.8C35.2 37.8 36.6 37 37 36.5C37.5 36.1 38.1 35 38.1 35Z"/></g>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.1 10.6C15.4 10.6 15.6 10.5 16.4 11.2C17.2 11.8 19.9 14.2 19.9 14.2L23.9 10.8L27.9 14.2L31.9 10.8L35.9 14.2L40 10.8L44 14.2L48.5 10.6C48.5 10.6 49.4 10.7 49.6 10.9C49.9 11.2 50.2 12.2 50.2 12.2C50.2 12.2 50.6 12.3 49.5 13.3C48.5 14.3 44 18.1 44 18.1L40 14.8L36 18.1L32 14.8L28.1 18.1L24.1 14.8L19.9 18.1C19.9 18.1 15.1 14 14.1 12.9C13 11.9 13.7 11.9 13.7 11.9C13.7 11.9 14 11.2 14.2 10.9C14.5 10.7 14.7 10.5 15.1 10.6ZM34.5 21.4C34.5 21.4 37.2 22.1 38.1 22.4C39 22.8 40 23.6 40 23.6C40 23.6 40.1 25.7 40 26.9C39.8 28.1 39.5 29.7 39.1 30.9C38.8 32 38.3 33.2 37.9 34C37.4 34.7 36.8 35.2 36.5 35.5C36.3 35.9 35.9 35.5 36.5 36.1C37.1 36.8 39.2 38.1 40.1 39.2C41.1 40.4 41.8 41.6 42.5 42.9C43.1 44.1 44 46.5 44 46.5C44 46.5 42.9 48.1 42.1 48.8C41.4 49.4 39.5 50.5 39.5 50.5C39.5 50.5 37.2 49.2 36.1 48.4C35.1 47.5 34.1 46.8 33.1 45.6C32.2 44.5 30.4 41.2 30.4 41.2C30.4 41.2 27.2 42.5 25.9 42.8C24.6 43 23.8 43 22.6 43C21.5 43 19.6 42.9 18.8 42.8C17.9 42.6 17.2 42.1 17.2 42.1C17.2 42.1 16.7 40.7 16.6 39.9C16.4 39 16.2 37 16.2 37C16.2 37 16.9 36.2 17.9 35.6C19 35.1 21.5 34.1 22.6 33.8C23.8 33.4 23.9 33.3 24.9 33.2C25.9 33.2 27.9 33.5 28.6 33.5C29.3 33.4 29.1 33 29.1 33C29.1 33 29 32.2 29.1 31.4C29.3 30.5 29.6 29.3 30.1 28.1C30.7 26.8 31.8 24.9 32.5 23.8C33.3 22.6 34.5 21.4 34.5 21.4ZM35.2 24.1L37.5 24.9C37.5 24.9 37.3 28.2 37 29.6C36.6 31.1 35.4 33.4 35.4 33.4C35.4 33.4 34.3 32.6 33.6 32.4C33 32.1 31.6 32 31.6 32C31.6 32 31.9 29.9 32.5 28.6C33.2 27.2 35.2 24.1 35.2 24.1ZM31.1 34.6C31.6 34.5 32.2 34.4 32.8 34.6C33.2 34.9 33.9 35.6 34.1 36.1C34.4 36.7 34.3 37.4 34 37.9C33.8 38.3 33.2 38.8 32.8 39C32.3 39.2 31.6 39.2 31.1 39C30.7 38.8 30.1 38.4 29.9 37.9C29.7 37.3 29.7 36.2 29.9 35.6C30.2 35.1 30.7 34.8 31.1 34.6ZM25.4 35.6C26.1 35.6 27.2 35.6 27.2 35.6C27.2 35.6 27.1 37.4 27.2 38C27.4 38.7 27.9 39.6 27.9 39.6C27.9 39.6 24.9 40.4 23.4 40.5C22 40.6 19.1 40.2 19.1 40.2L18.9 37.9C18.9 37.9 22 36.5 23.1 36.1C24.1 35.8 24.7 35.7 25.4 35.6ZM36.2 39C36.2 39 38.1 40.5 39 41.6C39.8 42.8 40.8 44.9 41.1 45.6C41.5 46.4 41.2 46.2 41.2 46.2L39.6 47.6C39.6 47.6 36.9 46 35.9 45C34.8 44 33.4 41.6 33.4 41.6C33.4 41.6 34.7 40.9 35.1 40.5C35.6 40 36.2 39 36.2 39Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.2 11.8C28.2 11.8 28.9 11.6 29.6 12.3C30.2 13.1 31.9 16.4 31.9 16.4C31.9 16.4 33.8 13.1 34.4 12.3C34.9 11.6 34.8 11.9 35 11.8C35.3 11.8 36 12.1 36 12.1C36 12.1 36.8 12.3 36.5 13.2C36.1 14.2 34 17.6 34 17.6C34 17.6 38 17.5 39 17.6C39.9 17.8 39.6 18.2 39.8 18.4C39.9 18.6 40 18.9 40 18.9C40 18.9 40 19.8 39 19.9C38.1 20.1 34 20.1 34 20.1C34 20.1 36.1 23.4 36.5 24.4C36.8 25.3 36 25.6 36 25.6L35 25.8C35 25.8 34.8 25.9 34.2 25.1C33.8 24.4 31.9 21.1 31.9 21.1C31.9 21.1 30.1 24.4 29.6 25.1C29.1 25.9 29.2 25.7 28.9 25.8C28.7 25.8 27.9 25.6 27.9 25.6L27.4 24.4L29.9 20.1C29.9 20.1 25.8 20.1 24.9 19.9C23.9 19.8 24.3 19.6 24.1 19.4C24 19.2 23.9 18.8 23.9 18.8C23.9 18.8 23.9 17.8 24.9 17.6C25.9 17.4 29.9 17.6 29.9 17.6C29.9 17.6 27.8 14.1 27.4 13.2C27.1 12.4 27.5 12.5 27.6 12.2C27.8 12 28.2 11.8 28.2 11.8ZM31.9 28.4C31.9 28.4 31.2 27 32.4 28.6C33.5 30.3 37.2 35.9 38.5 38.1C39.8 40.4 39.9 40.9 40.1 42C40.4 43 40.3 43.6 40.1 44.5C40 45.5 39.6 46.7 39 47.6C38.3 48.6 37.1 49.7 36.1 50.4C35.2 51 34.1 51.3 33 51.5C32 51.6 30.8 51.5 29.9 51.2C28.9 51 28.3 50.8 27.4 50.1C26.6 49.5 25.5 48.4 24.9 47.5C24.2 46.5 23.9 45.5 23.8 44.5C23.6 43.6 23.6 42.8 23.8 42C23.9 41.1 23.3 41.6 24.6 39.4C26 37.1 31.9 28.4 31.9 28.4ZM31.9 32.5C31.9 32.5 36.2 38.8 37.1 40.5C38.1 42.1 37.7 41.6 37.8 42.4C37.8 43.1 37.8 44.3 37.5 45C37.3 45.8 37 46.3 36.5 46.9C36.1 47.4 35.6 48 34.9 48.4C34.1 48.7 33 49 32.2 49C31.5 49.1 31 49.1 30.4 48.9C29.7 48.6 28.8 48.2 28.2 47.8C27.7 47.3 27.2 46.8 26.9 46.1C26.5 45.5 26.2 45 26.1 44C26.1 43.1 25.7 42.6 26.6 40.6C27.6 38.7 31.9 32.5 31.9 32.5ZM28.1 42.4L29.6 42.6C29.6 42.6 29.9 43.9 30.1 44.2C30.4 44.6 30.5 44.9 30.9 45C31.4 45.2 32.8 45.2 32.8 45.2L33.5 47.1C33.5 47.1 32.2 47.8 31.4 47.6C30.7 47.5 29.4 46.9 28.8 46.2C28.1 45.6 27.8 44.4 27.6 43.9C27.4 43.3 27.5 43.2 27.6 43C27.6 42.7 28.1 42.4 28.1 42.4Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.2 12.4C31.9 12.3 32 12.3 32.6 12.4C33.3 12.6 34.3 12.9 35 13.3C35.6 13.8 36.2 14.6 36.6 15.2C37 15.7 37.2 15.5 37.4 16.6C37.5 17.8 37.4 22.1 37.4 22.1C37.4 22.1 38.6 22.8 39.2 23.4C39.9 24.1 40.9 25.1 41.5 25.9C42 26.8 42.4 27.5 42.6 28.4C42.9 29.2 43.2 30.2 43.2 31.4C43.2 32.5 43.1 34.2 42.6 35.5C42.2 36.7 41.5 37.9 40.6 39C39.8 40 38.7 41 37.5 41.6C36.2 42.3 34.7 42.9 33.2 43C31.8 43.2 30.1 43.1 28.8 42.6C27.4 42.2 26 41.4 24.9 40.5C23.8 39.7 22.8 38.4 22.1 37.4C21.5 36.3 21.2 35.2 20.9 34.4C20.7 33.5 20.6 33.2 20.6 32.4C20.6 31.5 20.7 30.3 20.9 29.4C21.2 28.4 21.6 27.4 22.1 26.6C22.5 25.9 22.7 25.4 23.4 24.6C24.2 23.9 25.9 23.5 26.4 22.1C27 20.8 26.4 17.7 26.6 16.6C26.7 15.4 26.9 15.6 27.2 15.1C27.6 14.5 28.1 13.9 28.8 13.4C29.4 13 30.6 12.6 31.2 12.4ZM31.4 15.8C31.8 15.7 32.5 15.8 32.9 15.9C33.2 16.1 33.5 16.3 33.8 16.8C34 17.2 34 18.8 34 18.8L29.9 18.8C29.9 18.8 29.8 17.3 30.1 16.9C30.3 16.4 30.9 16 31.4 15.8ZM29.9 22.1L34 22.1C34 22.1 33.8 23.4 34.5 24.1C35.1 24.9 37.1 25.8 38 26.8C38.8 27.7 39.2 28.7 39.5 29.6C39.9 30.6 40 31.6 39.9 32.6C39.7 33.7 39.4 34.9 38.9 35.9C38.4 36.8 37.6 37.5 36.9 38.1C36.1 38.8 35.5 39.2 34.5 39.5C33.4 39.7 31.5 39.7 30.6 39.6C29.6 39.6 29.4 39.5 28.6 39.1C27.9 38.8 26.8 38 26.1 37.2C25.3 36.5 24.7 35.6 24.4 34.5C24 33.4 24 31.6 24.1 30.6C24.1 29.7 24.2 29.4 24.6 28.6C25.1 27.8 25.9 26.6 26.8 25.9C27.6 25.1 28.9 24.8 29.4 24.1C30 23.5 29.9 22.1 29.9 22.1ZM14.1 30.2C14.6 30.2 15.9 30.2 16.6 30.2C17.2 30.3 17.5 30.5 17.8 30.8C18 31 18.2 31.2 18.2 31.6C18.3 31.9 18.1 32.5 17.9 32.9C17.8 33.2 17.9 33.4 17.1 33.5C16.4 33.5 14 33.5 13.2 33.4C12.5 33.2 12.6 32.6 12.4 32.4C12.3 32.1 12.3 31.9 12.4 31.6C12.6 31.2 12.9 30.8 13.2 30.6C13.4 30.3 13.5 30.3 14.1 30.2ZM47.4 30.2C48.1 30.2 50.1 30.3 50.8 30.6C51.4 30.8 51.4 31.1 51.5 31.6C51.5 32 51.1 33 51.1 33C51.1 33 50.5 33.5 49.6 33.5C48.8 33.6 46.2 33.1 46.2 33.1L45.6 31.6C45.6 31.6 46.1 30.9 46.4 30.6C46.6 30.4 46.6 30.3 47.4 30.2ZM20.9 41C21.2 41.1 22.4 41.9 22.4 41.9C22.4 41.9 23.1 42.7 22.6 43.5C22.1 44.2 20.1 46 19.4 46.6C18.8 47.2 18.9 47 18.6 47C18.2 47.1 17.8 47 17.4 46.8C17.1 46.5 16.8 46 16.8 45.6C16.7 45.3 16.4 45.4 16.9 44.6C17.5 43.9 19.5 42 20.1 41.4C20.8 40.8 20.5 41 20.9 41ZM42.6 41C43 41 43.2 40.9 43.9 41.5C44.5 42 46.2 43.6 46.8 44.4C47.3 45.1 47 46 47 46C47 46 46.7 46.6 46.5 46.8C46.2 46.9 45.7 47.1 45.4 47C45 47 45.1 47.2 44.5 46.6C43.8 46.1 41.9 44.2 41.4 43.5C40.8 42.9 41.1 42.8 41.1 42.5C41.2 42.2 41.2 42 41.5 41.8C41.7 41.5 42.2 41.1 42.6 41ZM31.9 45.5C32.1 45.6 32.6 45.6 32.9 45.9C33.1 46.1 33.5 46.4 33.6 47.1C33.8 47.9 33.8 49.4 33.5 50.1C33.3 50.9 32.2 51.4 32.2 51.4C32.2 51.4 31.2 51.1 30.9 51C30.5 50.8 30.4 51 30.4 50.2C30.3 49.5 30.2 47.5 30.4 46.8C30.5 46 30.9 46 31.1 45.8C31.4 45.5 31.6 45.5 31.9 45.5Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.8 9.8C16.8 9.7 17.7 9.8 18.6 10.1C19.4 10.3 20.1 10.7 20.8 11.2C21.4 11.6 21.8 12 22.2 12.7C22.7 13.3 23.2 14.2 23.4 15.2C23.6 16.1 23.6 17.3 23.4 18.2C23.3 19.2 22.8 20 22.4 20.6C21.9 21.3 21.3 21.9 20.6 22.4C20 22.8 19.2 23.3 18.2 23.4C17.3 23.6 16.1 23.6 15.2 23.4C14.2 23.2 13.3 22.7 12.7 22.2C12 21.8 11.6 21.5 11.2 20.8C10.7 20 10 18.6 9.8 17.6C9.7 16.7 9.8 15.8 10.1 14.9C10.3 14.1 10.7 13.2 11.2 12.6C11.8 11.9 12.4 11.3 13.2 10.8C13.9 10.4 14.9 10 15.8 9.8ZM15.8 12.3C16.4 12.2 17 12.2 17.6 12.3C18.1 12.4 18.7 12.6 19.1 12.9C19.6 13.2 20 13.7 20.4 14.2C20.7 14.6 20.9 15 21.1 15.7C21.2 16.3 21.2 17.3 21.1 17.9C20.9 18.4 20.7 18.8 20.4 19.1C20.2 19.5 19.9 19.9 19.4 20.2C19 20.6 18.5 20.9 17.9 21.1C17.2 21.2 16.2 21.1 15.7 21.1C15.1 21 14.8 20.8 14.4 20.6C14.1 20.3 13.8 20.2 13.4 19.8C13.1 19.3 12.6 18.7 12.4 18.1C12.3 17.4 12.3 16.6 12.3 15.9C12.4 15.3 12.5 14.9 12.8 14.4C13.2 14 13.7 13.4 14.2 13.1C14.7 12.7 15.3 12.5 15.8 12.3ZM31.1 9.8C31.9 9.7 32.9 9.8 33.8 10.1C34.6 10.3 35.5 10.8 36.1 11.2C36.8 11.8 37.3 12.4 37.8 13.1C38.2 13.7 38.5 14.3 38.6 15.2C38.8 16 38.8 17.5 38.6 18.4C38.5 19.2 38.1 19.9 37.6 20.6C37.2 21.2 36.8 21.7 36.1 22.1C35.5 22.6 34.5 23.2 33.5 23.4C32.6 23.7 31.3 23.6 30.4 23.4C29.6 23.3 29 23 28.4 22.6C27.7 22.1 27.1 21.6 26.6 20.9C26 20.3 25.5 19.4 25.2 18.4C25 17.5 25 16.1 25.2 15.2C25.5 14.2 26 13.2 26.6 12.4C27.1 11.7 27.8 11.2 28.6 10.8C29.3 10.3 30.2 10 31.1 9.8ZM31.1 12.3C31.9 12.3 33.3 12.5 34 12.8C34.8 13 35.2 13.6 35.5 14.1C35.9 14.5 36.2 14.8 36.2 15.6C36.3 16.3 36.2 17.8 36 18.6C35.8 19.3 35.5 19.5 35 19.9C34.5 20.4 33.8 20.9 33 21.1C32.3 21.2 31.4 21.1 30.9 21.1C30.3 21 30.3 20.9 29.9 20.6C29.4 20.4 28.7 19.8 28.4 19.4C28 18.9 27.8 18.4 27.6 17.9C27.5 17.4 27.5 16.9 27.6 16.4C27.6 15.8 27.8 15.1 28.1 14.6C28.3 14 28.7 13.5 29.2 13.2C29.8 12.8 30.3 12.4 31.1 12.3ZM46.2 9.8C47.2 9.7 48.1 9.8 49 10.1C49.8 10.3 50.7 10.7 51.4 11.2C52 11.8 52.6 12.4 53 13.2C53.5 13.9 53.9 14.9 54 15.8C54.2 16.8 54.1 17.7 53.9 18.6C53.6 19.4 53.2 20.1 52.8 20.8C52.3 21.4 51.9 21.8 51.2 22.2C50.6 22.7 49.7 23.2 48.8 23.4C47.8 23.6 46.6 23.6 45.6 23.4C44.7 23.3 43.9 22.8 43.2 22.4C42.6 21.9 42 21.3 41.5 20.6C41.1 20 40.6 19.2 40.5 18.2C40.3 17.3 40.2 16.1 40.5 15.2C40.7 14.2 41.1 13.4 41.6 12.7C42.1 11.9 42.7 11.4 43.5 10.9C44.2 10.5 45.3 10 46.2 9.8ZM46.4 12.3C46.9 12.2 47.5 12.3 48 12.3C48.6 12.4 49 12.5 49.5 12.8C49.9 13.2 50.5 13.7 50.9 14.2C51.2 14.6 51.3 14.8 51.5 15.3C51.6 15.9 51.6 16.9 51.5 17.6C51.5 18.2 51.3 18.5 51 18.9C50.8 19.4 50.2 20 49.8 20.4C49.3 20.7 48.9 20.9 48.2 21.1C47.6 21.2 46.6 21.2 46 21.1C45.5 20.9 45.2 20.8 44.8 20.4C44.3 20.1 43.8 19.6 43.5 19.1C43.1 18.7 43 18.4 42.9 17.9C42.8 17.3 42.8 16.2 42.9 15.7C42.9 15.1 43 14.9 43.4 14.4C43.7 14 44.2 13.3 44.8 12.9C45.2 12.6 45.8 12.4 46.4 12.3ZM16.4 29.6C17 29.4 17.4 29.5 17.9 29.6C18.5 29.8 19.4 30.2 19.9 30.6C20.5 31.1 20.9 31.6 21.2 32.1C21.6 32.7 21.8 33.1 21.9 33.8C22 34.4 22 35 21.9 35.8C21.7 36.5 21.2 37.4 20.8 38C20.3 38.6 19.7 39 19.1 39.4C18.6 39.7 18 39.9 17.4 40C16.9 40.1 16.6 40.1 15.9 40C15.3 39.8 14.2 39.4 13.7 39C13.1 38.6 12.7 38.1 12.3 37.5C12 36.9 11.7 36 11.6 35.4C11.4 34.7 11.5 34.2 11.7 33.5C11.8 32.9 12.2 32.2 12.6 31.6C12.9 31.1 13.3 30.7 13.9 30.4C14.6 30 15.7 29.7 16.4 29.6ZM15.9 32C16.5 31.8 17.1 32 17.6 32C18 32.1 18 32.1 18.4 32.5C18.7 32.8 19.3 33.4 19.4 34C19.6 34.7 19.3 35.6 19.1 36.1C19 36.6 18.7 36.8 18.4 37C18 37.3 17.7 37.5 17.1 37.5C16.6 37.6 15.8 37.5 15.2 37.1C14.7 36.8 14.2 36.3 14.1 35.6C13.9 35 14 33.9 14.3 33.2C14.7 32.6 15.4 32.2 15.9 32ZM31.6 29.6C32.2 29.4 32.6 29.5 33.1 29.6C33.7 29.8 34.5 30.2 35 30.6C35.6 30.9 36 31.4 36.4 31.9C36.7 32.4 36.9 32.9 37 33.5C37.2 34.2 37.2 35.2 37 36C36.9 36.7 36.6 37.3 36.1 37.9C35.7 38.4 35.1 38.9 34.5 39.2C34 39.6 33.3 39.8 32.8 40C32.2 40.1 31.8 40.1 31.1 40C30.5 39.8 29.4 39.2 28.8 38.9C28.1 38.5 27.9 38.2 27.6 37.5C27.2 36.9 26.8 35.9 26.8 35.1C26.7 34.4 26.9 33.6 27.1 33C27.2 32.4 27.5 32 27.9 31.6C28.2 31.1 28.7 30.6 29.4 30.2C30 29.9 30.9 29.7 31.6 29.6ZM31.1 32C31.7 31.8 32.6 31.9 33.2 32.2C33.9 32.6 34.5 33.3 34.6 34C34.8 34.6 34.7 35.6 34.4 36.2C34 36.9 33 37.4 32.4 37.5C31.7 37.7 30.9 37.4 30.4 37C29.8 36.7 29.4 36.1 29.2 35.5C29.1 34.9 29.1 34 29.4 33.5C29.8 32.9 30.4 32.2 31.1 32ZM46.8 29.6C47.4 29.4 47.8 29.5 48.4 29.6C48.9 29.8 49.7 30.2 50.2 30.6C50.8 30.9 51.2 31.4 51.5 31.9C51.9 32.5 52.2 33.5 52.4 34.1C52.5 34.8 52.4 35.3 52.2 36C52.1 36.6 51.7 37.3 51.4 37.9C51 38.4 50.5 38.8 50 39.1C49.4 39.5 48.5 39.8 48 40C47.4 40.1 47.1 40.1 46.5 40C45.8 39.8 44.8 39.4 44.2 39C43.7 38.7 43.3 38.3 43 37.8C42.6 37.2 42.2 36.4 42 35.8C41.9 35.1 41.9 34.5 42 33.8C42.2 33 42.6 32.1 43 31.6C43.5 31 43.9 30.6 44.5 30.2C45.2 29.9 46.1 29.7 46.8 29.6ZM46.4 32C47 31.9 48.1 32 48.6 32.4C49.2 32.7 49.7 33.2 49.9 33.9C50 34.5 49.8 35.7 49.5 36.2C49.3 36.8 49 36.9 48.6 37.1C48.3 37.4 48.1 37.6 47.5 37.5C47 37.5 46.1 37.4 45.5 37C45 36.7 44.6 36.1 44.5 35.5C44.3 34.8 44.5 33.7 44.9 33.1C45.2 32.6 45.7 32.2 46.4 32Z"/><g fill="currentColor" stroke="none"><circle cx="16.7" cy="48.7" r="2.8"/><circle cx="32" cy="48.7" r="2.8"/><circle cx="47.2" cy="48.7" r="2.8"/></g>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.4 15.1L26.9 15.6L27.2 17.1C27.2 17.1 25.6 19.1 25.2 19.8C24.9 20.4 24.9 20.7 24.9 21.2C24.8 21.8 24.4 22 24.9 23.1C25.4 24.3 27.2 26.9 27.9 28.4C28.5 29.8 28.5 30.8 28.6 31.6C28.8 32.5 28.7 32.9 28.4 33.6C28.2 34.4 27.8 35.6 27.4 36.4C26.9 37.1 26.1 37.9 25.6 38.2C25.2 38.6 24.8 38.7 24.4 38.6C24.1 38.6 23.7 38.4 23.4 38C23.2 37.7 23.1 36.6 23.1 36.6C23.1 36.6 24.8 34.6 25.1 33.6C25.5 32.7 26 32.5 25.4 30.9C24.9 29.4 22.6 25.8 21.9 24.1C21.3 22.3 21.6 21.6 21.8 20.4C21.9 19.3 22.4 18.1 23.1 17.2C23.7 16.4 25.4 15.1 25.4 15.1ZM32.4 15.1L33.9 15.7L34.2 16.9C34.2 16.9 32.5 19 32.1 19.9C31.8 20.9 31.3 21.2 31.9 22.8C32.4 24.3 34.6 27.7 35.2 29.1C35.9 30.6 35.6 30.7 35.6 31.6C35.6 32.4 35.5 33.4 35.2 34.2C35 35.1 34.7 35.8 34.2 36.5C33.8 37.1 33.1 37.9 32.6 38.2C32.2 38.6 31.6 38.6 31.6 38.6C31.6 38.6 30.6 38.3 30.4 38C30.1 37.6 29.8 37.4 30.1 36.8C30.3 36.1 31.7 34.9 32 33.9C32.4 32.8 32.9 32 32.4 30.4C31.8 28.8 29.6 25.9 28.9 24.2C28.3 22.6 28.5 21.8 28.6 20.6C28.8 19.5 29.3 18.3 29.9 17.4C30.6 16.4 32.4 15.1 32.4 15.1ZM39.5 15.1L41 15.8C41 15.8 41.5 16.4 41.1 17.1C40.8 17.9 39.5 19.1 39.1 20.1C38.8 21.1 38.5 21.7 39 23.1C39.5 24.6 41.5 27.4 42.1 28.9C42.8 30.5 42.8 31.2 42.6 32.4C42.5 33.6 42 35.2 41.5 36.1C41 37.1 40.1 37.8 39.6 38.2C39.1 38.7 38.5 38.6 38.5 38.6C38.5 38.6 37.5 38.2 37.2 37.9C37 37.5 36.7 37.4 37 36.6C37.4 35.9 38.8 34.6 39.1 33.6C39.5 32.7 40 32.4 39.5 30.9C38.9 29.3 36.7 26.1 36 24.4C35.4 22.8 35.5 22.3 35.6 21.1C35.8 20 36.3 18.4 37 17.4C37.6 16.3 39.5 15.1 39.5 15.1ZM16.4 39.6C16.7 39.5 17 39.6 17.2 39.8C17.5 39.9 17.9 40 18.1 40.5C18.2 40.9 18.1 41.8 18.2 42.5C18.4 43.1 18.8 43.7 19.1 44.1C19.3 44.6 19.6 44.8 19.9 45C20.3 45.2 17.4 45.3 21.2 45.4C25.1 45.4 39.1 45.5 43 45.2C47 45 44.6 44.3 45 44C45.4 43.6 45.3 43.5 45.5 43C45.6 42.4 45.4 41.4 45.6 40.9C45.9 40.3 47 39.6 47 39.6L48.5 40.2C48.5 40.2 48.8 41.5 48.9 42C48.9 42.6 48.8 43.1 48.5 43.8C48.3 44.4 47.9 45.2 47.5 45.9C47 46.5 46.5 46.9 45.9 47.4C45.2 47.8 47.9 48.2 43.8 48.4C39.6 48.5 25.4 48.8 21.1 48.5C16.7 48.3 18.5 47.8 17.6 47.1C16.8 46.5 16.2 45.6 15.8 45C15.4 44.3 15.4 44.1 15.2 43.5C15.1 42.8 15 41.6 15.1 41C15.1 40.5 15.1 40.6 15.3 40.4C15.6 40.1 16 39.8 16.4 39.6Z"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.9 13.2L28.1 13.2C28.1 13.2 29.2 11.8 28.4 14.2C27.7 16.6 24.3 25.2 23.4 27.6C22.4 29.9 23.2 28.1 22.9 28.4C22.7 28.6 22.1 28.9 22.1 28.9L21.4 28.4C21.4 28.4 20.4 29.9 21.4 27.4C22.3 24.8 26.9 13.2 26.9 13.2ZM37.2 13.2C37.4 13.1 37.8 13.1 38 13.2C38.2 13.2 38.2 13.3 38.5 13.7C38.7 14 38.5 13.2 39.1 15.1C39.8 16.9 41.9 22.8 42.5 24.6C43.2 26.3 43 25.1 43.2 25.6C43.5 26.2 44 27.9 44 27.9L43.1 28.8C43.1 28.8 42.4 28.9 42 27.9C41.5 27 41 24.9 40.2 22.9C39.5 20.8 37.7 17.1 37.1 15.6C36.6 14 36.9 13.6 36.9 13.6C36.9 13.6 37.1 13.2 37.2 13.2ZM14.6 31.4C14.6 31.4 15.2 31.3 15.3 31.4C15.5 31.4 15.7 31.5 15.8 31.8C15.8 32 15.9 32.4 15.8 32.9C15.6 33.3 15.2 33.6 15.1 34.2C14.9 34.9 14.9 35.8 15.1 36.5C15.2 37.3 15.5 38 16.1 38.6C16.8 39.3 18.3 40.2 19.1 40.5C19.8 40.9 19.9 40.9 20.6 41C21.4 41 23.6 41 23.6 41C23.6 41 23.9 40.9 24.1 41.5C24.2 42.2 24.3 44 24.6 45C25 46 25.3 46.8 26.1 47.5C26.8 48.3 28.2 49.1 29.1 49.5C30.1 50 30.9 50.1 31.9 50.1C33 50.2 34.7 50 35.5 49.9C36.4 49.7 36.7 49.5 37.2 49.1C37.8 48.8 38.4 48.3 38.9 47.6C39.4 47 40 46.2 40.2 45.1C40.5 44.1 40.4 42.2 40.5 41.5C40.7 40.8 40.2 41 41 41C41.9 40.9 44.3 41.1 45.5 41C46.6 40.8 47.3 40.2 48 39.9C48.6 39.5 48.8 39.3 49.1 38.6C49.5 38 50.1 36.8 50.2 36C50.4 35.3 50.3 34.7 50.1 34.1C50 33.6 49.6 33.2 49.5 32.9C49.4 32.5 49.5 32 49.5 31.8C49.6 31.5 50 31.4 50 31.4L51 31.6C51 31.6 51.7 32.7 51.9 33.5C52 34.4 52.1 35.9 51.9 37C51.6 38.1 51 39.3 50.4 40.1C49.8 41 48.9 41.5 48.2 41.9C47.6 42.2 47.5 42.3 46.5 42.5C45.5 42.8 42.2 43 42.2 43C42.2 43 42.1 45.3 41.9 46.1C41.6 47 41.3 47.6 40.8 48.4C40.2 49.1 39.8 49.8 38.8 50.4C37.8 50.9 36 51.6 34.8 51.9C33.5 52.1 32.2 52 31.1 51.9C30.1 51.7 29.5 51.6 28.4 51.1C27.4 50.7 25.8 49.8 24.9 49C24.1 48.1 23.5 47.2 23.1 46.1C22.6 45.1 22.1 42.5 22.1 42.5C22.1 42.5 20.2 42.7 19.4 42.5C18.6 42.4 18 42.1 17.4 41.9C16.7 41.6 16.3 41.2 15.8 40.8C15.2 40.3 14.5 39.5 14.2 39C13.8 38.4 13.6 38.2 13.4 37.5C13.3 36.8 13.2 35.5 13.2 34.8C13.2 34 13.2 33.9 13.4 33.4C13.7 32.8 14.6 31.4 14.6 31.4Z"/><polygon fill="currentColor" stroke="none" points="33.3,16.5 33.3,37.4 31.6,37.4 31.6,16.5"/>'
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
      svg: '<rect x="8" y="8" width="48" height="48" rx="5"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.6 13.3C32.7 13.3 33.7 13.2 34.9 13.4C36 13.7 37.5 14.3 38.4 14.8C39.2 15.4 39.6 16 40 16.6C40.5 17.1 40.6 17.3 40.9 18.1C41.1 18.9 41.5 21.4 41.5 21.4C41.5 21.4 44.2 21.5 45.1 21.8C46.1 22 46.8 22.4 47.2 22.8C47.7 23.1 47.7 22.9 48 23.6C48.4 24.2 49.2 25.6 49.5 26.4C49.7 27.3 49.7 27.7 49.5 28.6C49.2 29.4 48 31.4 48 31.4L47.2 31.6L46.5 30.8C46.5 30.8 47.2 29.6 47.5 29.1C47.7 28.5 47.8 28.2 47.8 27.6C47.8 27.1 47.6 26.4 47.5 25.9C47.3 25.5 47.3 25.3 46.8 24.9C46.2 24.4 45.4 23.6 44.2 23.4C43.1 23.1 40.7 23.3 40 23.2C39.2 23.2 39.6 23.3 39.5 22.9C39.5 22.4 39.7 21.2 39.5 20.4C39.4 19.6 39.3 18.8 38.9 18.1C38.4 17.4 37.8 16.6 37 16.1C36.1 15.6 34.8 15.2 33.8 15.1C32.8 14.9 31.9 14.9 30.9 15.1C30 15.2 28.6 15.8 27.9 16.1C27.2 16.5 27.1 16.9 26.8 17.4C26.4 17.8 26.2 17.9 26.1 18.8C25.9 19.6 26.2 21.8 26.1 22.6C25.9 23.3 25.4 23.2 25.4 23.2C25.4 23.2 22.1 22.9 21.1 22.9C20.1 23 19.9 23.4 19.4 23.6C19 23.9 18.8 24.1 18.6 24.6C18.3 25 18 25.6 17.9 26.1C17.7 26.7 17.7 27.3 17.9 27.9C18 28.6 18.7 29.5 18.9 30.1C19 30.6 18.9 30.8 18.9 31.1C18.8 31.3 18.4 31.6 18.4 31.6C18.4 31.6 17.6 31.6 17.2 31.1C16.9 30.7 16.4 29.7 16.2 28.8C16.1 27.8 16.1 26.2 16.2 25.2C16.4 24.3 16.7 23.8 17.4 23.1C18 22.5 19.1 21.7 20.1 21.4C21.2 21.1 23.9 21.4 23.9 21.4C23.9 21.4 24.2 18.9 24.4 18.1C24.7 17.2 25.1 16.6 25.4 16.1C25.8 15.6 25.9 15.4 26.4 15.1C27 14.7 27.8 14.1 28.6 13.8C29.5 13.6 30.6 13.4 31.6 13.3ZM29.9 34C31.3 33.9 33.6 33.9 35 34C36.5 34.2 37.1 34.4 38.5 35C39.8 35.6 42 36.8 43.2 37.6C44.5 38.5 46.2 40.2 46.2 40.2C46.2 40.2 46.6 40.5 47 39.8C47.5 39 48.5 36.3 49 35.5C49.4 34.8 50 35 50 35C50 35 50.8 35.3 51 35.6C51.3 36 52.2 34.7 51.5 36.9C50.7 39 47.5 46.1 46.4 48.5C45.2 51 44.5 51.8 44.5 51.8C44.5 51.8 24.5 51.9 20.4 51.9C16.2 51.8 20.7 53.6 19.6 51.4C18.6 49.1 15.2 41.2 14.2 38.6C13.1 36.1 13.6 36.1 13.6 36.1L14.9 35C14.9 35 15.5 35.2 15.8 35.5C16 35.7 16.1 35.5 16.4 36.2C16.8 37 17.5 39.3 17.9 40C18.2 40.8 18.4 40.5 18.4 40.5C18.4 40.5 22.1 37.5 23.4 36.5C24.8 35.6 25.4 35.5 26.4 35C27.5 34.6 28.4 34.2 29.9 34ZM31.4 35.8C32.3 35.6 32.5 35.5 33.8 35.8C35 36 37.3 36.6 38.6 37.1C40 37.7 40.7 38.2 41.9 39C43 39.8 44.9 41.3 45.5 42C46.2 42.6 46.1 41.6 45.6 42.8C45.2 43.9 42.8 49 42.8 49C42.8 49 25.6 49.1 22.1 49C18.6 49 22.2 49.7 21.8 48.6C21.3 47.6 19.6 44 19.2 43C18.9 41.9 18.8 43 19.4 42.4C20 41.7 21.8 40 22.9 39.2C23.9 38.5 24.7 38 25.6 37.5C26.4 37.1 27.1 36.8 28.1 36.5C29 36.2 30.4 35.9 31.4 35.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.6 16.1C23.9 16 24.2 16 24.4 16.1C24.7 16.3 25.1 16.8 25.1 17.1C25.2 17.5 25.2 17.7 24.9 18.1C24.7 18.4 23.9 19.1 23.8 19.4C23.6 19.8 23.3 19.8 23.8 20.4C24.2 21.1 25.8 22.7 26.2 23.4C26.7 24 26.5 23.8 26.6 24.4C26.6 24.9 26.4 26.4 26.4 26.4C26.4 26.4 25.9 26.7 26.6 26.8C27.4 26.8 30 27 30.9 26.8C31.7 26.5 31.9 25.4 31.9 25.4C31.9 25.4 32.1 24.8 31.8 24.4C31.4 23.9 30.4 23.2 29.9 22.6C29.5 22.1 29.3 21.6 29.1 20.9C29 20.3 29 19.5 29.1 18.9C29.2 18.4 29.3 18 29.8 17.6C30.2 17.1 31.2 16.3 31.6 16.1C32.1 15.8 32.3 16 32.5 16.1C32.8 16.3 33.2 16.7 33.2 17.1C33.3 17.4 33.3 17.7 33 18.1C32.8 18.4 32 19.1 31.9 19.4C31.7 19.8 31.4 19.8 31.9 20.4C32.3 21.1 33.9 22.7 34.4 23.4C34.8 24 34.6 23.7 34.6 24.2C34.7 24.8 34.5 26.6 34.5 26.6C34.5 26.6 38.2 26.8 39.1 26.6C40.1 26.5 39.8 26.1 40 25.8C40.1 25.4 40.4 25.4 40 24.8C39.6 24.1 38 22.7 37.5 21.8C37.1 20.8 37 19.8 37.2 18.9C37.5 18.1 38.3 16.9 38.9 16.4C39.4 16 40.6 16.1 40.6 16.1C40.6 16.1 41.2 16.8 41.4 17.1C41.5 17.3 41.6 17.3 41.4 17.6C41.1 18 40.3 18.8 40 19.2C39.8 19.7 39.6 19.8 40 20.4C40.4 21.1 42 22.7 42.5 23.4C42.9 24 42.7 23.7 42.8 24.2C42.8 24.8 42.5 26.6 42.5 26.6C42.5 26.6 46.2 26.7 47.4 27.1C48.5 27.4 49.1 28.1 49.6 28.8C50.2 29.4 50.4 29.8 50.5 30.9C50.7 31.9 50.8 35.1 50.8 35.1L56.5 34.1L56.9 36.8C56.9 36.8 52.5 37.6 51.5 37.9C50.4 38.1 50.5 38.4 50.5 38.4C50.5 38.4 50.8 43.9 50.5 45.5C50.3 47.1 49.2 48 49.2 48C49.2 48 21.3 48.1 15.6 48C9.8 48 14.9 48 14.6 47.5C14.2 47 13.6 46.6 13.4 45C13.3 43.5 13.4 38.4 13.4 38.4C13.4 38.4 13.6 38.1 12.6 37.9C11.5 37.6 7.2 36.8 7.2 36.8L7.3 34.1L13.2 35.1C13.2 35.1 13.3 31.6 13.4 30.6C13.6 29.5 13.8 29.4 14.1 28.9C14.4 28.4 14.6 27.9 15.2 27.6C15.9 27.2 16.5 26.7 17.8 26.6C19 26.4 21.7 26.7 22.6 26.6C23.6 26.6 23.2 26.5 23.4 26.1C23.6 25.8 23.9 24.8 23.9 24.8C23.9 24.8 21.8 22.7 21.4 21.8C20.9 20.8 20.9 19.8 21.1 18.9C21.2 18.1 21.8 17.2 22.2 16.8C22.7 16.3 23.2 16.2 23.6 16.1ZM17.4 29.6C22.4 29.5 41.6 29.7 46.5 29.9C51.5 30 47.4 30.6 47.4 30.6L16.6 30.8L16.6 30.1C16.6 30.1 12.5 29.6 17.4 29.6ZM16.4 33.8L47.6 33.8C47.6 33.8 47.9 43 47.8 45C47.6 47.1 47.1 46 46.9 46.2C46.6 46.5 50.9 46.6 46 46.5C41.2 46.5 22.5 46.3 17.6 46.1C12.8 46 16.9 45.7 16.6 45.5C16.4 45.2 16.3 46.6 16.2 44.6C16.2 42.7 16.4 33.8 16.4 33.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M13.2 6C19.9 5.9 44 5.8 50.9 6C57.7 6.2 53.1 6.7 54 7.2C54.9 7.8 55.7 8.6 56.2 9.2C56.8 9.9 57.2 10.7 57.5 11.3C57.7 12 57.9 6.6 58 13.2C58 19.7 58.1 44.1 58 50.9C57.8 57.6 57.4 53 56.9 53.9C56.3 54.8 55.5 55.6 54.8 56.2C54 56.9 53.3 57.2 52.6 57.5C52 57.7 57.4 57.9 50.9 58C44.3 58 19.9 58.1 13.2 58C6.4 57.8 11.1 57.4 10.2 56.9C9.2 56.3 8.3 55.5 7.8 54.8C7.2 54 6.8 53.3 6.5 52.6C6.3 52 6.1 57.3 6 50.8C6 44.2 5.9 19.9 6 13.2C6.2 6.4 6.8 10.9 7.2 10.2C7.6 9.4 7.9 8.9 8.4 8.4C8.9 7.9 9.4 7.6 10.2 7.2C10.9 6.8 6.4 6.2 13.2 6ZM13.8 7.5C20.2 7.5 43.8 7.5 50.1 7.5C56.5 7.6 51.4 7.7 52.1 8.1C52.9 8.4 53.9 9 54.5 9.7C55.2 10.3 55.6 11.2 56 11.8C56.3 12.5 56.4 7.5 56.5 13.8C56.5 20.2 56.5 43.8 56.5 50.1C56.4 56.5 56.3 51.4 56 52.1C55.6 52.9 55 53.9 54.4 54.5C53.7 55.2 52.9 55.6 52.1 56C51.4 56.3 56.5 56.4 50.1 56.5C43.8 56.5 20.2 56.5 13.8 56.5C7.5 56.4 12.6 56.3 11.8 56C11.1 55.6 10.1 55 9.4 54.4C8.8 53.7 8.4 52.9 8.1 52.1C7.7 51.4 7.6 56.5 7.5 50.1C7.5 43.8 7.5 20.2 7.5 13.8C7.6 7.5 7.7 12.6 8.1 11.8C8.4 11.1 9 10.1 9.7 9.4C10.3 8.8 11.2 8.4 11.8 8.1C12.5 7.7 7.5 7.6 13.8 7.5ZM20.4 15.6C20.7 15.5 21.2 15.6 21.6 15.8C21.9 16.1 22.2 16.5 22.6 17.2C22.9 18 23.2 18.9 23.4 20.1C23.7 21.4 24 23.4 24.1 24.9C24.3 26.3 24.4 27.2 24.4 29.1C24.4 30.9 24.4 34 24.1 35.8C23.9 37.5 23.6 38.6 23.1 39.9C22.7 41.1 21.4 43.4 21.4 43.4C21.4 43.4 22.5 45 23.1 45.5C23.8 46.1 24.6 46.5 25.2 46.6C25.9 46.8 26.7 46.8 27.4 46.6C28.1 46.5 28.8 46 29.4 45.5C30.1 45.1 31.1 43.8 31.1 43.8C31.1 43.8 30 41.8 29.6 40.8C29.3 39.7 29 38.7 28.8 37.6C28.5 36.6 28.4 35.8 28.2 34.5C28.1 33.2 28.1 31.8 28.1 29.9C28.2 27.9 28.4 24.8 28.6 23.1C28.8 21.3 29.1 20.4 29.4 19.4C29.7 18.3 30.1 17.2 30.4 16.6C30.8 15.9 31.8 15.6 31.8 15.6C31.8 15.6 32.6 15.5 33 15.8C33.4 16.2 33.8 16.7 34.1 17.8C34.5 18.8 35 20.8 35.2 22.4C35.5 23.9 35.6 25.4 35.8 27.1C35.9 28.9 35.9 31.3 35.9 33C35.8 34.6 35.6 35.9 35.4 37.1C35.1 38.4 34.8 39.6 34.4 40.8C34 41.9 33 43.8 33 43.8C33 43.8 34.2 45.4 35 45.9C35.7 46.4 36.5 46.6 37.1 46.8C37.8 46.9 38.2 46.8 38.8 46.6C39.2 46.5 39.5 46.5 40.1 46C40.8 45.6 42 44.4 42.4 44C42.8 43.5 42.8 44 42.5 43.4C42.3 42.7 41.4 41.3 41 40.1C40.5 39 40.2 38.2 40 36.4C39.7 34.5 39.5 31.3 39.5 29.1C39.6 26.8 39.8 24.6 40 22.9C40.3 21.3 40.5 20.1 40.9 18.9C41.2 17.8 41.6 16.8 42 16.2C42.5 15.7 43.6 15.6 43.6 15.6C43.6 15.6 44.7 16.2 45.1 16.9C45.6 17.6 45.8 18.2 46.1 19.8C46.5 21.2 46.9 24 47 25.9C47.2 27.7 47.3 29 47.2 30.9C47.2 32.9 47.1 35.6 46.6 37.6C46.2 39.7 44.5 43.5 44.5 43.5C44.5 43.5 45.4 44.7 46 45.1C46.6 45.6 47.3 46.1 48 46.2C48.8 46.4 49.4 46.5 50.1 46.2C50.9 46 51.9 45.2 52.4 45C52.8 44.8 53 45 53 45L53.4 46C53.4 46 51.5 47.4 50.6 47.6C49.8 47.9 48.9 47.9 48 47.8C47.2 47.6 46.5 47.3 45.8 46.9C45 46.4 43.5 45 43.5 45C43.5 45 41.8 46.8 40.9 47.4C39.9 47.9 38.8 48.2 37.8 48.2C36.7 48.2 35.5 47.9 34.5 47.4C33.6 46.8 32 45.1 32 45.1C32 45.1 30.4 46.8 29.4 47.4C28.5 47.9 27.4 48.2 26.4 48.2C25.3 48.2 24.1 47.9 23.1 47.4C22.2 46.8 20.6 45 20.6 45C20.6 45 19 46.4 18.2 46.9C17.5 47.3 16.8 47.6 15.9 47.8C15.1 47.9 14.1 47.9 13.3 47.6C12.6 47.4 11.6 46.8 11.2 46.5C10.7 46.3 10.7 46 10.7 46L11.1 45C11.1 45 13.1 46 13.8 46.2C14.6 46.5 14.8 46.5 15.4 46.4C16.1 46.2 17 45.9 17.6 45.5C18.3 45 19.6 43.5 19.6 43.5C19.6 43.5 18.5 41.5 18.1 40.5C17.8 39.4 17.5 38.5 17.2 37.1C17 35.8 16.8 33.9 16.8 32.2C16.7 30.6 16.6 29.8 16.9 27.6C17.1 25.3 17.8 20.5 18.1 18.6C18.5 16.8 18.9 16.8 19.2 16.2C19.6 15.7 20 15.6 20.4 15.6ZM20.6 17.2C20.6 17.2 21.2 18 21.6 19.1C21.9 20.1 22.2 21.4 22.4 23.6C22.7 25.9 22.9 30.3 22.9 32.8C22.8 35.2 22.4 37 21.9 38.5C21.5 40 20.4 41.8 20.4 41.8C20.4 41.8 19.6 39.7 19.2 38.8C18.9 37.8 18.8 37.6 18.6 36C18.5 34.3 18.3 31.5 18.4 29.1C18.4 26.6 18.8 23.2 19.1 21.2C19.5 19.3 20.6 17.2 20.6 17.2ZM31.9 17.2C31.9 17.2 32.2 17.2 32.5 17.8C32.7 18.2 33 18.4 33.2 20.2C33.5 22.1 34.1 25.9 34.2 28.6C34.4 31.2 34.3 33.8 34 36C33.6 38.3 32.1 41.9 32.1 41.9C32.1 41.9 31.8 41.8 31.6 41.2C31.3 40.7 30.9 40 30.6 38.8C30.3 37.5 29.8 36.3 29.8 33.6C29.7 31 30.1 25.3 30.2 22.9C30.4 20.6 30.7 20.4 30.9 19.4C31.2 18.5 31.9 17.2 31.9 17.2ZM43.4 17.2C43.4 17.2 43.8 17.6 44 18.2C44.3 18.9 44.6 19.4 44.9 21.2C45.1 23.1 45.6 26.6 45.6 29.1C45.7 31.5 45.5 34.3 45.4 36C45.2 37.6 45 37.8 44.8 38.8C44.5 39.7 43.5 41.8 43.5 41.8C43.5 41.8 42.4 40 42 38.5C41.6 37 41.2 35.2 41.1 32.8C41.1 30.3 41.3 25.9 41.5 23.6C41.8 21.4 42 20.5 42.4 19.4C42.7 18.4 43.4 17.2 43.4 17.2Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.6 8.1L33 8.3C33 8.3 33.4 8.4 33.5 9.4C33.5 10.5 33.5 13.8 33.5 14.8C33.4 15.9 33.2 15.6 33 15.8C32.8 16.1 32.5 16.2 32.2 16.2C31.9 16.3 31.5 16.2 31.2 16.1C31 15.9 30.7 16.3 30.6 15.2C30.4 14 30.4 10.3 30.6 9.2C30.7 8 31.6 8.1 31.6 8.1ZM15.7 14.7C15.7 14.7 16.1 14.1 16.9 14.8C17.8 15.6 20.3 18 21.1 18.9C21.8 19.9 21.3 20 21.2 20.4C21.2 20.7 21 20.9 20.6 21.1C20.3 21.2 20 21.8 19.1 21.1C18.1 20.4 15.6 17.8 14.8 16.9C14.1 15.9 14.8 15.4 14.8 15.4L15.7 14.7ZM47.5 14.7C48.4 13.9 48.1 14.6 48.4 14.7C48.6 14.7 48.9 15 49 15.2C49.2 15.3 49.4 15.4 49.4 15.8C49.4 16.1 49.8 16.1 49 16.9C48.3 17.8 45.8 20.2 45 20.9C44.3 21.7 44.7 21.2 44.4 21.2C44 21.2 43.4 21.2 43.1 20.9C42.9 20.7 42.7 20.3 42.6 19.9C42.6 19.6 42 19.9 42.9 19.1C43.7 18.2 46.5 15.4 47.5 14.7ZM31.4 18.8L32.8 18.9C32.8 18.9 33.3 19 33.5 20.1C33.6 21.1 33.5 24.4 33.5 25.4C33.4 26.5 33.3 26.1 33.1 26.4C33 26.6 32.7 26.8 32.4 26.9C32 26.9 31.4 26.8 31.1 26.6C30.8 26.5 30.6 26.9 30.6 25.8C30.5 24.6 30.4 20.9 30.6 19.8C30.7 18.6 31.4 18.8 31.4 18.8ZM23.4 22.1C23.4 22.1 23.7 21.7 24.6 22.4C25.4 23.2 27.8 25.6 28.6 26.4C29.3 27.3 28.9 27 28.9 27.4C28.8 27.7 28.2 28.6 28.2 28.6C28.2 28.6 27.5 29.2 26.6 28.6C25.6 27.9 23.2 25.4 22.4 24.4C21.7 23.5 22.2 23.1 22.2 23.1L23.4 22.1ZM40 22.1C40 22.1 41.2 22.5 41.5 22.8C41.8 23 41.9 23.3 41.9 23.6C41.8 23.9 42.2 23.7 41.5 24.6C40.7 25.4 38.3 27.8 37.5 28.6C36.6 29.3 36.8 28.9 36.5 28.9C36.3 28.9 36 28.7 35.8 28.6C35.5 28.4 35.2 28.1 35.1 27.8C35.1 27.4 34.5 27.5 35.4 26.6C36.2 25.6 40 22.1 40 22.1ZM9.8 30.4C10.8 30.4 14.2 30.4 15.2 30.6C16.3 30.7 16 31 16.1 31.2C16.3 31.5 16.4 31.9 16.2 32.2C16.1 32.6 16.4 33.2 15.2 33.4C14.1 33.5 10.3 33.5 9.2 33.4C8 33.2 8.2 32.5 8.2 32.5C8.2 32.5 8.1 31.8 8.2 31.4C8.2 31.1 8.4 30.9 8.7 30.8C8.9 30.6 8.7 30.5 9.8 30.4ZM49.4 30.4C50.4 30.4 53.8 30.4 54.9 30.6C55.9 30.7 55.5 30.7 55.6 31.1C55.8 31.4 55.9 32.5 55.9 32.5C55.9 32.5 56 33.2 54.9 33.4C53.7 33.5 49.9 33.5 48.8 33.4C47.6 33.2 48 32.9 47.9 32.6C47.7 32.4 47.6 31.9 47.8 31.6C47.9 31.2 48.2 30.8 48.5 30.6C48.7 30.5 48.3 30.5 49.4 30.4ZM19.8 30.6C20.9 30.4 24.8 30.4 25.9 30.6C27.1 30.7 26.7 31 26.9 31.4C27 31.7 27 32.1 26.9 32.5C26.7 32.8 27.1 33.2 25.9 33.4C24.8 33.5 20.9 33.5 19.8 33.4C18.6 33.2 18.9 32.6 18.8 32.2C18.6 31.9 18.7 31.5 18.9 31.2C19 31 18.6 30.7 19.8 30.6ZM38 30.6C39.2 30.5 43.1 30.5 44.2 30.6C45.4 30.6 44.9 30.8 45 31.1C45.2 31.4 45.3 32 45.2 32.4C45.2 32.7 44.9 33 44.6 33.1C44.4 33.3 44.9 33.4 43.9 33.5C42.8 33.5 39.3 33.6 38.1 33.4C37 33.1 37 32.2 37 32.2C37 32.2 37.1 31.4 37.2 31.1C37.4 30.9 36.9 30.6 38 30.6ZM26.9 35.1C27.9 34.4 27.6 35.1 27.9 35.1C28.1 35.2 28.4 35.4 28.6 35.6C28.7 35.9 28.9 36.2 28.9 36.5C28.9 36.8 29.3 36.6 28.6 37.5C27.8 38.3 25.3 40.7 24.6 41.5C23.8 42.2 24.2 41.7 23.9 41.8C23.7 41.8 23.1 41.7 22.9 41.5C22.6 41.4 22.4 41.1 22.2 40.9C22.1 40.6 21.5 40.7 22.2 39.8C23 38.8 26 35.9 26.9 35.1ZM36.1 35.1C36.1 35.1 36.6 34.6 37.5 35.4C38.4 36.1 40.8 38.6 41.5 39.5C42.3 40.4 41.8 40.4 41.8 40.8C41.7 41.1 41.1 41.5 41.1 41.5C41.1 41.5 40.5 42.2 39.5 41.5C38.6 40.8 36.1 38.2 35.4 37.4C34.6 36.5 35.1 36.1 35.1 36.1L36.1 35.1ZM31.6 37L33 37.4C33 37.4 33.4 37.4 33.5 38.5C33.5 39.5 33.6 42.7 33.5 43.9C33.3 45 32.5 45.1 32.5 45.1L31.2 45C31.2 45 30.7 45.2 30.6 44C30.4 42.9 30.4 39.3 30.6 38.1C30.7 37 31.6 37 31.6 37ZM19.6 42.6C20 42.7 21.1 43.4 21.1 43.4C21.1 43.4 21.8 44 21.1 45C20.4 45.9 17.9 48.4 16.9 49C16 49.7 15.2 49 15.2 49C15.2 49 14.8 48.8 14.8 48.5C14.7 48.1 14.1 48 14.8 47C15.6 46.1 18.2 43.6 19.1 42.9C19.9 42.1 19.3 42.6 19.6 42.6ZM43.9 42.6C44.2 42.5 44.1 42.1 45 42.9C45.8 43.6 48.3 46.1 49 47C49.8 47.8 49.4 47.8 49.4 48.1C49.3 48.5 49 48.8 48.9 49C48.7 49.1 48.7 49.2 48.4 49.2C48 49.3 48 49.8 47 49C46.1 48.3 43.6 45.8 42.9 44.9C42.1 43.9 42.8 43.5 42.8 43.5C42.8 43.5 43.5 42.8 43.9 42.6ZM31.6 47.6L33 48C33 48 33.4 48 33.5 49C33.5 50.1 33.5 53.5 33.5 54.5C33.4 55.6 33.3 55.1 33.1 55.4C33 55.6 32.6 55.8 32.4 55.9C32.1 55.9 31.7 55.9 31.4 55.8C31.1 55.6 30.7 55.9 30.6 54.8C30.4 53.6 30.4 49.9 30.6 48.8C30.7 47.6 31.6 47.6 31.6 47.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M47.2 7C47.2 7 47.1 6 48.5 7.2C49.8 8.5 55.5 14.6 55.5 14.6C55.5 14.6 56.6 14.4 55.4 15.8C54.1 17.1 48 22.9 48 22.9L46.5 22.4L46.4 20.9L50.5 16.4C50.5 16.4 25.5 16.2 19.9 16.4C14.2 16.5 17.6 16.7 16.8 17.1C15.8 17.4 15.2 17.7 14.4 18.4C13.7 19 12.9 19.9 12.3 20.8C11.8 21.6 11.5 22.2 11.3 23.1C11.2 24.1 11.1 25.5 11.2 26.6C11.2 27.6 11.3 28.3 11.8 29.2C12.4 30.2 13.5 31.6 14.2 32.4C15 33.1 15.3 33.2 16.1 33.5C17 33.9 15.4 34.3 19.4 34.5C23.3 34.6 36.4 34.3 40 34.5C43.7 34.6 41.1 35.5 41.1 35.5C41.1 35.5 41 36.6 40.9 36.9C40.7 37.1 43.8 37.2 40.1 37.2C36.5 37.3 23.1 37.4 19.1 37.2C15.2 37.1 17.2 36.9 16.4 36.6C15.5 36.4 14.8 36.2 13.8 35.5C12.7 34.7 11 33.1 10.2 32.1C9.5 31.2 9.4 30.6 9.1 29.9C8.8 29.1 8.5 28.9 8.4 27.6C8.4 26.4 8.2 24 8.7 22.4C9.1 20.7 10 19.1 10.8 17.9C11.7 16.8 12.9 16 13.8 15.3C14.8 14.7 15.6 14.4 16.6 14.2C17.5 13.9 13.9 13.7 19.6 13.6C25.2 13.5 50.5 13.6 50.5 13.6C50.5 13.6 47.1 10 46.4 9.1C45.6 8.1 46.2 8.1 46.2 8.1L47.2 7ZM23.8 26.6C27.4 26.6 40.9 26.5 44.9 26.6C48.8 26.8 46.7 26.9 47.5 27.2C48.4 27.6 49.2 27.8 50.1 28.4C51.1 29.1 52.2 29.8 53 30.9C53.9 32.1 54.8 33.9 55.2 35.4C55.7 36.8 55.6 38.5 55.5 39.8C55.5 41 55 42.1 54.8 43C54.5 43.8 54.3 44.1 53.9 44.8C53.4 45.4 52.9 46.2 52.1 46.9C51.4 47.5 50.6 48.2 49.6 48.8C48.7 49.3 47.5 49.7 46.6 50C45.8 50.2 49.9 50.3 44.4 50.4C38.8 50.4 13.2 50.4 13.2 50.4C13.2 50.4 16.8 54.1 17.6 55C18.3 55.9 17.7 55.5 17.6 55.8C17.6 56 17.1 56.6 17.1 56.6C17.1 56.6 16.8 57.8 15.4 56.6C14.1 55.5 9.9 51.4 8.8 50C7.6 48.7 8.4 48.4 8.4 48.4C8.4 48.4 14.4 42.3 15.8 41C17.1 39.8 16.4 40.9 16.6 41C16.9 41.1 17.3 41.3 17.4 41.6C17.6 42 18.2 42 17.6 43C16.9 43.9 13.2 47.5 13.2 47.5C13.2 47.5 38.4 47.7 44 47.5C49.7 47.4 46.2 47.2 47.1 46.9C48.1 46.5 48.9 46 49.6 45.4C50.4 44.7 51.1 43.8 51.6 43C52.1 42.1 52.4 41 52.6 40.2C52.9 39.5 52.9 39.2 52.9 38.4C52.8 37.5 52.6 36.1 52.2 35.1C51.9 34.2 51.7 33.6 51 32.9C50.2 32.1 48.8 30.9 47.8 30.4C46.7 29.8 48.4 29.6 44.5 29.4C40.5 29.3 27.4 29.5 23.9 29.4C20.3 29.4 23.2 29.3 23.1 29.1C22.9 28.8 22.7 28.5 22.6 28.1C22.6 27.8 22.8 27.4 22.9 27.1C23.1 26.9 20.1 26.7 23.8 26.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.2 16.4C30.7 16.4 31.4 16.3 31.9 16.4C32.4 16.6 32.6 16.5 33.2 17.1C33.9 17.8 35.5 20.2 35.5 20.2L46.9 20.4C46.9 20.4 47.2 20.1 47.2 21.1C47.3 22.2 47.4 26.8 47.4 26.8C47.4 26.8 52.2 26.8 53.2 26.9C54.3 27.1 53.8 27.4 53.9 27.6C54 27.8 54 27.9 53.9 28.1C53.8 28.3 54.3 28.6 53.2 28.8C52.2 28.9 47.5 28.9 47.5 28.9C47.5 28.9 47.4 33.9 47.2 35C47.1 36.2 46.9 35.8 46.9 35.8L46 35.9C46 35.9 45.6 37.2 45.5 35C45.4 32.9 45.5 24.9 45.5 22.8C45.4 20.6 45 22.1 45 22.1C45 22.1 20.8 22 15.8 22.1C10.9 22.1 15.3 22.4 15.3 22.4C15.3 22.4 15.2 38.3 15.4 41.8C15.7 45.2 16 43 16.6 43.4C17.3 43.7 19 43.6 19.6 43.8C20.1 43.9 20 44 20.1 44.2C20.1 44.5 20.1 45 20.1 45C20.1 45 20.2 45.4 19.6 45.5C18.9 45.5 17 45.4 16.1 45.1C15.3 44.9 14.9 44.4 14.4 43.9C14 43.3 13.8 44.5 13.7 42C13.5 39.6 13.6 28.9 13.6 28.9C13.6 28.9 8.6 28.9 7.5 28.8C6.5 28.6 7.2 28.6 7.2 28.4C7.1 28.1 7.2 27.4 7.2 27.4C7.2 27.4 6.6 27 7.7 26.9C8.7 26.9 13.2 26.9 13.2 26.9C13.2 26.9 13.6 27.4 13.7 26.4C13.7 25.4 13.6 22 13.7 20.9C13.8 19.9 12.3 20.5 14.2 20.4C16.2 20.2 25.4 20.2 25.4 20.2C25.4 20.2 26.7 18 27.4 17.4C28 16.7 28.6 16.6 29.1 16.4C29.5 16.3 29.8 16.4 30.2 16.4ZM29.9 18.2C30.3 18.1 30.7 18.2 31.1 18.2C31.4 18.3 31.8 18.5 32.1 18.8C32.5 19 33 19.9 33 19.9L27.9 20.1L27.9 19.6C27.9 19.6 28 19.3 28.4 19.1C28.7 18.8 29.4 18.4 29.9 18.2ZM23.6 38.5C29.2 38.4 50.7 38.4 56.2 38.5C61.8 38.7 57 39.4 57 39.4L56.6 40.1C56.6 40.1 53.8 39.8 52.8 40.4C51.7 40.9 50.2 43.5 50.2 43.5L56.4 43.8L57 44.9C57 44.9 57.2 45.3 56.5 45.5C55.7 45.6 53.5 45.2 52.6 45.5C51.8 45.9 51.7 47.1 51 47.5C50.4 47.8 48.9 47.5 48.9 47.5L50 46L49.6 45.5L30.2 45.5L29.9 46L30.9 47.5C30.9 47.5 29.5 47.8 28.9 47.5C28.2 47.1 28 45.9 27.1 45.5C26.2 45.2 24.1 45.5 23.4 45.5C22.8 45.4 23.1 45.4 23.1 45.1C23 44.9 22.9 44.2 22.9 44.2C22.9 44.2 22.3 43.9 23.4 43.8C24.6 43.6 29.6 43.5 29.6 43.5L27.1 40.4L23.4 40.2L22.9 39.1C22.9 39.1 18.1 38.6 23.6 38.5ZM30.1 40.5L49.9 40.6C49.9 40.6 48.6 42.5 48.1 43C47.7 43.5 49.7 43.5 47.1 43.6C44.6 43.8 35.4 43.8 32.8 43.6C30.1 43.5 31.9 43.1 31.4 42.6C31 42.2 30.4 41.3 30.1 41C29.9 40.6 30.1 40.5 30.1 40.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M33.4 7.2C34.7 7.2 36.9 7.4 37.9 7.5C38.8 7.5 38.8 7.7 39 7.8C39.3 8 39.4 7.8 39.5 8.3C39.5 8.9 39.6 10.8 39.5 11.4C39.5 12.1 39.4 11.9 39.2 12.2C39.1 12.4 38.9 12.6 38.5 12.7C38.2 12.7 37.4 12.3 37.4 12.3L36.8 9.9C36.8 9.9 33.1 9.8 32 9.8C31 9.9 30.6 10.2 30.6 10.2C30.6 10.2 30.8 11.4 30.6 11.8C30.5 12.1 30.1 12.6 30.1 12.6L28.8 12.6C28.8 12.6 28.2 12.5 28.1 11.8C28.1 11 28.4 8.2 28.4 8.2C28.4 8.2 28.7 7.7 29.6 7.5C30.4 7.4 32 7.3 33.4 7.2ZM49.1 12.2C49.8 11.9 49.6 12 50.1 12.3C50.7 12.7 51.4 13.1 52.5 14.2C53.6 15.2 56 17.7 56.8 18.8C57.5 19.8 57.2 19.7 56.9 20.4C56.5 21 55.3 22.1 54.8 22.4C54.2 22.8 53.8 22.7 53.5 22.6C53.2 22.6 53.1 22.5 53 22.2C52.8 22 52.6 21.5 52.8 21.1C52.9 20.6 53.9 19.4 53.9 19.4L49.9 15.3C49.9 15.3 48.6 16.3 48.1 16.4C47.7 16.6 47.5 16.6 47.2 16.4C47 16.3 46.7 16.1 46.5 15.8C46.4 15.6 46.1 15.2 46.5 14.7C47 14.1 48.5 12.6 49.1 12.2ZM32.1 14.2C33.7 14 34.4 14.1 35.6 14.2C36.9 14.4 38.2 14.5 39.6 14.9C41.1 15.4 43.1 16.3 44.4 16.9C45.6 17.6 46.1 18 47 18.8C48 19.5 49.1 20.6 50 21.6C51 22.7 51.9 24 52.5 25.2C53.2 26.5 53.7 27.6 54.1 28.9C54.6 30.3 54.9 31.8 55 33.2C55.2 34.7 55.2 36.2 55 37.5C54.9 38.9 54.6 40.2 54.2 41.5C53.9 42.9 53.3 44.2 52.6 45.5C52 46.7 51.1 47.9 50.2 49C49.4 50 48.5 50.8 47.5 51.6C46.5 52.5 45.5 53.3 44.2 54C43 54.6 41.4 55.3 40 55.8C38.5 56.2 37.2 56.4 35.6 56.5C34.1 56.6 31.8 56.5 30.4 56.4C29.1 56.2 28.4 55.9 27.2 55.5C26.1 55.1 25 54.8 23.6 54C22.3 53.1 20.1 51.4 19.1 50.5C18 49.6 17.9 49.3 17.2 48.5C16.6 47.8 15.8 46.3 15.4 45.8C15.1 45.2 15.3 45.3 15.4 45C15.5 44.8 15.7 44.4 16.1 44.2C16.4 44.1 17.4 44 17.4 44C17.4 44 20.8 48.2 22.1 49.5C23.4 50.7 23.9 50.9 25.1 51.5C26.4 52.2 27.8 52.9 29.4 53.2C31.1 53.6 33.2 53.8 34.8 53.8C36.3 53.7 37.4 53.6 38.9 53.1C40.4 52.7 42.3 51.9 43.8 51C45.2 50 46.7 48.7 47.8 47.5C48.8 46.4 49.6 45.1 50.2 44C50.9 42.8 51.3 41.7 51.6 40.5C52 39.4 52.2 38.2 52.4 37C52.5 35.9 52.5 34.9 52.4 33.8C52.2 32.6 51.9 31.4 51.6 30.4C51.4 29.3 51.2 28.7 50.6 27.6C50.1 26.6 49.2 25 48.4 23.9C47.5 22.9 46.5 21.9 45.5 21.1C44.4 20.2 43.2 19.4 42 18.9C40.9 18.3 39.6 17.9 38.5 17.6C37.5 17.2 36.5 17.1 35.5 17.1C34.5 17 33.7 16.9 32.5 17.1C31.4 17.2 29.9 17.4 28.6 17.8C27.4 18.1 26.1 18.6 25.1 19.2C24 19.9 23 20.6 22.1 21.4C21.1 22.1 20.5 22.7 19.6 23.8C18.8 24.8 17.6 27 17.1 27.6C16.5 28.3 16.4 27.9 16.1 27.9C15.7 27.8 15.4 27.6 15.2 27.4C14.9 27.1 14.6 26.9 14.8 26.1C15.1 25.4 15.6 24.3 16.6 23.1C17.7 21.8 19.5 19.7 21.1 18.4C22.8 17.2 24.6 16.2 26.4 15.6C28.3 14.9 30.6 14.5 32.1 14.2ZM33.5 22.1C33.9 22 34.2 22.1 34.5 22.4C34.7 22.6 35 21.6 35.1 23.6C35.3 25.6 35.1 34.4 35.1 34.4C35.1 34.4 41.8 34.5 43.2 34.5C44.7 34.6 43.6 34.6 43.9 34.8C44.1 34.9 44.5 35.6 44.5 35.6L43.9 37.1C43.9 37.1 35.2 37.4 33.4 37.4C31.5 37.3 32.5 36.8 32.5 36.8L32.4 23.1C32.4 23.1 33.2 22.3 33.5 22.1ZM8 29.8C8 29.8 8 29.1 9.1 30.1C10.1 31.1 14.4 35.8 14.4 35.8C14.4 35.8 15.2 35.6 14.2 36.6C13.3 37.7 10 40.9 9.1 41.9C8.1 42.8 8.7 42.2 8.3 42.1C8 42.1 7.2 41.5 7.2 41.5C7.2 41.5 6.5 41.1 7.2 40.2C7.8 39.4 10.5 36.9 11.2 36.1C11.8 35.4 11.8 36.5 11.2 35.8C10.5 35 7.9 32.7 7.2 31.9C6.6 31 7.2 30.4 7.2 30.4L8 29.8ZM15.3 29.8C15.3 29.8 15.4 29.1 16.4 30.1C17.5 31 20.9 34.4 21.8 35.5C22.6 36.5 21.9 36.2 21.8 36.5C21.6 36.8 22.1 36.3 21.1 37.2C20.2 38.2 15.8 42.1 15.8 42.1L14.4 41.5C14.4 41.5 13.7 41.5 14.3 40.5C15 39.6 18.6 35.9 18.6 35.9C18.6 35.9 15.2 32.6 14.6 31.8C13.9 30.9 14.3 30.8 14.3 30.8L15.3 29.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.2 9.1C18.5 9.1 19.2 9.6 19.2 9.6C19.2 9.6 19.8 9.1 19.4 10.8C19.1 12.4 17.8 17.8 17.1 19.4C16.5 20.9 15.8 20.2 15.8 20.2C15.8 20.2 15 19.9 14.8 19.6C14.7 19.4 14.3 20.4 14.7 18.8C15 17.1 16.6 11.5 17.1 9.9C17.5 8.4 17.4 9.4 17.6 9.2C17.8 9.1 18 9 18.2 9.1ZM35 9.1C35.2 9 35.5 9.1 35.8 9.2C36 9.4 35.9 8.5 36.4 9.9C36.8 11.4 38.2 16.5 38.5 18.1C38.9 19.8 38.5 19.6 38.5 19.6L37.5 20.2C37.5 20.2 36.9 20.1 36.6 19.9C36.4 19.8 36.6 20.7 36.1 19.1C35.7 17.6 34.3 12.4 34 10.8C33.6 9.3 34 9.7 34 9.7C34 9.7 34.7 9.1 35 9.1ZM23.6 10.2C23.8 10.1 24.2 10.2 24.4 10.3C24.7 10.5 24.8 10.4 24.9 10.8C24.9 11.3 25 11.5 24.9 13.2C24.7 14.8 24.3 19.2 24.1 20.6C23.9 21.9 23.9 21.2 23.6 21.4C23.4 21.5 22.6 21.6 22.6 21.6C22.6 21.6 21.9 21.2 21.8 20.8C21.6 20.3 21.6 20.5 21.8 18.9C21.9 17.4 22.3 12.7 22.4 11.2C22.6 9.8 22.7 10.6 22.9 10.4C23 10.3 23.3 10.2 23.6 10.2ZM29.4 10.2C29.8 10 30.2 10.2 30.2 10.2C30.2 10.2 30.7 9.8 30.9 11.6C31.2 13.3 31.6 20.6 31.6 20.6L30.6 21.6C30.6 21.6 30 21.6 29.8 21.4C29.5 21.2 29.4 22.1 29.1 20.4C28.9 18.6 28.4 10.9 28.4 10.9C28.4 10.9 29.1 10.3 29.4 10.2ZM14.1 23.4L15.3 23.6C15.3 23.6 16 23.3 15.7 24.9C15.3 26.6 13.9 32.2 13.2 33.8C12.6 35.3 11.9 34.5 11.9 34.5L11.1 33.9C11.1 33.9 10.6 34.2 10.9 32.5C11.3 30.9 12.7 25.6 13.2 24.1C13.8 22.5 14.1 23.4 14.1 23.4ZM38.5 23.4C38.7 23.2 39.1 23.2 39.4 23.4C39.6 23.5 39.6 22.6 40.1 24.1C40.6 25.6 42 30.8 42.4 32.4C42.7 33.9 42.3 33.1 42.1 33.4C42 33.6 41.8 33.8 41.5 33.9C41.2 33.9 40.6 33.8 40.4 33.6C40.1 33.5 40.3 34.4 39.9 33C39.4 31.5 38.1 26.5 37.8 25.1C37.4 23.6 37.6 24.4 37.8 24.1C37.9 23.9 38.2 23.5 38.5 23.4ZM21.9 24.9C21.9 24.9 22.6 24.8 22.9 24.9C23.1 25 23.4 25.1 23.6 25.4C23.7 25.8 23.8 25 23.6 26.6C23.5 28.3 23.1 33.7 22.9 35.2C22.7 36.8 22.4 36 22.4 36L21.2 36.1C21.2 36.1 20.6 35.8 20.4 35.4C20.3 35 20.3 35.3 20.4 33.8C20.6 32.2 20.9 27.4 21.1 25.9C21.4 24.5 21.9 24.9 21.9 24.9ZM30.4 24.9L31.8 25.1C31.8 25.1 32 24.7 32.2 26.4C32.5 28 33 33.5 33 35.1C32.9 36.8 32.1 36.1 32.1 36.1L30.9 36C30.9 36 30.6 36.5 30.4 35C30.2 33.6 29.9 28.8 29.8 27.2C29.6 25.7 29.6 26 29.8 25.6C29.9 25.2 30.4 24.9 30.4 24.9ZM55.5 32.8C56 32.7 56.5 33.1 56.5 33.1C56.5 33.1 56.9 33.8 56.9 34.1C56.8 34.5 57.1 34.4 56.4 35C55.6 35.7 52.5 38 52.5 38C52.5 38 52.6 43.6 52.5 45C52.4 46.5 52.2 46.1 52 46.6C51.7 47.1 52.1 46.9 50.8 48C49.4 49.2 45.3 52.2 43.8 53.4C42.2 54.5 42.6 54.7 41.5 55C40.5 55.2 37.6 54.8 37.6 54.8C37.6 54.8 47.4 47.5 49.5 45.9C51.5 44.2 49.9 45.3 50 44.9C50.1 44.4 50 43.8 50 43C50.1 42.3 50 40.1 50 40.1L49.6 40C49.6 40 34 52.4 30.1 54.9C26.1 57.3 25.9 55 25.9 55C25.9 55 49.1 37.2 54 33.5C59 29.8 55.1 32.8 55.5 32.8ZM10.2 37.5C10.2 37.5 11 37.5 11.2 37.6C11.5 37.8 11.7 37.9 11.8 38.1C11.8 38.4 12.2 37.4 11.8 39C11.5 40.6 10.1 46.2 9.6 47.8C9.1 49.3 9.1 48.4 8.8 48.5C8.6 48.7 8.4 48.7 8.2 48.6C7.9 48.6 7.4 48.3 7.2 48C7.1 47.8 6.7 48.8 7 47.2C7.4 45.7 8.8 40.2 9.3 38.5C9.9 36.9 10.2 37.5 10.2 37.5ZM20.9 39.5L22.2 40C22.2 40 22.5 40 22.4 41.6C22.2 43.3 21.9 48.2 21.6 49.8C21.4 51.2 21.3 50.5 21.1 50.6C20.8 50.8 20.1 50.9 20.1 50.9C20.1 50.9 19.3 50.3 19.1 50C19 49.6 19 50.2 19.1 48.6C19.3 47.1 19.7 42.2 19.9 40.8C20 39.3 19.9 40.3 20.1 40C20.2 39.8 20.9 39.5 20.9 39.5ZM32 39.5C32.3 39.4 32.7 39.5 33 39.6C33.2 39.8 33.3 39.5 33.5 40.4C33.6 41.2 33.8 43.8 33.9 44.6C33.9 45.5 33.8 45.8 33.8 45.8L32.6 46.5L31.6 46C31.6 46 31.4 45.4 31.2 44.5C31.1 43.6 31 41.4 30.9 40.6C30.9 39.9 31 40.2 31.1 40C31.3 39.8 31.7 39.5 32 39.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M42.6 8.8C42.6 8.8 43.1 8.8 43.4 8.9C43.6 9.1 43.5 8.1 43.9 9.6C44.2 11 45.3 16 45.6 17.4C46 18.9 46.1 18.2 46.1 18.2C46.1 18.2 53.7 14.5 55.4 13.7C57 12.8 56.1 13.4 56.1 13.4L57 14.2C57 14.2 57.8 14 56.5 15.4C55.3 16.8 49.8 22.6 49.8 22.6C49.8 22.6 48.9 22.4 50 23.1C51 23.7 55.9 26.4 55.9 26.4L55.9 27.2C55.9 27.2 56.3 27.6 55.1 27.8C54 27.9 49.9 27.8 48.8 27.9C47.6 28.1 48.2 28.4 48.2 28.4C48.2 28.4 50.1 35.6 50.5 37.1C50.8 38.7 50.6 37.6 50.5 37.9C50.3 38.1 49.8 38.5 49.8 38.5C49.8 38.5 49.6 39.3 48.5 38C47.5 36.8 43.2 30.9 43.2 30.9C43.2 30.9 43.3 30.3 42.5 31.1C41.8 32 39.4 35 38.5 35.9C37.7 36.7 37.5 36 37.5 36C37.5 36 37.1 35.6 37 35.4C37 35.1 36.9 35.4 37 34.2C37.2 33.1 38 28.2 38 28.2C38 28.2 32.4 28 31.1 27.9C29.9 27.7 30.4 27.1 30.4 27.1C30.4 27.1 29.8 26.8 30.9 26.1C31.9 25.3 36.8 22.8 36.8 22.8C36.8 22.8 33.5 18.3 32.9 17.2C32.2 16.2 32.8 16.2 32.8 16.2C32.8 16.2 33.1 15.8 33.4 15.8C33.6 15.7 33 15.3 34.1 15.8C35.3 16.2 40.1 18.2 40.1 18.2C40.1 18.2 41.4 11.3 41.9 9.8C42.3 8.2 42.6 8.8 42.6 8.8ZM43 14.9C43 14.9 43.7 18.7 44 19.6C44.4 20.6 44.9 20.9 44.9 20.9C44.9 20.9 45.2 21 45.6 20.9C46.1 20.7 46.8 20.4 47.8 19.9C48.7 19.3 51.5 17.6 51.5 17.6L46.8 22.9C46.8 22.9 46.8 23.7 47.5 24.1C48.1 24.6 50.8 25.8 50.8 25.8C50.8 25.8 47.5 25.9 46.6 26.1C45.8 26.2 45.9 26.9 45.9 26.9L47.5 33L43.8 28.1C43.8 28.1 43.2 27.5 42.5 28.1C41.9 28.6 39.8 31.1 39.8 31.1L40.5 26.8C40.5 26.8 40.5 26.2 39.8 26.1C39 25.9 35.6 25.9 35.6 25.9C35.6 25.9 38.2 24.6 38.9 24.1C39.5 23.7 39.5 23.4 39.5 23.4C39.5 23.4 39.8 23.1 39.4 22.4C38.9 21.8 37 19.4 37 19.4C37 19.4 39.9 20.6 40.6 20.9C41.4 21.1 41.6 20.8 41.6 20.8C41.6 20.8 42.1 20.3 42.4 19.4C42.6 18.4 43 14.9 43 14.9ZM12.7 15.2C15.9 15.1 26.7 15.2 29.6 15.2C32.6 15.3 30.2 15.5 30.4 15.8C30.5 16 30.6 16.6 30.4 16.9C30.3 17.3 32.7 17.5 29.8 17.6C26.8 17.8 15.9 17.7 12.8 17.9C9.8 18 11.9 18.2 11.4 18.6C11 18.9 10.4 19.5 10.2 20.1C9.9 20.6 9.7 15.8 9.7 21.6C9.6 27.5 9.7 55 9.7 55L7.2 55.1C7.2 55.1 6.8 27.5 7 21.2C7.3 15 7.9 18.7 8.4 17.9C9 17 9.6 16.6 10.3 16.1C11.1 15.7 9.4 15.4 12.7 15.2ZM13.8 26.1C14.1 26 14.5 26 14.8 26.1C15.2 26.3 15.5 25.8 15.7 26.9C15.8 28.1 15.6 31.9 15.7 33C15.7 34 13.1 33.2 15.9 33.2C18.8 33.3 29.9 33.1 32.9 33.2C35.9 33.4 34 33.9 34 33.9C34 33.9 34.1 34.6 34 35C33.9 35.3 33.6 35.6 33.4 35.8C33.1 35.9 35.5 35.9 32.2 35.9C29 35.9 17.1 35.9 13.8 35.8C10.7 35.6 13.2 36.3 13.1 34.9C12.9 33.4 12.9 28.5 13.1 27.1C13.2 25.6 13.6 26.3 13.8 26.1ZM14.1 45.4C14.1 45.4 14.8 45.4 15.1 45.5C15.3 45.7 15.6 45.2 15.7 46.4C15.8 47.5 15.6 51.2 15.7 52.2C15.7 53.3 11.9 52.5 15.9 52.5C20 52.6 39.9 52.5 39.9 52.5C39.9 52.5 39.9 47.6 40 46.5C40.2 45.3 40.4 45.7 40.6 45.5C40.9 45.4 41.6 45.4 41.6 45.4C41.6 45.4 42.5 44.9 42.6 46.4C42.8 47.8 42.8 52.6 42.6 54C42.5 55.5 46.5 54.9 41.8 55C37 55.2 18.7 55.2 13.9 55C9.2 54.9 13.2 55.6 13.1 54.1C12.9 52.7 12.9 47.7 13.1 46.2C13.2 44.8 14.1 45.4 14.1 45.4Z"/><polygon fill="currentColor" stroke="none" points="48.7,40.5 48.7,55.2 46.0,55.2 46.0,40.5"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M27.1 6.8C27.8 6.8 28.9 6.8 29.6 7C30.2 7.3 30.7 8 31.1 8.4C31.4 8.9 31.5 9.3 31.6 9.8C31.8 10.3 30.8 10.4 31.6 11.4C32.5 12.5 35.8 14.8 36.9 15.9C37.9 17.1 37.8 17.3 38.1 18.1C38.5 18.8 38.9 20.4 38.9 20.4C38.9 20.4 40.1 20.6 40.5 20.8C40.8 20.9 41 20.2 41.1 21.4C41.3 22.7 41.3 26.8 41.1 28.1C41 29.5 40.2 28.8 40 29.4C39.8 29.9 40 31.2 40 31.6C39.9 32.1 39.6 31.9 39.6 31.9L37.6 31.6C37.6 31.6 37.7 29.9 37.5 29.4C37.4 29 40.1 29 37 28.9C33.8 28.9 21.9 28.9 18.8 28.9C15.6 29 18.1 29.4 18.1 29.4C18.1 29.4 18.1 47 18.1 50.8C18.2 54.5 18.4 51.7 18.6 52C18.9 52.4 17.6 52.7 19.9 52.9C22.1 53 30.1 52.8 32.2 52.9C34.4 52.9 32.8 53.2 32.8 53.2L32.8 54.8C32.8 54.8 34.2 55.3 31.9 55.4C29.5 55.4 21.3 55.4 18.9 55.1C16.4 54.9 17.5 54.5 16.9 53.9C16.4 53.2 15.9 55.6 15.7 51.5C15.4 47.4 15.7 29.2 15.7 29.2C15.7 29.2 14.8 28.9 14.6 28.6C14.3 28.3 14.3 28.6 14.2 27.4C14.2 26.3 14.3 22.7 14.3 21.6C14.4 20.4 14.8 20.8 14.8 20.8C14.8 20.8 16 20.8 16.4 20.8C16.7 20.7 16.5 21.1 16.9 20.4C17.2 19.6 17.7 17.4 18.8 16.1C19.8 14.7 22.5 13 23.4 12.1C24.2 11.2 23.8 11.2 23.9 10.7C24.1 10.1 23.9 9.4 24.1 8.9C24.2 8.5 24.4 8.3 24.8 8C25.1 7.6 25.6 7.2 25.9 7C26.3 6.9 26.5 6.8 27.1 6.8ZM27.1 9.4C27.5 9.4 28.6 9.7 28.6 9.7C28.6 9.7 29 11.9 29.4 12.7C29.7 13.4 29.9 13.7 30.6 14.2C31.2 14.8 32.6 15.4 33.4 16.1C34.1 16.7 34.8 17.5 35.2 18.1C35.7 18.6 35.8 18.8 35.9 19.2C35.9 19.7 35.6 20.6 35.6 20.6L19.9 20.6C19.9 20.6 19.8 19.8 19.9 19.4C20 18.9 19.6 18.9 20.6 17.9C21.5 16.9 24.7 14.4 25.6 13.3C26.6 12.3 26.2 12.4 26.4 11.8C26.5 11.3 26.3 10.5 26.4 10.1C26.6 9.7 26.8 9.5 27.1 9.4ZM17.1 23.1L38.2 23.1C38.2 23.1 38.6 23.2 38.6 23.6C38.7 24.1 38.7 25.4 38.6 25.9C38.6 26.3 38.1 26.6 38.1 26.6L17.1 26.6L17.1 23.1ZM37.9 36.2L39.9 36.5C39.9 36.5 40.1 39.3 40.5 40.5C41 41.6 41.8 42.6 42.6 43.4C43.5 44.1 44.6 44.8 45.5 45C46.5 45.3 47.7 44.9 48.4 45.1C49 45.4 49.5 46.4 49.5 46.4C49.5 46.4 49.5 46.8 49.4 47C49.2 47.3 49.1 47.8 48.5 48C47.8 48.1 46.5 47.8 45.6 48C44.8 48.3 43.9 48.8 43.2 49.2C42.6 49.7 42.4 49.8 41.9 50.5C41.3 51.3 40.4 53 40 54C39.7 54.9 40.1 55.8 40 56.2C39.8 56.8 39.5 56.9 39.1 57C38.8 57 37.8 56.8 37.8 56.8C37.8 56.8 37.4 56 37.2 55.4C37.1 54.7 37.4 53.7 37 52.8C36.6 51.8 35.7 50.5 34.9 49.8C34 49 33 48.3 32 48C31.1 47.8 29.8 48.2 29.1 48C28.5 47.8 28.3 47.2 28.1 46.9C28 46.5 28 46.4 28.1 46.1C28.3 45.9 28.3 45.4 28.9 45.2C29.6 45.1 30.9 45.4 31.9 45C33 44.7 34.4 43.8 35.2 43C36.1 42.2 36.6 41.4 37 40.2C37.5 39.1 37.9 36.2 37.9 36.2ZM38.5 42.9C38.5 42.9 38.2 42.2 39 42.9C39.7 43.5 42.6 46.5 42.6 46.5L38.8 50.2C38.8 50.2 37.5 48.6 36.9 48C36.2 47.4 34.9 46.6 34.9 46.6C34.9 46.6 37 44.9 37.6 44.2C38.2 43.6 38.5 42.9 38.5 42.9Z"/>'
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
