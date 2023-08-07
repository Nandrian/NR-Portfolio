/*! NProgress (c) 2013, Rico Sta. Cruz
 *  http://ricostacruz.com/nprogress */
!function (n) { "function" == typeof module ? module.exports = n(this.jQuery || require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], function (t) { return n(t) }) : this.NProgress = n(this.jQuery) }(function (n) { function t(n, t, e) { return t > n ? t : n > e ? e : n } function e(n) { return 100 * (-1 + n) } function r(n, t, r) { var i; return i = "translate3d" === s.positionUsing ? { transform: "translate3d(" + e(n) + "%,0,0)" } : "translate" === s.positionUsing ? { transform: "translate(" + e(n) + "%,0)" } : { "margin-left": e(n) + "%" }, i.transition = "all " + t + "ms " + r, i } var i = {}; i.version = "0.1.2"; var s = i.settings = { minimum: .08, easing: "ease", positionUsing: "", speed: 200, trickle: !0, trickleRate: .02, trickleSpeed: 800, showSpinner: !0, template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>' }; return i.configure = function (t) { return n.extend(s, t), this }, i.status = null, i.set = function (n) { var e = i.isStarted(); n = t(n, s.minimum, 1), i.status = 1 === n ? null : n; var o = i.render(!e), a = o.find('[role="bar"]'), u = s.speed, c = s.easing; return o[0].offsetWidth, o.queue(function (t) { "" === s.positionUsing && (s.positionUsing = i.getPositioningCSS()), a.css(r(n, u, c)), 1 === n ? (o.css({ transition: "none", opacity: 1 }), o[0].offsetWidth, setTimeout(function () { o.css({ transition: "all " + u + "ms linear", opacity: 0 }), setTimeout(function () { i.remove(), t() }, u) }, u)) : setTimeout(t, u) }), this }, i.isStarted = function () { return "number" == typeof i.status }, i.start = function () { i.status || i.set(0); var n = function () { setTimeout(function () { i.status && (i.trickle(), n()) }, s.trickleSpeed) }; return s.trickle && n(), this }, i.done = function (n) { return n || i.status ? i.inc(.3 + .5 * Math.random()).set(1) : this }, i.inc = function (n) { var e = i.status; return e ? ("number" != typeof n && (n = (1 - e) * t(Math.random() * e, .1, .95)), e = t(e + n, 0, .994), i.set(e)) : i.start() }, i.trickle = function () { return i.inc(Math.random() * s.trickleRate) }, function () { var n = 0, t = 0; i.promise = function (e) { return e && "resolved" != e.state() ? (0 == t && i.start(), n++, t++, e.always(function () { t--, 0 == t ? (n = 0, i.done()) : i.set((n - t) / n) }), this) : this } }(), i.render = function (t) { if (i.isRendered()) return n("#nprogress"); n("html").addClass("nprogress-busy"); var r = n("<div id='nprogress'>").html(s.template), o = t ? "-100" : e(i.status || 0); return r.find('[role="bar"]').css({ transition: "all 0 linear", transform: "translate3d(" + o + "%,0,0)" }), s.showSpinner || r.find('[role="spinner"]').remove(), r.appendTo(document.body), r }, i.remove = function () { n("html").removeClass("nprogress-busy"), n("#nprogress").remove() }, i.isRendered = function () { return n("#nprogress").length > 0 }, i.getPositioningCSS = function () { var n = document.body.style, t = "WebkitTransform" in n ? "Webkit" : "MozTransform" in n ? "Moz" : "msTransform" in n ? "ms" : "OTransform" in n ? "O" : ""; return t + "Perspective" in n ? "translate3d" : t + "Transform" in n ? "translate" : "margin" }, i });
