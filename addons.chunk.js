"use strict";
(self.webpackChunkstremio_theater = self.webpackChunkstremio_theater || []).push([
    [5710], {
        6042: (n, e, t) => {
            t.r(e), t.d(e, {
                default: () => J
            });
            var i = t(8224),
                a = t(6886),
                s = t(5967),
                o = t(7253),
                d = t(1043),
                r = t(6934),
                l = t(5994),
                c = t(1727),
                g = t.n(c),
                h = t(8156),
                m = t.n(h),
                A = t(9792),
                S = t.n(A),
                u = t(3735),
                _ = t.n(u),
                f = t(2283),
                L = t.n(f),
                T = t(7128),
                U = t.n(T),
                I = t(7516),
                v = {};
            v.styleTagTransform = U(), v.setAttributes = _(), v.insert = S().bind(null, "head"), v.domAPI = m(), v.insertStyleElement = L();
            g()(I.A, v);
            const D = I.A && I.A.locals ? I.A.locals : void 0;
            var p = (0, i.vs)("<div><div></div><div>");
            const J = () => {
                const {
                    t: n
                } = (0, o.B)(), e = (0, r.Y)(), {
                    ctx: t
                } = (0, l.gK)(), c = () => {
                    t.syncAddons(), e.show({
                        title: n("STREMIO_TV_ADDONS_SYNC_ADDONS"),
                        message: n("STREMIO_TV_ADDONS_SYNC_SUCCESS")
                    })
                };
                return (0, a.a0)(d.YW, {
                    get class() {
                        return D.addons
                    },
                    get children() {
                        return [(0, a.a0)(s.A, {
                            get class() {
                                return D.icon
                            },
                            name: "addons"
                        }), (e = p(), t = e.firstChild, o = t.nextSibling, (0, i.Yr)(t, (() => n("STREMIO_TV_ADDONS_TITLE"))), (0, i.Yr)(o, (() => n("STREMIO_TV_ADDONS_SUBTITLE"))), (0, a.gb)((n => {
                            var a = D.heading,
                                s = D.title,
                                d = D.note;
                            return a !== n.e && (0, i.s7)(e, n.e = a), s !== n.t && (0, i.s7)(t, n.t = s), d !== n.a && (0, i.s7)(o, n.a = d), n
                        }), {
                            e: void 0,
                            t: void 0,
                            a: void 0
                        }), e), (0, a.a0)(d.$n, {
                            icon: "cloud-sync",
                            get label() {
                                return n("STREMIO_TV_ADDONS_SYNC_ADDONS")
                            },
                            autoFocus: !0,
                            onPress: c
                        })];
                        var e, t, o
                    }
                })
            }
        },
        7516: (n, e, t) => {
            t.d(e, {
                A: () => d
            });
            var i = t(2608),
                a = t.n(i),
                s = t(6305),
                o = t.n(s)()(a());
            o.push([n.id, ".addons-LUJe6 {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.addons-LUJe6 > * {\n  margin: 1.25rem 0 1.25rem 0;\n}\n.addons-LUJe6 > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .icon-4a3iU {\n  height: 10rem;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.addons-LUJe6 .heading-q2AKI > * {\n  margin: 0.25rem 0 0.25rem 0;\n}\n.addons-LUJe6 .heading-q2AKI > :first-child {\n  margin-top: 0;\n}\n.addons-LUJe6 .heading-q2AKI > :last-child {\n  margin-bottom: 0;\n}\n.addons-LUJe6 .heading-q2AKI .title-ZSLYp {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: hsla(0, 0%, 100%, 0.9);\n}\n.addons-LUJe6 .heading-q2AKI .note-y2pKA {\n  font-size: 1.5rem;\n  font-weight: 500;\n  font-style: italic;\n  color: hsla(0, 0%, 100%, 0.5);\n}\n", ""]), o.locals = {
                addons: "addons-LUJe6",
                icon: "icon-4a3iU",
                heading: "heading-q2AKI",
                title: "title-ZSLYp",
                note: "note-y2pKA"
            };
            const d = o
        }
    }
]);