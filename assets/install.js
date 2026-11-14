/* "Get the app": puts the site on the home screen.
 * Loaded on every page, after assets/stats.js. Needs the header button #install-btn.
 * - Chrome, Edge and friends (Android and desktop) offer their own install prompt once the visitor
 *   has been around a little; the button then opens it directly.
 * - Everywhere else on a phone (iPhone, iPad, Android before that prompt is ready), the button opens
 *   a short how-to for that browser.
 * - In app browsers (Instagram, Facebook, TikTok...) can't install anything, so the how-to says how
 *   to get to the real browser first.
 * - Hidden when the site is already running as an app, and on computers with no install prompt. */
(function () {
  var btn = document.getElementById("install-btn");
  var standalone = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
  if (!btn || standalone) return;

  var ua = navigator.userAgent;
  var ipad = /iPad/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var ios = ipad || /iPhone|iPod/.test(ua);
  var android = /Android/.test(ua);
  var samsung = /SamsungBrowser/.test(ua);
  var iosOther = ios && /CriOS|FxiOS|EdgiOS|OPiOS/.test(ua);
  var APPS = [
    [/Instagram/, "Instagram"], [/FBAN|FBAV|FB_IAB/, "Facebook"], [/musical_ly|BytedanceWebview|TikTok/, "TikTok"],
    [/WhatsApp/, "WhatsApp"], [/LinkedInApp/, "LinkedIn"], [/Snapchat/, "Snapchat"], [/Pinterest/, "Pinterest"], [/\bLine\//, "LINE"]
  ];
  var inApp = null;
  APPS.forEach(function (a) { if (!inApp && a[0].test(ua)) inApp = a[1]; });
  if (!inApp && android && /; wv\)/.test(ua)) inApp = "this app"; // Android web views mark themselves with "wv"

  var deferred = null;
  function stat(name, title) { if (window.WTF && WTF.stats) WTF.stats.event(name, title); }

  if (ios || android) btn.hidden = false;
  window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault(); // our button asks instead of the browser's own banner
    deferred = e;
    btn.hidden = false;
  });
  window.addEventListener("appinstalled", function () {
    deferred = null;
    btn.hidden = true;
    if (sheet && sheet.open) sheet.close();
    stat("App: installed");
  });

  btn.addEventListener("click", function () {
    if (deferred && !inApp) {
      var prompt = deferred;
      deferred = null;
      prompt.prompt();
      prompt.userChoice.then(function (choice) {
        stat(choice.outcome === "accepted" ? "App: install accepted" : "App: install dismissed");
      }, function () {});
      return;
    }
    openSheet();
  });

  // The how-to
  var I = {
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="Share"><path d="M12 15V3M8 7l4-4 4 4"/><path d="M8 11H6a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-2"/></svg>',
    more: '<svg viewBox="0 0 24 24" fill="currentColor" aria-label="More"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="currentColor" aria-label="Menu"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>',
    bars: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-label="Menu"><path d="M4 7h16M4 12h16M4 17h16"/></svg>'
  };

  function guide() {
    if (inApp) return {
      kind: "in-app",
      intro: "You’re in " + inApp + "’s built-in browser, which can’t add anything to your home screen. Open the site in your normal browser first.",
      steps: [
        "Tap " + I.more + " in the top corner.",
        ios ? "Choose <b>Open in external browser</b> (or <b>Open in Safari</b>)." : "Choose <b>Open in Chrome</b> (or <b>Open in browser</b>).",
        "Tap <b>" + label() + "</b> at the top of the page again."
      ]
    };
    var intro = "It opens full screen like any other app, so the answer’s one tap away the next time something starts blinking at you. No app store, nothing to pay.";
    if (ios) return {
      kind: ipad ? "ipad" : "iphone",
      intro: intro,
      steps: [
        "Tap the Share button " + I.share + (ipad ? " at the top of the screen."
          : iosOther ? " next to the address bar, or in the " + I.more + " menu."
          : " at the bottom of Safari. On newer iPhones it’s in the " + I.more + " menu next to the address bar."),
        "Scroll down and tap <b>Add to Home Screen</b>.",
        "Tap <b>Add</b>. That’s it."
      ]
    };
    if (samsung) return {
      kind: "samsung",
      intro: intro,
      steps: [
        "Tap the menu " + I.bars + " at the bottom right.",
        "Tap <b>Add page to</b>, then <b>Home screen</b>.",
        "Tap <b>Add</b>. That’s it."
      ]
    };
    return {
      kind: "android",
      intro: intro,
      steps: [
        "Tap the menu " + I.menu + " at the top right of your browser.",
        "Tap <b>Add to Home screen</b> or <b>Install app</b>.",
        "Tap <b>Install</b>. That’s it."
      ]
    };
  }

  // The header shows "Get the app", or just "App" on narrow phones
  function label() {
    var long = btn.querySelector(".install-btn__long");
    return long && getComputedStyle(long).display === "none" ? "App" : "Get the app";
  }

  var sheet = null;
  function openSheet() {
    var g = guide();
    if (!sheet) {
      sheet = document.createElement("dialog");
      sheet.className = "install";
      sheet.setAttribute("aria-labelledby", "install-title");
      sheet.addEventListener("click", function (e) {
        // The dialog itself is only hit on the backdrop; the content sits in .install__inner
        if (e.target === sheet || e.target.closest("[data-install-close]")) sheet.close();
      });
      document.body.appendChild(sheet);
    }
    sheet.innerHTML =
      '<div class="install__inner">' +
      '<button type="button" class="detail__close" data-install-close aria-label="Close">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M7 7l10 10M17 7L7 17"/></svg>' +
      "</button>" +
      '<p class="install__label">Get the app</p>' +
      '<h2 class="install__title" id="install-title">Put it on your home screen</h2>' +
      '<p class="install__intro">' + g.intro + "</p>" +
      '<ol class="install__steps">' + g.steps.map(function (s) { return "<li><span>" + s + "</span></li>"; }).join("") + "</ol>" +
      '<button type="button" class="btn install__done" data-install-close>Got it</button>' +
      "</div>";
    sheet.showModal();
    stat("App: how-to (" + g.kind + ")");
  }
})();
