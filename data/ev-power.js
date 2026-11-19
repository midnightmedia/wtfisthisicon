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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M33.1 17.9C33.6 17.8 34 17.8 34.4 17.9C34.7 17.9 35 18 35.4 18.4C35.7 18.7 36.3 17.2 36.5 20.1C36.8 22.9 36.6 32.6 36.5 35.4C36.4 38.1 36.3 36.2 36 36.5C35.6 36.9 35.1 37.5 34.4 37.6C33.6 37.8 31.8 37.1 31.8 37.1C31.8 37.1 30.8 37.6 30.6 34.9C30.4 32.1 30.4 23.4 30.6 20.6C30.7 17.9 31.2 18.9 31.6 18.4C32.1 18 32.7 18 33.1 17.9ZM38.1 22.4C38.1 22.4 38.5 22.7 38.9 22.8C39.2 22.8 39.6 22.6 40.1 22.8C40.7 22.9 40.8 22.6 42.1 23.8C43.5 24.9 46.4 28.5 48 29.6C49.5 30.6 50.7 29.8 51.4 29.9C52 30.1 51.7 30.4 52 30.4C52.4 30.5 52.5 30.3 53.2 30.4C54 30.6 55.8 31 56.6 31.4C57.5 31.9 58 31.7 58.2 33.1C58.5 34.6 58.4 38.6 58.2 40C58.1 41.3 57.6 41.1 57.6 41.1C57.6 41.1 55.4 41.6 54.8 41.8C54.1 41.9 54.4 42.2 54 42.2C53.6 42.3 52.9 42.1 52.4 42.2C51.9 42.4 51.3 42.9 51 43.1C50.8 43.4 51.1 43.5 50.9 43.9C50.6 44.2 50.1 44.9 49.5 45.2C48.8 45.6 48 46.2 47 46.2C45.9 46.2 44 45.9 43 45.2C42 44.6 41.9 43.1 41 42.6C40.1 42.2 37.6 42.5 37.6 42.5L37 41L37.4 40.4L37.9 40.8C37.9 40.8 37.8 40.4 38.4 40.4C38.9 40.3 40.8 40.3 41.4 40.4C42 40.4 42 40.8 42 40.8L42.5 40.5C42.5 40.5 43.2 41.1 43.4 41.4C43.5 41.6 43.2 42 43.2 42C43.2 42 43.7 42.7 44.2 43C44.8 43.4 45.8 43.9 46.4 44C46.9 44 47.1 44.1 47.8 43.5C48.4 43 49.3 41.1 50.4 40.5C51.4 39.9 53.3 40.1 54 40C54.6 39.8 54.5 39.5 54.5 39.5L55 39.9C55 39.9 55.7 39.7 56 39.4C56.2 39 56.7 38.8 56.9 38C57 37.3 57.2 35.9 56.9 35C56.5 34.2 55.5 33.5 55 33.1C54.4 32.8 54.2 33.3 53.6 33.1C53 33 52 32.4 51.4 32.2C50.7 32.1 50.5 32.4 49.6 32.2C48.8 32.1 47.8 32.4 46.2 31.2C44.7 30.1 41.7 26.6 40.5 25.4C39.2 24.3 38.8 24.6 38.8 24.6L38.1 24.9L37.5 24.4C37.5 24.4 37.8 23.9 37.8 23.6C37.7 23.4 37.5 23.1 37.5 23.1L38.1 22.4ZM27.9 22.8C28.4 22.6 29.6 23.1 29.6 23.1L29.6 24.8C29.6 24.8 29.5 24.1 28.4 25.1C27.4 26.1 24.7 29.6 23.2 30.8C21.8 31.9 19.9 32.2 19.9 32.2C19.9 32.2 19.7 31.9 19.2 31.9C18.8 32 17.6 32.6 17.1 32.6C16.7 32.7 16.6 32.4 16.6 32.4C16.6 32.4 17.1 32.6 16.1 32.8C15 32.9 11.4 33 10.3 33.1C9.3 33.3 10 33.6 9.8 33.6C9.5 33.7 9.2 33.5 8.9 33.6C8.6 33.8 8.1 34 8 34.8C7.8 35.5 7.9 37.6 8 38.4C8 39.1 8.1 39 8.4 39.4C8.8 39.7 8.9 40.2 9.8 40.4C10.8 40.5 14.2 40.5 14.2 40.5C14.2 40.5 14.5 41.6 14.8 42.1C15.2 42.6 15.8 43.2 16.2 43.5C16.7 43.8 17 44 17.6 44C18.1 43.9 19 43.5 19.6 43.1C20.2 42.8 21.1 41.5 21.1 41.5L21.1 41C21.1 41 20.2 40.5 21.6 40.4C23.1 40.2 29.6 40.4 29.6 40.4L30.2 41.1L29.4 42.5L23.1 42.6C23.1 42.6 21.7 44.6 20.9 45.2C20.2 45.9 18.4 46.2 18.4 46.2L17.9 46C17.9 46 18 46.4 17.4 46.2C16.9 46.1 15.4 45.9 14.6 45.2C13.7 44.6 12.4 42.6 12.4 42.6C12.4 42.6 10.7 42.7 10.2 42.6C9.8 42.6 9.8 42.4 9.8 42.4C9.8 42.4 9.7 42.7 9.3 42.6C9 42.6 8.3 42.4 7.8 42.1C7.4 41.9 7.1 41.8 6.8 41.1C6.4 40.5 5.9 39.3 5.8 38.1C5.6 37 5.5 35.1 5.8 34C6 33 6.5 32.5 7.2 31.9C8 31.4 9.6 31.1 10.2 30.9C10.7 30.8 10.8 31.2 10.8 31.2C10.8 31.2 10.7 30.9 11.2 30.9C11.8 30.8 13.3 30.9 13.8 30.9C14.3 30.8 13.8 30.5 14.2 30.4C14.8 30.4 16.3 30.5 16.9 30.4C17.4 30.4 17.4 30.1 17.4 30.1L17.9 30.4C17.9 30.4 17.9 30.1 18.4 29.9C18.9 29.8 19.8 30.4 20.9 29.6C22.1 28.7 24.8 25.9 25.6 24.9C26.5 24 26 24.1 26.4 23.8C26.7 23.4 27.3 22.9 27.9 22.8Z"/><g fill="currentColor" stroke="none"><circle cx="33.6" cy="43.1" r="2.8"/></g>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.4 5.8C26.8 5.7 27.2 5.7 27.6 5.8C27.9 6 28.2 6.1 28.4 6.5C28.7 6.8 28.8 7.2 28.9 7.8C29.1 8.5 29.1 10.6 29.1 10.6C29.1 10.6 35.5 10.5 36.9 10.6C38.2 10.6 37.2 10.6 37.2 10.9C37.3 11.3 37.2 12.8 37.2 12.8C37.2 12.8 37.9 13.2 36.5 13.3C35.2 13.4 28.9 13.4 28.9 13.4L29.1 15.9C29.1 15.9 35.5 15.9 36.9 15.9C38.2 16 37.2 16 37.2 16.4C37.3 16.7 37.3 17.8 37.2 18.1C37.2 18.5 38.2 18.5 36.9 18.6C35.5 18.6 29.1 18.6 29.1 18.6L28.9 21.1C28.9 21.1 35.2 21 36.5 21.1C37.9 21.2 37.2 21.6 37.2 21.6L37.2 23.6C37.2 23.6 37.9 24 36.5 24.1C35.2 24.1 28.9 24.1 28.9 24.1C28.9 24.1 28.8 29.7 28.9 31.1C29.1 32.5 29.9 31.9 30.1 32.5C30.4 33.2 30.6 34 30.4 34.8C30.3 35.5 29.6 36.5 29.1 37C28.5 37.5 27.8 37.8 27.1 37.8C26.3 37.8 25.3 37.5 24.6 37C24 36.4 23.4 35.4 23.2 34.6C23.1 33.9 23.3 33.3 23.6 32.6C23.8 32 24.6 35.1 24.9 30.9C25.1 26.8 24.8 11.8 24.9 7.7C24.9 3.5 25.1 6.7 25.4 6.3C25.6 6 26.1 5.8 26.4 5.8ZM14.2 25.1C15.2 25.1 19.6 25.4 19.6 25.4L19.9 28.1L22.9 28.4L23.1 30.8C23.1 30.8 24.6 31.1 22.6 31.1C20.5 31.2 10.6 31.2 10.6 31.2L10.7 47.9L43 47.9L43.1 31.2C43.1 31.2 33.3 31.2 31.2 31.1C29.2 31 30.6 30.6 30.6 30.6L30.9 28.4L34 28.1L34 25.4L39.5 25.1C39.5 25.1 40 25.3 40.1 25.9C40.3 26.4 40.2 28.2 40.2 28.2C40.2 28.2 44.6 28.2 45.5 28.2C46.5 28.3 46 25 46 28.8C46.1 32.5 45.9 50.5 45.9 50.5L8 50.5C8 50.5 7.7 53.7 7.7 50C7.6 46.4 7.6 32.4 7.7 28.8C7.7 25.1 7.2 28.3 8.2 28.2C9.1 28.2 13.4 28.2 13.4 28.2C13.4 28.2 13.4 26.3 13.6 25.8C13.7 25.2 13.1 25.2 14.2 25.1ZM48.8 32.1C49.1 32.1 50.8 32.1 50.8 32.1C50.8 32.1 51.2 29.1 51.2 32.8C51.3 36.5 51 54.4 51 54.4C51 54.4 20 54.6 13.7 54.5C7.3 54.5 13.2 54.2 13.2 54.2L13.1 52C13.1 52 7.7 51.7 13.6 51.6C19.4 51.6 48.2 51.6 48.2 51.6C48.2 51.6 48.3 35.8 48.4 32.5C48.4 29.3 48.4 32.2 48.8 32.1ZM35.9 34.6C36.3 34.6 38 34.8 38 34.8L38.2 36.9C38.2 36.9 40 36.9 40.5 37C40.9 37.2 40.8 37.1 40.9 37.5C40.9 38 40.8 39.5 40.8 39.5L38.4 39.9C38.4 39.9 38.4 41.4 38.2 41.9C38.1 42.3 38.1 42.3 37.6 42.4C37.2 42.4 35.6 42.1 35.6 42.1L35.5 40C35.5 40 33.8 40 33.4 39.9C32.9 39.8 33 39.8 33 39.4C32.9 38.9 33.1 37.1 33.1 37.1L35.4 37C35.4 37 35.4 35.4 35.5 35C35.5 34.7 35.4 34.7 35.9 34.6ZM54 36C54.4 35.9 55.5 35.9 55.9 36C56.2 36.1 56.4 32.8 56.5 36.5C56.5 40.2 56.2 58.1 56.2 58.1C56.2 58.1 25.3 58.4 18.9 58.4C12.6 58.3 18.4 58 18.4 58C18.4 58 18.2 56.3 18.2 55.9C18.3 55.4 12.8 55.5 18.6 55.5C24.5 55.4 53.5 55.5 53.5 55.5C53.5 55.5 53.4 39.7 53.5 36.5C53.6 33.2 53.7 36 54 36Z"/><polygon fill="currentColor" stroke="none" points="12.6,37.0 20.5,37.0 20.5,39.9 12.6,39.9"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M34.1 18.8C36.8 18.6 43.4 18.6 45.5 18.8C47.7 18.9 47 19.6 47 19.6L47 22.8L57 22.9L57.2 25.1C57.2 25.1 58.5 25.5 56.8 25.6C55 25.6 47 25.6 47 25.6L47 32.1L56.9 32.1C56.9 32.1 57.2 32.2 57.2 32.6C57.3 33.1 57 34.9 57 34.9L47 35C47 35 47 38.2 47 39C46.9 39.7 48.8 39.3 46.5 39.4C44.2 39.4 35.4 39.4 33.1 39.4C30.8 39.3 32.8 39 32.8 39C32.8 39 32.6 39.5 32.1 39.4C31.6 39.2 30.5 38.8 29.8 38.4C29 38 28.6 38.1 27.9 37C27.1 35.9 25.4 31.8 25.4 31.8C25.4 31.8 16.5 31.6 14.4 31.8C12.4 31.9 13.6 32.2 13.2 32.5C12.9 32.9 12.3 32 12.2 34C12 36.1 12.1 45 12.1 45L6.8 45C6.8 45 6.5 36 6.8 33.5C7 31.1 7.7 31.1 8.2 30.2C8.6 29.4 8.6 29 9.6 28.4C10.5 27.7 11.3 26.7 13.9 26.4C16.6 26 25.4 26.4 25.4 26.4C25.4 26.4 26.2 23.6 26.9 22.6C27.7 21.5 28.4 20.5 29.6 19.9C30.8 19.2 31.5 18.9 34.1 18.8Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.4 6.3C28.3 6.1 35.9 6.2 38.6 6.3C41.4 6.5 40.9 7 42 7.5C43 7.9 44 8.4 45.1 9.1C46.3 9.8 47.5 10.5 48.9 11.7C50.2 12.8 51.9 14.6 53 16.1C54.2 17.7 55.2 19.6 56 21.1C56.7 22.6 57 24 57.4 25.1C57.7 26.3 57.9 26.6 58 28.2C58.1 29.9 58.2 33.1 58 35C57.8 37 57.3 38.4 56.8 40C56.2 41.7 55.4 43.4 54.5 45C53.5 46.5 52.2 48.1 51.1 49.4C50.1 50.6 49.4 51.2 48 52.2C46.5 53.3 43.9 54.8 42.4 55.5C40.8 56.3 40 56.5 38.6 56.9C37.3 57.2 35.8 57.5 34 57.6C32.3 57.8 30.2 57.7 28.4 57.5C26.6 57.2 24.8 56.7 23.2 56.1C21.7 55.6 20.5 55.1 19.1 54.2C17.8 53.4 16.1 52.3 14.8 51.1C13.6 50 12.4 48.7 11.4 47.5C10.5 46.4 10 45.7 9.2 44.2C8.5 42.8 7.5 40.5 7 38.8C6.4 37 6.2 35.8 6 34C5.9 32.3 5.9 30 6.2 28.1C6.4 26.3 6.8 24.7 7.3 23.1C7.9 21.6 8.4 20.3 9.3 18.8C10.3 17.2 11.8 15.2 12.9 13.8C14.1 12.5 14.7 12 16.1 10.9C17.6 9.9 19.9 8.5 21.4 7.8C23 7 22.6 6.6 25.4 6.3ZM30.6 8.1C32.2 7.9 33.2 7.9 34.9 8.2C36.5 8.4 38.8 9 40.5 9.6C42.1 10.1 43.4 10.9 44.6 11.7C45.9 12.4 46.9 13.1 48 14.2C49 15.2 50.2 16.4 51.1 17.8C52.1 19.1 53.1 20.9 53.8 22.4C54.4 23.8 54.8 25.1 55 26.4C55.3 27.6 55.5 28.5 55.5 29.9C55.6 31.4 55.6 33.7 55.4 35.2C55.1 36.8 54.8 38.1 54.2 39.5C53.8 40.8 53.1 42.2 52.4 43.5C51.6 44.7 50.7 46 49.8 47C48.8 48.1 48.1 48.9 46.9 49.9C45.6 50.8 43.6 52.1 42.1 52.9C40.7 53.6 39.6 54 38.1 54.4C36.7 54.7 35.2 55.1 33.5 55.1C31.9 55.2 29.9 55.1 28.2 54.9C26.6 54.6 25.2 54.2 23.9 53.6C22.5 53.1 21.1 52.5 19.9 51.8C18.8 51 17.8 50.4 16.6 49.4C15.5 48.3 14.1 46.7 13.2 45.5C12.2 44.4 11.9 43.8 11.2 42.5C10.6 41.3 9.8 39.4 9.3 37.9C8.9 36.3 8.7 34.9 8.6 33.4C8.4 31.8 8.5 30.1 8.7 28.6C8.8 27.2 9 26.3 9.4 24.9C9.9 23.4 10.8 21.4 11.6 19.9C12.4 18.5 13.3 17.3 14.2 16.1C15.2 15 16.2 14.1 17.4 13.2C18.5 12.2 20 11.2 21.4 10.6C22.7 9.9 23.9 9.4 25.4 8.9C27 8.5 29.1 8.2 30.6 8.1ZM33 25.2C34.2 25.2 36.2 25.2 37.5 25.4C38.9 25.5 39.8 25.8 41 26.4C42.3 26.9 43.8 27.9 45 28.9C46.1 29.8 47.9 32.2 47.9 32.2C47.9 32.2 49 32.3 49.9 32C50.7 31.8 52.8 30.9 52.8 30.9C52.8 30.9 52.8 31.2 52.5 31.6C52.3 31.9 51.9 32.5 51 33C50.1 33.6 47.1 34.9 47.1 34.9C47.1 34.9 47 35.3 47.2 35.8C47.5 36.2 48.8 37.8 48.8 37.8C48.8 37.8 48.6 38.4 48.4 38.6C48.1 38.9 47.9 39 47.2 39C46.6 39.1 44.6 39 44.6 39L44.5 36.6C44.5 36.6 41.5 37.2 38.9 37.2C36.2 37.3 30.9 37.2 28.6 37.1C26.4 37 25.4 36.6 25.4 36.6C25.4 36.6 25.2 37.2 25.2 37.5C25.3 37.7 25.6 38.4 25.6 38.4C25.6 38.4 26 38.6 25.4 38.8C24.7 38.9 22.6 39 21.9 39C21.3 38.9 21.2 38.5 21.2 38.5C21.2 38.5 21 38 21.1 37.6C21.3 37.3 22.1 36.6 22.2 36.2C22.4 35.9 22.2 35.5 22.2 35.5C22.2 35.5 17 33.2 15.4 32.5C13.9 31.7 13.4 31.2 12.8 30.6C12.1 30.1 11.7 29.5 11.6 29.1C11.4 28.6 11.5 28.4 11.7 28.1C11.8 27.7 12 27.3 12.7 27.1C13.3 26.8 14.4 26.3 15.4 26.4C16.4 26.4 17.4 26.7 18.6 27.4C19.9 28.2 22.9 30.9 22.9 30.9C22.9 30.9 26 28 27.2 27.1C28.5 26.3 29.5 26.1 30.4 25.8C31.4 25.4 31.9 25.3 33 25.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.8 6.2C15.1 6.1 31.5 6.1 35.8 6.2C40 6.2 36.2 6.5 36.2 6.5C36.2 6.5 36.2 7.2 36.4 7.5C36.5 7.9 37 4.9 37.1 8.3C37.3 11.8 37 25.1 37 28.4C37.1 31.8 37.2 28.8 37.2 28.8C37.2 28.8 39.6 28.6 40.2 28.8C40.9 28.9 40.9 29.1 41 29.6C41.1 30 40.9 31.6 40.9 31.6C40.9 31.6 41.5 29.8 41.6 32.4C41.8 35 41.1 44.3 41.5 47.2C41.9 50.2 43.3 49.4 44 49.9C44.8 50.3 46.2 49.9 46.2 49.9C46.2 49.9 46.5 49.4 46.8 49.2C47 49.1 47.4 49.3 47.9 49C48.3 48.8 49.2 48.1 49.5 47.5C49.7 46.8 49.3 45.7 49.5 45.1C49.6 44.6 50.1 46.1 50.2 44.4C50.4 42.6 50.2 34.8 50.2 34.8C50.2 34.8 49.2 34.5 49 34.4C48.7 34.2 48.5 33.8 48.5 33.8C48.5 33.8 47.3 33.9 47 33.8C46.6 33.6 46.5 33.2 46.2 33C46 32.9 45.1 32.9 45.1 32.9C45.1 32.9 45.1 32 45 31.8C44.8 31.5 44.4 31.4 44.2 31.1C44.1 30.9 44.3 30.5 44.1 30.1C44 29.8 43.5 31.1 43.4 29.2C43.2 27.4 43.2 20.8 43.4 18.9C43.5 17.1 43.6 18.4 44 18.2C44.3 18.1 45.6 18.1 45.6 18.1C45.6 18.1 45.5 11.9 45.6 10.6C45.8 9.2 46.4 9.8 46.4 9.8L45.6 8.9L47 7.7L48.4 8.8L47.8 9.9C47.8 9.9 48.3 9.2 48.5 10.6C48.6 11.9 48.5 18.1 48.5 18.1C48.5 18.1 52.2 18.2 53 18.2C53.8 18.2 53.2 18.1 53.2 18.1C53.2 18.1 53 10.2 53.1 8.4C53.2 6.7 53.9 7.7 53.9 7.7L55 8L55.1 18.1C55.1 18.1 57.1 18.1 57.6 18.2C58.2 18.4 58.1 16.9 58.2 18.9C58.4 20.8 58.5 27.8 58.2 30.1C58 32.5 56.9 32.4 56.5 32.9C56 33.3 55.7 32.9 55.4 33C55 33.2 55 33.6 54.6 33.8C54.3 33.9 53.6 33.6 53.1 33.8C52.7 33.9 52.3 32.9 52.1 34.8C52 36.6 52.4 43.2 52.2 45C52.1 46.9 51.5 45.9 51.5 45.9L52.1 47C52.1 47 51.6 47.3 51.5 47.5C51.3 47.8 51.9 47.9 51.2 48.6C50.6 49.4 49.2 51.3 47.9 51.9C46.5 52.4 44.1 52 43.2 51.9C42.4 51.7 42.9 51.3 42.5 51.1C42.2 51 41.2 50.8 41.2 50.8C41.2 50.8 41.3 50 41.1 49.8C41 49.5 40.5 49.2 40.4 49C40.2 48.7 40.5 48.4 40.4 48.1C40.2 47.9 39.8 47.9 39.6 47.5C39.5 47.2 39.8 46.4 39.6 46C39.5 45.6 39 47.6 38.9 45.1C38.7 42.7 39 33.5 39 31.1C38.9 28.7 38.8 30.8 38.8 30.8L37.2 30.8C37.2 30.8 37.1 27.4 37 31.1C37 34.7 37 48.9 37 52.5C37.1 56.2 37.2 52.9 37.2 52.9C37.2 52.9 39.7 52.8 40.2 52.9C40.8 52.9 40.8 53.1 40.8 53.1C40.8 53.1 41 56.6 41 57.4C40.9 58.1 40.8 57.7 40.6 57.8C40.5 57.8 40.1 57.9 40.1 57.9C40.1 57.9 45 57.3 39.5 57.1C34 57 12.7 57 7.2 57.1C1.7 57.3 6.5 57.9 6.5 57.9L5.8 57.6L5.8 53.2C5.8 53.2 5.8 53 6.5 52.9C7.1 52.8 9.6 52.6 9.6 52.6C9.6 52.6 9.3 16.6 9.4 9.2C9.6 1.8 10.1 8.7 10.2 8.2C10.4 7.8 10.2 7.1 10.2 6.8C10.3 6.4 6.6 6.2 10.8 6.2ZM14.7 11.2L31.9 11.2L32 28.6L14.7 28.6L14.7 11.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.6 13.4C30.6 13.3 37.5 13.3 39.5 13.4C41.6 13.6 39.8 13.1 41 14.2C42.3 15.2 45.8 18.9 47 19.9C48.2 21 47.8 20.4 48.2 20.6C48.7 20.7 48.2 20.2 49.5 20.6C50.9 20.9 54.9 21.7 56.4 22.4C57.8 23 57.9 23.5 58.2 24.4C58.6 25.4 58.5 27.4 58.5 28.2C58.4 29.1 58.4 29.1 58.1 29.6C57.9 30 57.4 30.4 57 30.8C56.7 31.1 56.8 31.1 55.9 31.4C54.9 31.6 52.3 31.5 51.2 32C50.2 32.6 50.4 33.9 49.6 34.5C48.9 35.2 47.7 35.8 46.6 35.9C45.6 35.9 44.3 35.3 43.5 34.6C42.6 34 41.6 32 41.6 32L22.4 32C22.4 32 21.2 34 20.8 34.5C20.3 35.1 20.2 35 19.6 35.2C19.1 35.5 18.2 36 17.4 35.9C16.5 35.8 15.3 35.3 14.6 34.6C13.8 34 12.8 32 12.8 32C12.8 32 9.7 32.1 8.9 32C8.2 32 8.7 32.1 8.2 31.8C7.8 31.4 6.8 30.7 6.3 29.8C5.9 28.8 5.8 27.1 5.8 26.1C5.8 25.1 6.1 24.3 6.3 23.8C6.5 23.2 6.7 23.2 7 22.9C7.4 22.7 6.4 22.6 8.2 22.2C10.1 21.9 16.3 21.4 18.4 21.1C20.4 20.9 19.9 20.7 20.4 20.6C21 20.4 20.4 21.1 21.6 20.1C22.7 19 26.2 15.2 27.4 14.2C28.5 13.1 26.5 13.6 28.6 13.4ZM30.1 16.2C32.3 15.4 38.6 16.2 38.6 16.2L41 22.1L25.6 22.1C25.6 22.1 24.8 22.2 25.6 21.2C26.3 20.3 28 17.1 30.1 16.2ZM46.8 38.5C46.8 38.5 54.7 42.8 56.4 43.8C58 44.7 56.6 44.2 56.6 44.2C56.6 44.2 58 44 56.4 45C54.7 46.1 47 50.5 47 50.5L46.2 50.1L46.2 47.2C46.2 47.2 50.5 47 45.9 47C41.2 46.9 22.9 46.9 18.2 47C13.6 47 17.9 46.8 17.9 47.4C17.8 47.9 17.9 50 17.9 50L17.1 50.5L7.5 44.6C7.5 44.6 6.2 44.9 7.8 43.9C9.3 42.8 16.9 38.5 16.9 38.5L17.9 39L18.1 42L46.1 42C46.1 42 46.1 39.6 46.2 39C46.4 38.5 46.8 38.5 46.8 38.5Z"/>'
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
    svg: '<rect x="6" y="6" width="52" height="52" rx="2" fill="currentColor" stroke="none"/><path class="knock" stroke-width="0" fill-rule="evenodd" d="M37.8 18.6C39.4 18.4 45.4 18.6 45.4 18.6L45.6 22.2C45.6 22.2 50.5 22.2 51.8 22.4C53 22.6 52.8 23.1 53 23.4C53.3 23.8 53.3 23.8 53.4 24.2C53.4 24.7 53.4 25.6 53.1 26.1C52.9 26.5 53.1 26.9 51.9 27.1C50.6 27.4 46.8 27.3 45.8 27.4C44.7 27.4 45.5 26.1 45.5 27.6C45.4 29.1 45.4 34.9 45.5 36.4C45.5 37.9 44.7 36.6 45.8 36.6C46.8 36.7 50.6 36.6 51.9 36.9C53.1 37.1 52.9 37.5 53.1 38C53.4 38.4 53.4 39.3 53.4 39.8C53.3 40.2 53.3 40.2 53 40.5C52.8 40.8 53 41.3 51.8 41.5C50.5 41.8 45.6 41.8 45.6 41.8L45.4 45.5C45.4 45.5 39.4 45.6 37.8 45.5C36.1 45.3 36.3 45 35.8 44.5C35.2 44.1 34.7 43.5 34.4 43C34 42.4 33.9 42.4 33.8 41.1C33.6 39.9 33.8 36.5 33.8 35.5C33.7 34.4 33.5 35 33.5 35L10.1 35L10.2 28.9L33.5 28.9C33.5 28.9 33.7 29.6 33.8 28.6C33.8 27.5 33.7 24 33.8 22.9C33.8 21.7 33.8 22 34.1 21.4C34.5 20.9 35.1 19.9 35.8 19.4C36.4 19 36.1 18.7 37.8 18.6Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.9 6.5C32.5 6.5 33.6 6.5 35.4 6.8C37.1 7 39.6 7.7 41.1 8.2C42.7 8.8 43.5 9.2 44.8 9.9C46 10.6 47.1 11.3 48.4 12.4C49.6 13.6 51.2 15.2 52.4 16.6C53.5 18.1 54.2 19.4 55 20.9C55.7 22.5 56.3 24.1 56.8 25.8C57.2 27.4 57.4 29.2 57.5 30.9C57.6 32.5 57.6 33.6 57.4 35.4C57.1 37.1 56.4 39.5 55.9 41.1C55.3 42.8 54.6 44 53.9 45.2C53.1 46.5 52.6 47.3 51.6 48.4C50.7 49.4 49.6 50.6 48.4 51.6C47.1 52.6 45.9 53.5 44.4 54.4C42.8 55.2 40.9 56 39 56.5C37.2 57.1 35 57.4 33.2 57.5C31.5 57.7 30.5 57.6 28.8 57.4C27 57.1 24.6 56.4 22.9 55.9C21.3 55.3 20.1 54.6 18.9 53.9C17.7 53.1 16.8 52.6 15.8 51.6C14.7 50.7 13.4 49.6 12.4 48.4C11.4 47.1 10.6 45.9 9.8 44.4C8.9 42.8 8.1 40.9 7.5 39C7 37.2 6.7 35 6.5 33.2C6.4 31.5 6.5 30.5 6.8 28.8C7 27 7.7 24.5 8.2 22.9C8.8 21.4 9.2 20.6 9.9 19.4C10.6 18.2 11.3 17 12.4 15.8C13.6 14.5 15.2 12.8 16.6 11.8C18.1 10.7 19.4 9.9 20.9 9.2C22.5 8.4 24.1 7.8 25.8 7.3C27.4 6.9 29.2 6.6 30.9 6.5ZM30.6 9.2C32.1 9.2 33.6 9.2 35 9.3C36.5 9.5 38 9.9 39.4 10.3C40.7 10.8 42.2 11.5 43.4 12.2C44.5 12.8 45.4 13.3 46.5 14.2C47.5 15.2 48.9 16.6 49.9 17.6C50.8 18.7 51.3 19.6 52 20.8C52.6 21.9 53.2 23.1 53.6 24.4C54.1 25.8 54.5 27.8 54.8 29.1C55 30.3 55 31 55 32C55 33 54.9 34.1 54.8 35C54.6 36 54.4 36.9 54.1 38C53.9 39 53.7 39.9 53 41.1C52.4 42.4 51.6 44.2 50.5 45.6C49.4 47.1 47.6 48.8 46.5 49.9C45.3 50.9 44.5 51.3 43.4 52C42.2 52.6 41 53.2 39.6 53.6C38.3 54.1 36.8 54.6 35 54.8C33.3 54.9 30.6 54.9 29.1 54.8C27.5 54.6 26.8 54.4 25.4 54C24.1 53.5 22.5 52.9 21.1 52.1C19.8 51.4 18.7 50.7 17.6 49.8C16.4 48.8 15.2 47.6 14.3 46.5C13.4 45.5 12.8 44.5 12.2 43.4C11.5 42.2 10.9 41 10.4 39.6C10 38.3 9.5 36.8 9.3 35C9.2 33.3 9.2 30.6 9.3 29.1C9.4 27.6 9.5 27.4 9.9 26.1C10.4 24.7 11.4 22.1 12.2 20.8C12.9 19.4 13.3 18.7 14.2 17.6C15.2 16.6 16.4 15.3 17.6 14.3C18.7 13.4 19.7 12.7 21.1 11.9C22.6 11.2 24.5 10.4 26.1 9.9C27.6 9.5 29.1 9.3 30.6 9.2ZM31.4 14.6C31.8 14.5 33 14.7 33 14.7C33 14.7 33.2 11.4 33.2 15.2C33.3 18.9 33.2 36.9 33.2 36.9C33.2 36.9 46.2 36.8 49 37C51.7 37.1 49.4 37.2 49.5 37.5C49.6 37.9 49.6 38.5 49.5 38.9C49.5 39.2 49.2 39.4 49.2 39.4C49.2 39.4 20.9 39.5 15.2 39.5C9.4 39.4 14.7 39.1 14.7 39.1C14.7 39.1 14.5 37.9 14.6 37.5C14.6 37.2 12.4 37.1 15.2 37C17.9 36.8 30.9 36.9 30.9 36.9C30.9 36.9 30.8 18.9 30.9 15.2C31 11.4 31.1 14.6 31.4 14.6Z"/><polygon fill="currentColor" stroke="none" points="20.0,42.4 44.1,42.4 44.1,45.1 20.0,45.1"/><polygon fill="currentColor" stroke="none" points="25.1,47.9 39.0,47.9 39.0,50.5 25.1,50.5"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 9.7C31.9 9.7 31.5 8.9 32.4 9.8C33.2 10.6 37.2 14.7 37.2 14.7C37.2 14.7 37.3 12 37.4 11.3C37.4 10.7 37.8 10.8 37.8 10.8L44.9 10.8C44.9 10.8 45.2 9.4 45.2 11.3C45.3 13.3 43.2 18.8 45.2 22.6C47.2 26.5 55.2 32.5 57.2 34.6C59.2 36.8 57.2 35.2 57.2 35.2C57.2 35.2 57.5 35.6 56.6 35.6C55.8 35.7 51.9 35.8 51.9 35.8C51.9 35.8 51.9 50.6 51.9 53.6C51.8 56.7 51.5 54.2 51.5 54.2C51.5 54.2 19.3 54.4 12.8 54.4C6.2 54.3 12.2 54 12.2 54L12.1 35.8C12.1 35.8 8.2 35.7 7.2 35.6C6.3 35.6 6.7 35.2 6.7 35.2C6.7 35.2 2.5 38.9 6.7 34.6C10.9 30.4 31.9 9.7 31.9 9.7ZM31.9 12.9C31.9 12.9 37.4 18.4 38.5 19.6C39.7 20.7 39 19.8 39 19.8C39 19.8 39.8 20.1 40 18.9C40.1 17.8 40 13.2 40 13.2L42.6 13.2C42.6 13.2 41.2 20.3 42.8 23.6C44.3 27 52 33 52 33C52 33 50.6 32.9 50.1 33C49.7 33.2 49.5 30.7 49.4 33.9C49.2 37 49.4 51.8 49.4 51.8L14.6 51.8C14.6 51.8 14.7 37 14.6 33.9C14.4 30.7 14.2 33.2 13.8 33C13.3 32.9 11.8 33 11.8 33L31.9 12.9Z"/>'
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
    svg: '<polygon stroke-width="4.6" points="32,11.5 56,53 8,53"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.1 23.1L34.1 23.1L34.4 23.4L29.6 35C29.6 35 34.6 32.3 35.8 31.9C36.9 31.4 36.2 32 36.2 32C36.2 32 33.1 43.1 32.5 45.5C32 47.8 32.8 46 32.8 46L33.8 45.5L34 45.8L30.8 50.4L29.4 44.6L30.4 45.5C30.4 45.5 30.6 46.9 30.9 45.2C31.2 43.6 32.2 36 32.2 36C32.2 36 32.8 35.4 31.6 35.9C30.5 36.3 25.6 38.9 25.6 38.9L30.1 23.1Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.4 12.8C32.3 12.7 33.6 13 34.4 13.2C35.1 13.3 35.2 13.5 35.6 13.8C36.1 14.2 33.4 10.5 37 15.1C40.5 19.6 53.5 36.4 57 41.2C60.5 46.1 57.8 43.1 58 44C58.1 44.8 58 45.5 57.9 46.2C57.7 47 57.3 47.9 56.9 48.5C56.4 49.2 55.7 49.9 55 50.4C54.2 50.8 59.5 51.1 52.5 51.2C45.4 51.4 19.4 51.4 12.4 51.4C5.5 51.3 11.1 51.2 10.6 51C10 50.9 9.7 50.8 9.1 50.4C8.5 49.9 7.5 49 7 48.2C6.5 47.5 6.2 46.6 6 45.9C5.9 45.1 5.9 44.6 6 43.9C6.2 43.1 3.6 46 7 41.2C10.5 36.5 23.4 19.8 26.9 15.2C30.5 10.6 27.9 14.1 28.6 13.7C29.4 13.2 30.4 12.8 31.4 12.8ZM31.9 16.8C32.2 16.7 32.6 16.8 33 16.9C33.3 17.1 30.6 13.5 34 17.9C37.4 22.2 50 38.8 53.4 43.1C56.7 47.5 53.8 43.7 53.9 44C54 44.4 54.1 44.8 54 45.2C53.8 45.7 53.4 46.4 53 46.8C52.7 47.1 58.8 47.2 52 47.2C45.1 47.3 19 47.4 12.1 47.2C5.1 47.1 10.8 46.6 10.4 46.2C10.1 45.9 10.1 45.7 10.1 45.4C10 45 10 44.7 10.1 44.4C10.2 44 7.3 47.6 10.7 43.1C14 38.7 26.6 22.2 29.9 17.9C33.3 13.5 30.5 17.2 30.9 17.1C31.2 16.9 31.5 16.8 31.9 16.8ZM31.1 23.6C31.9 23.5 33 23.5 33.8 23.6C34.5 23.8 35.3 24 35.8 24.1C36.2 24.3 36.4 24.3 36.5 24.6C36.7 24.9 36.8 25.6 36.8 25.9C36.7 26.3 36.6 26.4 36.4 26.6C36.1 26.7 36.2 26.9 35.5 26.9C34.9 26.8 33.5 26.2 32.5 26.1C31.4 26.1 30.1 26.3 29.1 26.6C28.1 27 27.2 27.5 26.4 28.1C25.6 28.8 24.9 29.8 24.4 30.6C23.8 31.4 23.6 32 23.4 33C23.2 33.9 23 35.1 23.1 36.2C23.3 37.4 23.7 38.6 24.2 39.5C24.8 40.5 25.6 41.3 26.2 42C26.9 42.6 27.8 43 28.4 43.4C29.1 43.7 29.6 43.8 30.4 44C31.1 44.1 32.3 44.1 33 44C33.8 44 34.3 43.8 35 43.5C35.8 43.3 36.6 42.9 37.2 42.4C37.9 41.8 38.6 41.1 39.1 40.5C39.7 39.8 40.1 39.1 40.4 38.2C40.6 37.4 40.7 35.7 40.9 35C41 34.4 41.1 34.5 41.2 34.2C41.4 34 41.5 33.9 41.8 33.9C42 33.8 42.9 34 42.9 34C42.9 34 43.5 34.5 43.5 35C43.6 35.6 43.5 36.6 43.4 37.4C43.2 38.1 43.1 38.7 42.6 39.6C42.2 40.6 41.3 42.1 40.5 43C39.8 43.8 39 44.4 38.4 44.9C37.7 45.3 37.4 45.5 36.5 45.9C35.5 46.2 33.6 46.6 32.6 46.8C31.6 46.9 31.3 46.8 30.4 46.6C29.6 46.5 28.8 46.4 27.8 46C26.8 45.5 25.4 44.8 24.4 44C23.5 43.1 22.6 41.8 22.1 41C21.5 40.2 21.4 39.9 21.1 39.1C20.9 38.4 20.6 37.9 20.6 36.8C20.5 35.6 20.6 33.5 20.8 32.5C20.9 31.4 21.1 31.1 21.4 30.4C21.8 29.6 22.2 28.8 22.8 28.1C23.3 27.4 24.1 26.7 24.6 26.1C25.2 25.6 25.6 25.4 26.2 25.1C26.9 24.7 27.8 24.3 28.6 24.1C29.4 23.8 30.2 23.6 31.1 23.6ZM40.1 28.1C40.1 28.1 40.7 28 41 28.1C41.2 28.2 41.4 28.4 41.5 28.6C41.7 28.9 41.8 29.3 41.8 29.6C41.7 29.8 43.1 28.5 41.5 30.2C39.8 32 33.7 38.2 31.9 39.9C30.2 41.5 31.5 40.2 31.1 40.2C30.8 40.3 30.1 40.2 29.8 40C29.4 39.9 29.4 40.2 29.1 39.1C28.7 38.1 27.8 34.7 27.6 33.6C27.3 32.6 27.4 32.9 27.4 32.6C27.5 32.4 27.6 32.2 27.8 32C27.9 31.9 28.1 31.7 28.4 31.6C28.6 31.6 29 31.6 29.2 31.6C29.5 31.7 29.6 31.5 29.9 32.1C30.1 32.8 30.6 35 30.9 35.6C31.1 36.3 31.6 36.2 31.6 36.2L40.1 28.1Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M38.1 11.3C39.6 11.3 42.2 11.3 44 11.7C45.7 12 47.5 12.7 48.6 13.2C49.8 13.6 50.2 13.9 51 14.4C51.9 15 53 15.8 53.8 16.4C54.5 17.1 55.2 17.8 55.6 18.4C56.1 18.9 56.5 19.9 56.5 19.9L53.5 22.1C53.5 22.1 52 20.4 51.1 19.6C50.3 18.9 49.3 18.1 48.2 17.6C47.2 17 45.9 16.4 44.8 16.1C43.6 15.7 42.9 15.5 41.5 15.4C40.2 15.4 37.8 15.6 36.5 15.8C35.3 15.9 34.9 16.2 34 16.6C33 16.9 31.9 17.5 31.1 18.1C30.2 18.6 29.6 19.1 28.9 19.8C28.2 20.4 27.5 21.1 26.9 21.9C26.2 22.8 25.4 24.2 24.9 25.1C24.5 26.1 24.3 26.8 24.1 27.6C23.8 28.5 23.6 29.3 23.6 30.2C23.5 31.2 23.4 32.4 23.6 33.5C23.7 34.6 23.9 35.7 24.2 36.9C24.6 38 25.2 39.2 25.8 40.2C26.3 41.3 26.9 42.1 27.8 43C28.6 43.8 29.5 44.7 30.6 45.5C31.6 46.2 32.8 46.9 34 47.4C35.3 47.8 36.5 48.2 37.9 48.4C39.2 48.5 40.8 48.6 42.2 48.4C43.7 48.1 45.2 47.7 46.5 47.1C47.9 46.6 49.1 45.9 50.2 45C51.4 44 53.5 41.5 53.5 41.5L56.9 43.8C56.9 43.8 57 44 56.2 44.8C55.5 45.5 53.5 47.6 52.5 48.5C51.4 49.3 51 49.5 50.1 50C49.2 50.4 48.5 50.9 47 51.4C45.6 51.8 42.9 52.3 41.5 52.5C40.1 52.8 39.6 52.6 38.6 52.5C37.6 52.5 36.6 52.3 35.5 52C34.4 51.8 33.1 51.4 32 51C31 50.5 30.1 50 29.1 49.5C28.2 48.9 27.3 48.2 26.6 47.5C25.8 46.9 25.1 46.2 24.4 45.5C23.8 44.7 23.2 43.9 22.6 43C22.1 42.2 21.7 41.8 21.1 40.2C20.6 38.7 19.4 34 19.4 34C19.4 34 12.7 33.9 11.3 34C10 34 11.1 34.1 11.1 34.1L11.1 49L7 51.5L7 11.8L24.2 11.8L21.4 15.8C21.4 15.8 13.1 15.8 11.3 15.8C9.6 15.9 11.1 13.9 11.1 16.1C11 18.4 11 27.3 11.1 29.6C11.1 31.8 10 29.8 11.3 29.9C12.7 29.9 17.9 29.9 19.2 29.9C20.6 29.8 19.4 30.3 19.6 29.6C19.7 29 20 26.9 20.4 25.8C20.7 24.6 21 23.7 21.6 22.6C22.3 21.4 23.3 19.8 24.1 18.8C25 17.7 26.1 16.7 26.9 16.1C27.6 15.4 27.9 15.2 28.8 14.7C29.6 14.1 30.9 13.4 31.9 12.9C33 12.5 34.2 12.1 35.2 11.8C36.3 11.6 36.7 11.4 38.1 11.3ZM38.5 20.2C39.3 20.2 40.6 20.1 41.6 20.2C42.7 20.4 43.6 20.7 44.5 21.1C45.4 21.4 46.2 21.8 47 22.4C47.9 23.1 49.5 24.9 49.5 24.9L46.2 27.4C46.2 27.4 45 26.1 44.5 25.6C43.9 25.2 43.4 25 42.8 24.8C42.1 24.5 41.5 24.3 40.8 24.2C40 24.2 39 24.3 38.4 24.4C37.7 24.6 37.2 24.8 36.6 25.1C36.1 25.3 35.6 25.7 35.1 26.1C34.7 26.4 34.2 26.9 33.9 27.4C33.5 27.9 33.2 28.5 33 29.1C32.7 29.6 32.5 30.1 32.5 30.8C32.4 31.4 32.4 32.5 32.5 33.1C32.5 33.8 32.5 33.9 32.9 34.5C33.2 35.2 33.8 36.4 34.5 37.1C35.1 37.9 35.8 38.4 36.5 38.8C37.3 39.1 38.4 39.4 39.2 39.5C40.1 39.7 40.8 39.7 41.6 39.5C42.5 39.2 43.8 38.6 44.5 38.1C45.3 37.6 46.2 36.5 46.2 36.5L49.5 38.6C49.5 38.6 49.4 39.2 48.9 39.8C48.4 40.3 47.3 41.2 46.5 41.8C45.8 42.3 45.3 42.5 44.5 42.9C43.6 43.2 42.6 43.6 41.4 43.6C40.1 43.7 38.2 43.5 37.2 43.4C36.3 43.2 36.1 43.1 35.5 42.8C34.8 42.4 34 42.2 33.1 41.5C32.3 40.7 30.9 39.3 30.2 38.5C29.6 37.6 29.4 37.1 29.1 36.4C28.8 35.6 28.6 34.7 28.4 34C28.3 33.2 28.2 32.5 28.2 31.6C28.3 30.8 28.5 29.5 28.8 28.6C29 27.8 29.4 26.9 29.8 26.2C30.1 25.6 30.2 25.2 30.9 24.4C31.7 23.7 33.2 22.4 34.1 21.8C35 21.1 35.6 21 36.4 20.8C37.1 20.5 37.6 20.3 38.5 20.2Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.2 6C33 6 34.5 6.1 36 6.3C37.4 6.6 38.6 6.8 40.1 7.3C41.7 7.9 43.6 8.8 45 9.6C46.5 10.4 47.5 11.1 48.8 12.2C50 13.2 51.4 14.6 52.4 15.8C53.4 17.1 54 18 54.8 19.4C55.5 20.9 56.3 22.5 56.9 24.4C57.4 26.2 57.8 28.6 58 30.4C58.1 32.1 58 33.5 57.9 35C57.7 36.6 57.4 38.1 56.9 39.8C56.3 41.4 55.6 43.1 54.8 44.6C53.9 46.2 52.8 47.6 51.9 48.9C50.9 50.1 50.1 50.9 48.9 51.9C47.6 52.8 46.2 53.9 44.6 54.8C43.1 55.6 41 56.4 39.8 56.9C38.5 57.3 38 57.4 37 57.5C36 57.7 35.1 57.9 33.8 58C32.4 58 30.5 58 28.9 57.9C27.4 57.7 26 57.4 24.4 56.9C22.7 56.3 20.8 55.5 19.2 54.6C17.8 53.8 16.6 53 15.3 52C14.1 50.9 12.8 49.6 11.7 48.1C10.5 46.6 9.2 44.6 8.4 43C7.6 41.3 7.2 40.1 6.8 38.5C6.4 36.8 6.1 34.8 6 33C6 31.3 6.1 29.7 6.3 28.1C6.6 26.4 7.1 24.6 7.7 23.1C8.2 21.5 8.9 20.2 9.7 18.9C10.4 17.5 11.2 16.3 12.4 14.9C13.7 13.6 15.7 11.8 17.1 10.8C18.6 9.7 19.7 9.1 21.1 8.4C22.6 7.8 24 7.2 25.6 6.8C27.3 6.4 29.5 6.1 31.2 6ZM30.1 10.9C31.4 10.8 32.5 10.8 33.9 10.9C35.2 11.1 36.7 11.3 38 11.8C39.4 12.2 40.7 12.7 42 13.3C43.2 14 44.5 14.9 45.5 15.8C46.6 16.6 47.5 17.6 48.4 18.6C49.2 19.5 49.8 20.4 50.5 21.6C51.1 22.9 51.8 24.5 52.2 25.9C52.7 27.2 52.9 28.1 53 29.6C53.2 31 53.1 33.1 53 34.5C52.9 35.8 52.7 36.5 52.5 37.5C52.2 38.5 52 39.2 51.5 40.5C50.9 41.7 49.7 43.6 49 44.8C48.2 45.9 47.8 46.3 46.8 47.2C45.7 48.2 43.9 49.6 42.5 50.5C41 51.3 39.6 51.8 38.2 52.2C36.9 52.7 36 52.9 34.5 53C33.1 53.2 31 53.2 29.6 53C28.1 52.9 26.9 52.6 25.8 52.2C24.6 51.9 23.8 51.6 22.6 51C21.4 50.3 19.7 49.2 18.6 48.4C17.4 47.5 16.6 46.6 15.8 45.5C14.9 44.5 14.1 43.4 13.4 42.1C12.8 40.9 12.2 39.4 11.8 38C11.3 36.7 11.1 35.3 10.9 34C10.8 32.6 10.8 31.4 10.9 30.1C11.1 28.9 11.2 27.8 11.7 26.4C12.1 25 12.9 23 13.6 21.8C14.2 20.5 14.8 19.7 15.7 18.6C16.5 17.6 17.6 16.5 18.6 15.7C19.7 14.8 20.7 14.1 21.9 13.4C23.2 12.8 24.7 12.2 26.1 11.8C27.4 11.3 28.8 11.1 30.1 10.9ZM19.6 18.1L23.9 18.1C23.9 18.1 24.1 15.9 24.1 18.6C24.2 21.2 24 31.4 24.1 34.2C24.3 37 25.1 35.4 25.1 35.4L26.8 35.1C26.8 35.1 27.4 36.5 27.6 33.6C27.7 30.8 27.6 18.2 27.6 18.2L32.2 18.4C32.2 18.4 32.2 31.7 32 34.9C31.8 38 31.5 36.4 31.1 37C30.6 37.6 29.9 38.1 29.1 38.5C28.3 38.8 27.2 39 26.2 39C25.3 39.1 24.1 38.9 23.4 38.8C22.6 38.6 22.1 38.5 21.6 38C21 37.5 20.2 36.4 19.9 35.8C19.5 35.1 19.5 37.2 19.4 34.2C19.4 31.3 19.6 18.1 19.6 18.1ZM34.4 25.6L38.9 25.6L39 41.8L44.6 42L44.8 45.9L34.2 45.9L34.4 25.6Z"/>'
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
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.8 10.8C31.4 10.6 32.7 10.6 34.4 10.8C36 10.9 38.1 11.2 39.8 11.6C41.4 11.9 42.7 12.4 44.1 12.9C45.6 13.5 47 14.2 48.2 14.9C49.5 15.7 50.5 16.3 51.5 17.2C52.6 18.2 53.9 19.4 54.8 20.4C55.6 21.5 56.2 22.3 56.9 23.6C57.5 24.8 58.2 26.6 58.5 27.9C58.9 29.1 59 30.1 59 30.9C59.1 31.8 59.1 32.2 59 33C59 33.9 58.9 34.9 58.5 36.1C58.2 37.4 57.5 39.2 56.9 40.5C56.2 41.7 55.6 42.5 54.8 43.5C53.9 44.6 52.6 45.8 51.5 46.8C50.5 47.7 49.4 48.4 48.2 49C47.1 49.7 46.1 50.3 44.6 50.9C43.2 51.4 41.5 52.1 39.8 52.5C38 52.9 36 53.1 34.4 53.2C32.7 53.4 31.4 53.4 29.8 53.2C28.1 53.1 26.2 52.9 24.4 52.5C22.5 52 20.5 51.3 18.8 50.5C17 49.8 15.3 48.8 13.8 47.8C12.4 46.7 11.2 45.7 10.2 44.5C9.1 43.2 8 41.8 7.2 40.5C6.5 39.1 5.9 37.4 5.5 36.1C5.2 34.9 5.1 33.9 5 33C5 32.2 5 31.8 5 30.9C5.1 30.1 5.2 29.1 5.5 27.9C5.9 26.6 6.5 24.9 7.2 23.6C8 22.2 9.1 20.8 10.2 19.6C11.2 18.3 12.4 17.3 13.8 16.2C15.3 15.2 17 14.2 18.8 13.4C20.5 12.7 22.5 12 24.4 11.6C26.2 11.1 28.1 10.9 29.8 10.8ZM29.8 12.3C31.3 12.2 32.8 12.2 34.4 12.3C35.9 12.5 37.7 12.8 39.1 13.1C40.6 13.4 41.5 13.6 42.9 14.2C44.2 14.7 45.9 15.5 47.1 16.1C48.4 16.8 49.3 17.5 50.2 18.2C51.2 19 51.9 19.6 52.8 20.6C53.6 21.5 54.7 22.9 55.4 24.1C56 25.3 56.5 26.8 56.9 27.8C57.2 28.8 57.3 29.1 57.4 30.1C57.4 31.2 57.5 32.6 57.4 33.9C57.2 35.1 56.8 36.5 56.4 37.8C55.9 39 55.1 40.2 54.5 41.1C53.9 42.1 53.7 42.5 52.8 43.5C51.8 44.4 50.3 45.8 49 46.6C47.8 47.5 46.6 48.2 45.2 48.9C43.9 49.5 42.5 50 41 50.5C39.6 50.9 38.2 51.2 36.4 51.5C34.5 51.7 31.6 51.7 29.8 51.6C27.9 51.6 26.7 51.4 25.1 51C23.4 50.6 21.3 49.9 19.8 49.2C18.2 48.6 17.1 48 15.7 47C14.2 46.1 12.5 44.7 11.3 43.5C10.2 42.2 9.4 41.1 8.8 39.9C8.1 38.6 7.6 37.2 7.2 36.2C6.9 35.2 6.8 34.9 6.8 33.9C6.7 32.8 6.7 31 6.8 30.1C6.8 29.2 6.7 29.4 7 28.4C7.4 27.4 8 25.5 8.8 24.1C9.5 22.8 10.2 21.8 11.3 20.6C12.5 19.4 14.2 17.9 15.7 16.9C17.1 16 18.2 15.4 19.8 14.8C21.3 14.1 23.4 13.5 25.1 13.1C26.7 12.7 28.2 12.5 29.8 12.3ZM26.9 20.1C27.3 20.1 27.4 20.6 27.4 20.6L27.4 23.6C27.4 23.6 25.4 24 24.4 24.4C23.5 24.9 22.6 25.7 21.9 26.6C21.2 27.4 20.6 28.7 20.2 29.8C19.9 30.8 19.9 31.9 20.1 33C20.2 34.1 20.8 35.5 21.2 36.4C21.7 37.2 22.2 37.7 22.9 38.2C23.5 38.8 24.4 39.3 25.2 39.6C26.1 40 27.6 40.1 27.6 40.1L27.6 43.5C27.6 43.5 26.4 43.6 25.8 43.5C25.1 43.3 24.3 43.1 23.6 42.9C23 42.6 22.7 42.5 22.1 42C21.4 41.6 20.6 41.2 19.9 40.4C19.1 39.5 18 37.9 17.4 36.8C16.9 35.6 16.6 34.8 16.6 33.5C16.5 32.1 16.7 29.9 16.9 28.8C17 27.6 17.3 27.4 17.6 26.6C18 25.9 18.3 25.2 19.1 24.4C19.8 23.5 21.2 22.3 22.1 21.6C23.1 21 24 20.8 24.8 20.6C25.5 20.3 26.4 20.1 26.9 20.1ZM35.5 20.1C36.2 20 36.1 20.4 36.1 20.4L36.1 23.6C36.1 23.6 34.4 23.8 33.5 24.2C32.7 24.7 31.6 25.4 30.9 26.1C30.1 26.9 29.6 27.9 29.2 28.8C28.9 29.6 28.8 30.6 28.6 31.2C28.5 31.9 28.5 31.9 28.6 32.5C28.8 33.2 29 34.4 29.4 35.2C29.7 36.1 30.3 36.9 30.8 37.5C31.2 38 31.7 38.4 32.1 38.8C32.6 39.1 33 39.3 33.6 39.5C34.3 39.8 36.2 40.1 36.2 40.1L36.2 43.5C36.2 43.5 35.1 43.6 34.4 43.5C33.6 43.3 33 43.2 32 42.8C31.1 42.2 29.6 41.4 28.6 40.5C27.7 39.5 26.8 38.3 26.2 37C25.7 35.8 25.3 34.1 25.1 33C25 32 25.1 31.6 25.1 30.8C25.2 29.9 25.4 29.1 25.6 28.2C25.9 27.4 26.3 26.6 26.6 25.9C27 25.2 27.4 24.7 27.9 24.1C28.5 23.4 29.4 22.6 30.1 22.1C30.7 21.7 30.6 21.6 31.6 21.2C32.5 20.9 34.7 20.3 35.5 20.1ZM44.1 20.1C44.8 20 44.8 20.4 44.8 20.4L44.8 23.6C44.8 23.6 43.3 23.9 42.8 24.1C42.2 24.2 41.9 24.3 41.2 24.8C40.6 25.2 39.6 25.9 39 26.9C38.3 27.8 37.7 29.3 37.5 30.2C37.2 31.2 37.3 31.7 37.4 32.5C37.4 33.4 37.7 34.4 38 35.1C38.2 35.9 38.5 36.5 39.1 37.1C39.8 37.8 40.9 38.8 41.6 39.2C42.4 39.7 43 39.8 43.5 40C44.1 40.1 44.9 40 44.9 40L45 43.5C45 43.5 43.8 43.6 43 43.5C42.3 43.3 41.5 43 40.8 42.8C40 42.5 39.5 42.2 38.8 41.6C38 41.1 37.2 40.5 36.5 39.6C35.9 38.8 35.1 37.7 34.6 36.5C34.2 35.2 33.8 33.7 33.8 32.2C33.7 30.8 34.2 29 34.5 27.9C34.8 26.7 35.1 26.3 35.5 25.6C36 24.8 36.5 24.1 37 23.6C37.5 23 37.9 22.7 38.5 22.2C39.1 21.8 39.7 21.4 40.6 21.1C41.6 20.7 43.5 20.3 44.1 20.1Z"/>'
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
    svg: '<polygon stroke-width="2.4" points="32,12 57,32 32,52 7,32"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37.1 21.9C37.7 21.8 38.4 21.8 39 21.9C39.5 22.1 40 22.2 40.5 22.6C40.9 22.9 41.4 23.3 41.8 23.8C42.1 24.2 42.5 24.9 42.5 25.4C42.6 25.8 42.4 26.1 42.2 26.4C42.1 26.6 41.7 26.8 41.5 26.9C41.2 26.9 41 27 40.5 26.6C40.1 26.3 39 24.6 39 24.6C39 24.6 37.6 24.5 37.1 24.6C36.7 24.8 36.5 25.1 36.4 25.4C36.2 25.8 36.3 26.2 36.4 26.4C36.4 26.7 36.3 26.7 36.8 26.9C37.2 27 38.4 27.1 39 27.2C39.7 27.4 40.3 27.6 40.8 27.9C41.2 28.2 41.7 28.7 42 29.1C42.2 29.4 42.4 29.7 42.5 30.1C42.5 30.6 42.6 31.1 42.5 31.6C42.3 32.2 41.9 32.9 41.6 33.4C41.4 33.8 41.3 33.9 40.9 34.1C40.4 34.4 39.3 34.9 38.8 35C38.2 35.2 37.8 35.1 37.4 35C36.9 35 36.3 34.8 35.9 34.5C35.4 34.3 34.8 33.8 34.5 33.4C34.1 32.9 33.6 32.2 33.5 31.8C33.4 31.3 33.6 31 33.9 30.8C34.1 30.5 34.6 30.3 34.9 30.2C35.1 30.2 35.4 30.3 35.6 30.6C35.9 30.8 36.1 31.4 36.4 31.8C36.6 32.1 36.8 32.3 37.2 32.5C37.7 32.6 38.4 32.6 38.9 32.5C39.3 32.3 39.7 31.6 39.9 31.4C40 31.1 40 31.1 40 30.9C39.9 30.7 40.1 30.4 39.5 30.1C38.8 29.9 36.9 29.7 36.1 29.4C35.4 29.2 35.4 29.2 35 28.8C34.6 28.3 34 27.5 33.8 26.9C33.5 26.4 33.5 26.1 33.6 25.6C33.8 25 34 24.4 34.4 23.9C34.7 23.4 35.2 22.9 35.6 22.6C36.1 22.2 36.6 22.1 37.1 21.9Z"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.9 22.1C24.8 22 27.1 22 27.9 22.1C28.8 22.1 28.4 22.1 28.9 22.4C29.4 22.7 30.5 23.3 30.9 23.9C31.4 24.4 31.6 25 31.8 25.6C31.9 26.3 31.8 27.2 31.6 27.9C31.3 28.6 30.8 29.3 30.2 29.9C29.7 30.4 29.2 30.7 28.4 30.9C27.5 31.2 25.2 31.1 25.2 31.1C25.2 31.1 25.4 33.4 25.2 34C25.1 34.7 24.4 35 24.4 35L23.1 34.6C23.1 34.6 22.8 35.6 22.8 33.8C22.7 31.9 22.7 25.4 22.8 23.6C22.8 21.7 22.9 22.9 23.1 22.6C23.2 22.4 23.1 22.1 23.9 22.1ZM25.8 24.6C26.1 24.6 27 24.6 27.4 24.6C27.9 24.7 28.3 24.9 28.6 25.1C28.8 25.4 29.1 25.8 29.1 26.1C29.2 26.5 29.1 27.2 28.9 27.6C28.6 27.9 28.3 28.1 27.8 28.2C27.2 28.4 25.4 28.2 25.4 28.2L25.4 24.8C25.4 24.8 25.4 24.7 25.8 24.6Z"/><path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.1 35.8C30.1 35.7 33.6 35.6 34.6 35.8C35.7 35.9 35.5 36.5 35.5 36.5C35.5 36.5 35.6 37.3 35.5 37.5C35.3 37.8 35.6 38 34.8 38.1C33.9 38.3 30.2 38.4 30.2 38.4L30.4 39.9C30.4 39.9 33.8 39.8 34.6 39.9C35.5 40 35.3 40.2 35.5 40.5C35.6 40.7 35.6 41.2 35.6 41.2C35.6 41.2 35.5 42 34.6 42.2C33.8 42.5 30.2 42.5 30.2 42.5L30.4 43.8C30.4 43.8 33.8 43.7 34.6 43.8C35.5 43.8 35.1 43.8 35.2 44C35.4 44.3 35.6 45.1 35.6 45.1L35 46C35 46 30.3 46.2 29.1 46.1C28 46.1 28.4 45.7 28.1 45.5C27.9 45.2 27.9 46.2 27.9 44.9C27.8 43.5 27.8 38.5 27.9 37C27.9 35.6 28.1 36.5 28.2 36.2C28.4 36 28 35.8 29.1 35.8Z"/>'
  }
]);
