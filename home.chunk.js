"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [7962], {
        1363: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => B
            });
            var r = n(8224),
                o = n(6886),
                a = (n(9144), n(9784), n(9296), n(5073), n(7253)),
                l = n(1043),
                s = n(5994),
                i = n(4922),
                u = n(980),
                c = n(1727),
                d = n.n(c),
                g = n(8156),
                h = n.n(g),
                v = n(9792),
                m = n.n(v),
                p = n(3735),
                C = n.n(p),
                b = n(2283),
                f = n.n(b),
                A = n(7128),
                w = n.n(A),
                k = n(9860),
                y = {};
            y.styleTagTransform = w(), y.setAttributes = C(), y.insert = m().bind(null, "head"), y.domAPI = h(), y.insertStyleElement = f();
            d()(k.A, y);
            const I = k.A && k.A.locals ? k.A.locals : void 0;
            var P = (0, r.vs)("<div class=message>Due to operating system restrictions, some Stremio features and streams are currently unavailable on this device.<br>We're working to provide full functionality in a future update."),
                S = (0, r.vs)("<div class=buttons>");
            const T = "home",
                B = () => {
                    var e, t, n, c;
                    const {
                        t: d
                    } = (0, a.B)(), g = (0, u.Vj)(), h = (0, i.SR)(500), {
                        continueWatching: v,
                        board: m
                    } = (0, s.gK)(), {
                        pages: p
                    } = (0, s.Pj)(), {
                        getCache: C,
                        setCache: b
                    } = p, f = () => C(T), [A, w] = (0, o.n5)(null !== (e = null === (t = f()) || void 0 === t ? void 0 : t.row) && void 0 !== e ? e : 0), [k, y] = (0, o.n5)(null !== (n = null === (c = f()) || void 0 === c ? void 0 : c.item) && void 0 !== n ? n : 0), [B, W] = (0, o.n5)(null), [x, F, G] = (0, i.zD)(), [N, , j] = (0, i.zD)(!localStorage.getItem("titan") && (!0 === g.isTitan || !0 === g.isNetTV)), z = () => v.items().length ? {
                        title: d("CONTINUE_WATCHING"),
                        content: v.items()
                    } : null, D = e => {
                        w(e)
                    }, E = (e, t) => {
                        (0, o.vA)((() => {
                            W(e), y(t)
                        }))
                    }, K = () => {
                        localStorage.setItem("titan", "true"), j()
                    };
                    return (0, o.EH)((() => {
                        const e = A() - (z() ? 1 : 0);
                        h((() => m.loadCatalogs(e)))
                    })), (0, i.k9)([A, k], (([e, t]) => {
                        b(T, {
                            row: e,
                            item: t
                        })
                    })), (0, o.Rc)((() => {
                        m.load()
                    })), (0, o.Ki)((() => {
                        m.unload()
                    })), (0, o.a0)(l.YW, {
                        get class() {
                            return I.home
                        },
                        get children() {
                            return [(0, o.a0)(l.Gn, {
                                get item() {
                                    return B()
                                }
                            }), (0, o.a0)(l.bp, {
                                get item() {
                                    return B()
                                },
                                open: x,
                                onClose: G
                            }), (0, o.a0)(l.OY, {
                                get class() {
                                    return I.content
                                },
                                axis: "vertical",
                                get children() {
                                    return (0, o.a0)(o.jK, {
                                        get each() {
                                            return [z(), ...m.catalogs()].filter((e => null !== e))
                                        },
                                        children: (e, t) => (0, o.a0)(l.WC, {
                                            get catalog() {
                                                return e()
                                            },
                                            index: t,
                                            get itemIndex() {
                                                return k()
                                            },
                                            get autoFocus() {
                                                return A() === t
                                            },
                                            showMore: !0,
                                            onFocus: D,
                                            onChange: E,
                                            onSelect: F
                                        })
                                    })
                                }
                            }), (0, o.a0)(o.wv, {
                                get when() {
                                    return N()
                                },
                                get children() {
                                    return (0, o.a0)(l.aF, {
                                        title: "Attention",
                                        onClose: j,
                                        get children() {
                                            return [P(), (e = S(), (0, r.Yr)(e, (0, o.a0)(l.$n, {
                                                label: "I understand",
                                                autoFocus: !0,
                                                onPress: K
                                            })), e)];
                                            var e
                                        }
                                    })
                                }
                            })]
                        }
                    })
                }
        },
        9860: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var r = n(2608),
                o = n.n(r),
                a = n(6305),
                l = n.n(a)()(o());
            l.push([e.id, ".home-qPkGc .content-BPvBy {\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n}\n", ""]), l.locals = {
                home: "home-qPkGc",
                content: "content-BPvBy"
            };
            const s = l
        }
    }
]);