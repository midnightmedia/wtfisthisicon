/* Electric & hybrid car lights (ev) and Chargers & plugs (power).
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
    meaning: "The car has found a problem in its electric drive system: the high-voltage battery, the motor, the inverter or the computer that runs them. It may cut power, or shut the drive system down to protect itself.",
    action: "Pull over somewhere safe as soon as you can, switch the car off, wait a minute and restart it. If the light comes back, or the car won't go back into READY, don't drive on. Call the manufacturer's breakdown assistance. Never touch or try to fix the high-voltage parts (the bright orange cables) yourself.",
    tip: "Brands differ. Toyota and Lexus hybrids use a car with ! as their hybrid system warning. Some makers show it in amber for less serious faults, or use a car with a spanner for 'service needed'. Your handbook has the exact meaning for your car.",
    // Traced from the Nissan Leaf manual.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M33.1 17.9C32.8 18 32.1 18.1 31.8 18.4C31.4 18.7 30.7 20.2 30.6 20.7C30.5 21.4 30.6 22.2 30.6 23C30.6 24.7 30.6 26.4 30.6 28.1C30.6 29.6 30.6 31.1 30.6 32.6C30.6 33.2 30.5 34 30.6 34.6C30.6 35.1 31.4 36.8 31.8 37C32.3 37.4 33.5 37.5 34.1 37.5C35.3 37.5 36.3 36.3 36.5 35.3C36.7 34.5 36.6 33.6 36.6 32.9C36.6 31 36.6 29.1 36.6 27.2C36.6 25.6 36.6 23.9 36.6 22.2C36.6 21.5 36.7 20.7 36.5 20C36.2 18.8 35.1 17.8 33.9 17.9C33.6 17.9 33.4 17.9 33.1 17.9ZM46.3 43.8C45.5 43.6 43.9 42.8 43.5 42.1C43.1 41.6 43.4 41 42.8 40.6C42.5 40.4 42.3 40.5 42 40.5C41.7 40.5 41.5 40.3 41.2 40.3C40.1 40.1 38.1 40.1 37.4 41C36.6 43.8 40.1 42 41.2 43C41.9 43.6 42.1 44.4 42.8 45C43.2 45.4 43.6 45.3 44 45.5C44.6 45.7 45.2 46 45.8 46.1C46.9 46.2 48.6 45.8 49.5 45.1C49.9 44.8 50.5 44.3 50.8 43.8C51 43.5 51 43.2 51.3 43C51.6 42.7 52.1 42.5 52.4 42.3C52.9 42.1 53.4 42.3 53.9 42.2C54.2 42.1 54.5 41.9 54.9 41.8C55.1 41.7 55.4 41.8 55.7 41.8C56 41.7 57.5 41.1 57.7 40.9C58.4 39.8 58.3 38.6 58.3 37.4C58.3 36.5 58.5 33.8 58.2 33.1C58 32.5 57 31.6 56.4 31.3C56.1 31.2 55.9 31.3 55.6 31.1C55.4 31.1 55.2 30.9 55 30.8C54.6 30.8 54.2 30.8 53.9 30.7C53.6 30.6 53.4 30.4 53.1 30.4C52.8 30.3 52.5 30.4 52.2 30.3C51.9 30.2 51.6 30 51.3 29.9C50.4 29.7 50.3 30 49.3 29.6C48.8 29.3 48.1 29.6 47.6 29.1C46.2 27.9 45 26.5 43.6 25.1C43.2 24.7 42.8 24.2 42.3 23.8C41.8 23.5 41.3 23.3 40.8 23.1C40.5 22.9 40.3 22.8 40 22.7C39.9 22.7 38.2 22.4 38.1 22.4C37.4 22.6 37.4 24.2 37.8 24.6C38.2 24.9 38.5 24.7 38.9 24.9C39.9 25.2 40.6 25.7 41.3 26.4C42.2 27.2 45.6 30.9 46.4 31.3C46.6 31.4 46.9 31.4 47.1 31.4C47.4 31.5 47.6 31.7 47.9 31.8C48.2 31.8 48.4 31.8 48.7 31.8C49.1 31.9 49.4 32.1 49.7 32.2C50.1 32.3 50.6 32.2 51 32.3C51.4 32.3 51.6 32.5 51.9 32.6C52.3 32.8 52.6 32.7 53 32.8C53.2 32.8 53.4 33 53.6 33.1C54 33.2 54.4 33.1 54.8 33.2C55.2 33.3 56.5 34.6 56.7 35C56.9 35.4 56.8 36.1 56.8 36.6C56.8 37 56.9 37.5 56.8 37.9C56.5 38.6 55.9 39.6 55 39.6C54.8 39.6 54.7 39.6 54.5 39.6C54.2 39.6 54 39.8 53.7 39.8C53.4 39.9 53 39.8 52.6 39.9C52.2 39.9 51.8 40.2 51.4 40.3C51 40.3 50.6 40.3 50.2 40.5C49.7 40.9 49.7 41.4 49.3 41.9C48.9 42.3 48.3 43 47.7 43.3C47.5 43.5 46.6 43.7 46.3 43.8ZM30 40.6C29.5 40.1 28.6 40.3 28 40.3C26.9 40.3 22.2 40.1 21.5 40.4C20.9 40.7 21.2 41.4 20.8 41.9C20.4 42.3 19.8 43 19.2 43.3C19 43.5 18.2 43.7 17.8 43.8C16.7 43.6 15.5 43.1 14.9 42C14.7 41.5 14.5 41 14.1 40.6C13.9 40.5 12.8 40.3 12.6 40.3C11.8 40.3 10.7 40.5 9.9 40.2C9.5 40 8.9 39.8 8.6 39.4C8.5 39.1 8.2 38.6 8.1 38.3C8 37.8 8 35 8.2 34.6C8.3 34.3 8.7 33.9 9 33.8C9.2 33.6 9.5 33.6 9.8 33.6C10.1 33.5 10.3 33.3 10.6 33.2C11.3 33 12.2 33.2 13.1 33.2C13.6 33.1 13.9 32.8 14.4 32.7C14.9 32.7 15.4 32.8 15.8 32.7C16.1 32.7 16.4 32.5 16.7 32.5C17.2 32.5 17.4 32.4 17.9 32.3C18.2 32.2 18.5 32.3 18.8 32.2C19 32.2 19.1 32 19.3 32C19.5 32 19.7 32.1 19.9 32C20.9 31.9 22.7 31.2 23.4 30.5C24.3 29.8 25.2 28.9 25.9 28.1C26.1 27.8 26.1 27.5 26.3 27.2C26.7 26.8 27.2 26.4 27.6 25.9C27.9 25.7 28.1 25.3 28.5 25.1C28.8 24.9 29.2 25.1 29.6 24.7C29.9 24.3 29.9 23.2 29.4 22.8C29 22.5 28 22.6 27.6 22.9C27.3 23.1 27.1 23.3 26.9 23.5C25.5 24.2 26.1 24.1 25.4 25.1C24.8 25.7 21.5 29.1 21 29.4C20.8 29.4 20.5 29.4 20.3 29.5C20 29.6 19.8 29.8 19.5 29.8C18.9 30 18.1 30 17.4 30.1C17.1 30.1 16.9 30.3 16.6 30.3C16 30.4 15.3 30.3 14.7 30.4C14.2 30.4 13.8 30.8 13.3 30.8C12.7 30.8 12.1 30.7 11.5 30.8C11.2 30.8 11 31 10.7 31C10.5 31.1 10.3 31 10.1 31C9.9 31.1 9.6 31.2 9.3 31.2C9 31.3 8.6 31.2 8.3 31.4C7.1 31.9 6.7 32.3 6.1 33.5C5.9 33.8 5.7 34 5.7 34.3C5.6 35 5.7 35.6 5.7 36.2C5.7 37.1 5.6 37.8 6 38.6C6.2 38.9 6.1 39.3 6.2 39.6C6.2 40.1 6.5 40.7 6.8 41.1C7.5 42.1 8.6 42.4 9.8 42.4C10.1 42.4 10.3 42.6 10.6 42.7C11.1 42.7 11.7 42.6 12.3 42.7C13.3 43 13.6 44.6 14.6 45.2C14.9 45.4 15.3 45.3 15.6 45.5C17.1 46.2 18.8 46.3 20.3 45.5C20.6 45.3 20.9 45.2 21.1 45C21.5 44.7 21.9 44.3 22.2 43.9C22.6 43.5 22.6 43 23.1 42.8C23.9 42.4 27.7 42.8 28.9 42.7C29.7 42.6 30.4 41.4 30 40.6ZM32.7 40.3C31.8 40.5 30.8 42.2 30.8 43C30.8 43.3 30.9 43.5 31 43.8C31.2 44.2 31.4 44.7 31.6 45C32.1 45.7 33.7 46.1 34.5 45.7C36.5 44.6 36.1 44.3 36.1 42.2C36.1 40.5 34 40.1 32.7 40.3Z"/>'
  },
  {
    id: "ev-battery-overheat",
    name: "Battery overheating",
    category: "ev",
    color: "red",
    urgency: "stop",
    aka: ["battery temperature warning", "high-voltage battery too hot", "EV battery overheat", "hybrid system overheat", "traction battery temperature"],
    looksLike: ["stacked batteries with a thermometer", "battery with thermometer", "thermometer in a battery", "battery with a temperature gauge", "hot battery", "box with a thermometer"],
    meaning: "The big drive battery is getting too hot, for example after several rapid charges in a row, hard driving on a hot day, or a fault in the battery's cooling system. The car will usually limit power and charging speed to protect it.",
    action: "Ease off, stop somewhere safe and let it cool down. If you're rapid charging, end the session. If the light won't go out, get it checked before driving far. If you see smoke, smell burning, or hear hissing or popping from underneath, get everyone out, move well away and call the emergency services.",
    tip: "A battery with a blue snowflake is the opposite problem: the battery is too cold. That's normal in winter and nothing to worry about.",
    // Traced from the ISO 7000 / ISO 2575 symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.9 24.1L36.9 23.9C37.4 23.4 37.3 22.1 37 21.5C36.5 21 35.4 21.2 34.7 21.2C32.8 21.2 30.8 21.4 29 21.2L28.9 18.7C30.6 18.5 32.9 18.7 34.7 18.7C35.4 18.7 36.5 18.9 37 18.4C37.3 17.9 37.3 16.8 37.1 16.2C36.5 15.7 35.5 15.9 34.8 15.9C33.7 15.9 29.6 16.1 28.9 15.8L28.9 13.4L36.9 13.2C37.3 12.8 37.3 11.4 37 10.8C36.5 10.3 35.4 10.5 34.7 10.5C32.8 10.5 30.8 10.7 28.9 10.5C28.4 9.2 29.6 7.3 28.1 6.1C27.6 5.8 27.1 5.7 26.6 5.7C24.1 5.9 24.7 10.1 24.7 11.8C24.7 16.2 24.7 20.5 24.7 24.8C24.7 26.8 24.9 28.9 24.7 30.8C24.7 31.3 24 31.6 23.8 32C23.3 32.8 23.1 33.6 23.2 34.5C23.8 39.5 31.5 38.1 30.4 33.2C30.1 32 29 31.3 28.9 30.9C28.8 30.4 28.8 24.8 28.9 24.1ZM13.7 25.3C13.2 26 13.6 27.3 13.5 28.1C12.2 28.5 8.6 27.8 7.8 28.5C7.5 29.2 7.7 32.4 7.7 33.4C7.7 37.3 7.7 41.3 7.7 45.3C7.7 46.2 7.4 49.9 7.9 50.5C8.5 50.9 9.7 50.7 10.4 50.7C12.5 50.7 14.6 50.7 16.7 50.7C23.6 50.7 30.5 50.7 37.5 50.7C39.4 50.7 41.3 50.7 43.2 50.7C44 50.7 45 50.9 45.7 50.5C46.2 50 46 46.9 46 45.9C46 41.7 46 37.5 46 33.3C46 32.4 46.2 28.9 45.7 28.4C44.8 27.9 41.5 28.3 40.2 28.2L40 25.5C39.6 25.1 39.1 25.2 38.5 25.2C37.6 25.2 34.7 24.9 34 25.3C33.5 26 33.8 27.3 33.8 28.1C32.9 28.5 31.5 27.8 30.7 28.5C30.4 29.1 30.4 30.5 30.9 31C31.6 31.4 33.5 31.2 34.4 31.2C36.3 31.2 38.2 31.2 40.1 31.2C41 31.2 42 31.1 42.9 31.2L42.9 47.7L10.6 47.7L10.7 31.2C13.5 31 16.4 31.2 19.2 31.2C20.1 31.2 22.1 31.4 22.8 31C23.2 30.4 23.2 28.9 22.7 28.4L19.9 28.2C19.7 27.3 20.1 26.1 19.6 25.4C19.2 25.1 14.2 25.1 13.7 25.3ZM48.5 32.3C48 32.8 48.2 36.4 48.2 37.4C48.2 40.5 48.2 43.7 48.2 46.8C48.2 48.2 48.4 50.3 48.2 51.5L13.3 51.7C12.8 52.1 12.8 53.6 13.1 54.2C13.6 54.7 14.7 54.5 15.5 54.5C17.6 54.5 19.8 54.5 21.9 54.5C28.8 54.5 35.6 54.5 42.4 54.5C44.3 54.5 46.3 54.5 48.2 54.5C49 54.5 50.1 54.7 50.9 54.4C51 54.2 51.1 54.1 51.1 54C51.3 53.2 51.1 50.3 51.1 49.3C51.1 45.2 51.1 41 51.1 36.9C51.1 36 51.4 32.9 50.9 32.3C50.4 32 49.1 32 48.5 32.3ZM35.6 34.7C35 35.3 35.6 36.3 35.2 37C34.6 37 33.6 36.8 33 37.2C32.8 37.8 32.7 39.3 33.2 39.8L35.3 40L35.5 42.1C36 42.5 37.4 42.5 38 42.2C38.6 41.6 38 40.6 38.4 39.9C39.1 39.9 40 40.1 40.6 39.6C40.9 39.1 40.9 37.6 40.5 37.1L38.3 36.9L38.1 34.8C37.6 34.4 36.2 34.4 35.6 34.7ZM53.6 36.1C53.2 36.6 53.4 40.2 53.4 41.1C53.4 44.4 53.4 47.6 53.4 50.8C53.4 51.9 53.6 54.4 53.3 55.3C52.4 55.5 51.5 55.4 50.6 55.4C48.7 55.4 46.8 55.4 44.9 55.4C39.2 55.4 33.5 55.4 27.9 55.4C25.7 55.4 23.5 55.4 21.3 55.4C20.4 55.4 19.2 55.1 18.4 55.5C17.9 56 18 57.4 18.3 58C18.8 58.5 20 58.3 20.7 58.3C22.9 58.3 25.1 58.3 27.2 58.3C34 58.3 40.7 58.3 47.5 58.3C49.4 58.3 51.4 58.3 53.3 58.3C54.1 58.3 55.2 58.5 56 58.2C56.2 58 56.3 57.9 56.3 57.7C56.5 56.2 56.3 54.5 56.3 53C56.3 49 56.3 45 56.3 41.1C56.3 40.1 56.5 36.9 56.2 36.2C55.7 35.7 54.2 35.8 53.6 36.1ZM12.7 37.2C12.4 37.8 12.4 39.1 12.7 39.7C13.2 40.1 17.6 39.9 18.6 39.9C19.2 39.9 19.9 40.1 20.4 39.6C20.6 39 20.6 37.7 20.3 37.2C19.6 36.7 15.5 37 14.4 37C13.9 37 13.2 36.9 12.7 37.2Z"/>'
  },
  {
    id: "ev-charging-cable-connected",
    name: "Charging cable connected",
    category: "ev",
    color: "red",
    urgency: "info",
    aka: ["plug-in indicator", "charge connector connected", "cable connected", "EV plugged in", "charging plug connected"],
    looksLike: ["plug with a cable", "plug", "electric plug", "plug and lead", "cable with a plug"],
    meaning: "A charging cable is still plugged into the car. While it's connected, the car won't let you drive off, so there's no chance of dragging the cable (and the charger) down the street.",
    action: "Stop the charge (in the app, on the charger, or by unlocking the car). Unplug the cable, put it away and close the charge flap. The light should go out, and the car will let you select a gear.",
    tip: "Many cars lock the cable into the socket while the car is locked, so unlock the car to release it. If the light stays on with nothing plugged in, the charge port sensor may be dirty or faulty. The colour varies by brand, and some cars also have a separate light warning that the charge-port flap is still open.",
    // Traced from the Nissan Leaf manual.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.3 26.3C24.4 26.5 23.4 26.3 22.5 26.3C20.5 26.3 18.5 26.3 16.5 26.3C15.7 26.3 14.8 26.2 14 26.4C13.8 26.4 13.6 26.6 13.4 26.7C13.1 26.8 12.8 26.8 12.6 26.9C12.1 27 11.6 27.3 11.2 27.6C10.6 27.9 9.7 28.1 9.3 28.6C9.1 28.9 9 29.2 8.8 29.4C8.7 29.7 8.4 29.9 8.2 30.2C7.9 30.7 7.4 31.6 7.2 32.2C7.1 32.4 7.2 32.7 7.1 32.9C7 33.1 6.8 33.3 6.8 33.5C6.5 34.4 6.7 37.5 6.7 38.6C6.7 40.1 6.7 41.5 6.7 43C6.7 43.6 6.6 44.4 7 44.9C7.2 45 7.4 44.9 7.7 45C7.9 45 8.1 45.2 8.4 45.2C9 45.3 9.9 45.3 10.5 45.2C10.8 45.2 11 45 11.2 45C11.5 44.9 11.7 45 11.9 44.9C12.4 44.2 12.2 42.8 12.2 41.9C12.2 40.1 12.2 38.3 12.2 36.5C12.2 35.8 12.1 35 12.2 34.2C12.5 33.1 13.5 32.2 14.6 31.9C15.5 31.6 16.9 31.8 17.9 31.8C19.6 31.8 21.2 31.8 22.8 31.8C23.6 31.8 24.6 31.7 25.3 31.9C25.5 32.2 25.8 32.5 25.9 32.9C25.9 33.1 25.9 33.4 26 33.7C26.3 34.3 26.6 35 27 35.6C27.2 35.9 27.4 36 27.6 36.3C27.8 36.6 27.8 36.9 28.1 37.2C28.3 37.5 28.7 37.5 29.1 37.8C29.6 38.2 30.1 38.6 30.8 38.9C31.4 39.1 32 39.1 32.6 39.2C32.9 39.2 33.2 39.4 33.5 39.4C34.2 39.5 35 39.4 35.7 39.4C37.4 39.4 39 39.4 40.6 39.4C42.1 39.4 43.6 39.4 45.1 39.4C45.6 39.4 46.4 39.5 46.8 39.1C47.3 38.5 46.8 36 47.1 35.1C47.9 34.7 53 34.9 54.2 34.9C55 34.9 56.3 35.2 56.9 34.6C57.2 34.1 57.1 33.1 57 32.5C56.4 31.9 55 32.1 54.2 32.1C52.6 32.1 51.1 32.1 49.5 32.1C48.8 32.1 47.9 32.3 47.1 32.1C46.9 31.6 47 30.9 47 30.4C47 29.5 46.8 26.3 47.1 25.6C47.9 25.4 48.8 25.6 49.5 25.6C51.1 25.6 52.6 25.6 54.2 25.6C55 25.6 56.4 25.9 57 25.2C57.1 24.6 57.2 23.6 56.9 23.1C56.3 22.5 55 22.8 54.2 22.8C53 22.8 47.9 23 47.1 22.6C46.8 21.8 47.4 19.9 46.6 19.3C45.3 18.4 43.6 18.8 42.1 18.8C40.4 18.8 38.6 18.8 36.9 18.8C36 18.8 35.2 18.7 34.4 18.8C34.1 18.8 33.8 18.9 33.5 19C33.4 19 33.1 18.9 33 19C32.7 19 32.4 19.2 32.1 19.2C31.9 19.2 31.7 19.2 31.4 19.2C31.1 19.3 30.9 19.5 30.7 19.6C30.3 19.7 30 19.7 29.6 19.9C28.9 20.4 27.6 21.7 27.1 22.4C26.8 22.8 26.6 23.3 26.4 23.7C26.3 24 26.1 24.2 26 24.5C25.7 25.2 25.8 25.7 25.3 26.3Z"/>'
  },

  // ───────────────────────── AMBER: sort it soon ─────────────────────────
  {
    id: "ev-turtle-mode",
    name: "Turtle (reduced power mode)",
    quiz: "Reduced power mode",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["power limited", "limited power", "power down warning", "reduced power", "turtle light", "tortoise light", "power limitation indicator", "limp mode"],
    looksLike: ["turtle in a circle", "tortoise in a circle", "turtle", "tortoise", "yellow turtle", "orange turtle", "animal with a shell", "snail", "dome with legs", "slow turtle"],
    meaning: "The car has deliberately cut its power to protect the high-voltage battery or motor, so you'll feel weak acceleration and a lower top speed. The usual reasons: the battery is almost empty, it's very hot or very cold, or there's a fault in the electric drive system.",
    action: "Get out of fast traffic and drive gently. If the battery is nearly flat, head straight for the nearest charger: you may only have a few miles left before the car stops. If the battery isn't low, let the car cool down (or warm up). If the turtle keeps coming back, get it checked.",
    tip: "The Nissan Leaf made the turtle famous. Hyundai and Kia call theirs the 'Power Down' light. Plenty of other EVs and hybrids skip the wildlife and just show a message such as 'Power limited'.",
    // Traced from Volkswagen's warning lamp artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.7 6.3C23.1 6.7 19.1 8.8 17 10.4C10.1 15.5 6 23 6 31.6C6 33.7 6.2 35.8 6.7 37.8C9.3 47.2 15.9 54.2 25.4 56.8C26.8 57.2 28.1 57.4 29.4 57.5C32.3 57.9 35.4 57.7 38.2 56.9C48.9 54.1 56.5 45.4 58 34.5C58.1 33.6 58 32.5 58 31.6C58 29.3 57.9 27.7 57.4 25.4C55.5 17.8 50 11.1 42.7 7.8C41.4 7.3 40 6.6 38.5 6.3C37.9 6.2 37.2 6.3 36.5 6.3C35.2 6.3 33.9 6.3 32.5 6.3C31 6.3 29.4 6.3 27.9 6.3C27.2 6.3 26.4 6.2 25.7 6.3ZM30.4 8C32.4 7.8 34.5 8.2 36.4 8.4C43.8 9.4 50.8 15.4 53.7 22.2C54.8 24.7 55.3 27.3 55.6 30C55.8 31.6 55.6 33.4 55.4 35.1C54.2 43.9 47.3 51.8 38.8 54.2C37.1 54.7 35.4 55.2 33.6 55.2C30 55.2 27.2 55 23.8 53.7C16.6 50.9 11.3 44.9 9.2 37.5C8.8 36.1 8.5 34.6 8.5 33.2C8.5 31.3 8.5 29.5 8.7 27.7C9.7 20.5 15.3 13.1 21.9 10.2C25.1 8.9 27.1 8.5 30.4 8ZM22.8 30.8C22 30.6 19.4 27.9 18.2 27.2C16.6 26.3 14.5 26.1 12.9 26.9C12.2 27.3 11.3 28.1 11.5 29C12.2 31.2 17.4 33.6 19.5 34.4C20.2 34.7 22 35.1 22.4 35.7C22.3 36.6 20.9 37.2 21.1 38.2C21.4 39.4 25 39.3 25.6 38.4C25.6 37.8 25 37.3 25.4 36.7C25.5 36.7 25.5 36.6 25.6 36.6C26.1 36.6 26.6 36.9 27 37C28 37.1 29.1 37.2 30.1 37.2C32.8 37.2 35.5 37.3 38.2 37.2C38.9 37.2 39.5 37.3 40.2 37.2C40.7 37.2 44.3 36.7 44.4 36.7C45.1 37.3 44.3 38 44.5 38.7C45 39.4 48.2 39.2 48.6 38.3C49.1 37.1 47 36.1 47.1 34.9C47.6 34.5 48.4 34.4 49 34.2C50 33.7 51 33.1 51.8 32.4C52.1 32 52.8 31.4 52.7 30.9C52.2 30.9 51.8 31.3 51.4 31.4C50.4 31.9 48.9 32.5 47.8 32.2C47.3 32 47 31.3 46.8 30.9C46.1 30 45.3 29.1 44.4 28.4C41.5 26 37.7 25 34 25.2C31.4 25.3 28.6 26.1 26.5 27.7C25.8 28.2 23.3 30.7 22.8 30.8Z"/>'
  },
  {
    id: "ev-low-battery",
    name: "Low drive battery (low charge)",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["low battery charge warning", "low state of charge", "low SoC", "range warning", "high-voltage battery low", "traction battery low", "EV low fuel"],
    looksLike: ["fuel pump with a plug", "petrol pump with a plug", "charging station", "battery with one bar", "nearly empty battery", "battery with a small bar", "low battery", "battery on its side", "empty battery"],
    meaning: "The big drive battery (the one that powers the motor) is running low. It's the EV version of the low fuel light, and usually comes on somewhere around 10–20% charge, depending on the car.",
    action: "Head for a charger now. Turn down the heating or air con and drive gently to stretch the range. Push on regardless and the car will eventually limit power (hello, turtle light) before it stops.",
    tip: "This is NOT the plain red battery light (a single box with + and −). That one is about the small 12-volt battery, which runs the lights, locks and computers. EVs and hybrids have both: a huge traction battery for driving and an ordinary 12V battery to 'boot up' the car. A flat 12V battery can stop an EV starting even with a full traction battery. It can be jump-started like any other car's.",
    // Traced from the Nissan Leaf manual.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.3 52.6C8.4 53.1 7.3 52.6 6.5 52.9C6.1 53.1 5.9 53.3 5.8 53.6C5.5 54.3 5.6 56.8 6.1 57.3C6.8 57.6 7.4 57.1 8.1 57.1C9.8 57.1 11.5 57.1 13.2 57.1C19.6 57.1 26.1 57.1 32.5 57.1C34.5 57.1 36.5 57.1 38.5 57.1C39.1 57.1 39.9 57.6 40.5 57.3C41.1 56.8 41.1 54.3 40.8 53.6C40.7 53.3 40.5 53.1 40.2 52.9C39.3 52.6 38.2 53.1 37.4 52.5C36.9 51.7 37.2 48.5 37.2 47.4C37.2 43.5 37.2 39.7 37.2 35.8C37.2 34.7 36.9 31.9 37.4 31C37.8 30.7 38.3 30.7 38.7 31C39.1 31.8 38.9 35.5 38.9 36.6C38.9 38.5 38.9 40.4 38.9 42.3C38.9 43.1 38.8 44.1 38.9 44.9C39 45.4 39.3 45.7 39.5 46.1C39.6 46.5 39.6 46.9 39.7 47.3C39.8 47.6 41.1 50.2 41.4 50.6C41.6 50.9 42 51 42.4 51.2C43.5 51.7 43.5 51.9 44.8 51.9C47.8 51.9 47.7 52.1 49.8 50C50.3 49.5 50.9 49 51.3 48.4C51.5 48 51.9 47.2 51.9 46.7C51.9 46.5 51.8 46.2 51.8 45.9C51.9 45.5 52.2 45.2 52.2 44.8C52.4 42.8 52.2 40.7 52.2 38.6C52.2 37.6 52 35.9 52.3 34.9C52.6 33.8 53.7 33.9 54.6 33.6C55.3 33.4 56.7 32.6 57.2 32C57.4 31.7 58.2 30.1 58.2 29.8C58.3 28.9 58.3 28 58.3 27.1C58.3 25.4 58.3 23.8 58.3 22.1C58.3 21.2 58.5 19.3 58 18.6C57.4 17.8 56.2 18.4 55.5 17.9C55.1 17.2 55.2 16.3 55.2 15.5C55.2 13.8 55.2 12 55.2 10.2C55.2 9.4 55.5 7.9 54.3 7.7C53 7.6 53.2 9.3 53.2 10.1C53.2 11.8 53.2 13.6 53.2 15.4C53.2 16.1 53.4 17.1 53 17.9C52.4 18.3 49.3 18.3 48.7 17.9C48.3 17.2 48.5 16.2 48.5 15.4C48.5 13.9 48.6 12.3 48.4 10.9C48.4 10.5 48.2 10.3 48.1 10C47.9 9.2 48.5 8.4 47.4 8C47.1 7.9 46.8 7.9 46.6 8.1C45.7 8.6 46.2 9.3 46 10C45.3 11.7 45.6 14.1 45.6 15.9C45.6 16.6 45.7 17.2 45.5 17.8C44.9 18.3 44 18 43.6 18.7C43.1 19.6 43.4 21.5 43.4 22.5C43.4 23.9 43.2 28.2 43.5 29.2C43.6 29.7 44.3 31 44.6 31.5C44.8 31.8 44.9 32.2 45.2 32.5C45.5 32.9 46.6 33.5 47.1 33.6C47.5 33.8 47.8 33.8 48.2 33.8C48.5 33.9 49.8 34.5 50 34.8C50.1 35 50.1 35.2 50.2 35.5C50.2 37.2 50.2 39.1 50.2 40.9C50.2 41.9 50.3 43 50.1 44C50 44.5 49.6 44.8 49.5 45.3C49.3 46 49.6 46.8 49.2 47.5C48.3 48.8 45.7 50.3 44.2 49.6C43.7 49.4 43.2 48.9 42.8 48.5C42.5 48.1 42 47.8 41.8 47.3C41.5 46.5 41.7 44.3 41.7 43.4C41.7 41 41.7 38.6 41.7 36.2C41.7 35 41.8 33.8 41.6 32.7C41.6 32.2 41.3 31.9 41.1 31.5C40.7 30.7 41.2 29.8 40.6 29.1C39.8 28.2 38.3 29 37.4 28.4C36.9 27.6 37.2 24.6 37.2 23.6C37.2 20 37.2 16.4 37.2 12.9C37.2 11.7 37.4 9.1 37 8.1C36.8 7.7 36.3 6.7 35.9 6.4C35.3 5.8 32.3 6.1 31.3 6.1C26.4 6.1 21.6 6.1 16.7 6.1C15.5 6.1 12 5.9 11.1 6.2C10.7 6.3 10.5 6.5 10.4 6.8C10.2 7.2 10.3 7.6 10.1 8C10 8.4 9.6 8.8 9.5 9.3C9.3 10.2 9.5 11.3 9.5 12.3C9.5 14.4 9.5 16.4 9.5 18.5C9.5 26.1 9.5 33.7 9.5 41.3C9.5 44 9.5 46.6 9.5 49.2C9.5 50.1 9.7 51.8 9.3 52.6ZM31.9 11.4C32.3 12.2 32.1 14.6 32.1 15.6C32.1 18.5 32.1 21.5 32.1 24.5C32.1 25.5 32.3 27.4 31.9 28.4C31.2 28.9 28.8 28.7 27.9 28.7C24.8 28.7 21.7 28.7 18.6 28.7C17.6 28.7 15.5 28.9 14.8 28.4C14.3 27.7 14.6 25.2 14.6 24.3C14.6 21.3 14.6 18.4 14.6 15.4C14.6 14.3 14.3 12.4 14.7 11.5C15.4 10.9 17.8 11.2 18.7 11.2C21.8 11.2 25 11.2 28.1 11.2C29 11.2 31.1 10.9 31.9 11.4Z"/>'
  },
  {
    id: "ev-battery-fault",
    name: "High-voltage battery warning",
    category: "ev",
    color: "amber",
    urgency: "soon",
    aka: ["traction battery fault", "HV battery fault", "high voltage battery warning", "drive battery malfunction", "battery system fault", "battery management fault"],
    looksLike: ["battery with exclamation mark", "battery with !", "battery with a warning", "box with exclamation mark", "battery on its side with !"],
    meaning: "The car has spotted a problem with the big drive battery or the system that manages it (for example a sensor, cell-balance or cooling fault). Depending on the car, range, power or charging may be limited.",
    action: "If it's amber or yellow, you can usually drive on carefully, but book it in with a dealer soon. If it's red, or comes with smoke, a burning smell, hissing or popping: stop, get everyone out, move well away and call the emergency services.",
    tip: "Many brands use yellow for 'get it checked' and red for 'stop now'. Don't confuse it with the box with + and − (the 12V battery light), which is a completely different battery.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><path d="M51 26h4v12h-4"/><path d="M29.5 23.5v10"/><circle cx="29.5" cy="39.5" r="2.3" fill="currentColor" stroke="none"/>`
  },
  {
    id: "ev-avas-off",
    name: "Pedestrian warning sound off",
    category: "ev",
    color: "amber",
    urgency: "info",
    aka: ["AVAS off", "VESS off", "VSP off", "vehicle proximity notification off", "pedestrian alert off", "acoustic vehicle alerting system", "sound generator off"],
    looksLike: ["car with speaker crossed out", "car with a mute symbol", "speaker crossed out above a car", "car with no sound", "muted car", "car and speaker"],
    meaning: "The low-speed pedestrian warning sound is switched off, or isn't working. Electric cars and hybrids play an artificial hum at low speeds so pedestrians, cyclists and blind or partially sighted people can hear them coming.",
    action: "If your car has an off button (usually marked with the same symbol), press it to turn the sound back on. Then leave it on, especially in car parks and busy streets. If you didn't switch it off, the speaker or system has a fault. Get it fixed, as the sound is a legal requirement in many countries.",
    tip: "The hum only plays at low speed: up to about 20 km/h (12 mph) in the EU and 30 km/h (19 mph) in the US. Above that, tyre noise is loud enough. Many newer cars no longer have an off switch at all, so on those this light always means a fault.",
    // Speaker with sound waves struck through (ISO convention), above a car.
    svg: '<path d="M14 12H20L28 6V27L20 21H14Z" stroke-width="3"/><path d="M33 11A7 7 0 0 1 33 22M37.5 7.5A12 12 0 0 1 37.5 25.5" stroke-width="3"/><path d="M10 29L44 4" stroke-width="3"/><path d="M14 49V44L18 37H44L50 44V49Z" stroke-width="3"/><circle cx="22" cy="50" r="4" fill="currentColor" stroke="none"/><circle cx="42" cy="50" r="4" fill="currentColor" stroke="none"/>'
  },

  // ───────────────────────── GREEN / BLUE / WHITE: just letting you know ─────────────────────────
  {
    id: "ev-ready",
    name: "READY light",
    quiz: "Switched on, good to drive",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["ready indicator", "READY lamp", "ready to drive", "power on"],
    looksLike: ["ready", "the word ready", "green ready", "ready in green letters", "text that says ready"],
    meaning: "The car is switched on and ready to drive. Electric cars and hybrids are usually silent when stopped, so this light is how you know it's 'running' (the same as having the engine started). For once, the dashboard simply says what it means.",
    action: "Select D (or R) and off you go. If READY won't come on, press the brake pedal firmly while you press the start button, and check the charging cable is unplugged.",
    tip: "Don't walk away while READY is showing. The car is fully on even though it's silent, and in a hybrid the petrol engine can start by itself at any moment. Toyota, Lexus, Hyundai and Kia, among others, show the word READY. Nissan uses a car-with-arrows symbol instead.",
    svg: `<text x="32" y="37.8" font-size="16">READY</text>`
  },
  {
    id: "ev-ready-to-drive",
    name: "Ready-to-drive light (car with arrows)",
    quiz: "Switched on, good to drive",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["ready to drive indicator", "ready indicator", "power on", "READY"],
    looksLike: ["car with a double arrow underneath", "car above an arrow", "car with arrows", "car with arrows on both sides", "green car with arrows", "car between two arrows", "car with triangles either side"],
    meaning: "The car is switched on and ready to drive: the electric-car equivalent of the engine running. Nissan (the Leaf, for example) and some others use this symbol instead of the word READY, for reasons best known to themselves.",
    action: "Select D (or R) and drive. If it won't come on, press the brake firmly while pressing the power button, and make sure the charging cable is unplugged.",
    tip: "The car is silent but live: press the accelerator in D and it will move. Always select P and switch off before you get out.",
    // Traced from the Nissan Leaf manual.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.7 32.2C13.1 32.8 13.5 33.6 14 34.2C14.6 34.7 15.2 35.1 15.9 35.4C16.3 35.5 16.7 35.7 17.1 35.7C18.2 35.9 19.7 35.2 20.6 34.5C21.4 33.9 21.7 32.9 22.3 32.2C23.1 31.8 26.1 32 27.2 32C30.5 32 33.7 32 37 32C38.2 32 40.5 31.8 41.6 32.1C42.2 32.8 42.5 33.7 43.1 34.4C43.7 34.9 44.4 35.1 45 35.4C45.4 35.5 45.7 35.7 46 35.7C47.2 35.9 48.8 35.2 49.7 34.4C50.4 33.8 50.6 32.7 51.4 32.1C51.7 32 52.1 32 52.5 31.9C53 31.8 53.4 31.6 53.9 31.5C55 31.3 56 31.4 57 30.7C57.5 30.4 58 29.8 58.2 29.2C58.6 28.1 58.6 25.4 58.1 24.2C57.8 23.6 57 22.7 56.3 22.3C55.6 21.9 54.2 21.6 53.4 21.5C52.9 21.5 52.5 21.2 52.1 21.1C51.7 21 51.3 21.1 50.9 21C50.5 20.9 50.1 20.7 49.7 20.6C49.3 20.4 48.9 20.5 48.5 20.4C48 20.3 47.3 20 46.8 19.7C46.2 19.3 45.8 18.7 45.3 18.2C44.9 17.8 44.4 17.4 44 17C43 16.1 42.1 14.9 41 14.2C40.7 13.9 40.1 13.6 39.6 13.5C38.8 13.2 37.7 13.4 36.8 13.4C34.9 13.4 32.9 13.4 31 13.4C30 13.4 28.8 13.2 27.9 13.7C27.2 14.2 26.6 14.8 26.1 15.3C25 16.4 24 17.4 22.9 18.4C22.5 18.9 22.1 19.4 21.6 19.8C21.2 20 20.8 20.2 20.4 20.4C20.1 20.5 19.8 20.5 19.6 20.6C19.2 20.7 18.9 20.9 18.6 20.9C17.8 21.1 17.1 21 16.4 21.1C15.7 21.1 15.1 21.5 14.4 21.5C13.7 21.6 12.9 21.5 12.1 21.6C11.5 21.7 11 21.9 10.4 22C9.8 22.1 9.1 22.1 8.5 22.2C7 22.4 6 23.9 5.8 25.2C5.7 26.1 6 27.1 6.2 27.9C6.2 28.4 6.2 28.7 6.2 29.1C6.3 30.2 7.2 31 8 31.6C9.5 32.5 11.5 31.5 12.7 32.2ZM40.9 21.9C40.3 22.3 38.4 22.1 37.6 22.1C34.8 22.1 31.9 22.1 29.1 22.1C28.2 22.1 26.1 22.4 25.5 21.9C25.5 21.7 25.4 21.5 25.5 21.2C25.9 20.4 27.7 18.9 28.4 18.1C28.9 17.6 29.4 16.5 30.2 16.2C31 15.9 35.4 16.1 36.5 16.1C37.2 16.1 38.1 15.9 38.7 16.3C39.1 16.6 39.1 17.1 39.3 17.6C39.7 18.1 41 21.4 40.9 21.9ZM46.7 38.6C45.7 39.2 46.5 40.8 46 41.7C45.3 42 40.3 41.8 39.1 41.8C34.2 41.8 29.2 41.8 24.2 41.8C23.1 41.8 18.8 42 18 41.7C17.6 40.9 18.3 38.9 17.3 38.6C16.6 38.4 15.6 39.2 15 39.6C13.2 40.7 11.3 41.6 9.5 42.8C9 43.1 7.7 43.5 7.5 44.2C7.4 45.1 8.9 45.5 9.5 45.9C11.2 47 13.1 48 14.9 49C15.6 49.4 16.5 50.3 17.4 50.1C18.4 49.5 17.4 47.9 18.2 47C18.9 46.7 23.1 46.9 24.3 46.9C29.3 46.9 34.3 46.9 39.4 46.9C40.5 46.9 45.3 46.7 46 47.1C46.6 48 45.7 49.4 46.6 50.2C47.4 50.4 48.3 49.6 48.9 49.2C50.8 48.1 52.7 47.1 54.5 46C55.1 45.6 56.4 45.1 56.5 44.4C56.6 43.5 55 43.1 54.5 42.7C52.7 41.6 50.9 40.7 49.1 39.6C48.5 39.2 47.4 38.4 46.7 38.6Z"/>'
  },
  {
    id: "ev-charging",
    name: "Charging in progress",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["charging indicator", "battery charging", "plugged in and charging", "charge status", "charge port light"],
    looksLike: ["plug in a square", "white plug on a black square", "battery with a lightning bolt", "battery with lightning", "battery with a flash", "battery with a zigzag", "charging battery"],
    meaning: "The high-voltage battery is charging. You'll usually see the percentage or time remaining on the dash or screen too, plus a light by the charge port (often pulsing while charging, solid when full).",
    action: "Nothing to do. When you're finished, stop the charge (in the app, on the charger, or by unlocking the car), unplug, and close the charge flap.",
    tip: "Charge-port light colours vary by brand. On a Tesla, for example: flashing green = charging, solid green = done, amber = plug not fully pushed in, red = fault.",
    // Traced from the ISO 2575 traction battery charging symbol: a plug cut out of a solid square.
    svg: '<rect x="6" y="6" width="52" height="52" rx="2" fill="currentColor" stroke="none"/><path class="knock" stroke-width="0" fill-rule="evenodd" d="M33.5 28.6C33 28.9 28.5 28.7 27.6 28.7C23.6 28.7 19.6 28.7 15.6 28.7C14.3 28.7 11 28.5 10.1 28.8C9.8 29.2 9.9 29.9 9.9 30.5C9.9 31.4 9.7 34.4 10 35.1C10.6 35.4 14.7 35.2 15.7 35.2C19.8 35.2 23.9 35.2 28 35.2C29.1 35.2 32.6 35 33.5 35.3C33.9 36 33.4 40.4 33.9 41.9C35.1 45.9 38.6 45.6 42.1 45.6C43 45.6 44.8 45.9 45.5 45.5L45.8 41.9C46.2 41.7 46.7 41.7 47.2 41.7C48.6 41.7 50.9 42 52.2 41.4C54.1 40.3 53.7 37.2 51.5 36.7C50.3 36.3 46.5 36.9 45.7 36.4C45.4 35.5 45.6 31.2 45.6 29.9C45.6 29.2 45.5 28.2 45.8 27.6C46.2 27.4 46.7 27.4 47.2 27.4C48.6 27.4 50.9 27.8 52.2 27.1C54.1 26 53.7 22.9 51.5 22.4C50.3 22 46.5 22.6 45.7 22.1C45.4 21.1 46 19.2 45.5 18.4C44.6 18.1 43 18.3 42 18.3C38.8 18.3 35.1 18.1 33.9 21.9C33.4 23.5 33.6 25.3 33.6 26.9C33.6 27.5 33.7 28.1 33.5 28.6Z"/>'
  },
  {
    id: "ev-cold-battery",
    name: "Cold battery (snowflake)",
    category: "ev",
    color: "blue",
    urgency: "info",
    aka: ["battery too cold", "cold battery", "limited regen", "reduced regenerative braking", "battery heating", "cold weather limitation"],
    looksLike: ["battery with snowflake", "blue snowflake", "snowflake", "battery with a star", "frozen battery", "battery with asterisk"],
    meaning: "The high-voltage battery is cold. A cold battery can't take in or give out energy as quickly, so you get less regenerative braking (the car slows less when you lift off), slower charging, and sometimes less power and range until it warms up. Like most of us, it's not at its best on a cold morning.",
    action: "Nothing is wrong. Expect the car to coast more than usual when you lift off, so brake a little earlier. Preheating the car while it's plugged in, or setting the satnav to a rapid charger, warms the battery up.",
    tip: "Tesla shows a blue snowflake by the battery gauge and colours part of the battery bar blue (energy you can't use until it warms up). Other brands show a shortened regen bar on the power meter or a message instead.",
    svg: `<rect x="8" y="18" width="43" height="28" rx="4"/><g stroke-width="3"><path d="M29.5 23v18"/><path d="M29.5 23v18" transform="rotate(60 29.5 32)"/><path d="M29.5 23v18" transform="rotate(120 29.5 32)"/></g><path d="M51 26h4v12h-4"/>`
  },
  {
    id: "ev-ev-mode",
    name: "EV mode (electric-only driving)",
    quiz: "Electric-only driving",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["EV MODE", "EV indicator", "electric mode", "pure electric mode", "E-mode", "zero emission mode"],
    looksLike: ["ev", "letters ev", "green ev", "ev mode", "ev in a box", "car with ev"],
    meaning: "On a hybrid or plug-in hybrid, the car is running on electricity alone, with the petrol engine off. Some cars show it automatically whenever the engine is off. Others only show it when you've pressed the EV button to force electric driving.",
    action: "Nothing to do, just enjoy the quiet. In an ordinary (self-charging) hybrid, EV mode only lasts a mile or two at low speed. Accelerate harder or go faster and the engine starts and the light goes out. If it flashes or won't switch on, the battery is too low or too cold, or you're going too fast.",
    tip: "Plug-in hybrids can drive much further on electricity: typically 30–80 km (20–50 miles) on a full charge. Fully electric cars don't show this light, because they're always in 'EV mode'. It would never go out.",
    // Kia and Toyota show the letters EV on their own.
    svg: '<text x="32" y="43" font-size="30">EV</text>'
  },
  {
    id: "ev-charge-mode",
    name: "Battery charge mode (plug-in hybrid)",
    category: "ev",
    color: "green",
    urgency: "info",
    aka: ["CHARGE mode", "battery charge", "e-charge", "charge mode", "Battery Control", "battery hold", "save mode"],
    looksLike: ["battery with an arrow", "battery with up arrow", "battery with arrow pointing up", "upright battery with arrow", "battery filling up"],
    meaning: "Plug-in hybrids only: the petrol engine is running partly to recharge the battery as you drive. That saves electric range for later (say, for a city centre or low-emission zone).",
    action: "Use it only when you really need electric range later. Charging the battery with the engine burns noticeably more fuel than plugging in. Switch back to the normal hybrid/auto mode with the drive-mode button.",
    tip: "A similar 'Hold' or 'Save' mode just keeps the battery at its current level without adding charge. Naturally, the names vary by brand: CHARGE (Mitsubishi), Battery Control (BMW), Battery Charge (VW group).",
    svg: `<rect x="20" y="13" width="24" height="42" rx="4"/><path d="M27 13V9h10v4"/><path d="M32 47V24M25 31l7-7 7 7"/>`
  },
  {
    id: "ev-b-mode",
    name: "B mode (regenerative braking)",
    quiz: "Strong regenerative braking",
    category: "ev",
    urgency: "info",
    aka: ["B gear", "brake mode", "regen mode", "regenerative braking", "regen", "engine braking", "one-pedal driving"],
    looksLike: ["letter b", "b on the gear lever", "b in a box", "b after d", "b gear", "p r n d b"],
    meaning: "B makes the car slow down more strongly when you lift off the accelerator. In electric cars and many plug-ins, that braking comes from the motor acting as a generator (regenerative braking), which feeds energy back into the battery. Slowing down that pays you back.",
    action: "Handy in stop-start town traffic and on long downhill stretches, and it saves your brake pads. Driving in D the rest of the time is completely fine. On most EVs, the brake lights come on by themselves when regen slows the car firmly.",
    tip: "In Toyota and Lexus hybrids, B is mainly engine braking for long, steep hills. It doesn't recover noticeably more energy than D, so there's no point using it all the time, however virtuous it feels. Most hybrids and EVs show regen on the power meter as a blue or green 'CHARGE' / 'CHG' zone the needle dips into.",
    svg: `<rect x="12" y="12" width="40" height="40" rx="8"/><text x="32" y="43" font-size="30">B</text>`
  },

  /* ---------- Chargers & plugs ---------- */
  {
    id: "power-double-insulated",
    name: "Double insulated (square in a square)",
    category: "power",
    aka: ["Class II", "Class 2", "double insulation", "reinforced insulation", "IEC 60417-5172"],
    looksLike: ["square in a square", "two squares one inside the other", "double square", "box in a box", "nested squares", "square inside a square"],
    meaning: "Class II, or double insulated: the live parts are wrapped in two layers of insulation (or one extra-strong layer), so the device doesn't need an earth connection to be safe. That's why most phone chargers, laptop bricks and hairdryers get away with just two pins.",
    action: "Nothing to do. It's perfectly safe without an earth. Do stop using it if the casing is cracked or damaged, though: that insulation is the whole point.",
    tip: "UK plugs on double-insulated items still have a third pin, but it's often plastic, because it's only there to open the shutters in the socket. More doorman than earth.",
    svg: `<rect x="12" y="12" width="40" height="40"/><rect x="22" y="22" width="20" height="20"/>`
  },
  {
    id: "power-protective-earth",
    name: "Earth / ground (protective earth)",
    category: "power",
    aka: ["Class I", "protective earth", "PE", "ground", "earth terminal", "IEC 60417-5019", "IEC 60417-5017"],
    looksLike: ["upside down christmas tree", "three lines getting shorter", "t with lines under it", "rake", "lines in a circle", "upside down triangle of lines", "antenna upside down"],
    meaning: "Marks the earth (ground) connection. Inside a circle, it's the protective earth of a Class I appliance: the metal casing is connected to earth, so if a live wire comes loose inside, the fuse or breaker trips instead of the case becoming live.",
    action: "Devices with this symbol must be plugged into a properly earthed socket with the earth pin intact. Never cut the pin off or use an adaptor that loses it. If you're wiring a plug, the green-and-yellow wire (green or bare copper in North America) goes to this terminal.",
    tip: "Without the circle, the same 'upside-down Christmas tree' is a general earth point. A version with slanted lines like a rake marks a connection to the metal frame (chassis).",
    // IEC 60417-5019: protective earth in a circle.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.9 6.5C27.6 6.8 24.4 7.4 21.4 8.8C12.2 12.9 5.8 22.9 6.5 33.1C7.3 43.9 13.4 52.4 23.7 56.1C26.6 57.2 30 57.7 33.1 57.5C35.6 57.3 38 56.9 40.4 56.1C50.8 52.5 58.1 42 57.5 30.9C56.8 19.9 49.7 10.6 39.1 7.5C36.5 6.7 33.6 6.3 30.9 6.5ZM31.5 9.1C33.7 8.9 36.1 9.4 38.2 10C48.2 12.8 54.4 21.3 54.9 31.5C55 33.1 54.8 34.7 54.5 36.2C52.6 46.6 43.1 54.9 32.5 54.9C23.1 54.9 14.6 49.7 10.9 40.9C9.8 38.3 9.1 35.4 9.1 32.5C9.1 23.2 14.1 14.9 22.8 11C25.6 9.8 28.4 9.3 31.5 9.1ZM30.7 36.8C29.8 37.1 27.9 36.9 26.9 36.9C24.2 36.9 21.5 36.9 18.8 36.9C18 36.9 15.1 36.6 14.6 37.2C14.1 37.8 14.3 39.2 15.1 39.4C15.8 39.6 16.6 39.4 17.3 39.4C19 39.4 20.7 39.4 22.5 39.4C29 39.4 35.5 39.4 42 39.4C43.8 39.4 45.5 39.4 47.2 39.4C47.8 39.4 48.7 39.6 49.2 39.3C50 38.7 49.7 37 48.7 36.9C47.9 36.8 46.9 36.9 46.1 36.9C44.2 36.9 42.4 36.9 40.5 36.9C38.1 36.9 35.8 36.9 33.4 36.9C33.1 35.7 33.3 32.8 33.3 31.5C33.3 27.8 33.3 24 33.3 20.3C33.3 18.9 33.3 17.6 33.3 16.2C33.3 15.7 33.4 15 33 14.6C32.5 14.2 31 14.2 30.8 15C30.5 15.6 30.7 18.1 30.7 18.9C30.7 24.9 30.7 30.8 30.7 36.8ZM20.7 42.4C19.6 42.5 19.5 44.7 20.6 44.9C21.5 45.1 22.6 45 23.5 45C25.7 45 28 45 30.2 45C33.2 45 36.2 45 39.2 45C40.5 45 42 45.1 43.3 45C44.4 44.8 44.5 42.6 43.4 42.4C42.5 42.2 41.5 42.4 40.6 42.4C38.3 42.4 36 42.4 33.8 42.4C30.7 42.4 27.7 42.4 24.6 42.4C23.4 42.4 21.9 42.2 20.7 42.4ZM25.8 47.9C24.8 48 24.7 50 25.6 50.4C26.2 50.7 29.4 50.5 30.2 50.5C32 50.5 33.8 50.5 35.5 50.5C36.4 50.5 37.3 50.5 38.1 50.5C39.1 50.4 39.3 48.4 38.5 48C37.9 47.7 34.6 47.9 33.8 47.9C31.9 47.9 30.1 47.9 28.2 47.9C27.5 47.9 26.6 47.8 25.8 47.9Z"/>'
  },
  {
    id: "power-indoor-use-only",
    name: "For indoor use only (house)",
    category: "power",
    aka: ["indoor use only", "not for outdoor use", "dry locations only", "IEC 60417-5957"],
    looksLike: ["house", "house with a chimney", "little house", "house outline", "home icon", "hut", "roof"],
    meaning: "The device is designed to be used indoors only. It isn't protected against rain, splashes, damp or condensation. A refreshingly literal symbol: it's a house.",
    action: "Keep it inside and dry: not in the garden, on a boat or in a damp garage. For outdoor use, buy something with an IP rating such as IP44 or higher.",
    tip: "IP ratings are easy to decode. The first digit is protection against dust and objects, the second against water. IP44 = splash-proof, IPX7 = can survive being dunked. You'll also see the little house on fairy lights and extension leads.",
    // IEC 60417-5957: house with a chimney and eaves.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12 35.7C12.2 36.9 12 39 12 40.2C12 43.3 12 46.3 12 49.4C12 50.3 11.7 53.7 12.3 54.2C12.9 54.7 13.9 54.5 14.6 54.5C16.5 54.5 18.4 54.5 20.3 54.5C27.9 54.5 35.4 54.5 43 54.5C45.1 54.5 47.2 54.5 49.4 54.5C50 54.5 51.2 54.7 51.7 54.2C52.2 53.7 52 50.2 52 49.3C52 44.8 51.9 40.3 52 35.7C53.1 35.6 56.4 36.1 57.1 35.4C57.2 35.1 57.3 34.9 57.2 34.7C57.1 34.1 55.2 32.4 54.6 31.9C52.5 29.8 50.5 27.7 48.4 25.6C47.4 24.6 46.2 23.6 45.3 22.5C45.2 21.6 45.3 20.7 45.3 19.8C45.3 17.9 45.3 16.1 45.3 14.2C45.3 13.5 45.5 11.7 45.1 11C44.8 10.5 44 10.6 43.5 10.6C42.1 10.6 40.7 10.6 39.3 10.6C38.8 10.6 38.1 10.5 37.7 10.9C37.1 11.4 37.4 13.8 37.4 14.5C36.5 14 34.4 11.7 33.5 10.8C33.1 10.3 32.5 9.6 31.8 9.7C31.2 9.8 30.6 10.6 30.2 11.1C28.9 12.3 27.7 13.5 26.4 14.8C21.6 19.6 16.9 24.4 12.1 29.1C10.7 30.5 9.4 31.9 8 33.2C7.6 33.7 6.7 34.3 6.7 35C6.7 35.6 7.4 35.7 7.9 35.7C9.2 35.7 10.6 35.7 12 35.7ZM31.9 12.9C32.5 13.3 33.1 14 33.6 14.5C34.8 15.7 36 16.9 37.2 18.1C37.7 18.6 38.6 19.9 39.4 19.6C40 19.4 40 18.6 40 18.1C40 16.4 39.9 14.8 40 13.2L42.7 13.2C42.8 14 42.7 14.9 42.7 15.7C42.7 17.6 42.7 19.4 42.7 21.3C42.7 22 42.6 22.9 42.8 23.5C43 24.2 44.8 25.8 45.5 26.4C47.7 28.6 50 30.8 52.2 33.1C51.4 33.3 50.1 32.8 49.6 33.5C49.2 34 49.4 37.6 49.4 38.4C49.4 42.9 49.5 47.4 49.4 51.9L14.6 51.8C14.6 47.4 14.6 43 14.6 38.6C14.6 37.7 14.8 34.2 14.4 33.6C14 32.9 12.6 33.1 11.8 33.1L31.9 12.9Z"/>'
  },
  {
    id: "power-efficiency-level",
    name: "Efficiency level (Roman numeral in a circle)",
    category: "power",
    aka: ["efficiency mark", "International Efficiency Marking Protocol", "Level VI", "Level V", "DoE Level VI", "energy efficiency level"],
    looksLike: ["roman numeral in a circle", "vi in a circle", "v in a circle", "circle with vi", "6 in roman numerals", "iv in a circle"],
    meaning: "Shows how energy-efficient an external power supply is, under the International Efficiency Marking Protocol. Higher is better: Level VI (6) wastes less power both while charging and while plugged in with nothing attached. And yes, it's in Roman numerals. On a charger.",
    action: "Nothing to do. Level VI has been the minimum in the US since 2016, and the EU's rules are similar. Level V or lower just means an older, slightly less efficient design, which is still fine to use.",
    tip: "The numeral is an efficiency grade, not a voltage or a version number. A small Level VI charger may draw no more than 0.1 W when nothing is connected.",
    // Serif Roman numeral in a circle, as in the US DOE marking protocol.
    svg: '<circle cx="32" cy="32" r="22" stroke-width="3"/><g stroke-linecap="butt"><path stroke-width="4.2" d="M19.5 22L28.5 43.2M44.5 22V43"/><path stroke-width="1.8" d="M37 22L28.5 43.2M15.5 22.9H23.5M33.5 22.9H40.5M41 22.9H48M41 42.1H48"/></g>'
  },
  {
    id: "power-ac",
    name: "AC: alternating current (wavy line)",
    category: "power",
    aka: ["alternating current", "AC", "~", "mains", "IEC 60417-5032"],
    looksLike: ["wavy line", "tilde", "squiggle", "~", "wave", "s on its side", "sine wave"],
    meaning: "The wavy line means alternating current: the kind of electricity that comes out of a wall socket. On a charger label it's usually next to the INPUT, e.g. '100–240V ~ 50/60Hz'.",
    action: "Check the voltage range. '100–240V' means it works anywhere in the world with just a plug adaptor. If it only says 230V or 120V, it needs a voltage converter in countries with the other kind of mains.",
    tip: "50/60Hz is how many times a second the current swings back and forth: 50 in Europe, the UK, Australia and most of Asia; 60 in North America. Japan, just to keep things interesting, uses both, depending on which half of the country you're in.",
    svg: `<path d="M8 32c4-9 8-12 12-12s8 3 12 12 8 12 12 12 8-3 12-12" stroke-width="4.5"/>`
  },
  {
    id: "power-dc",
    name: "DC: direct current (line over dashed line)",
    category: "power",
    aka: ["direct current", "DC", "⎓", "IEC 60417-5031"],
    looksLike: ["line over dashed line", "solid line and dotted line", "equals sign with a dashed line", "two lines one dashed", "line with dashes underneath", "dash dash dash"],
    meaning: "The line over a dashed line means direct current: the steady, one-direction electricity that batteries and gadgets run on. On a charger it's usually next to the OUTPUT, e.g. '5V ⎓ 2A' means 5 volts DC at up to 2 amps.",
    action: "When swapping a power supply (for a router, speaker, etc.), the replacement must have the SAME output voltage and polarity, and an amp (A) rating that's the same or higher. More amps is fine, because the device only takes what it needs. The wrong voltage can damage it.",
    tip: "USB-C chargers list several outputs, like 5V⎓3A / 9V⎓3A / 20V⎓3.25A. They agree the right one with the gadget automatically, which is why one USB-C charger can safely power lots of different devices.",
    svg: `<path d="M10 26h44" stroke-width="4.5"/><path d="M10 38h8M28 38h8M46 38h8" stroke-width="4.5"/>`
  },
  {
    id: "power-polarity",
    name: "Polarity (centre-positive / centre-negative)",
    category: "power",
    aka: ["centre positive", "center positive", "centre negative", "center negative", "tip positive", "barrel plug polarity", "DC polarity"],
    looksLike: ["circle with dot and plus minus", "c with a dot inside", "dot in a circle with plus and minus", "minus c dot plus", "pac-man with plus and minus", "circle with lines to plus and minus"],
    meaning: "Shows the polarity of a round barrel-style DC plug. The dot is the centre (the inside of the plug), and the C-shaped ring is the outer sleeve. Whichever sign the dot is joined to is the centre: dot to + (as drawn here) = centre-positive, the most common; dot to − = centre-negative.",
    action: "When replacing a power adapter, this symbol must match exactly, along with the voltage, the plug size and enough amps. Get the polarity wrong and it can damage a device the instant you plug it in.",
    tip: "Guitar effects pedals are the classic exception: most use 9V centre-negative, which is why a random router or keyboard adapter can fry them.",
    // Minus and plus in their own circles, joined to the C and the centre dot by unbroken lines.
    svg: '<g stroke-width="2.5"><circle cx="9.5" cy="32" r="6"/><circle cx="54.5" cy="32" r="6"/><path d="M6.5 32H12.5M51.5 32H57.5M54.5 29V35M15.5 32H23M30 32H48.5M34.95 27.05A7 7 0 1 0 34.95 36.95"/></g><circle cx="30" cy="32" r="1.9" fill="currentColor" stroke="none"/>'
  },
  {
    id: "power-fuse",
    name: "Fuse (rectangle with a line through it)",
    category: "power",
    aka: ["fuse", "fuse rating", "T3.15A", "slow-blow fuse", "IEC 60417-5016"],
    looksLike: ["rectangle with a line through it", "box with a line through it", "line through a box", "skewered rectangle", "kebab", "resistor"],
    meaning: "Marks a fuse: a thin wire that heroically melts and cuts the power if too much current flows, to prevent a fire. It's usually printed next to its rating, e.g. 'T3.15AL 250V' = a time-delay (slow-blow) fuse of 3.15 amps, low breaking capacity, rated for up to 250 volts.",
    action: "If the device is completely dead, a blown fuse is a likely suspect. Only ever replace it with exactly the same rating and type, never a bigger one or a bit of wire. If a new fuse blows straight away, there's a fault: stop and get it repaired.",
    tip: "F = fast-acting, T = time-lag (slow-blow, rides out the surge at switch-on). UK plugs have their own fuse too: usually 3A for small appliances and 13A for kettles and heaters. Sealed phone chargers have an internal fuse you can't replace.",
    svg: `<rect x="18" y="24" width="28" height="16" rx="1"/><path d="M6 32h52"/>`
  },
  {
    id: "power-safety-transformer",
    name: "Safety isolating transformer (two circles in a shield)",
    category: "power",
    aka: ["safety isolating transformer", "isolating transformer", "safety transformer", "SELV"],
    looksLike: ["two circles in a shield", "figure 8 in a shield", "shield with two circles", "two stacked circles with a line", "snowman in a shield", "badge with circles"],
    meaning: "The charger contains a safety isolating transformer: the dangerous mains side is completely separated from the low-voltage output, so the end you touch (the USB socket, cable or connector) can't become live even if something fails. It is not, despite appearances, a Venn diagram.",
    action: "Nothing to do. It's a good thing to see on a charger. Still, stop using any charger with a cracked case or scorched pins, or that gets too hot to hold.",
    tip: "Small extra marks added to the two circles (such as a tiny fuse) describe how the transformer copes with a short circuit or overload.",
    // IEC 60417-5222: two stacked circles with a bar across the overlap, inside a shield.
    svg: '<g stroke-width="3"><path d="M12.5 7H51.5V41C51.5 50 43 56.5 32 57.8C21 56.5 12.5 50 12.5 41Z"/><circle cx="32" cy="21.8" r="10"/><circle cx="32" cy="39.6" r="10"/><path d="M16.5 30.7H47.5"/></g>'
  },
  {
    id: "power-read-manual",
    name: "Read the instructions (open book)",
    category: "power",
    aka: ["refer to manual", "read operating instructions", "see user guide", "consult the documentation", "ISO 7000-1641"],
    looksLike: ["book", "open book", "book with lines", "book with an i", "notebook", "magazine"],
    meaning: "There's important information in the instructions or safety leaflet, usually about how to use or connect the product safely.",
    action: "Dig out the leaflet that came with it, wherever it ended up (or look it up online), before using it. That goes double for anything that plugs into the mains.",
    tip: "A white book in a blue circle (ISO 7010 M002) is stronger: you MUST read the manual. A triangle with an exclamation mark beside it means 'caution: check the documentation'.",
    // ISO 7000-1641: open book, blank left page, a serif i on the right page.
    svg: '<path stroke-width="2.6" d="M32 15.2C28 13.8 24 14 20 16C16 18 12 18.6 7.6 17.2V49.2C11.5 50.3 16 50 20 47.8C24 45.4 28 45.2 32 46.7C36 45.2 40 45.4 44 47.8C48 50 52.5 50.3 56.4 49.2V17.2C52 18.6 48 18 44 16C40 14 36 13.8 32 15.2ZM32 15.2V46.7"/><g fill="currentColor" stroke="none"><circle cx="44.6" cy="25.1" r="2.9"/><polygon points="39.2,30 47.5,30 47.5,40.1 50,40.1 50,41.7 39.2,41.7 39.2,40.1 41.7,40.1 41.7,31.6 39.2,31.6"/></g>'
  },
  {
    id: "power-high-voltage",
    name: "Dangerous voltage (lightning bolt in a triangle)",
    category: "power",
    aka: ["electric shock hazard", "high voltage", "electricity warning", "danger of death", "ISO 7010 W012"],
    looksLike: ["lightning bolt in a triangle", "triangle with lightning", "zigzag arrow in a triangle", "flash in a triangle", "yellow triangle with lightning"],
    meaning: "Warning: dangerous voltage inside, enough to give a serious electric shock. On chargers and power supplies it usually sits next to 'Do not open' or 'No user-serviceable parts inside'.",
    action: "Don't open the casing, even when it's unplugged. Parts inside (capacitors) can stay charged for a while. If it's damaged, replace it rather than repair it.",
    tip: "The yellow-and-black triangle version is the safety sign you'll see on substations, fuse boxes and electrical cupboards.",
    // ISO 7010 W012: filled tapering bolt in a round-cornered triangle.
    svg: '<polygon stroke-width="4.6" points="32,11.5 56,53 8,53"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30 23.2C29.5 23.9 29.2 25.9 28.9 26.7C28.1 29.5 27.4 32.3 26.6 35.1C26.4 35.9 25.4 38.4 25.7 38.9C26.5 38.9 29.6 37 30.5 36.5C31 36.3 31.7 35.7 32.2 35.8L30.6 45.6L29.5 44.6C29.3 45 29.5 45.6 29.6 46.1C29.9 47 30.1 49.7 30.6 50.3C31.1 50.2 31.4 49.6 31.6 49.2C32.1 48.5 33.9 46.3 34 45.5L32.6 46C32.4 45.3 33.1 43.7 33.3 43C34 40.4 34.6 37.9 35.3 35.4C35.5 34.6 36.4 32.4 36.1 31.8C35 31.8 30.6 35 29.5 35.1C29.4 34.5 30.2 33 30.5 32.4C31.4 30.2 32.4 28.1 33.3 25.9C33.6 25.3 34.4 23.9 34.3 23.3C33.8 22.9 30.6 23 30 23.2Z"/>'
  },
  {
    id: "power-hot-surface",
    name: "Hot surface",
    category: "power",
    aka: ["caution hot surface", "hot surface warning", "do not touch", "ISO 7010 W017", "IEC 60417-5041"],
    looksLike: ["triangle with wavy lines", "triangle with steam", "heat lines in a triangle", "wavy lines over a line", "squiggles in a triangle"],
    meaning: "Warning: this surface gets hot enough to burn you during normal use.",
    action: "Don't touch it while it's on or just after, don't cover it, and keep it away from anything that could melt or catch fire. Let it cool down before you handle it or put it away.",
    tip: "Some chargers, lamps and heaters carry this because they're meant to get hot. An ordinary phone charger that's too hot to hold isn't normal, though. Unplug it and replace it.",
    svg: `<path d="M32 9L57 53H7z"/><path d="M21 46h22"/><path d="M25 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7M32 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7M39 41c-2.5-2.5 2.5-4.5 0-7s2.5-4.5 0-7" stroke-width="2.5"/>`
  },
  {
    id: "power-rcm",
    name: "RCM mark (tick in a circle, in a triangle)",
    category: "power",
    aka: ["Regulatory Compliance Mark", "RCM", "C-Tick", "A-Tick", "Australian compliance mark"],
    looksLike: ["tick in a triangle", "tick in a circle in a triangle", "c with a tick in a triangle", "check mark in a triangle", "triangle with a tick", "rounded triangle with a tick"],
    meaning: "The Regulatory Compliance Mark: the product meets Australian and New Zealand rules for electrical safety and radio interference. A tick of approval from down under, basically.",
    action: "Nothing to do. In Australia or New Zealand, it's a good sign a charger was made to be sold legally there, so be wary of mains chargers without it.",
    tip: "It replaced the older C-Tick (a C with a tick inside) and A-Tick marks, which were phased out by 2016.",
    // Traced from the official RCM artwork (EESS).
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.5 12.7C30.7 12.8 30 12.9 29.2 13.3C26.8 14.4 25 17.8 23.3 19.8C20.5 23.3 17.8 26.9 15.2 30.5C12.9 33.5 10.5 36.4 8.3 39.5C7.4 40.8 6.4 41.9 6.1 43.5C5.3 46.8 7.5 50.2 10.7 51.1C12.4 51.6 16 51.4 18 51.4C22.8 51.4 27.6 51.4 32.4 51.4C37 51.4 41.7 51.4 46.3 51.4C48.2 51.4 51.6 51.6 53.2 51.1C57 49.9 58.8 46.1 57.5 42.4C57 41.1 55.9 40 55.1 38.9C53.2 36.1 51 33.5 49 30.8C45.7 26.6 42.7 22.4 39.4 18.2C37.5 15.9 36.2 13.3 32.9 12.8C32.5 12.7 32 12.6 31.5 12.7ZM31.7 16.7C32.3 16.6 33 16.9 33.5 17.2C34.3 17.9 36.4 20.9 37.1 21.9C38.2 23.4 39.4 24.9 40.6 26.4C43.9 30.7 47.2 34.9 50.4 39.3C51.1 40.4 53.3 42.8 53.8 43.9C54 44.4 54 45 53.9 45.5C53.2 47.8 50.4 47.3 48.5 47.3C43.1 47.3 37.6 47.2 32.2 47.2C26.8 47.2 21.4 47.3 15.9 47.3C14.1 47.3 11.2 47.8 10.2 45.9C9.9 45.4 9.8 44.8 10 44.3C10.3 43.1 12.3 40.8 13.1 39.8C17.7 34.1 21.9 28.1 26.4 22.4C27.4 21.2 28.3 19.8 29.3 18.6C29.7 18.2 30 17.7 30.4 17.3C30.7 17 31.2 16.8 31.7 16.7ZM30.8 23.5C25.8 24.3 22.1 27.3 20.8 32.2C20.4 33.5 20.2 35 20.4 36.4C20.6 37.2 20.8 38.1 21 38.9C21.7 41.1 23.3 43.2 25.1 44.5C29.6 47.7 36 47.5 40 43.5C42 41.5 43 39.2 43.4 36.5C43.6 35.3 43.5 33.4 41.8 33.8C40.7 34.1 40.8 35.2 40.7 36.1C40.5 37.8 39.9 39.4 38.8 40.7C34.1 46.5 24.4 44.2 23.3 36.7C22.4 31.3 25.9 27 31.2 26.2C32.1 26.1 33 26.2 33.9 26.4C34.3 26.6 34.8 26.8 35.2 26.8C35.5 26.9 35.9 26.8 36.2 26.6C37.1 26 36.9 24.7 36 24.2C34.6 23.6 32.3 23.3 30.8 23.5ZM31.3 36.1C30.1 35.4 30.8 31.6 28.8 31.6C28.5 31.6 28.1 31.6 27.9 31.9C27.1 32.5 27.4 33.4 27.6 34.2C27.9 35.3 28.7 38.8 29.2 39.6C29.6 40.1 30.2 40.4 30.9 40.3C32 40.2 33.2 38.5 34 37.8C35.6 36.1 37.2 34.5 38.9 32.8C39.6 32 40.5 31.3 41.2 30.4C41.9 29.6 41.9 28.2 40.6 28C39.6 27.9 39 28.8 38.4 29.4C36.8 31.1 35.1 32.7 33.5 34.3C33 34.8 32 36.2 31.3 36.1Z"/>'
  },
  {
    id: "power-fcc",
    name: "FCC logo",
    quiz: "US radio interference approval",
    category: "power",
    aka: ["Federal Communications Commission", "FCC mark", "FCC ID", "FCC Part 15"],
    looksLike: ["fcc", "f and two c's", "f with c's", "fc", "letters fcc", "f with brackets"],
    meaning: "The US Federal Communications Commission's mark: the device has been checked so its radio interference stays within US limits, so it won't mess up radios, Wi-Fi or TV. It's not a safety mark.",
    action: "Nothing to do. For electrical safety in the US, look for a safety listing such as UL, ETL or CSA instead.",
    tip: "Since 2017 the logo has been optional for many products, so a missing FCC logo doesn't mean much. Gadgets with radios (phones, wireless chargers) carry an 'FCC ID' code you can look up online to see their test reports and internal photos. Surprisingly good reading, if that's your sort of thing.",
    // Traced from the FCC logo.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.4 29.7L11.3 29.7C10.9 29 11.2 27.2 11.2 26.3C11.2 23.9 11.2 21.6 11.2 19.2C11.2 18.4 11 16.8 11.3 16.1C11.9 15.8 12.9 16 13.7 16C15.4 16 17.2 16 19.1 16C19.6 16 20.9 16.1 21.3 15.9C21.9 15.6 22.3 14.7 22.7 14.2C23 13.8 24.3 12.4 24.2 11.9C23.4 11.6 21.2 11.8 20.2 11.8C17.3 11.8 14.3 11.8 11.4 11.8C10.5 11.8 7.7 11.6 7.1 11.9L7.1 51.5C7.2 51.5 7.1 51.6 7.3 51.5C7.7 51.5 10.7 49.4 11 49.1C11.1 49 11.2 48.8 11.2 48.7C11.2 47.5 11.2 46.4 11.2 45.3C11.2 43 11.2 40.7 11.2 38.5C11.2 37.5 11 34.9 11.3 34.2C11.9 33.9 12.8 34 13.4 34C14.6 34 18.6 33.8 19.4 34.1C19.6 34.4 20.2 37.9 20.6 38.7C21.7 41.8 23.4 44.8 25.9 47C33 53.4 42.8 54.4 51 49.5C52.7 48.5 54.3 47.1 55.5 45.6C56 45.1 56.7 44.5 56.8 43.8L53.6 41.5C53.3 41.7 51.2 44.1 50.6 44.6C47.8 46.9 44.9 47.9 41.4 48.4C40.7 48.5 40 48.5 39.3 48.4C38.4 48.3 37.4 48.2 36.5 48C31.8 47 27.9 43.9 25.6 39.8C20.1 30.3 26.4 17.4 37.2 15.8C41.7 15.1 46.1 16.1 49.9 18.8C50.6 19.3 51.3 19.9 51.9 20.6C52.4 21.1 52.8 21.8 53.4 22.1C54 22.1 56.2 20.4 56.6 19.9C56.5 19.2 55 17.7 54.5 17.2C52 15 49.3 13.2 46.1 12.2C37.2 9.5 27.2 13.2 22.4 21.2C21.4 22.9 20.7 24.6 20.1 26.5C19.9 27.3 19.8 29.2 19.4 29.7ZM49.5 38.7L46.3 36.5C45.8 36.8 45.1 37.7 44.5 38.1C42.5 39.6 40 39.9 37.6 39.2C36.4 38.8 35.2 38 34.4 37C30.4 32.2 33.1 25.2 39.3 24.4C41.1 24.2 43 24.8 44.5 25.8C45 26.2 45.7 27.2 46.3 27.4C46.8 27.2 49.2 25.5 49.4 25C49.2 24.3 48.4 23.7 47.9 23.2C45.9 21.5 43.7 20.6 41.1 20.3C35.4 19.6 29.6 23.9 28.5 29.6C28.4 30.6 28.2 31.6 28.3 32.6C28.5 34.1 28.8 35.5 29.4 36.9C31.2 41.2 36.2 44.3 40.9 43.7C43.5 43.4 46.1 42.6 48 40.6C48.5 40.1 49.4 39.5 49.5 38.7Z"/>'
  },
  {
    id: "power-ul",
    name: "UL Listed (UL in a circle)",
    quiz: "Safety tested by a US lab",
    category: "power",
    aka: ["UL", "Underwriters Laboratories", "UL Listed", "cULus", "UL mark"],
    looksLike: ["ul in a circle", "letters ul in a circle", "u and l", "circle with ul", "ul logo"],
    meaning: "UL (originally Underwriters Laboratories), an independent testing lab, has tested samples of this product against US safety standards for fire and electric shock. A small 'c' on the left and 'us' on the right means it's certified for Canada and the US.",
    action: "A good sign, especially on chargers and power strips. A smudged or oddly drawn UL mark on a cheap charger may be a fake. You can check the file number on UL's online database (Product iQ).",
    tip: "'UL Recognized' (a backwards-looking R and U, as if this weren't confusing enough) is different: it's for parts that go inside a product, not the finished item. ETL and CSA marks are equivalent safety listings.",
    // Traced from the UL Listed mark.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.9 6C27.8 6.3 24.9 6.7 22 7.9C14 11.4 8 18.6 6.4 27.2C6 29.2 6 31.1 6 33C6 34.8 6.3 36.7 6.8 38.5C8.9 46.9 15.3 53.7 23.5 56.5C26.6 57.7 29.8 58 33.1 58C36.3 58 39.7 57 42.7 55.7C50.2 52.2 56 45.2 57.5 37C57.9 35 58 33 58 30.9C58 28.6 57.4 26.3 56.8 24.1C53.9 14.6 45.3 7.7 35.6 6.2C34.1 6 32.4 5.9 30.9 6ZM31.6 10.8C33.3 10.7 35.2 11 36.8 11.4C46 13.6 53.1 22 53.1 31.6C53.1 40.5 48.1 48.4 39.7 51.7C37.4 52.6 34.9 53.1 32.4 53.1C20.6 53.1 11.1 44.3 10.8 32.4C10.6 24.2 15.5 16.2 23.1 12.8C26 11.4 28.4 11.1 31.6 10.8ZM19.4 18.1C19.1 18.7 19.3 22 19.3 22.9C19.3 25.7 19.3 28.6 19.3 31.4C19.3 33.6 19.3 35.9 21 37.5C23.1 39.5 28.1 39.5 30.3 37.7C31.3 36.9 31.8 35.7 32 34.5C32.2 33.4 32.2 32.2 32.2 31.1C32.2 29.4 32.2 27.7 32.2 26C32.2 24.7 32.4 19 32.1 18.2C31.6 17.9 27.9 17.9 27.5 18.2C27.2 19 27.4 21.6 27.4 22.6C27.4 25.9 27.4 29.1 27.4 32.3C27.4 33.5 27.4 35.3 25.8 35.3C25.4 35.3 24.9 35.2 24.6 34.9C23.8 34.2 24.1 31.6 24.1 30.6C24.1 27.7 24.1 24.8 24.1 21.8C24.1 21 24.3 18.8 24 18.1L19.4 18.1ZM34.1 25.6C33.9 26.4 34.1 29.3 34.1 30.4C34.1 33.8 34.1 37.3 34.1 40.7C34.1 41.7 33.8 45.2 34.2 45.8L44.6 45.8C44.9 45.3 44.9 42.4 44.6 41.9L39 41.7C38.7 41.1 38.9 38.7 38.9 37.9C38.9 35.1 38.9 32.2 38.9 29.4C38.9 28.5 39.1 26.3 38.8 25.6C38.2 25.3 34.6 25.3 34.1 25.6Z"/>'
  },
  {
    id: "power-ccc",
    name: "CCC mark (China)",
    quiz: "China mandatory safety mark",
    category: "power",
    aka: ["China Compulsory Certificate", "China Compulsory Certification", "3C", "CCC"],
    looksLike: ["ccc", "three c's", "letters ccc in an oval", "ccc in a circle", "c c c"],
    meaning: "China Compulsory Certification: the product meets China's mandatory safety rules and can legally be sold in mainland China. You'll often spot it on chargers made for the global market.",
    action: "Nothing to do. It says nothing about approval where you live, so look for your own country's mark (UKCA or CE, UL, RCM, PSE…).",
    tip: "It's also nicknamed '3C', which is at least quicker to say. Not to be confused with the CE mark: different letters, different market.",
    // Traced from the CCC mark.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.7 10.7C29.9 10.8 29 10.8 28.1 10.9C25.9 11.2 23.8 11.7 21.6 12.3C14 14.6 7.1 20.6 5.3 28.6C5 30 4.8 31.7 5 33.2C5.3 35.4 5.8 37.3 6.7 39.4C9.9 46.8 18.5 51.5 26.3 52.8C28.6 53.2 30.8 53.3 33.2 53.3C41.2 53.3 51.7 48.9 55.9 41.8C57.8 38.6 59.5 34.7 58.9 30.8C58.7 29.2 58.5 27.7 58 26.2C54.9 18.2 47.3 13.2 39.2 11.5C37 11 32.9 10.4 30.7 10.7ZM30.8 12.3C32.6 12.1 35 12.4 36.8 12.7C44.6 13.8 52.9 18.2 56.1 25.8C56.7 27.3 57.3 29.1 57.3 30.7C57.4 32.5 57.4 34.1 56.9 35.8C54.7 43.6 47.3 49.2 39.5 50.8C37.5 51.2 35.4 51.6 33.3 51.6C30.8 51.6 28.4 51.6 25.9 51.1C16.8 49.2 7.7 43.3 6.6 33.3C5.7 23.9 14 16.1 22.4 13.7C24.4 13.2 26.3 12.8 28.3 12.5C29.1 12.4 29.9 12.4 30.8 12.3ZM27.5 43.5C27.8 43.1 27.8 40.6 27.5 40.1C27.1 39.9 26.6 39.9 26.2 39.8C25 39.6 23.9 39.1 23.1 38.4C19.3 35.3 19 29.3 22.5 25.9C23.3 25.1 24.4 24.4 25.5 24.1C26.1 23.9 26.9 24 27.4 23.6L27.3 20.3C26.8 19.9 25.7 20.3 25.1 20.4C23 20.9 20.9 22.1 19.5 23.8C18.7 24.7 18 25.6 17.5 26.7C15.5 31.5 16.2 37.2 20.3 40.8C22.1 42.4 24.1 43.2 26.5 43.5C26.8 43.6 27.2 43.6 27.5 43.5ZM36.2 43.4L36.2 40.1C35.7 39.8 35 39.9 34.4 39.7C33.3 39.4 32.2 38.8 31.4 38.1C27.9 34.9 27.7 28.7 31.4 25.6C32.4 24.8 33.5 24.2 34.7 23.9C35.2 23.8 35.6 23.9 36 23.7C36.2 23.1 36.2 20.7 35.9 20.2C35.5 20.1 34.9 20.2 34.4 20.3C32.3 20.7 30.5 21.6 28.9 23C23.9 27.4 23.8 35.7 28.4 40.3C30 41.8 31.9 42.9 34 43.4C34.7 43.5 35.7 43.8 36.2 43.4ZM44.9 43.5L44.9 40.1C44.4 39.8 43.5 39.9 42.9 39.7C41.8 39.4 40.7 38.8 39.9 38C36.6 34.8 36.3 28.7 40 25.7C41 24.9 42 24.3 43.2 24C43.6 23.9 44.2 23.9 44.6 23.6C44.9 23.1 44.9 20.7 44.6 20.2C44.1 20.1 43.7 20.2 43.3 20.3C41 20.6 39.1 21.7 37.5 23.1C32.5 27.3 32.5 36.4 37.5 40.6C39 41.9 40.7 43 42.7 43.4C43.3 43.5 44.3 43.8 44.9 43.5Z"/>'
  },
  {
    id: "power-pse",
    name: "PSE mark (Japan)",
    quiz: "Japan electrical safety mark",
    category: "power",
    aka: ["PSE", "Product Safety Electrical Appliance & Material", "DENAN", "Japanese electrical safety mark"],
    looksLike: ["pse in a diamond", "ps over e in a diamond", "diamond with pse", "letters pse", "pse in a circle", "rhombus with pse"],
    meaning: "Japan's compulsory electrical safety mark. The diamond version is for 'specified' higher-risk products (including AC adapters and chargers), which must be checked by an independent lab. The round version is for other electrical goods, which the maker tests itself.",
    action: "Nothing to do outside Japan. In Japan it's illegal to sell mains-powered products such as chargers without it.",
    tip: "Since 2019, lithium-ion power banks sold in Japan must carry the round PSE mark too.",
    // PSE diamond: PS over E, as on the official mark.
    svg: '<polygon stroke-width="2.4" points="32,12 57,32 32,52 7,32"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.3 31.1C26.5 30.6 27.8 31.4 29.5 30.4C32.7 28.5 32.5 23.7 28.8 22.3C27.7 21.9 23.8 21.5 23 22.6C22.5 23.3 22.7 24.4 22.7 25.2C22.7 27.2 22.7 29.2 22.7 31.2C22.7 31.8 22.7 32.3 22.7 32.8C22.7 33.8 22.7 35.1 24.2 35C25.9 34.8 25.1 32.2 25.3 31.1ZM25.4 28.1L25.4 24.7C25.9 24.6 26.4 24.6 26.9 24.6C29.9 24.6 29.9 28.3 26.8 28.3C26.3 28.3 25.8 28.4 25.4 28.1Z"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M39.8 30.9C39.7 32.5 37.5 33 36.5 31.8C36.1 31.4 36 30.7 35.5 30.4C34.8 30.1 33.9 30.4 33.6 31C33.2 32.1 34.1 33.1 34.9 33.8C36.6 35.6 39.9 35.5 41.5 33.5C42.1 32.9 42.4 32.1 42.5 31.2C42.7 29.1 41.1 27.9 39.2 27.3C38.3 27 36.2 27.4 36.3 25.9C36.4 24.7 37.9 24.4 38.8 24.7C40 25.1 39.9 26.9 41.3 26.8C41.6 26.8 41.9 26.7 42.1 26.6C43.2 25.5 42 23.7 41 22.9C40.5 22.5 39.8 22.1 39 21.9C36.8 21.5 34.7 22.6 33.9 24.7C33.6 25.4 33.5 26.2 33.7 26.9C34.1 28.4 35.4 29.3 36.9 29.6C37.9 29.8 39.4 29.8 39.8 30.9Z"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.3 43.6L30.3 42.4C31.6 42 33.8 42.7 34.9 42.1C35.9 41.6 35.9 40.2 34.7 39.9C33.5 39.5 31.4 40.1 30.3 39.6C30.1 39.3 30.1 38.6 30.4 38.3C31.7 37.9 34.9 38.9 35.5 37.4C35.6 37.2 35.7 36.8 35.6 36.6C35.4 36.2 35.2 36 34.9 35.8C33.9 35.4 31.3 35.8 30.1 35.7C29.4 35.6 28.7 35.6 28.2 36.2C27.7 36.8 27.8 37.7 27.8 38.4C27.8 39.5 27.6 44.4 27.9 45.1C28 45.5 28.4 45.9 28.8 46C29.6 46.3 32.2 46.1 33.2 46.1C33.8 46.1 34.4 46.3 35 46C36.3 45.3 35.6 43.8 34.3 43.7C33.2 43.6 31.3 43.9 30.3 43.6Z"/>'
  }
]);
