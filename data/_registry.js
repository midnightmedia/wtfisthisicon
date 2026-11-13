/* WTF is this icon? — icon registry.
 * Loaded before every other data/*.js file. Each data file calls WTF.add([...]).
 * See data/README.md for the icon format and drawing rules. */
window.WTF = window.WTF || {};

WTF.categories = [
  { id: "car",         name: "Car dashboard",      blurb: "Warning lights that glow at you",        tile: "dash"   },
  { id: "carcontrols", name: "Car buttons",        blurb: "Climate, lights & the mystery switches", tile: "dash"   },
  { id: "laundry",     name: "Clothing labels",    blurb: "The hieroglyphs on the care tag",        tile: "label"  },
  { id: "washer",      name: "Washing machine",    blurb: "Dials, buttons & blinking lights",       tile: "panel"  },
  { id: "dryer",       name: "Tumble dryer",       blurb: "Why is it beeping?",                     tile: "panel"  },
  { id: "oven",        name: "Oven, hob & microwave", blurb: "Fans, squiggles & lines",             tile: "panel"  },
  { id: "dishwasher",  name: "Dishwasher",         blurb: "Salt? Rinse aid? Sparkles?",             tile: "panel"  },
  { id: "tech",        name: "Phones & gadgets",   blurb: "Ports, status bars & buttons",           tile: "device" },
  { id: "packaging",   name: "Packaging & labels", blurb: "Recycling, safety & small print",        tile: "pack"   }
];

WTF.icons = WTF.icons || [];
WTF.add = function (list) {
  for (var i = 0; i < list.length; i++) WTF.icons.push(list[i]);
};

// Wraps an icon's inner markup in the standard 64×64 SVG frame.
WTF.svg = function (icon, label) {
  return '<svg class="ico" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="3.5" ' +
    'stroke-linecap="round" stroke-linejoin="round" ' +
    (label ? 'role="img" aria-label="' + String(label).replace(/"/g, "&quot;") + '"' : 'aria-hidden="true"') +
    ">" + icon.svg + "</svg>";
};
