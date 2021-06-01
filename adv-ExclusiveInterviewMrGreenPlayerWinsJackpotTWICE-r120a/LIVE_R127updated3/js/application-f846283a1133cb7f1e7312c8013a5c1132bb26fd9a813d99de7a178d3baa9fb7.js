function addLinkToCopyPaste() {
    _bk_paq.trackEvent(["body-20170216-copy_paste", "1-happened"]);
    var e, t = document.getElementsByTagName("body")[0];
    e = window.getSelection();
    var n = window.helpers.changeUrlParam(document.location.href, "utm_source", "cpp"),
        r = "<br /><br /> Read more at: <a href='" + n + "'>" + n + "</a>",
        i = e + r,
        o = document.createElement("div");
    o.style.position = "absolute", o.style.left = "-99999px", t.appendChild(o), o.innerHTML = i, e.selectAllChildren(o), window.setTimeout(function() {
        t.removeChild(o)
    }, 0)
}! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t, n) {
        n = n || ke;
        var r, i, o = n.createElement("script");
        if (o.text = e, t)
            for (r in xe)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? pe[he.call(e)] || "object" : typeof e
    }

    function i(e) {
        var t = !!e && "length" in e && e.length,
            n = r(e);
        return !we(e) && !be(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function o(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function s(e, t, n) {
        return we(t) ? Ce.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? Ce.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? Ce.grep(e, function(e) {
            return fe.call(t, e) > -1 !== n
        }) : Ce.filter(t, e, n)
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var t = {};
        return Ce.each(e.match(Oe) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function c(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function d(e, t, n, r) {
        var i;
        try {
            e && we(i = e.promise) ? i.call(e).done(t).fail(n) : e && we(i = e.then) ? i.call(e, t, n) : t.apply(undefined, [e].slice(r))
        } catch (e) {
            n.apply(undefined, [e])
        }
    }

    function f() {
        ke.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), Ce.ready()
    }

    function p(e, t) {
        return t.toUpperCase()
    }

    function h(e) {
        return e.replace(Ie, "ms-").replace(Me, p)
    }

    function g() {
        this.expando = Ce.expando + g.uid++
    }

    function m(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Be.test(e) ? JSON.parse(e) : e)
    }

    function v(e, t, n) {
        var r;
        if (n === undefined && 1 === e.nodeType)
            if (r = "data-" + t.replace(ze, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = m(n)
                } catch (e) {}
                Ue.set(e, t, n)
            } else n = undefined;
        return n
    }

    function y(e, t, n, r) {
        var i, o, s = 20,
            a = r ? function() {
                return r.cur()
            } : function() {
                return Ce.css(e, t, "")
            },
            u = a(),
            c = n && n[3] || (Ce.cssNumber[t] ? "" : "px"),
            l = e.nodeType && (Ce.cssNumber[t] || "px" !== c && +u) && We.exec(Ce.css(e, t));
        if (l && l[3] !== c) {
            for (u /= 2, c = c || l[3], l = +u || 1; s--;) Ce.style(e, t, l + c), (1 - o) * (1 - (o = a() / u || .5)) <= 0 && (s = 0), l /= o;
            l *= 2, Ce.style(e, t, l + c), n = n || []
        }
        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
    }

    function w(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = Ke[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = Ce.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), Ke[r] = i, i)
    }

    function b(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = He.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Qe(r) && (i[o] = w(r))) : "none" !== n && (i[o] = "none", He.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function k(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], t === undefined || t && o(e, t) ? Ce.merge([e], n) : n
    }

    function x(e, t) {
        for (var n = 0, r = e.length; n < r; n++) He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"))
    }

    function _(e, t, n, i, o) {
        for (var s, a, u, c, l, d, f = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
            if ((s = e[h]) || 0 === s)
                if ("object" === r(s)) Ce.merge(p, s.nodeType ? [s] : s);
                else if (rt.test(s)) {
            for (a = a || f.appendChild(t.createElement("div")), u = (et.exec(s) || ["", ""])[1].toLowerCase(), c = nt[u] || nt._default, a.innerHTML = c[1] + Ce.htmlPrefilter(s) + c[2], d = c[0]; d--;) a = a.lastChild;
            Ce.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
        } else p.push(t.createTextNode(s));
        for (f.textContent = "", h = 0; s = p[h++];)
            if (i && Ce.inArray(s, i) > -1) o && o.push(s);
            else if (l = Je(s), a = k(f.appendChild(s), "script"), l && x(a), n)
            for (d = 0; s = a[d++];) tt.test(s.type || "") && n.push(s);
        return f
    }

    function C() {
        return !0
    }

    function T() {
        return !1
    }

    function j(e, t) {
        return e === S() == ("focus" === t)
    }

    function S() {
        try {
            return ke.activeElement
        } catch (e) {}
    }

    function E(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = undefined);
            for (a in t) E(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = undefined) : null == i && ("string" == typeof n ? (i = r, r = undefined) : (i = r, r = n, n = undefined)), !1 === i) i = T;
        else if (!i) return e;
        return 1 === o && (s = i, i = function(e) {
            return Ce().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = Ce.guid++)), e.each(function() {
            Ce.event.add(this, t, i, r, n)
        })
    }

    function A(e, t, n) {
        if (!n) return void(He.get(e, t) === undefined && Ce.event.add(e, t, C));
        He.set(e, t, !1), Ce.event.add(e, t, {
            namespace: !1,
            handler: function(e) {
                var r, i, o = He.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                    if (o.length)(Ce.event.special[t] || {}).delegateType && e.stopPropagation();
                    else if (o = ce.call(arguments), He.set(this, t, o), r = n(this, t), this[t](), i = He.get(this, t), o !== i || r ? He.set(this, t, !1) : i = {}, o !== i) return e.stopImmediatePropagation(), e.preventDefault(), i.value
                } else o.length && (He.set(this, t, {
                    value: Ce.event.trigger(Ce.extend(o[0], Ce.Event.prototype), o.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })
    }

    function $(e, t) {
        return o(e, "table") && o(11 !== t.nodeType ? t : t.firstChild, "tr") ? Ce(e).children("tbody")[0] || e : e
    }

    function N(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function D(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function L(e, t) {
        var n, r, i, o, s, a, u;
        if (1 === t.nodeType) {
            if (He.hasData(e) && (o = He.get(e), u = o.events)) {
                He.remove(t, "handle events");
                for (i in u)
                    for (n = 0, r = u[i].length; n < r; n++) Ce.event.add(t, i, u[i][n])
            }
            Ue.hasData(e) && (s = Ue.access(e), a = Ce.extend({}, s), Ue.set(t, a))
        }
    }

    function O(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Ze.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function P(e, t, r, i) {
        t = le(t);
        var o, s, a, u, c, l, d = 0,
            f = e.length,
            p = f - 1,
            h = t[0],
            g = we(h);
        if (g || f > 1 && "string" == typeof h && !ye.checkClone && ut.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), P(o, t, r, i)
        });
        if (f && (o = _(t, e[0].ownerDocument, !1, e, i), s = o.firstChild, 1 === o.childNodes.length && (o = s), s || i)) {
            for (a = Ce.map(k(o, "script"), N), u = a.length; d < f; d++) c = o, d !== p && (c = Ce.clone(c, !0, !0), u && Ce.merge(a, k(c, "script"))), r.call(e[d], c, d);
            if (u)
                for (l = a[a.length - 1].ownerDocument, Ce.map(a, D), d = 0; d < u; d++) c = a[d], tt.test(c.type || "") && !He.access(c, "globalEval") && Ce.contains(l, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? Ce._evalUrl && !c.noModule && Ce._evalUrl(c.src, {
                    nonce: c.nonce || c.getAttribute("nonce")
                }, l) : n(c.textContent.replace(ct, ""), c, l))
        }
        return e
    }

    function q(e, t, n) {
        for (var r, i = t ? Ce.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || Ce.cleanData(k(r)), r.parentNode && (n && Je(r) && x(k(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function R(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || dt(e), n && (s = n.getPropertyValue(t) || n[t], "" !== s || Je(e) || (s = Ce.style(e, t)), !ye.pixelBoxStyles() && lt.test(s) && pt.test(t) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o)), s !== undefined ? s + "" : s
    }

    function I(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function M(e) {
        for (var t = e[0].toUpperCase() + e.slice(1), n = ht.length; n--;)
            if ((e = ht[n] + t) in gt) return e
    }

    function F(e) {
        var t = Ce.cssProps[e] || mt[e];
        return t || (e in gt ? e : mt[e] = M(e) || e)
    }

    function H(e, t, n) {
        var r = We.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function U(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
            a = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (u += Ce.css(e, n + Ge[s], !0, i)), r ? ("content" === n && (u -= Ce.css(e, "padding" + Ge[s], !0, i)), "margin" !== n && (u -= Ce.css(e, "border" + Ge[s] + "Width", !0, i))) : (u += Ce.css(e, "padding" + Ge[s], !0, i), "padding" !== n ? u += Ce.css(e, "border" + Ge[s] + "Width", !0, i) : a += Ce.css(e, "border" + Ge[s] + "Width", !0, i));
        return !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - a - .5)) || 0), u
    }

    function B(e, t, n) {
        var r = dt(e),
            i = !ye.boxSizingReliable() || n,
            s = i && "border-box" === Ce.css(e, "boxSizing", !1, r),
            a = s,
            u = R(e, t, r),
            c = "offset" + t[0].toUpperCase() + t.slice(1);
        if (lt.test(u)) {
            if (!n) return u;
            u = "auto"
        }
        return (!ye.boxSizingReliable() && s || !ye.reliableTrDimensions() && o(e, "tr") || "auto" === u || !parseFloat(u) && "inline" === Ce.css(e, "display", !1, r)) && e.getClientRects().length && (s = "border-box" === Ce.css(e, "boxSizing", !1, r), (a = c in e) && (u = e[c])), (u = parseFloat(u) || 0) + U(e, t, n || (s ? "border" : "content"), a, r, u) + "px"
    }

    function z(e, t, n, r, i) {
        return new z.prototype.init(e, t, n, r, i)
    }

    function V() {
        xt && (!1 === ke.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(V) : e.setTimeout(V, Ce.fx.interval), Ce.fx.tick())
    }

    function W() {
        return e.setTimeout(function() {
            kt = undefined
        }), kt = Date.now()
    }

    function G(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = Ge[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function X(e, t, n) {
        for (var r, i = (Q.tweeners[t] || []).concat(Q.tweeners["*"]), o = 0, s = i.length; o < s; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function J(e, t, n) {
        var r, i, o, s, a, u, c, l, d = "width" in t || "height" in t,
            f = this,
            p = {},
            h = e.style,
            g = e.nodeType && Qe(e),
            m = He.get(e, "fxshow");
        n.queue || (s = Ce._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function() {
            s.unqueued || a()
        }), s.unqueued++, f.always(function() {
            f.always(function() {
                s.unqueued--, Ce.queue(e, "fx").length || s.empty.fire()
            })
        }));
        for (r in t)
            if (i = t[r], _t.test(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                    if ("show" !== i || !m || m[r] === undefined) continue;
                    g = !0
                }
                p[r] = m && m[r] || Ce.style(e, r)
            } if ((u = !Ce.isEmptyObject(t)) || !Ce.isEmptyObject(p)) {
            d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = m && m.display, null == c && (c = He.get(e, "display")), l = Ce.css(e, "display"), "none" === l && (c ? l = c : (b([e], !0), c = e.style.display || c, l = Ce.css(e, "display"), b([e]))), ("inline" === l || "inline-block" === l && null != c) && "none" === Ce.css(e, "float") && (u || (f.done(function() {
                h.display = c
            }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", f.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
            })), u = !1;
            for (r in p) u || (m ? "hidden" in m && (g = m.hidden) : m = He.access(e, "fxshow", {
                display: c
            }), o && (m.hidden = !g), g && b([e], !0), f.done(function() {
                g || b([e]), He.remove(e, "fxshow");
                for (r in p) Ce.style(e, r, p[r])
            })), u = X(g ? m[r] : 0, r, f), r in m || (m[r] = u.start, g && (u.end = u.start, u.start = 0))
        }
    }

    function Y(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = h(n), i = t[r], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (s = Ce.cssHooks[r]) && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function Q(e, t, n) {
        var r, i, o = 0,
            s = Q.prefilters.length,
            a = Ce.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (i) return !1;
                for (var t = kt || W(), n = Math.max(0, c.startTime + c.duration - t), r = n / c.duration || 0, o = 1 - r, s = 0, u = c.tweens.length; s < u; s++) c.tweens[s].run(o);
                return a.notifyWith(e, [c, o, n]), o < 1 && u ? n : (u || a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c]), !1)
            },
            c = a.promise({
                elem: e,
                props: Ce.extend({}, t),
                opts: Ce.extend(!0, {
                    specialEasing: {},
                    easing: Ce.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: kt || W(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = Ce.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function(t) {
                    var n = 0,
                        r = t ? c.tweens.length : 0;
                    if (i) return this;
                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                    return t ? (a.notifyWith(e, [c, 1, 0]), a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]), this
                }
            }),
            l = c.props;
        for (Y(l, c.opts.specialEasing); o < s; o++)
            if (r = Q.prefilters[o].call(c, e, l, c.opts)) return we(r.stop) && (Ce._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)), r;
        return Ce.map(l, X, c), we(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), Ce.fx.timer(Ce.extend(u, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c
    }

    function K(e) {
        return (e.match(Oe) || []).join(" ")
    }

    function Z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function ee(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Oe) || [] : []
    }

    function te(e, t, n, i) {
        var o;
        if (Array.isArray(t)) Ce.each(t, function(t, r) {
            n || Pt.test(e) ? i(e, r) : te(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
        });
        else if (n || "object" !== r(t)) i(e, t);
        else
            for (o in t) te(e + "[" + o + "]", t[o], n, i)
    }

    function ne(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0,
                o = t.toLowerCase().match(Oe) || [];
            if (we(n))
                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function re(e, t, n, r) {
        function i(a) {
            var u;
            return o[a] = !0, Ce.each(e[a] || [], function(e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || s || o[c] ? s ? !(u = c) : void 0 : (t.dataTypes.unshift(c), i(c), !1)
            }), u
        }
        var o = {},
            s = e === Gt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function ie(e, t) {
        var n, r, i = Ce.ajaxSettings.flatOptions || {};
        for (n in t) t[n] !== undefined && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && Ce.extend(!0, e, r), e
    }

    function oe(e, t, n) {
        for (var r, i, o, s, a = e.contents, u = e.dataTypes;
            "*" === u[0];) u.shift(), r === undefined && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (i in a)
                if (a[i] && a[i].test(r)) {
                    u.unshift(i);
                    break
                } if (u[0] in n) o = u[0];
        else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break
                }
                s || (s = i)
            }
            o = o || s
        }
        if (o) return o !== u[0] && u.unshift(o), n[o]
    }

    function se(e, t, n, r) {
        var i, o, s, a, u, c = {},
            l = e.dataTypes.slice();
        if (l[1])
            for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = l.shift(); o;)
            if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = l.shift())
                if ("*" === o) o = u;
                else if ("*" !== u && u !== o) {
            if (!(s = c[u + " " + o] || c["* " + o]))
                for (i in c)
                    if (a = i.split(" "), a[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                        !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
                        break
                    } if (!0 !== s)
                if (s && e["throws"]) t = s(t);
                else try {
                    t = s(t)
                } catch (e) {
                    return {
                        state: "parsererror",
                        error: s ? e : "No conversion from " + u + " to " + o
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var ae = [],
        ue = Object.getPrototypeOf,
        ce = ae.slice,
        le = ae.flat ? function(e) {
            return ae.flat.call(e)
        } : function(e) {
            return ae.concat.apply([], e)
        },
        de = ae.push,
        fe = ae.indexOf,
        pe = {},
        he = pe.toString,
        ge = pe.hasOwnProperty,
        me = ge.toString,
        ve = me.call(Object),
        ye = {},
        we = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        be = function(e) {
            return null != e && e === e.window
        },
        ke = e.document,
        xe = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        },
        _e = "3.5.1",
        Ce = function(e, t) {
            return new Ce.fn.init(e, t)
        };
    Ce.fn = Ce.prototype = {
        jquery: _e,
        constructor: Ce,
        length: 0,
        toArray: function() {
            return ce.call(this)
        },
        get: function(e) {
            return null == e ? ce.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = Ce.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return Ce.each(this, e)
        },
        map: function(e) {
            return this.pushStack(Ce.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ce.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(Ce.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(Ce.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: de,
        sort: ae.sort,
        splice: ae.splice
    }, Ce.extend = Ce.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || we(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
            if (null != (e = arguments[a]))
                for (t in e) r = e[t], "__proto__" !== t && s !== r && (c && r && (Ce.isPlainObject(r) || (i = Array.isArray(r))) ? (n = s[t], o = i && !Array.isArray(n) ? [] : i || Ce.isPlainObject(n) ? n : {}, i = !1, s[t] = Ce.extend(c, o, r)) : r !== undefined && (s[t] = r));
        return s
    }, Ce.extend({
        expando: "jQuery" + (_e + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== he.call(e)) && (!(t = ue(e)) || "function" == typeof(n = ge.call(t, "constructor") && t.constructor) && me.call(n) === ve)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, r) {
            n(e, {
                nonce: t && t.nonce
            }, r)
        },
        each: function(e, t) {
            var n, r = 0;
            if (i(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (i(Object(e)) ? Ce.merge(n, "string" == typeof e ? [e] : e) : de.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : fe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++) !t(e[i], i) !== s && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, o, s = 0,
                a = [];
            if (i(e))
                for (r = e.length; s < r; s++) null != (o = t(e[s], s, n)) && a.push(o);
            else
                for (s in e) null != (o = t(e[s], s, n)) && a.push(o);
            return le(a)
        },
        guid: 1,
        support: ye
    }), "function" == typeof Symbol && (Ce.fn[Symbol.iterator] = ae[Symbol.iterator]), Ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        pe["[object " + t + "]"] = t.toLowerCase()
    });
    var Te = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, u, c, l, f = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && (D(t), t = t || L, P)) {
                if (11 !== h && (u = we.exec(e)))
                    if (i = u[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(i))) return n;
                            if (s.id === i) return n.push(s), n
                        } else if (f && (s = f.getElementById(i)) && M(t, s) && s.id === i) return n.push(s), n
                    } else {
                        if (u[2]) return Z.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = u[3]) && x.getElementsByClassName && t.getElementsByClassName) return Z.apply(n, t.getElementsByClassName(i)), n
                    } if (x.qsa && !G[e + " "] && (!q || !q.test(e)) && (1 !== h || "object" !== t.nodeName.toLowerCase())) {
                    if (l = e, f = t, 1 === h && (de.test(e) || le.test(e))) {
                        for (f = be.test(e) && d(t.parentNode) || t, f === t && x.scope || ((a = t.getAttribute("id")) ? a = a.replace(_e, Ce) : t.setAttribute("id", a = F)), c = j(e), o = c.length; o--;) c[o] = (a ? "#" + a : ":scope") + " " + p(c[o]);
                        l = c.join(",")
                    }
                    try {
                        return Z.apply(n, f.querySelectorAll(l)), n
                    } catch (t) {
                        G(e, !0)
                    } finally {
                        a === F && t.removeAttribute("id")
                    }
                }
            }
            return E(e.replace(ue, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[F] = !0, e
        }

        function i(e) {
            var t = L.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) _.attrHandle[n[r]] = t
        }

        function s(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && je(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        function f() {}

        function p(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function h(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                s = n && "parentNode" === o,
                a = B++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || s) return e(t, n, i);
                return !1
            } : function(t, n, u) {
                var c, l, d, f = [U, a];
                if (u) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || s) && e(t, n, u)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || s)
                            if (d = t[F] || (t[F] = {}), l = d[t.uniqueID] || (d[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[o]) && c[0] === U && c[1] === a) return f[2] = c[2];
                                if (l[o] = f, f[2] = e(t, n, u)) return !0
                            } return !1
            }
        }

        function g(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function m(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function v(e, t, n, r, i) {
            for (var o, s = [], a = 0, u = e.length, c = null != t; a < u; a++)(o = e[a]) && (n && !n(o, r, i) || (s.push(o), c && t.push(a)));
            return s
        }

        function y(e, t, n, i, o, s) {
            return i && !i[F] && (i = y(i)), o && !o[F] && (o = y(o, s)), r(function(r, s, a, u) {
                var c, l, d, f = [],
                    p = [],
                    h = s.length,
                    g = r || m(t || "*", a.nodeType ? [a] : a, []),
                    y = !e || !r && t ? g : v(g, f, e, a, u),
                    w = n ? o || (r ? e : h || i) ? [] : s : y;
                if (n && n(y, w, a, u), i)
                    for (c = v(w, p), i(c, [], a, u), l = c.length; l--;)(d = c[l]) && (w[p[l]] = !(y[p[l]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], l = w.length; l--;)(d = w[l]) && c.push(y[l] = d);
                            o(null, w = [], c, u)
                        }
                        for (l = w.length; l--;)(d = w[l]) && (c = o ? te(r, d) : f[l]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else w = v(w === s ? w.splice(h, w.length) : w), o ? o(null, s, w, u) : Z.apply(s, w)
            })
        }

        function w(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, u = h(function(e) {
                    return e === t
                }, s, !0), c = h(function(e) {
                    return te(t, e) > -1
                }, s, !0), l = [function(e, n, r) {
                    var i = !o && (r || n !== A) || ((t = n).nodeType ? u(e, n, r) : c(e, n, r));
                    return t = null, i
                }]; a < i; a++)
                if (n = _.relative[e[a].type]) l = [h(g(l), n)];
                else {
                    if (n = _.filter[e[a].type].apply(null, e[a].matches), n[F]) {
                        for (r = ++a; r < i && !_.relative[e[r].type]; r++);
                        return y(a > 1 && g(l), a > 1 && p(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ue, "$1"), n, a < r && w(e.slice(a, r)), r < i && w(e = e.slice(r)), r < i && p(e))
                    }
                    l.push(n)
                } return g(l)
        }

        function b(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                s = function(r, s, a, u, c) {
                    var l, d, f, p = 0,
                        h = "0",
                        g = r && [],
                        m = [],
                        y = A,
                        w = r || o && _.find.TAG("*", c),
                        b = U += null == y ? 1 : Math.random() || .1,
                        k = w.length;
                    for (c && (A = s == L || s || c); h !== k && null != (l = w[h]); h++) {
                        if (o && l) {
                            for (d = 0, s || l.ownerDocument == L || (D(l), a = !P); f = e[d++];)
                                if (f(l, s || L, a)) {
                                    u.push(l);
                                    break
                                } c && (U = b)
                        }
                        i && ((l = !f && l) && p--, r && g.push(l))
                    }
                    if (p += h, i && h !== p) {
                        for (d = 0; f = n[d++];) f(g, m, s, a);
                        if (r) {
                            if (p > 0)
                                for (; h--;) g[h] || m[h] || (m[h] = Q.call(u));
                            m = v(m)
                        }
                        Z.apply(u, m), c && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u)
                    }
                    return c && (U = b, A = y), g
                };
            return i ? r(s) : s
        }
        var k, x, _, C, T, j, S, E, A, $, N, D, L, O, P, q, R, I, M, F = "sizzle" + 1 * new Date,
            H = e.document,
            U = 0,
            B = 0,
            z = n(),
            V = n(),
            W = n(),
            G = n(),
            X = function(e, t) {
                return e === t && (N = !0), 0
            },
            J = {}.hasOwnProperty,
            Y = [],
            Q = Y.pop,
            K = Y.push,
            Z = Y.push,
            ee = Y.slice,
            te = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            ne = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            re = "[\\x20\\t\\r\\n\\f]",
            ie = "(?:\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            oe = "\\[" + re + "*(" + ie + ")(?:" + re + "*([*^$|!~]?=)" + re + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ie + "))|)" + re + "*\\]",
            se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
            ae = new RegExp(re + "+", "g"),
            ue = new RegExp("^" + re + "+|((?:^|[^\\\\])(?:\\\\.)*)" + re + "+$", "g"),
            ce = new RegExp("^" + re + "*," + re + "*"),
            le = new RegExp("^" + re + "*([>+~]|" + re + ")" + re + "*"),
            de = new RegExp(re + "|>"),
            fe = new RegExp(se),
            pe = new RegExp("^" + ie + "$"),
            he = {
                ID: new RegExp("^#(" + ie + ")"),
                CLASS: new RegExp("^\\.(" + ie + ")"),
                TAG: new RegExp("^(" + ie + "|[*])"),
                ATTR: new RegExp("^" + oe),
                PSEUDO: new RegExp("^" + se),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + re + "*(even|odd|(([+-]|)(\\d*)n|)" + re + "*(?:([+-]|)" + re + "*(\\d+)|))" + re + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ne + ")$", "i"),
                needsContext: new RegExp("^" + re + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + re + "*((?:-\\d)?\\d*)" + re + "*\\)|)(?=[^-]|$)", "i")
            },
            ge = /HTML$/i,
            me = /^(?:input|select|textarea|button)$/i,
            ve = /^h\d$/i,
            ye = /^[^{]+\{\s*\[native \w/,
            we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            be = /[+~]/,
            ke = new RegExp("\\\\[\\da-fA-F]{1,6}" + re + "?|\\\\([^\\r\\n\\f])", "g"),
            xe = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            _e = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            Ce = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            Te = function() {
                D()
            },
            je = h(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            Z.apply(Y = ee.call(H.childNodes), H.childNodes), Y[H.childNodes.length].nodeType
        } catch (e) {
            Z = {
                apply: Y.length ? function(e, t) {
                    K.apply(e, ee.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !ge.test(t || n && n.nodeName || "HTML")
        }, D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : H;
            return r != L && 9 === r.nodeType && r.documentElement ? (L = r, O = L.documentElement, P = !T(L), H != L && (n = L.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), x.scope = i(function(e) {
                return O.appendChild(e).appendChild(L.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
            }), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(L.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = ye.test(L.getElementsByClassName), x.getById = i(function(e) {
                return O.appendChild(e).id = F, !L.getElementsByName || !L.getElementsByName(F).length
            }), x.getById ? (_.filter.ID = function(e) {
                var t = e.replace(ke, xe);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, _.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (_.filter.ID = function(e) {
                var t = e.replace(ke, xe);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, _.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && P) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), _.find.TAG = x.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, _.find.CLASS = x.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && P) return t.getElementsByClassName(e)
            }, R = [], q = [], (x.qsa = ye.test(L.querySelectorAll)) && (i(function(e) {
                var t;
                O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + re + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || q.push("\\[" + re + "*(?:value|" + ne + ")"), e.querySelectorAll("[id~=" + F + "-]").length || q.push("~="), t = L.createElement("input"), t.setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || q.push("\\[" + re + "*name" + re + "*=" + re + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || q.push(":checked"), e.querySelectorAll("a#" + F + "+*").length || q.push(".#.+[+~]"), e.querySelectorAll("\\\f"), q.push("[\\r\\n\\f]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = L.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && q.push("name" + re + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), O.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), q.push(",.*:")
            })), (x.matchesSelector = ye.test(I = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = I.call(e, "*"), I.call(e, "[s!='']:x"), R.push("!=", se)
            }), q = q.length && new RegExp(q.join("|")), R = R.length && new RegExp(R.join("|")), t = ye.test(O.compareDocumentPosition), M = t || ye.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, X = t ? function(e, t) {
                if (e === t) return N = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e == L || e.ownerDocument == H && M(H, e) ? -1 : t == L || t.ownerDocument == H && M(H, t) ? 1 : $ ? te($, e) - te($, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return N = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    u = [t];
                if (!i || !o) return e == L ? -1 : t == L ? 1 : i ? -1 : o ? 1 : $ ? te($, e) - te($, t) : 0;
                if (i === o) return s(e, t);
                for (n = e; n = n.parentNode;) a.unshift(n);
                for (n = t; n = n.parentNode;) u.unshift(n);
                for (; a[r] === u[r];) r++;
                return r ? s(a[r], u[r]) : a[r] == H ? -1 : u[r] == H ? 1 : 0
            }, L) : L
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if (D(e), x.matchesSelector && P && !G[n + " "] && (!R || !R.test(n)) && (!q || !q.test(n))) try {
                var r = I.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {
                G(n, !0)
            }
            return t(n, L, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) != L && D(e), M(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) != L && D(e);
            var n = _.attrHandle[t.toLowerCase()],
                r = n && J.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !P) : undefined;
            return r !== undefined ? r : x.attributes || !P ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(_e, Ce)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (N = !x.detectDuplicates, $ = !x.sortStable && e.slice(0), e.sort(X), N) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return $ = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, _ = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: he,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ke, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ke, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return he.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && fe.test(n) && (t = j(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ke, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + re + ")" + e + "(" + re + "|$)")) && z(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ae, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        s = "last" !== e.slice(-4),
                        a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var c, l, d, f, p, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            v = a && t.nodeName.toLowerCase(),
                            y = !u && !a,
                            w = !1;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? m.firstChild : m.lastChild], s && y) {
                                for (f = m, d = f[F] || (f[F] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), c = l[e] || [], p = c[0] === U && c[1], w = p && c[2], f = p && m.childNodes[p]; f = ++p && f && f[g] || (w = p = 0) || h.pop();)
                                    if (1 === f.nodeType && ++w && f === t) {
                                        l[e] = [U, p, w];
                                        break
                                    }
                            } else if (y && (f = t, d = f[F] || (f[F] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), c = l[e] || [], p = c[0] === U && c[1], w = p), !1 === w)
                                for (;
                                    (f = ++p && f && f[g] || (w = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++w || (y && (d = f[F] || (f[F] = {}), l = d[f.uniqueID] || (d[f.uniqueID] = {}), l[e] = [U, w]), f !== t)););
                            return (w -= i) === r || w % r == 0 && w / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n], _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--;) r = te(e, i[s]), e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = S(e.replace(ue, "$1"));
                    return i[F] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ke, xe),
                        function(t) {
                            return (t.textContent || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return pe.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ke, xe).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = P ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: c(!1),
                disabled: c(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return ve.test(e.nodeName)
                },
                input: function(e) {
                    return me.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, _.pseudos.nth = _.pseudos.eq;
        for (k in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) _.pseudos[k] = a(k);
        for (k in {
                submit: !0,
                reset: !0
            }) _.pseudos[k] = u(k);
        return f.prototype = _.filters = _.pseudos, _.setFilters = new f, j = t.tokenize = function(e, n) {
            var r, i, o, s, a, u, c, l = V[e + " "];
            if (l) return n ? 0 : l.slice(0);
            for (a = e, u = [], c = _.preFilter; a;) {
                r && !(i = ce.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), r = !1, (i = le.exec(a)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(ue, " ")
                }), a = a.slice(r.length));
                for (s in _.filter) !(i = he[s].exec(a)) || c[s] && !(i = c[s](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: s,
                    matches: i
                }), a = a.slice(r.length));
                if (!r) break
            }
            return n ? a.length : a ? t.error(e) : V(e, u).slice(0)
        }, S = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = W[e + " "];
            if (!o) {
                for (t || (t = j(e)), n = t.length; n--;) o = w(t[n]), o[F] ? r.push(o) : i.push(o);
                o = W(e, b(i, r)), o.selector = e
            }
            return o
        }, E = t.select = function(e, t, n, r) {
            var i, o, s, a, u, c = "function" == typeof e && e,
                l = !r && j(e = c.selector || e);
            if (n = n || [], 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && 9 === t.nodeType && P && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ke, xe), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = he.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i], !_.relative[a = s.type]);)
                    if ((u = _.find[a]) && (r = u(s.matches[0].replace(ke, xe), be.test(o[0].type) && d(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && p(o))) return Z.apply(n, r), n;
                        break
                    }
            }
            return (c || S(e, l))(r, t, !P, n, !t || be.test(e) && d(t.parentNode) || t), n
        }, x.sortStable = F.split("").sort(X).join("") === F, x.detectDuplicates = !!N, D(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(ne, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    Ce.find = Te, Ce.expr = Te.selectors, Ce.expr[":"] = Ce.expr.pseudos, Ce.uniqueSort = Ce.unique = Te.uniqueSort, Ce.text = Te.getText, Ce.isXMLDoc = Te.isXML, Ce.contains = Te.contains, Ce.escapeSelector = Te.escape;
    var je = function(e, t, n) {
            for (var r = [], i = n !== undefined;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && Ce(e).is(n)) break;
                    r.push(e)
                } return r
        },
        Se = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        Ee = Ce.expr.match.needsContext,
        Ae = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    Ce.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? Ce.find.matchesSelector(r, e) ? [r] : [] : Ce.find.matches(e, Ce.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, Ce.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(Ce(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (Ce.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) Ce.find(e, i[t], n);
            return r > 1 ? Ce.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function(e) {
            return !!s(this, "string" == typeof e && Ee.test(e) ? Ce(e) : e || [], !1).length
        }
    });
    var $e, Ne = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (Ce.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || $e, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Ne.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof Ce ? t[0] : t, Ce.merge(this, Ce.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : ke, !0)), Ae.test(r[1]) && Ce.isPlainObject(t))
                    for (r in t) we(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = ke.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : we(e) ? n.ready !== undefined ? n.ready(e) : e(Ce) : Ce.makeArray(e, this)
    }).prototype = Ce.fn, $e = Ce(ke);
    var De = /^(?:parents|prev(?:Until|All))/,
        Le = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    Ce.fn.extend({
        has: function(e) {
            var t = Ce(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (Ce.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                s = "string" != typeof e && Ce(e);
            if (!Ee.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Ce.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        } return this.pushStack(o.length > 1 ? Ce.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.call(Ce(e), this[0]) : fe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(Ce.uniqueSort(Ce.merge(this.get(), Ce(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), Ce.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return je(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return je(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return je(e, "nextSibling")
        },
        prevAll: function(e) {
            return je(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return je(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return je(e, "previousSibling", n)
        },
        siblings: function(e) {
            return Se((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return Se(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && ue(e.contentDocument) ? e.contentDocument : (o(e, "template") && (e = e.content || e), Ce.merge([], e.childNodes))
        }
    }, function(e, t) {
        Ce.fn[e] = function(n, r) {
            var i = Ce.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = Ce.filter(r, i)), this.length > 1 && (Le[e] || Ce.uniqueSort(i), De.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var Oe = /[^\x20\t\r\n\f]+/g;
    Ce.Callbacks = function(e) {
        e = "string" == typeof e ? u(e) : Ce.extend({}, e);
        var t, n, i, o, s = [],
            a = [],
            c = -1,
            l = function() {
                for (o = o || e.once, i = t = !0; a.length; c = -1)
                    for (n = a.shift(); ++c < s.length;) !1 === s[c].apply(n[0], n[1]) && e.stopOnFalse && (c = s.length, n = !1);
                e.memory || (n = !1), t = !1, o && (s = n ? [] : "")
            },
            d = {
                add: function() {
                    return s && (n && !t && (c = s.length - 1, a.push(n)), function t(n) {
                        Ce.each(n, function(n, i) {
                            we(i) ? e.unique && d.has(i) || s.push(i) : i && i.length && "string" !== r(i) && t(i)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return Ce.each(arguments, function(e, t) {
                        for (var n;
                            (n = Ce.inArray(t, s, n)) > -1;) s.splice(n, 1), n <= c && c--
                    }), this
                },
                has: function(e) {
                    return e ? Ce.inArray(e, s) > -1 : s.length > 0
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return o = a = [], s = n = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return o = a = [], n || t || (s = n = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, n) {
                    return o || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return d
    }, Ce.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", Ce.Callbacks("memory"), Ce.Callbacks("memory"), 2],
                    ["resolve", "done", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", Ce.Callbacks("once memory"), Ce.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return Ce.Deferred(function(t) {
                            Ce.each(n, function(n, r) {
                                var i = we(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && we(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var a = this,
                                    u = arguments,
                                    d = function() {
                                        var e, d;
                                        if (!(t < s)) {
                                            if ((e = r.apply(a, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            d = e && ("object" == typeof e || "function" == typeof e) && e.then, we(d) ? i ? d.call(e, o(s, n, c, i), o(s, n, l, i)) : (s++, d.call(e, o(s, n, c, i), o(s, n, l, i), o(s, n, c, n.notifyWith))) : (r !== c && (a = undefined, u = [e]), (i || n.resolveWith)(a, u))
                                        }
                                    },
                                    f = i ? d : function() {
                                        try {
                                            d()
                                        } catch (e) {
                                            Ce.Deferred.exceptionHook && Ce.Deferred.exceptionHook(e, f.stackTrace), t + 1 >= s && (r !== l && (a = undefined, u = [e]), n.rejectWith(a, u))
                                        }
                                    };
                                t ? f() : (Ce.Deferred.getStackHook && (f.stackTrace = Ce.Deferred.getStackHook()), e.setTimeout(f))
                            }
                        }
                        var s = 0;
                        return Ce.Deferred(function(e) {
                            n[0][3].add(o(0, e, we(i) ? i : c, e.notifyWith)), n[1][3].add(o(0, e, we(t) ? t : c)), n[2][3].add(o(0, e, we(r) ? r : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? Ce.extend(e, i) : i
                    }
                },
                o = {};
            return Ce.each(n, function(e, t) {
                var s = t[2],
                    a = t[5];
                i[t[1]] = s.add, a && s.add(function() {
                    r = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock), s.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? undefined : this, arguments), this
                }, o[t[0] + "With"] = s.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = ce.call(arguments),
                o = Ce.Deferred(),
                s = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? ce.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (d(e, o.done(s(n)).resolve, o.reject, !t), "pending" === o.state() || we(i[n] && i[n].then))) return o.then();
            for (; n--;) d(i[n], s(n), o.reject);
            return o.promise()
        }
    });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    Ce.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, Ce.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var qe = Ce.Deferred();
    Ce.fn.ready = function(e) {
        return qe.then(e)["catch"](function(e) {
            Ce.readyException(e)
        }), this
    }, Ce.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --Ce.readyWait : Ce.isReady) || (Ce.isReady = !0, !0 !== e && --Ce.readyWait > 0 || qe.resolveWith(ke, [Ce]))
        }
    }), Ce.ready.then = qe.then, "complete" === ke.readyState || "loading" !== ke.readyState && !ke.documentElement.doScroll ? e.setTimeout(Ce.ready) : (ke.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var Re = function(e, t, n, i, o, s, a) {
            var u = 0,
                c = e.length,
                l = null == n;
            if ("object" === r(n)) {
                o = !0;
                for (u in n) Re(e, t, u, n[u], !0, s, a)
            } else if (i !== undefined && (o = !0, we(i) || (a = !0), l && (a ? (t.call(e, i), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(Ce(e), n)
                })), t))
                for (; u < c; u++) t(e[u], n, a ? i : i.call(e[u], u, t(e[u], n)));
            return o ? e : l ? t.call(e) : c ? t(e[0], n) : s
        },
        Ie = /^-ms-/,
        Me = /-([a-z])/g,
        Fe = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1, g.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, Fe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[h(t)] = n;
            else
                for (r in t) i[h(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][h(t)]
        },
        access: function(e, t, n) {
            return t === undefined || t && "string" == typeof t && n === undefined ? this.get(e, t) : (this.set(e, t, n), n !== undefined ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (r !== undefined) {
                if (t !== undefined) {
                    Array.isArray(t) ? t = t.map(h) : (t = h(t), t = t in r ? [t] : t.match(Oe) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(t === undefined || Ce.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = undefined : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !Ce.isEmptyObject(t)
        }
    };
    var He = new g,
        Ue = new g,
        Be = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ze = /[A-Z]/g;
    Ce.extend({
        hasData: function(e) {
            return Ue.hasData(e) || He.hasData(e)
        },
        data: function(e, t, n) {
            return Ue.access(e, t, n)
        },
        removeData: function(e, t) {
            Ue.remove(e, t)
        },
        _data: function(e, t, n) {
            return He.access(e, t, n)
        },
        _removeData: function(e, t) {
            He.remove(e, t)
        }
    }), Ce.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                s = o && o.attributes;
            if (e === undefined) {
                if (this.length && (i = Ue.get(o), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--;) s[n] && (r = s[n].name, 0 === r.indexOf("data-") && (r = h(r.slice(5)), v(o, r, i[r])));
                    He.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Ue.set(this, e)
            }) : Re(this, function(t) {
                var n;
                if (o && t === undefined) {
                    if ((n = Ue.get(o, e)) !== undefined) return n;
                    if ((n = v(o, e)) !== undefined) return n
                } else this.each(function() {
                    Ue.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ue.remove(this, e)
            })
        }
    }), Ce.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = He.get(e, t), n && (!r || Array.isArray(n) ? r = He.access(e, t, Ce.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Ce.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = Ce._queueHooks(e, t),
                s = function() {
                    Ce.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return He.get(e, n) || He.access(e, n, {
                empty: Ce.Callbacks("once memory").add(function() {
                    He.remove(e, [t + "queue", n])
                })
            })
        }
    }), Ce.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Ce.queue(this[0], e) : t === undefined ? this : this.each(function() {
                var n = Ce.queue(this, e, t);
                Ce._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Ce.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                Ce.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = Ce.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = undefined), e = e || "fx"; s--;)(n = He.get(o[s], e + "queueHooks")) && n.empty && (r++, n.empty.add(a));
            return a(), i.promise(t)
        }
    });
    var Ve = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        We = new RegExp("^(?:([+-])=|)(" + Ve + ")([a-z%]*)$", "i"),
        Ge = ["Top", "Right", "Bottom", "Left"],
        Xe = ke.documentElement,
        Je = function(e) {
            return Ce.contains(e.ownerDocument, e)
        },
        Ye = {
            composed: !0
        };
    Xe.getRootNode && (Je = function(e) {
        return Ce.contains(e.ownerDocument, e) || e.getRootNode(Ye) === e.ownerDocument
    });
    var Qe = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && Je(e) && "none" === Ce.css(e, "display")
        },
        Ke = {};
    Ce.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Qe(this) ? Ce(this).show() : Ce(this).hide()
            })
        }
    });
    var Ze = /^(?:checkbox|radio)$/i,
        et = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        tt = /^$|^module$|\/(?:java|ecma)script/i;
    ! function() {
        var e = ke.createDocumentFragment(),
            t = e.appendChild(ke.createElement("div")),
            n = ke.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ye.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ye.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, t.innerHTML = "<option></option>", ye.option = !!t.lastChild
    }();
    var nt = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    nt.tbody = nt.tfoot = nt.colgroup = nt.caption = nt.thead, nt.th = nt.td, ye.option || (nt.optgroup = nt.option = [1, "<select multiple='multiple'>", "</select>"]);
    var rt = /<|&#?\w+;/,
        it = /^key/,
        ot = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        st = /^([^.]*)(?:\.(.+)|)/;
    Ce.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, u, c, l, d, f, p, h, g, m = He.get(e);
            if (Fe(e))
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && Ce.find.matchesSelector(Xe, i), n.guid || (n.guid = Ce.guid++), (u = m.events) || (u = m.events = Object.create(null)), (s = m.handle) || (s = m.handle = function(t) {
                        return void 0 !== Ce && Ce.event.triggered !== t.type ? Ce.event.dispatch.apply(e, arguments) : undefined
                    }), t = (t || "").match(Oe) || [""], c = t.length; c--;) a = st.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p && (d = Ce.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = Ce.event.special[p] || {}, l = Ce.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && Ce.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (f = u[p]) || (f = u[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)), d.add && (d.add.call(e, l), l.handler.guid || (l.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, l) : f.push(l), Ce.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, u, c, l, d, f, p, h, g, m = He.hasData(e) && He.get(e);
            if (m && (u = m.events)) {
                for (t = (t || "").match(Oe) || [""], c = t.length; c--;)
                    if (a = st.exec(t[c]) || [], p = g = a[1], h = (a[2] || "").split(".").sort(), p) {
                        for (d = Ce.event.special[p] || {}, p = (r ? d.delegateType : d.bindType) || p, f = u[p] || [], a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = o = f.length; o--;) l = f[o], !i && g !== l.origType || n && n.guid !== l.guid || a && !a.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (f.splice(o, 1), l.selector && f.delegateCount--, d.remove && d.remove.call(e, l));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || Ce.removeEvent(e, p, m.handle), delete u[p])
                    } else
                        for (p in u) Ce.event.remove(e, p + t[c], n, r, !0);
                Ce.isEmptyObject(u) && He.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, s, a = new Array(arguments.length),
                u = Ce.event.fix(e),
                c = (He.get(this, "events") || Object.create(null))[u.type] || [],
                l = Ce.event.special[u.type] || {};
            for (a[0] = u, t = 1; t < arguments.length; t++) a[t] = arguments[t];
            if (u.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, u)) {
                for (s = Ce.event.handlers.call(this, u, c), t = 0;
                    (i = s[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, (r = ((Ce.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a)) !== undefined && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s, a = [],
                u = t.delegateCount,
                c = e.target;
            if (u && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (o = [], s = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", s[i] === undefined && (s[i] = r.needsContext ? Ce(i, this).index(c) > -1 : Ce.find(i, this, null, [c]).length), s[i] && o.push(r);
                        o.length && a.push({
                            elem: c,
                            handlers: o
                        })
                    } return c = this, u < t.length && a.push({
                elem: c,
                handlers: t.slice(u)
            }), a
        },
        addProp: function(e, t) {
            Object.defineProperty(Ce.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: we(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[Ce.expando] ? e : new Ce.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return Ze.test(t.type) && t.click && o(t, "input") && A(t, "click", C), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return Ze.test(t.type) && t.click && o(t, "input") && A(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return Ze.test(t.type) && t.click && o(t, "input") && He.get(t, "click") || o(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== undefined && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, Ce.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, Ce.Event = function(e, t) {
        if (!(this instanceof Ce.Event)) return new Ce.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && !1 === e.returnValue ? C : T, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && Ce.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[Ce.expando] = !0
    }, Ce.Event.prototype = {
        constructor: Ce.Event,
        isDefaultPrevented: T,
        isPropagationStopped: T,
        isImmediatePropagationStopped: T,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = C, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = C, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = C, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, Ce.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && it.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && t !== undefined && ot.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, Ce.event.addProp), Ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        Ce.event.special[e] = {
            setup: function() {
                return A(this, e, j), !1
            },
            trigger: function() {
                return A(this, e), !0
            },
            delegateType: t
        }
    }), Ce.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Ce.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || Ce.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), Ce.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, Ce(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = undefined), !1 === n && (n = T), this.each(function() {
                Ce.event.remove(this, e, n, t)
            })
        }
    });
    var at = /<script|<style|<link/i,
        ut = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ct = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Ce.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, s, a = e.cloneNode(!0),
                u = Je(e);
            if (!(ye.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Ce.isXMLDoc(e)))
                for (s = k(a), o = k(e), r = 0, i = o.length; r < i; r++) O(o[r], s[r]);
            if (t)
                if (n)
                    for (o = o || k(e), s = s || k(a), r = 0, i = o.length; r < i; r++) L(o[r], s[r]);
                else L(e, a);
            return s = k(a, "script"), s.length > 0 && x(s, !u && k(e, "script")), a
        },
        cleanData: function(e) {
            for (var t, n, r, i = Ce.event.special, o = 0;
                (n = e[o]) !== undefined; o++)
                if (Fe(n)) {
                    if (t = n[He.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? Ce.event.remove(n, r) : Ce.removeEvent(n, r, t.handle);
                        n[He.expando] = undefined
                    }
                    n[Ue.expando] && (n[Ue.expando] = undefined)
                }
        }
    }), Ce.fn.extend({
        detach: function(e) {
            return q(this, e, !0)
        },
        remove: function(e) {
            return q(this, e)
        },
        text: function(e) {
            return Re(this, function(e) {
                return e === undefined ? Ce.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    $(this, e).appendChild(e)
                }
            })
        },
        prepend: function() {
            return P(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = $(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return P(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Ce.cleanData(k(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Ce.clone(this, e, t)
            })
        },
        html: function(e) {
            return Re(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === undefined && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !at.test(e) && !nt[(et.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = Ce.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (Ce.cleanData(k(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return P(this, arguments, function(t) {
                var n = this.parentNode;
                Ce.inArray(this, e) < 0 && (Ce.cleanData(k(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), Ce.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Ce.fn[e] = function(e) {
            for (var n, r = [], i = Ce(e), o = i.length - 1, s = 0; s <= o; s++) n = s === o ? this : this.clone(!0), Ce(i[s])[t](n), de.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var lt = new RegExp("^(" + Ve + ")(?!px)[a-z%]+$", "i"),
        dt = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        },
        ft = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = o[i];
            return r
        },
        pt = new RegExp(Ge.join("|"), "i");
    ! function() {
        function t() {
            if (l) {
                c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", Xe.appendChild(c).appendChild(l);
                var t = e.getComputedStyle(l);
                r = "1%" !== t.top, u = 12 === n(t.marginLeft), l.style.right = "60%", s = 36 === n(t.right), i = 36 === n(t.width), l.style.position = "absolute", o = 12 === n(l.offsetWidth / 3), Xe.removeChild(c), l = null
            }
        }

        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, i, o, s, a, u, c = ke.createElement("div"),
            l = ke.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ye.clearCloneStyle = "content-box" === l.style.backgroundClip, Ce.extend(ye, {
            boxSizingReliable: function() {
                return t(), i
            },
            pixelBoxStyles: function() {
                return t(), s
            },
            pixelPosition: function() {
                return t(), r
            },
            reliableMarginLeft: function() {
                return t(), u
            },
            scrollboxSize: function() {
                return t(), o
            },
            reliableTrDimensions: function() {
                var t, n, r, i;
                return null == a && (t = ke.createElement("table"), n = ke.createElement("tr"), r = ke.createElement("div"), t.style.cssText = "position:absolute;left:-11111px", n.style.height = "1px", r.style.height = "9px", Xe.appendChild(t).appendChild(n).appendChild(r), i = e.getComputedStyle(n), a = parseInt(i.height) > 3, Xe.removeChild(t)), a
            }
        }))
    }();
    var ht = ["Webkit", "Moz", "ms"],
        gt = ke.createElement("div").style,
        mt = {},
        vt = /^(none|table(?!-c[ea]).+)/,
        yt = /^--/,
        wt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bt = {
            letterSpacing: "0",
            fontWeight: "400"
        };
    Ce.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = R(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = h(t),
                    u = yt.test(t),
                    c = e.style;
                if (u || (t = F(a)), s = Ce.cssHooks[t] || Ce.cssHooks[a], n === undefined) return s && "get" in s && (i = s.get(e, !1, r)) !== undefined ? i : c[t];
                o = typeof n, "string" === o && (i = We.exec(n)) && i[1] && (n = y(e, t, i), o = "number"), null != n && n === n && ("number" !== o || u || (n += i && i[3] || (Ce.cssNumber[a] ? "" : "px")), ye.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"), s && "set" in s && (n = s.set(e, n, r)) === undefined || (u ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = h(t);
            return yt.test(t) || (t = F(a)), s = Ce.cssHooks[t] || Ce.cssHooks[a], s && "get" in s && (i = s.get(e, !0, n)), i === undefined && (i = R(e, t, r)), "normal" === i && t in bt && (i = bt[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), Ce.each(["height", "width"], function(e, t) {
        Ce.cssHooks[t] = {
            get: function(e, n, r) {
                if (n) return !vt.test(Ce.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? B(e, t, r) : ft(e, wt, function() {
                    return B(e, t, r)
                })
            },
            set: function(e, n, r) {
                var i, o = dt(e),
                    s = !ye.scrollboxSize() && "absolute" === o.position,
                    a = s || r,
                    u = a && "border-box" === Ce.css(e, "boxSizing", !1, o),
                    c = r ? U(e, t, r, u, o) : 0;
                return u && s && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - U(e, t, "border", !1, o) - .5)), c && (i = We.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = Ce.css(e, t)), H(e, n, c)
            }
        }
    }), Ce.cssHooks.marginLeft = I(ye.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(R(e, "marginLeft")) || e.getBoundingClientRect().left - ft(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), Ce.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Ce.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + Ge[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, "margin" !== e && (Ce.cssHooks[e + t].set = H)
    }), Ce.fn.extend({
        css: function(e, t) {
            return Re(this, function(e, t, n) {
                var r, i, o = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (r = dt(e), i = t.length; s < i; s++) o[t[s]] = Ce.css(e, t[s], !1, r);
                    return o
                }
                return n !== undefined ? Ce.style(e, t, n) : Ce.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }), Ce.Tween = z, z.prototype = {
        constructor: z,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || Ce.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (Ce.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = z.propHooks[this.prop];
            return e && e.get ? e.get(this) : z.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = z.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Ce.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : z.propHooks._default.set(this), this
        }
    }, z.prototype.init.prototype = z.prototype, z.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Ce.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                Ce.fx.step[e.prop] ? Ce.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !Ce.cssHooks[e.prop] && null == e.elem.style[F(e.prop)] ? e.elem[e.prop] = e.now : Ce.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, z.propHooks.scrollTop = z.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, Ce.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, Ce.fx = z.prototype.init, Ce.fx.step = {};
    var kt, xt, _t = /^(?:toggle|show|hide)$/,
        Ct = /queueHooks$/;
    Ce.Animation = Ce.extend(Q, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return y(n.elem, e, We.exec(t), n), n
                }]
            },
            tweener: function(e, t) {
                we(e) ? (t = e, e = ["*"]) : e = e.match(Oe);
                for (var n, r = 0, i = e.length; r < i; r++) n = e[r],
                    Q.tweeners[n] = Q.tweeners[n] || [], Q.tweeners[n].unshift(t)
            },
            prefilters: [J],
            prefilter: function(e, t) {
                t ? Q.prefilters.unshift(e) : Q.prefilters.push(e)
            }
        }), Ce.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? Ce.extend({}, e) : {
                complete: n || !n && t || we(e) && e,
                duration: e,
                easing: n && t || t && !we(t) && t
            };
            return Ce.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in Ce.fx.speeds ? r.duration = Ce.fx.speeds[r.duration] : r.duration = Ce.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                we(r.old) && r.old.call(this), r.queue && Ce.dequeue(this, r.queue)
            }, r
        }, Ce.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(Qe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(e, t, n, r) {
                var i = Ce.isEmptyObject(e),
                    o = Ce.speed(t, n, r),
                    s = function() {
                        var t = Q(this, Ce.extend({}, e), o);
                        (i || He.get(this, "finish")) && t.stop(!0)
                    };
                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(e, t, n) {
                var r = function(e) {
                    var t = e.stop;
                    delete e.stop, t(n)
                };
                return "string" != typeof e && (n = t, t = e, e = undefined), t && this.queue(e || "fx", []), this.each(function() {
                    var t = !0,
                        i = null != e && e + "queueHooks",
                        o = Ce.timers,
                        s = He.get(this);
                    if (i) s[i] && s[i].stop && r(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && Ct.test(i) && r(s[i]);
                    for (i = o.length; i--;) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
                    !t && n || Ce.dequeue(this, e)
                })
            },
            finish: function(e) {
                return !1 !== e && (e = e || "fx"), this.each(function() {
                    var t, n = He.get(this),
                        r = n[e + "queue"],
                        i = n[e + "queueHooks"],
                        o = Ce.timers,
                        s = r ? r.length : 0;
                    for (n.finish = !0, Ce.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                    for (t = 0; t < s; t++) r[t] && r[t].finish && r[t].finish.call(this);
                    delete n.finish
                })
            }
        }), Ce.each(["toggle", "show", "hide"], function(e, t) {
            var n = Ce.fn[t];
            Ce.fn[t] = function(e, r, i) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(G(t, !0), e, r, i)
            }
        }), Ce.each({
            slideDown: G("show"),
            slideUp: G("hide"),
            slideToggle: G("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            Ce.fn[e] = function(e, n, r) {
                return this.animate(t, e, n, r)
            }
        }), Ce.timers = [], Ce.fx.tick = function() {
            var e, t = 0,
                n = Ce.timers;
            for (kt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || Ce.fx.stop(), kt = undefined
        }, Ce.fx.timer = function(e) {
            Ce.timers.push(e), Ce.fx.start()
        }, Ce.fx.interval = 13, Ce.fx.start = function() {
            xt || (xt = !0, V())
        }, Ce.fx.stop = function() {
            xt = null
        }, Ce.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, Ce.fn.delay = function(t, n) {
            return t = Ce.fx ? Ce.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = ke.createElement("input"),
                t = ke.createElement("select"),
                n = t.appendChild(ke.createElement("option"));
            e.type = "checkbox", ye.checkOn = "" !== e.value, ye.optSelected = n.selected, e = ke.createElement("input"), e.value = "t", e.type = "radio", ye.radioValue = "t" === e.value
        }();
    var Tt, jt = Ce.expr.attrHandle;
    Ce.fn.extend({
        attr: function(e, t) {
            return Re(this, Ce.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                Ce.removeAttr(this, e)
            })
        }
    }), Ce.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? Ce.prop(e, t, n) : (1 === o && Ce.isXMLDoc(e) || (i = Ce.attrHooks[t.toLowerCase()] || (Ce.expr.match.bool.test(t) ? Tt : undefined)), n !== undefined ? null === n ? void Ce.removeAttr(e, t) : i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = Ce.find.attr(e, t), null == r ? undefined : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ye.radioValue && "radio" === t && o(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(Oe);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), Tt = {
        set: function(e, t, n) {
            return !1 === t ? Ce.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, Ce.each(Ce.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = jt[t] || Ce.find.attr;
        jt[t] = function(e, t, r) {
            var i, o, s = t.toLowerCase();
            return r || (o = jt[s], jt[s] = i, i = null != n(e, t, r) ? s : null, jt[s] = o), i
        }
    });
    var St = /^(?:input|select|textarea|button)$/i,
        Et = /^(?:a|area)$/i;
    Ce.fn.extend({
        prop: function(e, t) {
            return Re(this, Ce.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Ce.propFix[e] || e]
            })
        }
    }), Ce.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Ce.isXMLDoc(e) || (t = Ce.propFix[t] || t, i = Ce.propHooks[t]), n !== undefined ? i && "set" in i && (r = i.set(e, n, t)) !== undefined ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Ce.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : St.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), ye.optSelected || (Ce.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), Ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        Ce.propFix[this.toLowerCase()] = this
    }), Ce.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (we(e)) return this.each(function(t) {
                Ce(this).addClass(e.call(this, t, Z(this)))
            });
            if (t = ee(e), t.length)
                for (; n = this[u++];)
                    if (i = Z(n), r = 1 === n.nodeType && " " + K(i) + " ") {
                        for (s = 0; o = t[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = K(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, u = 0;
            if (we(e)) return this.each(function(t) {
                Ce(this).removeClass(e.call(this, t, Z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (t = ee(e), t.length)
                for (; n = this[u++];)
                    if (i = Z(n), r = 1 === n.nodeType && " " + K(i) + " ") {
                        for (s = 0; o = t[s++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        a = K(r), i !== a && n.setAttribute("class", a)
                    } return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : we(e) ? this.each(function(n) {
                Ce(this).toggleClass(e.call(this, n, Z(this), t), t)
            }) : this.each(function() {
                var t, i, o, s;
                if (r)
                    for (i = 0, o = Ce(this), s = ee(e); t = s[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                else e !== undefined && "boolean" !== n || (t = Z(this), t && He.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : He.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + K(Z(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var At = /\r/g;
    Ce.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0]; {
                if (arguments.length) return r = we(e), this.each(function(n) {
                    var i;
                    1 === this.nodeType && (i = r ? e.call(this, n, Ce(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = Ce.map(i, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = Ce.valHooks[this.type] || Ce.valHooks[this.nodeName.toLowerCase()]) && "set" in t && t.set(this, i, "value") !== undefined || (this.value = i))
                });
                if (i) return (t = Ce.valHooks[i.type] || Ce.valHooks[i.nodeName.toLowerCase()]) && "get" in t && (n = t.get(i, "value")) !== undefined ? n : (n = i.value, "string" == typeof n ? n.replace(At, "") : null == n ? "" : n)
            }
        }
    }), Ce.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Ce.find.attr(e, "value");
                    return null != t ? t : K(Ce.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        s = e.selectedIndex,
                        a = "select-one" === e.type,
                        u = a ? null : [],
                        c = a ? s + 1 : i.length;
                    for (r = s < 0 ? c : a ? s : 0; r < c; r++)
                        if (n = i[r], (n.selected || r === s) && !n.disabled && (!n.parentNode.disabled || !o(n.parentNode, "optgroup"))) {
                            if (t = Ce(n).val(), a) return t;
                            u.push(t)
                        } return u
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = Ce.makeArray(t), s = i.length; s--;) r = i[s], (r.selected = Ce.inArray(Ce.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), Ce.each(["radio", "checkbox"], function() {
        Ce.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = Ce.inArray(Ce(e).val(), t) > -1
            }
        }, ye.checkOn || (Ce.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), ye.focusin = "onfocusin" in e;
    var $t = /^(?:focusinfocus|focusoutblur)$/,
        Nt = function(e) {
            e.stopPropagation()
        };
    Ce.extend(Ce.event, {
        trigger: function(t, n, r, i) {
            var o, s, a, u, c, l, d, f, p = [r || ke],
                h = ge.call(t, "type") ? t.type : t,
                g = ge.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = f = a = r = r || ke, 3 !== r.nodeType && 8 !== r.nodeType && !$t.test(h + Ce.event.triggered) && (h.indexOf(".") > -1 && (g = h.split("."), h = g.shift(), g.sort()), c = h.indexOf(":") < 0 && "on" + h, t = t[Ce.expando] ? t : new Ce.Event(h, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = g.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = r), n = null == n ? [t] : Ce.makeArray(n, [t]), d = Ce.event.special[h] || {}, i || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!i && !d.noBubble && !be(r)) {
                    for (u = d.delegateType || h, $t.test(u + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), a = s;
                    a === (r.ownerDocument || ke) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (o = 0;
                    (s = p[o++]) && !t.isPropagationStopped();) f = s, t.type = o > 1 ? u : d.bindType || h, l = (He.get(s, "events") || Object.create(null))[t.type] && He.get(s, "handle"), l && l.apply(s, n), (l = c && s[c]) && l.apply && Fe(s) && (t.result = l.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = h, i || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Fe(r) || c && we(r[h]) && !be(r) && (a = r[c], a && (r[c] = null), Ce.event.triggered = h, t.isPropagationStopped() && f.addEventListener(h, Nt), r[h](), t.isPropagationStopped() && f.removeEventListener(h, Nt), Ce.event.triggered = undefined, a && (r[c] = a)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = Ce.extend(new Ce.Event, n, {
                type: e,
                isSimulated: !0
            });
            Ce.event.trigger(r, null, t)
        }
    }), Ce.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                Ce.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return Ce.event.trigger(e, t, n, !0)
        }
    }), ye.focusin || Ce.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Ce.event.simulate(t, e.target, Ce.event.fix(e))
        };
        Ce.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this.document || this,
                    i = He.access(r, t);
                i || r.addEventListener(e, n, !0), He.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this.document || this,
                    i = He.access(r, t) - 1;
                i ? He.access(r, t, i) : (r.removeEventListener(e, n, !0), He.remove(r, t))
            }
        }
    });
    var Dt = e.location,
        Lt = {
            guid: Date.now()
        },
        Ot = /\?/;
    Ce.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = undefined
        }
        return n && !n.getElementsByTagName("parsererror").length || Ce.error("Invalid XML: " + t), n
    };
    var Pt = /\[\]$/,
        qt = /\r?\n/g,
        Rt = /^(?:submit|button|image|reset|file)$/i,
        It = /^(?:input|select|textarea|keygen)/i;
    Ce.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = we(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !Ce.isPlainObject(e)) Ce.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) te(n, e[n], t, i);
        return r.join("&")
    }, Ce.fn.extend({
        serialize: function() {
            return Ce.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Ce.prop(this, "elements");
                return e ? Ce.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !Ce(this).is(":disabled") && It.test(this.nodeName) && !Rt.test(e) && (this.checked || !Ze.test(e))
            }).map(function(e, t) {
                var n = Ce(this).val();
                return null == n ? null : Array.isArray(n) ? Ce.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(qt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(qt, "\r\n")
                }
            }).get()
        }
    });
    var Mt = /%20/g,
        Ft = /#.*$/,
        Ht = /([?&])_=[^&]*/,
        Ut = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        zt = /^(?:GET|HEAD)$/,
        Vt = /^\/\//,
        Wt = {},
        Gt = {},
        Xt = "*/".concat("*"),
        Jt = ke.createElement("a");
    Jt.href = Dt.href, Ce.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Dt.href,
            type: "GET",
            isLocal: Bt.test(Dt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": Ce.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? ie(ie(e, Ce.ajaxSettings), t) : ie(Ce.ajaxSettings, e)
        },
        ajaxPrefilter: ne(Wt),
        ajaxTransport: ne(Gt),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var c, f, p, b, k, x = n;
                l || (l = !0, u && e.clearTimeout(u), i = undefined, s = a || "", _.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (b = oe(h, _, r)), !c && Ce.inArray("script", h.dataTypes) > -1 && (h.converters["text script"] = function() {}), b = se(h, b, _, c), c ? (h.ifModified && (k = _.getResponseHeader("Last-Modified"), k && (Ce.lastModified[o] = k), (k = _.getResponseHeader("etag")) && (Ce.etag[o] = k)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = b.state, f = b.data, p = b.error, c = !p)) : (p = x, !t && x || (x = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (n || x) + "", c ? v.resolveWith(g, [f, x, _]) : v.rejectWith(g, [_, x, p]), _.statusCode(w), w = undefined, d && m.trigger(c ? "ajaxSuccess" : "ajaxError", [_, h, c ? f : p]), y.fireWith(g, [_, x]), d && (m.trigger("ajaxComplete", [_, h]), --Ce.active || Ce.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t, t = undefined), n = n || {};
            var i, o, s, a, u, c, l, d, f, p, h = Ce.ajaxSetup({}, n),
                g = h.context || h,
                m = h.context && (g.nodeType || g.jquery) ? Ce(g) : Ce.event,
                v = Ce.Deferred(),
                y = Ce.Callbacks("once memory"),
                w = h.statusCode || {},
                b = {},
                k = {},
                x = "canceled",
                _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (l) {
                            if (!a)
                                for (a = {}; t = Ut.exec(s);) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                            t = a[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return l ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == l && (e = k[e.toLowerCase()] = k[e.toLowerCase()] || e, b[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == l && (h.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (l) _.always(e[_.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        return i && i.abort(t), r(0, t), this
                    }
                };
            if (v.promise(_), h.url = ((t || h.url || Dt.href) + "").replace(Vt, Dt.protocol + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(Oe) || [""], null == h.crossDomain) {
                c = ke.createElement("a");
                try {
                    c.href = h.url, c.href = c.href, h.crossDomain = Jt.protocol + "//" + Jt.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Ce.param(h.data, h.traditional)), re(Wt, h, n, _), l) return _;
            d = Ce.event && h.global, d && 0 == Ce.active++ && Ce.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !zt.test(h.type), o = h.url.replace(Ft, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Mt, "+")) : (p = h.url.slice(o.length), h.data && (h.processData || "string" == typeof h.data) && (o += (Ot.test(o) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (o = o.replace(Ht, "$1"), p = (Ot.test(o) ? "&" : "?") + "_=" + Lt.guid++ + p), h.url = o + p), h.ifModified && (Ce.lastModified[o] && _.setRequestHeader("If-Modified-Since", Ce.lastModified[o]), Ce.etag[o] && _.setRequestHeader("If-None-Match", Ce.etag[o])), (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Xt + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers) _.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(g, _, h) || l)) return _.abort();
            if (x = "abort", y.add(h.complete), _.done(h.success), _.fail(h.error), i = re(Gt, h, n, _)) {
                if (_.readyState = 1, d && m.trigger("ajaxSend", [_, h]), l) return _;
                h.async && h.timeout > 0 && (u = e.setTimeout(function() {
                    _.abort("timeout")
                }, h.timeout));
                try {
                    l = !1, i.send(b, r)
                } catch (e) {
                    if (l) throw e;
                    r(-1, e)
                }
            } else r(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return Ce.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return Ce.get(e, undefined, t, "script")
        }
    }), Ce.each(["get", "post"], function(e, t) {
        Ce[t] = function(e, n, r, i) {
            return we(n) && (i = i || r, r = n, n = undefined), Ce.ajax(Ce.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, Ce.isPlainObject(e) && e))
        }
    }), Ce.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), Ce._evalUrl = function(e, t, n) {
        return Ce.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                Ce.globalEval(e, t, n)
            }
        })
    }, Ce.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (we(e) && (e = e.call(this[0])), t = Ce(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return we(e) ? this.each(function(t) {
                Ce(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = Ce(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = we(e);
            return this.each(function(n) {
                Ce(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                Ce(this).replaceWith(this.childNodes)
            }), this
        }
    }), Ce.expr.pseudos.hidden = function(e) {
        return !Ce.expr.pseudos.visible(e)
    }, Ce.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, Ce.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    };
    var Yt = {
            0: 200,
            1223: 204
        },
        Qt = Ce.ajaxSettings.xhr();
    ye.cors = !!Qt && "withCredentials" in Qt, ye.ajax = Qt = !!Qt, Ce.ajaxTransport(function(t) {
        var n, r;
        if (ye.cors || Qt && !t.crossDomain) return {
            send: function(i, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                for (s in i) a.setRequestHeader(s, i[s]);
                n = function(e) {
                    return function() {
                        n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(Yt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()))
                    }
                }, a.onload = n(), r = a.onerror = a.ontimeout = n("error"), a.onabort !== undefined ? a.onabort = r : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && r()
                    })
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null)
                } catch (e) {
                    if (n) throw e
                }
            },
            abort: function() {
                n && n()
            }
        }
    }), Ce.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), Ce.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return Ce.globalEval(e), e
            }
        }
    }), Ce.ajaxPrefilter("script", function(e) {
        e.cache === undefined && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), Ce.ajaxTransport("script", function(e) {
        if (e.crossDomain || e.scriptAttrs) {
            var t, n;
            return {
                send: function(r, i) {
                    t = Ce("<script>").attr(e.scriptAttrs || {}).prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && i("error" === e.type ? 404 : 200, e.type)
                    }), ke.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
        }
    });
    var Kt = [],
        Zt = /(=)\?(?=&|$)|\?\?/;
    Ce.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Kt.pop() || Ce.expando + "_" + Lt.guid++;
            return this[e] = !0, e
        }
    }), Ce.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = !1 !== t.jsonp && (Zt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = we(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Zt, "$1" + i) : !1 !== t.jsonp && (t.url += (Ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return s || Ce.error(i + " was not called"), s[0]
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            s = arguments
        }, r.always(function() {
            o === undefined ? Ce(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, Kt.push(i)), s && we(o) && o(s[0]), s = o = undefined
        }), "script"
    }), ye.createHTMLDocument = function() {
        var e = ke.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), Ce.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (ye.createHTMLDocument ? (t = ke.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = ke.location.href, t.head.appendChild(r)) : t = ke), i = Ae.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = _([e], t, o), o && o.length && Ce(o).remove(), Ce.merge([], i.childNodes))
    }, Ce.fn.load = function(e, t, n) {
        var r, i, o, s = this,
            a = e.indexOf(" ");
        return a > -1 && (r = K(e.slice(a)), e = e.slice(0, a)), we(t) ? (n = t, t = undefined) : t && "object" == typeof t && (i = "POST"), s.length > 0 && Ce.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(r ? Ce("<div>").append(Ce.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, Ce.expr.pseudos.animated = function(e) {
        return Ce.grep(Ce.timers, function(t) {
            return e === t.elem
        }).length
    }, Ce.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, u, c, l = Ce.css(e, "position"),
                d = Ce(e),
                f = {};
            "static" === l && (e.style.position = "relative"), a = d.offset(), o = Ce.css(e, "top"), u = Ce.css(e, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = d.position(), s = r.top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), we(t) && (t = t.call(e, n, Ce.extend({}, a))), null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + i), "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), d.css(f))
        }
    }, Ce.fn.extend({
        offset: function(e) {
            if (arguments.length) return e === undefined ? this : this.each(function(t) {
                Ce.offset.setOffset(this, e, t)
            });
            var t, n, r = this[0];
            if (r) return r.getClientRects().length ? (t = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === Ce.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === Ce.css(e, "position");) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && (i = Ce(e).offset(), i.top += Ce.css(e, "borderTopWidth", !0), i.left += Ce.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - Ce.css(r, "marginTop", !0),
                    left: t.left - i.left - Ce.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === Ce.css(e, "position");) e = e.offsetParent;
                return e || Xe
            })
        }
    }), Ce.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        Ce.fn[e] = function(r) {
            return Re(this, function(e, r, i) {
                var o;
                if (be(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), i === undefined) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), Ce.each(["top", "left"], function(e, t) {
        Ce.cssHooks[t] = I(ye.pixelPosition, function(e, n) {
            if (n) return n = R(e, t), lt.test(n) ? Ce(e).position()[t] + "px" : n
        })
    }), Ce.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Ce.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            Ce.fn[r] = function(i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                    a = n || (!0 === i || !0 === o ? "margin" : "border");
                return Re(this, function(t, n, i) {
                    var o;
                    return be(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : i === undefined ? Ce.css(t, n, a) : Ce.style(t, n, i, a)
                }, t, s ? i : undefined, s)
            }
        })
    }), Ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        Ce.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), Ce.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), Ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        Ce.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    var en = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    Ce.proxy = function(e, t) {
        var n, r, i;
        return "string" == typeof t && (n = e[t], t = e, e = n), we(e) ? (r = ce.call(arguments, 2), i = function() {
            return e.apply(t || this, r.concat(ce.call(arguments)))
        }, i.guid = e.guid = e.guid || Ce.guid++, i) : undefined
    }, Ce.holdReady = function(e) {
        e ? Ce.readyWait++ : Ce.ready(!0)
    }, Ce.isArray = Array.isArray, Ce.parseJSON = JSON.parse, Ce.nodeName = o, Ce.isFunction = we, Ce.isWindow = be, Ce.camelCase = h, Ce.type = r, Ce.now = Date.now, Ce.isNumeric = function(e) {
        var t = Ce.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, Ce.trim = function(e) {
        return null == e ? "" : (e + "").replace(en, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Ce
    });
    var tn = e.jQuery,
        nn = e.$;
    return Ce.noConflict = function(t) {
        return e.$ === Ce && (e.$ = nn), t && e.jQuery === Ce && (e.jQuery = tn), Ce
    }, void 0 === t && (e.jQuery = e.$ = Ce), Ce
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(t) : "object" == typeof exports ? module.exports = t(require, exports, module) : e.ouibounce = t()
}(this, function() {
    return function(e, t) {
        "use strict";

        function n(e, t) {
            return void 0 === e ? t : e
        }

        function r(e) {
            var t = 24 * e * 60 * 60 * 1e3,
                n = new Date;
            return n.setTime(n.getTime() + t), "; expires=" + n.toUTCString()
        }

        function i() {
            l() || (j.addEventListener("mouseleave", o), j.addEventListener("mouseenter", s), j.addEventListener("keydown", a))
        }

        function o(e) {
            e.clientY > v || (T = setTimeout(p, w))
        }

        function s() {
            T && (clearTimeout(T), T = null)
        }

        function a(e) {
            E || e.metaKey && 76 === e.keyCode && (E = !0, T = setTimeout(p, w))
        }

        function u(e, t) {
            return c()[e] === t
        }

        function c() {
            for (var e = document.cookie.split("; "), t = {}, n = e.length - 1; n >= 0; n--) {
                var r = e[n].split("=");
                t[r[0]] = r[1]
            }
            return t
        }

        function l() {
            return u(_, "true") && !m
        }

        function d() {
            S = !0
        }

        function f() {
            S = !1
        }

        function p() {
            l() || S || (e && (e.style.display = "block"), b(), h())
        }

        function h(e) {
            var t = e || {};
            "undefined" != typeof t.cookieExpire && (k = r(t.cookieExpire)), !0 === t.sitewide && (C = ";path=/"), "undefined" != typeof t.cookieDomain && (x = ";domain=" + t.cookieDomain), "undefined" != typeof t.cookieName && (_ = t.cookieName), document.cookie = _ + "=true" + k + x + C, j.removeEventListener("mouseleave", o), j.removeEventListener("mouseenter", s), j.removeEventListener("keydown", a)
        }
        var g = t || {},
            m = g.aggressive || !1,
            v = n(g.sensitivity, 20),
            y = n(g.timer, 1e3),
            w = n(g.delay, 0),
            b = g.callback || function() {},
            k = r(g.cookieExpire) || "",
            x = g.cookieDomain ? ";domain=" + g.cookieDomain : "",
            _ = g.cookieName ? g.cookieName : "viewedOuibounceModal",
            C = !0 === g.sitewide ? ";path=/" : "",
            T = null,
            j = document.documentElement,
            S = !1;
        setTimeout(i, y);
        var E = !1;
        return {
            fire: p,
            disable: h,
            isDisabled: l,
            pause: d,
            unpause: f
        }
    }
}),
function(e, t) {
    "use strict";
    var n = "",
        r = "?",
        i = "function",
        o = "undefined",
        s = "object",
        a = "string",
        u = "model",
        c = "name",
        l = "type",
        d = "vendor",
        f = "version",
        p = "architecture",
        h = "console",
        g = "mobile",
        m = "tablet",
        v = "smarttv",
        y = "wearable",
        w = {
            extend: function(e, t) {
                var n = {};
                for (var r in e) t[r] && t[r].length % 2 == 0 ? n[r] = t[r].concat(e[r]) : n[r] = e[r];
                return n
            },
            has: function(e, t) {
                return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase())
            },
            lowerize: function(e) {
                return e.toLowerCase()
            },
            major: function(e) {
                return typeof e === a ? e.split(".")[0] : t
            }
        },
        b = {
            rgx: function() {
                for (var e, n, r, a, u, c, l, d = 0, f = arguments; d < f.length && !c;) {
                    var p = f[d],
                        h = f[d + 1];
                    if (typeof e === o) {
                        e = {};
                        for (a in h) h.hasOwnProperty(a) && (u = h[a], typeof u === s ? e[u[0]] = t : e[u] = t)
                    }
                    for (n = r = 0; n < p.length && !c;)
                        if (c = p[n++].exec(this.getUA()))
                            for (a = 0; a < h.length; a++) l = c[++r], u = h[a], typeof u === s && u.length > 0 ? 2 == u.length ? typeof u[1] == i ? e[u[0]] = u[1].call(this, l) : e[u[0]] = u[1] : 3 == u.length ? typeof u[1] !== i || u[1].exec && u[1].test ? e[u[0]] = l ? l.replace(u[1], u[2]) : t : e[u[0]] = l ? u[1].call(this, l, u[2]) : t : 4 == u.length && (e[u[0]] = l ? u[3].call(this, l.replace(u[1], u[2])) : t) : e[u] = l || t;
                    d += 2
                }
                return e
            },
            str: function(e, n) {
                for (var i in n)
                    if (typeof n[i] === s && n[i].length > 0) {
                        for (var o = 0; o < n[i].length; o++)
                            if (w.has(n[i][o], e)) return i === r ? t : i
                    } else if (w.has(n[i], e)) return i === r ? t : i;
                return e
            }
        },
        k = {
            browser: {
                oldsafari: {
                    version: {
                        "1.0": "/8",
                        1.2: "/1",
                        1.3: "/3",
                        "2.0": "/412",
                        "2.0.2": "/416",
                        "2.0.3": "/417",
                        "2.0.4": "/419",
                        "?": "/"
                    }
                }
            },
            device: {
                amazon: {
                    model: {
                        "Fire Phone": ["SD", "KF"]
                    }
                },
                sprint: {
                    model: {
                        "Evo Shift 4G": "7373KT"
                    },
                    vendor: {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }
                }
            },
            os: {
                windows: {
                    version: {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    }
                }
            }
        },
        x = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                [c, f],
                [/(OPiOS)[\/\s]+([\w\.]+)/i],
                [
                    [c, "Opera Mini"], f
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    [c, "Opera"], f
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i],
                [c, f],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    [c, "IE"], f
                ],
                [/(edge)\/((\d+)?[\w\.]+)/i],
                [c, f],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    [c, "Yandex"], f
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    [c, /_/g, " "], f
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i],
                [c, f],
                [/(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i],
                [
                    [c, "UCBrowser"], f
                ],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    [c, "Dolphin"], f
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    [c, "Chrome"], f
                ],
                [/XiaoMi\/MiuiBrowser\/([\w\.]+)/i],
                [f, [c, "MIUI Browser"]],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i],
                [f, [c, "Android Browser"]],
                [/FBAV\/([\w\.]+);/i],
                [f, [c, "Facebook"]],
                [/fxios\/([\w\.-]+)/i],
                [f, [c, "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                [f, [c, "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                [f, c],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [c, [f, b.str, k.browser.oldsafari.version]],
                [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i],
                [c, f],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    [c, "Netscape"], f
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                [c, f]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    [p, "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    [p, w.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    [p, "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    [p, "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    [p, /ower/, "", w.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    [p, "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    [p, w.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i],
                [u, d, [l, m]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                [u, [d, "Apple"],
                    [l, m]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    [u, "Apple TV"],
                    [d, "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                [d, u, [l, m]],
                [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i],
                [u, [d, "Amazon"],
                    [l, m]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i],
                [
                    [u, b.str, k.device.amazon.model],
                    [d, "Amazon"],
                    [l, g]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                [u, d, [l, g]],
                [/\((ip[honed|\s\w*]+);/i],
                [u, [d, "Apple"],
                    [l, g]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                [d, u, [l, g]],
                [/\(bb10;\s(\w+)/i],
                [u, [d, "BlackBerry"],
                    [l, g]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i],
                [u, [d, "Asus"],
                    [l, m]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    [d, "Sony"],
                    [u, "Xperia Tablet"],
                    [l, m]
                ],
                [/(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i],
                [
                    [d, "Sony"],
                    [u, "Xperia Phone"],
                    [l, g]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                [d, u, [l, h]],
                [/android.+;\s(shield)\sbuild/i],
                [u, [d, "Nvidia"],
                    [l, h]
                ],
                [/(playstation\s[34portablevi]+)/i],
                [u, [d, "Sony"],
                    [l, h]
                ],
                [/(sprint\s(\w+))/i],
                [
                    [d, b.str, k.device.sprint.vendor],
                    [u, b.str, k.device.sprint.model],
                    [l, g]
                ],
                [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i],
                [d, u, [l, m]],
                [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i],
                [d, [u, /_/g, " "],
                    [l, g]
                ],
                [/(nexus\s9)/i],
                [u, [d, "HTC"],
                    [l, m]
                ],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                [u, [d, "Microsoft"],
                    [l, h]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    [u, /\./g, " "],
                    [d, "Microsoft"],
                    [l, g]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i],
                [u, [d, "Motorola"],
                    [l, g]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                [u, [d, "Motorola"],
                    [l, m]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    [d, "Samsung"], u, [l, m]
                ],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i],
                [
                    [d, "Samsung"], u, [l, g]
                ],
                [/(samsung);smarttv/i],
                [d, u, [l, v]],
                [/\(dtv[\);].+(aquos)/i],
                [u, [d, "Sharp"],
                    [l, v]
                ],
                [/sie-(\w+)*/i],
                [u, [d, "Siemens"],
                    [l, g]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i],
                [
                    [d, "Nokia"], u, [l, g]
                ],
                [/android\s3\.[\s\w;-]{10}(a\d{3})/i],
                [u, [d, "Acer"],
                    [l, m]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    [d, "LG"], u, [l, m]
                ],
                [/(lg) netcast\.tv/i],
                [d, u, [l, v]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i],
                [u, [d, "LG"],
                    [l, g]
                ],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                [u, [d, "Lenovo"],
                    [l, m]
                ],
                [/linux;.+((jolla));/i],
                [d, u, [l, g]],
                [/((pebble))app\/[\d\.]+\s/i],
                [d, u, [l, y]],
                [/android.+;\s(glass)\s\d/i],
                [u, [d, "Google"],
                    [l, y]
                ],
                [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i],
                [
                    [u, /_/g, " "],
                    [d, "Xiaomi"],
                    [l, g]
                ],
                [/\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i],
                [
                    [l, w.lowerize], d, u
                ]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                [f, [c, "EdgeHTML"]],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                [c, f],
                [/rv\:([\w\.]+).*(gecko)/i],
                [f, c]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                [c, f],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                [c, [f, b.str, k.os.windows.version]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    [c, "Windows"],
                    [f, b.str, k.os.windows.version]
                ],
                [/\((bb)(10);/i],
                [
                    [c, "BlackBerry"], f
                ],
                [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i],
                [c, f],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i],
                [
                    [c, "Symbian"], f
                ],
                [/\((series40);/i],
                [c],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    [c, "Firefox OS"], f
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i],
                [c, f],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    [c, "Chromium OS"], f
                ],
                [/(sunos)\s?([\w\.]+\d)*/i],
                [
                    [c, "Solaris"], f
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i],
                [c, f],
                [/(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i],
                [
                    [c, "iOS"],
                    [f, /_/g, "."]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    [c, "Mac OS"],
                    [f, /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i],
                [c, f]
            ]
        },
        _ = function(t, r) {
            if (!(this instanceof _)) return new _(t, r).getResult();
            var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : n),
                o = r ? w.extend(x, r) : x;
            return this.getBrowser = function() {
                var e = b.rgx.apply(this, o.browser);
                return e.major = w.major(e.version), e
            }, this.getCPU = function() {
                return b.rgx.apply(this, o.cpu)
            }, this.getDevice = function() {
                return b.rgx.apply(this, o.device)
            }, this.getEngine = function() {
                return b.rgx.apply(this, o.engine)
            }, this.getOS = function() {
                return b.rgx.apply(this, o.os)
            }, this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            }, this.getUA = function() {
                return i
            }, this.setUA = function(e) {
                return i = e, this
            }, this
        };
    _.VERSION = "0.7.10", _.BROWSER = {
        NAME: c,
        MAJOR: "major",
        VERSION: f
    }, _.CPU = {
        ARCHITECTURE: p
    }, _.DEVICE = {
        MODEL: u,
        VENDOR: d,
        TYPE: l,
        CONSOLE: h,
        MOBILE: g,
        SMARTTV: v,
        TABLET: m,
        WEARABLE: y,
        EMBEDDED: "embedded"
    }, _.ENGINE = {
        NAME: c,
        VERSION: f
    }, _.OS = {
        NAME: c,
        VERSION: f
    }, typeof exports !== o ? (typeof module !== o && module.exports && (exports = module.exports = _), exports.UAParser = _) : typeof define === i && define.amd ? define("ua-parser-js", [], function() {
        return _
    }) : e.UAParser = _;
    var C = e.jQuery || e.Zepto;
    if (typeof C !== o) {
        var T = new _;
        C.ua = T.getResult(), C.ua.get = function() {
            return T.getUA()
        }, C.ua.set = function(e) {
            T.setUA(e);
            var t = T.getResult();
            for (var n in t) C.ua[n] = t[n]
        }
    }
}("object" == typeof window ? window : this),
function(e) {
    var t = function(t) {
        var n = this;
        t = t || {}, "string" == typeof t && (t = {
            elements: t
        }), this.sel = null, this.textSelection = "", this.htmlSelection = "", this.onTweet = t.onTweet, this.onMail = t.onMail, this.onFb = t.onFb, this.appId = e('meta[property="fb:app_id"]').attr("content") || e('meta[property="fb:app_id"]').attr("value"), this.url2share = e('meta[property="og:url"]').attr("content") || e('meta[property="og:url"]').attr("value") || window.location.href, this.getSelectionText = function(e) {
            var t = "",
                r = "";
            if (e = e || window.getSelection(), e.rangeCount) {
                for (var i = document.createElement("div"), o = 0, s = e.rangeCount; o < s; ++o) i.appendChild(e.getRangeAt(o).cloneContents());
                r = i.textContent, t = i.innerHTML
            }
            return n.textSelection = r, n.htmlSelection = t || r, r
        }, this.selectionDirection = function(e) {
            var t = e || window.getSelection(),
                n = document.createRange();
            if (!t.anchorNode) return 0;
            n.setStart(t.anchorNode, t.anchorOffset), n.setEnd(t.focusNode, t.focusOffset);
            var r = n.collapsed ? "backward" : "forward";
            return n.detach(), r
        }, this.showPopunder = function() {
            n.popunder = n.popunder || document.getElementById("selectionSharerPopunder");
            var e = window.getSelection(),
                t = n.getSelectionText(e);
            if (e.isCollapsed || t.length < 10 || !t.match(/ /)) return n.hidePopunder();
            if (n.popunder.classList.contains("fixed")) return n.popunder.style.bottom = 0, n.popunder.style.bottom;
            var r = e.getRangeAt(0),
                i = r.endContainer.parentNode;
            if (n.popunder.classList.contains("show")) {
                if (Math.ceil(n.popunder.getBoundingClientRect().top) == Math.ceil(i.getBoundingClientRect().bottom)) return;
                return n.hidePopunder(n.showPopunder)
            }
            if (i.nextElementSibling) n.pushSiblings(i);
            else {
                n.placeholder || (n.placeholder = document.createElement("div"), n.placeholder.className = "selectionSharerPlaceholder");
                var o = window.getComputedStyle(i).marginBottom;
                n.placeholder.style.height = o, n.placeholder.style.marginBottom = -2 * parseInt(o, 10) + "px", i.parentNode.insertBefore(n.placeholder)
            }
            var s = window.pageYOffset + i.getBoundingClientRect().bottom;
            n.popunder.style.top = Math.ceil(s) + "px", setTimeout(function() {
                n.placeholder && n.placeholder.classList.add("show"), n.popunder.classList.add("show")
            }, 0)
        }, this.pushSiblings = function(e) {
            for (; e = e.nextElementSibling;) e.classList.add("selectionSharer"), e.classList.add("moveDown")
        }, this.hidePopunder = function(e) {
            if (e = e || function() {}, "fixed" == n.popunder) return n.popunder.style.bottom = "-50px", e();
            n.popunder.classList.remove("show"), n.placeholder && n.placeholder.classList.remove("show");
            for (var t = document.getElementsByClassName("moveDown"); el = t[0];) el.classList.remove("moveDown");
            setTimeout(function() {
                n.placeholder && document.body.insertBefore(n.placeholder), e()
            }, 600)
        }, this.show = function(e) {
            setTimeout(function() {
                var t = window.getSelection(),
                    r = n.getSelectionText(t);
                if (!t.isCollapsed && r && r.length > 10 && r.match(/ /)) {
                    var i = t.getRangeAt(0),
                        o = i.getBoundingClientRect().top - 5,
                        s = o + n.getPosition().y - n.$popover.height(),
                        a = 0;
                    if (e) a = e.pageX;
                    else {
                        var u = t.anchorNode.parentNode;
                        a += u.offsetWidth / 2;
                        do {
                            a += u.offsetLeft
                        } while (u = u.offsetParent)
                    }
                    switch (n.selectionDirection(t)) {
                        case "forward":
                            a -= n.$popover.width();
                            break;
                        case "backward":
                            a += n.$popover.width();
                            break;
                        default:
                            return
                    }
                    n.$popover.removeClass("anim").css("top", s + 10).css("left", a).show(), setTimeout(function() {
                        n.$popover.addClass("anim").css("top", s)
                    }, 0)
                }
            }, 10)
        }, this.hide = function() {
            n.$popover.hide()
        }, this.smart_truncate = function(e, t) {
            if (!e || !e.length) return e;
            var n = e.length > t,
                r = n ? e.substr(0, t - 1) : e;
            return r = n ? r.substr(0, r.lastIndexOf(" ")) : r, n ? r + "..." : r
        }, this.getRelatedTwitterAccounts = function() {
            var t = [],
                n = e('meta[name="twitter:creator"]').attr("content") || e('meta[name="twitter:creator"]').attr("value");
            n && t.push(n);
            for (var r = document.getElementsByTagName("a"), i = 0, o = r.length; i < o; i++)
                if (r[i].attributes.href && "string" == typeof r[i].attributes.href.value) {
                    var s = r[i].attributes.href.value.match(/^https?:\/\/twitter\.com\/([a-z0-9_]{1,20})/i);
                    s && s.length > 1 && -1 == ["widgets", "intent"].indexOf(s[1]) && t.push(s[1])
                } return t.length > 0 ? t.join(",") : ""
        }, this.shareTwitter = function(e) {
            e.preventDefault(), n.onTweet();
            var t = "\u201c" + n.smart_truncate(n.textSelection.trim(), 114) + "\u201d",
                r = "http://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&related=" + n.relatedTwitterAccounts + "&url=" + encodeURIComponent(window.location.href);
            n.viaTwitterAccount && t.length < 114 - n.viaTwitterAccount.length && (r += "&via=" + n.viaTwitterAccount);
            var i = 640,
                o = 440,
                s = screen.width / 2 - i / 2,
                a = screen.height / 2 - o / 2 - 100;
            return window.open(r, "share_twitter", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + o + ", top=" + a + ", left=" + s), n.hide(), !1
        }, this.shareFacebook = function(e) {
            e.preventDefault(), n.onFb();
            var t = n.htmlSelection.replace(/<p[^>]*>/gi, "\n").replace(/<\/p>|  /gi, "").trim(),
                r = "https://www.facebook.com/dialog/feed?app_id=" + n.appId + "&display=popup&caption=" + encodeURIComponent(t) + "&link=" + encodeURIComponent(n.url2share) + "&href=" + encodeURIComponent(n.url2share) + "&redirect_uri=" + encodeURIComponent(n.url2share),
                i = 640,
                o = 440,
                s = screen.width / 2 - i / 2,
                a = screen.height / 2 - o / 2 - 100;
            window.open(r, "share_facebook", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + o + ", top=" + a + ", left=" + s)
        }, this.shareEmail = function() {
            n.onMail();
            var t = n.textSelection.replace(/<p[^>]*>/gi, "\n").replace(/<\/p>|  /gi, "").trim(),
                r = {};
            return r.subject = encodeURIComponent("Quote from " + document.title), r.body = encodeURIComponent("\u201c" + t + "\u201d") + "%0D%0A%0D%0AFrom: " + document.title + "%0D%0A" + window.location.href, e(this).attr("href", "mailto:?subject=" + r.subject + "&body=" + r.body), n.hide(), !0
        }, this.render = function() {
            n.$popover = e('<div class="selectionSharer" id="selectionSharerPopover" style="position:absolute;">  <div id="selectionSharerPopover-inner">    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div>  <div class="selectionSharerPopover-clip"><span class="selectionSharerPopover-arrow"></span></div></div>'), n.$popover.find("a.tweet").click(n.shareTwitter), n.$popover.find("a.facebook").click(n.shareFacebook), n.$popover.find("a.email").click(n.shareEmail), e("body").append(n.$popover), n.$popunder = e('<div id="selectionSharerPopunder" class="selectionSharer">  <div id="selectionSharerPopunder-inner">    <label>Share this selection</label>    <ul>      <li><a class="action tweet" href="" title="Share this selection on Twitter" target="_blank">Tweet</a></li>      <li><a class="action facebook" href="" title="Share this selection on Facebook" target="_blank">Facebook</a></li>      <li><a class="action email" href="" title="Share this selection by email" target="_blank"><svg width="20" height="20"><path stroke="%23FFF" stroke-width="6" d="m16,25h82v60H16zl37,37q4,3 8,0l37-37M16,85l30-30m22,0 30,30"/></svg></a></li>    </ul>  </div></div>'), n.$popunder.find("a.tweet").click(n.shareTwitter), n.$popunder.find("a.facebook").click(n.shareFacebook), n.$popunder.find("a.email").click(n.shareEmail), e("body").append(n.$popunder), n.appId && n.url2share && e(".selectionSharer a.facebook").css("display", "inline-block")
        }, this.setElements = function(t) {
            "string" == typeof t && (t = e(t)), n.$elements = t instanceof e ? t : e(t), n.$elements.mouseup(n.show).mousedown(n.hide).addClass("selectionShareable"), n.$elements.bind("touchstart", function() {
                n.isMobile = !0
            }), document.onselectionchange = n.selectionChanged
        }, this.selectionChanged = function(e) {
            n.isMobile && (n.lastSelectionChanged && clearTimeout(n.lastSelectionChanged), n.lastSelectionChanged = setTimeout(function() {
                n.showPopunder(e)
            }, 300))
        }, this.getPosition = function() {
            var e = window.pageXOffset !== undefined,
                t = "CSS1Compat" === (document.compatMode || "");
            return {
                x: e ? window.pageXOffset : t ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: e ? window.pageYOffset : t ? document.documentElement.scrollTop : document.body.scrollTop
            }
        }, this.render(), t.elements && this.setElements(t.elements)
    };
    e.fn.selectionSharer = function(e) {
        return new t(e).setElements(this), this
    }, "function" == typeof define ? define(function() {
        return t.load = function(e, n, r) {
            (new t).setElements("p"), r()
        }, t
    }) : window.SelectionSharer = t
}(jQuery),
function(e) {
    if ("function" == typeof define && define.amd) define(e);
    else if ("object" == typeof exports) module.exports = e();
    else {
        var t = window.Cookies,
            n = window.Cookies = e();
        n.noConflict = function() {
            return window.Cookies = t, n
        }
    }
}(function() {
    function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) t[r] = n[r]
        }
        return t
    }

    function t(n) {
        function r(t, i, o) {
            var s;
            if ("undefined" != typeof document) {
                if (arguments.length > 1) {
                    if (o = e({
                            path: "/"
                        }, r.defaults, o), "number" == typeof o.expires) {
                        var a = new Date;
                        a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                    }
                    try {
                        s = JSON.stringify(i), /^[\{\[]/.test(s) && (i = s)
                    } catch (e) {}
                    return i = n.write ? n.write(i, t) : encodeURIComponent(String(i)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape), document.cookie = [t, "=", i, o.expires ? "; expires=" + o.expires.toUTCString() : "", o.path ? "; path=" + o.path : "", o.domain ? "; domain=" + o.domain : "", o.secure ? "; secure" : ""].join("")
                }
                t || (s = {});
                for (var u = document.cookie ? document.cookie.split("; ") : [], c = /(%[0-9A-Z]{2})+/g, l = 0; l < u.length; l++) {
                    var d = u[l].split("="),
                        f = d.slice(1).join("=");
                    '"' === f.charAt(0) && (f = f.slice(1, -1));
                    try {
                        var p = d[0].replace(c, decodeURIComponent);
                        if (f = n.read ? n.read(f, p) : n(f, p) || f.replace(c, decodeURIComponent), this.json) try {
                            f = JSON.parse(f)
                        } catch (e) {}
                        if (t === p) {
                            s = f;
                            break
                        }
                        t || (s[p] = f)
                    } catch (e) {}
                }
                return s
            }
        }
        return r.set = r, r.get = function(e) {
            return r(e)
        }, r.getJSON = function() {
            return r.apply({
                json: !0
            }, [].slice.call(arguments))
        }, r.defaults = {}, r.remove = function(t, n) {
            r(t, "", e(n, {
                expires: -1
            }))
        }, r.withConverter = t, r
    }
    return t(function() {})
}),
function(e, t) {
    "$:nomunge";
    var n, r = e.jQuery || e.Cowboy || (e.Cowboy = {});
    r.throttle = n = function(e, n, i, o) {
        function s() {
            function r() {
                u = +new Date, i.apply(c, d)
            }

            function s() {
                a = t
            }
            var c = this,
                l = +new Date - u,
                d = arguments;
            o && !a && r(), a && clearTimeout(a), o === t && l > e ? r() : !0 !== n && (a = setTimeout(o ? s : r, o === t ? e - l : e))
        }
        var a, u = 0;
        return "boolean" != typeof n && (o = i, i = n, n = t), r.guid && (s.guid = i.guid = i.guid || r.guid++), s
    }, r.debounce = function(e, r, i) {
        return i === t ? n(e, r, !1) : n(e, i, !1 !== r)
    }
}(this),
function(e) {
    "use strict";

    function t(e, t) {
        var n, u, c, l;
        "undefined" == typeof document && "function" == typeof require ? (n = "file://" + (process.platform.match(/^win/i) ? "/" : "") + require("fs").realpathSync("."), t && "/" !== t.charAt(0) && !t.match(/^\w+:\/\//) && (t = n + require("path").sep + t), u = require("url").parse(t || n)) : (n = document.location.href, u = document.createElement("a"), u.href = t || n), l = (t || n).match(/\/\/(.*?)(?::(.*?))?@/) || [];
        for (c in s) e[c] = u[s[c]] || "";
        if (e.protocol = e.protocol.replace(/:$/, ""), e.query = e.query.replace(/^\?/, ""), e.hash = r(e.hash.replace(/^#/, "")), e.user = r(l[1] || ""), e.pass = r(l[2] || ""), e.port = a[e.protocol] == e.port || 0 == e.port ? "" : e.port, e.protocol || /^([a-z]+:)?\/\/\/?/.test(t)) e.path = e.path.replace(/^\/?/, "/");
        else {
            var d = new o(n.match(/(.*\/)/)[0]),
                f = d.path.split("/"),
                p = e.path.split("/"),
                h = ["protocol", "user", "pass", "host", "port"],
                g = h.length;
            for (f.pop(), c = 0; c < g; c++) e[h[c]] = d[h[c]];
            for (;
                ".." == p[0];) f.pop(), p.shift();
            e.path = ("/" != t.charAt(0) ? f.join("/") : "") + "/" + p.join("/")
        }
        e.paths(("/" == e.path.charAt(0) ? e.path.slice(1) : e.path).split("/")), e.query = new i(e.query)
    }

    function n(e) {
        return encodeURIComponent(e).replace(/'/g, "%27")
    }

    function r(e) {
        return e = e.replace(/\+/g, " "), e = e.replace(/%([ef][0-9a-f])%([89ab][0-9a-f])%([89ab][0-9a-f])/gi, function(e, t, n, r) {
            var i = parseInt(t, 16) - 224,
                o = parseInt(n, 16) - 128;
            if (0 === i && o < 32) return e;
            var s = parseInt(r, 16) - 128,
                a = (i << 12) + (o << 6) + s;
            return a > 65535 ? e : String.fromCharCode(a)
        }), e = e.replace(/%([cd][0-9a-f])%([89ab][0-9a-f])/gi, function(e, t, n) {
            var r = parseInt(t, 16) - 192;
            if (r < 2) return e;
            var i = parseInt(n, 16) - 128;
            return String.fromCharCode((r << 6) + i)
        }), e.replace(/%([0-7][0-9a-f])/gi, function(e, t) {
            return String.fromCharCode(parseInt(t, 16))
        })
    }

    function i(e) {
        for (var t, n = /([^=&]+)(=([^&]*))?/g; t = n.exec(e);) {
            var i = decodeURIComponent(t[1].replace(/\+/g, " ")),
                o = t[3] ? r(t[3]) : "";
            this[i] !== undefined && null !== this[i] ? (this[i] instanceof Array || (this[i] = [this[i]]), this[i].push(o)) : this[i] = o
        }
    }

    function o(e) {
        t(this, e)
    }
    var s = {
            protocol: "protocol",
            host: "hostname",
            port: "port",
            path: "pathname",
            query: "search",
            hash: "hash"
        },
        a = {
            ftp: 21,
            gopher: 70,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        };
    i.prototype.toString = function() {
        var e, t, r = "",
            i = n;
        for (e in this)
            if (!(this[e] instanceof Function || null === this[e]))
                if (this[e] instanceof Array) {
                    var o = this[e].length;
                    if (o)
                        for (t = 0; t < o; t++) r += r ? "&" : "", r += i(e) + "=" + i(this[e][t]);
                    else r += (r ? "&" : "") + i(e) + "="
                } else r += r ? "&" : "", r += i(e) + "=" + i(this[e]);
        return r
    }, o.prototype.clearQuery = function() {
        for (var e in this.query) this.query[e] instanceof Function || delete this.query[e];
        return this
    }, o.prototype.queryLength = function() {
        var e, t = 0;
        for (e in this) this[e] instanceof Function || t++;
        return t
    }, o.prototype.isEmptyQuery = function() {
        return 0 === this.queryLength()
    }, o.prototype.paths = function(e) {
        var t, i = "",
            o = 0;
        if (e && e.length && e + "" !== e) {
            for (this.isAbsolute() && (i = "/"), t = e.length; o < t; o++) e[o] = !o && e[o].match(/^\w:$/) ? e[o] : n(e[o]);
            this.path = i + e.join("/")
        }
        for (e = ("/" === this.path.charAt(0) ? this.path.slice(1) : this.path).split("/"), o = 0, t = e.length; o < t; o++) e[o] = r(e[o]);
        return e
    }, o.prototype.encode = n, o.prototype.decode = r, o.prototype.isAbsolute = function() {
        return this.protocol || "/" === this.path.charAt(0)
    }, o.prototype.toString = function() {
        return (this.protocol && this.protocol + "://") + (this.user && n(this.user) + (this.pass && ":" + n(this.pass)) + "@") + (this.host && this.host) + (this.port && ":" + this.port) + (this.path && this.path) + (this.query.toString() && "?" + this.query) + (this.hash && "#" + n(this.hash))
    }, e[e.exports ? "exports" : "Url"] = o
}("undefined" != typeof module && module.exports ? module : window),
function(e, t) {
    t.fn.sharetastic = function(e) {
        var n = e && e.hasOwnProperty("sprite");
        n && e.sprite;
        return this.each(function() {
            new Sharetastic(t(this), e).build()
        })
    }
}(window, jQuery);

var _extends = Object.assign || function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
    },
    _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    } : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
! function(e, t) {
    "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.LazyLoad = t()
}(this, function() {
    "use strict";

    function e(e) {
        return e.filter(function(e) {
            return !o(e, "was-processed")
        })
    }

    function t(e, t) {
        if (t.length)
            for (var n, r = 0; n = t[r]; r += 1) a(e, n);
        else a(e, t)
    }

    function n(e, t) {
        m(t.callback_enter, e), ["IMG", "IFRAME", "VIDEO"].indexOf(e.tagName) > -1 && (b(e, t), h(e, t.class_loading)), l(e, t), s(e, "was-processed", !0), m(t.callback_set, e)
    }
    var r = function(e) {
            var t = {
                elements_selector: "img",
                container: document,
                threshold: 300,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                callback_load: null,
                callback_error: null,
                callback_set: null,
                callback_enter: null
            };
            return _extends({}, t, e)
        },
        i = "data-",
        o = function(e, t) {
            return e.getAttribute(i + t)
        },
        s = function(e, t, n) {
            return e.setAttribute(i + t, n)
        },
        a = function(e, t) {
            var n, r = "LazyLoad::Initialized",
                i = new e(t);
            try {
                n = new CustomEvent(r, {
                    detail: {
                        instance: i
                    }
                })
            } catch (e) {
                n = document.createEvent("CustomEvent"), n.initCustomEvent(r, !1, !1, {
                    instance: i
                })
            }
            window.dispatchEvent(n)
        },
        u = function(e, t, n) {
            for (var r, i = 0; r = e.children[i]; i += 1)
                if ("SOURCE" === r.tagName) {
                    var s = o(r, n);
                    s && r.setAttribute(t, s)
                }
        },
        c = function(e, t, n) {
            n && e.setAttribute(t, n)
        },
        l = function(e, t) {
            var n = t.data_sizes,
                r = t.data_srcset,
                i = t.data_src,
                s = o(e, i),
                a = e.tagName;
            if ("IMG" === a) {
                var l = e.parentNode;
                l && "PICTURE" === l.tagName && u(l, "srcset", r);
                var d = o(e, n);
                c(e, "sizes", d);
                var f = o(e, r);
                return c(e, "srcset", f), void c(e, "src", s)
            }
            return "IFRAME" === a ? void c(e, "src", s) : "VIDEO" === a ? (u(e, "src", i), void c(e, "src", s)) : void(s && (e.style.backgroundImage = 'url("' + s + '")'))
        },
        d = "undefined" != typeof window,
        f = d && "IntersectionObserver" in window,
        p = d && "classList" in document.createElement("p"),
        h = function(e, t) {
            if (p) return void e.classList.add(t);
            e.className += (e.className ? " " : "") + t
        },
        g = function(e, t) {
            if (p) return void e.classList.remove(t);
            e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "")
        },
        m = function(e, t) {
            e && e(t)
        },
        v = "load",
        y = "error",
        w = function(e, t, n) {
            e.removeEventListener(v, t), e.removeEventListener(y, n)
        },
        b = function(e, t) {
            var n = function n(i) {
                    k(i, !0, t), w(e, n, r)
                },
                r = function r(i) {
                    k(i, !1, t), w(e, n, r)
                };
            e.addEventListener(v, n), e.addEventListener(y, r)
        },
        k = function(e, t, n) {
            var r = e.target;
            g(r, n.class_loading), h(r, t ? n.class_loaded : n.class_error), m(t ? n.callback_load : n.callback_error, r)
        },
        x = function(e) {
            return e.isIntersecting || e.intersectionRatio > 0
        },
        _ = function(e, t) {
            this._settings = r(e), this._setObserver(), this.update(t)
        };
    _.prototype = {
        _setObserver: function() {
            var t = this;
            if (f) {
                var r = this._settings,
                    i = {
                        root: r.container === document ? null : r.container,
                        rootMargin: r.threshold + "px"
                    },
                    o = function(r) {
                        r.forEach(function(e) {
                            if (x(e)) {
                                var r = e.target;
                                n(r, t._settings), t._observer.unobserve(r)
                            }
                        }), t._elements = e(t._elements)
                    };
                this._observer = new IntersectionObserver(o, i)
            }
        },
        loadAll: function() {
            var t = this._settings;
            this._elements.forEach(function(e) {
                n(e, t)
            }), this._elements = e(this._elements)
        },
        update: function(t) {
            var n = this,
                r = this._settings,
                i = t || r.container.querySelectorAll(r.elements_selector);
            if (this._elements = e(Array.prototype.slice.call(i)), this._observer && n._observer && n._observer.observe) return void this._elements.forEach(function(e) {
                n._observer.observe(e)
            });
            this.loadAll()
        },
        destroy: function() {
            var t = this;
            this._observer && (e(this._elements).forEach(function(e) {
                t._observer.unobserve(e)
            }), this._observer = null), this._elements = null, this._settings = null
        }
    };
    var C = window.lazyLoadOptions;
    return d && C && t(_, C), _
}),
function(e) {
    "use strict";
    var t = "starRating",
        n = function() {},
        r = {
            totalStars: 5,
            useFullStars: !1,
            starShape: "straight",
            emptyColor: "lightgray",
            hoverColor: "orange",
            activeColor: "gold",
            ratedColor: "crimson",
            useGradient: !0,
            readOnly: !1,
            disableAfterRate: !0,
            baseUrl: !1,
            starGradient: {
                start: "#FEF7CD",
                end: "#FF9511"
            },
            strokeWidth: 4,
            strokeColor: "black",
            initialRating: 0,
            starSize: 40,
            callback: n,
            onHover: n,
            onLeave: n
        },
        i = function(n, i) {
            var o, s, a;
            this.element = n, this.$el = e(n), this.settings = e.extend({}, r, i), o = this.$el.data("rating") || this.settings.initialRating, a = this.settings.forceRoundUp ? Math.ceil : Math.round, s = (a(2 * o) / 2).toFixed(1), this._state = {
                rating: s
            }, this._uid = Math.floor(999 * Math.random()), i.starGradient || this.settings.useGradient || (this.settings.starGradient.start = this.settings.starGradient.end = this.settings.activeColor), this._defaults = r, this._name = t, this.init()
        },
        o = {
            init: function() {
                this.renderMarkup(), this.addListeners(), this.initRating()
            },
            addListeners: function() {
                this.settings.readOnly || (this.$stars.on("mouseover", this.hoverRating.bind(this)), this.$stars.on("mouseout", this.restoreState.bind(this)), this.$stars.on("click", this.handleRating.bind(this)))
            },
            hoverRating: function(e) {
                var t = this.getIndex(e);
                this.paintStars(t, "hovered"), this.settings.onHover(t + 1, this._state.rating, this.$el)
            },
            handleRating: function(e) {
                var t = this.getIndex(e),
                    n = t + 1;
                this.applyRating(n, this.$el), this.executeCallback(n, this.$el), this.settings.disableAfterRate && this.$stars.off()
            },
            applyRating: function(e) {
                var t = e - 1;
                this.paintStars(t, "rated"), this._state.rating = t + 1, this._state.rated = !0
            },
            restoreState: function(e) {
                var t = this.getIndex(e),
                    n = this._state.rating || -1,
                    r = this._state.rated ? "rated" : "active";
                this.paintStars(n - 1, r), this.settings.onLeave(t + 1, this._state.rating, this.$el)
            },
            getIndex: function(t) {
                var n = e(t.currentTarget),
                    r = n.width(),
                    i = e(t.target).attr("data-side");
                i = i || this.getOffsetByPixel(t, n, r), i = this.settings.useFullStars ? "right" : i;
                var o = n.index() - ("left" === i ? .5 : 0);
                return o = o < .5 && t.offsetX < r / 4 ? -1 : o
            },
            getOffsetByPixel: function(e, t, n) {
                return e.pageX - t.offset().left <= n / 2 && !this.settings.useFullStars ? "left" : "right"
            },
            initRating: function() {
                this.paintStars(this._state.rating - 1, "active")
            },
            paintStars: function(t, n) {
                var r, i, o, s;
                e.each(this.$stars, function(a, u) {
                    r = e(u).find('[data-side="left"]'), i = e(u).find('[data-side="right"]'), o = s = a <= t ? n : "empty", o = a - t == .5 ? n : o, r.attr("class", "svg-" + o + "-" + this._uid), i.attr("class", "svg-" + s + "-" + this._uid)
                }.bind(this))
            },
            renderMarkup: function() {
                for (var e = this.settings, t = e.baseUrl ? location.href.split("#")[0] : "", n = '<div class="jq-star" style="width:' + e.starSize + "px;  height:" + e.starSize + 'px;"><svg version="1.0" class="jq-star-svg" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg" ' + this.getSvgDimensions(e.starShape) + " stroke-width:" + e.strokeWidth + 'px;" xml:space="preserve"><style type="text/css">.svg-empty-' + this._uid + "{fill:url(" + t + "#" + this._uid + "_SVGID_1_);}.svg-hovered-" + this._uid + "{fill:url(" + t + "#" + this._uid + "_SVGID_2_);}.svg-active-" + this._uid + "{fill:url(" + t + "#" + this._uid + "_SVGID_3_);}.svg-rated-" + this._uid + "{fill:" + e.ratedColor + ";}</style>" + this.getLinearGradient(this._uid + "_SVGID_1_", e.emptyColor, e.emptyColor, e.starShape) + this.getLinearGradient(this._uid + "_SVGID_2_", e.hoverColor, e.hoverColor, e.starShape) + this.getLinearGradient(this._uid + "_SVGID_3_", e.starGradient.start, e.starGradient.end, e.starShape) + this.getVectorPath(this._uid, {
                        starShape: e.starShape,
                        strokeWidth: e.strokeWidth,
                        strokeColor: e.strokeColor
                    }) + "</svg></div>", r = "", i = 0; i < e.totalStars; i++) r += n;
                this.$el.append(r), this.$stars = this.$el.find(".jq-star")
            },
            getVectorPath: function(e, t) {
                return "rounded" === t.starShape ? this.getRoundedVectorPath(e, t) : this.getSpikeVectorPath(e, t)
            },
            getSpikeVectorPath: function(e, t) {
                return '<polygon data-side="center" class="svg-empty-' + e + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 212.9,181.1 213.9,181 306.5,241 " style="fill: transparent; stroke: ' + t.strokeColor + ';" /><polygon data-side="left" class="svg-empty-' + e + '" points="281.1,129.8 364,55.7 255.5,46.8 214,-59 172.5,46.8 64,55.4 146.8,129.7 121.1,241 213.9,181.1 213.9,181 306.5,241 " style="stroke-opacity: 0;" /><polygon data-side="right" class="svg-empty-' + e + '" points="364,55.7 255.5,46.8 214,-59 213.9,181 306.5,241 281.1,129.8 " style="stroke-opacity: 0;" />'
            },
            getRoundedVectorPath: function(e, t) {
                var n = "M520.9,336.5c-3.8-11.8-14.2-20.5-26.5-22.2l-140.9-20.5l-63-127.7 c-5.5-11.2-16.8-18.2-29.3-18.2c-12.5,0-23.8,7-29.3,18.2l-63,127.7L28,314.2C15.7,316,5.4,324.7,1.6,336.5S1,361.3,9.9,370 l102,99.4l-24,140.3c-2.1,12.3,2.9,24.6,13,32c5.7,4.2,12.4,6.2,19.2,6.2c5.2,0,10.5-1.2,15.2-3.8l126-66.3l126,66.2 c4.8,2.6,10,3.8,15.2,3.8c6.8,0,13.5-2.1,19.2-6.2c10.1-7.3,15.1-19.7,13-32l-24-140.3l102-99.4 C521.6,361.3,524.8,348.3,520.9,336.5z";
                return '<path data-side="center" class="svg-empty-' + e + '" d="' + n + '" style="stroke: ' + t.strokeColor + '; fill: transparent; " /><path data-side="right" class="svg-empty-' + e + '" d="' + n + '" style="stroke-opacity: 0;" /><path data-side="left" class="svg-empty-' + e + '" d="M121,648c-7.3,0-14.1-2.2-19.8-6.4c-10.4-7.6-15.6-20.3-13.4-33l24-139.9l-101.6-99 c-9.1-8.9-12.4-22.4-8.6-34.5c3.9-12.1,14.6-21.1,27.2-23l140.4-20.4L232,164.6c5.7-11.6,17.3-18.8,30.2-16.8c0.6,0,1,0.4,1,1 v430.1c0,0.4-0.2,0.7-0.5,0.9l-126,66.3C132,646.6,126.6,648,121,648z" style="stroke: ' + t.strokeColor + '; stroke-opacity: 0;" />'
            },
            getSvgDimensions: function(e) {
                return "rounded" === e ? 'width="550px" height="500.2px" viewBox="0 146.8 550 500.2" style="enable-background:new 0 0 550 500.2;' : 'x="0px" y="0px" width="305px" height="305px" viewBox="60 -62 309 309" style="enable-background:new 64 -59 305 305;'
            },
            getLinearGradient: function(e, t, n, r) {
                return '<linearGradient id="' + e + '" gradientUnits="userSpaceOnUse" x1="0" y1="-50" x2="0" y2="' + ("rounded" === r ? 500 : 250) + '"><stop  offset="0" style="stop-color:' + t + '"/><stop  offset="1" style="stop-color:' + n + '"/> </linearGradient>'
            },
            executeCallback: function(e, t) {
                (0, this.settings.callback)(e, t)
            }
        },
        s = {
            unload: function() {
                var n = "plugin_" + t,
                    r = e(this);
                r.data(n).$stars.off(), r.removeData(n).remove()
            },
            setRating: function(n, r) {
                var i = "plugin_" + t,
                    o = e(this),
                    s = o.data(i);
                n > s.settings.totalStars || n < 0 || (r && (n = Math.round(n)), s.applyRating(n))
            },
            getRating: function() {
                var n = "plugin_" + t;
                return e(this).data(n)._state.rating
            },
            resize: function(n) {
                var r = "plugin_" + t,
                    i = e(this),
                    o = i.data(r),
                    s = o.$stars;
                if (n <= 1 || n > 200) return void console.log("star size out of bounds");
                s = Array.prototype.slice.call(s), s.forEach(function(t) {
                    e(t).css({
                        width: n + "px",
                        height: n + "px"
                    })
                })
            },
            setReadOnly: function(n) {
                var r = "plugin_" + t,
                    i = e(this),
                    o = i.data(r);
                !0 === n ? o.$stars.off("mouseover mouseout click") : (o.settings.readOnly = !1, o.addListeners())
            }
        };
    e.extend(i.prototype, o), e.fn[t] = function(n) {
        if (!e.isPlainObject(n)) {
            if (s.hasOwnProperty(n)) return s[n].apply(this, Array.prototype.slice.call(arguments, 1));
            e.error("Method " + n + " does not exist on " + t + ".js")
        }
        return this.each(function() {
            e.data(this, "plugin_" + t) || e.data(this, "plugin_" + t, new i(this, n))
        })
    }
}(jQuery, window, document), $(document).on("blinkist:ab_test_categorized", function(e, t) {
        "undefined" == typeof dataLayer && (dataLayer = []), dataLayer.push({
            event: "ab_test_categorized",
            abTestsCategories: t.testCategories.join("__")
        })
    }),
    function(e, t) {
        "object" == typeof exports && "object" == typeof module ? module.exports = t(function() {
            try {
                return require("os")
            } catch (e) {}
        }(), function() {
            try {
                return require("request")
            } catch (e) {}
        }()) : "function" == typeof define && define.amd ? define([, ], t) : "object" == typeof exports ? exports.Client = t(function() {
            try {
                return require("os")
            } catch (e) {}
        }(), function() {
            try {
                return require("request")
            } catch (e) {}
        }()) : (e.airbrakeJs = e.airbrakeJs || {}, e.airbrakeJs.Client = t(e[undefined], e[undefined]))
    }("undefined" != typeof self ? self : this, function(e, t) {
        return function(e) {
            function t(r) {
                if (n[r]) return n[r].exports;
                var i = n[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports
            }
            var n = {};
            return t.m = e, t.c = n, t.d = function(e, n, r) {
                t.o(e, n) || Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: r
                })
            }, t.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, t.t = function(e, n) {
                if (1 & n && (e = t(e)), 8 & n) return e;
                if (4 & n && "object" == typeof e && e && e.__esModule) return e;
                var r = Object.create(null);
                if (t.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: e
                    }), 2 & n && "string" != typeof e)
                    for (var i in e) t.d(r, i, function(t) {
                        return e[t]
                    }.bind(null, i));
                return r
            }, t.n = function(e) {
                var n = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return t.d(n, "a", n), n
            }, t.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, t.p = "", t(t.s = 0)
        }({
            "./node_modules/error-stack-parser/error-stack-parser.js": function(e, t, n) {
                var r = !1;
                ! function(t, i) {
                    "use strict";
                    "function" == typeof r && r.amd ? r("error-stack-parser", ["stackframe"], i) : e.exports = i(n("./node_modules/stackframe/stackframe.js"))
                }(0, function(e) {
                    "use strict";
                    var t = /(^|@)\S+\:\d+/,
                        n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                        r = /^(eval@)?(\[native code\])?$/;
                    return {
                        parse: function(e) {
                            if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
                            if (e.stack && e.stack.match(n)) return this.parseV8OrIE(e);
                            if (e.stack) return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":")) return [e];
                            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/,
                                n = t.exec(e.replace(/[\(\)]/g, ""));
                            return [n[1], n[2] || undefined, n[3] || undefined]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !!e.match(n)
                            }, this).map(function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1),
                                    r = this.extractLocation(n.pop()),
                                    i = n.join(" ") || undefined,
                                    o = ["eval", "<anonymous>"].indexOf(r[0]) > -1 ? undefined : r[0];
                                return new e({
                                    functionName: i,
                                    fileName: o,
                                    lineNumber: r[1],
                                    columnNumber: r[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter(function(e) {
                                return !e.match(r)
                            }, this).map(function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === t.indexOf("@") && -1 === t.indexOf(":")) return new e({
                                    functionName: t
                                });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                    r = t.match(n),
                                    i = r && r[1] ? r[1] : undefined,
                                    o = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: i,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }, this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), i = [], o = 2, s = r.length; o < s; o += 2) {
                                var a = n.exec(r[o]);
                                a && i.push(new e({
                                    fileName: a[2],
                                    lineNumber: a[1],
                                    source: r[o]
                                }))
                            }
                            return i
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), i = [], o = 0, s = r.length; o < s; o += 2) {
                                var a = n.exec(r[o]);
                                a && i.push(new e({
                                    functionName: a[3] || undefined,
                                    fileName: a[2],
                                    lineNumber: a[1],
                                    source: r[o]
                                }))
                            }
                            return i
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter(function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }, this).map(function(t) {
                                var n, r = t.split("@"),
                                    i = this.extractLocation(r.pop()),
                                    o = r.shift() || "",
                                    s = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
                                o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var a = n === undefined || "[arguments not available]" === n ? undefined : n.split(",");
                                return new e({
                                    functionName: s,
                                    args: a,
                                    fileName: i[0],
                                    lineNumber: i[1],
                                    columnNumber: i[2],
                                    source: t
                                })
                            }, this)
                        }
                    }
                })
            },
            "./node_modules/promise-polyfill/src/finally.js": function(e, t, n) {
                "use strict";
                n.r(t), t["default"] = function(e) {
                    var t = this.constructor;
                    return this.then(function(n) {
                        return t.resolve(e()).then(function() {
                            return n
                        })
                    }, function(n) {
                        return t.resolve(e()).then(function() {
                            return t.reject(n)
                        })
                    })
                }
            },
            "./node_modules/promise-polyfill/src/index.js": function(e, t, n) {
                "use strict";
                n.r(t),
                    function(e) {
                        function r() {}

                        function i(e, t) {
                            return function() {
                                e.apply(t, arguments)
                            }
                        }

                        function o(e) {
                            if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                            if ("function" != typeof e) throw new TypeError("not a function");
                            this._state = 0, this._handled = !1, this._value = undefined, this._deferreds = [], d(e, this)
                        }

                        function s(e, t) {
                            for (; 3 === e._state;) e = e._value;
                            if (0 === e._state) return void e._deferreds.push(t);
                            e._handled = !0, o._immediateFn(function() {
                                var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                                if (null === n) return void(1 === e._state ? a : u)(t.promise, e._value);
                                var r;
                                try {
                                    r = n(e._value)
                                } catch (e) {
                                    return void u(t.promise, e)
                                }
                                a(t.promise, r)
                            })
                        }

                        function a(e, t) {
                            try {
                                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                                if (t && ("object" == typeof t || "function" == typeof t)) {
                                    var n = t.then;
                                    if (t instanceof o) return e._state = 3, e._value = t, void c(e);
                                    if ("function" == typeof n) return void d(i(n, t), e)
                                }
                                e._state = 1, e._value = t, c(e)
                            } catch (t) {
                                u(e, t)
                            }
                        }

                        function u(e, t) {
                            e._state = 2, e._value = t, c(e)
                        }

                        function c(e) {
                            2 === e._state && 0 === e._deferreds.length && o._immediateFn(function() {
                                e._handled || o._unhandledRejectionFn(e._value)
                            });
                            for (var t = 0, n = e._deferreds.length; t < n; t++) s(e, e._deferreds[t]);
                            e._deferreds = null
                        }

                        function l(e, t, n) {
                            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
                        }

                        function d(e, t) {
                            var n = !1;
                            try {
                                e(function(e) {
                                    n || (n = !0, a(t, e))
                                }, function(e) {
                                    n || (n = !0, u(t, e))
                                })
                            } catch (e) {
                                if (n) return;
                                n = !0, u(t, e)
                            }
                        }
                        var f = n("./node_modules/promise-polyfill/src/finally.js"),
                            p = setTimeout;
                        o.prototype["catch"] = function(e) {
                            return this.then(null, e)
                        }, o.prototype.then = function(e, t) {
                            var n = new this.constructor(r);
                            return s(this, new l(e, t, n)), n
                        }, o.prototype["finally"] = f["default"], o.all = function(e) {
                            return new o(function(t, n) {
                                function r(e, s) {
                                    try {
                                        if (s && ("object" == typeof s || "function" == typeof s)) {
                                            var a = s.then;
                                            if ("function" == typeof a) return void a.call(s, function(t) {
                                                r(e, t)
                                            }, n)
                                        }
                                        i[e] = s, 0 == --o && t(i)
                                    } catch (e) {
                                        n(e)
                                    }
                                }
                                if (!e || "undefined" == typeof e.length) throw new TypeError("Promise.all accepts an array");
                                var i = Array.prototype.slice.call(e);
                                if (0 === i.length) return t([]);
                                for (var o = i.length, s = 0; s < i.length; s++) r(s, i[s])
                            })
                        }, o.resolve = function(e) {
                            return e && "object" == typeof e && e.constructor === o ? e : new o(function(t) {
                                t(e)
                            })
                        }, o.reject = function(e) {
                            return new o(function(t, n) {
                                n(e)
                            })
                        }, o.race = function(e) {
                            return new o(function(t, n) {
                                for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                            })
                        }, o._immediateFn = "function" == typeof e && function(t) {
                            e(t)
                        } || function(e) {
                            p(e, 0)
                        }, o._unhandledRejectionFn = function(e) {
                            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                        }, t["default"] = o
                    }.call(this, n("./node_modules/timers-browserify/main.js").setImmediate)
            },
            "./node_modules/promise-polyfill/src/polyfill.js": function(e, t, n) {
                "use strict";
                n.r(t),
                    function(e) {
                        var t = n("./node_modules/promise-polyfill/src/index.js"),
                            r = n("./node_modules/promise-polyfill/src/finally.js"),
                            i = function() {
                                if ("undefined" != typeof self) return self;
                                if ("undefined" != typeof window) return window;
                                if (void 0 !== e) return e;
                                throw new Error("unable to locate global object")
                            }();
                        i.Promise ? i.Promise.prototype["finally"] || (i.Promise.prototype["finally"] = r["default"]) : i.Promise = t["default"]
                    }.call(this, n("./node_modules/webpack/buildin/global.js"))
            },
            "./node_modules/setimmediate/setImmediate.js": function(e, t, n) {
                (function(e) {
                    ! function(e, t) {
                        "use strict";

                        function n(e) {
                            "function" != typeof e && (e = new Function("" + e));
                            for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
                            var r = {
                                callback: e,
                                args: t
                            };
                            return h[p] = r, f(p), p++
                        }

                        function r(e) {
                            delete h[e]
                        }

                        function i(e) {
                            var n = e.callback,
                                r = e.args;
                            switch (r.length) {
                                case 0:
                                    n();
                                    break;
                                case 1:
                                    n(r[0]);
                                    break;
                                case 2:
                                    n(r[0], r[1]);
                                    break;
                                case 3:
                                    n(r[0], r[1], r[2]);
                                    break;
                                default:
                                    n.apply(t, r)
                            }
                        }

                        function o(e) {
                            if (g) setTimeout(o, 0, e);
                            else {
                                var t = h[e];
                                if (t) {
                                    g = !0;
                                    try {
                                        i(t)
                                    } finally {
                                        r(e), g = !1
                                    }
                                }
                            }
                        }

                        function s() {
                            f = function(e) {
                                process.nextTick(function() {
                                    o(e)
                                })
                            }
                        }

                        function a() {
                            if (e.postMessage && !e.importScripts) {
                                var t = !0,
                                    n = e.onmessage;
                                return e.onmessage = function() {
                                    t = !1
                                }, e.postMessage("", "*"), e.onmessage = n, t
                            }
                        }

                        function u() {
                            var t = "setImmediate$" + Math.random() + "$",
                                n = function(n) {
                                    n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
                                };
                            e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), f = function(n) {
                                e.postMessage(t + n, "*")
                            }
                        }

                        function c() {
                            var e = new MessageChannel;
                            e.port1.onmessage = function(e) {
                                o(e.data)
                            }, f = function(t) {
                                e.port2.postMessage(t)
                            }
                        }

                        function l() {
                            var e = m.documentElement;
                            f = function(t) {
                                var n = m.createElement("script");
                                n.onreadystatechange = function() {
                                    o(t), n.onreadystatechange = null, e.removeChild(n), n = null
                                }, e.appendChild(n)
                            }
                        }

                        function d() {
                            f = function(e) {
                                setTimeout(o, 0, e)
                            }
                        }
                        if (!e.setImmediate) {
                            var f, p = 1,
                                h = {},
                                g = !1,
                                m = e.document,
                                v = Object.getPrototypeOf && Object.getPrototypeOf(e);
                            v = v && v.setTimeout ? v : e, "[object process]" === {}.toString.call(e.process) ? s() : a() ? u() : e.MessageChannel ? c() : m && "onreadystatechange" in m.createElement("script") ? l() : d(), v.setImmediate = n, v.clearImmediate = r
                        }
                    }("undefined" == typeof self ? void 0 === e ? this : e : self)
                }).call(this, n("./node_modules/webpack/buildin/global.js"))
            },
            "./node_modules/stackframe/stackframe.js": function(e) {
                var t = !1;
                ! function(n, r) {
                    "use strict";
                    "function" == typeof t && t.amd ? t("stackframe", [], r) : e.exports = r()
                }(0, function() {
                    "use strict";

                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }

                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }

                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }

                    function r(e) {
                        if (e instanceof Object)
                            for (var n = 0; n < u.length; n++) e.hasOwnProperty(u[n]) && e[u[n]] !== undefined && this["set" + t(u[n])](e[u[n]])
                    }
                    var i = ["isConstructor", "isEval", "isNative", "isToplevel"],
                        o = ["columnNumber", "lineNumber"],
                        s = ["fileName", "functionName", "source"],
                        a = ["args"],
                        u = i.concat(o, s, a);
                    r.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof r) this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new r(e)
                            }
                        },
                        toString: function() {
                            return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                        }
                    };
                    for (var c = 0; c < i.length; c++) r.prototype["get" + t(i[c])] = n(i[c]), r.prototype["set" + t(i[c])] = function(e) {
                        return function(t) {
                            this[e] = Boolean(t)
                        }
                    }(i[c]);
                    for (var l = 0; l < o.length; l++) r.prototype["get" + t(o[l])] = n(o[l]), r.prototype["set" + t(o[l])] = function(t) {
                        return function(n) {
                            if (!e(n)) throw new TypeError(t + " must be a Number");
                            this[t] = Number(n)
                        }
                    }(o[l]);
                    for (var d = 0; d < s.length; d++) r.prototype["get" + t(s[d])] = n(s[d]), r.prototype["set" + t(s[d])] = function(e) {
                        return function(t) {
                            this[e] = String(t)
                        }
                    }(s[d]);
                    return r
                })
            },
            "./node_modules/timers-browserify/main.js": function(e, t, n) {
                (function(e) {
                    function r(e, t) {
                        this._id = e, this._clearFn = t
                    }
                    var i = void 0 !== e && e || "undefined" != typeof self && self || window,
                        o = Function.prototype.apply;
                    t.setTimeout = function() {
                        return new r(o.call(setTimeout, i, arguments), clearTimeout)
                    }, t.setInterval = function() {
                        return new r(o.call(setInterval, i, arguments), clearInterval)
                    }, t.clearTimeout = t.clearInterval = function(e) {
                        e && e.close()
                    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
                        this._clearFn.call(i, this._id)
                    }, t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
                    }, t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
                    }, t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }, n("./node_modules/setimmediate/setImmediate.js"), t.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== e && e.setImmediate || this && this.setImmediate, t.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== e && e.clearImmediate || this && this.clearImmediate
                }).call(this, n("./node_modules/webpack/buildin/global.js"))
            },
            "./node_modules/webpack/buildin/global.js": function(e) {
                var t;
                t = function() {
                    return this
                }();
                try {
                    t = t || Function("return this")() || (0, eval)("this")
                } catch (e) {
                    "object" == typeof window && (t = window)
                }
                e.exports = t
            },
            "./src/client.ts": function(e, t, n) {
                "use strict";

                function r(e) {
                    var t = e.environment;
                    return t && t.startsWith && t.startsWith("dev")
                }
                var i = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        "default": e
                    }
                };
                n("./node_modules/promise-polyfill/src/polyfill.js");
                var o = i(n("./src/jsonify_notice.ts")),
                    s = i(n("./src/processor/stacktracejs.ts")),
                    a = i(n("./src/filter/ignore.ts")),
                    u = i(n("./src/filter/debounce.ts")),
                    c = i(n("./src/filter/uncaught_message.ts")),
                    l = i(n("./src/filter/angular_message.ts")),
                    d = i(n("./src/filter/window.ts")),
                    f = i(n("./src/filter/node.ts")),
                    p = n("./src/reporter/reporter.ts"),
                    h = i(n("./src/reporter/fetch.ts")),
                    g = i(n("./src/reporter/node.ts")),
                    m = i(n("./src/reporter/xhr.ts")),
                    v = i(n("./src/reporter/jsonp.ts")),
                    y = n("./src/historian.ts"),
                    w = function() {
                        function e(e) {
                            void 0 === e && (e = {});
                            var t = this;
                            if (this.filters = [], this.offline = !1, this.todo = [], this.onClose = [], !e.projectId || !e.projectKey) throw new Error("airbrake: projectId and projectKey are required");
                            this.opts = e, this.opts.host = this.opts.host || "https://api.airbrake.io", this.opts.timeout = this.opts.timeout || 1e4, this.opts.keysBlacklist = this.opts.keysBlacklist || [/password/, /secret/], this.processor = e.processor || s["default"], this.setReporter(e.reporter || p.defaultReporter(e)), this.addFilter(a["default"]), this.addFilter(u["default"]()), this.addFilter(c["default"]), this.addFilter(l["default"]), e.environment && this.addFilter(function(t) {
                                return t.context.environment = e.environment, t
                            }), "object" == typeof window ? (this.addFilter(d["default"]), window.addEventListener && (this.onOnline = this.onOnline.bind(this), window.addEventListener("online", this.onOnline), this.onOffline = this.onOffline.bind(this), window.addEventListener("offline", this.onOffline), this.onUnhandledrejection = this.onUnhandledrejection.bind(this), window.addEventListener("unhandledrejection", this.onUnhandledrejection), this.onClose.push(function() {
                                window.removeEventListener("online", t.onOnline), window.removeEventListener("offline", t.onOffline), window.removeEventListener("unhandledrejection", t.onUnhandledrejection)
                            }))) : this.addFilter(f["default"]), y.historian.registerNotifier(this), (e.unwrapConsole || r(e)) && y.historian.unwrapConsole()
                        }
                        return e.prototype.close = function() {
                            for (var e = 0, t = this.onClose; e < t.length; e++) {
                                (0, t[e])()
                            }
                            y.historian.unregisterNotifier(this)
                        }, e.prototype.setReporter = function(e) {
                            switch (e) {
                                case "fetch":
                                    this.reporter = h["default"];
                                    break;
                                case "node":
                                    this.reporter = g["default"];
                                    break;
                                case "xhr":
                                    this.reporter = m["default"];
                                    break;
                                case "jsonp":
                                    this.reporter = v["default"];
                                    break;
                                default:
                                    this.reporter = e
                            }
                        }, e.prototype.addFilter = function(e) {
                            this.filters.push(e)
                        }, e.prototype.notify = function(e) {
                            var t = this,
                                n = {
                                    id: "",
                                    errors: [],
                                    context: Object.assign({
                                        severity: "error"
                                    }, e.context),
                                    params: e.params || {},
                                    environment: e.environment || {},
                                    session: e.session || {}
                                };
                            if ("object" == typeof e && e.error !== undefined || (e = {
                                    error: e
                                }), !e.error) return n.error = new Error("airbrake: got err=" + JSON.stringify(e.error) + ", wanted an Error"), Promise.resolve(n);
                            if (this.opts.ignoreWindowError && e.context && e.context.windowError) return n.error = new Error("airbrake: window error is ignored"), Promise.resolve(n);
                            if (this.offline) return new Promise(function(r, i) {
                                for (t.todo.push({
                                        err: e,
                                        resolve: r,
                                        reject: i
                                    }); t.todo.length > 100;) {
                                    var o = t.todo.shift();
                                    if (o === undefined) break;
                                    n.error = new Error("airbrake: offline queue is too large"), o.resolve(n)
                                }
                            });
                            var r = y.getHistory();
                            r.length > 0 && (n.context.history = r);
                            var i = this.processor(e.error);
                            n.errors.push(i);
                            for (var s = 0, a = this.filters; s < a.length; s++) {
                                var u = a[s],
                                    c = u(n);
                                if (null === c) return n.error = new Error("airbrake: error is filtered"), Promise.resolve(n);
                                n = c
                            }
                            n.context || (n.context = {}), n.context.language = "JavaScript", n.context.notifier = {
                                name: "airbrake-js",
                                version: "1.4.6",
                                url: "https://github.com/airbrake/airbrake-js"
                            };
                            var l = o["default"](n, {
                                keysBlacklist: this.opts.keysBlacklist
                            });
                            return this.reporter(n, l, this.opts)
                        }, e.prototype.wrap = function(e, t) {
                            if (void 0 === t && (t = []), e._airbrake) return e;
                            var n = this,
                                r = function() {
                                    var t = Array.prototype.slice.call(arguments),
                                        r = n.wrapArguments(t);
                                    try {
                                        return e.apply(this, r)
                                    } catch (e) {
                                        throw n.notify({
                                            error: e,
                                            params: {
                                                arguments: t
                                            }
                                        }), y.historian.ignoreNextWindowError(), e
                                    }
                                };
                            for (var i in e) e.hasOwnProperty(i) && (r[i] = e[i]);
                            for (var o = 0, s = t; o < s.length; o++) {
                                var i = s[o];
                                e.hasOwnProperty(i) && (r[i] = e[i])
                            }
                            return r._airbrake = !0, r.inner = e, r
                        }, e.prototype.wrapArguments = function(e) {
                            for (var t in e) {
                                var n = e[t];
                                "function" == typeof n && (e[t] = this.wrap(n))
                            }
                            return e
                        }, e.prototype.call = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            return this.wrap(e).apply(this, Array.prototype.slice.call(arguments, 1))
                        }, e.prototype.onerror = function() {
                            y.historian.onerror.apply(y.historian, arguments)
                        }, e.prototype.onOnline = function() {
                            this.offline = !1;
                            for (var e = function(e) {
                                    t.notify(e.err).then(function(t) {
                                        e.resolve(t)
                                    })
                                }, t = this, n = 0, r = this.todo; n < r.length; n++) {
                                e(r[n])
                            }
                            this.todo = []
                        }, e.prototype.onOffline = function() {
                            this.offline = !0
                        }, e.prototype.onUnhandledrejection = function(e) {
                            var t = e.reason || e.detail.reason,
                                n = t.message || String(t);
                            n.indexOf && 0 === n.indexOf("airbrake: ") || this.notify(t)
                        }, e
                    }();
                e.exports = w
            },
            "./src/filter/angular_message.ts": function(e, t) {
                "use strict";

                function n(e) {
                    var t = e.errors[0];
                    if ("" !== t.type && "Error" !== t.type) return e;
                    var n = t.message.match(r);
                    return null !== n && (t.type = n[1], t.message = n[2]), e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = new RegExp(["^", "\\[(\\$.+)\\]", "\\s", "([\\s\\S]+)", "$"].join(""));
                t["default"] = n
            },
            "./src/filter/debounce.ts": function(e, t) {
                "use strict";

                function n() {
                    var e, t;
                    return function(n) {
                        var r = JSON.stringify(n.errors);
                        return r === e ? null : (t && clearTimeout(t), e = r, t = setTimeout(function() {
                            e = ""
                        }, 1e3), n)
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            },
            "./src/filter/ignore.ts": function(e, t) {
                "use strict";

                function n(e) {
                    var t = e.errors[0];
                    if ("" === t.type && -1 !== r.indexOf(t.message)) return null;
                    if (t.backtrace && t.backtrace.length > 0) {
                        if ("<anonymous>" === t.backtrace[0].file) return null
                    }
                    return e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = ["Script error", "Script error.", "InvalidAccessError"];
                t["default"] = n
            },
            "./src/filter/node.ts": function(e, t, n) {
                "use strict";

                function r(e) {
                    var t;
                    try {
                        t = n("os")
                    } catch (e) {}
                    if (t && (e.context.os = t.type() + "/" + t.release(), e.context.architecture = t.arch(), e.context.hostname = t.hostname(), e.params.os = {
                            homedir: t.homedir(),
                            uptime: t.uptime(),
                            freemem: t.freemem(),
                            totalmem: t.totalmem(),
                            loadavg: t.loadavg()
                        }), process) {
                        e.context.platform = process.platform, e.context.rootDirectory || (e.context.rootDirectory = process.cwd()), process.env.NODE_ENV && (e.context.environment = process.env.NODE_ENV), e.params.process = {
                            pid: process.pid,
                            cwd: process.cwd(),
                            execPath: process.execPath,
                            argv: process.argv
                        };
                        for (var r in ["uptime", "cpuUsage", "memoryUsage"]) process[r] && (e.params.process[r] = process[r]())
                    }
                    return e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = r
            },
            "./src/filter/uncaught_message.ts": function(e, t) {
                "use strict";

                function n(e) {
                    var t = e.errors[0];
                    if ("" !== t.type && "Error" !== t.type) return e;
                    var n = t.message.match(r);
                    return null !== n && (t.type = n[1], t.message = n[2]), e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = new RegExp(["^", "Uncaught\\s", "(.+?)", ":\\s", "(.+)", "$"].join(""));
                t["default"] = n
            },
            "./src/filter/window.ts": function(e, t) {
                "use strict";

                function n(e) {
                    return window.navigator && window.navigator.userAgent && (e.context.userAgent = window.navigator.userAgent), window.location && (e.context.url = String(window.location), e.context.rootDirectory = window.location.protocol + "//" + window.location.host), e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t["default"] = n
            },
            "./src/historian.ts": function(e, t, n) {
                "use strict";

                function r() {
                    return t.historian.getHistory()
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("./src/instrumentation/dom.ts"),
                    o = ["debug", "log", "info", "warn", "error"],
                    s = function() {
                        function e() {
                            var e = this;
                            if (this.historyMaxLen = 20, this.notifiers = [], this.errors = [], this.ignoreWindowError = 0, this.history = [], this.ignoreNextXHR = 0, "object" == typeof console && console.error && (this.consoleError = console.error), "object" == typeof window) {
                                var t = this,
                                    n = window.onerror;
                                window.onerror = function() {
                                    n && n.apply(this, arguments), t.onerror.apply(t, arguments)
                                }, this.domEvents(), "function" == typeof fetch && this.fetch(), "object" == typeof history && this.location()
                            }
                            "object" == typeof process && "function" == typeof process.on && (process.on("uncaughtException", function(t) {
                                e.notify(t).then(function() {
                                    1 === process.listeners("uncaughtException").length && (e.consoleError && e.consoleError("uncaught exception", t), process.exit(1))
                                })
                            }), process.on("unhandledRejection", function(t) {
                                var n = t.message || String(t);
                                n.indexOf && 0 === n.indexOf("airbrake: ") || e.notify(t).then(function() {
                                    1 === process.listeners("unhandledRejection").length && (e.consoleError && e.consoleError("unhandled rejection", t), process.exit(1))
                                })
                            })), "object" == typeof console && this.console(), "undefined" != typeof XMLHttpRequest && this.xhr()
                        }
                        return e.prototype.registerNotifier = function(e) {
                            this.notifiers.push(e);
                            for (var t = 0, n = this.errors; t < n.length; t++) {
                                var r = n[t];
                                this.notifyNotifiers(r)
                            }
                            this.errors = []
                        }, e.prototype.unregisterNotifier = function(e) {
                            var t = this.notifiers.indexOf(e); - 1 !== t && this.notifiers.splice(t, 1)
                        }, e.prototype.notify = function(e) {
                            return this.notifiers.length > 0 ? this.notifyNotifiers(e) : (this.errors.push(e), this.errors.length > this.historyMaxLen && (this.errors = this.errors.slice(-this.historyMaxLen)), Promise.resolve({}))
                        }, e.prototype.notifyNotifiers = function(e) {
                            for (var t = [], n = 0, r = this.notifiers; n < r.length; n++) {
                                var i = r[n];
                                t.push(i.notify(e))
                            }
                            return Promise.all(t).then(function(e) {
                                return e[0]
                            })
                        }, e.prototype.onerror = function(e, t, n, r, i) {
                            if (!(this.ignoreWindowError > 0)) return i ? void this.notify({
                                error: i,
                                context: {
                                    windowError: !0
                                }
                            }) : void(t && n && this.notify({
                                error: {
                                    message: e,
                                    fileName: t,
                                    lineNumber: n,
                                    columnNumber: r,
                                    noStack: !0
                                },
                                context: {
                                    windowError: !0
                                }
                            }))
                        }, e.prototype.ignoreNextWindowError = function() {
                            var e = this;
                            this.ignoreWindowError++, setTimeout(function() {
                                return e.ignoreWindowError--
                            })
                        }, e.prototype.getHistory = function() {
                            return this.history
                        }, e.prototype.pushHistory = function(e) {
                            if (this.isDupState(e)) return void(this.lastState.num ? this.lastState.num++ : this.lastState.num = 2);
                            e.date || (e.date = new Date), this.history.push(e), this.lastState = e, this.history.length > this.historyMaxLen && (this.history = this.history.slice(-this.historyMaxLen))
                        }, e.prototype.isDupState = function(e) {
                            if (!this.lastState) return !1;
                            for (var t in e)
                                if ("date" !== t && e[t] !== this.lastState[t]) return !1;
                            return !0
                        }, e.prototype.domEvents = function() {
                            var e = i.makeEventHandler(this);
                            window.addEventListener && (window.addEventListener("load", e), window.addEventListener("error", function(t) {
                                "error" in t || e(t)
                            }, !0)), "object" == typeof document && document.addEventListener && (document.addEventListener("DOMContentLoaded", e), document.addEventListener("click", e), document.addEventListener("keypress", e))
                        }, e.prototype.console = function() {
                            for (var e = this, t = (function(t) {
                                    if (!(t in console)) return "continue";
                                    var n = console[t],
                                        r = function() {
                                            n.apply(console, arguments), e.pushHistory({
                                                type: "log",
                                                severity: t,
                                                arguments: Array.prototype.slice.call(arguments)
                                            })
                                        };
                                    r.inner = n, console[t] = r
                                }), n = 0, r = o; n < r.length; n++) {
                                t(r[n])
                            }
                        }, e.prototype.unwrapConsole = function() {
                            for (var e = 0, t = o; e < t.length; e++) {
                                var n = t[e];
                                n in console && console[n].inner && (console[n] = console[n].inner)
                            }
                        }, e.prototype.fetch = function() {
                            var e = this,
                                t = fetch;
                            window.fetch = function(n, r) {
                                var i = {
                                    type: "xhr",
                                    date: new Date
                                };
                                i.url = "string" == typeof n ? n : n.url, r && r.method ? i.method = r.method : i.method = "GET", e.ignoreNextXHR++, setTimeout(function() {
                                    return e.ignoreNextXHR--
                                });
                                var o = t.apply(this, arguments);
                                return o.then(function(t) {
                                    i.statusCode = t.status, i.duration = (new Date).getTime() - i.date.getTime(), e.pushHistory(i)
                                }), o
                            }
                        }, e.prototype.xhr = function() {
                            var e = this,
                                t = XMLHttpRequest.prototype.open;
                            XMLHttpRequest.prototype.open = function(n, r) {
                                0 === e.ignoreNextXHR && (this.__state = {
                                    type: "xhr",
                                    method: n,
                                    url: r
                                }), t.apply(this, arguments)
                            };
                            var n = XMLHttpRequest.prototype.send;
                            XMLHttpRequest.prototype.send = function() {
                                var t = this.onreadystatechange;
                                return this.onreadystatechange = function() {
                                    if (4 === this.readyState && this.__state && e.recordReq(this), t) return t.apply(this, arguments)
                                }, this.__state && (this.__state.date = new Date), n.apply(this, arguments)
                            }
                        }, e.prototype.recordReq = function(e) {
                            var t = e.__state;
                            t.statusCode = e.status, t.duration = (new Date).getTime() - t.date.getTime(), this.pushHistory(t)
                        }, e.prototype.location = function() {
                            this.lastLocation = document.location.pathname;
                            var e = this,
                                t = window.onpopstate;
                            window.onpopstate = function() {
                                if (e.recordLocation(document.location.pathname), t) return t.apply(this, arguments)
                            };
                            var n = history.pushState;
                            history.pushState = function(t, r, i) {
                                i && e.recordLocation(i.toString()), n.apply(this, arguments)
                            }
                        }, e.prototype.recordLocation = function(e) {
                            var t = e.indexOf("://");
                            t >= 0 ? (e = e.slice(t + 3), t = e.indexOf("/"), e = t >= 0 ? e.slice(t) : "/") : "/" !== e.charAt(0) && (e = "/" + e), this.pushHistory({
                                type: "location",
                                from: this.lastLocation,
                                to: e
                            }), this.lastLocation = e
                        }, e
                    }();
                t["default"] = s, t.historian = new s, t.getHistory = r
            },
            "./src/instrumentation/dom.ts": function(e, t) {
                "use strict";

                function n(e) {
                    if (!e) return "";
                    var t = [];
                    if (e.tagName && t.push(e.tagName.toLowerCase()), e.id && (t.push("#"), t.push(e.id)), e.className && (t.push("."), t.push(e.className.split(" ").join("."))), e.getAttribute)
                        for (var n = 0, r = o; n < r.length; n++) {
                            var i = r[n],
                                s = e.getAttribute(i);
                            s && t.push("[" + i + '="' + s + '"]')
                        }
                    return t.join("")
                }

                function r(e) {
                    for (var t = 10, r = [], i = e; i;) {
                        var o = n(i);
                        if ("" !== o && (r.push(o), r.length > t)) break;
                        i = i.parentNode
                    }
                    return 0 === r.length ? String(e) : r.reverse().join(" > ")
                }

                function i(e) {
                    return function(t) {
                        var n;
                        try {
                            n = t.target
                        } catch (e) {
                            return
                        }
                        if (n) {
                            var i = {
                                type: t.type
                            };
                            try {
                                i.target = r(n)
                            } catch (e) {
                                i.target = "<" + e.toString() + ">"
                            }
                            e.pushHistory(i)
                        }
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = ["type", "name", "src"];
                t.makeEventHandler = i
            },
            "./src/internal/compat.ts": function() {
                Object.assign || (Object.assign = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    for (var r = function(t) {
                            t && Object.keys(t).forEach(function(n) {
                                return e[n] = t[n]
                            })
                        }, i = 0, o = t; i < o.length; i++) {
                        r(o[i])
                    }
                    return e
                })
            },
            "./src/jsonify_notice.ts": function(e, t) {
                "use strict";

                function n(e, t) {
                    var n = void 0 === t ? {} : t,
                        r = n.maxLength,
                        o = void 0 === r ? 64e3 : r,
                        s = n.keysBlacklist,
                        a = void 0 === s ? [] : s;
                    if (e.errors)
                        for (var u in e.errors) {
                            var c = new l({
                                keysBlacklist: a
                            });
                            e.errors[u] = c.truncate(e.errors[u])
                        }
                    for (var d = "", f = ["context", "params", "environment", "session"], p = 0; p < 8; p++) {
                        for (var h = {
                                level: p,
                                keysBlacklist: a
                            }, g = 0, m = f; g < m.length; g++) {
                            var v = m[g],
                                y = e[v];
                            y && (e[v] = i(y, h))
                        }
                        if (d = JSON.stringify(e), d.length < o) return d
                    }
                    var w = {
                        json: d.slice(0, Math.floor(o / 2)) + "..."
                    };
                    f.push("errors");
                    for (var b = 0, k = f; b < k.length; b++) {
                        var v = k[b],
                            y = e[v];
                        y && (d = JSON.stringify(y), w[v] = d.length)
                    }
                    var x = new Error("airbrake: notice exceeds max length and can't be truncated");
                    throw x.params = w, x
                }

                function r(e, t) {
                    return e >> t || 1
                }

                function i(e, t) {
                    return void 0 === t && (t = {}), new l(t).truncate(e)
                }

                function o(e, t) {
                    try {
                        return e[t]
                    } catch (e) {
                        return
                    }
                }

                function s(e) {
                    return Object.prototype.toString.apply(e).slice("[object ".length, -1)
                }

                function a(e, t) {
                    for (var n = 0, r = t; n < r.length; n++) {
                        var i = r[n];
                        if (i === e) return !0;
                        if (i instanceof RegExp && e.match(i)) return !0
                    }
                    return !1
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var u = "[Filtered]",
                    c = 128;
                t["default"] = n;
                var l = function() {
                    function e(e) {
                        this.maxStringLength = 1024, this.maxObjectLength = c, this.maxArrayLength = c, this.maxDepth = 8, this.keys = [], this.keysBlacklist = [], this.seen = [];
                        var t = e.level || 0;
                        this.keysBlacklist = e.keysBlacklist || [], this.maxStringLength = r(this.maxStringLength, t), this.maxObjectLength = r(this.maxObjectLength, t), this.maxArrayLength = r(this.maxArrayLength, t), this.maxDepth = r(this.maxDepth, t)
                    }
                    return e.prototype.truncate = function(e, t, n) {
                        if (void 0 === t && (t = ""), void 0 === n && (n = 0), null === e || e === undefined) return e;
                        switch (typeof e) {
                            case "boolean":
                            case "number":
                            case "function":
                                return e;
                            case "string":
                                return this.truncateString(e);
                            case "object":
                                break;
                            default:
                                return this.truncateString(String(e))
                        }
                        if (e instanceof String) return this.truncateString(e.toString());
                        if (e instanceof Boolean || e instanceof Number || e instanceof Date || e instanceof RegExp) return e;
                        if (e instanceof Error) return this.truncateString(e.toString());
                        if (this.seen.indexOf(e) >= 0) return "[Circular " + this.getPath(e) + "]";
                        var r = s(e);
                        if (++n > this.maxDepth) return "[Truncated " + r + "]";
                        switch (this.keys.push(t), this.seen.push(e), r) {
                            case "Array":
                                return this.truncateArray(e, n);
                            case "Object":
                                return this.truncateObject(e, n);
                            default:
                                var i = this.maxDepth;
                                this.maxDepth = 0;
                                var o = this.truncateObject(e, n);
                                return o.__type = r, this.maxDepth = i, o
                        }
                    }, e.prototype.getPath = function(e) {
                        for (var t = this.seen.indexOf(e), n = [this.keys[t]], r = t; r >= 0; r--) {
                            var i = this.seen[r];
                            i && o(i, n[0]) === e && (e = i, n.unshift(this.keys[r]))
                        }
                        return "~" + n.join(".")
                    }, e.prototype.truncateString = function(e) {
                        return e.length > this.maxStringLength ? e.slice(0, this.maxStringLength) + "..." : e
                    }, e.prototype.truncateArray = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = 0,
                            r = [];
                        for (var i in e) {
                            var o = e[i];
                            if (r.push(this.truncate(o, i, t)), ++n >= this.maxArrayLength) break
                        }
                        return r
                    }, e.prototype.truncateObject = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = 0,
                            r = {};
                        for (var i in e)
                            if (a(i, this.keysBlacklist)) r[i] = u;
                            else {
                                var s = o(e, i);
                                if (s !== undefined && "function" != typeof s && (r[i] = this.truncate(s, i, t), ++n >= this.maxObjectLength)) break
                            } return r
                    }, e
                }();
                t.truncate = i
            },
            "./src/processor/stacktracejs.ts": function(e, t, n) {
                "use strict";

                function r(e) {
                    try {
                        return o.parse(e)
                    } catch (t) {
                        s && e.stack && console.warn("ErrorStackParser:", t.toString(), e.stack)
                    }
                    return e.fileName ? [e] : []
                }

                function i(e) {
                    var t = [];
                    if (!e.noStack) {
                        var n = r(e);
                        if (0 === n.length) try {
                            throw new Error("fake")
                        } catch (e) {
                            n = r(e), n.shift(), n.shift()
                        }
                        for (var i = 0, o = n; i < o.length; i++) {
                            var s = o[i];
                            t.push({
                                "function": s.functionName || "",
                                file: s.fileName || "",
                                line: s.lineNumber || 0,
                                column: s.columnNumber || 0
                            })
                        }
                    }
                    var a;
                    a = e.name ? e.name : "";
                    var u;
                    return u = e.message ? String(e.message) : String(e), {
                        type: a,
                        message: u,
                        backtrace: t
                    }
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n("./node_modules/error-stack-parser/error-stack-parser.js"),
                    s = "object" == typeof console && console.warn;
                t["default"] = i
            },
            "./src/reporter/fetch.ts": function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    if (Date.now() / 1e3 < o) return e.error = i.errors.ipRateLimited, Promise.resolve(e);
                    var r = n.host + "/api/v3/projects/" + n.projectId + "/notices?key=" + n.projectKey,
                        s = {
                            method: "POST",
                            body: t
                        };
                    return new Promise(function(t) {
                        fetch(r, s).then(function(n) {
                            if (401 === n.status) return e.error = i.errors.unauthorized, void t(e);
                            if (429 === n.status) {
                                e.error = i.errors.ipRateLimited, t(e);
                                var r = n.headers.get("X-RateLimit-Delay");
                                if (!r) return;
                                var s = parseInt(r, 10);
                                return void(s > 0 && (o = Date.now() / 1e3 + s))
                            }
                            if (n.status >= 200 && n.status < 500) {
                                var a = void 0;
                                try {
                                    a = n.json()
                                } catch (n) {
                                    return e.error = n, void t(e)
                                }
                                return void a.then(function(n) {
                                    return n.id ? (e.id = n.id, void t(e)) : n.message ? (e.error = new Error(n.message), void t(e)) : void 0
                                })
                            }
                            n.text().then(function(r) {
                                e.error = new Error("airbrake: fetch: unexpected response: code=" + n.status + " body='" + r + "'"), t(e)
                            })
                        })["catch"](function(n) {
                            e.error = n, t(e)
                        })
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("./src/reporter/reporter.ts"),
                    o = 0;
                t["default"] = r
            },
            "./src/reporter/jsonp.ts": function(e, t) {
                "use strict";

                function n(e, t, n) {
                    return new Promise(function(i) {
                        r++;
                        var o = "airbrakeCb" + String(r);
                        window[o] = function(t) {
                            try {
                                delete window[o]
                            } catch (e) {
                                window[o] = undefined
                            }
                            return t.id ? (e.id = t.id, void i(e)) : t.message ? (e.error = new Error(t.message), void i(e)) : (e.error = new Error(t), void i(e))
                        }, t = encodeURIComponent(t);
                        var s = n.host + "/api/v3/projects/" + n.projectId + "/create-notice?key=" + n.projectKey + "&callback=" + o + "&body=" + t,
                            a = window.document,
                            u = a.getElementsByTagName("head")[0],
                            c = a.createElement("script");
                        c.src = s, c.onload = function() {
                            return u.removeChild(c)
                        }, c.onerror = function() {
                            u.removeChild(c), e.error = new Error("airbrake: JSONP script error"), i(e)
                        }, u.appendChild(c)
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = 0;
                t["default"] = n
            },
            "./src/reporter/node.ts": function(e, t, n) {
                "use strict";

                function r(e, t, r) {
                    var s;
                    try {
                        s = n("request")
                    } catch (e) {
                        console.log("airbrake-js: please install request package")
                    }
                    if (Date.now() / 1e3 < o) return e.error = i.errors.ipRateLimited, Promise.resolve(e);
                    var a = r.host + "/api/v3/projects/" + r.projectId + "/notices?key=" + r.projectKey;
                    return new Promise(function(n) {
                        (r.request || s)({
                            url: a,
                            method: "POST",
                            body: t,
                            headers: {
                                "content-type": "application/json"
                            },
                            timeout: r.timeout
                        }, function(t, r, s) {
                            if (t) return e.error = t, void n(e);
                            if (!r.statusCode) return e.error = new Error("airbrake: node: statusCode is null or undefined"), void n(e);
                            if (401 === r.statusCode) return e.error = i.errors.unauthorized, void n(e);
                            if (429 === r.statusCode) {
                                e.error = i.errors.ipRateLimited, n(e);
                                var a = r.headers["x-ratelimit-delay"];
                                if (!a) return;
                                var u = void 0;
                                if ("string" == typeof a) u = a;
                                else {
                                    if (!(a instanceof Array)) return;
                                    u = a[0]
                                }
                                var c = parseInt(u, 10);
                                return void(c > 0 && (o = Date.now() / 1e3 + c))
                            }
                            if (r.statusCode >= 200 && r.statusCode < 500) {
                                var l = void 0;
                                try {
                                    l = JSON.parse(s)
                                } catch (t) {
                                    return e.error = t, void n(e)
                                }
                                if (l.id) return e.id = l.id, void n(e);
                                if (l.message) return e.error = new Error(l.message), void n(e)
                            }
                            s = s.trim(), e.error = new Error("airbrake: node: unexpected response: code=" + r.statusCode + " body='" + s + "'"), n(e)
                        })
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("./src/reporter/reporter.ts"),
                    o = 0;
                t["default"] = r
            },
            "./src/reporter/reporter.ts": function(e, t) {
                "use strict";

                function n(e) {
                    return e.request ? "node" : "function" == typeof fetch ? "fetch" : "function" == typeof XMLHttpRequest ? "xhr" : "object" == typeof window ? "jsonp" : "node"
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.defaultReporter = n, t.errors = {
                    unauthorized: new Error("airbrake: unauthorized: project id or key are wrong"),
                    ipRateLimited: new Error("airbrake: IP is rate limited")
                }
            },
            "./src/reporter/xhr.ts": function(e, t, n) {
                "use strict";

                function r(e, t, n) {
                    if (Date.now() / 1e3 < o) return e.error = i.errors.ipRateLimited, Promise.resolve(e);
                    var r = n.host + "/api/v3/projects/" + n.projectId + "/notices?key=" + n.projectKey;
                    return new Promise(function(s) {
                        var a = new XMLHttpRequest;
                        a.open("POST", r, !0), a.timeout = n.timeout, a.onreadystatechange = function() {
                            if (4 === a.readyState) {
                                if (401 === a.status) return e.error = i.errors.unauthorized, void s(e);
                                if (429 === a.status) {
                                    e.error = i.errors.ipRateLimited, s(e);
                                    var t = a.getResponseHeader("X-RateLimit-Delay");
                                    if (!t) return;
                                    var n = parseInt(t, 10);
                                    return void(n > 0 && (o = Date.now() / 1e3 + n))
                                }
                                if (a.status >= 200 && a.status < 500) {
                                    var r = void 0;
                                    try {
                                        r = JSON.parse(a.responseText)
                                    } catch (t) {
                                        return e.error = t, void s(e)
                                    }
                                    if (r.id) return e.id = r.id, void s(e);
                                    if (r.message) return e.error = new Error(r.message), void s(e)
                                }
                                var u = a.responseText.trim();
                                e.error = new Error("airbrake: xhr: unexpected response: code=" + a.status + " body='" + u + "'"), s(e)
                            }
                        }, a.send(t)
                    })
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = n("./src/reporter/reporter.ts"),
                    o = 0;
                t["default"] = r
            },
            0: function(e, t, n) {
                n("./src/internal/compat.ts"), e.exports = n("./src/client.ts")
            },
            os: function(t) {
                if (void 0 === e) {
                    var n = new Error("Cannot find module 'undefined'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                t.exports = e
            },
            request: function(e) {
                if (void 0 === t) {
                    var n = new Error("Cannot find module 'undefined'");
                    throw n.code = "MODULE_NOT_FOUND", n
                }
                e.exports = t
            }
        })
    });
var airbrake = new airbrakeJs.Client({
    projectId: "190498",
    projectKey: "aed12c66742eae2aafb7cd08f5932325",
    environment: "production"
});
airbrake.addFilter(function(e) {
    var t = ["Blocked a frame with origin", "document.getElementsByClassName.ToString is not a function"],
        n = new RegExp(t.join("|"), "i");
    try {
        for (var r = 0; r < e.errors.length; ++r)
            if (n.test(e.errors[r].message)) return null
    } catch (e) {}
    return e
}), $(document).on("blinkist:setup_params_ready", function(e, t) {
    var n = t.authenticate,
        r = function(e) {
            var t = $(e),
                n = t.data("eventCategory"),
                r = t.data("eventAction") || "fb_signup",
                i = t.data("eventDepth");
            void 0 !== i && (r = i + "-" + r), n && r && _bk_paq.trackEvent([n, r])
        },
        i = function() {
            $(function() {
                $(document).on("click", ".js-fb-authentication", function(e) {
                    if (e.preventDefault(), r(this), "undefined" != typeof FB) {
                        var t = $(this),
                            n = t.closest("form");
                        t.attr("disabled", !0), n.find("input[type=email]").val(""), n.find("input[type=password]").val(""), FB.getLoginStatus(function(e) {
                            "connected" === e.status ? ($("input[name='" + t.data("actionUrl") + "']").val(e.authResponse.accessToken), n[0].submit(), t.attr("disabled", !1)) : FB.login(function(e) {
                                e.authResponse && ($("input[name='" + t.data("actionUrl") + "']").val(e.authResponse.accessToken), n[0].submit()), t.attr("disabled", !1)
                            }, {
                                scope: "email,public_profile,user_friends"
                            })
                        })
                    }
                }), $(document).on("click", ".js-open-signup-popup", function(e) {
                    e.preventDefault(), r(e.currentTarget)
                })
            })
        };
    if (n && n.login && n.signup) {
        var o = $.extend(!0, {}, n),
            s = [o.login.params.facebook, o.login.params.blinkist, o.signup.params.facebook, o.signup.params.blinkist];
        $.each(s, function(e, t) {
            var n = [];
            $.each(t, function(e, t) {
                n.push({
                    name: e,
                    type: t.type,
                    value: t.value
                })
            }), t.fields = n
        }), o.testCategories = t.testCategories, App.authenticationData = o, $(document).trigger("blinkist:authenticate_data_ready", App.authenticationData), i()
    }
}), $(function() {
    $(".js-footer__nav-toggle").click(function() {
        var e = $(this).parent(".footer__nav-column");
        e.find(".footer__nav").toggleClass("footer__nav--open"), e.find(".footer__nav-icon").toggleClass("footer__nav-icon--open")
    })
}), $(document).on("blinkist:setup_params_ready", function(e, t) {
    if (t.guest) {
        var n = $(".footer-signup");
        if (0 !== n.length)
            if (window.helpers.isDesktopVisit()) {
                var r = n.find(".footer-signup__link");
                r.addClass("footer-signup__link--active")
            } else {
                var i = n.find(".footer-signup__install-app");
                i.addClass("footer-signup__install-app--active")
            }
    }
}), $(document).on("blinkist:promotion_banner_ready", function() {
    var e = $(".header-with-signup-button");
    if (0 !== e.length) {
        var t = e.offset().top,
            n = $(window),
            r = function() {
                var t = e.find(".header-with-signup-button__signup-button"),
                    n = e.find(".header-with-signup-button__install-app");
                window.helpers.isDesktopVisit() ? e.addClass(".header-with-signup-button__signup-button--active") : (t.remove(), n.addClass("header-with-signup-button__install-app--active"))
            },
            i = function() {
                var r = $(".js-header-container-scrollspy"),
                    i = $(".header").height(),
                    o = function() {
                        var r = n.scrollTop(),
                            i = $(".header-container__header-with-button");
                        e.toggleClass("header-with-signup-button--sticky", r > t), i.toggleClass("header-container__header-with-button--sticky", r > t), $(document).trigger("blinkist:sticky-header:" + (r > t ? "show" : "hide"))
                    },
                    s = function() {
                        var t = n.scrollTop();
                        e.toggleClass("header-with-signup-button--sticky", t > i), r.toggleClass("header-container__header-with-button--inactive", t < i), $(document).trigger("blinkist:sticky-header:" + (t > i ? "show" : "hide"))
                    };
                n.on("scroll", $.throttle(50, r.length > 0 ? s : o))
            };
        e.find(".header-with-signup-button__search-and-menu").addClass("header-with-signup-button__search-and-menu--active"), r(), i()
    }
}), $(document).on("blinkist:signup_form_rendered", function() {
    var e = $(".categories-menu-with-link__signup-form-container .signup-form");
    window.helpers.isGuestVisit() && $(".header-with-signup-button__signup-button").show(), e.length > 0 && (e.data("eventCategory", "popup-20170814-categories_menu_form"), e.find(".js-fb-authentication").data("eventCategory", "popup-20170814-categories_menu_form"))
});
var init = function() {
    if (!window.helpers.isBlinkistUserVisit() && !window.helpers.isMobileVisit()) {
        var e = {
            cookieName: "bk_l_p",
            sensitivity: 30,
            cookieExpire: 7,
            callback: function() {
                $(document).trigger("blinkist:modal:signup-popup:open", ["popup-20170306-leaving_popup", "1-show"])
            }
        };
        App.leavingPopup = ouibounce(!1, e)
    }
};
$(document).on("blinkist:signup_form_rendered", init), $(document).on("blinkist:setup_params_ready", function() {
    var e = $(".js-promotion-banner-template"),
        t = App.userSegment,
        n = (new Date).getUTCDate() + "-" + (new Date).getUTCMonth() + "1-" + (new Date).getUTCFullYear();
    if (! function() {
            return e.length > 0
        }()) return void $(document).trigger("blinkist:promotion_banner_ready");
    var r = function(t, n, r) {
            var i = e.html();
            return i = i.replace("{body}", t).replace("{link}", n).replace("{href}", r)
        },
        i = function(e, t, n) {
            e.find(".js-promotion-close").on("click", function(r) {
                r.preventDefault(), e.hide(), Cookies.set(t, !0, {
                    expires: n
                })
            })
        },
        o = function(e, t, n) {
            var r = $(e).prependTo($(".page-wrap")).show();
            _bk_paq.trackEvent(["header-20180821-promotion_banner", "1-shown", t]), i(r, t, n)
        },
        s = function(e) {
            var t = e.promotion;
            if (t) {
                var n = t.name;
                if (!Cookies.get(n)) {
                    var i = App.locale,
                        s = t["body_copy_" + i],
                        a = t["link_copy_" + i],
                        u = t["href_" + i],
                        c = r(s, a, u),
                        l = new Date(t.end),
                        d = Math.ceil((l - new Date) / 1e3 / 60 / 60 / 24) + 1;
                    o(c, n, d)
                }
            }
        };
    $.ajax({
        dataType: "json",
        url: App.webAppUrl + "/api/promotions?platform=magazine&segment=" + t + "&v=" + n,
        complete: function() {
            $(document).trigger("blinkist:promotion_banner_ready")
        },
        success: function(e) {
            try {
                s(e)
            } catch (e) {
                airbrake.notify(e)
            }
        },
        error: function(e, e, t) {
            airbrake.notify(t)
        }
    })
}), $(function() {
    $(".sharetastic").each(function() {
        var e = $(this);
        e.sharetastic({
            eventCategory: e.data("eventCategory"),
            eventDepth: e.data("eventDepth")
        })
    })
}), $(document).on("blinkist:signup_form_rendered", function() {
    $(document).on("click", ".js-password-toggle", function(e) {
        var t = $(e.currentTarget),
            n = t.prev("input[name='signup[password]']");
        "password" === n.attr("type") ? (n.attr("type", "text"), t.addClass("signup-form__password-toggle--shown")) : (n.attr("type", "password"), t.removeClass("signup-form__password-toggle--shown"))
    }), $(".signup-form__password-input").focus(function() {
        $(this).parent(".signup-form__password").addClass("signup-form__password--focus")
    }), $(".signup-form__password-input").blur(function() {
        $(this).parent(".signup-form__password").removeClass("signup-form__password--focus")
    })
}), $(function() {
    $(".js-buy-on-amazon").each(function() {
        var e = $(this),
            t = e.find(".js-featured-book-links-container"),
            n = e.parent(".js-featured-book").data("slug");
        n && ($purchaseLinkContainer = $("<a>", {
            "class": "bk-featured-book__link",
            href: App.webAppUrl + "/blinks/" + n + "/purchase",
            target: "_blank"
        }), $purchaseLinkContainer.addClass("bk-featured-book__link--buy-on-amazon"), $purchaseLinkContainer.removeClass("js-outbrain-link"), $purchaseLinkContainer.removeClass("js-desktop-signup-link"), $purchaseLinkContainer.html(e.data("buyOnAmazon")), t.append($purchaseLinkContainer))
    })
}), $(function() {
    var e = $(".js-categories-menu"),
        t = $(".js-open-categories-menu");
    if (!(e.length < 1 || t.length < 1)) {
        var n = $("body");
        $(document).on("click", ".js-open-categories-menu", function(t) {
            t.preventDefault(), e.show(), n.addClass("category-menu-active"), window.helpers.toggleLeavingPopupPaused(e), _bk_paq.trackEvent(["header-20170216-menu", "1-opened"]), e.find(".signup-form__email-input").focus()
        }), $(document).on("click", ".js-close-categories-menu", function(t) {
            t.preventDefault(), e.hide(), n.removeClass("category-menu-active"), window.helpers.toggleLeavingPopupPaused(e)
        })
    }
}), window.bk_f || (window.bk_f = {}), window.bk_f.showConversionElements = function() {
    var e = function() {
            var e = $(".js-sidebar-signup");
            window.helpers.isGuestVisit() && e.addClass("sidebar-signup--active")
        },
        t = function() {
            $(".js-footer-download").addClass("footer-download--active")
        },
        n = function() {
            window.helpers.isGuestVisit() && (window.helpers.isDesktopVisit() && e(), t(), $(".js-bk-final-cta").show())
        },
        r = function() {
            window.helpers.isPaidVisit() || $(".post__author").addClass("post__author--active")
        };
    ! function() {
        r(), n(), $(document).trigger("blinkist:conversion_elements_ready")
    }()
}, 0 === $(".js-wiki-template").length && (document.oncopy = addLinkToCopyPaste), $(function() {
    $("body").on("click", ".js-desktop-signup-link", function(e) {
        e.preventDefault();
        var t = $(e.target),
            n = t.data("eventCategory") || "body-20180115-inline_signup_button",
            r = t.data("eventAction") || "1-click";
        $(document).trigger("blinkist:modal:signup-popup:open", [n, r])
    })
});
var FeaturedBooks = FeaturedBooks || {};
FeaturedBooks.configureCtaLink = function(e) {
        var t = $(e);
        if (window.helpers.isBlinkistUserVisit()) {
            var n = t.data("in-app-url") || "";
            n.length > 0 && t.attr("href", n)
        } else window.helpers.isMobileVisit() || window.helpers.isTabletVisit() ? t.addClass("js-outbrain-link").attr("href", "https://app.adjust.io/ax87wbg_8ttqk74") : t.removeClass("js-outbrain-link").addClass("js-featured-book-signup-popup")
    }, $(document).on("blinkist:ab_test_categorized", function(e, t) {
        $(".js-featured-book-cta").each(function(e, t) {
            FeaturedBooks.configureCtaLink(t)
        }), $(document).trigger("blinkist:featured_books_ready", t)
    }), $(function() {
        var e = $(".js-header-search"),
            t = e.find(".js-header-search-desktop-input"),
            n = e.find(".js-header-search-desktop-tags"),
            r = $(".js-categories-menu");
        $(".js-header-search-icon, .js-header-search-close").on("click", function(n) {
            n.preventDefault(), e.is(":hidden") && _bk_paq.trackEvent(["header-20170216-search", "1-opened"]), e.slideToggle(100, function() {
                t.focus(), window.helpers.toggleLeavingPopupPaused(e)
            }), r.length > 0 && r.hide()
        }), t.on("keyup", function() {
            $(this).val().length > 0 ? n.slideUp(100) : n.slideDown(100)
        });
        var i = $(".js-header-search-mobile"),
            o = i.find(".js-header-search-mobile-input"),
            s = i.find(".js-header-search-mobile-tags");
        $(".js-header-search-mobile-icon, .js-header-search-mobile-close").on("click", function(e) {
            e.preventDefault(), i.toggleClass("active"), window.helpers.toggleLeavingPopupPaused(i)
        }), o.on("keyup", function() {
            $(this).val().length > 0 ? s.slideUp("fast") : s.slideDown("fast")
        })
    }), window.helpers || (window.helpers = {}), window.helpers.getAdjustUrlParams = function(e, t) {
        var n = new Url(window.location.href).query,
            r = window.location.pathname.replace("/", "").replace(".html", ""),
            i = {
                campaign: "organic",
                label: ""
            };
        switch (n.utm_source && (i.campaign = n.utm_source), i.label += (n.utm_campaign || "") + "__" + (n.utm_term || "") + "__" + (n.utm_content || "") + "__", i.label += "__" + (e.join(",") || "") + "__" + r + "__" + t, n.utm_source) {
            case "gsn":
            case "gdn":
            case "youtube":
                i.engagement_type = "fallback_click";
                break;
            case "revcontent":
                n.rc_uuid && (i.install_callback = "https://trends.revcontent.com/api/v1/conversion.php&api_key=3d3d539ab5659a4ec4f471b98422734f9b2a6830&amount=15&uuid=" + n.rc_uuid)
        }
        if (n.install_callback) switch (n.utm_source) {
            case "outbrain":
                var o = n.bk_m_id || "00ce46e18505e0daf2c8e199828ac209e6";
                i.install_callback = "https://tr.outbrain.com/pixel?ob_click_id=" + n.install_callback + "&marketerId=" + o + "&name=Install", i.event_callback_1srt0z = "https://tr.outbrain.com/pixel?ob_click_id=" + n.install_callback + "&marketerId=" + o + "&name=TrialOptIn", i.event_callback_y1824k = "https://tr.outbrain.com/pixel?ob_click_id=" + n.install_callback + "&marketerId=" + o + "&name=TrialOptIn", i.ob_click_id = n.install_callback
        }
        if (n.taboola_click_id) switch (n.utm_source) {
            case "taboola":
                i.taboola_click_id = n.taboola_click_id
        }
        return n.postbackid && (i.install_callback = "https://p1.zemanta.com/p/6349/6700/?postbackid=" + n.postbackid + "&name=Install", i.event_callback_1srt0z = "https://p1.zemanta.com/p/6349/6700/?postbackid=" + n.postbackid + "&name=TrialOptIn", i.event_callback_y1824k = "https://p1.zemanta.com/p/6349/6700/?postbackid=" + n.postbackid + "&name=TrialOptIn"), i
    }, window.helpers.addAdjustButtonCode = function(e, t) {
        e instanceof Url || (e = new Url(e));
        var n = e.query.label;
        return n = n ? n.split("__") : [null, null, null, null, null, null, null], n[3] = t, e.query.label = n.join("__"), e.toString()
    }, window.helpers || (window.helpers = {}), window.helpers.isBasicVisit = function() {
        new Url(window.location.href).query;
        return "basic" === App.userSegment || "trial" === App.userSegment
    }, window.helpers || (window.helpers = {}), window.helpers.changeUrlParam = function(e, t, n) {
        return e instanceof Url || (e = new Url(e)), e.query[t] = n, e.toString()
    }, window.helpers.generateSharingUrl = function(e, t) {
        t instanceof Url || (t = new Url(t));
        var n = t.query.utm_source || "",
            r = e.data("utmSourceSuffix") || "",
            i = n + r;
        return i ? window.helpers.changeUrlParam(t, "utm_source", i) : t.toString()
    }, window.helpers || (window.helpers = {}), window.helpers.delayUI = function(e) {
        e = void 0 !== e ? e : 500;
        var t = new Date,
            n = t.getTime() + e;
        do {
            t = new Date
        } while (t.getTimeAlias() < n)
    }, window.helpers || (window.helpers = {}), window.helpers.getAbtests = function(e) {
        var t = $(e);
        if (t.length < 1) return [];
        var n = window.helpers.deviceType(),
            r = t.filter(function() {
                var e = $(this),
                    t = e.data("platform");
                return !t || t.indexOf(n) > -1
            }).filter(function() {
                var e = $(this),
                    t = e.data("language"),
                    n = App.locale || "en";
                return !t || n === t
            }).filter(function() {
                var e = $(this),
                    t = e.data("bookList"),
                    n = void 0 !== t,
                    r = $(".js-featured-book").length > 0;
                return !n || t === r
            }).filter(function() {
                var e = $(this).data("traffic"),
                    t = window.helpers.isPaidVisit();
                return !("paid" === e && !t) && ("organic" !== e || !t)
            }).map(function() {
                return $(this).data("name")
            });
        if (0 === r.length) return [];
        $.unique(r);
        var i, o = Math.floor(Math.random() * r.length),
            s = r[o],
            a = {},
            u = $(e + "[data-name='" + s + "']").map(function(e, t) {
                var n = $(t),
                    r = n.data("variation"),
                    i = parseFloat(n.data("weight"));
                return a[r] = i, r
            });
        if (!0 === App.forceAb) {
            var c = new Url(window.location.href).query,
                l = c.ab;
            if (l) {
                var d = l.split("-"),
                    f = d.pop();
                d.join("-") === s && -1 !== $.inArray(f, u) && (i = f)
            }
        }
        return i === undefined && (i = window.helpers.weightedRandom(a)), [s + "-" + i]
    }, window.helpers || (window.helpers = {}), window.helpers.isGuestVisit = function() {
        return "crm" !== new Url(window.location.href).query.utm_medium && "anonymous" === App.userSegment
    }, window.helpers.isBlinkistUserVisit = function() {
        return !window.helpers.isGuestVisit()
    }, window.helpers || (window.helpers = {}), window.helpers.formatNumber = function(e, t, n, r) {
        t = isNaN(t) ? 2 : Math.abs(t), n = n === undefined ? "." : n, r = r === undefined ? "," : r;
        var i = e < 0 ? "-" : "";
        e = Math.abs(+e || 0);
        var o = parseInt(e.toFixed(t), 10) + "",
            s = o.length > 3 ? o.length % 3 : 0;
        return i + (s ? o.substr(0, s) + r : "") + o.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + r) + (t ? n + Math.abs(e - o).toFixed(t).slice(2) : "")
    }, window.helpers.humanizeNumber = function(e, t, n, r, i, o, s, a) {
        var u, c;
        t = t || ["", "K", "M", "B", "T"], c = t.length - 1, n = n || 1e3, r = isNaN(r) ? 2 : Math.abs(r), i = i || ".", o = o || ",", s = s || "";
        for (var l = 0; l < t.length; l++)
            if (e < Math.pow(n, l + 1)) {
                c = l;
                break
            } u = e / Math.pow(n, c);
        var d = t[c] ? s + t[c] : "",
            f = window.helpers.formatNumber(u, r, i, o);
        if (a) {
            for (var p = []; p.length < r;) p.push("0");
            var h = p.join("");
            f = f.toString().replace(i + h, "")
        }
        return f + d
    }, window.helpers.humanizeNumberWithSeparator = function(e) {
        return "de" === App.locale ? e.toLocaleString("de-DE") : helpers.humanizeNumber(e, null, null, 1, ",", "", null, !0)
    }, window.helpers.truncateChars = function(e, t) {
        return e.length <= t ? e : e.substr(0, t) + "\u2026"
    },
    function() {
        window.helpers || (window.helpers = {});
        var e = new UAParser,
            t = e.getDevice().type;
        window.helpers.deviceType = function() {
            return window.helpers.isDesktopVisit() ? "desktop" : t
        }, window.helpers.isMobileVisit = function() {
            return "mobile" === t
        }, window.helpers.isTabletVisit = function() {
            return "tablet" === t
        }, window.helpers.isDesktopVisit = function() {
            return "tablet" !== t && "mobile" !== t
        }
    }(), window.helpers = window.helpers || {}, window.helpers.toggleLeavingPopupPaused = function(e) {
        null != App.leavingPopup && (e.is(":visible") ? App.leavingPopup.pause() : App.leavingPopup.unpause())
    },
    function() {
        window.helpers || (window.helpers = {}), "paid" === new Url(window.location.href).query.utm_medium && Cookies.set("bk_p_t", 1, {
            domain: App.cookieDomain,
            expires: 30,
            path: "/magazine"
        }), window.helpers.isPaidVisit = function() {
            return Cookies.get("bk_p_t")
        }
    }(), window.helpers || (window.helpers = {}), window.helpers.setupAbtests = function(e) {
        var t, n = [],
            r = "bk_m_ab",
            i = function(e, n) {
                var i = e.lastIndexOf("-");
                t = e.substring(0, i);
                var o = e.substring(i + 1);
                return n && Cookies.set(r, e, {
                    domain: App.cookieDomain,
                    expires: 30,
                    path: "/"
                }), $(".bk-content-ab[data-variation='" + o + "'][data-name='" + t + "']").show(), e
            },
            o = function(e, t) {
                var n = s(t);
                return document.querySelector("[data-name=" + n + "]")
            },
            s = function(e) {
                return e.substring(0, e.lastIndexOf("-"))
            };
        if (window.helpers.isGuestVisit()) {
            var a = App.content_abtests.length > 0 ? App.content_abtests : App.layout_abtests,
                u = Cookies.get(r);
            u && o(a, u) ? n.push(i(u, !1)) : (a.forEach(function(e) {
                var t = i(e, !0);
                n.push(t)
            }), $(document).trigger("blinkist:ab_test:set_cookie", {
                testCategories: a,
                fingerprint: e.fingerprint,
                authToken: e.authenticity_token
            }));
            $("body").addClass(n.join(" "))
        }
        return window.helpers.showContentAbtestsControlVariations(t), App.testCategories = n, $(document).trigger("blinkist:ab_test_categorized:init", {
            testCategories: n,
            fingerprint: e.fingerprint
        }), n
    }, window.helpers || (window.helpers = {}), window.helpers.showContentAbtestsControlVariations = function(e) {
        var t = $(".bk-content-ab").map(function() {
            return $(this).data("name")
        });
        $.unique(t);
        var n = $(t).not([e]).get();
        $.each(n, function(e, t) {
            $(".bk-content-ab[data-control='true'][data-name='" + t + "']").show()
        })
    }, $(document).on("blinkist:signup_form_rendered", function() {
        window.helpers || (window.helpers = {});
        var e = $(".js-signup-popup");
        window.helpers.showSignupPopup = function(t, n) {
            if (!($(".signup-popup--active").length > 0)) {
                if (n && (e = $(n)), e.addClass("signup-popup--active"), App.leavingPopup && App.leavingPopup.pause(), t) {
                    _bk_paq.trackEvent(t);
                    var r = t[0];
                    e.data("eventCategory", r), e.find(".js-fb-authentication").data("eventCategory", r), $(".js-form-id").val(r)
                }
                e.find(".signup-form__email-input").focus()
            }
        }, window.helpers.hideSignupPopup = function() {
            e.removeClass("signup-popup--active"), App.leavingPopup && App.leavingPopup.unpause();
            var t = [];
            t.push(e.data("eventCategory")), t.push("2-close"), _bk_paq.trackEvent(t), e = $(".js-signup-popup")
        }
    }), window.helpers || (window.helpers = {}), window.helpers.trackPiwikPageview = function(e) {
        var t = e.fingerprint,
            n = e.isGuest,
            r = e.testCategories;
        r instanceof Array && r.length && _paq.push(["setCustomVariable", 4, "AbTests", r.join(","), "page"]), _paq.push([function() {
            this.appendToTrackingUrl("bk_u_g=" + (n ? 1 : 0) + "&bk_c_n=" + t + "&bk_u_s=" + e.segment)
        }]), Cookiebot.consent.statistics && (_bk_paq.turnProxyOn(), _paq.push(["trackPageView"]))
    }, window.helpers || (window.helpers = {}), window.helpers.weightedRandom = function(e) {
        var t = Object.keys(e).reduce(function(t, n) {
                return t + (e[n] || 0)
            }, 0),
            n = Object.keys(e).reduce(function(t, n) {
                return e[n] ? t : t + 1
            }, 0),
            r = (1 - t) / n;
        Object.keys(e).forEach(function(t) {
            e[t] || (e[t] = r)
        });
        var i, o = Math.random(),
            s = 0;
        return Object.keys(e).forEach(function(t) {
            i || (s += e[t]) >= o && (i = t)
        }), i
    }, $(document).ready(function() {
        var e = $(".js-keep-reading");
        if (0 != e.length) {
            var t = e.data("keepReadingPath"),
                n = {};
            window.helpers.isPaidVisit() && (n.utm_medium = "paid"), $.ajax({
                url: t,
                data: n,
                dataType: "html"
            }).done(function(t) {
                e.html(t), $(document).trigger("blinkist:dynamic_content_rendered")
            })
        }
    }), $(function() {
        var e = new LazyLoad({
            elements_selector: "[data-src], [data-srcset]"
        });
        $(document).on("blinkist:dynamic_content_rendered", function() {
            e.update()
        })
    }), $(function() {
        var e = $(".js-load-more-posts"),
            t = $(".js-page-posts");
        e.length < 1 || e.on("click", function(n) {
            n.preventDefault(), $.ajax({
                dataType: "json",
                url: t.data("path"),
                data: {
                    offset: $(".post-block-1-3").length
                },
                complete: function() {
                    $(document).trigger("blinkist:dynamic_content_rendered")
                },
                success: function(n) {
                    t.find(".posts").append(n.posts), $(".post-block-1-3").length == n.total_count && e.remove()
                }
            })
        })
    }), $(document).on("blinkist:setup_params_ready", function() {
        if (window.helpers.isGuestVisit()) $(".try-out-blinkist__button").addClass("try-out-blinkist__button--active").click(function(e) {
            if (window.helpers.isDesktopVisit()) {
                var t = $(".post-footer-container__footer-signup");
                0 !== t.length && t.is(":visible") || (e.preventDefault(), e.stopPropagation(), $(document).trigger("blinkist:modal:signup-popup:open", ["footer-20171030-try_out_button", "1-click"]))
            }
        }), $(".categories-menu-with-link__get-the-app").addClass("categories-menu-with-link__get-the-app--active");
        else {
            var e = ["#signup-form", ".signup-form", ".sidebar-signup", ".post__footer"];
            $(e.join(",")).remove()
        }
    }), $(document).on("blinkist:featured_books_ready", function(e, t) {
        var n, r = window.helpers.getAdjustUrlParams(t.testCategories, t.fingerprint),
            i = $(".js-outbrain-link");
        i.each(function() {
            var e = $(this),
                t = $.param(r),
                i = e.attr("href");
            n = i + "?" + t, n = window.helpers.addAdjustButtonCode(n, e.data("buttonCode") || "body-20170301-fallback_adjust_link"), e.attr("href", n)
        }), window.helpers.isBlinkistUserVisit() ? i.remove() : window.helpers.isDesktopVisit() ? (i.removeClass("js-outbrain-link"), i.addClass("js-desktop-signup-link")) : i.removeClass("js-desktop-signup-link")
    }), $(function() {
        if (!($(".wiki-page").length > 0)) {
            var e = $("p");
            0 !== e.length && e.selectionSharer({
                onTweet: function() {
                    _bk_paq.trackEvent(["body-20170216-select_and_share", "1-tw_share"])
                },
                onMail: function() {
                    _bk_paq.trackEvent(["body-20170216-select_and_share", "1-email_share"])
                },
                onFb: function() {
                    _bk_paq.trackEvent(["body-20170216-select_and_share", "1-fb_share"])
                }
            })
        }
    }),
    function() {
        var e = function(e) {
                "undefined" == typeof dataLayer && (dataLayer = []), dataLayer.push({
                    event: "got_user_segment",
                    segments: e.segment
                })
            },
            t = function(e) {
                if ("undefined" != typeof document.referrer && document.referrer.length > 0) {
                    var t = document.referrer.split("?");
                    e.referrer_url = encodeURI(t[0])
                }
                return e
            },
            n = new Url(window.location.href),
            r = n.query;
        0 != window.location.search.length || document.cookie.replace(/(?:(?:^|.*;s*)blinkist_utm_sources*=s*([^;]*).*$)|^.*$/, "$1") || (r = {
            utm_source: "magazine_organic"
        }, document.cookie = "blinkist_utm_source=magazine_organic"), r.pathname = window.location.pathname, r = t(r), $.ajax({
            url: App.webAppSetupUrl,
            data: r,
            method: "get",
            dataType: "json",
            xhrFields: {
                withCredentials: !0
            }
        }).done(function(t) {
            $(function() {
                e(t), App.userSegment = t.segment, App.content_abtests = window.helpers.getAbtests(".bk-content-ab"), App.layout_abtests = window.helpers.getAbtests(".bk-layout-ab"), t.testCategories = window.helpers.setupAbtests(t), $(document).trigger("blinkist:setup_params_ready", t), $("body").addClass("setup-ready")
            })
        }).fail(function() {})
    }(), $(function() {
        $("body").on("click", ".js-fb-share-button", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.data("eventCategory"),
                r = t.data("eventDepth"),
                i = r + "-fb_share";
            _bk_paq.trackEvent([n, i]);
            var o = window.helpers.generateSharingUrl(t, window.location.href),
                s = "//www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(o);
            window.open(s, "facebook", "width=550,height=420")
        })
    }), $(function() {
        $("body").on("click", ".js-google-plus-share-button", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.data("eventCategory"),
                r = t.data("eventDepth"),
                i = r + "-google_share";
            _bk_paq.trackEvent([n, i]);
            var o = window.helpers.generateSharingUrl(t, window.location.href),
                s = "https://plus.google.com/share?url=" + encodeURI(o);
            window.open(s, "Google+", "width=550,height=420")
        })
    }), $(function() {
        $("body").on("click", ".js-linkedin-share-button", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.data("eventCategory"),
                r = t.data("eventDepth"),
                i = r + "-linkedin_share";
            _bk_paq.trackEvent([n, i]);
            var o = window.helpers.generateSharingUrl(t, window.location.href),
                s = "https://www.linkedin.com/cws/share?url=" + encodeURI(o);
            window.open(s, "linkedin", "width=550,height=420")
        })
    }), $(function() {
        $("body").on("click", ".js-tw-share-button", function(e) {
            e.preventDefault();
            var t = $(this),
                n = t.data("message") || $("meta[property='og:title']").attr("content") || "",
                r = window.helpers.generateSharingUrl(t, t.data("url") || window.location.href),
                i = t.data("eventCategory"),
                o = t.data("eventDepth"),
                s = o + "-tw_share";
            _bk_paq.trackEvent([i, s]), n && n.length > 103 && (n = n.slice(0, 102), n += "..."), n = encodeURIComponent(n);
            var a = "//twitter.com/intent/tweet?text=" + n;
            t.data("disable-link-sharing") || (a += "&url=" + encodeURIComponent(r)), window.open(a, "twitter", "width=550,height=420")
        })
    }), $(document).on("blinkist:authenticate_data_ready", function(e, t) {
        t !== undefined && $.ajax({
            dataType: "html",
            url: "/magazine/nc/signup/forms",
            method: "GET",
            data: {
                locale: App.locale,
                signup: t.signup,
                test_category: t.testCategories[0]
            },
            xhrFields: {
                withCredentials: !0
            },
            success: function(e) {
                var t = $(e),
                    n = t.find(".signup-form-template").html();
                $(".js-signup-form").html(n), $(document).trigger("blinkist:signup_form_rendered", n), $("[data-user-segment*='" + App.userSegment + "']").removeAttr("data-user-segment"), window.bk_f.showConversionElements()
            }
        })
    }), $(document).on("submit", "form", function() {
        var e = $(this),
            t = e.data("eventCategory"),
            n = e.data("eventAction") || "email_signup";
        return n = e.data("eventDepth") + "-" + n, t && _bk_paq.trackEvent([t, n]), !0
    }), $(function() {
        var e, t = $(".js-sticky-side-sharing-buttons"),
            n = ".post__body, .post-simplified__body",
            r = $(window),
            i = function() {
                r.scrollTop() > e.offset().top && r.scrollTop() < e.offset().top + e.height() - r.height() / 2 - 100 ? t.addClass("sticky-side-sharing-buttons--visible") : t.removeClass("sticky-side-sharing-buttons--visible")
            };
        $(document).on("blinkist:ab_test_categorized", function() {
            e = $(n), t.length < 1 || e.length < 1 || r.on("scroll", $.throttle(250, i))
        })
    }), $(function() {
        $("body").on("click", "a", function() {
            var e = $(this).data("tracking-attr");
            e && !$(this).prop("disabled") && ("undefined" == typeof dataLayer && (dataLayer = []), dataLayer.push({
                event: "clicked_link",
                trackingIdentifier: e
            }), _paq && _bk_paq.trackEvent(["Link", "Click", e]))
        })
    }),
    function() {
        var e = $.Deferred(),
            t = $.Deferred();
        $(document).on("blinkist:setup_params_ready", function(t, n) {
            App.setup_params = n, e.resolve()
        }), $(document).on("blinkist:cookiebot:accept", function() {
            t.resolve()
        }), $.when(e, t).done(function() {
            window.helpers.trackPiwikPageview(App.setup_params)
        })
    }(), $(document).on("blinkist:ab_test:set_cookie", function(e, t) {
        try {
            if (0 === t.testCategories.length) return;
            var n = t.testCategories[0];
            n.split("-", 3).join("-");
            $.ajax({
                type: "POST",
                url: App.webAppUrl + "/api/events",
                dataType: "json",
                beforeSend: function(e) {
                    e.setRequestHeader("X-CSRF-Token", t.authToken)
                },
                xhrFields: {
                    withCredentials: !0
                },
                data: {
                    event: {
                        category: "magazine",
                        action: "ab_test_categorized",
                        version: "20201021",
                        custom_variables: {
                            test_category: n
                        }
                    }
                },
                error: function(e, e, t) {
                    airbrake.notify(t)
                }
            })
        } catch (e) {
            airbrake.notify(e)
        }
    }), $(document).on("blinkist:conversion_elements_ready", function() {
        var e = $(".post__body");
        if (0 !== e.length) {
            var t = new Date,
                n = !1,
                r = !1,
                i = !1,
                o = $(window),
                s = e.offset().top + e.innerHeight(),
                a = s / 2,
                u = $(document).height() - o.height() - 50,
                c = function() {
                    return Math.round((new Date - t) / 1e3)
                };
            o.on("scroll", $.throttle(100, function() {
                !n && o.scrollTop() > a && (_bk_paq.trackEvent(["body-20170507-content_interaction", "1-scrolled_to_half", c()]), n = !0), !r && o.scrollTop() > s && (_bk_paq.trackEvent(["body-20170507-content_interaction", "2-scrolled_to_end", c()]), r = !0), !i && o.scrollTop() > u && (_bk_paq.trackEvent(["body-20170627-content_interaction", "3-scrolled_to_bottom", c()]), i = !0)
            }))
        }
    }), $(document).on("click", ".js-outbrain-link", function() {
        var e = $(this),
            t = e.data("eventCategory") || "body-20170216-fallback_signup_button",
            n = e.data("eventAction") || "click";
        n = (e.data("eventDepth") || "1") + "-" + n;
        var r = [t, n],
            i = e.data("eventName");
        i && r.push(i), r.length > 1 && (_bk_paq.trackEvent(r), window.helpers.delayUI())
    }), $(document).on("blinkist:conversion_elements_ready", function() {
        function e() {
            var e = document.createElement("script");
            e.src = "https://www.youtube.com/iframe_api";
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        var t = "body-20171020-youtube_video";
        window.onYouTubeIframeAPIReady = function() {
            $(".bk-youtube-video").each(function(e) {
                var n = $(this),
                    r = !0;
                n.attr("id", "bk-video-" + e), n.player = new YT.Player(n.attr("id"), {
                    host: "https://www.youtube.com",
                    videoId: n.data("id"),
                    events: {
                        onStateChange: function(e) {
                            var n = e.target,
                                i = n.getDuration(),
                                o = Math.round(n.getCurrentTime()),
                                s = n.getVideoData().video_id;
                            switch (e.data) {
                                case YT.PlayerState.PLAYING:
                                    0 === o && _bk_paq.trackEvent([t, "1-video_started", s]), r && o >= i / 2 && (r = !1, _bk_paq.trackEvent([t, "2-watched_half", s]));
                                    break;
                                case YT.PlayerState.ENDED:
                                    _bk_paq.trackEvent([t, "3-video_finished", s])
                            }
                        }
                    }
                })
            })
        };
        var n = $(".bk-youtube-video");
        n.length > 0 && (n.wrap('<div class="youtube-video-wrapper"></div>'), e())
    });