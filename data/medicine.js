/* Medicine & medical: symbols on medicine boxes, leaflets and
 * pharmacy labels, ISO 15223-1 medical-device symbols (plasters, tests, thermometers,
 * first-aid kits), and signs in public places.
 * Format and drawing rules are in data/README.md.
 *
 * Not repeated here because they already live elsewhere: the open book "read the
 * instructions" (power-read-manual), umbrella "keep dry" (packaging-keep-dry),
 * wine glass "fragile" (packaging-fragile), CE / UKCA marks and GHS hazard diamonds. */
(function () {
  // Prohibition sign: whatever is inside, a circle of radius 25 and a 45° bar on top.
  // A knock-out band under the bar keeps it readable where it crosses the drawing
  // (skipped with noGap, for simple line drawings that read better with the bar fused on).
  function noSign(inner, noGap) {
    var bar = 'x1="14.32" y1="14.32" x2="49.68" y2="49.68"';
    return inner +
      (noGap ? "" : '<line class="knock" ' + bar + ' stroke-width="7.5"/>') +
      '<line ' + bar + ' stroke-width="4"/>' +
      '<circle cx="32" cy="32" r="25"/>';
  }

  // ISO 7000-3082 / 2497 factory, traced from the standard and scaled onto the 64 grid.
  var FACTORY = "M7.8 38.21L15.12 25.51L20.77 35.29L26.42 25.51L32.06 35.29L37.71 25.51L43.38 35.34V9.6H56.2V54.4H7.8Z";

  function r2(n) { return Math.round(n * 100) / 100; }

  // Biohazard trefoil, following the standard construction (overall radius 26 units):
  // three overlapping circles, a smaller circle cut out of each to make the C-shaped arms,
  // a notch opening each arm's tip, thin slits joining the arms' hollows to the centre hole,
  // and the ring that shows inside each hollow. Centred on (cx, cy) at scale s.
  function biohazard(cx, cy, s) {
    var arms = [-90, 30, 150], fill = "", knock = "", ring = "", k, c, h, a0, a1;
    function pt(r, deg) {
      var t = (deg * Math.PI) / 180;
      return [r2(cx + r * Math.cos(t)), r2(cy + r * Math.sin(t))];
    }
    for (k = 0; k < 3; k++) {
      c = pt(11 * s, arms[k]);
      h = pt(15 * s, arms[k]);
      fill += '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + r2(15 * s) + '"/>';
      knock += '<circle cx="' + h[0] + '" cy="' + h[1] + '" r="' + r2(10.5 * s) + '"/>' +
        '<g transform="rotate(' + (arms[k] + 90) + " " + cx + " " + cy + ')">' +
        '<rect x="' + r2(cx - 2.2 * s) + '" y="' + r2(cy - 27.5 * s) + '" width="' + r2(4.4 * s) + '" height="' + r2(5 * s) + '"/>' +
        '<rect x="' + r2(cx - 0.8 * s) + '" y="' + r2(cy - 6 * s) + '" width="' + r2(1.6 * s) + '" height="' + r2(4 * s) + '"/></g>';
      // The ring (radius 11.75) is only visible inside the hollow, about ±39° either side of the arm.
      a0 = pt(11.75 * s, arms[k] - 39);
      a1 = pt(11.75 * s, arms[k] + 39);
      ring += "M" + a0[0] + " " + a0[1] + "A" + r2(11.75 * s) + " " + r2(11.75 * s) + " 0 0 1 " + a1[0] + " " + a1[1];
    }
    knock += '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2(3 * s) + '"/>';
    return '<g fill="currentColor" stroke="none">' + fill + "</g>" +
      '<g class="knock" stroke="none">' + knock + "</g>" +
      '<path d="' + ring + '" stroke-width="' + r2(3.5 * s) + '" stroke-linecap="butt"/>';
  }
  var BIOHAZARD = biohazard(32, 34.8, 1.02);

  WTF.add([
    // =====================================================================
    // ON MEDICINE BOXES, LEAFLETS AND PHARMACY LABELS
    // =====================================================================
    {
      id: "medicine-black-triangle",
      name: "Black triangle ▼ (additional monitoring)",
      quiz: "Extra side-effect monitoring",
      category: "medicine",
      aka: ["black triangle", "▼", "additional monitoring", "black triangle scheme", "subject to additional monitoring", "inverted triangle"],
      looksLike: ["upside down triangle", "black triangle", "triangle pointing down", "solid triangle", "inverted triangle", "black arrow pointing down"],
      meaning:
        "The medicine is being watched extra closely for side effects, usually because it's new to the market or it's a biological medicine (such as some vaccines). You'll find it in the patient leaflet, next to a line saying the medicine is 'subject to additional monitoring'.",
      action:
        "Take it as prescribed: it doesn't mean the medicine is unsafe or experimental. If you notice a side effect, even one you're not sure is linked, report it: in the UK through the Yellow Card scheme (website or app), elsewhere through your national medicines regulator. Talk to your doctor or pharmacist about anything worrying.",
      tip: "Medicines with a new active ingredient usually keep the triangle for about five years while real-world experience builds up. Great Britain and the EU keep separate lists, so the same medicine can have it in one place and not the other.",
      svg: '<polygon points="9,12 55,12 32,52" fill="currentColor" stroke-width="3"/>'
    },
    {
      id: "medicine-uk-legal-category",
      name: "P or POM in a box (UK medicine categories)",
      quiz: "UK pharmacy or prescription medicine",
      category: "medicine",
      aka: ["POM", "P", "prescription only medicine", "prescription-only", "pharmacy medicine", "pharmacy only", "GSL", "general sale list", "legal category"],
      looksLike: ["pom in a box", "p in a box", "letter p in a square", "pom", "box with p", "letters in a box"],
      meaning:
        "The medicine's UK legal category. POM means prescription-only medicine: you need a prescription from a doctor, nurse or other prescriber. P means pharmacy medicine: no prescription needed, but it's sold from behind the counter with a pharmacist overseeing the sale. General sale (GSL) medicines need no box and can be sold in supermarkets.",
      action:
        "Nothing to do: it just tells you where you can get it. For a P medicine, expect a few quick questions at the counter (who it's for, what else you take). That's the pharmacist checking it's right for you, not nosiness.",
      tip: "The same ingredient can sit in different categories depending on pack size and strength. That's why a 16-tablet pack of paracetamol can be on a supermarket shelf while bigger packs are pharmacy-only. US packs say 'Rx only' instead.",
      svg:
        '<rect x="8" y="7" width="48" height="23" rx="2"/><text x="32" y="24.8" font-size="17">POM</text>' +
        '<rect x="21" y="36" width="22" height="22" rx="2"/><text x="32" y="53.2" font-size="17">P</text>'
    },
    {
      id: "medicine-rx-only",
      name: "Rx only (US prescription symbol)",
      quiz: "Prescription needed (US)",
      category: "medicine",
      aka: ["Rx", "℞", "Rx only", "prescription only", "prescription", "federal law restricts this device"],
      looksLike: ["rx", "rx only", "r with an x", "r with a line through its leg", "crossed r", "r and x"],
      meaning:
        "℞ is the old symbol for a prescription, from the Latin 'recipe', meaning 'take'. 'Rx only' on US medicines and medical devices means they can legally be supplied only on a prescription or on the order of a licensed healthcare professional.",
      action:
        "Only use it if it's been prescribed for you. Bought something marked Rx only online? Check with a pharmacist before using it: it may well be a prescription-only medicine where you live too.",
      tip: "You'll mostly see it on products made for the US. UK packs use 'POM' in a box instead, though many pharmacies use ℞ in their signs and logos.",
      svg:
        '<path d="M20.5 42V8H30.5A8.5 8.5 0 0 1 30.5 25H20.5M28.5 25L43.5 43M34.4 41.4L43.6 33.8" stroke-width="4.5"/>' +
        '<text x="32" y="56" font-size="13">only</text>'
    },
    {
      id: "medicine-pregnancy-warning",
      name: "Pregnant woman crossed out (pregnancy warning)",
      quiz: "Can harm an unborn baby",
      category: "medicine",
      aka: ["pregnancy warning", "pictogramme grossesse", "femmes enceintes", "grossesse = interdit", "grossesse = danger", "valproate warning", "not for pregnant women"],
      looksLike: ["pregnant woman crossed out", "pregnant woman in a circle", "pregnant woman in a triangle", "pregnant lady crossed out", "red circle with pregnant woman", "baby bump crossed out", "pregnant silhouette"],
      meaning:
        "The medicine can harm an unborn baby. The crossed-out (red) circle is the strongest warning: don't use it during pregnancy, and some of these medicines also need reliable contraception, as the leaflet explains. French boxes have carried it since 2017, alongside a red triangle version ('+ grossesse = danger') meaning don't use it during pregnancy unless there's no alternative treatment.",
      action:
        "If you're pregnant, might be, or are planning a pregnancy, ask your doctor, midwife or pharmacist before taking it. If you already take it regularly, don't just stop: some conditions are riskier left untreated, so talk to your doctor first.",
      tip: "In the UK you'll see the crossed-out version on boxes of valproate, an epilepsy and bipolar medicine. Every leaflet also has a 'pregnancy and breast-feeding' section, symbol or not.",
      svg: noSign(
        '<g fill="currentColor" stroke="none"><circle cx="31" cy="15" r="4.9"/>' +
        '<path d="M34.6 11.6C38.6 12 39.4 16.6 37.8 21C37.2 18.6 36.2 17 34.6 16.2Z"/>' +
        '<path d="M29 19.6C27.6 21.6 26 23.2 25.4 25C23.4 26.2 22.8 28.6 24.4 30.4C21.6 32.4 18.2 35.6 17.6 40.6' +
        'C17.2 44.6 19.6 47.4 22.6 48.6C24.6 49.4 25.4 50.8 25.6 52.6H38.4C38.8 49.6 40.2 47.2 39.8 43.6' +
        'C39.4 40.6 36.6 38.6 37 35C37.4 31.4 38.2 27.6 36.6 24.6C35.6 22.8 34 21.8 33.6 19.6Z"/></g>'
      )
    },
    {
      id: "medicine-driving-warning",
      name: "Car in a triangle (may affect driving, France)",
      quiz: "May affect your driving",
      category: "medicine",
      aka: ["niveau 1", "niveau 2", "niveau 3", "soyez prudent", "soyez très prudent", "ne pas conduire", "driving warning", "pictogramme conduite"],
      looksLike: ["car in a triangle", "car in a yellow triangle", "car in an orange triangle", "car in a red triangle", "triangle with a car", "warning triangle with a car"],
      meaning:
        "The medicine can affect your driving (drowsiness, blurred vision, slower reactions). It's on French medicine boxes, and the colour gives the level. Yellow, level 1 ('Soyez prudent'): be careful and read the leaflet before driving. Orange, level 2 ('Soyez très prudent'): don't drive without a health professional's advice. Red, level 3 ('Attention, danger : ne pas conduire'): don't drive, and ask a doctor when it's safe to start again.",
      action:
        "Read the leaflet's 'driving and using machines' section and ask the pharmacist if you're unsure. Take extra care in the first few days, and with alcohol or other medicines that make you drowsy.",
      tip: "UK packs and pharmacy labels say it in words instead, such as 'may cause drowsiness'. In the UK it's illegal to drive if any medicine impairs your driving, even one taken exactly as prescribed.",
      svg:
        '<path d="M32 9.5L57.5 54H6.5Z" stroke-width="4"/>' +
        '<path fill="currentColor" stroke="none" d="M17.5 45V41.4C17.5 39.6 18.6 38.6 20.4 38.3L25.5 37.4L29.2 29.8H38.4L42.6 37.3L44 37.6C45.6 38 46.5 39.2 46.5 40.8V45Z"/>' +
        '<g class="knock" stroke="none"><polygon points="27.7,36.6 30.4,32 33.2,32 33.2,36.6"/>' +
        '<polygon points="34.8,36.6 34.8,32 37.5,32 40.3,36.6"/>' +
        '<circle cx="23.8" cy="45" r="4.6"/><circle cx="40.2" cy="45" r="4.6"/></g>' +
        '<circle cx="23.8" cy="45" r="3.4" fill="currentColor" stroke="none"/><circle cx="40.2" cy="45" r="3.4" fill="currentColor" stroke="none"/>'
    },
    {
      id: "medicine-pill-calendar",
      name: "Days and arrows on a pill pack",
      quiz: "Take one a day, in order",
      category: "medicine",
      aka: ["calendar pack", "contraceptive pill pack", "blister pack", "21-day pack", "28-day pack", "ED pack", "every day pack", "pill strip"],
      looksLike: ["arrows on a blister pack", "days of the week on pills", "pill pack with arrows", "mon tue wed on the foil", "blister with arrows", "pill calendar"],
      meaning:
        "Calendar packs, used mostly for the contraceptive pill, print the days of the week and arrows on the foil so you take the pills in order and can see at a glance whether you've taken today's. Some have 21 pills followed by a break; 'every day' (ED) packs have 28, the last few being dummy pills with no hormones, often a different colour.",
      action:
        "Start where the leaflet or your prescriber told you and follow the arrows, one pill a day. Missed a pill, or been sick? The rules depend on the type of pill and how late you are: check the 'missed pill' section of the leaflet or ask a pharmacist, who can also advise on emergency contraception.",
      tip: "Many packs come with a strip of day stickers so the days line up with the day you started. UK guidance lets many combined pills be taken with shorter breaks or none at all, so if your prescriber gave you a different pattern, follow that.",
      svg:
        '<rect x="6" y="15" width="52" height="34" rx="5"/>' +
        '<text x="14" y="27" font-size="10">M</text><text x="32" y="27" font-size="10">T</text><text x="50" y="27" font-size="10">W</text>' +
        '<g stroke-width="2.5"><circle cx="14" cy="37.5" r="4"/><circle cx="32" cy="37.5" r="4"/><circle cx="50" cy="37.5" r="4"/></g>' +
        '<path d="M21.9 35.2L24.1 37.5L21.9 39.8M39.9 35.2L42.1 37.5L39.9 39.8" stroke-width="2.25"/>'
    },

    // =====================================================================
    // MEDICAL DEVICE SYMBOLS (ISO 15223-1): plasters, tests, thermometers, kits
    // =====================================================================
    {
      id: "medicine-manufacturer",
      name: "Solid factory (manufacturer)",
      quiz: "Manufacturer",
      category: "medicine",
      aka: ["manufacturer", "made by", "legal manufacturer", "factory symbol", "ISO 7000-3082"],
      looksLike: ["factory", "black factory", "solid factory", "factory with chimney", "building with a zigzag roof", "sawtooth roof"],
      meaning:
        "The name and address next to the filled-in factory belong to the manufacturer: the company legally responsible for the product. You'll see it on medical devices such as plasters, thermometers, home tests, condoms and first-aid kits.",
      action:
        "Nothing to do. It's who to contact, or to name when you report a problem, if the product is faulty.",
      tip: "An empty, outline factory is a different symbol: date of manufacture, with a date next to it instead of an address. Products made outside Europe often also list an EU representative, marked 'EC REP'.",
      svg: '<path d="' + FACTORY + '" fill="currentColor" stroke-width="2"/>'
    },
    {
      id: "medicine-date-of-manufacture",
      name: "Outline factory (date of manufacture)",
      quiz: "Date of manufacture",
      category: "medicine",
      aka: ["date of manufacture", "manufactured on", "production date", "MFG", "ISO 7000-2497"],
      looksLike: ["empty factory", "outline factory", "factory with a date", "white factory", "hollow factory", "building with a zigzag roof"],
      meaning:
        "The date next to the outline (not filled-in) factory is when the product was made. It's usually written year first, like 2026-03 or 2026-03-14.",
      action:
        "Nothing to do: it isn't an expiry date. Look for the hourglass for the date to use it by.",
      tip: "Don't mix it up with the solid black factory, which marks the manufacturer's name and address.",
      svg: '<path d="' + FACTORY + '"/>'
    },
    {
      id: "medicine-use-by",
      name: "Hourglass (use-by date)",
      quiz: "Use-by date",
      category: "medicine",
      aka: ["use by", "use-by date", "expiry date", "EXP", "expiration date", "ISO 7000-2607"],
      looksLike: ["hourglass", "egg timer", "sand timer", "hourglass with a date", "two triangles", "timer"],
      meaning:
        "Use-by date: don't use the product after the date printed next to the hourglass. After it, a sterile item may no longer be sterile, and a test or device may not work properly. It's usually written year first, like 2027-06 or 2027-06-30.",
      action:
        "Check it before use, especially on anything sterile, tests and first-aid supplies, and replace anything past its date. Out-of-date medicines can go back to a pharmacy for safe disposal, not in the bin or down the toilet.",
      tip: "Medicines usually print 'EXP' and a date instead. On cosmetics the same hourglass means 'best before'. Worth checking your first-aid kit once a year: plasters, dressings and eyewash all go out of date.",
      svg:
        '<path d="M15 8H49M15 56H49"/>' +
        '<path d="M19.5 8C19.5 22 29 25.5 29 32C29 38.5 19.5 42 19.5 56M44.5 8C44.5 22 35 25.5 35 32C35 38.5 44.5 42 44.5 56"/>' +
        '<path fill="currentColor" stroke="none" d="M22.5 54C23 46.5 29 44 32 40C35 44 41 46.5 41.5 54Z"/>' +
        '<path fill="currentColor" stroke="none" d="M25.5 18H38.5C37.5 21.5 33.5 23.5 32 27C30.5 23.5 26.5 21.5 25.5 18Z"/>'
    },
    {
      id: "medicine-lot",
      name: "LOT (batch number)",
      quiz: "Batch number",
      category: "medicine",
      aka: ["LOT", "batch", "batch code", "batch number", "Lot no.", "BN", "REF", "catalogue number", "SN", "serial number"],
      looksLike: ["lot in a box", "lot", "ref in a box", "sn in a box", "letters in a rectangle", "box with lot"],
      meaning:
        "LOT in a box marks the batch code: which production batch the item came from. Its neighbours: REF in a box is the catalogue (product) number, and SN in a box is the serial number of that particular device.",
      action:
        "Nothing to do day to day. If there's a safety recall, it will list the batch numbers affected: compare them with the code next to LOT (or 'Batch' or 'BN' on medicines). Note it down if you report a problem too.",
      tip: "In the UK, medicine and medical device recalls are published by the MHRA. Keep a medicine's box until you've finished it: it has the batch number, expiry date and leaflet.",
      svg: '<rect x="6" y="17" width="52" height="30" rx="3"/><text x="32" y="39.2" font-size="20">LOT</text>'
    },
    {
      id: "medicine-do-not-reuse",
      name: "Crossed-out 2 (single use only)",
      quiz: "Single use only",
      category: "medicine",
      aka: ["do not re-use", "do not reuse", "single use", "single-use only", "use only once", "disposable", "ISO 7000-1051"],
      looksLike: ["crossed out 2", "2 in a circle with a line", "number 2 crossed out", "no 2", "2 with a slash", "circle with a 2"],
      meaning:
        "Single use: use it once, then throw it away. Common on needles, lancets, syringes, dressings, catheters, test kits and some masks.",
      action:
        "Don't wash, sterilise or use it again, even on the same person: it may not stay clean, sharp or safe. Put used needles and lancets in a sharps bin.",
      tip: "It doesn't mean 'two' of anything or 'use within 2 days': the 2 stands for 'a second time'. 'Single patient use' is a different label, meaning one person can use it more than once.",
      svg: noSign('<path d="M23.5 24.5A8.5 8.5 0 1 1 37.5 31L23 45H41" stroke-width="5"/>', true)
    },
    {
      id: "medicine-caution",
      name: "Triangle with exclamation mark (caution)",
      quiz: "Caution: read the warnings",
      category: "medicine",
      aka: ["caution", "warning", "attention", "see warnings", "ISO 7000-0434A"],
      looksLike: ["triangle with exclamation mark", "exclamation mark in a triangle", "warning triangle", "! in a triangle", "triangle with !", "hazard triangle"],
      meaning:
        "Caution: there are important warnings or precautions in the instructions that don't fit on the label, such as who shouldn't use it, or what could go wrong (or give a false result) if it's used incorrectly.",
      action:
        "Read the warnings section of the instructions before using it, especially the first time. It often sits next to the open-book 'read the instructions' symbol.",
      tip: "On a medical device it's a 'read the small print' prompt, not a sign the product is dangerous. The red diamond with a ! on chemicals and cleaning products is a different, hazard symbol.",
      svg:
        '<path d="M32 9L58 54H6Z"/><path d="M32 25V40" stroke-width="5"/>' +
        '<circle cx="32" cy="47.5" r="3" fill="currentColor" stroke="none"/>'
    },
    {
      id: "medicine-sterile",
      name: "STERILE (and STERILE EO, R or A)",
      quiz: "Germ-free until opened",
      category: "medicine",
      aka: ["sterile", "STERILE EO", "STERILE R", "STERILE A", "ethylene oxide", "irradiated", "gamma sterilised", "do not resterilise", "non sterile"],
      looksLike: ["sterile in a box", "sterile eo", "sterile r", "sterile crossed out", "word sterile", "sterile with letters"],
      meaning:
        "The contents were sterilised (made free of germs) and stay sterile until the pack is opened or damaged. The letters say how: EO is ethylene oxide gas, R is radiation, A means it was made and packed using aseptic (germ-free) techniques. The method doesn't change how you use it.",
      action:
        "Keep it sealed until the moment you need it, wash your hands, and don't touch the parts that go on a wound. STERILE crossed out in a circle means 'do not resterilise': once it's opened or used, you can't make it sterile again.",
      tip: "'NON STERILE' means it was never sterilised, so don't use it where a sterile item is needed, such as on an open wound, unless the instructions say it's fine.",
      svg:
        '<rect x="6" y="13" width="52" height="38" rx="3"/><path d="M6 32.5H58" stroke-width="2.5"/>' +
        '<text x="32" y="27.6" font-size="11">STERILE</text><text x="32" y="47.2" font-size="13">EO</text>'
    },
    {
      id: "medicine-package-damaged",
      name: "Crossed-out torn box (don't use if package is damaged)",
      quiz: "Don't use if packaging is damaged",
      category: "medicine",
      urgency: "soon",
      aka: ["do not use if package is damaged", "do not use if package damaged", "damaged packaging", "check packaging", "ISO 7000-2606"],
      looksLike: ["torn box crossed out", "broken box in a circle", "box with a crack crossed out", "crossed out parcel", "damaged box with a line through it", "cube crossed out"],
      meaning:
        "Don't use the product if its packaging is torn, punctured, open or wet. For sterile items the seal is what keeps the contents germ-free; for tests and devices, damage can mean contamination or a wrong result.",
      action:
        "Check the pack before you open it. If it's damaged, don't use it: get a new one, and if it was like that when you bought it, take it back. Newer versions sit next to the open book: check the instructions too.",
      tip: "Mostly on sterile dressings, syringes, needles, catheters and test kits, usually alongside the crossed-out 2 (single use) and STERILE boxes.",
      svg: noSign(
        '<g stroke-width="2.5"><path d="M17.03 25.27L32.09 16.29L46.66 28.18V38.56L32.09 47.47L17.03 34.94Z"/>' +
        '<path d="M17.03 25.27L19.53 27.78M21.76 29.48L20.72 32.76L25.42 32.63L25.98 36.53L32.08 36.55L46.66 28.18M32.09 36.55V47.47"/></g>'
      )
    },
    {
      id: "medicine-temperature-limit",
      name: "Thermometer with two lines (temperature limit)",
      quiz: "Storage temperature range",
      category: "medicine",
      aka: ["temperature limit", "store between", "storage temperature", "2°C–8°C", "2°C–30°C", "store in a fridge", "ISO 7000-0632"],
      looksLike: ["thermometer", "thermometer with lines", "thermometer with numbers", "thermometer with a diagonal line", "thermometer with 2 and 30", "temperature symbol"],
      meaning:
        "Store (and transport) it between the two temperatures printed at the ends of the lines: the lower one is the minimum, the upper one the maximum. Many home test kits say 2°C and 30°C; things that belong in the fridge say 2°C and 8°C.",
      action:
        "Keep it within that range: not in a hot car, on a sunny windowsill or anywhere it could freeze. If it says 2–8°C, keep it in the fridge, not the freezer. Some tests need to warm up to room temperature before use: the instructions say how long.",
      tip: "With only the top line it's a maximum (store below); with only the bottom line, a minimum. A sun symbol means keep away from sunlight, and an umbrella means keep dry.",
      svg:
        '<path d="M27.5 40.89V12.5A4.5 4.5 0 0 1 36.5 12.5V40.89A8 8 0 1 1 27.5 40.89Z" stroke-width="3"/>' +
        '<circle cx="32" cy="47.5" r="4.4" fill="currentColor" stroke="none"/><rect x="30.3" y="31" width="3.4" height="16" fill="currentColor" stroke="none"/>' +
        '<path d="M57 15H46L38 25M26 40L18 50H7" stroke-width="3"/>'
    },
    {
      id: "medicine-latex",
      name: "LATEX in a rounded triangle (contains natural rubber latex)",
      quiz: "Contains natural rubber",
      category: "medicine",
      aka: ["latex", "contains latex", "natural rubber latex", "latex free", "not made with natural rubber latex", "ISO 7000-2725"],
      looksLike: ["latex", "latex in a triangle", "upside down triangle with latex", "latex crossed out", "word latex in a shape", "rounded triangle"],
      meaning:
        "The product or its packaging contains natural rubber latex, which can cause allergic reactions, occasionally severe, in people allergic to it. Common in some gloves, plasters, bandages, condoms, catheters and blood pressure cuffs.",
      action:
        "If you, or the person you're helping, has a latex allergy, don't use it: pick a product that isn't made with natural rubber latex (nitrile or vinyl gloves, latex-free plasters and condoms). Always mention a latex allergy to healthcare staff.",
      tip: "A crossed-out version or 'latex free' means no natural rubber latex was used, though regulators prefer 'not made with natural rubber latex', as nobody can promise zero traces.",
      svg:
        '<path d="M17.33 8.29H46.68A10.99 10.99 0 0 1 56.2 24.78L41.52 50.2A10.99 10.99 0 0 1 22.48 50.2L7.81 24.78A10.99 10.99 0 0 1 17.33 8.29Z"/>' +
        '<text x="32" y="28" font-size="12">LATEX</text>'
    },
    {
      id: "medicine-medical-device",
      name: "MD in a box (medical device)",
      quiz: "Classed as a device, not a medicine",
      category: "medicine",
      aka: ["MD", "medical device", "medical device symbol"],
      looksLike: ["md in a box", "md", "letters md", "md in a rectangle", "box with md"],
      meaning:
        "The product is a medical device rather than a medicine. That covers more than you'd think: plasters, thermometers, blood pressure monitors, condoms, contact lens solution, many saline nasal sprays, and some creams, gels and sprays that work physically rather than chemically.",
      action:
        "Nothing special: use it as the instructions say. In the UK you can report a faulty or harmful medical device through the same Yellow Card scheme as medicines.",
      tip: "The EU's newer rules (from 2021) require device labels to say they're a medical device, which is why this box keeps popping up on more packs. Home test kits use 'IVD' instead.",
      svg: '<rect x="10" y="15" width="44" height="34" rx="3"/><text x="32" y="40" font-size="22">MD</text>'
    },
    {
      id: "medicine-test-count",
      name: "Σ with a number (number of tests in the box)",
      quiz: "Number of tests in the kit",
      category: "medicine",
      aka: ["sigma", "Σ", "contains sufficient for n tests", "number of tests", "tests per kit", "IVD", "in vitro diagnostic"],
      looksLike: ["sigma", "e with a pointy middle", "m on its side", "zigzag e", "Σ with a number", "funny e"],
      meaning:
        "Contains enough for that many tests: Σ 7 means there's enough in the box for seven tests. Σ is the Greek letter sigma, maths shorthand for 'sum'. You'll see it on lateral flow tests, pregnancy tests and other home test kits.",
      action:
        "Check it matches what you meant to buy. Use one full set of parts per test, as the instructions describe: don't share the liquid or swabs between tests to make the kit stretch.",
      tip: "You'll often see IVD in a box next to it: in vitro diagnostic, meaning a test done on a sample (blood, urine, saliva or a swab) outside the body.",
      svg:
        '<path d="M40.5 17V11H12.5L28.5 32L12.5 53H40.5V47" stroke-width="4.5"/>' +
        '<text x="49" y="53" font-size="16">n</text>'
    },
    {
      id: "medicine-test-lines",
      name: "C and T lines on a test",
      quiz: "Rapid test result",
      category: "medicine",
      aka: ["C line", "T line", "control line", "test line", "lateral flow test", "LFT", "rapid test", "pregnancy test result", "COVID test"],
      looksLike: ["c and t", "two lines", "one line", "faint line", "lines on a test", "c t window", "test strip with lines"],
      meaning:
        "C is the control line: it shows the test has worked. T is the test line: it shows whether what's being tested for (such as COVID, flu or the pregnancy hormone) was found. A line at C only: negative. Lines at C and T: positive, even if the T line is faint. No line at C: the test hasn't worked, whatever T shows.",
      action:
        "Read it at the time the instructions give (often 15–30 minutes, depending on the test); lines that turn up much later don't count. If it hasn't worked, do a new test. If a result is positive or worries you, follow the instructions' advice, or talk to a pharmacist, your GP or NHS 111.",
      tip: "Some tests put C and T the other way round or use symbols, and digital tests show words. For most lateral flow and pregnancy tests a faint T line still counts; if in doubt, test again as the instructions describe.",
      svg:
        '<rect x="6" y="15" width="52" height="34" rx="8"/><circle cx="16" cy="32" r="4.5" stroke-width="3"/>' +
        '<rect x="25" y="29" width="27" height="13" rx="2.5" stroke-width="2.5"/>' +
        '<text x="33.5" y="25.5" font-size="9">T</text><text x="43.5" y="25.5" font-size="9">C</text>' +
        '<path d="M33.5 32V39M43.5 32V39" stroke-width="3"/>'
    },
    {
      id: "medicine-type-bf",
      name: "Person in a box (type BF applied part)",
      quiz: "Electrically safe for skin contact",
      category: "medicine",
      aka: ["type BF", "BF applied part", "applied part", "IEC 60417-5333", "type B", "type CF", "body floating"],
      looksLike: ["person in a box", "man in a square", "stick man in a box", "little man in a box", "person with arms out in a square", "figure in a square"],
      meaning:
        "An electrical safety rating. The part of the device that touches your body (the 'applied part', such as a thermometer probe, blood pressure cuff or TENS pads) is electrically isolated and safe to be in contact with your skin. Common on thermometers, blood pressure monitors and TENS machines.",
      action:
        "Nothing to do: it's a safety rating, not a warning. Use the device as the instructions say, and stop using it if it's cracked or its leads are damaged.",
      tip: "A person without the box is type B (basic protection); a heart in a box is type CF, safe even for direct contact with the heart, seen on hospital equipment. Little paddles either side of the box mean it's protected against a defibrillator shock.",
      svg:
        '<rect x="8" y="8" width="48" height="48" rx="1"/>' +
        '<circle cx="32" cy="15.07" r="3.21" fill="currentColor" stroke="none"/>' +
        '<path fill="currentColor" stroke="none" d="M26.6 21.23L19.17 33.44L21.82 35.31L27.39 26.17V36.1L21.55 52.14H25.77L31.8 36.1H32.2L38.23 52.14H42.45L36.61 36.1V26.17L42.17 35.31L44.83 33.44L37.4 21.23C36.91 20.43 36.04 19.94 35.1 19.94H28.9C27.96 19.94 27.09 20.43 26.6 21.23Z"/>'
    },
    {
      id: "medicine-mri",
      name: "MR in a triangle, square or crossed circle (MRI safety)",
      quiz: "Magnetic scanner safety",
      category: "medicine",
      aka: ["MR conditional", "MR safe", "MR unsafe", "MRI safe", "MRI symbol", "ASTM F2503", "implant card"],
      looksLike: ["mr in a triangle", "mr in a square", "mr crossed out", "mr in a circle with a line", "triangle with mr", "mr"],
      meaning:
        "MRI scanner safety symbols, found on implant cards, implant leaflets and medical equipment. MR in a (green) square: MR safe, no known risk in a scanner. MR in a (yellow) triangle: MR conditional, safe only under specific conditions, such as scanner strength and settings, that staff need to check. MR crossed out in a (red) circle: MR unsafe, must never go into the scanner room.",
      action:
        "Before any MRI scan, tell the staff about every implant or device you have (pacemaker, joint replacement, stent, insulin pump, hearing implant and so on) and bring the implant card if you have one. Never take an MR unsafe item into the scanner room.",
      tip: "MR conditional isn't a 'no': many modern implants are MR conditional, and people with them are scanned all the time once the radiographer has checked the details.",
      svg: '<path d="M32 9L58 54H6Z" stroke-width="4"/><text x="32" y="49" font-size="16">MR</text>'
    },

    // =====================================================================
    // PHARMACY STICKERS (mostly US and Canada)
    // =====================================================================
    {
      id: "medicine-no-alcohol",
      name: "Crossed-out glass (don't drink alcohol)",
      quiz: "Don't drink alcohol",
      category: "medicine",
      aka: ["no alcohol", "avoid alcohol", "do not drink alcoholic beverages", "auxiliary label", "pharmacy sticker", "warning sticker"],
      looksLike: ["glass crossed out", "wine glass crossed out", "crossed out drink", "cocktail glass with a line", "beer crossed out", "no drinking sign"],
      meaning:
        "Don't drink alcohol while taking this medicine. Alcohol can make side effects such as drowsiness or dizziness stronger, stop a medicine working properly, or with some medicines make you very unwell. These picture stickers are mostly added to pill bottles by US and Canadian pharmacies.",
      action:
        "Avoid alcohol for as long as the label or your pharmacist says, which for some medicines includes a few days after you stop. Not sure how strict to be? Ask the pharmacist.",
      tip: "UK pharmacy labels use written warnings instead, such as 'Warning: Do not drink alcohol'. The leaflet covers it too, in the section on taking it with food, drink and alcohol.",
      svg: noSign(
        '<g stroke-width="3"><path d="M23.5 15H40.5C40.5 25.5 37 30.5 32 30.5C27 30.5 23.5 25.5 23.5 15Z"/>' +
        '<path d="M32 30.5V45M25.5 46H38.5"/></g>'
      )
    },
    {
      id: "medicine-drowsiness",
      name: "Closed eye or Zzz (may cause drowsiness)",
      quiz: "May make you sleepy",
      category: "medicine",
      aka: ["may cause drowsiness", "drowsiness", "may make you sleepy", "do not drive", "auxiliary label", "pharmacy sticker"],
      looksLike: ["closed eye", "sleepy eye", "zzz", "eye with zz", "sleeping face", "closed eye with lashes"],
      meaning:
        "The medicine may make you sleepy or less alert. The picture stickers are mostly used by US and Canadian pharmacies, often with a note that alcohol makes it worse.",
      action:
        "Until you know how it affects you, don't drive, cycle, use machinery or do anything that needs you fully alert, and avoid alcohol. If you feel drowsy, don't drive.",
      tip: "In the UK it's printed as words on the pharmacy label, such as 'Warning: This medicine may make you sleepy'. French boxes use a car in a coloured triangle.",
      svg:
        '<path d="M7 33Q23 47 39 33"/>' +
        '<path d="M11.5 39L8.5 43.5M18 42.3L16.5 47.5M25 43.3V48.8M32 42.3L33.5 47.5M38.5 39L41.5 43.5" stroke-width="3"/>' +
        '<text x="48" y="34" font-size="17">Z</text><text x="55" y="19" font-size="11">z</text>'
    },

    // =====================================================================
    // SIGNS IN PUBLIC PLACES
    // =====================================================================
    {
      id: "medicine-first-aid",
      name: "White cross on green (first aid)",
      quiz: "First aid",
      category: "medicine",
      aka: ["first aid", "first aid kit", "first aid station", "first aider", "green cross", "ISO 7010 E003"],
      looksLike: ["white cross on green", "green square with a cross", "plus sign", "cross in a square", "green cross", "medical cross"],
      meaning:
        "First aid: a first-aid kit, first-aid room or first aider is here. A white cross on a green square is the standard safety sign in the UK, the EU and many other countries.",
      action:
        "Head there, or ask staff for the first aider, for minor injuries. For anything serious, call 999 or 112 in the UK, 112 across Europe, or 911 in North America.",
      tip: "A red cross isn't a first-aid sign: it's a protected emblem of the Red Cross movement and medical services in war, so strictly it shouldn't be on first-aid kits. A green cross on its own, often lit up and flashing, usually means a pharmacy.",
      svg:
        '<rect x="8" y="8" width="48" height="48" rx="5" fill="currentColor" stroke="none"/>' +
        '<path class="knock" stroke="none" d="M26.5 15H37.5V26.5H49V37.5H37.5V49H26.5V37.5H15V26.5H26.5Z"/>'
    },
    {
      id: "medicine-aed",
      name: "Heart with a lightning bolt (defibrillator / AED)",
      quiz: "Defibrillator (AED)",
      category: "medicine",
      aka: ["AED", "defibrillator", "defib", "automated external defibrillator", "public access defibrillator", "PAD", "ISO 7010 E010"],
      looksLike: ["heart with lightning", "heart with a lightning bolt", "heart with a zigzag", "heart and a cross", "green sign with a heart", "heart with an arrow"],
      meaning:
        "An automated external defibrillator (AED, or defib) is here: a portable machine that gives an electric shock to get the heart of someone in cardiac arrest (collapsed, unresponsive and not breathing normally) beating normally again. Anyone can use one: no training needed.",
      action:
        "If someone collapses and isn't breathing normally, call 999 (112 in Europe, 911 in North America), start CPR and send someone for the AED. Switch it on and it talks you through every step. It only shocks if the heart rhythm needs it, so you can't make things worse by using it. Locked cabinet? The 999 call handler can give you the code.",
      tip: "In the UK the 999 call handler can also tell you where the nearest registered defibrillator is. They're in stations, shops, offices, sports clubs and even old phone boxes.",
      svg:
        '<rect x="8" y="8" width="48" height="48" rx="5" fill="currentColor" stroke="none"/>' +
        '<path class="knock" stroke="none" d="M20.95 23.37C16.25 23.42 12.04 28.1 13.31 34.27C14.27 38.99 19.28 45.11 28.02 51.03C36.76 45.08 41.77 38.96 42.73 34.26C44 28.07 39.82 23.42 35.09 23.37C32.67 23.32 29.64 24.62 28.02 27.7C26.4 24.61 23.37 23.32 20.95 23.37Z"/>' +
        '<polygon fill="currentColor" stroke="none" points="31.79,27.12 27.68,35.56 32.89,35.56 23.76,46.18 27.29,37.86 22.22,37.86"/>' +
        '<path class="knock" stroke="none" d="M44.24 11.89H48.21V15.86H52.17V19.83H48.21V23.8H44.24V19.83H40.26V15.86H44.24Z"/>'
    },
    {
      id: "medicine-biohazard",
      name: "Biohazard symbol (sharps and clinical waste)",
      category: "medicine",
      aka: ["biohazard", "biological hazard", "biological risk", "infectious", "clinical waste", "sharps bin", "ISO 7010 W009"],
      looksLike: ["three circles", "trefoil", "three crescents", "biohazard", "three hooks in a circle", "radioactive looking symbol", "sharps bin symbol"],
      meaning:
        "Biological hazard: it contains, or may contain, something that can spread infection, such as used needles, blood or body fluids, or lab samples. You'll see it on sharps bins (usually yellow), clinical waste bags, lab doors and sample bags.",
      action:
        "Don't open it, empty it or put it in household bins. If you use needles at home, ask your pharmacy, GP or council for a sharps bin and how to get it collected. Never pick up a discarded needle with bare hands: report it to the council. Pricked by a used needle? Let it bleed, wash it with soap and running water (don't scrub or suck it), cover it and get medical advice straight away (in the UK, A&E or NHS 111).",
      tip: "Not to be confused with the radiation symbol (three solid blades around a dot). Close a sharps bin once it's filled to the line; never push needles down to make room.",
      svg: BIOHAZARD
    }
  ]);
})();
