/* Clothing care labels, washing machines and tumble dryers.
 * Categories: laundry (ISO 3758 / GINETEX + US ASTM care symbols), washer, dryer.
 * See data/README.md for the format and drawing rules. */
(function () {
  // ---- Shared shapes, so every symbol family uses the same outline ----------

  // Washtub: sloped sides, flat bottom, wavy water line just below the rim.
  var TUB = '<path d="M7 15 L14 49 H50 L57 15"/><path d="M8.2 21 q5.95 -6 11.9 0 t11.9 0 t11.9 0 t11.9 0"/>';
  // Hand dipping into the tub from the top right: mitten with thumb + two finger lines.
  // The knock copy hides the water line behind the hand.
  var HAND_D = "M43 7 V36 A6 6 0 0 1 31 36 V26.8 L26.6 31.2 A2.75 2.75 0 0 1 22.8 27.4 L31 19.2 V7";
  var HANDWASH = TUB + '<g transform="rotate(25 37 20) translate(2,3)"><path class="knock" stroke-width="0" d="' + HAND_D +
    ' Z"/><path d="' + HAND_D + '"/><path d="M35 33 V41 M39 33 V41" stroke-width="2.25"/></g>';

  // Bleach triangle.
  var TRIANGLE = '<path d="M32 9 L58 54 H6 Z"/>';

  // Drying square (tumble + natural drying) and the tumble-dryer circle.
  var SQUARE = '<rect x="9" y="9" width="46" height="46" rx="2"/>';
  var TUMBLE = SQUARE + '<circle cx="32" cy="32" r="17"/>';

  // Small filled dot used for temperatures (tumble dry, ironing).
  function dot(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="3" fill="currentColor" stroke="none"/>'; }


  // Professional cleaning circle + letter.
  var CIRCLE = '<circle cx="32" cy="32" r="22"/>';
  function letter(l) { return CIRCLE + '<text x="32" y="41.5" font-size="26">' + l + "</text>"; }

  // "Don't" cross: two lines corner to corner.
  function cross(a, b, c, d) { return '<path d="M' + a + " " + b + " L" + c + " " + d + " M" + c + " " + b + " L" + a + " " + d + '"/>'; }

  // Spin spiral (four half-turns, opening outwards).
  var SPIRAL = '<path d="M36 34 A4 4 0 0 0 28 34 A8 8 0 0 0 44 34 A12 12 0 0 0 20 34 A16 16 0 0 0 52 34 A20 20 0 0 0 12 34"/>';

  // Padlock.
  var LOCK = '<rect x="15" y="28" width="34" height="26" rx="4"/><path d="M22 28 V20 A10 10 0 0 1 42 20 V28"/>';

  // T-shirt (centred on x = 31).
  var SHIRT = '<path d="M23 10 L9 18 L14 28 L19 25 V52 H43 V25 L48 28 L53 18 L39 10 C37 15 25 15 23 10 Z"/>';

  // Wardrobe / cupboard.
  var WARDROBE = '<rect x="14" y="7" width="36" height="45" rx="2"/><path d="M32 7 V52 M28 26 V33 M36 26 V33 M18 52 V57 M46 52 V57"/>';


  WTF.add([
    // =====================================================================
    // CLOTHING CARE LABELS
    // =====================================================================

    // ---- Washing ----------------------------------------------------------
    {
      id: "laundry-machine-wash",
      name: "Machine wash",
      category: "laundry",
      aka: ["washable", "machine wash normal", "washtub"],
      looksLike: ["bucket", "bucket with wavy line", "tub with water", "washtub", "cup with a wave", "bowl with wavy top"],
      meaning: "The washtub means it can go in the washing machine. On US labels, an empty tub means a normal machine wash at any temperature that suits the fabric.",
      action: "Use a normal cycle. If in doubt, 30–40 °C is the safe middle ground.",
      tip: "This is the base shape for every washing symbol. A number (Europe) or dots (US) inside give the maximum temperature, and lines underneath ask for a gentler cycle.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7C6 15.5 6.3 16.5 6.5 17.2C6.8 19.1 7 20.9 7.4 22.6C8.6 28.7 9.5 34.8 10.6 40.8C10.9 42.7 11.3 44.6 11.6 46.6C11.7 47.3 11.8 48.8 12.2 49.4L51.8 49.3C52.2 48.8 52.3 47.3 52.4 46.6C52.7 44.6 53 42.7 53.4 40.8C54.5 34.9 55.5 28.9 56.5 22.9C56.9 21 57.2 19.1 57.5 17.2C57.6 16.5 58 15.4 57.9 14.7C57.4 14.4 55.4 14.4 54.9 14.6C54.1 15.6 54.3 20 53.5 20.7C52.5 20.6 51.5 19 50.8 18.3C49.9 17.2 48.2 16.6 46.7 16.7C45.3 16.8 44.1 17.3 43 18.2C41.9 19.3 40.9 21.2 39 20.8C37.8 20.6 37 19.3 36.1 18.4C35.1 17.3 33.4 16.6 31.8 16.7C30.3 16.8 29 17.4 27.9 18.5C26.9 19.5 26 21 24.4 20.9C23.1 20.8 22.2 19.5 21.4 18.6C20.4 17.5 19 16.8 17.4 16.7C15.8 16.6 14.2 17.3 13.1 18.5C12.5 19.2 11.3 20.8 10.4 20.7C9.6 19.7 9.8 15.5 9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53 23.9C53.2 24.6 52.4 28.2 52.2 29.2C51.6 33.2 50.9 37.3 50.1 41.3C49.9 42.2 49.6 45.6 49.1 46.2L14.8 46.2C14.4 45.6 13.9 41.8 13.8 40.8C13.1 37 12.5 33.2 11.8 29.4C11.6 28.4 10.8 24.7 10.9 24C11.5 23.6 12.3 23.4 12.9 22.9C14.2 21.9 15.9 19.3 17.7 19.7C19.1 20.1 19.9 21.5 20.8 22.4C21.9 23.5 23.5 24.1 25.1 23.9C26.5 23.8 27.9 23.1 28.8 22C29.6 21.2 30.4 20 31.6 19.7C34 19.3 35.5 23.5 38.7 23.9C40.6 24.2 42.1 23.4 43.5 22.1C44.5 21.3 45.4 19.8 46.7 19.7C48.4 19.6 49.8 21.7 51 22.7C51.6 23.3 52.4 23.5 53 23.9Z"/>'
    },
    {
      id: "laundry-wash-30",
      name: "Wash at 30 °C",
      category: "laundry",
      aka: ["cold wash", "30 degrees", "machine wash cold", "85 °F"],
      looksLike: ["bucket with 30", "tub with 30", "bucket with a number", "bucket with one dot", "tub with a dot", "30 in a bucket"],
      meaning: "Machine wash at no more than 30 °C (86 °F). It's an upper limit: cooler is fine, but hotter risks shrinking, fading or warping.",
      action: "Pick a 30° or cold cycle. Ideal for darks, bright colours and anything you're a bit nervous about.",
      tip: "US labels count dots instead: 1 dot = 30 °C (cold), 2 = 40 °C, 3 = 50 °C, 4 = 60 °C, 5 = 70 °C, 6 = 95 °C. One dot in the tub means the same as this.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7C6 15.4 6.3 16.5 6.5 17.3C6.8 19.1 7 20.9 7.4 22.6C8.6 28.7 9.4 34.8 10.6 40.8C11 42.7 11.3 44.7 11.6 46.6C11.7 47.3 11.8 48.8 12.2 49.4L51.8 49.3C52.2 48.7 52.3 47.3 52.4 46.6C52.7 44.7 53 42.8 53.4 40.9C54.5 34.7 55.6 28.4 56.6 22.2C56.9 20.5 57.2 18.9 57.5 17.2C57.7 16.5 58 15.4 57.9 14.7C57.4 14.4 55.4 14.4 54.9 14.6C54.1 15.6 54.3 20 53.5 20.7C52.5 20.6 51.5 19 50.8 18.3C49.9 17.2 48.1 16.6 46.7 16.7C45.3 16.8 43.8 17.4 42.8 18.5C41.9 19.5 40.8 21.1 39.1 20.9C37.8 20.6 37 19.4 36.1 18.4C35.1 17.3 33.4 16.6 31.8 16.7C30.4 16.8 29.2 17.4 28.1 18.4C27 19.4 26.2 21 24.4 20.9C22.9 20.8 22.1 19.2 21.2 18.3C20.1 17.4 18.9 16.8 17.4 16.7C15.8 16.6 14.2 17.4 13.1 18.5C12.5 19.2 11.3 20.8 10.4 20.7C9.6 19.7 9.8 15.5 9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53 23.9C53.2 24.6 52.4 28.1 52.3 29C51.6 33 50.9 37 50.2 41C50 42 49.5 45.7 49.1 46.3L14.8 46.2C14.4 45.6 14 41.9 13.8 40.9C13.1 36.9 12.4 32.8 11.7 28.8C11.5 27.9 10.8 24.7 10.9 24C11.5 23.6 12.3 23.4 12.8 23C14.1 22 15.8 19.4 17.6 19.7C19.1 20 19.8 21.5 20.8 22.4C22 23.5 23.5 24.1 25.1 23.9C26.5 23.8 27.9 23.1 28.8 22C29.7 21.1 30.5 19.9 31.8 19.7C33 19.5 33.9 20.6 34.7 21.4C35.8 22.5 37.1 23.8 38.8 23.9C41 24.1 42.2 23.3 43.8 21.9C44.7 21.1 45.4 19.8 46.7 19.7C48.4 19.6 49.9 21.8 51.1 22.8C51.7 23.3 52.4 23.5 53 23.9ZM22.6 32.8C23 33.1 23.9 33 24.3 32.9C24.9 32.2 24.6 31.2 25.8 30.6C27.4 29.8 29.4 31.4 28.5 33.1C28 34.2 26.9 33.9 25.9 34.3L25.9 35.6C26.8 36.1 28 35.5 28.8 36.7C30.2 38.5 28.2 40.6 26.3 40.2C25.4 40.1 24.7 39.4 24.4 38.5C24.3 38.2 24.3 37.9 24.1 37.6C23.7 37.5 22.7 37.4 22.3 37.7C21.7 39.1 23.3 41.1 24.5 41.6C27.5 43 31.9 41.1 31.3 37.5C31.2 36.6 30.8 35.8 30.1 35.3C29.8 35.1 29.5 35.1 29.4 34.8C29.9 34.1 30.5 33.8 30.7 32.9C31.4 29.4 27.3 27.6 24.5 29.1C23.5 29.7 22.2 31.6 22.6 32.8ZM37 28.6C33.3 28.9 32.7 32.5 32.7 35.5C32.8 38.5 33.7 42.3 37.5 42C41.1 41.8 41.7 38.1 41.7 35.1C41.7 32.1 40.7 28.3 37 28.6ZM36.9 30.4C39.4 30.1 39.5 33.4 39.6 35C39.7 36.5 39.5 39.9 37.5 40.2C35.1 40.7 34.8 37.2 34.8 35.6C34.8 34 34.9 30.7 36.9 30.4Z"/>'
    },
    {
      id: "laundry-wash-40",
      name: "Wash at 40 °C",
      category: "laundry",
      aka: ["warm wash", "40 degrees", "machine wash warm", "105 °F"],
      looksLike: ["bucket with 40", "tub with 40", "bucket with a number", "bucket with two dots", "tub with 2 dots", "40 in a bucket"],
      meaning: "Machine wash at no more than 40 °C (104 °F). It's the everyday setting for most cottons, mixed fabrics and coloured clothes.",
      action: "Use a normal 40° cycle. Going cooler is always allowed.",
      tip: "On US labels, two dots in the tub means the same as 40 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60 °C).",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7C6 15.4 6.3 16.5 6.5 17.3C6.8 19.1 7 20.9 7.4 22.6C8.6 28.7 9.4 34.8 10.6 40.8C11 42.7 11.3 44.7 11.6 46.6C11.7 47.3 11.8 48.8 12.2 49.4L51.8 49.3C52.2 48.7 52.3 47.3 52.4 46.6C52.7 44.7 53 42.8 53.4 40.9C54.5 34.7 55.6 28.4 56.6 22.2C56.9 20.5 57.2 18.9 57.5 17.2C57.7 16.5 58 15.4 57.9 14.7C57.4 14.4 55.4 14.4 54.9 14.6C54.1 15.6 54.3 20 53.5 20.7C52.5 20.6 51.5 19 50.8 18.3C49.9 17.2 48.1 16.6 46.7 16.7C45.3 16.8 43.8 17.4 42.8 18.5C41.9 19.5 40.8 21.1 39.1 20.9C37.8 20.6 37 19.4 36.1 18.4C35.1 17.3 33.4 16.6 31.8 16.7C30.4 16.8 29.2 17.4 28.1 18.4C27 19.4 26.2 21 24.4 20.9C22.9 20.8 22.1 19.2 21.2 18.3C20.1 17.4 18.9 16.8 17.4 16.7C15.8 16.6 14.2 17.4 13.1 18.5C12.5 19.2 11.3 20.8 10.4 20.7C9.6 19.7 9.8 15.5 9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53 23.9C53.2 24.6 52.4 28.1 52.3 29C51.6 33 50.9 37 50.2 41C50 42 49.5 45.7 49.1 46.3L14.8 46.2C14.4 45.6 14 41.9 13.8 40.9C13.1 36.9 12.4 32.8 11.7 28.8C11.5 27.9 10.8 24.7 10.9 24C11.5 23.6 12.3 23.4 12.8 23C14.1 22 15.8 19.4 17.6 19.7C19.1 20 19.8 21.5 20.8 22.4C22 23.5 23.5 24.1 25.1 23.9C26.5 23.8 27.9 23.1 28.8 22C29.7 21.1 30.5 19.9 31.8 19.7C33 19.5 33.9 20.6 34.7 21.4C35.8 22.5 37.1 23.8 38.8 23.9C41 24.1 42.2 23.3 43.8 21.9C44.7 21.1 45.4 19.8 46.7 19.7C48.4 19.6 49.9 21.8 51.1 22.8C51.7 23.3 52.4 23.5 53 23.9ZM37 28.6C33.3 28.9 32.7 32.5 32.7 35.5C32.8 38.5 33.7 42.3 37.5 42C41.1 41.8 41.7 38.1 41.7 35.1C41.7 32.1 40.7 28.3 37 28.6ZM22.2 38.6L27.5 38.8L27.7 41.6C28.1 41.9 29.1 41.9 29.5 41.7L29.8 38.8L31.2 38.6C31.4 38.2 31.4 37.5 31.1 37.1L29.8 36.9C29.5 36.2 29.6 32.1 29.6 31.1C29.6 30.4 29.8 29.5 29.5 28.9C29 28.8 28 28.7 27.6 29C27.1 29.3 26.4 30.6 26 31.2C25.1 32.3 24.3 33.5 23.5 34.7C23.1 35.2 22.6 35.8 22.2 36.4C21.9 36.9 21.9 38.2 22.2 38.6ZM36.9 30.4C39.4 30.1 39.5 33.4 39.6 35C39.7 36.5 39.5 39.9 37.5 40.2C35.1 40.7 34.8 37.2 34.8 35.6C34.8 34 34.9 30.7 36.9 30.4ZM27.5 31.9C27.7 32.3 27.7 36.6 27.5 37C26.9 37.1 24.3 37.2 23.9 36.9C24.1 36.1 26 33.8 26.5 33C26.8 32.6 27.1 32 27.5 31.9Z"/>'
    },
    {
      id: "laundry-wash-60",
      name: "Wash at 60 °C",
      category: "laundry",
      aka: ["hot wash", "60 degrees", "machine wash hot", "140 °F"],
      looksLike: ["bucket with 60", "tub with 60", "bucket with a number", "bucket with four dots", "tub with 4 dots", "60 in a bucket"],
      meaning: "Machine wash at up to 60 °C (140 °F). You'll see it on towels, bedding, underwear and sturdy whites, since it's hot enough to kill most germs and dust mites.",
      action: "Use a 60° cotton cycle for hygiene loads. For lightly worn things 40 °C is fine: the label is giving permission, not orders.",
      tip: "On US labels, four dots in the tub means the same as 60 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60 °C).",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7C6 15.4 6.3 16.5 6.5 17.3C6.8 19.1 7 20.9 7.4 22.6C8.6 28.7 9.4 34.8 10.6 40.8C11 42.7 11.3 44.7 11.6 46.6C11.7 47.3 11.8 48.8 12.2 49.4L51.8 49.3C52.2 48.7 52.3 47.3 52.4 46.6C52.7 44.7 53 42.8 53.4 40.9C54.5 34.7 55.6 28.4 56.6 22.2C56.9 20.5 57.2 18.9 57.5 17.2C57.7 16.5 58 15.4 57.9 14.7C57.4 14.4 55.4 14.4 54.9 14.6C54.1 15.6 54.3 20 53.5 20.7C52.5 20.6 51.5 19 50.8 18.3C49.9 17.2 48.1 16.6 46.7 16.7C45.3 16.8 43.8 17.4 42.8 18.5C41.9 19.5 40.8 21.1 39.1 20.9C37.8 20.6 37 19.4 36.1 18.4C35.1 17.3 33.4 16.6 31.8 16.7C30.4 16.8 29.2 17.4 28.1 18.4C27 19.4 26.2 21 24.4 20.9C22.9 20.8 22.1 19.2 21.2 18.3C20.1 17.4 18.9 16.8 17.4 16.7C15.8 16.6 14.2 17.4 13.1 18.5C12.5 19.2 11.3 20.8 10.4 20.7C9.6 19.7 9.8 15.5 9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53 23.9C53.2 24.6 52.4 28.1 52.3 29C51.6 33 50.9 37 50.2 41C50 42 49.5 45.7 49.1 46.3L14.8 46.2C14.4 45.6 14 41.9 13.8 40.9C13.1 36.9 12.4 32.8 11.7 28.8C11.5 27.9 10.8 24.7 10.9 24C11.5 23.6 12.3 23.4 12.8 23C14.1 22 15.8 19.4 17.6 19.7C19.1 20 19.8 21.5 20.8 22.4C22 23.5 23.5 24.1 25.1 23.9C26.5 23.8 27.9 23.1 28.8 22C29.7 21.1 30.5 19.9 31.8 19.7C33 19.5 33.9 20.6 34.7 21.4C35.8 22.5 37.1 23.8 38.8 23.9C41 24.1 42.2 23.3 43.8 21.9C44.7 21.1 45.4 19.8 46.7 19.7C48.4 19.6 49.9 21.8 51.1 22.8C51.7 23.3 52.4 23.5 53 23.9ZM24.6 34.3C24.4 34 24.5 33.5 24.6 33.2C24.9 31.9 25.5 30.4 27.1 30.4C28.7 30.3 28.4 31.3 29.1 32L30.9 32C31 31.6 30.9 31.1 30.7 30.7C29.9 28.9 27.5 28.2 25.7 28.8C21.5 30.1 21.1 39 24.3 41.3C24.9 41.7 25.6 41.9 26.2 42C32.3 42.8 33.2 33.7 27.3 33.3C25.8 33.2 25.7 33.9 24.6 34.3ZM37 28.6C33.3 28.9 32.7 32.5 32.7 35.5C32.8 38.5 33.7 42.3 37.5 42C41.1 41.8 41.7 38.1 41.7 35.1C41.7 32.1 40.7 28.3 37 28.6ZM36.9 30.4C39.4 30.1 39.5 33.4 39.6 35C39.7 36.5 39.5 39.9 37.5 40.2C35.1 40.7 34.8 37.2 34.8 35.6C34.8 34 34.9 30.7 36.9 30.4ZM26.8 35C28.2 34.9 29.1 36.1 29.1 37.4C29.2 38.8 28.4 40.2 27 40.3C25.6 40.4 24.6 39 24.6 37.8C24.6 36.4 25.2 35.1 26.8 35Z"/>'
    },
    {
      id: "laundry-wash-95",
      name: "Wash at 95 °C",
      category: "laundry",
      aka: ["boil wash", "very hot wash", "95 degrees", "200 °F"],
      looksLike: ["bucket with 95", "tub with 95", "bucket with a number", "bucket with six dots", "tub with 6 dots", "95 in a bucket"],
      meaning: "It can be washed at up to 95 °C (around 200 °F), which is practically boiling. Only the toughest white cottons and linens are up to it, such as tea towels, cloths and some bedding.",
      action: "Use the hottest cotton cycle for really grubby or hygiene-critical items. For everyday dirt, 60 °C is plenty.",
      tip: "On US labels, six dots in the tub means the same as 95 (1 dot = 30, 2 = 40, 3 = 50, 4 = 60, 5 = 70, 6 = 95 °C).",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7L12.2 49.3L51.8 49.4C52.2 48.9 52.2 47.8 52.3 47.1C52.6 45.5 52.9 43.8 53.2 42.2C53.8 39 54.2 35.7 54.9 32.5C55.5 29.3 56.1 25.9 56.6 22.6C56.9 20.7 57.2 18.8 57.6 16.9C57.7 16.3 58.1 15.2 57.8 14.6L54.9 14.6L53.6 20.6C52.9 20.8 52.1 19.7 51.7 19.2C50.6 18.1 49.6 17 48 16.8C46.2 16.4 44.3 17 43 18.4C42 19.3 41.2 20.8 39.7 20.9C37.9 21 37 19.2 35.9 18.2C34.8 17.2 33.4 16.7 31.9 16.7C30.5 16.7 29 17.4 28 18.4C27 19.5 26.1 20.9 24.5 20.9C22.9 20.8 22.1 19.1 21.1 18.2C19.7 17 18 16.5 16.1 16.8C14.5 17 13.5 18.1 12.4 19.3C11.9 19.8 11.2 20.8 10.4 20.7C9.6 19.6 9.8 15.6 9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53 23.9C53.2 24.6 52.4 28.1 52.3 29C51.6 33 50.9 37 50.2 41C50 42 49.5 45.8 49.1 46.3L14.8 46.2C14.4 45.6 14 41.9 13.8 40.9C13 36.9 12.3 32.8 11.7 28.8C11.5 27.9 10.8 24.7 10.9 24C11.5 23.6 12.2 23.4 12.8 23C14.1 22 15.8 19.4 17.6 19.7C19 20 19.7 21.3 20.6 22.3C21.9 23.5 23.6 24.1 25.3 23.9C26.7 23.8 28 23 28.8 22C29.8 21 30.8 19.4 32.5 19.7C34.6 20.2 35.6 23.6 38.8 23.9C40.9 24.1 42.4 23.2 43.8 21.9C44.7 21.1 45.5 19.8 46.7 19.7C48.5 19.6 49.9 21.8 51.1 22.8C51.7 23.3 52.5 23.5 53 23.9ZM29 36.3C29.2 36.7 29.1 37.2 29 37.6C28.8 39 28 40.2 26.5 40.3C24.9 40.3 25.1 39.3 24.4 38.6L22.7 38.6C22.4 39.2 22.8 40 23.1 40.5C24.1 41.9 26 42.3 27.6 41.9C32 40.9 32.5 31.7 29.2 29.3C28.6 28.9 28 28.7 27.2 28.6C21.1 27.9 20.5 37 26 37.4C26.8 37.5 27.6 37.3 28.2 36.9C28.5 36.7 28.7 36.4 29 36.3ZM34.4 29C33.9 29.9 33.6 32.8 33.3 34C33.2 34.5 32.9 35.3 33.1 35.8C33.5 36 34.6 36.1 35 35.9C35.2 35.7 35.4 35.4 35.6 35.2C36.3 34.6 37.5 34.6 38.3 35C40.3 36 40.1 40 37.4 40.2C36.9 40.3 36.3 40.2 35.9 40C35.1 39.5 35.1 38.9 34.7 38.2C34.2 38.1 33.3 38 32.8 38.3C32.7 38.8 32.9 39.3 33 39.7C33.9 41.9 37.1 42.6 39.1 41.7C42 40.4 42.8 35.5 39.9 33.7C39 33.1 37.6 32.9 36.5 33.3C36.1 33.4 35.8 33.6 35.5 33.7C35.3 33.3 35.7 31.3 36 30.9L41 30.6L41 29C40.5 28.7 39.8 28.8 39.3 28.8C38.4 28.8 35 28.6 34.4 29ZM26.5 30.4C27.9 30.3 29 31.5 29 32.9C29 34.2 28.3 35.6 26.8 35.7C25.3 35.8 24.5 34.5 24.4 33.2C24.3 31.8 25 30.5 26.5 30.4Z"/>'
    },
    {
      id: "laundry-wash-gentle",
      name: "Gentle wash (one line underneath)",
      category: "laundry",
      aka: ["permanent press", "synthetics cycle", "easy care", "mild wash"],
      looksLike: ["bucket with a line under it", "bucket with one line", "underlined bucket", "tub with underline", "bucket with 40 and a line"],
      meaning: "One line under the tub means a gentler machine cycle, with less agitation and a slower spin, like the 'synthetics', 'easy care' or 'permanent press' programme. The number still gives the maximum temperature.",
      action: "Choose the synthetics, easy-care or permanent press programme at or below the temperature shown, and don't overload the drum.",
      tip: "Underlining usually means 'important'. Here it means 'calm down': no line = normal, one = gentle, two = very gentle. It works the same under dry-cleaning circles (and under tumble-dry symbols on US labels).",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 11.5C6 12.3 6.3 13.3 6.5 14.1C6.8 15.9 7 17.7 7.4 19.5C8.6 25.5 9.4 31.7 10.6 37.7C11 39.6 11.3 41.5 11.6 43.4C11.7 44.2 11.8 45.6 12.2 46.2L51.8 46.2C52.2 45.6 52.3 44.2 52.4 43.4C52.7 41.5 53 39.7 53.4 37.8C54.5 31.5 55.6 25.3 56.6 19C56.9 17.4 57.2 15.7 57.5 14.1C57.7 13.3 58 12.3 57.9 11.5C57.4 11.3 55.4 11.3 54.9 11.5C54.1 12.4 54.3 16.9 53.5 17.6C52.5 17.4 51.5 15.8 50.8 15.1C49.9 14 48.1 13.4 46.7 13.5C45.3 13.6 43.8 14.2 42.8 15.3C41.9 16.4 40.8 18 39.1 17.7C37.8 17.5 37 16.2 36.1 15.3C35.1 14.2 33.4 13.4 31.8 13.5C30.4 13.6 29.2 14.2 28.1 15.2C27 16.2 26.2 17.9 24.4 17.7C22.9 17.6 22.1 16.1 21.2 15.2C20.1 14.2 18.9 13.6 17.4 13.5C15.8 13.4 14.2 14.2 13.1 15.4C12.5 16 11.3 17.7 10.4 17.6C9.6 16.6 9.8 12.4 9.1 11.5C8.5 11.3 6.6 11.3 6.1 11.5ZM53 20.8C53.2 21.4 52.4 24.9 52.3 25.8C51.6 29.9 50.9 33.9 50.2 37.9C50 38.8 49.5 42.6 49.1 43.1L14.8 43.1C14.4 42.4 14 38.8 13.8 37.7C13.1 33.7 12.4 29.7 11.7 25.7C11.5 24.7 10.8 21.6 10.9 20.9C11.5 20.4 12.3 20.3 12.8 19.9C14.1 18.9 15.8 16.2 17.6 16.6C19.1 16.8 19.8 18.3 20.8 19.3C22 20.4 23.5 20.9 25.1 20.8C26.5 20.7 27.9 19.9 28.8 18.9C29.7 18 30.5 16.7 31.8 16.6C33 16.4 33.9 17.4 34.7 18.2C35.8 19.4 37.1 20.6 38.8 20.8C41 21 42.2 20.1 43.8 18.7C44.7 17.9 45.4 16.6 46.7 16.6C48.4 16.4 49.9 18.7 51.1 19.7C51.7 20.2 52.4 20.3 53 20.8ZM37 25.4C33.3 25.7 32.7 29.4 32.7 32.4C32.8 35.3 33.7 39.2 37.5 38.9C41.1 38.6 41.7 34.9 41.7 32C41.7 29 40.7 25.1 37 25.4ZM22.2 35.5L27.5 35.7L27.7 38.5C28.1 38.8 29.1 38.8 29.5 38.5L29.8 35.7L31.2 35.5C31.4 35.1 31.4 34.4 31.1 34L29.8 33.8C29.5 33 29.6 29 29.6 27.9C29.6 27.3 29.8 26.3 29.5 25.8C29 25.7 28 25.6 27.6 25.8C27.1 26.2 26.4 27.5 26 28C25.1 29.2 24.3 30.4 23.5 31.5C23.1 32.1 22.6 32.7 22.2 33.3C21.9 33.8 21.9 35 22.2 35.5ZM36.9 27.2C39.4 26.9 39.5 30.2 39.6 31.8C39.7 33.4 39.5 36.7 37.5 37.1C35.1 37.5 34.8 34.1 34.8 32.5C34.8 30.9 34.9 27.5 36.9 27.2ZM27.5 28.7C27.7 29.2 27.7 33.4 27.5 33.8C26.9 34 24.3 34 23.9 33.7C24.1 33 26 30.6 26.5 29.8C26.8 29.5 27.1 28.8 27.5 28.7ZM12.2 49.6L12.2 52.5C12.8 52.8 14 52.6 14.7 52.6C16.7 52.6 18.7 52.6 20.7 52.6C27.9 52.6 35.2 52.6 42.5 52.6C44.6 52.6 46.9 52.6 49.1 52.6C49.8 52.6 51.2 52.8 51.8 52.5L51.8 49.6C51.1 49.3 50 49.5 49.3 49.5C47.3 49.5 45.3 49.5 43.3 49.5C36 49.5 28.8 49.5 21.5 49.5C19.3 49.5 17.1 49.5 14.9 49.5C14.2 49.5 12.8 49.3 12.2 49.6Z"/>'
    },
    {
      id: "laundry-wash-very-gentle",
      name: "Very gentle wash (two lines underneath)",
      category: "laundry",
      aka: ["delicate cycle", "wool cycle", "delicates", "very mild wash"],
      looksLike: ["bucket with two lines under it", "bucket with two lines", "double underlined bucket", "tub with two lines", "bucket with 30 and two lines"],
      meaning: "Two lines under the tub mean a very gentle machine wash, with minimal agitation and a low spin, as on a 'wool', 'delicates' or 'silk' programme. Stick to the temperature in the tub.",
      action: "Use the wool or delicates programme, wash a small load, and consider a mesh laundry bag.",
      tip: "Two lines is as gentle as machine washing gets. One step further is the hand-wash symbol: a hand in the tub.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 8.4L12.2 43.1L51.8 43.1C52.2 42.5 52.2 41.3 52.3 40.6C52.7 38.5 53 36.5 53.4 34.5C54.6 28.4 55.4 22.3 56.6 16.3C56.9 14.5 57.2 12.6 57.5 10.8C57.7 10 58 9.2 57.9 8.4C57.5 8.1 55.3 8.2 54.9 8.4C54.2 9.6 54.3 13.6 53.6 14.4C52.6 14.4 51.5 12.7 50.9 12C49.9 10.9 48.2 10.2 46.7 10.3C45.2 10.4 43.8 11.1 42.8 12.2C41.8 13.3 40.7 15 39 14.5C36.4 13.9 35.9 10 31.8 10.3C30.4 10.4 29.1 11 28.1 12C27 13.1 26.1 14.8 24.4 14.6C22.8 14.5 22.1 12.8 21.1 11.9C19.7 10.7 18 10.1 16.2 10.4C14.6 10.7 13.5 11.8 12.4 13C11.9 13.5 11.2 14.5 10.4 14.4C9.6 13.4 9.8 9.2 9.1 8.3C8.5 8.2 6.6 8.1 6.1 8.4ZM53 17.7C53.2 18.3 52.4 21.8 52.3 22.7C51.6 26.7 50.9 30.8 50.2 34.8C50 35.7 49.5 39.5 49.1 40L14.8 40C14.4 39.3 14 35.6 13.8 34.6C13.1 30.6 12.4 26.6 11.7 22.5C11.5 21.6 10.8 18.5 10.9 17.7C11.5 17.3 12.3 17.2 12.8 16.7C14.1 15.8 15.8 13.1 17.6 13.4C19.1 13.7 19.8 15.2 20.8 16.1C22 17.2 23.5 17.8 25.1 17.7C26.5 17.6 27.9 16.8 28.8 15.8C29.7 14.8 30.5 13.6 31.8 13.4C33 13.3 33.9 14.3 34.7 15.1C35.8 16.3 37.1 17.5 38.8 17.7C41 17.9 42.2 17 43.8 15.6C44.7 14.8 45.4 13.5 46.7 13.4C48.4 13.3 49.9 15.6 51.1 16.6C51.7 17 52.4 17.2 53 17.7ZM22.6 26.6C23 26.8 23.9 26.8 24.3 26.6C24.9 25.9 24.6 24.9 25.8 24.3C27.4 23.5 29.4 25.1 28.5 26.9C28 28 26.9 27.6 25.9 28.1L25.9 29.3C26.8 29.9 28 29.2 28.8 30.4C30.2 32.2 28.2 34.3 26.3 34C25.4 33.8 24.7 33.2 24.4 32.3C24.3 32 24.3 31.7 24.1 31.4C23.7 31.2 22.7 31.2 22.3 31.4C21.7 32.8 23.3 34.8 24.5 35.4C27.5 36.7 31.9 34.8 31.3 31.2C31.2 30.4 30.8 29.6 30.1 29.1C29.8 28.9 29.5 28.8 29.4 28.5C29.9 27.8 30.5 27.5 30.7 26.6C31.4 23.1 27.3 21.3 24.5 22.9C23.5 23.4 22.2 25.3 22.6 26.6ZM37 22.3C33.3 22.6 32.7 26.2 32.7 29.2C32.8 32.2 33.7 36 37.5 35.8C41.1 35.5 41.7 31.8 41.7 28.8C41.7 25.8 40.7 22 37 22.3ZM36.9 24.1C39.4 23.8 39.5 27.1 39.6 28.7C39.7 30.3 39.5 33.6 37.5 34C35.1 34.4 34.8 30.9 34.8 29.3C34.8 27.8 34.9 24.4 36.9 24.1ZM12.2 46.5L12.2 49.3C12.8 49.7 14 49.5 14.7 49.5C16.7 49.5 18.7 49.5 20.7 49.5C27.9 49.5 35.2 49.5 42.5 49.5C44.6 49.5 46.9 49.5 49.1 49.5C49.8 49.5 51.2 49.6 51.8 49.3L51.8 46.5C51.1 46.1 50 46.4 49.3 46.4C47.3 46.4 45.3 46.4 43.3 46.4C36 46.4 28.8 46.4 21.5 46.4C19.3 46.4 17.1 46.4 14.9 46.4C14.2 46.4 12.8 46.2 12.2 46.5ZM12.2 52.8L12.2 55.6C12.8 55.9 14 55.7 14.7 55.7C16.7 55.7 18.7 55.7 20.7 55.7C27.9 55.7 35.2 55.7 42.5 55.7C44.6 55.7 46.9 55.7 49.1 55.7C49.8 55.7 51.2 55.9 51.8 55.6L51.8 52.7C51.1 52.4 50 52.6 49.3 52.6C47.3 52.6 45.3 52.6 43.3 52.6C36 52.6 28.8 52.6 21.5 52.6C19.3 52.6 17.1 52.6 14.9 52.6C14.2 52.6 12.8 52.4 12.2 52.8Z"/>'
    },
    {
      id: "laundry-hand-wash",
      name: "Hand wash only",
      category: "laundry",
      aka: ["hand wash", "wash by hand", "no machine wash"],
      looksLike: ["bucket with a hand", "hand in a bucket", "hand in water", "hand dipping into a tub", "tub with hand"],
      meaning: "Wash by hand only, in water no hotter than 40 °C (104 °F). Keep it out of a normal machine cycle.",
      action: "Use lukewarm water and a little gentle detergent. Squeeze rather than rub or wring, rinse, then press the water out in a towel.",
      tip: "Many modern machines have a hand-wash or wool programme that's gentle enough. Check your machine's manual before trusting it with your favourite jumper.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.9 20.6C21.3 20.4 20.8 19.6 20.2 19.3C18.8 18.4 17.1 18.1 15.5 18.6C14.1 19 13.2 20.1 12.3 21.1C11.8 21.6 11.1 22.5 10.4 22.4L9.1 16.3L6.1 16.3C5.9 17 6.3 17.9 6.4 18.6C6.7 20.4 7 22.1 7.3 23.9C8.5 30.2 9.5 36.6 10.7 42.9C11 44.8 11.3 46.8 11.7 48.7C11.8 49.4 11.8 50.5 12.2 51.1L51.8 51L57.9 16.4C57.5 16.1 55.3 16.1 54.9 16.3L53.6 22.4C52.9 22.4 52.2 21.5 51.8 21C50.8 19.9 49.9 18.9 48.3 18.5C46.9 18.2 45.1 18.3 43.9 19.3C43.3 19.8 42.4 20.9 41.8 21.2C41.4 20.7 41.4 19.2 41.2 18.5C40.8 16.8 40 15.3 38.6 14.2C38.1 13.8 37.3 13.1 36.6 13.2C36.5 13.6 36.4 14.3 36.6 14.6C36.8 15 37.4 15.3 37.7 15.6C38.5 16.2 39.1 17.2 39.5 18.2C40.2 19.9 40 21.7 40 23.5C40 26.5 40 29.5 40 32.5C40 33.5 40.2 35.6 39.9 36.5C39.9 36.7 39.7 36.8 39.5 37C38.3 37.1 38.4 35.7 38.4 34.9C38.4 33.6 38.6 28.7 38.3 27.9C37.9 27.7 37.4 27.7 37 27.9C36.7 28.8 36.9 30.2 36.9 31.1C36.9 33.5 36.9 35.9 36.9 38.2C36.9 39.2 37.2 41.4 36.2 41.8C35 41.7 35.3 39.3 35.3 38.4C35.3 36 35.3 33.5 35.3 31C35.3 30.2 35.5 28.6 35.2 27.9C34.8 27.7 34.2 27.7 33.8 27.9C33.5 28.7 33.7 30.5 33.7 31.4C33.7 34 33.7 36.7 33.7 39.3C33.7 40.3 34 42.8 33.1 43.2C31.7 43.4 32.1 40.6 32.1 39.7C32.1 36.9 32.1 34.2 32.1 31.5C32.1 30.6 32.3 28.7 32 27.9C31.7 27.7 31.1 27.7 30.7 27.9C30.4 28.9 30.6 30.2 30.6 31.2C30.6 33.4 30.6 35.7 30.6 38C30.6 38.9 30.9 41 30.3 41.6L29.6 41.7C28.7 41.3 29 39 29 38.1C29 35.9 29 33.6 29 31.3C29 30.3 29.2 28.9 28.9 27.9C28.5 27.7 27.9 27.7 27.6 27.9C27.2 28.6 27.4 30.6 27.4 31.5C27.4 33.9 27.4 36.2 27.4 38.6C27.4 39.7 27.2 41.1 27.8 42.1C28.4 43.4 29.4 43.3 30.6 43.3C31 43.6 31.1 44.2 31.6 44.5C32.4 45.1 33.9 45 34.6 44.2C34.8 44 35 43.6 35.2 43.4C35.8 43.2 36.4 43.5 37.1 43.2C38.9 42.4 38 40 38.5 38.7C39.3 38.3 40 38.9 40.9 38C41.8 37.1 41.6 35.6 41.6 34.5C41.6 32.4 41.6 30.2 41.6 28.1C41.6 27.5 41.4 26 41.7 25.4C41.8 25.2 43.3 24 43.6 23.8C44.5 22.9 45.4 21.6 46.8 21.4C48.2 21.2 49.4 22.8 50.2 23.7C50.7 24.2 51.2 24.6 51.7 24.9C52.1 25.2 52.7 25.3 53.1 25.7L49.2 47.9C48.5 48.2 47.4 48 46.7 48C44.8 48 42.9 48 40.9 48C34.7 48 28.5 48 22.3 48C20.6 48 18.9 48 17.2 48C16.5 48 15.4 48.2 14.8 47.9C14.4 47.3 14 43.8 13.8 42.8C13.2 39 12.6 35.1 11.8 31.3C11.6 30.4 10.8 26.3 10.9 25.7C11.5 25.2 12.3 25.1 12.9 24.6C14.1 23.6 15.7 21.2 17.4 21.4C18.6 21.5 19.5 22.7 20.3 23.5C20.7 23.8 21.9 24.8 22 25.2C22.1 25.7 22 26.2 22 26.7C22 28.3 21.8 32.1 22.2 33.4C22.9 35.1 25.4 35.5 26.3 33.8C27 32.5 26.7 28.5 26.7 26.9C26.7 26.4 26.6 25.7 26.8 25.2C27.2 24.9 27.6 24.8 28.1 24.7C28.7 24.5 30.1 23.8 30.5 23.2C30.7 22.8 30.6 21.9 30.5 21.5C30 21.4 29.4 22.3 28.9 22.6C28.2 23.1 27.3 23.4 26.4 23.5C26.1 23.6 25.6 23.6 25.3 23.7C25 24.3 25.2 25.2 25.2 25.9C25.2 27.5 25.2 29.1 25.2 30.8C25.2 31.6 25.4 32.9 24.6 33.3L23.9 33.1C23.3 32.4 23.6 28.9 23.6 27.8C23.6 25 23.1 19.8 24.4 17.5C24.9 16.6 25.5 15.9 26.3 15.3C26.7 15 27.1 14.8 27.4 14.5L27.3 13.1C26.7 12.8 25.7 13.7 25.3 14.1C24 15.1 22.9 16.5 22.4 18.1C22.2 18.8 22.2 20 21.9 20.6Z"/>'
    },
    {
      id: "laundry-do-not-wash",
      name: "Do not wash",
      category: "laundry",
      aka: ["not washable", "no washing"],
      looksLike: ["bucket crossed out", "tub with an x", "crossed out bucket", "bucket with a cross", "x over bucket"],
      meaning: "Don't wash it at all, not in a machine and not by hand. Water will damage it: shrinking, staining or losing its shape.",
      action: "Check the other symbols. Usually it needs professional dry cleaning (a circle). Spot-clean small marks carefully if you must.",
      tip: "A big X through any care symbol simply means 'don't do this'. Finally, one that needs no translation.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 14.7L11.1 44.6L9.4 46C9.4 46.5 10.6 48.1 11 48.4L11.7 48.2L12.2 49.4C13.1 49.6 14.1 49.5 15 49.5C17.2 49.5 19.3 49.5 21.5 49.5C28.2 49.5 34.9 49.5 41.7 49.5C44.1 49.5 46.5 49.5 48.9 49.5C49.6 49.5 51.2 49.6 51.8 49.3L52.1 48.4L52.8 48.4L54.4 46.1L52.8 44.7L57.9 14.7C57.4 14.4 55.5 14.4 54.9 14.6C54.4 15.2 54.7 16.8 54.1 17.1L52.7 15.6L49.9 17.4C49.5 17.3 49.1 17 48.7 16.9C47.2 16.4 45.7 16.5 44.4 17.2C42.6 18.2 41.4 21 39.3 20.9C37.7 20.8 36.9 19 35.8 18.1C34.5 16.9 32.7 16.4 30.9 16.7C29.9 16.9 29 17.5 28.2 18.2C27.2 19.1 26.4 20.8 24.9 20.9C22.8 21 21.6 18.3 19.9 17.3C18.6 16.6 17 16.4 15.6 16.9C15.1 17 14.7 17.3 14.2 17.5C13.1 17.2 12 15.6 11 15.6C10.5 16 10.3 16.8 9.7 17L9.1 14.6C8.5 14.4 6.6 14.4 6.1 14.7ZM53.9 18.6C54.2 19 53.9 20.4 53.5 20.7C53 20.6 52.4 20.2 52.4 19.7L53.9 18.6ZM10.1 18.7C10.6 18.9 11.5 19.4 11.7 19.9C11.4 20.4 10.9 20.7 10.4 20.8C10.1 20.4 9.8 19.1 10.1 18.7ZM40.2 24.1L31.9 30C31.1 29.8 26.6 26.4 25.6 25.7C25 25.3 23.7 24.6 23.4 24C23.8 23.9 24.1 24 24.5 24C25.4 24 26.3 23.8 27.1 23.4C27.8 23 28.4 22.6 28.8 22C29.8 21 30.9 19.4 32.5 19.7C34.1 20.1 35.5 22.5 37 23.4C37.7 23.7 38.5 23.9 39.2 24C39.5 24 39.8 23.9 40 24C40.3 24.1 40 24 40.2 24.1ZM17.7 19.8C18.4 19.9 19.1 20.5 19.5 21.1C19 21.2 17.7 20.3 17.7 19.8ZM49.6 21.6C50.2 21.8 50.7 22.6 51.2 23C51.8 23.4 52.5 23.5 53 23.9C53.2 24.5 52.6 27.1 52.5 27.9C51.9 31.3 51.3 34.8 50.7 38.2C50.5 39 50.2 42 49.8 42.5C49 42.3 47.1 40.8 46.4 40.2C43.7 38.3 41 36.5 38.4 34.6C37.7 34.2 35.1 32.5 34.9 32L49.6 21.6ZM14.4 21.7C15.2 22 17.1 23.5 17.9 24.1C20.4 25.8 22.9 27.6 25.4 29.3C26.1 29.8 28.7 31.4 29 32C28.6 32.6 26.5 33.9 25.8 34.4C23.1 36.2 20.4 38.1 17.8 40C17.1 40.5 14.8 42.3 14.2 42.3C13.7 41.8 13.4 38.9 13.3 38.1C12.7 34.7 12.1 31.3 11.5 28C11.4 27.1 10.7 24.7 11 24C11.4 23.6 12.1 23.5 12.6 23.2C13.2 22.8 13.8 22 14.4 21.7ZM31.9 34.1C33 34.5 35.1 36.2 36.1 36.9C39.1 39 42.1 41.1 45.1 43.2C45.7 43.7 48.7 45.6 49 46C49.1 46.2 49 46 49 46.2C48.4 46.5 47.4 46.3 46.6 46.3C44.9 46.3 43.2 46.3 41.5 46.3C35.3 46.3 29.1 46.3 23 46.3C21.1 46.3 19.1 46.3 17.2 46.3C16.5 46.3 15.4 46.5 14.8 46.2C14.8 46 14.8 46 14.9 45.9C15.6 45.2 17.7 43.9 18.6 43.2C21.7 41.1 24.8 38.9 27.9 36.8C28.6 36.2 31.2 34.2 31.9 34.1Z"/>'
    },

    // ---- Bleaching --------------------------------------------------------
    {
      id: "laundry-bleach",
      name: "Any bleach allowed",
      category: "laundry",
      aka: ["bleach ok", "chlorine bleach allowed", "bleach when needed"],
      looksLike: ["triangle", "empty triangle", "plain triangle", "triangle with cl", "warning triangle"],
      meaning: "An empty triangle means any bleach can be used if needed, chlorine or oxygen (non-chlorine). For a shape that looks like a warning sign, it's surprisingly relaxed.",
      action: "Bleach is optional. Follow the instructions on the bottle and always dilute chlorine bleach.",
      tip: "Older labels sometimes show 'Cl' inside the triangle. That also means chlorine bleach is OK.",
      svg: TRIANGLE
    },
    {
      id: "laundry-non-chlorine-bleach",
      name: "Non-chlorine bleach only",
      category: "laundry",
      aka: ["oxygen bleach only", "colour-safe bleach", "no chlorine bleach"],
      looksLike: ["triangle with two lines", "triangle with stripes", "triangle with diagonal lines", "striped triangle", "triangle with slashes"],
      meaning: "Only oxygen-based, non-chlorine bleach (the 'colour-safe' kind) is allowed. Chlorine bleach would damage or discolour it.",
      action: "If you need a stain remover, use a colour-safe (oxygen) one, and keep household chlorine bleach well away.",
      tip: "Many everyday detergents already contain oxygen bleach, so washing as normal is fine.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M5.9 54.5C6.4 55.1 8.1 54.9 8.8 54.9C11.6 54.9 14.5 54.9 17.3 54.9C27.5 54.9 37.6 54.9 47.8 54.9C50.3 54.9 52.8 54.9 55.4 54.9C56.1 54.9 57.5 55.2 58 54.6C58.2 53.9 57 52.3 56.6 51.6C55.2 49.1 53.8 46.7 52.4 44.2C47.5 35.7 42.4 27.2 37.6 18.7C36.4 16.4 35 14.1 33.7 11.8C33.3 11.2 32.7 9.7 32 9.4C31.3 9.4 30.6 11.1 30.2 11.7C28.8 14.3 27.3 16.9 25.8 19.4C21 28.1 15.8 36.7 10.9 45.3C9.7 47.5 8.4 49.8 7.1 52C6.7 52.7 5.8 53.7 5.9 54.5ZM31.9 17.5L36 24.6L21.2 50.3L13.1 50.3L31.9 17.5ZM38.5 29L43.3 37.3L35.8 50.3L26.3 50.3L38.5 29ZM45.9 41.7L50.8 50.3L40.9 50.3L45.9 41.7Z"/>'
    },
    {
      id: "laundry-do-not-bleach",
      name: "Do not bleach",
      category: "laundry",
      aka: ["no bleach"],
      looksLike: ["triangle crossed out", "triangle with an x", "crossed out triangle", "x over triangle", "solid triangle with a cross"],
      meaning: "Don't use any bleach at all, chlorine or oxygen.",
      action: "Skip bleach and bleach-based stain removers. Use a 'colour' detergent, since powders for whites often contain oxygen bleach.",
      tip: "US labels sometimes draw this as a solid black triangle with the cross. Same meaning, more ink.",
      svg: '<g transform="translate(0,-3)">' + TRIANGLE + "</g>" + cross(12, 14, 52, 58)
    },

    // ---- Tumble drying ----------------------------------------------------
    {
      id: "laundry-tumble-dry",
      name: "Tumble dry",
      category: "laundry",
      aka: ["dryer safe", "tumble dry normal", "machine dry"],
      looksLike: ["square with a circle inside", "circle in a square", "box with a circle", "square with a ring", "washing machine door"],
      meaning: "A circle inside a square means it can go in the tumble dryer. With no dots, any normal heat setting is fine.",
      action: "Dry on a normal setting and take it out promptly to avoid creases.",
      tip: "Dots inside set the heat: one dot = low, two dots = normal, and US labels add three dots for high. A filled-in circle means no heat at all.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1C7.8 8.6 8 10.4 8 11.2C8 13.8 8 16.4 8 19.1C8 28 8 36.8 8 45.7C8 48.1 8 50.5 8 52.9C8 53.7 7.8 55.3 8.1 55.9C8.9 56.2 10.6 56 11.5 56C13.9 56 16.4 56 18.8 56C27.2 56 35.6 56 44 56C46.8 56 49.5 56 52.3 56C53.1 56 55.2 56.2 55.9 55.9L55.9 8.1C55.2 7.8 53.3 8 52.5 8C49.7 8 46.9 8 44.1 8C35.7 8 27.3 8 18.9 8C16.4 8 14 8 11.5 8C10.6 8 8.9 7.8 8.2 8.1ZM28.1 12.5C27.9 12.8 25.5 13.4 24.9 13.6C22.9 14.3 21.1 15.5 19.5 16.8C17.1 18.9 15.2 21.3 13.9 24.1C13.6 24.9 13.3 25.8 13.1 26.6C12.9 27.2 12.8 28 12.5 28.6C12.1 27.8 12.3 25.8 12.3 24.9C12.3 22 12.3 19.1 12.3 16.2C12.3 15.5 12.2 12.9 12.5 12.4L28.1 12.5ZM51.5 12.5C51.8 13.2 51.6 15.7 51.6 16.6C51.6 19.3 51.6 21.9 51.6 24.6C51.6 25.7 51.8 27.4 51.5 28.4C51.1 28.1 50.7 25.7 50.4 25.1C49.7 23.1 48.6 21.4 47.4 19.8C45.4 17.3 42.8 15.2 39.9 13.9C39.1 13.6 38.3 13.3 37.5 13.1C37 12.9 36.3 12.8 35.8 12.5C36.4 12.2 38.9 12.4 39.7 12.4C42.5 12.4 45.2 12.4 47.9 12.4C48.8 12.4 50.8 12.2 51.5 12.5ZM31.2 16.7C37.2 16.1 43.4 20.2 45.9 25.4C46.8 27.2 47.2 29.2 47.3 31.2C47.8 37.8 43.5 44.1 37.3 46.4C35.8 47 34.3 47.2 32.8 47.3C26.4 47.9 20.1 43.6 17.7 37.8C17 36.2 16.8 34.5 16.7 32.8C16 26.4 20.4 20.1 26.2 17.8C27.9 17.1 29.5 16.9 31.2 16.7ZM12.5 35.5C12.9 36 13.1 37.4 13.3 38.2C13.9 39.9 14.6 41.5 15.7 43C17.8 46 20.6 48.6 24 50.1C24.8 50.4 25.7 50.8 26.6 51C27.1 51.2 27.8 51.2 28.4 51.5C27.7 51.9 25.2 51.7 24.4 51.7C21.6 51.7 18.9 51.7 16.2 51.7C15.2 51.7 13.3 51.9 12.5 51.6C12.2 51.1 12.3 48.4 12.3 47.6C12.3 44.9 12.3 42.1 12.3 39.4C12.3 38.3 12.1 36.5 12.5 35.5ZM51.4 35.6C51.8 36.2 51.6 38.6 51.6 39.4C51.6 42.2 51.6 45.1 51.6 48C51.6 48.9 51.8 51 51.5 51.6C50.7 51.9 48.3 51.7 47.3 51.7C44.6 51.7 41.9 51.7 39.2 51.7C38.2 51.7 36.5 51.9 35.5 51.6C36.1 51.1 37.4 51 38.1 50.8C39.7 50.3 41.1 49.6 42.5 48.7C45.6 46.7 48.4 43.6 49.9 40.1C50.3 39.3 50.6 38.5 50.9 37.6C51.1 36.9 51.1 36.2 51.4 35.6Z"/>'
    },
    {
      id: "laundry-tumble-dry-low",
      name: "Tumble dry, low heat",
      category: "laundry",
      aka: ["low heat", "gentle tumble dry", "delicate dry"],
      looksLike: ["square with circle and one dot", "circle in a square with a dot", "box with circle and dot", "square circle dot"],
      meaning: "Tumble drying is fine, but only on low heat. The standard allows an exhaust temperature of max 60 °C.",
      action: "Choose the low-heat, delicate or gentle setting on your dryer.",
      tip: "Too much heat is the main reason clothes shrink in the dryer. If yours has no low setting, air-dry instead.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1C7.8 8.6 8 10.4 8 11.2C8 13.8 8 16.4 8 19.1C8 28 8 36.8 8 45.7C8 48.1 8 50.5 8 52.9C8 53.7 7.8 55.3 8.1 55.9C8.9 56.2 10.6 56 11.5 56C13.9 56 16.4 56 18.8 56C27.2 56 35.6 56 44 56C46.8 56 49.5 56 52.3 56C53.1 56 55.2 56.2 55.9 55.9L55.9 8.1C55.2 7.8 53.3 8 52.5 8C49.7 8 46.9 8 44.1 8C35.7 8 27.3 8 18.9 8C16.4 8 14 8 11.5 8C10.6 8 8.9 7.8 8.2 8.1ZM28.1 12.5C27.9 12.8 25.5 13.4 24.9 13.6C22.9 14.3 21.1 15.5 19.5 16.8C17.1 18.9 15.2 21.3 13.9 24.1C13.6 24.9 13.3 25.8 13.1 26.6C12.9 27.2 12.8 28 12.5 28.6C12.1 27.8 12.3 25.8 12.3 24.9C12.3 22 12.3 19.1 12.3 16.2C12.3 15.5 12.2 12.9 12.5 12.4L28.1 12.5ZM51.5 12.5C51.8 13.2 51.6 15.7 51.6 16.6C51.6 19.3 51.6 21.9 51.6 24.6C51.6 25.7 51.8 27.4 51.5 28.4C51.1 28.1 50.7 25.7 50.4 25.1C49.7 23.1 48.6 21.4 47.4 19.8C45.4 17.3 42.8 15.2 39.9 13.9C39.1 13.6 38.3 13.3 37.5 13.1C37 12.9 36.3 12.8 35.8 12.5C36.4 12.2 38.9 12.4 39.7 12.4C42.5 12.4 45.2 12.4 47.9 12.4C48.8 12.4 50.8 12.2 51.5 12.5ZM31.2 16.7C37.2 16.1 43.4 20.2 45.9 25.4C46.8 27.2 47.2 29.2 47.3 31.2C47.8 37.8 43.5 44.1 37.3 46.4C35.8 47 34.3 47.2 32.8 47.3C26.4 47.9 20.1 43.6 17.7 37.8C17 36.2 16.8 34.5 16.7 32.8C16 26.4 20.4 20.1 26.2 17.8C27.9 17.1 29.5 16.9 31.2 16.7ZM12.5 35.5C12.9 36 13.1 37.4 13.3 38.2C13.9 39.9 14.6 41.5 15.7 43C17.8 46 20.6 48.6 24 50.1C24.8 50.4 25.7 50.8 26.6 51C27.1 51.2 27.8 51.2 28.4 51.5C27.7 51.9 25.2 51.7 24.4 51.7C21.6 51.7 18.9 51.7 16.2 51.7C15.2 51.7 13.3 51.9 12.5 51.6C12.2 51.1 12.3 48.4 12.3 47.6C12.3 44.9 12.3 42.1 12.3 39.4C12.3 38.3 12.1 36.5 12.5 35.5ZM51.4 35.6C51.8 36.2 51.6 38.6 51.6 39.4C51.6 42.2 51.6 45.1 51.6 48C51.6 48.9 51.8 51 51.5 51.6C50.7 51.9 48.3 51.7 47.3 51.7C44.6 51.7 41.9 51.7 39.2 51.7C38.2 51.7 36.5 51.9 35.5 51.6C36.1 51.1 37.4 51 38.1 50.8C39.7 50.3 41.1 49.6 42.5 48.7C45.6 46.7 48.4 43.6 49.9 40.1C50.3 39.3 50.6 38.5 50.9 37.6C51.1 36.9 51.1 36.2 51.4 35.6Z"/><g fill="currentColor" stroke="none"><circle cx="31.94" cy="32.03" r="2.87"/></g>'
    },
    {
      id: "laundry-tumble-dry-normal",
      name: "Tumble dry, normal heat",
      category: "laundry",
      aka: ["normal heat", "medium heat"],
      looksLike: ["square with circle and two dots", "circle in a square with two dots", "box with circle and dots", "square circle two dots"],
      meaning: "Tumble drying at normal (higher) heat is fine. The standard allows an exhaust temperature of max 80 °C.",
      action: "Use the standard or cotton drying programme.",
      tip: "On US labels, two dots means medium heat and three dots means high. Same dots, different dialect.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1C7.8 8.6 8 10.4 8 11.2C8 13.8 8 16.5 8 19.2C8 28 8 36.8 8 45.6C8 48 8 50.5 8 52.9C8 53.7 7.8 55.3 8.2 55.9L55.8 55.9C56.1 55.4 55.9 53.5 55.9 52.8C55.9 50.1 55.9 47.5 55.9 44.8C55.9 36 55.9 27.2 55.9 18.4C55.9 15.9 55.9 13.5 55.9 11.1C55.9 10.3 56.1 8.7 55.8 8.1L8.2 8.1ZM28.4 12.5C27.9 12.9 26.5 13.1 25.8 13.3C24.2 13.8 22.6 14.6 21.2 15.6C18.2 17.6 15.5 20.5 14 23.9C13.6 24.7 13.3 25.6 13.1 26.5C12.9 27.1 12.8 27.8 12.5 28.4C12.1 27.9 12.3 25.4 12.3 24.7C12.3 21.8 12.3 18.8 12.3 15.9C12.3 15.1 12.1 13.1 12.5 12.5C13.2 12.2 15.8 12.4 16.8 12.4C19.4 12.4 22.1 12.4 24.7 12.4C25.8 12.4 27.4 12.2 28.4 12.5ZM51.5 12.5C51.8 13 51.7 15.3 51.7 16C51.7 18.9 51.7 21.8 51.7 24.7C51.7 25.4 51.9 28 51.5 28.4C51.2 27.8 51.1 27.1 50.9 26.5C50.7 25.6 50.3 24.7 50 23.9C48.5 20.5 45.8 17.6 42.8 15.5C41.3 14.6 39.8 13.8 38.1 13.3C37.5 13.1 36 12.9 35.6 12.5C36.6 12.2 38.3 12.4 39.4 12.4C42 12.4 44.6 12.4 47.2 12.4C48.2 12.4 50.8 12.2 51.5 12.5ZM31.2 16.6C39.2 15.8 47.3 23.2 47.3 31.2C47.3 32.9 47.2 34.7 46.7 36.4C45.3 41.1 41.4 45.3 36.6 46.7C35.4 47 34.1 47.2 32.8 47.3C24.7 48.1 16.7 40.9 16.7 32.8C16.7 31.2 16.8 29.7 17.1 28.1C18.3 23.2 22.5 18.8 27.4 17.3C28.7 16.9 29.9 16.8 31.2 16.6ZM12.5 35.6C12.8 36.2 12.9 37 13.1 37.6C13.3 38.4 13.6 39.1 13.9 39.8C15.1 42.6 17.1 45 19.4 47.1C21.1 48.6 23.1 49.7 25.3 50.5C25.9 50.7 28 51.1 28.4 51.5L12.4 51.5C12.1 50.8 12.3 48.5 12.3 47.6C12.3 44.8 12.3 42 12.3 39.3C12.3 38.3 12.1 36.4 12.5 35.6ZM51.5 35.6C51.9 36.4 51.7 38.3 51.7 39.3C51.7 42 51.7 44.8 51.7 47.6C51.7 48.5 51.9 50.8 51.5 51.5L35.6 51.5C35.9 51.1 38 50.7 38.7 50.5C40.8 49.7 42.9 48.6 44.6 47.1C46.9 45 48.9 42.6 50.1 39.8C50.5 38.9 50.8 38.1 51 37.2C51.2 36.6 51.2 36.1 51.5 35.6Z"/><g fill="currentColor" stroke="none"><circle cx="26.97" cy="31.99" r="2.89"/><circle cx="37" cy="31.99" r="2.89"/></g>'
    },
    {
      id: "laundry-tumble-dry-no-heat",
      name: "Tumble dry, no heat",
      category: "laundry",
      aka: ["air fluff", "air only", "no heat", "cool tumble"],
      looksLike: ["square with black circle", "square with filled circle", "solid circle in a square", "black dot in a square", "square with a full moon"],
      meaning: "You can tumble it, but with unheated air only (the 'air fluff' or 'no heat' setting). It's a US-style symbol, and not the most obvious one.",
      action: "Use the air-only, no-heat or refresh setting, or just let it air-dry.",
      tip: "The air-only setting is handy for shaking dust out of curtains, cushions and pillows without any heat.",
      // ASTM no-heat tumble dry: the GINETEX tumble square with the circle filled.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1C7.8 8.6 8 10.4 8 11.2C8 13.8 8 16.4 8 19.1C8 28 8 36.8 8 45.7C8 48.1 8 50.5 8 52.9C8 53.7 7.8 55.3 8.1 55.9C8.9 56.2 10.6 56 11.5 56C13.9 56 16.4 56 18.8 56C27.2 56 35.6 56 44 56C46.8 56 49.5 56 52.3 56C53.1 56 55.2 56.2 55.9 55.9L55.9 8.1C55.2 7.8 53.3 8 52.5 8C49.7 8 46.9 8 44.1 8C35.7 8 27.3 8 18.9 8C16.4 8 14 8 11.5 8C10.6 8 8.9 7.8 8.2 8.1ZM28.1 12.5C27.9 12.8 25.5 13.4 24.9 13.6C22.9 14.3 21.1 15.5 19.5 16.8C17.1 18.9 15.2 21.3 13.9 24.1C13.6 24.9 13.3 25.8 13.1 26.6C12.9 27.2 12.8 28 12.5 28.6C12.1 27.8 12.3 25.8 12.3 24.9C12.3 22 12.3 19.1 12.3 16.2C12.3 15.5 12.2 12.9 12.5 12.4L28.1 12.5ZM51.5 12.5C51.8 13.2 51.6 15.7 51.6 16.6C51.6 19.3 51.6 21.9 51.6 24.6C51.6 25.7 51.8 27.4 51.5 28.4C51.1 28.1 50.7 25.7 50.4 25.1C49.7 23.1 48.6 21.4 47.4 19.8C45.4 17.3 42.8 15.2 39.9 13.9C39.1 13.6 38.3 13.3 37.5 13.1C37 12.9 36.3 12.8 35.8 12.5C36.4 12.2 38.9 12.4 39.7 12.4C42.5 12.4 45.2 12.4 47.9 12.4C48.8 12.4 50.8 12.2 51.5 12.5ZM31.2 16.7C37.2 16.1 43.4 20.2 45.9 25.4C46.8 27.2 47.2 29.2 47.3 31.2C47.8 37.8 43.5 44.1 37.3 46.4C35.8 47 34.3 47.2 32.8 47.3C26.4 47.9 20.1 43.6 17.7 37.8C17 36.2 16.8 34.5 16.7 32.8C16 26.4 20.4 20.1 26.2 17.8C27.9 17.1 29.5 16.9 31.2 16.7ZM12.5 35.5C12.9 36 13.1 37.4 13.3 38.2C13.9 39.9 14.6 41.5 15.7 43C17.8 46 20.6 48.6 24 50.1C24.8 50.4 25.7 50.8 26.6 51C27.1 51.2 27.8 51.2 28.4 51.5C27.7 51.9 25.2 51.7 24.4 51.7C21.6 51.7 18.9 51.7 16.2 51.7C15.2 51.7 13.3 51.9 12.5 51.6C12.2 51.1 12.3 48.4 12.3 47.6C12.3 44.9 12.3 42.1 12.3 39.4C12.3 38.3 12.1 36.5 12.5 35.5ZM51.4 35.6C51.8 36.2 51.6 38.6 51.6 39.4C51.6 42.2 51.6 45.1 51.6 48C51.6 48.9 51.8 51 51.5 51.6C50.7 51.9 48.3 51.7 47.3 51.7C44.6 51.7 41.9 51.7 39.2 51.7C38.2 51.7 36.5 51.9 35.5 51.6C36.1 51.1 37.4 51 38.1 50.8C39.7 50.3 41.1 49.6 42.5 48.7C45.6 46.7 48.4 43.6 49.9 40.1C50.3 39.3 50.6 38.5 50.9 37.6C51.1 36.9 51.1 36.2 51.4 35.6Z"/><circle cx="31.95" cy="31.95" r="15.6" fill="currentColor" stroke="none"/>'
    },
    {
      id: "laundry-do-not-tumble-dry",
      name: "Do not tumble dry",
      category: "laundry",
      aka: ["no dryer", "no tumble dry", "air dry only"],
      looksLike: ["square with circle crossed out", "crossed out square", "box with an x", "square with circle and x", "circle in a square with a cross"],
      meaning: "Keep it out of the tumble dryer. The heat and tumbling could shrink, melt, pill or misshape it, and none of those come out in the wash.",
      action: "Air-dry instead. One of the natural-drying symbols (a square with lines) should show you how.",
      tip: "You'll often see it on wool, very stretchy clothes, printed T-shirts and anything with rubbery or plastic parts.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.1 12.1C11.8 13.1 12.3 14.7 11.9 15.4L8 13.1L6.2 15.8C6.8 17 11.6 19.3 11.9 20.2C12.2 20.8 12 24.6 12 25.5C12 29.7 12 34 12 38.2C12 39 12.2 43.4 11.9 43.8C11.4 44.7 6.9 47 6.2 48.1C6.2 48.6 7.6 50.7 8.1 50.9C9.1 50.6 11.1 48.4 11.9 48.6L12.1 51.9C12.8 52.2 14 52 14.7 52C16.7 52 18.7 52 20.7 52C28 52 35.3 52 42.6 52C44.8 52 47 52 49.2 52C49.9 52 51.3 52.2 51.9 51.9L52.1 48.5C53.1 48.5 54.8 50.6 55.9 50.9C56.4 50.6 57.7 48.7 57.8 48.2C57.5 47.2 52.4 44.6 52 43.8C51.8 43.2 52 39.5 52 38.7C52 34.4 52 30.2 52 25.9C52 25.1 51.8 20.6 52 20.2C52.5 19.3 57.4 16.8 57.8 15.8C57.7 15.3 56.4 13.4 55.9 13.1C54.9 13.4 53 15.5 52.1 15.4L51.9 12.1C51.2 11.8 50 12 49.2 12C47.2 12 45.2 12 43.2 12C36 12 28.7 12 21.4 12C19.2 12 17 12 14.8 12C14.1 12 12.6 11.8 12.1 12.1ZM28.5 15.8C27.9 16.1 27.2 16.2 26.6 16.4C25.5 16.8 24.4 17.3 23.4 17.9C22.7 18.4 21.9 19 21.3 19.6C20.8 20.1 20.3 20.8 19.7 21C19.3 21 15.9 18.6 15.7 18.3C15.5 17.9 15.5 16 15.7 15.7C16.6 15.4 17.9 15.6 18.9 15.6C21 15.6 23.1 15.6 25.2 15.6C26 15.6 27.9 15.4 28.5 15.8ZM48.3 15.7C48.5 16.1 48.4 16.5 48.4 16.9C48.4 17.3 48.5 17.8 48.4 18.2C48.2 18.7 46.5 19.6 46 20C45.5 20.3 44.9 21 44.3 21C43.7 20.7 43.3 20.1 42.8 19.7C42 18.9 41 18.3 40.1 17.7C39.2 17.2 38.3 16.8 37.4 16.4C36.8 16.2 36 16.1 35.5 15.8C36.2 15.4 37.9 15.6 38.8 15.6C41 15.6 43.1 15.6 45.3 15.6C46.2 15.6 47.4 15.4 48.3 15.7ZM41.1 23.3L32 29.7C31.3 29.6 30.3 28.6 29.6 28.1C28.1 27 26.5 25.9 24.9 24.8C24.3 24.4 23.3 23.9 22.9 23.3C23 22.4 25.1 21.2 25.8 20.8C29.4 18.8 34 18.7 37.7 20.5C38.5 20.9 41 22.4 41.1 23.3ZM17.4 24.1L15.7 28.8L15.7 23C16.2 22.9 17.1 23.6 17.4 24.1ZM48.2 22.9C48.5 23.3 48.4 23.9 48.4 24.3C48.4 25.2 48.6 28.2 48.2 28.8L46.5 24.1C46.8 23.7 47.7 23 48.2 22.9ZM20.7 26.4C21.3 26.4 22.1 27.2 22.7 27.6C24.1 28.6 25.4 29.6 26.9 30.6C27.4 31 28.3 31.4 28.6 32C28.4 32.6 27.3 33.1 26.8 33.5C25.4 34.4 24 35.4 22.7 36.4C22.1 36.8 21.4 37.5 20.7 37.6C20.1 37.2 19.9 36.2 19.7 35.6C19.1 33.4 19.1 31.1 19.6 28.9C19.8 28.1 20 26.9 20.7 26.4ZM43.4 26.4C43.9 26.8 44.1 27.8 44.3 28.4C44.9 30.6 44.9 33 44.4 35.2C44.2 35.9 44 37.2 43.3 37.6C42.5 37.4 38.3 34.2 37.3 33.5C36.7 33.1 35.6 32.6 35.4 32C35.7 31.4 36.6 31 37.1 30.6C38.5 29.6 39.9 28.7 41.2 27.7C41.9 27.3 42.6 26.5 43.4 26.4ZM32 34.4L41.1 40.7C41 41.7 38.1 43.4 37.1 43.8C33.6 45.3 29.1 45.2 25.7 43.2C24.9 42.7 23.2 41.7 22.9 40.8C23.1 40.2 24.5 39.4 25.1 39C26.7 38 28.2 36.9 29.8 35.8C30.4 35.3 31.2 34.5 32 34.4ZM15.7 35.2L17.5 39.8C17.2 40.3 16.3 41 15.8 41.1C15.4 40.7 15.6 40.1 15.6 39.6C15.6 38.4 15.3 36.2 15.7 35.2ZM48.2 35.2C48.5 35.5 48.4 36.2 48.4 36.6C48.4 37.5 48.6 40.5 48.3 41.1C47.7 41 46.8 40.3 46.5 39.9L48.2 35.2ZM19.7 43C20.3 43.3 20.8 44 21.4 44.5C22.5 45.5 23.8 46.4 25.2 47C25.8 47.3 28.5 48 28.7 48.3L15.7 48.4C15.5 48 15.5 46.1 15.7 45.8C15.9 45.4 19.3 43 19.7 43ZM44.3 43C44.7 43 48.1 45.4 48.3 45.7C48.5 46.1 48.5 48 48.3 48.3L35.3 48.3C35.5 48 38 47.4 38.6 47.1C40 46.5 41.3 45.7 42.4 44.7C43 44.1 43.6 43.3 44.3 43Z"/>'
    },

    // ---- Natural drying ---------------------------------------------------
    {
      id: "laundry-line-dry",
      name: "Line dry",
      category: "laundry",
      aka: ["hang to dry", "clothesline", "hang dry"],
      looksLike: ["square with a curve", "envelope", "square with a smile", "square with curved line at the top", "square with a hammock"],
      meaning: "Hang it up to dry on a clothesline, airer or hanger. No machine required.",
      action: "Shake it out, hang it up and let it air-dry, indoors or out.",
      tip: "This curved-line version is common on US and older labels. The newer European (ISO) version has a single vertical line in the square instead.",
      svg: SQUARE + '<path d="M9 12 Q32 36 55 12"/>'
    },
    {
      id: "laundry-line-dry-vertical",
      name: "Line dry (vertical line)",
      category: "laundry",
      aka: ["line drying", "hang to dry", "hang up"],
      looksLike: ["square with a vertical line", "square with one line", "box with a line down the middle", "square with a stick", "square with an i"],
      meaning: "Hang it up to dry after spinning, on a line or a hanger. This is the European (ISO) line-drying symbol.",
      action: "Hang it up and let it air-dry. Keep it out of the tumble dryer unless another symbol allows it.",
      tip: "One vertical line = hang to dry. Two = hang it up dripping wet (no spin). Add two diagonal lines in the corner and it means 'in the shade'. A lot of meaning for a few lines.",
      svg: SQUARE + '<path d="M32 18 V46"/>'
    },
    {
      id: "laundry-drip-dry",
      name: "Drip dry",
      category: "laundry",
      aka: ["drip dry", "hang wet"],
      looksLike: ["square with three lines", "square with three vertical lines", "box with three lines", "square with stripes", "barcode in a square"],
      meaning: "Hang it up soaking wet, straight out of the wash. No wringing, no spinning: just let the water drip out.",
      action: "Skip the spin (or take it out before spinning), hang it over the bath or outdoors, and let gravity do the work.",
      tip: "The three-line version is the US symbol. European labels use two vertical lines for the same idea.",
      svg: SQUARE + '<path d="M21 18 V46 M32 18 V46 M43 18 V46"/>'
    },
    {
      id: "laundry-drip-line-dry",
      name: "Drip line dry (two vertical lines)",
      category: "laundry",
      aka: ["drip dry", "hang dripping wet", "no spin"],
      looksLike: ["square with two lines", "square with two vertical lines", "box with two lines", "square with a pause symbol", "square with ii"],
      meaning: "Hang it up dripping wet, without spinning or wringing. This is the European (ISO) drip-dry symbol.",
      action: "Use the no-spin option or take it out before the spin, then hang it somewhere the drips don't matter.",
      tip: "Spinning would crease or stretch the fabric, while drip-drying lets the weight of the water pull the creases out. US labels use three lines for this; Europe makes do with two.",
      svg: SQUARE + '<path d="M26 18 V46 M38 18 V46"/>'
    },
    {
      id: "laundry-dry-flat",
      name: "Dry flat",
      category: "laundry",
      aka: ["lay flat to dry", "flat drying"],
      looksLike: ["square with a horizontal line", "square with a line in the middle", "box with a dash", "minus in a square", "square with a flat line"],
      meaning: "Lay it flat to dry, on a towel or a mesh drying rack, instead of hanging it.",
      action: "Gently reshape it while damp and lay it flat away from direct heat. Turn it over once so it dries evenly.",
      tip: "Typical for knitted wool and cashmere: hang a wet jumper and the water's weight stretches it into a dress. Two horizontal lines (European labels) means lay it flat while still dripping wet.",
      svg: SQUARE + '<path d="M18 32 H46"/>'
    },
    {
      id: "laundry-dry-in-shade",
      name: "Dry in the shade",
      category: "laundry",
      aka: ["dry away from sunlight", "shade dry", "no direct sun"],
      looksLike: ["square with diagonal lines in the corner", "square with two slashes in the corner", "square with corner lines", "box with lines in the top left", "folded corner"],
      meaning: "Dry it out of direct sunlight, which can fade colours or yellow some fabrics. The two corner lines are the shade, if you squint.",
      action: "Dry indoors or in a shady spot. Turning dark clothes inside out helps too.",
      tip: "The corner lines often team up with another drying symbol, such as a vertical or horizontal line: 'hang to dry in the shade' or 'dry flat in the shade'.",
      svg: SQUARE + '<path d="M9 20 L20 9 M9 29 L29 9"/>'
    },

    // ---- Ironing ----------------------------------------------------------
    {
      id: "laundry-iron-low",
      name: "Iron on low heat",
      category: "laundry",
      aka: ["cool iron", "low iron", "110 °C"],
      looksLike: ["iron with one dot", "iron with a dot", "iron one dot"],
      meaning: "Iron at a low temperature, max 110 °C (230 °F). One dot means go gently: it's typical for delicate synthetics like acrylic, nylon or acetate.",
      action: "Set the iron to its one-dot setting and skip the steam. At this setting, steam can cause permanent damage.",
      tip: "Most irons have the same dots printed on the dial, so just match them up. A rare bit of joined-up thinking.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.8 14.4C18.5 14.9 18.5 17.3 18.8 17.8C19.4 18.2 20.3 18 20.9 18C22.6 18 24.3 18 26 18C30.5 18 35 18 39.5 18C41 18 42.4 18 43.9 18C44.5 18 45.3 17.9 45.9 18.1L49 29.6C48.3 29.7 47.5 29.6 46.8 29.6C45.3 29.6 43.7 29.6 42.2 29.6C37.7 29.6 33.2 29.6 28.7 29.6C24.8 29.6 21 29.4 17.7 31.7C14.9 33.7 12.9 37.9 11.1 40.8C9.8 42.9 8.5 45 7.1 47.1C6.8 47.7 5.8 48.7 6 49.5C6.5 50 8.4 49.8 9.1 49.8C12 49.8 14.9 49.8 17.8 49.8C27.6 49.8 37.4 49.8 47.2 49.8C49.8 49.8 52.4 49.8 55 49.8C55.8 49.8 57.4 50 58 49.5C58.4 48.9 57.5 46.5 57.3 45.6C56.3 42 55.3 38.5 54.4 34.9C53.1 30 51.7 25.1 50.4 20.3C50.2 19.4 49.1 14.9 48.8 14.5C48.4 14.1 47.5 14.2 47 14.2C45.3 14.2 43.7 14.2 42 14.2C36.4 14.2 30.8 14.2 25.1 14.2C23.6 14.2 22.1 14.2 20.7 14.2C20.1 14.2 19.3 14.1 18.8 14.4ZM50 33.4L53.5 46L12.2 46C13.5 43.7 15 41.4 16.4 39.2C17.5 37.4 18.7 35.4 20.5 34.2C22.7 33 26 33.3 28.4 33.3C33.4 33.3 38.4 33.3 43.3 33.3C44.6 33.3 49.2 33.1 50 33.4Z"/><g fill="currentColor" stroke="none"><circle cx="33.87" cy="39.68" r="2.38"/></g>'
    },
    {
      id: "laundry-iron-medium",
      name: "Iron on medium heat",
      category: "laundry",
      aka: ["warm iron", "medium iron", "150 °C"],
      looksLike: ["iron with two dots", "iron with dots", "iron 2 dots"],
      meaning: "Iron at a medium temperature, max 150 °C (300 °F). Two dots is the middle setting, typical for polyester, wool, silk and blends.",
      action: "Set the iron to two dots. For wool and silk, iron inside out or use a pressing cloth to avoid shiny patches.",
      tip: "Just match the dots on the label to the ones on your iron's dial.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.8 14.4C18.5 14.9 18.5 17.3 18.8 17.8C19.4 18.2 20.3 18 20.9 18C22.6 18 24.3 18 26 18C30.5 18 35 18 39.5 18C41 18 42.4 18 43.9 18C44.5 18 45.3 17.9 45.9 18.1L49 29.6C48.3 29.7 47.5 29.6 46.8 29.6C45.3 29.6 43.7 29.6 42.2 29.6C37.7 29.6 33.2 29.6 28.7 29.6C24.8 29.6 21 29.4 17.7 31.7C14.9 33.7 12.9 37.9 11.1 40.8C9.8 42.9 8.5 45 7.1 47.1C6.8 47.7 5.8 48.7 6 49.5C6.5 50 8.4 49.8 9.1 49.8C12 49.8 14.9 49.8 17.8 49.8C27.6 49.8 37.4 49.8 47.2 49.8C49.8 49.8 52.4 49.8 55 49.8C55.8 49.8 57.4 50 58 49.5C58.4 48.9 57.5 46.5 57.3 45.6C56.3 42 55.3 38.5 54.4 34.9C53.1 30 51.7 25.1 50.4 20.3C50.2 19.4 49.1 14.9 48.8 14.5C48.4 14.1 47.5 14.2 47 14.2C45.3 14.2 43.7 14.2 42 14.2C36.4 14.2 30.8 14.2 25.1 14.2C23.6 14.2 22.1 14.2 20.7 14.2C20.1 14.2 19.3 14.1 18.8 14.4ZM50 33.4L53.5 46L12.2 46C13.5 43.7 15 41.4 16.4 39.2C17.5 37.4 18.7 35.4 20.5 34.2C22.7 33 26 33.3 28.4 33.3C33.4 33.3 38.4 33.3 43.3 33.3C44.6 33.3 49.2 33.1 50 33.4Z"/><g fill="currentColor" stroke="none"><circle cx="30.22" cy="39.68" r="2.38"/><circle cx="37.54" cy="39.68" r="2.39"/></g>'
    },
    {
      id: "laundry-iron-high",
      name: "Iron on high heat",
      category: "laundry",
      aka: ["hot iron", "high iron", "200 °C"],
      looksLike: ["iron with three dots", "iron with 3 dots", "iron with dots"],
      meaning: "Iron at a high temperature, max 200 °C (390 °F). Typical for cotton and linen, which can take it.",
      action: "Set the iron to three dots and use steam freely. Linen irons best while slightly damp.",
      tip: "On US labels, an iron with no dots at all means any temperature is OK.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.8 14.4C18.5 14.9 18.5 17.4 18.8 17.8C19.4 18.2 20.2 18 20.8 18C22.4 18 24 18 25.6 18C30.4 18 35.1 18 39.8 18C40.9 18 45.2 17.8 45.9 18.1L49 29.6C46.8 29.8 44.6 29.6 42.4 29.6C38 29.6 33.7 29.6 29.3 29.6C25.2 29.6 21.4 29.3 17.8 31.6C15.1 33.4 12.8 38 11.1 40.7C9.8 42.9 8.5 45 7.2 47C6.8 47.7 5.8 48.7 6 49.5C6.5 50 8.3 49.7 9 49.7C11.9 49.7 14.7 49.7 17.5 49.7C27.6 49.7 37.5 49.7 47.5 49.7C50.1 49.7 52.6 49.7 55.1 49.7C55.9 49.7 57.5 50 58 49.5C58.4 48.8 57.5 46.5 57.3 45.7C56.3 42.1 55.4 38.6 54.4 35C53.1 30.2 51.8 25.4 50.5 20.7C50.2 19.6 49.2 15.1 48.8 14.6C48.4 14.1 47.5 14.2 47 14.2C45.3 14.2 43.7 14.2 42 14.2C36.4 14.2 30.8 14.2 25.1 14.2C23.6 14.2 22.2 14.2 20.7 14.2C20.1 14.2 19.3 14.1 18.8 14.4ZM50 33.4L53.4 46L12.2 46C13.5 43.7 15 41.4 16.4 39.2C17.6 37.4 18.7 35.4 20.6 34.2C22.7 33 26.1 33.3 28.4 33.3C33.4 33.3 38.4 33.3 43.3 33.3C44.6 33.3 49.1 33.1 50 33.4Z"/><g fill="currentColor" stroke="none"><circle cx="26.54" cy="39.67" r="2.39"/><circle cx="33.89" cy="39.67" r="2.38"/><circle cx="41.21" cy="39.67" r="2.38"/></g>'
    },
    {
      id: "laundry-do-not-iron",
      name: "Do not iron",
      category: "laundry",
      aka: ["no ironing", "no iron"],
      looksLike: ["iron crossed out", "iron with an x", "crossed out iron", "x over iron"],
      meaning: "Don't iron it. Heat would melt, glaze or flatten the fabric or a print. The European version also rules out steaming.",
      action: "Hang it up straight after washing so the creases drop out on their own. As instructions go, it's one of the nicer ones.",
      tip: "Often found on clothes with plastic prints, sequins, velvet or heat-sensitive synthetics.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.8 14.4C18.5 14.9 18.5 17.3 18.8 17.8C19.4 18.2 20.3 18 20.9 18C22.6 18 24.3 18 26 18C30.5 18 35 18 39.5 18C41 18 42.4 18 43.9 18C44.5 18 45.3 17.9 45.9 18.1L46.3 19.6C45.4 20.5 44.1 21.2 43 21.9C40.7 23.6 38.4 25.2 36 26.8C35.3 27.4 32.6 29.5 31.9 29.6C30.9 29.3 27.9 26.9 26.8 26.2C23.4 23.7 19.9 21.3 16.4 18.9C15.5 18.2 11.9 15.4 11 15.3C10.4 15.5 9.1 17.4 9.1 18C9.3 18.8 12.5 20.7 13.3 21.3C17.3 24 21.3 26.7 25.2 29.6C24.7 29.7 24.1 29.7 23.6 29.7C22.1 29.8 20.7 30.1 19.4 30.8C18.4 31.2 17.5 31.8 16.7 32.5C15.1 34.1 13.9 36.1 12.8 38.1C11.7 39.7 10.7 41.4 9.7 43.1C8.7 44.6 7.7 46.2 6.7 47.7C6.4 48.2 5.7 48.9 6 49.5C6.5 50 8.2 49.8 8.9 49.8C11.5 49.8 14.1 49.8 16.6 49.8C26.6 49.8 36.5 49.8 46.5 49.8C49.3 49.8 52.1 49.8 54.9 49.8C55.7 49.8 57.5 50 58.1 49.5C58.4 48.9 57.9 47.9 57.7 47.3C57.2 45.6 56.8 43.9 56.4 42.2C55 37.4 53.8 32.6 52.4 27.7C52.1 26.5 50.7 22.1 50.7 21.1C51.5 20.4 54.5 18.8 54.7 18C54.6 17.4 53.3 15.4 52.7 15.3L49.6 17.3C49.4 16.6 49.1 14.7 48.6 14.3C48.2 14.1 47.4 14.2 47 14.2C45.5 14.2 44.1 14.2 42.6 14.2C37.2 14.2 31.8 14.2 26.3 14.2C24.6 14.2 22.8 14.2 21 14.2C20.4 14.2 19.4 14 18.8 14.4ZM47.3 23.4L49 29.6L38.6 29.6L47.3 23.4ZM26.7 33.4L14.9 41.7C15.2 40.8 16 39.8 16.5 39C18.7 35.6 19.8 33.7 24.1 33.4C24.8 33.3 26.2 33.2 26.7 33.4ZM37.1 33.3L50.1 33.4L53.1 44.5L37.1 33.3ZM31.9 34.4L48.6 46L15.3 46.1L31.9 34.4Z"/>'
    },
    {
      id: "laundry-no-steam",
      name: "Do not steam",
      category: "laundry",
      aka: ["no steam", "iron without steam", "dry iron only"],
      looksLike: ["iron with a dot and crossed lines below", "iron with an x underneath", "iron with crossed lines below", "iron with a cross under it", "iron with crossed out steam"],
      meaning: "Iron on a low setting (that's the single dot), and without steam. The crossed-out lines under the iron are the steam, and steam could leave water marks or damage the fabric.",
      action: "Switch off the steam (or empty the water tank) and dry-iron at the temperature the label allows.",
      tip: "Silk and some synthetics get water spots from steam, and they're hard to get out again.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.7 5.8C21.2 6.4 21.3 7.9 21.6 8.5C21.7 8.6 21.8 8.7 22 8.8C22.9 8.9 26 8.8 27.1 8.8C30.8 8.8 34.4 8.8 38 8.8C39 8.8 42.1 8.6 42.9 8.8L45.3 17.8C43.9 18 41.4 17.8 39.9 17.8C36.3 17.8 32.8 17.8 29.2 17.8C26.1 17.8 23.2 17.7 20.6 19.5C18.4 21.1 16.9 24.4 15.5 26.6C14.5 28.2 13.5 29.8 12.5 31.4C12.2 32 11.4 32.7 11.6 33.4C12.1 33.9 13.3 33.7 14 33.7C16.2 33.7 18.4 33.7 20.6 33.7C28.5 33.7 36.4 33.7 44.3 33.7C46.3 33.7 48.3 33.7 50.3 33.7C50.9 33.7 52 33.9 52.5 33.4C52.7 32.7 52 30.8 51.8 30.1C51 27.3 50.3 24.5 49.5 21.7C48.5 17.9 47.5 14 46.4 10.1C46.2 9.4 45.6 6.3 45.1 5.9C44.8 5.6 44.1 5.7 43.6 5.7C42.3 5.7 41 5.7 39.7 5.7C35.4 5.7 31.2 5.7 26.9 5.7C25.9 5.7 22.4 5.5 21.7 5.8ZM46.1 20.9L48.7 30.6L16.6 30.6C16.8 29.9 18.2 27.9 18.8 27.1C19.9 25.2 21 22.8 22.9 21.6C24.4 20.7 26.2 20.8 27.8 20.8C30.7 20.8 33.6 20.8 36.5 20.8C38.7 20.8 41 20.8 43.2 20.8C44.1 20.8 45.2 20.6 46.1 20.9ZM28.4 35.7C27.8 36.7 27.7 41.7 27.3 43.3C26.3 42.7 23.9 40.5 22.9 40.6C22.4 40.9 21.6 41.9 21.6 42.6C21.8 43.2 22.5 43.5 23 43.9C24.3 44.8 25.7 45.6 26.8 46.6L26.8 48.1C27.6 49 29.5 47.8 30.9 49.5C30.3 49.9 27.3 52.2 26.8 52.3C25.3 52.6 24.1 50.6 24 49.4C23.9 47.9 24.9 47.3 24.9 46.5C24.7 45.9 23.5 45 22.9 45C22.1 45.2 21.7 46.2 21.4 46.9C20.6 49 21.1 51.5 22.6 53.2C22.9 53.6 23.5 54 23.8 54.4C23.2 54.9 21.9 55.5 21.6 56.3C21.6 56.7 21.8 56.9 22 57.2C22.2 57.5 22.4 57.9 22.6 58.1C23.6 58.8 25.5 56.7 26.4 56.4C27.1 57 27.8 57.9 28.7 58.2C29.4 58.5 34.5 58.3 35.6 58.3C36.4 58.3 37.7 58.5 38.4 58.2C39.4 57.9 39.9 56.9 40.7 56.3C41.5 56.7 43.5 58.7 44.4 58.1C44.7 58 44.9 57.5 45.1 57.2C45.3 56.9 45.5 56.6 45.5 56.2C45.2 55.5 43.8 54.9 43.2 54.4C43.6 53.9 44.5 53.4 45 52.5C46.2 50.5 46.3 47.9 45.1 46C44.9 45.5 44.6 45.1 44.2 45C43.5 45 42.2 45.9 42.1 46.6C42.3 47.5 43 47.8 43.1 49C43.2 50.4 42.2 51.8 40.9 52.2C40.6 52.3 40.3 52.4 40 52.3C39.4 52 36.9 50 36.2 49.5C36.3 49.3 36.5 49.1 36.8 49C37 48.8 37.3 48.6 37.6 48.5C38.4 48.3 39.4 48.8 40 48.2L40.1 46.7C41.1 45.8 45.1 43.5 45.5 42.6C45.5 41.9 44.7 40.9 44.2 40.6C43.1 40.5 40.8 42.8 39.6 43.3C39.3 41.6 39.1 39.8 38.9 38C38.8 37.3 38.9 36.3 38.4 35.7C37.9 35.4 36.3 35.4 35.8 35.7C35.4 36.4 35.8 37.7 35.9 38.4C36.1 40 36.3 41.5 36.5 43C36.6 43.8 36.8 44.6 36.7 45.3L33.5 47.5L30.2 45.3C30.2 44.6 30.4 43.9 30.5 43.3C30.7 41.6 30.9 40 31.1 38.4C31.2 37.6 31.6 36.6 31.3 35.8C30.8 35.4 28.9 35.4 28.4 35.7ZM33.5 51.3L38.1 54.5C37.8 55 37.3 55.4 36.9 55.6C34.9 57 32.8 56.9 30.6 56C30 55.7 29.2 55.2 28.9 54.5L33.5 51.3Z"/><g fill="currentColor" stroke="none"><circle cx="33.46" cy="25.72" r="1.92"/></g>'
    },

    // ---- Professional cleaning --------------------------------------------
    {
      id: "laundry-dry-clean",
      name: "Dry clean",
      category: "laundry",
      aka: ["dry cleaning", "professional cleaning", "dry clean only"],
      looksLike: ["circle", "empty circle", "ring", "letter o", "plain circle", "hollow circle"],
      meaning: "A plain circle means it can be professionally dry cleaned (US labels). Dry cleaning uses solvents instead of water.",
      action: "Take it to a dry cleaner. This isn't a home job, and 'dry clean' doesn't mean 'dry it'.",
      tip: "Circles are for professional cleaners, and a letter inside (P, F or W) tells them which process to use. A circle inside a square is something else entirely: tumble drying.",
      svg: CIRCLE
    },
    {
      id: "laundry-dry-clean-p",
      name: "Dry clean (P)",
      category: "laundry",
      aka: ["professional dry clean", "perchloroethylene", "perc"],
      looksLike: ["circle with p", "p in a circle", "letter p in a circle", "parking sign"],
      meaning: "Professional dry cleaning with tetrachloroethylene ('perc') or any of the milder hydrocarbon solvents is fine. This is the standard dry-cleaning process. Not, despite appearances, a parking sign.",
      action: "Take it to a dry cleaner, who'll know exactly what P means. It's not something you can do at home.",
      tip: "A line under the circle asks the cleaner for a gentle process; two lines mean very gentle.",
      svg: letter("P")
    },
    {
      id: "laundry-dry-clean-f",
      name: "Dry clean (F)",
      category: "laundry",
      aka: ["hydrocarbon solvent", "petroleum solvent", "gentle dry clean"],
      looksLike: ["circle with f", "f in a circle", "letter f in a circle"],
      meaning: "One for the professionals: dry cleaning with hydrocarbon (petroleum-based) solvents only. It's milder than the standard 'P' process.",
      action: "Take it to a dry cleaner and point out the F. Not every cleaner uses hydrocarbon solvents.",
      tip: "F items often have sequins, beads, plastic trims or bonded fabrics that the stronger 'perc' solvent could damage.",
      svg: letter("F")
    },
    {
      id: "laundry-wet-clean-w",
      name: "Professional wet clean (W)",
      category: "laundry",
      aka: ["wet cleaning", "professional wet cleaning"],
      looksLike: ["circle with w", "w in a circle", "letter w in a circle"],
      meaning: "It can be professionally wet cleaned: a specialist water-based process with careful detergents and controlled drying. Confusingly, it's offered by many dry cleaners.",
      action: "Take it to a cleaner that offers wet cleaning. It does not mean it can go in your machine at home (check the washtub symbol for that).",
      tip: "A crossed-out W means no professional wet cleaning.",
      svg: letter("W")
    },
    {
      id: "laundry-do-not-dry-clean",
      name: "Do not dry clean",
      category: "laundry",
      aka: ["no dry cleaning"],
      looksLike: ["circle crossed out", "circle with an x", "crossed out circle", "x over circle", "o with an x"],
      meaning: "Don't dry clean it. The cleaning solvents would damage it.",
      action: "Follow the washing symbols on the label instead (usually machine or hand wash).",
      tip: "You'll find it on items with rubber, plastic or coated parts that solvents would dissolve.",
      svg: CIRCLE + cross(11, 11, 53, 53)
    },

    // ---- Other ------------------------------------------------------------
    {
      id: "laundry-do-not-wring",
      name: "Do not wring",
      category: "laundry",
      aka: ["no wringing", "do not twist"],
      looksLike: ["twisted cloth with a cross", "crossed out twist", "wrung towel crossed out", "twisted rag with an x", "bow tie with a cross"],
      meaning: "Don't twist or wring it to get the water out. That stretches and distorts the fibres.",
      action: "Gently squeeze the water out, or roll it up in a towel like a Swiss roll and press. Then dry it as the label says.",
      tip: "Mostly a US-label symbol, usually on knits, wool and delicate fabrics.",
      // Traced from the ASTM D5489 chart.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M24.3 25.2C23.6 25 22.9 24.3 22.3 23.8C20.6 22.4 18.8 21.1 17 19.7C16.4 19.2 15.1 17.9 14.3 17.7C13.8 17.9 12.9 19 12.8 19.6C13.2 20.3 16.9 23 17.8 23.6C18.3 24 19.3 24.6 19.4 25.2C18.8 25.6 16.8 25.3 16.1 25.3C13.5 25.3 11 25.3 8.5 25.3C7.7 25.3 6 25.1 5.3 25.5C5 25.9 5.2 28.3 5.2 29C5.2 32.2 5.2 35.3 5.2 38.4C5.2 38.9 5.2 39.4 5.2 40C5.2 40.7 4.5 41.7 5.8 42.2C6.4 42.4 7 42.1 7.5 42C8.1 42 8.7 42 9.3 41.9C10.8 41.6 12.3 40.8 13.6 39.8C14.4 39.2 15.4 38.1 16.2 37.7L18.8 39.8C18.7 40.4 17.8 40.8 17.4 41.2C16 42.3 14.6 43.5 13.1 44.6C12.6 45 11.6 45.6 11.5 46.2C11.8 46.9 13.6 46.7 14.3 46.7C15.1 46.7 15.8 45.9 16.4 45.4C17.6 44.4 18.7 43.5 19.9 42.5C20.4 42.2 20.9 41.7 21.4 41.4C22.1 41.4 22.8 41.9 23.4 42.1C24.5 42.6 27.1 43.3 28.2 43.2C30.5 42.9 32.9 42.4 35.1 41.5C36.1 41.2 37.7 40.2 38.5 40C39.5 40.3 40.3 41.4 41.1 41.9C43.1 43.4 45 45 46.9 46.5C47.3 46.8 48.6 46.8 48.9 46.5C49.2 46.3 49.6 45.8 49.7 45.5C49.5 44.8 48.5 44.4 48 44C46.5 42.7 44.8 41.5 43.2 40.2C42.7 39.8 41.4 39 41.2 38.4C41.8 38.4 44.2 40.1 44.8 40.5C46.9 41.7 49.3 42.8 51.7 43.2C52.3 43.3 52.9 43.3 53.6 43.4C54.1 43.4 54.8 43.4 55.3 43.2C58.4 42 59.1 37.1 59 34.3C59 33.5 58.7 32.8 58.7 32C58.7 30.7 59 29.2 58.8 27.9C58.7 27.3 58.7 26.8 58.6 26.2C58.5 25.3 57.4 23.2 56.6 22.8C55.9 22.8 55.1 23.3 54.5 23.6C52.7 24.5 51.2 25.7 49.6 26.9C49 27.4 48.3 28.2 47.5 28.4C47 28.2 46.6 27.8 46.1 27.5C45.1 27 44 26.6 43 26.2C42.5 26 41.6 26 41.3 25.5C41.5 24.9 42.5 24.4 43 23.9C44.3 22.9 45.6 21.8 46.9 20.8C47.5 20.3 48.4 19.9 48.7 19.2L47.2 17.4C46.5 17.5 45.4 18.6 44.8 19.1C43.2 20.4 41.6 21.6 40.1 22.9C39.5 23.4 38.9 24 38.3 24.3C37.7 24.6 36.8 23.9 36.2 23.8C35.6 23.5 34.9 23.3 34.2 23.1C33.4 22.9 32.5 22.9 31.6 22.8C30.2 22.7 27.7 23.5 26.4 24.1C25.8 24.4 25.1 25.1 24.3 25.2ZM35.4 26.5C35.2 27 31.3 30.1 30.8 30.3C30.2 30.1 27.1 27.7 27 27.1C27.2 26.1 30.2 25.5 31.1 25.5C31.9 25.4 32.6 25.6 33.4 25.7C34 25.8 35.1 25.9 35.4 26.5ZM55.7 26.2C56.6 27.1 56 30.3 56 31.6C56 32.4 56.2 33.2 56.3 34C56.5 35.9 56.2 38.8 54.9 40.3C54.2 41.1 53 40.6 52.1 40.6C50 40.5 47.2 38.8 45.4 37.7C44.8 37.3 43.6 36.9 43.4 36.2C43.5 35.5 45 34.3 45.5 33.7C46.1 33 46.7 32.1 47.5 31.6C48.4 31.1 49.3 30.6 50.1 29.9C50.9 29.3 51.6 28.7 52.5 28.1C53.2 27.6 54.8 26.1 55.7 26.2ZM45 30.1C44.9 30.7 44 31.4 43.6 31.8C42.6 32.8 39.8 36.3 38.7 36.5C38 36.3 35.1 33.9 34.4 33.3C34 32.9 33.2 32.6 33.1 32C33.4 31.4 36.4 29.3 37.2 28.7C37.5 28.4 38 27.8 38.5 27.7C39.1 27.7 41.3 28.5 42 28.7C42.7 28.9 44.5 29.4 45 30.1ZM21.1 28.1C21.1 28.7 19.1 30.6 18.7 31.1C16.6 33.7 14.2 36.1 11.5 38C10.7 38.6 8.9 39.6 8 39.2C7.6 38.7 7.8 37.2 7.8 36.5C7.8 34.6 7.8 32.7 7.8 30.8C7.8 30 7.5 28.8 7.9 28.1C8.5 27.8 10 28 10.8 28C13.2 28 15.6 28 18.1 28C18.7 28 20.7 27.8 21.1 28.1ZM24.5 29.1C25.1 29.2 27.9 31.4 28.3 32C28.3 32.7 27.2 33.3 26.7 33.7C25.7 34.5 22.1 37.6 21.2 37.9C20.5 37.8 18.7 36.4 18.4 35.7C18.5 35 19.3 34.4 19.8 33.9C20.6 33 23.6 29.3 24.5 29.1ZM30.8 34C31.6 34.2 33.7 36.2 34.6 36.8C35 37.1 35.8 37.5 36 38.1C35.6 38.7 34.1 39.1 33.4 39.3C32 39.7 30.7 40 29.3 40.3C28.8 40.4 28.4 40.6 28 40.6C27.4 40.5 27 40.4 26.4 40.3C25.8 40.2 24.4 40 24.1 39.4C24.4 38.7 25.2 38.3 25.8 37.9C26.6 37.1 30 34.2 30.8 34Z"/>'
    },

    // =====================================================================
    // WASHING MACHINE
    // =====================================================================
    {
      id: "washer-prewash",
      name: "Prewash",
      category: "washer",
      aka: ["pre-wash", "pre wash", "compartment I"],
      looksLike: ["bucket with a line", "tub with an i", "bucket with a vertical line", "bucket with 1", "tub with one stroke"],
      meaning: "Adds a short extra wash before the main wash to loosen heavy dirt, like muddy sports kit or very dirty work clothes.",
      action: "Only use it for genuinely filthy loads, and put a little detergent in the compartment marked I in the detergent drawer.",
      tip: "Detergent drawer cheat sheet, in Roman numerals for some reason: I = prewash, II = main wash, flower = fabric softener. Most loads only need II.",
      // Traced from IEC 60417.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.6 14.2C19.3 14.7 19.4 18 19.4 18.8C19.4 22.5 19.4 26.1 19.4 29.8C19.4 30.6 19.2 33.4 19.6 34L27.4 34C27.7 33.3 27.5 30.1 27.5 29.1C27.5 25.7 27.5 22.2 27.5 18.8C27.5 17.8 27.7 15 27.4 14.3C26.8 13.9 25.9 14.1 25.3 14.1C24.1 14.1 20.6 13.9 19.6 14.2ZM36.6 14.3C36.3 15.1 36.5 17.9 36.5 18.9C36.5 22.4 36.5 25.8 36.5 29.1C36.5 30 36.3 33.5 36.6 34C37.5 34.3 41.1 34.1 42.3 34.1C42.9 34.1 43.8 34.3 44.4 34C44.7 33.4 44.5 30.1 44.5 29.1C44.5 25.7 44.5 22.2 44.5 18.8C44.5 17.8 44.7 15 44.4 14.3C43.8 13.9 39.5 14.1 38.5 14.1C37.9 14.1 37.1 14 36.6 14.3ZM7.1 18.4C6.9 19.3 7.9 24.1 8.1 25.4C8.3 27.2 8.7 29 8.9 30.8C9.4 34.6 10.1 38.4 10.6 42.2C10.9 44 11.2 45.8 11.5 47.6C11.6 48.2 11.5 49.2 11.9 49.8C12.8 50 13.9 49.9 14.8 49.9C16.9 49.9 19 49.9 21.2 49.9C28 49.9 34.8 49.9 41.7 49.9C44.1 49.9 46.6 49.9 49 49.9C49.8 49.9 51.4 50.1 52.1 49.7C52.5 49.1 53.1 43.6 53.3 42.5C54 37 55 31.5 55.8 26C56.1 24.2 56.4 22.3 56.7 20.5C56.8 19.9 57.1 18.9 56.8 18.4C56.5 18.2 56 18.1 55.6 18.3C55.2 19 54.5 24.3 54.4 25.5C53.7 30.6 52.6 35.7 52 40.8C51.8 42.6 51.5 44.4 51.2 46.2C51.1 46.8 51.1 47.8 50.7 48.3L13.2 48.2C12.8 47.5 12.2 42.7 12.1 41.5C11.1 36 10.5 30.4 9.5 24.9C9.3 23.8 8.8 18.8 8.4 18.2L7.1 18.4Z"/>'
    },
    {
      id: "washer-rinse",
      name: "Rinse",
      category: "washer",
      aka: ["rinse only", "rinse cycle", "rinse and spin"],
      looksLike: ["bucket with dotted lines", "bucket with a shower", "water falling into a bucket", "tub with dashes above", "rain over a bucket"],
      meaning: "Runs a rinse with clean water, usually followed by a spin, without a full wash.",
      action: "Use it to rinse out leftover detergent, freshen up swimwear, or add softener to a load that's already washed.",
      tip: "If your skin reacts to detergent, an extra rinse removes much of what's left in the fabric.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M55.2 20.7C53.7 20.9 53 24.3 52.6 25.6C51.9 28.3 50.8 30.9 49.8 33.6C49.1 35.5 48.8 37.6 47.4 39.1C46 40.8 44 40.5 42 40.5C37.9 40.5 33.8 40.5 29.7 40.5C26.6 40.5 23.6 40.5 20.6 40.5C19 40.5 17.3 40.5 16.2 39.3C15.1 38 14.8 36.1 14.2 34.6C13.2 32.1 12.2 29.7 11.4 27.3C10.9 25.8 10.7 24.4 10.1 22.9C9.7 22.1 8.8 20.1 7.6 20.9C7.2 21.1 7 21.6 7 21.9C6.9 22.8 7.3 23.5 7.5 24.3C8.9 28.4 10.5 32.4 12 36.4C12.8 38.6 13.6 41.1 15.7 42.4C16.8 43 18.2 43.2 19.4 43.2C20.1 43.2 20.7 43.1 21.4 43.2C22.6 43.4 23.9 43.3 25.2 43.3C28.1 43.3 31 43.2 34 43.2C36.3 43.2 38.6 43.3 40.9 43.3C42.8 43.3 44.9 43.5 46.7 42.8C47.8 42.4 48.7 41.6 49.5 40.8C50.7 39.4 51.8 35.6 52.6 33.8C53.1 32.4 53.5 31.1 54 29.7C54.7 27.7 55.7 25.8 56.3 23.8C56.5 22.8 56.9 20.4 55.2 20.7ZM26 21.8C24.3 22 22.7 24.2 21.1 24C19.3 23.9 17.6 21.5 15.4 21.8C14.4 22 11.2 23.5 12.5 24.9C13.3 25.7 14.4 24.9 15.3 24.7C16.1 24.6 16.8 24.9 17.4 25.4C19 26.4 20.9 27.3 22.8 26.5C24.1 26 25.1 24.6 26.6 24.7C28.6 24.9 29.5 27.2 32.5 26.8C34.3 26.6 35.7 24.4 37.5 24.8C39.2 25.1 40.4 27 42.7 26.8C44.9 26.7 45.8 25 47.4 24.7C48.5 24.6 50.2 25.9 51.1 24.7C51.7 23.8 50.8 23 50.1 22.6C48.7 21.7 47.3 21.5 45.9 22.3C44.8 23 43.6 24.2 42.3 24.1C40.9 23.9 38.6 21.5 37 21.7C35 22 33 24.3 31.6 24.1C31 24 30.5 23.6 30.1 23.3C28.9 22.6 27.4 21.5 26 21.8ZM18.7 29.8C18.3 29.9 17.9 29.9 17.6 30.1C16.6 30.6 17 32 18 32.2C19 32.4 21.2 32.4 22.2 32.3C22.6 32.2 23 32.2 23.4 32C24.4 31.4 23.9 30.2 22.9 29.9C22 29.7 19.7 29.7 18.7 29.8ZM30.1 29.8C29.7 29.9 29.3 29.9 29 30C27.9 30.6 28.3 32 29.4 32.2C30.5 32.4 32.5 32.4 33.6 32.3C34.1 32.2 34.6 32.2 35 31.9C35.9 31.2 35.1 30.1 34.3 29.9C33.4 29.7 31 29.7 30.1 29.8ZM41.5 29.8C41 29.9 40.5 29.9 40.1 30.2C39.3 30.9 39.9 32 40.7 32.2C41.9 32.5 43.5 32.4 44.8 32.3C45.3 32.3 45.9 32.2 46.3 31.9C47 31.3 46.6 30.2 45.8 30C44.9 29.7 42.5 29.7 41.5 29.8ZM24.7 35.4C24.2 35.4 23.7 35.4 23.2 35.6C22.4 36.1 22.8 37.2 23.6 37.5C24.2 37.7 26.8 37.8 27.5 37.7C28 37.6 28.5 37.7 28.9 37.4C29.8 37 29.7 35.9 28.8 35.5C28.1 35.2 25.5 35.2 24.7 35.4ZM35.6 35.4C33.5 35.7 33.7 37.4 35.4 37.6C36.2 37.8 38.5 37.8 39.3 37.7C41.2 37.4 41.5 35.7 39.7 35.4C38.6 35.3 36.7 35.2 35.6 35.4Z"/>'
    },
    {
      id: "washer-extra-rinse",
      name: "Extra rinse",
      category: "washer",
      aka: ["rinse plus", "rinse+", "additional rinse", "allergy rinse"],
      looksLike: ["bucket with a plus", "rinse with a plus", "shower bucket with plus", "tub with dotted lines and a plus"],
      meaning: "Adds one more rinse at the end of the programme to wash out more detergent. Handy if your skin has opinions about the stuff.",
      action: "Turn it on for babies' clothes, sensitive skin or allergies, or if white detergent marks show up on dark clothes.",
      tip: "It costs extra water and time, so leave it off for everyday loads.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M27 18.7C27.3 20 29.2 19.5 30 20.3C30.8 21.2 30.3 23 31.6 23.4C33 23.2 32.5 21.2 33.3 20.4C34.1 19.5 36.1 19.9 36.4 18.7C36 17.5 34.1 17.9 33.3 17.1C32.6 16.4 32.7 13.5 31.4 14C30.4 14.4 30.8 16.4 29.8 17.3C29 17.9 27.3 17.4 27 18.7ZM7.8 28.5C6.5 28.7 7.2 30.5 7.4 31.2C7.9 32.8 8.6 34.4 9.2 36C9.6 37.2 9.9 38.4 10.4 39.5C11.9 43.4 12.6 48.9 17.3 50.2C19.2 50.8 23.3 50.5 25.4 50.5C30.6 50.5 35.7 50.5 40.8 50.5C43.5 50.5 46.4 50.7 48.7 48.9C50.5 47.4 52 42.3 52.9 40C53.9 37.3 54.9 34.6 55.8 31.8C56.1 31 56.8 29.5 56.1 28.7C55.9 28.5 55.6 28.4 55.4 28.5C53.9 28.8 54 31.4 52.3 31.2C50.6 31.1 49.8 29.3 47.4 29.5C45.6 29.6 44.1 31.9 42.4 31.6C40.6 31.4 39.4 29.8 37.5 29.5C35.3 29.2 34.1 31.3 32.1 31.6C30.5 31.9 28.6 29.7 26.5 29.5C24.2 29.2 22.7 31.9 20.6 31.6C18.8 31.4 17.7 29.4 15.4 29.5C13.6 29.5 12 31.5 10.8 31.2C9.4 30.9 9.3 28.2 7.8 28.5ZM26.1 32C27.7 31.8 29.4 34 31.4 34.2C33.7 34.5 34.9 32.2 37 32C38.1 31.9 39.3 33 40.2 33.6C40.8 33.9 41.5 34.1 42.2 34.2C45.2 34.5 46.2 30.7 49.5 32.6C50.4 33.2 51.5 33.8 51.8 34.8C52.1 36 51.2 37.5 50.8 38.6C49.6 41.5 49.2 45.8 46.2 47.5C44.6 48.4 39.9 48.1 38 48.1C33.2 48.1 28.5 48.1 23.7 48.1C21.6 48.1 18.9 48.6 17 47.5C15.7 46.7 15.1 44.9 14.5 43.6C13.7 41.6 12.9 39.7 12.3 37.6C12 36.7 11.4 35.8 11.7 34.8C12 33.9 12.9 33.3 13.6 32.8C14.1 32.4 14.7 32 15.4 32C17.4 31.9 18.8 34.4 21 34.2C23.3 34 24.3 32.2 26.1 32ZM20 37.6C19.1 37.7 16.9 37.2 16.4 38.3C15.7 39.8 18.7 39.7 19.4 39.7C20.3 39.7 22.6 39.9 23 38.9C23.7 37.5 20.8 37.5 20 37.6ZM35.1 38.8C35.1 38.5 35 38.2 34.8 38C34 37.3 30.9 37.5 29.8 37.6C29.2 37.7 28.4 37.9 28.3 38.5C28.2 39.4 29.2 39.6 29.8 39.6C30.9 39.8 33.5 39.8 34.5 39.4C34.8 39.3 35 39.1 35.1 38.8ZM40.3 38.5C40.3 40.1 44.4 39.7 45.6 39.7C46.1 39.6 46.8 39.4 47 38.9C47.2 38.1 46.3 37.7 45.7 37.6C44.6 37.5 41.9 37.4 41 37.8C40.6 38 40.5 38.2 40.3 38.5ZM22.4 44C22.6 45.4 24.6 45.2 25.7 45.2C26.3 45.2 27 45.2 27.6 45.1C28.2 45.1 29.1 44.8 29.1 44C29.1 43.3 28.2 43.1 27.6 43.1C26.6 42.9 23.7 42.8 22.9 43.3C22.6 43.5 22.5 43.7 22.4 44ZM34.3 44C34.5 45.4 36.6 45.1 37.6 45.1C38.2 45.1 38.9 45.2 39.5 45.1C40 45 40.9 44.8 41 44.2C41.2 43.4 40.4 43.1 39.8 43C38.8 43 35.7 42.9 34.9 43.2C34.5 43.4 34.4 43.6 34.3 44Z"/>'
    },
    {
      id: "washer-rinse-hold",
      name: "Rinse hold",
      category: "washer",
      aka: ["rinse stop", "water stop", "no final spin", "crease guard"],
      looksLike: ["empty tub", "tub with no water", "basin outline", "bowl", "empty bucket"],
      meaning: "The machine stops after the last rinse and leaves the laundry sitting in the water instead of spinning, so delicates don't crease.",
      action: "When you're ready, choose spin or drain to finish the cycle. Don't leave it for hours or it'll start to smell.",
      tip: "If the door won't open and the drum is full of water, rinse hold is often why. It's paused, not broken.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M10.2 22.2C9.2 22.4 9.6 23.7 9.8 24.3C10.7 26.4 11.6 28.6 12.4 30.7C13.5 33.3 14.5 35.8 15.6 38.3C16.3 39.8 17.1 41.2 18.6 41.8C20.4 42.5 23.2 42.3 25.1 42.3C29.9 42.3 34.6 42.2 39.4 42.2C41.5 42.2 44.1 42.7 45.9 41.4C48.1 39.8 48.8 36.8 49.8 34.5C51 31.6 52.1 28.7 53.4 25.8C53.7 25.1 54.6 23.3 54 22.6C53.2 21.5 52 23.2 51.4 23.6C50.9 23.9 50.4 24 49.9 24.1C48.6 24.2 47.3 24.1 46.1 24.1C43.6 24.1 41.1 24.1 38.6 24.1C30.9 24.1 23.2 24.1 15.4 24.1C14.4 24.1 13.3 24.2 12.4 23.6C11.7 23.2 11.1 22 10.2 22.2ZM15.8 26.4C16.6 26.3 17.4 26.4 18.1 26.4C19.8 26.4 21.5 26.4 23.2 26.4C28.1 26.4 33.1 26.4 38.1 26.4C40.9 26.4 43.8 26.4 46.6 26.4C47.6 26.4 49.1 26.2 49.7 27.2C50.2 28 49.6 29.1 49.3 29.9C48.3 32.3 47.5 34.6 46.5 36.9C44.8 40.6 42.6 40 39.2 40C34.6 40 30.1 40 25.6 40C23.7 40 19.9 40.5 18.6 39C16.9 37 16 33.5 15 31.1C14.5 30.1 13.6 28.8 13.8 27.7C13.9 26.6 15 26.5 15.8 26.4Z"/>'
    },
    {
      id: "washer-spin",
      name: "Spin",
      category: "washer",
      aka: ["spin cycle", "spin only", "rpm", "spin speed"],
      looksLike: ["spiral", "snail", "swirl", "coil", "snail shell", "spiral line"],
      meaning: "The spin function or spin-speed setting. The drum whizzes round fast to fling the water out of the laundry.",
      action: "Pick a high speed (1200–1400 rpm) for towels and cottons so they dry faster, and a lower one for delicates and synthetics to avoid creases.",
      tip: "On most machines, pressing the spin button cycles through the speeds. As a programme on its own, it spins the water out without washing.",
      svg: SPIRAL
    },
    {
      id: "washer-no-spin",
      name: "No spin",
      category: "washer",
      aka: ["spin off", "spin stop", "0 rpm"],
      looksLike: ["spiral crossed out", "crossed out swirl", "snail with an x", "spiral with an x"],
      meaning: "The final spin is switched off, so the cycle ends after draining and the laundry comes out very wet. Not a fault, just a very damp choice.",
      action: "Use it for drip-dry items or delicates that crease badly. Have a basin ready: it'll be soggy.",
      tip: "This matches the 'drip dry' symbols on care labels. Hang things up straight away.",
      // Beko and Samsung: the spin spiral with a single slash.
      svg: '<path d="M36 34 A4 4 0 0 0 28 34 A8 8 0 0 0 44 34 A12 12 0 0 0 20 34 A16 16 0 0 0 52 34 A20 20 0 0 0 12 34"/><path d="M12 54L52 14"/>'
    },
    {
      id: "washer-drain",
      name: "Drain",
      category: "washer",
      aka: ["pump out", "drain only", "empty water", "spin/drain"],
      looksLike: ["bucket with an arrow down", "tub with a downward arrow", "arrow out of a bucket", "bucket with arrow"],
      meaning: "Pumps the water out of the drum, either on its own or as part of a spin/drain programme. The arrow pointing down is the water leaving.",
      action: "Use it to empty the machine after rinse hold or after cancelling a programme halfway. The door usually unlocks once the water's gone.",
      tip: "If the machine won't drain, the pump filter (behind a small flap at the bottom front) is probably clogged with the usual suspects: fluff, coins or hair clips.",
      // Hoover: a short arrow below the tub base.
      svg: '<g transform="translate(0,-3)"><path d="M7 15 L14 49 H50 L57 15"/><path d="M8.2 21 q5.95 -6 11.9 0 t11.9 0 t11.9 0 t11.9 0"/></g><path d="M32 50V60M27 55L32 60L37 55"/>'
    },
    {
      id: "washer-door-locked",
      name: "Door locked",
      category: "washer",
      aka: ["door lock", "lock", "door closed"],
      looksLike: ["padlock", "lock", "closed padlock", "lock with keyhole", "handbag"],
      meaning: "The door is locked for safety while the machine runs, and it stays that way afterwards while there's still water in the drum or it's still hot.",
      action: "Wait for the light to go out, usually a minute or two after the programme ends. If it stays on, there may still be water inside: run a drain.",
      tip: "Never force the door. It's a safety lock, and it will break before it opens.",
      svg: LOCK + dot(32, 38.5) + '<path d="M32 40 V46"/>'
    },
    {
      id: "washer-child-lock",
      name: "Child lock",
      category: "washer",
      aka: ["child safety lock", "key lock", "button lock", "control lock"],
      looksLike: ["padlock with a face", "lock with a smiley", "padlock with a smiley face", "lock with a baby face", "key"],
      meaning: "The buttons are locked so little fingers (or cats) can't change or stop the programme.",
      action: "To unlock, press and hold the button (or pair of buttons) marked with the lock symbol for about 3 seconds. The panel or manual shows which.",
      tip: "If none of the buttons respond, check this first. Some brands use a key symbol instead.",
      svg: LOCK + '<circle cx="26.5" cy="37.5" r="2.3" fill="currentColor" stroke="none"/><circle cx="37.5" cy="37.5" r="2.3" fill="currentColor" stroke="none"/>' +
        '<path d="M25.5 43.5 Q32 49.5 38.5 43.5" stroke-width="3"/>'
    },
    {
      id: "washer-delay-start",
      name: "Delay start / end time",
      category: "washer",
      aka: ["delay end", "time delay", "finish in", "ready in", "delay timer", "timer"],
      looksLike: ["clock with an arrow", "clock", "clock with a circular arrow", "circle arrow with clock hands"],
      meaning: "Sets the machine to start later, or to finish at a time you choose, such as when you're home or on cheap night-time electricity.",
      action: "Press it repeatedly to add hours, then press Start. The machine counts down and starts by itself.",
      tip: "For long delays, put detergent in the drawer rather than the drum, and avoid it for very smelly or damp loads.",
      // Beko, Samsung, Hotpoint: a clock whose rim is dotted from 12 to 3, with an arrowhead at the top.
      svg: '<path d="M53 32A21 21 0 1 1 32 11"/><path d="M28 7L32 11L28 15"/><g fill="currentColor" stroke="none"><circle cx="40" cy="12.6" r="1.9"/><circle cx="46.85" cy="17.15" r="1.9"/><circle cx="51.4" cy="23.96" r="1.9"/></g><path d="M32 21V32H41"/>'
    },
    {
      id: "washer-quick-wash",
      name: "Quick wash",
      category: "washer",
      aka: ["15 minute wash", "rapid wash", "speed wash", "quick 15", "quick 30", "express"],
      looksLike: ["stopwatch with speed lines", "clock with lines", "fast clock", "stopwatch", "timer with lines", "15 with an apostrophe"],
      meaning: "A short programme for small, lightly worn loads, often 15 or 30 minutes long. Bosch draws it as a stopwatch with speed lines; some machines print 15' instead, where the ' means minutes.",
      action: "Use it for a few lightly worn items, with less detergent than usual. It won't shift real stains.",
      tip: "Quick washes are short and cool, so they're not great for towels, bedding or anything properly dirty.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.5 17C30.6 16.7 30.4 15.5 29.6 15.1C29 15.2 26.8 16.9 26.6 17.4L28.1 19.7C27.8 20.4 26.9 21.2 26.5 21.8C25.7 22.8 25.1 24 24.6 25.1C22.6 29.9 22.8 36 25.4 40.5C30.3 49 41.2 51.9 49.5 46.9C50.9 46 52.3 45 53.3 43.8C55.5 41.2 57 38.5 57.7 35.2C58.4 31.7 57.8 27 56 23.9C55.6 23.2 55.2 22.6 54.8 21.9C54.3 21.2 53.4 20.5 53.2 19.8L54.7 17.4C54.5 16.9 52.3 15.2 51.8 15.1C50.9 15.6 50.7 16.8 49.8 17.1C49.4 17 49.1 16.8 48.7 16.6C47.9 16.2 47.1 15.8 46.2 15.5C43.7 14.7 40.9 14.4 38.3 14.7C37 14.9 35.2 15.4 33.9 15.9C33.2 16.2 32.2 16.9 31.5 17ZM39.4 16.4C39.8 17 39.6 19.6 39.6 20.5C39.6 23 39.6 25.5 39.6 28C39.6 29.1 39.4 30.6 39.6 31.6C40.1 31.9 41.2 31.9 41.7 31.7C42.1 31.1 41.8 29.1 41.8 28.4C41.8 25.6 41.8 22.8 41.8 20C41.8 19.1 41.6 17 42.1 16.4C42.9 16.1 45.4 17 46.2 17.3C50.3 18.9 53.8 22.2 55.2 26.4C55.5 27.4 56.7 30.6 56.1 31.4L53.9 31.7C53.6 32 53.6 32.4 53.8 32.8C54.5 33.2 55.4 32.7 56.1 33.2C56.4 33.9 55.7 36.3 55.4 37.1C55.1 37.8 54.8 38.6 54.5 39.3C52.9 42.5 49.5 45.5 46.1 46.6C45 47 42.6 48 41.5 47.5C41.1 46.8 41.8 45.9 41.3 45.2C40.9 45 40.4 45 40 45.2C39.7 45.9 40.2 46.8 39.7 47.5C38.9 47.9 35.8 47 34.9 46.6C30.6 44.9 27.4 41.4 25.8 37.1C25.4 36.3 24.7 34 25.1 33.2C25.8 32.6 26.7 33.2 27.5 32.8C27.6 32.4 27.6 32 27.4 31.7C26.7 31.3 25.8 31.8 25.1 31.4C24.5 30.4 25.6 27.4 26 26.3C27.7 21.9 30.6 19.2 34.9 17.4C35.9 16.9 38.4 16.1 39.4 16.4ZM9.2 21.8C9.1 22.2 9 23 9.3 23.4C10 23.7 11.5 23.5 12.4 23.5C14.7 23.5 17.1 23.5 19.5 23.5C20.3 23.5 22.1 23.8 22.8 23.4C23 22.9 23 22.2 22.8 21.8C22.1 21.4 20.5 21.7 19.7 21.7C17.3 21.7 14.9 21.7 12.6 21.7C11.8 21.7 9.9 21.4 9.2 21.8ZM6.2 34.1C6 34.5 6 35.2 6.1 35.6C6.6 36 8.6 35.8 9.3 35.8C11.8 35.8 14.3 35.8 16.8 35.8C17.5 35.8 19.2 36 19.8 35.7C20.1 35.2 20.1 34.5 19.8 34.1C19 33.7 17.4 33.9 16.6 33.9C14.2 33.9 11.9 34 9.5 34C8.7 34 6.8 33.7 6.2 34.1ZM13.5 46.1C13.1 46.5 13.1 47.4 13.4 47.9C14.1 48.2 15.7 48 16.5 48C18.9 48 21.3 48 23.7 48C24.4 48 26.4 48.2 26.9 47.8C27.1 47.4 27.1 46.6 26.9 46.2C26.2 45.8 24.3 46 23.5 46C21.2 46 19 46 16.7 46C15.7 46 14.5 45.8 13.5 46.1Z"/>'
    },
    {
      id: "washer-eco-40-60",
      name: "Eco 40-60",
      quiz: "Energy-saving programme for cottons",
      category: "washer",
      aka: ["eco", "eco programme", "energy saving", "eco 40-60 programme"],
      looksLike: ["eco 40-60", "text eco", "40-60", "eco with numbers"],
      meaning: "The EU's standard energy-saving programme. It washes normally soiled cottons labelled for 40 °C or 60 °C, even mixed together, using as little energy and water as it possibly can.",
      action: "Use it as your everyday programme for normal cotton loads. It's long (3 hours is normal) but cheap to run.",
      tip: "It saves energy by washing cooler for longer, so the water rarely reaches 40 or 60 °C, whatever the name says. The energy label on your machine is based on this programme.",
      svg: '<text x="32" y="28" font-size="20">eco</text><text x="32" y="48" font-size="16">40-60</text>'
    },
    {
      id: "washer-cotton",
      name: "Cotton",
      category: "washer",
      aka: ["cottons", "cotton programme", "normal"],
      looksLike: ["cotton ball", "fluffy cloud", "cotton boll", "cloud with a dark wedge", "puffy cloud", "flower"],
      meaning: "The cotton programme: the sturdy, hard-working cycle for towels, bedding, T-shirts and other cotton or linen items.",
      action: "Choose it for robust everyday cottons and set the temperature to match the care labels (usually 40 or 60 °C).",
      tip: "Cotton programmes use more drum movement and a faster spin than the synthetics or delicates programmes.",
      // Traced from Hoover's symbol guide.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19 7.7C18.1 7.8 17.1 7.8 16.2 8.1C14.6 8.7 12 10.2 10.9 11.5C10.5 11.9 10.1 12.5 9.7 13C9.2 13.7 8.6 14.3 8.2 15.1C8 15.5 7.9 15.9 7.8 16.3C7.5 16.9 7.2 17.3 7.1 17.9C6.9 18.6 7.1 19.2 7 19.9C6.8 21.3 6.8 22.3 7 23.7C7 24.1 7 24.4 7 24.8C7.2 25.7 8.1 27.7 8.7 28.4C9.2 29.2 10.1 29.9 9.9 30.8C9.8 31.6 8.6 32.9 8.1 33.8C7.8 34.5 7.3 35.3 7.1 36.1C6.8 37.4 7 38.9 7 40.2C7 41.2 6.8 42.4 7.3 43.3C8 44.7 8.4 46.3 9.4 47.6C10.6 49.4 12.8 51.4 14.5 52.8C15.2 53.4 17.6 54.6 18.5 55C19 55.2 19.7 55.1 20.2 55.3C20.6 55.5 21 55.7 21.4 55.8C22.8 56.2 24.7 56.2 26.1 55.8C28 55.3 30.1 54.5 31.6 53.2C32.3 52.6 33.7 50.6 34.5 50.6C35.6 50.5 36.5 51.7 37.4 52.2C38.1 52.5 38.8 52.8 39.5 53.1C40.1 53.3 40.8 53.3 41.4 53.4C41.9 53.5 42.4 53.8 43 53.9C44.4 54.1 45.5 53.7 46.8 53.4C47.5 53.2 48.2 53.3 48.8 53C51.3 52.1 54.3 49.6 55.7 47.4C56 46.9 56 46.4 56.2 45.8C56.7 44.2 57.1 43.2 56.8 41.4C56.6 40.9 56.4 40.4 56.2 39.8C56.1 39.3 56 38.7 55.8 38.2C55.4 37.2 54.7 36.2 54.1 35.3C53.7 34.6 52.6 34 52.6 33.1C52.5 32.1 53.5 31.3 54 30.5C54.2 29.9 54.5 29.3 54.8 28.6C55.1 28 55.1 27.3 55.3 26.6C55.4 26.1 55.6 25.7 55.7 25.3C56.1 23.8 55.9 22.2 55.4 20.7C55.2 20.1 55.2 19.4 55 18.8C54.8 18 53.2 15.1 52.7 14.4C51.1 12.2 48.6 10.4 46.1 9.2C45.7 8.9 45.1 8.9 44.7 8.7C44.1 8.4 43.6 8.1 43 8C42.5 7.9 41.9 8 41.3 7.9C39.2 7.6 37.6 7.7 35.5 7.9C35.2 8 32.6 8.9 32.3 9.1C31.5 9.6 30.5 10.4 29.6 10.4C28.6 10.4 27.5 9.3 26.6 8.9C25.9 8.7 25.2 8.2 24.5 8.1C23.2 7.7 20.4 7.5 19 7.7ZM26 45.5C25.6 44.8 26.2 44 26.4 43.2C26.6 42.6 26.9 42.1 27.2 41.5C27.5 40.8 27.8 40 28.1 39.3C28.2 38.9 28.2 38.5 28.4 38.1C28.6 37.5 29 36.9 29.2 36.3C29.5 35.4 30.4 34.3 29.8 33.4C29.2 33 27.7 33.8 26.9 33.9C26.5 34 26.1 34.3 25.6 34.5C25.2 34.7 24.7 34.8 24.3 34.9C23.9 35.1 23.6 35.3 23.2 35.5C22.7 35.7 22.1 35.7 21.6 35.9C21 36.2 20.5 36.5 19.8 36.6C19.1 36.7 18.4 37.3 17.6 37.1C16.9 36.5 17.2 35.3 17.2 34.5C17.2 32.9 17 31.2 17.2 29.7C17.3 28.9 17.6 27.9 17.2 27.1C16.3 25.3 13.9 27.8 12.9 27.9C12 28 11.4 26.9 11 26.3C10.5 25.6 10.1 24.9 9.9 24.1C9.4 22.6 9.4 19.9 9.9 18.3C10.1 17.4 10.8 16.6 11.2 15.8C11.6 15.2 12 14.5 12.6 14C14.8 12.1 18.8 10.7 21.7 10.9C22.3 11 22.9 11.3 23.5 11.5C24 11.6 24.5 11.6 24.9 11.7C25.6 11.9 26.3 12.3 26.9 12.7C27.7 13.2 28.5 14.3 29.6 14.2C30.6 14.2 33 12.2 34.2 11.8C34.7 11.6 35.2 11.6 35.7 11.4C36.2 11.2 36.6 10.9 37.2 10.8C38.2 10.6 41.8 10.6 42.8 10.8C43.2 10.9 43.6 11.1 44 11.3C44.4 11.5 44.9 11.6 45.3 11.8C46 12.1 47.9 13.3 48.4 13.8C49.3 14.6 50.8 16.8 51.2 17.9C51.4 18.3 51.4 18.8 51.6 19.2C51.8 19.9 52.2 20.5 52.3 21.1C52.5 22.3 52.4 23.7 52.2 24.8C52.1 25.5 51.8 26 51.6 26.6C51.4 27.2 51.4 27.8 51.1 28.4C50.7 29.4 49.9 30.8 49.2 31.7C48.9 32.2 48.3 32.7 48.2 33.3C48.1 34.2 50.5 35.7 51.1 36.4C51.7 37.2 52.4 38 52.9 38.9C53.2 39.4 53.8 41.9 53.7 42.4C53.6 43.3 53.4 44.3 53.2 45.1C52.9 46 51.7 47.3 51 47.9C50.4 48.4 49.8 49 49.1 49.4C48.8 49.5 46.6 50.4 46.3 50.4C45.2 50.6 42.2 50.6 41.2 50.4C40.5 50.2 39.6 49.8 39 49.4C38.3 49.1 37.3 48.5 36.9 47.8C36.5 47.1 36.6 46.2 35.6 46C34.9 45.8 34 45.9 33.2 45.9C31.8 45.9 30.3 45.9 28.8 45.9C27.9 45.9 26.7 46.1 26 45.5Z"/>'
    },
    {
      id: "washer-synthetics",
      name: "Synthetics / easy care",
      category: "washer",
      aka: ["easy care", "synthetics", "permanent press", "mixed fabrics"],
      looksLike: ["flask", "conical flask", "triangle with a neck", "lab flask", "bottle shape", "shirt"],
      meaning: "A gentler programme for polyester, nylon and blends: less tumbling and a slower spin, so things come out less creased. It's the one that matches care labels with one line under the tub.",
      action: "Use it for shirts, blouses, sportswear and anything labelled with one line. Don't overfill: half a drum is ideal.",
      tip: "Some brands show this programme as a shirt or blouse instead of the tub with a line. Same programme, different doodle.",
      // Traced from Hoover's symbol guide.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.9 28.2C21.2 28.6 20.9 29.4 20.6 29.9C20.3 30.5 19.8 31.2 19.5 31.8C19 32.5 18.7 33.3 18.2 34C17.9 34.5 17.7 35 17.4 35.5C16.4 37.2 15.4 38.9 14.4 40.6C13.3 42.5 12 44.3 11.2 46.4C10.9 46.9 10.6 47.4 10.4 48C10.1 49.4 10.1 51.1 11.1 52.2C11.7 53 12.7 53.8 13.7 54.1C15.2 54.5 19 54.3 20.7 54.3C29.1 54.3 37.4 54.3 45.8 54.3C47.6 54.3 52.1 54.5 53.6 54.1C54.4 53.8 55.4 53.1 55.9 52.4C56.8 51.3 57.2 49.8 56.7 48.4C56.5 47.9 56.2 47.4 56 46.9C55.6 45.5 54.9 44.3 54.1 43C53.9 42.6 53.7 42.2 53.5 41.8C53 40.9 52.5 40 52 39.2C51.4 38.2 50.8 37.2 50.3 36.3C50 35.9 49.7 35.5 49.5 35.1C48.2 32.5 46.6 30.1 45.2 27.6C45 27.2 44.8 26.8 44.6 26.4C44.2 25.8 43.7 25.2 43.4 24.5C41.8 22 40.4 19.4 39 16.9C37.8 14.8 36.8 12.6 35 11.1C34.4 10.7 34 10.2 33.3 9.9C31.6 9.2 29.8 9.4 28 9.7C27.5 9.7 26.9 9.7 26.4 9.9C24.6 10.7 23.1 11.7 21.6 12.8C20.8 13.4 19.9 13.8 19.1 14.5C17.7 15.7 16.5 17.2 15 18.3C13 19.7 11.5 21.1 9.7 22.7C8.9 23.4 7.7 24 7.3 25.1C7.1 25.5 7 26 7.2 26.4C7.7 27.6 10.7 30.2 11.7 31.4C12.3 32 13 33 13.9 33.2C14.7 33.2 15.4 32.3 15.9 31.9C16.9 31.1 19.8 28.1 20.9 28.2ZM29.1 13C29.8 12.9 30.8 12.9 31.5 13.2C33.6 14.2 35.5 18.1 36.6 20.1C40 25.8 43.3 31.5 46.7 37.2C48.2 39.8 49.5 42.4 51.1 44.8C51.4 45.2 51.6 45.7 51.8 46.2C52 46.6 52.3 46.9 52.5 47.3C52.9 48.4 52.6 50 51.5 50.6C50.6 51.2 49.4 51 48.4 51C46.2 51 44.1 51 42 51C34.1 51 26.1 51 18.2 51C17.5 51 16.8 51 16.1 50.8C14.6 50.4 14.3 48.7 14.7 47.4C14.9 46.6 15.5 45.7 15.9 45C16.9 43.2 18 41.5 19 39.8C19.3 39.3 19.6 38.9 19.9 38.5C21.1 36.3 22.2 34.1 23.5 32C23.7 31.6 24 31.2 24.3 30.8C24.5 30.3 24.7 29.9 25 29.4C25.5 28.7 26 28 26.4 27.3C27 26 28 24.8 28.5 23.4C28.7 22.9 28.8 22.2 28.7 21.6C28.5 20.1 27.9 19.3 26.1 19.4C24.3 19.4 23.1 20.9 21.7 22C20.3 23.2 18.9 24.4 17.6 25.7C16.8 26.5 15.3 28.4 14 28.1C13 27.9 11.9 26.3 12.4 25.4C12.7 24.8 14.5 23.3 15.1 22.8C15.8 22.1 16.6 21.4 17.4 20.7C18.6 19.7 19.9 18.9 21.1 17.8C23.3 15.9 26.2 13.4 29.1 13Z"/>'
    },
    {
      id: "washer-wool",
      name: "Wool",
      category: "washer",
      aka: ["woollens", "wool programme", "woolmark"],
      looksLike: ["ball of yarn", "yarn ball", "ball of wool", "circle with lines and a tail", "ball with string"],
      meaning: "A very gentle, cool programme for machine-washable wool and cashmere, with minimal drum movement and a low spin, so your jumper comes out the size it went in.",
      action: "Use it for items with a washtub and two lines on the label, or marked 'machine washable wool', and use a wool detergent.",
      tip: "Machines with Woolmark approval have had this programme tested as safe even for some hand-wash wool.",
      // Traced from Hoover's symbol guide.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.1 7C29.6 7.1 29.1 7.1 28.6 7.3C28.2 7.4 27.8 7.7 27.4 7.8C26.9 8 26.3 8.1 25.8 8.3C25.4 8.5 25.1 8.7 24.8 8.9C24.3 9.2 23.8 9.4 23.3 9.7C21.6 10.7 20.2 12.2 18.9 13.7C18.2 14.3 17.5 15 17.1 15.8C16.6 16.5 16 17.5 15.7 18.3C15.5 18.6 15.4 19 15.3 19.4C15.1 19.9 14.8 20.4 14.6 20.9C14.2 22.1 14.2 24.8 14.2 26C14.2 27.4 14.2 28.7 14.4 30.1C14.5 30.8 14.4 31.5 14.6 32.2C14.7 32.7 15 33.1 15.2 33.6C15.4 34.1 15.5 34.6 15.7 35.1C15.9 35.5 16.2 35.9 16.4 36.2C16.8 36.8 17 37.4 17.4 38C18.1 38.9 19 39.8 19.8 40.7C20.4 41.2 22.8 43.2 22.9 43.7C23.2 44.8 21.5 45.2 20.8 45.5C20.1 45.8 19.2 46.5 18.4 46.1C17.3 45.7 17.7 44 17.4 43.1C17.2 42.5 16.8 42 16.5 41.5C14.8 39.3 12.8 39.7 11.2 41.8C9.8 43.6 10.5 45.9 11.8 47.6C12.5 48.4 13.8 49 14.1 50C14.2 50.9 12.6 54.2 12.8 55.3C13.1 56.3 14.1 56.9 14.9 56C15.3 55.6 16.4 53.2 16.5 52.6C16.6 51.8 16.6 50.9 17.1 50.2C17.7 49.6 18.6 49.5 19.3 49.2C19.7 49 20 48.8 20.4 48.7C20.9 48.5 21.4 48.4 22 48.2C22.6 47.9 23.2 47.5 23.9 47.2C24.9 46.8 26.2 45.6 27.3 45.5C28.3 45.4 29.1 46.2 30.1 46.3C31.4 46.4 32.6 46.3 33.9 46.3C34.8 46.3 35.8 46.4 36.7 46.3C38.1 46.2 38.6 45.8 39.8 45.5C40.3 45.4 40.8 45.3 41.2 45.1C41.7 45 42 44.7 42.5 44.5C42.9 44.2 43.4 44.1 43.8 43.9C46.8 42.1 49.4 39.4 51.2 36.4C51.5 35.8 51.6 35.2 51.9 34.7C52.1 34.2 52.4 33.8 52.6 33.3C52.7 32.7 52.8 32.1 52.9 31.6C53.2 30.7 53.6 29.9 53.7 29.1C53.9 27.4 53.9 24.9 53.5 23.3C53.4 22.7 53.1 22.1 52.9 21.5C52.7 21 52.7 20.4 52.6 19.9C52.4 19.3 52 18.8 51.8 18.3C51.3 17.1 50.7 16.1 49.9 15.1C49.2 14.1 48.6 12.9 47.7 12.2C45.8 10.6 43.7 9.3 41.5 8.3C41 8.1 40.5 8 40 7.8C39.5 7.6 39 7.2 38.4 7.1C36.8 6.8 35.2 7 33.6 7C32.5 7 31.2 6.8 30.1 7ZM48.9 20.4C48.2 20.9 47.5 20.2 46.9 19.9C46.5 19.7 46.1 19.5 45.8 19.3C44.8 18.8 43.8 18.2 42.8 17.8C42.3 17.6 41.8 17.6 41.4 17.4C40.9 17.2 40.5 16.9 40 16.7C39.4 16.6 38.8 16.6 38.2 16.4C37.7 16.2 37.3 15.8 36.8 15.7C35.9 15.4 34.8 15.6 33.8 15.4C33.1 15.2 32.4 14.9 31.7 14.8C30.2 14.4 28.7 14.4 27.3 14.4C26.5 14.4 24.2 14.5 23.9 13.8C24.4 12.8 27.9 12.6 29.1 12.6C30 12.6 31 12.5 31.9 12.7C32.5 12.8 33.1 13.1 33.8 13.2C34.7 13.3 35.6 13.3 36.5 13.5C37.1 13.6 37.7 14 38.3 14.2C38.9 14.4 39.6 14.4 40.2 14.6C40.7 14.8 41 15.1 41.4 15.2C41.8 15.4 42.3 15.5 42.7 15.7C43.1 15.9 43.5 16.2 43.9 16.4C45.3 17 47 17.8 48 18.9C48.4 19.3 49.1 19.8 48.9 20.4ZM25 17.4C26.4 17.2 28 17.4 29.3 17.6C30.4 17.8 31.6 17.5 32.7 17.7C33.6 17.8 34.3 18.2 35.2 18.5C35.9 18.7 36.7 18.6 37.4 18.8C38 19 38.5 19.3 39 19.6C39.5 19.7 39.9 19.8 40.3 19.9C40.9 20 41.4 20.4 41.8 20.6C43.5 21.4 45.2 22.2 46.9 23.1C47.4 23.4 47.8 23.8 48.2 24.1C48.9 24.5 49.7 24.9 50.2 25.5C50.7 26.2 50.8 28.3 49.4 28C48.4 27.8 47.6 26.9 46.8 26.4C46.4 26.2 45.9 26.1 45.5 25.8C44.9 25.4 44.2 25.1 43.5 24.8C43.1 24.6 42.8 24.3 42.5 24.2C42 24 41.6 23.9 41.2 23.7C40.8 23.6 40.4 23.3 40 23.2C39.5 23 39 22.9 38.5 22.7C38 22.5 37.5 22.2 37 22C36.4 21.9 35.7 21.9 35.1 21.7C34.5 21.5 33.9 21.1 33.2 20.9C32.5 20.8 31.8 20.8 31.1 20.8C30.4 20.7 29.8 20.6 29.1 20.4C28.5 20.2 28 20.1 27.4 20C25.7 19.8 23.9 20 22.2 20C21.5 20 19.8 20.2 19.3 19.7C18.5 19.1 19.2 18.1 19.9 17.8C21 17.4 23.6 17.6 25 17.4ZM18.5 23.1C19.1 23 19.6 23.5 19.7 24.1C19.9 25 19.7 26 19.8 26.9C19.9 27.9 20.4 28.7 20.6 29.7C20.8 30 20.8 30.4 20.9 30.8C21.3 32.3 22.3 33.6 23 35C23.2 35.3 23.5 35.6 23.7 36C24.1 37 23.2 37.8 22.2 37.8C21.6 37.8 21.1 37.5 20.6 37.1C19.8 36.4 18.3 33.5 17.9 32.3C17.7 31.9 17.6 31.5 17.6 31.1C17.5 30.2 17.1 29.4 16.9 28.5C16.7 27.1 16.5 23.4 18.5 23.1ZM23.8 23.1C24.3 23 24.8 23.2 25.1 23.7C25.4 24.2 25.3 24.9 25.4 25.4C25.5 25.9 25.8 26.4 25.9 26.9C26.1 27.5 26.1 28.1 26.3 28.6C26.5 29 26.7 29.3 26.9 29.7C27.1 30.1 27.3 30.7 27.5 31.1C28 32 28.8 32.7 28.1 33.7C27.9 34 27.6 34.2 27.2 34.3C25.4 34.8 24 30.6 23.4 29.3C22.9 28.4 23 27.5 22.9 26.5C22.9 25.5 22.4 23.4 23.8 23.1ZM29.1 23.2C30.1 23 31.1 23.7 32 23.9C32.9 24 33.8 23.9 34.6 24.3C36.6 25.2 34.1 27.9 33.3 28.9C31.6 31.1 30.2 30.7 29.3 28.2C29 27.6 28.7 27.1 28.5 26.5C28.2 25.6 27.9 23.4 29.1 23.2ZM25 40.3C25 40 25.2 39.8 25.4 39.6C25.9 39.2 26.4 38.9 26.9 38.5C27.8 37.9 28.5 37.2 29.4 36.5C31.1 35.2 32.8 33.9 34.2 32.2C35.3 30.9 36.4 29.4 37.5 28C37.9 27.6 38.2 27.1 38.7 26.7C39.6 25.9 41.2 26.4 41.1 27.7C41 29.1 39.6 30.2 38.8 31.3C38.3 32 37.9 32.8 37.3 33.4C35.4 35.6 32.7 38.1 30.4 39.7C28.8 40.9 27.7 42.8 25.6 41.2C25.3 41 25 40.8 25 40.3ZM32.1 42.7C31.9 41.7 34.6 39.9 35.4 39.3C36 38.7 36.6 38.1 37.2 37.5C37.9 36.8 38.7 36.1 39.4 35.3C39.8 34.7 40.2 34.1 40.6 33.5C41.1 33 41.6 32.5 42.1 31.9C42.7 31.2 43 30.2 43.6 29.5C44.4 28.6 45.8 28.8 46.2 30C46.5 31 45.1 32.5 44.6 33.4C43.8 34.7 42.5 35.8 41.4 36.9C39.8 38.5 38.3 40.1 36.5 41.4C35.6 42.1 33.1 44.1 32.1 42.7ZM48.3 33.9C49 34.9 46.2 37.5 45.5 38.3C45.1 38.6 44.5 39.3 44 39.2C44.3 38.6 44.8 38.2 45.2 37.7C46 36.7 47.1 34 48.3 33.9Z"/>'
    },
    {
      id: "washer-hand-wash",
      name: "Hand wash / delicates programme",
      category: "washer",
      aka: ["hand wash", "delicates", "silk", "gentle"],
      looksLike: ["hand in a bucket", "bucket with a hand", "hand in water", "tub with a hand"],
      meaning: "An extra-gentle programme that pretends to be you washing by hand: cool water, slow rocking movements and very little spinning.",
      action: "Use it for lingerie, silk and delicate items, but check your manual before trusting it with hand-wash-only labels. A mesh bag adds extra protection.",
      tip: "Some machines use a feather, flower or butterfly for their delicates programme instead, just to keep things interesting.",
      svg: HANDWASH
    },
    {
      id: "washer-steam",
      name: "Steam / anti-allergy",
      category: "washer",
      aka: ["steam", "allergy care", "hygiene", "anti-allergen", "refresh"],
      looksLike: ["cloud with lines", "steam cloud", "puff with three lines", "cloud", "bumpy cloud"],
      meaning: "Adds steam to the wash to help kill bacteria and dust mites and loosen dirt. As a separate programme, it can also refresh and de-wrinkle dry clothes, which is as close as a washing machine gets to ironing.",
      action: "Use it for bedding, baby clothes or allergy sufferers. Check the care labels first: steam is hot, so it's not for wool or delicates.",
      tip: "Steam programmes take longer and use more energy than a normal wash, so save them for when hygiene really matters.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.2 7C24.4 7.1 23.9 8.3 23.6 9C23 10.4 22.3 11.7 21.7 13.1C21.4 13.7 21.2 14.3 20.9 14.9C20.6 15.5 20.4 16.2 20.1 16.9C19.6 18.1 18.8 19.3 18.6 20.6C18.5 21.6 19.8 22.5 20.7 22C21.6 21.5 21.9 20.4 22.2 19.5C23 17.7 23.9 15.8 24.8 14C25.4 12.8 25.9 11.5 26.5 10.2C26.8 9.7 27.3 9 27.4 8.5C27.5 7.2 26.1 6.8 25.2 7ZM32.3 7C31.1 7.2 31.1 8.4 31 9.4C30.6 11.9 30.8 14.6 30.8 17.1C30.8 19.2 30.8 21.3 30.8 23.4C30.8 24.1 30.6 24.9 30.8 25.7C30.9 26.5 31.8 26.8 32.5 26.7C33.7 26.6 33.7 25.3 33.8 24.4C34 23.6 33.8 22.7 33.9 21.9C34.1 20.2 34.1 18.3 34.1 16.6C34.1 14.6 34.1 12.5 34.1 10.5C34.1 9.7 34.3 8.6 34.1 7.8C33.9 7.1 33 6.9 32.3 7ZM39.1 7C38.3 7.2 37.9 8.2 38 9C38.1 9.3 38.3 9.5 38.4 9.8C39 11.7 39.8 13.5 40.5 15.3C40.8 16.3 41.4 17.3 41.7 18.3C42.2 19.3 42.4 20.5 43 21.5C43.4 22.2 44 23.1 45 22.8C45.7 22.5 46.2 21.7 46.1 21.1C46.1 20.7 45.8 20.4 45.7 20.1C45.2 18.3 44.4 16.2 43.6 14.5C43 13.2 42.5 11.9 42 10.6C41.9 10.3 41.9 9.9 41.8 9.6C41.6 9.2 41.4 8.8 41.2 8.4C40.8 7.6 40.1 6.8 39.1 7ZM22.4 34.9C23 35.4 23.2 36.3 23.6 37C24.1 37.8 24.6 38.4 25.1 39.1C26.1 40.2 27.5 41.1 28.9 41.5C29.3 41.6 29.7 41.6 30.1 41.7C30.7 41.8 31.3 42 32 42C32.8 42 33.4 41.8 34.1 41.6C35.3 41.5 36.5 41.1 37.5 40.4C38.3 39.8 39.6 38.6 40.1 37.6C40.5 37.1 41 35.7 41.6 35.4C42.4 35.1 43 35.7 43.7 35.8C44.5 35.9 47.1 36 47.8 35.8C49.7 35.1 52.7 33.1 53.7 31.3C54 30.6 54.2 30.1 54.5 29.4C54.6 29.1 54.7 28.9 54.8 28.6C54.9 28 54.8 27.3 54.8 26.6C54.8 26.1 54.9 25.6 54.8 25.2C54.7 24.6 54 22.9 53.6 22.6C52.8 21.9 51.4 22.4 51.1 23.4C50.9 24 51.4 24.6 51.5 25.2C51.7 27.9 51.3 29.4 49.4 31.3C48.7 32 46.5 33 45.5 32.9C45.1 32.9 44.8 32.6 44.4 32.5C44 32.4 43.7 32.5 43.4 32.3C42.5 31.9 40.7 30.3 39.7 30.8C38.5 31.4 38.8 33 38.4 34.1C37.5 36 36.5 37.5 34.5 38.3C34.1 38.5 33.8 38.6 33.3 38.7C30.1 39.2 26.9 37.1 25.6 34.2C25.4 33.7 25.5 33 25.5 32.4C25.4 32 25.2 31.7 25.1 31.3C25 31 24.9 30.7 24.7 30.6C23.4 29.9 21.8 31.4 20.6 31.9C20.2 32 19.6 32 19.2 32C18.6 32 18 32 17.4 31.9C16.6 31.8 14.6 30.6 14.1 29.9C13.7 29.4 13.2 28.6 13 28C12.9 27.1 12.9 25.7 13 24.8C13.1 23.7 14.4 22 12.5 21.4C11.3 20.9 10.5 22.1 10.2 23.1C10.1 23.4 10.1 23.7 10 24C9.9 24.4 9.7 24.6 9.7 25C9.5 26.2 9.7 27 10 28.2C10.1 28.5 10.1 28.9 10.2 29.2C10.4 30.1 11.2 31.2 11.8 31.9C12.6 33.1 14.1 34.2 15.5 34.8C15.8 34.9 16.1 34.9 16.3 35C16.6 35.1 16.9 35.3 17.2 35.3C18.1 35.4 18.9 35.4 19.8 35.4C20.6 35.4 21.5 34.6 22.4 34.9ZM21.9 50.1C22.6 50.7 22.8 51.8 23.3 52.5C23.6 53 24.6 54.2 25 54.6C26 55.5 27.6 56.6 28.8 56.9C29.5 57.1 33.5 57.1 34.3 57C35.1 56.8 36.7 56 37.3 55.5C38.1 54.9 39.2 53.8 39.7 53C40.1 52.3 40.6 51 41.1 50.5C42.1 50.4 43 51.2 43.9 51.2C44.8 51.2 45.8 51.3 46.6 51.2C46.9 51.1 47.2 51 47.5 50.9C49.8 50.1 51.3 48.9 52.9 47.1C53.4 46.5 54.2 44.9 54.3 44.2C54.5 43.3 54.4 40.8 54.3 39.9C54.3 39.6 54.1 39.3 54 39.1C53.5 38.1 53.2 37.4 51.9 37.6C51.1 37.7 50.6 38.5 50.7 39.2C50.7 39.4 50.9 39.6 50.9 39.9C51 40.5 51.1 41.1 51.2 41.8C51.3 43.6 50.3 45.6 48.9 46.8C48.4 47.2 47.8 47.6 47.2 47.8C46.6 48 43.5 48 43 47.7C42.2 47.3 40.3 45.7 39.5 46C39.2 46.1 38.8 46.4 38.6 46.7C38.4 47 38.2 48.9 37.9 49.5C37.2 51.2 36.1 52.8 34.5 53.5C34.2 53.6 33.9 53.6 33.6 53.7C32.7 54.1 31.7 54.2 30.7 54.1C30.4 54 30 53.8 29.7 53.7C29.4 53.6 29.1 53.6 28.8 53.5C27.1 52.8 25.8 50.6 25.1 49C24.7 48 25.4 46.6 24 45.8C23.8 45.7 23.6 45.6 23.3 45.6C22.8 45.6 20.8 47 20 47.3C19.6 47.4 19.2 47.4 18.7 47.4C18.2 47.4 17.7 47.4 17.2 47.3C16.3 47.2 14.5 46 13.9 45.2C12.8 43.9 12.5 43.3 12.5 41.6C12.5 41.1 12.5 40.6 12.6 40.1C12.7 39.4 13.2 38.8 13.2 38C13.1 37.1 12.4 36.5 11.6 36.6C10.3 36.6 9.7 38.2 9.6 39.3C9.5 39.8 9.2 40.3 9.2 40.9C9 41.8 9.3 42.4 9.6 43.2C9.7 43.5 9.6 43.9 9.7 44.3C9.8 44.9 10.3 45.8 10.7 46.3C11.9 47.9 12.7 49 14.6 49.8C14.9 50 15.1 50.1 15.4 50.2C15.7 50.3 15.9 50.2 16.2 50.3C17 50.5 17.8 50.8 18.7 50.7C19.8 50.7 20.9 50 21.9 50.1Z"/>'
    },
    {
      id: "washer-drum-clean",
      name: "Drum clean / tub clean",
      category: "washer",
      aka: ["tub clean", "drum clean", "self clean", "machine care", "hygiene clean"],
      looksLike: ["drum with drops", "circle with drops", "drum with water drops", "broken circle with drops", "porthole with drops"],
      meaning: "A hot cleaning cycle for the empty machine, to remove limescale, detergent residue, mould and smells. Many machines light it up as a reminder every few dozen washes.",
      action: "Run it with the drum empty (yes, no laundry at all), optionally with a washing-machine cleaner. Afterwards, wipe the rubber door seal and leave the door ajar.",
      tip: "A smelly machine usually means too many cool washes. Leaving the door and detergent drawer open between washes helps a lot.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M42.6 7.3C42.3 7.4 42.1 7.5 41.9 7.7C41.6 8.1 41.5 8.5 41.3 8.9C40.6 10 40.2 11.2 39.4 12.2C39.1 12.7 38.7 13 38.4 13.4C38 13.9 37.8 14.5 37.4 15.1C37 15.5 36.6 16 36.2 16.4C35.3 17.5 34.7 18.9 34.1 20.1C33.9 20.5 33.6 20.9 33.5 21.3C33.3 21.6 33.3 22 33.2 22.4C33 23.3 32.5 24.1 32.6 25.1C32.7 25.7 33 26.3 33.2 26.9C33.3 27.5 33.4 28.2 33.7 28.8C34.9 31.2 36.7 33.3 39.2 34.4C39.7 34.6 40.1 35 40.7 35.1C41.4 35.2 42.2 35.2 43 35.2C43.7 35.2 44.4 35.2 45.1 35C45.6 34.9 45.9 34.7 46.3 34.5C46.7 34.3 47.1 34.2 47.5 34.1C49.1 33.4 50.5 31.8 51.2 30.4C51.7 29.5 51 28.5 50 29C49.2 29.4 48.6 30.5 47.9 31.1C46.7 32.1 44.8 33.1 43.3 33.3C42.3 33.4 41.5 32.9 40.6 32.6C38.3 31.7 37 30.6 35.9 28.3C35.7 27.8 35.3 27.3 35.2 26.8C35.1 26.1 35.2 25.5 35.2 24.9C35.2 23.4 35.2 22.8 35.9 21.4C36.1 20.8 36.4 20.3 36.7 19.7C37 19.2 37.5 18.8 37.8 18.2C38.1 17.7 38.4 17.1 38.8 16.6C39.3 16 39.9 15.4 40.4 14.7C41 13.9 41.5 12.4 42.5 12C44 11.5 44 14.6 45.7 14.2C45.9 14.2 46.1 14.1 46.3 13.9C46.7 13.5 46.7 12.9 46.4 12.5C46.1 12 45.7 11.5 45.4 11C44.9 10.1 44.5 9.1 44 8.2C43.7 7.8 43.2 7.3 42.6 7.3ZM51 11.9C50 12.1 49.8 13.3 49.4 14C48.8 15.1 47.9 16 47.3 17.1C47.1 17.5 47 18 46.7 18.4C46.4 19 46.2 19.4 46.1 20.1C46 20.9 46 22.1 46.2 22.9C47 24.8 49.6 26.7 51.7 26.4C52.4 26.3 53.3 26.1 54 25.8C55.8 24.7 57.6 21.6 56.6 19.6C56.1 18.5 55.6 17.3 54.9 16.4C54.5 15.9 54 15.4 53.7 14.9C53.4 14.5 53.2 14.1 52.9 13.7C52.5 13.1 52 11.8 51 11.9ZM25.6 15.2C25.1 15.2 24.6 15.2 24.1 15.4C23.6 15.6 23.1 15.8 22.6 16C22.1 16.1 21.6 16.1 21.1 16.2C20.8 16.4 20.5 16.6 20.1 16.8C17.5 17.9 14.4 19.6 12.6 21.9C11.4 23.3 10.5 24.8 9.7 26.4C9.5 26.7 9.2 27 9 27.4C8.8 27.8 8.8 28.2 8.6 28.6C8.4 29.1 8.2 29.4 8.1 29.8C7.9 30.5 7.9 31.2 7.8 31.8C7.6 32.5 7.3 33.1 7.2 33.8C6.9 34.8 6.9 35.9 7 36.9C7 38 7.6 39 7.8 40.1C7.9 40.7 7.9 41.2 8 41.8C8.1 42.4 8.5 42.9 8.7 43.5C9.2 44.8 9.8 46.1 10.6 47.3C10.9 47.7 11.2 48.1 11.5 48.5C12 49.2 12.4 50 13.1 50.5C13.8 51 14.4 51.6 15.1 52.1C15.6 52.5 16 52.9 16.5 53.1C16.8 53.3 17.2 53.5 17.5 53.7C18.2 54.1 18.9 54.6 19.7 55C20.1 55.1 20.6 55.2 21.1 55.4C21.4 55.5 21.7 55.8 22 55.9C22.8 56.2 23.6 56 24.4 56.1C25.3 56.3 26.1 56.6 27.1 56.7C28.4 56.9 29.7 56.3 30.9 56.1C31.6 56 32.3 56.1 33 56C33.5 55.9 34 55.6 34.5 55.4C34.9 55.2 35.3 55.1 35.6 55C36 54.8 36.2 54.6 36.6 54.4C37.5 54 38.5 53.5 39.4 52.9C40.9 52 42 50.5 43.3 49.3C44.6 47.9 46.1 45.4 46.8 43.5C47.1 42.8 47.2 42 47.5 41.3C47.9 40.5 48.3 38.4 47.1 38C46.2 37.8 45.7 39.1 45.4 39.8C45.2 40.4 45.2 41.1 45 41.7C44.9 42.1 44.6 42.4 44.5 42.8C44.3 43.2 44.2 43.6 44 44C43.5 45.2 42.8 46.1 42.1 47.1C40.3 49.6 38.2 51.4 35.3 52.6C34.9 52.8 34.5 53.1 34.1 53.2C33.6 53.3 33.2 53.4 32.8 53.5C31.7 53.8 30.6 54.7 29.5 54C28 53.2 29.8 48.9 27.8 49C27.1 49 27 49.8 27 50.4C27 51.4 27.4 53.8 26.1 54.2C24.8 54.5 23.8 53.9 22.6 53.5C22.1 53.4 21.5 53.3 21.1 53.1C20.7 53 20.4 52.7 20 52.6C15.8 50.8 12.6 47.1 10.8 42.9C10.6 42.6 10.6 42.2 10.4 41.8C10.2 41.2 9.8 40.7 9.8 40C9.7 39.4 9.7 38.6 9.7 38C9.7 36.3 9.5 33.4 9.8 31.9C9.9 31 10.4 30.3 10.7 29.5C10.9 28.7 11.7 26.6 12.5 26.4C13.6 26.1 16.4 29.7 17.5 28.4C18.8 27 14.8 25.4 14.5 24.4C14.3 24 14.4 23.5 14.6 23.1C14.9 22.7 17.6 20.5 18.2 20.2C19.4 19.4 20.7 19.1 21.9 18.5C22.3 18.3 22.7 18 23.1 18C23.7 17.9 24.3 17.9 24.9 17.9C25.5 17.8 26.1 17.6 26.7 17.5C27.3 17.5 27.9 17.7 28.6 17.7C29.4 17.8 31.9 18.2 32.2 17.2C32.5 16.4 31.6 15.8 31 15.4C30.2 15.1 26.6 15 25.6 15.2ZM51.1 15.6C52.3 15.5 54.2 19.2 54.4 20.2C54.7 22.3 53.8 24.3 51.4 24.3C49.6 24.3 47.6 22.3 48 20.4C48.2 19.3 48.9 18.5 49.5 17.6C49.8 17.1 50 16.5 50.4 16C50.6 15.8 50.9 15.7 51.1 15.6ZM27.2 31.3C24.6 31.6 22.9 33.8 23.3 36.4C23.4 37 23.3 37.6 23.5 38.2C24.2 40 26.4 40.7 28.2 40.6C30.6 40.5 32.8 37.8 32.4 35.4C32.2 34 31.4 32.3 29.9 31.7C29.6 31.5 29.2 31.5 28.8 31.4C28.3 31.4 27.8 31.2 27.2 31.3ZM27.5 33.4C28.7 33.2 30.1 34.6 30.2 35.8C30.3 36.9 29.1 38.7 27.9 38.7C27.3 38.7 25.9 37.8 25.5 37.3C25.3 37 25.2 36.5 25.2 36.1C25.2 34.7 26 33.6 27.5 33.4Z"/>'
    },
    {
      id: "washer-add-garment",
      name: "Add garment / pause and add",
      category: "washer",
      aka: ["add item", "add wash", "addwash", "pause and add", "add laundry", "forgotten sock"],
      looksLike: ["t-shirt with a plus", "shirt with a plus sign", "top with a plus", "clothes plus"],
      meaning: "Lets you pause the programme and add a forgotten item after it has started. The lone sock's second chance.",
      action: "Press it and wait for the door to unlock (only possible while the water level and temperature are low). Add the item, close the door and press Start again.",
      tip: "After a certain point in the cycle, or above a certain temperature, the machine won't let you add anything.",
      svg: SHIRT + '<circle class="knock" cx="49" cy="47" r="10" stroke-width="0"/><path d="M49 41 V53 M43 47 H55"/>'
    },
    {
      id: "washer-temperature",
      name: "Temperature",
      category: "washer",
      aka: ["temp", "°C", "heat", "water temperature"],
      looksLike: ["thermometer", "stick with a bulb", "lollipop", "thermometer with lines"],
      meaning: "Sets how hot the wash water gets, usually from cold up to 90 °C.",
      action: "Press it to cycle through the temperatures, and match the number in the washtub on your care labels. That number is a maximum.",
      tip: "Lower is often fine: modern detergents clean well at 30 °C, and every step down saves energy.",
      svg: '<path d="M24 37.92 V14 A5 5 0 0 1 34 14 V37.92 A9.5 9.5 0 1 1 24 37.92 Z"/>' +
        '<circle cx="29" cy="46" r="5" fill="currentColor" stroke="none"/><path d="M29 46 V22" stroke-width="3"/>' +
        '<path d="M39 15 H45 M39 23 H45 M39 31 H45" stroke-width="3"/>'
    },
    {
      id: "washer-water-supply-fault",
      name: "Water supply problem (tap)",
      category: "washer",
      urgency: "soon",
      aka: ["no water", "tap light", "water inlet error", "check water supply", "4C error", "IE error"],
      looksLike: ["tap", "faucet", "water tap", "tap outline", "spigot"],
      meaning: "The machine isn't getting enough water. The tap may be off, the inlet hose kinked, the little filter in the hose blocked, or the water pressure too low.",
      action: "Check the tap behind the machine is fully open and the hose isn't squashed, then restart. If it keeps happening, turn the tap off, unscrew the hose at the machine end and clean the mesh filter.",
      tip: "A classic after plumbing work or a freezing night, or when someone turned the tap off before going on holiday.",
      // Bosch: a plain outline tap, no drop or wall plate.
      svg: '<g transform="translate(2.5,6)"><path d="M8 19 H37 C46 19 51 25 51 33 V37 H43 V33 C43 29.5 40.5 27 37 27 H8 Z M25 19 V12 M17 11 H33"/></g>'
    },
    {
      id: "washer-softener",
      name: "Fabric softener compartment",
      category: "washer",
      aka: ["softener", "conditioner", "fabric conditioner", "flower compartment"],
      looksLike: ["flower", "star", "daisy", "flower in the drawer", "asterisk"],
      meaning: "The flower (or star) compartment in the detergent drawer is for fabric softener or conditioner only. The machine flushes it in during the final rinse.",
      action: "Pour softener up to the MAX line and no further, and never put detergent in here. Overfilling makes it siphon away too early.",
      tip: "The other compartments: I = prewash detergent, II = main wash detergent. Skip softener for towels and sportswear, as it reduces absorbency and breathability.",
      // Traced from IEC 60417.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26 19.4C25.6 19.3 25.2 19.1 24.8 19C24 18.8 23.1 18.7 22.2 18.9C18.8 19.3 16.6 23 17.6 26.2C17.8 27.1 18.3 27.9 18.9 28.6C19.2 29 19.9 29.3 20.1 29.7C19.9 30 19.5 30.2 19.3 30.5C18.6 31.1 18 31.9 17.7 32.7C16.6 35.9 18.4 39.6 21.7 40.4C22.8 40.7 23.9 40.7 24.9 40.4C25.3 40.2 25.6 40 26 40C26.2 40.4 26.2 40.7 26.3 41.1C26.5 42 26.9 42.9 27.5 43.6C29.8 46.2 33.9 46.4 36.2 43.9C36.9 43.1 37.4 42.2 37.7 41.2C37.8 40.8 37.7 40.4 38 40C38.4 40 38.7 40.2 39.1 40.4C40.1 40.7 41.1 40.7 42.1 40.5C45.6 39.7 47.4 36 46.2 32.7C45.9 31.9 45.4 31 44.7 30.4C44.4 30.2 44.1 30 43.9 29.7C44.1 29.4 44.5 29.2 44.8 28.9C45.5 28.2 46.1 27.2 46.4 26.2C47.3 22.9 45.1 19.3 41.7 18.9C40.9 18.7 40 18.8 39.1 19C38.8 19.1 38.4 19.4 38 19.4C37.6 19 37.7 18.1 37.5 17.6C37.3 17 37 16.5 36.6 16C34.5 13.1 30 12.9 27.6 15.6C27.2 16.2 26.8 16.8 26.5 17.5C26.3 18 26.4 19 26 19.4ZM32 27.9C31.4 27.6 30.3 25.2 29.9 24.5C29.1 23.1 27.8 21.6 27.7 20C27.2 15.3 33.4 13.4 35.8 17.4C36.1 18.1 36.4 18.9 36.3 19.6C36.2 21.2 35.2 22.6 34.4 24C34 24.8 32.6 27.5 32 27.9ZM7.1 18.9C6.9 19.7 7.9 24.5 8.1 25.8C8.3 27.6 8.7 29.4 8.9 31.2C9.4 35 10.1 38.8 10.6 42.6C10.9 44.4 11.2 46.2 11.5 48C11.6 48.7 11.5 49.7 11.9 50.2C12.8 50.5 13.9 50.3 14.8 50.3C16.9 50.3 19 50.3 21.2 50.3C28 50.3 34.8 50.3 41.7 50.3C44.1 50.3 46.6 50.3 49 50.3C49.8 50.3 51.4 50.5 52.1 50.1C52.5 49.5 53.1 44 53.3 42.9C54 37.4 55 31.9 55.8 26.4C56.1 24.6 56.4 22.8 56.7 20.9C56.8 20.3 57.1 19.4 56.8 18.8C56.5 18.6 56 18.5 55.6 18.7C55.2 19.4 54.5 24.8 54.4 26C53.7 31.1 52.6 36.1 52 41.2C51.8 43 51.5 44.9 51.2 46.6C51.1 47.3 51.1 48.2 50.7 48.7L13.2 48.7C12.8 48 12.2 43.1 12.1 41.9C11.1 36.4 10.5 30.8 9.5 25.3C9.3 24.2 8.8 19.2 8.4 18.7L7.1 18.9ZM30.4 28.8C30 29.1 27 28.9 26.3 28.9C24.7 28.9 22.9 29.2 21.4 28.6C16 26.2 20 18 25.3 20.9C26.7 21.6 27.3 23.2 28.1 24.5C28.6 25.3 30.4 28.1 30.4 28.8ZM33.5 28.8C33.6 28 35.4 25.4 35.9 24.5C36.6 23.2 37.2 21.8 38.5 21C39.3 20.4 40.4 20.2 41.3 20.3C45.7 20.9 46.5 26.8 42.5 28.6C41.1 29.2 39.2 28.9 37.7 28.9C36.9 28.9 34 29.2 33.5 28.8ZM30.4 30.6C30.4 31.4 28.6 34.1 28.1 34.9C27.4 36.2 26.8 37.6 25.5 38.4C24.7 39 23.6 39.2 22.6 39.1C18.2 38.3 17.4 32.3 21.7 30.7C23.1 30.2 24.8 30.5 26.3 30.5C27 30.5 30 30.3 30.4 30.6ZM33.6 30.6C34.3 30.3 35.4 30.5 36.2 30.5C38.2 30.5 41.4 30.1 43 31.1C45.6 32.7 45.8 36.4 43.4 38.2C42.6 38.8 41.5 39.2 40.5 39.1C37.6 38.8 36.5 36.1 35.2 33.8C34.9 33.2 33.4 31.1 33.6 30.6ZM32 31.5C32.7 32 34 34.7 34.5 35.6C35.3 36.9 36.4 38.3 36.3 40C36.1 45.9 27 45.4 27.7 39.3C27.9 37.7 29.1 36.3 29.8 35C30.2 34.3 31.4 31.7 32 31.5Z"/>'
    },

    // =====================================================================
    // TUMBLE DRYER
    // =====================================================================
    {
      id: "dryer-clean-lint-filter",
      name: "Clean lint filter",
      category: "dryer",
      urgency: "soon",
      aka: ["clean fluff filter", "lint screen", "filter light", "clean filter"],
      looksLike: ["grid", "mesh", "net", "square with criss-cross lines", "waffle", "sieve"],
      meaning: "The fluff (lint) filter is full or needs a clean. A clogged filter makes drying slow and expensive, and lint build-up is a fire risk.",
      action: "Pull out the filter (usually in the door opening), peel or brush off the fluff and slide it back in. Ideally, do this after every load.",
      tip: "If it looks clean but the light stays on, rinse the filter under the tap and let it dry. Fabric softener can leave an invisible film that blocks the mesh.",
      // Samsung, Hotpoint, LG: a rectangular mesh.
      svg: '<rect x="12" y="11" width="40" height="42" rx="3"/><path d="M22 11V53M32 11V53M42 11V53M12 21H52M12 32H52M12 43H52" stroke-width="2.5"/>'
    },
    {
      id: "dryer-empty-water",
      name: "Empty water container",
      category: "dryer",
      urgency: "soon",
      aka: ["water tank full", "empty tank", "condensate container", "drain tank"],
      looksLike: ["container with water and a drop", "tank with a drop", "box with waves and a drop", "water tank", "bucket with a drop"],
      meaning: "The water tank is full. Condenser and heat-pump dryers collect the water from your clothes in a tank, and the dryer will stop (or won't start) until you empty it.",
      action: "Pull out the water container (often a drawer at the top, or behind the bottom flap), pour it down the sink and push it fully back in.",
      tip: "If the dryer stands near a drain or sink, most models can pipe the water away through a hose, and then you'll never have to empty the tank again.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.8 8C30.9 8.2 30 9.7 29.4 10.4C28.7 11.3 28 12.2 27.3 13.2C25.9 15.1 24 17.1 23.8 19.6C23.6 20.8 23.6 22.1 24 23.2C24.6 25.2 26.6 27.7 28.5 28.6C28.8 28.7 29.2 28.7 29.5 28.8C30.4 29.1 31.1 29.2 32 29.2C33.7 29.2 35.1 28.6 36.5 27.7C39.9 25.5 40.4 23.2 40.2 19.4C40.2 18.2 39.4 17.2 38.8 16.2C37.5 14.1 35.9 12.1 34.4 10.2C33.9 9.7 32.6 7.8 31.8 8ZM31.9 11.4C32 11.4 32.2 11.4 32.4 11.6C32.8 11.9 33 12.6 33.3 13C33.7 13.6 34.1 14.2 34.6 14.7C35.9 16.2 37.3 18 37.7 20C38.2 22.7 36.2 25.8 33.5 26.4C32.7 26.6 31.9 26.7 31 26.6C30.4 26.5 29.9 26.2 29.4 25.9C27.2 24.7 25.8 22.6 26.2 20.1C26.5 18 28.2 16.4 29.4 14.7C29.9 14.1 31.3 11.6 31.9 11.4ZM8.2 21.1C6.7 21.4 7.1 24 7.1 25.1C7.1 29.2 7.1 33.4 7.1 37.5C7.1 40.1 7.1 42.6 7.1 45.1C7.1 46.5 7 48 7.2 49.3C7.7 51.3 9.6 54.2 11.6 55.1C13 55.7 14.4 55.7 15.9 55.7C16.4 55.7 16.9 55.7 17.4 55.7C18.1 55.9 18.9 55.8 19.6 55.8C21.1 55.8 22.6 55.8 24.1 55.8C31.2 55.8 38.4 55.7 45.6 55.7C47 55.7 48.5 55.9 49.9 55.7C51.9 55.5 54.4 54 55.6 52.3C57 50.2 56.9 47.9 56.9 45.5C56.9 42.5 56.9 39.5 56.9 36.5C56.9 33.3 56.9 30.2 56.9 27C56.9 25.5 57 23.9 56.9 22.3C56.9 21.2 55.3 20.6 54.7 21.6C54.3 22.3 54.5 24.1 54.5 24.9C54.5 27.2 54.4 29.6 54.4 32C54.4 33 54.7 35.1 53.9 35.7C53.5 36 53 36 52.6 36.3C51.6 36.9 49.8 38.6 48.6 38.6C48.1 38.5 47.6 37.9 47.1 37.6C46.2 36.9 44.7 35.9 43.5 35.7C41.7 35.5 40.4 37 39 37.9C38.5 38.2 38 38.6 37.4 38.5C36.8 38.5 36.3 38 35.9 37.6C34.8 36.8 33.1 35.6 31.7 35.7C29.8 36 27.8 38.6 26.2 38.6C24.7 38.5 22.9 35.4 20.3 35.8C18.4 36 17.2 37.9 15.5 38.5C15.2 38.6 14.9 38.6 14.6 38.5C14.1 38.3 13.6 37.8 13.2 37.5C12.6 37 11.9 36.6 11.3 36.3C10.8 36 10.3 35.9 9.9 35.5C9.4 35.1 9.6 33.3 9.6 32.6C9.6 30.7 9.6 28.8 9.6 26.9C9.6 26 9.7 25.1 9.6 24.2C9.5 23.2 10.1 20.8 8.2 21.1ZM54.1 38.8C54.6 39.3 54.4 42 54.4 42.8C54.4 44.6 54.5 47 54.3 48.7C54 50.5 52.5 52.3 50.8 53C49.7 53.4 48.3 53.2 47.1 53.2C44.9 53.2 42.6 53.2 40.4 53.2C34.4 53.2 28.3 53.2 22.3 53.2C20.4 53.2 18.4 53.2 16.5 53.2C15.7 53.2 14.8 53.4 14 53.2C13.3 53 12.8 52.6 12.2 52.3C8.9 50.3 9.6 46.4 9.6 43.1C9.6 42.1 9.4 40 9.7 39.2C9.7 39 9.8 38.9 10 38.8C10.9 38.7 13.1 41 14.7 41.1C15.5 41.1 16.5 41 17.2 40.5C18.2 40 19.5 38.5 20.7 38.5C22.1 38.4 24 40.9 25.7 41.1C28.7 41.5 30 38.7 31.9 38.5C33.2 38.3 35.4 41 37.3 41.1C40.2 41.2 41.5 38.4 43.4 38.4C44.1 38.4 44.6 39.1 45.1 39.4C46.3 40.3 47.7 41.2 49.2 41.1C49.8 41.1 50.6 40.8 51.1 40.5C51.9 40 53.2 38.6 54.1 38.8Z"/>'
    },
    {
      id: "dryer-clean-condenser",
      name: "Clean condenser / heat-pump filter",
      category: "dryer",
      urgency: "soon",
      aka: ["clean condenser", "clean heat exchanger", "base filter", "clean heat pump filter"],
      looksLike: ["box with three lines", "rectangle with lines", "grille", "vent", "radiator box"],
      meaning: "The condenser, or the extra filter at the bottom of a condenser or heat-pump dryer, is clogged with fluff and needs cleaning.",
      action: "Open the flap at the bottom front and take out the condenser or base filter. Rinse off the fluff under the tap, let it drip dry and refit it. Your manual shows how it comes apart.",
      tip: "A blocked condenser is the most common reason a heat-pump dryer suddenly takes hours to dry a load.",
      // Hotpoint, Beko, LG, AEG: a rectangle with separate straight lines.
      svg: '<rect x="10" y="12" width="44" height="40" rx="3"/><path d="M18 22H46M18 32H46M18 42H46" stroke-width="3"/>'
    },
    {
      id: "dryer-anti-crease",
      name: "Anti-crease",
      category: "dryer",
      aka: ["wrinkle guard", "wrinkle prevent", "crease guard", "anti-wrinkle", "extended tumble"],
      looksLike: ["t-shirt with a wavy line", "shirt with a wave", "top with a squiggle", "shirt"],
      meaning: "After drying, the drum keeps turning briefly every few minutes with cool air, so clothes don't settle into creases while they wait for you.",
      action: "Turn it on if you won't be there when the cycle ends. Opening the door stops it.",
      tip: "The display may say 'End' or keep blinking while it's in anti-crease mode. Whatever the blinking suggests, it's finished and you can open it any time.",
      // AEG: a T-shirt with a zigzag crease.
      svg: '<g transform="translate(1,0)"><path d="M23 10 L9 18 L14 28 L19 25 V52 H43 V25 L48 28 L53 18 L39 10 C37 15 25 15 23 10 Z"/></g><path d="M32 16V30L27 35L31 38V51" stroke-width="3"/>'
    },
    {
      id: "dryer-cupboard-dry",
      name: "Cupboard dry",
      category: "dryer",
      aka: ["closet dry", "normal dry", "store dry", "dry to put away"],
      looksLike: ["wardrobe", "cupboard", "closet", "cabinet", "box with two doors"],
      meaning: "Dries clothes completely, ready to fold and put straight into the cupboard. The setting most people mean when they just say 'dry'.",
      action: "Use it for everyday cottons and anything you won't be ironing.",
      tip: "The moisture sensor stops the dryer once the clothes are dry, so this is usually more efficient than a fixed timer.",
      svg: WARDROBE
    },
    {
      id: "dryer-iron-dry",
      name: "Iron dry",
      category: "dryer",
      aka: ["damp dry", "ready to iron"],
      looksLike: ["iron", "clothes iron", "iron without dots", "flat iron"],
      meaning: "Leaves the laundry slightly damp, which makes ironing much easier. The dryer still won't do the ironing for you, sadly.",
      action: "Use it for shirts, linen and cotton you plan to iron, and iron them soon after the cycle.",
      tip: "Slightly damp fabric irons faster and smoother than bone-dry fabric, so this saves effort, not just energy.",
      // Traced from the GINETEX care-symbol font (ISO 3758).
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.8 14.4C18.5 14.9 18.5 17.3 18.8 17.8C19.4 18.2 20.3 18 20.9 18C22.6 18 24.2 18 25.9 18C30.5 18 35.1 18 39.7 18C40.9 18 45 17.8 45.9 18.1L49 29.6C46.9 29.8 44.6 29.6 42.4 29.6C38 29.6 33.5 29.6 29.1 29.6C25.2 29.6 21.3 29.4 17.8 31.6C14.9 33.5 13.1 37.5 11.3 40.4C9.9 42.6 8.5 44.9 7.1 47.1C6.7 47.7 5.7 48.8 6 49.5C6.5 50 8.2 49.8 8.9 49.8C11.5 49.8 14 49.8 16.5 49.8C26.5 49.8 36.5 49.8 46.5 49.8C49.4 49.8 52.2 49.8 55 49.8C55.8 49.8 57.6 50 58.1 49.5C58.4 48.7 57.5 46.4 57.3 45.5C56.3 42.1 55.4 38.7 54.5 35.4C53.2 30.5 51.9 25.6 50.6 20.8C50.3 19.8 49.2 14.9 48.8 14.5C48.4 14.1 47.5 14.2 47 14.2C45.3 14.2 43.7 14.2 42 14.2C36.4 14.2 30.8 14.2 25.1 14.2C23.6 14.2 22.1 14.2 20.7 14.2C20.1 14.2 19.3 14.1 18.8 14.4ZM50 33.4L53.5 46L12.2 46C12.6 45 13.8 43.4 14.4 42.4C16 39.9 18.1 35.6 20.7 34.1C23 32.9 27 33.3 29.6 33.3C34.1 33.3 38.7 33.3 43.3 33.3C44.8 33.3 46.2 33.3 47.7 33.3C48.5 33.3 49.3 33.3 50 33.4Z"/>'
    },
    {
      id: "dryer-extra-dry",
      name: "Extra dry (cupboard dry +)",
      category: "dryer",
      aka: ["cupboard dry plus", "very dry", "cupboard plus"],
      looksLike: ["wardrobe with a plus", "cupboard with a plus", "closet plus", "cabinet with a plus sign"],
      meaning: "Dries even more thoroughly than cupboard dry, for thick items like towels, jeans or bedding that stay stubbornly damp in the seams.",
      action: "Use it for heavy cottons, but not for everyday clothes: over-drying wastes energy and can shrink things.",
      tip: "AEG labels this symbol 'cupboard dry +'. If items are still damp after 'cupboard dry', try this rather than running a second full cycle.",
      svg: '<rect x="9" y="13" width="32" height="40" rx="2"/><path d="M25 13 V53 M21 30 V36 M29 30 V36 M13 53 V57 M37 53 V57"/>' +
        '<path d="M50 7 V21 M43 14 H57"/>'
    },
    {
      id: "dryer-low-heat",
      name: "Low heat / delicate",
      category: "dryer",
      aka: ["low temperature", "gentle", "delicates", "low heat"],
      looksLike: ["feather", "quill", "feather with lines", "square with circle and one dot", "one dot"],
      meaning: "Dries at a lower temperature for delicate, synthetic or heat-sensitive items. Bosch marks it with a feather; other makers use a thermometer or simply print the word.",
      action: "Use it for anything whose label shows the tumble-dry symbol with one dot. It takes longer, but it saves your clothes.",
      tip: "Some dryers use the care-label symbol itself here: a circle in a square with one dot.",
      // Traced from Bosch's own symbol artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M20.3 23.4C20.9 22.8 20.8 21.2 21 20.4C21.3 18.8 22.4 16.9 23.4 15.6C24 14.8 26.2 13.8 26.4 13C26.7 12.1 25.6 11.8 24.9 12.1C22.1 13.5 20.1 16.1 19.2 19.1C19 19.8 18.5 21.9 18.7 22.5C18.8 22.9 19.1 23.2 19.4 23.3C19.7 23.5 20 23.5 20.3 23.4ZM36.6 13.4C37.2 11.2 33 12.7 32.2 13.1C29.6 14.4 27.3 17.6 26.3 20.3C26 21.1 27.2 21.9 27.9 21.4C28.3 21.2 28.7 20 28.9 19.6C29.5 18.4 30.3 17.1 31.3 16.2C32.1 15.6 32.9 15 33.8 14.6C34.7 14.2 36 14.3 36.6 13.4ZM51.7 15.2C51.2 14.2 48.9 14.4 47.9 14.4C44.1 14.4 40.8 14.8 37.7 17.4C37 17.9 34.6 19.6 34.9 20.6C35.1 21.2 36 21.3 36.4 20.9C36.8 20.6 37.1 20.3 37.5 20C39.1 18.7 40.9 17.7 42.8 16.9C43.1 16.8 43.4 16.8 43.7 16.8C44.2 16.7 44.8 16.5 45.3 16.4C46.7 16.2 48.2 16.4 49.6 16.4C50.6 16.4 51.8 16.6 51.7 15.2ZM15.3 15.8C13.7 16.2 11.5 20.3 11.5 21.8C11.4 23.6 11.3 25.3 11.6 27.1C11.7 27.7 12 28.7 12.8 28.6C13.4 28.6 13.7 28.1 13.6 27.6C13.5 25.6 13.1 23.8 13.6 21.9C14 20.5 14.6 19.4 15.4 18.2C15.7 17.8 16 17.5 16.2 17.1C16.5 16.4 16 15.7 15.3 15.8ZM46 20.3C45.1 20.5 44.2 20.4 43.4 21.1C42.9 21.6 43 22.3 43.6 22.6C44.4 22.9 45.5 22.5 46.4 22.5C47.1 22.5 47.7 22.1 48.5 22.2C50.1 22.2 52 23.2 53.4 24C53.9 24.3 54.4 24.9 55 25.1C55.8 25.4 56.2 24.4 55.9 23.7C55.5 23 54.1 22 53.3 21.6C51.4 20.5 49.9 20.3 47.7 20.3C47.1 20.3 46.6 20.3 46 20.3ZM9.5 40.1C8.7 39.7 8.7 38.4 8.5 37.6C8 35.8 7.8 33.9 8.1 32.1C8.3 31.2 8.6 30.4 8.7 29.5C8.8 28.8 8.2 28.1 7.4 28.4C6.2 28.8 6 32.1 6 33.2C6 35.8 6 37.6 6.9 40C7.2 40.7 8.6 42.9 8.6 43.2C8.7 43.4 8.1 46.3 8 46.8C7.8 47.6 7.5 50.7 7.9 51.4C8.1 51.8 8.4 52 8.8 52.1C9.2 52 9.6 51.8 9.8 51.3C10.4 50.1 9.3 46.5 10.7 45.5C11.5 45.4 12.4 46.3 13.1 46.6C14.4 47.3 15.9 47.6 17.4 47.6C19.5 47.6 21.4 46.7 23.3 45.9C23.8 45.7 24.2 45.3 24.8 45.3C25.1 45.2 25.6 45.2 26.1 45.2C26.7 45.3 27.2 45.9 27.9 45.7C28.8 45.3 28.6 44.4 28 43.9C26 42 23.9 43.3 21.9 44.2C20.8 44.7 18.3 45.7 17.1 45.6C16.6 45.5 16.2 45.4 15.7 45.3C14.7 45.1 12.4 43.9 11.7 43.2C11.5 42.9 11.4 42.5 11.4 42.2C11.4 41.3 12.7 39.5 13.1 38.6C14.8 35.3 19.9 31.5 23.1 29.7C25.1 28.7 27.2 28 29.4 27.4C29.8 27.4 30.1 27.2 30.5 27.1C35.6 26.4 42.5 26.1 47.1 28.8C49.1 29.9 51.3 31.2 52.8 33C53.9 34.3 54.8 35.9 56.1 37C56.8 37.6 58.1 37.7 58 36.5C57.9 35.6 57 34.8 56.5 34.2C55.1 32.4 53.5 30.8 51.7 29.3C49.9 27.7 47.6 26.4 45.2 25.6C39 23.7 29.7 24.5 23.8 27.1C21.8 28 19.9 29.1 18.1 30.4C16.1 31.7 14.3 33.4 12.8 35.2C12.4 35.8 12 36.4 11.6 37C11.1 37.7 10.4 40 9.5 40.1ZM39.8 30.2C38.9 30.4 38.6 31.5 39.4 32C39.9 32.3 40.5 32.3 41 32.4C42.1 32.6 43 33 43.8 33.7C44.8 34.5 45.9 35.6 46.2 36.9C46.4 37.4 46.4 38 46.6 38.5C46.7 39 47.1 39.3 47.7 39.2C48.6 39 48.6 38 48.4 37.2C47.9 35.7 47.2 34.3 46.2 33C44.8 31.4 42 29.9 39.8 30.2ZM31 34C31.5 34.3 32 34.2 32.5 34.4C33.1 34.5 33.6 34.7 34.1 34.9C36 35.8 37.9 37.7 39 39.6C39.8 41.1 39.8 42.8 40.4 44.3C40.7 45 41.3 45.8 42.1 45.1C42.6 44.7 42.1 42.6 42 41.9C41.8 40.8 41.3 39.9 40.8 38.9C39.4 36.5 37.7 34.1 35 33C34.1 32.6 31.3 31.7 30.9 33.1C30.8 33.4 30.9 33.7 31 34ZM33.3 44.5C34.9 44.3 34 42.5 33.6 41.6C32.7 39.5 30.9 37.4 28.5 37C27.5 36.8 25.7 36.4 24.7 36.7C23.9 37 23.5 38 24.3 38.5C24.8 38.8 25.5 38.4 26.1 38.5C27.4 38.7 28.8 39.2 29.8 40C30.5 40.5 31.4 41.2 31.7 42C32.1 42.8 32.2 44.2 33.3 44.5Z"/>'
    },
    {
      id: "dryer-timed-dry",
      name: "Timed dry",
      category: "dryer",
      aka: ["time dry", "timer", "time programme", "manual dry"],
      looksLike: ["clock", "clock face", "watch", "circle with hands"],
      meaning: "Dries for a fixed time you choose, instead of stopping when the sensor decides the clothes are dry. You're in charge, for better or worse.",
      action: "Use it for small loads, to finish off slightly damp items, or for things the sensor can't judge well, like pillows (if their label allows).",
      tip: "Timed drying can easily over-dry clothes, and there's no sensor looking out for them. Start short (20–30 minutes) and check.",
      // Bosch and Samsung: a plain circle with L hands.
      svg: '<circle cx="32" cy="32" r="22"/><path d="M32 32V19M32 32H42"/>'
    }
  ]);
})();
