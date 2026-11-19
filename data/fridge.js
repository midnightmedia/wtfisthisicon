/* Fridges, freezers and fridge-freezers (fridge).
 * Freezer star ratings, control-panel buttons, alarms, dispensers and the
 * small print on the rating plate.
 * Format and drawing rules are in data/README.md.
 *
 * Shared parts below keep the families consistent: one six-pointed star (for the
 * freezer star ratings), one snowflake, one water drop and one drinking glass. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }


  // Six-armed snowflake centred on (cx, cy), arm length L, with a V-shaped branch on each arm.
  function snowflake(cx, cy, L, sw) {
    var v = L * 0.56, b = L * 0.3;
    var arm = "M" + cx + " " + cy + "V" + r2(cy - L) +
      "M" + r2(cx - b) + " " + r2(cy - v - b) + "L" + cx + " " + r2(cy - v) + "L" + r2(cx + b) + " " + r2(cy - v - b);
    var out = '<g stroke-width="' + sw + '">';
    for (var k = 0; k < 6; k++) {
      out += '<path d="' + arm + '"' + (k ? ' transform="rotate(' + 60 * k + " " + cx + " " + cy + ')"' : "") + "/>";
    }
    return out + "</g>";
  }

  // Water drop: round part of radius r centred on (cx, cy), point on top. Solid unless outline is set.
  function drop(cx, cy, r, outline) {
    var t = r2(cy - 2.2 * r);
    return '<path ' + (outline ? "" : 'fill="currentColor" stroke="none" ') + 'd="M' + cx + " " + t +
      "C" + r2(cx - 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + r2(cx - r) + " " + r2(cy - 0.8 * r) + " " + r2(cx - r) + " " + cy +
      "A" + r + " " + r + " 0 0 0 " + r2(cx + r) + " " + cy +
      "C" + r2(cx + r) + " " + r2(cy - 0.8 * r) + " " + r2(cx + 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + cx + " " + t + 'Z"/>';
  }

  // Drinking glass (tumbler) for the dispenser buttons: open top at y = 18, thick base from y = 50 to 56.
  var GLASS = '<path d="M16 18L20.5 56H43.5L48 18"/><path d="M19.9 50.5H44.1" stroke-width="3"/>';

  // Fan with three solid curved blades (as used on the air-con icons).
  var BLADE = "M0,0C-3.5,-5 -5,-11.5 -3,-16.5C-0.5,-22.5 9.5,-22 13,-17C16,-12.5 11.5,-4.5 0,0Z";
  function fan(cx, cy, s) {
    var b = BLADE.replace(/(-?\d*\.?\d+),(-?\d*\.?\d+)/g, function (m, x, y) {
      return r2(cx + s * x) + " " + r2(cy + s * y);
    });
    return '<g fill="currentColor" stroke="none">' +
      '<path d="' + b + '" transform="rotate(-10 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(110 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(230 ' + cx + " " + cy + ')"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2(3.5 * s) + '"/></g>';
  }


  WTF.add([
    // =====================================================================
    // FREEZER STAR RATINGS
    // =====================================================================
    {
      id: "fridge-freezer-one-star",
      name: "One star (*) freezer compartment",
      quiz: "Keeps frozen food for about a week",
      category: "fridge",
      aka: ["1 star", "one star", "*", "ice box", "frozen food compartment", "-6°C", "star rating"],
      looksLike: ["one star", "single star", "star", "asterisk", "star on the ice box", "one snowflake"],
      meaning:
        "A one-star compartment (usually the little ice box inside a fridge) only gets down to about −6°C. That's cold enough to keep food that's already frozen for about a week, but it isn't a real freezer. Think paddling pool, not swimming pool.",
      action:
        "Use it for ice cubes and for shop-bought frozen food you'll eat within a week or so. Don't try to freeze fresh food in it.",
      tip: "Frozen food packets often carry a little star chart: roughly one star = 1 week, two stars = 1 month, three stars or a freezer = until the best-before date. Match the stars on the packet to the stars on your compartment.",
      // Traced from the freezer star rating label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.6 7C32.6 6.9 35.9 7.1 38.1 7.2C40.4 7.4 40.8 7.5 42.8 7.8C44.7 8.1 48.1 8.6 50 9.1C51.8 9.5 54 10.3 54 10.3C54 10.3 55.8 17.5 56.2 20.6C56.7 23.8 56.8 26.8 57 29.1C57.1 31.5 57.1 32.4 57 34.8C56.8 37.1 56.8 40 56.2 43.1C55.7 46.3 53.9 53.8 53.9 53.8C53.9 53.8 45.8 55.6 43 56.1C40.3 56.7 39.2 56.7 37.2 56.9C35.3 57 33.9 57.2 31.1 57C28.4 56.9 24.3 56.7 20.8 56.1C17.2 55.6 10.1 53.6 10.1 53.6C10.1 53.6 8.2 46.1 7.8 42.6C7.2 39.2 7 36.5 7 33C7 29.4 7.2 25 7.8 21.2C8.2 17.5 10.1 10.2 10.1 10.2C10.1 10.2 11.5 9.6 13.2 9.2C14.8 8.9 17 8.3 19.8 8C22.5 7.6 26.5 7.2 29.6 7ZM29.6 7.7C32.3 7.6 35.2 7.6 37.5 7.8C39.7 7.9 41 8 43.1 8.3C45.3 8.7 48.7 9.3 50.5 9.8C52.2 10.2 53.5 10.8 53.5 10.8C53.5 10.8 55.3 17.2 55.8 21.1C56.2 24.9 56.5 30.4 56.5 34C56.5 37.7 56 40.4 55.8 42.9C55.5 45.3 55 47.1 54.6 48.9C54.2 50.6 53.4 53.4 53.4 53.4C53.4 53.4 45.7 55.2 42 55.8C38.2 56.3 34.5 56.5 31.1 56.5C27.8 56.5 25.3 56.3 21.9 55.8C18.4 55.2 10.7 53.2 10.7 53.2C10.7 53.2 9 46.9 8.4 43.5C7.9 40 7.5 36.2 7.5 32.4C7.5 28.5 7.9 24 8.4 20.4C9 16.7 10.7 10.6 10.7 10.6C10.7 10.6 17.6 8.8 20.8 8.3C23.9 7.9 26.8 7.8 29.6 7.7ZM26.1 19.4C26.1 19.4 25.7 18.1 26.6 19.6C27.6 21.2 31.9 28.6 31.9 28.6L37.4 19.4L40 20.6C40 20.6 40.7 19.9 39.9 21.6C39 23.2 34.9 30.2 34.9 30.2L45.9 30.6L45.6 33.5L34.9 33.8L40.2 43C40.2 43 39.9 43.4 39.5 43.6C39 43.9 37.6 44.5 37.6 44.5C37.6 44.5 38.2 45.9 37.2 44.4C36.3 42.8 31.9 35.4 31.9 35.4L26.4 44.5C26.4 44.5 26.6 44.8 26.1 44.5C25.7 44.3 23.8 43 23.8 43L29.1 33.8L18.1 33.5L18.2 30.4L29.1 30.2L23.8 20.9L26.1 19.4Z"/>'
    },
    {
      id: "fridge-freezer-two-star",
      name: "Two star (**) freezer compartment",
      quiz: "Keeps frozen food for about a month",
      category: "fridge",
      aka: ["2 star", "two star", "**", "ice box", "frozen food compartment", "-12°C", "star rating"],
      looksLike: ["two stars", "2 stars", "two asterisks", "double star", "stars on the ice box", "two snowflakes"],
      meaning:
        "A two-star compartment or section runs at about −12°C or colder. That keeps food that's already frozen for up to about a month, but it can't freeze fresh food properly.",
      action:
        "Use it for ice and for frozen food you'll get through within a few weeks. For anything longer, or for freezing your own food, you need a four-star freezer.",
      tip: "Some proper freezers have a 'two-star section' too: a shelf or tray marked with two stars that runs warmer than the rest. It's the place for ice cream or things you'll eat soon, not the long-term stuff.",
      // Traced from the freezer star rating label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.1 15.7C34.4 15.6 40.9 16 44.6 16.4C48.4 16.7 50 17.1 52.4 17.6C54.7 18 58.5 19.1 58.5 19.1C58.5 19.1 59.4 24.4 59.6 26.6C59.9 28.7 60 30.4 60 32.1C60 33.9 59.9 35.1 59.6 37.2C59.4 39.4 58.4 44.9 58.4 44.9C58.4 44.9 49.2 46.9 45 47.5C40.9 48 36.7 48.1 33.4 48.2C30 48.4 27.5 48.2 25.1 48C22.6 47.9 22.2 48 18.9 47.5C15.7 46.9 5.8 44.9 5.8 44.9C5.8 44.9 4.4 37.7 4.2 34.9C3.9 32 4 30.4 4.2 27.8C4.5 25.1 5.8 18.9 5.8 18.9C5.8 18.9 14.6 17 18.6 16.4C22.7 15.9 25.7 15.7 30.1 15.7ZM29.4 16.1C32.7 15.9 35.2 16 37.8 16.1C40.3 16.3 42.6 16.5 44.9 16.8C47.1 17 49.3 17.3 51.5 17.8C53.6 18.2 58 19.4 58 19.4C58 19.4 58.9 23.2 59.1 25.4C59.4 27.7 59.5 30.7 59.5 32.9C59.5 35 59.4 36.5 59.1 38.5C58.9 40.4 57.9 44.6 57.9 44.6C57.9 44.6 49 46.6 44.6 47.1C40.3 47.7 36.2 48 31.9 48C27.7 48 22.8 47.5 19.4 47.1C15.9 46.8 13.3 46.2 11.1 45.8C8.8 45.3 6 44.5 6 44.5C6 44.5 4.8 38.1 4.5 35.1C4.3 32.2 4.5 29.2 4.8 26.6C5 23.9 6 19.4 6 19.4C6 19.4 8.6 18.6 10.7 18.1C12.7 17.7 15.2 17.2 18.4 16.9C21.5 16.5 26.2 16.2 29.4 16.1ZM14.4 23.8C14.8 23.6 14.3 22.9 14.9 23.9C15.6 24.8 18.4 29.6 18.4 29.6L21.9 23.8C21.9 23.8 22.5 23.8 22.8 23.9C23 24.1 23.6 24.9 23.6 24.9L20.4 30.8L27.6 31.1L27.4 33L20.4 33L23.6 39C23.6 39 23.4 39.5 23.1 39.6C22.9 39.8 21.9 40 21.9 40L18.4 34.1L14.7 40.1L13.1 39L16.4 33.1L9.3 32.9L9.4 30.9L16.4 30.8L13.1 24.8C13.1 24.8 14.1 23.9 14.4 23.8ZM41.8 23.8C42 23.6 41.6 22.9 42.2 23.9C42.9 24.8 45.6 29.6 45.6 29.6L49.2 23.8C49.2 23.8 49.6 23.7 49.9 23.9C50.1 24 51 24.9 51 24.9L47.6 30.8L54.8 30.9L54.6 33L47.6 33L51 39C51 39 50.5 39.5 50.2 39.8C50 40 49.5 40.1 49.5 40.1C49.5 40.1 49.8 41 49.1 40C48.5 39 45.6 34.1 45.6 34.1L42.2 40C42.2 40 41.9 40.1 41.5 40C41.2 39.8 40.4 39 40.4 39L43.8 33.1L36.6 33L36.6 30.9L43.8 30.8C43.8 30.8 40.9 25.9 40.4 24.9C39.8 23.8 40.2 24.6 40.5 24.4C40.7 24.3 41.5 23.9 41.8 23.8Z"/>'
    },
    {
      id: "fridge-freezer-three-star",
      name: "Three star (***) freezer compartment",
      quiz: "Keeps frozen food for about 3 months",
      category: "fridge",
      aka: ["3 star", "three star", "***", "frozen food compartment", "-18°C", "star rating"],
      looksLike: ["three stars", "3 stars", "three asterisks", "row of stars", "stars on the freezer", "three snowflakes"],
      meaning:
        "Runs at −18°C or colder, so it keeps food that's already frozen for about 3 months (often longer: check the packet). It's built for storing frozen food, not for freezing fresh food.",
      action:
        "Fine for your frozen shopping. Don't put lots of fresh or unfrozen food in at once: it freezes slowly and warms up everything that's already in there.",
      tip: "The only difference from a four-star freezer is that missing big star. Same temperature, but not powerful enough to freeze fresh food quickly and safely.",
      // Traced from the freezer star rating label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.4 20.6C36.1 20.6 41.3 20.9 46 21.4C50.6 21.8 57.1 23.1 59.5 23.4C61.8 23.8 60 23.6 60 23.6L60.5 26.9C60.5 26.9 60.1 24.6 60 24.1C59.8 23.5 60.5 23.8 59.4 23.6C58.2 23.3 56.1 22.8 52.9 22.4C49.6 21.9 44.4 21.2 39.6 20.9C34.9 20.7 28.4 20.8 24.4 20.9C20.4 21.1 18.9 21.3 15.7 21.8C12.3 22.2 6.5 23.2 4.5 23.6C2.6 23.9 4.2 23.7 4 24.1C3.9 24.4 3.9 24.3 3.8 25.4C3.6 26.6 3.2 29.4 3.1 31.1C3.1 32.9 3.2 34.4 3.4 36C3.5 37.5 4.3 40.5 4.3 40.5C4.3 40.5 7.7 41.2 10.8 41.6C13.8 42.1 19.4 42.7 22.8 43C26.1 43.2 27.8 43.2 30.6 43.2C33.5 43.3 36.9 43.2 39.6 43C42.4 42.9 43.8 42.9 47 42.5C50.3 42 57.2 41 59.4 40.5C61.5 40.1 59.8 40.5 60 40C60.1 39.4 60.5 37.1 60.5 37.1L60 40.5C60 40.5 50.5 42.2 46.1 42.6C41.8 43.1 38.3 43.4 33.5 43.4C28.8 43.4 22.8 43.1 17.9 42.6C13 42.2 4.2 40.5 4.2 40.5C4.2 40.5 3.2 35 3 33C2.9 30.9 3.1 29.6 3.2 28.1C3.4 26.5 4 23.6 4 23.6C4 23.6 13.5 21.8 18.1 21.4C22.6 20.9 26.8 20.6 31.4 20.6ZM10.2 26.4C10.2 26.4 10.1 25.8 10.6 26.4C11 27.1 12.9 30.4 12.9 30.4C12.9 30.4 14.9 27.2 15.3 26.6C15.8 25.9 15.8 26.4 15.8 26.4L16.6 27.1L14.3 31.1L19.2 31.4L19.1 32.8L14.3 32.9L16.6 37C16.6 37 16.2 37.4 16.1 37.5C15.9 37.7 15.4 37.6 15.4 37.6L12.9 33.5L10.6 37.5L9.6 37.4L9.3 36.9L11.7 33L6.8 32.6L6.8 31.4L11.7 31.1L9.3 27.1L10.2 26.4ZM29.1 26.4C29.1 26.4 29.1 25.8 29.6 26.4C30 27.1 31.9 30.4 31.9 30.4C31.9 30.4 33.9 27.2 34.4 26.6C34.8 25.9 34.9 26.4 34.9 26.4L35.6 27.1L33.4 31.1L38.2 31.4L38 32.8L33.4 32.9L35.6 37C35.6 37 35.2 37.4 35 37.5C34.8 37.7 34.5 37.6 34.5 37.6L32 33.5L29.6 37.5L28.6 37.4L28.4 36.9L30.6 33L25.8 32.6L25.9 31.4L30.6 31.1L28.4 27.1L29.1 26.4ZM48.1 26.4C48.1 26.4 48.1 25.8 48.5 26.4C49 27.1 51 30.4 51 30.4C51 30.4 52.9 27.2 53.4 26.6C53.8 25.9 53.9 26.4 53.9 26.4L54.6 27.1L52.4 31.1L57.2 31.4L57 32.8L52.4 32.9L54.6 37L54 37.5L53.4 37.5L51 33.5L48.6 37.5L47.5 37.4L47.4 36.9L49.6 33L44.8 32.6L44.9 31.4L49.6 31.1L47.4 27.1L48.1 26.4ZM60.8 30.6L60.9 33.5L60.8 30.6Z"/>'
    },
    {
      id: "fridge-freezer-four-star",
      name: "Four star freezer (big star + three small stars)",
      quiz: "Freezer that can freeze fresh food",
      category: "fridge",
      aka: ["4 star", "four star", "****", "food freezer", "freeze fresh food", "-18°C", "star rating"],
      looksLike: ["big star and three small stars", "star with three small stars", "four stars", "one big star three little stars", "large star and small stars", "snowflake and three stars"],
      meaning:
        "The proper freezer rating. The three small stars mean it stores food at −18°C or colder; the big star means it's also powerful enough to freeze fresh food from room temperature right through, within 24 hours. It's the only rating meant for freezing fresh food, so that big star is doing the heavy lifting.",
      action:
        "Freeze fresh or home-cooked food in small, flat, well-wrapped portions. Check the 'freezing capacity' (kg per 24 h) on the rating plate and don't add more than that in one day. For a big load, switch on fast freeze a few hours beforehand.",
      tip: "Most food keeps its best quality for 3–12 months in a four-star freezer. Frozen food doesn't go off as such; it just slowly loses flavour and texture, so a label with the date helps.",
      // Traced from the freezer star rating label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M3.2 23.6L60.9 23.6L61 40.4L3.2 40.5L3.2 23.6ZM41.9 26.1C44.4 26.1 47.2 26.2 49.8 26.4C52.2 26.7 56.9 27.6 56.9 27.6C56.9 27.6 57.4 29.5 57.5 30.9C57.5 32.4 57 36.2 57 36.2C57 36.2 52 37.3 49.6 37.5C47.3 37.8 45.1 38 42.6 38C40.1 38 37.2 37.8 34.6 37.5C32.1 37.3 27.4 36.4 27.4 36.4C27.4 36.4 26.9 34.4 26.9 33C26.9 31.5 27.4 27.6 27.4 27.6C27.4 27.6 32.2 26.7 34.6 26.4C37 26.2 39.3 26.1 41.9 26.1ZM12.2 26.6L15.2 30.9L17.6 26.6L18.6 26.9L16.1 31.4L21.1 31.6L21.2 32.4L16.1 32.5L18.4 37.2L17.6 37.4L15.2 33.1L12.6 37.5L11.8 37.1L14.2 32.6L9.1 32.5L8.9 31.8L14.2 31.4L11.8 27.1L12.2 26.6ZM30.6 28.9L31.9 30.9L33.2 29.1L33.8 29.1C33.8 29.1 34.1 29.2 34 29.6C33.8 29.9 33 31.4 33 31.4L35.5 31.8L35.2 32.5L33 32.5L34 34.5L33.8 35L33.2 35L32 33L30.8 35L30.1 34.9L31.1 32.5L28.6 32.4L28.8 31.6L31.1 31.4L30.1 29.6L30.6 28.9ZM40.6 28.9L42.1 30.9C42.1 30.9 43 29.6 43.2 29.2C43.5 28.9 44 29.1 44 29.1L44.1 29.4L43 31.4L45.5 31.6L45.5 32.4L43 32.5L44.1 34.5L44 35C44 35 43.5 35.1 43.2 34.8C43 34.4 42.2 33 42.2 33C42.2 33 41.3 34.5 41 34.9C40.8 35.2 40.5 35 40.5 35L40.2 34.5L41.2 32.5L38.8 32.2L39 31.6L41.4 31.4L40.2 29.4L40.6 28.9ZM50.8 28.9L52.2 30.9C52.2 30.9 53.2 29.5 53.5 29.1C53.8 28.8 54 29.1 54 29.1L54.2 29.4L53.1 31.4L55.6 31.6L55.5 32.4L53.1 32.5L54.2 34.5L54 35C54 35 53.7 35.2 53.5 34.9C53.2 34.5 52.4 33 52.4 33C52.4 33 51.5 34.5 51.1 34.9C50.8 35.2 50.5 35 50.5 35L50.4 34.5L51.4 32.5L49 32.4L49.1 31.6L51.4 31.4L50.4 29.4L50.8 28.9Z"/>'
    },

    // =====================================================================
    // PANEL BUTTONS & MODES
    // =====================================================================
    {
      id: "fridge-super-freeze",
      name: "Super freeze / fast freeze",
      category: "fridge",
      aka: ["super freeze", "fast freeze", "quick freeze", "power freeze", "express freeze", "turbo freeze", "FAST FREEZE"],
      looksLike: ["snowflake with lines", "snowflake with speed lines", "snowflake button", "moving snowflake", "snowflake in a hexagon", "amber light on the freezer", "yellow light on the freezer"],
      meaning:
        "Runs the freezer flat out, colder than normal, so a big batch of fresh food freezes right through quickly and the food already in there stays frozen. On chest and upright freezers it's often a switch with an amber or yellow light.",
      action:
        "Switch it on a few hours before adding a big load of fresh food. Manuals say anything from 4 to 24 hours, which narrows it down. Most digital models turn it off by themselves after one to three days. On older freezers with a switch and an amber light you may have to turn it off yourself, or it runs non-stop and wastes electricity.",
      tip: "Not needed for a bag of shop-bought frozen peas: it's for freezing lots of fresh or home-cooked food at once. Some freezers have an automatic version that switches itself on when warm food goes in.",
      svg:
        snowflake(38, 32, 18.5, 3.5) +
        '<path d="M6 23H14M4 32H14M6 41H14" stroke-width="3.5"/>'
    },
    {
      id: "fridge-super-cool",
      name: "Super cool / fast cool",
      category: "fridge",
      aka: ["super cool", "fast cool", "quick cool", "power cool", "express cool", "quick fridge", "super cooling"],
      looksLike: ["water drop with a snowflake", "drop and snowflake", "snowflake with a drop", "snowflake next to the fridge temperature", "raindrop and snowflake"],
      meaning:
        "Runs the fridge section at its coldest for a few hours to chill a big shop or warm drinks quickly, then calms back down to your normal temperature by itself.",
      action:
        "Turn it on just before you load a big shop (on Samsung, hold the fridge button for about 3 seconds). It usually switches off after around 6 hours, up to 15 on some models, or you can press the button again to cancel. It's a bit noisier while it runs.",
      tip: "Icons vary a lot: a drop with a snowflake, a snowflake by the fridge temperature or, mercifully, just the word. If lettuce at the back is freezing, check super cool isn't stuck on and the fridge isn't set colder than about 3°C.",
      // Samsung Power Cool, traced.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.9 7C29.3 6.9 29.6 6.9 29.9 7C30.3 7.2 30.4 7.1 31.1 8.1C31.7 9 33.8 12.6 33.8 12.6C33.8 12.6 36.3 8.4 37 7.5C37.6 6.5 37.2 7 37.5 7C37.9 7 36.8 3.8 39.1 7.5C41.5 11.1 49.6 24.2 51.6 28.9C53.7 33.7 51.5 35.9 51.5 35.9C51.5 35.9 52.7 37.1 50.5 33.2C48.4 29.4 40.9 16.2 38.8 12.7C36.6 9.1 38 12.1 38 12.1C38 12.1 36.1 14.8 35.8 15.6C35.4 16.3 34.1 13.5 35.8 16.4C37.4 19.4 43.5 29.5 45.4 33.1C47.2 36.8 46.4 37 46.6 38.4C46.9 39.7 46.9 39.9 46.6 41.2C46.4 42.6 45.9 44.9 45.4 46.4C44.8 47.8 44.1 48.9 43.2 50C42.4 51.2 40 53.5 40 53.5C40 53.5 40 53.8 40.6 53.6C41.2 53.5 42.5 53.2 43.5 52.8C44.6 52.3 45.8 51.7 46.9 50.8C48 49.8 49.4 48.2 50.1 47C50.9 45.9 51.4 43.9 51.4 43.9L51.6 43.8C51.6 43.8 51.8 43.1 51.8 44.1C51.8 45.2 51.8 49.1 51.6 50.2C51.5 51.4 52 50.2 51.1 51C50.3 51.7 48 53.8 46.5 54.8C45.1 55.7 43.5 56.1 42.4 56.5C41.2 56.8 40.6 56.9 39.6 57C38.7 57 37.5 57 36.6 57C35.8 56.9 35.7 56.5 34.2 56.5C32.8 56.5 29.8 57.1 27.9 57C25.9 56.8 24.2 56.2 22.8 55.6C21.3 55.1 20.3 54.5 19.1 53.5C18 52.6 16.5 51.1 15.7 50C14.8 49 14.4 48.2 13.9 47.2C13.5 46.2 13 45 12.8 44C12.5 43.1 12.3 42.4 12.2 41.4C12.2 40.4 12.1 39.3 12.2 38C12.4 36.8 10.8 38.6 13.2 34C15.5 29.5 23.7 15.3 26.1 10.9C28.6 6.6 27.4 8.7 27.9 8.1C28.3 7.4 28.6 7.2 28.9 7ZM29.2 12.2L29.6 12.2C29.6 12.2 28.4 9.8 30.2 13.1C32.1 16.3 39 28.3 41 31.9C43.1 35.4 42.1 33.7 42.5 34.5C42.8 35.4 43.1 35.8 43.2 37.1C43.4 38.5 43.4 41 43.2 42.4C43.1 43.7 42.9 44.1 42.5 45C42.1 46 41.5 47 40.9 47.9C40.2 48.7 39.5 49.5 38.6 50.2C37.8 51 36.8 51.7 35.8 52.2C34.7 52.8 33.1 53.3 32.2 53.5C31.4 53.8 31.3 53.6 30.4 53.6C29.4 53.6 27.6 53.6 26.8 53.5C25.9 53.5 25.9 53.4 25.2 53.1C24.6 52.9 23.8 52.6 22.9 52.1C22.1 51.6 20.9 50.9 20.1 50.1C19.2 49.4 18.4 48.5 17.9 47.6C17.3 46.8 16.9 46.1 16.6 45.2C16.2 44.4 15.8 43.2 15.7 42.5C15.5 41.7 15.6 41.4 15.6 40.5C15.6 39.6 15.5 38.1 15.7 37C15.8 36 14.3 38.4 16.6 34.2C18.8 30.1 29.2 12.2 29.2 12.2ZM29.1 29.2C29.5 29.1 29.8 29.2 30.1 29.4C30.4 29.6 30.8 29.5 30.9 30.4C31.1 31.4 30.9 34.1 30.9 34.9C31 35.6 31.2 35.1 31.2 35.1C31.2 35.1 34.5 33.3 35.5 33C36.4 32.6 36.5 33.1 36.9 33.2C37.2 33.4 37.3 33.8 37.4 34C37.4 34.3 37.5 34.5 37.4 34.9C37.2 35.2 37.1 35.4 36.4 36C35.6 36.5 32.9 38 32.9 38C32.9 38 32.3 38 33 38.5C33.6 38.9 36.1 40.2 36.9 40.6C37.6 41.1 37.3 41.1 37.4 41.4C37.4 41.6 37.5 42 37.4 42.2C37.2 42.5 37 42.8 36.8 43C36.5 43.2 36.6 43.8 35.6 43.5C34.7 43.1 31.1 41 31.1 41C31.1 41 31.1 44.8 30.9 45.8C30.8 46.7 30.4 46.6 30.1 46.9C29.9 47.1 29.9 47.1 29.6 47C29.2 47 28.6 46.9 28.4 46.8C28.1 46.6 28 46.9 27.9 46C27.7 45 27.6 41 27.6 41L23.1 43.5L21.6 42.5C21.6 42.5 21.4 41.5 21.6 41.1C21.7 40.8 21.7 40.7 22.4 40.2C23.2 39.8 25.9 38.4 25.9 38.4C25.9 38.4 26.2 38.2 25.6 37.6C24.9 37.1 21.6 35.2 21.6 35.2L21.6 33.5C21.6 33.5 21.9 33.1 22.2 33C22.6 33 22.9 32.7 23.8 33C24.6 33.4 27.6 35.1 27.6 35.1L27.9 30.2C27.9 30.2 28.8 29.4 29.1 29.2Z"/>'
    },
    {
      id: "fridge-holiday-mode",
      name: "Holiday / vacation mode",
      category: "fridge",
      aka: ["holiday", "vacation", "away mode", "holiday mode", "vacation mode", "eco friendly"],
      looksLike: ["suitcase", "briefcase", "luggage", "bag with a handle", "case with a handle", "palm tree", "plane"],
      meaning:
        "Saves energy while you're away. The freezer carries on as normal, but the fridge section is allowed to warm up: on Bosch and Samsung models, for example, it's held at about 14–15°C, far too warm for food.",
      action:
        "Empty the fridge part before switching it on (the freezer can stay full), and switch it off when you're back. Let the fridge cool down again before you restock it.",
      tip: "Not every brand packs for the same holiday. LG's 'Vacation' (once called 'Eco Friendly') just nudges the fridge up to about 7°C and the freezer to −15°C. That's still too warm for milk and meat, so check your manual before leaving food in.",
      // Bosch holiday suitcase, traced.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M26.9 13.8C29 13.5 35.1 13.6 37.1 13.8C39.2 13.9 38.6 14.7 39 14.9C39.5 15.2 39.9 15.1 39.9 15.1C39.9 15.1 39.7 15.5 39.9 15.8C40 16 40.4 15.8 40.5 16.4C40.7 17.1 40.5 19.6 40.5 19.6C40.5 19.6 39.3 19.8 41 19.9C42.6 19.9 48.9 19.7 50.6 19.9C52.4 20 50.9 20.4 51.4 20.6C51.8 20.7 52.6 20.2 53.4 20.6C54.1 20.9 55.4 21.9 55.9 22.4C56.3 22.8 55.8 23 56 23.4C56.2 23.7 56.9 20.1 57 24.4C57.2 28.6 57.2 44.6 57 48.9C56.8 53.1 56.6 49.9 55.9 50.1C55.1 50.4 52.6 50.1 52.6 50.1C52.6 50.1 53.9 49.1 54.1 48.6C54.4 48.2 54.2 47.8 54.4 47.5C54.5 47.3 54.9 47.1 54.9 47.1C54.9 47.1 55 30 54.9 26.2C54.8 22.5 54.8 25.4 54.2 24.8C53.8 24.1 52.9 23 51.9 22.6C50.8 22.3 48.5 22.6 47.8 22.6C47 22.7 47.2 23.1 47.2 23.1L47 50.1L44.5 50L44.5 23.1C44.5 23.1 47.9 22.7 43.9 22.6C39.8 22.6 24.1 22.6 20.1 22.6C16 22.7 19.6 22.9 19.6 22.9L19.4 50.1L16.8 50C16.8 50 16.8 27.7 16.8 23.1C16.7 18.6 17 22.7 16.2 22.6C15.5 22.6 13 22.5 12.2 22.6C11.3 22.8 11.4 22.9 11.1 23.2C10.7 23.6 10.1 24.4 9.8 24.8C9.6 25.1 9.9 25.3 9.8 25.6C9.6 25.8 9.1 26.1 9.1 26.1C9.1 26.1 8.9 43.4 9.1 47C9.2 50.6 9.6 47.4 9.8 47.6C9.9 47.9 9.5 48.1 9.8 48.5C10 48.9 11.4 50 11.4 50C11.4 50 8.9 50.2 8.2 50.1C7.6 50.1 7.7 49.9 7.5 49.6C7.4 49.4 7.5 48.9 7.5 48.6C7.4 48.4 7 48.2 7 48.2C7 48.2 6.8 29.1 7 24.9C7.2 20.8 8 23.6 8.2 23.1C8.3 22.7 8.2 22.4 8.2 22.4C8.2 22.4 10 20.9 10.8 20.6C11.5 20.2 12.8 20.6 12.8 20.6L13.2 19.9C13.2 19.9 21.4 19.9 23.1 19.9C24.9 19.8 23.6 19.6 23.6 19.6C23.6 19.6 23.4 17 23.6 16.4C23.7 15.7 24.1 16 24.2 15.8C24.4 15.5 24.2 15.1 24.2 15.1C24.2 15.1 24.7 14 26.9 13.8ZM27.2 15.9C27.2 15.9 34.9 15.8 36.5 15.9C38.2 16.1 37 16.5 37.2 16.6C37.5 16.8 38.1 16.9 38.1 16.9L38.1 19.6L26.1 19.8C26.1 19.8 25.8 19.6 25.8 19.1C25.7 18.7 25.7 17.5 25.8 17.1C25.8 16.6 26.1 16.6 26.1 16.6L26.8 16.6L27.2 15.9Z"/>'
    },
    {
      id: "fridge-eco-mode",
      name: "Eco / energy-saving mode",
      category: "fridge",
      aka: ["eco", "ECO", "energy saver", "energy saving", "eco mode", "AI energy mode", "economy"],
      looksLike: ["leaf", "green leaf", "eco", "plant", "leaf button", "leaf with a line"],
      meaning:
        "Lets the fridge and freezer run a little warmer to use less electricity. One Bosch model, for example, sets the fridge to 8°C and the freezer to −16°C in eco mode.",
      action:
        "Fine when the fridge is nearly empty, but the UK Food Standards Agency recommends 5°C or below for the fridge, and freezers should be at −18°C. If food goes off sooner than it should, turn eco off.",
      tip: "On Samsung, 'Energy Saver' is something else: it switches off little heaters (yes, in a fridge) that stop condensation forming round the doors. If you see water on the door seals, turn it off.",
      svg:
        '<path d="M16.5 47.5C13.5 28.5 25.5 12.5 51.5 11.5C52.5 35.5 37.5 49.5 16.5 47.5Z"/>' +
        '<path d="M16.5 47.5L38.5 25.5" stroke-width="3"/><path d="M16.5 47.5L11.5 52.5"/>'
    },
    {
      id: "fridge-child-lock",
      name: "Child lock / control lock",
      category: "fridge",
      aka: ["child lock", "control lock", "lock", "key lock", "button lock", "dispenser lock", "panel lock"],
      looksLike: ["padlock", "lock", "closed padlock", "padlock with a keyhole", "lock symbol", "key"],
      meaning:
        "The buttons are locked so nobody can change the temperature (or, on American-style fridges, use the water and ice dispenser) by accident. While it's on, the buttons just beep or do nothing.",
      action:
        "Press and hold the lock button, or the button with the padlock printed next to it, for about 3 seconds until the padlock goes out. Some models use two buttons held together: the manual will say.",
      tip: "If none of the buttons respond, check this first. Some Samsung fridges have two locks: one for the whole panel and a separate one just for the dispenser.",
      svg:
        '<rect x="14" y="28" width="36" height="27" rx="4"/><path d="M21 28V20A11 11 0 0 1 43 20V28"/>' +
        '<circle cx="32" cy="38.5" r="3.5" fill="currentColor" stroke="none"/><path d="M32 40V46.5" stroke-width="3.5"/>'
    },
    {
      id: "fridge-fan",
      name: "Fan switch inside the fridge",
      category: "fridge",
      aka: ["fan", "fan button", "air circulation", "multi airflow", "fan on/off", "ventilation"],
      looksLike: ["fan", "propeller", "three blades", "fan in a circle", "windmill", "pinwheel", "flower"],
      meaning:
        "Some fridges (Hotpoint, Indesit and others) have a fan inside the fridge section with its own on/off button. It stirs the cold air so the top and bottom shelves stop disagreeing about the temperature.",
      action:
        "Leave it on in a warm kitchen: Hotpoint suggests having it on when the room is above about 27°C, or if droplets form on the glass shelves. It starts and stops by itself, so a still fan may just be having a rest while switched on.",
      tip: "Bigger fridges sell the same idea as 'Multi Airflow': cold air blown out of several vents so there are fewer warm spots. Either way, don't block the vents with food.",
      svg: '<circle cx="32" cy="32" r="24"/>' + fan(32, 32.5, 0.92)
    },

    // =====================================================================
    // ALARMS & WARNINGS
    // =====================================================================
    {
      id: "fridge-temperature-alarm",
      name: "High temperature alarm / red light",
      quiz: "Freezer or fridge too warm",
      category: "fridge",
      color: "red",
      urgency: "soon",
      aka: ["temperature alarm", "high temp alarm", "red light", "warning light", "freezer alarm", "freezer too warm", "alarm"],
      looksLike: ["thermometer in a circle", "circled thermometer", "red thermometer light", "thermometer", "thermometer with exclamation mark"],
      meaning:
        "The freezer (or fridge) is warmer than it should be. Usual causes: it's only just been switched on, a big load of unfrozen food has gone in, or the door or lid was left open or isn't sealing. On many chest and upright freezers this is the red light (green means power, amber means fast freeze).",
      action:
        "Press the alarm button to stop the beeping, check the door or lid is shut and the seal is clean, and give it a few hours. Beko says to wait 24 hours before calling for service if the red light stays on. If the food has thawed, don't refreeze it raw: cook it first, then it can be frozen again.",
      tip: "Many digital models flash the warmest temperature the freezer reached, so you can see how bad it got. Food that's still frozen hard is fine to keep.",
      // Beko high-temperature light: a thermometer in a circle.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.6 7.2C31 7 33.1 7 34.5 7.2C36 7.3 36.8 7.3 38.4 7.8C39.9 8.3 42.4 9.3 44 10.2C45.7 11 47 12 48.1 12.9C49.3 13.9 50.1 14.7 51.1 15.9C52.1 17.2 53.3 18.9 54.1 20.4C55 22 55.6 23.8 56 25.1C56.5 26.5 56.6 26.9 56.8 28.4C56.9 29.8 57.1 31.9 57 33.6C56.8 35.4 56.6 37.1 56 38.9C55.5 40.6 54.6 42.6 53.9 44.1C53.1 45.6 52.4 46.6 51.4 47.9C50.4 49.1 49.1 50.4 47.9 51.4C46.6 52.4 45.6 53.1 44.1 53.9C42.7 54.6 40.7 55.5 39.1 56C37.6 56.5 36.5 56.7 34.9 56.9C33.2 57 30.7 57 29.1 56.9C27.6 56.7 27.1 56.7 25.6 56.1C24 55.6 21.3 54.5 19.8 53.8C18.2 53 17.6 52.5 16.4 51.5C15.2 50.4 13.6 48.9 12.6 47.6C11.5 46.4 11 45.7 10.2 44C9.3 42.4 8.3 39.8 7.8 38C7.2 36.2 7.1 34.9 7 33.2C7 31.6 7.1 29.7 7.3 28.2C7.5 26.8 7.9 25.7 8.2 24.4C8.6 23.2 8.9 22.3 9.7 20.9C10.4 19.6 11.7 17.5 12.8 16.1C13.8 14.8 14.8 13.8 16.1 12.8C17.5 11.7 19.1 10.6 20.8 9.8C22.4 8.9 24.3 8.3 25.8 7.8C27.2 7.4 28.1 7.3 29.6 7.2ZM31.2 9.8C32.7 9.7 33.7 9.7 35.2 9.9C36.8 10.2 38.9 10.8 40.4 11.3C41.8 11.9 42.8 12.5 43.9 13.2C45 13.8 46 14.5 47 15.4C48 16.4 49 17.6 49.9 18.6C50.7 19.7 51.3 20.8 51.9 21.9C52.4 23 52.9 23.9 53.2 25.2C53.6 26.6 54.1 28.4 54.2 29.9C54.4 31.3 54.4 32.6 54.2 34.1C54.1 35.6 53.7 37.4 53.2 38.9C52.8 40.3 52.3 41.5 51.5 42.8C50.8 44 49.9 45.4 48.9 46.6C47.8 47.9 46.5 49 45.2 50C44 50.9 42.6 51.6 41.4 52.2C40.1 52.9 39 53.2 37.8 53.5C36.5 53.9 35.1 54.2 33.5 54.2C32 54.3 29.9 54.2 28.6 54C27.2 53.9 26.8 53.8 25.6 53.4C24.3 52.9 22.5 52.2 21.1 51.5C19.8 50.7 18.7 49.9 17.6 49C16.6 48.2 15.8 47.4 14.9 46.4C14.1 45.3 13.1 43.9 12.4 42.6C11.8 41.4 11.2 40 10.8 38.6C10.3 37.3 10 36 9.8 34.5C9.7 33 9.7 31.2 9.8 29.6C10 28.1 10.3 26.8 10.8 25.4C11.2 23.9 11.9 22.4 12.7 21.1C13.4 19.7 14.3 18.5 15.2 17.4C16.2 16.2 17.3 15.2 18.4 14.3C19.6 13.5 20.8 12.7 22.1 12.1C23.5 11.4 24.9 10.8 26.4 10.4C28 10.1 29.8 9.8 31.2 9.8ZM31.6 12.8C32.2 12.7 32.9 12.8 33.5 13.2C34 13.5 34.5 10.4 34.8 15.1C35 19.7 34.4 36.6 34.8 41.2C35.1 45.9 36.2 42.5 36.6 43.1C37.1 43.8 37.2 44.2 37.4 44.9C37.5 45.5 37.5 46.4 37.4 47C37.2 47.7 36.9 48.4 36.5 49C36.2 49.5 35.6 50.1 35 50.5C34.5 50.8 34 51.1 33.2 51.2C32.5 51.4 31.6 51.4 30.9 51.2C30.1 51.1 29.5 50.9 28.9 50.4C28.2 49.8 27.4 48.8 27.1 48.1C26.7 47.5 26.6 47.1 26.6 46.4C26.7 45.6 26.8 44.3 27.2 43.5C27.7 42.6 29.2 45.9 29.6 41C29.9 36.2 29.4 19.2 29.6 14.6C29.7 9.9 30 13.7 30.4 13.3C30.7 13 31.1 12.8 31.6 12.8ZM30.9 23.2L33.5 23.4L33.5 42C33.5 42 34.9 42.9 35.4 43.5C35.8 44 36 44.7 36.1 45.2C36.3 45.8 36.3 46.2 36.1 46.8C36 47.3 35.6 48.2 35.2 48.6C34.9 49.1 34.6 49.3 34.1 49.5C33.7 49.8 33.1 50.1 32.5 50.1C31.9 50.2 31.1 50 30.6 49.9C30.1 49.7 29.9 49.7 29.4 49.2C29 48.8 28.1 47.8 27.9 47C27.8 46.1 27.9 44.9 28.4 44C28.8 43.2 30.2 45.4 30.6 42C31.1 38.5 30.9 23.2 30.9 23.2Z"/>'
    },
    {
      id: "fridge-door-alarm",
      name: "Door open alarm",
      category: "fridge",
      urgency: "soon",
      aka: ["door alarm", "door open", "door ajar", "beeping fridge", "door open warning", "door alert"],
      looksLike: ["fridge with door open", "open door", "fridge with sound waves", "fridge with lines", "box with open door", "beeping"],
      meaning:
        "A door has been open (or not quite shut) for too long, usually a minute or two. The fridge takes this personally: it beeps, and the display or light flashes.",
      action:
        "Close the door properly. Still beeping? Something's stopping it sealing: a jar or shelf sticking out, a drawer not pushed in, a folded-over seal, or the fridge leaning forwards so the door swings open. Most models let you silence it with the alarm button.",
      tip: "Samsung's door alarm kicks in after 2 minutes. If it beeps with the door firmly shut, the door switch or sensor may be faulty.",
      // Samsung door open: the open door with a small bell.
      svg: '<rect x="22" y="8" width="22" height="48" rx="3"/><path d="M22 8L10 13.5V50.5L22 56Z"/><path stroke-width="2.6" d="M47.5 36H59.5M49.6 36V29.5A3.9 3.9 0 0 1 57.4 29.5V36M51.8 39A1.7 1.7 0 0 0 55.2 39"/>'
    },
    {
      id: "fridge-alarm-off",
      name: "Alarm off / mute button",
      category: "fridge",
      aka: ["alarm off", "alarm", "mute", "silence", "warning signal off", "alarm reset", "buzzer off"],
      looksLike: ["bell with a line through it", "crossed out bell", "bell", "muted bell", "speaker with a line through it", "bell with a slash"],
      meaning:
        "Silences the beeping from a door or temperature alarm. It stops the noise, not the problem: the display may keep flashing until the door is shut or the freezer is back down to temperature.",
      action:
        "Press it once to stop the beep, then work out why it went off (door open? freezer too warm?). If the alarm keeps coming back, whatever caused it hasn't gone away.",
      tip: "On some brands the same button doubles as the button lock when held for a few seconds (Neff labels it 'alarm off/lock'), so a long press can lock the panel by accident. Two problems for the price of one.",
      svg:
        '<path d="M32 9A3 3 0 0 1 35 12V12.6A14 14 0 0 1 46 26.5V35.5L50.5 42.5H13.5L18 35.5V26.5A14 14 0 0 1 29 12.6V12A3 3 0 0 1 32 9Z"/>' +
        '<path d="M27 48A5 5 0 0 0 37 48"/>' +
        '<path d="M11 11L53 53" class="knock" stroke-width="10"/><path d="M11 11L53 53"/>'
    },

    // =====================================================================
    // ICE & WATER DISPENSER (American-style fridges)
    // =====================================================================
    {
      id: "fridge-dispenser-water",
      name: "Water (dispenser)",
      category: "fridge",
      aka: ["water", "chilled water", "dispenser", "water dispenser", "cold water", "WATER"],
      looksLike: ["glass with a drop", "glass of water", "cup with water", "glass", "tumbler", "glass with a water drop"],
      meaning:
        "Sets the dispenser on the front of the door to give chilled, filtered water when you press the paddle or button. The fridge's party trick.",
      action:
        "Select it, then push your glass against the paddle. After installing, or fitting a new filter, run a few litres through and pour them away to flush out air and filter dust. Spluttering or slow water usually means air in the pipe, or a filter that's due a change.",
      tip: "Water only flows if the fridge is plumbed into the mains or has a built-in tank you fill yourself. If nothing at all comes out, check the dispenser lock isn't on.",
      // LG dispenser: an outline glass with a wavy water line and an outline drop above.
      svg: '<path d="M16 18L20.5 56H43.5L48 18"/><path d="M18.4 36q3.4-2.6 6.8 0t6.8 0t6.8 0t6.8 0" stroke-width="3"/><path stroke-width="2.5" d="M32 4.5C30.6 7.7 27.4 10.9 27.4 14.6A4.6 4.6 0 0 0 36.6 14.6C36.6 10.9 33.4 7.7 32 4.5Z"/>'
    },
    {
      id: "fridge-dispenser-cubed-ice",
      name: "Cubed ice",
      category: "fridge",
      aka: ["cubed", "cubes", "ice cubes", "ice type", "CUBED", "cube ice"],
      looksLike: ["glass with ice cubes", "glass with cubes", "cup with squares", "glass with blocks", "ice in a glass", "glass with boxes"],
      meaning:
        "Sets the dispenser to drop whole ice cubes. Pressing the Ice Type (or Ice) button usually cycles through water, cubed and crushed: whichever icon is lit is what you'll get.",
      action:
        "Select it and press your glass against the paddle. Nothing coming out? Check the ice maker isn't switched off, and that the ice bucket isn't empty or jammed with a frozen clump of cubes.",
      tip: "Leave the ice unused for a while and the cubes fuse together, which rather defeats the point of cubes. Empty the bucket, break up the clump and let it refill.",
      // LG dispenser: an outline glass with three cubes seen corner-on.
      svg: '<path d="M16 18L20.5 56H43.5L48 18"/><g stroke-width="2.4"><polygon points="26.5,39.0 31.7,42.0 31.7,48.0 26.5,51.0 21.3,48.0 21.3,42.0"/><path d="M21.3 42.0L26.5 45.0L31.7 42.0M26.5 45.0V51.0"/><polygon points="37.5,38.0 42.7,41.0 42.7,47.0 37.5,50.0 32.3,47.0 32.3,41.0"/><path d="M32.3 41.0L37.5 44.0L42.7 41.0M37.5 44.0V50.0"/><polygon points="32.0,26.5 37.2,29.5 37.2,35.5 32.0,38.5 26.8,35.5 26.8,29.5"/><path d="M26.8 29.5L32.0 32.5L37.2 29.5M32.0 32.5V38.5"/></g>'
    },
    {
      id: "fridge-dispenser-crushed-ice",
      name: "Crushed ice",
      category: "fridge",
      aka: ["crushed", "crushed ice", "ice type", "CRUSHED", "ice chips"],
      looksLike: ["glass with small bits", "glass with ice chips", "glass with pieces", "glass with dots", "cup with crumbs", "glass with broken ice"],
      meaning:
        "The dispenser runs the ice through a crusher before it drops into your glass, so you get small chips of ice instead of whole cubes.",
      action:
        "Select it and hold your glass to the paddle. A grinding noise is normal. After switching back to cubes, a little crushed ice may come out first; that's normal too.",
      tip: "Crushed ice melts faster: lovely in a cocktail, less so in a drink you want to stay strong.",
      svg:
        GLASS +
        '<g fill="currentColor" stroke="none">' +
        '<path d="M22 43L26.5 41L28 45.5L23 46.5Z"/><path d="M31 42L36 41L35.5 46L30.5 46.5Z"/><path d="M38.5 43L42.5 40.5L43 45.5L39 46.5Z"/>' +
        '<path d="M25 34.5L30 33L29.5 38L24.5 38.5Z"/><path d="M34 32.5L39 34L37 38L33 37Z"/>' +
        '<path d="M28.5 25L33.5 25.5L32 30L27.5 29Z"/><path d="M38.5 26L42.5 27.5L40.5 31.5L37 29.5Z"/>' +
        '</g>'
    },
    {
      id: "fridge-ice-maker-off",
      name: "Ice maker off",
      quiz: "Ice maker disabled",
      category: "fridge",
      aka: ["ice off", "ice maker off", "ice on/off", "ice maker", "ICE OFF", "ice"],
      looksLike: ["ice cubes", "ice cubes with off", "two cubes", "cubes with the word off", "ice off", "dice"],
      meaning:
        "The automatic ice maker is switched off and won't make any more ice. If you (or someone else) turned it off on purpose, that's all it means.",
      action:
        "Press (or hold) the ice button to turn it back on. The first batch can take several hours, up to a day. If the fridge isn't connected to a water supply, leave it off, or the water valve can buzz as it tries to fill.",
      tip: "Throw away the first few batches of ice after installation or a new filter. They can taste odd or contain fine bits of carbon from the filter.",
      // Fisher & Paykel ice maker: two tilted squares, with OFF.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.8 12.6L35.6 22.9L44.8 19.8C44.8 19.8 44.2 17.3 45 19.9C45.9 22.6 49.9 35.6 49.9 35.6L47.9 35.5L43.4 22.2L30.4 26.8L33 35.6L31.2 35.6L30.1 32.8C30.1 32.8 26 35.2 24.6 35.6C23.3 36.1 21.8 35.5 21.8 35.5L14.2 21.1L29.8 12.6ZM28.9 15.3L33.2 23.6L27.9 25.6L29.4 31.1L23.6 34.1L16.9 21.9L28.9 15.3ZM42.2 24.1C42.2 24.1 42.3 23.4 42.8 24.6C43.2 25.8 45 31.4 45 31.4C45 31.4 44.8 31.8 44.5 31.9C44.3 31.9 43.9 31.9 43.9 31.9L41.5 24.9L42.2 24.1Z"/><text x="32" y="56" font-size="15">OFF</text>'
    },
    {
      id: "fridge-water-filter",
      name: "Water filter indicator / filter reset",
      category: "fridge",
      urgency: "soon",
      aka: ["filter", "replace filter", "change filter", "filter reset", "water filter", "FILTER", "filter light"],
      looksLike: ["drop in circular arrows", "water drop with arrows", "drop with two arrows", "drop in a circle of arrows", "refresh drop"],
      meaning:
        "A reminder that the water filter for the dispenser and ice maker needs replacing. It's usually just a timer: about 6 months (or a set amount of water) since it was last reset. On Samsung it turns orange or purple as a warning, then red when it's due.",
      action:
        "Fit a new filter (the manual shows where it lives: inside at the top, in the base grille or behind a cover). Run a few litres of water through to flush it, then reset the reminder, usually by holding the filter or alarm button for about 3 seconds.",
      tip: "The light has no idea whether you've actually changed the filter. Forget the reset and it keeps nagging; reset it without changing the filter and it won't. It's a timer, not a detective.",
      // Samsung filter icon: a drop inside two circular arrows.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.6 7C30.8 6.8 34.6 6.9 36.5 7C38.4 7.2 38.5 7.3 40 7.8C41.4 8.3 43.7 9.4 45 10.1C46.2 10.7 46.6 11.1 47.5 11.8C48.4 12.4 50.4 14.2 50.4 14.2L50.8 13.9L50.8 11.3L53.5 11.3L53.5 22.1L44 22.4L44 18.1L47.5 18.1L47.6 17.6C47.6 17.6 44.1 14.7 42.6 13.8C41.2 12.8 40.2 12.5 38.9 12.1C37.5 11.6 36.2 11.3 34.8 11.2C33.3 11 31.4 11.1 30.2 11.2C29.1 11.2 29.3 11.1 27.9 11.6C26.6 12 24 12.9 22.4 13.8C20.7 14.6 19.4 15.7 18.2 16.8C17.1 17.8 16.1 19.1 15.4 19.9C14.8 20.8 14.4 21.6 14.4 21.6C14.4 21.6 11.8 20.5 11.2 20.1C10.6 19.6 10.8 19.1 10.8 19.1C10.8 19.1 11.6 17.6 12.7 16.4C13.7 15.3 15.3 13.4 16.9 12.2C18.6 10.9 20.8 9.6 22.8 8.8C24.7 7.9 26.3 7.3 28.6 7ZM32.5 16.1C32.8 16.1 33.4 16.2 33.8 16.4C34.1 16.7 33.5 15.5 34.9 17.9C36.2 20.2 40.7 28.2 42 30.8C43.4 33.3 42.8 31.9 43 33.1C43.1 34.4 43.2 36.7 43 38.1C42.7 39.6 42 40.9 41.2 42C40.5 43 39.6 43.9 38.5 44.6C37.5 45.4 36.1 46.1 34.8 46.4C33.4 46.6 31.9 46.6 30.6 46.4C29.2 46.1 27.8 45.4 26.8 44.6C25.7 43.9 24.8 43 24.1 42C23.3 40.9 22.6 39.6 22.4 38.1C22.1 36.7 22.2 34.4 22.4 33.1C22.5 31.9 21.8 33.6 23.1 30.9C24.5 28.3 29.4 19.8 30.8 17.4C32.1 14.9 31.3 16.6 31.6 16.4C31.8 16.2 32.1 16.1 32.5 16.1ZM32.5 22.4C32.5 22.4 35 26.3 36.1 28.2C37.2 30.2 38.6 32.8 39.1 34.2C39.6 35.7 39.3 36.1 39.1 37C39 38 38.5 39 38 39.8C37.4 40.5 36.8 41.1 36 41.5C35.2 42 34.1 42.5 33.1 42.5C32.2 42.6 30.9 42.3 30.1 42C29.4 41.8 29.4 41.7 28.9 41.2C28.4 40.8 27.6 40.1 27.1 39.5C26.7 38.8 26.3 38 26.1 37.1C26 36.3 26.1 34.9 26.1 34.2C26.2 33.6 25.5 35 26.6 33C27.6 31.1 32.5 22.4 32.5 22.4ZM10.7 41.6C12.4 41.6 21.1 41.6 21.1 41.6L21.4 45.8L17.8 46L17.6 46.4C17.6 46.4 18.6 47.4 19.6 48.1C20.5 48.9 22.2 50 23.4 50.6C24.5 51.3 25.4 51.6 26.4 52C27.5 52.3 28.4 52.6 29.9 52.8C31.5 52.9 33.8 53 35.6 52.8C37.5 52.5 40 51.5 41.4 51C42.7 50.6 42.7 50.5 43.6 49.9C44.6 49.2 45.9 48.3 47 47.4C48 46.4 49.2 44.9 49.9 44C50.5 43.2 50.9 42.4 50.9 42.4L53.5 43.8C53.5 43.8 54.4 44.9 53.5 46.2C52.7 47.6 49.7 50.6 48.4 51.9C47 53.1 46.5 53.2 45.4 53.9C44.2 54.5 43.1 55.1 41.6 55.6C40.2 56.2 38.9 56.7 36.8 57C34.6 57.2 30.9 57.2 28.8 57C26.6 56.7 25.3 56.1 23.9 55.6C22.6 55.1 21.4 54.5 20.4 54C19.3 53.4 18.6 53 17.8 52.2C16.9 51.5 14.9 49.8 14.9 49.8C14.9 49.8 14.7 49.5 14.6 50C14.5 50.5 14.3 52.8 14.3 52.8L10.4 52.6C10.4 52.6 10.3 43.8 10.3 42C10.4 40.1 8.9 41.7 10.7 41.6Z"/>'
    },

    // =====================================================================
    // INSIDE THE FRIDGE
    // =====================================================================
    {
      id: "fridge-humidity-slider",
      name: "Humidity slider (salad drawer)",
      quiz: "Salad drawer vent setting",
      category: "fridge",
      aka: ["humidity control", "crisper", "salad drawer", "vegetable drawer", "fruit and veg", "high / low humidity", "VitaFresh"],
      looksLike: ["slider with drops", "small drop and big drop", "water drops", "slider with fruit and vegetables", "apple and carrot", "slider on the drawer"],
      meaning:
        "Opens or closes a vent on the salad (crisper) drawer. High humidity (vent closed, big drop or a vegetable picture) keeps moisture in for leafy veg. Low humidity (vent open, small drop or a fruit picture) lets out moisture and the ripening gas some fruit gives off.",
      action:
        "Use high for lettuce, herbs, broccoli and anything that wilts, and low for apples, pears, stone fruit and avocados. With two drawers, set one each way. Bosch suggests low for a mixed or very full drawer.",
      tip: "Some drawers show a fish or meat picture instead. That's a colder, drier setting for raw meat and fish, not for salad.",
      svg:
        drop(15, 26.5, 3.2) + drop(46, 25.5, 6.5) +
        '<rect x="8" y="40" width="48" height="8" rx="4"/>' +
        '<rect x="27" y="35.5" width="10" height="17" rx="2.5" fill="currentColor" stroke="none"/>'
    },
    {
      id: "fridge-zero-degree-zone",
      name: "0°C fresh / chill zone",
      quiz: "Extra-cold drawer for meat and fish",
      category: "fridge",
      aka: ["0°C", "chill zone", "fresh zone", "VitaFresh", "BioFresh", "Fresh 0 Zone", "chiller drawer", "meat drawer"],
      looksLike: ["0°c", "0 degrees", "zero degrees", "zero with a degree sign", "drawer with 0°c", "0c"],
      meaning:
        "A drawer kept colder than the rest of the fridge, just above freezing, for raw meat, fish and other food that goes off quickly. It keeps them fresh for longer than a normal shelf does.",
      action:
        "Use it for wrapped raw meat, fish and other very perishable food. Keep out food that doesn't like the cold (bananas, tomatoes, cucumbers, potatoes) and anything that would spoil if it froze a little: the temperature can dip just below 0°C.",
      tip: "Every brand has its own name for it: Bosch VitaFresh, Liebherr BioFresh, LG Fresh 0 Zone. Fridges without one still have a coldest spot, usually the bottom shelf just above the salad drawer.",
      svg:
        '<rect x="7" y="15" width="50" height="34" rx="6"/>' +
        '<text x="32" y="40" font-size="20">0°C</text>'
    },
    {
      id: "fridge-ok-indicator",
      name: "'OK' temperature indicator",
      quiz: "Fridge is cold enough",
      category: "fridge",
      aka: ["OK", "temperature indicator", "OK indicator", "coldest zone", "fridge thermometer", "OK sticker"],
      looksLike: ["ok", "the word ok", "ok in a box", "ok sticker", "ok window", "black box", "blank box"],
      meaning:
        "A little temperature gauge in the coldest part of some fridges (AEG, Smeg, Miele, Candy and others). 'OK' showing means that zone is at about 4°C or colder, which is right for fresh food. If it stays dark or blank, it's too warm. Refreshingly, OK means OK.",
      action:
        "If OK doesn't appear, turn the thermostat a step colder, keep the door shut for several hours (overnight is ideal) and check again. A new fridge, a big shop or a door left open can hide it for a while.",
      tip: "It sits next to a symbol marking the coldest zone, the best place for raw meat and fish. Fan (No Frost) fridges are about the same temperature everywhere, so many don't have one.",
      svg:
        '<rect x="9" y="17" width="46" height="30" rx="6"/>' +
        '<text x="32" y="40.5" font-size="20">OK</text>'
    },
    {
      id: "fridge-no-frost",
      name: "No Frost / Frost Free",
      quiz: "Defrosts itself automatically",
      category: "fridge",
      aka: ["no frost", "frost free", "total no frost", "NoFrost", "auto defrost", "low frost", "NO FROST"],
      looksLike: ["no frost", "snowflake with a line through it", "crossed out snowflake", "frost free badge", "snowflake with no", "snowflake crossed out"],
      meaning:
        "A fan blows cold, dry air around so ice doesn't build up on the walls, and the appliance defrosts its own cooling coil automatically now and then. 'Frost Free' usually means the freezer; 'Total No Frost' means fridge and freezer.",
      action:
        "You don't need to defrost it. If ice does build up, it's usually a door that isn't sealing or keeps getting left open, or a fault in the defrost system. 'Low Frost' is a different thing, despite the family resemblance: less ice, but you still defrost it by hand now and then.",
      tip: "No Frost freezers dry food out a bit faster, so wrap things well. Static freezers (no fan) are quieter and cheaper, but need defrosting by hand.",
      svg:
        snowflake(32, 23, 16, 3.25) +
        '<path d="M15.5 7L48.5 39" class="knock" stroke-width="8.5"/><path d="M15.5 7L48.5 39" stroke-width="3.25"/>' +
        '<text x="32" y="56.5" font-size="11">NO FROST</text>'
    },
    {
      id: "fridge-sabbath-mode",
      name: "Sabbath mode",
      category: "fridge",
      aka: ["Sabbath", "Sabbath mode", "Shabbat", "Shabbos mode", "SB"],
      looksLike: ["candle", "candle with a flame", "lit candle", "sb", "s6", "5b"],
      meaning:
        "A mode for observant Jewish households. The fridge turns off the interior light, beeps, alarms, display messages and extra functions, so opening the door on the Sabbath or holidays doesn't switch anything on. It keeps cooling as normal.",
      action:
        "Turned it on by accident (no light, no beeps, dark panel)? Turn it off by holding the same button or buttons that turn it on, often for several seconds (15 on some Bosch models). Most go back to normal by themselves after a few days: about 80 hours on Bosch, 96 on LG.",
      tip: "Fisher & Paykel shows a small candle. On LG the display shows 'SB', which can look like 'S6', '5b' or '56'. It's not an error code.",
      // Fisher & Paykel Sabbath candle, traced.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M32.2 7.3C32.2 7.3 36 12.2 37 13.8C38 15.5 38 16.6 38.2 17.4C38.5 18.3 38.5 18.5 38.2 19.1C38 19.8 37.6 20.8 37 21.4C36.5 22.1 35.9 22.6 35.1 23.1C34.4 23.5 33.3 23.9 32.5 24.1C31.8 24.2 31.3 24.2 30.6 24.1C29.8 24 28.9 23.9 28.2 23.4C27.6 23 26.8 22 26.4 21.4C25.9 20.9 25.9 20.9 25.8 19.9C25.6 19 25.6 16.7 25.8 15.7C25.9 14.6 25.9 14.9 26.9 13.6C28 12.2 32.2 7.3 32.2 7.3ZM30.1 15.2L30.4 15.2C30.4 15.2 32.7 19.1 33.1 20.2C33.6 21.4 33.3 21.9 33.1 22.4C33 23 32.6 23.3 32.4 23.6C32.1 23.8 32 23.9 31.6 23.9C31.3 23.8 30.7 23.9 30.2 23.4C29.8 23 29.1 22.2 28.9 21.4C28.6 20.5 28.7 19.1 28.9 18.1C29.2 17 30.1 15.2 30.1 15.2ZM35 26.6C36.3 26.4 36.5 26.8 36.5 26.8C36.5 26.8 37.3 23.5 37.5 28.4C37.6 33.2 37.5 51.3 37.5 56C37.4 60.8 37.2 56.7 37 56.9C36.7 57 37.6 57 36 57C34.4 57.1 28.9 57.1 27.4 57C25.8 56.8 26.9 60.4 26.8 56.2C26.6 52.1 26.8 36.4 26.8 32.4C26.7 28.3 26.4 32.1 26.4 31.8C26.3 31.4 26.2 30.9 26.4 30.4C26.5 30 26.6 29.5 26.9 29.1C27.3 28.6 27.4 28.2 28.8 27.8C30.1 27.3 33.8 26.7 35 26.6Z"/>'
    },

    // =====================================================================
    // RATING PLATE
    // =====================================================================
    {
      id: "fridge-climate-class",
      name: "Climate class (SN, N, ST, T)",
      quiz: "Room temperatures it's built for",
      category: "fridge",
      aka: ["climate class", "SN", "N", "ST", "T", "SN-T", "SN-ST", "ambient temperature", "rating plate"],
      looksLike: ["sn", "sn-t", "sn-st", "st", "class sn", "letters on the sticker", "letters on the rating plate"],
      meaning:
        "Printed on the rating plate (the sticker inside the fridge or on the back), it says what room temperatures the appliance is built to cope with: SN 10–32°C, N 16–32°C, ST 16–38°C, T 16–43°C. Combined codes like SN-T cover the whole span, 10–43°C.",
      action:
        "Check it before putting a fridge or freezer in a garage, shed or conservatory. Yes, a room can be too cold: a fridge-freezer with one thermostat can stop cooling the freezer, so the food defrosts. Too hot, and it runs flat out and can overheat.",
      tip: "Most UK models are SN or SN-ST. Some are sold specifically as suitable for garages and keep working in much colder rooms: look for that if yours lives in an outbuilding.",
      svg:
        '<rect x="6" y="13" width="52" height="38" rx="4"/>' +
        '<text x="32" y="26" font-size="9">CLASS</text>' +
        '<text x="32" y="44" font-size="17">SN-T</text>'
    }
  ]);
})();
