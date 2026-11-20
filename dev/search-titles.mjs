// The phrase each icon page leads its <title> with, worded the way people search:
// "Drain symbol on a washing machine", not just "Drain".
//
//   searchTitle(icon)  ->  "Oil pressure warning light on the dashboard"
//
// Built from the icon's name plus its category's wording below. A name that already ends in a
// noun like "light", "button" or "symbol" doesn't get another one, a name that already says
// where it lives ("oven", "fridge") skips the "on an oven" part, and a trailing "(…)" moves to
// the end so the main words come first. Anything the rules word badly goes in OVERRIDES.
const CATS = {
  car: { noun: "light", where: "on the dashboard", has: /dashboard/i },
  ev: { noun: "light", where: "on an electric car dashboard", has: /dashboard/i },
  carcontrols: { where: "in a car" },
  laundry: { where: "on clothing labels" },
  washer: { where: "on a washing machine", has: /washing machine/i },
  dryer: { where: "on a tumble dryer", has: /dryer/i },
  oven: { where: "on an oven", has: /oven|microwave|hob/i },
  airfryer: { where: "on an air fryer", has: /air fryer/i },
  dishwasher: { where: "on a dishwasher", has: /dishwasher/i },
  fridge: { where: "on a fridge freezer", has: /fridge|freezer/i },
  coffee: { where: "on a coffee machine", has: /coffee machine|espresso machine|nespresso/i },
  aircon: { where: "on an air conditioner" },
  heating: { where: "on a boiler", has: /boiler|thermostat/i },
  toilet: { noun: "button", where: "on a Japanese toilet" },
  tech: { where: "" },
  keyboard: { noun: "key", where: "on a keyboard", has: /keyboard/i },
  power: { where: "on electrical products" },
  recycling: { where: "on packaging" },
  packaging: { where: "on packaging" },
  medicine: { where: "on medical packaging" },
};

// Names that already end in what they are
const NOUN_END = /\b(symbols?|icon|buttons?|keys?|lights?|logo|mark|label|sensor|switch|dial|gauge|indicator|figure|alarm)$/i;

// Status bar icons: "on a phone" says where they are
const PHONE = new Set("tech-sos tech-camera-in-use tech-mic-in-use tech-time-bubble tech-padlock tech-battery-charging tech-dual-sim tech-no-signal tech-satellite tech-wifi-calling tech-vpn tech-call-forwarding tech-missed-call tech-silent tech-dnd-android tech-wifi-no-internet tech-data-arrows tech-data-saver tech-tty tech-carplay tech-alarm tech-vibrate tech-rotation-lock tech-location tech-roaming tech-network-type tech-volte tech-hotspot".split(" "));

