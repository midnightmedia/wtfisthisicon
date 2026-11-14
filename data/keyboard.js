/* Keyboard symbols (keyboard).
 * Format and drawing rules: see data/README.md. Every key glyph is drawn as plain geometry
 * (no Unicode symbols inside the SVG), because many phones and PCs lack fonts for ⌘ ⌥ ⏏ etc.
 * The Windows logo is a simplified, original drawing for identification purposes. */
WTF.add([
  /* ---------- Mac modifier keys ---------- */
  {
    id: "keyboard-command",
    name: "Command key (Cmd)",
    category: "keyboard",
    aka: ["⌘", "Cmd", "Command", "Apple key", "clover key", "splat", "Bowen knot", "place of interest sign"],
    looksLike: ["clover", "four-leaf clover", "pretzel", "four loops", "squiggly square", "square with loops on the corners", "knot", "propeller"],
    meaning: "The Mac's main shortcut key, doing the job Ctrl does on Windows. Hold it and tap a letter: Command + C copies, Command + V pastes, Command + Z undoes and Command + Q quits the app.",
    action: "Windows instructions say Ctrl? On a Mac, try Command. Handy ones: Command + Space opens Spotlight search, Command + Tab switches apps, and Command + Shift + 4 lets you drag a box to take a screenshot.",
    tip: "Steve Jobs didn't want the Apple logo all over the menus, so designer Susan Kare picked this loop symbol from a book of symbols. In Nordic countries it marks places of interest on signs and maps, where it isn't asking you to copy anything. Older Mac keyboards had an Apple logo on the key too, which is why people still call it the Apple key.",
    svg: `<path d="M24 16V48A8 8 0 1 1 16 40H48A8 8 0 1 1 40 48V16A8 8 0 1 1 48 24H16A8 8 0 1 1 24 16Z" stroke-width="4"/>`
  },
  {
    id: "keyboard-option",
    name: "Option / Alt key",
    category: "keyboard",
    aka: ["⌥", "Option", "Opt", "Alt", "alt key", "alternate"],
    looksLike: ["switch track", "railway points", "railroad switch", "line with a ramp", "step", "broken line", "z on its side", "lightning step"],
    meaning: "Option is the Mac's version of the Windows Alt key, and many Mac keyboards print \"alt\" on it too. It unlocks the alternative version of things: hidden menu items, extra settings and special characters.",
    action: "Hold Option while a menu is open to reveal hidden commands, or while typing to get symbols: Option + G gives ©, Option + 8 gives •. Option + Command + Esc opens Force Quit for a frozen app. Using a Windows keyboard on a Mac? Its Alt key works as Option.",
    tip: "The symbol is usually explained as a railway switch: one track runs straight on and the other branches off. An alternative route, just like the key. Obvious, once someone tells you.",
    svg: `<g stroke-width="4"><polyline points="9,18 24,18 40,46 55,46"/><line x1="38" y1="18" x2="55" y2="18"/></g>`
  },
  {
    id: "keyboard-control",
    name: "Control key (^)",
    category: "keyboard",
    aka: ["⌃", "Ctrl", "Control", "Ctl", "^", "caret", "Strg"],
    looksLike: ["hat", "caret", "upside-down v", "roof", "little mountain", "up arrowhead", "chevron", "^"],
    meaning: "The ^ means Control (Ctrl). On Windows and Linux, Ctrl is the main shortcut key (Ctrl + C copies). On a Mac, Command does most of the shortcuts and Control is the helper. Mac menus show it as ^.",
    action: "On a Mac, hold Control and click to get the right-click menu. Control + Command + Q locks the screen. If instructions say ^C, that means hold Ctrl and press C.",
    tip: "Strg on German keyboards is short for Steuerung, which means control. Same key, no vowels.",
    svg: `<polyline points="11,44 32,20 53,44" stroke-width="4.5"/>`
  },
  {
    id: "keyboard-shift",
    name: "Shift key",
    category: "keyboard",
    aka: ["⇧", "Shift", "shift arrow", "upper case"],
    looksLike: ["up arrow outline", "hollow arrow", "white arrow pointing up", "outline arrow", "fat up arrow", "house arrow", "rocket"],
    meaning: "Shift: hold it while typing a letter to get a capital, or a number key to get the symbol printed above it (Shift + 1 = !). In shortcuts it adds a twist to the plain version: Command + Z undoes, Command + Shift + Z redoes.",
    action: "Screenshots: on a Mac, Command + Shift + 3 takes the whole screen and Command + Shift + 4 lets you drag a box. On Windows, it's Windows key + Shift + S. Hold Shift while clicking to select everything between two items in a list.",
    tip: "Pressed Shift five times on Windows and got a pop-up about Sticky Keys? That's an accessibility feature. Click No to dismiss it, or switch the shortcut off in Settings › Accessibility › Keyboard.",
    svg: `<polygon points="32,9 54,31 42,31 42,55 22,55 22,31 10,31" stroke-width="4"/>`
  },
  {
    id: "keyboard-caps-lock",
    name: "Caps Lock",
    category: "keyboard",
    aka: ["⇪", "Caps Lock", "caps", "capitals lock", "caps lock light", "A lock"],
    looksLike: ["up arrow over a line", "arrow with a box under it", "hollow arrow with a bar", "arrow on a rectangle", "padlock with an a", "lock with letter a"],
    meaning: "Caps Lock makes every letter you type a CAPITAL until you press it again, which is how perfectly calm emails end up sounding like shouting. Numbers and symbols aren't affected. A little light on the key shows when it's on; on laptops the light is sometimes a padlock with an A.",
    action: "Password suddenly \"wrong\"? Check Caps Lock first. On a Mac it needs a firm, slightly longer press, so you don't switch it on by accident. If you've set it to switch keyboard languages (System Settings › Keyboard), a quick tap does that instead.",
    tip: "Chromebooks don't have a Caps Lock key: that spot is a search key. Press Alt + Search to switch capitals on or off.",
    svg: `<g stroke-width="4"><polygon points="32,9 53,28 42,28 42,39 22,39 22,28 11,28"/><rect x="22" y="47" width="20" height="8" rx="1.5"/></g>`
  },
  {
    id: "keyboard-delete",
    name: "Delete / Backspace key",
    category: "keyboard",
    aka: ["⌫", "Backspace", "Delete", "BkSp", "back space", "erase left"],
    looksLike: ["arrow with an x", "x in a pentagon", "tag with an x", "label with a cross", "box pointing left with an x", "house on its side with an x", "long arrow pointing left"],
    meaning: "Deletes the character to the left of the cursor. On a Mac the key says \"delete\" and works like Backspace on Windows. Windows keyboards often just print a long arrow pointing left.",
    action: "To delete to the right instead, press Fn + Delete on a Mac laptop. Option + Delete (Ctrl + Backspace on Windows) removes a whole word. In Finder, Command + Delete moves the selected file to the Trash (Bin).",
    tip: "In Mac menus, this symbol next to a command means the Delete key.",
    svg: `<path d="M8 32L22 16H52A4 4 0 0 1 56 20V44A4 4 0 0 1 52 48H22Z"/><path d="M33 26L45 38M45 26L33 38"/>`
  },
  {
    id: "keyboard-forward-delete",
    name: "Forward delete (Del)",
    category: "keyboard",
    aka: ["⌦", "Del", "Delete", "forward delete", "delete right", "Entf"],
    looksLike: ["arrow pointing right with an x", "x in a tag", "pentagon pointing right with an x", "label with a cross", "luggage tag", "box arrow with an x"],
    meaning: "Deletes the character to the right of the cursor, the opposite of Backspace. On Windows it's the key labelled Del or Delete. Full-size Mac keyboards have it next to the Home and End keys.",
    action: "Mac laptops don't have this key, so press Fn + Delete instead. In Windows File Explorer, Delete sends a file to the Recycle Bin, but Shift + Delete skips the bin and deletes it for good. Go carefully.",
    tip: "Ctrl + Alt + Delete on Windows brings up the screen with Lock, Sign out and Task Manager. \"Entf\" on German keyboards is short for Entfernen (remove).",
    svg: `<path d="M56 32L42 16H12A4 4 0 0 0 8 20V44A4 4 0 0 0 12 48H42Z"/><path d="M19 26L31 38M31 26L19 38"/>`
  },
  {
    id: "keyboard-return",
    name: "Return / Enter key",
    category: "keyboard",
    aka: ["⏎", "↩", "↵", "Return", "Enter", "carriage return", "new line"],
    looksLike: ["arrow going down then left", "bent arrow", "l-shaped arrow", "backwards l with an arrow", "hook arrow", "arrow turning left", "curved arrow pointing left"],
    meaning: "Return or Enter: start a new line when typing, or confirm, send or OK whatever you're doing. The bent arrow is an old typewriter going down a line and back to the left margin.",
    action: "In chat apps (WhatsApp on a computer, Teams, Slack), Enter sends the message, finished or not. Press Shift + Enter for a new line instead. In Mac menus, a hooked arrow next to a command means the Return key.",
    tip: "Full-size keyboards have a second Enter key on the number pad. Macs call that one Enter and show it in some menus as a small arrowhead between two lines. A few apps treat it differently from Return.",
    svg: `<polyline points="54,14 54,40 24,40" stroke-width="4"/><polygon points="10,40 24,30 24,50" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "keyboard-tab",
    name: "Tab key",
    category: "keyboard",
    aka: ["⇥", "↹", "⇤", "Tab", "tabulator", "tab key"],
    looksLike: ["arrow with tab line", "arrow pointing to a line", "two arrows pointing opposite ways", "arrows hitting walls", "left and right arrows with bars", "double arrow", "arrows with lines"],
    meaning: "Tab jumps forward: to the next box in a form, the next button, or the next indent stop in a document. The arrow running into a bar shows it jumping along to the next stop.",
    action: "Shift + Tab goes back one box. Alt + Tab (Windows) or Command + Tab (Mac) switches between open apps. In a bulleted list, Tab indents an item and Shift + Tab moves it back out.",
    tip: "Many PC keyboards print two arrows going opposite ways, as if the key can't make up its mind. The one pointing left to a bar is for Shift + Tab, and the one pointing right to a bar is for Tab. Macs and menus usually show just the right-pointing one. The name comes from the typewriter's tabulator, used to line up columns.",
    svg: `<g stroke-width="4"><line x1="10" y1="9" x2="10" y2="27"/><line x1="28" y1="18" x2="54" y2="18"/><line x1="54" y1="37" x2="54" y2="55"/><line x1="10" y1="46" x2="36" y2="46"/></g><g fill="currentColor" stroke-width="2"><polygon points="17,18 28,10.5 28,25.5"/><polygon points="47,46 36,38.5 36,53.5"/></g>`
  },
  {
    id: "keyboard-escape",
    name: "Escape key (Esc)",
    category: "keyboard",
    aka: ["⎋", "Esc", "Escape", "esc key"],
    looksLike: ["circle with an arrow escaping", "broken circle with an arrow", "arrow leaving a circle", "circle with arrow pointing up left", "c with an arrow", "power button with an arrow"],
    meaning: "Escape: cancel, close or back out of whatever just popped up, such as a dialog box, a menu, a full-screen video or a half-finished selection. The symbol is an arrow escaping from a circle, which is about as literal as icons get.",
    action: "Stuck in full screen or a pop-up? Press Esc. For a frozen app, Option + Command + Esc opens Force Quit on a Mac, and Ctrl + Shift + Esc opens Task Manager on Windows.",
    tip: "Most keyboards just print \"esc\". The circle-and-arrow symbol mostly turns up in Mac menus and on some international keyboards. Some 2016–2019 MacBook Pros had no physical Esc key at all: it lived on the Touch Bar.",
    svg: `<path d="M30.87 16.27A18 18 0 1 1 16.27 30.87"/><line x1="34" y1="34" x2="20.5" y2="20.5" stroke-width="4"/><polygon points="11,11 24.79,15.59 15.59,24.79" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "keyboard-eject",
    name: "Eject key",
    category: "keyboard",
    aka: ["⏏", "eject", "media eject", "disc eject", "eject key"],
    looksLike: ["triangle on a line", "triangle with line under", "triangle over a bar", "up arrow with a line under it", "house shape", "pyramid on a block"],
    meaning: "On older Mac keyboards, the top-right key opens the CD/DVD drive. In Finder and in menus, the same symbol means safely disconnect a drive or memory stick.",
    action: "Before unplugging a USB stick or external drive from a Mac, click the eject symbol next to it in the Finder sidebar (or select it and press Command + E), so nothing gets corrupted. On older Macs, Control + Eject brings up the restart / sleep / shut down box.",
    tip: "Newer Mac keyboards don't have this key. Macs lost their disc drives years ago, so there was nothing left to eject. The top-right key is now the power / Touch ID button.",
    svg: `<polygon points="32,12 53,37 11,37" fill="currentColor" stroke-width="3"/><rect x="11" y="44" width="42" height="7" rx="1.5" fill="currentColor" stroke="none"/>`
  },
  {
    id: "keyboard-globe-fn",
    name: "Fn / Globe key",
    quiz: "Switch keys to their second job",
    category: "keyboard",
    aka: ["fn", "Fn", "function key", "globe key", "🌐", "Fn Lock", "FnLock", "world key"],
    looksLike: ["globe", "world", "earth", "fn", "circle with lines", "ball with lines", "planet"],
    meaning: "Fn (function) switches keys to their second job. That's mainly the top row, which can be either F1–F12 or brightness, volume and media controls. On newer Macs and iPad keyboards it also has a globe, used for emoji and keyboard languages.",
    action: "Pressing F5 and getting volume or brightness instead, or the other way round? Hold Fn while you press it. On a Mac, tapping the globe key on its own opens the emoji picker or switches language, depending on System Settings › Keyboard. Fn + F switches full screen on or off.",
    tip: "On Windows laptops, Fn Lock (often Fn + Esc, sometimes marked with a padlock and \"Fn\") swaps the top row's default so you don't have to hold Fn every time. On a Mac the same choice is in System Settings › Keyboard › Keyboard Shortcuts › Function Keys.",
    svg: `<circle cx="24" cy="40" r="15" stroke-width="3.5"/><ellipse cx="24" cy="40" rx="6.5" ry="15" stroke-width="2.5"/><line x1="9" y1="40" x2="39" y2="40" stroke-width="2.5"/><text x="47" y="23" font-size="22">fn</text>`
  },

  /* ---------- Mac function-row icons ---------- */
  {
    id: "keyboard-mission-control",
    name: "Mission Control key (F3)",
    category: "keyboard",
    aka: ["Mission Control", "Exposé", "F3", "Spaces", "show all windows", "Task View"],
    looksLike: ["three rectangles", "three boxes", "boxes of different sizes", "three windows", "windows spread out", "squares"],
    meaning: "On a Mac this key (F3) opens Mission Control: all your open windows spread out so you can pick one, with your desktops (Spaces) along the top. A grand name for a simple, very handy trick.",
    action: "Press it, then click the window you want. You can also swipe up with three or four fingers on the trackpad, or press Control + Up Arrow. The Windows version is Task View: Windows key + Tab.",
    tip: "On older Macs this key was called Exposé. Drag a window onto a desktop at the top of Mission Control to move it there.",
    svg: `<g stroke-width="3"><rect x="8" y="10" width="23" height="17" rx="2.5"/><rect x="8" y="35" width="23" height="19" rx="2.5"/><rect x="38" y="17" width="18" height="30" rx="2.5"/></g>`
  },
  {
    id: "keyboard-spotlight",
    name: "Spotlight search key (magnifying glass)",
    category: "keyboard",
    aka: ["Spotlight", "search key", "F4", "Launchpad", "Command Space"],
    looksLike: ["magnifying glass", "magnifier", "search", "circle with a handle", "lollipop", "ping pong bat", "frying pan"],
    meaning: "On newer Macs, the magnifying glass on F4 opens Spotlight: the search bar that finds apps, files and settings. It also does quick sums and unit conversions.",
    action: "Press it (or Command + Space on any Mac), type a few letters of what you want and press Return. On Windows, press the Windows key and start typing, or use Windows key + S.",
    tip: "Older Macs had Launchpad on F4 instead: a grid of little squares that shows all your apps. On many Chromebooks, a magnifying-glass key on the left opens search.",
    svg: `<circle cx="27" cy="27" r="15" stroke-width="4"/><line x1="38.5" y1="38.5" x2="51" y2="51" stroke-width="5.5"/>`
  },
  {
    id: "keyboard-dictation",
    name: "Dictation key (microphone)",
    category: "keyboard",
    aka: ["dictation", "microphone key", "mic key", "F5", "voice typing", "Siri key"],
    looksLike: ["microphone", "mic", "pill on a stand", "capsule in a cup", "lollipop in a u", "old microphone"],
    meaning: "On newer Macs (F5), the microphone starts Dictation: speak, and your words get typed wherever the cursor is. On some models, pressing and holding it calls Siri instead.",
    action: "Click in a text box, press the key and start talking. Press it again (or Esc) to stop. Say \"comma\" or \"new line\" for punctuation and layout. Yes, out loud. The Windows version is voice typing: Windows key + H.",
    tip: "On many Windows laptops, a microphone with a line through it is a different key: it mutes your mic for video calls, and its little light shows when you're muted.",
    svg: `<rect x="24" y="9" width="16" height="27" rx="8" fill="currentColor" stroke="none"/><path d="M16 29A16 16 0 0 0 48 29"/><path d="M32 45V54M24 54H40"/>`
  },
  {
    id: "keyboard-do-not-disturb",
    name: "Do Not Disturb / Sleep key (moon)",
    category: "keyboard",
    aka: ["Do Not Disturb", "Focus", "F6", "moon key", "sleep key", "DND"],
    looksLike: ["moon", "crescent moon", "crescent", "half moon", "banana", "c shape"],
    meaning: "On newer Mac keyboards, the moon on F6 switches Do Not Disturb on or off, so notifications stay quiet. On many Windows laptops a moon (sometimes with \"Zz\") is the Sleep key instead.",
    action: "Mac: press it once to silence notifications and again to bring them back. You can catch up later in Notification Centre. Windows laptop: press Fn + the moon key to put the computer to sleep, then press the power button or open the lid to wake it.",
    tip: "No moon key on your Mac? Older models used F5 and F6 for the keyboard backlight. You'll find Do Not Disturb under Focus in Control Centre.",
    svg: `<path d="M30.54 10.05A22 22 0 1 0 53.32 37.39A18 18 0 0 1 30.54 10.05Z"/>`
  },

  /* ---------- Windows / PC keys ---------- */
  {
    id: "keyboard-windows",
    name: "Windows key",
    category: "keyboard",
    aka: ["Win key", "Windows logo key", "Start key", "Super key", "Meta key", "WinKey", "⊞"],
    looksLike: ["four squares", "window", "four panes", "window panes", "grid of four", "tilted window", "flag", "wavy flag"],
    meaning: "The Windows key opens the Start menu, and it's the starting point for lots of handy shortcuts. On Linux it's called the Super key, which sounds like a promotion. Plug a Windows keyboard into a Mac and it works as Command.",
    action: "Useful combos: Windows + D shows the desktop, Windows + L locks the PC (do it when you walk away), Windows + E opens File Explorer, Windows + Shift + S takes a screenshot of part of the screen, Windows + V shows clipboard history and Windows + . (full stop) opens emoji.",
    tip: "The logo has changed over the years: a wavy four-colour flag (Windows 95 to 7), a slanted window (8 and 10) and four flat squares (11). Gaming keyboards often have a mode that disables it, so a stray press doesn't throw you out of a game.",
    svg: `<g fill="currentColor" stroke="none"><polygon points="9,15.5 29,12.67 29,30 9,30"/><polygon points="33,12.11 55,9 55,30 33,30"/><polygon points="9,34 29,34 29,51.33 9,48.5"/><polygon points="33,34 55,34 55,55 33,51.89"/></g>`
  },
  {
    id: "keyboard-menu",
    name: "Menu key (right-click key)",
    category: "keyboard",
    aka: ["Menu key", "Application key", "App key", "context menu key", "right-click key", "≣"],
    looksLike: ["list with cursor", "menu with a mouse pointer", "box with lines and an arrow", "page with lines", "document with an arrow", "notepad with a pointer", "three lines and a pointer"],
    meaning: "Opens the right-click menu (context menu) for whatever is selected or wherever the cursor is, just as if you'd clicked the right mouse button. The key nobody notices until the mouse dies.",
    action: "Handy when your mouse or touchpad won't right-click. No menu key? Shift + F10 does the same on Windows. On a Mac, hold Control and click.",
    tip: "It usually sits between the right-hand Alt and Ctrl keys. Many laptops have dropped it, and some newer Windows laptops have a Copilot key in that corner instead.",
    svg: `<rect x="10" y="9" width="32" height="40" rx="3" stroke-width="3"/><path d="M17 19H35M17 27H35M17 35H29" stroke-width="3"/><polygon class="knock" points="37,33 37,52 42,47.5 45.5,55 49,53.5 45.7,46.5 52,46" stroke-width="6"/><polygon points="37,33 37,52 42,47.5 45.5,55 49,53.5 45.7,46.5 52,46" fill="currentColor" stroke-width="1.5"/>`
  },
  {
    id: "keyboard-print-screen",
    name: "Print Screen (PrtSc)",
    quiz: "Take a screenshot",
    category: "keyboard",
    aka: ["PrtSc", "PrtScn", "Prt Sc", "Print Scrn", "Print Screen", "SysRq", "Druck", "screenshot key"],
    looksLike: ["prtsc", "prt sc", "prtscn", "print scrn", "prt scr", "key with letters prtsc"],
    meaning: "Takes a screenshot. On Windows 11 it opens the Snipping Tool so you can drag a box around what you want. On older setups it quietly copies the whole screen, ready to paste (Ctrl + V) into a document or email.",
    action: "Windows + PrtSc saves a full-screen picture straight into Pictures › Screenshots. Alt + PrtSc copies just the window you're using. Macs have no PrtSc key: use Command + Shift + 3 (whole screen), Command + Shift + 4 (drag a box) or Command + Shift + 5 (all the options).",
    tip: "\"SysRq\", its flatmate on the key, is a leftover from 1980s IBM computers and can be ignored. On laptops you may need to hold Fn for PrtSc to work.",
    svg: `<rect x="6" y="10" width="52" height="44" rx="8" stroke-width="3"/><text x="32" y="38" font-size="16">PrtSc</text>`
  },
  {
    id: "keyboard-scroll-lock",
    name: "Scroll Lock (ScrLk)",
    quiz: "Arrow keys scroll the page",
    category: "keyboard",
    aka: ["Scroll Lock", "ScrLk", "Scr Lk", "ScrLock", "Rollen"],
    looksLike: ["padlock with an arrow", "lock with a down arrow", "padlock with arrow pointing down", "lock with an arrow inside", "scrlk"],
    meaning: "A key from the early days of the PC that refuses to retire. When it's on, the arrow keys scroll the page instead of moving the cursor. These days practically only Microsoft Excel still cares. On laptops its light may be a padlock with an arrow.",
    action: "Arrow keys in Excel scrolling the whole sheet instead of moving between cells, with \"Scroll Lock\" in the status bar at the bottom? Press ScrLk to turn it off. No such key on your laptop? Open the On-Screen Keyboard (search Start for \"osk\") and click ScrLk there.",
    tip: "On some cheap light-up keyboards, Scroll Lock switches the backlight on and off.",
    svg: `<path d="M22 28V20A10 10 0 0 1 42 20V28" stroke-width="4"/><rect x="14" y="27" width="36" height="27" rx="4" fill="currentColor" stroke="none"/><line class="knock" x1="32" y1="33" x2="32" y2="43" stroke-width="3.5"/><polygon class="knock" points="32,49.5 26,42 38,42" stroke-width="2"/>`
  },
  {
    id: "keyboard-pause-break",
    name: "Pause / Break",
    quiz: "Freeze start-up text or stop a program",
    category: "keyboard",
    aka: ["Pause", "Break", "Pause Break", "Pause/Break", "Ctrl + Break", "Pause key"],
    looksLike: ["pause break", "letters pause and break", "pause", "break", "key with two words"],
    meaning: "Another relic from early PCs. Pause freezes some text-only screens (like start-up messages) so you can read them, and Ctrl + Break stops a running command-line program or an old-style macro.",
    action: "You'll rarely need it. One useful trick: Windows + Pause opens your PC's system info (Settings › System › About), showing the processor, memory and Windows version.",
    tip: "Pressing it by accident does no harm, unlike a stray press of Insert. Some games still use it to pause, and on laptops it's often hidden behind Fn or missing entirely.",
    svg: `<rect x="6" y="10" width="52" height="44" rx="8" stroke-width="3"/><text x="32" y="29" font-size="14">Pause</text><text x="32" y="46" font-size="14">Break</text>`
  },
  {
    id: "keyboard-insert",
    name: "Insert key (Ins)",
    quiz: "Overtype mode on / off",
    category: "keyboard",
    aka: ["Insert", "Ins", "overtype", "overwrite mode", "Einfg"],
    looksLike: ["ins", "insert", "letters ins", "key with ins"],
    meaning: "Insert switches between normal typing and overtype mode, where everything you type eats the letters to the right of the cursor instead of pushing them along. Switch it on by accident and you get a classic \"why is my text disappearing?\" moment.",
    action: "If new typing is overwriting your words, press Insert once to switch back. In Word you can stop it happening: File › Options › Advanced, then untick \"Use the Insert key to control overtype mode\".",
    tip: "Old-school shortcuts still work in most Windows apps: Ctrl + Insert copies and Shift + Insert pastes. Macs don't have an Insert key.",
    svg: `<rect x="6" y="10" width="52" height="44" rx="8" stroke-width="3"/><text x="32" y="40" font-size="22">Ins</text>`
  },
  {
    id: "keyboard-home-end",
    name: "Home and End keys",
    category: "keyboard",
    aka: ["Home", "End", "↖", "↘", "⇱", "⇲", "Pos1", "Ende"],
    looksLike: ["arrow pointing to a corner", "diagonal arrow into a corner", "arrow pointing up left", "corner arrow", "arrow with an l", "arrow to a corner"],
    meaning: "Home jumps the cursor to the start of the line and End jumps to the end of it. Some keyboards print them as diagonal arrows pointing into a corner, which is cryptic even by keyboard standards. Mac menus show them as up-left and down-right arrows.",
    action: "Ctrl + Home and Ctrl + End go to the very top or bottom of a document or spreadsheet. On a Mac, use Command + Left / Right Arrow for the start or end of a line, and Command + Up / Down Arrow for the top or bottom of the document.",
    tip: "Mac laptops have no Home or End keys. Fn + Left Arrow and Fn + Right Arrow stand in for them, but in most Mac apps they scroll to the top or bottom rather than moving the cursor.",
    svg: `<polyline points="12,36 12,12 36,12" stroke-width="4"/><line x1="52" y1="52" x2="28" y2="28" stroke-width="4"/><polygon points="19,19 32.79,23.59 23.59,32.79" fill="currentColor" stroke-width="2"/>`
  },
  {
    id: "keyboard-page-up-down",
    name: "Page Up and Page Down",
    category: "keyboard",
    aka: ["PgUp", "PgDn", "Page Up", "Page Down", "⇞", "⇟", "Bild auf", "Bild ab"],
    looksLike: ["arrows with two lines across", "arrow with lines through it", "up and down arrows with bars", "railway track arrows", "ladder arrows", "arrows with crossbars"],
    meaning: "Page Up and Page Down scroll up or down one screenful at a time, which beats a lot of frantic scrolling. Some keyboards and Mac menus show them as arrows with two lines across the stem.",
    action: "On a Mac laptop, press Fn + Up Arrow or Fn + Down Arrow. Ctrl + Page Up / Page Down switches between browser tabs, and between sheets in Excel.",
    tip: "In a web browser, the Space bar does the same as Page Down, and Shift + Space goes back up.",
    svg: `<path d="M20 54V21M13 33H27M13 42H27M44 10V43M37 22H51M37 31H51"/><g fill="currentColor" stroke-width="2"><polygon points="20,9 12,21 28,21"/><polygon points="44,55 36,43 52,43"/></g>`
  },
  {
    id: "keyboard-num-lock",
    name: "Num Lock (padlock with a 1)",
    quiz: "Number pad on / off",
    category: "keyboard",
    aka: ["Num Lock", "NumLk", "Num Lk", "number lock", "numeric lock", "number pad lock"],
    looksLike: ["padlock with a 1", "lock with number 1", "padlock with a number", "lock with a 1 inside", "numlk", "num"],
    meaning: "Num Lock switches the number pad between typing numbers (light on) and working as arrow and navigation keys, using the little Home, End and arrow labels under the numbers (light off). On laptops its light is often a padlock with a 1.",
    action: "Number pad moving the cursor instead of typing numbers? Press Num Lock. Laptop typing numbers when you press letters like U, I, O, J, K or L? Num Lock has switched on a number pad hidden inside the letter keys. Press Num Lock again (often Fn + a top-row key) to turn it off.",
    tip: "Mac keyboards don't have Num Lock: the key in that spot is called Clear, and the number pad always types numbers.",
    svg: `<path d="M22 28V20A10 10 0 0 1 42 20V28" stroke-width="4"/><rect x="14" y="27" width="36" height="27" rx="4" fill="currentColor" stroke="none"/><line class="knock" x1="34" y1="33" x2="34" y2="48" stroke-width="4"/><line class="knock" x1="29.5" y1="37" x2="34" y2="33" stroke-width="4"/>`
  }
]);
