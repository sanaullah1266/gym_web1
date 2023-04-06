_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [17], {
        10: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("cha2")
            }])
        },
        "9WaG": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.shouldTrackAwin = void 0;
            t.shouldTrackAwin = function(e) {
                var t = (void 0 === e ? {} : e).awc;
                return !!t && "" !== t
            }
        },
        "H/sG": function(e, t, n) {},
        cha2: function(e, t, n) {
            "use strict";
            n.r(t);
            var c = n("nKUr"),
                o = n("cpVT"),
                r = n("vJKn"),
                s = n.n(r),
                i = n("rg98"),
                a = n("g4pe"),
                f = n.n(a),
                u = n("q1tI"),
                l = n("20a2"),
                p = n("9WaG"),
                j = n("iUZJ");
            n("H/sG"), n("ftJd");

            function O(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var c = Object.getOwnPropertySymbols(e);
                    t && (c = c.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, c)
                }
                return n
            }

            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? O(Object(n), !0).forEach((function(t) {
                        Object(o.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e) {
                var t, o = e.Component,
                    r = e.pageProps,
                    a = null !== (t = "https://static.hussle.com") ? t : "",
                    O = Object(l.useRouter)().query;
                return Object(u.useEffect)((function() {
                    "undefined" !== typeof document && Object(j.initialize)({
                        id: "GTM-TMZF28F"
                    })
                }), []), Object(u.useEffect)((function() {
                    Object(p.shouldTrackAwin)(O) && Object(i.a)(s.a.mark((function e() {
                        var t, c;
                        return s.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([n.e(9), n.e(32)]).then(n.t.bind(null, "qOLr", 7));
                                case 2:
                                    return t = e.sent, c = t.trackAwin, e.next = 6, c({
                                        awc: O.awc,
                                        affid: O.affid,
                                        cookie: document.cookie
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                }), [O]), Object(c.jsxs)(c.Fragment, {
                    children: [Object(c.jsxs)(f.a, {
                        children: [Object(c.jsx)("meta", {
                            httpEquiv: "Expires",
                            content: "15"
                        }), Object(c.jsx)("meta", {
                            name: "Classification",
                            content: "Internet"
                        }), Object(c.jsx)("meta", {
                            name: "Author",
                            content: "Hussle"
                        }), Object(c.jsx)("meta", {
                            name: "Contact",
                            content: "info@hussle.com"
                        }), Object(c.jsx)("meta", {
                            name: "Publisher",
                            content: "Hussle"
                        }), Object(c.jsx)("meta", {
                            property: "fb:app_id",
                            content: "342874775786748"
                        }), Object(c.jsx)("meta", {
                            property: "og:locale",
                            content: "en_GB"
                        }), Object(c.jsx)("meta", {
                            property: "og:site_name",
                            content: "Hussle"
                        }), Object(c.jsx)("meta", {
                            property: "og:type",
                            content: "article"
                        }), Object(c.jsx)("meta", {
                            property: "og:image",
                            content: "".concat("https://www.hussle.com", "/frontend/img/bg/default-og-image.jpg")
                        }), Object(c.jsx)("link", {
                            rel: "icon",
                            href: "".concat("https://www.hussle.com", "/favicon.ico")
                        }), Object(c.jsx)("link", {
                            href: "".concat(a, "/assets/fonts/EuclidCircularB/EuclidCircularB-Light.woff2"),
                            rel: "preload",
                            type: "font/woff2",
                            crossOrigin: "anonymous",
                            as: "font"
                        }), Object(c.jsx)("link", {
                            href: "".concat(a, "/assets/fonts/EuclidCircularB/EuclidCircularB-Medium.woff2"),
                            rel: "preload",
                            type: "font/woff2",
                            crossOrigin: "anonymous",
                            as: "font"
                        }), Object(c.jsx)("link", {
                            href: "".concat(a, "/assets/fonts/EuclidCircularB/EuclidCircularB-Regular.woff2"),
                            rel: "preload",
                            type: "font/woff2",
                            crossOrigin: "anonymous",
                            as: "font"
                        }), Object(c.jsx)("link", {
                            href: "".concat(a, "/assets/fonts/HussleEuclid/HussleEuclid-Medium-WebM.woff2"),
                            rel: "preload",
                            type: "font/woff2",
                            crossOrigin: "anonymous",
                            as: "font"
                        }), Object(c.jsx)("link", {
                            rel: "preload",
                            href: "https://consent.cookiefirst.com/banner.js",
                            as: "script"
                        }), Object(c.jsx)("link", {
                            rel: "preconnect",
                            href: "https://static.hussle.com/"
                        }), Object(c.jsx)("link", {
                            rel: "preconnect",
                            href: "https://www.googletagmanager.com"
                        }), Object(c.jsx)("link", {
                            rel: "preconnect",
                            href: "https://www.google-analytics.com"
                        }), Object(c.jsx)("link", {
                            rel: "preconnect",
                            href: "https://edge.cookiefirst.com"
                        })]
                    }), Object(c.jsx)(o, b({}, r))]
                })
            }
        },
        ftJd: function(e, t, n) {}
    },
    [
        [10, 1, 0, 14, 2, 3]
    ]
]);