const OVERRIDES = {
  "car-parking-brake": "Parking brake light on the dashboard",
  "car-fuel-side-arrow": "Arrow next to the fuel pump on the dashboard",
  "car-master-warning": "Triangle with exclamation mark light on the dashboard (master warning)",
  "car-low-beam": "Dipped headlights symbol on the dashboard (low beam)",
  "car-turn-signals": "Indicator / turn signal arrows on the dashboard",
  "carcontrols-hazard": "Hazard warning lights button in a car",
  "laundry-dry-clean-p": "P in a circle on clothing labels (dry clean)",
  "laundry-dry-clean-f": "F in a circle on clothing labels (dry clean)",
  "laundry-wet-clean-w": "W in a circle on clothing labels (professional wet clean)",
  "keyboard-page-up-down": "Page Up and Page Down keys on a keyboard",
  "heating-thermostat-flame": "Flame on a thermostat (calling for heat)",
  "fridge-dispenser-water": "Water dispenser symbol on a fridge freezer",
  "tech-wifi-calling": "Phone with Wi-Fi waves symbol (Wi-Fi calling)",
  "tech-call-forwarding": "Phone with an arrow in the status bar (call forwarding)",
  "tech-missed-call": "Phone with a bent arrow in the status bar (missed call)",
  "tech-tty": "Phone handset over a keyboard symbol (TTY)",
  "medicine-caution": "Triangle with exclamation mark symbol on medical packaging (caution)",
  "oven-light": "Oven light symbol",
  "oven-auto-flashing": "AUTO flashing on an oven clock",
  "oven-hob-ring-selector": "Hob ring symbols on oven knobs",
  "oven-hob-dual-zone": "Dual zone / extended ring symbol on a hob",
  "oven-hob-residual-heat": "Residual heat 'H' on a hob",
  "oven-hob-pan-detect": "No pan / unsuitable pan symbol on an induction hob",
  "oven-hob-boost": "Power boost 'P' on a hob",
  "oven-induction-compatible": "Induction-compatible symbol on pans (coil)",
  "oven-child-lock": "Child lock / control lock symbol on an oven or hob",
  "fridge-fan": "Fan switch inside the fridge",
  "fridge-ok-indicator": "'OK' temperature indicator in a fridge",
  "coffee-vertuo-light": "Nespresso Vertuo orange light",
  "coffee-flashing-power": "Flashing lights on a coffee machine while it warms up",
  "coffee-pressure-gauge": "Pressure gauge on a Sage espresso machine",
  "heating-trv": "Radiator valve numbers (TRV)",
  "heating-hot-water-cylinder": "Hot water cylinder / immersion heater symbol",
  "heating-holiday": "Holiday mode symbol on a thermostat (suitcase)",
  "heating-comfort-eco": "Sun and moon symbols on a thermostat (comfort and eco)",
  "heating-boost": "Boost button on a boiler or programmer (+1 hour)",
  "heating-heat-waves": "Wavy lines going up on a thermostat (heat on)",
  "toilet-flush-button": "Flush button on a Japanese toilet wall panel (流す)",
  "toilet-flush-sensor": "Hand-wave flush sensor on a Japanese toilet",
  "tech-power": "Power / standby button symbol",
  "tech-power-switch": "I and O symbols on a switch",
  "tech-sos": "SOS in the status bar on a phone",
  "tech-camera-in-use": "Green dot at the top of a phone screen",
  "tech-mic-in-use": "Orange dot at the top of a phone screen",
  "tech-time-bubble": "Coloured bubble around the time on an iPhone",
  "tech-padlock": "Padlock at the top of a phone screen",
  "tech-vpn": "Key in the status bar on a phone (VPN)",
  "tech-carplay": "Play button in a C on an iPhone (CarPlay)",
  "recycling-mobius-loop": "Recycling symbol on packaging (Mobius loop)",
  "recycling-mobius-loop-percent": "Recycling symbol with a percentage",
  "recycling-weee": "Crossed-out wheelie bin symbol (WEEE)",
  "recycling-oprl-recycle": "Recycle label on UK packaging",
  "recycling-oprl-dont-recycle": "Don't recycle label on UK packaging",
  "recycling-oprl-rinse": "Rinse label on UK packaging",
  "recycling-oprl-lid-on": "Lid on / Cap on label on UK packaging",
  "recycling-oprl-remove-film": "Remove film / sleeve label on UK packaging",
  "recycling-oprl-bags-at-supermarket": "Recycle with bags at large supermarkets label",
  "recycling-alu": "\"alu\" recycling mark",
  "recycling-metal-recycles-forever": "Metal Recycles Forever logo",
  "recycling-glass-bottle-bank": "Glass recycling figure on packaging (bottle into a bin)",
  "recycling-seedling": "Seedling logo (industrially compostable)",
  "recycling-ok-compost-home": "OK compost HOME logo",
  "recycling-ok-compost-industrial": "OK compost INDUSTRIAL logo",
  "recycling-fsc": "FSC logo on packaging (tree with a tick)",
  "recycling-pefc": "PEFC logo on packaging (two trees in a circle)",
  "recycling-batteries": "Crossed-out bin with Pb, Cd or Hg on batteries",
  "recycling-single-use-plastic": "Turtle symbol on packaging (plastic in product)",
  "recycling-triman": "Triman logo on packaging (France)",
  "recycling-pfand": "German deposit logo on bottles (DPG Pfand)",
  "recycling-recycled-paperboard": "100% Recycled Paperboard symbol (US)",
  "packaging-pao": "Open jar symbol on cosmetics (period after opening)",
  "packaging-ce-mark": "CE mark",
  "packaging-ukca": "UKCA mark",
  "packaging-food-safe": "Food safe symbol (glass and fork)",
  "packaging-microwave-safe": "Microwave safe symbol",
  "packaging-freezer-safe": "Freezer safe symbol (snowflake)",
  "packaging-dishwasher-safe": "Dishwasher safe symbol",
  "packaging-oven-safe": "Oven safe symbol",
  "packaging-under-3": "Not suitable for children under 3 symbol",
  "packaging-ghs-flammable": "Flammable hazard symbol (flame in a red diamond)",
  "packaging-ghs-corrosive": "Corrosive hazard symbol (red diamond)",
  "packaging-ghs-exclamation": "Harmful / irritant hazard symbol (exclamation mark in a red diamond)",
  "packaging-ghs-environment": "Hazardous to the environment symbol (dead tree and fish)",
  "packaging-ghs-health": "Serious health hazard symbol (person with a starburst)",
  "medicine-pill-calendar": "Days and arrows on a pill pack",
  "medicine-test-lines": "C and T lines on a test",
  "medicine-test-count": "Σ with a number on a test kit box",
  "medicine-mri": "MR safety symbols (MR in a triangle, square or crossed circle)",
  "medicine-first-aid": "White cross on green sign (first aid)",
  "medicine-aed": "Heart with a lightning bolt sign (defibrillator / AED)",
  "medicine-biohazard": "Biohazard symbol (sharps and clinical waste)",
  "medicine-driving-warning": "Car in a triangle on medicine (may affect driving)",
  "medicine-no-alcohol": "Crossed-out glass on medicine (don't drink alcohol)",
  "medicine-drowsiness": "Closed eye or Zzz on medicine (may cause drowsiness)",
  "power-ul": "UL Listed mark (UL in a circle)",
  "power-fcc": "FCC logo",
  "power-ccc": "CCC mark (China)",
  "power-pse": "PSE mark (Japan)",
  "power-rcm": "RCM mark (tick in a circle, in a triangle)",
};

export function searchTitle(icon) {
  if (OVERRIDES[icon.id]) return OVERRIDES[icon.id];
  const cat = CATS[icon.category] || { where: "" };
  const m = icon.name.match(/^(.*?)\s*(\([^()]*\))$/);
  const main = m ? m[1] : icon.name;
  const paren = m ? m[2] : "";
  const noun = NOUN_END.test(main) ? "" : (cat.noun || "symbol");
  let where = cat.where;
  if (cat.has && cat.has.test(main)) where = "";
  if (icon.category === "tech" && PHONE.has(icon.id)) where = "on a phone";
  // "End on the display" -> "End on an air fryer display"
  if (icon.category === "airfryer" && / display$/.test(main)) {
    return [main.replace(/on the display$/, "on an air fryer display").replace(/on a Ninja display$/, "on a Ninja air fryer display"), paren].filter(Boolean).join(" ");
  }
  return [main, noun, where, paren].filter(Boolean).join(" ");
}

export const OVERRIDE_IDS = Object.keys(OVERRIDES);
