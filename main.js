/*! For license information please see main.js.LICENSE.txt */
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [8792], {
        32: (e, t, n) => {
            "use strict";
            n(7470)
        },
        47: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(9565);
            e.exports = function(e, t) {
                return arguments.length < 2 ? (n = r[e], o(n) ? n : void 0) : r[e] && r[e][t];
                var n
            }
        },
        135: (e, t, n) => {
            "use strict";
            var r = n(553).f,
                o = n(4265),
                a = n(7835)("toStringTag");
            e.exports = function(e, t, n) {
                e && !n && (e = e.prototype), e && !o(e, a) && r(e, a, {
                    configurable: !0,
                    value: t
                })
            }
        },
        137: (e, t, n) => {
            "use strict";
            var r = n(47),
                o = n(7426),
                a = n(7835),
                i = n(6724),
                l = a("species");
            e.exports = function(e) {
                var t = r(e);
                i && t && !t[l] && o(t, l, {
                    configurable: !0,
                    get: function() {
                        return this
                    }
                })
            }
        },
        154: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298),
                a = n(6382),
                i = n(2165),
                l = n(6243),
                s = o.add,
                c = o.has,
                u = o.remove;
            e.exports = function(e) {
                var t = r(this),
                    n = i(e).getIterator(),
                    o = a(t);
                return l(n, (function(e) {
                    c(t, e) ? u(o, e) : s(o, e)
                })), o
            }
        },
        170: (e, t, n) => {
            "use strict";
            var r = n(1978),
                o = n(6298);
            e.exports = r(o.proto, "size", "get") || function(e) {
                return e.size
            }
        },
        181: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(6024).RegExp,
                a = r((function() {
                    var e = o("a", "y");
                    return e.lastIndex = 2, null !== e.exec("abcd")
                })),
                i = a || r((function() {
                    return !o("a", "y").sticky
                })),
                l = a || r((function() {
                    var e = o("^r", "gy");
                    return e.lastIndex = 2, null !== e.exec("str")
                }));
            e.exports = {
                BROKEN_CARET: l,
                MISSED_STICKY: i,
                UNSUPPORTED_Y: a
            }
        },
        214: (e, t, n) => {
            "use strict";
            var r = n(3059),
                o = Math.min;
            e.exports = function(e) {
                var t = r(e);
                return t > 0 ? o(t, 9007199254740991) : 0
            }
        },
        232: (e, t, n) => {
            "use strict";
            var r = n(9084),
                o = n(8031);
            e.exports = Object.keys || function(e) {
                return r(e, o)
            }
        },
        234: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(676);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("union")
            }, {
                union: o
            })
        },
        244: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a),
                l = n(6252),
                s = n.n(l),
                c = new URL(n(6921), n.b),
                u = i()(o()),
                d = s()(c);
            u.push([e.id, `@font-face {\n  font-family: 'PlusJakartaSans';\n  font-weight: 100 1000;\n  src: url(${d}) format('truetype');\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  margin: 0;\n  font-family: 'PlusJakartaSans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  background-color: #0c0c10;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nh1 {\n  font-size: 2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\np {\n  font-size: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n::-webkit-scrollbar {\n  background: rgba(255, 255, 255, 0.03);\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 1rem;\n  background: #7b5bf5;\n}\n.toast {\n  padding: 1.25rem 1.5rem;\n  border-radius: 0.75rem;\n  font-size: 1.25rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  background-color: #7b5bf5;\n  box-shadow: 0 0 1rem #0c0c10;\n}\n.animations-disabled {\n  transition-property: none !important;\n  animation: none !important;\n}\n.animations-disabled *,\n.animations-disabled :before,\n.animations-disabled :after {\n  transition-property: none !important;\n  animation: none !important;\n}\n.fade-enter-active {\n  transition: opacity 0.2s ease;\n}\n.fade-exit-active {\n  transition: opacity 0.15s ease;\n}\n.fade-enter,\n.fade-exit-to {\n  opacity: 0;\n}\n.slide-fade-enter-active {\n  transition: all 0.15s ease;\n}\n.slide-fade-exit-active {\n  transition: all 0.1s ease;\n}\n.slide-fade-enter,\n.slide-fade-exit-to {\n  transform: translateX(10px);\n  opacity: 0;\n}\n`, ""]), u.locals = {};
            const h = u
        },
        255: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(3059),
                a = n(4935),
                i = n(5262),
                l = r("".charAt),
                s = r("".charCodeAt),
                c = r("".slice),
                u = function(e) {
                    return function(t, n) {
                        var r, u, d = a(i(t)),
                            h = o(n),
                            f = d.length;
                        return h < 0 || h >= f ? e ? "" : void 0 : (r = s(d, h)) < 55296 || r > 56319 || h + 1 === f || (u = s(d, h + 1)) < 56320 || u > 57343 ? e ? l(d, h) : r : e ? c(d, h, h + 2) : u - 56320 + (r - 55296 << 10) + 65536
                    }
                };
            e.exports = {
                codeAt: u(!1),
                charAt: u(!0)
            }
        },
        283: (e, t, n) => {
            "use strict";
            var r, o, a, i, l, s = n(6024),
                c = n(4949),
                u = n(312),
                d = n(8033).set,
                h = n(3569),
                f = n(9328),
                v = n(1441),
                p = n(8396),
                m = n(3289),
                g = s.MutationObserver || s.WebKitMutationObserver,
                y = s.document,
                b = s.process,
                w = s.Promise,
                k = c("queueMicrotask");
            if (!k) {
                var x = new h,
                    S = function() {
                        var e, t;
                        for (m && (e = b.domain) && e.exit(); t = x.get();) try {
                            t()
                        } catch (e) {
                            throw x.head && r(), e
                        }
                        e && e.enter()
                    };
                f || m || p || !g || !y ? !v && w && w.resolve ? ((i = w.resolve(void 0)).constructor = w, l = u(i.then, i), r = function() {
                    l(S)
                }) : m ? r = function() {
                    b.nextTick(S)
                } : (d = u(d, s), r = function() {
                    d(S)
                }) : (o = !0, a = y.createTextNode(""), new g(S).observe(a, {
                    characterData: !0
                }), r = function() {
                    a.data = o = !o
                }), k = function(e) {
                    x.head || r(), x.add(e)
                }
            }
            e.exports = k
        },
        312: (e, t, n) => {
            "use strict";
            var r = n(5756),
                o = n(2786),
                a = n(6480),
                i = r(r.bind);
            e.exports = function(e, t) {
                return o(e), void 0 === t ? e : a ? i(e, t) : function() {
                    return e.apply(t, arguments)
                }
            }
        },
        315: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(5644);
            e.exports = !r((function() {
                var e = new Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", o(1, 7)), 7 !== e.stack)
            }))
        },
        427: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(2786),
                i = n(6415),
                l = n(4479),
                s = n(6542),
                c = n(8462),
                u = n(9515),
                d = n(8867),
                h = c((function() {
                    for (var e, t, n = this.iterator, r = this.mapper;;) {
                        if (t = this.inner) try {
                            if (!(e = i(o(t.next, t.iterator))).done) return e.value;
                            this.inner = null
                        } catch (e) {
                            u(n, "throw", e)
                        }
                        if (e = i(o(this.next, n)), this.done = !!e.done) return;
                        try {
                            this.inner = s(r(e.value, this.counter++), !1)
                        } catch (e) {
                            u(n, "throw", e)
                        }
                    }
                }));
            r({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: d
            }, {
                flatMap: function(e) {
                    return i(this), a(e), new h(l(this), {
                        mapper: e,
                        inner: null
                    })
                }
            })
        },
        435: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(9207);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("isSupersetOf", (function(e) {
                    return !e
                }))
            }, {
                isSupersetOf: o
            })
        },
        438: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".page-jI4PO {\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  transition: background-color 0.2s ease-out;\n}\n.page-jI4PO .inner-DXVjx {\n  position: relative;\n  height: 100%;\n  width: calc(100% - 10rem);\n  margin-left: 10rem;\n  overflow: hidden;\n}\n.page-jI4PO.hide-navbar-Q5Bl7 .inner-DXVjx {\n  width: 100vw;\n  margin-left: 0;\n}\n.page-jI4PO.page-720p-gqRRo {\n  height: 153.8vh;\n  width: 153.8vw;\n}\n.page-jI4PO.page-720p-gqRRo.hide-navbar-Q5Bl7 .inner-DXVjx {\n  width: 153.8vw;\n  margin-left: 0;\n}\n", ""]), i.locals = {
                page: "page-jI4PO",
                inner: "inner-DXVjx",
                "hide-navbar": "hide-navbar-Q5Bl7",
                "page-720p": "page-720p-gqRRo"
            };
            const l = i
        },
        460: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(3766);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("isSubsetOf", (function(e) {
                    return e
                }))
            }, {
                isSubsetOf: o
            })
        },
        500: e => {
            "use strict";
            var t = TypeError;
            e.exports = function(e, n) {
                if (e < n) throw new t("Not enough arguments");
                return e
            }
        },
        504: (e, t, n) => {
            "use strict";
            var r = n(7247)("span").classList,
                o = r && r.constructor && r.constructor.prototype;
            e.exports = o === Object.prototype ? void 0 : o
        },
        549: (e, t, n) => {
            "use strict";
            n(6284)
        },
        553: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(1141),
                a = n(8758),
                i = n(6415),
                l = n(6641),
                s = TypeError,
                c = Object.defineProperty,
                u = Object.getOwnPropertyDescriptor,
                d = "enumerable",
                h = "configurable",
                f = "writable";
            t.f = r ? a ? function(e, t, n) {
                if (i(e), t = l(t), i(n), "function" == typeof e && "prototype" === t && "value" in n && f in n && !n[f]) {
                    var r = u(e, t);
                    r && r[f] && (e[t] = n.value, n = {
                        configurable: h in n ? n[h] : r[h],
                        enumerable: d in n ? n[d] : r[d],
                        writable: !1
                    })
                }
                return c(e, t, n)
            } : c : function(e, t, n) {
                if (i(e), t = l(t), i(n), o) try {
                    return c(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw new s("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        656: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ix: () => s,
                W6: () => c,
                g: () => u,
                lq: () => h,
                ok: () => d
            });
            var r = n(6886),
                o = (n(9144), n(4430), n(8233), n(3311), n(5224), n(9784), n(9296), n(7961), n(3238), n(5073), n(7672), n(7632), n(32), n(3363), n(9206), n(3769), n(8224));
            const a = (0, r.q6)({});
            n(5226), n(5658);
            const i = e => window.dispatchEvent(new Event(e)),
                l = () => new URL(`${window.location.origin}${window.location.hash.replace("#","")}`),
                s = e => {
                    const t = (() => {
                            const [e, t] = (0, r.n5)([]), [n, o] = (0, r.n5)(!1), a = (e, n) => {
                                t((t => (n && t.pop(), t.push(e), t)))
                            }, l = () => {
                                t((e => (e.pop(), e)))
                            };
                            return {
                                entries: e,
                                size: () => e().length,
                                navigate: (e, t) => {
                                    if (!e) return;
                                    const n = "#" !== Array.from(e)[0] ? `#${e}` : e,
                                        r = t ? "replaceState" : "pushState";
                                    window.history[r](Math.random(), "", n), a(n, t), i("historyChange")
                                },
                                back: () => new Promise((e => {
                                    if (n()) return e();
                                    const t = () => {
                                        window.removeEventListener("popstate", t), l(), i("historyChange"), e()
                                    };
                                    window.addEventListener("popstate", t), window.history.back()
                                })),
                                backDisabled: n,
                                setBackDisabled: o
                            }
                        })(),
                        [n, s] = (0, r.n5)(e.defaultRoute),
                        [c, u] = (0, r.n5)({}, {
                            equals: (e, t) => JSON.stringify(e) === JSON.stringify(t)
                        }),
                        [d, h] = (0, r.n5)({}, {
                            equals: (e, t) => JSON.stringify(e) === JSON.stringify(t)
                        }),
                        f = () => {
                            const n = l(),
                                [, o, ...a] = n.pathname.split("/"),
                                i = e.routes.find((e => {
                                    const [, t, ...n] = e.path.split("/"), r = n.filter((e => e.endsWith("?"))), i = n.length - r.length;
                                    return t === o && a.length >= i && a.length <= i + r.length
                                }));
                            if (i) {
                                if (i.guard && !i.guard()) return t.navigate(e.defaultRoute.path, !0);
                                const [, , ...o] = i.path.split("/"), l = Object.fromEntries(o.filter(((e, t) => a[t])).map(((e, t) => [e.replace(":", "").replace("?", ""), decodeURIComponent(a[t])]))), c = Object.fromEntries(Array.from(n.searchParams.entries()));
                                (0, r.vA)((() => {
                                    u(l), h(c), s(i)
                                }))
                            }
                        };
                    return (0, r.Rc)((() => {
                        f(), window.addEventListener("hashchange", f), window.addEventListener("historyChange", f), t.navigate(e.defaultRoute.path)
                    })), (0, r.Ki)((() => {
                        window.removeEventListener("hashchange", f), window.removeEventListener("historyChange", f)
                    })), (0, r.a0)(a.Provider, {
                        value: {
                            currentRoute: n,
                            params: c,
                            searchParams: d,
                            updateSearchParams: (e, n) => {
                                const r = l(),
                                    o = new URLSearchParams(e.filter((([e, t]) => null != t))),
                                    a = `${r.pathname}?${o}`;
                                t.navigate(a, n)
                            },
                            history: t
                        },
                        get children() {
                            return [(0, r.To)((() => e.children)), (0, r.a0)(o.Qi, {
                                get component() {
                                    return null === (e = n()) || void 0 === e ? void 0 : e.component;
                                    var e
                                }
                            })]
                        }
                    })
                },
                c = () => (0, r.NT)(a).history,
                u = () => (0, r.NT)(a).params,
                d = () => {
                    const e = (0, r.NT)(a);
                    return [e.searchParams, (t, n) => e.updateSearchParams(Object.entries(t), n)]
                },
                h = () => (0, r.NT)(a).currentRoute
        },
        676: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298).add,
                a = n(6382),
                i = n(2165),
                l = n(6243);
            e.exports = function(e) {
                var t = r(this),
                    n = i(e).getIterator(),
                    s = a(t);
                return l(n, (function(e) {
                    o(s, e)
                })), s
            }
        },
        702: (e, t, n) => {
            "use strict";
            var r = n(6024);
            e.exports = r.Promise
        },
        755: (e, t, n) => {
            "use strict";
            var r = n(6415);
            e.exports = function() {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t
            }
        },
        872: (e, t, n) => {
            "use strict";
            var r = n(9084),
                o = n(8031).concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, o)
            }
        },
        876: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(5735),
                a = n(9814);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("intersection", (function(e) {
                    return 2 === e.size && e.has(1) && e.has(2)
                })) || o((function() {
                    return "3,2" !== String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2]))))
                }))
            }, {
                intersection: a
            })
        },
        877: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(6243),
                a = n(6298),
                i = a.Set,
                l = a.proto,
                s = r(l.forEach),
                c = r(l.keys),
                u = c(new i).next;
            e.exports = function(e, t, n) {
                return n ? o({
                    iterator: c(e),
                    next: u
                }, t) : s(e, t)
            }
        },
        953: (e, t, n) => {
            "use strict";
            var r = n(1853),
                o = n(4738),
                a = n(2526),
                i = function(e) {
                    return function(t, n, i) {
                        var l = r(t),
                            s = a(l);
                        if (0 === s) return !e && -1;
                        var c, u = o(i, s);
                        if (e && n != n) {
                            for (; s > u;)
                                if ((c = l[u++]) != c) return !0
                        } else
                            for (; s > u; u++)
                                if ((e || u in l) && l[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: i(!0),
                indexOf: i(!1)
            }
        },
        980: (e, t, n) => {
            "use strict";
            n.d(t, {
                V9: () => x,
                aJ: () => i,
                Vj: () => S
            });
            var r = n(6886),
                o = (n(9144), n(4705), n(5073), n(9270));
            const a = (0, r.q6)({}),
                i = () => ({
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.6099.270 Safari/537.36 WebAppManager": 25,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.5359.211 Safari/537.36 WebAppManager": 24,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.128 Safari/537.36 WebAppManager": 23,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36 WebAppManager": 22,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.79 Safari/537.36 WebAppManager": 6,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.106 Safari/537.36 WebAppManager": 5,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.34 Safari/537.36 WebAppManager": 4,
                    "Mozilla/5.0 (Web0S; Linux/SmartTV) AppleWebKit/537.36 (KHTML, like Gecko) QtWebEngine/5.2.1 Chrome/38.0.2125.122 Safari/537.36 WebAppManager": 3
                }[navigator.userAgent] || 0);
            n(3311);
            const l = () => {
                    const e = navigator.userAgent.match(/Tizen (\d+\.\d+)/i);
                    return e && e[1] ? parseFloat(e[1]) : 0
                },
                s = () => {
                    const e = navigator.userAgent.match(/TitanOS\/(\d+\.\d+)/i);
                    return e && e[1] ? parseFloat(e[1]) : 0
                };
            n(5224);
            const c = () => {
                    const e = navigator.userAgent.match(/NETTV\/(\d+\.\d+.\d+.\d+)/i);
                    return e && e[1] ? parseFloat(e[1].replace(/(?<=\..*)\./g, "")) : 0
                },
                u = () => {
                    let e = 0;
                    try {
                        e = Hisense_GetOSVersion(), e = parseFloat(e.replace(/[^\d.]/g, ""))
                    } catch (e) {
                        console.error("Error: Hisense_GetFirmWareVersion is not defined or failed.", e)
                    }
                    return e
                };
            var d = function(e) {
                return e.WEB_OS = "webOS", e.TIZEN = "Tizen", e.TITAN = "Titan", e.NETTV = "NetTV", e.WEB = "Web", e.VIDAA = "Vidaa", e
            }(d || {});
            let h = d.WEB,
                f = null;
            const v = i();
            v > 0 && (h = d.WEB_OS, f = v);
            const p = l();
            if (p > 0 && (h = d.TIZEN, f = p), h === d.WEB) {
                const e = c(),
                    t = s();
                e > 0 && 0 === t ? (h = d.NETTV, f = e) : t > 0 && (h = d.TITAN, f = t)
            }
            if (h === d.WEB) {
                const e = u();
                e > 0 && (h = d.VIDAA, f = e)
            }
            const m = h === d.TIZEN,
                g = h === d.WEB_OS,
                y = h === d.TITAN,
                b = h === d.NETTV,
                w = h === d.WEB,
                k = h === d.VIDAA,
                x = e => {
                    const t = (0, o.N)();
                    return (0, r.Rc)((() => {
                        t.request("Platform", "registerKeyBatch", "MediaPlayPause", "MediaPlay", "MediaPause", "MediaStop", "MediaRewind", "MediaFastForward", "MediaTrackNext", "MediaTrackPrevious", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9")
                    })), (0, r.a0)(a.Provider, {
                        value: {
                            name: h,
                            version: f,
                            quit: () => {
                                t.request("Platform", "quit"), globalThis.SmartTvA_API ? globalThis.SmartTvA_API.exit() : window.close()
                            },
                            openExternal: ({
                                url: e,
                                payload: n
                            }) => {
                                n ? t.request("Platform", "openExternal", e, n) : t.request("Platform", "openExternal", e)
                            },
                            isTizen: m,
                            isWebOS: g,
                            isTitan: y,
                            isNetTV: b,
                            isWeb: w,
                            isVidaa: k
                        },
                        get children() {
                            return e.children
                        }
                    })
                },
                S = () => (0, r.NT)(a)
        },
        1037: (e, t, n) => {
            "use strict";
            var r = n(255).charAt;
            e.exports = function(e, t, n) {
                return t + (n ? r(e, t).length : 1)
            }
        },
        1043: (e, t, n) => {
            "use strict";
            n.d(t, {
                uV: () => A,
                aK: () => j,
                $n: () => U,
                WC: () => me,
                ru: () => F,
                _V: () => te,
                bp: () => Je,
                Gn: () => ot,
                N_: () => ke,
                Rh: () => Me,
                W1: () => De,
                aF: () => Ge,
                Fp: () => gt,
                YW: () => xt,
                OY: () => Et,
                l6: () => qt,
                fs: () => Vt,
                ks: () => Wt
            });
            var r = n(8224),
                o = n(6886),
                a = n(1407),
                i = n(7253),
                l = n(1727),
                s = n.n(l),
                c = n(8156),
                u = n.n(c),
                d = n(9792),
                h = n.n(d),
                f = n(3735),
                v = n.n(f),
                p = n(2283),
                m = n.n(p),
                g = n(7128),
                y = n.n(g),
                b = n(1510),
                w = {};
            w.styleTagTransform = y(), w.setAttributes = v(), w.insert = h().bind(null, "head"), w.domAPI = u(), w.insertStyleElement = m();
            s()(b.A, w);
            const k = b.A && b.A.locals ? b.A.locals : void 0;
            var x = (0, r.vs)('<img alt="Error image">'),
                S = (0, r.vs)("<div>");
            const A = () => {
                const {
                    t: e
                } = (0, i.B)(), t = () => {
                    localStorage.clear(), location.reload()
                };
                return (0, o.a0)(a.Gk, {
                    get class() {
                        return k["app-error"]
                    },
                    get children() {
                        return [(i = x(), (0, o.gb)((e => {
                            var t = k.image,
                                o = n(7162);
                            return t !== e.e && (0, r.s7)(i, e.e = t), o !== e.t && (0, r.Bq)(i, "src", e.t = o), e
                        }), {
                            e: void 0,
                            t: void 0
                        }), i), (a = S(), (0, r.Yr)(a, (() => e("GENERIC_ERROR_MESSAGE"))), (0, o.gb)((() => (0, r.s7)(a, k.message))), a), (0, o.a0)(U, {
                            get label() {
                                return e("CLEAR_DATA")
                            },
                            autoFocus: !0,
                            onPress: t
                        })];
                        var a, i
                    }
                })
            };
            var T = n(6414),
                M = {};
            M.styleTagTransform = y(), M.setAttributes = v(), M.insert = h().bind(null, "head"), M.domAPI = u(), M.insertStyleElement = m();
            s()(T.A, M);
            const B = T.A && T.A.locals ? T.A.locals : void 0;
            var E = (0, r.vs)('<div><img alt="App icon">');
            const j = () => {
                return e = E(), t = e.firstChild, (0, o.gb)((o => {
                    var a = B["app-loading"],
                        i = B.icon,
                        l = n(9826);
                    return a !== o.e && (0, r.s7)(e, o.e = a), i !== o.t && (0, r.s7)(t, o.t = i), l !== o.a && (0, r.Bq)(t, "src", o.a = l), o
                }), {
                    e: void 0,
                    t: void 0,
                    a: void 0
                }), e;
                var e, t
            };
            n(9144), n(5073);
            var C = n(7500),
                I = n.n(C),
                L = n(5967),
                P = n(8870),
                z = n(4922),
                O = n(2288),
                R = {};
            R.styleTagTransform = y(), R.setAttributes = v(), R.insert = h().bind(null, "head"), R.domAPI = u(), R.insertStyleElement = m();
            s()(O.A, R);
            const N = O.A && O.A.locals ? O.A.locals : void 0;
            var q = (0, r.vs)("<div>");
            const F = e => {
                const {
                    t: t
                } = (0, i.B)(), n = (0, z.SR)(3e3), [a, l] = (0, o.n5)(!1), s = () => {
                    var n;
                    return t(null !== (n = e.label) && void 0 !== n ? n : "BACK")
                }, c = () => {
                    l(!0), n((() => l(!1)))
                };
                return (0, o.Rc)((() => {
                    window.addEventListener("mousemove", c)
                })), (0, o.Ki)((() => {
                    window.removeEventListener("mousemove", c)
                })), (0, o.a0)(P.e, {
                    name: "fade",
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return a()
                            },
                            get children() {
                                var t = q();
                                return (0, r.q2)(t, "click", e.onClick, !0), (0, r.Yr)(t, (0, o.a0)(L.A, {
                                    get class() {
                                        return N.icon
                                    },
                                    get name() {
                                        return null !== (t = e.icon) && void 0 !== t ? t : "chevron-back";
                                        var t
                                    }
                                }), null), (0, r.Yr)(t, (0, o.a0)(o.wv, {
                                    get when() {
                                        return !e.noLabel
                                    },
                                    get children() {
                                        var e = q();
                                        return (0, r.Yr)(e, s), (0, o.gb)((() => (0, r.s7)(e, N.label))), e
                                    }
                                }), null), (0, o.gb)((() => {
                                    return (0, r.s7)(t, I()(e.class, N["floating-button"], N[null !== (n = e.position) && void 0 !== n ? n : "left"]));
                                    var n
                                })), t
                            }
                        })
                    }
                })
            };
            (0, r.z_)(["click"]);
            var _ = n(7016),
                D = {};
            D.styleTagTransform = y(), D.setAttributes = v(), D.insert = h().bind(null, "head"), D.domAPI = u(), D.insertStyleElement = m();
            s()(_.A, D);
            const Y = _.A && _.A.locals ? _.A.locals : void 0;
            var V = (0, r.vs)("<div>");
            const U = e => (0, o.a0)(a.zo, {
                get class() {
                    return I()(e.class, Y.button)
                },
                get classList() {
                    return {
                        selected: e.selected
                    }
                },
                get autoFocus() {
                    return e.autoFocus
                },
                get onPress() {
                    return e.onPress
                },
                get onClick() {
                    return e.onPress
                },
                get onFocus() {
                    return e.onFocus
                },
                get onBlur() {
                    return e.onBlur
                },
                get children() {
                    return [(0, o.a0)(o.wv, {
                        get when() {
                            return e.icon
                        },
                        keyed: !0,
                        children: e => (0, o.a0)(L.A, {
                            get class() {
                                return Y.icon
                            },
                            name: e
                        })
                    }), (0, o.a0)(o.wv, {
                        get when() {
                            return e.label
                        },
                        get children() {
                            var t = V();
                            return (0, r.Yr)(t, (() => e.label)), (0, o.gb)((() => (0, r.s7)(t, Y.label))), t
                        }
                    })]
                }
            });
            var H = n(656),
                G = n(9618),
                K = {};
            K.styleTagTransform = y(), K.setAttributes = v(), K.insert = h().bind(null, "head"), K.domAPI = u(), K.insertStyleElement = m();
            s()(G.A, K);
            const W = G.A && G.A.locals ? G.A.locals : void 0,
                Z = e => (0, o.a0)(a.zo, {
                    get class() {
                        return W.error
                    },
                    get autoFocus() {
                        return e.autoFocus
                    },
                    get onFocus() {
                        return e.onFocus
                    },
                    children: "This catalog did not return any content."
                });
            var $ = n(5646),
                J = {};
            J.styleTagTransform = y(), J.setAttributes = v(), J.insert = h().bind(null, "head"), J.domAPI = u(), J.insertStyleElement = m();
            s()($.A, J);
            const X = $.A && $.A.locals ? $.A.locals : void 0;
            var Q = n(5994),
                ee = (n(5658), (0, r.vs)("<img loading=lazy>"));
            const te = e => {
                let t;
                const [n, a] = (0, o.n5)(!1), i = (0, o.To)((() => e.src)), l = async () => {
                    a(!1), e.onLoaded && e.onLoaded()
                }, s = () => {
                    a(!0)
                };
                return (0, z.k9)(i, (() => {
                    a(!1)
                })), (0, o.a0)(o.wv, {
                    get when() {
                        return (0, o.To)((() => !!i()))() && !n()
                    },
                    get fallback() {
                        var t;
                        return null !== (t = e.fallback) && void 0 !== t ? t : e.children
                    },
                    get children() {
                        var n = ee();
                        n.addEventListener("error", s), n.addEventListener("load", l);
                        var a = t;
                        return "function" == typeof a ? (0, r.Yx)(a, n) : t = n, (0, o.gb)((t => {
                            var o = e.class,
                                a = e.classList,
                                l = i();
                            return o !== t.e && (0, r.s7)(n, t.e = o), t.t = (0, r.pP)(n, a, t.t), l !== t.a && (0, r.Bq)(n, "src", t.a = l), t
                        }), {
                            e: void 0,
                            t: void 0,
                            a: void 0
                        }), n
                    }
                })
            };
            var ne = n(8840),
                re = {};
            re.styleTagTransform = y(), re.setAttributes = v(), re.insert = h().bind(null, "head"), re.domAPI = u(), re.insertStyleElement = m();
            s()(ne.A, re);
            const oe = ne.A && ne.A.locals ? ne.A.locals : void 0;
            var ae = (0, r.vs)("<div>"),
                ie = (0, r.vs)("<div><div></div><div></div><div><div>"),
                le = (0, r.vs)("<div><div>");
            const se = ["movies", "series", "channels", "tv"],
                ce = e => {
                    const {
                        ctx: t
                    } = (0, Q.gK)(), n = () => e.item && "_id" in e.item ? e.item : null, i = () => {
                        var t, r, o;
                        return null !== (t = null === (r = e.item && !("_id" in e.item) ? e.item : null) || void 0 === r ? void 0 : r.watched) && void 0 !== t ? t : null === (o = n()) || void 0 === o ? void 0 : o.watched
                    };
                    return (0, o.a0)(a.zo, {
                        get class() {
                            var t, n;
                            return I()(oe.item, oe[null !== (t = null === (n = e.item) || void 0 === n ? void 0 : n.posterShape) && void 0 !== t ? t : "poster"])
                        },
                        get autoFocus() {
                            return e.autoFocus
                        },
                        get onPress() {
                            return e.onPress
                        },
                        get onClick() {
                            return e.onPress
                        },
                        onFocus: () => {
                            null !== e.index && e.onFocus && e.onFocus(e.index, e.item)
                        },
                        get children() {
                            return [(0, o.a0)(o.wv, {
                                get when() {
                                    return e.item
                                },
                                get fallback() {
                                    return (0, o.a0)(L.A, {
                                        get class() {
                                            return oe.icon
                                        },
                                        name: "add"
                                    })
                                },
                                children: t => (0, o.a0)(te, {
                                    get class() {
                                        return oe.image
                                    },
                                    get src() {
                                        return t().poster
                                    },
                                    get children() {
                                        return (0, o.a0)(L.A, {
                                            get class() {
                                                return oe.icon
                                            },
                                            get name() {
                                                return e.item && se.includes(e.item.type) ? e.item.type : "movies"
                                            }
                                        })
                                    }
                                })
                            }), (0, o.a0)(o.wv, {
                                get when() {
                                    return (() => {
                                        var e, r;
                                        const o = n();
                                        if (!o) return 0;
                                        const {
                                            newVideos: a
                                        } = t.state(), i = null !== (e = null === (r = a[o._id]) || void 0 === r ? void 0 : r.length) && void 0 !== e ? e : 0;
                                        return Math.min(Math.max(i, 0), 99)
                                    })()
                                },
                                children: e => {
                                    return t = ie(), n = t.firstChild, a = n.nextSibling, i = a.nextSibling, l = i.firstChild, (0, r.Yr)(i, (0, o.a0)(L.A, {
                                        name: "add"
                                    }), l), (0, r.Yr)(l, e), (0, o.gb)((e => {
                                        var o = oe["new-videos"],
                                            s = oe.layer,
                                            c = oe.layer,
                                            u = oe.layer,
                                            d = oe.label;
                                        return o !== e.e && (0, r.s7)(t, e.e = o), s !== e.t && (0, r.s7)(n, e.t = s), c !== e.a && (0, r.s7)(a, e.a = c), u !== e.o && (0, r.s7)(i, e.o = u), d !== e.i && (0, r.s7)(l, e.i = d), e
                                    }), {
                                        e: void 0,
                                        t: void 0,
                                        a: void 0,
                                        o: void 0,
                                        i: void 0
                                    }), t;
                                    var t, n, a, i, l
                                }
                            }), (0, o.a0)(o.wv, {
                                get when() {
                                    return null === (e = n()) || void 0 === e ? void 0 : e.progress;
                                    var e
                                },
                                children: e => {
                                    return t = le(), n = t.firstChild, (0, o.gb)((o => {
                                        var a = oe.progress,
                                            i = oe.inner,
                                            l = `${e()}%`;
                                        return a !== o.e && (0, r.s7)(t, o.e = a), i !== o.t && (0, r.s7)(n, o.t = i), l !== o.a && (null != (o.a = l) ? n.style.setProperty("width", l) : n.style.removeProperty("width")), o
                                    }), {
                                        e: void 0,
                                        t: void 0,
                                        a: void 0
                                    }), t;
                                    var t, n
                                }
                            }), (0, o.a0)(o.wv, {
                                get when() {
                                    return i()
                                },
                                get children() {
                                    var e = ae();
                                    return (0, r.Yr)(e, (0, o.a0)(L.A, {
                                        get class() {
                                            return oe["watched-icon"]
                                        },
                                        name: "checkmark"
                                    })), (0, o.gb)((() => (0, r.s7)(e, oe.watched))), e
                                }
                            })]
                        }
                    })
                };
            var ue = n(9846),
                de = {};
            de.styleTagTransform = y(), de.setAttributes = v(), de.insert = h().bind(null, "head"), de.domAPI = u(), de.insertStyleElement = m();
            s()(ue.A, de);
            const he = ue.A && ue.A.locals ? ue.A.locals : void 0,
                fe = e => {
                    const t = () => e.items.length,
                        n = (n, r) => {
                            e.onItemFocus && e.onItemFocus(n, r), n >= t() - 10 && e.onLoadNextPage && e.onLoadNextPage()
                        },
                        r = () => {
                            e.onItemPress && e.onItemPress()
                        },
                        a = () => {
                            e.onMorePress && e.onMorePress()
                        };
                    return (0, o.a0)(Et, {
                        get class() {
                            return I()(e.class, he.content)
                        },
                        axis: "horizontal",
                        get index() {
                            return e.itemIndex
                        },
                        get maxIndex() {
                            return t()
                        },
                        overflow: !0,
                        get children() {
                            return [(0, o.a0)(o.jK, {
                                get each() {
                                    return e.items
                                },
                                children: (t, a) => (0, o.a0)(ce, {
                                    index: a,
                                    get item() {
                                        return t()
                                    },
                                    get autoFocus() {
                                        return e.autoFocus && ("number" == typeof e.itemIndex ? e.itemIndex === a : 0 === a)
                                    },
                                    onFocus: n,
                                    onPress: r
                                })
                            }), (0, o.a0)(o.wv, {
                                get when() {
                                    return e.showMore
                                },
                                get children() {
                                    return (0, o.a0)(ce, {
                                        get index() {
                                            return t()
                                        },
                                        onFocus: n,
                                        onPress: a
                                    })
                                }
                            })]
                        }
                    })
                };
            var ve = (0, r.vs)("<div nav-scroll-anchor=vertical>"),
                pe = (0, r.vs)("<div>");
            const me = e => {
                const t = (0, z.ze)(),
                    n = (0, H.W6)(),
                    i = () => e.catalog,
                    l = () => "ready" in i().content && "error" in i().content,
                    s = () => {
                        e.onFocus && e.onFocus(e.index)
                    },
                    c = (t, n) => {
                        (0, o.vA)((() => {
                            s(), e.onChange && n && e.onChange(n, t)
                        }))
                    },
                    u = () => {
                        var e, t;
                        n.navigate(null !== (e = null === (t = i().deepLinks) || void 0 === t ? void 0 : t.discover) && void 0 !== e ? e : "#/library")
                    },
                    d = () => (0, o.a0)(Me, {
                        get class() {
                            return X.loading
                        },
                        animations: !1,
                        get autoFocus() {
                            return e.autoFocus
                        },
                        onFocus: s
                    });
                return h = ve(), (0, r.Yr)(h, (0, o.a0)(o.wv, {
                    get when() {
                        return t.title(i())
                    },
                    children: e => {
                        return t = pe(), (0, r.Yr)(t, e), (0, o.gb)((() => (0, r.s7)(t, X.title))), t;
                        var t
                    }
                }), null), (0, r.Yr)(h, (0, o.a0)(a.Gk, {
                    get class() {
                        return X.container
                    },
                    get children() {
                        return (0, o.a0)(o.dO, {
                            get children() {
                                return [(0, o.a0)(o.YG, {
                                    get when() {
                                        return l() ? i().content : null
                                    },
                                    children: t => (0, o.a0)(o.dO, {
                                        get fallback() {
                                            return (0, o.a0)(d, {})
                                        },
                                        get children() {
                                            return [(0, o.a0)(o.YG, {
                                                get when() {
                                                    return t().ready
                                                },
                                                children: t => (0, o.a0)(fe, {
                                                    get class() {
                                                        return X.content
                                                    },
                                                    get items() {
                                                        return t()
                                                    },
                                                    get itemIndex() {
                                                        return e.itemIndex
                                                    },
                                                    get showMore() {
                                                        return e.showMore
                                                    },
                                                    get autoFocus() {
                                                        return e.autoFocus
                                                    },
                                                    onItemFocus: c,
                                                    get onItemPress() {
                                                        return e.onSelect
                                                    },
                                                    onMorePress: u,
                                                    get onLoadNextPage() {
                                                        return e.onNextPage
                                                    }
                                                })
                                            }), (0, o.a0)(o.YG, {
                                                get when() {
                                                    return t().error
                                                },
                                                get children() {
                                                    return (0, o.a0)(Z, {
                                                        get autoFocus() {
                                                            return e.autoFocus
                                                        },
                                                        onFocus: s
                                                    })
                                                }
                                            })]
                                        }
                                    })
                                }), (0, o.a0)(o.YG, {
                                    get when() {
                                        return l() ? [] : i().content
                                    },
                                    children: t => (0, o.a0)(fe, {
                                        get class() {
                                            return X.content
                                        },
                                        get items() {
                                            return t()
                                        },
                                        get itemIndex() {
                                            return e.itemIndex
                                        },
                                        get showMore() {
                                            return e.showMore
                                        },
                                        get autoFocus() {
                                            return e.autoFocus
                                        },
                                        onItemFocus: c,
                                        get onItemPress() {
                                            return e.onSelect
                                        },
                                        onMorePress: u,
                                        get onLoadNextPage() {
                                            return e.onNextPage
                                        }
                                    })
                                })]
                            }
                        })
                    }
                }), null), (0, o.gb)((() => (0, r.s7)(h, X.catalog))), h;
                var h
            };
            var ge = n(980),
                ye = n(5276),
                be = {};
            be.styleTagTransform = y(), be.setAttributes = v(), be.insert = h().bind(null, "head"), be.domAPI = u(), be.insertStyleElement = m();
            s()(ye.A, be);
            const we = ye.A && ye.A.locals ? ye.A.locals : void 0,
                ke = e => {
                    const t = (0, ge.Vj)();
                    return (0, o.a0)(a.zo, {
                        get class() {
                            return we.link
                        },
                        get autoFocus() {
                            return e.autoFocus
                        },
                        onClick: () => {
                            e.href && t.openExternal({
                                url: e.href
                            })
                        },
                        get children() {
                            return e.href
                        }
                    })
                };
            var xe = n(8882),
                Se = {};
            Se.styleTagTransform = y(), Se.setAttributes = v(), Se.insert = h().bind(null, "head"), Se.domAPI = u(), Se.insertStyleElement = m();
            s()(xe.A, Se);
            const Ae = xe.A && xe.A.locals ? xe.A.locals : void 0;
            var Te = (0, r.vs)("<div><div></div><div>");
            const Me = e => {
                const {
                    theme: t
                } = (0, Q.Pj)();
                return (0, o.a0)(a.zo, {
                    get class() {
                        return I()(e.class, Ae["loading-container"])
                    },
                    get autoFocus() {
                        return e.autoFocus
                    },
                    get onFocus() {
                        return e.onFocus
                    },
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return t.animations() && !1 !== e.animations
                            },
                            fallback: "Loading ...",
                            get children() {
                                var e = Te(),
                                    t = e.firstChild,
                                    n = t.nextSibling;
                                return (0, o.gb)((o => {
                                    var a = Ae.loading,
                                        i = Ae.ripple,
                                        l = Ae.ripple;
                                    return a !== o.e && (0, r.s7)(e, o.e = a), i !== o.t && (0, r.s7)(t, o.t = i), l !== o.a && (0, r.s7)(n, o.a = l), o
                                }), {
                                    e: void 0,
                                    t: void 0,
                                    a: void 0
                                }), e
                            }
                        })
                    }
                })
            };
            var Be = n(2445),
                Ee = {};
            Ee.styleTagTransform = y(), Ee.setAttributes = v(), Ee.insert = h().bind(null, "head"), Ee.domAPI = u(), Ee.insertStyleElement = m();
            s()(Be.A, Ee);
            const je = Be.A && Be.A.locals ? Be.A.locals : void 0;
            var Ce = (0, r.vs)("<div><div>"),
                Ie = (0, r.vs)("<div>");
            const Le = e => {
                const {
                    t: t
                } = (0, i.B)(), n = () => e.label && t(e.label, e.label), l = () => e.checked && e.checked(), s = () => e.tag && t(e.tag, e.tag);
                return (0, o.a0)(a.zo, {
                    get class() {
                        return je.option
                    },
                    get classList() {
                        return {
                            [je.selected]: e.selected && e.selected()
                        }
                    },
                    get autoFocus() {
                        return e.autoFocus
                    },
                    onFocus: () => {
                        e.onSelect(e.index, e.options)
                    },
                    get onPress() {
                        return e.onClick
                    },
                    get onClick() {
                        return e.onClick
                    },
                    get children() {
                        return [(0, o.a0)(o.dO, {
                            get children() {
                                return [(0, o.a0)(o.YG, {
                                    get when() {
                                        return void 0 !== e.color
                                    },
                                    get children() {
                                        var t = Ce(),
                                            n = t.firstChild;
                                        return (0, o.gb)((o => {
                                            var a = je.color,
                                                i = je.inner,
                                                l = e.color;
                                            return a !== o.e && (0, r.s7)(t, o.e = a), i !== o.t && (0, r.s7)(n, o.t = i), l !== o.a && (null != (o.a = l) ? n.style.setProperty("background-color", l) : n.style.removeProperty("background-color")), o
                                        }), {
                                            e: void 0,
                                            t: void 0,
                                            a: void 0
                                        }), t
                                    }
                                }), (0, o.a0)(o.YG, {
                                    get when() {
                                        return void 0 === e.checked
                                    },
                                    get children() {
                                        return [(0, o.a0)(o.wv, {
                                            get when() {
                                                return e.icon
                                            },
                                            keyed: !0,
                                            children: e => (0, o.a0)(L.A, {
                                                get class() {
                                                    return je.icon
                                                },
                                                name: e
                                            })
                                        }), (t = Ie(), (0, r.Yr)(t, n), (0, o.gb)((() => (0, r.s7)(t, je.label))), t), (0, o.a0)(o.wv, {
                                            get when() {
                                                return s()
                                            },
                                            get children() {
                                                var e = Ie();
                                                return (0, r.Yr)(e, s), (0, o.gb)((() => (0, r.s7)(e, je.tag))), e
                                            }
                                        })];
                                        var t
                                    }
                                }), (0, o.a0)(o.YG, {
                                    get when() {
                                        return void 0 !== e.checked
                                    },
                                    get children() {
                                        return [(a = Ie(), (0, o.gb)((e => {
                                            var t = je.toggle,
                                                n = !!l();
                                            return t !== e.e && (0, r.s7)(a, e.e = t), n !== e.t && a.classList.toggle("checked", e.t = n), e
                                        }), {
                                            e: void 0,
                                            t: void 0
                                        }), a), (n = Ie(), (0, r.Yr)(n, (e = (0, o.To)((() => !!l())), () => e() ? t("ON") : t("OFF"))), (0, o.gb)((() => (0, r.s7)(n, je.label))), n)];
                                        var e, n, a
                                    }
                                })]
                            }
                        }), (0, o.a0)(o.wv, {
                            get when() {
                                var t;
                                return null === (t = e.options) || void 0 === t ? void 0 : t.length
                            },
                            get children() {
                                return (0, o.a0)(L.A, {
                                    get class() {
                                        return je["arrow-icon"]
                                    },
                                    name: "chevron-forward"
                                })
                            }
                        })]
                    }
                })
            };
            var Pe = n(2420),
                ze = {};
            ze.styleTagTransform = y(), ze.setAttributes = v(), ze.insert = h().bind(null, "head"), ze.domAPI = u(), ze.insertStyleElement = m();
            s()(Pe.A, ze);
            const Oe = Pe.A && Pe.A.locals ? Pe.A.locals : void 0,
                Re = e => {
                    const [t, n] = (0, o.n5)(0), r = () => {
                        var t;
                        return null !== (t = e.options) && void 0 !== t ? t : []
                    }, i = (t, r) => {
                        n(t), e.onChange(e.index, r)
                    };
                    return (0, o.a0)(o.wv, {
                        get when() {
                            return r().length
                        },
                        get children() {
                            return (0, o.a0)(a.Gk, {
                                leave: ["left", "right"],
                                get children() {
                                    return (0, o.a0)(Et, {
                                        get class() {
                                            return Oe.list
                                        },
                                        axis: "vertical",
                                        get scrollReset() {
                                            return e.resetScroll
                                        },
                                        overflow: !0,
                                        get children() {
                                            return (0, o.a0)(o.a, {
                                                get each() {
                                                    return r().slice(0, t() + 10)
                                                },
                                                children: (t, n) => (0, o.a0)(o.wv, {
                                                    get when() {
                                                        return !(t.disabled && t.disabled())
                                                    },
                                                    get children() {
                                                        return (0, o.a0)(Le, (0, o.v6)({
                                                            get index() {
                                                                return n()
                                                            },
                                                            get autoFocus() {
                                                                return (0, o.To)((() => !!e.autoFocus))() && 0 === n()
                                                            },
                                                            onSelect: i
                                                        }, t))
                                                    }
                                                })
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                };
            var Ne = n(7854),
                qe = {};
            qe.styleTagTransform = y(), qe.setAttributes = v(), qe.insert = h().bind(null, "head"), qe.domAPI = u(), qe.insertStyleElement = m();
            s()(Ne.A, qe);
            const Fe = Ne.A && Ne.A.locals ? Ne.A.locals : void 0;
            var _e = (0, r.vs)("<div><div><div></div></div><div>");
            const De = e => {
                const {
                    onBack: t
                } = (0, a.cq)(), n = (0, H.W6)(), [i, l] = (0, o.n5)({
                    0: e.options
                }), [s, c] = (0, o.n5)(), u = (e, t) => {
                    const n = e + 1;
                    l((e => ({ ...e,
                        [n]: t,
                        [n + 1]: void 0
                    }))), c(n)
                };
                return t((() => {
                    e.onClose && e.onClose()
                })), (0, o.Rc)((() => {
                    n.setBackDisabled(!0)
                })), (0, o.Ki)((() => {
                    n.setBackDisabled(!1)
                })), d = _e(), h = d.firstChild, f = h.firstChild, v = h.nextSibling, (0, r.Yr)(f, (() => e.title)), (0, r.Yr)(v, (0, o.a0)(o.jK, {
                    get each() {
                        return Object.values(i())
                    },
                    children: (e, t) => (0, o.a0)(Re, {
                        index: t,
                        get options() {
                            return e()
                        },
                        get resetScroll() {
                            return s() === t
                        },
                        autoFocus: 0 === t,
                        onChange: u
                    })
                })), (0, o.gb)((t => {
                    var n = I()(e.class, Fe.menu),
                        o = Fe.heading,
                        a = Fe.title,
                        i = Fe.inner;
                    return n !== t.e && (0, r.s7)(d, t.e = n), o !== t.t && (0, r.s7)(h, t.t = o), a !== t.a && (0, r.s7)(f, t.a = a), i !== t.o && (0, r.s7)(v, t.o = i), t
                }), {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0
                }), d;
                var d, h, f, v
            };
            var Ye = n(3634),
                Ve = {};
            Ve.styleTagTransform = y(), Ve.setAttributes = v(), Ve.insert = h().bind(null, "head"), Ve.domAPI = u(), Ve.insertStyleElement = m();
            s()(Ye.A, Ve);
            const Ue = Ye.A && Ye.A.locals ? Ye.A.locals : void 0;
            var He = (0, r.vs)("<div>");
            const Ge = e => {
                const t = (0, H.W6)(),
                    {
                        onBack: n
                    } = (0, a.cq)();
                return n(e.onClose), (0, o.Rc)((() => {
                    t.setBackDisabled(!0)
                })), (0, o.Ki)((() => {
                    t.setBackDisabled(!1)
                })), (0, o.a0)(r.ZL, {
                    get children() {
                        return (0, o.a0)(a.Gk, {
                            get class() {
                                return I()(Ue.modal, {
                                    [Ue.expand]: e.expand
                                })
                            },
                            leave: ["none"],
                            get children() {
                                return [(0, o.a0)(F, {
                                    position: "right",
                                    icon: "close",
                                    noLabel: !0,
                                    get onClick() {
                                        return e.onClose
                                    }
                                }), (n = He(), (0, r.q2)(n, "click", e.onClose, !0), (0, o.gb)((() => (0, r.s7)(n, Ue.backdrop))), n), (t = He(), (0, r.Yr)(t, (0, o.a0)(o.wv, {
                                    get when() {
                                        return e.title
                                    },
                                    get children() {
                                        var t = He();
                                        return (0, r.Yr)(t, (() => e.title)), (0, o.gb)((() => (0, r.s7)(t, Ue.title))), t
                                    }
                                }), null), (0, r.Yr)(t, (() => e.children), null), (0, o.gb)((() => (0, r.s7)(t, Ue.content))), t)];
                                var t, n
                            }
                        })
                    }
                })
            };
            (0, r.z_)(["click"]);
            var Ke = n(7132),
                We = {};
            We.styleTagTransform = y(), We.setAttributes = v(), We.insert = h().bind(null, "head"), We.domAPI = u(), We.insertStyleElement = m();
            s()(Ke.A, We);
            const Ze = Ke.A && Ke.A.locals ? Ke.A.locals : void 0;
            var $e = (0, r.vs)("<div>");
            const Je = e => {
                const {
                    t: t
                } = (0, i.B)(), {
                    onBack: l
                } = (0, a.cq)(), s = (0, H.W6)(), {
                    ctx: c,
                    metaDetails: u
                } = (0, Q.gK)(), {
                    loading: d,
                    metadata: h,
                    error: f
                } = u, v = () => e.item && "_id" in e.item ? e.item : null, p = () => e.item && !("_id" in e.item) ? e.item : null, m = () => {
                    var e;
                    return null === (e = h()) || void 0 === e ? void 0 : e.inLibrary
                }, g = () => {
                    var e;
                    return null === (e = h()) || void 0 === e ? void 0 : e.watched
                }, y = () => {
                    var e;
                    return null === (e = h()) || void 0 === e || null === (e = e.trailerStreams[0]) || void 0 === e || null === (e = e.deepLinks) || void 0 === e ? void 0 : e.player
                }, b = () => {
                    var e, t;
                    return null === (e = null !== (t = v()) && void 0 !== t ? t : p()) || void 0 === e ? void 0 : e.deepLinks
                }, w = () => {
                    var e;
                    return null === (e = v()) || void 0 === e ? void 0 : e.progress
                }, k = () => {
                    var e, t, n, r, o;
                    const a = null !== (e = null !== (t = null === (n = b()) || void 0 === n ? void 0 : n.player) && void 0 !== t ? t : null === (r = b()) || void 0 === r ? void 0 : r.metaDetailsStreams) && void 0 !== e ? e : null === (o = b()) || void 0 === o ? void 0 : o.metaDetailsVideos;
                    s.navigate(a)
                }, x = () => {
                    var e, t, n;
                    const r = null !== (e = null === (t = b()) || void 0 === t ? void 0 : t.metaDetailsVideos) && void 0 !== e ? e : null === (n = b()) || void 0 === n ? void 0 : n.metaDetailsStreams;
                    s.navigate(r)
                }, S = () => {
                    const e = h();
                    e && (m() ? c.removeFromLibrary(e) : c.addToLibrary(e))
                }, A = () => {
                    u.setWatched(!g())
                }, T = () => {
                    const t = h();
                    t && c.rewindLibraryItem(t), e.onClose()
                }, M = () => {
                    s.navigate(y())
                };
                return (0, z.k9)(e.open, (e => {
                    if (s.setBackDisabled(e), e) {
                        var t, n, r, o, a, i;
                        const e = null !== (t = null === (n = v()) || void 0 === n ? void 0 : n.type) && void 0 !== t ? t : null === (r = p()) || void 0 === r ? void 0 : r.type,
                            l = null !== (o = null === (a = v()) || void 0 === a ? void 0 : a._id) && void 0 !== o ? o : null === (i = p()) || void 0 === i ? void 0 : i.id;
                        e && l && u.load({
                            type: e,
                            metaId: l
                        })
                    }
                })), l((() => {
                    e.onClose && e.onClose()
                })), (0, o.Ki)((() => {
                    s.setBackDisabled(!1)
                })), (0, o.a0)(P.e, {
                    name: "slide-fade",
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return e.open()
                            },
                            get children() {
                                return (0, o.a0)(a.Gk, {
                                    get class() {
                                        return Ze["item-menu"]
                                    },
                                    leave: ["left"],
                                    get onLeave() {
                                        return e.onClose
                                    },
                                    get children() {
                                        return [(l = $e(), (0, r.q2)(l, "click", e.onClose, !0), (0, o.gb)((() => (0, r.s7)(l, Ze.backdrop))), l), (i = $e(), (0, r.Yr)(i, (0, o.a0)(o.dO, {
                                            get children() {
                                                return [(0, o.a0)(o.YG, {
                                                    get when() {
                                                        return d()
                                                    },
                                                    get children() {
                                                        return (0, o.a0)(Me, {
                                                            autoFocus: !0
                                                        })
                                                    }
                                                }), (0, o.a0)(o.YG, {
                                                    get when() {
                                                        return h()
                                                    },
                                                    get children() {
                                                        return [(0, o.a0)(U, {
                                                            get class() {
                                                                return Ze.option
                                                            },
                                                            icon: "play",
                                                            get label() {
                                                                return t(w() ? "CONTINUE_WATCHING" : "PLAY_NOW")
                                                            },
                                                            autoFocus: !0,
                                                            onPress: k
                                                        }), (0, o.a0)(o.wv, {
                                                            get when() {
                                                                return w()
                                                            },
                                                            get children() {
                                                                return (0, o.a0)(U, {
                                                                    get class() {
                                                                        return Ze.option
                                                                    },
                                                                    icon: "details",
                                                                    get label() {
                                                                        return t("LIBRARY_DETAILS")
                                                                    },
                                                                    onPress: x
                                                                })
                                                            }
                                                        }), (0, o.a0)(U, {
                                                            get class() {
                                                                return Ze.option
                                                            },
                                                            get icon() {
                                                                return m() ? "remove" : "add"
                                                            },
                                                            get label() {
                                                                return (0, o.To)((() => !m()))() ? t("ADD_TO_LIB") : t("REMOVE_FROM_LIB")
                                                            },
                                                            onPress: S
                                                        }), (0, o.a0)(U, {
                                                            get class() {
                                                                return Ze.option
                                                            },
                                                            get icon() {
                                                                return g() ? "eye-off" : "eye"
                                                            },
                                                            get label() {
                                                                return (0, o.To)((() => !g()))() ? t("MARK_AS_WATCHED") : t("MARK_AS_UNWATCHED")
                                                            },
                                                            onPress: A
                                                        }), (0, o.a0)(o.wv, {
                                                            get when() {
                                                                return y()
                                                            },
                                                            get children() {
                                                                return (0, o.a0)(U, {
                                                                    get class() {
                                                                        return Ze.option
                                                                    },
                                                                    icon: "trailer",
                                                                    get label() {
                                                                        return t("TRAILER")
                                                                    },
                                                                    onPress: M
                                                                })
                                                            }
                                                        }), (0, o.a0)(o.wv, {
                                                            get when() {
                                                                return w()
                                                            },
                                                            get children() {
                                                                return (0, o.a0)(U, {
                                                                    get class() {
                                                                        return Ze.option
                                                                    },
                                                                    icon: "close",
                                                                    get label() {
                                                                        return t("LIBRARY_RESUME_DISMISS")
                                                                    },
                                                                    onPress: T
                                                                })
                                                            }
                                                        })]
                                                    }
                                                }), (0, o.a0)(o.YG, {
                                                    get when() {
                                                        return f()
                                                    },
                                                    get children() {
                                                        return (0, o.a0)(a.zo, {
                                                            get class() {
                                                                return Ze.error
                                                            },
                                                            autoFocus: !0,
                                                            get children() {
                                                                return [(0, o.a0)(te, {
                                                                    get class() {
                                                                        return Ze.image
                                                                    },
                                                                    get src() {
                                                                        return n(7162)
                                                                    }
                                                                }), (e = $e(), (0, r.Yr)(e, (() => t("GENERIC_ERROR_MESSAGE"))), (0, o.gb)((() => (0, r.s7)(e, Ze.label))), e)];
                                                                var e
                                                            }
                                                        })
                                                    }
                                                })]
                                            }
                                        })), (0, o.gb)((() => (0, r.s7)(i, Ze.content))), i)];
                                        var i, l
                                    }
                                })
                            }
                        })
                    }
                })
            };
            (0, r.z_)(["click"]);
            n(6863), n(9784), n(9296), n(7961), n(3238);
            var Xe = n(1642),
                Qe = {};
            Qe.styleTagTransform = y(), Qe.setAttributes = v(), Qe.insert = h().bind(null, "head"), Qe.domAPI = u(), Qe.insertStyleElement = m();
            s()(Xe.A, Qe);
            const et = Xe.A && Xe.A.locals ? Xe.A.locals : void 0;
            var tt = (0, r.vs)("<div>"),
                nt = (0, r.vs)("<div><div></div><div></div><div>"),
                rt = (0, r.vs)("<div><div><div></div></div><div><div><div>");
            const ot = e => {
                const {
                    metaDetails: t
                } = (0, Q.gK)(), {
                    metadata: n
                } = t, a = (0, z.SR)(500), i = (0, z.SR)(500), l = () => e.item && "_id" in e.item ? e.item : null, s = () => e.item && !("_id" in e.item) ? e.item : null, c = () => {
                    var e;
                    return null !== (e = l()) && void 0 !== e ? e : s()
                }, [u, d] = (0, o.n5)(!1), [h, f] = (0, o.n5)(!1), [v, p] = (0, o.n5)(null), m = () => {
                    var e, t;
                    return l() && n() && (null === (e = l()) || void 0 === e ? void 0 : e._id) === (null === (t = n()) || void 0 === t ? void 0 : t.id)
                }, g = () => {
                    var e;
                    return null === (e = c()) || void 0 === e ? void 0 : e.name
                }, y = () => {
                    var e;
                    return null === (e = v()) || void 0 === e ? void 0 : e.description
                }, b = () => {
                    var e;
                    return null === (e = v()) || void 0 === e ? void 0 : e.runtime
                }, w = () => {
                    var e;
                    return null === (e = v()) || void 0 === e ? void 0 : e.releaseInfo
                }, k = () => {
                    var e, t;
                    return null !== (e = null === (t = v()) || void 0 === t ? void 0 : t.links) && void 0 !== e ? e : []
                }, x = () => {
                    var e;
                    return null === (e = k().find((({
                        category: e
                    }) => "imdb" === e))) || void 0 === e ? void 0 : e.name
                }, S = () => {
                    f(!1)
                };
                return (0, z.k9)(c, (() => {
                    (0, o.vA)((() => {
                        d(!0), f(!0)
                    }))
                })), (0, z.k9)(s, (e => {
                    e && a((() => {
                        (0, o.vA)((() => {
                            d(!1), p(e)
                        }))
                    }))
                })), (0, z.k9)(n, (e => {
                    e && (0, o.vA)((() => {
                        d(!1), p(e)
                    }))
                })), (0, z.k9)(l, (e => {
                    m() && a((() => {
                        (0, o.vA)((() => {
                            d(!1), p(n()), f(!1)
                        }))
                    })), e && i((() => {
                        t.load({
                            type: e.type,
                            metaId: e._id
                        })
                    }))
                })), A = rt(), T = A.firstChild, M = T.firstChild, B = T.nextSibling, E = B.firstChild, j = E.firstChild, (0, r.Yr)(M, g), (0, r.Yr)(T, (0, o.a0)(P.e, {
                    name: "fade",
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return !u()
                            },
                            get children() {
                                var e = nt(),
                                    t = e.firstChild,
                                    n = t.nextSibling,
                                    a = n.nextSibling;
                                return (0, r.Yr)(t, (0, o.a0)(o.wv, {
                                    get when() {
                                        return b()
                                    },
                                    get children() {
                                        var e = tt();
                                        return (0, r.Yr)(e, b), (0, o.gb)((() => (0, r.s7)(e, et.label))), e
                                    }
                                }), null), (0, r.Yr)(t, (0, o.a0)(o.wv, {
                                    get when() {
                                        return w()
                                    },
                                    get children() {
                                        var e = tt();
                                        return (0, r.Yr)(e, w), (0, o.gb)((() => (0, r.s7)(e, et.label))), e
                                    }
                                }), null), (0, r.Yr)(t, (0, o.a0)(o.wv, {
                                    get when() {
                                        return x()
                                    },
                                    get children() {
                                        var e = tt();
                                        return (0, r.Yr)(e, x, null), (0, r.Yr)(e, (0, o.a0)(L.A, {
                                            get class() {
                                                return et["imdb-icon"]
                                            },
                                            name: "imdb"
                                        }), null), (0, o.gb)((() => (0, r.s7)(e, et.label))), e
                                    }
                                }), null), (0, r.Yr)(n, y), (0, r.Yr)(a, (() => {
                                    var e;
                                    return null === (e = k().filter((({
                                        category: e
                                    }) => "Cast" === e)).map((({
                                        name: e
                                    }) => e))) || void 0 === e ? void 0 : e.join(", ")
                                })), (0, o.gb)((o => {
                                    var i = et.details,
                                        l = et.info,
                                        s = et.description,
                                        c = et.cast;
                                    return i !== o.e && (0, r.s7)(e, o.e = i), l !== o.t && (0, r.s7)(t, o.t = l), s !== o.a && (0, r.s7)(n, o.a = s), c !== o.o && (0, r.s7)(a, o.o = c), o
                                }), {
                                    e: void 0,
                                    t: void 0,
                                    a: void 0,
                                    o: void 0
                                }), e
                            }
                        })
                    }
                }), null), (0, r.Yr)(E, (0, o.a0)(te, {
                    get class() {
                        return et["background-image"]
                    },
                    get src() {
                        return null !== (e = null === (t = v()) || void 0 === t ? void 0 : t.background) && void 0 !== e ? e : null === (n = v()) || void 0 === n ? void 0 : n.poster;
                        var e, t, n
                    },
                    onLoaded: S
                }), null), (0, o.gb)((t => {
                    var n = I()(e.class, et["item-preview"], {
                            [et.compact]: e.compact
                        }, {
                            [et["item-preview-720p"]]: window.screen720p
                        }),
                        o = et["info-container"],
                        a = et.title,
                        i = et["background-container"],
                        l = {
                            [et.visible]: !u() && !h()
                        },
                        s = I()(et["background-inner"], {
                            [et["background-inner-720p"]]: window.screen720p
                        }),
                        c = et["gradient-overlay"];
                    return n !== t.e && (0, r.s7)(A, t.e = n), o !== t.t && (0, r.s7)(T, t.t = o), a !== t.a && (0, r.s7)(M, t.a = a), i !== t.o && (0, r.s7)(B, t.o = i), t.i = (0, r.pP)(B, l, t.i), s !== t.n && (0, r.s7)(E, t.n = s), c !== t.s && (0, r.s7)(j, t.s = c), t
                }), {
                    e: void 0,
                    t: void 0,
                    a: void 0,
                    o: void 0,
                    i: void 0,
                    n: void 0,
                    s: void 0
                }), A;
                var A, T, M, B, E, j
            };
            var at = n(8163),
                it = {};
            it.styleTagTransform = y(), it.setAttributes = v(), it.insert = h().bind(null, "head"), it.domAPI = u(), it.insertStyleElement = m();
            s()(at.A, it);
            const lt = at.A && at.A.locals ? at.A.locals : void 0;
            var st = (0, r.vs)("<div>");
            const ct = e => {
                const {
                    t: t
                } = (0, i.B)(), n = (0, H.g)(), l = (0, H.lq)(), s = () => e.tab.isFocused ? e.tab.isFocused(n()) : !!e.tab.name && l().name === e.tab.name, c = () => {
                    e.onPress(e.tab.path)
                };
                return (0, o.a0)(a.zo, {
                    get class() {
                        return lt.tab
                    },
                    get classList() {
                        return {
                            [lt.selected]: s()
                        }
                    },
                    onPress: c,
                    onClick: c,
                    get children() {
                        return [(0, o.a0)(o.wv, {
                            get when() {
                                return null !== (t = e.tab.icon) && void 0 !== t ? t : s() ? e.tab.name : `${e.tab.name}-outline`;
                                var t
                            },
                            keyed: !0,
                            children: e => (0, o.a0)(L.A, {
                                get class() {
                                    return lt.icon
                                },
                                name: e
                            })
                        }), (0, o.a0)(o.wv, {
                            get when() {
                                return e.showLabel ? e.tab.label : null
                            },
                            children: e => {
                                return n = st(), (0, r.Yr)(n, (() => t(e()))), (0, o.gb)((() => (0, r.s7)(n, lt.label))), n;
                                var n
                            }
                        })]
                    }
                })
            };
            var ut = n(8776),
                dt = {};
            dt.styleTagTransform = y(), dt.setAttributes = v(), dt.insert = h().bind(null, "head"), dt.domAPI = u(), dt.insertStyleElement = m();
            s()(ut.A, dt);
            const ht = ut.A && ut.A.locals ? ut.A.locals : void 0;
            var ft = (0, r.vs)("<div>"),
                vt = (0, r.vs)("<div><div><img><img></div><div>");
            const pt = [{
                    path: "/search",
                    name: "search",
                    label: "STREMIO_TV_NAV_SEARCH"
                }, {
                    path: "/home",
                    name: "home",
                    label: "STREMIO_TV_NAV_HOME"
                }, {
                    path: "/discover",
                    name: "discover",
                    label: "STREMIO_TV_NAV_DISCOVER"
                }, {
                    path: null,
                    label: "MORE",
                    icon: "more-horizontal"
                }, {
                    path: "/library",
                    name: "library",
                    label: "STREMIO_TV_NAV_LIBRARY"
                }, {
                    path: "/addons",
                    name: "addons",
                    label: "STREMIO_TV_NAV_ADDONS"
                }, {
                    path: "/settings",
                    name: "settings",
                    label: "STREMIO_TV_NAV_SETTINGS"
                }],
                mt = [{
                    path: null,
                    label: "BACK",
                    icon: "chevron-back"
                }, {
                    path: "/discover/movie",
                    name: "movies",
                    label: "STREMIO_TV_NAV_MOVIES",
                    isFocused: e => "movie" === e.type
                }, {
                    path: "/discover/series",
                    name: "series",
                    label: "STREMIO_TV_NAV_SERIES",
                    isFocused: e => "series" === e.type
                }, {
                    path: "/discover/channel",
                    name: "channels",
                    label: "STREMIO_TV_NAV_CHANNELS",
                    isFocused: e => "channel" === e.type
                }],
                gt = () => {
                    const e = (0, H.W6)(),
                        {
                            onBack: t
                        } = (0, a.cq)(),
                        i = (0, H.lq)(),
                        {
                            theme: l
                        } = (0, Q.Pj)(),
                        [s, c, u] = (0, z.zD)(),
                        [d, h, f] = (0, z.zD)(),
                        [v, , , p] = (0, z.zD)(),
                        m = t => {
                            null === t ? p() : e.navigate(t, !0)
                        },
                        g = () => {
                            (0, o.vA)((() => {
                                h(), c()
                            }))
                        },
                        y = () => {
                            (0, o.vA)((() => {
                                f(), u()
                            }))
                        };
                    return (0, z.k9)(d, (t => {
                        e.setBackDisabled(t)
                    })), (0, z.k9)(v, (() => {
                        (0, o.vA)((() => {
                            u(), c()
                        }))
                    })), t((() => {
                        1 === e.size() && (d() ? window.dispatchEvent(new Event("quit")) : !e.backDisabled() && g())
                    })), (0, o.a0)(o.wv, {
                        get when() {
                            var e;
                            return !(null !== (e = i().data) && void 0 !== e && e.hideNavbar)
                        },
                        get children() {
                            return (0, o.a0)(a.Gk, {
                                get class() {
                                    return ht.navbar
                                },
                                get classList() {
                                    return {
                                        [ht.expanded]: d(),
                                        ...l.animationsClass()
                                    }
                                },
                                leave: ["right"],
                                layoutUpdate: !1,
                                get autoFocus() {
                                    return s()
                                },
                                onEnter: g,
                                onLeave: y,
                                get children() {
                                    return [(0, o.a0)(P.e, {
                                        name: "fade",
                                        get children() {
                                            return (0, o.a0)(o.wv, {
                                                get when() {
                                                    return d()
                                                },
                                                get children() {
                                                    var e = ft();
                                                    return (0, r.q2)(e, "click", f, !0), (0, o.gb)((() => (0, r.s7)(e, ht.backdrop))), e
                                                }
                                            })
                                        }
                                    }), (s = ft(), (0, o.gb)((() => (0, r.s7)(s, ht.background))), s), (e = vt(), t = e.firstChild, a = t.firstChild, i = a.nextSibling, l = t.nextSibling, (0, r.q2)(e, "mouseleave", f), (0, r.q2)(e, "mouseover", h, !0), (0, r.Yr)(l, (0, o.a0)(o.dO, {
                                        get children() {
                                            return [(0, o.a0)(o.YG, {
                                                get when() {
                                                    return v()
                                                },
                                                get children() {
                                                    return (0, o.a0)(o.a, {
                                                        each: mt,
                                                        children: e => (0, o.a0)(ct, {
                                                            tab: e,
                                                            get showLabel() {
                                                                return d()
                                                            },
                                                            onPress: m
                                                        })
                                                    })
                                                }
                                            }), (0, o.a0)(o.YG, {
                                                get when() {
                                                    return !v()
                                                },
                                                get children() {
                                                    return (0, o.a0)(o.a, {
                                                        each: pt,
                                                        children: e => (0, o.a0)(ct, {
                                                            tab: e,
                                                            get showLabel() {
                                                                return d()
                                                            },
                                                            onPress: m
                                                        })
                                                    })
                                                }
                                            })]
                                        }
                                    })), (0, o.gb)((o => {
                                        var s = ht.content,
                                            c = ht.heading,
                                            u = ht.icon,
                                            d = n(9826),
                                            h = ht.logo,
                                            f = n(7968),
                                            v = ht.tabs;
                                        return s !== o.e && (0, r.s7)(e, o.e = s), c !== o.t && (0, r.s7)(t, o.t = c), u !== o.a && (0, r.s7)(a, o.a = u), d !== o.o && (0, r.Bq)(a, "src", o.o = d), h !== o.i && (0, r.s7)(i, o.i = h), f !== o.n && (0, r.Bq)(i, "src", o.n = f), v !== o.s && (0, r.s7)(l, o.s = v), o
                                    }), {
                                        e: void 0,
                                        t: void 0,
                                        a: void 0,
                                        o: void 0,
                                        i: void 0,
                                        n: void 0,
                                        s: void 0
                                    }), e)];
                                    var e, t, a, i, l, s
                                }
                            })
                        }
                    })
                };
            (0, r.z_)(["click", "mouseover"]);
            var yt = n(438),
                bt = {};
            bt.styleTagTransform = y(), bt.setAttributes = v(), bt.insert = h().bind(null, "head"), bt.domAPI = u(), bt.insertStyleElement = m();
            s()(yt.A, bt);
            const wt = yt.A && yt.A.locals ? yt.A.locals : void 0;
            var kt = (0, r.vs)("<div><div>");
            const xt = e => {
                const t = (0, H.lq)(),
                    {
                        onBack: n
                    } = (0, a.cq)(),
                    {
                        theme: i
                    } = (0, Q.Pj)(),
                    l = (0, H.W6)(),
                    s = () => {
                        e.nested && l.back()
                    };
                return n(s), c = kt(), u = c.firstChild, (0, r.Yr)(c, (0, o.a0)(o.wv, {
                    get when() {
                        return e.nested
                    },
                    get children() {
                        return (0, o.a0)(F, {
                            onClick: s
                        })
                    }
                }), u), (0, r.Yr)(u, (() => e.children)), (0, o.gb)((n => {
                    var o, a = I()(wt.page, {
                            [wt["page-720p"]]: window.screen720p
                        }),
                        l = {
                            [wt["hide-navbar"]]: !(null === (o = t().data) || void 0 === o || !o.hideNavbar),
                            ...i.animationsClass()
                        },
                        s = I()(e.class, wt.inner);
                    return a !== n.e && (0, r.s7)(c, n.e = a), n.t = (0, r.pP)(c, l, n.t), s !== n.a && (0, r.s7)(u, n.a = s), n
                }), {
                    e: void 0,
                    t: void 0,
                    a: void 0
                }), c;
                var c, u
            };
            var St = n(2890),
                At = {};
            At.styleTagTransform = y(), At.setAttributes = v(), At.insert = h().bind(null, "head"), At.domAPI = u(), At.insertStyleElement = m();
            s()(St.A, At);
            const Tt = St.A && St.A.locals ? St.A.locals : void 0;
            var Mt = (0, r.vs)("<div>"),
                Bt = (0, r.vs)("<div><div>");
            const Et = e => {
                const t = (0, a.fR)(e.axis),
                    n = (0, a.cq)(),
                    i = () => {
                        n.move("left")
                    },
                    l = () => {
                        n.move("right")
                    };
                return (0, o.EH)((() => {
                    e.scrollReset && t.reset()
                })), (() => {
                    var n = Bt(),
                        a = n.firstChild;
                    (0, r.Yr)(n, (0, o.a0)(o.wv, {
                        get when() {
                            return "horizontal" === e.axis && (null !== (t = e.index) && void 0 !== t ? t : 0) > 0;
                            var t
                        },
                        get children() {
                            var e = Mt();
                            return e.$$click = i, (0, r.Yr)(e, (0, o.a0)(L.A, {
                                get class() {
                                    return Tt.icon
                                },
                                name: "chevron-back"
                            })), (0, o.gb)((() => (0, r.s7)(e, I()(Tt.control, Tt.left)))), e
                        }
                    }), a);
                    var s = t.ref;
                    return "function" == typeof s ? (0, r.Yx)(s, a) : t.ref = a, (0, r.Yr)(a, (() => e.children)), (0, r.Yr)(n, (0, o.a0)(o.wv, {
                        get when() {
                            return "horizontal" === e.axis && (null !== (t = e.index) && void 0 !== t ? t : 0) < (null !== (n = e.maxIndex) && void 0 !== n ? n : 0);
                            var t, n
                        },
                        get children() {
                            var e = Mt();
                            return e.$$click = l, (0, r.Yr)(e, (0, o.a0)(L.A, {
                                get class() {
                                    return Tt.icon
                                },
                                name: "chevron-forward"
                            })), (0, o.gb)((() => (0, r.s7)(e, I()(Tt.control, Tt.right)))), e
                        }
                    }), null), (0, o.gb)((t => {
                        var o = Tt["scroll-container"],
                            i = {
                                [Tt.overflow]: e.overflow
                            },
                            l = I()(e.class, Tt["scroll-content"]),
                            s = e.style;
                        return o !== t.e && (0, r.s7)(n, t.e = o), t.t = (0, r.pP)(n, i, t.t), l !== t.a && (0, r.s7)(a, t.a = l), t.o = (0, r.iF)(a, s, t.o), t
                    }), {
                        e: void 0,
                        t: void 0,
                        a: void 0,
                        o: void 0
                    }), n
                })()
            };
            (0, r.z_)(["click"]);
            var jt = n(5029),
                Ct = {};
            Ct.styleTagTransform = y(), Ct.setAttributes = v(), Ct.insert = h().bind(null, "head"), Ct.domAPI = u(), Ct.insertStyleElement = m();
            s()(jt.A, Ct);
            const It = jt.A && jt.A.locals ? jt.A.locals : void 0;
            var Lt = (0, r.vs)("<div>");
            const Pt = e => {
                const t = (0, o.To)((() => e.selected)),
                    n = () => {
                        e.onSelect(e.value)
                    };
                return (0, o.a0)(a.zo, {
                    get class() {
                        return It.option
                    },
                    get classList() {
                        return {
                            [It.selected]: t()
                        }
                    },
                    get autoFocus() {
                        return t()
                    },
                    onPress: n,
                    onClick: n,
                    get children() {
                        var t = Lt();
                        return (0, r.Yr)(t, (() => e.label)), (0, o.gb)((() => (0, r.s7)(t, It.label))), t
                    }
                })
            };
            var zt = n(5632),
                Ot = {};
            Ot.styleTagTransform = y(), Ot.setAttributes = v(), Ot.insert = h().bind(null, "head"), Ot.domAPI = u(), Ot.insertStyleElement = m();
            s()(zt.A, Ot);
            const Rt = zt.A && zt.A.locals ? zt.A.locals : void 0;
            var Nt = (0, r.vs)("<div>");
            const qt = e => {
                const {
                    onBack: t
                } = (0, a.cq)(), n = (0, H.W6)(), [i, l, s] = (0, z.zD)(), c = () => {
                    var t, n;
                    return null !== (t = null === (n = e.options.find((({
                        selected: e
                    }) => e))) || void 0 === n ? void 0 : n.label) && void 0 !== t ? t : null
                }, u = t => {
                    (0, o.vA)((() => {
                        e.onChange(t), s()
                    }))
                };
                return (0, z.k9)(i, (e => {
                    n.setBackDisabled(e)
                })), t((() => {
                    s()
                })), d = Nt(), (0, r.Yr)(d, (0, o.a0)(a.zo, {
                    get class() {
                        return Rt.selected
                    },
                    get autoFocus() {
                        return e.autoFocus
                    },
                    onPress: l,
                    onClick: l,
                    get children() {
                        return [(0, o.a0)(L.A, {
                            get class() {
                                return Rt.icon
                            },
                            name: "more-vertical"
                        }), (e = Nt(), (0, r.Yr)(e, c), (0, o.gb)((() => (0, r.s7)(e, Rt.label))), e)];
                        var e
                    }
                }), null), (0, r.Yr)(d, (0, o.a0)(P.e, {
                    name: "fade",
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return i()
                            },
                            get children() {
                                var e = Nt();
                                return (0, r.q2)(e, "click", s, !0), (0, o.gb)((() => (0, r.s7)(e, Rt.backdrop))), e
                            }
                        })
                    }
                }), null), (0, r.Yr)(d, (0, o.a0)(P.e, {
                    name: "fade",
                    get children() {
                        return (0, o.a0)(o.wv, {
                            get when() {
                                return i()
                            },
                            get children() {
                                return (0, o.a0)(a.Gk, {
                                    leave: ["none"],
                                    get children() {
                                        return (0, o.a0)(Et, {
                                            get class() {
                                                return Rt.menu
                                            },
                                            axis: "vertical",
                                            overflow: !0,
                                            get children() {
                                                return (0, o.a0)(o.jK, {
                                                    get each() {
                                                        return e.options
                                                    },
                                                    children: e => (0, o.a0)(Pt, (0, o.v6)(e, {
                                                        onSelect: u
                                                    }))
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                }), null), (0, o.gb)((() => (0, r.s7)(d, I()(e.class, Rt.select)))), d;
                var d
            };
            (0, r.z_)(["click"]);
            var Ft = n(3500),
                _t = {};
            _t.styleTagTransform = y(), _t.setAttributes = v(), _t.insert = h().bind(null, "head"), _t.domAPI = u(), _t.insertStyleElement = m();
            s()(Ft.A, _t);
            const Dt = Ft.A && Ft.A.locals ? Ft.A.locals : void 0;
            var Yt = (0, r.vs)("<textarea readonly>");
            const Vt = e => {
                const {
                    ref: t,
                    focus: n
                } = (0, a.Wc)(), i = () => {
                    n()
                };
                return (0, o.Rc)((() => {
                    e.autoFocus && n()
                })), (l = Yt()).$$click = i, (0, r.Yx)(t, l), (0, r.Yr)(l, (() => e.value)), (0, o.gb)((() => (0, r.s7)(l, Dt["text-area"]))), l;
                var l
            };
            (0, r.z_)(["click"]);
            var Ut = n(9354),
                Ht = {};
            Ht.styleTagTransform = y(), Ht.setAttributes = v(), Ht.insert = h().bind(null, "head"), Ht.domAPI = u(), Ht.insertStyleElement = m();
            s()(Ut.A, Ht);
            const Gt = Ut.A && Ut.A.locals ? Ut.A.locals : void 0;
            var Kt = (0, r.vs)("<input type=text>");
            const Wt = e => {
                const {
                    ref: t,
                    focus: n
                } = (0, a.Wc)(), i = () => {
                    n()
                }, l = ({
                    target: t
                }) => {
                    const {
                        value: n
                    } = t;
                    e.onInput && e.onInput(n)
                }, s = ({
                    target: t
                }) => {
                    const {
                        value: n
                    } = t;
                    e.onChange && e.onChange(n)
                }, c = ({
                    target: t
                }) => {
                    const {
                        value: n
                    } = t;
                    e.onSubmit && e.onSubmit(n)
                };
                return (0, o.Rc)((() => {
                    e.autoFocus && n()
                })), (u = Kt()).addEventListener("submit", c), u.addEventListener("change", s), u.$$input = l, u.$$click = i, (0, r.Yx)(t, u), (0, o.gb)((t => {
                    var n = I()(e.class, Gt["text-input"]),
                        o = e.placeholder;
                    return n !== t.e && (0, r.s7)(u, t.e = n), o !== t.t && (0, r.Bq)(u, "placeholder", t.t = o), t
                }), {
                    e: void 0,
                    t: void 0
                }), (0, o.gb)((() => u.value = e.value)), u;
                var u
            };
            (0, r.z_)(["click", "input"])
        },
        1137: (e, t, n) => {
            "use strict";
            var r = n(702),
                o = n(2836),
                a = n(2124).CONSTRUCTOR;
            e.exports = a || !o((function(e) {
                r.all(e).then(void 0, (function() {}))
            }))
        },
        1141: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(5735),
                a = n(7247);
            e.exports = !r && !o((function() {
                return 7 !== Object.defineProperty(a("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        1154: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(4520),
                i = n(5262),
                l = n(9565),
                s = n(7597),
                c = n(1180),
                u = n(4935),
                d = n(9654),
                h = n(5074),
                f = n(2934),
                v = n(7835),
                p = n(8867),
                m = v("replace"),
                g = TypeError,
                y = a("".indexOf),
                b = a("".replace),
                w = a("".slice),
                k = Math.max;
            r({
                target: "String",
                proto: !0
            }, {
                replaceAll: function(e, t) {
                    var n, r, a, v, x, S, A, T, M, B, E = i(this),
                        j = 0,
                        C = "";
                    if (!s(e)) {
                        if ((n = c(e)) && (r = u(i(h(e))), !~y(r, "g"))) throw new g("`.replaceAll` does not allow non-global regexes");
                        if (a = d(e, m)) return o(a, e, E, t);
                        if (p && n) return b(u(E), e, t)
                    }
                    for (v = u(E), x = u(e), (S = l(t)) || (t = u(t)), A = x.length, T = k(1, A), M = y(v, x); - 1 !== M;) B = S ? u(t(x, M, v)) : f(x, v, M, [], void 0, t), C += w(v, j, M) + B, j = M + A, M = M + T > v.length ? -1 : y(v, x, M + T);
                    return j < v.length && (C += w(v, j)), C
                }
            })
        },
        1180: (e, t, n) => {
            "use strict";
            var r = n(8666),
                o = n(8392),
                a = n(7835)("match");
            e.exports = function(e) {
                var t;
                return r(e) && (void 0 !== (t = e[a]) ? !!t : "RegExp" === o(e))
            }
        },
        1201: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = Object.defineProperty;
            e.exports = function(e, t) {
                try {
                    o(r, e, {
                        value: t,
                        configurable: !0,
                        writable: !0
                    })
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        },
        1256: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(8867),
                i = n(6470),
                l = n(9565),
                s = n(6946),
                c = n(7403),
                u = n(4303),
                d = n(135),
                h = n(9123),
                f = n(5088),
                v = n(7835),
                p = n(2245),
                m = n(2369),
                g = i.PROPER,
                y = i.CONFIGURABLE,
                b = m.IteratorPrototype,
                w = m.BUGGY_SAFARI_ITERATORS,
                k = v("iterator"),
                x = "keys",
                S = "values",
                A = "entries",
                T = function() {
                    return this
                };
            e.exports = function(e, t, n, i, v, m, M) {
                s(n, t, i);
                var B, E, j, C = function(e) {
                        if (e === v && O) return O;
                        if (!w && e && e in P) return P[e];
                        switch (e) {
                            case x:
                            case S:
                            case A:
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    I = t + " Iterator",
                    L = !1,
                    P = e.prototype,
                    z = P[k] || P["@@iterator"] || v && P[v],
                    O = !w && z || C(v),
                    R = "Array" === t && P.entries || z;
                if (R && (B = c(R.call(new e))) !== Object.prototype && B.next && (a || c(B) === b || (u ? u(B, b) : l(B[k]) || f(B, k, T)), d(B, I, !0, !0), a && (p[I] = T)), g && v === S && z && z.name !== S && (!a && y ? h(P, "name", S) : (L = !0, O = function() {
                        return o(z, this)
                    })), v)
                    if (E = {
                            values: C(S),
                            keys: m ? O : C(x),
                            entries: C(A)
                        }, M)
                        for (j in E)(w || L || !(j in P)) && f(P, j, E[j]);
                    else r({
                        target: t,
                        proto: !0,
                        forced: w || L
                    }, E);
                return a && !M || P[k] === O || f(P, k, O, {
                    name: v
                }), p[t] = O, E
            }
        },
        1329: (e, t, n) => {
            "use strict";
            var r = n(6480),
                o = Function.prototype,
                a = o.apply,
                i = o.call;
            e.exports = "object" == typeof Reflect && Reflect.apply || (r ? i.bind(a) : function() {
                return i.apply(a, arguments)
            })
        },
        1359: (e, t, n) => {
            "use strict";
            var r = n(6191).match(/AppleWebKit\/(\d+)\./);
            e.exports = !!r && +r[1]
        },
        1369: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(9947),
                a = n(7085),
                i = n(2526),
                l = n(3059),
                s = n(3621);
            r({
                target: "Array",
                proto: !0
            }, {
                flat: function() {
                    var e = arguments.length ? arguments[0] : void 0,
                        t = a(this),
                        n = i(t),
                        r = s(t, 0);
                    return r.length = o(r, t, t, n, 0, void 0 === e ? 1 : l(e)), r
                }
            })
        },
        1377: (e, t, n) => {
            "use strict";
            var r = n(2240),
                o = n(7205),
                a = n(8666),
                i = n(7835)("species"),
                l = Array;
            e.exports = function(e) {
                var t;
                return r(e) && (t = e.constructor, (o(t) && (t === l || r(t.prototype)) || a(t) && null === (t = t[i])) && (t = void 0)), void 0 === t ? l : t
            }
        },
        1381: (e, t, n) => {
            "use strict";
            n(5213)("flatMap")
        },
        1407: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gk: () => R,
                zo: () => F,
                i9: () => I,
                Wc: () => N,
                cq: () => L,
                fR: () => _
            });
            var r = n(6886),
                o = (n(8486), n(9144), n(1381), n(5658), n(1954), n(876), n(2597), n(460), n(435), n(3080), n(234), n(9784), n(9296), n(7961), n(8598), n(549), n(3238), n(5073), n(4922));
            const a = () => {
                    const [e, t] = (0, r.n5)([]), n = (t = 0) => e().length ? e()[t] : null;
                    return {
                        all: e,
                        add: e => {
                            var r;
                            (null === (r = n()) || void 0 === r ? void 0 : r.id) !== e.id && t((t => [e, ...t]))
                        },
                        removeById: e => {
                            t((t => t.filter((t => t.id !== e))))
                        },
                        last: n,
                        lastByArea: t => e().find((({
                            area: e
                        }) => e === t)),
                        clear: () => {
                            t([])
                        }
                    }
                },
                i = (0, r.q6)({});
            n(5226);
            const l = (e, t) => {
                    var n;
                    return parseInt(null !== (n = e.getAttribute(t)) && void 0 !== n ? n : "0")
                },
                s = e => {
                    const t = e.parentNode;
                    if (!t || t.isEqualNode(window.document)) return null;
                    return t.getAttribute("nav-area") ? t : s(t)
                },
                c = (e, t) => {
                    const n = e.parentNode;
                    if (!n || n.isEqualNode(window.document)) return null;
                    return n.getAttribute("nav-scroll-anchor") === t ? n : c(n, t)
                },
                u = (e, t = []) => {
                    const n = e.parentNode;
                    if (!n || n.isEqualNode(window.document)) return t;
                    return n.getAttribute("nav-axis") && t.push(n), u(n, t)
                },
                d = e => "INPUT" === e.tagName && "text" === e.getAttribute("type"),
                h = e => "TEXTAREA" === e.tagName,
                f = {
                    height: 0,
                    width: 0,
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    center: {
                        y: 0,
                        x: 0
                    }
                };
            n(4582);
            const v = () => (Math.random() + 1).toString(36).substring(7),
                p = (e, t, n, r) => {
                    const o = t.x - e.x,
                        a = t.y - e.y,
                        i = o * (r.y - n.y) - (r.x - n.x) * a;
                    if (0 === i) return null;
                    const l = ((r.y - n.y) * (r.x - e.x) + (n.x - r.x) * (r.y - e.y)) / i,
                        s = ((e.y - t.y) * (r.x - e.x) + o * (r.y - e.y)) / i;
                    return 0 <= l && l <= 1 && 0 <= s && s <= 1 ? {
                        x: e.x + l * o,
                        y: e.y + l * a
                    } : null
                },
                m = (e, t) => Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)),
                g = (e, t, n) => {
                    var r;
                    const o = t.filter((t => e.id !== t.id)).filter((t => ((e, t, n) => {
                        switch (n) {
                            case "up":
                                return t.layout.top <= e.layout.bottom && t.layout.bottom <= e.layout.top;
                            case "down":
                                return t.layout.top >= e.layout.bottom && t.layout.bottom >= e.layout.top;
                            case "left":
                                return t.layout.left <= e.layout.right && t.layout.right <= e.layout.left;
                            case "right":
                                return t.layout.left >= e.layout.right && t.layout.right >= e.layout.left
                        }
                    })(e, t, n))).map((t => {
                        const r = "left" === n || "right" === n ? "top" : "left",
                            o = e.layout[r] - t.layout[r],
                            a = ((e, t, n) => {
                                switch (n) {
                                    case "up":
                                        return p({
                                            x: e.layout.center.x,
                                            y: e.layout.top
                                        }, {
                                            x: e.layout.center.x,
                                            y: 0
                                        }, {
                                            x: t.layout.left,
                                            y: t.layout.bottom
                                        }, {
                                            x: t.layout.right,
                                            y: t.layout.bottom
                                        });
                                    case "down":
                                        return p({
                                            x: e.layout.center.x,
                                            y: e.layout.bottom
                                        }, {
                                            x: e.layout.center.x,
                                            y: window.innerHeight
                                        }, {
                                            x: t.layout.left,
                                            y: t.layout.top
                                        }, {
                                            x: t.layout.right,
                                            y: t.layout.top
                                        });
                                    case "left":
                                        return p({
                                            x: e.layout.left,
                                            y: e.layout.center.y
                                        }, {
                                            x: 0,
                                            y: e.layout.center.y
                                        }, {
                                            x: t.layout.right,
                                            y: t.layout.top
                                        }, {
                                            x: t.layout.right,
                                            y: t.layout.bottom
                                        });
                                    case "right":
                                        return p({
                                            x: e.layout.right,
                                            y: e.layout.center.y
                                        }, {
                                            x: window.innerWidth,
                                            y: e.layout.center.y
                                        }, {
                                            x: t.layout.left,
                                            y: t.layout.top
                                        }, {
                                            x: t.layout.left,
                                            y: t.layout.bottom
                                        });
                                    case "none":
                                        return null
                                }
                            })(e, t, n),
                            i = ((e, t, n, r) => {
                                let o = m(e.layout.center, t.layout.center);
                                if (n) switch (r) {
                                    case "up":
                                        o = m({
                                            x: e.layout.center.x,
                                            y: e.layout.top
                                        }, n);
                                    case "down":
                                        o = m({
                                            x: e.layout.center.x,
                                            y: e.layout.bottom
                                        }, n);
                                    case "left":
                                        o = m({
                                            x: e.layout.left,
                                            y: e.layout.center.y
                                        }, n);
                                    case "right":
                                        o = m({
                                            x: e.layout.right,
                                            y: e.layout.center.y
                                        }, n)
                                }
                                return o
                            })(e, t, a, n);
                        return {
                            item: t,
                            distance: i,
                            offset: o
                        }
                    })).sort(((e, t) => e.distance - t.distance)).sort(((e, t) => Math.abs(e.offset) - Math.abs(t.offset))).map((({
                        item: e
                    }) => e));
                    return null !== (r = o[0]) && void 0 !== r ? r : void 0
                },
                y = (e, t) => {
                    var n;
                    const r = new Event(e, {
                        bubbles: !0,
                        cancelable: !1
                    });
                    (null !== (n = null == t ? void 0 : t.element) && void 0 !== n ? n : window).dispatchEvent(r)
                },
                b = {
                    up: [38, 29460],
                    down: [40, 29461],
                    left: [37, 4],
                    right: [39, 5],
                    ok: [13, 29443, 65376],
                    back: [8, 27, 461, 10009, 88],
                    play: [415, 207],
                    pause: [19, 119],
                    playPause: [179, 10252],
                    stop: [413],
                    seekPrev: [412, 177, 168],
                    seekNext: [418, 417, 176, 208]
                },
                w = .7,
                k = 0,
                x = 1,
                S = 2,
                A = 3,
                T = 12,
                M = 13,
                B = 14,
                E = 15,
                j = 0,
                C = 1,
                I = e => {
                    let t = null,
                        n = null;
                    const v = a(),
                        [p, m] = (0, r.n5)([]),
                        [I, L] = (0, r.n5)([]),
                        [P, z] = (0, r.n5)([]),
                        [O, R] = (0, r.n5)(null),
                        N = e => {
                            const t = t => t.map((t => (e.includes(t.id) && !0 === t.layoutUpdate && (t.layout = (e => {
                                const t = e.offsetHeight,
                                    n = e.offsetWidth;
                                let r = 0,
                                    o = 0;
                                for (; e.offsetParent;) {
                                    const t = l(e, "vertical"),
                                        n = l(e, "horizontal");
                                    r += e.offsetTop - t, o += e.offsetLeft - n, e = e.offsetParent
                                }
                                return {
                                    height: t,
                                    width: n,
                                    top: r,
                                    bottom: r + t,
                                    left: o,
                                    right: o + n,
                                    center: {
                                        y: r + t / 2,
                                        x: o + n / 2
                                    }
                                }
                            })(t.element)), t)));
                            (0, r.vA)((() => {
                                m(t), L(t)
                            }))
                        },
                        q = (e, t) => {
                            const n = P().filter((({
                                    id: t
                                }) => e.scrollables.includes(t))),
                                o = n.filter((({
                                    axis: e
                                }) => !t || ("up" === t || "down" === t) && "vertical" === e || ("left" === t || "right" === t) && "horizontal" === e)).flatMap((({
                                    id: e
                                }) => p().filter((({
                                    scrollables: t
                                }) => t.includes(e))))),
                                a = o.map((({
                                    area: e
                                }) => e)).filter((e => null !== e)),
                                i = o.map((({
                                    id: e
                                }) => e));
                            n.forEach((t => Y(t, e))), (0, r.vA)((() => {
                                N([...new Set(a)]), N([...new Set(i)])
                            }))
                        },
                        F = async e => {
                            var t;
                            if ((null === (t = O()) || void 0 === t ? void 0 : t.id) === e) return;
                            const n = p().find((t => t.id === e));
                            if (n) return (0, r.vA)((() => {
                                R(n), q(n), v.add(n)
                            }));
                            I().find((t => t.id === e)) && (0, r.vA)((() => {
                                const t = v.lastByArea(e);
                                if (t) return F(t.id);
                                const n = p().find((({
                                    area: t
                                }) => t === e));
                                return n ? F(n.id) : void 0
                            }))
                        },
                        _ = async (e, t) => {
                            e && (0, r.vA)((() => {
                                R(e), q(e, t), v.add(e)
                            }))
                        },
                        D = async e => {
                            const t = O();
                            if (!t) return;
                            const n = p().filter((({
                                    area: e
                                }) => e === t.area)),
                                r = g(t, n, e);
                            if (r) return _(r, e);
                            const o = I().find((({
                                id: e
                            }) => e === t.area));
                            if (null != o && o.leave && (o.leave.includes("none") || !o.leave.includes(e))) return;
                            const a = I().filter((({
                                    id: e
                                }) => e !== t.area)),
                                i = g(t, a, e);
                            if (i) {
                                const n = v.lastByArea(i.id);
                                if (n) return _(n, e);
                                const r = p().filter((({
                                        area: e
                                    }) => e === i.id)),
                                    o = g(t, r, e);
                                if (o) return _(o, e)
                            }
                            const l = g(t, p().filter((({
                                area: e
                            }) => !e)), e);
                            l && _(l, e)
                        },
                        Y = (e, t) => {
                            const n = "vertical" === e.axis ? "offsetTop" : "offsetLeft",
                                r = e.element.children[0];
                            let o = 0;
                            if (t) {
                                const a = c(t.element, e.axis);
                                o = a ? a[n] : t.element[n] - r[n]
                            }
                            e.element.setAttribute(e.axis, o.toString()), e.element.style.transform = "vertical" === e.axis ? `translateY(-${o}px)` : `translateX(-${o}px)`
                        },
                        V = (e, t) => {
                            const n = O();
                            !n || d(n.element) && !(e => {
                                if (d(e)) return 0 === e.value.length;
                                return !0
                            })(n.element) || (e.preventDefault(), t(n))
                        },
                        U = (e, t) => {
                            const n = O();
                            n && !h(n.element) && (e.preventDefault(), t(n))
                        },
                        H = e => {
                            const t = t => b[t].includes(e.keyCode);
                            t("up") && U(e, (() => {
                                D("up")
                            })), t("down") && U(e, (() => {
                                D("down")
                            })), t("left") && (y("left"), V(e, (() => {
                                D("left")
                            }))), t("right") && (y("right"), V(e, (() => {
                                D("right")
                            }))), y("any"), t("ok") && (y("ok"), V(e, (e => {
                                y("press", e)
                            }))), t("back") && V(e, (() => {
                                y("back")
                            })), t("play") && (e.preventDefault(), y("play")), t("pause") && (e.preventDefault(), y("pause")), t("playPause") && (e.preventDefault(), y("playPause")), t("stop") && (e.preventDefault(), y("stop")), t("seekPrev") && (e.preventDefault(), y("seekPrev")), t("seekNext") && (e.preventDefault(), y("seekNext"))
                        },
                        G = ({
                            deltaY: e
                        }) => {
                            D(e < 0 ? "up" : "down")
                        },
                        K = () => {
                            n && clearInterval(n), n = setInterval((() => {
                                [...navigator.getGamepads()].filter((e => null !== e && e.connected)).forEach((({
                                    buttons: e,
                                    axes: t
                                }) => {
                                    var n;
                                    const r = t[k],
                                        o = t[x],
                                        a = t[S],
                                        i = t[A],
                                        l = e[T],
                                        s = e[M],
                                        c = e[B],
                                        u = e[E],
                                        d = e[j],
                                        h = e[C];
                                    if (-1 === r && -1 === a && 1 === o && 1 === i) return;
                                    const f = {
                                            up: o < -.7 || i < -.7 || (null == l ? void 0 : l.pressed),
                                            down: o > w || i > w || (null == s ? void 0 : s.pressed),
                                            left: r < -.7 || a < -.7 || (null == c ? void 0 : c.pressed),
                                            right: r > w || a > w || (null == u ? void 0 : u.pressed),
                                            ok: d.pressed,
                                            back: h.pressed
                                        },
                                        [v] = null !== (n = Object.entries(f).find((([, e]) => e))) && void 0 !== n ? n : [];
                                    v && H(new KeyboardEvent("keydown", {
                                        keyCode: b[v][0]
                                    }))
                                }))
                            }), 100)
                        },
                        W = () => {
                            (0, r.vA)((() => {
                                N(p().map((({
                                    id: e
                                }) => e))), N(I().map((({
                                    id: e
                                }) => e)))
                            }))
                        };
                    return (0, o.k9)(O, ((e, t) => {
                        if (e && t && e.area !== t.area) {
                            const n = I().find((({
                                id: e
                            }) => e === t.area));
                            n && y("leave", n);
                            const r = I().find((({
                                id: t
                            }) => t === e.area));
                            r && y("enter", r)
                        }
                        if (t && (t.element.removeAttribute("focused"), y("blur", t), (d(t.element) || h(t.element)) && t.element.blur()), e && (e.element.setAttribute("focused", "true"), y("focus", e), (d(e.element) || h(e.element)) && e.element.focus()), t && !e) {
                            const e = v.last();
                            if (e) return F(e.id);
                            const t = p()[0];
                            if (t) return F(t.id)
                        }
                    })), (0, r.Rc)((() => {
                        const e = document.getElementById("root");
                        t = new MutationObserver(W), e && t.observe(e, {
                            subtree: !0,
                            childList: !1,
                            attributes: !0,
                            attributeFilter: ["nav-id"],
                            attributeOldValue: !1,
                            characterData: !1,
                            characterDataOldValue: !1
                        }), document.addEventListener("keydown", H), document.addEventListener("wheel", G), window.addEventListener("gamepadconnected", K), window.addEventListener("gamepaddisconnected", K)
                    })), (0, r.Ki)((() => {
                        t && t.disconnect(), document.removeEventListener("keydown", H), document.removeEventListener("wheel", G), window.removeEventListener("gamepadconnected", K), window.removeEventListener("gamepaddisconnected", K), n && clearInterval(n), n = null
                    })), (0, r.a0)(i.Provider, {
                        value: {
                            addFocusable: e => {
                                const t = (({
                                    id: e,
                                    element: t,
                                    layoutUpdate: n = !0
                                }) => {
                                    var r, o;
                                    t.setAttribute("nav-id", e);
                                    const a = null !== (r = null === (o = s(t)) || void 0 === o ? void 0 : o.getAttribute("nav-id")) && void 0 !== r ? r : null,
                                        i = u(t).map((e => e.getAttribute("nav-id"))).filter((e => null !== e));
                                    return {
                                        id: e,
                                        element: t,
                                        layout: f,
                                        layoutUpdate: n,
                                        area: a,
                                        scrollables: i
                                    }
                                })(e);
                                m((e => [...e, t]))
                            },
                            addArea: e => {
                                const t = (({
                                    id: e,
                                    element: t,
                                    leave: n,
                                    layoutUpdate: r = !0
                                }) => (t.setAttribute("nav-id", e), t.setAttribute("nav-area", "true"), {
                                    id: e,
                                    element: t,
                                    layout: f,
                                    layoutUpdate: r,
                                    leave: n
                                }))(e);
                                L((e => [...e, t]))
                            },
                            addScrollable: e => {
                                const t = (({
                                    id: e,
                                    element: t,
                                    axis: n = "horizontal"
                                }) => (t.setAttribute("nav-id", e), t.setAttribute("nav-axis", n), {
                                    id: e,
                                    element: t,
                                    axis: n
                                }))(e);
                                z((e => [...e, t]))
                            },
                            remove: e => {
                                v.removeById(e);
                                const t = t => t.filter((t => t.id !== e));
                                (0, r.vA)((() => {
                                    R((t => (null == t ? void 0 : t.id) === e ? null : t)), m(t), L(t), z(t)
                                }))
                            },
                            focused: O,
                            focus: F,
                            move: D,
                            resetScrollable: e => {
                                const t = P().find((t => t.id === e));
                                t && Y(t)
                            }
                        },
                        get children() {
                            return e.children
                        }
                    })
                },
                L = () => {
                    const e = (0, r.NT)(i);
                    let t = [];
                    const n = (e, n) => {
                            t.push([e, n]), window.addEventListener(e, n)
                        },
                        o = (e, n) => {
                            t = t.filter((t => t[0] !== e && t[1] !== n)), window.removeEventListener(e, n)
                        };
                    return (0, r.Ki)((() => {
                        t.forEach((([e, t]) => o(e, t)))
                    })), {
                        on: n,
                        off: o,
                        move: t => {
                            e.move(t)
                        },
                        onBack: e => {
                            n("back", e)
                        }
                    }
                };
            var P = n(8224);
            const z = e => {
                const t = (0, r.NT)(i),
                    n = v();
                let o = null;
                return (0, r.Rc)((() => {
                    o && t.addArea({
                        id: n,
                        element: o,
                        ...e
                    })
                })), (0, r.Ki)((() => {
                    t.remove(n)
                })), {
                    ref: e => o = e,
                    focus: () => {
                        t.focus(n)
                    }
                }
            };
            var O = (0, P.vs)("<div>");
            const R = e => {
                    const {
                        ref: t,
                        focus: n
                    } = z({
                        leave: e.leave,
                        layoutUpdate: e.layoutUpdate
                    });
                    return (0, o.k9)((() => e.autoFocus), (e => {
                        e && n()
                    })), (0, r.Rc)((() => {
                        e.autoFocus && n()
                    })), a = O(), (0, P.q2)(a, "leave", e.onLeave), (0, P.q2)(a, "enter", e.onEnter), (0, P.Yx)(t, a), (0, P.Yr)(a, (() => e.children)), (0, r.gb)((t => {
                        var n = e.class,
                            r = e.classList,
                            o = e.style;
                        return n !== t.e && (0, P.s7)(a, t.e = n), t.t = (0, P.pP)(a, r, t.t), t.a = (0, P.iF)(a, o, t.a), t
                    }), {
                        e: void 0,
                        t: void 0,
                        a: void 0
                    }), a;
                    var a
                },
                N = e => {
                    const t = (0, r.NT)(i),
                        n = v();
                    let o = null;
                    const a = (0, r.To)((() => {
                        const e = t.focused();
                        return (null == e ? void 0 : e.id) === n
                    }));
                    return (0, r.Rc)((() => {
                        o && t.addFocusable({
                            id: n,
                            element: o,
                            ...e
                        })
                    })), (0, r.Ki)((() => {
                        t.remove(n)
                    })), {
                        ref: e => o = e,
                        focus: () => {
                            t.focus(n)
                        },
                        focused: a
                    }
                };
            var q = (0, P.vs)("<div>");
            const F = e => {
                const {
                    ref: t,
                    focus: n
                } = N({
                    layoutUpdate: e.layoutUpdate
                }), a = () => {
                    n(), e.onClick && e.onClick()
                };
                return (0, o.k9)((() => e.autoFocus), (e => {
                    e && n()
                })), (0, r.Rc)((() => {
                    e.autoFocus && n()
                })), i = q(), (0, P.q2)(i, "blur", e.onBlur), (0, P.q2)(i, "focus", e.onFocus), (0, P.q2)(i, "press", e.onPress), i.$$click = a, (0, P.Yx)(t, i), (0, P.Yr)(i, (() => e.children)), (0, r.gb)((t => {
                    var n = e.class,
                        r = e.classList,
                        o = e.style;
                    return n !== t.e && (0, P.s7)(i, t.e = n), t.t = (0, P.pP)(i, r, t.t), t.a = (0, P.iF)(i, o, t.a), t
                }), {
                    e: void 0,
                    t: void 0,
                    a: void 0
                }), i;
                var i
            };
            (0, P.z_)(["click"]);
            const _ = e => {
                const t = (0, r.NT)(i),
                    n = v();
                let o = null;
                return (0, r.Rc)((() => {
                    o && t.addScrollable({
                        id: n,
                        element: o,
                        axis: e
                    })
                })), (0, r.Ki)((() => {
                    t.remove(n)
                })), {
                    ref: e => o = e,
                    id: n,
                    reset: () => {
                        t.resetScrollable(n)
                    }
                }
            }
        },
        1441: (e, t, n) => {
            "use strict";
            var r = n(6191);
            e.exports = /ipad|iphone|ipod/i.test(r) && "undefined" != typeof Pebble
        },
        1468: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4340),
                a = n(2786),
                i = n(6415),
                l = n(4479);
            r({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                find: function(e) {
                    i(this), a(e);
                    var t = l(this),
                        n = 0;
                    return o(t, (function(t, r) {
                        if (e(t, n++)) return r(t)
                    }), {
                        IS_RECORD: !0,
                        INTERRUPTED: !0
                    }).result
                }
            })
        },
        1488: (e, t, n) => {
            "use strict";
            var r = n(5432),
                o = Math.floor,
                a = function(e, t) {
                    var n = e.length;
                    if (n < 8)
                        for (var i, l, s = 1; s < n;) {
                            for (l = s, i = e[s]; l && t(e[l - 1], i) > 0;) e[l] = e[--l];
                            l !== s++ && (e[l] = i)
                        } else
                            for (var c = o(n / 2), u = a(r(e, 0, c), t), d = a(r(e, c), t), h = u.length, f = d.length, v = 0, p = 0; v < h || p < f;) e[v + p] = v < h && p < f ? t(u[v], d[p]) <= 0 ? u[v++] : d[p++] : v < h ? u[v++] : d[p++];
                    return e
                };
            e.exports = a
        },
        1497: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = Error,
                a = r("".replace),
                i = String(new o("zxcasd").stack),
                l = /\n\s*at [^:]*:[^\n]*/,
                s = l.test(i);
            e.exports = function(e, t) {
                if (s && "string" == typeof e && !o.prepareStackTrace)
                    for (; t--;) e = a(e, l, "");
                return e
            }
        },
        1510: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".app-error-MfEhA {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.app-error-MfEhA > * {\n  margin: 1rem 0 1rem 0;\n}\n.app-error-MfEhA > :first-child {\n  margin-top: 0;\n}\n.app-error-MfEhA > :last-child {\n  margin-bottom: 0;\n}\n.app-error-MfEhA .image-ptFxG {\n  height: 15em;\n  width: 15em;\n}\n.app-error-MfEhA .message-inyFl {\n  font-size: 2rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n", ""]), i.locals = {
                "app-error": "app-error-MfEhA",
                image: "image-ptFxG",
                message: "message-inyFl"
            };
            const l = i
        },
        1599: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".toast-container-JtY8i {\n  z-index: 99;\n  position: fixed;\n  top: 2rem;\n  right: 2rem;\n  display: flex;\n  flex-direction: column;\n}\n.toast-container-JtY8i > * {\n  margin: 0.625rem 0 0.625rem 0;\n}\n.toast-container-JtY8i > :first-child {\n  margin-top: 0;\n}\n.toast-container-JtY8i > :last-child {\n  margin-bottom: 0;\n}\n.toast-container-JtY8i .toast-hHAiN {\n  display: flex;\n  flex-direction: column;\n}\n.toast-container-JtY8i .toast-hHAiN > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.toast-container-JtY8i .toast-hHAiN > :first-child {\n  margin-top: 0;\n}\n.toast-container-JtY8i .toast-hHAiN > :last-child {\n  margin-bottom: 0;\n}\n.toast-container-JtY8i .toast-hHAiN .title-Uxsgl {\n  font-weight: 700;\n}\n.toast-container-JtY8i .toast-hHAiN .message-uEyVf {\n  font-weight: 500;\n  opacity: 0.7;\n}\n", ""]), i.locals = {
                "toast-container": "toast-container-JtY8i",
                toast: "toast-hHAiN",
                title: "title-Uxsgl",
                message: "message-uEyVf"
            };
            const l = i
        },
        1642: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".item-preview-nq13h {\n  z-index: 0;\n  position: relative;\n  height: 41vh;\n  overflow: visible;\n  user-select: none;\n}\n.item-preview-nq13h.item-preview-720p-nskCW {\n  height: 63vh;\n}\n.item-preview-nq13h .info-container-iIxop {\n  z-index: 2;\n  position: relative;\n  height: 100%;\n  width: 50%;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem 0 3rem 5rem;\n  overflow: hidden;\n}\n.item-preview-nq13h .info-container-iIxop > * {\n  margin: 0.5rem 0 0.5rem 0;\n}\n.item-preview-nq13h .info-container-iIxop > :first-child {\n  margin-top: 0;\n}\n.item-preview-nq13h .info-container-iIxop > :last-child {\n  margin-bottom: 0;\n}\n.item-preview-nq13h .info-container-iIxop .title-Y5wf0 {\n  flex: none;\n  margin-bottom: 0.5rem;\n  font-size: 3.7rem;\n  font-weight: 700;\n  color: hsla(0, 0%, 100%, 0.9);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y > * {\n  margin: 0.5rem 0 0.5rem 0;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y > :first-child {\n  margin-top: 0;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y > :last-child {\n  margin-bottom: 0;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE {\n  flex: none;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE > * {\n  margin: 0 1.5rem 0 1.5rem;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE > :first-child {\n  margin-left: 0;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE > :last-child {\n  margin-right: 0;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE .label-qP8mN {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .info-MK7HE .imdb-icon-cqAlI {\n  height: 3rem;\n  margin-left: 0.5rem;\n  color: #f5c518;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .description-ohb1N {\n  flex: none;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 4;\n  font-size: 1.6rem;\n  font-weight: 400;\n  line-height: 2.3rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  overflow: hidden;\n}\n.item-preview-nq13h .info-container-iIxop .details-wIL6Y .cast-Iq4eA {\n  flex: auto;\n  display: flex;\n  align-items: flex-end;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.item-preview-nq13h .background-container-D9GP9 {\n  z-index: 1;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  will-change: opacity;\n  transition: opacity 0.2s ease-out;\n}\n.item-preview-nq13h .background-container-D9GP9.visible-tSG1J {\n  opacity: 1;\n}\n.item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 55vh;\n  width: 65%;\n  overflow: hidden;\n}\n.item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj.background-inner-720p-Xc9rr {\n  height: 84vh;\n}\n.item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj .gradient-overlay-sYJZ9 {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  background-image: linear-gradient(90deg, #0c0c10 0%, transparent 85%), linear-gradient(0deg, #0c0c10 0%, transparent 85%);\n}\n.item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj .background-image-Tlzwm {\n  z-index: 0;\n  position: relative;\n  width: 100%;\n}\n.item-preview-nq13h.compact-2Q0Oq .info-container-iIxop .details-wIL6Y .description-ohb1N {\n  -webkit-line-clamp: 1;\n}\n", ""]), i.locals = {
                "item-preview": "item-preview-nq13h",
                "item-preview-720p": "item-preview-720p-nskCW",
                "info-container": "info-container-iIxop",
                title: "title-Y5wf0",
                details: "details-wIL6Y",
                info: "info-MK7HE",
                label: "label-qP8mN",
                "imdb-icon": "imdb-icon-cqAlI",
                description: "description-ohb1N",
                cast: "cast-Iq4eA",
                "background-container": "background-container-D9GP9",
                visible: "visible-tSG1J",
                "background-inner": "background-inner-h_eaj",
                "background-inner-720p": "background-inner-720p-Xc9rr",
                "gradient-overlay": "gradient-overlay-sYJZ9",
                "background-image": "background-image-Tlzwm",
                compact: "compact-2Q0Oq"
            };
            const l = i
        },
        1727: e => {
            "use strict";
            var t = [];

            function n(e) {
                for (var n = -1, r = 0; r < t.length; r++)
                    if (t[r].identifier === e) {
                        n = r;
                        break
                    }
                return n
            }

            function r(e, r) {
                for (var a = {}, i = [], l = 0; l < e.length; l++) {
                    var s = e[l],
                        c = r.base ? s[0] + r.base : s[0],
                        u = a[c] || 0,
                        d = "".concat(c, " ").concat(u);
                    a[c] = u + 1;
                    var h = n(d),
                        f = {
                            css: s[1],
                            media: s[2],
                            sourceMap: s[3],
                            supports: s[4],
                            layer: s[5]
                        };
                    if (-1 !== h) t[h].references++, t[h].updater(f);
                    else {
                        var v = o(f, r);
                        r.byIndex = l, t.splice(l, 0, {
                            identifier: d,
                            updater: v,
                            references: 1
                        })
                    }
                    i.push(d)
                }
                return i
            }

            function o(e, t) {
                var n = t.domAPI(t);
                n.update(e);
                return function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                        n.update(e = t)
                    } else n.remove()
                }
            }
            e.exports = function(e, o) {
                var a = r(e = e || [], o = o || {});
                return function(e) {
                    e = e || [];
                    for (var i = 0; i < a.length; i++) {
                        var l = n(a[i]);
                        t[l].references--
                    }
                    for (var s = r(e, o), c = 0; c < a.length; c++) {
                        var u = n(a[c]);
                        0 === t[u].references && (t[u].updater(), t.splice(u, 1))
                    }
                    a = s
                }
            }
        },
        1853: (e, t, n) => {
            "use strict";
            var r = n(8103),
                o = n(5262);
            e.exports = function(e) {
                return r(o(e))
            }
        },
        1869: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(4520),
                a = n(6597),
                i = n(5735),
                l = n(232),
                s = n(5197),
                c = n(5517),
                u = n(7085),
                d = n(8103),
                h = Object.assign,
                f = Object.defineProperty,
                v = o([].concat);
            e.exports = !h || i((function() {
                if (r && 1 !== h({
                        b: 1
                    }, h(f({}, "a", {
                        enumerable: !0,
                        get: function() {
                            f(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                var e = {},
                    t = {},
                    n = Symbol("assign detection"),
                    o = "abcdefghijklmnopqrst";
                return e[n] = 7, o.split("").forEach((function(e) {
                    t[e] = e
                })), 7 !== h({}, e)[n] || l(h({}, t)).join("") !== o
            })) ? function(e, t) {
                for (var n = u(e), o = arguments.length, i = 1, h = s.f, f = c.f; o > i;)
                    for (var p, m = d(arguments[i++]), g = h ? v(l(m), h(m)) : l(m), y = g.length, b = 0; y > b;) p = g[b++], r && !a(f, m, p) || (n[p] = m[p]);
                return n
            } : h
        },
        1954: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(7240);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("difference", (function(e) {
                    return 0 === e.size
                }))
            }, {
                difference: o
            })
        },
        1978: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(2786);
            e.exports = function(e, t, n) {
                try {
                    return r(o(Object.getOwnPropertyDescriptor(e, t)[n]))
                } catch (e) {}
            }
        },
        1986: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(9565),
                a = n(4373),
                i = r(Function.toString);
            o(a.inspectSource) || (a.inspectSource = function(e) {
                return i(e)
            }), e.exports = a.inspectSource
        },
        2027: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(6024).RegExp;
            e.exports = r((function() {
                var e = o(".", "s");
                return !(e.dotAll && e.test("\n") && "s" === e.flags)
            }))
        },
        2031: (e, t, n) => {
            "use strict";
            var r = n(7137),
                o = TypeError;
            e.exports = function(e, t) {
                if (r(t, e)) return e;
                throw new o("Incorrect invocation")
            }
        },
        2042: (e, t, n) => {
            "use strict";
            var r = n(7021),
                o = String,
                a = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new a("Can't set " + o(e) + " as a prototype")
            }
        },
        2098: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6024),
                a = n(283),
                i = n(2786),
                l = n(500),
                s = n(5735),
                c = n(6724);
            r({
                global: !0,
                enumerable: !0,
                dontCallGetSet: !0,
                forced: s((function() {
                    return c && 1 !== Object.getOwnPropertyDescriptor(o, "queueMicrotask").value.length
                }))
            }, {
                queueMicrotask: function(e) {
                    l(arguments.length, 1), a(i(e))
                }
            })
        },
        2109: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(2240),
                a = n(9565),
                i = n(8392),
                l = n(4935),
                s = r([].push);
            e.exports = function(e) {
                if (a(e)) return e;
                if (o(e)) {
                    for (var t = e.length, n = [], r = 0; r < t; r++) {
                        var c = e[r];
                        "string" == typeof c ? s(n, c) : "number" != typeof c && "Number" !== i(c) && "String" !== i(c) || s(n, l(c))
                    }
                    var u = n.length,
                        d = !0;
                    return function(e, t) {
                        if (d) return d = !1, t;
                        if (o(this)) return t;
                        for (var r = 0; r < u; r++)
                            if (n[r] === e) return t
                    }
                }
            }
        },
        2124: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(702),
                a = n(9565),
                i = n(8292),
                l = n(1986),
                s = n(7835),
                c = n(8447),
                u = n(8867),
                d = n(9159),
                h = o && o.prototype,
                f = s("species"),
                v = !1,
                p = a(r.PromiseRejectionEvent),
                m = i("Promise", (function() {
                    var e = l(o),
                        t = e !== String(o);
                    if (!t && 66 === d) return !0;
                    if (u && (!h.catch || !h.finally)) return !0;
                    if (!d || d < 51 || !/native code/.test(e)) {
                        var n = new o((function(e) {
                                e(1)
                            })),
                            r = function(e) {
                                e((function() {}), (function() {}))
                            };
                        if ((n.constructor = {})[f] = r, !(v = n.then((function() {})) instanceof r)) return !0
                    }
                    return !(t || "BROWSER" !== c && "DENO" !== c || p)
                }));
            e.exports = {
                CONSTRUCTOR: m,
                REJECTION_EVENT: p,
                SUBCLASSING: v
            }
        },
        2165: (e, t, n) => {
            "use strict";
            var r = n(2786),
                o = n(6415),
                a = n(6597),
                i = n(3059),
                l = n(4479),
                s = "Invalid size",
                c = RangeError,
                u = TypeError,
                d = Math.max,
                h = function(e, t) {
                    this.set = e, this.size = d(t, 0), this.has = r(e.has), this.keys = r(e.keys)
                };
            h.prototype = {
                getIterator: function() {
                    return l(o(a(this.keys, this.set)))
                },
                includes: function(e) {
                    return a(this.has, this.set, e)
                }
            }, e.exports = function(e) {
                o(e);
                var t = +e.size;
                if (t != t) throw new u(s);
                var n = i(t);
                if (n < 0) throw new c(s);
                return new h(e, n)
            }
        },
        2189: (e, t, n) => {
            "use strict";
            var r = n(47),
                o = n(9565),
                a = n(7137),
                i = n(7e3),
                l = Object;
            e.exports = i ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var t = r("Symbol");
                return o(t) && a(t.prototype, l(e))
            }
        },
        2227: (e, t, n) => {
            "use strict";
            var r = n(5364),
                o = n(9565),
                a = n(8392),
                i = n(7835)("toStringTag"),
                l = Object,
                s = "Arguments" === a(function() {
                    return arguments
                }());
            e.exports = r ? a : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (e) {}
                }(t = l(e), i)) ? n : s ? a(t) : "Object" === (r = a(t)) && o(t.callee) ? "Arguments" : r
            }
        },
        2240: (e, t, n) => {
            "use strict";
            var r = n(8392);
            e.exports = Array.isArray || function(e) {
                return "Array" === r(e)
            }
        },
        2245: e => {
            "use strict";
            e.exports = {}
        },
        2283: e => {
            "use strict";
            e.exports = function(e) {
                var t = document.createElement("style");
                return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
            }
        },
        2288: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".floating-button-qY_0s {\n  z-index: 99;\n  position: absolute;\n  top: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 5rem;\n  padding: 0 1rem;\n  border-radius: 0.75rem;\n  border: 0.2rem solid transparent;\n  background-color: #0c0c10;\n  cursor: pointer;\n}\n.floating-button-qY_0s > * {\n  margin: 0.5rem;\n}\n.floating-button-qY_0s.left-NN9mr {\n  left: 2rem;\n}\n.floating-button-qY_0s.right-JpCg4 {\n  right: 2rem;\n}\n.floating-button-qY_0s:hover {\n  border: 0.2rem solid rgba(255, 255, 255, 0.5);\n}\n.floating-button-qY_0s .icon-a5Zr_ {\n  height: calc(3rem - 1rem);\n  width: calc(3rem - 1rem);\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.floating-button-qY_0s .label-LgHt6 {\n  font-size: 1.5rem;\n  font-weight: 500;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n", ""]), i.locals = {
                "floating-button": "floating-button-qY_0s",
                left: "left-NN9mr",
                right: "right-JpCg4",
                icon: "icon-a5Zr_",
                label: "label-LgHt6"
            };
            const l = i
        },
        2331: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(6597),
                a = n(5517),
                i = n(5644),
                l = n(1853),
                s = n(6641),
                c = n(4265),
                u = n(1141),
                d = Object.getOwnPropertyDescriptor;
            t.f = r ? d : function(e, t) {
                if (e = l(e), t = s(t), u) try {
                    return d(e, t)
                } catch (e) {}
                if (c(e, t)) return i(!o(a.f, e, t), e[t])
            }
        },
        2369: (e, t, n) => {
            "use strict";
            var r, o, a, i = n(5735),
                l = n(9565),
                s = n(8666),
                c = n(6448),
                u = n(7403),
                d = n(5088),
                h = n(7835),
                f = n(8867),
                v = h("iterator"),
                p = !1;
            [].keys && ("next" in (a = [].keys()) ? (o = u(u(a))) !== Object.prototype && (r = o) : p = !0), !s(r) || i((function() {
                var e = {};
                return r[v].call(e) !== e
            })) ? r = {} : f && (r = c(r)), l(r[v]) || d(r, v, (function() {
                return this
            })), e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: p
            }
        },
        2420: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".list-pGB6u {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n.list-pGB6u > * {\n  margin: 0.5em 0 0.5em 0;\n}\n.list-pGB6u > :first-child {\n  margin-top: 0;\n}\n.list-pGB6u > :last-child {\n  margin-bottom: 0;\n}\n", ""]), i.locals = {
                list: "list-pGB6u"
            };
            const l = i
        },
        2445: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a),
                l = n(6252),
                s = n.n(l),
                c = new URL(n(9039), n.b),
                u = i()(o()),
                d = s()(c);
            u.push([e.id, `.option-pCk4g {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  height: 6em;\n  width: 25rem;\n  padding: 0 2em;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.03);\n  user-select: none;\n  transition: background-color 0.1s ease-out;\n  overflow: hidden;\n}\n.option-pCk4g > * {\n  margin: 0 0.5rem 0 0.5rem;\n}\n.option-pCk4g > :first-child {\n  margin-left: 0;\n}\n.option-pCk4g > :last-child {\n  margin-right: 0;\n}\n.option-pCk4g .icon-QwWkt {\n  flex: 0 0 auto;\n  height: calc(2.5rem - 1rem);\n  color: hsla(0, 0%, 100%, 0.5);\n  transition: color 0.1s ease-out;\n}\n.option-pCk4g .label-ZUqct {\n  flex: 1 1 auto;\n  font-size: 1.5rem;\n  font-weight: 600;\n  line-height: 3rem;\n  color: hsla(0, 0%, 100%, 0.5);\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  transition: color 0.1s ease-out;\n}\n.option-pCk4g .tag-Rejkz {\n  flex: 0 0 auto;\n  max-width: 10rem;\n  height: 2rem;\n  line-height: 2rem;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  padding: 0 0.75rem;\n  border-radius: 0.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  background-color: rgba(255, 255, 255, 0.03);\n  overflow: hidden;\n}\n.option-pCk4g .color-Id_0e {\n  position: relative;\n  height: 30px;\n  width: 30px;\n  border-radius: 100%;\n  border: 0.2rem solid hsla(0, 0%, 100%, 0.9);\n  background: url(${d});\n  background-position: 0 0;\n  background-size: 45% 45%;\n  overflow: hidden;\n}\n.option-pCk4g .color-Id_0e .inner-lIueq {\n  height: 100%;\n  width: 100%;\n}\n.option-pCk4g .toggle-EKrug {\n  position: relative;\n  width: 4rem;\n  height: 2rem;\n  border-radius: 3rem;\n  background-color: hsla(0, 0%, 100%, 0.2);\n  transition: background-color 0.1s ease-out;\n}\n.option-pCk4g .toggle-EKrug.checked {\n  background-color: hsl(147.7, 68%, 51.7%);\n}\n.option-pCk4g .toggle-EKrug.checked::before {\n  transform: translateX(1.8em);\n}\n.option-pCk4g .toggle-EKrug::before {\n  position: absolute;\n  content: "";\n  height: 1.6rem;\n  width: 1.6rem;\n  left: 0.3rem;\n  bottom: 0.2rem;\n  border-radius: 50%;\n  background-color: hsla(0, 0%, 100%, 0.9);\n  transition: transform 0.1s ease-out;\n}\n.option-pCk4g .arrow-icon-rVnLX {\n  position: absolute;\n  right: 1rem;\n  height: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.option-pCk4g.selected-nAGeS {\n  padding-left: 3.5rem;\n}\n.option-pCk4g.selected-nAGeS::before {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 1.5rem;\n  height: 0.75rem;\n  width: 0.75rem;\n  margin-top: -0.375rem;\n  border-radius: 100%;\n  background-color: hsl(147.7, 68%, 51.7%);\n}\n.option-pCk4g[focused],\n.option-pCk4g:hover,\n.option-pCk4g.active-ZiGRo {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5) inset;\n}\n.option-pCk4g[focused] .label-ZUqct,\n.option-pCk4g:hover .label-ZUqct,\n.option-pCk4g.active-ZiGRo .label-ZUqct,\n.option-pCk4g[focused] .icon-QwWkt,\n.option-pCk4g:hover .icon-QwWkt,\n.option-pCk4g.active-ZiGRo .icon-QwWkt,\n.option-pCk4g[focused] .arrow-icon-rVnLX,\n.option-pCk4g:hover .arrow-icon-rVnLX,\n.option-pCk4g.active-ZiGRo .arrow-icon-rVnLX {\n  color: hsla(0, 0%, 100%, 0.9);\n}\n`, ""]), u.locals = {
                option: "option-pCk4g",
                icon: "icon-QwWkt",
                label: "label-ZUqct",
                tag: "tag-Rejkz",
                color: "color-Id_0e",
                inner: "inner-lIueq",
                toggle: "toggle-EKrug",
                "arrow-icon": "arrow-icon-rVnLX",
                selected: "selected-nAGeS",
                active: "active-ZiGRo"
            };
            const h = u
        },
        2465: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(2786),
                a = n(6415),
                i = n(4479),
                l = n(8462),
                s = n(2679),
                c = l((function() {
                    var e = this.iterator,
                        t = a(r(this.next, e));
                    if (!(this.done = !!t.done)) return s(e, this.mapper, [t.value, this.counter++], !0)
                }));
            e.exports = function(e) {
                return a(this), o(e), new c(i(this), {
                    mapper: e
                })
            }
        },
        2526: (e, t, n) => {
            "use strict";
            var r = n(214);
            e.exports = function(e) {
                return r(e.length)
            }
        },
        2597: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6041);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("isDisjointFrom", (function(e) {
                    return !e
                }))
            }, {
                isDisjointFrom: o
            })
        },
        2608: e => {
            "use strict";
            e.exports = function(e) {
                return e[1]
            }
        },
        2669: e => {
            "use strict";
            var t = TypeError;
            e.exports = function(e) {
                if (e > 9007199254740991) throw t("Maximum allowed index exceeded");
                return e
            }
        },
        2679: (e, t, n) => {
            "use strict";
            var r = n(6415),
                o = n(9515);
            e.exports = function(e, t, n, a) {
                try {
                    return a ? t(r(n)[0], n[1]) : t(n)
                } catch (t) {
                    o(e, "throw", t)
                }
            }
        },
        2737: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4520),
                a = n(4738),
                i = RangeError,
                l = String.fromCharCode,
                s = String.fromCodePoint,
                c = o([].join);
            r({
                target: "String",
                stat: !0,
                arity: 1,
                forced: !!s && 1 !== s.length
            }, {
                fromCodePoint: function(e) {
                    for (var t, n = [], r = arguments.length, o = 0; r > o;) {
                        if (t = +arguments[o++], a(t, 1114111) !== t) throw new i(t + " is not a valid code point");
                        n[o] = t < 65536 ? l(t) : l(55296 + ((t -= 65536) >> 10), t % 1024 + 56320)
                    }
                    return c(n, "")
                }
            })
        },
        2786: (e, t, n) => {
            "use strict";
            var r = n(9565),
                o = n(4095),
                a = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new a(o(e) + " is not a function")
            }
        },
        2798: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(2331).f,
                a = n(9123),
                i = n(5088),
                l = n(1201),
                s = n(3876),
                c = n(8292);
            e.exports = function(e, t) {
                var n, u, d, h, f, v = e.target,
                    p = e.global,
                    m = e.stat;
                if (n = p ? r : m ? r[v] || l(v, {}) : r[v] && r[v].prototype)
                    for (u in t) {
                        if (h = t[u], d = e.dontCallGetSet ? (f = o(n, u)) && f.value : n[u], !c(p ? u : v + (m ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof h == typeof d) continue;
                            s(h, d)
                        }(e.sham || d && d.sham) && a(h, "sham", !0), i(n, u, h, e)
                    }
            }
        },
        2836: (e, t, n) => {
            "use strict";
            var r = n(7835)("iterator"),
                o = !1;
            try {
                var a = 0,
                    i = {
                        next: function() {
                            return {
                                done: !!a++
                            }
                        },
                        return: function() {
                            o = !0
                        }
                    };
                i[r] = function() {
                    return this
                }, Array.from(i, (function() {
                    throw 2
                }))
            } catch (e) {}
            e.exports = function(e, t) {
                try {
                    if (!t && !o) return !1
                } catch (e) {
                    return !1
                }
                var n = !1;
                try {
                    var a = {};
                    a[r] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(a)
                } catch (e) {}
                return n
            }
        },
        2890: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".scroll-container-vsSy7 {\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.scroll-container-vsSy7.overflow-ULgjm {\n  overflow: visible;\n}\n.scroll-container-vsSy7 .scroll-content-fpG1K {\n  position: relative;\n  will-change: transform;\n  transition: transform 0.25s ease-out;\n}\n.scroll-container-vsSy7 .control-I71Cd {\n  z-index: 99;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 10rem;\n  display: flex;\n  align-items: center;\n  padding: 1rem;\n  opacity: 0;\n  user-select: none;\n  transition: opacity 0.1s ease-out;\n}\n.scroll-container-vsSy7 .control-I71Cd.left-Xbb1U {\n  left: 0;\n  justify-content: flex-start;\n}\n.scroll-container-vsSy7 .control-I71Cd.right-GM7y0 {\n  right: 0;\n  justify-content: flex-end;\n}\n.scroll-container-vsSy7 .control-I71Cd .icon-etnFR {\n  height: 5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.scroll-container-vsSy7 .control-I71Cd:hover {\n  opacity: 1 !important;\n}\n.scroll-container-vsSy7 .control-I71Cd:hover.left-Xbb1U {\n  background: linear-gradient(-90deg, transparent, rgba(255, 255, 255, 0.1));\n}\n.scroll-container-vsSy7 .control-I71Cd:hover.right-GM7y0 {\n  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1));\n}\n.scroll-container-vsSy7:hover .control-I71Cd {\n  opacity: 0.5;\n}\n", ""]), i.locals = {
                "scroll-container": "scroll-container-vsSy7",
                overflow: "overflow-ULgjm",
                "scroll-content": "scroll-content-fpG1K",
                control: "control-I71Cd",
                left: "left-Xbb1U",
                right: "right-GM7y0",
                icon: "icon-etnFR"
            };
            const l = i
        },
        2934: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(7085),
                a = Math.floor,
                i = r("".charAt),
                l = r("".replace),
                s = r("".slice),
                c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                u = /\$([$&'`]|\d{1,2})/g;
            e.exports = function(e, t, n, r, d, h) {
                var f = n + e.length,
                    v = r.length,
                    p = u;
                return void 0 !== d && (d = o(d), p = c), l(h, p, (function(o, l) {
                    var c;
                    switch (i(l, 0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return s(t, 0, n);
                        case "'":
                            return s(t, f);
                        case "<":
                            c = d[s(l, 1, -1)];
                            break;
                        default:
                            var u = +l;
                            if (0 === u) return o;
                            if (u > v) {
                                var h = a(u / 10);
                                return 0 === h ? o : h <= v ? void 0 === r[h - 1] ? i(l, 1) : r[h - 1] + i(l, 1) : o
                            }
                            c = r[u - 1]
                    }
                    return void 0 === c ? "" : c
                }))
            }
        },
        2944: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(47),
                a = n(8867),
                i = n(702),
                l = n(2124).CONSTRUCTOR,
                s = n(5558),
                c = o("Promise"),
                u = a && !l;
            r({
                target: "Promise",
                stat: !0,
                forced: a || l
            }, {
                resolve: function(e) {
                    return s(u && this === c ? i : this, e)
                }
            })
        },
        3059: (e, t, n) => {
            "use strict";
            var r = n(7821);
            e.exports = function(e) {
                var t = +e;
                return t != t || 0 === t ? 0 : r(t)
            }
        },
        3080: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(154);
            r({
                target: "Set",
                proto: !0,
                real: !0,
                forced: !n(9340)("symmetricDifference")
            }, {
                symmetricDifference: o
            })
        },
        3238: (e, t, n) => {
            "use strict";
            n(7898)
        },
        3289: (e, t, n) => {
            "use strict";
            var r = n(8447);
            e.exports = "NODE" === r
        },
        3311: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(5011);
            r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== o
            }, {
                exec: o
            })
        },
        3350: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => s,
                z: () => c
            });
            var r = n(6886),
                o = (n(9144), n(5658), n(5073), n(5861)),
                a = n.n(o);
            const i = () => {
                    let e, t;
                    return {
                        load: async () => {
                            const {
                                default: r
                            } = await n.e(9114).then(n.t.bind(n, 2134, 23));
                            e = new r, t = new(a())(window, e)
                        },
                        start: e => t ? t.call(["init"], [e]) : Promise.reject("Bridge not initialized"),
                        getState: e => t ? t.call(["getState"], [e]) : Promise.reject("Bridge not initialized"),
                        dispatch: (e, n) => t ? t.call(["dispatch"], [e, n, location.hash]) : Promise.reject("Bridge not initialized"),
                        decodeStream: e => t ? t.call(["decodeStream"], [e]) : Promise.reject("Bridge not initialized"),
                        stop: () => {
                            e && e.terminate()
                        }
                    }
                },
                l = (0, r.q6)({}),
                s = e => {
                    const t = i(),
                        [n, o] = (0, r.n5)(!1),
                        [a, s] = (0, r.n5)();
                    return (0, r.Rc)((async () => {
                        if (!window.core) try {
                            await t.load(), await t.start(e.appInfo), o(!0), s(null), window.core = t
                        } catch (e) {
                            console.error("Failed to initialize core:", e), o(!1), s(e)
                        }
                    })), (0, r.Ki)((() => {
                        o(!1), s(null), t.stop(), window.onCoreEvent = null, window.core = null
                    })), (0, r.a0)(l.Provider, {
                        value: {
                            transport: t,
                            onCoreEvent: e => {
                                window.onCoreEvent = e
                            }
                        },
                        get children() {
                            return (0, r.a0)(r.dO, {
                                get children() {
                                    return [(0, r.a0)(r.YG, {
                                        get when() {
                                            return a()
                                        },
                                        get children() {
                                            return e.error
                                        }
                                    }), (0, r.a0)(r.YG, {
                                        get when() {
                                            return n()
                                        },
                                        get children() {
                                            return e.children
                                        }
                                    }), (0, r.a0)(r.YG, {
                                        get when() {
                                            return (0, r.To)((() => !a()))() && !n()
                                        },
                                        get children() {
                                            return e.loading
                                        }
                                    })]
                                }
                            })
                        }
                    })
                },
                c = () => (0, r.NT)(l)
        },
        3351: (e, t, n) => {
            "use strict";
            n(4164)
        },
        3363: (e, t, n) => {
            "use strict";
            var r = n(5088),
                o = n(4520),
                a = n(4935),
                i = n(500),
                l = URLSearchParams,
                s = l.prototype,
                c = o(s.append),
                u = o(s.delete),
                d = o(s.forEach),
                h = o([].push),
                f = new l("a=1&a=2&b=3");
            f.delete("a", 1), f.delete("b", void 0), f + "" != "a=2" && r(s, "delete", (function(e) {
                var t = arguments.length,
                    n = t < 2 ? void 0 : arguments[1];
                if (t && void 0 === n) return u(this, e);
                var r = [];
                d(this, (function(e, t) {
                    h(r, {
                        key: t,
                        value: e
                    })
                })), i(t, 1);
                for (var o, l = a(e), s = a(n), f = 0, v = 0, p = !1, m = r.length; f < m;) o = r[f++], p || o.key === l ? (p = !0, u(this, o.key)) : v++;
                for (; v < m;)(o = r[v++]).key === l && o.value === s || c(this, o.key, o.value)
            }), {
                enumerable: !0,
                unsafe: !0
            })
        },
        3455: (e, t, n) => {
            "use strict";
            var r = n(4633),
                o = n(9544),
                a = r("keys");
            e.exports = function(e) {
                return a[e] || (a[e] = o(e))
            }
        },
        3500: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".text-area-OM_hT {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  font-family: 'PlusJakartaSans';\n  font-size: 1.5rem;\n  font-weight: 600;\n  padding: 1.5rem 2rem;\n  border: none;\n  border-radius: 1rem;\n  color: hsla(0, 0%, 100%, 0.5);\n  background-color: rgba(255, 255, 255, 0.03);\n  outline: none;\n  resize: none;\n}\n.text-area-OM_hT[focused] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.5);\n}\n", ""]), i.locals = {
                "text-area": "text-area-OM_hT"
            };
            const l = i
        },
        3531: (e, t, n) => {
            "use strict";
            n(6854)
        },
        3569: e => {
            "use strict";
            var t = function() {
                this.head = null, this.tail = null
            };
            t.prototype = {
                add: function(e) {
                    var t = {
                            item: e,
                            next: null
                        },
                        n = this.tail;
                    n ? n.next = t : this.head = t, this.tail = t
                },
                get: function() {
                    var e = this.head;
                    if (e) return null === (this.head = e.next) && (this.tail = null), e.item
                }
            }, e.exports = t
        },
        3575: (e, t, n) => {
            "use strict";
            var r = n(9565),
                o = n(8666),
                a = n(4303);
            e.exports = function(e, t, n) {
                var i, l;
                return a && r(i = t.constructor) && i !== n && o(l = i.prototype) && l !== n.prototype && a(e, l), e
            }
        },
        3621: (e, t, n) => {
            "use strict";
            var r = n(1377);
            e.exports = function(e, t) {
                return new(r(e))(0 === t ? 0 : t)
            }
        },
        3632: e => {
            "use strict";
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        3634: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".modal-En6m9 {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-En6m9 .backdrop-E33G3 {\n  z-index: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(12, 12, 16, 0.8);\n}\n.modal-En6m9 .content-Sbj20 {\n  z-index: 1;\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-height: 55%;\n  width: 35%;\n  padding: 2rem 3rem;\n  border-radius: 0.75rem;\n  background-color: #141418;\n}\n.modal-En6m9 .content-Sbj20 > * {\n  margin: 0.5rem 0 0.5rem 0;\n}\n.modal-En6m9 .content-Sbj20 > :first-child {\n  margin-top: 0;\n}\n.modal-En6m9 .content-Sbj20 > :last-child {\n  margin-bottom: 0;\n}\n.modal-En6m9 .content-Sbj20 .title-oqPGg {\n  height: calc(4rem - 1rem);\n  margin-bottom: 1rem;\n  font-size: 2.25rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.modal-En6m9 .content-Sbj20 .image {\n  height: 15rem;\n}\n.modal-En6m9 .content-Sbj20 .message {\n  font-size: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n  margin-bottom: 1rem;\n}\n.modal-En6m9 .content-Sbj20 .buttons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.modal-En6m9 .content-Sbj20 .buttons > * {\n  margin: 0.75rem;\n}\n.modal-En6m9 .content-Sbj20 .buttons .button-HFauh {\n  flex: 0 1 50%;\n}\n.modal-En6m9.expand-cF0mA .content-Sbj20 {\n  max-height: inherit;\n  height: 90%;\n  width: 55%;\n}\n", ""]), i.locals = {
                modal: "modal-En6m9",
                backdrop: "backdrop-E33G3",
                content: "content-Sbj20",
                title: "title-oqPGg",
                button: "button-HFauh",
                expand: "expand-cF0mA"
            };
            const l = i
        },
        3716: (e, t, n) => {
            "use strict";
            n(3311);
            var r = n(6597),
                o = n(5088),
                a = n(5011),
                i = n(5735),
                l = n(7835),
                s = n(9123),
                c = l("species"),
                u = RegExp.prototype;
            e.exports = function(e, t, n, d) {
                var h = l(e),
                    f = !i((function() {
                        var t = {};
                        return t[h] = function() {
                            return 7
                        }, 7 !== "" [e](t)
                    })),
                    v = f && !i((function() {
                        var t = !1,
                            n = /a/;
                        return "split" === e && ((n = {}).constructor = {}, n.constructor[c] = function() {
                            return n
                        }, n.flags = "", n[h] = /./ [h]), n.exec = function() {
                            return t = !0, null
                        }, n[h](""), !t
                    }));
                if (!f || !v || n) {
                    var p = /./ [h],
                        m = t(h, "" [e], (function(e, t, n, o, i) {
                            var l = t.exec;
                            return l === a || l === u.exec ? f && !i ? {
                                done: !0,
                                value: r(p, t, n, o)
                            } : {
                                done: !0,
                                value: r(e, n, t, o)
                            } : {
                                done: !1
                            }
                        }));
                    o(String.prototype, e, m[0]), o(u, h, m[1])
                }
                d && s(u[h], "sham", !0)
            }
        },
        3735: (e, t, n) => {
            "use strict";
            e.exports = function(e) {
                var t = n.nc;
                t && e.setAttribute("nonce", t)
            }
        },
        3766: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(170),
                a = n(877),
                i = n(2165);
            e.exports = function(e) {
                var t = r(this),
                    n = i(e);
                return !(o(t) > n.size) && !1 !== a(t, (function(e) {
                    if (!n.includes(e)) return !1
                }), !0)
            }
        },
        3769: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(4520),
                a = n(7426),
                i = URLSearchParams.prototype,
                l = o(i.forEach);
            r && !("size" in i) && a(i, "size", {
                get: function() {
                    var e = 0;
                    return l(this, (function() {
                        e++
                    })), e
                },
                configurable: !0,
                enumerable: !0
            })
        },
        3876: (e, t, n) => {
            "use strict";
            var r = n(4265),
                o = n(8927),
                a = n(2331),
                i = n(553);
            e.exports = function(e, t, n) {
                for (var l = o(t), s = i.f, c = a.f, u = 0; u < l.length; u++) {
                    var d = l[u];
                    r(e, d) || n && r(n, d) || s(e, d, c(t, d))
                }
            }
        },
        3998: (e, t, n) => {
            "use strict";
            var r = n(5735);
            e.exports = function(e, t) {
                var n = [][e];
                return !!n && r((function() {
                    n.call(null, t || function() {
                        return 1
                    }, 1)
                }))
            }
        },
        4095: e => {
            "use strict";
            var t = String;
            e.exports = function(e) {
                try {
                    return t(e)
                } catch (e) {
                    return "Object"
                }
            }
        },
        4145: (e, t, n) => {
            "use strict";
            var r = n(47),
                o = n(4265),
                a = n(9123),
                i = n(7137),
                l = n(4303),
                s = n(3876),
                c = n(5256),
                u = n(3575),
                d = n(4867),
                h = n(6264),
                f = n(4387),
                v = n(6724),
                p = n(8867);
            e.exports = function(e, t, n, m) {
                var g = "stackTraceLimit",
                    y = m ? 2 : 1,
                    b = e.split("."),
                    w = b[b.length - 1],
                    k = r.apply(null, b);
                if (k) {
                    var x = k.prototype;
                    if (!p && o(x, "cause") && delete x.cause, !n) return k;
                    var S = r("Error"),
                        A = t((function(e, t) {
                            var n = d(m ? t : e, void 0),
                                r = m ? new k(e) : new k;
                            return void 0 !== n && a(r, "message", n), f(r, A, r.stack, 2), this && i(x, this) && u(r, this, A), arguments.length > y && h(r, arguments[y]), r
                        }));
                    if (A.prototype = x, "Error" !== w ? l ? l(A, S) : s(A, S, {
                            name: !0
                        }) : v && g in k && (c(A, k, g), c(A, k, "prepareStackTrace")), s(A, k), !p) try {
                        x.name !== w && a(x, "name", w), x.constructor = A
                    } catch (e) {}
                    return A
                }
            }
        },
        4164: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4340),
                a = n(2786),
                i = n(6415),
                l = n(4479);
            r({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                every: function(e) {
                    i(this), a(e);
                    var t = l(this),
                        n = 0;
                    return !o(t, (function(t, r) {
                        if (!e(t, n++)) return r()
                    }), {
                        IS_RECORD: !0,
                        INTERRUPTED: !0
                    }).stopped
                }
            })
        },
        4265: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(7085),
                a = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, t) {
                return a(o(e), t)
            }
        },
        4303: (e, t, n) => {
            "use strict";
            var r = n(1978),
                o = n(8666),
                a = n(5262),
                i = n(2042);
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = r(Object.prototype, "__proto__", "set"))(n, []), t = n instanceof Array
                } catch (e) {}
                return function(n, r) {
                    return a(n), i(r), o(n) ? (t ? e(n, r) : n.__proto__ = r, n) : n
                }
            }() : void 0)
        },
        4340: (e, t, n) => {
            "use strict";
            var r = n(312),
                o = n(6597),
                a = n(6415),
                i = n(4095),
                l = n(5289),
                s = n(2526),
                c = n(7137),
                u = n(6601),
                d = n(4715),
                h = n(9515),
                f = TypeError,
                v = function(e, t) {
                    this.stopped = e, this.result = t
                },
                p = v.prototype;
            e.exports = function(e, t, n) {
                var m, g, y, b, w, k, x, S = n && n.that,
                    A = !(!n || !n.AS_ENTRIES),
                    T = !(!n || !n.IS_RECORD),
                    M = !(!n || !n.IS_ITERATOR),
                    B = !(!n || !n.INTERRUPTED),
                    E = r(t, S),
                    j = function(e) {
                        return m && h(m, "normal", e), new v(!0, e)
                    },
                    C = function(e) {
                        return A ? (a(e), B ? E(e[0], e[1], j) : E(e[0], e[1])) : B ? E(e, j) : E(e)
                    };
                if (T) m = e.iterator;
                else if (M) m = e;
                else {
                    if (!(g = d(e))) throw new f(i(e) + " is not iterable");
                    if (l(g)) {
                        for (y = 0, b = s(e); b > y; y++)
                            if ((w = C(e[y])) && c(p, w)) return w;
                        return new v(!1)
                    }
                    m = u(e, g)
                }
                for (k = T ? e.next : m.next; !(x = o(k, m)).done;) {
                    try {
                        w = C(x.value)
                    } catch (e) {
                        h(m, "throw", e)
                    }
                    if ("object" == typeof w && w && c(p, w)) return w
                }
                return new v(!1)
            }
        },
        4373: (e, t, n) => {
            "use strict";
            var r = n(8867),
                o = n(6024),
                a = n(1201),
                i = "__core-js_shared__",
                l = e.exports = o[i] || a(i, {});
            (l.versions || (l.versions = [])).push({
                version: "3.40.0",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        4387: (e, t, n) => {
            "use strict";
            var r = n(9123),
                o = n(1497),
                a = n(315),
                i = Error.captureStackTrace;
            e.exports = function(e, t, n, l) {
                a && (i ? i(e, t) : r(e, "stack", o(n, l)))
            }
        },
        4430: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(47),
                a = n(1329),
                i = n(6597),
                l = n(4520),
                s = n(5735),
                c = n(9565),
                u = n(2189),
                d = n(5432),
                h = n(2109),
                f = n(7255),
                v = String,
                p = o("JSON", "stringify"),
                m = l(/./.exec),
                g = l("".charAt),
                y = l("".charCodeAt),
                b = l("".replace),
                w = l(1..toString),
                k = /[\uD800-\uDFFF]/g,
                x = /^[\uD800-\uDBFF]$/,
                S = /^[\uDC00-\uDFFF]$/,
                A = !f || s((function() {
                    var e = o("Symbol")("stringify detection");
                    return "[null]" !== p([e]) || "{}" !== p({
                        a: e
                    }) || "{}" !== p(Object(e))
                })),
                T = s((function() {
                    return '"\\udf06\\ud834"' !== p("\udf06\ud834") || '"\\udead"' !== p("\udead")
                })),
                M = function(e, t) {
                    var n = d(arguments),
                        r = h(t);
                    if (c(r) || void 0 !== e && !u(e)) return n[1] = function(e, t) {
                        if (c(r) && (t = i(r, this, v(e), t)), !u(t)) return t
                    }, a(p, null, n)
                },
                B = function(e, t, n) {
                    var r = g(n, t - 1),
                        o = g(n, t + 1);
                    return m(x, e) && !m(S, o) || m(S, e) && !m(x, r) ? "\\u" + w(y(e, 0), 16) : e
                };
            p && r({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: A || T
            }, {
                stringify: function(e, t, n) {
                    var r = d(arguments),
                        o = a(A ? M : p, null, r);
                    return T && "string" == typeof o ? b(o, k, B) : o
                }
            })
        },
        4479: e => {
            "use strict";
            e.exports = function(e) {
                return {
                    iterator: e,
                    next: e.next,
                    done: !1
                }
            }
        },
        4490: (e, t, n) => {
            "use strict";
            var r = n(6886),
                o = n(8224),
                a = n(3350),
                i = n(5994),
                l = n(1407),
                s = n(7253),
                c = n(980),
                u = n(6934),
                d = n(9270),
                h = n(1043),
                f = (n(9144), n(5658), n(9784), n(7961), n(5073), n(6706)),
                v = n(6533),
                p = n(4922),
                m = (0, o.vs)("<div class=message>Are you sure you want to quit the app?"),
                g = (0, o.vs)("<div class=buttons>");
            const y = e => {
                const {
                    t: t
                } = (0, s.B)();
                return (0, r.a0)(h.aF, {
                    get onClose() {
                        return e.onCancel
                    },
                    get children() {
                        return [m(), (n = g(), (0, o.Yr)(n, (0, r.a0)(h.$n, {
                            get label() {
                                return t("QUIT")
                            },
                            get onPress() {
                                return e.onConfirm
                            }
                        }), null), (0, o.Yr)(n, (0, r.a0)(h.$n, {
                            get label() {
                                return t("BUTTON_CANCEL")
                            },
                            autoFocus: !0,
                            get onPress() {
                                return e.onCancel
                            }
                        }), null), n)];
                        var n
                    }
                })
            };
            var b = n(656);
            const w = (0, r.RZ)((() => n.e(5710).then(n.bind(n, 6042)))),
                k = (0, r.RZ)((() => n.e(6415).then(n.bind(n, 5478)))),
                x = (0, r.RZ)((() => n.e(8842).then(n.bind(n, 3447)))),
                S = (0, r.RZ)((() => n.e(7962).then(n.bind(n, 1363)))),
                A = (0, r.RZ)((() => n.e(7920).then(n.bind(n, 2398)))),
                T = (0, r.RZ)((() => n.e(6966).then(n.bind(n, 1285)))),
                M = (0, r.RZ)((() => Promise.all([n.e(1477), n.e(1088)]).then(n.bind(n, 9032)))),
                B = (0, r.RZ)((() => n.e(187).then(n.bind(n, 7135)))),
                E = (0, r.RZ)((() => n.e(6472).then(n.bind(n, 4641)))),
                j = () => {
                    const {
                        setLocale: e
                    } = (0, s.B)(), t = (0, c.Vj)(), {
                        ctx: n
                    } = (0, i.gK)(), o = (e => {
                        const t = () => e.isAuthenticated();
                        return [{
                            name: "login",
                            path: "/login",
                            component: T,
                            data: {
                                hideNavbar: !0
                            }
                        }, {
                            name: "search",
                            path: "/search",
                            component: B,
                            guard: t
                        }, {
                            name: "home",
                            path: "/home",
                            component: S,
                            guard: t
                        }, {
                            name: "discover",
                            path: "/discover",
                            component: x,
                            guard: t
                        }, {
                            name: "discover",
                            path: "/discover/:type",
                            component: x,
                            guard: t
                        }, {
                            name: "discover",
                            path: "/discover/:transportUrl/:type/:id",
                            component: x,
                            guard: t
                        }, {
                            name: "library",
                            path: "/library/:type?",
                            component: A,
                            guard: t
                        }, {
                            name: "addons",
                            path: "/addons",
                            component: w,
                            guard: t
                        }, {
                            name: "settings",
                            path: "/settings",
                            component: E,
                            guard: t
                        }, {
                            name: "details",
                            path: "/detail/:type/:metaId/:videoId?",
                            component: k,
                            guard: t
                        }, {
                            name: "player",
                            path: "/player/:stream",
                            component: M,
                            guard: t,
                            data: {
                                hideNavbar: !0
                            }
                        }, {
                            name: "player",
                            path: "/player/:stream/:streamTransportUrl/:metaTransportUrl/:type/:id/:videoId?",
                            component: M,
                            guard: t,
                            data: {
                                hideNavbar: !0
                            }
                        }]
                    })(n), {
                        interfaceLanguage: a
                    } = (0, f.J)(n.settings), [l, u, d] = (0, p.zD)(!1), m = () => {
                        t.quit()
                    }, g = () => {
                        t.isTitan || t.isNetTV ? u() : m()
                    };
                    return (0, r.EH)((async () => {
                        n.isAuthenticated() && (await n.syncUser(), await n.syncAddons(), await n.syncLibrary(), await n.syncNotifications())
                    })), (0, r.EH)((() => {
                        if (a) {
                            const t = a(),
                                n = v.C_.find((({
                                    ietf: e,
                                    alpha3: n
                                }) => e === t || n.includes(t)));
                            n && e(n.ietf)
                        }
                    })), (0, r.Rc)((() => {
                        window.addEventListener("quit", g)
                    })), (0, r.Ki)((() => {
                        window.removeEventListener("quit", g)
                    })), (0, r.a0)(b.Ix, {
                        get defaultRoute() {
                            return o[0]
                        },
                        routes: o,
                        get children() {
                            return [(0, r.a0)(h.Fp, {}), (0, r.a0)(r.wv, {
                                get when() {
                                    return l()
                                },
                                get children() {
                                    return (0, r.a0)(y, {
                                        onConfirm: m,
                                        onCancel: d
                                    })
                                }
                            })]
                        }
                    })
                };
            var C = n(1727),
                I = n.n(C),
                L = n(8156),
                P = n.n(L),
                z = n(9792),
                O = n.n(z),
                R = n(3735),
                N = n.n(R),
                q = n(2283),
                F = n.n(q),
                _ = n(7128),
                D = n.n(_),
                Y = n(244),
                V = {};
            V.styleTagTransform = D(), V.setAttributes = N(), V.insert = O().bind(null, "head"), V.domAPI = P(), V.insertStyleElement = F();
            I()(Y.A, V);
            Y.A && Y.A.locals && Y.A.locals;
            const U = {
                    appVersion: "1.7.6",
                    shellVersion: null
                },
                H = document.getElementById("root");
            (0, o.XX)((() => (0, r.a0)(l.i9, {
                get children() {
                    return (0, r.a0)(s.D, {
                        defaultLocale: "en-US",
                        get children() {
                            return (0, r.a0)(a.X, {
                                appInfo: U,
                                get loading() {
                                    return (0, r.a0)(h.aK, {})
                                },
                                get error() {
                                    return (0, r.a0)(h.uV, {})
                                },
                                get children() {
                                    return (0, r.a0)(i.tv, {
                                        get loading() {
                                            return (0, r.a0)(h.aK, {})
                                        },
                                        get children() {
                                            return (0, r.a0)(d.f, {
                                                get children() {
                                                    return (0, r.a0)(u.a, {
                                                        class: "toast",
                                                        transition: "slide-fade",
                                                        get children() {
                                                            return (0, r.a0)(c.V9, {
                                                                get children() {
                                                                    return (0, r.a0)(j, {})
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })
                        }
                    })
                }
            })), H)
        },
        4520: (e, t, n) => {
            "use strict";
            var r = n(6480),
                o = Function.prototype,
                a = o.call,
                i = r && o.bind.bind(a, a);
            e.exports = r ? i : function(e) {
                return function() {
                    return a.apply(e, arguments)
                }
            }
        },
        4561: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4915);
            r({
                target: "Promise",
                stat: !0,
                forced: n(2124).CONSTRUCTOR
            }, {
                reject: function(e) {
                    var t = o.f(this);
                    return (0, t.reject)(e), t.promise
                }
            })
        },
        4582: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4520),
                a = n(2786),
                i = n(7085),
                l = n(2526),
                s = n(8518),
                c = n(4935),
                u = n(5735),
                d = n(1488),
                h = n(3998),
                f = n(6693),
                v = n(6763),
                p = n(9159),
                m = n(1359),
                g = [],
                y = o(g.sort),
                b = o(g.push),
                w = u((function() {
                    g.sort(void 0)
                })),
                k = u((function() {
                    g.sort(null)
                })),
                x = h("sort"),
                S = !u((function() {
                    if (p) return p < 70;
                    if (!(f && f > 3)) {
                        if (v) return !0;
                        if (m) return m < 603;
                        var e, t, n, r, o = "";
                        for (e = 65; e < 76; e++) {
                            switch (t = String.fromCharCode(e), e) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    n = 3;
                                    break;
                                case 68:
                                case 71:
                                    n = 4;
                                    break;
                                default:
                                    n = 2
                            }
                            for (r = 0; r < 47; r++) g.push({
                                k: t + r,
                                v: n
                            })
                        }
                        for (g.sort((function(e, t) {
                                return t.v - e.v
                            })), r = 0; r < g.length; r++) t = g[r].k.charAt(0), o.charAt(o.length - 1) !== t && (o += t);
                        return "DGBEFHACIJK" !== o
                    }
                }));
            r({
                target: "Array",
                proto: !0,
                forced: w || !k || !x || !S
            }, {
                sort: function(e) {
                    void 0 !== e && a(e);
                    var t = i(this);
                    if (S) return void 0 === e ? y(t) : y(t, e);
                    var n, r, o = [],
                        u = l(t);
                    for (r = 0; r < u; r++) r in t && b(o, t[r]);
                    for (d(o, function(e) {
                            return function(t, n) {
                                return void 0 === n ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, n) || 0 : c(t) > c(n) ? 1 : -1
                            }
                        }(e)), n = l(o), r = 0; r < n;) t[r] = o[r++];
                    for (; r < u;) s(t, r++);
                    return t
                }
            })
        },
        4633: (e, t, n) => {
            "use strict";
            var r = n(4373);
            e.exports = function(e, t) {
                return r[e] || (r[e] = t || {})
            }
        },
        4678: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(9565),
                a = n(8666),
                i = TypeError;
            e.exports = function(e, t) {
                var n, l;
                if ("string" === t && o(n = e.toString) && !a(l = r(n, e))) return l;
                if (o(n = e.valueOf) && !a(l = r(n, e))) return l;
                if ("string" !== t && o(n = e.toString) && !a(l = r(n, e))) return l;
                throw new i("Can't convert object to primitive value")
            }
        },
        4705: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6024);
            r({
                global: !0,
                forced: o.globalThis !== o
            }, {
                globalThis: o
            })
        },
        4715: (e, t, n) => {
            "use strict";
            var r = n(2227),
                o = n(9654),
                a = n(7597),
                i = n(2245),
                l = n(7835)("iterator");
            e.exports = function(e) {
                if (!a(e)) return o(e, l) || o(e, "@@iterator") || i[r(e)]
            }
        },
        4738: (e, t, n) => {
            "use strict";
            var r = n(3059),
                o = Math.max,
                a = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? o(n + t, 0) : a(n, t)
            }
        },
        4791: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(2786),
                i = n(4915),
                l = n(6071),
                s = n(4340);
            r({
                target: "Promise",
                stat: !0,
                forced: n(1137)
            }, {
                race: function(e) {
                    var t = this,
                        n = i.f(t),
                        r = n.reject,
                        c = l((function() {
                            var i = a(t.resolve);
                            s(e, (function(e) {
                                o(i, t, e).then(n.resolve, r)
                            }))
                        }));
                    return c.error && r(c.value), n.promise
                }
            })
        },
        4867: (e, t, n) => {
            "use strict";
            var r = n(4935);
            e.exports = function(e, t) {
                return void 0 === e ? arguments.length < 2 ? "" : t : r(e)
            }
        },
        4883: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(5735),
                a = n(9565),
                i = n(4265),
                l = n(6724),
                s = n(6470).CONFIGURABLE,
                c = n(1986),
                u = n(7173),
                d = u.enforce,
                h = u.get,
                f = String,
                v = Object.defineProperty,
                p = r("".slice),
                m = r("".replace),
                g = r([].join),
                y = l && !o((function() {
                    return 8 !== v((function() {}), "length", {
                        value: 8
                    }).length
                })),
                b = String(String).split("String"),
                w = e.exports = function(e, t, n) {
                    "Symbol(" === p(f(t), 0, 7) && (t = "[" + m(f(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!i(e, "name") || s && e.name !== t) && (l ? v(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), y && n && i(n, "arity") && e.length !== n.arity && v(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && i(n, "constructor") && n.constructor ? l && v(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) {}
                    var r = d(e);
                    return i(r, "source") || (r.source = g(b, "string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = w((function() {
                return a(this) && h(this).source || c(this)
            }), "toString")
        },
        4915: (e, t, n) => {
            "use strict";
            var r = n(2786),
                o = TypeError,
                a = function(e) {
                    var t, n;
                    this.promise = new e((function(e, r) {
                        if (void 0 !== t || void 0 !== n) throw new o("Bad Promise constructor");
                        t = e, n = r
                    })), this.resolve = r(t), this.reject = r(n)
                };
            e.exports.f = function(e) {
                return new a(e)
            }
        },
        4922: (e, t, n) => {
            "use strict";
            n.d(t, {
                aH: () => o,
                SR: () => i,
                WW: () => l,
                v3: () => s,
                zD: () => c,
                eo: () => r,
                k9: () => p,
                ze: () => y
            });
            var r = {};
            n.r(r), n.d(r, {
                all: () => d,
                find: () => h,
                label: () => f,
                matches: () => v
            });
            var o = n(6533),
                a = n(6886);
            const i = e => {
                    let t = null;
                    return (0, a.Ki)((() => {
                        null !== t && (clearTimeout(t), t = null)
                    })), (n, r) => {
                        null !== t && clearTimeout(t), t = setTimeout(n, null != e ? e : r)
                    }
                },
                l = (e, t) => {
                    let n = setInterval(e, t);
                    return (0, a.Ki)((() => {
                        null !== n && (clearInterval(n), n = null)
                    })), n
                },
                s = e => {
                    let t = 0;
                    return (0, a.Ki)((() => {
                        null !== t && (t = null)
                    })), (n, r) => {
                        if (null !== t) {
                            var o;
                            const a = Date.now();
                            a - t > (null !== (o = null != e ? e : r) && void 0 !== o ? o : 0) && (t = a, n())
                        }
                    }
                };
            n(9144), n(5073);
            const c = (e = !1) => {
                const [t, n] = (0, a.n5)(e);
                return [t, () => n(!0), () => n(!1), () => n((e => !e))]
            };
            n(9784), n(7961), n(3238);
            var u = n(9840);
            const d = n.n(u)().all().map((e => ({ ...e,
                    code: e[2],
                    label: e.local,
                    alpha2: e[1],
                    alpha3: [e[2], e["2B"], e["2T"], e[3]],
                    locale: e.locale
                }))),
                h = e => d.find((({
                    alpha2: t,
                    alpha3: n,
                    locale: r
                }) => [t, ...n, r].includes(e))),
                f = e => {
                    const t = h(e);
                    return t ? t.label : e
                },
                v = (e, t) => {
                    const n = h(e),
                        r = h(t);
                    return (null == n ? void 0 : n.name) === (null == r ? void 0 : r.name)
                },
                p = (e, t) => (0, a.EH)((0, a.on)(e, t, {
                    defer: !0
                }));
            n(3311), n(5224), n(1154);
            var m = n(7253);
            const g = e => e.charAt(0).toUpperCase() + e.slice(1),
                y = () => {
                    const {
                        t: e
                    } = (0, m.B)(), t = ({
                        id: t,
                        name: n,
                        addon: r
                    }) => {
                        var o;
                        const a = null == r || null === (o = r.manifest) || void 0 === o || null === (o = o.id) || void 0 === o ? void 0 : o.replaceAll(".", "_");
                        return e(`CATALOG_${a}_${t}`, g(null != n ? n : ""))
                    }, n = e => {
                        const r = t(e);
                        return null != r ? r : n
                    };
                    return {
                        title: ({
                            type: n,
                            title: r,
                            ...o
                        }) => {
                            const a = t(o),
                                i = (t => e(`TYPE_${t}`, g(null != t ? t : "")))(n);
                            return null != r ? r : a && i ? `${a} - ${i}` : null
                        },
                        name: n
                    }
                }
        },
        4935: (e, t, n) => {
            "use strict";
            var r = n(2227),
                o = String;
            e.exports = function(e) {
                if ("Symbol" === r(e)) throw new TypeError("Cannot convert a Symbol value to a string");
                return o(e)
            }
        },
        4949: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(6724),
                a = Object.getOwnPropertyDescriptor;
            e.exports = function(e) {
                if (!o) return r[e];
                var t = a(r, e);
                return t && t.value
            }
        },
        5011: (e, t, n) => {
            "use strict";
            var r, o, a = n(6597),
                i = n(4520),
                l = n(4935),
                s = n(755),
                c = n(181),
                u = n(4633),
                d = n(6448),
                h = n(7173).get,
                f = n(2027),
                v = n(6294),
                p = u("native-string-replace", String.prototype.replace),
                m = RegExp.prototype.exec,
                g = m,
                y = i("".charAt),
                b = i("".indexOf),
                w = i("".replace),
                k = i("".slice),
                x = (o = /b*/g, a(m, r = /a/, "a"), a(m, o, "a"), 0 !== r.lastIndex || 0 !== o.lastIndex),
                S = c.BROKEN_CARET,
                A = void 0 !== /()??/.exec("")[1];
            (x || A || S || f || v) && (g = function(e) {
                var t, n, r, o, i, c, u, f = this,
                    v = h(f),
                    T = l(e),
                    M = v.raw;
                if (M) return M.lastIndex = f.lastIndex, t = a(g, M, T), f.lastIndex = M.lastIndex, t;
                var B = v.groups,
                    E = S && f.sticky,
                    j = a(s, f),
                    C = f.source,
                    I = 0,
                    L = T;
                if (E && (j = w(j, "y", ""), -1 === b(j, "g") && (j += "g"), L = k(T, f.lastIndex), f.lastIndex > 0 && (!f.multiline || f.multiline && "\n" !== y(T, f.lastIndex - 1)) && (C = "(?: " + C + ")", L = " " + L, I++), n = new RegExp("^(?:" + C + ")", j)), A && (n = new RegExp("^" + C + "$(?!\\s)", j)), x && (r = f.lastIndex), o = a(m, E ? n : f, L), E ? o ? (o.input = k(o.input, I), o[0] = k(o[0], I), o.index = f.lastIndex, f.lastIndex += o[0].length) : f.lastIndex = 0 : x && o && (f.lastIndex = f.global ? o.index + o[0].length : r), A && o && o.length > 1 && a(p, o[0], n, (function() {
                        for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (o[i] = void 0)
                    })), o && B)
                    for (o.groups = c = d(null), i = 0; i < B.length; i++) c[(u = B[i])[0]] = o[u[1]];
                return o
            }), e.exports = g
        },
        5029: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, '.option-McFMg {\n  position: relative;\n  height: 4.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 0 2rem;\n}\n.option-McFMg .label-QVjrE {\n  padding-right: 1rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.5);\n  text-transform: capitalize;\n  white-space: nowrap;\n  transition: color 0.1s ease-out;\n}\n.option-McFMg.selected-LWWXM .label-QVjrE {\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.option-McFMg.selected-LWWXM::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  right: 1em;\n  height: 10px;\n  width: 10px;\n  margin-top: -5px;\n  border-radius: 100%;\n  background-color: hsl(147.7, 68%, 51.7%);\n}\n.option-McFMg:hover,\n.option-McFMg[focused] {\n  background-color: #2a2a2d;\n}\n.option-McFMg:hover .label-QVjrE,\n.option-McFMg[focused] .label-QVjrE {\n  color: hsla(0, 0%, 100%, 0.9);\n}\n', ""]), i.locals = {
                option: "option-McFMg",
                label: "label-QVjrE",
                selected: "selected-LWWXM"
            };
            const l = i
        },
        5073: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(3632),
                a = n(504),
                i = n(9144),
                l = n(9123),
                s = n(135),
                c = n(7835)("iterator"),
                u = i.values,
                d = function(e, t) {
                    if (e) {
                        if (e[c] !== u) try {
                            l(e, c, u)
                        } catch (t) {
                            e[c] = u
                        }
                        if (s(e, t, !0), o[t])
                            for (var n in i)
                                if (e[n] !== i[n]) try {
                                    l(e, n, i[n])
                                } catch (t) {
                                    e[n] = i[n]
                                }
                    }
                };
            for (var h in o) d(r[h] && r[h].prototype, h);
            d(a, "DOMTokenList")
        },
        5074: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(4265),
                a = n(7137),
                i = n(755),
                l = RegExp.prototype;
            e.exports = function(e) {
                var t = e.flags;
                return void 0 !== t || "flags" in l || o(e, "flags") || !a(l, e) ? t : r(i, e)
            }
        },
        5088: (e, t, n) => {
            "use strict";
            var r = n(9565),
                o = n(553),
                a = n(4883),
                i = n(1201);
            e.exports = function(e, t, n, l) {
                l || (l = {});
                var s = l.enumerable,
                    c = void 0 !== l.name ? l.name : t;
                if (r(n) && a(n, c, l), l.global) s ? e[t] = n : i(t, n);
                else {
                    try {
                        l.unsafe ? e[t] && (s = !0) : delete e[t]
                    } catch (e) {}
                    s ? e[t] = n : o.f(e, t, {
                        value: n,
                        enumerable: !1,
                        configurable: !l.nonConfigurable,
                        writable: !l.nonWritable
                    })
                }
                return e
            }
        },
        5145: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(8758),
                a = n(553),
                i = n(6415),
                l = n(1853),
                s = n(232);
            t.f = r && !o ? Object.defineProperties : function(e, t) {
                i(e);
                for (var n, r = l(t), o = s(t), c = o.length, u = 0; c > u;) a.f(e, n = o[u++], r[n]);
                return e
            }
        },
        5197: (e, t) => {
            "use strict";
            t.f = Object.getOwnPropertySymbols
        },
        5213: (e, t, n) => {
            "use strict";
            var r = n(7835),
                o = n(6448),
                a = n(553).f,
                i = r("unscopables"),
                l = Array.prototype;
            void 0 === l[i] && a(l, i, {
                configurable: !0,
                value: o(null)
            }), e.exports = function(e) {
                l[i][e] = !0
            }
        },
        5224: (e, t, n) => {
            "use strict";
            var r = n(1329),
                o = n(6597),
                a = n(4520),
                i = n(3716),
                l = n(5735),
                s = n(6415),
                c = n(9565),
                u = n(7597),
                d = n(3059),
                h = n(214),
                f = n(4935),
                v = n(5262),
                p = n(1037),
                m = n(9654),
                g = n(2934),
                y = n(9250),
                b = n(7835)("replace"),
                w = Math.max,
                k = Math.min,
                x = a([].concat),
                S = a([].push),
                A = a("".indexOf),
                T = a("".slice),
                M = "$0" === "a".replace(/./, "$0"),
                B = !!/./ [b] && "" === /./ [b]("a", "$0");
            i("replace", (function(e, t, n) {
                var a = B ? "$" : "$0";
                return [function(e, n) {
                    var r = v(this),
                        a = u(e) ? void 0 : m(e, b);
                    return a ? o(a, e, r, n) : o(t, f(r), e, n)
                }, function(e, o) {
                    var i = s(this),
                        l = f(e);
                    if ("string" == typeof o && -1 === A(o, a) && -1 === A(o, "$<")) {
                        var u = n(t, i, l, o);
                        if (u.done) return u.value
                    }
                    var v = c(o);
                    v || (o = f(o));
                    var m, b = i.global;
                    b && (m = i.unicode, i.lastIndex = 0);
                    for (var M, B = []; null !== (M = y(i, l)) && (S(B, M), b);) {
                        "" === f(M[0]) && (i.lastIndex = p(l, h(i.lastIndex), m))
                    }
                    for (var E, j = "", C = 0, I = 0; I < B.length; I++) {
                        for (var L, P = f((M = B[I])[0]), z = w(k(d(M.index), l.length), 0), O = [], R = 1; R < M.length; R++) S(O, void 0 === (E = M[R]) ? E : String(E));
                        var N = M.groups;
                        if (v) {
                            var q = x([P], O, z, l);
                            void 0 !== N && S(q, N), L = f(r(o, void 0, q))
                        } else L = g(P, l, z, O, N, o);
                        z >= C && (j += T(l, C, z) + L, C = z + P.length)
                    }
                    return j + T(l, C)
                }]
            }), !!l((function() {
                var e = /./;
                return e.exec = function() {
                    var e = [];
                    return e.groups = {
                        a: "7"
                    }, e
                }, "7" !== "".replace(e, "$<a>")
            })) || !M || B)
        },
        5226: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(7085),
                a = n(2526),
                i = n(8071),
                l = n(2669);
            r({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: n(5735)((function() {
                    return 4294967297 !== [].push.call({
                        length: 4294967296
                    }, 1)
                })) || ! function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).push()
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }()
            }, {
                push: function(e) {
                    var t = o(this),
                        n = a(t),
                        r = arguments.length;
                    l(n + r);
                    for (var s = 0; s < r; s++) t[n] = arguments[s], n++;
                    return i(t, n), n
                }
            })
        },
        5256: (e, t, n) => {
            "use strict";
            var r = n(553).f;
            e.exports = function(e, t, n) {
                n in e || r(e, n, {
                    configurable: !0,
                    get: function() {
                        return t[n]
                    },
                    set: function(e) {
                        t[n] = e
                    }
                })
            }
        },
        5262: (e, t, n) => {
            "use strict";
            var r = n(7597),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) throw new o("Can't call method on " + e);
                return e
            }
        },
        5276: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".link-ipF9m {\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n  text-decoration: none;\n  color: hsl(147.7, 68%, 51.7%);\n}\n.link-ipF9m[focused],\n.link-ipF9m:hover {\n  text-decoration: underline;\n  cursor: pointer;\n}\n", ""]), i.locals = {
                link: "link-ipF9m"
            };
            const l = i
        },
        5289: (e, t, n) => {
            "use strict";
            var r = n(7835),
                o = n(2245),
                a = r("iterator"),
                i = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (o.Array === e || i[a] === e)
            }
        },
        5364: (e, t, n) => {
            "use strict";
            var r = {};
            r[n(7835)("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        5432: (e, t, n) => {
            "use strict";
            var r = n(4520);
            e.exports = r([].slice)
        },
        5504: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(7835),
                a = n(6724),
                i = n(8867),
                l = o("iterator");
            e.exports = !r((function() {
                var e = new URL("b?a=1&b=2&c=3", "https://a"),
                    t = e.searchParams,
                    n = new URLSearchParams("a=1&a=2&b=3"),
                    r = "";
                return e.pathname = "c%20d", t.forEach((function(e, n) {
                    t.delete("b"), r += n + e
                })), n.delete("a", 2), n.delete("b", void 0), i && (!e.toJSON || !n.has("a", 1) || n.has("a", 2) || !n.has("a", void 0) || n.has("b")) || !t.size && (i || !a) || !t.sort || "https://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[l] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("https://тест").host || "#%D0%B1" !== new URL("https://a#б").hash || "a1c3" !== r || "x" !== new URL("https://x", void 0).host
            }))
        },
        5517: (e, t) => {
            "use strict";
            var n = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                o = r && !n.call({
                    1: 2
                }, 1);
            t.f = o ? function(e) {
                var t = r(this, e);
                return !!t && t.enumerable
            } : n
        },
        5558: (e, t, n) => {
            "use strict";
            var r = n(6415),
                o = n(8666),
                a = n(4915);
            e.exports = function(e, t) {
                if (r(e), o(t) && t.constructor === e) return t;
                var n = a.f(e);
                return (0, n.resolve)(t), n.promise
            }
        },
        5632: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".select-MDSgl {\n  position: relative;\n  height: 4.5rem;\n  border: none;\n  user-select: none;\n}\n.select-MDSgl .selected-ID7cq {\n  z-index: 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 100%;\n  padding: 0 2rem;\n  padding-left: 1.5rem;\n  border-radius: 1rem;\n  background-color: rgba(255, 255, 255, 0.03);\n  border: 0.2rem solid transparent;\n}\n.select-MDSgl .selected-ID7cq > * {\n  margin: 0.5rem;\n}\n.select-MDSgl .selected-ID7cq .icon-KMvNx {\n  height: calc(2rem - 1rem);\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.select-MDSgl .selected-ID7cq .label-RaFk8 {\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  text-transform: capitalize;\n}\n.select-MDSgl .selected-ID7cq:hover,\n.select-MDSgl .selected-ID7cq[focused] {\n  border: 0.2rem solid rgba(255, 255, 255, 0.5);\n}\n.select-MDSgl .backdrop-rv72E {\n  z-index: 2;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(12, 12, 16, 0.8);\n}\n.select-MDSgl .menu-KiscI {\n  z-index: 3;\n  position: absolute;\n  top: -4.5rem;\n  min-width: 100%;\n  border-radius: 1em;\n  background-color: #141418;\n  overflow: hidden;\n}\n", ""]), i.locals = {
                select: "select-MDSgl",
                selected: "selected-ID7cq",
                icon: "icon-KMvNx",
                label: "label-RaFk8",
                backdrop: "backdrop-rv72E",
                menu: "menu-KiscI"
            };
            const l = i
        },
        5644: e => {
            "use strict";
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        5646: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".catalog-Aq3BF {\n  position: relative;\n  margin-bottom: 4em;\n}\n.catalog-Aq3BF .title-EqKoF {\n  position: relative;\n  padding: 0 5rem;\n  font-size: 2.2rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  margin-bottom: 1rem;\n  user-select: none;\n}\n.catalog-Aq3BF .container-RzC7g {\n  position: relative;\n  height: calc(24rem + 1.5em);\n  padding: 1.5em 0;\n}\n.catalog-Aq3BF .container-RzC7g .content-h3aGC {\n  padding: 0 5rem;\n}\n", ""]), i.locals = {
                catalog: "catalog-Aq3BF",
                title: "title-EqKoF",
                container: "container-RzC7g",
                content: "content-h3aGC"
            };
            const l = i
        },
        5658: (e, t, n) => {
            "use strict";
            n(9996), n(7131), n(5675), n(4791), n(4561), n(2944)
        },
        5675: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(8867),
                a = n(2124).CONSTRUCTOR,
                i = n(702),
                l = n(47),
                s = n(9565),
                c = n(5088),
                u = i && i.prototype;
            if (r({
                    target: "Promise",
                    proto: !0,
                    forced: a,
                    real: !0
                }, {
                    catch: function(e) {
                        return this.then(void 0, e)
                    }
                }), !o && s(i)) {
                var d = l("Promise").prototype.catch;
                u.catch !== d && c(u, "catch", d, {
                    unsafe: !0
                })
            }
        },
        5692: (e, t, n) => {
            "use strict";
            var r = n(255).charAt,
                o = n(4935),
                a = n(7173),
                i = n(1256),
                l = n(7353),
                s = "String Iterator",
                c = a.set,
                u = a.getterFor(s);
            i(String, "String", (function(e) {
                c(this, {
                    type: s,
                    string: o(e),
                    index: 0
                })
            }), (function() {
                var e, t = u(this),
                    n = t.string,
                    o = t.index;
                return o >= n.length ? l(void 0, !0) : (e = r(n, o), t.index += e.length, l(e, !1))
            }))
        },
        5735: e => {
            "use strict";
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (e) {
                    return !0
                }
            }
        },
        5756: (e, t, n) => {
            "use strict";
            var r = n(8392),
                o = n(4520);
            e.exports = function(e) {
                if ("Function" === r(e)) return o(e)
            }
        },
        5861: e => {
            "use strict";

            function t(e) {
                return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, t(e)
            }

            function n() {
                n = function() {
                    return r
                };
                var e, r = {},
                    o = Object.prototype,
                    a = o.hasOwnProperty,
                    i = Object.defineProperty || function(e, t, n) {
                        e[t] = n.value
                    },
                    l = "function" == typeof Symbol ? Symbol : {},
                    s = l.iterator || "@@iterator",
                    c = l.asyncIterator || "@@asyncIterator",
                    u = l.toStringTag || "@@toStringTag";

                function d(e, t, n) {
                    return Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), e[t]
                }
                try {
                    d({}, "")
                } catch (e) {
                    d = function(e, t, n) {
                        return e[t] = n
                    }
                }

                function h(e, t, n, r) {
                    var o = t && t.prototype instanceof b ? t : b,
                        a = Object.create(o.prototype),
                        l = new L(r || []);
                    return i(a, "_invoke", {
                        value: E(e, n, l)
                    }), a
                }

                function f(e, t, n) {
                    try {
                        return {
                            type: "normal",
                            arg: e.call(t, n)
                        }
                    } catch (e) {
                        return {
                            type: "throw",
                            arg: e
                        }
                    }
                }
                r.wrap = h;
                var v = "suspendedStart",
                    p = "suspendedYield",
                    m = "executing",
                    g = "completed",
                    y = {};

                function b() {}

                function w() {}

                function k() {}
                var x = {};
                d(x, s, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    A = S && S(S(P([])));
                A && A !== o && a.call(A, s) && (x = A);
                var T = k.prototype = b.prototype = Object.create(x);

                function M(e) {
                    ["next", "throw", "return"].forEach((function(t) {
                        d(e, t, (function(e) {
                            return this._invoke(t, e)
                        }))
                    }))
                }

                function B(e, n) {
                    function r(o, i, l, s) {
                        var c = f(e[o], e, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                d = u.value;
                            return d && "object" == t(d) && a.call(d, "__await") ? n.resolve(d.__await).then((function(e) {
                                r("next", e, l, s)
                            }), (function(e) {
                                r("throw", e, l, s)
                            })) : n.resolve(d).then((function(e) {
                                u.value = e, l(u)
                            }), (function(e) {
                                return r("throw", e, l, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var o;
                    i(this, "_invoke", {
                        value: function(e, t) {
                            function a() {
                                return new n((function(n, o) {
                                    r(e, t, n, o)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    })
                }

                function E(t, n, r) {
                    var o = v;
                    return function(a, i) {
                        if (o === m) throw Error("Generator is already running");
                        if (o === g) {
                            if ("throw" === a) throw i;
                            return {
                                value: e,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var l = r.delegate;
                            if (l) {
                                var s = j(l, r);
                                if (s) {
                                    if (s === y) continue;
                                    return s
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === v) throw o = g, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = m;
                            var c = f(t, n, r);
                            if ("normal" === c.type) {
                                if (o = r.done ? g : p, c.arg === y) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (o = g, r.method = "throw", r.arg = c.arg)
                        }
                    }
                }

                function j(t, n) {
                    var r = n.method,
                        o = t.iterator[r];
                    if (o === e) return n.delegate = null, "throw" === r && t.iterator.return && (n.method = "return", n.arg = e, j(t, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var a = f(o, t.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, y;
                    var i = a.arg;
                    return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function C(e) {
                    var t = {
                        tryLoc: e[0]
                    };
                    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                }

                function I(e) {
                    var t = e.completion || {};
                    t.type = "normal", delete t.arg, e.completion = t
                }

                function L(e) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], e.forEach(C, this), this.reset(!0)
                }

                function P(n) {
                    if (n || "" === n) {
                        var r = n[s];
                        if (r) return r.call(n);
                        if ("function" == typeof n.next) return n;
                        if (!isNaN(n.length)) {
                            var o = -1,
                                i = function t() {
                                    for (; ++o < n.length;)
                                        if (a.call(n, o)) return t.value = n[o], t.done = !1, t;
                                    return t.value = e, t.done = !0, t
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(t(n) + " is not iterable")
                }
                return w.prototype = k, i(T, "constructor", {
                    value: k,
                    configurable: !0
                }), i(k, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = d(k, u, "GeneratorFunction"), r.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === w || "GeneratorFunction" === (t.displayName || t.name))
                }, r.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, k) : (e.__proto__ = k, d(e, u, "GeneratorFunction")), e.prototype = Object.create(T), e
                }, r.awrap = function(e) {
                    return {
                        __await: e
                    }
                }, M(B.prototype), d(B.prototype, c, (function() {
                    return this
                })), r.AsyncIterator = B, r.async = function(e, t, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new B(h(e, t, n, o), a);
                    return r.isGeneratorFunction(t) ? i : i.next().then((function(e) {
                        return e.done ? e.value : i.next()
                    }))
                }, M(T), d(T, u, "Generator"), d(T, s, (function() {
                    return this
                })), d(T, "toString", (function() {
                    return "[object Generator]"
                })), r.keys = function(e) {
                    var t = Object(e),
                        n = [];
                    for (var r in t) n.push(r);
                    return n.reverse(),
                        function e() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in t) return e.value = r, e.done = !1, e
                            }
                            return e.done = !0, e
                        }
                }, r.values = P, L.prototype = {
                    constructor: L,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(I), !t)
                            for (var n in this) "t" === n.charAt(0) && a.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var n = this;

                        function r(r, o) {
                            return l.type = "throw", l.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var i = this.tryEntries[o],
                                l = i.completion;
                            if ("root" === i.tryLoc) return r("end");
                            if (i.tryLoc <= this.prev) {
                                var s = a.call(i, "catchLoc"),
                                    c = a.call(i, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                } else if (s) {
                                    if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                                } else {
                                    if (!c) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && a.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(i)
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), y
                    },
                    finish: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), y
                        }
                    },
                    catch: function(e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    I(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: P(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, r
            }

            function r(e, t, n, r, o, a, i) {
                try {
                    var l = e[a](i),
                        s = l.value
                } catch (e) {
                    return void n(e)
                }
                l.done ? t(s) : Promise.resolve(s).then(r, o)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, a) {
                        var i = e.apply(t, n);

                        function l(e) {
                            r(i, o, a, l, s, "next", e)
                        }

                        function s(e) {
                            r(i, o, a, l, s, "throw", e)
                        }
                        l(void 0)
                    }))
                }
            }
            e.exports = function(e, t) {
                t.addEventListener("message", function() {
                    var r = o(n().mark((function r(o) {
                        var a, i, l, s, c, u, d;
                        return n().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (a = o.data.request) {
                                        n.next = 3;
                                        break
                                    }
                                    return n.abrupt("return");
                                case 3:
                                    if (i = a.id, l = a.path, s = a.args, n.prev = 4, "function" != typeof(c = l.reduce((function(e, t) {
                                            return e[t]
                                        }), e))) {
                                        n.next = 13;
                                        break
                                    }
                                    return d = l.slice(0, l.length - 1).reduce((function(e, t) {
                                        return e[t]
                                    }), e), n.next = 10, c.apply(d, s);
                                case 10:
                                    u = n.sent, n.next = 16;
                                    break;
                                case 13:
                                    return n.next = 15, c;
                                case 15:
                                    u = n.sent;
                                case 16:
                                    t.postMessage({
                                        response: {
                                            id: i,
                                            result: {
                                                data: u
                                            }
                                        }
                                    }), n.next = 22;
                                    break;
                                case 19:
                                    n.prev = 19, n.t0 = n.catch(4), t.postMessage({
                                        response: {
                                            id: i,
                                            result: {
                                                error: n.t0
                                            }
                                        }
                                    });
                                case 22:
                                case "end":
                                    return n.stop()
                            }
                        }), r, null, [
                            [4, 19]
                        ])
                    })));
                    return function(e) {
                        return r.apply(this, arguments)
                    }
                }()), this.call = function() {
                    var e = o(n().mark((function e(r, o) {
                        var a;
                        return n().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = Math.random().toString(32).slice(2), e.abrupt("return", new Promise((function(e, n) {
                                        var i = function(r) {
                                            var o = r.data.response;
                                            o && o.id === a && (t.removeEventListener("message", i), "error" in o.result ? n(o.result.error) : e(o.result.data))
                                        };
                                        t.addEventListener("message", i), t.postMessage({
                                            request: {
                                                id: a,
                                                path: r,
                                                args: o
                                            }
                                        })
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
            }
        },
        5967: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n(8224),
                o = n(6886),
                a = (0, r.vs)("<svg>"),
                i = (0, r.vs)("<svg><path></svg>", !1, !0),
                l = {
                    symbol: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M267.099 52.7a16.057 16.057 0 0 0-22.6 0l-191.8 191.8a16.055 16.055 0 0 0 0 22.6l191.8 191.8a16.054 16.054 0 0 0 22.6 0l191.8-191.8a16.056 16.056 0 0 0 0-22.6z m60.3 212.5a10.933 10.933 0 0 0 0-18l-84.5-59.1a11 11 0 0 0-11.383-0.753 10.99 10.99 0 0 0-5.917 9.753v118.2a10.99 10.99 0 0 0 11.714 10.969 11 11 0 0 0 5.586-1.969z",
                            style: {
                                fill: "currentcolor",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd"
                            }
                        }]
                    },
                    "imdb-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M450.6700000000001 122.26200000000006H60.93100000000004a39 39 0 0 0-27.747 11.425 39.03 39.03 0 0 0-11.425 27.747v189.529a39.27 39.27 0 0 0 11.501 27.67 39.3 39.3 0 0 0 27.671 11.5h389.739a39.3 39.3 0 0 0 27.67-11.5 39.25 39.25 0 0 0 11.5-27.67V161.43400000000008a39.25 39.25 0 0 0-11.5-27.671 39.26 39.26 0 0 0-27.67-11.501m18.99 228.701c0 2.49-0.49 4.96-1.44 7.27-0.95 2.3-2.35 4.4-4.12 6.16a18.7 18.7 0 0 1-6.16 4.12c-2.3 0.95-4.78 1.44-7.27 1.44H60.93100000000004a19.25 19.25 0 0 1-13.351-5.64 19.28 19.28 0 0 1-5.641-13.35V161.43400000000008a19.254 19.254 0 0 1 18.992-18.992h389.739a18.98 18.98 0 0 1 13.43 5.562 19.15 19.15 0 0 1 4.12 6.162 19.1 19.1 0 0 1 1.44 7.268z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M83.48300000000006 189.92500000000007h24.532v124.24h-24.532z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M181.21400000000006 273.80600000000004l-23.74-83.881h-30.866v124.24h21.37v-86.651l22.949 72.8h20.575l22.949-74.386v88.234h21.366V189.92500000000007h-30.862z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M297.544 189.923h-41.15v124.24h41.15a49.74 49.74 0 0 0 36.006-11.87 41.08 41.08 0 0 0 13.06-32.841v-35.214a42.97 42.97 0 0 0-13.057-32.841 51.22 51.22 0 0 0-36.009-11.474m24.927 80.321a19.8 19.8 0 0 1-6.33 15.828A27.6 27.6 0 0 1 297.94000000000005 291.61300000000006h-18.2v-79.138h18.2a27.6 27.6 0 0 1 18.2 5.54 19.8 19.8 0 0 1 6.33 15.827z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M406.75 223.9520000000001a22.5 22.5 0 0 0-13.06 4.352 23.94 23.94 0 0 0-7.52 9.1v-47.876h-23.74v124.637h23.74v-11.87a20.77 20.77 0 0 0 8.18 9.859 20.78 20.78 0 0 0 12.4 3.198 25.88 25.88 0 0 0 21.76-9.892 43.46 43.46 0 0 0 7.92-28.489v-14.244a42.85 42.85 0 0 0-7.92-28.488 26.235 26.235 0 0 0-21.76-10.287m6.33 53.019c0.29 4.38-0.97 8.722-3.56 12.266a11.4 11.4 0 0 1-4.57 3.528 11.4 11.4 0 0 1-5.72 0.825c-2.37 0.4-4.75-0.4-7.12-1.583a7.9 7.9 0 0 1-2.62-1.73 7.7 7.7 0 0 1-1.73-2.622 17.1 17.1 0 0 1-1.59-7.518v-20.179a17.1 17.1 0 0 1 1.59-7.518 8.6 8.6 0 0 1 4.35-4.748c2.19-1.2 4.63-1.878 7.12-1.979 1.97-0.054 3.92 0.347 5.7 1.17a12.7 12.7 0 0 1 4.59 3.579 19.84 19.84 0 0 1 3.56 12.661z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    imdb: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M294.5 217.5c-1.3-0.7-3.8-1-7.4-1v77.9c4.8 0 7.8-0.9 8.9-2.7s1.7-6.6 1.7-14.5v-46c0-5.4-0.2-8.8-0.6-10.3a5.37 5.37 0 0 0-2.6-3.4",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M384 255.60000000000002v28.1c0 5.3-0.3 8.7-0.8 10-0.5 1.4-3.2 2.1-5 2.1s-4.3-0.8-4.9-2.1v-47.6c0.5-1.2 3.2-2 4.9-2s4.2 0.9 4.8 2.3c0.7 1.5 1 4.6 1 9.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M45 176.4a26.375 26.375 0 0 1 26.4-26.4h369.2a26.38 26.38 0 0 1 18.68 7.722 26.5 26.5 0 0 1 5.72 8.57c1.32 3.205 2 6.64 2 10.108v158.2c0 3.468-0.68 6.903-2 10.108a26.5 26.5 0 0 1-5.72 8.569 26.5 26.5 0 0 1-8.57 5.722A26.4 26.4 0 0 1 440.5999999999999 361H71.39999999999998a26.375 26.375 0 0 1-26.4-26.4z m52.8 138.4h33V196.2h-33z m95.9-63.2l7.4-55.4h41.7v118.7h-27.9l-0.1-80.1-11.2 80.1h-19.9L172 236.5l-0.1 78.4h-28V196.2h41.4c1.2 7.2 2.5 15.6 3.8 25.3z m62.3 63.2V196.2h51.5a21.064 21.064 0 0 1 21.1 20.9v76.8a20.934 20.934 0 0 1-21.1 20.9z m136.8-88.9h-2.1a22.05 22.05 0 0 0-17.4 8.4v-38.1h-31.6v117.2h29.6l1.9-7.3a21.7 21.7 0 0 0 7.7 6.486 21.7 21.7 0 0 0 9.8 2.314h2.1c11.8 0 21.4-9.3 21.4-20.7v-47.6c0-11.5-9.5-20.7-21.4-20.7",
                            style: {
                                fill: "currentcolor",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd"
                            }
                        }]
                    },
                    reddit: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M309.6500000000001 125.026c4.57 19.375 21.98 33.808 42.76 33.808 24.26 0 43.93-19.663 43.93-43.917S376.6700000000001 71 352.40999999999985 71c-21.22 0-38.91 15.03-43.03 35.022-35.52 3.809-63.27 33.931-63.27 70.436v0.226c-38.63 1.627-73.91 12.622-101.92 29.978a61.28 61.28 0 0 0-37.63-12.847c-34 0-61.56 27.548-61.56 61.541 0 24.666 14.5 45.914 35.44 55.735 2.04 71.444 79.91 128.909 175.7 128.909s173.77-57.526 175.7-129.033c20.78-9.882 35.16-31.069 35.16-55.591 0-33.992-27.56-61.541-61.56-61.541-14.11 0-27.1 4.756-37.48 12.745-28.26-17.48-63.93-28.475-102.96-29.937v-0.164c0-26.149 19.44-47.85 44.65-51.412z m-167.93 169.388c1.03-22.319 15.85-39.449 33.09-39.449s30.42 18.098 29.39 40.416c-1.03 22.319-13.9 30.431-31.16 30.431s-32.35-9.08-31.32-31.398m195.78-39.449c17.25 0 32.08 17.13 33.09 39.449 1.03 22.318-14.08 31.398-31.32 31.398s-30.13-8.091-31.16-30.431c-1.03-22.318 12.13-40.416 29.39-40.416m-20.52 91.086c3.24 0.33 5.3 3.686 4.04 6.692-10.61 25.345-35.65 43.155-64.88 43.155-29.22 0-54.24-17.81-64.87-43.155-1.26-3.006 0.8-6.362 4.04-6.692 18.94-1.914 39.44-2.964 60.83-2.964 21.4 0 41.87 1.05 60.84 2.964",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    x: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M284.53999999999996 231.994L396.2199999999998 102h-26.46l-96.98 112.872L195.32999999999993 102H106l117.12 170.682L106 409h26.47l102.4-119.196L316.6700000000001 409H406l-121.47-177.006z m-36.25 42.192l-11.87-16.996L142 121.95h40.65l76.2 109.143 11.87 16.996 99.05 141.868h-40.65l-80.83-115.765z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    facebook: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M338.0999999999999 196.9h-54.7v-37.1c0-14.1 8.8-17.7 15.9-17.7h38.8v-60h-54.7a69.4 69.4 0 0 0-50.36 16.812 69.43 69.43 0 0 0-23.74 47.488c-0.2 3.264-0.2 6.537 0 9.8v40.6H174v63.5h35.3v178.3h74.1V260.4h49.4z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    youtube: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M476.0999999999999 161.6c0-39.2-28.8-70.7-64.5-70.7-48.3-2.3-97.5-3.1-147.8-3.1h-15.7c-50.2 0-99.5 0.9-147.7 3.1-35.5 0-64.4 31.7-64.4 70.9-2.2 31-3.1 62-3.1 93-0.1 31 0.9 62.1 3 93.1 0 39.2 28.8 71 64.4 71 50.7 2.4 102.7 3.4 155.6 3.3 53 0.2 104.87-0.9 155.6-3.3 35.6 0 64.5-31.8 64.5-71 2.1-31.1 3.1-62.1 3-93.2 0.1-31-0.8-62-2.9-93.1m-262.8 178.7V169.1l126.3 85.5z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    vlc: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M385.5 325.1999999999998c-7.9-25.1-8-25-34-23.6h-0.8c-4.8 0-7.2 1.6-5.9 7.1 1.8 7.6-1.7 13.3-7.2 18.2-7.8 6.8-17.2 10.8-27 13.8-29.3 8.9-59.2 9.4-89.1 4.8-16.6-2.6-33-6.6-46.5-17.8-4.9-4-8.6-8.7-8.7-15.2-0.2-10.9-0.1-10.9-11.6-10.8-2.8 0-5.5 0.3-8.3 0.1-9.1-0.7-14.1 3.4-16.7 12.2-9.7 32.2-20 64.1-29.9 96.2a80.5 80.5 0 0 0-3.4 16.1c-0.6 6.7 2.3 11.1 9.9 11.2 7.4 0.2 14.8 1.2 22.2 1.2 42.7 0.1 85.4 0.13 128.1 0.1 45.2 0 90.3 0.1 135.5-0.1 23.9-0.1 27.2-4.7 20.2-27.5-8.8-28.7-17.7-57.3-26.8-86",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M200.39999999999964 196.19999999999982c-4.8 16.4-9.7 32.73-14.7 49-3.7 12.2-2.2 16.6 9.3 22.5a92 92 0 0 0 15.3 6c14.53 4.41 29.75 6.1 44.9 5 6 0 12.1 0.5 18.1-0.1 16.8-1.6 33.4-4 47.9-13.6 4.2-2.8 8.3-6.4 6.7-12.1-5.7-19.6-11.7-39-17.5-58.5-0.8-2.6-1.6-4.4-5.2-2.7-23 11.1-47.5 10.2-72 7.8-8.5-0.8-17.2-1.9-24.5-6.7-5.2-3.4-6.8-1.8-8.3 3.4",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M283.2999999999993 127.80000000000018c5.2-1.3 6.3-4.4 4.7-9.3-2.8-8.6-5-17.4-7.9-26.1-5.1-15.5-7.5-17.2-23.6-17.2-17.4 0-20.8 2.5-25.8 19.1-2.4 8.2-4.7 16.4-7.3 24.5-1.5 4.6-0.2 7.6 4.4 8.8 18.19 4.71 37.27 4.78 55.5 0.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    trakt: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M114.80000000000018 386.4a192.6 192.6 0 0 0 103.68 58.236A192.63 192.63 0 0 0 336.60000000000036 430.9l-133.3-133z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M202.5999999999999 217.4l-101 100.7-13.5-13.5 106.3-106.3 124.1-124.1a192.4 192.4 0 0 0-120.28-1.237 192.4 192.4 0 0 0-97.5 70.437 192.33 192.33 0 0 0-36.61 114.576A192.34 192.34 0 0 0 102.69999999999982 371.9l100.7-100.7 6.9 6.6L354.5 422a57.5 57.5 0 0 0 8.2-5.3l-159.4-159.4-96.7 96.7-13.5-13.5 110.2-110.2 6.9 6.6 168.3 168c2.6-2 4.9-4.3 7.3-6.3l-181.5-181.5z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M399.3000000000002 385.1a192.1 192.1 0 0 0 42.69-78.033 192.1 192.1 0 0 0 2.99-88.899 192.24 192.24 0 0 0-37.37-80.719A192.2 192.2 0 0 0 337.89999999999964 82.2L216.80000000000018 203z m-136-147.2l-13.5-13.5 95.4-95.4 13.5 13.5z m90.5-131l-109.9 109.9-13.5-13.5 109.9-109.9z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "in-cinema": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M457.40000000000055 196.3l-38-38a17.2 17.2 0 0 0-11.38-4.913A17.18 17.18 0 0 0 396.3000000000002 157.4a26.42 26.42 0 0 1-18.19 6.353 26.42 26.42 0 0 1-17.67-7.694 26.4 26.4 0 0 1-7.74-17.648 26.4 26.4 0 0 1 6.3-18.211 17.17 17.17 0 0 0 4.01-11.724 17.23 17.23 0 0 0-4.91-11.376l-37.8-38a17.08 17.08 0 0 0-12.1-5.024 17.09 17.09 0 0 0-12.1 5.024l-60.5 60.5a34.1 34.1 0 0 0-8.2 13.2 6.7 6.7 0 0 1-1.61 2.588 6.9 6.9 0 0 1-2.59 1.612c-5 1.679-9.52 4.525-13.2 8.3l-155.2 155.2a17.09 17.09 0 0 0-5.03 12.1c0 2.249 0.45 4.475 1.31 6.551a17.1 17.1 0 0 0 3.72 5.549l37.6 38a17.2 17.2 0 0 0 11.38 4.913c4.27 0.167 8.45-1.264 11.72-4.013a26.48 26.48 0 0 1 18.7-7.85c3.47-0.014 6.92 0.658 10.14 1.978a26.4 26.4 0 0 1 8.61 5.718 26.4 26.4 0 0 1 5.77 8.582 26.3 26.3 0 0 1 2.03 10.135 26.46 26.46 0 0 1-7.75 18.737 17.17 17.17 0 0 0-4.01 11.724c0.17 4.27 1.92 8.326 4.91 11.376l37.9 37.9a17.089 17.089 0 0 0 18.65 3.718 17.1 17.1 0 0 0 5.55-3.718l155.2-155.2a34.4 34.4 0 0 0 8.3-13.2c0.33-0.975 0.88-1.861 1.61-2.587a6.85 6.85 0 0 1 2.59-1.613 34.2 34.2 0 0 0 13.2-8.2l60.5-60.5a17.4 17.4 0 0 0 4.95-12.15 17.4 17.4 0 0 0-4.95-12.15m-196.6-25.5a13.762 13.762 0 0 1-19.5 0l-9.9-9.9a13.78 13.78 0 0 1-4.47-9.527 13.75 13.75 0 0 1 3.54-9.912 13.78 13.78 0 0 1 9.5-4.536 13.8 13.8 0 0 1 9.93 3.475c0.36 0.308 0.69 0.642 1 1l9.9 9.9c1.28 1.28 2.3 2.799 3 4.47 1.4 3.381 1.4 7.179 0 10.559a13.9 13.9 0 0 1-3 4.471m37.9 37.8a13.762 13.762 0 0 1-19.5 0l-9.4-9.4a13.8 13.8 0 0 1-3.55-9.602 13.81 13.81 0 0 1 13.45-13.446 13.82 13.82 0 0 1 9.6 3.548l9.4 9.4a13.936 13.936 0 0 1 0 19.5m38.1 37.9a13.762 13.762 0 0 1-19.5 0l-9.4-9.4a13.78 13.78 0 0 1-4.47-9.527 13.75 13.75 0 0 1 3.54-9.912 13.78 13.78 0 0 1 9.5-4.536 13.8 13.8 0 0 1 9.93 3.475c0.36 0.308 0.69 0.642 1 1l9.4 9.5a13.85 13.85 0 0 1 3.97 9.7c0 3.629-1.43 7.113-3.97 9.7m38.2 38.3a13.762 13.762 0 0 1-19.5 0l-9.9-9.9a13.7 13.7 0 0 1-3.1-4.397 13.8 13.8 0 0 1-1.19-5.249c-0.04-1.811 0.27-3.613 0.92-5.304a13.75 13.75 0 0 1 7.27-7.653 13.8 13.8 0 0 1 5.25-1.185c1.81-0.047 3.61 0.264 5.3 0.914s3.24 1.627 4.55 2.874l0.5 0.5 9.9 9.9c1.28 1.28 2.3 2.799 3 4.47 1.4 3.381 1.4 7.179 0 10.559a13.9 13.9 0 0 1-3 4.471",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    remote: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M292.89999999999964 119.1a28.4 28.4 0 0 0-9.43-6.584 28.5 28.5 0 0 0-11.27-2.316 29.22 29.22 0 0 0-21.7 8.9l-20.7 20.7-177.5 177.4a29.2 29.2 0 0 0-7.85 8.26 29.16 29.16 0 0 0-3.79 22.031 29.2 29.2 0 0 0 4.64 10.409 25.8 25.8 0 0 0 3 3.6q45.9 47.25 91.8 91.6a27.47 27.47 0 0 0 38.8 0.6l1.5-1.5c5.9-4.9 10.8-10.8 16.8-15.8L379.5 254c15.8-15.8 16.8-31.5 2-45.4-28.5-30.4-58.1-60-88.6-89.5m-179.3 243.3c-2.6 0.239-5.22-0.037-7.72-0.812a19.8 19.8 0 0 1-6.81-3.707A19.84 19.84 0 0 1 92 344.4c-0.08-0.865-0.11-1.733-0.1-2.6-0.17-2.682 0.19-5.371 1.07-7.912a20.2 20.2 0 0 1 4.03-6.892 20.333 20.333 0 0 1 14.1-6.796h1.5c2.54-0.307 5.11-0.111 7.57 0.578a19.403 19.403 0 0 1 14.03 16.422c0.13 1.228 0.17 2.466 0.1 3.7a19.5 19.5 0 0 1-0.57 7.567 19.42 19.42 0 0 1-9.21 11.696 19.4 19.4 0 0 1-7.22 2.337c-1.3 0-2.5 0-3.7-0.1m47.3 48.3c-3.93 0.175-7.82-0.821-11.18-2.862a19.87 19.87 0 0 1-7.7-8.599 20.1 20.1 0 0 1-1.82-7.539c-0.02-0.868 0.01-1.737 0.1-2.6a19.22 19.22 0 0 1 17.5-20.7c1.06-0.1 2.14-0.1 3.2 0 2.69-0.035 5.35 0.461 7.85 1.458 2.49 0.997 4.76 2.475 6.69 4.351a20.5 20.5 0 0 1 4.51 6.582 20.4 20.4 0 0 1 1.65 7.809v1.5a19.62 19.62 0 0 1-4.97 14.174 19.65 19.65 0 0 1-13.53 6.526c-0.76-0.08-1.53-0.113-2.3-0.1m0-95.6c-3.93 0.175-7.82-0.821-11.18-2.862a19.87 19.87 0 0 1-7.7-8.599 20.1 20.1 0 0 1-1.82-7.539c-0.02-0.868 0.01-1.737 0.1-2.6a22.113 22.113 0 0 1 21.5-22.7h0.1a21.13 21.13 0 0 1 14.51 7.17 21.17 21.17 0 0 1 5.19 15.33v0.2c0.17 2.679-0.18 5.367-1.05 7.909a20.2 20.2 0 0 1-4 6.904 20.4 20.4 0 0 1-6.34 4.843 20.4 20.4 0 0 1-7.71 2.044 8.2 8.2 0 0 1-1.6-0.1m47.3 47.3a19.66 19.66 0 0 1-14.17-4.976 19.66 19.66 0 0 1-6.53-13.524v-2.1a21.08 21.08 0 0 1 21.4-20.7h0.3a21.744 21.744 0 0 1 21.7 20.7c-0.08 2.806-0.71 5.57-1.85 8.133a21.4 21.4 0 0 1-4.84 6.795 21.31 21.31 0 0 1-15.31 5.772c-0.23-0.076-0.46-0.11-0.7-0.1m56-63a61.63 61.63 0 0 1-34.13-10.653 61.593 61.593 0 0 1-25.69-63.416 61.58 61.58 0 0 1 48.73-48.029 61.604 61.604 0 0 1 63.04 26.619 61.57 61.57 0 0 1 10.15 34.279 60.9 60.9 0 0 1-4.6 23.353 61 61 0 0 1-13.19 19.814 61 61 0 0 1-43.11 17.933h-1.2z m168.5-199a120.83 120.83 0 0 0-78.7-52.2c-15.8-1-22.7 3.9-23.6 12.8 0 10.8 6.9 14.8 15.8 15.8a66.8 66.8 0 0 1 27.6 9.8 101.1 101.1 0 0 1 33.46 29.192A101.3 101.3 0 0 1 425 156.5a15.64 15.64 0 0 0 4.39 11.055 15.6 15.6 0 0 0 10.91 4.745h0.4c8.9 0 13.8-6.9 13.8-17.7a97.08 97.08 0 0 0-21.8-54.2m-93.5-4c-8 0-14.8 3-15.8 11.8-0.91 3.42-0.43 7.061 1.33 10.131a13.45 13.45 0 0 0 8.07 6.269c0.81 0.238 1.65 0.373 2.5 0.4a50.3 50.3 0 0 1 28.21 14.189 50.28 50.28 0 0 1 14.19 28.211 14.6 14.6 0 0 0 16.1 12.9c0.2 0 0.5-0.1 0.7-0.1a12.87 12.87 0 0 0 11.8-13.8 76.81 76.81 0 0 0-67.1-70m-73.9 108.4c-4.2-0.202-8.41 0.427-12.37 1.852a32.2 32.2 0 0 0-10.71 6.449 32 32 0 0 0-7.42 10.061 31.9 31.9 0 0 0-3 12.138v3a31.3 31.3 0 0 0 7.6 22.691 31.34 31.34 0 0 0 21.4 10.709c1.2 0.1 2.3 0.1 3.5 0.1 4.2 0.214 8.41-0.403 12.37-1.815a32.1 32.1 0 0 0 10.74-6.417 32 32 0 0 0 7.45-10.039 32.1 32.1 0 0 0 3.04-12.129c0.1-1.031 0.1-2.069 0-3.1a31.92 31.92 0 0 0-8.14-22.96 31.92 31.92 0 0 0-21.96-10.54z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    link: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M472.8299999999999 100.5c-15.83-39.171-54.21-64.1-96.55-63.307a95.7 95.7 0 0 0-66.08 22.157c-13.05 10.683-24.53 22.949-36.79 34.424-13.06 12.661-25.72 25.323-38.78 37.984a20.2 20.2 0 0 0-5.79 10.347 20.14 20.14 0 0 0 1.04 11.811 17.905 17.905 0 0 0 16.22 12.266c7.52 0.4 14.64-3.165 19.79-9.1l62.91-61.725c25.32-25.718 66.47-26.114 92.59-1.582a63.05 63.05 0 0 1 18.59 44.432 63.06 63.06 0 0 1-18.2 44.594 8.4 8.4 0 0 1-1.98 1.583c-29.27 29.279-58.55 57.768-87.83 86.652-4.8 4.386-9.97 8.357-15.44 11.87a65.49 65.49 0 0 1-82.69-17.409 21.45 21.45 0 0 0-26.51-9.1c-13.45 5.54-15.83 19.784-5.15 33.632 36.41 45.9 103.28 53.416 149.17 17.014 2.38-1.978 4.75-4.352 7.13-6.726 30.46-29.28 60.93-58.956 91-89.027a102 102 0 0 0 28.59-52.039 102 102 0 0 0-5.24-59.144m-225.14 253.624a4725 4725 0 0 0-63.71 62.512 66.32 66.32 0 0 1-45.89 19.83 66.33 66.33 0 0 1-46.69-17.85 62.6 62.6 0 0 1-13.91-20.28 62.5 62.5 0 0 1-5.04-24.068 62.68 62.68 0 0 1 18.16-44.676l2.37-2.374c28.88-28.488 58.16-56.977 87.05-85.466a69.7 69.7 0 0 1 16.22-12.265 66.4 66.4 0 0 1 44.11-6.352 66.37 66.37 0 0 1 38.19 22.97 19.5 19.5 0 0 0 5.43 5.45 19.355 19.355 0 0 0 21.87-0.306 19.9 19.9 0 0 0 5.46-5.552 19.9 19.9 0 0 0 2.89-7.226c0.48-2.576 0.44-5.221-0.11-7.783a19.7 19.7 0 0 0-3.1-7.139c-0.39-0.792-1.18-1.583-1.58-2.374a106.514 106.514 0 0 0-149.56-14.64 41.6 41.6 0 0 0-4.35 3.561c-32.05 30.467-63.31 61.329-94.57 92.587a100.2 100.2 0 0 0-27.41 51.981 100.25 100.25 0 0 0 6.44 58.412 101.78 101.78 0 0 0 38.43 46.09 101.8 101.8 0 0 0 57.72 16.43 97.13 97.13 0 0 0 68.45-24.14c24.93-22.95 48.67-47.48 72.8-71.22a18.754 18.754 0 0 0 4.36-22.159 20.4 20.4 0 0 0-11.52-10.239 20.4 20.4 0 0 0-15.39 0.739 17.74 17.74 0 0 0-7.52 5.54z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "magnet-link": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M410.3000000000002 285.3a134.1 134.1 0 0 0 38.34-94.526 134.1 134.1 0 0 0-39.27-94.141 134.08 134.08 0 0 0-94.14-39.268A134.09 134.09 0 0 0 220.69999999999982 95.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M347.09999999999945 222.1a44.7 44.7 0 0 0 13.09-31.6 44.693 44.693 0 0 0-44.69-44.689 44.7 44.7 0 0 0-31.6 13.089",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M189.19999999999982 443.8v-46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M101.59999999999945 404.499l31.6-31.6",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M66.69999999999982 305.899h46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M284 158.9L178.69999999999982 264.2a29.82 29.82 0 0 1-21.05 8.7c-7.89 0-15.46-3.129-21.05-8.7l-21.2-21a29.82 29.82 0 0 1-8.7-21.05c0-7.892 3.13-15.461 8.7-21.05l105.4-105.3",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M410.3000000000002 285.3l-105.3 105.4a29.82 29.82 0 0 1-21.05 8.7c-7.89 0-15.46-3.129-21.05-8.7l-21-21.1a29.82 29.82 0 0 1 0-42.1l105.3-105.4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M147.59999999999945 170l63.2 63.2",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }, {
                            d: "M274 296.399l63.2 63.2",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.764",
                                fill: "none"
                            }
                        }]
                    },
                    help: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M155.70000000000073 438.8c98.6 56.9 224.6 23.1 281.5-75.4 56.9-98.6 23.1-224.6-75.4-281.5-98.6-56.9-224.6-23.1-281.5 75.4-56.9 98.6-23.2 224.6 75.4 281.5",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M224.40000000000055 319.9a68.683 68.683 0 0 0 102.58-67.313 68.68 68.68 0 0 0-22.94-43.79 68.69 68.69 0 0 0-92.24 1.501 68.68 68.68 0 0 0-21.5 44.513 68.7 68.7 0 0 0 13.96 47.423 68.7 68.7 0 0 0 20.14 17.666",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M320.40000000000055 63.6l-47.1 125.801",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M313 212.301l85.4-103.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M119.20000000000073 412.1l85.4-103.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M244.30000000000018 331.301l-47.1 125.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M455.5 322l-125.8-47.1",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M306.8000000000002 314.5l103.8 85.3",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M107 120.801l103.7 85.4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }, {
                            d: "M187.80000000000018 245.801l-125.8-47.2",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34.354",
                                fill: "none"
                            }
                        }]
                    },
                    "search-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M221.1 64a156.97 156.97 0 0 0-156.147 141.65 156.97 156.97 0 0 0 125.651 169.29c38.22 7.59 77.896 0.7 111.313-19.35a156.96 156.96 0 0 0 69.488-89.08 157 157 0 0 0-8.336-112.68 157 157 0 0 0-81.84-77.89 157 157 0 0 0-60.129-11.94Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M338.299 338.29999999999995l109.7 109.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    search: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M456.7 437.4000000000001l-94.1-94.1a173.25 173.25 0 0 0 34.8-104.6c0-96.3-78.4-174.7-174.7-174.7S48 142.4000000000001 48 238.79999999999973c0 96.3 78.4 174.7 174.7 174.7 37.71 0 74.406-12.21 104.6-34.8l94.1 94.1a24.96 24.96 0 0 0 12.646 6.09c4.711 0.78 9.546 0.19 13.933-1.69a25.05 25.05 0 0 0 10.823-8.94 25 25 0 0 0 4.298-13.36 25.94 25.94 0 0 0-6.4-17.5M97.9 238.79999999999973a124.67 124.67 0 0 1 32.268-83.74 124.674 124.674 0 0 1 166.653-16.49 124.7 124.7 0 0 1 48.049 75.8c6.054 30.36 0.6 61.88-15.299 88.43a124.73 124.73 0 0 1-70.722 55.26c-29.615 9-61.519 6.66-89.507-6.56A124.69 124.69 0 0 1 97.9 238.79999999999973",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "home-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M86.89800000000002 228.79999999999995v208.6c0.012 1.99 0.419 3.96 1.196 5.79 0.776 1.84 1.909 3.5 3.331 4.9a15.1 15.1 0 0 0 4.955 3.23c1.849 0.74 3.827 1.11 5.818 1.08h91.8v-127.5a22.75 22.75 0 0 1 6.804-15.98 22.74 22.74 0 0 1 16.096-6.52h76.5c2.982-0.03 5.939 0.53 8.704 1.65a22.9 22.9 0 0 1 7.409 4.85 22.7 22.7 0 0 1 4.985 7.33 22.7 22.7 0 0 1 1.802 8.67v127.5h91.802c1.99 0.02 3.97-0.34 5.82-1.09 1.84-0.74 3.53-1.84 4.95-3.23s2.55-3.06 3.33-4.89 1.19-3.8 1.2-5.79v-208.6",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M476.29999999999995 270.4000000000001l-210.401-206.9a16.295 16.295 0 0 0-21.5 0l-210.2 206.9",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    home: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M260.4 99a7.98 7.98 0 0 0-5.55-2.25c-2.072 0-4.063 0.81-5.55 2.25l-184.8 176.5a7.944 7.944 0 0 0-2.5 5.8v165.7a32.14 32.14 0 0 0 9.41 22.69 32.13 32.13 0 0 0 22.69 9.41h96.5a16.1 16.1 0 0 0 11.384-4.72 16.07 16.07 0 0 0 4.716-11.38v-136.5a8.024 8.024 0 0 1 8-8H295a8.024 8.024 0 0 1 8 8v136.5c-0.002 2.12 0.412 4.21 1.22 6.16a16 16 0 0 0 3.49 5.23 16.091 16.091 0 0 0 11.39 4.71h96.4c8.51-0.01 16.67-3.39 22.69-9.41s9.4-14.18 9.41-22.69v-165.7c0-1.09-0.22-2.16-0.65-3.16s-1.06-1.9-1.85-2.64z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M490.70000000000005 242.4000000000001l-75.1-71.8a943 943 0 0 0-80.299-76.9l-58.1-55.6a31.7 31.7 0 0 0-22.2-8.7 30.5 30.5 0 0 0-22.2 8.7l-213.5 204.3a16.43 16.43 0 0 0-1.3 22.5 16 16 0 0 0 4.938 3.83c1.882 0.95 3.931 1.51 6.03 1.65a15.9 15.9 0 0 0 6.203-0.78c1.996-0.67 3.84-1.72 5.429-3.1l0.6-0.6 208.3-199a7.98 7.98 0 0 1 5.55-2.25c2.072 0 4.063 0.81 5.55 2.25l208.299 199c3.08 2.93 7.18 4.53 11.43 4.45 4.25-0.07 8.3-1.82 11.27-4.85a16.582 16.582 0 0 0-0.9-23.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "discover-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M448 256c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-86 192-192Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M350.70000000000005 150.9000000000001l-117.2 46.9a63 63 0 0 0-21.5 14.2 66 66 0 0 0-14.2 21.5l-46.9 117.2a7.95 7.95 0 0 0-0.4 4.6 8.74 8.74 0 0 0 2.2 4.1 7.8 7.8 0 0 0 4.1 2.2c1.54 0.32 3.14 0.18 4.6-0.4l117.2-46.9c8.07-3.2 15.39-8.04 21.5-14.2a66.1 66.1 0 0 0 14.2-21.5l46.9-117.2c0.59-1.46 0.73-3.06 0.4-4.6a8.74 8.74 0 0 0-2.2-4.1 8.1 8.1 0 0 0-8.7-1.8m-94.7 129.1c-4.73 0.01-9.36-1.38-13.3-4a23.3 23.3 0 0 1-8.8-10.8c-1.81-4.4-2.29-9.23-1.4-13.9 0.91-4.67 3.21-8.96 6.6-12.3 2.23-2.23 4.87-4 7.78-5.22 2.91-1.21 6.03-1.83 9.18-1.84 3.16 0 6.28 0.62 9.19 1.82 2.92 1.2 5.57 2.96 7.8 5.19s4 4.87 5.22 7.78c1.21 2.91 1.83 6.03 1.84 9.18 0 3.16-0.62 6.28-1.82 9.19-1.2 2.92-2.96 5.57-5.19 7.8a24.32 24.32 0 0 1-17.1 7.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    discover: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 280c5.57 0.02 10.97-1.9 15.28-5.42 4.32-3.53 7.28-8.44 8.37-13.9 1.1-5.46 0.27-11.13-2.34-16.04a24.03 24.03 0 0 0-12-10.91 24.065 24.065 0 0 0-29.24 8.83 24.04 24.04 0 0 0-3.95 15.73 24.03 24.03 0 0 0 6.93 14.66c4.5 4.5 10.59 7.03 16.95 7.05",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M256 48c-114.7 0-208 93.3-208 208s93.3 208 208 208 208-93.3 208-208-93.3-208-208-208m105.1 113.4l-46.9 117.2a63 63 0 0 1-14.2 21.5 66 66 0 0 1-21.5 14.2l-117.2 46.9c-1.46 0.59-3.06 0.73-4.6 0.4a8.74 8.74 0 0 1-4.1-2.2 7.8 7.8 0 0 1-2.2-4.1c-0.32-1.54-0.18-3.14 0.4-4.6l46.9-117.2c3.2-8.07 8.04-15.39 14.2-21.5a66 66 0 0 1 21.5-14.2l117.2-46.9c1.46-0.58 3.06-0.72 4.6-0.4 1.54 0.35 2.96 1.11 4.1 2.2a7.8 7.8 0 0 1 2.2 4.1c0.32 1.54 0.18 3.14-0.4 4.6",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "library-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M419.0999999999999 176h-326.3a28.9 28.9 0 0 0-20.43 8.47 28.9 28.9 0 0 0-8.47 20.43V403.20000000000005a28.9 28.9 0 0 0 8.47 20.43 28.9 28.9 0 0 0 20.43 8.47h326.3a28.9 28.9 0 0 0 20.43-8.47A28.9 28.9 0 0 0 448 403.20000000000005v-198.3c0.01-3.8-0.74-7.56-2.19-11.07a29 29 0 0 0-6.26-9.38 29 29 0 0 0-9.38-6.26c-3.51-1.45-7.27-2.2-11.07-2.19Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M144 80h224",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M112 128h288",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    library: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M368 96h-224c-4.24 0-8.31-1.69-11.31-4.69s-4.69-7.07-4.69-11.31 1.69-8.31 4.69-11.31 7.07-4.69 11.31-4.69h224c4.24 0 8.31 1.69 11.31 4.69s4.69 7.07 4.69 11.31-1.69 8.31-4.69 11.31-7.07 4.69-11.31 4.69",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M400 144h-288c-4.24 0-8.31-1.69-11.31-4.69s-4.69-7.07-4.69-11.31 1.69-8.31 4.69-11.31 7.07-4.69 11.31-4.69h288c4.24 0 8.31 1.69 11.31 4.69s4.69 7.07 4.69 11.31-1.69 8.31-4.69 11.31-7.07 4.69-11.31 4.69",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M419.0999999999999 448h-326.3a45.06 45.06 0 0 1-31.7-13.2 45.04 45.04 0 0 1-13.2-31.7v-198.3a45.06 45.06 0 0 1 13.2-31.7 45.1 45.1 0 0 1 31.7-13.2h326.3a44.48 44.48 0 0 1 31.7 13.2 45.3 45.3 0 0 1 13.2 31.7V403.0999999999999a45.04 45.04 0 0 1-13.2 31.7 45.06 45.06 0 0 1-31.7 13.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "addons-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M413.6999999999998 246.10000000000014H386c-0.53-0.01-1.03-0.23-1.4-0.6s-0.59-0.87-0.6-1.4v-77.2a38.94 38.94 0 0 0-11.4-27.5 38.94 38.94 0 0 0-27.5-11.4h-77.2c-0.53-0.01-1.03-0.23-1.4-0.6s-0.59-0.87-0.6-1.4v-27.7c0-27.1-21.5-49.9-48.6-50.3-6.57-0.1-13.09 1.09-19.2 3.5a49.6 49.6 0 0 0-16.4 10.7 49.8 49.8 0 0 0-11 16.2 48.9 48.9 0 0 0-3.9 19.2v28.5c-0.01 0.53-0.23 1.03-0.6 1.4s-0.87 0.59-1.4 0.6h-77.2c-10.5 0-20.57 4.17-28 11.6a39.6 39.6 0 0 0-11.6 28v70.4c0.01 0.53 0.23 1.03 0.6 1.4s0.87 0.59 1.4 0.6h26.9c29.4 0 53.7 25.5 54.1 54.8 0.4 29.9-23.5 57.2-53.3 57.2H50c-0.53 0.01-1.03 0.23-1.4 0.6s-0.59 0.87-0.6 1.4v70.4c0 10.5 4.17 20.57 11.6 28s17.5 11.6 28 11.6h70.4c0.53-0.01 1.03-0.23 1.4-0.6s0.59-0.87 0.6-1.4V441.20000000000005c0-30.3 24.8-56.4 55-57.1 30.1-0.7 57 20.3 57 50.3v27.7c0.01 0.53 0.23 1.03 0.6 1.4s0.87 0.59 1.4 0.6h71.1a38.94 38.94 0 0 0 27.5-11.4 38.96 38.96 0 0 0 11.4-27.5v-78c0.01-0.53 0.23-1.03 0.6-1.4s0.87-0.59 1.4-0.6h28.5c27.6 0 49.5-22.7 49.5-50.4s-23.2-48.7-50.3-48.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    addons: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M345.0999999999999 480H274c-2.36 0.01-4.71-0.45-6.89-1.36s-4.16-2.25-5.81-3.94a18 18 0 0 1-5.3-12.7v-27.7c0.03-4.26-0.82-8.48-2.5-12.4a32.3 32.3 0 0 0-7.2-10.4c-7.8-7.6-19.1-11.8-30.9-11.5-21.4 0.5-39.4 19.3-39.4 41.1v20.9c0.01 2.36-0.45 4.71-1.36 6.89s-2.25 4.16-3.94 5.81a18.02 18.02 0 0 1-12.7 5.3h-70.4a55.67 55.67 0 0 1-39.36-16.26 55.64 55.64 0 0 1-16.34-39.34v-70.4a18.1 18.1 0 0 1 5.3-12.7 18.1 18.1 0 0 1 12.7-5.3h27.7c9.2 0 18.1-3.9 25.1-11 3.9-3.92 7-8.58 9.1-13.7a40.7 40.7 0 0 0 3.1-16.2c-0.3-21.2-17.7-39.1-38.1-39.1H50c-2.36 0.01-4.71-0.45-6.89-1.36s-4.16-2.25-5.81-3.94a18 18 0 0 1-5.3-12.7v-70.4a55.8 55.8 0 0 1 4.2-21.3 53.9 53.9 0 0 1 12.1-18 55.7 55.7 0 0 1 39.3-16.3h55.2a8.08 8.08 0 0 0 5.7-2.3c0.74-0.75 1.33-1.64 1.72-2.62 0.4-0.98 0.6-2.02 0.58-3.08v-6.5a64.7 64.7 0 0 1 5.1-25.3 66.6 66.6 0 0 1 14.5-21.4 65.2 65.2 0 0 1 21.7-14.1c8.08-3.2 16.71-4.8 25.4-4.7 35.5 0.6 64.4 30.4 64.4 66.3v5.7a7.8 7.8 0 0 0 1.3 4.48 7.8 7.8 0 0 0 3.62 2.95c0.98 0.39 2.03 0.59 3.08 0.57h55.2c7.21-0.01 14.35 1.42 21 4.2a55 55 0 0 1 29.7 29.7 54.3 54.3 0 0 1 4.2 21v55.2a7.8 7.8 0 0 0 1.3 4.48 7.8 7.8 0 0 0 3.62 2.95c0.98 0.39 2.03 0.59 3.08 0.57h5.7c36.6 0 66.3 29 66.3 64.6 0 36.6-29.4 66.4-65.5 66.4h-6.5c-2.13-0.01-4.17 0.82-5.7 2.3-0.74 0.75-1.33 1.64-1.72 2.62-0.4 0.98-0.6 2.03-0.58 3.08v56c0.01 7.21-1.42 14.35-4.2 21a55 55 0 0 1-29.7 29.7 53.9 53.9 0 0 1-21 4.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "settings-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M456.6999999999998 242.29999999999995l-26.1-4.2a8.2 8.2 0 0 1-4.4-2.3 8.3 8.3 0 0 1-2.2-4.5c-0.5-3.2-1-6.4-1.7-9.5-0.31-1.66-0.1-3.37 0.6-4.9a8.57 8.57 0 0 1 3.3-3.7l23.1-12.8a7.75 7.75 0 0 0 3.8-4.2c0.68-1.83 0.72-3.84 0.1-5.7l-4-11c-0.68-1.83-2-3.35-3.7-4.3a8 8 0 0 0-5.7-0.7l-25.9 5c-1.69 0.3-3.43 0.09-5-0.6a7.22 7.22 0 0 1-3.6-3.5q-2.25-4.2-4.8-8.4a8.16 8.16 0 0 1-1.2-4.91c0.13-1.73 0.79-3.37 1.9-4.69l17.3-19.9a8.42 8.42 0 0 0 2.2-5.2c0.09-1.98-0.59-3.91-1.9-5.4l-7.5-9a7.87 7.87 0 0 0-5-2.8 7.72 7.72 0 0 0-5.5 1.3l-22.7 13.6a8.14 8.14 0 0 1-4.8 1.1 7.4 7.4 0 0 1-4.6-2c-2.4-2.1-4.9-4.2-7.4-6.2a8.3 8.3 0 0 1-2.7-4.21c-0.45-1.64-0.38-3.39 0.2-4.99l9.4-24.8c0.8-1.81 0.9-3.85 0.29-5.73a8.08 8.08 0 0 0-3.59-4.47l-10.2-5.9a7.83 7.83 0 0 0-5.6-0.9 8.14 8.14 0 0 0-4.8 3.1l-16.6 20.8a6.93 6.93 0 0 1-3.8 2.7 7.63 7.63 0 0 1-4.7-0.2s-5.6-2.3-9.8-3.7a8.17 8.17 0 0 1-3.98-2.97 8.1 8.1 0 0 1-1.52-4.73l0.4-26.4c0.1-1.98-0.5-3.93-1.7-5.5a8.7 8.7 0 0 0-4.9-3l-11.6-2c-1.94-0.29-3.92 0.1-5.6 1.1a8.17 8.17 0 0 0-3.5 4.5l-8.6 25.1c-0.58 1.6-1.62 3-3 4-1.39 1-3.09 1.49-4.8 1.4h-9.8c-1.7 0-3.37-0.49-4.8-1.4a7.88 7.88 0 0 1-3-4l-8.6-25.1a7.9 7.9 0 0 0-3.5-4.5c-1.68-1-3.66-1.39-5.6-1.1l-11.6 2a8.17 8.17 0 0 0-4.9 3 8.36 8.36 0 0 0-1.7 5.5l0.4 26.4c0.01 1.72-0.51 3.39-1.5 4.8a8.5 8.5 0 0 1-4 3c-2.3 0.9-7.3 2.8-9.7 3.7-2.8 1-6.1 0.2-8.8-2.9L167 75.20000000000005a8.14 8.14 0 0 0-4.8-3.1 7.83 7.83 0 0 0-5.6 0.9l-10.2 5.9c-1.71 0.96-3 2.53-3.6 4.4s-0.5 3.9 0.3 5.7l9.4 24.8c0.62 1.6 0.69 3.36 0.2 5a8.33 8.33 0 0 1-2.7 4.2c-2.5 2-5 4.1-7.4 6.2a8.7 8.7 0 0 1-4.6 2c-1.68 0.2-3.38-0.19-4.8-1.1l-22.4-13.8a7.7 7.7 0 0 0-5.5-1.2 8.43 8.43 0 0 0-5 2.8l-7.5 9a8.13 8.13 0 0 0-1.9 5.4c0.07 1.94 0.85 3.8 2.2 5.2l17.3 19.9a7.9 7.9 0 0 1 1.9 4.6c0.11 1.72-0.31 3.43-1.2 4.9q-2.55 4.05-4.8 8.4a7.9 7.9 0 0 1-3.6 3.4c-1.56 0.73-3.3 0.98-5 0.7l-25.9-5a7.74 7.74 0 0 0-5.6 0.7 8.37 8.37 0 0 0-3.8 4.3l-4 11c-0.72 1.84-0.68 3.89 0.1 5.7a8.12 8.12 0 0 0 3.8 4.2l23.1 12.8a7.6 7.6 0 0 1 3.4 3.7c0.71 1.53 0.89 3.26 0.5 4.9-0.6 3.2-1.2 6.3-1.7 9.5-0.21 1.7-0.99 3.29-2.2 4.5a8.2 8.2 0 0 1-4.4 2.3l-26.1 4.2c-1.92 0.24-3.7 1.17-5 2.6a8.65 8.65 0 0 0-2.1 5.3v11.7c-0.01 1.96 0.71 3.86 2.02 5.32a7.95 7.95 0 0 0 5.08 2.58l26.1 4.2a8.2 8.2 0 0 1 4.4 2.3 8.3 8.3 0 0 1 2.2 4.5c0.5 3.2 1 6.4 1.7 9.5 0.31 1.66 0.1 3.37-0.6 4.9a9 9 0 0 1-3.3 3.7l-23.1 12.8a7.75 7.75 0 0 0-3.8 4.2 8.57 8.57 0 0 0-0.1 5.7l4 11c0.68 1.83 2 3.35 3.7 4.3 1.75 0.93 3.78 1.18 5.7 0.7l25.9-5c1.69-0.3 3.43-0.09 5 0.6a7.64 7.64 0 0 1 3.6 3.5q2.25 4.2 4.8 8.4a8.16 8.16 0 0 1 1.2 4.91 8.23 8.23 0 0 1-1.9 4.69l-17.3 20a8.4 8.4 0 0 0-2.2 5.2c-0.09 1.98 0.59 3.91 1.9 5.4l7.5 9a7.87 7.87 0 0 0 5 2.8c1.93 0.28 3.9-0.19 5.5-1.3l22.7-13.6a8.3 8.3 0 0 1 4.8-1.1c1.71 0.16 3.32 0.86 4.6 2 2.4 2.1 4.9 4.2 7.4 6.2a7.87 7.87 0 0 1 2.7 4.2 8.6 8.6 0 0 1-0.2 5l-9.4 24.8c-0.8 1.8-0.9 3.83-0.3 5.7s1.89 3.44 3.6 4.4l10.2 5.9c1.69 0.99 3.69 1.31 5.6 0.9a8.14 8.14 0 0 0 4.8-3.1l16.8-20.6c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.6 1.62 0.54 3.03 1.59 4 3 0.99 1.4 1.51 3.08 1.5 4.8l-0.4 26.4c-0.1 1.98 0.5 3.93 1.7 5.5a8.17 8.17 0 0 0 4.9 3l11.6 2c1.94 0.29 3.92-0.1 5.6-1.1a8.17 8.17 0 0 0 3.5-4.5l8.6-25c0.58-1.6 1.62-3 3-4 1.39-1 3.09-1.49 4.8-1.4h9.8c1.7 0 3.37 0.49 4.8 1.4 1.41 0.97 2.46 2.38 3 4l8.6 25a7.9 7.9 0 0 0 3.5 4.5c1.68 1 3.66 1.39 5.6 1.1l11.6-2a8.23 8.23 0 0 0 4.9-3.01 8.16 8.16 0 0 0 1.7-5.49l-0.4-26.4c-0.01-1.72 0.51-3.4 1.5-4.8 1-1.38 2.4-2.42 4-3 4.2-1.4 7-2.5 9.6-3.5a6.835 6.835 0 0 1 8.3 2.1l17 20.9a8.14 8.14 0 0 0 4.8 3.1c1.91 0.41 3.91 0.09 5.6-0.9l10.2-5.9a8.2 8.2 0 0 0 3.6-4.4c0.6-1.87 0.5-3.9-0.3-5.7l-9.4-24.8c-0.62-1.6-0.69-3.36-0.2-5a9 9 0 0 1 2.7-4.2c2.5-2 5-4.1 7.4-6.2a8.7 8.7 0 0 1 4.6-2c1.68-0.2 3.38 0.19 4.8 1.1l22.6 13.7a7.64 7.64 0 0 0 5.5 1.2 8.43 8.43 0 0 0 5-2.8l7.5-9a8.13 8.13 0 0 0 1.9-5.4 7.68 7.68 0 0 0-2.2-5.2l-17.3-19.9a7.9 7.9 0 0 1-1.9-4.6c-0.11-1.72 0.31-3.43 1.2-4.9q2.55-4.05 4.8-8.4c0.83-1.5 2.08-2.71 3.6-3.5 1.56-0.73 3.3-0.98 5-0.7l25.9 5c1.89 0.48 3.89 0.23 5.6-0.7 1.75-0.92 3.1-2.45 3.8-4.3l4-11c0.72-1.84 0.68-3.89-0.1-5.7a8.12 8.12 0 0 0-3.8-4.2l-23.1-12.8a7.64 7.64 0 0 1-3.4-3.7 7.82 7.82 0 0 1-0.5-5c0.6-3.2 1.2-6.3 1.7-9.5 0.21-1.7 0.98-3.29 2.2-4.5a8.2 8.2 0 0 1 4.4-2.3l26.1-4.2c1.92-0.24 3.7-1.17 5-2.6a8.65 8.65 0 0 0 2.1-5.3v-11.7a8.4 8.4 0 0 0-2.2-5.2 8.02 8.02 0 0 0-5-2.5M256 112a143.96 143.96 0 0 1 139.4 108.1c0.58 2.36 0.62 4.82 0.1 7.2-0.52 2.36-1.55 4.57-3 6.5-1.48 1.92-3.4 3.47-5.6 4.5a15.6 15.6 0 0 1-7 1.6h-105.2a16.27 16.27 0 0 1-14-8.1l-52.1-91.7a16.75 16.75 0 0 1-2.1-7c-0.1-2.46 0.31-4.91 1.2-7.2 0.92-2.29 2.4-4.32 4.3-5.9a15.8 15.8 0 0 1 6.4-3.4c12.3-3.03 24.93-4.57 37.6-4.6m-144 144c-0.02-19.28 3.82-38.36 11.31-56.12a143.9 143.9 0 0 1 32.29-47.28c1.77-1.69 3.89-2.99 6.2-3.8a16 16 0 0 1 7.2-0.7c2.44 0.31 4.77 1.2 6.8 2.6 2.01 1.38 3.68 3.19 4.9 5.3l52.2 91.9c1.38 2.4 2.1 5.13 2.1 7.9 0.02 2.77-0.71 5.5-2.1 7.9l-52.7 91.7c-1.2 2.15-2.92 3.97-5 5.3-2.08 1.3-4.39 2.18-6.8 2.6-2.42 0.32-4.89 0.08-7.2-0.7-2.31-0.81-4.43-2.11-6.2-3.8a143.3 143.3 0 0 1-32-47.1 147 147 0 0 1-11-55.7m144 144c-12.89 0.02-25.73-1.62-38.2-4.9-2.38-0.6-4.57-1.77-6.4-3.4a15.65 15.65 0 0 1-4.2-5.9c-0.95-2.28-1.36-4.74-1.2-7.21 0.16-2.46 0.87-4.85 2.1-6.99l52.6-91.5a15.9 15.9 0 0 1 5.87-5.88c2.44-1.41 5.21-2.14 8.03-2.12H380c2.43-0.02 4.82 0.53 7 1.6 3.28 1.61 5.91 4.29 7.45 7.6 1.55 3.31 1.92 7.05 1.05 10.6a144 144 0 0 1-51.24 77.93 143.97 143.97 0 0 1-88.26 30.17",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "filters-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M46.5 107.29999999999995l160.3 186.7c2.37 2.76 3.71 6.26 3.8 9.9v113.4c-0.03 1.59 0.45 3.14 1.37 4.44a7.46 7.46 0 0 0 3.73 2.76l76.2 25.3a7.694 7.694 0 0 0 9.6-4.7c0.29-0.8 0.42-1.65 0.4-2.5v-138.8c0.01-3.65 1.36-7.18 3.8-9.9l160.2-186.7c2.29-2.68 3.43-6.17 3.17-9.69s-1.9-6.79-4.57-9.11c-2.39-2.07-5.44-3.2-8.6-3.2h-399.1c-1.75-0.01-3.48 0.33-5.1 0.99-1.62 0.67-3.09 1.64-4.33 2.88a13.3 13.3 0 0 0-2.88 4.33c-0.66 1.62-1 3.35-0.99 5.1a12.1 12.1 0 0 0 3 8.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    filters: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M46.5 107.40000000000009l160.3 186.7c2.37 2.76 3.71 6.26 3.8 9.9v113.4c-0.03 1.59 0.45 3.14 1.37 4.44a7.46 7.46 0 0 0 3.73 2.76l76.2 25.3c1.9 0.61 3.96 0.47 5.75-0.41a7.73 7.73 0 0 0 3.85-4.29c0.29-0.8 0.42-1.65 0.4-2.5V304c0.01-3.65 1.36-7.18 3.8-9.9l160.2-186.7c2.29-2.69 3.43-6.17 3.17-9.69s-1.9-6.79-4.57-9.11a13.07 13.07 0 0 0-8.6-3.2h-399.1c-1.75-0.01-3.48 0.33-5.1 0.99-1.62 0.67-3.09 1.64-4.33 2.88a13.3 13.3 0 0 0-2.88 4.33c-0.66 1.62-1 3.35-0.99 5.1-0.17 3.18 0.9 6.3 3 8.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "calendar-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M101.30000000000018 81h320a48.003 48.003 0 0 1 48 48v288a48.003 48.003 0 0 1-48 48h-320a48.003 48.003 0 0 1-48-48v-288a48.003 48.003 0 0 1 48-48Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M301.3000000000002 257c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M381.3000000000002 257c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M301.3000000000002 337c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M381.3000000000002 337c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M141.30000000000018 337c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M221.30000000000018 337c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M141.30000000000018 417c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M221.30000000000018 417c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M301.3000000000002 417c5.95 0.01 11.69-2.2 16.11-6.19 4.41-3.99 7.19-9.48 7.78-15.4 0.59-5.93-1.04-11.86-4.58-16.64a23.9 23.9 0 0 0-14.57-9.25 23.97 23.97 0 0 0-17 2.92 23.983 23.983 0 0 0-9.4 30.8 24.04 24.04 0 0 0 12.48 11.92c2.91 1.21 6.03 1.83 9.18 1.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M133.30000000000018 49v32",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M389.3000000000002 49v32",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M469.3000000000002 161h-416",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    calendar: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M480 128a64.03 64.03 0 0 0-18.76-45.24c-12-12-28.27-18.75-45.24-18.76h-16v-15.6c0-8.6-6.6-16-15.2-16.4-4.24-0.18-8.37 1.31-11.52 4.16a16.13 16.13 0 0 0-5.28 11.04v16.8h-224v-15.6c0-8.6-6.6-16-15.2-16.4-4.24-0.18-8.37 1.31-11.52 4.16a16.13 16.13 0 0 0-5.28 11.04v16.8h-16a64.03 64.03 0 0 0-45.24 18.76c-12 12-18.75 28.27-18.76 45.24v12a4.014 4.014 0 0 0 4 4h440a4.014 4.014 0 0 0 4-4z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M32 416a64.03 64.03 0 0 0 18.76 45.24c12 12 28.27 18.75 45.24 18.76h320a64.03 64.03 0 0 0 45.24-18.76c12-12 18.75-28.27 18.76-45.24v-237c0.01-0.4-0.06-0.79-0.21-1.16s-0.37-0.7-0.65-0.98-0.61-0.5-0.98-0.65-0.76-0.22-1.16-0.21h-442c-0.4-0.01-0.79 0.06-1.16 0.21s-0.7 0.37-0.98 0.65-0.5 0.61-0.65 0.98-0.22 0.76-0.21 1.16z m344-208a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m0 80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m-80-80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m0 80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m0 80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m-80-80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m0 80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m-80-80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68m0 80a23.97 23.97 0 0 1 16.08 6.24c4.4 4.01 7.15 9.51 7.72 15.43 0.58 5.92-1.08 11.84-4.63 16.61a23.9 23.9 0 0 1-14.59 9.2c-5.84 1.15-11.89 0.09-16.99-2.98-5.1-3.06-8.87-7.92-10.59-13.61a23.94 23.94 0 0 1 1.3-17.21 23.97 23.97 0 0 1 21.7-13.68",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    settings: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M464 250a10 10 0 0 0-2.9-6.7 10.8 10.8 0 0 0-6.5-3.3l-25.6-4.2a5.87 5.87 0 0 1-3-1.6 5.7 5.7 0 0 1-1.5-3.1c-0.5-3.2-1-6.4-1.7-9.5a5.36 5.36 0 0 1 0.4-3.3 6.63 6.63 0 0 1 2.2-2.5l22.8-12.7c2.26-1.16 4.01-3.12 4.9-5.5 0.93-2.37 0.97-5 0.1-7.4l-3.9-10.9a10.6 10.6 0 0 0-4.8-5.6 10.29 10.29 0 0 0-7.3-0.9l-25.5 5c-1.16 0.18-2.34 0.01-3.4-0.5a5.34 5.34 0 0 1-2.4-2.3q-2.25-4.2-4.8-8.4c-0.6-0.99-0.88-2.14-0.8-3.3 0.07-1.18 0.53-2.3 1.3-3.2l17-19.6c1.69-1.87 2.68-4.28 2.8-6.8 0.08-2.52-0.78-4.97-2.4-6.9l-7.4-8.9a10.3 10.3 0 0 0-13.6-2l-22.4 13.4c-1 0.58-2.15 0.83-3.3 0.7a5.24 5.24 0 0 1-3.1-1.4c-2.5-2.2-5-4.3-7.4-6.2a5.43 5.43 0 0 1-1.9-2.8c-0.28-1.13-0.21-2.31 0.2-3.4l9.3-24.4c0.99-2.33 1.1-4.95 0.31-7.36s-2.43-4.45-4.61-5.74l-10.1-5.9a10.34 10.34 0 0 0-7.3-1.2 9.96 9.96 0 0 0-6.2 4l-16.4 20.5a5.24 5.24 0 0 1-2.5 1.9c-1.02 0.33-2.13 0.26-3.1-0.2-0.6-0.2-5.8-2.4-9.8-3.7a5.5 5.5 0 0 1-2.7-2 5.3 5.3 0 0 1-1-3.2l0.4-26.1c0.15-2.55-0.63-5.08-2.2-7.1-1.55-2.01-3.8-3.36-6.3-3.8l-11.4-2c-2.49-0.4-5.04 0.09-7.2 1.4a10.5 10.5 0 0 0-4.5 5.8l-8.5 24.8a5.12 5.12 0 0 1-2.1 2.7c-0.98 0.64-2.13 0.96-3.3 0.9h-9.8c-1.15 0.04-2.28-0.31-3.2-1-0.97-0.66-1.7-1.6-2.1-2.7l-8.5-24.7c-0.71-2.43-2.32-4.51-4.5-5.8-2.16-1.3-4.71-1.79-7.2-1.4l-11.5 2c-2.48 0.48-4.72 1.83-6.3 3.8a9.97 9.97 0 0 0-2.2 7l0.4 26.2c-0.01 1.19-0.4 2.34-1.1 3.3-0.73 0.91-1.7 1.61-2.8 2-2.3 0.9-7.3 2.8-9.5 3.6-2 0.7-4.2-0.1-5.9-2.1l-16.3-20a9.96 9.96 0 0 0-6.2-4c-2.49-0.5-5.07-0.11-7.3 1.1l-10.1 5.8c-2.23 1.29-3.9 3.35-4.7 5.8-0.82 2.43-0.68 5.08 0.4 7.4l9.2 24.3c0.43 1.09 0.47 2.29 0.1 3.4-0.28 1.1-0.91 2.09-1.8 2.8-2.4 2-4.9 4-7.4 6.2-0.86 0.78-1.94 1.27-3.09 1.4s-2.31-0.12-3.31-0.7l-22.1-13.7a10.68 10.68 0 0 0-7.2-1.6c-2.51 0.36-4.79 1.64-6.4 3.6l-7.4 8.9a10.22 10.22 0 0 0-2.4 6.9c0.1 2.53 1.09 4.94 2.8 6.8l17.1 19.6c0.77 0.9 1.23 2.02 1.3 3.2a5.47 5.47 0 0 1-0.8 3.3c-1.7 2.7-3.3 5.6-4.8 8.4a5.8 5.8 0 0 1-2.5 2.4c-1.05 0.51-2.24 0.69-3.4 0.5l-25.5-4.9a10.2 10.2 0 0 0-7.31 0.91c-2.24 1.2-3.94 3.19-4.79 5.59l-4 10.9c-0.92 2.39-0.88 5.04 0.1 7.4 0.92 2.36 2.66 4.31 4.9 5.5l22.8 12.7c1.01 0.57 1.81 1.45 2.3 2.5 0.49 1.06 0.6 2.27 0.3 3.4l-0.2 1.3c-0.5 2.8-1 5.4-1.5 8.2a5.7 5.7 0 0 1-1.5 3c-0.81 0.84-1.86 1.4-3 1.6l-25.7 4.2c-2.51 0.3-4.82 1.51-6.5 3.4a10.22 10.22 0 0 0-2.6 6.9v11.6c-0.01 2.54 0.91 4.99 2.59 6.89 1.67 1.9 3.99 3.11 6.51 3.41l25.7 4.1c1.15 0.18 2.21 0.75 3 1.6 0.81 0.85 1.33 1.94 1.5 3.1 0.5 3.2 1 6.4 1.7 9.5 0.21 1.15 0.08 2.33-0.4 3.4a6.63 6.63 0 0 1-2.2 2.5l-22.8 12.7a10.2 10.2 0 0 0-4.9 5.5c-0.88 2.38-0.92 5-0.1 7.4l4 10.9a10.6 10.6 0 0 0 4.8 5.6c2.24 1.19 4.84 1.52 7.3 0.9l25.6-4.9c1.16-0.23 2.36-0.05 3.4 0.5 1.02 0.5 1.86 1.3 2.4 2.3q2.25 4.2 4.8 8.4c0.6 0.99 0.88 2.14 0.8 3.3a5.4 5.4 0 0 1-1.3 3.2l-17 19.6a10.312 10.312 0 0 0-0.5 13.8l7.4 8.9a10.3 10.3 0 0 0 13.6 2l22.4-13.4c1-0.58 2.15-0.83 3.3-0.7 1.16 0.11 2.25 0.6 3.1 1.4 2.5 2.2 5 4.3 7.4 6.2 0.92 0.71 1.58 1.69 1.9 2.8 0.32 1.12 0.28 2.3-0.1 3.4l-9.3 24.4c-0.99 2.33-1.1 4.95-0.31 7.36s2.43 4.45 4.61 5.74l10.1 5.8c2.2 1.29 4.8 1.71 7.3 1.2a9.96 9.96 0 0 0 6.2-4l16.6-20.3c1.4-1.7 3.6-2.5 5.2-1.8 3.5 1.4 5.8 2.2 9.9 3.6 1.09 0.37 2.03 1.07 2.7 2a5.3 5.3 0 0 1 1 3.2l-0.4 26.1a11.3 11.3 0 0 0 2.2 7.1c1.55 2.01 3.8 3.36 6.3 3.8l11.4 2c2.49 0.41 5.04-0.09 7.2-1.4 2.18-1.29 3.79-3.37 4.5-5.8l8.5-24.8a5.12 5.12 0 0 1 2.1-2.7c0.95-0.69 2.13-1.01 3.3-0.9h9.8c1.15-0.04 2.28 0.32 3.2 1 0.97 0.66 1.7 1.6 2.1 2.7l8.5 24.7a10.66 10.66 0 0 0 10 7.4c0.6-0.02 1.21-0.08 1.8-0.2l11.5-2c2.49-0.47 4.72-1.82 6.3-3.8a9.97 9.97 0 0 0 2.2-7l-0.4-26.2c-0.04-1.15 0.31-2.28 1-3.2 0.69-0.91 1.63-1.6 2.7-2 3.8-1.3 6.5-2.3 8.9-3.2l0.6-0.2c3.1-1.1 4.6 0.2 5.5 1.3l16.8 20.6a10.28 10.28 0 0 0 13.5 2.8l10.1-5.8a9.95 9.95 0 0 0 4.6-5.7c0.8-2.42 0.7-5.05-0.3-7.4l-9.2-24.3a5.72 5.72 0 0 1-0.2-3.4 4.88 4.88 0 0 1 1.9-2.8c2.4-2 4.9-4 7.4-6.2 0.87-0.76 1.95-1.25 3.1-1.4 1.15-0.12 2.3 0.13 3.3 0.7l22.4 13.4a10.68 10.68 0 0 0 7.2 1.6c2.51-0.36 4.79-1.64 6.4-3.6l7.4-8.9c1.64-1.95 2.5-4.45 2.4-7-0.1-2.53-1.09-4.94-2.8-6.8l-17.1-19.7c-0.76-0.89-1.21-2-1.3-3.17s0.19-2.33 0.8-3.33c1.7-2.7 3.3-5.6 4.8-8.4a6.5 6.5 0 0 1 2.5-2.4c1.05-0.51 2.24-0.69 3.4-0.5l25.5 5c2.46 0.62 5.07 0.3 7.31-0.9s3.95-3.2 4.79-5.6l3.9-10.9c0.92-2.39 0.88-5.04-0.1-7.4-0.92-2.36-2.66-4.31-4.9-5.5l-22.8-12.7a5.57 5.57 0 0 1-2.3-2.5c-0.5-1.06-0.6-2.27-0.3-3.4l0.2-1.3c0.5-2.8 1-5.4 1.5-8.2 0.19-1.13 0.71-2.17 1.5-3 0.81-0.84 1.86-1.4 3-1.6l25.7-4.1c2.51-0.3 4.82-1.51 6.5-3.4 1.69-1.9 2.62-4.36 2.6-6.9v-11.8z m-282.4 94a15.5 15.5 0 0 1-5.1 5.4c-2.1 1.37-4.5 2.23-7 2.5-2.48 0.27-4.99-0.07-7.3-1-2.34-0.9-4.43-2.34-6.1-4.2a135.03 135.03 0 0 1-34.9-90.88 135.02 135.02 0 0 1 35.3-90.72c1.67-1.86 3.76-3.3 6.1-4.2 2.32-0.89 4.83-1.2 7.3-0.9 2.5 0.27 4.9 1.13 7 2.5a16.56 16.56 0 0 1 5.1 5.4l45.6 80.4c1.38 2.41 2.1 5.13 2.1 7.9s-0.72 5.49-2.1 7.9z m74.4 47.2c-9.51 0-19-1-28.3-3a15.52 15.52 0 0 1-11-9.1c-0.97-2.27-1.41-4.73-1.3-7.2 0.13-2.47 0.85-4.87 2.1-7l46-80c1.4-2.4 3.4-4.4 5.8-5.8 2.4-1.39 5.13-2.12 7.9-2.1h92.1c2.47 0.01 4.9 0.59 7.1 1.7a15.9 15.9 0 0 1 5.6 4.7c1.47 2.02 2.46 4.34 2.9 6.8 0.39 2.44 0.22 4.94-0.5 7.3-17.5 54.2-68.4 93.7-128.4 93.7m7.5-163.9L218 147.0999999999999a17.25 17.25 0 0 1-2.1-7c-0.22-3.72 0.91-7.4 3.16-10.37s5.5-5.04 9.14-5.83c9.11-1.91 18.39-2.89 27.7-2.9 60 0 110.9 39.4 128.4 93.8 0.71 2.37 0.88 4.86 0.5 7.3-0.41 2.45-1.4 4.77-2.88 6.77-1.47 1.99-3.4 3.62-5.62 4.73-2.21 1.1-4.63 1.68-7.1 1.7h-92c-2.8 0-5.56-0.72-8-2.1-2.33-1.5-4.28-3.52-5.7-5.9",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    trailer: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M434.4 215.4000000000001l-270.2 2.1c36.8-14.4 74.6-28.9 112.8-43.5 48.7-18.7 97.401-37.3 143.201-55.4a15.34 15.34 0 0 0 8.091-8.42 15.33 15.33 0 0 0-0.192-11.68l-1.899-4.5A541 541 0 0 0 396 26.59999999999991a14.75 14.75 0 0 0-7.795-5.46 14.68 14.68 0 0 0-9.504 0.46c-7.2 2.8-64.401 25-129.901 50.2-75.2 29.1-161.2 62.2-194.5 75.2a14.75 14.75 0 0 0-8.037 7.63 14.75 14.75 0 0 0-0.463 11.07c5.3 14.7 8.7 24.1 11.2 30.6a48.86 48.86 0 0 0-14.2 23.9l-0.8 3.7-0.3 1.4a18.4 18.4 0 0 0-0.3 3.2v7.6c0.088 1.45 0.323 2.89 0.7 4.3a50.06 50.06 0 0 0 34.9 39.2c0.2 37.9 0.7 155.2 0.7 177.9 0.005 3.9 1.555 7.63 4.311 10.39a14.76 14.76 0 0 0 10.39 4.31c52.299 0 344.399 1.3 344.399 1.3 3.865 0 7.577-1.52 10.329-4.23a14.7 14.7 0 0 0 4.371-10.27c0-1.7 2.3-168.2 2.3-224.7-0.2-16.7-15.5-18.9-19.4-18.9m-155.8 68.8l23.9-38.5 53.6-0.4-24.1 38.9z m-10.8-38.2l-23.7 38.2h-52.9l23.4-37.9z m-36.5-86c-16.6 6.4-32.9 12.7-49.2 19l6-52.3 49.2-19z m35.2-13.6l-4.4 1.7 6-52.4 50.5-19.4-6.1 52.5z m129.1-49.8c-17 6.7-34.5 13.4-52 20.2l6.101-52.5 27.599-10.6c5.3 11.8 13.2 30.5 18.3 42.9m-312.1 86.6l-5.2-14.1c19.4-7.6 47.4-18.4 78.8-30.5l-6 52.4c-6.4 2.5-12.9 5-19.2 7.5a45.6 45.6 0 0 0-16.213-12.17A45.5 45.5 0 0 0 95.8 182.4000000000001c-0.8 0-1.9 0.2-2.8 0.2-2.642-0.03-5.283 0.13-7.9 0.5-0.535-0.01-1.07 0.02-1.6 0.1M70.6 234.4000000000001l0.6-7c1.494-5.09 4.801-9.46 9.297-12.28a21.72 21.72 0 0 1 15.103-3.02c5.217 0.69 9.978 3.33 13.319 7.4a20.75 20.75 0 0 1 4.681 14.5 19.9 19.9 0 0 1-5.9 12.1 21.949 21.949 0 0 1-14.6 6.6 20.75 20.75 0 0 1-22.2-17.3c-0.06-0.34-0.16-0.68-0.3-1m35.6 46c1-0.3 1.8-0.9 2.8-1.3a47.5 47.5 0 0 0 10.2-4.8l0.2-0.1a52.1 52.1 0 0 0 10.8-9.1c0.3-0.3 0.6-0.5 0.8-0.7s0.7-1 1.1-1.4c0.8-1 1.5-2 2.2-3a46 46 0 0 0 7.2-13l38.4-0.3-23.3 37.6h-50.4z m316.001 163.7c-54.8-0.2-248.701-1.1-315.201-1.2-0.1-29.5-0.3-88-0.5-129.3h317.4c-0.6 49.6-1.299 104.9-1.699 130.5M424 284.2000000000003h-57.6l24.2-39.2 33.5-0.3c0.1 11.1-0.1 24.7-0.1 39.5",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "add-to-library": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M140.5999999999999 72.5h213c9.1-0.3 16.2-7.3 16-15.8-0.3-8.1-7.3-14.6-16-14.9h-213c-9.1 0.3-16.2 7.3-16 15.8 0.3 8.1 7.3 14.6 16 14.9",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M116.79999999999995 118.59999999999991h255.1c8.9 0 16.1-6.9 16.1-15.3 0-8.5-7.2-15.3-16.1-15.3H116.79999999999995c-8.9 0-16.1 6.9-16.1 15.3 0.1 8.4 7.3 15.3 16.1 15.3",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M391.29999999999995 311.5999999999999h-40.799v-40.7c0-3.66-1.454-7.17-4.042-9.76a13.8 13.8 0 0 0-9.758-4.04c-3.66 0-7.17 1.45-9.758 4.04a13.8 13.8 0 0 0-4.042 9.76v40.7h-40.7c-3.66 0-7.17 1.45-9.758 4.04a13.81 13.81 0 0 0 0 19.52 13.8 13.8 0 0 0 9.758 4.04h40.7v40.7c0 3.66 1.454 7.17 4.042 9.76a13.8 13.8 0 0 0 9.758 4.04c3.66 0 7.17-1.45 9.758-4.04a13.8 13.8 0 0 0 4.042-9.76v-40.7h40.799a13.8 13.8 0 0 0 13.8-13.8 13.8 13.8 0 0 0-13.8-13.8",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M424.0999999999999 210.5999999999999v-30a47.6 47.6 0 0 0-13.93-33.57 47.6 47.6 0 0 0-33.57-13.93H98.49999999999989a47.528 47.528 0 0 0-47.5 47.5v179a47.557 47.557 0 0 0 47.5 47.5h119a144.4 144.4 0 0 0 45.184 42.53 144.3 144.3 0 0 0 58.863 19.65 144.4 144.4 0 0 0 61.673-6.86 144.3 144.3 0 0 0 53.1-32.11 144.3 144.3 0 0 0 34.73-51.43 144.3 144.3 0 0 0 9.95-61.25c-1.17-20.9-6.86-41.29-16.68-59.77a144.5 144.5 0 0 0-40.22-47.26m-325.6 165.8a16.93 16.93 0 0 1-11.94-4.96 16.94 16.94 0 0 1-4.96-11.94v-179a16.94 16.94 0 0 1 4.96-11.94 16.93 16.93 0 0 1 11.94-4.96h278.1a16.93 16.93 0 0 1 16.9 16.9v12a144.25 144.25 0 0 0-82.717-9.45 144.29 144.29 0 0 0-115.109 110.31 144.3 144.3 0 0 0 5.926 83.04z m238.3 66a116.8 116.8 0 0 1-46.637-9.74 116.8 116.8 0 0 1-38.863-27.56l-4.5-5.5a122.5 122.5 0 0 1-13.5-20.7l-1.3-2.5h-0.5a117.002 117.002 0 0 1 27.188-138.12 117.006 117.006 0 0 1 187.392 45.29 117.03 117.03 0 0 1 3.18 74.15 117.02 117.02 0 0 1-112.46 84.68",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "remove-from-library": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M391.20000000000005 311.5999999999999h-109.1a13.8 13.8 0 0 0-13.8 13.8 13.8 13.8 0 0 0 13.8 13.8h109.1a13.8 13.8 0 0 0 13.8-13.8 13.8 13.8 0 0 0-13.8-13.8",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M424.0999999999999 210.5999999999999v-30a47.523 47.523 0 0 0-47.5-47.5h-278.1a47.6 47.6 0 0 0-33.57 13.93 47.6 47.6 0 0 0-13.93 33.57v179a47.6 47.6 0 0 0 13.93 33.57c8.9 8.9 20.98 13.91 33.57 13.93h119c11.8 17.28 27.22 31.8 45.18 42.53a144.3 144.3 0 0 0 58.87 19.65c20.81 2.21 41.85-0.13 61.67-6.86a144.3 144.3 0 0 0 53.1-32.11 144.3 144.3 0 0 0 34.73-51.43 144.3 144.3 0 0 0 9.95-61.25c-1.17-20.9-6.86-41.29-16.68-59.77a144.5 144.5 0 0 0-40.22-47.26m-325.6 165.8a16.93 16.93 0 0 1-16.9-16.9v-179a16.93 16.93 0 0 1 16.9-16.9h278.1a16.93 16.93 0 0 1 16.9 16.9v12a144.24 144.24 0 0 0-82.72-9.45c-27.9 5.04-53.7 18.19-74.17 37.81a144.33 144.33 0 0 0-40.94 72.5 144.36 144.36 0 0 0 5.93 83.04z m238.2 66c-16.05-0.01-31.93-3.32-46.64-9.74a116.8 116.8 0 0 1-38.86-27.56l-4.5-5.5c-5.19-6.43-9.71-13.36-13.5-20.7l-1.3-2.5h-0.5a116.9 116.9 0 0 1-10.51-67.04c3.2-22.89 13.12-44.32 28.51-61.58a116.8 116.8 0 0 1 57.91-35.36c22.38-5.81 45.97-4.84 67.8 2.76a116.96 116.96 0 0 1 54.84 39.97 116.97 116.97 0 0 1 23.39 63.7c1.32 23.08-4.22 46.04-15.94 65.96a116.9 116.9 0 0 1-49.9 45.99 115.34 115.34 0 0 1-50.8 11.6",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M140.5999999999999 72.5h213c9.1-0.3 16.2-7.3 16-15.8-0.3-8.1-7.3-14.6-16-14.9h-213c-9.1 0.3-16.2 7.3-16 15.8 0.3 8.1 7.3 14.6 16 14.9",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M116.79999999999995 118.59999999999991H372c8.9 0 16.1-6.9 16.1-15.3 0-8.5-7.2-15.3-16.1-15.3h-255.1c-8.9 0-16.1 6.9-16.1 15.3s7.2 15.3 16 15.3",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    details: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M413.9000000000001 80h-315.6a53.4 53.4 0 0 0-37.66 15.64 53.4 53.4 0 0 0-15.64 37.66v246.2a53.4 53.4 0 0 0 15.64 37.66 53.4 53.4 0 0 0 37.66 15.64h315.6a53.4 53.4 0 0 0 37.66-15.64 53.4 53.4 0 0 0 15.64-37.66v-246.2a53.45 53.45 0 0 0-15.66-37.64 53.45 53.45 0 0 0-37.64-15.66m19.8 299.5a19.84 19.84 0 0 1-19.8 19.8h-315.6a19.84 19.84 0 0 1-19.8-19.8v-246.2a19.84 19.84 0 0 1 19.8-19.8h315.6a19.84 19.84 0 0 1 19.8 19.8z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M128.70000000000005 184.5999999999999h204.6a16.55 16.55 0 0 0 10.95-5.21c2.86-3.07 4.45-7.1 4.45-11.29s-1.59-8.22-4.45-11.29a16.55 16.55 0 0 0-10.95-5.21h-204.6c-4.18 0.29-8.1 2.15-10.95 5.21-2.86 3.07-4.45 7.1-4.45 11.29s1.59 8.22 4.45 11.29c2.85 3.06 6.77 4.92 10.95 5.21",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M218.4000000000001 299.1999999999998h-89.7c-4.19 0.29-8.11 2.16-10.98 5.23a16.595 16.595 0 0 0 0 22.64c2.87 3.07 6.79 4.94 10.98 5.23h87.8c4.19-0.29 8.11-2.16 10.98-5.23 2.86-3.07 4.46-7.12 4.46-11.32s-1.6-8.24-4.46-11.32a16.6 16.6 0 0 0-10.98-5.23",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M335.4000000000001 223.4000000000001h-206.7c-4.19 0.29-8.11 2.16-10.98 5.23a16.595 16.595 0 0 0 0 22.64c2.87 3.07 6.79 4.94 10.98 5.23h205.1c4.19-0.29 8.11-2.16 10.98-5.23s4.46-7.12 4.46-11.32-1.59-8.24-4.46-11.32a16.6 16.6 0 0 0-10.98-5.23",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    memory: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M436.9000000000001 143.0999999999999l-59.9-59.9a38.56 38.56 0 0 0-27.6-11.4h-213.2a52.036 52.036 0 0 0-52 52v260.1a52.036 52.036 0 0 0 52 52h260.1a52.036 52.036 0 0 0 52-52v-213.2c0.02-5.13-0.97-10.21-2.93-14.94a38.8 38.8 0 0 0-8.47-12.66m-281.2-6.3h143a6.46 6.46 0 0 1 4.6 1.9c0.6 0.6 1.08 1.32 1.41 2.11 0.32 0.79 0.49 1.64 0.49 2.49v39c0 0.85-0.17 1.7-0.49 2.49a6.53 6.53 0 0 1-3.52 3.52c-0.79 0.32-1.64 0.49-2.49 0.49h-143c-0.85 0-1.7-0.17-2.49-0.49a6.53 6.53 0 0 1-3.52-3.52c-0.32-0.79-0.49-1.64-0.49-2.49v-39c0-0.85 0.17-1.7 0.49-2.49a6.45 6.45 0 0 1 2.39-2.92 6.55 6.55 0 0 1 3.62-1.09m113.6 260.1c-12.85 0.6-25.58-2.62-36.6-9.25a65.06 65.06 0 0 1-25.29-28.03 65.06 65.06 0 0 1-5.46-37.35 65.04 65.04 0 0 1 16.22-34.09 64.993 64.993 0 0 1 70.12-17.4 64.93 64.93 0 0 1 30.27 22.55 64.95 64.95 0 0 1 12.64 35.57c0.1 2 0.1 4.1 0 6.1a65.05 65.05 0 0 1-18.99 42.91 65.12 65.12 0 0 1-42.91 18.99",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "play-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M133.49999999999997 106.60000000000036V401.3000000000002c0 17.7 15.1 29 27.6 20.5l220.5-150.7c8.8-6.9 10.7-20.2 4.2-29.7a22.2 22.2 0 0 0-4.2-4.5l-220.5-150.8c-12.5-8.5-27.6 2.9-27.6 20.5Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "36.752",
                                fill: "none"
                            }
                        }]
                    },
                    play: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M396.099 246.09999999999945l-231.9-160.6c-1.443-1-3.07-1.71-4.787-2.08a13.3 13.3 0 0 0-5.219-0.08 13.32 13.32 0 0 0-8.594 5.56 13.7 13.7 0 0 0-2.4 7.6v321.4c0.003 1.75 0.352 3.49 1.028 5.11a13.2 13.2 0 0 0 2.91 4.32 13.2 13.2 0 0 0 4.346 2.88c1.624 0.66 3.363 1 5.116 0.99 2.723 0.02 5.383-0.82 7.6-2.4L396.099 268.1999999999998c1.448-1 2.684-2.27 3.639-3.74a13.4 13.4 0 0 0 1.925-4.85 13.35 13.35 0 0 0-2.164-10.01 13.7 13.7 0 0 0-3.4-3.4z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "external-player": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M433.8000000000002 255.80000000000018c0.1 25.8 0 51.6 0.1 77.5z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M469.3000000000002 137.30000000000018c0-11.6-4.5-20.1-14.2-26.6-4.7-3.2-10.3-4.7-17-4.7h-364a30.06 30.06 0 0 0-17 4.7c-9.7 6.5-14.2 15-14.2 26.6v0.1c0.1 38.2 0.13 76.4 0.1 114.6v74.7c0 16.3 0 32.5-0.1 48.8-0.04 2.02 0.16 4.03 0.6 6 0.84 4.75 2.84 9.21 5.82 13s6.86 6.78 11.28 8.7c1.66 0.69 3.36 1.25 5.1 1.7 2.57 0.72 5.23 1.09 7.9 1.1h46.7l14.8-34.8-33.4-0.2c-3.9 0-7.9-0.1-11.9 0.1-4.2 0.2-10.5 0.4-11.3-6.7-0.09-0.8-0.12-1.6-0.1-2.4v-212.1c0-2.4 0-5 2.1-7.1s4.8-2.1 7.1-2l34.7 0.2h268.1l34.7-0.2c2.3 0 5 0 7.1 2 2.1 2.1 2.1 4.8 2.1 7.1v212.2c0.02 0.8-0.01 1.6-0.1 2.4-0.9 7.2-7.1 6.9-11.3 6.7-3.9-0.2-7.9-0.1-11.9-0.1l-26.7 0.2 16 34.8h38.7c2.67-0.07 5.32-0.44 7.9-1.1 1.76-0.38 3.47-0.95 5.1-1.7 4.43-1.91 8.31-4.9 11.3-8.69 2.98-3.78 4.98-8.26 5.8-13.01 0.48-1.96 0.68-3.98 0.6-6-0.1-16-0.1-32-0.1-48v-75.5c0-38.2-0.1-76.4 0.1-114.6-0.4-0.1-0.4-0.2-0.4-0.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M339 336.8000000000002c-4.8-15.3-4.9-15.3-20.8-14.4h-0.5c-2.9 0-4.4 1-3.6 4.3 1.1 4.6-1 8.1-4.4 11.1-4.8 4.2-10.5 6.6-16.5 8.4-17.9 5.4-36.1 5.7-54.3 2.9-10.1-1.6-20.1-4-28.4-10.8-3-2.5-5.2-5.3-5.3-9.3-0.1-6.6-0.1-6.6-7.1-6.6-1.67 0.1-3.33 0.1-5 0-5.6-0.4-8.6 2.1-10.2 7.4-5.9 19.6-12.2 39.1-18.2 58.7a41.4 41.4 0 0 0-2 9.8c-0.3 4.1 1.4 6.7 6 6.9 4.5 0.1 9 0.7 13.6 0.7 26 0.1 52.1 0 78.1 0 27.5 0 55.1 0.1 82.6 0 14.6-0.1 16.6-2.9 12.3-16.8-5.3-17.4-10.8-34.8-16.3-52.3",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M226.0999999999999 258.0999999999999c-2.9 10-5.9 20-8.9 29.9-2.3 7.4-1.3 10.1 5.7 13.7 3 1.46 6.11 2.7 9.3 3.7a76.7 76.7 0 0 0 27.4 3.1c3.7 0.17 7.4 0.13 11.1-0.1 10.2-1 20.4-2.4 29.2-8.3 2.6-1.7 5.1-3.9 4.1-7.4-3.4-11.9-7.1-23.8-10.7-35.7-0.5-1.6-1-2.7-3.2-1.6-14.1 6.8-29 6.2-43.9 4.7-5.2-0.5-10.5-1.2-14.9-4.1-3.3-2-4.2-1.1-5.2 2.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M276.6999999999998 216.4000000000001c3.1-0.8 3.9-2.7 2.9-5.7-1.7-5.3-3.1-10.6-4.8-15.9-3.1-9.5-4.6-10.5-14.4-10.5-10.6 0-12.7 1.5-15.7 11.6-1.5 5-2.9 10-4.5 14.9-0.9 2.8-0.1 4.6 2.7 5.4a67.76 67.76 0 0 0 33.8 0.2",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "series-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M462.6999999999998 132.59999999999945c-7.8-5.5-16.7-6.3-25.7-6.3h-150.8c-3.4 0-7 0.9-11.3-1.8 12.7-13.4 24.9-26.2 37-39.1 8.4-8.9 16.8-17.7 25-26.7 4.5-5 6.6-10.7 1.1-16.2s-11-3.1-16 1.4c-1.5 1.4-2.9 2.9-4.3 4.3-18.2 19.1-36.5 38.2-54.4 57.6-4.7 5-8.1 6.5-13 0.5-4.7-5.6-10-10.5-15-15.8-14.9-15.5-29.6-31.1-44.6-46.6-4.4-4.7-9.5-7.3-15.3-2.3s-4.7 10.8-0.4 16.2c1.9 2.2 3.8 4.4 5.9 6.4 17 17.9 34.1 35.7 51 53.8 1.8 1.9 5.8 3.6 4.2 6.8-1.4 2.8-5.3 1.5-8.1 1.5h-152.5c-27.5 0.1-39.9 12.7-39.9 40.1v233.6c0 27.6 12.3 40 39.7 40h360.8c5.23-0.02 10.45-0.49 15.6-1.4a30.17 30.17 0 0 0 17.24-10.28c4.4-5.29 6.86-11.93 6.96-18.82 0.1-84 0.1-167.97 0-251.9 0.4-11-4.6-18.9-13.2-25m-101.1 243.1a28.04 28.04 0 0 1-8.21 19.79 28.04 28.04 0 0 1-19.79 8.21h-230.6a28.04 28.04 0 0 1-19.79-8.21 28.04 28.04 0 0 1-8.21-19.79V188.39999999999964c0.01-7.42 2.96-14.54 8.21-19.79s12.37-8.2 19.79-8.21h230.6c7.42 0.01 14.54 2.96 19.79 8.21s8.2 12.37 8.21 19.79z m58.3-103.7c-5.7-0.12-11.13-2.4-15.22-6.37-4.08-3.97-6.5-9.34-6.78-15.03a21.32 21.32 0 0 1 6.1-15.11c3.96-4.04 9.35-6.33 15-6.39h0.4c12.9-0.1 21.4 8.1 21.5 20.8a21.69 21.69 0 0 1-21 22.1m-0.5-67.5a21.525 21.525 0 0 1-19.88-13.27 21.5 21.5 0 0 1-1.22-12.43c0.83-4.18 2.87-8.01 5.88-11.02s6.84-5.05 11.02-5.88a21.5 21.5 0 0 1 12.43 1.22c3.93 1.63 7.29 4.39 9.65 7.93a21.55 21.55 0 0 1 3.62 11.95 21.18 21.18 0 0 1-5.88 14.99 21.2 21.2 0 0 1-14.72 6.51z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    series: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M462.6999999999998 132.59999999999945c-7.8-5.5-16.7-6.3-25.7-6.3h-150.8c-3.4 0-7 0.9-11.3-1.8 12.7-13.4 24.9-26.2 37-39.1 8.4-8.9 16.8-17.7 25-26.7 4.5-5 6.6-10.7 1.1-16.2s-11-3.1-16 1.4c-1.5 1.4-2.9 2.9-4.3 4.3-18.2 19.1-36.5 38.2-54.4 57.6-4.7 5-8.1 6.5-13 0.5-4.7-5.6-10-10.5-15-15.8-14.9-15.5-29.6-31.1-44.6-46.6-4.4-4.7-9.5-7.3-15.3-2.3s-4.7 10.8-0.4 16.2c1.9 2.2 3.8 4.4 5.9 6.4 17 17.9 34.1 35.7 51 53.8 1.8 1.9 5.8 3.6 4.2 6.8-1.4 2.8-5.3 1.5-8.1 1.5h-152.5c-27.5 0.1-39.9 12.7-39.9 40.1v233.6c0 27.6 12.3 40 39.7 40h360.8c5.23-0.02 10.45-0.49 15.6-1.4a30.1 30.1 0 0 0 17.24-10.28c4.4-5.29 6.86-11.93 6.96-18.82 0.1-84 0.1-167.97 0-251.9 0.4-11-4.6-18.9-13.2-25m-101.1 243.1a28.04 28.04 0 0 1-8.21 19.79 28.04 28.04 0 0 1-19.79 8.21h-230.6a28.04 28.04 0 0 1-19.79-8.21 28.04 28.04 0 0 1-8.21-19.79v-187.3c0.01-7.42 2.96-14.54 8.21-19.79s12.37-8.2 19.79-8.21h230.6c7.42 0.01 14.54 2.96 19.79 8.21s8.2 12.37 8.21 19.79z m58.3-103.7a22.48 22.48 0 0 1-15.22-6.37c-4.08-3.97-6.5-9.34-6.78-15.03a21.32 21.32 0 0 1 6.1-15.11c3.96-4.03 9.35-6.33 15-6.39h0.4c12.9-0.1 21.4 8.1 21.5 20.8a21.687 21.687 0 0 1-21 22.1m-0.5-67.5c-4.25 0-8.41-1.26-11.95-3.62a21.45 21.45 0 0 1-7.91-9.65 21.47 21.47 0 0 1 4.66-23.43 21.47 21.47 0 0 1 23.43-4.66 21.493 21.493 0 0 1 13.27 19.86c0.09 5.58-2.02 10.96-5.88 14.99a21.2 21.2 0 0 1-14.72 6.51z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M115.79999999999973 185.19999999999982h208s12 0 12 12v169s0 12-12 12h-208s-12 0-12-12v-169s0-12 12-12",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    megaphone: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M374.1700000000001 66.3100000000004s-74.52 92.73-144.69 92.73h-137.86c-3.68 0-7.2 1.46-9.81 4.06-2.6 2.6-4.06 6.13-4.06 9.81v82.8c0.04 3.64 1.53 7.13 4.12 9.68 2.6 2.56 6.1 3.99 9.75 3.98h137.86c70.17 0 144.69 93.36 144.69 93.36 5.38 6.83 20.69 2.07 20.69-8.49V74.80000000000018c0-10.77-14.48-16.36-20.69-8.49",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M77.76000000000022 241.84000000000015s-13.67-5.17-13.67-27.53 13.67-27.53 13.67-27.53",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M408.7399999999998 233.35000000000036c5.01-1.71 9.15-5.3 11.55-10.02a20.34 20.34 0 0 0 1.28-15.23 20.8 20.8 0 0 0-4.94-7.89 20.8 20.8 0 0 0-7.89-4.94",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M243.55000000000018 160.48999999999978v104.74",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M116.46000000000004 160.48999999999978v104.74",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M146.89000000000033 269.3699999999999v144.9c-0.01 1.35 0.38 2.68 1.13 3.81a6.73 6.73 0 0 0 3.08 2.52c0.83 0.34 1.72 0.51 2.62 0.5h45.54c1.82 0 3.63-0.36 5.31-1.05 1.69-0.7 3.22-1.72 4.5-3.01a13.815 13.815 0 0 0 4.06-9.81c0-1.34-0.21-2.66-0.62-3.93-7.25-23.19-24.22-49.27-24.22-92.53h13.66c3.65 0.01 7.15-1.42 9.75-3.98 2.59-2.56 4.08-6.04 4.12-9.68v-13.87c0.01-3.65-1.42-7.15-3.98-9.74-2.56-2.6-6.04-4.08-9.68-4.13h-13.87",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }]
                    },
                    "channels-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M196.19999999999982 301.1999999999998v-126.9c-0.01-2.72 0.79-5.38 2.29-7.65a13.7 13.7 0 0 1 6.15-5.09c1.67-0.69 3.45-1.05 5.26-1.06 2.34 0.02 4.64 0.6 6.7 1.7l114.2 63.4c2.98 1.62 5.24 4.29 6.37 7.49 1.12 3.19 1.01 6.69-0.3 9.82-1.2 2.88-3.34 5.28-6.07 6.79l-114.2 63.5a13.7 13.7 0 0 1-6.85 1.77 13.64 13.64 0 0 1-6.81-1.89 13.6 13.6 0 0 1-4.96-5.04 13.64 13.64 0 0 1-1.78-6.84",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M411.2999999999997 438.7999999999993h-301.9a14.714 14.714 0 0 1-10.02-24.89c2.63-2.74 6.22-4.36 10.02-4.51h301.9a14.714 14.714 0 0 1 14.12 14.7 14.714 14.714 0 0 1-14.12 14.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M456.39999999999964 387h-389.9c-5.11 0-10.17-1.01-14.89-2.96a38.8 38.8 0 0 1-12.62-8.43c-3.61-3.61-6.48-7.9-8.43-12.62a38.8 38.8 0 0 1-2.96-14.89V127.39999999999964c0-5.11 1-10.17 2.96-14.89 1.95-4.72 4.82-9.01 8.43-12.62s7.9-6.48 12.62-8.43c4.72-1.96 9.78-2.96 14.89-2.96h389.9c5.11 0 10.17 1 14.89 2.96 4.72 1.95 9.01 4.82 12.62 8.43s6.48 7.9 8.43 12.62 2.96 9.78 2.96 14.89v220.7a38.99 38.99 0 0 1-11.41 27.49 38.99 38.99 0 0 1-27.49 11.41m-390-273.3a13.826 13.826 0 0 0-13.8 13.8v220.6a13.826 13.826 0 0 0 13.8 13.8h389.9a13.826 13.826 0 0 0 13.8-13.8V127.39999999999964a13.826 13.826 0 0 0-13.8-13.8h-389.9z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    channels: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M456.39999999999964 387h-389.9c-5.11 0-10.17-1-14.89-2.96a38.8 38.8 0 0 1-12.62-8.43c-3.61-3.61-6.48-7.9-8.43-12.62a38.8 38.8 0 0 1-2.96-14.89v-220.7c0-5.11 1-10.17 2.96-14.89 1.95-4.72 4.82-9.01 8.43-12.62s7.9-6.48 12.62-8.43 9.78-2.96 14.89-2.96h389.9c5.11 0 10.17 1.01 14.89 2.96s9.01 4.82 12.62 8.43 6.48 7.9 8.43 12.62 2.96 9.78 2.96 14.89v220.7a38.99 38.99 0 0 1-11.41 27.49 38.95 38.95 0 0 1-27.49 11.41m-246.5-226.5c-1.81 0.01-3.59 0.37-5.26 1.06a13.76 13.76 0 0 0-8.44 12.74V301.1999999999998c-0.03 3.62 1.39 7.11 3.93 9.69s6 4.05 9.62 4.08h0.12c2.36 0 4.68-0.61 6.73-1.77l114.2-63.5c1.76-0.96 3.29-2.3 4.48-3.92a13.7 13.7 0 0 0 2.4-5.44 13.775 13.775 0 0 0-2.76-11.29 13.7 13.7 0 0 0-4.12-3.45l-114.2-63.4c-2.06-1.1-4.36-1.68-6.7-1.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M411.2999999999997 438.8000000000002h-301.9a14.714 14.714 0 0 1-10.02-24.89c2.63-2.74 6.22-4.36 10.02-4.51h301.9a14.714 14.714 0 0 1 14.12 14.7 14.714 14.714 0 0 1-14.12 14.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    actors: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M124.17000000000007 327.6899999999996c6.86 5.15 11.74 11.66 15.82 21.09 18.83 43.43 50.67 70.54 94.62 80.59 7.65 1.77 15.47 2.68 23.32 2.69 24.09 0 47.93-8.91 70.88-26.51 21.43-16.45 36.82-37.04 45.74-61.22 2.7-7.33 7.55-11.59 12.7-15.66 18.39-14.55 27.28-32.6 27.18-55.21-0.04-9.34-3.02-16.56-9.1-22.07-7.73-7.01-7.57-15.18-6.78-20.72l1.25-8.52c1.73-11.54 3.36-22.46 3.89-33.66 1.64-34.48-11.66-64.68-40.65-92.32-20.77-19.79-44.89-32.92-73.73-40.17a290 290 0 0 0-38.25-2.9c-11.09 0-20.06 0.94-26.69 2.76-43.19 11.92-74.96 33.83-97.15 66.99-12.92 19.32-18.37 42.71-16.63 71.49 0.5 8.2 1.43 16.62 2.34 24.76 0.42 3.83 0.84 7.66 1.23 11.5 0.42 4.06 1.26 12.52-5.82 19.57-11.86 11.8-13.78 25.81-6.45 46.87a63.98 63.98 0 0 0 22.28 30.65m-6.31-56.48c1.71-9.23 6.87-15.63 14.54-18.03 2.29-0.72 3.07-0.96 2.74-5.89-0.99-14.88 2.68-29 6.81-42.05a57.05 57.05 0 0 1 18.62-27.69c1.98-1.62 5.08-3.76 9.05-3.76 2.43 0 8.4 0.94 11.04 9.58 5.61 18.23 18.48 29.23 44.43 37.93 8.46 2.9 17.34 4.41 26.29 4.46 1.61 0 3.22-0.05 4.84-0.15 2.57-0.12 5.12-0.48 7.62-1.09-4.6-6.61-9.52-19.95-9.19-25.5l1.34-21.69 13.25 17.23c12.2 15.84 29.57 19.97 46.54 22.07 3.67 0.45 7.36 0.67 11.05 0.67 10.48 0 20.9-1.6 33.33-3.99 2.11-0.47 4.25-0.74 6.41-0.8 11.66 0 11.8 11.65 11.84 15.49 0.08 8.44-0.14 15.99-0.72 23.06-0.04 0.36-0.05 0.73-0.02 1.09 0.33 0.21 0.67 0.4 1.03 0.55 13.8 6.31 18.79 15.72 16.2 30.5-2.53 14.44-8.53 34.72-31.26 44.02-0.62 1.07-1.1 2.21-1.42 3.41l-0.65 1.94c-7.4 20.71-17.77 37.17-31.73 50.32-20.85 19.64-44.28 30.31-69.64 31.7-1.71 0.09-3.4 0.14-5.08 0.14-20.17 0-39.95-6.76-58.82-20.13a119.1 119.1 0 0 1-45.83-62.51c-1.26-3.99-2.45-5.46-5.59-6.9-17.53-8.02-30.67-34.25-27.02-53.98",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "anime-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M358.40999999999985 135.22999999999956c15.61-18.37 35.63-26.75 59.44-23.24 16.6 2.45 30.16 11.11 40.67 24.69 19.83 25.65 19.19 76.55-30.25 98.09 0.16 2.19 0.2 4.55 0.51 6.89 1.48 11 3.48 21.95 4.45 33 1.23 14.14-3.39 19.1-17.54 20.39-1.02 0.18-2.03 0.44-3.01 0.78 6.04 26.7 12.06 53.33 18.07 79.88 0.73 3.22 1.5 6.44 2.01 9.7 1.33 8.43-2.84 15.12-10.14 16.51-7.86 1.49-14.36-3.1-16.4-11.74-3.1-13.16-6.09-26.35-9.17-39.52-0.33-1.38-0.93-2.7-1.81-5.23-30.42 55.78-75.5 87.65-138.92 87.7-63.53 0.05-108.75-31.67-139.57-88.23-1.99 8.07-3.67 14.6-5.2 21.17-1.97 8.49-3.61 17.05-5.77 25.49-0.87 3.56-3.11 6.64-6.22 8.56a13.94 13.94 0 0 1-10.45 1.73c-6.83-1.6-11.33-8.33-9.67-16.05 5.1-23.79 10.6-47.49 15.93-71.23 1.38-6.14 2.7-12.3 4.04-18.43-0.59-0.35-1.07-0.86-1.59-0.9-15.83-1.45-20.23-6.24-18.76-22 1-10.75 3.01-21.39 4.51-32.09 0.29-2.06 0.31-4.15 0.51-6.91-22.11-8.93-37.23-24.65-41.61-48.35-3.42-18.46 0.62-35.97 12.61-51.07 20.27-25.53 65.46-36.84 99.09 0.15 67.47-41.75 135.21-42.06 204.24 0.25m-12.05 26.43c-51.83-41.47-131.95-39.77-179.9-0.23 3.98 41.02-14.94 65.83-54.53 76.35l-5.35 28.96h57.48c3.02-9.43 5.84-18.6 8.89-27.68 2.91-8.65 10.17-13.2 17.09-11.02 8.15 2.58 11.61 9.55 9.04 18.76-1.84 6.58-4 13.08-6.09 19.82h49.83c0-8.53-0.16-16.32 0.04-24.11 0.23-8.95 5.92-15.14 13.43-15.02 7.55 0.12 12.82 6.21 13.11 15.36 0.15 4.52-0.02 9.05 0.07 13.58 0.08 3.48 0.34 6.95 0.52 10.38h49.4c-2.38-7.52-4.77-14.29-6.63-21.19-2.15-7.99 1.46-14.67 8.91-17.37 6.47-2.36 13.3 1.14 16.66 8.64 0.73 1.63 1.09 3.43 1.66 5.13 2.77 8.23 5.56 16.45 8.31 24.58h57.46c-1.99-10.31-3.79-19.63-5.68-29.43-17.72-3.78-32.68-11.45-43.12-26.27-10.4-14.77-14.07-31.03-10.6-49.24m34.04 134.14h-248.61a125.12 125.12 0 0 0 41.11 78.96 125.15 125.15 0 0 0 83.2 31.66c30.67 0 60.28-11.27 83.19-31.66a125.12 125.12 0 0 0 41.11-78.96m-276.77-86.33c18.44 1.93 36.39-15.68 36.35-34.63-0.04-19.77-15.44-35.83-35.13-36.1-20.27-0.28-36.77 15.88-36.52 35.77 0.11 9.3 3.88 18.17 10.48 24.71a35.36 35.36 0 0 0 24.82 10.25m304.29 0c15.8 1.55 35.26-11.81 35.9-35.18 0.52-19.57-15.93-35.29-35.76-35.61-21.7-0.35-35.98 19.45-35.91 35.47 0.08 20.66 19.27 37.19 35.77 35.32",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M181.15999999999985 344.25c-4.06-4.81-3.28-12.06-1.69-15.34 4.01-8.28 14.01-9.79 21.32-2.88 6.75 6.37 13.14 8.34 21.9 4.04 7.52-3.69 15.67-0.42 18.49 6.05 3.19 7.3 0.1 14.51-7.64 18.82-18.99 10.6-40.19 3.85-52.38-10.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M331.35000000000036 344.25c4.05-4.81 3.28-12.06 1.69-15.34-4.01-8.28-14.02-9.79-21.33-2.88-6.74 6.37-13.13 8.34-21.89 4.04-7.52-3.69-15.67-0.42-18.5 6.05-3.18 7.3-0.09 14.51 7.64 18.82 18.99 10.6 40.19 3.85 52.39-10.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    anime: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M95.36999999999989 314.5799999999999c-5.33 23.74-10.83 47.44-15.93 71.23-1.66 7.72 2.84 14.46 9.67 16.06a13.943 13.943 0 0 0 16.67-10.3c2.16-8.43 3.8-17 5.77-25.49 1.53-6.57 3.21-13.1 5.2-21.17 30.82 56.56 76.04 88.28 139.57 88.23 63.42-0.05 108.5-31.92 138.92-87.7 0.88 2.53 1.48 3.85 1.81 5.24 3.07 13.16 6.07 26.35 9.17 39.51 2.03 8.64 8.54 13.23 16.4 11.74 7.3-1.38 11.47-8.08 10.14-16.51-0.51-3.26-1.28-6.48-2.01-9.7-5.9-26.14-11.82-52.31-17.76-78.52h-313.81c-1.26 5.78-2.51 11.59-3.81 17.38m193.59 15.3c9.17 4.07 15.86 2.93 22.67-4.07 4.3-4.42 9.94-5.54 15.76-2.36 4.59 2.51 6.57 6 6.94 10.2 0.15 2.09-0.11 4.18-0.77 6.17s-1.71 3.82-3.09 5.4c-11.74 13.78-33 20.33-52.04 9.61-4.1-2.31-7.38-5.03-8.14-10.07-1.74-11.54 7.73-19.73 18.67-14.88m-110.23 1.05c0.18-0.69 0.43-1.37 0.74-2.01 4.01-8.28 14.02-9.79 21.33-2.88 6.74 6.37 13.14 8.33 21.89 4.04 7.53-3.69 15.67-0.43 18.5 6.05 3.18 7.3 0.09 14.5-7.65 18.82-18.4 10.27-38.89 4.24-51.06-9.18a15.9 15.9 0 0 1-3.77-6.94c-0.66-2.59-0.65-5.31 0.02-7.9",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M458.52000000000044 136.67999999999938c-10.5-13.58-24.07-22.24-40.67-24.69-23.81-3.51-43.83 4.88-59.44 23.24-69.03-42.31-136.78-42-204.24-0.25-33.63-36.99-78.82-25.68-99.09-0.15-12 15.1-16.03 32.61-12.61 51.07 4.38 23.7 19.49 39.42 41.61 48.35-0.2 2.76-0.23 4.85-0.51 6.91-0.53 3.75-1.11 7.5-1.69 11.24-0.3 1.95-0.17 3.93 0.37 5.83a13.7 13.7 0 0 0 2.76 5.14c1.28 1.49 2.87 2.69 4.66 3.52 1.79 0.82 3.74 1.25 5.71 1.25h65.75c3.02-9.43 5.84-18.6 8.89-27.69 2.91-8.64 10.17-13.2 17.09-11.02 8.15 2.58 11.61 9.55 9.04 18.76-1.84 6.58-4 13.08-6.09 19.82h49.83c0-8.52-0.16-16.32 0.04-24.11 0.23-8.95 5.92-15.14 13.43-15.01 7.55 0.12 12.82 6.21 13.11 15.36 0.15 4.52-0.02 9.05 0.07 13.57 0.08 3.48 0.34 6.95 0.52 10.38h49.4c-2.38-7.52-4.77-14.28-6.63-21.19-2.15-7.99 1.46-14.66 8.91-17.37 6.47-2.36 13.3 1.15 16.66 8.65 0.73 1.63 1.09 3.42 1.66 5.12 2.77 8.23 5.56 16.45 8.31 24.59h71.43c1.96 0 3.91-0.42 5.69-1.24 1.79-0.82 3.38-2.01 4.66-3.5s2.23-3.23 2.77-5.12c0.55-1.89 0.68-3.87 0.4-5.81-0.53-3.56-1.06-7.11-1.54-10.67-0.31-2.33-0.36-4.7-0.51-6.89 49.43-21.54 50.07-72.44 30.24-98.09m-354.88 72.79a35.42 35.42 0 0 1-24.81-10.25 35.44 35.44 0 0 1-10.49-24.71c-0.25-19.89 16.25-36.05 36.52-35.78 19.69 0.27 35.09 16.34 35.13 36.1 0.04 18.96-17.91 36.57-36.35 34.64m304.29 0c-16.5 1.87-35.69-14.65-35.77-35.32-0.06-16.02 14.21-35.82 35.91-35.47 19.83 0.32 36.28 16.05 35.76 35.61-0.63 23.38-20.1 36.73-35.9 35.18",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "tv-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M374.7999999999997 308.7999999999993l82.7 58.2a15.94 15.94 0 0 0 7.8 1.3c2.66-0.22 5.24-1.08 7.5-2.5 2.22-1.46 4.03-3.45 5.29-5.79s1.91-4.96 1.91-7.61v-192.8c0.04-4.03-1.46-7.92-4.19-10.87a15.73 15.73 0 0 0-10.51-5.03c-2.67-0.22-5.35 0.22-7.8 1.3l-82.7 58.2c-2.1 1.47-3.81 3.43-5 5.7a15.86 15.86 0 0 0-1.8 7.4v79.4c-0.01 2.58 0.61 5.12 1.8 7.4 1.19 2.27 2.9 4.22 5 5.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M268 384h-184a51.8 51.8 0 0 1-19.88-3.97 51.7 51.7 0 0 1-16.82-11.33 52.77 52.77 0 0 1-15.3-36.7v-152c0-6.83 1.35-13.58 3.97-19.88 2.63-6.3 6.48-12.02 11.33-16.82 9.76-9.7 22.94-15.2 36.7-15.3h184.5c13.65 0.05 26.72 5.48 36.4 15.1a51.3 51.3 0 0 1 11.18 16.69 51.5 51.5 0 0 1 3.92 19.71v152.5a52.23 52.23 0 0 1-15.3 36.7 52.23 52.23 0 0 1-36.7 15.3Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M91.39999999999964 207.79999999999927h83.9",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M133.39999999999964 313.5v-105.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M180.0999999999999 208.79999999999927l38.1 104.7 37.8-104.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    tv: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M466.3199999999997 127.94999999999982c-5.29-0.42-10.6 0.47-15.46 2.6-0.97 0.43-1.9 0.95-2.77 1.57l-82.7 58.2a32 32 0 0 0-10 11.43 32.1 32.1 0 0 0-3.59 14.75v79.34a31.85 31.85 0 0 0 3.58 14.79c2.36 4.57 5.8 8.49 10.01 11.45l82.7 58.2c0.86 0.61 1.78 1.13 2.75 1.56 4.06 1.79 8.46 2.72 12.9 2.72 0.9 0 1.79-0.04 2.68-0.12 5.22-0.44 10.25-2.11 14.69-4.89 0.1-0.07 0.2-0.13 0.3-0.2 4.43-2.91 8.07-6.89 10.58-11.56a31.96 31.96 0 0 0 3.81-15.19v-192.73c0.05-8.07-2.96-15.85-8.44-21.78a31.77 31.77 0 0 0-21.04-10.14",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M268.2999999999997 112.19999999999982h-184.62a68.23 68.23 0 0 0-67.88 68v152.14c0.1 17.98 7.29 35.2 20.02 47.91a68.28 68.28 0 0 0 47.93 19.95h184.12a68.46 68.46 0 0 0 47.9-20.07 68.44 68.44 0 0 0 20.03-47.93v-152.49a67.57 67.57 0 0 0-19.78-47.72 67.54 67.54 0 0 0-47.72-19.79m2.55 102.23l-37.8 104.7a16.04 16.04 0 0 1-5.85 7.66 15.96 15.96 0 0 1-9.18 2.91h-0.02c-3.28 0-6.49-1.01-9.18-2.89a15.94 15.94 0 0 1-5.85-7.64l-34.64-95.17h-19.13v89.7c0 4.24-1.69 8.31-4.69 11.31s-7.07 4.69-11.31 4.69-8.31-1.69-11.31-4.69-4.69-7.07-4.69-11.31v-89.7h-26c-4.24 0-8.31-1.69-11.31-4.69s-4.69-7.07-4.69-11.31 1.69-8.31 4.69-11.31 7.07-4.69 11.31-4.69h83.9c4.95 0.6 9.78 1.99 14.29 4.12 2.54 1.87 4.47 4.45 5.55 7.41l23 63.22 22.81-63.18c1.46-3.96 4.43-7.19 8.26-8.97s8.21-1.98 12.18-0.55c3.98 1.44 7.22 4.39 9.03 8.2 1.81 3.82 2.04 8.2 0.63 12.18",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "calendar-thin": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M114.45000000000073 100.30000000000018h283.1c11.26 0.01 22.06 4.48 30.03 12.45a42.5 42.5 0 0 1 12.44 30.02v254.78a42.52 42.52 0 0 1-12.45 30.02 42.46 42.46 0 0 1-30.02 12.44h-283.1c-11.26 0-22.06-4.48-30.02-12.44a42.46 42.46 0 0 1-12.44-30.02v-254.78c0-11.26 4.47-22.06 12.44-30.03a42.46 42.46 0 0 1 30.02-12.44Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M291.3899999999994 256c4.93 0.02 9.72-1.68 13.54-4.8s6.44-7.47 7.41-12.3c0.98-4.84 0.24-9.86-2.07-14.22a21.335 21.335 0 0 0-24.98-10.39c-4.72 1.43-8.8 4.45-11.54 8.55-2.75 4.1-3.98 9.02-3.5 13.93a21.3 21.3 0 0 0 6.14 12.99 21.27 21.27 0 0 0 15 6.24",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M362.15999999999985 256c4.93 0.01 9.71-1.68 13.52-4.8a21.28 21.28 0 0 0 5.33-26.49 21.3 21.3 0 0 0-10.61-9.66 21.36 21.36 0 0 0-14.34-0.72 21.304 21.304 0 0 0-15.03 22.45c0.48 4.91 2.65 9.49 6.13 12.98a21.27 21.27 0 0 0 15 6.24",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M291.3899999999994 326.77000000000044c5.26 0 10.33-1.95 14.23-5.48 3.89-3.53 6.34-8.39 6.86-13.62 0.51-5.23-0.93-10.47-4.06-14.7a21.2 21.2 0 0 0-12.88-8.16c-5.16-1.03-10.51-0.1-15.02 2.6-4.52 2.7-7.86 6.98-9.39 12.01a21.17 21.17 0 0 0 1.11 15.21 21.18 21.18 0 0 0 19.15 12.14",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M362.15999999999985 326.77000000000044c5.26 0 10.33-1.95 14.23-5.48 3.89-3.53 6.34-8.39 6.86-13.62 0.51-5.23-0.93-10.47-4.06-14.7a21.2 21.2 0 0 0-12.88-8.16c-5.16-1.03-10.51-0.1-15.02 2.6-4.52 2.7-7.86 6.98-9.39 12.01a21.17 21.17 0 0 0 1.11 15.21 21.18 21.18 0 0 0 19.15 12.14",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M149.84000000000015 326.77000000000044c4.93 0.02 9.72-1.68 13.54-4.79a21.26 21.26 0 0 0 7.42-12.31c0.98-4.83 0.25-9.86-2.07-14.21a21.33 21.33 0 0 0-10.62-9.67c-4.56-1.9-9.63-2.15-14.35-0.73a21.3 21.3 0 0 0-11.55 8.55c-2.74 4.1-3.98 9.02-3.5 13.93a21.3 21.3 0 0 0 6.14 12.99 21.35 21.35 0 0 0 14.99 6.24",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M220.60000000000036 326.77000000000044a21.3 21.3 0 0 0 13.53-4.79 21.33 21.33 0 0 0 7.41-12.29c0.97-4.83 0.24-9.85-2.08-14.2a21.2 21.2 0 0 0-10.61-9.66 21.27 21.27 0 0 0-14.33-0.73c-4.72 1.42-8.8 4.44-11.54 8.54a21.28 21.28 0 0 0 2.63 26.89c3.98 3.97 9.37 6.21 14.99 6.24",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M149.84000000000015 397.53999999999996c4.92 0.01 9.7-1.69 13.51-4.81a21.276 21.276 0 0 0 5.31-26.47 21.297 21.297 0 0 0-24.94-10.36 21.28 21.28 0 0 0-11.52 8.54 21.27 21.27 0 0 0 17.64 33.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M220.60000000000036 397.53999999999996c5.25 0 10.31-1.95 14.19-5.48a21.08 21.08 0 0 0 6.84-13.58c0.52-5.23-0.93-10.45-4.05-14.67-3.12-4.21-7.7-7.12-12.85-8.14a21.1 21.1 0 0 0-14.99 2.59c-4.5 2.69-7.84 6.96-9.37 11.98a21.14 21.14 0 0 0 1.11 15.18c2.23 4.74 6.16 8.49 11 10.5 2.57 1.07 5.33 1.62 8.12 1.62",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M291.3899999999994 397.53999999999996c5.26 0 10.33-1.95 14.23-5.48 3.89-3.53 6.34-8.39 6.86-13.62 0.51-5.23-0.93-10.47-4.06-14.7a21.2 21.2 0 0 0-12.88-8.16c-5.16-1.03-10.51-0.1-15.02 2.6-4.52 2.7-7.86 6.98-9.39 12.01a21.17 21.17 0 0 0 1.11 15.21 21.18 21.18 0 0 0 19.15 12.14",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M142.76000000000022 71.98999999999978v28.31",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M369.2399999999998 71.98999999999978v28.31",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }, {
                            d: "M440.0100000000002 171.0699999999997h-368.02",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "16",
                                fill: "none"
                            }
                        }]
                    },
                    android: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M317.5199999999986 57.850000000000364l23.96-34.79c0.37-0.44 0.65-0.95 0.82-1.5 0.16-0.55 0.21-1.13 0.13-1.7s-0.27-1.12-0.57-1.61-0.7-0.91-1.17-1.24c-0.71-0.49-1.57-0.75-2.43-0.73-0.87 0.02-1.71 0.32-2.4 0.84-0.46 0.35-0.83 0.79-1.11 1.3l-24.9 36.15a148.96 148.96 0 0 0-107.69 0l-24.9-36.15c-0.27-0.51-0.65-0.95-1.11-1.3s-0.99-0.6-1.55-0.73-1.14-0.15-1.71-0.05c-0.57 0.11-1.1 0.33-1.58 0.66a4.111 4.111 0 0 0-0.78 6.06l23.97 34.8c-38.12 17.72-64.84 51.42-68.25 90.73h259.5c-3.4-39.32-30.13-73.01-68.23-90.74m-115.72 54.85c-3.33 0-6.55-1.14-9.12-3.25a14.34 14.34 0 0 1-4.99-8.3c-0.66-3.26-0.16-6.65 1.41-9.58 1.56-2.94 4.1-5.24 7.17-6.51 3.07-1.28 6.49-1.45 9.67-0.49a14.39 14.39 0 0 1 10.14 15.16c-0.33 3.31-1.79 6.41-4.14 8.76a14.3 14.3 0 0 1-4.65 3.11c-1.74 0.73-3.61 1.1-5.49 1.1m108.4 0a14.43 14.43 0 0 1-14.39-13c-0.35-3.56 0.63-7.14 2.76-10.02s5.26-4.86 8.77-5.57a14.44 14.44 0 0 1 16.64 9.96 14.44 14.44 0 0 1-8.28 17.53c-1.74 0.72-3.61 1.1-5.5 1.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M109.59000000000015 312.5699999999997c0 7.68-3.05 15.04-8.48 20.47a28.944 28.944 0 0 1-40.94 0 28.94 28.94 0 0 1-8.48-20.47v-117.08c0-7.68 3.05-15.04 8.48-20.47a28.944 28.944 0 0 1 40.94 0 28.94 28.94 0 0 1 8.48 20.47z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M126.25 167.4300000000003v211.48c0 6.03 2.4 11.81 6.66 16.07a22.73 22.73 0 0 0 16.08 6.66h26.9v65.07c0 7.68 3.05 15.04 8.48 20.47a28.944 28.944 0 0 0 40.94 0 28.94 28.94 0 0 0 8.48-20.47v-65.07h44.42v65.07c0 7.68 3.05 15.04 8.48 20.47a28.944 28.944 0 0 0 40.94 0 28.94 28.94 0 0 0 8.48-20.47v-65.07h26.9c6.03 0 11.81-2.39 16.08-6.66a22.73 22.73 0 0 0 6.66-16.07v-211.48z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M402.40999999999985 312.5699999999997c0 7.68 3.05 15.04 8.48 20.47a28.938 28.938 0 0 0 40.93 0 28.94 28.94 0 0 0 8.48-20.47v-117.08c0-7.68-3.05-15.04-8.48-20.47a28.94 28.94 0 0 0-40.93 0 28.94 28.94 0 0 0-8.48 20.47z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    linux: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M108.5 346.1800000000003c1.3 2.6 1.9 5.44 1.9 8.31 0 2.88-0.6 5.72-1.8 8.32-4.4 10.27-13.3 13.43-23.6 14.01-3.8 0.21-7.7-0.22-11.6-0.09-5.1 0.18-6.8 2.05-6.9 7.15 0.1 2.92 0.8 5.79 2.2 8.37 2 4.14 3.8 8.4 5.3 12.76 0.9 2.46 1.2 5.08 1 7.69s-0.9 5.15-2.1 7.46c-1.8 3.23-3.4 6.57-4.8 9.93-3 6.99-1.6 10.06 5.8 12.42 9.9 3.16 20.1 4.79 30.3 6.8 16.1 3.19 31.9 7.42 47.4 12.68 8.8 2.97 17.7 5.13 26.9 4.26 16.1-1.5 24.3-10.51 21.2-29.03-1.7-10.22-6.5-19.23-11.9-27.81-9-14.3-18.4-28.4-28-42.38-6.6-9.68-13.9-18.84-22.9-26.48-5.9-4.99-12.3-7.55-20-3.36-3.8 2.09-5.4-0.6-6-3.83-2-10.2-0.2-20.79 5.3-29.66 7.3-12.34 12.6-25.45 17.2-38.96 6.5-19.25 15.5-37.16 29.2-52.57 9-10.08 15.8-21.86 23.2-33.1 4.8-7.3 3.8-15.17 3.1-23.07-2-20-2.1-40.06-3-60.11-0.6-11.46 0.2-22.95 2.4-34.22 2.6-12.69 9.8-22.52 19.5-30.8 16.4-13.88 35.4-15.82 55.8-12.41 8.1 1.36 15.9 3.13 23.6 6.52 14.7 6.57 24.8 17.7 32.3 31.26a92.6 92.6 0 0 1 11.6 50.45c-1 24.35 5.1 47.42 15.2 69.46 5.6 12.11 13.9 22.62 23 32.2 11.4 11.9 19.7 25.58 26.9 40.11 8.2 16.69 14.2 34.37 17.8 52.6 2.6 11.57 2.8 23.53 0.6 35.17-1.1 5.3-3.1 9.71-8.8 11.88-4.1 1.51-5.7 5.9-8.2 9.15-6.9 8.96-15 15.49-27.2 15.92-12 0.41-20-4.06-24.9-15.28-1.3-3.13-2.7-6.2-5.2-8.61-4.2-4-8.3-3.16-10.5 2.05-4.4 9.88-4 19.91-1.1 30.1 4.7 16.48 3.4 33.08 1.1 49.66-0.9 5.46-1 11.01-0.3 16.5 1.7 13.91 14.7 21.99 29.2 18.29 6.3-1.63 12.1-4.73 16.9-9.06 13.1-11.6 28.5-20.24 45.1-25.32 8-2.4 16-4.89 22.9-9.83 6.5-4.75 6.7-9.43 0.2-14.33a33.2 33.2 0 0 0-11.5-5.97c-3.2-0.79-6.2-2.25-8.9-4.3-2.6-2.04-4.8-4.62-6.4-7.56-5.3-9.37-6.2-19.46-3.2-29.78 0.4-1.45 1.1-3.21 3-2.82 1.7 0.34 1.5 2.15 1.5 3.48 0.5 17.63 8.9 30.18 24.9 37.85 1 0.45 2 0.97 2.9 1.54 11.5 7.28 12.5 16.34 2.8 25.58-5.7 5.38-12.6 8.98-19.6 11.96-21.3 8.99-40 21.72-56.8 37.32-4.8 4.47-11.1 5.45-17.1 6.21-7.8 0.99-15.7-0.3-23.3-2.62-6.3-1.92-10.7-6.25-13.8-11.76-3.6-6.53-9.1-9.12-16.3-9.46-19.9-1.07-39.9-0.98-59.8 0.26-5.6 0.39-11.4-0.3-17 0.88-9.1 1.88-17.6 4.96-24.7 10.99-13.8 11.8-29 11.46-44.7 4.92-22.6-9.36-46.2-15.01-70.2-19.03-6.6-0.99-13-2.78-19.2-5.34-7.3-3.2-10.5-8.96-8.9-16.7 0.6-2.69 1-5.62 2.4-7.87 6.7-10.68 4.8-21.7 1.8-32.89-0.7-2.81-1.3-5.65-1.8-8.53-1.3-9.1 3.3-13.18 13.1-14.47 4-0.51 8-0.39 12-0.74 4.2-0.38 7.6-2.02 11.2-3.98 2.8-1.44 5.2-3.54 7.1-6.11 1.8-2.57 3-5.55 3.4-8.67 0.2-0.89 0.5-1.78 0.8-2.64 0-0.12 0.2-0.2 1-0.92m248.6-22.27q-1.2-0.075-2.4 0.03c-9.7 1.62-14.2-3.41-14.4-13.18-0.3-15.17-0.8-30.27-4.6-45.13-3-11.81-6.1-23.6-14.4-33.02-2.7-2.9-4.6-6.45-5.5-10.31-3.5-14.78-8.6-28.86-18.3-40.9-2.5-3.05-4.3-6.58-5.4-10.37-1-3.79-1.3-7.75-0.8-11.65 0.5-3.61 1.9-7.09 2.7-10.65 1.6-6.53-0.1-10.46-6.5-11.98-7.5-1.78-14.1-5.6-21.1-8.28-6.1-2.3-7.8-6.28-7.8-12.06 0.1-3.06 0.7-6.08 1.8-8.93 2.2-6.09 5.8-9.21 11.3-9.21 5.9 0 10.4 2.64 13.1 7.99 2.7 5.51 2.7 11.23 0.8 16.98-1.2 3.96-0.2 5.34 4.1 5.25 2.8-0.07 4.7-1.2 5.1-4.18 1-9.07 0.6-17.96-3-26.56-3.6-8.48-12.4-14.19-20.4-13-11.7 1.74-19.5 9.15-20 19.37-0.3 4.43 0 8.89 0.2 13.32 0.2 4.75 0 5.03-4.4 3.37-2.9-1.13-6-1.56-9.1-1.25-8.6 0.83-9.1 0.3-9.2-8.44 0-7.05-1.5-13.74-5.8-19.53-3.9-5.18-10.2-6.11-15.2-2.42-8.8 6.56-10.3 31.59-2.4 39.3 1.4 1.4 2.6 1.34 3.9 0.06 1.6-1.48 0.5-2.14-0.7-3.14-3.1-2.59-5.2-6.16-5.9-10.1-0.8-3.95-0.1-8.03 1.8-11.55 2.6-4.55 9.4-6.41 13.8-3.74 7.4 4.62 8.5 19.85 2 25.56-5 4.68-10.5 8.94-16.2 12.76-5.2 3.3-5 8.14-0.2 11.88 2.5 1.98 4.9 4.23 7 6.71 3.7 4.59 8.5 6.06 14.3 6.3 13.2 0.59 25.7-2.78 38-6.82 6.6-2.15 13.5-3.77 17.9-9.89 1.4-2.03 3.8-2.05 5.7-0.3 2 1.89 1.9 4.11 0.1 6.12-1.4 1.3-3 2.2-4.8 2.61-8.8 2.7-17 6.59-25.4 10.14-9.8 4.17-19.8 7.64-30.9 6.42-2.7-0.29-5.4-0.07-8.6-0.09 5.6 7.2 12.6 9.24 20.8 8.13 8.2-1.23 16.2-4 23.4-8.15 5.6-3.11 10.9-6.93 17.1-8.97 2.7-0.89 5.5-0.95 6.7 2.22 1.1 3-1.1 4.34-3.4 5.6-8.3 4.48-16.8 8.42-24.3 14.13-5.5 4.18-11.1 8.34-17.3 11.5-9.2 4.76-16.4 3.33-23.1-4.55-3-3.3-5.7-6.87-8.1-10.66-1.5-2.7-3-5.9-6.5-7.3-0.4 2.49-0.5 4.63-0.9 6.71-1.5 7.85-5.8 14.44-9.4 21.35-5.1 9.75-10.2 19.47-4.7 30.84 0.3 0.55 0.4 1.19 0.3 1.81-0.1 0.61-0.5 1.17-1 1.56-8.4 7.1-12.7 16.86-16.9 26.5-6.2 14.33-11.8 28.9-10.7 45.11 0.4 5.92 0.6 11.97-0.8 17.85-1.5 6.47-4.9 7.47-9.6 2.76-7.3-7.19-9.3-16.44-9.9-26.05-0.3-3.96 0.5-7.97 0.9-12.13-0.5 0.18-0.9 0.51-1.2 0.93-0.3 0.43-0.5 0.93-0.5 1.45-2.4 10.34-0.9 20.43 2.8 30.2 1.3 3.52 2.4 7.36 5.4 10.08 4.9 4.46 9.8 8.97 14.8 13.35 14 12.31 28.9 23.54 43.5 35.21 9.8 7.84 9.4 22.61-0.7 28.08-6.7 3.61-6.7 3.61-2.4 9.99 0.6 0.89 1.3 1.76 2 2.6 5 6.24 8.2 13.83 9 21.84 0.2 2.72 0.1 5.64 1.6 8.58 1.3-1.05 2.3-2.45 2.8-4.04 0.6-1.59 0.7-3.3 0.3-4.94-0.9-6-3-11.57-7-16.29-1.6-1.81-4-3.72-1.1-6.18 2.5-2.17 5.6-3.19 8.3-0.64 8.8 7.94 19.4 9.65 30.6 9.87 10.7 0.11 21.3-1.56 31.4-4.96 11.4-3.67 21.6-9.15 27.5-20.25 0.6-1.05 1.4-1.99 2.3-2.8 1.6-1.47 3.1-3.25 5.6-2.47s2.8 3.04 3.3 5.16c2 8.29-0.1 16.06-2.6 23.87-1.7 5.51-4 10.96-4 16.9 0 1.8 0.4 3.63 2.4 3.87 2.3 0.27 2.1-1.91 2.4-3.27 1.3-5.99 2.4-12 3.7-17.97 2.7-12.28 3.3-24.94 1.7-37.43-1-8.5-3.5-16.89-2.8-25.53 0.7-8.49 1.4-18.02 9.8-22.03 6.2-2.95 10.7-6.23 14.1-12.02 3-5.05 9-5.41 14.1-6.96 7.1-0.79 13.9 0.92 21.4 2.79-1.5-1.95-3.6-3.39-5.9-4.16-3.7-1.45-4.6-3.61-3.7-7.51 1.8-7.11 4-14.33 2.9-21.75-2.4-17.29-4.3-34.79-14.4-49.96-3.4-5.16-7.2-10.08-10.8-15.1 3 6.12 5.9 12.17 9 18.12 3.2 6.17 5.5 12.69 7.9 19.17 3.7 10.32 6.2 21.07 5.5 31.96-0.6 10-0.4 21.02-11.8 26.49",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    windows: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M426.10000000000036 457.3699999999999c-27.4-3.99-54.8-7.99-82.2-11.99q-47.25-6.885-94.5-13.74c-6.6-0.96-13.2-1.95-19.8-2.75-1.9-0.25-2.8-0.97-2.6-2.9 0.1-0.7 0.1-1.42 0-2.12V259.1999999999998c77.5 0.41 154.5 0.84 231.7 1.26v201.6c-11-1.58-21.8-3.12-32.6-4.69m-401.8-57.39v-141.85c57.9 0.32 115.6 0.64 173.5 0.95v165.48c-57.9-8.21-115.6-16.38-173.5-24.58m202.9-169.76c0-1.27-0.1-2.51-0.2-3.75v-160.45c0-3.24 1-4.12 4.1-4.53 42.3-5.81 84.6-11.69 126.9-17.63 33.2-4.63 66.5-9.25 99.7-13.85 0.3 0 0.7 0.03 1 0.09v201.39c-77.1-0.42-154.1-0.84-231.5-1.27m-203-1.15v-140.4c57.9-7.49 115.6-14.96 173.6-22.46v163.81c-57.9-0.31-115.6-0.62-173.6-0.95",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    macos: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M156.79999999999927 464.21000000000004c-12.5-8.49-22.4-19.61-31-31.84-21.5-30.65-37.9-63.77-47.9-99.84-8.9-32.09-11.4-64.6-6.4-97.49 4.4-29.01 15.3-55.14 35.8-76.67 21.3-22.32 47.4-31.41 78.1-28.22 15.4 1.6 30.1 6.12 44.9 10.48 6.1 1.8 12.3 3.16 18.5 4.73 8.7 2.23 17.3 1.23 25.8-1.17 12-3.44 23.9-7.37 35.9-10.85 19-5.52 38.3-6.77 57.7-2.24 22.5 5.21 40.2 17.8 55.2 34.78 2.2 2.45 4.3 4.95 6.3 7.28-7.5 7.32-15 14.05-21.8 21.39-17.3 18.46-26.3 40.39-26.5 65.75-0.3 23.09 7.2 45.61 21.2 63.96 9.3 12.4 20.2 22.81 34.9 28.83 1.7 0.7 3.4 1.33 5.6 2.15-2 5.23-3.7 10.43-5.8 15.45-12 28.73-27.5 55.28-48.7 78.29-4 4.27-8.4 8.23-13 11.85-15.5 12.45-32.9 17.13-52.5 11.38-9.8-2.87-19.5-6.13-29.3-9.18-10-3.15-20.2-5.68-30.7-6-13.1-0.4-25.3 3.44-37.4 7.82-9.2 3.31-18.4 6.77-27.9 8.97-3.3 0.76-6.6 1.14-10 1.15-11.1 0-21.4-4.25-31-10.76m183-437.14c0.4 3.42 1.1 6.81 1 10.18-0.2 24.37-8.6 45.87-23.7 64.82-8.3 10.41-18 19.3-29.8 25.78-8.4 4.62-17.7 5.94-27 7.05-3 0.35-6.1 0.58-9.2 0.87 0.5-56.6 30-97.6 88.7-108.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "star-rating-full": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M253.60000000000036 34.32999999999993l59.2 169.6 177.8 4.6-141.1 109.4 50.6 172.44-146.5-101.97-146.6 101.97 50.7-172.44-141.2-109.41 177.8-4.6z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "star-rating-half": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256.5 35.76000000000022l-0.5-1.43-59.2 169.59-177.6 4.6 141 109.41-50.5 172.44 146.3-101.97 0.5 0.35z m236 172.76v0.21l0.3-0.2z",
                            style: {
                                fill: "currentcolor",
                                "fill-rule": "evenodd",
                                "clip-rule": "evenodd"
                            }
                        }]
                    },
                    download: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M336 173h40c5.3 0 10.5 1.03 15.3 3.04 4.9 2.01 9.3 4.96 13 8.67 3.7 3.72 6.7 8.13 8.7 12.98s3 10.06 3 15.31v208c0 5.25-1 10.46-3 15.31s-5 9.26-8.7 12.98c-3.7 3.71-8.1 6.66-13 8.67-4.8 2.01-10 3.04-15.3 3.04h-240c-5.3 0-10.5-1.03-15.3-3.04-4.9-2.01-9.3-4.96-13-8.67-3.7-3.72-6.7-8.13-8.7-12.98s-3-10.06-3-15.31v-208c0-5.25 1-10.46 3-15.31s5-9.26 8.7-12.98c3.7-3.71 8.1-6.66 13-8.67 4.8-2.01 10-3.04 15.3-3.04h40",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M176 269l80 80 80-80",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M256 45v288",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    language: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M478.2999999999993 433.5999999999999l-90-218c-1.2-3.01-3.1-5.7-5.5-7.89s-5.3-3.81-8.4-4.76-6.4-1.19-9.6-0.71-6.3 1.66-9 3.47c-3.7 2.38-6.5 5.83-8.1 9.89l-90 218c-2.2 5.4-2.3 11.46-0.1 16.89 1.1 2.69 2.7 5.13 4.8 7.16 3.1 3.09 7 5.19 11.3 6.04 4.3 0.84 8.7 0.39 12.7-1.3 2.7-1.1 5.1-2.72 7.2-4.78 2-2.07 3.6-4.52 4.7-7.22l18.4-44.39h102.6l18.4 44.39c1.6 4.06 4.4 7.51 8.1 9.89 3.6 2.44 7.9 3.73 12.2 3.72 3.6 0 7.2-0.89 10.4-2.6 4.8-2.57 8.5-6.84 10.3-11.98 1.9-5.15 1.7-10.79-0.4-15.82m-143.5-71.6l33.2-80.35 33.2 80.35z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M267.7999999999993 342.9200000000001c1.7-2.32 3-4.97 3.6-7.78 0.7-2.81 0.8-5.73 0.3-8.58-0.4-2.84-1.4-5.58-2.9-8.04s-3.5-4.6-5.8-6.3c-0.2-0.15-15-11.13-36.5-34.73 39.6-53.68 62.1-114.75 71.2-143.49h32.3c5.8-0.02 11.4-2.33 15.6-6.44 4.1-4.14 6.4-9.73 6.4-15.56s-2.3-11.42-6.4-15.56c-4.2-4.11-9.8-6.42-15.6-6.44h-116v-20c0-5.83-2.3-11.42-6.4-15.56-4.1-4.12-9.8-6.44-15.6-6.44s-11.5 2.32-15.6 6.44c-4.1 4.14-6.4 9.73-6.4 15.56v20h-116c-5.8 0.02-11.4 2.33-15.6 6.44-4.1 4.14-6.4 9.73-6.4 15.56s2.3 11.42 6.4 15.56c4.2 4.11 9.8 6.42 15.6 6.44h197.2c-9.5 26.95-27 69.5-53.7 108.36-31.4-41.68-43.1-68.65-43.2-68.87-2.3-5.32-6.6-9.52-12-11.69-5.3-2.17-11.4-2.13-16.7 0.11-5.4 2.24-9.6 6.49-11.8 11.84-2.3 5.36-2.3 11.37-0.1 16.74 0.6 1.38 14.6 34.23 52.9 83.93 0.9 1.19 1.8 2.35 2.7 3.51-39.2 44.35-77.7 71.86-93.8 80.74-2.5 1.38-4.8 3.25-6.6 5.49-1.8 2.25-3.2 4.84-4 7.61s-1.1 5.68-0.8 8.55c0.3 2.88 1.2 5.66 2.6 8.2 1.4 2.53 3.2 4.77 5.5 6.58 2.2 1.82 4.8 3.17 7.6 3.98 2.7 0.82 5.6 1.08 8.5 0.78 2.9-0.31 5.7-1.18 8.2-2.56 2.2-1.18 48.6-26.89 101.7-85.59 22.5 24.08 38 35.44 38.9 36.1 2.3 1.7 5 2.93 7.8 3.59 2.8 0.68 5.7 0.79 8.6 0.34 5.7-0.95 10.9-4.12 14.3-8.83z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "movies-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M436 96h-360c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v264a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h360c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-264a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M436 336h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M436 256h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M436 176h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M436 96h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M100 336h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M100 256h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M100 176h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M100 96h-24c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v24a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h24c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-24a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M356 96h-200c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v104a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h200c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-104a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M356 256h-200c-3.68-0.01-7.32 0.71-10.72 2.12-3.4 1.4-6.49 3.47-9.09 6.07s-4.66 5.69-6.07 9.09-2.13 7.04-2.12 10.72v104a27.96 27.96 0 0 0 17.28 25.88c3.4 1.4 7.04 2.12 10.72 2.12h200c3.68 0 7.32-0.72 10.72-2.12 3.4-1.41 6.49-3.47 9.09-6.07s4.66-5.69 6.07-9.09c1.4-3.4 2.13-7.04 2.12-10.72v-104a28.04 28.04 0 0 0-8.21-19.79 28.04 28.04 0 0 0-19.79-8.21Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    movies: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M435.79999999999995 80.19999999999982h-360a44.03 44.03 0 0 0-31.1 12.9 44.03 44.03 0 0 0-12.9 31.1v264a44.03 44.03 0 0 0 12.9 31.1 44.03 44.03 0 0 0 31.1 12.9h360a44.03 44.03 0 0 0 31.1-12.9 44.03 44.03 0 0 0 12.9-31.1v-264a44.03 44.03 0 0 0-12.9-31.1 44.03 44.03 0 0 0-31.1-12.9m-324 308a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m241.68 124h-195.36c-4.24 0-8.31-1.69-11.31-4.69s-4.69-7.07-4.69-11.31 1.69-8.31 4.69-11.31 7.07-4.69 11.31-4.69h195.36c4.24 0 8.31 1.69 11.31 4.69s4.69 7.07 4.69 11.31-1.69 8.31-4.69 11.31-7.07 4.69-11.31 4.69m94.32 116a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z m0-80a11.997 11.997 0 0 1-12 12h-24c-1.58 0-3.14-0.31-4.6-0.91a12 12 0 0 1-3.89-2.6c-1.12-1.11-2-2.44-2.6-3.9-0.6-1.45-0.91-3.01-0.91-4.59v-24c0-1.58 0.31-3.14 0.91-4.59 0.6-1.46 1.48-2.79 2.6-3.9 1.11-1.11 2.44-2 3.89-2.6 1.46-0.6 3.02-0.91 4.6-0.91h24a11.997 11.997 0 0 1 12 12z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "cloud-library": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M415.5100000000002 404.5500000000002l0.37-0.04h0.04l0.88-0.13a90.47 90.47 0 0 0 57.9-30.97 90.45 90.45 0 0 0 21.74-61.95 90.5 90.5 0 0 0-25.86-60.36 90.5 90.5 0 0 0-59.85-27l-6.42-0.36-0.13-6.42c-1.62-73.55-63.06-133.4-136.96-133.4-66.36 0-123.05 47.13-134.81 112.05l-1.1 6.02-6.11-0.32c-1.86-0.1-3.73-0.15-5.62-0.16-56.35 0-102.21 45.67-102.21 101.8a101.4 101.4 0 0 0 26.59 68.77 101.45 101.45 0 0 0 66.14 32.58l0.08 0.01c3.17 0.29 6.34 0.43 9.4 0.43 3.12 0 6.3-0.14 9.5-0.44l0.32-0.03h0.31l265.2-0.11h0.37l0.37 0.04q4.935 0.54 9.9 0.54c3.33 0 6.66-0.19 9.97-0.55m-20.6-16.34l-265.21 0.11c-0.7 0-1.41 0.04-2.11 0.1-2.7 0.24-5.39 0.37-8.01 0.37-2.57 0-5.24-0.12-7.92-0.37a85.18 85.18 0 0 1-55.6-27.34 85.25 85.25 0 0 1-22.38-57.77c0-47.14 38.53-85.49 85.9-85.49 1.59 0 3.18 0.05 4.75 0.13q0.63 0.03 1.26 0.03c5.45 0 10.72-1.91 14.9-5.4 4.18-3.5 7-8.35 7.97-13.71 10.34-57.15 60.29-98.63 118.75-98.63 65.1 0 119.23 52.68 120.65 117.44 0.15 5.84 2.49 11.42 6.55 15.62 4.06 4.21 9.55 6.74 15.39 7.09 18.56 0.96 36.08 8.85 49.11 22.11a74.19 74.19 0 0 1 21.22 49.5 74.2 74.2 0 0 1-17.83 50.82 74.2 74.2 0 0 1-47.5 25.38l-0.61 0.08c-2.87 0.33-5.76 0.5-8.65 0.51-2.72 0-5.44-0.15-8.15-0.45-0.83-0.09-1.66-0.13-2.49-0.13",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M321.39999999999964 209.82999999999993c-0.68-2.95-2.51-5.5-5.07-7.1a11.38 11.38 0 0 0-8.61-1.44c-2.95 0.68-5.5 2.5-7.1 5.07s-2.12 5.66-1.44 8.61l25 108.09c0.72 2.9 2.56 5.41 5.11 6.97a11.42 11.42 0 0 0 8.52 1.39 11.43 11.43 0 0 0 7.06-5c1.6-2.52 2.15-5.58 1.52-8.5z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M277.03999999999996 198.14000000000033c-3.02 0.01-5.92 1.21-8.06 3.35a11.4 11.4 0 0 0-3.34 8.06v110.94a11.43 11.43 0 0 0 3.45 7.84c2.13 2.07 4.98 3.22 7.95 3.22 2.96 0 5.81-1.15 7.94-3.22a11.43 11.43 0 0 0 3.45-7.84v-110.94c0-1.5-0.29-2.98-0.86-4.37-0.86-2.08-2.33-3.87-4.2-5.12a11.44 11.44 0 0 0-6.34-1.92",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M200.4300000000003 198.14000000000033c-1.5 0-2.98 0.29-4.37 0.86-1.38 0.58-2.64 1.42-3.7 2.48s-1.9 2.32-2.47 3.7a11.5 11.5 0 0 0-0.86 4.37v110.94a11.43 11.43 0 0 0 3.45 7.84c2.13 2.07 4.98 3.22 7.95 3.22 2.96 0 5.81-1.15 7.94-3.22a11.43 11.43 0 0 0 3.45-7.84v-110.94c0-1.5-0.29-2.98-0.86-4.37-0.58-1.38-1.42-2.64-2.48-3.7-1.05-1.06-2.31-1.9-3.69-2.47a11.5 11.5 0 0 0-4.37-0.87",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M238.72999999999956 220.51000000000022c-3.02 0.01-5.91 1.21-8.05 3.35a11.43 11.43 0 0 0-3.35 8.05V320.5a11.43 11.43 0 0 0 3.45 7.84 11.4 11.4 0 0 0 7.94 3.22c2.97 0 5.82-1.15 7.95-3.22a11.43 11.43 0 0 0 3.45-7.84v-88.59c-0.01-3.02-1.21-5.91-3.35-8.05a11.43 11.43 0 0 0-8.05-3.35",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "chevron-back": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M328 112.00000000000006l-144 144 144 144",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "48",
                                fill: "none"
                            }
                        }]
                    },
                    "sort-up-down": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M158.59000000000015 319.22499999999997l86.18 100.576a14.78 14.78 0 0 0 11.24 5.165 14.8 14.8 0 0 0 11.23-5.165l86.19-100.576a14.8 14.8 0 0 0 2.21-15.812 14.87 14.87 0 0 0-5.46-6.276 14.85 14.85 0 0 0-7.99-2.341H169.79999999999927c-2.84 0-5.61 0.812-7.99 2.34a14.87 14.87 0 0 0-5.46 6.279 14.84 14.84 0 0 0-1.2 8.232c0.4 2.803 1.59 5.433 3.44 7.578",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M158.59000000000015 192.78000000000003l86.18-100.58a14.8 14.8 0 0 1 5.06-3.812 14.8 14.8 0 0 1 17.41 3.812l86.19 100.58a14.8 14.8 0 0 1 2.21 15.813 14.87 14.87 0 0 1-5.46 6.277 14.85 14.85 0 0 1-7.99 2.34h-172.4c-2.83 0-5.6-0.812-7.98-2.34a14.8 14.8 0 0 1-5.46-6.28 14.84 14.84 0 0 1-1.2-8.232c0.4-2.803 1.59-5.433 3.44-7.578",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "caret-down": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M91.79999999999927 213.79899999999998l145.3 169.6c2.1 2.536 4.7 4.592 7.7 6.031 2.9 1.487 6.1 2.382 9.4 2.633 3.2 0.251 6.5-0.147 9.6-1.171 3.1-1.035 6-2.662 8.5-4.793 1-0.797 1.9-1.703 2.7-2.7l145.3-169.6c3.1-3.647 5-8.083 5.7-12.8 0.7-4.719 0-9.539-2-13.869-2-4.344-5.2-8.023-9.2-10.599s-8.7-3.942-13.5-3.932h-290.7c-3.3-0.01-6.6 0.626-9.6 1.873-4.6 1.86-8.5 5.058-11.2 9.175-2.7 4.109-4.2 8.924-4.2 13.852 0.1 5.99 2.3 11.756 6.2 16.3",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "caret-up": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M91.79999999999927 314.9l145.3-169.6c2.1-2.535 4.7-4.591 7.7-6.031 2.9-1.487 6.1-2.381 9.4-2.632 3.2-0.251 6.5 0.147 9.6 1.17 3.1 1.036 6 2.663 8.5 4.793 1 0.797 1.9 1.703 2.7 2.7l145.3 169.6c3.1 3.647 5 8.083 5.7 12.8 0.7 4.719 0 9.538-2 13.869a25.1 25.1 0 0 1-9.2 10.599c-4 2.576-8.7 3.94-13.5 3.931h-290.7c-3.3 0.011-6.6-0.625-9.6-1.873a24.23 24.23 0 0 1-11.2-9.175c-2.7-4.109-4.2-8.924-4.2-13.852 0.1-5.99 2.3-11.755 6.2-16.299",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "chevron-forward": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M184 400.00000000000006l144-144-144-144",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "48",
                                fill: "none"
                            }
                        }]
                    },
                    "chevron-down": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M112 184.00000000000006l144 144 144-144",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "48",
                                fill: "none"
                            }
                        }]
                    },
                    "chevron-up": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M400 328.00000000000006l-144-144-144 144",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "48",
                                fill: "none"
                            }
                        }]
                    },
                    "more-vertical": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 293.592c7.4-0.016 14.7-2.22 20.9-6.339 6.2-4.109 11-9.989 13.8-16.872 2.9-6.862 3.6-14.421 2.2-21.719-1.5-7.273-5.1-13.957-10.3-19.247a38.2 38.2 0 0 0-15.7-9.399 37.47 37.47 0 0 0-18.2-0.9c-9.2 1.827-17.3 6.987-22.9 14.481-5.5 7.495-8.1 16.789-7.2 26.078 0.6 6.164 2.7 12.087 6.1 17.234 3.5 5.147 8.1 9.356 13.6 12.246 5.4 2.922 11.5 4.447 17.7 4.437",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M256 418.899c7.4-0.016 14.7-2.22 20.9-6.339 6.2-4.109 11-9.989 13.8-16.872 2.9-6.862 3.6-14.421 2.2-21.719-1.5-7.273-5.1-13.956-10.3-19.246a38.2 38.2 0 0 0-15.7-9.4 37.45 37.45 0 0 0-18.2-0.9c-6.1 1.211-11.7 3.894-16.5 7.814s-8.5 8.955-10.9 14.662-3.3 11.92-2.7 18.075c0.6 6.164 2.7 12.087 6.1 17.234 3.5 5.147 8.1 9.356 13.6 12.246 5.4 2.925 11.5 4.453 17.7 4.445",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M256 168.28200000000004c7.4-0.016 14.7-2.22 20.9-6.339 6.2-4.109 11-9.989 13.8-16.872 2.9-6.862 3.6-14.421 2.2-21.72-1.5-7.273-5.1-13.955-10.3-19.245a38.2 38.2 0 0 0-15.7-9.4 37.45 37.45 0 0 0-18.2-0.9c-6.1 1.211-11.7 3.896-16.5 7.817s-8.5 8.958-10.9 14.666-3.3 11.92-2.7 18.075c0.6 6.164 2.7 12.087 6.1 17.234 3.5 5.147 8.1 9.356 13.6 12.246 5.4 2.922 11.5 4.447 17.7 4.438",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "more-horizontal": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M293.60000000000036 256c0-7.435-2.2-14.701-6.3-20.881-4.2-6.181-10.1-10.998-16.9-13.844-6.9-2.846-14.4-3.593-21.7-2.147s-14 5.021-19.3 10.272c-5.2 5.293-8.8 11.977-10.3 19.252-1.4 7.3-0.7 14.861 2.2 21.725a36.93 36.93 0 0 0 13.8 16.876c4.2 2.833 9 4.777 14 5.711s10.1 0.842 15.1-0.273 9.7-3.23 13.8-6.214 7.6-6.777 10.2-11.147c3.6-5.818 5.4-12.512 5.4-19.333z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M418.89999999999964 256c0-7.435-2.2-14.701-6.4-20.881-4.1-6.18-10-10.997-16.8-13.843-6.9-2.846-14.5-3.593-21.7-2.147-7.3 1.446-14 5.02-19.3 10.271-5.2 5.292-8.8 11.977-10.3 19.252-1.4 7.299-0.7 14.86 2.2 21.725a36.93 36.93 0 0 0 13.8 16.876c5.1 3.435 11.1 5.549 17.2 6.156 6.2 0.607 12.4-0.312 18.1-2.675 4.6-1.877 8.7-4.647 12.2-8.148 3.5-3.461 6.3-7.616 8.1-12.2 1.9-4.557 2.9-9.447 2.9-14.386",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M168.29999999999927 256c0-7.435-2.2-14.701-6.4-20.881-4.1-6.18-10-10.997-16.8-13.843-6.9-2.846-14.5-3.593-21.7-2.147-7.3 1.446-14 5.02-19.3 10.271-5.2 5.292-8.8 11.977-10.3 19.252-1.4 7.299-0.7 14.86 2.2 21.725a36.93 36.93 0 0 0 13.8 16.876c4.2 2.833 9 4.776 14 5.711s10.1 0.842 15.1-0.274c5-1.115 9.7-3.229 13.8-6.214 4.1-2.984 7.6-6.777 10.2-11.146 3.6-5.818 5.4-12.513 5.4-19.333z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "open-in-browser": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M372.10000000000036 225.5999999999999V376.29999999999995c0 4.75-0.93 9.46-2.75 13.86a36.1 36.1 0 0 1-7.85 11.74 36.1 36.1 0 0 1-11.74 7.85c-4.4 1.82-9.11 2.75-13.86 2.75h-217.1c-4.75 0-9.46-0.93-13.86-2.75a36.23 36.23 0 0 1-19.59-19.6c-1.82-4.39-2.75-9.1-2.75-13.85v-217.1c0-4.76 0.93-9.46 2.75-13.86 1.82-4.39 4.48-8.38 7.85-11.74 3.36-3.37 7.35-6.03 11.74-7.85 4.4-1.82 9.11-2.75 13.86-2.75h151.5",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.699",
                                fill: "none"
                            }
                        }, {
                            d: "M328.7000000000007 65.20000000000005h101.2v101.2",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.699",
                                fill: "none"
                            }
                        }, {
                            d: "M221.60000000000036 263.70000000000005l198.5-178.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.699",
                                fill: "none"
                            }
                        }]
                    },
                    maximize: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M406.5 311.89999999999986v95.8h-95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M105.5 202.5v-95.8h95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M310.7000000000007 106.70000000000005h95.8v95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M201.30000000000018 407.70000000000005h-95.8v-95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }]
                    },
                    minimize: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M310.7000000000007 407.7000000000003v-95.8h95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M201.30000000000018 106.70000000000005v95.8h-95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M406.5 202.5h-95.8v-95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }, {
                            d: "M105.5 312h95.8v95.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "39.027",
                                fill: "none"
                            }
                        }]
                    },
                    scale: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M320 80h112v112",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M421.7699999999995 90.19999999999982l-117.77 117.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M192 432h-112v-112",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M90.22999999999956 421.7999999999997l117.77-117.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    "notifications-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M413.7999999999993 343.70000000000005c-23.6-28.9-40.3-43.6-40.3-123.2 0-73-37.2-98.9-67.9-111.6-2.12-0.88-4.03-2.19-5.6-3.87a16.1 16.1 0 0 1-3.5-5.83 41.06 41.06 0 0 0-13.92-24.66 41.02 41.02 0 0 0-26.58-9.77c-9.74 0-19.16 3.46-26.58 9.77a41.06 41.06 0 0 0-13.92 24.66c-0.76 2.16-1.96 4.14-3.52 5.81-1.57 1.67-3.47 3-5.58 3.89-30.7 12.6-67.9 38.5-67.9 111.6 0 79.7-16.7 94.4-40.3 123.2a18.552 18.552 0 0 0 3.1 26c3.62 2.8 8.13 4.19 12.7 3.9h284a18.554 18.554 0 0 0 19.6-17.4 18.9 18.9 0 0 0-3.8-12.5",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37",
                                fill: "none"
                            }
                        }, {
                            d: "M314.7999999999993 373.70000000000005v14.6c0 15.59-6.19 30.55-17.22 41.58a58.85 58.85 0 0 1-41.58 17.22c-15.59 0-30.55-6.2-41.58-17.22a58.85 58.85 0 0 1-17.22-41.58v-14.6",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37",
                                fill: "none"
                            }
                        }]
                    },
                    notifications: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M413.7999999999993 343.8000000000002c-23.6-28.9-40.3-43.6-40.3-123.2 0-73-37.2-98.9-67.9-111.6-2.12-0.88-4.03-2.19-5.6-3.87a16.1 16.1 0 0 1-3.5-5.83 41.06 41.06 0 0 0-13.92-24.66 41.02 41.02 0 0 0-26.58-9.77c-9.74 0-19.16 3.46-26.58 9.77a41.06 41.06 0 0 0-13.92 24.66c-0.76 2.16-1.96 4.14-3.52 5.81-1.57 1.67-3.47 3-5.58 3.89-30.7 12.6-67.9 38.5-67.9 111.6 0 79.7-16.7 94.4-40.3 123.2a18.552 18.552 0 0 0 3.1 26c3.62 2.8 8.13 4.19 12.7 3.9h284c3.55 0.2 7.09-0.63 10.19-2.38 3.09-1.76 5.63-4.36 7.29-7.51 1.66-3.14 2.39-6.7 2.09-10.25a18.67 18.67 0 0 0-3.77-9.76",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M213.79999999999927 429.4000000000001a58.7 58.7 0 0 0 19.25 13.17c7.23 3.06 15 4.63 22.85 4.63s15.62-1.57 22.85-4.63A58.7 58.7 0 0 0 298 429.4000000000001z",
                            style: {
                                fill: "none",
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37"
                            }
                        }]
                    },
                    "person-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M327.60000000000036 151.69999999999982c-3.2 43.1-35.9 78.3-71.7 78.3-35.9 0-68.6-35.1-71.7-78.3a71.98 71.98 0 0 1 16.72-52.36 71.94 71.94 0 0 1 48.8-25.29 71.98 71.98 0 0 1 52.42 16.54 71.95 71.95 0 0 1 25.46 48.71c0.4 4.12 0.4 8.28 0 12.4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37",
                                fill: "none"
                            }
                        }, {
                            d: "M256 282.1999999999998c-70.9 0-142.9 39.1-156.2 113a13.635 13.635 0 0 0 4.64 14.48c1.41 1.11 3.03 1.94 4.76 2.42 1.11 0.32 2.25 0.49 3.4 0.5h287c2.71-0.07 5.34-0.95 7.55-2.52s3.91-3.76 4.87-6.3c1.03-2.78 1.16-5.82 0.38-8.68-13.4-73.8-85.5-112.9-156.4-112.9",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37",
                                fill: "none"
                            }
                        }]
                    },
                    person: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M321 87.5c-16.5-17.7-39.5-27.5-64.8-27.5-25.5 0-48.6 9.7-65 27.3-16.6 17.8-24.6 42-22.8 68.2 3.8 51.6 43.1 93.5 87.7 93.5s83.9-41.9 87.7-93.5c2-25.9-6.1-50.1-22.8-68",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M404.3000000000011 437h-296.1c-3.87 0.06-7.7-0.76-11.2-2.4a25.8 25.8 0 0 1-9.1-7c-2.76-3.4-4.73-7.37-5.77-11.62a29.5 29.5 0 0 1-0.23-12.98c7.1-39.5 29.3-72.7 64.1-96 30.9-20.7 70.1-32.1 110.4-32.1s79.4 11.4 110.4 32.1c34.8 23.3 57 56.5 64.1 96a30.3 30.3 0 0 1-0.31 12.96 30.5 30.5 0 0 1-5.69 11.64 25.8 25.8 0 0 1-9.1 7 27.6 27.6 0 0 1-11.5 2.4",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    glasses: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M288 250.8399999999997s16.6-16.57 82.8-16.57c66.3 0 82.8 16.57 82.8 16.57v1.25c-0.1 98.43-16.8 131.29-82.8 131.29-66.2 0-82.8-33.11-82.8-132.54m-232 1.25v-1.25s16.6-16.57 82.8-16.57c66.3 0 82.9 16.57 82.9 16.57 0 99.43-16.6 132.54-82.9 132.54-65.9 0-82.7-32.86-82.8-131.29m165.7 2.32c0-1.95 14.8-3.57 33.1-3.57s33.2 1.62 33.2 3.57z m191.9-83.39c6.5 5.1 58.1 74.77 58.1 74.77z m-315.2 0l-58.1 74.77s51.6-69.67 58.1-74.77",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    "star-outline": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 84.89999999999986l51 90.5c4.1 7.25 9.8 13.5 16.6 18.31s14.6 8.05 22.8 9.49l103.3 17.9-71 70.8c-6.2 6.17-10.8 13.7-13.6 21.97-2.8 8.28-3.6 17.08-2.4 25.73l14 98.6-97.4-44.7c-7.4-3.36-15.4-5.1-23.5-5.1s-16.1 1.74-23.5 5.1l-97.3 44.7 14-98.6c1.2-8.66 0.4-17.48-2.4-25.78-2.8-8.29-7.4-15.83-13.6-22.02l-71-70.8 103.4-17.9c8.2-1.41 16-4.63 22.8-9.44s12.4-11.09 16.5-18.36z m0-40.1c-4.3 0-8.5 1.14-12.2 3.3-3.7 2.17-6.8 5.27-8.9 9l-57.8 102.5c-1.8 3.09-4.2 5.78-7.1 7.87-2.9 2.07-6.3 3.48-9.8 4.13l-118.2 20.4c-4.4 0.76-8.5 2.71-11.8 5.64-2.5 2.18-4.5 4.87-5.9 7.87s-2.2 6.26-2.3 9.57 0.5 6.61 1.7 9.69 3.1 5.88 5.4 8.23l81.6 81.4c2.7 2.65 4.7 5.9 5.9 9.48s1.5 7.39 1 11.12l-16 112.7c-0.7 4.6 0 9.3 2 13.5a24.36 24.36 0 0 0 13.6 12.59c6 2.23 12.7 1.98 18.5-0.69l110.3-50.7c3.2-1.45 6.6-2.2 10.1-2.2s6.9 0.75 10.1 2.2l110.4 50.7c3.2 1.47 6.6 2.22 10.1 2.2 1.1 0 2.3-0.1 3.4-0.2 4.7-0.68 9.2-2.75 12.7-5.95 3.6-3.2 6.1-7.38 7.3-12.02 0.8-3.08 1-6.29 0.5-9.43l-16-112.7c-0.5-3.73-0.2-7.54 1-11.12s3.2-6.83 5.9-9.48l81.7-81.4c4.1-4.01 6.6-9.34 7.1-15.03 0.5-5.7-1-11.39-4.3-16.06-1.9-2.58-4.2-4.8-6.9-6.52-2.7-1.68-5.7-2.83-8.8-3.39l-118.2-20.4c-3.5-0.59-6.9-1.98-9.8-4.05-3-2.04-5.4-4.77-7.1-7.95l-57.8-102.5c-2.2-3.82-5.4-6.99-9.2-9.2-3.8-1.99-7.9-3.06-12.2-3.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    star: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M234.89999999999964 57.19999999999982c3.2-5.59 8.4-9.7 14.6-11.43 6.2-1.72 12.8-0.92 18.4 2.23 3.8 2.21 7 5.38 9.2 9.2l57.8 102.5c1.8 3.09 4.2 5.78 7.1 7.87 2.9 2.07 6.3 3.48 9.8 4.13l118.2 20.4c4.4 0.73 8.5 2.68 11.8 5.62 2.5 2.2 4.5 4.87 6 7.86 1.4 3.01 2.2 6.27 2.3 9.59 0.1 3.33-0.5 6.64-1.7 9.73s-3.1 5.88-5.5 8.2l-81.7 81.4c-2.7 2.65-4.7 5.9-5.9 9.48s-1.5 7.39-1 11.12l16 112.7c0.9 6.35-0.8 12.79-4.6 17.93-3.8 5.13-9.6 8.54-15.9 9.47-4.6 0.7-9.3 0-13.5-2l-110.4-50.7a24.5 24.5 0 0 0-10.1-2.18c-3.5 0-6.9 0.74-10.1 2.18l-110.3 50.7c-2.9 1.33-6 2.08-9.2 2.2s-6.3-0.38-9.3-1.49c-3-1.12-5.7-2.8-8.1-4.95-2.3-2.17-4.2-4.77-5.5-7.66-1.9-4.23-2.6-8.9-2-13.5l16-112.7c0.5-3.73 0.2-7.54-1-11.12s-3.2-6.83-5.9-9.48l-81.6-81.4a22.8 22.8 0 0 1-5.3-7.83c-1.8-4.42-2.3-9.28-1.4-13.97 0.9-4.7 3.2-9.01 6.6-12.4 3.6-3.5 8.1-5.86 13-6.8l118.2-20.4c3.5-0.59 6.9-1.97 9.8-4.05 3-2.04 5.4-4.77 7.1-7.95z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    close: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M289.90000000000146 256l95-95c4.5-4.53 7-10.63 7.1-17 0-6.38-2.5-12.5-7-17.02s-10.6-7.07-17-7.08c-3.2-0.01-6.3 0.61-9.2 1.81s-5.6 2.96-7.8 5.19l-95 95-95-95c-3.4-3.33-7.6-5.6-12.3-6.51-4.6-0.91-9.4-0.42-13.8 1.4-4.4 1.79-8.1 4.86-10.8 8.81-2.6 3.94-4 8.58-4 13.33-0.1 3.15 0.5 6.28 1.7 9.19 1.2 2.92 3 5.57 5.2 7.78l95 95-95 95c-2.8 2.8-4.8 6.24-6 10.02-1.1 3.78-1.3 7.78-0.5 11.64 0.8 3.87 2.5 7.48 5 10.52 2.5 3.05 5.8 5.43 9.4 6.93 4.4 1.81 9.2 2.29 13.8 1.39 4.7-0.91 8.9-3.17 12.3-6.5l95-95 95 95c3.4 3.34 7.6 5.6 12.3 6.51 4.6 0.92 9.4 0.43 13.8-1.39 4.4-1.8 8.1-4.87 10.8-8.82 2.6-3.94 4-8.58 4-13.33 0.1-3.15-0.5-6.28-1.7-9.2-1.2-2.91-3-5.56-5.2-7.77z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    checkmark: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M416 128l-224 256-96-96",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "60",
                                fill: "none"
                            }
                        }]
                    },
                    network: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 74.90000000000009c-103.9 0-188.2 84.22-188.2 188.2 0 103.9 84.2 188.2 188.2 188.2 49.9 0 97.8-19.83 133.1-55.12 35.3-35.3 55.1-83.17 55.1-133.08s-19.8-97.78-55.1-133.08a188.3 188.3 0 0 0-133.1-55.12m0 28.3c1.6 0 3.1 0.17 4.6 0.25a233.3 233.3 0 0 0-68.4 79.23c-4.8-1.15-9.8-1.07-14.6 0.23-4.7 1.3-9.1 3.78-12.6 7.21-3.6 3.42-6.2 7.68-7.7 12.39-1.4 4.71-1.7 9.72-0.7 14.55a276.8 276.8 0 0 0-60.1 39.62c1.7-41.21 19.2-80.18 48.9-108.78s69.4-44.62 110.6-44.7m54.1 87.85c-6.6 0.95-12.8 3.55-18.1 7.55-5.3 4.01-9.5 9.28-12.2 15.34-21.5-4.07-43.4-5.91-65.3-5.49-0.6-6.78-3.5-13.15-8.3-17.99-0.4-0.34-0.7-0.51-1.1-0.85 18.3-34.23 45.2-63.14 78-83.88 1.4 0.25 2.8 0.34 4.2 0.59 11.7 26.9 19.4 55.4 22.7 84.56z m-4.7-79.91c37.2 12.17 68.7 37.53 88.5 71.29-13.6 10.72-29.4 18.47-46.2 22.72-0.8-0.93-1.4-2.02-2.3-2.95-5.6-5.55-12.7-9.37-20.4-10.98 0-0.54-0.1-1.08-0.2-1.61-3.2-26.86-9.7-53.22-19.4-78.47m-15.9 149.85c-22 26.88-49.7 48.45-81.2 63.1-0.6-0.83-1.3-1.62-2-2.37-2.8-2.85-6.3-5.08-10-6.55-3.8-1.47-7.8-2.14-11.8-1.98-6-23.83-5.9-48.8 0.4-72.56 5.8 0.15 11.4-1.43 16.3-4.53s8.7-7.58 11-12.87c21.5-0.58 43 1.09 64.1 4.98-0.4 5.75 0.4 11.52 2.4 16.93 2 5.42 5.1 10.33 9.2 14.41 0.5 0.53 1 1.01 1.6 1.44m-126.4-30.75c0.5 0.66 1 1.28 1.6 1.86 1.8 1.77 3.8 3.28 6 4.48-7.2 26.45-7.3 54.32-0.3 80.83-2.1 1.22-4 2.67-5.7 4.31-5.1 5.14-8.1 12.01-8.5 19.26-14.6-0.34-29.1-2.7-43-7.01-9.1-18.17-14.7-37.93-16.3-58.2 19.8-18.3 42-33.64 66.2-45.53m-4.1 125.52h0.3c2.9 6.12 7.9 10.99 14.1 13.76a28.7 28.7 0 0 0 19.7 1.36c11.9 19.5 27.1 36.74 45 50.94-23.1-2.62-45.3-10.23-65.1-22.29-19.9-12.06-36.8-28.29-49.8-47.57 11.8 2.53 23.8 3.8 35.8 3.8m46.9 7.86c0.1-0.08 0.2-0.17 0.3-0.25 3.3-3.33 5.8-7.4 7.2-11.88 1.5-4.48 1.8-9.25 1-13.89 34.2-15.78 64.2-39.32 87.7-68.76 2.7 0.99 5.5 1.7 8.3 2.12-6.1 52.11-22 102.6-46.8 148.83-24.1-13.02-44-32.47-57.7-56.17m73.7 57.27c24.4-46.86 39.9-97.84 45.7-150.36 7.7-1.6 14.7-5.42 20.2-10.98 1-1.05 1.9-2.18 2.7-3.38a96 96 0 0 1 36.2 17.38c10.7 8.27 19.6 18.69 26 30.6-8.1 30.07-24.8 57.14-48 77.87-23.2 20.74-52 34.25-82.8 38.87m75.6-177.89c2.5-8.05 2.4-16.66-0.2-24.67 16.5-4.67 32-12.31 45.8-22.55 12.7 27 17.5 57.05 13.8 86.66-15.3-18.93-36-32.7-59.4-39.44",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    about: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M251.3000000000011 83.90000000000009c-42.8 0-84 15.91-115.7 44.63s-51.5 68.2-55.7 110.75c-4.2 42.56 7.6 85.15 33.1 119.49 25.4 34.35 62.8 57.99 104.7 66.32 42 8.34 85.5 0.78 122.2-21.21s63.8-56.83 76.3-97.75c12.4-40.93 9.1-85-9.2-123.65a172.33 172.33 0 0 0-89.8-85.48c-20.9-8.65-43.3-13.1-65.9-13.1Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M225.20000000000073 229.80999999999995h29.9v102.06",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M218 335.7199999999998h77.1",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M251.3000000000011 145.5899999999997c-4.8 0-9.5 1.42-13.5 4.09-3 2-5.5 4.62-7.4 7.7-1.8 3.1-3 6.55-3.4 10.12-0.3 3.59 0.1 7.21 1.4 10.59 1.2 3.4 3.1 6.48 5.7 9 3.4 3.41 7.7 5.74 12.4 6.68 4.8 0.94 9.7 0.45 14.1-1.4 4.4-1.87 8.2-4.98 10.9-8.95 2.7-3.99 4.1-8.7 4.1-13.51 0-3.19-0.6-6.35-1.8-9.31-1.3-2.92-3.1-5.6-5.3-7.89-4.6-4.56-10.8-7.12-17.2-7.12",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    list: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M100.69999999999891 107h74.5c2.44 0 4.86 0.48 7.12 1.41s4.31 2.3 6.04 4.03 3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5c0.01-4.93 1.97-9.65 5.46-13.14s8.21-5.45 13.14-5.46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M100.69999999999891 293.2999999999997h74.5c2.44 0 4.86 0.48 7.12 1.41s4.31 2.3 6.04 4.03 3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5c0-2.44 0.48-4.86 1.41-7.12s2.3-4.31 4.03-6.04 3.78-3.1 6.04-4.03 4.68-1.41 7.12-1.41",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M286.89999999999964 144.29999999999973h149c4.93 0 9.66 1.96 13.15 5.45s5.45 8.22 5.45 13.15-1.96 9.66-5.45 13.15a18.6 18.6 0 0 1-13.15 5.45h-149c-4.93 0-9.66-1.96-13.15-5.45a18.6 18.6 0 0 1-5.45-13.15c0-4.93 1.96-9.66 5.45-13.15s8.22-5.45 13.15-5.45Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M286.89999999999964 330.5h149c4.93 0 9.66 1.96 13.15 5.45s5.45 8.22 5.45 13.15-1.96 9.66-5.45 13.15a18.6 18.6 0 0 1-13.15 5.45h-149c-4.93 0-9.66-1.96-13.15-5.45a18.6 18.6 0 0 1-5.45-13.15c0-4.93 1.96-9.66 5.45-13.15s8.22-5.45 13.15-5.45Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }]
                    },
                    grid: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M125.59999999999854 107h74.5c2.44 0 4.86 0.48 7.12 1.41s4.31 2.3 6.04 4.03 3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5a18.52 18.52 0 0 1 5.42-13.18 18.522 18.522 0 0 1 13.18-5.42",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M311.7999999999993 107h74.5c2.44 0 4.86 0.48 7.12 1.41s4.31 2.3 6.04 4.03 3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5c0.01-4.93 1.97-9.65 5.46-13.14s8.21-5.45 13.14-5.46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M125.59999999999854 293.2999999999997h74.5c2.44 0 4.86 0.48 7.12 1.41s4.31 2.3 6.04 4.03 3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5a18.52 18.52 0 0 1 5.42-13.18 18.522 18.522 0 0 1 13.18-5.42",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }, {
                            d: "M311.7999999999993 293.2999999999997h74.5c2.44 0 4.86 0.48 7.12 1.41 2.26 0.94 4.31 2.3 6.04 4.03s3.1 3.78 4.03 6.04 1.41 4.68 1.41 7.12v74.5c0 2.44-0.48 4.86-1.41 7.12s-2.3 4.31-4.03 6.04-3.78 3.1-6.04 4.03-4.68 1.41-7.12 1.41h-74.5c-2.44 0-4.86-0.48-7.12-1.41s-4.31-2.3-6.04-4.03-3.1-3.78-4.03-6.04-1.41-4.68-1.41-7.12v-74.5c0.01-4.93 1.97-9.65 5.46-13.14 3.49-3.48 8.21-5.45 13.14-5.46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "37.252",
                                fill: "none"
                            }
                        }]
                    },
                    share: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M396 459.89999999999964c-18.1 0.12-35.6-6.92-48.5-19.6-13-12.68-20.4-29.97-20.7-48.1v-1.5l-138.3-45.6a78.16 78.16 0 0 1-27.5 21.83 78.1 78.1 0 0 1-34.3 7.57c-20.25 0.8-39.99-6.47-54.89-20.22a76.497 76.497 0 0 1-4.45-108.01 76.46 76.46 0 0 1 53.04-24.67q3.15-0.15 6.3 0c17.5 0.17 34.4 5.84 48.5 16.2l101.7-66.2c-6.3-12.85-9.8-26.89-10.3-41.2-0.9-19.1 3.9-38.03 13.9-54.36 10-16.32 24.6-29.29 42-37.23 17.4-7.93 36.8-10.48 55.6-7.3 18.9 3.17 36.3 11.93 50.2 25.13 13.8 13.2 23.4 30.24 27.4 48.92 4.1 18.69 2.5 38.16-4.6 55.91-7.1 17.76-19.4 32.97-35.3 43.69a95.6 95.6 0 0 1-53.6 16.44c-12.2 0.2-24.4-2.04-35.8-6.59-11.3-4.55-21.7-11.32-30.4-19.91l-100 64.7c5.7 10.87 8.7 22.93 8.8 35.2-0.3 6.45-1.3 12.85-2.9 19.1l132.3 42.6a70.4 70.4 0 0 1 33.3-29.66c14-6 29.6-7.27 44.4-3.6 14.8 3.66 28 12.06 37.6 23.91s15.1 26.51 15.6 41.75c-0.1 18.45-7.4 36.13-20.3 49.33s-30.4 20.9-48.8 21.47m0-104.4c-6.9 0.3-13.6 2.62-19.2 6.68-5.6 4.05-9.8 9.67-12.3 16.14-2.4 6.47-2.9 13.51-1.4 20.25 1.6 6.74 5.1 12.88 10 17.66 5 4.78 11.3 7.99 18.1 9.22s13.9 0.44 20.2-2.28c6.4-2.72 11.8-7.25 15.6-13.02s5.8-12.54 5.8-19.45c-0.2-9.54-4.2-18.59-11.1-25.19s-16.2-10.19-25.7-10.01m-270.6-102.9a45.6 45.6 0 0 0-17.53 3.05 45.7 45.7 0 0 0-15.04 9.53 45.8 45.8 0 0 0-10.24 14.55 45.61 45.61 0 0 0-0.84 34.9 45.7 45.7 0 0 0 9.53 15.04c4.13 4.33 9.08 7.81 14.55 10.24a45.6 45.6 0 0 0 17.37 3.89h2.2c5.99 0.14 12-0.89 17.5-3.05 5.6-2.16 10.7-5.4 15.1-9.53 4.3-4.13 7.8-9.08 10.2-14.55 2.4-5.48 3.8-11.38 3.9-17.37 0.2-5.99-0.9-11.95-3-17.53-2.2-5.59-5.4-10.7-9.6-15.04-4.1-4.33-9.1-7.81-14.5-10.24a45.9 45.9 0 0 0-17.4-3.89z m236.8-180.9c-8-0.26-16 1.06-23.6 3.89-7.5 2.83-14.4 7.12-20.3 12.62-5.8 5.49-10.6 12.09-13.9 19.42s-5.1 15.23-5.4 23.27v1.1c0.3 16.24 7 31.72 18.6 43.02 11.7 11.31 27.4 17.52 43.6 17.28h1.1c8.2 0.39 16.3-0.89 24-3.75 7.6-2.86 14.6-7.24 20.5-12.88 6-5.65 10.7-12.43 13.9-19.95 3.2-7.51 4.8-15.6 4.8-23.77 0-8.18-1.6-16.26-4.9-23.77-3.2-7.51-7.9-14.29-13.8-19.92s-13-10.01-20.6-12.85c-7.7-2.85-15.8-4.11-24-3.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    warning: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M449.10000000000036 399.0999999999999l-170.5-316.5c-12-22.4-44.2-22.4-56.3 0l-170.4 316.5c-2.7 4.85-4 10.35-3.8 15.9 0.1 5.52 1.7 10.92 4.5 15.67s6.8 8.69 11.6 11.43c4.8 2.72 10.3 4.17 15.8 4.2h340.9c5.5 0.01 11-1.44 15.8-4.2s8.8-6.68 11.7-11.4c2.8-4.76 4.4-10.17 4.5-15.71 0.1-5.53-1.2-11-3.8-15.89m-198.6-1.9c-3 0.01-5.9-0.65-8.6-1.92s-5-3.13-6.9-5.43c-1.9-2.29-3.2-4.98-3.9-7.86s-0.8-5.88-0.2-8.79c0.7-3.88 2.6-7.44 5.4-10.2 2.8-2.81 6.4-4.72 10.3-5.5 3.9-0.76 7.9-0.36 11.5 1.15a19.9 19.9 0 0 1 9 7.35c2.2 3.28 3.4 7.14 3.4 11.1 0 2.65-0.5 5.28-1.6 7.7-1.5 3.66-4 6.79-7.3 9s-7.1 3.39-11.1 3.4m21.7-201.1l-5.7 122c0 4.24-1.7 8.31-4.7 11.31s-7.1 4.69-11.3 4.69-8.3-1.69-11.3-4.69-4.7-7.07-4.7-11.31l-5.8-121.9c-0.2-5.87 1.9-11.59 5.9-15.9 2.1-2.04 4.5-3.73 7.1-5 2.7-1.18 5.6-1.79 8.5-1.8h0.2c2.9 0 5.9 0.58 8.6 1.7 2.7 1.16 5.1 2.86 7.1 5 2.1 2.09 3.7 4.62 4.7 7.4 1 2.72 1.5 5.6 1.4 8.5",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "cloud-sync": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M472.6999999999989 189.5c-13.3-8.4-29.8-14.6-48.1-17.9-3-0.6-5.9-2.06-8.1-4.2-2.2-2.19-3.8-4.96-4.5-8-7.9-34.5-24.6-64.1-49.1-86.6-28.8-26.2-66.7-40.7-106.9-40.7-35.4 0-68 11.1-94.4 32-17.8 14.2-32.1 32.25-41.9 52.8-1.1 2.3-2.8 4.32-4.8 5.89-2 1.56-4.4 2.63-6.9 3.11-27.1 4.9-50.5 14.7-68.4 28.7-25.9 20.3-39.6 49.1-39.6 83.1 0 67.4 55.9 114.4 136 114.4h72v-83c0-12.73 5.1-24.94 14.1-33.94s21.2-14.06 33.9-14.06 24.9 5.06 33.9 14.06 14.1 21.21 14.1 33.94v83h92c72.6 0 116-34.2 116-91.6 0-30.2-13.6-54.7-39.3-71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M256 253c-4.2 0.01-8.3 1.7-11.3 4.7s-4.7 7.06-4.7 11.3v156.4l-36.7-36.6c-1.5-1.44-3.3-2.59-5.2-3.38-1.9-0.78-4-1.16-6.1-1.12-4.2 0.03-8.2 1.71-11.2 4.68-1.5 1.47-2.6 3.22-3.4 5.15s-1.2 3.99-1.2 6.07c0 4.2 1.6 8.25 4.5 11.3l64 63.9c1.5 1.5 3.2 2.69 5.2 3.48 1.9 0.81 4 1.22 6.1 1.22s4.2-0.41 6.1-1.22c2-0.79 3.7-1.98 5.2-3.48l64-63.9c1.5-1.49 2.6-3.26 3.4-5.2 0.7-1.96 1.1-4.02 1.1-6.1 0-3.13-0.9-6.18-2.7-8.79-1.7-2.61-4.1-4.66-7-5.89-1.9-0.81-4-1.23-6.1-1.22-4.2-0.03-8.3 1.59-11.3 4.5l-36.7 36.6v-156.4c0-2.1-0.4-4.18-1.2-6.13s-2-3.71-3.5-5.19-3.3-2.66-5.2-3.47c-1.9-0.8-4-1.21-6.1-1.21",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    hourglass: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M214.60000000000036 235.32999999999993c-31.8-58.12-54.8-118.18-16.4-184.81-4-2.97-7.6-6.29-11-9.92-0.7-1.21-1.5-2.41-2.1-3.69-2.5-4.67-0.6-11.01 4.4-12.54 10-3.03 23.7-1.25 33.4 0.17 73 11.87 143.2 36.67 207.5 73.24a99.7 99.7 0 0 1 19.7 15.56c7 7.18 4.8 12.76-5.3 14.59-5.9 0.83-11.8 1.31-17.9 1.56-10.7 76.05-65.9 109.28-125.6 134.84 6.8 16.1 13.9 31.45 20.1 47.1 16.7 36.58 19 78.14 6.3 116.31-0.2 0.98-6.8 19.54 3.2 26.69 10.5 11.65 1.2 28.63-7.8 27.44-0.4-0.02-0.8-0.01-1.2 0.02-16.4-0.26-32.9-1.68-49.1-4.22a636 636 0 0 1-182.8-65.68c-8.6-5.21-16.9-11.02-24.7-17.38-2.9-2.16-4.8-5.28-5.6-8.78-0.7-3.51-0.1-7.14 1.6-10.27 0.7-3.2 2.6-6 5.3-7.87s5.9-2.71 9.2-2.36c10.9 1.21 13.3-3.79 15.7-13.63 9.7-35.18 32.7-65.22 64.1-83.81 18.8-12.15 39.1-21.65 59-32.56m84.5 195.45c11.7-21.88 15.4-47.18 10.4-71.49-5.9-31.81-18.6-61.98-37.1-88.51-7.9-12.47-4.9-20.19 8.5-26.07 21.6-8.88 42.5-19.11 62.8-30.62 27-15.29 46.9-40.64 55.3-70.52 4.5-16.24 3.1-17.04-12.7-21.31-29.9-8.17-59.9-16.18-89.2-26.15-23.1-7.97-45.5-18.53-67.9-28.37-7.2-3.11-11.1-2.45-15.2 5.26-11.1 22.85-14.2 48.8-8.6 73.6 6.7 30.9 19.4 60.21 37.2 86.32 1.7 1.93 2.9 4.29 3.4 6.82s0.3 5.15-0.5 7.6c-0.9 2.44-2.4 4.6-4.4 6.26-2 1.65-4.4 2.75-6.9 3.18-7.9 2.89-16 5.82-23.7 9.19a175.14 175.14 0 0 0-83.8 65.27 67 67 0 0 0-12.6 37.63 88.4 88.4 0 0 0 22.9 0.79c20-4.64 58.4 0.14 84.9-13.48 7.7-2.34 15.8-2.3 23.5 0.11 7.6 2.4 14.4 7.06 19.3 13.37 13.1 14.46 13.8 26 24.2 42.58 6.3 9.36 0 14.61 10.2 18.54",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M335.10000000000036 167.03999999999996c-1.5 0.21-3 0.35-4.3 0.53-0.2 0.03-0.3 0.09-0.6 0.12-28.4 6.25-58.1 3.91-85.2-6.72-0.4-0.13-0.9-0.3-1.2-0.43-1.8-0.4-3.6-0.44-5.4-0.13-1.8 0.3-3.5 0.97-5 1.96s-2.6 2.4-3.3 4.05c-1.6 3.62-1.9 7.66-1 11.5 0.1 0.45 0.2 0.88 0.4 1.3 7.1 17.78 14.9 35.15 23.2 52 0.5 1.06 1.3 2 2.2 2.74 1.2 1.03 2.6 1.78 4.1 2.18 1.6 0.4 3.2 0.44 4.7 0.12 0.4-0.06 0.8-0.25 1.2-0.34 27.5-10.1 52.7-25.56 74.2-45.5 0.3-0.31 0.6-0.53 0.9-0.88 3.2-3.82 5.2-8.54 5.6-13.51 0-1.69-0.5-3.34-1.5-4.72-1-1.45-2.3-2.61-3.9-3.36s-3.3-1.07-5.1-0.91",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M266.2000000000007 325.75c-0.2 4.23-2 8.22-5.1 11.11s-7.2 4.46-11.4 4.35c-0.1-0.03-0.3 0.03-0.4-0.01-3.2-0.17-6.2-1.27-8.8-3.17-2.6-1.89-4.5-4.5-5.6-7.5-1.1-2.99-1.3-6.26-0.5-9.35 0.8-3.1 2.4-5.91 4.8-8.06 2.3-2.17 5.3-3.59 8.4-4.07 3.2-0.51 6.4-0.07 9.3 1.26s5.3 3.49 7 6.21c1.7 2.71 2.5 5.85 2.4 9.04 0 0.02-0.1 0.04-0.1 0.08z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M261.7999999999993 278.64999999999986c-0.9 6.16-4 9.64-10.2 9.38-1.2 0.06-2.3-0.1-3.4-0.48a7.25 7.25 0 0 1-2.9-1.73c-0.9-0.75-1.6-1.68-2.1-2.73s-0.7-2.17-0.8-3.31c0-0.62 0-1.24 0.1-1.86-0.1-1.17 0.1-2.35 0.5-3.45 0.3-1.13 0.9-2.16 1.7-3.01 0.8-0.84 1.8-1.55 2.8-2.08 1.1-0.5 2.2-0.78 3.4-0.83 0.6-0.03 1.1-0.02 1.7 0.05 6.1 0.21 8.9 4.13 9.2 10.05",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    pause: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M182.59900000000005 93h-18.4v330.5h18.4z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "36.719",
                                fill: "none"
                            }
                        }, {
                            d: "M347.798 93h-18.4v330.5h18.4z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "36.719",
                                fill: "none"
                            }
                        }]
                    },
                    next: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M120.90000000000009 119.19999999999982v278.5c0 16.7 15.2 27.4 27.8 19.4l222-142.4c2.12-1.56 3.91-3.52 5.27-5.77 1.36-2.26 2.26-4.76 2.65-7.36s0.26-5.25-0.38-7.8a19.9 19.9 0 0 0-3.34-7.07 18.6 18.6 0 0 0-4.2-4.2l-222-142.5c-12.6-8.2-27.8 2.5-27.8 19.2Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }, {
                            d: "M391.0999999999999 90.30000000000018v337.9",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }]
                    },
                    "skip-back": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M475.5999999999999 145.5v221c0 13.3-13 21.7-23.6 15.4l-188.9-113c-9.2-5.5-9.2-20.1 0-25.6l188.9-113c10.6-6.5 23.6 1.9 23.6 15.2Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }, {
                            d: "M247 145.5v221c0 13.3-13 21.7-23.6 15.4l-188.9-113c-9.2-5.5-9.2-20.1 0-25.6l188.9-113c10.6-6.5 23.6 1.9 23.6 15.2Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }]
                    },
                    "skip-forward": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M36.30000000000018 145.5v221c0 13.3 13 21.7 23.6 15.4l188.9-113c9.2-5.5 9.2-20.1 0-25.6l-188.9-113c-10.6-6.5-23.6 1.9-23.6 15.2Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }, {
                            d: "M264.9000000000001 145.5v221c0 13.3 13 21.7 23.6 15.4l188.9-113c9.2-5.5 9.2-20.1 0-25.6l-188.9-113c-10.6-6.5-23.6 1.9-23.6 15.2Z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-miterlimit": "10",
                                "stroke-width": "35.851",
                                fill: "none"
                            }
                        }]
                    },
                    "volume-off": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M236.9000000000001 187h-72.6c-1.09 0-2.17 0.21-3.18 0.63a8.3 8.3 0 0 0-4.49 4.49 8.3 8.3 0 0 0-0.63 3.18v116.8a8.27 8.27 0 0 0 2.43 5.87 8.274 8.274 0 0 0 5.87 2.43h72.6c3.87-0.02 7.63 1.32 10.6 3.8l95.4 78.1c1.8 1.3 4.03 1.84 6.22 1.5a8.42 8.42 0 0 0 5.48-3.3 8.03 8.03 0 0 0 1.6-5v-283.9a8.27 8.27 0 0 0-2.43-5.87 8.274 8.274 0 0 0-5.87-2.43c-1.76 0.01-3.47 0.57-4.9 1.6l-95.4 78.1c-2.95 2.6-6.76 4.03-10.7 4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }]
                    },
                    "volume-low": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M186.9000000000001 188h-72.6c-1.09 0-2.17 0.21-3.18 0.63a8.3 8.3 0 0 0-4.49 4.49 8.3 8.3 0 0 0-0.63 3.18v116.8a8.27 8.27 0 0 0 2.43 5.87 8.274 8.274 0 0 0 5.87 2.43h72.6c3.87-0.02 7.63 1.32 10.6 3.8l95.4 78.1c1.8 1.3 4.03 1.84 6.22 1.5a8.42 8.42 0 0 0 5.48-3.3 8.03 8.03 0 0 0 1.6-5v-283.9a8.27 8.27 0 0 0-2.43-5.87 8.274 8.274 0 0 0-5.87-2.43c-1.76 0.01-3.47 0.57-4.9 1.6l-95.4 78.1c-2.95 2.6-6.76 4.03-10.7 4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M389.5 321.40000000000055a149 149 0 0 0 16.7-66.7c-0.08-23.26-5.81-46.15-16.7-66.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }]
                    },
                    "volume-medium": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M152.89999999999964 188h-72.6c-1.09 0-2.17 0.21-3.18 0.63a8.1 8.1 0 0 0-2.7 1.8c-0.77 0.77-1.38 1.68-1.79 2.69a8.3 8.3 0 0 0-0.63 3.18v116.8a8.27 8.27 0 0 0 2.43 5.87 8.274 8.274 0 0 0 5.87 2.43h72.6c3.87-0.02 7.63 1.32 10.6 3.8l95.4 78.1c1.8 1.3 4.03 1.84 6.22 1.5a8.42 8.42 0 0 0 5.48-3.3 8.03 8.03 0 0 0 1.6-5v-283.9a8.27 8.27 0 0 0-2.43-5.87 8.274 8.274 0 0 0-5.87-2.43c-1.76 0.01-3.47 0.57-4.9 1.6l-95.4 78.1a16.55 16.55 0 0 1-10.7 4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M355.60000000000036 321.40000000000055a149 149 0 0 0 16.7-66.7c-0.09-23.26-5.82-46.14-16.7-66.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M405.60000000000036 371.5a213.6 213.6 0 0 0 33.4-116.8c0.71-41.39-10.92-82.05-33.4-116.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }]
                    },
                    "volume-high": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M121.89999999999964 188.90000000000055h-72.6c-1.09 0-2.17 0.21-3.18 0.63a8.1 8.1 0 0 0-2.7 1.8c-0.77 0.77-1.38 1.68-1.79 2.69a8.3 8.3 0 0 0-0.63 3.18v116.8c0 1.09 0.21 2.17 0.63 3.18a8.1 8.1 0 0 0 1.8 2.7c0.77 0.77 1.68 1.38 2.69 1.79 1.01 0.42 2.09 0.63 3.18 0.63h72.6c3.87-0.02 7.63 1.32 10.6 3.8l95.4 78.1c1.8 1.3 4.03 1.84 6.22 1.5a8.42 8.42 0 0 0 5.48-3.3 8.03 8.03 0 0 0 1.6-5v-283.9a8.27 8.27 0 0 0-2.43-5.87 8.274 8.274 0 0 0-5.87-2.43c-1.76 0.01-3.47 0.57-4.9 1.6l-95.4 78.1a16.55 16.55 0 0 1-10.7 4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M324.5 322.3000000000002a149 149 0 0 0 16.7-66.7c-0.08-23.26-5.81-46.15-16.7-66.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M374.60000000000036 372.40000000000055a213.6 213.6 0 0 0 33.4-116.8c0.71-41.39-10.92-82.05-33.4-116.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M421.6999999999998 415.60000000000036c69.4-88.2 61.4-242.3-1.3-321.3",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }]
                    },
                    "volume-mute": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M423.8000000000002 441.5L54.69999999999982 72.30000000000018",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "33.557",
                                fill: "none"
                            }
                        }, {
                            d: "M222.39999999999964 132v35.4c-0.01 1.12 0.42 2.2 1.2 3l25.2 25.2c0.48 0.49 1.08 0.85 1.74 1.04 0.66 0.2 1.36 0.23 2.03 0.1 0.68-0.13 1.31-0.43 1.84-0.87s0.94-1 1.2-1.64c0.21-0.52 0.31-1.07 0.29-1.63v-77.7c0.05-4.65-1.16-9.22-3.5-13.24a25.7 25.7 0 0 0-9.8-9.56 25.04 25.04 0 0 0-13.68-2.95c-4.74 0.34-9.3 2.02-13.12 4.85-0.2 0.2-0.5 0.3-0.7 0.5l-33.5 27.4c-0.43 0.35-0.79 0.78-1.05 1.26a4.2 4.2 0 0 0-0.49 1.57c-0.05 0.55 0 1.1 0.16 1.63s0.43 1.02 0.78 1.44l0.3 0.3 17.9 17.9c0.74 0.72 1.71 1.14 2.74 1.2 1.03 0.05 2.05-0.26 2.86-0.9z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M222.39999999999964 381.8000000000002l-81.9-67a33.5 33.5 0 0 0-21.3-7.5h-64.6v-100.7h53.2c0.83-0.01 1.64-0.26 2.33-0.72 0.69-0.47 1.22-1.13 1.54-1.89a4.3 4.3 0 0 0 0.26-2.43c-0.15-0.82-0.55-1.57-1.13-2.16l-25.2-25.2a4.08 4.08 0 0 0-3-1.2h-36.4a25.25 25.25 0 0 0-17.81 7.39 25.25 25.25 0 0 0-7.39 17.81v117.4a25.25 25.25 0 0 0 7.39 17.81 25.25 25.25 0 0 0 17.81 7.39h73.2l95.8 78.4c0.21 0.2 0.44 0.37 0.7 0.5 3.87 2.87 8.48 4.56 13.29 4.88 4.8 0.32 9.6-0.75 13.81-3.08a25.74 25.74 0 0 0 13-22.6V346.3000000000002c0.01-1.12-0.42-2.2-1.2-3l-25.2-25.2a4.23 4.23 0 0 0-5.9 0c-0.39 0.39-0.7 0.86-0.91 1.38-0.21 0.51-0.31 1.07-0.29 1.62v60.7z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M356.6999999999998 256.90000000000055c0-25.8-6.1-50.2-18.6-74.7-2.1-3.84-5.61-6.71-9.8-7.99-4.18-1.29-8.7-0.9-12.59 1.1-3.9 1.99-6.86 5.42-8.26 9.57-1.41 4.14-1.13 8.67 0.75 12.62 10.1 19.7 14.9 39.2 14.9 59.5 0 2.8-0.1 5.6-0.3 8.5-0.09 1.21 0.08 2.42 0.5 3.55a8.6 8.6 0 0 0 1.9 3.05l20.6 20.6a4.23 4.23 0 0 0 5.9 0c0.59-0.56 0.98-1.3 1.1-2.1 2.59-11.05 3.9-22.35 3.9-33.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M423.8000000000002 256.90000000000055c0-53.7-13.7-88-35.8-125.9a16.82 16.82 0 0 0-10.22-7.57 16.79 16.79 0 0 0-20.33 11.85c-1.16 4.25-0.6 8.78 1.55 12.62 19.8 34 31.3 62.7 31.3 109 0 25-3.5 45-9.8 63.6-0.5 1.49-0.58 3.1-0.23 4.63a8.5 8.5 0 0 0 2.23 4.07l17.6 17.6a4.23 4.23 0 0 0 5.9 0c0.39-0.37 0.69-0.81 0.9-1.3 10.7-25.8 16.9-53 16.9-88.6",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M490.89999999999964 256.90000000000055c0-77.9-21.2-127-53-176.8a16.77 16.77 0 0 0-10.53-7.11c-4.3-0.9-8.79-0.08-12.49 2.29s-6.33 6.1-7.32 10.38a16.8 16.8 0 0 0 2.04 12.54c28.7 44.9 47.7 89 47.7 158.8 0 49.8-9.3 86.1-24.7 118.5-0.37 0.79-0.49 1.66-0.35 2.52s0.54 1.66 1.15 2.28l18.7 18.7c0.58 0.59 1.32 1 2.13 1.16s1.66 0.08 2.42-0.24a4.372 4.372 0 0 0 2.15-2.02c22.5-44.3 32.1-87.5 32.1-141",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    subtitles: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M482.5 216.69999999999982v-81.3c0-31.9-25.5-41-38.7-40.7h-377.2c-17.9 0-37.1 10.8-37.1 38.7v232.4c0 23.9 15.9 38.6 38.7 38.6h275l31 31c3.9 3.71 9.1 5.77 14.5 5.77s10.6-2.06 14.5-5.77l31-31h17.4c14.5 0 31-9 31-36.7z m-32.9 0v143.2c0 5.8 0 11.6-7.7 11.6h-19.4l-34.9 32.9-32.8-32.9h-282.8c-1.3 0.02-2.5-0.21-3.7-0.69s-2.3-1.19-3.2-2.1c-0.9-0.9-1.6-1.98-2.1-3.17s-0.7-2.46-0.7-3.74v-224.6c0-5.8 0-11.6 7.7-11.6h369.8c6.9 0 9.7 5.8 9.7 9.7v81.4z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M192.10000000000036 249.60000000000036h-75.5q-3.45-0.015-6.6 1.29c-2.2 0.86-4.1 2.14-5.7 3.75s-2.9 3.52-3.8 5.62c-0.8 2.1-1.3 4.36-1.3 6.64v0.1c0 2.28 0.4 4.54 1.3 6.65s2.1 4.03 3.7 5.64c1.7 1.62 3.6 2.9 5.7 3.78s4.3 1.33 6.6 1.33h75.6c3.4 0.01 6.8-0.99 9.7-2.89 2.8-1.9 5.1-4.6 6.4-7.77 0.8-2.11 1.3-4.36 1.3-6.64v-0.1c0-2.29-0.4-4.55-1.3-6.67-0.9-2.11-2.2-4.03-3.8-5.65s-3.5-2.9-5.6-3.77-4.4-1.32-6.7-1.31",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M228.8000000000011 267.10000000000036c0 2.28 0.4 4.54 1.3 6.65s2.1 4.03 3.7 5.64c1.7 1.62 3.6 2.9 5.7 3.78s4.3 1.33 6.6 1.33h151.1c2.3 0.01 4.5-0.42 6.7-1.29 2.1-0.87 4-2.14 5.6-3.75s2.9-3.52 3.8-5.62c0.8-2.1 1.3-4.36 1.3-6.64v-0.1c0-2.28-0.4-4.54-1.3-6.65-0.8-2.11-2.1-4.03-3.7-5.64-1.6-1.62-3.6-2.9-5.7-3.78s-4.3-1.33-6.6-1.33H244.20000000000073c-4.3 0.42-8.3 2.44-11.1 5.67-2.9 3.23-4.4 7.42-4.3 11.73",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M321.8000000000011 340.60000000000036h75.5c2.3 0.01 4.5-0.43 6.7-1.29 2.1-0.87 4-2.14 5.6-3.75s2.9-3.52 3.8-5.62 1.3-4.36 1.3-6.64v-0.1c0-2.28-0.4-4.54-1.3-6.65s-2.1-4.03-3.7-5.64c-1.6-1.62-3.6-2.91-5.7-3.78-2.1-0.88-4.3-1.33-6.6-1.33h-75.6c-3.4-0.01-6.8 0.99-9.6 2.89-2.9 1.9-5.1 4.6-6.5 7.77-0.8 2.1-1.3 4.36-1.3 6.64v0.1c0 2.28 0.4 4.54 1.3 6.65s2.1 4.03 3.7 5.64c1.6 1.62 3.6 2.9 5.7 3.78s4.3 1.33 6.6 1.33z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M116.5 340.60000000000036h153c2.3 0.01 4.5-0.42 6.7-1.29 2.1-0.86 4-2.14 5.6-3.75s2.9-3.52 3.8-5.62 1.3-4.36 1.3-6.64v-0.1c0-2.28-0.4-4.54-1.3-6.65s-2.1-4.03-3.7-5.64c-1.6-1.62-3.5-2.91-5.7-3.78-2.1-0.88-4.3-1.33-6.6-1.33h-153.1c-3.4-0.01-6.8 0.99-9.6 2.89-2.9 1.9-5.1 4.6-6.5 7.77-0.8 2.1-1.3 4.36-1.3 6.64v0.1c0 2.29 0.4 4.55 1.3 6.67 0.9 2.11 2.2 4.03 3.8 5.65s3.5 2.9 5.6 3.77c2.2 0.87 4.4 1.32 6.7 1.31",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "audio-tracks": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M57.4900000000016 223.5699999999997v75.87c-0.01 2.31 0.44 4.59 1.31 6.72 0.88 2.13 2.17 4.06 3.8 5.69 1.63 1.62 3.56 2.91 5.69 3.79s4.41 1.32 6.71 1.31c2.3 0.01 4.58-0.43 6.71-1.31s4.06-2.17 5.69-3.79c1.63-1.63 2.92-3.56 3.8-5.69 0.87-2.13 1.32-4.41 1.31-6.72v-75.87c0.01-2.3-0.44-4.58-1.31-6.71-0.88-2.13-2.17-4.06-3.8-5.69a17.3 17.3 0 0 0-5.69-3.79c-2.13-0.88-4.41-1.33-6.71-1.32-2.3-0.01-4.58 0.44-6.71 1.32-2.13 0.87-4.06 2.16-5.69 3.79a17.5 17.5 0 0 0-3.8 5.69c-0.87 2.13-1.32 4.41-1.31 6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M454.5100000000002 223.5699999999997v75.88c0.01 2.3-0.44 4.58-1.32 6.71-0.87 2.13-2.16 4.06-3.79 5.69a17.5 17.5 0 0 1-5.69 3.79c-2.13 0.88-4.41 1.32-6.71 1.31-2.3 0.01-4.58-0.43-6.71-1.31s-4.07-2.16-5.69-3.79a17.5 17.5 0 0 1-3.8-5.69c-0.87-2.13-1.32-4.41-1.31-6.71v-75.88c-0.01-2.3 0.44-4.58 1.31-6.71 0.88-2.13 2.17-4.06 3.8-5.69 1.62-1.63 3.56-2.92 5.69-3.79 2.13-0.88 4.41-1.32 6.71-1.31 2.3-0.01 4.58 0.43 6.71 1.31 2.13 0.87 4.06 2.16 5.69 3.79s2.92 3.56 3.79 5.69c0.88 2.13 1.33 4.41 1.32 6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M177.4900000000016 188.03999999999996v146.94c-0.01 2.3 0.44 4.58 1.31 6.71 0.88 2.13 2.17 4.06 3.8 5.69s3.56 2.92 5.69 3.79c2.13 0.88 4.41 1.33 6.71 1.32 2.3 0.01 4.58-0.44 6.71-1.32 2.13-0.87 4.06-2.16 5.69-3.79s2.92-3.56 3.8-5.69c0.87-2.13 1.32-4.41 1.31-6.71v-146.94c0.01-2.3-0.44-4.58-1.31-6.71-0.88-2.13-2.17-4.06-3.8-5.69a17.5 17.5 0 0 0-5.69-3.8c-2.13-0.87-4.41-1.32-6.71-1.31-2.3-0.01-4.58 0.44-6.71 1.31-2.13 0.88-4.06 2.17-5.69 3.8a17.5 17.5 0 0 0-3.8 5.69c-0.87 2.13-1.32 4.41-1.31 6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M333.5100000000002 188.03999999999996v146.94c0.01 2.3-0.44 4.58-1.31 6.71-0.88 2.13-2.17 4.06-3.8 5.69a17.3 17.3 0 0 1-5.69 3.79c-2.13 0.88-4.41 1.33-6.71 1.32-2.3 0.01-4.58-0.44-6.71-1.32-2.13-0.87-4.07-2.16-5.69-3.79a17.5 17.5 0 0 1-3.8-5.69c-0.87-2.13-1.32-4.41-1.31-6.71v-146.94c-0.01-2.3 0.44-4.58 1.31-6.71 0.88-2.13 2.17-4.06 3.8-5.69 1.62-1.63 3.56-2.92 5.69-3.8 2.13-0.87 4.41-1.32 6.71-1.31 2.3-0.01 4.58 0.44 6.71 1.31 2.13 0.88 4.06 2.17 5.69 3.8s2.92 3.56 3.8 5.69c0.87 2.13 1.32 4.41 1.31 6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M152.51000000000022 377.2600000000002v-242.52c0.01-2.3-0.44-4.58-1.31-6.71-0.88-2.13-2.17-4.07-3.8-5.69a17.5 17.5 0 0 0-5.69-3.8c-2.13-0.87-4.41-1.32-6.71-1.31-2.3-0.01-4.58 0.44-6.71 1.31-2.13 0.88-4.06 2.17-5.69 3.8a17.4 17.4 0 0 0-3.8 5.69c-0.87 2.13-1.32 4.41-1.31 6.71v242.52c-0.01 2.3 0.44 4.58 1.31 6.71 0.88 2.13 2.17 4.07 3.8 5.69 1.63 1.63 3.56 2.92 5.69 3.8 2.13 0.87 4.41 1.32 6.71 1.31 2.3 0.01 4.58-0.44 6.71-1.31 2.13-0.88 4.06-2.17 5.69-3.8 1.63-1.62 2.92-3.56 3.8-5.69 0.87-2.13 1.32-4.41 1.31-6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M358.4900000000016 377.2600000000002v-242.52c-0.01-2.3 0.44-4.58 1.31-6.71 0.88-2.13 2.17-4.06 3.8-5.69 1.62-1.63 3.56-2.92 5.69-3.8 2.13-0.87 4.41-1.32 6.71-1.31 2.3-0.01 4.58 0.44 6.71 1.31 2.13 0.88 4.06 2.17 5.69 3.8s2.92 3.56 3.79 5.69c0.88 2.13 1.33 4.41 1.32 6.71v242.52c0.01 2.3-0.44 4.59-1.32 6.71-0.87 2.13-2.16 4.07-3.79 5.69a17.5 17.5 0 0 1-5.69 3.8c-2.13 0.87-4.41 1.32-6.71 1.31-2.3 0.01-4.58-0.44-6.71-1.31-2.13-0.88-4.07-2.17-5.69-3.8a17.38 17.38 0 0 1-5.11-12.4",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M273.5100000000002 430.5600000000004v-349.12c0.01-2.3-0.44-4.58-1.31-6.71-0.88-2.13-2.17-4.07-3.8-5.69a17.5 17.5 0 0 0-5.69-3.8c-2.13-0.87-4.41-1.32-6.71-1.31-2.3-0.01-4.58 0.44-6.71 1.31-2.13 0.88-4.06 2.17-5.69 3.8a17.4 17.4 0 0 0-3.8 5.69c-0.87 2.13-1.32 4.41-1.31 6.71v349.12c-0.01 2.3 0.44 4.58 1.31 6.71 0.88 2.13 2.17 4.07 3.8 5.69 1.63 1.63 3.56 2.92 5.69 3.8 2.13 0.87 4.41 1.32 6.71 1.31 2.3 0.01 4.58-0.44 6.71-1.31 2.13-0.88 4.06-2.17 5.69-3.8 1.63-1.62 2.92-3.56 3.8-5.69 0.87-2.13 1.32-4.41 1.31-6.71",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    chapters: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 178.25c14.96-59.06 71.47-89.22 194.51-89.77 1.97-0.01 3.92 0.37 5.73 1.12 1.82 0.75 3.48 1.85 4.87 3.24s2.49 3.05 3.24 4.87c0.75 1.81 1.13 3.76 1.12 5.73v269.32a14.958 14.958 0 0 1-9.23 13.82c-1.82 0.75-3.77 1.14-5.73 1.14-119.7 0-165.94 24.14-194.51 59.85-28.4-35.53-74.81-59.85-194.5-59.85-9.24 0-14.97-7.53-14.97-16.76v-267.52c0-1.97 0.38-3.91 1.13-5.73 1.13-2.74 3.05-5.08 5.52-6.72 2.46-1.65 5.36-2.52 8.32-2.51 123.03 0.55 179.54 30.71 194.5 89.77",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34",
                                fill: "none"
                            }
                        }, {
                            d: "M256.3000000000002 165.89999999999964v282",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "34",
                                fill: "none"
                            }
                        }]
                    },
                    "skip-15-forward": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M428.7999999999993 249.60000000000036c-3.95 0.01-7.74 1.58-10.53 4.37a14.95 14.95 0 0 0-4.37 10.53c0 87.1-70.8 157.9-157.9 157.9s-157.9-70.8-157.9-157.9c0-86.8 70.4-157.4 157.1-157.9l-27.1 26.8a13.3 13.3 0 0 0-2.94 4.35 13.37 13.37 0 0 0 0 10.3c0.68 1.63 1.68 3.11 2.94 4.35 2.61 2.5 6.08 3.9 9.7 3.9s7.09-1.4 9.7-3.9l51.9-51.2c1.26-1.24 2.26-2.72 2.94-4.35a13.37 13.37 0 0 0 0-10.3c-0.68-1.63-1.68-3.11-2.94-4.35l-51.9-51.2c-2.61-2.5-6.08-3.9-9.7-3.9s-7.09 1.4-9.7 3.9a13.3 13.3 0 0 0-2.94 4.35 13.37 13.37 0 0 0 0 10.3c0.68 1.63 1.68 3.11 2.94 4.35l27.2 26.9c-103.1 0.4-186.9 84.4-186.9 187.6 0 103.5 84.2 187.6 187.6 187.6s187.7-84.2 187.7-187.7c-0.01-3.94-1.59-7.71-4.38-10.49-2.8-2.77-6.58-4.32-10.52-4.31",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M195.20000000000073 252v69.9h25.5v-120.8h-21l-38.9 31 12.3 15.4 13.9-11.2c3.07-2.61 6.01-5.38 8.8-8.3l-0.4 12.6z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M321.39999999999964 222.80000000000018v-21.6h-65.5l-4.5 61.6 10.2 5.5c2.82-0.82 5.7-1.45 8.6-1.9 3.2-0.58 6.45-0.88 9.7-0.9 16.1 0 24.2 6.1 24.2 18.3q0 19.2-23.4 19.2a73 73 0 0 1-31.6-7.9v22.1c8.3 4.4 19.1 6.5 32.6 6.5 15.5 0 27.4-3.6 35.7-10.9s12.5-17.7 12.5-31.2c0-11.4-3.5-20.4-10.4-26.9-6.9-6.6-16.2-9.8-27.9-9.8-4.2-0.08-8.39 0.32-12.5 1.2l-2.9 0.6 2.2-23.7h43z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "skip-15-back": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256.60000000000036 78.10000000000036l27-26.7c1.26-1.23 2.26-2.7 2.94-4.32a13.275 13.275 0 0 0 0-10.26c-0.68-1.62-1.68-3.09-2.94-4.32a13.76 13.76 0 0 0-19.2 0l-51.5 50.8c-1.26 1.23-2.26 2.7-2.94 4.32-0.68 1.63-1.03 3.37-1.03 5.13s0.35 3.5 1.03 5.13c0.68 1.62 1.68 3.09 2.94 4.32l51.5 50.8a13.76 13.76 0 0 0 19.2 0c1.26-1.23 2.26-2.7 2.94-4.32a13.275 13.275 0 0 0 0-10.26c-0.68-1.62-1.68-3.09-2.94-4.32l-26.9-26.6c86 0.4 155.9 70.5 155.9 156.6 0 86.4-70.3 156.7-156.7 156.7s-156.7-70.3-156.7-156.7c0-3.93-1.56-7.69-4.33-10.47a14.83 14.83 0 0 0-10.47-4.33c-3.93 0-7.69 1.56-10.47 4.33a14.83 14.83 0 0 0-4.33 10.47c0 102.7 83.5 186.2 186.2 186.2s186.2-83.5 186.2-186.2c0.2-102.3-83-185.6-185.4-186",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M187.5 236.30000000000018c1.6-1.3 4.6-4.1 8.8-8.3l-0.4 12.5-0.2 11.4v69.4h25.3v-119.9h-20.8l-38.6 30.7 12.2 15.2z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M280.2999999999993 302.3000000000002c-5.51-0.03-10.98-0.77-16.3-2.2a65.6 65.6 0 0 1-15.1-5.6v21.9c8.2 4.3 19 6.5 32.3 6.5q23.1 0 35.4-10.8c8.3-7.2 12.4-17.5 12.4-30.9 0-11.3-3.4-20.2-10.3-26.7s-16.1-9.8-27.7-9.8c-4.16-0.05-8.31 0.32-12.4 1.1l-2.9 0.6 2.2-23.5h42.8v-21.5h-65l-4.5 61.1 10.1 5.4c2.78-0.83 5.62-1.43 8.5-1.8 3.17-0.57 6.38-0.87 9.6-0.9 16 0 24 6 24 18.1 0.1 12.7-7.6 19-23.1 19",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    reset: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M114.39000000000033 169.4399999999996l18.89-21.97a171.2 171.2 0 0 1 56.63-39.34 171.25 171.25 0 0 1 67.55-13.81c94.79 0 171.69 76.9 171.69 171.69s-76.9 171.69-171.69 171.69c-35.51 0-70.14-11.01-99.14-31.5a171.84 171.84 0 0 1-62.77-82.95",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "34",
                                fill: "none"
                            }
                        }, {
                            d: "M57.159999999999854 124.21000000000004v98.88c0 1.88 0.37 3.74 1.09 5.47 0.72 1.74 1.77 3.32 3.1 4.64 1.33 1.33 2.91 2.39 4.65 3.1 1.73 0.72 3.59 1.09 5.47 1.09h98.88c2.83 0 5.6-0.83 7.95-2.4 2.36-1.58 4.19-3.81 5.28-6.43 1.08-2.61 1.36-5.49 0.81-8.26-0.55-2.78-1.92-5.33-3.92-7.33l-98.89-98.88c-2-2-4.55-3.37-7.33-3.92a14.36 14.36 0 0 0-8.27 0.81 14.26 14.26 0 0 0-6.42 5.27 14.3 14.3 0 0 0-2.4 7.96",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    audio: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M153.5 190.20000000000027h-72.6c-1.1 0-2.2 0.21-3.2 0.63-1 0.43-1.9 1.03-2.7 1.79-0.8 0.77-1.4 1.69-1.8 2.7s-0.6 2.09-0.6 3.18v116.8c0 1.09 0.2 2.17 0.6 3.18s1 1.93 1.8 2.7c0.8 0.76 1.7 1.36 2.7 1.79 1 0.42 2.1 0.63 3.2 0.63h72.6c3.9-0.02 7.6 1.32 10.6 3.8l95.4 78.1c1.8 1.3 4 1.83 6.2 1.5 2.2-0.34 4.2-1.52 5.5-3.3 1.1-1.44 1.6-3.2 1.6-5v-283.9c0-1.09-0.2-2.17-0.6-3.18s-1-1.93-1.8-2.7c-0.8-0.76-1.7-1.36-2.7-1.79-1.3-0.55-2.8-0.74-4.2-0.57s-2.7 0.7-3.9 1.54l-95.4 78.1c-3 2.57-6.8 3.99-10.7 4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M356.10000000000036 323.7000000000003c10.7-20.63 16.4-43.47 16.7-66.7-0.1-23.26-5.8-46.15-16.7-66.7",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }, {
                            d: "M406.10000000000036 373.7000000000003c22.2-34.88 33.8-75.46 33.4-116.8 0.7-41.39-10.9-82.05-33.4-116.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "31.897",
                                fill: "none"
                            }
                        }]
                    },
                    speed: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M312.90000000000146 231.2100000000005l-38.8 61.69c-1.6 2.2-3.6 4.14-5.8 5.75-2.6 1.9-5.6 3.25-8.8 3.95-3.2 0.72-6.4 0.82-9.6 0.29-6.4-1.08-12.2-4.67-16-9.99-1.9-2.63-3.2-5.61-3.9-8.77s-0.8-6.42-0.3-9.61 1.7-6.25 3.4-8.99 4-5.11 6.6-7l61.7-38.81a8.55 8.55 0 0 1 4.8-1.48c1.7 0 3.4 0.52 4.8 1.48 1.8 1.28 2.9 3.2 3.3 5.35 0.2 1.07 0.2 2.16-0.1 3.22-0.2 1.05-0.7 2.05-1.3 2.92",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M255.60000000000036 93.95000000000027c-101.1 0-183.1 81.88-183.1 182.95 0 44.76 16.3 87.99 46 121.51 0.9 0.98 1.7 1.97 2.6 2.87 3.7 4.02 8.9 6.39 14.4 6.61 5.4 0.21 10.8-1.75 14.8-5.46l1.2-1.23c25.4-27.63 60.8-44.03 98.3-45.6s74.1 11.82 101.7 37.23q4.35 4.065 8.4 8.37c3.7 4.02 8.8 6.41 14.3 6.66 5.4 0.25 10.8-1.68 14.8-5.35l1.2-1.23 2.7-2.87c67-75.64 60-191.41-15.7-258.44-33.5-29.7-76.8-46.07-121.6-46.02",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M249.5 151.7100000000005v15.67",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M390.5 276.99000000000024h-31.4",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M155.5 276.99000000000024h-31.3",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M181.60000000000036 203.07000000000016l-18.5-18.46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M329.60000000000036 203.07000000000016l18.5-18.46",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-miterlimit": "10",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    episodes: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M499.60000000000036 161.79999999999973v-65.2c0.2-5.92-1.5-11.74-4.7-16.7-2.7-4.5-6.6-8.19-11.2-10.69-4.6-2.49-9.8-3.71-15.1-3.51q-53.7 0.15-107.4 0h-189.8q-3 0.075-6 0.6c-4.7 0.82-9.1 2.8-12.8 5.77-3.5 2.95-6.3 6.6-8.3 10.72-2 4.13-3 8.63-3.1 13.21v31.2h-31q-3 0.15-6 0.6c-4.7 0.82-9.1 2.8-12.8 5.77-5.1 4.08-8.8 9.76-10.3 16.13-0.7 2.5-1.1 5.1-1.1 7.7v30.9h-32.9q-3 0-6 0.6c-5.6 1.02-10.7 3.64-14.8 7.53-4.1 3.88-7 8.88-8.3 14.37-0.7 2.54-1.1 5.16-1.2 7.8v184.3c-0.1 5.55 1.4 11.02 4.2 15.82 2.8 4.79 6.8 8.75 11.7 11.43 4.6 2.46 9.8 3.65 15 3.45h0.1c36-0.1 72-0.1 108.1 0h143.3c15.2 0 30.4 0 45.6 0.1q3 0 6-0.6c4.7-0.82 9.1-2.8 12.8-5.77 3.7-2.96 6.7-6.78 8.6-11.13 0.7-1.63 1.2-3.3 1.7-5l0.1-0.4c0.6-2.43 0.9-4.91 1-7.4v-31c11 0 21.9 0 32.9 0.1q3 0 6-0.6c4.7-0.82 9.1-2.8 12.8-5.77 3.7-2.96 6.7-6.78 8.6-11.13 0.7-1.63 1.2-3.3 1.7-5l0.1-0.4c0.6-2.43 0.9-4.91 1-7.4v-31.3h31q3 0 6-0.6c4.7-0.82 9.1-2.8 12.8-5.77 3.7-2.96 6.7-6.78 8.6-11.13 0.7-1.63 1.2-3.3 1.7-5l0.1-0.4c0.6-2.43 0.9-4.91 1-7.4v-31.3z m-162.1 124.5V391.4000000000001c0.2 3.6 0.4 8-5 8.6h-270.4c-1 0.13-2 0.07-3-0.19-0.9-0.29-1.8-0.73-2.6-1.31-0.6-0.77-1.1-1.67-1.3-2.64-0.3-0.95-0.4-1.97-0.2-2.96l0.2-17.9v-144.2c0-3.7-0.4-8.4 5-9.1h270.5c1-0.15 2-0.09 3 0.17 0.9 0.26 1.8 0.71 2.6 1.33 0.6 0.77 1.1 1.67 1.3 2.64 0.3 0.95 0.4 1.97 0.2 2.96l-0.2 17.9v14z m63-61.2v105c0.1 3.6 0.3 8-5 8.6h-20.1v-119.6c0.1-8.02-2.9-15.76-8.5-21.53s-13.2-9.11-21.2-9.27h-1.2c-35.8 0.1-71.6 0.1-107.3 0h-118.9v-18.4c-0.1-4-0.4-8.4 5-9.1h270.4c1-0.15 2-0.09 3 0.17 0.9 0.26 1.8 0.71 2.6 1.33 0.6 0.77 1.1 1.67 1.3 2.64 0.3 0.95 0.4 1.97 0.2 2.96l-0.2 17.9v14z m61.2-61.5v105.1c0.1 3.6 0.4 8-5 8.6h-18.2v-119.4c0.1-8.03-2.9-15.77-8.5-21.56s-13.2-9.14-21.2-9.34h-1.3c-35.8 0.1-71.6 0.1-107.3 0h-120.8v-18.8c0-3.8-0.4-8.4 5-9.1h270.5c1-0.15 2-0.09 3 0.17 0.9 0.26 1.8 0.71 2.6 1.33 0.6 0.77 1.1 1.67 1.3 2.64 0.3 0.95 0.4 1.97 0.2 2.96l-0.2 17.9v14z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    cast: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M91.60000000000036 104c-26.3 0-43.5 24-43.5 48.1v51.5c5.3-0.4 10.6-0.7 16-0.7s10.7 0.2 16 0.7V152.0999999999999c0-11.3 7.4-16.1 11.5-16.1h328.9c4.2 0 11.5 4.8 11.5 16.1v207.7c0 11.3-7.4 16.1-11.5 16.1h-168.1c0.4 5.3 0.7 10.6 0.7 16s-0.2 10.7-0.7 16h168.1c26.3 0 43.5-24 43.5-48.1V152.0999999999999c0-24.2-17.3-48.1-43.5-48.1z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M214.20000000000073 408c0.6-5.31 0.8-10.66 0.8-16 0-19.83-3.9-39.47-11.5-57.79s-18.7-34.97-32.72-48.99a150.989 150.989 0 0 0-106.78-44.22c-5.4 0-10.7 0.3-16 0.8v32.2c5.3-0.72 10.65-1.09 16-1.1 31.56 0 61.82 12.54 84.14 34.86a118.99 118.99 0 0 1 34.86 84.14c0 5.35-0.4 10.7-1.1 16z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M158.70000000000073 408c0.89-5.29 1.32-10.64 1.3-16a96.04 96.04 0 0 0-28.13-67.87c-18-18-42.41-28.12-67.87-28.13-5.36-0.03-10.71 0.41-16 1.3v32.7c5.23-1.33 10.6-2 16-2a63.95 63.95 0 0 1 45.28 18.72 63.95 63.95 0 0 1 18.72 45.28c0 5.4-0.67 10.77-2 16z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M101.80000000000109 408a40.5 40.5 0 0 0 3.2-16 41.03 41.03 0 0 0-12.02-28.98 41.03 41.03 0 0 0-28.98-12.02c-5.5-0.03-10.94 1.06-16 3.2v7.8c0.01 12.2 4.85 23.89 13.48 32.52a46.07 46.07 0 0 0 32.52 13.48z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "cast-connected": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M91.60000000000036 104c-26.3 0-43.5 24-43.5 48.1v51.5c5.3-0.4 10.6-0.7 16-0.7s10.7 0.2 16 0.7V152.0999999999999c0-11.3 7.4-16.1 11.5-16.1h328.9c4.2 0 11.5 4.8 11.5 16.1v207.7c0 11.3-7.4 16.1-11.5 16.1h-168.1c0.4 5.3 0.7 10.6 0.7 16s-0.2 10.7-0.7 16h168.1c26.3 0 43.5-24 43.5-48.1V152.0999999999999c0-24.2-17.3-48.1-43.5-48.1z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M214.20000000000073 408c0.6-5.31 0.8-10.66 0.8-16 0-19.83-3.9-39.47-11.5-57.79s-18.7-34.97-32.72-48.99a150.989 150.989 0 0 0-106.78-44.22c-5.4 0-10.7 0.3-16 0.8v32.2c5.3-0.72 10.65-1.09 16-1.1 31.56 0 61.82 12.54 84.14 34.86a118.99 118.99 0 0 1 34.86 84.14c0 5.35-0.4 10.7-1.1 16z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M158.70000000000073 408c0.89-5.29 1.32-10.64 1.3-16a96.04 96.04 0 0 0-28.13-67.87c-18-18-42.41-28.12-67.87-28.13-5.36-0.03-10.71 0.41-16 1.3v32.7c5.23-1.33 10.6-2 16-2a63.95 63.95 0 0 1 45.28 18.72 63.95 63.95 0 0 1 18.72 45.28c0 5.4-0.67 10.77-2 16z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M101.80000000000109 408a40.5 40.5 0 0 0 3.2-16 41.03 41.03 0 0 0-12.02-28.98 41.03 41.03 0 0 0-28.98-12.02c-5.5-0.03-10.94 1.06-16 3.2v7.8c0.01 12.2 4.85 23.89 13.48 32.52a46.07 46.07 0 0 0 32.52 13.48z",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M133 169c-1.71 0-3.4 0.33-4.98 0.98a12.9 12.9 0 0 0-4.22 2.82 12.9 12.9 0 0 0-2.82 4.22c-0.65 1.58-0.98 3.27-0.98 4.98v30.2c31.73 7.31 60.7 23.49 83.6 46.65s38.8 52.34 45.7 84.15h128.7c1.7 0 3.4-0.33 5-0.98s3-1.61 4.2-2.82c1.2-1.2 2.2-2.64 2.8-4.22 0.7-1.58 1-3.27 1-4.98v-148c0-1.71-0.3-3.4-1-4.98-0.6-1.58-1.6-3.01-2.8-4.22a12.5 12.5 0 0 0-4.2-2.82c-1.6-0.65-3.3-0.98-5-0.98z",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    add: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 112v288",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "50",
                                fill: "none"
                            }
                        }, {
                            d: "M400 256h-288",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "50",
                                fill: "none"
                            }
                        }]
                    },
                    remove: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M400 256h-288",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "50",
                                fill: "none"
                            }
                        }]
                    },
                    eye: {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M256 320c14.8 0 29.2-5.13 40.6-14.52 11.5-9.4 19.3-22.47 22.2-36.99 2.9-14.53 0.7-29.61-6.3-42.67s-18.3-23.3-32-28.97a64.05 64.05 0 0 0-43.1-2.12c-14.1 4.29-26.4 13.37-34.6 25.69-8.2 12.31-11.9 27.1-10.5 41.84 1.5 14.74 8 28.52 18.5 38.99 5.9 5.95 12.9 10.66 20.7 13.88s16.1 4.87 24.5 4.87",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M490.8000000000011 238.5999999999999c-26.5-40.9-60.8-75.7-99.3-100.5-42.6-27.5-89.6-42.1-135.9-42.1-42.5 0-84.3 12.1-124.3 36.1-40.7 24.4-77.6 60.1-109.7 106.1a32.06 32.06 0 0 0-5.7 17.71c-0.1 6.34 1.7 12.56 5.1 17.89 26.4 41.3 60.4 76.1 98.3 100.7 42.7 27.6 88.5 41.6 136.3 41.6 46.7 0 93.8-14.4 136.2-41.7 38.5-24.8 72.7-59.7 99.1-100.9 3.3-5.23 5-11.29 5-17.46 0-6.18-1.8-12.23-5.1-17.44m-234.8 113.4c-14.2 0.02-28.2-3.12-41.1-9.18-12.8-6.07-24.2-14.9-33.2-25.88-9-10.97-15.5-23.81-18.9-37.59-3.5-13.77-3.8-28.15-1.1-42.08 2.8-13.93 8.6-27.08 17.1-38.49 8.4-11.4 19.3-20.79 31.9-27.49a95.6 95.6 0 0 1 40.5-11.21c14.2-0.69 28.4 1.77 41.5 7.22a97.3 97.3 0 0 1 43.1 35.4c9.6 14.46 15.2 31.25 16 48.6 0.8 17.36-3 34.61-11.2 49.93a96.24 96.24 0 0 1-35.3 37.08 95.94 95.94 0 0 1-49.3 13.69",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "eye-off": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M432 448c-2.1 0.01-4.2-0.4-6.1-1.2-2-0.79-3.7-1.98-5.2-3.5l-352-352c-2.9-3.03-4.4-7.04-4.4-11.2 0-2.07 0.4-4.12 1.2-6.03s2-3.63 3.5-5.07c3-2.91 6.9-4.59 11.1-4.7 2.1-0.05 4.1 0.32 6 1.07 2 0.76 3.7 1.89 5.2 3.33l352 352c2.2 2.23 3.8 5.07 4.4 8.17s0.3 6.31-0.9 9.23-3.3 5.42-5.9 7.2c-2.6 1.8-5.7 2.74-8.9 2.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M248 315.9000000000001l-51.8-51.8c-0.3-0.29-0.7-0.5-1.1-0.6-0.4-0.08-0.8-0.01-1.2 0.2-0.4 0.19-0.7 0.51-0.9 0.9-0.2 0.36-0.3 0.79-0.2 1.2 2.1 13.45 8.4 25.88 18 35.5s22.1 15.92 35.5 18c0.4 0.08 0.8 0.01 1.2-0.2 0.4-0.19 0.7-0.51 0.9-0.9 0.2-0.38 0.2-0.79 0.2-1.2-0.1-0.41-0.3-0.79-0.6-1.1",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M264 196.19999999999982l51.9 51.9c0.3 0.29 0.7 0.5 1.1 0.6 0.4 0.08 0.8 0.01 1.2-0.2 0.4-0.19 0.7-0.51 0.9-0.9 0.2-0.36 0.3-0.79 0.2-1.2a64.3 64.3 0 0 0-18-35.5c-9.6-9.62-22.1-15.93-35.5-18-0.4-0.08-0.8-0.01-1.2 0.2-0.4 0.19-0.7 0.51-0.9 0.9-0.2 0.36-0.3 0.79-0.2 1.2 0 0.19 0.1 0.38 0.1 0.55 0.1 0.16 0.3 0.31 0.4 0.45",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M491 273.4000000000001c3.3-5.19 5.1-11.24 5-17.4 0-6.17-1.8-12.2-5.1-17.4-26.5-40.9-60.8-75.7-99.3-100.5-42.6-27.5-89.6-42.1-136-42.1-24.4 0.01-48.7 3.99-71.8 11.8-0.6 0.23-1.2 0.61-1.7 1.1-0.5 0.48-0.8 1.12-0.9 1.8-0.2 0.66-0.2 1.34 0 2 0.1 0.66 0.5 1.25 1 1.7l47.2 47.2c0.5 0.52 1.1 0.87 1.8 1 0.7 0.2 1.3 0.2 2 0 16-3.92 32.8-3.64 48.6 0.8 15.9 4.44 30.4 12.9 42 24.56 11.7 11.65 20.2 26.12 24.6 42 4.4 15.87 4.7 32.63 0.8 48.64-0.2 0.65-0.2 1.35 0 2 0.2 0.67 0.5 1.29 1 1.8l67.9 68c0.7 0.7 1.7 1.13 2.7 1.2 1 0.06 2-0.26 2.8-0.9 26.3-22.18 49-48.24 67.4-77.3",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M256 352c-14.5 0.03-28.9-3.25-42-9.58-13-6.33-24.5-15.55-33.5-26.96-9-11.42-15.3-24.72-18.4-38.92s-2.9-28.92 0.5-43.04c0.2-0.65 0.2-1.35 0-2-0.2-0.68-0.5-1.3-1-1.8l-66.8-66.9c-0.7-0.69-1.7-1.12-2.7-1.2-1-0.06-2 0.26-2.8 0.9-24.4 20.8-47 46.03-67.7 75.7-3.6 5.2-5.6 11.36-5.7 17.7-0.1 6.33 1.7 12.55 5.1 17.9 26.4 41.3 60.4 76.1 98.3 100.7 42.7 27.6 88.5 41.6 136.3 41.6 24.7-0.09 49.1-4 72.6-11.6 0.7-0.21 1.2-0.59 1.7-1.1s0.8-1.13 1-1.8c0.2-0.65 0.2-1.35 0-2-0.2-0.68-0.5-1.3-1-1.8l-47.5-47.5c-0.5-0.49-1.1-0.84-1.8-1-0.7-0.2-1.3-0.2-2 0-7.4 1.8-15 2.7-22.6 2.7",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    },
                    "local-import": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M83.60000000000036 202.5v-64.6a35.8 35.8 0 0 1 10.49-25.31 35.82 35.82 0 0 1 25.31-10.49h68.2a36.55 36.55 0 0 1 19.9 6l25 16.7a35.25 35.25 0 0 0 19.9 6h139.9a35.82 35.82 0 0 1 35.8 35.8v35.8",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }, {
                            d: "M456.89999999999964 233.4l-14.6 148.4a35.85 35.85 0 0 1-10.49 25.309 35.82 35.82 0 0 1-25.31 10.491h-301a35.82 35.82 0 0 1-35.8-35.8l-14.6-148.4a28.755 28.755 0 0 1 26.3-30.9c0.8 0 1.5-0.2 2.3-0.2h344.6c7.61 0.03 14.9 3.08 20.26 8.48a28.74 28.74 0 0 1 8.34 20.32z",
                            style: {
                                stroke: "currentcolor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "32",
                                fill: "none"
                            }
                        }]
                    },
                    "drag-handle": {
                        viewBox: "0 0 512 512",
                        paths: [{
                            d: "M170 138.4000000000001c28.72 0 52-23.28 52-52s-23.28-52-52-52-52 23.28-52 52 23.28 52 52 52",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M170 311.4000000000001c28.72 0 52-23.28 52-52s-23.28-52-52-52-52 23.28-52 52 23.28 52 52 52",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M170 490.4000000000001c28.72 0 52-23.73 52-53s-23.28-53-52-53-52 23.73-52 53 23.28 53 52 53",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M343 138.4000000000001c28.72 0 52-23.28 52-52s-23.28-52-52-52-52 23.28-52 52 23.28 52 52 52",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M343 311.4000000000001c28.72 0 52-23.28 52-52s-23.28-52-52-52-52 23.28-52 52 23.28 52 52 52",
                            style: {
                                fill: "currentcolor"
                            }
                        }, {
                            d: "M343 490.4000000000001c28.72 0 52-23.73 52-53s-23.28-53-52-53-52 23.73-52 53 23.28 53 52 53",
                            style: {
                                fill: "currentcolor"
                            }
                        }]
                    }
                },
                s = function(e) {
                    var t = function() {
                        var t;
                        return null !== (t = l[e.name]) && void 0 !== t ? t : null
                    };
                    return (0, o.a0)(o.wv, {
                        get when() {
                            return t()
                        },
                        get children() {
                            var n = a();
                            return (0, r.Yr)(n, (0, o.a0)(o.a, {
                                get each() {
                                    var e;
                                    return null === (e = t()) || void 0 === e ? void 0 : e.paths
                                },
                                children: function(e) {
                                    return t = i(), (0, o.gb)((function(n) {
                                        var o = e.d,
                                            a = e.style;
                                        return o !== n.e && (0, r.Bq)(t, "d", n.e = o), n.t = (0, r.iF)(t, a, n.t), n
                                    }), {
                                        e: void 0,
                                        t: void 0
                                    }), t;
                                    var t
                                }
                            })), (0, o.gb)((function(o) {
                                var a, i = e.class,
                                    l = null === (a = t()) || void 0 === a ? void 0 : a.viewBox;
                                return i !== o.e && (0, r.Bq)(n, "class", o.e = i), l !== o.t && (0, r.Bq)(n, "viewBox", o.t = l), o
                            }), {
                                e: void 0,
                                t: void 0
                            }), n
                        }
                    })
                }
        },
        5994: (e, t, n) => {
            "use strict";
            n.d(t, {
                tv: () => V,
                gK: () => U,
                Pj: () => H
            });
            var r = n(6886),
                o = (n(9144), n(5658), n(9784), n(7961), n(3238), n(5073), n(3350)),
                a = n(6706),
                i = n(4922);
            const l = ({
                    model: e,
                    modelAction: t,
                    defaultState: n,
                    parseState: a,
                    preload: l
                }) => {
                    const {
                        transport: s
                    } = (0, o.z)(), c = (0, i.SR)(0), [u, d] = (0, r.n5)(null != l && l), [h, f] = (0, r.n5)(n);
                    return {
                        model: e,
                        loaded: u,
                        state: h,
                        update: e => {
                            c((() => {
                                if (u() && e) {
                                    const t = a ? a(e) : e;
                                    f((e => ({ ...e,
                                        ...t
                                    })))
                                }
                            }))
                        },
                        load: async n => {
                            d(!0), await s.dispatch({
                                action: "Load",
                                args: {
                                    model: t,
                                    args: n
                                }
                            }, e)
                        },
                        unload: async () => {
                            d(!1), await s.dispatch({
                                action: "Unload"
                            }, e), f((() => n))
                        },
                        dispatchAction: (n, r) => t ? s.dispatch({
                            action: t,
                            args: {
                                action: n,
                                args: r
                            }
                        }, e) : Promise.resolve()
                    }
                },
                s = e => e && "string" == typeof e.type && e.content ? {
                    ready: "Ready" === e.type ? e.content : null,
                    error: "Err" === e.type ? "object" == typeof e.content ? "string" == typeof e.content.type && "object" == typeof e.content.content ? e.content.content.message : e.content.type : e.content : null
                } : {
                    ready: null,
                    error: null
                },
                c = {
                    code: {
                        ready: null,
                        error: null
                    },
                    data: {
                        ready: null,
                        error: null
                    }
                },
                u = e => ({
                    code: s(null == e ? void 0 : e.code),
                    data: s(null == e ? void 0 : e.data)
                }),
                d = () => {
                    const e = l({
                            model: "auth_link",
                            modelAction: "Link",
                            defaultState: c,
                            parseState: u
                        }),
                        {
                            code: t,
                            data: n
                        } = (0, a.J)((() => e.state()));
                    return { ...e,
                        readData: () => e.dispatchAction("ReadData"),
                        info: () => t().ready,
                        authKey: () => {
                            var e, t;
                            return null !== (e = null === (t = n().ready) || void 0 === t ? void 0 : t.authKey) && void 0 !== e ? e : null
                        }
                    }
                },
                h = {
                    catalogs: []
                },
                f = e => ({
                    catalogs: e.catalogs.map((e => ({ ...e,
                        content: s(e.content)
                    })))
                }),
                v = () => {
                    const e = l({
                            model: "board",
                            modelAction: "CatalogsWithExtra",
                            defaultState: h,
                            parseState: f
                        }),
                        t = (0, r.To)((() => e.state().catalogs));
                    return { ...e,
                        catalogs: t,
                        load: () => e.load({
                            type: null,
                            extra: []
                        }),
                        loadCatalogs: t => e.dispatchAction("LoadRange", {
                            start: Math.max(0, t - 2),
                            end: t + 2
                        })
                    }
                },
                p = {
                    items: []
                },
                m = () => {
                    const e = l({
                        model: "continue_watching_preview",
                        defaultState: p,
                        preload: !0
                    });
                    return { ...e,
                        items: () => e.state().items
                    }
                },
                g = {
                    auth: null,
                    settings: {},
                    searchHistory: [],
                    newVideos: {}
                },
                y = e => ({ ...e.profile,
                    searchHistory: e.searchHistory,
                    newVideos: e.notifications.items
                }),
                b = () => {
                    const e = l({
                            model: "ctx",
                            modelAction: "Ctx",
                            defaultState: g,
                            parseState: y,
                            preload: !0
                        }),
                        {
                            auth: t,
                            settings: n,
                            searchHistory: o
                        } = (0, a.J)(e.state),
                        i = (0, r.To)((() => {
                            var e;
                            return Boolean(null === (e = t()) || void 0 === e ? void 0 : e.key)
                        })),
                        s = (0, r.To)((() => {
                            var e, n;
                            return null !== (e = null === (n = t()) || void 0 === n ? void 0 : n.user) && void 0 !== e ? e : null
                        }));
                    return { ...e,
                        isAuthenticated: i,
                        user: s,
                        settings: n,
                        searchHistory: o,
                        authenticate: t => e.dispatchAction("Authenticate", {
                            type: "LoginWithToken",
                            token: t
                        }),
                        logout: () => e.dispatchAction("Logout"),
                        syncUser: () => e.dispatchAction("PullUserFromAPI"),
                        syncAddons: () => e.dispatchAction("PullAddonsFromAPI"),
                        syncLibrary: () => e.dispatchAction("SyncLibraryWithAPI"),
                        syncNotifications: () => e.dispatchAction("PullNotifications"),
                        addToLibrary: t => e.dispatchAction("AddToLibrary", t),
                        removeFromLibrary: t => e.dispatchAction("RemoveFromLibrary", t.id),
                        rewindLibraryItem: t => e.dispatchAction("RewindLibraryItem", t.id),
                        updateSettings: t => e.dispatchAction("UpdateSettings", { ...n(),
                            ...t
                        }),
                        clearSearchHistory: () => e.dispatchAction("ClearSearchHistory")
                    }
                },
                w = {
                    catalog: null,
                    selectable: {
                        types: [],
                        catalogs: [],
                        extra: []
                    }
                },
                k = e => ({ ...e,
                    catalog: { ...e.catalog,
                        content: s(e.catalog ? e.catalog.content : {})
                    }
                }),
                x = () => {
                    const e = l({
                            model: "discover",
                            modelAction: "CatalogWithFilters",
                            defaultState: w,
                            parseState: k
                        }),
                        {
                            catalog: t,
                            selectable: n
                        } = (0, a.J)((() => e.state()));
                    return { ...e,
                        catalog: t,
                        selectable: n,
                        loadCatalog: (t, n, r, o) => e.load({
                            request: {
                                base: t,
                                path: {
                                    resource: "catalog",
                                    type: n,
                                    id: r,
                                    extra: o
                                }
                            }
                        }),
                        loadNextPage: () => e.dispatchAction("LoadNextPage")
                    }
                },
                S = {
                    catalog: [],
                    selected: null,
                    selectable: {
                        types: [],
                        sorts: []
                    }
                },
                A = () => {
                    const e = l({
                            model: "library",
                            modelAction: "LibraryWithFilters",
                            defaultState: S
                        }),
                        {
                            catalog: t,
                            selectable: n
                        } = (0, a.J)((() => e.state()));
                    return { ...e,
                        catalog: t,
                        selectable: n,
                        load: (t, n) => e.load({
                            request: {
                                type: t,
                                sort: n
                            }
                        }),
                        loading: () => !e.state().selected,
                        loadNextPage: () => e.dispatchAction("LoadNextPage")
                    }
                },
                T = {
                    selected: null,
                    metaItem: null,
                    addonStreams: []
                },
                M = e => {
                    var t;
                    return { ...e,
                        metaItem: s(null == e || null === (t = e.metaItem) || void 0 === t ? void 0 : t.content),
                        addonStreams: e.streams.map((e => ({ ...e,
                            content: s(e.content)
                        })))
                    }
                },
                B = () => {
                    const e = l({
                            model: "meta_details",
                            modelAction: "MetaDetails",
                            defaultState: T,
                            parseState: M
                        }),
                        {
                            metaItem: t
                        } = (0, a.J)(e.state);
                    return { ...e,
                        loading: () => {
                            var e, n;
                            return !(null !== (e = t()) && void 0 !== e && e.ready || null !== (n = t()) && void 0 !== n && n.error)
                        },
                        error: () => {
                            var e, n;
                            return null !== (e = null === (n = t()) || void 0 === n ? void 0 : n.error) && void 0 !== e ? e : null
                        },
                        metadata: () => {
                            var e, n;
                            return null !== (e = null === (n = t()) || void 0 === n ? void 0 : n.ready) && void 0 !== e ? e : null
                        },
                        load: ({
                            type: t,
                            metaId: n,
                            videoId: r,
                            guessStream: o
                        }) => {
                            t && n && e.load({
                                metaPath: {
                                    resource: "meta",
                                    id: n,
                                    type: t,
                                    extra: []
                                },
                                streamPath: r ? {
                                    resource: "stream",
                                    type: t,
                                    id: r,
                                    extra: []
                                } : null,
                                guessStream: o
                            })
                        },
                        setWatched: t => {
                            e.dispatchAction("MarkAsWatched", t)
                        },
                        toggleVideoWatched: ({
                            id: t,
                            released: n,
                            watched: r
                        }) => {
                            e.dispatchAction("MarkVideoAsWatched", [{
                                id: t,
                                released: n
                            }, !r])
                        }
                    }
                };
            n(4430), n(8233), n(9296);
            const E = ({
                    name: e,
                    defaultState: t
                }) => {
                    const n = (0, i.SR)(0),
                        [o, a] = (0, r.n5)(t),
                        l = e => {
                            a((t => ({ ...t,
                                ...e
                            })))
                        };
                    return (0, i.k9)(o, (t => {
                        n((() => {
                            try {
                                localStorage.setItem(e, JSON.stringify(t))
                            } catch (t) {
                                console.error(`Failed to save '${e}' state:`, t)
                            }
                        }))
                    })), (0, r.Rc)((() => {
                        const n = localStorage.getItem(e);
                        if (n) try {
                            const e = JSON.parse(n),
                                r = Object.fromEntries(Object.keys(t).filter((t => Object.keys(e).includes(t))).map((t => [
                                    [t], e[t]
                                ])));
                            l(r)
                        } catch (t) {
                            console.error(`Failed to initialize '${e}' store state:`, t)
                        }
                    })), {
                        state: o,
                        update: l
                    }
                },
                j = {},
                C = () => {
                    const e = E({
                        name: "routes",
                        defaultState: j
                    });
                    return { ...e,
                        getCache: t => e.state()[t],
                        setCache: (t, n) => {
                            e.update({
                                [t]: n
                            })
                        }
                    }
                },
                I = {
                    libraryItem: null,
                    metaItem: null,
                    nextVideo: null,
                    selected: null,
                    seriesInfo: null,
                    streamState: null,
                    subtitles: [],
                    title: null
                },
                L = e => ({ ...e,
                    metaItem: s(e.metaItem)
                }),
                P = () => {
                    const {
                        transport: e
                    } = (0, o.z)(), t = l({
                        model: "player",
                        modelAction: "Player",
                        defaultState: I,
                        parseState: L
                    });
                    return { ...t,
                        load: async ({
                            stream: n,
                            streamTransportUrl: r,
                            metaTransportUrl: o,
                            type: a,
                            id: i,
                            videoId: l
                        }) => {
                            const s = await e.decodeStream(n);
                            if (null !== s) return t.load({
                                stream: s,
                                streamRequest: r && a && l ? {
                                    base: r,
                                    path: {
                                        resource: "stream",
                                        type: a,
                                        id: l,
                                        extra: []
                                    }
                                } : null,
                                metaRequest: o && a && i ? {
                                    base: o,
                                    path: {
                                        resource: "meta",
                                        type: a,
                                        id: i,
                                        extra: []
                                    }
                                } : null,
                                subtitlesPath: a && l ? {
                                    resource: "subtitles",
                                    type: a,
                                    id: l,
                                    extra: []
                                } : null
                            })
                        },
                        ended: () => t.dispatchAction("Ended"),
                        updateVideoParams: e => t.dispatchAction("VideoParamsChanged", {
                            videoParams: e
                        }),
                        updateTime: (e, n, r) => t.dispatchAction("TimeChanged", {
                            time: e,
                            duration: n,
                            device: r
                        }),
                        updateSeek: (e, n, r) => t.dispatchAction("Seek", {
                            time: e,
                            duration: n,
                            device: r
                        }),
                        updatePaused: e => t.dispatchAction("PausedChanged", {
                            paused: e
                        }),
                        updateStream: e => t.dispatchAction("StreamStateChanged", {
                            state: { ...t.state().streamState,
                                ...e
                            }
                        })
                    }
                },
                z = {
                    catalogs: []
                },
                O = e => ({
                    catalogs: e.catalogs.map((e => ({ ...e,
                        content: s(e.content)
                    })))
                }),
                R = () => {
                    const e = l({
                            model: "search",
                            modelAction: "CatalogsWithExtra",
                            defaultState: z,
                            parseState: O
                        }),
                        t = (0, i.SR)(500);
                    return { ...e,
                        load: t => e.load({
                            extra: [
                                ["search", t]
                            ]
                        }),
                        loadCatalogs: n => new Promise((r => {
                            t((() => r(e.dispatchAction("LoadRange", {
                                start: Math.max(0, n - 1),
                                end: n + 1
                            }))))
                        }))
                    }
                },
                N = {
                    baseUrl: null,
                    transportUrl: null,
                    settings: null
                },
                q = e => ({
                    baseUrl: e.baseUrl,
                    transportUrl: e.selected ? e.selected.transportUrl : null,
                    settings: s(e.settings)
                }),
                F = () => {
                    const e = l({
                            model: "streaming_server",
                            modelAction: "StreamingServer",
                            defaultState: N,
                            parseState: q,
                            preload: !0
                        }),
                        {
                            baseUrl: t,
                            settings: n
                        } = (0, a.J)(e.state);
                    return { ...e,
                        version: () => {
                            var e, t;
                            return null !== (e = null === (t = n()) || void 0 === t || null === (t = t.ready) || void 0 === t ? void 0 : t.serverVersion) && void 0 !== e ? e : null
                        },
                        online: () => Boolean(t()),
                        reload: () => e.dispatchAction("Reload")
                    }
                },
                _ = {
                    theme: "default",
                    animations: !0,
                    backgroundBlur: !1
                },
                D = () => {
                    const e = E({
                            name: "theme",
                            defaultState: _
                        }),
                        {
                            theme: t,
                            animations: n,
                            backgroundBlur: r
                        } = (0, a.J)((() => e.state()));
                    return { ...e,
                        theme: t,
                        animations: n,
                        animationsClass: () => ({
                            "animations-disabled": !n()
                        }),
                        backgroundBlur: r,
                        setTheme: t => {
                            e.update({
                                theme: t
                            })
                        },
                        setBackgroundBlur: t => {
                            e.update({
                                backgroundBlur: t
                            })
                        },
                        setAnimations: t => {
                            e.update({
                                animations: t
                            })
                        }
                    }
                },
                Y = (0, r.q6)({}),
                V = e => {
                    const {
                        transport: t,
                        onCoreEvent: n
                    } = (0, o.z)(), [a, i] = (0, r.n5)(!1), l = {
                        ctx: b(),
                        streamingServer: F(),
                        authLink: d(),
                        search: R(),
                        continueWatching: m(),
                        board: v(),
                        discover: x(),
                        library: A(),
                        metaDetails: B(),
                        player: P()
                    }, s = {
                        theme: D(),
                        pages: C()
                    }, c = e => Promise.all(e.map((async e => {
                        const [n] = Object.entries(l).find((([, t]) => t.model === e)) || [];
                        if (n) {
                            const e = l[n];
                            if (e.loaded()) {
                                const n = await t.getState(e.model);
                                n && e.update(n)
                            }
                        }
                    })));
                    return (0, r.Rc)((async () => {
                        n((({
                            name: e,
                            args: t
                        }) => {
                            if ("NewState" === e) c(t)
                        })), await c(Object.values(l).map((({
                            model: e
                        }) => e))), i(!0)
                    })), (0, r.a0)(Y.Provider, {
                        value: {
                            modelStores: l,
                            stores: s
                        },
                        get children() {
                            return (0, r.a0)(r.wv, {
                                get when() {
                                    return a()
                                },
                                get fallback() {
                                    return e.loading
                                },
                                get children() {
                                    return e.children
                                }
                            })
                        }
                    })
                },
                U = () => {
                    const {
                        modelStores: e
                    } = (0, r.NT)(Y);
                    return e
                },
                H = () => {
                    const {
                        stores: e
                    } = (0, r.NT)(Y);
                    return e
                }
        },
        6024: function(e, t, n) {
            "use strict";
            var r = function(e) {
                return e && e.Math === Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof n.g && n.g) || r("object" == typeof this && this) || function() {
                return this
            }() || Function("return this")()
        },
        6041: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298).has,
                a = n(170),
                i = n(2165),
                l = n(877),
                s = n(6243),
                c = n(9515);
            e.exports = function(e) {
                var t = r(this),
                    n = i(e);
                if (a(t) <= n.size) return !1 !== l(t, (function(e) {
                    if (n.includes(e)) return !1
                }), !0);
                var u = n.getIterator();
                return !1 !== s(u, (function(e) {
                    if (o(t, e)) return c(u, "normal", !1)
                }))
            }
        },
        6071: e => {
            "use strict";
            e.exports = function(e) {
                try {
                    return {
                        error: !1,
                        value: e()
                    }
                } catch (e) {
                    return {
                        error: !0,
                        value: e
                    }
                }
            }
        },
        6077: (e, t, n) => {
            "use strict";
            var r = n(6415),
                o = n(7668),
                a = n(7597),
                i = n(7835)("species");
            e.exports = function(e, t) {
                var n, l = r(e).constructor;
                return void 0 === l || a(n = r(l)[i]) ? t : o(n)
            }
        },
        6191: (e, t, n) => {
            "use strict";
            var r = n(6024).navigator,
                o = r && r.userAgent;
            e.exports = o ? String(o) : ""
        },
        6240: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6024),
                a = n(1329),
                i = n(4145),
                l = "WebAssembly",
                s = o[l],
                c = 7 !== new Error("e", {
                    cause: 7
                }).cause,
                u = function(e, t) {
                    var n = {};
                    n[e] = i(e, t, c), r({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    }, n)
                },
                d = function(e, t) {
                    if (s && s[e]) {
                        var n = {};
                        n[e] = i(l + "." + e, t, c), r({
                            target: l,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: c
                        }, n)
                    }
                };
            u("Error", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("EvalError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("RangeError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("ReferenceError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("SyntaxError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("TypeError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), u("URIError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), d("CompileError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), d("LinkError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            })), d("RuntimeError", (function(e) {
                return function(t) {
                    return a(e, this, arguments)
                }
            }))
        },
        6243: (e, t, n) => {
            "use strict";
            var r = n(6597);
            e.exports = function(e, t, n) {
                for (var o, a, i = n ? e : e.iterator, l = e.next; !(o = r(l, i)).done;)
                    if (void 0 !== (a = t(o.value))) return a
            }
        },
        6252: e => {
            "use strict";
            e.exports = function(e, t) {
                return t || (t = {}), e ? (e = String(e.__esModule ? e.default : e), /^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), t.hash && (e += t.hash), /["'() \t\n]|(%20)/.test(e) || t.needQuotes ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e) : e
            }
        },
        6264: (e, t, n) => {
            "use strict";
            var r = n(8666),
                o = n(9123);
            e.exports = function(e, t) {
                r(t) && "cause" in t && o(e, "cause", t.cause)
            }
        },
        6284: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4340),
                a = n(2786),
                i = n(6415),
                l = n(4479);
            r({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                forEach: function(e) {
                    i(this), a(e);
                    var t = l(this),
                        n = 0;
                    o(t, (function(t) {
                        e(t, n++)
                    }), {
                        IS_RECORD: !0
                    })
                }
            })
        },
        6294: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(6024).RegExp;
            e.exports = r((function() {
                var e = o("(?<a>b)", "g");
                return "b" !== e.exec("b").groups.a || "bc" !== "b".replace(e, "$<a>c")
            }))
        },
        6298: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = Set.prototype;
            e.exports = {
                Set: Set,
                add: r(o.add),
                has: r(o.has),
                remove: r(o.delete),
                proto: o
            }
        },
        6305: e => {
            "use strict";
            e.exports = function(e) {
                var t = [];
                return t.toString = function() {
                    return this.map((function(t) {
                        var n = "",
                            r = void 0 !== t[5];
                        return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), r && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                    })).join("")
                }, t.i = function(e, n, r, o, a) {
                    "string" == typeof e && (e = [
                        [null, e, void 0]
                    ]);
                    var i = {};
                    if (r)
                        for (var l = 0; l < this.length; l++) {
                            var s = this[l][0];
                            null != s && (i[s] = !0)
                        }
                    for (var c = 0; c < e.length; c++) {
                        var u = [].concat(e[c]);
                        r && i[u[0]] || (void 0 !== a && (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")), u[5] = a), n && (u[2] ? (u[1] = "@media ".concat(u[2], " {").concat(u[1], "}"), u[2] = n) : u[2] = n), o && (u[4] ? (u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}"), u[4] = o) : u[4] = "".concat(o)), t.push(u))
                    }
                }, t
            }
        },
        6382: (e, t, n) => {
            "use strict";
            var r = n(6298),
                o = n(877),
                a = r.Set,
                i = r.add;
            e.exports = function(e) {
                var t = new a;
                return o(e, (function(e) {
                    i(t, e)
                })), t
            }
        },
        6392: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(553),
                a = n(5644);
            e.exports = function(e, t, n) {
                r ? o.f(e, t, a(0, n)) : e[t] = n
            }
        },
        6414: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".app-loading-_mkyw {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.app-loading-_mkyw .icon-Uq1eg {\n  height: 10em;\n  width: 10em;\n  animation: pulse-ZUPEN 1s ease-in-out infinite;\n}\n@keyframes pulse-ZUPEN {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n", ""]), i.locals = {
                "app-loading": "app-loading-_mkyw",
                icon: "icon-Uq1eg",
                pulse: "pulse-ZUPEN"
            };
            const l = i
        },
        6415: (e, t, n) => {
            "use strict";
            var r = n(8666),
                o = String,
                a = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new a(o(e) + " is not an object")
            }
        },
        6448: (e, t, n) => {
            "use strict";
            var r, o = n(6415),
                a = n(5145),
                i = n(8031),
                l = n(7565),
                s = n(8357),
                c = n(7247),
                u = n(3455),
                d = "prototype",
                h = "script",
                f = u("IE_PROTO"),
                v = function() {},
                p = function(e) {
                    return "<" + h + ">" + e + "</" + h + ">"
                },
                m = function(e) {
                    e.write(p("")), e.close();
                    var t = e.parentWindow.Object;
                    return e = null, t
                },
                g = function() {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (e) {}
                    var e, t, n;
                    g = "undefined" != typeof document ? document.domain && r ? m(r) : (t = c("iframe"), n = "java" + h + ":", t.style.display = "none", s.appendChild(t), t.src = String(n), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F) : m(r);
                    for (var o = i.length; o--;) delete g[d][i[o]];
                    return g()
                };
            l[f] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (v[d] = o(e), n = new v, v[d] = null, n[f] = e) : n = g(), void 0 === t ? n : a.f(n, t)
            }
        },
        6470: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(4265),
                a = Function.prototype,
                i = r && Object.getOwnPropertyDescriptor,
                l = o(a, "name"),
                s = l && "something" === function() {}.name,
                c = l && (!r || r && i(a, "name").configurable);
            e.exports = {
                EXISTS: l,
                PROPER: s,
                CONFIGURABLE: c
            }
        },
        6480: (e, t, n) => {
            "use strict";
            var r = n(5735);
            e.exports = !r((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        6533: (e, t, n) => {
            "use strict";
            n.d(t, {
                C_: () => a,
                fy: () => g,
                lg: () => m,
                R1: () => u,
                a4: () => h,
                nP: () => p,
                vm: () => v,
                JZ: () => f,
                iq: () => d,
                BT: () => i,
                I2: () => c,
                aK: () => s,
                O$: () => l
            });
            const r = JSON.parse('[{"locale":"العربية","ietf":"ar-AR","alpha3":["ara"]},{"locale":"български език","ietf":"bg-BG","alpha3":["bul"]},{"locale":"Català","ietf":"ca-CA","alpha3":["cat"]},{"locale":"Čeština","ietf":"cs-CZ","alpha3":["ces","cze"]},{"locale":"Dansk","ietf":"da-DK","alpha3":["dan"]},{"locale":"Deutsch","ietf":"de-DE","alpha3":["deu","ger"]},{"locale":"Ελληνική","ietf":"el-GR","alpha3":["ell","gre"]},{"locale":"English","ietf":"en-US","alpha3":["eng"]},{"locale":"Esperanto","ietf":"eo-EO","alpha3":["epo"]},{"locale":"Español","ietf":"es-ES","alpha3":["spa"]},{"locale":"Euskara","ietf":"eu-ES","alpha3":["eus","baq"]},{"locale":"فارسی","ietf":"fa-IR","alpha3":["fas","per"]},{"locale":"Suomi","ietf":"fi-FI","alpha3":["fin"]},{"locale":"Français","ietf":"fr-FR","alpha3":["fra","fre"]},{"locale":"עברית","ietf":"he-IL","alpha3":["heb"]},{"locale":"हिन्दी","ietf":"hi-IN","alpha3":["hin"]},{"locale":"Hrvatski jezik","ietf":"hr-HR","alpha3":["hrv"]},{"locale":"Magyar nyelv","ietf":"hu-HU","alpha3":["hun"]},{"locale":"Bahasa Indonesia","ietf":"id-ID","alpha3":["ind"]},{"locale":"Italiano","ietf":"it-IT","alpha3":["ita"]},{"locale":"日本語","ietf":"ja-JP","alpha3":["jpn"]},{"locale":"한국어","ietf":"ko-KR","alpha3":["kor"]},{"locale":"Македонски јазик","ietf":"mk-MK","alpha3":["mkd","mac"]},{"locale":"ဗမာစာ","ietf":"my-BM","alpha3":["mya","bur"]},{"locale":"Norsk bokmål","ietf":"nb-NO","alpha3":["nob"]},{"locale":"नेपाली","ietf":"ne-NP","alpha3":["nep"]},{"locale":"Nederlands","ietf":"nl-NL","alpha3":["nld","dut"]},{"locale":"Norsk nynorsk","ietf":"nn-NO","alpha3":["nno"]},{"locale":"Język polski","ietf":"pl-PL","alpha3":["pol"]},{"locale":"Português Brazil","ietf":"pt-BR","alpha3":["pob"]},{"locale":"Português","ietf":"pt-PT","alpha3":["por"]},{"locale":"Română","ietf":"ro-RO","alpha3":["ron","rum"]},{"locale":"Русский язык","ietf":"ru-RU","alpha3":["rus"]},{"locale":"Slovenski jezik","ietf":"sl-SL","alpha3":["slv"]},{"locale":"Српски језик","ietf":"sr-RS","alpha3":["srp"]},{"locale":"Svenska","ietf":"sv-SE","alpha3":["swe"]},{"locale":"తెలుగు","ietf":"te-IN","alpha3":["tel"]},{"locale":"Türkçe","ietf":"tr-TR","alpha3":["tur"]},{"locale":"Українська мова","ietf":"uk-UA","alpha3":["ukr"]},{"locale":"Tiếng Việt","ietf":"vi-VN","alpha3":["vie"]},{"locale":"中文(中华人民共和国)","ietf":"zh-CN","alpha3":["zho","chi"]},{"locale":"中文(香港特别行政區)","ietf":"zh-HK","alpha3":["zho","chi"]},{"locale":"中文(台灣)","ietf":"zh-TW","alpha3":["zho","chi"]}]');
            const o = (0, n(980).aJ)() > 0,
                a = r,
                i = o ? [100, 125, 150, 175, 200] : [25, 50, 75, 100, 125, 150, 175, 200, 250],
                l = i[1] - i[0],
                s = i[0],
                c = i[i.length - 1],
                u = ["rgba(0, 0, 0, 0)", "rgb(0, 0, 0)", "rgb(255, 255, 255)", "rgb(255, 255, 0)", "rgb(255, 0, 0)", "rgb(0, 255, 0)", "rgb(0, 0, 255)"],
                d = [25, 50, 75, 90, 100],
                h = o ? [0, 5, 10, 15, 20] : [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90],
                f = h[1] - h[0],
                v = h[0],
                p = h[h.length - 1],
                m = [5e3, 1e4, 15e3, 2e4, 25e3, 3e4],
                g = [0, 5e3, 1e4, 15e3, 2e4, 25e3, 3e4, 35e3, 4e4, 45e3, 5e4, 55e3, 6e4, 65e3, 7e4, 75e3, 8e4, 85e3, 9e4]
        },
        6542: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(6415),
                a = n(4479),
                i = n(4715);
            e.exports = function(e, t) {
                t && "string" == typeof e || o(e);
                var n = i(e);
                return a(o(void 0 !== n ? r(n, e) : e))
            }
        },
        6597: (e, t, n) => {
            "use strict";
            var r = n(6480),
                o = Function.prototype.call;
            e.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        6601: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(2786),
                a = n(6415),
                i = n(4095),
                l = n(4715),
                s = TypeError;
            e.exports = function(e, t) {
                var n = arguments.length < 2 ? l(e) : t;
                if (o(n)) return a(r(n, e));
                throw new s(i(e) + " is not iterable")
            }
        },
        6635: (e, t, n) => {
            "use strict";
            var r = n(5735);
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        6641: (e, t, n) => {
            "use strict";
            var r = n(7329),
                o = n(2189);
            e.exports = function(e) {
                var t = r(e, "string");
                return o(t) ? t : t + ""
            }
        },
        6685: e => {
            "use strict";
            e.exports = function(e, t) {
                try {
                    1 === arguments.length ? console.error(e) : console.error(e, t)
                } catch (e) {}
            }
        },
        6693: (e, t, n) => {
            "use strict";
            var r = n(6191).match(/firefox\/(\d+)/i);
            e.exports = !!r && +r[1]
        },
        6706: (e, t, n) => {
            "use strict";
            n.d(t, {
                J: () => i
            });
            n(9144), n(5073);
            var r = n(6886);
            n(5226), n(9784), n(3351), n(9296), n(549), n(3238), n(2098), !n(8224).S$ && r.IJ;
            var o = e => "function" != typeof e || e.length ? e : e();
            Object.entries, Object.keys;
            var a = e => "object" == typeof e && null !== e;

            function i(e, t) {
                var n;
                const l = null != t ? t : {},
                    s = null !== (n = l.memo) && void 0 !== n ? n : "function" == typeof e,
                    c = "function" == typeof e ? t => () => e()[t] : t => () => e[t],
                    u = o(e);
                if (l.lazy) {
                    const e = (0, r.QQ)();
                    return function(e, t) {
                        return new Proxy({}, {
                            get: (n, r) => {
                                if (r === Symbol.iterator || "length" === r) return Reflect.get(e, r);
                                const o = Reflect.get(n, r);
                                if (o) return o;
                                const a = t(r);
                                return Reflect.set(n, r, a), a
                            },
                            set: () => !1
                        })
                    }(u, (n => {
                        const o = c(n);
                        return l.deep && a(u[n]) ? (0, r.vP)(e, (() => i(o, { ...l,
                            memo: s
                        }))) : s ? (0, r.vP)(e, (() => (0, r.To)(o, void 0, t))) : o
                    }))
                }
                const d = Array.isArray(u) ? [] : {};
                for (const [e, n] of Object.entries(u)) {
                    const o = c(e);
                    l.deep && a(n) ? d[e] = i(o, { ...l,
                        memo: s
                    }) : d[e] = s ? (0, r.To)(o, void 0, t) : o
                }
                return d
            }
        },
        6724: (e, t, n) => {
            "use strict";
            var r = n(5735);
            e.exports = !r((function() {
                return 7 !== Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        6758: e => {
            e.exports = [{
                name: "Abkhaz",
                local: "Аҧсуа",
                1: "ab",
                2: "abk",
                "2T": "abk",
                "2B": "abk",
                3: "abk"
            }, {
                name: "Afar",
                local: "Afaraf",
                1: "aa",
                2: "aar",
                "2T": "aar",
                "2B": "aar",
                3: "aar"
            }, {
                name: "Afrikaans",
                local: "Afrikaans",
                1: "af",
                2: "afr",
                "2T": "afr",
                "2B": "afr",
                3: "afr"
            }, {
                name: "Akan",
                local: "Akan",
                1: "ak",
                2: "aka",
                "2T": "aka",
                "2B": "aka",
                3: "aka"
            }, {
                name: "Albanian",
                local: "Shqip",
                1: "sq",
                2: "sqi",
                "2T": "sqi",
                "2B": "alb",
                3: "sqi"
            }, {
                name: "Amharic",
                local: "አማርኛ",
                1: "am",
                2: "amh",
                "2T": "amh",
                "2B": "amh",
                3: "amh"
            }, {
                name: "Arabic",
                local: "العربية",
                1: "ar",
                2: "ara",
                "2T": "ara",
                "2B": "ara",
                3: "ara"
            }, {
                name: "Aragonese",
                local: "Aragonés",
                1: "an",
                2: "arg",
                "2T": "arg",
                "2B": "arg",
                3: "arg"
            }, {
                name: "Armenian",
                local: "Հայերեն",
                1: "hy",
                2: "hye",
                "2T": "hye",
                "2B": "arm",
                3: "hye"
            }, {
                name: "Assamese",
                local: "অসমীয়া",
                1: "as",
                2: "asm",
                "2T": "asm",
                "2B": "asm",
                3: "asm"
            }, {
                name: "Avaric",
                local: "Авар",
                1: "av",
                2: "ava",
                "2T": "ava",
                "2B": "ava",
                3: "ava"
            }, {
                name: "Avestan",
                local: "avesta",
                1: "ae",
                2: "ave",
                "2T": "ave",
                "2B": "ave",
                3: "ave"
            }, {
                name: "Aymara",
                local: "Aymar",
                1: "ay",
                2: "aym",
                "2T": "aym",
                "2B": "aym",
                3: "aym"
            }, {
                name: "Azerbaijani",
                local: "Azərbaycanca",
                1: "az",
                2: "aze",
                "2T": "aze",
                "2B": "aze",
                3: "aze"
            }, {
                name: "Bambara",
                local: "Bamanankan",
                1: "bm",
                2: "bam",
                "2T": "bam",
                "2B": "bam",
                3: "bam"
            }, {
                name: "Bashkir",
                local: "Башҡортса",
                1: "ba",
                2: "bak",
                "2T": "bak",
                "2B": "bak",
                3: "bak"
            }, {
                name: "Basque",
                local: "Euskara",
                1: "eu",
                2: "eus",
                "2T": "eus",
                "2B": "baq",
                3: "eus"
            }, {
                name: "Belarusian",
                local: "Беларуская",
                1: "be",
                2: "bel",
                "2T": "bel",
                "2B": "bel",
                3: "bel"
            }, {
                name: "Bengali",
                local: "বাংলা",
                1: "bn",
                2: "ben",
                "2T": "ben",
                "2B": "ben",
                3: "ben"
            }, {
                name: "Bihari",
                local: "भोजपुरी",
                1: "bh",
                2: "bih",
                "2T": "bih",
                "2B": "bih",
                3: "bih"
            }, {
                name: "Bislama",
                local: "Bislama",
                1: "bi",
                2: "bis",
                "2T": "bis",
                "2B": "bis",
                3: "bis"
            }, {
                name: "Bosnian",
                local: "Bosanski",
                1: "bs",
                2: "bos",
                "2T": "bos",
                "2B": "bos",
                3: "bos"
            }, {
                name: "Breton",
                local: "Brezhoneg",
                1: "br",
                2: "bre",
                "2T": "bre",
                "2B": "bre",
                3: "bre"
            }, {
                name: "Bulgarian",
                local: "Български",
                1: "bg",
                2: "bul",
                "2T": "bul",
                "2B": "bul",
                3: "bul"
            }, {
                name: "Burmese",
                local: "မြန်မာဘာသာ",
                1: "my",
                2: "mya",
                "2T": "mya",
                "2B": "bur",
                3: "mya"
            }, {
                name: "Catalan",
                local: "Català",
                1: "ca",
                2: "cat",
                "2T": "cat",
                "2B": "cat",
                3: "cat"
            }, {
                name: "Chamorro",
                local: "Chamoru",
                1: "ch",
                2: "cha",
                "2T": "cha",
                "2B": "cha",
                3: "cha"
            }, {
                name: "Chechen",
                local: "Нохчийн",
                1: "ce",
                2: "che",
                "2T": "che",
                "2B": "che",
                3: "che"
            }, {
                name: "Chichewa",
                local: "Chichewa",
                1: "ny",
                2: "nya",
                "2T": "nya",
                "2B": "nya",
                3: "nya"
            }, {
                name: "Chinese",
                local: "中文",
                1: "zh",
                2: "zho",
                "2T": "zho",
                "2B": "chi",
                3: "zho",
                locale: "zh-CN"
            }, {
                name: "Chinese (Simplified)",
                local: "中文（簡體）",
                1: "zh",
                2: "zhe",
                "2T": "zhe",
                "2B": "chi",
                3: "zhe",
                locale: "zh-Hans"
            }, {
                name: "Chinese (Traditional)",
                local: "中文（繁體）",
                1: "zh",
                2: "zht",
                "2T": "zht",
                "2B": "chi",
                3: "zht",
                locale: "zh-Hant"
            }, {
                name: "Chuvash",
                local: "Чӑвашла",
                1: "cv",
                2: "chv",
                "2T": "chv",
                "2B": "chv",
                3: "chv"
            }, {
                name: "Cornish",
                local: "Kernewek",
                1: "kw",
                2: "cor",
                "2T": "cor",
                "2B": "cor",
                3: "cor"
            }, {
                name: "Corsican",
                local: "Corsu",
                1: "co",
                2: "cos",
                "2T": "cos",
                "2B": "cos",
                3: "cos"
            }, {
                name: "Cree",
                local: "ᓀᐦᐃᔭᐍᐏᐣ",
                1: "cr",
                2: "cre",
                "2T": "cre",
                "2B": "cre",
                3: "cre"
            }, {
                name: "Croatian",
                local: "Hrvatski",
                1: "hr",
                2: "hrv",
                "2T": "hrv",
                "2B": "hrv",
                3: "hrv"
            }, {
                name: "Czech",
                local: "Čeština",
                1: "cs",
                2: "ces",
                "2T": "ces",
                "2B": "cze",
                3: "ces"
            }, {
                name: "Danish",
                local: "Dansk",
                1: "da",
                2: "dan",
                "2T": "dan",
                "2B": "dan",
                3: "dan"
            }, {
                name: "Divehi",
                local: "Divehi",
                1: "dv",
                2: "div",
                "2T": "div",
                "2B": "div",
                3: "div"
            }, {
                name: "Dutch",
                local: "Nederlands",
                1: "nl",
                2: "nld",
                "2T": "nld",
                "2B": "dut",
                3: "nld"
            }, {
                name: "Dzongkha",
                local: "རྫོང་ཁ",
                1: "dz",
                2: "dzo",
                "2T": "dzo",
                "2B": "dzo",
                3: "dzo"
            }, {
                name: "English",
                local: "English",
                1: "en",
                2: "eng",
                "2T": "eng",
                "2B": "eng",
                3: "eng",
                locale: "en-US"
            }, {
                name: "Esperanto",
                local: "Esperanto",
                1: "eo",
                2: "epo",
                "2T": "epo",
                "2B": "epo",
                3: "epo"
            }, {
                name: "Estonian",
                local: "Eesti",
                1: "et",
                2: "est",
                "2T": "est",
                "2B": "est",
                3: "est"
            }, {
                name: "Ewe",
                local: "Eʋegbe",
                1: "ee",
                2: "ewe",
                "2T": "ewe",
                "2B": "ewe",
                3: "ewe"
            }, {
                name: "Faroese",
                local: "Føroyskt",
                1: "fo",
                2: "fao",
                "2T": "fao",
                "2B": "fao",
                3: "fao"
            }, {
                name: "Fijian",
                local: "Na Vosa Vaka-Viti",
                1: "fj",
                2: "fij",
                "2T": "fij",
                "2B": "fij",
                3: "fij"
            }, {
                name: "Finnish",
                local: "Suomi",
                1: "fi",
                2: "fin",
                "2T": "fin",
                "2B": "fin",
                3: "fin"
            }, {
                name: "French",
                local: "Français",
                1: "fr",
                2: "fra",
                "2T": "fra",
                "2B": "fre",
                3: "fra",
                locale: "fr-FR"
            }, {
                name: "Fula",
                local: "Fulfulde",
                1: "ff",
                2: "ful",
                "2T": "ful",
                "2B": "ful",
                3: "ful"
            }, {
                name: "Galician",
                local: "Galego",
                1: "gl",
                2: "glg",
                "2T": "glg",
                "2B": "glg",
                3: "glg"
            }, {
                name: "Georgian",
                local: "ქართული",
                1: "ka",
                2: "kat",
                "2T": "kat",
                "2B": "geo",
                3: "kat"
            }, {
                name: "German",
                local: "Deutsch",
                1: "de",
                2: "deu",
                "2T": "deu",
                "2B": "ger",
                3: "deu"
            }, {
                name: "Greek",
                local: "Ελληνικά",
                1: "el",
                2: "ell",
                "2T": "ell",
                "2B": "gre",
                3: "ell"
            }, {
                name: "Guaraní",
                local: "Avañe'ẽ",
                1: "gn",
                2: "grn",
                "2T": "grn",
                "2B": "grn",
                3: "grn"
            }, {
                name: "Gujarati",
                local: "ગુજરાતી",
                1: "gu",
                2: "guj",
                "2T": "guj",
                "2B": "guj",
                3: "guj"
            }, {
                name: "Haitian",
                local: "Kreyòl Ayisyen",
                1: "ht",
                2: "hat",
                "2T": "hat",
                "2B": "hat",
                3: "hat"
            }, {
                name: "Hausa",
                local: "هَوُسَ",
                1: "ha",
                2: "hau",
                "2T": "hau",
                "2B": "hau",
                3: "hau"
            }, {
                name: "Hebrew",
                local: "עברית",
                1: "he",
                2: "heb",
                "2T": "heb",
                "2B": "heb",
                3: "heb"
            }, {
                name: "Herero",
                local: "Otjiherero",
                1: "hz",
                2: "her",
                "2T": "her",
                "2B": "her",
                3: "her"
            }, {
                name: "Hindi",
                local: "हिन्दी",
                1: "hi",
                2: "hin",
                "2T": "hin",
                "2B": "hin",
                3: "hin"
            }, {
                name: "Hiri Motu",
                local: "Hiri Motu",
                1: "ho",
                2: "hmo",
                "2T": "hmo",
                "2B": "hmo",
                3: "hmo"
            }, {
                name: "Hungarian",
                local: "Magyar",
                1: "hu",
                2: "hun",
                "2T": "hun",
                "2B": "hun",
                3: "hun"
            }, {
                name: "Interlingua",
                local: "Interlingua",
                1: "ia",
                2: "ina",
                "2T": "ina",
                "2B": "ina",
                3: "ina"
            }, {
                name: "Indonesian",
                local: "Bahasa Indonesia",
                1: "id",
                2: "ind",
                "2T": "ind",
                "2B": "ind",
                3: "ind"
            }, {
                name: "Interlingue",
                local: "Interlingue",
                1: "ie",
                2: "ile",
                "2T": "ile",
                "2B": "ile",
                3: "ile"
            }, {
                name: "Irish",
                local: "Gaeilge",
                1: "ga",
                2: "gle",
                "2T": "gle",
                "2B": "gle",
                3: "gle"
            }, {
                name: "Igbo",
                local: "Igbo",
                1: "ig",
                2: "ibo",
                "2T": "ibo",
                "2B": "ibo",
                3: "ibo"
            }, {
                name: "Inupiaq",
                local: "Iñupiak",
                1: "ik",
                2: "ipk",
                "2T": "ipk",
                "2B": "ipk",
                3: "ipk"
            }, {
                name: "Ido",
                local: "Ido",
                1: "io",
                2: "ido",
                "2T": "ido",
                "2B": "ido",
                3: "ido"
            }, {
                name: "Icelandic",
                local: "Íslenska",
                1: "is",
                2: "isl",
                "2T": "isl",
                "2B": "ice",
                3: "isl"
            }, {
                name: "Italian",
                local: "Italiano",
                1: "it",
                2: "ita",
                "2T": "ita",
                "2B": "ita",
                3: "ita",
                locale: "it-IT"
            }, {
                name: "Inuktitut",
                local: "ᐃᓄᒃᑎᑐᑦ",
                1: "iu",
                2: "iku",
                "2T": "iku",
                "2B": "iku",
                3: "iku"
            }, {
                name: "Japanese",
                local: "日本語",
                1: "ja",
                2: "jpn",
                "2T": "jpn",
                "2B": "jpn",
                3: "jpn",
                locale: "ja-JP"
            }, {
                name: "Javanese",
                local: "Basa Jawa",
                1: "jv",
                2: "jav",
                "2T": "jav",
                "2B": "jav",
                3: "jav"
            }, {
                name: "Kalaallisut",
                local: "Kalaallisut",
                1: "kl",
                2: "kal",
                "2T": "kal",
                "2B": "kal",
                3: "kal"
            }, {
                name: "Kannada",
                local: "ಕನ್ನಡ",
                1: "kn",
                2: "kan",
                "2T": "kan",
                "2B": "kan",
                3: "kan"
            }, {
                name: "Kanuri",
                local: "Kanuri",
                1: "kr",
                2: "kau",
                "2T": "kau",
                "2B": "kau",
                3: "kau"
            }, {
                name: "Kashmiri",
                local: "كشميري",
                1: "ks",
                2: "kas",
                "2T": "kas",
                "2B": "kas",
                3: "kas"
            }, {
                name: "Kazakh",
                local: "Қазақша",
                1: "kk",
                2: "kaz",
                "2T": "kaz",
                "2B": "kaz",
                3: "kaz"
            }, {
                name: "Khmer",
                local: "ភាសាខ្មែរ",
                1: "km",
                2: "khm",
                "2T": "khm",
                "2B": "khm",
                3: "khm"
            }, {
                name: "Kikuyu",
                local: "Gĩkũyũ",
                1: "ki",
                2: "kik",
                "2T": "kik",
                "2B": "kik",
                3: "kik"
            }, {
                name: "Kinyarwanda",
                local: "Kinyarwanda",
                1: "rw",
                2: "kin",
                "2T": "kin",
                "2B": "kin",
                3: "kin"
            }, {
                name: "Kyrgyz",
                local: "Кыргызча",
                1: "ky",
                2: "kir",
                "2T": "kir",
                "2B": "kir",
                3: "kir"
            }, {
                name: "Komi",
                local: "Коми",
                1: "kv",
                2: "kom",
                "2T": "kom",
                "2B": "kom",
                3: "kom"
            }, {
                name: "Kongo",
                local: "Kongo",
                1: "kg",
                2: "kon",
                "2T": "kon",
                "2B": "kon",
                3: "kon"
            }, {
                name: "Korean",
                local: "한국어",
                1: "ko",
                2: "kor",
                "2T": "kor",
                "2B": "kor",
                3: "kor"
            }, {
                name: "Kurdish",
                local: "Kurdî",
                1: "ku",
                2: "kur",
                "2T": "kur",
                "2B": "kur",
                3: "kur"
            }, {
                name: "Kwanyama",
                local: "Kuanyama",
                1: "kj",
                2: "kua",
                "2T": "kua",
                "2B": "kua",
                3: "kua"
            }, {
                name: "Latin",
                local: "Latina",
                1: "la",
                2: "lat",
                "2T": "lat",
                "2B": "lat",
                3: "lat"
            }, {
                name: "Luxembourgish",
                local: "Lëtzebuergesch",
                1: "lb",
                2: "ltz",
                "2T": "ltz",
                "2B": "ltz",
                3: "ltz"
            }, {
                name: "Ganda",
                local: "Luganda",
                1: "lg",
                2: "lug",
                "2T": "lug",
                "2B": "lug",
                3: "lug"
            }, {
                name: "Limburgish",
                local: "Limburgs",
                1: "li",
                2: "lim",
                "2T": "lim",
                "2B": "lim",
                3: "lim"
            }, {
                name: "Lingala",
                local: "Lingála",
                1: "ln",
                2: "lin",
                "2T": "lin",
                "2B": "lin",
                3: "lin"
            }, {
                name: "Lao",
                local: "ພາສາລາວ",
                1: "lo",
                2: "lao",
                "2T": "lao",
                "2B": "lao",
                3: "lao"
            }, {
                name: "Lithuanian",
                local: "Lietuvių",
                1: "lt",
                2: "lit",
                "2T": "lit",
                "2B": "lit",
                3: "lit"
            }, {
                name: "Luba-Katanga",
                local: "Tshiluba",
                1: "lu",
                2: "lub",
                "2T": "lub",
                "2B": "lub",
                3: "lub"
            }, {
                name: "Latvian",
                local: "Latviešu",
                1: "lv",
                2: "lav",
                "2T": "lav",
                "2B": "lav",
                3: "lav"
            }, {
                name: "Manx",
                local: "Gaelg",
                1: "gv",
                2: "glv",
                "2T": "glv",
                "2B": "glv",
                3: "glv"
            }, {
                name: "Macedonian",
                local: "Македонски",
                1: "mk",
                2: "mkd",
                "2T": "mkd",
                "2B": "mac",
                3: "mkd"
            }, {
                name: "Malagasy",
                local: "Malagasy",
                1: "mg",
                2: "mlg",
                "2T": "mlg",
                "2B": "mlg",
                3: "mlg"
            }, {
                name: "Malay",
                local: "Bahasa Melayu",
                1: "ms",
                2: "msa",
                "2T": "msa",
                "2B": "may",
                3: "msa"
            }, {
                name: "Malayalam",
                local: "മലയാളം",
                1: "ml",
                2: "mal",
                "2T": "mal",
                "2B": "mal",
                3: "mal"
            }, {
                name: "Maltese",
                local: "Malti",
                1: "mt",
                2: "mlt",
                "2T": "mlt",
                "2B": "mlt",
                3: "mlt"
            }, {
                name: "Māori",
                local: "Māori",
                1: "mi",
                2: "mri",
                "2T": "mri",
                "2B": "mao",
                3: "mri"
            }, {
                name: "Marathi",
                local: "मराठी",
                1: "mr",
                2: "mar",
                "2T": "mar",
                "2B": "mar",
                3: "mar"
            }, {
                name: "Marshallese",
                local: "Kajin M̧ajeļ",
                1: "mh",
                2: "mah",
                "2T": "mah",
                "2B": "mah",
                3: "mah"
            }, {
                name: "Mongolian",
                local: "Монгол",
                1: "mn",
                2: "mon",
                "2T": "mon",
                "2B": "mon",
                3: "mon"
            }, {
                name: "Nauru",
                local: "Dorerin Naoero",
                1: "na",
                2: "nau",
                "2T": "nau",
                "2B": "nau",
                3: "nau"
            }, {
                name: "Navajo",
                local: "Diné Bizaad",
                1: "nv",
                2: "nav",
                "2T": "nav",
                "2B": "nav",
                3: "nav"
            }, {
                name: "Northern Ndebele",
                local: "isiNdebele",
                1: "nd",
                2: "nde",
                "2T": "nde",
                "2B": "nde",
                3: "nde"
            }, {
                name: "Nepali",
                local: "नेपाली",
                1: "ne",
                2: "nep",
                "2T": "nep",
                "2B": "nep",
                3: "nep"
            }, {
                name: "Ndonga",
                local: "Owambo",
                1: "ng",
                2: "ndo",
                "2T": "ndo",
                "2B": "ndo",
                3: "ndo"
            }, {
                name: "Norwegian Bokmål",
                local: "Norsk (Bokmål)",
                1: "nb",
                2: "nob",
                "2T": "nob",
                "2B": "nob",
                3: "nob",
                locale: "nb-NO"
            }, {
                name: "Norwegian Nynorsk",
                local: "Norsk (Nynorsk)",
                1: "nn",
                2: "nno",
                "2T": "nno",
                "2B": "nno",
                3: "nno",
                locale: "nn-NO"
            }, {
                name: "Norwegian",
                local: "Norsk",
                1: "no",
                2: "nor",
                "2T": "nor",
                "2B": "nor",
                3: "nor",
                locale: "no-NO"
            }, {
                name: "Nuosu",
                local: "ꆈꌠ꒿ Nuosuhxop",
                1: "ii",
                2: "iii",
                "2T": "iii",
                "2B": "iii",
                3: "iii"
            }, {
                name: "Southern Ndebele",
                local: "isiNdebele",
                1: "nr",
                2: "nbl",
                "2T": "nbl",
                "2B": "nbl",
                3: "nbl"
            }, {
                name: "Occitan",
                local: "Occitan",
                1: "oc",
                2: "oci",
                "2T": "oci",
                "2B": "oci",
                3: "oci"
            }, {
                name: "Ojibwe",
                local: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
                1: "oj",
                2: "oji",
                "2T": "oji",
                "2B": "oji",
                3: "oji"
            }, {
                name: "Old Church Slavonic",
                local: "Словѣ́ньскъ",
                1: "cu",
                2: "chu",
                "2T": "chu",
                "2B": "chu",
                3: "chu"
            }, {
                name: "Oromo",
                local: "Afaan Oromoo",
                1: "om",
                2: "orm",
                "2T": "orm",
                "2B": "orm",
                3: "orm"
            }, {
                name: "Oriya",
                local: "ଓଡି଼ଆ",
                1: "or",
                2: "ori",
                "2T": "ori",
                "2B": "ori",
                3: "ori"
            }, {
                name: "Ossetian",
                local: "Ирон æвзаг",
                1: "os",
                2: "oss",
                "2T": "oss",
                "2B": "oss",
                3: "oss"
            }, {
                name: "Panjabi",
                local: "ਪੰਜਾਬੀ",
                1: "pa",
                2: "pan",
                "2T": "pan",
                "2B": "pan",
                3: "pan"
            }, {
                name: "Pāli",
                local: "पाऴि",
                1: "pi",
                2: "pli",
                "2T": "pli",
                "2B": "pli",
                3: "pli"
            }, {
                name: "Persian",
                local: "فارسی",
                1: "fa",
                2: "fas",
                "2T": "fas",
                "2B": "per",
                3: "fas"
            }, {
                name: "Polish",
                local: "Polski",
                1: "pl",
                2: "pol",
                "2T": "pol",
                "2B": "pol",
                3: "pol"
            }, {
                name: "Pashto",
                local: "پښتو",
                1: "ps",
                2: "pus",
                "2T": "pus",
                "2B": "pus",
                3: "pus"
            }, {
                name: "Portuguese",
                local: "Português",
                1: "pt",
                2: "por",
                "2T": "por",
                "2B": "por",
                3: "por",
                locale: "pt-PT"
            }, {
                name: "Portuguese (Brazil)",
                local: "Português (Brasil)",
                1: "pb",
                2: "pob",
                "2T": "pob",
                "2B": "pob",
                3: "pob",
                locale: "pt-BR"
            }, {
                name: "Quechua",
                local: "Runa Simi",
                1: "qu",
                2: "que",
                "2T": "que",
                "2B": "que",
                3: "que"
            }, {
                name: "Romansh",
                local: "Rumantsch",
                1: "rm",
                2: "roh",
                "2T": "roh",
                "2B": "roh",
                3: "roh"
            }, {
                name: "Kirundi",
                local: "Kirundi",
                1: "rn",
                2: "run",
                "2T": "run",
                "2B": "run",
                3: "run"
            }, {
                name: "Romanian",
                local: "Română",
                1: "ro",
                2: "ron",
                "2T": "ron",
                "2B": "rum",
                3: "ron"
            }, {
                name: "Russian",
                local: "Русский",
                1: "ru",
                2: "rus",
                "2T": "rus",
                "2B": "rus",
                3: "rus"
            }, {
                name: "Sanskrit",
                local: "संस्कृतम्",
                1: "sa",
                2: "san",
                "2T": "san",
                "2B": "san",
                3: "san"
            }, {
                name: "Sardinian",
                local: "Sardu",
                1: "sc",
                2: "srd",
                "2T": "srd",
                "2B": "srd",
                3: "srd"
            }, {
                name: "Sindhi",
                local: "سنڌي‎",
                1: "sd",
                2: "snd",
                "2T": "snd",
                "2B": "snd",
                3: "snd"
            }, {
                name: "Northern Sami",
                local: "Sámegiella",
                1: "se",
                2: "sme",
                "2T": "sme",
                "2B": "sme",
                3: "sme"
            }, {
                name: "Samoan",
                local: "Gagana Sāmoa",
                1: "sm",
                2: "smo",
                "2T": "smo",
                "2B": "smo",
                3: "smo"
            }, {
                name: "Sango",
                local: "Sängö",
                1: "sg",
                2: "sag",
                "2T": "sag",
                "2B": "sag",
                3: "sag"
            }, {
                name: "Serbian",
                local: "Српски",
                1: "sr",
                2: "srp",
                "2T": "srp",
                "2B": "srp",
                3: "srp"
            }, {
                name: "Gaelic",
                local: "Gàidhlig",
                1: "gd",
                2: "gla",
                "2T": "gla",
                "2B": "gla",
                3: "gla"
            }, {
                name: "Shona",
                local: "ChiShona",
                1: "sn",
                2: "sna",
                "2T": "sna",
                "2B": "sna",
                3: "sna"
            }, {
                name: "Sinhala",
                local: "සිංහල",
                1: "si",
                2: "sin",
                "2T": "sin",
                "2B": "sin",
                3: "sin"
            }, {
                name: "Slovak",
                local: "Slovenčina",
                1: "sk",
                2: "slk",
                "2T": "slk",
                "2B": "slo",
                3: "slk"
            }, {
                name: "Slovene",
                local: "Slovenščina",
                1: "sl",
                2: "slv",
                "2T": "slv",
                "2B": "slv",
                3: "slv"
            }, {
                name: "Somali",
                local: "Soomaaliga",
                1: "so",
                2: "som",
                "2T": "som",
                "2B": "som",
                3: "som"
            }, {
                name: "Southern Sotho",
                local: "Sesotho",
                1: "st",
                2: "sot",
                "2T": "sot",
                "2B": "sot",
                3: "sot"
            }, {
                name: "Spanish",
                local: "Español",
                1: "es",
                2: "spa",
                "2T": "spa",
                "2B": "spa",
                3: "spa",
                locale: "es-ES"
            }, {
                name: "Spanish (Latin America)",
                local: "Español (América Latina)",
                1: "es",
                2: "spl",
                "2T": "spl",
                "2B": "spl",
                3: "spl",
                locale: "es-419"
            }, {
                name: "Sundanese",
                local: "Basa Sunda",
                1: "su",
                2: "sun",
                "2T": "sun",
                "2B": "sun",
                3: "sun"
            }, {
                name: "Swahili",
                local: "Kiswahili",
                1: "sw",
                2: "swa",
                "2T": "swa",
                "2B": "swa",
                3: "swa"
            }, {
                name: "Swati",
                local: "SiSwati",
                1: "ss",
                2: "ssw",
                "2T": "ssw",
                "2B": "ssw",
                3: "ssw"
            }, {
                name: "Swedish",
                local: "Svenska",
                1: "sv",
                2: "swe",
                "2T": "swe",
                "2B": "swe",
                3: "swe"
            }, {
                name: "Tamil",
                local: "தமிழ்",
                1: "ta",
                2: "tam",
                "2T": "tam",
                "2B": "tam",
                3: "tam"
            }, {
                name: "Telugu",
                local: "తెలుగు",
                1: "te",
                2: "tel",
                "2T": "tel",
                "2B": "tel",
                3: "tel"
            }, {
                name: "Tajik",
                local: "Тоҷикӣ",
                1: "tg",
                2: "tgk",
                "2T": "tgk",
                "2B": "tgk",
                3: "tgk"
            }, {
                name: "Thai",
                local: "ภาษาไทย",
                1: "th",
                2: "tha",
                "2T": "tha",
                "2B": "tha",
                3: "tha"
            }, {
                name: "Tigrinya",
                local: "ትግርኛ",
                1: "ti",
                2: "tir",
                "2T": "tir",
                "2B": "tir",
                3: "tir"
            }, {
                name: "Tibetan Standard",
                local: "བོད་ཡིག",
                1: "bo",
                2: "bod",
                "2T": "bod",
                "2B": "tib",
                3: "bod"
            }, {
                name: "Turkmen",
                local: "Türkmençe",
                1: "tk",
                2: "tuk",
                "2T": "tuk",
                "2B": "tuk",
                3: "tuk"
            }, {
                name: "Tagalog",
                local: "Tagalog",
                1: "tl",
                2: "tgl",
                "2T": "tgl",
                "2B": "tgl",
                3: "tgl"
            }, {
                name: "Tswana",
                local: "Setswana",
                1: "tn",
                2: "tsn",
                "2T": "tsn",
                "2B": "tsn",
                3: "tsn"
            }, {
                name: "Tonga",
                local: "faka Tonga",
                1: "to",
                2: "ton",
                "2T": "ton",
                "2B": "ton",
                3: "ton"
            }, {
                name: "Turkish",
                local: "Türkçe",
                1: "tr",
                2: "tur",
                "2T": "tur",
                "2B": "tur",
                3: "tur"
            }, {
                name: "Tsonga",
                local: "Xitsonga",
                1: "ts",
                2: "tso",
                "2T": "tso",
                "2B": "tso",
                3: "tso"
            }, {
                name: "Tatar",
                local: "Татарча",
                1: "tt",
                2: "tat",
                "2T": "tat",
                "2B": "tat",
                3: "tat"
            }, {
                name: "Twi",
                local: "Twi",
                1: "tw",
                2: "twi",
                "2T": "twi",
                "2B": "twi",
                3: "twi"
            }, {
                name: "Tahitian",
                local: "Reo Mā’ohi",
                1: "ty",
                2: "tah",
                "2T": "tah",
                "2B": "tah",
                3: "tah"
            }, {
                name: "Uyghur",
                local: "ئۇيغۇرچه",
                1: "ug",
                2: "uig",
                "2T": "uig",
                "2B": "uig",
                3: "uig"
            }, {
                name: "Ukrainian",
                local: "Українська",
                1: "uk",
                2: "ukr",
                "2T": "ukr",
                "2B": "ukr",
                3: "ukr"
            }, {
                name: "Urdu",
                local: "اردو",
                1: "ur",
                2: "urd",
                "2T": "urd",
                "2B": "urd",
                3: "urd"
            }, {
                name: "Uzbek",
                local: "O‘zbek",
                1: "uz",
                2: "uzb",
                "2T": "uzb",
                "2B": "uzb",
                3: "uzb"
            }, {
                name: "Venda",
                local: "Tshivenḓa",
                1: "ve",
                2: "ven",
                "2T": "ven",
                "2B": "ven",
                3: "ven"
            }, {
                name: "Vietnamese",
                local: "Tiếng Việt",
                1: "vi",
                2: "vie",
                "2T": "vie",
                "2B": "vie",
                3: "vie"
            }, {
                name: "Volapük",
                local: "Volapük",
                1: "vo",
                2: "vol",
                "2T": "vol",
                "2B": "vol",
                3: "vol"
            }, {
                name: "Walloon",
                local: "Walon",
                1: "wa",
                2: "wln",
                "2T": "wln",
                "2B": "wln",
                3: "wln"
            }, {
                name: "Welsh",
                local: "Cymraeg",
                1: "cy",
                2: "cym",
                "2T": "cym",
                "2B": "wel",
                3: "cym"
            }, {
                name: "Wolof",
                local: "Wolof",
                1: "wo",
                2: "wol",
                "2T": "wol",
                "2B": "wol",
                3: "wol"
            }, {
                name: "Western Frisian",
                local: "Frysk",
                1: "fy",
                2: "fry",
                "2T": "fry",
                "2B": "fry",
                3: "fry"
            }, {
                name: "Xhosa",
                local: "isiXhosa",
                1: "xh",
                2: "xho",
                "2T": "xho",
                "2B": "xho",
                3: "xho"
            }, {
                name: "Yiddish",
                local: "ייִדיש",
                1: "yi",
                2: "yid",
                "2T": "yid",
                "2B": "yid",
                3: "yid"
            }, {
                name: "Yoruba",
                local: "Yorùbá",
                1: "yo",
                2: "yor",
                "2T": "yor",
                "2B": "yor",
                3: "yor"
            }, {
                name: "Zhuang",
                local: "Cuengh",
                1: "za",
                2: "zha",
                "2T": "zha",
                "2B": "zha",
                3: "zha"
            }, {
                name: "Zulu",
                local: "isiZulu",
                1: "zu",
                2: "zul",
                "2T": "zul",
                "2B": "zul",
                3: "zul"
            }]
        },
        6763: (e, t, n) => {
            "use strict";
            var r = n(6191);
            e.exports = /MSIE|Trident/.test(r)
        },
        6854: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6415),
                a = n(4340),
                i = n(4479),
                l = [].push;
            r({
                target: "Iterator",
                proto: !0,
                real: !0
            }, {
                toArray: function() {
                    var e = [];
                    return a(i(o(this)), l, {
                        that: e,
                        IS_RECORD: !0
                    }), e
                }
            })
        },
        6863: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6724),
                a = n(6024),
                i = n(4520),
                l = n(4265),
                s = n(9565),
                c = n(7137),
                u = n(4935),
                d = n(7426),
                h = n(3876),
                f = a.Symbol,
                v = f && f.prototype;
            if (o && s(f) && (!("description" in v) || void 0 !== f().description)) {
                var p = {},
                    m = function() {
                        var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                            t = c(v, this) ? new f(e) : void 0 === e ? f() : f(e);
                        return "" === e && (p[t] = !0), t
                    };
                h(m, f), m.prototype = v, v.constructor = m;
                var g = "Symbol(description detection)" === String(f("description detection")),
                    y = i(v.valueOf),
                    b = i(v.toString),
                    w = /^Symbol\((.*)\)[^)]+$/,
                    k = i("".replace),
                    x = i("".slice);
                d(v, "description", {
                    configurable: !0,
                    get: function() {
                        var e = y(this);
                        if (l(p, e)) return "";
                        var t = b(e),
                            n = g ? x(t, 7, -1) : k(t, w, "$1");
                        return "" === n ? void 0 : n
                    }
                }), r({
                    global: !0,
                    constructor: !0,
                    forced: !0
                }, {
                    Symbol: m
                })
            }
        },
        6886: (e, t, n) => {
            "use strict";
            n.d(t, {
                EH: () => j,
                Hr: () => T,
                IJ: () => Be,
                KZ: () => B,
                Ki: () => R,
                NT: () => V,
                QQ: () => N,
                RZ: () => we,
                Rc: () => O,
                To: () => C,
                YG: () => Me,
                Y_: () => U,
                Zg: () => I,
                a: () => xe,
                a0: () => fe,
                dO: () => Te,
                gb: () => E,
                jK: () => Se,
                n5: () => M,
                on: () => z,
                q6: () => Y,
                rg: () => be,
                sE: () => r,
                v6: () => ye,
                vA: () => L,
                vP: () => q,
                vz: () => P,
                wv: () => Ae
            });
            n(6863), n(6240), n(1369), n(9144), n(5226), n(8626), n(5658), n(1954), n(876), n(2597), n(460), n(435), n(3080), n(234), n(9784), n(3351), n(9296), n(549), n(3238), n(3531), n(5073), n(2098);
            const r = {
                context: void 0,
                registry: void 0,
                effects: void 0,
                done: !1,
                getContextId() {
                    return o(this.context.count)
                },
                getNextContextId() {
                    return o(this.context.count++)
                }
            };

            function o(e) {
                const t = String(e),
                    n = t.length - 1;
                return r.context.id + (n ? String.fromCharCode(96 + n) : "") + t
            }

            function a(e) {
                r.context = e
            }
            const i = (e, t) => e === t,
                l = Symbol("solid-proxy"),
                s = "function" == typeof Proxy,
                c = Symbol("solid-track"),
                u = (Symbol("solid-dev-component"), {
                    equals: i
                });
            let d = null,
                h = Q;
            const f = 1,
                v = 2,
                p = {
                    owned: null,
                    cleanups: null,
                    context: null,
                    owner: null
                },
                m = {};
            var g = null;
            let y = null,
                b = null,
                w = null,
                k = null,
                x = null,
                S = null,
                A = 0;

            function T(e, t) {
                const n = k,
                    r = g,
                    o = 0 === e.length,
                    a = void 0 === t ? r : t,
                    i = o ? p : {
                        owned: null,
                        cleanups: null,
                        context: a ? a.context : null,
                        owner: a
                    },
                    l = o ? e : () => e((() => P((() => re(i)))));
                g = i, k = null;
                try {
                    return X(l, !0)
                } finally {
                    k = n, g = r
                }
            }

            function M(e, t) {
                const n = {
                    value: e,
                    observers: null,
                    observerSlots: null,
                    comparator: (t = t ? Object.assign({}, u, t) : u).equals || void 0
                };
                return [G.bind(n), e => ("function" == typeof e && (e = y && y.running && y.sources.has(n) ? e(n.tValue) : e(n.value)), K(n, e))]
            }

            function B(e, t, n) {
                const r = $(e, t, !0, f);
                b && y && y.running ? x.push(r) : W(r)
            }

            function E(e, t, n) {
                const r = $(e, t, !1, f);
                b && y && y.running ? x.push(r) : W(r)
            }

            function j(e, t, n) {
                h = ee;
                const r = $(e, t, !1, f),
                    o = H && V(H);
                o && (r.suspense = o), n && n.render || (r.user = !0), S ? S.push(r) : W(r)
            }

            function C(e, t, n) {
                n = n ? Object.assign({}, u, n) : u;
                const r = $(e, t, !0, 0);
                return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, b && y && y.running ? (r.tState = f, x.push(r)) : W(r), G.bind(r)
            }

            function I(e, t, n) {
                let o, a, i;
                "function" == typeof t ? (o = e, a = t, i = n || {}) : (o = !0, a = e, i = t || {});
                let l = null,
                    s = m,
                    c = null,
                    u = !1,
                    d = !1,
                    h = "initialValue" in i,
                    f = "function" == typeof o && C(o);
                const v = new Set,
                    [p, g] = (i.storage || M)(i.initialValue),
                    [b, w] = M(void 0),
                    [x, S] = M(void 0, {
                        equals: !1
                    }),
                    [A, T] = M(h ? "ready" : "unresolved");

                function E(e, t, n, r) {
                    return l === e && (l = null, void 0 !== r && (h = !0), e !== s && t !== s || !i.onHydrated || queueMicrotask((() => i.onHydrated(r, {
                        value: t
                    }))), s = m, y && e && u ? (y.promises.delete(e), u = !1, X((() => {
                        y.running = !0, j(t, n)
                    }), !1)) : j(t, n)), t
                }

                function j(e, t) {
                    X((() => {
                        void 0 === t && g((() => e)), T(void 0 !== t ? "errored" : h ? "ready" : "unresolved"), w(t);
                        for (const e of v.keys()) e.decrement();
                        v.clear()
                    }), !1)
                }

                function I() {
                    const e = H && V(H),
                        t = p(),
                        n = b();
                    if (void 0 !== n && !l) throw n;
                    return k && !k.user && e && B((() => {
                        x(), l && (e.resolved && y && u ? y.promises.add(l) : v.has(e) || (e.increment(), v.add(e)))
                    })), t
                }

                function L(e = !0) {
                    if (!1 !== e && d) return;
                    d = !1;
                    const t = f ? f() : o;
                    if (u = y && y.running, null == t || !1 === t) return void E(l, P(p));
                    y && l && y.promises.delete(l);
                    const n = s !== m ? s : P((() => a(t, {
                        value: p(),
                        refetching: e
                    })));
                    return (r = n) && "object" == typeof r && "then" in r ? (l = n, "value" in n ? ("success" === n.status ? E(l, n.value, void 0, t) : E(l, void 0, ae(n.value), t), n) : (d = !0, queueMicrotask((() => d = !1)), X((() => {
                        T(h ? "refreshing" : "pending"), S()
                    }), !1), n.then((e => E(n, e, void 0, t)), (e => E(n, void 0, ae(e), t))))) : (E(l, n, void 0, t), n);
                    var r
                }
                return r.context && (c = r.getNextContextId(), "initial" === i.ssrLoadFrom ? s = i.initialValue : r.load && r.has(c) && (s = r.load(c))), Object.defineProperties(I, {
                    state: {
                        get: () => A()
                    },
                    error: {
                        get: () => b()
                    },
                    loading: {
                        get() {
                            const e = A();
                            return "pending" === e || "refreshing" === e
                        }
                    },
                    latest: {
                        get() {
                            if (!h) return I();
                            const e = b();
                            if (e && !l) throw e;
                            return p()
                        }
                    }
                }), f ? B((() => L(!1))) : L(!1), [I, {
                    refetch: L,
                    mutate: g
                }]
            }

            function L(e) {
                return X(e, !1)
            }

            function P(e) {
                if (!w && null === k) return e();
                const t = k;
                k = null;
                try {
                    return w ? w.untrack(e) : e()
                } finally {
                    k = t
                }
            }

            function z(e, t, n) {
                const r = Array.isArray(e);
                let o, a = n && n.defer;
                return n => {
                    let i;
                    if (r) {
                        i = Array(e.length);
                        for (let t = 0; t < e.length; t++) i[t] = e[t]()
                    } else i = e();
                    if (a) return a = !1, n;
                    const l = P((() => t(i, o, n)));
                    return o = i, l
                }
            }

            function O(e) {
                j((() => P(e)))
            }

            function R(e) {
                return null === g || (null === g.cleanups ? g.cleanups = [e] : g.cleanups.push(e)), e
            }

            function N() {
                return g
            }

            function q(e, t) {
                const n = g,
                    r = k;
                g = e, k = null;
                try {
                    return X(t, !0)
                } catch (e) {
                    le(e)
                } finally {
                    g = n, k = r
                }
            }

            function F(e) {
                if (y && y.running) return e(), y.done;
                const t = k,
                    n = g;
                return Promise.resolve().then((() => {
                    let r;
                    return k = t, g = n, (b || H) && (r = y || (y = {
                        sources: new Set,
                        effects: [],
                        promises: new Set,
                        disposed: new Set,
                        queue: new Set,
                        running: !0
                    }), r.done || (r.done = new Promise((e => r.resolve = e))), r.running = !0), X(e, !1), k = g = null, r ? r.done : void 0
                }))
            }
            const [_, D] = M(!1);

            function Y(e, t) {
                const n = Symbol("context");
                return {
                    id: n,
                    Provider: ce(n),
                    defaultValue: e
                }
            }

            function V(e) {
                let t;
                return g && g.context && void 0 !== (t = g.context[e.id]) ? t : e.defaultValue
            }

            function U(e) {
                const t = C(e),
                    n = C((() => se(t())));
                return n.toArray = () => {
                    const e = n();
                    return Array.isArray(e) ? e : null != e ? [e] : []
                }, n
            }
            let H;

            function G() {
                const e = y && y.running;
                if (this.sources && (e ? this.tState : this.state))
                    if ((e ? this.tState : this.state) === f) W(this);
                    else {
                        const e = x;
                        x = null, X((() => te(this)), !1), x = e
                    }
                if (k) {
                    const e = this.observers ? this.observers.length : 0;
                    k.sources ? (k.sources.push(this), k.sourceSlots.push(e)) : (k.sources = [this], k.sourceSlots = [e]), this.observers ? (this.observers.push(k), this.observerSlots.push(k.sources.length - 1)) : (this.observers = [k], this.observerSlots = [k.sources.length - 1])
                }
                return e && y.sources.has(this) ? this.tValue : this.value
            }

            function K(e, t, n) {
                let r = y && y.running && y.sources.has(e) ? e.tValue : e.value;
                if (!e.comparator || !e.comparator(r, t)) {
                    if (y) {
                        const r = y.running;
                        (r || !n && y.sources.has(e)) && (y.sources.add(e), e.tValue = t), r || (e.value = t)
                    } else e.value = t;
                    e.observers && e.observers.length && X((() => {
                        for (let t = 0; t < e.observers.length; t += 1) {
                            const n = e.observers[t],
                                r = y && y.running;
                            r && y.disposed.has(n) || ((r ? n.tState : n.state) || (n.pure ? x.push(n) : S.push(n), n.observers && ne(n)), r ? n.tState = f : n.state = f)
                        }
                        if (x.length > 1e6) throw x = [], new Error
                    }), !1)
                }
                return t
            }

            function W(e) {
                if (!e.fn) return;
                re(e);
                const t = A;
                Z(e, y && y.running && y.sources.has(e) ? e.tValue : e.value, t), y && !y.running && y.sources.has(e) && queueMicrotask((() => {
                    X((() => {
                        y && (y.running = !0), k = g = e, Z(e, e.tValue, t), k = g = null
                    }), !1)
                }))
            }

            function Z(e, t, n) {
                let r;
                const o = g,
                    a = k;
                k = g = e;
                try {
                    r = e.fn(t)
                } catch (t) {
                    return e.pure && (y && y.running ? (e.tState = f, e.tOwned && e.tOwned.forEach(re), e.tOwned = void 0) : (e.state = f, e.owned && e.owned.forEach(re), e.owned = null)), e.updatedAt = n + 1, le(t)
                } finally {
                    k = a, g = o
                }(!e.updatedAt || e.updatedAt <= n) && (null != e.updatedAt && "observers" in e ? K(e, r, !0) : y && y.running && e.pure ? (y.sources.add(e), e.tValue = r) : e.value = r, e.updatedAt = n)
            }

            function $(e, t, n, r = f, o) {
                const a = {
                    fn: e,
                    state: r,
                    updatedAt: null,
                    owned: null,
                    sources: null,
                    sourceSlots: null,
                    cleanups: null,
                    value: t,
                    owner: g,
                    context: g ? g.context : null,
                    pure: n
                };
                if (y && y.running && (a.state = 0, a.tState = r), null === g || g !== p && (y && y.running && g.pure ? g.tOwned ? g.tOwned.push(a) : g.tOwned = [a] : g.owned ? g.owned.push(a) : g.owned = [a]), w && a.fn) {
                    const [e, t] = M(void 0, {
                        equals: !1
                    }), n = w.factory(a.fn, t);
                    R((() => n.dispose()));
                    const r = () => F(t).then((() => o.dispose())),
                        o = w.factory(a.fn, r);
                    a.fn = t => (e(), y && y.running ? o.track(t) : n.track(t))
                }
                return a
            }

            function J(e) {
                const t = y && y.running;
                if (0 === (t ? e.tState : e.state)) return;
                if ((t ? e.tState : e.state) === v) return te(e);
                if (e.suspense && P(e.suspense.inFallback)) return e.suspense.effects.push(e);
                const n = [e];
                for (;
                    (e = e.owner) && (!e.updatedAt || e.updatedAt < A);) {
                    if (t && y.disposed.has(e)) return;
                    (t ? e.tState : e.state) && n.push(e)
                }
                for (let r = n.length - 1; r >= 0; r--) {
                    if (e = n[r], t) {
                        let t = e,
                            o = n[r + 1];
                        for (;
                            (t = t.owner) && t !== o;)
                            if (y.disposed.has(t)) return
                    }
                    if ((t ? e.tState : e.state) === f) W(e);
                    else if ((t ? e.tState : e.state) === v) {
                        const t = x;
                        x = null, X((() => te(e, n[0])), !1), x = t
                    }
                }
            }

            function X(e, t) {
                if (x) return e();
                let n = !1;
                t || (x = []), S ? n = !0 : S = [], A++;
                try {
                    const t = e();
                    return function(e) {
                        x && (b && y && y.running ? function(e) {
                            for (let t = 0; t < e.length; t++) {
                                const n = e[t],
                                    r = y.queue;
                                r.has(n) || (r.add(n), b((() => {
                                    r.delete(n), X((() => {
                                        y.running = !0, J(n)
                                    }), !1), y && (y.running = !1)
                                })))
                            }
                        }(x) : Q(x), x = null);
                        if (e) return;
                        let t;
                        if (y)
                            if (y.promises.size || y.queue.size) {
                                if (y.running) return y.running = !1, y.effects.push.apply(y.effects, S), S = null, void D(!0)
                            } else {
                                const e = y.sources,
                                    n = y.disposed;
                                S.push.apply(S, y.effects), t = y.resolve;
                                for (const e of S) "tState" in e && (e.state = e.tState), delete e.tState;
                                y = null, X((() => {
                                    for (const e of n) re(e);
                                    for (const t of e) {
                                        if (t.value = t.tValue, t.owned)
                                            for (let e = 0, n = t.owned.length; e < n; e++) re(t.owned[e]);
                                        t.tOwned && (t.owned = t.tOwned), delete t.tValue, delete t.tOwned, t.tState = 0
                                    }
                                    D(!1)
                                }), !1)
                            }
                        const n = S;
                        S = null, n.length && X((() => h(n)), !1);
                        t && t()
                    }(n), t
                } catch (e) {
                    n || (S = null), x = null, le(e)
                }
            }

            function Q(e) {
                for (let t = 0; t < e.length; t++) J(e[t])
            }

            function ee(e) {
                let t, n = 0;
                for (t = 0; t < e.length; t++) {
                    const r = e[t];
                    r.user ? e[n++] = r : J(r)
                }
                if (r.context) {
                    if (r.count) return r.effects || (r.effects = []), void r.effects.push(...e.slice(0, n));
                    a()
                }
                for (!r.effects || !r.done && r.count || (e = [...r.effects, ...e], n += r.effects.length, delete r.effects), t = 0; t < n; t++) J(e[t])
            }

            function te(e, t) {
                const n = y && y.running;
                n ? e.tState = 0 : e.state = 0;
                for (let r = 0; r < e.sources.length; r += 1) {
                    const o = e.sources[r];
                    if (o.sources) {
                        const e = n ? o.tState : o.state;
                        e === f ? o !== t && (!o.updatedAt || o.updatedAt < A) && J(o) : e === v && te(o, t)
                    }
                }
            }

            function ne(e) {
                const t = y && y.running;
                for (let n = 0; n < e.observers.length; n += 1) {
                    const r = e.observers[n];
                    (t ? r.tState : r.state) || (t ? r.tState = v : r.state = v, r.pure ? x.push(r) : S.push(r), r.observers && ne(r))
                }
            }

            function re(e) {
                let t;
                if (e.sources)
                    for (; e.sources.length;) {
                        const t = e.sources.pop(),
                            n = e.sourceSlots.pop(),
                            r = t.observers;
                        if (r && r.length) {
                            const e = r.pop(),
                                o = t.observerSlots.pop();
                            n < r.length && (e.sourceSlots[o] = n, r[n] = e, t.observerSlots[n] = o)
                        }
                    }
                if (e.tOwned) {
                    for (t = e.tOwned.length - 1; t >= 0; t--) re(e.tOwned[t]);
                    delete e.tOwned
                }
                if (y && y.running && e.pure) oe(e, !0);
                else if (e.owned) {
                    for (t = e.owned.length - 1; t >= 0; t--) re(e.owned[t]);
                    e.owned = null
                }
                if (e.cleanups) {
                    for (t = e.cleanups.length - 1; t >= 0; t--) e.cleanups[t]();
                    e.cleanups = null
                }
                y && y.running ? e.tState = 0 : e.state = 0
            }

            function oe(e, t) {
                if (t || (e.tState = 0, y.disposed.add(e)), e.owned)
                    for (let t = 0; t < e.owned.length; t++) oe(e.owned[t])
            }

            function ae(e) {
                return e instanceof Error ? e : new Error("string" == typeof e ? e : "Unknown error", {
                    cause: e
                })
            }

            function ie(e, t, n) {
                try {
                    for (const n of t) n(e)
                } catch (e) {
                    le(e, n && n.owner || null)
                }
            }

            function le(e, t = g) {
                const n = d && t && t.context && t.context[d],
                    r = ae(e);
                if (!n) throw r;
                S ? S.push({
                    fn() {
                        ie(r, n, t)
                    },
                    state: f
                }) : ie(r, n, t)
            }

            function se(e) {
                if ("function" == typeof e && !e.length) return se(e());
                if (Array.isArray(e)) {
                    const t = [];
                    for (let n = 0; n < e.length; n++) {
                        const r = se(e[n]);
                        Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
                    }
                    return t
                }
                return e
            }

            function ce(e, t) {
                return function(t) {
                    let n;
                    return E((() => n = P((() => (g.context = { ...g.context,
                        [e]: t.value
                    }, U((() => t.children)))))), void 0), n
                }
            }
            const ue = Symbol("fallback");

            function de(e) {
                for (let t = 0; t < e.length; t++) e[t]()
            }
            let he = !1;

            function fe(e, t) {
                if (he && r.context) {
                    const n = r.context;
                    a({ ...r.context,
                        id: r.getNextContextId(),
                        count: 0
                    });
                    const o = P((() => e(t || {})));
                    return a(n), o
                }
                return P((() => e(t || {})))
            }

            function ve() {
                return !0
            }
            const pe = {
                get(e, t, n) {
                    return t === l ? n : e.get(t)
                },
                has(e, t) {
                    return t === l || e.has(t)
                },
                set: ve,
                deleteProperty: ve,
                getOwnPropertyDescriptor(e, t) {
                    return {
                        configurable: !0,
                        enumerable: !0,
                        get() {
                            return e.get(t)
                        },
                        set: ve,
                        deleteProperty: ve
                    }
                },
                ownKeys(e) {
                    return e.keys()
                }
            };

            function me(e) {
                return (e = "function" == typeof e ? e() : e) ? e : {}
            }

            function ge() {
                for (let e = 0, t = this.length; e < t; ++e) {
                    const t = this[e]();
                    if (void 0 !== t) return t
                }
            }

            function ye(...e) {
                let t = !1;
                for (let n = 0; n < e.length; n++) {
                    const r = e[n];
                    t = t || !!r && l in r, e[n] = "function" == typeof r ? (t = !0, C(r)) : r
                }
                if (s && t) return new Proxy({
                    get(t) {
                        for (let n = e.length - 1; n >= 0; n--) {
                            const r = me(e[n])[t];
                            if (void 0 !== r) return r
                        }
                    },
                    has(t) {
                        for (let n = e.length - 1; n >= 0; n--)
                            if (t in me(e[n])) return !0;
                        return !1
                    },
                    keys() {
                        const t = [];
                        for (let n = 0; n < e.length; n++) t.push(...Object.keys(me(e[n])));
                        return [...new Set(t)]
                    }
                }, pe);
                const n = {},
                    r = Object.create(null);
                for (let t = e.length - 1; t >= 0; t--) {
                    const o = e[t];
                    if (!o) continue;
                    const a = Object.getOwnPropertyNames(o);
                    for (let e = a.length - 1; e >= 0; e--) {
                        const t = a[e];
                        if ("__proto__" === t || "constructor" === t) continue;
                        const i = Object.getOwnPropertyDescriptor(o, t);
                        if (r[t]) {
                            const e = n[t];
                            e && (i.get ? e.push(i.get.bind(o)) : void 0 !== i.value && e.push((() => i.value)))
                        } else r[t] = i.get ? {
                            enumerable: !0,
                            configurable: !0,
                            get: ge.bind(n[t] = [i.get.bind(o)])
                        } : void 0 !== i.value ? i : void 0
                    }
                }
                const o = {},
                    a = Object.keys(r);
                for (let e = a.length - 1; e >= 0; e--) {
                    const t = a[e],
                        n = r[t];
                    n && n.get ? Object.defineProperty(o, t, n) : o[t] = n ? n.value : void 0
                }
                return o
            }

            function be(e, ...t) {
                if (s && l in e) {
                    const n = new Set(t.length > 1 ? t.flat() : t[0]),
                        r = t.map((t => new Proxy({
                            get(n) {
                                return t.includes(n) ? e[n] : void 0
                            },
                            has(n) {
                                return t.includes(n) && n in e
                            },
                            keys() {
                                return t.filter((t => t in e))
                            }
                        }, pe)));
                    return r.push(new Proxy({
                        get(t) {
                            return n.has(t) ? void 0 : e[t]
                        },
                        has(t) {
                            return !n.has(t) && t in e
                        },
                        keys() {
                            return Object.keys(e).filter((e => !n.has(e)))
                        }
                    }, pe)), r
                }
                const n = {},
                    r = t.map((() => ({})));
                for (const o of Object.getOwnPropertyNames(e)) {
                    const a = Object.getOwnPropertyDescriptor(e, o),
                        i = !a.get && !a.set && a.enumerable && a.writable && a.configurable;
                    let l = !1,
                        s = 0;
                    for (const e of t) e.includes(o) && (l = !0, i ? r[s][o] = a.value : Object.defineProperty(r[s], o, a)), ++s;
                    l || (i ? n[o] = a.value : Object.defineProperty(n, o, a))
                }
                return [...r, n]
            }

            function we(e) {
                let t, n;
                const o = o => {
                    const i = r.context;
                    if (i) {
                        const [o, l] = M();
                        r.count || (r.count = 0), r.count++, (n || (n = e())).then((e => {
                            !r.done && a(i), r.count--, l((() => e.default)), a()
                        })), t = o
                    } else if (!t) {
                        const [r] = I((() => (n || (n = e())).then((e => e.default))));
                        t = r
                    }
                    let l;
                    return C((() => (l = t()) ? P((() => {
                        if (!i || r.done) return l(o);
                        const e = r.context;
                        a(i);
                        const t = l(o);
                        return a(e), t
                    })) : ""))
                };
                return o.preload = () => n || ((n = e()).then((e => t = () => e.default)), n), o
            }
            const ke = e => `Stale read from <${e}>.`;

            function xe(e) {
                const t = "fallback" in e && {
                    fallback: () => e.fallback
                };
                return C(function(e, t, n = {}) {
                    let r = [],
                        o = [],
                        a = [],
                        i = 0,
                        l = t.length > 1 ? [] : null;
                    return R((() => de(a))), () => {
                        let s, u, d = e() || [],
                            h = d.length;
                        return d[c], P((() => {
                            let e, t, c, v, p, m, g, y, b;
                            if (0 === h) 0 !== i && (de(a), a = [], r = [], o = [], i = 0, l && (l = [])), n.fallback && (r = [ue], o[0] = T((e => (a[0] = e, n.fallback()))), i = 1);
                            else if (0 === i) {
                                for (o = new Array(h), u = 0; u < h; u++) r[u] = d[u], o[u] = T(f);
                                i = h
                            } else {
                                for (c = new Array(h), v = new Array(h), l && (p = new Array(h)), m = 0, g = Math.min(i, h); m < g && r[m] === d[m]; m++);
                                for (g = i - 1, y = h - 1; g >= m && y >= m && r[g] === d[y]; g--, y--) c[y] = o[g], v[y] = a[g], l && (p[y] = l[g]);
                                for (e = new Map, t = new Array(y + 1), u = y; u >= m; u--) b = d[u], s = e.get(b), t[u] = void 0 === s ? -1 : s, e.set(b, u);
                                for (s = m; s <= g; s++) b = r[s], u = e.get(b), void 0 !== u && -1 !== u ? (c[u] = o[s], v[u] = a[s], l && (p[u] = l[s]), u = t[u], e.set(b, u)) : a[s]();
                                for (u = m; u < h; u++) u in c ? (o[u] = c[u], a[u] = v[u], l && (l[u] = p[u], l[u](u))) : o[u] = T(f);
                                o = o.slice(0, i = h), r = d.slice(0)
                            }
                            return o
                        }));

                        function f(e) {
                            if (a[u] = e, l) {
                                const [e, n] = M(u);
                                return l[u] = n, t(d[u], e)
                            }
                            return t(d[u])
                        }
                    }
                }((() => e.each), e.children, t || void 0))
            }

            function Se(e) {
                const t = "fallback" in e && {
                    fallback: () => e.fallback
                };
                return C(function(e, t, n = {}) {
                    let r, o = [],
                        a = [],
                        i = [],
                        l = [],
                        s = 0;
                    return R((() => de(i))), () => {
                        const u = e() || [],
                            d = u.length;
                        return u[c], P((() => {
                            if (0 === d) return 0 !== s && (de(i), i = [], o = [], a = [], s = 0, l = []), n.fallback && (o = [ue], a[0] = T((e => (i[0] = e, n.fallback()))), s = 1), a;
                            for (o[0] === ue && (i[0](), i = [], o = [], a = [], s = 0), r = 0; r < d; r++) r < o.length && o[r] !== u[r] ? l[r]((() => u[r])) : r >= o.length && (a[r] = T(h));
                            for (; r < o.length; r++) i[r]();
                            return s = l.length = i.length = d, o = u.slice(0), a = a.slice(0, s)
                        }));

                        function h(e) {
                            i[r] = e;
                            const [n, o] = M(u[r]);
                            return l[r] = o, t(n, r)
                        }
                    }
                }((() => e.each), e.children, t || void 0))
            }

            function Ae(e) {
                const t = e.keyed,
                    n = C((() => e.when), void 0, {
                        equals: (e, n) => t ? e === n : !e == !n
                    });
                return C((() => {
                    const r = n();
                    if (r) {
                        const o = e.children;
                        return "function" == typeof o && o.length > 0 ? P((() => o(t ? r : () => {
                            if (!P(n)) throw ke("Show");
                            return e.when
                        }))) : o
                    }
                    return e.fallback
                }), void 0, void 0)
            }

            function Te(e) {
                let t = !1;
                const n = U((() => e.children)),
                    r = C((() => {
                        let e = n();
                        Array.isArray(e) || (e = [e]);
                        for (let n = 0; n < e.length; n++) {
                            const r = e[n].when;
                            if (r) return t = !!e[n].keyed, [n, r, e[n]]
                        }
                        return [-1]
                    }), void 0, {
                        equals: (e, n) => (t ? e[1] === n[1] : !e[1] == !n[1]) && e[2] === n[2]
                    });
                return C((() => {
                    const [n, o, a] = r();
                    if (n < 0) return e.fallback;
                    const i = a.children;
                    return "function" == typeof i && i.length > 0 ? P((() => i(t ? o : () => {
                        if (P(r)[0] !== n) throw ke("Match");
                        return a.when
                    }))) : i
                }), void 0, void 0)
            }

            function Me(e) {
                return e
            }
            const Be = void 0
        },
        6921: (e, t, n) => {
            "use strict";
            e.exports = n.p + "a746d1fa53faf338bb5f.ttf"
        },
        6934: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => M,
                Y: () => B
            });
            var r = n(8224),
                o = n(6886),
                a = (n(9144), n(9784), n(9296), n(5073), n(8870)),
                i = n(7500),
                l = n.n(i),
                s = n(1727),
                c = n.n(s),
                u = n(8156),
                d = n.n(u),
                h = n(9792),
                f = n.n(h),
                v = n(3735),
                p = n.n(v),
                m = n(2283),
                g = n.n(m),
                y = n(7128),
                b = n.n(y),
                w = n(1599),
                k = {};
            k.styleTagTransform = b(), k.setAttributes = p(), k.insert = f().bind(null, "head"), k.domAPI = d(), k.insertStyleElement = g();
            c()(w.A, k);
            const x = w.A && w.A.locals ? w.A.locals : void 0;
            var S = (0, r.vs)("<div>"),
                A = (0, r.vs)("<div><div></div><div>");
            const T = (0, o.q6)({}),
                M = e => {
                    const [t, n] = (0, o.n5)([]);
                    return (0, o.a0)(T.Provider, {
                        value: {
                            show: ({
                                title: e,
                                message: t,
                                timeout: r = 3e3
                            }) => {
                                const o = setTimeout((() => {
                                    n((e => e.filter((e => e.id !== o))))
                                }), r);
                                n((n => [{
                                    id: o,
                                    title: e,
                                    message: t
                                }, ...n]))
                            }
                        },
                        get children() {
                            return [(0, o.To)((() => e.children)), (n = S(), (0, r.Yr)(n, (0, o.a0)(a.F, {
                                get name() {
                                    return e.transition
                                },
                                get children() {
                                    return (0, o.a0)(o.a, {
                                        get each() {
                                            return t()
                                        },
                                        children: t => {
                                            return n = A(), a = n.firstChild, i = a.nextSibling, (0, r.Yr)(a, (() => t.title)), (0, r.Yr)(i, (() => t.message)), (0, o.gb)((t => {
                                                var o = l()(x.toast, e.class),
                                                    s = x.title,
                                                    c = x.message;
                                                return o !== t.e && (0, r.s7)(n, t.e = o), s !== t.t && (0, r.s7)(a, t.t = s), c !== t.a && (0, r.s7)(i, t.a = c), t
                                            }), {
                                                e: void 0,
                                                t: void 0,
                                                a: void 0
                                            }), n;
                                            var n, a, i
                                        }
                                    })
                                }
                            })), (0, o.gb)((() => (0, r.s7)(n, x["toast-container"]))), n)];
                            var n
                        }
                    })
                },
                B = () => (0, o.NT)(T)
        },
        6946: (e, t, n) => {
            "use strict";
            var r = n(2369).IteratorPrototype,
                o = n(6448),
                a = n(5644),
                i = n(135),
                l = n(2245),
                s = function() {
                    return this
                };
            e.exports = function(e, t, n, c) {
                var u = t + " Iterator";
                return e.prototype = o(r, {
                    next: a(+!c, n)
                }), i(e, u, !1, !0), l[u] = s, e
            }
        },
        7e3: (e, t, n) => {
            "use strict";
            var r = n(7255);
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        7016: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".button-FYnSC {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  min-height: 5.5rem;\n  padding: 0 2rem;\n  border: none;\n  border-radius: 1rem;\n  background-color: transparent;\n  user-select: none;\n  outline: none;\n  transition: background-color 0.1s ease-out;\n  border: 0.2rem solid transparent;\n}\n.button-FYnSC > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.button-FYnSC > :first-child {\n  margin-left: 0;\n}\n.button-FYnSC > :last-child {\n  margin-right: 0;\n}\n.button-FYnSC .icon-vMHfQ {\n  flex: 0 0 auto;\n  height: calc(3.5rem - 1.5rem);\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.button-FYnSC .label-M7e3J {\n  flex: 0 0 auto;\n  font-family: 'PlusJakartaSans';\n  font-size: 1.6rem;\n  font-weight: 600;\n  line-height: 1.6rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.button-FYnSC[focused],\n.button-FYnSC:hover {\n  background-color: #2a2a2d;\n}\n.button-FYnSC[focused] .icon-vMHfQ,\n.button-FYnSC:hover .icon-vMHfQ,\n.button-FYnSC.selected .icon-vMHfQ,\n.button-FYnSC[focused] .label-M7e3J,\n.button-FYnSC:hover .label-M7e3J,\n.button-FYnSC.selected .label-M7e3J {\n  color: hsla(0, 0%, 100%, 0.9);\n}\n", ""]), i.locals = {
                button: "button-FYnSC",
                icon: "icon-vMHfQ",
                label: "label-M7e3J"
            };
            const l = i
        },
        7021: (e, t, n) => {
            "use strict";
            var r = n(8666);
            e.exports = function(e) {
                return r(e) || null === e
            }
        },
        7085: (e, t, n) => {
            "use strict";
            var r = n(5262),
                o = Object;
            e.exports = function(e) {
                return o(r(e))
            }
        },
        7128: e => {
            "use strict";
            e.exports = function(e, t) {
                if (t.styleSheet) t.styleSheet.cssText = e;
                else {
                    for (; t.firstChild;) t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(e))
                }
            }
        },
        7131: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(2786),
                i = n(4915),
                l = n(6071),
                s = n(4340);
            r({
                target: "Promise",
                stat: !0,
                forced: n(1137)
            }, {
                all: function(e) {
                    var t = this,
                        n = i.f(t),
                        r = n.resolve,
                        c = n.reject,
                        u = l((function() {
                            var n = a(t.resolve),
                                i = [],
                                l = 0,
                                u = 1;
                            s(e, (function(e) {
                                var a = l++,
                                    s = !1;
                                u++, o(n, t, e).then((function(e) {
                                    s || (s = !0, i[a] = e, --u || r(i))
                                }), c)
                            })), --u || r(i)
                        }));
                    return u.error && c(u.value), n.promise
                }
            })
        },
        7132: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, '.item-menu-Ty9h2 {\n  z-index: 99;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.item-menu-Ty9h2 .backdrop-KaBa1 {\n  z-index: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(12, 12, 16, 0.8);\n}\n.item-menu-Ty9h2 .content-ACCI9 {\n  z-index: 1;\n  position: absolute;\n  right: 0;\n  height: 100%;\n  min-width: 27rem;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 0 2em;\n  background-color: #0c0c10;\n  transition: background-color 0.2s ease-out;\n}\n.item-menu-Ty9h2 .content-ACCI9 > * {\n  margin: 0.5em 0 0.5em 0;\n}\n.item-menu-Ty9h2 .content-ACCI9 > :first-child {\n  margin-top: 0;\n}\n.item-menu-Ty9h2 .content-ACCI9 > :last-child {\n  margin-bottom: 0;\n}\n.item-menu-Ty9h2 .content-ACCI9::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -40px;\n  width: 40px;\n  background: linear-gradient(90deg, transparent 10%, rgba(0, 0, 0, 0.15) 100%);\n}\n.item-menu-Ty9h2 .content-ACCI9 .option-OilCL {\n  width: 100%;\n  justify-content: flex-start;\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx {\n  flex: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx > * {\n  margin: 0.75rem 0 0.75rem 0;\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx > :first-child {\n  margin-top: 0;\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx > :last-child {\n  margin-bottom: 0;\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx .image-WYlG_ {\n  height: calc(12rem - 1.5rem);\n  width: calc(12rem - 1.5rem);\n}\n.item-menu-Ty9h2 .content-ACCI9 .error-XxAzx .label-haPaU {\n  font-size: 1.6rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n', ""]), i.locals = {
                "item-menu": "item-menu-Ty9h2",
                backdrop: "backdrop-KaBa1",
                content: "content-ACCI9",
                option: "option-OilCL",
                error: "error-XxAzx",
                image: "image-WYlG_",
                label: "label-haPaU"
            };
            const l = i
        },
        7137: (e, t, n) => {
            "use strict";
            var r = n(4520);
            e.exports = r({}.isPrototypeOf)
        },
        7162: (e, t, n) => {
            "use strict";
            e.exports = n.p + "8165c420538c5a9652ef.png"
        },
        7173: (e, t, n) => {
            "use strict";
            var r, o, a, i = n(9702),
                l = n(6024),
                s = n(8666),
                c = n(9123),
                u = n(4265),
                d = n(4373),
                h = n(3455),
                f = n(7565),
                v = "Object already initialized",
                p = l.TypeError,
                m = l.WeakMap;
            if (i || d.state) {
                var g = d.state || (d.state = new m);
                g.get = g.get, g.has = g.has, g.set = g.set, r = function(e, t) {
                    if (g.has(e)) throw new p(v);
                    return t.facade = e, g.set(e, t), t
                }, o = function(e) {
                    return g.get(e) || {}
                }, a = function(e) {
                    return g.has(e)
                }
            } else {
                var y = h("state");
                f[y] = !0, r = function(e, t) {
                    if (u(e, y)) throw new p(v);
                    return t.facade = e, c(e, y, t), t
                }, o = function(e) {
                    return u(e, y) ? e[y] : {}
                }, a = function(e) {
                    return u(e, y)
                }
            }
            e.exports = {
                set: r,
                get: o,
                has: a,
                enforce: function(e) {
                    return a(e) ? o(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!s(t) || (n = o(t)).type !== e) throw new p("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        7205: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(5735),
                a = n(9565),
                i = n(2227),
                l = n(47),
                s = n(1986),
                c = function() {},
                u = l("Reflect", "construct"),
                d = /^\s*(?:class|function)\b/,
                h = r(d.exec),
                f = !d.test(c),
                v = function(e) {
                    if (!a(e)) return !1;
                    try {
                        return u(c, [], e), !0
                    } catch (e) {
                        return !1
                    }
                },
                p = function(e) {
                    if (!a(e)) return !1;
                    switch (i(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return f || !!h(d, s(e))
                    } catch (e) {
                        return !0
                    }
                };
            p.sham = !0, e.exports = !u || o((function() {
                var e;
                return v(v.call) || !v(Object) || !v((function() {
                    e = !0
                })) || e
            })) ? p : v
        },
        7240: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298),
                a = n(6382),
                i = n(170),
                l = n(2165),
                s = n(877),
                c = n(6243),
                u = o.has,
                d = o.remove;
            e.exports = function(e) {
                var t = r(this),
                    n = l(e),
                    o = a(t);
                return i(t) <= n.size ? s(t, (function(e) {
                    n.includes(e) && d(o, e)
                })) : c(n.getIterator(), (function(e) {
                    u(t, e) && d(o, e)
                })), o
            }
        },
        7247: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(8666),
                a = r.document,
                i = o(a) && o(a.createElement);
            e.exports = function(e) {
                return i ? a.createElement(e) : {}
            }
        },
        7253: (e, t, n) => {
            "use strict";
            n.d(t, {
                D: () => i,
                B: () => l
            });
            var r = n(6886);
            n(9144), n(5658), n(5073);
            const o = (0, r.q6)({});

            function a(e) {
                return n(9047)(`./${e}.json`)
            }
            const i = e => {
                    const [t, n] = (0, r.n5)(e.defaultLocale), [i] = (0, r.Zg)(t, a);
                    return (0, r.a0)(o.Provider, {
                        value: {
                            t: (e, t) => {
                                var n, r;
                                const o = i();
                                return null !== (n = null !== (r = o && o[e]) && void 0 !== r ? r : t) && void 0 !== n ? n : e
                            },
                            setLocale: n
                        },
                        get children() {
                            return e.children
                        }
                    })
                },
                l = () => (0, r.NT)(o)
        },
        7255: (e, t, n) => {
            "use strict";
            var r = n(9159),
                o = n(5735),
                a = n(6024).String;
            e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var e = Symbol("symbol detection");
                return !a(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        7329: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(8666),
                a = n(2189),
                i = n(9654),
                l = n(4678),
                s = n(7835),
                c = TypeError,
                u = s("toPrimitive");
            e.exports = function(e, t) {
                if (!o(e) || a(e)) return e;
                var n, s = i(e, u);
                if (s) {
                    if (void 0 === t && (t = "default"), n = r(s, e, t), !o(n) || a(n)) return n;
                    throw new c("Can't convert object to primitive value")
                }
                return void 0 === t && (t = "number"), l(e, t)
            }
        },
        7335: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6024),
                a = n(2031),
                i = n(6415),
                l = n(9565),
                s = n(7403),
                c = n(7426),
                u = n(6392),
                d = n(5735),
                h = n(4265),
                f = n(7835),
                v = n(2369).IteratorPrototype,
                p = n(6724),
                m = n(8867),
                g = "constructor",
                y = "Iterator",
                b = f("toStringTag"),
                w = TypeError,
                k = o[y],
                x = m || !l(k) || k.prototype !== v || !d((function() {
                    k({})
                })),
                S = function() {
                    if (a(this, v), s(this) === v) throw new w("Abstract class Iterator not directly constructable")
                },
                A = function(e, t) {
                    p ? c(v, e, {
                        configurable: !0,
                        get: function() {
                            return t
                        },
                        set: function(t) {
                            if (i(this), this === v) throw new w("You can't redefine this property");
                            h(this, e) ? this[e] = t : u(this, e, t)
                        }
                    }) : v[e] = t
                };
            h(v, b) || A(b, y), !x && h(v, g) && v[g] !== Object || A(g, S), S.prototype = v, r({
                global: !0,
                constructor: !0,
                forced: x
            }, {
                Iterator: S
            })
        },
        7353: e => {
            "use strict";
            e.exports = function(e, t) {
                return {
                    value: e,
                    done: t
                }
            }
        },
        7403: (e, t, n) => {
            "use strict";
            var r = n(4265),
                o = n(9565),
                a = n(7085),
                i = n(3455),
                l = n(6635),
                s = i("IE_PROTO"),
                c = Object,
                u = c.prototype;
            e.exports = l ? c.getPrototypeOf : function(e) {
                var t = a(e);
                if (r(t, s)) return t[s];
                var n = t.constructor;
                return o(n) && t instanceof n ? n.prototype : t instanceof c ? u : null
            }
        },
        7426: (e, t, n) => {
            "use strict";
            var r = n(4883),
                o = n(553);
            e.exports = function(e, t, n) {
                return n.get && r(n.get, t, {
                    getter: !0
                }), n.set && r(n.set, t, {
                    setter: !0
                }), o.f(e, t, n)
            }
        },
        7470: (e, t, n) => {
            "use strict";
            n(9144), n(2737);
            var r = n(2798),
                o = n(6024),
                a = n(4949),
                i = n(47),
                l = n(6597),
                s = n(4520),
                c = n(6724),
                u = n(5504),
                d = n(5088),
                h = n(7426),
                f = n(9135),
                v = n(135),
                p = n(6946),
                m = n(7173),
                g = n(2031),
                y = n(9565),
                b = n(4265),
                w = n(312),
                k = n(2227),
                x = n(6415),
                S = n(8666),
                A = n(4935),
                T = n(6448),
                M = n(5644),
                B = n(6601),
                E = n(4715),
                j = n(7353),
                C = n(500),
                I = n(7835),
                L = n(1488),
                P = I("iterator"),
                z = "URLSearchParams",
                O = z + "Iterator",
                R = m.set,
                N = m.getterFor(z),
                q = m.getterFor(O),
                F = a("fetch"),
                _ = a("Request"),
                D = a("Headers"),
                Y = _ && _.prototype,
                V = D && D.prototype,
                U = o.TypeError,
                H = o.encodeURIComponent,
                G = String.fromCharCode,
                K = i("String", "fromCodePoint"),
                W = parseInt,
                Z = s("".charAt),
                $ = s([].join),
                J = s([].push),
                X = s("".replace),
                Q = s([].shift),
                ee = s([].splice),
                te = s("".split),
                ne = s("".slice),
                re = s(/./.exec),
                oe = /\+/g,
                ae = /^[0-9a-f]+$/i,
                ie = function(e, t) {
                    var n = ne(e, t, t + 2);
                    return re(ae, n) ? W(n, 16) : NaN
                },
                le = function(e) {
                    for (var t = 0, n = 128; n > 0 && e & n; n >>= 1) t++;
                    return t
                },
                se = function(e) {
                    var t = null;
                    switch (e.length) {
                        case 1:
                            t = e[0];
                            break;
                        case 2:
                            t = (31 & e[0]) << 6 | 63 & e[1];
                            break;
                        case 3:
                            t = (15 & e[0]) << 12 | (63 & e[1]) << 6 | 63 & e[2];
                            break;
                        case 4:
                            t = (7 & e[0]) << 18 | (63 & e[1]) << 12 | (63 & e[2]) << 6 | 63 & e[3]
                    }
                    return t > 1114111 ? null : t
                },
                ce = function(e) {
                    for (var t = (e = X(e, oe, " ")).length, n = "", r = 0; r < t;) {
                        var o = Z(e, r);
                        if ("%" === o) {
                            if ("%" === Z(e, r + 1) || r + 3 > t) {
                                n += "%", r++;
                                continue
                            }
                            var a = ie(e, r + 1);
                            if (a != a) {
                                n += o, r++;
                                continue
                            }
                            r += 2;
                            var i = le(a);
                            if (0 === i) o = G(a);
                            else {
                                if (1 === i || i > 4) {
                                    n += "�", r++;
                                    continue
                                }
                                for (var l = [a], s = 1; s < i && !(++r + 3 > t || "%" !== Z(e, r));) {
                                    var c = ie(e, r + 1);
                                    if (c != c) {
                                        r += 3;
                                        break
                                    }
                                    if (c > 191 || c < 128) break;
                                    J(l, c), r += 2, s++
                                }
                                if (l.length !== i) {
                                    n += "�";
                                    continue
                                }
                                var u = se(l);
                                null === u ? n += "�" : o = K(u)
                            }
                        }
                        n += o, r++
                    }
                    return n
                },
                ue = /[!'()~]|%20/g,
                de = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+"
                },
                he = function(e) {
                    return de[e]
                },
                fe = function(e) {
                    return X(H(e), ue, he)
                },
                ve = p((function(e, t) {
                    R(this, {
                        type: O,
                        target: N(e).entries,
                        index: 0,
                        kind: t
                    })
                }), z, (function() {
                    var e = q(this),
                        t = e.target,
                        n = e.index++;
                    if (!t || n >= t.length) return e.target = null, j(void 0, !0);
                    var r = t[n];
                    switch (e.kind) {
                        case "keys":
                            return j(r.key, !1);
                        case "values":
                            return j(r.value, !1)
                    }
                    return j([r.key, r.value], !1)
                }), !0),
                pe = function(e) {
                    this.entries = [], this.url = null, void 0 !== e && (S(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === Z(e, 0) ? ne(e, 1) : e : A(e)))
                };
            pe.prototype = {
                type: z,
                bindURL: function(e) {
                    this.url = e, this.update()
                },
                parseObject: function(e) {
                    var t, n, r, o, a, i, s, c = this.entries,
                        u = E(e);
                    if (u)
                        for (n = (t = B(e, u)).next; !(r = l(n, t)).done;) {
                            if (a = (o = B(x(r.value))).next, (i = l(a, o)).done || (s = l(a, o)).done || !l(a, o).done) throw new U("Expected sequence with length 2");
                            J(c, {
                                key: A(i.value),
                                value: A(s.value)
                            })
                        } else
                            for (var d in e) b(e, d) && J(c, {
                                key: d,
                                value: A(e[d])
                            })
                },
                parseQuery: function(e) {
                    if (e)
                        for (var t, n, r = this.entries, o = te(e, "&"), a = 0; a < o.length;)(t = o[a++]).length && (n = te(t, "="), J(r, {
                            key: ce(Q(n)),
                            value: ce($(n, "="))
                        }))
                },
                serialize: function() {
                    for (var e, t = this.entries, n = [], r = 0; r < t.length;) e = t[r++], J(n, fe(e.key) + "=" + fe(e.value));
                    return $(n, "&")
                },
                update: function() {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                },
                updateURL: function() {
                    this.url && this.url.update()
                }
            };
            var me = function() {
                    g(this, ge);
                    var e = R(this, new pe(arguments.length > 0 ? arguments[0] : void 0));
                    c || (this.size = e.entries.length)
                },
                ge = me.prototype;
            if (f(ge, {
                    append: function(e, t) {
                        var n = N(this);
                        C(arguments.length, 2), J(n.entries, {
                            key: A(e),
                            value: A(t)
                        }), c || this.length++, n.updateURL()
                    },
                    delete: function(e) {
                        for (var t = N(this), n = C(arguments.length, 1), r = t.entries, o = A(e), a = n < 2 ? void 0 : arguments[1], i = void 0 === a ? a : A(a), l = 0; l < r.length;) {
                            var s = r[l];
                            if (s.key !== o || void 0 !== i && s.value !== i) l++;
                            else if (ee(r, l, 1), void 0 !== i) break
                        }
                        c || (this.size = r.length), t.updateURL()
                    },
                    get: function(e) {
                        var t = N(this).entries;
                        C(arguments.length, 1);
                        for (var n = A(e), r = 0; r < t.length; r++)
                            if (t[r].key === n) return t[r].value;
                        return null
                    },
                    getAll: function(e) {
                        var t = N(this).entries;
                        C(arguments.length, 1);
                        for (var n = A(e), r = [], o = 0; o < t.length; o++) t[o].key === n && J(r, t[o].value);
                        return r
                    },
                    has: function(e) {
                        for (var t = N(this).entries, n = C(arguments.length, 1), r = A(e), o = n < 2 ? void 0 : arguments[1], a = void 0 === o ? o : A(o), i = 0; i < t.length;) {
                            var l = t[i++];
                            if (l.key === r && (void 0 === a || l.value === a)) return !0
                        }
                        return !1
                    },
                    set: function(e, t) {
                        var n = N(this);
                        C(arguments.length, 1);
                        for (var r, o = n.entries, a = !1, i = A(e), l = A(t), s = 0; s < o.length; s++)(r = o[s]).key === i && (a ? ee(o, s--, 1) : (a = !0, r.value = l));
                        a || J(o, {
                            key: i,
                            value: l
                        }), c || (this.size = o.length), n.updateURL()
                    },
                    sort: function() {
                        var e = N(this);
                        L(e.entries, (function(e, t) {
                            return e.key > t.key ? 1 : -1
                        })), e.updateURL()
                    },
                    forEach: function(e) {
                        for (var t, n = N(this).entries, r = w(e, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < n.length;) r((t = n[o++]).value, t.key, this)
                    },
                    keys: function() {
                        return new ve(this, "keys")
                    },
                    values: function() {
                        return new ve(this, "values")
                    },
                    entries: function() {
                        return new ve(this, "entries")
                    }
                }, {
                    enumerable: !0
                }), d(ge, P, ge.entries, {
                    name: "entries"
                }), d(ge, "toString", (function() {
                    return N(this).serialize()
                }), {
                    enumerable: !0
                }), c && h(ge, "size", {
                    get: function() {
                        return N(this).entries.length
                    },
                    configurable: !0,
                    enumerable: !0
                }), v(me, z), r({
                    global: !0,
                    constructor: !0,
                    forced: !u
                }, {
                    URLSearchParams: me
                }), !u && y(D)) {
                var ye = s(V.has),
                    be = s(V.set),
                    we = function(e) {
                        if (S(e)) {
                            var t, n = e.body;
                            if (k(n) === z) return t = e.headers ? new D(e.headers) : new D, ye(t, "content-type") || be(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), T(e, {
                                body: M(0, A(n)),
                                headers: M(0, t)
                            })
                        }
                        return e
                    };
                if (y(F) && r({
                        global: !0,
                        enumerable: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        fetch: function(e) {
                            return F(e, arguments.length > 1 ? we(arguments[1]) : {})
                        }
                    }), y(_)) {
                    var ke = function(e) {
                        return g(this, Y), new _(e, arguments.length > 1 ? we(arguments[1]) : {})
                    };
                    Y.constructor = ke, ke.prototype = Y, r({
                        global: !0,
                        constructor: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        Request: ke
                    })
                }
            }
            e.exports = {
                URLSearchParams: me,
                getState: N
            }
        },
        7500: (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function o() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = i(e, a(n)))
                    }
                    return e
                }

                function a(e) {
                    if ("string" == typeof e || "number" == typeof e) return e;
                    if ("object" != typeof e) return "";
                    if (Array.isArray(e)) return o.apply(null, e);
                    if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                    var t = "";
                    for (var n in e) r.call(e, n) && e[n] && (t = i(t, n));
                    return t
                }

                function i(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
                    return o
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        7565: e => {
            "use strict";
            e.exports = {}
        },
        7597: e => {
            "use strict";
            e.exports = function(e) {
                return null == e
            }
        },
        7632: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597);
            r({
                target: "URL",
                proto: !0,
                enumerable: !0
            }, {
                toJSON: function() {
                    return o(URL.prototype.toString, this)
                }
            })
        },
        7668: (e, t, n) => {
            "use strict";
            var r = n(7205),
                o = n(4095),
                a = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw new a(o(e) + " is not a constructor")
            }
        },
        7672: (e, t, n) => {
            "use strict";
            n(8774)
        },
        7821: e => {
            "use strict";
            var t = Math.ceil,
                n = Math.floor;
            e.exports = Math.trunc || function(e) {
                var r = +e;
                return (r > 0 ? n : t)(r)
            }
        },
        7835: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(4633),
                a = n(4265),
                i = n(9544),
                l = n(7255),
                s = n(7e3),
                c = r.Symbol,
                u = o("wks"),
                d = s ? c.for || c : c && c.withoutSetter || i;
            e.exports = function(e) {
                return a(u, e) || (u[e] = l && a(c, e) ? c[e] : d("Symbol." + e)), u[e]
            }
        },
        7854: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".menu-wrO8D {\n  flex: none;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  color: #0c0c10;\n}\n.menu-wrO8D .heading-_TKTx {\n  flex: 0 0 auto;\n  z-index: 1;\n  position: relative;\n  height: 10rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding-top: 2rem;\n  background: linear-gradient(0deg, transparent, currentcolor 80%);\n  transition: color 0.2s ease-out;\n  pointer-events: none;\n  touch-action: none;\n}\n.menu-wrO8D .heading-_TKTx .title-WzBAl {\n  flex: none;\n  font-size: 2rem;\n  font-weight: bold;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.menu-wrO8D .inner-lJOeL {\n  z-index: 0;\n  flex: auto;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  justify-content: center;\n}\n.menu-wrO8D .inner-lJOeL > * {\n  margin: 0 0.75em 0 0.75em;\n}\n.menu-wrO8D .inner-lJOeL > :first-child {\n  margin-left: 0;\n}\n.menu-wrO8D .inner-lJOeL > :last-child {\n  margin-right: 0;\n}\n", ""]), i.locals = {
                menu: "menu-wrO8D",
                heading: "heading-_TKTx",
                title: "title-WzBAl",
                inner: "inner-lJOeL"
            };
            const l = i
        },
        7898: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(2465);
            r({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: n(8867)
            }, {
                map: o
            })
        },
        7961: (e, t, n) => {
            "use strict";
            n(1468)
        },
        7968: (e, t, n) => {
            "use strict";
            e.exports = n.p + "3e4ef4ab9ee18d67b849.png"
        },
        8031: e => {
            "use strict";
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        8033: (e, t, n) => {
            "use strict";
            var r, o, a, i, l = n(6024),
                s = n(1329),
                c = n(312),
                u = n(9565),
                d = n(4265),
                h = n(5735),
                f = n(8357),
                v = n(5432),
                p = n(7247),
                m = n(500),
                g = n(9328),
                y = n(3289),
                b = l.setImmediate,
                w = l.clearImmediate,
                k = l.process,
                x = l.Dispatch,
                S = l.Function,
                A = l.MessageChannel,
                T = l.String,
                M = 0,
                B = {},
                E = "onreadystatechange";
            h((function() {
                r = l.location
            }));
            var j = function(e) {
                    if (d(B, e)) {
                        var t = B[e];
                        delete B[e], t()
                    }
                },
                C = function(e) {
                    return function() {
                        j(e)
                    }
                },
                I = function(e) {
                    j(e.data)
                },
                L = function(e) {
                    l.postMessage(T(e), r.protocol + "//" + r.host)
                };
            b && w || (b = function(e) {
                m(arguments.length, 1);
                var t = u(e) ? e : S(e),
                    n = v(arguments, 1);
                return B[++M] = function() {
                    s(t, void 0, n)
                }, o(M), M
            }, w = function(e) {
                delete B[e]
            }, y ? o = function(e) {
                k.nextTick(C(e))
            } : x && x.now ? o = function(e) {
                x.now(C(e))
            } : A && !g ? (i = (a = new A).port2, a.port1.onmessage = I, o = c(i.postMessage, i)) : l.addEventListener && u(l.postMessage) && !l.importScripts && r && "file:" !== r.protocol && !h(L) ? (o = L, l.addEventListener("message", I, !1)) : o = E in p("script") ? function(e) {
                f.appendChild(p("script"))[E] = function() {
                    f.removeChild(this), j(e)
                }
            } : function(e) {
                setTimeout(C(e), 0)
            }), e.exports = {
                set: b,
                clear: w
            }
        },
        8071: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(2240),
                a = TypeError,
                i = Object.getOwnPropertyDescriptor,
                l = r && ! function() {
                    if (void 0 !== this) return !0;
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).length = 1
                    } catch (e) {
                        return e instanceof TypeError
                    }
                }();
            e.exports = l ? function(e, t) {
                if (o(e) && !i(e, "length").writable) throw new a("Cannot set read only .length");
                return e.length = t
            } : function(e, t) {
                return e.length = t
            }
        },
        8103: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(5735),
                a = n(8392),
                i = Object,
                l = r("".split);
            e.exports = o((function() {
                return !i("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" === a(e) ? l(e, "") : i(e)
            } : i
        },
        8156: e => {
            "use strict";
            e.exports = function(e) {
                if ("undefined" == typeof document) return {
                    update: function() {},
                    remove: function() {}
                };
                var t = e.insertStyleElement(e);
                return {
                    update: function(n) {
                        ! function(e, t, n) {
                            var r = "";
                            n.supports && (r += "@supports (".concat(n.supports, ") {")), n.media && (r += "@media ".concat(n.media, " {"));
                            var o = void 0 !== n.layer;
                            o && (r += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), r += n.css, o && (r += "}"), n.media && (r += "}"), n.supports && (r += "}");
                            var a = n.sourceMap;
                            a && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(r, e, t.options)
                        }(t, e, n)
                    },
                    remove: function() {
                        ! function(e) {
                            if (null === e.parentNode) return !1;
                            e.parentNode.removeChild(e)
                        }(t)
                    }
                }
            }
        },
        8163: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".tab-jVZYR {\n  position: relative;\n  height: 5.5rem;\n  width: 6rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  border-radius: 1rem 0 0 1rem;\n  opacity: 0.45;\n  transition: opacity 0.1s ease-out;\n}\n.tab-jVZYR .icon-SZKt5 {\n  height: 2.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.tab-jVZYR .label-l7NFN {\n  position: absolute;\n  left: 6rem;\n  right: -10rem;\n  padding-right: 1rem;\n  line-height: 5.5rem;\n  font-size: 1.5rem;\n  font-weight: 600;\n  color: hsla(0, 0%, 100%, 0.9);\n  border-radius: 0 1rem 1rem 0;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n.tab-jVZYR[focused],\n.tab-jVZYR:hover {\n  background-color: #2a2a2d;\n}\n.tab-jVZYR[focused] .label-l7NFN,\n.tab-jVZYR:hover .label-l7NFN {\n  background-color: #2a2a2d;\n}\n.tab-jVZYR[focused],\n.tab-jVZYR:hover,\n.tab-jVZYR.selected-L5m7b {\n  opacity: 1;\n}\n", ""]), i.locals = {
                tab: "tab-jVZYR",
                icon: "icon-SZKt5",
                label: "label-l7NFN",
                selected: "selected-L5m7b"
            };
            const l = i
        },
        8224: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bq: () => p,
                Qi: () => R,
                S$: () => L,
                XX: () => h,
                Yr: () => x,
                Yx: () => k,
                ZL: () => O,
                iF: () => b,
                pP: () => y,
                q2: () => g,
                s7: () => m,
                vs: () => f,
                z_: () => v
            });
            n(6863), n(6240), n(9144), n(5226), n(4705), n(3311), n(1954), n(876), n(2597), n(460), n(435), n(3080), n(234), n(5224), n(9784), n(7961), n(5073), n(2098);
            var r = n(6886);
            const o = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", "allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "inert", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]),
                a = new Set(["innerHTML", "textContent", "innerText", "children"]),
                i = Object.assign(Object.create(null), {
                    className: "class",
                    htmlFor: "for"
                }),
                l = Object.assign(Object.create(null), {
                    class: "className",
                    formnovalidate: {
                        $: "formNoValidate",
                        BUTTON: 1,
                        INPUT: 1
                    },
                    ismap: {
                        $: "isMap",
                        IMG: 1
                    },
                    nomodule: {
                        $: "noModule",
                        SCRIPT: 1
                    },
                    playsinline: {
                        $: "playsInline",
                        VIDEO: 1
                    },
                    readonly: {
                        $: "readOnly",
                        INPUT: 1,
                        TEXTAREA: 1
                    }
                });
            const s = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"]),
                c = new Set(["altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "linearGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use", "view", "vkern"]),
                u = {
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace"
                };
            const d = "_$DX_DELEGATE";

            function h(e, t, n, o = {}) {
                let a;
                return (0, r.Hr)((r => {
                    a = r, t === document ? e() : x(t, e(), t.firstChild ? null : void 0, n)
                }), o.owner), () => {
                    a(), t.textContent = ""
                }
            }

            function f(e, t, n) {
                let o;
                const a = () => {
                        const t = document.createElement("template");
                        return t.innerHTML = e, n ? t.content.firstChild.firstChild : t.content.firstChild
                    },
                    i = t ? () => (0, r.vz)((() => document.importNode(o || (o = a()), !0))) : () => (o || (o = a())).cloneNode(!0);
                return i.cloneNode = i, i
            }

            function v(e, t = window.document) {
                const n = t[d] || (t[d] = new Set);
                for (let r = 0, o = e.length; r < o; r++) {
                    const o = e[r];
                    n.has(o) || (n.add(o), t.addEventListener(o, B))
                }
            }

            function p(e, t, n) {
                A(e) || (null == n ? e.removeAttribute(t) : e.setAttribute(t, n))
            }

            function m(e, t) {
                A(e) || (null == t ? e.removeAttribute("class") : e.className = t)
            }

            function g(e, t, n, r) {
                if (r) Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
                else if (Array.isArray(n)) {
                    const r = n[0];
                    e.addEventListener(t, n[0] = t => r.call(e, n[1], t))
                } else e.addEventListener(t, n, "function" != typeof n && n)
            }

            function y(e, t, n = {}) {
                const r = Object.keys(t || {}),
                    o = Object.keys(n);
                let a, i;
                for (a = 0, i = o.length; a < i; a++) {
                    const r = o[a];
                    r && "undefined" !== r && !t[r] && (T(e, r, !1), delete n[r])
                }
                for (a = 0, i = r.length; a < i; a++) {
                    const o = r[a],
                        i = !!t[o];
                    o && "undefined" !== o && n[o] !== i && i && (T(e, o, !0), n[o] = i)
                }
                return n
            }

            function b(e, t, n) {
                if (!t) return n ? p(e, "style") : t;
                const r = e.style;
                if ("string" == typeof t) return r.cssText = t;
                let o, a;
                for (a in "string" == typeof n && (r.cssText = n = void 0), n || (n = {}), t || (t = {}), n) null == t[a] && r.removeProperty(a), delete n[a];
                for (a in t) o = t[a], o !== n[a] && (r.setProperty(a, o), n[a] = o);
                return n
            }

            function w(e, t = {}, n, o) {
                const a = {};
                return o || (0, r.gb)((() => a.children = E(e, t.children, a.children))), (0, r.gb)((() => "function" == typeof t.ref && k(t.ref, e))), (0, r.gb)((() => function(e, t, n, r, o = {}, a = !1) {
                    t || (t = {});
                    for (const r in o)
                        if (!(r in t)) {
                            if ("children" === r) continue;
                            o[r] = M(e, r, null, o[r], n, a, t)
                        }
                    for (const i in t) {
                        if ("children" === i) {
                            r || E(e, t.children);
                            continue
                        }
                        const l = t[i];
                        o[i] = M(e, i, l, o[i], n, a, t)
                    }
                }(e, t, n, !0, a, !0))), a
            }

            function k(e, t, n) {
                return (0, r.vz)((() => e(t, n)))
            }

            function x(e, t, n, o) {
                if (void 0 === n || o || (o = []), "function" != typeof t) return E(e, t, o, n);
                (0, r.gb)((r => E(e, t(), r, n)), o)
            }

            function S(e) {
                let t, n;
                return A() && (t = r.sE.registry.get(n = r.sE.getNextContextId())) ? (r.sE.completed && r.sE.completed.add(t), r.sE.registry.delete(n), t) : e()
            }

            function A(e) {
                return !!r.sE.context && !r.sE.done && (!e || e.isConnected)
            }

            function T(e, t, n) {
                const r = t.trim().split(/\s+/);
                for (let t = 0, o = r.length; t < o; t++) e.classList.toggle(r[t], n)
            }

            function M(e, t, n, r, c, d, h) {
                let f, w, k, x, S;
                if ("style" === t) return b(e, n, r);
                if ("classList" === t) return y(e, n, r);
                if (n === r) return r;
                if ("ref" === t) d || n(e);
                else if ("on:" === t.slice(0, 3)) {
                    const o = t.slice(3);
                    r && e.removeEventListener(o, r, "function" != typeof r && r), n && e.addEventListener(o, n, "function" != typeof n && n)
                } else if ("oncapture:" === t.slice(0, 10)) {
                    const o = t.slice(10);
                    r && e.removeEventListener(o, r, !0), n && e.addEventListener(o, n, !0)
                } else if ("on" === t.slice(0, 2)) {
                    const o = t.slice(2).toLowerCase(),
                        a = s.has(o);
                    if (!a && r) {
                        const t = Array.isArray(r) ? r[0] : r;
                        e.removeEventListener(o, t)
                    }(a || n) && (g(e, o, n, a), a && v([o]))
                } else if ("attr:" === t.slice(0, 5)) p(e, t.slice(5), n);
                else if ("bool:" === t.slice(0, 5)) ! function(e, t, n) {
                    A(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t))
                }(e, t.slice(5), n);
                else if ((S = "prop:" === t.slice(0, 5)) || (k = a.has(t)) || !c && ((x = function(e, t) {
                        const n = l[e];
                        return "object" == typeof n ? n[t] ? n.$ : void 0 : n
                    }(t, e.tagName)) || (w = o.has(t))) || (f = e.nodeName.includes("-") || "is" in h)) {
                    if (S) t = t.slice(5), w = !0;
                    else if (A(e)) return n;
                    "class" === t || "className" === t ? m(e, n) : !f || w || k ? e[x || t] = n : e[(T = t, T.toLowerCase().replace(/-([a-z])/g, ((e, t) => t.toUpperCase())))] = n
                } else {
                    const r = c && t.indexOf(":") > -1 && u[t.split(":")[0]];
                    r ? function(e, t, n, r) {
                        A(e) || (null == r ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r))
                    }(e, r, t, n) : p(e, i[t] || t, n)
                }
                var T;
                return n
            }

            function B(e) {
                if (r.sE.registry && r.sE.events && r.sE.events.find((([t, n]) => n === e))) return;
                let t = e.target;
                const n = `$$${e.type}`,
                    o = e.target,
                    a = e.currentTarget,
                    i = t => Object.defineProperty(e, "target", {
                        configurable: !0,
                        value: t
                    }),
                    l = () => {
                        const r = t[n];
                        if (r && !t.disabled) {
                            const o = t[`${n}Data`];
                            if (void 0 !== o ? r.call(t, o, e) : r.call(t, e), e.cancelBubble) return
                        }
                        return t.host && "string" != typeof t.host && !t.host._$host && t.contains(e.target) && i(t.host), !0
                    },
                    s = () => {
                        for (; l() && (t = t._$host || t.parentNode || t.host););
                    };
                if (Object.defineProperty(e, "currentTarget", {
                        configurable: !0,
                        get() {
                            return t || document
                        }
                    }), r.sE.registry && !r.sE.done && (r.sE.done = _$HY.done = !0), e.composedPath) {
                    const n = e.composedPath();
                    i(n[0]);
                    for (let e = 0; e < n.length - 2 && (t = n[e], l()); e++) {
                        if (t._$host) {
                            t = t._$host, s();
                            break
                        }
                        if (t.parentNode === a) break
                    }
                } else s();
                i(o)
            }

            function E(e, t, n, o, a) {
                const i = A(e);
                if (i) {
                    !n && (n = [...e.childNodes]);
                    let t = [];
                    for (let e = 0; e < n.length; e++) {
                        const r = n[e];
                        8 === r.nodeType && "!$" === r.data.slice(0, 2) ? r.remove() : t.push(r)
                    }
                    n = t
                }
                for (;
                    "function" == typeof n;) n = n();
                if (t === n) return n;
                const l = typeof t,
                    s = void 0 !== o;
                if (e = s && n[0] && n[0].parentNode || e, "string" === l || "number" === l) {
                    if (i) return n;
                    if ("number" === l && (t = t.toString()) === n) return n;
                    if (s) {
                        let r = n[0];
                        r && 3 === r.nodeType ? r.data !== t && (r.data = t) : r = document.createTextNode(t), n = I(e, n, o, r)
                    } else n = "" !== n && "string" == typeof n ? e.firstChild.data = t : e.textContent = t
                } else if (null == t || "boolean" === l) {
                    if (i) return n;
                    n = I(e, n, o)
                } else {
                    if ("function" === l) return (0, r.gb)((() => {
                        let r = t();
                        for (;
                            "function" == typeof r;) r = r();
                        n = E(e, r, n, o)
                    })), () => n;
                    if (Array.isArray(t)) {
                        const l = [],
                            c = n && Array.isArray(n);
                        if (j(l, t, n, a)) return (0, r.gb)((() => n = E(e, l, n, o, !0))), () => n;
                        if (i) {
                            if (!l.length) return n;
                            if (void 0 === o) return n = [...e.childNodes];
                            let t = l[0];
                            if (t.parentNode !== e) return n;
                            const r = [t];
                            for (;
                                (t = t.nextSibling) !== o;) r.push(t);
                            return n = r
                        }
                        if (0 === l.length) {
                            if (n = I(e, n, o), s) return n
                        } else c ? 0 === n.length ? C(e, l, o) : function(e, t, n) {
                            let r = n.length,
                                o = t.length,
                                a = r,
                                i = 0,
                                l = 0,
                                s = t[o - 1].nextSibling,
                                c = null;
                            for (; i < o || l < a;)
                                if (t[i] !== n[l]) {
                                    for (; t[o - 1] === n[a - 1];) o--, a--;
                                    if (o === i) {
                                        const t = a < r ? l ? n[l - 1].nextSibling : n[a - l] : s;
                                        for (; l < a;) e.insertBefore(n[l++], t)
                                    } else if (a === l)
                                        for (; i < o;) c && c.has(t[i]) || t[i].remove(), i++;
                                    else if (t[i] === n[a - 1] && n[l] === t[o - 1]) {
                                        const r = t[--o].nextSibling;
                                        e.insertBefore(n[l++], t[i++].nextSibling), e.insertBefore(n[--a], r), t[o] = n[a]
                                    } else {
                                        if (!c) {
                                            c = new Map;
                                            let e = l;
                                            for (; e < a;) c.set(n[e], e++)
                                        }
                                        const r = c.get(t[i]);
                                        if (null != r)
                                            if (l < r && r < a) {
                                                let s, u = i,
                                                    d = 1;
                                                for (; ++u < o && u < a && null != (s = c.get(t[u])) && s === r + d;) d++;
                                                if (d > r - l) {
                                                    const o = t[i];
                                                    for (; l < r;) e.insertBefore(n[l++], o)
                                                } else e.replaceChild(n[l++], t[i++])
                                            } else i++;
                                        else t[i++].remove()
                                    }
                                } else i++, l++
                        }(e, n, l) : (n && I(e), C(e, l));
                        n = l
                    } else if (t.nodeType) {
                        if (i && t.parentNode) return n = s ? [t] : t;
                        if (Array.isArray(n)) {
                            if (s) return n = I(e, n, o, t);
                            I(e, n, null, t)
                        } else null != n && "" !== n && e.firstChild ? e.replaceChild(t, e.firstChild) : e.appendChild(t);
                        n = t
                    }
                }
                return n
            }

            function j(e, t, n, r) {
                let o = !1;
                for (let a = 0, i = t.length; a < i; a++) {
                    let i, l = t[a],
                        s = n && n[e.length];
                    if (null == l || !0 === l || !1 === l);
                    else if ("object" == (i = typeof l) && l.nodeType) e.push(l);
                    else if (Array.isArray(l)) o = j(e, l, s) || o;
                    else if ("function" === i)
                        if (r) {
                            for (;
                                "function" == typeof l;) l = l();
                            o = j(e, Array.isArray(l) ? l : [l], Array.isArray(s) ? s : [s]) || o
                        } else e.push(l), o = !0;
                    else {
                        const t = String(l);
                        s && 3 === s.nodeType && s.data === t ? e.push(s) : e.push(document.createTextNode(t))
                    }
                }
                return o
            }

            function C(e, t, n = null) {
                for (let r = 0, o = t.length; r < o; r++) e.insertBefore(t[r], n)
            }

            function I(e, t, n, r) {
                if (void 0 === n) return e.textContent = "";
                const o = r || document.createTextNode("");
                if (t.length) {
                    let r = !1;
                    for (let a = t.length - 1; a >= 0; a--) {
                        const i = t[a];
                        if (o !== i) {
                            const t = i.parentNode === e;
                            r || a ? t && i.remove() : t ? e.replaceChild(o, i) : e.insertBefore(o, n)
                        } else r = !0
                    }
                } else e.insertBefore(o, n);
                return [o]
            }
            Symbol();
            const L = !1,
                P = "http://www.w3.org/2000/svg";

            function z(e, t = !1) {
                return t ? document.createElementNS(P, e) : document.createElement(e)
            }

            function O(e) {
                const {
                    useShadow: t
                } = e, n = document.createTextNode(""), o = (0, r.QQ)();
                let a, i = !!r.sE.context;
                return (0, r.EH)((() => {
                    i && ((0, r.QQ)().user = i = !1), a || (a = (0, r.vP)(o, (() => (0, r.To)((() => e.children)))));
                    const l = e.mount || document.body;
                    if (l instanceof HTMLHeadElement) {
                        const [e, t] = (0, r.n5)(!1), n = () => t(!0);
                        (0, r.Hr)((t => x(l, (() => e() ? t() : a()), null))), (0, r.Ki)(n)
                    } else {
                        const o = z(e.isSVG ? "g" : "div", e.isSVG),
                            i = t && o.attachShadow ? o.attachShadow({
                                mode: "open"
                            }) : o;
                        Object.defineProperty(o, "_$host", {
                            get() {
                                return n.parentNode
                            },
                            configurable: !0
                        }), x(i, a), l.appendChild(o), e.ref && e.ref(o), (0, r.Ki)((() => l.removeChild(o)))
                    }
                }), void 0, {
                    render: !i
                }), n
            }

            function R(e) {
                const [t, n] = (0, r.rg)(e, ["component"]), o = (0, r.To)((() => t.component));
                return (0, r.To)((() => {
                    const e = o();
                    switch (typeof e) {
                        case "function":
                            return (0, r.vz)((() => e(n)));
                        case "string":
                            const t = c.has(e),
                                o = r.sE.context ? S() : z(e, t);
                            return w(o, n, t), o
                    }
                }))
            }
        },
        8233: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(4340),
                a = n(6392);
            r({
                target: "Object",
                stat: !0
            }, {
                fromEntries: function(e) {
                    var t = {};
                    return o(e, (function(e, n) {
                        a(t, e, n)
                    }), {
                        AS_ENTRIES: !0
                    }), t
                }
            })
        },
        8237: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = 2147483647,
                a = /[^\0-\u007E]/,
                i = /[.\u3002\uFF0E\uFF61]/g,
                l = "Overflow: input needs wider integers to process",
                s = RangeError,
                c = r(i.exec),
                u = Math.floor,
                d = String.fromCharCode,
                h = r("".charCodeAt),
                f = r([].join),
                v = r([].push),
                p = r("".replace),
                m = r("".split),
                g = r("".toLowerCase),
                y = function(e) {
                    return e + 22 + 75 * (e < 26)
                },
                b = function(e, t, n) {
                    var r = 0;
                    for (e = n ? u(e / 700) : e >> 1, e += u(e / t); e > 455;) e = u(e / 35), r += 36;
                    return u(r + 36 * e / (e + 38))
                },
                w = function(e) {
                    var t = [];
                    e = function(e) {
                        for (var t = [], n = 0, r = e.length; n < r;) {
                            var o = h(e, n++);
                            if (o >= 55296 && o <= 56319 && n < r) {
                                var a = h(e, n++);
                                56320 == (64512 & a) ? v(t, ((1023 & o) << 10) + (1023 & a) + 65536) : (v(t, o), n--)
                            } else v(t, o)
                        }
                        return t
                    }(e);
                    var n, r, a = e.length,
                        i = 128,
                        c = 0,
                        p = 72;
                    for (n = 0; n < e.length; n++)(r = e[n]) < 128 && v(t, d(r));
                    var m = t.length,
                        g = m;
                    for (m && v(t, "-"); g < a;) {
                        var w = o;
                        for (n = 0; n < e.length; n++)(r = e[n]) >= i && r < w && (w = r);
                        var k = g + 1;
                        if (w - i > u((o - c) / k)) throw new s(l);
                        for (c += (w - i) * k, i = w, n = 0; n < e.length; n++) {
                            if ((r = e[n]) < i && ++c > o) throw new s(l);
                            if (r === i) {
                                for (var x = c, S = 36;;) {
                                    var A = S <= p ? 1 : S >= p + 26 ? 26 : S - p;
                                    if (x < A) break;
                                    var T = x - A,
                                        M = 36 - A;
                                    v(t, d(y(A + T % M))), x = u(T / M), S += 36
                                }
                                v(t, d(y(x))), p = b(c, k, g === m), c = 0, g++
                            }
                        }
                        c++, i++
                    }
                    return f(t, "")
                };
            e.exports = function(e) {
                var t, n, r = [],
                    o = m(p(g(e), i, "."), ".");
                for (t = 0; t < o.length; t++) n = o[t], v(r, c(a, n) ? "xn--" + w(n) : n);
                return f(r, ".")
            }
        },
        8292: (e, t, n) => {
            "use strict";
            var r = n(5735),
                o = n(9565),
                a = /#|\.prototype\./,
                i = function(e, t) {
                    var n = s[l(e)];
                    return n === u || n !== c && (o(t) ? r(t) : !!t)
                },
                l = i.normalize = function(e) {
                    return String(e).replace(a, ".").toLowerCase()
                },
                s = i.data = {},
                c = i.NATIVE = "N",
                u = i.POLYFILL = "P";
            e.exports = i
        },
        8357: (e, t, n) => {
            "use strict";
            var r = n(47);
            e.exports = r("document", "documentElement")
        },
        8392: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = r({}.toString),
                a = r("".slice);
            e.exports = function(e) {
                return a(o(e), 8, -1)
            }
        },
        8396: (e, t, n) => {
            "use strict";
            var r = n(6191);
            e.exports = /web0s(?!.*chrome)/i.test(r)
        },
        8447: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(6191),
                a = n(8392),
                i = function(e) {
                    return o.slice(0, e.length) === e
                };
            e.exports = i("Bun/") ? "BUN" : i("Cloudflare-Workers") ? "CLOUDFLARE" : i("Deno/") ? "DENO" : i("Node.js/") ? "NODE" : r.Bun && "string" == typeof Bun.version ? "BUN" : r.Deno && "object" == typeof Deno.version ? "DENO" : "process" === a(r.process) ? "NODE" : r.window && r.document ? "BROWSER" : "REST"
        },
        8448: (e, t, n) => {
            "use strict";
            var r = n(6298).has;
            e.exports = function(e) {
                return r(e), e
            }
        },
        8462: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(6448),
                a = n(9123),
                i = n(9135),
                l = n(7835),
                s = n(7173),
                c = n(9654),
                u = n(2369).IteratorPrototype,
                d = n(7353),
                h = n(9515),
                f = l("toStringTag"),
                v = "IteratorHelper",
                p = "WrapForValidIterator",
                m = s.set,
                g = function(e) {
                    var t = s.getterFor(e ? p : v);
                    return i(o(u), {
                        next: function() {
                            var n = t(this);
                            if (e) return n.nextHandler();
                            if (n.done) return d(void 0, !0);
                            try {
                                var r = n.nextHandler();
                                return n.returnHandlerResult ? r : d(r, n.done)
                            } catch (e) {
                                throw n.done = !0, e
                            }
                        },
                        return: function() {
                            var n = t(this),
                                o = n.iterator;
                            if (n.done = !0, e) {
                                var a = c(o, "return");
                                return a ? r(a, o) : d(void 0, !0)
                            }
                            if (n.inner) try {
                                h(n.inner.iterator, "normal")
                            } catch (e) {
                                return h(o, "throw", e)
                            }
                            return o && h(o, "normal"), d(void 0, !0)
                        }
                    })
                },
                y = g(!0),
                b = g(!1);
            a(b, f, "Iterator Helper"), e.exports = function(e, t, n) {
                var r = function(r, o) {
                    o ? (o.iterator = r.iterator, o.next = r.next) : o = r, o.type = t ? p : v, o.returnHandlerResult = !!n, o.nextHandler = e, o.counter = 0, o.done = !1, m(this, o)
                };
                return r.prototype = t ? y : b, r
            }
        },
        8486: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(9947),
                a = n(2786),
                i = n(7085),
                l = n(2526),
                s = n(3621);
            r({
                target: "Array",
                proto: !0
            }, {
                flatMap: function(e) {
                    var t, n = i(this),
                        r = l(n);
                    return a(e), (t = s(n, 0)).length = o(t, n, n, r, 0, 1, e, arguments.length > 1 ? arguments[1] : void 0), t
                }
            })
        },
        8518: (e, t, n) => {
            "use strict";
            var r = n(4095),
                o = TypeError;
            e.exports = function(e, t) {
                if (!delete e[t]) throw new o("Cannot delete property " + r(t) + " of " + r(e))
            }
        },
        8598: (e, t, n) => {
            "use strict";
            n(427)
        },
        8626: (e, t, n) => {
            "use strict";
            n(5213)("flat")
        },
        8666: (e, t, n) => {
            "use strict";
            var r = n(9565);
            e.exports = function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        },
        8758: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(5735);
            e.exports = r && o((function() {
                return 42 !== Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        8774: (e, t, n) => {
            "use strict";
            n(5692);
            var r, o = n(2798),
                a = n(6724),
                i = n(5504),
                l = n(6024),
                s = n(312),
                c = n(4520),
                u = n(5088),
                d = n(7426),
                h = n(2031),
                f = n(4265),
                v = n(1869),
                p = n(9108),
                m = n(5432),
                g = n(255).codeAt,
                y = n(8237),
                b = n(4935),
                w = n(135),
                k = n(500),
                x = n(7470),
                S = n(7173),
                A = S.set,
                T = S.getterFor("URL"),
                M = x.URLSearchParams,
                B = x.getState,
                E = l.URL,
                j = l.TypeError,
                C = l.parseInt,
                I = Math.floor,
                L = Math.pow,
                P = c("".charAt),
                z = c(/./.exec),
                O = c([].join),
                R = c(1..toString),
                N = c([].pop),
                q = c([].push),
                F = c("".replace),
                _ = c([].shift),
                D = c("".split),
                Y = c("".slice),
                V = c("".toLowerCase),
                U = c([].unshift),
                H = "Invalid scheme",
                G = "Invalid host",
                K = "Invalid port",
                W = /[a-z]/i,
                Z = /[\d+-.a-z]/i,
                $ = /\d/,
                J = /^0x/i,
                X = /^[0-7]+$/,
                Q = /^\d+$/,
                ee = /^[\da-f]+$/i,
                te = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                ne = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                re = /^[\u0000-\u0020]+/,
                oe = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
                ae = /[\t\n\r]/g,
                ie = function(e) {
                    var t, n, r, o;
                    if ("number" == typeof e) {
                        for (t = [], n = 0; n < 4; n++) U(t, e % 256), e = I(e / 256);
                        return O(t, ".")
                    }
                    if ("object" == typeof e) {
                        for (t = "", r = function(e) {
                                for (var t = null, n = 1, r = null, o = 0, a = 0; a < 8; a++) 0 !== e[a] ? (o > n && (t = r, n = o), r = null, o = 0) : (null === r && (r = a), ++o);
                                return o > n ? r : t
                            }(e), n = 0; n < 8; n++) o && 0 === e[n] || (o && (o = !1), r === n ? (t += n ? ":" : "::", o = !0) : (t += R(e[n], 16), n < 7 && (t += ":")));
                        return "[" + t + "]"
                    }
                    return e
                },
                le = {},
                se = v({}, le, {
                    " ": 1,
                    '"': 1,
                    "<": 1,
                    ">": 1,
                    "`": 1
                }),
                ce = v({}, se, {
                    "#": 1,
                    "?": 1,
                    "{": 1,
                    "}": 1
                }),
                ue = v({}, ce, {
                    "/": 1,
                    ":": 1,
                    ";": 1,
                    "=": 1,
                    "@": 1,
                    "[": 1,
                    "\\": 1,
                    "]": 1,
                    "^": 1,
                    "|": 1
                }),
                de = function(e, t) {
                    var n = g(e, 0);
                    return n > 32 && n < 127 && !f(t, e) ? e : encodeURIComponent(e)
                },
                he = {
                    ftp: 21,
                    file: null,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443
                },
                fe = function(e, t) {
                    var n;
                    return 2 === e.length && z(W, P(e, 0)) && (":" === (n = P(e, 1)) || !t && "|" === n)
                },
                ve = function(e) {
                    var t;
                    return e.length > 1 && fe(Y(e, 0, 2)) && (2 === e.length || "/" === (t = P(e, 2)) || "\\" === t || "?" === t || "#" === t)
                },
                pe = function(e) {
                    return "." === e || "%2e" === V(e)
                },
                me = {},
                ge = {},
                ye = {},
                be = {},
                we = {},
                ke = {},
                xe = {},
                Se = {},
                Ae = {},
                Te = {},
                Me = {},
                Be = {},
                Ee = {},
                je = {},
                Ce = {},
                Ie = {},
                Le = {},
                Pe = {},
                ze = {},
                Oe = {},
                Re = {},
                Ne = function(e, t, n) {
                    var r, o, a, i = b(e);
                    if (t) {
                        if (o = this.parse(i)) throw new j(o);
                        this.searchParams = null
                    } else {
                        if (void 0 !== n && (r = new Ne(n, !0)), o = this.parse(i, null, r)) throw new j(o);
                        (a = B(new M)).bindURL(this), this.searchParams = a
                    }
                };
            Ne.prototype = {
                type: "URL",
                parse: function(e, t, n) {
                    var o, a, i, l, s, c = this,
                        u = t || me,
                        d = 0,
                        h = "",
                        v = !1,
                        g = !1,
                        y = !1;
                    for (e = b(e), t || (c.scheme = "", c.username = "", c.password = "", c.host = null, c.port = null, c.path = [], c.query = null, c.fragment = null, c.cannotBeABaseURL = !1, e = F(e, re, ""), e = F(e, oe, "$1")), e = F(e, ae, ""), o = p(e); d <= o.length;) {
                        switch (a = o[d], u) {
                            case me:
                                if (!a || !z(W, a)) {
                                    if (t) return H;
                                    u = ye;
                                    continue
                                }
                                h += V(a), u = ge;
                                break;
                            case ge:
                                if (a && (z(Z, a) || "+" === a || "-" === a || "." === a)) h += V(a);
                                else {
                                    if (":" !== a) {
                                        if (t) return H;
                                        h = "", u = ye, d = 0;
                                        continue
                                    }
                                    if (t && (c.isSpecial() !== f(he, h) || "file" === h && (c.includesCredentials() || null !== c.port) || "file" === c.scheme && !c.host)) return;
                                    if (c.scheme = h, t) return void(c.isSpecial() && he[c.scheme] === c.port && (c.port = null));
                                    h = "", "file" === c.scheme ? u = je : c.isSpecial() && n && n.scheme === c.scheme ? u = be : c.isSpecial() ? u = Se : "/" === o[d + 1] ? (u = we, d++) : (c.cannotBeABaseURL = !0, q(c.path, ""), u = ze)
                                }
                                break;
                            case ye:
                                if (!n || n.cannotBeABaseURL && "#" !== a) return H;
                                if (n.cannotBeABaseURL && "#" === a) {
                                    c.scheme = n.scheme, c.path = m(n.path), c.query = n.query, c.fragment = "", c.cannotBeABaseURL = !0, u = Re;
                                    break
                                }
                                u = "file" === n.scheme ? je : ke;
                                continue;
                            case be:
                                if ("/" !== a || "/" !== o[d + 1]) {
                                    u = ke;
                                    continue
                                }
                                u = Ae, d++;
                                break;
                            case we:
                                if ("/" === a) {
                                    u = Te;
                                    break
                                }
                                u = Pe;
                                continue;
                            case ke:
                                if (c.scheme = n.scheme, a === r) c.username = n.username, c.password = n.password, c.host = n.host, c.port = n.port, c.path = m(n.path), c.query = n.query;
                                else if ("/" === a || "\\" === a && c.isSpecial()) u = xe;
                                else if ("?" === a) c.username = n.username, c.password = n.password, c.host = n.host, c.port = n.port, c.path = m(n.path), c.query = "", u = Oe;
                                else {
                                    if ("#" !== a) {
                                        c.username = n.username, c.password = n.password, c.host = n.host, c.port = n.port, c.path = m(n.path), c.path.length--, u = Pe;
                                        continue
                                    }
                                    c.username = n.username, c.password = n.password, c.host = n.host, c.port = n.port, c.path = m(n.path), c.query = n.query, c.fragment = "", u = Re
                                }
                                break;
                            case xe:
                                if (!c.isSpecial() || "/" !== a && "\\" !== a) {
                                    if ("/" !== a) {
                                        c.username = n.username, c.password = n.password, c.host = n.host, c.port = n.port, u = Pe;
                                        continue
                                    }
                                    u = Te
                                } else u = Ae;
                                break;
                            case Se:
                                if (u = Ae, "/" !== a || "/" !== P(h, d + 1)) continue;
                                d++;
                                break;
                            case Ae:
                                if ("/" !== a && "\\" !== a) {
                                    u = Te;
                                    continue
                                }
                                break;
                            case Te:
                                if ("@" === a) {
                                    v && (h = "%40" + h), v = !0, i = p(h);
                                    for (var w = 0; w < i.length; w++) {
                                        var k = i[w];
                                        if (":" !== k || y) {
                                            var x = de(k, ue);
                                            y ? c.password += x : c.username += x
                                        } else y = !0
                                    }
                                    h = ""
                                } else if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && c.isSpecial()) {
                                    if (v && "" === h) return "Invalid authority";
                                    d -= p(h).length + 1, h = "", u = Me
                                } else h += a;
                                break;
                            case Me:
                            case Be:
                                if (t && "file" === c.scheme) {
                                    u = Ie;
                                    continue
                                }
                                if (":" !== a || g) {
                                    if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && c.isSpecial()) {
                                        if (c.isSpecial() && "" === h) return G;
                                        if (t && "" === h && (c.includesCredentials() || null !== c.port)) return;
                                        if (l = c.parseHost(h)) return l;
                                        if (h = "", u = Le, t) return;
                                        continue
                                    }
                                    "[" === a ? g = !0 : "]" === a && (g = !1), h += a
                                } else {
                                    if ("" === h) return G;
                                    if (l = c.parseHost(h)) return l;
                                    if (h = "", u = Ee, t === Be) return
                                }
                                break;
                            case Ee:
                                if (!z($, a)) {
                                    if (a === r || "/" === a || "?" === a || "#" === a || "\\" === a && c.isSpecial() || t) {
                                        if ("" !== h) {
                                            var S = C(h, 10);
                                            if (S > 65535) return K;
                                            c.port = c.isSpecial() && S === he[c.scheme] ? null : S, h = ""
                                        }
                                        if (t) return;
                                        u = Le;
                                        continue
                                    }
                                    return K
                                }
                                h += a;
                                break;
                            case je:
                                if (c.scheme = "file", "/" === a || "\\" === a) u = Ce;
                                else {
                                    if (!n || "file" !== n.scheme) {
                                        u = Pe;
                                        continue
                                    }
                                    switch (a) {
                                        case r:
                                            c.host = n.host, c.path = m(n.path), c.query = n.query;
                                            break;
                                        case "?":
                                            c.host = n.host, c.path = m(n.path), c.query = "", u = Oe;
                                            break;
                                        case "#":
                                            c.host = n.host, c.path = m(n.path), c.query = n.query, c.fragment = "", u = Re;
                                            break;
                                        default:
                                            ve(O(m(o, d), "")) || (c.host = n.host, c.path = m(n.path), c.shortenPath()), u = Pe;
                                            continue
                                    }
                                }
                                break;
                            case Ce:
                                if ("/" === a || "\\" === a) {
                                    u = Ie;
                                    break
                                }
                                n && "file" === n.scheme && !ve(O(m(o, d), "")) && (fe(n.path[0], !0) ? q(c.path, n.path[0]) : c.host = n.host), u = Pe;
                                continue;
                            case Ie:
                                if (a === r || "/" === a || "\\" === a || "?" === a || "#" === a) {
                                    if (!t && fe(h)) u = Pe;
                                    else if ("" === h) {
                                        if (c.host = "", t) return;
                                        u = Le
                                    } else {
                                        if (l = c.parseHost(h)) return l;
                                        if ("localhost" === c.host && (c.host = ""), t) return;
                                        h = "", u = Le
                                    }
                                    continue
                                }
                                h += a;
                                break;
                            case Le:
                                if (c.isSpecial()) {
                                    if (u = Pe, "/" !== a && "\\" !== a) continue
                                } else if (t || "?" !== a)
                                    if (t || "#" !== a) {
                                        if (a !== r && (u = Pe, "/" !== a)) continue
                                    } else c.fragment = "", u = Re;
                                else c.query = "", u = Oe;
                                break;
                            case Pe:
                                if (a === r || "/" === a || "\\" === a && c.isSpecial() || !t && ("?" === a || "#" === a)) {
                                    if (".." === (s = V(s = h)) || "%2e." === s || ".%2e" === s || "%2e%2e" === s ? (c.shortenPath(), "/" === a || "\\" === a && c.isSpecial() || q(c.path, "")) : pe(h) ? "/" === a || "\\" === a && c.isSpecial() || q(c.path, "") : ("file" === c.scheme && !c.path.length && fe(h) && (c.host && (c.host = ""), h = P(h, 0) + ":"), q(c.path, h)), h = "", "file" === c.scheme && (a === r || "?" === a || "#" === a))
                                        for (; c.path.length > 1 && "" === c.path[0];) _(c.path);
                                    "?" === a ? (c.query = "", u = Oe) : "#" === a && (c.fragment = "", u = Re)
                                } else h += de(a, ce);
                                break;
                            case ze:
                                "?" === a ? (c.query = "", u = Oe) : "#" === a ? (c.fragment = "", u = Re) : a !== r && (c.path[0] += de(a, le));
                                break;
                            case Oe:
                                t || "#" !== a ? a !== r && ("'" === a && c.isSpecial() ? c.query += "%27" : c.query += "#" === a ? "%23" : de(a, le)) : (c.fragment = "", u = Re);
                                break;
                            case Re:
                                a !== r && (c.fragment += de(a, se))
                        }
                        d++
                    }
                },
                parseHost: function(e) {
                    var t, n, r;
                    if ("[" === P(e, 0)) {
                        if ("]" !== P(e, e.length - 1)) return G;
                        if (t = function(e) {
                                var t, n, r, o, a, i, l, s = [0, 0, 0, 0, 0, 0, 0, 0],
                                    c = 0,
                                    u = null,
                                    d = 0,
                                    h = function() {
                                        return P(e, d)
                                    };
                                if (":" === h()) {
                                    if (":" !== P(e, 1)) return;
                                    d += 2, u = ++c
                                }
                                for (; h();) {
                                    if (8 === c) return;
                                    if (":" !== h()) {
                                        for (t = n = 0; n < 4 && z(ee, h());) t = 16 * t + C(h(), 16), d++, n++;
                                        if ("." === h()) {
                                            if (0 === n) return;
                                            if (d -= n, c > 6) return;
                                            for (r = 0; h();) {
                                                if (o = null, r > 0) {
                                                    if (!("." === h() && r < 4)) return;
                                                    d++
                                                }
                                                if (!z($, h())) return;
                                                for (; z($, h());) {
                                                    if (a = C(h(), 10), null === o) o = a;
                                                    else {
                                                        if (0 === o) return;
                                                        o = 10 * o + a
                                                    }
                                                    if (o > 255) return;
                                                    d++
                                                }
                                                s[c] = 256 * s[c] + o, 2 != ++r && 4 !== r || c++
                                            }
                                            if (4 !== r) return;
                                            break
                                        }
                                        if (":" === h()) {
                                            if (d++, !h()) return
                                        } else if (h()) return;
                                        s[c++] = t
                                    } else {
                                        if (null !== u) return;
                                        d++, u = ++c
                                    }
                                }
                                if (null !== u)
                                    for (i = c - u, c = 7; 0 !== c && i > 0;) l = s[c], s[c--] = s[u + i - 1], s[u + --i] = l;
                                else if (8 !== c) return;
                                return s
                            }(Y(e, 1, -1)), !t) return G;
                        this.host = t
                    } else if (this.isSpecial()) {
                        if (e = y(e), z(te, e)) return G;
                        if (t = function(e) {
                                var t, n, r, o, a, i, l, s = D(e, ".");
                                if (s.length && "" === s[s.length - 1] && s.length--, (t = s.length) > 4) return e;
                                for (n = [], r = 0; r < t; r++) {
                                    if ("" === (o = s[r])) return e;
                                    if (a = 10, o.length > 1 && "0" === P(o, 0) && (a = z(J, o) ? 16 : 8, o = Y(o, 8 === a ? 1 : 2)), "" === o) i = 0;
                                    else {
                                        if (!z(10 === a ? Q : 8 === a ? X : ee, o)) return e;
                                        i = C(o, a)
                                    }
                                    q(n, i)
                                }
                                for (r = 0; r < t; r++)
                                    if (i = n[r], r === t - 1) {
                                        if (i >= L(256, 5 - t)) return null
                                    } else if (i > 255) return null;
                                for (l = N(n), r = 0; r < n.length; r++) l += n[r] * L(256, 3 - r);
                                return l
                            }(e), null === t) return G;
                        this.host = t
                    } else {
                        if (z(ne, e)) return G;
                        for (t = "", n = p(e), r = 0; r < n.length; r++) t += de(n[r], le);
                        this.host = t
                    }
                },
                cannotHaveUsernamePasswordPort: function() {
                    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
                },
                includesCredentials: function() {
                    return "" !== this.username || "" !== this.password
                },
                isSpecial: function() {
                    return f(he, this.scheme)
                },
                shortenPath: function() {
                    var e = this.path,
                        t = e.length;
                    !t || "file" === this.scheme && 1 === t && fe(e[0], !0) || e.length--
                },
                serialize: function() {
                    var e = this,
                        t = e.scheme,
                        n = e.username,
                        r = e.password,
                        o = e.host,
                        a = e.port,
                        i = e.path,
                        l = e.query,
                        s = e.fragment,
                        c = t + ":";
                    return null !== o ? (c += "//", e.includesCredentials() && (c += n + (r ? ":" + r : "") + "@"), c += ie(o), null !== a && (c += ":" + a)) : "file" === t && (c += "//"), c += e.cannotBeABaseURL ? i[0] : i.length ? "/" + O(i, "/") : "", null !== l && (c += "?" + l), null !== s && (c += "#" + s), c
                },
                setHref: function(e) {
                    var t = this.parse(e);
                    if (t) throw new j(t);
                    this.searchParams.update()
                },
                getOrigin: function() {
                    var e = this.scheme,
                        t = this.port;
                    if ("blob" === e) try {
                        return new qe(e.path[0]).origin
                    } catch (e) {
                        return "null"
                    }
                    return "file" !== e && this.isSpecial() ? e + "://" + ie(this.host) + (null !== t ? ":" + t : "") : "null"
                },
                getProtocol: function() {
                    return this.scheme + ":"
                },
                setProtocol: function(e) {
                    this.parse(b(e) + ":", me)
                },
                getUsername: function() {
                    return this.username
                },
                setUsername: function(e) {
                    var t = p(b(e));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.username = "";
                        for (var n = 0; n < t.length; n++) this.username += de(t[n], ue)
                    }
                },
                getPassword: function() {
                    return this.password
                },
                setPassword: function(e) {
                    var t = p(b(e));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.password = "";
                        for (var n = 0; n < t.length; n++) this.password += de(t[n], ue)
                    }
                },
                getHost: function() {
                    var e = this.host,
                        t = this.port;
                    return null === e ? "" : null === t ? ie(e) : ie(e) + ":" + t
                },
                setHost: function(e) {
                    this.cannotBeABaseURL || this.parse(e, Me)
                },
                getHostname: function() {
                    var e = this.host;
                    return null === e ? "" : ie(e)
                },
                setHostname: function(e) {
                    this.cannotBeABaseURL || this.parse(e, Be)
                },
                getPort: function() {
                    var e = this.port;
                    return null === e ? "" : b(e)
                },
                setPort: function(e) {
                    this.cannotHaveUsernamePasswordPort() || ("" === (e = b(e)) ? this.port = null : this.parse(e, Ee))
                },
                getPathname: function() {
                    var e = this.path;
                    return this.cannotBeABaseURL ? e[0] : e.length ? "/" + O(e, "/") : ""
                },
                setPathname: function(e) {
                    this.cannotBeABaseURL || (this.path = [], this.parse(e, Le))
                },
                getSearch: function() {
                    var e = this.query;
                    return e ? "?" + e : ""
                },
                setSearch: function(e) {
                    "" === (e = b(e)) ? this.query = null: ("?" === P(e, 0) && (e = Y(e, 1)), this.query = "", this.parse(e, Oe)), this.searchParams.update()
                },
                getSearchParams: function() {
                    return this.searchParams.facade
                },
                getHash: function() {
                    var e = this.fragment;
                    return e ? "#" + e : ""
                },
                setHash: function(e) {
                    "" !== (e = b(e)) ? ("#" === P(e, 0) && (e = Y(e, 1)), this.fragment = "", this.parse(e, Re)) : this.fragment = null
                },
                update: function() {
                    this.query = this.searchParams.serialize() || null
                }
            };
            var qe = function(e) {
                    var t = h(this, Fe),
                        n = k(arguments.length, 1) > 1 ? arguments[1] : void 0,
                        r = A(t, new Ne(e, !1, n));
                    a || (t.href = r.serialize(), t.origin = r.getOrigin(), t.protocol = r.getProtocol(), t.username = r.getUsername(), t.password = r.getPassword(), t.host = r.getHost(), t.hostname = r.getHostname(), t.port = r.getPort(), t.pathname = r.getPathname(), t.search = r.getSearch(), t.searchParams = r.getSearchParams(), t.hash = r.getHash())
                },
                Fe = qe.prototype,
                _e = function(e, t) {
                    return {
                        get: function() {
                            return T(this)[e]()
                        },
                        set: t && function(e) {
                            return T(this)[t](e)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                };
            if (a && (d(Fe, "href", _e("serialize", "setHref")), d(Fe, "origin", _e("getOrigin")), d(Fe, "protocol", _e("getProtocol", "setProtocol")), d(Fe, "username", _e("getUsername", "setUsername")), d(Fe, "password", _e("getPassword", "setPassword")), d(Fe, "host", _e("getHost", "setHost")), d(Fe, "hostname", _e("getHostname", "setHostname")), d(Fe, "port", _e("getPort", "setPort")), d(Fe, "pathname", _e("getPathname", "setPathname")), d(Fe, "search", _e("getSearch", "setSearch")), d(Fe, "searchParams", _e("getSearchParams")), d(Fe, "hash", _e("getHash", "setHash"))), u(Fe, "toJSON", (function() {
                    return T(this).serialize()
                }), {
                    enumerable: !0
                }), u(Fe, "toString", (function() {
                    return T(this).serialize()
                }), {
                    enumerable: !0
                }), E) {
                var De = E.createObjectURL,
                    Ye = E.revokeObjectURL;
                De && u(qe, "createObjectURL", s(De, E)), Ye && u(qe, "revokeObjectURL", s(Ye, E))
            }
            w(qe, "URL"), o({
                global: !0,
                constructor: !0,
                forced: !i,
                sham: !a
            }, {
                URL: qe
            })
        },
        8776: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, '.navbar-NNb1c {\n  z-index: 99;\n  position: absolute;\n  height: 100%;\n  width: 10rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.navbar-NNb1c.expanded-RjhYX {\n  width: 20rem;\n}\n.navbar-NNb1c.expanded-RjhYX .background-xaXYe {\n  transform: translateX(0);\n}\n.navbar-NNb1c.expanded-RjhYX .content-IjaqZ .heading-QbiVt .icon-jD4Zd {\n  opacity: 0;\n}\n.navbar-NNb1c.expanded-RjhYX .content-IjaqZ .heading-QbiVt .logo-lCpuw {\n  opacity: 1;\n}\n.navbar-NNb1c.expanded-RjhYX .content-IjaqZ .tabs-wr1wR {\n  opacity: 1;\n}\n.navbar-NNb1c .backdrop-H4Hka {\n  z-index: 0;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(12, 12, 16, 0.8);\n}\n.navbar-NNb1c .background-xaXYe {\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 20rem;\n  background-color: #0c0c10;\n  transform: translateX(calc((20rem - 10rem) * -1));\n  will-change: transform, background-color;\n  transition: transform 0.1s ease-out, background-color 0.2s ease-out;\n}\n.navbar-NNb1c .background-xaXYe::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: -40px;\n  width: 40px;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.15) 10%, transparent 100%);\n}\n.navbar-NNb1c .content-IjaqZ {\n  z-index: 2;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  overflow: hidden;\n}\n.navbar-NNb1c .content-IjaqZ .heading-QbiVt {\n  position: absolute;\n  width: 10rem;\n}\n.navbar-NNb1c .content-IjaqZ .heading-QbiVt .icon-jD4Zd,\n.navbar-NNb1c .content-IjaqZ .heading-QbiVt .logo-lCpuw {\n  position: absolute;\n  top: 3.5rem;\n  left: 50%;\n  margin-left: calc(3.5rem / -2);\n  height: 3.5rem;\n  transition: opacity 0.2s ease-out;\n}\n.navbar-NNb1c .content-IjaqZ .heading-QbiVt .icon-jD4Zd {\n  opacity: 0.6;\n}\n.navbar-NNb1c .content-IjaqZ .heading-QbiVt .logo-lCpuw {\n  opacity: 0;\n}\n.navbar-NNb1c .content-IjaqZ .tabs-wr1wR {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  padding: 0 2rem;\n  white-space: nowrap;\n}\n.navbar-NNb1c .content-IjaqZ .tabs-wr1wR > * {\n  margin: 0.125rem 0 0.125rem 0;\n}\n.navbar-NNb1c .content-IjaqZ .tabs-wr1wR > :first-child {\n  margin-top: 0;\n}\n.navbar-NNb1c .content-IjaqZ .tabs-wr1wR > :last-child {\n  margin-bottom: 0;\n}\n@media screen and (max-height: 700px) {\n  .navbar-NNb1c .content-IjaqZ .tabs-wr1wR {\n    display: none;\n  }\n}\n', ""]), i.locals = {
                navbar: "navbar-NNb1c",
                expanded: "expanded-RjhYX",
                background: "background-xaXYe",
                content: "content-IjaqZ",
                heading: "heading-QbiVt",
                icon: "icon-jD4Zd",
                logo: "logo-lCpuw",
                tabs: "tabs-wr1wR",
                backdrop: "backdrop-H4Hka"
            };
            const l = i
        },
        8840: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".item-_uIl6 {\n  position: relative;\n  flex: 0 0 auto;\n  height: 24rem;\n  border-radius: 1em;\n  overflow: hidden;\n  background-color: rgba(255, 255, 255, 0.03);\n  user-select: none;\n  opacity: 0.5;\n  will-change: transform, opacity;\n  transition: transform 0.1s ease-out, opacity 0.1s ease-out;\n}\n.item-_uIl6.poster-kFYpD {\n  width: calc(24rem * (27 / 40));\n}\n.item-_uIl6.square-ellRR {\n  width: calc(24rem * (1 / 1));\n}\n.item-_uIl6.landscape-HrMPq {\n  width: calc(24rem * (16 / 9));\n}\n.item-_uIl6 .icon-aUlim {\n  z-index: 0;\n  height: 8rem;\n  width: 8rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: calc(8rem / -2);\n  margin-top: calc(8rem / -2);\n  color: hsla(0, 0%, 100%, 0.9);\n  opacity: 0.4;\n}\n.item-_uIl6 .image-FgkBk {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  object-fit: cover;\n}\n.item-_uIl6 .new-videos-VirbD {\n  z-index: 2;\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  overflow: visible;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.75rem;\n  width: 2.75rem;\n  border-radius: 0.25rem;\n  line-height: 100%;\n  overflow: hidden;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc > * {\n  margin: 0.05rem;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc:nth-child(1) {\n  top: 0.4rem;\n  right: 0.4rem;\n  background-color: hsla(0, 0%, 100%, 0.9);\n  opacity: 0.4;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc:nth-child(2) {\n  top: 0.7rem;\n  right: 0.7rem;\n  background-color: hsla(0, 0%, 100%, 0.9);\n  opacity: 0.6;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc:nth-child(3) {\n  top: 1rem;\n  right: 1rem;\n  background-color: hsla(0, 0%, 100%, 0.9);\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc svg {\n  flex: none;\n  height: calc(1rem - 0.1rem);\n  width: calc(1rem - 0.1rem);\n  color: #0c0c10;\n}\n.item-_uIl6 .new-videos-VirbD .layer-D0Ouc .label-ggOL0 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0c0c10;\n}\n.item-_uIl6 .progress-fSfLe {\n  z-index: 2;\n  height: 0.75rem;\n  position: absolute;\n  left: 1rem;\n  right: 1rem;\n  bottom: 0.75rem;\n  padding: 0.1rem;\n  border-radius: 0.75rem;\n  background-color: hsla(0, 0%, 50%, 0.3);\n}\n.item-_uIl6 .progress-fSfLe .inner-b9vRs {\n  position: relative;\n  height: 100%;\n  width: 0;\n  border-radius: 0.55rem;\n  background-color: hsla(0, 0%, 100%, 0.9);\n}\n.item-_uIl6 .watched-nM3bQ {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2rem;\n  height: 2rem;\n  background-color: #7b5bf5;\n  border-radius: 50%;\n  margin: 1rem;\n  z-index: 1;\n}\n.item-_uIl6 .watched-nM3bQ .watched-icon-duYSM {\n  width: 1.5rem;\n  height: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.item-_uIl6:hover {\n  opacity: 1;\n}\n.item-_uIl6[focused] {\n  opacity: 1;\n  transform: scale(1.06);\n}\n", ""]), i.locals = {
                item: "item-_uIl6",
                poster: "poster-kFYpD",
                square: "square-ellRR",
                landscape: "landscape-HrMPq",
                icon: "icon-aUlim",
                image: "image-FgkBk",
                "new-videos": "new-videos-VirbD",
                layer: "layer-D0Ouc",
                label: "label-ggOL0",
                progress: "progress-fSfLe",
                inner: "inner-b9vRs",
                watched: "watched-nM3bQ",
                "watched-icon": "watched-icon-duYSM"
            };
            const l = i
        },
        8867: e => {
            "use strict";
            e.exports = !1
        },
        8870: (e, t, n) => {
            "use strict";
            n.d(t, {
                F: () => l,
                e: () => a
            });
            n(9144), n(5658), n(3311), n(1954), n(876), n(2597), n(460), n(435), n(3080), n(234), n(9784), n(9296), n(549), n(3531), n(5073);
            var r = n(6886);

            function o(e) {
                requestAnimationFrame((() => {
                    requestAnimationFrame(e)
                }))
            }
            const a = e => {
                let t, n = !0;
                const [a, i] = (0, r.n5)(), [l, s] = (0, r.n5)(), c = (0, r.Y_)((() => e.children)), {
                    onBeforeEnter: u,
                    onEnter: d,
                    onAfterEnter: h,
                    onBeforeExit: f,
                    onExit: v,
                    onAfterExit: p
                } = e, m = (0, r.To)((() => {
                    const t = e.name || "s";
                    return {
                        enterActiveClass: e.enterActiveClass || t + "-enter-active",
                        enterClass: e.enterClass || t + "-enter",
                        enterToClass: e.enterToClass || t + "-enter-to",
                        exitActiveClass: e.exitActiveClass || t + "-exit-active",
                        exitClass: e.exitClass || t + "-exit",
                        exitToClass: e.exitToClass || t + "-exit-to"
                    }
                }));

                function g(t, c) {
                    if (!n || e.appear) {
                        const f = m().enterClass.split(" "),
                            v = m().enterActiveClass.split(" "),
                            p = m().enterToClass.split(" ");

                        function g(n) {
                            !t || n && n.target !== t || (t.removeEventListener("transitionend", g), t.removeEventListener("animationend", g), t.classList.remove(...v), t.classList.remove(...p), (0, r.vA)((() => {
                                a() !== t && i(t), l() === t && s(void 0)
                            })), h && h(t), "inout" === e.mode && y(t, c))
                        }
                        u && u(t), t.classList.add(...f), t.classList.add(...v), o((() => {
                            t.classList.remove(...f), t.classList.add(...p), d && d(t, (() => g())), (!d || d.length < 2) && (t.addEventListener("transitionend", g), t.addEventListener("animationend", g))
                        }))
                    }
                    c && !e.mode ? s(t) : i(t)
                }

                function y(t, n) {
                    const r = m().exitClass.split(" "),
                        l = m().exitActiveClass.split(" "),
                        s = m().exitToClass.split(" ");
                    if (!n.parentNode) return c();

                    function c(r) {
                        r && r.target !== n || (n.removeEventListener("transitionend", c), n.removeEventListener("animationend", c), n.classList.remove(...l), n.classList.remove(...s), a() === n && i(void 0), p && p(n), "outin" === e.mode && g(t, n))
                    }
                    f && f(n), n.classList.add(...r), n.classList.add(...l), o((() => {
                        n.classList.remove(...r), n.classList.add(...s)
                    })), v && v(n, (() => c())), (!v || v.length < 2) && (n.addEventListener("transitionend", c), n.addEventListener("animationend", c))
                }
                return (0, r.KZ)((o => {
                    for (t = c();
                        "function" == typeof t;) t = t();
                    return (0, r.vz)((() => (t && t !== o && ("outin" !== e.mode ? g(t, o) : n && i(t)), o && o !== t && "inout" !== e.mode && y(t, o), n = !1, t)))
                })), [a, l]
            };

            function i(e) {
                const {
                    top: t,
                    bottom: n,
                    left: r,
                    right: o,
                    width: a,
                    height: i
                } = e.getBoundingClientRect(), l = e.parentNode.getBoundingClientRect();
                return {
                    top: t - l.top,
                    bottom: n,
                    left: r - l.left,
                    right: o,
                    width: a,
                    height: i
                }
            }
            const l = e => {
                const t = (0, r.Y_)((() => e.children)),
                    n = (0, r.To)((() => {
                        const t = e.name || "s";
                        return {
                            enterActiveClass: e.enterActiveClass || t + "-enter-active",
                            enterClass: e.enterClass || t + "-enter",
                            enterToClass: e.enterToClass || t + "-enter-to",
                            exitActiveClass: e.exitActiveClass || t + "-exit-active",
                            exitClass: e.exitClass || t + "-exit",
                            exitToClass: e.exitToClass || t + "-exit-to",
                            moveClass: e.moveClass || t + "-move"
                        }
                    })),
                    {
                        onBeforeEnter: a,
                        onEnter: l,
                        onAfterEnter: s,
                        onBeforeExit: c,
                        onExit: u,
                        onAfterExit: d
                    } = e,
                    [h, f] = (0, r.n5)();
                let v = [],
                    p = !0;
                return (0, r.KZ)((() => {
                    const e = t.toArray(),
                        r = [...e],
                        i = new Set(e),
                        h = new Set(v),
                        m = n().enterClass.split(" "),
                        g = n().enterActiveClass.split(" "),
                        y = n().enterToClass.split(" "),
                        b = n().exitClass.split(" "),
                        w = n().exitActiveClass.split(" "),
                        k = n().exitToClass.split(" ");
                    for (let x = 0; x < e.length; x++) {
                        const S = e[x];
                        if (!p && !h.has(S)) {
                            function A(e) {
                                !S || e && e.target !== S || (S.removeEventListener("transitionend", A), S.removeEventListener("animationend", A), S.classList.remove(...g), S.classList.remove(...y), s && s(S))
                            }
                            a && a(S), S.classList.add(...m), S.classList.add(...g), o((() => {
                                S.classList.remove(...m), S.classList.add(...y), l && l(S, (() => A())), (!l || l.length < 2) && (S.addEventListener("transitionend", A), S.addEventListener("animationend", A))
                            }))
                        }
                    }
                    for (let T = 0; T < v.length; T++) {
                        const M = v[T];
                        if (!i.has(M) && M.parentNode) {
                            function B(e) {
                                e && e.target !== M || (M.removeEventListener("transitionend", B), M.removeEventListener("animationend", B), M.classList.remove(...w), M.classList.remove(...k), d && d(M), v = v.filter((e => e !== M)), f(v))
                            }
                            r.splice(T, 0, M), c && c(M), M.classList.add(...b), M.classList.add(...w), o((() => {
                                M.classList.remove(...b), M.classList.add(...k)
                            })), u && u(M, (() => B())), (!u || u.length < 2) && (M.addEventListener("transitionend", B), M.addEventListener("animationend", B))
                        }
                    }
                    v = r, f(r)
                })), (0, r.EH)((e => {
                    const t = h();
                    return t.forEach((t => {
                        let n;
                        (n = e.get(t)) ? n.new && (n.new = !1, n.newPos = i(t)): e.set(t, n = {
                            pos: i(t),
                            new: !p
                        }), n.new && t.addEventListener("transitionend", (() => {
                            n.new = !1, t.parentNode && (n.newPos = i(t))
                        }), {
                            once: !0
                        }), n.newPos && (n.pos = n.newPos), n.newPos = i(t)
                    })), p ? (p = !1, e) : (t.forEach((t => {
                        const n = e.get(t),
                            r = n.pos,
                            o = n.newPos,
                            a = r.left - o.left,
                            i = r.top - o.top;
                        if (a || i) {
                            n.moved = !0;
                            const e = t.style;
                            e.transform = `translate(${a}px,${i}px)`, e.transitionDuration = "0s"
                        }
                    })), document.body.offsetHeight, t.forEach((t => {
                        const r = e.get(t);
                        if (r.moved) {
                            r.moved = !1;
                            const o = t.style,
                                a = n().moveClass.split(" ");

                            function i(e) {
                                e && e.target !== t || !t.parentNode || e && !/transform$/.test(e.propertyName) || (t.removeEventListener("transitionend", i), t.classList.remove(...a))
                            }
                            t.classList.add(...a), o.transform = o.transitionDuration = "", t.addEventListener("transitionend", i)
                        }
                    })), e)
                }), new Map), h
            }
        },
        8882: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".loading-container-bvgf_ {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  font-size: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n.loading-container-bvgf_ .loading-bb0ms {\n  position: relative;\n  height: 6rem;\n  width: 6rem;\n  overflow: visible;\n}\n.loading-container-bvgf_ .loading-bb0ms .ripple-w6pgw {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  border: 4px solid hsla(0, 0%, 100%, 0.9);\n  opacity: 1;\n  border-radius: 50%;\n  transform: scale(0);\n  opacity: 0;\n  will-change: opacity, transform;\n  animation: ripple-w6pgw 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.loading-container-bvgf_ .loading-bb0ms .ripple-w6pgw:nth-child(2) {\n  animation-delay: -0.5s;\n}\n@keyframes ripple-w6pgw {\n  0% {\n    transform: scale(0);\n    opacity: 0;\n  }\n  4.9% {\n    opacity: 0;\n  }\n  5% {\n    opacity: 1;\n  }\n  100% {\n    transform: scale(1.1);\n    opacity: 0;\n  }\n}\n", ""]), i.locals = {
                "loading-container": "loading-container-bvgf_",
                loading: "loading-bb0ms",
                ripple: "ripple-w6pgw"
            };
            const l = i
        },
        8927: (e, t, n) => {
            "use strict";
            var r = n(47),
                o = n(4520),
                a = n(872),
                i = n(5197),
                l = n(6415),
                s = o([].concat);
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = a.f(l(e)),
                    n = i.f;
                return n ? s(t, n(e)) : t
            }
        },
        9039: (e, t, n) => {
            "use strict";
            e.exports = n.p + "cb04a11a027ff2d45824.svg"
        },
        9047: (e, t, n) => {
            var r = {
                "./ar-AR.json": [5849, 7669],
                "./bg-BG.json": [4837, 3276],
                "./ca-CA.json": [7923, 3287],
                "./cs-CZ.json": [432, 478],
                "./da-DK.json": [3987, 7073],
                "./de-DE.json": [3885, 4264],
                "./el-GR.json": [3497, 467],
                "./en-US.json": [8842, 1466],
                "./eo-EO.json": [3479, 8061],
                "./es-ES.json": [2103, 5252],
                "./eu-ES.json": [9341, 4036],
                "./fa-IR.json": [6571, 6845],
                "./fi-FI.json": [149, 9494],
                "./fr-FR.json": [4703, 239],
                "./he-IL.json": [4151, 4864],
                "./hi-IN.json": [1421, 7673],
                "./hr-HR.json": [2975, 6834],
                "./hu-HU.json": [4845, 9643],
                "./id-ID.json": [6645, 2060],
                "./it-IT.json": [3845, 4869],
                "./ja-JP.json": [7466, 1397],
                "./ko-KR.json": [7892, 8588],
                "./mk-MK.json": [71, 8599],
                "./my-BM.json": [9140, 4206],
                "./nb-NO.json": [9192, 2385],
                "./ne-NP.json": [9718, 9576],
                "./nl-NL.json": [4995, 5779],
                "./nn-NO.json": [5588, 5194],
                "./package.json": [940, 3373],
                "./pl-PL.json": [3515, 8980],
                "./pt-BR.json": [1308, 7546],
                "./pt-PT.json": [1227, 6547],
                "./ro-RO.json": [9813, 344],
                "./ru-RU.json": [7637, 4737],
                "./sl-SL.json": [8982, 6558],
                "./sr-RS.json": [2847, 9367],
                "./sv-SE.json": [6744, 940],
                "./te-IN.json": [4133, 3749],
                "./tr-TR.json": [6991, 5714],
                "./uk-UA.json": [6169, 8523],
                "./vi-VN.json": [5300, 7811],
                "./zh-CN.json": [3344, 7226],
                "./zh-HK.json": [6976, 4417],
                "./zh-TW.json": [6904, 1608]
            };

            function o(e) {
                if (!n.o(r, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = r[e],
                    o = t[0];
                return n.e(t[1]).then((() => n.t(o, 19)))
            }
            o.keys = () => Object.keys(r), o.id = 9047, e.exports = o
        },
        9084: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = n(4265),
                a = n(1853),
                i = n(953).indexOf,
                l = n(7565),
                s = r([].push);
            e.exports = function(e, t) {
                var n, r = a(e),
                    c = 0,
                    u = [];
                for (n in r) !o(l, n) && o(r, n) && s(u, n);
                for (; t.length > c;) o(r, n = t[c++]) && (~i(u, n) || s(u, n));
                return u
            }
        },
        9108: (e, t, n) => {
            "use strict";
            var r = n(312),
                o = n(6597),
                a = n(7085),
                i = n(2679),
                l = n(5289),
                s = n(7205),
                c = n(2526),
                u = n(6392),
                d = n(6601),
                h = n(4715),
                f = Array;
            e.exports = function(e) {
                var t = a(e),
                    n = s(this),
                    v = arguments.length,
                    p = v > 1 ? arguments[1] : void 0,
                    m = void 0 !== p;
                m && (p = r(p, v > 2 ? arguments[2] : void 0));
                var g, y, b, w, k, x, S = h(t),
                    A = 0;
                if (!S || this === f && l(S))
                    for (g = c(t), y = n ? new this(g) : f(g); g > A; A++) x = m ? p(t[A], A) : t[A], u(y, A, x);
                else
                    for (y = n ? new this : [], k = (w = d(t, S)).next; !(b = o(k, w)).done; A++) x = m ? i(w, p, [b.value, A], !0) : b.value, u(y, A, x);
                return y.length = A, y
            }
        },
        9123: (e, t, n) => {
            "use strict";
            var r = n(6724),
                o = n(553),
                a = n(5644);
            e.exports = r ? function(e, t, n) {
                return o.f(e, t, a(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        9135: (e, t, n) => {
            "use strict";
            var r = n(5088);
            e.exports = function(e, t, n) {
                for (var o in t) r(e, o, t[o], n);
                return e
            }
        },
        9144: (e, t, n) => {
            "use strict";
            var r = n(1853),
                o = n(5213),
                a = n(2245),
                i = n(7173),
                l = n(553).f,
                s = n(1256),
                c = n(7353),
                u = n(8867),
                d = n(6724),
                h = "Array Iterator",
                f = i.set,
                v = i.getterFor(h);
            e.exports = s(Array, "Array", (function(e, t) {
                f(this, {
                    type: h,
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var e = v(this),
                    t = e.target,
                    n = e.index++;
                if (!t || n >= t.length) return e.target = null, c(void 0, !0);
                switch (e.kind) {
                    case "keys":
                        return c(n, !1);
                    case "values":
                        return c(t[n], !1)
                }
                return c([n, t[n]], !1)
            }), "values");
            var p = a.Arguments = a.Array;
            if (o("keys"), o("values"), o("entries"), !u && d && "values" !== p.name) try {
                l(p, "name", {
                    value: "values"
                })
            } catch (e) {}
        },
        9159: (e, t, n) => {
            "use strict";
            var r, o, a = n(6024),
                i = n(6191),
                l = a.process,
                s = a.Deno,
                c = l && l.versions || s && s.version,
                u = c && c.v8;
            u && (o = (r = u.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && i && (!(r = i.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = i.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
        },
        9206: (e, t, n) => {
            "use strict";
            var r = n(5088),
                o = n(4520),
                a = n(4935),
                i = n(500),
                l = URLSearchParams,
                s = l.prototype,
                c = o(s.getAll),
                u = o(s.has),
                d = new l("a=1");
            !d.has("a", 2) && d.has("a", void 0) || r(s, "has", (function(e) {
                var t = arguments.length,
                    n = t < 2 ? void 0 : arguments[1];
                if (t && void 0 === n) return u(this, e);
                var r = c(this, e);
                i(t, 1);
                for (var o = a(n), l = 0; l < r.length;)
                    if (r[l++] === o) return !0;
                return !1
            }), {
                enumerable: !0,
                unsafe: !0
            })
        },
        9207: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298).has,
                a = n(170),
                i = n(2165),
                l = n(6243),
                s = n(9515);
            e.exports = function(e) {
                var t = r(this),
                    n = i(e);
                if (a(t) < n.size) return !1;
                var c = n.getIterator();
                return !1 !== l(c, (function(e) {
                    if (!o(t, e)) return s(c, "normal", !1)
                }))
            }
        },
        9250: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(6415),
                a = n(9565),
                i = n(8392),
                l = n(5011),
                s = TypeError;
            e.exports = function(e, t) {
                var n = e.exec;
                if (a(n)) {
                    var c = r(n, e, t);
                    return null !== c && o(c), c
                }
                if ("RegExp" === i(e)) return r(l, e, t);
                throw new s("RegExp#exec called on incompatible receiver")
            }
        },
        9270: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => i,
                N: () => l
            });
            var r = n(6886);
            n(4430), n(5658);
            const o = (0, r.q6)({}),
                a = () => (Math.random() + 1).toString(36).substring(7),
                i = e => {
                    let t = {},
                        n = {};
                    const i = e => {
                            try {
                                const r = JSON.parse(e.data);
                                t[r.id] && (t[r.id](r), delete t[r.id]), n[r.id] && n[r.id](r)
                            } catch (e) {
                                console.error("APP", "TransportProvider", "Failed to handle message", e)
                            }
                        },
                        l = e => {
                            try {
                                var t;
                                null === (t = window) || void 0 === t || null === (t = t.top) || void 0 === t || t.postMessage(JSON.stringify(e), "*")
                            } catch (e) {
                                console.warn("APP", "TransportProvider", "Failed to post message", e)
                            }
                        };
                    return (0, r.Rc)((() => {
                        window.addEventListener("message", i)
                    })), (0, r.Ki)((() => {
                        t = {}, n = {}, window.removeEventListener("message", i)
                    })), (0, r.a0)(o.Provider, {
                        value: {
                            send: l,
                            request: (e, n, ...r) => new Promise(((o, i) => {
                                const s = a();
                                t[s] = ({
                                    handler: e,
                                    handlerResult: t,
                                    result: n,
                                    error: r
                                }) => e ? o([e, t]) : r ? i(r) : void o(n), l({
                                    id: s,
                                    scope: e,
                                    name: n,
                                    args: r
                                })
                            })),
                            listen: (e, t, r, ...o) => {
                                const i = a();
                                n[i] = ({
                                    handler: e,
                                    handlerResult: t
                                }) => {
                                    e && r(e, t)
                                }, l({
                                    id: i,
                                    scope: e,
                                    name: t,
                                    args: o
                                })
                            }
                        },
                        get children() {
                            return e.children
                        }
                    })
                },
                l = () => (0, r.NT)(o)
        },
        9296: (e, t, n) => {
            "use strict";
            n(9710)
        },
        9328: (e, t, n) => {
            "use strict";
            var r = n(6191);
            e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
        },
        9340: (e, t, n) => {
            "use strict";
            var r = n(47),
                o = function(e) {
                    return {
                        size: e,
                        has: function() {
                            return !1
                        },
                        keys: function() {
                            return {
                                next: function() {
                                    return {
                                        done: !0
                                    }
                                }
                            }
                        }
                    }
                },
                a = function(e) {
                    return {
                        size: e,
                        has: function() {
                            return !0
                        },
                        keys: function() {
                            throw new Error("e")
                        }
                    }
                };
            e.exports = function(e, t) {
                var n = r("Set");
                try {
                    (new n)[e](o(0));
                    try {
                        return (new n)[e](o(-1)), !1
                    } catch (r) {
                        if (!t) return !0;
                        try {
                            return (new n)[e](a(-1 / 0)), !1
                        } catch (r) {
                            var i = new n;
                            return i.add(1), i.add(2), t(i[e](a(1 / 0)))
                        }
                    }
                } catch (e) {
                    return !1
                }
            }
        },
        9354: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".text-input-LytqN {\n  position: relative;\n  height: 4.5rem;\n  width: 100%;\n  border: none;\n  border-radius: 1rem;\n  padding: 0 2rem;\n  font-family: 'PlusJakartaSans';\n  font-size: 1.5rem;\n  font-weight: 600;\n  text-overflow: ellipsis;\n  color: hsla(0, 0%, 100%, 0.5);\n  background-color: rgba(255, 255, 255, 0.03);\n  outline: none;\n}\n.text-input-LytqN[focused] {\n  box-shadow: 0 0 0 0.2rem rgba(255, 255, 255, 0.03) inset;\n}\n", ""]), i.locals = {
                "text-input": "text-input-LytqN"
            };
            const l = i
        },
        9515: (e, t, n) => {
            "use strict";
            var r = n(6597),
                o = n(6415),
                a = n(9654);
            e.exports = function(e, t, n) {
                var i, l;
                o(e);
                try {
                    if (!(i = a(e, "return"))) {
                        if ("throw" === t) throw n;
                        return n
                    }
                    i = r(i, e)
                } catch (e) {
                    l = !0, i = e
                }
                if ("throw" === t) throw n;
                if (l) throw i;
                return o(i), n
            }
        },
        9544: (e, t, n) => {
            "use strict";
            var r = n(4520),
                o = 0,
                a = Math.random(),
                i = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + i(++o + a, 36)
            }
        },
        9565: e => {
            "use strict";
            var t = "object" == typeof document && document.all;
            e.exports = void 0 === t && void 0 !== t ? function(e) {
                return "function" == typeof e || e === t
            } : function(e) {
                return "function" == typeof e
            }
        },
        9618: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".error-r441p {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  padding: 0 0.5rem;\n  font-size: 1.5rem;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n", ""]), i.locals = {
                error: "error-r441p"
            };
            const l = i
        },
        9654: (e, t, n) => {
            "use strict";
            var r = n(2786),
                o = n(7597);
            e.exports = function(e, t) {
                var n = e[t];
                return o(n) ? void 0 : r(n)
            }
        },
        9702: (e, t, n) => {
            "use strict";
            var r = n(6024),
                o = n(9565),
                a = r.WeakMap;
            e.exports = o(a) && /native code/.test(String(a))
        },
        9710: (e, t, n) => {
            "use strict";
            var r = n(2798),
                o = n(6597),
                a = n(2786),
                i = n(6415),
                l = n(4479),
                s = n(8462),
                c = n(2679),
                u = n(8867),
                d = s((function() {
                    for (var e, t, n = this.iterator, r = this.predicate, a = this.next;;) {
                        if (e = i(o(a, n)), this.done = !!e.done) return;
                        if (t = e.value, c(n, r, [t, this.counter++], !0)) return t
                    }
                }));
            r({
                target: "Iterator",
                proto: !0,
                real: !0,
                forced: u
            }, {
                filter: function(e) {
                    return i(this), a(e), new d(l(this), {
                        predicate: e
                    })
                }
            })
        },
        9784: (e, t, n) => {
            "use strict";
            n(7335)
        },
        9792: e => {
            "use strict";
            var t = {};
            e.exports = function(e, n) {
                var r = function(e) {
                    if (void 0 === t[e]) {
                        var n = document.querySelector(e);
                        if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                            n = n.contentDocument.head
                        } catch (e) {
                            n = null
                        }
                        t[e] = n
                    }
                    return t[e]
                }(e);
                if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                r.appendChild(n)
            }
        },
        9814: (e, t, n) => {
            "use strict";
            var r = n(8448),
                o = n(6298),
                a = n(170),
                i = n(2165),
                l = n(877),
                s = n(6243),
                c = o.Set,
                u = o.add,
                d = o.has;
            e.exports = function(e) {
                var t = r(this),
                    n = i(e),
                    o = new c;
                return a(t) > n.size ? s(n.getIterator(), (function(e) {
                    d(t, e) && u(o, e)
                })) : l(t, (function(e) {
                    n.includes(e) && u(o, e)
                })), o
            }
        },
        9826: (e, t, n) => {
            "use strict";
            e.exports = n.p + "0cf35cc8444a3ffca8d9.png"
        },
        9840: (e, t, n) => {
            var r = n(6758),
                o = {
                    all: function() {
                        return r
                    },
                    has: function(e, t) {
                        return void 0 !== a(e, t)
                    },
                    codes: function(e) {
                        if (function(e) {
                                return -1 !== [1, 2, 3, "1", "2", "2B", "2T", "3"].indexOf(e)
                            }(e)) return i(r, (function(t) {
                            return t[e]
                        }))
                    },
                    names: function(e) {
                        return i(r, (function(t) {
                            return e ? t.local : t.name
                        }))
                    },
                    where: a
                };

            function a(e, t) {
                for (var n = 0; n < r.length; n++)
                    if (t === r[n][e]) return r[n]
            }

            function i(e, t) {
                var n, r = [];
                for (n = 0; n < e.length; n++) r.push(t(e[n], n));
                return r
            }
            e.exports = o
        },
        9846: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                i = n.n(a)()(o());
            i.push([e.id, ".content-fVsQg {\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n}\n.content-fVsQg > * {\n  margin: 0 1rem 0 1rem;\n}\n.content-fVsQg > :first-child {\n  margin-left: 0;\n}\n.content-fVsQg > :last-child {\n  margin-right: 0;\n}\n", ""]), i.locals = {
                content: "content-fVsQg"
            };
            const l = i
        },
        9947: (e, t, n) => {
            "use strict";
            var r = n(2240),
                o = n(2526),
                a = n(2669),
                i = n(312),
                l = function(e, t, n, s, c, u, d, h) {
                    for (var f, v, p = c, m = 0, g = !!d && i(d, h); m < s;) m in n && (f = g ? g(n[m], m, t) : n[m], u > 0 && r(f) ? (v = o(f), p = l(e, t, f, v, p, u - 1) - 1) : (a(p + 1), e[p] = f), p++), m++;
                    return p
                };
            e.exports = l
        },
        9996: (e, t, n) => {
            "use strict";
            var r, o, a, i = n(2798),
                l = n(8867),
                s = n(3289),
                c = n(6024),
                u = n(6597),
                d = n(5088),
                h = n(4303),
                f = n(135),
                v = n(137),
                p = n(2786),
                m = n(9565),
                g = n(8666),
                y = n(2031),
                b = n(6077),
                w = n(8033).set,
                k = n(283),
                x = n(6685),
                S = n(6071),
                A = n(3569),
                T = n(7173),
                M = n(702),
                B = n(2124),
                E = n(4915),
                j = "Promise",
                C = B.CONSTRUCTOR,
                I = B.REJECTION_EVENT,
                L = B.SUBCLASSING,
                P = T.getterFor(j),
                z = T.set,
                O = M && M.prototype,
                R = M,
                N = O,
                q = c.TypeError,
                F = c.document,
                _ = c.process,
                D = E.f,
                Y = D,
                V = !!(F && F.createEvent && c.dispatchEvent),
                U = "unhandledrejection",
                H = function(e) {
                    var t;
                    return !(!g(e) || !m(t = e.then)) && t
                },
                G = function(e, t) {
                    var n, r, o, a = t.value,
                        i = 1 === t.state,
                        l = i ? e.ok : e.fail,
                        s = e.resolve,
                        c = e.reject,
                        d = e.domain;
                    try {
                        l ? (i || (2 === t.rejection && J(t), t.rejection = 1), !0 === l ? n = a : (d && d.enter(), n = l(a), d && (d.exit(), o = !0)), n === e.promise ? c(new q("Promise-chain cycle")) : (r = H(n)) ? u(r, n, s, c) : s(n)) : c(a)
                    } catch (e) {
                        d && !o && d.exit(), c(e)
                    }
                },
                K = function(e, t) {
                    e.notified || (e.notified = !0, k((function() {
                        for (var n, r = e.reactions; n = r.get();) G(n, e);
                        e.notified = !1, t && !e.rejection && Z(e)
                    })))
                },
                W = function(e, t, n) {
                    var r, o;
                    V ? ((r = F.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
                        promise: t,
                        reason: n
                    }, !I && (o = c["on" + e]) ? o(r) : e === U && x("Unhandled promise rejection", n)
                },
                Z = function(e) {
                    u(w, c, (function() {
                        var t, n = e.facade,
                            r = e.value;
                        if ($(e) && (t = S((function() {
                                s ? _.emit("unhandledRejection", r, n) : W(U, n, r)
                            })), e.rejection = s || $(e) ? 2 : 1, t.error)) throw t.value
                    }))
                },
                $ = function(e) {
                    return 1 !== e.rejection && !e.parent
                },
                J = function(e) {
                    u(w, c, (function() {
                        var t = e.facade;
                        s ? _.emit("rejectionHandled", t) : W("rejectionhandled", t, e.value)
                    }))
                },
                X = function(e, t, n) {
                    return function(r) {
                        e(t, r, n)
                    }
                },
                Q = function(e, t, n) {
                    e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, K(e, !0))
                },
                ee = function(e, t, n) {
                    if (!e.done) {
                        e.done = !0, n && (e = n);
                        try {
                            if (e.facade === t) throw new q("Promise can't be resolved itself");
                            var r = H(t);
                            r ? k((function() {
                                var n = {
                                    done: !1
                                };
                                try {
                                    u(r, t, X(ee, n, e), X(Q, n, e))
                                } catch (t) {
                                    Q(n, t, e)
                                }
                            })) : (e.value = t, e.state = 1, K(e, !1))
                        } catch (t) {
                            Q({
                                done: !1
                            }, t, e)
                        }
                    }
                };
            if (C && (N = (R = function(e) {
                    y(this, N), p(e), u(r, this);
                    var t = P(this);
                    try {
                        e(X(ee, t), X(Q, t))
                    } catch (e) {
                        Q(t, e)
                    }
                }).prototype, (r = function(e) {
                    z(this, {
                        type: j,
                        done: !1,
                        notified: !1,
                        parent: !1,
                        reactions: new A,
                        rejection: !1,
                        state: 0,
                        value: null
                    })
                }).prototype = d(N, "then", (function(e, t) {
                    var n = P(this),
                        r = D(b(this, R));
                    return n.parent = !0, r.ok = !m(e) || e, r.fail = m(t) && t, r.domain = s ? _.domain : void 0, 0 === n.state ? n.reactions.add(r) : k((function() {
                        G(r, n)
                    })), r.promise
                })), o = function() {
                    var e = new r,
                        t = P(e);
                    this.promise = e, this.resolve = X(ee, t), this.reject = X(Q, t)
                }, E.f = D = function(e) {
                    return e === R || undefined === e ? new o(e) : Y(e)
                }, !l && m(M) && O !== Object.prototype)) {
                a = O.then, L || d(O, "then", (function(e, t) {
                    var n = this;
                    return new R((function(e, t) {
                        u(a, n, e, t)
                    })).then(e, t)
                }), {
                    unsafe: !0
                });
                try {
                    delete O.constructor
                } catch (e) {}
                h && h(O, N)
            }
            i({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: C
            }, {
                Promise: R
            }), f(R, j, !1, !0), v(j)
        }
    },
    e => {
        var t;
        t = 4490, e(e.s = t)
    }
]);