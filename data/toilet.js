/* Japanese-style washlet / shower-toilet control panels and
 * public-toilet wall buttons (toilet).
 * Format and drawing rules are in data/README.md.
 *
 * The first eight entries are the standard pictograms agreed by the Japan
 * Sanitary Equipment Industry Association (日本レストルーム工業会) in January 2017,
 * six of which went into ISO 7000 in 2018 and seven into JIS S 0103 in 2018.
 * Shared parts below keep that family consistent: one dot size, one dotted
 * "fountain" of water, one side-on toilet bowl with a swinging arrow, one swirl. */
(function () {
 // radius of the water dots used across the family













  WTF.add([
    // =====================================================================
    // THE STANDARD PICTOGRAMS (JSEIA 2017)
    // =====================================================================
    {
      id: "toilet-stop",
      name: "Stop (止)",
      quiz: "Stop the spray",
      category: "toilet",
      color: "amber",
      aka: ["止 (tome)", "止める (tomeru)", "STOP", "stop button", "停止 (teishi)"],
      looksLike: ["orange button", "orange square", "black square", "square", "止", "button with a square on it", "box"],
      meaning:
        "Stops whatever the seat is doing: the rear wash, the bidet spray or the dryer. In the 2017 industry-standard set the symbol is a plain filled square, and the button is usually orange so you can find it in a hurry.",
      action:
        "Water won't stop spraying? Press 止. On most seats standing up stops it too, as the washes only run while a sensor in the seat knows you're sitting, but 止 is the more dignified exit. Many also switch themselves off after a couple of minutes anyway.",
      tip: "It doesn't flush and it isn't an off switch for the whole toilet. The flush is a separate button, lever or sensor: look for 大 / 小 or 流す.",
      svg:
        '<text x="32" y="27" font-size="22">止</text>' +
        '<rect x="20" y="33" width="24" height="24" rx="2" fill="currentColor" stroke="none"/>'
    },
    {
      id: "toilet-rear-wash",
      name: "Rear wash (おしり)",
      category: "toilet",
      aka: ["おしり (oshiri)", "おしり洗浄 (oshiri senjō)", "rear wash", "rear cleansing", "REAR", "washlet", "spray wash"],
      looksLike: ["bum with water", "bottom with a fountain", "w with dots", "fountain", "dots spraying up", "dotted fountain", "butt", "bum"],
      meaning:
        "A thin nozzle slides out from under the back of the seat and sprays warm water up at your bottom to wash it. The standard picture is admirably frank: a bottom (the curvy 'w') with a dotted fountain of water hitting it from below.",
      action:
        "Stay sitting (it won't work if you're standing), press it, then press 止 (stop) when you're done: 10–20 seconds is plenty. Pat dry with paper or use the dryer. Too fierce? Press − on the pressure (水勢) buttons.",
      tip: "Before 2017 every maker drew this differently: a plain fountain, a side-on person, just a nozzle. Older panels still use their own pictures, but the button is nearly always labelled おしり.",
      // JIS S 0103 pictogram, traced from the JSEIA standard sheet.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M32 20.7C32.5 20.9 32.7 21.4 33 21.8C33.8 22.8 34.7 23.5 35.6 24.2C35.8 24.4 36 24.5 36.3 24.6C38.9 26.3 42 26.8 45.1 26.2C46.2 26.1 47.4 25.5 48.4 24.9C52 23.1 55 18.6 55.6 14.7C55.7 14.1 56 13.6 56 13C56 11.5 56.7 9.2 54.9 8.4C54.5 8.3 54.2 8.3 53.8 8.5C52.3 9.1 52.8 11 52.7 12.2C52.7 12.8 52.5 13.3 52.4 13.8C52.4 14.1 52.2 14.4 52.1 14.7C52.1 14.9 52.1 15.2 52 15.4C51 18.4 48.9 21 46 22.3C45.6 22.6 45.1 22.6 44.6 22.7C43.7 23 42.8 23.2 41.8 23.1C39.4 22.8 37.8 21.7 36.1 20.1C35.8 19.9 35.4 19.5 35.1 19.1C34.7 18.5 34.3 17.9 33.9 17.2C33.4 16.3 33.2 14.9 31.9 15C30.4 15.1 29.7 17.9 28.8 19.1C26.5 21.9 22.9 23.8 19.3 22.7C18.8 22.6 18.3 22.5 17.9 22.3C15.1 21 12.9 18.4 11.9 15.5C11.9 15.2 11.9 15 11.8 14.8C11.6 14.2 11.3 13.6 11.3 12.9C11.2 12 11.3 11 11.2 10.1C11.1 9.2 10.2 8 9.2 8.4C7.1 9.1 7.9 11.6 8 13.2C8.1 14 8.2 14.2 8.4 14.9C9.3 19.3 11.7 22.5 15.4 24.9C17.6 26.3 21.3 26.7 23.8 26.2C25.4 25.9 27 25.1 28.3 24.2C29.2 23.6 30.2 22.7 30.9 21.8C31.2 21.4 31.5 20.9 32 20.7ZM20.1 31.6C19.2 31.7 18.6 32.4 18.6 33.2C18.6 34.2 19.4 34.9 20.3 34.9C21.3 34.9 21.8 34 21.8 33.1C21.8 32.2 21.1 31.4 20.1 31.6ZM43.5 31.6C42.6 31.7 42 32.4 42.1 33.3C42.1 34.3 42.8 34.9 43.8 34.9C44.7 34.9 45.4 33.9 45.4 33.1C45.4 32.2 44.4 31.4 43.5 31.6ZM15.2 33.6C14.3 33.8 13.8 34.5 13.8 35.4C13.8 36.2 14.5 37.1 15.5 37C16.3 37 17.1 36.1 17 35.2C16.9 34.4 16.2 33.5 15.2 33.6Z"/><g fill="currentColor" stroke="none"><circle cx="25.4" cy="34.51" r="1.67"/><circle cx="38.52" cy="34.51" r="1.67"/><circle cx="48.54" cy="35.33" r="1.67"/><circle cx="29.31" cy="38.34" r="1.67"/><circle cx="34.61" cy="38.34" r="1.67"/><circle cx="31.97" cy="43.02" r="1.67"/><circle cx="31.97" cy="48.58" r="1.67"/><circle cx="31.97" cy="54.14" r="1.67"/></g>'
    },
    {
      id: "toilet-bidet",
      name: "Bidet / front wash (ビデ)",
      category: "toilet",
      aka: ["ビデ (bide)", "ビデ洗浄 (bide senjō)", "front wash", "feminine wash", "FRONT", "bidet"],
      looksLike: ["person sitting", "sitting person with dots", "woman sitting", "person on a toilet", "seated figure with water", "person with a fountain"],
      meaning:
        "The front wash, mainly for women: a softer, wider spray aimed further forward than the rear wash (some seats even use a separate nozzle for it). The standard pictogram is a seated person with a dotted fountain underneath.",
      action:
        "Press it while sitting and press 止 (stop) to end it. If you only came in for a wee, you can ignore it completely.",
      tip: "In Japan 'bidet' means this front wash only; the whole seat is a washlet or 'shower toilet'. On some TOTO remotes the button reads ビデ / ワイド (FRONT / WIDE) and pressing it again gives a wider spray.",
      // JIS S 0103 pictogram, traced from the JSEIA standard sheet.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M43.6 13.5C43.2 13 42.5 12.9 42.1 12.4C40.9 10.3 41 8.7 38.6 7.4C38.5 7.3 38.3 7.1 38.1 7.1C37.3 6.9 36.1 6.8 35.3 7.1C33.5 7.9 32.3 9.8 32.6 11.8C32.8 12.3 32.8 12.9 33.1 13.3C34.7 15.5 35.6 15.4 38.1 15.4C39 15.4 39.9 15.5 40.8 15.2C41.6 15 43.6 14.5 43.6 13.5ZM32.2 28.8C31.5 29.1 30.5 28.9 29.7 28.9C28 28.9 26.2 28.9 24.4 28.9C23.6 28.9 22.4 28.8 21.6 29.3C20.5 30.1 19.6 31.7 18.9 32.9C18.8 33.1 18.6 33.3 18.5 33.5C17.6 34.8 16.8 36.1 15.9 37.4C15.5 38 14.9 38.6 14.6 39.4C13.8 41.3 15.1 43.2 17.2 42.8C17.6 42.8 17.9 42.6 18.2 42.4C18.6 42 18.9 41.4 19.2 40.9C20.2 39.5 21.1 38 22.1 36.7C22.5 36.2 23 35 23.6 34.8C24.6 34.6 25.9 34.8 27 34.8C29.6 34.8 32.2 34.8 34.9 34.8C36.7 34.8 38.6 35.1 40 33.9C40.6 33.4 41 32.7 41.3 32.1C41.7 30.9 41.5 25.5 41.5 23.9C41.5 22.9 41.6 21.2 41.2 20.4C40.8 19.7 40.5 19 39.9 18.5C38.3 17.2 35.8 17.2 34.2 18.4C31.9 20.2 32.4 23.4 32.4 26C32.4 26.7 32.6 28.2 32.2 28.8ZM38.4 39.1C37.5 39.2 37 39.8 37 40.7C37 41.6 37.7 42.3 38.6 42.3C39.6 42.3 40.1 41.4 40.1 40.6C40.1 39.7 39.3 38.9 38.4 39.1ZM47.9 39.7C47.2 39.8 46.4 40.7 46.5 41.4C46.6 42.3 47.4 43 48.2 42.9C49.1 42.9 49.8 42 49.6 41.2C49.5 40.3 48.9 39.6 47.9 39.7ZM35.7 43.5C34.9 43.6 34.2 44.3 34.2 45.1C34.2 46 34.9 46.8 35.8 46.8C36.6 46.8 37.4 46 37.3 45.1C37.2 44.4 36.6 43.4 35.7 43.5ZM35.6 48.8C34.8 48.9 34.1 49.5 34.2 50.4C34.3 51.2 34.9 52 35.9 51.9C36.8 51.8 37.3 51.2 37.3 50.3C37.2 49.4 36.6 48.6 35.6 48.8ZM35.6 53.9C34.8 54 34.2 54.8 34.2 55.6C34.2 56.4 34.9 57.2 35.8 57.2C36.7 57.1 37.4 56.3 37.3 55.5C37.2 54.7 36.6 53.8 35.6 53.9Z"/><g fill="currentColor" stroke="none"><circle cx="28.05" cy="39.08" r="1.58"/><circle cx="43.5" cy="39.08" r="1.57"/><circle cx="32.95" cy="40.65" r="1.59"/><circle cx="23.39" cy="41.33" r="1.58"/></g>'
    },
    {
      id: "toilet-dryer",
      name: "Dryer (乾燥)",
      category: "toilet",
      aka: ["乾燥 (kansō)", "温風乾燥 (onpū kansō)", "warm air dryer", "DRYER", "dry"],
      looksLike: ["three lines curving up", "three wavy lines", "wavy lines", "wind", "air blowing", "three lines", "乾燥"],
      meaning: "Blows warm air from under the back of the seat to dry your bottom after a wash. Yes, really.",
      action:
        "Press it while you're still sitting, and 止 (stop) when you've had enough. It's in no hurry, so most people pat dry with paper first (or instead). On some seats pressing it again changes the air temperature.",
      tip: "It isn't a hand dryer or a fan for the room. Like the washes it only works while you're sitting, and it switches itself off after a few minutes.",
      // JIS S 0103 pictogram, traced from the JSEIA standard sheet.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M51 17.2C50.1 17.3 49.5 18 48.8 18.5C47.2 19.5 45.6 20.6 43.9 21.3C42 22.1 39.9 22.6 37.8 22.9C37.3 22.9 36.8 23.1 36.3 23.1C35.3 23.2 34.3 23.2 33.3 23.3C32.3 23.4 31.2 23.2 30.2 23.2C28.9 23.2 27.7 23 26.4 22.9C26 22.8 25.6 22.9 25.2 22.9C23.9 22.7 22.3 22.5 20.9 22.6C20.1 22.7 19.3 22.8 18.4 22.9C18.1 22.9 17.7 22.8 17.4 22.9C16.4 23 15.5 23.3 14.6 23.5C13.9 23.6 13.3 23.6 12.7 23.8C10.6 24.4 11.3 26.9 13 26.8C13.3 26.8 13.7 26.6 14.1 26.5C15.8 26.3 17.6 25.7 19.4 25.6C20.7 25.6 23 25.5 24.3 25.6C26.4 25.9 28.5 26.1 30.6 26.3C32 26.4 33.6 26.3 35 26.3C35.8 26.2 36.5 26.1 37.3 26C38.2 25.9 39.1 25.8 40.1 25.6C40.8 25.5 41.4 25.2 42 25C44.6 24.5 46.9 23.2 49.1 21.9C49.7 21.6 52.1 19.9 52.3 19.4C52.9 18.5 52.3 17 51 17.2ZM50.3 29.4C49.6 29.5 49 30 48.4 30.3C47.8 30.6 47.1 30.9 46.5 31.1C45.5 31.6 44.4 31.8 43.3 32.2C43.1 32.3 42.9 32.4 42.6 32.5C42 32.6 41.3 32.6 40.7 32.8C40.5 32.9 40.2 33 40 33.1C39.6 33.2 39.1 33.1 38.7 33.2C36.6 33.4 34.6 33.4 32.5 33.2C32.2 33.1 31.9 33.2 31.7 33.2C31 33.1 30.3 32.7 29.6 32.7C28.7 32.7 27.8 32.4 26.9 32.2C26.2 32 25.5 32 24.8 31.8C24.4 31.7 24.1 31.5 23.8 31.5C22.4 31.3 21.1 31.1 19.8 31C18.2 30.8 16.5 30.9 15 31C14.5 31 12.4 31.2 12.1 31.4C10.8 32.3 11.5 34.1 13 34.1C14.2 34.1 15.4 34 16.6 33.9C18.2 33.7 21 34.1 22.6 34.3C23 34.3 23.3 34.5 23.6 34.6C24.3 34.8 25 34.8 25.6 34.9C25.9 35 26.2 35.1 26.5 35.2C27.3 35.4 28.1 35.5 28.9 35.6C30.7 35.9 32.5 36.2 34.3 36.2C35.4 36.2 36.6 36.3 37.7 36.2C38.1 36.1 38.6 36.2 39.1 36.2C41.4 35.9 43.6 35.3 45.7 34.6C46 34.5 46.1 34.4 46.4 34.3C47 34 47.6 33.8 48.2 33.5C49.3 33.1 50.5 32.7 51.5 32C52.5 31.2 51.6 29.2 50.3 29.4ZM12.9 38.6C11.4 38.8 10.8 40.7 12.3 41.4C12.9 41.6 13.6 41.5 14.2 41.5C15.7 41.7 17.3 41.8 18.8 42C19.2 42.1 19.5 42.3 19.8 42.4C22.6 42.8 25.2 44.1 27.9 44.8C28.3 44.9 28.6 45.1 29 45.2C29.7 45.3 30.2 45.6 30.9 45.8C31.4 46 32 46 32.6 46.1C33.7 46.3 34.8 46.6 35.9 46.7C36.7 46.8 37.6 46.7 38.4 46.7C39.4 46.7 40.4 46.8 41.4 46.7C43.8 46.5 46.5 45.9 48.7 45.1C49.1 45 49.5 44.8 49.8 44.7C51.8 44 51.9 41.9 50 41.7C49.1 41.6 48.4 42.1 47.7 42.4C46.3 42.8 44.9 43.1 43.5 43.3C43.1 43.4 42.8 43.6 42.4 43.6C41.9 43.7 41.4 43.6 40.9 43.7C39.1 44 37.1 43.9 35.2 43.7C34.6 43.6 34.1 43.3 33.6 43.3C32.7 43.2 32 42.9 31.2 42.7C30.7 42.6 30.1 42.5 29.6 42.3C29.5 42.3 29.3 42.1 29.1 42.1C27.8 41.6 26.4 41.3 25.1 40.9C24.3 40.5 23.4 40.2 22.6 39.9C22 39.8 21.4 39.7 20.8 39.5C20.1 39.4 19.4 39.1 18.7 39C17.4 38.8 16.1 38.8 14.8 38.6C14.2 38.6 13.5 38.5 12.9 38.6Z"/>'
    },
    {
      id: "toilet-flush-full",
      name: "Big flush (大)",
      quiz: "Flush after a poo",
      category: "toilet",
      aka: ["大 (dai)", "流す 大 (nagasu dai)", "便器洗浄 大 (benki senjō dai)", "full flush", "large flush", "FLUSH"],
      looksLike: ["big swirl", "swirl with three arms", "spiral with dots", "whirlpool", "swirl with dots", "大", "snail"],
      meaning:
        "The full-strength flush: for poo, or plenty of paper. The standard symbol is a big swirl (water spinning round the bowl) with drops around it, and the button or lever is usually marked 大, 'big'.",
      action:
        "Press it once and give it a second to start. On a tank lever, 大 is one direction and 小 the other (look for the arrows). Nothing happening? The flush may be a separate wall button (流す), a hand sensor, or automatic when you stand up.",
      tip: "Toilet paper goes in the bowl in Japan: it's made to break up. Sanitary products go in the little bin.",
      // JIS S 0103 pictogram, traced from the JSEIA standard sheet.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.5 35.9C40.7 36.1 40.5 36.3 40.5 36.7C40.3 38.6 39.1 40.2 37.9 41.6C35.5 44.4 31.1 46 27.4 45.5C26.9 45.5 26.4 45.6 26 45.5C24.9 45.4 23.3 45 22.3 44.5C18.6 42.9 15.6 40.7 13.5 37.1C13.2 36.6 12.8 35.8 12.6 35.2C12.4 34.6 11.9 32.7 11.6 32.4C10.9 31.5 9.9 31.4 9.1 32.2C8.9 32.4 8.7 32.6 8.7 32.9C8.5 33.9 8.8 34.2 9.1 35C9.6 37.3 10.9 39.6 12.5 41.5C13 42 13.5 42.5 14 43C15.2 44.5 17 45.5 18.7 46.5C24.1 49.4 29.7 49.7 35.4 47.4C36 47.2 36.6 46.7 37.2 46.4C39.2 45.2 40.7 43.4 42.1 41.4C42.3 41.1 42.4 40.7 42.6 40.4C44.6 36.6 44.5 31.5 41.8 28.1C40.2 26.1 38.1 24.6 35.3 25.3C34.4 25.6 34 27.1 34.6 27.8C35.5 28.9 36.9 27.9 38.1 29.1C38.4 29.4 38.5 30 38.6 30.4C39 32.7 37.6 35.2 35.2 35.6C28 36.8 26 28.4 29.9 23.6C32.1 20.8 36 19.8 39.4 20.2C40.2 20.3 40.9 20.6 41.7 20.8C42.6 21 43.6 21.3 44.4 21.8C45.7 22.5 46.8 23.4 48 24.3C48.4 24.7 48.7 25.2 49.1 25.6C52 29.1 53 33.8 52.6 38.3C52.6 38.8 52.4 39.2 52.3 39.6C51.9 43.1 49.9 46.8 47.4 49.2C46.6 50 45.7 50.7 44.8 51.4C43.7 52.2 42.2 52.8 40.9 53.4C40.5 53.6 40 53.6 39.6 53.8C38.8 54.1 38 54.6 38 55.6C38 55.8 38.2 56 38.3 56.3C38.8 57.4 40.1 57.2 41.1 56.9C43.7 56 46.2 54.6 48.4 52.8C51.3 50.3 53.4 47.1 54.8 43.6C55 43.2 55 42.7 55.2 42.2C55.2 42 55.4 41.7 55.5 41.5C55.7 40.7 55.7 39.8 55.8 39C56 37.8 56.1 36.6 56.1 35.4C56 34.8 55.9 34.2 55.8 33.5C55.7 32.7 55.7 31.8 55.5 30.9C55.4 30.7 55.2 30.5 55.2 30.3C55 29.8 55 29.3 54.8 28.9C53.7 26.2 52.2 23.8 50.1 21.8C49 20.8 47.8 20 46.5 19.2C40.5 15.7 32 15.8 27.3 21.5C26.5 22.4 26 23.5 25.6 24.5C25.5 24.8 25.3 24.9 25.3 25.2C25.1 25.8 25 26.5 24.9 27.2C24.8 27.6 24.7 28 24.6 28.4C24.6 29.1 24.8 29.9 24.6 30.6C23.6 30.1 23.3 26.6 23.2 25.6C23.1 24.6 23.1 23.6 23.2 22.6C23.3 22.2 23.3 21.9 23.3 21.5C23.4 21.1 23.6 20.8 23.6 20.4C24.4 16.7 26.7 13.5 29.9 11.6C32.5 10.1 35.3 9.4 38.2 9.2C39.3 9.1 40.8 9.4 41.7 9.1C42.9 8.8 43.3 6.8 42.2 6.2C41.1 5.6 36.1 6 34.7 6.2C34.3 6.3 34 6.5 33.7 6.6C29.2 7.5 25.1 10.3 22.6 14.1C21.2 16.3 20.2 19.6 19.9 22.2C19.8 22.8 19.8 23.5 19.8 24.2C19.8 24.9 19.8 25.7 19.9 26.5C20.4 30.9 22.5 35.3 26.4 37.7C27.6 38.4 29.3 39.3 30.8 39.5C31.6 39.6 32.4 39.5 33.3 39.5C35.1 39.5 37.4 38.6 38.9 37.4C39.5 37 39.9 36.2 40.5 35.9ZM51 9.1C50 9.3 49.5 10.1 49.6 11C49.8 11.9 50.6 12.4 51.5 12.3C52.3 12.2 53 11.5 52.9 10.6C52.8 9.6 51.8 9 51 9.1ZM11.9 16.2C11 16.3 10.4 17.1 10.5 17.9C10.5 18.9 11.4 19.6 12.3 19.5C13 19.4 13.9 18.5 13.8 17.7C13.7 16.8 12.8 16.1 11.9 16.2Z"/><g fill="currentColor" stroke="none"><circle cx="46.39" cy="8.61" r="1.63"/><circle cx="9.89" cy="22.67" r="1.62"/><circle cx="9.42" cy="27.98" r="1.63"/><circle cx="34.4" cy="56.37" r="1.62"/></g>'
    },
    {
      id: "toilet-flush-small",
      name: "Small flush (小)",
      quiz: "Flush after a wee",
      category: "toilet",
      aka: ["小 (shō)", "流す 小 (nagasu shō)", "便器洗浄 小 (benki senjō shō)", "half flush", "light flush", "eco flush", "LIGHT FLUSH"],
      looksLike: ["small swirl", "swirl with two arms", "little spiral", "small spiral with dots", "小", "swirl"],
      meaning:
        "A shorter flush with less water: for a wee and a little paper. The standard symbol is a smaller swirl with fewer drops, and buttons and levers usually say 小, 'small'.",
      action: "Use it after a wee. If it doesn't clear everything, press 大 (big) as well.",
      tip: "TOTO's guidance for one of its toilets: small flush for a wee and up to about 3 metres of single-ply paper, big flush for anything more. Measuring is optional.",
      // JIS S 0103 pictogram, traced from the JSEIA standard sheet.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37.9 11.7C36.9 11.8 34.9 12 34 12.3C32.1 13 30.5 13.9 28.9 15.2C28.1 15.9 27.3 16.8 26.8 17.8C26.4 18.4 26 18.9 25.8 19.6C25.6 19.9 25.6 20.3 25.4 20.7C25.3 20.9 25.2 21.1 25.1 21.4C24.4 25.3 25.2 29.1 28.2 31.8C29.4 33 31.8 34 33.5 33.9C34.9 33.8 35.3 31.9 34.4 31C34 30.6 32.3 30.3 31.7 30C30.1 29.2 28.8 27.5 28.6 25.7C28.5 25.2 28.5 24.6 28.5 24C28.5 23.4 28.5 22.7 28.6 22.1C29.1 20.4 30.1 18.8 31.5 17.6C33.5 16 35.7 15.2 38.3 15.2C39 15.2 39.7 15.2 40.3 15.2C40.7 15.3 40.9 15.4 41.2 15.5C41.7 15.7 42.3 15.7 42.7 15.9C45.7 17.2 48 19.8 49.2 22.8C49.3 23 49.5 23.1 49.5 23.3C50 24.4 50.5 26.7 50.5 27.8C50.5 29.3 50.6 30.7 50.5 32.1C49.9 36.8 47.6 40.2 44.3 43.4C43.1 44.5 41.6 45.5 40.1 46.3C39.4 46.7 38.4 47 38 47.8C37.6 48.9 38.5 50.4 39.7 50.2C40.4 50.2 40.9 49.8 41.5 49.5C43.9 48.5 48.4 44.9 49.7 42.7C50.4 41.6 51.2 40.5 51.9 39.3C52.1 39 52.1 38.7 52.2 38.4C52.3 38.2 52.5 38.1 52.6 37.9C52.7 37.5 52.8 37.1 52.9 36.8C52.9 36.5 53.1 36.3 53.2 36.1C53.4 35.5 53.8 34.1 53.9 33.5C53.9 33.1 53.9 32.7 54 32.3C54 31.4 54.2 30.6 54.3 29.8C54.3 28.8 54.1 27.8 54 26.8C53.9 26.5 53.9 26.1 53.9 25.8C53.8 24.7 53 22.5 52.6 21.4C52.5 21.2 52.3 21 52.2 20.8C51.1 18.2 49 15.7 46.6 14.1C46 13.6 45.2 13.2 44.4 12.9C44.1 12.7 43.7 12.7 43.4 12.5C43.2 12.4 43.1 12.3 42.9 12.3C42.2 12.1 41.5 12 40.8 11.9C39.8 11.8 38.9 11.6 37.9 11.7ZM37.9 21.4C37 21.6 35.8 22.7 36.4 23.7C36.9 24.7 37.9 24.9 38.7 25.6C39.9 26.6 40.9 28.9 40.7 30.4C40.5 32.3 39.9 33.9 38.8 35.4C36.7 38.3 33.7 39.3 30.4 39.8C29.3 39.9 28.2 39.9 27.1 39.7C23.2 39.1 20.7 37.7 17.9 35C16.8 33.9 16 32.6 15.2 31.3C14.9 30.8 14.6 29.9 13.9 29.7C12.7 29.2 11.2 30 11.4 31.4C11.5 32.3 12.2 33.1 12.6 33.9C14.7 37.5 18.7 40.8 22.6 42.2C23.4 42.5 24.3 42.8 25 42.9C25.4 43 25.7 43 26 43C26.4 43.1 26.8 43.3 27.1 43.3C28.4 43.5 29.9 43.5 31.1 43.3C31.5 43.2 31.9 43 32.2 43C33.5 42.8 34.7 42.5 35.9 42C41.2 39.7 44.7 34.7 44.1 28.8C43.9 26.3 42.3 23.5 40.1 22.3C39.5 22 38.6 21.2 37.9 21.4Z"/><g fill="currentColor" stroke="none"><circle cx="11.32" cy="20.18" r="1.72"/><circle cx="11.34" cy="25.91" r="1.73"/><circle cx="34.39" cy="50.55" r="1.74"/></g>'
    },
    {
      id: "toilet-lid-open-close",
      name: "Lid open / close (便ふた開閉)",
      category: "toilet",
      aka: ["便ふた開閉 (benfuta kaihei)", "便フタ (benfuta)", "LID OPEN/CLOSE", "toilet lid", "lid"],
      looksLike: ["toilet with curved arrow", "toilet side view", "toilet with lid", "cup with a line and an arrow", "lid going up", "bowl with arrow"],
      meaning:
        "Opens or closes the lid by motor. The standard picture shows the toilet from the side, with the lid half-raised and a curved arrow showing it swing.",
      action:
        "Press once to open, again to close. Many toilets also lift the lid by themselves when you walk in and close it after you leave, so don't be alarmed if it moves on its own: it's being polite, not haunted. You can still open and close it by hand.",
      tip: "Some toilets (TOTO, for one) can be set to flush only once the lid has shut itself, so a short wait after you stand up is normal.",
      // JIS S 0103 pictogram: asymmetric bowl, short seat line, lid raised and floating, curved double arrow.
      svg: '<g stroke-width="2.9"><path d="M18.4 40.1H45.45V55.25H27.9C23.6 53.2 19.6 47.6 18.4 40.1Z"/><path d="M18.3 34.25H35.6M38.2 21L46 34.3"/></g><path stroke-width="1.6" d="M26.6 23.2C29 18.5 33 14 38.2 12.1C41 11.2 44 11.4 46.4 11.8M26.4 15.2V23.4L33.4 18.8M39.4 7.6L46.6 11.8L39.2 15.6"/>'
    },
    {
      id: "toilet-seat-open-close",
      name: "Seat up / down (便座開閉)",
      category: "toilet",
      aka: ["便座開閉 (benza kaihei)", "便座 (benza)", "SEAT OPEN/CLOSE", "seat up", "toilet seat"],
      looksLike: ["toilet with seat raised", "toilet side view with two lines", "toilet with curved arrow", "toilet with seat up", "cup with lines and an arrow", "bowl with arrow"],
      meaning:
        "Lifts or lowers the seat ring by motor, for anyone who wants to stand to wee. In the standard picture the lid is already fully up (the upright line) and the seat is half-raised with a curved arrow.",
      action:
        "Press once to raise the seat, again to lower it. On toilets that open the lid automatically, only the lid lifts by itself: one TOTO manual tells you to raise the seat with this button.",
      tip: "The two pictograms are near-identical twins, which helps nobody. Lid: one slanted line above a flat seat. Seat: a slanted line plus an upright one behind it.",
      // JIS S 0103 pictogram: asymmetric bowl, upright lid, seat raised at an angle, curved double arrow.
      svg: '<g stroke-width="2.9"><path d="M19.6 36.8H47.7V52.1H29.9C24.8 50 20.8 44.2 19.6 36.8Z"/><path d="M48.1 15.3V31.6M28.9 23.3L42.4 30.9"/></g><path stroke-width="1.6" d="M18.9 31C18.6 25 20.2 19.5 23.8 15.8C25.9 13.6 28.3 12.1 30.8 11.3M14.9 24L18.9 31.2L23 24M22.6 11.1L31 11.2L26.6 18"/>'
    },

    // =====================================================================
    // OTHER WASHLET / SHOWER-TOILET CONTROLS
    // =====================================================================
    {
      id: "toilet-water-pressure",
      name: "Water pressure (水勢)",
      category: "toilet",
      aka: ["水勢 (suisei)", "洗浄強さ (senjō tsuyosa)", "強 / 弱 (kyō / jaku)", "PRESSURE", "spray strength"],
      looksLike: ["plus and minus", "minus plus", "- +", "two buttons with plus and minus", "水勢", "strong weak"],
      meaning:
        "Makes the wash spray weaker (−) or stronger (+), usually in five steps. Older panels may have a dial instead, or buttons marked 弱 (weak) and 強 (strong).",
      action:
        "Press − straight away if the spray is too fierce. It only works while a wash is running, and some seats go back to the middle setting after you've finished.",
      tip: "If nothing comes out at all on the weakest setting, turn it up: on low mains pressure some seats can't push the nozzle out.",
      // TOTO prints plain minus and plus keys.
      svg: '<text x="32" y="24" font-size="17">水勢</text><path stroke-width="4.5" d="M11 43H25M39 43H53M46 36V50"/>'
    },
    {
      id: "toilet-nozzle-position",
      name: "Nozzle position (位置)",
      category: "toilet",
      aka: ["位置 (ichi)", "洗浄位置 (senjō ichi)", "ノズル位置 (nozuru ichi)", "前 / 後 (mae / ushiro)", "POSITION", "nozzle position"],
      looksLike: ["up and down triangles", "two triangles", "arrows up and down", "triangles", "▲▼", "front back", "位置"],
      meaning:
        "Moves the spray further forward or further back so it hits the right spot. Usually ▲ ▼ buttons, or 前 (front) and 後 (back), with about five steps. Aim, basically.",
      action:
        "Adjust it while the wash is running until it feels right. Sitting well back on the seat helps the spray line up and splash less.",
      tip: "Not the same as 水勢 (pressure), which changes how hard the water hits, not where.",
      // TOTO prints plain solid up and down triangles.
      svg: '<text x="32" y="24" font-size="17">位置</text><g fill="currentColor" stroke="none"><polygon points="18,34.5 26.5,49.5 9.5,49.5"/><polygon points="46,51.5 37.5,36.5 54.5,36.5"/></g>'
    },
    {
      id: "toilet-water-temperature",
      name: "Water temperature (温水温度)",
      category: "toilet",
      aka: ["温水温度 (onsui ondo)", "温水 (onsui)", "温度 (ondo)", "TEMP", "water temp", "warm water"],
      looksLike: ["drop with a thermometer", "thermometer with a drop", "water drop and thermometer", "thermometer", "温水"],
      meaning:
        "Sets how warm the wash water is, from off to high (roughly 35–40°C). On home seats it's often under a flap, on the back of the remote or in a menu.",
      action:
        "In someone else's loo, best left alone. Water suddenly cold? The little hot-water tank may be used up after a long wash: wait a few minutes. Cold every time? Check power saving (節電) isn't on.",
      tip: "Sliders and menus often just say 切 (off), 低 (low), 中 (medium) and 高 (high).",
      // Traced from TOTO's own remote artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.9 54L36 50.8C35.6 50.8 33.3 51.9 32.5 52.1C32.1 52.2 31.6 52.1 31.2 52.2C30.5 52.3 29.9 52.5 29.2 52.5C28.4 52.5 27.6 52.3 26.8 52.2C26.4 52.1 25.9 52.2 25.4 52.1C23.7 51.6 21.4 50.5 20.3 49.1C19.4 48 18.3 46.2 18 44.7C17.9 44.5 18 44.2 17.9 43.9C17.9 43.5 17.6 43.1 17.6 42.8C17.4 41.8 17.5 40.6 17.5 39.6C17.6 39.1 17.9 38.6 17.9 38.1C18.2 35.9 19.9 32.6 21 30.7C21.5 29.8 22.1 29 22.6 28.1C23.5 26.1 24.7 24.3 25.6 22.2C26.5 20 27.4 17.7 28.1 15.3C28.3 14.7 28.5 13 29 12.9C29.5 13.1 29.4 13.6 29.6 14C30.1 15.3 30.3 16.7 30.8 18C31.6 20 32.4 21.9 33.3 23.9C34 25.7 35.2 27.4 36.1 29.2C36.5 29.9 37.8 32.6 38.4 32.9C38.8 32.6 38.6 31.9 38.6 31.4C38.6 30.7 38.6 29.9 38.7 29.2C38.7 28.6 39 27.4 38.9 26.8C38.7 26 38 25.1 37.6 24.4C36.7 22.7 35.8 20.9 35.1 19.1C34.4 17.4 33.8 15.7 33.3 14C32.9 12.6 32.7 11 31.9 9.8C30.6 7.9 28.7 7.3 26.8 8.9C26.2 9.4 25.4 11.2 25.2 11.9C25.2 12.2 25.2 12.4 25.1 12.6C24.3 15.1 23.5 17.5 22.6 19.9C20.5 25.4 16.8 30 14.9 35.5C14.7 36.1 14.3 37 14.2 37.7C14.1 38.1 14.2 38.5 14.1 38.8C13.9 40.2 14 41.3 14.1 42.7C14.1 43.2 14.1 43.7 14.2 44.1C14.2 44.5 14.4 44.9 14.5 45.3C14.6 45.6 14.6 45.8 14.6 46.1C14.8 46.9 15.2 47.6 15.5 48.3C17.9 53.5 23.3 56 28.8 56C30 56 31.1 56 32.3 55.7C32.7 55.5 33.1 55.6 33.5 55.5C33.8 55.5 34 55.3 34.3 55.2C35.1 55 36.5 54.8 36.9 54ZM44.2 25.9C42.8 26.1 41.2 27.3 40.9 28.8C40.7 30.1 40.9 31.9 40.9 33.3C40.9 36.3 40.9 39.3 40.9 42.3C40.9 43 41.1 45.1 40.8 45.6C40.6 46.1 40.1 46.4 39.7 46.8C39 47.6 38.5 49.2 38.5 50.3C38.5 50.7 38.6 51 38.7 51.4C38.8 51.7 38.8 52 38.9 52.3C39.7 54.5 42.3 56.4 44.7 56C45.9 55.9 46 56 47.2 55.5C49.4 54.4 50.6 52 50.2 49.6C50.2 49.3 50.3 48.9 50.1 48.6C49.9 47.9 49.5 47.1 49 46.5C48.7 46.1 48.2 45.9 48.1 45.4C47.8 44.4 48 42.9 48 41.9C48 39 48 36.1 48 33.3C48 31.9 48.2 30.4 47.9 29.1C47.6 27.7 47 26.7 45.6 26.2C45.1 26 44.7 25.8 44.2 25.9ZM45.8 36.7C45.3 37 43.5 37 43 36.6C42.7 36.1 42.8 35.2 42.8 34.5C42.8 33.2 42.5 29.6 43.1 28.6C43.4 28.2 43.9 28 44.3 27.9C45 27.9 45.7 28.2 45.9 28.9C46.2 29.6 46 33.6 46 34.7C46 35.3 46.2 36.2 45.8 36.7Z"/>'
    },
    {
      id: "toilet-seat-temperature",
      name: "Heated seat / seat temperature (便座温度)",
      category: "toilet",
      aka: ["便座温度 (benza ondo)", "便座 (benza)", "暖房便座 (danbō benza)", "heated seat", "seat warmer"],
      looksLike: ["toilet seat with a thermometer", "oval ring with a thermometer", "seat from above", "doughnut with a thermometer", "toilet seat with heat waves", "便座"],
      meaning:
        "Sets how warm the seat is, from off to high. A warm seat is completely normal in Japan; it isn't broken and nobody has just been sitting there.",
      action:
        "Too hot? Turn it down or to 切 (off). Manufacturers say to switch it off for long sits, and for children or anyone who can't feel heat well, as a warm seat over a long time can cause low-temperature burns.",
      tip: "Seat cold? Power saving (節電) may have switched the heater off; on many seats it warms up again within about a minute of you sitting down.",
      // TOTO: the seat seen from above with a small thermometer.
      svg: '<path stroke-width="3.8" stroke-linecap="butt" d="M49.7 20.4V17Q49.7 10.7 44 10.7H17.4Q10.6 10.7 10.4 18V30Q10.6 43 18 49.5Q23 53.6 30 53.4Q36.5 53.2 40.8 49.6"/><ellipse cx="29.95" cy="32.2" rx="10.25" ry="12.5" stroke-width="3.9"/><g fill="currentColor" stroke="none"><rect x="45.9" y="22.8" width="7.6" height="25" rx="3.8"/><circle cx="49.6" cy="49.6" r="6.3"/></g><rect class="knock" stroke-width="0" x="47.8" y="25.2" width="3.7" height="9.6" rx="1.85"/>'
    },
    {
      id: "toilet-deodoriser",
      name: "Deodoriser (脱臭)",
      category: "toilet",
      aka: ["脱臭 (dasshū)", "パワー脱臭 (pawā dasshū)", "deodorizer", "odour", "smell", "air freshener"],
      looksLike: ["脱臭", "fan", "fan with four blades", "propeller", "writing with a fan", "windmill"],
      meaning:
        "A small fan in the seat pulls air out of the bowl and through a filter to take the smell away. Most seats run it automatically while you sit; パワー脱臭 (power deodorise) is a stronger burst.",
      action:
        "Nothing to do: it switches itself on and off. Press it for an extra blast if the situation calls for one. A faint whirr while you're sitting is just this fan.",
      tip: "It clears the air in the bowl, not the whole room, so it's no substitute for the extractor fan.",
      // TOTO power deodoriser key: a four-blade fan over the label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.8 22.4L29.5 20.2C28.9 19.2 27.8 18.6 27.1 17.7C25.6 15.7 24.6 13.7 23.9 11.4C23.7 11.1 23.8 10.8 23.7 10.5C23.6 10.1 23.4 9.7 23.3 9.2C23.2 8.7 23.4 8.2 23.2 7.7C23.1 7.4 23 7.3 22.7 7.2C22 7.2 21.4 7.8 20.9 8.2C19.7 9.2 16.7 11.9 17 13.6C17.2 14.3 17.7 14.9 18.1 15.6C19.4 17.9 21.5 19.8 23.9 21.1C24.9 21.6 27.9 23 28.8 22.4ZM31.5 19L33.8 19.6C34.6 19.4 36.1 17.5 36.8 16.9C37.3 16.6 37.8 16.2 38.3 15.9C39.7 15.1 41.1 14.5 42.6 14.1C42.9 14 43.1 13.8 43.4 13.8C44 13.7 46.5 13.3 46.9 13.1C47.2 12.3 46.4 11.8 46.1 11.2C45.2 9.8 42.8 7.5 41.2 7.3C40.1 7.1 38.8 8 37.9 8.6C37.5 9 37 9.2 36.6 9.6C34.7 11.3 33.6 13 32.5 15.2C32.1 15.9 31.2 18.3 31.5 19ZM35.2 21.7L34.5 24C34.7 24.7 35.5 25.1 35.9 25.6C37.1 27 37.9 27.9 38.8 29.5C39.6 31.1 40.1 32.8 40.6 34.5C40.8 35.2 40.4 36.1 40.9 36.8C41.7 37.3 42.6 36.5 43.2 36C43.5 35.7 43.9 35.4 44.2 35.1C45 34.4 46.7 32.5 47 31.4C47.2 30.2 46.1 28.9 45.5 28C43.6 25.2 41.6 23.9 38.7 22.5C37.9 22.2 36 21.4 35.2 21.7ZM17.1 31.3C16.9 32.4 19.3 34.6 20.1 35.3C20.8 35.9 21.5 36.8 22.5 37C22.9 37 23.5 37 23.9 36.9C25.2 36.6 27.9 34.4 28.8 33.4C29.6 32.3 30.4 31.2 31.1 30C31.5 29.1 32.9 26.1 32.5 25.3C32.1 25.1 31.8 25.2 31.4 25.1C30.9 25 30.4 24.4 29.8 24.8C29 25.3 28.4 26.3 27.6 27C26.3 28.1 24.6 29 23 29.7C22.3 30 21.6 30.1 20.9 30.3C20.6 30.4 20.3 30.6 19.9 30.6C19 30.8 17.7 30.6 17.1 31.3Z"/><text x="32" y="56" font-size="19">脱臭</text>'
    },
    {
      id: "toilet-power-saving",
      name: "Power saving (節電)",
      category: "toilet",
      aka: ["節電 (setsuden)", "タイマー節電 (taimā setsuden)", "おまかせ節電 (omakase setsuden)", "energy saver", "ECO", "power save"],
      looksLike: ["leaf", "leaf with veins", "outline leaf", "green leaf", "節電", "eco leaf"],
      meaning:
        "Turns the seat and water heaters down or off for hours at a time to save electricity, typically overnight. A green light shows it's on (on TOTO seats, next to a leaf symbol).",
      action:
        "Want a warm seat and warm water? Press it to turn power saving off (the light goes out). Otherwise leave it: everything still works, just a bit more bracing.",
      tip: "Some seats learn when the loo is rarely used and turn the heater off by themselves. TOTO calls this おまかせ節電, roughly 'leave it to us' power saving.",
      // TOTO energy saver: an upright outline leaf with veins, over the label.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.6 30.7C31.2 31.7 30.3 34.2 31 35.3C31.4 35.5 31.7 35.5 32.1 35.5C32.5 35.5 32.8 35.5 33.1 35.1C33.6 34.5 32.9 31.7 33.3 30.8C33.7 30.5 34.4 30.4 34.9 30.2C35.5 30 36.2 29.6 36.8 29.2C38.9 27.9 40.2 25.4 41.1 23.2C41.4 22.5 41.4 21.7 41.5 21C41.6 20.5 41.7 20.1 41.8 19.7C41.9 18.7 41.7 17.7 41.5 16.7C41.5 16.4 41.5 16 41.5 15.7C41.4 15.4 41.3 15.2 41.2 15C40.7 12 38.9 9 36.5 7C35.3 6 33.3 4.3 31.5 4.5C31.1 4.5 30.7 4.8 30.3 5C28.1 6.1 26.4 7.8 24.9 9.8C23.8 11.3 23.2 13.2 22.7 15C22.7 15.3 22.5 15.5 22.5 15.8C22.4 16.1 22.5 16.3 22.5 16.5C22.4 17.1 22.2 17.6 22.2 18.2C22 19.2 22.3 20.1 22.4 21C22.5 21.3 22.4 21.6 22.5 22C22.8 23.6 23.7 25.5 24.7 26.8C25.8 28.2 27.4 29.5 29 30.2C29.5 30.4 30.1 30.5 30.6 30.7ZM33.4 28C33 27.6 33.1 26.9 33.1 26.4C33.1 25.8 32.9 24.7 33.3 24.2C33.5 24 33.8 23.9 34.1 23.7C34.9 23 36.9 22.1 37.1 21C36.5 18.5 34.3 21.5 33.3 21.5C33.1 21.1 33.1 20.5 33.1 20.1C33.1 19.4 32.9 18.4 33.3 17.8C33.8 17.1 35.9 16.2 36.4 15.5C36.9 14.8 36.3 13.8 35.5 13.9C34.6 14.1 34.1 15 33.3 15C32.7 14 33.7 12.1 32.7 11.1C32 10.4 31 11.1 30.8 11.9C30.7 12.6 31 14.6 30.6 15.1C29.9 14.9 29.5 14.3 28.9 14.1C28 13.7 26.9 14.4 27.5 15.4C27.9 16.1 30.4 17.2 30.7 17.9C31 18.4 30.8 19.4 30.8 20C30.8 20.5 30.9 21.2 30.6 21.5C29.7 21.4 29.1 20.4 28.3 20.1C27.6 19.9 26.5 20.4 26.9 21.3C27.3 22.1 29.1 23.1 29.9 23.7C30.2 23.9 30.5 24 30.7 24.3C31 24.8 30.8 25.9 30.8 26.4C30.8 26.9 30.9 27.5 30.7 27.9C30.2 28 29.8 27.8 29.4 27.6C27.6 26.5 26.2 25 25.5 23C25.3 22.4 25 21.9 24.9 21.3C24.5 18.4 24.9 15.1 26.2 12.6C26.6 11.8 27.1 11.2 27.6 10.5C28.3 9.5 30.7 7.2 32 7.1C32.8 7.1 35 8.8 35.5 9.4C35.9 9.8 36.1 10.2 36.4 10.6C39.5 14.3 40.4 21.1 37.3 25.1C37 25.5 36.8 25.9 36.5 26.2C35.9 26.9 34.3 28 33.4 28Z"/><text x="32" y="58" font-size="16">節電</text>'
    },
    {
      id: "toilet-oscillating-wash",
      name: "Oscillating wash (ムーブ)",
      category: "toilet",
      aka: ["ムーブ (mūbu)", "ムーブ洗浄 (mūbu senjō)", "OSCILLATE", "oscillating", "moving wash"],
      looksLike: ["slanted bar with dots and a double arrow", "diagonal line with a dotted line", "nozzle with spray and arrow", "dots with double arrow", "back and forth arrow", "ムーブ"],
      meaning: "Slides the nozzle back and forth while it sprays, so it washes a wider area rather than one spot. Think sprinkler, not jet.",
      action: "Press it during a wash to switch it on, and again to change mode or turn it off. 止 (stop) ends the wash completely.",
      tip: "On TOTO remotes it shares a button with massage (OSCILLATE / PULSATE): each press steps through move, massage, both, then off, with a different beep for each.",
      // Traced from TOTO's own remote artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.3 13.3C8.3 13.5 7.8 14.4 8 15.4C8.1 16.5 8.9 17 10 16.9C11 16.8 11.7 15.7 11.5 14.8C11.4 13.7 10.3 13.2 9.3 13.3ZM19.2 37.6C19.1 37.9 19.1 38.1 19.2 38.4C19.4 38.9 21.1 41.4 21.5 41.7C21.8 41.8 22.1 41.8 22.4 41.7C23 41.4 23.7 40.8 24.3 40.5C25.9 39.5 27.4 38.4 29 37.5C35.1 33.9 40.9 30 46.8 26.4C49 25 51.3 23.7 53.5 22.2C54 21.9 55.6 21.1 55.9 20.6C56 20.4 56 20.1 55.9 19.8C55.7 19.3 54.1 16.8 53.7 16.6C53.5 16.4 53.2 16.4 52.9 16.5C52.2 16.7 51.5 17.3 50.9 17.7C49.8 18.4 48.7 19 47.7 19.7C46.7 20.3 45.7 21 44.7 21.6C42.3 23 40 24.5 37.7 26C34.6 28 31.3 29.9 28.2 31.9C27.6 32.3 27 32.6 26.4 33C24.9 33.9 23.5 34.9 22.1 35.7C21.4 36.1 19.6 37.1 19.2 37.6ZM12.8 18.4C11.8 18.6 11.1 19.3 11.1 20.4C11.1 21.3 12 22.2 13 22.2C14 22.2 14.7 21.2 14.7 20.2C14.7 19.3 13.9 18.2 12.8 18.4ZM16 23.6C15.1 23.7 14.1 24.6 14.2 25.5C14.3 26.5 15.3 27.2 16.3 27.2C17.2 27.2 18.1 26.3 18.1 25.3C18 24.4 17 23.4 16 23.6ZM18.8 28.9C17.8 29.1 17.5 30.3 17.7 31.2C18 32.2 19 32.6 20 32.4C20.9 32.2 21.5 31 21.2 30.1C20.9 29.1 19.8 28.7 18.8 28.9ZM44.6 36.7C44.5 37.2 42.3 38.5 41.7 38.7C41 39.1 40.3 39.6 39.6 40.1C37.9 41.1 36.2 42.2 34.5 43.2C33.8 43.6 32.4 44.8 31.7 44.7C31.3 44.1 31.8 43.1 30.9 42.7C30.6 42.5 29.9 42.5 29.6 42.8C28.8 43.3 27.5 46.5 26.9 47.5C26.5 48.1 25.9 49.1 26.4 49.8C27.4 51 30.2 50.2 31.6 50.2C32.3 50.2 33.1 50.3 33.9 50.2C34.5 50 35 49.2 34.8 48.6C34.5 47.8 33.8 47.8 33.3 47.3C33.6 46.7 35.2 45.9 35.8 45.5C38.2 44.1 40.6 42.5 43 41C43.6 40.7 45.5 39.2 46.1 39.4C46.4 40 45.9 40.8 46.5 41.3C48 42.6 48.8 40.3 49.4 39.2C49.9 38.4 50.3 37.5 50.8 36.6C51.2 36 51.8 35.1 51.3 34.4C50.9 33.7 50.2 33.8 49.4 33.8C47.9 33.8 45.6 33.6 44.1 33.8C43.5 33.9 42.7 34.6 42.8 35.3C43 36.6 44.1 36.1 44.6 36.7Z"/>'
    },
    {
      id: "toilet-pulsating-wash",
      name: "Pulsating / massage wash (マッサージ)",
      category: "toilet",
      aka: ["マッサージ (massāji)", "マッサージ洗浄 (massāji senjō)", "PULSATE", "pulsating", "massage"],
      looksLike: ["slanted bar with two rows of dots", "diagonal line with dots", "nozzle with spray", "dots spraying from a line", "pulsing water", "マッサージ"],
      meaning: "Makes the spray pulse between strong and soft, which some people find more pleasant. Japan has given this a lot of thought.",
      action: "Press it during a rear wash to start the pulsing and again to stop it. 止 (stop) ends the wash.",
      tip: "How strong the pulse feels depends on the pressure setting: big at +, barely noticeable at −.",
      // Traced from TOTO's own remote artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M14.6 22.4C13.7 22.5 13.2 23.3 13.2 24.2C13.2 25.1 14.1 25.8 15 25.7C16.1 25.6 16.4 24.9 16.4 23.9C16.4 23 15.5 22.3 14.6 22.4ZM25 47.1C25.7 47.1 26.4 46.4 27 46.1C28.8 45 30.5 43.8 32.3 42.8C34.5 41.5 36.5 40.1 38.7 38.8C41.4 37.2 44 35.5 46.6 33.9C47.5 33.3 48.4 32.7 49.3 32.1C50.9 31.2 52.4 30.2 53.9 29.3C54.6 28.9 55.5 28.5 55.9 27.8C55.9 27.1 54.1 24.4 53.5 24.2C52.5 24.4 51.5 25.3 50.6 25.9C48.8 26.9 47.2 28 45.4 29.1C41.6 31.4 37.9 33.8 34.1 36.1C32.5 37 31 38.2 29.4 39.1C28.3 39.7 27.3 40.4 26.2 41.1C25.2 41.7 23.7 42.4 22.9 43.2C22.8 43.5 22.7 43.8 22.8 44C23 44.6 24.5 46.9 25 47.1ZM20 24.8C19.2 24.9 18.4 25.7 18.4 26.5C18.4 27.4 19.2 28.3 20.1 28.3C20.9 28.3 21.8 27.4 21.7 26.5C21.7 25.8 20.9 24.7 20 24.8ZM14.7 28.3C13.8 28.3 13.2 28.9 13.2 29.9C13.2 30.7 13.8 31.6 14.8 31.6C15.7 31.6 16.4 30.7 16.4 29.9C16.4 28.9 15.7 28.2 14.7 28.3ZM19.7 30.8C18.8 30.9 18.3 31.9 18.4 32.7C18.5 33.6 19.6 34.1 20.4 34C21.3 33.8 21.7 32.9 21.6 32.1C21.4 31.1 20.6 30.7 19.7 30.8ZM22.8 35.4C22 35.5 21.1 36.3 21.2 37.1C21.3 38 22.1 38.8 23 38.8C23.8 38.8 24.7 37.7 24.6 36.9C24.5 36.1 23.6 35.2 22.8 35.4Z"/><g fill="currentColor" stroke="none"><circle cx="14.88" cy="18.31" r="1.66"/><circle cx="9.59" cy="21.59" r="1.63"/></g>'
    },
    {
      id: "toilet-soft-wide-wash",
      name: "Soft or wide spray (ソフト / ワイド)",
      category: "toilet",
      aka: ["おしりソフト (oshiri sofuto)", "ワイドビデ (waido bide)", "ソフト (sofuto)", "ワイド (waido)", "SOFT", "WIDE", "gentle wash"],
      looksLike: ["three columns of dots", "dotted lines", "small fountain of dots", "lots of dots", "soft spray", "wide spray"],
      meaning:
        "Gentler versions of the two washes: おしりソフト is a softer rear spray that 'wraps round', ワイドビデ a wider, gentler front spray.",
      action: "On TOTO remotes they share a button with the normal washes (labelled おしり / ソフト and ビデ / ワイド): press it again during the wash to switch. Press 止 (stop) to end it.",
      tip: "There's no standard picture for this one, so many remotes just shrug and show the normal rear or bidet pictogram with ソフト (soft) or ワイド (wide) written next to it.",
      // Traced from TOTO's own remote artwork.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 14.1C30.8 14.3 29.6 15.5 29.7 16.7C29.9 17.9 31 19.1 32.2 19C33.3 18.9 34.7 17.6 34.5 16.4C34.4 15.3 33.2 13.9 31.9 14.1ZM22.4 18.1C21.2 18.3 20 19.2 20.1 20.5C20.1 21.7 21.5 22.9 22.6 22.8C23.8 22.8 25 21.6 25 20.4C25 19.3 23.5 17.9 22.4 18.1ZM41.5 18.1C40.4 18.3 39.3 19.3 39.5 20.6C39.6 21.8 40.4 23 41.9 22.8C43.1 22.6 44 21.5 44 20.3C44 19.1 42.9 17.9 41.5 18.1ZM31.7 22.1C30.6 22.3 29.5 23.5 29.8 24.7C30.1 26 31.1 26.8 32.5 26.6C33.6 26.4 34.6 25.1 34.5 24C34.3 22.7 33 21.9 31.7 22.1ZM22.1 26C21.1 26.1 19.8 27.5 20.1 28.6C20.2 28.9 20.4 29.1 20.6 29.4C21.2 30.3 21.9 30.4 22.9 30.4C24 30.4 25.2 28.9 24.9 27.8C24.6 26.6 23.3 25.8 22.1 26ZM41 26C39.7 26.2 39.3 27.6 39.5 28.8C39.8 30.2 41 30.6 42.3 30.4C43.7 30.2 44.1 28.9 44 27.6C43.8 26.2 42.3 25.8 41 26ZM31.6 29.8C30.5 29.9 29.5 31.2 29.8 32.4C30 33.7 31.2 34.5 32.5 34.3C33.8 34.1 34.7 33 34.5 31.7C34.3 30.5 32.7 29.6 31.6 29.8ZM31.8 37.4C30.7 37.6 29.5 39 29.8 40.1C30 41.3 31.1 42.5 32.3 42.3C33.5 42.2 34.6 40.9 34.5 39.7C34.3 38.5 33.1 37.2 31.8 37.4ZM31.9 45.4C30.8 45.6 29.5 46.6 29.7 47.8C30 49.2 30.9 50 32.3 50C33.4 49.9 34.6 48.6 34.5 47.5C34.3 46.2 33.2 45.2 31.9 45.4Z"/>'
    },
    {
      id: "toilet-nozzle-clean",
      name: "Nozzle clean (ノズルきれい / ノズル洗浄)",
      category: "toilet",
      aka: ["ノズルきれい (nozuru kirei)", "ノズル洗浄 (nozuru senjō)", "ノズルそうじ (nozuru sōji)", "WAND CLEAN", "nozzle cleaning"],
      looksLike: ["slanted bar with sparkles", "line with two stars", "nozzle with sparkles", "stick with sparkles", "sparkles", "magic wand"],
      meaning:
        "Rinses the wash nozzle (the 'wand'). Many seats also do this automatically before and after every wash.",
      action:
        "Best left to whoever owns the toilet. If you press it, water trickles from round the nozzle for a few seconds, which is normal. ノズルそうじ (nozzle cleaning) is different: it pushes the nozzle out so it can be wiped by hand.",
      tip: "Water dribbling near the nozzle just before or after a wash is this self-clean, not a leak.",
      // TOTO (Japan): a slanted nozzle with two outline sparkles.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.5 10.7C23.8 10.9 23.6 12.3 23.3 13.7C23.2 14.1 23 14.3 22.9 14.7C22.7 15.6 22.6 16.7 21.9 17.4C21.1 18.2 20.8 18.2 19.8 18.5C19.5 18.7 19.2 18.8 18.8 18.9C18.3 19 17.8 18.9 17.3 19C16 19.2 15.3 20.3 15.5 21.6C15.7 22.6 16.5 23.2 17.6 23.4C18 23.4 18.4 23.4 18.8 23.4C19.1 23.5 19.4 23.7 19.8 23.9C20.6 24.1 21.4 24.4 22 25.1C22.9 26 22.7 26.5 23 27.6C23.1 28 23.3 28.4 23.4 28.8C23.4 29.3 23.4 29.7 23.4 30.1C23.6 31.3 24.9 32.1 26 31.9C27.5 31.6 27.6 31 27.9 29.7C28 29.2 28.3 28.7 28.3 28.2C28.5 27 28.5 25.8 29.4 24.9C29.9 24.4 32.1 23.5 32.7 23.4C33.3 23.4 34 23.5 34.6 23.2C35.3 22.8 36.2 22.1 36.1 21.1C36 19.9 35 19.1 33.8 19C33.4 18.9 33 19 32.6 18.9C32.2 18.9 31.9 18.7 31.6 18.6C30.8 18.2 30.1 18.2 29.5 17.5C28.1 16.1 28.5 10.2 25.5 10.7ZM25.9 15.5C26.2 15.8 26.8 18.5 27.6 19.4C28.3 20.2 30.3 20.8 30.6 21.4C30.2 21.9 29.4 22.1 28.8 22.4C28.2 22.8 27.6 23.2 27.2 23.8C26.8 24.3 26.4 25.2 26.2 25.8C26.1 26.1 26.2 26.4 26.1 26.7C26 26.8 25.9 26.8 25.8 26.9C25 26.6 25.1 25.6 24.9 25C24.7 24.6 24.4 24.2 24.1 23.9C23.8 23.4 23.2 22.9 22.8 22.6C22.2 22.2 21.2 22 20.8 21.4C21.2 20.7 23.3 20.3 24.2 18.9C24.5 18.4 24.8 17.7 25 17.1C25.1 16.6 25 15.5 25.9 15.5ZM17.4 49.4C17.4 50 19.1 52.6 19.6 53C19.8 53.2 20.1 53.3 20.4 53.2C20.9 53.2 22.6 52 23.1 51.6C24.7 50.5 26.4 49.5 28.1 48.5C29 48 29.9 47.4 30.8 46.8C33.8 45 36.8 43.2 39.7 41.3C42 39.8 44.5 38.4 46.9 36.8C48.9 35.5 50.9 34.3 53 33C53.7 32.5 54.9 32.1 55 31.1C55 30.9 55 30.6 54.9 30.3C54.6 29.8 53.3 27.7 52.9 27.5C52.6 27.3 52.3 27.3 52 27.4C51.2 27.6 50.5 28.3 49.8 28.8C47.7 29.9 45.8 31.2 43.8 32.5C41.3 34 38.9 35.6 36.5 37.1C34.7 38.1 33 39.1 31.3 40.2C29.6 41.4 27.8 42.5 26 43.6C23.8 44.9 21.6 46.2 19.5 47.6C18.8 48.1 17.6 48.5 17.4 49.4ZM9.2 38.1C9.6 38.4 9.9 38.3 10.4 38.4C11.1 38.5 12.7 39.2 13.2 39.9C13.4 40.3 13.4 40.7 13.5 41.1C13.6 41.5 13.8 41.9 13.9 42.3C14.1 43.4 14.1 44.4 15.6 44.7C16.7 44.8 17.6 43.6 17.8 42.6C17.9 42 17.8 41.4 17.9 40.7C18.1 40.3 18.4 39.8 18.7 39.5C19.1 39.1 20.5 38.5 21.1 38.4C21.9 38.3 22.8 38.4 23.2 37.5C23.4 37.3 23.4 36.9 23.4 36.6C23.4 34.4 20.1 35 18.8 34C17.8 33.1 18 30.2 16.8 29.2C16.1 28.6 14.9 28.8 14.4 29.4C14.3 29.6 13.5 31.8 13.5 32C13.4 32.5 13.4 32.9 13.1 33.3C12.8 33.7 12.3 34.3 11.8 34.4C11.1 34.6 9.4 34.8 9.1 35.5C8.9 35.9 9 36.4 9 36.9C9 37.3 8.9 37.8 9.2 38.1ZM15.9 32.5C16.2 32.8 16.5 34.4 17 35C17.5 35.6 19 36.1 19.1 36.6C18.9 37.2 18.3 37.2 17.8 37.6C17.4 37.9 17.1 38.2 16.8 38.6C16.3 39.2 16.3 40 15.9 40.4C15.2 40.2 15.2 39.3 14.8 38.8C14.4 38.1 13.8 37.6 13.1 37.3C12.7 37.1 12.4 37 12.4 36.5C12.6 36.2 12.9 36.1 13.3 36C13.9 35.6 14.6 34.9 14.9 34.2C15.2 33.6 15.1 32.8 15.9 32.5Z"/>'
    },

    // =====================================================================
    // PUBLIC TOILETS: WALL BUTTONS, SENSORS, SOUND AND HELP
    // =====================================================================
    {
      id: "toilet-flush-button",
      name: "Flush button on the wall (流す)",
      category: "toilet",
      aka: ["流す (nagasu)", "ながす", "洗浄 (senjō)", "洗浄ボタン (senjō botan)", "便器洗浄 (benki senjō)", "FLUSH", "wash button"],
      looksLike: ["round button", "big round button", "circle on the wall", "silver round button", "流す", "button above the toilet roll"],
      meaning:
        "In many public toilets the flush is a separate button on the side wall. Under the international standard for public loos (ISO 19026, based on a Japanese one) the flush button is round or oval and sits just above the toilet-roll holder.",
      action:
        "Look above the paper holder for the round button marked 流す or 洗浄 and press it. The call-for-help button is at the same height but further back, behind you, and a different shape (often square): not that one.",
      tip: "Some toilets flush when you hold a hand near a sensor, or by themselves when you stand up and walk away. The round button is often there as a backup.",
      svg: '<circle cx="32" cy="32" r="23"/><circle cx="32" cy="32" r="17.5" stroke-width="2"/><text x="32" y="38" font-size="16">流す</text>'
    },
    {
      id: "toilet-flush-sensor",
      name: "Hand-wave flush sensor",
      quiz: "Touch-free flush",
      category: "toilet",
      aka: ["センサー (sensā)", "手をかざす (te o kazasu)", "touchless flush", "sensor flush", "auto flush", "オート洗浄"],
      looksLike: ["hand", "hand with waves", "hand over a sensor", "palm", "wave your hand", "hand and lines"],
      meaning:
        "A touch-free flush: hold your hand close to the small sensor window, usually on the wall or the cistern, and the toilet flushes. Many newer toilets also flush by themselves a few seconds after you stand up and step away.",
      action:
        "Hold your palm a few centimetres in front of the sensor for a second, then move it away; don't keep tapping. If nothing happens, look for a round flush button (流す) nearby.",
      tip: "The sound-masking box (音姫) often works the same way. Wave at that one and you get the sound of running water instead of a flush: harmless, just confusing.",
      svg:
        '<path d="M25 26V13M31 26V10M37 26V11M43 27V15M22 35L14 27" stroke-width="5.5"/>' +
        '<rect x="20" y="22" width="26" height="20" rx="8" fill="currentColor" stroke="none"/>' +
        '<path d="M21 48A13 4.5 0 0 0 45 48M15 53.5A19 6.5 0 0 0 51 53.5" stroke-width="3"/>'
    },
    {
      id: "toilet-sound-masking",
      name: "Sound princess / flushing-sound button (音姫)",
      category: "toilet",
      aka: ["音姫 (otohime)", "擬音 (gion)", "流水音 (ryūsuion)", "Otohime", "sound princess", "privacy sound", "Sound Decorator"],
      looksLike: ["music note", "musical notes", "bird", "speaker", "notes", "音姫", "hand"],
      meaning:
        "Plays the sound of running water for about 25 seconds to cover any noises you'd rather nobody heard. TOTO launched it in 1988 as Otohime, the 'sound princess', because people were flushing again and again to drown out sounds and wasting a lot of water.",
      action:
        "Press the button or hold your hand over the sensor; do it again to keep it going. It doesn't flush anything and stops on its own.",
      tip: "Most common in women's toilets, and some versions mix birdsong in with the water. 音姫 is TOTO's name; LIXIL's version is called Sound Decorator.",
      svg:
        '<ellipse cx="18" cy="47" rx="7.5" ry="6" transform="rotate(-20 18 47)" fill="currentColor" stroke="none"/>' +
        '<ellipse cx="43" cy="41" rx="7.5" ry="6" transform="rotate(-20 43 41)" fill="currentColor" stroke="none"/>' +
        '<path d="M24.5 45V16M49.5 39V10" stroke-width="3.5"/>' +
        '<path d="M24.5 16L49.5 10V18L24.5 24Z" fill="currentColor" stroke-width="2"/>'
    },
    {
      id: "toilet-emergency-call",
      name: "Emergency call button (呼出)",
      quiz: "Call for help",
      category: "toilet",
      color: "red",
      aka: ["呼出 (yobidashi)", "呼出し (yobidashi)", "非常呼出 (hijō yobidashi)", "呼出ボタン", "CALL", "emergency button", "help button", "assistance alarm"],
      looksLike: ["red button", "square red button", "呼出", "square button with writing", "button behind the toilet", "bell", "pull cord"],
      meaning:
        "Calls for help if you're taken ill or fall: it sets off an alarm or a light in a staff room, station office or outside the cubicle. It does not flush. Under ISO 19026 it's a different shape from the round flush button (often square), usually red, and placed level with the flush button but further back.",
      action:
        "Pressed it by mistake? Don't panic and don't keep pressing. Stay put for a minute: if someone knocks or a voice comes over an intercom, say sorry, it was a mistake (すみません、間違えました, sumimasen, machigaemashita). If nobody comes, tell a member of staff on your way out so nobody goes searching for a collapsed person.",
      tip: "You're in good company: in a 2014 TOTO survey of 600 foreign visitors, about 1 in 11 said they'd pressed an emergency button by mistake. Accessible toilets often have a second button or pull cord low down, for someone who has fallen.",
      svg: '<rect x="9" y="12" width="46" height="40" rx="6"/><text x="32" y="39.5" font-size="18">呼出</text>'
    }
  ]);
})();
