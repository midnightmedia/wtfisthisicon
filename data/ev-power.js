/* WTF is this icon? — Electric & hybrid car lights (ev) and Chargers & plugs (power).
 * Format and drawing rules: see data/README.md. All symbols are simplified, original drawings
 * for identification purposes (certification marks such as UL, FCC, CCC, RCM and PSE included). */
WTF.add([
  /* ---------- Electric & hybrid cars ---------- */

  // ───────────────────────── RED: stop / deal with it now ─────────────────────────
  {
    id: "ev-system-fault",
    name: "Electric / hybrid system fault",
    category: "ev",
    color: "red",
    urgency: "stop",
    aka: ["EV system warning", "hybrid system warning", "electric drive fault", "high-voltage system fault", "powertrain fault", "check EV system"],
    looksLike: ["car with exclamation mark", "car with !", "red car with exclamation mark", "car with a warning sign", "car outline with !"],
    meaning: "The car has found a problem in its electric drive system — the high-voltage battery, the motor, the inverter or the computer that runs them. It may cut power, or shut the drive system down to protect itself.",
    action: "Pull over somewhere safe as soon as you can, switch the car off, wait a minute and restart it. If the light comes back, or the car won't go back into READY, don't drive on — call the manufacturer's breakdown assistance. Never touch or try to fix the high-voltage parts (the bright orange cables) yourself.",
    tip: "Brands differ: Toyota and Lexus hybrids use a car with ! as their hybrid system warning, while some makers show it in amber for less serious faults, or use a car with a spanner for 'service needed'. Your handbook has the exact meaning for your car.",
    svg: `<path d="M6 41v-9l6-2.5 8-13h24l8 13 6 2.5v9"/><path d="M6 41h6M24 41h16M52 41h6"/><circle cx="18" cy="41" r="6"/><circle cx="46" cy="41" r="6"/><path d="M32 22v9"/><circle cx="32" cy="36.5" r="2.2" fill="currentColor" stroke="none"/>`
  },
  {
    id: "ev-battery-overheat",
    name: "Battery overheating",
    category: "ev",
    color: "red",
    urgency: "stop",
    aka: ["battery temperature warning", "high-voltage battery too hot", "EV battery overheat", "hybrid system overheat", "traction battery temperature"],
    looksLike: ["battery with thermometer", "thermometer in a battery", "battery with a temperature gauge", "hot battery", "box with a thermometer"],
    meaning: "The big drive battery is getting too hot — for example after several rapid charges in a row, hard driving on a hot day, or a fault in the battery's cooling system. The car will usually limit power and charging speed to protect it.",
    action: "Ease off, stop somewhere safe and let it cool down. If you're rapid charging, end the session. If the light won't go out, get it checked before driving far. If you see smoke, smell burning, or hear hissing or popping from underneath, get everyone out, move well away and call the emergency services.",
    tip: "A battery with a blue snowflake is the opposite problem: the battery is too cold, which is normal in winter and nothing to worry about.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><path d="M51 26h4v12h-4"/><path d="M27.5 34V24.5"/><circle cx="27.5" cy="37.5" r="4.5" fill="currentColor" stroke="none"/><path d="M33.5 25h4M33.5 30.5h4" stroke-width="3"/>`
  },
  {
    id: "ev-charging-cable-connected",
    name: "Charging cable connected",
    category: "ev",
    color: "red",
    urgency: "info",
    aka: ["plug-in indicator", "charge connector connected", "cable connected", "EV plugged in", "charging plug connected"],
    looksLike: ["car with a plug", "car and plug", "plug under a car", "car with a plug underneath", "car with a power cord", "car with cable"],
    meaning: "A charging cable is still plugged into the car. While it's connected, the car won't let you drive off — so you can't drag the cable (and the charger) down the street.",
    action: "Stop the charge (in the app, on the charger, or by unlocking the car), unplug the cable, put it away and close the charge flap. The light should go out and the car will let you select a gear.",
    tip: "Many cars lock the cable into the socket while the car is locked — unlock the car to release it. If the light stays on with nothing plugged in, the charge port sensor may be dirty or faulty. The colour varies by brand; some cars also have a separate light warning that the charge-port flap is still open.",
    svg: `<path d="M8 26v-7l6-2 6-9h20l8 9 8 2v7"/><path d="M8 26h7M25 26h14M49 26h7"/><circle cx="20" cy="26" r="5"/><circle cx="44" cy="26" r="5"/><path d="M28 36v4.5M36 36v4.5"/><path d="M23.5 40.5h17v4a5.5 5.5 0 0 1-5.5 5.5h-6a5.5 5.5 0 0 1-5.5-5.5z"/><path d="M32 50v6"/>`
  },

  // ───────────────────────── AMBER: sort it soon ─────────────────────────
  {
    id: "ev-turtle-mode",
    name: "Turtle (reduced power mode)",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["power limited", "limited power", "power down warning", "reduced power", "turtle light", "tortoise light", "power limitation indicator", "limp mode"],
    looksLike: ["turtle", "tortoise", "yellow turtle", "orange turtle", "animal with a shell", "snail", "dome with legs", "slow turtle"],
    meaning: "The car has deliberately cut its power to protect the high-voltage battery or motor — you'll feel weak acceleration and a lower top speed. The usual reasons: the battery is almost empty, it's very hot or very cold, or there's a fault in the electric drive system.",
    action: "Get out of fast traffic and drive gently. If the battery is nearly flat, head straight for the nearest charger — you may only have a few miles left before the car stops. If the battery isn't low, let the car cool down (or warm up); if the turtle keeps coming back, get it checked.",
    tip: "The Nissan Leaf made the turtle famous; Hyundai and Kia call theirs the 'Power Down' light. Plenty of other EVs and hybrids just show a text message such as 'Power limited' instead.",
    svg: `<path d="M10 40C10 26 19 18 30 18S50 26 50 40z"/><path d="M15 32h30M25 19.5L23 32M35 19.5L37 32" stroke-width="2.5"/><circle cx="54" cy="32" r="4.5"/><path d="M15 40v6h7v-6M38 40v6h7v-6"/><path d="M10.5 38L5.5 42"/>`
  },
  {
    id: "ev-low-battery",
    name: "Low drive battery (low charge)",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["low battery charge warning", "low state of charge", "low SoC", "range warning", "high-voltage battery low", "traction battery low", "EV low fuel"],
    looksLike: ["battery with one bar", "nearly empty battery", "battery with a small bar", "low battery", "battery on its side", "empty battery"],
    meaning: "The big drive battery (the one that powers the motor) is running low — the EV version of the low fuel light. It typically comes on somewhere around 10–20% charge, depending on the car.",
    action: "Head for a charger now. Turn down the heating or air con and drive gently to stretch the range. If you push on, the car will eventually limit power (the turtle light) before it stops.",
    tip: "This is NOT the red 'box with + and −' battery light. That one is about the small 12-volt battery, which runs the lights, locks and computers. EVs and hybrids have both: a huge traction battery for driving and an ordinary 12V battery to 'boot up' the car. A flat 12V battery can stop an EV starting even with a full traction battery — and it can be jump-started like any car's.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><path d="M51 26h4v12h-4"/><rect x="13" y="23" width="7" height="18" rx="1" fill="currentColor" stroke="none"/>`
  },
  {
    id: "ev-battery-fault",
    name: "High-voltage battery warning",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["traction battery fault", "HV battery fault", "high voltage battery warning", "drive battery malfunction", "battery system fault", "battery management fault"],
    looksLike: ["battery with exclamation mark", "battery with !", "battery with a warning", "box with exclamation mark", "battery on its side with !"],
    meaning: "The car has spotted a problem with the big drive battery or the system that manages it — for example a sensor, cell-balance or cooling fault. Depending on the car, range, power or charging may be limited.",
    action: "If it's amber/yellow: you can usually drive on carefully, but book it in with a dealer soon. If it's red, or comes with smoke, a burning smell, hissing or popping: stop, get everyone out, move well away and call the emergency services.",
    tip: "Many brands use yellow for 'get it checked' and red for 'stop now'. Don't confuse it with the box with + and − (the 12V battery light) — that's a completely different battery.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><path d="M51 26h4v12h-4"/><path d="M29.5 23.5v10"/><circle cx="29.5" cy="39.5" r="2.3" fill="currentColor" stroke="none"/>`
  },
  {
    id: "ev-avas-off",
    name: "Pedestrian warning sound off",
    category: "ev",
    color: "amber",
    urgency: "info",
    aka: ["AVAS off", "VESS off", "VSP off", "vehicle proximity notification off", "pedestrian alert off", "acoustic vehicle alerting system", "sound generator off"],
    looksLike: ["car with speaker crossed out", "car with a mute symbol", "speaker with an x over a car", "car with no sound", "muted car", "car and speaker"],
    meaning: "At low speeds, electric cars and hybrids play an artificial hum so pedestrians, cyclists and blind or partially sighted people can hear them coming. This light means that sound is switched off — or isn't working.",
    action: "If your car has an off button (usually marked with the same symbol), press it to turn the sound back on, and leave it on — especially in car parks and busy streets. If you didn't switch it off, the speaker or system has a fault: get it fixed, as the sound is a legal requirement in many countries.",
    tip: "The hum only plays at low speed — up to about 20 km/h (12 mph) in the EU and 30 km/h (19 mph) in the US — because above that tyre noise is loud enough. Many newer cars no longer have an off switch at all, so on those this light always means a fault.",
    svg: `<path d="M18 16h5l8-6v20l-8-6h-5z"/><path d="M37 15.5l9 9M46 15.5l-9 9"/><path d="M14 50v-6l4-1.5 5-6.5h16l6 6.5 5 1.5v6"/><path d="M14 50h4M28 50h8M46 50h4"/><circle cx="23" cy="50" r="4.5"/><circle cx="41" cy="50" r="4.5"/>`
  },

  // ───────────────────────── GREEN / BLUE / WHITE: just letting you know ─────────────────────────
  {
    id: "ev-ready",
    name: "READY light",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["ready indicator", "READY lamp", "ready to drive", "power on"],
    looksLike: ["ready", "the word ready", "green ready", "ready in green letters", "text that says ready"],
    meaning: "The car is switched on and ready to drive. Electric cars and hybrids are usually silent when stopped, so this light is how you know it's 'running' — the same as having the engine started.",
    action: "Select D (or R) and off you go. If READY won't come on, press the brake pedal firmly while you press the start button, and check the charging cable is unplugged.",
    tip: "Don't walk away while READY is showing — the car is fully on even though it's silent, and in a hybrid the petrol engine can start by itself at any moment. Toyota, Lexus, Hyundai and Kia among others show the word READY; Nissan uses a car-with-arrows symbol instead.",
    svg: `<text x="32" y="37.8" font-size="16">READY</text>`
  },
  {
    id: "ev-ready-to-drive",
    name: "Ready-to-drive light (car with arrows)",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["ready to drive indicator", "ready indicator", "power on", "READY"],
    looksLike: ["car with arrows", "car with arrows on both sides", "green car with arrows", "car between two arrows", "car with triangles either side"],
    meaning: "The car is switched on and ready to drive — the electric-car equivalent of the engine running. Nissan (e.g. the Leaf) and some others use this symbol instead of the word READY.",
    action: "Select D (or R) and drive. If it won't come on, press the brake firmly while pressing the power button, and make sure the charging cable is unplugged.",
    tip: "The car is silent but live: press the accelerator in D and it will move. Always select P and switch off before getting out.",
    svg: `<path d="M14.5 37v-6l4-1.5 5-6.5h16l6 6.5 4 1.5v6"/><path d="M14.5 37h3.5M28 37h8M46 37h3.5"/><circle cx="23" cy="37" r="4.5"/><circle cx="41" cy="37" r="4.5"/><path d="M5 31l5.5-5v10z" fill="currentColor" stroke-width="2"/><path d="M59 31l-5.5-5v10z" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "ev-charging",
    name: "Charging in progress",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["charging indicator", "battery charging", "plugged in and charging", "charge status", "charge port light"],
    looksLike: ["battery with a lightning bolt", "battery with lightning", "battery with a flash", "battery with a zigzag", "charging battery"],
    meaning: "The high-voltage battery is charging. You'll usually also see the percentage or time remaining on the dash or screen, and a light by the charge port (often pulsing while charging, solid when full).",
    action: "Nothing to do. When you're finished, stop the charge (in the app, on the charger, or by unlocking the car), unplug, and close the charge flap.",
    tip: "Charge-port light colours vary by brand. On a Tesla, for example: flashing green = charging, solid green = done, amber = plug not fully pushed in, red = fault.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><path d="M51 26h4v12h-4"/><polygon points="33,21 22,34 29,34 26,43 37,30 30,30" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "ev-cold-battery",
    name: "Cold battery (snowflake)",
    category: "ev",
    color: "blue",
    urgency: "info",
    aka: ["battery too cold", "cold battery", "limited regen", "reduced regenerative braking", "battery heating", "cold weather limitation"],
    looksLike: ["battery with snowflake", "blue snowflake", "snowflake", "battery with a star", "frozen battery", "battery with asterisk"],
    meaning: "The high-voltage battery is cold. A cold battery can't take in or give out energy as quickly, so you get less regenerative braking (the car slows less when you lift off), slower charging, and sometimes less power and range until it warms up.",
    action: "Nothing is wrong. Expect the car to coast more than usual when you lift off, so brake a little earlier. Preheating the car while it's plugged in, or setting the satnav to a rapid charger, warms the battery up.",
    tip: "Tesla shows a blue snowflake by the battery gauge and colours part of the battery bar blue (energy you can't use until it warms up). Other brands show a shortened regen bar on the power meter or a message instead.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><g stroke-width="3"><path d="M29.5 23v18"/><path d="M29.5 23v18" transform="rotate(60 29.5 32)"/><path d="M29.5 23v18" transform="rotate(120 29.5 32)"/></g><path d="M51 26h4v12h-4"/>`
  },
  {
    id: "ev-ev-mode",
    name: "EV mode (electric-only driving)",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["EV MODE", "EV indicator", "electric mode", "pure electric mode", "E-mode", "zero emission mode"],
    looksLike: ["car with ev", "ev", "letters ev", "ev under a car", "green ev", "ev mode"],
    meaning: "On a hybrid or plug-in hybrid: the car is running on electricity alone, with the petrol engine off. Some cars show it automatically whenever the engine is off; others only when you've pressed the EV button to force electric driving.",
    action: "Nothing — enjoy the quiet. In an ordinary (self-charging) hybrid, EV mode only lasts a mile or two at low speed: accelerate harder or go faster and the engine starts and the light goes out. If it flashes or won't switch on, the battery is too low or too cold, or you're going too fast.",
    tip: "Plug-in hybrids can drive much further on electricity — typically 30–80 km (20–50 miles) on a full charge. Fully electric cars don't show this light because they're always in 'EV mode'.",
    svg: `<path d="M8 27v-7l6-2 6-9h20l8 9 8 2v7"/><path d="M8 27h7M25 27h14M49 27h7"/><circle cx="20" cy="27" r="5"/><circle cx="44" cy="27" r="5"/><text x="32" y="55" font-size="22">EV</text>`
  },
  {
    id: "ev-charge-mode",
    name: "Battery charge mode (plug-in hybrid)",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["CHARGE mode", "battery charge", "e-charge", "charge mode", "Battery Control", "battery hold", "save mode"],
    looksLike: ["battery with an arrow", "battery with up arrow", "battery with arrow pointing up", "upright battery with arrow", "battery filling up"],
    meaning: "Plug-in hybrids only: the petrol engine is running partly to recharge the battery as you drive, so you'll have electric range saved for later — say, for a city centre or low-emission zone.",
    action: "Use it only when you really need electric range later: charging the battery with the engine burns noticeably more fuel than plugging in. Switch back to the normal hybrid/auto mode with the drive-mode button.",
    tip: "A similar 'Hold' or 'Save' mode just keeps the battery at its current level without adding charge. Names vary by brand: CHARGE (Mitsubishi), Battery Control (BMW), Battery Charge (VW group).",
    svg: `<rect x="20" y="13" width="24" height="42" rx="4"/><path d="M27 13V9h10v4"/><path d="M32 47V24M25 31l7-7 7 7"/>`
  },
  {
    id: "ev-b-mode",
    name: "B mode (regenerative braking)",
    category: "ev",
    urgency: "info",
    aka: ["B gear", "brake mode", "regen mode", "regenerative braking", "regen", "engine braking", "one-pedal driving"],
    looksLike: ["letter b", "b on the gear lever", "b in a box", "b after d", "b gear", "p r n d b"],
    meaning: "B makes the car slow down more strongly when you lift off the accelerator. In electric cars and many plug-ins, that braking comes from the motor acting as a generator — regenerative braking — which feeds energy back into the battery.",
    action: "Handy in stop-start town traffic and on long downhill stretches, and it saves your brake pads. Driving in D the rest of the time is completely fine. On most EVs the brake lights come on by themselves when regen slows the car firmly.",
    tip: "In Toyota and Lexus hybrids, B is mainly engine braking for long, steep hills — it doesn't recover noticeably more energy than D, so there's no point using it all the time. Most hybrids and EVs show regen on the power meter as a blue or green 'CHARGE' / 'CHG' zone the needle dips into.",
    svg: `<rect x="12" y="12" width="40" height="40" rx="8"/><text x="32" y="43" font-size="30">B</text>`
  },

  /* ---------- Chargers & plugs ---------- */
  {
    id: "power-double-insulated",
    name: "Double insulated (square in a square)",
    category: "power",
    aka: ["Class II", "Class 2", "double insulation", "reinforced insulation", "IEC 60417-5172"],
    looksLike: ["square in a square", "two squares one inside the other", "double square", "box in a box", "nested squares", "square inside a square"],
    meaning: "Class II, or double insulated: the live parts are wrapped in two layers of insulation (or one extra-strong layer), so the device doesn't need an earth connection to be safe. That's why most phone chargers, laptop bricks and hairdryers have just two pins.",
    action: "Nothing to do — it's perfectly safe without an earth. Do stop using it if the casing is cracked or damaged, though: that insulation is the whole point.",
    tip: "UK plugs on double-insulated items still have a third pin, but it's often plastic — it's only there to open the shutters in the socket.",
    svg: `<rect x="12" y="12" width="40" height="40"/><rect x="22" y="22" width="20" height="20"/>`
  },
  {
    id: "power-protective-earth",
    name: "Earth / ground (protective earth)",
    category: "power",
    aka: ["Class I", "protective earth", "PE", "ground", "earth terminal", "IEC 60417-5019", "IEC 60417-5017"],
    looksLike: ["upside down christmas tree", "three lines getting shorter", "t with lines under it", "rake", "lines in a circle", "upside down triangle of lines", "antenna upside down"],
    meaning: "Marks the earth (ground) connection. Inside a circle it's the protective earth of a Class I appliance: the metal casing is connected to earth, so if a live wire comes loose inside, the fuse or breaker trips instead of the case becoming live.",
    action: "Devices with this symbol must be plugged into a properly earthed socket with the earth pin intact — never cut it off or use an adaptor that loses it. If you're wiring a plug, the green-and-yellow wire (green or bare copper in North America) goes to this terminal.",
    tip: "Without the circle, the same 'upside-down Christmas tree' is a general earth point. A version with slanted lines like a rake marks a connection to the metal frame (chassis).",
    svg: `<circle cx="32" cy="32" r="22"/><path d="M32 18v16M20 34h24M24.5 40h15M29 46h6"/>`
  },
  {
    id: "power-indoor-use-only",
    name: "For indoor use only (house)",
    category: "power",
    aka: ["indoor use only", "not for outdoor use", "dry locations only", "IEC 60417-5957"],
    looksLike: ["house", "little house", "house outline", "home icon", "hut", "roof", "pentagon"],
    meaning: "The device is designed to be used indoors only — it isn't protected against rain, splashes, damp or condensation.",
    action: "Keep it inside and dry: not in the garden, on a boat or in a damp garage. For outdoor use, buy something with an IP rating such as IP44 or higher.",
    tip: "IP ratings decode easily: the first digit is protection against dust and objects, the second against water. IP44 = splash-proof, IPX7 = can survive being dunked. You'll also see the little house on fairy lights and extension leads.",
    svg: `<path d="M8 31L32 10l24 21"/><path d="M14 26v26h36V26"/>`
  },
  {
    id: "power-efficiency-level",
    name: "Efficiency level (Roman numeral in a circle)",
    category: "power",
    aka: ["efficiency mark", "International Efficiency Marking Protocol", "Level VI", "Level V", "DoE Level VI", "energy efficiency level"],
    looksLike: ["roman numeral in a circle", "vi in a circle", "v in a circle", "circle with vi", "6 in roman numerals", "iv in a circle"],
    meaning: "Shows how energy-efficient an external power supply is, under the International Efficiency Marking Protocol. Higher is better: Level VI (6) wastes less power both while charging and while plugged in with nothing attached.",
    action: "Nothing to do. Level VI has been the minimum in the US since 2016, and the EU's rules are similar. Level V or lower just means an older, slightly less efficient design — still fine to use.",
    tip: "The numeral is an efficiency grade, not a voltage or a version number. A small Level VI charger may draw no more than 0.1 W when nothing is connected.",
    svg: `<circle cx="32" cy="32" r="22"/><text x="32" y="40" font-size="22">VI</text>`
  },
  {
    id: "power-ac",
    name: "AC — alternating current (wavy line)",
    category: "power",
    aka: ["alternating current", "AC", "~", "mains", "IEC 60417-5032"],
    looksLike: ["wavy line", "tilde", "squiggle", "~", "wave", "s on its side", "sine wave"],
    meaning: "Alternating current — the kind of electricity that comes out of a wall socket. On a charger label it's usually next to the INPUT, e.g. '100–240V ~ 50/60Hz'.",
    action: "Check the voltage range: '100–240V' means it works anywhere in the world with just a plug adaptor. If it only says 230V or 120V, it needs a voltage converter in countries with the other kind of mains.",
    tip: "50/60Hz is how many times a second the current changes direction: 50 in Europe, the UK, Australia and most of Asia; 60 in North America — and Japan uses both, depending on which half of the country you're in.",
    svg: `<path d="M8 32c4-9 8-12 12-12s8 3 12 12 8 12 12 12 8-3 12-12" stroke-width="4.5"/>`
  },
  {
    id: "power-dc",
    name: "DC — direct current (line over dashed line)",
    category: "power",
    aka: ["direct current", "DC", "⎓", "IEC 60417-5031"],
    looksLike: ["line over dashed line", "solid line and dotted line", "equals sign with a dashed line", "two lines one dashed", "line with dashes underneath", "dash dash dash"],
    meaning: "Direct current — the steady, one-direction electricity that batteries and gadgets run on. On a charger it's usually next to the OUTPUT, e.g. '5V ⎓ 2A' means 5 volts DC at up to 2 amps.",
    action: "When swapping a power supply (for a router, speaker, etc.), the replacement must have the SAME output voltage and polarity, and an amp (A) rating that's the same or higher. More amps is fine — the device only takes what it needs; the wrong voltage can damage it.",
    tip: "USB-C chargers list several outputs, like 5V⎓3A / 9V⎓3A / 20V⎓3.25A. They agree the right one with the gadget automatically, which is why one USB-C charger can safely power lots of different devices.",
    svg: `<path d="M10 26h44" stroke-width="4.5"/><path d="M10 38h8M28 38h8M46 38h8" stroke-width="4.5"/>`
  },
  {
    id: "power-polarity",
    name: "Polarity (centre-positive / centre-negative)",
    category: "power",
    aka: ["centre positive", "center positive", "centre negative", "center negative", "tip positive", "barrel plug polarity", "DC polarity"],
    looksLike: ["circle with dot and plus minus", "c with a dot inside", "dot in a circle with plus and minus", "minus c dot plus", "pac-man with plus and minus", "circle with lines to plus and minus"],
    meaning: "Shows the polarity of a round barrel-style DC plug. The dot is the centre (the inside of the plug); the C-shaped ring is the outer sleeve. Whichever sign the dot is joined to is the centre: dot to + (as drawn here) = centre-positive, the most common; dot to − = centre-negative.",
    action: "When replacing a power adapter, this symbol must match exactly, along with the voltage, the plug size and enough amps. The wrong polarity can damage a device the instant you plug it in.",
    tip: "Guitar effects pedals are the classic exception: most use 9V centre-negative, which is why a random router or keyboard adapter can fry them.",
    svg: `<path d="M40 25.2A10.5 10.5 0 1 0 40 38.8"/><circle cx="32" cy="32" r="3.8" fill="currentColor" stroke="none"/><path d="M32 32h13.5M21.5 32H17"/><path d="M5 32h7M51 32h8M55 28v8"/>`
  },
  {
    id: "power-fuse",
    name: "Fuse (rectangle with a line through it)",
    category: "power",
    aka: ["fuse", "fuse rating", "T3.15A", "slow-blow fuse", "IEC 60417-5016"],
    looksLike: ["rectangle with a line through it", "box with a line through it", "line through a box", "skewered rectangle", "kebab", "resistor"],
    meaning: "Marks a fuse: a thin wire that melts and cuts the power if too much current flows, to prevent a fire. It's usually printed next to its rating, e.g. 'T3.15AL 250V' = a time-delay (slow-blow) fuse of 3.15 amps, low breaking capacity, rated for up to 250 volts.",
    action: "If the device is completely dead, a blown fuse is a likely suspect. Only ever replace it with exactly the same rating and type — never a bigger one or a bit of wire. If a new fuse blows straight away there's a fault: stop and get it repaired.",
    tip: "F = fast-acting, T = time-lag (slow-blow, rides out the surge at switch-on). UK plugs have their own fuse too: usually 3A for small appliances and 13A for kettles and heaters. Sealed phone chargers have an internal fuse you can't replace.",
    svg: `<rect x="18" y="24" width="28" height="16" rx="1"/><path d="M6 32h52"/>`
  },
  {
    id: "power-safety-transformer",
    name: "Safety isolating transformer (two overlapping circles)",
    category: "power",
    aka: ["safety isolating transformer", "isolating transformer", "safety transformer", "SELV"],
    looksLike: ["two overlapping circles", "two circles", "two rings", "venn diagram", "linked circles", "interlocking rings"],
    meaning: "The charger contains a safety isolating transformer: the dangerous mains side is completely separated from the low-voltage output, so the end you touch (the USB socket, cable or connector) can't become live even if something fails.",
    action: "Nothing — it's a good thing to see on a charger. Still, stop using any charger with a cracked case or scorched pins, or that gets too hot to hold.",
    tip: "Small extra marks added to the two circles (such as a tiny fuse) describe how the transformer copes with a short circuit or overload.",
    svg: `<circle cx="24" cy="32" r="13"/><circle cx="40" cy="32" r="13"/>`
  },
  {
    id: "power-read-manual",
    name: "Read the instructions (open book)",
    category: "power",
    aka: ["refer to manual", "read operating instructions", "see user guide", "consult the documentation", "ISO 7000-1641"],
    looksLike: ["book", "open book", "book with lines", "book with an i", "notebook", "magazine"],
    meaning: "There's important information in the instructions or safety leaflet — usually about how to use or connect the product safely.",
    action: "Dig out the leaflet that came with it (or look it up online) before using it — especially for anything that plugs into the mains.",
    tip: "A white book inside a blue circle (ISO 7010 M002) is stronger: you MUST read the manual. A triangle with an exclamation mark next to it means 'caution — check the documentation'.",
    svg: `<path d="M32 18c-6-4-15-5-24-3v34c9-2 18-1 24 3c6-4 15-5 24-3V15c-9-2-18-1-24 3z"/><path d="M32 18v34"/><path d="M14 24c4-.6 8-.4 12 .8M14 31c4-.6 8-.4 12 .8M14 38c4-.6 8-.4 12 .8M38 24.8c4-1.2 8-1.4 12-.8M38 31.8c4-1.2 8-1.4 12-.8M38 38.8c4-1.2 8-1.4 12-.8" stroke-width="2.5"/>`
  },
  {
    id: "power-high-voltage",
    name: "Dangerous voltage (lightning bolt in a triangle)",
    category: "power",
    aka: ["electric shock hazard", "high voltage", "electricity warning", "danger of death", "ISO 7010 W012"],
    looksLike: ["lightning bolt in a triangle", "triangle with lightning", "zigzag arrow in a triangle", "flash in a triangle", "yellow triangle with lightning"],
    meaning: "Warning: dangerous voltage inside — enough to give a serious electric shock. On chargers and power supplies it usually sits next to 'Do not open' or 'No user-serviceable parts inside'.",
    action: "Don't open the casing, even when it's unplugged — parts inside (capacitors) can stay charged for a while. If it's damaged, replace it rather than repair it.",
    tip: "The yellow-and-black triangle version is the safety sign you see on substations, fuse boxes and electrical cupboards.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M35.5 20L27 33.5h10.5L31 43.2" stroke-width="3"/><polygon points="27.9,47.8 33.7,45 28.3,41.4" fill="currentColor" stroke-width="1.5"/>`
  },
  {
    id: "power-hot-surface",
    name: "Hot surface",
    category: "power",
    aka: ["caution hot surface", "hot surface warning", "do not touch", "ISO 7010 W017", "IEC 60417-5041"],
    looksLike: ["triangle with wavy lines", "triangle with steam", "heat lines in a triangle", "wavy lines over a line", "squiggles in a triangle"],
    meaning: "Warning: this surface gets hot enough to burn you during normal use.",
    action: "Don't touch it while it's on or just after, don't cover it, and keep it away from anything that could melt or catch fire. Let it cool down before handling or putting it away.",
    tip: "Some chargers, lamps and heaters carry this because they're meant to get hot. An ordinary phone charger getting too hot to hold isn't normal, though — unplug it and replace it.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M21 46h22"/><path d="M25 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7M32 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7M39 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7" stroke-width="2.5"/>`
  },
  {
    id: "power-rcm",
    name: "RCM (tick in a triangle)",
    category: "power",
    aka: ["Regulatory Compliance Mark", "RCM", "C-Tick", "A-Tick", "Australian compliance mark"],
    looksLike: ["tick in a triangle", "check mark in a triangle", "triangle with a tick", "triangle with a check", "tick inside a triangle"],
    meaning: "The Regulatory Compliance Mark: the product meets Australian and New Zealand rules for electrical safety and radio interference.",
    action: "Nothing to do. In Australia or New Zealand it's a good sign a charger was made to be sold legally there — be wary of mains chargers without it.",
    tip: "It replaced the older C-Tick (a C with a tick inside) and A-Tick marks, which were phased out by 2016.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M22 39.5l6.5 6.5 11-15" stroke-width="4.5"/>`
  },
  {
    id: "power-fcc",
    name: "FCC logo",
    category: "power",
    aka: ["Federal Communications Commission", "FCC mark", "FCC ID", "FCC Part 15"],
    looksLike: ["fcc", "f and two c's", "f with c's", "fc", "letters fcc", "f with brackets"],
    meaning: "The US Federal Communications Commission's mark: the device has been checked so its radio interference stays within US limits (so it won't mess up radios, Wi-Fi or TV). It's not a safety mark.",
    action: "Nothing to do. For electrical safety in the US, look for a safety listing such as UL, ETL or CSA instead.",
    tip: "Since 2017 the logo has been optional for many products, so a missing FCC logo doesn't mean much. Gadgets with radios (phones, wireless chargers) carry an 'FCC ID' code you can look up online to see their test reports and internal photos.",
    svg: `<path d="M12 47V17h14M12 31h11" stroke-width="5"/><path d="M53.6 21.4A15 15 0 1 0 53.6 42.6M48.7 26.3A8 8 0 1 0 48.7 37.7" stroke-width="4.5"/>`
  },
  {
    id: "power-ul",
    name: "UL Listed (UL in a circle)",
    category: "power",
    aka: ["UL", "Underwriters Laboratories", "UL Listed", "cULus", "UL mark"],
    looksLike: ["ul in a circle", "letters ul in a circle", "u and l", "circle with ul", "ul logo"],
    meaning: "UL (originally Underwriters Laboratories), an independent testing lab, has tested samples of this product against US safety standards for fire and electric shock. A small 'c' on the left and 'us' on the right means it's certified for both Canada and the US.",
    action: "A good sign, especially on chargers and power strips. Cheap chargers with a smudged or oddly drawn UL mark may be fakes — you can check the file number on UL's online database (Product iQ).",
    tip: "'UL Recognized' (a backwards-looking R and U) is different: it's for parts that go inside a product, not the finished item. ETL and CSA marks are equivalent safety listings.",
    svg: `<circle cx="32" cy="32" r="22"/><path d="M19.5 21v7a5 5 0 0 0 10 0v-7M35.5 31v12h9" stroke-width="4"/>`
  },
  {
    id: "power-ccc",
    name: "CCC mark (China)",
    category: "power",
    aka: ["China Compulsory Certificate", "China Compulsory Certification", "3C", "CCC"],
    looksLike: ["ccc", "three c's", "letters ccc in an oval", "ccc in a circle", "c c c"],
    meaning: "China Compulsory Certification: the product meets China's mandatory safety rules and can legally be sold in mainland China. You'll often spot it on chargers made for the global market.",
    action: "Nothing to do. It says nothing about approval where you live — look for your own country's mark (UKCA or CE, UL, RCM, PSE…).",
    tip: "It's also nicknamed '3C'. Not to be confused with the CE mark — different letters, different market.",
    svg: `<ellipse cx="32" cy="32" rx="26" ry="19"/><text x="32" y="38.5" font-size="17">CCC</text>`
  },
  {
    id: "power-pse",
    name: "PSE mark (Japan)",
    category: "power",
    aka: ["PSE", "Product Safety Electrical Appliance & Material", "DENAN", "Japanese electrical safety mark"],
    looksLike: ["pse in a diamond", "diamond with pse", "letters pse", "pse in a circle", "rhombus with pse"],
    meaning: "Japan's compulsory electrical safety mark. The diamond version is for 'specified' higher-risk products — including AC adapters and chargers — which must be checked by an independent lab; the round version is for other electrical goods, which the maker tests itself.",
    action: "Nothing to do outside Japan. In Japan it's illegal to sell mains-powered products such as chargers without it.",
    tip: "Since 2019, lithium-ion power banks sold in Japan must carry the round PSE mark too.",
    svg: `<polygon points="32,6 58,32 32,58 6,32"/><text x="32" y="37.8" font-size="15">PSE</text>`
  }
]);
