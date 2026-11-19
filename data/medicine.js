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
      tip: "Medicines with a new active ingredient usually keep the triangle for about five years while real-world experience builds up. Great Britain and the EU keep separate lists, so the same medicine can wear the triangle in one place and not the other.",
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
      tip: "You'll mostly see it on products made for the US. UK packs use 'POM' in a box instead, though plenty of pharmacies use ℞ in their signs and logos.",
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
      // Traced from the ANSM pregnancy pictogram.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.2 9.1C33.3 8.7 33.4 8.9 34.9 9.2C36.3 9.4 38.9 10 40.1 10.3C41.4 10.7 41.5 10.6 42.6 11.1C43.8 11.5 45.9 12.5 47.1 13.2C48.4 13.8 49 14.2 50 15.1C51.1 15.9 52.7 17.4 53.6 18.4C54.6 19.4 54.9 19.9 55.6 21.1C56.4 22.2 57.7 22.2 58.1 25.4C58.6 28.5 58.8 36.6 58.2 39.9C57.7 43.1 56.2 43.4 55 45C53.8 46.5 52.3 48.1 51 49.2C49.8 50.4 48.8 51 47.6 51.8C46.5 52.5 45.6 53 44 53.5C42.5 54.1 41.5 55 38.5 55.2C35.6 55.5 29.3 55.4 26.2 55C23.2 54.7 22 53.7 20.4 53C18.9 52.4 18.4 52.1 17.1 51.2C15.9 50.4 13.9 48.7 12.8 47.6C11.8 46.6 11.4 46.1 10.7 45C9.9 44 9.1 42.7 8.6 41.5C8 40.2 7.7 38.8 7.3 37.9C7 36.9 6.5 37.1 6.2 36C6 34.8 6 32.1 6 30.9C6.1 29.7 6.2 29.3 6.5 28.8C6.7 28.2 7.1 28.1 7.3 27.6C7.6 27 7.4 26.6 7.8 25.6C8.3 24.5 9.1 22.6 9.9 21.2C10.8 19.9 11.9 18.6 12.8 17.6C13.8 16.5 14.8 15.7 15.8 14.9C16.7 14.2 17.3 13.8 18.4 13.2C19.6 12.5 20.5 11.8 22.6 11.2C24.8 10.5 29.2 9.4 31.2 9.1ZM30.8 11.3C32.5 11.1 32.9 11.2 34.2 11.3C35.6 11.4 37.8 11.7 39 11.9C40.3 12.2 40.8 12.2 42 12.7C43.1 13.1 44.7 13.8 45.9 14.4C47 15.1 47.8 15.6 48.9 16.4C49.9 17.3 51.2 18.6 52.1 19.8C53.1 20.9 54.1 22.6 54.8 23.6C55.4 24.7 55.4 24.9 55.8 25.9C56.1 27 56.5 28.5 56.8 29.9C57 31.2 57.2 32.3 57 34C56.8 35.6 56.4 38 55.5 40C54.7 41.9 53 44.3 52 45.6C51.1 47 50.6 47.2 49.6 48C48.7 48.8 47.1 50 46.2 50.5C45.4 50.9 44.2 50.5 44.2 50.5C44.2 50.5 43 49 42.8 48.5C42.5 48 42.6 48.1 43 47.5C43.3 47 44.4 46.1 44.9 45.5C45.3 44.8 45.4 44.2 45.5 43.6C45.7 43.1 45.7 42.6 45.5 42C45.4 41.5 45.7 41.4 44.9 40.1C44 38.9 41.2 35.8 40.4 34.6C39.5 33.5 39.9 33.7 39.8 33C39.6 32.2 40.1 31.2 39.6 30.4C39.2 29.5 37.9 28.4 37 27.6C36 26.9 34.4 26.2 33.9 25.8C33.3 25.3 33.5 25.4 33.5 25.1C33.4 24.7 33.4 24 33.5 23.6C33.7 23.3 33.6 23.2 34.1 22.9C34.7 22.7 36.6 21.9 36.6 21.9C36.6 21.9 36.7 21 36.9 20.6C37 20.1 37.5 19.4 37.5 19.4C37.5 19.4 37 18.5 36.8 17.8C36.5 17 36.8 15.8 36.1 14.9C35.5 14.1 34.1 13.2 33.1 12.8C32.1 12.3 30.8 12.5 30.1 12.6C29.5 12.6 29.7 12.4 29.1 12.8C28.6 13.3 27.5 14.8 26.6 15.3C25.8 15.9 24.8 15.9 24.2 16.1C23.7 16.4 23.6 16.4 23.4 17.1C23.1 17.7 22.8 19.5 22.6 20.1C22.3 20.6 21.9 20.4 21.9 20.4L18.8 16.1C18.8 16.1 18.4 15.4 19.2 14.8C20.1 14.3 21.8 13.2 23.8 12.7C25.7 12.1 29 11.6 30.8 11.3ZM16.4 17.4C16.4 17.4 16.6 16.9 17.9 18.6C19.3 20.2 23.3 25.7 24.4 27.4C25.4 29 24.9 27.4 24.1 28.6C23.4 29.7 20.6 32.9 19.9 34.1C19.1 35.4 19.4 36 19.4 36C19.4 36 21.6 37.7 23.1 38.2C24.6 38.8 27.4 39 28.4 39.4C29.5 39.7 29.3 40 29.4 40.5C29.6 41 29.6 41.6 29.4 42.4C29.1 43.1 28.2 44 27.9 44.8C27.5 45.5 27.2 46.3 27.1 47C27.1 47.8 27.1 48.3 27.4 49.1C27.8 50 29.1 51.7 29.4 52.4C29.8 53 29.5 52.9 29.4 53.1C29.4 53.4 28.9 53.8 28.9 53.8C28.9 53.8 28 53.8 27.1 53.5C26.1 53.3 24.6 52.9 23.1 52.2C21.6 51.6 19.6 50.8 18.1 49.6C16.5 48.5 14.6 46.7 13.6 45.5C12.5 44.4 12.2 43.9 11.6 42.9C11 41.9 10.4 41 9.9 39.5C9.5 38.1 8.9 35.7 8.8 34.2C8.6 32.8 8.7 32.1 8.8 31.1C8.8 30 8.9 29.1 9.2 27.9C9.6 26.8 10.1 25.4 10.7 24.1C11.2 22.9 12 21.6 12.7 20.6C13.3 19.7 14.2 18.8 14.8 18.2C15.5 17.7 16.4 17.4 16.4 17.4ZM27.9 20.8L28.6 20.8C28.6 20.8 28.9 21.2 29.1 21.4C29.2 21.7 29.3 22.1 29.2 22.4C29.2 22.6 28.8 23.1 28.8 23.1L27.9 22.6L27.9 20.8ZM26.6 33C27 32.8 27.4 33 27.4 33C27.4 33 28.1 33.9 28.4 34.4C28.6 34.8 28.9 35.5 28.9 35.9C29 36.2 28.9 36.8 28.9 36.8C28.9 36.8 28 36.8 27.4 36.5C26.7 36.1 25.1 34.9 25.1 34.9C25.1 34.9 24.9 34.5 25.1 34.1C25.4 33.8 26.3 33.2 26.6 33Z"/>'
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
      // French driving pictogram: side-view car in the triangle, NIVEAU band underneath.
      svg: '<path d="M32 6L56.5 44H7.5Z" stroke-width="3.6"/><g transform="matrix(0.82 0 0 0.82 5.76 -1.2)"><path fill="currentColor" stroke="none" d="M17.5 45V41.4C17.5 39.6 18.6 38.6 20.4 38.3L25.5 37.4L29.2 29.8H38.4L42.6 37.3L44 37.6C45.6 38 46.5 39.2 46.5 40.8V45Z"/><g class="knock" stroke-width="0"><polygon points="27.7,36.6 30.4,32 33.2,32 33.2,36.6"/><polygon points="34.8,36.6 34.8,32 37.5,32 40.3,36.6"/><circle cx="23.8" cy="45" r="4.6"/><circle cx="40.2" cy="45" r="4.6"/></g><circle cx="23.8" cy="45" r="3.4" fill="currentColor" stroke="none"/><circle cx="40.2" cy="45" r="3.4" fill="currentColor" stroke="none"/></g><rect x="7.5" y="47.5" width="49" height="10.5" fill="currentColor" stroke="none"/><text class="knock" stroke-width="0" x="32" y="55.5" font-size="7.4">NIVEAU 1</text>'
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
      tip: "Spot the difference: an empty, outline factory is a different symbol, meaning date of manufacture, with a date next to it instead of an address. Products made outside Europe often also list an EU representative, marked 'EC REP'.",
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
      tip: "Don't mix it up with the solid black factory, which marks the manufacturer's name and address. Same factory, different job, depending entirely on the colouring-in.",
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
      // Traced from ISO 7000-2607.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.6 7L47.5 7.2C47.5 7.2 47.5 20 47.5 22.9C47.4 25.7 47.4 23.7 47.1 24.1C46.9 24.6 47.5 24.7 45.9 25.8C44.2 26.8 38.8 29.6 37.2 30.6C35.7 31.7 36.4 31.9 36.4 31.9C36.4 31.9 35.4 32 37 33C38.5 34.1 44.2 37 45.9 38.1C47.5 39.3 46.9 39.3 47.1 39.8C47.4 40.2 47.4 38.2 47.5 41C47.5 43.9 47.4 56.9 47.4 56.9L16.4 56.8C16.4 56.8 16.4 43.9 16.4 41C16.5 38.2 16.5 40.2 16.8 39.8C17 39.3 16.4 39.2 18.1 38.1C19.7 37.1 25.1 34.3 26.6 33.2C28.2 32.2 27.6 32 27.6 32C27.6 32 28.5 31.9 26.9 30.9C25.4 29.8 19.8 26.9 18.1 25.8C16.4 24.6 17 24.6 16.8 24.1C16.5 23.7 16.5 25.7 16.4 22.9C16.4 20 16.6 7 16.6 7ZM18.1 8.2C22.8 8.2 46.2 8.3 46.2 8.3C46.2 8.3 46.2 20.9 46 23.6C45.8 26.4 46.7 23.8 45 24.9C43.4 25.9 37.7 28.9 36 30.1C34.4 31.2 35.2 31.3 35.1 31.9C35 32.4 35.2 32.8 35.5 33.1C35.7 33.5 34.8 33.1 36.5 34.1C38.1 35.2 43.8 38.3 45.5 39.4C47.1 40.4 46 40 46.1 40.5C46.3 41 46.1 42.4 46.1 42.4L17.6 42.2C17.6 42.2 17.6 40.9 17.8 40.5C17.9 40 16.8 40.4 18.4 39.4C20.1 38.3 25.8 35.2 27.4 34.1C29.1 33.1 28.2 33.5 28.4 33.1C28.7 32.8 28.7 32.4 28.8 32C28.8 31.7 28.7 31.3 28.6 30.9C28.4 30.6 29.5 31.1 27.9 30.1C26.2 29 20.5 26 18.9 24.9C17.2 23.8 17.9 26.2 17.8 23.4C17.6 20.7 17.6 8.3 17.6 8.3C17.6 8.3 13.3 8.2 18.1 8.2Z"/>'
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
      tip: "Whatever it looks like, it doesn't mean 'two' of anything or 'use within 2 days': the 2 stands for 'a second time'. 'Single patient use' is a different label, meaning one person can use it more than once.",
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
      // Traced from ISO 7000-2501.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M4.5 22.6C13.8 22.6 60 22.6 60 22.6L60 41.2L4.2 41.4L4.2 22.6C4.2 22.6 -4.9 22.6 4.5 22.6ZM5 23.4L43.8 23.4L43.9 40.4L5 40.5L5 23.4ZM45 23.4L59 23.4L59 40.5L44.9 40.5L45 23.4ZM7.8 28.1C8.4 28.1 9.2 28.1 9.8 28.4C10.3 28.6 11.2 29.8 11.2 29.8L10.9 30.4C10.9 30.4 10.2 30.5 9.8 30.4C9.5 30.2 9.2 29.5 8.8 29.4C8.5 29.2 7.8 29.4 7.5 29.4C7.2 29.5 7 29.9 7 29.9L7.5 30.9C7.5 30.9 9.6 31.4 10.2 31.6C10.9 31.9 11.3 32.6 11.3 32.6L11.2 34.6C11.2 34.6 10.3 35.5 9.7 35.6C9 35.8 7.8 35.8 7.2 35.5C6.5 35.3 5.9 34.5 5.7 34.1C5.4 33.8 5.7 33.5 5.7 33.5C5.7 33.5 6.5 33.3 6.8 33.5C7.2 33.6 7.5 34.4 8 34.5C8.3 34.7 8.9 34.6 9.2 34.5C9.6 34.4 10.1 34 10.1 34L9.8 33C9.8 33 7.7 32.6 7 32.2C6.4 31.9 5.8 31.1 5.8 31.1C5.8 31.1 5.8 29.7 6 29.2C6.1 28.8 6.3 28.7 6.7 28.6C7 28.4 7.3 28.2 7.8 28.1ZM12.3 28.4L17.1 28.4C17.1 28.4 17.4 28.4 17.4 28.6C17.4 28.8 17.1 29.6 17.1 29.6L15.3 29.9L15.2 35.5L14.2 35.5L14.2 29.9L12.3 29.6L12.3 28.4ZM18.4 28.4L22.9 28.4L22.9 29.6C22.9 29.6 20.4 29.5 19.9 29.6C19.3 29.6 19.6 29.9 19.6 29.9L19.8 31.1L22.8 31.4L22.6 32.4L19.8 32.4C19.8 32.4 19.6 33.7 19.6 34C19.6 34.4 19.8 34.4 19.8 34.4L23.1 34.4L23.1 35.5L18.4 35.5L18.4 28.4ZM24.1 28.4C24.1 28.4 26.8 28.2 27.6 28.4C28.3 28.5 28.8 28.9 28.8 28.9C28.8 28.9 29.2 30.5 29.1 31.1C29.1 31.6 28.4 32.2 28.4 32.2C28.4 32.2 28.9 32.7 29.1 33.2C29.2 33.8 29.1 35.5 29.1 35.5L27.9 35.4C27.9 35.4 27.9 33.8 27.8 33.4C27.6 32.9 27.2 32.8 26.9 32.6C26.5 32.5 25.4 32.6 25.4 32.6L25.2 35.4L24.1 35.5L24.1 28.4ZM25.4 29.6L27.6 29.9L27.8 31.1L25.4 31.4L25.4 29.6ZM32.5 28.4L33.6 28.4L33.8 34.1L37 34.4L37 35.5L32.4 35.5L32.5 28.4ZM38.5 28.4L43 28.4L43 29.6C43 29.6 40.5 29.5 40 29.6C39.4 29.6 39.6 29.9 39.6 29.9L39.9 31.1C39.9 31.1 42 31.1 42.5 31.1C43 31.2 42.9 31.4 42.9 31.4L42.6 32.4L40 32.4L39.6 34C39.6 34 39.4 34.3 40 34.4C40.5 34.4 43.1 34.4 43.1 34.4L43 35.5L38.5 35.5L38.5 28.4ZM54.4 28.4C54.9 28.3 56 28.4 56.5 28.6C57.1 28.8 57.2 29.1 57.5 29.6C57.7 30 58 30.5 58 31.4C58.1 32.2 57.8 33.8 57.5 34.5C57.3 35.2 57 35.3 56.6 35.5C56.3 35.8 56.1 36 55.5 36C55 35.9 53.8 35.7 53.2 35.5C52.8 35.2 52.8 35.1 52.5 34.6C52.3 34.2 52 33.8 52 33C51.9 32.1 52.2 30.4 52.5 29.8C52.7 29.1 53 29 53.4 28.8C53.7 28.5 53.8 28.4 54.4 28.4ZM54.5 29.6L56 29.9C56 29.9 56.7 31.2 56.8 31.9C56.8 32.5 56.5 33.6 56.2 34C56 34.5 55.6 34.6 55.2 34.6C54.9 34.7 54.4 34.6 54 34.4C53.7 34.1 53.5 33.6 53.4 33C53.2 32.5 53.2 31.4 53.5 30.9C53.7 30.3 54.5 29.6 54.5 29.6ZM46.4 28.6L50.9 28.6L50.6 29.8L47.6 29.8C47.6 29.8 47.5 29.8 47.5 30.1C47.5 30.3 47.6 31.4 47.6 31.4L50.6 31.6L50.5 32.5L47.8 32.5L47.5 34.2C47.5 34.2 47.2 34.5 47.8 34.5C48.3 34.6 51 34.5 51 34.5L50.9 35.8L46.2 35.6L46.4 28.6Z"/><polygon fill="currentColor" stroke="none" points="30.1,28.3 30.1,35.6 31.5,35.6 31.5,28.3"/>'
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
      tip: "With only the top line it's a maximum (store below); with only the bottom line, a minimum. A sun symbol means keep away from sunlight, and an umbrella means keep dry, not that rain is forecast.",
      // Traced from ISO 7000-0632.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 6.8C32.6 6.7 33.3 6.9 33.9 7.3C34.4 7.8 34.9 6.5 35.1 9.4C35.4 12.4 35.2 25.1 35.2 25.1L43.9 12.1C43.9 12.1 48.9 11.9 50 11.9C51 12 50.4 12.3 50.4 12.3L50 13.9L44.8 14.2C44.8 14.2 36.8 23.7 35.1 29.1C33.5 34.4 34.8 43.2 35.1 46.5C35.5 49.7 36.6 47.6 37 48.5C37.5 49.3 37.9 50.8 38 51.6C38.1 52.5 37.9 52.8 37.6 53.4C37.4 53.9 37 54.6 36.6 55.1C36.3 55.6 36 56 35.4 56.4C34.7 56.7 33.4 57.2 32.6 57.4C31.9 57.5 31.4 57.4 30.6 57.1C29.9 56.9 28.9 56.4 28.4 56C27.8 55.5 27.5 55.1 27.1 54.5C26.8 54 26.4 53.3 26.4 52.5C26.3 51.6 26.5 50 26.8 49.2C27 48.5 27.4 48.1 27.8 47.6C28.1 47.2 29.1 46.5 29.1 46.5L29.1 38.4L20.1 52C20.1 52 15.1 52.2 14.1 52.1C13 52.1 13.7 51.8 13.7 51.8L13.9 50.1L19.1 49.9C19.1 49.9 27.5 41.2 29.1 34.5C30.8 27.7 29 13.7 29.1 9.2C29.3 4.8 29.7 8 30.1 7.5C30.6 7.1 31.3 6.8 31.9 6.8ZM31.8 9.1C31.8 9.1 32.3 9 32.5 9.1C32.8 9.1 32.9 6.2 33 9.4C33 12.7 33.2 24.8 33 28.4C32.7 32 31.2 31.1 31.2 31.1C31.2 31.1 31.2 13.3 31.2 9.7C31.3 6 31.8 9.1 31.8 9.1Z"/>'
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
        '<path class="knock" stroke-width="0" d="M26.5 15H37.5V26.5H49V37.5H37.5V49H26.5V37.5H15V26.5H26.5Z"/>'
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
      // Traced from ISO 7010 E010.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.2 6.2L58 6.2L58 58L6.2 58L6.2 6.2ZM45.5 10.2L49.6 10.2L49.8 14.3C49.8 14.3 53 14.4 53.8 14.4C54.5 14.5 54 14.1 54 14.8C54.1 15.4 54 18.6 54 18.6L49.9 18.9L49.5 23.1L45.5 23.1C45.5 23.1 45.4 19.9 45.4 19.1C45.3 18.4 45.8 18.9 45 18.9C44.3 18.8 41 18.8 41 18.8L41 14.6L45.1 14.4L45.5 10.2ZM19.4 22.6C20.1 22.6 20.8 22.6 21.6 22.8C22.5 22.9 23.7 23.4 24.4 23.8C25 24.1 25.2 24.2 25.8 24.8C26.3 25.3 27.8 27.1 27.8 27.1C27.8 27.1 29.2 25.2 29.9 24.6C30.7 23.9 31.4 23.6 32.1 23.2C32.9 22.9 33.6 22.7 34.5 22.6C35.5 22.6 36.8 22.8 37.6 22.9C38.5 23.1 39 23.4 39.6 23.9C40.3 24.3 41 24.7 41.6 25.6C42.3 26.4 43.2 28.2 43.6 29.2C44 30.3 44 31.1 44 31.9C44.1 32.9 44 33.6 43.8 34.6C43.5 35.6 43 37 42.5 38C42.1 38.9 42.2 39 41 40.5C39.8 41.9 37.5 44.8 35.4 46.9C33.2 48.9 27.9 52.6 27.9 52.6C27.9 52.6 25.4 51.2 23.6 49.9C21.9 48.5 19.3 46.2 17.6 44.5C16 42.7 14.7 41 13.8 39.5C12.8 37.9 12.2 36.7 11.8 35.2C11.5 33.8 11.4 31.9 11.6 30.6C11.7 29.2 12.1 28.1 12.8 27.1C13.4 26 14.5 24.9 15.2 24.2C16 23.6 16.6 23.4 17.2 23.1C17.9 22.9 18.6 22.7 19.4 22.6ZM31.1 27.8L27.4 35.9L32.6 36.1L23.6 46.5L26.9 38.5L21.9 38.1L31.1 27.8Z"/>'
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
      // Traced from the biohazard symbol.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.4 7.5C29.9 7.4 29.9 7.7 29.9 7.7L29.8 8.1C29.8 8.1 27.3 8.7 26.1 9.4C25 10.2 23.8 11.4 22.9 12.4C22.1 13.5 21.6 14.7 21.2 15.9C20.9 17.2 20.8 18.7 20.9 19.9C20.9 21.1 21.2 22.1 21.6 23.1C22.1 24.2 22.6 25.2 23.4 26.1C24.3 27.1 25.8 28.2 26.8 28.9C27.7 29.5 28.2 29.5 28.9 29.8C29.7 30 31.4 30.1 31.4 30.1L31.4 31.6C31.4 31.6 29.8 32.6 29.4 33C28.9 33.5 28.9 33.8 28.9 34.2C28.8 34.7 28.9 36 28.9 36L27.9 36.6C27.9 36.6 26 34.5 24.9 33.8C23.7 33 22.4 32.3 21.1 31.9C19.7 31.6 18 31.5 16.6 31.8C15.1 32 13.6 32.5 12.4 33.2C11.3 34 10.2 35 9.4 36C8.6 37 8.1 38.2 7.7 39.2C7.2 40.3 7 41.2 7 42.4C7 43.5 7.7 46.1 7.7 46.1L7.2 46.5C7.2 46.5 6.5 44.7 6.3 43.6C6.1 42.6 6 41.5 6 40.1C6.1 38.8 6.5 37 6.8 35.8C7.2 34.5 7.5 33.8 8.2 32.6C9 31.5 10 30 11.3 28.9C12.7 27.7 16.4 25.8 16.4 25.8C16.4 25.8 16.2 22.7 16.2 21.6C16.3 20.4 16.4 20 16.8 18.9C17.1 17.9 17.8 16.3 18.2 15.3C18.8 14.4 18.8 14.1 19.8 13.2C20.7 12.2 22.8 10.4 23.9 9.6C25.1 8.8 25.5 8.7 26.4 8.3C27.4 8 28.8 7.7 29.4 7.5ZM34.4 7.5C34.4 7.5 38.2 8.6 39.5 9.2C40.8 9.7 41.3 10.3 42.1 10.9C43 11.6 43.7 12.4 44.4 13.2C45 13.9 45.4 14.4 45.9 15.3C46.4 16.3 47 17.9 47.4 18.9C47.7 20 47.8 20.5 47.9 21.6C47.9 22.8 47.8 25.8 47.8 25.8C47.8 25.8 51.4 27.7 52.8 28.9C54.1 30 55.1 31.4 55.9 32.6C56.6 33.9 57.1 35.2 57.5 36.5C57.8 37.7 58 39 58 40.1C58.1 41.3 58 42.6 57.8 43.6C57.5 44.7 56.9 46.5 56.9 46.5L56.5 46.1C56.5 46.1 57.1 43.7 57 42.4C57 41 56.5 39.4 56 38.2C55.6 37.1 55.2 36.4 54.2 35.5C53.3 34.5 51.8 33.3 50.5 32.6C49.3 32 48 31.8 46.8 31.6C45.5 31.5 44.3 31.6 43 31.9C41.8 32.3 40.4 33 39.2 33.8C38.1 34.5 36.5 36.6 36.5 36.6L35.1 36C35.1 36 35.3 34.5 35.1 33.9C35 33.2 34.4 32.6 34 32.2C33.5 31.9 32.6 31.6 32.6 31.6L32.6 30.2C32.6 30.2 36 29.5 37.4 28.9C38.7 28.2 39.9 26.9 40.6 26.1C41.4 25.3 41.7 24.8 42 24.1C42.4 23.4 42.6 22.9 42.9 21.9C43.1 21 43.3 19.3 43.2 18.1C43.2 17 42.9 16.1 42.5 15.1C42.1 14 41.5 12.9 40.9 12.1C40.2 11.2 39.2 10.4 38.5 9.8C37.8 9.3 37.3 9.1 36.6 8.8C36 8.4 34.4 8.1 34.4 8.1L34.4 7.5ZM30.4 20.6C31.6 20.5 32.7 20.6 33.6 20.6C34.6 20.7 35.2 20.9 36 21.1C36.9 21.4 38.2 21.9 39 22.4C39.8 22.8 40.9 23.8 40.9 23.8L38.8 26.4C38.8 26.4 36.7 25.2 35.8 24.9C34.8 24.5 34.2 24.3 33.1 24.2C32.1 24.2 30.6 24.2 29.2 24.6C27.9 24.9 25.4 26.4 25.4 26.4C25.4 26.4 24.1 25.1 23.8 24.6C23.4 24.2 23.4 23.6 23.4 23.6C23.4 23.6 25.7 22 26.9 21.6C28 21.1 29.3 20.8 30.4 20.6ZM17.9 32.9L21.4 33.4C21.4 33.4 21.4 36.2 21.6 37.4C21.9 38.5 22.3 39.5 22.9 40.5C23.6 41.4 24.6 42.5 25.4 43.2C26.3 44 28.1 44.8 28.1 44.8C28.1 44.8 27.9 45.9 27.6 46.5C27.4 47 26.8 48 26.8 48C26.8 48 25.9 47.9 25.2 47.5C24.6 47 23.5 46.4 22.6 45.5C21.6 44.7 20.5 43.5 19.8 42.1C19 40.8 18.2 38.8 17.9 37.2C17.6 35.7 17.9 32.9 17.9 32.9ZM44.5 32.9C45.1 32.8 46.1 32.9 46.1 32.9C46.1 32.9 46.2 32.5 46.2 33.1C46.3 33.8 46.4 35.4 46.2 36.6C46.1 37.9 45.7 39.2 45.2 40.4C44.8 41.5 44.2 42.5 43.5 43.4C42.9 44.2 42.5 44.9 41.5 45.6C40.4 46.4 37.4 48 37.4 48C37.4 48 36.7 47 36.5 46.5C36.2 45.9 36 44.8 36 44.8C36 44.8 37.9 43.9 38.6 43.2C39.4 42.6 40.1 42.1 40.8 41C41.4 40 42.2 38.1 42.5 36.9C42.9 35.6 42.6 33.4 42.6 33.4C42.6 33.4 44 32.9 44.5 32.9ZM29.4 37C29.4 37 30.8 37.9 31.4 38C31.9 38.2 32.2 38.2 32.8 38C33.3 37.9 34.5 37 34.5 37L35.8 37.6C35.8 37.6 34.8 40.4 34.6 41.8C34.5 43.1 34.7 44.6 35 46C35.4 47.3 36.1 48.5 37 49.6C37.9 50.8 39.2 51.9 40.5 52.6C41.7 53.4 43.2 53.8 44.5 54C45.7 54.2 46.7 54.1 47.9 53.9C49 53.6 50.5 53.1 51.5 52.5C52.6 51.9 54.1 50.2 54.1 50.2L54.5 50.5C54.5 50.5 53.5 51.9 52.8 52.5C52 53.2 50.8 54.1 49.8 54.6C48.7 55.2 47.6 55.6 46.5 56C45.5 56.3 44.3 56.4 43.4 56.5C42.4 56.6 41.9 56.7 40.9 56.5C39.9 56.4 38.4 56.2 37.4 55.9C36.3 55.5 35.4 55.1 34.5 54.6C33.7 54.2 32.2 53 32.2 53C32.2 53 29.4 54.9 27.9 55.5C26.4 56 24.8 56.4 23.2 56.5C21.7 56.7 20.2 56.6 18.8 56.2C17.3 55.9 15.6 55.3 14.3 54.6C13.1 54 12.1 53.2 11.3 52.5C10.6 51.9 10 51.2 9.8 50.9C9.5 50.5 9.8 50.2 9.8 50.2C9.8 50.2 11.4 51.8 12.6 52.5C13.8 53.1 15.8 53.7 16.9 54C18.1 54.2 18.8 54 19.6 54C20.5 53.9 21 53.8 21.9 53.5C22.7 53.1 23.9 52.5 24.8 52C25.6 51.4 26.1 50.9 26.6 50.2C27.2 49.6 27.8 48.8 28.2 48C28.7 47.1 29.1 46.2 29.2 45.1C29.4 44.1 29.6 43 29.4 41.8C29.3 40.5 28.4 37.6 28.4 37.6L29.4 37Z"/>'
    }
  ]);
})();
