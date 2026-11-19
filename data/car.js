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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.4 21.4L19.4 25.6L19.8 27.8L25.1 27.6L25.1 25.4C25.1 25.4 22.9 25.4 22.4 25.4C21.9 25.3 22.1 25.4 22.1 24.9C22 24.5 22 23 22.1 22.6C22.1 22.1 20.9 22.2 22.4 22.1C24 22.1 29.7 22.1 31.2 22.1C32.8 22.2 31.6 22.1 31.6 22.6C31.7 23 31.6 25.1 31.6 25.1C31.6 25.1 31.6 25.3 31.1 25.4C30.6 25.4 28.6 25.4 28.6 25.4L28.4 27.6C28.4 27.6 33.1 27.4 34.5 27.8C35.9 28.1 36.9 29.9 36.9 29.9C36.9 29.9 46.9 27.5 50 26.6C53.1 25.6 55.5 24.2 55.5 24.2L58.1 27.1L56.5 28.9L55 27.9C55 27.9 55.3 26 53 28.4C50.6 30.9 47.1 40.2 41 42.5C35 44.9 16.9 42.5 16.9 42.5C16.9 42.5 16.4 43.4 16.4 42C16.3 40.5 16.4 33.9 16.4 33.9C16.4 33.9 8.1 30.8 6.3 30.1C4.6 29.4 5.8 29.6 5.8 29.6C5.8 29.6 7.3 23.6 7.8 22.2C8.2 20.9 8.4 21.4 8.4 21.4ZM10.3 25.8L16.1 27.9L16.2 30.2L9.8 27.9L10.3 25.8ZM47.5 29.8L39.5 39.2L19.8 39.2L19.8 31.1C19.8 31.1 30.4 30.7 33 31.1C35.6 31.4 34.8 32.9 35.4 33.4C35.9 33.8 34.1 34.2 36.1 33.6C38.2 33 47.5 29.8 47.5 29.8ZM56.1 31.9C56.1 31.9 56.8 31.9 57 32C57.2 32.1 57.2 32.1 57.4 32.5C57.5 33 57.5 34.2 57.6 34.9C57.8 35.5 58.2 35.7 58.2 36.2C58.3 36.8 58.2 37.6 58 38C57.7 38.5 57.3 38.7 56.9 38.8C56.4 38.8 55.7 38.7 55.4 38.5C55 38.2 54.6 38.4 54.6 37.5C54.6 36.7 55.1 34.1 55.4 33.1C55.6 32.2 56.1 31.9 56.1 31.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.8 9.6C32.4 9.4 33 9.8 33.5 10.1C33.9 10.4 34.2 10.3 34.5 11.3C34.7 12.3 34.8 16.1 34.8 16.1C34.8 16.1 43.3 16 45.1 16.1C47 16.1 45.6 16.4 45.6 16.4C45.6 16.4 45.7 19 45.6 19.6C45.6 20.1 47.1 19.9 45.2 19.9C43.4 20 34.6 20.1 34.6 20.1L34.8 23.4C34.8 23.4 43.2 23.4 45 23.4C46.9 23.5 45.6 23.9 45.6 23.9L45.6 27.1C45.6 27.1 47 27.4 45.1 27.4C43.3 27.5 34.8 27.4 34.8 27.4L34.6 30.9C34.6 30.9 43.3 30.9 45.1 30.9C47 31 45.6 30.9 45.6 31.4C45.7 32 45.7 34 45.6 34.5C45.6 35.1 47.1 34.9 45.2 35C43.4 35 34.8 35 34.8 35C34.8 35 34.4 38.3 34.6 39.5C34.9 40.6 36 41 36.2 41.8C36.5 42.5 36.5 43.4 36.2 44.1C36 44.9 35.2 45.9 34.6 46.5C34 47 33.2 47.2 32.6 47.4C32.1 47.5 31.8 47.5 31.2 47.4C30.7 47.2 29.7 46.8 29.2 46.5C28.8 46.2 28.6 46.1 28.4 45.5C28.1 45 27.6 44.1 27.6 43.4C27.5 42.6 27.6 41.9 27.9 41.2C28.1 40.6 29 44.2 29.2 39.5C29.5 34.7 29.2 17.2 29.2 12.4C29.3 7.7 29.3 11.2 29.8 10.8C30.2 10.3 31.1 9.7 31.8 9.6ZM10.3 38.5C11.7 38.3 12.5 38.3 14.2 38.8C16 39.2 19.1 41 20.8 41.4C22.4 41.7 23.9 41 23.9 41C23.9 41 24.2 40.9 24.2 41.5C24.3 42.1 24.4 44.6 24.4 44.6C24.4 44.6 24 45.2 23.4 45.4C22.7 45.5 21.9 45.7 20.4 45.4C19 45 16.1 43.5 14.7 43C13.2 42.6 12.7 42.5 12.1 42.5C11.4 42.4 11.6 42.2 10.7 42.5C9.7 42.9 6.2 44.4 6.2 44.4C6.2 44.4 5.8 44.5 5.8 43.9C5.7 43.2 6 40.2 6 40.2C6 40.2 9 38.8 10.3 38.5ZM50.5 38.5C52.3 38.1 52.3 38.3 53.5 38.5C54.8 38.8 57.1 39.8 57.9 40.1C58.6 40.5 58.1 39.9 58.1 40.5C58.2 41.2 58.2 43.2 58.1 43.9C58.1 44.5 57.9 44.2 57.9 44.2C57.9 44.2 54.4 42.8 53.4 42.5C52.4 42.2 52.4 42.4 51.9 42.5C51.3 42.5 51.2 42.4 49.9 42.9C48.5 43.3 45.1 44.9 43.5 45.4C42 45.8 41.2 45.4 40.5 45.4C39.9 45.3 39.6 44.9 39.6 44.9L39.9 41.1C39.9 41.1 41.5 41.8 43.2 41.4C45 40.9 48.8 39 50.5 38.5ZM11.2 48.6C11.9 48.5 12.7 48.5 13.8 48.9C15 49.2 16.7 50.7 18.4 50.6C20.2 50.6 23 48.9 24.4 48.6C25.9 48.4 25.8 48.5 27.1 48.9C28.3 49.2 30 50.7 31.8 50.6C33.5 50.6 36.3 48.9 37.8 48.6C39.2 48.4 39.1 48.5 40.4 48.9C41.6 49.2 43.4 50.6 45 50.6C46.7 50.6 48.8 49.2 50 48.9C51.3 48.5 52 48.5 52.6 48.6C53.3 48.8 54 49.5 54 49.5C54 49.5 54 51.8 54 52.4C53.9 52.9 53.5 53 53.5 53C53.5 53 52.1 52.5 51.2 52.6C50.4 52.8 49.2 53.6 48.2 54C47.3 54.3 46.4 54.5 45.6 54.5C44.9 54.6 44.7 54.8 43.6 54.5C42.6 54.1 40.2 53 39.2 52.6C38.3 52.3 38.8 52.4 38 52.6C37.2 52.9 35.4 53.8 34.5 54.1C33.5 54.5 33.1 54.5 32.5 54.5C31.8 54.6 31.5 54.8 30.4 54.5C29.4 54.1 26.9 53 25.9 52.6C25 52.3 25.6 52.3 24.6 52.6C23.7 53 21.3 54.1 20.2 54.5C19.2 54.8 18.9 54.6 18.2 54.5C17.6 54.5 17.2 54.5 16.2 54.1C15.3 53.8 13.7 52.9 12.7 52.6C11.7 52.4 10.2 52.9 10.2 52.9C10.2 52.9 10 52.9 9.9 52.4C9.9 51.8 9.9 49.5 9.9 49.5C9.9 49.5 10.6 48.8 11.2 48.6Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M57.8 17.8C57.8 17.8 58.2 17.6 58.2 18.2C58.3 18.9 58 21.9 58 21.9C58 21.9 52.3 25.4 51 26.1C49.6 26.9 50 26.2 50 26.2C50 26.2 48.8 24.4 48.5 23.9C48.3 23.4 47.1 24.3 48.6 23.2C50.2 22.2 57.8 17.8 57.8 17.8ZM41.5 23.9C42.3 23.8 43.3 24 44 24.4C44.8 24.7 45.7 25.5 46.1 26.1C46.6 26.6 46.8 27 47 27.6C47.1 28.3 47.5 28.8 47 30.1C46.6 31.4 45.6 33 44.2 35.5C42.9 37.9 39.8 43.1 38.8 44.6C37.8 46.2 38.2 44.9 38.2 44.9C38.2 44.9 38.1 45.2 37.4 43.1C36.6 41.1 33.7 35.5 33.8 32.6C33.8 29.8 36.7 27.4 37.6 26.1C38.6 24.7 38.9 24.8 39.5 24.4C40.2 24.1 40.8 23.9 41.5 23.9ZM31.4 34.8C32 34.6 31.8 34.3 32.1 35C32.5 35.8 32.5 35.9 33.8 39.2C35 42.6 38.6 52.4 39.5 55.1C40.5 57.9 39.2 55.9 39.2 55.9C39.2 55.9 36.8 56 36.1 55.9C35.5 55.7 36.8 58.4 35.5 55.1C34.3 51.9 29.8 39.6 28.6 36.4C27.5 33.1 28.9 35.8 28.9 35.8C28.9 35.8 30.9 34.9 31.4 34.8ZM17.9 34.9C19.8 34.9 26.1 36.5 26.1 36.5C26.1 36.5 28.5 42.3 29.1 44C29.8 45.6 29.8 46.4 29.8 46.4C29.8 46.4 30.5 47 29.1 46.5C27.6 45.9 22.4 43.7 20.9 43.1C19.3 42.6 20 43 19.6 43.1C19.1 43.3 19.5 42.5 18.1 44.2C16.8 46 13.1 51.8 11.7 53.5C10.2 55.3 10.2 54.4 9.6 54.5C8.9 54.6 8.1 54.4 7.5 54.1C7 53.9 6.5 53.4 6.2 53C6 52.7 5.8 52.5 5.8 52C5.7 51.5 5.7 50.5 5.8 50C5.8 49.6 4.6 51.4 6.2 49.1C7.7 46.9 13.3 38.6 15.2 36.2C17.2 33.9 16.1 34.8 17.9 34.9Z"/><g fill="currentColor" stroke="none"><circle cx="23.1" cy="19.9" r="11.9"/><circle cx="44.1" cy="16.6" r="5.2"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.1 5.8C31.7 5.6 32 5.5 32.6 5.8C33.3 6 34.3 6.6 34.9 7C35.4 7.3 35.4 7.4 35.8 8C36.1 8.5 36.6 9.5 36.8 10.4C36.9 11.4 36.7 12.9 36.5 13.8C36.4 14.6 36 15.1 35.6 15.7C35.2 16.2 34.1 17.1 34.1 17.1L34.4 18.9L36.1 19.9L43.5 12.2C43.5 12.2 44 12.1 44.4 12.4C44.7 12.8 45.9 13.9 45.9 13.9C45.9 13.9 46.6 13.6 45.5 14.8C44.5 16.1 39.4 21.4 39.4 21.4C39.4 21.4 40.8 21.9 41.1 22.2C41.5 22.6 41.1 21.1 41.6 23.4C42.2 25.8 44.1 33.1 44.5 36C45 39 44.4 41 44.4 41C44.4 41 48 42.8 49.5 43.8C50.9 44.7 53 46.6 53 46.6L51 49C51 49 48.5 47.1 47.2 46.4C46 45.6 43.8 44.5 43.8 44.5C43.8 44.5 42.5 48.6 41.6 50.8C40.8 52.9 38.5 57.4 38.5 57.4L34.1 58.2L33.5 57.6C33.5 57.6 36.5 51.4 37.2 49.6C38 47.9 38.1 47 38.1 47C38.1 47 38.4 46.5 37.6 46.2C36.9 46 34.9 45.5 33.6 45.4C32.4 45.2 31.3 45.2 29.9 45.4C28.6 45.5 25.6 46.5 25.6 46.5C25.6 46.5 26.6 49.9 27.4 51.8C28.2 53.6 30.4 57.8 30.4 57.8L29.9 58.2C29.9 58.2 26.8 57.9 26.1 57.8C25.3 57.6 25.8 58.2 25.1 57.1C24.5 56 23.1 53.2 22.2 51.1C21.4 49 19.9 44.5 19.9 44.5C19.9 44.5 17.5 45.9 16.4 46.6C15.2 47.4 13.2 49.1 13.2 49.1L10.8 47L19.1 38L19.6 38.4C19.6 38.4 19.6 39.9 19.8 40.9C19.9 41.8 20.4 43.9 20.4 43.9C20.4 43.9 24 42.4 25.6 42C27.3 41.6 28.3 41.5 30.1 41.5C32 41.4 34.6 41.5 36.9 41.9C39.1 42.2 43.5 43.6 43.5 43.6L43.6 41.2C43.6 41.2 39.1 39.7 36.5 39.4C34 39 30.6 39 28.4 39.1C26.1 39.3 24 40.2 22.9 40.4C21.9 40.5 22.2 40 22.2 40C22.2 40 22 39.4 22.1 39C22.2 38.7 20.1 41 22.9 38C25.6 35.1 38.5 21.6 38.5 21.6L36.5 20.4L19.9 37.9L19.1 37.5C19.1 37.5 18.7 37.9 19.2 35.4C19.8 32.9 20.6 25.4 22.4 22.6C24.1 19.8 29.6 18.6 29.6 18.6C29.6 18.6 29.9 17.6 29.6 17.1C29.4 16.7 28.5 16.2 28.1 15.8C27.8 15.3 27.6 15 27.4 14.2C27.1 13.5 26.7 12.2 26.9 11.2C27 10.1 27.7 8.5 28.1 7.8C28.6 7 28.9 6.9 29.4 6.5C29.9 6.2 30.6 5.9 31.1 5.8Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.2 6C27.9 5.9 36.6 5.9 39.2 6C41.9 6.2 40.3 6.5 40.9 7C41.4 7.4 42 8 42.5 8.6C42.9 9.2 43.3 7.8 43.5 10.6C43.6 13.3 44 21.5 43.5 24.9C42.9 28.4 40.6 29.1 40 31.1C39.5 33.2 40 36.3 40 37.4C40.1 38.4 40.2 37.6 40.2 37.6L44 37.9C44 37.9 44.3 49 44.2 51.5C44.2 53.9 44.5 51.5 44 52.5C43.4 53.4 40.8 57.4 40.8 57.4L40 57.1C40 57.1 39.4 57 39.9 56C40.3 55.1 42.2 54.4 42.6 51.6C43.1 48.9 42.7 41.5 42.6 39.5C42.6 37.4 43 39.2 42.4 39.1C41.8 39.1 39.7 39.2 39 39.1C38.4 39.1 38.7 40 38.5 38.6C38.4 37.3 37.8 33.5 38.4 31.1C38.9 28.7 41.3 27.5 42 24.2C42.6 21 42.2 14 42 11.4C41.8 8.9 41.3 9.6 40.8 8.9C40.2 8.3 41.1 7.8 38.6 7.5C36.1 7.3 28.2 7.4 25.8 7.5C23.3 7.7 24.4 8 23.9 8.6C23.3 9.1 22.5 8.1 22.2 10.8C22 13.4 21.6 21 22.2 24.4C22.9 27.8 25.3 28.8 25.9 31.1C26.6 33.5 26 37.1 25.9 38.5C25.9 39.8 25.4 39.1 25.4 39.1L21.6 39.4C21.6 39.4 21.2 48.6 21.6 51.4C22.1 54.1 23.9 55 24.4 56C24.8 56.9 24.4 57.2 24.4 57.2L23.1 57C23.1 57 20.4 54.2 19.9 51C19.3 47.9 19.8 40.6 19.9 38.4C19.9 36.1 19.6 37.9 20.4 37.8C21.1 37.6 24.1 37.5 24.1 37.5C24.1 37.5 24.7 33.1 24.1 31.1C23.6 28.9 21.4 28.1 20.8 24.9C20.1 21.6 20.3 14.3 20.4 11.7C20.6 9 20.9 9.6 21.4 8.8C21.9 8.1 22.8 7.4 23.4 7C24.1 6.5 22.6 6.2 25.2 6ZM24.4 18.1C27 18 39.8 18.1 39.8 18.1C39.8 18.1 40.3 18.6 40 20.1C39.8 21.5 38.9 25.5 38.5 26.6C38.1 27.8 39.7 27.1 37.6 27.1C35.6 27.2 26.1 26.9 26.1 26.9C26.1 26.9 25.8 27.2 25.4 25.9C25.1 24.7 24.1 20.7 23.9 19.4C23.6 18.2 23.8 18.8 23.9 18.6C23.9 18.3 21.7 18.1 24.4 18.1ZM18.2 26.4L19.1 26.9C19.1 26.9 20 26.8 18.9 28.1C17.7 29.3 13.5 33.5 12.2 34.5C11 35.6 11.3 34.5 11.3 34.5L10.9 33.5L18.2 26.4ZM27.1 43C28.9 42.9 37.5 43 37.5 43C37.5 43 37.9 43 38.2 44.2C38.6 45.5 39.2 49 39.5 50.2C39.7 51.5 39.5 52 39.5 52C39.5 52 39.1 52.5 38.6 52.6C38.2 52.8 39.1 52.7 37 52.8C34.8 52.8 27.6 52.8 25.6 52.8C23.6 52.7 24.9 52.5 24.9 52.5C24.9 52.5 24.6 52.1 24.8 50.9C24.9 49.6 25.8 46 26.1 44.8C26.3 43.5 26.2 43.9 26.4 43.6C26.5 43.4 25.2 43.1 27.1 43ZM30.2 56.1C31.9 56.1 35.5 56.1 36.8 56.1C38 56.2 37.5 56.5 37.5 56.5L37.6 57.4C37.6 57.4 38.9 57.9 37 58C35.2 58.1 26.8 58 26.8 58L26.1 56.9C26.1 56.9 26.2 56.4 26.9 56.2C27.6 56.1 28.6 56.2 30.2 56.1Z"/><polygon fill="currentColor" stroke="none" points="45.8,26.0 53.5,33.8 52.2,35.1 44.5,27.3"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.4 19.1C31.8 19.1 39 19.3 41.2 19.4C43.5 19.6 41.3 18.8 42.8 20.1C44.2 21.3 47.2 25.5 49.8 27.1C52.2 28.6 57.8 29.4 57.8 29.4C57.8 29.4 59.1 33.2 59.4 34.1C59.6 35 59.8 34 59.2 34.9C58.7 35.7 57.2 38.2 56 39.1C54.9 40 53.2 39.6 52.4 40.2C51.5 40.9 51.6 42.3 51 43C50.3 43.8 49.2 44.3 48.5 44.5C47.8 44.8 47.4 44.8 46.8 44.6C46.1 44.5 45.3 44.3 44.8 44C44.2 43.6 43.7 43.1 43.4 42.6C43 42.2 42.6 41.2 42.6 41.2L21.4 41.2C21.4 41.2 21.1 42.3 20.6 42.9C20 43.4 19 44.2 18.2 44.5C17.5 44.8 16.8 44.8 16.1 44.6C15.4 44.5 14.7 44.2 14.1 43.9C13.5 43.5 12.9 42.9 12.6 42.2C12.2 41.6 11.8 40.1 11.8 40.1C11.8 40.1 8.2 39.3 7.3 39C6.5 38.8 7.1 39.3 6.7 38.5C6.2 37.8 4.8 34.5 4.8 34.5C4.8 34.5 5.2 31.2 7.2 30.1C9.3 29.1 16.9 27.9 16.9 27.9L11.1 23.1L9.9 23.6C9.9 23.6 9.8 23.8 9.4 23.4C9.1 23.1 8 22.2 7.7 21.9C7.4 21.5 7.7 21.2 7.7 21.2C7.7 21.2 8.8 20.5 9.4 20.4C10.1 20.2 9.6 19.6 11.6 20.6C13.5 21.6 21.1 26.4 21.1 26.4C21.1 26.4 26.1 21.1 27.4 19.9C28.8 18.8 27.1 19.2 29.4 19.1ZM29.1 21.1C32.6 19.9 38.2 20.3 41.5 21.6C44.7 22.8 46.1 27.1 48.5 28.6C51 30.2 56.4 31.1 56.4 31.1L57.2 34.4C57.2 34.4 56 36.8 54.9 37.5C53.7 38.3 50.5 38.8 50.5 38.8C50.5 38.8 50.1 40.6 50 41.1C49.8 41.7 49.7 41.7 49.4 42C49 42.2 48.4 42.5 48 42.6C47.5 42.8 47.1 42.8 46.6 42.6C46.2 42.5 45.9 42.6 45.5 42C45 41.5 44 39.2 44 39.2C44 39.2 24.4 39.2 20.4 39.2C16.3 39.3 19.9 39.3 19.8 39.6C19.6 40 19.6 40.8 19.4 41.2C19.1 41.7 18.9 42.1 18.2 42.4C17.6 42.6 16.4 42.8 15.8 42.5C15.1 42.3 14.4 41.6 14.1 41C13.7 40.3 13.8 38.5 13.8 38.5L8.1 37L7 34.5C7 34.5 7.9 32.6 8.2 32.1C8.6 31.7 6.8 32.1 8.9 31.6C11.1 31.1 17.6 30.9 20.9 29.1C24.3 27.4 25.7 22.4 29.1 21.1ZM29.6 22.1C32.6 21.1 41.1 22.6 41.1 22.6C41.1 22.6 42.4 26.9 42.6 27.9C42.9 29 42.5 28.9 42.5 28.9L23.2 28.9C23.2 28.9 22.2 29.4 23.2 28.2C24.3 27.1 26.7 23 29.6 22.1ZM30.2 24.1C32.3 23.6 39.6 24.4 39.6 24.4L40.4 27.1L27.2 27.1C27.2 27.1 28.2 24.5 30.2 24.1Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.2 6.5C17 6.4 17.4 6.3 17.9 6.5C18.3 6.6 18.7 6.2 18.9 7.3C19 8.5 19.1 11.8 18.9 13.3C18.6 14.8 18.3 15.2 17.4 16.4C16.4 17.5 14.3 18.9 13.2 20.1C12.2 21.4 11.5 22.7 10.9 23.9C10.3 25.2 9.9 26.4 9.7 27.9C9.4 29.4 9.1 31.2 9.2 33C9.2 34.7 9.5 36.6 9.9 38.2C10.4 39.9 10.8 41.1 11.7 42.6C12.5 44.2 13.8 46.1 14.9 47.5C16.1 48.8 13.6 50.1 18.6 50.6C23.7 51.2 40.5 50.9 45.2 50.6C50 50.4 46.3 50 47.1 49.2C48 48.5 49.3 47.1 50.2 45.9C51.2 44.6 52.1 43 52.8 41.5C53.4 40.1 53.9 38.5 54.2 37C54.6 35.6 54.7 34.3 54.8 33C54.8 31.6 54.7 30.3 54.5 28.9C54.2 27.6 53.7 25.8 53.2 24.6C52.8 23.5 52.3 22.6 51.9 21.9C51.4 21.1 51.4 21 50.5 20.1C49.6 19.1 47.3 17.1 46.5 16.2C45.6 15.3 45.8 15.3 45.5 14.7C45.3 14 45 13.5 44.9 12.3C44.7 11.2 44.8 8.8 44.9 8C44.9 7.1 45 7.4 45.1 7.2C45.3 6.9 45.3 6.5 46 6.5C46.8 6.4 49 6.6 49.8 6.8C50.5 6.9 50.5 7 50.8 7.2C51 7.4 51.2 7.6 51.4 8C51.5 8.3 51.7 8.1 51.8 9.1C51.8 10 51.7 12.9 51.8 13.8C51.8 14.8 51.5 13.9 52 14.8C52.6 15.6 54 17.2 54.9 18.9C55.8 20.7 56.9 23.7 57.5 25.4C58 27.2 58 27.8 58.1 29.2C58.3 30.7 58.3 32.8 58.2 34.1C58.2 35.5 58.2 36.4 58 37.5C57.7 38.7 57.7 39.4 57 41.2C56.2 43.1 54.3 46.2 53.2 48.5C52.2 50.9 51.3 54 50.8 55.4C50.2 56.8 50.1 56.6 49.8 57C49.4 57.3 49.6 57.4 48.8 57.5C47.9 57.5 45.6 57.5 44.9 57.5C44.1 57.4 44.5 57.5 44.4 57C44.2 56.4 44.2 54.2 44.2 54.2L41.6 54.4C41.6 54.4 41.7 56.4 41.6 57C41.6 57.5 41.9 57.4 41.1 57.5C40.4 57.5 37.4 57.4 37.4 57.4L37 54.2L34.2 54.2C34.2 54.2 34.2 56.5 34.1 57C34.1 57.6 34.5 57.4 33.8 57.5C33 57.5 29.9 57.4 29.9 57.4L29.6 54.2L26.9 54.2C26.9 54.2 27 56.4 26.9 57C26.8 57.5 27.1 57.4 26.4 57.5C25.6 57.5 22.6 57.4 22.6 57.4L22.1 54.2L19.6 54.4C19.6 54.4 19.6 56.4 19.6 57C19.5 57.5 19.8 57.4 19.1 57.5C18.3 57.5 16 57.6 15.2 57.5C14.3 57.3 14.6 58.1 13.8 56.6C13.1 55.2 11.7 50.8 10.7 48.5C9.6 46.3 8.4 44.7 7.8 43.2C7 41.8 6.8 41 6.5 39.8C6.1 38.5 5.9 37.5 5.8 36C5.6 34.6 5.6 32.7 5.7 31.1C5.7 29.6 5.9 28.2 6.2 26.8C6.5 25.3 7 23.7 7.5 22.4C7.9 21.1 8.3 20.3 9.1 18.9C9.8 17.6 11.5 15.9 12.1 14.2C12.6 12.4 12.2 9.3 12.4 8.2C12.7 7 12.9 7.2 13.6 7C14.2 6.7 15.5 6.5 16.2 6.5ZM31.2 13.8C31.6 13.8 32.2 13.8 32.6 13.8C33 13.9 33.3 14 33.6 14.3C34 14.7 34.9 12.7 35 16.1C35 19.6 34.4 31.4 34.1 34.9C33.9 38.3 34 36.2 33.8 36.6C33.5 37.1 32.5 37.6 32.5 37.6C32.5 37.6 31.1 37.5 30.6 37.2C30.2 37 30.2 39.1 29.9 36.2C29.7 33.4 29.1 23.4 28.9 20.1C28.8 16.7 28.7 17 28.9 16.1C29.2 15.1 30 14.6 30.4 14.2C30.7 13.9 30.9 13.9 31.2 13.8Z"/><g fill="currentColor" stroke="none"><circle cx="31.9" cy="43.3" r="2.4"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M33.4 5.8C34.6 5.8 34.5 6.2 35.5 6.2C36.6 6.2 38.6 5.8 39.5 5.8C40.5 5.9 40.7 6.3 41.4 6.3C42 6.4 42.8 6.2 43.4 6.3C43.9 6.4 44.1 6.6 44.8 7C45.4 7.3 46.2 7.3 47 8.4C47.9 9.6 50 13.8 50 13.8C50 13.8 52.1 14 52.9 14.3C53.6 14.7 54.2 15.4 54.5 16.1C54.8 16.9 54.6 18.9 54.6 18.9C54.6 18.9 54.3 19.3 53.8 19.6C53.2 19.8 51.5 20.2 51.5 20.2C51.5 20.2 51.4 21.7 51.5 22.1C51.5 22.6 51.9 22.9 51.9 22.9C51.9 22.9 51.5 23.1 51.5 23.6C51.5 24 51.9 24.5 51.9 25.4C51.8 26.4 51.2 28.3 51 29.1C50.7 30 50.2 29.5 50 30.4C49.9 31.4 50.2 33.7 50 34.8C49.9 35.8 49 36.5 49 36.5C49 36.5 45 36.8 44 36.8C43.1 36.7 43.4 36.6 43 36.2C42.7 35.9 42.3 35.1 42.1 34.4C42 33.6 42.4 31.8 42.4 31.8C42.4 31.8 43.7 31.1 41.5 30.9C39.2 30.8 31.1 31 28.9 31.1C26.8 31.1 28.6 31.2 28.6 31.2C28.6 31.2 28.6 34.4 28.4 35.2C28.3 36.1 28.5 36.1 27.6 36.4C26.6 36.6 23.8 36.7 22.9 36.8C21.9 36.8 22.1 36.6 21.9 36.5C21.6 36.3 21.4 36.6 21.2 35.8C21.1 34.9 20.8 32.4 20.8 31.6C20.7 30.7 20.9 30.6 20.9 30.6C20.9 30.6 20.3 30 20.1 29.6C20 29.3 20.2 28.6 20.1 28.2C19.9 27.9 19.6 28 19.4 27.6C19.3 27.3 19.2 27.5 19.1 26.2C19.1 25 19.1 20.1 19.1 20.1C19.1 20.1 17.6 19.9 17.1 19.6C16.7 19.4 16.5 19.4 16.4 18.9C16.2 18.3 16.1 17 16.2 16.2C16.4 15.5 17 14.9 17.2 14.6C17.5 14.2 17.5 14.2 17.9 14.2C18.4 14.1 19.2 14.4 19.8 14.2C20.3 14.1 21 14 21.4 13.3C21.9 12.7 22 11.4 22.6 10.4C23.1 9.5 23.7 8.5 24.6 7.8C25.4 7.2 26.5 6.7 27.9 6.3C29.4 6 32.1 5.9 33.4 5.8ZM30.4 11.1C32.5 11.1 39.8 10.9 42 11.2C44.3 11.6 43.6 12.2 44.1 13.1C44.7 13.9 45.1 16.1 45.1 16.1L25.9 16.1C25.9 16.1 26.3 13.5 26.9 12.7C27.4 11.8 28.9 11.4 29.4 11.2C30 10.9 28.2 11 30.4 11.1ZM49.5 37.5C51.4 37.7 52 38.6 53 39.2C54.1 39.9 55.5 41.1 55.5 41.1L55.5 48C55.5 48 56.1 48.1 54.6 48.6C53.2 49.1 49.3 50.2 47 51C44.8 51.7 41.4 53.4 41.4 53.4L41.2 53.8C41.2 53.8 41.1 53.7 41.9 54.4C42.6 55 45.3 56.9 46 57.5C46.8 58 46.2 57.9 46.2 57.9C46.2 57.9 47.5 58.2 45.9 58.2C44.2 58.3 38.9 58.6 36.6 58.2C34.4 57.9 33.5 56.7 32.5 56C31.6 55.4 31.3 54.7 31.1 54.1C30.8 53.6 30.9 53.2 31.1 52.6C31.2 52.1 31.3 51.3 32 50.6C32.8 50 32.6 49.7 35.2 48.6C37.9 47.6 47.6 44.2 47.6 44.2L47.6 43.5C47.6 43.5 42.4 39.5 41.4 38.5C40.3 37.6 41.2 37.9 41.2 37.9C41.2 37.9 47.5 37.2 49.5 37.5ZM18.4 37.6C20 37.6 25.6 37.6 27.2 37.8C28.9 37.9 27.9 38.4 28.2 38.6C28.6 38.9 28.4 38.5 29.4 39C30.3 39.5 32.8 40.9 33.8 41.6C34.7 42.4 35 43.1 35.2 43.6C35.5 44.2 35.5 44.6 35.4 45C35.2 45.5 35.2 45.9 34.6 46.5C34.1 47 33.7 47.7 32.1 48.5C30.6 49.2 26.5 50.5 25.1 51C23.8 51.4 25.4 50.6 24.2 51C23.1 51.4 18.1 53.4 18.1 53.4C18.1 53.4 18.4 54 18.8 54.2C19.1 54.5 19.5 54.4 20.2 55C21 55.5 23.2 57.5 23.2 57.5L23.1 58.2C23.1 58.2 15.5 58.5 13.2 58C11 57.6 10.4 56.3 9.6 55.5C8.7 54.8 8.5 54.5 8.3 53.8C8.2 53 8.4 52.1 8.8 51.4C9.3 50.6 9.4 50.1 11.1 49.2C12.7 48.4 17.2 46.8 18.8 46.2C20.2 45.8 19 46.6 20.1 46.2C21.1 45.9 24.9 44 24.9 44C24.9 44 25.2 43.9 24.9 43.5C24.5 43.2 24 42.7 22.9 41.9C21.8 41 19.1 39.2 18.2 38.5C17.4 37.9 18.1 38 18.1 38C18.1 38 16.9 37.7 18.4 37.6Z"/>'
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
    svg: '<g transform="matrix(0.76 0 0 0.76 7.68 1.44)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M33.4 5.8C34.6 5.8 34.5 6.2 35.5 6.2C36.6 6.2 38.6 5.8 39.5 5.8C40.5 5.9 40.7 6.3 41.4 6.3C42 6.4 42.8 6.2 43.4 6.3C43.9 6.4 44.1 6.6 44.8 7C45.4 7.3 46.2 7.3 47 8.4C47.9 9.6 50 13.8 50 13.8C50 13.8 52.1 14 52.9 14.3C53.6 14.7 54.2 15.4 54.5 16.1C54.8 16.9 54.6 18.9 54.6 18.9C54.6 18.9 54.3 19.3 53.8 19.6C53.2 19.8 51.5 20.2 51.5 20.2C51.5 20.2 51.4 21.7 51.5 22.1C51.5 22.6 51.9 22.9 51.9 22.9C51.9 22.9 51.5 23.1 51.5 23.6C51.5 24 51.9 24.5 51.9 25.4C51.8 26.4 51.2 28.3 51 29.1C50.7 30 50.2 29.5 50 30.4C49.9 31.4 50.2 33.7 50 34.8C49.9 35.8 49 36.5 49 36.5C49 36.5 45 36.8 44 36.8C43.1 36.7 43.4 36.6 43 36.2C42.7 35.9 42.3 35.1 42.1 34.4C42 33.6 42.4 31.8 42.4 31.8C42.4 31.8 43.7 31.1 41.5 30.9C39.2 30.8 31.1 31 28.9 31.1C26.8 31.1 28.6 31.2 28.6 31.2C28.6 31.2 28.6 34.4 28.4 35.2C28.3 36.1 28.5 36.1 27.6 36.4C26.6 36.6 23.8 36.7 22.9 36.8C21.9 36.8 22.1 36.6 21.9 36.5C21.6 36.3 21.4 36.6 21.2 35.8C21.1 34.9 20.8 32.4 20.8 31.6C20.7 30.7 20.9 30.6 20.9 30.6C20.9 30.6 20.3 30 20.1 29.6C20 29.3 20.2 28.6 20.1 28.2C19.9 27.9 19.6 28 19.4 27.6C19.3 27.3 19.2 27.5 19.1 26.2C19.1 25 19.1 20.1 19.1 20.1C19.1 20.1 17.6 19.9 17.1 19.6C16.7 19.4 16.5 19.4 16.4 18.9C16.2 18.3 16.1 17 16.2 16.2C16.4 15.5 17 14.9 17.2 14.6C17.5 14.2 17.5 14.2 17.9 14.2C18.4 14.1 19.2 14.4 19.8 14.2C20.3 14.1 21 14 21.4 13.3C21.9 12.7 22 11.4 22.6 10.4C23.1 9.5 23.7 8.5 24.6 7.8C25.4 7.2 26.5 6.7 27.9 6.3C29.4 6 32.1 5.9 33.4 5.8ZM30.4 11.1C32.5 11.1 39.8 10.9 42 11.2C44.3 11.6 43.6 12.2 44.1 13.1C44.7 13.9 45.1 16.1 45.1 16.1L25.9 16.1C25.9 16.1 26.3 13.5 26.9 12.7C27.4 11.8 28.9 11.4 29.4 11.2C30 10.9 28.2 11 30.4 11.1ZM49.5 37.5C51.4 37.7 52 38.6 53 39.2C54.1 39.9 55.5 41.1 55.5 41.1L55.5 48C55.5 48 56.1 48.1 54.6 48.6C53.2 49.1 49.3 50.2 47 51C44.8 51.7 41.4 53.4 41.4 53.4L41.2 53.8C41.2 53.8 41.1 53.7 41.9 54.4C42.6 55 45.3 56.9 46 57.5C46.8 58 46.2 57.9 46.2 57.9C46.2 57.9 47.5 58.2 45.9 58.2C44.2 58.3 38.9 58.6 36.6 58.2C34.4 57.9 33.5 56.7 32.5 56C31.6 55.4 31.3 54.7 31.1 54.1C30.8 53.6 30.9 53.2 31.1 52.6C31.2 52.1 31.3 51.3 32 50.6C32.8 50 32.6 49.7 35.2 48.6C37.9 47.6 47.6 44.2 47.6 44.2L47.6 43.5C47.6 43.5 42.4 39.5 41.4 38.5C40.3 37.6 41.2 37.9 41.2 37.9C41.2 37.9 47.5 37.2 49.5 37.5ZM18.4 37.6C20 37.6 25.6 37.6 27.2 37.8C28.9 37.9 27.9 38.4 28.2 38.6C28.6 38.9 28.4 38.5 29.4 39C30.3 39.5 32.8 40.9 33.8 41.6C34.7 42.4 35 43.1 35.2 43.6C35.5 44.2 35.5 44.6 35.4 45C35.2 45.5 35.2 45.9 34.6 46.5C34.1 47 33.7 47.7 32.1 48.5C30.6 49.2 26.5 50.5 25.1 51C23.8 51.4 25.4 50.6 24.2 51C23.1 51.4 18.1 53.4 18.1 53.4C18.1 53.4 18.4 54 18.8 54.2C19.1 54.5 19.5 54.4 20.2 55C21 55.5 23.2 57.5 23.2 57.5L23.1 58.2C23.1 58.2 15.5 58.5 13.2 58C11 57.6 10.4 56.3 9.6 55.5C8.7 54.8 8.5 54.5 8.3 53.8C8.2 53 8.4 52.1 8.8 51.4C9.3 50.6 9.4 50.1 11.1 49.2C12.7 48.4 17.2 46.8 18.8 46.2C20.2 45.8 19 46.6 20.1 46.2C21.1 45.9 24.9 44 24.9 44C24.9 44 25.2 43.9 24.9 43.5C24.5 43.2 24 42.7 22.9 41.9C21.8 41 19.1 39.2 18.2 38.5C17.4 37.9 18.1 38 18.1 38C18.1 38 16.9 37.7 18.4 37.6Z"/></g><text x="32" y="60" font-size="13">OFF</text>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.1 11.1C32.5 11 33.7 11 35 11.2C36.2 11.3 37.2 11.5 38.5 11.9C39.7 12.4 41.2 13.1 42.5 13.8C43.7 14.4 44.8 15.3 45.8 16.1C46.7 16.8 47.3 17.5 48 18.4C48.8 19.2 49.4 19.9 50 21.1C50.7 22.4 51.7 24.4 52.1 25.8C52.6 27.1 52.8 27.7 53 29.2C53.1 30.8 53 33.5 53 34.9C52.9 36.2 52.8 36.3 52.5 37.4C52.1 38.4 51.6 39.9 51 41C50.5 42.2 49.9 43.3 49 44.5C48.2 45.6 46.8 47.1 45.8 48C44.7 49 44.2 49.4 43 50C41.7 50.7 39.8 51.7 38.5 52.1C37.1 52.6 36.5 52.8 35 53C33.4 53.1 30.5 53 29.1 53C27.8 52.9 27.9 52.9 26.6 52.5C25.4 52 23.2 51.2 21.9 50.5C20.5 49.7 19.4 49 18.4 48.1C17.5 47.3 16.8 46.6 15.9 45.6C15.1 44.7 14.3 43.3 13.7 42.2C13 41.2 12.7 40.5 12.2 39.2C11.8 38 11.3 36.6 11.2 35C11 33.3 11.1 30.5 11.2 29.1C11.2 27.8 11.2 28 11.7 26.8C12.1 25.5 12.9 23.2 13.7 21.9C14.4 20.5 14.9 19.6 15.9 18.4C16.9 17.3 18.4 16 19.6 15.1C20.9 14.1 22.5 13.3 23.6 12.8C24.8 12.2 25.4 11.9 26.6 11.7C27.9 11.4 29.8 11.1 31.1 11.1ZM30.1 13.3C31.2 13.2 32.8 13.2 34 13.3C35.1 13.4 35.8 13.5 37 13.9C38.3 14.3 40.2 15.2 41.4 15.8C42.5 16.3 43 16.7 43.9 17.4C44.7 18.2 45.9 19.4 46.6 20.2C47.4 21.1 47.8 21.8 48.4 22.8C48.9 23.7 49.5 24.9 49.9 26.1C50.2 27.4 50.6 29 50.8 30.2C50.9 31.5 50.9 32.6 50.8 33.9C50.6 35.1 50.2 36.8 49.9 38C49.5 39.1 49.1 40 48.5 41C48 41.9 47.4 42.9 46.6 43.9C45.9 44.8 44.7 45.9 43.9 46.6C43 47.4 42.5 47.8 41.4 48.4C40.2 48.9 38.3 49.8 37 50.1C35.8 50.5 35.1 50.6 34 50.8C32.8 50.9 31.3 50.9 30.1 50.8C29 50.6 28.3 50.5 27.1 50.1C25.8 49.8 23.9 48.9 22.8 48.4C21.6 47.8 21.1 47.4 20.2 46.6C19.4 45.9 18.2 44.7 17.4 43.9C16.7 43 16.3 42.5 15.8 41.4C15.2 40.2 14.3 38.3 13.9 37C13.5 35.8 13.4 35.1 13.3 34C13.2 32.8 13.2 31.3 13.3 30.1C13.4 29 13.5 28.3 13.9 27.1C14.3 25.8 15.2 23.9 15.8 22.8C16.3 21.6 16.7 21.1 17.4 20.2C18.2 19.4 19.4 18.2 20.2 17.4C21.1 16.7 21.6 16.3 22.8 15.8C23.9 15.2 25.8 14.3 27.1 13.9C28.3 13.5 28.9 13.4 30.1 13.3ZM12.8 12.8L15.3 14.9C15.3 14.9 15.7 15.1 15.2 15.8C14.8 16.4 13.5 17.6 12.7 18.9C11.8 20.1 10.3 23.1 10.3 23.1C10.3 23.1 10.2 23.3 9.7 23.1C9.2 23 7.8 22.5 7.3 22.2C6.9 22 6.8 21.6 6.8 21.6C6.8 21.6 7.8 19.2 8.4 18.1C9.1 17.1 9.8 16 10.6 15.1C11.3 14.2 12.8 12.8 12.8 12.8ZM51.1 12.8C51.1 12.8 52.8 14.1 53.5 14.9C54.2 15.8 54.7 16.5 55.4 17.6C56 18.8 57.4 21.6 57.4 21.6C57.4 21.6 57.2 22 56.8 22.2C56.3 22.5 55 23 54.5 23.1C54 23.3 53.8 23.1 53.8 23.1C53.8 23.1 52.3 20.1 51.5 18.9C50.6 17.6 49.3 16.4 48.9 15.8C48.4 15.1 48.5 15.3 48.9 14.8C49.2 14.3 51.1 12.8 51.1 12.8ZM5.7 26.6C5.7 26.6 7.3 26.7 7.8 26.9C8.4 27 9.1 27.4 9.1 27.4C9.1 27.4 8.6 29.5 8.6 31.1C8.6 32.6 9.1 36.6 9.1 36.6C9.1 36.6 7 37.4 6.3 37.5C5.7 37.7 5.2 37.4 5.2 37.4C5.2 37.4 4.8 36.3 4.8 35C4.7 33.6 4.7 30.4 4.8 29.1C4.8 27.8 4.9 27.6 5 27.1C5.2 26.7 5.7 26.6 5.7 26.6ZM57.9 26.6C58.5 26.4 58.9 26.8 58.9 26.8C58.9 26.8 59.3 27.8 59.4 29.1C59.4 30.5 59.4 33.7 59.4 35C59.3 36.2 59.2 36.5 59 37C58.9 37.4 58.5 37.5 58.5 37.5L55 36.6C55 36.6 55.5 34.3 55.5 32.8C55.5 31.2 55 27.4 55 27.4C55 27.4 57.2 26.7 57.9 26.6ZM9.9 40.9C9.9 40.9 10 40.4 10.4 41.1C10.9 41.9 11.8 44 12.7 45.2C13.5 46.5 15.4 48.8 15.4 48.8L12.9 51.4C12.9 51.4 12.4 51.1 11.8 50.5C11.3 50 10.6 49.3 9.8 48C8.9 46.6 6.8 42.5 6.8 42.5C6.8 42.5 6.8 42.1 7.3 41.9C7.9 41.6 9.9 40.9 9.9 40.9ZM54.1 40.9C54.1 40.9 56.2 41.6 56.8 41.9C57.3 42.1 57.4 42.5 57.4 42.5C57.4 42.5 55.4 46.5 54.4 48C53.3 49.4 51.1 51.4 51.1 51.4L48.6 48.8C48.6 48.8 50.6 46.5 51.5 45.2C52.3 44 53.2 41.9 53.6 41.1C54.1 40.4 54.1 40.9 54.1 40.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.6 5.8C40.6 5.8 44.4 7.3 46 8.2C47.6 9.2 48.9 10.2 50.2 11.4C51.6 12.7 52.9 14.1 54 15.7C55.1 17.2 56.4 19.6 56.9 20.6C57.3 21.5 57 21.2 56.5 21.6C56.1 21.9 54.1 22.8 54.1 22.8C54.1 22.8 56.1 38.9 56.5 42.9C56.9 46.8 56.8 45.4 56.5 46.5C56.3 47.6 55.9 48.6 55.2 49.5C54.6 50.4 53.7 51.2 52.6 51.9C51.6 52.5 50.2 52.9 49 53C47.9 53.2 46.7 52.8 45.8 52.5C44.8 52.3 44.2 51.8 43.5 51.4C42.9 50.9 42.5 50.6 42 49.8C41.4 48.9 40.6 49.1 40.4 46C40.1 43 40.6 34.4 40.4 31.6C40.1 28.9 39.5 29.9 39 29.4C38.4 28.9 37.1 28.6 37.1 28.6L37 54.2L39.1 54.5L39 58L7 58L7 54.5L9.2 54.2C9.2 54.2 9 17.2 9.2 9.3C9.3 1.5 9.6 7.8 9.9 7.2C10.3 6.7 7.5 6.5 11.4 6.2C15.4 6 29.8 6 33.9 6C37.9 6.1 35.1 6.4 35.5 6.7C36 6.9 36.2 7.2 36.5 7.5C36.7 7.9 36.9 6.1 37 8.9C37.1 11.8 37 24.6 37 24.6C37 24.6 38.8 25 39.5 25.2C40.3 25.5 40.7 25.7 41.4 26.2C42 26.8 42.8 27.7 43.2 28.4C43.7 29.2 44 28 44.1 30.8C44.3 33.5 44.1 42.2 44.1 44.9C44.2 47.5 44.2 45.8 44.5 46.4C44.7 46.9 45.1 47.6 45.6 48C46.1 48.5 46.8 48.9 47.5 49C48.1 49.2 48.8 49.3 49.5 49C50.3 48.8 51.4 48.2 52 47.5C52.5 46.7 53.2 49.2 52.9 44.5C52.5 39.9 50.3 24.2 49.5 19.4C48.8 14.7 48.7 17.1 48.2 16.2C47.8 15.3 47.4 14.9 46.6 14.1C45.9 13.2 44.6 12 43.5 11.2C42.5 10.5 40.4 9.4 40.4 9.4C40.4 9.4 40.2 6.8 40.2 6.2C40.3 5.5 40.6 5.8 40.6 5.8ZM13.1 10.1L33 10.1L33 24.6L13.1 24.6L13.1 10.1ZM13.1 28.8L33 28.8L33 54.2L13.1 54.2L13.1 28.8Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.9 16.2C31.4 16 32.9 16.2 34 16.2C35.2 16.3 35.3 16.2 36.5 16.8C37.8 17.2 40.2 19.1 41.8 19.2C43.3 19.4 44.5 17.8 46 17.4C47.6 17.1 49.3 17 50.9 17.2C52.4 17.5 54.1 18.2 55.4 18.9C56.6 19.7 58.2 21.9 58.2 21.9C58.2 21.9 58.5 22.1 58 22.4C57.6 22.8 55.6 23.9 55.6 23.9C55.6 23.9 54.2 22.4 53.5 21.9C52.7 21.4 52 21.1 51.1 20.9C50.3 20.7 49.2 20.5 48.1 20.6C47.1 20.8 44.6 21.8 44.6 21.8C44.6 21.8 46.4 23.6 47.1 24.9C47.9 26.2 48.7 28.2 49.1 29.6C49.6 30.9 49.7 31.9 49.9 33.2C50 34.6 50 36.1 49.9 37.5C49.7 38.9 49.3 40.5 49 41.6C48.6 42.8 48.1 43.7 47.6 44.5C47.2 45.2 46.8 45.7 46.2 46.1C45.7 46.6 44.9 47 44.4 47.2C43.8 47.5 43.5 47.7 42.9 47.8C42.2 47.8 41.5 48 40.6 47.8C39.8 47.5 38.7 47.1 37.9 46.5C37 45.8 36.3 44.9 35.6 43.8C35 42.6 34.5 40.9 34.1 39.5C33.8 38.2 33.6 37.4 33.6 35.9C33.6 34.3 33.8 31.9 34.1 30.2C34.5 28.6 35.1 27.2 35.9 25.8C36.6 24.3 38.9 21.6 38.9 21.6C38.9 21.6 39.4 21.7 38.6 21.4C37.9 21.1 35.9 20.1 34.6 19.9C33.4 19.6 32.3 19.6 31.1 19.6C30 19.7 28.6 20 27.6 20.4C26.6 20.7 25.1 21.6 25.1 21.6C25.1 21.6 26.5 23 27.1 24.1C27.8 25.1 28.6 26.7 29.1 27.9C29.6 29.2 29.9 30.4 30.1 31.8C30.3 33.1 30.4 34.4 30.4 35.9C30.3 37.3 30 39.1 29.6 40.5C29.3 41.8 28.9 42.8 28.4 43.8C27.8 44.8 27 45.8 26.1 46.5C25.3 47.1 24.2 47.5 23.4 47.8C22.5 48 22.1 48 21.1 47.8C20.2 47.5 18.7 47 17.8 46.1C16.8 45.3 16.1 44 15.6 42.9C15 41.7 14.6 40.6 14.3 39C14.1 37.3 14 34.8 14.2 33.1C14.3 31.5 14.6 30.3 15.1 28.9C15.5 27.6 16.1 26.1 16.9 24.9C17.6 23.8 19.4 21.8 19.4 21.8C19.4 21.8 17 20.8 15.9 20.6C14.9 20.5 13.8 20.7 12.9 20.9C12.1 21 11.6 21.1 10.8 21.6C10.1 22.1 8.3 23.9 8.3 23.9L5.8 22.1C5.8 22.1 5.8 21.6 6.2 21.1C6.5 20.7 6.7 20.3 7.7 19.6C8.7 19 10.6 17.8 12.2 17.4C13.7 17.1 15.2 16.9 16.9 17.2C18.6 17.6 22.4 19.2 22.4 19.2C22.4 19.2 23.8 18.1 25.1 17.6C26.3 17.1 28.4 16.5 29.9 16.2ZM22.1 23.9C22.1 23.9 22.9 24.3 23.4 24.9C23.8 25.4 24.4 26 24.9 27.2C25.5 28.5 26.4 30.7 26.6 32.4C26.9 34 26.8 35.6 26.6 37C26.5 38.3 26.3 39.4 25.9 40.5C25.6 41.5 25 42.6 24.4 43.2C23.8 43.9 23 44.1 22.4 44.2C21.7 44.4 21.2 44.1 20.6 43.9C20.1 43.6 19.7 43.2 19.2 42.5C18.8 41.7 18.3 40.2 18.1 39.1C17.8 38.1 17.7 37.1 17.6 36C17.6 34.9 17.7 33.6 17.9 32.5C18 31.5 18.2 30.6 18.6 29.6C18.9 28.7 19.4 27.6 19.9 26.6C20.5 25.7 22.1 23.9 22.1 23.9ZM41.6 23.9C41.6 23.9 42.6 24.6 43.2 25.4C43.9 26.3 44.8 28.1 45.2 29.1C45.7 30.1 45.8 30.4 46 31.4C46.1 32.4 46.4 33.8 46.4 35C46.4 36.3 46.2 38.1 46 39.2C45.7 40.4 45.4 41.1 45 41.9C44.7 42.6 44.2 43.2 43.6 43.6C43.1 44 42.4 44.2 41.9 44.2C41.3 44.3 40.9 44.2 40.4 43.9C39.9 43.5 39.3 42.9 38.9 42.2C38.4 41.6 38.1 40.6 37.9 39.8C37.6 38.9 37.4 38.2 37.4 37C37.3 35.7 37.3 33.5 37.4 32.4C37.4 31.2 37.5 31.1 37.9 30.1C38.2 29.2 38.8 27.6 39.5 26.6C40.1 25.5 41.6 23.9 41.6 23.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.8 18.9C18.3 18.8 38.8 18.7 44.4 18.9C49.9 19.2 45.6 19.8 46 20.1C46.3 20.5 46.3 19.9 46.5 21.1C46.6 22.3 46.8 27.4 46.8 27.4C46.8 27.4 50.4 27.4 51.5 27.4C52.5 27.5 52.5 27.6 53.2 27.9C54 28.2 54.8 28.6 55.6 29.2C56.5 29.9 57.9 31 58.5 31.4C59 31.9 58.9 32.1 58.9 32.1L53.9 39.5C53.9 39.5 50.7 37.2 49.5 36.8C48.4 36.3 46.8 36.6 46.8 36.6C46.8 36.6 46.6 41.8 46.4 43.1C46.1 44.5 45.8 44.2 45.4 44.5C44.9 44.9 49.3 45.1 43.9 45.2C38.4 45.4 17.8 45.2 12.4 45.1C7.1 45.1 11.9 45.1 11.6 44.8C11.2 44.4 10.5 44.4 10.2 43C10 41.7 10.1 36.8 10.1 36.8L5.2 36.6L5.2 34L12.8 34C12.8 34 12.8 40.6 12.8 42C12.9 43.4 13.2 42.5 13.2 42.5C13.2 42.5 37.9 42.6 43 42.5C48.1 42.5 43.8 42 43.8 42L43.9 34C43.9 34 48.4 33.7 50 34C51.5 34.2 53 35.5 53 35.5L55 32.8C55 32.8 54 31.5 53.5 31.1C52.9 30.8 53.5 30.5 51.9 30.4C50.2 30.2 43.9 30.2 43.9 30.2C43.9 30.2 43.8 23.5 43.8 22.1C43.7 20.6 43.5 21.6 43.5 21.6C43.5 21.6 18.2 21.6 13.2 21.6C8.1 21.7 12.9 20.6 12.8 21.9C12.8 23.3 12.8 29.9 12.8 29.9L5.2 30.1L5.2 27.4C5.2 27.4 8.9 27.5 9.8 27.4C10.6 27.4 10.2 27.1 10.2 27.1C10.2 27.1 10.1 22.3 10.2 21.1C10.4 19.8 10.8 19.9 11.2 19.6C11.7 19.2 7.2 19 12.8 18.9Z"/><g fill="currentColor" stroke="none"><circle cx="17.5" cy="26" r="1.8"/><circle cx="24.7" cy="26" r="1.8"/><circle cx="31.9" cy="26" r="1.8"/><circle cx="39" cy="26" r="1.8"/><circle cx="21.1" cy="32" r="1.8"/><circle cx="28.3" cy="32" r="1.8"/><circle cx="35.5" cy="32" r="1.8"/><circle cx="17.6" cy="38.1" r="1.8"/><circle cx="24.7" cy="38.1" r="1.8"/><circle cx="31.9" cy="38.1" r="1.8"/><circle cx="39.1" cy="38.1" r="1.8"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M46 6.3C46.7 6.3 47.6 6.4 48.5 6.8C49.3 7.1 49.4 6.4 50.9 8.4C52.3 10.4 56 16.7 57.1 18.8C58.3 20.8 57.7 19.9 57.9 20.6C58 21.2 58.1 21.6 58 22.4C57.8 23.3 57.3 24.7 56.8 25.4C56.2 26.2 58.4 24.9 54.8 27.1C51.1 29.4 39 36.9 35.1 38.9C31.3 40.8 32.4 39.1 31.6 39C30.7 39 30.4 38.7 29.9 38.4C29.3 38 28.4 37 28.4 37C28.4 37 25.9 38.4 25.1 38.6C24.4 38.9 24.8 39.9 23.6 38.4C22.5 36.9 19.2 31.3 18.4 29.6C17.5 28 18.1 28.9 18.6 28.4C19.2 27.8 21.8 26.1 21.8 26.1C21.8 26.1 21.3 23.7 21.4 22.8C21.4 21.8 21.8 21.1 22.2 20.4C22.7 19.8 21.2 20.5 24.2 18.6C27.2 16.6 36.9 10.9 40.2 8.9C43.6 7 43.2 7.2 44.1 6.8C45.1 6.3 45.2 6.3 46 6.3ZM45.9 9.2C49.6 7.2 47 9.2 47.5 9.4C47.9 9.6 47.5 8.6 48.8 10.4C50 12.3 53.7 18.4 54.8 20.4C55.8 22.5 55.1 22 55 22.6C54.9 23.2 54.5 23.6 54.1 24.1C53.8 24.5 53 24.9 52.5 25.1C52.1 25.2 51.9 25.1 51.5 24.9C51.2 24.8 50.7 24.5 50.5 24.1C50.2 23.6 50 22.2 50 22.2L48.8 21.6C48.8 21.6 48.1 22 48 22.4C47.8 22.7 47.9 23.3 47.8 23.6C47.6 24 47.4 24.4 47 24.6C46.5 24.9 45.5 25.2 45 25.1C44.4 24.9 43.8 24.3 43.5 23.9C43.2 23.4 43.3 22.6 43.1 22.2C43 21.9 42.7 21.8 42.5 21.6C42.2 21.5 42.1 21.6 41.9 21.6C41.6 21.7 41.4 21.7 41.1 22.1C40.9 22.6 40.6 24.1 40.2 24.6C39.9 25 39.6 25 39.2 25.1C38.9 25.1 38.6 25.2 38.1 25.1C37.7 24.9 37 24.4 36.6 23.9C36.3 23.4 36.1 22.1 36.1 22.1L35 21.6C35 21.6 34.3 22 34.1 22.4C34 22.7 34.1 23.4 34 23.8C33.8 24.1 33.6 24.3 33.4 24.6C33.1 24.8 32.7 25 32.4 25.1C32 25.1 31.7 25.2 31.2 25.1C30.8 24.9 30.1 24.4 29.8 23.9C29.4 23.5 29.4 22.2 29.4 22.2L28.1 21.6C28.1 21.6 27.6 21.7 27.4 22.1C27.3 22.4 27.2 23.3 27.1 23.8C26.9 24.2 26.6 24.4 26.4 24.6C26.1 24.9 25.8 25 25.4 25.1C25.1 25.1 24.4 24.9 24.4 24.9C24.4 24.9 24 23.9 24.1 23.4C24.3 22.8 21.5 23.8 25.1 21.4C28.8 19.1 42.1 11.2 45.9 9.2ZM28.2 25.9C28.2 25.9 30.3 27.2 31.1 27.4C32 27.6 32.7 27.4 33.4 27.1C34 26.9 35.1 25.9 35.1 25.9C35.1 25.9 36.4 26.8 36.9 27.1C37.4 27.3 37.6 27.3 38.1 27.4C38.7 27.4 39.6 27.4 40.2 27.1C40.9 26.9 42 25.9 42 25.9C42 25.9 43.3 26.8 43.8 27.1C44.2 27.3 44.4 27.4 45 27.4C45.6 27.4 46.7 27.3 47.4 27.1C48 26.8 48.9 25.9 48.9 25.9L49.8 26.8C49.8 26.8 37.4 34.4 34.5 36C31.5 37.5 33.1 36.6 32.1 36.2C31.2 35.9 29.7 34.3 28.9 34C28.1 33.6 28 33.8 27.4 34C26.7 34.3 24.9 35.4 24.9 35.4C24.9 35.4 22.3 31 21.8 30.1C21.2 29.1 21.6 29.8 21.9 29.6C22.1 29.3 23 29 23.4 28.6C23.9 28.3 24.1 27.6 24.6 27.4C25.2 27.1 26 27.3 26.6 27.1C27.2 26.8 28.2 25.9 28.2 25.9ZM16.9 32.9C16.9 32.9 16.9 32.4 17.4 33.4C18 34.3 20.2 38.5 20.2 38.5C20.2 38.5 18.7 40.4 18.1 41.8C17.4 43.1 16.8 45 16.4 46.8C16 48.5 15.8 50.2 15.7 52C15.5 53.8 15.7 57.5 15.7 57.5L6.2 57.6C6.2 57.6 6 57.1 6 56C6.1 55 6.2 53.4 6.8 51.1C7.3 48.9 8.4 45 9.4 42.5C10.5 40.1 11.7 38.2 12.9 36.5C14.2 34.9 16.9 32.9 16.9 32.9ZM15.6 37.6L16.6 39.1C16.6 39.1 15.4 41 14.9 42C14.5 43.1 14.2 43.5 13.8 45.2C13.4 47 12.8 51.5 12.6 52.9C12.3 54.2 12.3 53.1 12.3 53.1L10.6 53.1C10.6 53.1 10.6 50.8 10.8 49.5C11.1 48.3 11.5 46.7 11.8 45.5C12.2 44.2 12.5 43.2 13.2 41.9C13.8 40.5 15.6 37.6 15.6 37.6Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.8 8.8C21.8 8.8 22.2 8.7 22.4 9.2C22.6 9.6 22.9 11.1 22.9 11.6C23 12 23.3 11.7 22.8 11.9C22.2 12.2 19.6 13.2 19.6 13.2L17.8 10.8C17.8 10.8 18.1 10.3 18.8 9.9C19.4 9.6 21.8 8.8 21.8 8.8ZM25.6 8.8C25.6 8.8 26.6 8.8 27.4 9.2C28.1 9.5 29.9 10.7 29.9 10.7C29.9 10.7 30.1 10.7 29.9 11.2C29.6 11.6 28.6 12.8 28.2 13.2C27.9 13.5 28.3 13.4 27.8 13.2C27.2 13.1 24.9 11.9 24.9 11.9C24.9 11.9 24.9 10 25.1 9.4C25.2 8.9 25.6 8.8 25.6 8.8ZM38 8.8L38.9 9.2L39.1 11.8L36 13.2L34 10.8C34 10.8 34.4 10.3 35 9.9C35.7 9.6 38 8.8 38 8.8ZM42 8.8C42 8.8 43 8.8 43.6 9.2C44.3 9.5 46.1 10.7 46.1 10.7C46.1 10.7 46.3 10.9 46 11.3C45.8 11.8 44.5 13.2 44.5 13.2L41.2 11.9C41.2 11.9 41.2 10.3 41.4 9.8C41.5 9.2 42 8.8 42 8.8ZM15.8 13.2L18.4 14.9C18.4 14.9 17.5 16.8 17.4 17.8C17.2 18.7 17.2 20.6 17.2 20.6C17.2 20.6 14.9 20.8 14.3 20.8C13.8 20.7 14 21.1 13.9 20.4C13.9 19.6 13.9 17.4 14.2 16.2C14.4 15.1 15 14.1 15.2 13.6C15.5 13 15.8 13.2 15.8 13.2ZM31.8 13.2C32.2 13 32.2 13.1 32.6 13.3C33.1 13.6 34.6 14.8 34.6 14.8C34.6 14.8 34 16.2 33.9 16.9C33.7 17.5 33.9 18.4 33.8 18.8C33.6 19.1 33.7 19.2 33.1 19.2C32.6 19.3 30.4 18.9 30.4 18.9C30.4 18.9 30.3 17.5 30.1 16.9C30 16.2 29.4 15.1 29.4 15.1C29.4 15.1 29.2 14.8 29.6 14.4C30 14.1 31.2 13.3 31.8 13.2ZM48.1 13.2C48.1 13.2 48.5 13 48.8 13.6C49 14.1 49.6 15.1 49.9 16.2C50.1 17.4 50.1 19.6 50 20.4C50 21.1 50.1 20.7 49.6 20.8C49.1 20.8 47.5 20.8 47 20.8C46.5 20.7 46.7 20.9 46.6 20.4C46.6 19.9 46.8 18.7 46.6 17.8C46.5 16.8 45.6 14.8 45.6 14.8L48.1 13.2ZM30.2 21.2C32.5 21.1 33.9 21.1 36.4 21.4C38.8 21.6 42.5 22.2 45.1 22.9C47.8 23.6 50.2 24.6 52.4 25.6C54.5 26.5 58.2 28.9 58.2 28.9C58.2 28.9 49.3 44.7 47 48.6C44.8 52.6 44.5 52.5 44.5 52.5C44.5 52.5 41.8 50.8 40 50.1C38.1 49.5 35.2 49 33.6 48.8C32 48.5 31.6 48.6 30.4 48.8C29.1 48.9 28.1 48.9 26.2 49.5C24.4 50.1 19.2 52.4 19.2 52.4C19.2 52.4 8 33.1 5.8 29.1C3.5 25.2 5.5 28.9 6 28.6C6.4 28.2 6.9 27.8 8.6 27.1C10.2 26.3 13.6 24.7 15.9 23.9C18.3 23 20.4 22.5 22.8 22.1C25.1 21.6 28 21.4 30.2 21.2ZM28.9 24.6C30.9 24.5 32.8 24.5 35 24.6C37.3 24.8 40.3 25.3 42.5 25.8C44.8 26.2 46.6 26.8 48.5 27.6C50.3 28.3 53.9 30.1 53.9 30.1L43.5 48C43.5 48 39.5 46.4 37.6 46C35.8 45.5 34.3 45.4 32.5 45.4C30.8 45.3 28.9 45.5 27.4 45.8C25.8 46 24.5 46.5 23.4 46.9C22.2 47.2 20.6 48 20.6 48C20.6 48 22.1 50.9 20.4 47.9C18.6 44.9 10.2 30.1 10.2 30.1C10.2 30.1 11.4 29.2 12.8 28.6C14.3 28 17.1 27 18.9 26.4C20.6 25.9 21.9 25.7 23.6 25.4C25.2 25.1 27 24.8 28.9 24.6Z"/><polygon fill="currentColor" stroke="none" points="30.2,26.5 30.2,31.0 33.8,31.0 33.8,26.5"/><polygon fill="currentColor" stroke="none" points="30.2,32.8 30.2,37.3 33.8,37.3 33.8,32.8"/><polygon fill="currentColor" stroke="none" points="30.2,39.1 30.2,43.5 33.8,43.5 33.8,39.1"/><polygon fill="currentColor" stroke="none" points="30.2,50.7 30.2,55.2 33.8,55.2 33.8,50.7"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.9 6.2C27.4 6.2 27.6 5.8 28.1 6.5C28.7 7.3 30.4 10.8 30.4 10.8L33.5 10.8C33.5 10.8 35.2 7.3 35.8 6.5C36.3 5.8 36.1 6.1 36.8 6.2C37.4 6.4 39.5 7.2 39.5 7.2L39.6 12.2L42.5 13.7L46.6 10.6C46.6 10.6 48.1 11.4 48.5 11.8C49 12.1 49.2 12.3 49.4 12.6C49.5 12.8 49.8 12.4 49.5 13.2C49.1 14.1 47.4 17.4 47.4 17.4C47.4 17.4 47.2 17.3 47.5 17.8C47.9 18.2 49.5 20.1 49.5 20.1L54.5 19.1L56 21.9C56 21.9 55.8 22.6 55.1 23.2C54.5 23.9 52.1 25.6 52.1 25.6L52.9 28.8C52.9 28.8 56.5 29.6 57.4 29.9C58.2 30.2 57.9 30 58 30.6C58.2 31.1 58.1 32.8 58 33.4C58 33.9 58.6 33.6 57.8 33.9C56.9 34.1 53.1 34.9 53.1 34.9L52.1 38L56 41.6C56 41.6 55.2 44 54.9 44.5C54.5 45.1 54.9 45 54 44.9C53.1 44.7 49.5 43.9 49.5 43.9L47.4 46.5C47.4 46.5 49.1 49.8 49.5 50.6C49.8 51.5 49.8 50.9 49.4 51.4C48.9 51.8 47 53.4 47 53.4L42.6 50.2L39.8 51.5C39.8 51.5 39.8 55.5 39.6 56.5C39.5 57.4 39.4 57 39 57.1C38.5 57.3 37.5 57.6 37 57.6C36.4 57.7 36.3 58.1 35.8 57.4C35.2 56.6 33.5 53 33.5 53L30.4 53C30.4 53 28.7 56.6 28.1 57.4C27.6 58.1 27.8 57.7 27.1 57.6C26.5 57.6 24.4 56.9 24.4 56.9L24.2 51.6L21.4 50.2L17.2 53.4C17.2 53.4 15.7 52.4 15.2 52C14.8 51.7 14.7 51.6 14.6 51.4C14.4 51.1 14.1 51.5 14.4 50.6C14.8 49.8 16.6 46.5 16.6 46.5L14.4 43.9L9.2 44.8L7.8 42C7.8 42 8.2 41.2 8.8 40.5C9.5 39.9 11.8 38.4 11.8 38.4L11.1 35.1C11.1 35.1 7.4 34.4 6.5 34C5.7 33.7 5.9 33.9 5.8 33.2C5.8 32.6 6 30.1 6 30.1L10.8 29.1C10.8 29.1 11.4 27.3 11.6 26.8C11.7 26.2 11.8 25.6 11.8 25.6L7.8 22.2C7.8 22.2 8.7 19.9 9.1 19.4C9.4 18.8 8.9 18.9 9.8 19.1C10.8 19.2 14.4 20.1 14.4 20.1L16.6 17.4C16.6 17.4 14.8 14.1 14.4 13.2C14.1 12.4 14.1 13 14.6 12.6C15 12.1 17.1 10.6 17.1 10.6L21.2 13.7L24.1 12.3C24.1 12.3 24.1 8.4 24.2 7.5C24.4 6.5 24.5 7 24.9 6.8C25.4 6.5 26.3 6.3 26.9 6.2ZM30.9 14.8C32.2 14.7 34.1 14.9 35.2 15.1C36.4 15.2 36.9 15.4 38 15.8C39 16.3 40.4 17 41.4 17.6C42.3 18.1 42.8 18.6 43.5 19.2C44.3 19.9 45 20.6 45.6 21.6C46.3 22.5 47.1 23.8 47.5 24.8C48 25.8 48.3 26.5 48.5 27.6C48.8 28.6 49.1 29.8 49.1 31.1C49.2 32.3 49 34 48.9 35.1C48.7 36.3 48.5 36.9 48 38C47.6 39 46.9 40.4 46.4 41.4C45.8 42.3 45.3 42.8 44.6 43.5C44 44.3 43.3 45 42.4 45.6C41.4 46.3 40.1 47.1 39.1 47.5C38.2 48 37.5 48.3 36.5 48.5C35.4 48.8 34 49.1 33 49.1C31.9 49.2 31.2 49.2 30.1 49C29.1 48.9 27.9 48.7 26.8 48.4C25.6 48 24.4 47.5 23.4 46.9C22.3 46.2 21.3 45.5 20.4 44.8C19.6 44 18.9 43.2 18.1 42.2C17.4 41.2 16.7 40.3 16.1 38.8C15.6 37.2 14.9 34.9 14.8 33.1C14.6 31.4 14.9 29.8 15.1 28.6C15.2 27.3 15.5 26.8 15.8 25.9C16.2 25 16.6 24 17.1 23.1C17.7 22.2 18.4 21.3 19.1 20.4C19.9 19.6 20.7 18.8 21.6 18.1C22.6 17.5 23.8 16.8 24.8 16.4C25.7 15.9 26.4 15.6 27.4 15.3C28.5 15.1 29.6 14.8 30.9 14.8ZM31.4 15.6C31.9 15.4 32.1 15.5 32.5 15.6C33 15.7 33.4 15.7 33.9 16.1C34.3 16.6 35.1 14.7 35.1 18.4C35.2 22.1 34.3 34.9 34 38.4C33.8 41.8 33.9 38.9 33.6 39.1C33.4 39.4 33 39.7 32.6 39.9C32.2 40 31.6 40 31.2 39.9C30.9 39.7 30.5 39.4 30.2 39.1C30 38.9 30 39.1 29.9 38.4C29.7 37.6 29.7 38.1 29.6 34.8C29.4 31.4 28.8 21.4 28.8 18.4C28.7 15.4 29 17.2 29.4 16.8C29.9 16.3 30.8 15.8 31.4 15.6Z"/><g fill="currentColor" stroke="none"><circle cx="31.9" cy="45.4" r="2.4"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.4 18.1C34.9 16.4 41.9 18.1 44.2 18.1C46.6 18.2 43.5 16.9 44.9 18.4C46.2 20 50.6 26 52.5 27.6C54.3 29.1 54.9 27.5 55.9 27.9C56.8 28.2 57.4 28.7 58 29.4C58.5 30.2 58.8 30.7 59 32.2C59.1 33.8 59 37.8 59 39C58.9 40.2 58.9 39.3 58.6 39.5C58.4 39.6 57.4 40 57.4 40L56.2 39.1C56.2 39.1 56.4 34.7 56.2 33.4C56.1 32 56 31.5 55.6 30.9C55.3 30.4 54.7 30.2 54 30.1C53.4 30 52.1 30.4 51.6 30.4C51.1 30.3 52.4 31.6 51 30.1C49.6 28.5 46.5 22.4 43.2 20.9C40 19.3 35.2 19.2 31.2 20.9C27.2 22.6 22.6 29.2 19.2 31.1C15.9 32.9 12.8 31.6 11.2 31.9C9.5 32.1 9.9 32.1 9.3 32.8C8.8 33.4 8.3 34.9 8.1 35.6C7.8 36.4 8.1 37.1 8.1 37.1C8.1 37.1 9 37.8 9.7 37.9C10.3 37.9 11.5 37.5 12.2 37.5C12.8 37.5 13.2 37.6 13.6 37.9C13.9 38.1 14 38.2 14.2 38.8C14.3 39.3 14.2 40.4 14.4 41.1C14.7 41.9 15.3 42.6 15.8 43C16.4 43.3 17.3 43.3 17.8 43.2C18.2 43.2 18.4 43 18.8 42.5C19.1 42.1 19.5 41.1 19.6 40.5C19.8 39.8 19.5 39.1 19.6 38.6C19.8 38.2 20 38 20.2 37.9C20.5 37.7 21.1 37.5 21.1 37.5L22.4 38.5C22.4 38.5 22.4 40.4 22.4 41.1C22.3 41.9 22 42.3 21.9 42.8C21.7 43.2 21.7 43.4 21.2 43.9C20.8 44.3 19.9 45.1 19.4 45.5C18.8 45.8 18.8 45.9 18.1 46C17.5 46 16.1 45.9 15.3 45.6C14.6 45.4 13.9 44.9 13.4 44.5C13 44.1 12.8 43.9 12.4 43.2C12.1 42.6 11.2 40.4 11.2 40.4C11.2 40.4 9.1 40.4 8.2 40.2C7.4 40.1 6.7 39.7 6.2 39.4C5.8 39 5.5 38.6 5.3 38.1C5.1 37.6 5 37.1 5 36.4C5.1 35.6 5.5 34.3 5.8 33.5C6.1 32.8 6.5 32.1 6.8 31.6C7.2 31 7.2 30.8 8 30.4C8.7 30 9.7 29.4 11.3 29.1C13 28.9 14.7 30.5 17.9 28.6C21 26.8 26.1 19.9 30.4 18.1ZM46.2 33.8C47 33.6 47.6 33.6 48.4 33.8C49.1 33.9 49.9 34.3 50.5 34.9C51.2 35.4 51.9 36.4 52.2 37.2C52.6 38.1 52.8 39 52.9 39.8C52.9 40.5 52.8 41 52.5 41.8C52.3 42.5 51.7 43.5 51.2 44C50.8 44.6 50.5 44.8 50 45.1C49.4 45.5 48.7 45.9 48 46C47.2 46 45.9 45.8 45.2 45.6C44.6 45.5 44.6 45.5 44.1 45C43.7 44.6 43.1 43.5 42.5 43.1C42 42.8 41 43.2 40.6 43.1C40.2 43.1 40.4 42.8 40.1 42.6C39.9 42.5 39 42.5 39 42.5L38.6 41.4C38.6 41.4 34.5 41.2 33.5 41.4C32.4 41.5 32.5 42.2 32.5 42.2C32.5 42.2 31.9 42.2 31.8 42C31.6 41.9 31.2 41.4 31.2 41.4C31.2 41.4 30.4 41.1 29.9 41.4C29.4 41.6 28.2 42.9 28.2 42.9L25.6 40L28.1 36.9C28.1 36.9 39.2 37.2 41.9 36.9C44.5 36.5 43.3 35.3 44 34.8C44.8 34.2 45.5 33.9 46.2 33.8ZM49.1 37.9C49.5 37.6 49.8 37.7 50.1 37.9C50.5 38 50.9 38.4 51 38.9C51.2 39.3 51.2 40.1 51 40.6C50.8 41.1 49.9 41.9 49.9 41.9C49.9 41.9 49.2 41.9 49 41.6C48.7 41.4 48.2 40.9 48 40.5C47.9 40 47.9 39.6 48 39.1C48.2 38.7 48.8 38.1 49.1 37.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.8 7.8C11.3 7.7 11.1 6.9 12.3 7.8C13.6 8.8 18.1 13.7 18.1 13.7C18.1 13.7 18.2 14 17.9 14.3C17.7 14.7 17.1 15.3 16.8 15.6C16.4 15.8 16.1 15.8 16.1 15.8C16.1 15.8 16.1 16.1 15.1 15.1C14 14.1 10.8 10.8 9.9 9.8C9.1 8.7 9.8 8.9 9.8 8.9C9.8 8.9 10.4 8 10.8 7.8ZM23.9 7.8L27.2 8L27.2 13.1C27.2 13.1 32.5 12.7 34 12.8C35.4 12.8 35.5 13.2 36 13.2C36.5 13.3 37 12.9 37 12.9L37 8L40.1 7.8C40.1 7.8 39.6 12.8 40.5 14.7C41.5 16.6 44.3 17.6 45.6 19.2C47 20.9 47.8 22.8 48.4 24.4C48.9 25.9 49 27.3 49.1 28.4C49.3 29.4 49.3 29.7 49.1 30.8C49 31.8 48.8 33.6 48.4 34.9C48 36.1 47.6 37.1 46.8 38.4C45.9 39.6 44.5 41.5 43.4 42.5C42.2 43.6 41 44.3 40 44.9C39 45.4 38.1 45.7 37.4 46C36.6 46.2 36.9 46.4 35.5 46.5C34 46.5 30.8 46.8 28.9 46.5C27 46.2 25.3 45.3 24.1 44.6C22.8 44 22 43.4 21.1 42.8C20.3 42.1 19.6 41.3 18.9 40.5C18.3 39.8 17.8 39 17.2 38C16.8 37.1 16.3 36.1 15.9 35C15.6 33.9 15.3 32.7 15.2 31.4C15 30.2 15.1 28.8 15.2 27.8C15.2 26.7 15.1 26.6 15.7 25.2C16.2 23.9 16.9 21.7 18.2 19.9C19.6 18 22.8 16.4 23.8 14.3C24.7 12.3 23.9 7.8 23.9 7.8ZM31.4 15.8C33 15.8 34.9 16.1 36.5 16.6C38 17.2 39.3 17.8 40.6 18.9C42 20.1 43.5 21.8 44.4 23.2C45.2 24.7 45.6 26.1 45.8 27.8C45.9 29.4 45.8 31.6 45.5 33.1C45.1 34.7 44.3 36 43.9 36.9C43.4 37.7 43.3 37.8 42.8 38.5C42.2 39.1 41.4 39.9 40.6 40.5C39.9 41.1 39.2 41.6 38.4 42C37.5 42.5 36.6 42.8 35.8 43C34.9 43.3 34.3 43.4 33 43.4C31.8 43.4 29.6 43.3 28.4 43C27.3 42.8 26.8 42.5 25.9 42C25.1 41.6 24.3 41.2 23.4 40.2C22.4 39.3 20.9 37.6 20.1 36.5C19.4 35.5 19.4 35.1 19.1 34C18.7 33 18.4 31.3 18.2 30.4C18.1 29.6 18.1 29.6 18.2 28.8C18.4 27.9 18.7 26.7 19.1 25.6C19.4 24.4 20.2 23 20.6 22.1C21.1 21.3 21.4 21 21.9 20.4C22.5 19.8 23.2 19.1 24.1 18.6C24.9 18 25.7 17.4 26.9 16.9C28.2 16.5 29.9 15.9 31.4 15.8ZM51.5 7.8C52.7 6.9 53.5 7.8 53.5 7.8L54.5 9.4C54.5 9.4 50.4 14 49.2 15.1C48.1 16.1 48 15.8 48 15.8C48 15.8 46.3 14.4 46 14.1C45.6 13.7 45.9 13.6 45.9 13.6C45.9 13.6 50.2 8.8 51.5 7.8ZM31.8 17.9C31.8 17.9 33 18.1 33.5 18.4C33.9 18.8 34.1 17.4 34.2 19.9C34.4 22.4 34.2 33.5 34.2 33.5C34.2 33.5 33.1 34.5 32.6 34.8C32.2 35 32.1 35 31.6 34.8C31.2 34.5 29.9 33.5 29.9 33.5C29.9 33.5 29.9 23 29.9 20.6C30 18.1 30.1 19.4 30.4 18.9C30.7 18.5 31.8 17.9 31.8 17.9ZM6.2 28.1L11.1 28.1L11.2 30.9L6.2 31.4L6.2 28.1ZM53.5 28.1L57.9 28.1L58 31.2L53.4 31.1L53.5 28.1ZM16.2 43.5C16.2 43.5 18 44.9 18.4 45.2C18.7 45.6 18.4 45.9 18.4 45.9C18.4 45.9 13.8 50.5 12.8 51.5C11.7 52.6 12.1 52.1 11.8 52.1C11.6 52.2 11.7 52.4 11.2 52C10.8 51.7 9.8 50.6 9.4 50.2C9.1 49.9 8.3 51 9.4 49.9C10.6 48.7 16.2 43.5 16.2 43.5Z"/><polygon fill="currentColor" stroke="none" points="48.0,43.2 55.0,50.1 52.6,52.6 45.6,45.7"/><polygon fill="currentColor" stroke="none" points="33.7,50.9 33.7,56.1 30.3,56.1 30.3,50.9"/><g fill="currentColor" stroke="none"><circle cx="32.1" cy="38.5" r="2.2"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.1 16.1L21.6 16.1C21.6 16.1 22.2 15.8 21.9 16.9C21.7 17.9 20.4 21.4 19.9 22.4C19.5 23.5 19.9 22.9 19.4 22.9C19 23 17.4 22.9 17.4 22.9L17.1 22.2L20.1 16.1ZM42.2 16.1L44.1 16.4C44.1 16.4 46.4 21.2 46.9 22.2C47.3 23.3 46.8 22.9 46.8 22.9C46.8 22.9 44.9 23 44.5 22.9C44 22.9 44.5 23.7 44 22.6C43.6 21.6 42.2 17.9 42 16.9C41.7 15.8 42.2 16.1 42.2 16.1ZM26.4 22.8C28.8 22.6 36 22.8 38.2 22.9C40.5 23.1 39.4 23.6 39.8 23.9C40.1 24.2 40.1 24.1 40.5 24.8C40.8 25.4 41.9 28.1 41.9 28.1C41.9 28.1 43.4 28.1 43.9 28.2C44.3 28.4 44.8 28.9 44.8 28.9L45 30.8L42.8 31.1C42.8 31.1 43 34.2 43 35.2C42.9 36.3 42.8 36.8 42.5 37.4C42.3 38 41.8 38 41.6 38.9C41.5 39.7 41.7 41.7 41.6 42.4C41.6 43 41.2 42.9 41.2 42.9L37.6 42.8L37.4 38.9L26.6 38.9L26.2 42.8C26.2 42.8 23.5 43 22.9 43C22.2 42.9 22.5 43.2 22.4 42.5C22.2 41.9 22.4 39.7 22.2 38.9C22.1 38 21.6 38 21.4 37.4C21.1 36.8 21 36.3 20.9 35.2C20.9 34.2 21.1 31.1 21.1 31.1L19.1 30.9L18.9 29.4C18.9 29.4 19.4 28.5 19.9 28.2C20.5 28 22.1 28.1 22.1 28.1C22.1 28.1 23.2 24.9 23.9 24.1C24.7 23.2 24.1 22.9 26.4 22.8ZM27.1 24.9C29.1 24.8 35.2 24.8 37.1 25.1C39 25.3 38.1 25.5 38.5 26.2C39 27 40 29.8 40 29.8L23.9 29.8C23.9 29.8 24.8 27.1 25.4 26.2C25.9 25.4 25.2 25.1 27.1 24.9ZM15.7 25.9C15.7 25.9 17.6 25.9 18.1 25.9C18.5 26 18.4 26.4 18.4 26.4C18.4 26.4 17 30.8 16.6 31.9C16.1 33.1 15.8 33 15.8 33L12.8 33L12.4 32.4L15.7 25.9ZM45.9 25.9C45.9 25.9 47.8 25.9 48.2 25.9C48.7 26 48.1 25.2 48.6 26.2C49.2 27.3 51 31.2 51.5 32.4C51.9 33.5 51.2 33 51.2 33C51.2 33 48.8 33.1 48.1 33C47.5 33 48.1 33.7 47.6 32.6C47.2 31.6 45.8 27.8 45.5 26.6C45.2 25.5 45.9 25.9 45.9 25.9ZM10.9 36.2C10.9 36.2 13.8 36.2 14.4 36.2C15.1 36.3 14.8 36.5 14.8 36.5C14.8 36.5 11.8 45.2 11.2 47C10.5 48.9 11.4 47.6 10.6 47.8C9.7 47.9 6 47.8 6 47.8C6 47.8 4.9 49 5.8 47C6.6 45.1 10.9 36.2 10.9 36.2ZM49.5 36.2C49.5 36.2 52.3 36.2 53 36.2C53.6 36.3 52.5 34.8 53.4 36.5C54.2 38.3 57.4 45.2 58.1 47C58.9 48.9 58 47.6 58 47.6C58 47.6 54.2 47.8 53.4 47.8C52.5 47.7 53.7 49.2 53 47.5C52.2 45.7 49.7 38.8 49.1 37C48.6 35.1 49.5 36.2 49.5 36.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.2 16.2C10.6 16.5 15.1 17.6 16.4 18.1C17.8 18.7 17.2 18.8 17.4 19.4C17.7 20 17.8 21.8 17.8 21.8L23.9 21.6L23.9 19.1C23.9 19.1 21.6 18.9 21.1 18.8C20.5 18.6 20.6 18.4 20.6 18.1C20.5 17.9 20.5 17.6 20.6 17.4C20.6 17.1 19.7 16.9 21.1 16.8C22.4 16.6 27.3 16.5 28.8 16.6C30.2 16.8 29.6 17.4 29.6 17.4C29.6 17.4 29.6 18.1 29.4 18.4C29.3 18.6 29.3 18.8 28.8 18.9C28.2 19 26.4 18.9 26.4 18.9L26.2 21.6C26.2 21.6 31.9 21.3 33.5 21.8C35.2 22.2 36 24.2 36 24.2C36 24.2 49.7 20.1 52.8 19.2C55.8 18.4 53.8 19.2 54.1 19.4C54.5 19.5 54.5 19.4 55 19.9C55.6 20.3 56.9 21.5 57.2 21.9C57.6 22.4 57.5 22.1 57.2 22.4C57 22.6 55.8 23.6 55.8 23.6L53.5 21.6C53.5 21.6 53.5 19.8 51.5 21.9C49.5 23.9 43.6 31.5 41.5 33.9C39.3 36.2 39.4 35.5 38.6 36C37.9 36.4 40.5 36.3 37.1 36.4C33.8 36.4 21.8 36.5 18.4 36.4C15 36.2 17.2 36 16.8 35.6C16.3 35.3 15.8 35.5 15.6 34.1C15.3 32.8 15.2 27.2 15.2 27.2C15.2 27.2 8.7 24.9 7.2 24.2C5.6 23.6 6.2 23.1 6.2 23.1C6.2 23.1 7.1 18.7 7.5 17.6C7.8 16.6 7.9 16.9 8.2 16.6C8.5 16.4 7.9 16 9.2 16.2ZM9.7 18.8L15.2 20.2L15.2 24.6L8.7 22.2L9.7 18.8ZM46.5 23.4C48.4 22.9 47 23.6 47 23.6C47 23.6 41.8 29.9 40.5 31.4C39.1 33 39.3 32.8 38.9 33.1C38.4 33.5 40.9 33.7 37.5 33.9C34.2 34 22.2 34.1 18.9 34C15.6 34 17.8 33.4 17.8 33.4L17.8 24.1C17.8 24.1 29.4 23.6 32.4 24.1C35.3 24.5 34.8 26.5 35.4 26.9C35.9 27.4 33.9 27.5 35.8 26.9C37.6 26.4 44.7 24 46.5 23.4ZM55.8 26.1L56.5 26.4C56.5 26.4 56.6 27.7 56.9 28.4C57.1 29.2 57.9 30.5 58 31.1C58.2 31.8 57.9 32.1 57.6 32.5C57.4 32.8 57 33.2 56.5 33.2C56.1 33.3 55.2 33.2 54.8 33C54.3 32.7 54.1 32.2 54 31.9C53.8 31.5 53.7 31.7 54 30.8C54.2 29.8 55.8 26.1 55.8 26.1ZM7.7 42.5C7.7 42.5 9 42.8 9.7 43.1C10.3 43.5 11.1 44.5 11.8 45C12.4 45.4 13.1 45.6 13.8 45.6C14.4 45.6 15.2 45.4 15.8 45C16.5 44.6 17.2 43.6 17.8 43.2C18.3 42.9 18.8 42.6 19.4 42.5C20 42.5 20.5 42.3 21.4 42.8C22.2 43.2 23.7 44.6 24.4 45C25.2 45.5 25.4 45.6 26.1 45.6C26.7 45.6 27.5 45.4 28.1 45C28.8 44.7 29.2 44 29.9 43.5C30.5 43.1 31.1 42.7 31.9 42.5C32.6 42.4 33.3 42.4 34.1 42.9C35 43.3 36.4 44.7 37.1 45.1C37.9 45.6 38 45.6 38.5 45.6C39.1 45.7 39.7 45.6 40.4 45.2C41 44.9 42 43.8 42.6 43.4C43.3 42.9 43.7 42.6 44.4 42.5C45 42.5 45.8 42.4 46.6 42.9C47.5 43.3 48.9 44.7 49.6 45.1C50.4 45.6 50.6 45.6 51.1 45.6C51.7 45.6 52.4 45.5 53 45.1C53.7 44.8 54.4 43.9 55 43.5C55.7 43 56.4 42.7 56.9 42.5C57.3 42.4 57.5 42.8 57.5 42.8L57.5 44.5C57.5 44.5 55.4 46.4 54.5 47C53.5 47.5 52.7 47.8 51.9 47.9C51 47.9 50.3 48 49.2 47.5C48.2 46.9 46.1 45.2 45.4 44.8C44.6 44.3 45.1 44.5 44.5 44.9C44 45.2 42.8 46.5 42 47C41.1 47.5 40.2 47.8 39.4 47.9C38.5 47.9 37.8 48 36.8 47.5C35.7 46.9 33.7 45.2 32.9 44.8C32 44.3 32.5 44.6 31.9 45C31.2 45.3 30.1 46.6 29.2 47C28.4 47.5 27.7 47.8 26.8 47.9C25.8 47.9 24.8 47.8 23.8 47.2C22.7 46.7 20.4 44.8 20.4 44.8C20.4 44.8 19.9 44.6 19.1 45C18.4 45.5 16.8 47 15.8 47.5C14.9 47.9 14.1 47.9 13.2 47.9C12.4 47.8 11.8 47.6 10.8 47C9.9 46.5 7.8 44.8 7.8 44.8L7.7 42.5Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.6 11.7L28.4 21.9L34 25.8L27.1 25.8L22.8 31.6L22.6 25.1L13.9 24.9L22.4 21.1L20.1 13.6L25.4 17.4L29.6 11.7ZM31.6 14.1C31.6 14.1 35 14.2 36.2 14.4C37.5 14.7 38.1 14.9 39.1 15.3C40.2 15.8 41.4 16.3 42.4 16.9C43.3 17.6 44.2 18.2 45 18.9C45.9 19.7 46.8 20.6 47.5 21.4C48.2 22.3 48.7 23.2 49.2 24.1C49.8 25.1 50.3 26.1 50.6 27.4C51 28.6 51.4 30.4 51.5 31.9C51.7 33.3 51.7 34.6 51.5 36C51.2 37.4 50.8 39 50.4 40.2C49.9 41.5 49.4 42.5 48.8 43.5C48.1 44.4 47.6 45.2 46.8 46.1C45.9 47 44.7 48.1 43.8 48.9C42.8 49.6 42.3 49.9 41.2 50.5C40.2 51 38.8 51.6 37.5 52C36.3 52.3 35.3 52.5 34 52.6C32.8 52.8 31.2 52.8 29.9 52.6C28.6 52.5 27.5 52.3 26.2 52C25 51.6 23.6 51 22.4 50.4C21.3 49.7 20.2 49 19.2 48.1C18.3 47.3 17.4 46.4 16.6 45.4C15.7 44.3 14.9 42.9 14.3 41.8C13.8 40.6 13.5 39.8 13.2 38.5C12.8 37.3 12.5 35.8 12.4 34.4C12.4 32.9 12.6 31.2 12.8 30.1C12.9 28.9 13.4 27.4 13.4 27.4L16.4 27.1C16.4 27.1 15.5 30.1 15.3 31.4C15.2 32.8 15.1 33.9 15.3 35.4C15.6 36.8 16.2 38.9 16.6 40.1C17.1 41.4 17.6 42.1 18.2 43C18.9 43.9 19.7 44.7 20.6 45.5C21.4 46.4 22.6 47.2 23.6 47.9C24.7 48.5 25.8 48.9 26.9 49.2C28.1 49.6 29.6 49.9 30.8 50C31.9 50.1 33 50 34 49.9C35.1 49.7 35.6 49.7 36.9 49.2C38.1 48.8 40 48 41.4 47.1C42.7 46.3 43.8 45.3 44.8 44.1C45.8 43 46.7 41.5 47.4 40.1C48 38.8 48.4 37.4 48.6 36C48.9 34.5 48.9 33 48.8 31.6C48.6 30.1 48.2 28.6 47.5 27.1C46.8 25.5 45.7 23.7 44.5 22.4C43.4 21.1 42.2 20.1 40.8 19.2C39.3 18.4 37.5 17.7 36 17.2C34.4 16.8 31.2 16.8 31.2 16.8L31.6 14.1ZM12.9 14.4L16.4 17.9C16.4 17.9 14.8 19.6 14.2 20.6C13.5 21.5 12.8 22.6 12.2 23.8C11.7 24.9 11.4 25.9 11.1 27.1C10.7 28.4 10.5 29.6 10.3 31.1C10.2 32.5 10.1 34 10.3 35.8C10.6 37.5 11.1 39.9 11.7 41.5C12.2 43 12.8 44 13.6 45.2C14.3 46.5 16.4 48.6 16.4 48.6L13.1 52.4C13.1 52.4 11 50.3 10.1 48.9C9.1 47.4 7.9 45.2 7.2 43.6C6.4 42.1 6.1 41 5.8 39.4C5.4 37.7 5.1 35.7 5 33.9C5 32 5.2 30.1 5.5 28.4C5.9 26.6 6.4 24.9 7 23.4C7.7 21.8 8.2 20.7 9.2 19.2C10.1 17.8 12.9 14.4 12.9 14.4ZM50.9 14.4C50.9 14.4 51.4 14.7 52 15.2C52.5 15.8 53.2 16.6 54 17.8C54.7 18.9 55.8 20.6 56.5 22.2C57.3 23.9 58.1 26.3 58.5 27.9C58.9 29.6 58.9 30.6 59 32.2C59 33.9 58.9 36 58.6 37.8C58.4 39.5 57.9 41.2 57.2 42.9C56.6 44.5 55.9 46.1 54.9 47.6C53.9 49.2 51.2 52.2 51.2 52.2C51.2 52.2 51.4 52.8 50.9 52.2C50.3 51.7 47.8 49 47.8 49C47.8 49 49.6 46.5 50.4 45.2C51.1 44 51.9 42.6 52.4 41.4C52.9 40.1 53.1 39.2 53.4 38C53.6 36.9 53.8 35.9 53.9 34.5C53.9 33.1 53.8 31.2 53.5 29.6C53.3 28.1 53 26.7 52.5 25.4C52 24 51.3 22.8 50.5 21.6C49.8 20.4 47.8 18.1 47.8 18.1L50.9 14.4ZM19.4 18.6L19.9 20.1L16.8 21.4L19.4 18.6ZM42.5 26.2C43.3 26.2 44.5 26.2 44.5 26.2L45.5 28.6C45.5 28.6 42.9 28.5 42 28.6C41 28.8 40.6 28.8 39.9 29.1C39.1 29.5 38.6 29.8 37.5 30.6C36.5 31.4 35.4 33.2 33.6 34C31.9 34.7 28.5 34.7 26.9 35C25.4 35.4 24.8 35.7 24.2 36C23.7 36.2 23.8 36.1 23.6 36.5C23.5 37 23.4 38.5 23.4 38.5C23.4 38.5 23.8 38.9 24.4 39C24.9 39 26.6 39 26.6 39C26.6 39 27 40.4 27.2 40.9C27.5 41.3 28 41.6 28.4 41.9C28.8 42.1 29.1 42.3 29.6 42.2C30.2 42.2 31.1 42.1 31.8 41.5C32.4 41 33.4 38.8 33.4 38.8C33.4 38.8 42.9 38.7 44.9 38.8C46.8 38.8 45.2 39 45.2 39L44.2 41C44.2 41 36.7 40.6 34.8 41C32.8 41.5 33 43 32.4 43.5C31.7 44.1 31.2 44 30.6 44.1C30.1 44.2 29.7 44.3 29.1 44.1C28.4 44 27.5 43.7 26.9 43.2C26.2 42.8 25.8 41.6 25.1 41.2C24.4 40.9 23.2 41.3 22.6 41.1C22 41 21.8 40.9 21.6 40.5C21.3 40.2 21.1 39.9 21.1 39.2C21 38.6 21.1 37.1 21.2 36.5C21.4 35.8 21.5 35.6 21.8 35.2C22 34.9 22.1 34.5 22.9 34.1C23.6 33.8 24.6 33.2 26.2 32.9C27.9 32.5 30.6 32.6 32.5 31.8C34.5 30.9 36.6 28.3 37.9 27.4C39.1 26.6 39.1 26.8 39.9 26.6C40.6 26.4 41.8 26.3 42.5 26.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.8 6.3C13.9 6.3 15.4 6.3 16.2 6.5C17.1 6.6 17.4 6.6 18.1 7C18.8 7.3 19.9 8 20.4 8.6C21 9.2 21.2 6.3 21.4 10.6C21.5 14.8 21.5 29.9 21.4 34.1C21.2 38.4 20.7 35.4 20.2 35.9C19.8 36.3 20.4 36.5 18.6 36.6C16.7 36.8 10.8 36.8 8.8 36.6C6.9 36.5 7.4 36.1 7 35.8C6.5 35.4 6.2 35.4 6 34.5C5.8 33.5 5.8 34.3 5.8 30.2C5.8 26.2 5.9 13.5 6 9.9C6.2 6.4 6.3 9.2 6.7 8.8C7 8.3 7.5 7.9 8.1 7.5C8.6 7.2 9.4 6.9 10.2 6.7C10.9 6.5 11.8 6.4 12.8 6.3ZM11.7 8.7C12.9 8.6 15.5 8.6 16.8 8.8C18 9.1 18.5 9.7 18.9 10.2C19.4 10.8 19.2 8.3 19.2 11.9C19.3 15.6 19.3 28.4 19.2 32C19.2 35.7 19.1 33.9 19.1 33.9C19.1 33.9 19.2 34.3 18.1 34.5C16.9 34.6 13.4 34.6 11.9 34.6C10.5 34.6 10 34.6 9.3 34.5C8.7 34.3 8.2 33.9 8.2 33.9C8.2 33.9 8 29.5 8 25.6C8 21.6 8 13.2 8.2 10.4C8.5 7.7 8.8 9.6 9.3 9.3C9.9 9.1 10.4 8.7 11.7 8.7ZM12.7 14.8C13.5 14.8 14.9 14.9 15.8 15.2C16.6 15.4 17.8 16.1 17.8 16.1L16.1 19.4C16.1 19.4 12.1 19.7 11.2 19.6C10.4 19.6 11.1 19.8 10.8 19.2C10.4 18.7 9.2 16.4 9.2 16.4C9.2 16.4 9.9 15.7 10.4 15.4C11 15.2 11.8 14.9 12.7 14.8ZM28.9 26.9C28.9 26.9 31.1 26.8 31.6 26.9C32.2 26.9 32.1 27.2 32.1 27.2C32.1 27.2 32.2 29.1 32 30.2C31.8 31.4 31.4 33 30.9 34.1C30.5 35.3 30.1 36.1 29.6 37C29.1 37.8 28.4 38.8 27.9 39.4C27.5 39.9 27.2 40.2 26.9 40.5C26.5 40.7 26.5 40.8 26.1 40.5C25.6 40.3 24.6 39.4 24.2 39C23.9 38.6 23.6 39.1 24.1 38.1C24.6 37.2 26.5 34.6 27.2 33.1C28 31.7 28.2 30.2 28.4 29.4C28.5 28.5 28.2 28.2 28.4 27.8C28.5 27.3 28.9 26.9 28.9 26.9ZM36.1 26.9C36.7 26.7 38.8 26.9 38.8 26.9C38.8 26.9 39.3 26.4 39.2 27.4C39.2 28.5 38.9 31.6 38.6 33.1C38.4 34.7 38.1 35.4 37.5 36.6C37 37.9 36.3 39.5 35.5 40.9C34.6 42.2 33.2 44.2 32.5 45C31.7 45.8 31.1 45.6 31.1 45.6C31.1 45.6 29.7 44.5 29.4 44C29 43.6 28.8 43.5 29.1 42.9C29.5 42.2 30.6 41.4 31.4 40.2C32.1 39.1 33 37.7 33.6 36.1C34.3 34.6 35 32.4 35.2 30.9C35.5 29.5 35.3 28.2 35.5 27.6C35.6 26.9 35.6 27 36.1 26.9ZM48.2 29.8C49.3 29.6 51.2 29.7 52.2 29.8C53.3 29.8 53.8 30 54.5 30.2C55.1 30.5 55.8 30.8 56.4 31.2C56.9 31.7 57.4 31.7 57.6 32.8C57.9 33.8 58 35.2 58.1 37.8C58.2 40.3 58.3 44.8 58.2 48C58.2 51.3 58.1 55.6 58 57.1C57.8 58.7 57.8 57.5 57.5 57.5C57.3 57.6 56.4 57.5 56.4 57.5C56.4 57.5 55.9 60.9 55.9 57C55.8 53.1 56 38.1 55.9 34.1C55.7 30.1 55.4 33.2 55 33C54.7 32.7 54.6 32.5 54 32.4C53.3 32.2 52.4 31.9 51.1 31.9C49.9 31.9 47.6 32.2 46.6 32.4C45.7 32.5 45.7 32.8 45.4 33C45 33.3 44.9 30 44.8 34C44.6 38 44.8 53.1 44.8 57C44.7 61 44.4 57.5 44.4 57.5C44.4 57.5 43.3 57.6 43 57.5C42.8 57.5 42.8 58.3 42.6 57.1C42.5 56 42.4 54.3 42.4 50.4C42.4 46.4 42.4 36.7 42.6 33.5C42.9 30.4 43.5 31.9 44 31.4C44.6 30.8 45.2 30.6 46 30.4C46.7 30.1 47.2 29.9 48.2 29.8ZM49.5 40C50.5 39.8 51 39.9 51.9 40C52.7 40.2 54.4 41 54.4 41C54.4 41 54.7 41 54.5 41.5C54.2 42.1 52.8 44.5 52.8 44.5C52.8 44.5 48.8 44.6 47.9 44.5C47 44.5 47.7 44.6 47.4 44.1C47 43.6 46.1 42.1 45.9 41.5C45.6 41 46 41 46 41C46 41 48.6 40.1 49.5 40Z"/><polygon fill="currentColor" stroke="none" points="9.7,28.1 17.7,28.1 17.7,32.2 9.7,32.2"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37 7.7L39.5 11.2C39.5 11.2 40.3 10 41 9.6C41.8 9.1 42.6 8.5 43.6 8.3C44.7 8.2 46.2 8.3 47.1 8.6C48.1 8.8 48.6 9.2 49.1 9.7C49.7 10.1 50.6 11.2 50.6 11.2L52.9 7.8L54.4 8.4C54.4 8.4 54.4 8.9 54 9.7C53.7 10.4 52 12.9 52 12.9C52 12.9 53.6 16.6 54 18.1C54.4 19.5 54.5 20.3 54.5 21.9C54.5 23.4 54.4 25.7 54 27.4C53.6 29.2 52 32.5 52 32.5L54.5 36.6C54.5 36.6 54.1 37.3 53.9 37.5C53.6 37.6 52.8 37.6 52.8 37.6L50.6 34.4C50.6 34.4 49.3 35.8 48.5 36.2C47.8 36.7 46.8 37.1 46 37.2C45.3 37.4 44.5 37.3 44 37.2C43.4 37.2 43 37 42.5 36.8C42 36.5 41.5 36.2 41 35.9C40.4 35.5 39.5 34.4 39.5 34.4C39.5 34.4 37.8 37.1 37.4 37.6C36.9 38.2 37.1 37.9 36.9 37.8C36.6 37.6 36 37.2 35.8 37C35.5 36.8 35.3 37.3 35.6 36.5C36 35.8 37.9 34.1 38 32.6C38 31.1 36.5 29 36.1 27.6C35.8 26.1 35.6 25.8 35.6 24.1C35.6 22.5 35.8 19.8 36.1 17.9C36.5 16.1 38 14.8 38 13.3C37.9 11.8 35.6 8.9 35.6 8.9C35.6 8.9 35.7 8.5 36 8.2C36.2 8 37 7.7 37 7.7ZM44 10.4C44.8 10.3 45.8 10.4 46.5 10.7C47.3 10.9 48.1 11.5 48.5 11.9C49 12.3 49.5 13.1 49.5 13.1L45 20.6L40.6 13.2C40.6 13.2 41.2 12.2 41.8 11.8C42.3 11.3 43.2 10.6 44 10.4ZM50.8 15.2C50.8 15.2 51.5 17.2 51.8 18.2C52 19.3 52.1 20.2 52.1 21.4C52.2 22.7 52.3 24.3 52 25.8C51.8 27.2 50.8 30.1 50.8 30.1L46.5 22.9L50.8 15.2ZM39.4 15.3L43.6 22.6L39.4 30.1C39.4 30.1 38.5 28.1 38.2 26.9C38 25.8 37.9 24.8 37.9 23.4C37.9 22 38 19.9 38.2 18.6C38.5 17.2 39.4 15.3 39.4 15.3ZM45 24.9L49.5 32.4C49.5 32.4 48.1 33.9 47.5 34.4C46.9 34.8 46.5 35 45.9 35C45.2 35.1 44.2 35 43.5 34.9C42.9 34.7 42.6 34.4 42.1 34C41.7 33.6 40.6 32.5 40.6 32.5L45 24.9ZM22.4 9.3C23 9.3 23.9 9.8 24.4 10.1C25 10.3 25.1 10.6 25.4 11.1C25.8 11.5 26.1 11.9 26.2 12.7C26.4 13.4 26.4 14.9 26.2 15.8C26.1 16.6 25.5 17.3 25.1 17.8C24.8 18.2 24.2 18.4 24.2 18.4C24.2 18.4 24.2 19.3 24.2 19.6C24.3 19.8 24.4 19.8 24.6 19.9C24.9 20.1 25.9 20.6 25.9 20.6L31.6 14.4L33.5 15.8C33.5 15.8 34.3 15.6 33.5 16.6C32.6 17.5 28.6 21.8 28.6 21.8C28.6 21.8 29.6 22.3 29.9 22.6C30.2 23 30 22.2 30.4 23.9C30.8 25.5 32 30.4 32.4 32.2C32.7 34.1 32.6 34 32.6 34.9C32.6 35.7 32.4 37.2 32.4 37.2C32.4 37.2 34.8 38.4 36 39.1C37.1 39.9 39.1 41.6 39.1 41.6L37.5 43.6L31.9 40.1C31.9 40.1 30.6 44.2 29.9 45.9C29.1 47.5 27.6 50.2 27.6 50.2L24.4 51L23.6 50.4C23.6 50.4 25.9 45.8 26.6 44.4C27.2 42.9 27.2 41.5 27.2 41.5C27.2 41.5 25 40.9 23.9 40.8C22.9 40.6 21.8 40.6 20.8 40.8C19.7 40.9 17.6 41.6 17.6 41.6C17.6 41.6 18.5 44.8 19.1 46.2C19.8 47.7 21.2 50.4 21.2 50.4L20.9 50.9C20.9 50.9 19.2 50.8 18.6 50.6C17.9 50.5 17.8 50.9 17.1 50C16.5 49.2 15.5 47 14.8 45.4C14.2 43.7 13.1 40.2 13.1 40.2C13.1 40.2 12.1 40.6 11.2 41.1C10.2 41.7 7.7 43.8 7.7 43.8L5.8 42C5.8 42 5 42.7 6 41.5C7.1 40.2 11.4 36.4 12.4 34.9C13.5 33.3 12.1 34.4 12.6 32.4C13 30.3 13.7 24.7 15.1 22.6C16.4 20.4 20.6 19.6 20.6 19.6L20.6 18.4C20.6 18.4 20.1 18.2 19.8 17.8C19.4 17.3 18.8 16.5 18.6 15.7C18.5 14.8 18.4 13.6 18.6 12.7C18.9 11.7 19.7 10.7 20.4 10.2C21 9.6 21.7 9.4 22.4 9.3ZM25.9 21.1L27.6 21.9C27.6 21.9 19.2 30.7 17.1 33C15 35.2 15.3 34.7 14.9 35.2C14.5 35.8 14.7 36 14.7 36L15.2 36.9C15.2 36.9 17.7 36.2 18.9 36C20 35.9 20.5 35.8 22.1 35.9C23.6 35.9 26.8 36.2 28.4 36.5C30.1 36.8 31.8 37.6 31.8 37.6L31.4 39.4C31.4 39.4 28.3 38.2 26.9 37.9C25.4 37.5 24.4 37.5 22.9 37.5C21.4 37.5 19.4 37.5 17.9 37.9C16.3 38.2 13.4 39.4 13.4 39.4L12.8 35L25.9 21.1ZM52.1 40C52.7 40 53.2 39.9 54 40C54.7 40.2 55.7 40.5 56.4 41C57 41.4 57.6 42.2 58 43C58.3 43.7 58.5 44.7 58.2 45.6C58 46.6 57.7 47.5 56.5 48.9C55.2 50.2 50.8 54 50.8 54C50.8 54 56.6 54.1 57.9 54.2C59.1 54.4 58.2 54.4 58.2 54.6C58.3 54.9 58.3 55.8 58.2 56C58.2 56.3 59.6 56.4 57.9 56.5C56.1 56.5 49.5 56.5 47.8 56.5C46 56.4 47.4 56.2 47.4 56C47.3 55.8 47.2 55.7 47.4 55.2C47.5 54.8 47.2 54.5 48.4 53.2C49.5 52 53 48.9 54.2 47.6C55.5 46.4 55.4 46.2 55.6 45.5C55.9 44.8 55.7 44 55.5 43.5C55.2 42.9 54.5 42.5 54 42.2C53.4 42 52.5 42.2 52 42.2C51.6 42.3 51.6 42.1 51.2 42.6C50.9 43.2 49.6 45.4 49.6 45.4L47.8 44.9C47.8 44.9 47.6 44.1 47.9 43.5C48.1 43 48.6 42 49 41.5C49.5 41 49.9 40.8 50.5 40.5C51 40.3 51.6 40.1 52.1 40Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M15.4 5.8C15.4 5.8 18.6 5.7 19.2 5.8C19.9 5.8 19.6 6 19.6 6C19.6 6 18.1 8.2 17.6 9.2C17.2 10.1 17.1 10.5 16.9 11.4C16.8 12.4 16.8 13.6 16.9 14.7C17.1 15.7 17.9 17.9 17.9 17.9L27.1 12.4L27.9 12.8L27.8 16.2L19.1 21.4C19.1 21.4 19.6 22.9 19.8 23.9C19.9 24.9 19.9 26.2 19.8 27.4C19.6 28.7 18.8 31.4 18.8 31.4L27.4 26.2L27.9 26.6L27.9 30.1L16.9 36.6C16.9 36.6 16.8 37.9 16.9 38.6C17.1 39.4 17.2 40.1 17.6 41.1C18.1 42.2 19.4 44.9 19.4 44.9L27.4 40.1C27.4 40.1 27.8 39.9 27.9 40.5C27.9 41.2 27.9 44 27.9 44L20.6 48.5C20.6 48.5 20.9 49.6 20.9 50.5C21 51.5 20.9 53.2 20.8 54.2C20.6 55.3 20.2 56.2 19.9 56.9C19.7 57.5 19.1 58.1 19.1 58.1C19.1 58.1 16.3 58.2 15.7 58.1C15 58.1 15.3 57.9 15.3 57.9C15.3 57.9 16.7 55.2 16.9 54C17.2 52.7 17.1 50.5 17.1 50.5C17.1 50.5 8.9 55.3 7.2 56.2C5.5 57.2 6.8 56.4 6.8 56.4C6.8 56.4 6.5 56.5 6.5 55.9C6.4 55.2 6.4 53.4 6.5 52.8C6.5 52.1 5.1 53.2 6.8 52.2C8.3 51.2 16.1 46.8 16.1 46.8C16.1 46.8 14.3 42.9 13.8 41.5C13.4 40.2 13.2 38.9 13.2 38.9L7.2 42.4L6.5 41.9L6.5 38.5C6.5 38.5 12.1 36 13.7 34.1C15.2 32.3 15.6 29 15.9 27.4C16.3 25.7 16 24.8 15.9 24.1C15.9 23.5 15.6 23.4 15.6 23.4L7.2 28.4L6.5 27.9L6.7 24.4L14.6 19.8C14.6 19.8 13.6 17.2 13.3 15.8C13.1 14.5 13.1 12.7 13.2 11.4C13.2 10.2 13.5 9.5 13.8 8.6C14.2 7.6 15.4 5.8 15.4 5.8ZM36 6.5C36 6.5 39.1 7.3 40.5 7.8C41.8 8.2 43 8.8 44.1 9.4C45.3 10.1 46.5 10.9 47.6 11.8C48.8 12.6 49.9 13.8 50.9 14.8C51.8 15.8 52.4 16.6 53.1 17.8C53.9 18.9 54.6 20.1 55.1 21.4C55.7 22.7 56.3 24.1 56.6 25.6C57 27.1 57.3 29 57.5 30.4C57.6 31.7 57.6 32 57.5 33.5C57.3 35 56.9 37.6 56.4 39.4C55.8 41.1 55 42.8 54.2 44.2C53.5 45.7 52.8 46.8 51.8 48C50.7 49.3 49 51 47.9 52C46.7 53 46 53.3 44.8 54C43.5 54.8 41.7 55.6 40.2 56.1C38.8 56.7 36 57.2 36 57.2C36 57.2 35.8 58.3 35.2 56.5C34.8 54.8 33.5 50.4 33 46.5C32.4 42.7 31.9 37 31.8 33.5C31.6 30 31.8 28.2 31.9 25.6C32.1 22.9 32.4 20.4 33 17.4C33.5 14.3 34.8 9.2 35.2 7.3C35.8 5.5 36 6.5 36 6.5ZM38.1 11.1C38.1 11.1 39.2 11.2 40.1 11.7C41.1 12.1 42.4 12.6 43.8 13.6C45.1 14.5 46.9 15.9 48.2 17.4C49.6 19 50.9 21 51.8 22.9C52.6 24.9 53.3 27 53.5 29.2C53.8 31.5 53.5 34.5 53.2 36.2C53 38 52.7 38.5 52.2 39.8C51.8 41 51.1 42.3 50.4 43.5C49.6 44.8 48.6 46 47.8 47C46.9 47.9 45.9 48.7 45 49.5C44 50.2 43.2 50.7 42.1 51.2C41.1 51.8 39.3 52.5 38.6 52.8C38 53 38.1 52.8 38.1 52.8C38.1 52.8 37.3 49.6 36.9 46.9C36.4 44.1 35.8 40.2 35.6 36.5C35.5 32.7 35.6 27.6 35.9 24.4C36.1 21.1 36.5 19.3 36.9 17.1C37.2 14.8 38.1 11.1 38.1 11.1Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M45.4 5.8C45.4 5.8 48.5 5.7 49.1 5.8C49.8 5.8 49.5 6 49.5 6C49.5 6 47.9 8.4 47.5 9.3C47 10.3 46.9 11.1 46.8 11.9C46.6 12.8 46.6 13.2 46.8 14.2C46.9 15.1 47.8 17.8 47.8 17.8C47.8 17.8 55.2 17.7 56.9 17.9C58.5 18 57.4 17.9 57.5 18.4C57.6 19 57.5 20.6 57.5 21.1C57.4 21.6 58.4 21.4 57 21.4C55.6 21.5 49 21.6 49 21.6C49 21.6 49.4 22.7 49.5 23.6C49.6 24.4 49.8 25.6 49.6 26.6C49.5 27.7 49 30.1 49 30.1C49 30.1 55.5 30 57 30.1C58.4 30.2 57.4 30.1 57.5 30.6C57.5 31.2 57.5 32.7 57.5 33.2C57.4 33.8 58.6 33.7 57 33.8C55.3 33.8 47.6 33.8 47.6 33.8C47.6 33.8 46.9 35.7 46.8 36.5C46.6 37.2 46.6 37.5 46.8 38.2C46.9 39 47.3 40.4 47.5 41.1C47.8 41.9 48.5 42.5 48.5 42.5C48.5 42.5 55.5 42.4 57 42.5C58.5 42.5 57.4 42.4 57.5 42.9C57.5 43.4 57.6 44.9 57.5 45.5C57.4 46 58.1 45.9 56.9 46C55.6 46.2 49.8 46.1 49.8 46.1C49.8 46.1 50.4 47.5 50.5 48.5C50.7 49.6 50.9 51.3 50.9 52.5C50.8 53.6 50.6 54.7 50.2 55.6C49.9 56.6 49 58.1 49 58.1C49 58.1 46.2 58.2 45.5 58.1C44.9 58.1 45.1 57.8 45.1 57.8C45.1 57.8 46.2 55.9 46.5 55.1C46.8 54.4 46.9 54 47 53.1C47 52.3 47.2 51 47 49.9C46.7 48.7 45.5 46 45.5 46C45.5 46 38.1 46.1 36.5 46C35 46 36.1 46.1 36 45.5C36 45 36 43.4 36 42.9C36.1 42.3 35.1 42.5 36.5 42.5C37.8 42.4 44 42.4 44 42.4C44 42.4 43 39.4 43 38C42.9 36.5 43.5 33.9 43.5 33.9C43.5 33.9 37.7 33.8 36.5 33.8C35.2 33.7 36.1 33.9 36 33.4C36 32.8 36 31.1 36 30.6C36.1 30 35 30.2 36.5 30.1C37.9 30.1 44.8 30.1 44.8 30.1C44.8 30.1 45.8 27.7 46 26.4C46.1 25.2 45.7 23.4 45.5 22.6C45.2 21.7 44.8 21.4 44.8 21.4C44.8 21.4 37.9 21.5 36.5 21.4C35 21.4 36.1 21.6 36 21.1C36 20.5 36 18.9 36 18.4C36.1 17.8 35.3 18 36.5 17.9C37.8 17.8 43.8 17.8 43.8 17.8C43.8 17.8 43.1 15 43 13.8C42.9 12.7 43 11.6 43.1 10.6C43.3 9.5 43.8 8.3 44.1 7.5C44.5 6.8 45.4 5.8 45.4 5.8ZM27.8 6.7C28.6 6.6 28.1 5.5 28.6 7.2C29.2 9 30.4 13.5 30.9 17.2C31.5 21 32 26.2 32.1 29.8C32.3 33.3 32.1 36.2 31.9 38.5C31.8 40.7 31.8 40.9 31.4 43.2C31.1 45.6 30.1 50.6 29.6 52.9C29.2 55.1 28.9 55.9 28.6 56.6C28.4 57.4 28.1 57.2 28.1 57.2C28.1 57.2 26.4 57.1 25.1 56.6C23.8 56.2 21.9 55.5 20.4 54.8C18.9 54 17.2 52.8 16.1 52C14.9 51.1 14.5 50.6 13.6 49.6C12.7 48.6 11.5 47.2 10.7 46C9.8 44.7 9.2 43.5 8.6 42C7.9 40.6 7.3 38.5 7 37C6.6 35.6 6.5 34.9 6.5 33.4C6.4 31.8 6.6 29.4 6.8 27.9C6.9 26.5 7.1 25.9 7.5 24.6C8 23.2 8.9 21.1 9.7 19.6C10.4 18.2 11.1 17.1 12.2 15.8C13.2 14.6 14.9 12.9 16.1 11.8C17.4 10.8 18.2 10.3 19.4 9.7C20.7 9 22.2 8.2 23.6 7.8C24.9 7.2 26.9 6.7 27.8 6.7ZM25.1 11.2C25.8 10.9 25.8 11.2 25.8 11.2C25.8 11.2 26.3 12.8 26.8 15.4C27.2 18.1 28 23.2 28.2 27.2C28.5 31.3 28.2 36.4 28.1 39.6C27.9 42.9 27.4 44.8 27.1 47C26.7 49.1 25.8 52.8 25.8 52.8C25.8 52.8 24.7 52.6 23.9 52.2C23 51.9 21.9 51.5 20.6 50.5C19.2 49.6 17.1 47.9 15.9 46.8C14.8 45.6 14.2 44.5 13.6 43.5C12.9 42.6 12.7 42.5 12.2 41C11.6 39.4 10.6 36.7 10.3 34.5C10.1 32.2 10.4 29.4 10.7 27.6C10.9 25.9 11.2 25.4 11.7 24.1C12.1 22.9 12.8 21.5 13.6 20.4C14.3 19.2 15 18.1 15.9 17.1C16.9 16.1 18.1 15.1 19.1 14.3C20 13.6 20.7 13.2 21.8 12.7C22.8 12.1 24.5 11.4 25.1 11.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M7.3 17.4C7.3 17.4 14.9 19.7 16.4 20.2C18 20.8 16.8 20.5 16.8 20.9C16.7 21.2 16.4 22.3 16.1 22.6C15.9 23 17 23.5 15.4 23.1C13.9 22.6 6.7 20.1 6.7 20.1C6.7 20.1 6.3 19.7 6.5 19.2C6.6 18.8 7.3 17.4 7.3 17.4ZM56.2 17.4C57.8 16.9 56.9 17.6 56.9 17.6C56.9 17.6 57.4 18.8 57.5 19.2C57.5 19.7 57.1 20.2 57.1 20.2C57.1 20.2 50.1 22.7 48.5 23.1C47 23.4 48 23 47.8 22.6C47.5 22.3 47.2 21.2 47.1 20.9C47.1 20.5 45.9 20.8 47.5 20.2C49 19.7 54.7 17.8 56.2 17.4ZM18.9 21.4C18.9 21.4 21.4 21.7 22.4 22.1C23.5 22.4 24.4 23 25.2 23.8C26.1 24.5 26.9 25.4 27.6 26.6C28.2 27.7 28.8 29 28.9 30.4C29.1 31.7 29.1 33.2 28.8 34.5C28.4 35.9 27.6 37.4 26.8 38.5C25.9 39.6 24.9 40.5 23.8 41.1C22.6 41.8 20.7 42.3 19.9 42.5C19 42.8 18.8 42.5 18.8 42.5C18.8 42.5 18.6 42.4 18.4 41.5C18.1 40.7 17.6 39 17.4 37.5C17.1 36.1 16.9 34.7 16.9 32.9C16.9 31 17.1 28.2 17.4 26.4C17.6 24.5 18.3 22.6 18.6 21.8C18.8 20.9 18.9 21.4 18.9 21.4ZM20.9 24.9C20.9 24.9 22.3 25.4 22.9 25.8C23.4 26.1 23.9 26.6 24.2 27.1C24.6 27.5 24.9 27.8 25.1 28.4C25.4 29.1 25.8 30.2 25.9 30.9C26.1 31.7 26.1 32.2 25.9 33C25.8 33.7 25.5 34.8 25.1 35.6C24.6 36.5 23.9 37.3 23.2 37.9C22.6 38.4 21.1 39 21.1 39C21.1 39 20.8 39.5 20.6 38.5C20.4 37.5 20 34.8 19.9 33C19.9 31.3 20 29.6 20.1 28.2C20.3 26.9 20.9 24.9 20.9 24.9ZM44 21.4C44.8 21.1 44.7 21.3 45 21.4C45.2 21.4 45.1 20.9 45.4 21.8C45.6 22.6 46.3 24.8 46.5 26.4C46.8 27.9 47 29.3 47 31.1C47 33 46.8 35.8 46.5 37.5C46.3 39.3 45.8 40.7 45.5 41.5C45.3 42.4 45 42.5 45 42.5C45 42.5 43.1 42.5 42 42C41 41.6 39.5 40.8 38.5 40C37.6 39.3 37 38.4 36.4 37.4C35.8 36.3 35.2 34.9 35 33.5C34.8 32.2 34.8 30.8 35.1 29.4C35.5 27.9 36.6 26.1 37.4 25.1C38.1 24 38.6 23.6 39.8 22.9C40.9 22.3 43.1 21.6 44 21.4ZM42.6 24.9C42.6 24.9 43 24.6 43.2 25.6C43.5 26.6 43.9 29.2 44 30.9C44 32.5 43.9 34.3 43.8 35.6C43.6 37 43 39 43 39C43 39 42.1 38.8 41.5 38.5C41 38.1 40.1 37.4 39.6 36.9C39.2 36.4 39 36.1 38.8 35.5C38.5 34.8 38.1 33.7 38 33C37.8 32.2 37.8 31.8 38 30.9C38.1 30.1 38.5 28.9 39 28.1C39.4 27.2 40 26.6 40.6 26.1C41.3 25.5 42.6 24.9 42.6 24.9ZM15.2 40.9C16.8 40.4 15.9 41 15.9 41C15.9 41 16.2 41.3 16.4 41.6C16.5 42 16.7 42.6 16.8 43C16.8 43.3 18 43 16.4 43.6C14.9 44.2 9.1 46.1 7.5 46.5C6 47 7.2 46.7 7 46.4C6.9 46 6.5 45.1 6.5 44.6C6.4 44.2 6.5 43.8 6.5 43.8C6.5 43.8 13.7 41.3 15.2 40.9ZM48.1 40.9L57.4 43.8C57.4 43.8 57.5 44.2 57.5 44.6C57.4 45.1 57 46 56.9 46.4C56.7 46.7 57.9 47 56.4 46.5C54.8 46.1 47.4 43.5 47.4 43.5C47.4 43.5 47 43.4 47.1 43C47.3 42.5 48.1 40.9 48.1 40.9Z"/><polygon fill="currentColor" stroke="none" points="4.6,30.4 14.9,30.4 14.9,33.5 4.6,33.5"/><polygon fill="currentColor" stroke="none" points="49.0,30.4 59.3,30.4 59.3,33.5 49.0,33.5"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.2 8.6L15.7 13.8L18.1 11.3L18.8 11.4C18.8 11.4 18.9 19.3 18.9 20.9C18.8 22.6 18.6 21.4 18.6 21.4L8.8 21.2C8.8 21.2 8.3 21.2 8.8 20.8C9.2 20.2 11.2 18.2 11.2 18.2C11.2 18.2 6.9 14.1 6 13.2C5.2 12.2 6 12.7 6 12.7L10.2 8.6ZM33 15.4C34.9 15.3 37.7 15.4 39.5 15.7C41.2 15.9 42.2 16.4 43.4 16.8C44.5 17.1 45.2 17.5 46.2 18.1C47.2 18.6 48.3 19.2 49.4 20.1C50.4 20.9 51.7 22 52.6 23.1C53.6 24.2 54.5 25.6 55.1 26.6C55.8 27.7 56.1 28.3 56.5 29.2C56.9 30.2 57.2 31.1 57.5 32.4C57.8 33.6 58.2 35.1 58.2 36.9C58.3 38.6 58 41.4 57.8 43C57.5 44.5 57.3 45 56.8 46.2C56.2 47.5 55.3 49.3 54.5 50.5C53.8 51.8 52.7 53 52 53.8C51.4 54.5 50.5 55.1 50.5 55.1C50.5 55.1 49.8 55.1 49 54.2C48.1 53.4 45.2 50.2 45.2 50.2L47.5 48L50.1 50.2C50.1 50.2 51.6 48.4 52.2 47.4C52.9 46.3 53.4 45.2 53.8 44C54.1 42.7 54.5 40 54.5 40C54.5 40 51.8 40 51.1 39.9C50.5 39.8 50.9 40 50.9 39.5C50.8 38.9 50.8 37.3 50.9 36.8C50.9 36.2 50.7 36.4 51.4 36.2C52 36.1 54.5 36.1 54.5 36.1C54.5 36.1 54.4 34.5 54 33.4C53.7 32.2 53 30.3 52.4 29.1C51.7 27.8 50.2 25.9 50.2 25.9L47.9 28.2C47.9 28.2 47.7 28.5 47.2 28.1C46.8 27.8 45.7 26.7 45.4 26.2C45 25.8 45 26.1 45.4 25.6C45.7 25.2 47.6 23.4 47.6 23.4C47.6 23.4 48.2 23.6 47.5 23.1C46.7 22.7 44.6 21.3 43.4 20.6C42.1 20 40.9 19.7 39.9 19.4C38.9 19.2 37.4 19.1 37.4 19.1L37.2 22.4C37.2 22.4 37.1 22.7 36.5 22.8C36 22.8 33.9 22.6 33.9 22.6L33.6 19.2C33.6 19.2 33.7 18.9 32.5 19.1C31.4 19.4 28.5 20.2 26.9 20.9C25.4 21.7 23.4 23.4 23.4 23.4L32.6 32.8C32.6 32.8 33.7 32.3 34.4 32.2C35 32.2 35.8 32.1 36.5 32.2C37.3 32.4 38.3 32.9 38.9 33.2C39.4 33.6 39.7 33.8 40 34.4C40.4 34.9 40.9 35.7 41.1 36.4C41.4 37 41.5 37.8 41.5 38.5C41.4 39.1 41.2 39.7 41 40.4C40.7 41 40.3 41.6 39.9 42.1C39.4 42.7 38.7 43.1 38 43.5C37.4 43.8 36.8 44 36.1 44C35.5 44.1 34.6 44 34 43.9C33.3 43.7 32.6 43.4 32 43C31.5 42.5 30.8 41.9 30.4 41.2C30.1 40.6 29.8 40.1 29.6 39.4C29.5 38.6 29.6 37.5 29.6 36.9C29.7 36.2 30.1 35.4 30.1 35.4L20.8 26.1C20.8 26.1 18.8 28.7 18.1 30.1C17.4 31.6 16.8 33.9 16.6 35C16.3 36 16.6 36.2 16.6 36.2L19.9 36.5C19.9 36.5 20.1 39 20.1 39.5C20 40.1 20.2 39.9 19.6 40C19.1 40 16.6 40 16.6 40C16.6 40 16.3 40.2 16.6 41.2C16.8 42.3 17.4 44.6 18.1 46C18.7 47.5 20 49.2 20.4 50C20.9 50.7 20.8 50.2 20.8 50.2L23.4 48L25.6 50.4L20.6 55.2C20.6 55.2 18.2 53 17.1 51.6C16.1 50.3 15.2 48.6 14.6 47C13.9 45.5 13.3 44.3 13.1 42.4C12.8 40.4 12.7 37.4 12.8 35.4C13 33.4 13.5 31.9 14.1 30.4C14.6 28.8 15.2 27.6 16.1 26.2C16.9 24.9 17.9 23.6 19.1 22.4C20.2 21.2 21.6 20 23.1 19.1C24.5 18.1 26.2 17.2 27.9 16.6C29.5 16 31 15.6 33 15.4Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.4 7.5C31.6 7.4 31.8 7.4 33.1 7.5C34.5 7.7 36.8 8 38.4 8.3C39.9 8.7 41.2 9.2 42.5 9.8C43.9 10.5 45.4 11.3 46.5 12.1C47.7 12.8 48.6 13.5 49.6 14.6C50.7 15.6 52.1 17.1 53 18.1C53.8 19.1 53.9 19.3 54.5 20.6C55.2 21.8 56.2 23.6 56.8 25.6C57.3 27.5 57.8 30.2 58 32C58.3 33.9 58.2 35.1 58 36.8C57.9 38.4 57.5 40.4 57 41.9C56.5 43.3 55 45.6 55 45.6C55 45.6 57 47.1 57.5 47.5C58.1 48 58.1 48.5 58.1 48.5C58.1 48.5 47.3 54.9 45 56.1C42.8 57.4 44.5 56 44.5 56C44.5 56 43.8 57.8 44.5 55.4C45.1 52.9 48.4 41.1 48.4 41.1C48.4 41.1 48.5 40.7 49.1 41C49.8 41.4 52 43.4 52 43.4C52 43.4 53 41.9 53.4 41C53.7 40.1 54 39 54.1 38C54.3 36.9 54.5 36 54.5 34.8C54.5 33.5 54.4 32.2 54.1 30.6C53.9 29.1 53.5 27.2 52.9 25.6C52.2 23.9 51.2 22.2 50.5 20.9C49.7 19.7 49.1 19.1 48.2 18.2C47.4 17.4 46.8 16.7 45.5 15.8C44.3 15 42.7 13.9 41 13.2C39.2 12.4 36.9 11.7 34.9 11.4C32.8 11.2 30.4 11.3 28.9 11.4C27.3 11.6 26.9 11.7 25.6 12.2C24.2 12.6 22.1 13.5 20.9 14.2C19.6 14.8 19.1 15.2 18.1 15.9C17.2 16.7 16 17.8 15.1 18.9C14.1 20 13.1 21.3 12.3 22.6C11.6 23.8 11.1 24.9 10.7 26.1C10.2 27.4 9.9 28.4 9.7 29.9C9.4 31.5 9.3 33.9 9.3 35.4C9.4 36.8 9.5 37.5 9.8 38.8C10.2 40 10.5 41.3 11.2 42.8C11.8 44.2 13 46.2 13.9 47.5C14.9 48.8 15.7 49.6 16.8 50.5C17.8 51.5 19.8 52.7 20.4 53.2C21.1 53.8 20.6 53.8 20.6 53.8L19.1 56.4C19.1 56.4 18.6 56.4 17.9 56C17.3 55.7 16.3 55.1 15.2 54.1C14.2 53.2 12.7 51.8 11.7 50.5C10.6 49.3 9.8 48.2 8.9 46.5C8.1 44.9 7.1 42.4 6.5 40.8C6 39.1 5.8 38.7 5.8 36.8C5.7 34.8 5.7 31.3 6 29.1C6.4 26.8 7 25.2 7.8 23.4C8.7 21.5 9.6 19.8 10.8 18.1C12.1 16.5 13.9 14.7 15.3 13.4C16.8 12.2 17.8 11.6 19.4 10.8C21.1 9.9 23.6 8.9 25.4 8.3C27.3 7.8 29.1 7.7 30.4 7.5ZM28.2 16.1L35.4 16.1C35.4 16.1 34.5 11.8 36 16.9C37.4 22 42.6 41.6 44 46.6C45.3 51.7 44 47.4 44 47.4C44 47.4 44.5 47.7 43.6 47.8C42.8 47.8 38.8 47.5 38.8 47.5L37 40.4L26.8 40.4L24.8 47.6C24.8 47.6 20.9 47.8 20.1 47.8C19.2 47.7 19.6 47.4 19.6 47.4C19.6 47.4 26.1 22.6 27.6 17.4C29 12.1 28.2 16.1 28.2 16.1ZM31.2 20.4L32.4 20.4C32.4 20.4 32 18.5 32.5 21.1C33.1 23.6 35.9 36 35.9 36L27.8 36L31.2 20.4Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.4 5.8C30.8 5.4 31.6 5.5 32.9 5.8C34.1 6 35.8 6.6 37 7.2C38.2 7.9 39.2 8.7 40 9.7C40.9 10.6 41.6 11.8 42 12.8C42.5 13.9 42.8 14.8 43 15.9C43.1 17.1 43 18.8 42.8 20.1C42.5 21.3 41.9 22.6 41.2 23.6C40.6 24.7 39 26.2 39 26.2C39 26.2 38.3 26 37.9 25.6C37.4 25.1 36.4 23.6 36.4 23.6L37.6 22.6L38.9 23.8C38.9 23.8 39.9 22.4 40.2 21.6C40.6 20.7 41 18.6 41 18.6L39.2 18.2L39 17.1C39 17.1 39.2 16.7 39.5 16.6C39.9 16.4 41 16.4 41 16.4C41 16.4 41 15.3 40.6 14.4C40.3 13.6 38.9 11.2 38.9 11.2L37.5 12.3L36.5 11.6C36.5 11.6 36.3 11.2 36.5 10.9C36.6 10.7 37.5 9.8 37.5 9.8C37.5 9.8 37.9 10 37.2 9.7C36.6 9.3 34.5 8.2 33.6 7.8C32.8 7.5 32.2 7.7 32.2 7.7C32.2 7.7 32.2 8.8 32.1 9.2C32 9.5 31.6 9.7 31.6 9.7L30.4 9.3L30.1 7.7C30.1 7.7 27.9 8.1 27.1 8.4C26.2 8.8 24.9 9.8 24.9 9.8L26.1 11.1C26.1 11.1 25.7 11.9 25.4 12.1C25.2 12.2 24.8 12.2 24.8 12.2L23.6 11.2C23.6 11.2 22.6 12.3 22.2 13.2C21.9 14 21.4 16.4 21.4 16.4L23.1 16.6L23.4 17.9C23.4 17.9 23.1 18.3 22.8 18.4C22.4 18.6 21.4 18.6 21.4 18.6C21.4 18.6 21.4 19.8 21.8 20.6C22.1 21.5 23.6 23.8 23.6 23.8L24.9 22.6L25.9 23.4C25.9 23.4 26.3 23.8 25.9 24.2C25.4 24.7 23.4 26.2 23.4 26.2C23.4 26.2 22.5 25.5 21.9 24.9C21.4 24.2 20.8 23.1 20.4 22.1C19.9 21.2 19.6 20.3 19.4 19.2C19.3 18.2 19.2 17 19.4 15.8C19.7 14.5 20.3 12.9 20.8 11.9C21.2 11 21.5 10.6 22.1 9.8C22.8 9.1 23.4 8.3 24.6 7.7C25.9 7 28.1 6.1 29.4 5.8ZM30.4 14.3C31.1 14.2 31.9 14.3 32.5 14.6C33.1 14.8 33.7 15.5 34 16.1C34.4 16.6 34.4 17.5 34.4 18.1C34.3 18.6 34.1 19.1 33.6 19.6C33.2 20 32.4 20.5 31.9 20.6C31.3 20.8 31.1 20.8 30.6 20.6C30 20.5 28.6 19.6 28.6 19.6C28.6 19.6 25.2 21.1 24.4 21.4C23.6 21.6 23.9 21.2 23.9 21.2L23.4 19.8C23.4 19.8 26.9 18.6 27.8 17.9C28.6 17.3 28.1 16.2 28.6 15.7C29 15.1 29.8 14.5 30.4 14.3ZM9.4 19.1C9.4 19.1 16.2 21.1 17.6 21.6C19.1 22.1 18.1 22.1 18.1 22.1L14.3 30.2C14.3 30.2 14.1 30.4 13.8 30.1C13.6 29.7 12.9 28.1 12.9 28.1L9.1 29.4C9.1 29.4 7.8 26.9 7.3 25.9C6.9 24.9 6.5 23.4 6.5 23.4L10.1 21.6L9.2 19.4L9.4 19.1ZM12.4 21.9L15.6 23.1C15.6 23.1 14.7 25.2 14.4 25.8C14.2 26.3 14.2 26.1 14.2 26.1L13.6 25.6L10.1 27.1L8.8 24.4L12.2 22.9L12.4 21.9ZM45.5 25.6C48.5 24.5 46.5 25.5 47.5 26.1C48.4 26.6 50.1 27.2 51.1 28.6C52.2 30.1 53.4 33.6 54 34.9C54.5 36.1 54.3 35.8 54.2 36.4C54.2 36.9 53.8 37.6 53.5 38C53.1 38.4 52.2 38.8 52.2 38.8C52.2 38.8 52.5 40.2 52.5 40.6C52.4 41.1 52 41.6 52 41.6L56.4 40C56.4 40 57.5 42 57.6 42.5C57.8 43 63.1 40.4 57.5 43C51.8 45.6 29.4 55.5 23.6 58C17.7 60.6 22.4 58.1 22.4 58.1L21.4 55.6L24.1 54.1C24.1 54.1 22.3 52.5 21.6 52.2C21 52 20.6 52.6 20.1 52.5C19.5 52.4 18.8 52.4 18.2 51.6C17.7 50.9 16.9 49 16.8 48C16.6 47.1 15.9 47.3 17.4 46C18.8 44.6 23.5 42 25.4 40C27.2 38.1 27.7 35.4 28.4 34.1C29.1 32.9 26.7 34.1 29.6 32.6C32.4 31.2 42.6 26.6 45.5 25.6ZM45.9 27.6C45.9 27.6 48.6 28.6 49.6 30.1C50.7 31.5 52.2 36 52.2 36C52.2 36 52.2 36.5 51.9 36.8C51.5 37 49.9 37.9 49.9 37.9C49.9 37.9 50.5 39.8 50.5 40.5C50.4 41.1 49.8 41.6 49.5 42C49.2 42.3 49.1 42.3 48.6 42.4C48.2 42.4 47.6 42.6 47 42.1C46.4 41.7 45 39.9 45 39.9C45 39.9 45.6 39.5 42.6 40.8C39.7 42 30.1 46.2 27.6 47.5C25 48.7 27.2 47.9 27.2 48.4C27.3 48.8 27.8 49.7 27.8 50.2C27.7 50.8 27.4 51.1 27.1 51.5C26.7 51.8 26.3 52.2 25.8 52.2C25.2 52.3 24.3 52.1 23.8 51.8C23.2 51.4 22.4 49.9 22.4 49.9C22.4 49.9 21.3 50.4 20.9 50.5C20.4 50.5 19.6 50.1 19.6 50.1C19.6 50.1 19 48.6 18.9 48C18.8 47.5 17.7 48 19.1 47C20.4 45.9 24.8 43.7 26.8 41.5C28.7 39.4 27.7 36.5 30.9 34.1C34 31.8 45.9 27.6 45.9 27.6ZM44.2 42.4L46.5 44.2L29.4 51.8L29.9 48.6L44.2 42.4Z"/>'
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
    svg: '<g transform="matrix(0.8 0 0 0.8 -1.2 6.4)"><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.6 5.8C40.6 5.8 44.4 7.3 46 8.2C47.6 9.2 48.9 10.2 50.2 11.4C51.6 12.7 52.9 14.1 54 15.7C55.1 17.2 56.4 19.6 56.9 20.6C57.3 21.5 57 21.2 56.5 21.6C56.1 21.9 54.1 22.8 54.1 22.8C54.1 22.8 56.1 38.9 56.5 42.9C56.9 46.8 56.8 45.4 56.5 46.5C56.3 47.6 55.9 48.6 55.2 49.5C54.6 50.4 53.7 51.2 52.6 51.9C51.6 52.5 50.2 52.9 49 53C47.9 53.2 46.7 52.8 45.8 52.5C44.8 52.3 44.2 51.8 43.5 51.4C42.9 50.9 42.5 50.6 42 49.8C41.4 48.9 40.6 49.1 40.4 46C40.1 43 40.6 34.4 40.4 31.6C40.1 28.9 39.5 29.9 39 29.4C38.4 28.9 37.1 28.6 37.1 28.6L37 54.2L39.1 54.5L39 58L7 58L7 54.5L9.2 54.2C9.2 54.2 9 17.2 9.2 9.3C9.3 1.5 9.6 7.8 9.9 7.2C10.3 6.7 7.5 6.5 11.4 6.2C15.4 6 29.8 6 33.9 6C37.9 6.1 35.1 6.4 35.5 6.7C36 6.9 36.2 7.2 36.5 7.5C36.7 7.9 36.9 6.1 37 8.9C37.1 11.8 37 24.6 37 24.6C37 24.6 38.8 25 39.5 25.2C40.3 25.5 40.7 25.7 41.4 26.2C42 26.8 42.8 27.7 43.2 28.4C43.7 29.2 44 28 44.1 30.8C44.3 33.5 44.1 42.2 44.1 44.9C44.2 47.5 44.2 45.8 44.5 46.4C44.7 46.9 45.1 47.6 45.6 48C46.1 48.5 46.8 48.9 47.5 49C48.1 49.2 48.8 49.3 49.5 49C50.3 48.8 51.4 48.2 52 47.5C52.5 46.7 53.2 49.2 52.9 44.5C52.5 39.9 50.3 24.2 49.5 19.4C48.8 14.7 48.7 17.1 48.2 16.2C47.8 15.3 47.4 14.9 46.6 14.1C45.9 13.2 44.6 12 43.5 11.2C42.5 10.5 40.4 9.4 40.4 9.4C40.4 9.4 40.2 6.8 40.2 6.2C40.3 5.5 40.6 5.8 40.6 5.8ZM13.1 10.1L33 10.1L33 24.6L13.1 24.6L13.1 10.1ZM13.1 28.8L33 28.8L33 54.2L13.1 54.2L13.1 28.8Z"/></g><path d="M50 25l8 7-8 7z" fill="currentColor" stroke="none"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M35 20.6C36.6 20.6 38.7 20.7 40.1 20.9C41.6 21 42.4 20.9 43.9 21.4C45.3 22 47.5 23.3 48.9 24.1C50.2 25 50.5 25.9 51.8 26.4C53 26.8 55.5 26.7 56.6 26.9C57.8 27 58 27.2 58.4 27.4C58.7 27.7 58.8 27.9 59 28.4C59.1 28.8 59.2 29 59.2 30.1C59.3 31.3 59.3 34.3 59.2 35.5C59.2 36.6 59.2 36.7 59 37.1C58.9 37.6 59.4 37.7 58.5 38C57.5 38.4 54.7 38.5 53.5 39.2C52.2 40 51.9 41.6 51.1 42.2C50.4 42.9 49.4 43 48.8 43.1C48.1 43.3 47.9 43.2 47.4 43.1C46.8 43 46.3 43 45.6 42.5C45 42.1 45.2 40.6 43.4 40.2C41.5 39.9 38.6 40.2 34.8 40.2C30.9 40.3 22.8 39.9 19.9 40.4C17.1 40.8 18.3 42.3 17.4 42.8C16.6 43.2 15.6 43.4 14.7 43.2C13.7 43.1 12.7 42.8 11.9 42.1C11.2 41.5 11 40 9.9 39.5C8.9 38.9 6.6 39.2 5.8 39C4.9 38.9 5 38.5 5 38.5C5 38.5 4.7 36.9 4.8 36.1C4.8 35.4 5 34.5 5.2 33.8C5.5 33 5.8 32.5 6.2 31.9C6.6 31.4 5.5 31.3 7.7 30.6C9.8 29.8 16.9 28.4 19.2 27.6C21.6 26.9 21.1 26.7 22.1 25.9C23 25.2 24 23.9 24.9 23.2C25.8 22.6 26.4 22.3 27.4 21.9C28.4 21.6 29.6 21.3 30.9 21.1C32.1 20.8 33.5 20.7 35 20.6ZM36.4 23.1C38.2 23.2 41.8 23.5 43.4 23.9C45 24.2 44.7 24.3 46 25.1C47.2 26 49.3 28.1 51 28.8C52.8 29.4 56.6 29.4 56.6 29.4L56.8 36L51.5 37.4C51.5 37.4 51.1 38.7 50.8 39.2C50.4 39.8 49.8 40.3 49.2 40.5C48.7 40.8 47.8 40.7 47.4 40.6C46.9 40.6 46.9 40.7 46.5 40.2C46 39.8 44.5 37.9 44.5 37.9L18.8 37.9C18.8 37.9 17.4 39.9 16.8 40.4C16.1 40.9 15.4 41 14.8 40.9C14.1 40.8 13.3 40.3 12.8 39.8C12.3 39.2 11.8 37.4 11.8 37.4L7.2 36.8C7.2 36.8 7.4 34.7 7.8 34C8.1 33.2 7.3 33 9.2 32.4C11.2 31.8 16.9 31.5 19.6 30.4C22.4 29.2 24 26.8 25.6 25.8C27.1 24.7 27.7 24.3 28.8 23.9C29.8 23.6 30.8 23.5 32 23.4C33.3 23.2 34.5 23.1 36.4 23.1ZM33.4 24.9C34.9 24.9 39.3 24.9 40.5 25.1C41.8 25.2 41 25.1 41 25.6C41.1 26.1 41.1 27.6 41 28.1C40.9 28.6 41.9 28.5 40.5 28.6C39 28.8 34 28.5 32.4 28.6C30.7 28.8 31 29.4 30.8 29.8C30.5 30.1 30.6 30.2 30.6 30.4C30.7 30.7 30.8 31.1 31.1 31.4C31.4 31.6 31.9 31.9 32.5 31.9C33.1 32 34.8 31.9 34.8 31.9L34.9 30.8C34.9 30.8 34.1 30 35.5 30.4C36.8 30.9 41.6 32.7 43 33.2C44.3 33.8 43.6 33.6 43.6 33.6L43.6 34L35.2 37.1C35.2 37.1 34.9 37 34.9 36.8C34.8 36.5 34.8 35.5 34.8 35.5C34.8 35.5 32.4 35.6 31.4 35.2C30.3 34.9 29.1 34.4 28.4 33.6C27.6 32.9 27.1 31.8 26.9 30.9C26.8 29.9 27.2 28.8 27.6 28.1C27.9 27.3 28.6 26.7 29.2 26.2C29.9 25.8 30.9 25.5 31.6 25.2C32.2 25 31.9 25 33.4 24.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.6 11.3C33.5 11.3 35.6 11.3 38 11.7C40.5 12 43.7 12.7 46.1 13.3C48.6 14 50.6 14.9 52.5 15.8C54.5 16.6 57.1 18.1 58 18.6C59 19.2 58.2 19.1 58.2 19.1C58.2 19.1 47.2 38.5 44.9 42.5C42.5 46.4 43.9 42.9 43.9 42.9C43.9 42.9 44.1 44 44 44.8C44 45.5 44.1 46.3 43.6 47.5C43.2 48.8 41.2 52.5 41.2 52.5C41.2 52.5 38.5 52.6 37.9 52.5C37.2 52.5 37.5 52.2 37.5 52.2C37.5 52.2 39.9 48 40.4 46.5C40.9 45 40.6 44.2 40.5 43.2C40.5 42.3 39.9 40.8 39.9 40.8C39.9 40.8 36.1 39.7 35.2 39.5C34.4 39.2 34.9 39.5 34.9 39.5C34.9 39.5 35.7 41.9 35.9 43C36 44 36.1 44.6 35.9 45.8C35.6 46.9 35.1 48.7 34.6 49.9C34.1 51 32.9 52.5 32.9 52.5L29.4 52.4C29.4 52.4 31.5 48.4 32 47C32.5 45.7 32.6 45.4 32.5 44.1C32.3 42.9 31.2 39.5 31.2 39.5C31.2 39.5 30 39.3 29.2 39.4C28.5 39.4 26.9 40 26.9 40C26.9 40 27.6 42.9 27.8 44C27.9 45.2 27.9 45.4 27.6 46.6C27.2 47.9 26 50.7 25.6 51.6C25.1 52.6 25.4 52.4 24.8 52.5C24.1 52.7 21.6 52.5 21.6 52.5L21.2 52C21.2 52 23.1 49.1 23.6 48C24.1 47 24.1 46.3 24.2 45.5C24.4 44.8 24.3 44 24.2 43.4C24.2 42.7 23.9 41.7 23.8 41.4C23.6 41 23.2 41 23.2 41C23.2 41 20.6 42.6 19.9 42.9C19.3 43.1 21.8 46.7 19.4 42.8C17.1 38.8 5.8 18.9 5.8 18.9C5.8 18.9 9.5 16.7 11.6 15.8C13.6 14.8 15.5 14 17.9 13.3C20.4 12.7 23.8 12 26.1 11.7C28.3 11.3 29.6 11.3 31.6 11.3ZM30.4 14.8C32.5 14.8 35.3 14.9 37.4 15.2C39.4 15.4 40.9 15.7 42.5 16.1C44.2 16.4 45.5 16.8 47.4 17.4C49.2 18.1 53.5 20.1 53.5 20.1L43.1 38.2C43.1 38.2 42.8 38.7 42.5 38C42.2 37.2 41.5 34.9 41.4 33.8C41.2 32.6 41.4 31.2 41.4 31.2L42.5 31.2L43 30.6L40 22.8C40 22.8 39.6 22 39 23.2C38.5 24.5 36.8 29 36.5 30.4C36.1 31.7 36.8 31.1 36.8 31.1L37.8 31.2C37.8 31.2 37.8 34.1 37.9 35C37.9 35.8 38.2 36.5 38.2 36.5L33.5 35.5C33.5 35.5 33.3 32.3 33.2 31.6C33.2 30.8 33.4 31.2 33.4 31.2L34.5 31.1C34.5 31.1 35.1 31.8 34.8 30.4C34.4 29.1 32.7 24.7 32.1 23.4C31.6 22 31.4 22.6 31.4 22.6C31.4 22.6 28.7 29.1 28.2 30.6C27.8 32 28.6 31.1 28.6 31.1L29.6 31.2L29.9 35.8L25.8 36.5C25.8 36.5 25.2 34.7 25.1 33.9C24.9 33 25.1 31.2 25.1 31.2L26.4 31.1C26.4 31.1 27 31.8 26.6 30.4C26.1 29.1 24.4 24.5 23.9 23.2C23.5 22 23.6 22.8 23.6 22.8L23.1 22.8C23.1 22.8 20.6 29 20.1 30.4C19.7 31.8 20.4 31.1 20.4 31.1L21.4 31.2C21.4 31.2 21.4 33.9 21.6 35C21.7 36 22.1 36.9 22.2 37.4C22.4 37.8 22.1 37.8 22.1 37.8L20.9 38.2L10.6 20.4C10.6 20.4 13 18.9 14.7 18.2C16.3 17.6 18.6 16.8 20.4 16.4C22.1 15.9 23.5 15.6 25.1 15.3C26.8 15.1 28.4 14.9 30.4 14.8Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M11.1 11.2C18.3 11.1 45.5 11 52.9 11.2C60.2 11.3 54.5 11.5 55.2 11.9C56 12.4 56.8 13 57.2 13.8C57.7 14.7 58 13.2 58.1 16.9C58.3 20.7 58.3 32.7 58.1 36.5C58 40.2 57.8 38.6 57.4 39.4C57 40.1 56.5 40.7 55.8 41.1C55 41.6 54.9 42.1 53 42.2C51.2 42.4 44.9 42.2 44.9 42.2C44.9 42.2 45 43.5 45 44.4C44.9 45.2 44.8 46.5 44.5 47.6C44.1 48.8 43.3 50.6 42.9 51.5C42.4 52.3 41.9 52.8 41.9 52.8C41.9 52.8 39.1 52.8 38.5 52.8C37.8 52.7 38.1 52.5 38.1 52.5C38.1 52.5 40.5 48.2 41 46.6C41.6 45.1 41.3 43.7 41.2 43C41.2 42.2 41 42.2 41 42.2L36.4 42.4C36.4 42.4 36.5 45.9 36.1 47.4C35.8 48.8 35 50.4 34.5 51.2C34.1 52.1 33.4 52.8 33.4 52.8C33.4 52.8 30.8 52.8 30.1 52.8C29.5 52.7 29.8 52.4 29.8 52.4C29.8 52.4 31.9 48.6 32.5 47.4C33 46.1 32.9 45.9 33 45C33 44.2 32.6 42.4 32.6 42.4L27.9 42.2C27.9 42.2 28.1 45.6 27.8 47.2C27.4 48.9 26 51.3 25.6 52.2C25.1 53.2 25.6 52.7 24.9 52.8C24.3 52.8 21.6 52.6 21.6 52.6L21.4 52.2C21.4 52.2 22.9 50 23.4 49C23.9 48 24.2 47.1 24.4 46.2C24.6 45.4 24.6 44.6 24.6 44C24.5 43.3 24.1 42.2 24.1 42.2C24.1 42.2 13.6 42.5 10.8 42.2C8.1 42 8.5 41.5 7.7 40.8C6.8 40 6.2 42.2 6 38C5.7 33.7 5.7 19.7 6 15.4C6.2 11.2 7.1 13.3 7.7 12.7C8.2 12 8.9 11.8 9.4 11.6C10 11.3 3.8 11.2 11.1 11.2ZM10.9 14.8C18.1 14.7 45.9 14.8 53 14.8C60.1 14.9 53.3 14.9 53.5 15.2C53.8 15.4 54.3 12.9 54.5 16.6C54.6 20.2 54.5 33.3 54.5 36.9C54.4 40.4 54.4 37.4 54.1 37.6C53.9 37.9 54.9 38.3 53.1 38.5C51.4 38.6 43.6 38.5 43.6 38.5C43.6 38.5 42.6 36 42.4 34.6C42.1 33.3 42.1 30.6 42.1 30.6L43.2 30.6L43.8 29.9C43.8 29.9 41.7 24.1 41.1 22.8C40.6 21.4 40.4 21.6 40.4 21.6C40.4 21.6 40.3 21 39.8 22.4C39.2 23.7 37.4 28.4 37 29.8C36.6 31.1 37.4 30.6 37.4 30.6L38.5 30.6C38.5 30.6 38.2 33 38.5 34.2C38.7 35.5 39.6 38.5 39.6 38.5L35.2 38.5C35.2 38.5 34 35 33.8 33.6C33.5 32.3 33.8 30.6 33.8 30.6L35 30.6C35 30.6 35.6 31 35.2 29.6C34.9 28.3 33.1 23.6 32.5 22.2C32 20.9 31.9 21.8 31.9 21.8C31.9 21.8 31.9 20.9 31.4 22.2C30.8 23.6 29 28.4 28.6 29.8C28.2 31.1 28.9 30.6 28.9 30.6L29.9 30.6C29.9 30.6 29.9 33.5 30.1 34.8C30.4 36 31.4 38.5 31.4 38.5L26.9 38.5C26.9 38.5 25.9 36 25.6 35C25.4 34.1 25.4 33.4 25.4 32.6C25.3 31.9 25.4 30.6 25.4 30.6L26.6 30.6C26.6 30.6 27.2 31.1 26.9 29.8C26.5 28.4 24.8 23.9 24.2 22.6C23.7 21.2 23.4 21.8 23.4 21.8L20.1 30.1L20.6 30.6L21.6 30.6C21.6 30.6 21.5 33.5 21.8 34.8C22 36 22.9 38.5 22.9 38.5L10.3 38.2C10.3 38.2 9.6 40.5 9.4 36.9C9.3 33.2 9.4 20 9.4 16.4C9.5 12.9 9.5 16 9.8 15.8C10 15.5 3.7 15 10.9 14.8Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M32.5 10.3L39.5 16.6C39.5 16.6 40 16.6 38.9 17.8C37.7 18.9 32.6 23.2 32.6 23.2L32.1 22.9L31.9 20.4C31.9 20.4 26.2 20.5 24.9 20.4C23.6 20.2 24.2 20.8 24.1 19.6C24.1 18.5 24.4 13.6 24.4 13.6L31.9 13.3L32.5 10.3ZM51.6 23.2C52.2 23.1 53.1 23.1 53.8 23.2C54.4 23.4 55 23.7 55.5 24.1C56.1 24.6 56.7 25.3 57 26.1C57.2 26.8 58.1 26.2 57.1 28.6C56.2 31.1 52.4 38.3 51.1 40.8C49.9 43.2 50 42.9 49.4 43.5C48.7 44.2 48 44.4 47.4 44.6C46.8 44.9 48.5 45.4 45.8 44.8C43 44.1 33.6 41.6 31.1 41C28.5 40.5 31.9 39.5 30.4 41.5C28.9 43.6 23.8 51.1 22.1 53.1C20.3 55.2 20.5 53.8 19.9 53.9C19.2 53.9 18.7 53.5 18.4 53.2C18 53 17.8 52.8 17.6 52.5C17.3 52.1 16.9 51.6 16.9 51C16.9 50.4 15.8 51.5 17.6 48.9C19.3 46.2 25.4 37.4 27.4 34.9C29.5 32.3 29.2 33.8 29.9 33.5C30.5 33.3 29.2 33.1 31.4 33.5C33.5 34 42.6 36.5 42.6 36.5C42.6 36.5 42.6 37.5 43.6 35.6C44.7 33.8 48 27 49 25.1C50.1 23.1 49.7 24.2 50.1 23.9C50.6 23.6 51 23.4 51.6 23.2ZM9.2 28.9C10.4 28.9 15.7 29.1 15.7 29.1C15.7 29.1 15.9 28.3 15.9 29.6C16 30.8 15.9 36.8 15.9 36.8C15.9 36.8 17.9 36.8 18.4 36.9C18.8 36.9 18.8 37.2 18.8 37.2L12.4 44.4L6 37.5L6.3 36.9L8.8 36.8C8.8 36.8 8.8 30.7 8.8 29.4C8.9 28.1 8.1 29 9.2 28.9Z"/><g fill="currentColor" stroke="none"><circle cx="53.3" cy="16.2" r="5"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M51 6.7C52.5 6.8 56.5 7.8 57.8 8.2C59 8.7 60.2 1.7 58.4 9.2C56.5 16.6 46.4 53.2 46.4 53.2L38.9 53.5C38.9 53.5 37.6 56.5 37.1 57.1C36.7 57.8 36.6 57.5 36 57.5C35.4 57.6 34.1 57.6 33.5 57.5C33 57.5 32.5 57 32.5 57L34.5 53.5L30.4 53.5L28.6 57.4C28.6 57.4 28.2 57.5 27.6 57.5C27.1 57.6 25.7 57.6 25.1 57.5C24.6 57.5 24.1 57 24.1 57L25.9 53.5L21.9 53.5L20.1 57.4L15.8 57.4C15.8 57.4 15.4 57.4 15.8 56.8C16.1 56.1 17.6 53.5 17.6 53.5C17.6 53.5 14.7 53.5 14.1 53.5C13.4 53.4 14.9 55.6 13.6 53C12.2 50.5 7.3 41.2 6 38.4C4.8 35.5 5.8 36.7 5.8 36.1C5.9 35.6 6.1 35.3 6.5 34.9C6.8 34.4 7.5 33.9 8 33.6C8.4 33.4 7.8 33.4 9.2 33.4C10.5 33.4 16.1 33.6 16.1 33.6L16.1 29.9C16.1 29.9 15.3 29.9 15.1 29.8C14.8 29.6 14.6 29.1 14.6 29.1L18.1 20.1C18.1 20.1 18 19.1 18.6 20.6C19.2 22 21.2 27.2 21.6 28.8C22.1 30.3 21.4 29.6 21.4 29.6L20.1 29.9L20.1 33.9L24.6 34L24.6 29.9L23.1 29.6C23.1 29.6 22.6 30.3 23.1 28.9C23.5 27.4 25.5 22.1 26.1 20.6C26.6 19.2 26.6 20.1 26.6 20.1C26.6 20.1 26.8 19.6 27.4 21.1C28 22.7 30.2 29.2 30.2 29.2C30.2 29.2 30.1 29.6 29.8 29.8C29.4 29.9 28.4 29.9 28.4 29.9L28.6 34.2L33.1 34.6L33 29.9L31.6 29.6C31.6 29.6 31 30.5 31.4 29.1C31.9 27.6 33.8 22.6 34.4 21.1C35 19.6 35 20.1 35 20.1C35 20.1 35 19.2 35.6 20.8C36.2 22.2 38.6 29.1 38.6 29.1C38.6 29.1 38.4 29.6 38.1 29.8C37.9 29.9 37 29.9 37 29.9C37 29.9 37 33.6 37 34.5C37.1 35.3 37.4 34.9 37.4 34.9L38.8 34.9C38.8 34.9 46.2 13.4 47.9 8.8C49.5 4.3 48.3 7.9 48.9 7.5C49.4 7.2 49.6 6.5 51 6.7ZM51.5 10.7L53.6 11.3C53.6 11.3 45.5 42 43.8 48.4C42 54.7 43.4 49.5 43.4 49.5L39.9 49.5C39.9 49.5 40.4 47.6 40.1 45.9C39.9 44.1 38.5 38.9 38.5 38.9L41.2 39C41.2 39 40.2 42.8 42 38C43.7 33.3 51.5 10.7 51.5 10.7ZM9.9 37.4L16.9 37.8C16.9 37.8 18.6 43 18.9 44.6C19.3 46.3 19.2 46.8 19.1 47.6C19.1 48.5 18.9 49.5 18.9 49.5L16.1 49.4L9.9 37.4ZM21.2 38L25.4 38.1C25.4 38.1 27.2 43.7 27.6 45.5C27.9 47.4 27.2 49.5 27.2 49.5L22.9 49.5C22.9 49.5 23.4 46.9 23.1 45C22.9 43 21.2 38 21.2 38ZM29.9 38.5L34 38.6C34 38.6 35.6 42.8 35.9 44.6C36.1 46.5 35.8 49.5 35.8 49.5L31.4 49.5C31.4 49.5 31.7 45.9 31.4 44C31.2 42.2 29.9 38.5 29.9 38.5Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M34.5 5.8C34.5 5.8 34.6 5.4 35.2 6.8C35.9 8.3 38.2 14.4 38.2 14.4L37.9 15.1L36.1 15.1C36.1 15.1 35.8 16 35.9 16.6C35.9 17.3 35.8 17.5 36.2 18.8C36.7 20 38.1 22.6 38.5 23.9C38.9 25.3 38.7 26.1 38.6 27.1C38.6 28 38.4 28.5 38 29.4C37.5 30.4 36.6 32.1 36.1 32.8C35.7 33.4 35.9 33.1 35.4 33.1C34.8 33.2 33.5 33.2 33 33.1C32.4 33 32.2 32.5 32.2 32.5C32.2 32.5 34.3 29.1 34.8 27.9C35.2 26.8 35.4 27.1 35 25.6C34.7 24 33 20.6 32.5 18.9C32.1 17.1 32.5 15.2 32.5 15.2C32.5 15.2 31.5 15.2 31.2 15.1C31 15 30.8 14.6 30.8 14.6L34.5 5.8ZM43.4 5.8C43.4 5.8 43.4 5.2 44 6.7C44.7 8.1 47.1 14.3 47.1 14.3L46.8 15.1L45 15.2C45 15.2 44.4 16 44.8 17.4C45.1 18.7 46.7 21.9 47.1 23.4C47.6 24.8 47.5 25.4 47.5 26.2C47.5 27.1 47.6 27.6 47.1 28.6C46.7 29.7 45.5 32 45 32.8C44.5 33.5 44.7 33.1 44.1 33.1C43.6 33.2 42.4 33.2 42 33.1C41.5 33.1 41.2 33 41.2 33C41.2 33 40.8 33.2 41.1 32.5C41.5 31.7 43.1 29.3 43.5 28.1C44 27 44.4 27.2 44 25.6C43.7 23.9 41.8 20.2 41.4 18.4C40.9 16.7 41.4 15.2 41.4 15.2L40 15.1L39.6 14.3L43.4 5.8ZM52.2 5.8C52.2 5.8 52.2 5 52.9 6.5C53.5 7.9 56 14.4 56 14.4L55.6 15.1L53.8 15.2C53.8 15.2 53.2 15.5 53.6 16.9C54.1 18.4 55.8 22.4 56.2 24.1C56.7 25.7 56.6 25.9 56.5 26.9C56.3 27.9 55.9 29.1 55.5 30.1C55 31 54.3 32.2 54 32.8C53.6 33.3 53.7 33.1 53.1 33.1C52.6 33.2 51.3 33.2 50.8 33.1C50.2 33 50 32.5 50 32.5C50 32.5 52.1 29.1 52.5 27.9C53 26.6 53.2 26.8 52.9 25.2C52.5 23.8 50.8 20.5 50.4 18.9C49.9 17.2 50.2 15.2 50.2 15.2L49 15.1L48.5 14.4L52.2 5.8ZM24.8 18.6C26.2 18.5 28.7 18.7 29.6 18.8C30.4 18.8 29.9 19.1 29.9 19.1L29.6 20.6C29.6 20.6 26.6 20.4 25.1 20.6C23.5 20.9 21.6 21.4 20.1 22.1C18.6 22.7 17.2 23.6 16.1 24.4C14.9 25.3 14 26.4 13.2 27.2C12.5 28.1 12.3 28.5 11.8 29.4C11.2 30.4 10.6 31.8 10.2 33C9.8 34.3 9.5 35.8 9.3 37C9.2 38.1 9.2 38.8 9.3 39.9C9.5 41 10.2 43.5 10.2 43.5L21.8 38.8C21.8 38.8 21.7 37.8 21.9 37.1C22.1 36.5 22.5 35.5 22.9 35C23.4 34.4 23.9 34.1 24.4 33.8C24.9 33.4 25.3 33.2 25.9 33C26.6 32.9 27.5 32.8 28.4 33C29.2 33.3 30.2 33.8 30.9 34.4C31.5 35 32.1 35.9 32.4 36.6C32.6 37.4 32.6 38.8 32.6 38.8L44.1 43.5C44.1 43.5 44.8 41.2 45 40C45.1 38.7 44.8 36.9 44.9 36.1C44.9 35.4 45 35.8 45.2 35.8C45.5 35.7 46.5 35.6 46.5 35.6C46.5 35.6 46.9 35.5 47 36.4C47 37.2 47.1 39.3 47 40.5C46.8 41.8 46.6 42.7 46.2 44C45.9 45.2 45.2 46.8 44.5 48C43.9 49.1 43.2 50.1 42.5 51C41.7 52 40.8 52.9 39.9 53.6C38.9 54.4 38.1 55 37 55.6C35.8 56.3 34.1 57 32.8 57.5C31.4 57.9 29.7 58.1 28.6 58.2C27.4 58.4 27.1 58.4 25.9 58.2C24.6 58.1 22.3 57.6 20.9 57.2C19.6 56.9 19 56.5 17.9 56C16.9 55.4 15.9 54.8 14.8 54C13.8 53.1 12.5 51.8 11.7 50.8C10.8 49.7 10.3 49 9.8 47.9C9.2 46.7 8.5 45.2 8.2 44C7.8 42.9 7.6 42.1 7.5 40.8C7.3 39.4 7.3 37.3 7.5 36C7.6 34.6 7.8 33.8 8.2 32.6C8.5 31.5 9.1 30.1 9.8 28.9C10.4 27.8 11.1 26.7 11.8 25.8C12.6 24.8 13.4 24 14.3 23.2C15.3 22.5 16.5 21.7 17.6 21.1C18.6 20.4 19.4 20 20.6 19.6C21.8 19.2 23.3 18.8 24.8 18.6ZM22.9 42.1C22.9 42.1 25.4 43.7 26.4 44C27.4 44.2 28.1 44 28.9 43.6C29.8 43.3 31.4 42.1 31.4 42.1L42.6 47C42.6 47 40.8 50 39.5 51.2C38.1 52.5 36.3 53.7 34.8 54.5C33.2 55.2 31.3 55.7 29.9 56C28.6 56.2 27.9 56.2 26.8 56.1C25.6 56.1 24.3 56 23.1 55.6C21.8 55.3 20.2 54.8 19.1 54.2C18 53.7 17.3 53.2 16.4 52.5C15.6 51.9 14.9 51.3 14.1 50.4C13.2 49.4 11.7 47 11.7 47L22.9 42.1Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.4 13.3C32.8 13.2 34.2 13.3 36.5 13.6C38.9 13.8 42.2 14.4 44.6 15.1C47.1 15.7 49.4 16.6 51.4 17.4C53.3 18.3 55.3 19.4 56.2 19.9C57.2 20.5 57.2 20.9 57.2 20.9C57.2 20.9 46.7 39.4 44.5 43.1C42.2 46.9 44.5 43.6 43.9 43.4C43.2 43.1 41.9 42.1 40.8 41.6C39.6 41.1 37.9 40.6 36.9 40.4C35.8 40.1 35.6 40 34.5 40C33.5 39.9 30.6 40 30.6 40C30.6 40 31.8 43.5 32.4 44.2C32.9 45 33.3 44.5 33.8 44.9C34.2 45.2 34.8 46.1 35 46.6C35.3 47.2 35.1 47.8 35 48.2C34.9 48.7 34.9 49.1 34.5 49.5C34 49.9 32.9 50.5 32.1 50.6C31.4 50.8 30.7 50.3 30.2 50C29.8 49.8 29.5 49.4 29.2 49C29 48.5 28.8 47.8 28.9 47.2C28.9 46.7 29.7 46.6 29.4 45.5C29.1 44.3 27.1 40.5 27.1 40.5C27.1 40.5 24.9 41 23.8 41.5C22.6 41.9 20.8 43.1 20.1 43.4C19.4 43.6 21.8 46.9 19.6 43.1C17.3 39.4 6.8 20.9 6.8 20.9C6.8 20.9 6.4 20.8 7 20.4C7.5 20.1 8.7 19.3 10.3 18.6C12 17.8 15 16.5 17.1 15.8C19.1 15 20.5 14.7 22.8 14.2C25 13.8 28.1 13.5 30.4 13.3ZM28.4 16.8C30.4 16.6 33.6 16.6 35.5 16.8C37.5 16.9 38.1 16.9 40 17.4C42 17.8 45.3 18.6 47.5 19.4C49.6 20.1 53 21.9 53 21.9L43 39.1C43 39.1 38.2 37.4 36.5 37C34.9 36.5 34.5 36.6 33.2 36.5C32 36.5 29.1 36.6 29.1 36.6L20.9 18.2C20.9 18.2 22.7 17.6 23.9 17.4C25.2 17.1 26.5 16.9 28.4 16.8ZM17.2 19.1C17.2 19.1 16.4 16.5 17.8 19.6C19.1 22.6 25.6 37.4 25.6 37.4L21.1 39.1L11.1 22.1C11.1 22.1 11.5 21.5 12.6 21.1C13.6 20.6 17.2 19.1 17.2 19.1Z"/><text x="41" y="40" font-size="12">A</text>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.4 15.7C30.8 15.5 32.9 15.4 35.5 15.7C38.2 15.9 41.4 16.3 44.4 17.1C47.3 17.9 50.9 19.4 53.1 20.4C55.4 21.5 58.1 23.4 58.1 23.4C58.1 23.4 46.4 42 44 45.8C41.5 49.5 44.2 46.1 43.5 45.9C42.9 45.6 41.1 44.5 39.9 44C38.6 43.5 37.6 43.1 36 42.9C34.4 42.6 30.2 42.8 30.2 42.8C30.2 42.8 31.5 46 32.1 46.9C32.8 47.7 33.6 47.4 34 47.9C34.5 48.3 34.9 48.8 35 49.5C35.2 50.1 35 51.2 34.8 51.8C34.5 52.3 34.2 52.5 33.9 52.8C33.5 53 33 53.3 32.5 53.4C31.9 53.4 31 53.2 30.4 53C29.9 52.7 29.5 52.3 29.2 51.8C29 51.2 28.9 50 28.9 49.5C29 48.9 29.7 49.3 29.4 48.2C29 47.2 26.9 43.1 26.9 43.1C26.9 43.1 25.2 43.5 24.1 44C23.1 44.4 20.4 45.9 20.4 45.9C20.4 45.9 22.2 49.1 19.8 45.5C17.3 41.8 5.8 23.8 5.8 23.8C5.8 23.8 5.6 23.5 6 23.1C6.5 22.8 7.2 22.3 8.8 21.6C10.3 20.8 13.5 19.2 15.6 18.4C17.6 17.6 19.1 17.2 21.2 16.8C23.4 16.3 26.1 15.8 28.4 15.7ZM30.6 18.9C32.3 18.8 34.6 18.9 36.5 19.1C38.4 19.2 40.1 19.5 42 19.9C43.8 20.4 45.7 20.9 47.6 21.6C49.6 22.4 53.8 24.4 53.8 24.4L42.8 41.6C42.8 41.6 40.4 40.6 39.2 40.2C38.1 39.9 37.5 39.6 35.8 39.5C34 39.3 28.8 39.2 28.8 39.2L20.2 20.4C20.2 20.4 24.1 19.5 25.9 19.2C27.6 19 28.8 18.9 30.6 18.9ZM16.9 21.4L25.4 40L21.4 41.6L10.2 24.6C10.2 24.6 11.4 23.8 12.6 23.2C13.7 22.7 16.9 21.4 16.9 21.4Z"/><polygon fill="currentColor" stroke="none" points="9.8,10.5 21.0,10.5 21.0,13.8 9.8,13.8"/><polygon fill="currentColor" stroke="none" points="26.3,10.5 37.7,10.5 37.7,13.8 26.3,13.8"/><polygon fill="currentColor" stroke="none" points="43.0,10.5 54.2,10.5 54.2,13.8 43.0,13.8"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.6 5.8C23.1 5.5 22.4 6 22.4 6C22.4 6 22.3 5.2 22.8 6.5C23.2 7.7 24.9 12.2 25.2 13.4C25.6 14.7 25.1 14.1 25.1 14.1L22.4 12.9C22.4 12.9 21 17.4 19.4 18.6C17.9 19.8 12.9 20.1 12.9 20.1C12.9 20.1 12.6 20 12.8 19.4C12.9 18.9 13 18.2 13.7 16.8C14.3 15.2 16.6 10.4 16.6 10.4L13.4 8.8L13.4 8.2C13.4 8.2 20.1 6.2 21.6 5.8ZM29.9 16.9C31.5 16.8 37 16.7 39.4 16.9C41.7 17 42.5 17.2 44.1 17.8C45.8 18.3 48.3 19.5 49.5 20.1C50.8 20.8 50.7 20.8 51.5 21.4C52.2 22.1 53.2 22.8 54 24.1C54.9 25.3 56.2 27.5 56.6 29.1C57.1 30.8 57.1 32.5 56.9 34.1C56.6 35.8 55.8 37.5 55 39C54.1 40.4 52.9 41.6 51.5 42.8C50.2 43.9 48.4 44.9 46.6 45.6C44.9 46.4 43.8 47 41 47.2C38.2 47.5 31.8 47.5 29.9 47.5C27.9 47.4 29.8 48.4 29.4 47.1C28.9 45.9 27.5 42 26.9 40C26.4 38.1 26.4 37 26.2 35.6C26.1 34.3 26.1 33.1 26.1 31.9C26.1 30.8 26.1 30.1 26.2 28.6C26.4 27.2 26.8 25 27.1 23.4C27.5 21.7 28.3 19.8 28.6 18.8C29 17.7 29.2 17.5 29.4 17.1C29.6 16.8 28.2 16.9 29.9 16.9ZM31.8 20.2C31.8 20.2 36.9 20.2 38.6 20.2C40.4 20.3 40.9 20.4 42.4 20.8C43.8 21.1 45.8 21.9 47.2 22.6C48.7 23.4 49.9 24.4 50.9 25.4C51.8 26.5 52.7 27.9 53.1 29.1C53.6 30.4 53.8 31.7 53.6 33C53.5 34.2 52.9 35.8 52.4 36.9C51.8 37.9 51.1 38.7 50.2 39.5C49.4 40.2 48.6 41 47.2 41.6C45.9 42.3 43.8 43.1 42.4 43.5C40.9 43.9 40.3 44 38.5 44C36.8 44.1 31.6 44 31.6 44C31.6 44 30.3 39.8 29.9 37.6C29.6 35.5 29.6 33 29.6 31.1C29.6 29.3 29.6 28.5 29.9 26.6C30.3 24.8 31.8 20.2 31.8 20.2ZM23.1 20.6C25.8 19.9 23.6 20.6 23.6 20.6C23.6 20.6 23.8 20.7 23.8 21.1C23.7 21.6 23.5 22.9 23.2 23.4C23 23.9 24.9 23.4 22.4 24.1C20 24.9 10.8 27.3 8.3 27.9C5.9 28.6 7.5 28.1 7.5 28.1C7.5 28.1 7.2 28.1 7.2 27.6C7.1 27.2 7.2 25.1 7.2 25.1C7.2 25.1 5.1 25.4 7.8 24.6C10.4 23.9 20.5 21.2 23.1 20.6ZM21.9 27.4L22.4 27.8C22.4 27.8 22.5 29.7 22.4 30.2C22.2 30.8 24.1 30.1 21.6 30.9C19.2 31.6 10.3 34 7.8 34.5C5.4 35.1 7.2 34.2 7.2 34.2L7.2 31.6C7.2 31.6 5.3 31.9 7.8 31.1C10.2 30.4 21.9 27.4 21.9 27.4ZM21.4 34C23.9 33.4 22.4 34.4 22.4 34.4C22.4 34.4 22.5 36.3 22.4 36.8C22.4 37.2 24.4 36.5 21.9 37.2C19.5 38 10.3 40.5 7.8 41C5.4 41.6 7.2 40.6 7.2 40.6C7.2 40.6 7.1 38.6 7.2 38.1C7.2 37.6 5.3 38.3 7.7 37.6C10 37 19 34.5 21.4 34ZM22.6 40.1C22.6 40.1 23.1 40.3 23.2 40.8C23.4 41.2 23.6 42.8 23.6 42.8C23.6 42.8 25.6 42.7 23.1 43.5C20.5 44.2 10.9 46.8 8.2 47.5C5.6 48.1 7.2 47.1 7.2 47.1C7.2 47.1 7 45.2 7.2 44.6C7.3 44.1 5.3 44.8 7.8 44C10.4 43.3 22.6 40.1 22.6 40.1ZM19.4 46.9C20.4 46.6 20.1 47 20.1 47L22.1 51.1L24.6 50L25.1 50.4C25.1 50.4 23.3 56 22.8 57.4C22.2 58.7 22.1 58.4 22.1 58.4C22.1 58.4 15.5 56.7 14.1 56.2C12.6 55.8 13.2 55.8 13.2 55.8C13.2 55.8 13 55.6 13.6 55.2C14.1 54.9 16.6 53.8 16.6 53.8L14.2 48.5C14.2 48.5 18.5 47.1 19.4 46.9Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M5.5 15.4C7.7 15.3 14.7 15.3 17.4 15.4C20.2 15.6 20.9 15.8 22.1 16.1C23.2 16.5 23.9 17 24.4 17.4C25 17.9 25.3 18.1 25.6 18.6C26 19.2 26.4 19.9 26.8 20.6C27.1 21.2 27.3 21.9 27.4 22.9C27.6 23.8 27.7 25.3 27.6 26.4C27.6 27.4 27.5 28.3 27.2 29.2C27 30.2 26.5 31.2 26.1 31.9C25.6 32.7 25 33.3 24.4 33.9C23.7 34.4 22.8 34.8 22.1 35.1C21.3 35.5 21.9 35.6 20.1 35.8C18.2 35.9 10.8 36 10.8 36C10.8 36 10.8 45.5 10.8 47.5C10.7 49.6 10.2 48.4 10.2 48.4L5.3 48.4C5.3 48.4 4.8 52.9 4.8 47.5C4.7 42.2 4.6 21.5 4.8 16.1C4.9 10.8 3.4 15.6 5.5 15.4ZM10.8 20.4C10.8 20.4 16.6 20.4 17.9 20.4C19.3 20.5 18.4 20.4 18.8 20.6C19.1 20.7 19.8 20.9 20.2 21.6C20.7 22.2 21.2 23.4 21.4 24.4C21.6 25.3 21.7 26.4 21.4 27.4C21.2 28.3 20.6 29.5 20.1 30.1C19.6 30.6 20 30.8 18.4 30.9C16.9 31.1 10.8 30.9 10.8 30.9L10.8 20.4ZM50.1 21.6L51 21.6C51 21.6 50.6 19.4 51.5 22.6C52.4 25.8 55.6 37.5 56.5 40.9C57.3 44.2 56.8 42.5 56.8 42.5C56.8 42.5 58.4 42.9 56.4 43C54.3 43 44.5 43 44.5 43L44 42.5C44 42.5 48.4 25.8 49.5 22.4C50.5 18.9 50.1 21.6 50.1 21.6ZM29.6 23.9L33 24.1C33 24.1 33.5 27.1 33.5 28.1C33.6 29 33.6 29.1 33.5 29.9C33.3 30.8 32.9 32.1 32.5 33.1C32 34.1 31.4 35.2 30.9 36C30.3 36.7 29.4 37.4 29.4 37.4C29.4 37.4 28.6 36.9 28.1 36.5C27.7 36.1 26.9 35 26.9 35C26.9 35 28.2 33.3 28.6 32.5C29.1 31.8 29.4 31.2 29.6 30.2C29.8 29.2 29.9 27.5 29.9 26.6C29.8 25.6 29.2 24.4 29.2 24.4L29.6 23.9ZM36 23.9C36.5 23.8 38.3 23.8 38.9 23.9C39.4 23.9 39.1 23.3 39.2 24.1C39.4 24.9 39.7 27.3 39.6 28.6C39.6 30 39.4 30.9 39.1 32.1C38.9 33.4 38.5 34.6 37.9 35.9C37.2 37.1 36.1 38.9 35.5 39.9C34.8 40.8 33.9 41.4 33.9 41.4C33.9 41.4 32 39.9 31.6 39.5C31.1 39 31.1 39.5 31.4 38.9C31.8 38.2 33.1 36.9 33.8 35.8C34.4 34.6 34.9 33.2 35.2 32.2C35.6 31.3 35.7 31.4 35.8 30.1C35.8 28.7 35.5 25.3 35.5 24.2C35.6 23.2 35.4 23.9 36 23.9ZM41.9 23.9C41.9 23.9 44.3 23.8 44.9 23.9C45.4 23.9 45.2 23.1 45.2 24.2C45.3 25.4 45.5 29.2 45.4 30.9C45.2 32.7 44.9 33.4 44.5 34.6C44.2 35.9 43.9 36.8 43.2 38.1C42.6 39.5 41.7 41.3 40.9 42.5C40 43.6 38.2 45.2 38.2 45.2L35.8 43C35.8 43 38.1 40.1 39 38.5C39.8 37 40.5 35.4 41 33.9C41.4 32.4 41.7 31.1 41.8 29.6C41.8 28 41.4 25.3 41.5 24.4C41.5 23.4 41.9 23.9 41.9 23.9Z"/><polygon fill="currentColor" stroke="none" points="41.7,44.2 59.3,44.2 59.3,48.5 41.7,48.5"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 10.3C34 10.2 36.2 11.7 38.4 12.7C40.5 13.7 42.7 15 44.5 16.4C46.4 17.7 48 19.3 49.2 20.6C50.5 21.8 51.2 22.9 52 24.1C52.9 25.2 53.5 26.2 54.4 27.8C55.2 29.3 56.2 31.5 56.9 33.5C57.5 35.4 58.4 37.9 58.2 39.5C58.1 41.2 56.9 42 55.9 43.2C54.9 44.5 53 46.7 52.2 47.4C51.5 48 51.5 47.4 51.5 47.4L44.6 35.5C44.6 35.5 44.4 35.4 45 35C45.7 34.6 48.5 33.1 48.5 33.1C48.5 33.1 47.4 30.9 46.5 29.6C45.7 28.4 44.5 26.8 43.5 25.6C42.4 24.5 41.4 23.7 40.4 22.9C39.3 22.1 37.4 20.9 37.4 20.9C37.4 20.9 35.6 23.4 35.1 23.9C34.7 24.5 34.5 24.2 34.5 24.2L23.4 16.2L23.4 15.8C23.4 15.8 24.7 14.5 26.1 13.6C27.6 12.7 29.9 10.5 31.9 10.3ZM10.8 39.4C11.4 39.3 12.2 39.3 12.8 39.5C13.3 39.6 13.9 39.8 14.3 40C14.8 40.3 15.2 40.6 15.6 41C15.9 41.5 16.2 42.2 16.4 42.6C16.5 43.1 16.2 43.8 16.2 43.8L14.8 44C14.8 44 13.8 42.3 13.2 41.9C12.7 41.4 12.4 41.4 11.8 41.4C11.1 41.3 10.1 41.5 9.6 41.6C9 41.8 8.7 42.2 8.6 42.5C8.4 42.9 8.5 43.5 8.6 43.8C8.7 44 8.1 44 9.2 44.4C10.2 44.7 13.6 45.6 14.8 46C15.9 46.5 15.8 46.7 16.1 47.1C16.5 47.6 16.7 48.2 16.9 48.6C17 49.1 17 49.5 16.9 50C16.7 50.6 16.6 51.4 15.8 52C15.1 52.6 13.4 53.4 12.6 53.6C11.7 53.9 11.4 53.8 10.7 53.6C9.9 53.5 8.6 53.1 8 52.8C7.3 52.4 6.9 52 6.5 51.5C6.2 50.9 5.8 49.4 5.8 49.4L6.2 48.5L7.5 48.5C7.5 48.5 8.2 50.1 8.8 50.6C9.3 51.1 10.2 51.4 10.8 51.5C11.5 51.7 12.2 51.7 12.8 51.5C13.3 51.2 14.1 50.7 14.4 50.4C14.8 50 14.7 49.6 14.7 49.2C14.6 48.9 15.1 48.7 14.1 48.2C13 47.8 9.6 46.9 8.4 46.5C7.3 46 7.4 45.8 7 45.5C6.7 45.1 6.6 44.9 6.5 44.5C6.3 44 6.1 43.6 6.2 43C6.4 42.4 6.7 41.4 7.2 40.9C7.6 40.3 8.2 40 8.8 39.8C9.4 39.5 10.1 39.4 10.8 39.4ZM24.2 39.4C25.1 39.2 25.6 39.2 26.4 39.5C27.1 39.7 28.1 40 28.8 40.5C29.4 41.1 30.1 41.8 30.6 42.6C31 43.5 31.3 44.5 31.4 45.4C31.6 46.2 31.6 46.7 31.4 47.6C31.2 48.6 30.7 50 30.2 50.9C29.8 51.7 29.3 52.1 28.6 52.5C27.8 53 26.4 53.5 25.6 53.6C24.9 53.8 24.8 53.9 23.9 53.6C23.1 53.4 21.6 52.9 20.9 52.4C20.1 51.8 19.7 51.4 19.2 50.5C18.8 49.7 18.3 48.2 18.1 47.1C18 46.1 18.2 45.1 18.4 44.2C18.7 43.4 19.2 42.4 19.6 41.8C20.1 41.1 20.6 40.6 21.4 40.2C22.1 39.9 23.4 39.5 24.2 39.4ZM24.1 41.5C24.6 41.3 25 41.3 25.6 41.5C26.1 41.6 26.8 41.9 27.2 42.1C27.7 42.4 27.9 42.6 28.1 43C28.4 43.5 28.8 44.2 28.9 45C29.1 45.9 29 47.3 28.9 48C28.9 48.8 28.8 48.8 28.6 49.2C28.3 49.7 27.9 50.3 27.4 50.6C27 51 26.5 51.3 25.9 51.5C25.2 51.6 24.4 51.6 23.9 51.5C23.3 51.4 22.9 51.2 22.4 50.9C22 50.5 21.6 50 21.2 49.5C20.9 49 20.8 48.6 20.6 47.9C20.5 47.1 20.5 46 20.6 45.2C20.8 44.5 21 43.9 21.2 43.4C21.5 42.9 21.8 42.6 22.2 42.2C22.7 41.9 23.5 41.6 24.1 41.5ZM37.6 39.4C38.3 39.3 39 39.3 39.6 39.5C40.3 39.6 41.2 40.1 41.6 40.4C42.1 40.6 42.3 40.8 42.5 41.2C42.8 41.7 43.2 42.4 43.2 42.9C43.3 43.3 43 43.8 43 43.8L41.6 44C41.6 44 40.8 42.4 40.2 42C39.8 41.5 39.3 41.4 38.6 41.4C38 41.3 37 41.4 36.5 41.6C35.9 41.9 35.5 42.3 35.4 42.6C35.2 43 35.2 43.4 35.4 43.6C35.5 43.9 35 43.9 36 44.4C37.1 44.8 40.6 45.7 41.8 46.1C42.9 46.6 42.7 46.9 43 47.2C43.4 47.6 43.5 48 43.6 48.5C43.8 49 43.8 49.7 43.6 50.2C43.5 50.8 43.2 51.4 42.9 51.9C42.5 52.3 42.2 52.6 41.6 52.9C41.1 53.1 40 53.5 39.4 53.6C38.7 53.8 38.2 53.8 37.5 53.6C36.7 53.5 35.4 53.1 34.8 52.8C34.1 52.4 33.7 51.9 33.4 51.4C33 50.8 32.7 49.9 32.6 49.5C32.6 49 33.1 48.5 33.1 48.5L34.5 48.5C34.5 48.5 35.3 50.4 35.9 50.9C36.4 51.4 36.9 51.5 37.6 51.5C38.4 51.6 39.6 51.5 40.2 51.2C40.9 51 41.2 50.4 41.5 50C41.7 49.7 41.7 49.6 41.5 49.2C41.4 48.9 41.8 48.6 40.8 48.1C39.7 47.7 36.2 46.8 35 46.4C33.9 45.9 34.1 45.8 33.9 45.5C33.6 45.1 33.4 44.9 33.2 44.4C33.1 43.8 33.1 42.8 33.2 42.2C33.4 41.7 33.6 41.4 34 41C34.4 40.5 35 40 35.6 39.8C36.3 39.5 37 39.4 37.6 39.4Z"/>'
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
