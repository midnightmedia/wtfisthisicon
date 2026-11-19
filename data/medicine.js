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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.8 9C30.2 9.3 28.6 9.7 27.1 10.2C25.7 10.5 24.3 10.6 23 11.2C22.2 11.5 21.5 12 20.8 12.3C20.1 12.6 19.4 12.8 18.8 13.1C18.3 13.4 17.9 13.8 17.4 14.1C16.8 14.4 16.2 14.7 15.7 15.1C15.3 15.4 15.1 15.9 14.7 16.2C14.4 16.5 13.9 16.6 13.6 16.9C13.2 17.3 12.9 17.8 12.5 18.2C12 18.8 11.3 19.4 10.8 20.1C10.2 20.9 9.8 21.9 9.3 22.8C8.9 23.5 8.5 24.1 8.2 24.9C8 25.5 7.8 26.2 7.6 26.8C7.3 27.5 6.9 28.1 6.7 28.8C6.1 30.2 6 31.7 6 33.2C6 35.4 7 36.6 7.7 38.5C8 39.4 8.2 40.2 8.6 41C8.8 41.6 9.2 42.1 9.5 42.7C9.9 43.5 10.3 44.4 10.9 45.1C11.7 46.1 12.7 47 13.6 47.9C13.8 48.2 14 48.5 14.3 48.8C14.9 49.3 15.6 49.8 16.3 50.2C16.7 50.5 17 50.8 17.3 51.1C17.8 51.4 18.4 51.6 18.9 51.9C19.4 52.2 19.9 52.6 20.5 52.8C21.5 53.3 22.5 53.5 23.5 53.8C24.3 54.1 25.1 54.6 25.9 54.8C28.4 55.2 30.9 55.1 33.5 55.1C35.1 55.1 37 55.2 38.5 55C39.6 54.8 40.6 54.3 41.6 54C42.7 53.7 43.8 53.4 44.8 52.9C45.3 52.7 45.7 52.3 46.2 52.1C46.7 51.8 47.3 51.6 47.7 51.4C50.3 49.8 52.8 47.4 54.6 45.1C55.2 44.4 55.5 43.5 56 42.6C56.4 42 56.8 41.4 57.2 40.8C57.4 40.5 57.7 40.2 57.9 39.8C58.1 39.2 57.9 38.5 58 37.8C58.1 36.4 58 35 58 33.6C58 32.9 58.1 32.3 58.1 31.6C58.1 30.4 58.2 26.1 57.9 25.3C57.7 24.7 57.2 24.3 56.9 23.8C56.5 23.3 56.2 22.7 55.9 22.1C55.3 21.2 54.9 20.3 54.2 19.4C53 17.7 51.3 16.2 49.7 15C49.2 14.7 48.6 14.4 48.1 14.1C47.7 13.7 47.2 13.3 46.7 13.1C46 12.8 45.2 12.5 44.5 12.2C43.9 11.9 43.2 11.4 42.5 11.2C41.4 10.8 40.2 10.7 39 10.3C36.8 9.7 34.3 8.7 31.8 9ZM21.8 20.3C21.1 20.2 20.8 19.4 20.4 18.9C19.5 17.7 17.6 15.8 19.4 14.5C20 14 20.9 13.7 21.6 13.4C22.3 13.2 22.9 12.7 23.5 12.4C24.7 12 25.9 11.9 27 11.7C28.7 11.4 30.3 11.1 32 11C33.2 10.9 34.3 11.2 35.4 11.3C36.7 11.3 37.9 11.5 39.1 11.7C39.6 11.8 40 12 40.5 12.1C40.9 12.2 41.4 12.2 41.8 12.4C42.4 12.6 43 13.1 43.7 13.4C44.3 13.7 45 13.8 45.6 14.2C46.3 14.6 46.8 15.1 47.4 15.4C47.9 15.7 48.5 15.9 49 16.3C49.3 16.6 49.5 17 49.9 17.3C50.3 17.7 50.8 17.9 51.1 18.4C53.3 20.8 55.9 24.6 56.5 27.9C57.4 32.7 57.1 35 55.7 39.7C55 41.9 53.5 44 52 45.8C51.8 46.2 51.4 46.4 51.1 46.7C50.8 47 50.5 47.4 50.2 47.7C49.3 48.5 47.9 49.5 46.9 50.1C46.2 50.6 45 51.2 44.2 50.7C43.9 50.5 43.6 50.2 43.4 50C41.3 47.4 43.7 47.2 44.8 45.1C45.6 43.7 45.6 42.1 44.9 40.5C43.8 38.1 41.4 36.6 40.1 34.3C39.3 32.8 40.2 31.2 39.1 29.9C38.1 28.6 36.7 27.4 35.3 26.6C34.6 26.1 33.5 25.7 33.4 24.8C32.9 22.2 35.5 22.9 36.4 21.9C36.5 21.8 37.3 19.4 37.3 19.2C37.3 19 37.3 18.9 37.2 18.7C37.1 18.2 36.7 17.8 36.6 17.2C36.4 16.4 36.5 15.7 36 15C35.5 14.2 34.6 13.6 33.8 13.2C32.4 12.4 30.1 12.2 28.7 13.1C27.8 13.7 27.4 14.8 26.6 15.3C25.6 15.8 24.4 15.8 23.6 16.7C22.9 17.6 22.8 20 21.8 20.3ZM16.1 17.2C17.1 17 18 18.3 18.5 19.1C19.2 20 19.8 20.9 20.5 21.8C20.8 22.3 21.3 22.7 21.6 23.2C22.1 23.8 22.5 24.6 23.1 25.2C23.6 25.9 24.5 26.8 24.4 27.7C24.4 28.4 23.8 28.9 23.4 29.4C22.2 30.8 21 32.2 20.1 33.8C19.7 34.3 19.3 35.1 19.6 35.8C19.7 36.2 20.2 36.5 20.5 36.6C22.4 37.6 23.4 38.4 25.6 38.7C26.8 38.9 28.6 38.9 29.2 40.1C30 41.4 29 42.6 28.4 43.7C27.8 44.8 27.1 46.3 27.2 47.5C27.3 48.8 27.8 50 28.5 51C28.8 51.4 29.2 51.8 29.3 52.3C29.6 53 29.2 53.7 28.4 53.8C27.1 53.9 25.8 53.1 24.5 52.7C23.9 52.5 23.2 52.4 22.6 52.2C21.6 51.8 20.7 51.3 19.8 50.7C19.1 50.3 18.3 50.1 17.7 49.6C17.3 49.4 17.1 49 16.7 48.7C13.6 46.1 11.1 43.3 9.7 39.4C8.4 36 8.1 32.2 8.8 28.7C8.9 28 9.2 27.3 9.5 26.5C9.8 25.5 10.2 24.3 10.7 23.3C11 22.7 11.4 22.2 11.7 21.7C12 21.2 12.2 20.8 12.5 20.3C13.1 19.5 15.1 17.4 16.1 17.2ZM28.5 22.9C27.7 22.8 27.4 21.4 28 20.9C29.1 20.6 29.6 22.6 28.5 22.9ZM28.6 36.5C27.7 37 25.2 35.4 25.1 34.4C25.2 34 25.5 33.7 25.9 33.4C27.7 31.6 29.3 35.6 28.6 36.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.6 7.1C16.2 7.6 16.4 10.6 16.4 11.5C16.4 14.6 16.4 17.8 16.4 21C16.4 22.6 16.4 24.3 17.7 25.5C18.5 26.2 19.5 26.6 20.4 27.1C21.9 28 23.5 28.9 25 29.8C25.8 30.3 27.5 30.8 27.5 31.9C27.5 33.1 25.9 33.6 25.1 34.1C23.5 35 22 35.9 20.4 36.8C19.5 37.3 18.5 37.8 17.8 38.4C16.3 39.6 16.4 41.4 16.4 43.1C16.4 46.2 16.4 49.4 16.4 52.6C16.4 53.5 16.2 56.2 16.6 56.9C17.2 57.2 18.1 57 18.8 57C20.6 57 22.3 57 24.1 57C29.5 57 35 57 40.4 57C41.6 57 46.6 57.2 47.4 56.9C47.7 56.3 47.5 53.3 47.5 52.5C47.5 49.4 47.5 46.2 47.5 43.1C47.5 41.4 47.6 39.7 46.2 38.5C45.5 37.8 44.6 37.4 43.8 37C42.1 36 40.4 35 38.7 34C38 33.6 36.5 33.1 36.5 32.1C36.5 30.9 38 30.4 38.9 29.9C40.5 28.9 42.1 28 43.8 27C44.6 26.6 45.6 26.1 46.3 25.4C47.6 24.2 47.5 22.5 47.5 20.9C47.5 17.7 47.5 14.6 47.5 11.4C47.5 10.5 47.7 7.8 47.4 7.1C46.8 6.8 45.8 7 45.1 7C43.4 7 41.6 7 39.9 7C34.4 7 29 7 23.5 7C22.4 7 17.4 6.8 16.6 7.1ZM46.2 8.3C46.5 8.8 46.3 11.3 46.3 12.1C46.3 15 46.3 18 46.3 21C46.3 22.3 46.5 23.8 45.3 24.7C44.6 25.3 43.6 25.8 42.7 26.2C41.2 27.1 39.7 28 38.2 28.9C36.9 29.6 35.5 30.2 35.3 31.9C35.1 33.1 36.2 33.9 37.1 34.5C39.5 35.8 41.8 37.2 44.2 38.5C45.3 39.2 46.3 39.9 46.3 41.4C46.3 41.8 46.4 42 46.2 42.3L17.8 42.3C17.6 42 17.6 41.8 17.6 41.4C17.6 40 18.6 39.2 19.7 38.6C22 37.3 24.3 35.9 26.6 34.6C27.6 34 28.9 33.2 28.7 31.9C28.5 30.3 27.2 29.7 25.9 29C24.3 28 22.7 27.1 21 26.1C20.2 25.7 19.3 25.3 18.6 24.6C17.4 23.6 17.6 22.2 17.6 20.9C17.6 17.9 17.6 15 17.6 12.1C17.6 11.3 17.4 8.9 17.8 8.3L46.2 8.3Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M4.1 22.7L4.1 41.3C4.6 41.6 7 41.4 7.8 41.4C10.9 41.4 14.1 41.4 17.3 41.4C27.4 41.4 37.5 41.4 47.6 41.4C50.5 41.4 53.3 41.4 56.2 41.4C57 41.4 59.2 41.6 59.9 41.3L59.9 22.7C59.3 22.4 57.1 22.6 56.3 22.6C53.2 22.6 50.1 22.6 47 22.6C36.7 22.6 26.4 22.6 16.1 22.6C13.3 22.6 10.4 22.6 7.6 22.6C6.8 22.6 4.7 22.4 4.1 22.7ZM43.7 23.5C44 24.1 43.8 26.4 43.8 27.2C43.8 30.3 43.8 33.5 43.8 36.6C43.8 37.3 44 40 43.7 40.5C42.8 40.8 41.7 40.6 40.8 40.6C38.8 40.6 36.7 40.6 34.7 40.6C28 40.6 21.3 40.6 14.6 40.6C12.4 40.6 10.1 40.6 7.8 40.6C7.1 40.6 5.5 40.8 5 40.4L5 23.6C5.7 23.2 7 23.4 7.8 23.4C10.1 23.4 12.3 23.4 14.5 23.4C21.4 23.4 28.2 23.4 35.1 23.4C37 23.4 39 23.4 40.9 23.4C41.8 23.4 42.9 23.2 43.7 23.5ZM59 23.6C59.3 24.4 59.1 26.5 59.1 27.4C59.1 30.3 59.1 33.2 59.1 36.2C59.1 37.1 59.3 39.7 59 40.5C58.3 40.8 56.6 40.6 55.8 40.6C53.3 40.6 50.8 40.6 48.2 40.6C47.4 40.6 45.4 40.8 44.8 40.4L44.8 23.6C45.5 23.2 47.2 23.4 48 23.4C50.5 23.4 53 23.4 55.6 23.4C56.4 23.4 58.3 23.2 59 23.6ZM9.9 33.4C10.1 34.7 8.2 34.8 7.5 34.3C7.1 34.1 7 33.8 6.8 33.5C6.4 33.3 5.9 33.3 5.6 33.5C5.3 34.4 6.2 35.3 7 35.6C8.4 36.1 10.5 35.9 11.2 34.4C11.4 34 11.5 33.5 11.4 33.1C11 30.8 7.9 31.9 7.1 30.5C6.8 29.4 8.5 29.1 9.3 29.7C9.5 29.9 9.7 30.2 9.8 30.4C10.2 30.6 10.8 30.6 11.1 30.3C11.6 27.9 6.7 27.3 5.8 29.5C5.6 29.9 5.5 30.4 5.6 30.9C6.1 33.1 9.1 32 9.9 33.4ZM54.6 28.3C52.5 28.5 51.9 30.6 51.9 32.4C51.9 34.4 53.1 36.2 55.2 36C57.3 35.8 58.2 33.8 58 31.9C57.9 29.9 57 28.1 54.6 28.3ZM12.1 28.5C12 28.9 12 29.2 12.2 29.5L13.8 29.7C14.4 30.6 13.6 34.6 14.1 35.5L15.2 35.5C15.8 34.6 14.9 30.8 15.5 29.7L17.1 29.5C17.4 29.2 17.4 28.8 17.1 28.4C16.6 28.3 12.5 28.2 12.1 28.5ZM18.3 28.5C18 29.3 18.2 32.6 18.2 33.7C18.2 34.2 18.1 35.1 18.4 35.5C18.9 35.7 22.6 35.7 23 35.5L23.1 34.5L19.6 34.2C19.5 33.7 19.4 33 19.7 32.5L22.6 32.4C22.8 32 22.8 31.6 22.6 31.3L19.7 31.1C19.5 30.7 19.5 30.1 19.7 29.7C20.6 29.4 22.2 29.9 22.9 29.5C23 29.1 23 28.8 22.8 28.4C22.3 28.3 18.7 28.2 18.3 28.5ZM24 28.5C23.7 29.4 23.9 32.5 23.9 33.6C23.9 34.2 23.8 35 24 35.5L25.1 35.5L25.4 32.9C25.8 32.7 26.2 32.8 26.6 32.8C28.3 32.9 27.3 34.5 27.9 35.5C28.3 35.7 28.8 35.7 29.1 35.5C29.1 35.1 29 33.4 28.9 33C28.8 32.7 28.6 32.5 28.5 32.1C28.9 31.3 29.4 30.9 29.1 29.7C28.9 29.2 28.6 28.8 28.1 28.6C27.5 28.3 24.6 28.1 24 28.5ZM30.1 28.5L30.1 35.5C30.5 35.7 30.9 35.7 31.3 35.5C31.5 35 31.4 34.3 31.4 33.8C31.4 32.7 31.6 29.2 31.3 28.5C30.9 28.3 30.5 28.3 30.1 28.5ZM32.3 28.5C32 29.4 32.2 32.5 32.2 33.6C32.2 34.2 32.1 35 32.3 35.5L37 35.5C37.2 35.2 37.2 34.8 37 34.4L33.8 34.2L33.5 28.5C33.2 28.3 32.7 28.3 32.3 28.5ZM38.4 28.5C38.1 29.4 38.3 32.5 38.3 33.7C38.3 34.2 38.2 35.1 38.5 35.5L43.1 35.5L43.2 34.5L39.8 34.2C39.6 33.7 39.5 33 39.8 32.6L42.6 32.4C42.9 32 42.9 31.6 42.6 31.3L39.8 31.1C39.6 30.7 39.6 30.1 39.8 29.7C40.7 29.4 42.3 29.9 43 29.5C43.1 29.1 43.1 28.8 42.9 28.4C42.3 28.2 38.9 28.2 38.4 28.5ZM46.2 28.6C46 29.2 46.1 29.9 46.1 30.5C46.1 31.6 45.9 34.9 46.2 35.7C46.7 35.9 50.5 35.9 51 35.6L50.9 34.6L47.6 34.4C47.3 34 47.4 33.2 47.5 32.8C48.2 32.3 49.6 32.8 50.5 32.5C50.6 32.2 50.6 31.9 50.5 31.5L47.6 31.2L47.5 30C48.3 29.5 49.8 30.1 50.7 29.7C51 29.4 51 29 50.8 28.6C50.3 28.4 46.7 28.4 46.2 28.6ZM25.3 31.4L25.3 29.8C25.6 29.6 25.9 29.6 26.2 29.6C26.6 29.6 27.1 29.6 27.4 29.8C28 30.1 28 31.1 27.4 31.4C27.1 31.6 26.7 31.6 26.3 31.6C25.9 31.6 25.6 31.6 25.3 31.4ZM54.8 29.6C56.1 29.5 56.6 30.8 56.7 32C56.8 33.1 56.4 34.5 55.2 34.7C53.9 34.9 53.2 33.5 53.2 32.4C53.2 31.3 53.4 29.8 54.8 29.6Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M18.9 49.9C17.7 50.2 14.6 49.6 13.8 50.2C13.5 50.6 13.5 51.5 13.8 52C14.5 52.4 17.7 52.1 18.7 52.1C19.2 52.1 19.8 52.2 20.2 51.9C20.9 51.3 22.1 49.1 22.7 48.2C24.1 46 25.6 43.8 27 41.6C27.6 40.5 28.3 39.4 29 38.5L29 46.4C28.8 46.7 28.5 46.9 28.2 47.1C27.4 47.8 26.9 48.7 26.5 49.7C26.2 50.9 26.2 52.2 26.6 53.4C28.5 59.1 36.9 58.3 37.9 52.4C38 51.5 38 50.5 37.6 49.5C37.2 48.2 36.2 47.4 35.3 46.5C35 45.4 35.2 43.6 35.2 42.5C35.2 39.8 35.2 37 35.2 34.2C35.2 33.2 35 29.6 35.3 28.9C35.5 28.2 37.9 24.8 38.5 23.9C40 21.7 41.5 19.4 42.9 17.2C43.5 16.2 44.2 15 45 14.1C46.2 13.7 49.3 14.4 50.2 13.8C50.5 13.3 50.5 12.5 50.1 12C49.5 11.7 48 11.8 47.2 11.8C46.5 11.8 44.3 11.7 43.8 12C43.2 12.3 42 14.6 41.5 15.3C40.1 17.5 38.6 19.7 37.2 21.9C36.7 22.8 35.9 24.3 35.2 24.9C35.1 21.4 35.2 17.8 35.2 14.3C35.2 12.8 35.4 10.7 35.1 9.3C34.6 6.7 31.2 5.8 29.7 8C28.7 9.4 29.1 13.8 29.1 15.6C29.1 19.8 29.1 24 29.1 28.2C29.1 30.1 29.2 32.3 29.1 34.2C29 34.9 26.8 37.8 26.4 38.6C24.7 41.2 23 43.7 21.3 46.3C20.5 47.5 19.9 48.9 18.9 49.9ZM31.2 31C31.1 29.1 31.2 27.2 31.2 25.3C31.2 21.6 31.2 17.8 31.2 14.1C31.2 13.2 31 10.1 31.3 9.4C31.4 9.1 31.8 8.9 32.1 8.9C32.4 8.9 32.8 9.1 33 9.4C33.3 10.1 33.1 13.4 33.1 14.3C33.1 17.3 33.1 20.3 33.1 23.3C33.1 24.4 33.3 27.4 33 28.2C32.9 28.8 31.6 30.6 31.2 31Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M6.1 6.1L6.1 57.8C6.7 58.1 9.1 58 9.9 58C13 58 16.1 58 19.2 58C28.1 58 37.1 58 46 58C48.7 58 51.4 58 54.1 58C55 58 57 58.1 57.8 57.9C58.2 57.3 58 55.3 58 54.6C58 51.7 58 48.9 58 46C58 36.4 58 26.8 58 17.1C58 14.5 58 11.8 58 9.2C58 8.5 58.1 6.7 57.8 6.1L6.1 6.1ZM49.4 10.2C50 11.1 49.2 13.4 49.7 14.4L53.8 14.6C54 15.1 54 18.2 53.8 18.7L49.7 18.9C49.2 19.9 50 22.1 49.4 23.1L45.4 23.1C44.8 22.2 45.6 19.9 45.1 18.9L41 18.7C40.8 18.2 40.8 15.1 41 14.6L45.1 14.4C45.6 13.5 44.8 11.2 45.4 10.3L49.4 10.2ZM27.6 27C28.1 26.8 29 25.3 29.5 24.9C31.1 23.5 32.9 22.8 34.9 22.6C36.2 22.5 37.7 22.9 38.9 23.5C42.9 25.5 44.5 30.1 43.7 34.4C42.6 40.1 37.1 45.2 32.8 48.8C31.8 49.7 28.8 52.2 27.7 52.5C26.8 52.4 23.5 49.6 22.6 48.9C17.6 44.9 12.1 39.3 11.5 32.6C10.9 26.9 16.2 21.4 22 22.8C23.8 23.2 25.4 24.2 26.5 25.6C26.9 26 27.2 26.6 27.6 27ZM21.8 38.1C22.6 38.7 25.8 37.9 26.7 38.5C26.8 39.1 26.2 40.1 25.9 40.8C25.3 42.1 23.8 45.1 23.6 46.3C24.2 46.3 25.5 44.5 25.9 44C27.5 42.1 29.1 40.2 30.7 38.4C31.2 37.8 32.4 36.7 32.6 36C31.7 35.5 28.5 36.3 27.5 35.8C27.4 35.1 28.1 34.1 28.4 33.5C29.1 32.2 30.8 29.1 31.1 27.8C30.6 27.9 29.2 29.6 28.8 30.1C27.1 32 25.4 33.9 23.8 35.8C23.2 36.4 22 37.4 21.8 38.1Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M16.2 25.7C15.7 26.1 14.9 26.3 14.4 26.6C13.4 27.2 12.5 27.7 11.7 28.4C8.2 31.3 6 35.8 6 40.4C6 42 6.1 43.6 6.6 45.2C6.8 45.6 6.9 46.5 7.4 46.5C7.5 46.4 7.6 46.3 7.6 46.2C7.6 45.6 7.2 44.5 7.1 43.7C7 42 7.3 40.2 7.9 38.6C10.2 32.7 17.3 30 22.9 32.7C24.1 33.3 25.2 34 26.1 35C26.6 35.5 27.1 36.3 27.7 36.6L28.9 35.9C28.9 35.6 28.9 35.4 28.8 35.1C28.7 34.1 29.2 33 29.9 32.4C30.4 32 30.9 31.9 31.4 31.6L31.4 30.2C30.8 29.8 29.7 29.8 28.9 29.6C27.7 29.3 26.5 28.7 25.4 27.9C20.4 24.3 19.4 16.8 23.3 12C24.4 10.6 25.8 9.5 27.4 8.8C28 8.5 29.2 8.3 29.6 8C29.8 7.9 29.8 7.8 29.8 7.7C29.5 7.3 28.7 7.6 28.3 7.7C26.8 8.1 25.3 8.7 24 9.4C19.9 11.7 16.8 16.2 16.2 20.8C16.1 21.7 16 22.7 16.1 23.6C16.1 24.2 16.4 25.1 16.2 25.7ZM34.2 7.6C34.2 7.8 34.1 7.8 34.3 8C34.5 8.2 35.8 8.4 36.2 8.6C38 9.4 39.6 10.6 40.8 12.1C44.6 16.9 43.5 24.3 38.6 27.9C37.3 28.8 35.9 29.4 34.4 29.8C33.8 29.9 33.2 29.9 32.6 30.1C32.4 30.5 32.5 31.2 32.6 31.6C32.9 31.8 33.3 31.9 33.6 32.1C34.4 32.5 35 33.5 35.1 34.4C35.2 34.9 35 35.4 35.1 35.9L36.4 36.6C36.8 36.3 37.1 35.7 37.5 35.3C38.5 34.2 39.7 33.3 41.1 32.7C47 30.1 53.7 32.7 56.1 38.7C56.8 40.4 57 42.2 56.8 44C56.8 44.6 56.3 45.7 56.4 46.2C56.4 46.4 56.5 46.4 56.6 46.5C57.1 46.4 57.2 45.6 57.4 45.1C57.8 43.7 58 42.2 58 40.7C58 35.9 55.8 31.5 52.2 28.4C51.5 27.8 50.7 27.2 49.9 26.8C49.2 26.4 48.2 26.2 47.8 25.7C47.6 25 47.8 24.2 47.9 23.5C48 22.6 47.8 21.6 47.7 20.7C47 16 44.1 11.7 40 9.4C38.6 8.7 37.2 8 35.7 7.7C35.2 7.6 34.6 7.3 34.2 7.6ZM23.2 23.6C23.2 24.3 24.7 26 25.3 26.4C25.9 26.3 26.5 25.8 27 25.5C27.8 25 28.7 24.7 29.6 24.5C31.9 24 34.4 24.2 36.6 25.3C37.2 25.6 37.9 26.1 38.5 26.4C39.3 26.2 40.6 24.4 40.8 23.7C40.3 22.7 37.9 21.8 36.9 21.4C33.5 20.1 29.7 20.2 26.4 21.7C25.4 22.1 23.9 22.7 23.2 23.6ZM18 32.8C17.4 33.5 17.7 35.9 17.8 36.8C18.3 40.5 20.4 44 23.4 46.2C24.1 46.8 25.8 48.1 26.7 48C27.3 47.5 28.1 45.6 28 44.8C27.6 44.2 26.6 44 26 43.6C25.2 43 24.5 42.4 23.9 41.7C22.6 40.1 21.7 38.2 21.5 36.1C21.4 35.2 21.6 34.2 21.4 33.4C20.9 32.9 18.6 32.5 18 32.8ZM42.6 33.3C42.4 33.9 42.6 34.8 42.6 35.5C42.5 36.5 42.3 37.4 42 38.3C41.3 40.3 40 42.1 38.4 43.3C37.6 43.8 36.6 44.2 36 44.7C35.8 45.5 36.7 47.5 37.3 48C38.3 48 40.3 46.5 41.1 45.9C44 43.5 45.8 40 46.2 36.3C46.3 35.4 46.5 33.7 46.1 32.9C45.5 32.5 43.2 32.9 42.6 33.3ZM28.3 37.7C28.2 38.3 28.7 39.1 28.9 39.7C29.3 41 29.5 42.4 29.3 43.7C28.6 50.2 23.1 54.6 16.6 53.8C14.8 53.6 13.1 52.8 11.7 51.8C11.2 51.4 10.1 50.2 9.6 50.3C9.3 50.7 10.2 51.4 10.5 51.8C11.7 52.9 13 54 14.5 54.8C18.7 56.8 23.6 57.2 27.9 55.4C28.7 55 29.5 54.7 30.2 54.2C30.8 53.9 31.3 53.3 32 53.1C32.6 53.3 33.1 53.8 33.7 54.2C34.5 54.7 35.4 55.1 36.2 55.5C40.6 57.1 45.6 56.9 49.8 54.6C51.2 53.8 52.4 52.8 53.5 51.7C53.9 51.4 54.6 50.8 54.4 50.3C53.9 50.2 52.8 51.4 52.3 51.8C50.9 52.8 49.2 53.6 47.4 53.8C40.9 54.6 35.4 50.3 34.7 43.7C34.5 42.4 34.7 41 35.1 39.7C35.2 39.1 35.7 38.3 35.7 37.7L34.5 37C34 37.1 33.7 37.5 33.3 37.7C32.3 38.1 31.2 38.1 30.3 37.5C30 37.3 29.8 37.1 29.5 37L28.3 37.7Z"/>'
    }
  ]);
})();
