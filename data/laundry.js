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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.2 14.7L10.3 20.8C10.3 20.8 10.8 20.8 11.4 20.2C12.1 19.7 13.5 18 14.6 17.4C15.6 16.8 16.8 16.6 17.8 16.6C18.7 16.7 19.5 17 20.4 17.6C21.2 18.2 22.3 19.7 22.9 20.2C23.6 20.8 23.7 20.8 24.1 20.9C24.6 20.9 25.1 21.1 25.9 20.6C26.6 20 27.8 18.4 28.8 17.8C29.7 17.1 30.8 16.8 31.6 16.6C32.4 16.5 33 16.7 33.5 16.9C34.1 17 34.4 17 35 17.6C35.7 18.1 36.9 19.5 37.5 20.1C38.2 20.6 38.4 20.8 39 20.9C39.5 20.9 40.1 20.9 40.9 20.4C41.6 20 42.6 18.5 43.4 17.9C44.1 17.4 44.5 17.2 45.1 16.9C45.8 16.7 46.6 16.5 47.5 16.6C48.4 16.8 49.7 17.4 50.5 17.9C51.4 18.5 51.9 19.6 52.4 20.1C52.9 20.5 53.5 20.8 53.5 20.8L54.9 14.7L57.9 14.6L51.9 49.2L12.2 49.4L6.2 14.6ZM17.1 19.6C17.7 19.7 18.4 19.9 19.1 20.6C19.9 21.2 21.1 22.7 21.9 23.2C22.6 23.8 23.2 23.8 23.9 23.9C24.6 24.1 25.5 24 26.1 23.9C26.6 23.8 26.5 23.9 27.2 23.4C28 22.8 29.6 21 30.4 20.4C31.1 19.7 31.5 19.7 31.9 19.6C32.4 19.6 32.5 19.4 33.2 20.1C34 20.7 35.9 22.6 36.8 23.2C37.6 23.9 38 23.8 38.6 23.9C39.2 24.1 39.8 24.1 40.4 23.9C41 23.8 41.5 23.8 42.2 23.2C43 22.7 44.4 21.1 45.1 20.4C45.9 19.8 46.5 19.7 47 19.6C47.6 19.6 47.9 19.8 48.5 20.4C49.2 20.9 50.4 22.4 51.1 22.9C51.9 23.5 53 23.9 53 23.9L49.2 46.1L14.8 46.2L10.8 24.1C10.8 24.1 12 23.7 12.8 23.1C13.7 22.4 15.1 20.7 15.8 20.1C16.6 19.6 16.6 19.6 17.1 19.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.2 14.7L10.3 20.8C10.3 20.8 10.7 20.9 11.3 20.4C12 19.8 13.6 18.1 14.3 17.4C15.1 16.8 15.6 16.9 16.1 16.8C16.7 16.6 17 16.5 17.6 16.6C18.3 16.8 19.2 16.8 20.1 17.4C20.9 18.1 22.3 19.7 22.9 20.2C23.6 20.8 23.7 20.8 24.1 20.9C24.6 20.9 25.1 21.1 25.9 20.6C26.6 20 27.8 18.4 28.8 17.8C29.7 17.1 30.7 16.8 31.6 16.6C32.4 16.5 33.3 16.8 33.9 16.9C34.4 17.1 34.4 17.1 35 17.6C35.6 18.1 36.8 19.4 37.5 19.9C38.1 20.5 38.4 20.7 39 20.9C39.5 21 39.6 21.3 40.5 20.6C41.5 20 43.5 17.8 44.6 17.1C45.8 16.5 46.5 16.5 47.5 16.6C48.4 16.8 49.7 17.3 50.5 17.9C51.4 18.6 52.2 19.9 52.8 20.4C53.2 20.8 53.5 20.8 53.5 20.8L54.8 14.8L57.9 14.6L51.9 49.4L12.2 49.4L6.2 14.6ZM17.1 19.6C17.6 19.7 18 19.6 18.8 20.2C19.5 20.9 21 22.6 21.9 23.2C22.7 23.9 23.1 23.8 23.8 23.9C24.4 24.1 25 24 25.6 23.9C26.1 23.9 26.5 23.9 27.2 23.4C28 22.8 29.5 21.1 30.2 20.4C31 19.8 31.4 19.7 31.9 19.6C32.5 19.6 32.7 19.6 33.5 20.2C34.4 20.9 36.2 22.8 37 23.4C37.9 24.1 38 23.9 38.5 23.9C39.1 24 39.7 24.1 40.4 23.9C41 23.8 41.4 23.9 42.2 23.2C43.1 22.6 44.8 20.8 45.5 20.1C46.3 19.5 46.4 19.6 46.9 19.6C47.4 19.7 47.8 19.8 48.5 20.4C49.3 20.9 50.4 22.4 51.1 22.9C51.9 23.5 52.9 23.8 52.9 23.8C52.9 23.8 53.6 20.8 53 24.6C52.4 28.3 49.2 46.1 49.2 46.1L14.8 46.2L10.8 24.1C10.8 24.1 12 23.7 12.8 23.1C13.7 22.4 15.1 20.7 15.8 20.1C16.6 19.6 16.7 19.6 17.1 19.6ZM25.8 28.6C26.3 28.5 27.1 28.6 27.6 28.6C28.2 28.7 28.6 28.9 29.1 29.1C29.5 29.4 29.8 29.5 30.1 29.9C30.3 30.4 30.7 31 30.8 31.6C30.8 32.1 30.8 32.8 30.6 33.4C30.3 33.9 29.2 34.9 29.2 34.9C29.2 34.9 30 35.2 30.4 35.5C30.7 35.9 31 36.1 31.1 36.8C31.3 37.4 31.5 38.4 31.2 39.1C31 39.9 30.4 40.7 29.8 41.1C29.1 41.6 28.1 41.9 27.4 42C26.6 42.2 26 42.1 25.4 42C24.9 41.8 24.3 41.6 23.9 41.2C23.4 40.9 23 40.5 22.8 40C22.5 39.6 22.3 38.9 22.2 38.5C22.2 38 22.4 37.5 22.4 37.5L24.1 37.5C24.1 37.5 24.3 38.8 24.6 39.2C25 39.7 25.5 40.1 26.1 40.2C26.6 40.4 27.5 40.3 28.1 40C28.6 39.8 28.9 39.3 29.1 38.9C29.3 38.4 29.3 37.7 29.2 37.4C29.2 37 29.1 36.8 28.9 36.5C28.6 36.3 28.2 36 27.8 35.9C27.2 35.7 25.9 35.5 25.9 35.5L26.1 34.2C26.1 34.2 27.3 34.2 27.8 34C28.2 33.7 28.5 33.3 28.6 33C28.8 32.6 28.9 32.1 28.8 31.8C28.6 31.4 28.3 31 28.1 30.8C27.8 30.5 27.6 30.4 27.2 30.4C26.9 30.3 26.2 30.3 25.9 30.4C25.5 30.6 25.1 31 24.9 31.4C24.6 31.8 24.4 32.9 24.4 32.9L22.6 32.8C22.6 32.8 23.1 30.7 23.4 30.1C23.6 29.6 23.9 29.5 24.2 29.2C24.6 29 25.2 28.8 25.8 28.6ZM36.4 28.6C36.9 28.5 37.5 28.5 38 28.6C38.6 28.8 39.4 29 39.9 29.4C40.4 29.9 40.8 30.6 41 31.2C41.3 31.9 41.4 32.3 41.5 33.1C41.6 34 41.8 35.3 41.6 36.5C41.5 37.6 41.1 39.1 40.8 40C40.4 40.8 40.1 41 39.6 41.4C39.1 41.7 38.4 42 37.8 42C37.1 42.1 36.4 42.1 35.8 41.9C35.1 41.6 34.6 41.5 34.1 40.8C33.7 40 33.1 38.3 32.9 37C32.6 35.8 32.8 34.4 32.9 33.5C32.9 32.5 33.1 31.9 33.4 31.2C33.6 30.6 34 29.9 34.5 29.4C35 29 35.8 28.8 36.4 28.6ZM36.8 30.4L38.5 30.9C38.5 30.9 39.3 32.2 39.5 33.4C39.6 34.5 39.5 36.8 39.4 37.9C39.2 38.9 38.9 39.2 38.6 39.5C38.4 39.9 38.1 40 37.8 40.1C37.4 40.2 37 40.2 36.6 40.1C36.3 40.1 36.1 40 35.9 39.6C35.6 39.3 35.3 38.8 35.1 38.2C35 37.7 34.9 37.4 34.9 36.5C34.9 35.5 35 33.2 35.1 32.4C35.3 31.5 35.4 31.6 35.6 31.2C35.9 30.9 36.8 30.4 36.8 30.4Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.2 14.7L10.3 20.8C10.3 20.8 10.7 20.9 11.3 20.4C12 19.8 13.6 18.1 14.3 17.4C15.1 16.8 15.6 16.9 16.1 16.8C16.7 16.6 17 16.5 17.6 16.6C18.3 16.8 19.2 16.8 20.1 17.4C20.9 18.1 22.3 19.7 22.9 20.2C23.6 20.8 23.7 20.8 24.1 20.9C24.6 20.9 25.1 21.1 25.9 20.6C26.6 20 27.8 18.4 28.8 17.8C29.7 17.1 30.7 16.8 31.6 16.6C32.4 16.5 33.3 16.8 33.9 16.9C34.4 17.1 34.4 17.1 35 17.6C35.6 18.1 36.8 19.4 37.5 19.9C38.1 20.5 38.4 20.7 39 20.9C39.5 21 39.6 21.3 40.5 20.6C41.5 20 43.5 17.8 44.6 17.1C45.8 16.5 46.5 16.5 47.5 16.6C48.4 16.8 49.7 17.3 50.5 17.9C51.4 18.6 52.2 19.9 52.8 20.4C53.2 20.8 53.5 20.8 53.5 20.8L54.8 14.8L57.9 14.6L51.9 49.4L12.2 49.4L6.2 14.6ZM17.1 19.6C17.6 19.7 18 19.6 18.8 20.2C19.5 20.9 21 22.6 21.9 23.2C22.7 23.9 23.1 23.8 23.8 23.9C24.4 24.1 25 24 25.6 23.9C26.1 23.9 26.5 23.9 27.2 23.4C28 22.8 29.5 21.1 30.2 20.4C31 19.8 31.4 19.7 31.9 19.6C32.5 19.6 32.7 19.6 33.5 20.2C34.4 20.9 36.2 22.8 37 23.4C37.9 24.1 38 23.9 38.5 23.9C39.1 24 39.7 24.1 40.4 23.9C41 23.8 41.4 23.9 42.2 23.2C43.1 22.6 44.8 20.8 45.5 20.1C46.3 19.5 46.4 19.6 46.9 19.6C47.4 19.7 47.8 19.8 48.5 20.4C49.3 20.9 50.4 22.4 51.1 22.9C51.9 23.5 52.9 23.8 52.9 23.8C52.9 23.8 53.6 20.8 53 24.6C52.4 28.3 49.2 46.1 49.2 46.1L14.8 46.2L10.8 24.1C10.8 24.1 12 23.7 12.8 23.1C13.7 22.4 15.1 20.7 15.8 20.1C16.6 19.6 16.7 19.6 17.1 19.6ZM36.4 28.6C36.9 28.5 37.5 28.5 38 28.6C38.6 28.8 39.4 29 39.9 29.4C40.4 29.9 40.8 30.6 41 31.2C41.3 31.9 41.4 32.3 41.5 33.1C41.6 34 41.8 35.3 41.6 36.5C41.5 37.6 41.1 39.1 40.8 40C40.4 40.8 40.1 41 39.6 41.4C39.1 41.7 38.4 42 37.8 42C37.1 42.1 36.4 42.1 35.8 41.9C35.1 41.6 34.6 41.5 34.1 40.8C33.7 40 33.1 38.3 32.9 37C32.6 35.8 32.8 34.4 32.9 33.5C32.9 32.5 33.1 31.9 33.4 31.2C33.6 30.6 34 29.9 34.5 29.4C35 29 35.8 28.8 36.4 28.6ZM36.8 30.4L38.5 30.9C38.5 30.9 39.3 32.2 39.5 33.4C39.6 34.5 39.5 36.8 39.4 37.9C39.2 38.9 38.9 39.2 38.6 39.5C38.4 39.9 38.1 40 37.8 40.1C37.4 40.2 37 40.2 36.6 40.1C36.3 40.1 36.1 40 35.9 39.6C35.6 39.3 35.3 38.8 35.1 38.2C35 37.7 34.9 37.4 34.9 36.5C34.9 35.5 35 33.2 35.1 32.4C35.3 31.5 35.4 31.6 35.6 31.2C35.9 30.9 36.8 30.4 36.8 30.4ZM27.6 28.9L29.6 29.1L29.6 36.9L31.2 37.2L31.2 38.5L29.6 38.9L29.6 41.6C29.6 41.6 29.7 41.8 29.4 41.9C29 41.9 27.8 41.8 27.8 41.8L27.6 38.9C27.6 38.9 28.3 38.7 27.4 38.6C26.4 38.6 22.1 38.6 22.1 38.6C22.1 38.6 21.3 38 22.2 36.4C23.2 34.7 27.6 28.9 27.6 28.9ZM27.4 31.8L27.6 36.9L23.9 37L27.4 31.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.2 14.7L10.3 20.8C10.3 20.8 10.7 20.9 11.3 20.4C12 19.8 13.6 18.1 14.3 17.4C15.1 16.8 15.6 16.9 16.1 16.8C16.7 16.6 17 16.5 17.6 16.6C18.3 16.8 19.2 16.8 20.1 17.4C20.9 18.1 22.3 19.7 22.9 20.2C23.6 20.8 23.7 20.8 24.1 20.9C24.6 20.9 25.1 21.1 25.9 20.6C26.6 20 27.8 18.4 28.8 17.8C29.7 17.1 30.7 16.8 31.6 16.6C32.4 16.5 33.3 16.8 33.9 16.9C34.4 17.1 34.4 17.1 35 17.6C35.6 18.1 36.8 19.4 37.5 19.9C38.1 20.5 38.4 20.7 39 20.9C39.5 21 39.6 21.3 40.5 20.6C41.5 20 43.5 17.8 44.6 17.1C45.8 16.5 46.5 16.5 47.5 16.6C48.4 16.8 49.7 17.3 50.5 17.9C51.4 18.6 52.2 19.9 52.8 20.4C53.2 20.8 53.5 20.8 53.5 20.8L54.8 14.8L57.9 14.6L51.9 49.4L12.2 49.4L6.2 14.6ZM17.1 19.6C17.6 19.7 18 19.6 18.8 20.2C19.5 20.9 21 22.6 21.9 23.2C22.7 23.9 23.1 23.8 23.8 23.9C24.4 24.1 25 24 25.6 23.9C26.1 23.9 26.5 23.9 27.2 23.4C28 22.8 29.5 21.1 30.2 20.4C31 19.8 31.4 19.7 31.9 19.6C32.5 19.6 32.7 19.6 33.5 20.2C34.4 20.9 36.2 22.8 37 23.4C37.9 24.1 38 23.9 38.5 23.9C39.1 24 39.7 24.1 40.4 23.9C41 23.8 41.4 23.9 42.2 23.2C43.1 22.6 44.8 20.8 45.5 20.1C46.3 19.5 46.4 19.6 46.9 19.6C47.4 19.7 47.8 19.8 48.5 20.4C49.3 20.9 50.4 22.4 51.1 22.9C51.9 23.5 52.9 23.8 52.9 23.8C52.9 23.8 53.6 20.8 53 24.6C52.4 28.3 49.2 46.1 49.2 46.1L14.8 46.2L10.8 24.1C10.8 24.1 12 23.7 12.8 23.1C13.7 22.4 15.1 20.7 15.8 20.1C16.6 19.6 16.7 19.6 17.1 19.6ZM26.1 28.6C26.8 28.5 27.4 28.5 27.9 28.6C28.5 28.8 29.1 29.1 29.6 29.4C30 29.6 30.2 30 30.4 30.4C30.7 30.8 30.9 31.8 30.9 31.8L30.8 32L29.1 32L28.2 30.6C28.2 30.6 26.9 30.4 26.6 30.4C26.2 30.4 26.1 30.4 25.9 30.6C25.6 30.9 25.1 31.4 24.9 31.9C24.6 32.5 24.4 33.4 24.4 33.9C24.3 34.3 24.6 34.5 24.6 34.5C24.6 34.5 25.4 33.6 26.1 33.5C26.7 33.3 27.7 33.3 28.4 33.5C29 33.6 29.7 34 30.1 34.5C30.6 35 31 35.8 31.1 36.5C31.3 37.1 31.3 37.6 31.2 38.2C31.2 38.9 31 39.5 30.6 40C30.3 40.6 29.8 41.1 29.2 41.5C28.7 41.8 28 42 27.4 42C26.9 42.1 26.4 42.1 25.9 42C25.3 41.8 24.7 41.6 24.2 41.2C23.8 40.9 23.3 40.2 22.9 39.5C22.6 38.9 22.5 38.2 22.4 37.2C22.2 36.3 22.2 34.6 22.4 33.6C22.5 32.6 22.7 31.9 23.1 31.2C23.4 30.6 23.8 29.9 24.4 29.4C24.9 29 25.5 28.8 26.1 28.6ZM26.4 35C26.8 34.9 27.5 35 27.9 35.2C28.4 35.5 28.9 36.3 29.1 36.9C29.2 37.4 29.1 38.2 28.9 38.6C28.8 39.1 28.6 39.4 28.4 39.6C28.1 39.9 27.9 40.1 27.4 40.1C27 40.2 25.8 40 25.8 40C25.8 40 24.8 38.9 24.6 38.2C24.5 37.6 24.8 36.5 25.1 36C25.3 35.4 25.9 35.2 26.4 35ZM36.4 28.6C36.9 28.5 37.5 28.5 38 28.6C38.6 28.8 39.4 29 39.9 29.4C40.4 29.9 40.8 30.6 41 31.2C41.3 31.9 41.4 32.3 41.5 33.1C41.6 34 41.8 35.3 41.6 36.5C41.5 37.6 41.1 39.1 40.8 40C40.4 40.8 40.1 41 39.6 41.4C39.1 41.7 38.4 42 37.8 42C37.1 42.1 36.4 42.1 35.8 41.9C35.1 41.6 34.6 41.5 34.1 40.8C33.7 40 33.1 38.3 32.9 37C32.6 35.8 32.8 34.4 32.9 33.5C32.9 32.5 33.1 31.9 33.4 31.2C33.6 30.6 34 29.9 34.5 29.4C35 29 35.8 28.8 36.4 28.6ZM36.8 30.4L38.5 30.9C38.5 30.9 39.3 32.2 39.5 33.4C39.6 34.5 39.5 36.8 39.4 37.9C39.2 38.9 38.9 39.2 38.6 39.5C38.4 39.9 38.1 40 37.8 40.1C37.4 40.2 37 40.2 36.6 40.1C36.3 40.1 36.1 40 35.9 39.6C35.6 39.3 35.3 38.8 35.1 38.2C35 37.7 34.9 37.4 34.9 36.5C34.9 35.5 35 33.2 35.1 32.4C35.3 31.5 35.4 31.6 35.6 31.2C35.9 30.9 36.8 30.4 36.8 30.4Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.2 14.8L10.3 20.9C10.3 20.9 10.9 20.8 11.4 20.2C12 19.8 12.9 18.4 13.8 17.9C14.6 17.3 15.5 16.9 16.2 16.8C17 16.6 17.6 16.7 18.1 16.8C18.7 16.8 18.9 16.7 19.6 17.2C20.4 17.8 21.8 19.3 22.6 19.9C23.3 20.6 23.5 20.8 24.1 20.9C24.6 20.9 25.3 20.9 26.1 20.4C26.8 19.9 27.8 18.5 28.6 17.9C29.5 17.2 30.4 16.9 31.1 16.8C31.9 16.6 32.3 16.6 33 16.8C33.6 16.9 34 16.8 34.9 17.4C35.7 18.1 37.3 19.8 38 20.4C38.6 20.9 38.5 20.8 39 20.9C39.4 20.9 40 21 40.8 20.6C41.5 20.1 42.5 18.6 43.2 18.1C44 17.5 44.2 17.3 45 17.1C45.7 16.8 47 16.6 47.9 16.8C48.7 16.9 49.4 17.1 50.2 17.8C51.1 18.4 52.3 19.9 52.9 20.4C53.4 20.9 53.6 20.8 53.6 20.8L54.9 14.7L57.8 14.6C57.8 14.6 58.8 9.7 57.9 15.6C56.9 21.4 51.9 49.5 51.9 49.5L12.2 49.5L6.2 14.6ZM16.8 19.8C17.2 19.7 17.5 19.4 18.2 19.9C19 20.5 20.4 22.3 21.4 22.9C22.3 23.6 23.3 23.9 24.1 24.1C24.8 24.2 25.1 24.1 25.6 23.9C26.2 23.8 26.6 23.9 27.4 23.2C28.3 22.6 30 20.7 30.6 20.1C31.3 19.6 31.1 19.7 31.6 19.8C32 19.8 32.7 19.6 33.5 20.2C34.4 20.9 35.8 22.7 36.9 23.4C37.9 24 39.1 24.1 40 24.1C41 24 41.5 23.8 42.5 23.1C43.4 22.5 44.9 20.6 45.8 20.1C46.6 19.5 47.5 19.8 47.5 19.8C47.5 19.8 50.3 22.4 51.2 23.1C52.2 23.7 53 23.9 53 23.9L49.2 46.2L14.8 46.4L10.8 24.1C10.8 24.1 12 23.7 12.8 23.1C13.7 22.4 15.1 20.8 15.8 20.2C16.4 19.7 16.3 19.8 16.8 19.8ZM25.9 28.6C26.6 28.6 27.9 28.7 28.6 28.9C29.2 29.2 29.7 29.7 30.1 30.1C30.4 30.6 30.7 31.1 30.9 31.8C31.1 32.4 31.2 33 31.2 34C31.3 34.9 31.3 36.2 31.1 37.2C31 38.3 30.5 39.3 30.1 40C29.8 40.8 29.4 41.1 28.9 41.5C28.4 41.8 27.7 41.9 27.1 42C26.6 42.1 26.1 42.1 25.6 42C25.2 42 24.7 41.8 24.2 41.5C23.8 41.3 23.3 40.8 23.1 40.5C22.8 40.1 22.6 39.7 22.6 39.4C22.5 39 22.6 38.6 22.6 38.6L24.4 38.6C24.4 38.6 24.8 39.7 25.1 40C25.5 40.2 26.3 40.5 26.9 40.4C27.4 40.2 28.1 39.7 28.4 39.4C28.8 39 28.9 38.6 29.1 38C29.2 37.5 29.1 36.1 29.1 36.1C29.1 36.1 28.1 37.2 27.4 37.4C26.7 37.5 25.6 37.5 24.9 37.2C24.1 37 23.4 36.2 22.9 35.8C22.5 35.3 22.5 34.9 22.4 34.4C22.2 33.8 22.1 33 22.2 32.4C22.4 31.7 22.6 31 22.9 30.4C23.3 29.9 23.9 29.4 24.4 29.1C24.9 28.8 25.2 28.7 25.9 28.6ZM26.1 30.4C26.7 30.3 27.4 30.4 27.9 30.8C28.3 31.1 28.8 31.8 28.9 32.5C29.1 33.1 29 34 28.6 34.5C28.3 35.1 27.1 35.8 27.1 35.8L25.4 35.4C25.4 35.4 24.5 34 24.4 33.4C24.2 32.7 24.4 31.9 24.8 31.4C25.1 31 25.6 30.6 26.1 30.4ZM34.5 28.9L40.9 28.9C40.9 28.9 41 28.8 41 29.1C41.1 29.4 41 30.6 41 30.6L36.1 30.6C36.1 30.6 35.8 30.9 35.6 31.4C35.5 32 35.5 34 35.5 34C35.5 34 36.5 33.3 37 33.1C37.6 33 38.3 33.1 38.9 33.2C39.4 33.4 40 33.7 40.5 34.1C40.9 34.6 41.2 35.2 41.5 35.9C41.7 36.5 41.7 37.2 41.6 37.9C41.6 38.5 41.5 39 41.2 39.5C41 40.1 40.6 40.6 40.1 41C39.7 41.4 39.3 41.8 38.5 42C37.6 42.1 36 42 35.1 41.8C34.3 41.5 34 41.2 33.6 40.8C33.3 40.3 33 39.6 32.9 39.2C32.7 38.9 32.9 38.4 32.9 38.4L34.5 38.2C34.5 38.2 35.1 39.6 35.6 40C36.2 40.3 37 40.5 37.6 40.4C38.2 40.2 38.9 39.7 39.2 39.4C39.6 39 39.6 38.7 39.6 38.1C39.7 37.6 39.7 36.8 39.5 36.2C39.2 35.7 38.7 35.2 38.2 35C37.8 34.7 37.2 34.6 36.6 34.8C36.1 34.9 35.6 35.8 35 36C34.4 36.1 33 35.9 33 35.9L34.5 28.9Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 11.4L9.2 11.6L10.3 17.6C10.3 17.6 10.7 17.8 11.3 17.2C12 16.7 13.6 14.9 14.3 14.3C15.1 13.8 15.6 13.8 16.1 13.7C16.7 13.5 17 13.4 17.6 13.6C18.3 13.7 19.2 13.8 20.1 14.3C20.9 14.9 22.3 16.6 22.9 17.1C23.6 17.7 23.7 17.7 24.1 17.8C24.6 17.8 25.1 18 25.9 17.4C26.6 16.9 27.8 15.3 28.8 14.7C29.7 14 30.7 13.7 31.6 13.6C32.4 13.4 33.3 13.7 33.9 13.8C34.4 14 34.4 13.9 35 14.4C35.6 14.9 36.8 16.3 37.5 16.9C38.1 17.4 38.4 17.6 39 17.8C39.5 17.9 39.6 18.2 40.5 17.6C41.5 16.9 43.5 14.7 44.6 14.1C45.8 13.4 46.5 13.4 47.5 13.6C48.4 13.7 49.7 14.2 50.5 14.8C51.4 15.5 52.2 16.8 52.8 17.2C53.2 17.7 53.5 17.6 53.5 17.6L54.8 11.7L57.9 11.4L51.9 46.2L12.2 46.2L6.2 11.4ZM17.1 16.6C17.6 16.6 18 16.5 18.8 17.1C19.5 17.8 21 19.5 21.9 20.1C22.7 20.8 23.1 20.7 23.8 20.9C24.4 21 25 21 25.6 20.9C26.1 20.8 26.5 20.8 27.2 20.2C28 19.7 29.5 18 30.2 17.4C31 16.7 31.4 16.6 31.9 16.6C32.5 16.5 32.7 16.5 33.5 17.1C34.4 17.8 36.2 19.7 37 20.4C37.9 21 38 20.8 38.5 20.9C39.1 20.9 39.7 21 40.4 20.9C41 20.7 41.4 20.8 42.2 20.1C43.1 19.5 44.8 17.6 45.5 17.1C46.3 16.5 46.4 16.5 46.9 16.6C47.4 16.6 47.8 16.7 48.5 17.2C49.3 17.8 50.4 19.3 51.1 19.9C51.9 20.4 52.9 20.6 52.9 20.6C52.9 20.6 53.6 17.7 53 21.4C52.4 25.2 49.2 43 49.2 43L14.8 43.1L10.8 20.9C10.8 20.9 12 20.6 12.8 19.9C13.7 19.3 15.1 17.6 15.8 17.1C16.6 16.5 16.7 16.5 17.1 16.6ZM36.4 25.6C36.9 25.4 37.5 25.4 38 25.6C38.6 25.7 39.4 25.9 39.9 26.4C40.4 26.8 40.8 27.5 41 28.1C41.3 28.8 41.4 29.2 41.5 30.1C41.6 30.9 41.8 32.2 41.6 33.4C41.5 34.5 41.1 36 40.8 36.9C40.4 37.7 40.1 37.9 39.6 38.2C39.1 38.6 38.4 38.9 37.8 39C37.1 39 36.4 39 35.8 38.8C35.1 38.5 34.6 38.4 34.1 37.6C33.7 36.9 33.1 35.2 32.9 34C32.6 32.7 32.8 31.3 32.9 30.4C32.9 29.4 33.1 28.8 33.4 28.1C33.6 27.5 34 26.8 34.5 26.4C35 25.9 35.8 25.7 36.4 25.6ZM36.8 27.4L38.5 27.9C38.5 27.9 39.3 29.1 39.5 30.2C39.6 31.4 39.5 33.7 39.4 34.8C39.2 35.8 38.9 36.1 38.6 36.5C38.4 36.8 38.1 36.9 37.8 37C37.4 37.1 37 37.1 36.6 37C36.3 37 36.1 36.9 35.9 36.5C35.6 36.2 35.3 35.7 35.1 35.1C35 34.6 34.9 34.3 34.9 33.4C34.9 32.4 35 30.1 35.1 29.2C35.3 28.4 35.4 28.5 35.6 28.1C35.9 27.8 36.8 27.4 36.8 27.4ZM27.6 25.9L29.6 26.1L29.6 33.8L31.2 34.1L31.2 35.5L29.6 35.8L29.6 38.5C29.6 38.5 29.7 38.7 29.4 38.8C29 38.8 27.8 38.6 27.8 38.6L27.6 35.8C27.6 35.8 28.3 35.6 27.4 35.5C26.4 35.5 22.1 35.5 22.1 35.5C22.1 35.5 21.3 34.9 22.2 33.2C23.2 31.6 27.6 25.9 27.6 25.9ZM27.4 28.6L27.6 33.8L23.9 33.9L27.4 28.6Z"/><polygon fill="currentColor" stroke="none" points="12.1,49.6 51.9,49.6 51.9,52.7 12.1,52.7"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 8.3L9.2 8.4L10.3 14.6C10.3 14.6 10.8 14.6 11.4 14.1C12.1 13.5 13.6 11.8 14.3 11.2C15.1 10.6 15.6 10.6 16.1 10.4C16.7 10.3 17.1 10.2 17.8 10.3C18.4 10.5 19.5 10.7 20.4 11.3C21.2 12 22.3 13.5 22.9 14.1C23.6 14.6 23.7 14.6 24.1 14.7C24.6 14.7 25.1 14.9 25.9 14.3C26.6 13.8 27.8 12.1 28.8 11.4C29.7 10.8 30.8 10.5 31.6 10.3C32.4 10.2 33 10.4 33.5 10.6C34.1 10.7 34.3 10.7 35 11.2C35.8 11.8 37.3 13.6 38 14.2C38.6 14.7 38.5 14.6 39 14.7C39.4 14.7 40.1 14.7 40.9 14.2C41.6 13.8 42.6 12.3 43.2 11.8C43.9 11.2 44.1 11.1 44.6 10.8C45.2 10.6 45.9 10.4 46.5 10.3C47 10.3 47.4 10.3 48 10.4C48.7 10.6 49.5 10.8 50.2 11.4C51 12 52.1 13.5 52.6 14.1C53.2 14.6 53.5 14.6 53.5 14.6L54.8 8.6L57.9 8.3L51.9 43.1L12.2 43.1L6.2 8.3ZM17.1 13.4C17.6 13.5 18 13.5 18.8 14.1C19.5 14.7 21 16.4 21.9 17.1C22.7 17.7 23.1 17.6 23.8 17.8C24.4 17.9 25 17.9 25.6 17.8C26.1 17.6 26.5 17.7 27.2 17.1C28 16.6 29.5 14.9 30.2 14.2C31 13.6 31.4 13.5 31.9 13.4C32.5 13.4 32.7 13.4 33.5 14.1C34.4 14.7 36.2 16.6 37 17.2C37.9 17.9 38 17.7 38.5 17.8C39.1 17.8 39.7 17.9 40.4 17.8C41 17.6 41.4 17.7 42.2 17.1C43.1 16.4 44.8 14.5 45.5 13.9C46.3 13.3 46.4 13.4 46.9 13.4C47.4 13.5 47.8 13.6 48.5 14.2C49.3 14.7 50.4 16.2 51.1 16.8C51.9 17.3 52.9 17.6 52.9 17.6C52.9 17.6 53.6 14.6 53 18.4C52.4 22.1 49.2 40 49.2 40L14.8 40L10.8 17.9C10.8 17.9 12 17.5 12.8 16.9C13.7 16.2 15.1 14.5 15.8 13.9C16.6 13.4 16.7 13.4 17.1 13.4ZM25.8 22.4C26.3 22.3 27.1 22.4 27.6 22.4C28.2 22.5 28.6 22.7 29.1 22.9C29.5 23.2 29.8 23.4 30.1 23.8C30.3 24.1 30.7 24.8 30.8 25.4C30.8 25.9 30.8 26.6 30.6 27.1C30.3 27.7 29.2 28.6 29.2 28.6C29.2 28.6 30.4 29.4 30.8 29.8C31.1 30.1 31.1 30 31.1 30.6C31.2 31.1 31.5 32.2 31.2 33C31 33.7 30.4 34.5 29.8 35C29.1 35.4 28.1 35.7 27.4 35.9C26.6 36 26 35.9 25.4 35.8C24.9 35.6 24.3 35.4 23.9 35C23.4 34.7 23 34.3 22.8 33.9C22.5 33.4 22.3 32.7 22.2 32.2C22.2 31.8 22.4 31.4 22.4 31.4L24.1 31.4C24.1 31.4 24.3 32.6 24.6 33C25 33.5 25.5 33.9 26.1 34C26.6 34.2 27.5 34.1 28.1 33.9C28.6 33.6 29 33.2 29.1 32.6C29.3 32.1 29.1 30.9 28.9 30.4C28.8 30 28.6 29.9 28.1 29.8C27.5 29.6 25.9 29.4 25.9 29.4L26.1 28.1C26.1 28.1 27.3 28 27.8 27.8C28.2 27.5 28.5 27.1 28.6 26.8C28.8 26.4 28.9 25.9 28.8 25.6C28.6 25.2 28.3 24.8 28.1 24.6C27.8 24.3 27.6 24.2 27.2 24.1C26.9 24.1 26.2 24.1 25.9 24.2C25.5 24.4 25.1 24.8 24.9 25.1C24.6 25.5 24.4 26.6 24.4 26.6L22.6 26.6C22.6 26.6 23.1 24.5 23.4 23.9C23.6 23.4 23.9 23.3 24.2 23.1C24.6 22.8 25.2 22.6 25.8 22.4ZM36.4 22.4C36.9 22.3 37.5 22.3 38 22.4C38.6 22.6 39.4 22.8 39.9 23.2C40.4 23.7 40.8 24.4 41 25.1C41.3 25.7 41.4 26.1 41.5 26.9C41.6 27.8 41.8 29.1 41.6 30.2C41.5 31.4 41.1 32.9 40.8 33.8C40.4 34.6 40.1 34.8 39.6 35.1C39.1 35.5 38.4 35.8 37.8 35.9C37.1 35.9 36.4 35.9 35.8 35.6C35.1 35.4 34.6 35.3 34.1 34.5C33.7 33.8 33.1 32.1 32.9 30.9C32.6 29.6 32.8 28.2 32.9 27.2C32.9 26.3 33.1 25.7 33.4 25.1C33.6 24.4 34 23.7 34.5 23.2C35 22.8 35.8 22.6 36.4 22.4ZM36.8 24.2L38.5 24.8C38.5 24.8 39.3 26 39.5 27.1C39.6 28.3 39.5 30.6 39.4 31.6C39.2 32.7 38.9 33 38.6 33.4C38.4 33.7 38.1 33.9 37.8 34C37.4 34.1 37 34 36.6 34C36.3 33.9 36.1 33.8 35.9 33.5C35.6 33.1 35.3 32.6 35.1 32C35 31.5 34.9 31.2 34.9 30.2C34.9 29.3 35 27 35.1 26.1C35.3 25.3 35.4 25.4 35.6 25.1C35.9 24.7 36.8 24.2 36.8 24.2Z"/><polygon fill="currentColor" stroke="none" points="12.1,46.5 51.9,46.5 51.9,49.6 12.1,49.6"/><polygon fill="currentColor" stroke="none" points="12.1,52.7 51.9,52.7 51.9,55.8 12.1,55.8"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.9 12.9C27.3 12.8 27.4 12.9 27.4 12.9C27.4 12.9 27.8 13.7 27.4 14.3C26.9 15 25.2 16.1 24.6 16.9C23.9 17.8 23.7 16.8 23.6 19.4C23.4 22.1 23.5 30.4 23.6 32.8C23.6 35.1 24.1 33.4 24.1 33.4L25.1 32.8L25.2 23.6C25.2 23.6 27.2 23.4 28.1 23.1C28.9 22.7 30.4 21.2 30.4 21.2L30.6 23.1C30.6 23.1 29.9 23.7 29.2 24.1C28.6 24.4 26.6 25.1 26.6 25.1C26.6 25.1 26.7 31.2 26.6 32.6C26.6 34.1 26.4 33.6 26.2 34C26.1 34.3 26 34.4 25.6 34.5C25.2 34.7 24.4 35 23.9 34.9C23.3 34.7 22.8 34.2 22.4 33.9C22.1 33.5 22.1 34.3 22.1 32.9C22 31.4 22.7 26.9 22.1 25.1C21.4 23.2 19.2 22.3 18.4 21.6C17.7 21 17.9 21.3 17.6 21.2C17.2 21.2 16.9 20.9 16.1 21.4C15.4 22 13.8 23.9 12.8 24.6C11.9 25.2 10.8 25.6 10.8 25.6C10.8 25.6 13.9 44 14.6 47.8C15.2 51.5 9.1 48 14.8 48C20.6 48.1 49.4 47.9 49.4 47.9L53.1 25.6C53.1 25.6 52.2 25.2 51.5 24.6C50.7 24.1 49.4 22.6 48.8 22.1C48.1 21.5 47.9 21.3 47.4 21.2C46.8 21.2 46.5 21.1 45.5 21.8C44.6 22.4 42.2 22.9 41.5 25.4C40.9 27.9 41.6 34.6 41.5 36.8C41.3 38.9 41 37.9 40.5 38.2C39.9 38.6 38.4 38.6 38.4 38.6C38.4 38.6 38.4 40.9 38.2 41.5C38.1 42.2 37.9 42.5 37.6 42.8C37.4 43 37 43.3 36.5 43.4C36.1 43.4 35.1 43.2 35.1 43.2C35.1 43.2 34.6 44.3 34.1 44.5C33.7 44.8 32.9 44.9 32.5 44.9C32 44.9 31.9 44.8 31.6 44.5C31.3 44.3 31.2 43.5 30.6 43.2C30.1 43 29.1 43.3 28.6 43C28.1 42.8 27.8 44.5 27.6 42C27.5 39.4 27.6 27.8 27.6 27.8L28.9 27.9C28.9 27.9 28.9 38.8 28.9 41C29 43.3 29.4 41.8 29.4 41.8L30.1 41.8C30.1 41.8 30.5 43.4 30.6 41C30.8 38.7 30.8 27.8 30.8 27.8L32 27.9C32 27.9 32 39.5 32 42C32.1 44.6 32.5 43.2 32.5 43.2L33.2 43.2C33.2 43.2 33.6 45 33.8 42.5C33.9 39.9 33.9 27.8 33.9 27.8L35.2 27.9L35.5 41.5L36.5 41.8C36.5 41.8 36.9 42.9 37 40.5C37 38.2 37 27.9 37 27.9L38.4 27.9C38.4 27.9 38.4 34.9 38.5 36.4C38.5 37.9 38.8 36.9 38.8 36.9L39.5 37C39.5 37 40 39.1 40 36.2C40.1 33.4 40.2 23 40 19.8C39.9 16.5 39.6 17.8 39 16.9C38.5 16.1 36.5 14.3 36.5 14.3L36.9 13.1C36.9 13.1 38.2 13.8 38.9 14.3C39.5 14.9 40.1 15.7 40.5 16.4C40.9 17 41 17.6 41.2 18.4C41.5 19.3 41.6 21.2 41.6 21.2C41.6 21.2 43.7 19.3 44.5 18.9C45.2 18.4 45.5 18.4 46 18.4C46.6 18.3 47.1 18.2 47.9 18.4C48.6 18.5 49.5 18.8 50.2 19.4C51 19.9 51.8 21.1 52.4 21.6C52.9 22.2 53.6 22.4 53.6 22.4L54.9 16.2L58 16.4L51.9 51L12.1 51L6 16.2L9.2 16.4C9.2 16.4 9.8 20.9 10.1 21.9C10.3 23 10.6 22.4 10.6 22.4C10.6 22.4 13.1 19.9 14.1 19.2C15 18.6 15.4 18.4 16.2 18.4C17.1 18.3 18.4 18.4 19.4 18.8C20.3 19.1 21.9 20.6 21.9 20.6C21.9 20.6 22.1 19 22.4 18.2C22.6 17.5 22.8 16.9 23.2 16.2C23.7 15.6 24.5 14.6 25.1 14.1C25.8 13.5 26.6 13.1 26.9 12.9Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 14.6L9.1 14.6L9.7 17.1L10.9 15.6L13.9 17.4C13.9 17.4 15.9 16.6 16.8 16.6C17.6 16.5 18.4 16.6 19.1 16.9C19.7 17.1 20.1 17.3 20.8 17.9C21.4 18.4 22.4 19.8 22.9 20.2C23.5 20.8 23.7 20.8 24.1 20.9C24.6 20.9 25.1 21.1 25.9 20.6C26.6 20 27.8 18.3 28.8 17.6C29.7 17 30.6 16.6 31.6 16.6C32.5 16.5 33.6 16.8 34.4 17.1C35.1 17.3 35.1 17.4 35.8 17.9C36.4 18.5 37.2 19.9 38 20.4C38.7 20.8 39.4 20.9 40 20.9C40.5 20.8 40.7 20.6 41.2 20.1C41.8 19.7 42.6 18.5 43.2 17.9C43.9 17.4 44.4 17.1 45.1 16.9C45.9 16.6 46.6 16.5 47.5 16.6C48.3 16.6 49.1 17.5 50 17.4C50.9 17.2 52.9 15.6 52.9 15.6L54.2 17.2L55 14.6L57.9 14.6L52.6 44.4L54.4 46C54.4 46 53.5 47.5 53.2 48C53 48.4 52.9 48.5 52.9 48.5L52.1 48.2L51.6 49.5L12.2 49.4L11.9 48.4L10.9 48.5L9.3 46.2L11.2 44.4L6.2 14.6ZM54 18.4L53.5 20.6L52.4 19.6L54 18.4ZM9.9 18.6L11.7 19.9L10.3 20.6L9.9 18.6ZM31.9 19.6C32.5 19.6 32.7 19.6 33.5 20.2C34.4 20.9 35.9 22.8 37 23.4C38.2 24.1 40.4 24.1 40.4 24.1L31.8 29.9L23.2 23.9C23.2 23.9 25.8 23.8 26.6 23.6C27.5 23.4 27.6 23.2 28.2 22.6C28.9 22.1 29.6 20.9 30.2 20.4C30.9 19.9 31.4 19.7 31.9 19.6ZM17.4 19.8C17.4 19.8 18.4 20 18.8 20.2C19.1 20.5 19.6 21.4 19.6 21.4L17.4 19.8ZM45.9 19.9L45 20.6L45.9 19.9ZM49.5 21.6C49.5 21.6 51.1 23 51.8 23.4C52.4 23.7 53 23.9 53 23.9L49.9 42.5L34.9 32L49.5 21.6ZM14.4 21.6L28.9 32L14.1 42.4L10.8 24.1L14.4 21.6ZM31.8 34L49.1 46.2L14.8 46.2L31.8 34Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 9.2C31.9 9.2 28.4 2.8 32.5 9.8C36.5 16.7 51.9 43.5 56.1 51C60.4 58.4 57.8 53.7 58 54.4C58.3 55 58 54.8 58 54.8L5.8 54.6L31.9 9.2ZM31.9 17.4L36 24.8L21.2 50.2L13.1 50.4L31.9 17.4ZM38.5 28.9L43.2 37.1C43.2 37.1 43.1 37.6 41.9 39.9C40.6 42.1 35.6 50.4 35.6 50.4L26.2 50.4L38.5 28.9ZM45.9 41.8L50.8 50.4L40.9 50.4L45.9 41.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1L56 8.2L55.8 56L8.2 55.9L8.2 8.1ZM12.6 12.4L28.1 12.6C28.1 12.6 26.4 12.9 25.4 13.2C24.5 13.6 23.5 14 22.4 14.7C21.4 15.3 20.1 16.2 19.2 16.9C18.4 17.7 18.1 17.8 17.2 18.9C16.4 20.1 15 21.9 14.2 23.6C13.3 25.4 12.4 29.6 12.4 29.6L12.6 12.4ZM36 12.4L51.5 12.6L51.5 28.9C51.5 28.9 50.8 25.5 50 23.9C49.3 22.2 48.2 20.4 46.9 18.9C45.5 17.5 43.4 15.8 42.1 14.9C40.9 14.1 40.7 14.1 39.6 13.7C38.6 13.2 36 12.4 36 12.4ZM30.4 16.8C31.6 16.7 33.5 16.7 34.5 16.9C35.6 17 36.2 17.2 37 17.4C37.7 17.7 38.5 18 39.2 18.4C40 18.9 40.7 19.2 41.8 20.1C42.8 21.1 44.5 23.1 45.4 24.4C46.2 25.6 46.4 26.5 46.8 27.6C47.1 28.6 47.4 29.4 47.4 30.9C47.4 32.3 47.1 34.9 46.8 36.4C46.4 37.8 45.9 38.6 45.5 39.5C45 40.4 44.8 40.8 43.9 41.8C42.9 42.7 40.7 44.6 39.5 45.4C38.4 46.1 38 46.2 37.1 46.5C36.3 46.8 35.8 47.1 34.4 47.1C32.9 47.2 30 47.1 28.6 47C27.3 46.8 27.2 46.6 26.4 46.2C25.5 45.9 24.6 45.5 23.6 44.8C22.5 44 21 42.5 20.2 41.8C19.5 41 19.4 40.7 18.9 40C18.5 39.2 18.1 38.4 17.8 37.5C17.4 36.7 17.1 35.8 16.9 34.6C16.8 33.5 16.7 32.1 16.8 30.9C16.8 29.8 16.9 29 17.2 27.9C17.6 26.9 18.3 25.3 18.8 24.4C19.2 23.4 19.1 23.4 20.1 22.4C21 21.5 23.2 19.5 24.4 18.6C25.7 17.8 26.8 17.6 27.8 17.2C28.8 16.9 29.3 16.8 30.4 16.8ZM12.4 34.4C12.4 34.4 13.2 38.1 13.9 39.9C14.7 41.6 16.1 43.5 17.1 44.8C18 46 18.7 46.6 19.6 47.4C20.6 48.1 21.7 48.9 22.6 49.5C23.6 50 24.2 50.3 25.2 50.6C26.3 51 28.9 51.6 28.9 51.6L12.4 51.5L12.4 34.4ZM51.5 35L51.5 51.6L35 51.6C35 51.6 37.5 51.1 38.5 50.8C39.6 50.4 40.6 49.9 41.5 49.5C42.3 49 43 48.6 43.9 47.9C44.7 47.1 45.6 46.5 46.6 45.2C47.6 44 49 42.2 49.9 40.5C50.7 38.8 51.5 35 51.5 35Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1L56 8.2L55.8 56L8.2 55.9L8.2 8.1ZM12.6 12.4L28.1 12.6C28.1 12.6 26.4 12.9 25.4 13.2C24.5 13.6 23.5 14 22.4 14.7C21.4 15.3 20.1 16.2 19.2 16.9C18.4 17.7 18.1 17.8 17.2 18.9C16.4 20.1 15 21.9 14.2 23.6C13.3 25.4 12.4 29.6 12.4 29.6L12.6 12.4ZM36 12.4L51.5 12.6L51.5 28.9C51.5 28.9 50.8 25.5 50 23.9C49.3 22.2 48.2 20.4 46.9 18.9C45.5 17.5 43.4 15.8 42.1 14.9C40.9 14.1 40.7 14.1 39.6 13.7C38.6 13.2 36 12.4 36 12.4ZM30.4 16.8C31.6 16.7 33.5 16.7 34.5 16.9C35.6 17 36.2 17.2 37 17.4C37.7 17.7 38.5 18 39.2 18.4C40 18.9 40.7 19.2 41.8 20.1C42.8 21.1 44.5 23.1 45.4 24.4C46.2 25.6 46.4 26.5 46.8 27.6C47.1 28.6 47.4 29.4 47.4 30.9C47.4 32.3 47.1 34.9 46.8 36.4C46.4 37.8 45.9 38.6 45.5 39.5C45 40.4 44.8 40.8 43.9 41.8C42.9 42.7 40.7 44.6 39.5 45.4C38.4 46.1 38 46.2 37.1 46.5C36.3 46.8 35.8 47.1 34.4 47.1C32.9 47.2 30 47.1 28.6 47C27.3 46.8 27.2 46.6 26.4 46.2C25.5 45.9 24.6 45.5 23.6 44.8C22.5 44 21 42.5 20.2 41.8C19.5 41 19.4 40.7 18.9 40C18.5 39.2 18.1 38.4 17.8 37.5C17.4 36.7 17.1 35.8 16.9 34.6C16.8 33.5 16.7 32.1 16.8 30.9C16.8 29.8 16.9 29 17.2 27.9C17.6 26.9 18.3 25.3 18.8 24.4C19.2 23.4 19.1 23.4 20.1 22.4C21 21.5 23.2 19.5 24.4 18.6C25.7 17.8 26.8 17.6 27.8 17.2C28.8 16.9 29.3 16.8 30.4 16.8ZM12.4 34.4C12.4 34.4 13.2 38.1 13.9 39.9C14.7 41.6 16.1 43.5 17.1 44.8C18 46 18.7 46.6 19.6 47.4C20.6 48.1 21.7 48.9 22.6 49.5C23.6 50 24.2 50.3 25.2 50.6C26.3 51 28.9 51.6 28.9 51.6L12.4 51.5L12.4 34.4ZM51.5 35L51.5 51.6L35 51.6C35 51.6 37.5 51.1 38.5 50.8C39.6 50.4 40.6 49.9 41.5 49.5C42.3 49 43 48.6 43.9 47.9C44.7 47.1 45.6 46.5 46.6 45.2C47.6 44 49 42.2 49.9 40.5C50.7 38.8 51.5 35 51.5 35Z"/><g fill="currentColor" stroke="none"><circle cx="32" cy="32.1" r="2.9"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1L55.9 8.1L55.8 56L8.2 55.9L8.2 8.1ZM12.6 12.4L28.9 12.6C28.9 12.6 26.3 13.1 25.2 13.4C24.2 13.8 23.6 14 22.4 14.8C21.3 15.5 19.4 16.8 18.1 18.1C16.8 19.4 15.4 21.4 14.7 22.6C13.9 23.7 13.8 24.1 13.4 25.1C13.1 26.2 12.4 28.9 12.4 28.9L12.6 12.4ZM35.1 12.4L51.5 12.4L51.5 28.9C51.5 28.9 50.9 25.6 50.1 24.1C49.4 22.5 48 20.5 47.1 19.4C46.3 18.2 45.7 17.8 44.9 17.1C44 16.3 42.9 15.5 42 14.9C41 14.4 40.2 14 39 13.6C37.9 13.1 35.1 12.4 35.1 12.4ZM30.4 16.8C31.8 16.7 34.6 16.9 36 17.1C37.4 17.4 38 17.8 38.9 18.2C39.8 18.7 40.6 19.2 41.4 19.9C42.1 20.5 42.8 21.1 43.5 21.9C44.1 22.6 44.9 23.6 45.4 24.4C45.9 25.3 46.1 25.9 46.5 26.9C46.8 27.8 47.1 29 47.2 30.1C47.4 31.3 47.4 32.8 47.2 33.9C47.1 34.9 47.2 35.4 46.6 36.6C46.1 37.9 44.9 40.2 44.1 41.4C43.4 42.5 42.7 43 42 43.6C41.2 44.3 40.3 44.9 39.5 45.4C38.8 45.8 38.3 46.1 37.5 46.4C36.6 46.6 35.8 47 34.4 47.1C32.9 47.2 30.1 47.2 28.6 47C27.2 46.8 26.5 46.4 25.6 46C24.8 45.6 24.1 45.2 23.2 44.5C22.4 43.9 21.2 42.8 20.4 42C19.7 41.3 19.3 40.7 18.9 39.9C18.4 39 17.9 38.1 17.6 37.1C17.2 36.2 17 35.1 16.9 34.1C16.7 33.2 16.7 32.3 16.8 31.2C16.8 30.2 17 28.9 17.2 27.9C17.5 26.8 18 25.8 18.4 24.9C18.9 23.9 19.1 23.4 20.1 22.4C21.1 21.3 23.2 19.5 24.4 18.6C25.7 17.8 26.8 17.6 27.8 17.2C28.8 16.9 29.1 16.8 30.4 16.8ZM12.4 35C12.4 35 13 37.7 13.4 38.9C13.9 40 14.4 41 14.9 42C15.5 42.9 16 43.6 16.8 44.5C17.5 45.3 18.2 46.1 19.4 47C20.5 48 22.2 49.2 23.9 50C25.5 50.7 28.9 51.5 28.9 51.5L12.4 51.5L12.4 35ZM51.5 35L51.5 51.5L35 51.5C35 51.5 38.7 50.5 40 50C41.2 49.5 41.9 49.1 42.9 48.5C43.8 47.8 44.7 47 45.5 46.2C46.4 45.5 47.2 44.6 47.9 43.8C48.5 42.9 49 42.1 49.5 41.1C50.1 40.1 50.6 38.8 51 37.8C51.3 36.7 51.5 35 51.5 35Z"/><g fill="currentColor" stroke="none"><circle cx="27" cy="32" r="2.9"/><circle cx="37" cy="32" r="2.9"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1L56 8.2L55.8 56L8.2 55.9L8.2 8.1ZM12.6 12.4L28.1 12.6C28.1 12.6 26.4 12.9 25.4 13.2C24.5 13.6 23.5 14 22.4 14.7C21.4 15.3 20.1 16.2 19.2 16.9C18.4 17.7 18.1 17.8 17.2 18.9C16.4 20.1 15 21.9 14.2 23.6C13.3 25.4 12.4 29.6 12.4 29.6L12.6 12.4ZM36 12.4L51.5 12.6L51.5 28.9C51.5 28.9 50.8 25.5 50 23.9C49.3 22.2 48.2 20.4 46.9 18.9C45.5 17.5 43.4 15.8 42.1 14.9C40.9 14.1 40.7 14.1 39.6 13.7C38.6 13.2 36 12.4 36 12.4ZM30.4 16.8C31.6 16.7 33.5 16.7 34.5 16.9C35.6 17 36.2 17.2 37 17.4C37.7 17.7 38.5 18 39.2 18.4C40 18.9 40.7 19.2 41.8 20.1C42.8 21.1 44.5 23.1 45.4 24.4C46.2 25.6 46.4 26.5 46.8 27.6C47.1 28.6 47.4 29.4 47.4 30.9C47.4 32.3 47.1 34.9 46.8 36.4C46.4 37.8 45.9 38.6 45.5 39.5C45 40.4 44.8 40.8 43.9 41.8C42.9 42.7 40.7 44.6 39.5 45.4C38.4 46.1 38 46.2 37.1 46.5C36.3 46.8 35.8 47.1 34.4 47.1C32.9 47.2 30 47.1 28.6 47C27.3 46.8 27.2 46.6 26.4 46.2C25.5 45.9 24.6 45.5 23.6 44.8C22.5 44 21 42.5 20.2 41.8C19.5 41 19.4 40.7 18.9 40C18.5 39.2 18.1 38.4 17.8 37.5C17.4 36.7 17.1 35.8 16.9 34.6C16.8 33.5 16.7 32.1 16.8 30.9C16.8 29.8 16.9 29 17.2 27.9C17.6 26.9 18.3 25.3 18.8 24.4C19.2 23.4 19.1 23.4 20.1 22.4C21 21.5 23.2 19.5 24.4 18.6C25.7 17.8 26.8 17.6 27.8 17.2C28.8 16.9 29.3 16.8 30.4 16.8ZM12.4 34.4C12.4 34.4 13.2 38.1 13.9 39.9C14.7 41.6 16.1 43.5 17.1 44.8C18 46 18.7 46.6 19.6 47.4C20.6 48.1 21.7 48.9 22.6 49.5C23.6 50 24.2 50.3 25.2 50.6C26.3 51 28.9 51.6 28.9 51.6L12.4 51.5L12.4 34.4ZM51.5 35L51.5 51.6L35 51.6C35 51.6 37.5 51.1 38.5 50.8C39.6 50.4 40.6 49.9 41.5 49.5C42.3 49 43 48.6 43.9 47.9C44.7 47.1 45.6 46.5 46.6 45.2C47.6 44 49 42.2 49.9 40.5C50.7 38.8 51.5 35 51.5 35Z"/><circle cx="31.95" cy="31.95" r="15.6" fill="currentColor" stroke="none"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M12.2 12.1L51.9 12.1L52.1 15.6L56 13.2L57.9 15.9L52 20.2L52 43.9L57.9 48L56.1 50.9L52.1 48.5L51.8 52L12.2 52L12.1 48.5L11.8 48.5L8.1 51L6.2 48.1L12.1 43.9L12.1 20.1L6.2 15.8L8.1 13.2L11.9 15.6L12.2 12.1ZM15.8 15.8L28.6 15.8C28.6 15.8 25.6 16.6 24.1 17.4C22.6 18.3 19.6 21.1 19.6 21.1L15.7 18.2L15.8 15.8ZM35.5 15.8L48.4 15.8L48.4 18.2L44.2 21.1C44.2 21.1 41.7 18.5 40.2 17.6C38.8 16.8 35.5 15.8 35.5 15.8ZM31.1 19.2C32.4 19.1 33.3 19.3 34.4 19.4C35.4 19.6 36.4 19.9 37.4 20.4C38.3 20.8 39.3 21.4 40 21.9C40.6 22.4 41.1 23.4 41.1 23.4L31.9 29.6L22.9 23.2C22.9 23.2 23.7 22.2 24.4 21.8C25 21.2 25.8 20.7 26.9 20.2C28.1 19.8 29.9 19.4 31.1 19.2ZM15.7 22.9L17.4 24.1L15.8 29.4L15.7 22.9ZM48.1 22.9L48.4 29.4L46.5 24.2L48.1 22.9ZM20.6 26.4L28.6 31.9L20.9 37.6C20.9 37.6 19.9 36.1 19.6 35.2C19.4 34.4 19.3 33.2 19.2 32.2C19.2 31.3 19.2 30.6 19.4 29.6C19.7 28.7 20.6 26.4 20.6 26.4ZM43.4 26.4C43.4 26.4 44 27.5 44.2 28.2C44.5 29 44.7 29.6 44.8 30.6C44.8 31.7 44.8 33.4 44.5 34.5C44.3 35.7 43.5 37.6 43.5 37.6L35.4 32L43.4 26.4ZM31.9 34.4C31.9 34.4 39.5 39.4 41 40.5C42.6 41.6 41.1 41 41.1 41C41.1 41 40 42.1 39.4 42.5C38.7 43 38 43.5 37 43.9C36 44.2 34.8 44.7 33.4 44.8C31.9 44.8 29.9 44.7 28.4 44.4C27 44 25.5 43.1 24.6 42.5C23.6 41.9 22.9 40.8 22.9 40.8L31.9 34.4ZM15.8 34.6L17.4 39.6L15.8 41.1L15.8 34.6ZM48.4 34.6L48.1 41.1L46.5 39.8L48.4 34.6ZM19.6 43C19.6 43 22.2 45.6 23.9 46.5C25.5 47.4 29.2 48.5 29.2 48.5L15.8 48.5L15.7 45.9L19.6 43ZM44.1 43L48.4 45.8L48.2 48.5L34.8 48.5C34.8 48.5 38.6 47.2 39.9 46.6C41.1 46.1 41.3 45.8 42 45.1C42.8 44.5 44.1 43 44.1 43Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.1 14.2C24.2 14.2 48.9 14.4 48.9 14.4C48.9 14.4 56.6 42.8 58.1 48.6C59.7 54.5 58.1 49.6 58.1 49.6L6 49.6C6 49.6 4.5 51.6 6 49C7.6 46.4 13.6 36.8 15.4 34C17.3 31.2 16.5 32.7 17.2 32.1C18 31.6 18.8 31 19.9 30.6C20.9 30.2 18.8 29.9 23.6 29.8C28.5 29.6 49.2 29.6 49.2 29.6L46 17.9L19.1 17.9C19.1 17.9 18.7 18 18.6 17.4C18.6 16.9 18.6 15.3 18.6 14.8C18.7 14.2 14.1 14.3 19.1 14.2ZM23.8 33.5C28.7 33.3 50.1 33.5 50.1 33.5L53.5 46L12.2 46C12.2 46 17.2 38.1 18.6 36.1C19.9 34.2 19.6 34.8 20.4 34.4C21.3 33.9 18.8 33.6 23.8 33.5Z"/><g fill="currentColor" stroke="none"><circle cx="33.9" cy="39.7" r="2.4"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.1 14.2C24.2 14.2 48.9 14.4 48.9 14.4C48.9 14.4 56.6 42.8 58.1 48.6C59.7 54.5 58.1 49.6 58.1 49.6L6 49.6C6 49.6 4.5 51.6 6 49C7.6 46.4 13.6 36.8 15.4 34C17.3 31.2 16.5 32.7 17.2 32.1C18 31.6 18.8 31 19.9 30.6C20.9 30.2 18.8 29.9 23.6 29.8C28.5 29.6 49.2 29.6 49.2 29.6L46 17.9L19.1 17.9C19.1 17.9 18.7 18 18.6 17.4C18.6 16.9 18.6 15.3 18.6 14.8C18.7 14.2 14.1 14.3 19.1 14.2ZM23.8 33.5C28.7 33.3 50.1 33.5 50.1 33.5L53.5 46L12.2 46C12.2 46 17.2 38.1 18.6 36.1C19.9 34.2 19.6 34.8 20.4 34.4C21.3 33.9 18.8 33.6 23.8 33.5Z"/><g fill="currentColor" stroke="none"><circle cx="30.3" cy="39.7" r="2.4"/><circle cx="37.6" cy="39.7" r="2.4"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.1 14.2C24.1 14.2 48.6 14.3 48.6 14.3L58.1 49.5L6.2 49.6C6.2 49.6 4.5 51.6 6 49C7.6 46.4 13.6 36.9 15.4 34C17.3 31.2 16.6 32.6 17.4 32C18.1 31.5 18.9 30.9 20.1 30.6C21.2 30.2 19.4 29.8 24.2 29.6C29.1 29.5 49.1 29.6 49.1 29.6L46 17.9C46 17.9 23.7 18 19.1 17.9C14.6 17.9 18.8 18.1 18.8 17.6C18.7 17 18.7 15.2 18.8 14.7C18.8 14.1 14.2 14.3 19.1 14.2ZM23.6 33.5C28.4 33.4 50 33.5 50 33.5L53.5 46L12.2 46C12.2 46 17.5 37.6 18.9 35.6C20.4 33.6 20.2 34.4 20.9 34C21.7 33.7 18.7 33.6 23.6 33.5Z"/><g fill="currentColor" stroke="none"><circle cx="26.6" cy="39.7" r="2.4"/><circle cx="34" cy="39.7" r="2.4"/><circle cx="41.3" cy="39.7" r="2.4"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.1 14.2C24.1 14.2 43.5 14.1 48.5 14.2C53.4 14.4 48.8 14.4 49 14.9C49.2 15.5 49.6 17.4 49.6 17.4C49.6 17.4 51.7 15.9 52.2 15.6C52.8 15.2 53.1 15.4 53.1 15.4L54.8 18.1L50.6 21.4L58.1 49.5L6 49.6C6 49.6 4.4 51.6 6 49C7.7 46.3 14 36.4 15.8 33.5C17.7 30.7 16.7 32.5 17.4 32C18 31.6 19.1 31 19.9 30.6C20.7 30.3 21.2 30.1 22.1 29.9C23.1 29.8 25.4 29.6 25.4 29.6C25.4 29.6 12.2 20.5 9.4 18.6C6.7 16.6 9.1 17.9 9.1 17.9C9.1 17.9 10.4 15.9 10.8 15.4C11.1 15 11 15.3 11.2 15.3C11.5 15.4 8.8 13.5 12.2 15.9C15.7 18.3 31.8 29.8 31.8 29.8L46.5 19.6L46 17.9L19.1 17.9C19.1 17.9 18.7 18 18.6 17.4C18.6 16.9 18.6 15.3 18.6 14.8C18.7 14.2 14.2 14.3 19.1 14.2ZM47.2 23.6L49.1 29.6L38.6 29.6L47.2 23.6ZM23.8 33.5C24.6 33.4 26.4 33.6 26.4 33.6L14.8 41.8C14.8 41.8 17 38.2 17.9 37C18.7 35.8 19.5 35.1 20.1 34.5C20.8 34 20.9 34 21.6 33.9C22.2 33.7 22.9 33.5 23.8 33.5ZM37.2 33.5L50 33.5L53.1 44.6L37.2 33.5ZM31.9 34.5L48.5 46L15.3 46L31.9 34.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M21.9 5.8C25.8 5.7 45 5.8 45 5.8L52.5 33.5L11.6 33.5C11.6 33.5 10.3 35 11.6 33C12.8 30.9 17.4 23.6 18.9 21.4C20.3 19.2 19.8 20.2 20.4 19.8C20.9 19.3 21.4 19 22.2 18.6C23.1 18.3 21.7 18 25.6 17.9C29.4 17.7 45.4 17.8 45.4 17.8L42.8 8.8C42.8 8.8 25.4 8.8 21.9 8.8C18.3 8.7 21.5 8.8 21.4 8.3C21.4 7.9 21.4 6.6 21.4 6.2C21.5 5.7 17.9 5.8 21.9 5.8ZM24.9 20.9C28.8 20.9 46 20.9 46 20.9L48.6 30.6L16.6 30.6C16.6 30.6 20.5 24.4 21.6 22.9C22.6 21.3 22.6 21.8 23.1 21.4C23.7 21.1 21.1 21 24.9 20.9ZM28.6 35.5C28.6 35.5 30.5 35.5 30.9 35.5C31.4 35.6 31.4 36 31.4 36L30.1 45.4L33.5 47.6L36.8 45.4L35.8 35.8L38.5 35.9L39.6 43.5L44 40.5C44 40.5 44.7 41.2 45 41.5C45.2 41.9 45.5 42.5 45.5 42.5C45.5 42.5 46.3 42.3 45.4 43C44.4 43.6 40 46.5 40 46.5L40 48.4C40 48.4 38.3 48.3 37.6 48.5C37 48.6 36 49.5 36 49.5C36 49.5 39.1 52 40 52.5C40.8 52.9 40.8 52.4 41.1 52.2C41.5 52.1 42 51.7 42.4 51.4C42.7 51 42.9 50.6 43 50C43.1 49.5 43.1 48.6 43 48C42.8 47.5 42 46.5 42 46.5C42 46.5 43.2 45.4 43.6 45.1C44.1 44.9 44.5 45.2 44.5 45.2C44.5 45.2 45.5 46.9 45.8 47.6C46 48.4 46.1 48.9 46 49.8C45.8 50.6 45.4 51.8 45 52.5C44.5 53.3 43 54.5 43 54.5L45.5 56.5L44.4 58.1C44.4 58.1 43.7 58.3 43 58C42.4 57.6 40.6 56.2 40.6 56.2C40.6 56.2 40.4 57.9 38.4 58.2C36.4 58.6 30.6 58.6 28.6 58.2C26.6 57.9 26.4 56.4 26.4 56.4L23.4 58.2C23.4 58.2 22.7 58.2 22.4 57.9C22 57.5 21.6 56.2 21.6 56.2L23.9 54.5C23.9 54.5 22.3 53 21.9 52.2C21.4 51.5 21.2 50.8 21.1 50C20.9 49.3 20.9 48.6 21.1 47.8C21.4 46.9 22.6 45.1 22.6 45.1C22.6 45.1 23 44.9 23.4 45.1C23.8 45.4 24.9 46.5 24.9 46.5C24.9 46.5 24.2 47.5 24.1 48C23.9 48.6 23.9 49.4 23.9 50C24 50.5 24.3 50.9 24.6 51.2C24.8 51.6 25.2 51.9 25.6 52.1C25.9 52.4 26 52.9 26.9 52.5C27.8 52 30.9 49.5 30.9 49.5C30.9 49.5 30.2 48.7 29.6 48.5C28.9 48.2 26.9 48.2 26.9 48.2L26.9 46.8L21.6 42.8C21.6 42.8 21.4 42.5 21.6 42.1C21.9 41.8 23.1 40.5 23.1 40.5L27.4 43.4C27.4 43.4 27.9 37.8 28.1 36.5C28.4 35.2 28.6 35.5 28.6 35.5ZM33.4 51.5L38 54.6C38 54.6 37 55.7 36.4 56C35.7 56.4 34.8 56.7 34 56.8C33.3 56.8 32.7 56.8 31.9 56.5C31.2 56.3 30.3 55.9 29.8 55.5C29.2 55.2 28.9 54.6 28.9 54.6L33.4 51.5Z"/><g fill="currentColor" stroke="none"><circle cx="33.4" cy="25.7" r="1.9"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M47 17.4L48.6 19.1C48.6 19.1 49.8 18.4 48.5 19.4C47.3 20.5 41.1 25.6 41.1 25.6C41.1 25.6 43.5 26.4 44.6 26.9C45.8 27.3 47.8 28.4 47.8 28.4C47.8 28.4 52 25.1 53.5 24.1C54.9 23.2 56.5 22.8 56.5 22.8C56.5 22.8 56.7 22.7 57 23.2C57.4 23.8 58.2 23.9 58.5 26.1C58.9 28.2 59.1 33.6 59 36C58.9 38.3 58.4 39.1 58 40.2C57.5 41.4 56.6 42.3 56 42.9C55.5 43.4 55.9 43.4 54.9 43.4C53.9 43.4 51.4 43.2 50 42.9C48.7 42.5 48.2 42.3 46.8 41.5C45.3 40.8 41.1 38.2 41.1 38.2C41.1 38.2 40.1 37.8 41.5 39C42.9 40.1 48.2 44.1 49.5 45.2C50.9 46.4 49.6 45.6 49.6 45.6C49.6 45.6 49.2 46.5 48.8 46.6C48.3 46.8 48.8 47.8 47 46.6C45.3 45.5 38.5 40 38.5 40C38.5 40 35.9 41.3 34.2 41.9C32.6 42.4 30.1 43 28.8 43.1C27.4 43.3 27.2 43.2 25.9 43C24.7 42.7 21.4 41.4 21.4 41.4C21.4 41.4 16.4 45.8 14.8 46.6C13.2 47.5 12.3 46.7 11.8 46.6C11.2 46.6 11.4 46.4 11.4 46.4C11.4 46.4 10.5 46.8 11.8 45.8C13 44.7 18.9 40 18.9 40L16.4 37.5C16.4 37.5 13.9 39.6 12.9 40.2C12 40.9 11.6 41.2 10.6 41.5C9.5 41.9 7.5 42.2 6.5 42.2C5.6 42.3 5.2 41.6 5.2 41.6L5.2 25.4L19.4 25.2C19.4 25.2 20.2 25.6 19.1 24.6C18 23.7 12.8 19.8 12.8 19.8L14.2 17.8L24.4 25.4C24.4 25.4 26.8 23.9 27.9 23.4C29.1 23 30.3 22.9 31.4 22.9C32.4 22.8 33.1 22.9 34.2 23.1C35.4 23.4 38.2 24.4 38.2 24.4L47 17.4ZM30.6 25.6C31.4 25.5 32.9 25.6 33.6 25.8C34.4 25.9 34.8 26 35 26.1C35.3 26.3 35.4 26.6 35.4 26.6L30.6 30.2L26.9 27.2C26.9 27.2 26.8 27 27.1 26.9C27.3 26.7 27.8 26.4 28.4 26.1C28.9 25.9 29.7 25.6 30.6 25.6ZM55.4 26.1L55.9 26.4C55.9 26.4 56.1 26.7 56.1 27.8C56.2 28.8 55.9 31.2 56 32.6C56 34.1 56.3 35.4 56.2 36.5C56.2 37.5 55.8 38.5 55.5 39.1C55.3 39.8 55 40.3 54.6 40.5C54.3 40.8 54.1 40.8 53.4 40.8C52.6 40.7 51.3 40.5 50.2 40.1C49.2 39.8 48.3 39.4 47.1 38.8C46 38.1 43.4 36.4 43.4 36.4C43.4 36.4 45.4 33.5 47.4 31.8C49.4 30.1 55.4 26.1 55.4 26.1ZM38.4 27.8C38.4 27.8 41.4 28.5 42.5 28.9C43.6 29.2 45 29.9 45 29.9C45 29.9 43.4 32 42.4 33.1C41.3 34.2 38.6 36.5 38.6 36.5L33.1 32.2C33.1 32.2 32.6 32.4 33.5 31.6C34.3 30.9 38.4 27.8 38.4 27.8ZM8.1 28.1L21.1 28.1C21.1 28.1 22.6 26.8 21.1 28.4C19.7 29.9 14.5 35.4 12.7 37.1C10.8 38.9 10.8 38.5 10.1 38.9C9.3 39.2 8.2 39.4 8.2 39.4C8.2 39.4 7.8 40.8 7.8 39C7.7 37.1 7.7 30.3 7.8 28.4C7.8 26.6 8.1 28.1 8.1 28.1ZM24.4 29.1L28.4 32.1C28.4 32.1 23.4 36.4 22.1 37.4C20.9 38.3 20.9 37.9 20.9 37.9L18.4 35.5L24.4 29.1ZM30.8 34L36 38C36 38 36.9 38 35.6 38.5C34.4 38.9 29.9 40.3 28.2 40.5C26.6 40.8 26.3 40.3 25.6 40.1C24.9 40 24.1 39.5 24.1 39.5L30.8 34Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8 18.2C8.2 18.2 8.6 18.4 8.6 18.4C8.6 18.4 12.1 43 12.9 48C13.8 53 13.3 48.5 13.3 48.5L50.6 48.5C50.6 48.5 50.2 53 51 48C51.8 43 55.5 18.4 55.5 18.4L56.8 18.4L52.1 49.8L11.8 49.8L7 18.6C7 18.6 7.7 18.3 8 18.2Z"/><polygon fill="currentColor" stroke="none" points="27.5,14.1 27.5,34.2 19.4,34.2 19.4,14.1"/><polygon fill="currentColor" stroke="none" points="44.6,14.1 44.6,34.2 36.5,34.2 36.5,14.1"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8 20.4C8 20.4 8.5 20.3 8.8 20.6C9.2 21 9.6 21.6 9.9 22.4C10.3 23.3 10 23.8 10.8 25.9C11.5 27.9 13.7 33 14.4 35C15.2 37 14.9 37.1 15.2 37.9C15.6 38.6 15.8 39 16.2 39.5C16.7 39.9 13 40.4 17.9 40.5C22.9 40.7 41.2 40.7 46.1 40.5C51.1 40.2 47.2 39.7 47.6 39.1C48.1 38.6 48.6 37.7 48.9 37.1C49.1 36.6 48.5 37.2 49 35.8C49.6 34.3 51.1 30.8 52 28.4C52.8 26 53.7 22.7 54.1 21.4C54.6 20.1 54.6 20.7 54.9 20.6C55.1 20.4 55.5 20.3 55.8 20.4C56 20.6 56.5 21 56.6 21.2C56.8 21.5 56.8 21.6 56.8 22.1C56.7 22.7 57.2 21.6 56.2 24.4C55.2 27.1 51.9 36.1 50.8 38.9C49.6 41.6 50.2 40.1 49.6 40.8C49.1 41.4 47.9 42.3 47.2 42.8C46.6 43.2 50.3 43.2 45.5 43.2C40.8 43.3 23.4 43.3 18.6 43.2C13.7 43.2 17.1 43 16.4 42.8C15.8 42.5 15.4 42.4 14.8 41.6C14.1 40.9 13.8 41.1 12.6 38C11.3 35 8.1 26 7.2 23.2C6.2 20.5 6.8 22.1 7 21.6C7.1 21.2 8 20.4 8 20.4ZM25.9 21.6C26.9 21.2 26.3 21.3 27.2 21.8C28.2 22.2 30.5 24 31.4 24.4C32.4 24.7 32.2 24.4 32.8 24.1C33.3 23.7 34.3 22.9 35 22.4C35.6 22 36.3 21.8 36.9 21.6C37.4 21.5 37.4 21.4 38.2 21.9C39.1 22.3 41.3 24 42.1 24.4C43 24.7 42.7 24.5 43.5 24.1C44.2 23.6 46.1 22.2 46.9 21.9C47.6 21.5 47.3 21.4 48 21.6C48.8 21.8 50.5 22.6 51 23.1C51.6 23.5 51.5 23.8 51.5 24.1C51.6 24.5 51.3 24.9 51.1 25.1C51 25.4 51.2 25.5 50.5 25.4C49.9 25.4 47.4 24.6 47.4 24.6C47.4 24.6 45.2 26.2 44.5 26.6C43.7 26.9 43.1 26.9 42.5 26.9C42 27 41.8 27 41 26.6C40.1 26.2 38.4 24.9 37.6 24.6C36.9 24.2 37.2 24.3 36.5 24.6C35.7 25 34 26.5 33 26.9C31.9 27.2 31 26.9 29.9 26.6C28.9 26.2 27.6 24.8 26.8 24.6C25.9 24.3 25.8 24.6 25.1 24.9C24.5 25.3 23.6 26.3 22.9 26.6C22.1 27 21 26.9 20.4 26.9C19.9 26.8 20.1 26.9 19.4 26.6C18.6 26.2 16.9 24.9 16.1 24.6C15.4 24.2 15.1 24.6 14.8 24.8C14.4 24.9 14.3 25.2 13.9 25.4C13.6 25.5 12.8 25.4 12.8 25.4L12.1 24.4C12.1 24.4 12.2 23.5 12.8 23.1C13.3 22.6 14.6 22 15.2 21.8C15.9 21.5 15.6 21.3 16.6 21.8C17.6 22.2 21.2 24.4 21.2 24.4C21.2 24.4 24.9 22.1 25.9 21.6ZM17.6 29.9C18.7 29.8 23.6 29.9 23.6 29.9L24.4 31.4L23.6 32.2C23.6 32.2 18.7 32.4 17.6 32.4C16.6 32.3 17.3 32.3 17.1 32.1C17 32 16.9 31.7 16.9 31.4C16.8 31.1 16.8 30.6 16.9 30.4C17.1 30.1 16.4 29.9 17.6 29.9ZM28.9 29.9C29.9 29.8 33.7 29.8 34.9 29.9C36 30.1 35.4 30.3 35.5 30.6C35.7 30.8 35.6 31.6 35.6 31.6C35.6 31.6 35.8 32.2 34.6 32.4C33.5 32.5 30.1 32.5 29.1 32.4C28 32.2 28.2 31.6 28.2 31.6L28.4 30.1C28.4 30.1 27.8 29.9 28.9 29.9ZM40.5 29.9C41.5 29.8 44.9 29.8 46 29.9C47 29.9 46.6 30.1 46.8 30.4C46.9 30.7 47 31.6 47 31.6C47 31.6 47.4 32.1 46.4 32.2C45.3 32.4 41.6 32.5 40.5 32.4C39.3 32.2 39.8 32 39.6 31.6C39.5 31.3 39.6 30.4 39.6 30.4C39.6 30.4 39.4 30 40.5 29.9ZM23.4 35.4C24.4 35.3 28.1 35.2 29.1 35.4C30.2 35.5 29.7 35.7 29.9 36C30 36.2 30 36.7 29.9 37C29.7 37.2 30 37.6 28.9 37.8C27.9 37.9 24.4 37.8 23.4 37.6C22.3 37.5 22.7 37.2 22.6 36.9C22.4 36.5 22.6 35.6 22.6 35.6C22.6 35.6 22.3 35.4 23.4 35.4ZM35 35.4C36.1 35.3 39.4 35.3 40.4 35.4C41.4 35.4 41 35.6 41 35.6L41.2 36.9C41.2 36.9 41.4 37.6 40.4 37.8C39.3 37.9 35.8 37.8 34.8 37.6C33.7 37.5 34 37 34 37L34 35.9C34 35.9 34 35.4 35 35.4Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.4 13.4C31.4 13.4 31.9 13.4 32.1 13.6C32.4 13.7 32.6 13.7 32.6 14.2C32.7 14.7 32.5 16 32.6 16.6C32.8 17.2 33.5 17.8 33.5 17.8C33.5 17.8 35.6 17.7 36.2 17.9C36.9 18 37.1 18.8 37.1 18.8C37.1 18.8 36.8 19.6 36.2 19.8C35.7 19.9 34.3 19.6 33.8 19.8C33.2 19.9 32.8 20.4 32.8 20.4C32.8 20.4 32.9 22.4 32.8 23.1C32.6 23.7 31.9 24.1 31.9 24.1C31.9 24.1 31.6 24.2 31.4 24.1C31.2 23.9 30.9 24 30.8 23.4C30.6 22.9 30.7 21.2 30.6 20.6C30.6 20.1 30.2 20.1 30.2 20.1C30.2 20.1 28.2 20.1 27.6 19.9C26.9 19.7 26.4 18.9 26.4 18.9L26.8 17.9C26.8 17.9 28.8 18 29.4 17.9C30.1 17.7 30.4 17.2 30.4 17.2C30.4 17.2 30.5 14.9 30.6 14.2C30.8 13.6 31.4 13.4 31.4 13.4ZM7.8 28.1C7.8 28.1 8.5 28.1 8.8 28.6C9.2 29.2 9.6 30.6 9.8 31.1C10.1 31.7 10.4 31.8 10.4 31.8C10.4 31.8 10.8 32 11.4 31.6C12.1 31.3 13.6 29.9 14.3 29.6C15.1 29.2 15.4 29.4 15.8 29.4C16.3 29.5 16.2 29.3 17.1 29.8C17.9 30.2 20.6 32 20.6 32C20.6 32 24.7 29.8 25.9 29.4C27 29.1 26.7 29.2 27.6 29.6C28.6 30.1 31.6 32 31.6 32C31.6 32 35.6 29.8 36.8 29.4C37.9 29.1 37.5 29.2 38.5 29.6C39.4 30.1 41.5 31.7 42.4 32C43.2 32.4 43.1 32 43.6 31.6C44.2 31.3 44.9 30.5 45.5 30.1C46.1 29.8 46.6 29.5 47.2 29.4C47.9 29.4 48.4 29.3 49.2 29.6C50.1 30 51.6 31.4 52.4 31.8C53.1 32 53.5 31.4 53.5 31.4C53.5 31.4 54.1 29.7 54.4 29.1C54.6 28.6 55.1 28.1 55.1 28.1L56.1 28.1C56.1 28.1 57.7 26.3 56.8 29.4C55.8 32.6 51.6 43.6 50.4 46.9C49.1 50.1 49.4 48.5 49 49C48.6 49.4 48.6 49.3 48 49.5C47.3 49.8 50 50.4 45 50.5C40.1 50.7 22.9 50.6 18.1 50.5C13.4 50.5 17.2 50.4 16.6 50.1C16 49.9 15.3 49.7 14.6 48.9C13.8 48 13.6 48.4 12.2 45.1C10.9 41.9 7.6 32.2 6.8 29.4C5.9 26.6 7 28.4 7 28.4L7.8 28.1ZM15.3 31.9C15.3 31.9 18.8 34.1 20.1 34.5C21.3 34.8 21.7 34.5 22.6 34.1C23.6 33.8 25 32.4 25.6 32C26.3 31.7 26.1 31.5 26.8 31.9C27.4 32.2 28.9 33.5 29.6 34C30.4 34.4 30.9 34.5 31.4 34.5C32 34.6 31.9 34.9 32.8 34.5C33.6 34 36 32.2 36.9 31.9C37.7 31.4 37.3 31.7 37.9 32C38.4 32.4 39.5 33.4 40.2 33.9C41 34.3 41.7 34.5 42.5 34.5C43.2 34.6 43.6 34.4 44.5 34C45.4 33.5 47.9 31.9 47.9 31.9C47.9 31.9 51 33.5 51.8 34.1C52.5 34.8 52.6 33.8 52 35.5C51.5 37.3 49.4 43 48.6 44.9C47.9 46.7 48 46.1 47.5 46.6C46.9 47.2 50.3 47.8 45.5 48C40.8 48.3 23.4 48.2 18.6 48.1C13.8 48 17.2 47.7 16.8 47.5C16.3 47.2 16.5 47.7 15.8 46.5C15.2 45.2 13.8 42 13.1 40.1C12.3 38.3 11.7 36.3 11.4 35.5C11.2 34.6 11.3 35.1 11.4 34.9C11.6 34.6 11.5 34.5 12.2 34C12.8 33.5 15.3 31.9 15.3 31.9ZM16.9 37.6C18 37.5 21.6 37.6 22.8 37.6C23.9 37.7 23.4 38 23.4 38L23.6 39.1C23.6 39.1 23.9 39.6 22.8 39.8C21.6 39.9 17.8 39.9 16.6 39.8C15.5 39.6 16 39.4 15.8 39.1C15.7 38.9 15.8 38.5 15.8 38.5C15.8 38.5 15.7 37.8 16.9 37.6ZM28.6 37.6C28.6 37.6 33.4 37.5 34.5 37.6C35.7 37.8 35.6 38.2 35.6 38.2L35.8 39C35.8 39 35.9 39.6 34.8 39.8C33.6 39.9 29.9 39.9 28.8 39.8C27.6 39.6 27.6 38.9 27.6 38.9L28.6 37.6ZM41.1 37.6C42.3 37.5 45.5 37.6 46.5 37.6C47.6 37.7 47.5 38.1 47.5 38.1L47.5 39.1C47.5 39.1 47.8 39.6 46.6 39.8C45.5 39.9 41.9 39.8 40.8 39.8C39.6 39.7 39.9 39.2 39.9 39.2L39.8 38.4C39.8 38.4 40 37.8 41.1 37.6ZM23.1 43C24.2 42.9 27.4 43 28.4 43C29.5 43.1 29.6 43.5 29.6 43.5L29.8 44.2C29.8 44.2 29.7 45.1 28.6 45.2C27.4 45.4 24.1 45.4 22.9 45.2C21.8 45.1 22.1 44.8 21.9 44.5C21.8 44.3 21.8 44 21.8 44C21.8 44 21.9 43.2 23.1 43ZM34.6 43C35.8 43 39.4 43 40.5 43C41.7 43.1 41.3 43.3 41.5 43.5C41.8 43.6 41.8 43.8 41.8 44C41.7 44.3 41.6 44.5 41.4 44.8C41.1 45 41.4 45.2 40.4 45.2C39.3 45.3 36.1 45.4 35 45.2C33.9 45.1 33.8 44.4 33.8 44.4L33.9 43.5C33.9 43.5 33.5 43.1 34.6 43Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.8 21.6C10.1 21.6 11.2 21.9 11.2 21.9C11.2 21.9 11.3 22.7 11.6 23.1C11.8 23.4 6.1 24 12.7 24.1C19.2 24.3 44.5 24.2 51 24.1C57.6 24.1 51.4 24.2 51.8 23.8C52.1 23.3 53 21.6 53 21.6L54.5 21.9C54.5 21.9 55.8 19.6 54.6 22.6C53.5 25.5 49.4 36.3 47.8 39.5C46.1 42.8 49.8 41.6 45 42C40.3 42.5 24.2 42.5 19.6 42.2C14.9 42 17.6 41.6 16.9 40.9C16.2 40.1 15.8 39 15.3 38C14.9 37.1 15 36.5 14.4 35.2C13.9 34 12.6 31.6 12.2 30.6C11.9 29.7 12.3 30 12.2 29.6C12 29.3 11.6 29 11.4 28.6C11.3 28.3 11.8 28.5 11.3 27.6C10.9 26.6 9.4 23.8 9.1 22.9C8.7 21.9 9.2 21.9 9.2 21.9C9.2 21.9 9.4 21.7 9.8 21.6ZM14.1 26.4C20.1 26.4 43.6 26.4 49.6 26.4C55.7 26.5 50.1 26.8 50.1 26.8C50.1 26.8 50.8 26 50.1 27.6C49.5 29.3 46.9 35.1 46.2 36.8C45.6 38.4 46.5 37.2 46.1 37.8C45.8 38.2 48.7 39.4 44.4 39.8C40 40.1 24.4 40 20.1 40C15.9 39.9 19.4 39.9 19.1 39.5C18.7 39.2 18.7 40 17.8 38C16.8 36 14.2 29.4 13.4 27.6C12.7 25.7 13.4 26.9 13.4 26.9C13.4 26.9 8 26.5 14.1 26.4Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M39 14.7C40.4 14.5 42.3 14.7 43.4 14.8C44.4 14.8 44.1 14.8 45.1 15.2C46.2 15.6 48.8 16.9 49.6 17.1C50.5 17.4 50 17.2 50.4 16.9C50.7 16.5 51.6 15.2 51.6 15.2C51.6 15.2 51.6 14.9 52 15.2C52.5 15.4 54 16.6 54.5 16.9C54.9 17.3 54.8 17.6 54.8 17.6L53.1 19.9C53.1 19.9 55 22.2 55.5 23.1C56.1 23.9 56.3 24.3 56.6 25.2C57 26.2 57.4 27.6 57.6 28.6C57.9 29.7 57.9 30.4 58 31.4C58 32.5 57.9 33.6 57.8 34.8C57.6 35.9 57.2 37.1 56.9 38.1C56.5 39.2 56.1 40.1 55.5 41C54.9 42 54 43.2 53.2 44C52.5 44.7 52.2 45.1 51.2 45.8C50.3 46.4 48.5 47.5 47.5 48C46.6 48.5 46.3 48.5 45.4 48.8C44.4 49 43.4 49.4 41.9 49.4C40.3 49.4 37.2 49 35.9 48.8C34.5 48.5 34.7 48.5 33.6 48C32.6 47.4 30.7 46.3 29.6 45.5C28.6 44.6 27.8 43.8 27.1 43C26.5 42.2 26 41.5 25.6 40.6C25.1 39.8 24.6 38.8 24.2 37.9C23.9 36.9 23.6 36.3 23.4 34.9C23.3 33.4 23.3 30.6 23.4 29.2C23.6 27.9 23.8 27.5 24.1 26.4C24.5 25.4 25.1 24 25.8 22.9C26.4 21.9 28.1 19.9 28.1 19.9L26.6 17.1L29.4 15.2C29.4 15.2 29.7 15.1 30.1 15.4C30.4 15.8 31.2 17.1 31.2 17.1C31.2 17.1 31.1 17.3 31.8 17.1C32.4 16.8 33.9 15.8 35.1 15.4C36.4 15 37.7 14.8 39 14.7ZM39 16.4C39.6 16.3 39.5 16.8 39.5 16.8L39.8 31.9C39.8 31.9 41.3 31.9 41.6 31.9C42 31.8 41.9 34.1 42 31.6C42 29 42.1 16.4 42.1 16.4C42.1 16.4 43.8 16.6 44.9 16.9C45.9 17.2 47 17.4 48.2 18.2C49.5 19.1 51.4 20.5 52.5 21.8C53.7 23 54.3 24.1 55 25.6C55.6 27.1 56.1 29.8 56.2 30.8C56.4 31.7 55.9 31.6 55.9 31.6L53.9 31.6C53.9 31.6 53.6 31.6 53.6 31.9C53.7 32.1 54 33 54 33L56 33C56 33 56.3 33.3 56.1 34C56 34.8 55.8 36.3 55.2 37.5C54.7 38.8 53.9 40.4 53 41.5C52.2 42.7 51 43.8 50.1 44.5C49.3 45.2 49.4 45.2 48.1 45.8C46.9 46.3 43.9 47.3 42.8 47.5C41.6 47.8 41.5 47.4 41.5 47.4C41.5 47.4 41.6 45.9 41.5 45.5C41.5 45.1 41.3 45 41 45C40.8 44.9 40.5 44.9 40.2 45C40 45 39.9 45 39.9 45.4C39.8 45.8 39.9 47.4 39.9 47.4C39.9 47.4 39.4 47.7 38.5 47.5C37.7 47.4 35.8 47 34.5 46.5C33.3 45.9 32 45.1 30.9 44.4C29.9 43.6 29.1 42.6 28.4 41.9C27.8 41.1 27.6 40.7 27.1 40C26.7 39.2 26.3 38.5 25.9 37.5C25.6 36.5 25.1 34.7 25.1 34C25 33.2 25.4 33 25.4 33L27.6 32.8L27.4 31.6L25.1 31.2C25.1 31.2 24.9 30.9 25.1 29.9C25.2 29 25.7 27 26.2 25.6C26.8 24.3 27.7 23 28.4 22.1C29.2 21.1 29.9 20.5 30.6 19.9C31.4 19.2 32.1 18.7 33 18.2C33.9 17.8 35 17.3 36 16.9C37.1 16.6 38.5 16.4 39 16.4ZM6.5 34C8.7 33.9 17.3 33.9 19.6 34C21.8 34 19.9 34.2 19.9 34.2L19.9 35.5L6.3 35.8L6.2 34.1C6.2 34.1 4.2 34 6.5 34Z"/><polygon fill="currentColor" stroke="none" points="9.1,21.6 23.0,21.6 23.0,23.6 9.1,23.6"/><polygon fill="currentColor" stroke="none" points="13.2,46.0 27.1,46.0 27.1,48.0 13.2,48.0"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.9 7.5C19.6 7.4 21.3 7.4 21.9 7.5C22.6 7.5 22.4 7.8 22.9 8C23.3 8.1 24.3 7.9 24.9 8.1C25.4 8.2 25.7 8.7 26.1 8.8C26.4 9 26.5 8.6 27.1 8.9C27.6 9.3 29.4 10.8 29.4 10.8C29.4 10.8 31.6 9.3 32.2 8.9C32.9 8.6 33.2 9 33.5 8.8C33.9 8.7 33.9 8.2 34.5 8.1C35.2 7.9 36.7 8.1 37.4 8C38 7.8 37.2 7.5 38.2 7.5C39.2 7.5 41.5 7.4 43.4 8C45.2 8.5 47.6 9.7 49.2 10.8C50.9 12 52.5 14 53.1 14.8C53.8 15.7 53 15.2 53.4 15.8C53.7 16.4 54.8 17.7 55 18.4C55.3 19.2 55 19.6 55.1 20.1C55.3 20.7 55.7 20.8 55.9 21.6C56 22.4 56.1 24.1 56 24.9C55.8 25.8 55.3 26.3 55.1 26.9C55 27.6 55.4 27.7 55 28.8C54.5 29.8 52.2 33.4 52.2 33.4C52.2 33.4 53.4 34.2 54 35C54.7 35.9 55.6 37.5 56 38.2C56.3 39 55.9 39 56 39.5C56.2 39.9 56.7 40.3 56.9 41.1C57 42 57 43.8 56.9 44.5C56.7 45.3 56.2 45.5 56 46C55.9 46.4 56.2 46.8 55.9 47.4C55.5 47.9 55 48.6 54.1 49.5C53.3 50.3 51.7 51.8 51 52.2C50.2 52.7 50.2 52.2 49.9 52.4C49.5 52.5 49.1 53.1 48.6 53.2C48.2 53.4 47.7 53.1 47 53.2C46.4 53.4 45.6 53.9 45 54C44.3 54.2 43.7 54.2 43 54C42.4 53.9 41.6 53.4 41 53.2C40.3 53.1 39.6 53.3 39.1 53.1C38.7 53 38.5 52.5 38.1 52.4C37.8 52.2 37.6 52.5 37 52.1C36.5 51.8 35.5 50.8 35 50.5C34.6 50.2 34.4 50.4 34.4 50.4C34.4 50.4 31.5 53.4 30.8 54C30 54.7 30 54.1 29.6 54.2C29.3 54.4 29.2 54.9 28.9 55C28.5 55.2 28 55 27.6 55.1C27.1 55.3 27.3 55.8 26.4 56C25.4 56.1 23 56.2 21.9 56C20.9 55.9 20.5 55.3 19.9 55.1C19.2 55 19.1 55.4 18.2 55C17.4 54.7 16.3 54.4 14.8 53.1C13.2 51.9 10.1 48.6 9.1 47.5C8 46.3 8.8 46.5 8.7 46.1C8.5 45.8 8.1 45.8 8 45.5C7.8 45.3 8.1 44.9 8 44.5C7.8 44.1 7.2 44.5 7 43.1C6.9 41.8 6.8 38.2 7 36.5C7.2 34.9 7.8 34.1 8.2 33.2C8.7 32.4 9.4 31.9 9.8 31.4C10.1 31 10.1 30.4 10.1 30.4C10.1 30.4 8.5 28.5 8.2 27.9C7.8 27.4 8.1 27.2 8 26.9C7.8 26.5 7.2 26.2 7 25.6C6.9 24.9 7.1 23.8 7 23.2C7 22.7 6.5 23.2 6.5 22.2C6.5 21.3 6.8 18.4 7 17.4C7.3 16.4 7.7 16.6 7.8 16.2C8 15.8 7.5 15.9 8.1 15.1C8.6 14.2 10.2 11.9 11.2 10.9C12.1 9.9 13.1 9.4 13.8 9.1C14.4 8.7 14.6 9 14.9 8.8C15.3 8.7 15.4 8.2 15.8 8.1C16.3 7.9 17.2 8.1 17.8 8C18.2 7.8 18.2 7.5 18.9 7.5ZM37 10.8C38.2 10.6 41.1 10.4 42.8 10.8C44.4 11.1 45.9 12.2 47 12.8C48 13.5 48.7 14.3 49.2 14.8C49.8 15.4 49.9 15.8 50.2 16.4C50.6 16.9 51 17.5 51.2 18.1C51.5 18.6 51.3 19.4 51.5 19.9C51.6 20.4 52.1 20.3 52.2 21.1C52.4 21.8 52.4 23.7 52.2 24.6C52.1 25.4 51.6 25.7 51.5 26.2C51.3 26.8 52 26.7 51.4 27.9C50.7 29.2 47.6 33.5 47.6 33.5C47.6 33.5 50.3 35.8 51.2 36.8C52.2 37.7 52.8 38.6 53.1 39.5C53.5 40.3 53.5 41 53.5 42C53.5 42.9 53.7 44.3 53.1 45.4C52.6 46.4 51 47.8 50.4 48.5C49.7 49.1 49.5 49.2 49 49.5C48.6 49.7 48 49.5 47.5 49.6C47.1 49.8 47.6 50.3 46.5 50.5C45.5 50.6 42.4 50.6 41.2 50.5C40.1 50.3 40.3 49.7 40 49.5C39.6 49.4 39.5 49.9 39 49.5C38.4 49.2 37.1 48.2 36.8 47.6C36.4 47.1 36.7 46.5 36.6 46.2C36.6 46 38.1 45.9 36.2 45.9C34.4 45.8 25.6 45.8 25.6 45.8C25.6 45.8 25.4 45.4 25.6 45.1C25.7 44.9 26.3 44.5 26.4 44C26.6 43.6 26.4 43 26.6 42.6C26.7 42.3 27.1 42.3 27.2 42C27.4 41.6 27.2 41.1 27.4 40.8C27.5 40.4 28.1 40 28.2 39.5C28.4 39.1 28.2 38.5 28.4 38.1C28.5 37.8 29 37.6 29.1 37.2C29.3 36.9 29.1 36.4 29.2 36C29.4 35.7 29.9 35.5 30.1 35C30.2 34.6 30.2 33.2 30.2 33.2L29.2 32.9C29.2 32.9 28.4 33.6 27.9 33.8C27.5 33.9 26.9 33.7 26.4 33.9C26 34 25.8 34.5 25.4 34.6C24.9 34.8 24.4 34.6 23.9 34.8C23.5 34.9 23.4 35.4 22.9 35.5C22.5 35.7 21.8 35.6 21.4 35.8C20.9 35.9 20.9 36.3 20.4 36.5C20 36.6 19.1 36.5 18.8 36.6C18.4 36.8 18.4 37.2 18.1 37.4C17.9 37.5 17.4 37.5 17.4 37.5C17.4 37.5 17.1 31.3 17.1 29.9C17.2 28.4 17.6 29.3 17.6 28.8C17.7 28.2 17.6 26.8 17.6 26.8C17.6 26.8 17.2 26.4 16.9 26.4C16.5 26.3 15.9 26.2 15.2 26.4C14.4 26.7 12.6 27.9 12.6 27.9C12.6 27.9 11.3 26.9 10.8 26.2C10.4 25.6 9.9 25.3 9.8 24.1C9.6 22.8 9.6 19.8 9.8 18.6C9.9 17.3 10.2 17.4 10.8 16.6C11.3 15.7 12.2 14.5 13.2 13.7C14.1 12.8 15.3 12.2 16.4 11.8C17.4 11.3 18.4 11.2 19.4 11.2C20.3 11.1 21.6 11.1 22.2 11.2C22.9 11.2 22.8 11.6 23.2 11.7C23.7 11.8 24.5 11.6 24.9 11.8C25.4 11.9 25.6 12.4 25.9 12.6C26.3 12.7 26.5 12.4 26.9 12.8C27.4 13.1 28.2 14.1 28.8 14.3C29.3 14.6 29.5 14.7 30.1 14.4C30.8 14.2 31.8 13.1 32.4 12.8C32.9 12.4 33 12.7 33.4 12.6C33.7 12.4 34 11.9 34.4 11.8C34.8 11.6 35.3 11.8 35.8 11.7C36.2 11.5 35.9 10.9 37 10.8Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.6 9.2C30.5 9.1 30.9 9.1 31.4 9.2C31.8 9.2 32 9.6 32.5 9.8C32.9 9.9 33.1 9.2 33.9 9.8C34.6 10.4 36.6 12.5 37.2 13.3C37.9 14.2 37.5 14.4 37.6 14.8C37.8 15.1 37.8 14.4 38.4 15.3C38.9 16.3 40.3 19.4 40.9 20.4C41.4 21.3 41.5 20.8 41.6 21.1C41.8 21.4 41.7 21.8 41.9 22.1C42 22.5 42.4 22.4 42.8 23.1C43.1 23.7 43.7 25.2 44 25.8C44.4 26.3 44.7 26 44.9 26.4C45 26.7 44.8 27.4 45 27.8C45.2 28.1 45.7 27.9 46 28.6C46.4 29.2 47 30.8 47.4 31.4C47.7 31.9 47.9 31.7 48 32C48.2 32.4 48.2 32.9 48.4 33.2C48.5 33.6 49 33.6 49.1 34C49.3 34.3 49 34.4 49.5 35.4C50.1 36.3 51.9 38.6 52.5 39.5C53 40.5 52.6 40.6 52.8 41C52.9 41.3 53.3 41.1 53.5 41.5C53.8 41.8 53.7 42.3 54 43C54.4 43.6 55.3 44.6 55.6 45.2C56 45.9 55.7 46.2 56 46.8C56.2 47.3 56.8 47.9 57 48.5C57.1 49.2 57.2 50.1 57 50.9C56.8 51.6 56.2 52.3 55.8 52.9C55.3 53.4 61.1 53.8 54.1 54C47.2 54.3 20.8 54.3 13.9 54.2C7.1 54.2 13.5 54.4 12.9 54C12.4 53.5 10.9 52.7 10.4 51.6C10 50.6 10.2 48.6 10.3 47.8C10.5 46.9 11.1 46.8 11.3 46.4C11.6 45.9 11 46 11.6 45C12.1 44.1 14 41.6 14.6 40.6C15.1 39.7 14.6 39.8 14.8 39.5C14.9 39.2 15 39.8 15.6 38.9C16.1 37.9 17.5 34.9 18.1 34C18.6 33 18.7 33.7 18.9 33.4C19 33 18.9 32.3 19.1 31.9C19.3 31.6 19.7 31.6 20.1 31.1C20.4 30.5 21 29 21.4 28.4C21.7 27.9 22.1 27.9 22.1 27.9L22.1 27.4L21.4 27.1C21.4 27.1 15.6 32.4 14.3 33.5C13.1 34.5 13.8 33.5 13.8 33.5C13.8 33.5 8.3 28.1 7.2 26.8C6 25.4 6.9 25.6 7 25.1C7 24.7 7.2 24.6 7.7 24.1C8.2 23.7 9.1 23.4 9.9 22.6C10.8 21.9 11.8 20.6 12.8 19.6C13.9 18.7 15.3 18.1 16.4 17.1C17.4 16.2 18.1 15.2 19.4 14.2C20.6 13.1 22.9 11.5 23.9 10.9C24.8 10.4 24.7 10.9 25.1 10.8C25.6 10.6 25.6 10 26.4 9.8C27.1 9.5 28.8 9.2 29.6 9.2ZM28.4 12.9C29.8 12.4 30.6 12.7 31.6 13.1C32.5 13.5 33.1 14.2 34 15.3C34.8 16.6 35.9 19.3 36.5 20.2C37 21.2 37.1 20.5 37.2 20.9C37.4 21.2 37.4 21.9 37.5 22.2C37.7 22.6 38 22.3 38.4 22.9C38.7 23.6 39.4 25.3 39.8 25.9C40.1 26.4 40.1 25.8 40.5 26.4C40.8 27.1 41.4 28.8 42 29.8C42.5 30.7 43.3 31.4 43.6 32C44 32.6 43.8 33 44 33.4C44.3 33.7 44.8 33.7 45 34C45.1 34.4 45 34.9 45.1 35.2C45.3 35.6 45.7 35.6 46 36.1C46.4 36.7 46.9 38.2 47.2 38.8C47.6 39.3 47.9 39.1 48 39.5C48.2 39.8 48.1 40.4 48.4 40.8C48.6 41.1 49.1 41.2 49.2 41.5C49.4 41.8 49.1 42 49.5 42.5C49.8 43.1 50.9 44.4 51.2 45C51.6 45.7 51.4 46.1 51.6 46.5C51.9 46.8 52.3 46.7 52.5 47.1C52.6 47.6 52.9 48.7 52.6 49.4C52.4 50 57.3 50.6 51.2 50.9C45.2 51.1 22.2 51.1 16.1 51C10.1 50.8 15 50.4 14.8 49.8C14.5 49.1 14.6 47.6 14.8 47C14.9 46.5 15.4 46.7 15.6 46.4C15.8 46 15.8 45.3 15.9 45C16.1 44.6 16.3 44.9 16.6 44.4C17 43.8 17.7 42.1 18.1 41.5C18.4 40.9 18.7 41.1 18.9 40.8C19 40.4 18.9 39.7 19.1 39.4C19.3 39 19.5 39.6 20.1 38.6C20.6 37.7 21.9 34.8 22.4 33.9C23 32.9 23.1 33.5 23.2 33.1C23.4 32.8 23.5 32.1 23.6 31.8C23.8 31.4 24 31.7 24.4 31.1C24.7 30.6 25.3 29 25.6 28.4C26 27.9 26.4 28 26.6 27.6C26.7 27.3 26.4 27.2 26.8 26.6C27.1 25.9 28.3 24.9 28.6 23.9C29 22.8 28.9 21 28.8 20.2C28.6 19.5 28.4 19.7 28.1 19.4C27.7 19.2 27.4 18.9 26.8 18.9C26.1 19 26.4 18 24.4 19.6C22.3 21.1 14.7 28.1 14.7 28.1C14.7 28.1 13.7 28.1 13.3 27.8C13 27.4 12.5 26.6 12.3 26.2C12.2 25.9 12.2 25.4 12.2 25.4C12.2 25.4 14.7 22.9 16.1 21.8C17.6 20.6 19.6 19.3 20.8 18.4C21.9 17.4 21.5 17.1 22.8 16.2C24 15.3 26.9 13.5 28.4 12.9Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.9 7C30.9 6.9 37.2 7 39.1 7.2C41 7.3 39.8 7.9 40.2 8.1C40.7 8.2 41.4 8 41.8 8.2C42.1 8.3 42.3 8.9 42.6 9.1C43 9.2 43.5 9.1 43.9 9.2C44.2 9.4 44.4 10 44.8 10.2C45.1 10.5 45.1 10.2 45.8 10.6C46.4 11 47.4 11.6 48.4 12.7C49.3 13.7 51 16.1 51.5 17.1C52.1 18 51.5 17.9 51.6 18.2C51.8 18.6 52.4 18.8 52.5 19.2C52.7 19.7 52.6 20.5 52.8 21.1C52.9 21.8 53.5 21.6 53.6 22.9C53.8 24.3 53.8 28.2 53.8 29.4C53.7 30.7 53.7 30.2 53.5 30.6C53.4 30.9 52.9 31.2 52.8 31.8C52.6 32.3 52.8 33.1 52.6 33.6C52.5 34.2 51.9 34.6 51.6 35C51.4 35.5 51.8 35.7 51.4 36.5C51 37.2 50 38.6 49.2 39.5C48.5 40.3 47.9 41 47 41.8C46.1 42.5 44.6 43.6 43.9 44C43.1 44.5 42.9 44.2 42.5 44.4C42.2 44.5 42.1 45 41.8 45.1C41.4 45.3 40.7 45.1 40.1 45.2C39.6 45.4 40.1 46.1 38.2 46.2C36.4 46.4 30.9 46.4 29.1 46.2C27.2 46.1 27.2 45.4 27.2 45.4C27.2 45.4 23.7 47.6 22.1 48.4C20.4 49.1 18.5 49.2 17.6 49.6C16.8 50.1 16.8 50.4 16.6 51C16.4 51.7 16.6 52.9 16.4 53.5C16.3 54 15.8 54.1 15.7 54.5C15.5 54.9 15.6 55.4 15.2 55.9C14.9 56.3 13.8 57 13.8 57C13.8 57 12.9 56 12.7 55.6C12.4 55.3 12.4 54.6 12.4 54.6C12.4 54.6 13.2 54.1 13.3 53.5C13.5 53 13.3 52.1 13.4 51.5C13.6 50.9 14.4 50 14.4 50C14.4 50 12.2 48.2 11.6 47.5C10.9 46.7 10.6 46.3 10.4 45.5C10.2 44.8 10.2 43.7 10.3 43C10.5 42.2 10.9 41.8 11.3 41.4C11.8 40.9 12.1 40.2 12.8 40C13.4 39.9 14.8 39.8 15.6 40.2C16.3 40.7 17.1 41.7 17.4 42.6C17.8 43.6 17.4 45.1 17.6 45.8C17.7 46.4 18.1 46.4 18.1 46.4C18.1 46.4 19.1 46.5 19.4 46.4C19.8 46.2 20 45.7 20.4 45.5C20.9 45.2 21.7 45.3 22.1 45C22.6 44.8 23.4 44 23.4 44C23.4 44 23.1 43.3 22.9 43.1C22.8 43 22.7 43.3 22.1 43C21.6 42.6 20.7 41.9 19.9 41C19 40 17.4 38.3 16.9 37.5C16.3 36.6 16.7 36.3 16.4 36C16.2 35.6 15.7 35.6 15.6 35.2C15.4 34.9 15.6 34.2 15.4 33.9C15.3 33.5 14.9 33.8 14.7 33C14.4 32.1 14.1 30.2 13.9 28.8C13.8 27.3 13.9 25.2 13.9 24.2C14 23.3 14.3 23.5 14.4 22.9C14.5 22.2 14.4 21 14.6 20.4C14.7 19.9 15.3 19.8 15.4 19.4C15.6 19.1 15.4 18.4 15.6 18.1C15.7 17.7 16.2 17.5 16.4 17.1C16.6 16.8 16 16.9 16.8 15.9C17.5 15 19.7 12.5 20.9 11.4C22 10.3 22.8 9.7 23.4 9.3C24.1 9 24.3 9.3 24.6 9.2C25 9 25 8.4 25.4 8.2C25.9 8.1 26.6 8.2 27.1 8.1C27.7 7.9 26.9 7.2 28.9 7ZM38 10.2C38.2 10.2 38.8 10.3 38.8 10.3L39 10.9L37.5 11.1L37.4 10.6C37.4 10.6 37.7 10.3 38 10.2ZM26.6 12.8C28 12.8 31 12.8 32 12.8C33.1 12.9 32.3 13.2 33 13.3C33.8 13.4 35.6 13.3 36.5 13.4C37.3 13.6 37.5 14.2 38.1 14.4C38.8 14.6 39.7 14.5 40.2 14.7C40.8 14.8 41 15.4 41.5 15.6C41.9 15.7 42.4 15.5 42.8 15.7C43.1 15.8 43.4 16.4 43.8 16.6C44.1 16.7 44.6 16.6 45 16.8C45.3 16.9 45.1 17.2 45.6 17.6C46.2 17.9 47.5 18.5 48.1 18.9C48.8 19.2 49.1 19.7 49.4 19.9C49.6 20.2 49.5 20.6 49.5 20.6L49 20.9C49 20.9 48.6 21 48.4 20.9C48.1 20.7 48.2 20.5 47.4 19.9C46.5 19.4 43.9 18.1 43 17.6C42 17.2 42.1 17.6 41.6 17.4C41.2 17.3 40.7 16.7 40.1 16.6C39.6 16.4 38.9 16.5 38.4 16.4C37.8 16.2 37.4 15.6 36.8 15.4C36.1 15.3 35.8 15.6 34.8 15.4C33.7 15.3 32.5 14.6 30.6 14.4C28.8 14.3 24.6 14.5 23.4 14.4C22.1 14.4 23.1 14.2 23.1 14.2L23.4 13.3C23.4 13.3 25.1 12.9 26.6 12.8ZM20.6 17.6C22.8 17.5 29.9 17.5 32.2 17.6C34.6 17.8 33.8 18.4 34.6 18.6C35.5 18.8 36.6 18.7 37.2 18.9C37.9 19 38 19.5 38.5 19.6C39 19.8 39.7 19.7 40.2 19.9C40.8 20.1 41.2 20.7 41.6 20.9C42.1 21 42.5 20.8 42.9 20.9C43.2 21.1 43.4 21.7 43.8 21.9C44.1 22 44.6 21.9 45 22.1C45.3 22.2 45.3 22.7 45.6 22.9C46 23.1 46.3 22.9 47 23.2C47.8 23.6 49.3 24.8 49.9 25.2C50.4 25.7 50.3 25.5 50.5 25.9C50.6 26.4 50.5 27.9 50.5 27.9L49.6 28.2C49.6 28.2 49 27.6 48.6 27.4C48.3 27.2 47.9 27.2 47.6 27.1C47.4 26.9 47.4 26.4 47 26.2C46.7 26.1 46.1 26.2 45.8 26.1C45.4 25.9 45.4 25.3 45 25.1C44.7 24.9 44 25 43.6 24.9C43.3 24.7 43.4 24.2 43 24.1C42.6 23.9 41.6 24 41.2 23.9C40.9 23.7 40.9 23.2 40.5 23.1C40.1 22.9 39.4 23.1 38.9 22.9C38.3 22.7 38 22 37.4 21.9C36.8 21.7 35.8 21.9 35.2 21.8C34.7 21.6 34.7 21 34 20.9C33.2 20.7 31.7 20.9 30.6 20.8C29.6 20.6 29.6 19.9 27.8 19.8C25.9 19.6 20.8 20 19.2 19.9C17.8 19.9 18.8 19.6 18.8 19.6C18.8 19.6 18.6 18.9 18.9 18.6C19.2 18.2 18.3 17.8 20.6 17.6ZM18.4 22.9C18.7 22.9 19.1 22.9 19.4 23.1C19.6 23.2 19.7 22.8 19.8 23.6C19.8 24.5 19.6 26.9 19.8 27.9C19.9 29 20.5 29.3 20.6 29.9C20.8 30.6 20.5 30.8 20.9 31.6C21.2 32.5 22.4 34.5 22.9 35.2C23.5 36 23.9 36.1 23.9 36.1C23.9 36.1 24 36.8 23.8 37C23.5 37.3 23.1 37.6 22.6 37.8C22.2 37.9 21.6 37.8 21.2 37.8C20.9 37.7 21.5 38.3 20.9 37.4C20.2 36.4 18.2 33.2 17.6 31.9C17.1 30.7 17.8 30.5 17.6 29.9C17.5 29.4 17.1 29.6 17.1 28.8C17 27.9 16.9 25.6 17.1 24.6C17.2 23.7 17.6 23.5 17.9 23.2C18.1 23 18.2 23 18.4 22.9ZM23.6 22.9L25.1 23.4C25.1 23.4 25 25.1 25.1 25.8C25.3 26.4 25.9 26.8 26.1 27.4C26.2 27.9 26 28.7 26.1 29.1C26.3 29.4 26.8 29.4 26.9 29.8C27.1 30.1 27 30.7 27.2 31.1C27.5 31.6 28.3 32.2 28.4 32.5C28.6 32.9 28.6 33 28.4 33.4C28.1 33.7 27.5 34.3 27.1 34.5C26.8 34.8 26.8 34.8 26.4 34.5C26.1 34.3 25.4 33.6 25.1 33.1C24.9 32.7 25 32.3 24.9 31.9C24.7 31.6 24.2 31.4 24.1 31.1C23.9 30.7 24.1 30.1 23.9 29.8C23.8 29.4 23.2 29.7 23.1 28.6C22.9 27.6 22.9 23.6 22.9 23.6L23.6 22.9ZM28.9 22.9C28.9 22.9 29.3 23.6 30.2 23.8C31.2 23.9 33.6 23.9 34.5 24.1C35.4 24.4 35.6 25.2 35.6 25.2C35.6 25.2 35.7 25.8 35.5 25.9C35.4 26.1 35.4 25.7 34.8 26.4C34.1 27.2 31.9 30.4 31.9 30.4C31.9 30.4 31.1 30.6 30.6 30.4C30.2 30.1 29.7 29.4 29.4 28.9C29.2 28.5 29.5 28.1 29.4 27.6C29.2 27.2 28.5 26.8 28.4 26.1C28.2 25.4 28.2 23.4 28.2 23.4L28.9 22.9ZM39.5 26.1C39.5 26.1 40.3 26.2 40.5 26.4C40.8 26.5 40.9 26.6 41 26.9C41 27.3 41.3 27.8 40.8 28.8C40.2 29.7 39 31.4 37.6 32.9C36.3 34.3 34.6 36.1 32.9 37.6C31.2 39.2 28.5 41.2 27.4 42C26.4 42.7 26.8 42 26.8 42C26.8 42 26 41.3 25.6 41C25.3 40.8 24.6 40.8 24.6 40.8C24.6 40.8 24.6 40.2 24.9 40C25.3 39.7 25.4 40 26.8 39C28.1 37.9 31.6 35.2 33.2 33.5C34.9 31.8 35.8 30 36.9 28.8C37.9 27.5 39.5 26.1 39.5 26.1ZM44.6 28.6C44.6 28.6 45.9 29.2 46.1 29.6C46.4 29.9 46.7 30 46.4 30.8C46 31.5 45.3 32.7 44 34.2C42.6 35.8 40.1 38.4 38.5 39.9C36.8 41.3 35.4 42.5 34.2 43C33.1 43.6 31.9 43.1 31.9 43.1L31.6 42.2C31.6 42.2 33.6 41.2 35 40C36.3 38.8 38.8 36.2 39.9 35C40.9 33.9 40.6 33.6 41.1 33C41.7 32.3 42.7 31.5 43 30.9C43.4 30.4 43.1 30.2 43.4 29.9C43.6 29.5 44.6 28.6 44.6 28.6ZM48.9 32L49.5 32.2L49.5 33.1C49.5 33.1 48.8 33.6 48.6 34C48.5 34.3 49.3 34.2 48.4 35.4C47.4 36.5 44 40 43 41C41.9 41.9 42.1 41 42.1 41C42.1 41 41.5 41 42.1 40.2C42.8 39.5 45.4 37.3 46.2 36.2C47.1 35.2 47.2 34.4 47.5 33.9C47.9 33.4 48.2 33.5 48.5 33.2C48.7 33 48.9 32 48.9 32ZM13.7 43.2L14.4 43.5L14.3 45.1L13.3 44.9C13.3 44.9 13.2 44.1 13.2 43.9C13.3 43.6 13.7 43.2 13.7 43.2Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.4 7C26.9 7.2 27.2 7.7 27.4 8C27.5 8.2 28.3 6.6 27.4 8.8C26.4 10.9 22.8 18.9 21.6 21.1C20.5 23.4 20.4 22.2 20.4 22.2C20.4 22.2 19.6 22.2 19.2 21.9C18.9 21.7 18.7 21.3 18.6 20.9C18.6 20.6 18 21.8 18.9 19.8C19.7 17.7 22.8 10.9 23.8 8.8C24.7 6.8 24.8 7.2 24.8 7.2C24.8 7.2 26 6.9 26.4 7ZM32.2 7C32.6 7 33.2 7 33.5 7.2C33.9 7.3 34.1 4.8 34.1 7.8C34.2 10.7 34 22 33.9 25.1C33.8 28.1 33.8 25.9 33.5 26.2C33.3 26.6 32.7 26.8 32.4 26.9C32 26.9 31.7 26.9 31.4 26.6C31.2 26.4 30.8 28.5 30.8 25.6C30.7 22.6 30.9 11.9 31.1 8.9C31.2 5.9 31.2 7.9 31.4 7.5C31.6 7.2 31.9 7.1 32.2 7ZM39.5 7C39.5 7 40.5 7.3 40.9 7.8C41.2 8.2 41.5 8.8 41.9 9.7C42.2 10.5 42.2 11.4 42.9 13.1C43.5 14.7 45.1 18 45.6 19.4C46.2 20.9 46.1 21.8 46.1 21.8L45.1 22.9C45.1 22.9 44.4 23 44 22.8C43.7 22.5 43.9 23.7 43 21.4C42 19.2 38.9 11.6 38.1 9.3C37.4 7.1 38.2 7.8 38.2 7.8L39.5 7ZM11.8 21.4C11.8 21.4 12.5 21.4 12.8 21.6C13.2 21.7 13.5 22.1 13.6 22.4C13.7 22.8 13.5 23.5 13.4 23.9C13.3 24.2 13 24 12.9 24.6C12.9 25.3 12.8 27 12.9 27.9C13.1 28.9 13.4 29.4 14.2 30.1C14.9 30.8 16.5 31.8 17.6 32.1C18.6 32.5 19.5 32.4 20.4 32.1C21.4 31.9 22.4 30.9 23.1 30.6C23.9 30.4 24.8 30.6 24.8 30.6C24.8 30.6 25.3 31.6 25.4 32.1C25.6 32.7 25.3 33.5 25.4 34C25.6 34.6 25.5 34.7 26.1 35.4C26.6 36 27.8 37.3 28.6 37.9C29.5 38.4 30.1 38.7 30.9 38.9C31.8 39 32.9 39.1 33.8 38.9C34.6 38.6 35.6 38.1 36.4 37.5C37.1 36.9 37.6 36.3 38 35.2C38.5 34.2 38.8 32.1 39.1 31.4C39.5 30.6 40 30.8 40 30.8C40 30.8 42.6 32.2 43.5 32.5C44.3 32.9 44.5 33.1 45.4 33C46.2 33 48 32.5 48.9 32C49.7 31.6 50.1 30.9 50.5 30.4C51 29.8 51.4 29.5 51.5 28.6C51.7 27.6 51.6 25.8 51.5 24.9C51.5 24.1 51 24 51 23.6C51.1 23.2 51.6 22.6 51.6 22.6L53.6 22.6C53.6 22.6 54 23 54.2 23.4C54.5 23.9 54.8 24.5 54.9 25.4C55 26.2 55 27.6 54.9 28.6C54.7 29.6 54.4 30.4 53.8 31.4C53.1 32.3 51.7 33.6 50.8 34.4C49.8 35.1 49 35.6 47.9 35.9C46.7 36.1 44.7 35.9 43.6 35.9C42.6 35.8 41.6 35.4 41.6 35.4C41.6 35.4 40.7 37.2 40 38C39.2 38.9 38.1 40 37.2 40.6C36.4 41.2 36 41.4 35 41.6C34 41.9 32.3 42.1 31.2 42C30.2 42 29.6 41.8 28.8 41.5C27.9 41.2 27.1 40.8 26.4 40.2C25.6 39.7 24.9 39 24.2 38C23.6 37.1 22.4 34.8 22.4 34.8C22.4 34.8 21.3 35.2 20.4 35.4C19.6 35.5 18.2 35.6 17.1 35.4C15.9 35.1 14.6 34.4 13.8 33.9C12.9 33.3 12.7 33 12.1 32.2C11.5 31.5 10.5 30.1 10.2 29.2C9.8 28.4 9.8 28.2 9.8 27.4C9.7 26.7 9.7 25.6 9.8 24.9C9.8 24.1 9.9 23.5 10.2 22.9C10.6 22.4 11.8 21.4 11.8 21.4ZM11.4 36.6L12.8 37C12.8 37 13.3 37.5 13.2 38C13.2 38.5 12.7 39.1 12.6 40C12.4 40.9 12.3 42.4 12.6 43.4C12.8 44.3 13.3 45 14.2 45.6C15 46.3 16.4 47.2 17.4 47.5C18.4 47.8 19.2 47.8 20.1 47.5C21.1 47.1 22.6 45.9 23.2 45.6C23.9 45.4 23.6 45.5 23.9 45.8C24.1 46 24.8 46.5 24.9 47C25.1 47.6 24.8 48.3 24.9 49C25.1 49.6 25.4 50.3 25.9 51C26.5 51.8 27.4 52.7 28.1 53.2C28.9 53.8 29.5 54 30.4 54.1C31.2 54.3 32.1 54.4 33 54.1C34 53.9 35.2 53.3 35.9 52.9C36.5 52.4 36.7 52.1 37 51.5C37.4 51 37.8 50.4 38 49.6C38.3 48.9 38.4 47.4 38.6 46.8C38.9 46.1 39.6 46 39.6 46C39.6 46 40.7 46.3 41.2 46.6C41.8 47 42 47.7 43 48C44.1 48.2 46.4 48.1 47.4 48C48.3 47.8 48.2 47.7 48.9 47C49.5 46.4 50.6 44.9 51 44C51.4 43 51.3 42.2 51.2 41.4C51.2 40.5 50.6 39.6 50.6 39C50.7 38.5 51.1 38.1 51.4 37.9C51.6 37.6 51.9 37.5 52.4 37.6C52.8 37.8 53.5 38.2 53.9 38.5C54.2 38.9 54.3 38.9 54.4 39.9C54.4 40.8 54.5 43.2 54.4 44.4C54.2 45.5 54.1 45.9 53.2 46.9C52.4 47.8 50.4 49.5 49.4 50.2C48.3 51 47.7 51.1 46.8 51.2C45.8 51.4 44.4 51.4 43.5 51.2C42.5 51.1 41.1 50.4 41.1 50.4C41.1 50.4 40.3 52.4 39.5 53.5C38.6 54.5 36.8 55.9 36 56.5C35.1 57.1 35.6 56.9 34.5 57C33.3 57.1 30.2 57.2 28.9 57C27.7 56.9 27.5 56.5 26.8 56C26 55.6 25.2 54.8 24.6 54.2C24.1 53.7 23.8 53.4 23.4 52.6C22.9 51.9 21.9 50 21.9 50C21.9 50 20.3 50.6 19.4 50.8C18.6 50.9 17.8 50.8 16.9 50.6C16.1 50.5 15 50.2 14.2 49.8C13.3 49.3 12.7 48.8 11.9 48C11.2 47.1 10.2 45.5 9.8 44.5C9.3 43.6 9.2 43.4 9.2 42.4C9.2 41.3 9.6 39.2 9.8 38.5C9.9 37.7 9.9 38 10.2 37.6C10.4 37.3 11.4 36.6 11.4 36.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M42.6 7C42.6 7 43.8 7.8 44 8.2C44.3 8.5 44.1 9 44.2 9.3C44.4 9.7 44.9 9.7 45 10.1C45.2 10.4 45.1 10.8 45.4 11.2C45.6 11.7 46.5 12.3 46.8 12.8C47 13.2 46.8 13.7 46.8 13.7C46.8 13.7 46.1 14.2 45.9 14.3C45.6 14.4 45.4 14.7 45 14.2C44.5 13.8 43.1 11.6 43.1 11.6C43.1 11.6 42.8 11.2 42.4 11.8C41.9 12.3 41.1 13.9 40.4 14.8C39.6 15.8 38.9 16.2 38 17.4C37.2 18.7 35.6 20.8 35.1 22.4C34.7 24.1 35 25.9 35.1 27.1C35.3 28.2 35.7 28.6 36.2 29.4C36.8 30.1 37.7 30.9 38.2 31.4C38.8 31.9 38.8 32 39.5 32.4C40.2 32.7 41.7 33.2 42.5 33.4C43.2 33.5 43.7 33.3 44.4 33.1C45 33 45.8 32.5 46.4 32.2C46.9 32 47 32 47.6 31.4C48.3 30.9 49.4 29.2 50 28.8C50.6 28.3 51.2 28.8 51.2 28.8L51.5 30.1C51.5 30.1 50.1 32.1 49.5 32.8C48.8 33.4 48.3 33.8 47.8 34C47.2 34.3 46.6 34.1 46.2 34.2C45.9 34.4 46.4 34.9 45.4 35C44.4 35.2 41.3 35.2 40.2 35C39.2 34.9 39.6 34.4 39.2 34.2C38.9 34.1 39.2 34.8 38.4 34.1C37.5 33.5 35.2 31.2 34.4 30.2C33.5 29.3 33.6 29.1 33.5 28.6C33.3 28.1 33.6 27.8 33.5 27.2C33.3 26.7 32.8 25.9 32.6 25.4C32.5 24.8 32.5 24.6 32.6 24.1C32.8 23.5 33.3 22.6 33.5 22.1C33.6 21.7 33.2 21.6 33.4 21.2C33.5 20.9 34.1 20.6 34.2 20.2C34.4 19.9 34.2 19.4 34.4 19.1C34.5 18.9 34.8 19 35.1 18.6C35.5 18.1 35.5 17.3 36.2 16.2C37 15.2 38.8 13.5 39.8 12.1C40.7 10.6 41.4 8.5 41.9 7.7C42.3 6.8 42.6 7 42.6 7ZM51 11.7C51 11.7 51.5 11.6 52 12.2C52.4 12.7 52.9 14.1 53.5 14.8C54 15.6 54.5 15.6 55 16.4C55.6 17.3 56.6 19.3 57 20.1C57.3 21 57.1 21.1 57 21.8C56.8 22.4 56.5 23.2 56 23.9C55.4 24.6 54.6 25.5 53.9 25.9C53.1 26.4 52.5 26.4 51.8 26.4C51 26.4 49.8 26.3 49 25.9C48.3 25.6 47.7 25.1 47.2 24.6C46.8 24.1 46.3 23.9 46.1 22.9C46 22 46 19.9 46.1 19.1C46.3 18.4 46.8 18.6 47 18.4C47.1 18.1 46.8 17.9 47 17.4C47.2 17 47.7 16.2 48.1 15.7C48.6 15.1 49.4 14.3 49.6 13.8C49.9 13.4 49.6 13.1 49.9 12.8C50.1 12.4 51 11.7 51 11.7ZM51 15.3C51 15.3 51.2 15.1 51.5 15.4C51.9 15.8 52.9 16.9 53.2 17.4C53.6 17.9 53.3 18.1 53.5 18.4C53.6 18.8 54.1 18.8 54.2 19.2C54.4 19.7 54.6 20.3 54.5 20.9C54.5 21.6 54.3 22.6 54 23.1C53.6 23.7 53.1 23.9 52.6 24.1C52.2 24.3 51.5 24.4 51 24.4C50.6 24.4 50.6 24.5 50 24.1C49.5 23.8 48.3 22.8 48 22.1C47.6 21.4 47.5 21.1 48 19.9C48.5 18.8 51 15.3 51 15.3ZM25.8 15.2C26.9 15.2 29.8 15.1 30.9 15.3C32 15.6 32.4 16.4 32.4 16.4L32.2 17.6C32.2 17.6 32 17.9 31.1 17.9C30.1 17.8 27.5 17.4 26.4 17.4C25.4 17.4 25.5 17.8 24.9 17.9C24.4 17.9 23.9 17.5 22.9 17.9C21.8 18.2 19.8 19 18.4 19.9C17.1 20.7 15.5 22.1 14.8 22.8C14 23.4 14.2 23.3 14.2 23.6C14.1 24 14.4 24.8 14.4 24.8C14.4 24.8 15 24.8 15.6 25.2C16.1 25.7 17.9 27.4 17.9 27.4L17.8 28.6C17.8 28.6 16.8 28.8 16.2 28.6C15.7 28.5 15.1 28.1 14.6 27.6C14 27.2 13.4 26.3 13.1 26.1C12.7 25.8 12.6 26.1 12.6 26.1C12.6 26.1 11 28.2 10.7 28.9C10.3 29.6 10.7 29.8 10.6 30.2C10.4 30.7 9.8 30 9.7 31.6C9.5 33.3 9.5 38.3 9.7 40C9.8 41.6 10.4 41.2 10.6 41.6C10.7 42.1 10.1 41.9 10.6 42.9C11 43.8 12.4 46.3 13.3 47.5C14.3 48.8 15.4 49.8 16.4 50.5C17.3 51.3 18.3 52 18.9 52.4C19.6 52.7 19.9 52.4 20.2 52.5C20.6 52.7 20.8 53.2 21.1 53.4C21.5 53.5 22.1 53.3 22.6 53.5C23 53.6 23.3 54.1 24.1 54.2C24.8 54.4 26.9 54 26.9 54C26.9 54 27 50.1 27.1 49.2C27.1 48.4 27.1 48.9 27.4 48.9C27.6 48.8 28.4 48.8 28.4 48.8C28.4 48.8 28.8 48.9 28.9 49.8C28.9 50.6 28.9 53.8 28.9 53.8C28.9 53.8 29.1 54.2 29.4 54.2C29.8 54.3 30.8 54.4 31.2 54.2C31.8 54.1 32 53.6 32.5 53.5C32.9 53.3 33.7 53.5 34.1 53.4C34.6 53.2 34.9 52.7 35.2 52.5C35.6 52.4 35.7 52.7 36.4 52.4C37 52 38.2 51.4 39.4 50.4C40.5 49.3 42.4 46.9 43.2 45.9C44.1 44.8 44.1 44.4 44.4 43.9C44.6 43.3 44.3 43.1 44.5 42.6C44.6 42.2 45.1 41.8 45.2 41.4C45.4 40.9 45.1 40.7 45.2 40.1C45.4 39.6 46 38.4 46.2 38C46.5 37.6 47 37.8 47 37.8L47.9 38.2C47.9 38.2 47.9 40.2 47.8 40.9C47.6 41.5 47.2 41.6 47 42C46.9 42.5 47 43.2 46.9 43.6C46.7 44.1 46.2 44.3 46 44.6C45.9 45 46.3 45 46 45.6C45.6 46.3 45.1 47.2 44.1 48.4C43.2 49.5 41.2 51.5 40.2 52.4C39.3 53.2 38.7 53.1 38.2 53.4C37.8 53.6 38 53.9 37.8 54C37.5 54.2 36.9 54.1 36.5 54.2C36.2 54.4 36.1 54.9 35.8 55C35.4 55.2 34.8 55 34.5 55.1C34.1 55.3 34 55.8 33.5 56C32.9 56.1 31.9 55.8 31.1 56C30.2 56.1 30 56.6 28.4 56.6C26.9 56.6 23.1 56.2 21.9 56C20.6 55.7 21.4 55.3 21.1 55.1C20.7 55 20.2 55.2 19.6 55C18.9 54.7 17.9 53.6 17.4 53.4C16.8 53.1 17 53.6 16.4 53.2C15.9 52.9 14.9 52.2 13.9 51.2C13 50.3 11.6 48.7 10.8 47.5C9.9 46.4 9.4 45.3 9.1 44.5C8.7 43.8 8.9 43.6 8.8 43.1C8.6 42.7 8.1 42.4 8 42C7.8 41.5 8.1 41 8 40.2C7.8 39.5 7.2 38.5 7 37.5C6.9 36.6 6.9 35.4 7 34.5C7.2 33.5 7.8 32.5 8 31.8C8.1 30.9 7.9 30.1 8.1 29.6C8.2 29.1 8.6 29.1 8.8 28.8C8.9 28.4 8.8 27.6 8.9 27.2C9.1 26.9 9.6 26.8 9.8 26.6C9.9 26.3 9.5 26.4 9.9 25.6C10.4 24.9 11.8 22.8 12.6 21.9C13.3 20.9 13.6 20.6 14.7 19.8C15.7 18.9 18.2 17.5 19.1 17.1C19.9 16.6 19.7 17.1 20.1 16.9C20.4 16.8 20.6 16.3 21.1 16.1C21.5 16 22.4 16.2 22.9 16.1C23.3 15.9 23.4 15.5 23.9 15.3C24.3 15.2 24.6 15.2 25.8 15.2ZM27.4 31.1C27.4 31.1 29.7 31.5 30.4 31.8C31 32 31.1 32.2 31.4 32.8C31.8 33.2 32.3 33.9 32.5 34.8C32.6 35.6 32.5 36.9 32.2 37.6C31.9 38.4 31.2 39.1 30.6 39.5C30.1 40 29.9 40.4 29.1 40.5C28.4 40.7 26.9 40.8 25.9 40.5C25 40.1 23.9 39.4 23.4 38.2C23 37.1 23.1 34.8 23.4 33.6C23.8 32.5 24.8 32 25.4 31.6C25.9 31.3 26.4 31.6 26.8 31.6C27.1 31.5 27.4 31.1 27.4 31.1ZM27.1 33.4C27.7 33.2 28.1 33.1 28.6 33.5C29.2 33.8 30.4 35.6 30.4 35.6C30.4 35.6 30 37 29.6 37.5C29.3 38.1 28.6 38.6 28.2 38.8C27.9 38.9 27.8 38.9 27.4 38.6C26.9 38.4 26 37.8 25.6 37.5C25.3 37.2 25.3 37.3 25.2 36.9C25.2 36.4 25.4 34.6 25.4 34.6C25.4 34.6 26.6 33.5 27.1 33.4Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.8 13.7C32.4 13.6 33.3 13.8 34 13.9C34.6 14.1 34.9 14.3 35.5 14.8C36 15.2 36.6 15.8 37 16.6C37.5 17.3 38 19.4 38 19.4C38 19.4 38.9 19 39.5 18.9C40 18.7 40.6 18.6 41.4 18.8C42.1 18.9 43.5 19.4 44.2 19.9C45 20.3 45.5 21 45.9 21.6C46.2 22.3 46.5 22.7 46.5 23.6C46.6 24.4 46.4 25.8 46.2 26.6C46.1 27.3 45.9 27.6 45.5 28.1C45.1 28.5 43.9 29.4 43.9 29.4C43.9 29.4 45.3 30.9 45.8 31.6C46.2 32.4 46.4 33 46.5 33.6C46.7 34.3 46.7 35 46.5 35.6C46.4 36.3 46.1 37.2 45.8 37.8C45.4 38.3 45.1 38.7 44.5 39.1C44 39.6 43.2 40 42.5 40.2C41.7 40.5 40.7 40.5 40 40.5C39.2 40.4 38 39.9 38 39.9C38 39.9 37.7 41.4 37.4 42C37 42.7 36.6 43.4 36.1 43.9C35.7 44.3 35.2 44.7 34.6 45C34.1 45.2 33.5 45.5 32.8 45.5C32 45.6 31.2 45.6 30.4 45.4C29.6 45.1 28.6 44.5 27.9 44C27.3 43.4 27 42.7 26.6 42C26.3 41.4 26.1 39.9 26.1 39.9C26.1 39.9 24.7 40.4 24.1 40.5C23.4 40.6 23 40.6 22.4 40.5C21.7 40.3 20.8 40 20.1 39.6C19.5 39.3 19.1 39 18.6 38.4C18.2 37.7 17.6 36.7 17.4 35.8C17.3 34.8 17.6 33.4 17.8 32.6C17.9 31.9 18.2 31.5 18.6 31.1C19 30.6 20.1 29.8 20.1 29.8C20.1 29.8 19 28.8 18.6 28.1C18.1 27.4 17.6 26.3 17.4 25.6C17.3 24.8 17.3 24.3 17.4 23.6C17.6 22.8 18.1 21.8 18.4 21.1C18.8 20.5 19.2 20.2 19.8 19.9C20.3 19.5 21.1 19 21.9 18.9C22.7 18.7 23.9 18.8 24.6 18.9C25.2 19 25.9 19.4 25.9 19.4C25.9 19.4 26.6 17.3 26.9 16.6C27.3 15.8 27.7 15.6 28.1 15.2C28.6 14.7 29.2 14.3 29.9 14.1C30.5 13.8 31.1 13.7 31.8 13.7ZM31.1 15.2C31.6 15.2 32.4 15.2 33 15.2C33.5 15.3 33.9 15.5 34.4 15.8C34.8 16.2 35.3 16.6 35.6 17.1C36 17.6 36.2 18.2 36.2 18.9C36.3 19.5 36.7 19.6 36 21.1C35.2 22.6 32 27.9 32 27.9C32 27.9 29.1 23.1 28.4 21.8C27.6 20.4 27.8 20.6 27.8 20.1C27.7 19.5 27.8 18.7 27.9 18.2C28 17.8 28.1 17.5 28.4 17.1C28.7 16.8 29.2 16.2 29.6 15.8C30.1 15.5 30.5 15.3 31.1 15.2ZM22.9 20.2C23.6 20.2 24.2 20.3 24.9 20.6C25.5 20.8 25.6 20.5 26.6 21.9C27.5 23.2 30.4 28.8 30.4 28.8C30.4 28.8 24.1 29 22.4 28.8C20.6 28.5 20.5 27.9 19.9 27.4C19.4 26.8 19.1 26 18.9 25.2C18.8 24.5 18.9 23.8 19.1 23.1C19.4 22.4 20 21.5 20.6 21.1C21.3 20.6 22.2 20.3 22.9 20.2ZM40.5 20.2C41.3 20.2 42.5 20.6 43 20.9C43.6 21.1 43.7 21.2 44 21.6C44.2 21.9 44.7 22.4 44.9 23.1C45 23.7 45.2 24.5 45 25.2C44.9 26 44.6 26.8 44 27.4C43.5 27.9 43.4 28.5 41.6 28.8C39.9 29 33.5 28.8 33.5 28.8C33.5 28.8 36.6 23.2 37.5 21.9C38.3 20.5 38 21.1 38.5 20.9C39.1 20.6 39.8 20.2 40.5 20.2ZM23.2 30.4C24.9 30.2 30.4 30.4 30.4 30.4C30.4 30.4 31.1 29.5 30.4 30.8C29.8 32 27.4 36.3 26.4 37.6C25.3 39 25 38.6 24.4 38.9C23.7 39.1 23.2 39.1 22.6 39C22 38.9 21.2 38.5 20.8 38.2C20.2 38 19.9 37.6 19.6 37.1C19.3 36.7 19.1 36 18.9 35.5C18.8 34.9 18.9 34.4 18.9 34C19 33.5 19.1 33 19.4 32.5C19.8 32.1 20.1 31.5 20.8 31.1C21.4 30.8 21.6 30.5 23.2 30.4ZM33.6 30.4C33.6 30.4 39.1 30.2 40.6 30.4C42.2 30.5 42.3 30.6 43 30.9C43.6 31.3 44 31.8 44.4 32.2C44.7 32.8 44.9 33.4 45 34C45.2 34.5 45.2 34.9 45 35.5C44.9 36 44.6 36.7 44.4 37.1C44.1 37.6 43.6 38 43.2 38.2C42.9 38.5 42.5 38.7 42 38.9C41.5 39 40.8 39 40.2 39C39.7 38.9 39.1 38.7 38.5 38.4C38 38 37.9 38.1 37 36.9C36.2 35.6 34.2 32 33.6 30.9C33.1 29.9 33.6 30.4 33.6 30.4ZM31.9 31.4C31.9 31.4 35.1 36.5 35.9 37.9C36.6 39.2 36.2 38.7 36.2 39.2C36.3 39.8 36.3 40.4 36.1 41C36 41.5 35.8 41.9 35.5 42.4C35.1 42.8 34.8 43.2 34.2 43.5C33.7 43.7 33 44 32.4 44C31.7 44.1 30.9 44 30.4 43.8C29.8 43.5 29.4 43.4 28.9 42.9C28.5 42.3 27.9 41.2 27.8 40.4C27.6 39.5 27.4 39.5 28.1 38C28.8 36.5 31.9 31.4 31.9 31.4ZM8 18.6C8.2 18.5 8.6 18.8 8.6 18.8C8.6 18.8 12.1 43.2 12.9 48.2C13.8 53.2 13.3 48.8 13.3 48.8L50.6 48.8C50.6 48.8 50.2 53.2 51 48.2C51.8 43.2 55.5 18.8 55.5 18.8L56.8 18.6L52.1 50L11.8 50L7 18.9C7 18.9 7.7 18.6 8 18.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 8C31.9 8 32.8 8.3 33.9 9.6C35 10.8 37.5 14.3 38.5 15.7C39.4 17 39.5 16.9 39.8 17.8C40 18.6 40.2 19.5 40.2 20.4C40.3 21.4 40.3 22.4 40 23.2C39.8 24.1 39.4 25 38.8 25.9C38.1 26.7 36.9 27.6 36 28.1C35 28.7 33.9 29 33 29.1C32.2 29.3 31.4 29.2 30.6 29.1C29.9 29.1 29.4 29 28.8 28.6C28.1 28.3 27.2 27.9 26.6 27.2C25.9 26.6 25 25.4 24.6 24.6C24.1 23.7 23.9 22.9 23.8 21.9C23.6 20.9 23.8 19.4 23.9 18.6C24.1 17.7 23.8 18.1 24.9 16.6C25.9 15 29 10.9 30.1 9.4C31.3 8 31.9 8 31.9 8ZM31.8 11.3C31.8 11.3 31.8 10.8 32.5 11.7C33.1 12.5 35 14.8 35.9 16.2C36.7 17.7 37.5 19.1 37.8 20.1C38 21.2 37.8 21.9 37.5 22.8C37.2 23.6 36.5 24.5 36 25.1C35.4 25.6 34.8 26 34.1 26.2C33.5 26.5 32.6 26.6 32 26.6C31.5 26.7 31.4 26.8 30.8 26.6C30.1 26.3 29 25.7 28.4 25.2C27.7 24.8 27.3 24.3 26.9 23.8C26.6 23.2 26.4 22.8 26.2 22.1C26.1 21.5 26.1 20.7 26.2 20.1C26.4 19.4 25.9 19.7 26.9 18.2C27.8 16.8 31.8 11.3 31.8 11.3ZM8.1 21.1C8.3 21 8.6 21 8.8 21.1C9.1 21.3 9.4 19.5 9.6 21.9C9.7 24.2 9.6 35.1 9.6 35.1C9.6 35.1 13.7 38.1 14.8 38.6C15.8 39.2 15.5 38.6 16.1 38.2C16.8 37.9 17.8 36.9 18.6 36.5C19.3 36 19.8 35.8 20.4 35.8C21.1 35.7 21.8 35.9 22.8 36.4C23.7 36.8 25.3 38.3 26.1 38.6C26.8 39 26.4 38.8 27.1 38.5C27.7 38.1 29.3 36.8 30.1 36.4C30.8 35.9 31 35.8 31.6 35.8C32.3 35.8 33.1 35.9 34 36.4C34.9 36.8 36.4 38.2 37 38.5C37.7 38.9 37.4 38.9 38 38.5C38.7 38.2 40.3 36.8 41.1 36.4C42 35.9 42.2 35.8 42.9 35.8C43.5 35.8 44.2 35.9 45.1 36.4C46 36.8 47.5 38.2 48.2 38.5C49 38.9 48.7 38.9 49.8 38.4C50.8 37.8 54.5 35.1 54.5 35.1L54.5 21.9C54.5 21.9 55.1 21.2 55.5 21.1C55.8 21.1 56.2 21.2 56.5 21.4C56.7 21.5 56.8 17.3 56.9 21.9C56.9 26.6 57 43.9 56.9 49C56.7 54 56.3 51.2 55.8 52C55.2 52.9 54.6 53.5 53.8 54.1C52.9 54.8 56.9 55.4 50.4 55.6C43.8 55.9 20.9 55.9 14.3 55.8C7.8 55.6 11.7 55.1 10.8 54.6C10 54.2 9.8 53.9 9.2 53C8.6 52.1 7.6 54 7.2 49.2C6.9 44.5 7.2 28.8 7.2 24.2C7.2 19.7 7.1 22.5 7.2 21.9C7.4 21.4 7.8 21.3 8.1 21.1ZM20.6 38.5C21.4 38.1 20.8 38.2 21.4 38.5C22.1 38.9 23.6 40.2 24.4 40.6C25.1 41.1 25.4 41.2 26.1 41.2C26.8 41.2 27.6 41.1 28.6 40.6C29.5 40.2 31.1 38.8 31.9 38.5C32.6 38.1 32.1 38.3 33 38.8C33.8 39.2 35.7 40.8 36.8 41.1C37.8 41.5 38.1 41.4 39.1 41C40.2 40.5 43.2 38.5 43.2 38.5C43.2 38.5 47.1 40.9 48.4 41.2C49.6 41.6 50.1 41.1 51 40.6C52 40.2 54 38.8 54 38.8C54 38.8 54.3 37.5 54.4 39.1C54.4 40.8 54.6 46.7 54.2 48.9C53.9 51 53 51.3 52.4 52C51.7 52.8 56.5 53 50.1 53.1C43.8 53.3 20.4 53.3 14.1 53.1C7.7 53 12.6 52.5 12.1 52.1C11.5 51.8 10.9 51.3 10.6 50.8C10.2 50.2 9.9 50.7 9.8 48.8C9.6 46.8 9.8 39 9.8 39L10.3 38.8C10.3 38.8 13 40.6 13.9 41C14.9 41.4 15.3 41.2 15.8 41.1C16.4 41.1 16.3 41.2 17.1 40.8C17.9 40.3 19.9 38.8 20.6 38.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M19.1 14.2C24.2 14.2 48.8 14.3 48.8 14.3L58.1 49.5L6 49.6C6 49.6 4.6 51.4 6 49C7.5 46.5 13.1 37.5 14.9 34.8C16.8 31.9 16.4 32.8 17.2 32.1C18.1 31.5 18.8 31 19.9 30.6C20.9 30.2 18.8 29.9 23.6 29.8C28.5 29.6 49.2 29.6 49.2 29.6L46 17.9L19.1 17.9C19.1 17.9 18.7 18 18.6 17.4C18.6 16.9 18.6 15.3 18.6 14.8C18.7 14.2 14.1 14.3 19.1 14.2ZM23.9 33.5C28.8 33.3 50 33.5 50 33.5L53.5 46L12.2 46C12.2 46 17.2 38.1 18.6 36.1C19.9 34.2 19.6 34.8 20.4 34.4C21.3 33.9 18.9 33.6 23.9 33.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.2 11.9L26.4 12.3C26.4 12.3 26.9 12.5 26.4 13.2C25.8 13.8 23.8 15 22.9 16.1C22 17.3 21.3 19 20.9 20.1C20.6 21.3 20.8 22.4 20.6 22.9C20.5 23.5 20.1 23.4 20.1 23.4C20.1 23.4 19.5 23.5 19.2 23.2C19 23 18.6 22.9 18.6 22.1C18.7 21.4 19.1 19.5 19.4 18.6C19.6 17.6 19.8 17.2 20.2 16.4C20.7 15.7 21.3 14.8 22.1 14.1C23 13.3 25.2 11.9 25.2 11.9ZM35.4 12.2C36.1 12.2 36.5 12.4 36.5 12.4L36.6 13.4C36.6 13.4 34 14.4 33.1 14.8C32.3 15.3 32.1 15.4 31.4 16.1C30.8 16.7 29.9 17.8 29.4 18.6C28.8 19.5 28.1 21.4 28.1 21.4L26.8 21.4L26.4 20.2C26.4 20.2 28.3 16.8 29.2 15.6C30.2 14.4 31.2 13.6 32.2 13.1C33.3 12.5 34.6 12.3 35.4 12.2ZM45 14.4C46.4 14.4 49.8 14.5 51 14.7C52.1 14.8 51.8 15.2 51.8 15.2L51.4 16.2C51.4 16.2 46.6 16.3 45.2 16.4C43.9 16.4 44.1 16.4 43.1 16.8C42.2 17.1 40.8 17.6 39.6 18.4C38.5 19.1 36.1 21.1 36.1 21.1L35 20.6C35 20.6 34.3 20.5 35 19.8C35.8 19 38 17.1 39.2 16.2C40.5 15.4 41.6 15.2 42.5 14.8C43.5 14.5 43.6 14.5 45 14.4ZM15.2 15.8L16.1 16.1C16.1 16.1 16.7 16.2 16.2 17.1C15.8 17.9 14.2 20.3 13.7 21.4C13.2 22.4 13.2 22 13.2 23.1C13.2 24.3 13.7 28.1 13.7 28.1L12.7 28.6C12.7 28.6 12.2 28.5 12.1 28.2C11.9 28 11.6 28.2 11.6 26.9C11.5 25.7 11.4 22.4 11.7 20.9C11.9 19.5 12.2 19.1 12.8 18.2C13.4 17.4 15.2 15.8 15.2 15.8ZM45.8 20.4C46.8 20.2 48.8 20.3 49.9 20.4C50.9 20.4 51.1 20.4 52 20.9C52.8 21.3 54.4 22.4 55 22.9C55.7 23.3 55.8 23.5 56 23.8C56.1 24 56 24.4 56 24.4L55 25.1C55 25.1 53.1 23.6 52 23.1C51 22.6 50.3 22.2 49 22.1C47.6 22.1 44.7 22.7 43.8 22.6C42.8 22.6 43 22.1 43 22.1L43.4 21.1C43.4 21.1 44.7 20.5 45.8 20.4ZM34.2 24.6C36 24.6 38.8 24.5 40.6 24.6C42.5 24.8 44.2 25.3 45.4 25.6C46.5 26 46.8 26.2 47.6 26.6C48.5 27.1 49.6 27.7 50.5 28.4C51.5 29 52.3 29.6 53.4 30.6C54.4 31.7 56.3 34 57 34.9C57.8 35.8 57.7 35.7 57.9 36C58 36.4 57.9 37 57.9 37L57.4 37.5C57.4 37.5 57 37.9 56.2 37.1C55.5 36.4 53.9 34.1 52.9 33C51.8 31.8 50.9 31.1 49.8 30.2C48.6 29.4 47.1 28.6 46 28.1C45 27.6 44.5 27.5 43.5 27.2C42.6 27 41.9 26.8 40.2 26.6C38.6 26.5 35.9 26.5 34 26.6C32 26.8 30.1 27.1 28.4 27.6C26.6 28 25.1 28.6 23.4 29.4C21.8 30.3 19.9 31.6 18.4 32.9C16.8 34.1 15.1 35.6 13.9 37.1C12.8 38.7 11.8 41 11.3 42C10.9 42.9 11.2 42.5 11.3 42.8C11.4 43 11.3 43 11.9 43.5C12.6 43.9 14.6 45 15.4 45.4C16.3 45.7 16.4 45.6 17.1 45.6C17.7 45.6 17.7 45.8 19.1 45.4C20.4 44.9 24 43.3 25.2 43C26.5 42.6 26.2 42.9 26.6 43C27.1 43.2 27.4 43.4 27.8 43.6C28.1 43.9 28.6 44.6 28.6 44.6C28.6 44.6 28.5 45.2 28.4 45.4C28.2 45.5 27.6 45.8 27.6 45.8C27.6 45.8 26.7 45.2 26.2 45.1C25.8 45 26.1 44.7 24.8 45.1C23.4 45.6 20 47.3 18.4 47.6C16.7 48 16.2 47.7 14.9 47.4C13.7 47 10.7 45.4 10.7 45.4C10.7 45.4 10.1 46.1 9.9 47C9.8 48 10 50.4 9.8 51.2C9.7 52.1 9.2 52 9.2 52C9.2 52 8.6 52.1 8.3 52C8.1 51.8 7.9 52 7.8 51.4C7.8 50.7 7.7 49.2 7.8 47.9C8 46.5 9 44.7 8.8 43.1C8.5 41.6 6.9 40 6.5 38.8C6 37.5 6 36.9 6 35.6C5.9 34.4 5.9 32.6 6 31.4C6.2 30.3 7 28.8 7 28.8L8.2 28.4C8.2 28.4 8.8 28.5 8.8 29.2C8.7 30 8.1 31.7 8 32.8C7.8 33.8 7.8 34.5 8 35.5C8.1 36.6 8.5 38.1 8.7 38.9C8.8 39.6 9 39.7 9.2 40C9.3 40.2 9.8 40.1 9.8 40.1C9.8 40.1 11.9 36.4 13.3 34.6C14.8 32.9 17.1 31.1 18.6 29.9C20.2 28.8 21.6 28.1 22.8 27.6C23.9 27 24 27 25.2 26.6C26.5 26.1 28.9 25.5 30.4 25.1C31.9 24.8 32.5 24.7 34.2 24.6ZM39.5 30.4C39.5 30.4 40.9 30.3 41.5 30.4C42.2 30.4 42.4 30.5 43.1 30.9C43.9 31.2 45.1 31.9 46 32.8C46.8 33.6 47.6 35.2 48 36.1C48.5 37.1 48.5 38.6 48.5 38.6C48.5 38.6 48.1 39.1 47.9 39.1C47.6 39.2 47 39.1 47 39.1C47 39.1 46.8 39.1 46.5 38.5C46.3 38 46.1 36.4 45.8 35.6C45.4 34.9 45.2 34.8 44.5 34.2C43.9 33.7 42.9 32.9 42 32.5C41.2 32.2 40 32.2 39.5 32C38.9 31.8 39 31.4 39 31.4L39.5 30.4ZM31.9 32.4C32.5 32.3 33.5 32.5 34.1 32.6C34.8 32.8 35.3 33.1 35.9 33.5C36.4 33.8 36.9 34 37.5 34.5C38.1 35.1 38.7 35.6 39.5 36.8C40.2 37.9 41.4 39.9 41.9 41.1C42.3 42.4 42.3 43.6 42.4 44.2C42.4 44.9 42 45.1 42 45.1L41 45.4C41 45.4 40.9 45.7 40.6 44.9C40.4 44 40 41.5 39.5 40.2C38.9 39 38.1 38.1 37.2 37.2C36.4 36.4 35.4 35.5 34.4 35C33.3 34.4 31.1 34 31.1 34L31.1 32.8C31.1 32.8 31.4 32.4 31.9 32.4ZM24.6 36.8C24.6 36.8 27.4 36.7 28.4 37C29.5 37.2 30.3 37.6 31.1 38.2C32 38.9 32.8 40.1 33.4 41C33.9 41.8 34.1 42.7 34.2 43.2C34.4 43.8 34.3 43.8 34.1 44C34 44.3 33.8 44.5 33.5 44.5C33.3 44.6 33 44.5 33 44.5C33 44.5 32.3 42.5 31.6 41.6C31 40.8 29.8 39.9 28.9 39.4C28.1 38.8 27.6 38.7 26.9 38.5C26.1 38.4 24.2 38.5 24.2 38.5L23.9 37.5L24.6 36.8Z"/>'
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
