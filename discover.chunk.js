"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [8842], {
        3447: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => W
            });
            var s = n(8224),
                r = n(6886),
                o = (n(9144), n(9784), n(7961), n(5073), n(656)),
                a = n(5994),
                i = n(4922),
                l = n(1407),
                c = n(1043),
                d = (n(3238), n(7253));
            const g = ({
                selectable: e
            }) => {
                const {
                    t: t
                } = (0, d.B)(), n = (0, i.ze)();
                return {
                    types: () => e().types.map((({
                        deepLinks: e,
                        type: n,
                        selected: s
                    }) => ({
                        value: e.discover,
                        label: t(`TYPE_${n}`, n),
                        selected: s
                    }))),
                    catalogs: () => e().catalogs.map((({
                        deepLinks: e,
                        selected: t,
                        ...s
                    }) => ({
                        value: e.discover,
                        label: n.name(s),
                        selected: t
                    }))),
                    extra: () => e().extra.map((({
                        options: e
                    }) => e.map((({
                        value: e,
                        deepLinks: n,
                        selected: s
                    }) => ({
                        value: n.discover,
                        label: e ? t(e, e) : t("NONE"),
                        selected: s
                    })))))
                }
            };
            var v = n(1727),
                u = n.n(v),
                p = n(8156),
                m = n.n(p),
                h = n(9792),
                f = n.n(h),
                y = n(3735),
                _ = n.n(y),
                C = n(2283),
                b = n.n(C),
                x = n(7128),
                N = n.n(x),
                k = n(5772),
                K = {};
            K.styleTagTransform = N(), K.setAttributes = _(), K.insert = f().bind(null, "head"), K.domAPI = m(), K.insertStyleElement = b();
            u()(k.A, K);
            const F = k.A && k.A.locals ? k.A.locals : void 0;
            var R = (0, s.vs)("<div>");
            const A = "discover",
                W = () => {
                    const e = (0, o.W6)(),
                        t = (0, o.g)(),
                        [n] = (0, o.ok)(),
                        {
                            discover: d
                        } = (0, a.gK)(),
                        v = g(d),
                        {
                            pages: u
                        } = (0, a.Pj)(),
                        {
                            getCache: p,
                            setCache: m
                        } = u,
                        [h, f] = (0, r.n5)(t().type && null !== (y = null === (_ = p(A)) || void 0 === _ ? void 0 : _.item) && void 0 !== y ? y : 0);
                    var y, _;
                    const [C, b] = (0, r.n5)(null), [x, N, k] = (0, i.zD)(), K = t => {
                        e.navigate(t)
                    }, W = (e, t) => {
                        (0, r.vA)((() => {
                            b(e), f(t)
                        }))
                    }, w = () => {
                        d.loadNextPage()
                    };
                    return (0, r.EH)((() => {
                        const {
                            transportUrl: s,
                            type: r,
                            id: o
                        } = t(), { ...a
                        } = n();
                        if (s && r && o) return d.loadCatalog(s, r, o, Object.entries(a));
                        if (r && !s && !o) {
                            const t = d.selectable().types.find((e => e.type === r));
                            if (t) return e.navigate(t.deepLinks.discover)
                        }
                        d.load()
                    })), (0, i.k9)([t, n], (() => {
                        f(0)
                    })), (0, i.k9)(h, (e => {
                        m(A, {
                            item: e
                        })
                    })), (0, r.Ki)((() => {
                        d.unload()
                    })), (0, r.a0)(c.YW, {
                        get class() {
                            return F.discover
                        },
                        get children() {
                            return [(0, r.a0)(c.Gn, {
                                get item() {
                                    return C()
                                }
                            }), (0, r.a0)(c.bp, {
                                get item() {
                                    return C()
                                },
                                open: x,
                                onClose: k
                            }), (e = R(), (0, s.Yr)(e, (0, r.a0)(l.Gk, {
                                get class() {
                                    return F.filters
                                },
                                leave: ["left", "down"],
                                get children() {
                                    return [(0, r.a0)(c.l6, {
                                        get options() {
                                            return v.types()
                                        },
                                        onChange: K
                                    }), (0, r.a0)(c.l6, {
                                        get options() {
                                            return v.catalogs()
                                        },
                                        onChange: K
                                    }), (0, r.a0)(r.a, {
                                        get each() {
                                            return v.extra()
                                        },
                                        children: e => (0, r.a0)(c.l6, {
                                            options: e,
                                            onChange: K
                                        })
                                    })]
                                }
                            }), null), (0, s.Yr)(e, (0, r.a0)(r.wv, {
                                get when() {
                                    return d.catalog()
                                },
                                children: e => (0, r.a0)(c.WC, {
                                    get catalog() {
                                        return e()
                                    },
                                    index: 0,
                                    get itemIndex() {
                                        return h()
                                    },
                                    autoFocus: !0,
                                    onChange: W,
                                    onNextPage: w,
                                    onSelect: N
                                })
                            }), null), (0, r.gb)((() => (0, s.s7)(e, F.content))), e)];
                            var e
                        }
                    })
                }
        },
        5772: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var s = n(2608),
                r = n.n(s),
                o = n(6305),
                a = n.n(o)()(r());
            a.push([e.id, ".discover-sKRNy .content-sFo_t {\n  z-index: 1;\n  position: relative;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: visible;\n}\n.discover-sKRNy .content-sFo_t > * {\n  margin: 1rem 0 1rem 0;\n}\n.discover-sKRNy .content-sFo_t > :first-child {\n  margin-top: 0;\n}\n.discover-sKRNy .content-sFo_t > :last-child {\n  margin-bottom: 0;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW {\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  padding: 0 4rem;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > * {\n  margin: 0 0.75rem 0 0.75rem;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > :first-child {\n  margin-left: 0;\n}\n.discover-sKRNy .content-sFo_t .filters-C_DVW > :last-child {\n  margin-right: 0;\n}\n", ""]), a.locals = {
                discover: "discover-sKRNy",
                content: "content-sFo_t",
                filters: "filters-C_DVW"
            };
            const i = a
        }
    }
]);