
    !(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    var n = [],
        i = Object.getPrototypeOf,
        r = n.slice,
        o = n.flat
            ? function (e) {
                  return n.flat.call(e);
              }
            : function (e) {
                  return n.concat.apply([], e);
              },
        a = n.push,
        s = n.indexOf,
        l = {},
        u = l.toString,
        c = l.hasOwnProperty,
        f = c.toString,
        d = f.call(Object),
        h = {},
        p = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        m = function (e) {
            return null != e && e === e.window;
        },
        g = e.document,
        v = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function y(e, t, n) {
        var i,
            r,
            o = (n = n || g).createElement("script");
        if (((o.text = e), t)) for (i in v) (r = t[i] || (t.getAttribute && t.getAttribute(i))) && o.setAttribute(i, r);
        n.head.appendChild(o).parentNode.removeChild(o);
    }
    function b(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[u.call(e)] || "object" : typeof e;
    }
    var _ = "3.5.1",
        w = function (e, t) {
            return new w.fn.init(e, t);
        };
    function E(e) {
        var t = !!e && "length" in e && e.length,
            n = b(e);
        return !p(e) && !m(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (w.fn = w.prototype = {
        jquery: _,
        constructor: w,
        length: 0,
        toArray: function () {
            return r.call(this);
        },
        get: function (e) {
            return null == e ? r.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            var t = w.merge(this.constructor(), e);
            return (t.prevObject = this), t;
        },
        each: function (e) {
            return w.each(this, e);
        },
        map: function (e) {
            return this.pushStack(
                w.map(this, function (t, n) {
                    return e.call(t, n, t);
                })
            );
        },
        slice: function () {
            return this.pushStack(r.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                w.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: a,
        sort: n.sort,
        splice: n.splice,
    }),
        (w.extend = w.fn.extend = function () {
            var e,
                t,
                n,
                i,
                r,
                o,
                a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                u = !1;
            for ("boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++), "object" == typeof a || p(a) || (a = {}), s === l && ((a = this), s--); s < l; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (i = e[t]),
                            "__proto__" !== t &&
                                a !== i &&
                                (u && i && (w.isPlainObject(i) || (r = Array.isArray(i)))
                                    ? ((n = a[t]), (o = r && !Array.isArray(n) ? [] : r || w.isPlainObject(n) ? n : {}), (r = !1), (a[t] = w.extend(u, o, i)))
                                    : void 0 !== i && (a[t] = i));
            return a;
        }),
        w.extend({
            expando: "jQuery" + (_ + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                var t, n;
                return !(!e || "[object Object]" !== u.call(e) || ((t = i(e)) && ("function" != typeof (n = c.call(t, "constructor") && t.constructor) || f.call(n) !== d)));
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, n) {
                y(e, { nonce: t && t.nonce }, n);
            },
            each: function (e, t) {
                var n,
                    i = 0;
                if (E(e)) for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
                else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
                return e;
            },
            makeArray: function (e, t) {
                var n = t || [];
                return null != e && (E(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : a.call(n, e)), n;
            },
            inArray: function (e, t, n) {
                return null == t ? -1 : s.call(t, e, n);
            },
            merge: function (e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
                return (e.length = r), e;
            },
            grep: function (e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) !== a && i.push(e[r]);
                return i;
            },
            map: function (e, t, n) {
                var i,
                    r,
                    a = 0,
                    s = [];
                if (E(e)) for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
                else for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
                return o(s);
            },
            guid: 1,
            support: h,
        }),
        "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
        w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            l["[object " + t + "]"] = t.toLowerCase();
        });
    var x = (function (e) {
        var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            h,
            p,
            m,
            g,
            v,
            y,
            b,
            _ = "sizzle" + 1 * new Date(),
            w = e.document,
            E = 0,
            x = 0,
            T = le(),
            C = le(),
            S = le(),
            k = le(),
            A = function (e, t) {
                return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            D = [],
            j = D.pop,
            L = D.push,
            O = D.push,
            I = D.slice,
            q = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
                return -1;
            },
            P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            M = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
            F = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
            B = new RegExp(H + "+", "g"),
            W = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            U = new RegExp("^" + H + "*," + H + "*"),
            Q = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            $ = new RegExp(H + "|>"),
            z = new RegExp(F),
            V = new RegExp("^" + R + "$"),
            X = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + M),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + P + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
            },
            Y = /HTML$/i,
            K = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
            },
            ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            re = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            oe = function () {
                d();
            },
            ae = _e(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            O.apply((D = I.call(w.childNodes)), w.childNodes), D[w.childNodes.length].nodeType;
        } catch (t) {
            O = {
                apply: D.length
                    ? function (e, t) {
                          L.apply(e, I.call(t));
                      }
                    : function (e, t) {
                          for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                          e.length = n - 1;
                      },
            };
        }
        function se(e, t, i, r) {
            var o,
                s,
                u,
                c,
                f,
                p,
                v,
                y = t && t.ownerDocument,
                w = t ? t.nodeType : 9;
            if (((i = i || []), "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))) return i;
            if (!r && (d(t), (t = t || h), m)) {
                if (11 !== w && (f = Z.exec(e)))
                    if ((o = f[1])) {
                        if (9 === w) {
                            if (!(u = t.getElementById(o))) return i;
                            if (u.id === o) return i.push(u), i;
                        } else if (y && (u = y.getElementById(o)) && b(t, u) && u.id === o) return i.push(u), i;
                    } else {
                        if (f[2]) return O.apply(i, t.getElementsByTagName(e)), i;
                        if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName) return O.apply(i, t.getElementsByClassName(o)), i;
                    }
                if (n.qsa && !k[e + " "] && (!g || !g.test(e)) && (1 !== w || "object" !== t.nodeName.toLowerCase())) {
                    if (((v = e), (y = t), 1 === w && ($.test(e) || Q.test(e)))) {
                        for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((c = t.getAttribute("id")) ? (c = c.replace(ie, re)) : t.setAttribute("id", (c = _))), s = (p = a(e)).length; s--; )
                            p[s] = (c ? "#" + c : ":scope") + " " + be(p[s]);
                        v = p.join(",");
                    }
                    try {
                        return O.apply(i, y.querySelectorAll(v)), i;
                    } catch (t) {
                        k(e, !0);
                    } finally {
                        c === _ && t.removeAttribute("id");
                    }
                }
            }
            return l(e.replace(W, "$1"), t, i, r);
        }
        function le() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > i.cacheLength && delete t[e.shift()], (t[n + " "] = r);
            };
        }
        function ue(e) {
            return (e[_] = !0), e;
        }
        function ce(e) {
            var t = h.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function fe(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) i.attrHandle[n[r]] = t;
        }
        function de(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function he(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function me(e) {
            return function (t) {
                return "form" in t
                    ? t.parentNode && !1 === t.disabled
                        ? "label" in t
                            ? "label" in t.parentNode
                                ? t.parentNode.disabled === e
                                : t.disabled === e
                            : t.isDisabled === e || (t.isDisabled !== !e && ae(t) === e)
                        : t.disabled === e
                    : "label" in t && t.disabled === e;
            };
        }
        function ge(e) {
            return ue(function (t) {
                return (
                    (t = +t),
                    ue(function (n, i) {
                        for (var r, o = e([], n.length, t), a = o.length; a--; ) n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
                    })
                );
            });
        }
        function ve(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (t in ((n = se.support = {}),
        (o = se.isXML = function (e) {
            var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
            return !Y.test(t || (n && n.nodeName) || "HTML");
        }),
        (d = se.setDocument = function (e) {
            var t,
                r,
                a = e ? e.ownerDocument || e : w;
            return (
                a != h &&
                    9 === a.nodeType &&
                    a.documentElement &&
                    ((p = (h = a).documentElement),
                    (m = !o(h)),
                    w != h && (r = h.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", oe, !1) : r.attachEvent && r.attachEvent("onunload", oe)),
                    (n.scope = ce(function (e) {
                        return p.appendChild(e).appendChild(h.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (n.attributes = ce(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (n.getElementsByTagName = ce(function (e) {
                        return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (n.getElementsByClassName = J.test(h.getElementsByClassName)),
                    (n.getById = ce(function (e) {
                        return (p.appendChild(e).id = _), !h.getElementsByName || !h.getElementsByName(_).length;
                    })),
                    n.getById
                        ? ((i.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (i.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && m) {
                                  var n = t.getElementById(e);
                                  return n ? [n] : [];
                              }
                          }))
                        : ((i.filter.ID = function (e) {
                              var t = e.replace(te, ne);
                              return function (e) {
                                  var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return n && n.value === t;
                              };
                          }),
                          (i.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && m) {
                                  var n,
                                      i,
                                      r,
                                      o = t.getElementById(e);
                                  if (o) {
                                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                      for (r = t.getElementsByName(e), i = 0; (o = r[i++]); ) if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                                  }
                                  return [];
                              }
                          })),
                    (i.find.TAG = n.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var n,
                                  i = [],
                                  r = 0,
                                  o = t.getElementsByTagName(e);
                              if ("*" === e) {
                                  for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                                  return i;
                              }
                              return o;
                          }),
                    (i.find.CLASS =
                        n.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
                        }),
                    (v = []),
                    (g = []),
                    (n.qsa = J.test(h.querySelectorAll)) &&
                        (ce(function (e) {
                            var t;
                            (p.appendChild(e).innerHTML = "<a id='" + _ + "'></a><select id='" + _ + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + P + ")"),
                                e.querySelectorAll("[id~=" + _ + "-]").length || g.push("~="),
                                (t = h.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || g.push(":checked"),
                                e.querySelectorAll("a#" + _ + "+*").length || g.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                g.push("[\\r\\n\\f]");
                        }),
                        ce(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = h.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                (p.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                g.push(",.*:");
                        })),
                    (n.matchesSelector = J.test((y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector))) &&
                        ce(function (e) {
                            (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", F);
                        }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (v = v.length && new RegExp(v.join("|"))),
                    (t = J.test(p.compareDocumentPosition)),
                    (b =
                        t || J.test(p.contains)
                            ? function (e, t) {
                                  var n = 9 === e.nodeType ? e.documentElement : e,
                                      i = t && t.parentNode;
                                  return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (A = t
                        ? function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  i ||
                                  (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === i)
                                      ? e == h || (e.ownerDocument == w && b(w, e))
                                          ? -1
                                          : t == h || (t.ownerDocument == w && b(w, t))
                                          ? 1
                                          : c
                                          ? q(c, e) - q(c, t)
                                          : 0
                                      : 4 & i
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (f = !0), 0;
                              var n,
                                  i = 0,
                                  r = e.parentNode,
                                  o = t.parentNode,
                                  a = [e],
                                  s = [t];
                              if (!r || !o) return e == h ? -1 : t == h ? 1 : r ? -1 : o ? 1 : c ? q(c, e) - q(c, t) : 0;
                              if (r === o) return de(e, t);
                              for (n = e; (n = n.parentNode); ) a.unshift(n);
                              for (n = t; (n = n.parentNode); ) s.unshift(n);
                              for (; a[i] === s[i]; ) i++;
                              return i ? de(a[i], s[i]) : a[i] == w ? -1 : s[i] == w ? 1 : 0;
                          })),
                h
            );
        }),
        (se.matches = function (e, t) {
            return se(e, null, null, t);
        }),
        (se.matchesSelector = function (e, t) {
            if ((d(e), n.matchesSelector && m && !k[t + " "] && (!v || !v.test(t)) && (!g || !g.test(t))))
                try {
                    var i = y.call(e, t);
                    if (i || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                } catch (e) {
                    k(t, !0);
                }
            return 0 < se(t, h, null, [e]).length;
        }),
        (se.contains = function (e, t) {
            return (e.ownerDocument || e) != h && d(e), b(e, t);
        }),
        (se.attr = function (e, t) {
            (e.ownerDocument || e) != h && d(e);
            var r = i.attrHandle[t.toLowerCase()],
                o = r && N.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
            return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }),
        (se.escape = function (e) {
            return (e + "").replace(ie, re);
        }),
        (se.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (se.uniqueSort = function (e) {
            var t,
                i = [],
                r = 0,
                o = 0;
            if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(A), f)) {
                for (; (t = e[o++]); ) t === e[o] && (r = i.push(o));
                for (; r--; ) e.splice(i[r], 1);
            }
            return (c = null), e;
        }),
        (r = se.getText = function (e) {
            var t,
                n = "",
                i = 0,
                o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += r(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += r(t);
            return n;
        }),
        ((i = se.selectors = {
            cacheLength: 50,
            createPseudo: ue,
            match: X,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        n = !e[6] && e[2];
                    return X.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : n && z.test(n) && (t = a(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(te, ne).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = T[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                            T(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (e, t, n) {
                    return function (i) {
                        var r = se.attr(i, e);
                        return null == r
                            ? "!=" === t
                            : !t ||
                                  ((r += ""),
                                  "=" === t
                                      ? r === n
                                      : "!=" === t
                                      ? r !== n
                                      : "^=" === t
                                      ? n && 0 === r.indexOf(n)
                                      : "*=" === t
                                      ? n && -1 < r.indexOf(n)
                                      : "$=" === t
                                      ? n && r.slice(-n.length) === n
                                      : "~=" === t
                                      ? -1 < (" " + r.replace(B, " ") + " ").indexOf(n)
                                      : "|=" === t && (r === n || r.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        s = "of-type" === t;
                    return 1 === i && 0 === r
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (t, n, l) {
                              var u,
                                  c,
                                  f,
                                  d,
                                  h,
                                  p,
                                  m = o !== a ? "nextSibling" : "previousSibling",
                                  g = t.parentNode,
                                  v = s && t.nodeName.toLowerCase(),
                                  y = !l && !s,
                                  b = !1;
                              if (g) {
                                  if (o) {
                                      for (; m; ) {
                                          for (d = t; (d = d[m]); ) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                          p = m = "only" === e && !p && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((p = [a ? g.firstChild : g.lastChild]), a && y)) {
                                      for (
                                          b = (h = (u = (c = (f = (d = g)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]) && u[2], d = h && g.childNodes[h];
                                          (d = (++h && d && d[m]) || (b = h = 0) || p.pop());

                                      )
                                          if (1 === d.nodeType && ++b && d === t) {
                                              c[e] = [E, h, b];
                                              break;
                                          }
                                  } else if ((y && (b = h = (u = (c = (f = (d = t)[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === E && u[1]), !1 === b))
                                      for (
                                          ;
                                          (d = (++h && d && d[m]) || (b = h = 0) || p.pop()) &&
                                          ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && ((c = (f = d[_] || (d[_] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] = [E, b]), d !== t));

                                      );
                                  return (b -= r) === i || (b % i == 0 && 0 <= b / i);
                              }
                          };
                },
                PSEUDO: function (e, t) {
                    var n,
                        r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                    return r[_]
                        ? r(t)
                        : 1 < r.length
                        ? ((n = [e, e, "", t]),
                          i.setFilters.hasOwnProperty(e.toLowerCase())
                              ? ue(function (e, n) {
                                    for (var i, o = r(e, t), a = o.length; a--; ) e[(i = q(e, o[a]))] = !(n[i] = o[a]);
                                })
                              : function (e) {
                                    return r(e, 0, n);
                                })
                        : r;
                },
            },
            pseudos: {
                not: ue(function (e) {
                    var t = [],
                        n = [],
                        i = s(e.replace(W, "$1"));
                    return i[_]
                        ? ue(function (e, t, n, r) {
                              for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                          })
                        : function (e, r, o) {
                              return (t[0] = e), i(t, null, o, n), (t[0] = null), !n.pop();
                          };
                }),
                has: ue(function (e) {
                    return function (t) {
                        return 0 < se(e, t).length;
                    };
                }),
                contains: ue(function (e) {
                    return (
                        (e = e.replace(te, ne)),
                        function (t) {
                            return -1 < (t.textContent || r(t)).indexOf(e);
                        }
                    );
                }),
                lang: ue(function (e) {
                    return (
                        V.test(e || "") || se.error("unsupported lang: " + e),
                        (e = e.replace(te, ne).toLowerCase()),
                        function (t) {
                            var n;
                            do {
                                if ((n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function (e) {
                    return e === p;
                },
                focus: function (e) {
                    return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: me(!1),
                disabled: me(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !i.pseudos.empty(e);
                },
                header: function (e) {
                    return G.test(e.nodeName);
                },
                input: function (e) {
                    return K.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: ge(function () {
                    return [0];
                }),
                last: ge(function (e, t) {
                    return [t - 1];
                }),
                eq: ge(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                }),
                even: ge(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: ge(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : t < n ? t : n; 0 <= --i; ) e.push(i);
                    return e;
                }),
                gt: ge(function (e, t, n) {
                    for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                }),
            },
        }).pseudos.nth = i.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            i.pseudos[t] = he(t);
        for (t in { submit: !0, reset: !0 }) i.pseudos[t] = pe(t);
        function ye() {}
        function be(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i;
        }
        function _e(e, t, n) {
            var i = t.dir,
                r = t.next,
                o = r || i,
                a = n && "parentNode" === o,
                s = x++;
            return t.first
                ? function (t, n, r) {
                      for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
                      return !1;
                  }
                : function (t, n, l) {
                      var u,
                          c,
                          f,
                          d = [E, s];
                      if (l) {
                          for (; (t = t[i]); ) if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
                      } else
                          for (; (t = t[i]); )
                              if (1 === t.nodeType || a)
                                  if (((c = (f = t[_] || (t[_] = {}))[t.uniqueID] || (f[t.uniqueID] = {})), r && r === t.nodeName.toLowerCase())) t = t[i] || t;
                                  else {
                                      if ((u = c[o]) && u[0] === E && u[1] === s) return (d[2] = u[2]);
                                      if (((c[o] = d)[2] = e(t, n, l))) return !0;
                                  }
                      return !1;
                  };
        }
        function we(e) {
            return 1 < e.length
                ? function (t, n, i) {
                      for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                      return !0;
                  }
                : e[0];
        }
        function Ee(e, t, n, i, r) {
            for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
            return a;
        }
        function xe(e, t, n, i, r, o) {
            return (
                i && !i[_] && (i = xe(i)),
                r && !r[_] && (r = xe(r, o)),
                ue(function (o, a, s, l) {
                    var u,
                        c,
                        f,
                        d = [],
                        h = [],
                        p = a.length,
                        m =
                            o ||
                            (function (e, t, n) {
                                for (var i = 0, r = t.length; i < r; i++) se(e, t[i], n);
                                return n;
                            })(t || "*", s.nodeType ? [s] : s, []),
                        g = !e || (!o && t) ? m : Ee(m, d, e, s, l),
                        v = n ? (r || (o ? e : p || i) ? [] : a) : g;
                    if ((n && n(g, v, s, l), i)) for (u = Ee(v, h), i(u, [], s, l), c = u.length; c--; ) (f = u[c]) && (v[h[c]] = !(g[h[c]] = f));
                    if (o) {
                        if (r || e) {
                            if (r) {
                                for (u = [], c = v.length; c--; ) (f = v[c]) && u.push((g[c] = f));
                                r(null, (v = []), u, l);
                            }
                            for (c = v.length; c--; ) (f = v[c]) && -1 < (u = r ? q(o, f) : d[c]) && (o[u] = !(a[u] = f));
                        }
                    } else (v = Ee(v === a ? v.splice(p, v.length) : v)), r ? r(null, a, v, l) : O.apply(a, v);
                })
            );
        }
        function Te(e) {
            for (
                var t,
                    n,
                    r,
                    o = e.length,
                    a = i.relative[e[0].type],
                    s = a || i.relative[" "],
                    l = a ? 1 : 0,
                    c = _e(
                        function (e) {
                            return e === t;
                        },
                        s,
                        !0
                    ),
                    f = _e(
                        function (e) {
                            return -1 < q(t, e);
                        },
                        s,
                        !0
                    ),
                    d = [
                        function (e, n, i) {
                            var r = (!a && (i || n !== u)) || ((t = n).nodeType ? c(e, n, i) : f(e, n, i));
                            return (t = null), r;
                        },
                    ];
                l < o;
                l++
            )
                if ((n = i.relative[e[l].type])) d = [_e(we(d), n)];
                else {
                    if ((n = i.filter[e[l].type].apply(null, e[l].matches))[_]) {
                        for (r = ++l; r < o && !i.relative[e[r].type]; r++);
                        return xe(1 < l && we(d), 1 < l && be(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(W, "$1"), n, l < r && Te(e.slice(l, r)), r < o && Te((e = e.slice(r))), r < o && be(e));
                    }
                    d.push(n);
                }
            return we(d);
        }
        return (
            (ye.prototype = i.filters = i.pseudos),
            (i.setFilters = new ye()),
            (a = se.tokenize = function (e, t) {
                var n,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c = C[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (s = e, l = [], u = i.preFilter; s; ) {
                    for (a in ((n && !(r = U.exec(s))) || (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                    (n = !1),
                    (r = Q.exec(s)) && ((n = r.shift()), o.push({ value: n, type: r[0].replace(W, " ") }), (s = s.slice(n.length))),
                    i.filter))
                        !(r = X[a].exec(s)) || (u[a] && !(r = u[a](r))) || ((n = r.shift()), o.push({ value: n, type: a, matches: r }), (s = s.slice(n.length)));
                    if (!n) break;
                }
                return t ? s.length : s ? se.error(e) : C(e, l).slice(0);
            }),
            (s = se.compile = function (e, t) {
                var n,
                    r,
                    o,
                    s,
                    l,
                    c,
                    f = [],
                    p = [],
                    g = S[e + " "];
                if (!g) {
                    for (t || (t = a(e)), n = t.length; n--; ) (g = Te(t[n]))[_] ? f.push(g) : p.push(g);
                    (g = S(
                        e,
                        ((r = p),
                        (s = 0 < (o = f).length),
                        (l = 0 < r.length),
                        (c = function (e, t, n, a, c) {
                            var f,
                                p,
                                g,
                                v = 0,
                                y = "0",
                                b = e && [],
                                _ = [],
                                w = u,
                                x = e || (l && i.find.TAG("*", c)),
                                T = (E += null == w ? 1 : Math.random() || 0.1),
                                C = x.length;
                            for (c && (u = t == h || t || c); y !== C && null != (f = x[y]); y++) {
                                if (l && f) {
                                    for (p = 0, t || f.ownerDocument == h || (d(f), (n = !m)); (g = r[p++]); )
                                        if (g(f, t || h, n)) {
                                            a.push(f);
                                            break;
                                        }
                                    c && (E = T);
                                }
                                s && ((f = !g && f) && v--, e && b.push(f));
                            }
                            if (((v += y), s && y !== v)) {
                                for (p = 0; (g = o[p++]); ) g(b, _, t, n);
                                if (e) {
                                    if (0 < v) for (; y--; ) b[y] || _[y] || (_[y] = j.call(a));
                                    _ = Ee(_);
                                }
                                O.apply(a, _), c && !e && 0 < _.length && 1 < v + o.length && se.uniqueSort(a);
                            }
                            return c && ((E = T), (u = w)), b;
                        }),
                        s ? ue(c) : c)
                    )).selector = e;
                }
                return g;
            }),
            (l = se.select = function (e, t, n, r) {
                var o,
                    l,
                    u,
                    c,
                    f,
                    d = "function" == typeof e && e,
                    h = !r && a((e = d.selector || e));
                if (((n = n || []), 1 === h.length)) {
                    if (2 < (l = h[0] = h[0].slice(0)).length && "ID" === (u = l[0]).type && 9 === t.nodeType && m && i.relative[l[1].type]) {
                        if (!(t = (i.find.ID(u.matches[0].replace(te, ne), t) || [])[0])) return n;
                        d && (t = t.parentNode), (e = e.slice(l.shift().value.length));
                    }
                    for (o = X.needsContext.test(e) ? 0 : l.length; o-- && ((u = l[o]), !i.relative[(c = u.type)]); )
                        if ((f = i.find[c]) && (r = f(u.matches[0].replace(te, ne), (ee.test(l[0].type) && ve(t.parentNode)) || t))) {
                            if ((l.splice(o, 1), !(e = r.length && be(l)))) return O.apply(n, r), n;
                            break;
                        }
                }
                return (d || s(e, h))(r, t, !m, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
            }),
            (n.sortStable = _.split("").sort(A).join("") === _),
            (n.detectDuplicates = !!f),
            d(),
            (n.sortDetached = ce(function (e) {
                return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
            })),
            ce(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                fe("type|href|height|width", function (e, t, n) {
                    if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (n.attributes &&
                ce(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                fe("value", function (e, t, n) {
                    if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ce(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                fe(P, function (e, t, n) {
                    var i;
                    if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
                }),
            se
        );
    })(e);
    (w.find = x), (w.expr = x.selectors), (w.expr[":"] = w.expr.pseudos), (w.uniqueSort = w.unique = x.uniqueSort), (w.text = x.getText), (w.isXMLDoc = x.isXML), (w.contains = x.contains), (w.escapeSelector = x.escape);
    var T = function (e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && w(e).is(n)) break;
                    i.push(e);
                }
            return i;
        },
        C = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n;
        },
        S = w.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function N(e, t, n) {
        return p(t)
            ? w.grep(e, function (e, i) {
                  return !!t.call(e, i, e) !== n;
              })
            : t.nodeType
            ? w.grep(e, function (e) {
                  return (e === t) !== n;
              })
            : "string" != typeof t
            ? w.grep(e, function (e) {
                  return -1 < s.call(t, e) !== n;
              })
            : w.filter(t, e, n);
    }
    (w.filter = function (e, t, n) {
        var i = t[0];
        return (
            n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType
                ? w.find.matchesSelector(i, e)
                    ? [i]
                    : []
                : w.find.matches(
                      e,
                      w.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        w.fn.extend({
            find: function (e) {
                var t,
                    n,
                    i = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        w(e).filter(function () {
                            for (t = 0; t < i; t++) if (w.contains(r[t], this)) return !0;
                        })
                    );
                for (n = this.pushStack([]), t = 0; t < i; t++) w.find(e, r[t], n);
                return 1 < i ? w.uniqueSort(n) : n;
            },
            filter: function (e) {
                return this.pushStack(N(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(N(this, e || [], !0));
            },
            is: function (e) {
                return !!N(this, "string" == typeof e && S.test(e) ? w(e) : e || [], !1).length;
            },
        });
    var D,
        j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((w.fn.init = function (e, t, n) {
        var i, r;
        if (!e) return this;
        if (((n = n || D), "string" == typeof e)) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : j.exec(e)) || (!i[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (((t = t instanceof w ? t[0] : t), w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), A.test(i[1]) && w.isPlainObject(t))) for (i in t) p(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = g.getElementById(i[2])) && ((this[0] = r), (this.length = 1)), this;
        }
        return e.nodeType ? ((this[0] = e), (this.length = 1), this) : p(e) ? (void 0 !== n.ready ? n.ready(e) : e(w)) : w.makeArray(e, this);
    }).prototype = w.fn),
        (D = w(g));
    var L = /^(?:parents|prev(?:Until|All))/,
        O = { children: !0, contents: !0, next: !0, prev: !0 };
    function I(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    w.fn.extend({
        has: function (e) {
            var t = w(e, this),
                n = t.length;
            return this.filter(function () {
                for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var n,
                i = 0,
                r = this.length,
                o = [],
                a = "string" != typeof e && w(e);
            if (!S.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
                            o.push(n);
                            break;
                        }
            return this.pushStack(1 < o.length ? w.uniqueSort(o) : o);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? s.call(w(e), this[0]) : s.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        w.each(
            {
                parent: function (e) {
                    var t = e.parentNode;
                    return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                    return T(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                    return T(e, "parentNode", n);
                },
                next: function (e) {
                    return I(e, "nextSibling");
                },
                prev: function (e) {
                    return I(e, "previousSibling");
                },
                nextAll: function (e) {
                    return T(e, "nextSibling");
                },
                prevAll: function (e) {
                    return T(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                    return T(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                    return T(e, "previousSibling", n);
                },
                siblings: function (e) {
                    return C((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return C(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
                },
            },
            function (e, t) {
                w.fn[e] = function (n, i) {
                    var r = w.map(this, t, n);
                    return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = w.filter(i, r)), 1 < this.length && (O[e] || w.uniqueSort(r), L.test(e) && r.reverse()), this.pushStack(r);
                };
            }
        );
    var q = /[^\x20\t\r\n\f]+/g;
    function P(e) {
        return e;
    }
    function H(e) {
        throw e;
    }
    function R(e, t, n, i) {
        var r;
        try {
            e && p((r = e.promise)) ? r.call(e).done(t).fail(n) : e && p((r = e.then)) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i));
        } catch (e) {
            n.apply(void 0, [e]);
        }
    }
    (w.Callbacks = function (e) {
        var t, n;
        e =
            "string" == typeof e
                ? ((t = e),
                  (n = {}),
                  w.each(t.match(q) || [], function (e, t) {
                      n[t] = !0;
                  }),
                  n)
                : w.extend({}, e);
        var i,
            r,
            o,
            a,
            s = [],
            l = [],
            u = -1,
            c = function () {
                for (a = a || e.once, o = i = !0; l.length; u = -1) for (r = l.shift(); ++u < s.length; ) !1 === s[u].apply(r[0], r[1]) && e.stopOnFalse && ((u = s.length), (r = !1));
                e.memory || (r = !1), (i = !1), a && (s = r ? [] : "");
            },
            f = {
                add: function () {
                    return (
                        s &&
                            (r && !i && ((u = s.length - 1), l.push(r)),
                            (function t(n) {
                                w.each(n, function (n, i) {
                                    p(i) ? (e.unique && f.has(i)) || s.push(i) : i && i.length && "string" !== b(i) && t(i);
                                });
                            })(arguments),
                            r && !i && c()),
                        this
                    );
                },
                remove: function () {
                    return (
                        w.each(arguments, function (e, t) {
                            for (var n; -1 < (n = w.inArray(t, s, n)); ) s.splice(n, 1), n <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < w.inArray(e, s) : 0 < s.length;
                },
                empty: function () {
                    return s && (s = []), this;
                },
                disable: function () {
                    return (a = l = []), (s = r = ""), this;
                },
                disabled: function () {
                    return !s;
                },
                lock: function () {
                    return (a = l = []), r || i || (s = r = ""), this;
                },
                locked: function () {
                    return !!a;
                },
                fireWith: function (e, t) {
                    return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), l.push(t), i || c()), this;
                },
                fire: function () {
                    return f.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!o;
                },
            };
        return f;
    }),
        w.extend({
            Deferred: function (t) {
                var n = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
                    ],
                    i = "pending",
                    r = {
                        state: function () {
                            return i;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return r.then(null, e);
                        },
                        pipe: function () {
                            var e = arguments;
                            return w
                                .Deferred(function (t) {
                                    w.each(n, function (n, i) {
                                        var r = p(e[i[4]]) && e[i[4]];
                                        o[i[1]](function () {
                                            var e = r && r.apply(this, arguments);
                                            e && p(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[i[0] + "With"](this, r ? [e] : arguments);
                                        });
                                    }),
                                        (e = null);
                                })
                                .promise();
                        },
                        then: function (t, i, r) {
                            var o = 0;
                            function a(t, n, i, r) {
                                return function () {
                                    var s = this,
                                        l = arguments,
                                        u = function () {
                                            var e, u;
                                            if (!(t < o)) {
                                                if ((e = i.apply(s, l)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                                (u = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                    p(u)
                                                        ? r
                                                            ? u.call(e, a(o, n, P, r), a(o, n, H, r))
                                                            : (o++, u.call(e, a(o, n, P, r), a(o, n, H, r), a(o, n, P, n.notifyWith)))
                                                        : (i !== P && ((s = void 0), (l = [e])), (r || n.resolveWith)(s, l));
                                            }
                                        },
                                        c = r
                                            ? u
                                            : function () {
                                                  try {
                                                      u();
                                                  } catch (e) {
                                                      w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace), o <= t + 1 && (i !== H && ((s = void 0), (l = [e])), n.rejectWith(s, l));
                                                  }
                                              };
                                    t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                                };
                            }
                            return w
                                .Deferred(function (e) {
                                    n[0][3].add(a(0, e, p(r) ? r : P, e.notifyWith)), n[1][3].add(a(0, e, p(t) ? t : P)), n[2][3].add(a(0, e, p(i) ? i : H));
                                })
                                .promise();
                        },
                        promise: function (e) {
                            return null != e ? w.extend(e, r) : r;
                        },
                    },
                    o = {};
                return (
                    w.each(n, function (e, t) {
                        var a = t[2],
                            s = t[5];
                        (r[t[1]] = a.add),
                            s &&
                                a.add(
                                    function () {
                                        i = s;
                                    },
                                    n[3 - e][2].disable,
                                    n[3 - e][3].disable,
                                    n[0][2].lock,
                                    n[0][3].lock
                                ),
                            a.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = a.fireWith);
                    }),
                    r.promise(o),
                    t && t.call(o, o),
                    o
                );
            },
            when: function (e) {
                var t = arguments.length,
                    n = t,
                    i = Array(n),
                    o = r.call(arguments),
                    a = w.Deferred(),
                    s = function (e) {
                        return function (n) {
                            (i[e] = this), (o[e] = 1 < arguments.length ? r.call(arguments) : n), --t || a.resolveWith(i, o);
                        };
                    };
                if (t <= 1 && (R(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || p(o[n] && o[n].then))) return a.then();
                for (; n--; ) R(o[n], s(n), a.reject);
                return a.promise();
            },
        });
    var M = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (w.Deferred.exceptionHook = function (t, n) {
        e.console && e.console.warn && t && M.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
        (w.readyException = function (t) {
            e.setTimeout(function () {
                throw t;
            });
        });
    var F = w.Deferred();
    function B() {
        g.removeEventListener("DOMContentLoaded", B), e.removeEventListener("load", B), w.ready();
    }
    (w.fn.ready = function (e) {
        return (
            F.then(e).catch(function (e) {
                w.readyException(e);
            }),
            this
        );
    }),
        w.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --w.readyWait : w.isReady) || ((w.isReady = !0) !== e && 0 < --w.readyWait) || F.resolveWith(g, [w]);
            },
        }),
        (w.ready.then = F.then),
        "complete" === g.readyState || ("loading" !== g.readyState && !g.documentElement.doScroll) ? e.setTimeout(w.ready) : (g.addEventListener("DOMContentLoaded", B), e.addEventListener("load", B));
    var W = function (e, t, n, i, r, o, a) {
            var s = 0,
                l = e.length,
                u = null == n;
            if ("object" === b(n)) for (s in ((r = !0), n)) W(e, t, s, n[s], !0, o, a);
            else if (
                void 0 !== i &&
                ((r = !0),
                p(i) || (a = !0),
                u &&
                    (a
                        ? (t.call(e, i), (t = null))
                        : ((u = t),
                          (t = function (e, t, n) {
                              return u.call(w(e), n);
                          }))),
                t)
            )
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        U = /^-ms-/,
        Q = /-([a-z])/g;
    function $(e, t) {
        return t.toUpperCase();
    }
    function z(e) {
        return e.replace(U, "ms-").replace(Q, $);
    }
    var V = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function X() {
        this.expando = w.expando + X.uid++;
    }
    (X.uid = 1),
        (X.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, n) {
                var i,
                    r = this.cache(e);
                if ("string" == typeof t) r[z(t)] = n;
                else for (i in t) r[z(i)] = t[i];
                return r;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][z(t)];
            },
            access: function (e, t, n) {
                return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
            },
            remove: function (e, t) {
                var n,
                    i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(z) : (t = z(t)) in i ? [t] : t.match(q) || []).length;
                        for (; n--; ) delete i[t[n]];
                    }
                    (void 0 === t || w.isEmptyObject(i)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !w.isEmptyObject(t);
            },
        });
    var Y = new X(),
        K = new X(),
        G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (((i = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(i)))) {
                try {
                    n = "true" === (r = n) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : G.test(r) ? JSON.parse(r) : r));
                } catch (e) {}
                K.set(e, t, n);
            } else n = void 0;
        return n;
    }
    w.extend({
        hasData: function (e) {
            return K.hasData(e) || Y.hasData(e);
        },
        data: function (e, t, n) {
            return K.access(e, t, n);
        },
        removeData: function (e, t) {
            K.remove(e, t);
        },
        _data: function (e, t, n) {
            return Y.access(e, t, n);
        },
        _removeData: function (e, t) {
            Y.remove(e, t);
        },
    }),
        w.fn.extend({
            data: function (e, t) {
                var n,
                    i,
                    r,
                    o = this[0],
                    a = o && o.attributes;
                if (void 0 === e) {
                    if (this.length && ((r = K.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--; ) a[n] && 0 === (i = a[n].name).indexOf("data-") && ((i = z(i.slice(5))), Z(o, i, r[i]));
                        Y.set(o, "hasDataAttrs", !0);
                    }
                    return r;
                }
                return "object" == typeof e
                    ? this.each(function () {
                          K.set(this, e);
                      })
                    : W(
                          this,
                          function (t) {
                              var n;
                              if (o && void 0 === t) return void 0 !== (n = K.get(o, e)) ? n : void 0 !== (n = Z(o, e)) ? n : void 0;
                              this.each(function () {
                                  K.set(this, e, t);
                              });
                          },
                          null,
                          t,
                          1 < arguments.length,
                          null,
                          !0
                      );
            },
            removeData: function (e) {
                return this.each(function () {
                    K.remove(this, e);
                });
            },
        }),
        w.extend({
            queue: function (e, t, n) {
                var i;
                if (e) return (t = (t || "fx") + "queue"), (i = Y.get(e, t)), n && (!i || Array.isArray(n) ? (i = Y.access(e, t, w.makeArray(n))) : i.push(n)), i || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var n = w.queue(e, t),
                    i = n.length,
                    r = n.shift(),
                    o = w._queueHooks(e, t);
                "inprogress" === r && ((r = n.shift()), i--),
                    r &&
                        ("fx" === t && n.unshift("inprogress"),
                        delete o.stop,
                        r.call(
                            e,
                            function () {
                                w.dequeue(e, t);
                            },
                            o
                        )),
                    !i && o && o.empty.fire();
            },
            _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                    Y.get(e, n) ||
                    Y.access(e, n, {
                        empty: w.Callbacks("once memory").add(function () {
                            Y.remove(e, [t + "queue", n]);
                        }),
                    })
                );
            },
        }),
        w.fn.extend({
            queue: function (e, t) {
                var n = 2;
                return (
                    "string" != typeof e && ((t = e), (e = "fx"), n--),
                    arguments.length < n
                        ? w.queue(this[0], e)
                        : void 0 === t
                        ? this
                        : this.each(function () {
                              var n = w.queue(this, e, t);
                              w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    w.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                var n,
                    i = 1,
                    r = w.Deferred(),
                    o = this,
                    a = this.length,
                    s = function () {
                        --i || r.resolveWith(o, [o]);
                    };
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; ) (n = Y.get(o[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), r.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        ie = g.documentElement,
        re = function (e) {
            return w.contains(e.ownerDocument, e);
        },
        oe = { composed: !0 };
    ie.getRootNode &&
        (re = function (e) {
            return w.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
        });
    var ae = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && re(e) && "none" === w.css(e, "display"));
    };
    function se(e, t, n, i) {
        var r,
            o,
            a = 20,
            s = i
                ? function () {
                      return i.cur();
                  }
                : function () {
                      return w.css(e, t, "");
                  },
            l = s(),
            u = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (w.cssNumber[t] || ("px" !== u && +l)) && te.exec(w.css(e, t));
        if (c && c[3] !== u) {
            for (l /= 2, u = u || c[3], c = +l || 1; a--; ) w.style(e, t, c + u), (1 - o) * (1 - (o = s() / l || 0.5)) <= 0 && (a = 0), (c /= o);
            (c *= 2), w.style(e, t, c + u), (n = n || []);
        }
        return n && ((c = +c || +l || 0), (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), i && ((i.unit = u), (i.start = c), (i.end = r))), r;
    }
    var le = {};
    function ue(e, t) {
        for (var n, i, r, o, a, s, l, u = [], c = 0, f = e.length; c < f; c++)
            (i = e[c]).style &&
                ((n = i.style.display),
                t
                    ? ("none" === n && ((u[c] = Y.get(i, "display") || null), u[c] || (i.style.display = "")),
                      "" === i.style.display &&
                          ae(i) &&
                          (u[c] =
                              ((l = a = o = void 0),
                              (a = (r = i).ownerDocument),
                              (s = r.nodeName),
                              (l = le[s]) || ((o = a.body.appendChild(a.createElement(s))), (l = w.css(o, "display")), o.parentNode.removeChild(o), "none" === l && (l = "block"), (le[s] = l)))))
                    : "none" !== n && ((u[c] = "none"), Y.set(i, "display", n)));
        for (c = 0; c < f; c++) null != u[c] && (e[c].style.display = u[c]);
        return e;
    }
    w.fn.extend({
        show: function () {
            return ue(this, !0);
        },
        hide: function () {
            return ue(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      ae(this) ? w(this).show() : w(this).hide();
                  });
        },
    });
    var ce,
        fe,
        de = /^(?:checkbox|radio)$/i,
        he = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        pe = /^$|^module$|\/(?:java|ecma)script/i;
    (ce = g.createDocumentFragment().appendChild(g.createElement("div"))),
        (fe = g.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        (h.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (ce.innerHTML = "<textarea>x</textarea>"),
        (h.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
        (ce.innerHTML = "<option></option>"),
        (h.option = !!ce.lastChild);
    var me = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function ge(e, t) {
        var n;
        return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && k(e, t)) ? w.merge([e], n) : n;
    }
    function ve(e, t) {
        for (var n = 0, i = e.length; n < i; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
    }
    (me.tbody = me.tfoot = me.colgroup = me.caption = me.thead), (me.th = me.td), h.option || (me.optgroup = me.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ye = /<|&#?\w+;/;
    function be(e, t, n, i, r) {
        for (var o, a, s, l, u, c, f = t.createDocumentFragment(), d = [], h = 0, p = e.length; h < p; h++)
            if ((o = e[h]) || 0 === o)
                if ("object" === b(o)) w.merge(d, o.nodeType ? [o] : o);
                else if (ye.test(o)) {
                    for (a = a || f.appendChild(t.createElement("div")), s = (he.exec(o) || ["", ""])[1].toLowerCase(), l = me[s] || me._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--; ) a = a.lastChild;
                    w.merge(d, a.childNodes), ((a = f.firstChild).textContent = "");
                } else d.push(t.createTextNode(o));
        for (f.textContent = "", h = 0; (o = d[h++]); )
            if (i && -1 < w.inArray(o, i)) r && r.push(o);
            else if (((u = re(o)), (a = ge(f.appendChild(o), "script")), u && ve(a), n)) for (c = 0; (o = a[c++]); ) pe.test(o.type || "") && n.push(o);
        return f;
    }
    var _e = /^key/,
        we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0;
    }
    function Te() {
        return !1;
    }
    function Ce(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return g.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Se(e, t, n, i, r, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in ("string" != typeof n && ((i = i || n), (n = void 0)), t)) Se(e, s, n, i, t[s], o);
            return e;
        }
        if ((null == i && null == r ? ((r = n), (i = n = void 0)) : null == r && ("string" == typeof n ? ((r = i), (i = void 0)) : ((r = i), (i = n), (n = void 0))), !1 === r)) r = Te;
        else if (!r) return e;
        return (
            1 === o &&
                ((a = r),
                ((r = function (e) {
                    return w().off(e), a.apply(this, arguments);
                }).guid = a.guid || (a.guid = w.guid++))),
            e.each(function () {
                w.event.add(this, t, r, i, n);
            })
        );
    }
    function ke(e, t, n) {
        n
            ? (Y.set(e, t, !1),
              w.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                      var i,
                          o,
                          a = Y.get(this, t);
                      if (1 & e.isTrigger && this[t]) {
                          if (a.length) (w.event.special[t] || {}).delegateType && e.stopPropagation();
                          else if (((a = r.call(arguments)), Y.set(this, t, a), (i = n(this, t)), this[t](), a !== (o = Y.get(this, t)) || i ? Y.set(this, t, !1) : (o = {}), a !== o))
                              return e.stopImmediatePropagation(), e.preventDefault(), o.value;
                      } else a.length && (Y.set(this, t, { value: w.event.trigger(w.extend(a[0], w.Event.prototype), a.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === Y.get(e, t) && w.event.add(e, t, xe);
    }
    (w.event = {
        global: {},
        add: function (e, t, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                h,
                p,
                m,
                g = Y.get(e);
            if (V(e))
                for (
                    n.handler && ((n = (o = n).handler), (r = o.selector)),
                        r && w.find.matchesSelector(ie, r),
                        n.guid || (n.guid = w.guid++),
                        (l = g.events) || (l = g.events = Object.create(null)),
                        (a = g.handle) ||
                            (a = g.handle = function (t) {
                                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
                            }),
                        u = (t = (t || "").match(q) || [""]).length;
                    u--;

                )
                    (h = m = (s = Ee.exec(t[u]) || [])[1]),
                        (p = (s[2] || "").split(".").sort()),
                        h &&
                            ((f = w.event.special[h] || {}),
                            (h = (r ? f.delegateType : f.bindType) || h),
                            (f = w.event.special[h] || {}),
                            (c = w.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && w.expr.match.needsContext.test(r), namespace: p.join(".") }, o)),
                            (d = l[h]) || (((d = l[h] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(e, i, p, a)) || (e.addEventListener && e.addEventListener(h, a))),
                            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                            r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                            (w.event.global[h] = !0));
        },
        remove: function (e, t, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                h,
                p,
                m,
                g = Y.hasData(e) && Y.get(e);
            if (g && (l = g.events)) {
                for (u = (t = (t || "").match(q) || [""]).length; u--; )
                    if (((h = m = (s = Ee.exec(t[u]) || [])[1]), (p = (s[2] || "").split(".").sort()), h)) {
                        for (f = w.event.special[h] || {}, d = l[(h = (i ? f.delegateType : f.bindType) || h)] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--; )
                            (c = d[o]),
                                (!r && m !== c.origType) ||
                                    (n && n.guid !== c.guid) ||
                                    (s && !s.test(c.namespace)) ||
                                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                                    (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && ((f.teardown && !1 !== f.teardown.call(e, p, g.handle)) || w.removeEvent(e, h, g.handle), delete l[h]);
                    } else for (h in l) w.event.remove(e, h + t[u], n, i, !0);
                w.isEmptyObject(l) && Y.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                n,
                i,
                r,
                o,
                a,
                s = new Array(arguments.length),
                l = w.event.fix(e),
                u = (Y.get(this, "events") || Object.create(null))[l.type] || [],
                c = w.event.special[l.type] || {};
            for (s[0] = l, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((l.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, l))) {
                for (a = w.event.handlers.call(this, l, u), t = 0; (r = a[t++]) && !l.isPropagationStopped(); )
                    for (l.currentTarget = r.elem, n = 0; (o = r.handlers[n++]) && !l.isImmediatePropagationStopped(); )
                        (l.rnamespace && !1 !== o.namespace && !l.rnamespace.test(o.namespace)) ||
                            ((l.handleObj = o), (l.data = o.data), void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, s)) && !1 === (l.result = i) && (l.preventDefault(), l.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, l), l.result;
            }
        },
        handlers: function (e, t) {
            var n,
                i,
                r,
                o,
                a,
                s = [],
                l = t.delegateCount,
                u = e.target;
            if (l && u.nodeType && !("click" === e.type && 1 <= e.button))
                for (; u !== this; u = u.parentNode || this)
                    if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                        for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[(r = (i = t[n]).selector + " ")] && (a[r] = i.needsContext ? -1 < w(r, this).index(u) : w.find(r, this, null, [u]).length), a[r] && o.push(i);
                        o.length && s.push({ elem: u, handlers: o });
                    }
            return (u = this), l < t.length && s.push({ elem: u, handlers: t.slice(l) }), s;
        },
        addProp: function (e, t) {
            Object.defineProperty(w.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t)
                    ? function () {
                          if (this.originalEvent) return t(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[e];
                      },
                set: function (t) {
                    Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                },
            });
        },
        fix: function (e) {
            return e[w.expando] ? e : new w.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && ke(t, "click", xe), !1;
                },
                trigger: function (e) {
                    var t = this || e;
                    return de.test(t.type) && t.click && k(t, "input") && ke(t, "click"), !0;
                },
                _default: function (e) {
                    var t = e.target;
                    return (de.test(t.type) && t.click && k(t, "input") && Y.get(t, "click")) || k(t, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (w.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n);
        }),
        (w.Event = function (e, t) {
            if (!(this instanceof w.Event)) return new w.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Te),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && w.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[w.expando] = !0);
        }),
        (w.Event.prototype = {
            constructor: w.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        w.each(
            {
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
                char: !0,
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
                which: function (e) {
                    var t = e.button;
                    return null == e.which && _e.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && we.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            w.event.addProp
        ),
        w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            w.event.special[e] = {
                setup: function () {
                    return ke(this, e, Ce), !1;
                },
                trigger: function () {
                    return ke(this, e), !0;
                },
                delegateType: t,
            };
        }),
        w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
            w.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var n,
                        i = e.relatedTarget,
                        r = e.handleObj;
                    return (i && (i === this || w.contains(this, i))) || ((e.type = r.origType), (n = r.handler.apply(this, arguments)), (e.type = t)), n;
                },
            };
        }),
        w.fn.extend({
            on: function (e, t, n, i) {
                return Se(this, e, t, n, i);
            },
            one: function (e, t, n, i) {
                return Se(this, e, t, n, i, 1);
            },
            off: function (e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj) return (i = e.handleObj), w(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (r in e) this.off(r, t, e[r]);
                    return this;
                }
                return (
                    (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                    !1 === n && (n = Te),
                    this.each(function () {
                        w.event.remove(this, e, n, t);
                    })
                );
            },
        });
    var Ae = /<script|<style|<link/i,
        Ne = /checked\s*(?:[^=]|=\s*.checked.)/i,
        De = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function je(e, t) {
        return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
    }
    function Le(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Oe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Ie(e, t) {
        var n, i, r, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events)) for (r in (Y.remove(t, "handle events"), s)) for (n = 0, i = s[r].length; n < i; n++) w.event.add(t, r, s[r][n]);
            K.hasData(e) && ((o = K.access(e)), (a = w.extend({}, o)), K.set(t, a));
        }
    }
    function qe(e, t, n, i) {
        t = o(t);
        var r,
            a,
            s,
            l,
            u,
            c,
            f = 0,
            d = e.length,
            m = d - 1,
            g = t[0],
            v = p(g);
        if (v || (1 < d && "string" == typeof g && !h.checkClone && Ne.test(g)))
            return e.each(function (r) {
                var o = e.eq(r);
                v && (t[0] = g.call(this, r, o.html())), qe(o, t, n, i);
            });
        if (d && ((a = (r = be(t, e[0].ownerDocument, !1, e, i)).firstChild), 1 === r.childNodes.length && (r = a), a || i)) {
            for (l = (s = w.map(ge(r, "script"), Le)).length; f < d; f++) (u = r), f !== m && ((u = w.clone(u, !0, !0)), l && w.merge(s, ge(u, "script"))), n.call(e[f], u, f);
            if (l)
                for (c = s[s.length - 1].ownerDocument, w.map(s, Oe), f = 0; f < l; f++)
                    (u = s[f]),
                        pe.test(u.type || "") &&
                            !Y.access(u, "globalEval") &&
                            w.contains(c, u) &&
                            (u.src && "module" !== (u.type || "").toLowerCase() ? w._evalUrl && !u.noModule && w._evalUrl(u.src, { nonce: u.nonce || u.getAttribute("nonce") }, c) : y(u.textContent.replace(De, ""), u, c));
        }
        return e;
    }
    function Pe(e, t, n) {
        for (var i, r = t ? w.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(ge(i)), i.parentNode && (n && re(i) && ve(ge(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    w.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, n) {
            var i,
                r,
                o,
                a,
                s,
                l,
                u,
                c = e.cloneNode(!0),
                f = re(e);
            if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
                for (a = ge(c), i = 0, r = (o = ge(e)).length; i < r; i++)
                    (s = o[i]), "input" === (u = (l = a[i]).nodeName.toLowerCase()) && de.test(s.type) ? (l.checked = s.checked) : ("input" !== u && "textarea" !== u) || (l.defaultValue = s.defaultValue);
            if (t)
                if (n) for (o = o || ge(e), a = a || ge(c), i = 0, r = o.length; i < r; i++) Ie(o[i], a[i]);
                else Ie(e, c);
            return 0 < (a = ge(c, "script")).length && ve(a, !f && ge(e, "script")), c;
        },
        cleanData: function (e) {
            for (var t, n, i, r = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if ((t = n[Y.expando])) {
                        if (t.events) for (i in t.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, t.handle);
                        n[Y.expando] = void 0;
                    }
                    n[K.expando] && (n[K.expando] = void 0);
                }
        },
    }),
        w.fn.extend({
            detach: function (e) {
                return Pe(this, e, !0);
            },
            remove: function (e) {
                return Pe(this, e);
            },
            text: function (e) {
                return W(
                    this,
                    function (e) {
                        return void 0 === e
                            ? w.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return qe(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return qe(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild);
                    }
                });
            },
            before: function () {
                return qe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return qe(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (w.cleanData(ge(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return w.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return W(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            n = 0,
                            i = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !Ae.test(e) && !me[(he.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = w.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(ge(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var e = [];
                return qe(
                    this,
                    arguments,
                    function (t) {
                        var n = this.parentNode;
                        w.inArray(this, e) < 0 && (w.cleanData(ge(this)), n && n.replaceChild(t, this));
                    },
                    e
                );
            },
        }),
        w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
            w.fn[e] = function (e) {
                for (var n, i = [], r = w(e), o = r.length - 1, s = 0; s <= o; s++) (n = s === o ? this : this.clone(!0)), w(r[s])[t](n), a.apply(i, n.get());
                return this.pushStack(i);
            };
        });
    var He = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function (t) {
            var n = t.ownerDocument.defaultView;
            return (n && n.opener) || (n = e), n.getComputedStyle(t);
        },
        Me = function (e, t, n) {
            var i,
                r,
                o = {};
            for (r in t) (o[r] = e.style[r]), (e.style[r] = t[r]);
            for (r in ((i = n.call(e)), t)) e.style[r] = o[r];
            return i;
        },
        Fe = new RegExp(ne.join("|"), "i");
    function Be(e, t, n) {
        var i,
            r,
            o,
            a,
            s = e.style;
        return (
            (n = n || Re(e)) &&
                ("" !== (a = n.getPropertyValue(t) || n[t]) || re(e) || (a = w.style(e, t)),
                !h.pixelBoxStyles() && He.test(a) && Fe.test(t) && ((i = s.width), (r = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = i), (s.minWidth = r), (s.maxWidth = o))),
            void 0 !== a ? a + "" : a
        );
    }
    function We(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    !(function () {
        function t() {
            if (c) {
                (u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                    (c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                    ie.appendChild(u).appendChild(c);
                var t = e.getComputedStyle(c);
                (i = "1%" !== t.top),
                    (l = 12 === n(t.marginLeft)),
                    (c.style.right = "60%"),
                    (a = 36 === n(t.right)),
                    (r = 36 === n(t.width)),
                    (c.style.position = "absolute"),
                    (o = 12 === n(c.offsetWidth / 3)),
                    ie.removeChild(u),
                    (c = null);
            }
        }
        function n(e) {
            return Math.round(parseFloat(e));
        }
        var i,
            r,
            o,
            a,
            s,
            l,
            u = g.createElement("div"),
            c = g.createElement("div");
        c.style &&
            ((c.style.backgroundClip = "content-box"),
            (c.cloneNode(!0).style.backgroundClip = ""),
            (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
            w.extend(h, {
                boxSizingReliable: function () {
                    return t(), r;
                },
                pixelBoxStyles: function () {
                    return t(), a;
                },
                pixelPosition: function () {
                    return t(), i;
                },
                reliableMarginLeft: function () {
                    return t(), l;
                },
                scrollboxSize: function () {
                    return t(), o;
                },
                reliableTrDimensions: function () {
                    var t, n, i, r;
                    return (
                        null == s &&
                            ((t = g.createElement("table")),
                            (n = g.createElement("tr")),
                            (i = g.createElement("div")),
                            (t.style.cssText = "position:absolute;left:-11111px"),
                            (n.style.height = "1px"),
                            (i.style.height = "9px"),
                            ie.appendChild(t).appendChild(n).appendChild(i),
                            (r = e.getComputedStyle(n)),
                            (s = 3 < parseInt(r.height)),
                            ie.removeChild(t)),
                        s
                    );
                },
            }));
    })();
    var Ue = ["Webkit", "Moz", "ms"],
        Qe = g.createElement("div").style,
        $e = {};
    function ze(e) {
        return (
            w.cssProps[e] ||
            $e[e] ||
            (e in Qe
                ? e
                : ($e[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Qe) return e;
                      })(e) || e))
        );
    }
    var Ve = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ye = { position: "absolute", visibility: "hidden", display: "block" },
        Ke = { letterSpacing: "0", fontWeight: "400" };
    function Ge(e, t, n) {
        var i = te.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function Je(e, t, n, i, r, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; a < 4; a += 2)
            "margin" === n && (l += w.css(e, n + ne[a], !0, r)),
                i
                    ? ("content" === n && (l -= w.css(e, "padding" + ne[a], !0, r)), "margin" !== n && (l -= w.css(e, "border" + ne[a] + "Width", !0, r)))
                    : ((l += w.css(e, "padding" + ne[a], !0, r)), "padding" !== n ? (l += w.css(e, "border" + ne[a] + "Width", !0, r)) : (s += w.css(e, "border" + ne[a] + "Width", !0, r)));
        return !i && 0 <= o && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - l - s - 0.5)) || 0), l;
    }
    function Ze(e, t, n) {
        var i = Re(e),
            r = (!h.boxSizingReliable() || n) && "border-box" === w.css(e, "boxSizing", !1, i),
            o = r,
            a = Be(e, t, i),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (He.test(a)) {
            if (!n) return a;
            a = "auto";
        }
        return (
            ((!h.boxSizingReliable() && r) || (!h.reliableTrDimensions() && k(e, "tr")) || "auto" === a || (!parseFloat(a) && "inline" === w.css(e, "display", !1, i))) &&
                e.getClientRects().length &&
                ((r = "border-box" === w.css(e, "boxSizing", !1, i)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Je(e, t, n || (r ? "border" : "content"), o, i, a) + "px"
        );
    }
    function et(e, t, n, i, r) {
        return new et.prototype.init(e, t, n, i, r);
    }
    w.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                },
            },
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
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    o,
                    a,
                    s = z(t),
                    l = Xe.test(t),
                    u = e.style;
                if ((l || (t = ze(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n)) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                "string" == (o = typeof n) && (r = te.exec(n)) && r[1] && ((n = se(e, t, r)), (o = "number")),
                    null != n &&
                        n == n &&
                        ("number" !== o || l || (n += (r && r[3]) || (w.cssNumber[s] ? "" : "px")),
                        h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                        (a && "set" in a && void 0 === (n = a.set(e, n, i))) || (l ? u.setProperty(t, n) : (u[t] = n)));
            }
        },
        css: function (e, t, n, i) {
            var r,
                o,
                a,
                s = z(t);
            return (
                Xe.test(t) || (t = ze(s)),
                (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (r = a.get(e, !0, n)),
                void 0 === r && (r = Be(e, t, i)),
                "normal" === r && t in Ke && (r = Ke[t]),
                "" === n || n ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r) : r
            );
        },
    }),
        w.each(["height", "width"], function (e, t) {
            w.cssHooks[t] = {
                get: function (e, n, i) {
                    if (n)
                        return !Ve.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? Ze(e, t, i)
                            : Me(e, Ye, function () {
                                  return Ze(e, t, i);
                              });
                },
                set: function (e, n, i) {
                    var r,
                        o = Re(e),
                        a = !h.scrollboxSize() && "absolute" === o.position,
                        s = (a || i) && "border-box" === w.css(e, "boxSizing", !1, o),
                        l = i ? Je(e, t, i, s, o) : 0;
                    return (
                        s && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Je(e, t, "border", !1, o) - 0.5)),
                        l && (r = te.exec(n)) && "px" !== (r[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
                        Ge(0, n, l)
                    );
                },
            };
        }),
        (w.cssHooks.marginLeft = We(h.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Be(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Me(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
            (w.cssHooks[e + t] = {
                expand: function (n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + ne[i] + t] = o[i] || o[i - 2] || o[0];
                    return r;
                },
            }),
                "margin" !== e && (w.cssHooks[e + t].set = Ge);
        }),
        w.fn.extend({
            css: function (e, t) {
                return W(
                    this,
                    function (e, t, n) {
                        var i,
                            r,
                            o = {},
                            a = 0;
                        if (Array.isArray(t)) {
                            for (i = Re(e), r = t.length; a < r; a++) o[t[a]] = w.css(e, t[a], !1, i);
                            return o;
                        }
                        return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        (((w.Tween = et).prototype = {
            constructor: et,
            init: function (e, t, n, i, r, o) {
                (this.elem = e), (this.prop = n), (this.easing = r || w.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = i), (this.unit = o || (w.cssNumber[n] ? "" : "px"));
            },
            cur: function () {
                var e = et.propHooks[this.prop];
                return e && e.get ? e.get(this) : et.propHooks._default.get(this);
            },
            run: function (e) {
                var t,
                    n = et.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : et.propHooks._default.set(this),
                    this
                );
            },
        }).init.prototype = et.prototype),
        ((et.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = w.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
                },
                set: function (e) {
                    w.fx.step[e.prop] ? w.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!w.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)]) ? (e.elem[e.prop] = e.now) : w.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }).scrollTop = et.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (w.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (w.fx = et.prototype.init),
        (w.fx.step = {});
    var tt,
        nt,
        it,
        rt,
        ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;
    function st() {
        nt && (!1 === g.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(st) : e.setTimeout(st, w.fx.interval), w.fx.tick());
    }
    function lt() {
        return (
            e.setTimeout(function () {
                tt = void 0;
            }),
            (tt = Date.now())
        );
    }
    function ut(e, t) {
        var n,
            i = 0,
            r = { height: e };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ne[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function ct(e, t, n) {
        for (var i, r = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = r.length; o < a; o++) if ((i = r[o].call(n, t, e))) return i;
    }
    function ft(e, t, n) {
        var i,
            r,
            o = 0,
            a = ft.prefilters.length,
            s = w.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (r) return !1;
                for (var t = tt || lt(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) u.tweens[o].run(i);
                return s.notifyWith(e, [u, i, n]), i < 1 && a ? n : (a || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1);
            },
            u = s.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: tt || lt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                    var i = w.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i;
                },
                stop: function (t) {
                    var n = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return t ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t])) : s.rejectWith(e, [u, t]), this;
                },
            }),
            c = u.props;
        for (
            (function (e, t) {
                var n, i, r, o, a;
                for (n in e)
                    if (((r = t[(i = z(n))]), (o = e[n]), Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])), n !== i && ((e[i] = o), delete e[n]), (a = w.cssHooks[i]) && ("expand" in a)))
                        for (n in ((o = a.expand(o)), delete e[i], o)) (n in e) || ((e[n] = o[n]), (t[n] = r));
                    else t[i] = r;
            })(c, u.opts.specialEasing);
            o < a;
            o++
        )
            if ((i = ft.prefilters[o].call(u, e, c, u.opts))) return p(i.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = i.stop.bind(i)), i;
        return (
            w.map(c, ct, u),
            p(u.opts.start) && u.opts.start.call(e, u),
            u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always),
            w.fx.timer(w.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
            u
        );
    }
    (w.Animation = w.extend(ft, {
        tweeners: {
            "*": [
                function (e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n), n;
                },
            ],
        },
        tweener: function (e, t) {
            p(e) ? ((t = e), (e = ["*"])) : (e = e.match(q));
            for (var n, i = 0, r = e.length; i < r; i++) (n = e[i]), (ft.tweeners[n] = ft.tweeners[n] || []), ft.tweeners[n].unshift(t);
        },
        prefilters: [
            function (e, t, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    f = "width" in t || "height" in t,
                    d = this,
                    h = {},
                    p = e.style,
                    m = e.nodeType && ae(e),
                    g = Y.get(e, "fxshow");
                for (i in (n.queue ||
                    (null == (a = w._queueHooks(e, "fx")).unqueued &&
                        ((a.unqueued = 0),
                        (s = a.empty.fire),
                        (a.empty.fire = function () {
                            a.unqueued || s();
                        })),
                    a.unqueued++,
                    d.always(function () {
                        d.always(function () {
                            a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[i]), ot.test(r))) {
                        if ((delete t[i], (o = o || "toggle" === r), r === (m ? "hide" : "show"))) {
                            if ("show" !== r || !g || void 0 === g[i]) continue;
                            m = !0;
                        }
                        h[i] = (g && g[i]) || w.style(e, i);
                    }
                if ((l = !w.isEmptyObject(t)) || !w.isEmptyObject(h))
                    for (i in (f &&
                        1 === e.nodeType &&
                        ((n.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (u = g && g.display) && (u = Y.get(e, "display")),
                        "none" === (c = w.css(e, "display")) && (u ? (c = u) : (ue([e], !0), (u = e.style.display || u), (c = w.css(e, "display")), ue([e]))),
                        ("inline" === c || ("inline-block" === c && null != u)) &&
                            "none" === w.css(e, "float") &&
                            (l ||
                                (d.done(function () {
                                    p.display = u;
                                }),
                                null == u && ((c = p.display), (u = "none" === c ? "" : c))),
                            (p.display = "inline-block"))),
                    n.overflow &&
                        ((p.overflow = "hidden"),
                        d.always(function () {
                            (p.overflow = n.overflow[0]), (p.overflowX = n.overflow[1]), (p.overflowY = n.overflow[2]);
                        })),
                    (l = !1),
                    h))
                        l ||
                            (g ? "hidden" in g && (m = g.hidden) : (g = Y.access(e, "fxshow", { display: u })),
                            o && (g.hidden = !m),
                            m && ue([e], !0),
                            d.done(function () {
                                for (i in (m || ue([e]), Y.remove(e, "fxshow"), h)) w.style(e, i, h[i]);
                            })),
                            (l = ct(m ? g[i] : 0, i, d)),
                            i in g || ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
        },
    })),
        (w.speed = function (e, t, n) {
            var i = e && "object" == typeof e ? w.extend({}, e) : { complete: n || (!n && t) || (p(e) && e), duration: e, easing: (n && t) || (t && !p(t) && t) };
            return (
                w.fx.off ? (i.duration = 0) : "number" != typeof i.duration && (i.duration in w.fx.speeds ? (i.duration = w.fx.speeds[i.duration]) : (i.duration = w.fx.speeds._default)),
                (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
                (i.old = i.complete),
                (i.complete = function () {
                    p(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue);
                }),
                i
            );
        }),
        w.fn.extend({
            fadeTo: function (e, t, n, i) {
                return this.filter(ae).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i);
            },
            animate: function (e, t, n, i) {
                var r = w.isEmptyObject(e),
                    o = w.speed(t, n, i),
                    a = function () {
                        var t = ft(this, w.extend({}, e), o);
                        (r || Y.get(this, "finish")) && t.stop(!0);
                    };
                return (a.finish = a), r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
            },
            stop: function (e, t, n) {
                var i = function (e) {
                    var t = e.stop;
                    delete e.stop, t(n);
                };
                return (
                    "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                    t && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0,
                            r = null != e && e + "queueHooks",
                            o = w.timers,
                            a = Y.get(this);
                        if (r) a[r] && a[r].stop && i(a[r]);
                        else for (r in a) a[r] && a[r].stop && at.test(r) && i(a[r]);
                        for (r = o.length; r--; ) o[r].elem !== this || (null != e && o[r].queue !== e) || (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
                        (!t && n) || w.dequeue(this, e);
                    })
                );
            },
            finish: function (e) {
                return (
                    !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t,
                            n = Y.get(this),
                            i = n[e + "queue"],
                            r = n[e + "queueHooks"],
                            o = w.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, w.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                        for (t = 0; t < a; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish;
                    })
                );
            },
        }),
        w.each(["toggle", "show", "hide"], function (e, t) {
            var n = w.fn[t];
            w.fn[t] = function (e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ut(t, !0), e, i, r);
            };
        }),
        w.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
            w.fn[e] = function (e, n, i) {
                return this.animate(t, e, n, i);
            };
        }),
        (w.timers = []),
        (w.fx.tick = function () {
            var e,
                t = 0,
                n = w.timers;
            for (tt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || w.fx.stop(), (tt = void 0);
        }),
        (w.fx.timer = function (e) {
            w.timers.push(e), w.fx.start();
        }),
        (w.fx.interval = 13),
        (w.fx.start = function () {
            nt || ((nt = !0), st());
        }),
        (w.fx.stop = function () {
            nt = null;
        }),
        (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (w.fn.delay = function (t, n) {
            return (
                (t = (w.fx && w.fx.speeds[t]) || t),
                (n = n || "fx"),
                this.queue(n, function (n, i) {
                    var r = e.setTimeout(n, t);
                    i.stop = function () {
                        e.clearTimeout(r);
                    };
                })
            );
        }),
        (it = g.createElement("input")),
        (rt = g.createElement("select").appendChild(g.createElement("option"))),
        (it.type = "checkbox"),
        (h.checkOn = "" !== it.value),
        (h.optSelected = rt.selected),
        ((it = g.createElement("input")).value = "t"),
        (it.type = "radio"),
        (h.radioValue = "t" === it.value);
    var dt,
        ht = w.expr.attrHandle;
    w.fn.extend({
        attr: function (e, t) {
            return W(this, w.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                w.removeAttr(this, e);
            });
        },
    }),
        w.extend({
            attr: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute
                        ? w.prop(e, t, n)
                        : ((1 === o && w.isXMLDoc(e)) || (r = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? dt : void 0)),
                          void 0 !== n
                              ? null === n
                                  ? void w.removeAttr(e, t)
                                  : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                                  ? i
                                  : (e.setAttribute(t, n + ""), n)
                              : r && "get" in r && null !== (i = r.get(e, t))
                              ? i
                              : null == (i = w.find.attr(e, t))
                              ? void 0
                              : i);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!h.radioValue && "radio" === t && k(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var n,
                    i = 0,
                    r = t && t.match(q);
                if (r && 1 === e.nodeType) for (; (n = r[i++]); ) e.removeAttribute(n);
            },
        }),
        (dt = {
            set: function (e, t, n) {
                return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
            },
        }),
        w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = ht[t] || w.find.attr;
            ht[t] = function (e, t, i) {
                var r,
                    o,
                    a = t.toLowerCase();
                return i || ((o = ht[a]), (ht[a] = r), (r = null != n(e, t, i) ? a : null), (ht[a] = o)), r;
            };
        });
    var pt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
    function gt(e) {
        return (e.match(q) || []).join(" ");
    }
    function vt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function yt(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(q)) || [];
    }
    w.fn.extend({
        prop: function (e, t) {
            return W(this, w.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[w.propFix[e] || e];
            });
        },
    }),
        w.extend({
            prop: function (e, t, n) {
                var i,
                    r,
                    o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return (
                        (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (r = w.propHooks[t])),
                        void 0 !== n ? (r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e[t] = n)) : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = w.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || (mt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        h.optSelected ||
            (w.propHooks.selected = {
                get: function (e) {
                    var t = e.parentNode;
                    return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    var t = e.parentNode;
                    t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                },
            }),
        w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            w.propFix[this.toLowerCase()] = this;
        }),
        w.fn.extend({
            addClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l = 0;
                if (p(e))
                    return this.each(function (t) {
                        w(this).addClass(e.call(this, t, vt(this)));
                    });
                if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                        if (((r = vt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))) {
                            for (a = 0; (o = t[a++]); ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            r !== (s = gt(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (e) {
                var t,
                    n,
                    i,
                    r,
                    o,
                    a,
                    s,
                    l = 0;
                if (p(e))
                    return this.each(function (t) {
                        w(this).removeClass(e.call(this, t, vt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((t = yt(e)).length)
                    for (; (n = this[l++]); )
                        if (((r = vt(n)), (i = 1 === n.nodeType && " " + gt(r) + " "))) {
                            for (a = 0; (o = t[a++]); ) for (; -1 < i.indexOf(" " + o + " "); ) i = i.replace(" " + o + " ", " ");
                            r !== (s = gt(i)) && n.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (e, t) {
                var n = typeof e,
                    i = "string" === n || Array.isArray(e);
                return "boolean" == typeof t && i
                    ? t
                        ? this.addClass(e)
                        : this.removeClass(e)
                    : p(e)
                    ? this.each(function (n) {
                          w(this).toggleClass(e.call(this, n, vt(this), t), t);
                      })
                    : this.each(function () {
                          var t, r, o, a;
                          if (i) for (r = 0, o = w(this), a = yt(e); (t = a[r++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                          else (void 0 !== e && "boolean" !== n) || ((t = vt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
                      });
            },
            hasClass: function (e) {
                var t,
                    n,
                    i = 0;
                for (t = " " + e + " "; (n = this[i++]); ) if (1 === n.nodeType && -1 < (" " + gt(vt(n)) + " ").indexOf(t)) return !0;
                return !1;
            },
        });
    var bt = /\r/g;
    w.fn.extend({
        val: function (e) {
            var t,
                n,
                i,
                r = this[0];
            return arguments.length
                ? ((i = p(e)),
                  this.each(function (n) {
                      var r;
                      1 === this.nodeType &&
                          (null == (r = i ? e.call(this, n, w(this).val()) : e)
                              ? (r = "")
                              : "number" == typeof r
                              ? (r += "")
                              : Array.isArray(r) &&
                                (r = w.map(r, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value")) || (this.value = r));
                  }))
                : r
                ? (t = w.valHooks[r.type] || w.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value"))
                    ? n
                    : "string" == typeof (n = r.value)
                    ? n.replace(bt, "")
                    : null == n
                    ? ""
                    : n
                : void 0;
        },
    }),
        w.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = w.find.attr(e, "value");
                        return null != t ? t : gt(w.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        var t,
                            n,
                            i,
                            r = e.options,
                            o = e.selectedIndex,
                            a = "select-one" === e.type,
                            s = a ? null : [],
                            l = a ? o + 1 : r.length;
                        for (i = o < 0 ? l : a ? o : 0; i < l; i++)
                            if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                if (((t = w(n).val()), a)) return t;
                                s.push(t);
                            }
                        return s;
                    },
                    set: function (e, t) {
                        for (var n, i, r = e.options, o = w.makeArray(t), a = r.length; a--; ) ((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1), o;
                    },
                },
            },
        }),
        w.each(["radio", "checkbox"], function () {
            (w.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < w.inArray(w(e).val(), t));
                },
            }),
                h.checkOn ||
                    (w.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (h.focusin = "onfocusin" in e);
    var _t = /^(?:focusinfocus|focusoutblur)$/,
        wt = function (e) {
            e.stopPropagation();
        };
    w.extend(w.event, {
        trigger: function (t, n, i, r) {
            var o,
                a,
                s,
                l,
                u,
                f,
                d,
                h,
                v = [i || g],
                y = c.call(t, "type") ? t.type : t,
                b = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (
                ((a = h = s = i = i || g),
                3 !== i.nodeType &&
                    8 !== i.nodeType &&
                    !_t.test(y + w.event.triggered) &&
                    (-1 < y.indexOf(".") && ((y = (b = y.split(".")).shift()), b.sort()),
                    (u = y.indexOf(":") < 0 && "on" + y),
                    ((t = t[w.expando] ? t : new w.Event(y, "object" == typeof t && t)).isTrigger = r ? 2 : 3),
                    (t.namespace = b.join(".")),
                    (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                    (t.result = void 0),
                    t.target || (t.target = i),
                    (n = null == n ? [t] : w.makeArray(n, [t])),
                    (d = w.event.special[y] || {}),
                    r || !d.trigger || !1 !== d.trigger.apply(i, n)))
            ) {
                if (!r && !d.noBubble && !m(i)) {
                    for (l = d.delegateType || y, _t.test(l + y) || (a = a.parentNode); a; a = a.parentNode) v.push(a), (s = a);
                    s === (i.ownerDocument || g) && v.push(s.defaultView || s.parentWindow || e);
                }
                for (o = 0; (a = v[o++]) && !t.isPropagationStopped(); )
                    (h = a),
                        (t.type = 1 < o ? l : d.bindType || y),
                        (f = (Y.get(a, "events") || Object.create(null))[t.type] && Y.get(a, "handle")) && f.apply(a, n),
                        (f = u && a[u]) && f.apply && V(a) && ((t.result = f.apply(a, n)), !1 === t.result && t.preventDefault());
                return (
                    (t.type = y),
                    r ||
                        t.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(v.pop(), n)) ||
                        !V(i) ||
                        (u &&
                            p(i[y]) &&
                            !m(i) &&
                            ((s = i[u]) && (i[u] = null),
                            (w.event.triggered = y),
                            t.isPropagationStopped() && h.addEventListener(y, wt),
                            i[y](),
                            t.isPropagationStopped() && h.removeEventListener(y, wt),
                            (w.event.triggered = void 0),
                            s && (i[u] = s))),
                    t.result
                );
            }
        },
        simulate: function (e, t, n) {
            var i = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
            w.event.trigger(i, null, t);
        },
    }),
        w.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    w.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return w.event.trigger(e, t, n, !0);
            },
        }),
        h.focusin ||
            w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                var n = function (e) {
                    w.event.simulate(t, e.target, w.event.fix(e));
                };
                w.event.special[t] = {
                    setup: function () {
                        var i = this.ownerDocument || this.document || this,
                            r = Y.access(i, t);
                        r || i.addEventListener(e, n, !0), Y.access(i, t, (r || 0) + 1);
                    },
                    teardown: function () {
                        var i = this.ownerDocument || this.document || this,
                            r = Y.access(i, t) - 1;
                        r ? Y.access(i, t, r) : (i.removeEventListener(e, n, !0), Y.remove(i, t));
                    },
                };
            });
    var Et = e.location,
        xt = { guid: Date.now() },
        Tt = /\?/;
    w.parseXML = function (t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (t) {
            n = void 0;
        }
        return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
    };
    var Ct = /\[\]$/,
        St = /\r?\n/g,
        kt = /^(?:submit|button|image|reset|file)$/i,
        At = /^(?:input|select|textarea|keygen)/i;
    function Nt(e, t, n, i) {
        var r;
        if (Array.isArray(t))
            w.each(t, function (t, r) {
                n || Ct.test(e) ? i(e, r) : Nt(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
            });
        else if (n || "object" !== b(t)) i(e, t);
        else for (r in t) Nt(e + "[" + r + "]", t[r], n, i);
    }
    (w.param = function (e, t) {
        var n,
            i = [],
            r = function (e, t) {
                var n = p(t) ? t() : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
            };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
            w.each(e, function () {
                r(this.name, this.value);
            });
        else for (n in e) Nt(n, e[n], t, r);
        return i.join("&");
    }),
        w.fn.extend({
            serialize: function () {
                return w.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = w.prop(this, "elements");
                    return e ? w.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !w(this).is(":disabled") && At.test(this.nodeName) && !kt.test(e) && (this.checked || !de.test(e));
                    })
                    .map(function (e, t) {
                        var n = w(this).val();
                        return null == n
                            ? null
                            : Array.isArray(n)
                            ? w.map(n, function (e) {
                                  return { name: t.name, value: e.replace(St, "\r\n") };
                              })
                            : { name: t.name, value: n.replace(St, "\r\n") };
                    })
                    .get();
            },
        });
    var Dt = /%20/g,
        jt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        It = /^(?:GET|HEAD)$/,
        qt = /^\/\//,
        Pt = {},
        Ht = {},
        Rt = "*/".concat("*"),
        Mt = g.createElement("a");
    function Ft(e) {
        return function (t, n) {
            "string" != typeof t && ((n = t), (t = "*"));
            var i,
                r = 0,
                o = t.toLowerCase().match(q) || [];
            if (p(n)) for (; (i = o[r++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function Bt(e, t, n, i) {
        var r = {},
            o = e === Ht;
        function a(s) {
            var l;
            return (
                (r[s] = !0),
                w.each(e[s] || [], function (e, s) {
                    var u = s(t, n, i);
                    return "string" != typeof u || o || r[u] ? (o ? !(l = u) : void 0) : (t.dataTypes.unshift(u), a(u), !1);
                }),
                l
            );
        }
        return a(t.dataTypes[0]) || (!r["*"] && a("*"));
    }
    function Wt(e, t) {
        var n,
            i,
            r = w.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && w.extend(!0, e, i), e;
    }
    (Mt.href = Et.href),
        w.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Et.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Wt(Wt(e, w.ajaxSettings), t) : Wt(w.ajaxSettings, e);
            },
            ajaxPrefilter: Ft(Pt),
            ajaxTransport: Ft(Ht),
            ajax: function (t, n) {
                "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u,
                    c,
                    f,
                    d,
                    h = w.ajaxSetup({}, n),
                    p = h.context || h,
                    m = h.context && (p.nodeType || p.jquery) ? w(p) : w.event,
                    v = w.Deferred(),
                    y = w.Callbacks("once memory"),
                    b = h.statusCode || {},
                    _ = {},
                    E = {},
                    x = "canceled",
                    T = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (u) {
                                if (!a) for (a = {}; (t = Ot.exec(o)); ) a[t[1].toLowerCase() + " "] = (a[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = a[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return u ? o : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == u && ((e = E[e.toLowerCase()] = E[e.toLowerCase()] || e), (_[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == u && (h.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            var t;
                            if (e)
                                if (u) T.always(e[T.status]);
                                else for (t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            var t = e || x;
                            return i && i.abort(t), C(0, t), this;
                        },
                    };
                if (
                    (v.promise(T),
                    (h.url = ((t || h.url || Et.href) + "").replace(qt, Et.protocol + "//")),
                    (h.type = n.method || n.type || h.method || h.type),
                    (h.dataTypes = (h.dataType || "*").toLowerCase().match(q) || [""]),
                    null == h.crossDomain)
                ) {
                    l = g.createElement("a");
                    try {
                        (l.href = h.url), (l.href = l.href), (h.crossDomain = Mt.protocol + "//" + Mt.host != l.protocol + "//" + l.host);
                    } catch (t) {
                        h.crossDomain = !0;
                    }
                }
                if ((h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)), Bt(Pt, h, n, T), u)) return T;
                for (f in ((c = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
                (h.type = h.type.toUpperCase()),
                (h.hasContent = !It.test(h.type)),
                (r = h.url.replace(jt, "")),
                h.hasContent
                    ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Dt, "+"))
                    : ((d = h.url.slice(r.length)),
                      h.data && (h.processData || "string" == typeof h.data) && ((r += (Tt.test(r) ? "&" : "?") + h.data), delete h.data),
                      !1 === h.cache && ((r = r.replace(Lt, "$1")), (d = (Tt.test(r) ? "&" : "?") + "_=" + xt.guid++ + d)),
                      (h.url = r + d)),
                h.ifModified && (w.lastModified[r] && T.setRequestHeader("If-Modified-Since", w.lastModified[r]), w.etag[r] && T.setRequestHeader("If-None-Match", w.etag[r])),
                ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) && T.setRequestHeader("Content-Type", h.contentType),
                T.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : h.accepts["*"]),
                h.headers))
                    T.setRequestHeader(f, h.headers[f]);
                if (h.beforeSend && (!1 === h.beforeSend.call(p, T, h) || u)) return T.abort();
                if (((x = "abort"), y.add(h.complete), T.done(h.success), T.fail(h.error), (i = Bt(Ht, h, n, T)))) {
                    if (((T.readyState = 1), c && m.trigger("ajaxSend", [T, h]), u)) return T;
                    h.async &&
                        0 < h.timeout &&
                        (s = e.setTimeout(function () {
                            T.abort("timeout");
                        }, h.timeout));
                    try {
                        (u = !1), i.send(_, C);
                    } catch (t) {
                        if (u) throw t;
                        C(-1, t);
                    }
                } else C(-1, "No Transport");
                function C(t, n, a, l) {
                    var f,
                        d,
                        g,
                        _,
                        E,
                        x = n;
                    u ||
                        ((u = !0),
                        s && e.clearTimeout(s),
                        (i = void 0),
                        (o = l || ""),
                        (T.readyState = 0 < t ? 4 : 0),
                        (f = (200 <= t && t < 300) || 304 === t),
                        a &&
                            (_ = (function (e, t, n) {
                                for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (i)
                                    for (r in s)
                                        if (s[r] && s[r].test(i)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in n) o = l[0];
                                else {
                                    for (r in n) {
                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                            o = r;
                                            break;
                                        }
                                        a || (a = r);
                                    }
                                    o = o || a;
                                }
                                if (o) return o !== l[0] && l.unshift(o), n[o];
                            })(h, T, a)),
                        !f && -1 < w.inArray("script", h.dataTypes) && (h.converters["text script"] = function () {}),
                        (_ = (function (e, t, n, i) {
                            var r,
                                o,
                                a,
                                s,
                                l,
                                u = {},
                                c = e.dataTypes.slice();
                            if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
                            for (o = c.shift(); o; )
                                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = o), (o = c.shift())))
                                    if ("*" === o) o = l;
                                    else if ("*" !== l && l !== o) {
                                        if (!(a = u[l + " " + o] || u["* " + o]))
                                            for (r in u)
                                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                                                    !0 === a ? (a = u[r]) : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                                                    break;
                                                }
                                        if (!0 !== a)
                                            if (a && e.throws) t = a(t);
                                            else
                                                try {
                                                    t = a(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(h, _, T, f)),
                        f
                            ? (h.ifModified && ((E = T.getResponseHeader("Last-Modified")) && (w.lastModified[r] = E), (E = T.getResponseHeader("etag")) && (w.etag[r] = E)),
                              204 === t || "HEAD" === h.type ? (x = "nocontent") : 304 === t ? (x = "notmodified") : ((x = _.state), (d = _.data), (f = !(g = _.error))))
                            : ((g = x), (!t && x) || ((x = "error"), t < 0 && (t = 0))),
                        (T.status = t),
                        (T.statusText = (n || x) + ""),
                        f ? v.resolveWith(p, [d, x, T]) : v.rejectWith(p, [T, x, g]),
                        T.statusCode(b),
                        (b = void 0),
                        c && m.trigger(f ? "ajaxSuccess" : "ajaxError", [T, h, f ? d : g]),
                        y.fireWith(p, [T, x]),
                        c && (m.trigger("ajaxComplete", [T, h]), --w.active || w.event.trigger("ajaxStop")));
                }
                return T;
            },
            getJSON: function (e, t, n) {
                return w.get(e, t, n, "json");
            },
            getScript: function (e, t) {
                return w.get(e, void 0, t, "script");
            },
        }),
        w.each(["get", "post"], function (e, t) {
            w[t] = function (e, n, i, r) {
                return p(n) && ((r = r || i), (i = n), (n = void 0)), w.ajax(w.extend({ url: e, type: t, dataType: r, data: n, success: i }, w.isPlainObject(e) && e));
            };
        }),
        w.ajaxPrefilter(function (e) {
            var t;
            for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (w._evalUrl = function (e, t, n) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    w.globalEval(e, t, n);
                },
            });
        }),
        w.fn.extend({
            wrapAll: function (e) {
                var t;
                return (
                    this[0] &&
                        (p(e) && (e = e.call(this[0])),
                        (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && t.insertBefore(this[0]),
                        t
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (e) {
                return p(e)
                    ? this.each(function (t) {
                          w(this).wrapInner(e.call(this, t));
                      })
                    : this.each(function () {
                          var t = w(this),
                              n = t.contents();
                          n.length ? n.wrapAll(e) : t.append(e);
                      });
            },
            wrap: function (e) {
                var t = p(e);
                return this.each(function (n) {
                    w(this).wrapAll(t ? e.call(this, n) : e);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            w(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (w.expr.pseudos.hidden = function (e) {
            return !w.expr.pseudos.visible(e);
        }),
        (w.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (w.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest();
            } catch (e) {}
        });
    var Ut = { 0: 200, 1223: 204 },
        Qt = w.ajaxSettings.xhr();
    (h.cors = !!Qt && "withCredentials" in Qt),
        (h.ajax = Qt = !!Qt),
        w.ajaxTransport(function (t) {
            var n, i;
            if (h.cors || (Qt && !t.crossDomain))
                return {
                    send: function (r, o) {
                        var a,
                            s = t.xhr();
                        if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (a in t.xhrFields) s[a] = t.xhrFields[a];
                        for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"), r)) s.setRequestHeader(a, r[a]);
                        (n = function (e) {
                            return function () {
                                n &&
                                    ((n = i = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                    "abort" === e
                                        ? s.abort()
                                        : "error" === e
                                        ? "number" != typeof s.status
                                            ? o(0, "error")
                                            : o(s.status, s.statusText)
                                        : o(Ut[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? { binary: s.response } : { text: s.responseText }, s.getAllResponseHeaders()));
                            };
                        }),
                            (s.onload = n()),
                            (i = s.onerror = s.ontimeout = n("error")),
                            void 0 !== s.onabort
                                ? (s.onabort = i)
                                : (s.onreadystatechange = function () {
                                      4 === s.readyState &&
                                          e.setTimeout(function () {
                                              n && i();
                                          });
                                  }),
                            (n = n("abort"));
                        try {
                            s.send((t.hasContent && t.data) || null);
                        } catch (r) {
                            if (n) throw r;
                        }
                    },
                    abort: function () {
                        n && n();
                    },
                };
        }),
        w.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        w.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return w.globalEval(e), e;
                },
            },
        }),
        w.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        w.ajaxTransport("script", function (e) {
            var t, n;
            if (e.crossDomain || e.scriptAttrs)
                return {
                    send: function (i, r) {
                        (t = w("<script>")
                            .attr(e.scriptAttrs || {})
                            .prop({ charset: e.scriptCharset, src: e.url })
                            .on(
                                "load error",
                                (n = function (e) {
                                    t.remove(), (n = null), e && r("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            g.head.appendChild(t[0]);
                    },
                    abort: function () {
                        n && n();
                    },
                };
        });
    var $t,
        zt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = zt.pop() || w.expando + "_" + xt.guid++;
            return (this[e] = !0), e;
        },
    }),
        w.ajaxPrefilter("json jsonp", function (t, n, i) {
            var r,
                o,
                a,
                s = !1 !== t.jsonp && (Vt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])
                return (
                    (r = t.jsonpCallback = p(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                    s ? (t[s] = t[s].replace(Vt, "$1" + r)) : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                    (t.converters["script json"] = function () {
                        return a || w.error(r + " was not called"), a[0];
                    }),
                    (t.dataTypes[0] = "json"),
                    (o = e[r]),
                    (e[r] = function () {
                        a = arguments;
                    }),
                    i.always(function () {
                        void 0 === o ? w(e).removeProp(r) : (e[r] = o), t[r] && ((t.jsonpCallback = n.jsonpCallback), zt.push(r)), a && p(o) && o(a[0]), (a = o = void 0);
                    }),
                    "script"
                );
        }),
        (h.createHTMLDocument = ((($t = g.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === $t.childNodes.length)),
        (w.parseHTML = function (e, t, n) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t || (h.createHTMLDocument ? (((i = (t = g.implementation.createHTMLDocument("")).createElement("base")).href = g.location.href), t.head.appendChild(i)) : (t = g)),
                  (o = !n && []),
                  (r = A.exec(e)) ? [t.createElement(r[1])] : ((r = be([e], t, o)), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
            var i, r, o;
        }),
        (w.fn.load = function (e, t, n) {
            var i,
                r,
                o,
                a = this,
                s = e.indexOf(" ");
            return (
                -1 < s && ((i = gt(e.slice(s))), (e = e.slice(0, s))),
                p(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                0 < a.length &&
                    w
                        .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (o = arguments), a.html(i ? w("<div>").append(w.parseHTML(e)).find(i) : e);
                        })
                        .always(
                            n &&
                                function (e, t) {
                                    a.each(function () {
                                        n.apply(this, o || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (w.expr.pseudos.animated = function (e) {
            return w.grep(w.timers, function (t) {
                return e === t.elem;
            }).length;
        }),
        (w.offset = {
            setOffset: function (e, t, n) {
                var i,
                    r,
                    o,
                    a,
                    s,
                    l,
                    u = w.css(e, "position"),
                    c = w(e),
                    f = {};
                "static" === u && (e.style.position = "relative"),
                    (s = c.offset()),
                    (o = w.css(e, "top")),
                    (l = w.css(e, "left")),
                    ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? ((a = (i = c.position()).top), (r = i.left)) : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
                    p(t) && (t = t.call(e, n, w.extend({}, s))),
                    null != t.top && (f.top = t.top - s.top + a),
                    null != t.left && (f.left = t.left - s.left + r),
                    "using" in t ? t.using.call(e, f) : ("number" == typeof f.top && (f.top += "px"), "number" == typeof f.left && (f.left += "px"), c.css(f));
            },
        }),
        w.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e
                        ? this
                        : this.each(function (t) {
                              w.offset.setOffset(this, e, t);
                          });
                var t,
                    n,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((t = i.getBoundingClientRect()), (n = i.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        n,
                        i = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === w.css(i, "position")) t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position"); ) e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && (((r = w(e).offset()).top += w.css(e, "borderTopWidth", !0)), (r.left += w.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - r.top - w.css(i, "marginTop", !0), left: t.left - r.left - w.css(i, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
                    return e || ie;
                });
            },
        }),
        w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
            var n = "pageYOffset" === t;
            w.fn[e] = function (i) {
                return W(
                    this,
                    function (e, i, r) {
                        var o;
                        if ((m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === r)) return o ? o[t] : e[i];
                        o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : (e[i] = r);
                    },
                    e,
                    i,
                    arguments.length
                );
            };
        }),
        w.each(["top", "left"], function (e, t) {
            w.cssHooks[t] = We(h.pixelPosition, function (e, n) {
                if (n) return (n = Be(e, t)), He.test(n) ? w(e).position()[t] + "px" : n;
            });
        }),
        w.each({ Height: "height", Width: "width" }, function (e, t) {
            w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, i) {
                w.fn[i] = function (r, o) {
                    var a = arguments.length && (n || "boolean" != typeof r),
                        s = n || (!0 === r || !0 === o ? "margin" : "border");
                    return W(
                        this,
                        function (t, n, r) {
                            var o;
                            return m(t)
                                ? 0 === i.indexOf("outer")
                                    ? t["inner" + e]
                                    : t.document.documentElement["client" + e]
                                : 9 === t.nodeType
                                ? ((o = t.documentElement), Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e]))
                                : void 0 === r
                                ? w.css(t, n, s)
                                : w.style(t, n, r, s);
                        },
                        t,
                        a ? r : void 0,
                        a
                    );
                };
            });
        }),
        w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            w.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        w.fn.extend({
            bind: function (e, t, n) {
                return this.on(e, null, t, n);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, n, i) {
                return this.on(t, e, n, i);
            },
            undelegate: function (e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            w.fn[t] = function (e, n) {
                return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
            };
        });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (w.proxy = function (e, t) {
        var n, i, o;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
            return (
                (i = r.call(arguments, 2)),
                ((o = function () {
                    return e.apply(t || this, i.concat(r.call(arguments)));
                }).guid = e.guid = e.guid || w.guid++),
                o
            );
    }),
        (w.holdReady = function (e) {
            e ? w.readyWait++ : w.ready(!0);
        }),
        (w.isArray = Array.isArray),
        (w.parseJSON = JSON.parse),
        (w.nodeName = k),
        (w.isFunction = p),
        (w.isWindow = m),
        (w.camelCase = z),
        (w.type = b),
        (w.now = Date.now),
        (w.isNumeric = function (e) {
            var t = w.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (w.trim = function (e) {
            return null == e ? "" : (e + "").replace(Xt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return w;
            });
    var Yt = e.jQuery,
        Kt = e.$;
    return (
        (w.noConflict = function (t) {
            return e.$ === w && (e.$ = Kt), t && e.jQuery === w && (e.jQuery = Yt), w;
        }),
        void 0 === t && (e.jQuery = e.$ = w),
        w
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? t(exports, require("jquery"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery"], t)
            : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}), e.jQuery);
    })(this, function (e, t) {
        "use strict";
        function n(e) {
            return e && "object" == typeof e && "default" in e ? e : { default: e };
        }
        var i = n(t);
        function r(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            }
        }
        function o(e, t, n) {
            return t && r(e.prototype, t), n && r(e, n), e;
        }
        function a() {
            return (a =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var s = "transitionend";
        function l(e) {
            var t = this,
                n = !1;
            return (
                i.default(this).one(u.TRANSITION_END, function () {
                    n = !0;
                }),
                setTimeout(function () {
                    n || u.triggerTransitionEnd(t);
                }, e),
                this
            );
        }
        var u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                do {
                    e += ~~(1e6 * Math.random());
                } while (document.getElementById(e));
                return e;
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                if (!t || "#" === t) {
                    var n = e.getAttribute("href");
                    t = n && "#" !== n ? n.trim() : "";
                }
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var t = i.default(e).css("transition-duration"),
                    n = i.default(e).css("transition-delay"),
                    r = parseFloat(t),
                    o = parseFloat(n);
                return r || o ? ((t = t.split(",")[0]), (n = n.split(",")[0]), 1e3 * (parseFloat(t) + parseFloat(n))) : 0;
            },
            reflow: function (e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
                i.default(e).trigger(s);
            },
            supportsTransitionEnd: function () {
                return Boolean(s);
            },
            isElement: function (e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, n) {
                for (var i in n)
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        var r = n[i],
                            o = t[i],
                            a =
                                o && u.isElement(o)
                                    ? "element"
                                    : null == (s = o)
                                    ? "" + s
                                    : {}.toString
                                          .call(s)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase();
                        if (!new RegExp(r).test(a)) throw new Error(e.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".');
                    }
                var s;
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" == typeof e.getRootNode) {
                    var t = e.getRootNode();
                    return t instanceof ShadowRoot ? t : null;
                }
                return e instanceof ShadowRoot ? e : e.parentNode ? u.findShadowRoot(e.parentNode) : null;
            },
            jQueryDetection: function () {
                if (void 0 === i.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = i.default.fn.jquery.split(" ")[0].split(".");
                if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            },
        };
        u.jQueryDetection(),
            (i.default.fn.emulateTransitionEnd = l),
            (i.default.event.special[u.TRANSITION_END] = {
                bindType: s,
                delegateType: s,
                handle: function (e) {
                    if (i.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                },
            });
        var c = i.default.fn.alert,
            f = (function () {
                function e(e) {
                    this._element = e;
                }
                var t = e.prototype;
                return (
                    (t.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.alert"), (this._element = null);
                    }),
                    (t._getRootElement = function (e) {
                        var t = u.getSelectorFromElement(e),
                            n = !1;
                        return t && (n = document.querySelector(t)), n || (n = i.default(e).closest(".alert")[0]), n;
                    }),
                    (t._triggerCloseEvent = function (e) {
                        var t = i.default.Event("close.bs.alert");
                        return i.default(e).trigger(t), t;
                    }),
                    (t._removeElement = function (e) {
                        var t = this;
                        if ((i.default(e).removeClass("show"), i.default(e).hasClass("fade"))) {
                            var n = u.getTransitionDurationFromElement(e);
                            i.default(e)
                                .one(u.TRANSITION_END, function (n) {
                                    return t._destroyElement(e, n);
                                })
                                .emulateTransitionEnd(n);
                        } else this._destroyElement(e);
                    }),
                    (t._destroyElement = function (e) {
                        i.default(e).detach().trigger("closed.bs.alert").remove();
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this),
                                r = n.data("bs.alert");
                            r || ((r = new e(this)), n.data("bs.alert", r)), "close" === t && r[t](this);
                        });
                    }),
                    (e._handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(), e.close(this);
                        };
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f())),
            (i.default.fn.alert = f._jQueryInterface),
            (i.default.fn.alert.Constructor = f),
            (i.default.fn.alert.noConflict = function () {
                return (i.default.fn.alert = c), f._jQueryInterface;
            });
        var d = i.default.fn.button,
            h = (function () {
                function e(e) {
                    (this._element = e), (this.shouldAvoidTriggerChange = !1);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        var e = !0,
                            t = !0,
                            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
                        if (n) {
                            var r = this._element.querySelector('input:not([type="hidden"])');
                            if (r) {
                                if ("radio" === r.type)
                                    if (r.checked && this._element.classList.contains("active")) e = !1;
                                    else {
                                        var o = n.querySelector(".active");
                                        o && i.default(o).removeClass("active");
                                    }
                                e && (("checkbox" !== r.type && "radio" !== r.type) || (r.checked = !this._element.classList.contains("active")), this.shouldAvoidTriggerChange || i.default(r).trigger("change")), r.focus(), (t = !1);
                            }
                        }
                        this._element.hasAttribute("disabled") ||
                            this._element.classList.contains("disabled") ||
                            (t && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), e && i.default(this._element).toggleClass("active"));
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.button"), (this._element = null);
                    }),
                    (e._jQueryInterface = function (t, n) {
                        return this.each(function () {
                            var r = i.default(this),
                                o = r.data("bs.button");
                            o || ((o = new e(this)), r.data("bs.button", o)), (o.shouldAvoidTriggerChange = n), "toggle" === t && o[t]();
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        i
            .default(document)
            .on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                var t = e.target,
                    n = t;
                if ((i.default(t).hasClass("btn") || (t = i.default(t).closest(".btn")[0]), !t || t.hasAttribute("disabled") || t.classList.contains("disabled"))) e.preventDefault();
                else {
                    var r = t.querySelector('input:not([type="hidden"])');
                    if (r && (r.hasAttribute("disabled") || r.classList.contains("disabled"))) return void e.preventDefault();
                    ("INPUT" !== n.tagName && "LABEL" === t.tagName) || h._jQueryInterface.call(i.default(t), "toggle", "INPUT" === n.tagName);
                }
            })
            .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                var t = i.default(e.target).closest(".btn")[0];
                i.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
            }),
            i.default(window).on("load.bs.button.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, n = e.length; t < n; t++) {
                    var i = e[t],
                        r = i.querySelector('input:not([type="hidden"])');
                    r.checked || r.hasAttribute("checked") ? i.classList.add("active") : i.classList.remove("active");
                }
                for (var o = 0, a = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; o < a; o++) {
                    var s = e[o];
                    "true" === s.getAttribute("aria-pressed") ? s.classList.add("active") : s.classList.remove("active");
                }
            }),
            (i.default.fn.button = h._jQueryInterface),
            (i.default.fn.button.Constructor = h),
            (i.default.fn.button.noConflict = function () {
                return (i.default.fn.button = d), h._jQueryInterface;
            });
        var p = "carousel",
            m = ".bs.carousel",
            g = i.default.fn[p],
            v = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            y = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            b = ".carousel-indicators",
            _ = { TOUCH: "touch", PEN: "pen" },
            w = (function () {
                function e(e, t) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._indicatorsElement = this._element.querySelector(b)),
                        (this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0),
                        (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                        this._addEventListeners();
                }
                var t = e.prototype;
                return (
                    (t.next = function () {
                        this._isSliding || this._slide("next");
                    }),
                    (t.nextWhenVisible = function () {
                        var e = i.default(this._element);
                        !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
                    }),
                    (t.prev = function () {
                        this._isSliding || this._slide("prev");
                    }),
                    (t.pause = function (e) {
                        e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (u.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                    }),
                    (t.cycle = function (e) {
                        e || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), (this._interval = null)),
                            this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                    }),
                    (t.to = function (e) {
                        var t = this;
                        this._activeElement = this._element.querySelector(".active.carousel-item");
                        var n = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                i.default(this._element).one("slid.bs.carousel", function () {
                                    return t.to(e);
                                });
                            else {
                                if (n === e) return this.pause(), void this.cycle();
                                var r = e > n ? "next" : "prev";
                                this._slide(r, this._items[e]);
                            }
                    }),
                    (t.dispose = function () {
                        i.default(this._element).off(m),
                            i.default.removeData(this._element, "bs.carousel"),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (t._getConfig = function (e) {
                        return (e = a({}, v, e)), u.typeCheckConfig(p, e, y), e;
                    }),
                    (t._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        if (!(e <= 40)) {
                            var t = e / this.touchDeltaX;
                            (this.touchDeltaX = 0), t > 0 && this.prev(), t < 0 && this.next();
                        }
                    }),
                    (t._addEventListeners = function () {
                        var e = this;
                        this._config.keyboard &&
                            i.default(this._element).on("keydown.bs.carousel", function (t) {
                                return e._keydown(t);
                            }),
                            "hover" === this._config.pause &&
                                i
                                    .default(this._element)
                                    .on("mouseenter.bs.carousel", function (t) {
                                        return e.pause(t);
                                    })
                                    .on("mouseleave.bs.carousel", function (t) {
                                        return e.cycle(t);
                                    }),
                            this._config.touch && this._addTouchEventListeners();
                    }),
                    (t._addTouchEventListeners = function () {
                        var e = this;
                        if (this._touchSupported) {
                            var t = function (t) {
                                    e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] ? (e.touchStartX = t.originalEvent.clientX) : e._pointerEvent || (e.touchStartX = t.originalEvent.touches[0].clientX);
                                },
                                n = function (t) {
                                    e._pointerEvent && _[t.originalEvent.pointerType.toUpperCase()] && (e.touchDeltaX = t.originalEvent.clientX - e.touchStartX),
                                        e._handleSwipe(),
                                        "hover" === e._config.pause &&
                                            (e.pause(),
                                            e.touchTimeout && clearTimeout(e.touchTimeout),
                                            (e.touchTimeout = setTimeout(function (t) {
                                                return e.cycle(t);
                                            }, 500 + e._config.interval)));
                                };
                            i.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
                                return e.preventDefault();
                            }),
                                this._pointerEvent
                                    ? (i.default(this._element).on("pointerdown.bs.carousel", function (e) {
                                          return t(e);
                                      }),
                                      i.default(this._element).on("pointerup.bs.carousel", function (e) {
                                          return n(e);
                                      }),
                                      this._element.classList.add("pointer-event"))
                                    : (i.default(this._element).on("touchstart.bs.carousel", function (e) {
                                          return t(e);
                                      }),
                                      i.default(this._element).on("touchmove.bs.carousel", function (t) {
                                          return (function (t) {
                                              t.originalEvent.touches && t.originalEvent.touches.length > 1 ? (e.touchDeltaX = 0) : (e.touchDeltaX = t.originalEvent.touches[0].clientX - e.touchStartX);
                                          })(t);
                                      }),
                                      i.default(this._element).on("touchend.bs.carousel", function (e) {
                                          return n(e);
                                      }));
                        }
                    }),
                    (t._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next();
                            }
                    }),
                    (t._getItemIndex = function (e) {
                        return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(e);
                    }),
                    (t._getItemByDirection = function (e, t) {
                        var n = "next" === e,
                            i = "prev" === e,
                            r = this._getItemIndex(t),
                            o = this._items.length - 1;
                        if (((i && 0 === r) || (n && r === o)) && !this._config.wrap) return t;
                        var a = (r + ("prev" === e ? -1 : 1)) % this._items.length;
                        return -1 === a ? this._items[this._items.length - 1] : this._items[a];
                    }),
                    (t._triggerSlideEvent = function (e, t) {
                        var n = this._getItemIndex(e),
                            r = this._getItemIndex(this._element.querySelector(".active.carousel-item")),
                            o = i.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: r, to: n });
                        return i.default(this._element).trigger(o), o;
                    }),
                    (t._setActiveIndicatorElement = function (e) {
                        if (this._indicatorsElement) {
                            var t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"));
                            i.default(t).removeClass("active");
                            var n = this._indicatorsElement.children[this._getItemIndex(e)];
                            n && i.default(n).addClass("active");
                        }
                    }),
                    (t._updateInterval = function () {
                        var e = this._activeElement || this._element.querySelector(".active.carousel-item");
                        if (e) {
                            var t = parseInt(e.getAttribute("data-interval"), 10);
                            t ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = t)) : (this._config.interval = this._config.defaultInterval || this._config.interval);
                        }
                    }),
                    (t._slide = function (e, t) {
                        var n,
                            r,
                            o,
                            a = this,
                            s = this._element.querySelector(".active.carousel-item"),
                            l = this._getItemIndex(s),
                            c = t || (s && this._getItemByDirection(e, s)),
                            f = this._getItemIndex(c),
                            d = Boolean(this._interval);
                        if (("next" === e ? ((n = "carousel-item-left"), (r = "carousel-item-next"), (o = "left")) : ((n = "carousel-item-right"), (r = "carousel-item-prev"), (o = "right")), c && i.default(c).hasClass("active")))
                            this._isSliding = !1;
                        else if (!this._triggerSlideEvent(c, o).isDefaultPrevented() && s && c) {
                            (this._isSliding = !0), d && this.pause(), this._setActiveIndicatorElement(c), (this._activeElement = c);
                            var h = i.default.Event("slid.bs.carousel", { relatedTarget: c, direction: o, from: l, to: f });
                            if (i.default(this._element).hasClass("slide")) {
                                i.default(c).addClass(r), u.reflow(c), i.default(s).addClass(n), i.default(c).addClass(n);
                                var p = u.getTransitionDurationFromElement(s);
                                i.default(s)
                                    .one(u.TRANSITION_END, function () {
                                        i
                                            .default(c)
                                            .removeClass(n + " " + r)
                                            .addClass("active"),
                                            i.default(s).removeClass("active " + r + " " + n),
                                            (a._isSliding = !1),
                                            setTimeout(function () {
                                                return i.default(a._element).trigger(h);
                                            }, 0);
                                    })
                                    .emulateTransitionEnd(p);
                            } else i.default(s).removeClass("active"), i.default(c).addClass("active"), (this._isSliding = !1), i.default(this._element).trigger(h);
                            d && this.cycle();
                        }
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this).data("bs.carousel"),
                                r = a({}, v, i.default(this).data());
                            "object" == typeof t && (r = a({}, r, t));
                            var o = "string" == typeof t ? t : r.slide;
                            if ((n || ((n = new e(this, r)), i.default(this).data("bs.carousel", n)), "number" == typeof t)) n.to(t);
                            else if ("string" == typeof o) {
                                if (void 0 === n[o]) throw new TypeError('No method named "' + o + '"');
                                n[o]();
                            } else r.interval && r.ride && (n.pause(), n.cycle());
                        });
                    }),
                    (e._dataApiClickHandler = function (t) {
                        var n = u.getSelectorFromElement(this);
                        if (n) {
                            var r = i.default(n)[0];
                            if (r && i.default(r).hasClass("carousel")) {
                                var o = a({}, i.default(r).data(), i.default(this).data()),
                                    s = this.getAttribute("data-slide-to");
                                s && (o.interval = !1), e._jQueryInterface.call(i.default(r), o), s && i.default(r).data("bs.carousel").to(s), t.preventDefault();
                            }
                        }
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return v;
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", w._dataApiClickHandler),
            i.default(window).on("load.bs.carousel.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, n = e.length; t < n; t++) {
                    var r = i.default(e[t]);
                    w._jQueryInterface.call(r, r.data());
                }
            }),
            (i.default.fn[p] = w._jQueryInterface),
            (i.default.fn[p].Constructor = w),
            (i.default.fn[p].noConflict = function () {
                return (i.default.fn[p] = g), w._jQueryInterface;
            });
        var E = "collapse",
            x = i.default.fn[E],
            T = { toggle: !0, parent: "" },
            C = { toggle: "boolean", parent: "(string|element)" },
            S = '[data-toggle="collapse"]',
            k = (function () {
                function e(e, t) {
                    (this._isTransitioning = !1),
                        (this._element = e),
                        (this._config = this._getConfig(t)),
                        (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]')));
                    for (var n = [].slice.call(document.querySelectorAll(S)), i = 0, r = n.length; i < r; i++) {
                        var o = n[i],
                            a = u.getSelectorFromElement(o),
                            s = [].slice.call(document.querySelectorAll(a)).filter(function (t) {
                                return t === e;
                            });
                        null !== a && s.length > 0 && ((this._selector = a), this._triggerArray.push(o));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        i.default(this._element).hasClass("show") ? this.hide() : this.show();
                    }),
                    (t.show = function () {
                        var t,
                            n,
                            r = this;
                        if (
                            !this._isTransitioning &&
                            !i.default(this._element).hasClass("show") &&
                            (this._parent &&
                                0 ===
                                    (t = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains("collapse");
                                    })).length &&
                                (t = null),
                            !(t && (n = i.default(t).not(this._selector).data("bs.collapse")) && n._isTransitioning))
                        ) {
                            var o = i.default.Event("show.bs.collapse");
                            if ((i.default(this._element).trigger(o), !o.isDefaultPrevented())) {
                                t && (e._jQueryInterface.call(i.default(t).not(this._selector), "hide"), n || i.default(t).data("bs.collapse", null));
                                var a = this._getDimension();
                                i.default(this._element).removeClass("collapse").addClass("collapsing"),
                                    (this._element.style[a] = 0),
                                    this._triggerArray.length && i.default(this._triggerArray).removeClass("collapsed").attr("aria-expanded", !0),
                                    this.setTransitioning(!0);
                                var s = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                                    l = u.getTransitionDurationFromElement(this._element);
                                i
                                    .default(this._element)
                                    .one(u.TRANSITION_END, function () {
                                        i.default(r._element).removeClass("collapsing").addClass("collapse show"), (r._element.style[a] = ""), r.setTransitioning(!1), i.default(r._element).trigger("shown.bs.collapse");
                                    })
                                    .emulateTransitionEnd(l),
                                    (this._element.style[a] = this._element[s] + "px");
                            }
                        }
                    }),
                    (t.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && i.default(this._element).hasClass("show")) {
                            var t = i.default.Event("hide.bs.collapse");
                            if ((i.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                                var n = this._getDimension();
                                (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px"), u.reflow(this._element), i.default(this._element).addClass("collapsing").removeClass("collapse show");
                                var r = this._triggerArray.length;
                                if (r > 0)
                                    for (var o = 0; o < r; o++) {
                                        var a = this._triggerArray[o],
                                            s = u.getSelectorFromElement(a);
                                        if (null !== s) i.default([].slice.call(document.querySelectorAll(s))).hasClass("show") || i.default(a).addClass("collapsed").attr("aria-expanded", !1);
                                    }
                                this.setTransitioning(!0);
                                this._element.style[n] = "";
                                var l = u.getTransitionDurationFromElement(this._element);
                                i.default(this._element)
                                    .one(u.TRANSITION_END, function () {
                                        e.setTransitioning(!1), i.default(e._element).removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                                    })
                                    .emulateTransitionEnd(l);
                            }
                        }
                    }),
                    (t.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.collapse"), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (t._getConfig = function (e) {
                        return ((e = a({}, T, e)).toggle = Boolean(e.toggle)), u.typeCheckConfig(E, e, C), e;
                    }),
                    (t._getDimension = function () {
                        return i.default(this._element).hasClass("width") ? "width" : "height";
                    }),
                    (t._getParent = function () {
                        var t,
                            n = this;
                        u.isElement(this._config.parent) ? ((t = this._config.parent), void 0 !== this._config.parent.jquery && (t = this._config.parent[0])) : (t = document.querySelector(this._config.parent));
                        var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            o = [].slice.call(t.querySelectorAll(r));
                        return (
                            i.default(o).each(function (t, i) {
                                n._addAriaAndCollapsedClass(e._getTargetFromElement(i), [i]);
                            }),
                            t
                        );
                    }),
                    (t._addAriaAndCollapsedClass = function (e, t) {
                        var n = i.default(e).hasClass("show");
                        t.length && i.default(t).toggleClass("collapsed", !n).attr("aria-expanded", n);
                    }),
                    (e._getTargetFromElement = function (e) {
                        var t = u.getSelectorFromElement(e);
                        return t ? document.querySelector(t) : null;
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this),
                                r = n.data("bs.collapse"),
                                o = a({}, T, n.data(), "object" == typeof t && t ? t : {});
                            if ((!r && o.toggle && "string" == typeof t && /show|hide/.test(t) && (o.toggle = !1), r || ((r = new e(this, o)), n.data("bs.collapse", r)), "string" == typeof t)) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t]();
                            }
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return T;
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(document).on("click.bs.collapse.data-api", S, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var t = i.default(this),
                n = u.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(n));
            i.default(r).each(function () {
                var e = i.default(this),
                    n = e.data("bs.collapse") ? "toggle" : t.data();
                k._jQueryInterface.call(e, n);
            });
        }),
            (i.default.fn[E] = k._jQueryInterface),
            (i.default.fn[E].Constructor = k),
            (i.default.fn[E].noConflict = function () {
                return (i.default.fn[E] = x), k._jQueryInterface;
            });
        var A = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            N = (function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (A && navigator.userAgent.indexOf(e[t]) >= 0) return 1;
                return 0;
            })();
        var D =
            A && window.Promise
                ? function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              window.Promise.resolve().then(function () {
                                  (t = !1), e();
                              }));
                      };
                  }
                : function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              setTimeout(function () {
                                  (t = !1), e();
                              }, N));
                      };
                  };
        function j(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function L(e, t) {
            if (1 !== e.nodeType) return [];
            var n = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? n[t] : n;
        }
        function O(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function I(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var t = L(e),
                n = t.overflow,
                i = t.overflowX,
                r = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + r + i) ? e : I(O(e));
        }
        function q(e) {
            return e && e.referenceNode ? e.referenceNode : e;
        }
        var P = A && !(!window.MSInputMethodContext || !document.documentMode),
            H = A && /MSIE 10/.test(navigator.userAgent);
        function R(e) {
            return 11 === e ? P : 10 === e ? H : P || H;
        }
        function M(e) {
            if (!e) return document.documentElement;
            for (var t = R(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; ) n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? (-1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === L(n, "position") ? M(n) : n) : e ? e.ownerDocument.documentElement : document.documentElement;
        }
        function F(e) {
            return null !== e.parentNode ? F(e.parentNode) : e;
        }
        function B(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                i = n ? e : t,
                r = n ? t : e,
                o = document.createRange();
            o.setStart(i, 0), o.setEnd(r, 0);
            var a,
                s,
                l = o.commonAncestorContainer;
            if ((e !== l && t !== l) || i.contains(r)) return "BODY" === (s = (a = l).nodeName) || ("HTML" !== s && M(a.firstElementChild) !== a) ? M(l) : l;
            var u = F(e);
            return u.host ? B(u.host, t) : B(e, F(t).host);
        }
        function W(e) {
            var t = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
                n = e.nodeName;
            if ("BODY" === n || "HTML" === n) {
                var i = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || i)[t];
            }
            return e[t];
        }
        function U(e, t) {
            var n = "x" === t ? "Left" : "Top",
                i = "Left" === n ? "Right" : "Bottom";
            return parseFloat(e["border" + n + "Width"]) + parseFloat(e["border" + i + "Width"]);
        }
        function Q(e, t, n, i) {
            return Math.max(
                t["offset" + e],
                t["scroll" + e],
                n["client" + e],
                n["offset" + e],
                n["scroll" + e],
                R(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
            );
        }
        function $(e) {
            var t = e.body,
                n = e.documentElement,
                i = R(10) && getComputedStyle(n);
            return { height: Q("Height", t, n, i), width: Q("Width", t, n, i) };
        }
        var z = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            V = (function () {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                    }
                }
                return function (t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t;
                };
            })(),
            X = function (e, t, n) {
                return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
            },
            Y =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                };
        function K(e) {
            return Y({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function G(e) {
            var t = {};
            try {
                if (R(10)) {
                    t = e.getBoundingClientRect();
                    var n = W(e, "top"),
                        i = W(e, "left");
                    (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
                } else t = e.getBoundingClientRect();
            } catch (e) {}
            var r = { left: t.left, top: t.top, width: t.right - t.left, height: t.bottom - t.top },
                o = "HTML" === e.nodeName ? $(e.ownerDocument) : {},
                a = o.width || e.clientWidth || r.width,
                s = o.height || e.clientHeight || r.height,
                l = e.offsetWidth - a,
                u = e.offsetHeight - s;
            if (l || u) {
                var c = L(e);
                (l -= U(c, "x")), (u -= U(c, "y")), (r.width -= l), (r.height -= u);
            }
            return K(r);
        }
        function J(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = R(10),
                r = "HTML" === t.nodeName,
                o = G(e),
                a = G(t),
                s = I(e),
                l = L(t),
                u = parseFloat(l.borderTopWidth),
                c = parseFloat(l.borderLeftWidth);
            n && r && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
            var f = K({ top: o.top - a.top - u, left: o.left - a.left - c, width: o.width, height: o.height });
            if (((f.marginTop = 0), (f.marginLeft = 0), !i && r)) {
                var d = parseFloat(l.marginTop),
                    h = parseFloat(l.marginLeft);
                (f.top -= u - d), (f.bottom -= u - d), (f.left -= c - h), (f.right -= c - h), (f.marginTop = d), (f.marginLeft = h);
            }
            return (
                (i && !n ? t.contains(s) : t === s && "BODY" !== s.nodeName) &&
                    (f = (function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            i = W(t, "top"),
                            r = W(t, "left"),
                            o = n ? -1 : 1;
                        return (e.top += i * o), (e.bottom += i * o), (e.left += r * o), (e.right += r * o), e;
                    })(f, t)),
                f
            );
        }
        function Z(e) {
            if (!e || !e.parentElement || R()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === L(t, "transform"); ) t = t.parentElement;
            return t || document.documentElement;
        }
        function ee(e, t, n, i) {
            var r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                o = { top: 0, left: 0 },
                a = r ? Z(e) : B(e, q(t));
            if ("viewport" === i)
                o = (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = e.ownerDocument.documentElement,
                        i = J(e, n),
                        r = Math.max(n.clientWidth, window.innerWidth || 0),
                        o = Math.max(n.clientHeight, window.innerHeight || 0),
                        a = t ? 0 : W(n),
                        s = t ? 0 : W(n, "left");
                    return K({ top: a - i.top + i.marginTop, left: s - i.left + i.marginLeft, width: r, height: o });
                })(a, r);
            else {
                var s = void 0;
                "scrollParent" === i ? "BODY" === (s = I(O(t))).nodeName && (s = e.ownerDocument.documentElement) : (s = "window" === i ? e.ownerDocument.documentElement : i);
                var l = J(s, a, r);
                if (
                    "HTML" !== s.nodeName ||
                    (function e(t) {
                        var n = t.nodeName;
                        if ("BODY" === n || "HTML" === n) return !1;
                        if ("fixed" === L(t, "position")) return !0;
                        var i = O(t);
                        return !!i && e(i);
                    })(a)
                )
                    o = l;
                else {
                    var u = $(e.ownerDocument),
                        c = u.height,
                        f = u.width;
                    (o.top += l.top - l.marginTop), (o.bottom = c + l.top), (o.left += l.left - l.marginLeft), (o.right = f + l.left);
                }
            }
            var d = "number" == typeof (n = n || 0);
            return (o.left += d ? n : n.left || 0), (o.top += d ? n : n.top || 0), (o.right -= d ? n : n.right || 0), (o.bottom -= d ? n : n.bottom || 0), o;
        }
        function te(e, t, n, i, r) {
            var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto")) return e;
            var a = ee(n, i, o, r),
                s = { top: { width: a.width, height: t.top - a.top }, right: { width: a.right - t.right, height: a.height }, bottom: { width: a.width, height: a.bottom - t.bottom }, left: { width: t.left - a.left, height: a.height } },
                l = Object.keys(s)
                    .map(function (e) {
                        return Y({ key: e }, s[e], { area: ((t = s[e]), t.width * t.height) });
                        var t;
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                u = l.filter(function (e) {
                    var t = e.width,
                        i = e.height;
                    return t >= n.clientWidth && i >= n.clientHeight;
                }),
                c = u.length > 0 ? u[0].key : l[0].key,
                f = e.split("-")[1];
            return c + (f ? "-" + f : "");
        }
        function ne(e, t, n) {
            var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
            return J(n, i ? Z(t) : B(t, q(n)), i);
        }
        function ie(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                i = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + i, height: e.offsetHeight + n };
        }
        function re(e) {
            var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function oe(e, t, n) {
            n = n.split("-")[0];
            var i = ie(e),
                r = { width: i.width, height: i.height },
                o = -1 !== ["right", "left"].indexOf(n),
                a = o ? "top" : "left",
                s = o ? "left" : "top",
                l = o ? "height" : "width",
                u = o ? "width" : "height";
            return (r[a] = t[a] + t[l] / 2 - i[l] / 2), (r[s] = n === s ? t[s] - i[u] : t[re(s)]), r;
        }
        function ae(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function se(e, t, n) {
            return (
                (void 0 === n
                    ? e
                    : e.slice(
                          0,
                          (function (e, t, n) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e[t] === n;
                                  });
                              var i = ae(e, function (e) {
                                  return e[t] === n;
                              });
                              return e.indexOf(i);
                          })(e, "name", n)
                      )
                ).forEach(function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var n = e.function || e.fn;
                    e.enabled && j(n) && ((t.offsets.popper = K(t.offsets.popper)), (t.offsets.reference = K(t.offsets.reference)), (t = n(t, e)));
                }),
                t
            );
        }
        function le(e, t) {
            return e.some(function (e) {
                var n = e.name;
                return e.enabled && n === t;
            });
        }
        function ue(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i],
                    o = r ? "" + r + n : e;
                if (void 0 !== document.body.style[o]) return o;
            }
            return null;
        }
        function ce(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window;
        }
        function fe(e, t, n, i) {
            (n.updateBound = i), ce(e).addEventListener("resize", n.updateBound, { passive: !0 });
            var r = I(e);
            return (
                (function e(t, n, i, r) {
                    var o = "BODY" === t.nodeName,
                        a = o ? t.ownerDocument.defaultView : t;
                    a.addEventListener(n, i, { passive: !0 }), o || e(I(a.parentNode), n, i, r), r.push(a);
                })(r, "scroll", n.updateBound, n.scrollParents),
                (n.scrollElement = r),
                (n.eventsEnabled = !0),
                n
            );
        }
        function de() {
            var e, t;
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                    ((e = this.reference),
                    (t = this.state),
                    ce(e).removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound);
                    }),
                    (t.updateBound = null),
                    (t.scrollParents = []),
                    (t.scrollElement = null),
                    (t.eventsEnabled = !1),
                    t)));
        }
        function he(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function pe(e, t) {
            Object.keys(t).forEach(function (n) {
                var i = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && he(t[n]) && (i = "px"), (e.style[n] = t[n] + i);
            });
        }
        var me = A && /Firefox/i.test(navigator.userAgent);
        function ge(e, t, n) {
            var i = ae(e, function (e) {
                    return e.name === t;
                }),
                r =
                    !!i &&
                    e.some(function (e) {
                        return e.name === n && e.enabled && e.order < i.order;
                    });
            if (!r) {
                var o = "`" + t + "`",
                    a = "`" + n + "`";
                console.warn(a + " modifier is required by " + o + " modifier in order to work, be sure to include it before " + o + "!");
            }
            return r;
        }
        var ve = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            ye = ve.slice(3);
        function be(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = ye.indexOf(e),
                i = ye.slice(n + 1).concat(ye.slice(0, n));
            return t ? i.reverse() : i;
        }
        var _e = { FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise" };
        function we(e, t, n, i) {
            var r = [0, 0],
                o = -1 !== ["right", "left"].indexOf(i),
                a = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim();
                }),
                s = a.indexOf(
                    ae(a, function (e) {
                        return -1 !== e.search(/,|\s/);
                    })
                );
            a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/,
                u = -1 !== s ? [a.slice(0, s).concat([a[s].split(l)[0]]), [a[s].split(l)[1]].concat(a.slice(s + 1))] : [a];
            return (
                (u = u.map(function (e, i) {
                    var r = (1 === i ? !o : o) ? "height" : "width",
                        a = !1;
                    return e
                        .reduce(function (e, t) {
                            return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (a = !0), e) : a ? ((e[e.length - 1] += t), (a = !1), e) : e.concat(t);
                        }, [])
                        .map(function (e) {
                            return (function (e, t, n, i) {
                                var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                    o = +r[1],
                                    a = r[2];
                                if (!o) return e;
                                if (0 === a.indexOf("%")) {
                                    var s = void 0;
                                    switch (a) {
                                        case "%p":
                                            s = n;
                                            break;
                                        case "%":
                                        case "%r":
                                        default:
                                            s = i;
                                    }
                                    return (K(s)[t] / 100) * o;
                                }
                                if ("vh" === a || "vw" === a)
                                    return (("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * o;
                                return o;
                            })(e, r, t, n);
                        });
                })).forEach(function (e, t) {
                    e.forEach(function (n, i) {
                        he(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
                    });
                }),
                r
            );
        }
        var Ee = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = t.split("-")[1];
                            if (i) {
                                var r = e.offsets,
                                    o = r.reference,
                                    a = r.popper,
                                    s = -1 !== ["bottom", "top"].indexOf(n),
                                    l = s ? "left" : "top",
                                    u = s ? "width" : "height",
                                    c = { start: X({}, l, o[l]), end: X({}, l, o[l] + o[u] - a[u]) };
                                e.offsets.popper = Y({}, a, c[i]);
                            }
                            return e;
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.offset,
                                i = e.placement,
                                r = e.offsets,
                                o = r.popper,
                                a = r.reference,
                                s = i.split("-")[0],
                                l = void 0;
                            return (
                                (l = he(+n) ? [+n, 0] : we(n, o, a, s)),
                                "left" === s
                                    ? ((o.top += l[0]), (o.left -= l[1]))
                                    : "right" === s
                                    ? ((o.top += l[0]), (o.left += l[1]))
                                    : "top" === s
                                    ? ((o.left += l[0]), (o.top -= l[1]))
                                    : "bottom" === s && ((o.left += l[0]), (o.top += l[1])),
                                (e.popper = o),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.boundariesElement || M(e.instance.popper);
                            e.instance.reference === n && (n = M(n));
                            var i = ue("transform"),
                                r = e.instance.popper.style,
                                o = r.top,
                                a = r.left,
                                s = r[i];
                            (r.top = ""), (r.left = ""), (r[i] = "");
                            var l = ee(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
                            (r.top = o), (r.left = a), (r[i] = s), (t.boundaries = l);
                            var u = t.priority,
                                c = e.offsets.popper,
                                f = {
                                    primary: function (e) {
                                        var n = c[e];
                                        return c[e] < l[e] && !t.escapeWithReference && (n = Math.max(c[e], l[e])), X({}, e, n);
                                    },
                                    secondary: function (e) {
                                        var n = "right" === e ? "left" : "top",
                                            i = c[n];
                                        return c[e] > l[e] && !t.escapeWithReference && (i = Math.min(c[n], l[e] - ("right" === e ? c.width : c.height))), X({}, n, i);
                                    },
                                };
                            return (
                                u.forEach(function (e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    c = Y({}, c, f[t](e));
                                }),
                                (e.offsets.popper = c),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets,
                                n = t.popper,
                                i = t.reference,
                                r = e.placement.split("-")[0],
                                o = Math.floor,
                                a = -1 !== ["top", "bottom"].indexOf(r),
                                s = a ? "right" : "bottom",
                                l = a ? "left" : "top",
                                u = a ? "width" : "height";
                            return n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]), n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])), e;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var n;
                            if (!ge(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e;
                            } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var r = e.placement.split("-")[0],
                                o = e.offsets,
                                a = o.popper,
                                s = o.reference,
                                l = -1 !== ["left", "right"].indexOf(r),
                                u = l ? "height" : "width",
                                c = l ? "Top" : "Left",
                                f = c.toLowerCase(),
                                d = l ? "left" : "top",
                                h = l ? "bottom" : "right",
                                p = ie(i)[u];
                            s[h] - p < a[f] && (e.offsets.popper[f] -= a[f] - (s[h] - p)), s[f] + p > a[h] && (e.offsets.popper[f] += s[f] + p - a[h]), (e.offsets.popper = K(e.offsets.popper));
                            var m = s[f] + s[u] / 2 - p / 2,
                                g = L(e.instance.popper),
                                v = parseFloat(g["margin" + c]),
                                y = parseFloat(g["border" + c + "Width"]),
                                b = m - e.offsets.popper[f] - v - y;
                            return (b = Math.max(Math.min(a[u] - p, b), 0)), (e.arrowElement = i), (e.offsets.arrow = (X((n = {}), f, Math.round(b)), X(n, d, ""), n)), e;
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (le(e.instance.modifiers, "inner")) return e;
                            if (e.flipped && e.placement === e.originalPlacement) return e;
                            var n = ee(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
                                i = e.placement.split("-")[0],
                                r = re(i),
                                o = e.placement.split("-")[1] || "",
                                a = [];
                            switch (t.behavior) {
                                case _e.FLIP:
                                    a = [i, r];
                                    break;
                                case _e.CLOCKWISE:
                                    a = be(i);
                                    break;
                                case _e.COUNTERCLOCKWISE:
                                    a = be(i, !0);
                                    break;
                                default:
                                    a = t.behavior;
                            }
                            return (
                                a.forEach(function (s, l) {
                                    if (i !== s || a.length === l + 1) return e;
                                    (i = e.placement.split("-")[0]), (r = re(i));
                                    var u = e.offsets.popper,
                                        c = e.offsets.reference,
                                        f = Math.floor,
                                        d = ("left" === i && f(u.right) > f(c.left)) || ("right" === i && f(u.left) < f(c.right)) || ("top" === i && f(u.bottom) > f(c.top)) || ("bottom" === i && f(u.top) < f(c.bottom)),
                                        h = f(u.left) < f(n.left),
                                        p = f(u.right) > f(n.right),
                                        m = f(u.top) < f(n.top),
                                        g = f(u.bottom) > f(n.bottom),
                                        v = ("left" === i && h) || ("right" === i && p) || ("top" === i && m) || ("bottom" === i && g),
                                        y = -1 !== ["top", "bottom"].indexOf(i),
                                        b = !!t.flipVariations && ((y && "start" === o && h) || (y && "end" === o && p) || (!y && "start" === o && m) || (!y && "end" === o && g)),
                                        _ = !!t.flipVariationsByContent && ((y && "start" === o && p) || (y && "end" === o && h) || (!y && "start" === o && g) || (!y && "end" === o && m)),
                                        w = b || _;
                                    (d || v || w) &&
                                        ((e.flipped = !0),
                                        (d || v) && (i = a[l + 1]),
                                        w &&
                                            (o = (function (e) {
                                                return "end" === e ? "start" : "start" === e ? "end" : e;
                                            })(o)),
                                        (e.placement = i + (o ? "-" + o : "")),
                                        (e.offsets.popper = Y({}, e.offsets.popper, oe(e.instance.popper, e.offsets.reference, e.placement))),
                                        (e = se(e.instance.modifiers, e, "flip")));
                                }),
                                e
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                n = t.split("-")[0],
                                i = e.offsets,
                                r = i.popper,
                                o = i.reference,
                                a = -1 !== ["left", "right"].indexOf(n),
                                s = -1 === ["top", "left"].indexOf(n);
                            return (r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0)), (e.placement = re(t)), (e.offsets.popper = K(r)), e;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!ge(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                n = ae(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var n = t.x,
                                i = t.y,
                                r = e.offsets.popper,
                                o = ae(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration;
                            void 0 !== o && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var a = void 0 !== o ? o : t.gpuAcceleration,
                                s = M(e.instance.popper),
                                l = G(s),
                                u = { position: r.position },
                                c = (function (e, t) {
                                    var n = e.offsets,
                                        i = n.popper,
                                        r = n.reference,
                                        o = Math.round,
                                        a = Math.floor,
                                        s = function (e) {
                                            return e;
                                        },
                                        l = o(r.width),
                                        u = o(i.width),
                                        c = -1 !== ["left", "right"].indexOf(e.placement),
                                        f = -1 !== e.placement.indexOf("-"),
                                        d = t ? (c || f || l % 2 == u % 2 ? o : a) : s,
                                        h = t ? o : s;
                                    return { left: d(l % 2 == 1 && u % 2 == 1 && !f && t ? i.left - 1 : i.left), top: h(i.top), bottom: h(i.bottom), right: d(i.right) };
                                })(e, window.devicePixelRatio < 2 || !me),
                                f = "bottom" === n ? "top" : "bottom",
                                d = "right" === i ? "left" : "right",
                                h = ue("transform"),
                                p = void 0,
                                m = void 0;
                            if (
                                ((m = "bottom" === f ? ("HTML" === s.nodeName ? -s.clientHeight + c.bottom : -l.height + c.bottom) : c.top),
                                (p = "right" === d ? ("HTML" === s.nodeName ? -s.clientWidth + c.right : -l.width + c.right) : c.left),
                                a && h)
                            )
                                (u[h] = "translate3d(" + p + "px, " + m + "px, 0)"), (u[f] = 0), (u[d] = 0), (u.willChange = "transform");
                            else {
                                var g = "bottom" === f ? -1 : 1,
                                    v = "right" === d ? -1 : 1;
                                (u[f] = m * g), (u[d] = p * v), (u.willChange = f + ", " + d);
                            }
                            var y = { "x-placement": e.placement };
                            return (e.attributes = Y({}, y, e.attributes)), (e.styles = Y({}, u, e.styles)), (e.arrowStyles = Y({}, e.offsets.arrow, e.arrowStyles)), e;
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, n;
                            return (
                                pe(e.instance.popper, e.styles),
                                (t = e.instance.popper),
                                (n = e.attributes),
                                Object.keys(n).forEach(function (e) {
                                    !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e);
                                }),
                                e.arrowElement && Object.keys(e.arrowStyles).length && pe(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, n, i, r) {
                            var o = ne(r, t, e, n.positionFixed),
                                a = te(n.placement, o, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                            return t.setAttribute("x-placement", a), pe(t, { position: n.positionFixed ? "fixed" : "absolute" }), n;
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            xe = (function () {
                function e(t, n) {
                    var i = this,
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    z(this, e),
                        (this.scheduleUpdate = function () {
                            return requestAnimationFrame(i.update);
                        }),
                        (this.update = D(this.update.bind(this))),
                        (this.options = Y({}, e.Defaults, r)),
                        (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                        (this.reference = t && t.jquery ? t[0] : t),
                        (this.popper = n && n.jquery ? n[0] : n),
                        (this.options.modifiers = {}),
                        Object.keys(Y({}, e.Defaults.modifiers, r.modifiers)).forEach(function (t) {
                            i.options.modifiers[t] = Y({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {});
                        }),
                        (this.modifiers = Object.keys(this.options.modifiers)
                            .map(function (e) {
                                return Y({ name: e }, i.options.modifiers[e]);
                            })
                            .sort(function (e, t) {
                                return e.order - t.order;
                            })),
                        this.modifiers.forEach(function (e) {
                            e.enabled && j(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                        }),
                        this.update();
                    var o = this.options.eventsEnabled;
                    o && this.enableEventListeners(), (this.state.eventsEnabled = o);
                }
                return (
                    V(e, [
                        {
                            key: "update",
                            value: function () {
                                return function () {
                                    if (!this.state.isDestroyed) {
                                        var e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} };
                                        (e.offsets.reference = ne(this.state, this.popper, this.reference, this.options.positionFixed)),
                                            (e.placement = te(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                                            (e.originalPlacement = e.placement),
                                            (e.positionFixed = this.options.positionFixed),
                                            (e.offsets.popper = oe(this.popper, e.offsets.reference, e.placement)),
                                            (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                                            (e = se(this.modifiers, e)),
                                            this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e));
                                    }
                                }.call(this);
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                return function () {
                                    return (
                                        (this.state.isDestroyed = !0),
                                        le(this.modifiers, "applyStyle") &&
                                            (this.popper.removeAttribute("x-placement"),
                                            (this.popper.style.position = ""),
                                            (this.popper.style.top = ""),
                                            (this.popper.style.left = ""),
                                            (this.popper.style.right = ""),
                                            (this.popper.style.bottom = ""),
                                            (this.popper.style.willChange = ""),
                                            (this.popper.style[ue("transform")] = "")),
                                        this.disableEventListeners(),
                                        this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                        this
                                    );
                                }.call(this);
                            },
                        },
                        {
                            key: "enableEventListeners",
                            value: function () {
                                return function () {
                                    this.state.eventsEnabled || (this.state = fe(this.reference, this.options, this.state, this.scheduleUpdate));
                                }.call(this);
                            },
                        },
                        {
                            key: "disableEventListeners",
                            value: function () {
                                return de.call(this);
                            },
                        },
                    ]),
                    e
                );
            })();
        (xe.Utils = ("undefined" != typeof window ? window : global).PopperUtils), (xe.placements = ve), (xe.Defaults = Ee);
        var Te = "dropdown",
            Ce = i.default.fn[Te],
            Se = new RegExp("38|40|27"),
            ke = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
            Ae = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
            Ne = (function () {
                function e(e, t) {
                    (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                }
                var t = e.prototype;
                return (
                    (t.toggle = function () {
                        if (!this._element.disabled && !i.default(this._element).hasClass("disabled")) {
                            var t = i.default(this._menu).hasClass("show");
                            e._clearMenus(), t || this.show(!0);
                        }
                    }),
                    (t.show = function (t) {
                        if ((void 0 === t && (t = !1), !(this._element.disabled || i.default(this._element).hasClass("disabled") || i.default(this._menu).hasClass("show")))) {
                            var n = { relatedTarget: this._element },
                                r = i.default.Event("show.bs.dropdown", n),
                                o = e._getParentFromElement(this._element);
                            if ((i.default(o).trigger(r), !r.isDefaultPrevented())) {
                                if (!this._inNavbar && t) {
                                    if (void 0 === xe) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? (a = o) : u.isElement(this._config.reference) && ((a = this._config.reference), void 0 !== this._config.reference.jquery && (a = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && i.default(o).addClass("position-static"),
                                        (this._popper = new xe(a, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === i.default(o).closest(".navbar-nav").length && i.default(document.body).children().on("mouseover", null, i.default.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    i.default(this._menu).toggleClass("show"),
                                    i.default(o).toggleClass("show").trigger(i.default.Event("shown.bs.dropdown", n));
                            }
                        }
                    }),
                    (t.hide = function () {
                        if (!this._element.disabled && !i.default(this._element).hasClass("disabled") && i.default(this._menu).hasClass("show")) {
                            var t = { relatedTarget: this._element },
                                n = i.default.Event("hide.bs.dropdown", t),
                                r = e._getParentFromElement(this._element);
                            i.default(r).trigger(n),
                                n.isDefaultPrevented() || (this._popper && this._popper.destroy(), i.default(this._menu).toggleClass("show"), i.default(r).toggleClass("show").trigger(i.default.Event("hidden.bs.dropdown", t)));
                        }
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.dropdown"), i.default(this._element).off(".bs.dropdown"), (this._element = null), (this._menu = null), null !== this._popper && (this._popper.destroy(), (this._popper = null));
                    }),
                    (t.update = function () {
                        (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (t._addEventListeners = function () {
                        var e = this;
                        i.default(this._element).on("click.bs.dropdown", function (t) {
                            t.preventDefault(), t.stopPropagation(), e.toggle();
                        });
                    }),
                    (t._getConfig = function (e) {
                        return (e = a({}, this.constructor.Default, i.default(this._element).data(), e)), u.typeCheckConfig(Te, e, this.constructor.DefaultType), e;
                    }),
                    (t._getMenuElement = function () {
                        if (!this._menu) {
                            var t = e._getParentFromElement(this._element);
                            t && (this._menu = t.querySelector(".dropdown-menu"));
                        }
                        return this._menu;
                    }),
                    (t._getPlacement = function () {
                        var e = i.default(this._element.parentNode),
                            t = "bottom-start";
                        return (
                            e.hasClass("dropup")
                                ? (t = i.default(this._menu).hasClass("dropdown-menu-right") ? "top-end" : "top-start")
                                : e.hasClass("dropright")
                                ? (t = "right-start")
                                : e.hasClass("dropleft")
                                ? (t = "left-start")
                                : i.default(this._menu).hasClass("dropdown-menu-right") && (t = "bottom-end"),
                            t
                        );
                    }),
                    (t._detectNavbar = function () {
                        return i.default(this._element).closest(".navbar").length > 0;
                    }),
                    (t._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = a({}, t.offsets, e._config.offset(t.offsets, e._element) || {})), t;
                                  })
                                : (t.offset = this._config.offset),
                            t
                        );
                    }),
                    (t._getPopperConfig = function () {
                        var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                        return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), a({}, e, this._config.popperConfig);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this).data("bs.dropdown");
                            if ((n || ((n = new e(this, "object" == typeof t ? t : null)), i.default(this).data("bs.dropdown", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }),
                    (e._clearMenus = function (t) {
                        if (!t || (3 !== t.which && ("keyup" !== t.type || 9 === t.which)))
                            for (var n = [].slice.call(document.querySelectorAll('[data-toggle="dropdown"]')), r = 0, o = n.length; r < o; r++) {
                                var a = e._getParentFromElement(n[r]),
                                    s = i.default(n[r]).data("bs.dropdown"),
                                    l = { relatedTarget: n[r] };
                                if ((t && "click" === t.type && (l.clickEvent = t), s)) {
                                    var u = s._menu;
                                    if (i.default(a).hasClass("show") && !(t && (("click" === t.type && /input|textarea/i.test(t.target.tagName)) || ("keyup" === t.type && 9 === t.which)) && i.default.contains(a, t.target))) {
                                        var c = i.default.Event("hide.bs.dropdown", l);
                                        i.default(a).trigger(c),
                                            c.isDefaultPrevented() ||
                                                ("ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop),
                                                n[r].setAttribute("aria-expanded", "false"),
                                                s._popper && s._popper.destroy(),
                                                i.default(u).removeClass("show"),
                                                i.default(a).removeClass("show").trigger(i.default.Event("hidden.bs.dropdown", l)));
                                    }
                                }
                            }
                    }),
                    (e._getParentFromElement = function (e) {
                        var t,
                            n = u.getSelectorFromElement(e);
                        return n && (t = document.querySelector(n)), t || e.parentNode;
                    }),
                    (e._dataApiKeydownHandler = function (t) {
                        if (
                            (/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || (27 !== t.which && ((40 !== t.which && 38 !== t.which) || i.default(t.target).closest(".dropdown-menu").length))) : Se.test(t.which)) &&
                            !this.disabled &&
                            !i.default(this).hasClass("disabled")
                        ) {
                            var n = e._getParentFromElement(this),
                                r = i.default(n).hasClass("show");
                            if (r || 27 !== t.which) {
                                if ((t.preventDefault(), t.stopPropagation(), !r || 27 === t.which || 32 === t.which))
                                    return 27 === t.which && i.default(n.querySelector('[data-toggle="dropdown"]')).trigger("focus"), void i.default(this).trigger("click");
                                var o = [].slice.call(n.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
                                    return i.default(e).is(":visible");
                                });
                                if (0 !== o.length) {
                                    var a = o.indexOf(t.target);
                                    38 === t.which && a > 0 && a--, 40 === t.which && a < o.length - 1 && a++, a < 0 && (a = 0), o[a].focus();
                                }
                            }
                        }
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ke;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ae;
                            },
                        },
                    ]),
                    e
                );
            })();
        i
            .default(document)
            .on("keydown.bs.dropdown.data-api", '[data-toggle="dropdown"]', Ne._dataApiKeydownHandler)
            .on("keydown.bs.dropdown.data-api", ".dropdown-menu", Ne._dataApiKeydownHandler)
            .on("click.bs.dropdown.data-api keyup.bs.dropdown.data-api", Ne._clearMenus)
            .on("click.bs.dropdown.data-api", '[data-toggle="dropdown"]', function (e) {
                e.preventDefault(), e.stopPropagation(), Ne._jQueryInterface.call(i.default(this), "toggle");
            })
            .on("click.bs.dropdown.data-api", ".dropdown form", function (e) {
                e.stopPropagation();
            }),
            (i.default.fn[Te] = Ne._jQueryInterface),
            (i.default.fn[Te].Constructor = Ne),
            (i.default.fn[Te].noConflict = function () {
                return (i.default.fn[Te] = Ce), Ne._jQueryInterface;
            });
        var De = i.default.fn.modal,
            je = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            Le = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            Oe = ".modal-dialog",
            Ie = (function () {
                function e(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = e.querySelector(Oe)),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var t = e.prototype;
                return (
                    (t.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (t.show = function (e) {
                        var t = this;
                        if (!this._isShown && !this._isTransitioning) {
                            i.default(this._element).hasClass("fade") && (this._isTransitioning = !0);
                            var n = i.default.Event("show.bs.modal", { relatedTarget: e });
                            i.default(this._element).trigger(n),
                                this._isShown ||
                                    n.isDefaultPrevented() ||
                                    ((this._isShown = !0),
                                    this._checkScrollbar(),
                                    this._setScrollbar(),
                                    this._adjustDialog(),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    i.default(this._element).on("click.dismiss.bs.modal", '[data-dismiss="modal"]', function (e) {
                                        return t.hide(e);
                                    }),
                                    i.default(this._dialog).on("mousedown.dismiss.bs.modal", function () {
                                        i.default(t._element).one("mouseup.dismiss.bs.modal", function (e) {
                                            i.default(e.target).is(t._element) && (t._ignoreBackdropClick = !0);
                                        });
                                    }),
                                    this._showBackdrop(function () {
                                        return t._showElement(e);
                                    }));
                        }
                    }),
                    (t.hide = function (e) {
                        var t = this;
                        if ((e && e.preventDefault(), this._isShown && !this._isTransitioning)) {
                            var n = i.default.Event("hide.bs.modal");
                            if ((i.default(this._element).trigger(n), this._isShown && !n.isDefaultPrevented())) {
                                this._isShown = !1;
                                var r = i.default(this._element).hasClass("fade");
                                if (
                                    (r && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    i.default(document).off("focusin.bs.modal"),
                                    i.default(this._element).removeClass("show"),
                                    i.default(this._element).off("click.dismiss.bs.modal"),
                                    i.default(this._dialog).off("mousedown.dismiss.bs.modal"),
                                    r)
                                ) {
                                    var o = u.getTransitionDurationFromElement(this._element);
                                    i.default(this._element)
                                        .one(u.TRANSITION_END, function (e) {
                                            return t._hideModal(e);
                                        })
                                        .emulateTransitionEnd(o);
                                } else this._hideModal();
                            }
                        }
                    }),
                    (t.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return i.default(e).off(".bs.modal");
                        }),
                            i.default(document).off("focusin.bs.modal"),
                            i.default.removeData(this._element, "bs.modal"),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (t.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (t._getConfig = function (e) {
                        return (e = a({}, je, e)), u.typeCheckConfig("modal", e, Le), e;
                    }),
                    (t._triggerBackdropTransition = function () {
                        var e = this,
                            t = i.default.Event("hidePrevented.bs.modal");
                        if ((i.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                            var n = this._element.scrollHeight > document.documentElement.clientHeight;
                            n || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
                            var r = u.getTransitionDurationFromElement(this._dialog);
                            i.default(this._element).off(u.TRANSITION_END),
                                i
                                    .default(this._element)
                                    .one(u.TRANSITION_END, function () {
                                        e._element.classList.remove("modal-static"),
                                            n ||
                                                i
                                                    .default(e._element)
                                                    .one(u.TRANSITION_END, function () {
                                                        e._element.style.overflowY = "";
                                                    })
                                                    .emulateTransitionEnd(e._element, r);
                                    })
                                    .emulateTransitionEnd(r),
                                this._element.focus();
                        }
                    }),
                    (t._showElement = function (e) {
                        var t = this,
                            n = i.default(this._element).hasClass("fade"),
                            r = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            this._element.setAttribute("role", "dialog"),
                            i.default(this._dialog).hasClass("modal-dialog-scrollable") && r ? (r.scrollTop = 0) : (this._element.scrollTop = 0),
                            n && u.reflow(this._element),
                            i.default(this._element).addClass("show"),
                            this._config.focus && this._enforceFocus();
                        var o = i.default.Event("shown.bs.modal", { relatedTarget: e }),
                            a = function () {
                                t._config.focus && t._element.focus(), (t._isTransitioning = !1), i.default(t._element).trigger(o);
                            };
                        if (n) {
                            var s = u.getTransitionDurationFromElement(this._dialog);
                            i.default(this._dialog).one(u.TRANSITION_END, a).emulateTransitionEnd(s);
                        } else a();
                    }),
                    (t._enforceFocus = function () {
                        var e = this;
                        i.default(document)
                            .off("focusin.bs.modal")
                            .on("focusin.bs.modal", function (t) {
                                document !== t.target && e._element !== t.target && 0 === i.default(e._element).has(t.target).length && e._element.focus();
                            });
                    }),
                    (t._setEscapeEvent = function () {
                        var e = this;
                        this._isShown
                            ? i.default(this._element).on("keydown.dismiss.bs.modal", function (t) {
                                  e._config.keyboard && 27 === t.which ? (t.preventDefault(), e.hide()) : e._config.keyboard || 27 !== t.which || e._triggerBackdropTransition();
                              })
                            : this._isShown || i.default(this._element).off("keydown.dismiss.bs.modal");
                    }),
                    (t._setResizeEvent = function () {
                        var e = this;
                        this._isShown
                            ? i.default(window).on("resize.bs.modal", function (t) {
                                  return e.handleUpdate(t);
                              })
                            : i.default(window).off("resize.bs.modal");
                    }),
                    (t._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                i.default(document.body).removeClass("modal-open"), e._resetAdjustments(), e._resetScrollbar(), i.default(e._element).trigger("hidden.bs.modal");
                            });
                    }),
                    (t._removeBackdrop = function () {
                        this._backdrop && (i.default(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (t._showBackdrop = function (e) {
                        var t = this,
                            n = i.default(this._element).hasClass("fade") ? "fade" : "";
                        if (this._isShown && this._config.backdrop) {
                            if (
                                ((this._backdrop = document.createElement("div")),
                                (this._backdrop.className = "modal-backdrop"),
                                n && this._backdrop.classList.add(n),
                                i.default(this._backdrop).appendTo(document.body),
                                i.default(this._element).on("click.dismiss.bs.modal", function (e) {
                                    t._ignoreBackdropClick ? (t._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._triggerBackdropTransition() : t.hide());
                                }),
                                n && u.reflow(this._backdrop),
                                i.default(this._backdrop).addClass("show"),
                                !e)
                            )
                                return;
                            if (!n) return void e();
                            var r = u.getTransitionDurationFromElement(this._backdrop);
                            i.default(this._backdrop).one(u.TRANSITION_END, e).emulateTransitionEnd(r);
                        } else if (!this._isShown && this._backdrop) {
                            i.default(this._backdrop).removeClass("show");
                            var o = function () {
                                t._removeBackdrop(), e && e();
                            };
                            if (i.default(this._element).hasClass("fade")) {
                                var a = u.getTransitionDurationFromElement(this._backdrop);
                                i.default(this._backdrop).one(u.TRANSITION_END, o).emulateTransitionEnd(a);
                            } else o();
                        } else e && e();
                    }),
                    (t._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (t._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (t._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (t._setScrollbar = function () {
                        var e = this;
                        if (this._isBodyOverflowing) {
                            var t = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")),
                                n = [].slice.call(document.querySelectorAll(".sticky-top"));
                            i.default(t).each(function (t, n) {
                                var r = n.style.paddingRight,
                                    o = i.default(n).css("padding-right");
                                i.default(n)
                                    .data("padding-right", r)
                                    .css("padding-right", parseFloat(o) + e._scrollbarWidth + "px");
                            }),
                                i.default(n).each(function (t, n) {
                                    var r = n.style.marginRight,
                                        o = i.default(n).css("margin-right");
                                    i.default(n)
                                        .data("margin-right", r)
                                        .css("margin-right", parseFloat(o) - e._scrollbarWidth + "px");
                                });
                            var r = document.body.style.paddingRight,
                                o = i.default(document.body).css("padding-right");
                            i.default(document.body)
                                .data("padding-right", r)
                                .css("padding-right", parseFloat(o) + this._scrollbarWidth + "px");
                        }
                        i.default(document.body).addClass("modal-open");
                    }),
                    (t._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"));
                        i.default(e).each(function (e, t) {
                            var n = i.default(t).data("padding-right");
                            i.default(t).removeData("padding-right"), (t.style.paddingRight = n || "");
                        });
                        var t = [].slice.call(document.querySelectorAll(".sticky-top"));
                        i.default(t).each(function (e, t) {
                            var n = i.default(t).data("margin-right");
                            void 0 !== n && i.default(t).css("margin-right", n).removeData("margin-right");
                        });
                        var n = i.default(document.body).data("padding-right");
                        i.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = n || "");
                    }),
                    (t._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (e._jQueryInterface = function (t, n) {
                        return this.each(function () {
                            var r = i.default(this).data("bs.modal"),
                                o = a({}, je, i.default(this).data(), "object" == typeof t && t ? t : {});
                            if ((r || ((r = new e(this, o)), i.default(this).data("bs.modal", r)), "string" == typeof t)) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t](n);
                            } else o.show && r.show(n);
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return je;
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var t,
                n = this,
                r = u.getSelectorFromElement(this);
            r && (t = document.querySelector(r));
            var o = i.default(t).data("bs.modal") ? "toggle" : a({}, i.default(t).data(), i.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
            var s = i.default(t).one("show.bs.modal", function (e) {
                e.isDefaultPrevented() ||
                    s.one("hidden.bs.modal", function () {
                        i.default(n).is(":visible") && n.focus();
                    });
            });
            Ie._jQueryInterface.call(i.default(t), o, this);
        }),
            (i.default.fn.modal = Ie._jQueryInterface),
            (i.default.fn.modal.Constructor = Ie),
            (i.default.fn.modal.noConflict = function () {
                return (i.default.fn.modal = De), Ie._jQueryInterface;
            });
        var qe = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            Pe = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            He = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            Re = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function Me(e, t, n) {
            if (0 === e.length) return e;
            if (n && "function" == typeof n) return n(e);
            for (
                var i = new window.DOMParser().parseFromString(e, "text/html"),
                    r = Object.keys(t),
                    o = [].slice.call(i.body.querySelectorAll("*")),
                    a = function (e, n) {
                        var i = o[e],
                            a = i.nodeName.toLowerCase();
                        if (-1 === r.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                        var s = [].slice.call(i.attributes),
                            l = [].concat(t["*"] || [], t[a] || []);
                        s.forEach(function (e) {
                            (function (e, t) {
                                var n = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(n)) return -1 === qe.indexOf(n) || Boolean(e.nodeValue.match(He) || e.nodeValue.match(Re));
                                for (
                                    var i = t.filter(function (e) {
                                            return e instanceof RegExp;
                                        }),
                                        r = 0,
                                        o = i.length;
                                    r < o;
                                    r++
                                )
                                    if (n.match(i[r])) return !0;
                                return !1;
                            })(e, l) || i.removeAttribute(e.nodeName);
                        });
                    },
                    s = 0,
                    l = o.length;
                s < l;
                s++
            )
                a(s);
            return i.body.innerHTML;
        }
        var Fe = "tooltip",
            Be = i.default.fn.tooltip,
            We = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            Ue = ["sanitize", "whiteList", "sanitizeFn"],
            Qe = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)",
            },
            $e = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            ze = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: Pe,
                popperConfig: null,
            },
            Ve = {
                HIDE: "hide.bs.tooltip",
                HIDDEN: "hidden.bs.tooltip",
                SHOW: "show.bs.tooltip",
                SHOWN: "shown.bs.tooltip",
                INSERTED: "inserted.bs.tooltip",
                CLICK: "click.bs.tooltip",
                FOCUSIN: "focusin.bs.tooltip",
                FOCUSOUT: "focusout.bs.tooltip",
                MOUSEENTER: "mouseenter.bs.tooltip",
                MOUSELEAVE: "mouseleave.bs.tooltip",
            },
            Xe = (function () {
                function e(e, t) {
                    if (void 0 === xe) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners();
                }
                var t = e.prototype;
                return (
                    (t.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (t.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (t.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (t.toggle = function (e) {
                        if (this._isEnabled)
                            if (e) {
                                var t = this.constructor.DATA_KEY,
                                    n = i.default(e.currentTarget).data(t);
                                n || ((n = new this.constructor(e.currentTarget, this._getDelegateConfig())), i.default(e.currentTarget).data(t, n)),
                                    (n._activeTrigger.click = !n._activeTrigger.click),
                                    n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
                            } else {
                                if (i.default(this.getTipElement()).hasClass("show")) return void this._leave(null, this);
                                this._enter(null, this);
                            }
                    }),
                    (t.dispose = function () {
                        clearTimeout(this._timeout),
                            i.default.removeData(this.element, this.constructor.DATA_KEY),
                            i.default(this.element).off(this.constructor.EVENT_KEY),
                            i.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                            this.tip && i.default(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null),
                            this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (t.show = function () {
                        var e = this;
                        if ("none" === i.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var t = i.default.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            i.default(this.element).trigger(t);
                            var n = u.findShadowRoot(this.element),
                                r = i.default.contains(null !== n ? n : this.element.ownerDocument.documentElement, this.element);
                            if (t.isDefaultPrevented() || !r) return;
                            var o = this.getTipElement(),
                                a = u.getUID(this.constructor.NAME);
                            o.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && i.default(o).addClass("fade");
                            var s = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                                l = this._getAttachment(s);
                            this.addAttachmentClass(l);
                            var c = this._getContainer();
                            i.default(o).data(this.constructor.DATA_KEY, this),
                                i.default.contains(this.element.ownerDocument.documentElement, this.tip) || i.default(o).appendTo(c),
                                i.default(this.element).trigger(this.constructor.Event.INSERTED),
                                (this._popper = new xe(this.element, o, this._getPopperConfig(l))),
                                i.default(o).addClass("show"),
                                i.default(o).addClass(this.config.customClass),
                                "ontouchstart" in document.documentElement && i.default(document.body).children().on("mouseover", null, i.default.noop);
                            var f = function () {
                                e.config.animation && e._fixTransition();
                                var t = e._hoverState;
                                (e._hoverState = null), i.default(e.element).trigger(e.constructor.Event.SHOWN), "out" === t && e._leave(null, e);
                            };
                            if (i.default(this.tip).hasClass("fade")) {
                                var d = u.getTransitionDurationFromElement(this.tip);
                                i.default(this.tip).one(u.TRANSITION_END, f).emulateTransitionEnd(d);
                            } else f();
                        }
                    }),
                    (t.hide = function (e) {
                        var t = this,
                            n = this.getTipElement(),
                            r = i.default.Event(this.constructor.Event.HIDE),
                            o = function () {
                                "show" !== t._hoverState && n.parentNode && n.parentNode.removeChild(n),
                                    t._cleanTipClass(),
                                    t.element.removeAttribute("aria-describedby"),
                                    i.default(t.element).trigger(t.constructor.Event.HIDDEN),
                                    null !== t._popper && t._popper.destroy(),
                                    e && e();
                            };
                        if ((i.default(this.element).trigger(r), !r.isDefaultPrevented())) {
                            if (
                                (i.default(n).removeClass("show"),
                                "ontouchstart" in document.documentElement && i.default(document.body).children().off("mouseover", null, i.default.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger.focus = !1),
                                (this._activeTrigger.hover = !1),
                                i.default(this.tip).hasClass("fade"))
                            ) {
                                var a = u.getTransitionDurationFromElement(n);
                                i.default(n).one(u.TRANSITION_END, o).emulateTransitionEnd(a);
                            } else o();
                            this._hoverState = "";
                        }
                    }),
                    (t.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (t.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (t.addAttachmentClass = function (e) {
                        i.default(this.getTipElement()).addClass("bs-tooltip-" + e);
                    }),
                    (t.getTipElement = function () {
                        return (this.tip = this.tip || i.default(this.config.template)[0]), this.tip;
                    }),
                    (t.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(i.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), i.default(e).removeClass("fade show");
                    }),
                    (t.setElementContent = function (e, t) {
                        "object" != typeof t || (!t.nodeType && !t.jquery)
                            ? this.config.html
                                ? (this.config.sanitize && (t = Me(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t))
                                : e.text(t)
                            : this.config.html
                            ? i.default(t).parent().is(e) || e.empty().append(t)
                            : e.text(i.default(t).text());
                    }),
                    (t.getTitle = function () {
                        var e = this.element.getAttribute("data-original-title");
                        return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e;
                    }),
                    (t._getPopperConfig = function (e) {
                        var t = this;
                        return a(
                            {},
                            {
                                placement: e,
                                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                                },
                                onUpdate: function (e) {
                                    return t._handlePopperPlacementChange(e);
                                },
                            },
                            this.config.popperConfig
                        );
                    }),
                    (t._getOffset = function () {
                        var e = this,
                            t = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (t.fn = function (t) {
                                      return (t.offsets = a({}, t.offsets, e.config.offset(t.offsets, e.element) || {})), t;
                                  })
                                : (t.offset = this.config.offset),
                            t
                        );
                    }),
                    (t._getContainer = function () {
                        return !1 === this.config.container ? document.body : u.isElement(this.config.container) ? i.default(this.config.container) : i.default(document).find(this.config.container);
                    }),
                    (t._getAttachment = function (e) {
                        return $e[e.toUpperCase()];
                    }),
                    (t._setListeners = function () {
                        var e = this;
                        this.config.trigger.split(" ").forEach(function (t) {
                            if ("click" === t)
                                i.default(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                    return e.toggle(t);
                                });
                            else if ("manual" !== t) {
                                var n = "hover" === t ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                                    r = "hover" === t ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                i.default(e.element)
                                    .on(n, e.config.selector, function (t) {
                                        return e._enter(t);
                                    })
                                    .on(r, e.config.selector, function (t) {
                                        return e._leave(t);
                                    });
                            }
                        }),
                            (this._hideModalHandler = function () {
                                e.element && e.hide();
                            }),
                            i.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                            this.config.selector ? (this.config = a({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                    }),
                    (t._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                    }),
                    (t._enter = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || i.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), i.default(e.currentTarget).data(n, t)),
                            e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0),
                            i.default(t.getTipElement()).hasClass("show") || "show" === t._hoverState
                                ? (t._hoverState = "show")
                                : (clearTimeout(t._timeout),
                                  (t._hoverState = "show"),
                                  t.config.delay && t.config.delay.show
                                      ? (t._timeout = setTimeout(function () {
                                            "show" === t._hoverState && t.show();
                                        }, t.config.delay.show))
                                      : t.show());
                    }),
                    (t._leave = function (e, t) {
                        var n = this.constructor.DATA_KEY;
                        (t = t || i.default(e.currentTarget).data(n)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), i.default(e.currentTarget).data(n, t)),
                            e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = !1),
                            t._isWithActiveTrigger() ||
                                (clearTimeout(t._timeout),
                                (t._hoverState = "out"),
                                t.config.delay && t.config.delay.hide
                                    ? (t._timeout = setTimeout(function () {
                                          "out" === t._hoverState && t.hide();
                                      }, t.config.delay.hide))
                                    : t.hide());
                    }),
                    (t._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1;
                    }),
                    (t._getConfig = function (e) {
                        var t = i.default(this.element).data();
                        return (
                            Object.keys(t).forEach(function (e) {
                                -1 !== Ue.indexOf(e) && delete t[e];
                            }),
                            "number" == typeof (e = a({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }),
                            "number" == typeof e.title && (e.title = e.title.toString()),
                            "number" == typeof e.content && (e.content = e.content.toString()),
                            u.typeCheckConfig(Fe, e, this.constructor.DefaultType),
                            e.sanitize && (e.template = Me(e.template, e.whiteList, e.sanitizeFn)),
                            e
                        );
                    }),
                    (t._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e;
                    }),
                    (t._cleanTipClass = function () {
                        var e = i.default(this.getTipElement()),
                            t = e.attr("class").match(We);
                        null !== t && t.length && e.removeClass(t.join(""));
                    }),
                    (t._handlePopperPlacementChange = function (e) {
                        (this.tip = e.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
                    }),
                    (t._fixTransition = function () {
                        var e = this.getTipElement(),
                            t = this.config.animation;
                        null === e.getAttribute("x-placement") && (i.default(e).removeClass("fade"), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = t));
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this),
                                r = n.data("bs.tooltip"),
                                o = "object" == typeof t && t;
                            if ((r || !/dispose|hide/.test(t)) && (r || ((r = new e(this, o)), n.data("bs.tooltip", r)), "string" == typeof t)) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t]();
                            }
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ze;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Fe;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.tooltip";
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Ve;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return ".bs.tooltip";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Qe;
                            },
                        },
                    ]),
                    e
                );
            })();
        (i.default.fn.tooltip = Xe._jQueryInterface),
            (i.default.fn.tooltip.Constructor = Xe),
            (i.default.fn.tooltip.noConflict = function () {
                return (i.default.fn.tooltip = Be), Xe._jQueryInterface;
            });
        var Ye = "popover",
            Ke = i.default.fn.popover,
            Ge = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            Je = a({}, Xe.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            Ze = a({}, Xe.DefaultType, { content: "(string|element|function)" }),
            et = {
                HIDE: "hide.bs.popover",
                HIDDEN: "hidden.bs.popover",
                SHOW: "show.bs.popover",
                SHOWN: "shown.bs.popover",
                INSERTED: "inserted.bs.popover",
                CLICK: "click.bs.popover",
                FOCUSIN: "focusin.bs.popover",
                FOCUSOUT: "focusout.bs.popover",
                MOUSEENTER: "mouseenter.bs.popover",
                MOUSELEAVE: "mouseleave.bs.popover",
            },
            tt = (function (e) {
                var t, n;
                function r() {
                    return e.apply(this, arguments) || this;
                }
                (n = e), ((t = r).prototype = Object.create(n.prototype)), (t.prototype.constructor = t), (t.__proto__ = n);
                var a = r.prototype;
                return (
                    (a.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (a.addAttachmentClass = function (e) {
                        i.default(this.getTipElement()).addClass("bs-popover-" + e);
                    }),
                    (a.getTipElement = function () {
                        return (this.tip = this.tip || i.default(this.config.template)[0]), this.tip;
                    }),
                    (a.setContent = function () {
                        var e = i.default(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
                    }),
                    (a._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }),
                    (a._cleanTipClass = function () {
                        var e = i.default(this.getTipElement()),
                            t = e.attr("class").match(Ge);
                        null !== t && t.length > 0 && e.removeClass(t.join(""));
                    }),
                    (r._jQueryInterface = function (e) {
                        return this.each(function () {
                            var t = i.default(this).data("bs.popover"),
                                n = "object" == typeof e ? e : null;
                            if ((t || !/dispose|hide/.test(e)) && (t || ((t = new r(this, n)), i.default(this).data("bs.popover", t)), "string" == typeof e)) {
                                if (void 0 === t[e]) throw new TypeError('No method named "' + e + '"');
                                t[e]();
                            }
                        });
                    }),
                    o(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Je;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Ye;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return "bs.popover";
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return et;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return ".bs.popover";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Ze;
                            },
                        },
                    ]),
                    r
                );
            })(Xe);
        (i.default.fn.popover = tt._jQueryInterface),
            (i.default.fn.popover.Constructor = tt),
            (i.default.fn.popover.noConflict = function () {
                return (i.default.fn.popover = Ke), tt._jQueryInterface;
            });
        var nt = "scrollspy",
            it = i.default.fn[nt],
            rt = { offset: 10, method: "auto", target: "" },
            ot = { offset: "number", method: "string", target: "(string|element)" },
            at = "scroll.bs.scrollspy",
            st = ".nav-link",
            lt = ".list-group-item",
            ut = ".dropdown-item",
            ct = (function () {
                function e(e, t) {
                    var n = this;
                    (this._element = e),
                        (this._scrollElement = "BODY" === e.tagName ? window : e),
                        (this._config = this._getConfig(t)),
                        (this._selector = this._config.target + " " + st + "," + this._config.target + " " + lt + "," + this._config.target + " " + ut),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        i.default(this._scrollElement).on(at, function (e) {
                            return n._process(e);
                        }),
                        this.refresh(),
                        this._process();
                }
                var t = e.prototype;
                return (
                    (t.refresh = function () {
                        var e = this,
                            t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                            n = "auto" === this._config.method ? t : this._config.method,
                            r = "position" === n ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .map(function (e) {
                                    var t,
                                        o = u.getSelectorFromElement(e);
                                    if ((o && (t = document.querySelector(o)), t)) {
                                        var a = t.getBoundingClientRect();
                                        if (a.width || a.height) return [i.default(t)[n]().top + r, o];
                                    }
                                    return null;
                                })
                                .filter(function (e) {
                                    return e;
                                })
                                .sort(function (e, t) {
                                    return e[0] - t[0];
                                })
                                .forEach(function (t) {
                                    e._offsets.push(t[0]), e._targets.push(t[1]);
                                });
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.scrollspy"),
                            i.default(this._scrollElement).off(".bs.scrollspy"),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (t._getConfig = function (e) {
                        if ("string" != typeof (e = a({}, rt, "object" == typeof e && e ? e : {})).target && u.isElement(e.target)) {
                            var t = i.default(e.target).attr("id");
                            t || ((t = u.getUID(nt)), i.default(e.target).attr("id", t)), (e.target = "#" + t);
                        }
                        return u.typeCheckConfig(nt, e, ot), e;
                    }),
                    (t._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }),
                    (t._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (t._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (t._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            n = this._config.offset + t - this._getOffsetHeight();
                        if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                            var i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return (this._activeTarget = null), void this._clear();
                            for (var r = this._offsets.length; r--; ) {
                                this._activeTarget !== this._targets[r] && e >= this._offsets[r] && (void 0 === this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r]);
                            }
                        }
                    }),
                    (t._activate = function (e) {
                        (this._activeTarget = e), this._clear();
                        var t = this._selector.split(",").map(function (t) {
                                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
                            }),
                            n = i.default([].slice.call(document.querySelectorAll(t.join(","))));
                        n.hasClass("dropdown-item")
                            ? (n.closest(".dropdown").find(".dropdown-toggle").addClass("active"), n.addClass("active"))
                            : (n.addClass("active"),
                              n
                                  .parents(".nav, .list-group")
                                  .prev(st + ", " + lt)
                                  .addClass("active"),
                              n.parents(".nav, .list-group").prev(".nav-item").children(st).addClass("active")),
                            i.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: e });
                    }),
                    (t._clear = function () {
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .filter(function (e) {
                                return e.classList.contains("active");
                            })
                            .forEach(function (e) {
                                return e.classList.remove("active");
                            });
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this).data("bs.scrollspy");
                            if ((n || ((n = new e(this, "object" == typeof t && t)), i.default(this).data("bs.scrollspy", n)), "string" == typeof t)) {
                                if (void 0 === n[t]) throw new TypeError('No method named "' + t + '"');
                                n[t]();
                            }
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return rt;
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(window).on("load.bs.scrollspy.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
                var n = i.default(e[t]);
                ct._jQueryInterface.call(n, n.data());
            }
        }),
            (i.default.fn[nt] = ct._jQueryInterface),
            (i.default.fn[nt].Constructor = ct),
            (i.default.fn[nt].noConflict = function () {
                return (i.default.fn[nt] = it), ct._jQueryInterface;
            });
        var ft = i.default.fn.tab,
            dt = (function () {
                function e(e) {
                    this._element = e;
                }
                var t = e.prototype;
                return (
                    (t.show = function () {
                        var e = this;
                        if (!((this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && i.default(this._element).hasClass("active")) || i.default(this._element).hasClass("disabled"))) {
                            var t,
                                n,
                                r = i.default(this._element).closest(".nav, .list-group")[0],
                                o = u.getSelectorFromElement(this._element);
                            if (r) {
                                var a = "UL" === r.nodeName || "OL" === r.nodeName ? "> li > .active" : ".active";
                                n = (n = i.default.makeArray(i.default(r).find(a)))[n.length - 1];
                            }
                            var s = i.default.Event("hide.bs.tab", { relatedTarget: this._element }),
                                l = i.default.Event("show.bs.tab", { relatedTarget: n });
                            if ((n && i.default(n).trigger(s), i.default(this._element).trigger(l), !l.isDefaultPrevented() && !s.isDefaultPrevented())) {
                                o && (t = document.querySelector(o)), this._activate(this._element, r);
                                var c = function () {
                                    var t = i.default.Event("hidden.bs.tab", { relatedTarget: e._element }),
                                        r = i.default.Event("shown.bs.tab", { relatedTarget: n });
                                    i.default(n).trigger(t), i.default(e._element).trigger(r);
                                };
                                t ? this._activate(t, t.parentNode, c) : c();
                            }
                        }
                    }),
                    (t.dispose = function () {
                        i.default.removeData(this._element, "bs.tab"), (this._element = null);
                    }),
                    (t._activate = function (e, t, n) {
                        var r = this,
                            o = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? i.default(t).children(".active") : i.default(t).find("> li > .active"))[0],
                            a = n && o && i.default(o).hasClass("fade"),
                            s = function () {
                                return r._transitionComplete(e, o, n);
                            };
                        if (o && a) {
                            var l = u.getTransitionDurationFromElement(o);
                            i.default(o).removeClass("show").one(u.TRANSITION_END, s).emulateTransitionEnd(l);
                        } else s();
                    }),
                    (t._transitionComplete = function (e, t, n) {
                        if (t) {
                            i.default(t).removeClass("active");
                            var r = i.default(t.parentNode).find("> .dropdown-menu .active")[0];
                            r && i.default(r).removeClass("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
                        }
                        if (
                            (i.default(e).addClass("active"),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                            u.reflow(e),
                            e.classList.contains("fade") && e.classList.add("show"),
                            e.parentNode && i.default(e.parentNode).hasClass("dropdown-menu"))
                        ) {
                            var o = i.default(e).closest(".dropdown")[0];
                            if (o) {
                                var a = [].slice.call(o.querySelectorAll(".dropdown-toggle"));
                                i.default(a).addClass("active");
                            }
                            e.setAttribute("aria-expanded", !0);
                        }
                        n && n();
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this),
                                r = n.data("bs.tab");
                            if ((r || ((r = new e(this)), n.data("bs.tab", r)), "string" == typeof t)) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t]();
                            }
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    e
                );
            })();
        i.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), dt._jQueryInterface.call(i.default(this), "show");
        }),
            (i.default.fn.tab = dt._jQueryInterface),
            (i.default.fn.tab.Constructor = dt),
            (i.default.fn.tab.noConflict = function () {
                return (i.default.fn.tab = ft), dt._jQueryInterface;
            });
        var ht = i.default.fn.toast,
            pt = { animation: "boolean", autohide: "boolean", delay: "number" },
            mt = { animation: !0, autohide: !0, delay: 500 },
            gt = (function () {
                function e(e, t) {
                    (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
                }
                var t = e.prototype;
                return (
                    (t.show = function () {
                        var e = this,
                            t = i.default.Event("show.bs.toast");
                        if ((i.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                            this._clearTimeout(), this._config.animation && this._element.classList.add("fade");
                            var n = function () {
                                e._element.classList.remove("showing"),
                                    e._element.classList.add("show"),
                                    i.default(e._element).trigger("shown.bs.toast"),
                                    e._config.autohide &&
                                        (e._timeout = setTimeout(function () {
                                            e.hide();
                                        }, e._config.delay));
                            };
                            if ((this._element.classList.remove("hide"), u.reflow(this._element), this._element.classList.add("showing"), this._config.animation)) {
                                var r = u.getTransitionDurationFromElement(this._element);
                                i.default(this._element).one(u.TRANSITION_END, n).emulateTransitionEnd(r);
                            } else n();
                        }
                    }),
                    (t.hide = function () {
                        if (this._element.classList.contains("show")) {
                            var e = i.default.Event("hide.bs.toast");
                            i.default(this._element).trigger(e), e.isDefaultPrevented() || this._close();
                        }
                    }),
                    (t.dispose = function () {
                        this._clearTimeout(),
                            this._element.classList.contains("show") && this._element.classList.remove("show"),
                            i.default(this._element).off("click.dismiss.bs.toast"),
                            i.default.removeData(this._element, "bs.toast"),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (t._getConfig = function (e) {
                        return (e = a({}, mt, i.default(this._element).data(), "object" == typeof e && e ? e : {})), u.typeCheckConfig("toast", e, this.constructor.DefaultType), e;
                    }),
                    (t._setListeners = function () {
                        var e = this;
                        i.default(this._element).on("click.dismiss.bs.toast", '[data-dismiss="toast"]', function () {
                            return e.hide();
                        });
                    }),
                    (t._close = function () {
                        var e = this,
                            t = function () {
                                e._element.classList.add("hide"), i.default(e._element).trigger("hidden.bs.toast");
                            };
                        if ((this._element.classList.remove("show"), this._config.animation)) {
                            var n = u.getTransitionDurationFromElement(this._element);
                            i.default(this._element).one(u.TRANSITION_END, t).emulateTransitionEnd(n);
                        } else t();
                    }),
                    (t._clearTimeout = function () {
                        clearTimeout(this._timeout), (this._timeout = null);
                    }),
                    (e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var n = i.default(this),
                                r = n.data("bs.toast");
                            if ((r || ((r = new e(this, "object" == typeof t && t)), n.data("bs.toast", r)), "string" == typeof t)) {
                                if (void 0 === r[t]) throw new TypeError('No method named "' + t + '"');
                                r[t](this);
                            }
                        });
                    }),
                    o(e, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return pt;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return mt;
                            },
                        },
                    ]),
                    e
                );
            })();
        (i.default.fn.toast = gt._jQueryInterface),
            (i.default.fn.toast.Constructor = gt),
            (i.default.fn.toast.noConflict = function () {
                return (i.default.fn.toast = ht), gt._jQueryInterface;
            }),
            (e.Alert = f),
            (e.Button = h),
            (e.Carousel = w),
            (e.Collapse = k),
            (e.Dropdown = Ne),
            (e.Modal = Ie),
            (e.Popover = tt),
            (e.Scrollspy = ct),
            (e.Tab = dt),
            (e.Toast = gt),
            (e.Tooltip = Xe),
            (e.Util = u),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function (e, t) {
        "object" == typeof exports && "object" == typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? (exports.ClipboardJS = t()) : (e.ClipboardJS = t());
    })(this, function () {
        return (
            (n = {}),
            (e.m = t = [
                function (e, t) {
                    e.exports = function (e) {
                        var t;
                        if ("SELECT" === e.nodeName) e.focus(), (t = e.value);
                        else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
                            var n = e.hasAttribute("readonly");
                            n || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), n || e.removeAttribute("readonly"), (t = e.value);
                        } else {
                            e.hasAttribute("contenteditable") && e.focus();
                            var i = window.getSelection(),
                                r = document.createRange();
                            r.selectNodeContents(e), i.removeAllRanges(), i.addRange(r), (t = i.toString());
                        }
                        return t;
                    };
                },
                function (e, t) {
                    function n() {}
                    (n.prototype = {
                        on: function (e, t, n) {
                            var i = this.e || (this.e = {});
                            return (i[e] || (i[e] = [])).push({ fn: t, ctx: n }), this;
                        },
                        once: function (e, t, n) {
                            var i = this;
                            function r() {
                                i.off(e, r), t.apply(n, arguments);
                            }
                            return (r._ = t), this.on(e, r, n);
                        },
                        emit: function (e) {
                            for (var t = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, r = n.length; i < r; i++) n[i].fn.apply(n[i].ctx, t);
                            return this;
                        },
                        off: function (e, t) {
                            var n = this.e || (this.e = {}),
                                i = n[e],
                                r = [];
                            if (i && t) for (var o = 0, a = i.length; o < a; o++) i[o].fn !== t && i[o].fn._ !== t && r.push(i[o]);
                            return r.length ? (n[e] = r) : delete n[e], this;
                        },
                    }),
                        (e.exports = n),
                        (e.exports.TinyEmitter = n);
                },
                function (e, t, n) {
                    var i = n(3),
                        r = n(4);
                    e.exports = function (e, t, n) {
                        if (!e && !t && !n) throw new Error("Missing required arguments");
                        if (!i.string(t)) throw new TypeError("Second argument must be a String");
                        if (!i.fn(n)) throw new TypeError("Third argument must be a Function");
                        if (i.node(e))
                            return (
                                (d = t),
                                (h = n),
                                (f = e).addEventListener(d, h),
                                {
                                    destroy: function () {
                                        f.removeEventListener(d, h);
                                    },
                                }
                            );
                        if (i.nodeList(e))
                            return (
                                (l = e),
                                (u = t),
                                (c = n),
                                Array.prototype.forEach.call(l, function (e) {
                                    e.addEventListener(u, c);
                                }),
                                {
                                    destroy: function () {
                                        Array.prototype.forEach.call(l, function (e) {
                                            e.removeEventListener(u, c);
                                        });
                                    },
                                }
                            );
                        if (i.string(e)) return (o = e), (a = t), (s = n), r(document.body, o, a, s);
                        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
                        var o, a, s, l, u, c, f, d, h;
                    };
                },
                function (e, t) {
                    (t.node = function (e) {
                        return void 0 !== e && e instanceof HTMLElement && 1 === e.nodeType;
                    }),
                        (t.nodeList = function (e) {
                            var n = Object.prototype.toString.call(e);
                            return void 0 !== e && ("[object NodeList]" === n || "[object HTMLCollection]" === n) && "length" in e && (0 === e.length || t.node(e[0]));
                        }),
                        (t.string = function (e) {
                            return "string" == typeof e || e instanceof String;
                        }),
                        (t.fn = function (e) {
                            return "[object Function]" === Object.prototype.toString.call(e);
                        });
                },
                function (e, t, n) {
                    var i = n(5);
                    function r(e, t, n, r, o) {
                        var a = function (e, t, n, r) {
                            return function (n) {
                                (n.delegateTarget = i(n.target, t)), n.delegateTarget && r.call(e, n);
                            };
                        }.apply(this, arguments);
                        return (
                            e.addEventListener(n, a, o),
                            {
                                destroy: function () {
                                    e.removeEventListener(n, a, o);
                                },
                            }
                        );
                    }
                    e.exports = function (e, t, n, i, o) {
                        return "function" == typeof e.addEventListener
                            ? r.apply(null, arguments)
                            : "function" == typeof n
                            ? r.bind(null, document).apply(null, arguments)
                            : ("string" == typeof e && (e = document.querySelectorAll(e)),
                              Array.prototype.map.call(e, function (e) {
                                  return r(e, t, n, i, o);
                              }));
                    };
                },
                function (e, t) {
                    if ("undefined" != typeof Element && !Element.prototype.matches) {
                        var n = Element.prototype;
                        n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
                    }
                    e.exports = function (e, t) {
                        for (; e && 9 !== e.nodeType; ) {
                            if ("function" == typeof e.matches && e.matches(t)) return e;
                            e = e.parentNode;
                        }
                    };
                },
                function (e, t, n) {
                    "use strict";
                    n.r(t);
                    var i = n(0),
                        r = n.n(i),
                        o =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  };
                    function a(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    function s(e) {
                        !(function (e, t) {
                            if (!(e instanceof s)) throw new TypeError("Cannot call a class as a function");
                        })(this),
                            this.resolveOptions(e),
                            this.initSelection();
                    }
                    var l =
                            ((function (e, t, n) {
                                t && a(e.prototype, t);
                            })(s, [
                                {
                                    key: "resolveOptions",
                                    value: function (e) {
                                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                                        (this.action = t.action), (this.container = t.container), (this.emitter = t.emitter), (this.target = t.target), (this.text = t.text), (this.trigger = t.trigger), (this.selectedText = "");
                                    },
                                },
                                {
                                    key: "initSelection",
                                    value: function () {
                                        this.text ? this.selectFake() : this.target && this.selectTarget();
                                    },
                                },
                                {
                                    key: "selectFake",
                                    value: function () {
                                        var e = this,
                                            t = "rtl" == document.documentElement.getAttribute("dir");
                                        this.removeFake(),
                                            (this.fakeHandlerCallback = function () {
                                                return e.removeFake();
                                            }),
                                            (this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0),
                                            (this.fakeElem = document.createElement("textarea")),
                                            (this.fakeElem.style.fontSize = "12pt"),
                                            (this.fakeElem.style.border = "0"),
                                            (this.fakeElem.style.padding = "0"),
                                            (this.fakeElem.style.margin = "0"),
                                            (this.fakeElem.style.position = "absolute"),
                                            (this.fakeElem.style[t ? "right" : "left"] = "-9999px");
                                        var n = window.pageYOffset || document.documentElement.scrollTop;
                                        (this.fakeElem.style.top = n + "px"),
                                            this.fakeElem.setAttribute("readonly", ""),
                                            (this.fakeElem.value = this.text),
                                            this.container.appendChild(this.fakeElem),
                                            (this.selectedText = r()(this.fakeElem)),
                                            this.copyText();
                                    },
                                },
                                {
                                    key: "removeFake",
                                    value: function () {
                                        this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), (this.fakeHandler = null), (this.fakeHandlerCallback = null)),
                                            this.fakeElem && (this.container.removeChild(this.fakeElem), (this.fakeElem = null));
                                    },
                                },
                                {
                                    key: "selectTarget",
                                    value: function () {
                                        (this.selectedText = r()(this.target)), this.copyText();
                                    },
                                },
                                {
                                    key: "copyText",
                                    value: function () {
                                        var e = void 0;
                                        try {
                                            e = document.execCommand(this.action);
                                        } catch (t) {
                                            e = !1;
                                        }
                                        this.handleResult(e);
                                    },
                                },
                                {
                                    key: "handleResult",
                                    value: function (e) {
                                        this.emitter.emit(e ? "success" : "error", { action: this.action, text: this.selectedText, trigger: this.trigger, clearSelection: this.clearSelection.bind(this) });
                                    },
                                },
                                {
                                    key: "clearSelection",
                                    value: function () {
                                        this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.removeFake();
                                    },
                                },
                                {
                                    key: "action",
                                    set: function (e) {
                                        var t = 0 < arguments.length && void 0 !== e ? e : "copy";
                                        if (((this._action = t), "copy" !== this._action && "cut" !== this._action)) throw new Error('Invalid "action" value, use either "copy" or "cut"');
                                    },
                                    get: function () {
                                        return this._action;
                                    },
                                },
                                {
                                    key: "target",
                                    set: function (e) {
                                        if (void 0 !== e) {
                                            if (!e || "object" !== (void 0 === e ? "undefined" : o(e)) || 1 !== e.nodeType) throw new Error('Invalid "target" value, use a valid Element');
                                            if ("copy" === this.action && e.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
                                            if ("cut" === this.action && (e.hasAttribute("readonly") || e.hasAttribute("disabled")))
                                                throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
                                            this._target = e;
                                        }
                                    },
                                    get: function () {
                                        return this._target;
                                    },
                                },
                            ]),
                            s),
                        u = n(1),
                        c = n.n(u),
                        f = n(2),
                        d = n.n(f),
                        h =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  };
                    function p(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            (i.enumerable = i.enumerable || !1), (i.configurable = !0), "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
                        }
                    }
                    var m =
                        ((function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } })), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
                        })(g, c.a),
                        (function (e, t, n) {
                            t && p(e.prototype, t), n && p(e, n);
                        })(
                            g,
                            [
                                {
                                    key: "resolveOptions",
                                    value: function (e) {
                                        var t = 0 < arguments.length && void 0 !== e ? e : {};
                                        (this.action = "function" == typeof t.action ? t.action : this.defaultAction),
                                            (this.target = "function" == typeof t.target ? t.target : this.defaultTarget),
                                            (this.text = "function" == typeof t.text ? t.text : this.defaultText),
                                            (this.container = "object" === h(t.container) ? t.container : document.body);
                                    },
                                },
                                {
                                    key: "listenClick",
                                    value: function (e) {
                                        var t = this;
                                        this.listener = d()(e, "click", function (e) {
                                            return t.onClick(e);
                                        });
                                    },
                                },
                                {
                                    key: "onClick",
                                    value: function (e) {
                                        var t = e.delegateTarget || e.currentTarget;
                                        this.clipboardAction && (this.clipboardAction = null),
                                            (this.clipboardAction = new l({ action: this.action(t), target: this.target(t), text: this.text(t), container: this.container, trigger: t, emitter: this }));
                                    },
                                },
                                {
                                    key: "defaultAction",
                                    value: function (e) {
                                        return v("action", e);
                                    },
                                },
                                {
                                    key: "defaultTarget",
                                    value: function (e) {
                                        var t = v("target", e);
                                        if (t) return document.querySelector(t);
                                    },
                                },
                                {
                                    key: "defaultText",
                                    value: function (e) {
                                        return v("text", e);
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), (this.clipboardAction = null));
                                    },
                                },
                            ],
                            [
                                {
                                    key: "isSupported",
                                    value: function (e) {
                                        var t = 0 < arguments.length && void 0 !== e ? e : ["copy", "cut"],
                                            n = "string" == typeof t ? [t] : t,
                                            i = !!document.queryCommandSupported;
                                        return (
                                            n.forEach(function (e) {
                                                i = i && !!document.queryCommandSupported(e);
                                            }),
                                            i
                                        );
                                    },
                                },
                            ]
                        ),
                        g);
                    function g(e, t) {
                        !(function (e, t) {
                            if (!(e instanceof g)) throw new TypeError("Cannot call a class as a function");
                        })(this);
                        var n = (function (e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
                        })(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this));
                        return n.resolveOptions(t), n.listenClick(e), n;
                    }
                    function v(e, t) {
                        var n = "data-clipboard-" + e;
                        if (t.hasAttribute(n)) return t.getAttribute(n);
                    }
                    t.default = m;
                },
            ]),
            (e.c = n),
            (e.d = function (t, n, i) {
                e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: i });
            }),
            (e.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (e.t = function (t, n) {
                if ((1 & n && (t = e(t)), 8 & n)) return t;
                if (4 & n && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if ((e.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t))
                    for (var r in t)
                        e.d(
                            i,
                            r,
                            function (e) {
                                return t[e];
                            }.bind(null, r)
                        );
                return i;
            }),
            (e.n = function (t) {
                var n =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return e.d(n, "a", n), n;
            }),
            (e.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (e.p = ""),
            e((e.s = 6)).default
        );
        function e(i) {
            if (n[i]) return n[i].exports;
            var r = (n[i] = { i: i, l: !1, exports: {} });
            return t[i].call(r.exports, r, r.exports, e), (r.l = !0), r.exports;
        }
        var t, n;
    }),
    document.querySelector("#plan-monthly") &&
        document.querySelector("#plan-monthly").addEventListener("click", function () {
            document.querySelectorAll(".plan-monthly").forEach((e) => e.classList.add("d-block")), document.querySelectorAll(".plan-yearly").forEach((e) => e.classList.remove("d-block"));
        }),
    document.querySelector("#plan-yearly") &&
        document.querySelector("#plan-yearly").addEventListener("click", function () {
            document.querySelectorAll(".plan-yearly").forEach((e) => e.classList.add("d-block")), document.querySelectorAll(".plan-monthly").forEach((e) => e.classList.remove("d-block", "plan-preload"));
        });
let updateSummary = (e) => {
    0 == e
        ? (document.querySelectorAll(".checkout-monthly").forEach(function (e) {
              e.classList.add("d-inline-block");
          }),
          document.querySelectorAll(".checkout-yearly").forEach(function (e) {
              e.classList.remove("d-inline-block");
          }))
        : (document.querySelectorAll(".checkout-monthly").forEach(function (e) {
              e.classList.remove("d-inline-block");
          }),
          document.querySelectorAll(".checkout-yearly").forEach(function (e) {
              e.classList.add("d-inline-block");
          }));
};
if (
    (document.querySelector("#current-plan") &&
        document.querySelector("#current-plan").addEventListener("input", function () {
            document.querySelectorAll(".plan-monthly").forEach((e) => e.classList.remove("plan-preload")),
                document.querySelectorAll(".plan-toggle").forEach(function (e) {
                    e.classList.add("d-none");
                }),
                document.querySelectorAll(".plan-toggle" + this.value).forEach(function (e) {
                    e.classList.remove("d-none");
                });
        }),
    document.querySelector("#payment-form"))
) {
    let e = document.querySelector("#payment-form").elements.interval;
    for (var i = 0, max = e.length; i < max; i++)
        e[i].checked && updateSummary(e[i].value),
            (e[i].onchange = function () {
                history.pushState(null, null, this.dataset.periodUrl), document.querySelector("#payment-form").setAttribute("action", this.dataset.formUrl), updateSummary(this.value);
            });
}
document.querySelector("#coupon") &&
    document.querySelector("#coupon").addEventListener("click", function (e) {
        e.preventDefault(), this.classList.add("d-none"), document.querySelector("#coupon-input").classList.remove("d-none"), document.querySelector('input[name="coupon"]').removeAttribute("disabled");
    }),
    document.querySelector("#coupon-cancel") &&
        document.querySelector("#coupon-cancel").addEventListener("click", function (e) {
            e.preventDefault(),
                document.querySelector("#coupon").classList.remove("d-none"),
                document.querySelector("#coupon-input").classList.add("d-none"),
                document.querySelector('input[name="coupon"]').setAttribute("disabled", "disabled");
        }),
    document.querySelector("#search-filters") &&
        document.querySelector("#search-filters").addEventListener("click", function (e) {
            e.stopPropagation();
        }),
    document.querySelectorAll('input[name="privacy"]').forEach(function (e) {
        e.addEventListener("click", function () {
            this.checked && 2 == this.value
                ? (document.querySelector("#passwordInput").classList.remove("d-none"), document.querySelector("#passwordInput").classList.add("d-block"))
                : (document.querySelector("#passwordInput").classList.add("d-none"), document.querySelector("#passwordInput").classList.remove("d-block"));
        });
    }),
    document.querySelectorAll('[data-target="#deleteWebsiteModal"]').forEach(function (e) {
        e.addEventListener("click", function () {
            (document.querySelector("#deleteWebsiteMessage").textContent = this.dataset.text), document.querySelector("#deleteWebsiteModal form").setAttribute("action", this.dataset.action);
        });
    });
let getCookie = (e) => {
        e += "=";
        for (var t = decodeURIComponent(document.cookie).split(";"), n = 0; n < t.length; n++) {
            for (var i = t[n]; " " == i.charAt(0); ) i = i.substring(1);
            if (0 == i.indexOf(e)) return i.substring(e.length, i.length);
        }
        return "";
    },
    setCookie = (e, t, n, i) => {
        document.cookie = e + "=" + t + ";expires=" + new Date(n).toUTCString() + ";path=" + i;
    };
jQuery('[data-enable="tooltip"]').tooltip({ animation: !0, trigger: "hover", boundary: "window" }),
    jQuery('[data-enable="tooltip-copy"]').tooltip({ animation: !0 }),
    window.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll("[data-password]").forEach(function (e) {
            e.addEventListener("click", function (e) {
                let t = document.querySelector("#" + this.dataset.password);
                "password" === t.type
                    ? ((t.type = "text"), jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordHide).tooltip("show"))
                    : ((t.type = "password"), jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.passwordShow).tooltip("show"));
            });
        });
    }),
    document.querySelectorAll('[data-enable="tooltip-copy"]').forEach(function (e) {
        e.addEventListener("click", function (e) {
            jQuery(this).tooltip("hide").attr("data-original-title", this.dataset.copied).tooltip("show");
        }),
            e.addEventListener("mouseleave", function () {
                this.setAttribute("data-original-title", this.dataset.copy);
            });
    }),
    (Number.prototype.format = function (e, t, n, i) {
        let r = "\\d(?=(\\d{" + (t || 3) + "})+" + (e > 0 ? "\\D" : "$") + ")",
            o = this.toFixed(Math.max(0, ~~e));
        return (i ? o.replace(".", i) : o).replace(new RegExp(r, "g"), "$&" + (n || ","));
    });
let commarize = (e, t) => {
    if (e >= (t = t || 1e3)) {
        let t = ["K", "M", "B", "T"],
            n = Math.floor(Math.log(e) / Math.log(1e3)),
            i = t[n - 1];
        return Number((e / 1e3 ** n).toFixed(2)) + i;
    }
    return e.toLocaleString();
};
document.querySelectorAll(".slide-menu-toggle").forEach(function (e) {
    e.addEventListener("click", function () {
        document.querySelector("#slide-menu").classList.toggle("active");
    });
});

