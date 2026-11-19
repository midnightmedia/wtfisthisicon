/* Home climate: air conditioners / heat pumps (aircon) and
 * boilers, heating controls, thermostats and radiator valves (heating).
 * Format and drawing rules are in data/README.md.
 *
 * Shared parts below keep each symbol family consistent: one snowflake, one sun,
 * one flame, one radiator, one fan, used at different sizes. */
(function () {
  function r2(n) { return Math.round(n * 100) / 100; }

  // Moves and scales a path written as "x,y" pairs around (0, 0) to centre (cx, cy), scale s.
  // Only absolute M / L / C / Q / Z commands, so every number pair is a point.
  function place(d, cx, cy, s) {
    return d.replace(/(-?\d*\.?\d+),(-?\d*\.?\d+)/g, function (m, x, y) {
      return r2(cx + s * x) + " " + r2(cy + s * y);
    });
  }

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

  // Sun: circle of radius r with eight rays running from r1 to r2.
  function sun(cx, cy, r, ra, rb) {
    var d = "";
    for (var k = 0; k < 8; k++) {
      var a = (k * Math.PI) / 4, c = Math.cos(a), s = Math.sin(a);
      d += "M" + r2(cx + ra * c) + " " + r2(cy + ra * s) + "L" + r2(cx + rb * c) + " " + r2(cy + rb * s);
    }
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '"/><path d="' + d + '"/>';
  }

  // Small solid water drop: round part of radius r centred on (cx, cy), point on top.
  function drop(cx, cy, r) {
    var t = r2(cy - 2.2 * r);
    return '<path fill="currentColor" stroke="none" d="M' + cx + " " + t +
      "C" + r2(cx - 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + r2(cx - r) + " " + r2(cy - 0.8 * r) + " " + r2(cx - r) + " " + cy +
      "A" + r + " " + r + " 0 0 0 " + r2(cx + r) + " " + cy +
      "C" + r2(cx + r) + " " + r2(cy - 0.8 * r) + " " + r2(cx + 0.3 * r) + " " + r2(cy - 1.5 * r) + " " + cx + " " + t + 'Z"/>';
  }

  // Flame: outline with a lick on the left and a solid inner tongue. 48 units tall at scale 1.
  var FLAME_OUT = "M2,-24C4,-14 16,-8 16,6C16,17 9,24 0,24C-9,24 -16,17 -16,7C-16,-2 -11,-8 -6,-12C-6,-6 -4,-3 -1,-2C-2,-10 -1,-18 2,-24Z";
  var FLAME_IN = "M-1,2C4,6 8,10 8,15C8,19 4.5,21.5 0,21.5C-4.5,21.5 -8,19 -8,15C-8,12 -6,10 -4,8.5C-4,11 -3,12.5 -1.5,13C-2.5,9.5 -2.5,5.5 -1,2Z";
  function flame(cx, cy, s) {
    return '<path d="' + place(FLAME_OUT, cx, cy, s) + '"/>' +
      '<path fill="currentColor" stroke="none" d="' + place(FLAME_IN, cx, cy, s) + '"/>';
  }

  // Fan with three solid curved blades (one blade drawn pointing up, then rotated; the -10° offset balances it in the box).
  var BLADE = "M0,0C-3.5,-5 -5,-11.5 -3,-16.5C-0.5,-22.5 9.5,-22 13,-17C16,-12.5 11.5,-4.5 0,0Z";
  function fan(cx, cy, s) {
    var b = place(BLADE, cx, cy, s);
    return '<g fill="currentColor" stroke="none">' +
      // Four blades, as on Mitsubishi, Daikin, LG and Midea remotes
      '<path d="' + b + '" transform="rotate(-20 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(70 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(160 ' + cx + " " + cy + ')"/>' +
      '<path d="' + b + '" transform="rotate(250 ' + cx + " " + cy + ')"/>' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r2(3.5 * s) + '"/></g>';
  }




  var MOON_SMALL = "M41.27 32.14A11 11 0 1 0 53.86 44.73A9 9 0 0 1 41.27 32.14Z";

  WTF.add([
    // =====================================================================
    // AIR CONDITIONERS & HEAT PUMPS (remote and indoor-unit symbols)
    // =====================================================================
    {
      id: "aircon-cool-mode",
      name: "Cool mode",
      category: "aircon",
      aka: ["cooling", "COOL", "air conditioning", "AC mode", "cold air"],
      looksLike: ["snowflake", "star", "asterisk", "ice crystal", "snowflake on the remote"],
      meaning:
        "Cooling mode: the unit pulls heat out of the room, dumps it outside and blows cool, slightly drier air back in. It keeps going until the room reaches the temperature you've set.",
      action:
        "Pick a sensible target (around 24–26°C on a hot day) and shut the windows and doors. Setting 16°C doesn't cool the room any faster. It just runs for longer and costs more.",
      tip: "Water dripping from the outdoor unit, or from a little pipe outside, is normal while cooling. It's moisture taken out of your room's air.",
      svg: snowflake(32, 32, 22, 3.5)
    },
    {
      id: "aircon-heat-mode",
      name: "Heat mode",
      category: "aircon",
      aka: ["heating", "HEAT", "heat pump mode", "warm air", "reverse cycle"],
      looksLike: ["sun", "sunshine", "circle with rays", "circle with lines around it", "sun on the remote"],
      meaning:
        "Heating mode: the unit works as a heat pump, pulling warmth out of the outdoor air (yes, even on cold days) and pumping it indoors. It's usually much cheaper to run than plug-in electric heaters.",
      action:
        "Set the temperature you want (19–21°C is typical) and give it a few minutes. If nothing blows at first, that's normal: the indoor fan politely waits until the coil inside is warm.",
      tip: "Some portable and 'cooling only' units have no sun button at all. In cold, damp weather the heating may pause for a few minutes while the outdoor unit defrosts. That's normal too.",
      svg: sun(32, 32, 9.5, 15.5, 22)
    },
    {
      id: "aircon-dry-mode",
      name: "Dry / dehumidify mode",
      category: "aircon",
      aka: ["dry", "DRY", "dehumidify", "dehumidifier", "humidity", "moisture removal"],
      looksLike: ["water drop", "drop", "raindrop", "teardrop", "droplet", "drip"],
      meaning:
        "Dry mode takes moisture out of the air rather than chasing a temperature. It runs the cooling gently with a slow fan, so damp air condenses on the cold coil inside and drains away.",
      action:
        "Use it on muggy, sticky days when the room isn't that hot but feels clammy, or to help dry out a damp room. It cools the room a little too, so it's not much use in winter.",
      tip: "In dry mode most units pick the fan speed themselves and ignore the fan button. Some remotes just say DRY, or show two or three drops.",
      svg:
        '<path d="M32 9.5C32 9.5 17 27.5 17 39.5A15 15 0 0 0 47 39.5C47 27.5 32 9.5 32 9.5Z"/>' +
        '<path d="M24.5 41A8 8 0 0 0 30.5 47.5" stroke-width="3"/>'
    },
    {
      id: "aircon-fan-mode",
      name: "Fan only mode",
      category: "aircon",
      aka: ["fan", "FAN", "fan only", "ventilation", "circulate", "air circulation"],
      looksLike: ["fan", "propeller", "windmill", "four blades", "pinwheel", "flower"],
      meaning:
        "The indoor fan blows air round the room with no cooling or heating at all. Your air conditioner is moonlighting as an ordinary electric fan.",
      action:
        "Use it to move air on a mild day, or run it for 20–30 minutes after cooling to dry out the inside of the unit and stop it smelling musty. It uses very little electricity.",
      tip: "Expecting cold air and only getting room-temperature air? Check you haven't landed on fan instead of cool. They're often neighbours on the mode button.",
      svg: fan(32, 32, 1)
    },
    {
      id: "aircon-auto-mode",
      name: "Auto mode",
      quiz: "Picks heating or cooling itself",
      category: "aircon",
      aka: ["AUTO", "automatic", "auto changeover", "heat/cool auto", "smart mode"],
      looksLike: ["letter a", "a with circular arrows", "circular arrows", "arrows going round", "a in a circle", "recycling arrows"],
      meaning:
        "Automatic mode: the unit picks cooling, heating (or sometimes dry) by itself, by comparing the room temperature with the one you've set.",
      action:
        "Set the temperature you want and let it decide. If it keeps flip-flopping between heating and cooling, or you only ever want one of them, pick cool or heat yourself.",
      tip: "Not to be confused with AUTO fan speed, usually shown next to the fan bars. Same word, same remote, different job: it only decides how hard the fan blows, not whether it heats or cools.",
      svg:
        '<path d="M11.33 24.48A22 22 0 0 1 51.94 22.7M45.96 20.16L51.94 22.7L53.84 16.49"/>' +
        '<path d="M52.67 39.52A22 22 0 0 1 12.06 41.3M18.04 43.84L12.06 41.3L10.16 47.51"/>' +
        '<path d="M24.5 42L32 21L39.5 42M27.2 35H36.8"/>'
    },
    {
      id: "aircon-swing",
      name: "Swing / louvre direction",
      category: "aircon",
      aka: ["swing", "SWING", "vane", "louvre", "louver", "flap", "air direction", "airflow direction"],
      looksLike: ["air conditioner with a curved arrow", "curved double arrow", "lines spreading out", "box with arrows", "smile with arrows", "fan of lines"],
      meaning:
        "Controls the flap (louvre or vane) that steers the air. 'Swing' makes it sweep slowly up and down, or side to side, to spread the air round the room. Pressing again usually stops it where it is.",
      action:
        "Press it to start the sweep and again to freeze the flap where you like it. For cooling, aim it slightly upwards (cold air sinks); for heating, point it down (warm air rises).",
      tip: "Brands call it Swing, Vane, Flap or Air Direction, as one name would have been too easy. Some remotes have two buttons, up/down and left/right. Don't push the flap by hand: its little motor gears break easily.",
      // Mitsubishi wide vane: the unit, a fan of air lines and a curved double arrow.
      svg: '<rect x="8" y="12" width="48" height="20" rx="5.5"/><path d="M15 26H49" stroke-width="3"/><path d="M32 37V45M26 36.5L22.5 44M38 36.5L41.5 44M20.5 35.5L15 41.5M43.5 35.5L49 41.5" stroke-width="2.6"/><path d="M8.44 35.99A26 26 0 0 0 55.56 35.99M57.32 41.73L55.56 35.99L50.04 38.33M13.96 38.33L8.44 35.99L6.68 41.73"/>'
    },
    {
      id: "aircon-fan-speed",
      name: "Fan speed",
      category: "aircon",
      aka: ["fan speed", "FAN", "low / medium / high", "auto fan", "airflow", "blower speed"],
      looksLike: ["fan with bars", "bars going up", "signal bars", "steps", "staircase", "fan and bars"],
      meaning:
        "Sets how hard the indoor fan blows. The bars show the level: one bar is low, two medium, three (or more) high. 'AUTO' or an 'A' by the fan lets the unit make up its own mind.",
      action:
        "Use high (or auto) to reach the temperature quickly, then drop to low for quieter running. Auto is a good everyday choice.",
      tip: "Some remotes show the speed as wind lines or growing blades instead of bars, and many squeeze 'quiet' in below low and 'turbo' above high on the same button.",
      svg:
        fan(20, 32, 0.6) +
        '<path d="M39 43V37M46 43V30M53 43V23" stroke-width="5"/>'
    },
    {
      id: "aircon-sleep-mode",
      name: "Sleep / night mode",
      category: "aircon",
      aka: ["sleep", "SLEEP", "night mode", "good sleep", "comfort sleep", "night setback"],
      looksLike: ["moon", "crescent moon", "moon with stars", "moon and stars", "moon with zz", "banana"],
      meaning:
        "A bedtime setting: the unit runs quietly and slowly shifts the set temperature over the first hour or two (usually up by 1–2°C when cooling, or down when heating), so you don't wake up too cold or too hot. For once, the symbol is exactly what it looks like.",
      action:
        "Press it when you go to bed. Pair it with the off timer if you only want the unit running for the first part of the night.",
      tip: "Some units also dim their display in sleep mode. If the glowing numbers are still lighting up the room, look for a separate 'LED', 'LIGHT' or 'DISPLAY' button: that's the one that turns them off.",
      // Crescent moon with stars, as on Midea and Hisense remotes.
      svg: '<path d="M25.49 19.68A18 18 0 1 0 45.82 40.01A14.5 14.5 0 0 1 25.49 19.68Z"/><path fill="currentColor" stroke="none" d="M46 6.5C47.43 11.57 47.43 11.57 52.5 13C47.43 14.43 47.43 14.43 46 19.5C44.57 14.43 44.57 14.43 39.5 13C44.57 11.57 44.57 11.57 46 6.5Z"/><path fill="currentColor" stroke="none" d="M55 21C55.88 24.12 55.88 24.12 59 25C55.88 25.88 55.88 25.88 55 29C54.12 25.88 54.12 25.88 51 25C54.12 24.12 54.12 24.12 55 21Z"/><path fill="currentColor" stroke="none" d="M38 22.5C38.77 25.23 38.77 25.23 41.5 26C38.77 26.77 38.77 26.77 38 29.5C37.23 26.77 37.23 26.77 34.5 26C37.23 25.23 37.23 25.23 38 22.5Z"/>'
    },
    {
      id: "aircon-eco",
      name: "Eco / energy saving",
      category: "aircon",
      aka: ["ECO", "econo", "econo cool", "energy saver", "economy", "power saving"],
      looksLike: ["leaf", "green leaf", "eco", "plant", "leaf with a line"],
      meaning:
        "An energy-saving mode: the unit caps its maximum power, or nudges the set temperature a degree or two towards the outdoor temperature, so it uses less electricity.",
      action:
        "Turn it on when the room is already comfortable and you just want to hold it there cheaply. Turn it off when you need the room cooled or heated quickly.",
      tip: "It works differently from brand to brand: some cap the compressor's power, some shift the temperature, and some also sweep the airflow so a warmer setting still feels cool. The leaf won't tell you which. The manual will.",
      svg:
        '<path d="M16.5 47.5C13.5 28.5 25.5 12.5 51.5 11.5C52.5 35.5 37.5 49.5 16.5 47.5Z"/>' +
        '<path d="M16.5 47.5L38.5 25.5" stroke-width="3"/><path d="M16.5 47.5L11.5 52.5"/>'
    },
    {
      id: "aircon-turbo",
      name: "Turbo / powerful / jet mode",
      category: "aircon",
      aka: ["turbo", "TURBO", "powerful", "jet", "jet cool", "super", "hi power", "fast cool", "boost"],
      looksLike: ["turbo", "word turbo", "jet", "powerful", "double arrow", "fast forward"],
      meaning:
        "Maximum blast: the fan and compressor run flat out for a short time to cool (or heat) the room as fast as possible.",
      action:
        "Use it when you walk into a hot or freezing room. Most units drop back to normal by themselves after about 15–30 minutes, or once the room is at temperature. It's louder and uses more power while it's on.",
      tip: "Every brand names this differently (Turbo, Powerful, Jet, Super, Hi Power, Fast), and the symbol varies too: arrows, a rocket, a fan with speed lines, or just the word. Understatement isn't its strong point.",
      // Most remotes print the word on the button (Samsung, Mitsubishi); there is no common pictogram.
      svg: '<rect x="4" y="20" width="56" height="24" rx="6" stroke-width="3"/><text x="32" y="37.6" font-size="12.5">TURBO</text>'
    },
    {
      id: "aircon-timer",
      name: "Timer on / off",
      category: "aircon",
      aka: ["timer", "TIMER", "on timer", "off timer", "sleep timer", "delay"],
      looksLike: ["clock", "clock with on off", "clock with on", "clock face", "watch", "clock with a power button"],
      meaning:
        "Sets the unit to switch itself on or off later, so the room is comfortable by the time you get in. 'Timer on' starts it after a set time (or at a set clock time on some remotes); 'timer off' stops it.",
      action:
        "Press timer on or timer off, use the arrows to set the hours, then confirm (often by pressing the timer button again, or SET). A clock icon on the remote or a timer light on the indoor unit shows a timer is active.",
      tip: "A timer light on the indoor unit that keeps flashing may be an error code, not a timer. Several brands report faults by blinking the timer and power lights in a pattern, a sort of Morse code only the manual can translate.",
      // Clock with ON and OFF, as on Daikin, Midea and LG remotes.
      svg: '<circle cx="17" cy="32" r="11"/><path d="M17 25V32H22" stroke-width="3"/><text x="44" y="29" font-size="14">ON</text><text x="44" y="47" font-size="14">OFF</text>'
    },
    {
      id: "aircon-i-feel",
      name: "I Feel / Follow Me",
      category: "aircon",
      aka: ["i feel", "iFeel", "follow me", "remote sensor", "room sensing", "smart sensor"],
      looksLike: ["remote control", "remote with a thermometer", "remote and thermometer", "remote with a person", "thermometer"],
      meaning:
        "The unit reads the temperature from a sensor inside the remote control, wherever you are, instead of its own sensor up near the ceiling. That one often reads warmer or colder than where you're actually sitting.",
      action:
        "Turn it on and keep the remote near you, out of direct sunlight and away from radiators or lamps. The remote reports the temperature every few minutes, so it needs to stay in sight of the unit.",
      tip: "Usually called 'I Feel' (on Gree and many others) or 'Follow Me' (on Midea-made units). If the room never seems to reach temperature, check the remote isn't sunbathing in a window.",
      svg:
        '<rect x="12" y="8" width="22" height="48" rx="5"/>' +
        '<rect x="17" y="14" width="12" height="10" rx="1.5" stroke-width="2.5"/>' +
        '<g fill="currentColor" stroke="none"><circle cx="19" cy="33" r="2.2"/><circle cx="27" cy="33" r="2.2"/>' +
        '<circle cx="19" cy="41" r="2.2"/><circle cx="27" cy="41" r="2.2"/></g>' +
        '<path d="M42 40.26V16A4 4 0 0 1 50 16V40.26A7 7 0 1 1 42 40.26Z"/>' +
        '<circle cx="46" cy="46" r="3.5" fill="currentColor" stroke="none"/><path d="M46 46V24" stroke-width="2.5"/>'
    },
    {
      id: "aircon-self-clean",
      name: "Self-clean / iClean",
      category: "aircon",
      aka: ["self clean", "iClean", "auto clean", "clean", "X-fan", "mould prevention", "internal clean"],
      looksLike: ["air conditioner with sparkles", "unit with stars above", "box with sparkles", "sparkles", "stars"],
      meaning:
        "A cleaning cycle for the inside of the indoor unit: it dries out the coil and fan (some models frost the coil over and then melt it to rinse off dust) to stop mould and musty smells. Sadly, it does NOT clean the filters.",
      action:
        "Start it when you don't need the room cooled or heated: it can take from 20 minutes to over an hour and may blow warm or cool air or drip a little. Keep washing the filters yourself every few weeks.",
      tip: "Names vary: Self Clean, iClean, Auto Clean, X-Fan. Some units dry themselves out every time you switch off cooling, which is why the fan carries on after you've pressed off.",
      // LG and Midea: sparkles above the unit.
      svg: '<rect x="8" y="30" width="48" height="20" rx="5.5"/><path d="M15 44H49" stroke-width="3"/><path fill="currentColor" stroke="none" d="M24 6C25.98 13.02 25.98 13.02 33 15C25.98 16.98 25.98 16.98 24 24C22.02 16.98 22.02 16.98 15 15C22.02 13.02 22.02 13.02 24 6Z"/><path fill="currentColor" stroke="none" d="M38 4C39.1 7.9 39.1 7.9 43 9C39.1 10.1 39.1 10.1 38 14C36.9 10.1 36.9 10.1 33 9C36.9 7.9 36.9 7.9 38 4Z"/><path fill="currentColor" stroke="none" d="M41 17C41.88 20.12 41.88 20.12 45 21C41.88 21.88 41.88 21.88 41 25C40.12 21.88 40.12 21.88 37 21C40.12 20.12 40.12 20.12 41 17Z"/>'
    },
    {
      id: "aircon-filter",
      name: "Clean filter reminder",
      category: "aircon",
      urgency: "soon",
      aka: ["filter", "FILTER", "filter sign", "clean filter", "filter reset", "filter light"],
      looksLike: ["grid", "mesh", "net", "box with criss-cross lines", "waffle", "square with diagonal lines"],
      meaning:
        "A reminder that the air filters behind the front panel are due a clean. On most units it's just a running-hours counter (every few hundred hours), not a sensor that has actually looked at the filter.",
      action:
        "Switch off, lift the front panel and slide out the mesh filters. Vacuum or rinse them in lukewarm water and let them dry fully in the shade before refitting. Then press the filter reset button (or the one your manual names) to clear the light.",
      tip: "Clogged filters make the unit weaker, noisier and pricier to run, and can make it ice up or drip. Every 2–4 weeks in heavy use is a good habit.",
      svg:
        '<rect x="10" y="12" width="44" height="40" rx="4"/>' +
        '<path d="M10 22L20 12M10 32L30 12M10 42L40 12M12 50L50 12M20 52L54 18M30 52L54 28M40 52L54 38' +
        'M54 22L44 12M54 32L34 12M54 42L24 12M52 50L14 12M44 52L10 18M34 52L10 28M24 52L10 38" stroke-width="2.25"/>'
    },
    {
      id: "aircon-defrost",
      name: "Defrost (heat pump in winter)",
      category: "aircon",
      urgency: "info",
      aka: ["defrost", "defrosting", "dF", "H1", "de-ice", "heating paused"],
      looksLike: ["snowflake with drops", "melting snowflake", "snowflake and water drops", "dripping snowflake", "snowflake with two drops"],
      meaning:
        "The heat pump is melting ice off its outdoor unit. It's normal, not a fault. In heating mode on cold, damp days, ice builds up out there, so every so often the system pauses the heating for a few minutes and runs backwards to melt it. This symbol (or a flashing light) tells you that's happening.",
      action:
        "Just wait: it usually takes 5–15 minutes. The indoor fan slows or stops, and the outdoor unit may hiss, steam and drip as if something dreadful is going on. Nothing is. Heating comes back by itself. Only call an installer if it's defrosting almost all the time or the outdoor unit stays caked in ice.",
      tip: "Many displays show 'dF' or 'H1' instead, or blink a light. The cloud coming off the outdoor unit is steam from the melting ice, not smoke.",
      svg: snowflake(32, 25, 15, 3.5) + drop(23, 50, 3.4) + drop(41, 50, 3.4)
    },
    {
      id: "aircon-quiet",
      name: "Quiet mode",
      category: "aircon",
      aka: ["quiet", "QUIET", "silent", "silence", "whisper", "low noise", "outdoor unit quiet"],
      looksLike: ["face with a finger to its lips", "shh", "finger on lips", "head with a finger", "face profile", "speaker", "ear"],
      meaning:
        "Runs the indoor fan (and on some models the outdoor unit too) at its slowest, quietest speed. The trade-off: it cools or heats more slowly.",
      action:
        "Use it at night, on calls, or when the room is already at temperature. Switch it off if the room isn't keeping up.",
      tip: "Some brands show a fan with a tiny bar, a moon, or just the word QUIET or SILENT. On some remotes it isn't its own button at all, just the lowest step of the fan speed button.",
      // Midea quiet button: a face with a finger to its lips.
      svg: '<path fill="currentColor" stroke="none" fill-rule="evenodd" d="M28.9 39.2C28.1 38.8 27.6 35.9 27.5 35C27 31.9 26.1 27.9 22.5 27.2C21.7 27 21 27.1 20.3 27.3C17.8 28.1 16.3 30.8 16.7 33.3C16.9 34.9 17.5 36.9 16.8 38.5C16.3 39.5 15.1 40 14.2 40.5C12.1 41.8 8.5 43.6 8.2 46.3C7.9 48.1 9.4 51.7 10.1 53.5C10.5 54.4 10.9 55.3 11.8 55.7C12.8 56.1 14.1 56 15.1 56C17.3 56 19.4 56 21.6 56C23.6 56 27.9 56.4 29.5 55.3C30.1 54.9 30.4 54.2 30.5 53.5C30.6 52.7 30.3 51.9 30.2 51.1C30.1 50.4 30 49.6 29.9 48.9C29.8 47.9 29.5 47 29.4 46.1C29.4 45.3 29 43.5 29.6 43C30.4 42.9 31.1 43.5 31.9 43.7C33.1 44 34.8 43.7 35.8 44.6C36.7 45.4 36.5 47.1 36.7 48.2C37.1 50 38.2 51.7 39.6 52.8C42.2 54.8 45.7 55 48.8 54.6C49.8 54.4 50.8 54.1 51.8 53.8C53.2 53.5 55.8 52.9 55.6 50.9C55.5 49.6 54.1 48.9 52.9 49C52.3 49.1 51.7 49.3 51.1 49.5C48.9 50 46.6 50.8 44.4 50.2C41.9 49.5 40.7 47.3 40.6 44.8C40.6 43.6 40.8 42.2 40.2 41.1C39.1 38.9 35.4 40.5 35.1 38.6C35 37.8 35.5 37 35.8 36.3C36.6 34.5 37.5 32.8 38.3 30.9C38.8 29.8 39.3 28.8 39.5 27.6C39.9 26 39.6 24.4 39.9 22.8C40.3 20.3 41.9 17.6 43.9 16C45.9 14.4 48.4 13.3 50.8 12.8C52.1 12.6 53.7 12.7 54.8 12C56.8 10.8 55.4 8.4 53.5 8.1C52.3 8 51.1 8.4 49.9 8.6C43.9 9.6 38.5 13.5 36.3 19.3C35.8 20.6 35.4 22 35.3 23.4C35.2 24.6 35.3 25.8 35.1 26.9C34.9 28 34.3 28.9 33.9 29.9C32.9 32.3 31.8 34.7 30.6 37C30.2 37.7 29.8 39 28.9 39.2ZM21.7 33C22.6 33 22.6 34.6 22.7 35.3C22.8 35.9 23.1 36.4 23.2 37C23.4 37.6 23.4 38.2 23.6 38.9C23.7 39.5 23.9 40 24 40.6C24.3 41.8 24.5 43.1 24.7 44.4C24.9 45.2 24.9 46.2 25.1 47.1C25.3 48.2 25.9 50.1 24.9 51C24 51.7 21.9 51.8 20.8 51.9C19.2 51.9 15.7 52.6 14.5 51.5C13.8 51 13.5 50 13.2 49.1C13.1 48.6 12.9 48 13 47.5C13 46.3 14.2 45.7 15.1 45.2C16.7 44.1 20.1 42.6 21.2 41.1C22.1 40.1 21.8 38.8 21.8 37.6C21.8 37 21.9 36.3 21.8 35.8C21.7 34.9 21 33.8 21.7 33Z"/>'
    },

    // =====================================================================
    // BOILERS & HEATING CONTROLS
    // =====================================================================
    {
      id: "heating-radiator-symbol",
      name: "Central heating (radiator symbol)",
      category: "heating",
      aka: ["central heating", "CH", "heating", "radiator", "space heating", "flow temperature"],
      looksLike: ["radiator", "comb", "vertical bars", "fence", "bumpy rectangle", "box with lines", "radiator with legs"],
      meaning:
        "On a boiler or heating control, the radiator means central heating: the hot water pumped round your radiators (or underfloor pipes). Lit up, it means the heating is on or working on it right now.",
      action:
        "Next to a temperature or +/− buttons, it sets how hot the water sent to the radiators gets (the 'flow temperature'). On a modern condensing boiler, turning it down to around 55–60°C (from the 70–80°C many are left on) usually saves gas. The house just warms up a little more slowly.",
      tip: "The radiator setting on the boiler controls how hot the radiators get, not how warm the room gets: that's your room thermostat's job. Got a hot water cylinder? Check the manual before turning it right down, as on some boilers one setting heats both.",
      // As on Vaillant and Worcester displays: straight bars on top and bottom rails.
      svg: '<g stroke-width="4.5"><path d="M16 11V53M24 11V53M32 11V53M40 11V53M48 11V53"/><path d="M10 18H54M10 46H54"/></g>'
    },
    {
      id: "heating-hot-water-tap",
      name: "Hot water (tap symbol)",
      category: "heating",
      aka: ["hot water", "DHW", "domestic hot water", "HW", "tap", "faucet"],
      looksLike: ["tap", "faucet", "water tap", "spigot", "tap with a drop", "dripping tap"],
      meaning:
        "The tap means hot water for your taps, showers and baths, as opposed to the heating. Refreshingly literal, by boiler standards. On a combi boiler it lights up while you're running hot water; next to a temperature it sets how hot the water comes out.",
      action:
        "Use the tap's +/− buttons or dial to set the hot water temperature: about 50–55°C on a combi is plenty and less likely to scald. On a programmer, the tap (or 'HW') is the timer for a hot water cylinder.",
      tip: "Stored hot water in a cylinder should reach 60°C regularly to keep legionella bacteria away. Combis heat water as you use it, so there's nothing stored.",
      // Vaillant and Worcester: a plain tap, no wall plate or drop.
      svg: '<g transform="translate(1 4)"><path d="M12 17H37A12 12 0 0 1 49 29V34H41V29A4 4 0 0 0 37 25H12Z"/><path d="M26 17V11M19 10.5H33"/></g>'
    },
    {
      id: "heating-flame",
      name: "Flame (burner on)",
      quiz: "Heating is on right now",
      category: "heating",
      aka: ["flame", "burner on", "boiler firing", "burner lit", "ignition", "fire"],
      looksLike: ["flame", "fire", "candle flame", "teardrop", "flame symbol"],
      meaning:
        "The boiler's burner is lit: it's burning gas (or oil) right now to heat water. It comes and goes as the boiler fires up and turns down, which is perfectly normal.",
      action:
        "Nothing to do: it's just a status light. If it never appears and you've no heating or hot water, check the boiler has power, the pressure is OK and your other gas appliances work. Then look for a fault code.",
      tip: "On a room thermostat, a flame means 'asking the boiler for heat' instead. A carbon monoxide alarm going off, a lazy yellow or orange flame, or soot marks around the boiler mean: switch it off, open windows, get outside and call the gas emergency line (0800 111 999 in Great Britain), and see a doctor if anyone feels unwell.",
      svg: flame(32, 32, 1)
    },
    {
      id: "heating-flashing-symbol",
      name: "Flashing radiator or tap symbol",
      quiz: "Heating is on right now",
      category: "heating",
      urgency: "info",
      aka: ["flashing radiator", "flashing tap", "blinking symbol", "radiator icon flashing", "tap icon flashing"],
      looksLike: ["flashing radiator", "blinking radiator", "flashing tap", "radiator with lines around it", "radiator with sparks", "blinking tap"],
      meaning:
        "Honest answer: it depends on the brand. On many combis a flashing radiator means the heating has been asked for and the boiler is working on it, and a flashing tap means hot water is being drawn or the pre-heat (keep-warm) is running. On others it just means you're in adjustment mode after pressing a button, and it stops after a few seconds.",
      action:
        "If your heating and hot water work, it's almost certainly a normal status. If it flashes alongside a fault code, a spanner or a red light, or you have no heat, look up that code for your exact boiler model.",
      tip: "Boiler makers have politely agreed to disagree on this one, so the quickest real answer is the manual: search your boiler's make and model (on the front or underneath) plus 'user manual'. Most are free online.",
      // The boiler display radiator, with flash lines.
      svg: '<g transform="matrix(0.62 0 0 0.62 12.16 18)"><g stroke-width="4.5"><path d="M16 11V53M24 11V53M32 11V53M40 11V53M48 11V53"/><path d="M10 18H54M10 46H54"/></g></g><path d="M32 13V7M20 15L16 11M44 15L48 11M10 23L6 21M54 23L58 21" stroke-width="3"/>'
    },
    {
      id: "heating-lockout-reset",
      name: "Lockout / reset (flame with a cross)",
      category: "heating",
      urgency: "soon",
      aka: ["lockout", "locked out", "reset", "R", "ignition failure", "flame failure", "no flame", "reset button"],
      looksLike: ["flame with a cross", "flame with an x", "crossed out flame", "fire with x", "flame and x", "flame with a reset button"],
      meaning:
        "The boiler tried to light and couldn't, or spotted a fault, so it has shut itself down safely and 'locked out'. It won't try again until someone presses reset.",
      action:
        "Press reset once (some need holding for a few seconds) and give it a few minutes. If it locks out again, check the gas is on (prepayment credit? does the hob light?). In freezing weather, check the plastic condensate pipe outside isn't frozen, and thaw it with warm, not boiling, water. After two or three tries, stop and call a Gas Safe registered engineer.",
      tip: "If you can smell gas, don't reset anything and don't use light switches: open windows, turn the gas off at the meter if you can, leave and call the gas emergency line (0800 111 999 in Great Britain, 0800 002 001 in Northern Ireland, or your local emergency number).",
      svg:
        flame(28, 30, 0.92) +
        '<circle class="knock" cx="45" cy="45" r="11.5" stroke-width="0"/>' +
        '<path d="M39.5 39.5L50.5 50.5M50.5 39.5L39.5 50.5" stroke-width="4"/>'
    },
    {
      id: "heating-low-pressure",
      name: "Low water pressure",
      category: "heating",
      urgency: "soon",
      aka: ["low pressure", "boiler pressure", "bar", "pressure gauge", "water pressure", "F1", "F.22", "E119", "refill"],
      looksLike: ["gauge", "dial", "speedometer", "clock with a needle", "needle pointing down", "gauge with a drop", "bar", "water drop with a minus"],
      meaning:
        "The water pressure inside your heating system has dropped too low, so the boiler has stopped to protect itself. Normal is about 1–1.5 bar with the heating cold (rising to around 2 bar when hot); below roughly 0.5–0.8 bar most boilers give up.",
      action:
        "Top it up with the filling loop: with the boiler off and cool, slowly open the filling-loop valve(s) under the boiler, watch the gauge rise to 1–1.5 bar, then close them firmly. Reset the boiler if it asks. Your manual shows where the loop (or filling key) is.",
      tip: "A pressure drop after bleeding radiators is normal: just top up. Topping up every week or two means there's a leak somewhere (check radiator valves and the pressure-relief pipe outside), so get an engineer. Common codes, as each brand has its own: Ideal F1, Vaillant F.22, Baxi E119.",
      svg:
        '<circle cx="32" cy="32" r="22"/>' +
        '<path d="M21 43L18.6 45.4M17.7 25.8L14.5 24.5M32 17.5V14M46.3 25.8L49.5 24.5M43 43L45.4 45.4" stroke-width="3"/>' +
        '<path d="M32 32L19.5 38.5"/><circle cx="32" cy="32" r="3.5" fill="currentColor" stroke="none"/>' +
        drop(32, 46, 3.3)
    },
    {
      id: "heating-service",
      name: "Service / spanner symbol",
      quiz: "Service due or engineer needed",
      category: "heating",
      urgency: "soon",
      aka: ["service due", "spanner", "wrench", "maintenance", "service mode", "engineer needed"],
      looksLike: ["spanner", "wrench", "tool", "spanner symbol", "wrench on the display"],
      meaning:
        "Depending on your boiler, the spanner means the annual service is due, the boiler is in engineer/service mode, or (usually shown with a code) there's a fault that needs an engineer.",
      action:
        "If it's on its own and everything works, book a service: boilers should be checked every year by a Gas Safe registered engineer (OFTEC for oil). If it comes with a code and no heat, note the code and call an engineer. Don't open the boiler casing yourself.",
      tip: "Many installers set a reminder to pop up 12 months after fitting, and the engineer clears it at the service. UK landlords must have gas appliances safety-checked every year.",
      // Vaillant: a double-ended open spanner.
      svg: '<path stroke-width="5.5" d="M22.5 41.5L41.5 22.5"/><path stroke-width="5" d="M52 18A6 6 0 1 1 46 12M12 46A6 6 0 1 1 18 52"/>'
    },
    {
      id: "heating-frost-protection",
      name: "Frost protection (snowflake)",
      category: "heating",
      aka: ["frost", "frost protect", "frost mode", "anti-freeze", "freeze protection", "frost stat"],
      looksLike: ["snowflake", "star", "asterisk", "ice crystal", "snow"],
      meaning:
        "Frost protection: the heating stays off, but switches itself on if the house (or the boiler) gets close to freezing, typically around 5°C, so pipes don't freeze and burst. Lit up, it means frost-only mode is set or it's protecting against frost right now. Burst pipes are an expensive way to find out where your pipes run.",
      action:
        "Going away in winter? Leave the boiler powered with frost protection on rather than switching it off at the wall: it needs electricity (and gas) to protect itself. For normal heating, switch the thermostat or boiler out of frost mode.",
      tip: "On a radiator valve, the snowflake setting is the same idea for one room: the valve only opens if that room is about to get freezing cold.",
      svg: snowflake(32, 32, 22, 3.5)
    },
    {
      id: "heating-eco-preheat",
      name: "ECO / pre-heat (combi boilers)",
      quiz: "Hot water pre-heat on / off",
      category: "heating",
      aka: ["eco", "ECO button", "pre-heat", "preheat", "comfort", "keep warm", "warm start"],
      looksLike: ["eco", "eco button", "word eco", "button with eco", "leaf"],
      meaning:
        "On most combi boilers this controls 'pre-heat': whether the boiler keeps a little water hot inside so hot water reaches the tap sooner. ECO (pre-heat off) saves gas, but you wait a few extra seconds. Comfort (pre-heat on) is quicker, but the boiler fires up now and then all day.",
      action:
        "If you don't mind waiting a few seconds for hot water, leave ECO on. If the boiler fires up by itself when nobody's using any water, it's usually just the pre-heat, not a fault.",
      tip: "Names vary: an ECO button (on many Worcester Bosch combis, where light on = pre-heat off, the opposite of what you'd guess), 'comfort', 'pre-heat' or 'warm start'. On some heat pumps and system boilers 'ECO' means something else, like a lower-temperature setting, so check the manual.",
      svg:
        '<rect x="7" y="17" width="50" height="30" rx="9"/><text x="32" y="39.5" font-size="20">eco</text>'
    },
    {
      id: "heating-boost",
      name: "Boost (+1 hour)",
      category: "heating",
      aka: ["boost", "+1h", "+1 hr", "one hour boost", "extra hour", "override"],
      looksLike: ["+1", "+1h", "plus one", "circle arrow with plus one", "clock with a plus", "arrow going round"],
      meaning:
        "Turns the heating (or hot water) on right now for a fixed time, usually 30 minutes to an hour (more presses for 2 or 3 hours), whatever the schedule says. Then it goes back to the normal timetable by itself. The 'I'm cold now' button.",
      action:
        "Press it when you're cold or need hot water outside the usual times. Press it again (or cancel) to stop early.",
      tip: "Not the same as 'Advance', which jumps to the next on/off period in the schedule rather than adding a fixed time. Smart thermostats usually let you pick the boost length and temperature in the app.",
      svg:
        '<path d="M43 12.95A22 22 0 1 1 12.95 21M14.3 27.36L12.95 21L6.77 23.01"/>' +
        '<text x="32" y="38" font-size="16">+1h</text>'
    },
    {
      id: "heating-thermostat-flame",
      name: "Flame on the thermostat (calling for heat)",
      quiz: "Heating is on right now",
      category: "heating",
      aka: ["heat demand", "calling for heat", "heating on", "thermostat flame", "HEAT ON"],
      looksLike: ["flame", "flame on the thermostat", "fire on the thermostat", "flame on a screen", "flame symbol", "flame in a circle"],
      meaning:
        "The room thermostat is telling the boiler (or heat pump) to heat, because the room is colder than the temperature you've set. It goes out once the room has warmed up.",
      action:
        "Nothing to do. If the flame stays on but the radiators stay cold, check the boiler is on with no fault code and enough pressure, the thermostat's batteries, and (for wireless thermostats) that the receiver box near the boiler has power and its light comes on.",
      tip: "Turning the thermostat right up doesn't usually heat the house any faster: the boiler works just as hard either way, and the room simply overshoots. Some thermostats show wavy lines, a radiator, 'HEAT' or 'ON' instead of a flame.",
      // Honeywell T6 heating demand: a plain flame with an inner lick, no ring.
      svg: '<g transform="matrix(1.4 0 0 1.4 -12.8 -12.8)"><path stroke-width="2.5" d="M33.2 18.1C34.4 24.1 41.6 27.7 41.6 36.1C41.6 42.7 37.4 46.9 32 46.9C26.6 46.9 22.4 42.7 22.4 36.7C22.4 31.3 25.4 27.7 28.4 25.3C28.4 28.9 29.6 30.7 31.4 31.3C30.8 26.5 31.4 21.7 33.2 18.1Z"/><path fill="currentColor" stroke="none" d="M31.4 33.7C34.4 36.1 36.8 38.5 36.8 41.5C36.8 43.9 34.7 45.4 32 45.4C29.3 45.4 27.2 43.9 27.2 41.5C27.2 39.7 28.4 38.5 29.6 37.6C29.6 39.1 30.2 40 31.1 40.3C30.5 38.2 30.5 35.8 31.4 33.7Z"/></g>'
    },
    {
      id: "heating-heat-waves",
      name: "Wavy lines going up (heat on)",
      quiz: "Heating is on right now",
      category: "heating",
      aka: ["heat", "heating on", "heating active", "heat demand", "underfloor heating", "heat symbol"],
      looksLike: ["wavy lines up", "three wavy lines", "squiggly lines going up", "steam", "wiggly lines", "heat waves"],
      meaning:
        "Three rising wavy lines are the general 'heat' symbol. On thermostats, underfloor-heating controls, heat pump displays, electric heaters and towel rails it usually means heat is being called for or the heater is on right now: the same job as a flame on a gas thermostat.",
      action:
        "Nothing to do: it goes out once the room reaches the set temperature. If it stays on for hours and nothing warms up, check the boiler or heat pump is running without a fault code.",
      tip: "Wavy lines are the hardest-working squiggles in the house, so context matters: above a tap they mean hot water, above a radiator central heating, and on a bathroom or heater control they may mean a heated towel rail or an electric 'boost'.",
      svg:
        '<path d="M20 51q-6.5-4.75 0-9.5t0-9.5t0-9.5t0-9.5M32 51q-6.5-4.75 0-9.5t0-9.5t0-9.5t0-9.5' +
        'M44 51q-6.5-4.75 0-9.5t0-9.5t0-9.5t0-9.5"/>'
    },
    {
      id: "heating-trv",
      name: "Radiator valve numbers (TRV)",
      quiz: "Room temperature for one radiator",
      category: "heating",
      aka: ["TRV", "thermostatic radiator valve", "radiator knob", "radiator dial", "valve head", "frost setting"],
      looksLike: ["snowflake and numbers", "numbers 1 to 5", "radiator knob", "dial with numbers", "knob with a snowflake", "asterisk and numbers", "valve on the radiator"],
      meaning:
        "The numbered head on the side of a radiator is a thermostatic radiator valve (TRV). The numbers aren't power levels: each one is a room temperature it aims for. Roughly: snowflake (or *) ≈ 7°C, 1 ≈ 12°C, 2 ≈ 16°C, 3 ≈ 20°C, 4 ≈ 24°C, 5 ≈ 28°C.",
      action:
        "Set each room once and leave it: 3 (about 20°C) for living rooms, 2–3 for bedrooms, the snowflake for rooms you don't use. Turning it to 5 doesn't heat the room faster. It just lets it get hotter before the valve closes.",
      tip: "Exact temperatures vary by brand, but 3 ≈ 20°C is a good rule of thumb. Leave the TRV fully open in the room with your main thermostat, or the two will fight. A radiator stuck cold may have a stuck valve pin: turning the TRV fully up and down a few times can free it.",
      svg:
        '<path d="M12 14.5A20 4.5 0 0 1 52 14.5V38.5A20 4.5 0 0 1 12 38.5Z"/>' +
        '<text x="21" y="31.5" font-size="12">2</text><text x="32" y="33" font-size="17">3</text><text x="43" y="31.5" font-size="12">4</text>' +
        '<path d="M32 44L29 48.5H35Z" fill="currentColor" stroke="none"/>' +
        '<path d="M21 42.5V51A3 3 0 0 0 24 54H40A3 3 0 0 0 43 51V42.5"/>'
    },
    {
      id: "heating-hot-water-cylinder",
      name: "Hot water cylinder / immersion heater",
      category: "heating",
      aka: ["cylinder", "hot water tank", "immersion", "immersion heater", "tank", "unvented cylinder", "legionella cycle"],
      looksLike: ["tank", "cylinder", "tall rounded box", "capsule", "tank with a zigzag", "tank with a coil", "bottle"],
      meaning:
        "A tall tank is a hot water cylinder: stored hot water for taps and showers, used with system and regular boilers and heat pumps (not combis). With a zigzag or coil inside, it usually means the immersion heater, an electric element in the tank that works like a giant kettle.",
      action:
        "On a programmer or app, this sets when the cylinder gets heated. The immersion switch (often on the wall, labelled 'immersion' or 'boost') is a backup for when the boiler's broken. Don't leave it on all the time: electricity costs far more than gas.",
      tip: "Heat pump systems often heat the cylinder above 60°C about once a week (an 'anti-legionella' cycle), so a burst of extra electricity use is normal. With solar panels, a diverter may heat the immersion with spare solar power for free.",
      svg:
        '<path d="M19 17A13 7 0 0 1 45 17V47A13 7 0 0 1 19 47Z"/>' +
        '<path d="M32 13V19L27 23L37 28L27 33L37 38L32 42" stroke-width="3"/>' +
        '<path d="M45 22H51M19 42H13"/>'
    },
    {
      id: "heating-holiday",
      name: "Holiday mode (suitcase)",
      category: "heating",
      aka: ["holiday", "vacation", "away", "away mode", "holiday mode"],
      looksLike: ["suitcase", "briefcase", "bag", "luggage", "case with a handle", "handbag"],
      meaning:
        "Holiday (or away) mode pauses your normal heating schedule while you're away, holding the house at a low temperature (often 5–15°C, you choose) until the date you return. No point heating an empty house.",
      action:
        "Set the return date (and temperature, if it asks) before you leave. Some controls also switch off the hot water while you're away. If you can, set it to end a few hours before you get home so the house is warm when you walk in.",
      tip: "Better than switching the boiler off at the wall in winter, because frost protection keeps working. Some thermostats show a plane, a palm tree or a house with an arrow instead of a suitcase. The palm tree is aspirational.",
      svg:
        '<rect x="9" y="21" width="46" height="31" rx="5"/>' +
        '<path d="M24 21V16A3 3 0 0 1 27 13H37A3 3 0 0 1 40 16V21M19 21V52M45 21V52"/>'
    },
    {
      id: "heating-comfort-eco",
      name: "Sun & moon (comfort and eco temperatures)",
      quiz: "Day and night temperatures",
      category: "heating",
      aka: ["comfort", "eco", "day", "night", "setback", "economy", "comfort temperature", "reduced temperature"],
      looksLike: ["sun and moon", "sun", "moon", "sun and crescent moon", "day and night", "sun slash moon"],
      meaning:
        "Programmable thermostats usually juggle two temperatures: the sun is 'comfort' (when you're home and awake, e.g. 20°C) and the moon is 'eco' or 'setback' (overnight or while you're out, e.g. 16°C). The symbol shows which one is active right now.",
      action:
        "Set both temperatures once (often by holding the sun or moon button), then let the schedule switch between them. Pressing sun or moon yourself usually overrides it until the next scheduled change.",
      tip: "The moon doesn't only mean night: it's simply the lower temperature, so it's used when you're out during the day too. With gas boilers, turning down at night or when out saves money; heat pumps prefer small setbacks of a degree or two.",
      svg:
        sun(20.5, 20.5, 5.5, 9.5, 13).replace("<path ", '<path stroke-width="3" ') +
        '<path d="M14 50L50 14" stroke-width="3"/>' +
        '<path d="' + MOON_SMALL + '"/>'
    }
  ]);
})();
