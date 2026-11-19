/* Phones & gadgets (tech) and Packaging & labels (packaging).
 * Recycling symbols live in data/recycling.js.
 * Format and drawing rules: see data/README.md. All symbols are simplified, original drawings
 * for identification purposes (trademarked marks such as CE, UKCA and the Green Dot included). */
WTF.add([
  /* ---------- Phones & gadgets ---------- */
  {
    id: "tech-power",
    name: "Power / standby button",
    category: "tech",
    aka: ["power symbol", "standby", "on/off button", "IEC 5009", "⏻"],
    looksLike: ["circle with a line through the top", "broken circle with a line", "circle with a stick", "lollipop", "o with a line at the top", "c with a line"],
    meaning: "It's the power button. Strictly, the broken circle with a line poking through means \"standby\", so pressing it often sends the device to sleep rather than cutting the power completely.",
    action: "Press once to switch on or wake up. To turn off properly, hold it for a few seconds or use the on-screen menu. Gadget frozen? Holding it for around 10 seconds usually forces it off.",
    tip: "It's a mash-up of binary 1 (on) and 0 (off). Very tidy, if you happen to think in binary. The rest of the family: a plain line | means On, a circle O means Off, a line inside a complete circle means an on/off toggle, and a crescent moon means Sleep.",
    svg: `<g stroke-width="4"><path d="M44.86 18.68A20 20 0 1 1 19.14 18.68"/><line x1="32" y1="8" x2="32" y2="31"/></g>`
  },
  {
    id: "tech-power-switch",
    name: "I and O on a switch",
    quiz: "On / off switch",
    category: "tech",
    aka: ["rocker switch", "on/off switch", "I/O switch", "power switch"],
    looksLike: ["line and circle", "i and o", "1 and 0", "stick and ring", "| o", "switch with a line and a circle"],
    meaning: "I means On and O means Off, from the binary digits 1 and 0. You'll find them on rocker switches on PCs, extension leads, kettles and power supplies.",
    action: "Press the I side to switch on and the O side to switch off. On extension leads the switch usually lights up when it's on.",
    tip: "A switch marked 0, I and II (like on many hair dryers and fans) means off, low and high. II is not \"on twice\".",
    svg: `<rect x="7" y="13" width="50" height="38" rx="7" stroke-width="3"/><line x1="32" y1="13" x2="32" y2="51" stroke-width="2.5"/><line x1="19.5" y1="23" x2="19.5" y2="41" stroke-width="4"/><circle cx="44.5" cy="32" r="8" stroke-width="4"/>`
  },
  {
    id: "tech-bluetooth",
    name: "Bluetooth",
    category: "tech",
    aka: ["BT", "wireless pairing", "Bluetooth rune"],
    looksLike: ["angular b", "pointy b", "b made of triangles", "bow tie with a line", "rune", "arrow b", "x with a line"],
    meaning: "Bluetooth: short-range wireless for headphones, speakers, watches, keyboards and cars. In a phone's status bar it means Bluetooth is on. Extra dots or a little battery next to it mean something is connected.",
    action: "Switch it on or off in Control Centre / Quick Settings. On a gadget, holding the button with this symbol usually starts pairing. A fast-flashing light means it's ready to be found by your phone.",
    tip: "The logo merges two Viking runes, ᚼ (H) and ᛒ (B). They're the initials of Harald Bluetooth, a 10th-century Danish king famous for uniting tribes, just as Bluetooth unites gadgets. On a good day.",
    svg: `<polyline points="18,21 46,43 32,54 32,10 46,21 18,43" stroke-width="4"/>`
  },
  {
    id: "tech-usb",
    name: "USB symbol",
    category: "tech",
    aka: ["USB trident", "USB-A", "universal serial bus", "SS USB", "SuperSpeed"],
    looksLike: ["pitchfork", "trident", "fork with a circle square and triangle", "branching arrow", "tree with a circle and square", "arrow with branches"],
    meaning: "Marks a USB port or cable: the everyday plug for charging and connecting mice, keyboards, memory sticks and drives.",
    action: "Plug USB things in here. \"SS\" (SuperSpeed) next to it means the port is the faster USB 3 kind, so use it for external drives. A battery or lightning-bolt icon beside a port means it can charge your phone, sometimes even while the computer is asleep.",
    tip: "The circle, square and triangle on the branches are said to show that USB connects all kinds of devices. A blue plastic tongue inside a rectangular USB port usually means USB 3.",
    // Proportions of the official USB icon: slim, big base circle, small branch circle and square.
    svg: '<g stroke-width="3"><path d="M32 12V48"/><path d="M32 44.5L24.6 37.3Q23.3 36 23.3 34.3V29.5"/><path d="M32 36.8L39.4 29.4Q40.6 28.2 40.6 26.6V21.6"/></g><g fill="currentColor" stroke="none"><polygon points="32,5 27.4,13 36.6,13"/><circle cx="32" cy="52.6" r="5.4"/><circle cx="23.3" cy="26.1" r="3.4"/><rect x="37.2" y="15.2" width="6.8" height="6.8" rx="0.8"/></g>'
  },
  {
    id: "tech-usb-c",
    name: "USB-C port",
    category: "tech",
    aka: ["Type-C", "USB Type-C", "USB4", "oval port"],
    looksLike: ["rounded oval slot", "pill-shaped hole", "small oval port", "capsule", "rounded rectangle slot", "flat oval with a line"],
    meaning: "USB-C is the small, rounded, reversible plug used by most new phones, laptops and gadgets. The shape is the same everywhere, but what each port can do (charging, fast data, video, Thunderbolt) varies. Every port is a bit of a lucky dip.",
    action: "Look at the little symbol beside the port: a lightning bolt with an arrowhead = Thunderbolt, a D-shaped \"DP\" icon = can send video to a monitor, a battery or plug icon = charging port, a number like 10/20/40 = speed in Gbps. If a monitor or dock doesn't work, try a different port and a better cable.",
    tip: "Cables matter too. Many cheap USB-C cables only charge and copy files slowly, and won't carry video at all.",
    svg: `<rect x="7" y="21" width="50" height="22" rx="11"/><line x1="19" y1="32" x2="45" y2="32" stroke-width="4.5"/>`
  },
  {
    id: "tech-thunderbolt",
    name: "Thunderbolt",
    category: "tech",
    aka: ["Thunderbolt 3", "Thunderbolt 4", "Thunderbolt 5", "TB3", "TB4", "Intel Thunderbolt"],
    looksLike: ["lightning bolt with an arrow", "zigzag arrow", "lightning arrow", "bolt with arrowhead", "zigzag line pointing down"],
    meaning: "This port supports Thunderbolt, a super-fast connection for docks, multiple monitors, fast external drives and graphics boxes. Since Thunderbolt 3 it uses the USB-C shape, so it also works as a normal USB-C port. Same hole, more talent.",
    action: "Plug docks, high-end monitors and fast drives in here for the best results. Use a Thunderbolt cable (it has the same bolt logo) to get full speed.",
    tip: "A plain lightning bolt without the arrowhead next to a port usually means charging, not Thunderbolt, so that little arrowhead is doing a lot of work. On Macs from about 2011–2015, Thunderbolt used the smaller, square Mini DisplayPort shape.",
    // Traced from the official Thunderbolt mark: heavy top, thin shaft, big arrowhead.
    svg: '<polygon fill="currentColor" stroke="none" points="37.1,6 44.8,6 31,25.8 43.1,26 28.3,47.8 32.6,49.9 19.2,57.9 22.1,42.6 25.5,46 35.6,29.7 23.6,29.4"/>'
  },
  {
    id: "tech-hdmi",
    name: "HDMI port",
    quiz: "Picture and sound to a TV",
    category: "tech",
    aka: ["HDMI ARC", "eARC", "mini HDMI", "micro HDMI", "HDMI 2.1"],
    looksLike: ["wide trapezoid slot", "flat port with cut corners", "hdmi", "letters hdmi", "squashed hexagon port"],
    meaning: "HDMI carries picture and sound together from a laptop, console, streaming stick or set-top box to a TV, monitor or projector. One cable, both jobs.",
    action: "Plug the cable in, then press Input or Source on the TV remote and choose the matching number (HDMI 1, HDMI 2…). No picture? Check you're on the right input before blaming the cable.",
    tip: "The port labelled ARC or eARC is the one for a soundbar. It lets the TV send its sound back down the same cable.",
    // Port outline as on Apple's port guide; the letters follow the HDMI logo, not a font.
    svg: '<g transform="translate(0 2)"><polygon points="7,12 57,12 57,21 50,30 14,30 7,21"/><line x1="16" y1="19" x2="48" y2="19" stroke-width="3"/><g fill="currentColor" stroke="none"><polygon points="6.1,41 9.4,41 9.4,44.7 16,44.7 16,41 19.3,41 19.3,49.9 16,49.9 16,46.7 9.4,46.7 9.4,49.9 6.1,49.9"/><polygon points="21,41 32.4,41 33.3,41.4 33.8,41.9 34.2,42.7 34.2,48.1 33.9,48.9 33.2,49.6 32.6,49.9 21,49.9 21,44.7 24.4,44.7 24.4,47.8 30.9,47.8 30.9,43.2 21,43.2"/><polygon points="36,41 50.8,41 51.7,41.4 52.2,41.9 52.6,42.7 52.6,49.9 49.3,49.9 49.3,43.2 46,43.2 46,49.9 42.6,49.9 42.6,43.2 39.3,43.2 39.3,49.9 36,49.9"/><polygon points="54.4,41 57.7,41 57.7,49.9 54.4,49.9"/></g></g>'
  },
  {
    id: "tech-ethernet",
    name: "Ethernet / network port",
    category: "tech",
    aka: ["LAN", "RJ45", "network cable", "wired internet", "Cat 5", "Cat 6"],
    looksLike: ["three squares connected", "boxes joined by lines", "three boxes", "family tree", "square socket with a notch", "squares with lines between"],
    meaning: "The wired network (LAN) socket for an internet cable from your router. It's the chunky square socket with a clip notch, a bit wider than a phone socket, and still the most reliable way online.",
    action: "Plug an Ethernet cable from the router in here for internet that's usually faster and more reliable than Wi-Fi. Great for TVs, consoles and desktop PCs.",
    tip: "The little lights next to the socket should blink when data flows. No lights usually means a dead cable, or the router end isn't plugged in. A phone cable will fit, but it won't work.",
    svg: `<rect x="23" y="9" width="18" height="14" rx="2"/><rect x="7" y="41" width="18" height="14" rx="2"/><rect x="39" y="41" width="18" height="14" rx="2"/><polyline points="32,23 32,32"/><polyline points="16,41 16,32 48,32 48,41"/>`
  },
  {
    id: "tech-headphones",
    name: "Headphone / headset jack",
    category: "tech",
    aka: ["3.5mm jack", "audio jack", "aux", "combo jack", "mic jack", "line out"],
    looksLike: ["headphones", "earmuffs", "headset", "headphones with a microphone", "arch with two blocks", "microphone"],
    meaning: "Marks the 3.5mm socket for wired headphones, which plenty of phones have quietly abolished. A headset icon (headphones with a little microphone) means it's a combo jack that also takes a microphone.",
    action: "Plug headphones in here. On computers with separate sockets, the green one is for headphones/speakers and the pink one (with a microphone icon) is for a microphone. A light-blue socket is line-in.",
    tip: "Headset mic not working in a combo jack? The plug may need four contacts (three black rings). For computers with separate sockets, you need a cheap splitter.",
    svg: `<path d="M13 40V31A19 19 0 0 1 51 31V40"/><rect x="8" y="35" width="11" height="19" rx="4" fill="currentColor" stroke-width="2"/><rect x="45" y="35" width="11" height="19" rx="4" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "tech-wifi",
    name: "Wi-Fi",
    category: "tech",
    aka: ["WiFi", "wireless internet", "WLAN", "Wi-Fi 6", "Wi-Fi 7"],
    looksLike: ["fan", "curved lines", "quarter circle lines", "radar waves", "slice of pizza lines", "rainbow with a dot", "wifi bars"],
    meaning: "You're connected to a Wi-Fi network, and the number of filled arcs shows the signal strength. An ! or ✕ next to it means connected to Wi-Fi but no internet. A padlock (in the network list) means it needs a password. A 6, 6E or 7 means a newer, faster Wi-Fi standard.",
    action: "No internet with an !? Restart your router (unplug it for 30 seconds). Weak signal? Move closer to the router or away from thick walls and microwaves.",
    tip: "\"Wi-Fi\" doesn't actually stand for \"wireless fidelity\". A branding agency invented the catchy name, and the backronym came later.",
    svg: `<g stroke-width="4.5"><path d="M24.93 38.93A10 10 0 0 1 39.07 38.93"/><path d="M17.86 31.86A20 20 0 0 1 46.14 31.86"/><path d="M10.79 24.79A30 30 0 0 1 53.21 24.79"/></g><circle cx="32" cy="46" r="3.5" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-contactless",
    name: "Contactless / NFC",
    category: "tech",
    aka: ["tap to pay", "NFC", "near-field communication", "PayWave", "PayPass", "contactless indicator"],
    looksLike: ["sideways wifi", "four curved lines", "radio waves going right", "brackets getting bigger", "))))", "letter n in the status bar"],
    meaning: "Contactless: tap a card, phone or watch here to pay or scan. On a card it means it can pay by tapping. On a phone it means it has NFC, the tiny radio behind tap-to-pay, transit cards and quick-pairing.",
    action: "Hold your card or phone flat on the symbol on the reader for a second or two until it beeps. On Android, check NFC is switched on in Quick Settings if tapping does nothing.",
    tip: "Some Android phones show a small \"N\" in the status bar when NFC is on. Your bank will occasionally ask for a PIN on a contactless payment. That's a normal security check.",
    svg: `<path d="M14 26A7.5 7.5 0 0 1 14 38M23 21A14.6 14.6 0 0 1 23 43M32 16A21.79 21.79 0 0 1 32 48M41 11A29 29 0 0 1 41 53" stroke-width="4.5"/>`
  },
  {
    id: "tech-airplane-mode",
    name: "Airplane / flight mode",
    category: "tech",
    aka: ["flight mode", "aeroplane mode", "offline mode"],
    looksLike: ["airplane", "aeroplane", "plane", "jet", "plane from above"],
    meaning: "Flight mode is on: the phone's mobile signal is switched off, so no calls, texts or mobile data. Wi-Fi and Bluetooth usually switch off too, but you can turn them back on while staying in flight mode.",
    action: "Didn't mean to? Swipe down to Control Centre / Quick Settings and tap the plane to turn it off.",
    tip: "Turning flight mode on and off again is a quick fix when your phone is stuck with no signal, as it forces it to search for the network afresh. It's the phone's version of turning it off and on again.",
    svg: `<path d="M32 6C34.5 6 36 8.5 36 12V24L56 36V41L36 35V47L43 52V56L32 53L21 56V52L28 47V35L8 41V36L28 24V12C28 8.5 29.5 6 32 6Z" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "tech-do-not-disturb",
    name: "Do Not Disturb / Focus / Sleep (moon)",
    category: "tech",
    aka: ["DND", "Focus mode", "quiet mode", "silent notifications", "sleep"],
    looksLike: ["moon", "crescent moon", "half moon", "banana", "c shape", "crescent"],
    meaning: "On a phone the moon means Do Not Disturb (on iPhone, one of the Focus modes): calls and notifications arrive silently. The moon gets around, though. On a Windows power menu or some PC keyboards it means Sleep, but on newer Mac keyboards (2021 onwards) the moon key switches Do Not Disturb on and off. Next to a chat in Messages, it means you've muted that conversation.",
    action: "Missing calls? Open Control Centre / Quick Settings and tap the moon (or Focus) to switch it off, and check it isn't scheduled to turn on automatically at night.",
    tip: "Many Android phones use a different Do Not Disturb icon: a circle with a horizontal line, like a no-entry sign.",
    svg: `<path d="M30.54 10.05A22 22 0 1 0 53.32 37.39A18 18 0 0 1 30.54 10.05Z" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "tech-hotspot",
    name: "Personal hotspot / tethering",
    category: "tech",
    aka: ["mobile hotspot", "tethering", "personal hotspot", "portable hotspot"],
    looksLike: ["dot with circles around it", "radiating circles", "dot with brackets", "((•))", "broadcast", "chain links", "two loops linked"],
    meaning: "Your phone is sharing its mobile data with other devices over Wi-Fi, acting as a mini router. Android shows a dot with arcs around it. iPhone uses a chain-link icon, plus a coloured bubble around the clock when someone is connected.",
    action: "Don't need it? Turn it off in Quick Settings / Control Centre. It uses your data allowance and drains the battery quickly.",
    tip: "Some phone plans limit or charge extra for hotspot data, even if your normal data is \"unlimited\".",
    svg: `<circle cx="32" cy="34" r="4.5" fill="currentColor" stroke="none"/><g stroke-width="4"><path d="M24.61 42.81A11.5 11.5 0 1 1 39.39 42.81"/><path d="M18.18 50.47A21.5 21.5 0 1 1 45.82 50.47"/></g>`
  },
  {
    id: "tech-roaming",
    name: "Data roaming (R)",
    category: "tech",
    aka: ["roaming", "R icon", "roaming indicator"],
    looksLike: ["letter r", "r next to signal bars", "small r", "r on the triangle", "r with bars"],
    meaning: "Your phone is connected to a network that isn't your own. Usually that's because you're abroad, and sometimes because your provider borrows another network's masts.",
    action: "Check your plan's roaming rules before using lots of data. To avoid surprise bills, turn off Data Roaming in your mobile network settings and use Wi-Fi instead.",
    tip: "Seeing R at home? You haven't wandered abroad by mistake. Some providers piggyback on partner masts in rural areas. It's normally free, but worth checking with them.",
    svg: `<text x="16" y="31" font-size="25">R</text><g fill="currentColor" stroke="none"><rect x="26" y="40" width="6" height="11" rx="1"/><rect x="34.5" y="32" width="6" height="19" rx="1"/><rect x="43" y="24" width="6" height="27" rx="1"/><rect x="51.5" y="16" width="6" height="35" rx="1"/></g>`
  },
  {
    id: "tech-network-type",
    name: "Network letters (E, 3G, H+, 4G, LTE, 5G)",
    quiz: "Type of mobile data connection",
    category: "tech",
    aka: ["LTE", "4G", "4G+", "LTE+", "5G", "5G+", "5G UW", "H+", "E", "EDGE", "G", "GPRS", "3G"],
    looksLike: ["letters next to signal bars", "lte", "4g", "5g", "e", "h+", "3g"],
    meaning: "Shows which kind of mobile data connection you've got. From slowest to fastest: G (GPRS) and E (EDGE) are ancient 2G and very slow; 3G and H/H+ are okay; 4G/LTE is fast; 4G+/LTE+ combines several channels; 5G is the newest.",
    action: "See E or G? The internet will crawl, so move somewhere with better signal or switch to Wi-Fi. Never see 5G? Your phone, plan or area may not support it yet.",
    tip: "In the US, AT&T's old \"5G E\" icon was actually souped-up 4G with a marketing makeover.",
    svg: `<text x="32" y="28" font-size="20">LTE</text><text x="32" y="52" font-size="20">4G+</text>`
  },
  {
    id: "tech-volte",
    name: "VoLTE / HD voice",
    quiz: "HD voice calls over 4G",
    category: "tech",
    aka: ["Voice over LTE", "HD voice", "Vo LTE", "4G calling"],
    looksLike: ["volte", "vo lte", "letters in a box", "hd"],
    meaning: "Your calls are going over the 4G network (Voice over LTE), which means clearer \"HD\" sound, faster connecting and still being able to use data during a call. A phone with a Wi-Fi symbol, or \"Wi-Fi\" next to the carrier name, means Wi-Fi calling.",
    action: "Nothing to do. For once, a status icon with only good news. If calls keep failing, try switching VoLTE / 4G calling off and on in your mobile network settings.",
    tip: "As old 3G networks are switched off, phones that can't do VoLTE may lose the ability to make normal calls on some networks.",
    svg: `<rect x="5" y="19" width="54" height="26" rx="6" stroke-width="3"/><text x="32" y="37.3" font-size="14.5">VoLTE</text>`
  },
  {
    id: "tech-location",
    name: "Location in use (arrow)",
    category: "tech",
    aka: ["location services", "GPS", "navigation arrow", "location arrow"],
    looksLike: ["arrow pointing up right", "paper plane", "cursor arrow", "triangle arrow", "pointer", "pin", "teardrop"],
    meaning: "An app is using your location (GPS). iPhone shows this slanted arrow; Android shows a map pin or a target. Either way, something knows where you are.",
    action: "To see which app it is and stop it, go to Settings › Privacy & Security › Location Services (iPhone) or Settings › Location (Android). Then set apps to \"While Using\" or \"Never\".",
    tip: "In the iPhone Location Services list, a purple arrow means an app used your location recently, grey means within the last 24 hours, and a hollow outline means it may get your location under certain conditions.",
    svg: `<polygon points="53,11 11,28 30,34 36,53" fill="currentColor" stroke-width="3"/>`
  },
  {
    id: "tech-battery-saver",
    name: "Battery saver / Low Power Mode",
    category: "tech",
    aka: ["Low Power Mode", "power saving mode", "battery saver", "yellow battery"],
    looksLike: ["battery with a plus", "yellow battery", "battery with a cross", "orange battery", "battery outline with plus"],
    meaning: "Battery-saving mode is on: the phone cuts background activity, dims things and slows down a little to make the charge last. On iPhone the battery icon turns yellow. Pixel and stock Android show a battery with a plus sign.",
    action: "Leave it on if you're low. To switch it off, tap it in Control Centre / Quick Settings. iPhone switches it off by itself once it's charged past 80%.",
    tip: "A plus inside the battery doesn't mean charging. Charging is shown by a lightning bolt.",
    svg: `<rect x="27" y="7" width="10" height="5" rx="1.5" fill="currentColor" stroke="none"/><rect x="19.5" y="12.5" width="25" height="43" rx="4.5"/><line x1="32" y1="25" x2="32" y2="43"/><line x1="23" y1="34" x2="41" y2="34"/>`
  },
  {
    id: "tech-airplay",
    name: "AirPlay / screen mirroring",
    category: "tech",
    aka: ["AirPlay", "screen mirroring", "stream to TV", "Apple TV"],
    looksLike: ["rectangle with a triangle", "tv with triangle", "screen with arrow", "triangle under a box", "monitor with triangle"],
    meaning: "Apple's AirPlay: beam the video, music or whole screen from your iPhone, iPad or Mac to an Apple TV, AirPlay TV or speaker. A version with circles instead of a rectangle means audio-only AirPlay.",
    action: "Tap it and choose the TV or speaker. Both devices must be on the same Wi-Fi. Sound suddenly vanished from your phone? It may still be playing on another device, possibly to an empty room. Tap here and choose your phone.",
    tip: "Screen Mirroring in iPhone's Control Centre is the icon of two overlapping rectangles.",
    svg: `<path d="M22 46H13A5 5 0 0 1 8 41V15A5 5 0 0 1 13 10H51A5 5 0 0 1 56 15V41A5 5 0 0 1 51 46H42"/><polygon points="32,36 44,52 20,52" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "tech-cast",
    name: "Cast / Chromecast",
    category: "tech",
    aka: ["Google Cast", "Chromecast", "cast to TV", "Google TV"],
    looksLike: ["rectangle with wifi in the corner", "screen with waves", "tv with radio waves", "box with curved lines in corner", "quarter circles in corner"],
    meaning: "The Cast button: send a video or music from an app on your phone or laptop to a Chromecast, Google TV or cast-enabled speaker. When it's filled in, you're currently casting.",
    action: "Tap it and choose your TV or speaker. Your phone and the TV need to be on the same Wi-Fi.",
    tip: "Once it's casting, your phone is just the remote: you can lock it or use other apps and the video keeps playing.",
    svg: `<path d="M8 21V16A4 4 0 0 1 12 12H52A4 4 0 0 1 56 16V48A4 4 0 0 1 52 52H39"/><path d="M8 44.5A7.5 7.5 0 0 1 15.5 52H8Z" fill="currentColor" stroke-width="2"/><path d="M8 36.5A15.5 15.5 0 0 1 23.5 52M8 28.5A23.5 23.5 0 0 1 31.5 52"/>`
  },
  {
    id: "tech-eject",
    name: "Eject",
    category: "tech",
    aka: ["eject button", "open tray", "safely remove"],
    looksLike: ["triangle on a line", "triangle over a bar", "up arrow with line", "house shape", "triangle and rectangle"],
    meaning: "Eject: open a disc tray, or (on a computer) safely disconnect a drive or memory stick. Same triangle, two jobs, one of them mostly retired.",
    action: "Before pulling out a USB stick or memory card on a Mac, click the eject symbol next to it in Finder (or \"Safely Remove\" on Windows) so files finish saving and don't get corrupted.",
    tip: "You'll see the same triangle-on-a-bar on old video and DVD remotes, where it opens the tray.",
    svg: `<polygon points="32,12 53,37 11,37" fill="currentColor" stroke-width="3"/><rect x="11" y="44" width="42" height="7" rx="1.5" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-brightness",
    name: "Screen brightness (sun)",
    category: "tech",
    aka: ["brightness up", "brightness down", "display brightness", "auto-brightness"],
    looksLike: ["sun", "circle with rays", "star with lines", "flower", "sunshine", "circle with spikes"],
    meaning: "Screen brightness. Refreshingly, the sun really does mean light. A small sun usually means dimmer and a big sun brighter, and a sun with an \"A\" means automatic brightness.",
    action: "On a laptop, press the key (sometimes together with Fn) to change brightness. On a phone, use the slider in Control Centre / Quick Settings.",
    tip: "Screen keeps dimming by itself? Auto-brightness or battery saver is probably on.",
    svg: `<circle cx="32" cy="32" r="9" fill="currentColor" stroke-width="2"/><path d="M48 32L55 32M43.31 43.31L48.26 48.26M32 48L32 55M20.69 43.31L15.74 48.26M16 32L9 32M20.69 20.69L15.74 15.74M32 16L32 9M43.31 20.69L48.26 15.74"/>`
  },
  {
    id: "tech-keyboard-backlight",
    name: "Keyboard backlight",
    category: "tech",
    aka: ["keyboard light", "backlit keyboard", "keyboard illumination", "keyboard brightness"],
    looksLike: ["keyboard with rays", "rectangle with rays", "half sun", "sunrise", "box with lines above", "lit up keyboard"],
    meaning: "Turns the light behind the laptop keys on, off or brighter, for typing in the dark. It usually looks like a little keyboard or rectangle with rays shining out of the top.",
    action: "Press it (often together with Fn) repeatedly to cycle through the light levels. On newer Macs you'll also find Keyboard Brightness in Control Centre.",
    tip: "Won't light up in a bright room? It may not be broken. Many laptops have a light sensor that turns the backlight off automatically in daylight.",
    svg: `<rect x="14" y="34" width="36" height="16" rx="3" stroke-width="3"/><g fill="currentColor" stroke="none"><circle cx="20" cy="39.8" r="1.5"/><circle cx="26" cy="39.8" r="1.5"/><circle cx="32" cy="39.8" r="1.5"/><circle cx="38" cy="39.8" r="1.5"/><circle cx="44" cy="39.8" r="1.5"/><circle cx="20" cy="45" r="1.5"/><circle cx="44" cy="45" r="1.5"/></g><line x1="25.5" y1="45" x2="38.5" y2="45" stroke-width="2.5"/><path d="M20.72 29.9L13.21 27.16M25.12 24.17L20.53 17.62M32 22L32 14M38.88 24.17L43.47 17.62M43.28 29.9L50.79 27.16"/>`
  },
  {
    id: "tech-alarm",
    name: "Alarm set",
    category: "tech",
    aka: ["alarm clock", "alarm on", "wake-up alarm"],
    looksLike: ["alarm clock", "clock with ears", "clock with bells", "clock with legs", "mickey mouse clock"],
    meaning: "An alarm is set on your phone. Nothing is ringing; one is just armed and ready.",
    action: "Open the Clock app to see, change or switch off the alarm.",
    tip: "Phone alarms normally still ring even when the phone is on silent or Do Not Disturb. The alarm outranks them both, so you won't sleep through it.",
    // As on the iPhone status bar: solid face, hands knocked out, domed bells, two feet.
    svg: '<circle cx="32" cy="34" r="21.5" fill="currentColor" stroke="none"/><g class="knock" stroke-width="3.4"><line x1="32" y1="21" x2="32" y2="35.3"/><line x1="32" y1="35.3" x2="21" y2="35.3"/></g><path fill="currentColor" stroke="none" transform="translate(16.6 14.3) rotate(-38)" d="M-6.3 0A6.3 6.3 0 0 1 6.3 0Z"/><path fill="currentColor" stroke="none" transform="translate(47.4 14.3) rotate(38)" d="M-6.3 0A6.3 6.3 0 0 1 6.3 0Z"/><path stroke-width="3.4" d="M18 48L13 54.5M46 48L51 54.5"/>'
  },
  {
    id: "tech-vibrate",
    name: "Vibrate mode",
    category: "tech",
    aka: ["vibration", "buzz mode", "silent with vibrate", "meeting mode"],
    looksLike: ["phone with lines either side", "phone with bars on each side", "phone shaking", "phone with zigzag lines", "rectangle with lines either side", "speaker with a zigzag"],
    meaning: "The ringer is off, so the phone will buzz instead of ring for calls and notifications.",
    action: "To get the sound back, press volume up, or tap the sound icon in Quick Settings / the volume panel until it shows a bell.",
    tip: "A bell with a line through it means fully silent (on some phones, not even a buzz).",
    // Pixel and stock Android: a phone with two straight bars either side.
    svg: '<rect x="21.5" y="15.3" width="20.9" height="33.3" rx="3" stroke-width="4"/><circle cx="32" cy="21.5" r="2" fill="currentColor" stroke="none"/><g fill="currentColor" stroke="none"><rect x="13.3" y="21.6" width="4" height="20.7" rx="0.5"/><rect x="7" y="25.8" width="4" height="12.3" rx="0.5"/><rect x="46.7" y="21.6" width="4" height="20.7" rx="0.5"/><rect x="52.9" y="25.8" width="4" height="12.3" rx="0.5"/></g>'
  },
  {
    id: "tech-rotation-lock",
    name: "Rotation lock",
    category: "tech",
    aka: ["portrait orientation lock", "screen rotation lock", "auto-rotate off"],
    looksLike: ["padlock in a circle", "lock with a circular arrow", "padlock with arrow around it", "lock in a circle arrow"],
    meaning: "Your screen is locked the way it's facing, so it won't turn sideways when you rotate the phone or tablet.",
    action: "Want videos to go full-screen sideways? Open Control Centre (iPhone) and tap the padlock-and-arrow button, or switch on Auto-rotate in Android's Quick Settings.",
    tip: "Great for reading in bed on your side. That's exactly why it exists.",
    // As on iPhone: the circular arrow's head sits at 3 o'clock pointing down; the padlock stays upright.
    svg: '<g transform="rotate(120 32 32)"><path d="M37.69 10.75A22 22 0 1 1 17.86 15.15"/><polygon points="23.22,10.65 21.39,19.36 14.32,10.93" fill="currentColor" stroke-width="1.5"/></g><rect x="23" y="30" width="18" height="14" rx="2.5" fill="currentColor" stroke="none"/><path d="M26.5 30.5V26A5.5 5.5 0 0 1 37.5 26V30.5" stroke-width="3"/>'
  },
  {
    id: "tech-sync",
    name: "Sync / refresh",
    category: "tech",
    aka: ["syncing", "refresh", "reload", "auto-sync", "update"],
    looksLike: ["two arrows in a circle", "arrows chasing each other", "circle of arrows", "broken circle with arrows", "spinning arrows"],
    meaning: "Syncing: the app or device is updating itself with the cloud or another device (email, photos, contacts, files). On a web page or in an app, the same idea means refresh / reload.",
    action: "Usually just wait. If it spins forever, check your internet connection, then try closing and reopening the app.",
    tip: "A single curved arrow usually means reload or retry. Two arrows chasing each other usually means sync. They never do catch up.",
    svg: `<path d="M15.09 25.84A18 18 0 0 1 48.91 25.84"/><polygon points="51.31,32.42 44.22,27.55 53.61,24.13" fill="currentColor" stroke-width="1.5"/><g transform="rotate(180 32 32)"><path d="M15.09 25.84A18 18 0 0 1 48.91 25.84"/><polygon points="51.31,32.42 44.22,27.55 53.61,24.13" fill="currentColor" stroke-width="1.5"/></g>`
  },
  {
    id: "tech-hearing-loop",
    name: "Hearing loop / T-coil",
    quiz: "Hearing loop installed",
    category: "tech",
    aka: ["hearing loop", "induction loop", "T-coil", "telecoil", "hearing aid compatible", "HAC", "T setting"],
    looksLike: ["ear with a t", "ear with a line through it and a t", "crossed out ear with a t", "ear with a slash", "ear and letter t", "question mark with t", "ear symbol"],
    meaning: "A hearing loop is installed. Sound from the counter, venue, lift or device goes straight to hearing aids switched to T (telecoil), cutting out background noise.",
    action: "If you wear hearing aids with a telecoil, switch them to the T or \"loop\" programme. If you don't wear hearing aids, you can ignore it.",
    tip: "On a phone box, a T rating (like T3 or T4) means it works with a hearing aid's telecoil, and higher is better. Without the T, the same crossed-out ear is the general symbol for deaf or hard-of-hearing access.",
    // ISO 7001 PI PF 072: an ear, a thick diagonal bar broken where it meets the ear, and a T.
    svg: '<path stroke-width="3" d="M17.4 20.6C17.8 19.8 18.6 17.2 19.8 15.7C21 14.2 23.2 12.7 24.8 11.8C26.4 10.9 27.9 10.6 29.2 10.4C30.5 10.2 31.3 10.3 32.5 10.5C33.7 10.7 35.2 10.8 36.5 11.3C37.8 11.8 38.9 12.3 40.1 13.4C41.3 14.5 42.9 16.3 43.7 17.7C44.6 19.1 44.9 20.3 45.2 21.6C45.5 22.9 45.6 24.1 45.5 25.4C45.4 26.7 45.1 28.2 44.6 29.5C44.1 30.8 43.5 31.4 42.5 33C41.5 34.5 39.5 37.2 38.5 38.8C37.5 40.4 37.1 41 36.6 42.4C36.1 43.8 35.9 46 35.3 47.2C34.7 48.4 33.7 49.1 33 49.6C32.3 50.1 31.7 50.3 30.9 50.4C30.1 50.5 29.3 50.5 28.4 50.3C27.5 50.1 26.1 49.5 25.6 49.3"/><path stroke-width="3" d="M23.6 21.7C24.1 21 25.4 18.6 26.4 17.7C27.4 16.8 28.5 16.6 29.5 16.4C30.5 16.2 31.4 16.2 32.4 16.4C33.4 16.5 34.4 16.9 35.2 17.3C36 17.7 36.5 18.2 37.1 19C37.7 19.8 38.5 20.8 38.9 21.8C39.3 22.8 39.5 23.9 39.5 25C39.5 26.1 39.1 27.6 38.8 28.5C38.5 29.4 37.7 30.2 37.5 30.5"/><g fill="currentColor" stroke="none"><polygon points="6.1,52.1 23.1,35.1 26.6,37.6 30,38.9 11.4,57.4"/><polygon points="45.6,12.6 52.6,5.6 57.9,10.9 49.4,19.6 48.1,16.1"/><polygon points="46.1,45.6 57.3,45.6 57.3,48.7 53.5,48.7 53.5,57.7 50,57.7 50,48.7 46.1,48.7"/></g>'
  },
  {
    id: "tech-sos",
    name: "SOS in the status bar",
    quiz: "Emergency calls only",
    category: "tech",
    aka: ["SOS only", "emergency calls only", "no service"],
    looksLike: ["sos", "letters sos", "sos instead of bars", "sos with four dots", "sos above dots"],
    meaning: "Your phone can't connect to your own network, but it can still make emergency calls using any other network that's available. It isn't an alarm, and nothing has been sent.",
    action: "Move somewhere with better signal, toggle flight mode on and off, or restart the phone. If it lasts, check your SIM and account with your provider. Emergency calls still work.",
    tip: "Android shows \"Emergency calls only\" in the same situation. Newer iPhones may also show a satellite icon where emergency texts by satellite are possible.",
    // As on iPhone: condensed SOS above the four signal dots.
    svg: '<text x="32" y="36" font-size="24" transform="matrix(0.84 0 0 1 5.12 0)">SOS</text><g fill="currentColor" stroke="none"><rect x="15.5" y="42" width="6" height="6" rx="1.4"/><rect x="24.5" y="42" width="6" height="6" rx="1.4"/><rect x="33.5" y="42" width="6" height="6" rx="1.4"/><rect x="42.5" y="42" width="6" height="6" rx="1.4"/></g>'
  },
  {
    id: "tech-camera-in-use",
    name: "Green dot at the top of the screen",
    quiz: "Camera in use",
    category: "tech",
    color: "green",
    aka: ["camera indicator", "privacy indicator", "camera in use", "green dot iPhone", "green dot Android", "green light on my phone"],
    looksLike: ["green dot", "green circle", "small green dot", "green light", "green dot at the top", "green dot iphone", "green dot android"],
    meaning: "An app is using your camera right now (on Android it can also mean the microphone). It's a privacy warning built into iPhone and Android, so nothing can film you without the dot showing up.",
    action: "On a video call or taking photos? That's the reason. If not, swipe down from the top right (Control Centre on iPhone, Quick Settings on Android) to see which app it is, then turn off its camera access in your Privacy settings.",
    tip: "On iPhone, green means the camera (and maybe the microphone along with it), and orange means the microphone only. Android uses green for both.",
    svg: `<circle cx="32" cy="32" r="15" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-mic-in-use",
    name: "Orange dot at the top of the screen",
    quiz: "Microphone in use",
    category: "tech",
    color: "amber",
    aka: ["microphone indicator", "privacy indicator", "mic in use", "orange dot iPhone", "recording indicator"],
    looksLike: ["orange dot", "yellow dot", "orange circle", "small orange dot", "amber dot", "orange dot at the top", "orange dot iphone"],
    meaning: "An app is using your iPhone's microphone right now. It's a privacy warning, so nothing can listen in without the dot appearing.",
    action: "On a call, talking to Siri, dictating or recording a voice note? That's the reason. If not, open Control Centre: the app's name shows at the top. You can switch off its microphone access in Settings › Privacy & Security › Microphone.",
    tip: "With the accessibility setting Differentiate Without Colour switched on, the orange dot becomes an orange square, so it's easier to tell apart from the green one.",
    svg: `<circle cx="32" cy="32" r="15" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-time-bubble",
    name: "Coloured bubble around the time",
    quiz: "Call, recording or directions still running",
    category: "tech",
    aka: ["green bubble around the time", "red bubble around the time", "blue bubble around the time", "status bar pill", "time highlighted"],
    looksLike: ["bubble around the time", "time in a bubble", "pill around the clock", "time in a pill", "clock highlighted", "time in an oval", "pill with a phone", "pill with a record button"],
    meaning: "Something is still running in the background on your iPhone, and tapping the bubble takes you straight back to it. Sometimes the bubble holds a little picture instead of the time, like a phone or a record button. Green means a phone or FaceTime call, or someone using your Personal Hotspot. Red means your screen is being recorded. Blue means turn-by-turn directions are running or an app is using your location.",
    action: "Tap the bubble to see what it is, then end the call, stop the recording or close the directions. Forgot you were screen recording? Tap the red bubble, then Stop.",
    tip: "iPhones with the Dynamic Island (the black pill at the top of the screen) usually show these as little animations in the island instead.",
    svg: `<rect x="5" y="19" width="54" height="26" rx="13" fill="currentColor" stroke="none"/><text x="32" y="38" font-size="15.5" class="knock" stroke-width="0">9:41</text>`
  },
  {
    id: "tech-padlock",
    name: "Padlock at the top of the screen",
    quiz: "Phone is locked",
    category: "tech",
    aka: ["lock icon", "locked", "screen lock", "Face ID lock"],
    looksLike: ["padlock", "lock", "closed padlock", "lock symbol", "open padlock", "padlock at the top"],
    meaning: "Your phone is locked. On iPhone the padlock sits at the top of the Lock Screen and springs open when Face ID or Touch ID recognises you.",
    action: "Nothing to do. Unlock as normal. If the padlock stays shut while you're looking at the phone, Face ID hasn't recognised you: swipe up and enter your passcode.",
    tip: "A padlock inside a circular arrow is something else: that's rotation lock, which stops the screen turning sideways.",
    svg: `<rect x="17" y="29" width="30" height="25" rx="4" fill="currentColor" stroke="none"/><path d="M22.75 29.5V20.75a9.25 9.25 0 0 1 18.5 0V29.5" stroke-width="3.9"/>`
  },
  {
    id: "tech-battery-charging",
    name: "Battery with a lightning bolt",
    quiz: "Battery charging",
    category: "tech",
    aka: ["charging icon", "battery charging", "optimised battery charging", "charging paused", "charge limit"],
    looksLike: ["battery with a lightning bolt", "battery with a zigzag", "green battery", "grey battery with a bolt", "battery with a flash", "battery with lightning"],
    meaning: "Your phone is charging. On iPhone the battery turns green while it charges. If it's grey instead, charging has been paused on purpose.",
    action: "Nothing to do. Stuck at 80%? That's Optimised Battery Charging or a charge limit looking after the battery, and it'll top up later (tap the notification to charge to 100% now). It also pauses if the phone gets too warm. Not charging at all? Try another cable, plug and socket.",
    tip: "A plus sign in the battery isn't charging, that's battery saver. On iPhone, a yellow battery means Low Power Mode is on, and a red one means it's below 20%.",
    svg: `<rect x="5" y="19" width="47" height="26" rx="7" stroke-width="3"/><rect x="54.5" y="27" width="4.5" height="10" rx="2" fill="currentColor" stroke="none"/><rect x="9" y="23" width="39" height="18" rx="3.5" fill="currentColor" stroke="none"/><polygon points="32.5,24 22.5,34 29.5,34 26,40 37,30 30,30 33.5,24" class="knock" stroke-width="1"/>`
  },
  {
    id: "tech-dual-sim",
    name: "Two rows of signal bars",
    quiz: "Signal for two SIMs (Dual SIM)",
    category: "tech",
    aka: ["Dual SIM", "dual cell signals", "eSIM", "two SIMs", "second line"],
    looksLike: ["two rows of bars", "double signal bars", "bars and dots", "signal bars with dots underneath", "bars above dots", "dots under the signal", "two signal icons"],
    meaning: "Your phone has two phone lines (two SIMs, or a SIM and an eSIM), and each row shows the signal for one of them. On iPhone the top row is the line used for mobile data, and the bottom row is your other line.",
    action: "Swipe down to Control Centre or Quick Settings to see which line is which. Don't need the second line? Turn it off in your SIM settings (Settings › Mobile Service on iPhone).",
    tip: "A leftover eSIM from a holiday data plan is a common reason this suddenly appears.",
    svg: `<g fill="currentColor" stroke="none"><rect x="10" y="26" width="8" height="8" rx="2"/><rect x="22" y="21" width="8" height="13" rx="2"/><rect x="34" y="16" width="8" height="18" rx="2"/><rect x="46" y="10" width="8" height="24" rx="2"/><rect x="10" y="40" width="8" height="8" rx="2"/><rect x="22" y="40" width="8" height="8" rx="2"/><rect x="34" y="40" width="8" height="8" rx="2"/><rect x="46" y="40" width="8" height="8" rx="2"/></g>`
  },
  {
    id: "tech-no-signal",
    name: "Circle with a line through it (no signal)",
    quiz: "No mobile signal",
    category: "tech",
    aka: ["no signal", "no service", "no network", "network unavailable"],
    looksLike: ["circle with a line through it", "no entry sign", "crossed out circle", "circle with a slash", "prohibited sign", "ban symbol", "ø"],
    meaning: "Samsung Galaxy phones show this when there's no mobile signal at all, so no calls, texts or mobile data until it comes back. iPhones say \"No Service\" in words instead.",
    action: "Move somewhere with better reception, then switch flight mode on and off. Still nothing? Restart the phone and check the SIM is seated properly. If it lasts for hours, check your network's service status page.",
    tip: "Don't mix it up with a solid circle with a line across the middle. On Android, that one means Do Not Disturb.",
    svg: `<circle cx="32" cy="32" r="21" stroke-width="5"/><line x1="17.2" y1="17.2" x2="46.8" y2="46.8" stroke-width="5" stroke-linecap="butt"/>`
  },
  {
    id: "tech-satellite",
    name: "Satellite icon",
    quiz: "Satellite connection available",
    category: "tech",
    aka: ["Emergency SOS via satellite", "satellite mode", "SAT", "Messages via satellite", "satellite SOS"],
    looksLike: ["satellite", "space station", "satellite with waves", "dumbbell with waves", "satellite with signal", "sat"],
    meaning: "Your phone has no mobile signal, but it can reach a satellite instead. On iPhone 14 and later that means emergency texts, Find My and, in some countries, Messages and Roadside Assistance still work, as long as you're outside with a clear view of the sky.",
    action: "In an emergency, call 999 or 112 as normal. If the call can't connect, the iPhone offers to text emergency services by satellite. Otherwise, carry on until you're back in signal.",
    tip: "\"SAT\" in place of the signal bars is slightly different: your mobile network itself is using a satellite to keep you connected. Some newer Android phones have satellite SOS too.",
    svg: `<g transform="rotate(-45 32 32)"><g fill="currentColor" stroke="none"><rect x="4" y="26" width="15" height="12" rx="2.5"/><rect x="24" y="22" width="16" height="20" rx="3.5"/><rect x="45" y="26" width="15" height="12" rx="2.5"/></g><path d="M19 32h5M40 32h5" stroke-width="3"/><path d="M39.5 45A15 15 0 0 1 24.5 45M42.5 50.2A21 21 0 0 1 21.5 50.2" stroke-width="3.5"/></g>`
  },
  {
    id: "tech-wifi-calling",
    name: "Phone with Wi-Fi waves",
    quiz: "Wi-Fi calling is on",
    category: "tech",
    aka: ["Wi-Fi calling", "VoWiFi", "WiFi call", "Wi-Fi Call"],
    looksLike: ["phone with wifi", "phone with wifi symbol", "handset with waves", "phone with curved lines", "phone with signal", "wifi call"],
    meaning: "Wi-Fi calling is switched on: when mobile signal is weak, calls and texts go over Wi-Fi instead. iPhones don't use a picture for it, just the word \"Wi-Fi\" next to your network's name.",
    action: "Nothing to do. It's handy in homes with poor reception indoors. You can switch it on or off in your phone's call or mobile network settings.",
    tip: "VoLTE or HD next to the signal bars is a different thing: that means calls are going over 4G.",
    svg: `<path d="M4 0H12.5A2 2 0 0 1 14.5 2V8.5A2 2 0 0 1 12.5 10.5H9.5Q6.5 18 9.5 25.5H12.5A2 2 0 0 1 14.5 27.5V34A2 2 0 0 1 12.5 36H4Q-4 18 4 0Z" fill="currentColor" stroke="none" transform="translate(25 39) rotate(-45) scale(1.15) translate(-7 -18)"/><path d="M41.05 21.05A7 7 0 0 1 50.95 21.05M36.1 16.1A14 14 0 0 1 55.9 16.1" stroke-width="3.5"/><circle cx="46" cy="26" r="2.8" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-vpn",
    name: "Key in the status bar (VPN)",
    quiz: "VPN connected",
    category: "tech",
    aka: ["VPN", "virtual private network", "VPN key", "VPN icon"],
    looksLike: ["key", "key icon", "small key", "key at the top", "vpn", "vpn badge"],
    meaning: "You're connected through a VPN (virtual private network), so your internet traffic goes through another server first. Android phones show a key. iPhones show the letters VPN in a box.",
    action: "If you set it up for work, streaming or privacy, all is well. If you didn't, look in your VPN settings to see which app added it, and remove anything you don't recognise.",
    tip: "Some antivirus, ad-blocking and work apps switch on a VPN without much fuss. It can also slow things down or confuse banking apps about where you are.",
    svg: `<circle cx="17" cy="32" r="10" stroke-width="5"/><circle cx="17" cy="32" r="3" fill="currentColor" stroke="none"/><path d="M27 32H57" stroke-width="7" stroke-linecap="butt"/><path d="M45 34V42M54 34V44" stroke-width="5.5" stroke-linecap="butt"/>`
  },
  {
    id: "tech-call-forwarding",
    name: "Phone with an arrow (call forwarding)",
    quiz: "Calls are being forwarded",
    category: "tech",
    aka: ["call forwarding", "call divert", "diverted calls", "forwarding"],
    looksLike: ["phone with an arrow", "phone with arrow pointing right", "handset and arrow", "phone arrow", "telephone with an arrow"],
    meaning: "Call forwarding is on, so incoming calls are sent to another number instead of ringing your phone.",
    action: "Missing calls? Turn it off in the Phone section of Settings on iPhone (Call Forwarding), or in the Phone app's settings on Android.",
    tip: "Scammers sometimes trick people into dialling a short code that forwards all their calls. If you didn't set it up, turn it off and tell your network.",
    svg: `<path d="M4 0H12.5A2 2 0 0 1 14.5 2V8.5A2 2 0 0 1 12.5 10.5H9.5Q6.5 18 9.5 25.5H12.5A2 2 0 0 1 14.5 27.5V34A2 2 0 0 1 12.5 36H4Q-4 18 4 0Z" fill="currentColor" stroke="none" transform="translate(9 10.5) scale(1.2)"/><path d="M32 32H54M46 24L54 32L46 40" stroke-width="4"/>`
  },
  {
    id: "tech-missed-call",
    name: "Phone with a bent arrow (missed call)",
    quiz: "Missed call",
    category: "tech",
    aka: ["missed call", "missed call notification"],
    looksLike: ["phone with a bent arrow", "phone with a v arrow", "phone with an arrow above it", "handset with arrow", "arrow bouncing off a phone", "phone with a v"],
    meaning: "You've missed a call. The arrow goes in and straight back out, because the call never got through to you.",
    action: "Swipe down to see who it was, or open the recent calls in the Phone app. The icon goes once you've looked.",
    tip: "Android shows it with the other notification icons at the top left. iPhones don't use a status icon for this: you get a notification and a red badge on the Phone app instead.",
    svg: `<path d="M4 0H12.5A2 2 0 0 1 14.5 2V8.5A2 2 0 0 1 12.5 10.5H9.5Q6.5 18 9.5 25.5H12.5A2 2 0 0 1 14.5 27.5V34A2 2 0 0 1 12.5 36H4Q-4 18 4 0Z" fill="currentColor" stroke="none" transform="translate(32 46) rotate(90) scale(1.1 1.3) translate(-7 -18)"/><path d="M17 10L31 24L47 8M17 21.5V10H28.5" stroke-width="4"/>`
  },
  {
    id: "tech-silent",
    name: "Bell with a line through it",
    quiz: "Silent mode",
    category: "tech",
    aka: ["silent mode", "mute", "ringer off", "notifications muted", "mute mode"],
    looksLike: ["bell with a line through it", "crossed out bell", "bell with a slash", "no bell", "speaker with a line through it", "muted speaker"],
    meaning: "Your ringer is off, so calls and notifications won't make a sound. On iPhone it still vibrates unless you've turned that off. On Android, a crossed-out bell or speaker usually means no buzzing either.",
    action: "iPhone: flick the switch on the side, or press the Action button on newer models. Android: press a volume button and tap the bell until it rings again.",
    tip: "A phone with zigzag lines either side is vibrate mode: no ringing, but it still buzzes.",
    svg: `<circle cx="32" cy="10" r="2.6" fill="currentColor" stroke="none"/><path d="M32 12.5C24 12.5 20 18.5 20 26V37L15 44H49L44 37V26C44 18.5 40 12.5 32 12.5Z" fill="currentColor" stroke-width="2"/><path d="M27 48.5a5 5 0 0 0 10 0Z" fill="currentColor" stroke-width="1.5"/><line x1="12.5" y1="9" x2="53" y2="56" class="knock" stroke-width="9"/><line x1="12.5" y1="9" x2="53" y2="56" stroke-width="3.5"/>`
  },
  {
    id: "tech-dnd-android",
    name: "Circle with a line across the middle",
    quiz: "Do Not Disturb (Android)",
    category: "tech",
    aka: ["Do Not Disturb", "DND", "Modes", "Samsung Do Not Disturb", "Pixel Do Not Disturb"],
    looksLike: ["circle with a line across", "minus in a circle", "no entry sign", "circle with a dash", "dash in a circle", "filled circle with a white line", "stop sign"],
    meaning: "Do Not Disturb is on, so most calls and notifications arrive silently. It's the Android version of the iPhone's moon.",
    action: "Swipe down from the top and tap Do Not Disturb to switch it off. If it keeps coming back, check for a schedule (bedtime, for example) in your phone's Do Not Disturb or Modes settings.",
    tip: "You can let favourite contacts, alarms and repeat callers through, so not everything goes quiet.",
    svg: `<circle cx="32" cy="32" r="23" fill="currentColor" stroke="none"/><rect x="18" y="28.5" width="28" height="7" rx="2" class="knock" stroke-width="0"/>`
  },
  {
    id: "tech-wifi-no-internet",
    name: "Wi-Fi with an exclamation mark",
    quiz: "Wi-Fi connected but no internet",
    category: "tech",
    aka: ["no internet", "Wi-Fi no internet", "limited connectivity", "connected, no internet"],
    looksLike: ["wifi with exclamation mark", "wifi with !", "fan with exclamation mark", "wifi warning", "wifi symbol with exclamation", "curved lines with exclamation mark"],
    meaning: "Your phone is connected to the Wi-Fi network, but that network can't reach the internet. The problem is usually the router or broadband, not your phone.",
    action: "Restart the router: switch it off at the wall, wait 30 seconds, switch it back on. On public Wi-Fi, open a web page, as you may need to accept terms on a sign-in page first. In the meantime, turn Wi-Fi off to use mobile data.",
    tip: "If other devices on the same Wi-Fi are struggling too, that confirms it's the broadband and not your phone.",
    svg: `<g transform="translate(-5 0)"><g stroke-width="4.5"><path d="M24.93 38.93A10 10 0 0 1 39.07 38.93"/><path d="M17.86 31.86A20 20 0 0 1 46.14 31.86"/><path d="M10.79 24.79A30 30 0 0 1 53.21 24.79"/></g><circle cx="32" cy="46" r="3.5" fill="currentColor" stroke="none"/></g><line x1="56" y1="22" x2="56" y2="38" stroke-width="5"/><circle cx="56" cy="46" r="3" fill="currentColor" stroke="none"/>`
  },
  {
    id: "tech-data-arrows",
    name: "Up and down arrows (mobile data)",
    quiz: "Mobile data in use",
    category: "tech",
    aka: ["mobile data", "data arrows", "data activity", "upload and download arrows", "cellular data"],
    looksLike: ["up and down arrows", "two arrows", "arrows next to the signal", "arrows under 4g", "arrow up arrow down", "two little arrows", "⇵", "⇅"],
    meaning: "Mobile data is switched on. On Samsung and other Android phones, little arrows under the 4G or 5G letters light up when data is being downloaded (down arrow) or uploaded (up arrow).",
    action: "Nothing to do. Worried about your data allowance? Connect to Wi-Fi, or switch mobile data off in Quick Settings.",
    tip: "The same arrows next to the Wi-Fi symbol show data moving over Wi-Fi instead.",
    svg: `<path d="M22 9V52M13 43L22 52L31 43" stroke-width="4"/><path d="M42 55V12M33 21L42 12L51 21" stroke-width="4"/>`
  },
  {
    id: "tech-data-saver",
    name: "Broken triangle with arrows inside (Data Saver)",
    quiz: "Data Saver is on",
    category: "tech",
    aka: ["Data Saver", "data saving mode", "Samsung Data Saver", "background data restricted"],
    looksLike: ["triangle with arrows inside", "recycling triangle", "broken triangle", "triangle with up and down arrows", "triangle corners", "recycling symbol"],
    meaning: "Data Saver is on: to save your mobile data allowance, most apps can't use data in the background, and pictures and videos may load more slowly. Samsung Galaxy phones show it as this triangle.",
    action: "Low on data this month? Leave it on. Apps not updating or messages arriving late? Turn it off in Quick Settings or Settings › Connections › Data usage.",
    tip: "Despite appearances, it isn't a recycling symbol. Nothing on your phone is being recycled.",
    svg: `<path d="M23.25 23.4L32 8L40.75 23.4M15.75 37.6L7 52.5H24.5M39.5 52.5H57L48.25 37.6" stroke-width="4"/><path d="M27.5 32V47M23 42.5L27.5 47L32 42.5" stroke-width="3"/><path d="M36.5 47V32M32 36.5L36.5 32L41 36.5" stroke-width="3"/>`
  },
  {
    id: "tech-tty",
    name: "Phone handset over a keyboard (TTY)",
    quiz: "Text phone mode (TTY / RTT)",
    category: "tech",
    aka: ["TTY", "RTT", "real-time text", "text telephone", "teletypewriter"],
    looksLike: ["phone over a keyboard", "telephone with a keyboard", "phone and keyboard", "handset above a keyboard", "typewriter phone", "old phone with a keypad"],
    meaning: "TTY or RTT (real-time text) is switched on. It's an accessibility feature for people who are deaf, hard of hearing or speech-impaired, letting them type during a phone call.",
    action: "Need it? All good. If not, switch it off in Settings › Accessibility › RTT/TTY on iPhone, or in the Phone app's accessibility settings on Android. It's sometimes switched on by accident.",
    tip: "TTY stands for teletypewriter, from the days when this meant a chunky typing machine plugged into a landline.",
    svg: `<path d="M4 0H12.5A2 2 0 0 1 14.5 2V8.5A2 2 0 0 1 12.5 10.5H9.5Q6.5 18 9.5 25.5H12.5A2 2 0 0 1 14.5 27.5V34A2 2 0 0 1 12.5 36H4Q-4 18 4 0Z" fill="currentColor" stroke="none" transform="translate(32 17) rotate(90) scale(1.45 1.45) translate(-7 -18)"/><g fill="currentColor" stroke="none"><rect x="8" y="34" width="9" height="9" rx="2.5"/><rect x="21" y="34" width="9" height="9" rx="2.5"/><rect x="34" y="34" width="9" height="9" rx="2.5"/><rect x="47" y="34" width="9" height="9" rx="2.5"/><rect x="8" y="47" width="9" height="9" rx="2.5"/><rect x="21" y="47" width="22" height="9" rx="2.5"/><rect x="47" y="47" width="9" height="9" rx="2.5"/></g>`
  },
  {
    id: "tech-carplay",
    name: "Play button in a C (CarPlay)",
    quiz: "Connected to CarPlay",
    category: "tech",
    aka: ["CarPlay", "Apple CarPlay", "wireless CarPlay"],
    looksLike: ["play button in a circle", "triangle in a circle", "circle with a gap and a triangle", "play symbol", "open circle with a play button"],
    meaning: "Your iPhone is connected to CarPlay, so the car's screen is showing your phone's apps for maps, music and calls.",
    action: "Nothing to do. Don't want it connecting to a particular car? Go to Settings › General › CarPlay, tap the car and choose Forget This Car.",
    tip: "Android phones have Android Auto, which does the same job.",
    svg: `<path d="M48.09 18.5A21 21 0 1 0 48.09 45.5" stroke-width="4.5"/><polygon points="27,22 27,42 43,32" fill="currentColor" stroke-width="3"/>`
  },

  /* ---------- Packaging & labels ---------- */
  {
    id: "packaging-pao",
    name: "Period after opening (open jar)",
    category: "packaging",
    aka: ["PAO", "period after opening", "12M", "6M", "24M", "use within months", "open jar symbol"],
    looksLike: ["open jar", "jar with lid open", "pot with lid tilted", "tub with 12m", "jar with a number and m", "open box with number"],
    meaning: "How many months a cosmetic or toiletry stays good once you've opened it (12M means 12 months). That's why the jar on the symbol has its lid open.",
    action: "Make a note when you open it and replace it after that time, or sooner if it smells, separates or changes texture. Be strict with eye products like mascara.",
    tip: "An hourglass symbol with a date means \"best before\". It's used for cosmetics that last less than 30 months even unopened.",
    // Traced from the period-after-opening symbol (open jar).
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M46 6C47.4 5.5 46.5 5.5 47 6.2C47.6 7 49.5 10.7 49.5 10.7C49.5 10.7 48.5 12.1 46.4 13.7C44.2 15.2 40.1 18 36.9 20.1C33.6 22.1 30.1 24.1 26.9 25.8C23.8 27.4 20.1 29.2 17.9 30.2C15.6 31.3 14.2 31.7 13.3 31.9C12.5 32.2 12.8 31.9 12.8 31.9C12.8 31.9 10.6 28.4 10.2 27.6C9.9 26.7 10.2 27 10.6 26.6C10.9 26.1 10.7 26.2 12.2 25.1C13.6 24.1 16.5 22.1 19.4 20.2C22.2 18.4 26.3 16 29.6 14.2C32.8 12.3 35.9 10.6 38.6 9.2C41.4 7.9 44.6 6.5 46 6ZM45.5 7C45.5 7 45.2 7.8 42.6 9.6C40.1 11.3 34 15.1 30.1 17.4C26.1 19.8 22 22 18.9 23.6C15.9 25.1 11.7 26.8 11.7 26.8C11.7 26.8 14.2 24.6 16.9 22.8C19.7 20.9 24.5 18 28.1 15.9C31.6 13.9 35.5 11.7 38.5 10.2C41.4 8.8 45.5 7 45.5 7ZM46.8 7.5L48.5 10.8C48.5 10.8 45.3 13.5 43.2 14.9C41.2 16.4 39.4 17.6 36.4 19.4C33.3 21.3 28.4 24.1 24.9 25.9C21.5 27.8 17.7 29.4 15.8 30.2C14 31.1 14.1 30.9 13.7 31.1C13.2 31.2 13.4 31.4 13.1 30.9C12.7 30.3 11.6 27.8 11.6 27.8C11.6 27.8 17 25.5 20.1 23.9C23.1 22.4 26.8 20.3 30.1 18.4C33.3 16.6 36.8 14.5 39.5 12.7C42.3 10.8 46.8 7.5 46.8 7.5ZM32 32.8C35.1 32.6 37.8 32.8 40 32.9C42.1 33 43.4 33.1 45.1 33.4C46.9 33.6 49 34 50.4 34.5C51.7 34.9 52.9 35.6 53.5 36C54 36.3 53.7 33.5 53.8 36.5C53.8 39.5 53.9 50.9 53.8 54C53.6 57 53.7 54.6 53.1 55C52.6 55.4 51.7 55.9 50.4 56.4C49 56.8 48 57.2 45 57.5C41.9 57.7 36 58 32.1 58C28.3 57.9 24.5 57.4 22.1 57C19.8 56.7 19.2 56.3 18.2 56C17.3 55.6 16.7 55.1 16.4 54.8C16 54.4 16 57 15.9 54C15.9 50.9 15.9 39.5 15.9 36.5C16 33.5 15.8 36.2 16.2 36C16.7 35.7 17.6 35.1 18.4 34.8C19.3 34.4 19.4 34.2 21.6 33.9C23.9 33.5 29 32.9 32 32.8ZM32.6 33.5C35 33.5 37.5 33.5 39.6 33.6C41.8 33.8 43.8 33.9 45.6 34.2C47.5 34.6 49.8 35.1 51 35.5C52.2 36 52.9 36.8 52.9 36.8C52.9 36.8 51 37.6 48.5 38C46.1 38.3 41.6 38.6 38.4 38.8C35.1 38.9 31.8 38.8 28.9 38.6C25.9 38.5 22.6 38.2 20.6 37.9C18.6 37.5 16.9 36.8 16.9 36.8C16.9 36.8 17.2 36 18.6 35.5C20.1 35.1 23.1 34.4 25.4 34C27.8 33.7 30.3 33.6 32.6 33.5ZM16.8 37.9C16.8 37.9 20.2 38.8 22.9 39C25.5 39.3 28.7 39.6 32.4 39.6C36 39.7 41.5 39.5 45 39.2C48.4 39 53 37.9 53 37.9L53 54C53 54 52.2 54.8 51.4 55.1C50.5 55.5 50.2 55.8 48 56.1C45.9 56.5 42 57 38.2 57.1C34.5 57.2 28.2 56.9 25.4 56.8C22.7 56.6 22.9 56.4 21.6 56.1C20.4 55.9 19 55.4 18.1 55C17.3 54.7 16.8 54 16.8 54L16.8 37.9ZM27.1 44.5C27.5 44.4 27.9 44.6 27.9 44.6L27.6 51L26.9 51L26.9 46L25.8 46L25.4 45.4C25.4 45.4 26.8 44.7 27.1 44.5ZM31.1 44.5C31.6 44.5 32.6 44.6 33 44.9C33.5 45.1 33.8 45.6 33.9 46C33.9 46.5 33.9 47.1 33.5 47.8C33 48.4 31.1 50 31.1 50L33.9 50.1L33.8 51L29.4 51C29.4 51 28.9 50.7 29.4 50C30 49.4 32.8 46.9 32.8 46.9C32.8 46.9 32.7 46.1 32.5 45.9C32.4 45.6 32.1 45.5 31.9 45.5C31.6 45.4 31.2 45.5 30.9 45.6C30.7 45.8 30.2 46.4 30.2 46.4L29.6 46C29.6 46 30 45.2 30.2 45C30.5 44.7 30.7 44.6 31.1 44.5ZM38.2 44.6L39.2 44.6L41.2 47.5L43.4 44.6L44.5 44.8L44.5 51L43.5 51L43.2 46.8L41.5 49.2L39.4 46.8L39.1 51L38.1 50.9L38.2 44.6Z"/>'
  },
  {
    id: "packaging-estimated",
    name: "℮ (estimated sign)",
    quiz: "Pack filled to an average quantity",
    category: "packaging",
    aka: ["e-mark", "estimated sign", "℮ symbol", "average quantity"],
    looksLike: ["e", "small e next to weight", "funny e", "e with a line", "rounded e", "e after grams"],
    meaning: "The \"estimated\" sign means the pack was filled under the EU/UK average-quantity rules. The average across a batch must be at least the amount stated, and only a few packs may be slightly under, within strict limits. A small letter doing serious legal work.",
    action: "Nothing to do. It's consumer protection, not a warning.",
    tip: "It's not \"e for electric\", energy or eco. It always sits right next to the weight or volume, like \"500 g ℮\".",
    // Traced from the ℮ sign (Directive 76/211/EEC).
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M30.6 12.2C31.9 12.2 33.1 12.2 34.5 12.3C36 12.5 37.5 12.8 39 13.2C40.5 13.7 42.4 14.6 43.5 15.2C44.7 15.8 45.2 16.1 46.1 16.9C47.1 17.7 48.6 18.9 49.5 19.9C50.4 21 50.9 21.8 51.5 22.9C52.2 24.1 52.8 25.2 53.1 26.6C53.5 27.9 53.9 29.8 54 30.8C54.1 31.8 53.8 32.5 53.8 32.5L18.1 32.8C18.1 32.8 17.7 41.8 18.2 44.2C18.8 46.7 20.1 46.5 21.4 47.4C22.6 48.2 24.3 49.1 25.9 49.6C27.4 50.2 28.8 50.5 30.4 50.6C32.1 50.8 34.2 50.7 36 50.2C37.9 49.8 39.9 49 41.5 48C43.2 47 44.8 44.9 46 44.2C47.3 43.6 49 44.2 49 44.2C49 44.2 47.8 45.9 46.5 46.9C45.3 47.8 43.3 49 41.8 49.8C40.2 50.5 38.5 50.9 37.1 51.2C35.8 51.6 34.7 51.7 33.5 51.8C32.2 51.8 30.8 51.8 29.4 51.6C28.1 51.5 26.9 51.3 25.6 51C24.4 50.6 23.4 50.3 22.1 49.6C20.8 49 19.1 48.1 17.9 47.1C16.6 46.2 15.4 45 14.6 44C13.7 43.1 13.2 42.4 12.6 41.2C11.9 40.1 11.3 38.8 10.8 37.5C10.4 36.1 10.2 34.5 10.1 33.2C9.9 32 9.9 31.1 10.2 29.8C10.4 28.4 10.9 26.4 11.3 25.1C11.8 23.8 12.4 23 13.1 21.9C13.7 20.9 14.6 19.8 15.4 18.9C16.3 18.1 17.1 17.3 18.2 16.6C19.4 15.8 20.7 15 22.1 14.3C23.4 13.7 25 13.2 26.4 12.8C27.9 12.5 29.2 12.3 30.6 12.2ZM30.4 13.4C31.7 13.3 33.1 13.4 34.5 13.6C35.8 13.7 37.2 14.1 38.5 14.6C39.7 15 40.9 15.6 42 16.4C43.2 17.1 44.6 18.4 45.2 19.1C45.9 19.7 45.8 18.4 45.9 20.4C45.9 22.5 45.6 31.4 45.6 31.4C45.6 31.4 23.1 31.5 18.6 31.4C14 31.4 18.1 31.1 18.1 31.1C18.1 31.1 18 22.5 18.1 20.4C18.2 18.4 18.2 19.7 18.8 19.1C19.3 18.4 20.4 17.4 21.4 16.8C22.3 16.1 23.5 15.5 24.4 15.1C25.2 14.6 25.7 14.4 26.8 14.2C27.8 13.9 29.2 13.5 30.4 13.4Z"/>'
  },
  {
    id: "packaging-ce-mark",
    name: "CE mark",
    quiz: "Declared to meet EU safety rules",
    category: "packaging",
    aka: ["CE", "Conformité Européenne", "European conformity", "CE marking"],
    looksLike: ["ce", "letters ce", "two c's", "c and e", "ce in circles"],
    meaning: "The manufacturer declares that the product meets EU safety, health and environmental rules. For most products it's self-declared, not a quality mark or proof of independent testing.",
    action: "Nothing to do. For electrical items and toys, a CE mark from a reputable seller is a basic sign it's been made for the EU market.",
    tip: "The story of a lookalike \"China Export\" mark is largely a myth, but badly copied or fake CE marks do exist, so the logo alone isn't a guarantee.",
    // Traced from the official CE marking proportions.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M23.6 14.2C24.7 14.2 26.6 14.4 26.6 14.4L26.6 19.4C26.6 19.4 22.7 19.6 21.1 20.1C19.4 20.6 17.8 21.6 16.8 22.4C15.7 23.2 15.2 24 14.6 24.9C14 25.7 13.5 26.5 13.2 27.4C12.8 28.4 12.5 29.6 12.3 30.6C12.2 31.7 12.1 32.3 12.3 33.5C12.6 34.8 13.4 37.1 13.8 38.1C14.3 39.2 14.6 39.4 15.2 40C15.7 40.7 16.2 41.4 17.2 42C18.3 42.7 19.8 43.7 21.4 44.1C22.9 44.6 26.6 44.6 26.6 44.6L26.6 49.6C26.6 49.6 26.9 49.8 26.2 49.9C25.6 49.9 23.8 49.9 22.6 49.8C21.3 49.6 19.7 49.1 18.6 48.8C17.4 48.4 16.6 47.9 15.7 47.4C14.7 46.8 13.8 46.2 12.9 45.4C12.1 44.5 11.1 43.4 10.3 42.5C9.6 41.5 9.1 40.5 8.7 39.5C8.2 38.5 7.8 37.5 7.5 36.5C7.3 35.4 7.1 34.5 7 33.2C7 32 7.1 30.4 7.2 29.1C7.4 27.9 7.7 26.9 8.2 25.8C8.6 24.6 9.2 23.5 9.8 22.6C10.3 21.6 10.9 20.8 11.7 20.1C12.4 19.3 13.1 18.5 14.1 17.9C15 17.2 16.1 16.5 17.1 15.9C18.2 15.4 19.4 15 20.4 14.8C21.5 14.5 22.6 14.3 23.6 14.2ZM54 14.2C55 14.2 57 14.4 57 14.4L57 19.4C57 19.4 54 19.4 52.5 19.8C51.1 20.1 49.4 20.8 48.1 21.6C46.9 22.5 45.9 23.4 45 24.6C44.2 25.8 43.3 28.1 43 28.9C42.8 29.7 43.2 29.4 43.2 29.4L53.2 29.4L53.4 34.5L43.2 34.6C43.2 34.6 42.8 34.5 43 35.2C43.3 36 44.2 38.3 45 39.5C45.8 40.6 46.7 41.5 47.9 42.2C49 43 50.2 43.8 51.8 44.1C53.3 44.5 57 44.6 57 44.6L57 49.6C57 49.6 57.3 49.8 56.6 49.9C56 49.9 54 49.9 52.9 49.8C51.8 49.6 51.1 49.5 50 49.1C49 48.8 47.4 48.1 46.4 47.5C45.3 47 44.5 46.4 43.6 45.6C42.8 44.9 41.9 43.9 41.1 43C40.4 42.1 39.9 41.3 39.4 40.2C38.8 39.2 38.4 38 38 37C37.7 35.9 37.6 35 37.5 33.9C37.4 32.7 37.4 31.4 37.5 30.2C37.6 29.1 37.7 28.3 38 27.1C38.4 26 39.1 24.3 39.8 23.1C40.4 22 40.9 21.3 41.6 20.4C42.4 19.6 43.3 18.7 44.1 18.1C45 17.4 45.5 17 46.5 16.4C47.6 15.9 49.2 15.2 50.5 14.8C51.7 14.5 52.9 14.3 54 14.2Z"/>'
  },
  {
    id: "packaging-ukca",
    name: "UKCA mark",
    quiz: "Declared to meet GB safety rules",
    category: "packaging",
    aka: ["UKCA", "UK Conformity Assessed", "UKNI"],
    looksLike: ["uk ca", "letters uk ca", "uk over ca", "four letters in a square"],
    meaning: "UK Conformity Assessed: Great Britain's post-Brexit version of the CE mark. It's the maker declaring the product meets GB safety rules.",
    action: "Nothing to do. You'll often see it alongside the CE mark, as many products can still use either in Great Britain. Belt and braces.",
    tip: "Products for Northern Ireland use the CE mark (sometimes with a UKNI mark) instead.",
    // Traced from the official UKCA artwork.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M8.2 8.1L13.1 8.2C13.1 8.2 12.8 20.7 13.1 23.4C13.3 26.2 12.8 24.7 14.6 24.9C16.3 25.2 21.8 25.1 23.4 24.9C25.1 24.8 24.5 24.3 24.8 24.1C25 23.8 25 26 25.1 23.4C25.1 20.7 25.1 8.2 25.1 8.2L29.9 8.2C29.9 8.2 30.1 20.7 29.9 23.8C29.8 26.8 29.6 25.5 29.1 26.2C28.7 27 28.1 27.8 27.2 28.4C26.4 29.1 26 29.6 23.9 29.9C21.7 30.1 16.2 30 14.2 29.9C12.1 29.7 12.3 29.3 11.6 28.9C10.8 28.6 10.3 28.1 9.8 27.6C9.4 27 8.9 26.2 8.7 25.6C8.4 25 8.2 26.9 8.2 23.9C8.1 21 8.2 8.1 8.2 8.1ZM34.1 8.1L39 8.2L39 15.8C39 15.8 46.2 9.3 49 8.1C51.7 6.8 55.5 8.1 55.5 8.1L42 18.9L55.5 29.9C55.5 29.9 51.8 31.2 49 29.9C46.3 28.6 39.1 22.1 39.1 22.1L39 29.8L34 29.6L34.1 8.1ZM14.2 34C17.1 33.9 29.9 34.1 29.9 34.1L29.8 38.9C29.8 38.9 17.3 38.6 14.6 38.9C11.8 39.1 13.3 38.6 13.1 40.4C12.8 42.1 12.9 47.6 13.1 49.4C13.2 51.1 14.1 50.6 14.1 50.6C14.1 50.6 27 50.8 29.6 50.9C32.3 50.9 29.9 51 29.9 51L29.9 55.8C29.9 55.8 17.1 55.9 14.1 55.8C11 55.6 12.2 55.3 11.3 54.8C10.5 54.2 9.7 53.4 9.2 52.5C8.6 51.7 8.3 52 8.2 49.9C8 47.7 8.1 41.7 8.2 39.9C8.2 38 8.1 39.4 8.4 38.6C8.8 37.9 9.8 36.3 10.4 35.6C11.1 35 11.7 34.7 12.3 34.5C13 34.2 11.2 34 14.2 34ZM40.1 34C42.3 33.7 47.8 33.8 49.9 34C51.9 34.1 51.7 34.4 52.5 34.9C53.2 35.3 54 35.9 54.5 36.8C55.1 37.6 55.6 36.7 55.9 39.9C56.1 43 55.8 55.8 55.8 55.8L51 55.8L51 51C51 51 52.5 50.8 50.5 50.8C48.6 50.7 41.3 50.7 39.4 50.8C37.4 50.8 39 51 39 51L38.9 55.8L34 55.6C34 55.6 34.1 42.1 34.2 39C34.4 35.9 34.7 37.7 35.1 37C35.6 36.4 35.9 35.9 36.8 35.4C37.6 34.8 38 34.2 40.1 34ZM40.5 39C42.2 38.9 47.9 38.9 49.5 39C51 39 49.8 39 50 39.2C50.3 39.5 50.7 39.3 50.9 40.4C51 41.4 50.9 45.6 50.9 45.6L39.1 45.8C39.1 45.8 39 41.5 39 40.5C39.1 39.4 39.3 39.8 39.5 39.5C39.8 39.3 38.9 39.1 40.5 39Z"/>'
  },
  {
    id: "packaging-food-safe",
    name: "Food safe (glass and fork)",
    category: "packaging",
    aka: ["food contact material", "food grade", "suitable for food contact", "glass and fork symbol"],
    looksLike: ["wine glass and fork", "glass and fork", "cup and fork", "goblet and fork", "glass with fork"],
    meaning: "The material is safe to come into contact with food, so it's fine for storing, preparing or serving it. It's not advertising a wine bar.",
    action: "Use it for food. It says nothing about the dishwasher, microwave or oven, so check for those symbols separately.",
    tip: "The same glass and fork crossed out is an unofficial but common way of saying \"not for food\".",
    // Traced from the food contact symbol in Regulation 1935/2004.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M7.5 7L42.1 7C42.1 7 42.4 24.1 42.2 28.1C42.1 32 41.9 29.9 41.5 30.9C41.2 31.8 40.6 32.7 40 33.5C39.4 34.4 39 35 38 35.8C36.9 36.5 35.3 37.6 33.8 38.2C32.2 38.9 28.8 39.6 28.8 39.6C28.8 39.6 28.5 40.4 28.4 41.6C28.4 42.9 28.2 45.5 28.6 47C28.9 48.4 29.7 49.5 30.2 50.2C30.8 51 31.2 51.3 31.9 51.8C32.5 52.2 33.4 52.8 34.4 53.1C35.3 53.5 36.3 53.8 37.4 54C38.4 54.1 40.5 54.1 40.5 54.1L40.5 56.9C40.5 56.9 37 56.8 35.6 56.5C34.3 56.3 33.4 55.9 32.5 55.5C31.5 55.2 30.7 54.7 29.9 54.2C29.2 53.8 28.7 53.4 28.1 52.9C27.6 52.3 27 51.8 26.6 50.9C26.1 49.9 25.6 49.6 25.4 47.4C25.3 45.1 25.8 37.1 25.8 37.1C25.8 37.1 28.9 37 30.2 36.8C31.6 36.5 32.9 36.1 34 35.5C35.1 34.8 36.1 34 36.9 33C37.6 32.1 38.3 30.6 38.6 29.9C39 29.1 39 31.9 39 28.6C39.1 25.2 39 9.7 39 9.7C39 9.7 43.4 9.4 38.6 9.3C33.9 9.3 10.6 9.6 10.6 9.6C10.6 9.6 10.3 25.3 10.6 29.1C10.8 33 11.5 31.6 12.2 32.6C13 33.7 14.1 34.6 15.2 35.2C16.2 35.9 17.4 36.4 18.8 36.8C20.1 37.1 23.1 37.1 23.1 37.1C23.1 37.1 23.4 44.8 23.1 47.1C22.7 49.5 22 49.9 21.1 51.1C20.2 52.4 18.9 53.6 17.6 54.5C16.3 55.3 14.9 55.8 13.3 56.1C11.8 56.5 8.2 56.4 8.2 56.4L8.2 54.4C8.2 54.4 10.1 54.4 11.1 54.2C12 54.1 13.1 53.8 13.9 53.5C14.8 53.1 15.6 52.6 16.4 52C17.1 51.5 17.6 51 18.2 50.1C18.9 49.3 19.7 48.4 20.1 46.8C20.4 45.1 20.4 41.4 20.4 40.2C20.4 39.1 20.9 40.2 20.1 39.9C19.2 39.5 16.5 38.9 15.2 38.4C13.8 37.8 13.1 37.3 12.2 36.6C11.2 36 10.4 35.3 9.8 34.5C9.1 33.6 8.4 32.5 8.1 31.6C7.7 30.8 7.6 33.5 7.5 29.4C7.3 25.2 7.5 7 7.5 7ZM53.9 7L56.6 7.2C56.6 7.2 56.8 20.6 56.5 23.9C56.3 27.1 55.7 26.1 55 26.9C54.2 27.8 52.1 29.1 52.1 29.1L52 56.4L48.2 56.5L48.1 26.9C48.1 26.9 50.7 26.5 51.5 26.1C52.2 25.8 52.5 25.3 52.9 24.9C53.2 24.4 53.3 24.1 53.5 23.6C53.6 23.1 53.7 24.6 53.8 21.9C53.8 19.1 53.9 7 53.9 7Z"/><polygon fill="currentColor" stroke="none" points="47.4,7.0 47.4,20.0 44.0,20.0 44.0,7.0"/><polygon fill="currentColor" stroke="none" points="52.1,7.0 52.1,20.0 48.8,20.0 48.8,7.0"/>'
  },
  {
    id: "packaging-microwave-safe",
    name: "Microwave safe",
    category: "packaging",
    aka: ["microwavable", "microwave safe", "suitable for microwave"],
    looksLike: ["wavy lines", "microwave with wavy lines", "box with squiggles", "squiggly lines in a rectangle", "waves", "tv with wavy lines"],
    meaning: "The container can go in the microwave without melting, warping or cracking. There's no single official design, but wavy lines are the giveaway.",
    action: "Remove or loosen the lid (or pierce the film) before heating, and never microwave anything metallic. Some containers say \"reheat only\", which means they're not for long cooking.",
    tip: "\"Microwave safe\" means the container won't be damaged. It can still get very hot, so use oven gloves.",
    svg: `<rect x="7" y="14" width="50" height="36" rx="4"/><line x1="44" y1="14" x2="44" y2="50" stroke-width="3"/><g fill="currentColor" stroke="none"><circle cx="50.5" cy="23" r="2"/><circle cx="50.5" cy="31" r="2"/></g><path d="M13 24q2.5 -3.2 5 0t5 0t5 0t5 0t5 0M13 32q2.5 -3.2 5 0t5 0t5 0t5 0t5 0M13 40q2.5 -3.2 5 0t5 0t5 0t5 0t5 0" stroke-width="2.75"/>`
  },
  {
    id: "packaging-freezer-safe",
    name: "Freezer safe (snowflake)",
    category: "packaging",
    aka: ["freezer safe", "suitable for freezing", "freezable", "snowflake symbol"],
    looksLike: ["snowflake", "star with branches", "asterisk", "ice crystal", "six-pointed star"],
    meaning: "Freezer safe: the container can go in the freezer without cracking. On food packaging, a snowflake means the food is suitable for home freezing.",
    action: "Freeze away. Leave a little space for liquids to expand, and don't move glass straight from freezer to hot oven.",
    tip: "No snowflake on a container doesn't always mean it'll crack. But thin or brittle plastics often do in the cold.",
    svg: `<path d="M32 32L32 8M32 18L26.34 12.34M32 18L37.66 12.34M32 32L52.78 20M44.12 25L46.19 17.27M44.12 25L51.85 27.07M32 32L52.78 44M44.12 39L51.85 36.93M44.12 39L46.19 46.73M32 32L32 56M32 46L37.66 51.66M32 46L26.34 51.66M32 32L11.22 44M19.88 39L17.81 46.73M19.88 39L12.15 36.93M32 32L11.22 20M19.88 25L12.15 27.07M19.88 25L17.81 17.27" stroke-width="3.25"/>`
  },
  {
    id: "packaging-dishwasher-safe",
    name: "Dishwasher safe",
    category: "packaging",
    aka: ["dishwasher proof", "dishwasher safe", "top rack safe"],
    looksLike: ["plate and glass with water drops", "plates with drops", "dishes in the rain", "plate and cup with lines", "glass and plate with water"],
    meaning: "Dishwasher safe: it can be washed in a dishwasher without damage. The symbol shows dishes being rained on, which is roughly what happens in there.",
    action: "Put it in the dishwasher. If it says \"top rack only\", keep it away from the hotter bottom element. No symbol? Hand-wash to be safe, especially wood, cast iron, insulated mugs, sharp knives and anything with metallic trim.",
    tip: "Repeated dishwasher runs can still fade prints and cloud glassware over time. \"Safe\" means it won't break, not that it will look new forever.",
    svg: `<g stroke-width="3"><circle cx="24" cy="42" r="12"/><polygon points="40,29 52,29 50,54 42,54"/></g><circle cx="24" cy="42" r="6" stroke-width="2.5"/><path d="M19 6L17 11M32 6L30 11M45 6L43 11M25.5 15L23.5 20M38.5 15L36.5 20" stroke-width="3"/>`
  },
  {
    id: "packaging-oven-safe",
    name: "Oven safe",
    category: "packaging",
    aka: ["ovenproof", "oven safe", "suitable for oven"],
    looksLike: ["oven", "box with a window", "square with a window", "cooker", "oven with knobs"],
    meaning: "Oven safe: the dish or container can go in a conventional oven. There's no single official symbol. It's usually an oven shape, sometimes with a maximum temperature.",
    action: "Check the maximum temperature, avoid the grill unless it says so, and don't put cold glass or ceramic straight into a very hot oven, as sudden temperature changes can crack it.",
    tip: "Oven safe doesn't automatically mean hob safe or microwave safe; those have their own symbols.",
    svg: `<rect x="8" y="10" width="48" height="44" rx="4"/><line x1="8" y1="20" x2="56" y2="20" stroke-width="3"/><g fill="currentColor" stroke="none"><circle cx="16" cy="15" r="2"/><circle cx="23" cy="15" r="2"/></g><rect x="16" y="27" width="32" height="19" rx="2.5" stroke-width="3"/>`
  },
  {
    id: "packaging-under-3",
    name: "Not suitable for children under 3",
    quiz: "Not for babies and toddlers",
    category: "packaging",
    aka: ["0-3 symbol", "choking hazard", "small parts warning", "not for under 3s", "age warning"],
    looksLike: ["baby face crossed out", "0-3 crossed out", "face in a circle with a line", "no babies sign", "circle with a line through a face", "0-3 in a circle"],
    meaning: "Not suitable for children under 3 (0–36 months), usually because of small parts that could be swallowed or choke a young child.",
    action: "Keep it away from babies and toddlers, including older siblings' toys left on the floor.",
    tip: "It does NOT mean \"for ages 0–3\". The diagonal line means the exact opposite.",
    // Traced from the Toy Safety Directive symbol.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M29.1 6.2C31.3 6 35.7 6.1 37.8 6.2C39.8 6.4 40.2 6.7 41.5 7.2C42.8 7.6 44.1 8.1 45.5 8.8C47 9.6 48.9 11 50.1 11.9C51.4 12.9 52.2 13.8 53 14.8C53.9 15.7 54.5 16.4 55.4 17.8C56.2 19.1 57.5 18.7 58 22.8C58.4 26.8 58.1 38.8 58 42.2C57.9 45.8 57.9 42.8 57.4 43.8C56.8 44.7 55.9 46.6 54.8 48.1C53.6 49.7 51.8 51.7 50.2 53C48.7 54.4 46.7 55.5 45.2 56.4C43.8 57.2 45.1 57.7 41.6 58C38.2 58.2 28.2 58.3 24.6 58C20.9 57.6 21.1 56.5 19.6 55.8C18.2 55 17.2 54.2 15.9 53.1C14.7 52.1 13.4 50.8 12.3 49.5C11.3 48.3 10.8 47.8 9.8 46C8.9 44.2 7.3 40.7 6.7 38.8C6 36.8 6.1 35.8 6 34.2C6 32.7 6.1 30.8 6.2 29.4C6.2 28.1 6.2 27.8 6.7 26.4C7.1 25 8.1 22.6 8.8 21.1C9.6 19.5 10.2 18.4 11.2 17.1C12.1 15.9 13 14.8 14.2 13.6C15.5 12.4 17 11 18.6 9.9C20.3 8.9 22.4 7.9 24.1 7.2C25.9 6.6 26.8 6.3 29.1 6.2ZM32.6 10.3C34.9 10.3 37.5 10.8 39.6 11.4C41.8 12.1 44.1 13.4 45.5 14.2C46.8 15.1 47 15.5 48 16.4C48.9 17.2 50.1 18.5 51 19.6C51.8 20.8 52.5 22.1 53.1 23.4C53.8 24.8 54.2 26.3 54.5 27.6C54.9 29 55.1 29.9 55.1 31.4C55.2 32.8 55.1 34.8 54.8 36.5C54.4 38.3 53.7 40.4 53 41.9C52.4 43.3 51.4 44.7 51 45.4C50.5 46 50.1 46 50.1 46L40 35.9C40 35.9 43.3 34.7 44.5 33.9C45.6 33 46.4 31.7 47 30.8C47.5 29.8 47.7 29.2 47.9 28.4C48 27.5 48.1 26.4 47.9 25.4C47.6 24.4 47.2 23.3 46.6 22.4C46.1 21.4 45.3 20.6 44.5 19.9C43.6 19.3 41.5 18.4 41.5 18.4C41.5 18.4 42.1 16.8 42 16.1C41.8 15.3 40.9 14.5 40.5 14.1C40.1 13.6 39.9 13.6 39.5 13.6C39.2 13.5 38.6 13.4 38.1 13.6C37.7 13.7 37 14.1 36.6 14.4C36.3 14.8 36 15.3 36 15.3C36 15.3 37.6 16.3 38 16.8C38.3 17.2 38 17.9 38 17.9C38 17.9 35.2 19.1 34.4 19.6C33.5 20 33.4 20.3 32.9 20.9C32.3 21.4 31.7 22.2 31.2 23.1C30.8 23.9 30.2 26.1 30.2 26.1L19.6 15.7C19.6 15.7 19.7 15.1 20.1 14.8C20.4 14.4 20.6 14.2 21.6 13.7C22.7 13.1 24.4 12 26.2 11.4C28.1 10.9 30.4 10.3 32.6 10.3ZM38.5 14.7C38.5 14.7 39.6 14.9 40 15.2C40.3 15.4 40.6 15.9 40.8 16.2C40.9 16.6 41 16.8 40.9 17.1C40.7 17.5 39.9 18.3 39.8 18.6C39.6 19 39.9 19.2 39.9 19.2C39.9 19.2 40.8 19.3 41.5 19.6C42.1 19.9 43.3 20.5 44 21.1C44.6 21.6 45.1 22.1 45.5 22.9C46 23.7 46.6 25 46.8 25.9C46.9 26.8 46.9 27.3 46.6 28.2C46.4 29.2 45.7 30.6 45.1 31.4C44.6 32.3 43.9 32.9 43.1 33.4C42.4 33.8 41.2 34.2 40.4 34.4C39.5 34.5 39 34.7 38.2 34.2C37.5 33.8 35.9 31.8 35.9 31.8C35.9 31.8 36.5 30.9 37.2 30.8C38 30.6 39.3 30.6 40.1 30.8C41 30.9 42.2 31.8 42.2 31.8L42.6 31.1C42.6 31.1 42.3 30.5 41.9 30.2C41.4 30 40.6 29.7 39.9 29.6C39.1 29.4 38.3 29.4 37.5 29.6C36.6 29.7 34.9 30.6 34.9 30.6C34.9 30.6 32.6 28.8 32 28.2C31.5 27.7 31.7 27.7 31.6 27.1C31.6 26.6 31.6 25.6 31.9 24.8C32.1 23.9 32.5 23.1 33.1 22.4C33.8 21.6 35 20.5 35.9 20.1C36.7 19.6 37.6 19.7 38.1 19.4C38.7 19.2 38.8 19 39 18.6C39.2 18.3 39.5 17.8 39.4 17.2C39.2 16.7 38.1 15.2 38.1 15.2L38.5 14.7ZM15.8 19.1C15.8 19.1 11 14 16.1 19.1C21.3 24.1 46.5 49.5 46.5 49.5C46.5 49.5 46.8 49.8 46.1 50.4C45.5 50.9 43.5 52 42.4 52.5C41.2 53.1 40.7 53.3 39.4 53.6C38 54 35.7 54.4 34.4 54.5C33 54.7 32.5 54.6 31.4 54.5C30.4 54.5 29.3 54.4 28.1 54C26.8 53.7 25.3 53.3 23.9 52.6C22.6 52 21.2 51.2 20.1 50.4C18.9 49.5 18.1 49 16.9 47.6C15.8 46.3 14.1 43.8 13.2 42.1C12.2 40.5 11.7 38.5 11.4 37.5C11.2 36.4 11.5 36.5 11.4 36C11.4 35.6 10.9 36.2 10.9 34.8C10.9 33.3 11.1 29.4 11.4 27.4C11.8 25.4 12.5 24.1 13.2 22.8C14 21.4 15.8 19.1 15.8 19.1ZM39 23.9C39 23.9 39.3 24.3 39.2 24.8C39.2 25.2 38.5 26.6 38.5 26.6L40 27.4C40 27.4 38.7 27.6 38.4 27.6C38 27.5 37.6 27.1 37.6 27.1C37.6 27.1 37.4 26.8 37.6 26.2C37.9 25.7 39 23.9 39 23.9ZM30.1 37C30.6 36.9 31.2 37 31.6 37.2C32.1 37.5 32.9 38.6 32.9 38.6C32.9 38.6 32.3 40.4 32.4 41C32.4 41.7 33.2 41.9 33.4 42.4C33.5 42.8 33.5 43.2 33.4 43.6C33.2 44.1 33 44.5 32.8 44.9C32.5 45.2 32.1 45.5 31.6 45.6C30.9 45.8 29.7 45.7 29.1 45.5C28.6 45.4 28.5 45.1 28.2 44.9C28 44.6 27.9 44.2 27.9 44C27.8 43.7 27.9 43.5 27.9 43.5L28.6 43.1C28.6 43.1 29.2 44.3 29.6 44.5C30.1 44.8 31.1 44.6 31.1 44.6L32.1 43.4C32.1 43.4 31.8 42.2 31.4 41.9C31.1 41.5 29.9 41.2 29.9 41.2C29.9 41.2 29.8 40.9 30.1 40.6C30.4 40.4 31.6 39.8 31.6 39.8L31.8 38.9C31.8 38.9 31 38.2 30.8 38C30.5 37.9 30.5 37.8 30.1 38C29.8 38.3 28.6 39.4 28.6 39.4L28.1 39C28.1 39 28 38.5 28.1 38.2C28.3 38 28.7 37.6 29.1 37.4C29.4 37.1 29.7 37 30.1 37ZM19.6 37C20 37 20.7 37.1 21.1 37.2C21.6 37.4 21.8 37.4 22.1 38C22.3 38.5 22.8 39.5 22.9 40.5C22.9 41.4 22.7 43.1 22.6 43.9C22.4 44.6 22.2 44.7 21.9 45C21.7 45.2 21.4 45.5 20.9 45.6C20.3 45.8 18.8 45.5 18.8 45.5C18.8 45.5 17.6 44.7 17.4 43.6C17.1 42.6 17.3 40 17.4 39C17.6 38 17.9 38 18.2 37.6C18.6 37.3 19.1 37.1 19.6 37ZM19.6 38.1C19.9 38.1 20.2 38 20.6 38.2C20.9 38.5 21.4 38.9 21.6 39.6C21.7 40.4 21.7 42.2 21.6 43C21.4 43.9 20.4 44.5 20.4 44.5L19.2 44.5C19.2 44.5 18.6 43.4 18.4 42.6C18.3 41.9 18.3 40.6 18.4 40C18.6 39.3 18.9 38.8 19.1 38.5C19.2 38.2 19.4 38.2 19.6 38.1ZM25.1 42C25.6 41.9 26.6 42 26.6 42L26.9 42.8L24.1 43L23.8 42.6L23.9 42.1C23.9 42.1 24.7 42 25.1 42Z"/><g fill="currentColor" stroke="none"><circle cx="35.8" cy="24.5" r="0.8"/><circle cx="41.8" cy="24.5" r="0.8"/></g>'
  },
  {
    id: "packaging-keep-dry",
    name: "Keep dry (umbrella)",
    category: "packaging",
    aka: ["keep dry", "protect from moisture", "keep away from rain", "umbrella symbol"],
    looksLike: ["umbrella", "umbrella with rain", "umbrella with drops", "parasol", "brolly"],
    meaning: "Keep this parcel or product dry. Rain or damp can damage the contents.",
    action: "Store it indoors, off damp floors, and don't leave it on the doorstep in the rain.",
    tip: "It's one of the international ISO 780 handling marks for parcels, alongside the wine glass (fragile) and the two arrows (this way up). No umbrella is supplied.",
    // Traced from ISO 7000-0626.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M40.5 6.2C40.5 6.2 40.7 8.6 40.6 9.2C40.6 9.9 40.6 9.8 40.4 10.1C40.1 10.3 39.5 10.8 39.1 10.8C38.8 10.9 38.4 10.9 38 10.7C37.7 10.4 37.4 9.8 37.2 9.4C37.1 9.1 36.9 8.9 37.5 8.3C38 7.8 40.5 6.2 40.5 6.2ZM47.5 9.8L47.8 9.8C47.8 9.8 47.7 12.6 47.5 13.2C47.4 13.9 47.3 13.9 47 14.1C46.6 14.2 45.5 14.3 45.5 14.3C45.5 14.3 44.6 13.8 44.5 13.4C44.3 13.1 44.4 12.4 44.5 12.1C44.6 11.7 44.5 11.6 45 11.2C45.5 10.9 47.5 9.8 47.5 9.8ZM36.8 12.7C36.8 12.7 37 15 37 15.7C36.9 16.3 36.9 16.2 36.6 16.4C36.4 16.7 36 17.2 35.5 17.2C35.1 17.3 34.5 17.1 34.1 16.9C33.8 16.8 33.7 16.7 33.6 16.2C33.6 15.8 33.4 15 34 14.4C34.5 13.8 36.8 12.7 36.8 12.7ZM26.4 14.3C26.8 14.1 26.6 14.3 26.6 14.3C26.6 14.3 26.6 17.2 26.4 17.9C26.2 18.7 25.8 18.7 25.4 18.9C25.1 19 24.8 19.1 24.4 18.9C24.1 18.8 23.5 18.3 23.4 17.9C23.2 17.6 23.2 17 23.4 16.6C23.5 16.3 23.4 16.2 23.9 15.8C24.4 15.5 25.9 14.6 26.4 14.3ZM43.6 16.2L44 16.4C44 16.4 43.9 19.2 43.6 19.9C43.4 20.7 42.9 20.7 42.5 20.9C42.1 21 41.6 20.8 41.2 20.6C40.9 20.4 40.6 20 40.5 19.6C40.5 19.2 40.2 18.8 40.8 18.2C41.3 17.7 43.6 16.2 43.6 16.2ZM54 16.6L53.8 20.4C53.8 20.4 52.8 21.2 52.5 21.4C52.1 21.5 51.8 21.3 51.5 21.1C51.2 20.9 50.8 20.5 50.6 20.1C50.5 19.8 50.6 19.3 50.8 18.9C50.9 18.6 51 18.4 51.5 18.1C52.1 17.7 54 16.6 54 16.6ZM31.1 19.1L33 19.1L33.4 20.6C33.4 20.6 35.2 20.7 36.5 20.9C37.7 21.2 39 21.5 40.6 22.1C42.2 22.8 44.3 23.8 46 25.1C47.8 26.3 49.7 28.1 51 29.6C52.2 31.2 53.8 34.4 53.8 34.4C53.8 34.4 52.2 34.9 51.5 34.6C50.7 34.4 50.1 33.5 49.4 33.1C48.6 32.8 47.7 32.8 47 32.8C46.4 32.7 46.2 32.8 45.6 33C45 33.3 43.5 34.5 43.5 34.5C43.5 34.5 42.1 33.3 41.4 33C40.6 32.8 39.9 32.7 39.2 32.8C38.6 32.8 38 33 37.5 33.2C36.9 33.5 35.8 34.5 35.8 34.5C35.8 34.5 34.9 33.7 34.5 33.5C34 33.2 33.1 33 33.1 33C33.1 33 33.1 50.4 33 54.1C32.8 57.9 32.7 55.2 32.4 55.6C32 56.1 31.6 56.7 31.1 57C30.5 57.4 29.6 57.8 28.9 58C28.3 58.1 27.9 58 27.4 58C26.8 57.9 26.3 57.7 25.9 57.5C25.4 57.2 24.8 56.8 24.4 56.4C24.1 55.9 23.8 55.4 23.6 54.9C23.4 54.3 23.2 53.2 23.2 53.2L25.4 53.1C25.4 53.1 25.6 54.1 25.9 54.5C26.3 55 26.8 55.5 27.4 55.6C28.1 55.8 29.1 55.5 29.6 55.2C30.2 55 30.5 57.6 30.6 54C30.8 50.3 30.8 33.1 30.8 33.1C30.8 33.1 29.8 33.2 29.4 33.5C28.9 33.7 28.1 34.5 28.1 34.5C28.1 34.5 27.1 33.6 26.6 33.4C26 33.1 25.2 32.8 24.6 32.8C23.9 32.7 23.1 32.8 22.4 33C21.8 33.3 20.4 34.5 20.4 34.5C20.4 34.5 18.8 33.3 18.1 33C17.5 32.8 17.4 32.7 16.8 32.8C16.1 32.8 15.2 32.8 14.4 33.1C13.7 33.5 13.2 34.5 12.4 34.6C11.7 34.8 10.1 34.1 10.1 34.1C10.1 34.1 12.4 30.2 13.7 28.8C14.9 27.2 16 26.3 17.6 25.1C19.3 24 22 22.7 23.8 21.9C25.5 21.2 26.8 21.1 27.9 20.9C29.1 20.6 30.4 20.6 30.4 20.6L31.1 19.1Z"/>'
  },
  {
    id: "packaging-this-way-up",
    name: "This way up",
    category: "packaging",
    aka: ["this side up", "keep upright", "orientation arrows", "up arrows"],
    looksLike: ["two arrows", "two arrows pointing up", "arrows on a line", "double arrows", "two up arrows with a bar"],
    meaning: "This way up: the arrows point to the top of the box. Keep it upright, whatever the courier thinks.",
    action: "Carry, store and stack the box with the arrows pointing up. It matters most for liquids, appliances and anything fragile inside.",
    tip: "Fridges and freezers often carry this mark because they should travel upright.",
    svg: `<g stroke-width="4"><line x1="22" y1="49" x2="22" y2="18"/><line x1="42" y1="49" x2="42" y2="18"/></g><polygon points="22,8 14.5,20 29.5,20" fill="currentColor" stroke-width="2"/><polygon points="42,8 34.5,20 49.5,20" fill="currentColor" stroke-width="2"/><line x1="10" y1="55" x2="54" y2="55" stroke-width="4"/>`
  },
  {
    id: "packaging-fragile",
    name: "Fragile (wine glass)",
    category: "packaging",
    aka: ["fragile", "handle with care", "breakable", "glass symbol"],
    looksLike: ["wine glass", "broken glass", "cracked glass", "goblet", "cocktail glass", "glass with a crack"],
    meaning: "Fragile: handle with care. The contents can break, and some couriers treat the label as a challenge.",
    action: "Don't drop, throw or stack heavy things on it. Open carefully and check the contents straight away so you can report any damage quickly.",
    tip: "It's sometimes shown as a whole glass and sometimes cracked. Both mean the same; the cracked one is just more dramatic.",
    svg: `<g fill="currentColor" stroke="none"><path d="M18 10H28.5L33 17L28 23L31 29L30.5 34C24 34 18 28 18 10Z"/><path d="M31.5 10H46C46 28 40 34 33.5 34L34 29L31 23L36 17Z"/><rect x="30" y="33" width="4" height="16"/><rect x="20" y="48" width="24" height="5.5" rx="2"/></g>`
  },
  {
    id: "packaging-do-not-stack",
    name: "Do not stack",
    category: "packaging",
    aka: ["do not stack", "no stacking", "stacking prohibited"],
    looksLike: ["box with a crossed out box on top", "two boxes with an x", "box with x on top", "crossed out box", "stacked boxes crossed out"],
    meaning: "Don't put anything on top of this box. The contents, or the box itself, can't take the weight.",
    action: "Keep it on top of the pile, or give it a spot of its own.",
    tip: "A related symbol shows stacked boxes with a number or weight, which is the maximum you can stack on it.",
    svg: `<rect x="21" y="12" width="22" height="16" rx="1.5" stroke-width="3"/><line x1="15" y1="7" x2="49" y2="33"/><line x1="49" y1="7" x2="15" y2="33"/><rect x="12" y="38" width="40" height="18" rx="2" fill="currentColor" stroke="none"/>`
  },
  {
    id: "packaging-ghs-flammable",
    name: "Flammable (flame in a red diamond)",
    category: "packaging",
    aka: ["GHS02", "flammable", "highly flammable", "fire hazard", "CLP flame"],
    looksLike: ["flame in a diamond", "fire in a red diamond", "red diamond with fire", "flame on a line", "fire symbol"],
    meaning: "Flammable: the product, its vapour or its spray can catch fire easily. Common on aerosols, nail varnish remover, lighter fluid and some cleaning sprays.",
    action: "Keep away from heat, sparks and naked flames. Don't spray near a hob, candle or cigarette. Store somewhere cool and don't puncture or burn aerosol cans.",
    tip: "These red-diamond pictograms replaced the old orange-square hazard symbols in the UK and EU around 2015–2017.",
    // Traced from GHS02.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 4.2L59.9 31.9L32 59.9L4.2 32.1L31.9 4.2ZM31.9 8.4L55.5 32L31.9 55.5L8.4 32L31.9 8.4ZM31.9 15.7C31.9 15.7 34.5 21.4 35 23.1C35.6 24.7 35 25.8 35 25.8L35.5 25.9C35.5 25.9 36.2 25.8 36.5 25.1C36.9 24.3 37.5 21.4 37.5 21.4C37.5 21.4 38.4 23 38.5 24.1C38.5 25.3 38 28.4 38 28.4C38 28.4 38.3 28.8 38.8 28.4C39.2 28 40.6 26.1 40.6 26.1C40.6 26.1 41.2 26.5 41.2 27.2C41.3 28 41.4 29.4 41.1 30.4C40.9 31.3 39.8 33 39.8 33C39.8 33 40.4 33.2 40.9 33C41.3 32.8 42.4 31.9 42.4 31.9C42.4 31.9 42.2 34.4 42 35.5C41.7 36.5 41.3 37.2 40.8 38C40.2 38.7 39.4 39.4 38.6 39.9C37.9 40.3 36.9 40.5 36.2 40.6C35.6 40.8 35 40.5 35 40.5C35 40.5 36.8 39 37.4 38.4C37.9 37.7 38.1 36.8 38.1 36.8L35.6 37C35.6 37 36.8 35.5 37 34.8C37.3 34 37.2 33.1 37.2 32.8C37.2 32.4 37 32.5 37 32.5L34.6 34.5C34.6 34.5 34.4 31.2 34 30.1C33.7 29.1 32.5 27.9 32.5 27.9L32 28.1C32 28.1 32 29.6 31.9 30.2C31.7 30.9 31.3 31.6 31.1 32.2C31 33 31.1 34.5 31.1 34.5C31.1 34.5 30.2 34.3 29.8 34C29.3 33.6 28.6 32.5 28.6 32.5C28.6 32.5 28.5 32.5 28.4 32.8C28.4 33 28.1 33.6 28.4 34.2C28.6 34.9 29.8 36.9 29.8 36.9C29.8 36.9 28.8 36.9 28.2 36.8C27.7 36.6 26.6 36 26.6 36C26.6 36 27.1 37.6 27.8 38.4C28.4 39.1 30.8 40.5 30.8 40.5C30.8 40.5 27.6 40.2 26.6 39.9C25.5 39.5 25 39 24.4 38.4C23.9 37.7 23.6 37.2 23.1 36C22.7 34.7 22.1 31.9 21.9 30.9C21.7 30 21.9 30.4 21.9 30.4C21.9 30.4 23.6 31.9 24.2 32.2C24.9 32.6 25.6 32.4 25.6 32.4C25.6 32.4 24.6 30.1 24.4 28.9C24.2 27.6 24.4 24.9 24.4 24.9L26.9 27.6L27.2 27.4C27.2 27.4 26.8 25.7 26.8 24.6C26.8 23.4 27.2 20.8 27.2 20.8C27.2 20.8 27.3 20.5 27.6 20.8C27.8 21 28.5 21.6 28.9 22.2C29.2 22.9 29.6 24.9 29.6 24.9L30.2 25.1C30.2 25.1 31 23.8 31.1 22.4C31.3 21.1 31.2 18.5 31.4 17.4C31.5 16.2 31.9 15.7 31.9 15.7Z"/><polygon fill="currentColor" stroke="none" points="24.0,42.4 41.0,42.4 41.0,44.3 24.0,44.3"/>'
  },
  {
    id: "packaging-ghs-corrosive",
    name: "Corrosive (red diamond)",
    category: "packaging",
    aka: ["GHS05", "corrosive", "causes burns", "corrosion symbol"],
    looksLike: ["test tubes dripping on a hand", "liquid dripping on hand and metal", "red diamond with dripping tubes", "acid symbol", "hand being burned"],
    meaning: "Corrosive: can cause severe skin burns and eye damage, and may eat into metal. Found on oven cleaners, drain unblockers, strong descalers and some dishwasher products.",
    action: "Wear gloves, avoid splashes and keep it away from children. If it gets on skin or in eyes, rinse with plenty of water for several minutes and get medical advice.",
    tip: "Never mix cleaning products: bleach mixed with acidic descalers or ammonia releases dangerous gases.",
    // Traced from GHS05.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 4.2L59.9 31.9L32.1 59.9L4.2 32.1L31.9 4.2ZM31.9 8.4L55.5 31.9L32 55.5L8.4 32L31.9 8.4ZM33.4 20.9C33.4 20.9 40.1 22.1 41.8 22.2C43.4 22.4 43 21.9 43 21.9C43 21.9 42.6 24 42.6 24.8C42.6 25.5 43 25.9 43 26.2C43 26.6 42.6 26.7 42.6 27.1C42.6 27.6 43 28.4 43 28.9C43.1 29.3 42.9 29.8 42.9 29.8L42.1 29.9C42.1 29.9 41.8 30 41.9 29.6C41.9 29.1 42.2 27.7 42.2 27.2C42.2 26.8 41.9 27.1 41.9 26.8C41.8 26.4 42 25.4 42 25.4C42 25.4 43.3 25.4 41.8 25.1C40.2 24.7 32.8 23.4 32.8 23.4L32.1 22.1L33.4 20.9ZM33.5 21.4C35.1 21.6 42 22.8 42 22.8L42.2 23.6L33.2 22.9L32.9 21.9C32.9 21.9 32 21.3 33.5 21.4ZM29.6 21.1C31 20.9 30.2 21 30.6 21.1C30.9 21.3 31.3 21.7 31.4 21.9C31.6 22.2 31.6 22.6 31.4 22.9C31.3 23.1 32.3 23.2 30.8 23.6C29.2 24.1 22.1 25.4 22.1 25.4C22.1 25.4 22.5 26.3 22.4 26.6C22.4 27 21.8 27.1 21.8 27.8C21.7 28.4 22.1 30.4 22.1 30.4L21.4 30.8L21.1 30.4C21.1 30.4 21.4 28.9 21.4 28.2C21.5 27.6 21.1 27.1 21.1 26.6C21.2 26 21.6 25.6 21.6 24.9C21.6 24.1 21.1 21.9 21.1 21.9C21.1 21.9 21.2 22.5 22.6 22.4C24.1 22.2 28.3 21.2 29.6 21.1ZM29.2 21.8C30.7 21.6 30.9 22.1 30.9 22.1L30.9 22.8C30.9 22.8 31.4 23.1 30.1 23.2C28.7 23.4 24 23.9 22.6 23.9C21.3 24 21.9 23.6 21.9 23.6L22.2 22.9C22.2 22.9 27.8 21.9 29.2 21.8ZM46.5 25.2L46.6 25.8C46.6 25.8 46.3 25.9 46.2 26.1C46.2 26.4 46.5 26.6 46.2 27.1C46 27.7 44.6 29.4 44.6 29.4L44.5 28.9L46.5 25.2ZM44.4 25.8L44.8 25.8L45 26.9C45 26.9 44.5 27.2 44.4 27.6C44.2 27.9 44.4 28.5 44.2 28.8C44.1 29 43.8 29.1 43.8 29.1C43.8 29.1 43.4 29.2 43.5 28.8C43.7 28.3 44.3 27.1 44.5 26.6C44.6 26.1 44.4 25.8 44.4 25.8ZM38.2 25.9C38.2 25.9 38.8 26.4 39 26.6C39.1 26.9 38.8 27.3 39 27.6C39.1 27.8 39.5 27.8 39.6 28.1C39.8 28.5 40 29.9 40 29.9C40 29.9 38.9 28.6 38.5 27.9C38.2 27.3 38.1 26.6 38 26.2C38 25.9 38.2 25.9 38.2 25.9ZM39.8 26.1L40 26.1C40 26.1 40 26.8 40 27.1C40.1 27.3 40.4 27.2 40.5 27.6C40.7 27.9 40.9 29.4 40.9 29.4L40.2 29.1C40.2 29.1 40.3 28.3 40.1 28.1C40 27.8 39.5 27.4 39.5 27.4L39.8 26.1ZM24.8 28.1L25.1 28.4C25.1 28.4 24.8 28.6 24.8 28.9C24.7 29.2 24.8 29.9 24.6 30.2C24.5 30.6 24.1 30.6 23.9 30.9C23.8 31.1 23.6 31.9 23.6 31.9L22.4 32.1C22.4 32.1 22.5 30.8 22.6 30.4C22.8 29.9 23.2 29.8 23.2 29.6C23.3 29.3 23.1 28.8 23.1 28.8L23.6 28.9L23.9 30.1L24.8 28.1ZM17.9 28.4C17.9 28.4 18.4 28.3 18.6 28.6C18.7 28.9 18.9 30.1 18.9 30.1L19.4 29.2L19.9 29.4C19.9 29.4 19.7 29.9 19.8 30.1C19.8 30.4 20.2 30.5 20.4 30.9C20.5 31.2 20.6 32.5 20.6 32.5C20.6 32.5 19.4 31.9 19.1 31.6C18.9 31.4 19.2 31.2 19.1 30.9C18.9 30.7 18.5 30.8 18.4 30.4C18.2 29.9 17.9 28.4 17.9 28.4ZM40 30.4C40.6 30.4 41 30.9 41.5 30.9C42.1 31 42.9 30.5 43.5 30.6C44 30.6 44.4 31.3 45 31.4C45.5 31.6 46.5 31.6 46.5 31.6L46.8 32C46.8 32 45.5 32.1 44.9 31.9C44.2 31.8 43 31.1 43 31.1L42.8 31.4L43 31.6L41.9 31.9L41.6 32.5C41.6 32.5 42.9 33.1 43.1 33.4C43.4 33.6 43.2 33.9 43.2 33.9C43.2 33.9 42.2 33.8 41.9 33.5C41.5 33.2 41 32 41 32L37.2 32L37.1 32.5L39.8 32.5L39.9 33C39.9 33 36.8 33 36.1 33C35.5 33.1 35.8 33.2 35.8 33.2L35.9 33.6L39.8 33.8L39.8 34.2L37 34.2L37 34.5L40.8 35L38.4 35.2L38.4 35.8C38.4 35.8 41.2 36 42.1 36C43.1 36 43.4 35.9 44 35.8C44.6 35.6 45.3 35.2 45.8 35C46.2 34.9 46.6 35 46.6 35L46.8 35.4C46.8 35.4 44 36.3 42.5 36.5C41 36.6 37.8 36 37.8 36C37.8 36 37.7 35.6 37.2 35.2C36.8 34.9 35.6 34.2 35.2 33.9C34.9 33.5 35.1 33.1 35.1 33.1C35.1 33.1 36 32.8 36.2 32.5C36.5 32.3 36.8 31.6 36.8 31.6L38.1 31.4L38.5 30.6C38.5 30.6 39.5 30.3 40 30.4ZM39.8 31.1L40.5 31.4L39.4 31.4L39.8 31.1Z"/><polygon fill="currentColor" stroke="none" points="13.6,32.5 29.2,32.5 29.2,35.3 13.6,35.3"/>'
  },
  {
    id: "packaging-ghs-exclamation",
    name: "Harmful / irritant (exclamation mark in a red diamond)",
    category: "packaging",
    aka: ["GHS07", "irritant", "harmful", "exclamation mark warning", "warning diamond"],
    looksLike: ["exclamation mark in a diamond", "! in a red diamond", "red diamond with !", "warning diamond", "exclamation mark"],
    meaning: "A less severe hazard: it may irritate skin or eyes, cause an allergic skin reaction or drowsiness, or be harmful if swallowed. Common on washing-up liquid, laundry capsules and many cleaners.",
    action: "Read the warnings on the label, keep it away from eyes and out of reach of children. If swallowed, get medical advice and have the pack with you.",
    tip: "\"Less severe\" isn't \"harmless\". Laundry capsules carry this symbol and are a real danger to small children.",
    // Traced from GHS07.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 4.2L59.9 31.9L32.1 59.9L4.2 32.1L31.9 4.2ZM31.9 8.6L55.5 32L32 55.5L8.4 32L31.9 8.6ZM31.8 17.4C32.5 17.3 32.8 17.4 33.4 17.6C33.9 17.7 34.4 17.8 34.9 18.1C35.3 18.5 36.2 17 36.1 19.6C36 22.2 34.7 31.1 34.2 33.8C33.8 36.4 33.6 35 33.2 35.2C32.9 35.5 32.8 35.6 32.4 35.5C31.9 35.5 31.1 35.2 30.8 35C30.4 34.7 30.6 36.3 30.1 33.9C29.7 31.4 28.5 22.8 28.1 20.4C27.8 18.1 28.1 19.9 28.2 19.6C28.4 19.2 28.5 18.8 29.1 18.4C29.6 18.1 31 17.6 31.8 17.4Z"/><g fill="currentColor" stroke="none"><circle cx="32.2" cy="40.7" r="3.2"/></g>'
  },
  {
    id: "packaging-ghs-environment",
    name: "Hazardous to the environment (dead tree and fish)",
    category: "packaging",
    aka: ["GHS09", "environmental hazard", "toxic to aquatic life", "dead fish symbol"],
    looksLike: ["dead fish and tree", "tree and fish in a diamond", "red diamond with fish", "bare tree and fish", "fish upside down"],
    meaning: "Toxic to aquatic life: harmful to fish and other creatures if it gets into rivers, lakes or the sea. Found on some bleaches, insecticides, fuels and laundry products.",
    action: "Use it as directed, but don't pour leftovers down drains, toilets or onto the ground. Take unwanted product to a household hazardous waste collection.",
    tip: "It doesn't mean the product is dangerous to you in normal use. It's about how you get rid of it.",
    // Traced from GHS09.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 4.2L59.9 31.9L32.1 59.9L4.2 32.1L31.9 4.2ZM31.9 8.4L55.5 31.9L32 55.5L8.4 32L31.9 8.4ZM23.9 18.9L25.6 20.9C25.6 20.9 25.9 20.1 26.1 19.9C26.3 19.6 26.8 19.6 26.8 19.6C26.8 19.6 26.4 21.5 26.6 22.8C26.8 24 27.9 27.2 27.9 27.2C27.9 27.2 29.2 26.6 29.4 25.4C29.7 24.1 29.4 19.9 29.4 19.9L29.8 20.1L30.2 22.9L32.9 20.2C32.9 20.2 30.9 23 30.4 24.1C30 25.3 30.1 27.4 30.1 27.4C30.1 27.4 30.8 26.8 31.2 26.6C31.8 26.5 32.5 26.7 33.1 26.4C33.8 26 35.4 24.4 35.4 24.4C35.4 24.4 33.8 27.1 33.2 27.8C32.7 28.4 32.4 27.7 31.9 28.1C31.3 28.6 30.1 30 29.8 30.6C29.4 31.1 29.6 31.6 29.6 31.6C29.6 31.6 28.7 31.8 29.9 31.9C31.2 31.9 35.7 32 37.1 31.9C38.6 31.7 38.2 31.1 38.8 30.9C39.3 30.6 40.2 30.4 40.6 30.4C41.1 30.3 41.5 30.4 41.5 30.4L41.1 31.8L43.4 31.4C43.4 31.4 43.1 32.8 42.6 33.6C42.1 34.5 40.4 36.5 40.4 36.5L42 37.8L40.5 38.9L42.9 39.1L42.5 40.1L43.9 40.5L43.8 41.9L20.9 41.6C20.9 41.6 23.3 40.9 24.1 40.8C24.8 40.6 24.7 41 25.6 40.8C26.6 40.5 29.6 39 29.6 39L29.6 38.1C29.6 38.1 30.6 38.1 31.2 37.9C31.9 37.6 32.4 37.6 33.2 36.6C34.1 35.7 36.6 32.4 36.6 32.4L29.9 32.1L29.8 35.1L32.5 36.8C32.5 36.8 30 36.9 29.2 37.1C28.5 37.4 28.1 38.4 28.1 38.4C28.1 38.4 27.7 37.6 26.9 37.5C26.2 37.4 23.9 37.8 23.9 37.8L26.2 36L26.4 32.2L20.9 31.9C20.9 31.9 25.2 31.9 26.1 31.9C27.1 31.8 26.4 31.9 26.4 31.6C26.5 31.2 26.5 30 26.4 29.6C26.4 29.3 26.6 29.6 26.1 29.2C25.5 28.9 23.8 27.9 23.1 27.6C22.3 27.4 21.4 27.6 21.4 27.6L23.1 26.2C23.1 26.2 25.2 27 25.6 27.1C26.1 27.3 26.1 26.9 26.1 26.9C26.1 26.9 26.3 26.4 25.6 25.8C25 25.1 22.1 22.8 22.1 22.8L22.4 22.2L25.1 23.9L25.6 23.6C25.6 23.6 25.5 22.6 25.2 21.9C25 21.1 24.1 19.8 23.9 19.4C23.6 18.9 23.9 18.9 23.9 18.9ZM40.4 30.8C40.9 30.6 40.9 30.9 40.9 30.9L40.1 32.1L40.4 32.5C40.4 32.5 42 31.9 42.5 31.8C42.9 31.6 42.9 31.8 42.9 31.8C42.9 31.8 43 31.8 42.9 32.1C42.7 32.5 42.3 33.5 41.9 34.1C41.4 34.8 40.9 35.2 40.2 35.8C39.6 36.2 38.6 36.8 37.8 37.1C36.9 37.5 35.8 37.5 35.1 38C34.5 38.4 33.6 39.9 33.6 39.9L30.6 38.5C30.6 38.5 32.2 38.1 33.4 37C34.5 36 36.4 33.1 37.5 32C38.7 31 39.8 30.9 40.4 30.8ZM40.9 33.1L41.4 33.1L41.5 33.6L41 33.8L40.9 33.1Z"/>'
  },
  {
    id: "packaging-ghs-health",
    name: "Serious health hazard (person with a starburst)",
    category: "packaging",
    aka: ["GHS08", "health hazard", "CMR", "aspiration hazard", "starburst person"],
    looksLike: ["person with a star on chest", "man with a starburst", "silhouette with a star", "body with explosion on chest", "red diamond with a person"],
    meaning: "A serious or long-term health hazard: it may damage organs, cause cancer or harm fertility, cause breathing allergies, or be fatal if swallowed and it gets into the lungs. Common on lamp oil, white spirit and some fuels.",
    action: "Follow the precautions exactly, use in a well-ventilated area and store it out of reach of children. If swallowed, do NOT make the person vomit. Get medical help immediately.",
    tip: "Lamp oil and white spirit get this symbol because a tiny sip can slip into a child's lungs.",
    // Traced from GHS08.
    svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M31.9 4.2L59.9 31.9L32.1 59.9L4.2 32.1L31.9 4.2ZM31.9 8.4L55.5 31.9L32 55.5L8.4 32L31.9 8.4ZM32 13.9C32.9 13.9 33.5 14.1 34 14.3C34.6 14.6 34.9 14.7 35.4 15.2C35.9 15.6 36.6 16.3 37 17.1C37.5 17.8 38 18.4 38 19.6C38.1 20.7 37.8 22.7 37.5 23.8C37.3 24.8 37.1 25.3 36.8 26.1C36.4 26.8 35.6 27.6 35.4 28.2C35.1 28.9 35.4 29.9 35.4 29.9L40.2 31.9C40.2 31.9 39.8 32.7 39.5 33C39.2 33.2 38.7 33 38.5 33.1C38.2 33.3 38 34 38 34L35.6 33.8L35.5 34.6L34.6 34.5L34.2 35L33.5 34.6L33 32.2L33.5 31.8C33.5 31.8 33 30.2 33 29.8C32.9 29.3 33.3 29.5 33.1 28.9C33 28.4 32.1 26.6 32.1 26.6L31.4 29.9C31.4 29.9 31.9 30.2 31.9 30.6C32 30.9 32 31.3 31.9 31.6C31.7 32 31.4 32.2 31.2 32.6C31.1 33 31.4 33.7 31.2 34C31.1 34.4 30.6 34.9 30.6 34.9C30.6 34.9 30.1 34.2 29.6 34.1C29.2 34.1 28.9 34.7 27.9 34.4C27 34 24.1 31.9 24.1 31.9C24.1 31.9 27.2 30.7 27.9 30.4C28.7 30 28.5 29.9 28.6 29.6C28.8 29.2 29 28.8 28.8 28.1C28.5 27.3 27.4 26 27.1 25.1C26.7 24.1 26.5 23.3 26.4 22.4C26.2 21.6 26.1 20.7 26.1 19.9C26.2 19 26.3 18.4 26.8 17.6C27.2 16.7 28.2 15.4 29.1 14.8C29.9 14.2 31.2 14 32 13.9ZM22.6 32.2C23.4 32.1 23.9 32.4 24.4 32.8C25 33.1 25.4 34 25.8 34.2C26.1 34.5 26.2 34.1 26.6 34.4C26.9 34.6 27.3 35.3 27.6 35.5C27.8 35.8 28 35.4 28.2 35.6C28.5 35.9 29 36.6 29.1 37C29.3 37.5 29.1 38.4 29.1 38.4L28.2 38.5L28.2 39.6L27.8 39.6L27.2 39L26.8 40L26.1 40L25.8 40.9C25.8 40.9 25.3 40.7 25.1 40.9C24.8 41 24.7 41.4 24.4 41.5C24.2 41.7 23.4 41.9 23.4 41.9L19.1 37.5C19.1 37.5 19.2 34.7 19.4 34C19.5 33.2 19.4 33.6 19.9 33.4C20.5 33.1 21.9 32.4 22.6 32.2ZM41.8 32.4C42.6 32.2 43.5 32.8 44.1 33C44.8 33.3 45.1 33.8 45.4 34C45.6 34.3 45.7 34.2 45.8 34.9C45.8 35.5 46.5 36.8 45.8 38C45 39.1 42.3 41.3 41.5 42C40.8 42.6 41 42 41 42C41 42 40.3 41.1 39.6 40.8C39 40.4 37 40 37 40L37.1 39L36 39L36.1 38L35.1 37.6C35.1 37.6 35 37.2 35.4 36.8C35.7 36.3 36.5 35.5 37 35.1C37.4 34.8 37.8 35.1 38.1 34.9C38.5 34.6 38.2 34.3 38.9 33.9C39.5 33.4 40.9 32.5 41.8 32.4ZM32 32.8L32.6 33L32.2 33.9L31.9 33.6L32 32.8ZM28.9 34.8L29.4 34.9L29.2 35.4L28.8 35.1L28.9 34.8ZM33.6 35.5L34.4 35.6L34.5 36.1L34 36.2L33.5 35.8L33.6 35.5ZM29.1 36.2L30.1 36.4L30.1 36.8L29.6 36.9L29.1 36.2ZM34.6 38.2L35 38.2L35.1 38.8L34.4 39.2L34.6 38.2ZM29.6 39.6L31.4 40.1C31.4 40.1 31.7 41.5 31.6 42.1C31.6 42.8 31.2 43.4 31.2 44C31.3 44.7 32 45 32 46C32.1 47.1 31.6 50.1 31.6 50.1L24.1 42.6L24.2 42C24.2 42 28.1 40.8 28.9 40.5C29.8 40.1 29.6 39.6 29.6 39.6ZM33.9 39.8C33.9 39.8 34.2 40 34.5 40C34.7 40 35.2 39.8 35.2 39.8L37 41L37.8 40.8L40.6 42.6L32.5 50.1C32.5 50.1 32.4 47.4 32.5 46.6C32.5 45.9 32.9 46.1 32.9 45.8C32.8 45.4 32.3 44.6 32.2 44.2C32.2 43.9 32.5 43.4 32.5 43.4L33.4 43.1L32.9 40.8L33.9 39.8ZM32.1 41.5L32.6 42L32.5 42.6L31.9 42.5L32.1 41.5Z"/><g fill="currentColor" stroke="none"><circle cx="31.5" cy="39.1" r="0.4"/></g>'
  }
]);
