/* The "Do you speak symbol?" quiz for WTF is this icon?
 *
 * Daily quiz: the same 10 questions for everyone, changing at midnight UK time (seeded by the date).
 * Practice: unlimited rounds by topic. Questions are built from the icon data, so there's nothing to
 * write by hand: "What's this?" (icon → 4 names) and "Which one is…?" (name → 4 icons), with the wrong
 * answers taken from each icon's lookalikes so they're properly tricky.
 *
 * Route: #/quiz. Loaded after assets/app.js and uses the helpers it exposes on WTF.ui.
 * Nothing leaves the browser: scores and streaks live in localStorage ("wtf-quiz"). */
(function () {
  "use strict";

  var ui = WTF.ui;
  var dlg = document.getElementById("quiz");
  var inner = document.getElementById("quiz-inner");
  var nudge = document.getElementById("quiz-nudge");
  if (!ui || !dlg || !inner) return;

  var ICONS = WTF.icons, esc = ui.esc;
  var LEN = 10, DAY = 864e5, STORE = "wtf-quiz";
  var MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");

  var TOPICS = [
    { id: "all",     name: "Everything",     cats: null },
    { id: "car",     name: "Car",            cats: ["car", "carcontrols", "ev"] },
    { id: "laundry", name: "Laundry",        cats: ["laundry", "washer", "dryer"] },
    { id: "kitchen", name: "Kitchen",        cats: ["oven", "dishwasher", "fridge", "coffee"] },
    { id: "home",    name: "Home",           cats: ["aircon", "heating", "toilet"] },
    { id: "tech",    name: "Tech",           cats: ["tech", "keyboard", "power"] },
    { id: "labels",  name: "Labels & packs", cats: ["recycling", "packaging", "medicine"] }
  ];
  var topicById = {};
  TOPICS.forEach(function (t) { topicById[t.id] = t; });

  var TIERS = WTF.quizTiers || [[0, "Your score", ""]]; // assets/quiz-tiers.js

  // Building questions
  // Seeded random numbers, so the daily quiz is identical for everyone.
  function hashStr(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng32(seed) {
    return function () {
      seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffled(list, rnd) {
    var a = list.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(rnd() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  // What the quiz calls an icon: its quiz label (what it MEANS) if it has one, else its name
  // without any bracketed part. Names that describe the picture get a quiz label in the data.
  function label(icon) { return icon.quiz || ui.shortName(icon); }

  // Skip icons whose drawing prints the label shown ("ECO" for "Eco mode", "30" for "Wash at 30 °C"):
  // no free points.
  function givesAway(icon) {
    var hay = label(icon).toLowerCase();
    var re = /<text[^>]*>([^<]*)<\/text>/g, m;
    while ((m = re.exec(icon.svg))) {
      var t = m[1].trim().toLowerCase().replace(/['\u2019]/g, ""); // DON'T → dont, not "don" + "t"
      if (!t) continue;
      if (/[^\x00-\x7f]/.test(t) && hay.indexOf(t) !== -1) return true;
      var words = t.split(/[^a-z0-9%]+/);
      for (var w = 0; w < words.length; w++) {
        if (words[w] && new RegExp("(^|[^a-z0-9])" + words[w].replace(/[%]/g, "\\$&") + "([^a-z0-9]|$)").test(hay)) return true;
      }
    }
    return false;
  }
  var ELIGIBLE = ICONS.filter(function (i) { return !givesAway(i); });

  var nameKey = function (icon) { return label(icon).toLowerCase(); };
  var look = function (icon) { return icon.svg + "|" + (icon.color || ""); };

  // Key words of a label, for spotting the same idea on different appliances ("Eco mode" on a car
  // and "Eco / energy-saving mode" on a fridge): both would be right, so they never meet.
  var COMMON = toSet("the and for with from your you its not no off on mode light symbol sign button key only setting indicator warning alarm".split(" "));
  function toSet(list) { var o = {}; list.forEach(function (w) { o[w] = true; }); return o; }
  function keyWords(icon) {
    return label(icon).toLowerCase().replace(/[^a-z0-9 ]+/g, " ").split(/\s+/)
      .filter(function (w) { return w.length > 2 && !COMMON[w]; })
      .map(function (w) { return w.replace(/s$/, ""); });
  }
  function sameIdea(a, b) {
    if (a.category === b.category) return false; // near-misses on one appliance are the fun part
    var kb = keyWords(b);
    return keyWords(a).some(function (w) { return kb.indexOf(w) !== -1; });
  }

  // Three wrong answers, all from the same section as the right one, so knowing the theme (the
  // question shows it) never rules an option out: lookalikes from the same category first (the
  // near-misses are the fun part), then the rest of the category, then the rest of the quiz topic,
  // and only then anything at all. When the options are pictures, skip icons that print their own
  // name. Never two options with the same name, the same drawing, or the same idea elsewhere.
  var eligibleId = {};
  ELIGIBLE.forEach(function (i) { eligibleId[i.id] = true; });
  function topicOf(cat) {
    for (var t = 0; t < TOPICS.length; t++) if (TOPICS[t].cats && TOPICS[t].cats.indexOf(cat) !== -1) return TOPICS[t];
    return null;
  }
  function wrongAnswers(icon, type, rnd) {
    var out = [], names = {}, looks = {}, topic = topicOf(icon.category);
    names[nameKey(icon)] = looks[look(icon)] = true;
    function add(c, anyIcon) {
      if (out.length >= 3 || c === icon || names[nameKey(c)] || looks[look(c)] || sameIdea(icon, c)) return;
      if (type === "name" && !eligibleId[c.id] && !anyIcon) return;
      names[nameKey(c)] = looks[look(c)] = true;
      out.push(c);
    }
    var sameCat = function (c) { return c.category === icon.category; };
    shuffled(ui.lookalikes(icon, 12).filter(sameCat), rnd).forEach(function (c) { add(c); });
    if (out.length < 3) shuffled(ICONS.filter(sameCat), rnd).forEach(function (c) { add(c); });
    if (out.length < 3 && topic) shuffled(ICONS.filter(function (c) { return topic.cats.indexOf(c.category) !== -1; }), rnd).forEach(function (c) { add(c); });
    if (out.length < 3) shuffled(ICONS, rnd).forEach(function (c) { add(c, true); });
    return out;
  }

  function buildRound(topicId, seed) {
    var rnd = rng32(hashStr(seed));
    var topic = topicById[topicId] || TOPICS[0];
    var perCat = topic.cats ? 4 : 1; // "Everything": ten different categories
    var count = {}, picked = [];
    shuffled(ELIGIBLE.filter(function (i) { return !topic.cats || topic.cats.indexOf(i.category) !== -1; }), rnd)
      .forEach(function (i) {
        if (picked.length < LEN && (count[i.category] || 0) < perCat) { picked.push(i); count[i.category] = (count[i.category] || 0) + 1; }
      });
    return picked.map(function (icon) {
      var type = rnd() < 0.5 ? "name" : "icon";
      return { icon: icon, type: type, options: shuffled([icon].concat(wrongAnswers(icon, type, rnd)), rnd) };
    });
  }

  // Days, scores & streaks (this device only)
  function todayKey() { return ui.isoDay(ui.ukToday()); }
  function dayLabel(key) { var d = new Date(key + "T00:00:00Z"); return d.getUTCDate() + " " + MONTHS[d.getUTCMonth()]; }
  function load() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(STORE, JSON.stringify(d)); } catch (e) { /* private mode: no memory, still playable */ } }
  function streakNow(d) {
    var s = d.streak, today = todayKey(), yest = ui.isoDay(ui.ukToday() - DAY);
    return s && (s.last === today || s.last === yest) ? s.count : 0;
  }
  function recordDaily(answers) {
    var d = load(), today = todayKey(), yest = ui.isoDay(ui.ukToday() - DAY);
    d.daily = d.daily || {};
    d.daily[today] = answers;
    var keys = Object.keys(d.daily).sort();
    while (keys.length > 60) delete d.daily[keys.shift()];
    if (!d.streak || d.streak.last !== today) {
      d.streak = { last: today, count: d.streak && d.streak.last === yest ? d.streak.count + 1 : 1 };
    }
    save(d);
  }
  function dailyDone() { var d = load(); return d.daily && d.daily[todayKey()]; }
  function score(answers) { return answers.reduce(function (a, b) { return a + b; }, 0); }

  // State
  // screen: "intro" | "question" | "results"
  var Q = { screen: "intro", mode: "daily", topic: "all", day: "", round: [], i: 0, answers: [], picked: null };

  function startDaily() {
    Q.mode = "daily"; Q.topic = "all"; Q.day = todayKey();
    Q.round = buildRound("all", "daily:" + Q.day);
    var done = dailyDone();
    if (done) { Q.answers = done.slice(); Q.screen = "results"; }
    else { Q.answers = []; Q.i = 0; Q.picked = null; Q.screen = "question"; }
    render();
  }
  function startPractice(topic) {
    Q.mode = "practice"; Q.topic = topicById[topic] ? topic : "all";
    Q.round = buildRound(Q.topic, "practice:" + Date.now() + ":" + Math.random());
    Q.answers = []; Q.i = 0; Q.picked = null; Q.screen = "question";
    render();
  }
  function answer(k) {
    if (Q.screen !== "question" || Q.picked !== null) return;
    var q = Q.round[Q.i];
    if (!q || !q.options[k]) return;
    Q.picked = k;
    Q.answers.push(q.options[k] === q.icon ? 1 : 0);
    render();
    var next = inner.querySelector('[data-quiz="next"]');
    if (next) next.focus({ preventScroll: true });
  }
  function next() {
    if (Q.screen !== "question" || Q.picked === null) return;
    Q.i++; Q.picked = null;
    if (Q.i >= Q.round.length) {
      if (Q.mode === "daily") recordDaily(Q.answers);
      Q.screen = "results";
      hideNudge(true);
    }
    render();
  }

  // Screens
  function modeLabel() {
    return Q.mode === "daily" ? "Daily quiz · " + dayLabel(Q.day) : "Practice · " + topicById[Q.topic].name;
  }
  function tile(icon, cls) {
    return '<div class="' + ui.tileClass(icon) + (cls ? " " + cls : "") + '">' + WTF.svg(icon) + "</div>";
  }
  function squares(answers, total) {
    var html = "";
    for (var n = 0; n < total; n++) {
      html += '<span class="' + (n < answers.length ? (answers[n] ? "is-right" : "is-wrong") : n === answers.length ? "is-now" : "") + '"></span>';
    }
    return html;
  }

  function introHtml() {
    var done = dailyDone(), d = load(), streak = streakNow(d), today = todayKey();
    var daily = done
      ? '<p class="quiz__mode-text">You scored <b>' + score(done) + "/" + done.length + "</b> today" +
          (streak ? " · " + streak + "-day streak" : "") + ". A new ten at midnight (UK time).</p>" +
          '<button type="button" class="btn" data-quiz="daily">See your result</button>'
      : '<p class="quiz__mode-text">The same ten symbols for everyone today. A new ten at midnight (UK time).' +
          (streak ? " You're on a <b>" + streak + "-day streak</b>." : "") + "</p>" +
          '<button type="button" class="btn" data-quiz="daily">Play today&rsquo;s quiz</button>';
    return '<div class="quiz__intro">' +
      '<h2 class="quiz__title" id="quiz-title">Do you speak symbol?</h2>' +
      '<p class="quiz__lede">Ten symbols, four choices each. No pressing random buttons.</p>' +
      '<div class="quiz__modes">' +
        '<section class="quiz__mode quiz__mode--daily">' +
          '<p class="wotw__label"><span class="wotw__tag">Daily quiz</span>' + esc(dayLabel(today)) + "</p>" +
          "<h3>Today&rsquo;s ten</h3>" + daily +
        "</section>" +
        '<section class="quiz__mode">' +
          '<p class="wotw__label"><span class="quiz__tag">Practice</span>As many rounds as you like</p>' +
          "<h3>Pick a topic</h3>" +
          '<div class="quiz__topics">' + TOPICS.map(function (t) {
            return '<button type="button" data-quiz="practice" data-topic="' + t.id + '">' + esc(t.name) + "</button>";
          }).join("") + "</div>" +
        "</section>" +
      "</div>" +
    "</div>";
  }

  function questionHtml() {
    var q = Q.round[Q.i], icon = q.icon, cat = ui.catById[icon.category], answered = Q.picked !== null;
    var where = '<p class="quiz__where">' + esc(cat.name) + "</p>";
    var opts = q.options.map(function (o, k) {
      var state = !answered ? "" : o === icon ? " is-correct" : k === Q.picked ? " is-wrong" : " is-dim";
      var inside = q.type === "icon"
        ? '<kbd>' + (k + 1) + "</kbd><span>" + esc(label(o)) + "</span>"
        : tile(o) + '<kbd>' + (k + 1) + "</kbd>";
      return '<button type="button" class="quiz__opt' + state + '" data-quiz="answer" data-k="' + k + '"' +
        (answered ? " disabled" : "") + (q.type === "name" ? ' aria-label="Option ' + (k + 1) + '"' : "") + ">" + inside + "</button>";
    }).join("");

    var head = q.type === "icon"
      ? '<h2 class="quiz__ask" id="quiz-title">What&rsquo;s this?</h2>' + where + tile(icon, "quiz__tile")
      : '<p class="quiz__ask-small" id="quiz-title">Which one is the&hellip;</p><h2 class="quiz__name">' + esc(label(icon)) + "</h2>" + where;

    var feedback = "", nextBtn = "";
    if (answered) {
      var right = q.options[Q.picked] === icon, picked = q.options[Q.picked], last = Q.i === Q.round.length - 1;
      var verdict = right
        ? "Correct!"
        : q.type === "icon"
          ? "Not quite. It&rsquo;s the <b>" + esc(label(icon)) + "</b>."
          : "Not quite: that one&rsquo;s the <b>" + esc(label(picked)) + "</b>.";
      feedback = '<div class="quiz__feedback ' + (right ? "is-right" : "is-wrong") + '" role="status">' +
        '<p class="quiz__verdict">' + verdict + "</p>" +
        '<p class="quiz__meaning">' + esc(ui.teaser(icon.meaning)) +
          ' <a href="' + ui.pagePath(icon) + '" data-icon="' + icon.id + '">Read more</a></p>' +
      "</div>";
      // Outside the question, so on phones it can stay pinned to the bottom of the screen.
      nextBtn = '<div class="quiz__next"><button type="button" class="btn" data-quiz="next">' + (last ? "See your score" : "Next question") + "</button></div>";
    }

    return '<div class="quiz__bar"><span>' + esc(modeLabel()) + '</span><span>' + (Q.i + 1) + " / " + Q.round.length + "</span></div>" +
      '<div class="quiz__progress" aria-hidden="true">' + squares(Q.answers.slice(0, Q.i + (answered ? 1 : 0)), Q.round.length) + "</div>" +
      '<div class="quiz__q quiz__q--' + q.type + '">' + head +
        '<div class="quiz__options quiz__options--' + (q.type === "icon" ? "names" : "icons") + '">' + opts + "</div>" +
        feedback +
      "</div>" + nextBtn;
  }

  function tierFor(s, total) {
    var scaled = Math.round(s * 10 / Math.max(1, total));
    for (var t = 0; t < TIERS.length; t++) if (scaled >= TIERS[t][0]) return TIERS[t];
    return TIERS[TIERS.length - 1];
  }

  function resultsHtml() {
    var s = score(Q.answers), total = Q.round.length, tier = tierFor(s, total);
    var missed = Q.round.filter(function (q, n) { return !Q.answers[n]; });
    var streak = Q.mode === "daily" ? streakNow(load()) : 0;
    var actions = Q.mode === "daily"
      ? '<button type="button" class="btn" data-quiz="share">Share your score</button>' +
        '<button type="button" class="btn btn--light" data-quiz="intro">Practice more</button>'
      : '<button type="button" class="btn" data-quiz="practice" data-topic="' + Q.topic + '">Another round</button>' +
        '<button type="button" class="btn btn--light" data-quiz="intro">Change topic</button>';
    return '<div class="quiz__results">' +
      '<p class="quiz__bar"><span>' + esc(modeLabel()) + "</span></p>" +
      '<p class="quiz__score"><b>' + s + "</b>/" + total + "</p>" +
      '<h2 class="quiz__title" id="quiz-title">' + esc(tier[1]) + "</h2>" +
      '<p class="quiz__lede">' + esc(tier[2]) + "</p>" +
      '<div class="quiz__progress quiz__progress--big" role="img" aria-label="' + s + " right, " + (total - s) + ' wrong">' + squares(Q.answers, total) + "</div>" +
      (streak ? '<p class="quiz__streak"><b>' + streak + "-day streak.</b> Come back tomorrow for a new ten.</p>" : "") +
      '<div class="quiz__actions">' + actions + "</div>" +
      (missed.length
        ? '<div class="quiz__missed"><h3>The ones that got you</h3><div class="mini-grid">' + missed.map(function (q) {
            return '<a class="mini" href="' + ui.pagePath(q.icon) + '" data-icon="' + q.icon.id + '">' + tile(q.icon) +
              "<span>" + esc(q.icon.name) + "<small>" + esc(ui.catById[q.icon.category].name) + "</small></span></a>";
          }).join("") + "</div></div>"
        : "") +
    "</div>";
  }

  function render() {
    inner.innerHTML = Q.screen === "question" ? questionHtml() : Q.screen === "results" ? resultsHtml() : introHtml();
    inner.scrollTop = 0;
  }

  // Sharing
  function share(btn) {
    // Each score has its own page (quiz/<score>/, built by dev/build-share.mjs) whose link preview
    // says "I scored 8/10". Anything other than a full ten falls back to the general quiz link.
    var s = score(Q.answers), url = location.origin + "/quiz/" + (Q.round.length === 10 ? s + "/" : "");
    var text = "WTF is this icon? Daily quiz · " + dayLabel(Q.day) + "\n" + s + "/" + Q.round.length + " " +
      Q.answers.map(function (a) { return a ? "🟩" : "🟥"; }).join("");
    if (navigator.share && ui.coarsePointer) {
      navigator.share({ title: "WTF is this icon? Daily quiz", text: text, url: url }).catch(function () {});
      return;
    }
    var full = text + "\n" + url;
    var done = function () { btn.textContent = "Copied, paste it anywhere"; setTimeout(function () { btn.textContent = "Share your score"; }, 1800); };
    if (navigator.clipboard) navigator.clipboard.writeText(full).then(done, function () { prompt("Copy your score:", full); });
    else prompt("Copy your score:", full);
  }

  // A small, dismissible card in the corner, at most once a day, only if today's quiz hasn't been
  // played. It waits until the visitor has been around a little (and nothing else is open).
  var NUDGE_KEY = "wtf-quiz-nudge", NUDGE_AFTER = 15000;
  function nudgeSeen() { try { return localStorage.getItem(NUDGE_KEY) === todayKey(); } catch (e) { return true; } }
  function showNudge() {
    if (!nudge || nudgeSeen() || dailyDone()) return true;      // nothing to do: stop trying
    if (document.querySelector("dialog[open]")) return false;   // busy: try again shortly
    var streak = streakNow(load());
    nudge.innerHTML =
      '<button type="button" class="quiz-nudge__close" data-nudge-close aria-label="Dismiss">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg></button>' +
      '<p class="wotw__label"><span class="wotw__tag">Daily quiz</span>' + esc(dayLabel(todayKey())) + "</p>" +
      '<p class="quiz-nudge__title">' + (streak ? "Keep your " + streak + "-day streak going." : "Ten symbols. How many do you speak?") + "</p>" +
      '<a class="btn" href="#/quiz" data-quiz-open="daily">Play today&rsquo;s quiz</a>';
    nudge.hidden = false;
    void nudge.offsetWidth; // apply the start position first, so the slide-in plays
    nudge.classList.add("is-in");
    return true;
  }
  function hideNudge(remember) {
    if (remember) { try { localStorage.setItem(NUDGE_KEY, todayKey()); } catch (e) { /* fine */ } }
    if (!nudge || nudge.hidden) return;
    nudge.classList.remove("is-in");
    setTimeout(function () { nudge.hidden = true; }, 300);
  }
  if (nudge) {
    nudge.addEventListener("click", function (e) { if (e.target.closest("[data-nudge-close]")) hideNudge(true); });
    (function wait(ms) { setTimeout(function () { if (!showNudge()) wait(4000); }, ms); })(NUDGE_AFTER);
  }

  // Routing: #/quiz opens the quiz
  var pushed = false;
  function wanted() { return /^#\/?quiz(\/|\?|$)/.test(location.hash); }
  function sync() {
    if (wanted()) {
      if (!dlg.open) { if (Q.screen === "results" && Q.mode === "practice") Q.screen = "intro"; render(); dlg.showModal(); }
    } else if (dlg.open) {
      dlg.close();
      if (Q.screen === "question" && Q.mode === "practice") Q.screen = "intro";
    }
  }
  function open(start) {
    hideNudge(true);
    if (start === "daily") startDaily(); else { Q.screen = "intro"; render(); }
    if (!wanted()) { history.pushState(null, "", "#/quiz"); pushed = true; }
    if (!dlg.open) dlg.showModal();
  }
  function close() {
    if (pushed) { pushed = false; history.back(); }
    else { history.replaceState(null, "", "#/"); sync(); }
  }
  window.addEventListener("hashchange", sync);
  window.addEventListener("popstate", sync);
  dlg.addEventListener("cancel", function (e) { e.preventDefault(); close(); });

  document.addEventListener("click", function (e) {
    var o = e.target.closest("[data-quiz-open]");
    if (!o || e.metaKey || e.ctrlKey || e.shiftKey) return;
    e.preventDefault();
    open(o.getAttribute("data-quiz-open"));
  });
  dlg.addEventListener("click", function (e) {
    var t = e.target.closest("[data-quiz]");
    if (!t) return;
    var a = t.getAttribute("data-quiz");
    if (a === "close") close();
    else if (a === "daily") startDaily();
    else if (a === "practice") startPractice(t.getAttribute("data-topic"));
    else if (a === "answer") answer(+t.getAttribute("data-k"));
    else if (a === "next") next();
    else if (a === "intro") { Q.screen = "intro"; render(); }
    else if (a === "share") share(t);
  });
  dlg.addEventListener("keydown", function (e) {
    if (Q.screen !== "question" || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/^[1-4]$/.test(e.key)) { e.preventDefault(); answer(+e.key - 1); }
    else if (e.key === "Enter" && Q.picked !== null && e.target.tagName !== "BUTTON" && e.target.tagName !== "A") { e.preventDefault(); next(); }
  });

  if (wanted()) hideNudge(true);
  sync();

  // Debugging / tests
  WTF.quiz = {
    eligible: ELIGIBLE.length,
    nudge: showNudge,
    daily: function (key) {
      return buildRound("all", "daily:" + (key || todayKey())).map(function (q) {
        return { id: q.icon.id, type: q.type, options: q.options.map(function (o) { return o.id; }) };
      });
    },
    topics: TOPICS.map(function (t) {
      return t.id + ":" + ELIGIBLE.filter(function (i) { return !t.cats || t.cats.indexOf(i.category) !== -1; }).length;
    })
  };
})();
