/* WTF is this icon?: search, browse and the detail view. No dependencies. */
(function () {
  "use strict";

  var ICONS = WTF.icons;
  var CATS = WTF.categories;
  var catById = {};
  CATS.forEach(function (c) { catById[c.id] = c; });
  var iconById = {};
  ICONS.forEach(function (i, n) { i._order = n; iconById[i.id] = i; });

  var URGENCY = {
    stop: { label: "Deal with it now", rank: 0 },
    soon: { label: "Sort it soon", rank: 1 },
    info: { label: "Relax, it's fine", rank: 2 }
  };
  var COLOR_WORDS = {
    red: ["red"], amber: ["amber", "yellow", "orange"], green: ["green"], blue: ["blue"], white: ["white", "grey", "gray"]
  };
  var HOME_LIMIT = 12;
  var DASH_CATS = { car: true, ev: true };   // coloured warning lights: the colour key (legend) applies
  var EXAMPLES = [
    "squiggly car", "horseshoe with !", "genie lamp", "square with a circle", "fan in a circle",
    "triangle crossed out", "iron with dots", "submarine", "snowflake", "pitchfork",
    "bucket with a hand", "two arrows in a circle", "zigzag", "spring", "turtle", "two squares",
    "four loops", "radiator", "water drop", "star with three small stars", "hourglass", "seedling",
    "upside down triangle", "tree with a tick"
  ];

  // Text processing
  var STOP = toSet("a an the with and or of in on at to my is it its this that what whats which does do mean means meaning icon icons symbol symbols sign thing like looks look looking some kind sort has have there one inside shaped shape shaped little small big weird funny help please".split(" "));

  var GROUPS = [
    "wavy squiggly squiggle wiggly wiggle curvy wave snake squiggy",
    "exclamation bang exclaim",
    "circle round ring circular",
    "square box rectangle rectangular rect boxy",
    "triangle triangular pyramid",
    "cross crossed x crossout forbidden",
    "line bar stripe",
    "dot spot",
    "arrow pointer chevron",
    "tyre tire",
    "snowflake snow frost freeze freezing",
    "fan propeller windmill pinwheel",
    "bulb lightbulb",
    "drop droplet teardrop drip",
    "thermometer temperature temp",
    "tub bucket bowl basin washtub pail",
    "person man woman human figure guy stickman people",
    "wrench spanner",
    "car vehicle auto automobile",
    "zigzag jagged sawtooth",
    "moon crescent",
    "phone mobile cell smartphone iphone android",
    "oven cooker stove",
    "recycle recycling recyclable",
    "amber yellow orange",
    "lightning bolt thunder",
    "clock timer stopwatch",
    "lock padlock locked",
    "bin trash rubbish garbage dustbin wheelie",
    "tshirt shirt clothe clothing garment",
    "headlight headlamp",
    "spring coil",
    "turtle tortoise",
    "plug socket outlet",
    "radiator heater",
    "tap faucet",
    "flame fire",
    "keyboard key",
    "command cmd",
    "option alt",
    "control ctrl",
    "charger adapter adaptor brick",
    "aircon ac conditioner conditioning",
    "boiler furnace",
    "electric ev hybrid",
    "fridge refrigerator freezer",
    "star asterisk",
    "medicine medication medicinal drug pill tablet capsule",
    "pharmacy pharmacist chemist",
    "compost compostable",
    "hourglass sandglass",
    "book leaflet manual instruction",
    "bottle jar",
    "toilet loo wc lavatory restroom washlet",
    "bum butt bottom backside rear",
    "spray jet squirt fountain",
    "bidet feminine",
    "coffee espresso",
    "cup mug",
    "descale descaling limescale decalcify decalcification calc",
    "steam vapour vapor"
  ].map(function (g) { return g.split(" ").map(stem); });
  var groupOf = {};
  GROUPS.forEach(function (g, n) { g.forEach(function (w) { groupOf[w] = n; }); });

  function toSet(arr) { var s = Object.create(null); arr.forEach(function (w) { s[w] = true; }); return s; }

  function norm(str) {
    return String(str || "").toLowerCase()
      .replace(/!/g, " exclamation ")
      .replace(/['’]s\b/g, "")
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }
  function stem(w) {
    if (w.length > 4 && /ies$/.test(w)) return w.slice(0, -3) + "y";
    if (w.length > 4 && /(ss|x|z|ch|sh)es$/.test(w)) return w.slice(0, -2);
    if (w.length > 3 && /s$/.test(w) && !/(ss|us|is)$/.test(w)) return w.slice(0, -1);
    return w;
  }
  function tokens(str) {
    var out = [];
    norm(str).split(" ").forEach(function (w) {
      if (!w) return;
      w = stem(w);
      if (!STOP[w]) out.push(w);
    });
    return out;
  }
  function within1(a, b) { // Levenshtein distance <= 1
    if (a === b) return true;
    var la = a.length, lb = b.length;
    if (Math.abs(la - lb) > 1) return false;
    var i = 0, j = 0, edits = 0;
    while (i < la && j < lb) {
      if (a[i] === b[j]) { i++; j++; continue; }
      if (++edits > 1) return false;
      if (la > lb) i++; else if (lb > la) j++; else { i++; j++; }
    }
    return edits + (la - i) + (lb - j) <= 1;
  }

  // Search index
  var INDEX = ICONS.map(function (icon) {
    var cat = catById[icon.category] || { name: "", blurb: "" };
    var colorWords = icon.color ? (COLOR_WORDS[icon.color] || [icon.color]).join(" ") : "";
    var fields = [
      { w: 10, text: icon.name },
      { w: 9, text: (icon.looksLike || []).join(" ") },
      { w: 8, text: (icon.aka || []).join(" ") },
      { w: 5, text: cat.name + " " + colorWords },
      { w: 3, text: icon.id.replace(/-/g, " ") },
      { w: 2, text: icon.meaning },
      { w: 1, text: (icon.tip || "") + " " + icon.action }
    ].map(function (f) {
      var list = tokens(f.text);
      return { w: f.w, set: toSet(list), list: list };
    });
    var phrases = [icon.name].concat(icon.looksLike || [], icon.aka || []).map(norm);
    return { icon: icon, fields: fields, phrases: phrases };
  });

  function tokenScore(qt, entry) {
    var best = 0;
    var group = groupOf[qt];
    for (var f = 0; f < entry.fields.length; f++) {
      var field = entry.fields[f];
      var q = 0;
      if (field.set[qt]) q = 1;
      else {
        if (group !== undefined) {
          var syns = GROUPS[group];
          for (var s = 0; s < syns.length; s++) if (field.set[syns[s]]) { q = 0.8; break; }
        }
        if (q < 0.75 && qt.length >= 3) {
          for (var t = 0; t < field.list.length; t++) {
            var tok = field.list[t];
            if (tok.length > qt.length && tok.indexOf(qt) === 0) { q = Math.max(q, 0.75); break; }
            if (q < 0.55 && qt.length >= 5 && tok.length >= 4 && within1(qt, tok)) q = 0.55;
          }
        }
      }
      if (q * field.w > best) best = q * field.w;
    }
    return best;
  }

  function search(query, pool) {
    var qts = tokens(query);
    var phrase = norm(query);
    if (!qts.length) return [];
    var need = qts.length <= 2 ? 1 : Math.ceil(qts.length / 2);
    var hits = [];
    INDEX.forEach(function (entry) {
      if (pool && !pool(entry.icon)) return;
      var score = 0, matched = 0;
      for (var i = 0; i < qts.length; i++) {
        var s = tokenScore(qts[i], entry);
        if (s >= 2) matched++;
        score += s;
      }
      if (matched < need) return;
      if (phrase.length > 3) {
        var bonus = 0;
        for (var p = 0; p < entry.phrases.length && bonus < 25; p++) {
          if (entry.phrases[p] === phrase) bonus = 25;
          else if (entry.phrases[p].indexOf(phrase) !== -1) bonus = Math.max(bonus, 12);
        }
        score += bonus;
      }
      hits.push({ icon: entry.icon, score: score, matched: matched });
    });
    // If some icons match more of the words, drop the ones that match fewer
    // ("squiggly car" shouldn't list every car icon just because it's a car).
    var best = 0;
    hits.forEach(function (h) { if (h.matched > best) best = h.matched; });
    var floor = Math.max(need, qts.length >= 3 ? best - 1 : best);
    hits = hits.filter(function (h) { return h.matched >= floor; });
    hits.sort(function (a, b) {
      return (b.matched - a.matched) || (b.score - a.score) || (a.icon._order - b.icon._order);
    });
    return hits.map(function (h) { return h.icon; });
  }

  // Icons that look alike (shared "looksLike" vocabulary), preferring other categories.
  var GENERIC = toSet("line circle square dot arrow light box".split(" "));
  function lookalikes(icon, limit) {
    var mine = INDEX[ICONS.indexOf(icon)].fields[1].set;
    var keys = Object.keys(mine);
    if (!keys.length) return [];
    var scored = [];
    INDEX.forEach(function (entry) {
      var other = entry.icon;
      if (other === icon) return;
      var theirs = entry.fields[1].set;
      var shared = 0;
      keys.forEach(function (k) { if (theirs[k]) shared += GENERIC[k] ? 0.4 : 1; });
      if (shared < 1) return;
      var total = Object.keys(theirs).length;
      var score = shared / Math.sqrt(keys.length * total) + (other.category !== icon.category ? 0.08 : 0);
      scored.push({ icon: other, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, limit).map(function (s) { return s.icon; });
  }

  // State & routing (#/icon/<id>?q=…&c=…)
  var state = { q: "", c: "all", icon: null };
  var pushedIcon = false;

  function readHash() {
    var h = location.hash.replace(/^#\/?/, "");
    var qi = h.indexOf("?");
    var path = qi === -1 ? h : h.slice(0, qi);
    var params = new URLSearchParams(qi === -1 ? "" : h.slice(qi + 1));
    var m = path.match(/^icon\/([a-z0-9-]+)/);
    var id = m ? currentId(m[1]) : null;
    state.icon = id && iconById[id] ? id : null;
    if (m && state.icon && state.icon !== m[1]) history.replaceState(null, "", "#/" + h.replace(m[1], state.icon));
    state.q = params.get("q") || "";
    state.c = catById[params.get("c")] ? params.get("c") : "all";
  }
  // Old links keep working after an icon moves category (packaging-mobius-loop → recycling-mobius-loop).
  function currentId(id) {
    if (iconById[id]) return id;
    var moved = id.replace(/^packaging-/, "recycling-");
    return iconById[moved] ? moved : id;
  }
  function buildHash(withIcon) {
    var p = new URLSearchParams();
    if (state.q) p.set("q", state.q);
    if (state.c !== "all") p.set("c", state.c);
    var qs = p.toString();
    var path = withIcon ? "icon/" + withIcon : "";
    return "#/" + path + (qs ? "?" + qs : "");
  }
  function replaceUrl() {
    history.replaceState(null, "", buildHash(state.icon));
  }

  // DOM
  var $ = function (s) { return document.querySelector(s); };
  var el = {
    form: $("#search-form"), q: $("#q"), clear: $("#clear"), tryBox: $("#try"),
    cats: $("#cats"), catsRow: document.querySelector(".cats-row"), catsPrev: $("#cats-prev"), catsNext: $("#cats-next"),
    status: $("#status"), results: $("#results"),
    dialog: $("#detail"), detail: $("#detail-inner"),
    browse: $("#browse"), toolbar: document.querySelector(".toolbar"), wotw: $("#wotw"),
    photoBtn: $("#photo-btn"), photoInput: $("#photo-input"), cameraInput: $("#camera-input"), photoMenu: $("#photo-menu"),
    camera: $("#camera"), cameraVideo: $("#camera-video"), cameraFlip: document.querySelector("[data-camera-flip]"),
    logo: document.querySelector(".logo")
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }
  function firstSentence(s) {
    var m = String(s).match(/^.*?[.!?](\s|$)/);
    return m ? m[0].trim() : s;
  }
  function tileClass(icon) {
    var cat = catById[icon.category];
    return "tile tile--" + (cat ? cat.tile : "panel") + (icon.color ? " is-" + icon.color : "");
  }
  function badge(icon) {
    if (!icon.urgency) return "";
    return '<span class="badge badge--' + icon.urgency + '">' + URGENCY[icon.urgency].label + "</span>";
  }
  // Every icon has its own page (built by dev/build-pages.mjs), e.g. /car/check-engine/. Links point
  // there so new tabs, shared links and search engines get a real page; plain clicks open the pop-up.
  function pagePath(icon) { return "/" + icon.category + "/" + icon.id.slice(icon.category.length + 1) + "/"; }
  function iconHref(icon) { return pagePath(icon); }

  function card(icon, showCat, extraMeta) {
    var meta = [];
    if (extraMeta) meta.push(extraMeta);
    if (icon.urgency) meta.push(badge(icon));
    if (showCat) meta.push("<span>" + esc(catById[icon.category].name) + "</span>");
    return '<a class="card" href="' + iconHref(icon) + '" data-icon="' + icon.id + '">' +
      '<div class="' + tileClass(icon) + '">' + WTF.svg(icon) + "</div>" +
      '<div class="card__body">' +
      '<h3 class="card__name">' + esc(icon.name) + "</h3>" +
      '<p class="card__text">' + esc(firstSentence(icon.meaning)) + "</p>" +
      (meta.length ? '<div class="card__meta">' + meta.join('<span aria-hidden="true">&middot;</span>') + "</div>" : "") +
      "</div></a>";
  }

  function sortForCategory(list) {
    return list.slice().sort(function (a, b) {
      var ra = a.urgency ? URGENCY[a.urgency].rank : 3, rb = b.urgency ? URGENCY[b.urgency].rank : 3;
      return (ra - rb) || (a._order - b._order);
    });
  }

  function legendHtml() {
    return '<div class="legend" role="note">' +
      '<span><i class="dot dot--red"></i><b>Red</b> = stop safely &amp; check now</span>' +
      '<span><i class="dot dot--amber"></i><b>Amber</b> = get it checked soon</span>' +
      '<span><i class="dot dot--green"></i><i class="dot dot--blue"></i><b>Green / blue</b> = a system is on, all fine</span>' +
      "</div>";
  }

  // Render: categories, filters, results
  function renderCats() {
    var html = '<button type="button" class="cat" data-cat="all" aria-pressed="' + (state.c === "all") + '">' +
      'Everything<span class="cat__n">' + ICONS.length + "</span></button>";
    CATS.forEach(function (c) {
      var n = ICONS.filter(function (i) { return i.category === c.id; }).length;
      if (!n) return;
      html += '<button type="button" class="cat" data-cat="' + c.id + '" aria-pressed="' + (state.c === c.id) + '">' +
        esc(c.name) + '<span class="cat__n">' + n + "</span></button>";
    });
    el.cats.innerHTML = html;
    if (state.c !== revealedCat) revealActiveCat(revealedCat !== null);
    syncCatsNav();
  }

  // The category row scrolls sideways: arrows + edge fades show there's more, and the
  // chosen category is scrolled into view when it changes.
  var revealedCat = null;
  function revealActiveCat(smooth) {
    revealedCat = state.c;
    var on = el.cats.querySelector('[aria-pressed="true"]');
    if (!on) return;
    var r = on.getBoundingClientRect(), box = el.cats.getBoundingClientRect(), edge = 56, dx = 0;
    if (r.left < box.left + edge) dx = r.left - box.left - edge;
    else if (r.right > box.right - edge) dx = r.right - box.right + edge;
    if (dx) el.cats.scrollTo({ left: el.cats.scrollLeft + dx, behavior: smooth ? "smooth" : "auto" });
  }
  function syncCatsNav() {
    var x = el.cats.scrollLeft, max = el.cats.scrollWidth - el.cats.clientWidth;
    var prev = x > 4, next = x < max - 4;
    el.catsRow.classList.toggle("can-prev", prev);
    el.catsRow.classList.toggle("can-next", next);
    el.catsPrev.hidden = !prev;
    el.catsNext.hidden = !next;
  }
  el.cats.addEventListener("scroll", syncCatsNav, { passive: true });
  window.addEventListener("resize", syncCatsNav);
  [[el.catsPrev, -1], [el.catsNext, 1]].forEach(function (b) {
    b[0].addEventListener("click", function () {
      el.cats.scrollBy({ left: b[1] * Math.max(160, el.cats.clientWidth * 0.7), behavior: "smooth" });
    });
  });

  function pool() {
    return function (i) {
      if (state.c !== "all" && i.category !== state.c) return false;
      return true;
    };
  }

  function renderResults() {
    var q = state.q.trim();
    if (photo && !q) {
      el.status.hidden = true;
      el.results.innerHTML = photoHtml();
      return;
    }
    var filter = pool();
    var html = "";
    var status = "";

    noteMiss("");
    if (q) {
      var hits = search(q, filter);
      var where = state.c !== "all" ? " in " + catById[state.c].name : "";
      if (hits.length) {
        status = hits.length + (hits.length === 1 ? " match" : " matches") + " for <q>" + esc(q) + "</q>" + esc(where);
        html = '<div class="grid">' + hits.map(function (i) { return card(i, true); }).join("") + "</div>";
      } else {
        status = "";
        html = emptyHtml(q, where);
        if (state.c === "all" || !search(q).length) noteMiss(q);
      }
    } else if (state.c === "all") {
      status = "";
      CATS.forEach(function (c) {
        var list = sortForCategory(ICONS.filter(function (i) { return i.category === c.id; }));
        if (!list.length) return;
        html += '<section class="section"><div class="section__head"><div>' +
          '<h2 class="section__title">' + esc(c.name) + "</h2>" +
          '<p class="section__blurb">' + esc(c.blurb) + "</p></div>" +
          (list.length > HOME_LIMIT ? '<button type="button" class="section__more" data-cat="' + c.id + '">See all ' + list.length + "</button>" : "") +
          "</div>" + (DASH_CATS[c.id] ? legendHtml() : "") +
          '<div class="grid">' + list.slice(0, HOME_LIMIT).map(function (i) { return card(i, false); }).join("") + "</div></section>";
      });
    } else {
      var list = sortForCategory(ICONS.filter(filter));
      var title = catById[state.c].name;
      status = "";
      html = '<section class="section"><div class="section__head"><div>' +
        '<h2 class="section__title">' + esc(title) + "</h2>" +
        '<p class="section__blurb">' + list.length + " symbol" + (list.length === 1 ? "" : "s") +
        (state.c !== "all" ? " &middot; " + esc(catById[state.c].blurb) : "") + "</p>" +
        "</div></div>" + (DASH_CATS[state.c] ? legendHtml() : "") +
        (list.length ? '<div class="grid">' + list.map(function (i) { return card(i, false); }).join("") + "</div>" : emptyHtml("", "")) +
        "</section>";
    }
    el.status.innerHTML = status;
    el.status.hidden = !status;
    el.results.innerHTML = html;
  }

  // Visitor stats (assets/stats.js). Searches that find nothing anywhere are counted once the
  // person stops typing, so the list of them says which symbols to add next. Each wording is
  // counted once per visit, and anything that looks like an email or a long number is skipped.
  var missTimer = null, missPending = "", missSent = {};
  function noteMiss(q) {
    clearTimeout(missTimer);
    missPending = q.toLowerCase().replace(/\s+/g, " ").trim().slice(0, 60);
    if (missPending) missTimer = setTimeout(sendMiss, 2000);
  }
  function sendMiss() {
    var q = missPending;
    clearTimeout(missTimer);
    missPending = "";
    if (!q || missSent[q] || /@|\d{5,}/.test(q)) return;
    missSent[q] = true;
    WTF.stats.event("No results: " + q, "A search that found nothing");
  }
  document.addEventListener("visibilitychange", function () { if (document.hidden) sendMiss(); });
  window.addEventListener("pagehide", sendMiss);

  // The pop-up counts as the icon's own page, the quiz as /quiz/ and a category filter as that category's page.
  function countPage() {
    var icon = state.icon && iconById[state.icon];
    if (icon) WTF.stats.page(pagePath(icon), icon.name);
    else if (/^#\/?quiz(\/|\?|$)/.test(location.hash)) WTF.stats.page("/quiz/", "Quiz");
    else if (state.c !== "all") WTF.stats.page("/" + state.c + "/", catById[state.c].name);
    else WTF.stats.page("/");
  }

  function emptyHtml(q, where) {
    var alsoAll = state.c !== "all"
      ? '<li><button type="button" data-reset-filters>Search everything instead of just this category</button></li>' : "";
    return '<div class="empty"><h2>No idea WTF that is (yet).</h2>' +
      (q ? "<p>Nothing matched <strong>&ldquo;" + esc(q) + "&rdquo;</strong>" + esc(where) + ". A few tips:</p>" : "<p>Nothing here with those filters.</p>") +
      "<ul>" + alsoAll +
      "<li>Describe the <strong>shape</strong>, not the meaning: <em>circle with a line</em>, <em>wavy lines</em>, <em>square with a dot</em>.</li>" +
      "<li>Use fewer words: <em>horseshoe</em> works better than <em>yellow horseshoe thing on my dashboard</em>.</li>" +
      "<li>Try where you saw it: <em>car</em>, <em>oven</em>, <em>washing machine</em>, <em>label</em>.</li>" +
      "</ul></div>";
  }

  // Icon of the week
  // Weeks start on Monday, UK time. data/featured.js holds the hand-picked schedule; a week
  // with no entry gets an automatic pick that's the same for everyone (seeded by the week).
  var DAY = 864e5;
  var MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
  function ukToday() {
    try {
      var m = new Intl.DateTimeFormat("en-CA", { timeZone: "Europe/London", year: "numeric", month: "2-digit", day: "2-digit" })
        .format(new Date()).match(/(\d{4})-(\d{2})-(\d{2})/);
      if (m) return Date.UTC(+m[1], m[2] - 1, +m[3]);
    } catch (e) { /* very old browser: fall back to the device's own date */ }
    var d = new Date();
    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());
  }
  function mondayOf(t) { return t - ((new Date(t).getUTCDay() + 6) % 7) * DAY; }
  function isoDay(t) { return new Date(t).toISOString().slice(0, 10); }
  function weekLabel(t) {
    var a = new Date(t), b = new Date(t + 6 * DAY);
    var end = b.getUTCDate() + " " + MONTHS[b.getUTCMonth()];
    return a.getUTCMonth() === b.getUTCMonth()
      ? a.getUTCDate() + "–" + end
      : a.getUTCDate() + " " + MONTHS[a.getUTCMonth()] + " – " + end;
  }
  function firstSentence(text) {
    var m = String(text || "").match(/^.+?[.!?](?=\s|$)/);
    return (m ? m[0] : String(text || "")).trim();
  }
  // A teaser: whole sentences, at least ~70 characters where the text allows (CSS clamps it).
  function teaser(text) {
    var s = String(text || ""), out = "";
    while (s && out.length < 70) {
      var one = firstSentence(s);
      out += (out ? " " : "") + one;
      s = s.slice(s.indexOf(one) + one.length).trim();
    }
    return out;
  }
  function shortName(icon) { return icon.name.replace(/\s*\([^)]*\)\s*$/, "") || icon.name; }

  var FEATURED = (WTF.featured && WTF.featured.weeks) || [];
  var featuredByWeek = {};
  FEATURED.forEach(function (f) { if (iconById[f.id]) featuredByWeek[f.week] = f; });
  var autoPool = ICONS.filter(function (i) { return i.tip; });

  function pickForWeek(t) {
    var f = featuredByWeek[isoDay(t)];
    if (f) return { icon: iconById[f.id], hook: f.hook, week: t };
    if (!autoPool.length) return null;
    var icon = autoPool[(Math.floor(t / (7 * DAY)) * 7919) % autoPool.length];
    return { icon: icon, hook: firstSentence(icon.tip), week: t };
  }

  var thisWeek = mondayOf(ukToday());
  var wotw = pickForWeek(thisWeek);

  function renderWotw() {
    if (!wotw || !el.wotw) return;
    var i = wotw.icon, href = pagePath(i);
    var since = (WTF.featured && WTF.featured.since) || isoDay(thisWeek);
    var past = [];
    for (var k = 1; k <= 4; k++) {
      var t = thisWeek - 7 * k * DAY;
      if (isoDay(t) < since) break;
      var p = pickForWeek(t);
      if (p) past.push(p);
    }
    el.wotw.innerHTML =
      '<div class="wotw__card">' +
        '<a class="tile wotw__tile" href="' + href + '" data-icon="' + i.id + '" tabindex="-1" aria-hidden="true">' + WTF.svg(i) + "</a>" +
        '<div class="wotw__body">' +
          '<p class="wotw__label"><span class="wotw__tag">Icon of the week</span>' + esc(weekLabel(wotw.week)) + "</p>" +
          '<h2 class="wotw__title" id="wotw-title"><a href="' + href + '" data-icon="' + i.id + '">' + esc(shortName(i)) + "</a></h2>" +
          '<p class="wotw__hook">' + esc(wotw.hook) + "</p>" +
          '<p class="wotw__meaning">' + esc(teaser(i.meaning)) + "</p>" +
          '<div class="wotw__actions">' +
            '<a class="btn" href="' + href + '" data-icon="' + i.id + '">Read it</a>' +
            '<button type="button" class="btn btn--light" data-share-wotw>Share</button>' +
          "</div>" +
        "</div>" +
      "</div>" +
      (past.length
        ? '<div class="wotw__past"><h3>Past weeks</h3><div class="mini-grid">' + past.map(function (p) {
            return '<a class="mini" href="' + pagePath(p.icon) + '" data-icon="' + p.icon.id + '"><div class="' + tileClass(p.icon) + '">' + WTF.svg(p.icon) + "</div>" +
              "<span>" + esc(p.icon.name) + "<small>" + esc(weekLabel(p.week)) + "</small></span></a>";
          }).join("") + "</div></div>"
        : "");
    el.wotw.hidden = false;
  }

  function shareWotw(btn) {
    var i = wotw.icon, key = isoDay(wotw.week);
    // Scheduled weeks have their own page (week/<monday>/, built by dev/build-share.mjs) with an
    // Icon of the week preview; automatic picks share the icon's own page.
    var url = featuredByWeek[key]
      ? location.origin + "/week/" + key + "/"
      : location.origin + pagePath(i);
    if (navigator.share && coarsePointer) {
      navigator.share({ title: "Icon of the week: " + i.name, text: wotw.hook, url: url }).catch(function () {});
      return;
    }
    var done = function () { btn.textContent = "Link copied"; setTimeout(function () { btn.textContent = "Share"; }, 1600); };
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("Copy this link:", url); });
    else prompt("Copy this link:", url);
  }

  // Detail view
  function renderDetail(icon) {
    var cat = catById[icon.category];
    var similar = lookalikes(icon, 6);
    var todoCls = "detail__block detail__block--todo" + (icon.urgency === "stop" ? " detail__block--stop" : "");
    el.detail.innerHTML =
      '<div class="detail__grid">' +
        '<div class="detail__side detail__side--tile">' +
          '<div class="' + tileClass(icon) + '">' + WTF.svg(icon, icon.name) + "</div>" +
          (icon.color && (DASH_CATS[icon.category] || icon.category === "carcontrols")
            ? '<div class="detail__lit"><span class="lit is-' + icon.color + '">' + WTF.svg(icon) + "</span>How it looks lit up</div>"
            : "") +
        "</div>" +
        '<aside class="detail__side detail__side--extra">' +
          (icon.looksLike && icon.looksLike.length
            ? "<h3>What normal people call it</h3><div class=\"detail__looks\">" + icon.looksLike.map(function (l) {
                return '<button type="button" data-search="' + esc(l) + '">' + esc(l) + "</button>";
              }).join("") + "</div>"
            : "") +
          '<div class="detail__actions"><button type="button" class="btn" data-copy>Copy link</button></div>' +
        "</aside>" +
        '<div class="detail__main">' +
          '<p class="detail__cat">' + (wotw && wotw.icon === icon ? '<span class="wotw-chip">Icon of the week</span>' : "") + esc(cat.name) + (icon.color ? " &middot; " + esc(icon.color.charAt(0).toUpperCase() + icon.color.slice(1)) + " light" : "") + "</p>" +
          '<h2 class="detail__title" id="d-title">' + esc(icon.name) + "</h2>" +
          (icon.aka && icon.aka.length ? '<p class="detail__aka">Also called: ' + esc(icon.aka.join(", ")) + "</p>" : "") +
          badge(icon) +
          '<div class="detail__block"><h3>WTF it means</h3><p>' + esc(icon.meaning) + "</p></div>" +
          '<div class="' + todoCls + '"><h3>What to do about it</h3><p>' + esc(icon.action) + "</p></div>" +
          (icon.tip ? '<div class="detail__block detail__block--tip"><h3>For the record</h3><p>' + esc(icon.tip) + "</p></div>" : "") +
          (similar.length
            ? '<div class="detail__similar"><h3>Not to be confused with</h3><div class="mini-grid">' + similar.map(function (s) {
                return '<a class="mini" href="' + iconHref(s) + '" data-icon="' + s.id + '"><div class="' + tileClass(s) + '">' + WTF.svg(s) + "</div>" +
                  "<span>" + esc(s.name) + "<small>" + esc(catById[s.category].name) + "</small></span></a>";
              }).join("") + "</div></div>"
            : "") +
        "</div>" +
      "</div>";
    el.detail.scrollTop = 0;
  }

  function syncDialog() {
    if (state.icon) {
      var icon = iconById[state.icon];
      renderDetail(icon);
      document.title = icon.name + " · WTF is this icon?";
      if (!el.dialog.open) el.dialog.showModal();
    } else {
      document.title = "WTF is this icon? Decode the symbols on your car, oven, washing machine and more";
      if (el.dialog.open) el.dialog.close();
    }
    countPage();
  }

  function openIcon(id) {
    if (state.icon === id) return;
    var wasOpen = !!state.icon;
    state.icon = id;
    if (wasOpen) history.replaceState(null, "", buildHash(id));
    else { history.pushState(null, "", buildHash(id)); pushedIcon = true; }
    syncDialog();
  }
  function closeIcon() {
    if (!state.icon) return;
    if (pushedIcon) {
      pushedIcon = false;
      history.back(); // popstate will sync
    } else {
      state.icon = null;
      replaceUrl();
      syncDialog();
    }
  }

  // Wiring
  function syncSearching() {
    document.body.classList.toggle("is-searching", !!state.q.trim() || !!photo);
  }

  function renderAll() {
    syncSearching();
    el.q.value = state.q;
    el.form.classList.toggle("has-q", !!state.q);
    el.clear.hidden = !state.q;
    renderCats();
    renderResults();
    countPage();
  }

  function setQuery(q, opts) {
    if (q.trim()) photo = null;
    state.q = q;
    el.form.classList.toggle("has-q", !!q);
    el.clear.hidden = !q;
    replaceUrl();
    syncSearching();
    renderResults();
    if (opts && opts.scroll) scrollToBrowse();
  }

  function scrollToBrowse() {
    var y = el.browse.getBoundingClientRect().top + window.scrollY - 8;
    if (window.scrollY < y) window.scrollTo({ top: y, behavior: "smooth" });
  }

  var typingTimer;
  el.q.addEventListener("input", function () {
    clearTimeout(typingTimer);
    var v = el.q.value;
    typingTimer = setTimeout(function () { setQuery(v); }, 90);
  });
  el.form.addEventListener("submit", function (e) {
    e.preventDefault();
    clearTimeout(typingTimer);
    setQuery(el.q.value, { scroll: true });
    el.q.blur();
  });
  el.q.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && el.q.value) { e.preventDefault(); el.q.value = ""; setQuery(""); }
  });
  el.clear.addEventListener("click", function () { el.q.value = ""; setQuery(""); el.q.focus(); });

  // Example searches
  EXAMPLES.slice(0, 5).forEach(function (ex) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = ex;
    b.setAttribute("data-search", ex);
    el.tryBox.appendChild(b);
  });

  // Rotating placeholder
  var phIndex = 0;
  function rotatePlaceholder() {
    el.q.placeholder = "Describe it… e.g. “" + EXAMPLES[phIndex % EXAMPLES.length] + "”";
    phIndex++;
  }
  rotatePlaceholder();
  setInterval(function () { if (document.activeElement !== el.q && !el.q.value) rotatePlaceholder(); }, 2600);

  // Delegated clicks (cards, chips, categories, detail actions)
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-icon], [data-cat], [data-search], [data-close], [data-copy], [data-reset-filters], [data-scroll-browse], [data-photo-source], [data-photo-describe], [data-camera-snap], [data-camera-cancel], [data-camera-flip], [data-share-wotw]");
    if (!t) {
      if (e.target === el.dialog) closeIcon(); // backdrop click
      return;
    }
    if (t.hasAttribute("data-icon")) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return; // let new-tab work
      e.preventDefault();
      openIcon(t.getAttribute("data-icon"));
    } else if (t.hasAttribute("data-cat")) {
      photo = null; syncSearching();
      state.c = t.getAttribute("data-cat");
      replaceUrl();
      renderCats(); renderResults(); countPage();
      if (t.classList.contains("section__more") || t.hasAttribute("data-scroll")) { e.preventDefault(); scrollToBrowse(); }
    } else if (t.hasAttribute("data-search")) {
      var q = t.getAttribute("data-search");
      el.q.value = q;
      if (state.icon) { state.icon = null; pushedIcon = false; syncDialog(); }
      state.c = "all";
      renderCats();
      setQuery(q, { scroll: true });
    } else if (t.hasAttribute("data-close")) {
      closeIcon();
    } else if (t.hasAttribute("data-copy")) {
      var url = state.icon && iconById[state.icon] ? location.origin + pagePath(iconById[state.icon]) : location.href;
      var done = function () { t.textContent = "Copied!"; setTimeout(function () { t.textContent = "Copy link"; }, 1600); };
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(done, function () { prompt("Copy this link:", url); });
      else prompt("Copy this link:", url);
    } else if (t.hasAttribute("data-share-wotw")) {
      shareWotw(t);
    } else if (t.hasAttribute("data-scroll-browse")) {
      e.preventDefault();
      scrollToBrowse();
    } else if (t.hasAttribute("data-photo-source")) {
      choosePhotoSource(t.getAttribute("data-photo-source"));
    } else if (t.hasAttribute("data-camera-snap")) {
      snapCamera();
    } else if (t.hasAttribute("data-camera-cancel")) {
      closeCamera();
    } else if (t.hasAttribute("data-camera-flip")) {
      cameraFacing = cameraFacing === "environment" ? "user" : "environment";
      startCameraStream().catch(function () { showPhotoError("camera_missing"); closeCamera(); });
    } else if (t.hasAttribute("data-photo-describe")) {
      photo = null;
      renderAll();
      el.q.focus();
    } else if (t.hasAttribute("data-reset-filters")) {
      photo = null;
      state.c = "all";
      replaceUrl();
      renderCats(); renderResults(); countPage();
    }
  });

  el.dialog.addEventListener("cancel", function (e) { e.preventDefault(); closeIcon(); });

  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== el.q && !el.dialog.open && !/input|textarea/i.test(document.activeElement.tagName)) {
      e.preventDefault();
      el.q.focus();
      el.q.select();
    }
  });

  function onNavigate() {
    var prevIcon = state.icon;
    readHash();
    if (!state.icon) pushedIcon = false;
    renderAll();
    if (prevIcon !== state.icon || !!state.icon !== el.dialog.open) syncDialog();
  }
  window.addEventListener("popstate", onNavigate);
  window.addEventListener("hashchange", onNavigate);

  // Light / dark theme
  // The <head> script already picked the theme (saved choice, else the device setting).
  var themeBtn = $("#theme-toggle");
  var themeMeta = document.querySelector('meta[name="theme-color"]');
  var darkQuery = window.matchMedia ? matchMedia("(prefers-color-scheme: dark)") : null;
  function savedTheme() {
    try { var t = localStorage.getItem("wtf-theme"); return t === "light" || t === "dark" ? t : null; } catch (e) { return null; }
  }
  function applyTheme(theme, fade) {
    var root = document.documentElement;
    if (fade) {
      root.classList.add("theme-fade");
      setTimeout(function () { root.classList.remove("theme-fade"); }, 350);
    }
    root.setAttribute("data-theme", theme);
    themeBtn.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    if (themeMeta) themeMeta.setAttribute("content", theme === "dark" ? "#0b0b0c" : "#ffffff");
  }
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");
  themeBtn.addEventListener("click", function () {
    var next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    try { localStorage.setItem("wtf-theme", next); } catch (e) {}
    applyTheme(next, true);
  });
  if (darkQuery && darkQuery.addEventListener) {
    darkQuery.addEventListener("change", function (e) {
      if (!savedTheme()) applyTheme(e.matches ? "dark" : "light", true);
    });
  }

  // Logo: back to the start, clearing any search or photo
  el.logo.addEventListener("click", function (e) {
    e.preventDefault();
    photo = null; photoSeq++;
    state.q = ""; state.c = "all";
    if (state.icon) { state.icon = null; pushedIcon = false; syncDialog(); }
    replaceUrl();
    renderAll();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Photo lookup (Claude vision via worker/)
  var PHOTO_API = ((window.WTF_CONFIG && window.WTF_CONFIG.PHOTO_API) || "").replace(/\/+$/, "");
  var photo = null;      // { status: "loading" | "done" | "error", thumb, seen, matches, error }
  var photoSeq = 0;      // ignores responses for photos the user has since replaced
  var CONFIDENCE = { high: "Strong match", medium: "Likely", low: "Possible" };
  var PHOTO_ERRORS = {
    rate_limited: "Easy, tiger. That's a lot of photos. Try again in a minute.",
    decode: "Couldn't open that image. Try a regular photo (JPEG or PNG).",
    too_large: "That image is too big. Try a regular photo (JPEG or PNG).",
    refused: "Couldn't read that photo. Try a clearer, closer shot of the symbol.",
    unreadable_image: "Couldn't read that photo. Try a clearer, closer shot of the symbol.",
    not_configured: "Photo lookup is having a day off. Describe it instead for now.",
    camera_denied: "Camera access is blocked. Allow the camera for this site in your browser settings, or upload a photo instead.",
    camera_missing: "Couldn't find a camera on this device. Upload a photo instead.",
    other: "Couldn't reach the photo service. Check your connection and have another go."
  };

  // Photo button → small menu: "Take a photo" or "Upload a photo"
  function setPhotoMenu(open) {
    el.photoMenu.hidden = !open;
    el.photoBtn.setAttribute("aria-expanded", String(open));
    if (open) el.photoMenu.querySelector("button").focus();
  }

  if (PHOTO_API && el.photoBtn) {
    el.photoBtn.hidden = false;
    el.photoBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      setPhotoMenu(el.photoMenu.hidden);
    });
    [el.photoInput, el.cameraInput].forEach(function (input) {
      input.addEventListener("change", function () {
        var file = input.files && input.files[0];
        input.value = "";
        if (file) identifyPhoto(file);
      });
    });
    document.addEventListener("click", function (e) {
      if (!el.photoMenu.hidden && !el.photoMenu.contains(e.target)) setPhotoMenu(false);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !el.photoMenu.hidden) { setPhotoMenu(false); el.photoBtn.focus(); }
    });
  }

  // Camera
  // Phones & tablets hand over to the native camera app (autofocus, flash, full resolution).
  // Laptops/desktops get a live viewfinder on the page.
  var cameraStream = null;
  var cameraFacing = "environment";
  var coarsePointer = !!(window.matchMedia && matchMedia("(pointer: coarse)").matches);

  function choosePhotoSource(source) {
    setPhotoMenu(false);
    if (source === "upload") { el.photoInput.click(); return; }
    if (coarsePointer || !(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) { el.cameraInput.click(); return; }
    openCamera();
  }

  function stopCamera() {
    if (cameraStream) cameraStream.getTracks().forEach(function (track) { track.stop(); });
    cameraStream = null;
    el.cameraVideo.srcObject = null;
  }

  function startCameraStream() {
    stopCamera();
    return navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: cameraFacing }, width: { ideal: 1920 }, height: { ideal: 1080 } }
    }).then(function (stream) {
      cameraStream = stream;
      el.cameraVideo.srcObject = stream;
      return el.cameraVideo.play().catch(function () {});
    });
  }

  function openCamera() {
    startCameraStream().then(function () {
      if (!el.camera.open) el.camera.showModal();
      navigator.mediaDevices.enumerateDevices().then(function (devices) {
        el.cameraFlip.hidden = devices.filter(function (d) { return d.kind === "videoinput"; }).length < 2;
      }).catch(function () {});
    }).catch(function (err) {
      var blocked = err && (err.name === "NotAllowedError" || err.name === "SecurityError");
      showPhotoError(blocked ? "camera_denied" : "camera_missing");
    });
  }

  function closeCamera() {
    stopCamera();
    if (el.camera.open) el.camera.close();
  }

  function snapCamera() {
    var w = el.cameraVideo.videoWidth, h = el.cameraVideo.videoHeight;
    if (!w || !h) return;
    var canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    canvas.getContext("2d").drawImage(el.cameraVideo, 0, 0, w, h);
    closeCamera();
    canvas.toBlob(function (blob) {
      if (blob) identifyPhoto(new File([blob], "camera.jpg", { type: "image/jpeg" }));
    }, "image/jpeg", 0.92);
  }

  el.camera.addEventListener("close", stopCamera); // Esc or Cancel: always release the camera

  function showPhotoError(code) {
    photoSeq++;
    state.q = ""; state.c = "all";
    photo = { status: "error", error: code };
    replaceUrl();
    renderAll();
    scrollToBrowse();
  }

  function loadImageElement(file) {
    return new Promise(function (resolve, reject) {
      var url = URL.createObjectURL(file);
      var img = new Image();
      img.onload = function () { URL.revokeObjectURL(url); resolve(img); };
      img.onerror = function () { URL.revokeObjectURL(url); reject(new Error("decode")); };
      img.src = url;
    });
  }

  // Shrinks the photo to ≤1280px JPEG: fast to upload, plenty for recognition.
  function prepareImage(file) {
    var loading = window.createImageBitmap
      ? createImageBitmap(file, { imageOrientation: "from-image" }).catch(function () { return loadImageElement(file); })
      : loadImageElement(file);
    return loading.then(function (img) {
      var w = img.naturalWidth || img.width, h = img.naturalHeight || img.height;
      if (!w || !h) throw new Error("decode");
      var scale = Math.min(1, 1280 / Math.max(w, h));
      var canvas = document.createElement("canvas");
      canvas.width = Math.round(w * scale);
      canvas.height = Math.round(h * scale);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      if (img.close) img.close();
      var dataUrl = canvas.toDataURL("image/jpeg", 0.85);
      return { url: dataUrl, base64: dataUrl.slice(dataUrl.indexOf(",") + 1) };
    });
  }

  function identifyPhoto(file) {
    var seq = ++photoSeq;
    if (state.icon) { state.icon = null; pushedIcon = false; syncDialog(); }
    state.q = ""; state.c = "all";
    photo = { status: "loading" };
    replaceUrl();
    renderAll();
    scrollToBrowse();

    prepareImage(file).then(function (img) {
      if (seq !== photoSeq) return null;
      photo.thumb = img.url;
      renderResults();
      var ctrl = new AbortController();
      var timer = setTimeout(function () { ctrl.abort(); }, 45000);
      return fetch(PHOTO_API + "/identify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: img.base64, mediaType: "image/jpeg" }),
        signal: ctrl.signal
      }).then(function (res) {
        clearTimeout(timer);
        return res.json().catch(function () { return {}; }).then(function (data) {
          return { ok: res.ok, data: data || {} };
        });
      });
    }).then(function (r) {
      if (!r || seq !== photoSeq || !photo) return;
      if (!r.ok) {
        photo.status = "error";
        photo.error = r.data.error;
      } else {
        photo.status = "done";
        photo.seen = r.data.seen || "";
        photo.matches = (r.data.matches || []).filter(function (m) { return iconById[m.id]; });
        // A photo that matches nothing is a symbol we're missing; what the model saw says which.
        if (photo.matches.length) WTF.stats.event("Photo: matched", photo.matches.map(function (m) { return m.id; }).join(", "));
        else WTF.stats.event("Photo: no match", photo.seen || "No description");
      }
      renderResults();
    }).catch(function (err) {
      if (seq !== photoSeq || !photo) return;
      photo.status = "error";
      photo.error = err && err.message === "decode" ? "decode" : "other";
      renderResults();
    });
  }

  function photoHtml() {
    var loading = photo.status === "loading";
    var title, sub = "", grid = "";
    if (loading) {
      title = "Squinting at your photo&hellip;";
      sub = "Give it a few seconds.";
    } else if (photo.status === "error") {
      title = "Well, that didn&rsquo;t work.";
      sub = PHOTO_ERRORS[photo.error] || PHOTO_ERRORS.other;
    } else if (!photo.matches.length) {
      title = "Not sure WTF that is.";
      sub = (photo.seen ? photo.seen + " " : "") + "Try a closer, sharper photo, or describe it instead.";
    } else {
      var strong = photo.matches.filter(function (m) { return m.confidence === "high"; }).length;
      title = photo.matches.length === 1 ? "Pretty sure it&rsquo;s this."
        : strong >= 2 ? "We spotted these symbols."
        : "We think it&rsquo;s one of these.";
      sub = photo.seen;
      grid = '<div class="grid">' + photo.matches.map(function (m) {
        var conf = '<span class="conf conf--' + m.confidence + '">' + (CONFIDENCE[m.confidence] || "Possible") + "</span>";
        return card(iconById[m.id], true, conf);
      }).join("") + "</div>";
    }
    var actions = loading ? "" :
      '<div class="photo__actions">' +
        '<button type="button" class="btn" data-photo-source="camera">Take another photo</button>' +
        '<button type="button" class="btn btn--light" data-photo-source="upload">Upload a photo</button>' +
        '<button type="button" class="btn btn--light" data-photo-describe>Describe it instead</button>' +
      "</div>";
    return '<section class="photo' + (loading ? " is-loading" : "") + '">' +
      '<div class="photo__head">' +
        '<div class="photo__frame">' +
          (photo.thumb ? '<img class="photo__img" src="' + photo.thumb + '" alt="Your photo">' : "") +
          (loading ? '<span class="photo__scan" aria-hidden="true"></span>' : "") +
        "</div>" +
        '<div class="photo__text">' +
          '<p class="photo__label">Photo lookup</p>' +
          '<h2 class="section__title">' + title + "</h2>" +
          (sub ? '<p class="section__blurb">' + esc(sub) + "</p>" : "") +
          actions +
        "</div>" +
      "</div>" + grid + "</section>";
  }

  // Boot
  readHash();
  renderWotw();
  renderAll();
  syncDialog();

  // Shared with assets/quiz.js
  WTF.ui = {
    esc: esc, tileClass: tileClass, lookalikes: lookalikes, teaser: teaser, shortName: shortName, pagePath: pagePath,
    ukToday: ukToday, isoDay: isoDay, catById: catById, coarsePointer: coarsePointer, countPage: countPage
  };

  // Expose for debugging / tests
  WTF.iconOfTheWeek = function () { return wotw && { id: wotw.icon.id, hook: wotw.hook, week: isoDay(wotw.week) }; };
  WTF.search = function (q) { return search(q).map(function (i) { return i.id; }); };
})();
