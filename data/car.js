/* Car dashboard warning lights + car buttons/controls. */
WTF.add([
  // ───────────────────────── RED: stop / deal with it now ─────────────────────────
  {
    id: "car-oil-pressure",
    name: "Oil pressure warning",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["low oil pressure", "oil can light", "engine oil warning"],
    looksLike: ["genie lamp", "aladdin lamp", "oil can", "teapot", "magic lamp with a drip", "watering can"],
    meaning: "The engine has lost oil pressure, so its moving parts aren't being lubricated properly. Running an engine without oil pressure can wreck it in minutes.",
    action: "Pull over safely and switch the engine off as soon as you can. Once it's cooled, check the oil level with the dipstick and top up. If the level is fine and the light stays on, don't drive. Get it towed.",
    tip: "It's an oil can, though most people see a genie lamp. If the same symbol is amber/yellow (sometimes with a wavy line), many cars mean 'oil level low' rather than 'no pressure'. That's less urgent, but top up soon.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.1 21.5C7.5 22.1 6.5 26.7 6.2 27.8C6 28.4 5.6 29.3 5.9 29.9C6.5 30.5 8.1 30.9 9 31.2C10.6 31.8 12.1 32.4 13.7 32.9C14.5 33.2 15.4 33.5 16.2 33.9C16.4 34.4 16.3 35 16.3 35.5C16.3 36.7 16.1 41.7 16.4 42.4C16.6 42.5 16.7 42.6 16.9 42.6C18.5 42.8 20.3 42.6 21.9 42.6C26.7 42.6 31.5 42.6 36.2 42.6C37.1 42.6 40.8 42.9 41.3 42.4C42.3 41.6 43.6 39.7 44.5 38.6C46.4 36.3 48.4 34 50.2 31.7C50.8 31 52.2 29.1 52.8 28.6C53.3 28.2 54.4 27.9 55 27.9L56.3 28.9C56.9 28.9 58 27.5 58.1 26.9C57.9 26.3 55.9 24.2 55.4 24.3C54.5 24.3 51.3 25.9 50.3 26.3C49.4 26.7 48.4 26.8 47.5 27.1C45.4 27.7 43.2 28.1 41.1 28.7C40 29 37.6 29.8 36.7 29.8C36 29.3 35.2 28.1 34.5 27.8C33.6 27.4 29.8 27.9 28.5 27.6L28.5 25.5C29.3 25.4 30.8 25.7 31.4 25.2C31.7 24.7 31.7 22.8 31.4 22.3C30.8 21.9 29.9 22.1 29.3 22.1C27.6 22.1 26 22.1 24.3 22.1C23.7 22.1 22.7 21.9 22.1 22.3C21.8 22.8 21.8 24.8 22.2 25.3C23 25.7 24.1 25.3 25 25.5L25 27.6L19.7 27.6C19.4 27 19.9 26 19.3 25.5C18.8 25.1 17.5 24.8 16.9 24.5C14.9 23.8 12.9 23.1 10.9 22.3C10.2 22.1 8.8 21.3 8.1 21.5ZM10.3 25.7L16.2 28L16.2 30.2L9.7 27.8L10.3 25.7ZM47.6 29.7C45.9 32 43.9 34.1 42.1 36.3C41.6 36.9 40.1 38.9 39.6 39.2C39.2 39.4 35.1 39.3 34.4 39.3C31.1 39.3 27.8 39.3 24.5 39.3C23.2 39.3 20.8 39.5 19.7 39.2L19.7 31.1C20.6 30.9 21.6 31 22.4 31C24.4 31 26.4 31 28.3 31C29.3 31 32.2 30.9 33 31.1C34 31.3 34.9 33.6 36.1 33.5C36.9 33.4 37.8 33 38.5 32.7C40.6 32 42.6 31.4 44.6 30.7C45.3 30.4 47.1 29.7 47.6 29.7ZM56.2 31.9C55.1 32.1 55.3 33.9 55.1 34.7C55 35 54.9 35.4 54.7 35.8C54.2 37.2 54.8 39 56.5 38.8C58.3 38.6 58.5 36.8 57.9 35.5C57.5 34.5 57.8 31.6 56.2 31.9Z"/>'
  },
  {
    id: "car-coolant-temperature",
    name: "Engine temperature warning",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["coolant temperature", "engine overheating", "temperature light"],
    looksLike: ["thermometer in water", "thermometer with waves", "thermometer in the sea", "thermometer with wavy lines", "key in water"],
    meaning: "The engine is overheating, usually because of low coolant, a leak, a failed fan or a stuck thermostat.",
    action: "Pull over and turn the engine off. Do NOT open the coolant cap while hot, as it can spray boiling liquid. Once cool, check the coolant level and top up; if it keeps happening, get it looked at.",
    tip: "A blue version of this symbol is the opposite: the engine is still cold. Take it easy until it goes out.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M34.7 35C35.5 34.8 36.5 35 37.2 35C39 35 40.9 35 42.6 35C43.4 35 45 35.1 45.6 34.8C46 34.3 46 31.6 45.6 31.1C45 30.6 43.4 30.9 42.6 30.9C40.9 30.9 39.1 30.9 37.4 30.9C36.5 30.9 35.6 30.9 34.8 30.8L34.7 27.5C35.3 27.2 36.5 27.4 37.2 27.4C39.1 27.4 41 27.4 43 27.4C43.7 27.4 45 27.6 45.7 27.2C46 26.6 46 23.9 45.6 23.5C44.8 23.1 43.8 23.3 43 23.3C41 23.3 39.1 23.3 37.2 23.3C36.5 23.3 35.3 23.5 34.7 23.2L34.8 19.9C35.6 19.7 36.5 19.8 37.3 19.8C39.1 19.8 40.9 19.8 42.7 19.8C43.4 19.8 45.2 20.1 45.7 19.6C46 19 46 16.4 45.6 16C44.8 15.6 43.6 15.8 42.8 15.8C40.9 15.8 39 15.8 37.1 15.8C36.4 15.8 35.4 16 34.7 15.7C34.5 14.2 35.1 12.1 34.4 10.8C33.3 8.8 30.3 9 29.5 11.1C29 12.3 29.3 17.1 29.3 18.7C29.3 24.4 29.3 30.1 29.3 35.8C29.3 36.4 29.4 38.8 29.2 39.2C29.1 39.6 28.7 39.8 28.5 40C27.8 40.9 27.4 42.1 27.5 43.2C28.1 49.3 36.9 48.2 36.5 42.6C36.4 41.7 36.1 40.7 35.4 40C35.2 39.8 34.9 39.6 34.8 39.3C34.6 38.9 34.6 35.5 34.7 35ZM6 44.2C6.9 44.4 8.8 43.2 9.7 42.9C10.3 42.7 10.9 42.5 11.6 42.5C13.8 42.2 16.1 43.9 18.1 44.6C19 45 20 45.2 21 45.4C21.8 45.4 23.6 45.5 24.2 44.9L24.1 41.3C23.6 40.9 22.7 41.3 22 41.3C21.5 41.4 20.9 41.2 20.4 41.1C16.4 39.9 14 37.5 9.5 38.7C8.7 38.9 6.2 39.6 5.8 40.3C5.5 40.8 5.7 41.8 5.7 42.4C5.7 43 5.5 43.8 6 44.2ZM39.9 41.2C39.6 41.8 39.9 42.6 39.8 43.2C39.8 43.7 39.6 44.2 39.6 44.7C39.7 44.8 39.8 44.9 39.8 45C40.6 45.6 42 45.5 43 45.4C44.1 45.2 45.1 45 46.1 44.6C48 43.9 50.4 42.2 52.4 42.5C53.8 42.6 55 43.1 56.2 43.6C56.7 43.9 57.5 44.4 58.1 44.1C58.4 43.7 58.3 43 58.3 42.4C58.3 41.8 58.5 40.8 58.2 40.2C57.8 39.6 55.3 38.9 54.5 38.7C49.8 37.5 47.7 40 43.6 41.1C43 41.3 42.5 41.4 41.9 41.3C41.3 41.3 40.4 40.8 39.9 41.2ZM10.2 52.8C10.7 53.1 11.8 52.6 12.8 52.8C14.9 53.3 16.7 54.8 18.9 54.6C19.9 54.5 20.8 54.3 21.7 54C22.9 53.5 24 52.8 25.3 52.7C26.6 52.6 28 53.6 29.2 54.1C29.9 54.3 30.7 54.5 31.4 54.6C33.2 54.8 34.8 54.1 36.4 53.4C37.1 53.1 37.9 52.6 38.7 52.7C40.5 52.7 42.1 54.1 44 54.5C47.1 55 48.5 53.6 51.2 52.8C52.1 52.6 53.2 53.1 53.8 52.8C54.1 52.4 54.2 49.4 53.8 49C53.5 48.6 52.7 48.6 52.2 48.6C49.5 48.5 47 50.6 45.2 50.5C43.3 50.4 41.5 48.9 39.5 48.7C37.9 48.5 36.4 48.9 34.9 49.6C34 50 33.1 50.4 32.2 50.5C30.8 50.7 28 48.9 26.1 48.7C23.6 48.4 21.9 49.7 19.6 50.4C17.2 51 15 48.7 12.5 48.6C11.8 48.6 10.4 48.4 10 49.2C9.8 49.6 10 50.4 10 51C10 51.5 9.8 52.3 10.2 52.8Z"/>'
  },
  {
    id: "car-battery",
    name: "Battery / charging warning",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["charging system warning", "alternator light", "battery light"],
    looksLike: ["battery", "box with plus and minus", "rectangle with two bumps", "plus minus box"],
    meaning: "The battery isn't being charged. Usually the alternator, its drive belt or the wiring has failed. The car is running on battery power alone and will die when it's flat.",
    action: "Turn off everything you don't need (heater, radio, heated seats) and drive straight to a garage or somewhere safe. Avoid switching the engine off: it might not start again.",
    tip: "Seeing it briefly when you turn the key, before the engine starts, is perfectly normal.",
    svg: `<rect x="9" y="20" width="46" height="30" rx="3"/><path d="M16 20v-5h8v5M40 20v-5h8v5"/><path d="M16 35h9M39 35h9M43.5 30.5v9"/>`
  },
  {
    id: "car-brake-warning",
    name: "Brake system warning",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["brake fluid warning", "BRAKE light"],
    looksLike: ["circle with exclamation mark", "exclamation in brackets", "! in a circle with brackets", "circle in parentheses"],
    meaning: "Either the handbrake is still on, or there's a problem with the braking system (most often low brake fluid).",
    action: "Check the handbrake is fully released. If the light stays on, stop somewhere safe and check the brake fluid level. Don't drive on if the brakes feel soft or spongy.",
    svg: `<circle cx="32" cy="32" r="14"/><path d="M14 18a20 20 0 0 0 0 28M50 18a20 20 0 0 1 0 28"/><path d="M32 24v10"/><circle cx="32" cy="40.5" r="2.2" fill="currentColor" stroke="none"/>`
  },
  {
    id: "car-parking-brake",
    name: "Parking brake on",
    quiz: "Handbrake on",
    category: "car",
    color: "red",
    urgency: "info",
    aka: ["handbrake", "electronic parking brake", "EPB"],
    looksLike: ["p in a circle", "circle with p", "p in brackets", "circle with letter p"],
    meaning: "The parking brake (handbrake) is on. As dashboard mysteries go, this is one of the gentler ones.",
    action: "Release the handbrake before driving. If it's off and the light is still on (or flashing), the electronic parking brake may have a fault. Get it checked.",
    svg: `<circle cx="32" cy="32" r="14"/><path d="M14 18a20 20 0 0 0 0 28M50 18a20 20 0 0 1 0 28"/><text x="32" y="38.5" font-size="18">P</text>`
  },
  {
    id: "car-airbag",
    name: "Airbag warning",
    category: "car",
    color: "red",
    urgency: "soon",
    aka: ["SRS", "supplemental restraint system", "airbag fault"],
    looksLike: ["person with a ball", "seated person with a circle", "person and big circle", "man sitting with a balloon", "beach ball"],
    meaning: "There's a fault in the airbag system. In a crash, the airbags (and sometimes the seatbelt pre-tensioners) might not deploy.",
    action: "You can still drive the car, but get it checked as soon as possible. Until it's fixed, you're less protected.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M48.5 23.6C48.5 24.1 49.8 26.2 50.2 26.4C50.9 26.5 51.6 25.8 52.2 25.5C53.6 24.6 55 23.8 56.4 23C56.9 22.7 57.8 22.3 58.1 21.8C58.4 21.4 58.4 18.9 58.2 18.4C58.2 18.2 58.1 18.1 58 18C57.2 17.8 56.3 18.6 55.6 19C53.9 20.1 52.2 21.1 50.5 22.1C49.9 22.5 48.8 22.9 48.5 23.6ZM38.3 44.9C38.9 44.9 39.2 44.1 39.5 43.6C40.3 42.3 41.1 40.9 41.9 39.5C43 37.7 44.1 35.8 45.2 34C45.9 32.8 46.7 31.7 47 30.5C47.7 27.8 46.2 25.1 43.7 24.2C43 23.9 42.2 23.9 41.4 23.9C38.3 24.3 37 27.1 35.6 29.6C35.2 30.3 33.9 32.1 33.8 32.8C33.7 33.5 34.2 34.4 34.5 35.1C35.1 36.7 35.7 38.4 36.3 40C36.6 40.9 37.7 44.5 38.3 44.9ZM28.8 35.9C28.6 36.6 30 39.9 30.3 40.8C31.5 44.1 32.7 47.3 34 50.6C34.3 51.6 35.3 54.9 35.8 55.6C36.2 56.1 39 56 39.5 55.7C39.5 55.6 39.6 55.5 39.6 55.4C39.7 54.8 38.3 51.6 38 50.8C36.6 47 35.2 43.1 33.8 39.2C33.4 38.3 32.6 35.3 31.9 34.8C31.4 34.7 29.2 35.6 28.8 35.9ZM29.8 46.3C30.1 45.6 28.8 42.8 28.5 41.9C28.2 41 26.9 37.2 26.5 36.7C26.1 36.2 24.6 36 24 35.9C21.8 35.5 18.5 34.3 16.5 35.4C15.1 36.1 14.2 37.8 13.3 39.1C11.7 41.5 10 43.9 8.3 46.2C7.5 47.4 6.2 48.7 5.8 50.1C5 53.1 8.4 55.6 11.1 54.1C12.1 53.5 12.7 52.4 13.3 51.5C14.6 49.6 15.9 47.8 17.2 46C17.8 45.1 18.4 43.7 19.5 43.3C19.9 43.2 20.2 43.2 20.6 43.2C21.4 43.3 22.1 43.8 22.9 44C24.2 44.6 25.6 45.1 27 45.6C27.7 45.9 29.2 46.8 29.8 46.3Z"/><g fill="currentColor" stroke="none"><circle cx="23.16" cy="19.96" r="11.89"/><circle cx="44.16" cy="16.63" r="5.22"/></g>'
  },
  {
    id: "car-seatbelt",
    name: "Seatbelt reminder",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["fasten seatbelt", "belt minder"],
    looksLike: ["person in a seat", "seated person with diagonal line", "person with a sash", "man sitting with a strap"],
    meaning: "Someone (driver or passenger) isn't wearing their seatbelt. It usually beeps too.",
    action: "Buckle up. If everyone's belted in, check for a heavy bag on a passenger seat. The sensor can mistake it for a person.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.5 17.1L29.5 18.7C29.1 19.1 28.6 19.2 28.1 19.5C26.8 20.1 25.5 20.8 24.2 21.4C23.7 21.7 23.1 21.9 22.7 22.2C22.1 22.7 21.9 24.6 21.7 25.4C20.9 28.3 20.3 31.3 19.6 34.2C19.4 35 18.8 37.2 19.4 37.8C20.1 37.9 20.4 37.4 20.8 37C21.8 35.8 22.8 34.8 23.8 33.7C26.5 30.8 29.4 28 32 25C32.9 24.1 33.8 23.2 34.7 22.2C35.2 21.6 35.8 20.9 36.4 20.4L38.5 21.6C35.6 24.6 32.7 27.6 29.9 30.6C28.5 32.3 26.9 33.7 25.4 35.3C24.7 36.2 22.7 38 22.3 38.8C22 39.2 22.2 40 22.6 40.3C23.3 40.5 24.4 40 25.1 39.8C26.8 39.4 28.5 39.2 30.2 39.1C34.9 38.9 39.5 39.8 43.8 41.4L43.3 43.7C38 41.7 32.3 40.8 26.7 41.8C25.3 42.1 23.9 42.5 22.4 43C21.8 43.2 21.1 43.5 20.4 43.7C20.1 42.5 19.9 41 19.8 39.7C19.7 39.2 19.9 38.4 19.4 38C18.7 38 17.7 39.4 17.2 39.9C15.8 41.5 14.1 43 12.7 44.7C12.1 45.3 11.2 46 10.9 46.8C10.9 47.4 12.5 48.9 13.1 49.1C13.9 49 14.7 48.1 15.2 47.6C16.3 46.8 18.8 45 20 44.7C21 48.1 22.3 51.3 23.8 54.5C24.3 55.4 24.6 56.5 25.3 57.3C25.4 57.4 25.5 57.6 25.7 57.6C26.3 57.8 29.3 58.2 29.9 58.2C30 58.1 30.1 58.1 30.2 58C30.5 57.4 29.3 55.5 28.9 54.9C28.1 53.3 25.7 48.1 25.7 46.5C28.2 45.2 32.5 45.1 35.2 45.7C36.1 45.9 37.4 46 38.2 46.6C37.8 49 36 52.4 35 54.7C34.6 55.5 33.4 57.2 33.6 57.9C33.7 58.1 33.9 58.2 34.1 58.2C34.8 58.2 38.1 57.8 38.5 57.4C39.1 56.6 39.7 55 40.2 54C41.7 51 43 47.9 43.8 44.6C44.7 44.6 48.2 47 49.1 47.7C49.7 48.1 50.4 49 51.1 49C51.6 48.8 53 47.3 53.1 46.7C52.9 46 51.7 45.3 51.1 44.9C49.1 43.4 46.8 41.8 44.5 41.1C44.5 40.6 44.6 40 44.6 39.5C44.7 38.3 44.7 37 44.6 35.7C44.4 34.7 44.1 33.7 43.9 32.7C43.5 31 43.1 29.3 42.7 27.7C42.5 26.8 41.7 22.8 41.3 22.3C40.9 21.9 40.1 21.7 39.5 21.4L45.9 14.4C45.9 13.7 44.4 12.2 43.7 12.1C43 12.2 41.9 13.7 41.4 14.3C39.7 16.2 37.8 17.8 36.2 19.8L34.3 18.8L34.3 17.1C35.3 16.1 36.2 15.2 36.6 13.8C36.9 12.8 37 11.8 36.8 10.8C36.4 7.5 33.3 4.3 29.9 6.2C27.2 7.7 26.3 11.4 27.3 14.1C27.8 15.4 28.5 16.2 29.5 17.1Z"/>'
  },
  {
    id: "car-power-steering",
    name: "Power steering warning",
    category: "car",
    color: "red",
    urgency: "soon",
    aka: ["EPS", "electric power steering", "EPAS", "steering fault"],
    looksLike: ["steering wheel with exclamation mark", "wheel and !", "steering wheel"],
    meaning: "The power steering has a fault. The steering still works, but it may suddenly become very heavy.",
    action: "Drive carefully, especially at low speeds and when parking, and get it checked soon. Some cars show it in amber for a less serious fault.",
    svg: `<circle cx="27" cy="32" r="16"/><circle cx="27" cy="32" r="4.5"/><path d="M11 30h11.5M31.5 30H43M27 36.5V48"/><path d="M53 22v12"/><circle cx="53" cy="40.5" r="2.2" fill="currentColor" stroke="none"/>`
  },
  {
    id: "car-door-open",
    name: "Door open",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["door ajar", "door warning"],
    looksLike: ["car from above with doors open", "car with wings", "top view of a car", "car with open doors"],
    meaning: "One or more doors (sometimes the boot or bonnet) isn't fully shut.",
    action: "Stop and close the door properly before setting off. Some cars show exactly which door on the display.",
    // Traced from the Wikimedia dashboard lamp set (ISO 2575 style).
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M24.1 37.5C23.2 38 20.9 37.2 20.1 37.9C19.7 38.4 19.9 40.4 19.9 41.1C19.9 44.2 19.9 47.2 19.9 50.3C19.9 50.8 19.9 51.2 20 51.6C20.2 52.1 20.5 52.6 20.8 53.1C21.4 54.1 21.9 55.1 22.5 56.1C22.8 56.7 23.5 58.1 24.3 57.3C24.8 56.8 24.3 56.1 24.1 55.6C23.3 54.3 22.6 53 21.8 51.7C21.4 50.8 21.5 49.7 21.5 48.7C21.5 46.6 21.5 44.5 21.5 42.4C21.5 41.6 21.3 40 21.6 39.4C22.6 39 25 39.7 25.6 39C26.1 38.5 25.9 36.2 25.9 35.5C25.9 34.3 26.1 32.3 25.8 31.3C25.7 30.8 25.4 30.3 25.1 29.9C24.2 28.1 23.1 26.4 22.4 24.6C22.1 23.9 22.2 21.7 22.2 20.9C22.2 18.7 22.3 16.5 22.2 14.4C22.2 13.2 21.9 11.9 22.3 10.8C22.8 9.5 24 8.3 25.3 7.9C26.6 7.4 28.2 7.6 29.6 7.6C31.5 7.6 33.4 7.6 35.4 7.6C36.5 7.6 37.8 7.4 38.8 7.8C39.8 8.1 40.7 9 41.2 9.8C42.2 11.5 41.8 13.9 41.8 15.8C41.8 18 42 20.2 41.8 22.4C41.8 23.1 41.9 23.9 41.8 24.6C41.6 25.3 39.7 28.6 39.2 29.5C38.9 30 38.6 30.5 38.4 31.1C38.1 32.1 38.4 35.2 38.4 36.5C38.4 37 38.2 38.6 38.7 39C39.3 39.7 41.5 39 42.4 39.4C42.8 40 42.5 41.7 42.5 42.5C42.5 44.6 42.5 46.7 42.5 48.8C42.5 49.7 42.8 50.9 42.5 51.7C42 52.8 40.5 54.8 39.9 56C39.6 56.5 39.5 57.3 40.3 57.4C40.5 57.4 40.8 57.4 41 57.2C41.5 56.8 42.7 54.4 43.2 53.7C43.5 53.2 44 52.6 44.1 52C44.4 51.1 44.2 50 44.2 49.1C44.2 46.8 44.2 44.4 44.2 42.1C44.2 41.3 44.4 38.6 44.1 38.1C43.6 37.2 41.1 37.9 40.2 37.6C39.8 37.1 40 35.4 40 34.8C40 33.9 39.8 32.1 40 31.4C40.2 30.9 40.6 30.4 40.8 29.9C41.5 28.6 42.9 26.4 43.3 25.1C43.6 24.3 43.5 21.6 43.5 20.6C43.5 18.4 43.5 16.3 43.5 14.1C43.5 13.1 43.6 12 43.4 11C43.1 9.2 41.5 7.2 39.8 6.5C38.1 5.7 36.1 6 34.3 6C32.6 6 31 6 29.4 6C26 6 23.2 5.9 21.3 9.2C21 9.8 20.7 10.4 20.6 11C20.4 12.1 20.6 13.2 20.6 14.2C20.6 16.4 20.6 18.5 20.6 20.7C20.6 21.5 20.5 24.2 20.7 24.9C20.9 25.6 21.4 26.3 21.8 26.9C22.3 27.8 22.7 28.8 23.2 29.8C23.6 30.3 24 31 24.2 31.6C24.4 32.4 24.2 34.1 24.2 35C24.2 35.8 24.4 36.8 24.1 37.5ZM24.8 18C23.2 18.2 24 20 24.2 21C24.6 22.4 24.9 23.9 25.3 25.3C25.4 25.8 25.4 26.6 25.9 26.9C26.4 27.2 27 27.1 27.6 27.1C30.3 27.1 33.1 27.1 35.9 27.1C37 27.1 38.3 27.6 38.6 26.1C39 24.2 39.4 22.3 39.9 20.4C40 19.8 40.4 18.8 39.9 18.3C39.3 17.8 37.2 18.1 36.5 18.1C35 18.1 33.6 18 32.2 18C31.5 18 30.7 18.1 30 18C29 17.9 25.8 17.9 24.8 18ZM18.1 26.6C17.6 26.7 14.5 30 13.9 30.6C13.3 31.2 11.4 32.9 11.1 33.5C10.7 34.1 11.3 34.9 12 34.7C12.6 34.5 15.5 31.4 16.2 30.7C16.9 30 18.6 28.5 19.1 27.8C19.4 27.1 18.8 26.4 18.1 26.6ZM45.5 26.6C44.9 26.7 44.7 27.4 45 27.9C45.6 28.8 47.1 30 48 30.9C49 31.9 50 32.9 51 33.9C51.4 34.3 51.8 34.9 52.4 34.7C53 34.5 53.2 33.8 52.8 33.3C51.9 32.3 50.9 31.4 49.9 30.4C49.1 29.6 47 27.2 46.2 26.7C46 26.6 45.7 26.5 45.5 26.6ZM32 42.9C30.9 43.1 27.6 42.7 26.8 43.2C26.1 43.5 25.4 47.8 25.3 48.7C25.1 49.5 24.4 51.8 24.8 52.4C25.2 52.9 26.1 52.7 26.7 52.7C28.5 52.7 30.3 52.7 32.1 52.7C33.9 52.7 35.7 52.7 37.4 52.7C38.1 52.7 39 52.8 39.4 52.1C39.8 51.4 39.1 49.4 39 48.5C38.8 47.5 38.2 43.8 37.6 43.2C37.4 43.1 37.1 43 36.8 42.9C35.9 42.8 33 42.8 32 42.9ZM34.5 56.3C33.9 56.4 33.2 56.4 32.5 56.4C31.1 56.4 29.7 56.4 28.3 56.4C27.6 56.4 26.1 56.1 26.1 57.1C26 57.4 26.2 57.7 26.4 57.8C26.9 58.2 28.5 58 29.2 58C31.2 58 33.3 58 35.4 58C36.1 58 37.6 58.2 37.7 57.2C37.7 56.9 37.5 56.6 37.3 56.5C36.9 56.2 35.1 56.3 34.5 56.3Z"/>'
  },
  {
    id: "car-bonnet-boot-open",
    name: "Bonnet or boot open",
    quiz: "Bonnet or boot not shut",
    category: "car",
    color: "red",
    urgency: "stop",
    aka: ["hood open", "trunk open", "tailgate open", "bonnet not closed", "boot lid open"],
    looksLike: ["car with bonnet up", "car with boot open", "car with the front open", "car with lid up", "car with a raised panel", "car side view with flap up"],
    meaning: "The bonnet or the boot isn't fully shut. The picture shows which: a raised panel at the front is the bonnet, at the back it's the boot or tailgate.",
    action: "Stop somewhere safe and shut it properly. A bonnet that flies up at speed blocks your view completely. Drop the bonnet from about 30 cm so the catch locks, rather than pressing it down. If the light stays on with everything shut, the latch sensor may be dirty or faulty: get it checked.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21 26.4C20.1 26 19.2 25.4 18.4 24.8C17 23.9 15.5 23 14 22.1C13.2 21.6 12.4 20.9 11.4 20.6C10.5 20.3 7.9 20.4 7.6 21.6C7.7 22.1 9.3 23.6 9.8 23.7C10.3 23.8 10.6 23.4 11 23.3L16.8 28.1C14.6 28.7 12.3 29 10.1 29.5C9.3 29.7 7.9 29.8 7.3 30.2C6.9 30.6 4.7 34.3 4.8 34.8C4.9 35.4 5.6 36.5 5.9 37.1C6.1 37.6 6.4 38.6 7 38.9C8 39.5 10.5 39.8 11.8 40.3C11.9 40.6 12 40.9 12.1 41.2C12.3 42.1 12.8 42.9 13.5 43.5C15.6 45.3 18.7 45.1 20.5 43C20.9 42.5 21.2 42 21.5 41.4L42.5 41.4C43 42.2 43.3 43.1 44.2 43.7C46.4 45.4 49.6 44.9 51.2 42.6C51.7 42 51.8 41.2 52.1 40.5C53.1 40 55.2 39.8 56 39.2C56.5 38.9 59.2 35.1 59.2 34.6C59.3 33.9 58.7 32.5 58.5 31.7C58.3 31.1 58.2 30 57.7 29.6C57.1 29.1 52.1 27.8 51 27.5C50.5 27.3 49.8 27.2 49.4 26.9C48.8 26.4 48.3 25.8 47.8 25.3C46.6 24.1 45.5 22.9 44.3 21.8C43.6 21 42.9 20.1 41.8 19.7C40.3 19.3 38.4 19.6 36.9 19.5C35.1 19.3 33.3 19.3 31.6 19.3C30.3 19.3 29 19 27.8 19.7C27.1 20.2 26.5 20.9 25.9 21.5C24.8 22.7 23.6 23.8 22.4 25C22 25.5 21.5 26.1 21 26.4ZM56.2 31.1L57.1 34.3C56.9 34.9 55.1 37.4 54.7 37.6C53.8 38.1 50.8 38.5 50.3 39C50 39.5 50.2 40.4 49.8 41.1C48.9 43 46.4 43.3 45 41.8C44.3 41.1 44.5 40 43.9 39.4C43.3 39.2 39.5 39.4 38.6 39.4C34.3 39.4 30.1 39.4 25.8 39.4C24.4 39.4 23 39.4 21.6 39.4C21.1 39.4 20.4 39.2 20 39.4C19.5 40.1 19.7 41.1 19 41.8C17.5 43.3 14.9 43 14.1 41C13.7 40.2 14.1 39.6 13.9 38.9C13.4 38.4 9.2 37.7 8.2 37.2L6.9 34.8C7 34.3 7.4 33.8 7.6 33.4C7.9 33 8.1 32.3 8.5 31.9C8.8 31.7 11.1 31.3 11.6 31.2C13.7 30.8 15.8 30.3 17.9 29.9C18.8 29.7 19.9 29.6 20.8 29.2C21.6 28.9 22.2 28 22.8 27.4C24.2 25.9 25.7 24.5 27.1 23.1C27.7 22.5 28.3 21.6 29.1 21.3C29.8 21 31.5 21.2 32.3 21.3C33.1 21.4 33.9 21.3 34.7 21.3C35.9 21.4 37.2 21.4 38.4 21.4C39.3 21.4 40.8 21.2 41.6 21.8C42.4 22.4 43.2 23.3 43.9 24.1C44.8 25.1 45.9 26.1 46.8 27.1C47.3 27.6 47.8 28.3 48.4 28.7C48.9 29 49.7 29.1 50.2 29.3C52 29.8 54.6 30.4 56.2 31.1ZM23.2 28.8C23.3 29 23.3 29.1 23.5 29.1C24.3 29.4 26.7 29.2 27.6 29.2C31.2 29.2 34.7 29.2 38.3 29.2C39.2 29.2 41.8 29.4 42.5 29C42.6 28.8 42.6 28.7 42.6 28.4C42.5 27.1 41.9 25.3 41.5 24C41.4 23.5 41.4 22.8 40.8 22.5C40.2 22.3 38.9 22.4 38.2 22.4C36.3 22.4 34.3 22.4 32.3 22.2C31.6 22.2 29.9 22 29.4 22.3C28.6 22.7 26.8 24.8 26.1 25.5C25.4 26.2 23.7 27.6 23.2 28.4C23.1 28.6 23.2 28.7 23.2 28.8ZM39.5 24.4L40.3 27.2L27.2 27.2C27.5 26.7 29.8 24.4 30.2 24.2C30.7 23.9 32 24.2 32.6 24.2C33.9 24.2 35.2 24.2 36.5 24.3C37.5 24.4 38.6 24.3 39.5 24.4Z"/>'
  },

  // ───────────────────────── AMBER: sort it soon ─────────────────────────
  {
    id: "car-check-engine",
    name: "Check engine light",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["engine management light", "EML", "MIL", "malfunction indicator lamp", "CEL", "service engine soon"],
    looksLike: ["submarine", "engine", "motor", "boxy blob", "engine block", "brick with pipes", "lego brick"],
    meaning: "The engine's computer has spotted a problem with the engine or emissions system. It could be anything from a loose fuel cap to a misfiring engine. Quite a range for one little submarine.",
    action: "Steady: get it scanned at a garage (or with a cheap OBD-II reader) soon. FLASHING: the engine is misfiring badly. Slow down and get it checked immediately to avoid damaging the catalytic converter.",
    tip: "A loose fuel cap is a classic cause. Tighten it and the light may go off by itself after a few drives.",
    svg: `<path d="M20 24h22l4 4h6v-4h4v20h-4v-4h-6l-6 8H24l-4-4h-4v-6h-4v6H8V28h4v6h4V24z"/><path d="M24 18h12M30 18v6"/>`
  },
  {
    id: "car-tyre-pressure",
    name: "Tyre pressure warning",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["TPMS", "low tire pressure", "tire pressure monitoring system"],
    looksLike: ["horseshoe with exclamation mark", "u with exclamation mark", "flat tyre", "bracket with !", "pot with exclamation mark", "cauldron"],
    meaning: "At least one tyre is significantly under-inflated. The symbol is a cross-section of a flat tyre.",
    action: "Check all the tyre pressures (including the spare, if it's monitored) and inflate them to the figure on the sticker inside the driver's door. If one keeps losing air, it's a puncture. If the light flashes and then stays on, the sensor system itself has a fault.",
    tip: "Cold weather drops tyre pressure, which is why this light loves frosty mornings.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.5 57.1L19.6 54.4L22.3 54.4C22.4 55.2 22.1 56.5 22.6 57.2C23.1 57.6 26.3 57.5 26.8 57.2C27.2 56.4 26.9 55.2 27 54.4L29.6 54.4C29.9 55.2 29.4 56.4 29.9 57.2C30.3 57.5 33.5 57.6 34.1 57.2C34.6 56.5 34.2 55.2 34.3 54.4L37 54.4C37.1 55.2 36.7 56.5 37.2 57.2C37.8 57.6 41 57.5 41.4 57.2C41.9 56.4 41.5 55.2 41.7 54.4L44.3 54.3C44.5 55.2 44 56.5 44.6 57.3C45.2 57.6 46.3 57.5 47 57.4C47.8 57.4 48.8 57.5 49.5 57C50.5 56.4 50.9 54.9 51.3 53.8C52.3 51.3 53.1 48.8 54.4 46.4C55.3 44.9 56.1 43.4 56.8 41.7C59 35.5 58.8 28.1 56.2 22C55.6 20.5 54.9 19 54 17.6C53.4 16.7 52.6 15.9 52.1 15C51.2 12.9 52.9 8.3 50.4 7.1C49.7 6.8 46.8 6.5 46.1 6.6C45.8 6.7 45.5 6.8 45.2 7.1C44.4 8 44.8 12.7 45.1 13.8C46.2 17.3 49 18.2 51 20.9C54.8 26.1 55.4 33.1 53.5 39.2C52.3 43 50 46.5 47 49.2C46.5 49.6 46 50.2 45.4 50.5C44.8 50.7 43.9 50.5 43.2 50.5C41.6 50.5 39.9 50.5 38.2 50.5C33.8 50.5 29.4 50.5 25 50.5C23.6 50.5 22.1 50.5 20.7 50.5C20.1 50.5 19.4 50.6 18.8 50.5C17.6 50.3 14.5 46.6 13.7 45.6C9.2 39.4 7.8 30.2 11.6 23.3C12.3 21.9 13.1 20.6 14.2 19.5C15.5 18.2 17.1 17.2 18.1 15.5C19.2 13.6 19.2 11.6 19.2 9.4C19.2 7.8 19.1 6.5 17.1 6.6C16.2 6.6 14.5 6.7 13.8 7C11.1 8 12.9 13.1 11.8 15.1C11.3 15.9 10.7 16.6 10.2 17.4C9.1 18.9 8.3 20.6 7.6 22.4C5.3 28.5 5 35.7 7.3 41.9C7.9 43.5 8.7 44.9 9.5 46.4C10.6 48.4 11.4 50.5 12.2 52.6C12.7 54 13.1 55.7 14.1 56.8C14.4 57 14.7 57.2 15 57.3C15.7 57.5 18.4 57.6 19.1 57.4C19.3 57.4 19.4 57.2 19.5 57.1ZM31.8 13.9C30.5 14 29.3 14.9 29 16.3C28.7 17.4 29 18.6 29 19.8C29.2 21.7 29.2 23.7 29.4 25.6C29.6 28.9 29.6 32.2 29.9 35.4C29.9 36.7 30.7 37.8 32.1 37.7C33.6 37.7 34.1 36.3 34.1 35C34.4 31.8 34.6 28.6 34.6 25.4C34.7 23.3 34.8 21.1 35 18.9C35 18.1 35.2 17.2 35 16.4C34.8 15 33.4 13.8 31.8 13.9Z"/><g fill="currentColor" stroke="none"><circle cx="31.99" cy="43.34" r="2.42"/></g>'
  },
  {
    id: "car-traction-control",
    name: "Traction / stability control",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["ESC", "ESP", "TCS", "DSC", "VSC", "stability control", "skid light"],
    looksLike: ["car with two s shaped tracks", "car skidding", "car with squiggly lines", "car with wavy lines", "skidding car", "car with s lines", "car drifting", "car with snakes"],
    meaning: "If it FLASHES while you're driving, the system is actively stopping your wheels from slipping. That's normal on wet, icy or loose roads. If it stays ON, there's a fault and the system is off.",
    action: "Flashing: ease off the accelerator and drive gently. Constantly on: you can drive, but carefully, and get it checked soon.",
    // Traced from the maker's artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M35.5 6.1C37.2 6.1 39 5.9 40.5 6.1C42 6.3 43.6 6.7 44.6 7.1C45.6 7.5 46 7.5 46.8 8.6C47.6 9.7 49.3 13.7 49.3 13.7C49.3 13.7 52.1 14.2 53 14.6C53.9 15 54.2 15.8 54.4 16.4C54.6 17 54.9 17.8 54.4 18.4C53.9 19 51.2 20 51.2 20C51.2 20 51.7 23.8 51.5 25.5C51.3 27.2 50.2 30.4 50.2 30.4C50.2 30.4 50.4 34 50.2 35C50 36 50 36.2 48.9 36.4C47.8 36.6 44.7 36.6 43.6 36.4C42.5 36.2 42.6 35.9 42.4 35C42.2 34.1 42.4 30.8 42.4 30.8C42.4 30.8 37.8 30.8 35.5 30.8C33.2 30.8 28.6 30.8 28.6 30.8C28.6 30.8 28.8 34.1 28.6 35C28.4 35.9 28.5 36.2 27.4 36.4C26.3 36.6 23.2 36.6 22.1 36.4C21 36.2 21 36 20.8 35C20.6 34 20.8 30.4 20.8 30.4C20.8 30.4 19.7 27.2 19.5 25.5C19.3 23.8 19.8 20 19.8 20C19.8 20 17.1 19 16.6 18.4C16.1 17.8 16.4 17 16.6 16.4C16.8 15.8 17.1 15 18 14.6C18.9 14.2 21.7 13.7 21.7 13.7C21.7 13.7 23.4 9.7 24.2 8.6C25 7.5 25.3 7.5 26.4 7.1C27.4 6.7 29 6.3 30.5 6.1C32 5.9 33.8 6.1 35.5 6.1ZM30.6 10.7C32.6 10.5 38.4 10.5 40.4 10.7C42.4 10.8 42 10.8 42.6 11.6C43.2 12.3 43.8 14.4 44.3 15.2C44.8 16 45.6 16.4 45.6 16.4L25.4 16.4C25.4 16.4 26.2 16 26.7 15.2C27.2 14.4 27.8 12.3 28.4 11.6C29 10.8 28.6 10.8 30.6 10.7Z"/><path fill="currentColor" stroke="none" d="M18.5 37.8C18.5 37.8 24.8 37.4 27.3 38C29.8 38.6 32.1 40.8 33.4 41.7C34.7 42.6 34.7 43 34.9 43.6C35.1 44.2 35 44.8 34.4 45.6C33.8 46.4 33.7 47.2 31 48.4C28.3 49.6 18.4 52.9 18.4 52.9C18.4 52.9 18.2 53.6 19 54.4C19.8 55.2 23.1 57.9 23.1 57.9L13.1 57.8C13.1 57.8 10.2 56.1 9.4 55.2C8.7 54.3 8.5 53.4 8.6 52.6C8.7 51.8 9.3 51 9.9 50.4C10.5 49.8 10.7 49.7 12.4 49C14.1 48.3 18 47.2 20.1 46.4C22.2 45.6 24.3 44.8 25.1 44.2C25.9 43.6 25.9 43.8 25 43C24.1 42.2 20.5 40.1 19.4 39.2C18.3 38.3 18.5 37.8 18.5 37.8Z"/><path fill="currentColor" stroke="none" transform="translate(22.6 0)" d="M18.5 37.8C18.5 37.8 24.8 37.4 27.3 38C29.8 38.6 32.1 40.8 33.4 41.7C34.7 42.6 34.7 43 34.9 43.6C35.1 44.2 35 44.8 34.4 45.6C33.8 46.4 33.7 47.2 31 48.4C28.3 49.6 18.4 52.9 18.4 52.9C18.4 52.9 18.2 53.6 19 54.4C19.8 55.2 23.1 57.9 23.1 57.9L13.1 57.8C13.1 57.8 10.2 56.1 9.4 55.2C8.7 54.3 8.5 53.4 8.6 52.6C8.7 51.8 9.3 51 9.9 50.4C10.5 49.8 10.7 49.7 12.4 49C14.1 48.3 18 47.2 20.1 46.4C22.2 45.6 24.3 44.8 25.1 44.2C25.9 43.6 25.9 43.8 25 43C24.1 42.2 20.5 40.1 19.4 39.2C18.3 38.3 18.5 37.8 18.5 37.8Z"/>'
  },
  {
    id: "car-traction-control-off",
    name: "Traction control OFF",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["ESC OFF", "ESP OFF", "TCS OFF", "DSC OFF"],
    looksLike: ["car with squiggly lines and off", "skidding car off", "car with wavy lines off"],
    meaning: "The traction / stability control has been switched off, usually because someone pressed the button. A rare symbol that actually spells it out.",
    action: "Press the button with the same symbol (often near the gear lever or on the dash) to switch it back on. Only turn it off deliberately, for example to get out of snow or mud.",
    // Kia and Nissan: the stability-control car and skid tracks with OFF underneath.
    svg: '<g transform="matrix(0.76 0 0 0.76 7.68 1.44)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M35.5 6.1C37.2 6.1 39 5.9 40.5 6.1C42 6.3 43.6 6.7 44.6 7.1C45.6 7.5 46 7.5 46.8 8.6C47.6 9.7 49.3 13.7 49.3 13.7C49.3 13.7 52.1 14.2 53 14.6C53.9 15 54.2 15.8 54.4 16.4C54.6 17 54.9 17.8 54.4 18.4C53.9 19 51.2 20 51.2 20C51.2 20 51.7 23.8 51.5 25.5C51.3 27.2 50.2 30.4 50.2 30.4C50.2 30.4 50.4 34 50.2 35C50 36 50 36.2 48.9 36.4C47.8 36.6 44.7 36.6 43.6 36.4C42.5 36.2 42.6 35.9 42.4 35C42.2 34.1 42.4 30.8 42.4 30.8C42.4 30.8 37.8 30.8 35.5 30.8C33.2 30.8 28.6 30.8 28.6 30.8C28.6 30.8 28.8 34.1 28.6 35C28.4 35.9 28.5 36.2 27.4 36.4C26.3 36.6 23.2 36.6 22.1 36.4C21 36.2 21 36 20.8 35C20.6 34 20.8 30.4 20.8 30.4C20.8 30.4 19.7 27.2 19.5 25.5C19.3 23.8 19.8 20 19.8 20C19.8 20 17.1 19 16.6 18.4C16.1 17.8 16.4 17 16.6 16.4C16.8 15.8 17.1 15 18 14.6C18.9 14.2 21.7 13.7 21.7 13.7C21.7 13.7 23.4 9.7 24.2 8.6C25 7.5 25.3 7.5 26.4 7.1C27.4 6.7 29 6.3 30.5 6.1C32 5.9 33.8 6.1 35.5 6.1ZM30.6 10.7C32.6 10.5 38.4 10.5 40.4 10.7C42.4 10.8 42 10.8 42.6 11.6C43.2 12.3 43.8 14.4 44.3 15.2C44.8 16 45.6 16.4 45.6 16.4L25.4 16.4C25.4 16.4 26.2 16 26.7 15.2C27.2 14.4 27.8 12.3 28.4 11.6C29 10.8 28.6 10.8 30.6 10.7Z"/><path fill="currentColor" stroke="none" d="M18.5 37.8C18.5 37.8 24.8 37.4 27.3 38C29.8 38.6 32.1 40.8 33.4 41.7C34.7 42.6 34.7 43 34.9 43.6C35.1 44.2 35 44.8 34.4 45.6C33.8 46.4 33.7 47.2 31 48.4C28.3 49.6 18.4 52.9 18.4 52.9C18.4 52.9 18.2 53.6 19 54.4C19.8 55.2 23.1 57.9 23.1 57.9L13.1 57.8C13.1 57.8 10.2 56.1 9.4 55.2C8.7 54.3 8.5 53.4 8.6 52.6C8.7 51.8 9.3 51 9.9 50.4C10.5 49.8 10.7 49.7 12.4 49C14.1 48.3 18 47.2 20.1 46.4C22.2 45.6 24.3 44.8 25.1 44.2C25.9 43.6 25.9 43.8 25 43C24.1 42.2 20.5 40.1 19.4 39.2C18.3 38.3 18.5 37.8 18.5 37.8Z"/><path fill="currentColor" stroke="none" transform="translate(22.6 0)" d="M18.5 37.8C18.5 37.8 24.8 37.4 27.3 38C29.8 38.6 32.1 40.8 33.4 41.7C34.7 42.6 34.7 43 34.9 43.6C35.1 44.2 35 44.8 34.4 45.6C33.8 46.4 33.7 47.2 31 48.4C28.3 49.6 18.4 52.9 18.4 52.9C18.4 52.9 18.2 53.6 19 54.4C19.8 55.2 23.1 57.9 23.1 57.9L13.1 57.8C13.1 57.8 10.2 56.1 9.4 55.2C8.7 54.3 8.5 53.4 8.6 52.6C8.7 51.8 9.3 51 9.9 50.4C10.5 49.8 10.7 49.7 12.4 49C14.1 48.3 18 47.2 20.1 46.4C22.2 45.6 24.3 44.8 25.1 44.2C25.9 43.6 25.9 43.8 25 43C24.1 42.2 20.5 40.1 19.4 39.2C18.3 38.3 18.5 37.8 18.5 37.8Z"/></g><text x="32" y="60" font-size="13">OFF</text>'
  },
  {
    id: "car-abs",
    name: "ABS warning",
    quiz: "Anti-lock brake fault",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["anti-lock braking system", "anti-lock brakes"],
    looksLike: ["abs in a circle", "abs in brackets", "circle with abs"],
    meaning: "There's a fault in the anti-lock braking system. Your normal brakes still work, but the wheels could lock up in an emergency stop.",
    action: "Drive carefully, leave extra stopping distance and get it checked soon. If the red brake light is on as well, stop: that's more serious.",
    svg: `<circle cx="32" cy="32" r="14"/><path d="M14 18a20 20 0 0 0 0 28M50 18a20 20 0 0 1 0 28"/><text x="32" y="36" font-size="11">ABS</text>`
  },
  {
    id: "car-brake-pads",
    name: "Brake pad wear",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["brake pads worn", "brake lining"],
    looksLike: ["circle with dashed brackets", "circle with dotted lines", "circle in dashed parentheses"],
    meaning: "Your brake pads have worn down to the sensor and need replacing.",
    action: "Book a brake service soon. Leave it too long and you'll start damaging the brake discs, which turns a routine job into a pricier one.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.2 11C29.5 11.2 27.9 11.3 26.2 11.8C19.6 13.8 14.3 18.8 12.1 25.4C11.4 27.6 10.8 30.4 11 32.7C11.4 35.9 11.6 38 13.1 41C16.6 48.4 24.5 53.3 32.7 53C41.9 52.6 50 46.1 52.3 37.1C52.8 35.3 53.1 33.1 52.9 31.2C52.5 27.9 52.3 26.1 50.9 23C48.1 16.7 41.6 12 34.8 11.2C33.6 11.1 32.3 10.9 31.2 11ZM51 12.8C50.4 13 48.7 14.7 48.5 15.3C48.6 16 49.5 16.7 50 17.2C51 18.5 51.8 19.8 52.6 21.2C53 21.9 53.1 22.8 53.8 23.2C54.4 23.3 56.7 22.4 57.1 21.8C57.1 21 56.6 20.2 56.3 19.6C55.4 17.8 54.2 16 52.9 14.5C52.4 13.9 51.8 12.8 51 12.8ZM12.8 12.8C11.3 13.4 8.7 17.8 7.9 19.2C7.5 19.9 6.8 21 6.9 21.8C7.2 22.3 9.6 23.3 10.2 23.2C10.9 22.7 11.1 21.6 11.5 20.9C12.2 19.6 13 18.4 13.9 17.3C14.4 16.7 15.3 16.1 15.4 15.3C15.4 14.8 13.8 13.2 13.2 12.9C13.1 12.8 12.9 12.8 12.8 12.8ZM31.2 13.3C32.7 13.2 34.3 13.4 35.8 13.7C43.8 15.4 50.6 22.8 50.6 31.2C50.6 32.6 50.6 34 50.3 35.4C49.3 41.2 45.1 46.6 39.7 49C37.4 50 35.1 50.4 32.7 50.6C30.9 50.8 28.8 50.5 27 50C18.9 47.7 14 41 13.3 32.8C12.7 25 18 17.5 25.1 14.7C27.1 13.8 29.1 13.6 31.2 13.3ZM5.4 26.6C4.9 27.2 5 28.2 4.9 28.9C4.7 30.9 4.6 32.9 4.9 34.8C4.9 35.6 4.9 36.7 5.4 37.4C6 37.6 8.5 37.1 9 36.7C9.3 36.1 8.9 35.1 8.8 34.4C8.7 32.9 8.7 31.3 8.8 29.8C8.9 29.1 9.3 27.9 9 27.2C8.5 26.8 6 26.3 5.4 26.6ZM55 27.2C54.7 27.9 55.1 29 55.1 29.7C55.3 31.2 55.3 32.8 55.1 34.2C55.1 35 54.6 36.1 55 36.7C55.5 37.1 57.9 37.6 58.5 37.4C59 36.9 59 35.9 59.1 35.2C59.3 33.2 59.3 31.1 59.1 29.1C59 28.3 59.1 27.1 58.5 26.6C57.9 26.4 55.5 26.9 55 27.2ZM6.9 42.1C6.7 42.8 7.5 44 7.8 44.6C8.8 46.4 9.8 48 11.1 49.5C11.6 50.1 12.1 50.9 12.8 51.2C13.4 51.2 15.4 49.2 15.4 48.6C15.3 47.9 14.5 47.4 14.1 46.8C13.1 45.6 12.2 44.4 11.5 43C11.1 42.4 10.9 41.2 10.2 40.8C9.6 40.7 7.3 41.6 6.9 42.1ZM53.7 40.8C53.1 41.2 52.7 42.7 52.3 43.4C51.6 44.5 50.8 45.7 50 46.7C49.5 47.3 48.9 47.8 48.5 48.5C48.5 48.6 48.5 48.8 48.6 48.9C48.8 49.4 50.5 51 51 51.2C51.8 51.1 52.4 50 52.9 49.5C54.2 47.9 55.4 46.2 56.3 44.4C56.6 43.7 57.1 42.9 57.1 42.2C56.7 41.6 54.4 40.7 53.7 40.8Z"/>'
  },
  {
    id: "car-low-fuel",
    name: "Low fuel",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["fuel warning", "reserve", "low gas"],
    looksLike: ["petrol pump", "gas pump", "fuel pump", "pump with a hose"],
    meaning: "You're running low on fuel. There's usually somewhere between 30 and 80 km (20–50 miles) left, depending on the car.",
    action: "Find a fuel station. Running completely dry can damage the fuel pump, not to mention your afternoon.",
    tip: "The little arrow beside the pump symbol on your fuel gauge points to the side of the car with the filler cap.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.6 5.8C40.4 6 40.3 6 40.3 6.2C40.1 6.8 40.1 9.3 40.5 9.6C40.9 10 41.5 10.1 42 10.4C42.8 10.8 43.5 11.3 44.2 11.8C47.4 14.3 49 17 49.8 21C50.3 23.3 50.5 25.6 50.8 28C51.1 31 51.5 34 51.9 37C52.1 38.9 52.3 40.7 52.5 42.6C52.6 43.4 52.8 44.3 52.8 45.2C52.3 49.2 47.3 50.5 45 47.2C44 45.7 44.3 43.7 44.3 42C44.3 39.6 44.3 37.3 44.3 35C44.3 33.6 44.4 32.2 44.2 30.8C44 29.8 43.6 28.8 43 27.9C42.1 26.6 40.8 25.7 39.3 25.1C38.6 24.9 37.8 24.9 37.1 24.6C37 23.4 37.1 22 37.1 20.8C37.1 18.1 37.1 15.3 37.1 12.6C37.1 10.9 37.5 8.8 36.4 7.4C35 5.6 32.5 6.1 30.4 6.1C25.4 6.1 20.3 6.1 15.2 6.1C13 6.1 10.5 5.7 9.4 8.1C8.9 9.3 9.1 10.8 9.1 12.1C9.1 14.8 9.1 17.4 9.1 20.1C9.1 27.8 9.1 35.6 9.1 43.4C9.1 45.8 9.1 48.2 9.1 50.7C9.1 51.7 9.3 53.2 9.1 54.3L7.1 54.5C6.7 55 6.7 57.6 7 58.1C7.6 58.4 8.5 58.3 9.2 58.3C10.7 58.3 12.3 58.3 13.8 58.3C19.9 58.3 25.9 58.3 31.9 58.3C33.6 58.3 35.4 58.3 37.1 58.3C37.8 58.3 38.7 58.5 39.2 58C39.6 57.5 39.5 54.9 39.1 54.5L37.2 54.2L37.2 28.7C38.7 28.9 40 30.1 40.3 31.6C40.4 32.4 40.3 33.2 40.3 34C40.3 36.9 40.3 39.7 40.3 42.5C40.3 44.7 40.2 46.8 41.3 48.7C44.7 54.7 53.7 54.4 56.2 47.8C57.1 45.3 56.5 42.8 56.2 40.2C55.8 36.2 55.3 32.2 54.8 28.2C54.7 27.3 54.1 23.3 54.3 22.7C55.1 22.2 56.4 22 57 21.2C57.1 20.2 55.3 17.4 54.7 16.5C52.2 12.8 48.8 9.7 44.9 7.5C44 7.1 41.4 5.7 40.6 5.8ZM33.1 10.1L33.1 24.6L13.1 24.6L13.1 10.1L33.1 10.1ZM33.1 28.7L33.1 54.3L13.2 54.3L13.1 28.7L33.1 28.7Z"/>'
  },
  {
    id: "car-glow-plug",
    name: "Glow plug (diesel)",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["diesel preheat", "heater plug"],
    looksLike: ["spring", "coil", "curly wire", "pigtail", "loops", "squiggle", "slinky"],
    meaning: "Diesel cars only: the glow plugs are warming up the engine so it will start. It's normal for it to light up when you turn the key. And no, it isn't a Slinky.",
    action: "Wait for it to go out before you start the engine. If it FLASHES while you're driving, or stays on, there's an engine fault, so get it checked.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M22.2 19.3C21.2 18.9 20.2 18.3 19.2 17.9C15.9 16.7 11.8 17.1 8.9 19C8 19.5 5.8 21.1 5.9 22.2C6.1 22.8 7.8 23.8 8.4 23.9C8.8 23.8 10.2 22.3 11 21.9C13.5 20.4 16.7 20.4 19.3 21.8C18.9 22.5 17.7 23.7 17.2 24.5C15.9 26.6 15 28.9 14.5 31.3C13.8 35.6 14.1 40.5 16.4 44.4C18.1 47.3 22.1 48.7 25.1 47.1C28.2 45.4 29.5 41.9 30 38.7C31 32 29.7 26.8 25.2 21.7C25.6 21.4 26.1 21.1 26.6 20.9C29.4 19.7 32.8 19.5 35.8 20.4C36.8 20.6 38.1 21 38.8 21.7C34.2 26.9 32.8 32.6 34.1 39.4C34.7 42.4 36 45.5 38.9 47.1C41.8 48.6 45.8 47.3 47.5 44.5C49.9 40.7 50.2 35.6 49.4 31.3C49 28.9 48.1 26.6 46.8 24.6C46.3 23.8 45 22.4 44.7 21.8C47.2 20.4 50.5 20.4 53 21.8C53.4 22.1 53.9 22.4 54.2 22.8C54.6 23.1 55 23.7 55.5 23.9C56.1 23.9 57.9 22.7 58.1 22.1C58 21 55.9 19.5 55 18.9C51.9 17.1 48 16.7 44.6 18C43.6 18.3 42.7 18.9 41.8 19.2C41.2 19 40.6 18.6 40 18.2C39 17.7 37.9 17.2 36.8 16.9C33.4 16 29.5 16.1 26.2 17.3C25.2 17.6 24.3 18.1 23.5 18.5C23.1 18.8 22.7 19.1 22.2 19.3ZM22.3 23.9C23.2 24.4 24.3 26.1 24.8 27C26.9 30.7 27.2 35 26.3 39.1C25.9 40.9 25 43.7 22.9 44.1C19.8 44.8 18.6 41.2 18.1 38.8C17.1 34.4 18 29.3 20.8 25.6C21.2 25 21.7 24.3 22.3 23.9ZM41.6 23.9C42.5 24.3 43.6 26.1 44.1 26.9C46.2 30.6 46.8 35.2 45.8 39.3C45.3 41.3 44.5 43.7 42.2 44.1C39.4 44.7 38.1 41 37.6 38.9C36.8 34.5 37.2 29.9 39.7 26.2C40.2 25.4 40.8 24.5 41.6 23.9Z"/>'
  },
  {
    id: "car-dpf",
    name: "Diesel particulate filter (DPF)",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["DPF warning", "particulate filter blocked", "soot filter"],
    looksLike: ["box with dots", "rectangle with dots and pipes", "filter", "dotted box", "domino", "sponge"],
    meaning: "The diesel particulate filter in the exhaust is clogging up with soot. It normally burns this off on longer, faster drives, but lots of short trips stop that happening. In short, your car fancies a proper run out.",
    action: "Drive at a steady 60+ km/h (40+ mph) for 15–20 minutes on a motorway or main road so it can regenerate. If the light doesn't clear, see a garage.",
    // Traced from Volkswagen's warning lamp artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.9 27.2C8.9 27.7 5.9 26.9 5.1 27.5L5.1 30C5.6 30.3 6.5 30.1 7.1 30.1C8.2 30.1 11.9 30.3 12.7 30.1C13 29.5 12.9 28.6 12.9 28.1C12.9 27 12.6 22.4 13 21.7C13.6 21.4 14.6 21.5 15.2 21.5C16.9 21.5 18.5 21.5 20.2 21.5C25.7 21.5 31.3 21.5 36.9 21.5C38 21.5 42.8 21.3 43.5 21.7C43.9 22.3 43.7 23.3 43.7 23.9C43.7 25.1 43.5 29.3 43.9 30C44.4 30.4 45.9 30.2 46.6 30.2C49.4 30.2 51.7 29.7 54.1 31.6C54.4 31.9 54.9 32.1 55.1 32.5C55 33 53.5 35.2 53 35.5C52.2 35.4 51.4 34.4 50.6 34.1C50.2 34 49.8 33.9 49.4 33.8C48.5 33.8 44.5 33.7 43.9 33.9C43.5 34.4 43.7 35.4 43.7 36C43.7 37.2 44 41.5 43.6 42.2C43.1 42.6 42.2 42.4 41.6 42.4C40.1 42.4 38.6 42.4 37.2 42.4C31.4 42.4 25.7 42.4 20 42.4C18.3 42.4 16.6 42.4 15 42.4C14.3 42.4 13.5 42.6 13 42.2L12.8 34C12.2 33.7 7.9 33.8 6.9 33.8C6.3 33.8 5.5 33.7 5.1 34L5.1 36.5C6.1 37.1 8.9 36.2 9.9 36.8C10.1 37.3 10 37.8 10 38.3C10 40.5 9.5 43.3 11.5 44.7C12.8 45.6 17.1 45.3 18.9 45.3C25.1 45.3 31.3 45.3 37.5 45.3C38.9 45.3 40.3 45.3 41.7 45.3C42.4 45.3 43 45.3 43.6 45.3C44.2 45.2 44.9 45 45.3 44.6C47.1 43.1 46.6 40.2 46.6 38.2C46.6 37.7 46.5 37.2 46.7 36.8C47.1 36.6 47.6 36.6 48.1 36.7C48.6 36.7 49.1 36.6 49.5 36.8C51 37.3 52.2 39 53.7 39.5C54.4 39.3 54.8 38.3 55.1 37.8C56 36.4 57 35 57.9 33.6C58.2 33.1 58.9 32.5 58.9 31.9C58.5 31.2 57.5 30.6 56.9 30.2C54.8 28.6 53.8 27.7 51.1 27.4C50 27.2 47.6 27.6 46.7 27.2C46.5 26.8 46.6 26.3 46.6 25.8C46.6 23.9 47.1 20.9 45.5 19.5C44 18.3 40 18.7 38 18.7C31.7 18.7 25.4 18.7 19 18.7C17.1 18.7 12.7 18.3 11.3 19.5C9.5 20.9 10 23.7 10 25.8C10 26.2 10.1 26.8 9.9 27.2Z"/><g fill="currentColor" stroke="none"><circle cx="17.52" cy="25.91" r="1.79"/><circle cx="24.72" cy="25.91" r="1.79"/><circle cx="31.88" cy="25.91" r="1.79"/><circle cx="39.07" cy="25.91" r="1.79"/><circle cx="21.12" cy="32" r="1.79"/><circle cx="35.49" cy="32.01" r="1.79"/><circle cx="28.29" cy="32.02" r="1.79"/><circle cx="17.51" cy="38.08" r="1.79"/><circle cx="24.73" cy="38.08" r="1.79"/><circle cx="31.9" cy="38.08" r="1.79"/><circle cx="39.11" cy="38.08" r="1.79"/></g>'
  },
  {
    id: "car-adblue",
    name: "AdBlue / DEF low",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["diesel exhaust fluid", "DEF", "AdBlue", "SCR"],
    looksLike: ["bottle pouring", "jug pouring liquid", "tilted bottle with liquid", "drop with waves", "water drop", "droplet", "teardrop with a wavy line"],
    meaning: "Diesel cars with AdBlue: the tank of exhaust-cleaning fluid is running low.",
    action: "Top up with AdBlue / DEF (sold at fuel stations). Don't ignore it: when the tank runs dry, most cars won't restart until you refill. They're surprisingly strict about it.",
    // Traced from Volkswagen's warning lamp artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.6 26.1C20.8 27.2 18.9 27.3 18.5 28.8C18.1 29.9 18.8 30.7 19.3 31.6C20.3 33.3 21.3 35 22.4 36.6C22.9 37.4 23.3 38.3 24.2 38.6C25.9 39 26.9 37.1 28.3 37C28.7 37.3 29 37.7 29.4 38C30.7 39 32.4 39.3 34 39.1C36 38.8 38.4 36.9 40.2 35.8C44.4 33.4 48.5 30.7 52.7 28.3C55.3 26.8 57.8 25.4 57.9 22.1C58 19.6 56.5 17.6 55.2 15.6C54.3 14.1 53.5 12.7 52.6 11.2C51.9 10.1 51.3 8.8 50.4 7.9C48.7 6.4 46.1 5.9 44 6.8C42.2 7.6 40.5 8.8 38.8 9.8C36.2 11.4 33.5 13 30.8 14.6C29.2 15.6 27.6 16.6 26 17.5C24.9 18.1 23.7 18.7 22.9 19.7C22.2 20.4 21.8 21.2 21.5 22.1C21.2 23 21.2 24 21.4 25C21.5 25.4 21.7 25.7 21.6 26.1ZM24.5 25C24.1 24.6 24.1 24.1 24.1 23.6C24.1 21.6 26.1 20.7 27.6 19.8C32.4 16.9 37.2 14.1 42 11.2C43.8 10.1 46 8.2 48.1 9.7C49.1 10.5 49.8 12 50.4 13.1C51.5 14.9 52.5 16.6 53.6 18.4C54 19.2 54.7 20 55 20.9C55.5 22.7 54.3 24.5 52.5 25C52.1 25.1 51.8 25.1 51.5 24.9C49.6 24.1 50.5 21.6 48.9 21.7C47.4 21.9 48.5 24.6 46.1 25.1C44.9 25.3 43.8 24.7 43.3 23.6C43 22.9 43.3 21.8 42.1 21.7C40.4 21.7 41.6 24.8 39 25.1C38 25.2 36.9 24.7 36.5 23.7C36.2 23 36.4 21.9 35.4 21.7C33.5 21.5 34.8 25 32.1 25.1C30.9 25.1 29.9 24.6 29.5 23.5C29.3 22.9 29.5 22.1 28.7 21.8C26.8 21.1 27.9 24.2 25.8 25C25.3 25.1 24.9 25.2 24.5 25ZM28.4 25.9C28.8 26.1 29.1 26.4 29.5 26.6C30.6 27.3 32.2 27.4 33.4 27C34 26.7 34.8 25.9 35.4 25.8C35.7 26.1 36 26.4 36.4 26.6C37.6 27.3 39.1 27.4 40.3 26.9C41 26.7 41.5 26 42.2 25.9C42.7 26.1 43.2 26.6 43.8 26.9C45 27.4 46.6 27.3 47.8 26.6C48.2 26.4 48.6 26.1 49 25.8C49.4 25.9 49.7 26.2 49.8 26.6C49.4 27.2 46.6 28.6 45.8 29.1C43 30.8 40.2 32.6 37.3 34.2C36.1 34.9 34.6 36.2 33.2 36.3C30.8 36.5 30.6 34.3 28.7 34C27.2 33.7 26.4 35 25.1 35.4C24.6 35.2 24.4 34.6 24.1 34.2C23.6 33.3 21.6 30.5 21.7 29.7C22.1 29.1 23 28.8 23.6 28.4C24 28.1 24.2 27.5 24.6 27.3C24.9 27.1 26 27.1 26.6 26.9C27.2 26.7 27.8 26 28.4 25.9ZM6.1 57.5C6.9 57.8 11.8 57.6 13.1 57.6C13.8 57.6 14.9 57.8 15.6 57.5C15.9 56.8 15.7 55.2 15.7 54.4C15.7 52.4 15.8 50.4 16.1 48.4C16.4 46.1 17 43.5 18.2 41.5C18.6 40.8 19 40.1 19.4 39.4C19.7 39 20.1 38.7 20.2 38.3C20.1 37.5 18.5 35.1 18 34.3C17.8 33.9 17.5 33.2 17 32.9C15.8 33 13.6 35.7 12.8 36.7C9.6 40.8 7.6 46.5 6.7 51.6C6.5 52.6 5.8 56.8 6.1 57.5ZM15.7 37.6L16.6 39C16.3 40 15.6 40.9 15.2 41.8C14.3 43.9 13.6 46.1 13.2 48.4C13.1 49.4 12.8 50.4 12.7 51.4C12.6 51.9 12.7 52.4 12.6 52.8C12.5 53 12.4 53 12.3 53.1L10.5 53C10.1 52.4 10.6 50.4 10.8 49.7C11.6 46.2 12.2 44 13.6 40.7C13.9 40 15.1 37.8 15.7 37.6Z"/>'
  },
  {
    id: "car-washer-fluid",
    name: "Washer fluid low",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["windscreen washer", "windshield washer fluid"],
    looksLike: ["windscreen with fountain", "windshield with dotted line", "fountain", "trapezoid with spray", "rainbow over a screen"],
    meaning: "The windscreen washer bottle is running low. That's a windscreen with a fountain, if you squint.",
    action: "Top up with screenwash (not just water in winter, because it freezes). The filler cap usually has the same symbol on it.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M17.8 10.9C17.8 11.6 19.1 13.2 19.7 13.4L22.8 12.1C23.1 11.5 22.7 9.4 22.3 9C21.4 8.6 18.2 10 17.8 10.9ZM25.4 9C25 9.4 24.7 11.4 24.9 12L28 13.4C28.6 13.2 29.9 11.5 29.9 10.9C29.5 10 26.3 8.6 25.4 9ZM34.1 10.9C34.1 11.5 35.4 13.2 36 13.4L39.1 12C39.3 11.4 39 9.4 38.5 9C37.6 8.6 34.5 10 34.1 10.9ZM41.7 9C41.2 9.4 40.9 11.4 41.1 12L44.3 13.4C44.9 13.2 46.1 11.6 46.2 11C45.9 10.1 42.6 8.6 41.7 9ZM29.4 15C29.4 15.7 29.9 16.3 30 16.9C30.2 17.6 30.1 18.5 30.4 19.2C30.9 19.5 33 19.6 33.5 19.2C33.8 18.8 33.7 18.2 33.8 17.7C33.9 16.8 34.6 15.7 34.6 15C34.4 14.5 32.5 13.2 32 13.2C31.4 13.2 29.5 14.5 29.4 15ZM15.7 13.3C15.2 13.6 14.9 14.3 14.7 14.9C14.2 16.1 13.6 19.5 14.2 20.6C14.6 21.1 16.6 21 17.2 20.8C17.3 20.7 17.4 20.6 17.4 20.4C17.6 20.1 17.5 19.6 17.5 19.2C17.5 18.3 17.5 17.5 17.8 16.6C18 16 18.4 15.5 18.3 14.9C18 14.4 16.3 13.3 15.7 13.3ZM45.6 14.9C45.6 15.7 46.2 16.5 46.4 17.3C46.5 18.3 46.2 19.9 46.6 20.7C47.1 21.1 49.1 21 49.7 20.8C50.1 20.3 50 19.6 50 18.9C50 17.6 49.6 13.8 48.2 13.3C47.6 13.3 45.9 14.4 45.6 14.9ZM5.8 28.9C5.8 29.8 8.2 33.4 8.7 34.4C11.3 38.7 13.8 43 16.2 47.3C16.8 48.3 18.6 52 19.4 52.4C19.9 52.4 23.1 50.7 23.9 50.3C26.7 49.2 29.9 48.7 32.9 48.8C35.6 49 38.2 49.5 40.8 50.6C41.6 51 43.9 52.5 44.6 52.4C45.4 51.9 47.1 48.5 47.6 47.5C50.1 43.2 52.6 38.9 55.1 34.6C55.6 33.6 58.1 29.8 58.1 29C57.9 28.3 56.2 27.6 55.5 27.2C52.9 25.8 50 24.5 47.1 23.7C36.6 20.5 25.4 20.5 15 24.3C12.7 25.1 10.4 26.1 8.2 27.3C7.5 27.7 6.3 28.2 5.8 28.9ZM53.8 30.2L43.4 48.1C42.3 47.6 41.2 47.1 40.1 46.8C35.7 45.4 31 45 26.5 46C24.4 46.5 22.6 47.3 20.6 48.1L10.2 30.2C11.2 29.2 16.7 27.2 18.2 26.8C26.8 24.1 35.9 24 44.5 26.4C46.8 27 49 27.9 51.2 28.8C52 29.2 53.2 29.6 53.8 30.2ZM30.4 26.9C30.1 27.3 30.1 30.2 30.4 30.8C30.9 31.1 33.1 31.2 33.6 30.7C33.9 30.2 33.9 27.3 33.5 26.8C33 26.5 30.9 26.5 30.4 26.9ZM30.5 33C30.4 33.2 30.3 33.3 30.3 33.4C30.2 34 30.2 36.6 30.4 37C30.9 37.4 33.1 37.4 33.6 37L33.6 33.2C33.2 32.7 31.1 32.7 30.5 33ZM30.4 39.4C30.1 39.9 30.1 42.9 30.5 43.4C31 43.6 33 43.6 33.5 43.3C33.9 42.9 33.9 39.8 33.5 39.3C33 39 30.9 39 30.4 39.4ZM30.4 51C30.1 51.5 30.1 54.3 30.4 54.9C30.8 55.3 33.1 55.3 33.6 54.9C33.9 54.4 33.9 51.5 33.6 51C33.1 50.6 31 50.6 30.4 51Z"/>'
  },
  {
    id: "car-frost-warning",
    name: "Frost / ice warning",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["ice warning", "low outside temperature", "black ice warning"],
    looksLike: ["snowflake", "star", "asterisk", "ice crystal"],
    meaning: "The outside temperature is close to freezing (usually 3–4 °C / 37–39 °F or below), so there could be ice on the road.",
    action: "Drive gently and watch for black ice, especially on bridges and shaded roads.",
    tip: "On the climate-control panel (not the dashboard), the same snowflake usually means the air conditioning button. One snowflake, two jobs.",
    svg: `<path d="M32 32V9M26 14l6 6 6-6"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(60 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(120 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(180 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(240 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(300 32 32)"/>`
  },
  {
    id: "car-service-due",
    name: "Service due",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["maintenance required", "service reminder", "spanner light", "wrench light"],
    looksLike: ["spanner", "wrench", "tool"],
    meaning: "Your car is due its scheduled service. It's a reminder, not a fault.",
    action: "Book a service. The garage resets the reminder afterwards.",
    svg: `<path d="M18 46L38 26" stroke-width="8"/><path d="M41.2 17.2L48.4 9.9A11 11 0 1 0 54.1 15.6L46.8 22.8Z" fill="currentColor"/>`
  },
  {
    id: "car-gearbox",
    name: "Gearbox / transmission warning",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["transmission temperature", "automatic transmission fault", "AT warning"],
    looksLike: ["gear with an exclamation mark", "cog with !", "gear with !", "cog wheel with exclamation", "sun with exclamation mark", "gear"],
    meaning: "There's a problem with the gearbox (usually an automatic). Often it's overheating, for example from towing or crawling along in heavy traffic. Nobody enjoys a traffic jam, gearboxes included.",
    action: "If it's overheating, pull over and let it cool down with the engine idling in Park. If the light comes back or stays on, get the transmission checked soon.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M24.2 12.1L21.2 13.5C20.4 13.1 17.8 10.5 17.1 10.5C16.6 10.6 15.9 11.2 15.5 11.6C15.1 11.9 14.3 12.3 14.4 13C14.4 13.8 16.1 16.3 16.4 17.4L14.4 20C13 20.1 11 19 9.6 19C8.9 19 8.6 20 8.4 20.5C8.1 21 7.6 21.8 7.8 22.3C7.9 23 11 24.9 11.6 25.7L10.9 28.8C9.9 29.4 6.7 29.5 6 30.1C5.6 30.5 5.7 31.4 5.7 31.9C5.7 32.4 5.6 33.4 5.9 33.8C6.4 34.3 9.9 34.8 10.9 35.1L11.6 38.3C10.9 39 7.9 41 7.7 41.7C7.6 42.2 8.1 43 8.3 43.5C8.6 43.9 8.8 44.8 9.4 45C10.4 45.1 13.2 44 14.4 44L16.4 46.5C16.1 47.7 14.5 50 14.4 51C14.3 51.6 15 52 15.5 52.4C15.9 52.7 16.5 53.4 17.1 53.4C17.9 53.5 20.3 50.9 21.3 50.4L24.2 51.8C24.5 53 24 56 24.4 56.8C24.6 57.3 25.5 57.4 26 57.5C26.5 57.6 27.4 58 27.9 57.8C28.5 57.5 29.8 54 30.3 53.3L33.6 53.3C34.2 54.1 35.4 57.5 36.1 57.8C36.6 58 37.3 57.7 37.8 57.6C38.4 57.5 39.4 57.4 39.6 56.8C40 55.7 39.4 53.1 39.7 51.9L42.7 50.5C43.8 51.1 45.7 53.1 46.6 53.4C47.2 53.6 47.9 52.9 48.3 52.6C48.7 52.3 49.5 51.8 49.6 51.3C49.8 50.5 47.9 47.5 47.6 46.6L49.7 44C50.6 44 54.2 45.2 54.8 44.8C55.2 44.5 55.5 43.8 55.7 43.3C55.9 42.8 56.5 42 56.2 41.5C55.6 40.5 53 39.3 52.4 38.3L53.1 35.1C54 34.7 57.5 34.4 58 33.8C58.4 33.4 58.3 32.4 58.3 31.9C58.3 31.4 58.4 30.4 57.9 30.1C57 29.4 54.2 29.5 53.1 28.8L52.3 25.7C53.1 24.7 55.7 23.3 56.2 22.4C56.4 21.9 55.9 21.1 55.7 20.6C55.5 20.2 55.2 19.3 54.7 19.1C54 18.8 50.6 19.9 49.6 20L47.6 17.4C47.9 16.6 49.8 13.3 49.6 12.7C49.4 12.2 48.7 11.7 48.2 11.4C47.8 11 47.2 10.4 46.6 10.6C45.8 10.8 43.7 13 42.7 13.6L39.7 12.1C39.5 11.1 39.9 7.5 39.5 7C39.1 6.6 38.2 6.5 37.7 6.4C37.1 6.3 36.3 5.9 35.8 6.4C35 7.2 34.4 9.8 33.6 10.7L30.4 10.7C29.6 9.8 28.8 6.9 28 6.3C27.6 6 26.8 6.2 26.3 6.3C25.8 6.5 24.8 6.6 24.4 7.1C24 7.6 24.4 11.1 24.2 12.1ZM31.7 14.7C33.2 14.6 35 14.9 36.5 15.3C43.8 17.3 49.2 24.1 49.2 31.7C49.2 41.5 42 48.8 32.3 49.2C25.8 49.6 19 45.3 16.4 39.4C15.2 36.8 15 35.1 14.7 32.3C14.6 31.3 14.8 30.2 14.9 29.2C15.8 23.8 19.4 18.7 24.5 16.4C26.3 15.6 28.1 15.1 30.1 14.8C30.6 14.8 31.2 14.8 31.7 14.7ZM31.7 15.5C30.3 15.6 29.2 16.6 28.9 18C28.6 19.1 28.9 20.2 28.9 21.2C29 23.3 29.1 25.7 29.3 27.7C29.6 31.1 29.6 34.5 29.8 37.9C29.9 39.2 30.9 40.2 32.3 40C34 39.9 34.1 38.4 34.2 37.1C34.4 35.1 34.3 33.1 34.5 31.1C34.6 29.8 34.7 28.5 34.7 27.3C34.7 25.3 34.9 23.2 35 21.2C35.1 20.2 35.3 19.1 35.1 18.2C34.9 16.6 33.4 15.3 31.7 15.5Z"/><g fill="currentColor" stroke="none"><circle cx="31.99" cy="45.46" r="2.46"/></g>'
  },
  {
    id: "car-key-warning",
    name: "Key not detected / immobiliser",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["immobiliser", "smart key not found", "key fob battery low", "security light"],
    looksLike: ["car with a key inside", "key in a car", "car outline with a key", "key", "key symbol"],
    meaning: "The car can't detect your key, often because the fob battery is dying or the key is out of range. If it flashes while the car is parked and locked, that's just the security system showing it's armed.",
    action: "Hold the key fob right against the start button (or steering column), as if introducing them. Most cars can read it there even with a dead battery. Replace the fob battery soon.",
    // Traced from the Wikimedia dashboard lamp set (ISO 2575 style).
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M11.2 40.4C11.6 41 11.7 42.1 12.1 42.8C13.2 44.7 15 45.8 17.1 45.9C19.9 46.1 21.9 43.4 22.3 40.8C22.4 40 22.7 38.8 22.1 38.1C21.5 37.3 20.2 37.4 19.7 38.3C19.4 38.7 19.6 39.2 19.5 39.7C19.4 41 19 42.8 17.5 43.2C17 43.3 16.5 43.2 16 42.9C15 42.3 14.4 41.3 14.2 40.1C14 39.3 14.2 38.5 13.6 37.9C12.5 37 8.6 38.4 7.9 37C7.5 36.2 8.9 33.1 9.5 32.5C9.6 32.4 9.8 32.3 10 32.2C12 31.3 14.4 31.6 16.5 31.4C17.3 31.3 18.3 31.4 19.1 31C20 30.5 20.9 29.5 21.7 28.8C23.8 27 26 25.2 28.1 23.4C28.8 22.8 30.5 21.1 31.2 20.8C31.8 20.6 33.3 20.7 34 20.7C36.1 20.7 38.3 20.7 40.5 20.7C41 20.7 42.9 20.6 43.3 20.9C43.9 21.4 44.3 22.1 44.9 22.7C46.2 24.3 47.5 25.9 48.9 27.6C49.6 28.3 50.1 29.2 50.9 29.8C52.1 30.9 54.4 29.2 55.5 30.9C56.5 32.2 56.1 35.6 56.1 37.2C56.1 38.2 55.9 39.4 57 39.8C57.9 40.1 58.9 39.5 58.9 38.6C59 37.9 58.9 37.1 58.9 36.3C59.1 34.7 59.1 32.9 58.8 31.3C58.3 29.3 56.9 27.9 54.8 27.5C54.1 27.4 52.7 27.7 52.2 27.1C50.4 25 48.7 22.9 46.9 20.8C46.3 20.1 45.3 18.5 44.5 18.2C43.7 17.8 42.6 18 41.7 18C39.7 18 37.7 18 35.7 18C34.6 18 30.7 17.8 29.9 18.3C29 18.8 28.1 19.7 27.3 20.4C25.2 22.2 23.1 24 20.9 25.8C20.2 26.5 18.5 28.1 17.8 28.5C17.1 28.8 15.8 28.7 15.1 28.8C12.8 28.8 8.6 28.9 7.1 30.9C6.7 31.4 6.4 32.1 6.2 32.6C5 34.9 4 38.1 6.7 39.7C7.8 40.3 8.9 40.2 10.1 40.4C10.5 40.4 10.8 40.3 11.2 40.4ZM25.4 39.9C25.7 40.4 27.8 42.7 28.3 42.8C29 42.5 29.4 41.5 30.1 41.3C31.3 40.9 31.3 42.1 32.1 42.2C32.8 42.2 32.9 41.5 33.4 41.4C34.1 41.3 38.1 41.2 38.7 41.4L39 42.5C39.3 42.8 39.7 42.6 40.1 42.7C40.4 42.8 40.5 43.1 40.8 43.1C41.4 43.1 42 42.9 42.5 43.1C42.9 43.3 43.5 44.4 43.9 44.8C45.4 46.1 47.5 46.2 49.3 45.4C54 43.3 53.8 35.5 48.8 33.8C46.9 33.2 44.9 33.9 43.4 35.2C42.9 35.5 42.4 36.4 41.9 36.7C41.4 36.9 37.2 36.8 36.4 36.8C34.4 36.8 32.5 36.8 30.6 36.8C29.9 36.8 28.6 36.6 28.1 36.8C27.5 37.1 27 37.9 26.6 38.4C26.2 38.8 25.6 39.3 25.4 39.9ZM49.4 37.7C50.5 37.5 51.2 38.6 51.2 39.5C51.2 40.4 50.8 41.6 49.8 41.8C48.7 41.9 48 40.9 47.9 39.9C47.8 39 48.4 37.8 49.4 37.7Z"/>'
  },
  {
    id: "car-bulb-failure",
    name: "Bulb failure",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["lamp out", "light failure", "exterior light fault"],
    looksLike: ["upside down bulb with rays", "bulb with exclamation mark and rays", "light bulb with exclamation mark", "bulb with !", "lightbulb"],
    meaning: "One of the exterior lights (headlight, brake light, indicator, number plate light) has blown. The car knows which one. It just isn't saying.",
    action: "Walk round the car with the lights on (and get someone to press the brake) to find the dead bulb, then replace it. Driving with a blown light can get you fined.",
    // Traced from the ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.8 9.1C9.8 9.8 10.6 10.6 11.1 11C12.1 12.1 15 15.4 16.1 15.8C16.9 15.7 18 14.6 18.1 13.8C17.7 12.6 15.2 10.5 14.2 9.5C13.7 9 13 8.2 12.4 7.9C11.3 7.4 10.1 8.1 9.8 9.1ZM23.7 8C23.3 9.3 24 13.8 23.5 14.7C23.2 15.1 22.6 15.4 22.2 15.8C21.3 16.6 20.3 17.5 19.5 18.4C16.6 21.8 14.7 26.2 15.1 30.7C15.6 35.8 17.9 40.5 22.1 43.5C23.9 44.7 25.9 45.8 28 46.3C29.3 46.6 30.6 46.6 31.9 46.6C33.2 46.6 34.6 46.6 35.9 46.4C40.9 45.2 45.4 41.7 47.5 37C49.6 32.2 49.8 26.7 47.3 22.1C46.7 21 46.1 19.9 45.3 18.9C44.7 18.1 43.9 17.4 43.1 16.8C42.5 16.2 41.1 15.5 40.7 14.8C40 13.6 40.8 9.1 40.2 7.9C39.7 7.7 37.7 7.7 37.2 7.9C36.6 9.2 37.5 11.9 36.7 13.1C36.1 13.4 35.1 13 34.4 12.9C32.7 12.7 31 12.9 29.3 12.9C28.6 12.9 27.7 13.2 27.2 12.9L27.1 7.9C26.6 7.7 24.1 7.7 23.7 8ZM45.8 13.7C46 14.3 47.5 15.7 48.1 15.8C49.2 15.4 52.3 12.1 53.1 11.2C53.6 10.6 54.3 10.1 54.5 9.4C54.5 8.9 53.8 8.1 53.3 7.9C52.9 7.7 51.9 7.7 51.5 7.9C50.9 8.2 47.9 11.4 47.2 12.1C46.8 12.5 46 13.1 45.8 13.7ZM31.6 15.9C33.8 15.7 37.1 16.7 39 17.8C41 19 43.7 21.7 44.6 23.8C45.4 25.5 45.7 27.4 45.9 29.2C46.5 35 41.8 41.3 36.3 43C35.1 43.3 33.8 43.4 32.6 43.4C31.2 43.4 29.6 43.5 28.2 43C24.7 42 21.6 39.2 19.8 36C18.9 34.3 18.4 32.1 18.2 30.3C18.1 28.5 18.6 26.7 19.2 25C21.3 19.4 25.8 16.5 31.6 15.9ZM31.9 18C31.3 18.1 30.7 18.4 30.4 19C29.7 20.2 30 25 30 26.6C30 28.3 30 29.9 30 31.5C30 32.1 29.8 33.1 30 33.6C30.3 34.1 31.6 34.9 32.2 34.9C32.8 34.8 34.1 33.9 34.3 33.3C34.5 32.6 34.4 27.4 34.4 26.3C34.4 24.7 34.6 20.2 33.9 19C33.5 18.3 32.7 17.9 31.9 18ZM6.1 28.2L6.1 31.2C6.5 31.4 10.4 31.4 10.9 31.2C11.2 30.7 11.2 28.7 10.9 28.2C10.4 28 6.5 27.9 6.1 28.2ZM53.4 28.2C53.1 28.6 53.1 30.6 53.3 31.1C53.8 31.4 57.4 31.4 57.8 31.2C58.1 30.8 58.1 28.7 57.9 28.2C57.4 27.9 53.9 28 53.4 28.2ZM31.9 36.2C30.6 36.4 29.9 37.5 30 38.7C30 39.9 31.2 40.9 32.3 40.8C33.5 40.6 34.5 39.5 34.3 38.3C34.2 37.3 32.9 36.1 31.9 36.2ZM9.4 50.1C9.5 50.7 11.2 52.2 11.8 52.2C13 51.6 15.5 48.8 16.6 47.7C17.2 47.1 18.1 46.5 18.5 45.7C18.3 45.1 16.8 43.7 16.2 43.6C15.5 43.7 14.9 44.5 14.3 45C13.5 45.8 9.7 49.3 9.4 50.1ZM48 43.6C47.4 43.8 46 45.1 45.8 45.7C46.1 46.4 47 47.1 47.6 47.6C48.6 48.7 51.3 51.6 52.5 52.2C53.3 52.2 54.4 51 54.6 50.3C54.3 49.2 50.8 46 49.8 45.1C49.3 44.6 48.7 43.8 48 43.6ZM30.5 51.1C30.3 51.6 30.2 55.7 30.5 56.1C31 56.3 33.1 56.3 33.5 56C33.8 55.5 33.7 51.5 33.4 51C32.9 50.8 30.9 50.8 30.5 51.1Z"/>'
  },
  {
    id: "car-lane-departure",
    name: "Lane assist",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["lane departure warning", "lane keeping assist", "LKA", "LDW"],
    looksLike: ["car between lines", "car on a road", "car between two dashed lines", "car with lanes"],
    meaning: "Green or white: lane assist is on and can see the lane markings. Amber or flashing: you're drifting out of your lane, or the system can't see the lines or has a fault.",
    action: "If it flashes, check your position and steer back into lane. If it's amber all the time, the camera may be dirty or blocked, so clean the windscreen in front of the mirror.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M17.2 22.8C17.5 23.2 19.4 23.3 19.8 23C20.2 22.7 20.3 21.9 20.5 21.4C20.8 20.6 22.2 17.1 22 16.4C21.6 16.1 20.4 16 19.9 16.4C19.4 16.9 18.1 20.1 17.7 21.1C17.5 21.6 17 22.2 17.2 22.8ZM42 16.4C41.7 17.1 42.3 18 42.5 18.6C42.8 19.4 43.8 22.7 44.3 23C44.6 23.2 45.1 23.1 45.4 23.1C45.9 23.1 46.4 23.2 46.8 22.9C47 22.2 46.4 21.4 46.2 20.9C45.8 20.1 44.5 16.7 44 16.3C43.5 16 42.4 16.1 42 16.4ZM22.1 28.1C21.3 28.3 20.4 28 19.7 28.5C19 28.9 18.4 30.4 19.2 31C19.7 31.3 20.6 31.1 21.1 31.1C21.2 31.8 21 32.6 21 33.3C20.8 34.9 21.1 37.7 22.3 39C22.4 39.7 22.2 42.2 22.5 42.6C22.8 43.1 25.4 43.1 26 42.9C26.2 42.9 26.3 42.7 26.4 42.6C26.8 42 26.5 39.8 26.6 39L37.4 39C37.6 40 37.1 41.4 37.5 42.4C37.5 42.6 37.7 42.8 37.9 42.9C38.3 43.1 40.5 43.1 41.1 42.9C41.3 42.9 41.5 42.7 41.6 42.5C42 41.5 41.4 40 41.7 39C41.7 38.8 42 38.7 42.1 38.5C42.3 38.1 42.5 37.6 42.6 37.1C43.2 35.1 43 33.1 42.8 31.2C43.4 31 44.2 31.3 44.7 31C45.6 30.5 45 28.9 44.3 28.5C43.6 28.1 42.7 28.3 41.9 28.1C41 26.5 40.9 24.6 39.2 23.5C38.1 22.7 36.9 22.8 35.5 22.8C33.3 22.8 31 22.8 28.7 22.8C27.3 22.8 25.9 22.7 24.7 23.6C23.2 24.6 22.9 26.5 22.1 28.1ZM39.9 29.9L24.1 29.8C24.3 28.7 25.4 26 26.4 25.4C27.5 24.6 29.8 24.9 31.1 24.9C32.8 24.9 36.8 24.5 38 25.6C38.7 26.3 39 27.3 39.3 28.2C39.5 28.7 39.9 29.3 39.9 29.9ZM12.7 32.8C13.1 33.2 13.7 33.1 14.2 33.1C14.8 33.1 15.7 33.3 16.2 32.9C16.7 32.6 17.6 29.6 17.8 28.9C18.1 28.2 18.7 27 18.5 26.3C18.1 25.9 17.5 26 17 26C16.6 26 16 25.9 15.6 26.1C15 26.4 13.8 29.6 13.5 30.4C13.2 31 12.4 32.2 12.7 32.8ZM45.5 26.3C45.2 27 45.9 28.2 46.2 28.9C46.4 29.6 47.3 32.6 47.8 32.9C48.3 33.3 49.2 33.1 49.8 33.1C50.3 33.1 50.9 33.2 51.3 32.8C51.6 32.2 50.9 31.2 50.6 30.6C50.2 29.8 48.9 26.4 48.4 26.1C48 25.9 47.4 26 47 26C46.4 26 45.9 25.9 45.5 26.3ZM5.9 47.5C6.4 48 7.7 47.8 8.4 47.8C8.9 47.8 10.4 48 10.9 47.7C11.4 47.3 11.6 46.3 11.8 45.7C12.4 43.9 13.1 42 13.8 40.2C14 39.4 15.1 37.1 14.8 36.4C14.4 36 11.1 36 10.8 36.4C10.2 37 10 38 9.7 38.7C8.8 40.5 8 42.3 7.2 44.2C6.8 44.9 5.7 46.8 5.9 47.5ZM49.2 36.4C48.9 37 50 39.7 50.3 40.5C50.9 42.2 51.5 43.9 52.1 45.6C52.4 46.1 52.5 47.2 53.1 47.6C53.5 48 55.1 47.8 55.7 47.8C56.4 47.8 57.5 48 58 47.5C58.3 46.9 57 44.6 56.7 43.9C55.8 42.1 55 40.2 54.2 38.4C53.9 37.9 53.5 36.6 53.1 36.3C52.6 36 51.7 36.2 51.2 36.2C50.6 36.2 49.7 36 49.2 36.4Z"/>'
  },
  {
    id: "car-master-warning",
    name: "Triangle with exclamation mark (master warning)",
    quiz: "General warning: read the message",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["master warning light", "general warning light", "warning triangle light", "caution light"],
    looksLike: ["triangle with exclamation mark", "triangle with !", "yellow triangle", "red triangle with exclamation", "exclamation mark in a triangle", "warning sign"],
    meaning: "A general warning: the car has a message for you that doesn't have its own symbol. The details are almost always shown as text on the screen between the dials, so the triangle is really just saying 'look over here'.",
    action: "Read the message on the driver display (you may need to scroll through it with the steering wheel buttons). Amber means sort it out soon. If the triangle is red, or comes with other red lights, stop somewhere safe and check before driving on.",
    tip: "Toyota and Lexus call it the master warning and pair it with a beep. Don't confuse it with the hazard light button, which is a triangle inside a triangle.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M32 24v14"/><circle cx="32" cy="45.5" r="2.6" fill="currentColor" stroke="none"/>`
  },
  {
    id: "car-epc",
    name: "EPC light",
    quiz: "Engine power control fault",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["electronic power control", "EPC warning", "throttle fault light", "limp mode"],
    looksLike: ["epc", "epc on the dashboard", "epc warning", "epc lit up"],
    meaning: "EPC stands for Electronic Power Control, and it's a VW, Audi, Skoda, Seat and Cupra thing. It means a fault in the system that controls the engine's power, often the throttle, the accelerator pedal sensor or the brake light switch. The car may cut power to protect itself (limp mode).",
    action: "Drive gently to a garage and have the fault codes read. If the car feels badly down on power, avoid motorways. Check your brake lights work, as a failed brake light switch is a common (and cheap) cause.",
    tip: "It often turns up with the check engine light. EPC lighting up for a moment when you start the car is normal.",
    svg: `<text x="32" y="39.5" font-size="21">EPC</text>`
  },
  {
    id: "car-driver-alert",
    name: "Coffee cup (driver tiredness alert)",
    quiz: "Tiredness alert: take a break",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["driver alert", "attention assist", "fatigue detection", "driver drowsiness warning", "rest recommended", "take a break light"],
    looksLike: ["coffee cup", "cup of coffee", "mug with steam", "teacup", "hot drink", "cup with steam"],
    meaning: "The car thinks you're getting tired and suggests a break. It watches how you steer (small, jerky corrections are a classic sign) and how long you've been driving, and some cars use a camera that watches your eyes.",
    action: "Stop for a break at the next safe place. The Highway Code recommends at least 15 minutes every two hours. Caffeine and a short nap help for a while; opening the window and turning up the radio don't.",
    tip: "It's been required on every new car sold in the EU since July 2024, which is why it's suddenly everywhere. Yes, the car is offering you a coffee.",
    svg: `<path d="M15 30h30v6a14 14 0 0 1-14 14h-2a14 14 0 0 1-14-14z"/><path d="M45 33.5h2.5a5.5 5.5 0 0 1 0 11H42"/><path d="M11 55h38"/><path d="M22 24c-3-3 3-5 0-9M30 24c-3-3 3-5 0-9M38 24c-3-3 3-5 0-9" stroke-width="3"/>`
  },
  {
    id: "car-oil-level",
    name: "Low engine oil level (oil can with a wavy line)",
    quiz: "Engine oil level low",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["oil level low", "oil level warning", "MIN oil", "top up oil"],
    looksLike: ["genie lamp with wavy line", "oil can with a wavy line", "oil can with water", "yellow genie lamp", "lamp with squiggle underneath", "oil can with min"],
    meaning: "The engine oil level is getting low. It's the calmer, amber cousin of the red oil pressure light: the engine is still being lubricated, but it wants a top-up before that changes.",
    action: "Check the level soon: park on level ground, switch off, wait a few minutes, then use the dipstick (or the oil level menu, if your car has no dipstick). Top up with the oil grade in your handbook, a little at a time, and don't overfill. If it keeps dropping quickly, get it checked for leaks.",
    tip: "VW, Audi, Skoda and Seat use this can-with-a-wave symbol too. If the oil can has no wave and a drip from the spout, and it's red, stop and switch off: that's the oil pressure warning.",
    // Traced from Volkswagen's warning lamp artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15 27.1C15.2 27.5 15.1 28.1 15.1 28.6C15.1 30.6 14.6 33.8 16.3 35.2C17.9 36.7 20.3 36.2 22.4 36.2C26.1 36.2 29.8 36.3 33.5 36.3C36.1 36.3 38.4 36.4 40.5 34.6C41.5 33.8 42.2 32.6 43.1 31.6C45.1 29.2 47.1 26.8 49.1 24.4C50.1 23.2 51.2 21.2 53.1 21.4C54 21.4 54.9 23.1 55.8 23.4C56.3 23.3 57 22.5 57.1 22C57 21.5 56.3 21.1 55.9 20.7C55.5 20.4 55.2 20 54.8 19.7C53.6 18.8 52.1 19.2 50.9 19.6C47.4 20.6 44 21.8 40.5 22.8C39.5 23.1 36.8 24.2 36 24.1C35.2 23.8 34.1 21.8 33.3 21.6C31.8 21.3 27.2 21.9 26.1 21.5C25.9 20.9 25.9 19.5 26.1 18.9C27 18.3 29.1 19.3 29.4 17.8C29.5 17.1 29 16.6 28.4 16.5C26.7 16.4 25 16.5 23.3 16.5C22.6 16.5 21.7 16.4 21.1 16.6C20.2 17 20.2 18.2 21.1 18.6C21.9 18.9 22.9 18.4 23.6 18.8C23.9 19.2 23.9 21.1 23.6 21.5C22.8 21.8 20.1 21.6 19.1 21.6C18.6 21.6 17.9 21.7 17.5 21.5C17 20.6 17.6 19.5 17 18.7C16.5 18 15.8 17.9 15 17.7C13.6 17.2 10.4 16.1 9 16.2C8.4 16.2 7.9 16.5 7.6 17C7 17.8 6.5 20.3 6.2 21.3C6 22 5.8 22.7 6.2 23.3C6.7 24.2 7.8 24.4 8.7 24.7C9.8 25.1 14.4 26.6 15 27.1ZM15 20C15.2 20.6 15.2 23.9 15 24.4C14.5 24.6 13.8 24.2 13.3 24C12.3 23.6 9 22.7 8.4 22.1C8.2 21.5 9 19.2 9.4 18.6C9.9 18.4 10.4 18.6 10.9 18.8C11.8 19.1 14.3 19.5 15 20ZM47 23.2C46.9 23.9 44.1 26.9 43.5 27.6C42.2 29.2 39.8 32.6 38.1 33.6C36.9 34.3 35.3 34 34 34C31.2 34 28.5 34 25.8 34C24 34 22.2 34 20.4 34C19.6 34 18.7 34.2 18 33.8C17.3 33.3 17.3 32.4 17.3 31.5C17.3 30.2 17.1 24.8 17.4 24C18.2 23.6 20.3 23.8 21.2 23.8C23.8 23.8 26.3 23.8 28.8 23.8C29.7 23.8 31.6 23.6 32.4 23.9C33.4 24.1 34.4 26.3 35.4 26.7C36.5 26.5 37.6 26 38.6 25.7C40.4 25.2 42.1 24.6 43.8 24.1C44.6 23.9 46.2 23.1 47 23.2ZM55.9 26C55.7 26 55.5 26.1 55.4 26.3C55.1 26.8 55 28 54.9 28.6C54.6 29.9 53.3 30.9 54.3 32.4C54.6 32.9 55.2 33.1 55.8 33.1C56.3 33.2 56.9 33 57.2 32.6C58.8 31.3 57.2 29.7 56.7 28.2C56.5 27.5 56.7 26.3 55.9 26ZM7.5 42.6L7.5 44.5C7.8 44.9 8.4 45.1 8.8 45.5C9.2 45.8 9.6 46.2 10 46.5C11.8 47.8 14.2 48.1 16.2 47.1C17.3 46.6 19.1 44.5 20.1 44.7C21 44.8 21.7 45.8 22.4 46.4C23.5 47.2 25.1 47.9 26.6 47.7C28 47.6 29.2 47 30.3 46.1C30.9 45.5 31.7 44.5 32.6 44.7C33.5 44.8 34 45.6 34.7 46.1C35.9 47.2 37.5 47.9 39.2 47.7C40.5 47.6 41.7 47 42.7 46.2C43.4 45.6 44 44.8 44.9 44.7C45.8 44.5 47.7 46.6 48.7 47.1C50.8 48.1 53 47.8 54.8 46.5C55.3 46.2 55.7 45.7 56.2 45.3C56.6 45 57 44.8 57.4 44.5C57.6 44 57.6 43 57.3 42.6C55.5 42.1 53.7 45.5 51.3 45.5C48.8 45.5 47.7 42.7 45.2 42.4C42.6 42.2 41.4 45.3 39 45.5C36.4 45.8 35.2 42.7 32.7 42.4C29.9 42.1 28.7 45.7 26 45.5C23.5 45.4 22.4 42.3 19.8 42.4C17.2 42.5 16 45.8 13.3 45.5C11.4 45.3 10.8 43.9 9.3 43.1C8.8 42.8 8.1 42.4 7.5 42.6Z"/>'
  },
  {
    id: "car-coolant-level",
    name: "Low coolant level",
    quiz: "Coolant level low",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["coolant warning", "antifreeze low", "radiator fluid low", "expansion tank low"],
    looksLike: ["box with wavy line", "tank with water line", "rectangle with waves and an arrow", "container with arrow down", "radiator with water", "box with mountains at the bottom"],
    meaning: "The coolant (antifreeze) in the expansion tank has dropped below the minimum mark. Coolant stops the engine overheating, so this is the early warning before the temperature light comes on.",
    action: "When the engine is cold, open the bonnet, find the expansion tank (usually a see-through plastic bottle with MIN and MAX marks) and top up with the coolant type in your handbook. Never open the cap while the engine is hot. If it needs topping up again soon, there's a leak: get it checked.",
    tip: "Some cars use the thermometer-in-waves symbol for low coolant too, so read any message on the display. If the light turns red or the temperature gauge climbs, pull over and switch off.",
    svg: `<rect x="9" y="20" width="46" height="28" rx="3"/><path d="M43 20v-5h7v5"/><path d="M32 24v9M27.5 29l4.5 4.5 4.5-4.5"/><path d="M12 42c2-2 3-2 5 0s3 2 5 0 3-2 5 0 3 2 5 0 3-2 5 0 3 2 5 0 3-2 5 0 3 2 5 0" stroke-width="3"/>`
  },
  {
    id: "car-water-in-fuel",
    name: "Water in fuel (diesel)",
    quiz: "Water in the diesel filter",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["water in fuel filter", "fuel filter water warning", "WIF", "drain fuel filter"],
    looksLike: ["petrol pump with drops", "fuel pump with water drops", "pump with raindrops", "fuel pump and three drops", "filter with a drop", "pump with tears"],
    meaning: "The fuel filter's water trap has collected water. Diesel picks up water from condensation (and the odd bad batch of fuel), and the filter catches it before it reaches the injection system, which really doesn't like water.",
    action: "Get the filter drained or replaced soon, at a garage unless you know your way round a diesel fuel system. Drive gently until then. Ignoring it can damage the high-pressure fuel pump and injectors, which is an eye-watering bill.",
    tip: "Some makes show a fuel filter with a drop or wavy lines instead of the pump. Same message either way.",
    svg: `<rect x="8" y="14" width="20" height="36" rx="2"/><rect x="12" y="18" width="12" height="9" rx="1"/><path d="M28 22h3a3 3 0 0 1 3 3v12a2.5 2.5 0 0 0 5 0V21l-5-5"/><path d="M5 50h26"/><path d="M48 18c-2.6 3.6-3.8 5.4-3.8 6.9a3.8 3.8 0 0 0 7.6 0c0-1.5-1.2-3.3-3.8-6.9zM56 28c-2.6 3.6-3.8 5.4-3.8 6.9a3.8 3.8 0 0 0 7.6 0c0-1.5-1.2-3.3-3.8-6.9zM47 36c-2.6 3.6-3.8 5.4-3.8 6.9a3.8 3.8 0 0 0 7.6 0c0-1.5-1.2-3.3-3.8-6.9z" fill="currentColor" stroke="none"/>`
  },
  {
    id: "car-collision-warning",
    name: "Collision warning or emergency braking off",
    quiz: "Collision warning and emergency braking",
    category: "car",
    color: "amber",
    urgency: "soon",
    aka: ["forward collision warning", "FCW", "AEB", "autonomous emergency braking", "pre-collision system", "PCS", "front assist", "city safety"],
    looksLike: ["car in a circle with a star", "car in brackets", "circle with a car and a star", "car with a star", "car crash in a circle", "car with explosion"],
    meaning: "This is the car's forward collision warning and automatic emergency braking. Flashing red with beeps means the car thinks you're about to hit something ahead. Steady amber (often with OFF) means the system is switched off or can't see, usually because the camera behind the windscreen or the radar in the front grille is dirty, iced up or blocked.",
    action: "Flashing red: brake now. Steady amber: clean the windscreen in front of the mirror and the badge or panel on the front grille, and check it hasn't been switched off in the settings. If it stays on, get it checked, especially after a new windscreen, as the camera needs recalibrating.",
    // Traced from Volkswagen's warning lamp artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.4 17.1C24.7 17.1 22.2 15 21.6 14.4C21.2 14.1 20.6 13.5 20.1 13.5L22.2 20.9C21.8 21.4 20.9 21.6 20.3 21.8C18.9 22.5 17.4 23.1 16 23.8C15.4 24.1 14.5 24.3 14.1 24.8C14.6 25.1 15.6 24.9 16.2 24.9C17.3 24.9 21.7 24.8 22.4 25.1C22.8 25.6 22.6 28.8 22.6 29.7C22.6 30.2 22.4 30.9 22.8 31.3C23.4 30.9 25.6 27.5 26.2 26.6C26.4 26.4 26.6 25.9 26.9 25.7C27.8 25.2 32.8 26 33.8 25.5C33.7 25 32.7 24.6 32.3 24.3C31.4 23.8 28.9 22.3 28.4 21.7L29.6 11.7C29.1 11.8 28.6 12.8 28.3 13.2C27.6 14.1 26.1 16.6 25.4 17.1ZM31.6 13.9C31.3 14.4 31.1 15.9 31.2 16.5C31.6 16.9 32.6 16.7 33.2 16.7C34.5 16.7 35.8 17.1 37 17.4C41.4 18.8 44.8 21.9 47 25.9C48 27.7 48.5 29.8 48.7 31.9C49 34.7 48.5 38 47 40.6C46 42.4 44.9 44.1 43.3 45.5C37.6 50.6 29.4 51.3 22.9 47.3C18.4 44.6 15.8 39.8 15.3 34.7C15.2 34 15.1 33.4 15.2 32.7C15.3 31.4 15.4 30.2 15.7 28.9C15.9 28.4 16.3 27.6 16.2 27.1C15.7 26.9 14 26.9 13.5 27.1C12.8 27.7 12.6 29.9 12.5 30.8C12 34.8 12.7 39.1 14.7 42.6C20.4 52.5 32.5 55.7 42.3 49.8C52.5 43.6 54.6 29.9 47 20.8C44.2 17.5 40 14.8 35.6 14.2C34.5 14 32.7 13.6 31.6 13.9ZM12.9 52.2C13.4 52.1 15.9 49.3 16.2 48.8C16.1 48.2 14.4 46.6 14 46C12.8 44.4 11.9 42.5 11.3 40.6C9.4 34.9 9.8 27.8 12.7 22.5C13.3 21.5 14 20.5 14.7 19.6C15.2 19 15.9 18.5 16.2 17.8C16 17.3 13.5 14.5 13 14.3C12.3 14.5 11.6 15.6 11.1 16.1C9.7 17.9 8.5 19.9 7.5 21.9C3.8 29.6 4.2 39 8.4 46.4C9.2 47.7 11.7 51.6 12.9 52.2ZM47.8 17.9C48.1 18.5 48.8 19.1 49.3 19.7C50.1 20.7 50.8 21.8 51.4 22.9C54.2 28.2 54.6 35.1 52.5 40.8C51.8 42.6 50.9 44.4 49.7 46.1C49.3 46.7 47.9 48.1 47.8 48.7C48 49.3 50.5 52 51 52.2C51.7 52 52.3 51 52.8 50.5C54.2 48.8 55.5 46.8 56.4 44.7C57.3 42.8 58.2 40.7 58.5 38.5C58.7 37.4 58.9 36.3 59 35.2C59.1 34.6 59 33.9 59 33.3C59 28.9 58 24.4 55.7 20.5C55 19.2 52.3 14.8 51 14.3C50.5 14.5 47.9 17.3 47.8 17.9ZM16.9 21C17.4 21.1 19.4 20.2 19.8 19.8C19.8 19.3 19.6 18.7 19.3 18.5C18.7 18.7 16.9 20.4 16.9 21ZM25.1 41.2C25.6 41.7 25.8 42.4 26.4 42.8C28.1 44.4 30.9 44.5 32.8 43.2C33.6 42.5 33.9 41.7 34.6 41.1L44.1 40.9C44.6 40.5 45.2 39.4 45.1 38.8C44.5 38.5 42.8 38.7 42 38.7C40 38.7 38 38.7 36 38.7C35.1 38.7 33.9 38.5 33 38.8C32.6 39.4 32.9 40.2 32.1 41.1C30.9 42.5 28.5 42.4 27.4 40.9C26.9 40.3 26.9 39.6 26.6 39C25.7 38.4 24.3 39.2 23.4 38.6C23.1 38 23.3 36.6 23.9 36.1C24.1 35.9 24.5 35.8 24.8 35.6C26.8 34.8 29.1 34.6 31.2 34.2C32 34.1 33 34.1 33.7 33.8C34.2 33.5 34.6 33.1 35 32.7C36.5 31.4 38 29.6 40 29C41.2 28.6 42.4 28.5 43.6 28.5C44.1 28.5 45 28.6 45.4 28.3C45.4 27.6 44.9 26.5 44.3 26.1C43.8 26 43.2 26.1 42.7 26.1C40 26.5 38.3 26.7 36.1 28.5C35.1 29.3 33.6 31.1 32.5 31.6C32 31.8 31.3 31.9 30.7 31.9C28.1 32.2 23.4 32.9 21.8 35.1C20.9 36.3 20.3 40 22 40.9C22.9 41.4 24.1 40.9 25.1 41.2Z"/>'
  },
  {
    id: "car-blind-spot",
    name: "Blind spot warning",
    quiz: "Blind spot monitoring",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["blind spot monitoring", "BSM", "BLIS", "blind spot information system", "side assist", "lane change assist"],
    looksLike: ["two cars with waves", "two cars", "cars with curved lines between", "car with radar waves", "two cars side by side", "car and a car behind"],
    meaning: "This is the car's blind spot monitoring. Radar in the rear bumper watches the lanes beside and behind you, and lights a symbol in (or next to) the door mirror when something's lurking where you can't see it. On the dashboard, an amber symbol (often with OFF) means the system is switched off or can't see.",
    action: "If the light in the mirror is on or flashing, don't change lanes until it goes out. If the dashboard warning stays on, check the rear bumper corners for dirt, snow, stickers or a bike rack, which block the radar. Still on? It may be switched off in the settings, or need a garage.",
    tip: "It's a helper, not a replacement for a look over your shoulder.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.3 6.3C10.3 6.5 7.8 7 6.6 8.8C5.6 10.1 5.9 11.8 5.8 13.4C5.6 16.7 5.7 20 5.7 23.4C5.7 26.1 5.8 28.9 5.8 31.6C5.8 32.9 5.6 34.5 6.6 35.5C8 37.1 10.4 36.8 12.3 36.9C13.2 37 14.1 37 15 37C16.7 36.8 18.9 37.1 20.4 35.8C21.7 34.7 21.3 33.1 21.4 31.6C21.5 30.7 21.4 29.8 21.5 28.9C21.6 27.8 21.5 26.7 21.5 25.6C21.5 23.9 21.6 22.3 21.6 20.7C21.6 18.1 21.5 15.5 21.4 13C21.4 11.7 21.5 10.3 20.9 9.1C19.4 6.5 14.9 6 12.3 6.3ZM12.5 8.6C14.2 8.4 17.7 8.6 18.8 10.1C19.4 10.9 19.2 12.2 19.2 13.2C19.3 15.7 19.3 18.3 19.3 20.8C19.3 24.2 19.4 27.6 19.2 30.9C19.2 31.6 19.4 33.6 18.9 34.1C18.3 34.8 15.7 34.7 14.8 34.7C13.6 34.8 9.2 34.9 8.4 34.1C7.9 33.7 8 31.9 8 31.2C8 28.5 7.9 25.9 7.9 23.2C7.9 20 7.8 16.8 8 13.6C8.1 12.5 7.8 10.9 8.5 10C9.3 8.9 11.3 8.7 12.5 8.6ZM9.2 16.3C9.2 16.9 10.6 19.5 11.2 19.6C11.9 19.8 13.1 19.5 13.9 19.6C14.5 19.6 15.3 19.8 15.8 19.6C16.4 19.4 17.8 16.8 17.8 16.2C16.8 14.7 12.6 14.8 11.1 15.2C10.4 15.4 9.4 15.7 9.2 16.3ZM29.4 26.8C28.3 26.9 28.4 28 28.3 28.8C28 30.8 27.5 32.9 26.4 34.7C26 35.5 25.5 36.2 25 36.9C24.7 37.2 24.4 37.5 24.1 37.9C24.1 38.1 24 38.3 24 38.5C24 39.1 26 41.5 27 40.5C29.1 38.4 30.5 35.7 31.4 33C31.8 31.9 32.8 28 32 27.1C31.5 26.6 30 26.7 29.4 26.8ZM36.4 26.8C35.2 26.9 35.5 28.5 35.4 29.4C35 32.2 34.2 34.9 33 37.4C32.3 38.8 31.4 40.1 30.5 41.3C30 41.9 29.2 42.5 29 43.2C28.9 44 31 46.5 32 45.4C34.8 42.8 36.8 39.2 38 35.6C38.7 33.6 39.1 31.4 39.3 29.2C39.3 28.6 39.5 27.6 39.1 27.1C38.6 26.6 37.1 26.7 36.4 26.8ZM10.8 28.2C10.3 28.2 10 28.4 9.8 28.8C9.6 29.2 9.6 29.6 9.6 30.1C9.6 31.1 9.5 32.2 11 32.2C12.8 32.2 14.7 32.3 16.5 32.2C16.9 32.2 17.3 32 17.5 31.6C17.7 31.2 17.6 30.8 17.6 30.3C17.6 29.3 17.6 28.1 16.3 28.1C14.5 28.1 12.5 28 10.8 28.2ZM42.9 57.5C43.4 57.8 44.2 57.8 44.7 57.4C45 56.9 44.7 52.1 44.7 51.2C44.5 47.5 44.7 43.8 44.7 40.1C44.7 38.8 44.6 34.9 44.9 34C45.7 31.6 51.5 31.9 53.4 32.3C54.1 32.5 55.3 32.9 55.7 33.7C56.2 35.1 55.9 38.1 56 39.7C56.1 41.8 56 43.9 56 45.9C56 47.9 56.1 50 56 51.9C55.9 52.9 55.7 56.6 56 57.3C56.4 57.8 57.3 57.8 57.8 57.5C58.4 56.8 58.1 55.5 58.1 54.7C58.2 54.1 58.1 53.5 58.2 52.9C58.3 50.8 58.3 48.7 58.3 46.6C58.3 44.2 58.2 41.9 58.2 39.5C58.2 37.7 58.3 36 58.1 34.3C58 33.7 57.9 32.9 57.5 32.4C55.1 28.9 46.9 29 43.9 31.6C42.3 32.9 42.5 35.4 42.5 37.3C42.5 41 42.2 44.7 42.4 48.3C42.5 49.4 42.4 50.5 42.5 51.6C42.6 52.8 42.2 56.8 42.9 57.5ZM46 41.2C45.8 41.9 46.5 42.7 46.8 43.3C47 43.7 47.3 44.4 47.7 44.7C48.3 44.9 49.2 44.7 49.8 44.7C50.3 44.7 52.1 44.9 52.5 44.7C53 44.6 54.3 42.3 54.5 41.8C54.5 41.6 54.5 41.5 54.5 41.3C54.1 40.7 53.1 40.5 52.5 40.3C50.9 39.8 47 39.8 46 41.2Z"/>'
  },
  {
    id: "car-key-battery",
    name: "Key fob battery low",
    quiz: "Key battery low",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["key battery low", "remote key battery", "smart key battery", "replace key battery"],
    looksLike: ["key with a battery", "battery and a key", "key next to a battery", "battery with plus and minus and a key", "key and battery", "key with battery symbol"],
    meaning: "The battery in your remote key is running out. The remote locking range gets shorter first, then keyless entry and start get unreliable.",
    action: "Replace the battery soon. It's usually a coin cell (often a CR2032, but check the old one) behind a small panel or a hidden release button. If it dies completely, most cars have a backup: a hidden key blade for the door, and a spot on the steering column or start button where you hold the key to start the car.",
    svg: `<rect x="6" y="22" width="13" height="22" rx="2"/><path d="M10 22v-3h5v3"/><path d="M10 28h5M12.5 25.5v5M10 38.5h5" stroke-width="2.5"/><circle cx="49" cy="33" r="8"/><circle cx="51" cy="33" r="2.4" fill="currentColor" stroke="none"/><path d="M41 33H24v5M30 33v4"/>`
  },
  {
    id: "car-passenger-airbag-off",
    name: "Passenger airbag off",
    quiz: "Front passenger airbag disabled",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["PASSENGER AIRBAG OFF", "airbag deactivated", "passenger air bag off light", "airbag off switch"],
    looksLike: ["person with crossed out circle", "airbag crossed out", "seated person with a crossed circle", "person and circle with x", "off with a person", "airbag off"],
    meaning: "The front passenger airbag is switched off. Either someone has turned it off with the key switch (usually in the glovebox or on the end of the dashboard), or the seat has decided nobody heavy enough is sitting there, which is normal for an empty seat or a small child.",
    action: "If you have a rear-facing baby seat in the front, it must be OFF: it's illegal to fit one in front of an active airbag. If an adult is sitting there and it says OFF, check the switch is set to ON and that they're sitting back properly in the seat. If it still says OFF, get the seat sensor checked.",
    tip: "There's usually a matching ON light. Seeing OFF next to an empty seat is normal on cars that detect who's sitting there.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M35.6 8.6C35.5 9.6 37.5 11.9 37.9 13C37.6 14.2 36.9 15.2 36.5 16.4C35.5 19.9 35.3 23.8 36.1 27.3C36.4 28.5 36.7 29.6 37.1 30.6C37.4 31.2 37.8 31.8 37.9 32.4C37.5 33.5 35.5 35.8 35.6 36.8C35.8 37.3 36.5 37.7 37 37.7C37.8 37.4 38.8 35.2 39.3 34.4C39.7 34.6 40 35.1 40.4 35.4C40.9 35.8 41.4 36.2 42 36.5C44.3 37.7 47 37.3 49 35.9C49.6 35.4 50.1 34.9 50.6 34.4C51.4 35.2 51.9 37.2 52.9 37.7C53.5 37.7 54.1 37.3 54.4 36.9C54.5 35.9 52.6 33.5 52.1 32.4C52.2 31.8 52.6 31.3 52.9 30.7C53.3 29.6 53.6 28.5 53.9 27.4C54.7 23.5 54.5 19.3 53.2 15.6C52.9 14.7 52.4 13.9 52.1 13C52.4 11.7 54.5 9.8 54.4 8.5C54.1 8.1 53.5 7.7 53 7.7C52 7.9 51.4 10.2 50.6 11C50.1 10.5 49.6 9.9 49 9.5C46.9 8 44.2 7.7 41.8 9C41.3 9.3 40.8 9.6 40.4 10C40 10.3 39.7 10.7 39.3 11C38.8 10.2 37.8 7.9 37 7.7C36.5 7.7 35.8 8.1 35.6 8.6ZM20.5 18.4L20.5 19.6C19.6 20.6 16.1 21.4 15.1 22.4C14.6 22.8 14.4 24.5 14.3 25.1C13.8 27.4 13.2 29.6 12.7 31.8C12.5 32.5 12 34 12.6 34.7C12.8 34.7 12.9 34.7 13.1 34.6C13.7 34.3 15.7 32 16.3 31.4C17.1 30.3 18.1 29.4 19.1 28.4C20.5 26.9 21.9 25.3 23.4 23.8C24.3 22.9 25.2 22 25.9 21.1L27.5 21.9C26.6 23 25.5 23.9 24.6 25C22.4 27.6 19.8 30 17.5 32.6C16.9 33.3 15.1 34.8 14.8 35.5C14.6 35.9 14.7 36.3 15 36.6C15.5 36.9 16.2 36.5 16.8 36.4C18.1 36.1 19.5 35.9 20.8 35.8C24.6 35.4 28.2 36.5 31.8 37.5L31.5 39.2C30.9 39.2 29.7 38.6 29 38.4C28 38.1 26.9 37.9 25.8 37.7C21.4 37.2 17.7 37.7 13.5 39.3C13.1 38.3 13.2 35.4 12.6 34.9C11.9 34.8 11.2 35.9 10.7 36.4C9.8 37.4 6.2 40.8 5.9 41.7C5.9 42.4 7.1 43.6 7.8 43.6C8.5 43.4 9.4 42.4 10.1 41.9C11 41.3 12 40.6 13 40.2C13.4 40.8 13.5 41.9 13.8 42.7C14.6 44.7 15.4 46.7 16.4 48.6C16.6 49.1 16.8 49.7 17.2 50.1C17.5 50.5 20.4 50.9 20.9 50.8C21 50.7 21.1 50.6 21.1 50.5C21.3 49.7 20.4 48.7 20.1 47.9C19.2 45.9 18.2 43.9 17.6 41.7C18.1 41.2 19.3 41 20.1 40.9C22.4 40.5 25.1 40.6 27.3 41.6C27.3 42.9 25.4 46.9 24.7 48.2C24.4 48.8 23.4 50 23.8 50.6C24.3 50.9 27 50.6 27.5 50.3C27.6 50.2 27.7 50.1 27.8 50C28.2 49.4 28.4 48.8 28.7 48.1C29.6 46.4 30.4 44.6 31.1 42.8C31.4 41.9 31.6 41 31.9 40.1C33.1 40.6 34.2 41.3 35.2 42C35.9 42.5 36.7 43.4 37.5 43.6C38.1 43.4 38.9 42.5 39.1 41.9C39.2 41.1 38.3 40.7 37.7 40.3C36.2 39.1 34.3 37.9 32.4 37.2C32.4 36.8 32.5 36.4 32.5 36C32.6 35 32.6 34 32.5 33.1C32.4 32.4 32.2 31.7 32 31C31.7 29.5 31.3 28 31 26.5C30.8 25.7 30.3 23 29.9 22.5C29.6 22.1 29 22 28.6 21.7C29.7 20.3 31 19 32.2 17.8C32.7 17.2 33.5 16.7 33.5 15.9C33.2 15.4 32.4 14.5 31.8 14.4C31 14.6 30.3 15.6 29.8 16.2C28.5 17.6 27.2 19 25.8 20.4L24.4 19.6L24.4 18.5C25.2 17.3 25.8 17.3 26.3 15.6C26.8 13.6 26.2 10.9 24.2 9.8C21.4 8.3 18.9 10.7 18.5 13.4C18.4 14.2 18.5 15.1 18.7 15.9C19.1 17 19.7 17.7 20.5 18.4ZM49.4 13L45 20.5L40.6 13C40.9 12.6 41.3 12.1 41.7 11.8C43.7 10 45.8 9.8 48 11.4C48.5 11.9 49.1 12.4 49.4 13ZM39.3 15.3L43.7 22.7L39.3 30.1C37.2 26.1 37.4 19.3 39.3 15.3ZM50.7 15.3C51.4 16.2 51.7 17.9 51.9 19C52.5 22.7 52.3 26.6 50.8 30.1L46.3 22.7L50.7 15.3ZM45 24.9L49.4 32.3C49.3 32.8 48.8 33.1 48.5 33.5C46.6 35.4 44 35.5 41.9 33.8C41.4 33.4 40.8 32.9 40.6 32.3L45 24.9ZM47.8 44.9C48.3 45.3 49.4 45.4 50 45.1C50.6 44.4 50.1 43.4 51.3 42.6C53.1 41.4 55.9 42.6 55.6 45C55.3 47.7 50.5 50.4 48.7 52.6C48.1 53.4 46.8 55.2 47.4 56.2C48 56.7 49.2 56.5 50 56.5C51.8 56.5 53.6 56.5 55.4 56.5C56.2 56.5 57.2 56.6 58 56.4C58.4 55.9 58.4 54.9 58.1 54.3C57.7 53.8 56.7 54 56.1 54C54.8 54 51.9 54.2 50.8 54C52.7 51.5 56 50 57.6 47.1C59.4 44 57.4 40.4 53.9 40C51.6 39.8 49.2 40.5 48.2 42.6C47.9 43.2 47.4 44.2 47.8 44.9Z"/>'
  },

  // ───────────────────────── GREEN / BLUE: just letting you know ─────────────────────────
  {
    id: "car-low-beam",
    name: "Dipped headlights (low beam)",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["low beam", "dipped beam", "headlights on"],
    looksLike: ["d with slanted lines", "headlight with lines pointing down", "jellyfish", "half moon with lines", "comb"],
    meaning: "Your normal headlights are on. Comfortably the least alarming jellyfish on the dashboard.",
    action: "Nothing to do. This is the setting for night driving and bad weather.",
    svg: `<path d="M36 16c10 0 18 7 18 16s-8 16-18 16c-3 0-4-4-4-16s1-16 4-16z"/><path d="M24 20l-14 4M24 28l-14 4M24 36l-14 4M24 44l-14 4"/>`
  },
  {
    id: "car-high-beam",
    name: "Full beam (high beam)",
    category: "car",
    color: "blue",
    urgency: "info",
    aka: ["high beam", "main beam", "brights"],
    looksLike: ["d with straight lines", "headlight with horizontal lines", "blue jellyfish", "half moon with lines", "comb"],
    meaning: "Your full-beam / high-beam headlights are on. Brilliant for you, blinding for anyone coming the other way.",
    action: "Great on empty, dark roads. Switch back to dipped beam (usually by pulling or pushing the indicator stalk) when there's oncoming traffic or a car in front, or you'll dazzle them. They tend to let you know.",
    svg: `<path d="M36 16c10 0 18 7 18 16s-8 16-18 16c-3 0-4-4-4-16s1-16 4-16z"/><path d="M24 20H10M24 28H10M24 36H10M24 44H10"/>`
  },
  {
    id: "car-front-fog",
    name: "Front fog lights",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["fog lamps", "front fog lamps"],
    looksLike: ["headlight with a wavy line", "d with lines crossed by a squiggle", "jellyfish with a wave"],
    meaning: "Your front fog lights are on: the low, wide beams meant for when you genuinely can't see far ahead.",
    action: "Use them only in fog or heavy rain or snow, and switch them off once visibility improves.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M14.4 19.7C13.8 20.3 13 20.6 12.3 21.1C11 21.8 9.8 22.6 8.5 23.3C7.9 23.6 7.1 23.9 6.6 24.4C6.3 24.8 6.3 27.4 6.5 28C6.5 28.2 6.6 28.2 6.7 28.4C7.5 28.6 8.5 27.7 9.1 27.3C10.2 26.7 14.9 23.7 15.7 23.6C16.4 26.5 15.3 29.1 14.3 31.8C14.1 32.3 13.7 34.1 13.4 34.4C13 34.7 12.4 35 11.9 35.2C10.8 35.9 9.7 36.6 8.5 37.2C8 37.6 7.3 37.9 6.8 38.3C6.6 38.4 6.5 38.6 6.5 38.8C6.3 39.2 6.3 41.5 6.5 42C6.5 42.2 6.6 42.3 6.8 42.4C7.4 42.5 8.1 41.9 8.7 41.5C9.8 40.9 12 39.4 13.1 39C13.5 40.7 14 42.3 14.7 43.9C15.1 44.8 15.8 45.9 15.9 46.9C15.1 47.4 14.2 47.9 13.3 48.4C11.8 49.3 10.3 50.2 8.8 51.1C8.1 51.4 7.3 51.8 6.8 52.3C6.3 52.7 6.3 55.9 6.7 56.3C7.4 56.5 8.9 55.4 9.5 55C11.3 54 13.1 52.9 14.8 51.9C15.5 51.5 16.2 51 17 50.7C17.4 52.2 16.9 54.1 16.3 55.6C16 56.3 15.2 57.2 15.4 58C15.5 58.1 15.6 58.2 15.8 58.2C16.1 58.4 18.8 58.4 19.1 58.2C19.4 58.1 19.5 57.9 19.6 57.6C20.6 55.4 21.1 53 20.9 50.6C20.9 49.9 20.7 49.3 20.6 48.6C21.1 48 25 45.9 26 45.4C26.5 45.1 27.5 44.7 27.8 44.1C28.1 43.6 27.9 43 27.9 42.5C27.9 41.8 28.1 40.9 27.7 40.4C26.9 40.2 26 41 25.3 41.4C23.4 42.5 21.4 43.8 19.4 44.8C18.9 44.3 18.7 43.4 18.4 42.8C17.7 41.2 16.5 38.5 17 36.7C17.7 36.1 18.6 35.7 19.4 35.2C21.2 34.2 23 33.1 24.7 32.1C25.6 31.6 26.7 31.1 27.5 30.5C27.7 30.4 27.8 30.2 27.9 30C28 29.6 28 27.1 27.9 26.7C27.8 26.5 27.7 26.4 27.6 26.3C26.8 26.3 25.8 27.1 25.1 27.5C23 28.8 20.9 30.1 18.7 31.3C18.7 30.8 19 30.2 19.2 29.7C19.4 28.8 19.7 27.9 19.8 26.9C19.9 25.6 19.8 24.2 19.5 22.9C19.4 22.4 19.2 21.9 19.2 21.5C19.8 20.9 20.8 20.5 21.5 20C22.8 19.3 24.1 18.5 25.4 17.8C26 17.4 27.4 16.8 27.8 16.2C28.1 15.8 28 12.9 27.8 12.5C27.1 12.1 25.7 13.2 25.1 13.6C22.7 14.9 20.4 16.4 18 17.7C17.7 17.4 17.6 16.8 17.4 16.3C16.8 13.8 16.7 11.4 17.8 9.1C18 8.5 18.3 8 18.6 7.6C18.8 7.2 19.2 6.8 19.4 6.4C19.5 6.2 19.4 6.1 19.4 6C19 5.5 18.2 5.7 17.7 5.7C15.3 5.7 15 5.4 14.1 7.8C13.1 10.4 12.8 13.2 13.4 15.9C13.6 17.1 14.3 18.7 14.4 19.7ZM35.7 6.6C35.1 7.2 34.8 8.8 34.6 9.6C34 12.3 33.4 15 32.9 17.7C31.4 27.6 31.4 37.6 33.1 47.4C33.6 49.8 34.1 52.1 34.7 54.4C34.9 55.2 35.1 56.7 35.6 57.3C36.4 57.6 38.7 56.8 39.6 56.5C43.4 55.4 47.7 52.8 50.3 49.8C52.7 47.1 54.6 44.5 55.9 41C59.7 31 56.7 20.1 49 12.8C46.3 10.3 43 8.6 39.5 7.4C38.6 7.1 36.6 6.4 35.7 6.6ZM38.2 11C40.8 11.4 44.1 13.7 46.1 15.3C56.2 23.7 56.2 39.8 46.3 48.4C44.4 50.1 40.8 52.5 38.2 52.9C37.9 52 37.7 51 37.5 50C37 47.6 36.5 45.1 36.2 42.6C35.4 35 35.3 27.5 36.4 19.9C36.8 17.7 37.2 15.5 37.6 13.3C37.8 12.6 37.9 11.7 38.2 11Z"/>'
  },
  {
    id: "car-rear-fog",
    name: "Rear fog light",
    category: "car",
    color: "amber",
    urgency: "info",
    aka: ["rear fog lamp"],
    looksLike: ["backwards d with a wavy line", "headlight facing right with squiggle", "jellyfish facing right"],
    meaning: "The rear fog light is on. It's a very bright red light on the back of the car.",
    action: "Only use it when visibility is really poor (roughly under 100 m / 330 ft). Left on in clear weather, it dazzles the driver behind and can hide your brake lights. They won't thank you for it.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M43.8 17.8L36.4 17.9C35.9 18.4 35.9 21 36.3 21.5L45.1 21.6C45.3 22.1 45.4 22.6 45.5 23.1C46 25.1 46 26.9 45.4 28.9C45.2 29.3 45.1 29.7 44.9 30.1C44.2 30.2 43.4 30.1 42.7 30.1C41.3 30.1 40 30.1 38.6 30.1C37.9 30.1 36.7 29.9 36.2 30.4C35.9 30.9 35.9 33.3 36.3 33.7C37.2 34.1 42.1 33.8 43.5 33.9C43.5 34.6 43.1 36 43 36.9C43 38.8 43.5 40.5 44 42.3C43 42.6 39.7 42.4 38.4 42.4C37.8 42.4 36.9 42.2 36.3 42.6C35.9 43 35.9 45.2 36.1 45.8C36.7 46.4 38 46.2 38.8 46.2C40.3 46.2 41.8 46.2 43.4 46.2C44.1 46.2 44.9 46.1 45.6 46.2C46 46.6 46.1 47.2 46.3 47.7C47.2 50.1 47.3 52.5 46.6 54.9C46.3 55.6 45.2 57.4 45.3 58C45.5 58.1 45.5 58.2 45.7 58.2C46.1 58.4 49 58.4 49.3 58.1C49.7 57.8 49.9 57.1 50 56.6C51 53.9 51.2 51.1 50.5 48.3C50.4 47.6 50.1 46.9 49.9 46.2C51.1 46 53.8 46.2 55.2 46.2C55.8 46.2 56.7 46.3 57.3 46C57.7 45.5 57.7 43 57.3 42.5C56.7 42.2 55.7 42.4 55 42.4C53.9 42.4 48.9 42.6 48.2 42.3C46.9 39.8 46.4 36.6 47.6 34C48.4 33.7 53.6 33.9 54.8 33.9C55.5 33.9 56.8 34.1 57.4 33.6C57.7 33.1 57.7 30.7 57.3 30.2C56.5 29.9 51.7 30.1 50.6 30.1C50.1 30.1 49.5 30.2 49.1 30C50.1 26.4 49.9 25.2 49.2 21.6C50.6 21.4 53.4 21.6 54.9 21.6C55.6 21.6 56.7 21.8 57.3 21.4C57.7 20.9 57.6 18.8 57.4 18.1C56.9 17.5 55.5 17.8 54.8 17.8C53.3 17.8 51.7 17.8 50.2 17.8C49.5 17.8 48.7 17.9 47.9 17.8C47.7 17.3 47.6 16.8 47.4 16.3C46.7 14 46.7 11.7 47.6 9.4C47.9 8.7 48.2 8.1 48.6 7.5C48.9 7.2 49.2 6.8 49.4 6.4C49.5 6.2 49.4 6.1 49.4 6C49.2 5.8 49.2 5.8 49 5.7C48.4 5.6 45.6 5.6 45.2 5.9C44.8 6.2 44.5 6.8 44.3 7.3C43.2 9.6 42.8 12.2 43.1 14.8C43.3 15.8 43.7 16.8 43.8 17.8ZM28.3 57.3C28.9 56.7 29 55.4 29.2 54.6C29.9 52.4 30.3 50.2 30.7 47.9C32.5 37.9 32.7 27.7 31 17.7C30.5 15 30 12.3 29.3 9.7C29.1 8.9 28.9 7.2 28.3 6.7C27.6 6.4 25.1 7.2 24.2 7.5C20.3 8.8 16.8 11 13.8 13.9C5.6 22.2 4.2 35.4 10.2 45.4C11.4 47.3 12.9 49.3 14.6 50.8C17.6 53.4 20.8 55.5 24.6 56.6C25.4 56.9 27.6 57.6 28.3 57.3ZM25.8 11.1C26.4 12.9 26.7 14.9 27 16.8C28.7 25.9 28.7 33.8 27.7 42.9C27.4 45.3 27 47.7 26.4 50.1C26.3 50.9 26.1 52.4 25.7 53C23.6 52.5 21.7 51.4 20 50.2C10.9 44.2 7.3 31.5 12.7 21.8C14.9 17.9 17.8 14.8 21.7 12.7C22.5 12.2 24.9 11 25.8 11.1Z"/>'
  },
  {
    id: "car-sidelights",
    name: "Sidelights / parking lights",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["position lights", "parking lamps", "side lights"],
    looksLike: ["two half circles back to back", "two d shapes with rays", "two light bulbs facing away", "butterfly"],
    meaning: "Your sidelights (the small parking/position lights) are on, but your headlights aren't.",
    action: "Fine for parking or at dusk, but switch to proper headlights when it's dark. Sidelights alone aren't enough to see or be seen.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M7.4 17.5C6.8 17.9 6.5 19.3 6.5 19.9C6.9 20.6 7.8 20.7 8.5 20.9C10.3 21.4 12 22 13.8 22.6C14.4 22.8 15.4 23.4 16.1 23C16.5 22.5 17 21.2 16.8 20.6C16.3 20 15.3 19.9 14.6 19.6C12.9 19.1 11.3 18.6 9.7 18.1C9 17.8 8.1 17.4 7.4 17.5ZM47.2 20.5C47 21.2 47.5 22.5 47.9 23C48.6 23.4 49.6 22.8 50.3 22.6C52 22 53.7 21.4 55.3 20.9C56 20.7 56.9 20.6 57.4 20.1C57.6 19.4 57.1 17.8 56.5 17.5C55.7 17.4 50.7 19.2 49.5 19.6C48.8 19.8 47.7 20 47.2 20.5ZM18.9 21.4C18.3 22 17.7 25.1 17.5 26.1C16.8 30.2 16.7 34.4 17.6 38.5C17.8 39.4 18.3 42 18.9 42.6C19.4 42.7 19.9 42.6 20.4 42.5C22.5 42.1 24.5 41.1 26 39.5C30.4 35.2 30 27.5 25.1 23.7C23.9 22.8 20.4 20.9 18.9 21.4ZM45.1 42.5C45.7 41.8 46.2 39.4 46.4 38.4C47.2 34.4 47.3 30.1 46.5 26C46.2 25 45.7 22.2 45.1 21.5C44.6 21.3 44.1 21.4 43.7 21.5C41.5 21.9 39.5 23 37.9 24.5C33.6 28.8 34 36.3 38.6 40.1C39.8 41.1 43.6 43.2 45.1 42.5ZM20.9 24.9C22.2 25 23.8 26.5 24.6 27.5C27.4 31.4 25.8 37.6 21 39.2C20.6 38.6 20.3 36.4 20.2 35.6C19.9 32.4 19.9 27.9 20.9 24.9ZM43 24.8C44.1 27.2 44.1 33.2 43.7 35.8C43.6 36.8 43.5 38.2 43 39.2C42 38.9 41.2 38.3 40.4 37.7C37.1 34.8 37.2 29.4 40.4 26.4C41.1 25.8 42 25.1 43 24.8ZM4.9 30.7C4.6 31.2 4.6 32.7 4.9 33.2C5.4 33.7 6.5 33.5 7.2 33.5C9 33.5 10.8 33.5 12.6 33.5C13.3 33.5 14.3 33.7 14.8 33.3C15.2 32.7 15.2 31.2 14.8 30.6C14.2 30.3 13.2 30.5 12.6 30.5C10.8 30.5 9 30.5 7.3 30.5C6.6 30.5 5.5 30.3 4.9 30.7ZM49.1 30.7C48.8 31.2 48.8 32.8 49.2 33.3C49.8 33.7 50.7 33.5 51.4 33.5C53.2 33.5 55 33.5 56.7 33.5C57.4 33.5 58.5 33.7 59.1 33.3C59.4 32.8 59.4 31.3 59.1 30.7C58.6 30.3 57.5 30.5 56.8 30.5C55 30.5 53.2 30.5 51.4 30.5C50.7 30.5 49.7 30.3 49.1 30.7ZM6.6 43.9C6.3 44.5 6.8 46 7.3 46.4C8 46.6 8.9 46.2 9.6 45.9C11.3 45.4 13 44.8 14.7 44.3C15.3 44.1 16.4 44 16.8 43.4C16.9 42.7 16.5 41.4 16 40.9C15.3 40.7 14.4 41.2 13.7 41.4C12 42 10.3 42.5 8.7 43C8 43.2 7.1 43.4 6.6 43.9ZM48 40.9C47.5 41.3 47 42.8 47.2 43.4C47.6 44 48.6 44.1 49.2 44.3C51 44.8 52.7 45.4 54.4 46C55.1 46.1 56 46.7 56.7 46.4C57.2 45.9 57.7 44.5 57.4 43.8C56.8 43.3 51.6 41.9 50.5 41.5C49.8 41.2 48.8 40.7 48 40.9Z"/>'
  },
  {
    id: "car-turn-signals",
    name: "Indicators / turn signals",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["blinkers", "turn signal", "hazard lights"],
    looksLike: ["two arrows", "green arrows", "left and right arrows", "flashing arrows"],
    meaning: "Your indicator is on (one arrow flashing), or your hazard lights are on (both flashing). The clicking is there in case the flashing didn't get your attention.",
    action: "If it's flashing much faster than usual, one of the indicator bulbs has probably blown. The frantic blinking is the car's way of telling you.",
    svg: `<path d="M6 32l13-12v7h8v10h-8v7z" fill="currentColor"/><path d="M58 32L45 20v7h-8v10h8v7z" fill="currentColor"/>`
  },
  {
    id: "car-cruise-control",
    name: "Cruise control",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["speed control", "adaptive cruise control", "ACC"],
    looksLike: ["speedometer", "gauge with arrow", "dial", "speedo with needle"],
    meaning: "Cruise control is on. White or grey usually means it's ready; green means it's active and holding a speed.",
    action: "Tap the brake or the cancel button to switch it off.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10 8.6C9.4 8.9 6 12.2 5.8 12.8C5.9 13.4 6.7 14 7.1 14.4C7.8 15.1 10.7 17.7 11 18.4C10.4 19 8.5 20.5 8.6 21.3C9.1 21.8 10.2 21.6 10.9 21.6C12.7 21.6 14.6 21.6 16.4 21.6C17.1 21.6 18.1 21.8 18.6 21.4C19 20.7 18.8 19.7 18.8 19C18.8 17.2 18.8 15.4 18.8 13.6C18.8 12.9 19.1 11.7 18.4 11.3C17.7 11.3 16.2 13.2 15.6 13.8C14.5 13.1 12.7 10.9 11.7 10C11.3 9.5 10.7 8.6 10 8.6ZM20.7 55.4C21.5 55.1 23.7 52.6 24.5 51.9C24.9 51.5 25.4 51 25.6 50.5C25.6 49.9 24 48.3 23.4 48.1C22.4 48.1 21.5 49.8 20.6 50.3C18.7 48.2 16.4 43.1 16.5 40.1C17.4 40 19.1 40.4 19.9 39.9C20.2 39.4 20.2 37 19.8 36.5L16.5 36.3C16.4 33.9 17.9 30.3 19.1 28.3C19.4 27.7 20.2 26.4 20.7 26.2L30.1 35.5C30 35.9 29.8 36.2 29.7 36.6C29.4 37.6 29.4 38.8 29.7 39.8C30 40.8 30.5 41.7 31.2 42.4C35.6 46.7 43 42.4 41.2 36.5C40.9 35.5 40.3 34.6 39.5 33.9C38.8 33.2 37.9 32.7 36.9 32.5C36 32.2 34.8 32.2 33.9 32.5C33.5 32.6 33.1 32.8 32.7 32.8L23.4 23.5C23.8 22.8 24.9 22.3 25.6 21.9C27.3 20.9 31.6 18.9 33.6 19.2C33.7 20.1 33.3 22 33.8 22.7C34.4 22.9 36.6 23 37.1 22.6C37.7 21.9 37.1 20.2 37.4 19.2C40.5 19.2 45.3 21.3 47.5 23.4L45.3 25.9C45.3 26.5 47 28.2 47.6 28.4C48.3 28.3 49.6 26.7 50.2 26.2C50.8 26.5 51.4 27.7 51.8 28.3C53.1 30.4 54.5 33.9 54.4 36.3L51.1 36.5C50.7 37 50.7 39.3 51 39.9C51.6 40.4 53.5 40 54.4 40.1C54.6 40.8 54.2 42 54 42.7C53.6 44.5 51.7 49.3 50.2 50.3C49.5 49.7 48.5 48.3 47.7 48.1C47.1 48.1 45.5 49.7 45.3 50.3C45.3 50.9 45.9 51.3 46.3 51.7C47 52.4 49.5 55.2 50.2 55.4C51.2 55.2 52.9 53 53.5 52.2C56.5 48.3 58.3 43.4 58.3 38.5C58.3 28.3 51.9 19.3 42 16.3C39.8 15.7 37 15.1 34.7 15.4C32.9 15.6 31.1 15.7 29.3 16.2C22.5 18.1 16.6 23.3 14.1 30C13.2 32.5 12.9 34.7 12.6 37.4C12.1 42.1 14.3 48.1 17.2 51.9C17.8 52.8 19.7 55.3 20.7 55.4Z"/>'
  },
  {
    id: "car-eco-mode",
    name: "Eco mode",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["ECO", "economy mode", "eco drive"],
    looksLike: ["leaf", "green leaf", "plant"],
    meaning: "Eco driving mode is on. To save fuel, the car softens the accelerator, changes gear earlier and dials back the air-con. Hence the leaf.",
    action: "Nothing to do. If you want more response, switch it off with the drive-mode button.",
    svg: `<path d="M14 50C14 26 28 14 52 12c-2 24-14 38-38 38z"/><path d="M14 50l22-22"/>`
  },
  {
    id: "car-auto-start-stop",
    name: "Auto start-stop",
    quiz: "Engine start-stop system",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["start/stop", "stop-start", "idle stop", "ISG"],
    looksLike: ["a in a circle", "a with circular arrow", "letter a in a circle arrow", "refresh with a"],
    meaning: "Green: the engine has switched itself off to save fuel while you're stopped, and it restarts when you lift off the brake or press the clutch. Crossed out or amber: the feature is off or unavailable (cold engine, low battery, air-con working hard…).",
    action: "Nothing to do. It's normal, even if the sudden silence at the lights takes some getting used to. Most cars have a button with this symbol to disable it for the current trip.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.9 56.3C19.5 56.1 20.7 54 20.6 53.3C20.1 52.6 19.1 52.2 18.4 51.7C17.6 51.1 16.9 50.5 16.2 49.8C13.2 46.9 11 43 10.1 38.9C9.2 34.9 9.3 30.9 10.5 26.9C11.4 23.9 13.1 21.2 15.2 18.8C22.4 10.5 34.8 9.1 44 14.9C50.6 19 54.2 26.5 54.2 34.3C54.2 37.2 53.8 40.6 52 43.1C51 42.8 49.5 40.7 48.5 40.8C47.9 41.3 47.6 43.3 47.4 44.1C46.6 46.9 45.9 49.6 45.1 52.4C44.9 53.1 44.3 54.9 44.3 55.5C44.4 55.8 44.4 55.8 44.5 56C45.2 56.2 47.2 54.8 47.8 54.4C50.2 53 52.7 51.6 55.1 50.2C55.9 49.7 57.5 49.1 58 48.4C58.1 47.3 55.6 46.3 55 45.5C57 42 57.5 40 57.9 36C58.2 33.4 57.9 30.6 57.3 28C53.3 9.5 31.3 1.4 16.2 12.7C13.4 14.8 10.9 17.5 9.2 20.6C4 29.8 4.6 41.7 11.3 50C12.9 51.9 14.6 53.6 16.6 55C17.2 55.5 18.1 56.3 18.9 56.3ZM19.7 47.4C20.2 47.9 21.3 47.7 21.9 47.7C22.6 47.7 24.2 47.8 24.7 47.6C25.2 47.2 25.3 46.1 25.4 45.6C25.6 44.7 26.3 40.9 26.7 40.4L36.9 40.4C37.3 41.1 37.9 44.5 38.2 45.6C38.3 46.1 38.4 47.1 38.8 47.5C39.3 47.8 41.1 47.7 41.7 47.7C42.3 47.7 43.4 47.9 43.9 47.4C44.2 46.7 43.4 44.7 43.2 43.9C42.3 40.8 41.5 37.6 40.7 34.5C39.4 30 38.3 25.5 37 21C36.8 20.2 36 16.4 35.5 16.1C35.1 15.8 34.4 15.9 33.9 15.9C32.5 15.9 31 15.9 29.6 15.9C29 15.9 28.2 15.8 27.9 16.3C27.5 16.9 26.2 22.3 25.9 23.4C24.4 28.9 22.9 34.4 21.5 39.9C21 41.7 20.5 43.4 20.1 45.2C19.9 45.9 19.4 46.8 19.7 47.4ZM32.3 20.4L35.9 35.8L27.7 35.9L31.2 20.4L32.3 20.4Z"/>'
  },
  {
    id: "car-hill-descent",
    name: "Hill descent control",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["HDC", "downhill assist", "descent control"],
    looksLike: ["car going downhill with a speedometer", "car on a slope with a dial", "car on a slope", "car going downhill", "tilted car"],
    meaning: "Hill descent control is on. The car brakes automatically so you crawl slowly down steep, slippery slopes.",
    action: "Nothing to do. It's meant for off-road or very steep descents. Flashing usually means it's actively braking.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.5 26.2C24.1 26.1 25.9 24.4 26 23.8C25.9 23.3 25.5 22.8 25 22.6C24.3 22.6 24.1 23.4 23.5 23.6C22.3 22.2 21.5 20.4 21.4 18.6L23 18.4C23.4 17.9 23.4 17.1 23.1 16.7L21.4 16.5C21.3 14.9 22.5 12.5 23.5 11.4L24.8 12.4C25.4 12.3 25.9 11.8 26 11.3C25.9 10.7 25.4 10.4 25 9.9C26.1 8.8 28.6 7.8 30.1 7.8L30.3 9.4C30.8 9.8 31.6 9.8 32 9.4L32.2 7.8C34 7.9 35.9 8.7 37.2 9.8L36.3 11.2C36.3 11.7 36.8 12.3 37.4 12.4C38 12.2 38.3 11.7 38.7 11.4C39.9 12.2 40.8 15.1 40.9 16.4C40.3 16.6 39.7 16.4 39.1 16.8C38.9 17.2 38.9 17.8 39.1 18.2C39.6 18.7 40.3 18.4 40.8 18.5C40.9 19.9 39.8 22.7 38.7 23.6L37.5 22.6C37 22.6 36.5 23.1 36.3 23.6C36.3 23.8 36.3 23.9 36.4 24.1C36.7 24.6 38.1 26.1 38.7 26.2C39.5 26.2 40.3 25 40.8 24.3C42.2 22.2 43.1 19.5 42.9 16.9C42.3 10.3 37.9 6.3 31.4 5.7C30.1 5.6 28.7 5.9 27.5 6.3C22.7 7.9 19.4 12.4 19.4 17.6C19.4 20 20.2 22.5 21.6 24.5C22.1 25.1 22.8 26.1 23.5 26.2ZM27.9 17.8C26.9 18.3 23.9 19.1 23.4 19.9C23.3 20.4 23.5 20.9 23.9 21.3C24.9 21.6 27.5 19.9 28.7 19.7C29.3 20.1 29.8 20.5 30.6 20.7C31.1 20.8 31.7 20.7 32.2 20.5C35.7 19.2 34.6 14 30.9 14.3C30 14.4 29.1 14.8 28.6 15.5C28 16.2 28.1 17 27.9 17.8ZM9.4 19.1C9 19.9 9.9 20.9 10 21.6C9.2 22.1 6.9 22.6 6.5 23.5C6.4 24.3 7.9 27.2 8.3 28.1C8.6 28.6 8.7 29.2 9.2 29.5C10.3 29.5 11.8 28.4 12.9 28.1C13.4 28.7 13.4 30 14.3 30.2C14.9 30 15.2 29 15.4 28.4C16.1 26.9 16.8 25.4 17.5 23.9C17.7 23.2 18.2 22.5 18.1 21.9C17.6 21.4 16.7 21.2 16.1 21C14.6 20.5 13 20 11.4 19.5C10.8 19.3 9.9 18.8 9.4 19.1ZM12.4 21.9L15.6 23L14.3 26.1L13.8 25.7C12.7 25.5 11.2 26.9 10.1 27L8.9 24.3L12.4 22.6L12.4 21.9ZM21.6 52.3C22.4 53.1 23 53.5 24 54C23.2 54.4 21.9 54.6 21.4 55.4C21.2 56 22.1 57.9 22.6 58.2C23.5 58.2 24.4 57.5 25.2 57.2C26.9 56.4 28.7 55.6 30.5 54.9C36.7 52.1 43 49.3 49.2 46.6C51.1 45.7 53.1 44.9 55 44C55.8 43.7 56.9 43.4 57.5 42.8C57.6 42.1 56.8 40.4 56.3 40C55.5 39.8 52.9 41.2 52.1 41.6C52.1 41.2 52.3 40.8 52.3 40.4C52.4 39.8 52.3 39.3 52.2 38.7C52.6 38.4 53 38.2 53.4 37.9C55.1 36 53.2 33.4 52.4 31.5C52 30.7 51.6 29.3 51 28.6C50.5 28 49.6 27.6 49 27.1C47.9 26.4 46.7 25.2 45.3 25.6C43.9 25.9 42.6 26.7 41.4 27.2C38.8 28.4 36.3 29.5 33.7 30.6C32.4 31.2 30 31.9 29 33C28 34.1 26.7 37.1 25.9 38.6C25.6 39.1 25.4 39.9 25 40.3C24.4 40.8 23.7 41.2 23.1 41.6C21.9 42.5 20.6 43.3 19.3 44.2C18.7 44.6 18 45 17.5 45.5C16.3 47 16.9 48.7 17.6 50.3C17.9 50.9 18 51.5 18.6 51.9C19.5 52.5 20.6 52.3 21.6 52.3ZM49.9 37.8C49.8 38.5 50.4 39.2 50.4 39.9C50.2 41.8 48.1 43 46.5 41.9C45.8 41.4 45.7 40.3 45 39.9C44.2 39.8 41.7 41.1 40.8 41.5C37.6 42.9 34.4 44.4 31.1 45.8C30.3 46.2 27.8 47 27.3 47.7C27.1 48.4 27.8 49.1 27.7 49.9C27.5 51.7 25.4 52.8 23.9 51.7C23.2 51.2 23.1 50.2 22.4 49.9C21.4 49.7 21.2 50.6 19.8 50.2C19.4 49.6 18.6 47.9 18.9 47.2C19.2 46.4 20.2 46 20.8 45.6C22 44.7 23.3 43.9 24.6 43C25.1 42.6 25.8 42.2 26.3 41.8C26.9 41.3 27.1 40.6 27.4 40C28.1 38.9 29.9 34.6 30.9 34.1C31.9 33.5 33.1 33.1 34.1 32.6C36.6 31.5 39.1 30.4 41.6 29.3C42.4 28.9 45.2 27.5 45.8 27.5C46.4 27.5 47 28.2 47.4 28.5C48.1 28.9 49 29.3 49.5 29.9C50 30.5 50.8 32.8 51.2 33.6C51.4 34.2 52.2 35.5 52.1 36.1C51.9 37.1 50.3 37 49.9 37.8ZM44.1 42.3C44.6 42.7 44.9 43.2 45.4 43.5C45.7 43.8 46.1 43.9 46.4 44.1L29.3 51.6C29.7 50.6 29.6 49.7 29.6 48.7L44.1 42.3Z"/>'
  },
  {
    id: "car-press-brake",
    name: "Shoe in a circle (press the brake pedal)",
    quiz: "Press the brake pedal",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["press brake pedal", "depress brake pedal", "shift lock indicator", "push start reminder", "foot on brake light"],
    looksLike: ["shoe in a circle", "foot in a circle", "shoe in brackets", "foot in a circle with brackets", "boot in a circle", "shoe pointing down", "foot pressing down"],
    meaning: "The car is asking you to press the brake pedal. On automatics with a start button, it won't start, or come out of Park, until you do. The same shoe in yellow usually means press the clutch instead (on manuals).",
    action: "Press the brake firmly (or the clutch all the way down), then press the start button or move the gear lever. If the light stays on while your foot is definitely on the brake, the brake light switch may have failed, which can also mean your brake lights aren't working. Get that checked soon.",
    tip: "VW and Audi show it inside the same brackets as the brake warning light, so it's easy to mistake for a brake fault at a glance. Some makers call it the shift lock indicator.",
    svg: `<circle cx="32" cy="32" r="18.9" stroke-width="4"/><path d="M13.87 14.49A25.2 25.2 0 0 0 13.87 49.51M50.13 14.49A25.2 25.2 0 0 1 50.13 49.51" stroke-width="4.6" stroke-linecap="butt"/><path d="M18.8 24.9 L21.1 22.2 L22.8 21.9 L26.9 24.1 L32 26.3 L37.1 27.6 L39.8 27.8 L40.8 28.7 L41.1 29.9 L42.3 31.7 L44.4 34.1 L46.4 36.2 L46.7 37 L43.3 41.3 L41.9 43 L41.5 43.8 L39.5 45.7 L37.1 43.4 L33.6 39.8 L34.6 38.7 L29 34.6Z" fill="currentColor" stroke-width=".6"/>`
  },
  {
    id: "car-auto-hold",
    name: "AUTO HOLD (brake hold)",
    quiz: "Brakes held automatically when stopped",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["AUTO HOLD", "brake hold", "automatic vehicle hold", "AVH", "hold assist"],
    looksLike: ["auto hold", "auto over hold", "a in a circle with hold", "brake hold", "hold light"],
    meaning: "Auto Hold is holding the brakes for you. When you stop at lights or in a queue, you can take your foot off the brake and the car stays put, then it lets go when you press the accelerator. White usually means it's switched on and ready; green means it's holding the car right now.",
    action: "Nothing to do. There's usually a button by the gear lever or the parking brake switch to turn it on or off. Most cars only allow it with your seatbelt on and the door shut.",
    tip: "Some cars show an A in a circle with brackets above the word HOLD, and Honda says BRAKE HOLD. Not to be confused with auto start-stop, which is an A inside a circular arrow and switches the engine off, not the brakes on.",
    svg: `<text x="32" y="29" font-size="17">AUTO</text><text x="32" y="49" font-size="17">HOLD</text>`
  },
  {
    id: "car-speed-limiter",
    name: "Speed limiter (LIM)",
    quiz: "Speed limiter on",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["LIM", "speed limit function", "adjustable speed limiter", "ASL", "intelligent speed assistance", "ISA"],
    looksLike: ["speedometer with lim", "dial with lim", "gauge with needle and letters", "speedo with letters underneath", "dial with lim underneath"],
    meaning: "The speed limiter is on. You set a top speed and the car won't go faster than that, however hard you press the accelerator. Handy for 20 mph zones and average speed cameras.",
    action: "Set or adjust the speed with the cruise control buttons on the steering wheel (often a LIM button or switch picks the limiter instead of cruise). Need a burst of speed to overtake? On most cars, pushing the pedal right to the floor overrides it.",
    tip: "Many newer cars also read speed limit signs and beep when you go over (intelligent speed assistance). You can usually turn that off for the journey, but it switches itself back on next time.",
    svg: `<path d="M10.4 47A18 18 0 1 1 35 22.4"/><path d="M8 38h4M13.3 25.3l2.8 2.8M26 20v4"/><path d="M26 38l-9.2-7.7"/><circle cx="26" cy="38" r="3" fill="currentColor"/><text x="46" y="27" font-size="15">LIM</text><path d="M44 35v3" stroke-width="3"/>`
  },
  {
    id: "car-auto-high-beam",
    name: "Automatic high beam (A in a headlight)",
    quiz: "Automatic high beam",
    category: "car",
    color: "green",
    urgency: "info",
    aka: ["auto high beam", "AHB", "high beam assist", "auto main beam", "smart beam"],
    looksLike: ["headlight with a", "a in a headlight", "lamp with letter a", "headlight with straight lines and a", "light with an a in it"],
    meaning: "Automatic high beam is switched on. A camera behind the windscreen switches between full beam and dipped headlights for you, dipping when it sees other cars' lights or street lights.",
    action: "Nothing to do. If it's dazzling people or dipping too late, switch it off and use the stalk yourself. A dirty or misted windscreen in front of the mirror confuses the camera.",
    tip: "With slanted lines instead of straight ones, an A in a headlight usually means automatic headlights instead.",
    svg: `<path d="M36 16c10 0 18 7 18 16s-8 16-18 16c-3 0-4-4-4-16s1-16 4-16z"/><path d="M24 20H10M24 28H10M24 36H10M24 44H10"/><text x="43.5" y="38" font-size="15">A</text>`
  },
  {
    id: "car-fuel-side-arrow",
    name: "Arrow next to the fuel pump",
    quiz: "Which side the fuel cap is on",
    category: "car",
    aka: ["fuel door indicator", "fuel filler side", "petrol cap side", "fuel tank side arrow"],
    looksLike: ["petrol pump with an arrow", "fuel pump with a triangle", "arrow next to petrol pump", "little triangle by the fuel gauge", "pump with arrow"],
    meaning: "The little triangle next to the fuel pump symbol on the fuel gauge points to the side of the car the fuel cap is on. That's all it does, and it's genuinely useful.",
    action: "Glance at it before you pull into the petrol station, especially in a hire car, and you'll get the right side of the pump first time.",
    tip: "The hose on the pump picture isn't a reliable clue: on plenty of cars it's on the wrong side. Trust the arrow.",
    // The ISO fuel pump with the side arrow.
    svg: '<g transform="matrix(0.8 0 0 0.8 -1.2 6.4)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.6 5.8C40.4 6 40.3 6 40.3 6.2C40.1 6.8 40.1 9.3 40.5 9.6C40.9 10 41.5 10.1 42 10.4C42.8 10.8 43.5 11.3 44.2 11.8C47.4 14.3 49 17 49.8 21C50.3 23.3 50.5 25.6 50.8 28C51.1 31 51.5 34 51.9 37C52.1 38.9 52.3 40.7 52.5 42.6C52.6 43.4 52.8 44.3 52.8 45.2C52.3 49.2 47.3 50.5 45 47.2C44 45.7 44.3 43.7 44.3 42C44.3 39.6 44.3 37.3 44.3 35C44.3 33.6 44.4 32.2 44.2 30.8C44 29.8 43.6 28.8 43 27.9C42.1 26.6 40.8 25.7 39.3 25.1C38.6 24.9 37.8 24.9 37.1 24.6C37 23.4 37.1 22 37.1 20.8C37.1 18.1 37.1 15.3 37.1 12.6C37.1 10.9 37.5 8.8 36.4 7.4C35 5.6 32.5 6.1 30.4 6.1C25.4 6.1 20.3 6.1 15.2 6.1C13 6.1 10.5 5.7 9.4 8.1C8.9 9.3 9.1 10.8 9.1 12.1C9.1 14.8 9.1 17.4 9.1 20.1C9.1 27.8 9.1 35.6 9.1 43.4C9.1 45.8 9.1 48.2 9.1 50.7C9.1 51.7 9.3 53.2 9.1 54.3L7.1 54.5C6.7 55 6.7 57.6 7 58.1C7.6 58.4 8.5 58.3 9.2 58.3C10.7 58.3 12.3 58.3 13.8 58.3C19.9 58.3 25.9 58.3 31.9 58.3C33.6 58.3 35.4 58.3 37.1 58.3C37.8 58.3 38.7 58.5 39.2 58C39.6 57.5 39.5 54.9 39.1 54.5L37.2 54.2L37.2 28.7C38.7 28.9 40 30.1 40.3 31.6C40.4 32.4 40.3 33.2 40.3 34C40.3 36.9 40.3 39.7 40.3 42.5C40.3 44.7 40.2 46.8 41.3 48.7C44.7 54.7 53.7 54.4 56.2 47.8C57.1 45.3 56.5 42.8 56.2 40.2C55.8 36.2 55.3 32.2 54.8 28.2C54.7 27.3 54.1 23.3 54.3 22.7C55.1 22.2 56.4 22 57 21.2C57.1 20.2 55.3 17.4 54.7 16.5C52.2 12.8 48.8 9.7 44.9 7.5C44 7.1 41.4 5.7 40.6 5.8ZM33.1 10.1L33.1 24.6L13.1 24.6L13.1 10.1L33.1 10.1ZM33.1 28.7L33.1 54.3L13.2 54.3L13.1 28.7L33.1 28.7Z"/></g><path d="M50 25l8 7-8 7z" fill="currentColor" stroke="none"/>'
  },

  // ───────────────────────── CAR BUTTONS / CONTROLS ─────────────────────────
  {
    id: "carcontrols-recirculation",
    name: "Air recirculation",
    category: "carcontrols",
    aka: ["recirc", "recycled air", "inside air"],
    looksLike: ["car with a u-turn arrow", "car with circular arrow inside", "car with arrow going round", "car with loop"],
    meaning: "The ventilation recycles the air already inside the car instead of pulling in fresh air from outside. The arrow going round in circles is, for once, exactly what it looks like.",
    action: "Great for keeping out smells and fumes (tunnels, traffic, that farm) or cooling down fast with the air-con. Don't leave it on for long: the windows fog up and the air gets stuffy (and CO₂ builds up, making you drowsy).",
    // Traced from the Toyota Prius manual.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.1 39.7C10.8 40.9 11 41.6 12.3 42.5C13.9 43.7 16.6 43.6 18.3 42.4C18.9 41.9 19.4 41.2 19.9 40.5L43.3 40.4C43.8 41 44.2 41.6 44.8 42.1C46.5 43.5 49.4 43.7 51.2 42.3C52 41.7 52.5 41 53 40.1C53.1 39.8 53.2 39.6 53.5 39.4C55 38.7 58 39.2 58.9 37.5C59.2 37 59.3 35.5 59.3 34.9C59.3 33.3 59.5 29.2 58.8 27.9C58.6 27.6 58.2 27.4 58 27.2C57.3 26.9 54.5 26.7 53.6 26.6C53 26.5 52.4 26.6 51.8 26.3C50.9 25.9 50.1 25.1 49.3 24.5C47.8 23.4 46.1 22.4 44.4 21.7C43.9 21.4 43.2 21.4 42.7 21.3C41.8 21.2 41 21 40.2 20.9C39.4 20.8 38.5 20.9 37.7 20.9C36.9 20.9 36.2 20.7 35.4 20.7C34.8 20.7 34.3 20.8 33.7 20.9C31.6 20.9 29.5 21.2 27.4 22C26.2 22.4 25 23 24.1 23.9C23.4 24.5 22.8 25.3 22.1 25.9C21 26.8 19.9 27.4 18.6 27.8C16.2 28.8 13.7 29.2 11.2 29.7C9.7 29.9 8.2 30 7 31C5.5 32.2 5.2 34.2 4.8 36C4.6 36.7 4.5 38 4.9 38.6C5.8 39.8 8.8 39 10.1 39.7ZM56.6 29.4C57 30.3 57 35.2 56.7 36.2C55.5 36.7 54.1 36.8 52.8 37.1C52.4 37.2 52 37.2 51.6 37.4C51.1 37.8 51.1 38.6 50.8 39.1C50.4 40 49.5 40.7 48.5 40.8C47.3 40.9 46.3 40.3 45.6 39.4C45.3 38.9 45.1 38 44.4 38C40.6 37.8 36.7 38 33 38C28.3 38 23.7 37.8 19 38C18.2 38 18.1 39 17.7 39.5C17 40.3 16.1 41 15 40.9C13.8 40.9 12.8 39.9 12.3 38.9C12.1 38.4 12.2 37.8 11.7 37.5C11.2 37.1 8.1 37 7.2 36.8C6.8 35.6 8 33 9.1 32.5C9.7 32.2 10.4 32.1 11 31.9C13.1 31.3 15.4 31 17.5 30.6C18.2 30.5 19 30.5 19.7 30.3C20.8 30 21.6 28.9 22.5 28.2C24.6 26.5 26.7 24.6 29.4 23.8C31.5 23.2 33.7 23.3 35.9 23.2C36.7 23.1 37.7 23.1 38.5 23.2C38.9 23.2 39.2 23.3 39.6 23.3C41 23.4 42.5 23.5 43.8 24.1C45.7 24.9 47.5 26.2 49.2 27.4C49.8 27.8 50.3 28.4 50.9 28.7C51.4 28.9 51.9 28.8 52.4 28.9C53.8 29 55.2 29.1 56.6 29.4ZM34.7 35.7C34.9 36.1 34.6 36.7 35.1 37.1C35.7 37.3 36.4 36.8 37 36.6C38.6 36.1 40.2 35.5 41.8 34.9C42.3 34.7 43.5 34.6 43.6 33.9C43.4 33.2 42.4 33.1 41.8 32.9C40.2 32.2 38.6 31.7 37 31.1C36.4 30.8 35.7 30.4 35 30.6C34.7 31 34.9 31.5 34.7 31.9C33.6 32.2 30.9 32 30.8 30.5C30.7 30.1 30.9 29.8 31.1 29.5C31.5 29.1 32.1 28.9 32.6 28.7C33.3 28.6 33.9 28.7 34.6 28.7C35.9 28.7 37.2 28.7 38.6 28.7C39.3 28.7 40.4 28.9 40.9 28.5C41.2 27.9 41.2 25.8 40.9 25.3C40.2 24.9 38.4 25.1 37.5 25.1C34.5 25.1 31.4 24.5 28.8 26.6C25.4 29.4 26.8 33.5 30.6 35.1C31.9 35.6 33.3 35.5 34.7 35.7Z"/>'
  },
  {
    id: "carcontrols-fresh-air",
    name: "Fresh air intake",
    category: "carcontrols",
    aka: ["outside air", "air intake", "fresh air mode"],
    looksLike: ["car with arrow going in", "car with an arrow from outside", "arrow into a car"],
    meaning: "The ventilation is pulling fresh air in from outside (the opposite of recirculation). The giveaway is the arrow coming in from outside the car.",
    action: "Use this most of the time: it keeps the windows clear and the air fresh.",
    svg: `<path d="M6 52V44c0-2 1-3 3-3.5l6-1.5 8-10h17l9 10 7 1.5c2 .5 2 1.5 2 3.5v8z"/><path d="M4 10h17l11 22"/><path d="M26.7 29.2L32 32l.9-6"/>`
  },
  {
    id: "carcontrols-front-demist",
    name: "Windscreen demister",
    category: "carcontrols",
    aka: ["front defrost", "windshield defroster", "front demist", "max defrost"],
    looksLike: ["windscreen with wavy arrows", "curved trapezoid with three squiggly arrows", "shield with wavy lines", "bucket with steam"],
    meaning: "Blasts warm, dry air at the inside of the windscreen to clear fog or frost. Those wavy arrows are the warm air, not steam off a bucket.",
    action: "Press it on cold or rainy mornings. Switching on the A/C at the same time clears fog faster, because it dries the air.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M5.9 19C5.8 19.8 8.2 23.5 8.7 24.4C11.3 28.8 13.8 33.2 16.3 37.6C17.1 38.9 17.8 40.1 18.6 41.4C18.9 41.9 19.1 42.7 19.7 42.9L23.5 41.1C24.7 43.5 24.1 46.4 23.1 48.8C22.8 49.5 22.3 50.2 21.9 50.8C21.7 51.2 21.4 51.5 21.2 51.8C21.2 52 21.2 52.1 21.2 52.3C21.4 52.4 21.4 52.5 21.6 52.6C22.2 52.7 24.7 52.7 25.1 52.4C25.5 52 25.8 51.3 26 50.8C27.1 48.6 27.9 46.1 27.7 43.6C27.6 42.8 27.5 42.1 27.3 41.3C27.2 40.9 26.9 40.4 26.9 40C28.1 39.6 29.7 39.3 30.9 39.4C31.3 39.8 31.4 40.5 31.6 41C32.5 43.7 32.5 46 31.3 48.6C31 49.3 30.6 49.9 30.2 50.6C29.9 51 29.5 51.4 29.4 51.9C29.3 52.1 29.4 52.2 29.4 52.4C29.8 52.7 32.7 52.7 33.1 52.4C33.7 52 34.1 51 34.3 50.5C35.6 47.8 36.2 44.9 35.6 42C35.4 41.1 35.1 40.4 34.9 39.5C36.1 39.6 38.6 40.2 39.6 40.8C41 43.2 40.4 46.4 39.4 48.8C39.1 49.4 38.6 50.1 38.2 50.7C38 51.1 37.6 51.4 37.5 51.8C37.5 52 37.5 52.1 37.5 52.3C37.7 52.4 37.7 52.5 37.9 52.6C38.4 52.7 40.7 52.7 41.1 52.5C41.5 52.3 41.6 52 41.8 51.7C43.4 48.9 44.1 46 43.9 42.9L44.5 42.8C45.2 42.2 47 38.6 47.6 37.6C50 33.3 52.5 29.1 55 24.8C55.8 23.5 56.5 22.1 57.3 20.8C57.6 20.2 58.2 19.6 58.1 18.9C57.6 18.2 56.4 17.8 55.6 17.4C53.5 16.2 51.2 15.2 48.9 14.4C38.6 10.6 27.5 10.5 17 13.7C14.2 14.6 11.4 15.8 8.8 17.2C8 17.5 6.2 18.3 5.9 19ZM53.5 20.3L43.1 38.3C42.3 38.2 42.2 37.3 42 36.6C41.4 35 41 33.1 41.3 31.3C41.8 31.2 42.2 31.4 42.7 31C42.9 30.4 42.5 29.8 42.3 29.2C41.7 27.7 41.2 26.2 40.6 24.7C40.4 24.1 40.3 23.1 39.6 22.9C39 23 38.8 24 38.6 24.6C38 26.1 37.5 27.6 37 29.1C36.7 29.7 36.3 30.4 36.5 31C36.9 31.3 37.2 31.3 37.6 31.3C37.9 31.9 37.7 33 37.7 33.7C37.8 34.6 38 35.6 38.2 36.5L33.6 35.8C33.1 34.4 33 32.8 33.2 31.4C33.6 31.2 34.1 31.4 34.5 31C34.8 30.4 34.3 29.7 34.1 29.1C33.5 27.6 33 26.1 32.4 24.6C32.2 24 32.1 23 31.4 22.9C30.8 23.1 30.6 24.1 30.4 24.7C29.9 26.2 29.3 27.7 28.8 29.2C28.6 29.8 28.2 30.4 28.4 31C28.7 31.4 29.1 31.2 29.6 31.4L29.9 35.9L25.7 36.6C25.1 35.5 24.7 32.4 25.1 31.3C25.5 31.3 25.9 31.4 26.3 31.1C26.6 30.5 26.2 29.8 26 29.2C25.4 27.7 24.8 26.1 24.3 24.5C24.1 23.9 23.9 22.9 23.2 22.9C22.7 23.2 22.5 24 22.3 24.5C21.8 26 21.2 27.5 20.7 29C20.5 29.6 19.9 30.5 20.3 31.1L21.4 31.3C21.6 32.3 21.4 33.3 21.5 34.3C21.6 35.5 22.1 36.6 22.2 37.7L21 38.3L10.5 20.3C11.9 19.2 16.4 17.6 18.2 17.1C26.6 14.5 35.6 14.2 44.1 16.6C46.4 17.2 48.7 17.9 50.9 19C51.7 19.3 52.9 19.7 53.5 20.3Z"/>'
  },
  {
    id: "carcontrols-rear-demist",
    name: "Rear window heater",
    category: "carcontrols",
    aka: ["rear defrost", "rear demister", "heated rear window", "rear defogger"],
    looksLike: ["rectangle with wavy arrows", "box with three squiggly arrows", "square with wavy lines going up"],
    meaning: "Switches on the thin heating wires in the rear window to melt frost and clear fog. It often heats the door mirrors too. So that's what those faint lines are for.",
    action: "Press to switch it on. Most cars turn it off automatically after 10–15 minutes.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M24.1 42.4C25.2 44.3 23.9 48 22.9 49.8C22.5 50.5 21.2 51.9 21.4 52.6C21.5 52.8 21.6 52.8 21.8 52.9C22.4 53 24.8 53 25.2 52.8C25.6 52.6 25.8 52.1 25.9 51.8C27.3 49.5 27.9 47.1 28.1 44.4C28.2 43.8 28 43.1 28 42.4L32.6 42.4C33.5 44.7 32.5 47.5 31.5 49.5C31.1 50.3 29.8 51.8 29.8 52.6C29.9 52.7 30 52.8 30.2 52.9C30.6 53 33.3 53 33.6 52.8C34 52.7 34.1 52.3 34.3 52C35.5 49.9 36.5 47.5 36.6 45C36.6 44.1 36.4 43.2 36.5 42.4L41 42.4C41.2 42.7 41.3 43.2 41.3 43.6C41.5 45.9 40.7 48.2 39.6 50.1C39.2 50.8 38.2 51.8 38.3 52.6C38.4 52.7 38.5 52.8 38.7 52.9C39.1 53 41.6 53 42 52.8C42.4 52.7 42.6 52.3 42.8 52C44.5 48.8 45.2 46 44.9 42.4C45.5 42.1 47 42.3 47.7 42.3C50.7 42.3 54 42.9 56.5 40.8C58.5 39.1 58.3 36.5 58.3 34C58.3 29.1 58.3 24.1 58.3 19.2C58.3 16.3 58.4 13.7 55.6 11.9C55 11.6 54.3 11.3 53.6 11.2C52.5 11 51.2 11.1 50 11.1C47.9 11.1 45.7 11.1 43.5 11.1C35.9 11.1 28.3 11.1 20.7 11.1C18.6 11.1 16.4 11.1 14.2 11.1C12.8 11.1 11.2 10.9 9.8 11.3C7.7 11.9 6.1 13.7 5.8 15.9C5.5 17.5 5.7 20.1 5.7 21.9C5.7 25.7 5.7 29.6 5.7 33.4C5.7 36 5.3 38.9 7.5 40.8C9.3 42.4 11.3 42.3 13.6 42.3C16 42.3 18.4 42.3 20.8 42.3C21.9 42.3 23.1 42.2 24.1 42.4ZM43.8 38.6C42.7 36.5 41.8 33 42.2 30.7C42.7 30.6 43.2 30.7 43.6 30.4C43.9 29.8 43.4 29.1 43.2 28.5C42.6 26.9 42.1 25.3 41.5 23.6C41.2 23.1 41.1 22 40.5 21.9C39.8 22 39.6 23.1 39.4 23.8C38.8 25.2 38.3 26.8 37.8 28.3C37.5 28.9 37.1 29.6 37.2 30.3C37.6 30.8 38 30.5 38.5 30.7C38.6 31.2 38.5 31.8 38.5 32.3C38.5 33.2 38.6 34.2 38.8 35.1C39 36.1 39.8 37.9 39.8 38.7L35.4 38.6C34.3 36.8 33.4 32.9 33.8 30.7C34.3 30.5 34.8 30.8 35.2 30.3C35.4 29.7 34.9 28.9 34.7 28.3C34.1 26.8 33.6 25.2 33 23.7C32.8 23.1 32.7 22.1 32 21.9C31.4 22 31.2 23 31 23.6C30.4 25.2 29.8 26.9 29.2 28.5C29 29 28.5 29.8 28.8 30.4C29.2 30.7 29.6 30.6 30.1 30.7C30.1 32.2 30 33.7 30.4 35.2C30.6 36.3 31.3 37.7 31.4 38.7L26.9 38.6C26.1 37.3 24.7 32 25.4 30.7C25.9 30.6 26.4 30.7 26.8 30.4C27 29.7 26.5 28.9 26.3 28.3C25.7 26.8 25.1 25.2 24.6 23.7C24.4 23.1 24.2 22 23.5 21.9C22.9 22.1 22.7 23.1 22.5 23.7C21.9 25.3 21.3 26.9 20.8 28.4C20.6 29 20.1 29.8 20.4 30.4C20.7 30.7 21.1 30.6 21.6 30.7C21.8 31.4 21.6 33.3 21.8 34.4C22 35.9 22.6 37.2 22.9 38.6C21.9 38.8 20.8 38.7 19.8 38.7C17.7 38.7 15.5 38.7 13.3 38.7C12.2 38.7 10.7 38.9 9.8 37.9C9 36.9 9.3 34.2 9.3 32.9C9.3 28.6 9.3 24.2 9.3 19.9C9.3 18.3 8.8 15.7 10.6 14.9C11.5 14.5 12.8 14.7 13.8 14.7C16.1 14.7 18.3 14.7 20.6 14.7C28.4 14.7 36.3 14.7 44.2 14.7C46.6 14.7 48.9 14.7 51.3 14.7C52.4 14.7 53.6 14.6 54.3 15.7C54.8 16.5 54.6 17.7 54.6 18.6C54.6 20.7 54.6 22.8 54.6 24.9C54.6 28.1 54.6 31.3 54.6 34.5C54.6 35.8 54.9 37.4 53.8 38.3C52.8 39 49 38.7 47.7 38.7C46.8 38.7 44.5 38.9 43.8 38.6Z"/>'
  },
  {
    id: "carcontrols-air-conditioning",
    name: "Air conditioning (snowflake button)",
    category: "carcontrols",
    aka: ["A/C", "AC", "aircon", "air con"],
    looksLike: ["snowflake", "star", "asterisk", "ice crystal"],
    meaning: "On the climate-control panel, the snowflake turns the air conditioning compressor on or off.",
    action: "Use it to cool the car, and in winter too. It sounds backwards, but A/C dries the air, so it clears foggy windows much faster.",
    tip: "The same snowflake glowing amber on the dashboard is the frost/ice warning instead.",
    svg: `<path d="M32 32V9M26 14l6 6 6-6"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(60 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(120 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(180 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(240 32 32)"/><path d="M32 32V9M26 14l6 6 6-6" transform="rotate(300 32 32)"/>`
  },
  {
    id: "carcontrols-airflow",
    name: "Air flow direction",
    category: "carcontrols",
    aka: ["vent mode", "air distribution", "face and feet vents"],
    looksLike: ["person sitting with arrows", "seated person with arrows to face and feet", "man in a chair with arrows"],
    meaning: "Chooses where the air comes out. The arrows point at the vents in use: face, feet or both. A version with a windscreen line sends air to the windscreen too. The little seated person is you, looking admirably relaxed.",
    action: "Feet in winter (heat rises), face in summer, windscreen + feet when the windows fog up.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M32.4 10.5C31.8 10.9 32.1 12.5 32.1 13.2C31.2 13.5 27.6 13.3 26.4 13.3C25.8 13.3 24.9 13.1 24.3 13.5C23.9 14.2 24.2 17.6 24.2 18.6C24.2 19.2 24 19.8 24.4 20.2C25.2 20.6 29.4 20.4 30.5 20.4C31 20.4 31.6 20.3 32.1 20.4C32.1 21.2 31.8 22.5 32.3 23.1C33 23.3 33.8 22.4 34.3 21.9C35.2 21 39.2 17.8 39.6 16.9C39.6 16.2 38.7 15.7 38.2 15.3C36.8 14 35.4 12.8 34.1 11.6C33.6 11.2 33.1 10.4 32.4 10.5ZM52.6 23.1C51.5 23.2 50.5 23.5 49.7 24.3C48.3 25.5 45.9 31.1 44.8 33.1C44.4 33.9 43.8 35.6 43 36.1C42 36.8 40.4 36 39.4 35.7C37.7 35.2 36.1 34.8 34.4 34.4C33.2 34 31.9 33.5 30.7 33.5C28.1 33.5 27.1 35.2 25.7 37.1C23.7 39.9 21.7 42.8 19.8 45.6C19 46.7 17.3 48.7 17 50C16.5 52.8 19.7 54.8 22 53.2C23 52.5 23.6 51.2 24.3 50.2C25.8 48.1 27.2 46.1 28.6 44.1C29.1 43.4 30.2 41.5 30.9 41.2C31.7 40.8 34 41.6 34.8 41.9C38.2 42.8 41.6 43.8 45 44.6C46.7 45 48.6 44.5 49.7 43.2C50.6 42.1 51 40.8 51.7 39.6C52.9 37.4 54 35.2 55.1 33C55.8 31.6 57 29.8 57.2 28.3C57.5 25.7 55.4 22.9 52.6 23.1ZM9 29.1C8.6 29.6 8.8 30.6 8.8 31.3C8.8 33 9 34.9 8.8 36.7C8 37 6.7 36.4 6 37C5.9 37.8 6.8 38.4 7.2 38.9C8.4 40.3 9.7 41.6 10.9 43C11.3 43.5 11.8 44.2 12.4 44.3C13.1 44 13.6 43.2 14.1 42.7C15.2 41.5 16.4 40.2 17.5 38.9C17.9 38.4 18.8 37.8 18.7 37.1C18 36.4 16.7 37.1 15.9 36.7C15.8 34.9 15.9 33.1 15.9 31.3C15.9 30.6 16.1 29.6 15.7 29C15 28.6 11.7 28.9 10.7 28.9C10.1 28.9 9.5 28.8 9 29.1Z"/><g fill="currentColor" stroke="none"><circle cx="53.27" cy="16.24" r="5.02"/></g>'
  },
  {
    id: "carcontrols-heated-seat",
    name: "Heated seat",
    category: "carcontrols",
    aka: ["seat heater", "seat warmer"],
    looksLike: ["seat with wavy arrows going up", "chair with wavy lines", "seat with squiggles", "seat with steam"],
    meaning: "Turns on the seat heater, the best button in the car on a cold morning. Pressing it repeatedly usually cycles through heat levels (shown by little lights).",
    action: "Enjoy. A version with a fan or blue arrows is seat ventilation or cooling instead, which is a chilly surprise in winter.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M38.6 34.7L37.1 34.6C36.8 33.7 36.5 30.4 36.9 29.6L38.3 29.4C38.8 28.8 38.1 27.8 37.9 27.2C37.3 25.5 36.6 23.7 36 22C35.8 21.4 35.6 20.3 35 20C34.3 20.2 34.1 21.4 33.9 22C33.2 23.7 32.6 25.4 32 27.2C31.8 27.8 31.2 28.7 31.4 29.3C31.8 29.7 32.3 29.6 32.8 29.6L33 34.4L28.6 34.2C28.2 33.2 28.2 30.7 28.4 29.7C28.9 29.6 29.5 29.7 29.9 29.4C30.3 28.8 29.7 27.9 29.5 27.2C28.8 25.5 28.2 23.8 27.6 22.1C27.4 21.4 27.2 20.3 26.5 20C25.8 20.2 25.6 21.4 25.4 22.1C24.8 23.8 24.1 25.5 23.5 27.2C23.3 27.8 22.7 28.8 23.1 29.4C23.5 29.7 23.9 29.6 24.4 29.7L24.5 34L20.1 33.7C19.8 32.8 19.8 30.6 20 29.7L21.5 29.4C21.8 28.8 21.3 27.9 21.1 27.3C20.4 25.5 19.8 23.7 19.1 22C18.9 21.4 18.7 20.1 18 20.1C17.4 20.4 17.2 21.4 17 22C16.4 23.8 15.7 25.5 15.1 27.2C14.8 27.8 14.3 28.7 14.6 29.4C15 29.7 15.5 29.6 15.9 29.7L16 33.5C15.6 33.6 15.2 33.5 14.8 33.5C13.6 33.5 12.4 33.4 11.3 33.3C9.7 33.2 7.8 33 6.7 34.3C5.8 35.4 5.4 36.7 5.9 38C6.5 39.5 7.6 41.5 8.4 43C9.4 44.8 10.2 46.7 11.2 48.5C11.7 49.5 13 52.5 13.6 53.1C14.3 53.8 16.5 53 17.4 53.4C17.1 54.1 15.8 56.2 15.6 56.7C15.6 56.9 15.7 57 15.7 57.1C16.2 57.5 16.9 57.4 17.4 57.4C18.1 57.4 19.1 57.5 19.7 57.3C20.6 57 21.3 54.2 21.9 53.4L25.8 53.4C25.8 54.5 23.9 55.9 24.1 57C24.5 57.6 25.4 57.4 26 57.4C26.6 57.4 27.6 57.5 28.2 57.3C29 57 29.8 54.2 30.3 53.4L34.3 53.4C34.1 54.4 32.4 56.2 32.5 57.1C32.9 57.6 33.8 57.4 34.3 57.4C34.9 57.4 36.2 57.5 36.7 57.3C37.6 56.8 38.1 54.2 38.8 53.4C40 53.1 42.8 53.3 44.3 53.3C44.8 53.3 45.9 53.5 46.3 53.1C46.7 52.6 46.9 51 47.1 50.4C47.7 48 48.3 45.7 49 43.4C51.2 35.3 53.4 27.1 55.5 18.9C56.1 16.5 56.8 14 57.5 11.5C57.7 10.8 58.3 9.2 58.1 8.5C57.5 8 55.9 7.8 55.1 7.5C52.6 6.8 49.6 5.6 47.9 8.4C47.5 9.1 47.3 9.8 47 10.5C46.5 12.1 46 13.7 45.4 15.3C43.7 19.8 42.2 24.4 40.6 28.9C40 30.6 39.4 33.1 38.6 34.7ZM51.2 10.6L53.4 11.2L43.3 49.3L39.7 49.3C40 46.7 39.9 44.2 39.1 41.7C38.9 40.7 38.5 39.7 38.2 38.7C39.2 38.5 40.4 39.1 41.3 38.6C41.9 38 43.6 32.6 44 31.4C45.6 26.6 47.2 21.9 48.9 17.2C49.5 15.6 50 14 50.5 12.4C50.8 11.8 50.9 11.2 51.2 10.6ZM9.9 37.2L16.7 37.6C17.2 38.2 17.6 39.9 17.8 40.8C18.6 43.5 19.7 46.5 18.8 49.3L16.2 49.4L9.9 37.2ZM21.1 37.8L25.4 38.1C25.7 39 26 39.9 26.3 40.8C27.1 43.6 28 46.4 27.2 49.3L22.9 49.3C23.1 47 23 44.9 22.5 42.6C22.1 41.1 21.3 39.3 21.1 37.8ZM29.7 38.2L33.9 38.5C34.4 39.1 34.5 40.3 34.8 41.1C35.6 43.6 36.4 46.6 35.7 49.3L31.3 49.3C31.5 46.7 31.4 44.2 30.7 41.7C30.4 40.6 29.9 39.4 29.7 38.2Z"/>'
  },
  {
    id: "carcontrols-heated-steering-wheel",
    name: "Heated steering wheel",
    category: "carcontrols",
    aka: ["steering wheel heater"],
    looksLike: ["steering wheel with wavy lines", "wheel with steam", "steering wheel with squiggles"],
    meaning: "Turns on the heater built into the rim of the steering wheel.",
    action: "Press once to switch it on. It usually switches itself off after a while.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M34.5 6.1C33.9 6.4 33.7 7.4 33.5 8C32.8 9.6 32.2 11.1 31.6 12.7C31.3 13.3 30.7 14.2 30.9 14.9C31.3 15.3 31.9 15.1 32.4 15.2C32.5 15.6 32.4 16 32.4 16.5C32.4 17.5 32.5 18.5 32.8 19.5C33.5 21.8 35.3 24 35.1 26.4C35 28.1 34 29.6 33.2 30.9C32.9 31.5 32.2 32.3 32.4 33C32.9 33.4 33.7 33.2 34.3 33.2C34.8 33.2 35.5 33.4 36 33.1C36.4 32.9 36.7 32.1 37 31.7C37.9 30.2 38.6 28.6 38.7 26.9C39.1 22.6 35.1 18.7 36.2 15.2C36.9 15 37.6 15.4 38.2 15C38.5 14.4 38 13.5 37.7 12.9C37.1 11.3 36.4 9.6 35.7 7.9C35.5 7.3 35.2 6.1 34.5 6.1ZM43.3 6.1C42.8 6.5 42.6 7.4 42.3 8.1C41.7 9.7 41 11.3 40.4 12.9C40.1 13.5 39.5 14.4 39.9 15L41.3 15.2C41.4 15.6 41.2 16.1 41.2 16.5C41.2 17.7 41.4 18.9 41.9 20C42.5 21.9 44.1 24.2 44 26.3C43.9 28 42.8 29.6 42 31C41.7 31.6 41 32.3 41.3 33C41.8 33.4 42.6 33.2 43.2 33.2C43.7 33.2 44.4 33.4 44.8 33.1C45.3 32.9 45.5 32.2 45.8 31.8C46.6 30.3 47.4 28.7 47.6 27C47.7 25.6 47.5 24.2 47 22.8C46.1 20.5 44.1 17.8 45.1 15.2C45.8 15 46.6 15.4 47.1 14.9C47.3 14.2 46.8 13.4 46.6 12.8C45.9 11.2 45.2 9.6 44.6 7.9C44.4 7.3 44.1 6.1 43.3 6.1ZM48.7 14.9C49.1 15.3 49.6 15.1 50.1 15.2C50.3 15.6 50.1 16.1 50.1 16.6C50.1 17.6 50.2 18.5 50.5 19.4C51.2 21.6 53.1 24.1 52.9 26.4C52.7 28.1 51.8 29.5 50.9 30.9C50.6 31.5 49.9 32.3 50.2 33C50.6 33.4 51.4 33.2 52 33.2C52.5 33.2 53.2 33.4 53.7 33.1C54.2 32.9 54.5 32.1 54.7 31.7C55.6 30.1 56.3 28.5 56.5 26.7C56.9 22.7 52.8 18.7 54 15.2C54.6 15 55.5 15.4 56 14.9C56.2 14.2 55.6 13.4 55.4 12.7C54.8 11.1 54.1 9.5 53.5 8C53.2 7.3 53 6.4 52.5 6.1C51.7 6.1 51.5 7.3 51.2 8C50.6 9.6 49.9 11.2 49.2 12.8C49 13.4 48.5 14.2 48.7 14.9ZM46.7 35.8C46.2 35.6 45.5 35.7 45 36C44.7 36.7 45 37.9 45 38.6C45 40.2 44.8 42 44.2 43.5L32.8 38.8C32.7 38.4 32.7 38.1 32.7 37.7C32.6 36.7 32.1 35.7 31.4 34.9C29.1 32.2 24.8 32.5 22.8 35.4C22.3 36 22 36.9 21.9 37.7C21.9 38.1 21.9 38.4 21.8 38.8L10.4 43.5C9.7 42.1 9.5 39.5 9.6 37.9C9.7 36.8 9.8 35.6 10 34.5C11.3 28.7 15.7 23.9 21.2 21.8C22.9 21.2 24.8 20.8 26.6 20.8C27.4 20.8 29.3 21.1 29.8 20.6C30.1 20.2 30.2 19.5 29.9 19.1C29.2 18.4 26.8 18.6 25.8 18.7C21.2 19.2 17.3 20.9 13.8 23.9C5.7 31 5.5 44.5 12.9 52.1C20.5 59.8 33.2 60.6 41 52.8C44.3 49.4 46.5 45.2 47 40.4C47.1 39.4 47.4 36.6 46.7 35.8ZM23.2 42.2C25.2 43.7 27.1 44.5 29.5 43.4C30.2 43.1 30.8 42.5 31.4 42.2L42.8 46.9C42.1 48.5 40.9 49.9 39.6 51.1C32.9 57.8 21.5 57.7 14.8 51C13.7 49.9 12.5 48.5 11.8 47L23.2 42.2Z"/>'
  },
  {
    id: "carcontrols-hazard",
    name: "Hazard warning lights",
    category: "carcontrols",
    aka: ["hazards", "flashers", "emergency lights"],
    looksLike: ["triangle in a triangle", "red triangle", "double triangle", "warning triangle"],
    meaning: "Flashes all the indicators at once to tell other drivers you've stopped or there's a hazard ahead.",
    action: "Use them when you've broken down, when you're stopped somewhere unsafe, or (in some countries) to warn of a sudden queue on a motorway. They're not a 'park anywhere' card, however often they get used as one.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M32 25l11 19H21z"/>`
  },
  {
    id: "carcontrols-auto-wipers",
    name: "Automatic wipers (AUTO on the wiper stalk)",
    quiz: "Automatic wipers",
    category: "carcontrols",
    aka: ["rain sensing wipers", "auto wipers", "rain sensor", "AUTO wipe"],
    looksLike: ["windscreen with an a", "wiper with a", "windscreen with letter a", "wiper and auto", "windscreen with wiper and a"],
    meaning: "In this position the wipers run themselves: a rain sensor behind the windscreen (by the mirror) speeds them up or slows them down as the rain changes.",
    action: "Move the wiper stalk to AUTO (often the first click). The ring or wheel on the stalk sets how sensitive they are. Switch it off before a car wash, or the wipers may start halfway through.",
    // ISO 7000-0086 wiper with the A for automatic.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.8 20.8C6.8 21.6 9.1 25.1 9.6 25.9C12 30 14.3 34.1 16.7 38.2C17.2 39.1 19.2 43 19.9 43.3C20.7 43.3 21.5 42.6 22.2 42.2C23.6 41.5 25.4 40.7 27 40.5L29.3 45.6C29 46.3 28.8 46.9 28.9 47.7C29.2 51.6 35.1 51.4 35.1 47.4C35.1 46.6 34.9 45.8 34.3 45.2C33.8 44.7 33.1 44.5 32.5 44.2L30.6 39.9C33.6 39.6 37 40.2 39.8 41.3C40.6 41.6 43.6 43.3 44.1 43.3C44.8 43 46.8 39.1 47.3 38.2C49.7 34.1 52 30 54.4 25.9C54.9 25 57.2 21.5 57.1 20.8C56.8 20.1 55.7 19.7 55 19.3C52.9 18.1 50.6 17.1 48.4 16.3C38.4 12.7 27.2 12.4 17.2 15.8C14.4 16.7 11.8 17.8 9.2 19.1C8.6 19.5 7.1 20.1 6.8 20.8ZM52.9 21.9L43 39.1C42.2 38.9 41.5 38.5 40.9 38.3C39.5 37.7 38 37.3 36.6 37C34.7 36.7 32.7 36.5 30.9 36.6C30.3 36.7 29.7 36.8 29.2 36.8L20.9 18.1C22 17.4 27 16.9 28.6 16.8C34.6 16.3 41 17.1 46.7 19.1C48.5 19.8 51.3 20.8 52.9 21.9ZM17.5 19.1L25.7 37.4L21.1 39.1L11.1 21.9C11.7 21.3 16.5 19.3 17.5 19.1Z"/><text x="41" y="40" font-size="12">A</text>'
  },
  {
    id: "carcontrols-intermittent-wipers",
    name: "Intermittent wipers (wiper with a dashed line)",
    quiz: "Intermittent wipers",
    category: "carcontrols",
    aka: ["INT", "intermittent wipe", "wiper delay", "occasional wipe"],
    looksLike: ["wiper with a dashed line above", "windscreen wiper with dashes", "wiper and dotted line", "dashes over a wiper", "broken line above wiper"],
    meaning: "The wipers make one sweep, pause, then sweep again, for drizzle that isn't worth the full-time wipers. The dashed line is the pause.",
    action: "Select INT (or the dashed-line symbol) on the wiper stalk, and use the ring or wheel on the stalk to set the gap between wipes. Pulling the stalk towards you usually squirts washer fluid.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.1 10.7C9.7 11.2 9.7 13.2 10.1 13.7C10.8 14.1 11.9 13.9 12.7 13.9C14.6 13.9 16.5 13.9 18.4 13.9C19.1 13.9 20.2 14.1 20.8 13.7C21.2 13.2 21.2 11.5 21 10.9C20.4 10.3 19.1 10.6 18.4 10.6C16.5 10.6 14.6 10.6 12.6 10.6C11.9 10.6 10.8 10.4 10.1 10.7ZM26.7 10.7C26.2 11.2 26.2 13.2 26.6 13.7C27.3 14.1 28.4 13.9 29.2 13.9C31.1 13.9 33 13.9 34.9 13.9C35.6 13.9 36.7 14.1 37.4 13.7C37.7 13.2 37.7 11.5 37.5 10.9C37 10.3 35.7 10.6 34.9 10.6C33 10.6 31.1 10.6 29.2 10.6C28.4 10.6 27.3 10.4 26.7 10.7ZM43.2 10.7C42.8 11.2 42.8 13.2 43.1 13.7C43.8 14.1 45 13.9 45.8 13.9C47.6 13.9 49.5 13.9 51.4 13.9C52.2 13.9 53.2 14.1 53.9 13.7C54.3 13.3 54.2 11.5 54 10.9C53.5 10.3 52.2 10.6 51.5 10.6C49.5 10.6 47.6 10.6 45.7 10.6C44.9 10.6 43.9 10.4 43.2 10.7ZM5.8 23.6C5.9 24.3 8.5 28 9 28.9C11.7 33 14.3 37.1 17 41.2C17.5 42.1 19.5 45.5 20.2 45.9C21 45.9 21.7 45.2 22.4 44.9C23.8 44.2 25.3 43.5 26.9 43.2L29.3 48.4C29.1 49.2 28.7 49.9 28.9 50.8C29.4 54.5 35.1 54.1 35.1 50.3C35.1 49.6 34.9 48.9 34.5 48.3C33.9 47.6 33.1 47.4 32.4 47L30.4 42.7C32.8 42.1 37.6 43.1 40 44.1C40.7 44.5 43.1 45.9 43.7 45.9C44.5 45.6 46.7 41.7 47.3 40.8C49.9 36.6 52.6 32.5 55.3 28.4C55.8 27.5 58.1 24.3 58.1 23.6C57.9 22.9 56.2 22.1 55.5 21.8C53 20.3 50.2 19.1 47.4 18.1C36.8 14.6 25.3 14.8 14.9 18.8C12.5 19.6 10.3 20.8 8.1 22C7.4 22.3 6.2 22.8 5.8 23.6ZM53.7 24.6L42.8 41.7C41.9 41.6 41 41 40.2 40.7C38.9 40.2 37.5 39.9 36.1 39.6C34.6 39.4 32.9 39.1 31.4 39.3C30.6 39.4 29.6 39.5 28.9 39.4L20.2 20.6C21.2 19.9 25.5 19.4 26.8 19.2C33.5 18.4 40.1 19.2 46.5 21.3C48.3 21.9 50.1 22.6 51.8 23.5C52.4 23.8 53.3 24.1 53.7 24.6ZM16.9 21.6L25.5 40.1L21.3 41.7L10.3 24.5C11.7 23.6 15.4 21.8 16.9 21.6Z"/>'
  },
  {
    id: "carcontrols-rear-wiper",
    name: "Rear wiper",
    quiz: "Rear window wiper",
    category: "carcontrols",
    aka: ["rear wiper", "rear washer", "back window wiper", "tailgate wiper"],
    looksLike: ["rectangle with a wiper", "box with an arc", "square with wiper and spray", "rear window with wiper", "rounded square with an arc"],
    meaning: "Controls the wiper on the rear window. A version with a little fountain squirts washer fluid on it too.",
    action: "On most cars, push the wiper stalk away from you (or twist its end) to switch the rear wiper on, and push or twist further to wash. Many cars also wipe the back window automatically when you select reverse with the front wipers on.",
    svg: `<rect x="9" y="12" width="46" height="34" rx="6"/><path d="M32 50L24.5 18.5" stroke-width="3.5"/><circle cx="32" cy="50.5" r="3" fill="currentColor" stroke="none"/>`
  },
  {
    id: "carcontrols-auto-headlights",
    name: "Automatic headlights (AUTO on the light switch)",
    quiz: "Automatic headlights",
    category: "carcontrols",
    aka: ["auto lights", "AUTO headlamps", "light sensor", "automatic lights"],
    looksLike: ["headlight with a", "lamp with letter a", "a in a headlight", "light switch auto", "headlight with slanted lines and a"],
    meaning: "In this position the headlights switch themselves on when it gets dark (or you drive into a tunnel), using a light sensor at the top of the windscreen.",
    action: "Leave the light switch on AUTO for everyday driving, but switch the dipped headlights on yourself in fog, spray or heavy rain. The sensor only measures how dark it is, so in daytime rain it may leave you on daytime running lights, which on many cars means no rear lights at all.",
    tip: "With straight lines instead of slanted ones, an A in a headlight is usually automatic high beam.",
    svg: `<path d="M36 16c10 0 18 7 18 16s-8 16-18 16c-3 0-4-4-4-16s1-16 4-16z"/><path d="M24 20l-14 4M24 28l-14 4M24 36l-14 4M24 44l-14 4"/><text x="43.5" y="38" font-size="15">A</text>`
  },
  {
    id: "carcontrols-headlight-levelling",
    name: "Headlight levelling dial (0 to 3)",
    quiz: "Headlight height adjustment",
    category: "carcontrols",
    aka: ["headlamp levelling", "headlight beam adjuster", "headlight height control", "beam height dial"],
    looksLike: ["headlight with up and down arrow", "lamp with an arrow", "dial with 0 1 2 3", "headlight with vertical arrow", "numbered wheel by the steering wheel"],
    meaning: "This dial lowers the headlight beams when the back of the car is weighed down, so you don't dazzle oncoming drivers. 0 is for a normal load; the higher numbers are for a full car, a heavy boot or towing.",
    action: "Keep it on 0 for everyday driving, and check your handbook for which number matches your load. If oncoming drivers keep flashing you when the car's loaded, try a higher number. If your lights seem short and dim, check the dial hasn't been knocked off 0.",
    tip: "Cars with LED or xenon headlights usually level themselves, which is why some cars don't have the dial at all.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M13.4 8.4C13.5 9.2 15.9 9.7 16.5 10.3C16.2 11.2 15.7 11.9 15.3 12.7C14.6 14.3 13.9 15.8 13.4 17.4C13.1 18.1 12.4 19.4 12.9 20.1C13.4 20.4 14.9 19.8 15.6 19.6C16.4 19.4 19 18.9 19.5 18.4C19.9 18.1 20 17.4 20.2 16.9C20.7 15.9 21.5 13.7 22.3 13C23 13.3 24.4 14.3 25 14C25.5 13.4 24.9 12.6 24.7 12C24.3 10.9 22.9 6.4 22.3 5.9C21.7 5.6 20.9 6 20.2 6.2C18.6 6.6 17 7.1 15.4 7.5C14.8 7.7 13.6 7.7 13.4 8.4ZM30.1 16.8C29.9 16.8 29.6 16.8 29.4 16.9C28.7 17.6 27.7 21.2 27.4 22.3C25.7 28.4 25.6 34.9 27.2 41C27.4 42.2 28.7 46.5 29.4 47.2C29.9 47.5 33.3 47.4 34.1 47.4C39.1 47.4 43.4 47.2 48 44.9C56.4 40.7 59.9 31.5 53.7 23.7C50.4 19.6 45 17.4 39.8 16.9C38.1 16.7 36.3 16.8 34.6 16.8C33.1 16.8 31.6 16.6 30.1 16.8ZM31.7 44C30.9 42.6 30.3 39.6 30 38.1C29.2 33.2 29.3 28.1 30.6 23.2C30.9 22.2 31.1 21.1 31.7 20.2C32.8 19.9 35 20.1 36.2 20.1C42.2 20.1 49.1 21.9 52.3 27.5C53.1 28.9 53.6 30.6 53.5 32.2C53.2 38.5 47.5 42.2 41.8 43.5C39.9 44 38 44 36.1 44C34.8 44 32.9 44.2 31.7 44ZM7.4 27.9C8.1 28.1 10.8 27.2 11.6 27C14.1 26.3 16.6 25.7 19 25C20 24.7 21.9 24.4 22.8 24C23.2 23.7 23.8 21.1 23.6 20.6C23 20.2 20.4 21.1 19.7 21.4C16.9 22.1 14.1 22.9 11.3 23.6C10.3 23.9 8.2 24.2 7.5 24.7C7 25 7 27 7.1 27.6C7.2 27.7 7.3 27.8 7.4 27.9ZM7.3 34.3C7.9 34.7 10.1 33.9 10.9 33.6C13.5 33 16.1 32.3 18.7 31.6C19.4 31.4 21.4 31 22 30.6C22.5 30.3 22.6 27.8 22.2 27.4C21.5 27.1 19.4 27.9 18.6 28.1C16 28.8 13.4 29.5 10.9 30.2C10.1 30.4 7.9 30.8 7.4 31.2C6.9 31.6 7 33.8 7.3 34.3ZM7.3 40.8C8 41.1 10.1 40.3 10.9 40.1C13.6 39.4 16.2 38.7 18.9 38C19.8 37.7 21.6 37.5 22.3 36.9C22.6 36.4 22.5 34.4 22.1 33.9C21.4 33.6 19.3 34.4 18.5 34.6C15.9 35.3 13.4 36 10.8 36.7C10.1 36.9 7.9 37.2 7.4 37.7C6.9 38 7 40.3 7.3 40.8ZM7.3 47.2C8 47.6 10.2 46.8 11 46.5C14.1 45.7 17.2 44.9 20.3 44C21.1 43.8 23.1 43.5 23.5 42.9C23.6 42.3 23.2 40.5 22.8 40.1C22.1 39.9 19.6 40.8 18.7 41C16.1 41.7 13.5 42.4 10.9 43.1C10.1 43.3 8.2 43.7 7.5 44.1C6.9 44.4 7 46.8 7.3 47.2ZM14.2 48.3C14 49.5 15.9 52.5 16.4 53.6C15.8 54.3 13.5 54.6 13.3 55.5C13.5 56.2 14.7 56.3 15.3 56.4C16.9 56.9 18.5 57.3 20.1 57.8C20.8 57.9 21.6 58.4 22.2 58.1C22.8 57.6 24.2 53 24.6 52C24.8 51.4 25.4 50.5 24.9 50C24.2 49.7 22.9 50.7 22.2 50.9L19.9 46.8C19 46.5 16.5 47.4 15.6 47.7C15.1 47.8 14.5 47.9 14.2 48.3Z"/>'
  },
  {
    id: "carcontrols-window-lock",
    name: "Window lock (crossed-out window)",
    quiz: "Passenger window lock",
    category: "carcontrols",
    aka: ["window lock", "child lock", "rear window disable", "child safety lock", "window switch lock"],
    looksLike: ["window with an x", "car window with an x", "side window with a cross", "window shape with an x", "trapezoid with an x"],
    meaning: "Locks the passengers' window switches (on most cars, every one except the driver's), so children can't open the windows, or play with them for the whole journey. The driver's own switches still work.",
    action: "Press it on the driver's door switch panel; a light on the button shows it's on. On some cars the same button also locks the rear doors from the inside (an electric child lock).",
    // UN R121: a door with its window crossed out.
    svg: '<path d="M22 8H52Q56 8 56 12V52Q56 56 52 56H12Q8 56 8 52V24Z"/><path d="M24.5 13.5H50.5V33.5H13.5V26.5Z" stroke-width="3"/><path d="M23 17L45 31M45 17L23 31" stroke-width="3"/>'
  },
  {
    id: "carcontrols-mirror-fold",
    name: "Mirror fold button",
    quiz: "Fold the door mirrors",
    category: "carcontrols",
    aka: ["fold mirrors", "power folding mirrors", "mirror retract", "mirror fold switch"],
    looksLike: ["mirror with curved arrow", "mirror with an arrow", "rectangle with a curved arrow", "door mirror folding", "mirror with an arc"],
    meaning: "Folds the door mirrors in against the windows, and back out again. Useful in tight car parks, narrow streets and car washes.",
    action: "Press the button (or turn the mirror knob to the fold position). Many cars also fold them automatically when you lock up. If a mirror has been knocked out of place, folding them in and out electrically often clicks it back into position.",
    svg: `<path d="M19 12h26c3 0 5 2 4.5 5l-3 17c-.5 3-3 5-6 5H19c-3 0-5-2-5-5V17c0-3 2-5 5-5z"/><path d="M14 26H7"/><path d="M50 44c-4 8-17 11-28 7"/><path d="M27 56l-5-5 6-4"/>`
  },
  {
    id: "carcontrols-sync-dual",
    name: "SYNC and DUAL buttons (climate control)",
    quiz: "Dual-zone climate settings",
    category: "carcontrols",
    aka: ["SYNC", "DUAL", "dual zone climate", "climate sync", "temperature sync"],
    looksLike: ["sync", "dual", "sync and dual", "sync dual", "sync dual climate"],
    meaning: "Both are about dual-zone climate control, where the driver and front passenger each get their own temperature. SYNC (or switching DUAL off) makes the passenger side copy the driver's settings. DUAL lets each side set their own.",
    action: "Press SYNC when you want one temperature for the whole car, set from the driver's side. Turn the passenger's knob (or press DUAL) to split them again, so whoever is always cold can be cold on their own side.",
    svg: `<text x="32" y="29" font-size="16">SYNC</text><path d="M14 36h36" stroke-width="2.5"/><text x="32" y="53" font-size="16">DUAL</text>`
  },
  {
    id: "carcontrols-parking-sensors",
    name: "Parking sensors button (P with waves)",
    quiz: "Parking sensors",
    category: "carcontrols",
    aka: ["park assist", "parking aid", "park distance control", "PDC", "parking sensor switch", "reversing sensors"],
    looksLike: ["p with waves", "p with sound waves", "p with curved lines", "letter p with arcs", "p and radar", "p with brackets"],
    meaning: "Switches the parking sensors on or off: the ones that beep faster and faster as you get closer to something. Most cars switch them on automatically in reverse; this button turns them on for going forwards too, or quietens them.",
    action: "Press it to switch the sensors on in tight spots, or off when they're beeping at a hedge, a tow bar or a bike rack. Keep the little round sensors in the bumpers clean, as mud and snow confuse them.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M4.9 15.6C4.5 16.1 4.7 17.1 4.7 17.8C4.7 19.6 4.7 21.4 4.7 23.2C4.7 29.1 4.7 35.1 4.7 41C4.7 42.6 4.7 44.3 4.7 45.9C4.7 46.6 4.5 47.5 4.8 48.1C5 48.3 5.1 48.4 5.4 48.4C6.5 48.5 8.7 48.5 9.9 48.4C10.2 48.4 10.3 48.3 10.4 48.2C10.8 47.5 10.6 45.6 10.6 44.7C10.6 42.8 10.6 40.9 10.6 39C10.6 38 10.5 37 10.7 36.1C11.4 35.8 13.8 36 14.7 36C18.6 36 22.8 36 25.5 32.7C28.1 29.6 28.3 23.4 26.4 19.9C25.7 18.6 24.6 17.4 23.3 16.7C20.1 14.9 15.4 15.4 11.8 15.4C10.2 15.4 8.7 15.4 7 15.4C6.4 15.4 5.5 15.3 4.9 15.6ZM10.7 31.1L10.7 20.4C11.8 20.2 13.1 20.4 14.3 20.4C15.4 20.4 16.7 20.2 17.9 20.4C18.5 20.5 19 20.7 19.5 21C22.1 22.8 22.3 28.6 19.6 30.4C18 31.5 15.2 31.1 13.3 31.1C12.5 31.1 11.5 31.3 10.7 31.1ZM44.2 42.9C44.9 43.4 46.3 43.1 47 43.1C49.4 43.1 51.7 43.1 54 43.1C54.8 43.1 56.1 43.4 56.7 42.9C57.1 42.2 56 39.4 55.8 38.5C54.7 34.4 53.6 30.2 52.5 26.1C52.3 25.3 51.6 22.4 51.2 21.9C51.1 21.6 50.8 21.5 50.5 21.4C50.2 21.4 49.9 21.6 49.7 21.9C49.3 22.4 48.7 25.2 48.5 26C47.4 30.1 46.3 34.2 45.2 38.3C45 39.1 43.9 42.3 44.2 42.9ZM29.3 24C29.1 24.6 29.5 25.6 29.6 26.2C29.8 27.4 29.8 28.6 29.5 29.8C29.3 31 28.8 32.2 28.1 33.3C27.7 33.9 26.9 34.5 26.8 35.2C27 35.8 28.8 37.4 29.4 37.4C30.3 37 31 35.9 31.4 35.1C33.1 32.4 33.8 29.2 33.5 26C33.4 25.4 33.4 24.4 32.9 24C32.5 23.6 29.7 23.7 29.3 24ZM35.6 24C35.3 24.5 35.8 26.7 35.8 27.6C35.8 29.8 35.4 32 34.5 34.1C33.9 35.3 33.2 36.5 32.4 37.6C32 38.1 31.3 38.6 31.4 39.3C31.6 39.9 33.4 41.4 34 41.4C34.9 41 36 39.2 36.6 38.3C38.6 35 39.6 31.2 39.6 27.3C39.6 26.6 39.6 24.3 39 23.9C38.5 23.6 37.6 23.8 37.1 23.8C36.6 23.8 36 23.7 35.6 24ZM41.6 24C41.3 24.6 41.7 26.8 41.7 27.7C41.7 29.9 41.3 32.2 40.6 34.4C40 36.5 39 38.5 37.8 40.3C37.3 41 35.9 42.3 35.8 43.1C36 43.7 37.7 45.2 38.4 45.3C39.3 45 40.7 42.8 41.3 41.9C43.7 38 45.2 33.7 45.5 29C45.5 28 45.7 24.6 45 23.9C44.4 23.6 42 23.6 41.6 24ZM42.8 44.4C41.8 44.6 41.1 47.5 42.4 48.3C43.1 48.8 46.8 48.6 47.9 48.6C50.3 48.6 52.7 48.6 55.1 48.6C56 48.6 57.1 48.7 58.1 48.5C59.9 48.1 59.2 44.9 58.4 44.5C57.9 44.2 53.9 44.4 53 44.4C50.6 44.4 48.1 44.4 45.7 44.4C44.8 44.4 43.7 44.2 42.8 44.4Z"/>'
  },
  {
    id: "carcontrols-seat-memory",
    name: "Seat memory buttons (M, 1, 2, 3)",
    quiz: "Save and recall seat positions",
    category: "carcontrols",
    aka: ["memory seat", "seat memory", "driver profile buttons", "SET button", "memory buttons"],
    looksLike: ["m 1 2 3", "m and numbers", "buttons with numbers", "letter m with 1 2 3", "m button on the door", "numbered buttons on the door"],
    meaning: "These save your driving position. The car remembers where the seat (and on many cars the door mirrors and steering wheel) were set, so two drivers can each get their own position back with one press.",
    action: "Set everything how you like it, press M (or SET), then press 1, 2 or 3 within a few seconds to save. From then on, pressing that number brings it all back. Some cars link a memory to each key, so it adjusts as you unlock.",
    svg: `<rect x="21" y="7" width="22" height="22" rx="5" stroke-width="3"/><text x="32" y="23.5" font-size="15">M</text><rect x="6" y="36" width="15" height="20" rx="4" stroke-width="3"/><rect x="24.5" y="36" width="15" height="20" rx="4" stroke-width="3"/><rect x="43" y="36" width="15" height="20" rx="4" stroke-width="3"/><text x="13.5" y="51" font-size="13">1</text><text x="32" y="51" font-size="13">2</text><text x="50.5" y="51" font-size="13">3</text>`
  },
  {
    id: "carcontrols-ventilated-seat",
    name: "Ventilated seat (seat with arrows)",
    quiz: "Seat cooling",
    category: "carcontrols",
    aka: ["cooled seat", "seat ventilation", "air-conditioned seat", "seat cooling", "climate seat"],
    looksLike: ["seat with arrows", "chair with arrows going up", "seat with a fan", "seat with blue arrows", "chair with straight lines"],
    meaning: "Turns on small fans in the seat that move air through the perforated upholstery, so you don't stick to it on hot days. Pressing it repeatedly usually cycles through speeds.",
    action: "Use it in summer, but don't expect air-con levels of cold: it's gentle. Wavy lines instead of straight arrows is the heated seat button, which is a sweaty surprise in July.",
    // Mirrored to face left, like every ISO seat symbol.
    svg: '<g transform="matrix(-1 0 0 1 64 0)"><path d="M18 10l5 32a4 4 0 0 0 4 4h20" stroke-width="5"/><path d="M32 38V22M28 26l4-4 4 4M40 38V22M36 26l4-4 4 4M48 38V22M44 26l4-4 4 4" stroke-width="3"/></g>'
  },
  {
    id: "carcontrols-sos-button",
    name: "SOS button (eCall)",
    quiz: "Emergency call button",
    category: "carcontrols",
    aka: ["eCall", "emergency call", "SOS call button", "roof SOS button"],
    looksLike: ["sos", "sos with a phone", "sos and a phone handset", "sos in the roof", "sos on the ceiling", "sos above the mirror"],
    meaning: "The emergency call button, usually in the roof panel above the mirror. It calls the emergency services and sends them the car's location. The car also calls by itself after a serious crash, for example if the airbags go off.",
    action: "Only press it in a real emergency on the road. Pressed it by mistake? Don't hang up: stay on the line and tell the operator it was an accident.",
    tip: "It's been required on every new car model sold in the EU since 2018. A button next to it with a spanner or an i is usually for breakdown help or the car maker's assistance line instead.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.4 15.8C23.4 16.6 25.2 17.5 25.8 18C27.9 19.5 29.9 21 32 22.5C32.6 23 34 24.2 34.7 24.2C35.7 23.9 36.4 21.5 37.3 20.9C41.4 23 46.8 28.7 48.3 33.1C47.5 34.1 45.5 34.2 44.8 35.2C44.6 36 45.7 37.5 46.2 38.2C47.4 40.4 48.7 42.6 49.9 44.8C50.3 45.5 51 47 51.7 47.4C52.5 47.5 54 45.5 54.6 44.9C55.4 43.9 58.1 40.6 58.2 39.6C58.4 38.5 57.5 35.7 57.2 34.6C54.3 24.9 47.3 16.6 38 12.4C36.5 11.8 33.6 10.5 32.1 10.4C31.3 10.3 30.5 10.9 29.9 11.3C28.2 12.1 26.6 13.2 25.1 14.3C24.5 14.7 23.7 15.1 23.4 15.8ZM24.5 39.3C20.3 39.7 18.2 42.6 18.2 46.7C18.2 50.6 21.2 53.9 25.2 53.6C29.2 53.4 31.7 50.2 31.5 46.2C31.3 42.4 28.6 38.9 24.5 39.3ZM7.7 48.6C7.2 48.3 6.3 48.4 5.8 48.9C5.3 50.3 6.9 52.2 8.1 52.9C10.5 54.2 14.7 54 16.2 51.5C16.6 51 16.8 50.4 16.9 49.8C17.3 46.5 14.1 45.6 11.5 45C10.7 44.8 9.2 44.6 8.7 43.8C8.5 43.5 8.5 43.1 8.6 42.8C9 41.3 11.3 41.2 12.6 41.6C14.2 42.1 13.6 43.1 14.5 43.9C15 44 15.9 44 16.3 43.6C16.9 42.4 15.3 40.5 14.2 40C11.9 38.8 8.1 39 6.7 41.5C6.3 42.1 6.2 42.7 6.2 43.4C6.2 46.4 9.7 47 11.8 47.5C12.9 47.8 14.6 48.1 14.6 49.5C14.5 52.1 10.2 51.8 8.8 50.6C8.2 50 8.2 49.2 7.7 48.6ZM34.6 48.6C34.1 48.3 33.1 48.4 32.7 48.8C32.2 50.3 33.8 52.2 34.9 52.9C37.4 54.2 41.6 54 43.2 51.4C43.5 50.9 43.7 50.2 43.7 49.6C43.8 46.3 41 45.6 38.4 45C37.5 44.8 36.1 44.6 35.6 43.8C35.4 43.5 35.3 43.1 35.4 42.8C35.8 41.3 38.1 41.3 39.3 41.6C41.1 42 40.5 43.1 41.4 43.9C41.9 44 42.7 44 43.2 43.6C43.8 42.4 42.2 40.5 41.1 40C38.8 38.8 34.9 39 33.5 41.5C33.2 42.2 33 43 33.1 43.8C33.5 46.5 36.6 47 38.8 47.5C39.8 47.8 41.5 48.2 41.5 49.5C41.4 52 37.1 51.8 35.8 50.6C35.1 50.1 35.1 49.2 34.6 48.6ZM24.5 41.4C27.4 41.1 28.8 43.5 29.1 46.1C29.3 48.6 27.9 51.4 25.2 51.5C22.5 51.7 20.6 49.6 20.6 46.9C20.6 44.2 21.4 41.7 24.5 41.4Z"/>'
  },
  {
    id: "carcontrols-heated-windscreen",
    name: "Heated windscreen (windscreen with wavy lines)",
    quiz: "Heated front windscreen",
    category: "carcontrols",
    aka: ["heated front screen", "Quickclear", "front windscreen heater", "heated windshield"],
    looksLike: ["windscreen with wavy lines", "windscreen with squiggles", "curved shape with three wavy lines", "windscreen with wavy lines and no arrows"],
    meaning: "Switches on the fine heating wires built into the windscreen, which clear frost and fog in a minute or two, much faster than blowing hot air at it. Ford calls it Quickclear.",
    action: "Press it on frosty mornings; it switches itself off after a few minutes. If you can see faint wiggly lines in your windscreen, you've got one. Wavy arrows instead of plain wavy lines is the ordinary demister, which uses the fan.",
    // Windscreen sector wider at the top, as in every ISO windscreen symbol, with heating lines.
    svg: '<path d="M7 17Q32 5 57 17L45 46Q32 41 19 46Z"/><path d="M23 40c-3-3 3-6 0-9s3-6 0-9M32 39c-3-3 3-6 0-9s3-6 0-9M41 40c-3-3 3-6 0-9s3-6 0-9" stroke-width="3"/>'
  }
]);
