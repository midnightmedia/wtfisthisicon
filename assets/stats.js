/* Visitor stats, sent to GoatCounter (no cookies, no personal data).
 * Switched on by GOATCOUNTER in assets/config.js. Leave it empty and nothing is sent.
 * Loaded on every page, after assets/config.js. Exposes:
 *   WTF.stats.page(path, title)   a pageview (the same path twice in a row counts once)
 *   WTF.stats.event(name, title)  an event, e.g. a search that found nothing
 *   WTF.stats.sent                what this page has counted so far, for checking in the console
 * On localhost nothing leaves the browser, but WTF.stats.sent still fills up. */
(function () {
  var code = String((window.WTF_CONFIG && window.WTF_CONFIG.GOATCOUNTER) || "").trim();
  var local = /^(localhost|127\.0\.0\.1|\[::1\]|.*\.localhost|.*\.test)$/.test(location.hostname) || location.protocol === "file:";
  var queue = [], sent = [], last = null;

  function param(name) {
    try { return new URLSearchParams(location.search).get(name) || ""; } catch (e) { return ""; }
  }
  // Where the visitor came from: ?ref=instagram (or ?utm_source=) wins over the browser's referrer,
  // since in-app browsers often don't send one.
  var from = param("ref") || param("utm_source");

  function send(vars) {
    if (!code) return;
    sent.push(vars);
    if (sent.length > 50) sent.shift();
    if (local) return;
    var gc = window.goatcounter;
    if (gc && gc.count) gc.count(vars); else queue.push(vars);
  }

  window.WTF = window.WTF || {};
  window.WTF.stats = {
    sent: sent,
    page: function (path, title) {
      if (!path || path === last) return;
      // Only the first pageview carries the outside referrer; later ones are moves within the site.
      var vars = { path: path, title: title || document.title };
      if (last) vars.referrer = location.origin + last;
      last = path;
      send(vars);
    },
    event: function (name, title) {
      send({ path: String(name).replace(/^\/+/, "").slice(0, 200), title: String(title || name).slice(0, 200), event: true, referrer: location.origin + (last || "/") });
    }
  };

  if (!code || local) return;
  var gc = window.goatcounter = window.goatcounter || {};
  gc.no_onload = true;
  gc.endpoint = "https://" + code + ".goatcounter.com/count";
  gc.referrer = function (fallback) { return from || fallback; };
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", gc.endpoint);
  s.onload = function () {
    var waiting = queue;
    queue = [];
    waiting.forEach(function (vars) { if (window.goatcounter.count) window.goatcounter.count(vars); });
  };
  document.head.appendChild(s);
})();
