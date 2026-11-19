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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M9.4 8.3C9.9 8.3 10.4 8.6 10.7 8.8C10.9 9.1 11 8.8 11.2 9.8C11.3 10.7 11.1 12.8 11.6 14.3C12 15.9 13.1 18 13.9 19.2C14.8 20.5 15.7 21.2 16.9 21.9C18 22.5 19.6 23 20.9 23.1C22.1 23.3 23.2 22.9 24.1 22.6C25.1 22.3 25.8 21.9 26.6 21.4C27.3 20.8 28.2 20.1 28.9 19.1C29.6 18.2 30.3 16.3 30.8 15.7C31.2 15 31.2 15 31.6 15.1C32.1 15.1 32.6 15 33.2 15.8C33.9 16.5 34.6 18.4 35.4 19.4C36.1 20.4 37 21.1 38 21.8C38.9 22.4 40.2 22.9 41.2 23.1C42.3 23.2 43.2 23.2 44.4 22.9C45.5 22.7 46.8 22.1 47.9 21.4C48.9 20.6 49.9 19.4 50.6 18.4C51.4 17.3 51.8 16.7 52.1 15.2C52.5 13.8 52.6 10.7 52.9 9.7C53.1 8.6 53.2 9 53.5 8.8C53.7 8.5 54.2 8.3 54.5 8.3C54.9 8.4 55.5 8.2 55.8 9.1C56 9.9 56.2 11.9 56 13.4C55.8 14.9 55.1 16.8 54.5 18.1C54 19.3 53.6 20 52.9 20.9C52.1 21.9 51 23.1 50 23.9C49.1 24.6 48.2 25.1 47.1 25.6C46.1 26 45 26.2 43.8 26.4C42.5 26.5 41.2 26.5 39.9 26.1C38.5 25.8 36.9 25 35.5 24.1C34.2 23.2 31.9 20.8 31.9 20.8C31.9 20.8 30.5 22.5 29.6 23.2C28.6 24 27.1 24.9 26.1 25.4C25.2 25.9 24.8 26.1 23.6 26.2C22.5 26.4 20.2 26.4 19.1 26.2C17.9 26.1 17.4 25.9 16.6 25.4C15.7 25 14.8 24.8 13.8 23.8C12.7 22.7 10.9 20.6 10.1 19.4C9.2 18.1 9 17.4 8.7 16.1C8.3 14.8 7.9 12.7 7.8 11.6C7.8 10.4 7.8 9.9 8.1 9.3C8.3 8.8 9 8.4 9.4 8.3Z"/><g fill="currentColor" stroke="none"><circle cx="20.2" cy="33.2" r="1.6"/><circle cx="43.7" cy="33.2" r="1.7"/><circle cx="25.4" cy="34.5" r="1.7"/><circle cx="38.5" cy="34.5" r="1.7"/><circle cx="15.4" cy="35.3" r="1.7"/><circle cx="48.6" cy="35.3" r="1.7"/><circle cx="29.3" cy="38.3" r="1.7"/><circle cx="34.6" cy="38.3" r="1.7"/><circle cx="32" cy="43" r="1.7"/><circle cx="32" cy="48.6" r="1.7"/><circle cx="32" cy="54.1" r="1.7"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M36.1 7C36.8 6.8 37.5 6.9 38 7C38.5 7.2 38.2 6.5 39.1 7.7C40.1 8.8 43.5 13.8 43.5 13.8C43.5 13.8 42.7 14.5 42.1 14.8C41.6 15 41 15.2 40 15.3C38.9 15.4 36.8 15.5 35.9 15.3C34.9 15.2 34.9 15.1 34.4 14.7C33.8 14.2 33 13.2 32.8 12.4C32.5 11.6 32.5 10.6 32.8 9.8C33 9.1 33.7 8.2 34.2 7.8C34.8 7.3 35.5 7.1 36.1 7ZM36 17.6C36.8 17.5 38.1 17.6 38.9 17.9C39.6 18.1 40.1 18.7 40.5 19.1C40.9 19.6 41.1 18.6 41.2 20.6C41.4 22.7 41.5 29.1 41.4 31.2C41.2 33.4 40.9 32.7 40.5 33.2C40.2 33.8 39.7 34.1 39.2 34.4C38.8 34.6 40.5 34.7 37.9 34.8C35.2 34.8 27 33.5 23.6 34.8C20.3 36 19.1 41.1 17.9 42.5C16.8 43.8 16.9 42.9 16.4 42.9C16 42.8 15.5 42.6 15.2 42.4C14.8 42.1 14.5 41.8 14.4 41.4C14.3 40.9 13.4 41.4 14.6 39.5C15.7 37.5 20.1 31.2 21.4 29.4C22.8 27.7 21.1 29.1 22.9 28.9C24.8 28.8 32.4 28.6 32.4 28.6C32.4 28.6 32.4 22 32.8 20.2C33.1 18.5 33.7 18.8 34.2 18.4C34.8 17.9 35.3 17.6 36 17.6Z"/><g fill="currentColor" stroke="none"><circle cx="28" cy="39" r="1.6"/><circle cx="43.5" cy="39" r="1.6"/><circle cx="32.9" cy="40.6" r="1.6"/><circle cx="38.5" cy="40.6" r="1.6"/><circle cx="23.4" cy="41.3" r="1.6"/><circle cx="48.1" cy="41.3" r="1.6"/><circle cx="35.7" cy="45.1" r="1.6"/><circle cx="35.7" cy="50.3" r="1.6"/><circle cx="35.7" cy="55.5" r="1.6"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M50.5 17.2C51.6 16.7 51.3 17.1 51.6 17.2C52 17.4 52.4 17.7 52.5 18.1C52.5 18.6 52.9 19 51.9 19.9C50.8 20.8 47.9 22.6 46 23.6C44 24.5 41.7 25.1 40 25.6C38.2 26 39.1 26.1 35.5 26.1C32 26.1 22.6 25.4 18.9 25.6C15.1 25.7 14.2 26.7 12.9 26.8C11.7 26.8 11.7 26 11.4 25.6C11.2 25.3 11.4 25 11.6 24.6C11.8 24.3 11.7 24.1 12.7 23.8C13.6 23.4 15.4 23 17.2 22.9C19.1 22.7 20.8 22.6 23.8 22.6C26.7 22.7 32.4 23.2 35 23.2C37.7 23.2 38 23.1 39.8 22.6C41.5 22.2 43.7 21.4 45.5 20.6C47.2 19.7 49.5 17.8 50.5 17.2ZM50.2 29.4C51.3 29 50.9 29.4 51.1 29.6C51.4 29.8 51.9 30.1 51.9 30.6C51.8 31 52.1 31.5 51 32.1C50 32.8 47.6 33.9 45.6 34.5C43.7 35.2 41.7 35.8 39.4 36C37 36.3 35 36.4 31.8 36C28.5 35.7 23.1 34.2 19.9 33.9C16.8 33.5 14.2 34 12.9 34C11.6 34 12.4 34 12.2 33.9C11.9 33.7 11.5 33.3 11.4 33C11.4 32.6 11.5 32.1 11.7 31.9C11.8 31.6 11.3 31.4 12.4 31.2C13.6 31.1 16.6 30.8 18.6 30.9C20.5 30.9 21.7 31.1 23.9 31.4C26 31.8 28.8 32.9 31.4 33.1C34.1 33.4 37.4 33.4 39.6 33.1C41.9 32.9 43.1 32.4 44.9 31.8C46.6 31.1 49.2 29.7 50.2 29.4ZM12.8 38.5C13.9 38.4 14.9 38.1 18.6 39C22.4 39.8 31.1 42.9 35 43.6C39 44.4 39.9 44 42.4 43.6C44.8 43.3 48.1 41.9 49.5 41.6C51 41.4 50.6 41.8 50.9 42C51.1 42.3 51.4 42.9 51.2 43.4C51.1 43.8 50.9 44.1 50 44.5C49.2 45 47.3 45.5 46 45.9C44.6 46.2 43.7 46.4 42 46.5C40.2 46.7 37.2 46.7 35.4 46.5C33.5 46.4 33.5 46.4 30.8 45.6C28 44.9 21.7 42.6 18.6 41.9C15.6 41.1 13.4 41.6 12.2 41.2C11.1 40.9 11.4 39.8 11.4 39.8C11.4 39.8 11.6 38.7 12.8 38.5Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37.9 6C39.6 5.8 41.3 6 42.1 6.2C43 6.5 42.8 6.7 42.8 7.2C42.8 7.6 43.3 8.5 42.1 8.8C41 9.2 37.5 9.1 35.9 9.3C34.2 9.6 33.6 9.8 32.2 10.3C30.9 10.9 29.1 12 27.9 12.9C26.8 13.9 25.8 15.2 25.1 16.2C24.5 17.3 24.2 17.9 23.9 19.1C23.5 20.4 23.2 22.2 23.1 23.6C22.9 24.9 23.1 26.2 23.2 27.2C23.4 28.3 23.8 29.4 24.1 29.9C24.3 30.3 24.6 30.1 24.6 30.1C24.6 30.1 24.8 27.2 25.1 26.1C25.3 25.1 25.5 24.5 25.9 23.6C26.4 22.8 27 21.9 27.6 21.2C28.1 20.6 28.6 20.1 29.4 19.4C30.3 18.8 31.8 18 32.8 17.6C33.7 17.2 33.8 17.1 35 17.1C36.3 17 38.9 16.9 40.5 17.1C42.1 17.2 43.5 17.8 44.6 18.2C45.8 18.7 46 18.7 47.1 19.6C48.3 20.4 50.3 22 51.4 23.1C52.4 24.3 53 25.3 53.5 26.2C54.1 27.2 54.3 27.4 54.8 28.9C55.2 30.4 55.9 33.1 56 35.2C56.2 37.4 55.8 39.8 55.5 41.5C55.1 43.1 54.7 44 54.1 45.1C53.6 46.3 53 47.4 52.1 48.6C51.2 49.9 49.7 51.5 48.8 52.5C47.8 53.4 47.5 53.5 46.5 54.1C45.6 54.8 44.3 55.5 43.1 56C42 56.5 40.6 57.1 39.9 57.1C39.1 57.2 38.7 56.8 38.5 56.5C38.2 56.3 38.1 56.3 38.1 56C38.1 55.6 37.5 55.2 38.5 54.5C39.4 53.9 42.3 53 43.9 52C45.4 51.1 46.8 49.9 47.9 48.9C48.9 47.8 49.4 47.3 50.1 45.9C50.9 44.4 51.9 42.2 52.4 40.4C52.8 38.5 52.9 36.7 52.8 35C52.6 33.2 52.2 31.3 51.6 29.9C51.1 28.4 50.4 27.2 49.5 26.1C48.6 24.9 47.1 23.6 46.2 22.9C45.4 22.1 45.2 22 44.4 21.6C43.5 21.2 42.3 20.7 41 20.4C39.6 20.2 37.6 20 36.1 20.1C34.7 20.3 33.4 20.8 32.2 21.4C31.1 22.1 30 23.3 29.2 24.4C28.5 25.4 28.1 26.6 27.9 27.8C27.8 28.9 27.8 30 28.1 30.9C28.3 31.9 28.7 32.8 29.2 33.5C29.8 34.3 30.7 34.9 31.2 35.2C31.8 35.6 32 35.7 32.8 35.8C33.5 35.8 34.7 35.8 35.5 35.6C36.2 35.5 36.5 35.3 37 34.9C37.5 34.4 38.2 33.6 38.5 33C38.7 32.3 38.8 31.4 38.8 30.8C38.7 30.1 38.6 29.8 38.4 29.4C38.1 29 37.6 28.5 37 28.4C36.5 28.2 35.7 28.4 35.2 28.2C34.8 28.1 34.7 28 34.5 27.6C34.4 27.3 34.3 26.4 34.5 26.1C34.8 25.7 35.1 25.4 35.8 25.2C36.4 25.1 37.4 25.2 38.1 25.4C38.9 25.6 39.6 25.9 40.2 26.4C40.9 27 41.5 27.5 42.1 28.6C42.8 29.6 43.6 31.4 43.9 33C44.1 34.5 44.1 36.1 43.6 37.8C43.2 39.4 42.2 41.3 41.2 42.6C40.3 44 39 45.1 37.8 46C36.5 47 34.9 47.7 33.5 48.1C32 48.6 30.4 48.9 28.9 49C27.5 49 26.5 49.1 24.6 48.6C22.8 48.2 19.6 46.9 18.1 46.1C16.5 45.4 16 44.9 15.1 44C14.1 43.2 13.2 42.2 12.3 41.2C11.5 40.2 10.8 39.2 10.2 38C9.7 36.9 9 35 8.8 34.1C8.5 33.3 8.7 33.1 8.8 32.8C8.8 32.4 9 32.2 9.2 32C9.5 31.9 9.7 31.7 10.1 31.6C10.4 31.6 10.6 31 11.2 31.9C11.7 32.9 12.8 35.9 13.4 37.1C14.1 38.4 14.3 38.6 15.2 39.5C16 40.4 17.1 41.7 18.4 42.5C19.8 43.4 21.8 44.4 22.9 44.9C24.1 45.4 24.4 45.4 25.6 45.5C26.9 45.7 29.3 45.7 30.6 45.5C32 45.4 32.9 45 34 44.5C35 44.1 35.8 43.7 36.8 42.9C37.7 42 38.8 40.8 39.5 39.6C40.1 38.5 40.5 36.1 40.5 36.1C40.5 36.1 38.7 37.7 37.6 38.2C36.6 38.8 35.3 39.2 34.1 39.5C33 39.7 32.1 39.8 30.8 39.5C29.4 39.1 27.3 38.2 26.1 37.5C24.9 36.8 24.3 36.2 23.6 35.2C22.8 34.3 22.1 33.4 21.4 32C20.8 30.6 20.2 28.4 19.9 26.9C19.7 25.3 19.6 24.4 19.9 22.6C20.1 20.9 20.8 18.1 21.4 16.6C21.9 15 22.5 14.2 23.2 13.2C24 12.3 24.7 11.5 25.6 10.7C26.6 9.8 27.7 9 28.8 8.4C29.8 7.8 30.3 7.5 31.9 7C33.4 6.6 36.1 6.1 37.9 6Z"/><g fill="currentColor" stroke="none"><circle cx="46.4" cy="8.6" r="1.6"/><circle cx="51.2" cy="10.7" r="1.6"/><circle cx="12.1" cy="17.8" r="1.6"/><circle cx="9.9" cy="22.7" r="1.6"/><circle cx="9.4" cy="28" r="1.6"/><circle cx="34.4" cy="56.4" r="1.6"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M37.2 11.8C38.8 11.6 40.6 11.9 41.9 12.1C43.1 12.2 43.8 12.5 44.6 12.9C45.5 13.3 46.3 13.8 47.1 14.4C48 15.1 48.7 15.6 49.6 16.8C50.6 17.9 51.9 20.2 52.6 21.6C53.4 23.1 53.6 24.4 53.9 25.6C54.1 26.8 54.4 27.1 54.2 28.9C54.1 30.6 53.9 33.9 53.1 36.1C52.4 38.4 51.2 40.6 50 42.4C48.7 44.1 47.2 45.6 45.5 46.9C43.9 48.1 41.1 49.7 39.9 50.1C38.6 50.6 38.5 49.9 38.2 49.5C38 49 37.5 48.2 38.4 47.4C39.2 46.5 42.2 45.1 43.5 44C44.9 43 45.4 42.7 46.5 41.2C47.5 39.8 49.1 37.1 49.8 35.5C50.4 34 50.4 33.5 50.5 32C50.7 30.6 50.9 28.8 50.5 27.1C50.2 25.3 49.2 22.7 48.6 21.4C48.1 20 47.7 19.8 47 19.1C46.4 18.3 45.9 17.6 44.8 16.9C43.6 16.3 42 15.4 40.4 15.2C38.8 14.9 36.6 15.1 35.1 15.6C33.6 16 32.4 16.7 31.4 17.6C30.3 18.6 29.3 20 28.9 21.2C28.4 22.5 28.4 24.3 28.4 25.4C28.5 26.4 28.8 26.9 29.1 27.6C29.5 28.2 29.9 28.8 30.8 29.4C31.6 30.1 33.9 30.7 34.5 31.2C35.2 31.8 35 32.2 34.9 32.6C34.7 33.1 34.1 33.7 33.5 33.9C32.9 34 32.1 33.9 31.2 33.5C30.4 33.2 29 32.5 28.1 31.8C27.2 30.9 26.4 29.8 25.9 28.8C25.3 27.7 25.1 26.5 24.9 25.2C24.8 24 25 22.4 25.1 21.4C25.3 20.5 25.3 20.5 25.8 19.6C26.2 18.8 26.9 17.2 28.1 16.1C29.2 14.9 31 13.6 32.5 12.8C34.1 12.1 35.7 11.9 37.2 11.8ZM38 21.4C38.7 21.4 39.7 21.9 40.5 22.6C41.4 23.2 42.5 24.5 43 25.4C43.6 26.4 43.9 27.2 44 28.2C44.2 29.3 44.2 30.8 44 31.9C43.9 33.1 43.5 34.2 43 35.4C42.4 36.5 41.5 37.8 40.6 38.8C39.8 39.7 38.9 40.3 38 40.9C37.2 41.4 36.6 41.8 35.5 42.1C34.3 42.5 32.3 43.1 30.9 43.2C29.6 43.4 28.7 43.5 27.1 43.2C25.6 43 23.5 42.6 21.6 41.8C19.8 40.9 17.4 39.2 16.1 38C14.7 36.9 14.2 36.1 13.4 35C12.7 34 11.9 32.5 11.6 31.9C11.2 31.2 11.4 31.2 11.4 30.9C11.5 30.5 11.8 30.1 12.1 29.9C12.3 29.6 12.4 29.6 12.8 29.6C13.1 29.6 13.7 29.3 14.2 29.9C14.8 30.4 15.5 32 16.2 33C17 34.1 18.1 35.2 18.9 36C19.8 36.9 20.7 37.4 21.6 38C22.6 38.5 23.2 38.9 24.6 39.2C26.1 39.6 28.5 39.9 30.1 39.9C31.8 39.8 33.2 39.3 34.2 39C35.3 38.6 35.9 38.2 36.6 37.6C37.4 37.1 38 36.6 38.6 35.8C39.3 34.9 40.1 33.3 40.5 32.2C40.8 31.2 40.8 30.2 40.8 29.4C40.7 28.5 40.9 28.3 40.1 27.4C39.4 26.4 36.9 24.3 36.4 23.4C35.8 22.6 36.4 22.5 36.6 22.1C36.9 21.8 37.4 21.3 38 21.4Z"/><g fill="currentColor" stroke="none"><circle cx="11.3" cy="20.2" r="1.7"/><circle cx="11.3" cy="25.9" r="1.7"/><circle cx="34.4" cy="50.5" r="1.7"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.2 8.1C28.8 7.9 29.5 8 29.9 8.1C30.2 8.1 30.2 8 30.6 8.4C31.1 8.9 31.7 9 32.5 10.8C33.2 12.5 33.9 16.2 35 18.9C36 21.5 38.3 24.5 39 26.9C39.6 29.2 38.6 33 38.6 33C38.6 33 39.1 34.4 38.1 32.8C37.2 31.1 34.2 25.6 33 23.1C31.7 20.7 31.4 19.6 30.9 17.9C30.3 16.3 29.9 14 29.6 13.2C29.2 12.3 28.9 12.8 28.9 12.8C28.9 12.8 27.4 18.3 25.6 22.1C23.9 26 19.8 33.2 18.4 36C17.1 38.9 17.7 38.2 17.6 39.4C17.4 40.5 17.4 41.5 17.6 42.6C17.7 43.8 18.1 45.2 18.4 46.1C18.8 47.1 19.2 47.8 19.8 48.5C20.3 49.2 20.9 49.8 21.6 50.4C22.4 50.9 23.4 51.4 24.1 51.8C24.8 52.1 24.9 52.1 25.9 52.2C26.8 52.4 28.7 52.6 29.9 52.5C31 52.5 31.7 52.5 32.8 52.1C33.8 51.8 36 50.6 36 50.6L37 54C37 54 36.1 54.7 35.1 55C34.2 55.4 32.6 55.8 31.2 56C29.9 56.1 28.1 56 26.9 56C25.8 55.9 25.3 55.7 24.4 55.5C23.4 55.2 22.1 54.7 21.2 54.2C20.4 53.8 19.6 53.3 18.9 52.8C18.3 52.2 17.9 51.9 17.4 51.1C16.8 50.4 16.1 49.5 15.6 48.4C15 47.2 14.5 45.5 14.2 44.5C14 43.4 14.1 43 14.1 41.9C14.1 40.7 14 39.1 14.2 37.8C14.5 36.4 14.1 36.9 15.6 33.8C17 30.6 21.4 22.9 23.1 19.1C24.8 15.2 25.1 12.3 25.8 10.7C26.4 9 26.3 9.5 26.8 9.1C27.2 8.6 27.7 8.2 28.2 8.1ZM44 25.9C44.6 25.9 45.8 26.2 46.4 26.4C46.9 26.7 47.1 27 47.4 27.4C47.6 27.8 47.8 25.8 48 28.9C48.1 31.9 47.8 42.3 48 45.5C48.3 48.6 49.4 46.8 49.8 47.5C50.1 48.3 50.3 49 50.4 49.8C50.4 50.5 50.4 51.4 50.2 52C50.1 52.7 49.8 53.2 49.4 53.8C48.9 54.3 48.2 55 47.5 55.4C46.7 55.7 45.6 55.9 44.9 56C44.1 56.1 43.5 56.1 42.9 56C42.2 55.8 41.8 55.6 41.2 55.1C40.7 54.7 39.9 54 39.5 53.4C39 52.7 38.7 51.8 38.6 51C38.6 50.1 38.6 49.3 39 48.4C39.4 47.4 40.7 48.7 41 45.5C41.4 42.2 40.8 31.9 41 28.8C41.3 25.6 41.9 27.2 42.4 26.8C42.8 26.3 43.3 26 44 25.9ZM43.9 28.1C44.2 28 44.8 27.9 45.1 28.1C45.5 28.2 45.9 27.6 46 29.1C46.2 30.5 46 36.5 46 36.5C46 36.5 46.1 36.8 45.6 36.9C45.2 36.9 43.9 36.9 43.5 36.9C43 36.8 43 36.5 43 36.5C43 36.5 42.9 30.8 43 29.4C43 28.1 43 28.9 43.1 28.6C43.3 28.4 43.5 28.1 43.9 28.1Z"/>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M22.6 7.2C22.6 7.2 23.2 7.1 23.4 7.8C23.5 8.4 23.4 10 23.8 11.2C24.1 12.5 24.9 14.2 25.4 15.2C26 16.3 26.4 16.8 27.1 17.6C27.7 18.5 29.6 20.1 29.6 20.1L28.6 22.6C28.6 22.6 27.3 22.5 26.2 22.1C25.2 21.8 23.7 21 22.6 20.2C21.4 19.5 20.5 18.6 19.6 17.6C18.6 16.5 17.5 14.6 17.1 13.8C16.8 12.9 16.9 13.2 17.1 12.7C17.4 12.1 17.8 11.2 18.8 10.2C19.7 9.3 22.6 7.2 22.6 7.2ZM40.9 7.2C41.5 7.1 41.8 7.3 42.2 7.5C42.8 7.8 43.2 8.2 43.9 8.8C44.5 9.3 45.4 10.3 46 10.9C46.5 11.6 46.8 12.1 47 12.4C47.1 12.8 47 13.2 47 13.2C47 13.2 44.4 13.4 43.2 13.8C42.1 14.1 40.9 14.6 39.9 15.1C38.8 15.6 38 16 37 16.8C36.1 17.5 34.2 19.6 34.2 19.6L31.6 19.1C31.6 19.1 31.3 19 31.4 18.4C31.6 17.9 31.8 16.7 32.4 15.6C32.9 14.4 33.8 12.8 34.8 11.6C35.8 10.4 37.3 9.1 38.4 8.3C39.4 7.6 40.2 7.4 40.9 7.2ZM35.4 21.6C35.4 21.6 38.2 22.2 39.4 22.8C40.5 23.3 41.6 24 42.5 24.8C43.5 25.5 44.1 26.1 44.9 27.1C45.6 28 46.7 29.6 47 30.6C47.2 31.5 47 31.8 46.5 32.5C46.1 33.3 44.9 34.5 44.1 35.2C43.4 36 42.4 36.7 41.9 37C41.3 37.2 40.9 36.8 40.9 36.8C40.9 36.8 40.8 34.3 40.4 33C40 31.6 39.4 30.1 38.5 28.6C37.5 27.2 34.5 24.1 34.5 24.1L35.4 21.6ZM29.9 24.8L32.6 25.4C32.6 25.4 32.4 27.4 31.8 28.8C31.1 30.1 29.9 32.1 28.9 33.4C27.9 34.6 26.6 35.4 25.8 36C24.9 36.6 24.5 36.8 23.9 37C23.4 37.1 23 37.3 22.2 37C21.5 36.6 20.2 35.5 19.4 34.8C18.7 34 17.9 33.1 17.6 32.5C17.2 32 17.1 31.6 17.1 31.6L17.2 31.1C17.2 31.1 20.6 30.6 21.9 30.2C23.1 29.9 23.9 29.4 24.9 28.9C25.8 28.4 26.6 27.9 27.4 27.2C28.3 26.6 29.9 24.8 29.9 24.8Z"/><text x="32" y="56" font-size="19">脱臭</text>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.4 4.5C32.1 4.3 32 4.4 32.5 4.5C33.1 4.7 33.7 4.9 34.8 5.7C35.8 6.4 37.6 8 38.6 9.2C39.7 10.6 40.3 12 40.9 13.4C41.4 14.9 41.6 16.4 41.8 17.9C41.9 19.3 41.8 20.7 41.5 22.1C41.2 23.4 40.7 24.6 40 25.8C39.2 26.9 37.9 28.4 36.8 29.2C35.6 30.1 33.2 30.8 33.2 30.8C33.2 30.8 33.2 34.3 33.1 35C33.1 35.8 33.1 35.4 32.8 35.5C32.4 35.5 31.6 35.5 31.2 35.5C30.9 35.4 30.9 35.8 30.9 35C30.8 34.3 30.8 30.8 30.8 30.8C30.8 30.8 28.2 29.8 27.1 29.1C26.1 28.5 25.3 27.6 24.6 26.6C23.9 25.7 23.3 24.4 22.9 23.4C22.6 22.3 22.3 21.4 22.2 20.1C22.2 18.9 22.3 16.9 22.6 15.7C22.8 14.4 23.2 13.4 23.6 12.4C23.9 11.5 23.9 11.2 24.8 10.2C25.6 9.1 27.2 7.2 28.4 6.2C29.5 5.3 30.8 4.8 31.4 4.5ZM31.9 7.2C31.9 7.2 33 7.5 33.6 8C34.3 8.4 35.3 9.2 36 10.1C36.8 10.9 37.5 12.2 38 13.2C38.5 14.3 38.9 15.2 39 16.6C39.2 17.9 39.2 20 39 21.2C38.9 22.5 38.6 23 38.1 23.9C37.7 24.7 37 25.8 36.2 26.4C35.5 27.1 34.1 27.7 33.6 27.9C33.1 28.2 33.2 27.9 33.2 27.9L33.2 24.4C33.2 24.4 35.5 22.9 36.1 22.4C36.8 21.9 36.9 21.7 37 21.4C37.2 21.2 37.2 21 37.1 20.8C37.1 20.5 37 20.3 36.8 20.1C36.5 20 36.5 19.7 36 19.9C35.4 20.2 33.4 21.6 33.4 21.6L33.2 17.9C33.2 17.9 36 16 36.5 15.4C37.1 14.9 36.7 14.8 36.6 14.6C36.6 14.3 36.5 14.2 36.2 14.1C36 14 35.6 13.8 35.1 13.9C34.6 14.1 33.2 15.1 33.2 15.1L33.1 11.7L31.9 10.8C31.9 10.8 31.1 10.9 30.9 11.7C30.7 12.4 30.8 15.1 30.8 15.1L28.4 13.8L27.4 14.6C27.4 14.6 27.1 15.1 27.6 15.7C28.2 16.2 30.8 17.9 30.8 17.9L30.6 21.6C30.6 21.6 28.6 20.2 28.1 19.9C27.5 19.7 27.5 20 27.2 20.1C27 20.3 26.8 20.9 26.8 20.9C26.8 20.9 27.1 21.7 27.8 22.2C28.4 22.8 30.8 24.4 30.8 24.4L30.6 27.9C30.6 27.9 28.8 27.3 28.1 26.8C27.4 26.2 26.9 25.6 26.4 24.9C26 24.2 25.6 23.4 25.4 22.6C25.1 21.7 24.9 21 24.9 19.9C24.8 18.9 24.8 17.4 25.1 16.1C25.3 14.9 25.6 13.9 26.2 12.7C26.9 11.4 28.2 9.8 29.1 8.8C30.1 7.9 31.9 7.2 31.9 7.2Z"/><text x="32" y="58" font-size="16">節電</text>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M44 33.9C45.3 33.7 49.5 33.8 50.8 33.9C52 33.9 51.1 34.1 51.2 34.4C51.4 34.6 52 34.2 51.5 35.4C50.9 36.5 48.8 40.3 48 41.4C47.3 42.4 47 41.6 47 41.6L46.2 41.1L46.4 39.5L45.9 39.1C45.9 39.1 35.3 45.7 33.1 47C31 48.4 33 47.5 33 47.5C33 47.5 33.7 47.5 34 47.8C34.4 48 34.9 48.9 34.9 48.9L34 50.1C34 50.1 28.6 50.5 27.4 50.5C26.1 50.4 26.5 50 26.4 49.8C26.2 49.5 25.7 49.8 26.2 48.6C26.8 47.5 29.6 42.8 29.6 42.8L31.2 43L31.6 45C31.6 45 30.4 45.8 32.5 44.5C34.6 43.3 42.2 38.6 44.2 37.2C46.3 35.9 44.8 36.6 44.8 36.6C44.8 36.6 43.8 36.6 43.5 36.4C43.1 36.1 42.8 35.4 42.8 35.4C42.8 35.4 42.8 34.8 43 34.5C43.3 34.3 42.8 34 44 33.9Z"/><polygon fill="currentColor" stroke="none" points="53.5,16.0 18.7,37.7 21.5,42.3 56.4,20.5"/><g fill="currentColor" stroke="none"><circle cx="9.7" cy="15.1" r="1.8"/><circle cx="12.9" cy="20.3" r="1.9"/><circle cx="16.2" cy="25.4" r="1.9"/><circle cx="19.4" cy="30.7" r="1.9"/></g>'
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
      svg: '<polygon fill="currentColor" stroke="none" points="53.7,23.8 22.3,43.4 24.9,47.5 56.3,27.9"/><g fill="currentColor" stroke="none"><circle cx="14.9" cy="18.3" r="1.7"/><circle cx="9.6" cy="21.6" r="1.6"/><circle cx="14.8" cy="24.1" r="1.7"/><circle cx="20.1" cy="26.6" r="1.7"/><circle cx="14.8" cy="29.9" r="1.7"/><circle cx="20" cy="32.4" r="1.7"/><circle cx="22.9" cy="37.1" r="1.7"/></g>'
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
      svg: '<g fill="currentColor" stroke="none"><circle cx="32.1" cy="16.5" r="2.4"/><circle cx="22.5" cy="20.4" r="2.4"/><circle cx="41.7" cy="20.4" r="2.4"/><circle cx="32.1" cy="24.3" r="2.4"/><circle cx="22.5" cy="28.2" r="2.4"/><circle cx="41.7" cy="28.1" r="2.4"/><circle cx="32.1" cy="32" r="2.4"/><circle cx="32.1" cy="39.8" r="2.4"/><circle cx="32.1" cy="47.6" r="2.4"/></g>'
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
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M25.1 10.8C25.5 10.6 25.9 10.6 26.4 10.8C26.8 10.9 27.2 10.9 27.6 11.9C28.1 13 28.6 16 28.9 16.9C29.3 17.9 29.1 17.5 29.6 17.9C30.2 18.2 31.7 18.9 32.5 19.1C33.2 19.2 33.8 19 34.2 19.1C34.7 19.1 35 19.3 35.4 19.6C35.7 19.9 36 20.5 36.1 20.9C36.3 21.2 36.2 21.6 36 21.9C35.9 22.3 35.6 22.6 35.4 22.9C35.1 23.1 35.2 23.2 34.5 23.4C33.7 23.5 31.9 23.6 30.9 23.9C30 24.3 29.5 24.2 28.9 25.4C28.4 26.5 28.1 29.8 27.8 30.9C27.4 31.9 27.5 31.4 27.1 31.6C26.8 31.8 26.3 32 25.9 32C25.4 32 24.7 31.9 24.4 31.6C24 31.4 23.8 31.4 23.6 30.6C23.3 29.7 23.1 27.2 22.9 26.4C22.8 25.5 22.8 25.8 22.4 25.4C22.1 25.1 21.7 24.4 20.8 24.1C19.8 23.7 17.7 23.5 16.9 23.2C16 23 16.1 22.9 15.8 22.6C15.6 22.4 15.5 22.1 15.6 21.6C15.6 21.1 15.8 20.1 16.1 19.6C16.3 19.2 16.8 19.1 17.2 19.1C17.7 19 18.3 19.2 18.9 19.1C19.6 18.9 20.3 18.8 20.9 18.4C21.4 18.1 21.9 18.1 22.4 17.1C22.8 16.2 23.3 13.6 23.6 12.7C23.8 11.7 23.8 11.9 24.1 11.6C24.3 11.2 24.8 10.9 25.1 10.8ZM25.8 15.3L26.1 15.7C26.1 15.7 25.9 16.1 26.1 16.8C26.3 17.4 26.9 18.6 27.4 19.2C27.8 19.9 28.5 20.3 29.1 20.6C29.6 21 30.9 21.4 30.9 21.4L30.9 21.8C30.9 21.8 29.4 22.1 28.8 22.4C28.1 22.8 27.5 23.4 27.1 23.9C26.6 24.5 26.3 25.2 26.1 25.8C26 26.3 25.9 27.2 25.9 27.2C25.9 27.2 24.6 24.5 24.1 23.6C23.5 22.8 23.2 22.7 22.6 22.4C21.9 22 20.4 21.6 20.4 21.6C20.4 21.6 23.1 20.5 23.9 19.4C24.8 18.4 25.8 15.3 25.8 15.3ZM15.3 28.9C15.8 28.8 16.2 28.9 16.6 29.1C16.9 29.2 16.9 28.9 17.2 29.8C17.6 30.6 18.4 33.2 18.8 34C19.1 34.8 18.9 34.4 19.6 34.5C20.2 34.7 21.9 34.9 22.6 35.1C23.2 35.4 23.3 35.8 23.4 36.1C23.6 36.5 23.5 37.2 23.4 37.5C23.2 37.9 23.5 37.8 22.9 38C22.2 38.3 20.1 38.7 19.4 39C18.6 39.2 18.6 39.5 18.4 39.9C18.1 40.2 18 40.3 17.9 40.9C17.8 41.4 17.9 42.4 17.8 43C17.6 43.5 17.4 44 17.1 44.2C16.8 44.5 15.9 44.8 15.9 44.8L14.2 43.9C14.2 43.9 13.7 41.2 13.6 40.5C13.4 39.8 13.3 39.9 13.1 39.6C12.8 39.4 12.8 39.2 12.2 39C11.5 38.7 9.1 38 9.1 38L9.2 35.2C9.2 35.2 11.4 34.8 12.1 34.5C12.7 34.3 12.7 34.4 13.1 33.6C13.4 32.9 13.8 30.7 14.2 29.9C14.5 29.2 14.9 29.1 15.3 28.9ZM15.8 32.4C15.8 32.4 16.4 34.2 16.8 34.9C17.1 35.5 17.8 35.9 18.2 36.1C18.7 36.4 19.2 36.5 19.2 36.5L18.9 37.1C18.9 37.1 18.6 37 18.2 37.2C17.9 37.5 17.1 38 16.8 38.6C16.4 39.2 15.9 40.9 15.9 40.9C15.9 40.9 15.3 39.1 14.7 38.4C14 37.6 12.2 36.6 12.2 36.6C12.2 36.6 13.8 35.9 14.4 35.1C15 34.4 15.8 32.4 15.8 32.4Z"/><polygon fill="currentColor" stroke="none" points="52.8,26.8 16.9,49.2 19.9,53.9 55.7,31.5"/>'
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
